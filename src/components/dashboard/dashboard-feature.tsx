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
    "2yi6MaF14kBVFg9iv3hw63A62aFgXUnpmUpj2YHJD5MUZtYd61TphJWBABFfwDyEjnEL82zYZiCLnMRXgV4KDzQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRs1MYWuXmd6JXVLfK2bPLDWG9xJ6c2ixBAs9cvBf6RWyQuHy6omvaMLcuM6L3DgsB9Ecq1tGgnCpFSdC5gZ8xk",
  "key1": "5fijFX4utGw9PsFGUxert8qDopg75SyUCBoMPr1fvaMuCnZKeUE4gu1EBiwgULiEAEkD5KKREEB5EnG6THRnwfGP",
  "key2": "3aTxqFxSxXQZg4Kmmeuo1JiQCsdRGnoynVy6tfPJSq2Xuu88MNpFd6HrZcfqWP8G2Yqo6MAvVf4YvGBkB1ZUayE6",
  "key3": "3ABnoEsPYDgwjZw7nyLVm1XRmAnCTvsBT32hpRMFHDsYuXVXnkGntWcP3bbCpbZWvmGLU7cwafVtoV8qjgxB6gcz",
  "key4": "vyxTYc1EFCvnoSmrB7ma73qsFr2idBgVrDVQpyEmqtHrQFXjdN4Ro2ZzF4Ss8ajLWzFUEtZe1dQAarcCA3J9eDT",
  "key5": "3eVSezC1CsqadqXWKcjLHfL8yse17Ze61Y3itqhUmEEhGGpMeyW7nKV2SuaEPeeNCdFbBGJt6BEz7YYqQT23u1Tx",
  "key6": "5KzHqMDFhDsZYtPxBPKaFqLhwNHdtYt66vpJ4rLAL7BP1YFnqshZx6tFA7xCdSVb5XL9ELsJzGwnK4toETDn5zj",
  "key7": "bSjPYdmH6oBQPj8tzTRiX9WWfY18qxfrQJ71Hgt4sDS1NKsPPMfnrPHwQ5jGHqdTe2ffGhV5rMgksAVa73ng4zC",
  "key8": "3JYQqost6QSrbTqzCYnLczmX2uuRciQ9i7p4y5Ks1bZ6urVADNryjkCNb3mJuBayU3d2ob1n8jjTuVzN6o7QuNbD",
  "key9": "6434X3nfpeYffXtE2DiqMfivhVkYNjfFuvEXyj8xMMxhays86B3PZd51guyToka4VomckTxJJfFcwXAawr9YNt1S",
  "key10": "4M4bgEE1sFDizQaPuaPmVi1n8mm8Nt6asY68Bzjq6f4kspcnTuHiReTXu9PuEsZRxzC5MzWLESXcqifcqXeKn2h9",
  "key11": "3jHoy7srWPqdAigLZ7mAwhEPrDJ8WjxEBEnWJjZnVwEdgeKojMRHN13MeyrDo2iCZfa7JmB7P9EpTTL2VzLUvLzs",
  "key12": "5Gf3GGrUMbdymitj24ES5ysKdFTVyQyKuaUYjDhbvVaYqacGcsucoFfyyuCuQnbtUSw87chAhrgVoeQwpWAMuwoi",
  "key13": "3bhmBUhg5o2n7davQjZPMBMhDcLUW7api2fhjHee16sWPodiwg34GcNfM38BpXf2qZsmzr3ySFiUV4CpYVdhzZsF",
  "key14": "Z5fUSS7TYxKJYhVkwmGyu6d6Xo77Z7dx1efa9Z6GQmsBtJeLQru3nNefNRSsbnn7eadBwUoQhueLuphu15C5b9b",
  "key15": "pzE2CtrRPkmXwWdL9SjMerpy2HfNNogHtgLv2UueAu9Y6r7jQT2am7aBXC7WKa3MzvYbRnV6RCnGAv8wvWNJ2ta",
  "key16": "zRkP33xMmHq957TK7VmukoywaUPTJmkQXyjgF1yKb4xrWFkFQBb25Ff1GePYYRApwoBnoe286Hs6WFq1guQHSrC",
  "key17": "4wTUyVmbDNvtG9bYPgFwDps7UxqaDc7rbZmt7hgtmBrX48eaNTNME6QjQmbQdYdgRcS8MCq6sT7qyKpUwVnupmqC",
  "key18": "37DA7HqpzSap8iFic4qRrAuQA5nDnUXGGTtP8wTovvY8orGUezxRMkJzJniBHWoDvJBMS4qgrKtaJwsfFnDr7bSV",
  "key19": "5kkrVZhFCmB49FE1Gf7AAp4XJoKTeKSjywLtCN3TgXgkEQ1y7H9RVrwWqbWcw1FGMoMmUXN9d8PafaMGikVaNx37",
  "key20": "3xsX62jFrc5Yfrf5yrv6hbKvWzs1YfNGEs38eB7rZhcbKD3eVbM9ESj5Cdq8AWxeQFuWf31D3d86j7T65FNDVukM",
  "key21": "CvbJzXSrej3wdB8EizPgdgpFasgzZrNJtAqyLmWQQNVBDvJ22QxoiZz8So9ZUmov5D9TRYTf2Lk2EMHz9S1xqJf",
  "key22": "kqptA1jRp9ZzU3t9KXkG5BP7FYUL9zXEfLAibZYC61oxmxnY4g3S8WpWavrFK5RvFJi6xqdsdDu2s98k9owxtkx",
  "key23": "35Uc6GmPaSMvE8BkLS8wdgQA63Y8dozA9t8gbPX2hPnJLX5JamatJVVm7aiDQMNMFcUf72WmDAL6PgCLkk5WuNpW",
  "key24": "3n5fCsEMfyCD9C61r8inJB37HZJ9ucgUn4s6JxkCu8ZkDKbfZ6aCpWqMzkT5WjC76PxvoGAg6KeQXphKekubFhhn"
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
