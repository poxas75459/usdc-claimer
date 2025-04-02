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
    "52KrfoYHADvhiNNkwBJevGqccZbXZa3cy5s5SKTCrrKAeJpCS5cCeSerhUuN2itTbFWYiap34WVSvoxeDadakX2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRNrWB4brKepgieEzTVorkd7Et9ZtUojPLSiWEjV85PYjiq8pUsyA6kT9Mb9BgoEf4jmTJhjGzHX6xchMmqkDvk",
  "key1": "54n3pLbCtcyusA8SHr3PpuvukkrrxpCszXuTf8WQmmBREeCbhY9TimquGoS5GTz3sAAvJcuCVRJsYBPRqVgghaQ4",
  "key2": "2Y6jJSUd9oZNueCpSm27AxCnEbKCm4tJ3FGq4EzGU3LYbJBfSyTwxgZp9pXWKL1zHtX5o4SSiTx1tHQMqHJLUytp",
  "key3": "2qi4b9R7TkTMfetXU3M1qzUmk3X46PEPfrVfS42fE5YsygtPZMdPX9GGRbL2M68YQupQA6kSiaAWF7QVRmVdBcRa",
  "key4": "4SUqzS9FgBLYr4jqd8Xww74dSXxDpJWbEjwU5y99VXoaaiAY2QPaCUkPw25q4oWFb54mYTaQzDAfjr7kDMiWBWtD",
  "key5": "CoeU7euSGL5maS9Xrv83ZBGL7aKttiTdprY74dGAj1zDJGEX3Xmwdt4566Z1s22kQkjNBL8vuHTsvmkUg9xzP4Q",
  "key6": "4VRzBYx48b75FRaEoQDmj6XZgaNyEFxB2WQsaPGYyKtBUMKaAtc5LKcLy4NEsKZuU1RZncGeotT1SZHaUYbW2R9A",
  "key7": "3dXNG4CmmutkQUgPAY6LumiNE6iWqxnNh7gM3nAM31Wv4UURDbYRTSGnz6DdHqwh9C94sRKnB1a3N1AmSCNy33CV",
  "key8": "3hrCBsZA48mPRapkRbsFmFmPN3Xj7YPvDhomoxmwf84TpBKAepPNBYkeByx9Bfom9S2XsakYx58eEeDhAsSWrGbo",
  "key9": "3CjD3m3z9zCk9uFKB7zssDwuQMM731F44Ut4oqA643fZc2yVUyDnmPh9fQno4WWiyJChRGT9Zt7ruJ6dBJXdKoj2",
  "key10": "43nF7L8BSTg3YWfhRPGXMfiRMKXhWB8zeDQya3B8XKF9pfn735HjHYtvsKw4RZtFXxuXbxJvNfN7paB6sg8Jhd4v",
  "key11": "t9HKbJufzMkZGtuA5NV1LwQzhrt7C38x7kXTRqb4hXMtvYyFvVg3QaWtbhi6BY5fWrErX6HcmVyj1uTWh5zxggT",
  "key12": "3DotAq8yRjkG1D4abvsfuV2mRwA4f1HNxE2TuMbJ1sxJF77azWyBfhsrvcUUoy8CKDtLhyKqGAUk3BhxjhJ4vqQq",
  "key13": "Yth54PQY4pJ1v1rKGS8iMzqAkF6JLXYGFRWu4yaBykMmMu4iGcYjU3ZFJcAJ5Zt4fconTG9mqXSNr2UqKvCntsy",
  "key14": "2LQpWd3xxs3dvznzaSLoqHSTWSMwiV6hUNv99xvSkXig61RRjpN6QFiAeHir2rfD2SSeCiJY1CydtgBTHsi1KJNK",
  "key15": "4Qgn26uaqvCmdf7LH4KjVUMmHnYv6H9ZdSiixvqVaoGLtx7BEPNtxMiw5h4kBYFqsEm2oT18eDkEgDegLvzLaF84",
  "key16": "5JByCxZFdtQ2pbnpDUmjZ5KUskfXhPS5SezW6swQGQGUzm7jWwyJWWXBEUKnFzgm29aN6i5QRjnX4DpX7rND6SfW",
  "key17": "3sw6C1YoonK5kJ5h5EoUpB17wBa4aeKSx6KT6PJtQUQGZRUbcdfFMMsJNQS6B5Txiyut9zsveqtwCz8V1bQEDqzN",
  "key18": "5Eg23G4yKutR9MaMqG9Wc96bJhGc9BCC9d2zmBE3cq91Q4D694Asx53RNcyBKP7yxTmat3y3qUchNMtrWNjQRwvv",
  "key19": "4nrDEnAdAsQdiddassm5uB4WYP2mxSykR3kFGaEpvmbEcmzXBzXkxWz4xgkJZxZ9GzJGmHZpiCH6c6DV9GfXtP8Q",
  "key20": "2HfqaKrdUJbKMK7pkaPpQz7w8GQgg8NWFjP7tDsuMunmiBfCZPCJVZwj6o8KJchA8FPEKLVS5NDuFG4cKMiWQU8z",
  "key21": "2yrc7b22a74zXAbnmzVKeVT6SifeMh3pEXN6QruJrWnvpvWx8o1bFqGi96cFoc8L4zyTB7Sz5tDnDUYVsG1nDZaZ",
  "key22": "64Tx3AYzid9H15hwF3bacTA7ahwpU2WGSdo7ZWDR5jW1iEoS8UStYDX3p7c32t1eucjNDv1egVnyfL4TTX5Ev8mf",
  "key23": "57JoKxHiRfeCVGk2ANRemo9LoEf9tKbsLCvK1Kho3PoGZwWzmke5JQgYT9iAnGkcMJgbqSCWhMtGWjUoPfGTU2TF",
  "key24": "5M2Be73JNp88beNeS5rNzPUvWedrfzAnTxdYuBc9SRu6AfkpSY87sKtb9eNJwdAndWPKnZpe8nEaGHiQizJYbJKW",
  "key25": "QmVmnByrqHYGkTE5uBCJ5iKnt7bJF3DduvBpaD5M4sfmB7i5QxFjRskh3PiAifEJ1LFLJW5Xzpo3Wb1N16phMxn",
  "key26": "5pvXsVXLuN4i92BhixMsyMeJQ2xg9bVjE1rFf2vaVRjJdMhBUNxX64bfMAzRzGAwMpKdU5jsff132qQLhZNYSeK",
  "key27": "2TPB1ezTGNeHUV4CeGHqGKmiNPCvZJTzHDzU9R5fgtpXptwcTmmyG9n7myyT9cVbTi9UDBXMzope45aVABiz44Em",
  "key28": "3UcMXLLVkVJ2SsgXQrjvzP8nrbPSBTZb6k2gJcqwHqMVbCHUFQPo49t7eyJg19yqftfuhwuQfgsvywZQKaqArtAz",
  "key29": "4Vdrqf5pkbmr4Bv3Ai36kjghANkP6m2Pi6RgULWLfJD445xTRkirB9mpsKQ68cqM741pSs1pzGwjWxL4uir322Hd",
  "key30": "3i3sPH3u4PFrmGDYUQM9Q6orwRAhEcZKTtHDxdd4TKCySEXaBknbDUN424rfUf7pTxpmWjJpveCbjeFx3mQSn8TP",
  "key31": "67fgZ5oZa2CxJRCqYF4i3LpNbQEtm76TGw8DasYL5sZN9cu4qNbudV96NzNfKkZGuccfUy993TE2RARFVRC9FpW6",
  "key32": "5aWcuQ8gDbq8pYwf7ustuGffbToLr5y9RRJh7jj8mzJQuwUvVSMVxxMA6vj19Ge2UYesojZq2QAAKZFg6cGcRPZE",
  "key33": "PhH2PTMZEDQs7jcCjpVRcf1wEAPBy4Pnd94a3GvFVMxXGQKpL4AUU1pJhbzWLjApHqKS8a2xPMKRCtjBqboV2uG",
  "key34": "VeV1yQbHKRwQuCGVTRqkPUiBNNMPGdJutQooxu3jHeuvXz97pfnRCftx5xrwcCsUgRF1kg4zybSSvfkow7wUfyD",
  "key35": "4ddC67cLs65Gx1GdLDBAR1UHSUHRCgC58Su9SmvgPa8MbcLEnWdVGMECTRGYrEc6SLK7g8jeh4EsgkvPxGpaDsEZ",
  "key36": "41ZtTg7uxUc7QbcfLUD22H4fmYnrxVwo4c3G4Dia24MfB5KXuSWxwkjt3nxUqAFSR6ffaf7hUX2crhiC82s6Ar25",
  "key37": "5A8EdWcFNVrTaTypPUdoMQegHny8ZVjjqHLew4yLxydTpp6sb8GQ95ARpZN77MufCaPjYa6yBRfJg3vwLfFaxaFq",
  "key38": "5TVVwDZv3o5wjy5k1AgHv7xFH5fMv58Qs52VReKMsix6AseX4bC9syBNqJqr3kNjRH2QLQoGTjRRcut2nSH1Hu5D",
  "key39": "4hnibbxo8sBXuaE6eW1m6PzoZQDjULYeM2Tm1qn6ZNGSsBhaPNiCaSBKcb5b67jzkQKzEPikoGT4wQAuiqnBn7QN",
  "key40": "5t8BcV3TgRHJQa2aZNC7W9JjR9n1pv5W9onUg7fqSQn4vHWt8gZ28KZyB22rgMpugBmcURRnC5SE1UFFY1kAD54P",
  "key41": "3FnvRtLmPJaSUnaKyy36G4ikBuh5Wr1RpgbDDsW5yGUBk5yQ5prtzbThNseJahLTgVtk4fADw6j6xbihPgx6YQDi"
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
