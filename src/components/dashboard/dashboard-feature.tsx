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
    "6iAaRrkWaQWRSi5UmNLiYbp2fuGWwqeaLFNLetbFN9eqJupLmhi23Dg2geT368djLTc4SuCo1WtSYtvs4oCfcA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5UGdtiDKjqTB5N1zSxgtJJgsZFtGzDzJzMF2Qrc2n5hXbkLgxhsRJyRnsnUuXCGb5dMKMdSGbnoRpeK9QaCLEm",
  "key1": "wXeG959z6upvYay5m8iMHsLHPr4rGxZmsMTKSfYjmCnbon8Kxf1UuFShGyUS2Djn5V36HtFW4jX7K7HcZ4BbxCV",
  "key2": "5McbiV24wPf9j7Pfq3LvZTin93knNuSv3NUjmBfhSq2SN3RPziFJ7fvwKz7iLCNK2FnqMqUefEMufqXJJWsCM6L7",
  "key3": "2Sm7xyWGGwbRi5E58uZkgopdwpNn2K7prnjeji9wi2ZAWA7K2scj3azzKzxRxV6qVCwnQNg5tJpo7xJDykQp59mB",
  "key4": "264UfK24NdmLF5yXPudiyJc1tvpn7voGVqJvqwZYQg2jA8VaWB3AWdKTyJtWwyABb6pmEVShYqu57jv7s9BvJSH4",
  "key5": "33KZ2aYTUVjDCwtrqYigsAYh6qUuydCbUkjRtPsMHdAfyzRQohtx4VJep84tV63Qk5wUv2x3d339nC9nsQqKSwcG",
  "key6": "QmAL4bau6w2KgL57CaptmKRbCLySyyrpugx4WJJf42LTDfuwmfPojp5iQneoVPbJYka5TC39HBe7oYoAy5aCAMc",
  "key7": "2rXoGbRbpZN5gZ22YW9PwUSA7C685LuVmjPtXH6jXHUjegEMbvAbH2snQShgYgwYNnnX7XcxRugBp8hDQ55QXULk",
  "key8": "2idDxV1TUxy4in6XQXvWqXzYpA1i1Kczq8JUT1UNdbYGXPfGeSkNKGhrLEZyZHWtaGzCSRjEKnsiorjuAdHm7WWQ",
  "key9": "5RGLH1c9P8aGWarPjka2U3m9z2E8rUiSAHydRrAq5CUZ8XC6rqKXCRdqWKdBv6eM1Q6s9k7FVa7DXj4mxTHN2mhE",
  "key10": "33gg7xo2va6ho93ucM8XiqJhdchMGHjho7SDe9NMrtALM43oJuJe5WK9GVEo4YNnYPRrC87kvrPHKT9DysmP4ot5",
  "key11": "4ibgcDvn5XNuhh3r8R9vgPR69QnHSJG2v4BqgvfrFWAWaSc2nUY9bP7PafxjuvsmtdQrWrcv2GnRu7MooToUyYrz",
  "key12": "3yi8m6Ynasx9fVDziC4DmYF8Lp54gEbwQLosAiWXVY11PJi492nwvr1QvUDtviMxdjmTp57FU4vg3XCY8gdCpi6F",
  "key13": "4LMK7iN8dM6whwR9mbDS3HnYHkjg3E6zD7hKrG19UsrDPg1gnrKkjas2zyFAfZt3BKiYYnu7gzJg8zcLaXpsHkGb",
  "key14": "5yaLEwUi7yAU1f4wWXjXvzaLYuErmNPuHxbd1twg6ncmiaXrqtqwCCH99EWZi6kRz1NX8MGCmT5jtuRD4QnfivwC",
  "key15": "H9qf9MWryqkp52qeN5SvxG1EjLhnw2ZQBGk3Rpy5q4LWzRK67dcXmosxTBuyD1SD8eNMtTTeKqWMisfJ71NoVSa",
  "key16": "2xLy5y4EVn8ggWJjnPC7HvE2NnR454g2Z8FDEmumNdVFhx2boP8edtmCPkQN1npC6TUndKnmjQxKc8WMRUEdSCro",
  "key17": "5uCCXdrB7cAWY33kn8FtffFvhLKSSsDZMPVcHi2vqkV99HvyGsh5Xy9BhZ8xB8UozkBCBeQmUr42PoqpfBJNcRSV",
  "key18": "5tFuzFnNDrBXtuHuCKicb16vTJsbBQWLcQ8Qto1XdHaYrQaYv3T2WJ8eqBBTmKU6xvqa6e9LkYKuBA64F9KJBuNP",
  "key19": "n5SiU9SfpaHdbygisVAVs1xFR1TrcrZ2K2YWrVNg9QRfhXQpNqntH4bF1ptW2CQVCmo1fW4VZ4cMP7qqc5Nvrzt",
  "key20": "2so1psMYMbSPRkV6u4tgX49q5ShDQTWYRF4G5fs7tD95UWNe3ZoXdjRN9CVKC4bqL7QNaZij3ryC47cAUMPYosxd",
  "key21": "4nd3PgysPWWHaHua1DvrzxfbSdRE8mko7QuoAjpasGohKiUwvq7peGmFmHURfBoKD8GaPLSPbd6QGWvB2u6CTDwV",
  "key22": "3SfqWE85HdZipPQSkt3os4F2g9W652vYJaTaXag68qUkXahpNkw2GJAjnA1hzkYDfxXuEQ5mv3qtj7zzSAxS2HsA",
  "key23": "4H1mfXpQk36Xak67BPQuLt73RpzuPpy8XdBFMUV1D67CKMnNTGdnd7MAhZb8zWNv73DUuRqxypCcbkE2ozbvydmb",
  "key24": "6ns7ax3uNHGwJTF1g2oS4YRoyHFEryJw5FBdu3m7sgZkHSaPpKhX3o7fpePgN1bQGzNNYj9KyjbeUfgdRFbVuVe",
  "key25": "cn8qUH1D4ViBHYo3Qtfb4uUa6smMB8pLrAyom5v1gu6ufVVMWCxFCfymptdc4UAFPRsGw4qrkM89MtLpaYZwxmf",
  "key26": "627bmEq86ZQ5NNPvUw47oKZJXxEkrRXLnzxCoCrEyqnm3wU2uQaeHfEvrSNGuu3oZ2HMn2xmwsxUxr7LmGWr4RwX"
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
