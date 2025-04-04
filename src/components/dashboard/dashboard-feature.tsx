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
    "346dmLtrL3QQNpwxfzoCFg8TpEYaysmAcMTj8955cNFnsmgdZfD7KvQ5wX9xCiiheTHncunkSW72oLLPep5ju8Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67A5Cs9CxStapzSBnpGg5j6jsCJPCoFbE3NwbXmR1NFETPCuG7fuG9noR4P9V2UWAB7wjEL9mUjfdkHiHkvvVv7C",
  "key1": "4CxD4m9VS6SqtVMbbv5rA2AAkNfJVFV86imkfGpdhCUXeBXx8XUeaV7aoV1rfBskRwqd3CzrgyeGgCfo5AYTdXmq",
  "key2": "2dG4GCQQui6RQWMXheYQvextAGw45yNPRiUeQJXePmrnSrPpi9X5GLHREh2a36cPdVqQGKK4tWNMCnbgzzgb37gR",
  "key3": "3bEZUyxZiQ8yaft3jzLucSuq4r4aSxdmvi2vjZE971oY1rd8A1ZLAUKLwdHjx4zRLbRNMr7CAapNNmwdpj31UxGR",
  "key4": "4B6rDoJdq1FbgA4J38jwrXXagjsZerjdmUcvtS5mYzHovhrfDJgsxvTxNjr7FbspfSrWEWhbKizG3nCcSQWDJPvK",
  "key5": "GoiUnKqi3tZztyLxaVPBZedZ8hfATJhmx3yXMcLJ4eXM4wHfcts6zJ3gEvLQWs4yujLmYQQtEPwbsDJnWnm4hBS",
  "key6": "5YGx2vqscVkhvzi1BAxoPMvzR5iXAQ6vFbucMt7gH74j1SPZukRo6Bv5Y8XXJBqsqC8VT1gRiLAbhRZuPjxZCHf1",
  "key7": "gymbojjCPdb3hh1rUa8Xq7V2ADbrTd5cqo1An81FRXjGMuLpSFNQTXBhq77EzoT9PQtg6UCYHFiXi8dvERo9Z15",
  "key8": "4uS6LsHSVsuUVMgyjmjkY9dnfPWvL3eUpJSQsjuLt9znNzmau8iCHd7twJPf3bvZEaFwdjpKeVKmpc8N9cf3cfMC",
  "key9": "gza7f9Dw8mEqAfkUnCnhRDeNELoVTePrhB8C7rUnPScjt5Uwa1HCQYBWVsbfjaXgY1RqrMSJzKW4JRGypspCrXu",
  "key10": "2spc1L3nxUUhJ3Rhf5JcLimM2a4GqZYink6Kkggaqsqv57zB2YGMCUoWRUKZtaVXU3tsLxdpRsNdLtYz65RLDNG6",
  "key11": "5nQGgZXoWWvUXB8yHXJyVC4uimsHUpid6PiimM2kRPLSPoCKuHyB7sQZYYQzaNSGKGfiTskp3QZdjcwMjiLiFw8a",
  "key12": "2AxcrcCujDjzx3L9SxgSEe58FoDjSkQ9sNsc8xsr2HDnvYTYfM7a1nSiVzAY9WDZ5gRk9Rod5yK2dzzFooDobQg8",
  "key13": "5o8XpXU3wQPSGzv57vvxpiiNuaSZYhvWJkzxmV55HLDUQ5FvoJZuLGKcQxHgnk5fhVCpDKbLsF2hq3muEsSsLamT",
  "key14": "3eSrPc9Q1ST3a9HUq5hNH443A9x5u6CUYcCRM21mqvRjgZrXL3SQDWPyF658XWztcr9LzXWm4tnLuQ7F3SDi2Aof",
  "key15": "4hDKbW8bfN61Qx72p4sm7c9yN653FYmKGRDtkFDN9Q9ntCzGhdK9uVU5BoXj4FqZ9CdVYmvnFgBVggsxHdAjXfJx",
  "key16": "3zpmj2YhNDtQF5M5Wj67dqMky8tczkJarvZ1gJbfF9R1kGsRN3RKrdo3PiTrc5SfPzKeLhVDA1KWxA4nJewN8jtQ",
  "key17": "yhBUTdWs2H7ntHTEyq5h3GufDkXWTdrBXtKRdEX7jV4tUE1PAEf2aeQ4eCjYRDzCbAUHBRPGn4rToEvycPyxzjK",
  "key18": "3NRRfCXuAXYhvNLJHqPeiiJ9RhsBGunyz3S8qWCaSaaMAWHhEV3okmZtnaYQT3wcvMBCLtCEEUJmQqrtX5G3pS7g",
  "key19": "a1rySVHs8zd155cmbgdSmnXz7NNP9Knb92ZfigxhF6AMvhXZ1Mv64gG7j5FvSUEvVrcx5mur8kGSWZP369tRerW",
  "key20": "52SSUCBvv2YDsK7tjVc3RPaQpGd6BELYgdphi5q9cQJmDXxZrgPn8CFEjJ42F6R8ANQKobrgHuhBJ1b2NCUh46e2",
  "key21": "2nvHS8Q4EC5dqYp4meFgFjm4PTxwshKoULf2htm5HwA6wbjnttis99vqLRBhCrUHaGkLQ95wDSC1paDd4ZXjAah2",
  "key22": "toktqqoBJTwfzfueN4JjmwrzKLmZ73ST4DQZEb8eZpfr12Hc3Fn3K5xdcsCfuwf4Zki43ktLayTvNP8xZrp8eXC",
  "key23": "2hGJu5aEK5S9wEuY6h5SBRDVSf2pxmKyXrtfxez5yyFtUZhycry3dqk6FPWFBQGjEQz14j8vmsFegy5PuvdvEoy3",
  "key24": "5SZ9iPqUJNdJmZsfUbmzLQCyiTd5jRbpCuqPDy6VRDqgYCw9WEFnDTFBvYkggxoYyGFNBzpXeuRMm9NeyPYaFMMx",
  "key25": "AANmW6P1PdaCCuRYKxK2qZx7FqTSWUKqv6WKpLX1px3HYoya837x9LMDF2AY1377DBVXMW8dRfkkeKmSG6r2yYx",
  "key26": "4CE92WQiJi9aqENS2L6gsV1r8SWDWVSPnXxeJb8G4VRjWRqoEurYnoE4piTTe9mPxrR4hwKMzYbPVBzLUyc7GLqK",
  "key27": "2EoVYKMtbw9zbUEwWU7vtEczm9b16NWZQaUfPU5EqvN8qD8q8wjS7aLeVC1UnXMmoukx1d3ewdkNmivjuy9uR2NR",
  "key28": "4BmLd2uHFCDixJp5EY7RenwRmT8V5y3PVudAnH1Ys732ctJRSWkqGHabQgyuo2mqCRp7fdtb9ShJhxgoRhX2aVh5",
  "key29": "2YFbjH29XCVWiZNPgv8hEYxaPoiUuQ4g7FdVvRFU3tqFxd7LSohr5HPms1GYxr2UFbGk7hmrtYiudu8F74EusaJY"
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
