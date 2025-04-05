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
    "3TXqn9KsQCUZLvwyBzVNwuJXQD7oUXcZpeEFaAgr9F6MfV6gqfTzQkTKfGGQ2xEqaN4twotUEqzsgPcsrda82Se3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUUkQ7F4ZPjoGpK3wc9fy7uRHfg4wtbLiYdsf2rzxnCkifK1kRp4RQQV7trmH7uSWrwVChcYq89z3DQmZjQ9NL6",
  "key1": "RT7x1a2iEuBPGjjrRH96MTZDCX9ww3JLw8F9xkYuiUiyTZfBMTLDZjuNYE7MCB9MxN8WeJfToG3SFs5jfMHF7e4",
  "key2": "63UM6K5hC6oRjxVzjbs9WctY1gPZYqKjGWhm2QViEMshwEQJ7uoS1BohzF6o6j4WqRj92b9Tos3Wr4Thp3FdvCPd",
  "key3": "25zf4Q5KYcaZJ7ym27bdNr9MyfUywmtg9FkvGtek7hqVCU7rP5hAb45kWC7rkSdbCekoJ15cgxQdpFgS8KKVQM7i",
  "key4": "4By5KM7rxauzdVuj6V43jvbHgtmNEVL7wwgMk4LDx8U3gWMJ88FFAmeNExYE9R2NxHna4kyFMoXqvcqRC3hVXwz5",
  "key5": "49r1yYamA15S5vqp6a3fiNAczTnW4ws8gh65113Cw4Dhn18MwHXsM2vGrPrhHRSBE3jtkLHy7T7zmqsVdoWWpmCJ",
  "key6": "pnEh3toThRiDd8TvrEbEq76RHmQte3FUZefWPQ1RW9YWR2wR9fK58BsZC4coN8aMHnpmtN6xGoxLVy3uE4FJP1z",
  "key7": "3JqKdbmjApW1Fvio4rtB1Gk9eJm2Cfuxc3hTyirsRRht2Wzy3d64naBDCJYVdRPtkB5RrXWxWzsvCStQbzpM5bjo",
  "key8": "2CeYfrhUkHb9wHGKweqSMVPrME9SomoMBczKKDsLkFB7S7vBDR8ETRP9xchCVuyMxK7bk8ERBqFoRuJ32X2A21TN",
  "key9": "5SxfxQgNcScvvnxtLAxHMWdtKuAbA27yTKCJkLVENduApnCkMNtqmZkHfpGNkDQTbdBn5BLvCdGHASrs6iNt7oX",
  "key10": "41y9QdhCRD1iiybNk8MFF51Wpqp9FfZA6HFpF5VWWhTo2LJUwP8XPsHqcWUFLY1dE41EKk5qgyxWkYzTo9bd1KhJ",
  "key11": "4JF8GLUzKPokunuGwz5yn44DkHLP7n7iwVm8jskJFKhbPrQoFq5SudiWUcWFpNcH4tH5UHm7EuYPNrmUE2jTCEYW",
  "key12": "2nYXFVqjmXGjg5ZGxW8xUyGZcmxnHyaP2nZKKqMJ4aH1AKGfov8KmxvYMdYSwH8KnHUUz9UBehsiGRHKpo4CNpRU",
  "key13": "2csyjGLGgvf4jM4Z58UMNz7AhqqZR7ABaiTW2a8kPjQAgo648GaK6mmY2xZiqdaK4UtPpWHd9rWH6Yt84KRcDNFA",
  "key14": "U73oiV6q4EzLmbUzFV2XEdK327DKLgwPqBPnUJJV1XxKct7ctafsf2oZpVJ8e5Ljgqw4JzcXvuzDcwZZtKN25BF",
  "key15": "5ozsD6JqcN2a2e1MSFQx9YjLuF7nuHBp2iWKX6WKU7Yq18GeHJERTRfYDt2efURXxBzR3eeZQimSSan8SRVe1MW4",
  "key16": "4GhUdqAFqMZNnKjie9HKFt89niyoff9MFG9LNnKb3LWg4tMs7qUDFPvgg8mqHzx7h2FiT6GXmRcgsLqYEsQ5yNzr",
  "key17": "214rQKkKCSnPY2gXkFDwffeUHPFfttwSzNrQmRcZBA41gq4Gwq1FTVALGbu1niCvswKMEgkoAG3Q6MxEQnpQUuwz",
  "key18": "4JZQ6pG2DsKB9RctpEMR964PWWLEEoSYQ6trNS2TCqyfRzusxP6n7Z8JuRoBrxbZ6TgW6JfHmBG7H7hUBTdTTKD6",
  "key19": "567vWMRv45vXcf8d6KbPoW6XjdUUtUJmhc5q1Ro6J2Krpx6C87am17y29apDmpSU9xCshnpqGSrsAdLLeuVJdCvN",
  "key20": "3UcgVwaZt1pJJrPyRb2Hd7zuuGTKYyBxfnV5Hx9ADVFAzNnchLYLyYWhnjfCuc9J4VXAAXjrYbVYoja2JajRT2xV",
  "key21": "2J85TU2CQy4QhLgG8ZBi5dXTS4xibPpY8FhaQHXZ3p1qqiSk6QCBTfQK3a3Pw5uTDmkosrG1iMxHYA32ewtMviYH",
  "key22": "2i1rHPQ2j7Hywa1Jr5k3ZsYqaqW1YZRMpe8q3BiG1syYWKtJ7wnutoQxsMS5BRZ7w4oGzD2v9uiiEGnm21n1aefi",
  "key23": "5KFL5efAk3argkWg5v9RiBeBkBof6LLgp6DdBzjm6cxuSyMTF7T1FfuqTMHxKTC4EJdP6H2QiFSqRdpuCTfXYvZR",
  "key24": "3a52Pt81smdPZa7gFG6kckxqfVcYQdra7dPPjvDY9XQtABatBZzE5QbZ2KSrJLMYpt5L1jq4eiBLA6sK5q7jMU3b",
  "key25": "2SggAGtCZSyVKapP9H8hRBbZjxeDSKwc8L6qARuRQ2bZ94t5BHFDuYpwZt36A4rXnd1oZKV2QdUmsvsKrfQRCUJ8",
  "key26": "3qtwkvervtnig9fpHvBzB3sM35csRRVufs6gDVT5G7SyaVjyBCprHi1RiTnxvARuKS9mz6nEw6Bug1qEwmURjNkg",
  "key27": "27SviQ7tpZgqKwiXw8UzfNEQAfgvWEjXwvfzeBnA6Ab5f1hPJk8LeDLd3mw1rFX6SXvPNVD5bK8JsxeXAkjGQUi1",
  "key28": "5umMSBbCxDAqizRxm7XX6M9o6LdA3uH5X6pr5a8sgrkhfjwf2Edqf8h9WHdVc4Bt7G8Eb5srveaQBomtsJyv42o1",
  "key29": "49mKF4Q8MH4N1L6RQtg17PnQvU1pNcBhrZzjzaYvGUXvKpqzvHmJj1ukba9fWG1fvapTAavnTzFtyVAgp7soLCsP",
  "key30": "4nwRAiCKczowuWjRPB1ExcL4qf369ANBkugS4B4FvURGdUCD6a9pqWCBRUwXVbTzMqmuUHWHaPTPVMM4Dr3gfa7X",
  "key31": "49fAcAxdEwY6wsMVcdLUZ6H3zn7BYgKSimtYvsVezQuXThoV7yvMfGfSQsGw3cLP91SbULP1GE3G9rvD4YCQFUDD",
  "key32": "5XRHrd3xSgSQAqVF3ymzoBQ2hUESD2HRWRiVZActYNPV8opp5nt5hAhLB5aS2XVgvaVQ5rfcw7bT24HuPYz5QRGP",
  "key33": "5Jvqi4VpXkK8V7VdaQkV8HwBfN7eLU17cW6nZaVMUZE8nA3HgJGnFzXG5VYLa6yjR1voqofhVLtENimQUgCdBB99",
  "key34": "3pWsHkbeuTMrS2r8nzQZDLgF8wX3NyEtNmHBPkQTehZNydsrUiFwb5rsFm8H7ZUrWW24XgtAXHkuxki1Y8kyEr3o",
  "key35": "3E6tfYZxJvQ9ocVRhkbWq2GvRk6p47ZgcpjLXePrSdQdbxLvEqfNPdAvcxByMgjPKC4K5QFWpKtYtdtMgocfLz3y",
  "key36": "2VhKkc63jufQxd3ancKbxi7u5AczzHh9eZNLPyJU6qB1KAkZrF373XAtN7ymVFJadvD78X1xsZHGkQyiZvEutjbS",
  "key37": "2GLR2hLXMwVZQgLGBLebmrdXmzQGPDEXYtHNJWNAgQhM5LxCpk3QcaLkkZQLohCpp2ushnC56PCeLXt4EWmUnivG",
  "key38": "2J82bqFjDNkULfhzcpXJKQBxesT7BDV48gB7MYeYyZfyGpQCZSLQNCxRSngFsan1mj74iierKDacGM5o1ttaDkiR",
  "key39": "5K5rmnwF83ZDCtPqfxVT4RVYouE9TD73FgcTdZXgKJZ4AavoQ1WXiL4pgCS4gTPQMi6aFtAQFsc3xJxsuxN8Efyq",
  "key40": "TDCW3Q39ggw9o1KVJLSy17Rp3kfy6YbmJY43kXMSBRw9ACEc3u3ZYF6v3iAQcnajSFGMvYjjDQA7Tg4P3b4JVWs",
  "key41": "2RUQE2FrYRvRM2DSoSimvGWGbp9wi1Dj1ZWffsNpt2KP4dBLEMd9z2BpEu8HAvcgnbMCb3W19BUqTHXSj6sWmwvc",
  "key42": "4PBpdSRTV6vRafiePDwo1Cxw9nAr8M78wVU3cku83nrFc2YyZqRB7VtQLr76vbqrsa6tQRdHrSNL1UBpwML3jtB8"
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
