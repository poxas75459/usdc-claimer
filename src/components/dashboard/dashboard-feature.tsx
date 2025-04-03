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
    "3WmPYH1dZFpyp5QqPiYXM2GMcfZ5B8X9ETRiuUapQVZqXhSPFNWAvpRLZ5up72ESCDLsPvATT1wpJatp6Wur1a49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqvZc4iYxehzQoJJnTgqVxb7LZ3nTPxtUh92RhoPpHRStqvAWj7wNDa7zvSyLzqNywBWpUgnMRbRrvTPhKSgEGK",
  "key1": "4FJnFEb8gCsb9A1Z6aU6gStZb95Xm4yXTAqT8cTjB6Ad7iMyVA58VijWKNJBvjMwSUkm2GWDwYGiK48cziS2hYPC",
  "key2": "33r8dZDzS9MQfgR1o2oHacvxEdL2ZF5xMfcfVS7PLRR82SJcv5vD2AKJZYhuC1SsvmcN3cvGtfuHfDfmfT3LkC5X",
  "key3": "22bwtaVKznEUXvCm9gZqyM9vDTXBvvHDLLcy1Zo9QEBF97kg4n9KkMTaL1EoWQWMP6xbjFwYCsDjGo2me3D7FR4T",
  "key4": "4zPTPNNpmV3iBvEu1pUyFGwAqPKNBAhHqH9ajBCZTpMQf1qq7heb28T4fuDGBU3cFiDUeGnBgT5NmKMgpaLQLwSM",
  "key5": "5s3TTY4ESDJQ7avuqkMEJExViDfdhiF5SBGMsGya1Q3Sk3MBuRh88sN47WFKoNz6GmXZmrLsUczoYRNDQBTXDHFx",
  "key6": "3oKZv35LWqto1ubAUXPSmKNvMWBSaptTQEPgdr2Xg6xPGFqsgTXsBuRebMEqPcuz7jihcRiey9EvDhTWGqGn1PUx",
  "key7": "4AHvqDtURgbkvfAvtuwe929QJVVRpx8duTecm94a5PkgyP4wgH5yV6rgdoFyJaZYgDN631QEnDh7GKQyGUFDfH8S",
  "key8": "uUfGAwkA4Cdh8Po8uU92tLMNrKytCnStcXJbpRPNV9McYxz3vvtdDNMJvVZnUD7BhvxGauzF4RPkxt2mYAki8pD",
  "key9": "63s7KdStd6ud8uqa5mXRpqTs2vh7UskcdsVTsRBCqAUKshZeJKAmSiTpFdKTr7pNk3MXu6DGJe3zvopqbAsNRXhW",
  "key10": "2Jyy3XZN4eZMT8vxWd2cMwfN8MKw27fyDMLfKwThhcgnxwyqCTQX8Xqf67GB1JC3mqaCKwziiXtqtCqLx9v9rXSc",
  "key11": "RUGr6PD2jgrp9TmN9Qgv885s57egJTPs19sjxa2VWvw4QTR9SR6VM2eRd83QmWsEzkN22Lvtg1cV9D8ewoY43L3",
  "key12": "LUf9sA16DcsHHYEsdxuch1F8cFAQmivu791T6SrdeGdikdu7TQbjKo7rPVbABdhnY94ZJE2xZJZK6nsnBRAXxEy",
  "key13": "58kCixwSRgLxQmR5G6BgkMRo2dTagX5JMK7NF5J5X2riJXxhtDA2E1akcSsAa4paVobiqAgqerrVe4YYMfL8nWF7",
  "key14": "D1EP3K6b7v7nPNbUgCSGvoHjsL1WCZ7RBeYHFhFhyZWkB2HmYKawwe8SWFzhwevAqnL9WNqWtC4QdtKZg8rrKo5",
  "key15": "aBJ6qeuvRih9z3WJcL1R5R6DgLkSpuamspWjhi6Rj8ermqexxDv94jTwhDwQJt3p1huuFSbpLWCZeQfpnGvkTqG",
  "key16": "cPxuJu6RD6JMsYHNxiWQyTCJdJ2CwhaDphUf4j9BLcfW7nitFfV4Ax7Y5qcU1pTsWhEdLvLFuxc7vbN6wSCFrfj",
  "key17": "5tkJsq1pudAEQNreFyemyc2RFAWGL749aJUGqjijCxNjHX7HhhHBQYxzwycp8KyGrYVcDjLtTxEm3zSpMroqdKXK",
  "key18": "EABioAFTMpF86xvuXnH2WuarhkqzbWmtqV1WCa16MQ82Caipp4bFRGbDiQVF4mAgDtknbiDEnr7GFNGHMjBe1CF",
  "key19": "5LZD4saoogiREzkYCf8QiULqCcPtk83z5r95uSxgyQVbQvqSMuzFhXLxDZ1zvLoRTSCT18e12Y15kDCb6ki5KisR",
  "key20": "4voEDd8otwEWVe99F7LHMCEnxYrWGT7s1StxtcGkUrnDVnxswpSGSFDLVSeWPZsEsnMczywx2cnHXd13MQEwXMtm",
  "key21": "KSKae7rRQVb35zMXMzzertvZTNaVWeBWAEVqma5jchWEd4i9hPXEG6rCYAmrSMHRzTAey8HxrRdQgt59orxZ9P8",
  "key22": "v6pV6GGAhSo8ba5BmeKy8eqEUpcVL1Mb9HH9V7n7s79pWMfbXwPSQqy2FpqexoMvD8tF5QJ7pfbVzAet3zAzcRm",
  "key23": "5i7nq9japxS9V6GK5fix94A2j9fiGHnnbUfPufe4vQ7y4TuKTzj5W3dL3NoaHV2f8fMqsggFxH3fo6uA1LjUZiBN",
  "key24": "3PZZ9ohxo51xs58TTZyekkkaeiiDZ5jzwabD2gZbKxqDynRkgktPbthkGzBPjHi3aU7krzaQvTq3xcsp6sCcKMUt",
  "key25": "2xBSzf1grbemqYnHDhozLC52byap69QVr4Gcms3WPNbb9i5ZVZsiBfhNFwa8RvzxtXRUaMUqzBjKbcpreu77qDPb",
  "key26": "44qcovBxjNJFLq5PdL17KCAGgTPbMjtzVVByp4HU5rEMoFq8JHQ2LHTqYqH3vz75Kx4khycf5Hk6MgC4UG8Ld7Dk",
  "key27": "U4sUqQ2fyY6VVQZWQcXPkVpX6WCxDZmfRrrGpgMbijAX57yx1ggMfQmG5Ywf1W2AzonqTri33x45vYN3bEECEGx",
  "key28": "aWvmfyTAkfwMYcs8brHkjDuhbj2oSoG9WvD25NEpRWRtTPr9q7z5W3CBGVoheBHsajwKDrLbJVLEzcKrHWBQRfU",
  "key29": "4bj6F78hPzxn5hFMFE8hfxv83Z9zEozJeK5htgRxteERT2e8TuNaVkTp5H6H3rMKUusF8zDn4FNQmsjKhEZSxXQT",
  "key30": "5GogVijrRmwciES6GKuunE2UjwMu6ZYvsvRXhWB9hvazRgoJVj5bUBE9kwEHTd57xCxuQCewadePFyKX6NkhvsSh",
  "key31": "3zs9QwnPJgfZR3xzoxyB2gkeAAXa66D3pHpL62imm75k4KhMhXZhBdQJd8R8sxvzKM2UiGLov1DN27Mxzt9tdD6b"
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
