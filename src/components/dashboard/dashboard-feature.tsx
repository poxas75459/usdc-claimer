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
    "2dWsGkLPvBDXz9cYqWA82n2Tq4gbz96Sky3sm4bKKmogiwijNwU9EVvaChFcmeBC5zvro6yxB7NH1PdARZZNAgc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcKZp8mBoXLZoHxbR5dDfxvK4rpw3SdL8GDtVw7nFWtkpyJA84yJ5YEuddZwwQyFPTPU7rmfn9wK8oBUMjN7Tgc",
  "key1": "3G1m4LwbA9YordrNPvcvgpxkqWxDt24zkhy2bgBkqnHzsM3X7UV3dfcmUBnEt1dsddWEoQjMFJUZ2NhAFeYnG1ou",
  "key2": "2LzQ5QynD2N2ebFr3we1L4xvbRbTApeprWhkdyWVTYXardS7gBybTvdEwbyAhaNGpaNt7nhKwxLoqhuFxHNixezY",
  "key3": "3wjfVCvapaXBNAqgbJi8LpzSFP8VE2YYkYQGpZyZEDD7B13FWMGyGaEMXDBrzygvom4nqyhNCv9XPHLa9yjvSszR",
  "key4": "4XnjpnAXYM6ZW1ffezabgVWMK5LBEUKmMizBKbyjotBVLKnQRT6TbGiuvqz1q2jTr5dmP9AY1uiM62LCdHZYbuBF",
  "key5": "2vK1sRpXFoP5Aovg4ALL2ckLrz6dB1zhNyVSqAQtaPWuh2ysXxmy8P6yXfnQWHtoUPbfGmYFkRuYRfKLWVG4D9T7",
  "key6": "3HeDheME4Asu94oak5gMf3HoNfuQZyb4ocYrJiY7HmnSLvwLb56uFimpuZp33Mdn5kg28Aqf3eYwJvRVuXjoF6g8",
  "key7": "35S5WoV8ChCJWgev9oiP2AttpTsokr1HiAhjFwrxTiZNyiHRvaMsewLCkbvHb7BKPBUqD8AmnRrgJJMepz9kiYK8",
  "key8": "24omA4z9kHiY22utZfHtaNJowcK4UgVX5fBSmKW9cvmFC2dU9KY19mqALDUda3xGWkqADMhCmXxKnC9atvSBPXYm",
  "key9": "NH2dUQdZU9apSLiahrbiv6Fce698J971TAQBruvu6i43qkUMgGqscRPZfx3ypuh7cR9CMh4DSyuj8CM3pzEMQ2y",
  "key10": "2S2XSdyHgqENPwiLhuwR8KhX1EVCZ68v5fCSUwQVvigZYLvJwuWoeAGXzMVUvnvuPaDtbubhqkDH2o4P4z1nmEBq",
  "key11": "9BbnTHp41BMRLQUdVN2CBbEdn6P67r8ymAZUAWJMDckNfZg4yBdQJM7vef82bcQRVnXFuxUVfFkA6TmqoZnimwb",
  "key12": "5kmfVWwEW2z1dTCzBJ3wRqh5Atx9Q77wKwxdeskTMZdmkjJmeDjCHtfkGPzprEpjPfyTHngzjprABoV3WirbogF4",
  "key13": "hHjGcfVqXkoiasrea8q5GEkvBpd2hzAypYbRrKVnf71U3ru3LViMjZUM6J1jfAJyDKHDQ1NAAgAqxvqtZtJPpc8",
  "key14": "4R343NBquE5a2cNak2qRFMjPKvR1ps4KnLR7NTcNvaWQ9c41ZERYn7fG6ifE8rPpXCcSzrmCiUQvA7RnDbPgdV2u",
  "key15": "ZLPUptd4xBRoamqkGDvvKomQcqxPPkCAJSNbAHgUG9y8C2uLsPGGfnYmUXtMdYCmcvWc8MB6cEchDa9EnqaWU6m",
  "key16": "5J3v1Y7GUHymVpMwGcwDoG85F2NtFrakGLyojk6ukWvmZ7uGmAQc4uiXnTNNZeR1RnQN4r1TRpxcm77p8Puy36vo",
  "key17": "2ZujWk7WSdnS4uhuYUyUqknhSMdeWx23Ccja4kGyZ9TZ4B37zhUFrLs3tqtXVYAzk8AD3RBcBknUfbYGxUx5KCAy",
  "key18": "4oavhAFT5UhmPNBiDThjdsmg1VM2QZD5yBRiNabgNoEDoAaChQhmso8VaHfDsm4tB5D8qToQpSSjYMQr4kEENw41",
  "key19": "gzWXLdRyF1XAXJmmxVh317Leid9gpCzPD3Cd6kYtrFePAVgZy6BvyM3qgGdUFRDu3xMzwQj8BMLte81rxCivrW6",
  "key20": "2VM1BcKbod72xW3X6BPzgPVVSmfxCPFWmdrUgxdaWJ6k6wLMuGvziA5Gt5bAyJdoMxJSdLKb5z7QccXB9nvi7NKk",
  "key21": "6hgekrzmehHXUtJx3uhe6D3QAANUFHwFgvuG6qHk4tKoisMa5fhvRHHfZLqsQABFdaM4iBzLrSsZEZnP3sDpybE",
  "key22": "2N73AD6STwxsqKBeBtW3UUa19GcVA2TPb7mtVAbGu8AcxQKxGj6YThoESGvvqZqHguyaMtZmrZxSyoTwypaiE1pS",
  "key23": "j8cjBj34i6k52riFuCb4jTo3nTz1pDg5Lbs2YfiAnqkovQPCjT1Mjbnp7o9i9WBq329R4aQKs1xRrNePzvZ4S6k",
  "key24": "5JHxkzzdDjNsYfs1v1s1PjTPvtzozzDisocjbg4L47t1i6VMawm3aADyA7qr6EZbqbypBtPLffV5kNBM9RTfpk9n",
  "key25": "5TaioW9zcKy3aMQZZdCbS7VXXQU3Qg6RR1Y6g7ay1VcivuqkoyaCC1otu91CzUTQ3JMDgPaBZjzHGCBafKAS3XcT",
  "key26": "27XtRdfKooLZvXCbwN29mLWHD1P9Q8pG7CzrZaH3zCzDT3Uf2QS264arvfYmBwjEiCJZW1daxCiNGSiwvjyDUdfa",
  "key27": "2eHZWaj1U7Yi7NDzhrUCL5rK7ta8yZ7esvcnuRafvFghBEqeUuLUWNykXc7VkHChseeCjcmCT7hRpTDzadvRTNfH",
  "key28": "vbEZt3bA2kKf9g54fz9k2ozK4ukiRYYYg1trxXD1nysSNQxASJNYfFnF9FJWgd1xYbYhPvAxgQPmRbCCsEwfFiK",
  "key29": "4ZKFHfVSkbtFT39hmvY9iSfh9x3vc2mM5fhksTaDHjn7LgC1YxB6aU8iyoYkA7t5n9piWr3BwG5vYG8jHjVHfwCU",
  "key30": "4QtA7Ta5QAhNQwb2UDrfjovFFDVppcwGU8fbNyqrrGmGtmwiDkK6n8ZebqgVpCYn53DKd4Uei3NQ38piN4ZXa7AE",
  "key31": "42dAuNf9sxQD2na9oD8ANteFoN6Tww7tNCE1CPk4NMog2uawZ7CN6hF9wNm969q57oHZbPmTY7B5JfVVphY3KBbT",
  "key32": "3nQ5kPSi1t2q4qZ9QD93CTZGHME63LpCohgo3yJyLqJ8Zp4AJZxNZon7c5sC49whGfzYgxf3zTA8HEaayE8xCXTd",
  "key33": "3dh3P8zQZxBFRko1YveXEhrChREdkpyNKwwCfBA94RsSPQ1o8SozBCLoaDTGK27W7TaeqBKJ147yqcZKUPhCDapi",
  "key34": "3E5oexBnNeG1F1xX2wDr5JHNZ9eLXgWudCxqmdYcQTbPWTjcN5oNPFPSpM1ocxBrKfSegwYd8EhsoTFLMqLq1Eqa",
  "key35": "qwN1HSUXQZyMBhiNjJTeQCniLnuLQfqFCgCPYoSF1Cpxd3ALcittxtSCR7xTf5vAsgayLURfhmV2iMCFyQgNXk3",
  "key36": "qekZtsLdkEPGPkeCxY2CY1sGEPbs9sbJAJeNj74qFJvvb3f5ibmSZNwBMbm75jgC5LVfEfnYjZQXZA93ALA4p8i",
  "key37": "67ME4M4n2zZDAVnJxL9SkioaurCDANJUgA1NHs2vfPhQWFSZKqFUWyZiRcsk41V8AWNujnKZhCa8LRkBZZkRtwGP",
  "key38": "2iDwgvbT1NpmyYzF9qquofwk65xyFZnrWFU6ZD7B2jbxuXkw8q39b9uyFbSV5AMYFkFvECsJb2YYiFo2un9RC4u1"
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
