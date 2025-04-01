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
    "zdCpuxWw1GLUChauCFDLpo27t9DJ4oGD8CHdFXWT6i3yMeMgrEMSuh7qfzrGoizoAHUfMRh9JPT5uft3bGdP2CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVjmVRVshaDurPyPGxQYBHjzBKkt279jEozkxACsHNhJCMYQW4nAkn4894qixFZV9KP5rPEsTER39V4AJ4MJMyo",
  "key1": "5Dy3CWmzwvTzjZ4Q8wHD8EdMU2pSMvEGDuoGqW8BRseq1ppwdhaXSuLYAte6q5U9KE1a7LnJBbVp6PXKMX68joMd",
  "key2": "22Pv8jCMQfjenXfxpv1BHNLD66W9DAgytYZDYumQDeRurzkkgRnPab3PgXcFZ4HUQLM4De9xGEm8rzMr9tYD9DFB",
  "key3": "4xYPw6A81JEDGUJjaYe4QECrgPjuMez6MgR2MN3yww7bj8om3Mw9TVK1A6NN8WEWkgRCcENACnPE9Er7PNvb381K",
  "key4": "3A9hyCYjGb4Admcxj1oCMidagqZMU5emLdNLKPcj35Ggu4Gs2JxWaSJxngzSH51tRDUAagN9VY5o9fGZNFYHXDJy",
  "key5": "aijaBopdwJyqzRMNiCf9GNDgu9eyt18FnJxUmBbdStbdoZowCK7L375Rii3RZTcFU8hrMdwKJtjgBduVP3SGmmQ",
  "key6": "4rdGy3hk553Q2D9PBK6T8EeTfm2GxHjSGcdUroVTJnX2jYNfgtqr6Ca8BJhD371DGRKstt96T9xPpwmkXyPr57Rh",
  "key7": "4XZHRRYNi3mntuNdEAKQeYA8qM4X9Py4qhswuNFANjwGXANngm3aejYGAkAu12yo2G6SZyKUaiPjweLLzFVeCLp6",
  "key8": "5WGJhHPd8JbKhvVS1s4q8eRfgVAqRzSnqJ8zrMUhQS576B7Qb3AeBknn8rNhGB8ucZwfrftyc6uRffwrvHwa1G6",
  "key9": "54vj1ugurhJRwTt5iCBqo5tWbT4yh9uX12CxNMxqQ31Xd4vfFA92HY4FnozZjmgyNuASTc9P7C9mKFnhHJgCxE4n",
  "key10": "1fMXsAp7hzy3xQECzK8LCfoUD1NYWEsyR3QXZcGW62ECU1PU33LGkxR2MvqsZxAeTJosPnz8mDoEAM8pTcwHbR5",
  "key11": "621uvjwVkto6faDqmqu35V18SrEg8LYGpHnD1JcTfFJikXSvaKUPS4HTvvzyuNRca3daxGYa6Y9H1ciRn2cSgHDB",
  "key12": "4UoPdia4CvCGb4LYqRq1mvq3fdp1ZGNFLJ8d7ZwzMit3nGr8UhebruwPWZJMF9UvA3XnZguJos8eYDhcwb73xoxQ",
  "key13": "2n8WUDN3PCzqRx5S7aM9r74XMP1w5ZyHR61FcAjh7vQxZMTFNs19Y9szya6RQWuoDwmdYRe6RQ1T6hv15A2QuXSi",
  "key14": "2NyFQRiPSNBsZGcknTmfmK4dZkkDE8FkdtwUYFe4Qi8Gvq9hUFd6aFMBRu4qbs4vMc7uBSFtJmwTjEPGo83FbSaA",
  "key15": "5NaV8CxU4V9e9vhkNfXn4JgZg37Mcaoe8PrsGhqVappEFmPu122ynjZRcaBZjpDMgLzh6qsstjPj5VqcaS7MWaUV",
  "key16": "4ySGZyZw2Mu2QWXnZL4fwkozuxZSmjRfqnjjzQXpUQGuEzqnfhdQE6KnTmXznELyViot6jPyhwhvsARh1LdgrjUS",
  "key17": "4Awr8hmdrbkmDmJjNuNznnmBt4PePRCwGLgZUU7ys2Wzp6itrdZVYHLVtD6ZfbtgKBAeZM8mD1ZrqjfNaMQ66Jkg",
  "key18": "5s8y9kSPN19CsxvdoyT8jmnuoX3wCpQzojJSir7QWRT6NoP48GCvTib1g97BufMnnCyS8uAhSnh9s4sawm3bP3pZ",
  "key19": "5NNXy2APAnb4xKGXMAV9t52rgcq1g4HLapbMNiAM4Z9vpaVfQN8NdMrExWTKWu9wnyk5poX92QVn5kqW2BDGcyAg",
  "key20": "5hN589EVm7Wbtost2PgNnncJuxPdSvQRtWorU1FJvmzptjmoYXna1TkC9CcyWrcQtiGVaKanZbXYyJ2tNHHNGkb6",
  "key21": "4aa5yUebbieEaGaVKwaPKDHDwCbvJtFNKfzCPSjZsj5ASAJTzzHXdS2is6mpMvdZ1HLPQbfLdDnGCwXxJERaezET",
  "key22": "4rDMY1ivzzgHxThhV9UymVK7Si6QVHK2jK5K2dsuaQp7rcqcwGPtEyQJiKeCD3cNkmqceDFr7PoecA1ZAL4dMcT7",
  "key23": "KJ8fMsYSeiFTk6PAyoEG1xVUNPf3ZB3WqdFmPvMo1ZA65cpDjDNRqo6faqKDjn8HQ8bmCcJKUYYDW6qXmbBiubT",
  "key24": "4zgsynaMcPH75YsxDRSc9awpWHq8rGvxdb75sCUNwD2ujL9M3QMpvLgKhfBgGVpwsrBbp4nX6jVVupJ3o5MS9QGz",
  "key25": "4KVFNgyQmcL8gBEgEVxRQJMWkhR5MXkBHmzLdKCKVPLya2X7eeZAYfekavsLKpmov5zBHAeqMvUR51ZPX829vtwN",
  "key26": "3ZVymdNbqbcFj2b95kqTwUgbheNeuYraMkQZHALJztvsq1EeKuZ6fKejKJ8CNGwaa8uUqtmGG7drcokkyToZR1Su"
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
