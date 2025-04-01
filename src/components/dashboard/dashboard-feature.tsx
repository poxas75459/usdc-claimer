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
    "5w2ZD8eWTLe5tTQm2VeE3TG5NFeyTi6tpySNJLWNjua3wmwCiaEEiY6a848oULNxMu153teHgQhXxG4p8QY9GuJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAJmwa8xnvxPDGSGtJyhAMF88rQg9s6wycbJ1pFPnAQSeFZg8F8VtkC7VXsfwA7jt39W4gRyEtztzPGLsKi4xhw",
  "key1": "3TfbKhcgaBdo1k1H8UaA9SnQaPw2886dvQB4XbLviDXE2nwev2zmxY3Z8Kx5iDFryDAuBwapqPfB9LsR7rVtQ1f8",
  "key2": "2cVB5fJ2cp1Hv2ZJBX4xpPwtKo3t1vUfchTXtK4R6daWQ8hvJJZfNpxks4P8XbLFTbZY7n5XyqoQ7TjqTqRsat8h",
  "key3": "4m7cFimSJPr31jmAbXNSNawCqtvgTVUgLEfNi7BDYpGbptNc7G2Tn1yueiYNMcuhZKzcmX3oHVB5eyZpCKiWGU3S",
  "key4": "21ngT8AYFhGXAZc3HkjfoHTv9McirPsNmttbvvHjgVVMdDdsHTFVH6BhRkvU7LHKuTJfZrY5KRynHdwSVkz2xwMF",
  "key5": "52RFCXjB4FC14fdkDgQqaxrsaZonoXfxZ9df69uigyBGhdWnonrKKTPr1WrnGPk5pz1HXoFFZnYM986RkgTnvVSJ",
  "key6": "rKTjjseFxJsGTNZvHVEuS74p4QBReZ2k4xVbKGxwq36oroWH56tA3WVjZBVtcuNTdaonceqQtAFsyH1bhjDodcA",
  "key7": "4Fj8rhW4xBH6P4z84zy7HyErbFi249RxrWzaSJcFcY4nGufqatghAi57CNucaSZe7zu8rVaqGPckdg1J1jMfdwqe",
  "key8": "2P7yPBwKnD57x5Vhz4SA1qvmqs8FUnJhw6u76HPYpWMF4WMc48VmeQ5iYvHXmhTCBLEYdE4F6BvuEQ2HWakAqqQS",
  "key9": "5puX7wBYd3JbFrYmw56iVBJPsQw7ZzqeToikBJjJt3NFjCmsEuvzeyeVQYQZtvpE2XQptC2jvirnHinkafqZnEzy",
  "key10": "4pwnptm75V53YTtnDQYKqBducUpzNNLmj55A1UoUxwYXZbAM418mWJcBWshPzShofdFjNUxmVVf8ewpF4NRWBDjc",
  "key11": "2aZdCCCrJKK8GSDbzPFL2F752LUze5YyJGE73nYtGPByNG9PWaDCrSJXiQmreE1b4mWDCtWh1v9DRUdozqDBkwNZ",
  "key12": "2iKXy3XKA3rZaWJ1QJiCC1srEjqRakBZ4Fx3Twuf23JE4vyPXMi34XUioQ7H74fTE8NzCn9SCFeLxvSzzEdP2L5k",
  "key13": "5SmC3VvYvKkQH1KNCyQ4wAnmovZcBgTvaA8QaTZtjLs7P3865ScHS76RipQ49D4Nbp14RMs8hmYtPDnCi2dR1DnJ",
  "key14": "4YY97TVBTbVxhsVuXFRevstEC2dD4CquCwQrWGZSG4j7HmVbAHWY97bsSQ2G3cFMfCyY4T7fxS4aR7aLq8GHZyJY",
  "key15": "2pzcutpQzgb8boMS4Ectc1ztxUk8wpZ8CT71DrnXJy2ynEV4oksmY79vEcxaYi7Ry9TokEvYc9ngYBdyEdACauVg",
  "key16": "2z6YAYvcTjen4ttwdXJcHfSGn8kuCHhGoVJDcu8nJVuvtkXo3exSFCk3rxwB6Apv2ENSX51bkwHVHEuqPKiuLapN",
  "key17": "35wihz4LeZDEfdyLVQ3efwWyrBiVSvvzHLjcyw5MPD6iS72q9a7wKu9XaSe75CWmnqfw2VANX5rANcQCBjRw1Nup",
  "key18": "5UUVdVsTuGpH7NDswN2r2GoNNDdkaxVJVyYUcaYZRp65UUDorVSEgJPjcNBYbRc3W9t2akPHDP1aN7gJxhrBGvK9",
  "key19": "3Zqj9yv9pZBhtvw2yBe5uMuazs5SaTFREPobxBE9YLUmAJoihzxYWwjwyms21YZvdXhGcCsjxSEpKRHLnzScLKaq",
  "key20": "2kSWXn313ngeonPKkgcw1oMDrCKXhRrnuhKuEA1FDgkd9FEpokKYEbQ4Xy2KZohQpp2E1DMmh812UUf2DeqtoPks",
  "key21": "5NCPLJG5EiQ7oLH7xFRyjbrw9ufeJDxnS8LPcEoYU7sAikxiqLVKoEgofKrFfrf1T8XrDyvMhCfJKX6C6QfhGeLe",
  "key22": "4Q87im4YW4WFis1TurfkvDn63XEw8jLsAepPBX9iqtvQfbNBgokztzL85xHe5enXdEG1VMuxv37JiFvdM6LTA8x4",
  "key23": "CSiTQcBFznqj1hh2HoyoAneEG5YSuTuiFx5YjsRGoq8BvpoSNp75hgT93LEWQbQejQATdrVZWS3gEWUQMFhXLHw",
  "key24": "4L94MSg8CFzPkGSrosiYGtLSTB6RhKotkE1az2UzxQorYBk2sTYWwrX4W5AXuM9fxiEdbv4W9LE29ZgBRsJZy7Lo",
  "key25": "VFKg5uFtCKgkvCqfrss99AMChDoC2g36jx3XeyaD8BocERqs581fZv3ArSkrHGt6Hm3hQGNk1GbUEBHhksotvDz",
  "key26": "5vXnu1xMV1Yf6fbw2gEQcYV5uRKnNuKzoBvuaW3oJKDmDrWffaumapHshrxDM7wEEzZtNosD7v34vpN1QWU2ofMP",
  "key27": "2TEKSdPieH3asG3egSRYHhLnZYcpHMvw7ArJ8UwgVUJVV8nQvGEg1ksnJDn9tgdqPoEsLWxtdYDaZnBxK9WAkuew",
  "key28": "2xtoWvN2fgqWiNcfREj2X9bTQGqK6xi4KjgERbbbA7GXHfzq6wiPNjWVTKG2i7ZkVkcraf4syFTFQHgrsZuUdvUi",
  "key29": "2QE1vQ87M3bGB6xmez4SjXQ1DkdXT8Woi9JA4cCMqsmTJ8kqALfnqtxkWMQjVbzRHm98uTdskkEnyML8yoNWT6gD",
  "key30": "2NTf9158rDxDLwucUZCnEWGou7qVsCkMeVawGh6XKaYsK9vJMVkESmtW9XfruautnTQKGBJvp8SM7mf9Hyq9MAJj",
  "key31": "5oAHSJTuWpPwtY6GPrNThu5CWMffnri2Ud1p68iADqsbqa1mXojNfGo5NdGBuAVeoAbd425Vw8BL9ijU2mCfwks",
  "key32": "4m49fRUayMrLmFaZj3jFW8sNvaY8wuU1tNUL2vJn67BvieQxkXwJ47sC3vwz95FZWHgz57knQS9kgrUgt5QdSiKu",
  "key33": "2Q8npPcM2QcyJNr4KSp53CDKSu86W6kUdR5Kd2MBY5VdDy7SqswpyGHezfU2ErsmVJPKcPYhwuFSQ18oWy6nBeYa",
  "key34": "3Fn3wAJRurUvCgYfdxjeyMMLSAsDKMsr819u8YcJHgfaW3HZf8yDpFyebbxVJkkn6q9VJwoeiMh37bnupYfCFvT8",
  "key35": "3t5geBpRM4Ad7XoSdr3aJ8vbEa8ejCKFdPSp9tw7gUATBV4i5QLrkYhkVAT3SDD7k11mmyfXfs3MERxvGAoh2bZz",
  "key36": "2xtfPHBxoH5uya2fM7B7p2cpwUcQzRCwzwLe4TqmkVB9RQnJgoGD1t9DgTNzjyx74WTUUjmkrLq7Xfq8fw415vFi",
  "key37": "2Mghbz3V4m2PWWbbMUVtDjf3mVtd2WdPH7rTkGG9Tv62ojh6jFeQfKsrgnVCvG4j45jsUT6TshmNYimB9FmTRPgr",
  "key38": "22EitMQyNemHUUMmrNtifCq2W75m2rAFMZW3ZEzSR8iqvXcnyeF9fjXv7oPpUCBgRsim9tunmd9B37DjPACZqMYh",
  "key39": "2nyZ2iZpX1MCfupLPgoA9W825aGC2FCqWt2mGGjMsWPK4mnFAe5epk5kzw8iGT7UQsFDB4zuVxsJ38WvAovCj46q",
  "key40": "3h1Lo68vPh85ETfimPyfx5JrzGtujYKJigSGNL1T6UWUb7VCS1LYEXnsvZZ34pBJUgMXogFdLzgADoFJ1HSLzT7B"
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
