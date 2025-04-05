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
    "3yef5CKdpvxtArv474VodQgnmD8wL7PNUUxZSEfp4yuZ9NUZvL5pg1JqhxcDRt4NJ8zsaN4ZSpSQEFVqe5yqBFgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzDsUYsPqwqmLqoomdxrxYfMZhxQ3mXvLsKKTaFFXPXS1vc4STtB8L8qxqNGrEsgyupvKMi1K8bVfNQczCt59Wo",
  "key1": "4FekWH3b1b1XBq6G1xSDzWL7BXhCrFfnn6GccxGoBLj4JXkBhrngSRydGUi6kSu93eK5NbMa2advhDoG8gEQ4CVf",
  "key2": "2TxV7Wna1TgiERV9oT4W9vZuU8QDYxjiW5FdQCw61buMDuC1BegYrW8PA3zR6Q2Js15MgVxfiku1R9uNpt3SiN2s",
  "key3": "2DNiF3ZKjiMcSvf1XeUDEhr3Rku6ogETW68YUNPos2i34RZtqzBnjKsB3SWNVLUM5XX8C4Ckbt4XwG2M5hv2gDa5",
  "key4": "df8fKh6Rj8rnPMtDveWk9rvFS5tRZQa3esC6pKn9yPjpBaWNFZruQd2mM144bKvc9iB5Lq9rcbkUVbrLAvjieaE",
  "key5": "5ARmb7QxALUVrLpozWntD6vSdRW79gbfDus6Ca3UmvyXbX4LpAK2rN1vQjS2o3zXqHQLVeN5mg3jDi9yS1JxeBUC",
  "key6": "5mHpSM33Yyrmu9jQ4UYD3rbk2zeFCbntiPjm6Gx4S2AXfsvEW4UzngrdXLAqy98bLgn1cxCVm5YwFvn4vwa3SyS9",
  "key7": "2NoDyEyjH8pYywwoSuKPWB9wiLxkVKKMvcGaug65FLDDymBspgXKicP2zCkifX8DQNgr19ayWzeUAxJqa4T1vJNQ",
  "key8": "6qLJQHFXXNtbSDSQ9ddnsZcDGzXf6uDejiUMiNFowU3WV3UhbizUrmS8gT8HHJXD7R8dFtLhQGZKKtDMC2jj7zw",
  "key9": "2SU4xDG84yqh1w83UeHvwrqCERFFpeoXFdySR3WwPZX6cKyhrBUtqEVq2KUBtPKdH2egFaTsiivEJAfKjzeac59E",
  "key10": "29ymuNGtYpce54Fm8XhrggCNESPABjetDDPNgpBbMQ9aMMunTN3e7EFFDXaBCRfvis4VtmpRrTq2K8s1geHfWZb9",
  "key11": "51ruEHUEEmy5mrYFrDEzutriV9hSKsXZ1vqUNXqm4ZcMHJwfoHCqGrzs5mMzejQFycgMTiDShSgV45Dwps5ctnAz",
  "key12": "3zLKW9pFyYGHvtDjBX9PzjoVh1Sd1N9x44Kje92pw2CnXo7nVwaoQzQNLooLvGj6JyTZGPQH62nJ5J5qA5wTaAqj",
  "key13": "4GLrwGv4nDidDCzCfkkyarrPJ1PTmrTetRV41nhnLd9BxTqqp72M6K6P4UbSSN4mCK45LdJJgk4ZrcKL6KLGxLck",
  "key14": "3pxGzDQ7FvaiZdYvPg1n9U29Gjf6jVjJ4brUz8AgaochE6bWeERVwxUvcgSQdKFVuQsaq2G8P3y8hhVLdNzwXBn",
  "key15": "3KD4mm75eXB41zyQA1kwtGqGm843BTPv775GfCZ45Wm3ifonBj9zTfqhPD3d6oNtSYAYWMLmHWSXXcMu34d75TV4",
  "key16": "mQ2tnN2F5k8w7fmBEjrUcbFiRF2pq4Wvgqd8TsiYS7pq3QFJ9uachArrvehZ3wfpxb6zhDCQSf6QpbT2NWqDtmJ",
  "key17": "QiM2W9Zu3nzkKdj8EFEdFJY6iw8Jek1FNh55poAq3uGwJVEhGw5SWidFbgCmomtkHeTQyAv8NHyryMhjBgr94q9",
  "key18": "hJ8Ku1pUMb9TyuiUJto81xQQEJATSD2GMharPaVytrffNGAyCU4rgEPLnj9n2VgLcPx5tyBDh2mEasEeZDooNrE",
  "key19": "3fMZ1dXyR9gcSfV3aAWrDFKKv2xFtMRtXXuracW4j5xRV3zH6BKELsdVufBJVQdxJnUBPSfhPiUZB3LjnRcvJPCU",
  "key20": "EFcgmZuLrr4pAgJQa9CdFrAoDpbqLsN5nHJrLMfdc5LJgPY285UP7nf1ro3mYQWfgBaTV5arKFJazXFPDJKvs9w",
  "key21": "2nTXhaUDDHbDYKdTm3f8CKfrxUW33hS4jvBSeXkHeBbR87aN8KWEo6DnMp2iyxEea4GmA9U4ytRbZuR9AjrWao9L",
  "key22": "2hvQo4GGNa2TXGeeH4BR5aX2p1VQNU4Fn2eh7y9YhxbrmwT3Lycg9wjkGtpzYgGhQ8MJsWuS5roEQGDwgmBmSVcz",
  "key23": "46ptW2Q1D3CPRAdLJ8eCgQTVt7T4iHuo22ksfQBYGYg4HJ48j1YYDzi8uZLRiRA94dA9J5CX9ZyM3GDsT8hzh98o",
  "key24": "24FRf1Frfrt5k3Jfhh7fYceTZQLhjH295NbsztmopxCVUSHNHfVxKULZuQvAU7AnH4VKQTtbHtGV8ii4Z66bWPjB",
  "key25": "2rLCDpTTnvJmrFxv6TeJ42G39s2LfPcnhik17JsKKPtsE9HxSxHwitSJBF9WfNn1vmdjr429jUQT591BSG1NGdHT"
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
