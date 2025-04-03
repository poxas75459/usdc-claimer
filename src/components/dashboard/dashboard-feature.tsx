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
    "qPtSXpGF6vw8PHY7vNeH186pt2yrWSLan9XxFtLzfLzhLFyZ8EamS7epuJTas7m87PEtEMpaWBwoiCTtNgyM6DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZD8S86TJ7ZXcR2TwnMR9XRu2ZUKGcvt7Mj5Nwth7ZrF2goWvDMwHAHZey6N91VS19GTM9ZpaNv3bZpYCizEzc6",
  "key1": "3jdxESb1WxLcTegcJC5pXxWkWRFghsCqMofjpHWCYD2n9yYVAjmNTsaMybNkNSbGw6Y9ueuhVmN755hYFEzuM34c",
  "key2": "2LHzfDZDNnjByvCzRzdCFLghHh2kMJk1nKpnjbxZVKSzHDyaSkJ7czkV5rwpfLSrhi51jaRisZ53wTFyGqKzzKUL",
  "key3": "7GecTVnqe1n1TGzsYHGirwEApbTDChy5oCnXNNk7q8AJ8YdWyeazcGy6HLzahzLdJgdMs33fLkCDaZirMvrJoGW",
  "key4": "22h5FVYteQyZSyC3npFjztuDagmMi5kRAZD7L3huHvA1VuFumBFxZsKqQV3vbUaXkCvVXfemi9AsSpmYX1vVE7si",
  "key5": "4c3Xg7CNvxXjrjNEt3qzV9xtuHYJMD2yruehBoX347kZF6GATDUzGSva8aF9xXb3QXjuyA6YFfjY4d9NGBiNDJSY",
  "key6": "5AqFB39J66Krv1ERKNQsvhXpFHgdhujZ5a3tneyMsPaZhjk62y4ebBCC22N6pjsZXC6p6oPSNBWPwokBkciWCyvq",
  "key7": "3NiVMoWPDsf6THi3x8GpL1pQgpG9QQmRYUJSFv2ABqLhpHYLPXY5rs5fWatYNgu9fwswE8ZcKpH4FaQyZ5Szj8GH",
  "key8": "5Sh8AeJx7gYDPxNqAtLyRcX5tat5HG3oTnmsF3cv8KUbCPvZU1TwYSCRW2yHZqMriyrEHVptg63FemEJuxL8nvw5",
  "key9": "2JobQSJwCNRBu25F2CUaDK5Qrpmq2sKXLtTQ9aXW5goPCe3zc5xj97jkjHckder6fGKfrsFydXByCd8AdwrDi5N3",
  "key10": "2PsFHQdPL32wL8sR3CLniL8A6XHAnmVogmiHR3mP13SiwXh6aYP6ttG2yMCZvNqbYCbedC9cgagw5gYWH7LCPCp5",
  "key11": "2jeVN3PZE4UNw7eFJr7dQ9k48N9oYKAkWYmXMEfrAUMgNuqNo4RGPGGbbjuPSRje5KQE84oZLBvXKSCxxEqPsu3t",
  "key12": "5RPXoWR3GjtUqQaqGN91V66Bn8u1XT4vNkbyKgg7N1u8Y6zHctQooRtQhn9biqmLeUvTbtryNnxaN2RiKE8eubWT",
  "key13": "3mh3JxasUnGdtGVqbkz2i3qi4HxEPdw6KgjtrGAyaF1sFZZzPhhgDnCfL5PvV1yPhNYULn3B2yeUBzX8XVHAecmu",
  "key14": "4KUaMKbJZCDTCGZoQmcdYnMqZNpK8GPC3sZmMVcUdxLHHSTtm5sgZKouhT5TsyCKweHcv5eL3aP5qNBBKJyYhUEm",
  "key15": "39AeLPENbB8j3YXa2foFyX1YdYKDPnHqE5eNj3gBzs2XyTTsQBsQAaHjAxVLzhMgunJmPzf94Y3UmCK4g1gjRKyt",
  "key16": "3o9kMKPo6PPYpihB5QpyLApNoPe4PfRewEryp5ZJg4pUvUYhYdSFooE418WLUXoRBC3JitQRnnk6S9asnuCtGaq3",
  "key17": "3tUMUV9ZJVgZTk6RqbRuF6JGLU7KWcRDXX9wzVtbGSZAcUTpkd5Hz8APZnNJF2Wth26X4aM4AeFgLP69SX5ufHTH",
  "key18": "5WD85fyySovSZ75o8v3spxUoPQCaT8XbSQXFSKYivzrM7xJVduLGmyLXfnbaEjxs6DMSnWn4yquePQvwP22P2H69",
  "key19": "4yFkX8doqYnNPRktMDmXs3HZiU47pWddXPaZjtfJL9fHebDnu1tyAPqJPWsf6VL65MJFCAHncsAzoxehiQ11YMVk",
  "key20": "65vPffq6UtECuweHBkkexUpjfW4mdW4xhMPM5Vawp7KdhSmPhd4ubRtG9G3EHtLmtpnFcnCsC58mmHz1LmXgnLyn",
  "key21": "JGgvjYMjKvBwfrnKwi4e1zWzjYa4gYNmmTb6RvTLbAxho4RGwf1kY6eXytkvdji9rx8hRzAavV562XE5LkqbroT",
  "key22": "2EyBzu68qttGZSUKqK1HVrBstrrs7DqNDn729jXnyEQmtX1w7gd8jPVBPzFTWq5ZL6GL9G87urDgrJ81heQkw2is",
  "key23": "3VWZEqhjGFi5Ama31prQkwkSVgPAmaJ5yHqQGigKn54zpMAofnVgmSixbLAUZqJsFr6UNdWiG4KChVSzM1bpUSVA",
  "key24": "8ZSgqYysap3w32BcBkvEKL7LQDE5RctcmxQNJR6LgiV84Ge4VEmqN2vjAfq68yjZQbNq1NRM88naa15abKd2WAV",
  "key25": "2tVjRtN4aiZ2CKT6tzheZC15oRr1MsXTEZYDkD6BSt3q7doEnCA5nma34jStFxivpK4egrfCeoJi6cAnigmQZn94",
  "key26": "XsxHCeJjaSPHirUEcqvGuVN7xgxE6N4UBc8RXLmFoVNbNgJk3qjGKh8WcmYEQU6n6mVADxLG3UG5dbHUHmj1mbE",
  "key27": "5BHRUjHLifEJ6K5H4K9ah4fZXHYhAyKFqGrvoq8c86PukzePshuPUqx6uvSMS1Tw6F6jMarMT38Yuf4RBknoLF22",
  "key28": "4QztM1j67ec19CLFm2ERrupbf4E2Rdoo3jPjZxDJPoLxsARDVkH4mzdfHjZrM57SESCubm2TWRT6ZJtTe9WP6W9T",
  "key29": "3oXzoZFFGY11yJzW1yXf7EmAVsq5UY5Y77eVQ6RoFrXohPKLzFupYrDJiLV2oNgxwd5yBqFjNdihYvP94CeWeFMw",
  "key30": "snf1v5Ric2iR3G7B7TvKR4veBig1zohKfex3WBYcWAWrPzS8t5rXSpBgxvxPMwsDHAirN3KPhJXEGsVz4JrG88S",
  "key31": "4ippcGFsguNR4kkZwWoaytz2fSW6qmMPFpMf1zuE3xEMfUewqLFv4T7JRq98j7JWjyhoQqmL1AWntgs49akAa687",
  "key32": "2q3hynnQUzEvDzdxAZpfNvWTgUKWXi5AHjUk48UYGxs4fzxxvb6ML9WXzGp9R7o3SrzSRT8eAaekokgxrBzbDi4A",
  "key33": "HVGcBVz3us1rrbm95B7PnivpmfA1JsG88QwW7jBuszYTs4jDi5QqW8U5dwyJcLhtcoUJp9cQoFRDmba9a9b8iNC",
  "key34": "4nhG7sEkdnzv97K1N2abA9g2KYrht66zQiqDz8HMjRkD8uKisiJMLTgkZpsueqkhG3MKaUED6d9XbX2QHxjyEakH",
  "key35": "5vt2hZ4eWH84GNpLhGSfzdwVY2Dg5KT27yy2wKfFodc4AbibJWQgijMQgJxyNTETzCZAVKAHVbTkSZUF5FcTwAiF",
  "key36": "2zLbz1kZT74XxtA3shaTY9FuaBV4bAipVTq3KAhWhVGo3RZmWYHJzbpWkvsAXe52R3AxfErPBjsPCku58RLCLDQA",
  "key37": "2a5N7F9fzGn2Aqtar7eAemctGuNv2RJ7YJFy8hj1eWp8FvEXgVqLvg9Tt1d1PBz9NehLtFFvMYb29wVb6FeH5qnd",
  "key38": "61QtrppmhPZwxFmjRQApfhbeezUyZzkRYRDNKA59RfwqC1Rd8M4LJyAKBQw4E9BC2Z5CY7VZnihBtJDdX6Hz6dxt",
  "key39": "2aK1zdaUUVMsjW625N82X152HcoGxvhj996JbQzfq4gFTMRYaaYGwgoWWQWPmB5oCq3g7L5XYdAr9LbLmKHDyq7A",
  "key40": "3qFXvNaohfrP7eHbPm3JKFo8XwoFVaksntzEi9GYHyRKp3cvenhaH8WewA5FGA1UU1VQMWX3BcERAgsAQD53SKXo"
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
