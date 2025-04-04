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
    "4qgp9ppWJCoKKDrueDkRqHqny8RjzA33CX8sExeaEFQzZqVsAeMJbD7eWDUCoCN5htFP8nWjH6FZ1VisMbZucv6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4Fqp7PJa1DbP7tFWopQ6eBqcAXymVKk1NXT1ckvMBqq22fHkSJ7WTqneDmd2DM9BNh3kvQXmG9EgogTWZDHJSu",
  "key1": "323xxPUSZEvfsaydTZyNVSXzANEB9GZN73FSUgf6t73wxpUR274AUEGhUTzjrutgbyGSy55EQaN1zG3zGz8Bxu2W",
  "key2": "4pHxPbG4PzBoexdwXE9cj1u8s2fcHWmHbf6emkKmx674qxoBqM6yesi4GWejwxtE6asaNy67ghKkhpDub72y2DrX",
  "key3": "2LCF3YUi221rrw3qWaLvRAJBSusrCDuwUqMb2xr1MqcNR1YHCB5X1JKqKz8e3c7Nh8sGTGqV4ZbeJbLEoQpkgJmw",
  "key4": "49RKitYp1zuNXyK6pW1KcA9pt787wNrLA5e966zuLN6ugZ1w4kg7LJtV1UkyGwJ7eHqKog9SX63tsg74YKzipMWw",
  "key5": "5zCmbF97f7JHM2Ehjur31EriVF7bwuHzkRWvRfPnD2UWkdP8CuT4KAHUkwxuDcD6YVEEn6qeafPUcfudDXwfaxge",
  "key6": "32zgmJwdYMBQQQ8HdSByuG75zafXo8LCNejrzNT8VjzuHQCwSeeUjREcFByZhtMF1V6gMpxFTmNDytdjy4WmGKeS",
  "key7": "4xKsf5P6Hsh251EZf8pL7rEWFWtEG5y5gM1S1Nvsmnf59wVHRpHpeJpN4mY9foTrbBWWLSvcpN5TZT1WJXCzHxE2",
  "key8": "FRKjUvRWRQcatJzzXsRtZ3Q6K6tHs3bUbZNoS3KSMQhKh8MjdxiL5Si1tW1LKzZXxBQKXtJaquvEiDM4aVJp7r9",
  "key9": "qxNE2ekffY7H9tozbW1pTdrcUPHghuZ7RMVs3dsE2hgq4ibyTEdcKrpyge6b2tBWpxxpmAFBT4cDAcvDkEzqGJj",
  "key10": "33hK8sRegYnP4eU4GyoQZGS7w8KSMjkKgYcqgDQVZfYGkMp51uJXHruP2QP93Biu1tjSTauVXJRcxx3BvARP9sVM",
  "key11": "Z7KvaZHwaCUYp91JTX4DLQGiiEEfNdFVm61yQy1PwVAbmHEAskFHUxCP4P2FWSdYA82fqPi52t46w9omC3KZfat",
  "key12": "39UvNVjZEBEJk1P272gp2Pzf9uQ8SzU9rgP2mksGy9GJJqTvhHYQRHr4XjAbZifqLPke2eXzQ96xvLVRbL76MJgu",
  "key13": "5BhRMHTemUrAgH5gwvUwbg8iKmf9FgR7333F1KvEAHATvEg7kdi7o6HDfbVXgcdGk8XYr4wcJHe8N4eYdArEUyFA",
  "key14": "3D2qky7GTGV64ZnRT2aDjB6tMCyU7VLy5seD22YvuCqDtTZmTB1gvgvyFscwdh7C93jJXKnk5Pcsdur2K7QXyFqV",
  "key15": "63s8Difk5ruETXvK9TztnKW2z5L8HJNSFpz3dm5s6N3mMwocoEjmpDrTKH35n2Aha4fyXMvDnFCxk568ZDz1XXRH",
  "key16": "26rvtSE4e91XvAspyXsMZ2fRDmmvHqow3VxyrvYre9sgeQwdDENdGMXZun63nFrEc7XAaSps58Sbb1KjBYcboeDM",
  "key17": "ssEygpVidSk5HXQj7Fw5FWVVmjaN36HGiPSD6PxbgyCraYWmWA6jskFHWCewa1dbTMBtt8teJzDVJgGiah11QQM",
  "key18": "5RNCX4QHBsXmr2xVQsfZ1Cg8tL6G6Cg1iGecF2Gw3FhbUqYBt8T4gVTSfcViq1dMQ8618f3YG8MjjHXevwihUeX9",
  "key19": "39FWHP3ccAMvrEskzGpTZv74sUCounWXVf8v7sUb4YUSoutvHPcQSmVx6iipDq9z6uizMDS6bSSy5fcU74UbAETB",
  "key20": "5UT6o9fZYwajZP3DDX7ryZGycT5No1v7yA9oaC6GZoriefWvXD6TzZtJQBtLwoNT98KJEjbNaXLt8iLoTyBxyxqm",
  "key21": "4YWEEHUk5NafdfKgw4bBfLKqC5nsnaFzp2uS1aD1r6LWb5uMh9gfuEXhCgSQThDvfniaNh5pihUGNt95YzCnATyw",
  "key22": "3PD3FrReLYrmu9eqSScaYa2nBYjsFAeRmT46E18ZNL494KfZLHTuiWzjKtdHkDidRHPnLUxPX4NVbfn1Jg44TbU",
  "key23": "35eQtHofHEZJiMy5NgACGBmAg2stHrX4joZGse7qNqfdxyNHwbpTnnPj234gXTmETdpPuctKTi7GSqCvU7gD4rgj",
  "key24": "31geWyQqZWvgMEPZ2qPcNMfkvBfYywfJCak6dJ4H9SvhcVN5ZkJSzyYT7jgcQVSkTMC4MDH1GD3VL7jQ2oRey6B",
  "key25": "3MkT11VQEZbZ1YHpB7D9qgwsiA7r5vUQ5Yx8jqQK3WAzhxoZj9Vph7Y3QHzHhFYsoSDGfREtHCrv1WdoCixjn8ez",
  "key26": "65zD16PrXBv1zAkaMNQX7LaQKCXHe4HJbL38MqwmK2DMd3EhqozNhScPvKr9ApX4fEAtBvyWjpAvUFRNrYg9GHBB",
  "key27": "4Ba8TbA5TarfAutV69X46sSp49AuciUSaqU51aDxQYEWPDyHkMGe52k17RE8zR6GYQiSGfJ78DSJarJpeLWVqmKb",
  "key28": "4uF1JBDAb5rxxWNjGJgautaoiNgdbCDYvmemwnjtxz5c2EYu9nt2do8EcQbDYm2wtj23UKpZ7UXf4A1Mg5yqj8Um",
  "key29": "2GquYAyD46TF9cJcLMkB55ybcnjicS8Fh8ubiYEc11HWeYBpZ6jeKQVxfCdvmArEh4om9aVHzwaruxsdhz3NggMm",
  "key30": "5fsKSBL5bkkVXq2FNEWNHqX8p9CA6v4RHEcenxJgeNMp5Ckcp2DR5M9bTZSLoFN2pNHGtE9A8MWK8ZHScMvDT5G"
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
