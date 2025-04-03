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
    "4HNZHkhUdf8eNQw39mhDsyzmqLKfqhuaFtp4KurCSNj5563VCXeKMFpBMb2T8LLAoc2TrFPapJMWrnoFQj3yrwjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4vednPFuAzafVfeKeac4LPPs6BQQaDGYzWN1XDfL71XpQUJyt1L1hDK8CuPD7bUequo7J7145GGQPTcgpPkcC9",
  "key1": "CkjMqTb3oF1wrMUjuNt4w3XrE17ABgjFSXjzefpjfRJDVWCZutr7876Zp3B6cNxvC7ZhxjATds14tFfNwwmw2NJ",
  "key2": "4CJ4bFJistEni7kz3eaLnVbx5bKegomFcvD8pmbUpvfsb8ZJCpbxeggkjy5Ruz6yVxC8KQWfrMTLd74am6NHTkXn",
  "key3": "59utDJ66rbFTGT4w9k37cXNHi4pQrQLn5ggykrq6jgr5k89vmLBXjkRppWtcGmk2srcan6FJze9W1AF1B6zstt8R",
  "key4": "2iaWkAXUxAvAanNHgix2fpoHbSn7LWokCnrTgmCukiE8QAmbiZZ3w9beV56dBs9GbmZQEAwR2n1mRvCiP4EpsNUp",
  "key5": "5FptZK7MPynB92ujZ1yZwmmhFN614UnmAFq3ZbX2nDjeqv5tchZesnMoMwRQPkwZk3wBzXTQzZaBgLvtG2hwy1MC",
  "key6": "5LHq7iv5SeLPM22cx3QrJDp1jrUdJmvxFv3mVAfFV6Jm8iqq3fFrobWaGupETcmf117TdXKEe79HQEh58a9CS6eG",
  "key7": "gUWchJThmEmKDPP9yg6WEcFDcYXKHo72B9URHLR8wGtUtCfryfNU9uUQpgDYgxL2469g5nmWAhv1RJdaewZRAmx",
  "key8": "3VZWBPCQvYJzfFS1cCB1g5SokDiUaRjzNDteAgicYHXRvoRLQGVDhDVBuN2nakvgLy22cFwZm5vYsZA6u7sVcUdf",
  "key9": "5F92zjZWc56Ng2kKeqHb6USCRnhuiKAcwRC88ZuhRnAwNioBETiDZpa5FiHYNqHEvYRLcpp55ZckRvuTZovKe6fs",
  "key10": "2fCveBgznZPrgEvyYkJ2e2CS76XZxdUFdXH26gDxdFh5xn7UYSomcjnCwp5XJakvpf9AoU2CuJRkCoLqXnL7tCHA",
  "key11": "2NS4NweUd7XQhjDm9YDi6HYP4A7KqJH7CbXHZXj6ZiiHFUQZGSJSHYCV8igtwVeHL4ge9K1oHYhtQRR7azG9jS6h",
  "key12": "5RCbKdULeyZbYDUaE5nbanihLyQGeMdDbiN868yuosihgcboFeoYoCRoU8Jj4A5JGkTdc3evguaYq44L9jAkA29A",
  "key13": "3NHz6StLT2n7YPPQvdAmBKQTxv7YZFKky6BykUafL1ihgrcV4SFNNZ3EXmgtTsLSGJomUkWbrLnMvdxkBow5e1mW",
  "key14": "2BVwmfANKUd5NP7o428iA3Ehnv4mwXwZithMndhQz9ExMKasoZL1PjXutANNSkqf7kv56cYBnB4GS98CBiTT2KKf",
  "key15": "4U1X6TTthxyU2pDkKGSecQg63kpdHAynKetFuRhHXvCLof8PAhd3RUreuWsTJBpeESgbqqLzyLXZW7GvH6rpq6P4",
  "key16": "3uUzbPdjQxtUyqQtxgCr73m7bNLJ2XYq7qUvJpwK3ZpjzYXyeebK7HHVMQaZLboyQpfmSrkAhFdJ8dVFCES4W2gr",
  "key17": "NBupaqccbQSWz4m9PnAN7ZqzJNRDRhro6gPqJXozkxzBngbzvkdwNHgMTtW3prYXZTyzZZWhyAs7gxHbLf6bruH",
  "key18": "fZ5fu4EXSnejmQXSWfi1cMKkJHEqJg5d44KdBQEmyXTDm9kRypDysx5YWmRaRrmF9Sfk2J6Qo16mTrXNLaZzp18",
  "key19": "2aM2bcydyfnaVKUkXxfcFodkUngWeszBKgeB7YfvPrq5yrqmCuWyadzAbq5FePeMRSuM5cM2wPF3p2zeyXpGwFcd",
  "key20": "3YKX2dXW9EUGSxCw5cUkA9U8ix2HkurQtX5K8K5ueQVmwNRYqcZ5g8uP6WYJLY7xrfozRkqtQu2nnVKztKyHN9eg",
  "key21": "aMQ3Q5hLnX4853WCc54tZbcMz2xMFLEhKeBB21fhkCks7SUUPG6EsHfkuArFu9hbbaV6QVa8AuexUNSf873rpo5",
  "key22": "mBvG9tkX4dLn9nbh9poSzgR7c1iX6XqyAN1wxzEBj1h3Q7E98zT4HCy8pubXxLhELFzU7G7dGCjpdXEiiFYUbns",
  "key23": "38S1nE9yJekQri8JbmW8UVcwjTgytt3MtA5w3EDFXbDRVxEQ2QhovKHbthr7mCjqCkcwJyZUaW9zMRsFwuHrNdnH",
  "key24": "3PDoXkHcDV7n189BzhSer9BEpBTw9gJEEStDunj3yWT94VsDcpM7Ryr2Y2wc3YJ7SLJ1nttuZEfEenQtEz2DnoD5",
  "key25": "3U2fj9faHctdCvtQBMVFq4H85ay2vz2imofgA1QS7Het9baGhtPPDbtCVwfD85KeBgzxQygcuJvzL2Xx3pgmf9nk",
  "key26": "3kRV3okBdpeZF1v6Qw5bnNmcf9WyYFbM3oXYBPMg6qGHLZVf1B7NdMfuLD3MnFCCAUnygWD7LgAtWpwnaCASjF7u",
  "key27": "3W6SPSRNjnjpkasRDBWLjmUbr5uWGHupkjEd4QFkjzpG4TwTwB1SnZhgcaW7mwX5rkzD8dyQ74UWaiRrWQJAt7dP",
  "key28": "2EFzY8XV1i8xGUGw1DgpDuoVZrDyVs2pJsGCa6nvRdBC1Q4e2rbucRxgxBhdMpYs7cpMEdeAdMaLBMK3mE1Yha1Z",
  "key29": "4whsxNAq1gqZFEbZnx3CTki9Tuc3ddbvf3K12PRaRfT6XmfwWQjH3D82j7n7msBQECtmtD5uDmf8FXWRyt2y25TC",
  "key30": "2AFSpTXCMra7rNvHRwTg7VHzgX5ZBfPDvYurt5rkknJRcoyoHWFhEpdkTt4Br8yLpsp37tEiMfuofeNhbYcoQXTF",
  "key31": "4wVxL2Q25ruPnramZMn1nDUNCBYP7x47Usx5jEiYSsV3iF77C9bLjju9JQVw668aLC7nWkE2T8jvfcj1Vnb8EMwH",
  "key32": "3PQuEsBPEo9zZxX5tQ8itfmxn52SjuZj2WvCDsgxDGGpmqiicktGmThQS1rEhsfwGrKACSVM8g7r2UfTYtF9vFgL",
  "key33": "4ya724tFu8PkNK6VxXeJSWP8XKezwCCYk5xDK9gP6DKQtnqYhNvcGSFC6W2m1ciaSkYmTUMhS8CzyJsjRJ3x9XnC",
  "key34": "3XwQ84Mm47Dq9hMBPDNq1RFv8d2LaGPU6Q8QNYDfK28pMry5WzKqt5LMycS5ftoPeXVH1R43Vj85eWmQWWiGdoox",
  "key35": "5oPb16BSUCXz9GFwxvKuYk5MEbkxCSR2KNSHWMnNM7QkSBrXXHuRrG1iySvUVEAxHgegHhAv11nosMZjrfZPk5E6",
  "key36": "kB7pa6hT1pD2aewhMUbZqHusGLFhH325Y9L2RT3hx2jBKYaYpS2vVACPxUV1gejHAz53cjxU7wzvsHRQzZHPsEn",
  "key37": "DTc7aDh3z1syZ24uKmTY2xgcQWkqupE8fbDrrcMNFzwF3fYAbuVre4FuhH1noN9TDfqqyo6GPtsTMJPwiHiNLFd",
  "key38": "iiRybxTzrhc9CTSNJo8D6VJMNdisYBLKraqFuZf6SrDRFi7qiHTTbgZJ9sqn5ocoJSjzUrXKMuKM4xJ3nWdAPHB"
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
