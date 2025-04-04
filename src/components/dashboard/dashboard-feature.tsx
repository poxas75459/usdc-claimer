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
    "3QsJxqzwBGgJySMenUYCUC4s9FN3odPNjZYrWMWdLsgdfndHTDZzfV45aziFFMXNd2rPxGPhDHwbwewiq3hwYgyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsbLDq215Gt6PodTE64KHUEpFkY7GCLDw33Cogfse37qtnZyqKSy1nWXzJ6KxdvApKqxuQXR3dPrwUWVvB9QSba",
  "key1": "4oR76c1LbY4ik85jJFWkTEAh2156gxipzPzQWHGycgq8SQzaDUJiMwJdQtwhXKkAy6fCVH3wutKahcCykmSSCa4t",
  "key2": "47QUETNZ7vGT1uEVcL9kwjdPJHkxhvFMy4YmUCBpqw91bb1rENUE3srVVnmHQgpLxsSBinzfW2ztCkuaZcF2R9Q4",
  "key3": "3fmd1MYwcyKgB455K8jgA7ppEPcxZiQcjcsqUhJcMTsztCsFt1EhcsQPuyCwhHE6ZKXe7854wjbwPfQTtT1J3hLs",
  "key4": "5FuKdEhsUokF1aqjQj3FrSAMhui1t6HyEZkoBaTXt4KVg5tJyW7gTHfivUERyb2hXwHHh43vzL4qEVr2pmmDctNF",
  "key5": "3SoDD9oVenPpRH38ZtSJEvth4sSsmoujp6QpKoswKAY85Wr18o6XrwTkEdefzNydySRJ2b6PMKeBrua4yRzA4qtZ",
  "key6": "2iuMdRr95q9XqEAKMZZBUBhjUKkVuan4Xrzc8FgV1i9iXZhrPkHpqve7fyN6KtjL4jbKsa7qacjNq9S6ECoHASxG",
  "key7": "5hnMmV1Ywp5WXBkpQ4a93BYLqGzTTbmVLbBb35uoZh9gLSDwnn1i2aBfjvzqKr6g51z9gcM2rnR6mHD3AXekiA7c",
  "key8": "2x74VTzF2vjLS3Dfx1zp1WdttdUi3ZQJbAtxQQz8qydhoU9Yfvq99D99QBMvoyNFcNWXXB1UaAPa52ACTzDZJhbY",
  "key9": "3QJao6dH5VD46uhtB7m9osaJh7grRCgZDDouLh5crbouVFfa7ynci2yzT8NK4HniSqP3GFm4gk3DcpZYbA6XqkGF",
  "key10": "43qoTJVppNNajUNtepcDSkDRj3yWd4Q3ryGEeQzJrmDuUddV3FZmXSTURXtC3gQvrPFLnuzEuUNpAyr3HrrhXbs2",
  "key11": "Zsap3Y3LpL6LiENa973XZ2GzcnuX2dZdHFKXWtkZ8GsWyshmdfNLwvsTeaw7sFgkCpQQqhnaLX2WW4oCjrRbXwH",
  "key12": "376CzGPQgutJwAnK2W1hQgeeYReSJqx5xsk3euFrPxZ9wWXKgfjM4nji2i4EPmtT9Nq975s2EwbQrah2VHh2THCY",
  "key13": "5uj1kVq8jXpDWdPYJxXjVdrnhtjKgTuRekxSrU1ySvsK5gVvqhrFWx27VJxhhvgzRVnbdif15MRkhW7gxW4fwGpj",
  "key14": "X7xoQwHCjMYEFz5n7bBeqheZU1WJDMH6V2okqoend6Z5ymE2AnJmueu7TQzFgcZCxToeUxTcKKPtL2tPFrdVF8X",
  "key15": "3UZdZJTXoqohLHQ2y4v22J63pqvGREQm8evFSgiSrRWJqbqpffgkdYkXUUaFUZYa6oono1pCcBHfktiEKP8NT6PR",
  "key16": "665wu7eQgieVBdDNw16qMrj6RAmaJp4vwMQBzrmp6Tvcb7aAU7vRu73ZuSuJnUbLj3BxQjMUhduZvSEos55YmQN5",
  "key17": "3oE2Kfjwipskpr7Vw5Kwv158UPxCFkaQ9Q5FKKCwSMs3nuuXMe4KfQ27yXvZnwwknaVmFKTSjw16KjTioEddZGha",
  "key18": "48dQUNnp7DMqq7WpCcoCh37NQyi9L6H8MuuWgewG4LrXxxScgJZhud6UiJFYNC8sN5H3dErkecPwnM2Si9BNSAmh",
  "key19": "4qJkvuxUyrwgQMdsohghJFCnG7caTU1aDV2kDQPynUrPifBWQRTE8XXEX4EbnFP7P8S9iL9TdxY6ffn6GVmVA6BW",
  "key20": "4tb97f53FJf1aS9QPFc9oJbQtLGRfmUpDyhyFQnQegeaRNN67MvsgTnZAje8iqaLvxjKHkCjsRjF5t99uvd3GTrK",
  "key21": "byu5AM9CWVZRVu2vB4z3b2eez8esehFHMyCYyxsmdRtj2HUvnTqWtVtxYi43rhKnZBcpDxTZw5sDJPMBnGJMoPF",
  "key22": "3mZb2w9EjajjKdee5esJCpBmHUCg6S9w5NSc5xngzDJaoyu8npvMWnxNvL3K4MkBG7cgUmcmDhpc9v4WvbtWoCfX",
  "key23": "438XP7KQoRTdYVjkCRXo2xJFCoPbuMqW6Wc4R7xjhpLxdC2312bVhmPcxGhv3SFRxj6EiQiXGCW1cfci1SPNHUv4",
  "key24": "2Jhf9ZRY8bAehz5m3cgSdRuJ1HAwsWf2mdaq7dFH5hiy2ysVyw4XKSxGQHJF6L3bSbdLoSe6c6CEQNEZ7t4ten1E",
  "key25": "5KYoEYUxYoCYreKeg5TcyYKTdhYynBn6F5LWaSCZfnjwdHPW7JXDc5Zua4GsMNdd4kaxV7CCvBvmm6hAXyMv8HfN",
  "key26": "k1DsgRXnF3SU5FgQwm8btSuPBQwShkdQ4BM2Wv6s9W3RRZEuz1mGi9XWUXqHTgGcs6XWqqphjxnqk78GPsTpMkq",
  "key27": "4pozV7H6oj7ZABp1HZKVCYtQyFE6kPki1a4G9846p9y7yYSMtMfMtnvH9TUPt77Qcxzz8W1uff4Q8xq1viG7FTxa",
  "key28": "2U2hL3s7JPZbhdYKt5jyaCBPL4DjgJwK78YasqVFYQfodniMu6EcYAYd1KFQ2C7pocbjyM1HUHbRrfbW58SLZPJU",
  "key29": "3FKrriUTmJT9MYdg2q9DAka6XTxzodGJ2NKnDn3rDP6BRj2m7LNf83bqeUChhyuDGgFa18pEPkmJQJJz2ia38w49",
  "key30": "4AAGCnbzC7EjCnWdSzGdh8CTQkmSNoELqrbzuxfvkYe4BYc7LwNUpYtkv4vW9kMsiG4ZLcEFfDWvvdtUqcS9ddPC",
  "key31": "5kngWkBvdfKGqEkNAV5Pi9kgfLbvtyEB8pWgZNLu9ZJMork9n9E6WCiJE3j5H12JhwfVedFhP5QCcahY8proXhSz",
  "key32": "Fm3B7D4mmEH7JdyYhGBeXntQYB6q7WDHwMRx1LSdFBwopJ1DZfQhpGrctNfZs5DnycXEroXKSC7kQPJoUbWXRcM",
  "key33": "3sBsXpxKGUjLkGXxsNikutz7Z4pekPycHniFEHRxiJEgnB4dyBB9SQSCz3vQvgxRYkmjekuWLYYdwFnmRgvpkdsG",
  "key34": "2nhDh2rEiXT34FK65qcNHur1L44UD6tU9oKDE41mjMrfPwz8ZpBRfFFjr5yZnwtZ8LhBZiyCvr7ySKawK6KizkpH",
  "key35": "64aEnkSxXRTk9YTzW52Z9t6452Zb6y8jpGByqNzSqWuVfrzbazNnBxaN5VwjiYkN49M6ognJ8oA8n3ojKdsbfL49",
  "key36": "2oxK8QuH7a5fMM8kwb93FGVb1YDidUxHqpCzc5sVfCsYJqrgXGtgLEq1smuZ6ES1RHgExsCou96GwVznDQKqTnaa",
  "key37": "4qw4ZDyGwgecpyh2ZGJ81e2BK4hr3YEdxjSv41qSCH8BH294vhnH5Q1tR8cMhVUzFv27HrP7YKCxiLWpnepMZdvV",
  "key38": "3Nfk3U2WhAtEABNmTPfVqgC9KQh7piYYRB3dWkGFvxJS1885LM2f3UxyWV6NixCgfUQPcozzJVt4JQUvz5sszY1S",
  "key39": "kfzZPA1txwoDkng1wp9zRt6dNaixqgAfTQgKkAbGLESfPV5rWaue6z9kfWqe7aHpMktEXEjULdoPLgLtZRx4vnJ",
  "key40": "5GuBbfsrxrNuML2D3kDt3SVQhvFchfb6oHuUdWMfaWxrHT4GgELtTkEzyoeB13My3aNhzZUKz7FPFhy7Lq8LJgwZ",
  "key41": "3f1wzx7ougoim4gAWTnW8Ub1JEEub938zBzBpVubU1qwq38jKxwaBcsamBCzZfWPRjtCXMcb1QKyz8nobB7WeMVy"
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
