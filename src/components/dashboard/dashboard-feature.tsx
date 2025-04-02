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
    "2YwEpnBVHn4JPkMbYvV2b68qnVZkCZ6o8HGJFxAecYNXjDA9pjaWB3UvwLH9yZdCqBbeJeLsLCgNx4kpJ6CXNScz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndSUG9Pf4ZavZr5yfv5PHcPonCiiyyJnd7vpb5Zgcz3vPDcK9tZ5CaxdefR8JUAUS6kdtfrADYjvLx4CuUx67Jy",
  "key1": "4w7aG7ey3w3ZbHLK2K9q541qbeRUM8Tbe1imaL3EdS9bWY7UPkAYVeGTVswUi7kLjg1fWgtv9oF17kKKQNkEK4NJ",
  "key2": "4jhbtmSHW6XWBCSw67kDSC2kTKBZ7MgfMr3LELPcQR3gdXZzNd2h2to6mZ4nSifcAv7bQeQJYwch5vfc4J3W6peo",
  "key3": "yc6AjieccWcGyMeQCpa3Qk2AaRGPuCMqRFfgZ5NahH7Kuo83RGCzKpk8vB7KX9wHWhofjLcBTuvgyr9FckTLwBa",
  "key4": "4uVDwEHZKpKGzUxjhkdiwkiD2LPus5Wg5tnW4S2E7HXe7t3Jr5JveL5TAwjXR4R9LwS8m6sz2fB8FJA5jXM7gX5J",
  "key5": "5unovFZt4nZrw2KiSFYRxQXG5ejX4TDZGqSX3mH7MhPnV1x8Z5YxwejethqpiTEQvFUh6wRvgQvtZk7WfV7qyH58",
  "key6": "26t8pr4XX4nqoGatkX8AQpFns2FKzDsLYBb6JPCtCPSbokUtF1XAD4XuLuHSXNR3Q8Rd2qreKbrbfqUTpmzUr43A",
  "key7": "64U9Di6jeLcfhd3eGrfsGs8FgfggkQr8eWurQRjJUN4KSMJCukDCAMuhW5c5bGTTG3y7WngBtEzyi5h4VU5dNuK1",
  "key8": "4LJucGt4ALXNsAL8xod2j3scNH8XDJzsxBEsx1gZJggHKbvpeQuqJPZGY2TMp4MEM8vcYHhnHFQjErCCtV3EgkJC",
  "key9": "2tc15SdinbQa3VX6kWbV6KZZR8ZpyAg9TyDmAtC2Xq8XMZrvBML93vVw4fqXspDbiNPAeafDfhNifb7EWVhBFxCU",
  "key10": "4SNyw9s9dnbS2uEyKSLvGc3b98F6wmmqMQ6WcuZGDQYdeeCzGGcsSvictG5mQhwGpXmwoXosrcPHNP3y2F6XpwtV",
  "key11": "3s7q49q1ZGd4wVqWHEQ4SKxEYvED2FonX1XkzUNq3M9iTt9AJUho6YyRZFiY2N6N955Hz9jSq1NhHu6ewmkrjKG7",
  "key12": "2hNRNzBCaqJgSwUjLBsau367TMjyyyyNWJPFV17SaK3EvaLCGeU4CHC82FfGLQwGeuZX5zdvr1wHcxsGRhUM8NnP",
  "key13": "5zxDGP3GMcYgUz6FNCFGmnaTfseSzPBKKZNZnt6q4bGeYn7AKCw7kB7VsPtTAxh9NXqzGDkAP6T3Qa7XN5FAPbWw",
  "key14": "4TYUfyBPVtkN9oEJTa3S9VogsJVjjSwMUCNrjx5KVPFHjsC1rSNehkHFRnN1MjS61kdfeapcfv1zxg9ixrHMdvc2",
  "key15": "2oEPG21NofvBU6CfYBKg3g4J9RFP8tvCM8yG5L9QsLGnb6azrvaQxsnhDzoic23zeUUKVsUkTTaYa1vX6xSSP8ta",
  "key16": "4h7UaCqxH37SJo1ZfDKWPMdZfJZ9acqchi6DaX3SweXzCfPfaw7NzmNh5Q8CJstub6g7rx8WWmb7uwSP8S8CqiC8",
  "key17": "44GUpHSzKCFnyWu49CbjyvAqqkCvWE4xgMtAJH3waCJzp885vsQ7kZJ6by42jjqktmeidUiNfyb8rcPjukH1V8xP",
  "key18": "2LzsJ2VSPcSgySHYHK3tP7TGNpfSvCbUZhhELaBeHGSaVLHWZW4GidxozxZ5eULiE2BRWCDs37SvyftBQoi1Yzec",
  "key19": "3VMhgPz7nRB2CAq7BW4syAPkjaeFs1rZYwxprLWyXT3CPx6xpso8oYDXowsf11Lx9v53vranz7HVs9JxmmxNLno6",
  "key20": "5xJunjyoWzawsUvGL9aAtukgTcRp8ynd1gJXHMCHUDtNL3L9SobTkMoU5qvd9FPziXh2R6vZGBsY3Ch6AjmPyutU",
  "key21": "5Wyr9jVJg7HSVgk92drNXQHtjnDCFtoFGxcZgrnz1rQqhHHmALugX7eN3bwDV6xhnDMUkSv6Y9BTv95HF6VVCHzr",
  "key22": "FiWkK7v5QEWUCZhr1DjFbpy5rpMP1LTBZYMT8eRA7NFt6GxgoTnQbYcYBruN992TiDBLVZq7bzc92bCc17Ej1t6",
  "key23": "2guFSu9EVmk8nTkhNi5yKXasKaU3Td3NcvV8hEm36yJGXqZckekPj9S1PEVJ1f5SNEBSv3QqKwRiJ9thoi18fAJT",
  "key24": "2RAhZvcU6JdgMYtPMkhWmcmzbZZTAeiHbDUA9mF2u7eooa48prSw3fCf1VgajoGLDDbZBXKjmoKpUw1fz6nt19bz",
  "key25": "44F5DV4CKgPijf1ZFNDSCMZyEo39EURuzJLYaRQMeRqdcuvcpkWKWd87AFBZeVuURBfuvVLNYz5u6q5kJi3aUP55",
  "key26": "4e1msL5bKr2WMrF48AKJ2R4yDJaertDeCo3Po9oSfqQdXaXiuxJJ3XfYVZKmxkd2quN6sxDwRz2r9ub9uA7N78Fw",
  "key27": "65SzL6Zfbw6XZDoCCPQUcjd4YRNUgZiTaaKhemAzZjBoYh1i2wTpVsoBG39JVfGqEqAVQs5orwuhBdACUnzmGHbT",
  "key28": "whfvAGDFaX4Jwa682UantyQ7A694SMSHcKYBqxcqWkjEgZU74k4HMyD7B4QmngzGrmNiiXNgCXt1MKDcG3d8Cn3",
  "key29": "3i95wZVW76anJSSbQ8UMfsJNrUTEQj4bE9Zx9UxWteNEhD7gZcBBY1ZgwAejbNnT7C6afBcRv5RKWnCHm1ksLjmh",
  "key30": "4X95PRxxwQ2dQwHN2p1x9tVP7vWEVbHuUey4iwZpEBn1u8GLtGD2UuWWhoMD6x7C3jc1kUEatBfhYjUsPiMhZdzf",
  "key31": "66F84dZMnprBtLGykTTdMshSvqy79iBRDUCKcvb7ZdEjxHZXtTENWgAmBtEaVUu7kY9j4h9Rnni95tg5jJpWoQzF",
  "key32": "3QXXXoSWHudWGCCyTZe7Js1ZLbHf6d7wnEEakSh3yjtSNHU12xjbSy7hxn8pPwrFQZ1AuaWEmfcZiVBBvVd8ipLQ",
  "key33": "49bAoCyTaWVJg63YALYaTwN6uoSjFArzZZXQNbxH72e3cjyj97ZYjM3CoSViSopBsKK7qYqvZJg3Le4fKB8AiQkB",
  "key34": "2PuzMdohRXrVpcoh6ug6RyhhtMPPknxXun8gwRc3xgJ3aWzbAxHB5r5f4y2f72Pm8EJ8jn31LfSDkjoDpJtBx5vT",
  "key35": "2iSbMiBfj1kVX9qZmXXRibDBaoeyrWp2mHcVFPfGFcKJJgdgn5cRHDTkWCVB31P5QfH3JRLk58cmcB4XHMVyLk2W",
  "key36": "WhrieRXjMeiUoqdjHdcktKYWzrMhrSNe8Kfy2DQGf5LWNMdYPDGdHaN7ZDe7n1LeZZpAV7cBSi4imuie3ubDvRB",
  "key37": "2DQHWgWKrKmo91qcEnvUReaPuthpnaEMGVd8RXgt9KDTwd39842k7CoAUqoWqPCLVFgPP6xSKi9Gck9zb7sLXqff",
  "key38": "4CDQm3q1kbr53M4ozMRRWZVskiMdKYmA5VezrEFhTiKCgTCZEe5pLrMTVQJ9uSd4pKn2aNGT3aomumsyRpDYdVHZ",
  "key39": "4r8QX2jD3zgpdCHVkB5xir7Wsy4q9gdhFaEdQnmwh9AnJepk59MEFv2zRBnAQvSdNaNdpyaLKnKNSzMTGtXaw655",
  "key40": "hbghG9yLKscYpSHRf8fp19S3sn6FS4mSr22mM8YENMY4vM5YRpbLUYni4mzDod4LgBjpFKsZC4EHCnMnFGd7Lek",
  "key41": "5YCiWv4d7LCyyiQ3z2crjXnG7xmi7cC6MKo1tKdMcmwj9c73heL3kMsud9Ek1RvnTmpGF9bB6ZsCoV7AR2Z9girv",
  "key42": "ZHbPZykZwhHscn6HRzPWvxLZ7pb6uCZu5AVukP1mq4H9mu2M6tCksS2jdJuZWCacXy6sq1xrPYG8fX4BfLnxKrS",
  "key43": "4CftNFXZtP68kvK2YqPSicfwnctvk8wYMtB7VHzCst2oJ7U7Qc6NGNbwBwLd5qjcfHcqSpQZDAQMXPxKEktNwdvs",
  "key44": "2AK7s8XTTySz6erVW5YXTvfZNGuJbmrw28MwfzaWui4jBpgLm6WWv2Hmaug8ERsm6thjE1VirDRwTVptBwwkycSE",
  "key45": "ZmcW6fQ2beeo9amoXMNphmkSJGptd4T9q7rNeGGXaoHQUGsKXg4TqWR1imf5ntUKpCBsdu25mb55JvT2Zk5zgCo",
  "key46": "2c9c8VJi3YYqh87WLbB5nxTFKDL5VwbMt1WvyRqd8nELPmpRD9oLBNUWvxzp1cXYW1qCyErJA2p6pqxo4rRjuWY6",
  "key47": "2ahCfnn81HRQxwjz26wzgXFkNEmdE3izUAhYo8KaNugNuqT4sFyzoVekf6FMykjanPytfE64WLyPrPPDuqSzYCJQ",
  "key48": "5LkCCkTXQ128pjbYovNZ432HkVUpC9PcxETssQe2wENhMJyTFQJtDggHitBx5cffhhtw2rpuvcrBjqqK2TbKZvAT",
  "key49": "588e7EVbu7zBs3tyQUJ9gMWNDJoeKfBN8ejXuYm4d6JDE6c3DxGTvXNcvvWCYFxexz2V9SA9jcgHC37BwjH2yrQG"
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
