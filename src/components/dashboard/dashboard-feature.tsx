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
    "4MTh8NxcKK7VAurdxdEhNJ6MuMF83hGstJQ5nE85HE9xxru16PznAYUpWbjMTdEcmK8f7wbzibzhepMAKae1YMZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bKE6MYuwiAB9t8A1Xa9XhJzdn1EwHT2XdyeAwsJpFZrb75zidyigWNd8LnQupFMf9Wk796VzX1vy6Y3Y9KJYHP",
  "key1": "2ejKPHcVypjwupt4MwJaFQKjMo8LUKNCXBVZ28yFY7AMPozrhym2Vn2Ev7u4GMb4teunSUdMjhpp8xGBDSrLMH6t",
  "key2": "4AAP2iLM6Hb38PSD9AphGxmfzFN9hCKo9enTU3aV38Lo84rdqjZgLWpkomRjQfa7DQ6mMMUdyXRvmVGXRUec4JWi",
  "key3": "4JY4EVCHTF7cMSYYV3XGvr7ziUn1LiqWaEG5XJpnxngZZCBbNG64Pk5yhCkvEHcVQt4ULoph3Q788wHLNqYQb2dU",
  "key4": "wKQQuU872WHHt8qCERfGuDgeao5BggQx1myQNNwqQD4nYtLqNBKnau9Gd4hViDGHtqKRJDAweXTLjMZcvd4FHWc",
  "key5": "5oHGsmgv83GuwgFCwx99FMx47JkmhVActVSpf7TZBXHpJkfY8FRLv5825y2sUPa1Nq36ZoqHS1J3Nw8VKPtmmasv",
  "key6": "5KwSH4os9oRAPUNBsAhS9uCsf4VFM5ZtZkjWmH6su1EHbsm2FfnQAgs9WQLs1DD52vVtT7SmauzEcFZ1gcyD33iF",
  "key7": "bs55SB15TzSyvLSydhFiqqqpCMDMwZegkVx8tc8HYe92BRXSbF8bfBQawrbMw4QV53qzpAyTTSWxWmPWeMBEaeD",
  "key8": "2QERNenXtCBrrcqrUoJXFycTNHXoLVNPpaGJkYgNXeShrHSxLgt1g9ikGETQsoMfrUmMeLB5JP91xA9a2BDY3RVS",
  "key9": "649iKZ2iESc7P8L7iN9YFoXCbqwKQk26d3BWDtgW4sLXb9GYvEtTd9JSjyjLyqrpGbcWrNQ2UYtvkrHUnMQdkCmG",
  "key10": "5D6zkysFvi5A3Mn35pNBqZak8gJNcquG1QHXLEg3pzaq7VP4aZ57XxLFNyUeWDxeSwFiUkEibjGtDhyRPGTnhS3Q",
  "key11": "3uiWNfzr5AUrzVFys7Wtk3hY2AkgFsVRCZfWVGpsbZdUUiHbBH4Yv9YEuH8AzVLJCUgsAS1yLwYw51v3SVDqmWpY",
  "key12": "3M5ckNACoR8v9QuTABYtF3f84vLdMHt3MfhFLtJ3ND4iquki9WfbgsoX7VTrVsv4iWgU8iAzcHu1AssSHmHcKL2o",
  "key13": "2xPq84HW6mqL72aRfPv4bTkgXhHLSvMPA4AgdCGKW41tF4D8mmNpDzdNiFitH41EEXjZitydwUywPpEuA2i5Bi8G",
  "key14": "4gWXevPdoJeepwMYsk7F96nqpYBx1tnEfRgAZUFrSKDRJNV1WG8wJSfvnE4PbBnRCb86UXBr4cjL2AbtoFguvFf7",
  "key15": "EiHKAXREKA1HrZoixWoULbTtiCYWKKMqgTagrBPU2PQGfuQ2vg1xkPmywiBvX7aCwVwYv1CQKVJpcw7uRgv6HTi",
  "key16": "5NBDtSfPYr2ipvNafZffsj7JDXe5MyZ1WBhZoHBFcjvnm6whPap2eGPQgXbFyWn8M76wHreCjEtQwAStihYtGPUJ",
  "key17": "Co9SYty5FKjiny2WRFrm1vtfTx1s9vJDAR4M7TXbbTPynMPD8dN2T9qRQm9zPxsH5AxXTQ5WgoCFoEC2pMfNxk8",
  "key18": "2TtLifMau4uma6jJH26N7F12b4XGLtoDps2bghDLa8HXcqMSnNEzjtbYHYKtCZB1yurTGUNP9wKn5dBa2mtVmcy1",
  "key19": "4GBp3SmALkeJBotBjH9ydR98JVgfDvKV3srRXZ6mCoPmVF8cF6YteNrDATxDHe8mxZoiv51NYrRKE1KzMZmHq9mh",
  "key20": "Zt2qhPmpajThWAHY2jLa2Kow13vcAdgHUUs4KJaNgnfPhNedZXPfQ32LdcQUYXC1bvDJTmpW6Mt1L4m2CMApBL8",
  "key21": "37uFGi1mh6zvEAMtutdmLHQaAwZ7KChvLj3MzLQ7TbBCJXKFmn99Lk8Gux5cu41aZWFbURRXt9qka5hwuhhcKhAU",
  "key22": "15Wiv45esdprmsQZrnE6oYeSAhod1KPfkyELPxQSJ1YDgQ6qZvsjkBukLtUQuGa63JzscX3i1dcmigvMSXseSEa",
  "key23": "4EN8wxp9mJdPhS2wy1FauVtSLER7GBzw9Nw48dDqCNd5tUG48FDYWWfy71YHAWJaRFqfwLnAsV2jwhi2Q5BiFcsx",
  "key24": "3m17ePfhxrhwqPC9ehdrCDeRSgusbY4eu6muYgYw4py95WgNGj4Kf37tdXvZtaLDk739Cu8MnVX7PXcCPV3LxtdC",
  "key25": "5D7BrAok7oNoemy6FcekbYbaaF3W7KR4GCVxQa82YCxqpCnYiwyTSMYKNmhTc8dUT3G7yc3CLpABVcTa1XeUeSxg",
  "key26": "2oVY7Z87dZY9Ud6HoJvbAY2Wm4DsuLH3TpfE9UW6JPthp4vcJRMtbMinFtwPxe3YE7SsWgR4QUv1TtrsWFnmQRLf",
  "key27": "5UCeLAiMVcRVd88pLZVAShNMzrSh1CUBzNW9feZxKEssCxGuw1a7E5iCf563pjDJHUgnyUdHxrAm84dFSxwcn8CU",
  "key28": "2GPeJcEMrpGL56zjDtgr1oiEcs3qN8Q3AtiL3PZNjtByhK4PfTHFHSmw8gvU5zmUcWrFtd5oceFQ3qQQL7ZziSDc",
  "key29": "3GpasqM3Mxc2FxbDnsMVuKkrQtjWaJTVia4B4FGDCVjLKXLdVCoVEK4sstygBcDVEuKZhNMiWVePjRtxb4hFu9Lo",
  "key30": "4hVsFanQnSZCp4NM4qLe3hGPVqLvj8z9NYb5kgotsidw6W4YWn93W5TonYVAKU6DRwbG9chTdRSLk4mgNbYas4sY",
  "key31": "1aQzYDY5vSBCDEGqbvoNRHJiEJ8sonEqDB6UfgHoGS8DTscEhr35kVVoCLq3WEQjNEJqwCegHZ3Tnp6AotroZYU",
  "key32": "4WUUxuhPsz7XcBjah2GXtSQbNXkySqMxmwU2ExQY2PhrsfQhs3QgxersrhGPsfUD1BeNeZRKsKm2hGPN8BN625Pr"
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
