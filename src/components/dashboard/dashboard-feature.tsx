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
    "463tLKytPM1ygfW6Rwg19KxXupWRamJBbwfXhFFZnD1uoMp6ZvkBzLi4Hex2yj2hUrnGCYBvZJB7y3Qm6QLpsibE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bK8uhHTZnmD46c5ZHWA4jxJgx75Sfgv9dCftcqpvxfojzCjAFZYUQ7Mby9A1UieyFu3GA59Ckqvj2rryL3NCWA2",
  "key1": "3a1pfrUxopgHf4hf1ei7e5BXUKAnJL7rPZJAHoxsX3Ye5hCiJy91bywGgxTr5YGNsgcjEc82VxEnCdCmhW24qi1Z",
  "key2": "3N5V9K3cVNZf8dJqGxVPWcUCFwzyqAz62XEAJb1k8hrcs6bSX9XG1bvVANmWDZdc2VuGo3HN9jwh6ha6m3XDc1x6",
  "key3": "2nmMDPgx9GANr3zpZqGzXf5C8eE38UpAbREG5bvNLNxYLTb5D3M67sZx2g2BKjSg5GErr7F5gVGVw7hGP3ogCEjT",
  "key4": "NV2xAoLj6xJkS1eD8ECzt1oodrmAUSwBvESZhKDWuEwKxcWTWVgPTctE7Xw1xPnhhM9PJFWbZmKBYggzoQkoZ8S",
  "key5": "4U3ibwjviqnz3Wvex6D2bmeVhDh6hxyxk7hHuBJBBajU6jVoK3UFQdYKLmmV4ZuNwzD9RsgMyvrfaFcPLzWFt9mu",
  "key6": "446t6G1YNiGXA1U2ho27bDnXxvRoMjvqo5yHAvbyVaCto2qEScrcqWxPckU6T4J4tKiqH4vLgvL2CZGUwVf4VFTQ",
  "key7": "6cFS4r17RH5kgJ1q46pJaoFyNefNcpGBX4YcwrVpg4pwa99B585ag8XH48RrZ7m2jYuzQmgdpb3JGbsRZJbhvdw",
  "key8": "5b8ZMvxJYJaJUQrB27tvH3b7Ds2eqh86Zdi5YMewsnarfGCJYuj3PXkzieAfrkokvpAuWTHhDJ1hzVZEzgp5DF8T",
  "key9": "61ebvYW4GQhTJ8KPq4FYBCcmjedCEtM2eGLaZ8DW52PrVoA9h3e4JTqjb89oC5iLGpG29su43dktC8w4Rpxmac5Q",
  "key10": "3r8WVPAX9WxiC8qXHuYBXzKqwmFgR1dpcHJbWHPhTp3ZeQfwBjY1pmzUQuAH1e6D1kCMcGSPyyaTiQXQsMPGqtLW",
  "key11": "5xEX2mxEFmc9zKn4w4zYvKfceSkkP5Z988nq8TTucoVYgTWKigndfujx2wW6arDbmnGUfmgQwrqhvJXZZMuRm5kU",
  "key12": "61PSWZQHSHwBQAbcnVvjigm2a4krknfJ2bGwtXKtHg7rtp6wiCQKATNzmNLqb7tLyBfwojHnLw2gBt5U5JoRqovL",
  "key13": "YcMtsadERGaP3qDsAuWx5Gzqfe2RNYD3jUcTRLyMjVoW1TsyWqaCfWyQMotVL9yHopJBGArSToHVPPsJvXMmuau",
  "key14": "241DhQUSjhKgZZA3J1ysLq8Dzzqd8tT9brn9QUEN3CcPGcHhti3F5FTSwvCVEykNKyi6MjuvZrsM5FBSnhe4tLyQ",
  "key15": "4iq9dz5U2iVg1frTtLNxo7USkKy592FURvnq2qSW4uvcoYP8b3jMj7KYXdhEsNgsyzxm9z4ch3RGEq8KQgR6RwAW",
  "key16": "4yYFq5DecGTu14E4oqdYFEz73jTsa4UjJzCw46LvF1iS2if1rHjNmi6v8sBnEiMDnEdjdg93Ujqhg1UyLJizmPBJ",
  "key17": "4BfARrQkVX4zZcRxeQ8JZyPALAFY35wbUv7QawJRuMabiUcwU6UW1RPDuDZjFmtRyrAh9QeSH9PvjBJi9g7fgFCk",
  "key18": "22gRWnSKECR7ddKwWokX84XnevQ2KH4rxk9GNoLU41Kb92seQgfLnma5BSvf9hR5crN6wVu74npo8HWJ5X6RYiDq",
  "key19": "45G2M8Y9JZXfKN2yB2KMkPLdorZLk4QAJmcKr8iwFgHk3uyFfYwQw4VytQ2WdXRygxMHxk21gdJkneukFaTn2v3t",
  "key20": "Xii1XsxjVTHk1gMvrZXiM9YZ9eNZJMXchrzX5fLfa34WKuYoZ7Mk8W4HjYDtxjJsGAS3xXoR9grVHgTvwAxGAKV",
  "key21": "4zjN9DdiRTFEdvdxyA75WNVvafPNxa937WBEZBsDSngKuT9dYWfdr9VhWwARfq9E7umAv2zLA1oih6imzUDFBmVh",
  "key22": "3h6brQ9kfvZEimz7mGyrZC8st7DzunaXL64RMjvD5bk9s6AQpAhWFcCLtVVUoqiCPVHwpN9tFvXGtAwzmEb41mkM",
  "key23": "q7keE6LBuWLDwstRmqKHdtPBGQ1HN6tfuCVad1iZ43UokUqfUwgmz9xzfdbVb58LT9LSJKnN6cMcMwYJbxV5e6E",
  "key24": "5DFC2QdvbzNUuYo535JcySn96HtrffC94L8c7ZQx5nXzZ5a4X4J1FmWEgfFksb154bbUU33VEQbL4owL76gxWSi7",
  "key25": "5nUBdZbrmvffpCekqtmqYzM8ijYniHYtnRFGehjsN4xSPRgGvHt8tXLnkRGHitCk7d8wHwswyJXG16dgjV1Lz4L",
  "key26": "VhVX7TgwCXth6p36GRJj9pEMEWUrbgjEKgksA75JbNSTAGYA5oKPuXwGiGHVEyA5aUdjog46LV3u2SRPzu1cQiS"
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
