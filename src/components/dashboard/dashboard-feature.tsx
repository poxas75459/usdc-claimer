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
    "4wL3GGTMq51PALffaw7HATiNhAVMyqYweoWyQ5RfsACuZ7wh3bNSJpDyoNoEEExv6HS1hJUQ4pLQ2AVRFb6BcRAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXN1VdYoBvZLkHgewyAKkFWNY9vwvbs4vqHrJzZUoVZSxZ23rfmeZ7MPHuFBzH7fav14Ks1RnTG9HBRXVC9rSUp",
  "key1": "35ZgtNEzstWHvusoeFVSmuNRqPTiauisSinJzgsoMueyDCYPZMkuiM9VMwazKUDVLHGnxLBvPM8cpBwyFiQHHXCp",
  "key2": "5e6Au4NHDCUwDqbqmiQYjsap5qvnGFuhgBqD2orbXjBk3SpSVEqxh7wwrft7qoS9zkmyqTfFPZT46YQv3MyDxFRk",
  "key3": "3pK2guU8C1T1R3buh21ckpxRpo3tYkG6GLJZjPhh2HsZ4QzNnVHXbuGcZezAEHeMMt3E6EMZt5oicKSrmgibWKCL",
  "key4": "5jYm36BdAP3zzPkcvYWfGWsbywWcBgA8hG4tNsb41vKQekMXgUgZDegwg1jakTBWabpchJTajS75kaNZM9wuiSEg",
  "key5": "7UB8mJSpuS93DyU6bQLPLKE6ubmqneNz6o8R5FwcVp2G1BB6ojWbuZYc3WKgn6HEZm2PX97EGN9JiUi2qed6NxU",
  "key6": "5TyVufeAVVRFFoWXcRuvAazWwQSKhzu3fbFBBBhNSYocUSKZcncoiExhjhJbzHyj6tVKrcH6HpRjRzAnb7MqL4Li",
  "key7": "2z81Rk462QoYz7Ly75MiHwNVpAFuExoeyE6RnmUgcn81aFm48ymzjBtjj9578irpM9n83avhmvMFMBeeeM73fdrF",
  "key8": "D6sDGgHDJMu849rMZecbq6ReTYjcW3eLXALsEYdc1DmuCpzWB4rU9it3eMZdMt9q5Kizu3ZqnT1aaRHYQnoJtAZ",
  "key9": "3d1h4zDFAQJiEC9usuU6PQ3rosSZ9QiKXYCCf138FfNkmoVVkXLK4jRwLKbcmNFpcVfyBrP2AWX42YT6py6HpRCw",
  "key10": "2fxX6z94jF9asmcC19ybDaCZxvX3arvfhkyceNxHXAwCZssJy9KdMrfGEPJkTtnHJcieGHD3odBK4QHhCu75xu2t",
  "key11": "5xy1YvgF3fXprCWHSEAJQPzn7QvP5CTNgZ2ENpnSGSqvrLAfme29XGnXQyRLCtvdBNi4rg4knNPJGy86481VKceF",
  "key12": "2mbjqHdtvXfc3rGaFW9TBLCyYGhQyaGBP2oPCDSLwMuAjF9xB5G4RbYoMaunCf22NaXBjuh8pyggod3j6eGfFrbu",
  "key13": "23f4P8Lbnb8VZ9JvHnTWSE52AS4XyoePfHkMwiJeY4z4zpC2Uaifb95q4ob2yhxW1tffVBMxy3312hVVQu3LGQ2Z",
  "key14": "5Qj6sNsJN2BhczD9rdnwwYv1eZRCueoGvqC8FSUdoEW1ZKVUxT87USqp8e238CL4RXhz1vo15nH7NRfYG1WvPPNA",
  "key15": "5SgighWpXMCs8ke71rkmyiYXPhCftVWPYePsZMEzLVwQATc949ikqiobUw6UckgYyZ5ttpo6bTDnLxGaZgGSwzqa",
  "key16": "3bM7nLz79Lgq2mj95wvecuTB9St45eP4Xe4dfdVDJhQsFQVUhAXSxgG24T9wFMUFpSpXqtWCwwxiYo7YMYZoCHga",
  "key17": "3hghHYkr7mreDwAH39XhT67ub71BVmsuKY17h8yx16K8tzsx3nWmySzGExo4CErs9jz4FkPa2NCQfvC5ifqDzixJ",
  "key18": "27ccGxVK7bSba712fQCLRQ6CXgYAKCjqc9LN5tapu3VLoDqCzQgBebLYBNb69gNaECpFx4UsjC2ECgtQ6GVXCLbu",
  "key19": "CLMZrH3tGchpF4q6TjR1NHkD1wcfbZybGtT7ft29b8UBUE6rMpfC6XtGTb3PXWTbTrAi44ePHxdiD4SVy4LTCcq",
  "key20": "55XAiVCcbkzC8s7CPYC5qXpi65LdxV1qxwsP4xBcJhTzya99da4sDykxhWRyTqPKZ3NrhJ156TxxPo2oxkPNaskA",
  "key21": "49GDQ8QvZMSGwWN8UE8oAx8vifPeydHBvDK4wyC5npdiNkq6gbcqqPp89FugvDu1CgpaYRbYyLcM1qC8Rth28zMH",
  "key22": "2i8EdRN2Y9EctLgTNjqdN2kMMTKKPX66BKbvQUbS6FW7hfL8ojpER8LejN3fHvUocEekRW69KM3JXQVHrJTNvcRL",
  "key23": "42Sqwb1MnxS2rgC7hUt9Vmc3szAWys2qTxnKPmMUmPa8pPGoRbaT1QrggwB6hLo9xyCZEJtdBWNnNrpmqBHj9caF",
  "key24": "3jbWHzgh51MEFfXz2m9qTaF7WywSrWzmPwt2yPWo1WRsdR8pYCmjRe8XDoUZKb5EiwT7wU2Mg6gqyWosGGuCn7DG",
  "key25": "4fUTKJxs8GyHeBfQDNqUQ79a8sepvjg1VwYQHYycpoN2gGv9p3eY2YPQDXguBYHmxeXTXTCvSfgNe6ukAJAZVPT7",
  "key26": "2eSed4sHuCaz5gsdCAzKcXqvZFHVpwtzxjfX3FmTqwHSPHunPsN2fFoj4P7cPHUHpezUPRA9hSzc4UHnStaveXBp",
  "key27": "3LV1JHve8o6xnBgX9oGWRRotmDuPWjrekQ8xcrZdWaRsEDu4zgh7FS2QhxjeVm6LuvTqYRy9b25AsH3wSYw7rUat",
  "key28": "2ihXfDWwPp668zb9WRXb9M6seV8xKyaAmjUCWDWFDSr7vVqf2YF6t6eTLAwdeVTRote82R9X88c7iXvmTgVtetNk",
  "key29": "4ZzpVAPGXrCTsYNv72oZcBSe4m7goZMkXiBEfPYHy9mKu9pfwbzJab2797KzWeKTK6C7CB5J3k1reQPuTpeR1gjW",
  "key30": "4hSSK6qBmryjFHyYPAA4bvc4DxokwovHmj1VaYP6iCHMSMnHryBVt9bgJyGaunQeDAVkNuRjyg1MmRsq7NxKcBhH",
  "key31": "4p4RF4iViVK8EB5au4bk2BBPYdRMAeTrXP9QjP3HibfLtkutJk76B2DcEv5uvbQY8EafdTYLdam53z2Lus3XC1B5",
  "key32": "x1x67Jq3YUnuZ5hiii4aXHLioSUWBp5cbTLwXAejQ4JaGgHacKp8tdG36MDSKGcVtV75fT5qxGzVgAKg8z3aY8v",
  "key33": "5Rbh6KLwUP6yyeNUzXaakk9NwewHgvLTYzSzyqa8QkqrjPvTE2F2NLWwYBQz7EDmBZQr533zrmqsTGRnTmqm9fuL",
  "key34": "5mrQ78jo8vLHkFYi3p9fyebLCBzDYsm6MJTccEwQNtWX1p65rUrm1NwKeQ7cLoSzntgNXPT3ERw9x64CKCDvU5cd",
  "key35": "5DxuP2Kea8UEEK9ZqgHw8kQvekf9ZPVtrDcRiapL1BExFWVevyUU6aj5cfZaT44MDYnzEgkuqWLMsF7RqzYZUHN",
  "key36": "33nuytYfbYNk3LoUY2MMnuK1LQHdF93apK64FpRZcaYpAxWAVvCUrNL3CGdjEs5EUx2UjCo6ykmz2Qyuw6hN2atK",
  "key37": "3w1ncTsAVAcnagg2gCFfwMCVTN9Z7C5xzdoQxSNt17iZ1DzNpoVWM8D5CuyckZ3fDjUksPNPXLX7aVti6Uy5RLeD",
  "key38": "3nL8wFs6uZwHvwttvDB7JEE6MmLQi4XJyQkeFrYR7JKprtkSPeiKcCzcofZSumud4T4q4GXitGmJw7KRKDQEbbTf",
  "key39": "31LT9ZLoTC63Q1cCaTBugozKzs2hsRrmMQ9rFcCRzjvdunpo7KXyoideyTRyHgRBx2q3CHmPv4VrFLay1KaCy5zx"
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
