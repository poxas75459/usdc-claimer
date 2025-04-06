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
    "2LsH1bNQNFcXkNCZK2ux71VeQQFQYRaUoz15JXyp3WpuDvTD7m5BH48qC65q5p3g5FK3THzgCvtThVCc7DnE5W1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wU4WXBbSzpR3iE85U8gXYtxPnZC44J2cczz8keh6jT1B2iAhHFPfiDwRVnWjX1GiWQD1HYyXv9cUafsifZvM8HR",
  "key1": "3gZqf2qMBkP5Wq4Do8zgNVPasGPQxSZitYimv7WxiFoyEaR3bCfyF1Hc8iEakZrM6X2yD3HysL98bpsjBWVPXe15",
  "key2": "3tVvrauKYS2orZZMS1NouRMVZK75siV6USGAHu9yt3ApSRijXmEww2zyw746beyQrEiZi9bvykKgsT3f2CZTnUQc",
  "key3": "4gx68xVq2NatxipoBN1M6f7uTwCbyUH1ucVF28d98Gp1ShwdShCyyjbXuiAMqM3dPTN97zHbnfpNze5d2myj2M6k",
  "key4": "VM2WcDb9oesmHUes8QeWppuYXGJ9st9d42uo6KhCkTMynpPamcqH8nC4E8gG9cpwk8iQsimJfwfNuJUj2kqt2F4",
  "key5": "632eTuR89dWBkRMPevegRiDpzjZ4L6nmrs5GMoXEueb9xDLdMmpA2S4FnKGRyTZBZ9kpD4MJQN9JsrYF4WLtNNet",
  "key6": "4pEGE4G1ZQbdzQMaGogGZ7BUXpF1rPZP1hbLxRqYqViN439onVXKcp6xVFjPBSryLuANxLF9KoBwTDQ69x9LubMX",
  "key7": "5FjpGMCwFXDas3Rico6zDvFsX4nxwkTntrvb1uoYHrEpawTT9eB2eUUCxwYC98zgBQHrnEkP5fDKAUPpXd2oj8oR",
  "key8": "aKAwgthm8WA19Gir3aWLZaaMTLpCRxVi34XQtK96oicvhnJDxh4HNxg2UarxSy7mLBQ8826FaNu3gd1RiZAxHLV",
  "key9": "zDn992berA5Fwz1Z6x8cvohPQ71uKSNcxj5h2S5xZpqwyvF8JTsdpkFHfZdXyqU6viyhXhRWtKqBKY9AG8o4j2o",
  "key10": "2jHh8HwCX9acfaSLeFBP8zuACdvc4a29d1fRfT5vLwcoVmtnDEZi9bA6CnnZLdzQ9LKZzBfMadedMtV5BG6N9FqR",
  "key11": "5t1nNFCecza1gZxHUKj4hDzjENgGbpGojJg4YbUm3Atb7Gik8wSoJTmLBbkYGaJodJ2MQfURArGGE4rUjpZJLUCU",
  "key12": "gd8sQdj73jMGyForZngKSvWdGK2gMxZ3XaNGKG4HU8r5p2vWumeUQC5uqSwaXXDED5Cbi7u2DvbMDZxi2RBWxDH",
  "key13": "2DXE2MW6QKGzYUq2Ac9CHRyE31T2kNTHY8Nux6v1vjFRJWLuJFAHAyUeFEgBQXSRDxVbXiaYo4PHnCJ64mmn9Jsx",
  "key14": "4jbs28Wbt9Cs1dwKY9QqJAcRSmtYUyWRHCaNA1pok5AXoLtNZ2sLrB5YkG1sUv8atePygHtT4chbYxFEaGsngNUu",
  "key15": "wk4sTFLpiNHm6wM3q88k3vX2dLYkgFEzto9MG6bsngwd7g3DTfUzhB4kKw1GJZciBG5kfaTLUarKCbNHbqddy1k",
  "key16": "4aDT5jVoQuNPdPYGviA9S5hah82DGdDJSu4TH5yt1ReHm5UAY16PhbXnc1mAG2dA64RjHoneEesaCuZdbKqP3Sjh",
  "key17": "5TgSm5skS3M6aeUp1sKhrvQBxDJPFobtiu84M5sZBB4pxc66pHkHUck7iPEiz4LJgUSEqMgvtJjjZ5nFJnnhS35V",
  "key18": "5wSwvi6Ei4jbH1pz4UaKekJvG6rqSpqc7pYHMsPziBTn86bKBYfHQxCrBnx7MQ8N6AYcBxtcaA7o1vcooUHmh3NA",
  "key19": "3rjVLStsdJaG9wrGuQQVDH1KGGy2nWWhnhQMdF95CqAN1HgVSUaYpjysq58UgAqVecNurAzbgo6D9P8WKKM3ta2B",
  "key20": "2x1CgRnL71zyMxgbt8o5uGi2DFFbSDN6hBfyuwsLrSeTEaGUjebYMjVV8MMWEciSDRth5yYUuzmWnH1jYbkhRkJp",
  "key21": "4jk3m5T2LZwHFBerafgQgR7BSwy58U2YUR4GbzZ66YQoPFkGrGZsNkciDWcVoW7NFZRw6vFdsmmjTJuUSWZMZJk7",
  "key22": "32qQDF2vKhuQ5bj2ShJmQqeZZWvb7XNDjeJe23EkxMGiQ31zeUDC4CkAcX6Vq8K81gzkjs2UMahsMmW8R7RctXbL",
  "key23": "3Gmbvkn6vB1L1rpoHHsjc82XehumwYGGci1dM7GUrpCqP8WBSabc95x87sM2d1VNDjd7RfNj6csQAapLm15nDvAr",
  "key24": "2bpqcnV4ad3S6XngZ9Rr5K6tecGV7K8vw5QFcNjCS4pmtyx6e1pFcCnV21J5M29J7m6gVY7jisJTioPiuPA3QQsg",
  "key25": "4U5pQ9p11xediCsfVfa6BMBzVqAHYcQmFm91YLXbQPN1bSmP7MKvYoVQAv4kTcvcA569UK93Qk9fvmma6FCQZEEk",
  "key26": "61U71tky2vkoT2GyEesakL1pLxodfS8Z2thUShhYT7deDispfyZysPVsXg6qHxA1GtRRuG1AaaNZoAamrWT8ii5U",
  "key27": "zeZJiKCRg5R639HhPGWSvT7NkzBFgtXDVPpZbmbRfFARv7rKySW6JWgxV9mfNbXDDYsuZke1QhSLNMxe6CUNn4S",
  "key28": "4qJLkw5j1bvShHPAgfjpAwWikF9eYVKd8mMHLwkGXUi5vavTS7r9mff992AREJudV3M5iaQ9hqnCo2SoZhLoGYcR",
  "key29": "55fYnuL3uyAr4iLo3Wdoe3SZLZNBxfLvr79KSFYmJvpiH6caCBbNMyZugFBejeGPU1E2mh9Ta6LVQEwTGi5nB2ct",
  "key30": "5ELGoMsPKVZp16XXi7pTcebsiP5z6voS6viTZS6GAuWXo1bgKD8gy2vLd3nz5skJadMymmRZXu6soABjE2uJLBKf",
  "key31": "4CRdKvrtZ4hLkuTtV1uadLq7bDMgMqBNvkVAazNGZ7YTRv5C72p61uYvd31sM764fZDAwq4JEGuGVtu43ZYtQwrg",
  "key32": "3zLGREEh2Yj9DeHhvFGneVUjFnSnWGFySDuyK9DKREWZoCoZZDqzrtVHxXH16ebpniFtthArBuJfntaYfSkg9vcU",
  "key33": "2TkSyXSzxLZga5Tep9CPFf7PKYyoSYzSkC9KrPPGaeyDXMh8DUxZDjZs6HYbiBuyVH6d6Kjsuk7AE34wAMwibJiF",
  "key34": "2PruDXKvAYmU4UGbz3Vg83uLMwMYv9Yd2U8MKFPndwfLZ91trTAaDm1T9bk8hE1FQoMaoYyroBEVJx4N8XAFVJzQ",
  "key35": "62Xw3Vry2sjZQ4SNjUAi6sT6NPV493byetMbXUjGwmGkhaBpSPwBRVh5ABHjQ1EiwdRDY8dsXW8URNA24aM33jyZ",
  "key36": "54mrv64MRSw7ZTKLZnT9rk2Lwu5d971rhZQV6tS9fmRfDW3xwniZKScQrmQe6yAxbEuRF1g8QFirALq5bGP1iL3q",
  "key37": "4yG31BdAP9Z5Mkiv3Qt6kLMZf8Pr2X1DpvhKWzwnNnMd6sXFvx6hpyG69XFLYf98dpophjw42xU4HzBeeWjCZ3Lc",
  "key38": "4KG48zDwphnR6Mgs4MufkM6UZgAwHRTHMKp7HhqxEDoVVXW7mnMhjsR2cg8SobzzpvmAMDBiprCsf8mggKnxG63x",
  "key39": "2fjsVTdc6yQZN2gzokr5pLHhFUWbPw9iyk6ZWP11yNqH4ZTjLopgnweCsmz1GoTBG2bMMVSUUq2kURGUho2UjBfZ",
  "key40": "552Hx3oCfqzTyGGHWJzhF8ECwbJud7yV89hoa9ZEj763LB5mjACQGNo4JKkN7ejoRnfSsjcEYc3Ms5Z44tEDDPNZ",
  "key41": "5Y7uQWs9g2Ddjgr5XrSn59wt1YwSntVwRcTfqXPnDeQQSag34ZM4h7B6cetEeCRtHrr44pN74q4nBQY8Rzk8i2c",
  "key42": "3LLb7py9F4ohHGpk7yRdZ3kAFw5dWxJecKvoL6of65vNXsbSjNrUQdPhYk22NwZnLxaEVDsk7h723myafg4Me2LQ",
  "key43": "4wn5AorXBU7Umbb6p42ktzpFD8vLDoKRAquBFJTQ7C8PT1Jp1LWV1qfFnGu5vmhF4EyKKJuHsE42tv939rmMbeGE",
  "key44": "46djowT8wqWJjBhaMCKBticTLGSjFfj2zRdzMKfdJy3yJUZJc2mnRdi6NDKjciTomMGiAvRnvzaybJAJG3vt1TGS",
  "key45": "4K581LeaRe79E6qyvBBu2vsTUzGArdT6fQ6GsVXhBPGJhXoSY3XdvBRw6A9pC8UVT2ahVpZ7KEKXEWT1FkUQqfPA",
  "key46": "5G4wCJjWp5eyddRzjNyyg83Cyu8oH5PhsYN3W3kMAaQ5m7xXwSMJzcAigYRYrSAEDsETbWPw8x91LbbUKG6FNG8a",
  "key47": "5Kmn4jHP4XKsg5Yt4HA4oGLNDhZMMfybsDmUmN7wXQPSzaoab11aQJSn922YMkh4fSuJwWBEcnYQrC7eZpfcZLXT",
  "key48": "5v4xSSEs2M9XuLtWzFZZdFRuQvbveuiE5M88WfiyHM3Gi6UUxP3x53KwSJfqKCF6BEmdkNU6DL8YpDMbmBckgUA1",
  "key49": "3UBvZxn4qUj3hQHaUDjKhodnkhtb4euXMqJ1cDPEBGPB8BHQNmdnXfXtvGubBz9jTWxUCmPrmrDUnu5PpkmnPJ8a"
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
