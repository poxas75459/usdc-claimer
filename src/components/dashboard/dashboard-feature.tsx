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
    "4C44XAUzDJFRhgYwEVVzv5cMU3dMez3T1N5e3qNDUU2CFstxPvk5H761yirad5mK2Za9Hhi3KyxN9FiWGai3izQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkF8w8qUxUM8r5sDZT3Ah7urwrk4mrs6h4Ypy1GpPg9BTdDNDxu3Lvhpmu6nvAibzumuMKRBkCB1A9JuqgQpvE1",
  "key1": "5r51xgA4Yu9cynyFgB4UxjZje7u86n8qnSQvFUwh8DTNZwoJnRVgqpNVmzovQBQj4ZKexDJnkPRZQJ4u6KZiVobE",
  "key2": "3wRsq9u5FEcpMW3cTictSjikyxDNpDNpbdNhozYK2n1brySoXpKneys7bpwCgB4HHmijdtAhF7PVwkqaqneqkXXj",
  "key3": "4pRW9JrgeJJSrcoS85XW5odchixifKtUJWiJYUbaxbpTYWg2jP2JwiV3PUNbX3EUJspd2oZzhnfS3Tkqsyx1v783",
  "key4": "4VU4j86mLi1DZg8Hk5Y1qDV2RxhhwQS7XhJe7fGCVrySNwLnasiv9oQTR8zosB3kJBsaHK5E63ZUMEiRx7yUfD4P",
  "key5": "2J2ygmMEDRve7iDGX2GnfRvF3ovzVcij9BDiUuhQAHD2PZNHCq39Z2ik53jYinqDZaagFek9TFTRQGN94j2QVZ2q",
  "key6": "3vvtwX3TZkjuXSx4KjNzFaK7U9EgjMNxaXLr4syExRoMdGzWFVd3rZ576npDd37v1m2B86enkcLd9GULAMtUiL1A",
  "key7": "3rXTZUANhiwM2zkbWa6KC5ahoy8smvtyGNg84JDWSpBVm128tkveiRyKjBCcBQ49GsFfwNgEucfFHEyM661m76Qm",
  "key8": "57VfwbZNBnQ6BM3qshCX747xWphHWZJzSjytaCX1Z4szfhSPEAHPvUpoFLcRUqCyhZBVJmUvnTCZi9jQMZSMDntx",
  "key9": "2C46nptabxmXvd3DfKBp4Bja4Ze8GtmFo3esKKvqwvvWWkFLNBPxSVmnsV8secdpJKn1avtb6iH9idbazw3SDQ8B",
  "key10": "62VnM3gb6FNpX7PBKkFHKdNhKHYd8s6y985HkMtyTL399TzikpXPvkXuHkCCZVztjtVodnsik36ZeopBq5mS7pGD",
  "key11": "5xkcR4Gr14DqzyFmWMv4z1uT6kigDZjf4Hd1pnAu22kguNbPmV5qPQjTQRQdYimjap3gyWFqJ4Xxfya8DWJ469G8",
  "key12": "4pHNSo5PyS8QqJSVBgVd7hQfE7GZFhkN8sd7PYddsazP6JTfWrnjjLuM5UBHVo8nuHqZtwhrthcq6Dc3PC3Ucmg8",
  "key13": "4n5VwJ2DevYhbJM2Rc55ESncKn7rkyznh7bYR3xdavTeTvNiW2kkxDto4tmWrcheVuHo6qvnyrnCDPE7mwVnGg5m",
  "key14": "2a3sQiqEK3MkAEnyt23DVLscjHRXYwN7nWZzXCNNKnpmZ6QuZV2mQGTAVhV8YiogNa95iGSNJPEiRznhVmimnQ9X",
  "key15": "fs7ZGoowtnR8XAcE3GqLaVmRVQe227RjqyNskiRmmBJ5onc3RUnMUQSy6Q2ijjPYPF8ctUjyubuYvouYunyZaVH",
  "key16": "5WbXY5cPtvaZWJ5oK2HzdxLDDLVmJas2YhCWWHb49xYCC59KvJ6wGNMMnicnLh7fpTU5CHcuqACVhNEPorvvAJXW",
  "key17": "3rQUGueLkSqV7X28mUKnE1oi7J3UzRmMghkiTswU9qdvX5q1SHX6kgcpqF81PY3ge6JkcsgUQjJT6bh7EnG5rZov",
  "key18": "3heiq8VqY8giACsSv77aLaPUH4Zpq3VcLEzGomK4z99f9ECf1jzrMm8KdK3EXrA9U9daiVBHsp1Gpu9zEz3yY6tP",
  "key19": "4Coq8t4VGcypABoxjov2GuUQjQtW62xc62BQdBcSQGT7NaWx7vERjxzWvUxJFzbqgWuRKV3Hj5c5RdfWtAhyrdAb",
  "key20": "5MJNzB49nLEvzjAU9ecCvYy4PBkv3FMeVEfiQ9xLGygaUeUVe7E6ywGVaAZEaBzQZJRzfugoYAitn8wdZSkHXWm7",
  "key21": "5siquqpnPDqVW48P5RReZboChm3NwCzH6LLA2Q7PCULP7N9LGZahtxtPqJCSfdrfp5sFTqxWWfGA9Huguqxyhjeh",
  "key22": "3jgFt51hfZFYHxGeDEpY7ZjMZQQwiVdv8CZNUNQESLEpsPyF2VCj24VnDtv9XLAdroP5k29tjRggp4ykqYFCASVo",
  "key23": "2XEFCm68D8DJ1SigCAoRqwQ9R73WF1oF4nYZvCSct9UfnRH97hRVbTEyH2Z7oDpDVjMCsUEKo9ggLQvbq16MW3Ph",
  "key24": "64r989VY7LFY3mmfSEdnRBsgnunzBHEi9skDfGSk2nBKK3CkZRjguBkM52frNtPfvZykeuAdm9LyCeCHMfG6jmBC",
  "key25": "21FD6JL6VbLMm4anjzBhyKw6Vaq8PjpW2MacCdme8cbyD8nKEcTu95HsZkVaFWLzbxKX6KNS66mqPWDt9KsVf31a",
  "key26": "28HXKx5AzgJD2WvwCebCa9MUhV8h6YTGbgdTnXgYZsqRCDb9odjDZQETxD37FCykEj1kZt4aMHZMFrDAyyQpZy1S",
  "key27": "65jKwStWos4cgSDnJwtzQRGaqVHMLauWK8LPrcYnizNLzpf42W9UUE6smap3L2JnH3bXcRQp6ABoLZ11fuTXXA2Z",
  "key28": "5TKriKqAPQGBqj2BRMSD55GUTUNPJ3H76dVu1gC8m7z6FrREZencnAAiHzL41kZH3LQwyJhDKEmVkZZnsCWYwjkF",
  "key29": "3y8KjncxPdde7Jbg9a35Q7PfrCFky71bAHcaj4h2zdYyeTVtwmaLCpuXG7PZaGYHFD5uhaQXd2ytKvAkvtMKaPX1",
  "key30": "4jYtCx9reXs1KKPTCV6v62RnDuGsAekrF6rVVnM3SxsCvyepWMbkGMgqa7fNuTFKQjcQJ5ZzeDVAU2GCQE1XXXB5",
  "key31": "4oFKMffD68bQbCiPQUzKPGpwrNUFwqZDYUonpJ6gSTa1ThxDuvTMGEVTsbZ9A9GzBYaU6Ba3USpL1C6qpFWWQYv6",
  "key32": "5tVoTCQCvoTXu9t5H9v4wT9esdNaW7ckHF3gL8ffThKpxyMAYVp4dVsj9tTutuQV67YjD4iZqsQLK7V3iU9FyTFw",
  "key33": "44v3KpLT1Jig1CLPmfiHxNoZUKeJQKvBqmh3cnDznrtohRZGsKj7eHVczWVmKrvztKtTwWbZPatkLeMbopmTgHLt",
  "key34": "2Mm1tiYPbzz1AhL88FHBRgcYy86tmPMb9imPjin4N85namXWWxX1hjRtdEF1Xo7a59b1auZAVx7sLkhP6PfMpVdi",
  "key35": "32svfweX8LykM1VuaibWnm3vm2djs1W1QDKr1Ps9aHXGdBDXohsqZ4GA1JggMuxGeM6KgCdii9VsiqdB7RgVDLeu",
  "key36": "2AkoM7qAXAvZH2GZKJh1GHm4WsuGr2Qh84FnxNDzpcEicU8e8ce16JCKiDb6CgFmqiHrdpoLSPjzQ5Epaz5hVJ8y",
  "key37": "goDWMFkx4ePsVBPJdNoHRT1E4JhxA2yCcAFZP668ZGeTzXVM89C71dDhDUrRHWZmepC1TcRh3Tn3iaPTnRmYMZb",
  "key38": "4iT1DvqpbYVTt4YoHXLvnqYWo3UsEKF6wtWFfXJRLw5YyxVdjdFiSTFnDVvrg9eEthdfjWrYthJ6BVqAEDdH2hfu",
  "key39": "4BaPABmM7qNCt1vPredg6b8mJfqJ71StYLY1d5cpBHW3G3bp1DSU8V5tSocU2NxG6jYTe7a6Hhz8mrZqsCVBipxQ",
  "key40": "4VDJwJ3dbF68wnhYtXxBshibsbN8vZHwMJr1pmFpayoXmUe8DHszTJKKR7nCNaootzVBRdCWAUvb7zEFeZJCucEB",
  "key41": "4cVGhYyLXNRyay2a3YQv4m1w3bnZZvL5dD8kScm31n7mDZRi63a2hGp2wPTmrcW1Hx5Gn6S9HpyGwbDfY1QPUcGV",
  "key42": "339ordGqiM4KJgeXTSDU3YRDrVv4BuM5pbxFkDoHkLP2thEhFB2hJ5R2FcHGKqqpSXxaXnBYZfwKLMkquZB4qKHj",
  "key43": "WVhdeZsn52kQdfofdfQHNRh1H5VT6WeuWTUmAk9Z4Jo4HGSAXFp7HXgmepWVXpsdx16m8XJePntX1bF4jiKK7jj",
  "key44": "5oHTyUE6BL8rbusgRe2bMhUkTegeA33pYmqgEXEQazJs3atkZNrtgsatKvkzoNVpJLCZUYhiSzEezd6B9nhVBrmN",
  "key45": "55KbgGbmJVYi57PzL2aVJrdMWjeH11doDGZdBdExZcaPf8uzRfRxyCMhUNfebCe5CKe4QoqX1aNKLJg684QJM57H",
  "key46": "3P7WjLUMgLB7SqA7g3qqpy6EehbYLz1nvhWhkkPc9EYtwooq63mqtLL969WWqrXKGDXRQEmwxmcthc9vJVnvYmFy",
  "key47": "y8HLZRwnqn8j6aNe1pzwTXnEYwJFUS3bbDoju4hoawAoedFvaqPLrp61c87djRbBEPdQaierUiVLUp8quJ7rZPP",
  "key48": "4fQGuP1UpbW4g8DbokCL5tc3YVd5pya2r6Yq3eCJnePuY7PhLWYBivnksaWE6P2cBcT21qL5oRJ5SnrKFjNE3PE6"
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
