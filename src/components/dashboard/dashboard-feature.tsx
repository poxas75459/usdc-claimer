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
    "vCcfA5sDcwqUWeZr7qHpntfrQga5j59PREf14gubw97aatnHvtyz2sQU2D4kWBzpb7C4DUsFPUTzYDSS95PPE7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBKRRfXearyhus22QS6eHNSNwPQHoPmCrvuEszH4MLoLNVCvJoNU2YpF2o4vV9KkwM3knkMBywwWWNwveoyWQ1k",
  "key1": "49eJa5ZFjh1Ck1Jsz7hXPacJ47EGuCxsamspEtJDQ9sQiPFkdRdvLhDdYdZdra6PXxvUAQGT9UAf9Ubv25jqkw3e",
  "key2": "5oSFV1ugbegSnex83zWNJmMzrq7sghw2T1PjdWabnof1i8PMUwEQT9KX8Pv7CPtVUCUyXvhee4o41qxvkDxpeRQx",
  "key3": "d1ax62oP2Wt8ckRkBGW9Xw3VN2jRAMQ667Cam9wtgfkZx7C7uT3zYKGxKfncWqCTTAEZzECo4mhTMSrm9pq4isY",
  "key4": "5E42dsrUMpKmpJ4YdiQ6Z27LXzqeUJ7QLRCFPRkXNMKfZjDKXChhh8Kp5MoKxybNY6vULuKCttcksSxGkMFX1A61",
  "key5": "4T2qoch6mRJJ1dHCBBrvGEYDvn1SX1bHYkhJt5D8b2iuTSRDpD3VRTUowQoKyKPVv1yHG9D7wGsomowZM8BxivKK",
  "key6": "R1GQLNxR2ZP6RJj5RWKnWnUf8MLNxbSkXgMitpHUuXRZhqeL6aKNEDDtoJSW2BmMvn9uBkKF1rZCzgu7Ne9LfoY",
  "key7": "3Tq7S5WZJVLRn72nj1GYbvX2YQjA88rW5RR7d1H2aKqHhajbFcbgPDgqCr8NUUDBMVzK8Mq5SrAE78K2gkWutFoe",
  "key8": "2uLu7uFg9dR9ywjHSnyN6hDgGttDCqvz7tkGUGac74EjnnmDsng9w7Y8vaC3ktYjcZUR3P6rhUqyhVWbRo3ET4NU",
  "key9": "4cxZztWrMJhHzJqyq97Rk4m3VYAE73YnET9obcGNWn2cyYNHPSst5qtfC5chTzMsLjr5RFzpJ21PmvHHVBkVjE7D",
  "key10": "4zJ2h1JYFWanDk3oQ2SYjtjXCpWAu9THbeVQz9J55kbfDFsGR6FLGkw9Ai1sVnj8SyFNA7s6r4k9UTQkxvj2FnNr",
  "key11": "FcNGygAMWhEkeZaZ9oQ23G5tPssZGfqrhzmQapeQfgXKQfyiNGfoAhZSdBsnhEPuctxVLwGxw4YAqPM5wrBkxLk",
  "key12": "vzxPqXbDKVrMhgswnRmZMoH4DJ1EDJeMr4XfMdKAJ2nZQebsLj9kTX5xWHFVoK6qdg6SkR6MCdvijaLSDasb6yE",
  "key13": "3ZzsS9csQmvDbDB4zq9GtTAeSAMm3rgqZggGckfJas4fbENixMkacSZiXQveS1e4S6uY5kTNeviih2vpnnxPAe3u",
  "key14": "3DYeKJ8SrKi4Tz6ZDCTrkwywD3wMmPZTozystrK4szPcco6o7rYWqHYo6RoQpTyRq4uyc798Q44mXtW2BRtYvemM",
  "key15": "3VyryQuPUKkUtL2uZVtM7Wy19jsjML6HCNtuUZ2Pu2HaVM6Bt7v1KQgWP9fPXWXWarQXXJ2rQQG98tUpdrY7GEH7",
  "key16": "3B2pAnCuXkZ59KcM37CBaXriFNSKJfCZ1BKJvRWhcjBPgP36T1mumLyzuansLs9toPaNKURdJ8wVjvXAxt59KsAm",
  "key17": "QUqctAaLNE9g3sx3CMqugoCiNNyEFDgLRPuuhW2KgHWwMFgjvruQ2QJTjU9zybGjioiCrz7rS5j3jVv2AF629Af",
  "key18": "2QLdWttVQchaTeqXGkcRsSvnAvHzRh1CQtGfb3ySBwRMsY9Tqkd33wp5NKdvKgwpYMzoCwoUKrH5jzjsoWtoLGN6",
  "key19": "2Pnu6wUoKFD3LGX4syAryostP6HLPkvp4y9e5A5iQSx6HsCCdggbTeDtDDXbsrtrd1VttbufW6f66PWooQqNEtu7",
  "key20": "1Z7187s4hFT68KM2a2SaNXsTvw6v5dbiDybVhGPC5tZ1tub6hJBu9XjNXqsaxKXqH6pgHHUPjFU4GXEopVmYdrW",
  "key21": "a2HFbhRjm2NvuFvyUabtuu2SUcyrByzniJh7zBfzgGNVGs2nRkAKERmvJa943RoHnjTau3HJWo8tcgCJCFZHVwY",
  "key22": "2rhPdipTpdoGhjWw9JGTbcjPxyckhTCqgkK7cCtZFeeXKvygqMKGv8P3XSKMGCZNirv6MQfTNjrQ66ckj72TGQ3w",
  "key23": "5iMtZ8Q3ZRKHsNLZ5M36Gt15UTgv3rLYw1N5ZKktDuLY6vKGu3ArXNK58YQMvNzoW1ZcpbCzCJy4UypRkkZSQWmF",
  "key24": "42D5KDniVLSF9c8d5XdXY7P1pFUPKeZXtXf8nsNuoEmWREZduVBVRdgogicQ4dAmSj5mnncd4RR7sjpAFphXetJW"
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
