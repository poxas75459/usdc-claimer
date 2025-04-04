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
    "2GbBqExcYRS2N9UChTzxNcu8GtzELnyDH56CFkg6QkperHsTf5wJUmXZiVFZr64jKX69h3FeRaaEmY7ciLNBfWcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "923AJ6NDj8t9kNNE5sKrtBSamec2BJbpYFPcxVEdPx38fPiUFR5C5yokh6xzWv9i1YKw1p48eutSL7gf1kcoAt4",
  "key1": "3aFjsqMQtLXq7tQKMwgd61rWCvjMYM6QYS9nruPhWKT4CKafeFXKHi7My6EsaKuZULMWAXmCGq8R33cymLgh9eQh",
  "key2": "2i5eht52J2ah1kimat9nwHXxQVMkRdebR5u6oJHGUCWFbXRox1KqAvrDtvvM5LABbvjLNhzZN7ok5y4iSnxQCTqM",
  "key3": "2J2RmCTBVmi3BZUgWKc8jV5X8z6ntewPDwfJnYX82qYpqfLKHTiqhnMs8ucK1M9q1rnqPzjF6xaxFHiM46u4UCgG",
  "key4": "shf1ZG5bMnpJDBZHNjCAVdkVBJ16JzsdZ5MpE9CwoUnY4zQSwfU67ufJftaKhXp9rJ8xKR1YrBgNws5WEcyn6Jy",
  "key5": "3R6of45kUEBRa4eTTYwu5b9Jxs7P5NPyW7moKBVSwnxhodH5oD49f2YwGR3XuRVwL7Wv8EEkjEm4Djj2fLFmG4RD",
  "key6": "3F5ow4W5UhMSYGXjP5DyyPhsQdU3SbHDPorJFX56gCZvTNKfdxJd8WGZqcQxuE1uUhVBj2dkZzvzZv4RecHnpS5C",
  "key7": "5PoSY2R9n3apdfJrhffbnTphbNbRiiQmSHU7hSHTc6AUXvDGLB6amicHKVcyEf4EWM9dzz4tDiBxngN7tbHJzR9U",
  "key8": "5nrqNLesvuaNx4Qu7ZcZsB9edH8yGguqtK1RKeUwuGSMGAQQtfg8Xz8YPREH4ERd1WodioUuEmxSz9UHtSYqezm8",
  "key9": "PHzUNEnoqCZVpKrHBvUueBmtFBqL7co9ddq3pmwHSDB8rRmzFKAdMcGLPkL1tbbnQWvqCB8s21QXnhEmTCNhb9d",
  "key10": "2UZg6o8DuJ7PNc4nhhfBHedn5eByk3uxfUTgMGgu4zDXQi9vRTgNkXtEF5oKX97yBBMR2ibXhZK7LCzvfDGRqzVN",
  "key11": "4vzoKWy2uMbyuw99ELbnCbwdZ3wajpQfY1YodPxjVSdF2St1r8eYwyeG4rrqfXtFeRz34kJycxTpRqTik72LoXQt",
  "key12": "3oh9Ed7fRMPG5Mh19k92ZumLqKGRrUpAnjmMMzcUqqBFboqL3cF2oka8SkdH93KuPX3qy2rPaRfKmiLU3em15Gqs",
  "key13": "5zizjXYZsywBg9eYVCzxtu2GgTqWkJMaSGN4JfMBcq1TThdrHkEFMyf68Pf2QKbpThat3Jdeq8eTDBZiLnnJMn19",
  "key14": "4b8ZVv5c2c27UnfQrmZcz9hoyh6vSpnYov8QeHEcLNfputj3GzrEX6vnf2j7DE6jwW7KSETFYVMnQsipfY4cV8oq",
  "key15": "2rK6u3iuYmDJeNBsMaxggxsKLnaDHeoFGen7qxjto9PqYMSNAxGmmBxyGjHkfexQU7UZf6G2z5Y4w7cZnh81DnAL",
  "key16": "364c5VxzpK7gaxGnUsnfLdwSWC8EZWmnc4tuQteMk6beYeQCwua2FvfnMfVhr1NjYKJmMfjQ8Du3ET6jjKWwPXbg",
  "key17": "nbosFoWpXxvKChTfpSZe1zJPmdZJ25wamj7MtdXDnWttM8yv8ig93QLohYnzN2g5TZdcXBsfqEBdzUeLzqfM8fF",
  "key18": "4vgRMKpdxkqWCT5PBSjKW9idbjT5Fipe9eZJzozufhBhCUQzA7hDxfisFDCwdWBB3GUgCfUUPzsArjFXSk5J9C5A",
  "key19": "2aj1cqro9VvJtyJjvHSHJt4UaUArbpVp6iBgfGsAmNiXhiK2Rj4pkpqKb4UjKLL2Pkb8MF8pRtnx8v27bjHP6juw",
  "key20": "EB3RHkp1CwRJFQkZhrF9s8wKWYE61NgHM2t5YPSKhPD13LYq3bLLiqALyL8p8z2ph2vfrUosZSj4VBaqwCQ1o84",
  "key21": "2iYb67v7AZxLTFWsxboE1H14Z2ci5rJbK59xBCwzatbKJKGiAei45SMDtetEWjBPYU9m8HM2zbXRH1cT3XPgN1h7",
  "key22": "52jDPQEGCtKYGDsvkcqAJnVVQBxhUm5cdC82vUR96dj9yhkjxJTuK47JeeJ5zGdebPadGMVhHjSSn5a1F34yQYtZ",
  "key23": "4MfEA7LBWx1DuiDtmpCyABnWR3FanwtkA9JGkem91A5RprMmoNo6JjFDv9oT4YQnUWQaBXMJY1zEYbF1NB2edgWs",
  "key24": "5XopdXx7VwJ2tx8SacUSF2ZpYNwKydr2TugjYXznUmfMxffcFJWCREHHgg3KeDQ5zFHJC6y2TpPR6cNDTdLmHNVH"
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
