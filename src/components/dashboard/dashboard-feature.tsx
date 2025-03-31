/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "66Q1eX7Zyn4C7ucGAb2yvt43L3ZNUibhxcQyC1Z23eaw9TrZUiZWRwsLDMdZCT74df8m6FSmZiBvZb7T99ZNnP4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYA3qVLw3fbtnkc663xjfQw6KWbuvfpCwG8j4o7BwxC8hMxwcjdBun9inYopow91zqJwqiowa3RqBhHkCKSEiDQ",
  "key1": "bTp7tr2pRAB5BkRqNxBj4zai3HGC4GoKEkbAjekpD7v2UvVBLZhTSFc46yWcj5WtntdZx4qTWK2Qs4AwKgXpb2Q",
  "key2": "5AtySxhGufHQDEwXc25G2qgGGPV7TWX8fUrYdaGwUreS5ruYsmuktMkLwTgb32XYbMEE8UyboxXRKzuSEtPu5ubf",
  "key3": "61xXv4YBYPuzXYTV4cfoGjxKMh16GWaZUqrufvfuBPsjXWZDrgTuB5ZTnMWnFokQtmJvUckQN5fqzZuj6z13ugu",
  "key4": "52iEEUHTDY4NuhssZYUNtNdvnnfVWE69hnRDfrjMKF3bPcZnckhSk6ruUYaCva7UNDcGi4SWBL4xVd85bsrUicT6",
  "key5": "53TYExkDgEFiZ5kXwTAoEPxZe9rhmcN9v5M33RDnFPZvEQiE6kGq4YB6xj7RzS4SyRwGS5Eh8PbAgzPtKaQcMYVG",
  "key6": "5jdZhRHZCZDA952jYfEixfvewHbaJ4AtWqs6tLtmv9KLToMvddYoWfYTRXaiTQ3PecVHqQeUXZMqj3CKvMkSeWL6",
  "key7": "2GKACjbwg5EFuCCK5bJr36fv1RuLkxSr4LGbJeZMyFLEjYTHFesHeS5z7ESr18t7XeRQzee32sQZAUSxeeLhuC3X",
  "key8": "imtKP5ueT6QvyVevRXQA35i1Cq78LghpZbzigajofHRk9W4LxUtWkHgXsKzLSBupx8bm6uDXnMcXFav6gRYwcfa",
  "key9": "43zTnoD57kDk79xD1VnQ4qrYfmpQFySz9mQwTsCVurqqgoQDxVmVGrUEkaNYAk8Aioz7XW8QWqHQTsyAa1PzENTV",
  "key10": "4uHRpZo25o9f3p9x39Y82fjfjP6YXqpMGvxTqQaCM86oHJjuZXiKBY5nbE8KTwSA8uUPARZSpV2PTcEJ4yp3V7E7",
  "key11": "47L6RdGPgZgo8LMupJ9reT7XRRdo7u9xPxdXm58EU9QibBthQ5wRsJVM5Tagz46JjBhaT4zMQWtxz2Q5gZ99kMaq",
  "key12": "2cS8ASsjvh8ZZCkUuSJkRDLx6x4XzMSMqbi2ob892W1QfvGcnTqG18YHu3ebPTLzkxgKhcPUVAVHTC1CB63DTKSZ",
  "key13": "Xe1nDBWPDEU2AUfKu866Jy3Bqr5GnNpJv4MtMVUDCtBwnfbSGKnyDKmhNPmYukgXrD3zFWTssxRhDjEUYZV4Yai",
  "key14": "62WUtkyCQYvPc7TppgmBed8uDsgfSMWXFDW3ytqiEPjhb5Ee9pEtF9vAk4VrUV4EZ7tQkYExRqtNk2iBjCWTHzNa",
  "key15": "4sMX7Nupd4pBEeXhjbnQjJJsGLWaDT7rKfiJy9S2aeHNyWq6H3uC4sd9FszweQb2nbKHjcqHvHc5cwzMQ5YKF8yf",
  "key16": "3ss1j9rzoW5FWSektxYZ125p42EsTgLhtU4ftDj9rWWedxeVgryQSpXs5C2eo1ju2uNi75DRJS9UFEaMVUkB1UQA",
  "key17": "dbEb9QHkGzP5SFE2wBNETBrUEBKZ53h9oFzVfB9VdSUtVB5raQHSBmCumFE9ZVymp7NHF87hWNDvtdL3ABNNqSi",
  "key18": "5XxnS95xdrXgSb4WvDffmhHCBQoN363FicMVj1Yqy5GbDWT23q8PRVmxmEuVR1YooGp5ijgs3ofnmwWWeymhXmPP",
  "key19": "44T5u1J6VGeqcwtDDryXFkR2JnNBVPYH8fSk5aYkt85SentU1TWm2cxE6N6zcKsZsNs3osJqiZNEEXaKABcNDV1k",
  "key20": "4Td35ZbooDmztT2nBWkg4yFfpXAjeTNbhEYvziPDWUbTRNf378e59YTYxzeovEFhKhUMbX16f3sTdMxEh1pFTRg6",
  "key21": "2ZUwtxxFNCqpG4MvxJtvYbUAme93CYyxcPew5EYqg69hqRrLHvEHXn2AvZPr98QjUoyeTu1YYBXrQs2zzcjHtdWp",
  "key22": "5SLM63gha7bC2PZqM9GBQvYA1NXuNrzUu4G36jsSJY9eS94vr3HSvdMBYRKHDRnrQkniAPvQU3z8pnxJBR8DbqnS",
  "key23": "5NvdEH9hxij7LYYrnZJC8JWzPVHdBSxgMXJSTZpvWbcFjFNDwSFnadxuNzLSavG18zeutLHr5UpDZcz4Q2ArKJVh",
  "key24": "J6SPse26PmJWtmsN2cTJVvnzbnwoQJVJFqGsAEX6eKHeVit2Hjmf1g1MKQTBtK2dUVvVgpKVqgL2TWnZ5AAok7D",
  "key25": "5wDi1XpUdDTibZbDgE16UYtnFD7VnpL1rG7JGX7fQnDeyL1S8weBFHfthmevVhiZ3azqS8SAinpuuKCb7t3i7xjj",
  "key26": "61ztvHQrum9ccnUTpA2MFh5aPYbdBzb9F3uTeLyYgkXixUfxLxJJqTfy5R2nig3TmKE1cA9T8cN2uKFNRTMqAdoc",
  "key27": "2D6e4osHSJtafwkZqG9TFBbo2vMTPxeJHBECTatLx8aPCKLYJAGqheY9cjPeGNXxM7ZP11v4CoTAxCbAjmnisuwy",
  "key28": "2Mg7WhrmdonZV19SyKFuTYu6Pvnj6nQtatywconEGaJ6hZQjaYezEuiAi9GECheb6YBTSCMgtdBwSF5v7gM2ysi9",
  "key29": "3pWLy2k7DBALAiTJv9QReUbBrBFf18SQeBG59BB9kiRWVPxhAKwJbSVvZFqWWoPdamxNoPSCfbL7Q5CvuyDwo9ZX",
  "key30": "442TnbKS4eAfrWa7BVQ64pgKDZtsw7qNwhGXktoVSTKq1CnmcT2GZZ9UfiktuFPRTHvkbVqfT9cTXBM35ok6ZaJZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
