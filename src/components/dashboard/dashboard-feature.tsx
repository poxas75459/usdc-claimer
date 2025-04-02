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
    "4fMBSVino5HMx6d3FDc62pAKjeLcv4WVin6b3f63R9FzE4wRc98Vru2cCFCdVXKLJiXUi8paxiCphj1KsKtHfYUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jify55q8XnTw57nTZYJfY8DPZaFvq1WwrGFdMFUCject1HwzWHoBFv9Evmhi4Z4exsxV3Uzrz6M9rK1akUaXurW",
  "key1": "XYdcN1mHLFmXK5FRWB3rFjTbWbuthTpByUYksuyYosiXFxq4WrgmRrvgab86tDo8U4tFiQMr4fzq2brWqiQfoj6",
  "key2": "5Qe7onTeHPUY2hf3MHdgWAgtrWJn2fJPaFQjQiT5rtGEj6mZXkiWEptfTmdRnA9c7oNxXL38tze9svfYzJF8ecn4",
  "key3": "52tU727FBYsioh4uK52KMKiTTx5iNfsrZMMpLT2uHHZQz8dbTywnTQGWDWyTtSxfNzk4bGQWB1x5hhkYUbQZvJnt",
  "key4": "4AEfqW1DANSgeK5Eu2F7ksQ5BhAZmvagrzysAhdwQzsd1nXCuHHLbLUawwLfTTYFzYAVU9MEtmtVJfwmQ3Ysaqtb",
  "key5": "3woF9H8BH7xcPokBkJmjkdcMxchLDXWpfshxYQAfYviGhhyZe9teu48xi1coBQhZ5b3GvsYHkd2UUtPBbrfAsp9A",
  "key6": "2fF3jcpv4EbKW8ViBpXymfimLiH9HTKQDCs3nWqSt4ChEaX4L3Kx7NL32PWu94VLFbTK75DTn3JTXLyAoGBt1U9n",
  "key7": "61yQiNqxQgqtzmLfnJo2CUpjckpCDKQY6e21o8TBDt4CiGVxAs22Lh7fNQ34GFEujMVjrqmYXT51AmX7YfpMoUgV",
  "key8": "5yJhdYFvwoJTkP7zfBw3K8WnXm9o66AjBLFwe3CTc59dUM3F9kXiKkcKJm8ggSjzjugxjkFGCp2tCzQkhrbhz7a",
  "key9": "3ebGjVz9jU3jNWVyuVtaogTH7Rvo5wR4rvWAaF6bG9sATUSfqtSGCUB5pmxRV3pyCWp5fD55sXDaar2JkS2G2JFZ",
  "key10": "4boGY1vbQxWuF7khKBLKc3eouKTXqCrcAdCSC5BD3LB7yuraeBiFFq4tPHBnvD2kwsJoKZtZK7WPv9hMrfYrtX4t",
  "key11": "3FpJzmwEPVAt9a9JWpra9Joii1s5UaUTWGpfSo5thsauRnJC12WMxuXWp8WjtNY4BRaoM9voJutEZNVjSbfNJktJ",
  "key12": "3VGsDCfuYcrK9XygE5Wxnemt7FwVUs6ci4xQyjf11RSFCKu2HMPmaCpXcATp1WuH71qV5AaJxUaVHHKkUE1tyKzo",
  "key13": "3tJvU4TycAyovdDoUiDwER99vgLv2EHopQwQVN32zMFrx7nhjUPnLpoeZgLSaQjqzK3yL5mS2UjpyRGC4srrGUKn",
  "key14": "2VzZwfhLk2Gu1Rgg3HcyjofNYSeRygKj8J8JMA5dyRDSCgoLtpp29vbDJH1jxp15YSVjLVCYodX7FVjLv2wosWLk",
  "key15": "52bw4fvZaD1y5jgZ5GhhBr7eWuErEsfbrwTAnuS3bdj4WwAeqj1qJpsdgHE2farQvALrtSxkNrricvUxFroSaX2a",
  "key16": "2E4N2sPVNwD8zvKvzyongSJaUCDb7EauaVkzxu5uqsUVLd64HzB1Zqv7p7ihvoNv2mrSzLXv1iUtTnRQhDg6kjid",
  "key17": "2KpkJoDhtHKCsHCEXvpjDHHwXsyx2RJoWTfRvVTUMPYAhm9gPqaJRjiYu1MidnziBBpqmyWRq6cpz4ixsK1zfNc2",
  "key18": "5iaRddhKjVgrPYrXosJJc47UnifuAoSfuPKBxkkqkFMjy7rmnMnioxz2bA5yn7s38Ks1QKehqkfMCc1gEui2HzFV",
  "key19": "aBR6JAyNiNJsLRjtEMJokiLJYYmhJa9jXsE9XR5fH844N3F4wWYsMRPSbhhFiRtbaTLhTvvyCZZyFjpE7GTNhBb",
  "key20": "3MwGS6E3BV46Ar1QGWrx5ML7CTHRzqBv851LyZzmLSmymcDqTmB94KzPnsnPBg9GzZ5DTvG8m8Qc8thS3qervJwq",
  "key21": "4kad9Bx3Vez833kTL18bbbToXnQb8XzApFrAg2S2AzGVtFvRZg4eosJHscs5Ye4RRj8VUcpHVeGrmvh63TkkHD48",
  "key22": "4cwMsXRKz7cTgPBVtRNZr7zLRABzv2DHWmryUZyqJeBCeksbV4ssigX9j4FyypJQnWUraZ8NexisEoVdhBVLvDNE",
  "key23": "2qhtiAsT5xA685tHxTTbxmQZdSoAbi8N4iHJboiqA39NNfrhwqD9ByNK7bhQw1P3cbKoqtLeMeoicWe9X8uje6u7",
  "key24": "37MWyH4CrsGBMNocStVXqHLysmrhxZck9cdpkxhp1NS8vzwKKWfNybLw3FvyNuXAfA84upjpTzgeMyZEjEMyYK4y",
  "key25": "BdocYCxXjqgyLG7RFdnNTKP47qhubiuneDraMcRm3dpGYxbckwqx54kG1dXN73fcs1jq9Pz4Kf2n4uKKheiuNj5",
  "key26": "THRBGLP7uxZDRfjUgBmvHVyK417t7ESCS9ZbfYKnWLTzqmoujrzRFcdW98wGe4GKUZgDLURdRPpbUkJKcn2qbus",
  "key27": "3gpTP2uPf6da21VdaBH6ioSTubiTP9FVUMfhnfq9RJQLtLkLr4iCaSYvPsfBG7jZ1AepZX1L5z6v3A85JQfqWgX6",
  "key28": "5f4W4MwbWhJVS9wJ5ShJXVxaXWFEAKN1GWMnDqxZi8i9tHDDqWosLZawGr8Fg78Thd76y9nNC9dwsCZXAjjuiUkx",
  "key29": "5xMAVZKYy2G3XxUUhtmWwUHro76y4uPFSBZSJLuKh2q7bTEKNGVwV8PNRhZhMfC4UsPBHY2b47AnKgmBWxb9qHVC",
  "key30": "5R4UjiaFEjyjb2iXqC9sB8iVHq57gWQ6MeirLmrs9fstEX4xjnK7RM5GPR8ZMePiiJ4pzABwexSshug4TXb9FvFq",
  "key31": "5eSGwp9qMASUY4DKSxvSEg1FZ9UAddVmpL9MJh9TdztmVMjv42eS5YJqXoAFgTG9nc45Yh5fdygYnRCVBNpKGtgB",
  "key32": "26rf6VNRm8hMnBcMwmka2ENPgGZ3jnJRyyqppSuyadwBLPxrd86bKyS8c4ER3smd5ouG4o2sSrEjqLbSjDZxvGCN",
  "key33": "3Rwo8AYghHLMMowZWERqfJSNBUY6caoCux3XuupduimeTZTi1yTLmwJNcxHuxnxvQhf1kU4MCCLbLtHyA3dZnkPm",
  "key34": "63scK7LkNHWQd56xvamQfHzukcGr1q8DFZAgZQd34e3XgKdrQFxGWN9QhKsHMvuu5HxyiJ9YnXNoPGbST1aarwEo",
  "key35": "4QGSgL5S8qdu1RvNRiUzoHiDbigm1uDDtTUUwfMY5iS9VcUwCC5ewLn47gMQURQCePWP3eZgAd8XeVGk2vcdKXHN",
  "key36": "jBxrY53Ur3CsUuv3AiRSLMAsj5kKi9bhFRezU4KZKfRxzmkcv7afwq78PJ8TX8tjsiyHjbz55FYPdAM3TMfvNPj",
  "key37": "542qvvmvHvv4XFYoLrKAKuLd9854Kvbz6p8KJBAzds1axXAK6YYCSR9AHhBZfiU42ciHP4NSpdNg1QtTFhxaQdAK",
  "key38": "3CLuqreLZWTDotFpbLCLsHsdtJLnYgB5CqykP2V9TR5WtHEVQhPME9WPnTzyoYBkbyX18BJLxFTF1An3KHdtrpyi",
  "key39": "4St6cNWiG1ZJ71YLjx7VdsNu47WuqZnsZFpK7fVkEkQbdMRj5FdwQzeDsHSxr3xaaPNBWY4ieh9Q5uyAesR2B3EX"
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
