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
    "Ey9J8xmvMc7syfHeANidLzpCHrs6cB3fspt88SMoeALu98CMKTaZqrpkPF9qFPiVXGbddPf9ez6a7xNSQS9hvLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sL4EvdyymLSTsQvaTJ7r9uLcG48zHkh8PmdVJsvc7TJTzY1M2SH6V9NKy3RHHQiF7rUXfgBNLt53ozMQD2cRTNa",
  "key1": "Bcttzy3dRT9BAYradCcyjPMohjjZiANaT8JMipPT3XwbrXVzwbAhyQqkDVnLSCKi9oSoSWhammkNB2BhuXYhT4g",
  "key2": "4NLwKNxGXD6iU2UkKJCyERCy4udiU6S2fYsnZTbTGjL34YLGsFdreaFVsbip8SnGhFZMf6zp6n3owFFen5R9n77F",
  "key3": "2jCbKj2w6U5DKA3PiGiuZWf6BEUXaTrzE7gVK58Y6mahn3vjrtF3uUcexCLfuqVNrKThEbshoajyWzes93AEpp4d",
  "key4": "4JJgUNTfHBqRP2oh3U3jESvth7iL7K5jzJ6c5sLn64ybVYfxiMZydtNMu1o1LtdpERt3KdLmttBjCPpfevNSY4Wi",
  "key5": "4MLhpjpyKDFdd2fpRQfmXFNMVBaU4ZEKMPwVScaTiwMAh16htQjrYaVyfxF9yGSmKigbnDQ6qx224bPajbvxoUZC",
  "key6": "3dao6h12rK9gnycBMcdXfK6SuoFAj4qbNEBCRzCmo1vwimBfPDVyyDzFAzg6rDV16EMecKCJVHcRx5MkZnFbBMh1",
  "key7": "5qhzhzRmunRy19TsPReAiaoLNWTTwkcLAAZkbWDDuH9ouKAp83Ph5SBAEzdnSHb8MjJMJHq5xh8hoPijvXAWFV1d",
  "key8": "3W5JYHkL3ACq2ooW3uGegMeCFmvD5oV24kPDYDyMRWB4BeX9XSP1QKUdj4sFisxKoKS5KbutN9nJvrhA9XVeqho",
  "key9": "3hhSJNR4EF1vx5gtDpWSyDFT7m8ajnP3MMVtiSqNitAs2rxJNUM196Nmj78MxuttEcwk26J4mK5CJtEiSNzCRjqA",
  "key10": "2Yd5eeH3MJrEgz5oHHut4n2nCCiXLGL6kk83vBbkoB7nJBMvnug8SgP3aTCT1jMi3XEjsWhLAFEJqXugDUnFj28C",
  "key11": "3aLpKoAfpJn7F1PT8nwUEQadHKXaoCjjd9kQznwMzDHD4mmBkSV9QVn25XhCie6f39UW5jk6UMTgn3wdatgB59i",
  "key12": "5Pj8wY63nV4ypqavevtcrBX1rSPFgyoRkDMaXqJyJSAZPQWUikPoLE7EVF78GpMwHRVXXVX5b6XgqWKPfcnpDNoL",
  "key13": "46MxuBwKefcAL4oaLW2FAbt2q4M5UF1QFRYuuWenHpCFwMWW2Umt2NBopjp9T84fRtETDQ23jf8spUKX5xU41QNh",
  "key14": "2B3t2LwATgB7totxMeFdkeJ84YLviamm3MVmynH6Whuqk7C6MDwLpzYep9GpZtsYdZUFz8xjA9W8q1LDpTarwpWR",
  "key15": "m8FkARXLp2ipQWW1wdbBPFYqcgT4mUra4zc1C3HxtkRsVWuRY7ZZk9UPUni5srKm3u35yraLECHPXentDwJjs1m",
  "key16": "5VZGheyJ3Wcn7MhfRfw5ezpMjwsWxkh3BF6PyLcfDHZabtaPGu6zCigZGf517uq2Q7s786iBx7nnav4czTC3JCNB",
  "key17": "48eAgJawAdPSDdPKGJdmRjdnbxU4YpfjgrJV5WSvG4zrksF63gVrWPfT2qUJ6iqwoUq5h6awxChUteFjFERpryTz",
  "key18": "387WHLo88BbcqC4gS3pM2179toMBxrsUPAfoAJMAiL9PHmWeWYs9D7Fk6cnh2KYYCPyYQKsFMNkM85wmJQkQQouM",
  "key19": "668ReMD55wZVqcE1khvxsHFBCTCFeM6ugeo6DGC3UJeCuM6UuGBPix5v22Uij9QQChe972QepdYvri8dYGCNafF6",
  "key20": "2oUp5w3UFdg7f8Rm9spTktdRNXHz6YARdM2tFLZPte8uHQA8Nz9KixBkrpixqXrVdDFUGEjTcN7g5eN9peHKF1mp",
  "key21": "3qDmBmZSh2ChJkLJckkvtwakJkPy94hLfdmaWoCgj5RhzNZjQUTrz9DpaeNmCYgnbZUhZjZEQQerXvvZZTqvq12s",
  "key22": "wFFxPJE5FJrGE5vTW23egqknL4yrTuVttCuEJuEaFHvMTML8uExMdWxvtrJvcBQfTwUx8VmMQfwvsdhDVL63xC5",
  "key23": "2PyDaZXUfF6dbJdd2rNMFF3d5hyBbX8WcHmhETEGrjt9a53DUuP729GLh6p3hvBySRKyhEvTcFo5EhVKZkywd9x5",
  "key24": "5hKumxGtaHAyL1o6CGeDYu5XQ1n2RVZZJJQQUW1x1vGCTHYqwKQQvt6BxjEVY77KBjCHmqmE2MZMWsscb4on2ReB",
  "key25": "XJbLn1c8bfKGnmn5A5PSzyuRUKZuqwDktJskKjCJPyLmE2b7PWnoBkwQVyejbdziA7BKU2cucwEEqcFcjE39zaX",
  "key26": "4noGp99LmAsH8MYrNXNaYrTmVgvLLSi9idC2z6h1cCxcRwyFYexiV9qKB1xjZeNS4YTVBYKsarUpzbDm6HRxjAHA",
  "key27": "45Y5NE4hN1uvAGCUSFagxsf9vnaKpnFvnXwNgR8wyWB3NFp2ME3aSTdFL4ET2aVEjeKaWLBxQGQ2kQXaq7hm5FEt",
  "key28": "54EPxoB9TiTPRvS7NxcUtaisetFVtZViGimQjdYVxTfMwn6SZVT4JY5NEsE4J5dw8jcxkbm4wCJUdZ37VntpfVMm",
  "key29": "3ERczKgEuknruXtJyL2o2T34zTMqcdREfzFqUYJHF97xxJadKwgxpZNZDx8V7VfUwjFALXhZ511YNgJddg6dXeFf",
  "key30": "HsSzVB6tcPqFt5MszZj2xfWy3Zhmix6hAuJXaG7xuTCUQfHHqe35uQbArF8KdRm9r111yjQyF1GkTHbYnivYdf3",
  "key31": "5Ypjks7PgFnzs1oLMrHop83Rzdm1Ei8B5oSnadjy1ikBMNV3qgUQRdcTVQsjPKCZ1WDTqqNMFx7irygs54YDZavU",
  "key32": "4kxzD25Lw94B6fiv2bToJG6Zehaii5JCLvmqMEPZx2LxhY58acKbvQxonUutggUGsz4xK3DehuoEsZPoky3rBZE5",
  "key33": "yMZUenS7zsjnU6frAspX2UbfB3PwykAGFq9ooMtMiKX5bAXkfdy55mS4vF268DvCncLhVCNaSbWyRm88rVc6cLu",
  "key34": "8rNeLAafBEkqGBTTgaedvqFftYG1bWLrstRfZRVY3aYxo64J588MexXN2ESMVzgBBRASb7C7CxNEiEoGhqG7gQW"
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
