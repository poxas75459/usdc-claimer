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
    "4WRiYzerqu1poFuEKkZV93Dxt3iifkx96QqcYduudkrs6j2qiCkBkqQ9RbY4GB73gc7hA6TfcpoyJba29BaTzTnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcRcNzrgM5yHxVYHQkHrmDzq84k5ETRprXzah5PTMaww8uAswCo4xTG2KsuSsp6cPmrG5p75MetVY4y2dcsDjqp",
  "key1": "4vvXKmrzuNouRSKU2Jx3AxBgaEyzJoP946SYiLtH1xv6z67sxTstgupZoBxRGWmcvDrfYvhGs2WXCNP9z5XGg839",
  "key2": "5ETBnjSTd6wuyPz1XJXU6TATmLBK5Ze9fSo2d7d87Fw8VK9g9h8fSugGndy1P9c44Gg7nioUfdmS9jSuWJBRw84R",
  "key3": "66giDcbkqdFVuMdMcTPwE7g9rSwMJqj4zMQHSYHd3CsUNU1KBCAmVtQAsKaym6VqNNSU8Xy1dzYSCS8yxtuSf3vT",
  "key4": "366vbW24e4xpbYXLZtx9M2TiedAM73ikKv1tUkbVmR6zX2ij4RNx2nnJKdVAktGwQxtcRdAaxe44eDqbdNPucvmN",
  "key5": "4cKohhbLoxPEpfwmBcxXAW4aJdHXcvAEYTuwL8UQCmZeuVcrjtVnXoPc2AiWsGazwqvWpJ9o4HPpgQx3mcbxpNew",
  "key6": "tWf4LGRjLjCVsgqyvx51hSkaJGDD2tbiyup9jqhUyoN9eEJpxLJ4cFhUZVjwKHPYZufXkj1xsA3tj5ZZcHazaK9",
  "key7": "4BNouvLKAW33Xc78ipsNnmhnhUKn7VSNqwtwSNZXqbJprWHPrbp3KrrvJAZSzcHmDmKnR21UKC4Effzwe4U75an8",
  "key8": "4R7eS4WR6Zp5xGRftpJcWqjnKfw6qv678w4MjCvNQzEfafurPCA2YVSAoNPMSP9MdNAuQrG1T2yQ31kMWzquRe81",
  "key9": "2GkCmuKKvmXD8PZHtqCJFN31wdFK86i5c3RWDCuL1UoYHqJi3CEvQ6Lw7nC82EvVzwP8jzfeRqBLL15NxQGBuRkT",
  "key10": "2MqiQ9hk5Uot2uADp6j1xpVSLeL79CiwrvAHEUFnuVvqYGu3ahR6wmMh12UWu9VaSsJEBKNsPmFLnGohrgoKGPhi",
  "key11": "3ZiDXsiVdU85bvJ2AHYFpaYgiejbDVCrq5HFHLSoqwSjy8SEJdGmv8mnG5GwKknGHGYxdGfU5zW2UNSvUxdydsE5",
  "key12": "4HWa3KsYbVhivj485P6jRG87hLgoT3b2rqsrq91QXxSGHC1d6TJw4g11dDT6e5o4Qqxd9e6jtqiaVsfYNfY3wKvA",
  "key13": "4gjjMvjpDLwC3RPANJGJumLBrPYgpjSp7iu2MqAv2zW3pVWfYvAUQgxZsTT6REUYGXcfG3jBNmXoEd728JLDeC45",
  "key14": "54TUZFrWWxpZFLQAGg3kVeZw2w9A7xPwXaTVEtTq6D78P9HMpbR7ENUVFEjEc7PbX9cJpNRdGZLBR9WYUWnHbrwP",
  "key15": "2N4rq8WidCRmqocfgGszwzkTqvkVM4PNM3Sjpfsq4bKSiZJgyrvTEJftFaeUFyeKmTBKQwDzgyRb4CsTVWpDbmFz",
  "key16": "2WAnjS5VoZ31ULf8Js2NfiC2iLvVCo9x2otviWFws6DsSHykSQ5UyqpSWj1h3EB9Ppiob6onyFrRxKGrgVYrt3PL",
  "key17": "9skwVeAwK5SVTer6iMhEgAX9vkcUy2eP1Se8LmxtBxZq5j45H6MM5ideaFeKpkjza6pEMcCYBB2bYC34J4ZKodS",
  "key18": "2yyWwN8MJazVAnHQbKAWMSZVw9DZqnQPjNeHUabk5yByeqdRjKvAPHG779aUspJE6dvDhepzNDF85MtjJvRURM8P",
  "key19": "JwiJZE3BcgbciLpXsKGoidZxtD5bW3CnVQT7aort8mYtEeUF9QDDJ8Yn29eGCiFuA1ymkNLcoJ9fLHojBaWGa3g",
  "key20": "4yvU36NxSw8qnCK12PNUZByVbzZQKEURcn5QLRC8cvjokxYQhv7AEthu362G4JgKD2xU8U1ropGjP7W5W7cfH1Pu",
  "key21": "jR9cjc1mH1isCKqe4bDr5cZKEsDmpLocNtXKXae9eM7j8jEbSWTTVssGzG2pZr1GqcFKdSeaz7voF1w1D7wvhfe",
  "key22": "4YH7UyrUpyF67C4uAfCs9CawzAQK8FpcNDxPM17UW8FMp9Ag9tusmDLSzLfqHCTT4a2Ze9hSfzvb6UoJsA8eJixu",
  "key23": "2HenDjKVVNvr9UyqVQpf1n33HLC8n7fPF7RgoFwcdV2RnLpDtEX8GyUx4dVP7pRbp71pknBpWhCajxN8zzatV4VV",
  "key24": "43ov3bdS2Yd6dKAjKwaUw3fF7AzNaiciiynE9yp3LJ1ns8f9sBFVSbNNbRjbTQYnRMZJHj9JG9wMGEFbHuS1tByP",
  "key25": "WntZQLFfpB5devQFEqVznepuPmMJDsq8EcGLoEPTHjAMP655zmfi9acnh8PudgNc1M8mMgDWYAmT9VSvQL31qkV",
  "key26": "4rDSHH3rgbmVU8SWC7utEMT2wX5Zoddt5XeGS9jhwU3Tcq7rMk6oaY6rFUUCDTFQeJVJwziYFrYcBAUhyEqJigUA",
  "key27": "RHXveSVNYAZ598oYB2cfxDq1nvrr34i8jT8bVjEt7Uo7j3WFwLs4paPM1zAcN3LjPLy9vsoAfuckZavUyh3NWY7",
  "key28": "5QAR6N9KS9XGWfe9wYPbTrYGc6of1vDYJRsk6eQ5W1r6tL6vox5ZBV8xBEkReNVUUgk2SxNZaVdUjo8rokoBwAZG",
  "key29": "tMSZTUVbZMj6qx2zmCWnHL462aZkHzWEFNGoP12yaBroFKLLvGSsZJ6RDVqMQVu6D3t5REnXrdBc5YWNBniMMxM",
  "key30": "2DopMRAypi3A6k5LpDrnMhdwd6kGwAMU5YsaYqj4JuUFipTVus9QyCZhMzv82QMRVwMQGTnBseaStUeQMruGgo6N",
  "key31": "4pcrdvgq4jz95jyX1oChrQbXm7V5Kka3PeELZ2G2kzTHbV1E2g6bYkptPRJjsYhyTEFQzsdEJwNyWpZqQnTvUno4",
  "key32": "4gwyffDJdG5oUnsBRnBFM9N1LzdmoMRhEJVRpXxuREnkFBdQLPc9Bmbk6qtYRp18d4yvz3g2oXx6V3EyMkdCdnS3",
  "key33": "3HnATCnYEMGghXF9WKKxAH1xTy9oqKAyz4bEgAt5P4rn1E99ZqsR1i2cyWKMxawT4KLvhYYErMvdgaL8SP8sM4kM",
  "key34": "7GSfJtDqedYVrAvSXHGDVZRRJR7REDs19Qx48RVNEmx9mK1FSnb7iU6bUrCv38frJFGmCsrvS6Zb8FbNqjgnbQH",
  "key35": "3NJMGVuYaq2s4tiEXdgbumCLXENoxFLk9aZBzHVJcyMTPGANjMuwDAVy5fSGMnYiQ5fqWmnbCCqEB7SYQf8ugoYw",
  "key36": "2Bq6tZSLGZoGUqJgfjt7Re2hwYJeLkfHuSQGrXf1XpjVUbtXFZYjXyKQfuHFuLD64sKg5fbx8v4uH6MxZaXLrmgA",
  "key37": "5jrQdufnhVuP2M8bRnG4wDdh9FivgQN3bwJs69vgvByxATWcxZVPjL66bLD7oyTaFp78PSP38zteDR75h1cMLyoF",
  "key38": "4W1HajLzVQRSnLq6H2Njuvd4gKz1oYEBoQmragTedT1pGu8Jt2RgGiQVAC7c6cdGhfzKASiD1q5zn1ttmErDFSuH",
  "key39": "5G2gYB3YtdiGhxxi5ZBufKFkfKMMGJ3ytk7M3CTc46RGXYb8MSj12eKP8kEQEa7SEps94T5A351mZ2ctHYGNqYwh"
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
