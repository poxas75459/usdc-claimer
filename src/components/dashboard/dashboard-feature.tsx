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
    "4Gc4pBsjwdUsz5mQMiBniy55EivmnjitRXMKDNMVDdQHhq6nouUDXgTg4uTxonmPPDiMfd5P1u5W7QqcmnijJgg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQY1GMdTpAugKpE6sFirfHXu7X7Yx2nNphDctdTCuCXu6T3xB8R2LCS4hCMmeXZJoDYkG4DSsf5ugX1WRX5dPj9",
  "key1": "46cpi38BJqPd8WDWFsZBnfQPpUi1EovrkJkh3vRqjzBJZeJ11HewPrsr9d2kRxyzMYGKL49YdWcV4JbDqRJkqJAA",
  "key2": "5wF2AZGF3JQCUZ1oXkSK4aEPyDTay9ohQxS9PGwcx8na4mkjP8BaSoH1cbHXGZS9XnVG74pvLe2n7EEczHK5LnJE",
  "key3": "5YrA49JGEoRhWbgStuqn4vLiv4KWJDLsjjE4dbjSsZ2y78G8X69Yw17eohvHmE7t819AahLPgGGYr7ZFf6B7emEk",
  "key4": "FzDv9J4wevwtmY4USLm16ViCtXpp3P9DwJyT8FyVjPA3DNFuCSXjBDNZCQCJJtC5eomt6q4Gc6HrAgYij3rTaHc",
  "key5": "5Mgecs1fTkkyj2e5zMx8X81qgj9dJ3Z96nRCztJoCfM5pCEgUDJkTgUUSsUpqg1gB81CujVfgwDggyZmxn83AEzP",
  "key6": "3wB19bZFNQYwPE8tBMaqzGvbUQSr4waB2mKv841qjrEpbEtdYE7nJMCQiyVGK4c1QNQEMqmit2S13AK3qjzp6SaN",
  "key7": "2cc53f9oqVNDoztGy4Lue8CQ9PCunjtPir8t4yL8ueYYMk216kh2ortYScLamWPXCx7HfQjRrZnyZGWCYDwSxUGp",
  "key8": "5poPDhMf78EEr1pmE7MpxP53EsvZBLiKZKS3bB2NTPAG3RqHMT8uKQs16LCwfAw3Czi7hZuoiWSMNebMs222QiWT",
  "key9": "4exRFBRT79zXEwz9KZ45WPM8jtz8zFAbt1pMs2YkEc3RbUhGDvFAjxvARYfb9arg4QmDvqqzZ3MdHByuq2KrmGK5",
  "key10": "Sj2kXB88rPnZYDA8y5SkUfbiY3LDFX6MDASDJNXiHPmBK2HZeEomvVyRDeejYWSAR42731xJZAUHztiAEeBvKhb",
  "key11": "2tvcQJqaNdBJSvpzNU65YgWzPJPqGSoXYqgWnxWyafnE7yevhy27rb1BXwfpkF5RiwJVpQuCumwJYZV7V27xVG4Z",
  "key12": "5aqpFjBqmSapoZfvKpzTXFqjuvLMu2voDau95tDSmmoopuJRK1nBsFbyJhLfguAQeVz5PpqvSDNT8dYejiEY4NJC",
  "key13": "4a2PCN7uoyKQrc9ZjqjYBQwoXm7V5fmoGMk7UVPyZE6L6bNLuT9UzD3XWqizWthLP5kiKUhtYhv9k6Lz3KUrXvgT",
  "key14": "4CzXWnGhVj7ALynNXxHq9jcUzduNgk5rTTEDxaQJXgdedddFqdqEQSg3QSnC2kTLFjoqt9usd8vG82VN6JqYSMnJ",
  "key15": "5du8R1uRfiKnBFRjVXBKJ5durHD2fqriJuzDH4mvxBnfVC8A7NFArG9KyA7Rgqtm6fHYGWmnUMojMcXQiDoyxcno",
  "key16": "DC4Q3sZurC1PtjbAA6xLVXrRiJoiTkKUQ1zvbaHdVEDtvUWmrr8ovYXMDETsU4QWvuLxNnbWKcQfQFh7F6wSyoL",
  "key17": "3e5PLuizKHKBwov6QN8DpZ1cbJo2YMu1pTrtV1FGXddvWJJ8kNa31VmWUj26E3A1gBWBsgaPBYWrRmFFSCzEKCoV",
  "key18": "5A1iuffRMHX2P4GVtByr5Q3C2QRnFcGXBDtBF1LdLDbBEdbfjwV7UTyze6QERJDgnmB5bXjkM7pWPGMuq9w7NBj7",
  "key19": "5YpsgQwYmHTUUA3LRWYxPCKCvY3bQezzyWPnsZa6p1U4kfW8rbN1hwRcj4QN29nD2Nsu6Nu2EbPTNC235XspiSTf",
  "key20": "5oRV61B3fULoJtpxuELCXTTo2V4mACyoi1RBswPC79VvmPTFNaSncF39k77puyFKngJJREawxe7R4eVyeVbiMszE",
  "key21": "45uNeqnUmG5yGMjqrK77Eut6cKJpbPNiNAdd7car5JwAnoM9PGYYV3k2H4EcGwcufzRmR7ixBvh7cDDnR3NbfMcH",
  "key22": "2x8ZFcbs6dH6pfXBjgpmWAZgZMr9nH7Rsix19ee7KhyVHqxi7eaynjcKYaQhC3xtzcKwSg9cUJAaBEnqoQEJ4gc",
  "key23": "BmHBeXhh19nrjtpCu5jigsDAxqdpRDUrWpSDaChHMMfgXQCXeB5ecXTwLMqhtockPtYXPYevadkNp4idp4HpJBK",
  "key24": "2Q2auAbdgwFz8p1bvosxtifJ82eyNJhSGwkbCS29sJeoAZvqKNPtfmVaRQUvMwkp5gGHXt8x41ZaqD7edgMRtguk",
  "key25": "fmg7h9UZvt6LxLcC3Wb5wyXQyhZEhXap53cQwWCS8t8iLJTn24xfd4859BhsZAMuVXuvSa4rksWyEmB68biT8m3",
  "key26": "iz9RryhYHqHpcYqyChKsK2KaeSqSZ285ZV3CZtv9HRZSKjGQ9pgcpoG21scNwVbU3qZhzhukAs9csdScxQRyFE8",
  "key27": "4anjbutM7q6Rpb6XyYxQBYihHRY9xBjbgnXV7niE4SaKxC1XKAhTYgnCFgFW6MzKwLsSARj3Y4W6CPpSzZpXxvxk",
  "key28": "5kG5Q6JJ8MJZBovhb7VRVetMnmCPtSYJwJCopj4F1Jca4VTArpyPEmhg9VWnvPjw4WkZGgAupzA5PEN8k7VLXhS2",
  "key29": "2edWhsyq6itQe9ueYFV9DLv6Ucm9rc5guos6hazQSZdgSbYojcE6yzD112KmWAKj5XGyYH1byMKxAzx3HxhwB3FL",
  "key30": "5XZPXsZnWCkKiPAB82jXFaKUTUy9Pm3E7NuU8okTVHMKFrkwmryTLe9NNDzsQAra1wircD1qt2FrYZqMLYQg83ie",
  "key31": "5urnadQ2tHWshYi1mJhgeGH3YHbtmxo9i44ULhi96CF4zvrtHSCqX6ArUpsUxu5zeA5i2sHcV1rXhjwXsnuyDun",
  "key32": "4qAWuCx2C1eSuNwzLwr6djGBLiR1FXJdUvJX38GUHJNrK4WioYuijnutLuouF276HyNC7dj58wq7bqH14qALMT3L",
  "key33": "3hNneoUvab9bMMGvae616Y6dgnVitu3AXvB4frQ1v4Mfs5vRdT1bt4jNuohiy5bmwuLTtxQELRSVVnz5J54DQ5hU",
  "key34": "5sgqKtWXmjhCavaoHEvRzpimCTViddCAQo3V3sFgQLS4rBasUnFttdnFzfc7fqbADDR16SzcbkiXdc8H1vgs9MZT",
  "key35": "4G2WeVYkdekaBpG8SXtQkpGqjFxNWgEHfjpnM3QmJZCFNSfpUfjoW5o5TVeXtqDhX93akVJUTVcCiWtX9P6C4Xhz",
  "key36": "Ay6KxFtF8RoGWFvJoP1EvWXFAzZuY26SqqzUvaVNQz1DMj4KXoy8b5SkdCZfhK2Kib29qgJfmaA6wgX99vtH3TE"
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
