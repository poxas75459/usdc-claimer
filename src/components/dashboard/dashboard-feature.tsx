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
    "2z9Ju9L1uqwv6An26scWt4cSTdAb7myEbqKyMPqGVF9aoWo6HzwBBcnSyekFR6b5U4gcZg8AThVicdZSyxZ1oefr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R25km5Ybt4U2L7xswHtFHmefyrkAdSx1HcBftd5MRMiBSEhDLz7GWBRqu4n85PjdEhVZi1MwPJoLuwzFZkYMKDD",
  "key1": "5brEaW4BfbSm5L7AVhb7BtV9P1ciUqxxh1bUxqZXccvZsaA56qHXrtZYEswD2gEVudunAw313Xh5STXwZPrYtS4W",
  "key2": "5zyfShzd3jRsSmRuS1R6irHoUGBkpha4K6UFT8RXi5uTmentnAhdKWEgLDfDhJ4pYnfwmAteSuRHQ6ziaioANkJS",
  "key3": "3tuNvSRb9wGSkZjF2j2J5zsSq9GyCvjwHhNyfFj3Buu9fTXECCw8om5Cb4AAqXo6seTCumaeMRkhFFxhAAQFfeVq",
  "key4": "5nVjjUi4GBCSSymScsfuhJk8m5rMvXCqoQ4D4KPkV5Tvnwd31z3beoRBqU3NCSTiREtXxvwSJ2dKpVwCfFhXKBhf",
  "key5": "2RtjSiJAwDcCDvkrqmmGiph1XVsDJdzXUTY461vd8zxMULMMDE7d4qRpAp5Uwp3dyo4g8UxNEjRZsXJ87SAWZ8uY",
  "key6": "3tz46feozv5HmBm1vwTJkj65wgDz2vc2ZLUWbzrsQyuXnY9mNTazHEtZmp5DHDLYkAmFNu3x48f7y7HP3Gqs3sAL",
  "key7": "3DW4y7FwrGQFPEWStfryu5AeuyELVLvbqmAgPswwy3ZztQWdVFpksx71RGTyLiKuvURmJ2gajJNW988wn5cmyodw",
  "key8": "2dsJoBt4Z54sRAn1kBPBQyZni8ijDLuroLjU3A9gB8iokKYhmbx4JpBjBxjbFDsxh3Gk4xvf6aedynYi8CUC16y6",
  "key9": "3q2XfaWbmdvYY7gqyDW7ft3C5DK2y1DndaayHJZuYZyzmCTTjH8yBBkqmDnnCbzC8aPENY2qjxyMFbFsCpE72AxY",
  "key10": "4nHYW23rQUPMnzfkxae31RaPahwn66se47apMVvVVgNDGRkJjbarcSJzAKp2XwQ5R4oDVJgrmBRSkfHzY2EopXcZ",
  "key11": "2hSGRFNPzcbE72YntxzCeHXuQuhs7kHd2WMrRB1gpTVkKSyh12pQqK2TS5YSXk7y1E5otTnR3gCzgsETobXnrMom",
  "key12": "2hXzUA4WusBWyjf1FJQt1K7FXk9bPcMF11NRyHpoYKXrMXr7bqW1YLVRR25on8CytQV2Xio3Mbjy1BAQejJ7jQfK",
  "key13": "5iGP2GBJFwhZfrBhrYzAje91tYQiEX8PYfayMjbMUpAL9vM6kuWZbnUduTvuNCXiYy2z8juS6FmE861ErVNhJbrz",
  "key14": "3XXmUKNJQtcQHK3AoJT9Zyd3ESoYTKMoKGC1iMCMBYopd6wDZivcRQvNCREzNgMuJ1EhMJmkXcFHHGNzgBWmfwVr",
  "key15": "4Rs9idcozwJowEazFisD8PFtf9cDgiJTTAA1pjNwjSedvfXq87pfchaS78v5mR5aGfv1KHKsyPB7CYPs6M2an9iM",
  "key16": "4SW4StEbHWTcEZpchQUZi65KSEZhWBaQGdWu2D3GpV7Y7rUxU1WBo1NK1cNk1EKw1NCyLujYvYhQ5PMgioYaS6iy",
  "key17": "4bA6PwCvLZTNM3zoYTLaizn97BGTwmvVxonAbLFfigxavKY2nJqo61mhQhnDgHSovjNiPQD7hR7w7zBfvJ3rGEyS",
  "key18": "24syZ2h4PqeE3hqA2WKjbuxAEH1ipAG1XzpNEaDWZwgTwpqwynCi3EgrVUy5GWPzFbK9AQcNMRZYJS7auEDyAE7M",
  "key19": "4oo73JsDjKg44RvyoS1LYJxNiGyKxvZxBkDXEmtwXZdYSg36JrRffU7G9nA6gJWRZEXRas9NBmJizmB6wAQkFcya",
  "key20": "3SpY9VtqnKhuTN8VZ5qqmxKVLCEmDeSUTdCprJbvHTNWnPG3GRBcGgkb4EiLubBtkphVKrKn9ZJejukm3RUa29jT",
  "key21": "PJ4oh65gaDocLutTHPbFVqHBm1oAB4AGScZUoCsRWXf9vuC8vKNPWgozWJH11uoTvbSELrzyCSUYghk8NqqUyKw",
  "key22": "54AMtASjZQpsTH8rE4ocvYZjYL4mGw7NLkop56hznzpyrqd91i3r7Qz7MPbuEab3ZcT6oocGSuqyiamUnvAGceD4",
  "key23": "3oBKvP45VeDgyhKZ55Mt4vNp8NNJXFRxBCHtLgxamjzJEoeuJ7eqSqBGYwc5mBN52WNbMvfeieRVoA7VUDGs5Htd",
  "key24": "31a7tGR9EzhCEzrjWcM3njnMokASwgqttJQmRxHUghmUAeK1wqosFfa9dpGxtie1HSz48iSffFWCa47T4ohXYcaT",
  "key25": "5PQaZ6xWst6Bbzwdhrr2cgiM6uuHo8PuE5k8wYrRhS7AzhPqfZN1HRmPyA78RadqHrb6pwBZmVgLaWfKnkukUhmn",
  "key26": "2X9T7zD3fGUHdrJ6ehDsS9M7eokKgnbHMWZDsr8DmaEPfa6qnEewRzhvVE7qRs8M5n428NkLSFxW59aY9YZKQNJz"
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
