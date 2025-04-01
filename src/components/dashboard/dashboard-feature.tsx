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
    "3qQmExTDQHbumkuYEQLGYbTHbf1Vwr6t7YribCGxcdonwGULhTmgBfU28ZmeBMY1ip9jf2TkyDbLAYDmsUoki324"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZ5nkh2twRe6tAnsteHe92xPana3mY8F5bBsXW7C1E3AQ6Yz5FwpWsc5jczJGniXXb8eFWmEVsEmd7DtdwuHNzk",
  "key1": "413ajirL3gw8xPmVsGRVF8vHv8jsdHPdaJaK32XE172sN5EBghB28rG4bh1pqWorYnda4sw792hjvJ6mGmNp8mNZ",
  "key2": "23LDTqhv3vFmnGB51DYK6DUBnvHD5i4DMV8C4pm78mjtcvihHmVFECYSJonAurC9L2F3J8xHbEkbha11YTw2orRW",
  "key3": "4GBLRYoCxQuJpyZ4SabrMhLPkKTFKkuS3u42D9xNRYgrWQXNNCJzkdQiK3KoXQQ5XPTNRi7GaTssBmXpgjUb1YBZ",
  "key4": "mWyCKW69NViv8YBHjc5sxQMUt5xWyB58Lui5WWp3sVGRKLcYg8WfLKB5kkYcURk2VDzJgB5Zq9vuSUvNuFLzyEK",
  "key5": "5W7r9S9XAAfnXEjNpT16hXFVNPSBzdRi9aNt8ePTZrdjUPGpxwcPQCtj3hKUVKiqKYbiGFBijAXBvCUHRMSkruFs",
  "key6": "3q4AcXYHgXvxtS7FspsdnLJMqF6M4JwZu7ey3aoWSAjD6rEpnH82F4nHXjANqND6ppLY5t2zNqUguPXLwisc1Ga6",
  "key7": "VAie3w99NwVKrQH62vbY2fTLNSzVYsdSA3641TVFq8xR9n4axnv5f4KdjjzPwgfUTfSfe9suWgAC6e8yVwDv9kZ",
  "key8": "4Eu4Uswoq1PhBj4UzWhayP7eY7u6MAbmkLoBj9hnxvtLXxSiXu1UUHuvFWzgUnAZXZDq2UPzgbk7PzwXMBuMdY8p",
  "key9": "2PC4o2VGASHjvtR3Akeg4g5oZGSbjZgwjqgaUM7sdsL3GivVP87zM1WPbL6utkMoNnbfRL9Uqc7TwtQQJy6ijoc4",
  "key10": "5BNJxUmpT2TJzQgzTqhM3wWx584Dfpk5eb8aPUUmPqKApGSBxuhmGuMfgZVJBD36H8baMD4horFRJ9oN2mGPBKiE",
  "key11": "2TV3djVxunzxaKLD65XGf8miv8mNuwhGahaWG4zEYm4ACp88YhX6UDNnfBPF7KjatjyVzTN6GBiDNH41FjhPr9dU",
  "key12": "4qdRsYtrNcC71wW86KjTAWX2G1RabpNJWuVkgMcMJ7vx7oJGaukM295ut2BmZHsPNg6Xc5PrzK2n6WBohopqmdqw",
  "key13": "4eQFTHYf4dehHDB18aX9J73Z4oHa2Sf2L1wA6cZbi8uxxQHJtcRKDvQEACTAGC5nhUuLM6fB5Pi9PfESToYqa6nz",
  "key14": "4HbLAaYRjmpBKNVU3vNHxmu5fubq9RewSkTkW42MuzDTEtuuePw5vkfHXE6EmVNiJb2RBd6d7nhKKtCKWVX6gnBt",
  "key15": "xvVTbnQ4VN7jHyhDnhG6MevEkD6bLzwduiBJ18TdJETSs2xkEfc2btc6TaqShytHYngsRtp66iFVifMqfxbeh9F",
  "key16": "4npzvS61B7mzHj5QYtYuhfDxeKLxwgh5BZpFncxKSTzpxyof8BnW2AMhmijTMAE1q8PE4VRnJFaCoq8rUZWwGy7S",
  "key17": "2Tefz8Ntgyabx1u6A8oxNmd4gyYf9Qrv2zxnAR9o9L2Fvm9WfHvX9s8P76mHwKwHcEw4oNg1kRBgTzU3NwjWnEVL",
  "key18": "4aDZGe4h9UYZFXyfh13uNdDYSVA1LtfJvXz4f63DwSuTmqZjqE2ngTKCEHS6zV9mbCuipJVKaxnVnX4BGZFsog5A",
  "key19": "4mXNrZ8F24kppLAVGemHmubVbysdjJAxHTKi5aCAYQ5M3mawNh4kGBzsWspfx5BVauutsgG5pwpVzUai3XJPFXzb",
  "key20": "26BKeScRP3458eX4vn37sciqUShT371dyXUUwxYia7r179soYoH7cgAFkZhS3dvbN3cRJodstwcbs4dUxqwXD2uS",
  "key21": "4XRXnP1Q2XWVUgzZGe8FSaZQhn4SF4wVYdhsvyFbW7Hjq7e98Yp1BizC7qHTkQGacjxhQEEZdYd3gRftwRsoT63a",
  "key22": "4KXFkkFsMHpYrfTRzUupsNATnZAzV45pYcMNXCtEpycBCm7W83RE34sYMXAc5VRA7uTS4DTgcp5JeCdhdsjrFVPf",
  "key23": "236HAgijbSFSF4X468BS3vFVuCtbp5UEuG6bzzQ32zV41XNNCrKMcwQPLtGBFXUqRAZ5qveA8y6NsM9Hm7H4bW2W",
  "key24": "2skWwENUiHuEufqKCprq2jb4m2eSAN187D1Wi9FYAzD56hcYY1Z7biG8PqNUu1P9vx5AdeJ1tVJBqTs2MyBNyZRN",
  "key25": "2thPJPHmSkatPtyoopJ2FvyrDrZj34QnXjNQNFBPvF6qquMV39nMGZ7pjXmXLnur8qrjqRHLuxsPuod3ryzarNYN",
  "key26": "Cs6gwfPuSBkLbKDoHdbY89bLgf3TSmx87LtmhenQ6yj1bspJVSqTJebLm1iuyQThjMGNVoMqHijGH629HWV7cp8",
  "key27": "5sbhN8zrjkqGrxJacFg93ScRetF82JBheoV5Ca1Xe9YnjjV1PvJwXytV22EToifdUuGKfVeV1GiZWYNmdLe4pFAp"
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
