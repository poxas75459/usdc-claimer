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
    "53meG2hkB8RVWTq71pK5o3B5Gie1Aef1tKUA9kPaoumjfRxNZrGDHgPyk2Z7ArJZJgCwoBqcJvxnbAUEPcG73NXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8UVq7p94jJwuXYGwvD3DpcZW9RTsANPkh9a63EcRm3rj7XD8rXR2a9MnceMd1dbBV5sZkM3H9BreqDGxaXEQxM",
  "key1": "4HeQGk3iYmw7ZFCpULjseUqCPCApSsW5TYzWegJpcuSitn5jYbQtK8fmnt9JJXoKnKJbsd4AE9ZtNwRgcGpV835D",
  "key2": "5GdR1zofn542j6WUt9ACp7Koaz6bKmFoSEoHbY5ugkLgZX7zLNm4b6DH4cV7HUDHx4dkpdPBrfq4D9hE4XnzxugP",
  "key3": "5gKnzvfjKBRqbkMXabCZ5xsxuXpBRQ5Gkku1q4vRjf5nRS1FMNwSgFmLcQD7xv6avrLjNWcd6zWygzJ2vr9WCL2H",
  "key4": "47FTQxcrxRdLK1LaD3W2R8z3aF2X6UuxX2s75bWgZy2PCn83hsvqn3ydAHb58ynSGF2i2Fika1JtDcg7Si3P9dMV",
  "key5": "4mWTW6iUKy4UJqv3UpYv2zcysXQhw9jhSYt2n3mWHVAyw2u9dRdYFnHz8gzdFGJzjemfXS6iiFtMsvjhj9WTkhvh",
  "key6": "4PXSkwodGWUNrRWA8GTdMFKy819oCsgG154K4ykD1KwUZ3gdFV9BBCDEK86b69GetQDAgsdCbgPzRBsbZnLhUVra",
  "key7": "4jxFFM8JmWQApDQz8J9pGGwCBhJAZ9hHqGUz3b2EmzbwDHvbWZbjMT2u42Mjuup2SNSM6eySya8BAXCNWtmFgc8Z",
  "key8": "2NvnY1e3rXipX2VorAp5my6FbTcMowm9dXBtfY1yJp4axmWSGSkSnwuspLeB412KWD2z6RHWX7FRwgCD8KPZCbuN",
  "key9": "2M3rD6kjQvUAXuqkmxUE4sR2kcr8nNrwa5mjEgJFge15Ky2peVK3jmqtD5YNYeRNb2XAEYDBqYKYrKtVmGrG6n5w",
  "key10": "5tzPkYeJEiNAr3kLnRq8iiUfQJJaDEhHRj2yXVfi9ZbVc8dvFtfmqsJ2BR7pZ5kHRGxjSxXJbjBSc63NZSLJa5zb",
  "key11": "2h7GASg9rrubm5Z8MfjNAPKkQNJKJLhkxtf9j23zbyterYRjy2HbDbnwydCZrzYBY6GqY5XdM5dRqVpk5NusNqpj",
  "key12": "2DGiDk6Wvze8QnzFxB7XT6Y7mMex45ySvysnhbfhgYr7bTfyXDabAYKHqzZW1B4j3NBVWgJET4yH87Jv3atVvkuE",
  "key13": "5FNibqbKKj9TtRsSxmNhnWg21M4D91AJGuScgnNGMZHzmj1UPxszqzws3sq5odQJjbWpgE47RP5GZSrHyyDuVXca",
  "key14": "3e2uApHztawZ647vpAxawgBBSQgXRrQARHhh7YG2XhWBZ7cQRV9hK42omxxxTb2tnXibi9ELpbkiz7uBYna6wSdV",
  "key15": "4Wv3XtJmDyeKHu7FpiYydwB8GPq8qW7Z1PV9ayqLLwBRZKSnRiRXySxPyE13cTFTVXrwXVuKNYGxPcZkZzWcvSo5",
  "key16": "2Jmv7Hn7m7ykgFi4MngC6X93D998LPLmSURahtdhfK4kwg8145y3zbkezANhCWeHubSvhu5V7ikzNK9adAoT7jgg",
  "key17": "3TAPwaKCsGvjz82s8BLQpero8YwCMQS5nVZYWe8srPc4Uvgj2W1r1xG5FtsCbTRL6sAW1QreWgwb4V9mVb5yUjdZ",
  "key18": "b769qwQMoztTHTYQVnjFCRuv8Hi19wEryCwGMWy49ufhRCkXfg98jCgqNJfAaqo9ufbGQJLhcgb2h6y2BUHBDz2",
  "key19": "nW8PkrwSFCDAcFaMSq2wYXMwfFjJQvJ4rhcM3uaP2Vi8YtBL5TxZTjDQHek9enbVwL4xmcQJoRtFQWqvPcj1gRC",
  "key20": "5VBvySzZs2EgQnP9U4RufWxaqUrc7niNPTYAXpVJ7vR68Tzby3b78nobZj4HMjbmB2ngvBnT1ei96QSyY5xwaRhW",
  "key21": "63kPfcFuj6KpsLr4nqUXhLGhh6jmCs9niQxRbWLzUJygG5MHJbgFmR25Napy5N2uTJy9rjN9fEdViuzXpnXGRG5M",
  "key22": "2k1tf4UUtHv8BkFELNHttEJbjpreYZ4W7bA6bLxYuNF2mjN8VCTKggwEnZJqqTcBRkLGSA7ucZBDDbnSRCUFv6ku",
  "key23": "v3VGBcR2B6gS7zgjF3HGNFb4Mkozs9fqR7w2ex86T63k8J9hrke96xpMWyFBVjjhPacdc534zDCyCGfqagcWWZ6",
  "key24": "2eLVMXqLUsXWxqgsi4vnJXGzPfc4DYF8UAFnJVXzhUU3TBjkb97TSj7dpxGHeruE81xgby5i4qLjZRVr2jStPFrr",
  "key25": "ZZnYbEzSuiTN5ex3D7FQDQ4NQBHcx79CHGZs4iBpWLzeydXSLVJSeuAtR5Ahc1y8XN8EdnrXM2HcTy4QUR2iN4M",
  "key26": "2cB4HMPM7RbT7GqpwLKAecFXiRruJzHzyCb8vqpkNyAArMNBK6vZzMip8GvmdEDYveuh8wrU2ZsWMoS7RkxuoSgR",
  "key27": "54y7xaHsszu89KuuDe2cSrD7xGCTW4jUH5RHZCxBR54K4y73Y9oMmHNZXDZyKxYV1jC4wQLoDvVQtP96kjJy4ohv",
  "key28": "4KTnfko4KRQLP8sCEr32HN9tNwDuL7c9zy1jhr42Uh1iSAvF6smgsjpKbz5Xr2NRVeaonzz2d2EMdWX7z6d5QHk",
  "key29": "3R7T21wa4aUwu3bRGipKbE7mNwAFV7xm5ca4gkmwG8GJdVkJemuCp1aEAQngzx3zqrjx5j76j7g88JfXTg4JHBZ9",
  "key30": "CpDtnDzu5qAeoFJFoXMmV3WVknKXwwbKh55kC79yPc9mhMkq4Wti1jCPxmwRNkbLudxz36zXMbwjsrK5faGVHX7",
  "key31": "oNsTp4bZ8VoYU3T3tTkrYNmQzXAzwceeaTe9zT42haTY1gLpjyHFyGc3L6RPF8Rva8u3eUCf9EungjAbNrvRRr8",
  "key32": "Z5btgJxrjMzCqFHVkSd6LemVibZwi8zoDfHSYQKu3bd4imjBUfHKw8o83GboFwpeTa6AUX7vPT973YEufKsBEfq",
  "key33": "5fSFGmM2jD6UzuSPvrefDUsYazLddYsnnnDqCGLRYtCUvGEB1kA6PLd4xy7sJRTv2E3zAH8DYEYkYNrtgXGAMhdL",
  "key34": "2okgRuojjZsYGzR5id8qb7yxX8kEPRPHJrapydRk74LSCvxNzox9eQYQe15zitsVkdaTFb187DS6cV1kBUnfUPqW",
  "key35": "KT9AyshWQ11AZDVf6sjFrFpR1RQ3k74mA673ahD9tgt8fjS9KRg6z7XBfpvBnFva6QhE7Nwv8T5G1GVV8v2uHeX",
  "key36": "23U8JbHzDQtuTuvpU4vKydni4cDRE7Ri14Y5Kz2JL1kcmwXFLQh4urNeP32qRHmU2NcDS1SsMMeN2tq9RB2WaGpp",
  "key37": "2BiQ8e49PnnJCZsmmhKwMEY79WbtdREqQjTXoZT9cYEPxJ8ayw5D1QsphbL6hyqh4bqyZqdiFnUJ9MKivhL4XpSA",
  "key38": "2QpiZ9arCpBVVj66H2NJmoc8XMaCDTEvi3qfzT6dq3vmhX9LUfiEfMPEfoSFTteqnGxJvfqvQD6jkuxnjz4qqiz5",
  "key39": "4pRPUqNJSVFE9x9MW5pBYsRegZJgAu3VZwaLFy5wfE59g2GyNCCnZDHVqDjfuzaKjd3eaKpP89ZX39ZTcQF4hS65",
  "key40": "3BF5NKs2SZAeoaSkHdbMEnPfEzDY2xDySiv2EeJq1jfPrDR7uzQW2g6SUCkAHovPLgXU3F5y8FMSrvvbKu3X39Zg",
  "key41": "581X5pU794DyU4EypzyrPAL6civwhNmykGxyn41P2hjnKn5rRMkKccocMQAC6pPz9tdiSHPfiQ1tcBWPbTfYnXoR",
  "key42": "2LS1fx7rDbDdwBpDpTTbbBDNHNceeJbrSshibXPrXkq1wF6CtkFgaWQDmxGUTBNn39ufDg6ZL362Qesuk7AnWuws"
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
