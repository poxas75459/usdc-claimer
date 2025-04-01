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
    "4RtP548zEQsBWkBgVyXD5Ke8Gnv4Ca1qbwUDuitgYisbPjBCnvAG2ycAPwHq7V9VDRTbUwd5NPTqbWZnfWPWfEpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCGX3hdw8hbzVR7HrQJQV4Nk7ixdpXndZCw2EHpwxDvohWJhG2dLwcYCQ98U6dWEj4tjYvk7WRsz1x1VvN827BD",
  "key1": "5M4Apyjq8qaw89XpEc5YuKimhsw6dc42FuraNSvYuW88Mt2JMv9U8Mn1BV8WDWkMxn2FBkYWt6tEiGdtEMQEPpGu",
  "key2": "65rjufhy39wLxTRDmwwCbg8Yus2S42UU1k45vzeKEQ6RD7W8gmHRrS9joH24A4joafoq7CT6gPgXjhXaD7gPqGxv",
  "key3": "2uw9uLBA6gA4JhGTb9otyeAfzDdqZ8eV34cEdtfAUwubMisAMHNuGrat5gdhXedY2s8HvJHtC61TdNUKZHvovQEa",
  "key4": "3NffTZXx6Wvj1nTGTqiuZmWVit26QB2McD5ite4akF5M4RyYEddyzBwn35aVAdwhRTqSNoqrQ9a7Wbm21p81rC8A",
  "key5": "TMps63FCX7ZoeawKCTdxMTemvAwqnWpHYWjXdMdwwARgUyk2Ya7himCEuggsQf9bQAAakHvsnsyeMPgtER8ig4L",
  "key6": "34odXeBUQxTA5Pdkh82Rru8v2rS17KrVN4xLyMSb6qRXwSE5hnQK5LXnzUbG4HJ9vxdsVwazkEsKbvuD6UhKrENF",
  "key7": "3ZZDwU8YVKFGktLA29g9B3e66iYk9DEfgcLheDYDPtQYMoecNxcA4aW7SDbuSf6e7CNunjddMXiY8TTpHqYxBBRk",
  "key8": "5Xk5HeLv2xuVWB5vTzmzgyoAzWxAcKttG3C7GtWwxLznPXbSpZ6SafoNFWn1HGxwhAUV3LouStDhe3F9aPxYdEkV",
  "key9": "kygcu3i17FmMSC5LDzD3dTaro4Pc8jJ7XkNyodFHHUu8NKgnsqxzce4Xr8sL3Ybb3NUMKtEHviLHySuMVyebtRh",
  "key10": "3arNLTRCNWmrtcRLLZ1nH5M78XmQGBH6Lx1wpyhE1r3Yvo2YfQ6jALRGZuvQ9F2Ru4RuWYqJo1c37Tes4EsgKDu8",
  "key11": "3byKF86bf7dQzkFacQVTSHdHbXuZXYKx7V2pWRaFqm25WCjEvAnq6nXKEUWM1acyGGLjfQuqKC7n9aVxtnH7aLb3",
  "key12": "3bh88sdyGDXu5AryKmtRrFZAi1GYicTvugwJPZs6n7hNAQfaShg9Y3S1QFwtQrYqxteFm3QeSyXm4US1N9dUEC2z",
  "key13": "DXnKDBAbJVcw7jVoGVJ4SYunFPFuYwbkmUU1iffnD57Yq4U7wPXixhpziTF2HGzx3RcUVfVp3UVSoa8gRJe8SPr",
  "key14": "2xYyYcnYL4MkvKe77z4pQyh3d6Ey8UFs4H1ttvvpWcB37LCa5KvESBYLmU2cBXTKRYYK651kVH6oGSbutxT33A9X",
  "key15": "2uTLB7XJYXvKbNVENTH9687HPRAZxw8W4JuDQhXY2o9XXtXiQsR3uyVEVUKfbLunafFxBixQWLUrFgoThGVvfiWx",
  "key16": "b6DTwYB7CHfNzM2Xyh5zZ8vPKYzNQVoH6mmqTnxWXS2zKyHmEaiUDxxzXNceeJ4L9nUiTAtQxQR2YWxYwUoMzcq",
  "key17": "65EjUvHYXSdMHp4KYjMJL6uuEkCFR6HnjEGxCmRDAfXXeivd9yzQutRtNpogT3VBYAo6SaiukKWmwg1YiAFrPSyb",
  "key18": "2AjoU9rXWSAJbDhjT9puhqKkHjFN5aSHffPAYeWuF4j2osvpeBc4R1T65KKhe8617WaFY5DqqpCNqLXDuRe4qF7s",
  "key19": "2sA3G3eP9HUnNFgpBigsfVn1k5LSSuP5CUxrJAQu9hgLS8xCJWfh14QRjR2vgXdW79xPrQraSkrxcU1kRjpk1NcX",
  "key20": "5csf7k6raemiqrpPx9mmJP9Rdq6Re75dqy7S5o8HozJc9eA5vzL4fT8ZkVjHwXbWh2JGmHbR1ds1DiLLPFQRVcGN",
  "key21": "2N7CRo5hUHk8ey6VohXtgEk7ttriJTfaiWGjuXfWjAwXGUd7BrxPqCB4kCxQapgJLCeyR3jHrxtEKwheTNKwRGXM",
  "key22": "4tApN2nBu2zjxkFypUUcNzqxmu2GTHtvqowYhqLZ5u3ZTw2GBkoWndwRNK7Q1retGkwWK1VFjEuFb2z8PAv7cimY",
  "key23": "Af9FADCwh7SZFy9zEWFx44iX1UvuwTDPRGE7S3Hfk8ZeC4utNjhD677uRV3DvyEkEwKuncVWfH5ZM1gD2F87nuB",
  "key24": "5sa9DSnC6GPRka3w7r4KyYBGCSiBigpyznPvB2PFo9oDcitEcZbqVKfWRBMQforbeZti88sJnZeEAUmqSCvhrphC",
  "key25": "4XAon6XTnj9DTzKCEdCrPwdtypnvqZngmZ8UJkUfiwE5z2L6cwbp72pfSKcs74WXtfnjMBC6Sqgw59Xz4qaHCKTf",
  "key26": "5dHPgTGtsH6Zj7D4bfpBVQ9Ky3EvAEafLKh1mGa6hGBBvLsfSXPiUNADk8pexcNLgBrjSR3wNgLxYiE5shzAh1tD",
  "key27": "3r3pFqnyTitsy8WKwUJzDZdYDLY2SPDYzQ7mDZ3U3mFFKZo9nokUZ4GezCMimkgD4CgSibuDprpQqJApR3bePiws",
  "key28": "NcR6HozJuBBi3Q1Bx6amvNGX6tcHCRWMNyiMCFCWX8b85ts2AFMtvUHNmG45ZG7oVHhaJ8KcMV7a7MsnmWsFv23",
  "key29": "3xGQeYgETYD6mer8MZfBn2h9HuE59LtS8pbUbVHxPPz6r7f3YkNr1KZ9FvPqFkDYjgVyX7cuixuAve2nxCTWoCNz",
  "key30": "3Xz1S2kw4E3B5HWCn4oiNSEuynCjLgma7suDvPZk6cw5bmFcH2pnwBwEviAFxt1xX5ayu6BWUbZrfAFxYackrjDQ",
  "key31": "5yYMobN9dHfvn17KScAtqpWk6i6Kv4akNvWAMVv2pTnAk4EqM6rc2VpAxcaxLDLkGJ2HXZFNmz5UseZtX9ggTGPc",
  "key32": "3HAk5iLUF1Qm2rpmXH5HtLmQgQBP6GwvS3ZAtNGnwRDdmgda2m5hTzmh2Z3SetA9ssek4jcWq8y2bpfVerjhrRbY",
  "key33": "2U8xWQNBMDyS6KwCoUFLKGDdHuC5aLdaur63NhRgKb6T9aUVFaGGjKUVY9iSN27xTJAFEc3eUo8uJCjrMoQC6QE4"
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
