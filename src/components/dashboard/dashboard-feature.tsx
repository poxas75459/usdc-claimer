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
    "3QLehQqwLx2YfDziFhiFgLUEU1wwH3Xhuk6dgC4K1bjYnGaiUo2RfteaJvHfpdKtuYYyCBwu4Y5Sjke8C78TKd4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDqJAy4Wq2HHezMLAAAzcqNf6BxDq2g9eLcRBmLpYxyVsgVsdbRoGtSyK8tasZUon1hg162GYJazhTSmoi8Q5Sg",
  "key1": "Sn5CJSNVVZABoiX6ysG9u1CKdKAr1VUXSG6QyJsdwm4Z8jTnRSsVGSZEhxFGmYKHQZe7AmDj8XcdBTwAvEx1A9V",
  "key2": "5zipt6pEY6HcEoPn1cCz1Cp6b2Fg9XU8bjWqsYFnpDvzxqCZX5KQ84BT6mRHBuYEPMu5P6Xuf55S1pbh42HK3cwn",
  "key3": "qCHrxT6LzThHvjKcx3B8mAaaRHez7L5VBk2UhrSafJH7iUcHJtpst96ZzZq95UZHixd9Cp6VkgEadwXjEQctAam",
  "key4": "5kkotEb8S6wT6GtSG4M7niCE11UhsKeTmZUh1meRacAHDeADQKH7PWn3XvKktrn7k45C5pnrU1BXmczGhhHMkgk1",
  "key5": "3Rhim7F9zYUo4b8Am2HofV3utFW2hCVmT19wzQG3sTYgw8xLzAnQsJRTdyAnV9QW2JxwkQfCaSvzXv2LDgvPwu1Q",
  "key6": "pXeJnuo88yLxU3FPMybeAQrRfvTp58qi8btGstURN4b57T4UyQrWvvGPbzVWUZx4GmyvLzJnmMv5y9GQMnTQH1x",
  "key7": "5Sp7FrdSFGtZf8Yph5Nnn83QhFWVdAvRYYHYrVKMqUYCuf95AgUBDQ95uMiEL9WEMtFQiCumiF3SQy2FtnPXh6md",
  "key8": "44i5t3rCBPyvk4y6TAyNtVdsGhyJwrm2jUCffWCbgeEGYMoHHRLF6ubpSQyK9hDzmG8F5ymaQTcsxVjBgssHLHzk",
  "key9": "BYT9Ztor1sUbBVn2XUV5ZvxaBDFwK9NPav3yufq4bPyDgBP5okguEZmZ7H3AeHDPg8yNhP24rDpBWo5vLX1L5Lt",
  "key10": "P7vWHTRs3ygvXZovSWtj8vXz961izYtD9XcVT7Yh8RS8agSkkUKVmhTAuwkXtyXMwQ6rfXT4qNzhN1ksh16ve9z",
  "key11": "3A94Y92gaWdpXtv25LHkPmEuwxSHTuWvi4A56aVHHPXG53bnoZjyjBZz5FCgkXqH5jYa82mjFCsaXxcf3Mop88AE",
  "key12": "5RYL5GZtkqGP6jH7qKz7bBMaxhSk9P9aM8bUZq5QB3BWUEU2fLZrhHi6Y549W7o5QBWzvshz6F6uWL8yGkcUEFd9",
  "key13": "47XfWXdR8iRps5w6TCxDjQvxaYXX1d4T4erDh8dNso7GnhfmX22ggp4tdYniZUWhA9i4YMnqJNgZv69v8XaBsFgX",
  "key14": "5JTCQ22kxn3UJRv83tgoT2SSciEPqAFvmqhAC3MXVeKZMZRkgdu6VHjtyJYdVTniCSrJ58o3e5zkoZVjGBVt4pFa",
  "key15": "3bYkDGHaxaXvAhfJVqjnSv1WWTNpMkh3dyXLjSR834BJebUrWp81JhbTMwCtnXx57JNjMCarJNHGhj79rpjUmL9a",
  "key16": "dzPPREkgtXhfCJH8EZGHg3WS6kQ7yLKVCAhHvsDH2gPLYSP1dVW8rqdUyNN9dhZjA7q87xASe9e6QU3Zf4db3hC",
  "key17": "5vhE3JmdK1n73pyg4WNTvkPf7CuYgsYG23HGE4cFde4xS3gj3EgixtLTfhoq8LpFPbbhyNJmQwYLoHnryUmYPQ68",
  "key18": "4NxjAJXNRu2v7TzGaNpWYmhwDcUCUAdaZquk46WWWaMuWGJZ6xuVyBqKk4xzvbMtvYKjGBTwCXDuWEKEp2AVrvmo",
  "key19": "3cWje32StcTNokr9Py9UYYed65QeNvmWe7A2PwjsHqRywh8dmixL3H32UZLcUA84WdTCuz9Vrzo9QW3YGYXwxyxv",
  "key20": "Fv19yTVtt8UK23BqLzutqvhgYRdJ8YemYboh4awo98VuXypVMnGwSb24xHMKQeu83ZxNtGVfFWZqAYxV3tFegiH",
  "key21": "2KG14rU5ytnnMJr48hJVEwfekyUxhbTHRybTGpxXKubWbhyRTex9Przo4kZkAvQfTnLE5utFP6YtMa6oA9UY4KZU",
  "key22": "Y7cZ4B32FKgYL4RKzHEJ29L4swqSbzV6xaJSc8fzdVNehFvogQtshvfe5oeoGLYVN9utLyp3aPHpUm39Nivxtce",
  "key23": "3hVYdCqArUBfRiVkY1XcFR453it1z5zf6Tw7y6D1jD42X1fVYKmeC2kiQ28vyvC1rRRSXrX29R1UCYeTCAUn4iwk",
  "key24": "58tFuTbs7BEHWyi31sF3CHTGULDTWippxDYGNmX9DEKJiVq21Qk2mUjZice28foNAkkU9VS8kc6X1Wq2QLp9oqdg",
  "key25": "JcqUZYQq1VmCecpNe4NbZE7dJqvMAcYZehkoBHdevVMu1vyYVWeChLy9vQJWupyhdpreCtt3omfXPesvmQmwZto",
  "key26": "3uPys67VrgFEGQruUEqxE6U2bDzP8sMCW1FUkGGQqd1JxGTKE5ZMYUDQ2vMWiDN9DFLNSgeqL6GRKd54zMZnQnZg",
  "key27": "2AEZLMwe5SFPf6S23Vktx7LSsSW9sFJD7CmWswdicti9aqbwa8PWhY3PrXYZa5WUuAf9oncqTtdC3kfhPdt66asF",
  "key28": "L55PjdoKrxX65YeKKfZMV4SFMqryRnHHe2oCUpGFXnm5Nm7neaw1XoGZJKuYasYV9uQ8qWYHFNiJ5gbAxQwJMRq",
  "key29": "4VQ5X2ujwXiaTYAfo5ZQzLfvK5eGWRRwyYkTA7WGQia61J6LXCrSmLd2hbnaFkNorKVQ3LBhbNpA7jVcpG1gbuD9",
  "key30": "j77AnuvErZXw4Noez9ctDcBp3gvvTWBVko5wJZGoc3jaFbQXKrZnxGZh9VC8XckVG3hC1hYZBxCep8KMvAgu8KF",
  "key31": "3m2VriJ4ywSBzzq1xHb2GukCFi4DJZRmp6mWbjuSmC7zmKxYqgfjKprzpAFFQQoRqwRwKry4q4eyPp2bUyjdYAi3",
  "key32": "4pZXcXcWKZyWEkHVNfGzbxFBkVpRGLDSjxjDb1L9AmczsXodWcZrrmMZL27DPWt4iNxZk4V2uWUWegeYVDYbvZ7k",
  "key33": "4WjGhCEbTLmio21LeRQ4GvqYiq4dMkiqXk289QdyqFCFH3mMbDMYQT5bqzKqSbY73H9HtV3MKeemi3aRP5QAT5G7",
  "key34": "FUZexPJr8mwAwnjVdryHG5tLMneF7ztYFE5iBH67Abb3AWJfjZje2XwdJ5u31sifNjA2aoTBiof1kfyrH76VEF9",
  "key35": "3XUEpJZkLrkoiRdZ1wqvj7YPSc445T6M95i738iV1F8rjtVvhcwPLzc2ZvkxMTXYU9bKnLPBNaP4zuzDbNbL6cyU",
  "key36": "2VDztdFXni1xL8oUn7nSPZnDDBmxV9qPHBABS7L3h1LerHvEEvYSG8mpyMJZaEM4qM8CRYTPhRQpairS9Av1o6fz",
  "key37": "2y5RxYFaUtADRRz6z8736g3R4bzx2RFgnUtVaBSERLU2kMXuDDWbdox1VnV1rYkX3WUR1VmFrMAUUephwE6uZPXB",
  "key38": "aGqs6k5LSWfjY9VBeXVQ3EDSmPUNKsB2REtcWRwabLU2A5q3cYneGxmdr2aFFUeFFpdiEwFq5Ef2iLgDSzCxTgB",
  "key39": "2ssNKj8qnbFPF7QRbUotf1GomA5SvuDtPCgiZKvDAjpZhTtgR5wkhTa7zcxmsSYh7va3HnMn1PuX56hxq2Ttr5ux",
  "key40": "J6K5PfPrCKwR6AfJWew2U2ky3moVWEJpJ88YbNU9wfehfU3muX7Nz7ahUMBR3Vx9KuUbtobJpvYbR3MQS5rfRTC",
  "key41": "29SnSWAoAVJBuxZoLiPTVboXDTRwQcNe6NeyCrTFvHT2TF65xWeGUNwara3T2w3JX3jYyMYV3xaKz7PSQwZZiN2M",
  "key42": "5s6Js1rvyb8kCsgcsFA7PM5nM8Y7KDDxSdnoBnQEBXfSk1tWhFBjMUKb4xs4ZBcZdFe4QfJE8LwJAUyGFSTFDFMG",
  "key43": "3yVbMU8ybbMgbhZfKNsVeqz2h1PgXgHuUz9VecJ7Tuou3LhTSUXpuE2Rf1eoVpPiBstZqtRZhaoaiAWNopGdVne1"
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
