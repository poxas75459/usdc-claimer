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
    "NyCMCsRTMvNbZ7n4TQ9ZPQV6YLTsUGYBq1thv5YhnA1dE7xEoLTPkkQgZ9oCMmjn1MgtnrMLHFK6mNv2J65Cwwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jM2WZQy31hJx9twPRPPZCpvWvdbCyED4p3TgsJm7CabJPrhyFWAgQSXfXCbwtwGnJFX6bV7yHfF5UmARB8TZSP",
  "key1": "3WW4LFDwY4ZZmEP2pjKMLEeKWvs2MUcMbrN3RSG6jwYofjW2BAfUJgB6Pa3ZZ3ra9JcZqbdQ9ghXUsYsJiWhJnp8",
  "key2": "3ih3ysCw839eHKoRGN8m3c3K5piLuAGBzs4YAD53FEpVU3e2ggw1JzScxPVXXymQdai5sQoz9oXsr66uQyCjY2cp",
  "key3": "2szzTHocbQte4LZg3RCL6F2K1x3nJsX1ehSi3TmQhkP9XLNfpZ4smULaThmw9gtDjdEWZQ5tc6NoMY9UcMbB792N",
  "key4": "3anGFzjKC7vA9vbciwmqgmSHa4YApqYQXv5SBKmSqPH7p8uAWq1wFuTBJCyXLN5QjoqQXiiKEaMDJKxAgTMuoL2c",
  "key5": "2E4pqcSpB55BRRfhQ5YYvkJ1QNB3PT7qfG1VggnRmjjiHKtCJB85ZGtvzJShKvkQj14Tjeby8JLKksEAeo4e85UX",
  "key6": "3ELuaohFtEsGyo5nakpLUumoXR9Q2zma83a5JPT7DdDEpmcCUxcm5gX7X2SpxTkbTYzKF3QqPhu9hz5PdWmKSMoa",
  "key7": "3QTGz1yi6ryyzzq3o3Kb4xvr7dkh9X5k8EBcFz5eNHBQhP243rKEkxD4wKaeCwFjK5cao2aF1r4NMHcXeBxSfYqy",
  "key8": "XxnwuoNsHUyiZTYWH21kQHKzeihmMTvkBrwC7kNpweaGmhkqC8rQqHcDFvaCJhYqPZSpErtLQPwkabb1ABdeTDF",
  "key9": "2e6YthSVP39NhzgoPyh9LZi9kNWreYuweR8ngHZCJ2UnJWMrPMCF6uSphDjupTeFWLJWTq64VmTmyPWfMSWN6CiN",
  "key10": "2ogzvkei6JcGjHsTYjvGarWDnWvS7gqmDqyeVckGoJHW97LNhviwSkdonmu338EuHKBoYkhkXFyhZYnLPknfiJpX",
  "key11": "3AzwPAZPiAE31362ca3Cz4ZcKbKSKZCmyH1dVin4h7fqPZWsoJZxwQiLeNF2zN7u7KAsep32yfTrtimUEGLaapUy",
  "key12": "2kuWTZXXyguDnJ13sQVXN6xzB1jgcgxL6gDxtswNsxJRRZCw5E7w3HDjZ6TRFdU9t3PyeaogPt1UiAHHmEfNJJGP",
  "key13": "fR8K8bteT34H6P4kPmDxMMCev5CqHEgZ5Nmr9XAbeAJXqbUQXymMiNnDBsJECfqFGRs7tN6t2BDdQUv1hnCXBW3",
  "key14": "3s6LoYmdYqUugPoNFe1KZa7K9N7p1DWsLbmby7ntUZJHWGcNb698517UR7iGAxQBdRFiAh35Z1RJLEEiZ4U5pKTS",
  "key15": "3g9RC1YgUzNX3JjRqJ5dZqLvoEPySXp9Xcq6tHuhjmRGr7hUn2d3SQkdRhC9g4LhdzSNZk8P1YjFqi613Jw5oQqd",
  "key16": "4krMPzWh2t1MAuFrp6e4JMGy4KRFmFFMr9gSiR3RuDVBN9DCq7ka6VcyYvFTweZSE96bPuz2KAyRnXkA22PJmkbJ",
  "key17": "5TLX9NCUXZvHj3uecsgwJ1YzyCSgyABuEmzMmZcf7dJGsg5aWCkrnxng9GF4ZH5Vy25ABUm1nv3QnyDQ6ndNxNNd",
  "key18": "i65hZPe9rtrQxF4KPexFrN633ExBgRtcAqzCkKDMqtDNkbAXREJQP8T4zT3Q9JvwdLw2rUqN9QDgNKFK9D5soWH",
  "key19": "5qVHM83nVZEHuUEardZXCFwtrx4XHKHzBb8Wp27x4dVrB4bmYC97UZsLfgwDoiP6bkgdHLpjvyDnMSYTHz5c6hft",
  "key20": "3p7SSdbuCUdAo9K6iWibzjbfo57pmuGUToweqMhSnS8BQT5RXhWnqEPuX3RGjaFG2ZAKuNYj711Ud8Yfufj7nmp2",
  "key21": "2vcQmQueZ5y26o3CCZYiaEPoVYe1hqmRy3JkNfGvQbpJVp5u5Fhork3yxEmFPPJxaEzK91jenABTDMHzxz1aLEgB",
  "key22": "3eyUF3vvD6DY33tAYAiTwgzLf527f5fu6PzDtSbSJP3PWz7AJs2KuSq8SoE2qSY8YzGUwSss5qwZK4MiyjDHqZQP",
  "key23": "46Ja1Rf97kgmNzdrXyEDBn7KLPRWJ9FxScarpbYYNKAhizTrGFSzAAh4Yy3WZJfwFeH3NgVDwbLyp6pH5f8LmFu5",
  "key24": "5Cp1Fa4Am5XjgaKqmavCJWcrxSzHuJyndMoM2pRavB3RYAz7NCnUngsnrLRTrL9NntvEs2Z9Jvvyd1QJZiWft69J",
  "key25": "Hfnoh47EDRpYoze1PbELjaAHvrsLrcesRMHzXLsvXKLS9UV3VizbS9apDVUH6RnLPnCuwygVPvcvSTWy3RtYJEj",
  "key26": "4ZetydKsaThYh8jzuT5PUQaMmRctB3JYVdpePbxRSuu49oDq35qq4kgkAH8TWR1ZBb3CYSjn9SQvXWNCM2d9wkEW",
  "key27": "zN5zg2hJ1q4XZXyWdC2jY6pFxCUxgbBAgYHtbWdhXU2w44zQgtSiwUka71awuhpRs5qiMfnJsDYmoRtwQVbEK1C",
  "key28": "5P7YSoZ7hcCyD6Tm59TJfNNWB6sNY7cCo4ZtKisYif2Q3wf51cZsKfUEdPx8NgBukmMmQ34A1YD34kHf3FW1xxSw",
  "key29": "5xYHqMwjjRDf8nWTkg7BCo9GLsjzmquCiut6V8yQcoPyBPv1RNF4gWn36F8gBt9LPM3myhHnhzhNZPFHehMM7toX",
  "key30": "2KF776t2Vbff7zn34SvaftDwXYX8au7p63JMsNvcvKXMgatwkfixU1z858G5RvUQyxN9AZfUWqZitFPzUUW1h2UZ",
  "key31": "5QURHey1VFKmDfB8ahJ1DbjHxhdbbNiKDWaJh1S1TNFErBkC6yFEFBXQ9fMsNuE24ND7FKxgFJiwbwt62EKXrnzD",
  "key32": "PukMxcDS8fDVcwCXZuo2ogimpMLF99CpxyQPJhk2jauVAQFCNa1T84sL5w7G9vK3HdWeJfdyEV1kCtxai8mZqEX",
  "key33": "26YRGTnSr5MGQiEZcyWGLBobs7YtBwYu3rjVM8EK2t9rh4ziGuugThLVabzRcww26BxRjG64BqegAZPBfSGYwV35",
  "key34": "44joXJNjSFJMg1r5UhfVrRjhM1MKAYw3TRb6LjU1FG6vbdgRXajSQWpbsYBCEfbGWvMsfUmdavittv6fmSgwEN4b",
  "key35": "3i9ByCPoLj3EKcgEAqDL7CfcqRqwiGdovPTZzPZQcyKNiBirSLeAoZP7EhxpaK43swBhwFLpCQHQE8Qzx55XpY4P",
  "key36": "26zurEUCiJtov9fRCSZf7rAq15WY1dV6L9jjdX6ZoA75WSxWbTk3kjG3Rg9tPnRmWmZPJH8rFKS3xp5bs1naMiMr",
  "key37": "5Hu6qrzZknUaCaVth9JkubXXUFLi1rqEXcBJ6gCJUCEs2F5avmrwix9ME2fViKd51tPHexeJKMYDFzrTQMHdwaTi",
  "key38": "fEduNREfPbeV2xBiLnQaSkjGcsGjioa4v5AndFmkU5PvM6Jh84YtEdTrEqx5QJ9NnH4TJ2zy3wc4mug8RNpCJQG",
  "key39": "5VsciUyansZ41x1LyHtJtmEj2uQPuPZJ98WZZ7wqWgVMYrZfpnDtuAEYT7tkjsGo3ACAbnpzf3n9frwe9P6Q6Ded",
  "key40": "222dbRjDbnC3gYdh8eQF2GcEUWHv4GTLHxBvfT38sB6RaEUDC8PBqLkNqM1QCzf84rcm83H8JYr3mgMj5SfcmzMn"
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
