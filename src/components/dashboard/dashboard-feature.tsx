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
    "rUYA2sGCLiwZSXjFtfbj9s9RcSnocATJf3nM8SgTpa7sgQDuQzuvdGE3vtRCzRf21dEbPxijEkwgGem7sMG6C9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxKUj6TZzKmHbTfykXWnhrcnePuv5Hecv7eLcLiC4JAhp3ZC8c9LTcArPNqqYUJ2pnkStjmV3H1GnsCAKaX4R6P",
  "key1": "8jK7WJ6cmi6D6Fo81uWTnNkBuUhi3BZafQuFnAV5hXWWdYJDtgtQ5AkQkpzcaMTXSixYkW9x1F1MwHvzbSGSXPX",
  "key2": "4TJwCHH27swKgBK736kcpnVDmRyR1TTuZR9KnME187twLkwrs3SzyVrCAGzutUHAGwKq7UDsLgNJ6zU47xDQNKs7",
  "key3": "4L3hhM6Ck7hcPhJzrZ32JGoMYKYr6QPS51kdFpt4YbqhtcLrLxk25nEcBjGKiRTpyjegrjRX7ZAKRCTE36wbFArW",
  "key4": "4sE2UZWhizUKWKPCkAYNrMtg1H9M8LoEemXoXuRimqbnZRp12PtjjJPk4kKTi8DkDJTHqYAuachc2ShuLig1GGES",
  "key5": "3WcibBvxJK5TzFfUWBXgnqedQerH7NcUtXoTfhtLAePcGfCuuVnFRJAJ8hwf7A9ucXV6ouaw4Fjoko7U2TiCZA2j",
  "key6": "5pZv9sVbtvwY4yKPdiD3steLkLMyAeAeVfDxqYt3c3Dw9DN2pTeb2RjoHc5ep71d7kes8Cmw1gCsjgEJyVEziE7w",
  "key7": "5wwifsgwKovhMLEXLXyuPg6gvUT93fouDpc8WCaeZBbTRqJ5gTDTWUG9KgHCDtJVVdyynJTG9uKAWEYbQWfxRKuM",
  "key8": "2Jfbt6C9kwTiY31uhg2Vni7R334v9JLv47KYsepoFhFYwVRenkrKLunpSNzesSirdZDvXiTJcrnCmWs9DVrGMRLQ",
  "key9": "2KxqVLNLh4c2ow7aVjzRJmumBjpTp2y1NV8UDWn596eipUbmr23bkJfBNatudNExC4y3XoT7FbHiK7cCV1DFuBAC",
  "key10": "YdvkaYqHt9ffsn1WSBNRYXKxAbMieGfZRVhKhSGgY479H85bHc7ARfKksWjJaU7ddvBySppZh4yPBAc8bTbpRBK",
  "key11": "njMu7aENNqm6tb5dZb9xngnS2Bouuv67iHUpN33eiKWkjP68M1HSAb5sRgDR5eV1xBnQBfPCpRkXL4uiWBAjKtt",
  "key12": "3fhkv7jGBZQSjC8vzLihVK3sVSKJnVW3aUqM8C2iMZjPxS8Kx1c5djHDonYiuKBJfDM9xUkWCKA5jMkHdWErmsab",
  "key13": "45iFDf3dABWy8P81t6NxEtwvoatYHtSobwGKfMYiW9jSxo7PnJKus5QGx1trazitQsZtQ5ExSChvj7mpuFWQSQUD",
  "key14": "5DQPprGvyeNQXg4Dkt3ZPh2XDdCSCrt9n2gtUYHPTyCCFLxVo32LktxiSmpjirkyNiCzsY5MuHSF13dWZi5UFsnF",
  "key15": "ZeZZsGMfJPgpJ9zd3VYPEja8e6AMZYKEdF1NQaoEj9heYAP5Cz9CaTnDJhcPFAa2qDnhfJX1if4bM5QqX3H4aUh",
  "key16": "2SuWFM9KkFqR4jcwQHyDbiqufsGYKDjDwddhqTbcde7vBXR2bLAMKx1EMmgyNYUCtHPtYV9F1u2hbjGV7H4oMeC1",
  "key17": "3Q1nxtqsJ46ZK71QYL42n7oUBEUqgVwcygzwTW5A4a1usU5vpiEMofYojetRYftvxFa6HCHqwnmDmRF2rXzoWjoP",
  "key18": "cMhbg5QZW2P9VQ2ghFRzXHoJDosiwkjEQ6uLV1GbmwJ8V9pBJHHUrqWAdfMbMKknGw3LvYcC67XvvLo24SYtSA5",
  "key19": "31T4C4LChuYnL1arB8vhbiWV7a2GbqXSNXszZpK8yTTKCKUpYMPSRAsTXcyiQuZgDpKgvNkkqdm5xjzaKFUDBVB2",
  "key20": "5yj1zsj5816cKANLbKoCR4v4cvNLTmcgYz98LdWgicYPd1FPkX6n5rTLjpAw6QvY48HDgMHGzD9gU3rM67vXNQZ1",
  "key21": "49qWc5PE41pt12KMQi9hykVXh6Rvk74oRTyJUBaETgm6nJ2tErr1brDJVfVyk43SSPEr5jQqQvkrip4TTcZ9NRXb",
  "key22": "27X557f4cjBNujU3Gg4XvbDB9YJysTDwRXZ9ibMKrsm1dGPhancpQyGtm9MKpLYBjRM6PUaG1F4QpjypRNx7vv81",
  "key23": "59sNdQiQ6C795xA1ykjwVZJnBJJyQJ7v5WHk59BKkjUdRDz4uqLbwKuS3RAVHsiLsRfgQzShVuUSnVJpS6SarnZb",
  "key24": "5WvSBBDUFqZK4bQkH1oyK5BTDBSgwLZiBhpfcWLWMG7tToHaVYC4qmNc2Lm46K75zkaTBLwH7oHD6qepRmwMfysE",
  "key25": "3WtczdofUSXHDvGYP3VYLCSfVPxjMJXDH2bEoF44jXP61r8SgW6pKS6tSohyxK3Yb2AJXQgVMdhXz3B3krHYdqjS",
  "key26": "5wAFSU6W5Z3BKoBAUm4SnwWwLWHeB5VZX4zU3bk9wbNNKhbEkzw1V8Azp95QFekN1FUnoqaWsdYrWWR46xVhWBBe",
  "key27": "34jtahDHkrn1wT4AhVDdbnQrmXLrRpXAVvyRjca3wgZXA29QZvHNiKt9nnJEiLNJ4QifrfxqLHhHuEnUz1CRqcJ5",
  "key28": "2ets8yaZs6PuWWMiFLinaPBiea1ySoYNgLwSoePiDzPDvEDg3RQaMqoDtKQhmjJeZyRMkHWQ1nPb3aHUvqxpknpL",
  "key29": "65CJLexjWieoBDfbdhgYE3x2VzTWoKgcfEV69fvz7AAc4N3JtNhjaje8zCdQ9qXw3wiPYhcvCJWBPXJJLMxWcPx9",
  "key30": "2tsMJMdn5wzXgdhabtUv5qRzDtgBSQoyJmLJJTHyFsdmegEybdWZ33UGs5n7mVL8V8GEjDJY63Btvkr8B174WcPS",
  "key31": "Z3GsNhRHH3SxkqW7TvZ1frYgMYbcM8ZG7V8pUyUuiUHZXt7L1EftWmDpsmsPBkPk96ssxPwK4opJqfASE7C2oDH",
  "key32": "5tfcjqXwuU8uwYRSLafS2M9cM1juoLoGFfbMiSCnRStHk6uBw8VFkiHNUuF7ZL2adCAMpEbhAHGEjoPsup1uW6oP",
  "key33": "3thFX5hyCQwHuYF8jGL71DDYq7fHSfMb21YeJUAvaMvdjuz8hEBKMHGxR3qnGGGMYhatKpXc9d8Nk6RR2tppaMxi",
  "key34": "uXN6xPNYkkHXCC9ppNpjjnx5syPdkNeXdCAhembGVNmjgtWE149SsZdXdWURaHXjz7xAQu447QrURKfvvTnkQiG",
  "key35": "ZNura4xxeVwNg25r2TmZy9yQV5sxMrN1TdDXMBqLzsSjeSYimAy86diPa7fGcvCTYRMREvDNTme6xMBcjcukPXd"
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
