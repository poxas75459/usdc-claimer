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
    "2nhbhgZBLh66uCH4bnPPueVpbqj8aaGPv7cdZ9WRjrjN6PQGjLp2q1voyg9p25tqvUP84cZvUX3x46vWPh8dmL8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjYCAk3W4Pjhv8VDfywhJcHoy8xZoEzz2KcR3fP8UZ24ody2qMhmTB6CpRNsvcJZyukAR6BSE7GRzBHk8VZXHEb",
  "key1": "2hYmf5Y4XfkZRHyk7LZkaezGX3LMT3YB7kyLqTe8sJ8VBcBks1gNqqtnMsozdzvKcv9ZrssQnf7f4Ybgo9xSpY8i",
  "key2": "2vTTutNwYuWxQp3eZDq8PT84xpYgibTTWchi8rayKzm5DU5WuFvLCP9wyqxWfL5sa1m3NeJPd5Fh5ZkkAukAk1ov",
  "key3": "3XsogqmKf4p697SW3F7Qm3Ur3kXVmrwwS8RHBygZRNQ1pAp6N94YdqMkiRprxw4SF1QgQMYrnyKMwZHMeWy2zrCQ",
  "key4": "b1n8X7WrtSmEQ3HvigEMMyjZBMGSztEXXjajwqdVKttjghzhwjHa8DCwDAEvvhuy5FwgoR9jxwaRzp6GiHtL7rM",
  "key5": "2DxtdjzuWqeGMLLUkySPeodHeMmASkF5RNiuixmr1n7x5L3Z7VFXfPReWg5PiucQ4t7KkZZqZtwxAsEq8WaNAwmd",
  "key6": "9GcM8YYMJszDbX4u3ynkuNnQ2K5pLTNQy9av6aTPADECHtEMVBaTEKuX4AHhSZqYAmhd7T6ywCMCUDK8VyEbAc2",
  "key7": "4E1yoLrvNcZmbCp9zVMKUaZyaemcARVmwAyFDkT9MX8KkiyV6hLAMmMHKtQxg81423jbANwM9p376HdqVwaWUgCg",
  "key8": "5rv6KNNMWUSvyh2n4naB3pSaB2ka9pFAWviosYVRGT9pirj8ns2VFsJ1kzXQPyG9C5cTZJ436xTaJG6Bv3C7be5B",
  "key9": "5Xw7Tum2z6hURfz7Ut7Wv3dn5AjAA1Msdswqvjqny4NhvuoymmUjndr8AAjvjfrNjKqwPMSbp6fdvjfMk1u1Mn9r",
  "key10": "2Dg7ToVWQpQVp4hAGfdEmiyyxCq1uqfgQf2SkeHusfAHsj3RnnD6Eecicu1N9cktj2d5LPTQuGZKNbTwoFiBt1fF",
  "key11": "ScEpzEi5rdXRQkjhC7ApEFGDtVtzrVWMY6xnYAoingTP2cQnpY4exFv56quT1rHLZK7CdiLCDKev4PPp4S2kxvj",
  "key12": "3YbTiLNNY4q4fQNbbtzrRR2sSmbEM7yC2sMZ8dHj5vf9fvwFcBaUTgA56HcnbNP6bnkB9ExGnqjd2xU9p5sgEoCo",
  "key13": "5AXZ45RCR3dM4ZaDWo5gLnJMwC5n2Y25GWV8WMvQVDj6YRGM7nuSyLhqcPLbY1Jd8NVF8dAXZZ6EJdkUdwGNBYo7",
  "key14": "wQrN5RNSE175ASmpgpSFkEjqGYou2TP2NjTwQ8BtzeGrfskhmGiP7XgVnfVJkbMN2WabeUiBHDkq9cqmb4RojER",
  "key15": "yrJSVRF3LYAaVbwhcAV43p4oFv6cdmdsp93xPSk5hWr1CupnAbJ3u8HSbhKyjmY8PDWBn47FwVfDvQcuqKy2wy5",
  "key16": "2ugtn3Mg6N8nzwH4HPhue986aTXL7fh1kYSQumbF6cT8SG6Bw8Mx49kKE8HwZ8Xg5CefPx4H3G1yqvSxoBfYkbF1",
  "key17": "3dMfb8jVkgXH1Lbw5wxo5eq4NRZq2dGuPBgoiGVbCvwgxnZhD1ZuPm9iFgoDwikVW7s6UE1TjKfPK9ReSqEoRAAS",
  "key18": "3bBYreTfCpSUET36NWGrqj2PpN1xNJqtrKtikWkNUzFC9fbK8nCgrW9DMbLNE9Psu2kxPMbpzkWEnAfyPQZtXKqn",
  "key19": "6jGTPo2PRgRNyjSdmp2a8kqcYpaKsVntG4BUCxBBKG9TGEeYNSwFUdGhi4ef75xynutCdHwc931vUu9Ucn6Wnc9",
  "key20": "2RhLy4C9ukBL6gKN1Vr1C88xJpgHLEUhgpK4NVgkDnUsX8DcCKLAcsNqq3b9qRZ9aRczMqmM3VNuRfw5sAUpYMfk",
  "key21": "58QjxFCWeUoV7wFtJQ5RcA2oB5dcbG15ZD8vvHFoZ7gdeyvRhpKAS6wGLehFAzrA4xbgZkbWfMxHCxJ8pkvCAaeC",
  "key22": "5bXjsfGrkQ9Z4RhnTJa39brdEgdX7LNghYSjGNJkJeGmHT3Wav1nY5bQBbrxKy1ZZd7zfCPuNqWCGAoFffbDJLZW",
  "key23": "5h1dDSQSf2dzJutyhbFcS4n6Cn9AW1uYKK2vBBvd3SFwuu745yuMK8zs9hoxPUDKH4es2VR2NJ5ueNwVHEaJBid5",
  "key24": "5dYCsbLTGBVs95mbMRmbJETa1aoVAX53NtjgZoB8mgDfSAkL2H3xgNc5zP84E7UsL8sbkFwz7ndgBXPDkjQG1QPQ",
  "key25": "5AfMYJJCYSfi8EauNtV6zgRvS7zCw1Fd2pphKpy6TEr6CNU8TiF13sdwoQLaoc7rRNQZoBKrNcA41JPTuw59jHzZ",
  "key26": "3cJ5mEX2ADZGNRuqBntuDrNAbfc2NNrizasrZeiakDaK1i7J3Pq9nkmPHRRhnTNAYV7ShhMkcVw9f61ELxzdhBqt",
  "key27": "2w2nyEVsi4AaLac78uB48oJzmTCdwfMsk63cbzTke22EBsokLHwD2SYBCsn3rKaL4PZPUaQdRhSVKfb2nFPKXgqT",
  "key28": "2D3N3bSv14Ep6So3Vf3iiGHtmJAhyTXm8YzEYaZfZyAzmHtYZg17qyxxEXka8DDvUEmacjifSZP9Ka6vqRW9woFg",
  "key29": "4BfEb7feuMGke1MNtXrxJtzKNRjJ5Hbsk1bYEkVadApZgXeV1Zz7UCQY3WyWf86dFzZMcjboLAEMGTG8XbSAVGF9",
  "key30": "4honeFxcoJGqmauu6sVBvW9kztxnPpRXDdEWsiL3KH9LJug2P48ppbdEsynBZH62WRXpaKwNh1cM7LCFaBxWiAvY",
  "key31": "5TyzRVQ9L541r9z2ECyT62udZudWQn7DYSArH43GWCvdcTpY6nFL83SQcMyejsfnXWjBjtxjTfuKuaA6643VB2Kp",
  "key32": "2y3gnJAd7b1wjYMFUE1JSVsApLt3cNv3c8NoY28fvdPb9vyod2EXMadqd9b5rbLVM8m3nKXV4MNgQ2BkAy8PuQQ3",
  "key33": "28aygK5KFEipdk77tUw8sWTQM1BJ4i4ho6qjUsW9gQGEtNgXUjr4yUfcfX3noER9S9KqGQyqsYmeCz7oTgcxBYJY",
  "key34": "3NLQBwQ9M2KhrFnDCh45U9hjgrZTdv3WmDdYQqKV65Bt1k7LCKLeyAxW3AGxU21tDD6M5ojME21MvaSKxTwLpKQp",
  "key35": "5PG1VZuiWqe157TKNRSJATyESQBcRXneA5zKNke5qzSvRj8adLohDtnA4uZE9Y6AR7wRCVb7u8xzR73uG1hANJx",
  "key36": "3qHvXHXnTwyn16UfwPS7MMgFfvPTCeYL8Xbp8GQpGFpZbp1kW96JNyQENfdNhmS8Tu8WjJBc2B6iY34FEK9XsNzR",
  "key37": "5ax13GdLQUgs9MdQNAtz4qiQMEg5jEuaxW3fcHWZvywV8R6inqb2ejvZzDJUhcF5yW1iud8YHrsByxa2eVcagaLk",
  "key38": "895HxKULf88tPT9rY8DJee191f1Bjayt9RUY3i8MDSF9nF8gNWaVW24HQMAW9gYwc2hXH3NHwMREPs4v5V9M2PZ",
  "key39": "5rKKZ7z5fJaRKrHLHRsBxXv6M7hdJKueQye9HHJqnjsfm16jGzjG4sB73XgK244Xu8LsS95QEj3NB8EmsGfnBvFM",
  "key40": "5Xcwrb5sVpspWjSKpz5EMwwBZ9EbGQocGxVXXHMD3MUGCih7VWU8e16s7wLxvWt7ZTLc5YdVxegMzMg19gYbSnK4",
  "key41": "uAqXbyg1aR9Sm2Twubz878oYgm9kSemE4VkzdhdShDCSBrfvd8JFZGPvjPARFKFDBxicq9evfX424G8Sicu8Sk9",
  "key42": "335X3PLWMEZUDpaiBXNtFAXF9CJVMgjEtSC3YpHAyuThqJF6AadYK9WarU52RqDdS3c9yG8jVHfKhTZoYA6UKGQt",
  "key43": "pG3e8MvK4vxeq6gJTnTBedk4cXRrRVLdkNH1B2siqJdRuUozAcm7Hq6tAScMyuFvvbbFN6fzfinoK9eYckYt2Mz",
  "key44": "4LvJCiicna7xbRtZ7AWqMWsYky5c6kkxBfUEpy1VxzJEp6bXQTnX4Zc6KeGVWggLyy77qFX4VotGRnEtZkS87PFq",
  "key45": "9Sv7W9Tn6GwzCxtZagS9WCZL8VVycWyuTAvFZiMYffzesc76JNcHAF1fRXWBfyUbtsYLmSVJrFMexox57s8CDFj",
  "key46": "27HjsMXszKdAgPMe9X457Jrq41vpruLQzWVZixqLbaya42pU4zwv1fPtNBacXwNDs9oVSL34cfiqmkhknGti5mZN"
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
