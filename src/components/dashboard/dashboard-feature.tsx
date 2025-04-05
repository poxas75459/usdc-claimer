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
    "sQWWY2Q8MdLfCpNVJy5v238TVYDmunBBiFXNhZQZJbyPWCCf9qeXhwe9gZQ8SXMP8znxcNuAZ4sb4FMefmwTvw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gfo7BrucVC1sUHhUrB8ZR78CgbPkMFcKN2SvPkL8ZGsgPDzz86PVUCxaTjRuJ6rjgPFkp5FG7aLzX3ygaEF7eWA",
  "key1": "5ryvStktPj917eptzErWPGkYR4sis6rB8y527QLuQaC1b2kPwZJd3HwoTcU1npwLiBVwbN14uTvCLTdoBrrzBko5",
  "key2": "2Xa3QXxHvxcmxbh13VZSgA9SdVimAqriC35WufDkJyP1hJnAkmhEHYgh6e9JFFnipAxjZqn17vUcZQDyETy1G87z",
  "key3": "3fP29oAKBHouRQ4rhzDgMmHDFqYoKmUrZTAHfquvSMD3RRiNFqPBAHTjcdRbDuBFbWUDib7LtnyGY74xtgo7Q4jt",
  "key4": "T9QUbt31kucrCZg3DhHq4pmZ72zCesUbpbS6TrFiS8GEqMy3SHZFJKDuBESxKVgjjqwrJyrcNGAyqQmyaakZiVs",
  "key5": "3BPnGk4mw1nvfULrkZpW3jkzFTtrxSdmuMo6dUBbXCjnjobGFE1Gctrd24csWKSfbbSa8f3k1JkyShTjW2sHxK2r",
  "key6": "4zn6mZxFw72AnYZSQ1WP6WCMePg61yTg67WMTdCMSvmEfYybS4GnnfEazShrinsiS7DUEhpuGPdt2xJrebikpDXM",
  "key7": "2o8QXGkZtKLta1WynS3HBHudNwGNCUvQDNazA98vnAfx9TnbnQ9DfoJG99CnZRtJWWDX7Mtb5AsvQWAnStqPEWFA",
  "key8": "37u4YHJtSMNypptXBXyaSbZtdHZ1bnc5r2CZrxVR7iqigoyZpZLZB8xGCfDnaw5N122uRPNZyxHsfva23gNzNQ5Y",
  "key9": "5gDVuhNczQgU3VH4LRijgFR5PDCesuwbC9bWbT8PSZGiYd7X1agzWy7cPtHVwubpzHo3votusij87aHMTPWvQ2uZ",
  "key10": "5LVnWHuVtQDPa9mjkmJfbCSBtTTEX9Uo84VeVjyV7YBuhWnBXX1NwaXrqTXUav9FFtdSuenP4YYPkjmwAqkRZ84v",
  "key11": "46q73AvEsaSrb9UdqS8bCSet4kJ1KqptEvLdRUxhaH3hwai1NnW2rXVQFkth4jMWKktJ7Nr63MUwQ7zfTjx4e8eU",
  "key12": "2pfdWthq9HyJHRWzkYAASdjojNgPHhmtHZGTNPCTgUyc9MRQy2SNS3qCNd2fKNx9wReJwt2iLgeveQVjc9WkUN1p",
  "key13": "3EHtaqiPuqee5JnMbTva3f77CTNm2Bt8Un5CTjQY4Le4vjhJR6eMrQ7fyVLWMtkx6fwejTTSpQjaoWZP8nje1C7P",
  "key14": "2KnzfufiHeo9q8wZjMAV3wU21jd3nd9mQPV8ThiLvr8HodvN7aXz4wNF6sHbPiEV36cQe5iVBLxvLsALhUryKy7g",
  "key15": "2D64Da253Vq6o6AQSUFEoAPbTv8V7WTTVz5iKDrYt71cAFtMA2aVu5PjzDP7tXWHHDEaRikfueVRbabH3VRawAQR",
  "key16": "2LVLBAh5iDBLzdh8dGi3dhtQWgqiKx5fDE43T34GjA1caQ5r5QnQ2cb4JRtCF3AfQo7H6QeBmnwVb5csZPXyz8YR",
  "key17": "2BwdeCvnNhPg3G2AKV7Lz4ZL37wX79YvnRqQW7yCzSCWU2GkbUHGSUd3kkqboZxznE2anrFFqSFM2zuqNTyUp6ZD",
  "key18": "3aJqSHBAdXAoR3uk88KVPMi2xcFwvmu9oEBkdviRt7AdACjmezLwVwJtymdDUJWCEzg6Wqe6bZcJnSoc5Zd9aj2M",
  "key19": "nfZFLUaik8GLjrsga4459HVUwTF23a43WiwbWLQRyt169zAzcZEopeym16CLfBKAmFGvf4my9qG8j8ZpRS5MRQ6",
  "key20": "NZi3EeVRosHwp3bVUtjKQeBF3t9akMtPEhb4mVRUBjCAf6QZYefurbczyNDNe2Y26p3bvvov83WeDMTzNJb4Dkh",
  "key21": "63uCMaB1c42cu44SmaE9GbBfyuRmuewLR29PWemjFBqU8CbfqDpzvy3UkjoWpHXKyBLMSWxNzqZsx7chRFTfsGRE",
  "key22": "4FoZ5VnrXptUYU6QYsj8ssYimnjXTREuHMuzRBGs38SfJmE7Fegtbc8tUkYRRZcppkWj3t3g1WzQdTP4VKKUHE5b",
  "key23": "5K9WNWNgcPjRTH4vFeSwrJrA41GNWxwX17WTvkqUZzDXpZTpbpS1zKJgDiX6To8fvErHtqq8Lv5UWVYuAFg54Rcs",
  "key24": "5d6hdeUqXs9HF9gQxtVrwJ1opSXxYMRJGtqEuYG1YjMTN8wrecaaNCTEXfMnk8DEzvCrbgH8mRHo3xr9MRiFPXaw",
  "key25": "3u2gY8TbYr1bPVr9XUNi2u1vc7kH5uhYHiRqBBtN11ddiGSppZC2CV5aXndW78zybcgWxVezkKU5PQodrW6HioQn",
  "key26": "dKxw6gjoe5drLgGuS5R7NsoXXmF3bZAoEx5MoGxXqvzEZ3P4AGbp3cXDyW2RH4NmwR6Yn4K4NL1Ui4gkGk2NFtD",
  "key27": "5wtBz6vuw6SYrXAPhY6trr3YmYeeXHMM9hnVChL1hbYD6UV31LWBWPqJUqNW4raugj1kanrq93YWhotbmQvrfsxh",
  "key28": "1D2NjKSKCWK1i1ZoFoq1othfwKpszgGcUeyJPQtue4bK5McPkcNwS9reM874tvqgT1RHYx4wuu8ETyiaB4cHb7s",
  "key29": "2XLUbDxTzTBa519hMVR8HcHHkucifsCdJfwtRxRjaiT9z46mezZ1SPTtQ1eNTPY5BWY3jMZErW4LTS6u2QgVJrFz",
  "key30": "4ZnhcjM1N6STgZKW88PpeW8kixpGNdeKZ3RtYSqN9U4KEpXZPX7dRKV9WrqoxRef4jYsM9q35pYVZSLHj6jZGS6U"
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
