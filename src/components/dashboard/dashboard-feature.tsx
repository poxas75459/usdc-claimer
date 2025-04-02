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
    "2ZrttQ4hcWZkufSHNzuFYgXb38yVZFZ15tN6xYs2X5vQWgaBjgSeBDwf9nii7Ju5xw7yMtr4Fw9tFm499o129Gbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vvno6d71rNtosWDM4vsHu6ckaR61tsNiXzQmP1Q4feQ2VvxaMGaRSu4ZGnZqWf4tAsBLPKq5bKdYrvKkNKdSbX1",
  "key1": "4utDa2y3cixmDHiqhuWwcWJg9kiPJqaW4L34dr6CAqZZ8bPz8C3VAK8zCJ3W5DYksfidTKLKVKRm4EN5oVBbkkw2",
  "key2": "2QJ3cdEZyT2J8yLAfJewoS9ubJdpNXWgTTsvSVws8m1zucYfUg1PAhEH3R5txV5WFwAcZmEy4iUWMugovAvt8tBC",
  "key3": "45BqiTWbDe2UxTSPUtGtt8xbG1VR3AH8yD21bNEfj3D69zJpY8fZ57JeSAxGj5JoZ4kxAcFs55HFnGET7Hax69xS",
  "key4": "2ozGuxfRL4X7cQ5VV8qwGG74whwg2XCJrB7ohJRj5gaWqMDS3NwUJykKBBL2zrttLdRnMAVF1Cseyr9jEMfAdCUr",
  "key5": "67eAGMssv89ZUM7fU98x9JdHaA8XvvSgGHsHmtYeeFdHJmXFHwv6V1cWAjsLAC9LYUqrMfkrnvoz3BbeJMeXE4cv",
  "key6": "5HjnS4P1NbV6B8XgXC4gezb3ZtZrQ9VWCU5uyd9CRC2eZfuaGpE7JHwaZUWprToNJF8QSEhwVjHLwYi7xHWqgsaL",
  "key7": "jJrZgZ8BWaCHESHYdCJzTYZSbFr19pPHzJKtixz9Dsob3QUaT7NRba9YiX7XwkXXMGDgSdNcdYsMRNXtG2MbCU4",
  "key8": "3FfBeHFzSonGgeMquKtJQLj6EipqsQEgcChYv5EMfHCYkW4Yo2AJZfeHk3bXYrN5mffF2zrSQZanZRxXwPHaBekB",
  "key9": "4As1DRLjmam9UXvJjPRueRfX9TiaqbvSGZf7h3tomaExkycBssnq2vQUWRiVfvT1yqAvrsmuNcptxxzwWEwgzYd",
  "key10": "3qkyJderUWbt4yZrkaoNwfQn6UqkLQRWWb8g16aPXrhmaaJPDwPRdsMEa9nwG5PhiEfbn5baow5cbUz5WPPvJwDc",
  "key11": "5Ajg2D71228n9T1ibkSYUnYkQES76XzYEVgVvJBwW5MmqRZ2CQWYKA4WxsihX9jHsk1g3AKBN4xoLwXiCV5PRLLH",
  "key12": "4CcvNASJQGhx578Hxp3bPsUV3avdAVw335fx6cGf9dbdqtxbGk1EBySGSWeJaHXfGRGvCMCE9pcxLq45ikr85kwS",
  "key13": "e5UuKfHrvhDvJm7MLkaRjAhvHCkEoGNXGctyhpGqYTTFfiK1nKL59KevEBVyUpDtSnCh4NzSkE5b1g6eKktRjgF",
  "key14": "535cxGDmP3nNCxQCu4xYuGb9tvZJS8Ny36oDa8evo6d8utMWKGxFBj2XSUABMNfVPLShg3bVK8Twc6v9apx1q4sy",
  "key15": "ZWieo2UECzbtwxT3HKEtvM9JP1DX4iVkXEj1U8Ffd6DAFnmk12fEtAckoioJgLqC4WSVGj3E7qWpK3xBGfuGoXG",
  "key16": "3pygpem4mA5D4az9d2WPCzM3A7HqZbgsXKehHTYi1DJbRSK3nGYdVthszA1zYAGNEXVAjoPQY8CBASgSk2bfMHu4",
  "key17": "2GKLeqHHcHvv4DEZhHbmBAxrc5Lx3dZFyRhY3MdaP3inAeo9yLfqjwiTTkH5PjP1JP6jsVFsrqQyBMFDuz54YtXB",
  "key18": "3epCjojx2HuEuhX5a2npYXqJkqA7gJTL11r95pvBjxLC9HdkrkYq4SasF2wG7dBBT4xnggs925wNs2ExcWyE8j9c",
  "key19": "46FHzUDQ69ok2WEhNWhJr3tGVMWwZRj5NpTbvJnsqM2cVP5h6XNFWg5eaz5TpwcJZHkZEHN9txUCWQfFKNjTskst",
  "key20": "2K39T4uBznbtwNWxM7Seai5ypauB3RiaY5YP9MyaJPkxMcNLTzvWbnNdnHKRX3PnMncYigo3WqJT57zsgJHuRqxA",
  "key21": "5cQFakXxjcYkxNdomSsWHGRD1MCCahi2Km2MY2WKuoua7LKY4LUPDRTcLqAuXMMHi2GxF8pFsix5trjXZCerXvUk",
  "key22": "2i2TtusBBayPERRhZcSJwWoCBD1FJji1yM677fmMgoHNxoQdU83eWjuep835MCPTUhh9HaQoECinL313kDGC8XyS",
  "key23": "5Janf7t3EBmDKuLwvsVXgm8LaAXKcSCSQkCmTL1XokRtt743FrnonzJhn55GK4qW2NpNFwGxureWKkJNg1SAjN8B",
  "key24": "mMR5h3UfJBrKxPmB1gXp88tGsAwrWYfsDc78mq1cPRAq7tj4gYKcYawtrWiEG9Zms6rZPhPVUHQ71sYvbNapz38",
  "key25": "547uFK4Z1aessUBvNsQ6VHfE5qvNu86P37x4TyKCmpcUpYqwKRgRjLA6tWQ6ATD8zD4QhN7yFYNwxJifvzzC2rS9",
  "key26": "32QmXsF4RTLcNAbh3m6ry7jGoDqVve6EJ9kuWqyyqhm2bXzuGvT298tcGpkXBVMEiA2F8eXQWGrWA1hGuWa7uan2",
  "key27": "4BWDuhavJiuSfunMUrk7UmreqT6XPpdwWdpQ9jSjch3iJEkndqc3wdCojNoubVTHFsspzKcbXGuroHKkURhUxjgA",
  "key28": "2FpkPEEiVcpodUQ1NeHcX6xbDKahuMNnEDXXx2T8KDdC17yaabBft2xyZNjnX9JDEEW7rKBTxNA8j8nDbGJHqUoM",
  "key29": "e19Yf2fe39D6xG68UTo6GDJia57pbsYTsLM8MLgrPYappPwbMJVRKqmZLypRw47oCKSUwwbWH6sWhj5umLx8SxG",
  "key30": "2T8Z75aMnxYUAgDLYEiqGpzy3d2oGkN8R5Af3fhnJ1wNgmfcojLZ95DQz416Cj4xgUqXTXzu2SHaD3YvxmaQDT2E",
  "key31": "5z3cS9DDBZLjYADGkXuAKkXTjxfJahRNpjNyxW4R8FqGRmX1kwANMGdN61rQ4RWgo7pNiDGjhw2o3ecDCJ3spCCu",
  "key32": "4rAG2uYi5KV5G9fxFbDNgkSVwVu484XJc2U65UiECSrhbTujDsdJH6t8Jqed9HGdgtsPKzDiQ71NcdUdWPpfdnzg",
  "key33": "dUCBqqzjzV82q3nvNKEHRcczia2vdoX4cMfKWyN2y98NqZbZFeqyEGvVu6YD9tybK3b9cFHpGK44sEC6mcmbUFy",
  "key34": "3aDPcJJ3cdf1WW53NVgD7avcoMqZTMAbuD3u4BydW37VivAP1LEyKXyHVKf8zd3NJShmzTiTkQV9aeSMd5KsaGYK",
  "key35": "5jVr62GB3e3z3UtMU3T1zrEyDzNpu9kX2k1WWSQba7MhEBnPtcv5Y1CP2iNWcWWcNYKXNLBz5RUw2A8PUjJsyqav",
  "key36": "4YwwZBA5qNuwjNxWvzj7bJkB3p3qCSa3e2VFa5RNzTWdXpcZGabqFKt11RnN4GBhsMe7mHGt9pep332buZu5hzRJ",
  "key37": "3xhyJseFM7t77Ss23Wz8aCPEuVR4FsWnpVAHZFofb145i786pnuKjnoveABnoyk6dAKaZEPrzZJFyrea2Ksbr5fF",
  "key38": "58AV5JVYksz8dciPKMXYSNHw4bCdJAvEtZeTUuPc1gmpdEzaaYDc5zdaagbSwNYRZmNreC2mrsJiAP4V7ptvjTL7",
  "key39": "4dCDTNCpLSzPhHGE1HJCYcDTMxR63g9UF5yod7A782L5RfyTuYuiQHH9SHV2fi35hqD15rBYHnJLYSWMZRybQ1Bt",
  "key40": "5qPEF1wzf1LTBvHPPy7GWTxugwwcx28xoGTq3aY7u6fvtg1pL8fAetHKe8hp934XTfjhebURZh7BEsHwwoQZ68xD",
  "key41": "41BzkaX6kidmUyBuYSvkT3SXxqyHUtGtypHACcMy3B6WcK51aU951LHKhwpYrreiLRyFvZSy4sAmEjzJh8ky7z71",
  "key42": "47nWCaRR2CYmQCh4o5AQU1q2i2dnMymPq4gdNZPg4FM94rRRDmoxGVUYpLCChefXB9pyBdZq7XeMfd9qGApYT3g2",
  "key43": "61B5FyTnYK5bbrJPBeR453QVFwtbKv85bZzU3kQi9yFGBs5MMuWGzWgY6GCP7QrCf5evfds8773nBf1N2FmAbp98",
  "key44": "5iMYZD95xrvBBcUVapM4CWRZYELPx1YWHZhA4uBzkg7M9JKDC41kAozWio91T8FLje6txMWLCuCdWXWKXqqA386T",
  "key45": "5b2GJFp9WxZEaSRKc7KQDpiNbSfcoNmKbKyYHeqLhTJnsvYbCquRmwjisSzeWVsEdMbUdVq3LcUNyL1o8WJw8JwQ",
  "key46": "hSPyYyemCmkJg13EFMSfZUmyMJNPg5p3rHDAs9dwgRLG2GGeZ5RpVzmVsfbvWdEsCkh5UPkvuN254iwsgHkKuRN"
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
