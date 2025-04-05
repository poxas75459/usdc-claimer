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
    "2yrTA3DV3cChKqMW1uG7SBqk92qK4SwjWkpdGtHJbChoeLw5gw24ssAJBaU5ByqULb71LUxFhu9vrrWNEban6sk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vY1UzcYFcwqQMXJazYDpfsK6HiRF8g7Aq3kRjp6BTiAHU4oS6xe7rsZwN42yRScKZHFmqcxQiVt6cFCh9xhWriX",
  "key1": "3Ek1u5GaLXApU3ctn1yAK7XdwzuUAwzt64zAD9MdfrDG1CRgKm6hbFwTnZXdns2tmhC5rPiGN8wq6bf16rUT8LUR",
  "key2": "BmjeA8m1UWnWtm1CBQUeQ1ChKm1wLzJmv86j1GBt6aWE2DUruc3wHMjBbtf2WVpiMT5VNxGdyYLxAeCiihSeE5q",
  "key3": "5HuxcnFDo7Jtn1DBtD69YmutCuZXhqZMVCR8AiAj2vWJi8UY77jkUFmBBc4D2oDLDyvnNFWF1YJLJUdGXvsjepgg",
  "key4": "5mippCtDM6sxkAMMqnXN63hTyKtTqhs8wGEXS3NGjXox5C2t4T69RSpVj68EKFCCD2bRadTdnKpP9o95SjbCwvvN",
  "key5": "2ZmMvH7aBPoj1KwXDHcYQo4EZCq7wzjiGZq3BpF6ouRjSMKVQSiK3gKvQZtqmUA4VEmvmM1xUk9vu9ogP2vpuybV",
  "key6": "2SyH2PBjkfGp3VpyEFeq71JS2q8f6eCJoHyQitga8fYPzjwXkyVqJHnnfKHiHgRsLHMKYrFUU3FmxKm84owt41eF",
  "key7": "2zttbjiugMnA5AouE7G2aJ7Jsrg7isY2NLtF5Xc5a76dvGYkZMtwTBt6yRubWUSXtj1Q1vAzGhR8jadFEZEJSgDi",
  "key8": "26BTAfjJBJGWwhDWC9Lwq4MpVixo5R7VnsjcA68qu43KFjqBfviZqBgfMjARRvnRTJNvQ3TL8byHVdevbCtTCkM6",
  "key9": "57H8JK63ddKQUvJmk5V4bh2hgD2bbUhCv9t3tDpp9ViyzwA5Eo4AMMosASZbv7jBpdX7VuFdVApSuGMWwz39E66c",
  "key10": "361hRScdbWCQtqJU3mom7WVgLmqFXTeFihgt8UKKmeMqTLWYc9hgdVaF3Yz5x3od8VX6Fq2s1MYkY2VF3FVgfFdu",
  "key11": "5YTHFdQBgqCoiGhRcNfffgCCrHn7WH5dRyJSoJCF2CHbhcoaCGnUcQnmSEqzkw7Ee4CiMZkG9qHK3fnEsSXdJoTy",
  "key12": "2pfRqgMZrWZpXzv7ytXRYvHsfbEHgK5r9TFT1dJbLsy797zUEzRfC4mhNEcxPHox8MVPJ2vTsPGB8HeU2fwpVQo2",
  "key13": "5BvcZa2zLVbomB6gLMLkLKHKHNh7aEXctv6mAisTh6EB2nN6uXCKe6QfdHJ16YLkN7V2VvgNv9kGYmswVBHoRHby",
  "key14": "2Qm2uRJTznMdmbzhMiyUi5tYG68736NSku2mbJgiuxCqMSDwpZFh3avibR5ShvRcYSbjQhKH7RraQS1VqqnGxV97",
  "key15": "65Dp3KqwMhy9LRhK3Kfx2aeCSWzac6LWeRj7xqoWsZ28CTMRPmfokPsjG6ab45fw2W1A76YtMpBrwZCKJvTUFAC3",
  "key16": "yVy2P3FmR9aXqpjWXy4nM1XxGR843E7Cs9tELspwFGwt4KMeaXqvxNvbgqD1J47hhfV6jtp1a2cW3pAaUAaxvg2",
  "key17": "c3xfLNNvxDEAFExQbC2QR2upv3mJc6bkpWNxZvGtqqTnW8ta3k5YJhUwRzMrCh2tSrckaPLXVbeYC875X6pQ1gJ",
  "key18": "iVfbCgHvDWbFbbQx8nyabeiUdJ9eqgEGodyLGaj5m3Q3HWCXgVseTBsmqMmWkV7t2sYg1naBC8ZFrUKpcwAjM14",
  "key19": "EVRZPVejPKavvzqzuD9pu4GLGMKmNXf4JSoYDgXUeH5S95LY27e1q9sKa3ourEeHuYAva1vNTCKatVnqoDHEz2Z",
  "key20": "2NMEgLLb7FbQLf5fEM9a51fVxFcdikapT31G6qcTyyXcEtJCwPtwgWcnRHXqswSCU7mGDCj2Y313KV5iG9hzM8i",
  "key21": "x7d62j191nHCCxwT77h9FpqjGwmmyyu9rQ8mBRpHA13HCwkwVsLsuBuxtqkTuVfuEYby3QDWJqrfHygjJQtzbW6",
  "key22": "59P1iPubFyBhMC3qxEPboRZKgKNpxdeCe9Jtabm6i75NmvhDd68JPdVXdJ8Cw1LhTPrK3iD3aPfxNCeVqNHRm2o",
  "key23": "3N718zBukinA4hLCUFHnxsh56mxyZ2NGSm4fJRb7AMDCtd7sgyTF6GRqFgi1EyWvi21q3EbzzryAYFdY2sKxz73Y",
  "key24": "3juJpdULo2uAk8MWn6m7byYUsjhE47eh3sa2fNDy9gtzs7BHKm6dMoXF2aoNsaMBGUjnnW2v2Q2dMdHTktetj7im",
  "key25": "2L6MSzHW4dXryRTYrq8u1qAhGDpsF36p8KcVryko3zTtADR3pojaqDnfAYHrbYzLkzSNF7kwexDmrzuvnWv61kWD",
  "key26": "4GxxxE5nyowXmaecYKKVXwNLdyZN9mpzKyaeypwXPFSDRVzntrbeYX9HjvPyczpBGYaQ3EjFwMuqHdgviCrRiLZ8"
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
