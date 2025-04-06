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
    "4q5hxgNxw2vD3LnAKgu2T568V9rXg6gKyLrJQEgqG6KVrEFwChVeLKvSoFAScFaqtAEEUsFKNwVmpXGhzddG2o56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fye2RbvJXuVgz8GTZ3zmTQD2KT8RLoCHvfs28CvodHLfa1LxwvVwiZsCXVrhUmKXUjEAZpVh5cpySMNMuf489HF",
  "key1": "6412aJpmJuzzThxTTvQCbZcN6cUPdLTFfftCdBBTG3vU1k7nFn6a5ojAH9CMkbmvoorwj6JHLYaL158j7Q4d9bav",
  "key2": "2xddqsRbNucTTsxZXMpjf8oYk44sQe9nhKNvEuVVigmMnQULGy3wVedYXDZhvLVfBJcmogXrybjgxU9uaZvdNom7",
  "key3": "s1yyraM1MGCPymYm3ms9p464QSATJWe94hAaqQi9bf731bJfNgmVyMhHaDLAxyJfncauaRwTcUWy6UskYB8HyKP",
  "key4": "2yiaYxiy7aGbciMfetUg2D6WsoYaM2wfvxj3R7hzwETfGKUVR7rd21iLzX5dfj4fLsxjrnVU7JHSq5LZBghAC5x4",
  "key5": "5KbnRa9Tm3CDb5D2TfZkqvEPTPBiom6Q35Xjodv4XEpAeQcDmNruHGjMDgTp3EenJfnEAPEp1FpVeaiYAJDKmUy5",
  "key6": "3i77W5ReNXuWVDmxwFwCK24rsffe2JtFoZxWVZT9ztsgpA1MnUv2CyfXSyYot17pdMgCsEX4S5CNVqkzKAST7D5E",
  "key7": "3wJggjXGcXeHUsXVPkPi2HyLwur58L8GCKcxkHmqvh9p6CJhNEMYBodyPReYoxLSD84CBiPEsAYc5gRzZsqQXbKd",
  "key8": "5RwHXSmJn9SPVFaCvGV4VuV1nUn6wz3nduCv91Z8eooLLwfpK5DfGRvqFNXdVLy1AhVdtL7shebHRQLCbPiCUnyy",
  "key9": "3ML9kKTy4QsBSbPpvaQuLJyfLKJThuBTp43J6ogSwYZhxAaDzAY1nuWJdBAhjjwBVjfgvJJpxjqGVH59R7Mi2NcK",
  "key10": "ajosEz716wYWCKnrGuPztvUmD6EMweDVtFydgkouVEChs8Aa7BoM9EaA5S41YKfiPZm61KiKbHvQBiULtTuWzko",
  "key11": "568iq3zSsY1RTdKywgdfbqWeMkafQbAZjM3MvFXD7Beq9pKCJMEahis2DSsCbNyQkmdELxZmJJ5LRFFS6tYXeYJf",
  "key12": "3iybcz5oZyU2Q95fk3gBSJ9L6ZKTdPtrf6LtyMTHxNYwX3twCWrzpgx2QfhqYbutBDJwzqQxMuqoyA5hGob4ReKR",
  "key13": "2opBuY8X5UN5ttgA82BXbZWPFTyfsGuwTNAL4HcWAhv4RJF18aMCpE4zGMBJW7j1LGeLxaZ9kdELXGmbi6FtsBnE",
  "key14": "Pbd2Dfrju9DdZHmLhgpQLPfMASfBcxf45WDwJ6Z3Mot7Nx9Jd65nBbk6XXPqPn8nRfBa4GBJQ1xnKYJiF9wgyPm",
  "key15": "5RTZa6SZ7qeoJrubndhFJCXC7LeqBNvCJVbuzx7aqFLjY1UyMB7yGfDvLA3TvjvmHonDVJ1vTJzu4XP9vXbcJGhi",
  "key16": "3qfAWeex1aECvKhYBpoCJmKHYdR1UEugiMUM43WSSzo4YngqqQ9x6uKYesB9grBEuHpB3TLqJnw9k7jWUf8h3Tz1",
  "key17": "2t52iB3G5W62fKS1Kh4p5Jykus5fYyUyMMmqLxzn8LUW2Pit2MUqBES8jsLMEzKzYHDFC7VvkATzCFhxf27iJQjM",
  "key18": "5XXq6NnWeGuWD311QTV91PseqjHnJcYqrXxcWe9R9rRcMKHEddrTYwLSPbrjMPYAPUyAkxQ2TUAGo9RHzcA4MVJF",
  "key19": "2sSrz58kkPzwPYc2wmfg7JaGYkZMw2iWik56jmtzvDcvjG2KinqufifFQPnpUBVqiLpc9v7XHFuWUKiEx6kP9cqT",
  "key20": "2jvru8jZNQZyrWE7FfHoc8JnHZbu1KUjQ7iUvUWZhF4spVc6NCZ5evmFsrUNFSXWXogs5hriY1yTVZh9Znp8YKxM",
  "key21": "5KTSgyKmQD7e4cJYqHPJSTxW7SVp7xReV2v7xwZ7y8CDD3HPB41a3NC9bLfZQbHJftxbPMbZXVdG2QaCjrnygmdF",
  "key22": "42ixkDiS7o8yKvGz2RoMj8iu85CMnFdqyD9x51xbhtdVkH18z3tPrgTPufQjneMy13AtaAcizUFmuvBgF37roEL7",
  "key23": "M6Tahgm1GTiUh1yTaEuYhUruDzpLSZ4Ev3y616odUvV9Kq51fRtpvWLNYcjcrY7YAiq2XgoRsvTbHwpujFh4Mt7",
  "key24": "2sS6tHtYxwFZxHAhfNnc9XyEftWJ2WV56AXS1K4dF2HasoFhhDNLnZ4ZVjJKGhkUfcJFwsGr1nUv8CjVBmcVUujL",
  "key25": "2h2zthC24p2NU81LbzW2oQd318WKu6bAYJPf4DNwRUZ6WmsPUaBME7V8rk9e5ZCuXfZcPZPAv57y3LmnRRiCvtCN",
  "key26": "gn7bhnKL9KG6oaaDR1ThYYkJKTmTv4vPKXmb1rdAhWgnFLPUQSeqMYPWPqiLwtufNSDNh2jPnADfqzecuJUwNiL",
  "key27": "2jjNQPZA4kyL5WCA621T6CdyFAWrSuDYPmh1HEPZHYcywJUrhBvkw8ZfE6umFJGDe3c2AexdUbAgevdABntzQN6k",
  "key28": "2ZAHypRyb8hBLgRa5Gv2KV2xgqeuqJsCbMh1KN6Supins9P9rfQhtHB2bJtMMDngy9s9HC6WdC6CeXhLj8qpjV4u",
  "key29": "kDhV4h3R2zvWRB8JmkykK49tHeMcWmv6CLEttEe23AAbT9c8sP7seRm42PNKjkMuRNsrVfUQFRW6LgASUAHu8c7",
  "key30": "MRygG3p6edeGrDULwLaakD2zhskpUvs4YFJpdyjeTRtfA7pd5RzUnRmRwdfMkAw2ChyUppPCmwybwEXz5FjKMFd",
  "key31": "4N1bAVaP5uPDoxhRuCXBgWjPCN4BeGCL2dcefS6d5jwfQC4hMFdz4ZhdfRyEzaWDVyHzVbkrvJ1JJcQ99sB2wE1m",
  "key32": "EBfTAE8LzdJDemeC18i4SMi5MhGPmJhdzQzWztqkPpUn7tR8BwVQQTxd5nd2Hz6bBfVZYQV71UvqVNHwMw5ivJP",
  "key33": "4LpXKzq3EtA4dFVU1NN4WBktsohsrEbc6hWx3dtPuYBrukiHCK6d7HVNnzA1NRg2udxQffEk5miHTn8ZYKp53Pnm",
  "key34": "2s5fDQjYy73usmTdTKAFeZbZLsGXbp5wrPt4uwkR6ttAoQKzB9J5rKfvFhCpXPLMQVk2yTXnJz3RXzjaVnvzBZT7",
  "key35": "RYXcEXF3DUKyzst7K7dY71sF1nbaM7YCZZhopBuRUppf3HFVQkx9XFKdjUfBdJDzHMfuuT51njVBL5HEMP5Yh2H",
  "key36": "5DpwED53hw3Ba14PQMHyLZqN28nWTDArwJy19zMeWMesjsHYNytw6nX7e7Ra7g54RfGy3rE3pPT3NG4SwyJHiH49",
  "key37": "2DNnW3Hrw37S4TgBfLz5EYcna3B3RjTXjkzrtwUc6SN1K8soA4paSAzUugg8KJijarbsm65RkE9dfXwAfLBgxP1Z",
  "key38": "5RWmBEve6wU1iad5ui5f7y2iBEgDzsp7kn533ArGjLmmUV12RdMKwUnc1Cy9cbcmAVFAFuDHejDXEmpMbaP6wLKA",
  "key39": "4uT1nRCCpcZXw8nqzoLpEXne2sZSArMQHtZrt6Wv1SYDzQjQCjk2QL63UyFtaz37quhnXvPSuMKuxtY6jN4dJtN5",
  "key40": "4FzdZkDw8UdNsTjhkdfAjMD5FCtQFS5Wht1UCvQ5q7yBVqWse6Xp4RhocJXavJpLtec12B8bN74kY6XRtVyne3qi",
  "key41": "627vPR3QXnUQFrNn8x7jUBe9ZjgszjATZDXhLsBjFVxfLLQp6TqZ1qyu5Hm616GNUnVZB1DxUbxJiH2zs6kv8Wdx",
  "key42": "3snn4v2kMm38jEuYU7WfGQRHUGDN2n6442w6L56WkfAbP1Ze1SBNkwWNCxmToXFrxrbySTfCtgL3BZwMpgYouEUM",
  "key43": "5kcHFkYAczWJFZXHhamHvY6ymfweAvwocbCkNPoyTwC8vTNwauZZm9FWauVkrbrZ4JUndMyF7DMdLC1fGZGVGoSS",
  "key44": "NVfwykkPEtDW959j7ZT3KSJHo8FyQHjX6s8SX5zrovGizHegdcYC8XktXvjHn3Re3vjjLYPnuVwG4pPkEnjGD5P",
  "key45": "3YwspRKLZW7U8EJxmFMnU55KF6bgDJuFQ1atjjqE56wpJZJpdug98oZiqd9PQoDrtMqJgG2LfYsWC24inUb8ZLzZ",
  "key46": "2QVXa7VPiG6FNgZUqkPvSNxphxdU7soRcpzZVRwY1zW1Ke8wg1SPDL4jWhUjAedYt77MKAifCGhDynjkEVcGzNaa"
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
