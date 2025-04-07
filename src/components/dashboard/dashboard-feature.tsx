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
    "EZX5vn6NDFMopBqff8jXrwUKvhJSifswUDgY1cEhzWQXDdymUjm68M9muU6t97qTwZX12GN3zRFEEc5aSUdLnRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YvReSyfeYeXMAxSeuGgWWuReVYdurfRqGeTUzoy4h5KZjv8iUHiNEx3xVhjsKBgSCbUyabiEqzDGxqFSiz372D8",
  "key1": "3hpx9RgoXZnBeCKorT7kNHCzBdHHnF8NNp42ha3euM8fVxfxN2A5KXMZKsxFEwU6KUUrxHFCp6xRN8Ea21UwG7ih",
  "key2": "3noY5B3QrQeYND2pC1Njk33McxQq8JuYCk8TVbLo2DKghg1BJe98Sjec8qo9nyrNmDVJat3RsD7ACTq1C5cTNv5X",
  "key3": "3ACZXsb87TD7LHN6gEeYoNcGWciKrnVAjtr9uqfihXK7XZ3TxjZ7iSXVsvJzPZmkVMFgQgfnaUbnp2F2rVBBLpjN",
  "key4": "4LPhsUuD54oSZFdbzGEoYMQ9AiDKvAN5SrhSeCSxFyMJnjkpwUjzreRnFqf41yy2TxxrxaS3oLbru7voM3Qdzr2G",
  "key5": "2mS9UZcxu6Uk4PNB7LnUppxsfHVDJFM1YkDY1Q1VXXRDkJrCVPwuG1wuphZuN94HcJLWHuy6PpcBa6kPeZ4zEVcT",
  "key6": "2dV5zMAgdkMKXtSLjjGhuJhsDmtbSrXY9nbD4fwYbHp5mndTAVehmtQqjLUMsE3PVtk1pMRfwtzsMtsjxqCpAEMH",
  "key7": "ngnd3AWR2MGHre7Qdi943RPUR1R9oSgdcQrcJYMuGALSWmBbrq78MHt9ZhDnviou9qpxsfFR11bBPFqj1VVDNos",
  "key8": "oJyyCWLFL8wivNzbFNyLxYi4MvGCLJRH1JcndBphz4E422jRENc6tTMLH3QHwvnukX7aDJBKkCiwhYEYzfa7Bqq",
  "key9": "4NjQj8J3yUiEYPfy34pGn8CCcGCuosU3jciaN2o7z8bDh6BokvKmoi2MxWZaKaqPAfg9KepMHmtnqy6LbE1ZKvZH",
  "key10": "65yKv7JsT7Sxrq3ZoCuTLL8iwhKRDAHSXqdhBUgUZoMpmMBHk8ZGK9n7q8Jsq9sezYYH4qMgCEpfzJTFTaYgQp3X",
  "key11": "3GZr2ttTMpnjUd5Hdnm4pzYeAYzoh8ScW95XDmZ5yU6DV1PLmZnM7oP5e5SFKA5zLidHxiZ35bqazwtuZbq3R5Ch",
  "key12": "3E1sVRYeZE3TWogrwQTqDHGP8f8WprzWhWWh9fMNPus7vBfjcpNb1s58MFKmcmv41EsTvhRtqbSpyBpJtqfHvWCS",
  "key13": "3wWJCVAgzQGsoRn1AKbESk5TFiBq3i7xiYcnS4bkk27MsQY6okQrJiXiq7PcWGfWUvmcGUxArvXzpKxeLckPA1hb",
  "key14": "5bgoH88HJnd8kbN7eBZNaXhzy894kQFFop5qvbD9M3EHHDV5SQVKtyCDGHjXXCVH1myGMMLoF2tWZmuaqaiFyNpW",
  "key15": "5z1HBA2i73CSbDxFWMTW2K23ZX1pf8sJUXm8zZ8nzTeKSeq1WaU1k9YVrPEGxfyDpj1RKigJ4dM3Bc8kR225nLDK",
  "key16": "3V6SZfLvK2uEZUWWPTNUT8q7Cn13Qv6SMuf5VJUnaniJVt3XqN34G5Wbf4TGwqL9QdDjhGha583TYQQcdYZyxr8m",
  "key17": "C4JAcL7R8WBEWHCFfiVyuc4RMXFt6Ae9Y2D2sxmFjcdicP6WPHLv3KFybEgKQDyixRbow8qVGDx9kYZTEzyUaCV",
  "key18": "4ys9WjabFCzyLRrGaeipPwS8CddLb5bMgGueea4EL33HputUq8p68wTmLRytXjE2xRCasT4weJgLTnJc5oWSAhbd",
  "key19": "5CjDRyAH1Twb8wnQRFtTBhroVfik6nBkHCFDN4jAyTDTcd6nzyjFxohwP2MRrShCM42dwCsLmp1anQaTWew5QBbg",
  "key20": "4ehBKMgcTiTA1FYgoT8X6Nba1D2j91fVoT6hbvUNQT9ozy3o1iXgTYgT8EQ7WXmM81DNDAamCdFxpW6sUwFUD2A8",
  "key21": "4s5kfWNVR4kaDpkNvJ5FyqErtRM8HKe9bXBTY4wfbfzNmmWwQTqiqgvzoArku9M8QiFBtXgm8goQRu9kaqkzaakd",
  "key22": "6U24K3F9V8NCHcFkMC5Wx8nqMYUbjKZNFov9wiR8rN6ysKvRiaKygBdjRwSfDnSeiEqChNsF7aKZimknzYU9yqu",
  "key23": "39YWkcmqF4uWEL1TYyniEF3CE4GLQs81ZVtsrrpTgwqwQ9jCpsyEArQe2dkX6qRhpuAj1trbGvJV7eVKimVMMkW",
  "key24": "4ZeLdffCFka1PJ1jTVUJUa4zJ4u17GGyZ2RS1cdUW2unhB35mVxvwsHna4znARRy17TozTuTxRiip7ehXDqwgi6S",
  "key25": "2xDxrtiMvZwa5mx2kgimiK6YQQjSEeWLazTrctaFwxJtj2gaBYtYZZENUHF7GsETsGc8B3CxDrLpW3jTt5ASpwgg",
  "key26": "s1rL4eyRt9Do1u4CU3xFaKHoxDRz6d3GW5R9vwUF4RjJyZ1Us9PShbFVQPMCAJ5GJHYP831QPXnNKXDLu9F3TuD",
  "key27": "4MfMF4VfQiQZJh3WYPUcc1GFMueCPHpEGQwLe6Ze7SEnWMVKMb5XFGmozcvY4RU3NYVhjgoiRRsnFMAeR666z9Bi",
  "key28": "4oocRfvKoFeMCuinTX8A4r3jzbXxxxGqpX3sfGHHFfXpSQDDtptU9nDX3iSkbyyyVcPsV4uJFvkRTb7TBnq3dk8m",
  "key29": "vJXhjP1Ym1jaehheHBmi1ibHrwFSpPHMHtW28odUoDgv97V1rqrovyRXBefUPzheXTNetrox9oBgVHqShKuV9xR",
  "key30": "4Bh6xKi3XCNDBAmjC2HFQSJCDzkUt4qjxUVi2oSzbrd2CP54xXVqTG4Uw8VnF7Ya26AtqnbTVNj8RQjLphz9mZSg",
  "key31": "2BrBdrBTmqMyMrxbVd5BwqdbSTJ7rPmjvM3kb3meTux9CGDCHKVyetS2pkKXSFArMw5ox6dnqmnBkQQmj8iWFewn",
  "key32": "4wyTZWCzRk9Jo7YmcKThVHmmCEUp9xEm5dHTGkExq9xKkUY4uSZiEbb26LCDJA7vneSKA7jeKXrGLrYJtZsKvxNu",
  "key33": "67nozrLYCTJjbD1JsRM4XHaPCEaCVMkGzynXmjksRA4EUsL9ybsKmd3vhC7eYgD3GWCdRH3h7VTfwfadL21Lrgd5",
  "key34": "4vneWpu37AU9m7gucPoozoGEFqCU1aDo9aX7NoX7hF94T8k31egpepGenoM3WoT6VqACrQqvTxUWs4oUzdX9jPrA",
  "key35": "5GYahS9Lbw1AzXqnHq6vzZ6fu8EFAgQjVFcSAAvgjjHY2gLRsAH9wDXyBputSNAtGq2yzpeDLz9HRdRKfLNyjTNK",
  "key36": "3t4JA2nzzxajn6DzmYB5LbfnHMEDGN6k9fk97nfDUS7gbj59YMCf5b3hM8z6MvGUCQVJpuTLqBTi9QpoMaYdqWz6",
  "key37": "4yYSV86xr2LVEfZue7JSN9CftrdNkfNXLjPyVd4vSDXdH239dCb6GarvSfnt3byB9waW1KzbNGbz1uRjyFJ9nTie",
  "key38": "375uQytSiVVGtupek2555Vt23H8Gv2q3ip3ms8tniESqWxP7YavvcSmQ4mzwg4RE9chxRzTyXCMEsW8M784sYWYa",
  "key39": "2Jx1rvfeSQGp8p5BwGvEKkYT1KzoHuzTLJnkzfw9YNFHdS9mKeMTjQoZ8zirTG3AzTgq6T8J2MLsSM1sfS7exvY9",
  "key40": "x7ncDd9sFqA7tTuozJCDzgfajcxfA9a2mS9pQuCbGeE6bqtuRHRyfEjLaoFea3Ss6fvGfW5th3VshSpMT8CtsGm",
  "key41": "47kw3LWBv77S2DqXRbLjeadypPkv1gxVLbXGsNCBWqoruPVtqwtZv6JyjQDieGdP6J1BzoQP4d6rKcQSHmPQBBgT",
  "key42": "4yZnAiX2VgWT8kgCDi9xebsjya6X8vhqa6cUXfHAo2sYmDeEZyqhBV1sxxqrGss1aCfRnWfLmbDbiEz3g7cyxBMr",
  "key43": "3p5MvjxoWupdeJZCH7jXwweYmD8v2oWn4nNr2tYSUpGXMUrTBRW7vKPWgTtzxmjwsPK2HosqnMrz4uBDqG5t5NG7",
  "key44": "R9LnhuRuSVtXUXvsFtfvLtoUQPMuJSwNKJiHBhe4PKKetL44EkJaDasFWB2w8AYuotNxUuXrT3S7aQvuzwFcZoc",
  "key45": "2amwTAkRro7zaenjNViBExCTcYb3YKKG661m1Mp8K9LTeiyJTys8WWQGKXpRCRxbQVnPWtcG694qz13MYAU4tnoh"
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
