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
    "n6sq9Hr6ovi9Lzn8d5zPS6cpGDZuv6y3ZP7yCjsp38xSYmHZeGiaNPrkPo4h1b3wv37J2cB55WCUXqgF9azwmaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TH3E5fckDjwsM9DhFudYrGf3o2q8zsbShg2CrgGyaM2e2T2R8CykPeKM8tJgJf1AGUbmnqF26sFrxU1Qv3rvUfM",
  "key1": "2V9auigdKa7P3NV82oy9g6bLoC8b9Gngm4g9aScMiehiTSrduX5seYGDXk1DJEzkDnPeDjKmR6ZtwQsbt6S7WCwY",
  "key2": "5egRbYnsCbe9h527TDe9hnh1xaLwKKeLDbffWbzMh77WbTiXiYVP8C4W1DmUwEmXCLX56SFjne57VQEEv9B9yyG7",
  "key3": "jHtPfNvMJ2kR3Fcmbm7GdSYXyX6pmtukBDj2VyW9jLSK3AwTNLEWcfGUXz6Sa7JbugxLGHg3KAzoq6hSuaT4Tgz",
  "key4": "3vXZGSu6Zbqrgxb6R4BADwgWFgJqSsJMVCSTb2gLbKbZekVqPCGkstW1vwQaNqGT3AUSw7gzWJv7t3k7hjFTq61g",
  "key5": "5Rzv4k8F5fLwgvgknsqwUmnEu3eGKD8kmk9PeWNnP4TzLEQUcV2KFrjyyw3DLSQEuBS25Ud7t9oRiuSeGME1zCJz",
  "key6": "k7imETjQYvQnyja5dSkHKeDPsbrYtyoJB5Z9YgjG56eySY57bA7gHWAnsCuLRUKjZBPjfyyzk4xLqsSecDxPk3D",
  "key7": "4uozXyFuc3DB4thspYwJqMvcpxXZzMAD8KmY7odrGzAb6C4CjJHAzsKZpa1CY2fjnCnqExvK5BpefAhrXU3EePxD",
  "key8": "4RxxDh6uELmvsf5waoVuNZ6TT6pWCMcLPprxsspbSNzkxb6c4j9CvBnvYXG4imX9LV6zkYVUZoyDF4565upcTXcS",
  "key9": "3U8Adj5aJjs18x8QZ5WvbbiyHJguPUuvxzwWKSBTBNg4jDm3AZ5fLrZ8JqvhRYYagawLCfQiZqQVu5bv1YAu7ipG",
  "key10": "vbLDmdPFJNujRCo5o1fMvZWLx5MPkJvw2Kd2pQs8ikt6tti3x9TtzwLA4BxGMboJiuXBgbjKGrARTj72HVjjdzx",
  "key11": "5zgXY2h7CBXnWKbwX2QSHJcNfCGMjMgnB1tbZMsWoSAoRnvWYEpKssG6YPq6vbPC7daYopCMN9wPrUedsaNVJjJ5",
  "key12": "An2cLe1C1xCfhxa9vrfCSBu8WdFmjE39SqacxnMn7c3L7t1HFih6ys6ViPBatGkVwPBkMqFr45K5thNWCUo42HA",
  "key13": "51PacTVHXM7HzPBhJNSgFPsyEkacCxguKjrTEZg5RHZZbxu8LoAAjror4YcDNwuGEy3WUgnbXzYHeSZ2hwtKEBC",
  "key14": "4RgsiybLU1v3g6HbbXJ9kyh4G36KxxbSuN29f6wr4WnJtqmSUnyZ3aBu9joFrBzazSLxgif7Nd7son83uCx9wift",
  "key15": "5QEaPpkk4Sea4UJ4EtKK4nmU9HfPxyVFXAqEj9yiAm6Vapxssc5wi7j4JZyJACYte9vAvXYn5PAHcQFK1Ej3KUwU",
  "key16": "5YMSJNqjdD9YYw7AZSCuVtbFegZJ4ieskrr4uSSHXsEFYwpGqDMHRsSoHryJPnKuN6HrGMh5nzXtEsGRkeBFh7kY",
  "key17": "43oC3rbNYHfH88XYzLJD1HDCpZwV6ZNmDmjZkwAJzW5DT8GwDv2x2MJUqrSnVayRx5oKEV19b6UScwQnGVe3qizc",
  "key18": "3sheoD18t9bqEzsncXi3nDoBk4438QxDW8irrX2xR7rHcwPABv9VuqeFA2JPk8cerv9bwvHENtfseLHchdg9JBbc",
  "key19": "N3UJRvMaqqzK6qCpAotAckQKwVRFAYmq42dujeHbQyabmnPadRGS57cBVbfb2dho6AhGmNQp3cAUnov7729fH6n",
  "key20": "5JCCAt73tRTjopg568q6XU5xKZ9Hy33zF6TQKVEpA93Z5ZkhV6DS4DJRa5mUX4kNRjPEL331YTD6ygV7Z5UM2rAE",
  "key21": "2VcMXz988sbNETHdbgwv5UhFydyZEX9UHaNjfwqeamZKMPbTXUBfnf8etCNyQQktrhAaqw1kE3m1zaZ5wXvNAd9M",
  "key22": "5UcdRrtdau2jLqNJvRqv1qhGQtRZP2Hgh6dDh7bKYreDk7bRaaMjvjyi8kAmf6wvpKCCEBKJT7zpDPaxs3MDpMjo",
  "key23": "3V5NKSPAhFHQKbYMF5t5fvQZHDCX7uyyTh2HmNbVXgHmGQbmfdHC3Psb5MrwzVNupKvZQNJHm69xgBnSRpmAUjUM",
  "key24": "5kwp1qtzku7Boq93yJufp4pLE1mDLey4YFZngBSrTVJsz3qVwawAvNMH5qkmKbAB2PFXZqVDMLpyHhFT9ZpphB13",
  "key25": "2iZGEgbJMt5PXPceBjZt6gX8pbJ68d1AezbcCnvBhLw6ob58Pd1ufmXnoodMgzSEqb3np2vFmA6vfnondqqvn7VC",
  "key26": "27rK5M3AQsf7xGdEVKuPoWH1a9dTYRy2ZC45ft99bjsLEByb4PXfATUwaXwPFsBSTGCTBMi54rT4ndmDjP4nKS8Y",
  "key27": "wCUqSKj2b2PtbkqjXiewBTUr8QwbX8rEkEhpbc5Vv42NBhD2KXtvwkhZsinUSCezxqHEtkZKs88D7Z9DD4GNXUu",
  "key28": "591b2QZvvPbFHnoejzkTPdkPncK51RNcPQ3r8dZwi3P9a9ExNM3MPQD3g233X2XL8aDKiWL5CxuvTLH6FGkJPBZg",
  "key29": "4W7R3WpWhmnKKNfAKcyoqDPzf3ojAvWxjtXj9gAKLCFiNyo7ooZiprGgCa3kZqZjx2zaP4TMyWSe9An2BBBarnvL",
  "key30": "2j2sTCQfsGtv8B8FX8VFQrsCEyPwy3AaPXNZRQZpY5hcKxJ9u4aXuAa6d5FhPB8oYmSqWmZ4Wux62kyz6oyjY6n7"
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
