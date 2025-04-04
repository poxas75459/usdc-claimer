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
    "Z3Vt3uq8L8KSDWJG2JHU1cNKEqbMuxZ98h4RfAjbUdhW6bB6bpujAACcL56RdfkWXYo44tfUsBtUpr1hTYgR3pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AM5aW9nkMPuKW75sq5CyidBgHAv9MdycvU6U1Qqcmk4b1Xj5FLsqJEG3yy8U1ioLYZx3XVjkfdoQqh4HKbNR7wg",
  "key1": "49P2vNzoVwMDeJQeaYrvLoi4uP8HBxgmz8PHDCxFncM1KNrvP8fnxRCLvmA4Hyv387m7wFh94p3QcqKQFwPvUaWv",
  "key2": "53mf3Z4FBsoXne7T3kF2VcfqYLe6nzbx435Uzoi6gxmxA94sc1R9DjRxWsAkyv5myBu6DiyBGKSiKbz64LYX2wwv",
  "key3": "PkSwopMjkiN1i6kLHCHjF5gpLkpeim8LYL1gGmn2XYofEEJuqDFfCTqcjgG4ymwQgNhKmLxjxLUabaR9YCwTmMJ",
  "key4": "4EB1vny3K1dg91c3FKfeAjvi4YyHdZYPDqYooYw9L8ZvRK8v6UJz9yYYAhRQE27gj6SeWhxiNRERNSCY8N3Ha6HH",
  "key5": "4hsyQvy4Cxss4oio6v4yoCxZi9CkTsrprjbVVsVLXUxa3qp7yrCcz7zukAVbJLwMsmZhNV9gEG2Za1FpFdcnJSjp",
  "key6": "5Kfx5yzSXwzSsKpDMmjcM9FQgSysFrWsy1njtXm5uzJxH86eYRHCptiJNPAuwcGLLX7cUR73BEECv7maen9VbZfj",
  "key7": "5euEJSKrAibFmz4yMc5htPw9pVT7q9kcZmAYhVKpgTj3ivw2ExFVHHWt21RaqChnkNvq4J73jco2vvF5HJjBNUp5",
  "key8": "SguzHNPiWpi8ZPHKxKbjLMocw8y1EpA4g4vA4qXKBpqdt6ZYFaVvy43d8wnfka4ybSfjopt8GqQpc6xPq4nmhPP",
  "key9": "33vUE895cD7yMBNofnWqNGKGsSD4498k6fTdMM7xwGkfBVwMDceDFbkJonmaxBKRMycUhXYZyBjBmmDmR7QNQWH9",
  "key10": "38SCWiQsbZ78JUm1KiAufEarqtHTk8oWsx9j5YzF3ErwXJE4ZejVHzAGoRxzgfB6Pdz9MfhmXRQ2KFYPH6oy5jMy",
  "key11": "5uHGWATmcnhaTGwfuGHqgLU4jsHS73ZEczRui8cV6t34wxquEgqyYDvZie9BCa1NGZHTMwd7EaV8CNiHGRhJcuh3",
  "key12": "vZQAYpy95WCN7uYAEmxw98nsipisJk4WYWAd6pnu4whswj9SuxoLY2k2374k8QzXmo5bAWFvGuqBNG4UEumzDMw",
  "key13": "3gaZ7Q8ct1RGfTCnPHmnWUYCdkjASW5GyQBG6aV12Xm4ufh2mWha5XF2ypKPMRDXwLdTdqRebDNtLvRuQiRZwjG1",
  "key14": "46C85ynaqBUuJr69zjqVqRYTG3UCAVwbFqpGvbg8wHes95MYfvxKTwtes2mWpooEsQ46jXnj5R2zcB7TFtMTruPV",
  "key15": "KajfJ2jabZd3YFjJMUiH9XfvhgycVNTzbfJHYfqbGxHX4gmEQu376kqMRM9HU5SSJTLrZNkW76XK2nAiiaWCciA",
  "key16": "3bcoyfgETfcV6a1A4Eyn5PQtCn7JJgWXhtSEXA8AL8w4tw2gBehJBLrFKeQBg6Pnw5Zuu2ePeCrxF1m2WGioEvLN",
  "key17": "aGufGJ31tJ2x3bQkRzd7aeWLsJtnErmYRyUAXZKaYnBwMromnC8bfrCmuBC4aYNTTdEHiTzJUPiYmXpK6VLoSdU",
  "key18": "2EbDgopkmMrHQvnHSS4gM9FAT4YWeYrdwSh1QrHR4QwbxC83MBGs11tzhXRpePbj4cLp3X7Nux7sr4zn1nFcSZEv",
  "key19": "S2mSXWUmXXJE5bDoUaQ1c9werasR25G9qakvqpHDQMLWsW6WrX8847QMdeRVhine6MnNd1KxvkULR4DiiqQBZHb",
  "key20": "2NywRHyvWtxikuUwVr2yK8QWZ5Nrp6kzLUGtASQceHDsoLNdhPNRGm1Eu2r5MJ8QpoW3hG5dLTPG6qbG9k8oyqgS",
  "key21": "WGhSS8bKh9cwtixrkcTkKae71DdSUZF35RbLBpJa3UsGzQDAQ1rjMEbjdP7SyujCqYaWV2mubBwqXnswmFaZ7Np",
  "key22": "zseMHkWj3mP8aJTCf3sFj2v3bct5xTM8qK2KFGQeKKFkd8HsnmU4Kt6Z4w21RZd8ZNzpEUvvDS1oUZJvgqQrvWt",
  "key23": "UNmYnv2DCsRjoU1iMPkyHTncCrd7newrgkkqxspfoCcFjzTRD1m5eN5C2cakGUMHvi1XMa7UZqn5yVmumrL9CQ8",
  "key24": "mP19MmedY4WSyKkhRc5ai7BmotRMw6DieMHHADWS5oKxvnPp1exAc5q2avCtQcRosZxEzCnfdYKfALjjgjRfFfB",
  "key25": "2fCVjgirxdH6G8bQrCkutW8uNEvgvQY9nhx5QjGnpgfKkNQk6YZHeovQ3QVvzTsuRtmAe6qP3DvmqUX1nqBaTSDU",
  "key26": "2TKRjezWSaoMzzjHWMTeAvSpkFfhG6hfR7TY8Vgh9U8jTNyCV5abs16YecK6J11JT48abu7UWK6Jfedt4Y1oZpEd",
  "key27": "4SVF8yB7GpjiNXiet9dQnEHnR5WtAdBHcZWvDNf2twx6MzFqzUdrz8chiNZSehsNhbvc69W6N2jfiudAKFVkbWmX",
  "key28": "2xBSnHsWgcvgqe3WuMeRVJdpG4VsaoTajdk1hk4unDHmtF9SEM7wLnRxUcBeMBgA3LHu73G89eN31kwBp6WbN76y",
  "key29": "3yAuK1R6AK1BG2JxH34rAUccjSss7orHRryRUd1kd1D9cKQ14qijfXoeu8qQjzC23nZpiDvnesbGU6UVbjDm3BH6",
  "key30": "3xNMkMz82o332UGxAXGCJSjwzfK4tKhVcXdZhc8ZxdG2qCbMkrqhiZu8UvBuQrKgVGUVoMF3SDujqfwpZnuvDkCE",
  "key31": "25Uttezhn5L3dYbdYSpCKFnJm2SerZWj1CTZZ6awBkUVrA66yFB124TwYmaWXTtHLK7kSYNYVebuMsWbe74ZVapF",
  "key32": "5881EH73Mb7u2M6KJe5dBcCFkT9XTnarJ4QBvN96xukp62xSgDXeHNvWswVueMpgpXgwBhBMjDXZezbuYJo373qQ",
  "key33": "4oYZxeyPfswtmJzApqTtQYkxREGWsWcSrY8yaKMYTCTRtUAMyWvJsHDKCxinW3VAtcMiX8RYiFFEcdwbinPVCJsW",
  "key34": "49vUJzQXFPgaYeRZqDFyNNX7tZ4rahSNtHLRUdMYGapvFaXQzadTjTdc91F6WdEPvKGYuTF1ZJC2toPwnYcrrsAx",
  "key35": "5iB3PAbkpfpahViLji6wwZdAp3QxT8cjMnjXYgxQTj6x67aVwi2pUqpzYtEJVKwjhSw9wVGBywiXB3bFfSpFfHvb",
  "key36": "39anLqfT6J94XxiBcEh4SJgaTem5wk7srPXpzpcPy8Z6zKgz2ZLZHjoTTSnRrURuapizN7vQzRnfgewb9K1hWzN2",
  "key37": "58fN4Sz38NuTpCQfC8fv9WJ4JGo9Apftizv9T5t641NRVturVXq1fra379uC7u19UGaBzaYrGPaC3fv3CasRLEo9",
  "key38": "2t6YNt79rh5shfQoTeqg5w5Werm5C3W3GPu8UivGKGzAQdMPFDC1Ht5t9ThvqL3PJewRy5BJR3P6WMtyXC2uvMqy",
  "key39": "3Wsh9wokbxiQup9ysTFCRvHr8jcJmSvyd7uGArGCi1w8pxKeEf1EH3ZEoMrJc9EUQq7Zg1NVR48LziTaFmqzNUDD",
  "key40": "4cXQZbFJWik3ayWvzt81MguhXFC9AmEsvyxanKgmyXZfvKUftysApRLSscsZuuYET3kmdacxZwdLUEUxt4MvacfZ",
  "key41": "57eTa8NuiCuzAKzaaJR624ZBzNj3cajnerax1dyHgzDYaryEwxMTC9Dm6cRsveZHg4ihKqNZJFKVoE8BW3SR5kdP",
  "key42": "4WeXLHbtrRP9GyerTdRx3B932EmyRSrnpfYHTLkjavkzyWn3AG7e55WjxYrFykYWBxrwxGbfocGSsQ2Ug7swuER9",
  "key43": "wTtV2D2vDyxvzdtwGxVxNJjhY2S1Qf5tnihvprhnw9hjZnvXgEdoSaMCMJ2jUfLtGGpGGSanYL9P1sBmGMFMHvT",
  "key44": "4jojMziL3ajLczxUsMe6HN4UCxcbo2ezP6XeivVapGhKz4KCW4s41kHsLFF3SB8gnrDLGJYGwN4SDJN77XQcgBtw"
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
