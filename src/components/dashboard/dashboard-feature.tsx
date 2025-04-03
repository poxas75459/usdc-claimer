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
    "23HMHmAByhtR3VKT5yQhY3rKS8nAws69qRLfyPjeJPcepLUyxK3qAayh59Gg7myGjnXDuBrK4ESmY5iZxcyXjD43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYEf6N3qUNTkTqpvfzyZmZfSQGPQ5M1p4JLbYZjAJnsXbHSBTq6p4GeAnvoAgW6VhydMmKKcVDZRGFo74xhGiRQ",
  "key1": "2Ym2PEC6SCgrdUUoV5h27MTcK7bidwHGSpTHaEg54SUB88xVo79VQBvcKa6CHjQMcn8DNMMeLCk6agJ1Jt7ioY1t",
  "key2": "33qLs2BjZL4GvvFAaaWd4QrvZQYUF5bfDPdJEapofhPPVDNCiMDrkV9tgUf6K8NLZxBm5zGQfEvMQpMsyopugwte",
  "key3": "3B7sLDGFBUo5fvh9YfHh3ZcQuh58csSGH9eKxrzXciK9Z2s2ECZPaQRh1YH81XPDZ56ZoUg9RkkAUV7fi18LV1nf",
  "key4": "5YhCsccLuG15qe45B9fCwyeZJ8jLJAfzft1dHvpgUCj4XuY22xY1PJU6e9bC3x1HZgHynZebtAaD1ihkPmLFXzXw",
  "key5": "3PeP1WcfvQoX88YQbPGANo3vM8NQDw1gJEjxvqhbKi6ZnHr8kscdsdEiMz7pP8ptL5qJBrvAV5rPfdhjfp9PLY4u",
  "key6": "3vgEXh62dGCRa9rP4F94Vq1GFYGc6XreTe7WAud1VUbdchDkxP1RzqVzquN4X5zMzhhirSFGUXPJApdoKjt8rLkZ",
  "key7": "34b9HMRYSVZm3HR3fRYQWZ3xYrmV4fps3ttUCgMdS8w67BRQZcx7JdKSTt3F3uEAxfKQvNPU7oSBjtuoiLViZdj5",
  "key8": "5hNUMyCnJtjHNxdM7RPXqGstD9BqCh5HggNvx6b9Gf69KQztCE3Sn1NDqe4M4NwU3ab52SFVns9gBwLwrU24eCyZ",
  "key9": "5PA6rTn2AnrEKBxvgXvhSAdM2ArWgDW9Fag66BXVg4qK5NVExZk3n5fY39eYSyC3ez3aAPJfTcqWwtahpaABWWr6",
  "key10": "4QxCa6s5mfiCKRaicJiFBw7rxq1vWCwsR9cHjKFp96G75RPoGGfaKhykXrVYCeeVhuy6SsS9V1CEsu2UtGSWF4zp",
  "key11": "4UYJtPjGKpZa5oERcGcams8bNdUweqmEb1QdnyAzjEQSRjR4cDE1AuD2gPkoS3s59j47CCnim5dkG5ke9GXky8Vh",
  "key12": "3mo2g4uqJCv6s5rg5WHxrUTk8TzCefBoiexr8kfeJcHxkvrd6UBGKKh2buYdK2KL1sqdarwjmYmusA9Dq5dvsX4W",
  "key13": "3M99Gm6NdqKJgHgKYdz4cxotGBAWq4PKhrzHZooX72aCEpqYZZD6KfRMon8NFuzy9wDeo2nk7DCLeeWMN6DBgeLT",
  "key14": "4tBbWBf7BkpcdjxN7Qfiu8gqgaqFhQY3EPmVkgkPxkJrUp6MZkBnciMkLDF7KSSLToVGS2qAxBdxon7i8tMt7zbc",
  "key15": "58GvQBWbtnZPbSuTgX2qgM9B98uC4V9zdLKfHMNHYp48WbJnb8cMA5ZsE69iAyeehY4uCSvoDVcNfTZ7m7nmFtha",
  "key16": "5xmXmkdTbxnuAkNYpUwPuj9RCuowtDQDkZu3VBp3H2ZUE64rxhs7GU4bWJpc3Trp3fdpMVtKgzBxbBt1msm5v7cv",
  "key17": "NpyeyQT82Ai7wnkZ652K1oo4eGfu9qy7r3DqRzFabdbynJG2nzmsRfBpt7gvbsVvrgGysZSwftqz2KCAJGxZ2Bi",
  "key18": "PWMGhhprcCK2UXm2HKrZtcc5qYZ7ogenQQMjzUobtEyVobzVzPJJdxGCA5h6y9B4oGaYU1GDWNCMQsUVCuuBtb1",
  "key19": "3wNKPGv2AidKxahL1BkKiovHgPbFGGew2CcD16YrZV3n9VZgdkc5yR69UqqJ52TeWyekcRX7eCPWJZZJa4yjYZGC",
  "key20": "4qev5aKvxJubEzQxv2cVLxn53sMXmd6SUNi1K4ZTr5tCCux4JLHoBn9Z5pfVnaDFPJRVc1p9y7k5qdLYihxG48jS",
  "key21": "5iqvRx3LP4pWvSeiz6yEo2Er1eNGax9cEpFWssFFimPGjPKSoeA8cgJWYzNsHEvxQhQA8XxUNfKXC5pYsFrciBr2",
  "key22": "5RPsLzFsqJYoaj7DKjkcdZRGjknsQGzTAr7hFses9eJDj78rpsKAohtsQjhvp13WbWN2zKgXv6E9vcaMjKJ5SDKK",
  "key23": "3zdePXEaQwcFZVLzEdxGv9Rp5cDqtyfBVQgXFTpduYmh387GEvDowDwJynLMut142h4ue56R2GA2Y91HSAMtsWbW",
  "key24": "2cowapnQxq96cKXsY3GjyjDbmu6f2tb9UX3U8mDpWkABKasbuZesmKLT998beYi6465oA2hgbSU5ZgaPBtF5SHG7"
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
