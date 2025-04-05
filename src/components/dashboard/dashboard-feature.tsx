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
    "4o3nyNiNm3LsF4WzH83aott6rMLc6qwujYqFG7WYu7BuLPS3X8SWM24tMWxBiPTi6YLQyyseTKdsjJ9PnJCiXuEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45iL5dwLqTT2WKpZ7BKeJJNvF83L2vbnbP2kUUt4EZpsnov3NNjpfnZYVv2TrGtaCVub1KWheVmaTh3E69vSrnXT",
  "key1": "23TqwSvtURoRhEmBpkqRx529pnxkXCsGypoXWBkCLYZYyzbvZE78iec53XCR6qCQS9qCSzBmH6pT7Ftsr8SgQoDM",
  "key2": "ekK5zzTKxSByL7st3ptMGG8bTDExqAHxLjw6zrPUULp4Uf2gsJiHtcyUQUDPMVMzWeSZAGhvjkS3YoXxMyQN2JQ",
  "key3": "5zepqKbMSeYG2EBWsXwsx7uCcFAX4BFFYzkYzrBFep9groWW2HSEQLLPPVi7SUoTmxp9YkoeahewXxFTX5ZowrFa",
  "key4": "5Rj8bKbHEMcDSJoAtwHHCrP9DwuCC2yN8kk4rzBQWTfFZPqRJqnV4LytGThLMV9mL6GNTiwB9XEBmwu9ckYHc5iv",
  "key5": "374TrmS5FGE2ySN23qKHT76h7CFf6EzQBscgZR4CJ1mx7DTEEvdKxzi9aCFpbxiooSciH2Dh7mP5oRLyFdoK9sEd",
  "key6": "3VEVAF4p23oCWhyWab7rKfbSgZ2jQu4wjjTpVgHXo9cGsmHUQy5LTWcoZRnLdbd1JJrk1sVgu1AnUadYSgYQDCAY",
  "key7": "5dN9omVMCa1stFcgMfgjkDz7qYnZ1b3azhXVidPhdRvcz4LapfDFWi2saQBR7Cu8WTqVPQnVFVc3ZKqqCCkrNoXB",
  "key8": "63mthCPj12FWmpDjCB4Sa9YnDPoqXLtWYqayzFyrv3gJwEv6x1AnE5qL45SW5wuPFDvRuLLHaT4anPVuL5T8LBHW",
  "key9": "3LRb9z59qBqo4fq4vjaxGgt3ckwgbat5h8wqpfiydBXu9ENuUh9YtzL7ZbTQUPJRfeA5BMu4AyDpyCezdQngaZS2",
  "key10": "4b8qmrq7q38hDhLP1dijHvUCNen7erkdoEv7wVws5qHn9XCFYpLC31ciwmuAxSb8MRUzhRwcNajgy4a4ywWvPFTg",
  "key11": "47yVooAZMocbgJ95U4Qa36tUnakz1VZbefvjvm1hn4swELUXRZx4BPQwBaA8MtCDkJkarkseMt8WhhXskELnjf6E",
  "key12": "8TJLXvNuaJnT9etvkVVSVvRJXMmEBGu3CEtvRvRVypW437NckDECAvvocd2Ejfv5JRGp5KMLFZhsL7o96VNxA2v",
  "key13": "QDJszkuHXwRHJKy9An3uYug89VPpDb5PRiDDQkyt6Q9HismXSPG3Rb82WPK41HVkW55HwarE3LrhjAbiAYnDw7Z",
  "key14": "2dmi591SJuGjhgrU3ZHtskydBzeKMHb8ugGYN378LyyXxeaDvm1zaX2Yz5vbmsLC9LJPwXYc9KDAJz2BrcFSQSZk",
  "key15": "5ZjcFJpGt7vTaZuo15SSUTJPqxyU1TBrpFAygz6Lgo5RHgT1tCvowGCkyBFY6xfpAGkew832nJ4csedsk5BoXhCW",
  "key16": "4GXa3HpRtczXhsw7GGnznRikGb8msiQUKzEqvydLyb13kWcbuJm7idAMyLGshfQrvgLDZTwuvM2EfHKVn6Jh4NbA",
  "key17": "3BM79RJWMgMebpE9J6i5MGE3e5AiazuGKa5oEjxB7YgFhhnHDSHyPq7E6KbUVgjrf3rUENN6xqSUygzXYqTDmscP",
  "key18": "5XkYZqiUGfss1u9pwy3eZUsqqoPigHXfh6st4tZ4KpeZuhfR3o2YT2AYHTMW6uUngvNvikPAYa3ArYtcbFAk7TiS",
  "key19": "3bXzaY4MqjqKLv2cuHiqWFHLvVchnhCgWYc1AsUuNniAPVU3pWurJfbFsknukjtoMQBYZMGcDVrXZtgZgh2bneiC",
  "key20": "ZM8oF6pfRXHYKgqZHyCxvdcftEfwe3MqgPzVn3sfTi3wcQKbiHXDzXeFUbau1W2PNxVKVNqwMLjKgFrDmDXGkPy",
  "key21": "2bqDU5mvDHjhdUMBM6A9HRH3gf1AzGz4A2yGDMbY6Dp6jN4oReuhepgauPk7bThr8jpZESbimsKQrZZDcAmQKxBB",
  "key22": "2n6xUDFTDhoBeipB5LEtSXyvPMTv2PysLmuHsoQ65z1xhfMsiKiJU1iGDjzab1adqHtuVmZH5xNVovdKNrA82m51",
  "key23": "3RKToYd7cghAm86Tvz9NyREwcmTb1P4e9gYErMoLB6Suu1cJWopniDZhVUvHc2Dz6HV5N3kn4bLrf5Jp9BcG4xZZ",
  "key24": "4b1HSz4a51ZWHSmoAFVSk2CSxDcGCuBHMRko3q5dYhavnhmMmcgczk4RMZPrdeVgVzqWrHLHcdeHVbUHtEKCJ8W9",
  "key25": "4bAjX365PeJH3fNjf9PGR5C9s2yDtRv4d8yLu22gxceoK5L5Qntfp34Ffq13ut49UzkpUhgUFz7HXUSMSfoc6PX",
  "key26": "2GnqTbNXRspkU6iQKX96XrZZrj6e5gwcP7BykH5xoeE8Xb6eC3TjqG7f1tVmCo9CNbpC4ngiGUoJ14UThXE5sCLQ",
  "key27": "5G2upT2X7hzC2MpN5JMHuktvqjcEUTsW27pt43X1jpnwKTpnDXcat9M9mwFZEoPu235qDx3usNTdokEbVyMSnuLA",
  "key28": "3x6hXCkNMRz5w3TxzhpnaoT2LaEn4e2MdHEtnFofXJt9xh6pNmemiQZdFoLnfF2s95555Ek88VjNNcoudBhGCnkB",
  "key29": "XgMWHsUYhhMJ9nLWrQkhZduVTc3hU3Zd7oLm1j3K6Rquh1kfiVqZn3WhQsCmeUuoT6sV374Kq36DRD8ByEVQXvK",
  "key30": "4x5aHVZfc4Hj89PxtQZ2r5woHj4jS6GjLt4iEUAgfyABzADhkk6MnGWqWCv18D6WvPq6ZkAh9y9sbdeRonKfEUyx",
  "key31": "4X4joiqfVN959NhBxAV4RLNturKDLQWJ47M7YR3TiwGtGwZbKXbNCnavznU2PDfWzvf6o3M4onm1abtdGbHdANk",
  "key32": "5neqHZb6mYzzVkRNp9gKCFSgSCrXRFXbVXTgGEt1HsjcGMLPsjsWrCvz9NeJVeuTqeVvpcgzfY5xVy148aFG6Zxv",
  "key33": "2Z2fxPBwqGumZMpYpG7i1zxgqQLjc8sySBZJNL7L2apzjPAW7UCh6YMqq6bsfudiGXKRm2LoceG7g1ikEbALZ25s",
  "key34": "4A6zVsUbBTumx7xTKf7BQAyPXSady4ARKdzckZWq3eJbBRpxf6zZPbFfxpAuq3TFoDP1TjRZp3eq2p6mvVwHmuCU",
  "key35": "36p627iZAGCbnm7Pzci92t2peaTxM3n4eW1qtUrV2vwFPtYXk2bq8Bb19aNGVfTNWecXb4Hc5ov1oU59AvVBggMv",
  "key36": "5RtFrbm35t6h3wk5vCbQJjttB1WirEHoZbkPhuiWmU9ZyFruNX1ny2Dcjpeb4nFJNdNPfaFqifiK68Q6svV2Cx3R",
  "key37": "47gzTL9ynHmNL49gFryCbtaCHCTbRgz6BLYxCmp2MBFCs7eNVwhdZ5EvyC9m7frpSECs8uc1UUtGgYuQxVjfu2HF",
  "key38": "2dvKsV8g5cXKfKnZGQEP6ojYHrP6QQLRuzjyLVbx5y2WuF8eveWfDyCPRVnLDguP5SPmFB3EDpNTBy3toDJBiAkT",
  "key39": "23Z1b9NeL6ANuMxeEN9fjMAJXNyjDWLZGNtTnWeNZB4EPdWKgs9TLXpZZ6ybiFZUYMfPaW9z1JczHh4KbqunUGJN",
  "key40": "2GbuZ19smKsWWEgFP2upXZZRaoNFum1USozndBLETiUxT92zhcQgZ92ncseDUeGc6WCMQP4xkm47H3jaKfBmSzRx",
  "key41": "4ZJGo5xBosy6ykggPDVtwSZ8i2YTF96YGwkySUMqVT5RZXeVwc8WwFc6a1CrXWdPbAZwUvP3LtxG6Lp4dJbS2DBm",
  "key42": "a816YUz3uzcUR1Vpar9G4CDqXWePgC23zXTkdfmEJGKraSZcarKHSsrjmZgzYQAaUVgJWZUisEMpZs2twShStfb",
  "key43": "3NFX95y5Y9rjCzAFFQSwQy98n1XPLHTErvwutgC9N4mninzDJ7JxvbLtkLDRgFeLdN5hSXBscPnpvzGcHhsnKuAD",
  "key44": "4yWnsmifwba71wmF7i3KEPPg4QySaGRq44jNMPSBYHi5We8Zr8LaBuBLQELyeQbCPsmsa5BPBqojJbXjku9QnxD8",
  "key45": "31t6PGxgurRYxPL1XGJRLsnTQPByiaAg4f4Nphn97orCxaRmuDLH4HLan2Gu1dWcP82dWVF7Z3BJJhknBQX5gWdP",
  "key46": "BaFfNhRW5iWTeofC2CjoT38R1fMsC3p1oiDyTG1y6UEiXZ3bAxt1DcEed1B8EzDfGNAEe8YTD5EJNEBGuwWrdWA"
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
