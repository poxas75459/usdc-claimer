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
    "gfDAHtz6wQ2Pijaod9xGjfLLyn2ftcizscG2sC6srgpmo3Fh4Y2L6sfKeWYX5NK41STyQUhBa7x9YAYyyELNb7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKoDw8uUWDiQ1CeuPUupFg3EFKFySRhteY7jFyymwvdPSPU6k1cctwaG8C6YWwWWUNJ6j813txELc26rFv2YjZr",
  "key1": "2YYy6CUmCQFi8HLdDeJHeVWmE686kDhNp17Q8yeZ43iyCcGcsuX9ttdqqFRLHtzeRAY9HBQVdoRdpUzVEsYP8saU",
  "key2": "YW4U9AVTSeHvcJMkXnML16opAn9PevuvHRfPqKAZaP84tHxzBsA3jNbjHuheY1kA4HtX877Wx26VVCADqVzYtQz",
  "key3": "3RPgTootELTspEpW4CUjVavpJgW8N32575nq3EUN3B81Cznj2sGPNhgRiFh9Cs3EQxkpRoErJq1PJ5oQPjzdWvEh",
  "key4": "2nFM8aRc4P5e7bTGzvMA1URLM966XXBgwKo9e1Akf4seTwsnLzmSW6Lgj4iNqQH1S2yTGgbxEG3qbaBYTngZhZDB",
  "key5": "3ZnL3kpsER8Avoe29Acintpzp59VqbP3UA3BGDMyAKZbpCD3LHpz3eFTb4sdxBvTdsugEtKZ2hmQf4sjuQENQZMJ",
  "key6": "rA4QdLdXVKviTEbd99WXj7hSYWCD1oi3P9X6zzeciSFhVHVGzqpLrPjPNkU4GeRGFjeujAtZoZj2U3n77wxSRWT",
  "key7": "2aycd9hnHQstCvdfCEgg1jWTCng4Ppob6RVnsTug585z41syn6CcavsPwZxipS1G65PJERaQ9KEDzP4qHzVKnttB",
  "key8": "kJSDepXzWrugA2cfgJvnmeixn7d1Juwq6wocfhG9LDWySF73oLrQBfhexujoXaN4URm19Bx9ar2qVEGAo4ffQf9",
  "key9": "4HGJT9gDzLscRNEakzENc6jxozL77VxnC2LBT3oHA3zN44EtZjSe85yoKK1nFvqguZyKfUM5jh6PdihECfkNZTHc",
  "key10": "64zhFYNHXzSpox8vcc6cv9YFdNFKQjr6KwPL7CAuuxac1KP6oMPn6SxRkk9qRsQZXWDy3T6ouyRLJGSz83gtCEee",
  "key11": "SjEUrTdqf9PmYqt3o7xEykjiKfA9nz2hED6hFVnXV2zyaKq9xf6ZF3nHgCYGcMvSYcTnUESN4JFkmFsWGUwpX11",
  "key12": "2Mq8bAV2Sn5GTpyEfyo1EJJNMhV3zYsQTG32gX71vBARBR1gg9SnyRqFtZEMxTdhCGP37Xw7AcH6H1eCNXhfdawG",
  "key13": "YegUKcbPzwSg6kACTNpbRXxDYHtWa6LxWf5MyoHBreR675c9ecsgRxmVFQP8Tnk4kPqgXVUi26XDsRkHpqSxbTh",
  "key14": "35d2w8XVmu9fAYFN6FosLwh7cG7HxSyTDisvAkQCPVd2kDDd1pNDnk6u8N5y84i79JTw7CRJnFCmWXp7FXL3C6eB",
  "key15": "2YGfLtz5tLK6CiqJSdm5D1SsTkdgxx5e1YMVaue1mvwYebZT33VCLE8eDaifQC7crmGZkX4pwfAygjqLuyPGYUdL",
  "key16": "5yqXNChSzQpk69UhpdktLha1LUBu7wuXXbUZkfTfqeF3neaCqqLBXBCuZa1fwvBgAiVr5QFPWWY2CBRRFg5EShoh",
  "key17": "5XquCNRGUn11mjT9vQUktjnckgz86ZPzvGNo4Nh2na6S6yBjQddwrv4AySNqCs64KBaWPJAfqTbZ7CVsZyPAdwMq",
  "key18": "5dEZUaPLhT2vRDa6wPYLUNDZGq9ttn7gco6a6yGNVsyfWMHxEdMaMUNZeBKyuPy9gTa57egFxqjFHb6EJMNXtppj",
  "key19": "4s9ECjMpE3Kp2wwZNC3gSPLHSmYrPeceyug1QQA6BcfKYD9VwnjrJeRuFCMYek5TRsXtAc2pcGURba8bxgZEsVZ6",
  "key20": "4aRM7GjVDhopwBnLsWKqqUh34mNpCRQmyYrUrWdHeyvbZJwTsZVTSmgHmT9g7nyW5tWtUh3zbJGGzzFocjepND74",
  "key21": "cLp9WtJJENXexR8mdbXE1XVWN5hzvYTW6PS3sAzCpuwtmiohegsk5DGM23gXEyzwLUxzkiVYQS9yLAJde9MBEhU",
  "key22": "5EZSerGtqVKhNfTsoja11bLASUqbEFXrubEnVsFQh7aRgZfr5BAYJL36eYhZxmi99TwPPBnC9v57h2KDyWQ3p59v",
  "key23": "4nAakbXHo6TPqHDwvE3etQWZpzogiCXS9dfyMEqCQ3pWWZTmMrcJaHUt6ZNbquKwwn2m8zzawD9xYFtLSfbtUQGf",
  "key24": "2Kaqgo3GthxEYhf8CSXyLGnDX8zZ7pgmEJvrJ5A8SW9tr7QwQ6xy1kra73oTs1PgTvwqQxKJPM8baawLxzceKC9Y",
  "key25": "3V5Ws98A1n59eLRBrSFqfvyrA5RRYWqdgN9UE8BLnHAwpANVVxqY4ABoRGSFEzWwwDwXoJJ4MPuKfhYTjgnETjss",
  "key26": "2f8QqsM2BryhwBZ2848MK1DrKAPmgmitGJjCLWZwiraxgPR4MyaVfiapPFCBB1KuVjxf6xyBhU5YjWZhKSttepwH",
  "key27": "XQRf9QbL9QDMn2TnpgRrR6So7YADghVfC5L9u1JJDE4ueiens4owynCiRMgw7D2aZoBYwqu8AT5xjPojhby37NG",
  "key28": "5QjyqfWd9cSRA4PGaGVb5fRqa2oM2NYMymkYkf2jHizoViyAx82791jdnCk4NBFmjNTPT8Z2RdUEwUjykpjGJUTF",
  "key29": "2t3wp1PiayPCur1K63bhMVpjwdhYvehDo9fTBSWY1jLMvyzbUF1h4YmQj7eHXQeSbgteW2HuJYYiAjGBsotUQUYQ",
  "key30": "EaE54nP4Z5wSJCxdhsnodthd6fZw8po5FzsZAbmBnjKH9oovMRkJBnhkQz1qRQcxKhdXkoLKCLPrHaX7cTCYm6y",
  "key31": "d23wYAhmyjYc2bFiwNFxRVK5qKpUK6WPvBdSxcVDbQsp1yPKGcw9Xpc3hiCH9EA2bUixKZ71GJ9Pm32EzkDa8Md",
  "key32": "49vCFuC7iTtG4RezzfYFUofmkeYGVxj5FgUiKiBJL5U43tK6kTzutL43YKeU8LHbr3qpkQsGM2RXWvmzQy6Ns65E",
  "key33": "4VaYmpNFKMVUPQxbquhGQQuj16S3K1wLgGyLZADeVLAgZ3giohho5UTRaSqgrgyKkguEfGGo6yCJXxVcEfvNEuLJ",
  "key34": "4PPwVsYwsKGQhsCn48d7GJ6GEVBJ8m9AQWPaZoKQUQUfdMBJNCwFYV1b6FpVmHoSFCzd9oxiF7ayo3a927cVJ2mT",
  "key35": "3MNH9L8CnFEy1X6kabfJTZ9nLGZpwnvM3QYjNKZ8u3e4z9rbQUkJCbQVeLaSNmtfkrqMrLnejdjbcJcEWe2CDNhm",
  "key36": "4eDbGawtcnqPuQbarvUyDKS8dkPZLWxVPPDZNhzmZmk4dARTTz9JYczxde35e8kNCCMeoA3YmVcrj1rdDKSTLpqG",
  "key37": "2LX8xCqh9mUV8DFqmsQmmY3UcfVessu9gpyNDpDb9uChkMUsUdGhCpZkVSWGfuFYKaEkrXWX77Hjjx4B554SZ4rt",
  "key38": "3RJFVvmdMCGAYwH7aoVEv5PGRE6mmxoowU2m4LyGCpmbAEiZYRHg44JzbtvQSrEVP5b2YKQegcUh2SQs6FZDQGLQ",
  "key39": "41n36mdgo6EEFx74E4LcmwaWvA3AigdRWHDyDWz2i3ZqxBMudYCBzAjMqwTfV369eFWeqmyB2E5QS1S68mQgx4Kj",
  "key40": "2FPbuaiKtF1jNqaXLobFwMtJoEGVj5KnDwNxUnSDRKWqitXnt4bnM8rTmAQNkbJYc2i9JJELMKPKUpvvDkrgT2Wh",
  "key41": "we1fWSfBzzMuBCvBN1rjyEZokmmizZkMc45r28PGqZRmx8YjSr8y8JSLRomnZKP1sbgLqDcaHczEvV725mzaL4U",
  "key42": "5rzKfmqY2Y8M7CWnenWTpUYNEzJizDrsEpga7vJFLEmmo24ncYvpR8xm6ebG9x18wr4kmexfK16w5cHbJS3GGKTX",
  "key43": "2epuKcuhUo1HMxPh3HGyUrfsqkYP7jbbKDtpvdWmoF735URfzBbuP48Yzn2nJahsVmVRzBtzsTCFwby1XyB8ZbxD",
  "key44": "47MDFhebjWws8tQaonXn7RWTVLVA28gmcvCkuMV423GDMKtnt2zwpgtDcWFT7E3bzRvE3yXrqvv3SQTCjxxJ4HMx"
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
