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
    "3nkbZRPG5ddZG7DEVUDqR2oqJxFLRyBHpC5CqMageroWhRE3qrvUh5t6r3uMzdLmzeANNcmbfmTadAae6FHJFXGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WbJMPQ98Bru2BUbMap1fLzaxNBbpdhDubyPhvqMeocAGX5KkicuGycAYbb8AeYEAJwHgLzunZJPa9JSMujeKgZP",
  "key1": "4itwUb4wWvQNXH62C2xLebATBAE4f2iw3T8VLYfpfRMkAphzes2eFNdr3pGNHAdq1wz6JpRRdVdUE6UL2mnXn9Yf",
  "key2": "23mt9KokK7hfPzEVA5UKYDPQGZvoa9GJofMu1YB7PLYGLTYpVpcpPTBUCNRQzL7VfmVyo9BPCB8CrPfJtctbJB4A",
  "key3": "CY24tmxzVaQMw4FUF7M4BpyvbyhhTo3z8LRb3irLd9ULWeXq8dFtTEVVFZAY4NroL9oR4nvVHkkA4M2Vhz4C5eq",
  "key4": "3aS5AyEHSnZBY9PjM9D3qcQoiv56Gwhi7ePkqvz8Rxq2GApe7CQE86iukmCnog9k8LXAs64pC5QyWKQvmbZjYS5m",
  "key5": "3wPAUJtLENoBAKtnAQiXPzfJWCGS4YrZFSG8ibB4ve3n7ALAM2RqXRNbC339MCNRLKLu3iih6Hde17z4eYNUrq7x",
  "key6": "GSEbE99oGYc6VUPmzyRDJGXqWfmxLZ7XhqJArcJ8NyoLRGJxmFn39FLXruNX4ruUbz1v6eq5zW2qzMyxop2WeiB",
  "key7": "3eybX68Xeecq8WE3mEGcioZb7Wjkqz4P3QRLXdyYgDaSHnaZX8y3Ncgh4k8LHFpbxBc9G3E9GGw1H1UHJBwqUP3t",
  "key8": "5juu5JpeWBdZAdzXNU5eVKVAp9TAYvYv1EWwPSm3RkpNpRwFZMVPSLEXaJdCcyitY6iJVSa1FHBMbnqq5yXKM1e2",
  "key9": "Y1UTqPe1SEGFMJGWw3TWvk44YtPS1yMS23FjapBBj3eZ5Vr1uLXDMNViGYLpf3f7MqcherzMkJBiVKVaweDfy6B",
  "key10": "3chuC8MJB4qsSWzYpJ6j1KrBRaCRbvJxsYr9WyEtRW13wPcGn1Bj12FbM4dC72YY2hskFfkuhZQNpeh5bCKmHY6d",
  "key11": "3E4T8NExPanYaoZrv6HvPA81prUggraY4ssPLjgTnXsPHcK9x8eaDWZ1TcaDX89EWymSGWoGrTRpWkPoCH8NBimo",
  "key12": "3zHcY29AhfMiJDso3KUHaxnGTzN8vJpWYjVSykrKQvp6mr8YEVwATCEFiWy6ofjPYj6fjCK9EX6Qs2iFCWVAntaY",
  "key13": "44tqSzyJuqk5uQZypQQM64dPEN8GqX5Twxj5hjAgSSrnnvDPXc1JHCMtbgrDx9mLSsGTnvttTugipA36hfZs5Dns",
  "key14": "2h9DEwUC4Tqy6KQZyNXafcaoqjRCqXjmz6dFS3omM7h9yqAk9PbjZzPm8ysb7CMaGpPb6roohsa18bwGVX9ZnZgQ",
  "key15": "4ZmP9B7tYyBVPtAUc4VqCKpf64GHntM2CoPuZ6RQuMd3VSm4iZyHNKu2HVLkmYVHVEMVip2qkhyZ53NXhW2NCrje",
  "key16": "55nJ8Phh3uUYKdEnuUn1xcN7NKfyX3xx2UATqB3nfNWkcVZ8XREcBKfUjfbNcVNyDNGsNfLVTaVzNRLBydVdhpH7",
  "key17": "4RABqmu7Rsd5SJKbgWN5Hak75LohJieEgBdynbru2gHgedkTqb5DhpMmQdUv7hyj1WC5GPRC4jFjNDLQU9AiGxCD",
  "key18": "2oHuD9CHxNn5QWff6komE7AS2EQpHX6URPWYMoeMSFfUFabzCtGX3JyP9VFGLaZh7Zre4vHk6aGd33gndykUqGiY",
  "key19": "5mhv3mz9eixx2NJ1u143QopuaFGpR8sGjkoeWQaQJi7tSthc9mwYazYNakxbZa6SDgTG5kdfc4TbcisVEnZMjzPf",
  "key20": "XhCknZoPtYwT9AjTt93PAhzSKQjxWxqm53vkeUAaAb6ZV2m2dAcfuLpPUGVXMaRzxhGD6S3Fyj3PZnQehimbbm7",
  "key21": "3R4QNnqVTumpqaQ3LqAo7bP1gPUWN6fDy9irchu1T9R5ksv4Lwd5TiNr8LgixsGSQaQBkhojcCtAWdhQVRpJdEcj",
  "key22": "5XczediyVN4YemQgVxLj7UZAZy5WWhf1nfrfp8xutfFpFZNpBRjD9y88noHiYRnP7os4utDw8TNHNQqjgaSie2va",
  "key23": "3AaXxgxqdAxTSsTtvuMxPQYnkKdVaYUZc8VTaafjrrR2phwUgMro3QqVE6wPMoNftZEL6sDFLFVqB5fM8115YTBk",
  "key24": "2cXYdbyP95A67pMJNtC8cY4rN8HbrNEhdB48oHBXmVBMB9XWs7oey6FuFN75M61PXpuWdVt1s3MCiFVp7GLaHkmN"
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
