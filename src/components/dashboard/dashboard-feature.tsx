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
    "56WnczXTFXsL2bc2HE54C6MJsvHvzhDj15qAZFH5cKRGMbmSkZaoputMxtEdXa3Dxb9kie6GRCS3wWdh7fj7RrPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GyqXUKHsWRJnk4izs6vnHQ6mvkgC6fe5gNgnzg6xZdBMBU5wD6ftr8NebVzD8MuQZE7T5pS7bNJujcjjE39hDU",
  "key1": "2vGr6ALDVsuGZvfRXb8tLkBniSJ4Vb9p3hpRSJ9SBpecYSMjL4RZjVN1XuEGeAFn1ES6hcYrZTKQMZaJp4G2ub5Y",
  "key2": "3NZNPqbjT4HswviTghjtQKdk9Hr3v3TSuYrVsTr8QtVXPAU8UyU8gaC3Sav14d3rUba458FWTYH5YnzsuENDRMr4",
  "key3": "3rbx3q6Ufqj6qzBNb1ByBBKJQFFPFjrMnDxYxauWHbvKUPTiu8JHLiRjcW2dZTk2RjAcNnYUVRnC4RGj2UevW9EV",
  "key4": "u5bWX8ds1Bk8ErG9HNvDH8aQrd4a3RuY7a4y997CuZ59sDJC7YRQap6a2RjHUbxhqqtapKuBipatbcr8gNk4MQV",
  "key5": "5bzCLYE6tN8fR66wg32thTSLmoQ9MWGtTFxwigVghaDx8FaWcWBFQfma8rXEfXWyk8kH4wNQ6HdiUfuPqc9wqiYr",
  "key6": "4uZ7uTihRFim8UYXoCync27uhg9q4DVMdeYKEwM9WGscvM9YeMogSvbvKF6qCP7EiQTuRqbUZ5xMzHrrE2zrK98Y",
  "key7": "8DvY3hfGdyLfGVCL7bGJ3SjDt8suZddrt3M8EKsxV2dVVKPEa3GqASU4r99WVoh9Lgk8ysHSg9ZTyuQs7CBZDr3",
  "key8": "4FZ9Ema8ewrv6nTVdXq46XyYzFqrT2QaZVhBArwqzhTJz8Pg25oVyBfUBqpuHQrmNAapYNVRNsDdA2X62y3Vemzb",
  "key9": "vHTfVRzZcH3q9du3L9yPD5USBw5fbe97rrhBuinvxY1ei9hCaR2hTE5Grd9C8A8dMeubZkeTtZ7MKQXaPoVQVgn",
  "key10": "2yHm4jHmQECUX197jsNh5XKjK2Tnit3ZTMiVLn12FE5UvVc4XknF2gPyxmzHUB9qV8nqrEwoPWAate2cc67mimPV",
  "key11": "4gEtyXHaHmZSr5xLooCLfjkNwsNuKa3DnSdQmU2EKtJXgnrykV1MFHfKZpq4WHUx1t3JuU6cmEZiLK3WRCB2cc2S",
  "key12": "euw8RXR9F4cQP5TWZgoY9wSRvJdNX14heDvtCCLgu3KoTTBrzdM3wonyZCksWJdCAcJAKfVpkapu7W4mpJjmK4a",
  "key13": "3scvLu5xnRm4GF9YvM1fW4qkoZqbMyPaTodswZdf16hLqXH9sYPWjWg36SstegeJKCbMwqPc1yb7m7y6D2MB9t9i",
  "key14": "46Xbj8Fo84pXbupXjDvbfgX4bsq6XjCZgdeXcEk3BqZmcZbCikXk5zzut9zviz1dsaTNyjHj1LBcKbvAAWM7GWPr",
  "key15": "3M67ABzQRCuspP888tNZvAd2MeK1ip4PMzy9eZSd7tbgHKoNDWkemBaLgqCSbByM2Kyj5mhE9FiascLDFte6G7jL",
  "key16": "3i4FTyJf87h9JmfbJXedBkfzKMVytRtyTZm2qzbEw8Vkkqg1JjYuaSpCzxDk9cHg1Y1mkcHFZiiqkaoda8U39AXf",
  "key17": "LGN7dKdef7Y2XkkNeZrT93ajnqrBmstrKNyw3zJqVdyJtLNkDrx9MuVrCRaiHuo1DndpqUUL3GXkj76DmcB5fYN",
  "key18": "3s3QqpqmD7SZQm25ME9yCbQHUqJ3aH6sB9eFG6eyL3Mhp6T7fQFX1A8tGMfKaJ7nyHbkDojxrUkmJf98WpJt3fa",
  "key19": "4jWCV9hh3zuM89FkLvzqFtZ395WEWQXTEvxqJ9H856qoeHtq2PVTbwQGE1wLNASJPe9rxVGS8BDfStoS5jSiQ3p8",
  "key20": "2o9WVFwUJtBCTq27PKYPmaj3bGfRMzJBGQki4GWvVvkwim27nkq5ziq2gxvea7f9KJzzUN5gYpNPeAFhG84hPBcW",
  "key21": "2khUut4taznuiyFgvvL2JVuvHDxQjTh6DvHQLJUijokqDbvkWbKkyprQe6XujDjSkGnTvR6njeVxFk24bdgFZE2K",
  "key22": "59gUANwSKpmUcN2gGdu9oZLBa7VeoMqhetDswScd4nEb2QX7bhrc2uh8Cv1dCMVfsEC2NNMNLYfGR4ih6huKJ6aK",
  "key23": "3tRpJSPTmmTK8Y5Z1Bj2yGQp67D6zoGTJDfek3PdWRNb3HaDfHNjsFCpHvBqEEJSHM5Xg8GREYY8btA9aF17pdTQ",
  "key24": "2NsJgqXUT2QChsBNERaDKKB67K1EKu7ET4KE5rMAMMCegzvviKgXeZSsQTLCueZgq1kAMBjY5Tobd2ssxZkm9zVD",
  "key25": "2faimGbCiK5sttLFmwfx3wmQUA3ZmxTVVbR8b6X2U6GKLWJbtfP7u41qTzhZyV6pH6booUnnDzEGzTQbZQisSXZ3",
  "key26": "2nYf6ZwXppnjNjMgbLrkSWRFvs3R5dAsnDprvnKhSJco3KcrMadJ1NRc2Cavk58Ct8DkbzvNXwKcDprYWp8EZWKH",
  "key27": "4CRopXKNkNuHyHRk7AUBPECaPfdXC9aFKoiGQB6wJCESGtse6P17ynaqV8yydYx6XkLdRZ6s9QVWgJQ5tDmeQ933",
  "key28": "eXWzuQSCS95WpjRKABCMzvD2a1DSPYi2qaSs6B2aQuvaP8SsrRx86LDwNgYunrzVXZzEgGUcuKPyWyiBNnSxLwt",
  "key29": "3wfcjXmSEuT2y4bJiho1PfyZrbVyrcGkZCw7FoXqRNSBy3yjLyVUQKCmAsotyPdSuUrpp6PUUSmWcT6nnRXsPxsp",
  "key30": "66KpVHND4pWUWy2TTbbgmD3NmEmQiJJqFnQyhD2jHrGwtaWXD386ooxtEZ8GBzWPFuPCh6QLUdPdNJcGeZR3JdMb",
  "key31": "3wsH4NRBHcd9c8qorRuLSayCPCqcu74AHwFBZaDijEPsrgtr9ssm2WaC98t4sPrCkgCakSma1ocshVNVeuTYzMSS",
  "key32": "4XKFW82kiUMcB6EoXZn6j8dg3okyHj3Q3KMBXPjwgav2J5zqRx6uKsGCsk2bSDRKMabP6LqTq1GmoXuPBWdf8xY3",
  "key33": "4SioRvYWs8a4MudqSSHCNn914EPZbwRPqdMP5BLFbgkJ8PCe7GBS7K1qGJaVEjXHCFftxouPbef8roEXJZRXzftk",
  "key34": "4uBrEhEmgTK6TQq6rT52P9kgGdM4vrpptoD7s9TrTUjp169ezEF23XqZQsDaXW4bBECHBH4tLWDREiL77Caso8Vs",
  "key35": "2Ewx6mhEu4XWypty9V3gGjYn5pyGkmgGVBSXeyGr7DjgtJnKzz8ZfUWmya1jjdwHL5qv82TzNeW74iMoFj9MnKig",
  "key36": "5VhfbR82WmYnDwtstH9La1fM14GCEKzNjgbfMDBG2DLV9Trn4125RSZd6fj4fgxraSR4sSr7khHtEGzmAaxQJE6r",
  "key37": "4NCVDtoTJk8TAhEDAVC1fEsj2Xb7rNiB2L6TZRAKHARrJAK6nwa3aJ5tGJhoyfd6b97MJ6niFc7noovCsPzM3pVu",
  "key38": "54fWhC7zUJbEqjwh846zejJt1tf6YDE42yigGkqcSXRqFkrriZViRPEGaXWfbTr9jgwR2NpYuJL7ECoGx3v9XwdG"
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
