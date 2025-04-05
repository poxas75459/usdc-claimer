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
    "x26qyMP2Pw8KfTTgDuwBbfdGRHM1wpiJJn94T1VjHSXULw9j5izDzHyRDoGCGBKDgoNhkz2GisWRqN37Pteg4Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z735SUKVw9D8wu6VNeXCWPYH8P8AqUgRnm4es4YZm6r5qgEL2PWt5Sm8Wbw6oBYVWq6gMLF6aBCfM5HooShqVKq",
  "key1": "54qi8mBZ7NEzhKpWveTEfsqppdp6EYBj4dGJEmCKg6deqN2KgVcd4o7EHvhbYbzmMXYxQuEPqs6iayV3FNJNbaZ2",
  "key2": "rtiDMY4zHmCW3fRZGRFMXUdLHeHRB1VnuER5XxBdHnY5R9m8zEBEqHxSbDXmkttrq4cbSbmDmGCyDzEXTZRhLWi",
  "key3": "2Bvit3EyWsAH6iya4zPKwHUYoWtTV73ESQELVUxP2YTZ1xPkMh9ubTzwCbdshgrVXxHDcL1q3ctyKJtbgQ3tkaap",
  "key4": "5B5N1nYyaWRJ48n3n7giuuDdjzjSWMKDYHrpExaQDYdJjGasZq4cNzoAPGk9Z35M7NkakjrjxNgy45dRNwHGLYdD",
  "key5": "4zeFcH4Q7D1cPhQYKg3i3XXb56cuNwqWmdQeLGJVx4HerHK1iXGakFtVDnB22WV62NdSsqqVYtH7YmTAyntWWozU",
  "key6": "pcTPxBH8CA2UY5J7jyvgMAcaLbYzeaxqpdGfxRJMR3D6n7V8EyzcA3p6nmG2EjHJgeZ3q1T5Xp3NMnzkmAPT33B",
  "key7": "5Rur9UT5nd441jAFCZRaCy1xpdZMK4CvQzyY1GfWvTUsyx5zeXDygmXZ8kzkpr9iu7xUPjZZHcgdQn7hhN2Lstyu",
  "key8": "5GZwMEDUmzZWCPSHDSDVGw47UxTodE4mRWmCiTrC6DXoLpZTTwR3hTXoiRAxjeWuW4K4o2FEPXsYQSiMTdRXq9tG",
  "key9": "3DNZirBGc96PeNG4V9Pp9GEp7QouJ67DBhxpzN1DnafCeDxk2qTWqvLHi9zPveGPfFXGqQw5pBqmLDRUVg9Y81Tu",
  "key10": "duvhdjWruX8oZBXq6yAWruWQETpKYD4N1w1swwNhbETQ523a8ko8cSQjaRYVKJsGe8XB9xcEQyNtBjGDXcfLE49",
  "key11": "4gmKDL4UJoW3v8tm1GKQQHmv9xQZsLKJG3R7Yih8KP56vR6KqS1pAaWpcDfzf8fZBEEwtt3y7VPmGHHGb1oe5zoX",
  "key12": "2mmvtak9AemkGMzZNcg8zR6SFxvcszYRn2kCj8MXCc92gMJVyohBpv6aauYr36jq9DmYePrT4noDuFipzKospBfB",
  "key13": "48UayR6N7S5G8xMkNxKWdw7p9PCcV8rioVwRo2uy2uq6xTTZc2JoCziKUeyDcytUMyow6fcQEhk1fQQak7YmkRPj",
  "key14": "j83v3G71WpQDfb9FvC5mYPuX4jDTEg4NvrrjyFqVcPWWb6YiTYeTDgCKfWigUT6mkgxXxJNZtrKV2bPxHv7Hp8i",
  "key15": "3BwuG33sAKoojkdV5wiS261TjfgtSVs9a33otgzwu6Jkxr2VMfRtYqVKyEbux2CVtWQJZXyk6SUwQBQMx6UBqHfi",
  "key16": "671Er6iix5kd5rdzJMrwhcYhwye6aPezN5xYXtuPETdfebzv7n5uqXYCKiYZVz4pbHXiUNGMaToXiqVKLftgF89y",
  "key17": "4fvxfmTAyD8pUm1Ew72EuCn4BowauZtbfzfcNFySsRKZu3e5xtidKJunQYvPr19SJq2pkk8rEHLsFbawXTtmTET",
  "key18": "5VNuaccHFjB6aNZWJSg8YBYCupB45eekVGTbUt3fTgnTMX6Uq4nEpER8kocGBdz9z2bGaNdRVMcNnQh2amwwQj3n",
  "key19": "3oi9aEa3x2a81ACSqozeBvb5FUdPZYo1PsiXtHzC6ajuF631Yu1JGS7u8BPRmzNwmDp17Ruwg8NQ4kVZwdsttXJQ",
  "key20": "5Ltc2GNCuDbdp1akCFSwDTXVeMPq5D4fk1MVrRW2oXAZZt1BsbGDrL56NDb5UXs5YHEVKgHqMBUPZJaEdQ9mqojL",
  "key21": "3zRdE4mAJWo1WTDsZspAcJQM92q5bE8HCrbn8p5tU3AyhrVfapSV1VK7D3CXNg9c9krWtmg13DELSBqtNp1G3rZs",
  "key22": "6o6z1EQnx5oxM6Hs5vjn5hTKbshCvtK5i9tW4W792wvi8GsMzsTBd6G41R8LNtZsQwgDQ44sc9KddW3oSmXSKSN",
  "key23": "5cBkCQ1H2fCw2DssGUMpzNgpXHWFGnreeaqSnFqrKUUwtYhDnyJTUyhtWAPhUVeRxDJ8UiV341fb85xHu5YRS5ra",
  "key24": "3znMieVXSMFuZifwm8zV9d5ZpwZUC5MciiQNDf1K2mCx93rc6uSYcU2d9X7puDQSZJQaYPrbtZxzhpRkcn2u7nK3",
  "key25": "4zMr4zBK5v189MzZoyv1N3d6pmicREWSwCDjoa9jgX8os7qY4J9Y6qKhSYJAHiib1FfKwni1CqTb4bcwvmeDmxt8",
  "key26": "3QuRBqdo9fwu7ffMS9vPpQg4qTefugGSCPPSTAoTyArXunJhinNoJUXkXgkYxQKuF7636u3KoGhfBwXW5onqrZiM"
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
