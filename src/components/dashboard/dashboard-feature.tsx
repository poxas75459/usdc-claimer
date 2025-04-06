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
    "466LXaCPDGgWGj9NCodcBDW8L4DLeuG2L6BTLRmBKxmQYPeNLRqo2JRiAqWVpsrzYWeBtrYFtCEN6bNdN6Js89Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wn6zGGPvb7YwVWL2RpxQJxbUPGdjpkMNkfUMQAhYiQdxSpYqbQWm2kcCZi9XKAioLLHTp4NXjDtcNrdHq4JmcFp",
  "key1": "5txFABJPB69EGQFHdpmSFZgtjmAZgy1qhhpyCHDMNCS3wFcqBsacfgCXYEReAJiK6tYukL8Q3myNDQeZfnJuHbHK",
  "key2": "5gPR8ZKX8ojgpspEvbC6PTUm5WSuj3CTT91x3tgiTMNih3A55PP7heW8BJryFVpsSwG34nb7Kd9YHyscqtSLcATK",
  "key3": "kRncoj7794N8ZAkibsxVwkVxmHCzHhy8Zky3JBH8TCTBbG9Sai5dm8tUkuBFJkD44fGJ3URUT8ZAcxymdhQPGvQ",
  "key4": "52vfdSDShaYcVDK1v54tLxMBA4K3GQvmpN48uHZTPYCCNXkbKhZdkmwfsvVUm6m1z4LpHvtVxoKKFVLBziWZ46ew",
  "key5": "5iBu7V4ZBJdh4o1N6PA1AyP7tFVo8dqfFCpPAusuHbs169G6NeGXgYGNiWxLUSsdCp6dG9cU2BLY2y5jsJsWabvr",
  "key6": "3gxvuPCuKTxTZmeAwUBr28864oYib8Di3NWzupY5TSPox4BVZqYsEW8HNeCHdTWjDJqfFP6Zqx6qb92hDQhdue3p",
  "key7": "4D8WwfBm6zcBJJexvYWhawkUwM3HwiNcPp8qo8A2rruoFQgExqxLNsZRysKDJWbTEfNAFX4U9hWCMT3DNFz6Tvgw",
  "key8": "3MaVuDELvCaVYpAbCszpGoH3DYo79FLWunyyZBMy6TFS25CKbzse3UrkK9qWHoZ1WaKXsntfFz9q8oeapgfHKNHf",
  "key9": "2XJDXgsysZzHtEWgLxzvftt5zzESmbcmxMRT5vtXHKgsXQjY12REaU7r6WumstVezXGYxP6vijBAMbPP19fpCVxF",
  "key10": "4J72dMXXk5W575YY3tf9ZvqFCH5ehraKMq1VZbiZYFuHktx7noheUSR5CgeCgnCXcwusG1ouE5Ws3jB2oqpAspoz",
  "key11": "62mpC5uRmfNn3sdnY3QNMxLanvFWotNev1ifNuH7NwgfS5BPEMjiwBrcfJPcx1CZJL38atLxh4pBs7kW34Q87Mvb",
  "key12": "57GgHeSWdkrzGJ1hceK2aNLYMnDWpaXB6wCUF5uF4DDXXqoxGD4WYQzqAxF4AT7vA8BvxsxjJn2cdjARe358F9Ak",
  "key13": "62cXCr85Am4o2FWM2HwRDgNKvMmpkG5Josym2i6kSUrnzDTjpKysbz1nQFcGureckmbwAPYBwJKExZ3r3v5ysCJT",
  "key14": "1jdcR4mHoXFCRUncvKawUekyZzesn7abTeykhWtdSukqgCFqtyw89cVSipJp2DpkuN7J7m53gisRN4hvzN8X73U",
  "key15": "4JUFbwVvVRFhUHkgQcBKmYTJxavuZ9t3WaXojoL4QKe6QsVS4zBr5gEsShHikjdXPxvLMeTqHgtU1kjZTmhMggHn",
  "key16": "4NtjXZdTNrXHdreDKSa64N5t1fCXGH7pd6F4jcVVtC5NBcwD9LDixbC6Q3JRpZWs7h21TuBU7pd43UfWeNAqfhmh",
  "key17": "2TEiwc5ZNH9s8T19EBdkrCjgH9t1M7tWgtW9CMBLHHme8qtfZHQiiGFDRWjBFeSw6YG5raA8NGT5CYoGMnx3Kygx",
  "key18": "3jro4DG61QMva9pXGxc2N5TcLBDxcy6pPtaXjjzMGCo8nJgQsSjEq7G2akJ9SuZZMsWbn4CLt7RxQgfpXVYosyyq",
  "key19": "dtTvD2NMT7GQZSDsYUFwsiNTCvHbCNUXU92a46TiyACuiKXvBCU2gXfEdxUrYghmPHmMcYYZfMo2bWqikpmEich",
  "key20": "3kYT1NP7LNjgXznvqrCtdcPzHgdt8xRDZ3WVtGVbVsuEdhEDHMByGNANM7kbkjqjcG5oPTrNRbYP6hNhpBeqaBPK",
  "key21": "5dpWVoNWYcoGYcobUpcFU5xdU666XWZQRHGrVSWszu7UjBn4J2groWd3JLktkDaZb5bkKU34dbXB5K8mUzaXgAd6",
  "key22": "3mAaGmV8vU6Kd6huKVyLAJ4Xd5ZJEgxwH7EZyrD9JYqPxrr45YCdTCQmzAsEcwiQHKzGQgiJNRMs7kP4gJcsbt9Q",
  "key23": "2XGXHQny3HXopjNsHhteB17yQnbucd2zzzECCiEm7YY99sSDZc84jzqaVyir7ZQqmDsnCPtfWLMcFxbVESSbz4ow",
  "key24": "5xSL6F3bxyJTYYTWxNAmfFu2cM3DFYuYyyV56UmpUX43jm4TA8xHq8nWoeBGdZDbQnfWhaBgrQY5DNTUFMvAhTxz",
  "key25": "5vqAbu9p1sPkiwwEJTDnmt7RFdz3aThxu8PZv9Zg6bah1Vsjn4wZoobjtwKgxLXJgGgFg3KYrGNrXLuDX6uUiyoy",
  "key26": "3YxGwGQ9wrMMXHWxrQQDN9kie5FF5Qz3njVG44ooVZpZuEwToo7GLpF8WJt6cFowe4nD1LcSVuiN5QHh769fa6TZ",
  "key27": "7u5m9uUe8aRD4VoSAjtdu6mV6gfpbXM6TWNLYn6bZRsomz41QvQbEyZx3bH2htfstU3Ax1g8unLJyucXWAuDKTz",
  "key28": "53CyccqdkVue3dvCgopthrtkRtEng42B4PFHUPUcEVk47PVhvJnZwJA1czCRZrrD5iNTNwRM8Y7TirtKUo4NLcMF",
  "key29": "4y93urBKSMNXoa4tPUMDpdzTSENWnEXkReCcc7MJt43mKLWZrCtwsGo1UXNpXo77EEUw9CUZiXoauVLQSfAqVaud",
  "key30": "61spGMwDZGZiRTsvT1QqLxE6BY3m7LAx67Wk1qfcYWQFsjtY9n1pQT7Je5L1RGK3aXqT3qE43jecz3iREA43Ss7c",
  "key31": "45ziSbKfwWfFFrYycjZuXfngrgKHhv4RnG7bK5SpSt7jKcrAzN5geNbaP1hhQ4P1WeSURptTea8eQNGU8Bq5Pt1x",
  "key32": "2rkxy4uh86czneJPtUMUfiMrhgCXZdyqTaxXSSWvAu2yPjrXx2oPJhxQ2Eb2C6hf7NMKEgc63bQ8mw9UQX5GHBTn",
  "key33": "4LyN5p2YfWzQatAbchwqgjxBMhC1YYyjLHMEZy5Tk2sUKZmE2QtKVfVxLEvfEf3fpggv4AkBfgke44aT1YjK8VWD",
  "key34": "5wo8r7GArxYweySJTAyf9Abgwim2stokUbhXo1ucPMAyycvM8DHcA9HVyPaPF22wsUpJwRHC7VgppU2hsdz5kijD",
  "key35": "55EsFiagmbgWBWgif6j1aeaFQovk7V6Hnt59W56V8qnJabLUmaCP3hyVBGp9k8CbQkJqbBKGAU1h7iJVn1HWF8q2",
  "key36": "5JbhgVivJUoXz4xzszMcikTdBRBUeC9KpJxZanKm6F7oh8HyGYym6xr7UP9hjBGVE27Dru3VM3aZKXLPgRin1YWb",
  "key37": "4T2QBt7XdwDnG1kFMzDT98gzW9xps8LkR5ivWtGeSDReotj9ydL2rLAXSvtJjNtK4ohxzcvJMVZ5sYkLUYsYML8H",
  "key38": "3u5Wygsf7CgWiEfqSauMBpSzNzbQAY9EfZ6dQRVRN9fn9eZzp5SXAPK1UceSDiwJgFBgxgweCWqaQWPM7scL335f",
  "key39": "3MPxPbmfKV2zJpUZ7QC2xtqNX78HM9GUPg7Mj5rrSXEpEkWWHHNJTw47XwYsc7JLVbZbFLo1Emjj4zfvDLCbvy4C",
  "key40": "4YnVscqjc6tQ813yfmxkceCtg3C1b9U3jqFAx4U8As6vwJ8dbLfRotPeuUFP6h5pkP5cSecMRoVhfKFdD7Bg7YLy"
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
