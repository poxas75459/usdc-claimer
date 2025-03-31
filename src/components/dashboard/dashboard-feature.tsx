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
    "4PL1opnBcUrriXTE1P7XxAhtUmPHuUVacnzHMfcAzBoHCmM9AhcBLP3tx9dKTX6Myb35VzGwvGP1tDNnSWKJz9tB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdEx1JRnBqQV38G22axqXXyoU8ZdFaqsh8AFxq6WR4DLWGEieD4d33LuLvnXp1usKAt9JAa4o6uywh43GFsbU1y",
  "key1": "4LXKEcpWLyQsq43bAK9WCt19M1tCs74jTFdKEzX8MECzrBRuiFmsaAKkahAX4bvYw7MjMi28QNnZjREziEa9Unxi",
  "key2": "4fUHj1MZ9JRjkXLSxzEZrPwfoHxTqzAK7WfBo5G8vbEFY6TywMqew3MVanXbXkSUtGHQ8Tf41r6W7RsmogATeffN",
  "key3": "2cF7kLpYvyqKs5eipEYyCPCp2NLakAkjnNDaBuhzemcsN8oLJUWfhoS99bDXhvSWvS9whzYaWEeueM5a3jKmH4dT",
  "key4": "4i8dU3qLsUUJGkBpsCCui3bHNHQe4Qic6R2nGZKNZYX1zdaeMtEfT28F6erfyFuLD9kBaLxH8pF2hUvNhcbxY2GY",
  "key5": "6328x3ZQHerkXpNdE8HySYcj3ryq8F2hguksPgKgQofMJbtHdQmThnGpGfEhTYqKjs4EhMAtYBNB2uNN1TgftFEh",
  "key6": "2xSw5roj8YYgz8Mq4KNQX4t9QG9RYVTGqXLDouocteKgdc5SbfJMydrK5jer31mADLuUj8Av8dTXpcUXSGHsZBE6",
  "key7": "MLxjKza1pBvDPcYmW5RkfLJrDYQnNFY2KFwWvrAZHVGC2qVqBo47zhpyAh7PZieZsyDa7F946huWA1tiHFMyDL9",
  "key8": "5mgPy5HS4dhdQguNtVWFSGgTYfz271zxRqvb7XYXgpd78DcFHVGR1qsWMV2PRhhNFqP84VyWJwPPuWM3teoRYGW3",
  "key9": "38RRs3XL46XK7djmkFRsUVSR4E9xFU8jgvaJ9u5ny4huJJmLa4pbnchQ6XTrr51oXtVMn7fjgE8kdB7XcaFNM4td",
  "key10": "5GPBSLVBvy5J9hmVCgxdEgnMmzV1yPUNDrHP9uVAQYdZWLy1AJdmfLjoNPy3RdWVqiVSYKpn9XzK5y83wrDXioHw",
  "key11": "VvsKg3Jtrv7staVxAiJ7h7giGyNFVp5KVUjhcv1fwPSEtUCQnk3Hr554WkEk8dmEqN4QFJYrz67c6q8Fz8iotXh",
  "key12": "4HC3Hieb3B1xgQ7tTDaiXeTYNN5qnJsKPG93vTQEPwUGH9318uYroWsy5Uaujff6r3uEKiG2M4fWttdtHkGYvAx9",
  "key13": "3LTEDQZTQgtcAb8YAFAtL8U2C66Go2rGkviEbecuxYj28P7E8zaVjhUsDtRVxpZujdWQJSKSxRjGa43NBiWoLkVc",
  "key14": "ECa4RBBW6kLFoc2BZCLofapsKLcisdQoYPYseasiqi5fNp8uudp79zynMKCgJkgqRxzc5MpJ6M9bUeM7NQ78Q2f",
  "key15": "gv93UWseir97FryMKfwhibGTagUt8R8HUapukZNUFbfWwyPgPumQEEmXjgsKWGbL472hXH9N84g9jSLLXah1Wfb",
  "key16": "441aGcBfk4cwVfPMKHFkny25PaWgAUbx8dWoDkyFx6SSqHic7DVuvugS3eLd876DYYA3KFJD7cFLRa4ten6jDeQ1",
  "key17": "yCiUMXtxyCKvuFLBUuN8DqxhXV59nEUJyhQV1oR7B3vASnzALmpbn9QcTCT9dUQK8iKxfLMGTZAyvWQdpk26qEE",
  "key18": "AHUGGUzQPYRDY5UfNmGNcAjcgZEdLRKCi8CacvCPjiAa8EjEBZxoXpCPZJ6wwJrRhNZp8ahP4o4rcXxrzrc2u76",
  "key19": "51XS8TuDCGUGXdu3TDf96bka5izLGxpJiKJdWvmouD3XcXRQ15umrX2836svTfN4GVkaNa8yVyobjyQGPioLwBfx",
  "key20": "359kDB5XQ1k1M5gkudndC25q24gTCpYWGYiqniUEph3LanfyJwFxeHjefy1ciaKxWA22pEMgy11Mdy6UQTPaXJ6n",
  "key21": "24LPtXDM8CUASU3VgnuN5bGiqaoABdMDK9iEq3j4NrHmNSYbLQ8D7mk4LAELp8Ch9G211zQ6toxMuTJxfWqsx6aR",
  "key22": "5kXzySvVm12FBVucCPBwVr8arCyFHbqD8m9f6b3nF5iGX7UXHU9DVQn6BsFdgpzKAK3r9rBzfEDWe3FYxUMU4pd6",
  "key23": "2xWmHc1QLqA5bYiQoXhBP6EjS38NE2uD9Lfq3Myf88mNAptDSFMbd2rpVwTKoPLqx1vCntKrPDbTCuWVi54cHquE",
  "key24": "7Ai95YCsXLZNZsUsEuw8XpLzqLMps7nf5rdwRUhSLQXRHFUGFcKzaiGLYuu82kF3mY8CDunxcUNaGSovKVeg1VL",
  "key25": "sDR27dBDHoFP96gtPPqQDipxP5TwtVTps33cAoSRqyjhe2QG2idYHhsWN73F1AicE4e4XJX9utYGQ8h1mhptZSB",
  "key26": "4mbLBZeB4pxEBWiKMAEcqwHs7ULQm3bvCqCp2T9whnpyj7fuJB3hVcKQqfJCBfdY5exepmVspAFCAadWCHz5SVys",
  "key27": "2DhP24vqgHUjfag7kEZCHrFxwNjFPCuRwMYQRTnEwvcF8L6DfSHjEZhbeJYfpTBLkkxbwwrK1uxZrk8phhrdneNT"
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
