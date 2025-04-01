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
    "z3W2HPsfrrjTdCzMLu6iXNuMVg1SRBrjrwHujhh4q6Ni2AcmcoVbdWPrXXSQpRAhEGYdC3CNy9jw5E5UzcoNy8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f9hkhLVYRQnBykKxYW1WU8nb3KPYzcFnpDagjZkJHfmLdXs7oHnspaHssLsN3WVQvMQ4bFuoVUW3gL1AMuGv85N",
  "key1": "4S8xsuKFy956CLZqL4SLzGwCzx7ybmHQYaBeoinoJvf559DdnvP4JoAXm1aiTZxBFz561DrfTT3kyC3hBhLyRfa7",
  "key2": "5cV4y3U6g4ZL1S524PzwND7Bf77ppdAMXeQ6WgGZx2PvCn64H2UYKAQDXkqs7mVrTPUpbZ3UEtR6aX43vwJ9nhfc",
  "key3": "2Q6GjdZaJoDyxPKpVxdMaKwUVWGkEKYC7b3J34tCaKt4Qb82HbFnaqm7j59J68RCqvajUkMdEarDN8Mf3kPerLZ9",
  "key4": "66sze2LJaLq4WmyXiRifpRZw4fJjYJBmqeaSisuVsGcS3cwKfnztY9wD8nNaBzcPVMLcz2NYF8evL7S9AQwmx1PG",
  "key5": "4wnYkwnRsJ4WeQjtoS9rWzcRhDNzQj2N12aihwRUBtHRMAkhnyi8Jq5Lr7aq3PxckC2YPD7L6a3y7YckncidDwXq",
  "key6": "36BqtLtqkXKYaB41xJNwAxuKhjaDG9A6rFmxwfrpRTYJubKM6W3GskuVuNqSykDm7Euh5DEUE7KGTHEYXmUhLi5K",
  "key7": "4GbVQR9BU3YFwvHhKowwgNuSKztG4f47gPg6uouRc2Z4R5H3SxxdFoqev47Hng4bAEYJ1CGUrvHCFxfSvC1Cgrs5",
  "key8": "3AnwbjCezp6NeVBoZtnrJr3dRqAGv9cZrFgY2KmqRzXG6V9EjVsU4kfWJJkA7i8MXnExwwWW4NmpynDdKQyKaxo6",
  "key9": "2uQcaDmE6ZUXoZu2d2fdhEG1DgvJLCJxhEiKQij4C79EtWRABCsoEMggrCPko81oyqNG9kEmVjt5usrq1Gtfzy3o",
  "key10": "TEb1QiKzutw5TFAYCgB8YLgVx495v8UuUPbwymHTZcx4xgeMMzvkEARcVN43seNBA1nh842WU1qDXVRps5xWsWp",
  "key11": "GH56h65qECgYRV3b2tjazZqo2KRrmS86r3wVigPNeXqmx2KpBwbrUP2WNUQnUEJKttHb3s86dMEuA7t1ZYdZjfi",
  "key12": "4PXyoLa8xHcnBNgrNDrmaVs8boZNuKukBSeNiLmMuPx6Ez82sBBpD5rojwpEz3wLyA9A4RuHRZ5jbPZgoe688PYi",
  "key13": "4rfNTnKL2hteWLui1gMrfwu3GvdB3TZmDhmdpuuZexXdfU4px7a6uAheWo9HiVZzH5GYfTMkJVxdJg3bbvrs5M1R",
  "key14": "nG2Qu1yyo9DTPf1yPo7z99cLAMycuhxybTGFqd51bEExZPvu1kgN4CoSKe2CmqhtuzrSVpDju8Mbex1f5dPHjJK",
  "key15": "ZrmucFVrkqixLKXrN2veNrtR8WHEWPTXkJYxmn4YsRGVhZu6eYfgEShJNvM99eXBiZjxTaP9DBLXQM5ZAQbuYma",
  "key16": "2MZC6XETCHWjwRHq9ThgrbWCEMkLxvTDjLJddNFcDpt1YBZ66WGbccJ6JQNNtsuk2JumrLYfyhE1gbMpYhYq2C6S",
  "key17": "2mc1J7fpTAFXUJMW553q7rca8CMBtd6d1MTbgQVeGYyz1RBZcipTFLoCz9hV24eMrd8K9xnctzD7s762FJw8tWpV",
  "key18": "5LU7kv4mRtC93smim3eM5N8AymdGaADSqQfKid1TpFufnbTmwA394R7etaZg3PyA8Y99EVNSqBgsukXcXPev4Gw4",
  "key19": "56ss8vXRTewmaVWieJP6nARS1aokWGFPwv9RrBPwbhHHW5CwtrncHiWzCHLUTaFhHtFZc2mErjTfoVstFGVMK5uT",
  "key20": "41DFe379tcxXRstHiWsEMKo1pZXgHSRNMJwhNUTWPc6Z9dHj3r4nDpERzAJnMoDhRcqLWzodJNnhW5tkqshWgSDX",
  "key21": "2gqbnthL6Ja6piKgTB9KCEkNiqsWKmy3kqDHYewyKd2ynuccZs7DFDijiALTfdKvCJvsSBRLc7pCtx8A26VH9r7Q",
  "key22": "TdEmG5rWqBVmpMuM1PGCiody4Py6QMfFUg1amxNY2Cf4CPtUdA2SxSsiGpspU6mLNq6nN8uYPcQ6DnEDFvEdYTT",
  "key23": "3DB7KLszGFZR6oZTrK4wSGqmC5nAZ6hfu87x6f7TFaCPkGTHMVLv226CKj2hL4t2WdYURXX4yBWFVgWPuHkgoxNK",
  "key24": "2XmDRqQmm97c6cjC6EPqXzHcysteRjtaCRV2ZAb1qRGg6YQLxB7BVbzbHjrkSYZFc8nuAcadHLFzwQuffa5Pt8a7",
  "key25": "CM56C1bfRq8xVmB87rB6uj1VvD8z39jiNJoUThYN1sgFWKCW2twfJHvb29tSreJnsX48nLm5p2aLRXHxqdvrwpJ",
  "key26": "4ARg9Q47MefFQPQcv4XF6qT1QRvU5DLzbujSik2ECEBYnrmpk7iq2bULu59WdS3NsUkxY1XYAE2QUT66gZYo4Vt7",
  "key27": "3joKfDZSDqMdTs6URmQ8dZ79FpsLag2CrkUK6f52s6UCcVYL762DcBP5sv6z7rrkmocskBrVycwTF2wmav3NgWBD",
  "key28": "3qT2H9E2CMwuaBV3C7uaUyZBeZWSU6EgapwrBe4gCtXU7YzuH5W3LTFhMyAfRxaDshqEwNWkT4F3F42UihBhBdfd",
  "key29": "4ZiVcAgWZrgb8zGVvxadH9mVxAbwkpYfKbRnHA9LF8U2zxjhdCyMU7pjrG5hRyz4oyWZdRg7TAs6bniqdxq7xXjB",
  "key30": "4evosVR6VPS8zrA7A4H5tDGYPNuwCEjEN6nq9YZFi9BkHfqEXwyeNruT4RfuZTzuDY4Y8g5GiKzGgxA2ZEAe2heK",
  "key31": "38AViAyWLdsWizCyh5TS41xswx84hCrKRZDUxHbJFyHBPTorXpmBvFyQAVqAksjKpmAeFF4Urz9ewQor8LrU9YWo",
  "key32": "3LYrN6BMSEgMvMpWf8E8RQoikUqwkqHpBsYpcCxpcsmXVBtKGTu3xLcxaXwLCmWN7Jgkr31XjAMbThZRjH41Mg5v",
  "key33": "4KiGv3gbnk7PnLMt6E34knPTMhNuN8rpxzz8DbtSHRBZCpnCzbPUhoSoXwB8Kox6VfSETE9HGgpMU1cnqcznLSV5",
  "key34": "42uKYr9a2hTJWZrs6qeXZULZ8vMEaN8GH6d3cwsofsUH4MQe3ZczZHReqh2spYMC8myPoqf3awvj6xaWoCQyPcUJ",
  "key35": "5jis1wgTxDdZuX1tyykemoSQaKseLyp1U4ET9cXAXWPJ4niWiicXTmX1GqbDW3KunHyw5qJyusufQs5Srjx2Mnnz",
  "key36": "3xubWXnU3zAZpTLZndhQmXTE2Q2qr2cUuHYdWzt7vkcdoZCUXgJdECCkMvQMDH7sT3M71ejuF44MetMq52Vsaayn",
  "key37": "Ssfu147yiLdkDhgzmksg6bBJdRrtcVfDxp3Y2dB5aBQJmuMopmaohi462G56d7Fuofbzjvx7q7y2GE6pT6dKmjL",
  "key38": "3Dt3Zm5D5CA3t2YmrJbuKnjHH8hFVpvkoRE5kdJ6VXdJucEvuECeivHL83VvmR56x1AE6XDF7tf8e6Nu38Wt7ttz",
  "key39": "xLoYGwKp96DbSEpft2rZ38qFKh65DFnmUKysLDcyWir9DFG9z6adsnrfVGtmmBSA88XYhyHrD6GdBuMRTkuWghx",
  "key40": "4a6G9F8qyv8AFkEd6uZ3FSF57LwsaAkQPwaXTjPQw9W4m5Dw1KZWqsRqrSYMM75nr4fLNE521uVp7Xx4gTrZJ3gt",
  "key41": "3j9RT1mkouaXeRbkPBMJKuveZtQXZscDDN5pnXxY4QUn59RCsAmsgtkbqpbQ5NLeKW7PjBBLBE8qixtoipm9cGae",
  "key42": "3wsfRRmthCVLCSm336jrWjErANTfc34Dz9verrg9kuZe8fwTUxN6FcTW2juQtbQCbtB5niedx21KZY1F3tRHuagn",
  "key43": "4eYWj5FaAJ7DmwU23soAwtKyeqR5hE9Rb1k3vxrTsD5TVRD1e6GRoSnaydR9C45976AtnPK8mBiKCEiwjzeY8RLw"
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
