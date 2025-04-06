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
    "3ruANiDKP3fCWk8N4WzaaXBEsk7QVUnoFqfAtLvszaUmhEafNCV7qLgmj4C9GQuQNuw8iTTPmAA5q8Ydzr1D9ZFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZH6RZnEcZju7kgUXYKQwdoajSJPYG3pJSbx22QXSNvkMgb4AnaaSLv1bfTjLAXczFxwvFcu8fNqvoGtYKcZdeT",
  "key1": "3esKHwi5tkQKRtt5cAZSPazhS7j9gy3RyKkobW78KgQ5mhQ53QG223cxnd2eNtvF8jLxWVer7agJEp4a8PLdbiTW",
  "key2": "4gGKg3wdH4moGRVjqsJjz9Z26kq7Ci32TjpkcxEoSTtagdxPhKJ4z4JJDJhep9nEQNkABPmDcHLSaANjWiBcxwcg",
  "key3": "4CJA2vJa4m1WLz9x27xPTUTnbRjFEwAbreKyZe6DBr2hsW41rYh8cx9NhFvYvz3tFB1vwauo75tdS2BzFZWBxU1D",
  "key4": "3xZTKCYGYpCF6Hpz75gKGN5jreHoNgpJNfouWaTwtQJBuc4uRspPiAF8ZASs9ZfYe2vktnj2jQjn8tKAHYAEwiTV",
  "key5": "2peBQhYdmnRAXWkBxce2gyA9NvejV3dHeQ6obh3fmdxbuAWt1aw7Zhwt2EriYfYiDsDBE7QHsF8yvCsjwwLgLgdY",
  "key6": "52U317eE5APcR13wqvKHzf8xMZXynyjqCrdpKoPXCtYDVXt9dr4Ro72zDBd9mmuoi2AKmgE5E2CoqR4gqUo8wxu",
  "key7": "2JhMGifneZmczKPm8RoHy5HHEn4DdsoBPEHu8xsKfU76eN9yoCQUYwKs7A6GShXiyXiHmTpZkGXFmj6nPpBpsN24",
  "key8": "3nyPxDrJSMYTo5YAqNpKDwfjXy7TH24R18HDe4Ae1MhdZuqzVdEtkxpSiDk7N6L4enNcZUuMQ3RisXyPaZH5QZby",
  "key9": "5rnzrkPbKciQSg77sbXAs7uazd6KqGwiruRocszkiLbe342NXAHc64FcykEoepsNcVwMiBWRfkxt5VK7VBLXu7mo",
  "key10": "gGPJHrTnNJUypJjLRBFuHRNuusUFZPPfFQ7FwykNoB2dWg8yXdwPpB4F98qHyPfpMVjdT6548WSsEuQcpW7w3wy",
  "key11": "5aE7GfeBPSxWsxyqEghrmsoJCZB1EwN1QiDL6qTusnStrhDSa6PQYWQEQzKAwF8AvX3ARgreb9WqU152p6NdeFxQ",
  "key12": "3YFna33pvFBvkRTyPc6wBnNhZBW76T9Xz2rwespc6FAU8zX8PUuV2Pb3Do16L2tRhgrz9WdVSsTsdohgEs2k8KyU",
  "key13": "FbfYxZNQqmhCRvoA3n3wUwj2axrJP2pUpMjDQtWEKiXyicHkZ1SaGFLH9SA6bNaJqcXfsFmsvP3fDkAFddbhniq",
  "key14": "4NqLasocqFwHZ5UKMXKzzBjrDD7bRtokq9KPDhfiu3jS54gZ8P2Lcqn6wE8sDNuMYjdywxPT7PkktdveFz8EeCDF",
  "key15": "4VoWjgD4Set7T3utuADama7bAABr6G42yT4snXMAKS8eqZ3rpyHSAh2XGHHnQMcJq8m6LhS628ToCicQHP1FB7EU",
  "key16": "EKUDhQfiCxswXiPvyCxLDqWaiP56fVCLTZ4aB3aQf8qWSrCz9pYSxu1s2QU5uc4Q8z7myoskagFBf9Gy2qD2nif",
  "key17": "4udotyGxBnigYKkb4pocgHbpw1wcKg1v9hbwJ7wRyiPCwiToGpok6yiqEpq1JChCLSHzP9ZYDAHLucGbMZ4RTaDh",
  "key18": "2cJzxu8rSq6U4ePkpacb9fQ2GGNGHxQL5rWtetzcBuTGgt3iznXYVUBJgVJXZSM6BwnVdzZHoF9nG5dmYaKyZMBN",
  "key19": "HvwNKVxgJCiyp8yJNdwEGg7pmDGtFp9bLsqvcRZhQZ75gY1pHdQrHF1E2FrHYdraUdyk4B8sYzXo2ofZCj2JiKn",
  "key20": "2tPz2jpBXYvTwjJZeFUqsnhnK8L94GRxtMH9uH6khcZxnqfd8Gn2ztxMjezBfzzLMUKqchFaW3GBW3j7kxG72QjT",
  "key21": "4mAbChptDtunMmQNSjyYCojeT15YNWiie831LGWDkgczgnmPYWJBjQFtsqPVDo2xbaypWFXd14M4tYUqh71GQKhk",
  "key22": "5tUgVWGg3Wx2rhiox4XUx4Q7QhCrJFJFoqeBVuwkCFoj7TwLEL39YX2AD2B2qa4LzKRjyVNd2FJmxH13xebSbWKX",
  "key23": "4T9638Ci4QVcQMFARopgegMwCDireAgMmbamHrj1ffGvfEQszKmBgTd8LV9wzwCzArkMyrbcuw6eg4xYd1ngK2Qo",
  "key24": "4ekpHbT7sHYN5YNkw3ccjq6CokZhWfC7GNoY5epiY93HsEA84qJ5oDHXzrcNka9BYm8EPVwZbM2UvHaAaJf6wWC4",
  "key25": "DqGKTXCwFb8u5UKZjpZXRqNJX28uLUyMCAgzqcqjZDGoeTzdWQsF4Sqj76yGt1NRK3aEUAw2wEpEaWGSV65MW1D",
  "key26": "5FKQqqT281uJKUm4mZR7Y8myW91UJft3D4RyXQ5dJKVNEdA66DMxVYE2rzMgkbVEKTsTqNo4PaESRiJAsQEVSRBu",
  "key27": "5mfQ751aD7EC8wBCkj39AJZVEb5yfRR7PPBsEYCg5nidSk8dTgxHdkFsLRwou9ujtWPwtxfYcBs35wGHYi8Fa3TY",
  "key28": "dstTDiU93uyvcNKDChHkVbWv7zT4xoEaLd1ezYXArM2Aupn1N3DrrzWTDDAQ9LGWuSKba3AwGkjjDtXpAzeLhs9",
  "key29": "5DjziK7xprdLAqTvdb4K3LJVARr71xTqk88ZQnCjvG5wEHxDeobVe2E7qPhrPUeJWQyaNx63Yi8aR1iBxN9n2qHN",
  "key30": "5RZJmr6HjMwURBDt9rH1jHrcr32hPjcQ1fymNyvAUm8JCfxPWSqYJZGN7htBcSQCpwJgJK5Dwe2JDRqabhXKSkeh"
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
