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
    "2aEdjofiBYUqUa18JV6ugE2SMWxi9hUQDvrozqtA2oFCxgY6LiYqVsrJvdtvgR2YrU5ozpr3CKGpdxoccMdk3WcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVwTef26HCX67aZAHLb2oWd24E6KrZhTUmJgKL7EkNJJTYCXKCEYgwBA8G4XR7HowiB6HxX9BNEFaWdhQDQ6PPx",
  "key1": "54GqK47iTy4dCAhfu83iWVqSRkZ63YPoNPz4DN8DLDR6hjSwY2P8sRYDgNEjqiBZTJSvwffmjXn7CoyANHhoMpRE",
  "key2": "4sHNSxpwNB37R3hRBm2zdXpEfdiwDurnum8YxNzHMiBgghZ2GzMyfaxMpTJy49tSLwq4BuHVYxreUX1PeZk3rHzR",
  "key3": "5NH87FwWQuM6TxwvmpLYYBeTE3Kw3QuSiGDBuFpT82JqdEeMDXnG7zXERQwwoXqLmdGytQ4uJdderCMHmDxSULnF",
  "key4": "4UWBm9QKQBueJENQp7GqwkDXCkHxf328oKN4VjnD6m7kqRUx16rgsrv2qg7LqsUXqgrMnYAEhPRghkt3SYTb3kN2",
  "key5": "5k1iD97mAATo8fX6omXgYKVXMfXXvXoqZU4syaLzwMvxz5wnPAZqUCTygaYn4EcA3FY92SdBnwWi213KN93Dy8zR",
  "key6": "N9KHD3bCwMXLB3oZnJF4juVr5W2d2LjwZirVdfc8unst7Urf2qjMjLhpo9abnUu8Cfgp4uCZsk6HnmdXUsSjGx8",
  "key7": "3QJA95XPJbEAFr3Zjxt4wAesFW4cbAfLyD6Tbo41xw3h9JWuNT6cD7k5asa4SCtDvWYdZBN2dMfzmy9wTGcRT3xu",
  "key8": "5u8QE1zjTB5DTCjcTJRr63WvcQUoFtbAa4AiqrNtNLePDJnuXWWpiyFL8YKiLsLLwvaZMbQrHgVZ6ec9rDPBQmZq",
  "key9": "4pKUZQKCstGm9UdLqgANrgafyXXMn73UdECZkZ3qUdQZ8gkCVRV5eUfpL6fv199d3JRvWdKDNY7jtt8HcaarcoJg",
  "key10": "4Y3TnGLoG74WvjSGiwpBh6yJi682SLUct1vF2qmqXPbAEvqxg8s3q5Wv2QDfLFgeEnxMS4WN7jPoaraaLKM8boyF",
  "key11": "ufK2vhk8PR8Qeg4TGdWWq59XHaxRKK6RcyfAXZ8V7cmtoQmvrsmxigrp8rgRGmS6nQgoRKxWUvMqgs3STWNcbRx",
  "key12": "4e2sh6JaFbfxdmWgqy2oWywrqWW6ikc9UGEYcSJrD1KvzBW6LcJWWhFhW5m1SgJJPKtrHBsdYVMkrmKXJ6sksysj",
  "key13": "3zLcCTDmuY6puisaGoySWkjEY24UEEXzuN8nmmRuF1BtggDbD7eyXskpFDYJbMvPeGFKt3a8SpFzso2d4kHsUVWR",
  "key14": "65CsvrThNbrfEVRgiLeUqTusjXxcj2v2VkSQ4gjy8bsMRZeFy6q1g2KSmh9CRV1onSTHfV7a5V7m552kenpFf4WK",
  "key15": "4A5TVDgyVrfgiZd8dhYLp2qLeCWZjb7ZDA7frn6CUVJL3eXQQR7TAGLpQ88NqUnsMppv42e16BFn9MebNc94R3fy",
  "key16": "xDWQ5bXAnPFp6G3o5M3XjHeuuVyhf8qJQByYYaUQTegMGDiKXKtTRvNhL9mVHq3WyPgEoAwfbgrJWZq1wVskH9i",
  "key17": "Dgzi1LmxLx1RF3jNrW7MrdYBaq5qBYYnYbaJ8PfK8yTbKHB6UQAMv1WSHz3AJmS8TJcWGADf5E9RehwqZZLvifb",
  "key18": "XNB74ymXPDYy7ZqFinKwb7LRAeqheTCz1SGUj7b8PMdfP6ZuwNrALtgM1efwKWhVjKHm8wUcXbWPcMXfXsKB7ET",
  "key19": "4MyfBAAGEEiQkpJ5ouvPMBMZav3bq23AAFEPD4aCQDbC3fwZkezrss6FGpvngUZUUryC7czeoPjE8pEVBoJGok8C",
  "key20": "4ieG8HZx8qekcjZKczRTEduZzmYaBJHXiaqQFSyGD8NUBxHy9yUDTyc4tkz4eJoJTHE7917vyef1H5GK17iorkWN",
  "key21": "2RT5ARfSR7xgG9VuhQ3sKBUj98VuUt2z6TmhaN9a6Do2tQPqF1NyHamQ5c9iMtQXbf8vTShTLDyHLnedpqNbdSxx",
  "key22": "3tZWcvfF97ok4qBhuKSjtr9iVxLtrC8caJ5FkGaPC1afiEssBZ9ZuH4g8kp1AacpEu6V7wAPTBYXrFRnyYwk3nnB",
  "key23": "2uiM2nmLY45AzdhwyGDGsK8TXqJAeAi8vQwi4sUN784exfPXi8QqvBKaep8kVLUB5voEhoecGFSk9HMAFxJkRXi6",
  "key24": "3Ae3WWLgCRKLaDA6Pf9VizEaaaTUaig1emQsuDgYpviP3nVeFowDCRTCvcL3WDGXU4NiVrsQiT86LbucXYL8VaCg",
  "key25": "62gpHB95BRUZtm3MsYtwPvj2FmSjQmripqFwJ3rPuDsEJ1hdRh4DejHQCQaBbYGaVwN27dHjiPEhAZSGWi5SvYYv",
  "key26": "rED7n7Ydp57c9ZLDUGntbvCk4Si3eyPM5mb2PG2P63yUktRgF4peuLmfT1Dy5hb1quvMsN13gT9DCLchzJVpJ5q",
  "key27": "62k5Zvhp5fNpZv1i8hp7BA36ZLSewDchT31aosZ8cGd8PtpMnTDSxGxNfJ3LNt3L36xmzYsQmvvJrvaUT6nC25TX",
  "key28": "3oPSosPwC5HVscgUbWNDF6qvBw41PUfgp8GyFTH7U3Z13UygCXXexwuL1H9K4RhEtofK6LNG1LZQo6uTNDbrZeYy",
  "key29": "5UmzGPqSWfpEnK41HSBX29X1EeeGWj9BNxxnzeXp2kwXT4qEj9R1BxmNc55jiKL5HwJynALaALMRvdV9UtpoCvmY",
  "key30": "2GCg2uYa5YpXEDwjb8RDKs3LQy6eWGCHHwa2NLiLNPNHCf4maBSK5e7ZThY1aSurHMt1neqcBTbzp2ytSbP2JAhu",
  "key31": "5jYSeAD41TdJX5gMBaunpyVsv1EAyhhKdwUEoJBHDcFoyUdXr7FHsZLAqYNHrTEsbkFfPtCDDFQBk85Uibx2S5Q6",
  "key32": "5MU4zNQBKGwcojy43sNMGAKRXMq6zmeMdgGx51pdBognBcAVroqTuwxzDuGPMhHNTKE4HDCJJejG1RmpQSC9RFic",
  "key33": "iYDm4jM23Xkf6pfyS2icmSR7H1wNuUpzSrLFvXw8hYLX7YZwRQ4qKorHttymNDeLMEpC8F5SKPW2EMiLzXGMYp5",
  "key34": "2x2ZyuXsqQJdrEftr3HCW4Q8HeUaqC7SVYnbxL49rQVv1GWmX2v7KQJdY1WLX2H9Zomnoc89rb47cPydkqVCWfSy",
  "key35": "5bKmk7Hj4iHKu1AW5TnVSCNbu3pF4btkhF91JXvGgaag5PSCz2s1tcp1hMnZSbQqPs2NHBWE9Vpmmkcs7jLbkVjR"
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
