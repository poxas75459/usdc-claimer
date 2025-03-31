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
    "32VmLxVx7DoD4eghyJbii9oebFwp4C9C6GzLc2xvoYBx5ug1MZ4MvWGMfzeEkTDiayZuzruyJ1SwrPH2b7xgNEuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6JZV8ueifaG3EKjuUT9EgMTXmRVLboxiRZqYHhX7gVNDX2gnBWSKN5o19ca9pmBuyoVFtBSSrS8XGmjBeySSdE",
  "key1": "YSkn4SSHxh6hjz849Ak1qKJYWsUybi1jEB2J7ziofyertPzXacLzkE5t6UpVLAAjV6oX2u5wK3DSX3kpVacc8Hf",
  "key2": "52xDbb192ado9hq3JsZ73Xk88wVZfqFK5WPQqWywh9eDyQs9gxotneH8gEvUWFGV8tQQebs4gZmw3f1kaHam1X3U",
  "key3": "31KoNP69VRP2AvjbtixdSufsH9S3Msw2ns4k8rNMGaBZrs8JHQPSpUCABAQq2T7aJm36kXDNpUC22Jsv4s7VQCwC",
  "key4": "63e7MpHyvCQiisnF9bwteALJusxwrRxgQXUnn6GtrMjTqp3kwn6XN63NorZEjvLaxvAJEz8WVEEFKEGEMTZnMJrY",
  "key5": "4RP8TJ27n6AusZCJC6GVK4XnYWdyaLzN6cvCgjG6DSE9CxN6J8cgoQ2miET4JcJH1EYdtwwtXhYMMmyUaHNGq54M",
  "key6": "QcnQSu5igsYfRvPczJkDGuoJFWvaee8pFiRTiWWVTv5vGT7hW1aWmdFX6S4jpedWFGi3KAqbgH7StuGqDxhpHem",
  "key7": "5hMZ3q49EfyNm2YGhKn6JiiPGTDrSqELe6gVkAC5HdXybhztH5nqsNMyrbDHPfMKqr1EmmSume1MggGw4jcn6y3P",
  "key8": "2VwjU1UvrQihAopbRtj8hd5eznQXiHCoAuKv4T4oaehUenwTyfuHcnuLeveXckSivHPmg4AeGGwiBquYDxYbz8LR",
  "key9": "3hxfdNkhGSoBDDi37mTqFQJdd1rnydqN2heptWEHay2znJNsRKYbdVAfgUSKNe3MFGj6fqGP82vk6TSJVNUZzSp7",
  "key10": "5FqcHMu68zL2ovQd9bJ346KHMNd6VjfQ3LUNzuJ4Zf4RymmxvWkdHMU5dTL4Wc9dr7huxjAjdFa3pAMpoeakfW6C",
  "key11": "4KR4pKzSjrQvLqKQb9VU3xwC9NtaKCw416RHZbpyRWJESvXbCSgRticdjmHeR1QSK5CjviKjG2MTyci7jhQgujvb",
  "key12": "4LBGErQ67Qb7d4hrHHe9hh56KVespuqANKqxtVoVN7VDdCu67XmgcQRqPtusBuJF71AdK9whHEuHxzWUFsyJTvpo",
  "key13": "3ggaQygqJVYbPfzSVwzQbLw4Tzqfoh2NzcB4f7eDaTCN7RJqQpc94EQbiePru6vu4BrTemZPqMkkbEJQWbEbEBvE",
  "key14": "5LhwbQndVvTrLTismgX7fZTLPvUUAEi3Ry89qAia4jr1rjGkfixbLxzcYVVMKJ9GKMJSHT7YYbvR8ogySyKbMM1g",
  "key15": "2N8U2X1jQFwdNzJNuuqVDRn5V5JsxPs2HGN5tpvZ4uYjqa9pkeSqted3kJigogdZW9rNa2cikkgbCzCZ4GpgwgDd",
  "key16": "2AcCxo6vxeTuGVdbuW3dKyaT7XCaJDrLzYLPof62vtyDqB1fV6GKkWgKGMZ2i5Mo1B1RR7GdMUtK1gko6xNNKgK2",
  "key17": "4k3m9doDzqtXJMVw3VuJrMfivS1tSTJMCh1jrWT3mHqpWKA8NxtYyhC131Bnxde2C66MX2hTb7SBv2GPgZt6UZGx",
  "key18": "2tAS8W6z1ntgKLxjLmPdnsjAG4UVJia3EA8fWAE4KDAUaKWtwzAF1UyF2pd9a3tf6pVjjtn4TEDYKtzDdn4V1oQK",
  "key19": "2y6Z98PtncNfgxucbdieTtnn9LbfTUDzpSnKn8rV6BkX8hDfLuWpQSwCr3b6ANaTK7JCaKLfr4F2PkocSyGc36GC",
  "key20": "2hQYXirvYAs8kgo3coZzbVK1BMQi99GPzWjYhuyc4zu1cn2CkwConfzMS346zgd1ixo5Fne42f6msXu8PfeTzx8n",
  "key21": "3doa1UAybUqpzPk1RPdvpMnxt5QLjuZdCgC1wZBgDpyH5faLT31L58ZNbeTkBNaCbmTrDuTLiHDz2ZQEu1Lat9G1",
  "key22": "fZZhdGRgCRW7chhvbCr9T9rqp1NtP6jpsAFkT63kxn9fDDg1wQoAEAc24D5pJTBKQjYmaGs3SZAG2Ycts5NKqa3",
  "key23": "k9aN6nKhTxiJZ4revmYGQnPnzCwsDwrwBXNUAr3mL2jdzJvDuLfWuHTEKonRk8smzajnB4gBhSUknuqkwqjDAZq",
  "key24": "JiRnHtgE9TunCZANn29xvTEQn11gqhgY6jZHnW6aYQQKZU4sfPwT8tQUgyMTvaZNyUCBjvm6rRibEHMA2LqFoW5"
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
