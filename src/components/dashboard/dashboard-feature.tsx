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
    "5SguEmg5b4iL1ZRbyCey2yCkv2Efk3udRVnp4sbzEEHraWXy1C9RKrikPg3nq9VrSwqR4EWktx17D5szEaAAh1xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUdJZ3VCkoLspcpko7VPKkjPjm7xd5GJfX7Xm1qsZynzjqE3hKGLGwdVW9tDMyiynhvZfH63GD382FaYjg1wnB8",
  "key1": "4cuZn8z5bX3FWj9jy7dPeQvN58bRS6rpPbFCHvG4TQDUyjbDoQneqMpQRopj3Vx2kqFPMjYMpjU2hyEewM7V3KhB",
  "key2": "4EFjJ4ZdWTkj3wrPTiuivsyBiXuXZeCqF5xigHdx9nkBwnKPrciLwUSU19kmqm1jdVGwbGAd1M6YP96nvW2mEtjo",
  "key3": "2hJgRjBDMXrafbfD9RpGh5JZ3AEwBcwHYgUnDXpM2bYGDeULCWLx7wioumxxwoM2jEJovoB8kREyWcBmRfAR7oMo",
  "key4": "2rLArGGgAMFgCij726hzRCD7iuvWFt61G6tTnKat2GebhqsxKzpiYnFxmZKxGE1J2MuccbJRPgi9XHMxEsNF1n1",
  "key5": "5X1QdycmwqwTtG6HzMmftM2h1GK4Co7SzhuVKqZwwBm4oHVBimc6kSZL3w5AkBdJmkzBdhV2mNKwu5yjwA2P34fW",
  "key6": "2Uf3P2q1KZTCD1Xtjvbs2Y6f3GjxxABJ287x2TGTNfWVHsuoFLrgdFLpwmoVAhptfsSYdUaHZr9qLYNCdzV6npHL",
  "key7": "5EChjFs5gxWHU8V4JsTJ1XbLGM1Xg5o7iBMJB2F5BWRVYxzgGkLDqd8JTcSMhuHbieTgnxjeAyQEEVUjhfAoTbvQ",
  "key8": "45QdZ2Xgbp2o5JWgC5ERiGmJVgV2NUZzW3w8zMfghdrqSoHnZSKUwREF2SnPPAVBiphv7Z21xLYbiyLcApEw7tTm",
  "key9": "4AhyoycEXq9Rcz49p7yWBiqYamF5ev5RQUGXKpemM1ZUXrhrqLJ4kTJZdMTDYiPgTTtBrNgtfVrQh5kmjtVbhqHA",
  "key10": "2YDFnxz5y2KX4YLm7e88waxfBXnmjLkvGyHGS3hVfUCeSYjpYqzuDruLdwKSSWdGvFd9pXeRTDRJ2jnwUb6qyaN1",
  "key11": "4xqXSCQXqPS7LCt6RTWFVmty2FfxeG3iFtSErtCw7oJLRu8wit7sd6CMNS1W8asDCFKpdJYmFmV4hboAKfxgB8kf",
  "key12": "3erSPvZGMqYKF61okwEWxLsn7pXc2JPj8BnaUrhn3hrkNUUgrdkSVKHnzBrDYiTMDgioW2jw323gTqJT3HpLXU4L",
  "key13": "5LseDdeiP9YQGTvfK2mKGkfLzbdCiFkmLA34zkEsx8i3CF2r6PJaytgsXB1xfCcXNPdyUGsNrLEG11d2C8xgcsMr",
  "key14": "cXNpV6g8REi5PdLb7Ft1yX9m8h58NALmGQ3AsWo1a4kQWB7nem5gJfPEkFaAKhVdPqeiDieYUxtR3WWXyesUSH3",
  "key15": "2gLzufhznkfXKz4a2A8yWctC5mWZPf5p2pVN3ttszzM4tnzqDDc4AxkugjkLtz6WEkJhBvonhqUjeEDy2DDPWxVc",
  "key16": "5EVp8iRr7G5XsokS9Ga8DZEzFvRdkdeEz1aYwynfi81CDN7ZBduHwKxVqkapZcVcqwiaoMAoTFuRxpqgEWxNGkjZ",
  "key17": "5pX7egqQ2Fj2CWHN6eRKYrsmorogx3J9Famxk45tFUSJp7RWuWJsaRLsa4eKWTaskystPdiwsUHe4ZSqyoLzws86",
  "key18": "3NsTeEQtJQNrNbq6cf7YzMHXCGT4tRNnU5qTc4Y8KfT7JvTqLyvkUfGUheyxpc9swUuZ2ZaEU5XmsVCgApe1DiDB",
  "key19": "5MrKmRtjjDfpVaRzfi7N5JCEtJo8f9VbdJr44PiGFw92dFwrmDYTL8NzGtTr3jojeZ1KVE6hPocn1MF6bKRtLueZ",
  "key20": "29NnSw9ia6QtZ7F8Jd7YiTQD38DgeT78y7qSaCiFg4say4s2irS3UCQ2eQkfYmHmechVEsyTPf7mfBfqr3TuPctM",
  "key21": "38ChRFFcBZN88yqXETDk4LMtuqTPVwzCRAumCuZ1CUcHpPa7rSAojrGHUvNH54QLAq5xVoo94MFJ4RsxJEm8c946",
  "key22": "4BXo74C1cFq62gCEBMkzrvojDCrYcUrZCLrM2zHCLxZqvVQtxe1MNnx51HuQW5rqqp9p2K5cuz3eaiAwJFpzdw9K",
  "key23": "5ocKX74RKpeC9aJwMjFk36VnGLXi4NM4CuqyWxpcgcrSegX88SQjHCQJgfnNkYU9X1MoAXLi3sN276zcDUTViogj",
  "key24": "TYzXohYz1CqzwjS4MQqTUf5Hi9zaaDoY8LETgSUZdFtEYvC9vRA6zw9EhJ795jECbytUkPre2g2uMAjUmsLi3Ne",
  "key25": "3CgKmnhoersrrv15iAbNSFUMtJ97bX3MBP1zyA3UEbbHU49oavsTAjLT8a1ownc14qpYZo8AMuKeRGsFmVmFRtn6",
  "key26": "54NLUkauP8G3VrYpwWmu1wB4Bwtc1RYy2xLMLD8zdq9R4XsGqWRvf3jut8FSPvdVVYMy7vrsTeYWrijtd8PZZUCe",
  "key27": "3szrTFybKGMqAhNg96b2CLZfSKpqsa4mRwDddegwUqfKw84c19EADExmHTt3ugZ4X25ZNHgiJbCTXcZiPxoSAh5n"
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
