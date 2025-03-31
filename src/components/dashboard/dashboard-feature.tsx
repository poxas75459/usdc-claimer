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
    "3awyV13ZwLaB4YQ99jvD2VdackbvNgoA1QYjQmHZGRr3azVXy3V9zkF4sSak7vbRWYdiaGujMzp34ShZDJKw1jKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ifah32Cg4krEYdydH4ooi7wrx2bTVQwaQvqPCSzDGKWxcGw7zGLGz3h4UX2U6eHkNRfCR5mXPwpowDN7CuL99Gb",
  "key1": "3qFFawqwjM1V5c4tTC8QqbWjmFwGWLFjVNwoCkeEJqKTnfQW8guXPXSBkqbofuyneaSkkRejERCvfmaNnYkcQHca",
  "key2": "2mqxmzWayzNgj1ijWfMXZa1TasVNpND83WJYYdzoY2xVmT6N86iqB7HZw7P4fAiNhoF5QH6kXowm3GvYrN61RYe7",
  "key3": "5CzybfQ5sHde7GhXjTzeSoChThVp9uzgxzauZtS6TPe5GfkiT9wDhdEBv1osD55oX3n6eBfvcT9F6ThrWA5xMvVE",
  "key4": "5WG6eJ2pAzMZh7iuJCfJofs3aB2zGnzv6ziosoQCTcb2SRttvvP7438fTAXkD3brhKPHUssPAiVuMmfu1q4YSMSr",
  "key5": "bskriAfSrwJc9HDDWsdVjbsaDXTCYsAkc7tk5msjaAKbCHAyshDxw4ppZjYdeCuQgFEjruYfisQFAPrFjcwMdZ4",
  "key6": "Q9hPoiMdiN9iLSLeQvWfKYd1keP3ACeKkn5vhMycvJiyTuyKVqsRLXiwUiEGTnUoRo9poNdEeLpvxXTZt7qqQTk",
  "key7": "2REqGgFd4n1FkL9rq8jojd1U5K1SCzEb8mpQDRojnfZy3T6mXs43r6ZvLdY3VSUmDWa92gQw2Uitx66KhiMaDu3h",
  "key8": "4THbzR5gPVeGna3Ag2Ue3wNSS9oRg5UiJ112qPzBsUtFnBuw5fMeiAR6WMh5ZsTSRdr9vGwdpSVZJpLLwr5uJJL8",
  "key9": "5Wmw9NgutPFvmzmQTmBrLcaUebDgTkY5xrKatVeep5XiDXrA2Dg1s3Zna4jZD5hepWRshctSCKwSfxozCq4ZaquB",
  "key10": "2MaSEGvmMD8MYFz3cALKQjNBwVn5SuKgp4k974JHjVxCfGJSpNRnddw9qMrDmNU459ijux2DkmPo35vXq7ofze4",
  "key11": "2RJHqSWU6JQMvJ5sYfQiaqKbT1Ephh6HDcJgBVPzLRsSRangb4vH9vQajkDwGyFTsgFCNhHCyJnYxZ8vnB5eTLY9",
  "key12": "VC9Kz4QW6UmiuDwDKMbmyviM57kmPcf3685CC3AijpiHfRwXAUR6S8osKmgfZDDvazEK1fQh82cNLpJsEVm8GDJ",
  "key13": "5m8jNgmHXwCvX3zMnGVPXG6wZMZVt7MkM4Kf73tsBGfYZhhxD9QXwhjEzJJ17dMnNQuHKsEARCEtX1PxVqPCrZz",
  "key14": "237R1JP5StVXoJ4tEfRxVFdr9F7utGRu7AJ9ud9RxT43fBqesHYKr8KW6gtPzMDKKaPQ7sztVCW3Y8H9P6coWKqw",
  "key15": "64GF7R3KWb8nGBHN87CP9AcFcMTWnhhK9bspyCjxHxH12NHoXk37yZfY4XK5bV5dEmofPBCci513mE1bkZ9zMymC",
  "key16": "uwbW66iWqaiGYmAV9bBLVaswD8BW37HCrUqr27q8b8JU3amWqSzwdHnFd8dxdHSUybqLFYH8CfNQgjbhspRiGsK",
  "key17": "3yBYEww5hrgkNCQ9KmZegu9BkHxZw48yx7dfg5rZuMR9zjHTManBMienz1YxnxbEW9sQE1rjPcwbjFLzhy4ST984",
  "key18": "Z2DSA9fxWjSMYfqARbNA85aEUzRD5y9oJzLE3CKaP6pTAvJfejytA1sXf4LoSEiwxJhUzSp335Ct8wseWXhnP9t",
  "key19": "3VUZkEHhiEFjxT5YcHrCkn1iaELguzQfE3gB4D7evcY2pprnBdo2GXd9yBF4jbMRR36h6WzwVXprqvLBbCoCqPdH",
  "key20": "wSMhc66CErkD79bYwRr8rJZHZnCKdQxkg8rzzeYxJ8EgJwAZR6XRkt6fnfe1BKqwAPjsguKMiJbp9mqY24XL9Qc",
  "key21": "o7qMbCzLvsbCnC9RMa4GFeG7UimKt5oy4wNqDCHsoFaXPAkFLMXudUMKkofCpLcGHokMgNMwAHCXfZoGr6qyzhh",
  "key22": "4Y1cFJMF8rrEXBL4F86LhQG3rYQBDyKW4h1YA4zSGr2jFYjoqRcL4mtUcVBs36Bn3HnUxLWXhnhZXufykkt7VW4N",
  "key23": "2UWmJe8cSuw5iKyJxZbfo7jENFCAH7RRzDH7vExaGyVVCT87UUyZKN1ighvQWHF3JQziWsMJbwmPPbKcyBQ86L4k",
  "key24": "DpBEN9J9HV46VSuYcLgCsQSrpXrT7zZBLyY2WvgE5axybBfDGDHVWsV2rakJsiCFPvpAi5hAniRFfYprioyQfK4",
  "key25": "26DYnxUmZP4stxcb1NtNwxNd4xfB7Nt2NDybGg7wj8Py1QKrPKMDZzY6ZK5VGAAMc4En5S3giT6ox3qinfJ6BmRm",
  "key26": "61TWabbvBinPUsWoP3m86HAbVJUxVC4upm7f8hZPVpqcfYzTZenPf9JHGq9aDMHjmVXLbB14U51f36MwLYBD7bN1",
  "key27": "3EzU52HjeqbJ5C1mg7LYyW2aFyq8LH7CM9ByaMvCQbDA5PJBFMjbirDPovRhZBhJYAF8QZEugrArCzSVihiKJQD5",
  "key28": "4rVGH3ctABssgjLRXpatSNqTZnAzHcSqiEUWb4EcnLa3mxxA33PyARJh1imQJTnAikJPhMZfRRUkm2SeVFLLJ16g",
  "key29": "kotBuY4Us3eyGkg6Jiz7b9WAP2cBAvfoJyZsEY2G6csYNfrGYr8KcHtVpxKJ6v8cV3fbWR5u8oYgsf3Enk7MFLW",
  "key30": "6uddXizj6DBBJRw6jPZfgrmunTFnd1Sz9W74Y7tuY35cZA6schVCxXwxVA7UE8Xd8Ae15zZpyn1TRyC976jhjwV",
  "key31": "2h2rc82n6PkqopSCUDmjGbwfcQf1PvHqrJohYNQ52VgwK2ekdcU7chbCo6CabEkH4SMntuKUVGygLacMNaVKKE4W",
  "key32": "5FS2jvecY3AJxUQ3ERg3pUWMiJH3HDsy8tnqkdtemiTM14Ed1gnvw22ZdcjkXodGBW1vFhGjYfURyG3yY7KzCoyq",
  "key33": "5E69Kn14kYo5xMeTGZsf4MTk6VBLkRHnZavVCoSuEjdy5jv8e2sWwSLYPKYmtBPqahDwp2ZmkyhYc6zyKtKAzTP2",
  "key34": "296wJiWp9C7mKXakwpcQc7Q2Dy6vZCMmUtmWHHJ9PmDJix1mpLUYgD3TFmpy6k3cyJkWEgaB2hQyyoVK5VTxooCC",
  "key35": "3yG2tB86EFCuQ8Db21ZvrJPGqzhtRrfCJwzjhCuh6Y1PagqA8bptE3EeVdiQgJfkvgQ2Jo4uF6ymyHeABeNw956J",
  "key36": "4Bez1d8eRbw4DKKzuBbty6y2jQ2VFAZd5VqfQi4WtKoKiGo7c1Ww1iWpASL2ZntZDftvH5xuNjCBF8r1bsS4D68w"
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
