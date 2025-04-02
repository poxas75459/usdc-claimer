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
    "sf6nAGZBR9bF7JbhhvwMLh4G8gZ5JwKZKs74PpSmwRQpnzjFr1mTFD75YVFbpAwmVRonjDC6hy71ioZGd5JhdFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajLECY9HPK5t1mQQKtt4qsWnDrykHAgZNb1aYwz45DoApxzCp49p73cjon9YUjTRfxz8UMwNYfJTYi6vqdUXMAm",
  "key1": "YDWRPZFZjw1sjLWHK7aMH2SDDUBDASD53ZV1PL3oQ1irMPP18f6SmSaFDS4h11kghDmyaRw2RuEwEWZ3Cok2i5X",
  "key2": "2BejSNEGK8X8QhzxxQGnesm23wcsP2Nyx9hZ3KUm1sV7YTZjubjmKw6uM7f3fwAEwaZ1zEaYRBkLfQA6oPGkvEKV",
  "key3": "38txxx2DFMkCxLjGmzUvVn2TYJzRYkpSEbRrXq39YQKqEfyGUks26MZg3FMDPn792mAqnn12suNTn4T45dnpa8Ys",
  "key4": "4iH4yxc6jvsX1gJmm9yDoquV9puEGHLaSKJZj3SMgoL2w8hbZtiwMJ4KaawjsHti9usz97dWSBa6hWvppfFBgtaL",
  "key5": "2Kzbt8bCEKfCYpNEovLGf5jzURvbbxcXYzWEP5CGinP7iYMSgwxZD8MdRyt7Ga3NjmAYyivXSRuA7tj3TVrYpq2j",
  "key6": "59w2AojLH7J2yvGQQFpTU98PDrzboUnMJPdaEvcrQb4wRoBiiT7cKE5eyQ5hJg2JUTL9gbjgZAXssBuaQFGTgosB",
  "key7": "3eienr7jsEyQEu7Z2uobrL56mss1sNA1FjbpWp7FAKXoWkfYFikTWgCTo6VRm22AetwxvzCvutt39rAr4vGnC2G1",
  "key8": "39JUQ74FATxKRN4ZLX9WH6x9XkybFcc3HvJTWdGQE1FAzUvSfsYp5RDbUbT4Ufq9qJ7VnZCnUMKXCbJdG6NvphMx",
  "key9": "5Q3grAdpwv8AJCuXQYaC32rhn27zotcmn11PecWQghyPrFD4dcszufrcMadbWZCCpSmGWoJXEetVRrJbwV9HPrcD",
  "key10": "3KPMPDcuxGUkbaunEMjs8AkiFVxrS1yDBjZgqLHpUX3HVNbtW2D6DorTV2mhK9fmcxUt5xcjtCFV7F5XpTnajUKm",
  "key11": "5edJY5fhEiKqEaF4sgpRQJ61dwn1tNK6aiexRfAFvbaLZu9oDMMsX1UXeZFkP3v4qNhEvi9Y93sEVutriQgB4rCP",
  "key12": "c6Z23wznijNvPcE8ABtnDER3pL1Rj87KUmXFkF6JX4GKuKUv4NNk7emyaMko4VAKdNng3P1qhjfFBA3cNrQTAWe",
  "key13": "4p65HYRiHGhanM8H2wFY3JAvxT32tDid3TWhjBk5rAZRNNE3ckzc1QdcoQEMiSbhsCva1h1bPH6TXLq4wsaHSHdb",
  "key14": "46VW32iyNSnWimwvMvx8ySveVERJS6DQCD51AbBmxaBGKP3XM8TA1EtibNThrWxngWg3htaH6jK34oGFj2RJKm2H",
  "key15": "3in5WtuMMFy3gKV29raDWtrmuBrDuG9LHyiQDEWqnieC2hRLAeYfEdvTSLZY3qYBwpBrH2GuNdCp6pcDCz7i7CQ7",
  "key16": "3Rm5bqGm3nVhzUBKgtiCNNYD9jX8ACYGDmeQgiJP7eDRo5yN4vkKEHbVXis7z3vCvbspv1GgXsBUcgkEuTv7ago",
  "key17": "2kNTNXSeT4J9jm5VkeyVS3Scey6g8qpfyyETcop7qKxF1hL1fAhzBnbxo2oHV3rLwXhGfrb77GrqhGUhvn8QCd1K",
  "key18": "4hKG7xb7LnNiAwqGFT4kL8ZKoUkWidKVfD3g6q3QisFxxi8rgbMcfo9NEzWxrt4yDVQ4mKghz3SQUbeGusaaPWUc",
  "key19": "5jKX1UZd91Brx8VGMofTA2SBKDixoAp5GffjAjZMXF1HNzowysuxuuk1jdwvHXjUADoCUNZ7Urj2REhxPvdZE3WQ",
  "key20": "3AsSXPD9zfgb6MZGvEJU1wzPbmuw25p8UywTdE8yXTBVxbKRdxroP7ZuFm9bx1TQiWovaiwJ2Uan82C9WEZArQCw",
  "key21": "5UkfoEjchFgPmZyQMPWJ4g1bWPytXDMeRxM8ZGN1JvYW4WTgq6NhTYiWz7q779VJovDGysxDVnzC2oxNxAGVembU",
  "key22": "atvU8mFbYv7kV3bWPVNGZSY1kXqPHV42E9ZdGLdzuy1yxGEB6ezewd8d4jE6A2Dk25Gy9uTWehzdZ4cuRMkny6g",
  "key23": "5nQjVzJctYMkbe8aK79sqn86HLcEZ69XbQhTwt4z7WLoB4XVCi1KGx2UEAdaSZfE4SqJagEv1qpVdmukQR3aGLfM",
  "key24": "2RtjLTAUS5uck4FB1cKxYAT7TTeUgX9uWTFaxJfyb1oNk8iLg5etfsXe8nqAUp8xvPvBnM6nHvMFYvkHYarZr7zM",
  "key25": "3czWg3fQHhdGgDocmcfNrdJsq4sgVGqSz62zGVEt1FPAiRDHv7tpJqfsXMM5fuTMr6Y7r3vGvMkhCxvkLwCGqrAt",
  "key26": "4CmWJ21XxNUMbow34LCpjPyHr8Qh5pdfqMSvaZWrtMgnDEh1qXyewruxWqajwF3BMeiJwVrbo22enefpAaX8X9gE",
  "key27": "5Nbbvyqv2E8Y9nR2vCD9dMkYE8As6rTyG1Y6v9T2ZXMctijr7gwfQ2Nn7SHYqhDR5oWqyFRaEbb3GE498nL88gzo",
  "key28": "rTr5zcdgAGm5FXvvyQyrR4G6kcpJZHFSP4SEtdfEF4inZz2TxyLMFcGu8if5cV5428PcY3ZXFd71kRMdVj7HjLY",
  "key29": "2nyDvN4smTXsr9cqQh1pf5EjGUHhfJZNvWZoxvjr5CK9oc5ZAFpCuUwJFjvqioPmuvMHkNXejS2YaEmJcwsoBVgc",
  "key30": "gUr1d3K2Q3xMvgHFXRVFraPDeuZM8AFqHmANBtcE7vEz81XY2gwj3BBX7cAFDz413HPUJ2QDCry5VFs9JbnaVs1",
  "key31": "2jkzNmeKjm5ZSGs1RNr2Lf2z2GzygVh2ypywNTmw5ohj3z88BdoFi7VNRyZH4MY4V5Hc8pjgcZibp92vcC6Jk3qF",
  "key32": "FmqTHfrbfSd7Vne1VT1GeJFB4objsbWE7ppECN2kfTksGrBUynazNntbEBR12Z3Db5gZH1jXv8xc9w2g2jgytne",
  "key33": "5JkCC3Rwx3yZkjUVxAvshWDPpqgMGUp62gceoi9Db8jq5FSAB6s4YFGYCGeyLcTHmt9zGxddxWHU1n6usr2bgzVW",
  "key34": "2teJskGJZRGHFqDqkGWv2h8omvHBtzS3hqxzWPbfCPq8jPtmtceTmcZ5sFoJ7vTanvcxTww5SQaYcU8SyALrmFzM",
  "key35": "469zDTt471Qeuq7c4vd2uzqZdgA6X2xxAB7WYpLm9MmrmPYasRC4GJ6aF4KpwdniuMFyRukfBXVyWWqV77JFBXpm",
  "key36": "3y3WMBgTCPovKc3iSxSkXvK7sNsfpeUDgnj3WKUyvh8SYAJdNwiNeMY91kpVrjM6VFLvhAu6XSjdaMA3xPmPeHfb",
  "key37": "h98VSnJHqRSFrsS1wRiWYEkeKv2LouKuQYjT1NS9pE3nJ5PzMBHv7GTWtyaYfiPv3MMgMLo1biww9eHAvfc9cC1",
  "key38": "3TCBesdX1cW1hGPU4aWEbZWYDk4WRYQDq84F3o9XEHffyxuR1jX27c52LxB78hgQ4K8xKSyURfy74ESswRccAwZc",
  "key39": "4JiWcdLGzUqkaVJFt2AWUtnDvdaJVEzwv8pYBnqBBUs8XnLiBc8zXkTac2WjpMpe1HEYDHKgz9fQBEuHwqq7vWT2",
  "key40": "5e3Ugn1ppe8RH64uJUUsXP8BGwTTKSuU3w5cVEJREvy3YxTJsv7qMeUJy2NkPNmF1LhudWZeFFK36YYiuFG1V5h1",
  "key41": "3gZUTQDeoPHrnUQRuQ1fwepFEdJicQMbBPbmrqMdkmKbjFzUncncWLxtHN9thCrxKa3yuxVoHa8iouV4LsuBsfRM",
  "key42": "5LNLEN42TjhHH8UGY6CnYLBKudKhKdfG1pEjTMfPW4TfrpRKCmwztMwFMzooe2KkB68QoikT6MYTteq5eca7ZWy4",
  "key43": "3CRV59hH11zpkQjUaNcH5ZL6wYQXwQBXCvR9M7gHtSEcBaTiPiTTaVCLJdfk3VkTSg31W7yTd98GwahXueGbSgiL",
  "key44": "5GfauSTy742evcTZMziT93poeqi9ub9SCvivYSw5rUuSsbFwRPqq12JgRMuPcEmiFCAHiZ8bwuQdpSVfrNo9DnR3",
  "key45": "67kBSmricxDrLTPg7CA6p9rCsq4mZ1YrKTCUp3Kvjjsxe5bH5oWKqBg7Vhxgn1cqKD5sVc3NzLQACvEw58a3G49k",
  "key46": "3yc8bQrvtPQnqstnZzZZ8yTqcoqKDsty3gi2mdfWMbo4GXhrV1U87GdpRqSV8YXyXrqMPf3LTzqMHCge3sgFeeB9",
  "key47": "7N5Vddwp5SYK3sbTvtt7oVvEv7VXcZRGGxZgQqAWb5CveyX9Bd4L5RvvezVN1kptaCZqwY5RGXvJdwuVe6vX1Np",
  "key48": "5wap35yhZEvFpijaLmd3VQqGLc1Mj7Y4T1WUEjDkbDezR5BBYjDzCQJqx1HCFrTtEdaXzkXb1vSgNTA92uf4SzfC"
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
