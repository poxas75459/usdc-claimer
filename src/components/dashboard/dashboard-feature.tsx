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
    "5JZR2DWzyVt65w4Avh7C86jJxNp5QGGDbKyT7msnz27Wj6knLdcHBywLhhbAqxDMpwBuY54q5zTbFuWbfxYGKe9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53eFVj8Mk8o5eobsZnEu4t63T9iLA5q6UVC1vjonUPjVPx5FbmiVf8v9F6YYfwc5WR5KzoZ5Cq3o5APPvBw452cX",
  "key1": "4BNsq2vaD4otfe85ZgvCTwWWnZWCT8Q59nhBNPCyWFFePpiD9YH4Q7EFQ48NmiRxh8qq728gVxQupkeWyZ75dJBP",
  "key2": "5JTdbH7ffcWtKtJQoxhVGyJWVzBf1RFUmcCQUWN5x8hfUJCt7ky5kUgk8MPMBwGg9PDeMFnn1t7UjJi9n4M83zRq",
  "key3": "3rYBWJ5As4fRhzRHSZHJZfih2mcSh2vKctxpwTfZtJBnb3aTfvr345m5vkEDL9UdpEUd2fJoD6PyMxkgDU2BBogy",
  "key4": "vdFt7k7Fhdx8N9vbBr6J9fnGJZMXJxKGN9zsQPqKUKwVrJ3VUiakDnMMnwwrUHVgrqoEsHqcnuB8RNDm7H8h9eu",
  "key5": "3FqHHXtQAPwjGnrQeiN9GWKkiFYrD4bamQ7ggHjtHt9fb6NqMkKwRLcmXEtrxVgULBZwFLnUTKqfpcyqXz8Yj8f",
  "key6": "UE9yM1hgwg39Cg3PDiv4fHuvGDY6xkCq9Xpr2dyVb1mPkeURa54ptjB5KkiA7989iQeBppFwFZLfxEjj45FHn4k",
  "key7": "3WTxbs5VpZkvQ7kP3w9Jk8NDssv6q54iSaz7YKaqfzcrJ4nyEnvEPyHdoVHXJ2cQQFncfnLkXkRu7EP8yoiWk72P",
  "key8": "2U8AytNdKeuESGc2uSdsKoXzRqLc6Bpdo4rUi9pWm9zfk9i7qmV7FMkWdWiFZHjF3tXTzZjXocHNoTqQL3ecoJyJ",
  "key9": "3fj5YuZPbPDBfst3uWJr8R9wCG5jFtsDoLQ8MD673TN2sbK48Mm3rJMnKczmztXVug65WqYTyZU8RvuZzaZ1FCvH",
  "key10": "3tdseoPHuQtNzGrmpi9nrToxADjcGqcSksCZeGwTTbkCMwMHPkjiKL7pYLEKUr5LHnoDmNAdcW43Kz68RjBNMSvx",
  "key11": "5beM61X7BuHNMyeQVu4QfdsoGN2eCmsz8kzNGdhknFp5d1F19ap8qh7eLXhGhDWEGHk68zaA25w8FrYEs2mNMNUd",
  "key12": "2terJfdiFuPnMAA4XbYJ9QVHg2BapePWGyu3vgKaM2Ff8WDKvTNQJ3JW5XPAk5XQDpR4w6yFxqXtiK1t8oVVCeqb",
  "key13": "4nhmb7Zd3azi6yvGXRkpvbmYWFa82X1BEb5CybuphwpNnp59VUwA4kmXQmQetavVnNdqoJNTb9SuZcsCKD7UfcNB",
  "key14": "YbcVU1hFxp8dj5eyM6iLV9WxEsdumfUTmJcjoEhkSLongUX59BjMxhjxzeGMgWngbcAjzEuNXhs1iBCZEveqD8X",
  "key15": "83KJABWBn2dwVv5icg1sCGBz3qZsL3T5N2AyAy1VgVM22Tv162qDG8EK1MGuAZV8GeZ37Mr7vTFZqPuLrxsyZkV",
  "key16": "3jJGSn31Ea4RVtpZQPeTk61sKyYUzcotBxbLM5v4VJtSTNRqZ4ytCJ33FthW8b4MxwZgxePZSJ6n14XbJDy8uNP9",
  "key17": "3bN9ssaXwEBvRWFekTaa6G6Kw8a5RmVNTPgKyNSypeGffVjoQgW78ePWdk6KUxiDAQCtUB2dddc3CRGUrPzLL3rv",
  "key18": "3G8ue5mag4qDP9uaBPhfWQmgrLYACDrkihrGhmSLZVmtJFdYm9EXhw5u3s7fQgmSd2Cb7GihnDCoTh29yreknajf",
  "key19": "DiBq39jTWW3Q98mX6K7MN8XR8RrNaLX5igKfuQirDzuQHK7QSDkRBuPg5D7CLjwrc1YVdLtzXtHyEanzD1k6zwg",
  "key20": "4s6Hoc3sutJEe7mwEp6Xm7wt6xkPTkuGWjNL4KFccY62tBqzY7XXS7nm7V4JCekbJZ235dZd4iBMxyTCutf9Jeme",
  "key21": "4hu2LsC1bpLXC1E8xXNvFocFyY64j5dBj6hDJaNUWnqU178Hk6HMbqTFHBK3pEKk1jHoZpDdoq1AzNYAwkwPDkYv",
  "key22": "2AKGbkxKEkVXpRsdJEVLW2aShzvBEGActR3jVdmWoCNWsqepYxkzmHmVHY7B2xh63883skEXiDwzezynYDAcLvw1",
  "key23": "3njbE5vQP5qgpLrzxWY69EhtB5DUfwGSg5zgSmJWXTHWCNdbPkwuwS34ErudM21qNEHiJZ7uhFP1UX6o8uWmF7tE",
  "key24": "3y3uE8VSDaHJzrEKeberKXQH1XmpneYs1iccv8FsJmftzX1eNYLYFVX7pCeTZH1y7LKGBF47ckC63FaHEBVkvHbt",
  "key25": "2m1cqBKTEPWW1SGpFjchEpx7sHUFrnBuGeB9VRA3dfCP4cZFUq72iNCisrccNK7VF2dFZaZ3uhJzsQ9ADjJDTo3t",
  "key26": "3yz8gf2H6DSDGPSRkEyHNAKAfaSYv9RoftFGnFPgA6MZPb3xzfpkwaJCkPX9CX6kCVsbDn5jvz7dPbG2BMEvahy6",
  "key27": "3BBCJY3oikmWHQjVudahP75WW8pRjYZxQLo3TQUDNKjSPjAz6ryzinUgjQLZuXBfqSTzx523yaTb8ZKasLBcsxfL",
  "key28": "5a4ZE9cFvjGu6Un2RpY5uPnwUfj2NSULwr6UfW42Q4oaHWPuVDeUbd3e5h3LX3jCFHUm7VbCVEmJnmWUoGgZYZzr",
  "key29": "3e3NLFeAqNeeKMcfQ8p9rcRKzhpKbxo5pRqad53TXagUY4pRC4ZBdWxMmXKgCJiFW7VwGxiyEQk3ab4HKbeqmT5P",
  "key30": "3PHauCuVqL14CM5APk3JmLZyCQ1nVPeR8Y4rg5b4RRwbVzUw7JqabEkhrnypo5zZaA1PFawiodo8zaDGdqBe5kkG",
  "key31": "2zBNtbGtNgqKHEvP6qVfpsMFrP1Cx5ooXVZxGVXFPwoTJfjewSyUrMFpUuvhZndcMhxY9dPoSD6AWksYDA8YaaRx",
  "key32": "2qXbourBnmpimdvE8zw9BjAoNRafKHWvJSmWyQ36tR43yFtKCWuAACoGau6Wq9Q5iBHTN9vvL8hTFgm6KnkkfLvv",
  "key33": "5eSNyiHh5D11cA4yYKP3SEvrw9h3pqa5eThGZq3mhAdVWZKf8BYRxmPK9N9kYTV3poZFyZMV23415cnW1v1TzaJT",
  "key34": "4efQt7D24gUgYZBDSmfvUuY8AMNpa8q67Mv1WgMwxYDntUEMFFZnZLn7TB28te13LkAkG6jRNYq68wXYtrXn5Fk",
  "key35": "3wk8mUyuDSfTng5jBTXMZqVhTyHRgok3pkvBUhUmqoEv9DMftGJkuxxWXEuas1QCBR9dNFf4iZCNTY64R69NMzbH",
  "key36": "4T77FLkrUYZ1h6xZLLndDykS5DMrHtmc1uaMoetRmpNBGSh1Lvor7eMiTChz2tuvJY4WJghbpZHaZCQk6ChqeKXJ",
  "key37": "5hvJx2Fa4ojeg6eUJ3evreLqWmJ8EaE78YXPSqyv6gHysDMCnRc4i6eo3TVPdsrQ7GaeYWkvCj5W6yekwYKdpyY3"
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
