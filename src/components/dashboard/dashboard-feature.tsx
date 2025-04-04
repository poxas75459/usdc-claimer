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
    "2Sko9vt7RxWeEpqkf7iEizaN7xxnKFAtYRwg5UJrM4Mi1tNKwfbJywy73iKBfwEENvXtXjtLH4xRtjwUXqASk7Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22f7HBhSD9CN8yvYgw61mn3xkfdcRAJ8WdS5GSk1BkaB7AReQeR3UXGcXPFLg84zhhRY1vf2JJ2isyUKiFZFn1wk",
  "key1": "5r5vmWPDyCwLUJz5Bk2nSbtLx3qN3LvC2UmCcrxrSWULeqFGrnrSi2kJ93fuXC4FC3CZEXWmjNFQUYm7AgQijbKK",
  "key2": "32jeKeYR68qYC4THV8X5U7UaF6zFyxkzwbXcNrH4FqvuUiE55u9MeLPng8uv6Bvbcusx22ZL4eBue1mvBfEtN1YG",
  "key3": "Q1WrTXQSav1FNbB9xkZNZvzQdbWjBtFx86fBhARSeKoFvDDq4s5Qq4QAbDrNeuV9N76NhXtsdnnk6TTvVtPNQfD",
  "key4": "3PfNQGHfnCeY6QZBhanBi8Ca6CYeEqjk69rPaBWFsNFGj6LQwoj5tgPKFTKuF3pdDSw1ssrudc4gSfE1uJSk3g8S",
  "key5": "8Mc8YTLvjdYcUyLqg2WBDdcRymxKdyTPG6F2Ng2HjRvT6RmuENHE4ds9mmvQ9hKRp1vzASaccsHCoab7auLSSu9",
  "key6": "4Gy9TNLAUM3mpfAvKKJhKUrVXwLwAk7qXm2PeVTfLQ3LGMVJPo83uPEwPpgMeQ6e5DUYw2EdUTvCQZymu3VeHdu6",
  "key7": "3ybKVVMVsv2wT1j1nHuviG7yevNYWdPaAhRZs9MqZFVbMh1yGBwdvg9Vo6B3SSefodYaREq1fGwmLrfLB5NtuZjC",
  "key8": "5edDDz8zHii4L47cTTag1ZwkBpPkKAdFdtcFY3WpRwBTkScyYKt4C7diwXZLMz65FQ48Jfi95po7dTjY5uhJ35m1",
  "key9": "3tfDUkqQEo44BCmvpbejJ8SAR6rm4KpNTbMoaydRW8xSFVzSQS2LhX1ZWAV992AV4eM2ZpMuGM4qh8kZhDFtocN",
  "key10": "5fF1BAQZmuhhhwNJpAFvRbTSnhoLqD9vpazVLyYwvoTvLPD84J1etcwcBvVYyLjLYxQ6Mc8J5pDUZHjN1UMMMbmR",
  "key11": "5AAx9mqEwEhjoR9Ru6gEcwPeB2yDHMfZ5YqpXXCcaGJESqmq4U1ieogZRDp8pf1yLUa6TMCm3VFjpbnx6LxJgi11",
  "key12": "54chL9Pp6DTeeUp9FdBRa2FS7t6AK2fWBcEdRE5RozukzDGtZvrs3r5KcyLxLqA4Z8DC7uMDFvh4X6aomiyfMfF7",
  "key13": "3wWpcihrkWBHTdbvtYMUzScHN36NPCRbKGFQACi1SeNDP8KdPMfotUTzMmwdVHqvYaxGdwFUdY1MxKhfxpVtzDw6",
  "key14": "2eLYpWJCMNKE2VxARNqKcF2rYbKGbYjpNSJjxp55uFN2YmQWqL558ykYqcA4TjeCbzRCdXaHAMuwuVFaE9ndcxyX",
  "key15": "FJMRnfpVf986WW29CsA4mTAvFMDsKHfeswvqsSuvLHjFwW3NLHYYL1GdaaBiSCzLjTToc5yQ7dvkuy1cVevA4oC",
  "key16": "5qxWz9F8sS4KQSk5P8YHrEAxsXNdG3F1cJKEe61kSn2nPQKMsQH77TLNe6D14A5kqvt4e32HPTbYee7wPz6SsauA",
  "key17": "YLMGEXr9AfCLzerqKhMUgrWmhjmrgsU5o51EiyfRm79QiyHLmFRBGqVKC19r3AZRgm4uNQ1LEqPVDcZHwinyqK8",
  "key18": "HKoJuwRuCtMrLcMUozwUNdoNvwxzXWFN7MmyijtJSiP7Ay9km9bFR63L6UN7msfT68WT4FxtdrPG6sNoXjLVdPW",
  "key19": "32XRmYNi9UsR1GkaBfbDYkXgErJ75zSAxbfhZAhDMGtms3ngh4R8NaA5RC45JHaQtnrXdV8NSGqkkUnRrenk8Kab",
  "key20": "2KWVr6ePuQQyvkMjEEqPfE3mtg1aCBQP2SpPra5Tik6xzp2g7BgcFqUwgsLJGLMRf6WFj4ZMDBfbUSnwbhBHMeHA",
  "key21": "4VxCEA3yDLsDF7uHmF43YQZeYCVuxp62DdZTTHRnqyXt6ZdXdANXJ9s7NLqpYs1gv3ctvnJdjewY3ucYTUVkpe4C",
  "key22": "32EGcePGff43m8c1EaSfMn3cudG982p5tXvZMCSbygMAWj7oSpZL3XR6Ao3ECVhPgnPdW4KWXRTpr1nBCwi6Y6H7",
  "key23": "4zDiGZS3CD6Gzs1BX96TEGP4HHLDSgvDz59ChMJc4kfgyTi4z7rBCHN54z8QLCXo5uMdi8gTqLojQQHuefpdvxfY",
  "key24": "wU3bzJpuoFxUHWhhphH9pik5x36NJT25dSGT9ydW3AMYVGcXGiPefZbvJ62dccBJhJP8RfrPTPv7soyB71mcDvS",
  "key25": "2F9ER56mZmzBCdab7eXr94HXQjvtnAGmZ2UScuDJ4xGyo8358KUzTDZLok8aQccLkcguETM9FdJ8WeJ7PXsCDAJn"
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
