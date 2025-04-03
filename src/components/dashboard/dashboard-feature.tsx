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
    "4NC3zq8S3a3XNBaG4f53ntZN4Nb9qXcXD5489CcMjGRfLJU8crDtAHSv3rtXGoZtFwzZCHgAFxXiBeSvQbh8fvfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vzXy9884DrdexQ8EnTXQFSz7WHNrJisuHfigiDwQ6yVoYSANCU8F8YhvW9Tm2eHALn9iX1aTTo7uvVuWiKYTjfj",
  "key1": "3ruyHW3qMCeVoxc4EadgFVUpR8RddEW9STzoC1reYfsUgFFczkrF4MhasWNKQa9oYqc4Uuv36VKafzWiWDYnvNNH",
  "key2": "5cU8CenqwCVzDPVEkT33icchaXDR2mhx7KUd2NVHi82Tn92UG1Ddv5ddqpaRbxmBvXmFaqfRJqNHH4m7EaBpc5Uc",
  "key3": "3XV9pJ8iFoxAQW4cCVVG7CbZr4twc46rS3mkhX5zhyXPBpy3bUBNnoBULPzHtdQhy4ef64ynPHUb5y2xniPVjJDR",
  "key4": "qnEwqCHt2Q7Rhc2QFAGoBz2vPG6vC3vE8Dqr2TQhWWdn9uddFYDHjB6kZpViYWk83oRDhhppjC8uDQW6jDB1xMb",
  "key5": "2LpyRMzKcUtkUaTGAF5AX6qxrJ56kKiMMjSC125Ki5ZWpSbyCiTRBPqLavF6FLqEpCVpNRML7sMJfz1qBZPgJSjy",
  "key6": "5eapYMSqhHYrqmBrhJ4VXjjjN3ezLie1NzCAgJsdLQCNobVkcTza6z4U7jD5H7tYb4rjfVUFWxS2F8AtTmt5WJHJ",
  "key7": "2qNu3RappJZpmzjsdjVfwVscAiMnxrsE4VyG5oemFh5a81cCA9uH9KZqiHusSTNFcha9LdJ451CWFMaJF56NSbQa",
  "key8": "3V6coGptckyaK2dsNaWhdvuu2kTGdwJX4cd385fZEDN5bc42YhkxHHi7wmbqyWxxwTNGLypYGSWD76CXgDfTVPDB",
  "key9": "5CB4RSLzzGC956ajKxwuWtpXpyXka3dYDXgK5Epy7EPNpPk5aHgs8QdgGBkn139yTCuzeDwAsh33cziRvVyiWRGT",
  "key10": "3tzqz8HDPoHVR3TBVrkvgZbcBQx4gGnuoKhfEc8fto9U7JssJLJWncwawjrc9sMPSLyqQ2xX7rpG3me3DHbTHiWe",
  "key11": "5PVCFsULBBm1oT1hxkt135tFgCZgr73u9MJGo3xY4LBcVnrYrGm2RMr1JjC2B1nMWrts9Hrn58LmpoinNkejWKXv",
  "key12": "2PawFaHnTEFp1K9pxHfQmSS5XN8eTSSSDYzPNkwj3VzWaDS9apgVQqp2mhZTXEVGKpXnQjZhnVQw9PbJULZNXeUd",
  "key13": "XUU9PzET4yGAhAzrjqZP4eq2UL4UFkBueKHdZN9DMGxGpLRYWRC2GyoChhmrEDhX35ggrxwziNzQXqPZShq7auK",
  "key14": "rNzwQSVELxsqybTzWe8rA1XAQTbnrHcCz2YnpwRTrZ5BoYdRs2PWL6vhrnjSnL7hgd3dUXtVU5FCGEZHUJCrQJo",
  "key15": "2uGKWnrP6ipoob6QqUzSd5bcbN5seAFSVvwxr3whH8YLGhFJt7FY8LXk3yuUPTRt5chJ9zsj3fqA2QUTeQcQL45u",
  "key16": "cDszndBG7gRRh7MHA1ckgfELdmdgVKpr37WNXiZbWfgCHRbMNHgUL4oTY18kRq9dr2eLTtzQY9h6FrhNFW7YdXY",
  "key17": "5nadsGqPqmeW5FD8m3eCaDYJiLBqLs4BgS1himGbfSMkcBzPAsqRnE4XNMrqMarN1PHAPyw2Y6UJSQZxFActvNEw",
  "key18": "3SJnSL3P9JWZKY577S1U3zmQM17Ts1VrkiX7XQNkgVjaKvzVTQXVcBPPe7kUZd4T9tiZyLmuWQSqNoJxTCw96Z8N",
  "key19": "5V7aMA1bx3Ww2Lgk8D3o2Ps4q1GonTBtUPVeJbpJtM9WE4bkie3Zs7ABfhD1YbtWUbFgooUCxDTdASutf5A6pqvf",
  "key20": "ped2N4Lfez2HiMZeTkijQT6DzmiLFzieoh6kQtYLqvCzsiiWKVgRvXXv4QNhrKWcXwiuWu4JjHMrR5dqKFoJqMz",
  "key21": "23AofU21jsTNB2X7sqKnRrtSiy9SUnGMZnhsat28gAfLKgNRVhaD54d2ojUjj2cdZF5UWYCyzovjP3rXUXVKxaiG",
  "key22": "57AWKBtSKRMeYHwAfdXrTcfBMtYs6J3cVzgktUqCxGNt53mgjP4JE41Gq5qVcWGj48PipNAd78RXYx2pvfo1CKr1",
  "key23": "574CMxuaxY5ZWgLodLkEdy4UrcZLW7uzPBW7zd57j6Qcd4M9XE8G6zhmrbyajdzvPPZZkwpwJUUQN9JTAb1YScko",
  "key24": "5YEcYVv4ws29WFnTcakNsM9ADd3LwKy7WnfDyB8AM1vGmAZ1cojxaXZvnXKLUjGd4vmiRnbwZcJVRPUJkBDjyMW2",
  "key25": "4ni6T1mMwGGYP8Bpu6dLc3f2K3w6sMvTJhpFQn2e8YcdtrFZv9FiBo4PKPDCFuMoyeBtMYoENQtbpLUfzE7inEn6",
  "key26": "4GqvXyYzXscFkK4bk8t4cHFu4zgW7wbwmaYceqpoCKR7bGRcpg8FZ1ozBkbHFFEpjjZQH35j5xcUpV2qVYYJG8jE",
  "key27": "2u228GVgiNEv7kR3U83Q7iiQT69BBMKorgs5SG2qZEwYiuB2KVJbEoKzCvh713AYqZZhe1bt3FAeyViEq2A2uk4q",
  "key28": "3KLWjj2qRXPF7opZQUY4TMDY4X2YYah9v7V9p4JD2tgKxfG8FCnAg3nTwjuMM9XekXB8cmw1K51DtP7DmHi1xwNx",
  "key29": "3bbWEa4qcvQ22PbKZoT4AmwmLcpgxeARLYnsRczU38ayLRsJfdaBPMsL6xM7w1XABjoaqYPQ9rcZwDNoXWVjAT93",
  "key30": "5LVngzbpMsBLaGqcz9uZc5mqSa2MkxbPrwetF6oYxCGXWDGKyoNEsBccHbTaUPKXc7RbrpQgJNiKgr8uUcArd12t"
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
