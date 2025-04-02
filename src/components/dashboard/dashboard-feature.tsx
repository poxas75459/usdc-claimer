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
    "3qnaBp9z1oMLWF6dLtDLi3oRfCFX9ktkbGgMQwNvCJpPqwyquagqzufcfbDXAVq2hSXHub6KzMMDAoTkAT5W7Pxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZJp7q5wKQ43jEdY2qfqMr7wikWtc1susUN4Yjxdew4TJsPZmtU1cnXNfPEdvzwedZmUbFyBCuSqVzTVYcG3wUk",
  "key1": "43jWA4m8xMxsx4ow2LibH9v9eb5duhub4EH6HKohKqvtw6yX6MnoSeJDfFo1LmNsYcfwRgZG2CEFpZgAMDKp3RKL",
  "key2": "3H9v6YB7ZzF2Nt9skRGieLjjXBhbEP6XQq8GvJf4zZQLrmNVn15GAMsi9QChQujS7Bxc5t9ui9ACofXDz6vAXmgc",
  "key3": "3DJBER5pg1D6ibxpid1MkxWoF7k1LHPSraTqBogBCQPZhVfYoodVSAMLcqXiefxethxnN4wCDjxwfeaTBFzMZXCm",
  "key4": "2e1cT2XwuMv38SD2RYcU7twWyqpgjZfTgxh4N1sfjgMPPjuAgLdWV9TDxrneLzoeJ5DJeLArVS9ZnyEWzLHnrh9D",
  "key5": "3jTuKPokktFzbVdgWj3MJrXuNgvMk8vNbFMsWPZ4BT5Yf9KVYk964bffqfv4XN2sfyEYkyazkA53MMv9osNFvMy5",
  "key6": "UqfpGFc1e2raMtidyZGXonCfdMhM1HhVV3oPD9VLQuudFU6Mq6vEWtDuz5QSmBY3XRDSoV3oPRGnPRb3Dgqxshs",
  "key7": "4bf3tLyppEzMaibLXtaGDZRSuBsMk4MLJadCC8zB65Str2VLNXC3ufR6S1C8bU6sqLe93YpyuU2XtMfRrDHKDEoC",
  "key8": "5pZwSuREyXCY2Gboav83gVfY15h3ESYa5kSQf2YPgKDcCbmBWP6xRDpJZ2KoyiZBaaKj6WVvP69CB1s4FBqAh9Fp",
  "key9": "296XeNzDYdCGsVqsSuv7U6rrWYW18wo4BQVVwoGXVUUSDfpv5PQxpDBR5ceqZLyi3d9WdZLPoByRUvUy8NoALNnU",
  "key10": "2AdAZTVJmeXES6EPrYSUfuDjZdew2R2mL6zgKKQHfjiR4ykNMoLyiZULcCfkp1pubg7QcWG2zGaWjaKPzUDzPZ9q",
  "key11": "4wvsTyrzfXbyKUGhzmT9drEE4zU2csB6vpJud9rae4oC4SjEVXiJrBkUDrpgJRLu96wcf2DMM8uquhi7WpWaXryu",
  "key12": "32dYsepefUSxmJ8JHipB4kV6C3hVS3ERTJqWmEQ7KLweyyYuaZEaQ8n8wEwnBoWLLMPPwjWKYn5kPj3bwgNvuEoY",
  "key13": "5EgGzMjBbZUH67CSWA4ZaM3sM9gnjXYMkxtRndPrtywDNf3Uo4xJef1LvEj4CDsqvSjad8cXPvQMqjxtr164SmHP",
  "key14": "5sjen18MVGJbUxKxZZq1TsG5Dqw6A4VBhHSaoTgehtW2DZt3DFT1UVaG2QWQYxxJAPLcS9sCe6SCUs9FJy7ucGw7",
  "key15": "4x4iGMVeDmwh3PzEppe5H11jPrcisVHQM33gzMhJenywtNdMW3WAhgcNeryeVY3rS2fEYkvRG8bt9zK2sHRSHsjU",
  "key16": "2mDbYTUQLfdMz41E7BqgvRRBAwF41hZTtSdoQwRMpNeHqCnm3k6xeyvjafmXvoKkz1ESX9MHdW6iKsMpwW9jrrBw",
  "key17": "3LWWCXNpNoeAMzTJbiAux8pCKzvXvYa5me5DTCgqCH6zsK9p8UrpSjEoYvCh5dPqAoPs7ZwdpJ5XafNMY4sMquaa",
  "key18": "4cTVtpEW3B81pNHeC4RBDvH55MGW6uqNh5PX8E75ZcrcZDtChKtZB3DCSMcsfrTcbVm2GoNsrTedzwmU9MLfN7X4",
  "key19": "57jxnUTdsQ1GQfuvqjXCrvX9zzU6VxVWcSzReibtaxTGWEQbZWpUBXY1xBvG9SM2xkEmQnymNSdVJtY4HLiZHpnj",
  "key20": "17rcJbnKozhxVtuYbeGcrDfdmnh2PmhxwJBmhMCi736C3uWNGd6eyzMdf22dCcxvYU8DBRz9fyD9UeVLW8t22MN",
  "key21": "5opuWcLtvrEu8o5sAEmDvUHGUWobwSJXjE1ycF5PTKzXmXoEsrabbExVuw4cMpEbMtEMnVKbgTn6DyqW4RBXKTkc",
  "key22": "3bceqFgtaUojU3wYt18MtM2dLM8PWoDZGx5GLdEfZy1oA9gKKrJxsRAoBQCftZdFrmbrc7odKj9tHJhnqGXkVoJ",
  "key23": "42XGdb7gokCkxvdLdKg6BwsVxEMtbhXdiqNZek1SXrj9DPv9srPeyCmp5bbm7kqa4TNUquhAGkBEzeGqd5V3gE2g",
  "key24": "3r4fhdeVULqdDyUBeBZzZmRsPEzLvLi1MfCQ4E4HvySbqrA7LJM9tvFUqpyDfvcKubUUmt4SBs56T9HQ9jR4nMN8",
  "key25": "4bU4kezm6GosvCSMgQjncVJKjdWQ4RJo5hudvy86huhjxeXPD6Lve6iy4hga5UXgMLUpJtxvsFq2zcvFCGSzjEfa",
  "key26": "5WBHXhjC1oLYWQfk2xWCLHFq3BFpgXLzyZYVzUdhZQLvEBVirgzqXt3Cp8PvyrWKB9BYuNdH7Tt9LzmN5H4jTKhM",
  "key27": "4ZoXNTRvWWitd6SRS2ZQv87nnPGkzdP8VqfYAiS4Wp6PqMtCqVZQddbw3b5k6aY1Bz86hHhafRkdBhcUZPxnzJrE"
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
