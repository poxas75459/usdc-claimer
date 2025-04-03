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
    "2ZFPSegEAEEXEhSVxAB4H6y8hJodEQLx8dU1HH6XKQyc2GLjh9eU759Y2xNqQXbLy7LX3i232ES4jzyhnFqZcmV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LkZ9kQToCt9ZsayPB1unZiuAZGox6L6D9m4hdPUTk1S4YrV3jNEa3nKckU5q1VmQoNJpVmQ6sLo78qi6kE3vK7U",
  "key1": "3mL7vUWfygcJW4AYNfF4yDujzooHvHHcD9jxvR66r6oKfMF4wqDVDtBB1VMkLftiR96YH6RPRnqhyqgdZAZcyzkE",
  "key2": "34crpuoDd9Bj9tVzY5LepsE1faQuaSLmWd49iNS2mDaY5vxzBQCMsK9KCUakEC8VNZggpfREkmoSreMuU9ZrAkKo",
  "key3": "4vgTjYpBarXWeomJGZofrKkBUWu3AfiFeodxpy9Tm66qg82p2ijUzwW7bGEK6oK9T1na36p5tAR38McPabgVVZ8j",
  "key4": "2PERSqsqPTbjPanYBk2Aa2xYmr7MANdDDTqfTShU1gKWmTrvKDAM4hsx2h3S9hgpE37S5hsZ2mF7CPJJeyWv9ATJ",
  "key5": "636m5LVm2VchHsX1n6TuvSzSjKpgMtzTo9Vu3wHbSmkyJtbqCwCxiEoTJTjuYXX3kFdLPuDwKhU9PRnK9xFh6N5d",
  "key6": "2F9BetkvRiA8GuEbbXPFEJMFeSowJsH2hs6JdvKPFWDymKKUhgQhFZpN3j48EdUUjq48S7E36vKH925tsavMQSLp",
  "key7": "4Nq5ATor6bK9qTQBQv4vvq7sSzZDfBDKirZKV1VQGyt7kG3kDiCPoYoU9uFmUSWe9hVFYb2pEh468PAfdNGvrM7y",
  "key8": "47TftqQiV2eki2n2LBKoPdCuDf3HCF2qwKDh9y1CSod9diDpSvX3U7x7u2owwuQkgZbZvJe26FAoFVGcDLFoDwz5",
  "key9": "2f6H62kMvbwq3tUiasGs8QH9K5HrAGZohagQzJ8aapC84wdf14ma8m6F72M99EuspMA1qePmzbYkxnteigkgZPF5",
  "key10": "2BDH9X1osgdEPuyYRfAJ4zbDUyNvTVm8ZGDfKJ2CNw1XQGfjGRPwR6SxUbCUyxd1A3baiFbGvCNyr96ZPZoh8XfX",
  "key11": "2Td8iRYa8iJPkPxbWrg2JMZwRSgX2gJSXBME23ARG93R2geMQvgnQr7uXkUiTT3VCWbpfXJJk3KsrsK7p3yu5LM8",
  "key12": "5eyM5M8bBFBmxv3qgcWQ2Sb4MyAf3b2znihPgWWqWuZXsrqEzDPLeybcXeLQHFtBfLEXQF3CGJZM4uXGbAPgKTpZ",
  "key13": "oM622pdP3X12xBxNCiG5etSbYoANseQh87YoM7e6fpkcxfonxvJsoxt2rj8XS9vCd5DGZfpFmDz1GAWvrcW5ry4",
  "key14": "RwbDYqN3wSSpbEqZyxjpNzrYisQ12rG9aiNZK2FDpdQjEeNfViK8ykkQNYT59x88LjNfeWGLQfU9tFuWV4ZMoV7",
  "key15": "ZQ8naLJQiQVsxYf8yp87ugw1hrhRpS4jW5nYsb6t8wTf4N4pAuYQksckmWym22nefpxMAefbM8EytWeezLoCs7t",
  "key16": "3jVHLmfvVbfgYPknZU93FsY968XYe8ftwcXUuAprtgQp4kUPyYS2djB5CmDShXKxr9ngL3zdNLscLHDTEfgGjuom",
  "key17": "rgSkDA5X3L4iButwLJLkuTzMTh4Jywop3BAwrpBRDvfmQbHhDg6rDJTbeTa57ECgtrhkGVzZgbVek7bDSWXbkMa",
  "key18": "5NXoPNfQ5mQzGkrwdVGa13sWLKLv5rywKT9vPqHzE9DwbNEaxnUNhJ2i5tjcPQcHEkGB52YWNxRQB8dEM52z4FS8",
  "key19": "5bjCtytsSXfvD9ymdB79kXYxRVaaoa6wNGHYdmDgK9KiXrp4sU2zbym7KJAwXWciNS6gGHAk2va2gwxTa3hN4qYo",
  "key20": "469Mxiwb1GoXRYrgVuHXuQs9PCJwov8EofQmoDfZ77jgUqsgfKV3xqcKzgMpwkBKSfFeTVjxw9s1ix1WZu2ubyzC",
  "key21": "5oDQf37Ya42VVGZpheCVMfxhVsamLSX2AxgyYDUcbXdmjDYV7x2QkD4qVUUtEirTTvHCzxTMYYKhRB1d47ocZzRb",
  "key22": "WaFjm7PhFJsMqQuJj8RHZxR5fPaU1KJKNiyMmBVFHRaKEqBqEwESFev379beqR2JYneDX164hRRsXPQEE27Digk",
  "key23": "pZvxuKAGVrtH3mSZiR8vFwZ8bPTBMjQb8JGZP1nqfYYHR8mHmBhxh9DiQMJzxQ99uhj2VTwKZqpgA3hDyaVyMtd",
  "key24": "28zLKeq8VmrduiaQ5s66BtQ5gMfsyvvw3XvXuozxE1sVSU1f88S276rFHAVVSfvM65nJ3mzpVpCzZ6zcuLGupSgJ",
  "key25": "3SACLt3GvhGthaEiJF5AvRrb8mW1pCpuNiHUifchzG9y14PtpxnzseDfhsmkS9t2gfkJSGqJ5HSoNyoFKafQDV4m",
  "key26": "PRUBPcx8EXRuxhawSnMWn8j7syC65qU57xXg3TfxAztttMrx4zXU1z1HMEcmYAU1PaQbt73P3HikM5DknqnDpRY",
  "key27": "3Xnm5A8MQ4fPwjb5aQFX16nAenz1nXkN5DFfRq4uXkiaNYY9zoEmJWXuixtjFFr2kTA6wgoKYeLcTxwttj7fQBB4",
  "key28": "5jsdqsn9Z2BcTorcxVMMb8PFQsRf65QwrdvninKo6nU44LgCXavq4sNzy9LU1v1mLftQUFF22yZurNzb234XXDZG",
  "key29": "34kuZ61TwpbJcH8F5MhjsXo9Dm6Q1wYA3VZXyuppMHxeLsvyxKTxDJXA2yV6KZiH9FBaD9TwXBYNeUMQWCupLESQ",
  "key30": "3imgW5SPe38nYzWFQKmVCDT7SgUmWLWCCLNcFUbFRt694r3qzopXV1gCPLSAF4EHs4Xu6eEhhXz1NwyYFMvLpLMa",
  "key31": "GwZou395i7zaYgN2pb6PR12Ym6izcD8pKrHFU4z1JBraQZmGTtNrkGqoSsfnnLTazr57byt14HUpdj91MuYoXNa",
  "key32": "ynnX48DD23tfBw734Dur39PkUEKGJdbeTcRbhsQ8memrjTgsGFE5BydoEuXWqj4yzgtBwmnhgtARbGpJJcj4bWB",
  "key33": "5uGCZKim5kQmtq8DkSYuqqAQ3yP6zwydFAEmFxiccB1VKPbZUWgeWnZoB8rMDZ8xuHgzwrGJUWUBu18Zb3sqCJvj"
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
