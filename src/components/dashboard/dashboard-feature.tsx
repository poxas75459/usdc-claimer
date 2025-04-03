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
    "4X2q8SX3hMmsmy6opEW6yXJwoX3y1LeGjVJurpvZMZS9RW4CNwAAsfwCiCGXUWio8cB2ijtfkyuGh9Xoaobquhcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ViZhQRiRh2SymYdnUPrb4yruhZGVLy3y6cfn6V8BrtggbQhkgFFNrvhWTn8U5m55radRc2t8zE3WKytXbpUCiH",
  "key1": "3pnWm3P2VmKpJxi4Bqe3RG1knWefrsx8VWxsF2SazMJXcu3e7AWxW1GNgmSbbCrF6CrcTdd2t9wvieBn6Awga4or",
  "key2": "3DAPw3XrXsGdsZ1QUPmPCksnhLEggjNxaJB5rw4b2UgCWrhjffq7ZHbUUqFA9PfyjHaDX9tx7BUhq7ZCPU8P64Lx",
  "key3": "2y7xpvdFanEweQWQNTg1pJ6hZAFVtZUHcdd6NM935KJYCQ3K6XyAwU6iRZwbLK2ynDtp65AfKShn2JrvLfPKbfrr",
  "key4": "4zzhkWBQZ9bMC3WKDbyWxeXTqSWoYmebEEWTtbWzF6Ybi5gac3pRbqe18WbqkXQFh3YAR2xhFPBjUadAuRbMzgzv",
  "key5": "nZZKYJN2KcYAwJoJGADXFGyKEdYF956EpZKJUNkYSSRRVVCNSXmo7HBd942pxVZhynTvR6C86yn6SonZ4DMuGyG",
  "key6": "4yP4Lu54ZWHdWbzNedkejPquVXmuV6RkSTCU3QBfgpJXJ53eeKkBCkUuRRk7jTWm4ERvqt3X973YSpEom4yo317y",
  "key7": "5imrgjHT77ZzvMF1ygL1ZYfBpKz27WV41pJGbqUnD8wDpGijsBzHkT9W7YXA7yfS3nAF4hjrGhd1kh3vnEJNmJzg",
  "key8": "2MLnCor5ax6QqTFfPyfFKevUMczvzWK3Xs9DGWSvQT9DcBcqwA45ns9DsmHqafztT5mtPXxN7TtCp7L4GcwVPz6Y",
  "key9": "2q1mdn5mcNHYCekvHJzuVKpCU2Y99FZ62gBDimZCPftVKwNFafsCnThGEHmuaoDE7q4aZi6mo1PzRnPpnB1HWVJe",
  "key10": "2LVZLSWPXUWT8Q6fwhyvQoV2sfaj5aua6UEHknExXiSCC1DSKEuWCf7EKP7Pv1nXv8gSku9Q7umSx4hugqFvc38",
  "key11": "2A8MDmxSZfD9MP95JBcfRWxqX5RtQsw98ZukdVGhodceJ6i7hEVx74tBHeAsLDiMSoMMPGoUKyEF62jGzGenJTi4",
  "key12": "bZCqp7d5C9ajWB6ZuTr6dHxGzgXx7Gsrx8n25LiVLyPBxDyshq1eFpukwZ5GacuZd6ForXvzCrEX1gfS1mjGqKB",
  "key13": "5yaFRu2cqUBaQaP5skPBdiZFSoVv7C51Bu8owhQDBym4RpADeGt6zCdyZDFXFjLaYYuuwPdzsbuc7GLa5Z261r7E",
  "key14": "3ZMuqngx3MB7A2nMEnskxjoA4VzXZFztwG5YSzV6EZtS5qJzfPmZC87FE9gDB87cfdchYpFHPtsnW5UCU4nCQR3B",
  "key15": "3J4MtvsEfoMMoLTb2gvPE39TPQP5B3BA4YJ4dkRoDWnSWsQf4i2LNSwxo4dX9hd1Q2CkqKXpK5GyReZbu5QWkote",
  "key16": "5LV8T2WttU4nEQCWCWHfi7atHW4U1xGbGDjV6HKtyc14AuTPDUWhYJrXS4U8bqhns1TWA1sQmDf62mqY7yZerbMh",
  "key17": "3GdQiAAwYozFTXTzmA4NHAq5xG7u9fDTXaWbeCRmTJLYLUy2BcrjacSu7tpf33mXkLThFbPAcQbMzmzvUqVNombf",
  "key18": "5wtEDjwrNbTiGQAZMbBsMNCumHmm8q7kKx2Q5i3ZsEsH3Pf35E6tZTK9xMU6SqTPkGyokX3FULnjerFAXn9hAH4Y",
  "key19": "gZ2sirxmmVysbXi3i9VytNBCywkZASWPmjCCCsPWuNG4jghy5M5ytLhN9fxmtsM1e59ZVK5c9EKLBCFYfWPrz7x",
  "key20": "4v8MHzYUK9g5T8XNbeY8H5SnPZWXsqAsseFS5hPeRDrr5DyWKt2chuLvvfA4pusGTTcGV9kZ3pwA9dp5i1ZCfoJ9",
  "key21": "3evpHPqwWEVKqjxGwsFGRyb9SrYgQcNor3sW5xZqyw8YBfUidUyrhkC1uDHN6Ut4nDwFJt1SfYpZbezfPUmxoEPk",
  "key22": "4DpZieQW4jdmHaYkHW22D5wzKCpZ4VEF8meRSPLQxzWagVRXFseFC3xZRxQBA35367VVV9nxD84Df9DfgrQKu5wW",
  "key23": "aP6VqH73sv6dZfLUFf9nb3v3xkjNgRSUi6uXXn6rBX269pT1DhGDQhbhAuGRXdNr25Ur5At6MqXbymsdnxs3Z2Q",
  "key24": "5FnBoZW4f6WNovVtjtEKo3yrwtdbxeb4p93XV268AVzmXMUTKuTn3t5Nby4JLrYmnwGtmJCig3b7Uky2vS4YRDZy",
  "key25": "5pXcWMf3LC6TkWSxdzEpNMU1DRper5r4U5dbYZEkm8jH6jbH9FnYFBefMoh63evXm9g9V5fsQsF8mZDPgjgT2RyD",
  "key26": "zMgRw8agXR8Pts4B9Qz2aGHFhX2y84sLGS3LcqzztjTqjEGfHcVi93uaR1kxG3cnmboqVVbfnAFLjfL6GmNdNyr",
  "key27": "4DeosFoBT63bHWjhY1LtWEGPYderUkwes46tFJufDa3diDPHGgqVy7rJ1qBW6X12cgKYnvV81D8sPN3G8Ec8biGh",
  "key28": "2EhhnHVz93wtetES99gwAkWS8ecPufh75EHMBmNmH6bUsZ8kj8oPJj6NcYKE1PP2FouQoRGGD18KuFZqkBi6e78s",
  "key29": "hHbFBvQ5pMdoYLiseCFyUmY5fajpv8SaSWjpv1f8sVCYN8tSoVsTgHa5PGALq76SVt2SnExmKg7EHScpN1UaGbB",
  "key30": "3XCorWyGYC6JMEPyt5BJp6J6kswVGdda7yfVVwUYGYMr2o4SjTKTYk73cgmFEWhqyNdk5gaYBd6dq8TJRwkgWmXP"
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
