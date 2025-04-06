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
    "2Yu2At3NBaH5EhXKVXWhF5ryr22WVk6c361453vuPqY3dYHay8QRVRHAT1rmPKTgSGiJJnpFUDHDEucanMFrvahg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1iXSXLRHaHr2LyssVXdW118UdBKsoZqxu61LEamnv2GA4jDkRg3B5oJdvvttxkKEsW2jXZZYES11w8iF7Zn7F6",
  "key1": "5tpoYb7LCjeCpTmfEYs9JLJhME7aREQHYpBsXR8nFHbq7NGN7dP1kGsV3dhB89TsjLBAqKcp349gNGnVYiBrMJz4",
  "key2": "63sVYMxT29cuQU3YrCMTv8nfqV9mG452Zw3YWfnMx7kXxgNEiUEMw5ccnmj2STM4KuiiiZqbFtUsJUSWheuA1BZ9",
  "key3": "4iwteVttdo3aeYybyC48MupPzA6GaYBQ552dcMLxt5ik71qfHtpec6c3sKQYm25hMLtZcnMBorRdQAU83r8rjdNN",
  "key4": "64aTVMKu6Krauw8kZgH2W6xxwPEYQDdywEN9kZuWwxhLFh3Qme2o2DWB3AfQAtvXUdAr8WWdeQAguhzyrTqmNYt",
  "key5": "5wWt9JeuAPr2U41mq6Z1nAX4dFFimDmqCtm7WjuKjaNJLsHLM9ibg9cLXbsrq8mXUmbvToM5XnRqhSZDkNQ5bqr4",
  "key6": "Fo7MmfufXmH8bcWrB3tfDXKeHRc2DtFHbe3n5MqSR2qrzav75GABYgf6LrBm1RH56UMHvhGeh1Vs2WUKZ1yYu4A",
  "key7": "jQ6y3eaq3ZSMW2ZSndCPe4xHMW1CUPQE93AVHUUW7XKDRaRadka3Hx2zufkDsprwncqECWouBy4KQmMCnWR5TE4",
  "key8": "449sKaGwwW4RaZJFR37urDDhNi3wUHEeGtk7Tiyb5ERkohzaGZSSZwiJ5xBun8iYp9GVGEV8jEZty3J1PYJsHW4Q",
  "key9": "5wWkTDECZEZX4uJZwsvYr1VKP9SQM6KMvXnLUYiCuGCAocNe78w8RwLCBEhFxFNC3htLGv1McUe9xERtJjhQFG1r",
  "key10": "5oVy9Jfwz4LUgeEH7YewNsy4Bai2yHr8yNsNdGWyD27MYi2bYZibZcbMb3vTFGR3FCdaoSdqoDTBcQQgxiXqZ6dk",
  "key11": "3jejeKUi9CoSRodCjnQnCLeaj8wcchGMd9gZBXiJFjszBYTiY1FxWZ93yuHwYBpJ15NrnQFDc33vcpntgCwkVsXL",
  "key12": "3yBhPSgDhfooyCxFL6svYemPncCcbJumVj1GZQexFa2SSuqAHu3Psz8eyuHbQhpvGGJAbfV36sR3iYw7pY68hoga",
  "key13": "2xX4KMD8Ug5iMcg4XZcsdexgJKjgQc2LW93BXwAzhdo6Zq2Zenzju8EWcrb6kWLdkaJ16UYdTNcG4nUyFZHyhZV6",
  "key14": "xNv2sG5eaHG7nnKDVnv62r62KkLzqv5jxr9Y8TMioDiku3FsYuVHvkoG3GcTJQbuNx5tBnn1f6sRgnEu1u83Fu4",
  "key15": "5WYjLf6nwJiFkBGSExKSJCK9e1cQ576xaqDvDFRWdNzeTfCsYEQonC1r6htrbtEaMKJzvXrj44iX3XJChLFuzQsF",
  "key16": "2nCfGvxLry1ESKWkBDZAnvPsHrbqzrb9E31JTeXHPqrHz57X3hHz4wVcbb1ijEVpM62UAhinsy7kEyEvN1mKxhrw",
  "key17": "hcEpgjZVJXiRVRrJJhZfJtYfsPCQr2gaazofTKBseGJrWpxxtPXmuHxRC9nBNxXn5bUi663ahLJqX1GX5omkmVm",
  "key18": "42nCo6LHaiY1NP4U8oiFYtrw8ZwbGNmfBD2og4rSEuwTFTnz6vgp8LJP6jRgiKF2D8fLTrATwTFU1bDHu8Hxx5op",
  "key19": "2cCfEFMoCMp6YCg8SAvXD2WxxYwapuXg4wNQfXP7nE6yzNgTZ3D1YTLxmoAmnYMZiUz5eZaGbjeyhfGnCtRjZKvX",
  "key20": "3YkEPidXLtNcCkgAywRara7mDH6M9RTk6zRmU39QU9zjNgV1HZEMwY12efVzBou2fsjRDwKrUTChDvYggCQKPpYq",
  "key21": "bWMj7S7q7yp7tDT6EuygRRMZcVCyZMzzgCYoZBkWTAQwFkykRGqjo5wPzyQRNY2oZ3GvnoPNENoT2iMxx9zpzMv",
  "key22": "3pxsjiyqFQhVBqSBWYTHN1GCvQPgjcuLpWg9gFwdnCMpgp8GgAi5wBg7oRijnKqgLn22mDigZQ93t6fJXLZmZK53",
  "key23": "5JNeUiradcNHQeX3akUB8afwnWHhCANNVkcdv9snctWiDWx1KiJTSJnKFi2EoTm494LxvQq1d5pRc54DbouvzXz4",
  "key24": "4BN9Z3WMXF4xSQtpXmV92eWAHsozhaM2F5cZKSqR3NfNnx6mwo3JkyVhVd8wdpvgnYVuuikRXtmwDF9V3aAmsvm8",
  "key25": "47fMRiko3DA2JT48friaMdAhT872UAdUNDH3ircSLxDUXLFCHypwMypQ23KqHdTP3VBqCm4yRETwGDUfn5xe5Czs",
  "key26": "5xfYyaQoroL1FUaRiB6vFqiJwBqP14vB737FpfopdtktfwBDYtkyH3doPQFQfittA8hxfLtq81W8Mo32qo16TKqH",
  "key27": "ipkua11dBoKBjj5sHQ6r8Q5Wh6wXKEo3iPoRnjbPrfjhrNe3Gea2eeBKo4SRLSavVJGFTZNnrNzjUnTWFNPHGMk",
  "key28": "2nK6V8VePD4J5dctPKUVRkLdyj9XtT4sZMDZ6Hb1s6TSeyEfBUukiBH4oHeEFtCc15qokiLyn5YfDH2gdiYPkkAe",
  "key29": "64GL5ZSp3zS4tHkXmDr8o3Gh8dyXngiyHUi7pktSJdgf3hHj44d6TnrG89QeG6jn1Rx4sWP1aLmi1fLwvLi694So",
  "key30": "FWSBcjjStFPQe27zpUd1p5xuT31JbSwD4HX7X9zxTK2oaXFUiUsSxPVXD84uHukstmMfD7aT7iMbdrtY2o6y24t",
  "key31": "2mCBb2Af4TzAaJw9k1mFtKFj9nhQ5ZLccoajGkwC4f7qhASPmddDfDAnWjVvRmjPY9PXennQeWK2d7tvrBwptV2W",
  "key32": "5aNQL8Pm9f7umbKFEnqHS25P9ma6uSfTYYBmuoXjXBXX6KcjSUqxKHD7u3TiwJ39LJkAAxxzto48c8t1hP2ZoNgZ",
  "key33": "5y22hakM42e2mCDQidJ3NKjRCiaTxjzNDcwfHVS5utHbPaZzY2rcM9d8TMMDJbKiBg8wAcDE6jybpxMPGaMhgnoo",
  "key34": "3ekwSMMD2Pq5WaWLWmTYBMsUNCttzQBQVVhKxWVsUQALqndAX7a4ELxg8fbLJxSjymF19iKvtvQHKqTGKHDjWqp8",
  "key35": "Q16jxJaRfrr6SNUxcwNnfd39nwPMwLWk2Dqs4DYQis5MgPZphzb4SqRg6TvQ1pWowAcxaaoj1CqFtNoLzcETv5w",
  "key36": "5gR1gpnBKcWTyRxzrS4sf4xT4x4NDFGTzDKK2RCrFJv2wRq4t67KkxUhNPqPfJNeiaRYGvgevMXQHC3UgyiC9HFo",
  "key37": "EL2C4FEKPiLLx6aceA324Zp7XNGU6DjDJKAdv7HzZLiP4VPp54cZ7BKssdV78XJnxEc7ig62kcsBe5pSu2pdaZU",
  "key38": "4DMMH3fTSp64Vi8VCXT65LUmB3Ni22mRJe28YAvHBnnnBe5ZarcdMpTDSKt3zkHaMAteuMFMFcp9ATSyWPXFeq3c",
  "key39": "2r5Q1HQtg4BEARjzAYZpmw9uzU39vy9uxLEJgtkK3z9LigAnkasU9s3hNBJmsaFkBPZvom7uzaWwLX6op7fvvdqu",
  "key40": "4mbYa3jTo68sUoi81gEnFDK9NTxSZBG3ndc2ZfZXSndBDno7VMV2zNsKfWvrDNWGigmZsa9MsrcpJkHWq7rzcumj",
  "key41": "3QofMTqpA7mX5YaND4Dzoue1Aca2bSvepX14Ue5HDUiVPeMY3vZMr3d6HurHt25bfqGs7dTxFCfuvnLDwuDQ5scQ",
  "key42": "cTkhogCzAKYzGvtQNddRYza3ugHRw9rzHw8ydzU4R2BNsDap5LgYXBVDCAFnyCo8Pi5vDi6GSqEkWtoMkpDpT1D"
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
