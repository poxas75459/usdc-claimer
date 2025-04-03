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
    "cs44H3VCFwpGsqmmape89ipgFaZfeyJg3Hz4BhH2HHXLq9DXHaMybyF7xXCx5Qq2wwKJNxitPYYVx3Y7pvANf66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anJFDDuUWjLckSVCDYn3SbmEqDnRp7DnB2mTnrPh38yXijmLWSTJqZmu8C7ZbprXypdX1CuGfQZ8Vfyk9hopgvG",
  "key1": "4fNXDv8GHuMp3wwEjSCf2gpkkmVvz26wjbbT6geVgDtCZXcYYU4JgVPeTsddWN8WWSigoRf9asqmZoor22M9TGT6",
  "key2": "3mBVUQKV6VeA8b2y4Eqysnhe4vssWrbgPASz6MejxtAfhEt3UHPa1mGnCtwn4rCcXE7W8Tr5TFN3rBxZUVRRtWhC",
  "key3": "52Ps4McMRyDD6Gxrso9w3wiUGzwvhMbv6X3oRiBzzEKXoC4BxHscXMiy3GkDWpULqp6Xf4GX4A7c7qbHfzt3Atso",
  "key4": "5ZkKYWNR8CNiGh2umNku259vxrbHyhsaZE5CnX6nRSGFA6nGnw72nNEQwgSnktgEKRe3gWbyrcBCD9PAw2u3aAnW",
  "key5": "4t9ZYnyrc3txjvX3w39bca1taciwAG8pMxLSThsE7S3b6Et38veZ7graXLBJhwxcnkkykW74B4PagQsdqM5vBsve",
  "key6": "5rWHr3BdBJKcABUf5JPyTTbZ289rKNg5pH2bQFWNuN9ubcGGqn5QgLhnPgzNuochErLeeCGSXqQgZX5e34nCgVK7",
  "key7": "5je37Nr2qdBA9ko2VAPmwKvrB3gft8S94vc9Yrt7LkG6oEb9YRCafxe139RVquvUcSn8ABuvXeRRnr48M44TvYbu",
  "key8": "2cyqagTUa67sBQVwXK5LCGahRQQqktKQn6tHrqH4EVmkCfYvAxBZtTQnhc9dAewKCxsLNkUjPB3BShtnZisGjWqW",
  "key9": "3hkKan4nWuMAsNeh32bQrfbFWroDruNWqe1iuQhvqvWEt6k7YHrW8AajwawRGKBz58pLbsdPBw36iCgkE7d4Z5Ci",
  "key10": "5vdzj8UcpM9PtXEXtn7GYMukmb51EkJ2JRWHE7BkAscwWJitk8qnE5oGpzVLwEhTX4R8v7L6H544RPH52np1o5Zv",
  "key11": "31cZDQdKwXkS6Trjrk68fVvFcMnwXoZxPPzGkbPbrkfw71sUwJKRUoGdKnS455wkcRekWbSGKsBGXQ6cw1MPQqux",
  "key12": "2d7BnC8oLhApBW2aHhXkGzvoT5XeVVXmVqb2KK1GCFUqYxPG4Ah9B9JjgUmcdwGFD2CV2NyJCaE1TtA9Wfz31jcD",
  "key13": "3PkgkSjbhCC9ZUkWYB6oXXTTFTmL2NcvQCzQmhbUYkVBSh9qkTbT9yLuj3KFwpiqpKicMRQw8rp5nhoDZSXoYjAw",
  "key14": "38US91EQFknc29TSThDsULaj5GmokUUsndLwd24jHm8vV5fqRHVFwYSD6mfy4CYmhS9vCodrXQyQkCU5X33fQfvH",
  "key15": "5jdvASu46TUXxtYHFnBGo764jreU1kz8Um2qcXfUUxT6qEBNAoLR8PHb8iCj6qGiHFD5r45xRcaEdsT8uvbnte7F",
  "key16": "prFWMzGyG9yoX6QPurZNEM8FxXxhUekHJZ5cuVJNcv8uhGh5UY3CfdYba5RuA7ARVEDiq9nHECqk6WBBwbQuCDQ",
  "key17": "34AgCnrEEkG458fL1jHT3n53jo7WmMhVZj81AD835oZFZMR8hL4PaoGj1v9LYng5kv8M4W5qtJLfMgykDNETiDuz",
  "key18": "311MkwrZUGGf7PXXUBYPh6EQ8887FP94XgFxLbPAdGXiBaLwPRLSdQc4wbT9SjQ34nrWNub3RNWp2QE4PC8mS1WA",
  "key19": "urdSjimw4JEsGnyAgWGppqsB54suqqYyPZe8bQAYMCNcek7iYssdW6eHUL7WsVz7WWb8cSpsbnxK7xgAT9FcwMV",
  "key20": "3V8kPLy5NPbLCppgFsTN7dQQtzWQtWZziXJqSM7HezPffvbfGiD2X1w2J28atQcaq8YQc79SPvm4cAMaCwNsoHeH",
  "key21": "66zY8o4tUT2duWLJuVh7n9LgFFmUsVoV8iaVSBwK673SoHv6sEVecmykpUJPScM82MZKbtaz7vTVtGkjWN8UDpz9",
  "key22": "xRjWG5hYoD9KDG1moPgDRZX4gk3CZXyb9VzrQsAzXctPgxq2bXFea1bRiM4PGtCQTMiyZenYcqS8DbYufLY1atD",
  "key23": "2GvPRZifWH2qXR7z4iRavmcP332SCASrSFagcudrBSe6Jjc7R4XFTCyGgtNmvfkRhCbQXfqZ466kKQKvfx8fM4mi",
  "key24": "5koEGTJjDQmSbVgmeKeCY5FvrRdch1VBcJkXPsdhs7ce9g1KXyatzaGNsgXa3M9W8JiPJbgpDFJfyzPComqcG2nu"
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
