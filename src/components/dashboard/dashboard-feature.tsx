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
    "4DQrFnrFqcD6V6J9yd18YDJcMDbqJBKooYkYkarHLTDu8JqKgNrMbt4qRqzFVe8Vk5qvgpTbaRYwgdtTCFm2qSEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBYJSNagWEWRyS5ZnS4NuQG4MM1h5CeUBuZMEdVJcQhsYLKBaprfAq2aqMcH3GbSDAMxiESoSqyXMW3vc2QS3au",
  "key1": "ozesEw72cVfJ7NBRcNUAW35aKyWf68CwJuL1KKrgsWAuweXdsDcD1NUHdSCvUNiHJ8xKCfghBRSS1LkcgD5FoMe",
  "key2": "3PNJXwvCmNi4cXF6EMeYR3jrG3hREBxWeDAGvF6rNpGG2j5A4giw3Ds7X1dUC3NtXFjocaCT8KDSeKHsKwbc5Wss",
  "key3": "3YXUEae5yLpcEYaz8woP2RvN2huvqGrTsFXTNSVJLpc4oCxHtLcJ1nayHjw7KisHzbFiEBTb4XLzfxkg1UKhVPk5",
  "key4": "VyWPCRVmdvFtbdzacu3qX3ogdTrvEKa4MND5RcnhUxfqqMGN2mKjg1ZRJV1JFWX75tsUAp2XQzooD2oSJBjC826",
  "key5": "26778kcs2SwCUmiujTKAgiHBPY2PMiKyqiLT87C71RZ7uyhSugmJxoGLyVicx4r2ozp8txH9hP8Ma1fpqN7dawyv",
  "key6": "5Vw1cwzmL1JzN3GECWZYb4mcTcLLKtef13YV51rVqmhmZmmQphnUcigisxuHq4BgyCgoNfEypjXS8ABmvYyainjD",
  "key7": "3t1geGgcG5HP75UFC3Rp4FnTQfVbJ7oKfsQmCajr4hrwBEgdLpCFYQv6GNpVsGve3xB2NCpjaRVESUNTSJL2vDD2",
  "key8": "5ZRVMVViZ9EC1CceJZ4F6gJCnNLav3o2hvy1PZ5LXWvMGPksmkvA5vFC1aaXhq4FH8E9H3rhiBkUP8YwQdLtJbsK",
  "key9": "4oCRC4s1NVLdjtZ3p8DCJuszGcc1gZSZGFUbvTcNQaK3XF8o2tkwZEvpSWg5KhLgC1Lh4LhPEUXYR7LvZn6nByC9",
  "key10": "3NQ6sXFmHkDWSbWBChWYp6Z1PMV1ehCLnmt7Rzr5xpvrARUXNFdT5o6xwSPmt7wxwH362WJ7LowUvhiSaLJtgQDp",
  "key11": "35Qze6JmC1WjWTtEMYq5z41kMw1nR5cXPfMoynM2VBAiZzTVqypxaa9dhn4MVendtfm4VCn9LCHjy3ujhrqHFTu3",
  "key12": "5nTvM7m2LzQyt6eAiRuzyt8f3uEPnUmLijhdnPG9LujAGybRzvmF6Pjcjf5fgNRNje1YvbV3M7jASaWr8hMLcMoa",
  "key13": "2rPQhdQvadLBPae79RS5peu9cnwudtu3jhDxKCixcGtnuf9yAqoAWcmEhBcZ6qCiusNQNAUfsLHaRd5BcGo4pymB",
  "key14": "5DM59aHgc5VacdnWNPuMWaw4jmcJ5D2ZryM5jevzWhPLRESD4GZB9PTU6MBDEjwrUpDTpq4PznhFi2NDBVDjdihV",
  "key15": "44zt8gbRB4AbbEfX6SX8EPAtuxwSNmT5P4S7UubNhViNN4v7fioQyGHjRnsXAmBXmrgo5T3kcyrq2ynm7pAitBVv",
  "key16": "5WKaa9fo1WPxgpd6mYjQJDnh7osJi4sRiR9HqPM8dJjwxZLZ6mgX25YYU8eouyzzx8zB9cSBU24oNtHAtC97M4tQ",
  "key17": "5x2ymQPQYsfVxYcswDQo3hdmwBLYEYJEk55x9QAmERHGC4ADuZZxxCwzTi2WAUMN93YS6n93zhPJnVsmCbpVTHJZ",
  "key18": "4iLF7nbUaqxxzggSb4j91ysXY2siP2bdaBNESCmf5GQVTnUfu286rXCSppvJx2TGnXPwqzRRmgtqBh9nrUwu8R5J",
  "key19": "2LPB4Joju8Rn2x7UXuFNU1gRNcPEgLk79g7RZsAeYj49F74sfqDhi2PLLkaF5bBiqHRMSWNmXHzGaEEp4iGNNoUo",
  "key20": "5BYEDTpM2yB6bG7sopTMfCJWgF7XrS822eCkgQ41FMXdx4jG628Ty19vGVrn4tvLMy6oDoRY8uv926Jvr1hb7er2",
  "key21": "5jkrbE8JSEiM5XerfgsC5KzYq3kU8hTvn3bzRy2QjYdPmgsR6vukUCPP1hM7kS25qyRm5vgQniDUrLy35SoEkU5n",
  "key22": "4Krcfi8NCuBo7AVtibFznCbzX6xgtk6282kx9BTtjhSBXnjBzGa8ZjsHxKddkCLqyizKx14JDD9W1C3PM9a6SKS4",
  "key23": "2aGfTUT5G3Bj1g2WxtLpKMJWeq9vg8UJFU5ZMo73kSMCxhphmdrZxDPZu6NneCxgdF76VqcFJTMTzePaFPhmHwzr",
  "key24": "2mCLjt4eGQ7KCGtnvq6j9sgpU8ZWj5Gn6XNWt3fpGtpHxdqfxU4p4mQspt8MR1Z6GL3uR8wFt1cJcxxYQe8ZEigV",
  "key25": "3hNfN5v7VQVZJktngvPbhQ1MaGvWJDC273LvnFGpRCbCgkMEnYFHfxuF51ZZUc8FZTks1cStSVkrQJt32i2mscsc",
  "key26": "3iPk3d6gWavGbVjE1hgS58sMRX38PACfv8tq91AmGZF8MTVhDRG4865FFDJfZFkHv6h8YhHgqs2KgHyccUUdh1YX",
  "key27": "q3YL8bZDmec8c68onz27H7Ev3nqosiE2VTLeAjp8HDwR7nJApjwjHk131qH2SwngWTpuGzFqG2SRTWLfrkvpmrq",
  "key28": "5FQb7sWm6fDRkSBGLiTRHpbnx8owasEDwmKUkNkUnQwKwsd6bRgPxFYSx13DhUXJ6QaUEh4CAYzDYLiQwgydfAuY",
  "key29": "5cMmxdH5R6xAYyJWiY7QDwuiXS1q14CNcCH88cpeDeNZSVUtaGZ3XGNWMzvgxy9wuL5R4gsLp3CxoGTsk1tom838",
  "key30": "3iGUYdzYo1LTnGbB4xmfvao3Wd47ktDw59TUzEgMMgB8B55Gc4eRaQUu51oxLAssYJTkrZSNmxegVKVEHmohLfzq",
  "key31": "4q9i16YxC9pxNDLbHsaLftrFHN3KNoYKdCdPZJtfXqHyjQh9FPWfdqaDcVLPHx675ArkB2n5EBYzc2mwgrJsiLVw",
  "key32": "zgyBCxeTqjwoKLoGfZq5PfSroAYRb2kEqz6A4xt9NKV5Mcy9NJysGdVhY8rVJSQCZH5TEM9Uq3CVwdZrRv7qUk5",
  "key33": "ezrwmKjkoePRAqyKfLpc52pJJaM73Sr8ax9Uc7yGcYc3GnSdbuF7Ea7sGfgACeGfRBhRivVd5XrZ19v5XbgSJpf",
  "key34": "3f8AZ5jscnwfyN3CFWg8qDUvBi2TCLy6fSiYQHcTJLRNFeHqnSJRzvLY1y2PSgDXeEtby9AHDRVZM5kTvqv1kJ8o",
  "key35": "5kije35ju3DaT8NG597pkw1ypNCgarsQoNsRhJybxcLAjSHC4HAwm3zr862TF51aasvx5VKEdXTSpLkcqD9trbL9",
  "key36": "32tagKsMkzgKtApp2m36LqrXXMwvVryNKN8o6XetKGSXK9DfQtN7GxrpuVScGDhwJ381hHr5yfwwLg7q1PCwAGkL"
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
