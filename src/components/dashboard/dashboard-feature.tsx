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
    "2RBGHTcc4GED6XHPKjQe3SWnnrm6k526tZg3ZPqwVhMUYgHFyn295CJsf5naNWvgGU78Uei9FUirTXqZN6Ryqvb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoX8wnXQXh6T2RACA9cevrQKTSYpN2Cox5U6GwoGqGojFKTMwwWmRtmNYv89LC9ArCNgpZGj99Wr6NLJa13JM74",
  "key1": "5EaqUDEWgQZXxNpc4Dxx6EMXzU5CZSDtahQK2fZJ94nbXMSGQYtqU7zahsn15wqD9XFwU6YMcrxJ1vxJU55Coe5n",
  "key2": "4Un2uS3P3oZPrqcWE2VdPDy7vika8E6g8ufPCU36vBenM6FDoZ5i8Y7uH7srWtcnnRMmwY3EMmMuXj5QWhtWCJyT",
  "key3": "5aMRfJupJbaX28f6nX6UaKGqAfxWxsxBJuqyZP9ZkMJV5rDyRJFVYwPhBUfLc3gPkUebECQAa8KHq1BoQcuNKxWs",
  "key4": "4UKkjrRuxCTRUttZPEefVVnPL6bmraGYmNHWFzEqrs2DPgXndzLPujJkt1SD8DUF4eXnYJ6P57ibTgHhmvisGja2",
  "key5": "4RepjrbrWBsCacZAHsr6izMTwNKci4MgLHfy6ToMv8cgsTzTYn3r7rR5ijQDhw2g4hcVaPqBEnFa7TMMY6MVJq71",
  "key6": "44niTA3zmqcd7ob8EqckPnMWDxFJW9a1v3GNdRfDPabBTtaNeBrhxRCigkfgWoCT4WMEMtvLEtKXHBbALGcm4Kne",
  "key7": "3CdK7Eq7D9GAPeTUAaDkmDVRGvUYvXiZiiGYs7Hrx2SUZibLCKbbTWjnKxgzyp2MoQZex7SF9N9SEbwt7cHwDHdr",
  "key8": "4s3oahBE8kunoDmsN4TT9sHBzJcGByTpUPeGd2mkP584yc5eRSbRkzY1TKo4G6F6GiFVd33tFHKjjWrCbSfz12Vz",
  "key9": "Yo66RgrRezzPWWZKU4ZjwynQZ2NYdSgBAttBFtDs2Z651usGbFUMjAk9i4UnP9qYFEgQcBW5yL8N9kKDp27dfsV",
  "key10": "4cyy5YZGPXQwJsBmrMLmSnakdP41BV8UYzKUCmZsmJjiTG17KKKPGPoyFcoyfJTxvE6w62cisAzV1cPsXunFuHeN",
  "key11": "4oNuJZG6i81y8yEFaxNztr7nDjxhLwKmw5z2LFDwTG7Bc9Vc4kGAY6BbMqdh8nSLDB2kQEz6hLdugcWehrqCYJR5",
  "key12": "ZphFMLDszpg6QBtJqzTz1rAxxR56ycuerxqkMf8xcCA3NfbemPMvP8aPJH6gTz9NPYJTLmef7vcK5AmrkGJ693C",
  "key13": "65P4TLAdgVXzdKi1HLpC6tjvuxbmaE2XwGmHhbvDRtBmvM4vEbjUM198yZJGDBdCASuc9Dvk8J6WMnrcxt1qUn2S",
  "key14": "4yM7j8qnnrkuUUDzaUSGjwD3gWmt1bMcdhWuyTd13FoQe17WRwzVK2bz9ASfqPQXdYvVo2esqCxyVAjGFy3RdSXu",
  "key15": "3W3whiiTym58yXEkqvuUrzNW4NcXEpfGSUFZWyvunHRGnHY6iXwWkWDiQCvCtdxFrE5HiXFwMQcaAWpZ1Booq7do",
  "key16": "3QiAgKQac7xaRf5Ly69kHatqkECEURujmdtPLYCUDANYvGVjwXGeDKiaRKJEwhK6CBJsiAgyfkVrq6HSUyA32qtx",
  "key17": "2NQKeHWqGPRY3Vi74Tx27rTUTwbL1P44Gz9MMvK4MSenKLchcDU7b9Ck7TCwcBN1vMgqLoRazLP6fg9Q7iT7QEBf",
  "key18": "VKm3qoHkQD5H8pztmv2C63JhivddcDZ6QYvRRgMDgiMvueqWK3UJ1erx9wa5EbGEtLtF9u5p4raoCupkcy5QMcE",
  "key19": "4tDdURXin6TcFwEj2myRmQbxZixEMVy77n3gEiJtKZ8BKwhaHLnZC8r16UA54axsrR57tvHFax2Ghak8hFTasM3N",
  "key20": "5vsBdjxEakWj1KzkzcXNd61xcPP4WnBtE1wxU3RFuzp8GUwxP5So48wNRE2zXDNndiUsQ44RqVv1LqK1szLhGhxR",
  "key21": "9DttqFsb6TBQp8bn9xhgzpJ4wdHbYK1ZwtKjrwN96efcQRrA938ie442Jv8nCuPLPj4tXpxwoa2gdP5tXv3tFyY",
  "key22": "44SUK47ZLshSJucbB1x77yVKdNCixNSttbDJxjJjcGAr17RgaaJ49NLiMRhNqn6XnrJ7cqtCSdiwbFLqmRZDcoSN",
  "key23": "5Ch3xJuCr275PZeNrSJjoypm2KcyzjpqFzGkWoUnDk869AAk15TeU9YfteQ3DNSdAVzkSd2wCUtnFDGz3rDhmG5c",
  "key24": "3JBgc8MYeWeLabWaax3FeA61wWAn2XgNqEUzsV3q3srNP48HTBXd2dDP59PtzQysmbCvRYNPoE1haHTaRmFQGM3W",
  "key25": "2dtkCTptZUrBpb6X8n7HHYH4wvneSLjRWZ2rzgPiNe3j6vqJa4D1ZtZP1q7NTmknyD7V35e33ZCDJ9oSvHLjj1rH",
  "key26": "55F82RWL3wzQL41fpb36b443kdSTY4iQaqYrmS4tHfWSnpRR6aPpgR7iEPTp1tGwL4vsrbNZHKQ3T2PGWZzwZN3J",
  "key27": "3Jyd25AH1JTTXDEThpcaQHrfp76hxaa8c3EXfyRdMGA5s6LzH5v7LPj9p387eiU6cPL7223A6R62Th5S4y3SKtrK",
  "key28": "4jJ59cvWscXdLYS6Ej6gR1NQNUhjbCceGWasxGrU5L44gZWq9dig1p9jiwd42vjoYvSSUdW3DALDuXA9w6bMTKsV",
  "key29": "3YFqXjTqjZSPToJi5LhW8pth6PxMEycZM18eBFz7xqUqXidXUjY1f8pqbjcAqdvHw4n71Vndn5DaPrDQbBqH8Bjc",
  "key30": "p3aFYznCpECugQaQDhu7bDxXdhTXTntC18tpH4pwWcNZH698yRe3PUWdv79w2is2LSZBhy3uTVnRYg7VhRasHqv",
  "key31": "2orFRY1WvzqmtcvrWKkZbkKxeiYP3uQvfwanVZdntSsHHZc9T7s3UebzxQ5bFxeqFHsVgxu8r6zup53Wpe1AuHYL",
  "key32": "37nrrWYz3oMrKSh8kZFuDctmLD6DTdriEnHm6SzYAT6nLiFno1yMFA3cm54T5xs847qNyPHag6zHLTGVwJ6WHGEH",
  "key33": "61b9wiUAmHXLrWyr7uXEEGWk282BAdAEziNBbwaweXC8fnEZ6AyXPmAX54uspcehTm2JJCGnN5FFbLyb6ZG5iTkh",
  "key34": "4KJ1wEpg2TJMjQMyd5ERoz1CouJSEvUCoDVtjgrDKuTzwYkCnJyKpjuAdgstS7pW1rPYUfL6tPFh6Yxe1MGiYczm",
  "key35": "27qfo8AvMcxL7siwr1A1oUTbLGcL5qqLRKvh9BTVmVRzi5tjeaiP2Sem3N5hhTHnGEFQJ2bXB3zjy6Y9dZZ1CxW3",
  "key36": "43aFqTJsH4pLnN4TmmhfJMWf9UdRiyXfp5zDQXc299zEXrmzknDVfuzdn5DtfgDerUjvphBSXvHdpqv8L4nPTDEW",
  "key37": "4TsvGokRsRzPaytGXggo7w89XMkmc2haJyFHdQdX1pL3QZXzWqK1z6XJ6aurNNHZGJgZ7ZMMfVmek11KKhvNesWG"
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
