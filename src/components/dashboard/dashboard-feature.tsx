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
    "2wENBdqhPjywEdi75aYH2ZoRvpwhURzGt37E3iavsZVMJL52FLQD22HqNJCmKEGTRqnn3u12DkvvMZwPWvaQZnhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMVVCh5P4D7ebPheTm9pshwqqcYctCtj2mk9gXjJXKH7jY28CoSjWjdkEaVVAMJmwveYL581axsbM58WX82df7T",
  "key1": "34TvEpxZeR17BnoTDKwRPKb9vndezjEbTkVccQSAc9BA4XSnAWe3yLbZZ4Scj35DEHhrpWhDidpXjTpbRBMPi4pL",
  "key2": "5zewmy9rVzipBuzMSXvpEcdNgLQD3684ZvkDHdn6vzLJqU5PgGrqcykpQrAaMgwoebbNdRTLMbzVyHefVdZ45mUj",
  "key3": "4p5nkeB7JGrDak34FX6gyEPYzS3L2A1J2AazgwXSwB62L7pPUPUcJZ9q5EvQHhsT1dCqVki4g4tqMLaDakf1TwqF",
  "key4": "5ME59Mkz8jDPwEYMLcyeEQV27ANsfF6co27amb7T4Un8ou5p1daMa15jCWesRL2xdVtcf24zdZH6QEM4uzzR9uia",
  "key5": "fJ24dJ5McZcTxLsMLK3NEtBrPC8kFBTSTpwYBzuJnGtLdeWQfCzZCNtLxh54UgWDhShZritE1dHdGgUcThucabL",
  "key6": "3NTEsYExQBH2qRLHqrQUqDiNarzxo92z3wCRCogVCuukTvJFpknQvZkaLK6CV5mnfF1pCMRMuNwmt1m4pcyCUuHN",
  "key7": "62J998MgzipSW6zFfkxc4Ar7fwC4bpwXzG18yauszTNoanX2qtppWHnvTmsyfRMDtoGT9q4SisY6p8EmeeagC1bB",
  "key8": "271FCoMkKYReEgwGK5X6M1JTidrdaUKmyBEPUa1iWqfutvYv9bkbqNqyiYgVj7H1VzRbrajZ1uryQvcRAkzd4UFi",
  "key9": "vzodTQaAefE5bgdCbpbJxHgDrgrsDu2mCugXNM5SnxYaKc7b5tzacZoZ22jqdwnSJBJsQTS75jkAJPwTTtGfoqH",
  "key10": "3magTtq7Tyb2ogkeJoX2YxknztSkivUhMH8tA5V5FkEP8kZugjfC5My9NjEeDvBD5rDzQU7muWaasCbG1kRDR8Tq",
  "key11": "4iG4oub54bYSuXuVYpbSHKgg4LjnfoszR9jV4SX9zbPq1rwtJVH4yPSKQco49rCPZ2vQW7Lde5y1in4858Yfowex",
  "key12": "2ECU9CcpR2pezT2wxQofmcoAKATopeBM95gT6U7MBE6QkD3eVz65xzW3iRndJE2xBawg9fXRPsHW7digHLLVfQ7R",
  "key13": "25cW8P9D84vLGqrNedcUF5LTbMKWoyeTfuT7Z7a5x4YBvqQgGHAyE1K2aT21Tu76hzSbEyWxRVJxEBS6QzpWhGeQ",
  "key14": "2usbCdRdBdTChdWu2n5HizLWmeDPXZEdGNPpXMUwHSAZjQTTyqUy2sw6MUATmA9jHDzYr15tc2qwrqLVG28rQF9u",
  "key15": "5UKdZbBF9BnqVxoTvTk2FuX3WJTAyGbGBN6iT2nZ1fbY6fVfpFVfpmprmpYFUphkEpnSsdsPb6rvCkHYGuQVyxui",
  "key16": "2Kg4hFrhiiGZWLaTPsuAevrNFYx16hPsm7Hz4FjTumCcQzDFgv3FBBH79CeeuM8wRukoQMubQNHccvb2VgGPhg47",
  "key17": "4qPNDKzZ12WFbsrW2o6dTnKrjNx7C2KuZXSr4sDy53vyoqDoHS8p9VPofh99WhdKe2G4p7GvgnP1LqX4n1kwt48M",
  "key18": "2ReYUPqZnHgXjBBuX9ftrrg5y28M32YMwD5rXW5q9iHVerusX9BskhkxhgUAYPLA459opvTw679ZyANXghg9qkjQ",
  "key19": "uGwkCZeLAQpKyXs2unEFcW6jQdoNsWBxq58reLn28bf8ihD7mXFfDcXvMHh7RTuPBLB72McE9HibCBtcXx9D9Vg",
  "key20": "2o9h68gapW1zZ6AiYRVJiNESYDsK5YrbLgrzmVBjxv6LMmqD3aFYQhXA1NCpgWxjw8wskWJYiN9p2WtE8tcubZxy",
  "key21": "jr8HrssbvXfYAXndXHDWwNnB7HV2kFbV1VNnYNtxj3oKcFvQo2SwmZpPZiMyM54yVBgLxRSBTEEfWGf74pfNbSZ",
  "key22": "nURzj6zhkruiivrsGq97qQGYz7dG598UmRpncyBG2wExQyB42vfZEe5dE3RNyLmp9YWvJKFnfmUDvER2w9B3B6W",
  "key23": "4s58y9enkhqi8aRQCvf15t8WSrjaxGwQwFQuQokxLdW8BgKe4KXTp1UG9LE3CEakUCNxArAmAD36KxFWwwiekjLh",
  "key24": "qy6hnh17fCccBWNMaUsKQrqcLsa5uMHu3XGXNCY4tdmmi8hXn9Vcz27N3FzEgeeQLcse6KizV7usxejQA5G4ktn",
  "key25": "4cWJeXWBU1mXzfxqwweVmdwqo6zUpUcBJai7PNkPucuU8Zet1jc3mpgdjFfyVyw1d6dcwwoKeDjTJJZkfK3SZqQ8"
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
