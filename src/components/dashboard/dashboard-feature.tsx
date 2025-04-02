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
    "4ogLwxnnMUh5hnxBqkmEAQXDz5XsFCLCTEHbehx6B784dd6QxrYSqhKzZ77krCi7QeNqqN3KBuGHQKiUfQknWeHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xmJP3pisEoc1P9x8eqfRgQd4w6G5WepjoFLNXBXpQ3kJ3F1vPRQykYPNgXwTZcyawzmBsy9fPQmnWEXoFcbRUxN",
  "key1": "5XJxAzT7jXABi7VzidBdZzbPvn8rK1SVgXbRw75J4r7ccfDifzB8XoFUPUs8iMN54gvGUQKbYNPqDGjVyxdJPuLi",
  "key2": "5MCAmYLNUD9ejxgVvaXjzvJjC94jpTcWffd25Qv3EvzVpSKRs4h4WHW669qDtjr4kUiWfFRjgeUbiqJM2YHTBFd5",
  "key3": "4XcvChMDbTLUy4pQxUiGLcW96mEwnNaUToYnDF3sn2a1BcL7oK519SLa9KSPP4c7kDE2kiLjGJbAVVcShcPnESiB",
  "key4": "UbVw97VyqxXeQk561jwnpRV5VXT2nY4TMT4xjPz8xC5YEgz7KZe8B8dpx6X3mJqfsQdYGB9ghxvgzXKuSZyz3x4",
  "key5": "33EJ7gEENYjwTxfnhHeGi45t7bvngC9JsGD6uyu7wg7L7wGkRFtscFuH8pZ8Kqph5GZ3pyPX4rTRDjHdzNF6K7kF",
  "key6": "2qgpPehXpr2mmJaiW1HjJSEk6dGer21UhCfb8S3WtyQT3VV5K7fokeJLf8TV7FinfiMfR2uQehCniebGuKskXZ5K",
  "key7": "5kibD6f4WAJE9sHpfgfGKqpbuVwNfQmfBZnEiue7Z32kKrG4B2ywzZoPRPJgvjKCDoiUJVmb7gYrXcH4rfGCUehu",
  "key8": "5LQrPHv23Gsk5RmYWU8kQabPTYaCcKMwvDz3CqgmFq25BhXiJwGd5cU42Xeqj9yx7vEMLui5FU4cZGZZ7YECswFD",
  "key9": "4XkdJTvwzLUyDAdXcYEauYwYvDwnGY8XiouGvmwbs19LVcAN3peM2buMXkzQTyntaHYXgTccXRFuvZ1DbybfTZWf",
  "key10": "3Ht9n1zfWPEvHCEWtWVvjwxsVfNeWagxW8BqNM1H4nLcaR4K8zHyhbw13ojepDGdHobVfGvdZVuGAfiofD2CAm2H",
  "key11": "5uGvMC97HUFGipRwpQzpYZDjXq1tVjTob28gvUvuN3YzZpjnGL49DNX15ZygJpPTMZ8unWbSH1Lk4a3Ash1cyAE2",
  "key12": "3yk4RZUKKj98G6Cc23a6QUhjhKsznNQcdh97WQWcYP8A8Be6S3JSX5W9hwLKv9ovEZn7Vp3LUAXUQuaCSUzcnnH8",
  "key13": "5hF8e8i1XRSjaPRcKqGGxNhrrsowjybtovMmQo6hEygr5fuP1dXVKnipgbBoEDSk5Gj2ZvfsvvzJ2WU1wEYJLzFy",
  "key14": "4AvNL9JyQCtA8cfva35LJcUqGWzMQSt7LPAWSfwFMgbzsAgHW2QGefBMmHBJGqfK7jcyUmiNGPnniokPDRZvmRYo",
  "key15": "3rDof9jmKbCyD7LpnN2yizacQ1K6HaULM2CBvgA15DNsSuaBV6YuDUjMQ8TJNNcQDTVQ137Z6DkfuJCNw3CyDj88",
  "key16": "2abm7bAET45JFkHhzo6TYn4QknmPDJAxU8UJVVEGwnefv5H2vNwvkuYWA8en9qEN71PuyDuUbxYAGdNXHGVn7fkK",
  "key17": "3UV1ToFREpApp5TU4GH1woQcRfWiDcAEMcshyEdLugKch3bD4Mrnx7Bj4tiV265sFgcZeaaq6ukBiTVi8rULBBjf",
  "key18": "314gszJEb197anSTQ5iMD2VZVDckZCH9YNmU9SCFSLVabWPJ19ponojEyA4JnXm8j7q6SN1n513F43JVQHpnw57B",
  "key19": "2vs1vB79vtxGEXdbKLMeh1p7AYdj8DU3NHAC7igtUzLHwAs3r8TPCXu8wMj63SS1phKtzBdkYmKpfw4vEyGEjGGe",
  "key20": "2ePNHyVSppv47zWBnA4JGhTwacEtd2xm3NNTRkxw9gEd2pbyiUhxQD4SipYM5ozA8TzTiD9ftKSihxNGjXXdvxq",
  "key21": "EZKF7ZSekhKeGjeqTRgR65Wz8jyxgxtR7jtKYUGuPBFjmzPPTYpFPcN4djgzN5WxNQrAHBBDcWhfKxmrjtc9Bzq",
  "key22": "2fKDhCrrisnedkgpwGhyyr1nUE612fJhQrSNErYviHFqQTppopTqNwNXCj5g5fM7xYxVRMKL1WKZw4sVP7MJG1Xk",
  "key23": "3mtsPAzJ97oUJVKRNFrMoUVZANj5nifT2tF6cWaQL5uhF1SSk2TZEcW658tnAZkKnU7VgvGnJPMn1HR4vdCKArGi",
  "key24": "3hMKJUf411f9oAqxo31Ymb91M7UwwCKQyem7V9QxC3njwk5QM6amcGY1WEz9dbXsBGCH5fj3CWr6SJJNwBZRmuh4",
  "key25": "58HHHHCbxFrL2JdPniMyapkdqCditJ4v2h91L2cPVtqWtth3FAxiW2GcfeBNBvFqw3SjW9nKEJuRemfQ3CunMhNr",
  "key26": "91RsqiQVdqNFhEY1tHkut1P5MWiycBHEF2kL1ZmCcKVK59C7ZwFu8erf5a8k5gZuVNWDCaaXrTWiUiaVRowXBVF",
  "key27": "5tVsnSjM2YNftP1g6Eb9cTCerZ8W2GB52xcyv5whMGpBZ4EGGQDbpEjxZwxdq297gnNj6d1ZGVPXi5zpeGU2ZFy4",
  "key28": "GNyfh83Hys7r4BtHkDwnn568dqwc1WXG9QRcYfPG8KskwhXoDaXZfrhSVTAFrpRtLs5utGnc6yvH1aS4ZummX2U",
  "key29": "jNKN3amcwhcsZSpTVRhhqpXRiSoLDrdYit1g7353YvCJHk7aYSVWmVP9Jg3k4bzDsgTckBhBB9sjgSQb7HdNpLm",
  "key30": "2q4NMSuRBchUoY9c7GQ6s4EbV1mzfPTr4eauf78zFakTKx7MkQQ1RYNPAs2pLoAqJXpvoey3KjbAjWsNDMMjn19",
  "key31": "2FRysKdr8GVjS9eQVGATZZ5DqVTH5qnmkwqhB9qfx7d1opvcMPeG72ZsL9FyeHrEYcZvkaghXZEVedpRRzCgwVy",
  "key32": "3tjdeadPgMXzWYKrdsaDL9DM1fQDoWvHwYqGoAcF5ituUKXKcNbgM56zfvadyyFR2v4QxmGMeJBNZuYWPBJFkcVw",
  "key33": "3T2Bz38YENfnKBCTBCnFr98UPZPcX5izWFd7iZiJYhMcRmPmLVcyq1BNVe9pKQ72y6LdiCzx8n4Vt5aTt9QQQpWQ",
  "key34": "4EDLLGNGdJMYZT3ACyiKvL9PH8vLL2z7HfUfsCHM9MczYX5VLfRbeDRnPX4Hn7JgX9RYkWiBainydX2PVjrVyrvP",
  "key35": "41EtQawQJLXJA4MbqvgZCxwajGpZtcXHMVnvBzrEfsiqz5ZkUA7z2ZacZ5ScDQUYu82tV1NE66M5NYBojQugsXfH",
  "key36": "5LyjWFyXYVvEMLDvbmxY1Wd15KbyFkcxbYo9FDVc51tGmNxeWVGazhnXvLUc36JJucwSBr1XdduhAtcwX9SpPD2g",
  "key37": "uiY8kNZqogvqF7Ri8w7JCSQMgBecopYtbU45s494G4xfcShDo2b3dssTFHbCVHPQw8cGFATdB2zFieYnwHZxKt9",
  "key38": "4acPc486WnpPJeuwgqHW1VCKbVcwJxD7yz4TRzuoXdngVRVogUtyaFLqfRnNsLjbw3TXvs3nKtKHKfDjbYStkKUb",
  "key39": "gUsUqVwpNDdc71sn199A5Y5K7D2eg4JzZCFyP9eKH8rezWbWaUB3AyKEmKKMNayGm4peJRqGmaJwbMrSDEsqahK",
  "key40": "34s6cErUK5WeWPFbtXY2udpyWVyPzc4bHwRHWjwSWCFWYfqinUeDZ3YnYKy9PVkr4wxR4EiW8CuXttSihqsXzitn",
  "key41": "2VqavWQv4LcMnoTkgeetjYdJusHBBstvqv4i6HfVtmzb2bWxtcPt7ZCNVS9vX6TwRuhUxs5gjTGEFsCGK3aqGrV9",
  "key42": "5gDXa2K4YpADez7Lwh7Pvm21WrFkJDEkKKgwtG7jVrpLQeRtka5tvempcHEzny2wq7LiELDpS9HVpAZH5apKTCcz"
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
