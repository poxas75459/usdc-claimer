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
    "5xmPUScP9gHBUkyUuWMRz1uSbFgD7SJySwrsSBL4erb2aASHz72VANDN4yPdmJsnnF3c5Qk1yKKiMwMSMjCa3e95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bm8e8HrQRQJRP73gd3q7VxhRU7E3GcLzuVvDEM2m9cYnhBPEmBK4FQb666yWcKi52kSZfZWpFwaL4TPAPz5knTx",
  "key1": "FZBPF7sXJPU1kQ5SXe2UfTNFEyp8kMVgVsxPu2Niu2pC27gcht8ouY1gt1mJnsqfqRvrGk8JaVEuudLUx6tAa4X",
  "key2": "5twTDFBVk6o13wbNrzqT82rqyUkRXT7DucfQHGtsVvzcR9YA5P8YzMfKoknrQp5W9Ei3fsB4rrUG8kFf4ArZMiia",
  "key3": "5y5G1aR5YXySVtmH5gs8hWwgL47mDQEhp64sVzU5xPXG7yhPLp4f7X7eGPfKHbY83SsfzUmKbZ8RY3aVmhMisbk7",
  "key4": "2s8iTginQGzEfcXwdqq7b1BWQQe1qsA1FrdsPxXGHWh1DTHiQLuceKuS84VtLLXwBipXfBZsb8hUZkBW3hktTa6t",
  "key5": "3MHQKgRFBQ7LX299cmQmGrEzPGxPgdnYQnsfr3Z4nefYBF1J4HHBseBXSEwzi2cTV9EpaZyA9MYic7DJChhRocZc",
  "key6": "4YeaoAS7A7TZLx53ccRKvdLYpSEuBG7eZL9wy5Agvp3WmBm3y9fpRTsLg9izzqMjxzQJz8U4eGxRJS1cVLq8j6Zo",
  "key7": "5imDxjWkJGJSzYnJX2tryEK4FX5k9Q5yLxLtU91MXUD3PRoNT6GwtNSTLiBaFnJ2BzajT4AsVwHHRfJ3MX3cSBoG",
  "key8": "4zxYJY6SXeWc5gw16e3vgDxbiHWXU8eToCLLHvVc2ibQKHKYc2C5bJqRw3tbv3AYgy5dYVpUgG3HJUixWg4dcFF",
  "key9": "3g1Kidx2U1xek7XjDZ2B9uyvsxevMPN6gTL9ekn8xdy3z1LvzNP5QmVWZxCcB34ah84Hs8EbbiVbYWqG7soUmhX4",
  "key10": "39T46wYmDWSgbZxPxXiSr2x5PCeCw8maWXL4UWCh1cR8uKk38uHj4NRnRZmF9qaFTAq3go65LwF4Bd1UMJ8opygG",
  "key11": "3g7GkLjJBpzVicGCcQkMJDBSVS2CE1NuqJR53Eo5uSVno5dkKwuqQsUBAeeEwxELZ3ZevcptVfxZPEXAZ2CS26e5",
  "key12": "26MJ9FwESkJ8gre93PGJ4iaQ9MWtTCd9RKNNc94n3yWwsz4YByUVJE8CduuPDRTmdNmRP1AmZDDRmFxAfNBxy59g",
  "key13": "4n2oDSA6jPm18KehZF7pYSdBfy6imuVX6AbJrYPKzqPBaS2KEiHBHSYnhcT1Q3rQBmUtdMiikdF5hGYYoxvJ5TN7",
  "key14": "5he2R33xQ6nevMEVHWT7Q5TB7z7Fw4xesaiRmFqzfbud4PehoSYdPAjpNHkTk1D6ypScwvEFF4CTnCnu6wdesV87",
  "key15": "MoBU7QycNoqFjA6QduAm9ubuDuTbTaCkyLtfdQExZpruZLC9cSyC7um4RiVGp9KHVfW6nCmZesFVr5thMVapoqp",
  "key16": "2NaSmDkBcwUKTTZR4P1AGmeAKiSLnmCyiNp4ikpEkiThDd31PkmFDtnmo6syX11tv5z659Cz3U443wA2LAFbwFki",
  "key17": "5EQf1tAQMvFPtwhbz4392ZKLg52b6PNq5mDXWS56uTnJEjtNQi8uPYYCXTKZZouibEMiy9UooMLJqZzHc7N8wxuW",
  "key18": "4tFaAM56cmv4fdcCo1sipKztVvRfp9kJRe7HT2wZyH1YGJkwNgVn91fz8X8sr9k2vPtHpTrYSfxNXZnGxJ1u2U2h",
  "key19": "2pj96ZNEQm1sLghDio7xKbwctn8Q97rxdYvXqo7NTgLn8QdnENVG9STjLxZ9oXaygb3gmRqgBm9G5kbGFayjFq57",
  "key20": "SxGvHSTKrXbeeoC68ytKJyFiGCfB1HPRk7G9kg4DHXheBWpqVqe24EdFbVzCopZyWMZheFYrVn5AsanaPFkonAh",
  "key21": "65ouXuj9A7tBgz1KmJVrgLXEvmdT3G9VLsZ4FFp3B1hHUYQELZpsoGpjTXAGssyzrReZQHzC5ReZzoGXpmGWeUt9",
  "key22": "Gxn4ELpH9JRbvDd1uZzc3EAKt5H985DR3bDFo7JPkJERgAToPToocJgPnfk3RedPCjqh9Wt4Abf7yhQdTTiZySm",
  "key23": "5AeEfQ88CXKSdyLmMGivE43DmNawZXz5fAs4Rn6gNGSqkoR9o1RYG7BT5DhfKFNasCmajaLcUfmWiY9PnFib6aqC",
  "key24": "4VZTAAKjm8SsHUmAznXmKv5XiAZAB5hcFZTwRtfBuJv4RBKGvXuzA1wusFEejra6WFZ8QykyS5vVvvV9Qc6SenXJ",
  "key25": "2QANCCNK2mWetuPV29LdBbQzmefmBhxGtyDDK1ugFBTW9V8EB4xFUPvTdtFpAncuFzggwktdAyjNsbnwY7qn4Nzm",
  "key26": "5NbjyryYFRnJgRDRMmLzoU9d9zrSwUNLsq9XjzF6Xnbi8MYub4PfFV1eFuBVzzEJV7ah4rKGFU5opTdzKrSh3n9P",
  "key27": "57Hp4PoTZ8j3MAB4W2V9TVVnYAwy5kTzm4MYaF1tLj45a2P4MRftYjABFZeSz7ypYerrjCHBiEm17efbLUf8g4BW",
  "key28": "cspuQbqGhG6K2o1PD1rXwNuHGYyLvNYB996uN97MBAk4s1hfJqAKS17249oprKLUTefKLNK6r8kXthigtnFHGwB",
  "key29": "2jTYcDGzmULXgAtxzazHqREmoUpydtzZjhTcSV5yN59Qs9ziv4Y5xbtJXvLJ5QSroWdkWyV7q6ND6rc7GVkU7bqC",
  "key30": "4DDi64MFp78SJXtHcsVUfpTT1HMdeRUG1xJhwQP76niNSxwHVbD17kGp3WsR9uS7XUikvUFVUmwF55STMMjDxmPC",
  "key31": "3bLGEKqqBQqJuQ2GJPpH69nrebzNcgKjPRWPo4bPmhSoNSDwg7Z5bYJsyvxbqDAoS6CXic81hM6w4gLSwRUBsnyx",
  "key32": "4ocq79WJWMzwVBQmgMqfYkgQS1BMk5EcdX5RKEGHLpGCTghE49pbkj7aWoF9DYRP18bTJm92MMiECFewyYMgLN2r"
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
