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
    "4okDWfKNfEg2KypivZ7xsWyoL1vqVhqEdTy87MM8v9QLF8AAy6AkVkE3d2LA98YFkJZLk6BkwVgLGTc9usaUzBpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4Bqm56wKNBgQisrNWz8Tw9vwDTtnxyhS9Jzeo4YXL98ZHgJkYLNUZsMu4eKgc3cryM1NbtvSFRKvdXst1HBHpi",
  "key1": "2BDN3RyZAA3vxjNXzyQfk4gXHiDvtyFsGtqVUgQ43mDz8ye6sZYJruoHeaN9kSrYX7BcLMFDMcFVg4YXxGTTYXbe",
  "key2": "2F813xZ7rnjN9EHExpPcv29qThSiPYwpDEt4tkMgw2v6MDskHVL1JmjJnrDvud8cMYQFUAJwqZDqpQs17ubTgsH8",
  "key3": "5vYBS7bHE4i6cZB6AeVM7WAFV5WAvbuWog33KsbVvxkEpamT7t6bhz8xYqirF6Za3DKhmbUvspFZxtkWm3UzuHB5",
  "key4": "jdwLxJN5yy1nsEz9twT1BHsPubRnShdUm9YA8b571x3YAVP61K6MCddyKC2g6tP1LyYmFKLNzKJVNxNsBCKeziT",
  "key5": "3FL1hTq8CVW6jrAdAsysDkp5wi9v1gEQUtT28Ap556GpNEGrKJpLwWtwFC77YrWhd8WVjJkSwt9oXK2qbcoJLY4X",
  "key6": "5pydJUyfJgYxGyg4jyKNJdrY1S69owTZW8cKzDPTcWwhDHDjfX9c6z8AR8LvK7Z5t71GbgxSwEdpW2hwESQfXP3P",
  "key7": "46Uhe84SmJedF4n9xcFbJDFhmTPVvMuicnGv2yTeQjbvUQHodYJh8KnsXQPUauM2oJjKoTa2Vib5ceGwnsKjehLu",
  "key8": "qy4UCF1AXqA5v7DHgrUQEXVHtWHGvZV7qrZApJUm8Zc5EvAqSQEWMv9ZbvfgCsrjpeSi9GBpEC8FV1xKbyZbHzc",
  "key9": "byqdNzQuJk3XYkW12AAnaYTD8e6MJsdg9gixSTnkje1ygeKnTqMnkntjSs2ACSnaX8cN3WY2Ta46WUfTUVANRVE",
  "key10": "CMnxSkkxQj9cbKz8VJCRHy5vuG7d2hUKNo14XwDGpBXDzN65RExcbEA1ijN1Cdgv8eY1cqfWt2WQk6wFTPpVpX3",
  "key11": "4QbaB4ntKV5VkTwNCwpTDG1cHnGfSkymiPoSyABaS9GdW86RFJFgLX4DMm8E83hiRRM8AYTfsaJQCiWv6GajAjXa",
  "key12": "5Pj2eDYn8TYSJEAB2ucr57X9L3aZ17ZeMvFAPEAeFCtqa5AcEGy1WiYQDut3Fhyo861gtJAPehxggtbdXam9hHxx",
  "key13": "3HNWmWEt8drSXYCBXwy86eDwUh6K4HSt3R1ggbZbpYGkFV4gjBXe43ABikucGyff2yFKnY7fZzRdqKRRoFPUg1C5",
  "key14": "2cw7hapfZP61nGm7VCHnnB1f4cfdLjHuWDmspsVB3T3A4DKJbFjfaR566XjxxYNxqT2JS6LXrXSiK2HSUns5pM8A",
  "key15": "29cjW3CKrAiqomTzYzpYwSUt1QLt7zBZDefiRTFD82vHJbDx5LPt6RVFZxpZsBXQmuD92iWHMG4mkNFGn9VbVo5c",
  "key16": "PYgeh7wXk5VV4oLQ8T1AQmrGozuimknAWHgHdf1j68tBGU6kE5xmQymoMwbgXCcS2a3uuKnJS3f6b5Dy9dR7NfS",
  "key17": "2PkG2GD7sXBo1yzmH3kfoa77aDHMoRsuMxz99qBqn8tcgG6BVgVo9iubHoXwRi6gni6UTUbGbYCt7afe9oLGX2JN",
  "key18": "2QcKMvEvYyKqA9CgwYuYECMXkMK9PtvGwuG74Y1RHx7xzzWyPuAxMEzx3TvCF8LijMrU1nePSTCq3JZFEMWVLisg",
  "key19": "5t47CoRpRe6y6HRQ6Lz5VT8QuqXsgCxQHBD9g22GUTQNR1AsZXh4r1smPKEY6cVkctjsUitRoyDn7kZ3g7zMEt79",
  "key20": "3HDfvGCQA3dhddC6R1Bun6Zx7NyEUNSbu6wFfCvjg1PsiAxqSqHKYcj1rs8eVd8jD7s2BtVrzsRoWa8XPeHijToT",
  "key21": "5Qe4qgdDnbgWrLSbEPzsAGFhHBLKDJXr7sv1nnMPcBcJ3pMxobkGos6o1SKBiAGqJKSTbbH8jyyhsfdowLViJ5fG",
  "key22": "4M2fMUBCVE57DZrG7WKagVsqg5qtU47fZz7HF5WydaEmNRBKeJpNsMqe8FqouVKMDuFhruVb3VEC9BFxMSRNRkXD",
  "key23": "BQjnkbgJKfjCjh5RA9fpt8xcoy2QEghZGsvyD6Ff4ptZx1B5XcJ6NUn89aawEfdMTJVLnQ2iMZdubuYg3Y8vTHx",
  "key24": "3M4QpdiJ2y1fZ2t2nvEkskZCMHfVdTbK9mYcHbK8z9j5QTyajQkew1doBWfg5zwnBEsio2cwpUxHAAZuU3NXuZkD",
  "key25": "5Z9vRUyDyL4DGmsi3aFWraP2G57m48EDWKDb1dZFdTuNRnWUNgzS3NAg17JNuSG13vEfT3wq2jyx9GzEHXt2L7tz"
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
