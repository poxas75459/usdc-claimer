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
    "4Y3TUAaoPKAqm77fTYJbwNtz9mVn1nPpdH3bFGtZbZePKKfmLsQYBYgdm9HUp71Zzb71qQTbsdML3FyPJ9X87Soi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxHt8sZP87KwKwcbrKFQDNmWYzgE1dr4k9GSrtPBCRktjAcezbufet69mjerYiRaZwfdciFnE7ZUQhejpAz5L3M",
  "key1": "2ZJAgvFnfaoMD2B4msStjwctJJaAQnLwLqMQ91FJwM3cJbxTkK484yyUFxQHppUYe52ESdqgvbsmTsaiQ2kiDgW9",
  "key2": "1qNzqU2sAbUDScbFWBYxswwU5nYAiomb35tmKYyS6RpGvYn26yNkQffqMz8H8VU3BbBmbtCvrmHVsv2wa1pJjai",
  "key3": "2txMMsvwzo8auuvp9BQcLxYjYGhBXn3E4EZhBy4si1ScvhPddseDTqGYeLWhXFXGKeByuQjgPoKCBj1PKyfBs3qG",
  "key4": "5wriZd9CberTf1b4TFzx2dLDHj5BnmzpPabSfAhSnKZPAqUaM2QbFKrnhKHnbPWBXUYsuAPBRE1wspv5ay37tAtW",
  "key5": "2R4wKsPYc4VkZ8Mm74jcRBvNT8kd6UPE4feWpUT26nAZQRaVksfCJ7R9fRjhJ3j5hDT4oGadwqSV3Sq2hbbVLS4X",
  "key6": "5QMyyUcGCB1Fx44gJ1yF9f6HhNdXCqCmSndzqWqPoSEEb6rWmbphnCkfEvkc5MzWZ1pLxKfRjjVu3JWziravxc1h",
  "key7": "5Cw4SqfwmDWH14z1u28NarYJgPFXkt9QdTZamDeP89MheG7YbqK62wYRVPP5QSjkndZjzySRhCJZucjhsMQ1ckFZ",
  "key8": "3dWxbQJ8VWzxhWSTGkRmeEmVLuceYkRRo4y6oHpYxU9dkAnbwcVcTZxQtL6g19j95iUkew6LZNQcArPpWzY5YQt9",
  "key9": "3Kzh1CyHccAbhd1chQuUSTPu8658D8DqKQxis5QdDadWXW9Fc26H9b4UbzFDRBtU2G2EdgSB7anHxyc95AVjP8ij",
  "key10": "4YxDABx1Q5qUNNg6sJbSQshekSo82R6nRMrG4QBc4yTGserm6xnfWF9UwYx5KPJ2G9VvDAPsrsi4NvkZCyLhqZup",
  "key11": "2fkPmhqHYzLNvWnaSkBzgWuZ7a5HewCCaoGTFFb62iMyTcd6ifZJsxJJboG6B6cH5qcLARWNfFANDyhLqmQ9Sz9w",
  "key12": "3YaZhZiJ3jiVUDyoEGeizSiPAi8PRyNSaU3GfvEKSkiE3WtpHTmoWsNCJJFfubJ96uDo8RYgxz1K1Fb6QgrMfmYN",
  "key13": "5oyNoFgRH5DAE9wRF6rvJZeQFffAu36guFYKvA3ZB25GZoRBrA2PBcHNQBXfaiLe7syeP8EuGLJrBeUm3txm1hRN",
  "key14": "VPVmDyfFF4u29XJ4QqPr54hBDkRfJ5pVu1jRyRX9j81SaFiGZ9tLDBMUKk2k2yqJ1X7w7ibVHDy2f7mL2AQBV5q",
  "key15": "R39f7cpwhcBFVFHPSopJjRxZxSM9qdMQrzk8NKEJKS9iQHyNnMjvnaqtdaHR29492o495J7tVtkJyvLw5HD7Kgk",
  "key16": "3qnUQp53e4MpdffNEWEZuQEZcDp2unj2umoT2eJKZUYgdxptTfYuaPdzUpTY2WJbTLgWWmzjY4HGrGrsFxT4wT4S",
  "key17": "3bWGTksfwZy8tNJ2oX3RP73bkURux6z5UQdQwSCsiHxK3L59dzqu4b7LpfUFcjPRUYDiMW5XzVnWrGqXF5GDaTTM",
  "key18": "54Wor1J5Tpyam2GE5HUE5cypU4hJBwFywDsYwRfSD7TJAP7uMbAy33sS2bmgagaLaLPr75u451gsNCe27iCWCXkb",
  "key19": "3DNXKcjzhRb1azpySKQtXggCjfGh7LpR3Kuu8hiuRPUPbUsVJv5teBWQwssXHXn7vyNLqnLXnK6C3LjqRigXXoxP",
  "key20": "4qg3qBSr5yX2hgr8m8m6inbYWinsevboDwCiqYphRog1WYVQDSiLFXxQkKocBVsDibnL1cJPwUCPnnYveg6x1Y55",
  "key21": "3f8Qa8oyg4pQdHAsbTMrJL7ZyQmWoj5uY5ceehWMAQtCVNgTHCjfGqsKdB1sooR4X5UiFD6eBSTZgjKgKWjTgugE",
  "key22": "3CbrETZxJWtUJ9YK5rr7N8JkdSeXpkmsZqqrnUtgiRhnzdWvuhxwG6DRtYaGbWzkfo7CC85EmcJiR1RxSZqSQaqK",
  "key23": "4yae8NCwQ8LXmkb4mYCdfUQSJFZWksdGB9KxsJYvDnNoWKdm1xnqso9qtS58Umgbb85qy1gjs4WHzBostw3bjpAi",
  "key24": "5h8e1CCEbaHKyGw2mpEsxmjCWA39b7gvFrbEiLf6YGwBMhas9Amp599wsXLhLyqX3LsVZKMqfwVg4bHEyAZTyxx1",
  "key25": "e8rACSef5ePSbKaDuMYUQhNUAEGcDoPn8MSgieWPGPBDGWft2Py87HUqcDgW8XvQ9oLkR14xZWh8eSWDpFgreP4",
  "key26": "2ifRYzC7kYheXKExeopu7tUhxBtALQziNx4q7G9tHcHiuzXVi9NbrfLRc2LevSaVdx1wpNc8uLmSgm35GdVKKqkh",
  "key27": "51DSkCuJAUKuckMJYWv92gfbQJHrWNqnCBzBSpafgmAsqDEjC8k3nZSdBX3ie1FkHyzPLmt3JqWhxSXj8xHfWbfp",
  "key28": "3NwXLJxke7QZKHtsLiUsEfH3Dh2A2a7fX7UvPyV1hEky3NQUr7nszzHNiEcKScWushQLBRhLQhkWshxmxoHQ5QDr",
  "key29": "3SAAEV28J5UWve3Re7cTx3mmx7iov6WDn3vwtdatRqQpRhVwBiLWNUNSMJvN3vwdeW3MKJfeRJYxehc3Pm2Ki29U",
  "key30": "4AmNjz4hixSZDZZoBnAs73KzzvPgJvC96aPJ8VhTR8cJbFgw5C17YF9zwYgwuF27kfGmmwQheqcWfh5GWS7xAGyY",
  "key31": "9Gq4kCSj1WKWwP3Sj8SFryQuWLNo1AdPharonmFZJNQ7mxzXjDaaqPmDEbs6c2ZKxbMB2j2tZkvR3GmfT91TrXA",
  "key32": "25YrAwLL615ztqGDWVuzWDVJG1RpXdGdTuiAWnzC4ymZ8YVDWiaodZNATbqHemMf8zqhztKF5huAwfMQ5JEJ9CWp",
  "key33": "37EngvVvZ8YExFXfMFjyoUJXHyey1WsBbbgBK1z1BjfPvUjgKg59EHBVwNKKaAgf4juhZsbbgpSYzCw3x5RxAsUY",
  "key34": "2QNg2avhmyhhdZMKav9YRcT8a5UBcM43krzDtSkxiSVT22sVKor75EhPxUJDUTW4AxvFXv2YQe5xZcXvJtYtUCYP"
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
