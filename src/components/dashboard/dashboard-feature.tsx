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
    "5GdJ9LN5HfRENq6rHEh8SYjprujzWmjJfFRaDyehmGUb1n1ALHiVesuQJc4AmLepUhYKGPe1ykRriAYGrN4PX7j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjZgJSMtSyYsd9boBDGsZ76qGrjuqNGieFZVRUuEaVK5XXYuueaHWLbvWV9Ao1XJspb94spYejytVJ59nNa9QoY",
  "key1": "4JCuK6xH7dG6x3BxwcDkUZZmn9X6hSWn94xYtL9X27La49WGhdaJhwpbFeJ8DzYDBX8yrjRs45NxiQHpe2VzjKiY",
  "key2": "2pLxdEB7LLFqictmpzKPfUP7vtAWVuGkHnCtH58MCviQJDt4erkS5YHbmHWok51iySbqti2LpPPDeRyqXdBmaVK9",
  "key3": "2Zg1HcG3NxEySswCAczB7TMoLwvvxegmV35epD1z7d6s3AYWzbkrR98Nyo32sodyepoS1t4hkTTefr1mW7eLPE14",
  "key4": "5FoDHvwt2osGHph2KP23qiokbrrM19hmk5X7BKDvC79iphHrAn2uQPtedjv5saavbg51YFRNmhZV299ah6DZTJyB",
  "key5": "4y4Vrhv3tvewhavk1bBYUNmHmWwuLuZ3DHCzxcvZEubSSFpm3jx6nUoiYpQE1XbA8b9aHcRjxh9NBQ8xVRFCxywM",
  "key6": "S5iCU5z5G5uAy1LNufx7Srk3XMHya2GG8hxqbHTfjU3WR515p6ndYfKEgpWA6NnjFa98NYbipD4QkZcLTS6epK6",
  "key7": "412jUUFfUDZ3qez92hTL9S3fLsCFD31jBBkuJU5YCtwUypnqWBPYLHh5mUebjgVUoAqfakyGRmB58LC5dtsWLDXk",
  "key8": "22aVvYHnZigH4GqgBcV5cuRVinTUDH6n5XsqFap2QZkwiPyf5wbC4Aba5Qr9cdaUowBDvGaHws3Xhy9F86b9BfRw",
  "key9": "52e4X5FBnJ6UDLtiRrKJfYpSkuP95KKwXG6nrKfkbqAax9g9xqrDHdUjLqDMGs678cTWi8BTnBvzoyUPhUrRk7JR",
  "key10": "58kcrCTFM2aX6uLidHczNWnW2Q1sfuizBaEet8mRiyFtaSmPSYGRK8gPpB2K3juWQ1byWyzwrCJK7DBmwcjhJUwC",
  "key11": "5oddQmZoXEMvEiApcf4zD5f9PvBkzTW4jX3rSZRqbdiVVHNh3kArc9Ycn9bg3wsLkaPbbUgtXFDbppY4JHN87ngW",
  "key12": "2yZJzpWHVeMbFUhXXGPDN4Eh2CQnpSgVxJhZVqArcULxcgTUaro4fCCJ3RQYmwEt8ENvJDaYTBQG2ybhvZ6TUuVx",
  "key13": "2EHr1SCstZgmchLSfxb94FHhMxdsmscXhx6aUbjpqYPCEs6ZA3C4QF1hoYoq2r2iisBF6jD5BrPE3Svx3RuJUZhU",
  "key14": "F7CMeun34i2AsK6BWiZqQhEoxsFkLMTPXMBndaSd68RHG5Atzd6YrKALC23F75ypb4wT1DM8v1TwgUx5WXv8WEn",
  "key15": "3wzx3JJXRBe3kWWjHUbGDxUxaGpTn5xJSH4PGrSFyvnP7eM999WECmAbpVpmXPyTN1vdepm1uzjywXU8KRpYbHm1",
  "key16": "5tnuMGt8eXLw8aFhcUPMYmWABhgUBWKUtbSJx8M6h7ZxnA1xehNhGNkZi4rGhH9BrrEUd6tEdzvXEAXK3W1f5FYD",
  "key17": "2VcBNLNJ5uaQJJ6GgSXXGkTqRMisF6SwGE8wNSVCfv2oD8uhD8YtjiPrsaovRjLzRzzN3n6Xbn9PdvEYZjc7Wes",
  "key18": "46yHBzzNNDy93ktayAJs4f9cH5ovSDRjMqF6eFmvbdcXT3MyAG6iLEH7AGEU6V8Y7tySW8bcCvUJcMePPsFWj2XR",
  "key19": "51dd5FgrQHdz2Ji7DK1G5CkK5h2RvfhhGwa6CUc69ACQKQ6BcMudkjMGwkUyQy5eJLb1ZGdgoGHeT5xZsFc85yvQ",
  "key20": "4ZAzaUMc4wLEUj1MLSQW4xm9Uza8HB7UCaVSE3G81YCSj1oTepaEinEenpZZsbsyXGRfTSSquTsPoQZT2JdweJh2",
  "key21": "4gxeJPmJJM7Sb7E5C6LbySjKZtCRJAYemLJtUYw44pwsZhxDF7CNuzg4u6w6NKaGqanhPEyxM267eQmiu1g4K9nM",
  "key22": "41ovDDt3gr4WLfCu2nZmzJY1PYG91MCdurtALeTJQT8WCpnBJEsaG6wJkDn5Ebmz8p2SBa6mQhXkhyZmwBJyFq1Q",
  "key23": "N2GBqK3xttRxfrENSGhACfDLBNj5VzDQc5iGLEZxoJ9FZ3nb2c8HHvb3JhqjiveepqssDSnw5SPLqN693bW8PBq",
  "key24": "2dmfD2rd1nGsN6oSnBeja1ayQWy7aRLMphXUmRksY9UH8UuBomoueC6ebJq44W4Df7B2FRewpzMw8XcEAMRwFAWM",
  "key25": "2mYiL82KZk6ywQ6Y77BqxFweCtkaHpJtdzzkoz2owqxEnSahQstX9vNhdKVo9dwanKADavCZHmVgAu7AW4FPcqgq",
  "key26": "4Kv9HoTT1P7qj2hYecK4Vv64yEH9tCJQPJdwkUcUWVyy1vt72xXwx2UtdD36ZJTM468bTEb4griidXocd2CzAhsD"
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
