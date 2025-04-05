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
    "QZV3KEBNyxL6tSgzbWzaGRuN5Q7MYGqmsYzjuiHC4iYRiXNFoK6YDYZ5azGPXmpzjLuSkx27pTFCSUUSkJMK6sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETYbZaZW5xnmrqGkzynKLZSG3GZaNHqkMH48KeqJsLehRKiZQ8ABTXjtjqvceC2Upa3HCcPcV5EJSfk2AnXuVGj",
  "key1": "65aEku3fjq7tQxaPYkr5bzioLpHAkzbJCgYvbTNLPEhwujqmaUfCgsVPowS9eoV8rSRFTiEajJy9SL9obfA4dHFc",
  "key2": "38MEoquuERuYuBQRLY6FBuUVRhVUYCftXnJkYckamRwP6dfbB7U7REs3FnWdj7VATLFEfaKHppzFuF1U5MxLYjEn",
  "key3": "59DdTGkgqLfrebtPsEX6qYEJd7wL3Q48RYrQ9LLwHRfva9gd3oHbFkyXpdq7bZypSCS6PWYt3WZrbEqDgEC8YkaQ",
  "key4": "2VboQBd9Mhb7dxEJCHNnn3sK2bq2xJ8imLgZsVfPT1RVCN17mHvmS8cMeHDKGTvriRHU2CRWxteTFvw6GYyEiBv4",
  "key5": "4Q6H1FgsKZtLvb5bEVYSeNU96cHRcMXbEA3vNidqqSVL2Uty7eMxBbV4FjN3sqftaU3CVjzh1EcQXmpKsQZBPwT9",
  "key6": "4MzRR7FtvtUs9gMb2NzaCFZh1vTRR3XN5SJvpyPV9tQqPvNChKHpaHZiRwTtG9oLS82b2ao1sCBdeHpYWAvsksvE",
  "key7": "5YiTqUEKnequyVSyBz4EZGp8W1GWuKngsCg8JrjbjkGS9jLGtAtT6PDRbkMAxisKYu2Xy9wpCvVXUu92hXX8k9aP",
  "key8": "5QpHWSREBMRniuxf35fg5TyWJ5sWsnaa5MJDeBwaJ1h6xmnq2fceeJhU2DA5Q3u48pKXYiuzTKMCYLKSym3U6FXS",
  "key9": "5MBm2Xffd6q5mE1VYgUCZa4vtdk99WjsQAdKh4TjjicTA5iqpC4fofA1zBJaA3q5PEVm5YvNtDscUbhwLZ4deoQr",
  "key10": "4de4jf6XkqHimRUAnomXkEFEuc7Dw6U22VL9Eq3GfsCCLvHto4gytKvrCwcCuEMNxYGBaojHDuhEmPXq3tZfqLVf",
  "key11": "22qWyee2rs2TPokLpP5iHD8in1wCa3pMDRpmhmWHksGA6QgNfXxVSah1CwJHriDaxRCP6EtKCAUGMq2KNiqT4HEv",
  "key12": "4t26mo6gx4GookiCDtDHfww394LriqJTfCj4W2dsKqsLva3KsH41njb9NKtVP4GUH7CHshMsDckZta5hpkQrFa9P",
  "key13": "5Cc3wBbGcNMswQ6zwGFttrz8FpfVK9tRpTWBmoZeBTsGqFRcHJwT841SViBqrFAufay3gGoHDfERV2XjD74TBnE3",
  "key14": "55CeBvhMtUoQEhLyroxitqUY9aR3kAX98Gsr46sw4dBP4EY4gnsb9ZQZu3iEKe7CrQno28EJk4G1KJZMyKMgscqS",
  "key15": "3yNCcZAmZH3TKVqYn9fuUCqNao3g7yYU9UAKA8NL87vFGSpBGKKBQRjBgS8DghdoArWtcPpgWRfbd2J6Jb9mPeS9",
  "key16": "27LqHyU2uQ3MtbtrGHiWwCVJEgZD9WM3dN6AcLNvT3FRccGhobt5NeBasanZsAZMfsz4UdF8rg9p69ta9odK5wu3",
  "key17": "5XCkQHfLE58XYzHwv3CopL3AzcDduQrUaLWVAY6R9qgEuwmpC5546gRqi52T775dfrTocXEBmLPkbK8yZMMohYrX",
  "key18": "33NPmjJgoxRrjzwx4LZWRduW3ARCp5QYTsEKQt7VJjUjcjZz2EmY7MLfFC7Kaxo1T5MFgCmJ9DhGSGmYhPGLeADS",
  "key19": "5epUWoHzHCpCCmtuVnRiJ5HiPdYQfL7TswZoCCNkKUph9hQtrSjVPRKwreMYeKgXRDyj5rGaKnrDyjLxSNpodgUu",
  "key20": "4tzSSxMBE3wfmTUrEtdgeHjvrktbFwe7Tq74jXyoAepjo3EZ13p8Ew2WZmVkJp7tdjMwnXnyA9RsGjETAPvvyL42",
  "key21": "5RaVdaYX8YoPVoDWaHB3XNeyr8MqgucYh2GWe5gaNLmj7wQZaEhR9SzWtCN84D8iJYWbhPqyupkFnW3zCBWLzK8q",
  "key22": "4j9tycxeCDoeuojrx3gu2ESm2JP6LbpspzUzR5qidRPJ7MzCNtq2uT28xHMkPznq2yTASpCNH6hEP7pmmoQLceQG",
  "key23": "4C3QNsZbJ6cDNaX6eTQKwJFftE9rYfmFgtGCz4KBXLRmxuiWWXtRwAkqyzbSBhCkhhBEHQ3582VsAJsYjUBZpxzd",
  "key24": "3m853vghGNJbpapAN2KSRuiMxrGVoPHV3mdqYfGZqKdvpBa661wsfKfFZoaoo1w5cpYY2pgANaEfZ3pX2Lroacgg",
  "key25": "3tHukZC9CnCheEtQ4VXFrq7rspzhQtgmiaohCazzmZqgY2jQoGdhywdydHmKSn8FoztpWRBQY4C9RHVZY8xhZR2r",
  "key26": "2NpZW1qRFEYnPEwyUaFcbf5H8o77rseLgSPNdqU3GDQaxgu6JNdPt4XqVykQAYHxJhHV2DuRtebsvsDJSfXnP4Jx",
  "key27": "25KnGpv1GhQdQZENjscgMsxM2ByDAJUn2fFdgypK8Qk1nCZDFHU7xeGqQcTybdYmZi1Ee7jSxZ1uoJrBYSirM6yP",
  "key28": "fskP8LExTqgYxQFUywNsjNGwrc7sNiWYsgzGw4vyjsL6bphrkmg2RcjqMjUFRtfoUL1cBYT9BQAbfTXFXBMQpq9",
  "key29": "5GPa3YYbA32Xjd62pDR2vwdCq8ZU8nSpV4jpd6vHSqSmvrp5VT8dzp1gjHEVFZQx6Vqnvuf9LGP7p2TYcvG4EJ1z",
  "key30": "4Yigo1yzBeudhDFwztvyAD5YhHYhDxu6HR4BuvAXYvjuqb5PvgCLrPtY9mtxfzJyKHe7hQ6diAcoybX5ScwxXB3s",
  "key31": "4nGxeHBprmUKhMVctiALBU1pn4UR1RXYsYpjgV9zoxmiPj4yD2FWFqwrTkiV8n1htGkr4pkRP4humtVj1FWgiKou",
  "key32": "5SeJBe62KQm7TcTuphLgLL457simMp1KjgnttuuP5eTM9U5xAVmsuCxQYzjN6owKRw3jBGJRc83D75y8g8GJG8aw",
  "key33": "37249DsSN5yLacHjrBMRts12VR36xRnhHzogTaMTtZ9Gd4pJLm4vULjDjbCxYMRpJCouG71mJrdtof17wuws56PK",
  "key34": "5ewrKjmuVPmMnECtd71A1L2B8ABrhZpoa38GBp46R14Lo1Zqmbp3P3GiirwPerN8b55GV5VFc6Nha6sP8nyQpK83",
  "key35": "28t4corpdaDQhhaKRtr52vd5DtYg7tzHwo3Pp33fRZGXH2xr8ypRcDF1UN5Ve13mykNp2rDpKr1FTuxn8DCQvRQf",
  "key36": "zAMubHqhaxqSg8tW4rWatzFRvxaF76PhFU1JrJxNwdfS395roft7hjwaTsNraWweUYHBhBFbkGoHZMQbJo6apKo",
  "key37": "5FsywXsRwFxxX7Y7pA7B1mDHiXgM25t9ZNXm2jZqyRWGjGBKz5zSEtRcFb18J49s8xmexMX82BU6tBu14XRiCmyF",
  "key38": "5Hm7LTkhkBYpGpv8cerByVhfGJybAMGjvEesT4ynVksFNJeY5EAaoFZxwg86BuyrDH2T7YSkkD75h1h3v1xbYyZk",
  "key39": "5wB9xgM1g6Xokxq1TxczRdvH9SrYtsJGMGPkoetF4iFdytmK3z2a4DgYJZGKZ8yvqCNYnHSqLzcVi6HnTJCAnvz9"
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
