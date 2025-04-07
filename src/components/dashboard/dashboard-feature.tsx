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
    "48c4WyyCby1XE9KXWHKbvAibcthbVDR1W5HNr22XLkviWQddbEpQ1jPvUX6jqvC6GBte9kczYerLVGUUNiWt2RQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A4Q2CXtXWA891Fz6ATMATjxx78F7bPpa9vPtpABoHrNLH6H4VcEi7UFyKBBUwQ55YFJ2HQZs4VJfWoWA3rfvcK",
  "key1": "3cjzNvdhRenMEmWS7YfoVVCtcnHF7GKisxqySgVi5aoXiwaTMQYA1jLAbc9Gb4xYVwPMjB6Qyb74LvfoTQ4eFaER",
  "key2": "2E2y4zgdcWUfeQWUMUr9HaNu5iUxUMSGFudcBuJhgTDG6G65KWAPHhC3fK276X1DNfyscLZNnNaNhgznhUgXmxpU",
  "key3": "QguWq3WVi3BAFBb8Q4K87cP283QARqeaNvtWg1te247QZ8vRgtKppLypBUXETEJLqJBAyc6SSZTxrgKCbUXSREN",
  "key4": "2aSRWQaLK1nqsQV4tEQsgickyk1tmeEg3hbVDFx6RskMLkbfoPwtN9FP365W8AEQU23dXvzMKg8FhzHUK2M7kbJB",
  "key5": "3SYc1MCUbiw8wETkKPKuLK6t4PfP9p6F948hPViMcUvqM4F2SaSPdMfMyMW4rjiQmvjtXJHaV7grSXSUk55UoWca",
  "key6": "4XwiRDrxMBu5Xo6wqPVtL2Cq7zvZRXjMfMtY7DBqKYmvJGFXfDavx85EVec7wrWth2xaKRQkGKByiHWZ2MU3LtZd",
  "key7": "m8NAiMfaLggAXnDoJejteyzjXy9NfhhXpYSAx1vqig3JrXJJkBfxXrV8hKBM1RTPe68qH3aYCayRcq3KChvkd29",
  "key8": "54BRKLXDiH1MSr9oXB5dums6tmKX4tXcjdnaAZuNAuPWsn6Prb19Hqo5BvDcQZN62cENNk3gVm4V8EeWHVvaLx11",
  "key9": "3BPypZ2ufP6XxVbbhwmicY4xT6HN61J6SvKNDd52EJyWnKHCfjoL5zBTNMZbPMZCCNYBwjCr4957gJqjASdFxKmZ",
  "key10": "3jFgvHb4rZSEkc46khLqXi53yzmkXWkxafXpzrNHW34umpNgfGSzZ4bFB6wua4V1idQ8E4pc3HSNxpmeiMcT1YJo",
  "key11": "4hEYhwbiisAkzQDz2eGqxDZzVpyQA1d7YjSQE211EHqjBYrnikjeF9eugxTgBoycNEeFBWHfHyB1ou9ZbZCwub7p",
  "key12": "5ZTkSPBDxEc8gUoxGYzhv1Cr5izwPQZCVmBRjuWBWX9y3aVUB88RYbJ93x6TG6F8Tp5jSxkET3XwkAaSQpLGpZJ6",
  "key13": "dyomzm6GPdt7zFj3SE5u1urxhdWJp68fByWhaL3Ufuejq9j69NV9Tpz8QD1XoQSveFAHL9JnNfLKnh2vPj1kRqr",
  "key14": "5d54kq4DqtFQota84wY3aWPdq3jwanV3dQqNQ8b9SGZAQdDPVYm9yuaak3JAiLtgMP8aZEp9fXA8KEzi4M7RVttF",
  "key15": "3W9NWuhNw5K59msGFjm2Qupgx4KFkEnApcQVA8dMyPy74AKRmb48mZUBFvDnVGfQGSKQWWRb8RD91URQmSteYT7B",
  "key16": "3RtwPyUKFVrNM4kHNsAsvM2Gtrm9Rhw4gwHkcNP9BWvxom7hEQPBBkY1qkZ8wSTcqSDPSyXqkvgrGBbGkQ1MYi4A",
  "key17": "2SmwLxjSXhNVRiYQhYLP125hZTioR9pvLjHpXiUEmgJWfvUdQZwZhDuySTbYSzBaZteqkh21cLiNwSFxXAoVBGE9",
  "key18": "3pG2PLLQ16P2Usjpu6iBbTcnUo8qT7L3h5KvH325SLxpvWhCbWuy5AxMGSCKnpygeXXcsL34KXfMWniz5eCXLzsi",
  "key19": "4XMAet8eijFriHZB9wgS99T47AVxQne7LKL82jSKhJLQrsWswHNxst5APCdWKrCnua85hjdBWUAY7QPQsBNrVC1a",
  "key20": "3qYks7fBJ9vqedybaMNYEYFoE9ybmvBFtJVtMSfWeKR1qSTUctoX5rLkxfgycwuUSPfJqELHdX7xj85gTPK6iRbQ",
  "key21": "53hfAcZ7KVipdyqtpSDYUvb7hxuD2qX2A2yJ5KLdKxpqqgiW1qubN4HmGdhhx7kAZSSX4p7hGxcy6xoagf3zzCLc",
  "key22": "5evyX1vgsDstcLJmWchKdUS2KKhznpS3QvhrUgGu1rGLswyN1DJH7jqAZfzMqYi1ZbgMVZya6AbjAguiQj8oJ3a6",
  "key23": "35CXCXyaDCXzgT3G6zbY6ZqgeJmfdnkdYdNd9Bq7Uof5VAPBByXGuXRdFuU1JqCoanHDxYJHxFVkPzsf5Uj1Q5im",
  "key24": "3BunVPckvEddFxxVZWNM8PCACRnzm7DDikBPMoz8zTs7sMMmGKSbY3PezpQNKvgF5DfEWDTqGwWoaPtTXVfP6EhL",
  "key25": "a8y4yj2cWDHSyB6ANJ2CV4DbCJaj71aicQCnpkLVS2pWrr9mfcocyPcHA5YMQGU73aeasvjgMtLgx6zypf7oSJf",
  "key26": "5zxC9WWCZHeYYf8ZNipfMBzdAZKeMydc9MnHt3tRmxdJtvc7umMYqVkDcv7Wp9Lc1rPPm1gnMqUUSxUMkA6r1wt9",
  "key27": "56zoVEJ2DVzU929bRaUKaNvbXRRT8xVaf4xNZ5nMeF4dteWCyjFasqUijST21fNyCmtUWk6Gkb6EHRYxynQ3nPrm",
  "key28": "4QxA2uJmkHJ9sa3daeR3yrCXrkFven8bu1EyfgEYnTR3vwdMDRVdqumnK3f4X7voo7ffqeFt21NxZvAyDFV9v3mo",
  "key29": "2oYgN7brkCe6352ACbGr2BVtbZ9XV96NckddaXEQD8JvR5NyjdtS6R3nSXbttPpimrFUwXWprDcn8qH4mtXyHtFk",
  "key30": "2UFXGxkiZg4PtYNp7gECzrFAT9PhQWUkd9mL8KjqUVXuxQBVRigLNvAwznb5gXrp8D9hsPS58kdiLEpeeKoZNfwf"
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
