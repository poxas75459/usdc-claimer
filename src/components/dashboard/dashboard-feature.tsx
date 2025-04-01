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
    "3f2Z1ryLTHazsqQvyg48esyQxHhxzFyqBh68VrtyQYqfofHKjdzpaqLqiqebGYTYVpeFMoZ7ZL53KWWmKfVb5EBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwzKGYKs6Fc8aVYjjjyZggQGKCP5ELKZQo2CGPb3Yg4Xq1PKasm1uixqECuTwRJoVeqPqPfevBT9LL1d11gZMfp",
  "key1": "4nGzRes9oDnVvVKpT3Cpyt9CtwnDWeHVABk3dZeELmBNYRUjFntiByVDqcbgCViBf9TT6P4v2vJErZAgzrJ24QPF",
  "key2": "5j71uJRmF13o8ixsiTLr3hq9emV8YMHFVeCWJowszkBcM3qHveSX4UykrGo8xbwKCfFjohKw6FN5LVa7bbmYm35H",
  "key3": "452QoyD6BpWm7gze3UPHsnPgsv4EUCQEsKHpoevSa6EUbKXMHs8y86vFNRvVeVCS9mV6DxqV7ZBvVT8Z9ZjkYtxp",
  "key4": "jCscVhNDJ7qx8f2jhYmSjBsjNi8acaKnbn8hfGgQoZ7bhfXDyjpFbRuPpF9KTDmDTfe6KkVRup18nUDVpPJJ3dR",
  "key5": "3pCm59ZGZApiJXse2196CdE5GhWV8N6ZCwAfkZn8w566wAfoKyEryE82yX2fWuX8xacy5mtfiUoP9iMkbDSPd9dv",
  "key6": "55do8A3dq4SBc5KC5xj7ttCVNbpH8zuGhmeKqVKtVQadf4bXXtEUW682VAVeP5jEEXvh7K5UnrSRTyAT4UD2VooH",
  "key7": "krmLp1Ry7UHHF7V2Ava9PHvN2B4kVBWwuPH6JWzFZNGR7P58qHzLojr6aF3QmaQPb2afxVnuhBpSyf8xv1UUeYH",
  "key8": "41n3Bv5a6JjRKx67GcB644iHKaebr4AsWBFkWAQToWtN2NKMXKwYE9RZUovLH2vw3mXQQUCiCBCjeXi4bEpBP4Ne",
  "key9": "8uPNA11iNjfQ7wJEMK9STkE72JrFTKuSsi631UgDB1j3CV7BT1sdG6R3uV6ZYqi5ycDyMvHy8StrzgjBP2hDxma",
  "key10": "3WeF38YSYgWzvn8TtQ5C1tryZppAc3tA3rwQzxRcRFHvgazsnfknWAbELddbj9uWkZPkioSZepGdcMSUTGP6ejHX",
  "key11": "2RnLZ5RACjtWuw4twADqxYNHEpC9Ci4hZNBy6NTbnxk6X8mWjvBAjrJu6SFkzxC1SaD8bM14PuuV7YFUsYRh5uci",
  "key12": "5fNfpumuwjCcN5qbm77oA855bRucT9T5rBZr3DteZECXuPcBTVhME53EbKWys4UWNnTvxTHMt4VfBpGZLTfWLMJr",
  "key13": "53kt62HjCL5pcX2pgjwPbVRcptWJJAKF4DZMKBiRKqDjTy2jDt3kjusuPQTNArBzopUrTCoGiengyg6WqJEERd1E",
  "key14": "2eNTRsJKYwSFhSun6SMmKAwxwSCAerhrnQfcnkfLQi2txcbbdzFgHvU8RmWqqsHvSec5TdhMnP93Buq8iTRAMhoF",
  "key15": "2HhhR3uMyzobKLtyTPnjZUCExSL6bQL4Xdj9xPp4WgQqFmASXKKXg5GqL3KY7ufJ9F4iNJdnjB7t3gZ99mEx33FV",
  "key16": "3biavVy8v5RGBL59BS2g6frkUHsywf3JGmvE539gydnGDBVYerXWe5KmLMLv54Kskd85cyVA79H7iuSQX6fCX6WJ",
  "key17": "qTotFyVDFMs5ubzsUEwb6JRXQGQ91JThcG3QNS2dJYeBYJ1XshmYK6waggv5VcxRNXbDYZd5PPfBUdooi1aHDFT",
  "key18": "5TJNpCQaBxuGTmjH5vQR6hcKvkpCbBkMwf7caseyuwUyhBPDNE7VDNFgMZQek8dKPK7qoJgPykQU5RVJqKiV7rgo",
  "key19": "h6HbGoXLUABwwvRFSStjQohdntNSiPgHJqCSCzzBtK1yGPa3CCrugYn1Z4n2NtzFKnj3niTZbbqJFEriJCVPwdw",
  "key20": "2qRGbDUa2xY1sF6FETpetbgAyhqC2X1dnXSoCgNQaxCJ1nWYeYPHBer2jofLdCVBJ2VenZSFLFGcrUxc5pQ36XbJ",
  "key21": "2tXWxxnXFC1cdjnUNeztBeU8Dpx1tgJYhB8LFaCH4NgB7jqDq3L3yBFBek1dKyVjWk185CHuiqwKjcrEohVsLJZE",
  "key22": "4UnCz5bmMPxS4nGPkqMCGPTJRNLJy97pEysAqVCxyDpvKJ1NxkC8SyjBkj9ZWhL9fQJSwMaXmvXWp6fDX497tZhv",
  "key23": "2pyJ4SkrFYdTVX7dzM6SnTW32pBeGhk4VpDBfBicEwT8DgcvQUUGjFPh61pgR9ktvVRTHqyocp2V7PSNNqAM8ESH",
  "key24": "WYYHUDJr4ZnWQFk4y8q39DopmNsAXtxyLTgdb8QBMg7ooqyVD1FmzzhQKo899SW8bYxVjGvQ6amWAuDu44KmVve",
  "key25": "GYY699YtLUyvCJoVDPi7Gs5hGYvCi6EYvZAy9CSu6m28vWRMwzhvwUoEA1SiKfHUTngFVB52L6KfrSFiX1pEoUB",
  "key26": "2UhabgBJAk5DXuHNfeSP11nK4zdhYUnW2LbJn1Mvrw54LGrVoizwgagQ77BcVnLgKRkrqNgrPAP6vLvDXkEKeUY6",
  "key27": "CLttxXoydA84E9VZcALtGxXGYS1aeqNr9vQoPnFiwii9z2sorBmGzqkgan6q4kWsGHqqKeyWFkJrYxGrnQhrDdx",
  "key28": "3ijNUDBD3XYqPborU1eknG93LHqrZhfSXrQVDEto3xJ6NHBbGZdoiBPERxTJ2SAaxohqexDvnRYExpmWkh2cpXtq",
  "key29": "SDHzLrnmhhMZwD8pfpDJQmbHA67DrEJcPqSb47pgksdjuxT6cXnQJKANkjAtjKwET3ENq7sZ3BEp6vHGGyCCpgB",
  "key30": "5T788gBjx16Md3stTvdK8zfXzBAXzgxnf7V5tZ8W35NuPVoYcauA8BZaJJXCSyZayA1vDAgApngMYpmfKNkBuJeU",
  "key31": "4oj2XcguARe7uuUAkjn8L8wN1X1U5ehsPrHHn3b28wQPjZ4P9zenE5CryWri8cuyEWj5huKLEXBsrdTMox9bVEcm",
  "key32": "5cifC8ovp6gqh16kUKuzbkuqxDZ7T9LN3LkGUA438zmNiZiUxC8P3jA8ZTwCSsTtGsXjDz6tA4JAomTRwvkgbWvn",
  "key33": "5B1MX6tM9rUU9i75A1pJkgLLZymV3W4KUCEecW698FgAeDdd2cMCugmf5eQLkeDBHahNeCxef6hyJEX4vmEdrKVz",
  "key34": "5F3J1Miqfoe7BPCTU9evCN1qiXDASaApGmmmqyRhWFCLfGd4GeKzMHrSwZ1BTPyDRwTn9eeS6CdRfaAqzc4sxjJh",
  "key35": "6xqGmrh5o2xD9F75pZWx4qgEvNj74yxzyzCPR3tkLQDfq4Gc6ZhqY5fcT6aQsC7hkWjNx2M1jX4KgWVfuXrZYip",
  "key36": "3xER1sxTa3n1k1wZjnXEEEe89bhFm3UTEU3G6FuRvAGuAgY2DTpnu9H7RdUHGUMNechw9Sm1jiWrCyrkvMwLH7XD",
  "key37": "2fkNWpecCWxfJUuerbcBbTCaFCcsRQzFgw3Ygxs1JShr2RquhvoqhVPN4YPcAkudS6D1qhCdN1PF2Eva8B3wdHXt",
  "key38": "3kX4c7CF7emkhgao9nCBKmtH61z7YUC7CHMqwAYPJHfvkxFx89WeNSmpQd7ubN9wb6XnkXdb2NyfXsFKJeMNygeq",
  "key39": "4p4gtm7qBgjyxw6pnREgwcVvdQuP84TfMfX5G3SZQeDBBCxsWpviUcuKFCmASrLqyaPkezqmGAryPDk3i1LdRYjZ",
  "key40": "25DDRAcAPg4PeYQDsdRmTYuMVXXZcmZaYwrqGhGfwNowqg4ZjTt16mX9kFDxsg4DaxwtggSuSuQhpvd3gZMp54a3",
  "key41": "5xZuL8AWdDyc6HYosaE6Q5q58Jim6Jm9Vi5ZqkhuYn43eU1G2txmkg1y3CdHtBgg1rRiirUvgQpQ5QLD4eNoTWSo",
  "key42": "3gQ6fnjJrYpmWiNGPw3q3QT8jh85XGeT256jJ4Xvpd5GVGmAEdhotbpBM1mgfoWR7EjLvkSiw229RhrbkuHiusJE",
  "key43": "3jWjs3sUSYDqxZRUhGeFawYf6PUcTYnXz8tTqngZFMGm9a24wwR4jpvs9F1euZr8vyLqsdVKf5WuvyPBR8ArVoV4"
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
