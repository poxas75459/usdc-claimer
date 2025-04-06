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
    "2vjmQoVi8CK3LjJFZxrV5eLu1UZC8Piy8gJGpJq6485caEywp1gTXUvPTfMQMGieyDXzqg7N89dt4BycPDujnWmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsiGYUhtBH6u58r7AYNHvVpBYRkWQiPCbTNvhGhip6hFsJFC9jBxnBPTkyES6xeHM4EgCcFsCnQtK77GCjRDwok",
  "key1": "2p8UbgkUh53UhintyLMkLHKY4dsytqrK8q32C2DtGY3qE7anfts3C5PUmidRCp5H5r6iGE7SJAr5JBvdG6PjeBa7",
  "key2": "3DF7v5xN1hbKj5KkmCjEp3Kfy6raxXMWRtAs24ceXm22KipadENb39GFmM6guqLoWvUcpnwBt5cJVpJUUXSNzpCG",
  "key3": "2UNUDJ8eQZGHfw2c3YB8GhS1HSvMTwKFXUFysPoRXPjL7uELmb9LyZTE43F8mSV8nh3W3DSyzVf6EiDxjFnvzMyo",
  "key4": "24R1BnGEEUp53gpeidVnEtYTk7YmMzQj1cJgvF9BGESKga2orXeQP5Ugnh5nueAZtAen5tgy8hdWeeS4SZgCn8GT",
  "key5": "5utMjjMFzA9ZZoyr1PUb1BkYeC5gqWPTDE6VjyLW9UFk3ZdNs4x8Dvq2E6Revn6dwU7rnmxLWZe8dqyxNTqX77t3",
  "key6": "3RnjqZqWKvJNoskRe2ZgzYCYWs6BZxS2EMtg3NHLZmt75XvqEFy656KWNpFU4gAkRCrXYMUJriHYsPRWr7AMraYN",
  "key7": "4fdf7i2HB3PyLS4MSDzgyUmYxASDZ6y6Hqy4StgQZJ63owA4pSSjeEQcyKERBSH37hJcp8f9BF3pmj6DifAQxmus",
  "key8": "2NhnYzpN2rrAvQW3bhLPf1WvHoDZ1fFP1yFqgGjrsvW9XzRqTqiQSehWWdXTb8FpyRQzBFoGeawSWYqAoVwWeE1F",
  "key9": "5XAEJLoV7fcf75AnKtJbCwBtHz3DWS514L6nt79NALQqDmunz3S3PU6czSkLPomL6RAN72QjrvreEwyBJmUMU85A",
  "key10": "9WZtrEWV9VSadz9kAvL2H52c4z6agNAUcitGeTibZVQEE33LFfDkCo8vrFnnUoSZQS84BcBddFvoLrNrDq3MJte",
  "key11": "5ZtG8EKWnCA6ojjT65RtP328pcPU7uVFYqTLKRo5WVVZcE7JG8iPqRXQT5YeP93YqSoKwaZ5PiKBhV4CfWFh6YFH",
  "key12": "3ggy33pyqXkHkRWb4wpudpJEatKv2JHKcD3zWg7fuHnxNhrfm2YijLh93V5ScDtKFbH5pwVYbBb2YwhurJouqiaM",
  "key13": "2oXjhsiyEnw1726NBKGkK65WeK5Xdez1ZVQEHQ1dpcb8p655AGswN24Db7XVhkJchPgHnC7fWAFPCcDvmf5HvBHh",
  "key14": "3parrC6CeorkAsuzfSkGCTdirz5zb4sEKpvGMYn7ZVZ4yTbNRs361a8ptPPctDbPJXsJc8f4zMLK2VUA7pgZayiB",
  "key15": "3c1CSR11PZ5z2z1xo4k9SX8kb6gGKugzgNZfSXHh4JUvdwDRuz58mK9s57uqKneLyYZ5bCmQwwiiyiKQz3p86WpL",
  "key16": "5c3zTPBoV4bCtqMQgHMKHt5PdVLdXrHFvwHWJpTCA1Dd9jaR4hv5j9unFFXGVAkdMat599VN4EvMVuHfAchH4muu",
  "key17": "4LZLgYK32K9K4Kh2P8Ac2wdXdPzrVa2DxmkvxM5mwafXniDf1tKEjgRy9tzzcWpHnFutAwqbuFUJoXnx24YTfXLY",
  "key18": "2aWGd8Mw7KCFXb2DE7fix9Kjh3XeLPTgyUm4DJrnhhn7CWcrTAj2JwgRqAd9q76UD3tcqq8gY6tPmvp9ZuJiZR3V",
  "key19": "anoxNMwNK4XiPQs575vyBG85xT5fV64L9EqpeAhLo7WKJqLLWvvx6gxNL9Wjx9o29crpzcR6EujUj3LZgzLPpNH",
  "key20": "U7VUMwLFVtE1QLHuxqDhRmSwGUCQmkQgV5WooNBG5kkSXCfjeYSQx4y2AE4TcxPXUDYvcYehhwABbaqdd2qqhnB",
  "key21": "3kZVwcVx8BqPSvZRTQ4hWEEiPmf8NNEYScwk5tXX9K1vt8GtxsGeJGGwP5g7ecNdnv4YackEF51rTfo6jN1ZRgTa",
  "key22": "5WQuzcJb46CR3CRcwHmW2kQxATmWRNfhdvbSGJWUEw7bk7MjXUDRAuLwE1RecCUJUxJVHiVzGevDKe3EmsBzaA4p",
  "key23": "4yfMby1GPFHc7DjpnxRP8vGSLg4bF41aK253Y4wn4pC9hNtoWaBPx2KgLPfLVsJikptFkNReZsHNVGL6BWV1v2sS",
  "key24": "3MNgG2XL91fukxJYeZyUm8esKkEPn3HxxchEWGb8QPFPVriJkCRVRTwBSeqUv6k6kvguGGaSHeVhqGb7Pq9P55bh",
  "key25": "3rixFfr9zMqri4rCpRgjthtCebM2fbbqDaii18DsWGKThFCSJ6hGgbrEpRjgidvVbhwgByELrGqygVaF32xNRq6z",
  "key26": "ZPZU4ZvaUqXu7mMK8DyDZSG8dG2L6jZ4XxamzbMtyVVEDsYzrHevWcDxCmwmYMuUEPLkSVcn3bhbatmHqGbDKVn",
  "key27": "32cMF9m716Umdnfe8KQEKgbMtb83yYrQGEntfD7b4nBqWFxctP9WmnoEBCbgUUHieMJ3tN5H6kg6LBMs5Z3hejh4",
  "key28": "3iyqm1CBDdwZmNtmvPfhN9MViqNa48hnRXm7Vhrs1sauhpbPftHVgZS9s1amqgjJQzVChPNUXKxSVdRESyqmwwkP",
  "key29": "6vHw6tZrFjmNxCq2T8B1qxih1VehYZxeQ6WcdxgXAotDA18GX18i6r2NfXTvRW3jmrQdhKj7kpsA9F4JrCGevES",
  "key30": "3wEs1CnBZM9UvE9v954GyWdLjkQpr35KBU7GZeiASwe8naEnzR5e8zinTqtjpFFXUdE5nH5B5eJTqHumGtbm8Gv8",
  "key31": "41pK2niUYBkfoPu2QiJEssKAyKEnZceHkniCmz7qzFQv2QUP9RmmqZh6AhR6VMuuviY4GMe3nuKGBvWEHr8mwGAu",
  "key32": "5SXRLyWXSTJ9dc5PNrBG35CoNxnFgTL9wHS7EJWE9NXPxZUr3nhGd8kQ8wQ9LCiNU5XpLCVfbAmtZ4F9fSptF59G",
  "key33": "5xASfWiiKStaUbm3BrawH4pWLQ7cmgdJPKYjAJHyMioRBMQpBaSmLznkKqQXGfTqYXu771rRtQU4yFzKLgATY43F"
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
