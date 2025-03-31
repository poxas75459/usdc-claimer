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
    "5oCWS4pC1By5Xv7E3hy6nDLSytruMmoqj7C64x1ikgLqxV8YpTW9GDxVTj2htCRZhLP93Beywn7U1bmgeoExysAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6zucw9d8yxX2NndJJDSXk3w3KENBECCWeZHDhVpM7WPnMA4hHA5uux1Y2D94vahymeqSgvB7nX7iGnhnYW4o4H",
  "key1": "2esG83414oM1reTomVVtfWZjUUBtFDeTimttYw26VGf6fyHJkYnBuXYZ9srsaJDE9Y8USRUk1WKeRzz3hVGqhdbk",
  "key2": "4af9LjPXHDreCgcc2ny7jwDPmXS8DMz8fmbdP6EEdFKcwFM5zcZd56fDdkLcq5J7azRz8f2riuSXMNErmRZY8RLa",
  "key3": "5XoUnaU5Sw5Zj3bygLYocnWnZRNg92qvTiLJa1cZw3mJaVwM6LhHayEWvc2dyctejPYQRKa8ePcBmkB6fsumiPtb",
  "key4": "3uXghU5UFzRHb2BYRHrvCfNvasZpcX5MQjQdVtMen5kT2JfmK7YTsncVcFqodDDwpqF6GpcrdGMCNpTUNCuNTvV7",
  "key5": "2SMnxMvyHcMqXtfxm8jeNcnbmyJ4QuQPjfMgmviH59TCsS9Zn6udUTkQcK5mPWgfVR3bLKp8jBUhiTtfdvuYXfEy",
  "key6": "58a9RfYz1pQi4qCy1Suv1yAkAhLWRcrtQGaLdGvvw86KYhm7dViTg4LeYvuTH4aXLuWfsUdXsddV5HTxH5criAUv",
  "key7": "5PdL5MwoPPD4JZ3cPRqiLVXr6UStSxCb33JztxZR3df9JwAYkqMerLcQtzxxWAdy2f9FtU9Vin4mYPXiy7pvzXA2",
  "key8": "45v7dNExMwBX5o3U7zBQXNVsnq3R1NytKydLs3doeWCSDftpNuFoVFXFAqSUhM41aV3SXT7Pc2Caa77PuikoZpvf",
  "key9": "eb4M6X8oGbXad69m5FVoyb7Lc9mWXKfxQfRzvjhVCNhk1GBHkBUcbiFqhUwjnaYnFxG7ChZf5GBqfFrR32uZBjG",
  "key10": "4v1UZsPQNjpV9TBpbHbTvkC9koVrKvpaAe9Lqwtx3HAu8rxEtKp2tuXtzVwtUJXUf82VNxhunGJH6iweyFm9xQTs",
  "key11": "3xJy1mKi4h2F8SptG6uE2h2GNQbsWiEYNtrcUVWQi1C38JRekQpKdLy6xBaDJBWLUNq7RYAC43ZMLhyqLRCbgacY",
  "key12": "3spRAiAfXKZ457YUgwU5sdv4RmCQbwbUV9xMCLAaBW28GAavi2Hz2bmhrdr6ydazctAp8UCr6Bas6ZnYQV5TgZAP",
  "key13": "zMtS7BDkAQmbgpgqRopoELg28fpd7LxiXEAM5UpLw2zwNiAg8CmnG6XAEtTwZY5f6YNimmQi7XpYCfRbxo1thUN",
  "key14": "5BtW144NvZkCw3WZviBhPWHieRzZTiuWGgcf2MaR8eYiFf33hbALaFDcGHbySeeevcvER8yQnMentdFXXbJy1EWk",
  "key15": "3fMr2iEdDS9Ad97tLU18gzCBiryonpTqhfen62Tz3WaAAhUpDUDgp7u1cNEqWMbvofhzjvfGN1yvnQcGwik1bbWa",
  "key16": "3HWRn3XxZm3DjEpmRMB6ztPtHzxqYvZqNWF2ThA34pAmxzn93uy4Sxuy1gwGgCKWy2U15WnSd8V92ZjYEyksXVLm",
  "key17": "3whV4F5P8m2SSaQkWF1RRNACSvGppTh6f8DNXQ7vXNDkJXLymwBG9NTGeCfxuc4qtijmbxhJb8jkqLtDJDAJz5WE",
  "key18": "4TkxhQHRSpNvKMnhVQqJPhusa67CbpwmgX5uNLBPQNQTZ9iCazXPUDgPdmjA7sjojWy5wsvUneifci8AqxgZrZzo",
  "key19": "5Ye29bS2yh4vscFBKAEamoKKSkAHbm7EME12QXySgGpCq1gUC8vuHzSgX1ERSikAXnUNrAZ6piBgzFpyH5HsuLfk",
  "key20": "2KLpF3ErLj4tkZy8n5UwkwcKpxgTiYGjnjxzYbdhdX6qwLbp2za79zXbNS6B5YANaqT9DgudCBdGCf3sf7FWZQr4",
  "key21": "25Ew8QR9fkpc8QeMjcjNiBRzMEWomATTHJ1hixBPcbdDxZ8knmRAjuoSugGvCmPyhe3WzvUy5uFFyLxeyWyEwn1c",
  "key22": "2x1Hncgy2qfa2CEPcDVUHHXtgbdxN3rzg3Wh6w3hNiMKvu6SbUCq6pNojB1LqJorQHNFfXWnBtqHnmWtgNETnWxi",
  "key23": "49xMuGH3ectJLe7VsPhALA4LqCf9RNiVNvSugq7E7h98dT1nCdjJZaPoHnFNGTaCB9GV5mZ3unQ28d3k48ywzfDZ",
  "key24": "5k1vXitWvsnQZEupjKiF8fRYwkZtpwMgfDGwYpCBzG4sGn8jVFEcdkkDEuX66GXowE2gE2souXg5b3nLmj9dxs3f",
  "key25": "xCa7XhqcGGnxMM642K9uBNtAemAWu4WqXrLhiWKubwJeAzmA7aLfFz59LkucTCdx1sqVHQcefWZTodQnB3tvRnk",
  "key26": "568yVVJpZ2dN8BL26eZoFLm7YerWxYpTeETEHmfro4hPrYU7Y1e9rsSnS2u7emidxsJsohPFNnmJsThz2YCKVLNL",
  "key27": "61Z8GnRTYdHfvTgoriLfHLapHZ84JHd2nZmxqzTbYXxCepm5kdL7j97jrc2UHY3VAG8Z4sbfqw6GYiiJimF94rCV",
  "key28": "jv2w8hi12WrREuNeBTKaBka6B3NZw6SwYvmKVK4HdqjS4aEcJZ7JtWbbFWRK7LWAsEhRgjC2C5QrxTzCaTKnE7G",
  "key29": "5KqpMRHKXTVf1fgMmN1NNEpLGsZ6tNxuapeGGJFzZtfVYSaXg3GUAjfUkm7D4ouWXcM7bcFCxvUWgKw9GKARrYqL"
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
