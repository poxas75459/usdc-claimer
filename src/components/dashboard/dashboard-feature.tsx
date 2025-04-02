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
    "2FNGkyKMH9SkJ8bf4Yd7N2LhM7Ed4TYyq9zx2u9MXg4mtN8GaY6bKWiRuD9hMrpf37N3ety3dkJWhXG3Qcz4QVyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2c5PTQCWbPvHdiKuceXAsJrUqBPUAnC6J6GwGk3wETvnF1MKQH2fnMHk2zNVwNwUjSZ28uz1HV1yBAXBkrH7Yo",
  "key1": "5GxabEWw6toBHFW53WeYg8Fgbm9Hq6iBoaXtor2sx9o7jFG1x5nnuhaTiqVYNQyZm7YqMfT6QwvyZHDeHiqsE4VE",
  "key2": "3e3qD2UMwEPqDTQxbk7saSh2wYqzQkuXBWRCJxMRwEfwZ46SFrYLA2Rerx7jrb1S9bQX5Jh7SHPNLdZ9Gg7h1vRU",
  "key3": "29XNGAeHTxCMnsedt2Cu6F7bFcH42ea5gPFrLffjaKgU6pVVpSErTYUBkXnsyCLpGeERa7byc5X69xURnw6gdJJd",
  "key4": "2ZpZkJSY5uQoNRmr8q3DKqR2L6gS1j2pGGfkNZEZjigfSqhBb8nVLdipthb3xRm8We4wZYU2cAc8W9SPSjM9oSCV",
  "key5": "4VTUYhWQyBQvuLaUc9rbKYVsTy6t2cJjbYYQjUv19keqgEftxDeDuRi9wfoZmPNPQHP4MALxq3hkuTv3sBAvZnbL",
  "key6": "RYtuweSgf9HYoDfR53E25Q92gcJPYyVmd5ckk4QghYWbpeAurLDnVAvn3ba8YW3TXXVynxL59zC5eAEuMYHKzdi",
  "key7": "5HazawgT8CVRfqM1NjwfiBG6zcEX6jDfALLzGygsc7rDVv8MWoonsGs9kzjc72TuBAVj1vtj5h8xeCx81VBuRSLq",
  "key8": "46wcQTu1wE9HXsTT9pDZbtHpENRgddDZLWBhKAPHuKjBxW8ubSiitqjtwrXguEgnMFfSLT6fxGd5NKXhYntr5Bf4",
  "key9": "4SKWStSruV4CWQjL5Hq7dm6hbCEVh3JvC9dBHVVooqVb8AeBPTp8xD9jvTEMHWzp5BwAisX7gqFeJMqmiopBXQ8M",
  "key10": "48p75R6D9xQxCiybqG1Nexd2RjGBq68Wago8JEExGoLrKXHVpaiPWPkWvyagZ9jm9g8Ryh4xcHVjGkaZR1Wf4qJJ",
  "key11": "ieczmc4sQTqtJJpLtcaGAEDoFR1mttkb6oXqutxPCHakLEaanQR15eQDEXMG1TsDnQdaMwxPubPBeZSaQDrbao5",
  "key12": "QdVfWbhSUefSpxDfmycRZTJWjqxmqhzpg4PYHpEPDM6TKjgJ4iMEX4Awhv5e2VDwaViQd6zUEaDmYAsYGg6KgKd",
  "key13": "51H56uUrrtyUkquvQF3TCR8ipnbsUm4ZXmyJtYRE4eEDkTmTXxH6jAVxB7bB1Eg1bJtvUDeR7GgFr3guaUoAKF6M",
  "key14": "aAhaP2cmxcQGbB6y4EDzJaZqCDCmCfHmYa8uBQ9TsqL1Dkvq3gg3n2e4pZx1BnGGmxhK9zk3uDD5S765Xh7XBx6",
  "key15": "2vw3upwMm6Tr2pdJavWZXz2w486NxZvfBcy6z1qWrjjLJ675shciAMCkrt9XgtQu7QKt8shmhac3XPRthSN1yVri",
  "key16": "5PXCcbFL77KgsgJzgRbyxbiYx3rig8Jn1B6XpEpmYjJXXoaF352cAJJMXXgkY1Le1CWMPVSoBPvsHnZZtiGbsV8C",
  "key17": "BZZZzc27P4Bv2KtMkezaacQKry3D3X4ZfUUNtxL3F73MvS9Fgrm87k6A4Kyhc7opDHWcfN75m2su9HKNbB8xeyf",
  "key18": "58NVSyGLhzcWGymN4KJ3RQfwN8Nsei1sRws3HPLDr33Zwn1wETs3MaUXcL7kzAteSe75r7cw1oxxAwwiSNWn6MMV",
  "key19": "4ETtiLfqVFLHnCkMqhLzUBxYxZRRXwEqgdFXqRevt2LhzLbNjfgoJU3X3tP3FawR6Yq3RvLzPw6k1UQpGVSA4nnA",
  "key20": "4whHn4qEKnkc5gr3HGeX9kpfRFo6sytUokvTXYPiQmYZcFcCFTG9rZNXf3EqSVWiab4SL1GGDx18ma2vokVXgbqX",
  "key21": "3KRmGySADCqamimSedc6s5mUFpCp2CPmDTAHAH3n2iymvf6ieKmMLF3szE61TQamhKccdiRmWc8q51VVRQhBPfP1",
  "key22": "2wG5iqSmg3VfZhWEvoUSfa9qScnbu5Jsknzv7SeEkpGfCaQ9FThcHzVVz9sdPXtVe6vkmEgAd2qGfnd8tRU1barQ",
  "key23": "sNBESKWwDjCLjjxSHqewRfYhH1D5oM8tCpBBdpWRaqv6eitMNdYAcz6WDN7EzQYkFHuquWmeX6KNPs893rH1D3b",
  "key24": "4MjLLisSMqeQkmynCBDcjHxvTGkCeyhPeL8mdDHDLbqyGZkUVwXjxLoQmqAyv2RGRThPqVnPzaKxMehs1rgfW78L",
  "key25": "27mrtr1fnLc29booroedfkWiHrshQ5UwrPKnwvfGziJEekmbAXK7tiFUFRypYwfZYvtQrcz4RJ3sLeXh51YbBoua",
  "key26": "3hiTLrgzkD9Edp2MjTfdcdMqrX22HD8tfrPtEbXCoLWc6La2CD4EJMYgjxgncR6KvnECfrhJR4af8KmSYKhSY9Yw",
  "key27": "RNh35dF2ktqsJpBXLawiBFwVTJceoAupMvqxJeD7UnmwZTEF4My8RGomktKV3fDpmy3v6Y64wEmfC6oinJcXFis",
  "key28": "2ypVBrdN8ZXcuYsGU5rnKx62qTtmGo2do5vVgjEGvBSBBEaYkrFzWHdVDQuwCsPBMGEysipV5HCqjJMCfcZSzJrP"
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
