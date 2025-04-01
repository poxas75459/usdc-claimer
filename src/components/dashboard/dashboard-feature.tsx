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
    "4RX3thkwTJreL1S5g1nCWRHvt1rRd4dvRhjDxniw3XcBbZJoiXEeGRhcUvYKAVWGwakAdUEMUJkvAnuVRAyATdgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553fRrjvJ26SGtgM7KDHzSn8hF9m6GMdAwMYSxvsnroDvrKdwf6aRiCaq5oyhbgaDwPZPKzdeRhqVsz8TYWyFeej",
  "key1": "3Npg7DkhtdnkZfaSR5T7LwTDLA8Rp1YYuRgw44oXVCaTRg9iquugUsjgwfJ5oPUGz85rP2zFGRDYiUBk87ZboyeR",
  "key2": "2mZWiCQMgckiNgEdgwQvRdUu6oBM2FSkXK5sXmRCRsfGgEBdnb32gZ3bPtmoFYDzgRaYq1Cqi7L5rLnbCWFaYGmK",
  "key3": "4UjJki4hLbR4tcbe1NbYNAa4sxP2gR1yZXzPryzPNchbXekssTV4wrsFFhMfqWbsgXKXarDaucBs19mWKL1gj9iQ",
  "key4": "2uwCXwKUYZG8T6Tqq3yCvZyKZDKTdRYHZTsA1jU45KNsuQeCa9xo2nBLLnTxiD5PvEb52AVFcEx1o1rbJbRTWXMb",
  "key5": "3SwHgXQ8n6zczH8i8C7ZudjaTQwkFsxk1Ns5XY778py6DAZFonq4zC5nLLNDhxNFW2HLNdvDwkcXL5GxBhTfaqYn",
  "key6": "4a55NDjCtzttQcMccDGgJmWRTNtoboGUgfu93BrfSjF37VwZHQGTtR8qEsPkwGLRMUuwvHXj1VW73viru5PWRdjC",
  "key7": "61Bv4JZoy4izqykXEeuNyzG37pNpQyoPLLR4V8o9D13jnSjmqmigQJbm3HY5khwNesdgy7GWtrCWrXUvfMWCjiH6",
  "key8": "TBHfkduCjRbrm9SdwYT4JBr4bUWPYsyfsogFQGumPpnkz5iULFP1HRgiC8SYm6K6fr3Hgs1zUyk2ekLaDujuXz8",
  "key9": "JdAsrWXxdybeezztCxHMZKydUrsDNfXnhHaPMnYpasDFmo4srMg4iFXJ22byb765jhYYNKiG2wxMLyyAPD8NEXk",
  "key10": "4C4ejxriFSNkPmv5MoRMepVJwRDwGfH3VnugA5SmoRPxKyEtXJEi8CShkXFw6V91nouYYWcepVuwtboDNkceKscp",
  "key11": "WrKxGttkEE4PyKRCCbNDgiDDF3Fp8rdF8V7kgeFyaojd9fJ1hm97YTj5LRXBPrpMBethQn1q1Zmr2RhJdNZCVYG",
  "key12": "3hYssEXC3mfqzHhgeBLRLn7hN6aWUrbkZ3cfWQiHmMKmBU2PrzPZDcXgMjg4Y2oZMPbT2ds3KeXrzk8XH4ZsJWGe",
  "key13": "4fLt1WC88MnAG6AnYioxU7qFtsAiVNJEKWnJVSm3XyaQ6mEdP8AyLgRWdav8hZSXWSyiFxfgY8epKmYAibE6aYWN",
  "key14": "4E8Hw2i8vfRfK7HFeCNWtg5sViYKDKmjAV6DHHXdNTHN4LUfqhhSbtdiNEX1zjNPuba5kGXUmUqHDQGJNhDszT1k",
  "key15": "4spKHwScT24PiSSFRcJ9WozYa2WwYjoPMNsKCcgULrk1q7XH1HvDtYH45HkGERfDT7xtZVvD7v8DmnZ1ZpnAzWHN",
  "key16": "46k2qHSkS5hN1VxA6MZuLpAAPb9ddq7KxRw7y7Y9pSqbD4oqrmqsze5yPonw2usz7kfiKVzKRdRrHfUnWQHoUoxo",
  "key17": "5CJ79rwgFqUBKpiyZT6YW6ujKgPGEm26BvvuhJvuG9HinGZ9QybmPepDNMbupd6o3wGW9MFmzc5J2EkuUsrQtfVG",
  "key18": "2GMvWujNLw2wttxXX4Y3KEnxW2cd3nJARV47eUGAD6rMhsfC3rCfgrUg35BhRdPpdzUq5oKYDXEvWUQK5teLyNCm",
  "key19": "65MFhp6H87igJTP3gFy6p1wopDaTmRWcdMLm1uMLkFath4ZgsrR3Q19zT13JmC3ZWobdX1ATErtPUL6pcG4WPBq3",
  "key20": "4uVi4GdDPK8XTcYWabjLFx4ixAF3yKE8ABxWSzUngCsgdByYKuPDoBV417FcP81XBX3YJMUso6LovnufH9A7oAe6",
  "key21": "54eP7tiaC8uVP2LecfMrJQPgaqoktvfMh8Rx68v2VUNtBu86PffaM7web8DqSMTS1Ppek7r7vv78maQNR9u8vxhj",
  "key22": "65eXxjAHf3CvTzbn6TVRNkosDiYeXLE3TzooM3jKRSWuDpJTuEiPcuWx1mvU9TJj9C5BWZ2p72TS44qkwgbFnkSG",
  "key23": "2Lf866cn2RxzVfQ58KhzVhr58a66i7DFDHsRQ1q2qPfXrUnLxDmTcLg4u9fs1x3KeFFgArQT9mRBVDAVnrVf5sme",
  "key24": "2BYaMnKYiRSJzxtv94WxaccpzMhayEMnD8weMcAPrxyoTisQJnNcxp9LjUn5pJBnFytJv1Tp35WZrs56ehj6nVL2",
  "key25": "4RtCL3vtHHh4A5XWxNv7yDyWNNbk5y7K2tKPmXBndtJhUmqPQiqovGhRjSpEdRfYZ4udYugt3jBav8seYbAeMeP8",
  "key26": "63GFPKE9yHG4pcWkHLb5kEvdW4jSnqWmPsBAWkCnAsDysDV2cMR21HNfByNA3m7LcThL4eWcvCbbkHtsu9e7WKSs",
  "key27": "5N8uVsGy9fq94NzowVhbw1AZwPf1NU8KbfSNyxqFmnhVqChgJQ7PDTSC7NCrMowy6y6NqoTKbHgMWd3PRWfjJQs6",
  "key28": "4bgkwBtKA8Pmssh9SCStwLKzsK1ifgjV9ZgHi7d5ukEErJjdH5nGYMe18TL6sY75xiMuo2dHynyhPdThUhsD1VXS",
  "key29": "5j9en4QhHF3Gm4E37Ayea5RhNfN8mavhz94vuGyenim2obTFYGAQNqWv1PK5aQ8UJFoZYTMgKjV87tHzTZUYVHea",
  "key30": "4KV77FjGsHut1kLYBGRo4AZZ1mtsxvq5mFRxa1zqDgQQ3DXj7agAVwQ7KeD9ruwk4dZLxHXP2HrbnSPmf3NgudsL",
  "key31": "ewpaJr6qo8uJ6PpNqKqsSQgZRAdWn17kPPYWgzzd6w7yHMWHuTWn28CiPrMdagon3JAB2dPinJotBbtWrUqXeVd",
  "key32": "4ynmWYRUsWq9igT6cuhkqFRkc7rGBAPPrxz6W9nCARquKkEDd1wuJFUZgLJD5hEkAJRncnHUL5oEar3kgBXGFSJK",
  "key33": "4NnNWLmcT6w8yeuRHwpjVS2iUbpAg9hTeXpZT2kd3zhcU8hUX48iUt2vzy4iTzb7wCbqtVpJ8LUdVe9j7zHUhwhy",
  "key34": "5kpqu2ZF1gogpmpj8BpErwxnFjutx4XqA4yBz54MftMo74nmf5x8ttUr8krotJsHUYXhvT5NMss6N9MW6CdDZNS6",
  "key35": "2RMFLcwhFrvDtGDiRmv9BykyujMqgC2LuskEUkMWcKkMK3WT2XDdJRghD4e93ponodQ1gN8QvgtDzpiuU71uFCnQ",
  "key36": "4aqsNY3unS95x4hvLE6umEtosWY8edTnh7YoLstcB96zqcFdBms6YqinGbRNybVc8FDWFh1MRL5Cb68WrSqUn2fn",
  "key37": "3W5QSq3TDRFTdGVnAvfdWNJZfDpyqZtd7MYvUk2FR6hDb3KDgcyMW31WHoFEHHJU4W1AfJ3Eon8fbtbTFNhn9WXM",
  "key38": "2NjtRwHLkHpf9sPQYnY1WUhx2p2kgtTkNiDDsVSYDknjvWdkC6qd1LBvBbjJLBmXFQdT4p3ioUBfpNBzMS1hZAt4",
  "key39": "3LFvkxVrt3wWsnHakB1SH1q3K7f9FFuGjP94psAJuzSxJ2Nzfr7FDFSLa5byvgtPrKUt1XgMmdB2aUoe7mWLB3mW",
  "key40": "3DpNvcpFVHQMR27ZPX9vsc7e1k3BEa3Ei6uJ426evCpvURwd6izMyMFgp9v7Z1u9MSR7UZmArfJaexMD656uos72",
  "key41": "616toypDVBxK5G1tk2Fok9xeAaesSFNLuRaLiix4gkJt6XQEUTkDLpCt5ozHSGPj9c9P9WVgC6aQY4FvTQQAv3im",
  "key42": "63DNkA7FBVyDsG3AGpCPWUYJLYaC4e8Hov6GE4fjcNGpnt2RRiJdzBiUxnDFZtEWWnuCTozaBFUi2qsHUsUo7hdG",
  "key43": "2JUm9AqVm7bHJFg5oU8Cecwd23W6a2UNv2UCmZfxXuhpfbLn3j4hnyh6ri1435vr6EsyuKZJychFtWzECzJy6FyW",
  "key44": "5G8y8kfWffFghojdxzS843FM3gyViw5cS2vNcRhpnDtQGGSNXGTfcz5U9pN7KrRLFSQwzungWVcLhK29ne62KuVv"
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
