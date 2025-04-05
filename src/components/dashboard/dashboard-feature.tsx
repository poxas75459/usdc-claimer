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
    "33tfPqieqPtQR1QQKtMs3SKVA7DMbGQtLnYK7rvt6x3FXYPxHMHwPJyNB9cRnMDF9yQaWbhYjkF4PfJH3WythQPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2GYRjtQQwbH2nydghy5Mz4r3GokMhPzQZtE8C5CVdPxbvppyFV861AejTMQ9v5zq8BB8Hts8aLZK4MZ9H2LoSw",
  "key1": "3VZm3PwRjT5DGNAAwsotmRBsneLYmvEkXbm3UpsEYdqdm6MpM7LEGr3BbuBcqJnSCDo2TAD7kw5VLqgg4bQfqsRY",
  "key2": "5U56YwN9ZA17h9MxLqo2nt8FJpJb2BBmm2w2oJC6A7Ri4vF5fGDE2eryUBMZCY98ZMaV5TK5rUMFyDir4Z1pmMbM",
  "key3": "43QW5JYSUzSe1yqZ5p9sEY859j83hLBEQRjLAMt6Evkr7VML8EJoJKmRJ4oeLscsRCHbD6UmjCHysy6wapPJtKg8",
  "key4": "4WavyNXAPzbfB6BfL9dq43aiMGeuR2b7nfdWi8npKKFrqMomVzGXVQTKbMNNxxUY2sZPXFLqsHabtR4eV1MVdKgZ",
  "key5": "4cBjHwFhehQttYffpVBy3fiLvEDUHpzgbrypK2hWQRu1QHUTMjHDjrfwGHmwD1m8xPzBWx3Y137fqwe3qo1U4QYb",
  "key6": "3Hsn4iSWguUH16F3mnCX56YbxQJX2H6xC3ZxmmpG8BsACahmEVaPMHpiFupoSCzBWxcB1Nb2HX1P48Brjq36jj1U",
  "key7": "5okKNZ5bFToXeKooX4noR9K97nzkVgGoHcrCJ8cPy3anpBYTSjNB4KopKxKr8azCXp3B2xRnjpA7op8h76MEcg2n",
  "key8": "oYfkSaSuoZ2XRXo1DL6wrRcm9yJXwXWBTWT5gGpgWru2Ai24kaT9a5DvP1PLQ41Wo3Rnu7YMmi4WAEnfX8MkLZd",
  "key9": "JJCZc1mAuzyzoCE74RGQXzyHmuCmMTi328iNJfViM7NAUMf8m65Nua2q6sNKiwX4ekW133aBXy4iUTPahzgmB4N",
  "key10": "4VfKx31kaS8RLHrYtYGZeFF19ZrQ3TW6J5mAsASveuvYDgXDwqgL5ZC7DgpBw2HQbuyccPQjF1QeBrniVFSb9P8F",
  "key11": "36dqa7bPFfa1rQqoqm3ggcw9FMMSfMnGA6WK1jd3akL2vyoFiGUrMRVg6tz6v7KsYQ5FXnHyvEPWnronkiDojeoD",
  "key12": "59mNCyDcusiizPMGrMFAuM8p3dnsyx7nNMv5ngbX2f47AshFVdyMQbkYPGkwGyshgyuNyTPgEWHNvZjPWN7FA6oc",
  "key13": "4XXoyJg29FptLCV8isCkpw2ypTG2xRQhTjn6R9kJhDt6CT4iVdwdtycmBdNYXik3UxMnXhnGKvDqqQ3nyENf7xWh",
  "key14": "dueZ7id4Pyu2cxPNP6pxbcMynHxmrgpKEAveGgVp3BqT8VKN7DCGGdRKPD5rA4aMdJ4UMbPp3Q2SVCnqZJeCbtr",
  "key15": "4YkssmRk6gbz4juBwwaEDFpkdtFYb9z5xxPqcL8ZN7uWvXvsT6KLBmC7Yi1zLkXDxRXZWQkL6h1BE6vFgQ1drePC",
  "key16": "49fYkKJjB8bFpXky5EVPjsNL4Z9K9dGq4KqpVyBwZ3sWneLcK2EkDNBtVERFJsoMp15AbvobyWFR2hbrsXh2pqpx",
  "key17": "4n1zJSw8zKPWXYZpgbuPy2xBGY53Z2hXHpgeYM6XtRN6ZFyjJA5NMVMoXVA4tDLDtCGwFSD9QaPvtxzzVD6aYp2V",
  "key18": "33SVkTCgTfUGNfwpYxpy8Q38WCaRroARvP4kfbLCwYNzDzUXWoRVUAkX58iBonk155bMdVBMYqJKK4Cg6rF1mZmD",
  "key19": "oX2EvaQwa8xg7P4ftmbCZSck8NbAf3WWXNHMe77TVG8M72TM5ed7JVGfZuqxNyXkQDSjrbKs7DspUAiyFVX2RFF",
  "key20": "2kPX1YB45Aqf28xKVGJydVgcATACR5AkwSRg7ThpBW73rm2aEAcJBnYGfNPNbW7Wym96XsRKYedve3ancmMKfs4F",
  "key21": "3XivRyCmURQL5rU1r9GxzHgUUZnDW6tz9xadLSHE93upug1cme3Dh63HjxuzjGNgE4fZrLw4A93ucLW5nPUPShYr",
  "key22": "4kgfAv6zcsayLPpNXPhWMCcB7QcXjBm4CX6y4uA6rWdfNbJhmFhnu7hPJ79A3nqHmU1vjagfuZwt4XMgtUGg36Rx",
  "key23": "2xZXv7riFegBjgxrx3Yd1jhSAUwGU5fLWXGnwzYgvqTGwGzty7amwR9CJMjpzsqFzjerePL3rrnBfmccNUz6zu7b",
  "key24": "4eYBFYZXLWoaNuR6wEFywTKx657bYy7F8hkq83KPomo9dorhgYyu89RnbdVg2yCZdE5XfuEqvTMccZUpUqLTtGoj"
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
