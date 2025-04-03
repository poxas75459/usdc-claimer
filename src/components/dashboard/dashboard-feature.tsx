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
    "pdnc2NytLRHWytdf1ijCz1UjJmbEGYYf7dYG8cQB2aodgc7BZUa7HeYqe5RA81L6xybM3wfDgAsk5k4FqaPXWCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHdjvLfBr9XsSXgqAVTbgkLjF65FZeUaqkQuLMSZgnz8e9GcWGu7qb45b2QVgE5UJWn126Zc3aJR9b4QDQMQPQu",
  "key1": "4VCHvkmPbdxXfrCKiEci8xxfALr3S3qc6a9ApfDWmFhb2ijShkNFGQRh9NH5fk77P2kwi7EtUFG3q11FT98KoDvq",
  "key2": "4AP1SDopLNjg5ugXpnwbTUu1GDjb3gs63LFKZtpRULaKYT7LGKPnVq61UtnBAq2qeEgG8JyDx9kcYVv36eHGtZfo",
  "key3": "5xvdfK66uqRau5oADTXVU967tU2mxmDdveZWihQjQUhFhj55e7SFLPXXFeza6FM96zBwi6GVFXcXaQUY4AF5iSC2",
  "key4": "5xZJqbeq7Fw63y9gNk5fafqYaTzzqNUznBufUBJ7FZEYbFVT17HfMhguZuKQZzkuC9X1tL4783LPyCG7KXiKcdC3",
  "key5": "3AXVbFJ1pQ32rTHx9FQyumZKg3Ty7csfc4ozy67yKUeM2vr2QgWFkJsbgJ8MkgxJ7Yn7NkMiZVR4qVJuA2EChFS7",
  "key6": "5iXd3BHPSghXgkLvkb7Jxo8ajm5ygF22cwU6L6vFsHemyQpp13d2aTJVvKkHujNDJPTfuqfSWQciiN6FtHN8xJ9J",
  "key7": "3usF67Hn8f1m7QvKgn9hor5cJ8Fp7aK6Xi2jTeDHaLEmuTAEmBpBcya2FMMzz2KM53Qpk9Rt8NLQqN2eVSp9bKAm",
  "key8": "3qkYUEiPBeXphva2EWbNwg2kNherLvcmcnGxX7fPD27V8BBPJ8WLY7ZjorjoJGbFpfUappVMuAK8jsFkUHLedZNQ",
  "key9": "5jnoxwijA2WpapszXJuXmGD7vizzcMsHAg55jZTdQ3rrfBCb1pe2aDja1996JpmxJq18riQDvY6s6m5vg6WoCt8z",
  "key10": "433g58VLnzpGVBc5MNSUieoQg5UodNhRzCnZ8NUXoZv9WQZfqPyYcAWzAxsHFvZpTmFnSmJ8DM6yBKnAskHx1R6L",
  "key11": "5dM6vvefP7PygY78vaioJYhfSdz3BzoJuhfjgfck6GRrktgX9WrJhmahtXDuWMrSZbwyUrVWonpUjpap8tXbf33X",
  "key12": "5d766mBdi18yeS12Ns4fVM93gyhQT8mEf65eFFuDZSgdLs2oajLjdyWkLfD6MrQCsvs94gpmpCmxCq4ffNx9JK2y",
  "key13": "2z5zUhLqfptPtFPoZCMbygR2JuVcC72S7z8PZw4xoeuEsmNfNtxC5U9Dz2PGuwzCTiStHzZ7n9tw1ggzfh5wuDBw",
  "key14": "4fRiNhzf1zfCfEhjMkDUoChk4L2As1goG2zCbm9QJT5iS6xHNrrC1YPh7RVKawLxgNHBs4jQZAdbzqVuK8QPJNeq",
  "key15": "5YGia5PhDpNiRrEwg2EohZL7c8GzR1egPvWJ9Z7zgM44w41CacXnQWHPKdJ6SffRpqg6HRb4J4U2sLbzTNAd4whz",
  "key16": "59LwKsRnDc8vTU4gJSste442FDohTTD7phJNkpSTx3xbRYJ2MgDXtV5ceKsAQPkaPiKTUtoeYNmsnk9swT4ZJrea",
  "key17": "64SNTLhfMMr2P3hUUpot6UkvB9kXgBk7XeCCxo32BR3aeCrQfVSF8ZGfobLM3RtmGyAhbqr7F7GLh8TGho69JYZa",
  "key18": "4xx8CmqJs9ufdy8Xg2Lhg68QWZNDDqwfiTtuv8TbN9JdVfK1ziJqHNkoQREJgtpoBHWQtRUrjbTbFQpYKQMp7VwQ",
  "key19": "3MPX7puXSrK6SyR63K7FM3h9B8fa7jmPhvf88VWsGRuWQV7sC77ffPcyzk5x1MLtp78HrMu1FEqCRUkKHrBjQ5Bk",
  "key20": "24gGZPxjFrxCGphp4qTwwtQivT4NWEnWrdQS28mmj5vrQBh4YcM3kF1r8EuTDBbZ6w5sgALPv1vWnBB3YQ7AYvpG",
  "key21": "4uoWhFd5Q8AdjSgTQWKjUJUTpjTnYaW66ihcmMmUEgF8NuNGN4yRLoJUG34jff6oGchVqAzTp3r3NCCzXRRewsVJ",
  "key22": "5Z7rvRW5p7uBmvaUYx4bqUBprrvnDAikU6wYMSntuiSmWP89ZPshuq3tjnPXFjDtdAvt38LmXTggg3RMZTeexqqu",
  "key23": "4JDzzz45A5pgwbk3CEnLuvaZVXoDJBtP1VHTmhKE3tTW4SCKvZrS2Em3ssk8t3pjFFMnzwxScQj6Zt9uQknULx6v",
  "key24": "36Mb2ViRdSUo63Ef7WaBPin7N6KG1qURMy6X8zxXhUoHV6LQQxJamQqYceKSN6wC5dwLLBefrovATR8BUQ75fpSj",
  "key25": "2tWgWf2SM2wzx8KxwEdCWNcuFrPtR1tiVKEzFqrvP9UB9vSEHaGVaPLvU9GjnXyZPGk35J8P7ZD63VCcUSEDqrHt",
  "key26": "3i5moffStcGgCm7AneQzAA9DeiyTukGRQEXYSagSw8rAC1cMTQS7b7ZGp5Ntk1pLpQzjpusLNyi8ztcdBmpbHc14",
  "key27": "PMzHVQ3wT9T9uHM1gY1raDfEtZWFM7dFrpc5smmLvEpLM1o6dddT4ocCq49zD3sWVZBhU5qVjGcuAqTi1N6bCdd",
  "key28": "5xnZ2eXLDLu2ixyFyt4vDakXXJfRJzjoqGbdm4aenqJPzvLHwegPxujiXG54EMjUwxCoYopHH76a7eM2CXNgLwRB",
  "key29": "4e7DMqS1goBYPWuUnga56vLvcwARHLnieHrM9D29r68uQU7XqEGVLJLoEWn751VZhUZUWhq4QDESAY9QMJtbKriW",
  "key30": "SeCQpyoVMkM2yAjrQG55qrWsMr1EgZ3aAJYD2WcQurDV2aJbtykjQPFjdAWM4vXV1F9A77XJZ8CKg6LJk3rYTKv",
  "key31": "RF6Wn5Er2nwPMFB4h8PjHdsEd6J7FJVyVY9ws7DzBBhRhTq7bmQKzfZ7oBKwB5MHhgnhBMgBEDcE19My93WTmUA",
  "key32": "yVZMzs5KG2E7FSyw2umE4MMG7kJKsVm4fim6Af2eSdnTJogthQe5E6ueVbJDmJao4RFacML4AGHkVgre2kSat6f",
  "key33": "3dpxDZpKdx6ubDJc2MBPdHTJvtZtzCYQj2MGmQ3iMCFDZ4K9RcAp8xZq8PP2vxg4EBP8rbPzrtJZMW65SdqkmDhm",
  "key34": "2AUPAQmirJ6mCPXCXdnUm7cQaNBZKTkfXCRPMVXtQqDZowey7N7sFzLDrXtU7YhqbhyJbfpjQfMfLMnvREToRewU",
  "key35": "4RQ4rPwrcPJsATcnVjRWL6VT9a7YsnMBP4KgGhM1Ysgkvk8jfJtC5riJdVnpu94wxnWwUxHnAyaZc5fe4VPDzFh5",
  "key36": "3PYN9f81dqQkoFYQwiJfPMfZiiDeYauzyDjLiL952yG2HrwaRqFLBghWMERQrhWjCUE3JPZUNGneQUJ54UsubTQW",
  "key37": "eYiixPD2sM4pjqtHfQz8ERxmZFTBfEQtAA7M1M48ppEqqLKh4aGbe9hVMZeySMhRWXjYVyuJQwL3xpzqGE88T1d",
  "key38": "2ufUVYnjqbwcpQKzJcCQXkfZvfqbZt2GaiDVnitSsUek4ApjH42t477MM1Cu21XhSDcMTpKoYhgaSiJ3Uw9jhL7y",
  "key39": "5bABTN4RPhukvHEeDt3fcue3chAr5Vf5prCVekM6jjLvr6bNiKSgDrEkFDPRWJWwWkoKCHgY9Sr6rYAexLmhkT8u",
  "key40": "4eroy9hVY1gjXr7nzXR6YwuHfCT1cb1jkiYjhXTErVA7hs4yZeKTfX5hzgDwkGc63TP5Pat1iGj8Qsjf6UgzT4WY",
  "key41": "5PyrMsZdXFvFcq9Xmn4DKv2b3xHUZvFgWDDApKJrVPiWkdoVuAsebdozKX3kNJNDXxttre8AWnjBV42D8NmBjpKo"
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
