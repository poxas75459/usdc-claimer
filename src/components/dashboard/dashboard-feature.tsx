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
    "5ejmHThHtm3vEqNTxVeg5sAri84KTrcd5GiKD86Kbfr1mVd3bCnrQkv8HkTSYsVBQTtTvZLfnwztMRS1G9BCo413"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVmnZrSBifZQUA2EKdLgkbfvWcqXiUXjGuh1SJFqKsMXgB7iCZ2uusLrW7qY7sbhNp8g2P8mcyZrsbmg6Hcj8hU",
  "key1": "2JpBxHGwnNteKHYCNz8AKg87JGmpwTJGrKoBawAGCveJDso5SRmVBuc4jRWWa5vLrByAiz1UJo5edAfosWLKJq3Q",
  "key2": "2zsLig9T9PCkoymsGFnDgtJz5ZRBGpPuCs8jkw4uRQcsZuAxU5ipUVSy8fcmFSYHeTnv5c1nSQHVj7NGvyVs2de5",
  "key3": "BUuo6on2r18THCxb6zEXqe8cGs3Cu3QwoatRM9BtRVnG7QdHPa4M7Kq1gUgRk4ns6bP1iAsnwbMaJdaQa9PBmGg",
  "key4": "rC7RDbZNCGUbxR6wJqmwwwJUNAheiVC4bH5GMKpq1Vd7NzrzSxErtX9dgv9ZpbBQL1n74tjtuaxUUXSURZtdjVx",
  "key5": "2iLwZuCAsW7MXUAnTfVNoPcGkXvtSixYhNvfwT15e1itHYgCP5Qukxj7JDmZe83d8aXtpWizBUkvQJb9gP7i67Je",
  "key6": "3rdawcvrxMy1dGt2Ke8RpijFPsR1HfyFxts1D8mgnEaBKP8RTWhz24ZQg5ygNVFzLm1L23CuFegdNzkhowF8jLrT",
  "key7": "52axNVkAtdT6jZfGaXQymDqSgGNfhzXiBX9JvdapM5xUgJsVPkr11crQMVqCTjUJAhF73kD3THHNNaBkxJf8Dpv6",
  "key8": "5D8xm8YaeMKrV28LeGWYKWdDgT2DceYWu5wNBFHnzyFtnEWCnmrGE4hafMWE1fSjvfcqj2TQorNKDg6NH3ETY2Wg",
  "key9": "5iyM1SgSEje9hHxz8Jem8UpWnC84gMjrAnf8aMWuyPu4xM1fCessoGNzFETT1rqhD7aQkKNSQDwDTd3Hg63Hb7a3",
  "key10": "XdvWckMo8NK7eeEfzjphhNYVWfwZdDmjCe8AKswmB2MF7FtN3kUiWK3TV5R7zUBu3nF4fbwWuRu44H8aQdSYc4y",
  "key11": "2yN9VkJG5kMicRHccKCMadpDeCZAJVgMz25TfosWe2UnqSc8GUX5h8YMWfBr8i5tfXRgtKrSxz3KC5GuvkzJKoKu",
  "key12": "3QycntiQZWCA6nK4MfzpiGzVkrBCDGAVgZ2n961NRKaZvt8sCUf7mxQyCc2ngeEYZ7C8wQUo7NmUHCu19EZt3mHW",
  "key13": "4nYkN2BMf5ELYCgrJaYv34NnfGWzUSW5n6uuHFi1pojQHWYbzK9RJ9U25pu2ASosDuJSx9JQir6ykdUcDcfKFHiW",
  "key14": "5dxJXXA1GwvBibANrzTNJjzXeSaLXL75vS2tKZzBRwiPbZe16GXBrVAfrbzKcXf3x9UnHuV7NzLLa9da29dLUjmy",
  "key15": "46swGn3PvwcLmphGfVia2vBSG35mtQHCFJzcUUU93tAxWfCgFVRvFhybu4izfV7k9yxNMQFMnhBmDEhJiK2RMFHD",
  "key16": "s72njFrsUb7VNWLuUmz4ZiUw9YEmuopyWFETcvnecWSqh6tUA7TjPhFMJjwMQJJ3uVU4wTCqcmdsKXXTKFhGknQ",
  "key17": "5VxKRyBqpLurdDYcby7YsEWbQ51qxsVdkhZdx5gCRNJwFHv6cMsD5U4oeCxMKrWHWZhb9mUA9y16Ae7urmar5qAg",
  "key18": "43jzR1KLsmyQnGnNBnWzeFHCjYTtBy286XjSjXkSo6vjmBezaUzWSE15smzVX41d6YRgUnUB8iQ8YbDNhKx78mEE",
  "key19": "xSrsr3tvLVh4CdxXYmnYoK93CC8AQqAoevcnvJTnZePHdZuM8kV1i2my11zHUV6G22QjVhTYdNjqeqZXSEehEbw",
  "key20": "323jp4wDk1DAiTCfPRF4BRS1ffwLcYgDFb6A6C2Wfs9cG2xBvEJSB8smx8NiEJtZNMLn3754V9T4E6fi1QvYDteY",
  "key21": "3TC7T5W9vXNyv5puCtxL69zY9hXRPwjYS39ueN86M1hfVP67r61zFiokpnhh6ot7jkymHL7aPaWG881dW2yLoDF8",
  "key22": "CPaPLkZ5gvXizba36hAeTM4mECGPe4kNdkgXiAEKUomHAf49ssEwAeVnAhxJ5Ne76STSeXHmF8VwHogPQ6HdWE3",
  "key23": "63p3iXk5KQGyYs7wj6QdpHYUJMdPprNTNgBcCGqkLXYfHuXfcGWPutKgb2csGHzkowzC1VZmuHEw7zjPcqJVacrL",
  "key24": "3DTtmPV4Y1ym7uwhhRjyJNNZqKie4tWWiTCAB4mC61E3MJThrqB64GBKqazgCf8ZJuazgHt7QwbRJuxr65MycHJm",
  "key25": "4Ye4d6yWKUgdwLj2zCQDx7wz4MRETqp6nm2GFjqu8Acj9VNVzQXHitBjiMS5JAZuicZXuqNWdyuvRjWxB11K32Dw",
  "key26": "35mN4eN2K8a3KLZau6jbVGujQ7KfEuG4K19eT5hcNUM87YcFEHrnnfVrNtBbT3ZRrbBPkyL12dvGxKRDSFtS8eZj",
  "key27": "5BrHGrdaAYHda1cXKcGU6MM64nMMJ4QN8c3nBByDgP3h9dSpagE5CMz9J9WRQ9AW4tn2EGWNsxDrcE8LzXzhizfS",
  "key28": "6GSLJVE9U56Nr65Nay752Xkpd4dQKehfQ2XF4gppeqkjDeXsMdwNtf699YQkgHYS54CJVTFifKSxbyJ8VtFfYcH",
  "key29": "5UpxwYNb6jwSXhX8veBFyFdqVKmTG25AvrA23gKNcVAuJXL1Z3vNafjeEf5UEjE7xnvwLet9joL4Pn33GYdW1HPA",
  "key30": "3jtBHgZuFkeWxxYgVozjCqoFHHgrdsJE2HbXABqDxnk2fa5bjwqjKTbJUHF2BTjyhQxWU2xx9wXkyCzRpHqg4ssY",
  "key31": "2VdKZosDWghrZiDFazLPusUYbwR8N4bduov9R1R5PyKcCuTonbPqEF6Z7siLANwFvjKSaBBXJe9UgDjqPJddk1GE",
  "key32": "4vn7pJkE99b6rs4GJLvotVnQTgRqKNnWjjk5y3qjNnAZK9WrE9TaV6TY2uBHv9XQP9r7tEwLvN9iP6mPgaLsAbuQ",
  "key33": "27pp7ieCHnb1DGy865citfxMdwrzQ1epNe8XNMQu45hLVcaCXuYxfRtfhRB61PLUuMDaX5x82SGAF772pwSFbspH",
  "key34": "3hbKp2FHggWvCsebUiasGRhbpAQTEikTJaZnX3ntfEBWt85jeQUqfwE9wzQ7yZmq68FWL4CNrH1LLkoypoNU2osh",
  "key35": "pA8LPGLAK4J2TQEC7vEJg9cws9gB2Y93yjw8iUJywXdN4A9DwwB6nEe5iZNq9bZq2XzGcxPb8xBYBbG9VsKBzyv",
  "key36": "5tNq6HgMCPTiatSJJD6M35jR4DHbc6oC51iSYxjodrQxJk9X8yjsZ1MsEd4MWpwhMqWNq3DifePE9XxvvRruMhrj",
  "key37": "2k3rrD9WKCU7pJJiGRRLzWVdgSqShaFYJQwuAaAQ8TmqK8E8A8cRD919hfFVmi6kYxYeAdPerZ4fr2JtmBFW8gdx",
  "key38": "5ENpHUeMkzj4FEK7eawXzVoNmBaiKTQvdMwixebCKF9VWnvSJVpS9GwePfqfTB3So7sBnQ8N5pLsrznX1EcuW2Zk",
  "key39": "5dgwW3Xx3FReiMX9uY9MqVnzDAYtb7CqN3qc1zXkKrH2XxwBKfyawf9bbQ16BgEUJ5ZXVRgDdSxAjMHgFDAzKTte",
  "key40": "5Wn4CDTF53Lq6dA711t2gkKwrjHB3qqwzWPqYMwCmZcJpzrwyFi9pidL77xNPkWvcfymsdJwCmxACXx7865y7zmF",
  "key41": "Xqny5dizYm6SCajauwmZdi9hDvy2RTGxkzbSo1RocGDQ8KvWDZSShLPxj2QPhrJSjrPvCParUhXjhgwaCNtWG6Z",
  "key42": "4EP6c3ycaotj1uwn6f7i9f1ozPmWzhj8zcVxe9HtWzwgjerpTzRMXFcZUAYVDU4Fjc6qodJH4nkABwjdsghRfnNs",
  "key43": "k5WdBbX9bKeDawXXEnEDJnroJuzHEVvyt9jNJxS6k7rB1n5BZhi2BRMSyBJ6t3xpxavBQjJqDTocythCXrL5Xv1",
  "key44": "65xPHERa7M33WR8cv4wjNqu1ghyRAkg4D6AkTn3oLRZMVj2bg36NvgbJSrhG5BmK6AWy4Wk6G5Nhq8AtHwTyp6dE",
  "key45": "5EAi2iYGBBDAVy99xCJum11qedWSr9WcdudjV8FQJexyXLYaAkN2AFEu8mEA8Qz5qHJFkjJT6FQ3aB1uVQ2VzVWx",
  "key46": "3JRRQE48mUmftv2omA39qDSkZ2U2Sn6rnXiwaQbN1QjWWoEQR8hm4GtoeyCr3p3ba3qChV1kAzstUX8dXgeWSM2D",
  "key47": "4ZCFxGhSZpwbBTiCmZWQEoYnUmfPxN61mZPxZ2ceoVjuFmmJQsp6FWp1ftQtuqt9THKWoT5Dj8YNiFVkggN98egj",
  "key48": "4hQ7eehr4EMNhBtEzR6YFWFjuf8JPzEyEq5w3sCsq9dVcy8NXV4EuPEGzvVsWE9Kk8h5oU5h9Jyid8MvPBZ4U9BC",
  "key49": "5Mzwr1d7yid2kLU3kbV2NYkz2V6oN6YdcjA1CvV1ZSrW4S98sdnLzNN1Jrvwa8ypVqjSkcna3PrGyF2j5uy3dnZB"
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
