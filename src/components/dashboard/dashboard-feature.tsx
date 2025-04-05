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
    "PmsUE8snMvpnozREKHb6wX3V7ov7pM4xsVnJG4GxySp8cTv7RJzahktrrkKj8GrhVGDJs69mhpNiAFvGUh1j465"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aT2L82kYBZ7TSRjEzSHtZqKEPu9NfsAB3vXPz4LnyKxFCbnPfyyUVbgm5HijcKxojKszyibZuTFauvpVGhGY7vv",
  "key1": "5kVDZ9YAdrfcWzKaWpMz8d2CF7vS4HzscywVdfAsGMzSh6pgWA7VfmaUqkdMfvLv8dnT6BtLjJDb8V1Jy7kVLKFC",
  "key2": "2p1BDEbgsEQYW9aRP4P4PHRBRaYVkPPL3rARAwBfgJXJVaBdggaSw9kwkbtYxKW3KpJmCvDT3T5ocx8xGB8xA4qC",
  "key3": "63a4q8S58J4RPKDgdwyWtu1To4vkQj7qyByYKF3ZHa4FpHzg22HdnAVEcFimYPuYAQVRmGJLuYMQhpsx8NPnfp7q",
  "key4": "5jH8y38vSBWPiXHT39KoxBhAy7K8ZT7Z9zthfMpXVDgpSJ1gPkVHf5GWAwh17R2bRkdFDiprrNpeL5tg2sNkXs6r",
  "key5": "4S66yLc8qvQUgEqGHXLPSCTJygDhSj4R1ofFmPSqzP4FZcEgfoNScqE2yBBT7tABHRT3YoVDfBJ8vTsVHH53Ju1W",
  "key6": "4EHNmKZvi7XA2nmqUQ2QRW4shj16oCwjALQF4rJJRXaQ7rzdjaFo6ZQWUB1cM8FyXToeRAAY9pAUaUn5bx9F97Ua",
  "key7": "4h9Jg3rxGG52MjhsgWRJUgPDTCRenEtwsf19tzQQsVu7nirxuaXxgn42GFbneMEvCNmHaKqGaEjxSj1t6VsHZfBD",
  "key8": "3mN6KX4ZkdtJUCFEobAMof7KgHHRCM6Fy4ufBcxaShLgsrchSJyd6nMfnoi7kBMVHSqQbPdicnR2qBwv6YtzK3wA",
  "key9": "ASXG7ytJksP4fMvTWJJgairQ5TuGvJQfaK8s6YHywQLq8mxUg4M5xQ69aGFTVbrzydEcFm6mKhkL2kp5ux48pXN",
  "key10": "5fdETerCt6wXbtgJfS1VUN7gRCQsq8PdzffEFHDFtEampFMpUukUzYyXfeUhNRN42rg2uDuu4P4AVZxHSQak5FKu",
  "key11": "feJwLH9M2hXfXgK25r7YkwRaDJG63cUcyWzPX9fstyRGwDWisWEysBAE1kpcSJKw5GRPG9kBFBMEHBfurSmoshL",
  "key12": "3bTasZ3UzWZ4dL128sraEg8a9jAge1jZQapAtiVaxvrReay9b9kcuLG4SzeFEBa9XxiqeFA2Kb4cfkWqeePovV6T",
  "key13": "4kMo1jbJLMsfY8hPXnin9nik6xHK7m43bfGmPURZQhxh5FtpDnYQU8nRwuJYSQjSNct2Af8EcuWtmq4Y1a7XxdQc",
  "key14": "22VPDsEisEakj16aMvSg7scTHSKH4swCksJD9iz3X5nch8ADG46zwAZjLwFEknsRpvq79XWmyqjQFqotvJwft7md",
  "key15": "mVeULofaWQnUJXq76HGYzTfhYbmm8NpVL6KEbmMJWbj7mTH6krJbrxPPtBofRex1g18xnZKzasBSyFdVAgyeFFp",
  "key16": "4hjd7MxWZdJ8PE4DoLgy35jbUApsYj9ZZnKNjWmWFHs9Dos3kBwh2XuKWLp1kw4wmtNbkQps5wJEzmYoumFH2h2b",
  "key17": "2fV19WgbrYew3TQrnqaspjCVeMZvMf8XdKNygv2bqMBurcKAaznNGDFfk8PNuQ98Y9ZhoWJBjgV6TdFuGdKvGSpT",
  "key18": "4yi9Fg3FzEhCDwbYZ7pxcJxXmuWBHtpRicLdYDakeCjHXwCgW1Eb13g4QEFmxFr6eWPSmd9BKfuaSQwQhM7oyx7d",
  "key19": "3gu1QGi4FLZbA4BQpT1A4uFQeHhwACXE7kxwVr9ToHocpYK8wE4ZELs7U6oFc7zdm1fsLQ97fwCZN4s5EFGTRpcX",
  "key20": "F82Q7bxs7r6gbSYHsbVa4jDvPUuudFaq9UzK494VPeGpTAcbv3ccnFAJj8qi7T1TxXijJyyXYUkrJy3nmo9cvs1",
  "key21": "4GCs9JZrz7rX6uJUEgrChgbCJRWi2Dq1eP67EvGLCqQs8ZW6DyRH6PsBZM85r4p3pooJtdoPsdJ2NabG4TjKSBpp",
  "key22": "5a4gtLBvNqHd2evuGXXkMeXBZSWxgsUpo6oax2CgAbMMosBEPBKNErap5MCW8P9ticUNTWrYNxapUQZFZ9Z6SgVH",
  "key23": "3RL7YcA4aESYJiyvZ6VHpFQeEJfHspLQRKQxqFdF4szRiXxebn7jj2YznUDrcsEdFrUqYcdvA76iuS41y1NCSYA9",
  "key24": "ReVYytu8XyAMJhdxEh4GEc2ho9njKtK3a9PNmf64AtzhLAGqgQcmSAYT1xqFjGmyhrYSZLRTueiCA2MNjDaRhuw",
  "key25": "3p7ptBRfP5mKWzZj8MKLqknAWgneNVu7Sxz8L67NtMZZYiaxSVC8LQqSyioVkN81Er24aMGsDWegfF1kdaWS4roW"
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
