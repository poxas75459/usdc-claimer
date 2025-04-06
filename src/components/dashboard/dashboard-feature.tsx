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
    "4yNSw2rC92mwbZVR4pD3SFd2kUAPmPPp3fbvdwCmdPVF7EZypA97zJH2SjxQ6ZwpKqU2d8M22tFaYWJNLpHCkRjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8aZSPFNmddRmSmCnEqJUrzFWXDrNcz6dVyYpQn1RFvkhnDCogLuxgpppLBXRGf3pdfZzYacYnxEsSyQNJ2sp1C",
  "key1": "3xTCQAkGN8mpuV5ZJtJgAHXU8Cwa94yUogdAdvo4KqH4nCRJyusXCNJ8jxuzvAk4Wxzsc37aDpzoKe2FQ4SsLFJa",
  "key2": "r3AymE59UuDx23Y2Bghf5nXNe3EWxQ2okcbXjNsfw4kdykanHi1VtEn4KcRmTHf6bCfAipUPaz8EBzLMrQ7Ufy3",
  "key3": "3cyKBr8JM3dbjsq2WqM4DukT2EBWKUcYJUYFc7cqY5g9bfzHtge7DdN9JzedVRHG9PYyvhWwnx6tp24fxrSbNKkj",
  "key4": "2KbTETpqyw48smjcABjb3AMbb9htGJ8bPd2wFncoXMtwDA77d7QLbZJCoDqiYtCtVbseDXpVo6paL7hZ1uyPqBFG",
  "key5": "5MchnJwwbBZeiCDgep3KKqafaP4VVwppWDxKdKNLQHRMSSDj6PSkMn7xN6RUtEzfJwuUYKH9syeyCBJw8uGAE2jx",
  "key6": "2unMhQwS2cSLCrT3wj7aDD7wZrY4Jn4HYqUTt9BCfWFtyRVjo4BvikzM5MtYUdoAGAcgXiQNWbPcp9wd4m274ZrM",
  "key7": "4ezVSxDv5bZryFoqfcoSjEqbnNb288TeA8BWFf5kdentByRpLDQtD6V8nirEotAQh3JNDTrnXZBeqKusP5nU7ycN",
  "key8": "JGawhAB961Xnr5stKpU81EcYqhUxybG1gupXDgibcQCybQd6exxjakFUTsUzsjMdxBxypASZjbM87Ri6MoxqF6A",
  "key9": "4AGd1u9WPXNYwjtiTPvfTBuQff2exTZTMyGaYvGcQEf36pssgHPkzuGwYbXbVBjimje8LJQKFxmkJX1GoaCmL1Zt",
  "key10": "2LZzZz3Z7vJeUKcTm4vpn4ESMF7UiVFpvx12r1vUXkWHh35hZTyneRLbcTzDX5qqyQhvSKTsq4fhD2P4zygNw1Dz",
  "key11": "5xRaZ4ZWgj8CW2oXhPqHvtKn9kFLSgrBjwA5farQfiviP9sfuxLsmDSqJtNwg6FXVH3Ge7DjtebhGcbq6fqo6Vx1",
  "key12": "4kJ3rr6iRPnS6L7pZRbv1HXi1h1m4yL1bENeqjt7uLRMovUuy4ppCfcr3PZjz9ufMGXVcwzG13qjQHw59HZPYKfe",
  "key13": "25bzjvRqVvUDKz3f5rEAe3T3zaFxbuSLPTvB7DaMz9eVij34epLadmZzZFoAx5gWiHhRbUZxST8tHoVHfMsnuHSz",
  "key14": "rg6Qv5k9p6K9E8vB6PxdUEtuLNaN3av62bA8TsCfc3tj8A3bYBjAbVNLtFAFeHtaoJCCCrRDh7vKwtd52DPtm5y",
  "key15": "4AJhevhGdwog99cB9mbXi3oV3afr4mZc3uWD56jCxysyBy4fevdA4iarXqyjrv3zD8VaHBcMFLaeTfqvSg88hWEe",
  "key16": "m1pQqw97V1vRZMpsNU7ur4mw9Xkjv1WzCwyTvvR8pabmidz4ZEM3US9vRWZTd5Buiyc5Ypvf8YBFQwefRhVjgv6",
  "key17": "4TVYWu3MntnPJpBpuWcUc1wgBYcg5zxTa3GXXGYV22HqN44PvLBxzqbBpaNeNrhXFFzUY6jQeJn2giAZFDWTfP6M",
  "key18": "3msQADEtfxF9pi6eUSGDeMkaY3F2EXeFyZmTb8mEXYiHMEsPpRSEgXy34VeyGVhpTHX1PWYQBLqunZukxXckw7in",
  "key19": "3nKRVpNvLoqiygcSWaJdZKm7kBLqob6dNkYUPEDQ14ZuYHJeo1VxcMjBVHhJsdwFWrbf7sRZCrFmFK72CmzWYLQc",
  "key20": "5nMBvX6krM5YiXnkwNrWf45sXC17CpUiFQy7zmG2uJDYsMDfQ8xCxunPGPnuufNe7T5KCvVz5pf7jpdfFHiWCNmi",
  "key21": "2zN9Lm8YpJb4xWbkzqNfbfJrfMDacVHcsowqCN91eVSmGkMbnvMuC4wZ37LfK53NKEikLg5wfaYccfBJmy1XZoFQ",
  "key22": "AskqTK5ZoBmYQAN2crqEw8Sg9rcLdWyF7RgDyUDnJ2cUGhuHDTqSDhtps5g6vzG5dJTESYhoXTKsTRvWg4tG7wd",
  "key23": "2Gd8hWtcPAdpT2m99xDJCaJ4D5CUqpvBvfDFWgkAYTLKpaNUqJsQYzvSj3Jbow3jgXKWppFRFRhwKBHHWkp9L1zf",
  "key24": "3zE5xuasx1RgdqbMe8sVVoqysTAH6uH4UjZfDmku2pKTu12bdB2CVhh8vremg9QkQT38UyXNUzY8Aqzg6dDCLU4R",
  "key25": "q8ZhCY177ujv6DiJkVJVjLZJkXcN2Y6bLDyjJ9zpDKjJnHaVjpTSZwNrTJT69EUzNSGZ666An1TuBJaZcCLLPd9",
  "key26": "5oi11AttaegPQjnZydWC4eajDGPxgNafS6QTuwz3X6zuurd7eacYtVSR2w9bJj9CFEwuky7dQ6CPNCZnsUiHQT6E",
  "key27": "2yDetrT5MbtxgRKSrUssJdXxJxH6HzrBAg3GfVsn2PqtVt9auDg29yp7aRkCcd7ZBbjepnWkw3HHGysHD5MzYsmK",
  "key28": "WusRhCfvuaadESn7BpiFajKzxWXxM9WMce7hzVwKkSqfk7QGck2nK8G8YagT3426h9a1oDaEKoM2EsyALfwgd5W",
  "key29": "39v3kTkC1SAjfoHmfcgmTLmwwtWZYMrHxx4VHV63kDtaZxVgEfMPqK8NC1t6id8QGpMZZbDZussWsA3gr3THfwPw",
  "key30": "4iKEbojGVHUmr9FiBritf7LjW8cSC4At76aFPDNrL3hCYsPWH6VFHuW7Sm1dJJGTfENpm2RTxFDEwnJPrDUTeHVg",
  "key31": "3H98zamw58yy6H3N1STjv3zpMKHntAvSAAF5yJdHD3ceoT4Z1UAXik75tkqNaG9xK7CGfkNpKuVUeHaVGVdGeEcS",
  "key32": "53ZbMaPTcu9KXBcqdp59Dnz4itJ1ZpLCQ2fevMZucFiNmQC7knrr3wXWMdyvjbiiiwCA8bZLUXHRJkXLoDFSRT4N",
  "key33": "ayTXQuguwit3Xfquskz9rL12ZPTQ5hBQwadpPGr8LWbsHT9QEHBTPMGVbkVnJb49Zk9XagAg2JLeHQPS4T78sij",
  "key34": "bFLUALcaKXChVR7ubTBq3sp82ccAG2oVzyjGxK6j3xAsnhx3aeqzSVZfwysqutKodHwajDJTmHjvgSafUNteNu7",
  "key35": "3qcNy5x5yE1fL4Um67t12fX5HnXAQzUSFVTmoedPNP274cNNn8DpgUYcwtGeDxMNjvXnKy3VLLHAoAdhJpbD2xfQ",
  "key36": "4tdnmX9xofgomEYCjvVVw3x7Kaj2ZwXEfUyoPZNT53fZL8rFTdicDxHVK4QZ8difCRMMbgAdva4UGxGjukZyhzvr",
  "key37": "2W58a1JH25cs53mTMjKp9vvpE7z6gtWqCcobpSj2otMoMssvWrQNB62zqxL112hfK4KkbAyAoAcnvApxoYEkV6vJ",
  "key38": "3vSHDiccPUfMeE6sRNN6UYkRDfTjQpjKAhi1fwrxxCjSP1EpXc9mWwKg6fBkYwMGBaPT6jgbUtD43uwwbJbtSvBg"
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
