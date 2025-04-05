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
    "48REXRUY5noLckt9ZzkRSq41ghjMf3TrDkJ1NBmCoZ4p4pXMzb99HAZZ7dV2HreeWZHJ6wLQWSxqHTe2BJrnRCua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKM39RDJnrHXsZ4x334h3RVPFGj2DTGS6xz1FLwDVBHWSNnGJ3PijbrBDryWkYxDa9fwfyNBs943iajn5w74B3d",
  "key1": "4m21va3R4UN4bcPEmYRfTrb7Rr1mxAkjpC7wsvx1ZdJ76vMbMEVUbXnXHoxbtaJSZX35HEMJQ6LqGMEf68oXMbLF",
  "key2": "25BaQZnj72LSY4XLjZ61parjpCDPBCp9edAAsiWCmrW9YDpP8i3tZ9Hn8UwvsbbuhFvzobZmoXZCHhWKdA6w4LPL",
  "key3": "5GYKicp3utML35ncYpoSVZeEvAcpF7WPZuudRDz461tqFP4jSnJRt5h1qqJMGYUXgMXKvodenpLEBaXKy2iXRp4t",
  "key4": "3UvHM8JtRycWv2nqn8aWFzEKi2cFQEHHBaE9naF3fwE2JsZVABd9nBGubKCfTXHt9wTzD53tYoHrJaSuYfU1ANnj",
  "key5": "32bWTSpHgeED9PaXzuyAwXtQuyuaR6faGoGw4WhmK93ap3MNbEeFYTZMwBkpW3fRfYcEr1imgNcdiUaw5jycjpJv",
  "key6": "uqkdb2PngvyX7xTmqubCeqNj9Dx3fmfxTvRTj5zgrvrfa1g5Nu4BmJfP3ovGKio5zRvToHVMN2E8icJWWwiG8r4",
  "key7": "2YsqDKX7sveMxJZQrV4oRK1VJsSLiJbeN3zQDx7bryrPPE7RdXocmpZBuqKiLXdWZ5KPZKGrtKqs9f2pUEXxtoMQ",
  "key8": "4ChNyfqAGEwskcbrtMMoAkTySdrYsxDzunoXhoKcTbhDHgbeWfpgRS9gvPWRAUXnDYDQ7oVpTjuYpdabpbWVwdJZ",
  "key9": "gNp33bsqYy2x5XjRDhHyXFUS3rmjojDjDTbZRRgGng2RxjZhL1e8kHyhE8cLxajrBqjJ73B8V68HtaWg2fBNXQt",
  "key10": "4xZryGqwgAcRgn4zSE2w5AYqnkNy5csRGcB737Nxzw6ETaYxs7AXqitQy8Fqqx41GW85DHhWkZQpgzmcVqCoxd1G",
  "key11": "64jejs277v5fFvUdHiRXx6ve7ZXs85J8z52q1L5Gaj7TMUYQ3wj6oYa94JeQHVMM42EvMhUDL2hk6yHfLW6BjsbW",
  "key12": "2GcDovGc6tS8r6xXih3rzjyNaM5q3gXbVdGcX4Ns3syz1ncBF8A9NRdP3jVDtQapHozzJRWfBREk3oXFG2f8YEMx",
  "key13": "2L4E2LBzk6t48YZE8BKj6K3yGGUozcgbdZEkD4pR2kh4jRut5RkveQ6YnpA58iYpGP3Wv75Sbqc6ysXtc48q5SQC",
  "key14": "R2HYsVEcrWKV73RsvKaTrjCFr82Rrnq7dcWoU4nMDSJLpGVztrLCY2cnLJ6sUEa9mChEsdjjJoDW13kYqNRficw",
  "key15": "CtGDwPYqmQtJRH2F2dxuDLodAPd45QGQ5T3djhdYw1cYWJcf7BGGKfaaLz2GndEFxaovcmd78ahoySrqZTfmDBh",
  "key16": "5iLVjPzfgGKoqh4qKv3yfJaB3umQdBigBp4vitVbP61S4EKB6EZWonqsEwdhAqKHwkgN3vzn55FDBibPokJWJrzo",
  "key17": "5YXvRMMDubKhFhk5oSjez44cRradYgDYg9Dq93NsQXsqRy1Gm77avAqybzDCqHhuf9nrRNr3TkefcS4yBt76Yd2S",
  "key18": "EA6kVzcQsiSD9EUt37Ak4NVhua2EaHdZwB17psmMPvnaQvXKPV92RLr6jr68sdwsDruMv8moeafrgWCRueksDvs",
  "key19": "3LkmkMvXfaoJUv3KKBuRPYrNJdaJmBczo2zxBTghKfAnG5jgnheJJHJpurSjVbBRbdPn5UccdkhPQrV1k17a5c26",
  "key20": "62GUSGkzSnh3wiwD54ctg7qwfWjf46gELgudpYJdDMQVEkJSgjvyXybDVkfixsJ7Qx44K2NXQ4Jgf8KRRxobU2CX",
  "key21": "5FqtYiyMC4sn2VLg4cy5JVcHgngUobk4FQ8XjG7y4o3BTM76Ffw41yGLHHcrrdCrWydXYzoQLjyFVx3Wv8LAwqLa",
  "key22": "236MBvpfU1ETwREsuD6VQLCtot6NMYmD9n2y5HuWVFXL9gEfgMXRUaDXgm99ZAYfEkM2ukGpCJ6to1oDHTk17q52",
  "key23": "45iscsM3sGGCX3A33WERjVwqpApzwq8H6tVCh6uLjkxR3PNTKcwrTGUUvBhTLEn7pMCZVSg9FtSDUzjjoboh2fTF",
  "key24": "44RFAMdHmPzsJqvfTHng6Rd9XpoPrhjZm8ZtY7Q4boCquFPuxVepQpfzqTRGA7nGakh5MmTcoG4fffikvHMEsUvm",
  "key25": "2dMuZ8TvS4rnPT2UtdKzYv4bsu1DLvjK7t6e4iu7jm3tSS28bypZvGabAhMdExc6hABqNEacAamdYmBMJKxfqQjB",
  "key26": "4nGkb4fZ3RGZskzubFRS19dzY3y8zPAMonkFyVRD3hqhRnkMBGeBApyyaJYkcxUNoG2H9jNhxry85gduiZpMHeSJ",
  "key27": "2cRN9BsbLbHKCVCjWRY87Zvu1wqVmbr4SKgnfE9t1ssEhc2KkAzodwPdfL2ScaHxsn8NWp2SW9T6QREhtSBWy5Y2",
  "key28": "5ksxbuKV9j2ehrFvWLooup3M3CDVR1q4H9Gjg8D1wJzpLpepqonRgPppnvkQUSmGzZuGBS82ukqQCaFZMD1b8pNB",
  "key29": "SED9SguWgPV2pjHa6Dk7GcRpQbmSHQBju5zMHnD9rmREMMhaK6vabNNa8Ciuib9KpHhHN9h48XnR5vt87xCbkZ2",
  "key30": "3KwXTVLEVLPazK7Rqi64i3woAjehjz88DSomuzfiLFKbJNBhxiGjkwZuafT3xVSrSnxV2nWPuA9mpuhDeU4VxxyL",
  "key31": "5KWWLUh5mj9LPwBXzJDAcDiA1pixTTjbfH143ggDJNvYioAGXVvLbmTbJTPqDo2AyJA5rRJqaMrk3mw3YdMxQEek",
  "key32": "5ZfW55ayzbhPeXfue3SyeA7m9t5z6M6EreynvHaZynUUPBucNSYTDGHySrpZUSNhksgnmZmpCo4Rz3eGsSvZB8Qm",
  "key33": "4nNAd36guJ8g12eFgUYmAL34QHdqb39i4SLBGDazcihmqaWMmaTEoLD1ghd23dSMm9KWuaoNqSqCRQzahgK5yHwQ",
  "key34": "4zWvSxfMtUh2R6M3wTX6GAKZj8ijjGgi9wPLBaNudY6N45pMuRuLR4trX8QkUBB5RyASLL47ioc2gSvwjXRNX6cp",
  "key35": "28s4PhhCuSY3gdCkyRcsuMvqRwuK4ndzWxxLPBc3X5wA1KBauypsr4ZSabDj6KRcQZbbg1c8Yqn1nQZc6XE5WHZx",
  "key36": "3VV2Cd4FbQ8fHNxMzXP5Yn5zZLG1Eo9EYNfywakdUr8bqwjdAGv78w2xVTFVgkzuL6FGDoiXCJY1dtChbxwc89mz",
  "key37": "5Z9KP8fxzUxoCWub2Ej12vWXCEAQRQCENeL5HGhdXpGoBZVzj6tNGUS8C4k2hgdmFdg3Quwtsob6JBBbB7h675Ps",
  "key38": "2zqJ8ojbTjsLSFam29SjCMfKxU6nNucjjyCbuVLatB3bD2SSzRNt2hxU2zhuVnottpj4TTRXxGe8TS7QYczpD5Yo",
  "key39": "4FmHSoRzdUTJhKBXAEMvSNxQg1VWv2dAUp5wYMqFQ3qdXNt3exSj7DL4e2FRZZ29ZPDwbbDnxqx3HHnRGEJ3bgJ5",
  "key40": "kSRH516bGWF3PdFXf9T4TA2aSrNWt3iS6msTGAJrzCkVcMGbvKwrd5fPAwSL39BkZEX9NmbFCRveTEHZ17TQ674",
  "key41": "sQWSjqW3cvCrxZPWBd7k5jFztx8RkghfC4bNHExny9v1PnedHoAEjvBKC1sMnRCvRPJva7RGUfHZwJZuTbKQtFJ"
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
