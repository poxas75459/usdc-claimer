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
    "61M27uzUFxX1K2cJxuP8A1s7VbxpJ11wrcdUR9fBKxDPgLqsaCKWBPvhLmoo2ZyNjrdcEZvmADMY41ZNBHuhBUQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVUB2CZzCfh3byE2aKV2JrHtwLs4ZotJyxta3PtrEFxsqeRSAX4qwroJUqsa9jkAnriXALUcvYsP6v3xfqNsU85",
  "key1": "3nFK8MAnKAFD53B5FuW4NCu3KnL8pgAjrbKwW8rSgjK4jYAHG3cZY5c7gLG6sycALHdPZ3Ao6CpJ7zmZdrJMvCPf",
  "key2": "4UdyDEX3m8Tzzx3mrjfT8Yopv82oDPZ4uhWWEdR9piPzGWRsMVoxdKUdCRN1equRZknBjpntS5HDVKVw1LtNCZpk",
  "key3": "4EoY61ufwdn2DjHCPtkw6dKjwFC6d68QAwx45dQ4um56R3NfzMYpdJit9GdbXmD6j9VyJ3Xkj76KA5dqP7cfSEjA",
  "key4": "ouJNcJkf1Qq3B7hRCcDZ37tvm8DNgBWQnUkVQCfisMksWZiaEVP4ZwGg9BGT8FW2Xyh3h5TSxKQoZJ8btyU9ugz",
  "key5": "3ce5CtFAsS11zDQe7MopNvZir6pjFMHMMk4gDj6jqhCLoi1GY463qLbHkZnxRMaaUPGEEugbKNPv7WfmDQCyaG4y",
  "key6": "4j1evB6789DzWnbAYGu2Gk7FTqAmQoYA6yaa5FHaS1i2K67itPvVAhRdCQsu9SsDKLs9nLZvGmNgD8uRNqTMq1rJ",
  "key7": "tV2VBrEMRjjy5YiH3bWHg6bSeK1s5LTsRFPBpqpv5UiMSner1ARdQWzfq8fNBH5tAYWJyEHi1UmV2WRjzFyf1hz",
  "key8": "3U3tQfGNqfFo9JPwm3fCT3ouUYQiGMhPh51Hd1fXP5KZanJtas5RaQT23pbqxgBTQKPjZawMKTLsmWHeakn7z62D",
  "key9": "5p4u5HxSYEseYMyzmZ3C2ZWXpcqPTrT1H4R7MbWWvzDQxisZcFnfGgVN8H5Gh9XJXsMAaAEoH2xASL4CZoJgKf36",
  "key10": "2d1GYD5yDtB9aMHMoRZyFYQrqoUEJoxnZvP8UKPZoyDQ49dnEoyuNeLBPWHKo7hS193jzAnmzxeZCJ8Bx7htuLBY",
  "key11": "26eYyF392kPn7dWp7iikGgFFKcmMLnjUdkYUh5Mrnmzo4fgWDmPioghbLDo3HFiq4VduuL48aAah68WukS9rVzC4",
  "key12": "4UR1Fy2NUd22k6QmLUbQKce6bmgnjCFUmekACZQDAB5vSfW9iCHJhqocZAEs5t6jn2ntutXMCoUkr4DV3tnz5rMX",
  "key13": "37CvpyYpHNvjYjEBeCbge68EQkhTZMn24NsM3UY4Mye3YLGiosMQcFJg5q1qKGTFTsb3wZ2GnENzq81bteYyrohz",
  "key14": "fssoBaP5AkFxEfvcP5ixjajKALfxFwDAyZbr2t2oLYca9VroMggzeLwuqXYbTzePoFQ9RzhkPRrmrsA9Nb3qFGK",
  "key15": "4NW6adSR2o7d4H4bzjHPpFFS9esPtSmSuExgoeEuLj6pRzAo8sarYmPsv8Rr3YWBCufx5HmZ83CCngAq9QimcmLz",
  "key16": "wh6NW5Xcanr55hQXvF6vGzobhiop6khKJ94vzA9LbHtJJsA4yrbD6ij8dvxDQS1XHCuNfovpWfZ7mc7ANhG1ALK",
  "key17": "5dRVgkeaNKNGeCoxYUDf1jUpqj56EuGzyNNayW1Y286HqVYDDhuC5k1RKv9AsjaaEyZFA8qbHFHSaJoYR7tQ4G93",
  "key18": "2RmmaEWnLoQU2R9drTuUb1VBx285FvXsmFxFMsnBQNQYW6uqbXtu7iHTJT9VYypT4ZfCbB3kJ32vPzgBnxJaue7k",
  "key19": "WQr34TyC2TPyQfTxpUefMyV1c83RFBejxrGDQuJUJYxAYmWijfuQy4fXMXtpKFnV1ExTHbTMDoBFW2oWGqpQeB1",
  "key20": "4ZaC87c28V9t38H8WFAvaQQRKV1ktwGnuimxvqQh1bWpknRZ1frSX95mzqm7XpP3ZTbjCTvdcvz2oYvVjGxWoTXW",
  "key21": "wbe1imnXUqwYKXuC8jybd3cNCmiwkmnZiNGJucF9esHZoqec2nw6PuKqYQytVfSXkDRo37rHsdGQAAiavnoRAqZ",
  "key22": "2UHzmKRm2qRq4yVSaVdbU56Pw7i54ePP2VK5XPAXQPrutsCpoaK9Qt9pJWXecMkKLoLB1JMvuQhdXbmSCyG6GM68",
  "key23": "4bbp8V8exDcZ1dvTEHVw222Vj2yv9Mi9ax9HLgR7en4uetKyZ83EPbsGWxgUVVhLd8VkZpTAzYhz75GQEDGD1Bqh",
  "key24": "BJEhBCpPiE4v5eQH2n9RDnXr3DVSyv4LY1EV8aDDA8U3tM2XypwzHvYfUZTrziCo7CpcSkK24gky9EwoDFwqdth",
  "key25": "46hD6woWBBiwChsmzpJr42wkZruCK7vjEdHYfwbZQLq6SiQAQey6tLEK1kXaNUiUQixuuGaa3AV5WRc5cpfc1uTS",
  "key26": "3GZSshX8BjDcBUykCu8f3jYpKTZCMhZu7GqcTUGJhpgMbWDbPZZt4PpUVJ1pdNFY75fFSp8TtsqjCJxmtZ5GoGh3",
  "key27": "4tDATPqyiJevXcDvUpUkBMgYzpLjMi6tYDLkec6ofqN9NYwWL8avj22s3VS64ALDjR8NGPs1jKiLSuTvQCJhC8rD",
  "key28": "4TzzbeG6iQHLFCyk3BeHpWL4VhHrvuXYbRMSb7HjUSiPmxt74KofJsifmLKof6xQtQLhgF8oan6aZMnZRW3btxbV",
  "key29": "4LWHtn6gzUJnXU4iMpq8TsnbgGC8JtkRAi7B2UpDqNNK3mZftDe1qKn9uHfaqbBDEP3FKmPt5MPTTPr8qGJJuNoV",
  "key30": "35ttGCYnULKprCP85zmxtibua7wUuk8CFBbhykj25LovyTEMCR3sQmZHUqvPSuASt4u7si14mxWuaqWhmhMNAJFi",
  "key31": "25b6rniN5VpZVUbkXGbhUtK6FG93aGpNnDi4dCYMgNJReWNoVKupxiEPBfZbgkptqSmWLMYQoK1tuThhapGb6EcN",
  "key32": "5YvN6yVeCmYRfjZkG6Xs1movK17ktxgvUqAqtjkfE124SRbovSMwAN3RsyAosqoEEqcq7cbsf8D8Xg1B4GkAKao6",
  "key33": "2PsBjhYME4UEFFGQSyKTkyHFGvRBSjstfxegCSUqkNo9Q5ERw27NEFzho21v2eRYM7s5xCFPyNfjBCNcpJDAaRHA",
  "key34": "5Z3h2iM68EFrJX6Vawdz7y5fC6pUdSerj8gfgDZJ5NT4vi8v31fRMDKricv1747BHmj9GTZReSpKdEcsQdyDAxZZ",
  "key35": "61kt6nPGCrGkjW6nRv8DChSz8vs7Q2UmvTASTCcB85Nq9tJfwGPt3dq8ELdZG9nLVvE8KPbMZu9Sx1YbEtMmbDEt",
  "key36": "43eAzCiTegirMj7aBE7Q1ioCpQHVWQE8cBFVTqjLzo8fu3bsQ6nHtEkKRxp47jP1nhEcNbMN1CtZEytuQrhkTxHM",
  "key37": "NvY88T1TTC4Vv7JFz7ww6WmCvDc3PuB6psc4tXSJepMd8UMrMTMxKAqDgyf4dfVL6Et8kB5YR3F5wDZW7z61mJi",
  "key38": "3fPxJUNDhvFRX1Q9hfvYczvUEAq9vR9f1erJZFuJJpKmhYeouArMmGjnyecucaYQXMZEHfE1md8KtCCqbLQgnWDU",
  "key39": "3eyFsjcYEE5LY6gG8bri3wZofbfznVqJWR2bGE5znLuFXPKE635Duri7bSTjKqLWGG1QL9NmGyB8bnGktD6CCcZp"
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
