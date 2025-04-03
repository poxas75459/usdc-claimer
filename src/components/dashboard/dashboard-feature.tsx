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
    "494Vij6msf7wbV9TVVqjh5ZD2sXrXbaQZGXMsnpKSxZMzxXKFY85z14bcRmcPHTiXtH8u6Z7jEKFfdPMbt3jm9Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8WJNGT6q2nbjAXKvpsg5waH55NsHkyKUDyqMrVYQu6JokJGkkanEYA76aZcfFredRSWP6SCoVUu1xLcQ3n2hRD",
  "key1": "PAv8Ty91CbejmXHeQEqpFjHurqwUGHNR1knvYZrFx7AqgVaaHgUeazRLok73t9TtVgcFBcieGkPPGFcW8HqUE6V",
  "key2": "YwtjpjzSW3X5sVKSyDLHimzHdCoeQhSgCDQ46EmAdKsY6bCtyhRQGbopd3cFE8iVgFyAzAFsZKSmWz78xXppPNH",
  "key3": "4S4HXkH4bbC8rwdJu9Jdd3qzfvtzKQbxKPqQq7JjomqhGUTLpmf4FVvBVyeor34aMmW1k36EvM8LALwP8u5dpJ68",
  "key4": "5C34kmy6YNGRQJEHGA9HQf62pssa8BU5kXVmR5wYsLN5eeFdt7BxCkjzSdhRzhVL5sxg1bfi23WxfKgokG2gt88M",
  "key5": "fEkCbofSt7M6aXFWdSe4ma28yEa6FG312un3pV9nwKrDWQ8BPJDnkBjxXNcnxwamkoFM7mHnwSCwnbKegsYYX9J",
  "key6": "yMdQbzZE2ndZtAuTC4GmuLTMYgW9DfAuf4yawZYpWUpSyG9A31rrEQkzJxr1dgffKryv4s6x1UiXsSTVKj9e9C4",
  "key7": "7zQ6bZ8DoktWDsn7c7VNidkiB7GwnH2ZoqyELXaMryMo4mSLgcicK1jU9iKqGLwoMe5FWYnX7xBv4Gc5HFFRAxc",
  "key8": "3sWBVZ3617Rsu9gJPX6jGzKi8NsNHB23api1K6oQWnBD5G11N8FU416ZhDgbJmg5VYgMXWxpZApUuNVwEA19iyFy",
  "key9": "3saWdhid4z3zu1tH8xZVoumZUWYaBpua5gD5TYYCZEKUQ34ajYHJ3f94YvA4d1XGUKLkoQ3g1TrJWtmWinAxPAXG",
  "key10": "2L4Vn1uNpqugjN1NQJmuhFJoqfLVoBVPRsbbpr4Kt2Z8RnpK5Fz4vm2tFLzpryCUSHuAaLd4NhVj14MKMRjVMFS9",
  "key11": "48aCpLNTbacKXY77gmjKc2kHvvc7cJokuJ2XYWUuJM3Eyd12bEoeS3N7dtsuvufXFEj6KhEnxXf7TGQkPWfLchtA",
  "key12": "3DZH5KubewaTBnE7qEZmNVaVXCv2yZGTjZR7pfX2GqHmDHusCUm3te874tT9J1eXPeDvA4Av7oYYS9CCyG5bDfFh",
  "key13": "5iEixerqUwxbrSjVBTnvC86wH3wDNzxRus9XCTxVSPqYLBgpYqFVSr2dCAu91w1VLPvb8H5sUmPwxWhM7aXH2JEk",
  "key14": "2hQjgd9ywsvvN2F1NuSG9QWYb9dhWd6EXRk1BhcC4UFuk8weEuF9CAFtramDRqNXXnUKcH5A8ggpok22UmE5gdQT",
  "key15": "3qGd4Q6fdoKk4UNNNb8NpSuwx3Pzk36N9HMkuL88FQEwwgs3pYSLkf5Rbcj1FD2UZDi44KLBM7nZ74EP52XfZ7Bk",
  "key16": "5wYDd8vAKuKMhy9DsQBC73aiUfYBETABw3geUTJaFwFwbUfKpouFr8VBQbf3iMwq9R4wZQYdYFp5FCviLDeGzYUi",
  "key17": "4L5dLHPvLjXSy8Lb2RzSFshZnN1D3e6Cp8uAtfWbXWYysqCmwmi9Mm21XTaJGsx8TyiC4L1q3GLSrcijam4hc2Q4",
  "key18": "4twE1DzM8srCqQdszXisSw4qgDF61MCA31QK96tKAkgfeevStBLpZ1QvfxKJQRhnDq2wmezBQerRF8NRL7YUecJb",
  "key19": "n2cZmXGxvAy5U6Uisk35AhE9UFpyBiKK4gPg4iuHCSqamWV6GLp7hS2KshB7e9wpEPnA8gLMnXQCiaiWVzHRrnS",
  "key20": "4rRN9tD3oRh2rhQiiCFPVysXUjBWUYnXcTRcxTwzW2nzFt4rcoypfwHoN3kd4xD2y8cQbtnkpMsunsRBB13BjTce",
  "key21": "4BHdox3EQoeqtSrPeMmK5REBk6jmLDJwCaTYvrLe1bhJAmxS8A4YE2mHh59XQPFpsbAixn4R24Lr2JSUw1qJdK86",
  "key22": "2UB2yLQ14wess3doro3nMXPFngfFVcAg77ZJ6mCZo4bvxNfN2WLm4JRLCo3ggm8XkzK2Gneqq1m7GMLKiWS4YGSM",
  "key23": "5qDCssffqifmXqNbV3x7Tkj8XXQwL4bsc5eejcJ7U6c9dPXdPpjZ5LtmTCmuNWTVCfKUGQSraRQD5tD2DE6XvySJ",
  "key24": "3qr3JuMARGGf9j7t1T1smbP7hZ3NkSSTE1WwiAMVb33rSiygeRk7qvfkzAKVPdEmq5bfuBmyaNQyx6Ysd7yHrdET",
  "key25": "5dDUtGTEFde3ZMn1STN4MunjconiRDgT8vhAuUuySzKQH5JDEVzBYgT84EkGBwFFMRYFAw23gA3Py1heiG6RTLnK"
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
