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
    "57wNx2EMEzuYBf2SAPoaN4jNMpz8ZrgLpwucDd9sznJ1P5Eg3D2J4HDzJYCYrFjahJDKu8fxAgh2jHKu3gfVpuvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5paLASbieB4tWettbGDXscHZ3bATzJkzfLvZjuHwkyzW1pVXs4H61YusmTivJr4FH7mWDuNHD5GywA1BKxfdDH3g",
  "key1": "4fi82wYue9UVDy3Kw1BMCpraG7X1Vid9w4rPzxFS7swTeqoZYiGtuX7VpbxFHqc1p4UoRXLccJ6AgGN7yCNxpJjy",
  "key2": "3LfcNwtpCJirhbmeZFtqBJ16TeTycqAHJXEPQV9uFu9WGxEJYyKjfBRKPKgKKHGtRYaMzWJgbbTREPLxd66r2k7W",
  "key3": "5dTxyFVxVviGpEH4vru9XafGNypNzwXQAzixYUZKHVutdSS5jum4nzfde2AkMnYWxYBHjodowqRZwj6by9ttvm2d",
  "key4": "2R767QGjy4t4EapwNEY77cAhT5xjDJGToScNJSMyKVvAtvAat7tTyJNmjo9KNUQTSR6AmYUVubToJZVZW7fpGHmJ",
  "key5": "4EzAwMZsKunrcjXtZVcEV8Tbi66WZU2DWviZ6RahJKoePMmCDjA4No3dddWr1KA1scxtR3iFtsQQFSbRrtYm5d7s",
  "key6": "2At35y64KzmZb3G4FMRWsXBmH2fyaDx4uDWPQeFarkWMcZBiLsriBRyrMotwxSBkwbBUibhYmwW9ZAVLUm4heBkE",
  "key7": "3jWDpBuY9t8rNg22zzFVbqYhWbpYsFE7M6Q83AtCiu59Rh731dE7nMDTawLWBoTZqxwfnkMefPx1ZT3McZpqri9J",
  "key8": "35HNX1q5umjDHrcTaJjJuMsN1ZFmXxqif41MzxJTQc2QQDhbENCrs6r96k2GnhH5DhLjpg35JSUdAcBXVhLCGb39",
  "key9": "3QU88XAajBBmyeMksp4kPZxaKnEc9jtWMj99iatQSZEyoHN3hAEjD4RH1rv3rb1jSN4NAroYKrCHJLcBZovcRT9T",
  "key10": "5VXipTycYswU2DTh68C5mmo92EV4S6yo1829Lr117wQBsUwEqXxnsdq96iTM3Gn2qY4viPsPjpx2wgE4gaFSt7Hd",
  "key11": "5Lcg8JQovxyPJQcyknixxWsPxhQFaBgdmSZTYdKLCwa9jXWfnAqHL8qSz346rfjm5c76SMYoCDmacmtdaEGrmqS9",
  "key12": "4XToDYTYZuNZo5k49LeWtLyvn9X3LUukgb9wdGQhCAb4GywADL1egRF4oLW7VQqrpPs8cR66b7chUn5npLim2e3i",
  "key13": "3xVAp6cHo2cWJQqVZJsSwZPbtRrDZKFLWNxbMGLYT5DDs4zj6pUNJGSktmxfqafebFNgLJ8kdPwTeTE4D28qdgxU",
  "key14": "668N658CDiKyU73quBfYDWgWE9Th7cfmfLPsUoCLYwKf4QwLL7CgHJzuuwF4Bi5z4BPTuhdymdn6ZXXDfDgjwmmE",
  "key15": "5mgMbz38X9mTQVVNASJasTnYUg5yovm9APkKHNewJ162RHLgrMSe4DUsn9asKSQkCbqUpNYVAMV7mxZ7zMET4eVU",
  "key16": "2kWTeTaJMo62a6kPhGZhQ5WDLrj5W8t2TMuW7sfR33MpwoNGpm3pDXmD36mcFuWpnGaBxASqc1mCvWpJxSYzGt3N",
  "key17": "3cSpMNwBnHG5onkJRJrsBZk3wtkSzDVg49zpbPLLWdnqFFecRvCc1wAiQmZuhxAREajdG1rE1vPRGA76c9NxZ5Pu",
  "key18": "3DP65vUMrzbYo7UXVbrjELofwdg8qfpw2KmmH9cZ8kcQcfw98CxkiBD9ttjy33e8dR883xoNFdmzWFV4a7dwhfYD",
  "key19": "2J8DVqqTw7oEpAFmU2YyqKD9tkT1c4uZCYVksbxHDQvvQbnBbYcGtNT6JCmohsvBxmGu5WWt2L2nCjdbGxCpC35X",
  "key20": "HGRrRK9yHj8c2XEgcfeYkK35DYD5tJcD8FvzdntVKGb8QxnZBz5CuXmXVcvzEzYLjKemxAexdXAwuGbDAyQGxuK",
  "key21": "3PEfqvjaTTYxZo5mFanQC2zgHjkrPcA5s4rZLGMgkinD9xnU3x2gwnabFQjkK5jZJHez3eWpXjUEhqUZDYpatvtC",
  "key22": "2JMkig6a988a3pzTLF6z5u7vbEh32o6h6osCfNAJd21UKtiYZitafXwDD8bzxMaCw2LdvJdChWnmTSaP9PzsjP6m",
  "key23": "3L7mx4xGc3U3N49GRrgokziMKDojSMdE7K8X18vuw15Ny9XuWrWeAbrjhbFdFe9YHDjF1BZk5BgvHAzaobLG3M3u",
  "key24": "3vzQzGm9q2YZeueuL5LdjNXJVadYHkHpkK9AwmFgaqpEbP2NfUJqwwuJZgfkJQTXs77xiJrmQNGZToMixDvtcsde",
  "key25": "5AthEVJRQXfbpfiXNso1GaSishhLDLXeCZMBpjqazMucpbsjvYymW4PLMNeSrgM3BGyZiWQQBAhoACLZKy7ikhZF",
  "key26": "31Ydg96wxQzN1bJaq63fTHNLzdjLnKx9ZLvjTqg5ovQceaLvPBTKppg7kHZhMjjyQAG3sW3pPhwYRXckm8NEF74c",
  "key27": "2CZpjT9Lh8vW6ggiLHrDWCgDLUKuXsgcjsQiE4JnqKX245tvGQ6h8oj69f476QLJRngC4sJwx6v7gjkvmVAhTwEF",
  "key28": "3xArxLN5uUwgxbui7FzQxwK31UQZjYP6XCMGh6pu8xGr1qCETPV3e4Zt8EK1Wkm6FBciSSY93YaUn1UaMEJnL3je",
  "key29": "4BMEhMqLinRCGahDJdSBTgkBP597CnXYxXcDdLK7tp2MPgATHNhyybduCLxjYvQ9Znrs4Lp1dsMMXVHbEhjB7CaF",
  "key30": "57VA2nDeVKG5nGRBLnKzJptBQgrxCC7AzFp8aYNDwYambRoF9Y7cqnVaHTxHdPJ9eM3FUn3J72vwYqQJ13fZ14x8",
  "key31": "5uJVU3BgPVnZFEn3Ft4zz9FznAMKLr2FfnRhoCHB41vbDqgvkSas7RtaznFQ2hPV7QTvHqJdGYEjsrq9233Ge9UQ",
  "key32": "2M978aw8JSomAE3N3GcXPwambq9nKztNjc4MJq5UuqoX9UTFwqw6Qwb1e7oeXPJJCrizQQBT8aZqTdaWeoJDmuqv",
  "key33": "52ZDtseVzuNKDZTiPv3HfGRisXterpcfuiVj6dd7Lm2SiJciSRy4LiLHRTb1U12fzcYZH2aAUGFquhMwXNvRvhi8"
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
