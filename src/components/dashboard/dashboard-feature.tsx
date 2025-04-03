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
    "55Q2FNNqtSgM86FBVUnQZmVxk5h6HV8Gmyk6jGGMeG1wbHP7GkGt4F6R3HPes7dzB7osFTotraKGG5qqMhZGT3Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ta78zCNxRyeDTHMGo2rpZE1BgwRET116WpFkuwBrZLKjADr7XegH8MwuX6qtbStYDzFbrXjkdcdfBfN5ev8aUBB",
  "key1": "5UUgYr3u2KoLUwbWq3yZTWA5MH6QAu6imFoYZXxazeno7aseT95kgEUoFh2agHWufdtxyVP6Y71LKskfsWHgEATr",
  "key2": "2krLB3pTBizLsGWKPKWMwo3rTwrR6BgvKE6fYgx8cYu4w2xDWgAWVGqgKxJNgNWDdL8rjZkd3stQNzu3SMhXDTHA",
  "key3": "2wDYGb7jyisPsFyad33nGS8HrqndBX611YKswLpVQk3yrNGajp1pM8bXctsVJPQihRkoyRQQCDpmJU7AWHjGkAxw",
  "key4": "52zsD6gSn7hudJWNVtB663YRxJEoxLvZE6jHc1pCLUQ4vjstNsUPXFRsQ4ko7W7acDhtMhxQKqiynEZrKYvNHdPr",
  "key5": "2hxkZxSvS3LcWWFZBYzcBUd7H6DjCoE2RZR7zT1TxbiKpkS6amN4shhkpBiXbNYqiYauEjhxFqM9HBrtS84UVGfr",
  "key6": "5H7UpEQqjZ5Ncbr4iNFBid4qj21TDyVxi8gZyvXVvGzvSXB4nwgfzhxsZi26GjMfTi6xmTkja5p9sMq3zUFFfPsm",
  "key7": "2Gsb2KbZE32QNgJGuvQJzK3wWgfxfnre4dEK3PVPHzfkX8eXuubSEWV7MNR4iTZZWMHtYP6pbUs7cni2ZHFEEo6j",
  "key8": "PGA96rNm3W6EzAnwaR9REJohkDyh9VXVrdUxjFBfpAbrx1uKE5mZLEKoEUxgEAp4PL3eZB9acCHrcfvduVQQJ9o",
  "key9": "3VZMjkQe9ZE8j8uaV6DPRx84FB1oEK8iKu8R4hnmEdFPV4k7iR9QJopxXA9MVCfaieSia6nemNjHaYeXJnrCJSsf",
  "key10": "3bBYW9LuB5wv8t629nyQMbBXkZzKE9fjZ8Ktvm15VHfLqY7HMZSnuJ7Uf76rYfKCxzqqHsvu6aG26rmLteMhNofq",
  "key11": "a61aW4auye44vdch11QerNCfKApP6jRVD1qbdU2z9X7GDmZ9sUvvDZu8kGrHfL4nDXmTUHsZd5dHv5Uq9CKJq6W",
  "key12": "4KAeBGFASRv3eJrfni9d5piTLtT64gJCUwYUod7KiqV3hDEMzWwZKXgTAJuvakkqB4r9RuBKrE7Ly4J8f1GXmfyy",
  "key13": "nPK55cq5oRqV1aVSoaoUoZQSyq7zc8xv1USjCe671abvXyzBcmGFftYSRGWqb9eVo4QTfEXz4sUwJtFbeJjmSVb",
  "key14": "4V7i6rBSL4Z5VWU8XMm11QYw6q9VB9bfubfjZmmrDckBJeeapDkXMd1YqR4rjRamfwj9WWmUUi5egrzwaRYFUXXr",
  "key15": "3vxP8s883DCu55qtp8DCALdXbEYrBukcmGXA85PuRZFN9qu9cEg8FDLoARarEroKcrYGaKzKLWJfva55bGZUaBEF",
  "key16": "42DCb2EeJtvCXZip3gpdiAHpRxta4Dxgur26qXhAyKBdafbLMXX1ZbocA2sgknjcXuDRaLsxkv62g57TMwZeLkV2",
  "key17": "3SyW9vMPdYtubpMjXUF7uVcbZc1y9uxXivfBuQ1bQJhdQjxx6eStNz9mKuTpY21hDgtVc6N8esKSSE8Rn8Vju1aH",
  "key18": "39hinjqpEkdQbm8E41QisdydQJtQgmhGdpjTgPxvpuRKbWJX8tqDHsVuXG9hnaMFqWQ7Lzi6hUbKNGnMS8DaDpi8",
  "key19": "3HEBBtH8MhBrrSnNKtNYJkFBRGBMkxbAnUvo3qTcMeQjU6YqGhHLja7iWVREJjdnf7HCSgGU7NkZ7Dqd91s1E1Vb",
  "key20": "3u46BF3AuUzuJD2RxrV7DC3D8AH1xJswMccQYdd8AEiCSkXLJr4URnwWVq3hHxJHKqmHugzKQ83Hti9x1st5oJvt",
  "key21": "2vbHN4cCwQzbkqGFMsUcXyjVruoT65NX3FbmjagiFh6ZJ8PFmrgbpxPEmJVk2zKmZSuuasWfynAqNdG832Fn7e4i",
  "key22": "NfwL6oLbLbXWiFCPbVn5BQrtCgKwBxNif6UkLW8iXprXhKiiTwZTU24a5odnMxSHKiwdcR7qD9EDX9emJvCsKxQ",
  "key23": "28EjTFyWHnZs9xf5S3yUxZPEgBPM3ZBLNG33PjhgKUajLV3Vkgh4rCuomebfUtjdhM6qiRx5GLGeKpdDezWV4CPs",
  "key24": "5iJ1JEGdSpxPAJePWRE5pB6DK2GgPBTdY3V14FXurpMJDavjXGzkGrtXoxoJu6LT7mCENAPervkHkVC9bTuS3dT5",
  "key25": "3rnjjXESiLVTiwiGReEFCHm1ywa5cYpNRyQNYvGW58Re9rk8gmtJQCQm41PNfF4eJmcYLFRZxJefassQyvptWSre"
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
