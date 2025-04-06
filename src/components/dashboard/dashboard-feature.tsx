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
    "3ZbY3RTDJCW18S5pAAB9UBA1ZySyy9zHRchcd2gi65ZLMBun9wuedzBcvRJwr19xgmgJEhx76e5mgpmZbcYEdG2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255DcJNdAu3An4FtXryDVd5zY1YMQcaTZQ6xhUY3ThpCBcgWKgPsZccYnipaSJFMHTedAtqcKXeXXz3JBoco3dCm",
  "key1": "4HyHU3GTHX9wXwKvwhcFrhnV55F8e3QQjqJpnY1pCkrr6jF8Wy4J3jWEhxhiJKqymMMZ2TXekBVHjXA1S9vVGeFn",
  "key2": "215J5EiMWMMXRo7XbHZMjzK1vKQ7X9W9rRqGfY5KrssE7DoJ8g5L6PwsS7y6S1y1enBgpdXEbJCCUgZ7sgqJze9j",
  "key3": "2AD4iJseGzeXh2QreszUFajCmfcx7tLoxBiFP31hqXL3aDJQmQWCoYvrzC9HweoJ35F3Xmo6cm9QkURL8Jdy4iD3",
  "key4": "359SDZpYFVVBXapmGwTTT2S3ukVdozBRLu8g26Fez6dN3Fp3FWBqjbun6Q1P3Vf8RvnNKMyK37V8Szekf7dPpLvt",
  "key5": "3KmCUxVai9XyQBJ9ofwEQDvuR8544Hecrv2sdLReQkdNxGvwsHyeSeSZjtEyCbAqkLZJuWhKgqDg7zRLPreer4Zy",
  "key6": "mnZY8QmUudXr8UijHGBJuaU6fC1qDyU41iHATzjNXjwUKUsABbezcTC8qCjvFZeJjzXNomyfwcbFpVjLTsuLWEd",
  "key7": "4LRz7ztrsj86ZCGurfydbmA2zCjawX7NPqWSUBjhtUdCUTg7pdriVmcaZfJ4ARMn5JHTCtpLP2HH5E7reD3rS2Ej",
  "key8": "2pVQeNqFkiz4KdBTJBft4bLsSF6HcpsmXUFu4XpbsEtjevT48NQ5tL654fNgSMSzwaTwc4gsasybfLQLF2uGwHbL",
  "key9": "4as8ryhbUQRiYSxNU2d4tFbVSh7uiZxehAVE8KDeEyrLy59tdnZkEmEZ37v8MQ7mpZqHVb6M1LoVUnzXqBYxhVV8",
  "key10": "2uPzNfnN5GxiiG9oBay6VzxuQjTK6mwinNGVWvyvisgM3QZYQ6wePuN9nAK2nahqRNZm1jVNkNVb19SssPCHP5cb",
  "key11": "2cb7duhZ3trnyGRWPcmE73pyhPfNEfrMLQFk3VRnXgQDt69bsPtaxRP39SDHBj7mtTSE5vEoBeXFLam2z3WgRfTU",
  "key12": "5H9Kmhy8yi8D4xggQV7aGxbUY1GagyC1ScNB1qVokzr2DNGB31L8jYoDbVuTNQNogEmdS9qLHCN6uJ3bYzk6AgGS",
  "key13": "5PsLmTVLqupbc5B8zagk3qd6JvBLMcmeNxsuP9FQ7hsupH9zdCwrShDvL8neK8A84croSDdojocDUdC5QhFQ5EtM",
  "key14": "2xAadEp7XqGa32YfXqWjzNEYEoXfdeFTAd65YYoCStjCjWehKkqEiAnZF3M2s2UoQxqDVKpmhhyLG7ic6eKjjn14",
  "key15": "2QFvpLasM8cee7RpErHRqaAkTUsHz3txUYaJswcjfo6n67fTbMBk4bB9ifkCqBvvGT92w7uDKjvsPtbnL5T8M4JW",
  "key16": "cAesyStpjataWeP1H4Z32ookynUdSW1244m7XgUwF9EinXLUvV4B2CoHRAK1UBctc7rK6PiuaLVYuJSgqYWdRzH",
  "key17": "4vbcaHubKcizwnMFYtiEceXdmXTcSMbjus5Kg5e4zx3aayMELycC2xHCRYJJzpvJMQ598KsPssa9A7bRhF5e7kmw",
  "key18": "2rA74Wi2oDMhBg72KWsBqQjtUH3deg8BcWS3dvhJHddyxZs64d3s7RNDEhNrWzJQK6sofXfDQ7Nf7pJV24sNFNbF",
  "key19": "Ad88qmJSjnhqJNuf7xaVb9f85Fj9dsmzHvB4YYvjseVi977CGxVJryojCyouTYd8cZUVwk25ti7JysJGFuQcPN9",
  "key20": "4wjcfPpTar98SFBMKjSYXu6jsd1xrAe13rRNGpBmm8cCqMKfLRRe6uLTihMT4xssyFM7Ch2o3GM8w7zNQa2uRAs9",
  "key21": "5vUrgTruuakgRVTqahETcpL6veBR2bmgiuoyj7cgmFVwZvqaJ98DwVA1SqWndSz3B1MMb4s5DUMAVWiAJ4cavBN",
  "key22": "hnZVpDXkTRYreZzxptfco7az5e2W3mhEB22q3mxmD2LpbpSapbM92jS45DotN4qWFeU2LptpypjcxQZmmmsudXG",
  "key23": "Pu1NQNe5rzbhwxgW824UUpx7XQD9jjgPgxhR2aUbpVTvsbQdFVtEHgXrajvbv5bpUdYEnYk5ezmpHWNgjPGJ8ZQ",
  "key24": "5FMSiwu5U9eu9Gb9iNFng2Jv1E2PzNHsXTH3zNVhzaXp5oRiLfsoqk1hQPoDu6AU2ikvQUGDQKVKAt84f9Eh28Ew",
  "key25": "3TLo61f1PqiDd8FC1MKYb2R3wHGrGhLEWRmXjVzFRve9PqzYzNZGxTb7kjpUMUmcJk38jfB93d5qxnKNVpmL7sgY",
  "key26": "4fNd6x2VqJhUs8uZcE4gbajR4MpuvKCbZ8o4KzN5URgxn428NE4tgMxCE543KdV5wAxUB13tYL9Att1N914H86ZR",
  "key27": "4u9kA1zCazxTuRiq5B55m6G2kXYZxfCYCkGtZmHRo9jTm9qKz5KKnz5sFTChmKStqbYEdkJh3p3RDtDEMq3UZcJM",
  "key28": "37jbUFwXs6oLT5KnP1hJcxGGnDG1JuyiPic4bWPmB6u6zXwfJ5GW9JREeWgN1hzCn1ne1whSgYPtv34rkDAxA3UP",
  "key29": "seMAoPT4S3CzYa4URyr7Ra7D1nJyn4FdW8mEkF5HDTwdPX5ofBU3GgHtfLFU4h34Kfv6TG7mQepz13UyU4Lcq4E",
  "key30": "2etSGJ5r5Yqg51GgVBtxsFpCWGa9USCiL89b2rmRJAaXdAgYjvKGsgWjgYNr8CTyFgus9kt3BCPJKDXSECCUbhsS",
  "key31": "57uQp3Lw4sBTV84aJbQZRmx5ZKssgYuMypk9ZTywgjzibKYbsgmgjaNuGYzRuDjLWdFFoyj2h7qcdkkAYSowAhSW",
  "key32": "4cGfViLEgiA8avnSMEgupDviY4KSKgMXB21RXaFSpN3vaY3NXo8MMxgs8EjF5wjGV3PmDEfzs4ymXCZLgPLF8nKK",
  "key33": "4PyhnH8i2wNyxo6839NCzhtdYB5x3hEvEmBzm6VpkGwXnLaKQw5UH3KHhpsuh6TrSoj2NW85nBu6UsgjBeY1WSVE",
  "key34": "44m1y2xNrJMDR4DypvtVqoxLMzBkNapTAn1HNKKeUkLFvBaULmfW1YZGq8BbfyRcweS1pgP1NRJUcRDQxbeVrKei",
  "key35": "3WSHwVfqedSaW5JykBXhPnDtpTTgaJZgKUJG5ianWTo5g5nUA8XXW9xat3ijK8peX21AXifhW6BcF6nF7oDdbdSk",
  "key36": "3FLQBzhVfWygvmN1GCEnbjJYX4qCPSG1qDvA6DGVqCwV348mP6RjRJDZGk7KcQVa95QPBe6AGbp262pbk2uDSkzJ",
  "key37": "3XkeK9FidBDX6tCvu6oWo8r8U3gm9Pi3jZYbkWz7LNuAL8M8tUYHVvvG5Vs8ZGrpx4KapEcwLKM4wQCtCCP2bW77",
  "key38": "5TgBLCtxekaYcd2Wn3yZsrn2QNUuhJFYw6qa9YRKh1Jmz5EN4BQ4sTjDMs8dWcCVXui5CxoUW7qRtpUTSLyfo21h",
  "key39": "2PNsPicjUCH25BXHwPqUzysW5mzUJLzqH3F75Dxcu8pXTZEpvB2fpeErPY95NKgu7WL8sUXygv1VFriiejf78S3u",
  "key40": "5PaS1ub7zJYizmhF8VWYFxhSreyYUR53NTESpP751uWRLAPANFQnMLKNh96EJwghPdG9YJtLKythbQfa486agaCi",
  "key41": "nwjabh3yaDi7YZkWA7Xa26NZpYVMDtSiCTsJ1VP39q7u3DGQA52yuKPXdzSGqSfVGcYyvExi95FohU1UB6wbZuq"
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
