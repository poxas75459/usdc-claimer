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
    "263xXdL4Pu9mLdmMXHfAuuWUDpP3ZDCDmKh8U3PZ1gBHKybp4twcc8u6iDvatuhCdyju13bN7xGacLsPmpHz7JYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxZFSjk4WXy348vy2WKhwetQmj7W6G7d7qgttMRNJJVVsgGu8djqQfERY1whGYMnCoyhGQuQc7ACg2TYbzP5nFv",
  "key1": "qokcDMAnNWezvC6N7XXGDd5N6Ys43NxfC97i1hByFhh3UQrMu5voA3drB3R4MxGgSCGngyVvh6e9DH9Mo9L4jjx",
  "key2": "3HDxQ72SEPxzM3AySwEBUzDk5EqUvjk7eZucwaDJfRzHgz1Nkm5Dx1hPVyBysQwcdUzez5tx6QFZmVTKhPcrShJB",
  "key3": "2E2YsUTz6gF2BZVnn4QygtUWoxWvTUqDQo7Mqjb8u1xVdarUuSZfg4Z8UtxUmPdVc8ocQGpGU5QB4tBztjt66xKz",
  "key4": "4jw6PKpbCfpaUFmb1nQB6pWYeYohSaJ54BhwZ18XqnjxZ8j1kb7JGwHCRrSjZmSC7AFzgQV19fZXczuEQJJxS1ip",
  "key5": "1jYXRGYiUqBEo6ApNEK65FHQxmwHWvZrJtRWoPEh5n9YUvws6XxfSfnndaTeZNxdNogKd4RwjPjTa983VGqR72U",
  "key6": "PeeFrhJyP3h19Wm7idXGwUCFopYwpfLJdKzithPU3xZF8RzM3ny1KRwXNWreMhVtv8SX2GK6bWLfsLifTbHWqnj",
  "key7": "4rZKguULBkdPSKcUFhQ6VwPT9ZHJkiHudcUJysqAVTyaeXY2ZjcUx5c4v2PsUYbi3WTqV2ksYwACBT1s5tws9boz",
  "key8": "5BsqLTktELp26u13WNkQ8c34kXWTiufu1AgSJa7Kj8ZAojVFUYRx1dHJENdeyN1Xq79bhZETqvzQ8NXrD7QWHNm2",
  "key9": "FghUz1iazwwAHaurHwuyVnZzp9PfAz1PacFhHBLq7TiVucR2aUQWDjYQ3GKSWSViJh6REEP7kszgfLZy8Lj6Mmu",
  "key10": "3F93cpxaj95EKBFrQDCcptnEZbDuomSYEmQHofwpNLagZjVHqvN71xJs6CjQ9sPxrm5nvXievGTjd9Mvz67SFvEP",
  "key11": "3T8fnLudLVbZQwsXsVFQm8U4xgToZjqSYkzqoaA8emXn8VC1HvFKqvAi8RZttPKpYcQqJk8cYvCBToALoVJGHqj6",
  "key12": "5sZr6Lu6659Cm8WcppKbMPv5BYJCNRyPZYWHUhc4QA4Q58MZoGH2cwthFuLiQdjXgTv4s56CeJDLWcDQ52gzkXFf",
  "key13": "DkknbSi45AmtHXH7duhM7saicAV4PWEeC1doFtvfHvQ2yzA7NyQtPJDMxbHERmxZJqgkEGYs2kx8U6kGLxPDUa8",
  "key14": "2oMvk5pvj3G43ugkhWbzJoeQmNWfS9eqkUi54ChWqHiqHVVCgJ2cdnU6cJUTypfVCYh9s42DMEWNScL5Hf5bTuLV",
  "key15": "Dp64xaCs46HpwpVBuXN5wjB7DRfPcigM957asTGzXretTcR8QgFewFVh8w3TfCQBYtbkZeMjiPXDp3B8FfJvbWw",
  "key16": "5WScp2mf9hmXSw8QpeHLSkJbS3uDJ7e8tcnQjipCfce9RVrRgGqxrUGZcX26MzQyrr4LJCU4qUYmdSWbriyt9npk",
  "key17": "cihzRYFTrnXDgcDKMKQvuajCGCWyKibK9wZxnhqrz2v2EuEAS37C7bfAcHhDZFyTWKt1h4APFT9CbXD6JPxHwap",
  "key18": "5FzBGYEiH4Ane23T3F6e9y2cfwQbV7DNch57L5MHLaHoEULhDnApM6tdkMHnVRPbK32JSkTFTUtQSvGZvXTXE2J4",
  "key19": "5dGyH6xEmAb5nnnuZcdaNCdBVeXs69o1cPqQiLDT5yrmX3wU5wy9RctNzPQceRk7nyqHc4UeCiVcMBLk73FyGpC6",
  "key20": "3o2U9GbT4cShxq6H1dr7v6XBmxJXDpcuDKF8Yc3H72mRc76X7My53WE1NAbti2bHToh1A4LMYEuL759LMqMaVkHt",
  "key21": "3yWPuL8Ldgof33nG1rZDXxZjWqwbg2cKMSgfe8Y9aA31kBHwoH23x6Po9wQzqAHmGQhyFikajiayuounhP6fogNW",
  "key22": "5qcyEFkai9jaUZfEH7M2Y4DfcCHefnVGDGXdKK4riLRhkHqBVZphqP8Go4qdJviEd6xKRSBpsNkRPSeUptRpp4xA",
  "key23": "4pHa18SShJgBe82LdvvUqycaqzxA7UrNYn4RXLYhnmkauuoxYggjoC8AM1hNnmotES2G96bx3NwA3kZfB98pLbyQ",
  "key24": "3Zapvf7xfXzC4nzNfi9dewqvLGiSS3JCAZXmWGK9SkCnX1rxAK43E859stQd2PCaVEFXHnWHUhnELxr6dTCx6BrX",
  "key25": "2FJ3fmh4HaZgWozxhV2h7cLmvt4EYRH3vjRtqSri16Yj8k8G8VuRD61xyp6KMicfqhrvPoeo1kFMoAVRTzcjyMKJ",
  "key26": "4AHrD4qgG9i1Dt8TZdM6Ube3MSiyfJtSZ5xncHsc2xDa2qcGz458sC7xQ3kdvwSULfcH6BsXcBAkg6gok7bRKjba",
  "key27": "2DHh2k7ZGEU1X3pU2vfYgAB8jpNf3GGcS5ZS4avt9uLCDLWFvJeYUtB2pSmPMcrFRJyeG9XnHV1USM46r2n3ppi1",
  "key28": "SanLW1fQioUk8UcD25y1fQZpymSpWLZ4Vtsqxex7752hZkJQHV3nQcBJaXywAPdLh8NugQDZV93fHFXJUcJpBrK",
  "key29": "4mCXTV6jsDmN1bPJxSPSa87jA3YX9UsoV5BiJjYPPFLx1RgX9e77sSgz3U5fCXtWZwTW42uRm3SfieWbqc6WWx9C",
  "key30": "4F5YRhKH5SwZd4gsNWLC4Q99hx6uQTLt6JsY5oNkBRuxDXUL1tFPSdurDvXZQFdGAsrGQJt1Rjg3P6Bb3CBc26US",
  "key31": "5UdBsy1ma9NdTnXAzuxugtZLnBuYLQrZzHcHW2HCb3boHnTGjx6inEcjUfLpjS7Qd7xRmCpnURh9yXiQH2Pzju1W",
  "key32": "52XDUhMAeEDjaGDNT73b6qYbEN5wjHSo4hAVpZDHzgFTdED8wJTpsV1iYfq5qoBtKPBSWyzF8oJwbw4xVx1TSZDy",
  "key33": "5A7fjZTYbFFuCHfWtDQTEPzy9nuJaRBjGtSB7E1fGYiJL7iTZ5rssD8EuXpHiHyETrfjoPAmTmmgJvYmj2x9hr83",
  "key34": "3Mz9Jq96fcJ5i7jBF9riURGFschRcLR2ioKgiLTdsGoWBeNgfZM7x7EcviFnVXHrCZ1dWTzv1gE3eye7VsV1WXvT",
  "key35": "4A8BvtPSupDeUtDbwrsnbevmNS23jDoBEjfZ67MiU9hbn92PHRW2MEiz93Zv7pFu5rynrwm9dcUEn8b5ZLNgayBt",
  "key36": "3PKvr9RxcMDVqwScQwgHu95qfr2BXwPRv55T1RNs9tPWpzfpBX5qC5V95Na7GRUi15gfkapF6r4NzHCQNYuWHjNq",
  "key37": "2mtnE19maCettNnTmuxkshUzX5jC1AFx1utcdCSM8SrWh8xb1JnVAVm6K2gVA6wwgUypCVA35YrmLK5ztwjzUYur",
  "key38": "43b8V9sCRmirNoCCELTSeEufKVCnpr3Net7SiN6ZJfciJEfv2rWtb9Ad4fFDvTpeqSGfQ4Ay4BmPsJawXk3wGFxP",
  "key39": "3pQzex9MPaxQ8Hv9SHgh1CLuMrS9XFDXfegq8qKDzjFvXbvAq8yBQkNz96SQSbZi51vemZDk2YkPYPagwUzK78og",
  "key40": "tSqHFMcwdc3qH3PSUE5ZQqiYtdTiVLnhaqrBst3uj1AjDabb6szHXzU1rD7VDvroPkdtBWs6ozupbdDpTtmpG2b",
  "key41": "31EZBc4tampDTAHxBKuDMwYgoMdNiJrrxvYZwo5QzfXjJzGSR2jvPwQZntFM4bshE5gFh5GYzmUts8zLRdsTb5bd",
  "key42": "5AAfuhpF5bsbNssHinwC7jbzeDckC9d3cBjjZBfUojGHFxhoMHou6dnhV6Tcc6nhvp1vqasSkU6hiTcooWxcjg63"
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
