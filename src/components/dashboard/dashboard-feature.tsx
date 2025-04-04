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
    "3exbV8VqBPhk8pZqkEJArRrJuXsp53BPXaaisnBVgzvJKmLytuxgPmRUxBnsUvGQ1FKFznwAvQ78SV1V6ddYaozf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoCughZKC1YwWKWWBjmZ2PPstmZYaGUiV6avn4xfdJEuUVpMPqxePSaPAENpKSsd7pEYhAknq5i8Dy38KRfiC5F",
  "key1": "3oH1oWLxTZh9XgV4FxzEwey3MHksXZVTdkBj1gUB26HdzkvTWWDeBqvqM4BpRJLnwL3gCsX9GdU2QB4323bLayQ",
  "key2": "4Ph6mKH66nyrYFFvcL5An91yT5KyCUJHjXecxgiiosRSGPsYsJdbVJQ1gCCXrE6rw5xPJEx5kyw9mM96hU31gaLv",
  "key3": "64uwAYKVLRNNX4YKTDWHF8ksYMoHEL5BMpMqDaiqWfYT4zsGpakLmmAbxtEi55yHT67oSnvqZ5Pi3kfae43FywDo",
  "key4": "5i5KvppqMrbuNuZ37EczYqWoj11G3zUuRzwrheJFCo8LT9FmMizTbJ7UEHvsVZX9NapdRKYv66jmxdH4omd8cEUk",
  "key5": "EPP3sg1vFihwpRjKvVHju9zoWeZ1fCXzqvhmzMooBC8GT8haEWvNgMb4XSHWKZrUFEfcmBo91QHdAmf9TBMDVnR",
  "key6": "iKA9TDThKSTjR2EbeBcMHT8ZyS7cibN7UxD5MdSGs5SdwXapANNaBXEq1CYyRCvcUtdacRRxKzE3wjQmYvSNARu",
  "key7": "3Q2zvs7JCQckojouULkV34p241THKimuFPgYQNE5Cb2u5UAM9QURzKJe4Z2hEcLr15v1wUsNPRWzYUHSXwnwb7JK",
  "key8": "4igKqyJfHsTX8oyeR6kcC5wsiyLZLB1QPpNt1Btb7bKsPniaFsCJs7wERmEsC3TQmfbSABzgVYbJW815vPWF38gP",
  "key9": "2eBGe8CyG7qhgaA2bNKRQ6JFqdu146MttSjsPAHXF4UkQGdJ5bUoMAB9vkGX5JAbBBkg4VLhMkwKueZW9HKc83r7",
  "key10": "3ETeTsUZNuzWzpsCTtaZbfHqVAeNGkqCGy4NcaC9e8712BrTmHUTk4mgJ3ts4sKwBjgiKhXaFqSXEicjfP4ijhdA",
  "key11": "5dFY3N4BvcGce2hUSSGwxzjbgXvznWzdjDdnrvuLjP8bxK4FW7XNaprA6vDt6NgqagUZR15NgBRBjeqKzuT9vap7",
  "key12": "3aHnHcpRZGGDN6AafeyJGNiixdaYpnjrsTok7LhXufLWRCmCzzfbus5pdzTwuQqneMyDf27RMBh9jB85GVyQnqwK",
  "key13": "5YM7ZQEUeLio29STQL1EsSLJieMN6nrwHi6ZVVKqD7bNDvZszzBDTggMDjMR9M3CbQzmiPcQaTMVbjvLkovP2q94",
  "key14": "23gwhUHt85B3sKWTvAzWnXvAFRUCaLVGkBy5QpMUHm6XBK762t7GASJtRB82R1fYjPqopgZAV45Hy7dDA8NybPoB",
  "key15": "MDaU9rnBkWwfd61cAbjUWyaShM5nvckEfyMWCERKyHMGHDh2wF2xeuWayeeDj8N6xEYTPuefrA9RtfFCBQ1a8YP",
  "key16": "TZGEnKofkC3Ywcs6J5wDBD7NvDVb9qecbzp4NaHDfLjQQ74VVFo2TjE1dB2PowQnuw8L63ptAvoqXZo4uezLjYJ",
  "key17": "3cWT5oXH4PCf7qZrVEDymPfeyhPsQbbNGoruALyXSiapnF5Dq2HaE9dMrQkKpwSyvJifqgGYTSC2GCa9mynYCfHd",
  "key18": "mz88YfBT7EzYnqeoq7KLx86jFWJev6gumXgaGkdcisnx9udgz5EwWvMW1L6F25prLtSXgrycgNh1eWgVXvMJByc",
  "key19": "2vkh3Yb5tNZqpR3SsDoDRLhABGyKa2aqp7ZKVEC6ZZbbNreYHtMLqCxpg1itezUhfSsuCnvj6W9QuQJMJ1FMqadb",
  "key20": "46i5L48v3js5mFMd2dbmMEzjL37cZG4aK9vJCukzN8SZ1egmpVao9Q6VaLUeWwKVFN4tzcwLyaQEEqU58vvPwY97",
  "key21": "4wDUewirxjyMe5tqDtNFvppdGD6rMcsUtkDpD17NENatcs2zLT4Um5ioh4wqj8XgaGRwREnrAaSuwYGVYsz9kSZ1",
  "key22": "4T7ZWCgUmxorMptrSLTccN5H39CY1Bw31ySBmxHLDafUWRjzdohJkr4ycrLEWj2HyNkTBsr8KVQXLcqHzwMd3wZS",
  "key23": "628xuqpfhJ6uFYi2HMfJj9w76mMVuZJwkHUfx784K1QiJdc7rVxMtpmR7uvLrbLFr6y6MZZcm8rNTz7vMmF2E8vv",
  "key24": "33EmZjE2MpbJrLttR6Cf6YoDPsdbMsDF6SeBEpdKrQjoBU6hBfD5qiYBDS85pjQgZ4rXsBtww2JQPLDuw8ftJMNA",
  "key25": "56M7SkfCfsxFmfZ9CHnEycexLrDJePJVEVAFL98ekika6oo1YFwA7JPECNDPMZJrgbpDG8we7BpSKMbhyPS1Wfdo",
  "key26": "2pH3rUGDsrpQGHnF3cFoBZHBA6yVGsV4CQqHizqdWBW5fvuJo3wGi8xQtUUf5vMYA3KmbRqdS9xvYoBbCNr45MYZ",
  "key27": "MUZj9rmiaxgFeoHZUHxSbvWU2yrECFbTS4SkrphpmrNazu5rq2KvvLzdyP9xXBhtybh6GZpfRPHb5XhahtosPmZ",
  "key28": "PqrJoA1cV2QCYNka3exivm12GvDfMysvV8hFoxUV1Ei5JRpX8dUorpmSpLGRWmSq4WKmKWSGwRFVnKkgsKiMg6y",
  "key29": "hh4MAVCD8NaNde35UH4p1VZugYnChq7NJfHxz1ce5RrXrKUTnxPEsrMLi5ZauJtFJK5uqQFpy1Emcg32xADdFm7",
  "key30": "2ssmW4AjK3rqbmwQBhLf9FkQxrMCShhuoYaQHSMc2mtgJqy5SZBEe1sEotmALoC8C1hcjVMYxvURVYJTPZ7m2bZz",
  "key31": "2UHLA9w1oYVQCqKykQJctpmZfpEk31k1UXVa1C3pL5wdywMZvBpavuZ4JcKB1gL3VRLcJ62GPRD1cJf8nEKg4E6K",
  "key32": "4zu7K8E36K9PXk8LQMfRmaX7ysqq7fb11Zfs6FshY3dxYYomyb1k9r4UpgKckLof1MR6bVRaNswwnMvgLvRjK8at",
  "key33": "65FfBbrHV7WHpv2tKXPzyj7kbvvjYfcoGLcG9Ho2AfR7bQP8xDzLBy83czn4kdLSFfrRmzgBq9oKk9azU2YPPfEQ",
  "key34": "g5UPaee3NvfpfDnkaKUWoaAfPDyRWPuPEAEgZcHgpXJzhQ5AL8vSYrHr3QquaeZffTSQxhias313G2Ki4tfgCwK",
  "key35": "65qBMLoYM6S8jyK33u2dTfJzoFm3atGPcwhmh6fypEaCFq4o9eEJUCjF4De32uys3Zx23EeV1skVZ9bpnCU3DeAq",
  "key36": "5zBefioFv81iJbz14vqizoNv5yDwXcxRz7AKpAHoXoxin3BCzMmCipZif6geT7K5ohTXcwoRrCZ5R4jfSV7Nu5Fy",
  "key37": "2SChxRtqnGjLXGD118V4GEGU6nrLPjUZs5BdE3P41abYHo7t4MEKKvEVxr6sqeTCzt8yX9iDEuy2FDK4YsC3bf44",
  "key38": "2z63dsoaUeAUJ9FxxJ6g7pihaUNkzMnKhGkX3LDfzL6NzGeyimUf8CNCzxvEzDQi9fwubf9mCPpWkSdikavksFvd",
  "key39": "3foFWsHXuDiXZsd5adrTNi9xNEBMSj1vTXViDUpSvM6LpYCefXRXe1RGZuqoexrnZ2r6FyvEp71gBozGX9vwxFdC",
  "key40": "4SXXcxP373b6WYSd1rjtiXvAJwBvCk1qeDVpG6wJmmLriMzCANcTamrxYj6RAcSxVgJ9BZMCfAXMxfhMKzS7BuYV",
  "key41": "5AJNBoRVYHMXbH3ajD65vEQ8LGEDCgMSMgkLu3wfrZz5hEpHg3eJHRRoDU8VHciwjm7KThHD8zMcSvQCYWe7y69u"
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
