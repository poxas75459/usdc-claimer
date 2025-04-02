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
    "4uVzaUpqHbCVFzMVtkyb5vujWFQaGMeXhsjeqdJeoZzCC7qVu1xH8s8TPmo5GGm1RX6j3rorZHaRzHDgEva5AuuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3YdB6TWPVDJ6ibnE5ADzWwfzBLj9CJnjuzL1PWWmoqs2a2tGyB6S1Ni71A7temoN6pJxGnjuiuadsg8jtqT1tT",
  "key1": "276sgeJpVYyUbNKyVZY31oqVxXzo9DUNjkt3K3R5VhxQeiRMPRZ6ojJoiDAfJx9pYmEPw54Udjdj7rydr4qqAkdP",
  "key2": "4nPY4XjJ9uE6dPYihCBXF1ND2tyv6MQnSrozc9jTQSLmeBqMmAXatufUMru8U121fBxU2YgHjBjC9YzmfmzbH7ma",
  "key3": "ENE3jMVuSGpPUABk36TfxjGQvxcCx47Az9wv1nfyaWpm5XdWbyQvnQ1e5f2BqBqQin7ZxPGrcdHP5YZUnrRSXAF",
  "key4": "hhCEk1rwtASCk4BXoJrK4srt3XJbdTc6aBi9RGeiRmDkAonhXLbpvb6yagRjCb2tkPiANm14At8FcL7CRHpYqQJ",
  "key5": "3VksvFduDKX7cDUckGaV8fGtxVUKbKB6Tscd1888hoULt31VUJTgVoRjYp7n9aNTEeRZCUxoT1mewwob3DpigWPE",
  "key6": "4cFagHNEyopzWXHDpbmz2yg2pVfn2hdMc14cReWBTcmJyCRgQDzEthBHkXkAn1ehApsmHY7W874iPV6ryTVNXtor",
  "key7": "2ZWfTWJeAXRF4nGiHRhNdhh71WJPma1utNW6dQNBS7VDhf9egi53eSsFPY36gtA9eAqcfcBdKGAcZM5M85vjgrn7",
  "key8": "4zt37AYWUmS1sh6KyGrLoSTeLJaMqsau57gHJXjiAhskyjqwNxQ3qpdHPbDWuu7oreAjc6gJQ9wDhffYmZTicZ5D",
  "key9": "4aWq9KDSHTcwSUPWfHsmBYtqahswXkAKAHp6jLFEj75C7B8AudV8NPcmkKAkK3Po8XjFYGXmp3FureWB67BVqsDp",
  "key10": "fuqbZLoPXhRxbegrPmbDQGBqVnLXRJwRZB1PZV35CBRXCbKNrQZruJLrbqpX8n4tPVbUwxyTufym7xE6mwNw68X",
  "key11": "5gaMCrrmd5j5dG7CZcViWKMdxsr3P94dDwQ1pTmU8mRGdwRPYJEpw3y4q3myFcEQdM1DBfhncGSHkXKsQ1xVhTb5",
  "key12": "23eKABZALy3GYu2YGULhJV4WAT9LhtqCU18eTVhdPX8C53vfjgV1YTbnbjxdQxUxiB2xo9D7BtJC8Y47PJwexLGk",
  "key13": "23XJRAQEvTguXfRrFtE9y7njfd3Hvkavn4fcqmUAbBV5dqt84KkiosLLH7xup1QG3wZPW64T3mKcGUzrfPYKqaTZ",
  "key14": "2vZ6WBgBqWCFgJ9B5yWof5ysaJjVFmJJDaBtXz64grpof2LGojgGNf9Y3XtWzx5JAfqMSAAvmnxELMgDRW3CPuvB",
  "key15": "4f8kSU3cKASboEUKkEDaqUxwTmY962yYbse5aSZLCADAACZFPsFLgRFpWjzvzH6wDuWuWYQ9EZwcdoTyh3fMxViA",
  "key16": "4XkSPvztgHKDCGfBSBvw2BZsM4kJbRnCTKUoyadcvXZsMU7sUGjVMkYu9qYh6YbRQfM8qeS85fJtCLEiAxJ5RD1C",
  "key17": "azwrJLVPtbhDuXxdHXWAiHs9hfSfeADwgKd1Y4r2pQsLSuR7jBggJiGkNUxJeh7AUW2CpxsLS3LXrfoA5XNdD7E",
  "key18": "3SPduFxPBNfCZKcJRP1SHasarcHhUG9yKfGKxNHubXEAHNukcf7vhqz6LWipas5h52kqybj39nUwbLYTRDVkhAXe",
  "key19": "4mJAVgYsEnTXMu7gU4muYrgS9cysbBofhTYm2eDb1DcApg9ZnxXuSZCgudXztywnQfF1HQHjkAAPcicJhiHBsvEC",
  "key20": "3icje8DwcaXAZDEyf8ZxXMiCHJqnPxW1tZTxyCfQNuVBn3D3HAXaoz6zGWTY3kxbYjUV39pDUon6FjQbnmoU3yKZ",
  "key21": "3t1DdEKCF8DxNJYGuAfmp3ZzYP5Z2xTUtZG2yX9kyXT2pUbr1ZbnuKfBiCxxr2uhAQxqF6oJVRB7XAPEzH2SU3TB",
  "key22": "7M9HEjdRpZNDGrAnTcK8qnqKef2AGx6SbwJMixWNfyPGDy2f3ePUV6zqA7M8FQp5R6za8gc2WXbx7Qq4g6zZX7V",
  "key23": "5UA7eSB8htsf538xjTeYdpdTmCVf3Tbsvh4DeFLZF4jvkfpNaro9terUXGDfZ4ShWshZk1EutpkfDngX6CQu3J23",
  "key24": "4XMXwrrBhsHjHTyAxPmyLQf4qRvKopLaF7iAacFNkJmdGViVhoXUvsRkN48Mo2zw5ubY7sJkTSEfUZXKFZmXUvpm",
  "key25": "58CKhMAD9FgQfeXfmSoTJUajCYYYjUrmffu3NhVNdj5tBYEFM9YScCsyXtqFTNa42zcocRxByzmfqmFv6DJvafTt"
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
