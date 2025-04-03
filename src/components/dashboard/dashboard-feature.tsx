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
    "3bKtd157rQq3etpPzfTGaZS6DPSioMc9fQrn1TRB62f4NvYA3rLJZrJNRKMjdDyEWhGSPoXTJvzeqNsWLAa2UFgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QqL7u7XeLxyT6i5ZJb6DqwP5LFTQgCrsYjnbC5EpajyZpxvCJhzXz6m346uEJs7wTfQaXupMtAdE5y8qRXjfVhX",
  "key1": "AhiqagaLa3AK9c5RLHzKFHZPrTszKvRwjrgCKKfN1Rj4DV7xP9naEXhzak87K1sEoECVKQF9wphfUiXNSMgxgWJ",
  "key2": "2xGRygrh5K4vyRxjTaYonGShvFyzU3Ko445TXrpNxtCwezD7VK77GX9pEcCeG4ibRDVqsC9TrByomqKt8mupabho",
  "key3": "5R8FXiDWLbSeaxvYbBQmj4oGzY1NhpHsJTcp58P7uF4Jn6b2qAudBytzKGCd36yEYPUHJPyW82HtFcCZsVcaB5Wc",
  "key4": "5LhRgY4GBhWuwNc6A6o5de77SqWZPhWGavHCmN1Fu3BY1gBrdAoyyCkgMx3f9jft2BhJT2hUpgpDusMqJEDArqTY",
  "key5": "5htPqTwANZdyMRgsZRWZAPtAZBppCU2FB1unYDNL1YKXWnxjQ2zCBvyRWv7LgPJWa2wxF5BZnXrnPFHqWkquHNpo",
  "key6": "3pDyP2ckPFFHSsxWVHLHvdiRK6ReqHqgpB5mHX5pUPdKpEmGsSGg9zC5B9YjV2ZKkTwFjzZFTToWVvTuNd2RUUXH",
  "key7": "4ceM6HH3txPMTDBiNxniSKoCNPxZTNJY2zCKViqcpqMn1fxdZw3PY7Z7hsXmioXEsLgbL23weEFtQ36DYtmNxxmf",
  "key8": "2bRwuPMyaLLACWyVuvDdKCSVZzwVR5si8uYx3q8DWfJvCsvtRDNSYtCxy1RnMUpHPwgZvSAs4VRZ1Bzwco5HVMWX",
  "key9": "5pY12RiRbPLzinuJEvA6aQerDgfdQt8ivNCtWw8b4fJ9jkWrdtTTkSv7wfBmmAUYtseGvh5j7yUEqDnh64v8Knsn",
  "key10": "3UYUVmW4QKxzrrHrxobKGUp1yjktkee2DFzSXdsK7KzXUaRkXinjtQnkur6Co5iS9DRZCM71vuAXnmD5PYwX9RLj",
  "key11": "eGYNZZjgjUuBVPWeQJLt1Bp98sRWGmEo5CaT2VjBxivd9UWKZq7Ap7CJ3YfuT85YHkBVFZM9V3o8H76b6MphXGQ",
  "key12": "2ZtDLeqXBKWk8eQjZV9hLCj3ojLqbS7nyUCTwjBy5QvkAWWzUaYhrDUR3kmiQAXzyw9RfHDPD2EPJTEGRmuJ42dH",
  "key13": "4ivdtAGvY99dwyKh5j8aJbKxCZUmFdkjE19oSytELb7ax7DH34G9KhaejyxU2Af7RrLkSt9bfpjtFCPGuQGfQd37",
  "key14": "66YVDFCTRybBdyQPsCLDV8YeXUEKSMo5UNPchAJyWCe65hsDzY4zBQXCZSwQEKHozpSfLo3y5V3T7sb2LBqcTvJj",
  "key15": "4UvMzxrdEg5bLEa71yaiQsusWK1BgUJsa54A6hbr3xaXpqSHMbiH8ZXXDh6wT5dzuQZN3Jg1Nx8buE8J25eqMjMg",
  "key16": "2tbEQkiaRYNYTGh8UNnZoJthGvwRZjpY3hH6PCSTNYuf4c4eknJN26bzf3PGKnSrwaESqdqkNiaAenxVJX7iC9SE",
  "key17": "FJzyjKn4Dqo1dCYP3FJS31GbjhEDRhBKcXcsjQ2p5ctGJgTr7zMiaQP79JPFBhUxgt7gvfa4m38vnqekLqY8ncL",
  "key18": "5LFncjkFT7AjWE1JFc9EgwwQVjPmwGsmC8zweNLgpSPLwKR3B4X5Pbvoh3yGWADgE9WrpuHreL6bYoTnaDcELb8B",
  "key19": "3Q7xxHwRshbgJordwdAASdZupFENd6knxuKgnFWkkAnSvvun7hSt6vBHniqyhPEhskKyBNUrbHXGqPD3eNZKUTpA",
  "key20": "5KN6Jo62wFKMmJi1nr7mEoc1rvgUx6v6S2CQMwGnXHVfhZbt4F3Ki2GqAQVqiXPvcjDotnwwyyAihv7uSjxcNiv8",
  "key21": "47mnZqWdGdHG23gZZrAbXKHSBryfXmyJSWqRaRzS4F8KEcDQspWq7hU9Ug58UGJ1ndLAzZoXTrs6w3K8GwNQCGMy",
  "key22": "5USoDGEmuCmFWaikX4rvUEDpVez4Gp6FZ5K8ZJRPSALwptM65x3AmpMx2NuXrJHyqdQyX4Wdem24j6TQ2wXh47Xo",
  "key23": "3qJ4J7LM5CNdeqfEhFvFZpjcGMRtVYDNFQjDwK91xiGudXqutnqs8Wwg9wSEQsx7b8uRoySvCq8rYPqfvmkwQFM4",
  "key24": "2bBDVnUGzEQAsjvdq4vuzmyrbC2RfyZoG5v2HJVG9xYACiqbbARanewn6kfkcGuvbznXUukUy6adiFr2VoNHVqZm",
  "key25": "3HdFPuwqYNGz2usKb4dqcMntpA9baBn8VXq3czaWpNo1nLgdWw2TfjYP997FpAhJfnQgh41gu9Hbp1iuhbqEsemD",
  "key26": "8PxHP8SBpjVbBY4Lkqqg5nXFy1rbKqHHv8Qqc78fKVcCxaowUSWqNtJerCWmWMmH49LrbQkbJjoevgVVB4u7WbV",
  "key27": "4r4SoMVYN2p5FMjoP4WPNzEEhrgAACo4FBoWFWqPsWdfic1Kx4CawJJWKEX51wrAw1gs82tLWqJBPqV5NRkHfkTC",
  "key28": "4asViFypkuJSuSDoJAmYUH6CicbdfhgWRD9tDyfb85kH9MC1S6mttDJefXjn6FCnFp6jYUria2izGcSjiRRsUb4L",
  "key29": "oMYK6pqhf5NELYrWSN8jHVYjq3m7Lh4y3kxFBGKTNki6PJpuPn4Qkqoj69Xk1egLrkVHQoXQvj1TbcShnW8uo5o",
  "key30": "3C2H7cqtmDxmc9YNs3kyzK9uM66t5MA1tvEXYM8S4xnwpaiApdABRQrvCoHNtaUX15zatvfBM8Re6ztdsQgt51pD"
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
