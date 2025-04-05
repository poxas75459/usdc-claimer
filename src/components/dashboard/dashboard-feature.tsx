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
    "36tLUraXAzjzXrCWsfn6CN8VY2qZy5KSrwviRJPsx3K4wpGqZjDww71tJQrAMQwnPAvmnR4WUxrE4Kth1w6TsxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bbFPQKmDeus8tseU98vCMswVz9vsUBg9MhMsnejNex2FKhHKaSKRJaL4B8JMS8BoebXzkgZusbpsQK1rKWJjG",
  "key1": "5HtiTzPjcnEJQvb7moHSkzq5ukf74V4MTXFDLzNWSnpBjXJLDNEZwMNVKv3CiXCJVTAaBtuqvBsx2eAfmrByKSYq",
  "key2": "4LcX49i5i58tbFh6W3hRPuNXmvX4oedtckLKW3itzT4nDqYhY56t7Wq7oRYYv5kVg9uf7sS47V9i9uQXueKkYbzk",
  "key3": "4e4wxTRsKpfZedKBHjAQbQZFu89SCf7YNB7Ays2hmWm6FCV9r6VBLCegJsW8ZRopmtyhCu3ZVKckkseWf27SAJ35",
  "key4": "4fYgHmH4rdDun3uWvTBzW8C7kAZBdxDpC7omapqvQSRGcP6eWEGWdcHWWqk9XjEM57epu5UT1J6FsFVjy25hZdAz",
  "key5": "4jbEqFrMcqpxzaNQyhSzK1ho377CjCxjEEWnGp5syGaEjje3sVgGZDwU99XbZKMmcW7TNyaUbkeaExwzj9i9M6vg",
  "key6": "3ix6HftHnnNeDsTDMVcCPaRyucc6wpqUN2Mmzg3dKEietG4XksiKmRw6n4tTZSg4QR1B7TbXX9s1pERog5vGa4hh",
  "key7": "3PEsSrquRaUmj4SH5xzdbHw32ZxfBL79V8KkDs815tnQ6z2TffgGiJ7ucf5NtiPwrSq5gYZrFYohPmBvhW5DuHhK",
  "key8": "4smN4eZuhJoxczaMrM1rkn8VP24gJ2wzD7xLZ2awtshh5yqwFaU2HbV7PDufUHqoXPfbHsZGJktPH5PHaz5nc6uZ",
  "key9": "5yk5UWnMzdcd4xoPHu3dHMsbqnAXwZ6pECD4tRuwRKeDutJrcmNriTrh8eorvFjyBaAtq8CRGfmvkeREuYewjvxW",
  "key10": "4x64t7i66hzmqz66Gb7aBdqSPKAGiGhuAupomJdrBztXnSALCGcuDPAiVh8urQKxJzwahV2wpdjjUaqXD4bLzBEg",
  "key11": "2efHbhjhkXptxHqBuKbfeXwCytYYqr1cMxRF7aZybD55WTL5YAAyreWcCVvq5uaMEwSnfidrE2B76mjw2NwhxSUN",
  "key12": "2GqNFvq7s2Xi4hETEYZ6tH8rWf6BpiTZkpbmNkvL5uB3bHpkVauCufcfZCZH3ENG2bZ7QjdvBW4jxw2FLmaEa5Dr",
  "key13": "64LzgHz3LWEq7hueEG7St4cq5RjgbaZck3H1ckeMT8n9jFdwc2eqC1TzRx2LVeNu1HaJTSuEitCUAg81ZLV7aTNu",
  "key14": "4zjhZKzULeRiE7ygJSbiHEb6fVxehiPgofH1JkFvt2fdy7oDRjo2kQBPY9F9gjRgxx9vd4uTar9xAUPYY9qfRXfV",
  "key15": "2nfpkDCBXL5dgdQnLyscvud5swjNgBmAngwt6j1ak7Ss2GjZGgUaRfKFfdmNxsCc2cxNgVdzNi5QK6m9mihZsP3H",
  "key16": "3rM982vy5CyyLgWgxNGuq5RQznjaaMS4qJjCzpwL3ZaCmpw4TAfCnwuGWAyQJLMKtc4yoZzB2bL8VZLei2USLjhj",
  "key17": "2xapaNs56iKWrLn4EQbZKnFzVnpZjdbppKpUsY2scLDYQAWX24g4UQ1pNA4uUttvzVCDYRTUesjdDU85yTUk4cZD",
  "key18": "5q4PS5ViUTpCHvsTJAATSXEd7HAh1BPvkwL9dxGhzREE7pBCth6V9Apxg6iKF8TBraTEGxdfHoYgT4qGJKeQQG6f",
  "key19": "5TRA3VgHs2pfy9HYhtLbKxk4hdNyZixpWkHvzwZsWTPpmtmWwriLGUkRBnWfXkoL9QSKtHdhUJXoU3hRapoYjaQ",
  "key20": "492aYuoKZeA7ZYfiNhyMzJJJwroBiENsQ2F1KXGyU4LxDchWDv6LTu62FKVCRpraZYegP4N93BhD6f4mmQPuuRbN",
  "key21": "3ySBdAAG1CGqzz9PCN9U4pM3it9HLK6c3VGKKTU6UEkEdLFDzwSHwv2R36RGAtGjT3qV4cV527EyxdKhTEYW8cjK",
  "key22": "cKynSeRg1PRnr7JorCUo3bfN6rQCk8mxWTQJVRuaqUv8bZzajxJXcrjtnJs8nz9ukWRAvb8twKE2ZKwj94SoH7T",
  "key23": "ZXD6xWnWyyjaZKUvBivrBGhYmzsJgbviGAHBp2idX4s9eoYQtystv43DP2GLMaYeeuD6mNgpJhA3QVQL4bTrkzi",
  "key24": "4ra2rpT4Zsk7ntVP8Zj98kH59Q9PSfPn2UaAuydpXFWoZ13bD2Wfmyho28GEo2o5hstJvEZy5VM7GJ8n4WPduhgF",
  "key25": "2KPT36hUsZCBEcC6jbRHUc1uLL48Tkjyhys3MzX36AhApiq31zuMqo5bMMJ98peFZZ51EmA2j7MyAYdwDvMfQKwF",
  "key26": "hgi1EYQH7S7GjrUKJDQbweRsyKUdz9mvF4rvuS34cKJne4bKtZ7BogTfBcjJcVvjku3pj12hbaJnZrqMvWMq3Yy",
  "key27": "24vkE7n4nCBFVBoeGrhbLrTsAiFAfQAeCQ51AiwVx3uKbShqC6YyvRrTBaBn3TacXSBny7pHbPxtk5LfJcEMLYGk",
  "key28": "4Zg1jst6X1ot2XXXym3mgxibknPoSS8ZoJEzgbxMdxACSwfLtT4r3FryQ3TwvNJZiVKCj8PLK5hiw9ACPmSVykvX",
  "key29": "WfqpSSJzMP6etHkVC4wzfo3h2CQFAiCsgzmT29NjCpPYKgYuCCaGssYc4knqjFRRDxzDAHQDyzZaDJWEWrx9hhF",
  "key30": "4axRatgJ6J2nvwvxAEGcwrohAV25AAcUwfziwptjH5EJpwpbaUFEZ4VJqAy4tFFymxZGRMbVBYF3vLFo161pB85a",
  "key31": "2uqD9FBHxBn2jQhWy1h4KaM2guRAEtvhZYxmkW6NMeEgH8xWFYeSVWDq3TBULLW5j6gKUfduLGnuYvQdZRZijNua",
  "key32": "yZZwWj9NMtya3NobbtTUC1DFFJ8U7vUZGPF81xGg2B5U4HADjD6jNZKMNeVhgHoZshqXiRPvEwMAWQDLGTordFJ",
  "key33": "eSRsEP5fvubZPmnxwvSkcGp5LXoi3nbLpbF62XiJtxGQJo5K2oCxbBbtxBCvDSnP7zwY2oqU8WApiwC4bW2a7bx",
  "key34": "37C2EKLd9AksHJ8zWHomtVehf4eTPLqYNMQ4HE9njbfcrU4eTAJojhBC8AP7ERanUiZb2mnQQbSuLGNEr5vcCNg8",
  "key35": "5Zc9reKcrKZaqxW7J9eudEQTh14WuAD7ueBnEBR496DgzW9AidxRLk2t1cNwSj8RzjZAh8LYPLUv5Lz4hK4dumL5",
  "key36": "2rzypJ9KKyky27pKWXYR6VxDXqt5xWfaUXyYa2L1YLMRD2uxqhvYMgGnYMzsjh2GnwozQx8iSvFTX5jCYBpwWPN5",
  "key37": "JMd9ncHgJJi69nBD8t7nGRc7dP9yF6yGtbYiuWb6eCThSHuhWLpc9C1XFDvbEAitRKPn84Rvs8NMoULXrpjD9wH"
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
