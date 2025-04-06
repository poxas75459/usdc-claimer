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
    "5h4QnwtP5yZnt5MpAtXuVDYnEFxo74o9kvvzVpHzZiY6n6ex14CtXrgvXEaUJyY8BXtL79AmRJRYB4aHChwwpM3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zN3jjrsbPqDzmcYCHHYK7zMYFsJcqBDMsUJ5UoVCPjiMPidRckZiJLt3AVAvUZyGz3kymBHZ2nJcZDNu1FvoWf6",
  "key1": "v5bTsaJ4T8kXUm9pncJgmz2WF5o9dGLKzLbVoypbjUeM2tX7dz3B2QMdPbj2raf6C6xfaPGTQEKV2P5y83oJWeG",
  "key2": "65fgt4Ve6esaxiUdQn7pQi5cKaU4k8XvxM9zbZEmv6EjcVvafq2L1cpSCmvxiJc5jy1j9AAh4suGSmv89nzRLeu8",
  "key3": "458zk1SNP67Ws5kHvEc19vjWdtpwZPPrrSseQbfhec3MXDbsMjxdSwzTor6EEWEynpCFQswxDsCNJQtfZLT3Ain6",
  "key4": "3c6bHX2gsYa4VwhruAbVqKApqBaa2ryWnhTTUa5WALQxhgnabntrGQ4VL7RPssCR3gy9EveiZUkCLmBkkAm241B7",
  "key5": "3gNBpSC7JB5VuwqmDVDH2yrWAkNyLkpYNV2NfgkPN6PiQZgiRBgYqy5MRVnBfbgeDzFit2SLWpLNvMLeWCJxASNp",
  "key6": "5qGvUoVsTrFjf6zwofJ7ATUuniJSFaQudJbc8WDGgLkDeUATqd5PqvjgbLVCUNc1aqkrwMRSronK2G74iKLAu1hn",
  "key7": "4yGURAUdvzU8KQoREWPdPBzz4e2vNFETZL5HpCuYKgj3WHmducUnZoiGgzXAr2NwozyasSMSZNWvsyffsVTUeKjF",
  "key8": "mT8ZuRcJgtM7CiyxEVzoD7hhe8MpiKPjmGAgRXwnChde4zjAs7icLHXXgCwmF7Hc59XH4qjCxwQvyonmwsRsYk9",
  "key9": "2yLWibx3zsR2Rd6xocVsDAFYBqGYHUt88xPkh7rixvy2pbHZFCLE2Yo2DmuPDD4VLtqkWGbmsR5Sn7bnQwoZPqQU",
  "key10": "3JYoDWKiAVX8bcKp2XGKTrnZcKnRkB4sMvFYTxuqqM4H4gVEQuf8NTmz21oiY2JwdQbQQYfwRJtjxoMnhsxhpdZE",
  "key11": "5amb8RjW6NSQddKD6UomyzYEW7CqaBeQnhnya3DhEotAaoRq7VvduooYni1KDhiN67223nvWjAjPrV6n14qrX7Lj",
  "key12": "4H3CXtQbxhxgtW2EvqntCUXerWpBUNvGt7qcuN66dS5uk8AGsckW6mY31fejCqBHneQfW9UMEnX2n3KGm3yenadA",
  "key13": "58oTKEoCtQsfSwikaJQnxYUbpEnNaPJS8KzkLsvss1kA3SS9BvUMw9is9xzGtE14bQHs1QTFCFB3nAko2qWmi9Dk",
  "key14": "4SEAwZy9kpDdQ6ubceXowuopZ7ZkBd1Z4tyieGY6Noyb1gy44n8fihJdfrkqga5ifhwTxBtBLgY2DP9PunFSFNL6",
  "key15": "VcYufMVWYgMKACHEusaZFKMwFnuA8rDA7cEDDGchr4uLu4jTsNG5YVWRQkox3aT4dhARaBiz5W918UyHDVjVxJo",
  "key16": "Dq67zbhpzpfP8KcXs6AN5Yf5axK3F6hP4bxr3HQGvLGcPyZesMufa8jM6pDQcL8PSM6TVjKEMv2iBH7eBeAWJNt",
  "key17": "64ptracyiSQykZ2ezB6v7ihuTA53HEQxFZduGDmAYyQWNB4NGiSVnj4g55t7Ya9rNiTrokMt7jHVa9r8222Mudsm",
  "key18": "4aR9sxeBVSj3F5z69HrtiHCjGjiDgJhNfah9dbjN1SyXWStVKYKHZtEBiSuRzDZQNVgfp4m5UeWkrmGaGXGiuTdt",
  "key19": "2gpSVmjLsuEtVZbWmtQxd9BqBSLrLWiHtHQq99QhfyPFL2h1bnhNvNJJG6PcMUrDCitvpkMYoA2yVcwkyAHDaBhE",
  "key20": "3N6CqQ3KyxXZp3DhycE9W9SgYxn9e19PxQ66gHiXvdKf5n3oi18TYvwrjmndnMgNe6Q7F9wGFSXssoW1zgAen46g",
  "key21": "ZGzRmYiwYoJz89s8UWNxPQSBZzLucw64u5mrWCRUumpE3SxVPbT74mmarCuGAAfkKCK6JrYQK8xGeYR6UQ3wFGS",
  "key22": "5WoLR3J5bp9AtF988Bva3cDfub2zgFuJyqw7v527aFcKDZu5jif77aLM7tTSErnWdwi8yLNU61Tpx2xfdcRkbxkD",
  "key23": "3jxVXoeCGBUHJ3LbEfp6Mz3WNvP4m36zHScJJJhahEgxwwgX1UbADa2mZddBEXPT7Lo8PxHLZV3hn9HPQ1Ywxup",
  "key24": "5LzVAzzZmtvzrV6KJNjLWYtCV3aBYK8TKJaPSW55ibL4dbuF9mJas2JWoPVR9QAqfpXAUxLfeBJDa7UaJV6Uv15R",
  "key25": "46n3VfdfHCJtq1DZptXHwa5x91Y1xz7yxwQcbrb4LU4xz4gDjEaWPikdpHCBcbwFzU4B2q39df11p1FGuXfrtZKb",
  "key26": "5cpzikoUh7zf5a7kVx2WuVrTNte6e9SnXxRoDnQ66z514bzC4bT2oAPwGjJdGHfcH3Xo7T7M1KYagk8A63WFnN2S",
  "key27": "6411KNpfwfB2C35ZGYEmnoeWPajkCSAZsYaaNUsfvVVrAw8f3xzeLXuU3guGGLH4StDXyDHH9yFCbj46K2jLbag5",
  "key28": "3NZC3pNSo64DTZqyjzFhJp29LnwwW9DaKTPu5DW9Hu647NzjRrHQupL6gV7ypLtwkxFK6PWAvY3sLRHzYBfVCR9d",
  "key29": "57TmQJSra4xYAXmfWemefJjFUnYdZaVDhMHHTSVXhXeRA48msZaUG7KZUwRnBGtbjmULR36GTH5aHct3YgHNnjws",
  "key30": "5rspRFVukgDg6c4AnTNUAappuwLqUemDNabFeUZS2jUmwbG5VFp1XTXooFW1AzQapeysF925P2Dwscq2TceP2ifJ",
  "key31": "2ieUJ1CKzNS3n3VWWQmoRjBx8Y9PtKQRY6UWYAs7Vi7vRuM6WGo8ySWut5M8hsf7CWCaWMn7d1xAJp4rbEoyYKt2"
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
