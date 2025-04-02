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
    "2fkSiW3ugBFjjpRJrAA3yqUL3s2SsTsykZ9iiyf8JUqCRxGJnyLAaE1oe1NsUBkjH4wT4A98p8eFv7iufZjkGQhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uk6Pok3RzVbUJR9kmRbtLR6YTUEWST2bnS42RTwYTwuMqfR8M4vBKftYVyDgyP99A8GbwpuvttsyKxuaNPhXCut",
  "key1": "4nkUwR8dN3y7AJ1S3ZzyRfoBG3J2DouULznFJrQXTkPZj7jeZQNrzawkzn2qyrBTKbsWcGCcSkMyCLCfEcoMKkZf",
  "key2": "2K3hPhZwTKZaeLVxMMvWt5SgxJiwnHsxQBQNttr1oDVVs5FdkcAVNEH7g4ChbRZz5MbqhwQtW8a2vv1CDmZJa8Tu",
  "key3": "DyT5HPZ944eJACqYZ2y4AucXDNqzeZikb9Ycq2jGigfencco5iZzDM8SJ3PEPtPZudVgYWrkTKsmrZjQnHaY5hi",
  "key4": "xhbsq4wAxnZCgp9ogn28cECm1npFqcYLXH1RjbZooCcwJngTUyPJctq6gWMRTxqUmMfNXS3fbJEjhcDNtwQyrz6",
  "key5": "LkhfpGMMwdps5XL3P76xMsuqCf9BGb6izttZb4X2g8wN3f7dEufvVR38eU4b5YKupMwRvXe2HyVu62mDnAancA7",
  "key6": "tiWBomGV4EDy7SyFCo9oU4WvfycLxhffKay6X333U1NZm46sW7PCxSEgnXv7nxiwdyLFAxN77nkbXb7SZk2ZkTF",
  "key7": "5o2tZ7t1NL6rvsa58U4zGambr2asozujkDGakY6j44NpNjkGdcrsVM85KsTvxwkQ4Yqn8JxEaBdL2Xbf8CYbDRAF",
  "key8": "5HP29Njg4gpdoDX8LyT7gj4JmRJSqBbpLqNyjDLAqKcaf1qZ5vp2SJJbR989GqqnwsrCLcpkWxkvD8ParJek95uv",
  "key9": "36h2FE7uaxj2xo3ZG3nXMX4TiU3e8W4symopoJcPa9AyLRb7sp4YV8BRFk4XmNiZ6mctazUcHsUVBhPJKar1p3KJ",
  "key10": "2UucG7GT45hE9KWU64YMtGwQX9waSZ1SBaD3yKgK3jzwuax4ap2dpB4J5932JK2QjxM5RacqwfFTLZm3wyRwS8Eg",
  "key11": "5ubisyq9MY3BgsV6VTsvvddm3P5mqXT6KoYzuWU2kvGyJBct8AreEtJWxJw7p9kKyKKwtiNjqmXbfxJn6GeVotpe",
  "key12": "3pGS2vFXkB6xykT5nVg1czooUrD1oG9vQ6NMiLQVnES5FpxARwYwrX3GHt1K9V9ojirkSDP12NrPFKqLzEETpu1n",
  "key13": "4v1u7AoVoUnh4C5x5ebqnRiPC929o71CJnUe6UERWD4QtF8auxjpBQh5dZEMXyN5ZGCWchdVn1NH6D58P8YieRDC",
  "key14": "f71aswP1Yu6UQbu83iAAbMScDapD9gxsaGx5ND9PBdME6PbtRDVBMyLuVDWPPrJsPhnRY3j3HHzXCibfeVMCtUy",
  "key15": "3uMsUUD3QevqvJ3bHNcS6cv8dzntuPiAW1hHZ2PPAx9XdzYKE92n22c2T4nZt989Mwk4ivjH8hsgFgjC6hjx2Lzv",
  "key16": "XjQeTKU9a87PNQ6pbawPqcZi7sx4upkCCwXqtSwCGvYi14wzT5q3wwDe3FsX9VPFoE12k5AoyZa76oDd9a8N1cg",
  "key17": "2z1UjkEcE3iTpCcHQTzKDeKpiCPziU8D45uE5E2e3cyvAny9XsMiNcBbNn7HwuZ6kXgsfgy3pEjwQ8uGUg3gFJy8",
  "key18": "64rubfmzAxiq3zqm9mCM2zHpLbyQD1XCXGFB51X6RkGjuH2eqBRYuFdPWX87e3Wic78BZjZiTdvo6GqU3w7uheGF",
  "key19": "5CkNSdGdG8EtcbrFFYoED8cij8aUphQJDdjHxyLoxpTE8ZYAeuzMA9B9z1rtoACL5KKMXKf9iFKgzeau7Se5KV7M",
  "key20": "2FcFN7wYcLk28pTxSfV8LEq7DmjG9BrCbeDYDWF1UndJe9pzqjpdEssCnoS5H6bJtRxnBU3eNfi1WvHpmEVNuMbn",
  "key21": "5c1DHWQgfNZmBY7BYG1Hrvdpq73r4vpHwwwSZZaYDGdwZRYeu5o4XHQP5a8dmHiBpY4XsgECjn3m1u6G6y1nm94M",
  "key22": "2SV6BF8nk9PYx3txDgicmhLQPXeJduXUX33epgGo8hhQQ7P8QXvXSaaG1a6LDg4Jt9tuPNvHPcC1jPrPP2H9Ccma",
  "key23": "4U6asf1iSMdvx1DpoxvE9EtLtu1D1YWGspCy7vjnePQSK8HASgjevvaEv5sEjF7AgjjrDJxciYBgLeQoxfP3L3zy",
  "key24": "nVpMnd2He6JHMczmtYedhGvAvaL9WJwZbfL6SXt425eqqQmKMUhhgGZJVJTwrYpRQUpXGMxHjgvKYowEVtAaR3P",
  "key25": "4x8n4KD5sL7WKyXuyrKpXxGKE9m6FuRoB3AAV2EiLnKUBm8G3nAGTsg9Bc1f3XpSwiYgmCP4zKUYcvFjadgbaCTk",
  "key26": "4BRKdGTvBhy2EsLyHGv66A2L8xxBPts8Qjt9WgTDnuqFVFiizRCuoJfvK7rs9UpR2rvXdTEcSQbcTtesho2Zvq4h",
  "key27": "2otus19ubi982kGz9gQVAJVGgBa26aiq8Me6CsmeyqghmFaMvzCpyk5bWBC8KcWux2HHTrEU7zwXJozjkzpjaEH3",
  "key28": "57qe88KV5GJTo5i2QRARFNv2txcuj9QYJVWoRn6hb2mHuxp7TYYe255Qcdocvumt2EjjbWNLuVr7bvcUyq3R8a2E",
  "key29": "3E2w849umcgGm9tyv77BGhW2USHVSXqDihF8kfyk9HYuScxCWeFUJdf4yix6MojVKZNFsApeJEhZTkLRtFRXWQia",
  "key30": "5Q8TWSCMWr8WbHSnTdeBg4gJMjxwmqzHRyJjUNPhj2chX3oiSGKKdij81R34G2AdPBFnQHHDsc4o9mahQZ3wYPys",
  "key31": "3Cdb1iwvaig3oAqx6xoLQovDDzUGcZ4CZFPudP9SAMyn4UwHYkuQBfeQ8nFULRKM3GUYgRvzfJFyLnaVzvcXTFYS",
  "key32": "2G7ySARpMV4Z6dpHYAVzVSScfHWWrJ2FXxUy7dAaE9xf7L8f9tWJqzBEdoEyihMeoGh3awHGvrsgVVZuwBnYhZTV",
  "key33": "pwhM7Mbhj3kXs9rKCrZgGCpm9t5q7N6Lmxw7tiiPqSTLh2FEdsVdZfj3XtudZkLinqjCpVjTHcERDozLFgoWZEm",
  "key34": "MM9KknjMKFbxwFiGRwB8ocLX5wN9j6Pcq8opx4gbM2nXqspdLKDL3tyAgvYtyScPGLx6VeQ2Lp3PLd9cE2GiWJs",
  "key35": "4u9SFfntKTh9jKLmkzo2uaEK6CoGpCHBbg12XAaaisGvMTpKZkNaUrUzrAwN6RWAfCJAYiww6CQMPgfph9yq6Wmo",
  "key36": "5mfGnFeLpkonNHLvXDfGBp1iFVwX2kTVwAbgDs2Y7jUFy5b62VxxLMUaqWmqz2tcYW6EWVpyvhsCzLKBUBwa7tn3",
  "key37": "3UGu2tkYaPL6tta2SypkUmEnhThQrNigDq5rheMheBjrExcZauNzs4AqG4XnEKhyo3BzvzqHZUGV6dhA3bo6Q1qt",
  "key38": "vBuSBCDmJ2bMSX9SPhYhV7k5fVnLSU4NQBU9GNYSck4Satj6Q6F3hf7qX782uW892B6T5fBZ8QZBEMWmm6xha9T",
  "key39": "tKivwiT4Emv1a3jqfuTiYekr6fseyQPAgd16J9iTVoWV6GHaQDecNM4dwTMLzpPNfPNQ2xU8rYNSZ999FhsH8w6",
  "key40": "WTvdnjvhbQkzCogrvYApuHnY7rw4FQcymBtcLCf8N5SQBVDaSjhcazppeQJCWRfBCetABrtQSYhFk8KJCaKsmEm"
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
