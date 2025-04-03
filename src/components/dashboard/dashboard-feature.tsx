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
    "5CQdArboBWBfkyWjLj4AQxzjCfZWs5dkbbJR6NU9CZwnVFoPuAxgu92W4VgD3TB5GWfkPkWEV6i9nqMGdHTnX1cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355Nrm9adqBzYjvTmA1fBPeiEwRqpVGyVQcYR5ay2RR9GdkS4uAhC3QkSGMLujE1RhKuWQK5kMtzcj7qxrmZJTU7",
  "key1": "5LERhspPW8Hzv3QqYGt3qiizcJXcafUYyCPHcXDPWmtUj8s1oiZ8An9wjuPSwGDh3ZggRMxnr4d86gjM8RmkDWio",
  "key2": "4vF5Vyj3GLHN3Hf5dYz2chhafV7hggxtRmxmRHZKBwfGsAnBTeKiUCfkj5dygxzsxWGWJNFWkk5QndgYQS6RXUFu",
  "key3": "3wXDHVDPzKZn9ejmsCzzP2NSMCauPSZ7EVSMQ8DPqcKF7qz3QsQo3mxmXcYLk51RHAXFXZFGGBzanGMnk4z7JXC3",
  "key4": "4ZfKW77p3URPNK4UVDxfNjQb5jAvcPygR7ceD1BbaTiGjVzqEEvLqTiJKpc5MnPzwabw1LbARrdxN1bD2FdJRMuh",
  "key5": "wrCoRrJGPtiwjCs1udEFgGQL4dt99AXynCAftyf9B3ecmDfGDN1daMN68ZHhUMsk8EQZXGmHCNn29wc4H8zb97N",
  "key6": "3wTXnbQfvDfHtVtmNrA6RfyMUPG6s4KWLmmYBoyxwmUQZ6K1Fv3JSH9bLn81KNoDdYdSBaS23tTuW8X45JmXA813",
  "key7": "5XHDTzSYLwS7w51V85eorKpqZdX6CCttP6sJVkqMUMV6pW3DHyvMWJoCwt1Poprij5FJetK7qweCZXvHinDBcPeK",
  "key8": "3wC6RAY9pTGxBj76ZPrAuf5rTuW9qHt9EoZk9VWmPLZktjBUqy8RPuWz72Fjk3YLx86X33Y5UE9vwr1DQ5ccfm6k",
  "key9": "5QzXnb3SUQAP8bC4ZNyfVJGEL2UzJrGtokmqaC6E8GjT4gLqENUvfwwj7VBXjSGPVk45yyL4ryyRqdhyT517bRw7",
  "key10": "xYk9MWZYrdHBEs9GsTJ8rp3s8S8hswfWb4G7kJjEmeVJk8tEwtjCmKDKHzHrZN4bXM83bL4QrVwtyTtaE7LFXPA",
  "key11": "26SyEpTX8FMhp6JBrXASyaSQx4jyTz8Kx5DZp8JAtBnWyEzVKtZLcf8MK39KMKCRrJTEL8Luiw1MDz3ZUwSw9Qrx",
  "key12": "4PjgwMhu7mysN9mRrZyyXG8yBBquVm86dA2RtY8FTv9FLLqJDf5TaTQKdt8muYhgkZ6XRzvYvn8TQnymcziYYEw1",
  "key13": "4GQ2MV68bExNd9uc5Bdi4vUjPALmsxWVymYFkeNeB71HPeJxrHzKHkuPBQehwDFEfUQBekE8iHGKh7govzvQJK2i",
  "key14": "tNC7B6sWDjMgxe7t7jvtm1nJzbNRWquyQ2EQfTJz4tcRjaHPCtyLbYtx5zeYVLZvbJxKNqfVdKAE6i9VNC5cjuH",
  "key15": "2kpYnb1hoR6bT7E3Z5uu51DRco16mDtVmeQGBHaCXmwrpg1fm873frgkzHYjfisqrTamH3BoCcWVJjGqeiAeiaJa",
  "key16": "whYa2S3uYT8KMNrK6PssgWkUwQpFZkfnoAhgzhvTJQWuJC3i1VSMcsXSW28o2XR3PouoYM9RkvUuRqnfaky8fiv",
  "key17": "2fiRyQJZ8kKqVkSNtNH3oKKGD92kTexDxJfRn5RktsgZ1Sh8mXJuhaWFeJfmm2Yw2F85FT82xm1qZj5foMLazYzB",
  "key18": "66ecGD4Sd9MYMKHDd1evNLQsD5cVuLx9CGiSjpdcoudbPPNXpQASmkdfkhZkgCvxVqAqNPpAiVfE8ziwFtvtiGWj",
  "key19": "3xz75vdKfNXrwthDpANBUuiVjkfmK35EuCiDfaxoJguLxLZHThsWAFMN7Sxw6mFMSJZfhULuMWt9kFhgAC8dmBbX",
  "key20": "2zabaUDRhKToaER98cEhRGTZURDTrxt4mCYznsV65BdZhm3BAoPZtdLRoYPKFKnK6q3cKvagCzXmUCnJYFobdA9Y",
  "key21": "5cTJLm1qHcqpRrXmXKhrwy9c36CG4ZdJ1mWREjfvSq82W1H5Cg6SbBQ82nMgrQFE7zBZDNRJ8SWG1dBYNnvnxfSR",
  "key22": "5FCHcdRCk1Y2gPezC6heoMuiXmWAivWVNNp9R33pSDW1cfeEHrSTux3hsgsJPYXZrmyE32w37SdVo4a7bQrvjfdV",
  "key23": "5ZgtNCyzAzUMFcdg7w3uaSzjCLZ8yh9eTQxTYr4dVPsfzZP8kFaGbSavPhSGx4CotdCPPa7o6vc3Jrp3efAoyGpw",
  "key24": "4cmVtj7KzKJPtMktrwiQd3iXv3y9cNX4oUTrhUUBc3r5TuECBuLTEndL1YUWZQ3ewBJJhEBWMtSpGvsy5yfCcmk3",
  "key25": "3JwsPEbDmNtx1T5Joh3DKnAWTv6MiyLk66gV283iPYTNCbwWomn8jZAbx7aJUp7tYyqFWn34vyWfY3a9T6oAKFyU",
  "key26": "4Do15LAnNCDZn69Dv3QqpeK2mH3yYeV2rWsmaYcZGhjG7P5fKXDWZ2xUYfau2y2NXrB7SvbXS6GHiw9omqtDa6iG",
  "key27": "27WSFwtd4FpSY7LyQHXhv5qhPTyrGDjrn29udJmxyEwXvg6QVFU1CPteNAsNzdc1acCH5cSXQf1R4jc8XzdkJmjM",
  "key28": "4h7hnvdy2MWpYvaqaT46ebrQZGPrwBxeYus7orah5a6f9SSq27K1qBZZRHUg4hFShRBPh3aMXDkNpq48CeyZduKj",
  "key29": "YbVHZJx7frGyxFYKMYujGyjjRJeuQcgMZmSm1u5hkzxhuykXhyzmDgmjMMLjHdkiPmo9uWwdUNo2yHXwBf7uauo",
  "key30": "4dedy6aBn6irbayvE9fjc9aDCDwM1h3QYTVPf3CErMQDvRt5PKHkbgA7B7hZXxho5iVj1yxZrZvuKVAR8gp2rVS6",
  "key31": "4zxbhEsjxFaRmRU9xNJZSUPtpBQe11E9D2zoz3rYAjeeswKSAuVB3ijrXqA9htPiLs7YDst1bLn4JPc174omXP5w",
  "key32": "58xQkwey7yJxHwc4ZRJvuJqEnPKmwc854JdLk1pw4M1QGCJjyPcS3MVWGEwndFiRZsfHRv2KncHXj2wnxFRAaRjX",
  "key33": "3vH4jJVc5JtJpzTgonRBCyUHDrN6FcEAWqmSXgc8FxRghuJ1vRGytZ7W9pJG3VVdvWvhw3mFQZbWFedHKS9sWR7F",
  "key34": "4rVEdUBcadQSJDM2hddZupmQKbuRWieMXd64WuboVaGpeym3oNzseowFcmkL7AfnsRNYJVBSLYzWzjyh7enWCZaz",
  "key35": "4DDCsQBKp2WBhyByPnAgiJkRmAt2zEKxoWTaZhkw1FotMhwr6N7WF8oCX4mV1wBLkLhU7chtwTUd3f4dXMUtiybS",
  "key36": "3UoEwwqVwCgUVis5UDxZy5q29CrvbyCpWszoqyBC9EHkpbowmaT34T61dYZELrY6WeMqYVMBS8ohjmq1vZdz2g77",
  "key37": "2UryzyJbsUde91W5xF9opLTL2X1FWPEFwSdgY8gvj4KYwzRD6SN1a7LCJ12cNwivXbj9n33nsUxjgo7MnaoyNsKc"
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
