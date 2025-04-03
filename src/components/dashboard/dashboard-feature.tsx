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
    "4VoUQBd8wg2xfkkwwdb3VD7SHi8Gur8kuit2jwxg2sn34vGUN6QF2kq1WGDVS59QRoBkKvevGAZn2x3UZgF7pPFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRjCNnxkAse9cB3ii3bvv8Lb7vWRphhi7K5UpKEPbM7fTafB4V7Mx3Avsfub6EagS9oiAGDXgQ1sKjCMNHivyPL",
  "key1": "2fbpp6NuGLJEuTo6pNAWe3CZMmYnZPpQwpW6XsyPiacJdATZJZx5vWrwzxo3pbwNDeVx19RwTLD69r9mCcJP5LFm",
  "key2": "35s6Kv2QX5Ji1GAPpGQ6B2jUL5TKChyej4b6Cw3MhhJu4Zsa2UnA8BkXqbnUmZaKqN7CJbVFVbUnSEBFVUNJVXv1",
  "key3": "5A3geJKviBE3w1Sv6YveneR39qnx6L64XaHeQ2atLyAgUJck2hcTXNE6xyToFjkJU5iVGqbU1cpu9ma1mNfX3kHs",
  "key4": "iE3hwTVSwM5G5GZsZg7MusX3Xwnv438DxG3ajZ3vjiHWw6XEWiBq5obufJ6msPrp6Pr6cQhnMcjQqCruRTqKrC7",
  "key5": "Y56qLRHEYuuoGcjsfXkBWGK8kpeA8Y6RVGViKXj274bVSPxEy1THyqAMEJboBEeKhJwXytihHRCgK7EHG5Nyh26",
  "key6": "2cjVd9w81wCC3ULH64NejmVm5G8uFv3LuH1bi1GhXD5vGzgdRSGBumgtnamnxaHdCkFrxAnQvBJ4srUCY4D6tfeu",
  "key7": "22NvDoUkv9RqarV1E2bbxozWoFH4FBJNsPZUL8EUzq8zq6qHYAGHmayJeeeaBDWWGpm7ysmmyJZ7T2cd6VdEYy84",
  "key8": "Hc3NEmc6PFDYbubj3NfeFPM31q7g4JfSu7wmuTrVbFZQZm3nxML4RgmMoQiDZBH9PDvCfRCtLPGw4q5dhebB8fZ",
  "key9": "2qW6LQZMU29rfTP2rrPEdi1hhcuoyfiVCYDXZ4ZWdCzSEzFo4aa94rNK4cGWC21F819JLns3FcC2eNxRY8eyMQ5g",
  "key10": "2Lkh116aN9RFEo58rw7cmDEznieWwdjfunZkLHfBHGJ3aXs1xWAZFWAqmNEcr3NPPLBU92uiKt1fS5w9pCpTyFKp",
  "key11": "49663toZdsHxEaLJpLWvU9pQ4oUQpw5t5z1xsK4TX6yevKkXpsNSmEjEjfkQCqzQMBqJmh4Dzo3Jd1dvB3Jp2P3r",
  "key12": "kv89888zAnLWNXx6YbFnhtKZUouK4k9yKQC9bCnECR8ibs2eVN1hBiAvYwxrJv2kmXN55xNV3KzZynxuQ3inTmR",
  "key13": "2PyAu2mWBZ5bTBpRk1PeuZeKeB3rXY9jq5VUuD6VMqeS1MWTsy4Y9UaPQBNwEKn5ZxG8Gv1PKycEvWfaZaJELLfq",
  "key14": "3pfXVPJPHYbAxuJ112oerBM8PxmSib5u39kWcMvG895E77pWtT9GFCzCeoU7FAh8q6VccRniQnkvmS4HnvLPLzAz",
  "key15": "2mrEQWhSqm1B3bV7Qk3qpB6TMf5nxSByffq1Y8JAB1ACHpPxnjD1pwNP8N6DLcBhtmKMc2y1uSycQQjWhpMw4YhP",
  "key16": "3dZvsuLEMsbLTRUoF6Cg96EiVT1vx6GEBESPdmxEWiqesYVn7bTNJGsZuH5nhntMiCpgUVcX3KqVU6uKBUokB6rD",
  "key17": "33y6hHNQK8JwSnkn5SX1Z1Cb4w9kN5wpWUYPqqwFRKd6vbGE3m11f3QA8v1LTLxM4HXyDDsmmNhs6ZG51JGsBQrQ",
  "key18": "22tUeELR2woUFufZcH6Dwysk4bTyFgfo4GCUhsh2eSGjV6iX8RhJhCiQkVDkgKoNK8tYryqBiQzdXjR56FX4V3Q3",
  "key19": "55ScfMKuwJ6daasKWtkin2AQ78PYwQMefcJedXa9SKmGCqMiB1HNfXYgA2kv9XLG2zZ85LJ1B1Kgf6Vcz9NX9ZL8",
  "key20": "4NXTXYxQB52b564EKfJjCojbG3kPoNg6nusaXf6Aq4WbE8rQMmw2DV6kQerL7RFrJVBssNSQyE4iZN18UeqPMNC9",
  "key21": "4TAHs12aDgBPCH4udJXoEpogPXX2q9Hq42yje8QsD2qkwcAiab836tPMh9jKYFvoijQX9hmc8Ce5vQvoCKHMdWmq",
  "key22": "37XC6b1K6tMG56tPa97TzyRupGMacdCGBtLhreGGnVWCx4C8A5TZTi8YKMr67UMhCotRPeeSQcoSSt47z39X78Ae",
  "key23": "57NQPw3JTSAoWgQ8ztCt9JCuE43ixXhM2c9jnAyXMWp1XLBxUejswZqgZPwWU2rckbU6VxQDABnPmHdWgvgWHSW7",
  "key24": "5M7d2J77vEjUtZSseFhJFjy64LGa6215v6w96W9Pd1HM8PnHGNssGFpCW2XC8LgS2XVto6cwozQw5okruiUBSd4Z",
  "key25": "5YaGLWZjR3Xb6bqbAUtR4ouZqrYrEdutnLc1iPeQC4JZiobiq2jVMRjCf4mNifR8Lr1538mt6QZBj2s5W3Xjo5Hv",
  "key26": "4xSGSwMk1HoisZaeGo1rBFLL4RhVGY4sby2X2hbfJ4NpymzdYy9M48P3zZFnoMniBjxhAK1CDkgDgY58Tu9gS3Ar",
  "key27": "3T8n6niSZcFVzh5pwYhtnuYL6LYMqd9GfHn2nLuYR4WtX3neHjNnHaJdhfvAKAB9ygMzaTrDFt5XmGs25b5ZUeci",
  "key28": "2fm2ii3uhnNwvVF9zLU1wVj9EreCKCwoifQtjDjJpJELMXFXw9c2tagoPUQPKPCRfaznzMqU8uXPeVK8VLtrwNLB",
  "key29": "4yCWDY6FwTh49ZjC2scPBPbZ3s7ucrCKTMCx3FuViLXfLs7LJS3UtsSPSz89Gmf68n6kYX6YoZNsJiz3piT9bCN9",
  "key30": "fdjBAeSNomh9zeuZzHhWVAXP7zH1PS2BZRk1fwwLRCLoTbh8rp3fAfvVpvrDDN3eM5yotjXLbQ694zbgTVQtonw",
  "key31": "423smmkKHRGe4YPJfm8JVPLovp2EUtqYQmASDbvU3uF34WRFRYMFu5aVEAfjQM5HoMNoK9tcdzaU2GAbQgFF7gSH",
  "key32": "3pGoB4TwQkA2TaGmLQd6BshZRF1C1XYfZY5rpArmEeCQkHEhuunqbNMrgGEv2xV86F2r8W5ZzVdvmqxjZS6YME3",
  "key33": "4yB4wfMZ3FyQxm7wgsmAKJWJVfEgsNr8hNGvMjcLH4NJ4seKxyxP9yDyc3T7oE5uXwiSgkZzSMsmK8YcC51sLEd3",
  "key34": "3W4Prbc7BXJvQqbqwoCLwUnGDJjD7gRXHz6geEPLVRGEnXaV1nk4bqhdMMYKv8x9GCJja7S4CXWPuu4nRPi82Lra",
  "key35": "5xpbGYwZKznYCrNRG2xjB5WcMqz7H5xYYZz8SaVrjzVoHkA9AoSKvNtiTPMNtyiwib5WAsxnPpETBekCo6Vi8cQY",
  "key36": "39goR3PJ8HMocEz1BYbce8YmDAHt3WjhK9z4Q5NFqc2C6FDj1NBpKh6JDrbYL4YEhJETXYHnFx4CrDAtd9umWV46",
  "key37": "4jFoMKbtMMuqQxPqgQJWopxnkHhq2uXxTdc3HW4pV4vS9YWJRduaJa4qnNeaCqGR5NtVvVvSwLBM4zrDkEVBuQ9m",
  "key38": "31kuKxxAa1FcS8xsafUZhFU7qQmN14G7sswUFqjBUAmMFakhxuXapUQu3pve5JufUhus7GhKpipQF8215bTpm72h"
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
