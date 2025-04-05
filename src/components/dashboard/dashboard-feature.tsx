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
    "3nT3emT8VMZS8DqpY38fR15rYR9stjNhGoJNuLQvBqhrqn5SYgHaKor8r9Gqs7SvTDVMdSioarGAvuomyg3rVrDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxdTYhE6r4cpj4RcZgEniiKRHCei3jfv8jyZG4gPHpNndUFTs1Lh7P9FJxjiNUbmfupJ1VTW8Zan95dCoY4v6Cm",
  "key1": "2nKNEKtGb5jhH6UE8cS3AuNWTXUEzY8Z2tVbPKZtfqS7jTidLsfRfLe3XN1jYBaZBfwvyzWJZpDZUUawAdq2bwp3",
  "key2": "391p6pGupqfwARChJKPY4FyZGLTekNLJoeWSeccvZ12yC5sauYnfTWymw2aNiB9wjXcvmdVNETM8ixu2Q23hpcA7",
  "key3": "2ExdCrHs6zj6Nq9rk5bTni1BVG4xk2iuMRhynD2mQNGHdJkEgf4KQ7LJESRfyHUbQfDziYctaYgV76v3E27A4UAU",
  "key4": "5fRFkLq247CWCVabGncsSJpZ7xKkgLVtwWvUsreZ6Tprj6DWs8ubs8fGJaN1bZrrbVHQsTT8mr1HQMdPzaec11P9",
  "key5": "4g9BDL3ZaMWyFgk4T4pZnvT1LSRhkHCmRXm3a1UZyfYx9Vu12Q4yFxv7pqSvj7gWwyoWKginPky19Sf5NAvEfZCG",
  "key6": "21aPyhjgd2ALMUnto2JRgUwXNCAZTZ47SouNwqaqjyQrZ6BasvmzwMgYt8AEGEj6pVcCJMbYMewR8GMLcLT9PisR",
  "key7": "4LFGYn9dB1B34szksFZH4hGFvsYHZDPihqTFgJWA1n1c5sYht8iydKmHPoo8PJxd5HBRfgLcv11cenNVUsaeT5DH",
  "key8": "3T3jiV8i7MQgiyy9SoS78fQp14c3FqyMBTRrFouTRpuYinoYtaGpLsyC9UajG9b8Yu3Lkdf6LamGKZMTU1KGVEXK",
  "key9": "4tMpPb7gooCHeCg6EpGWGiiphvV45PfaA8qqS7seGFkdQ6H6GpR7a1RURYiopQp7jkyCfVHLe6dwwzVQKp6Njj2H",
  "key10": "2ZP8hX6MftJ3xEbjydY6V9cfV7Km2djLr6sEde5h5vwiJPdhWMGTYS6v73JEhjcYsP7M166Av9msX5v1ozqQWbZ1",
  "key11": "iFg4h4YXGig5oG7xgJoJZNQnSfEPSfh5vVXG9z3GcPJXhjCKGZF3tZwJZqRjjGsvJ8Q5ujPWj79wjsFLKBYrqTk",
  "key12": "DsjzUp2NnFmti4QHX2fyA2vXjBTs7xtdhbze3SZkfZ8w3RPgYi3eg4i77A6WTDYxXRboT39grxzy1s53GRANUrk",
  "key13": "4XFH8isoa9bzuZanXp5wzeKpUfEg7wqSap3js8y9SmbypRx95NPA9sQRSpg8YKjQEE64aZizsdY3TAHWV4GkVft8",
  "key14": "3h5N6tx9d4Mg8E1sLLwouW14yzwEHKcY6GMusNvBKTsqZibFhTsSm5nfkmyLUNWDCRVg4RUBtSmPAhLWjFpJWHA5",
  "key15": "3d9uWY5NdN8Ho83ahC8nMF77SyoUsudWBktmw36pJiENtAFPxpjMkqoZi8GYCT6tubZ89QnUxXyZS7K4dJRiyYE2",
  "key16": "NoQ5MgbjNnbgc5xfTBwBBL8ms3XRqByFtY1VCU76DsoVGHMzz1Z1xV7mEFRMUYavqdtSvt4fKZi42BmTLvLNKnS",
  "key17": "5MAyhG829Aebo2GVveCEGoUS4Nukf1pr2euTvYBjzaXingmvrf3gudhxhXxczPmj9CEnGShnbnrPM9oTXR9UDn4p",
  "key18": "563BqN1wG6uXCTa7tswJMuhWbVUDtJtAfGeK2dTbk17nSMXa74eZZUkB2tDwktH8wp3VQCb6VDfZKCzUwij99nAT",
  "key19": "LNtimSkVXbPFrm53ubSFzCsLn6QpKRSBsNdhQWTQYABSv9khPUCZjTU49SfbGTCTdazWgCEAfApw9WjFTMH8TXw",
  "key20": "WgDUstT3rnUNGkmxWMRzjbtuShkBiQEgPXVZi6PbibzTguGNkHuNN3h3wFddmXzsKWJvQjm1snwh3SeV8pChDoV",
  "key21": "5LNDsEC7feUtdyf5GVUvxJyj3MU5aEqA5Jje9P7VCX6mrxuiKtNDUYgwmxqf88fqPzEJsA3u3cwQyuFNUQs4jwAB",
  "key22": "57fDUDq8jPGTPhbGCsCzCiQC1wjmJLCyck4M3hwwwMTBvca1Y5jUJDGJ2HwFeES5gMYUXaz66aGBNfCkxnNy399v",
  "key23": "3E8vih1tBzanp3oScE8BkmkWPTCtF6j6bB8mLAW6ecy9sNAnZ5ps2qNi1FotcoFXfhncT7eetshRp6iBe16d3ArA",
  "key24": "21w2aBSDxZG5vJEz9qgugcsoCJvCJEC1VFSPvdaQ1irtitqMfxGTqKWUwGqeiRpV2jFscyZYxhFZ5m8Zam1fE9hF",
  "key25": "5Cn5bGWHBcxEbvatjBg6CZr1yMZGXxAY6XyqohXY8dg3czGFWUrjABrqDPe6cgP6k2v7W5w8BZ3p2QSMS8E3taK3",
  "key26": "2jZee8EuZXpWwVCLwnGY98xAgAG62ANwugGcba889Ed2u4wS8f7huCvLZyhz8qDgKZU7mZfhZZHAPAiwnHEApUZU",
  "key27": "5C3zanvh1bAdYDxvNctAJgA1hxC47AA8w4msRHhBVMkgVgKYgdisYVVoZmwXUoPsroQDHWWzorKpuPG1i7efo7hy",
  "key28": "3uVNDEW1JNBHgoqb37RxJcqoUtncxyiUQdvVHJHvrYmAr2qv1w4fcu1TzSjcJn8z9EVLxbBoVxW8qZR6VrZPbST3"
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
