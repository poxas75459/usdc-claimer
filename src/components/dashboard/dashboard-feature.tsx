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
    "4R5ZNKwyaXXMx8dwmVeJTg5s3hjxTEQ6b9BL93HB9PfbDnLifwHNeuvDxYXYeZr913Mpc3BLQHdNkNhembcDWGFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrciQHHKtHiCqZ8ma5zQn8rMNLJ9Lv9snuRhVmf4WpodrPRoiw173D1uT1MC27xxkQYeV93nFPDKpMyWesHGo8B",
  "key1": "3fh4cPTuTK5WC7mHhAdtMdLFiq2FULjyR22QSE6eUVkTFYdKm3uMDzPFY9KpEWhu3smBFsDCw9AXpevKdv7VaafB",
  "key2": "2UWSdyBwMYwN29FtwfhBp1jrYZNVLhY5jR2CGWfd4HVfD2bjLUFgPhqmSrPZ5GMDcKzbvUk3oBNNoZsr7zDPKQJT",
  "key3": "4N5T1qFmoUV3i9n1ewdwz6GP9XcXdmhEFZuTsEL8eohhUDPLbzr4nkF5z8GRaHEWn6Xws2X9syrJ5DfKAu8ztQ7q",
  "key4": "47nrWEakTCZKMcL9Q6GGv5Ur1qYqVY9WJz7KzbUg2M6JJZFwTKH1UA2yiFFWnJmsSjcUzZuEDot5sRoGZiaybo21",
  "key5": "5ypdcBAPL9xvVWjTavxagdky8GJh9Y2XkjGgauWP7Hk8GBu7JhZZLFjkHJfAKbu5JR5k71ezttEXdP6vvbmeSWX9",
  "key6": "5ZKXcWpvwNHZMzHS7Tt6uoDaVfdTBka25pZcqQsQaxU3HDoz7aKzFSBbRuqk5NWTn3B3SkRcSa7grwfdD8Cxo5rM",
  "key7": "BFPUJiAmvQABoKuE2fLU5tbCBv2jQXgAKPmXS7aMFEELdcYJrX8N8CW2QgsD5Gsvw2JWP6YTAaFZLdCtRxndUvZ",
  "key8": "4cka2wghuaz8iS8cTsYSaj7xzK7yk9uwCZvkrurskLbtNxLtzQcegNHoWL3Xz5y8Xtc6vaHBtrxMfNV8JNFELxYs",
  "key9": "3GULdNXxwJBjmCNumUZNLnDpWkV3utvsKP9YmHMEzz9NNPxwCwuy4pDF8MK77hR7LVXa3nJCQPUC5ACSv9Y9H7ja",
  "key10": "4S7YXug6nY7rJVpdr1D6vCgPnTVjN6a4tGio8cWtdJkksRGxyVEuhp7rsxYShHTLdQ3SnN8wsNA31yJmExVfTuZ2",
  "key11": "5sQ5jeBHNVasnE1YwuynaEJUHj8ujBKu43f8CTfTDf4HBZBSDpo7Gk6s44qB11Q8ANFarW3Uk8wou48F43Mv75cF",
  "key12": "5BNRZrBHbsZPuDCGG99ysCAQx5qyAstLzMyZqpsfU3RpSk5btmvaSwkSzM6YgYLbQona6eXpW8mVNok3gvmui6Ys",
  "key13": "45nZuCFrX11PtRTTAsGvJQb8FoXUHSmWwdTGiTtvPTkbvht7zFsrwheXWEsbAZegm4syuoWN1rWQ2Mbj3X2Kqj8s",
  "key14": "2pLKmEDTiRJzJZuh3Nx1NW5nSNazZsxPmSa6b9xMCi9TB66PigTLdWGv5dw6fW7Mqqf2QzCSE5GDq7GGUXad3GBn",
  "key15": "4mYnnrdR98JyV6Sk23jiGB8tdNEvLCdKTnf922e9HyoCEwKLrwgKnhWzMbij52GNnyZ5FV5ZCyESH4Q5RNGWB5SP",
  "key16": "5efjN8kKmCCqjM5TwUZSvUwwrMnJgLqwFRYmZbsAJYeWpUyRtHcqUXfL1aMAaTLqHyGYChduFj6DQNo2Ywf2w9Ns",
  "key17": "24mKDT94cjB8ZVtfSqjFTBz983rV8X6RutxU44D1bkaVu1vXaALt79N7MYZqynMf5GcBrB4VsPHrA8mjhG5YCrEA",
  "key18": "TJknWnRbxMdwCsbFiMsWWUTAdtx489BfW3LpEbmS3hpFYgqcnMABmnnpELgkKRfbPoLb5kErgPM3XmiE8i3GC7o",
  "key19": "34jz2CTm5zQNMjU3mgfnMJCZH4AZdU3WhpKXgewPwKfMrxVqnPpdfiSaA5f9Y3sSwuKX6xUQLC8zLgkhS2ug986d",
  "key20": "2b6wZVzX9NqXf5pQC6j2fYZeXQWLSfZeHSbvdqP2wrLxKRQkhjycoet3W7P4LXtNwfk1sCvjrTMEVEAoxFRykcs",
  "key21": "36nnMbRCzY49owNqm3pZojNoxW4REncgwEHfW1CNvCJxdq4anAYKQHE7mhWMv5K1MbSXCMPFp5TrRFepgy6wFXPY",
  "key22": "3tdJKrXWGywjG5pVURzmhRRWzkzPXwbxKgV7CkQBZHiRUEut6sXjatA2ZCxYuiTx1usSAMnNwgXnWJdY5mn7WFUB",
  "key23": "5cU4B4SgmquYpj15sih2tjRbKT23nFQ7JAgo19SHnitPr1zeDam1TbqTZUB3tjM3suGm1Y2Ew7onp7Lzu16i2BnG",
  "key24": "58XE8prfitv8wZaBbw2N7b8HW8PNvoDLisGNqfJDq3bHXvYA4JTH6FH7gSL8Tj2udozL1v1GDEK9V9y3nd1Vfnt9",
  "key25": "2meMmfecs8jWJcG39vmUAQgWftctXTr5n4w8MjPNAbwodfTjgvk1ExW4sM88Nz4LqgqCYkYMFFAyKc1bM36y3m8s",
  "key26": "uDMciQ1SeqWTG3vXDHtMLtrUNFYg8Bbbny3akp2yDBFZcqBoRdg5wcvsgP7xR3SupeVzmVGLv7b4fF58CijYCtb",
  "key27": "m5VKr8z4G2B2yZ1Ak1scMjJfsDBfrFnvRMnC85UBJBz9jLQfNYqXxH9LA1fEFtCPeLPFYsCE4WxPSo3XeW8DKwa",
  "key28": "4poMcjxfDvrk2jafiSyb5wqiU9QiWXs63LfMqfMzcpaspMbgKcbY7gL2Qv7DS8UV5k7mBaRHkMt2PUcJgqNPbAMb",
  "key29": "3wQyb1TTgEpvPJYhjck9PgZkbM2SwNAJ8n4rKqkYgtp1ou9AUzv9VriG4rPhhHEPuJEcBb4Apwp39NXi8DcqM1Sk",
  "key30": "3YvXvmYpyuu5StD7LPngJVMjemfw8DVUB7yNUMBtkXLjaiPXFKzbFfXXeBtSpnPYhHSMgyREYYdTsrui6ACFCjQN",
  "key31": "4b4jiX4u8rNUVJxmMtTWo4J2aguLGzdkpKUJwVEq1GjTRXYBRrUQKyhCfDYXpY9aBYbbkV7uSaLXhpBCsHa3RaNS",
  "key32": "65EKztqdmaaPHJPdjMkJGUzALtEBeggE7LwtK3cPL87CBL58nPqTRsBVdEenubasbYDgiQm1vVfA4eR5knpWr1eN",
  "key33": "42sGPU12eV9oUhDmSc8YtiUJfvsttnvT9pN71KUMmUoWsLjX6p5KNT5XdSHLGhan9mkBx5WhTw23tSALjfA9ZKH9",
  "key34": "3ZpN4Pc31CjSctZ6R8LVw1ZqeCWV5FRToukckzu1MpM23MAtMHX3eB5gTRDfgEfxFVgwRkKLnGrdo8irJfRkr8ud",
  "key35": "CuFHjgxzvJTa2gn3YwvmLgnK6M1gDQg8hGiaSJ8Th7AXWcphRF8FbMEXZJv7f1dbg2ZieVJNkpHhkYyV8JU9AJh",
  "key36": "2gNfGFKdoSzsPK8VaLuKbVjCpopzkkH5P3V4kdAydB8hZin8UiWHaN5D9vSQbDonfWRZgjQLDVrn3kyGmSbxj6hF",
  "key37": "2k7VGES61FueCRS2Tv4a1fMU6RGeCZoTdyrCj3miA1nRABQ1LqLQq93KUbx5jozHt9rJqALgTHwoG8Z5c1RfM7ua",
  "key38": "e4JGJ4drSJkzADwpka4u4G32i3nBzp1mmzDgZsLLWy82CQMYYPgnPMu6EZ4hAPj7bPovijApogprWUUB5puN2xr",
  "key39": "3X6uTYeVrXgxpQRcBCkdksNw4mYEvecg9nZAYmEM7j75W9r8BNmbzLGT23HHnRjEr7dKhaLPpyEEKcbXDHhpgERn",
  "key40": "Kqg9jBPBRBKfEEXkJqBdA9ibPDsJ1EbBvU61gpQxHV8BfMv5Z4SKbV2aYNEyH8nkD2egbxBJWSC5hrkg7QyDHcT",
  "key41": "5MAH8TBi6KwE5bLnRJW6qXKuTzCuG5DEsKgvzcLdRF2757yFqYhQyzUdTAZMrMAfgo8dTkSmrKAq66CqpBn2284Y",
  "key42": "4jGXmh18EG3WJGkUu8DSdH1w6rrkFU9TjRwDeWeAMTY8ACqBik7XVp5j4w6euCgcP1MVzUNKt41eH3BEs31fqeaT"
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
