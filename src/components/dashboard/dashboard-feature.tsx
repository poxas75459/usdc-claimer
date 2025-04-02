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
    "2tyuG9cVuwY3F4Zwdirx8AY6qaiuRP51FjLFDa5iLT8UmeieyipyszLsPQpxavDbRU9QqKfpqBnGJcBNWTRhbxuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxVWG8nCf6tV26mS37cnSde4z7cDpqq98GpRrmWwgo3gzUpJKT5wR1CnwPmGfhuVajNRAvTK6Q35ZiGhFpMCCCq",
  "key1": "4RKjy1ZbvjGAVmgseiRGzppsgFsS4LMK4bHANXmswwoKNBfKkdnmZcUPF27Ujqbb3yrGUTK4bZuzbovG8Hr7Chjg",
  "key2": "5U1TzEWXE46aWHTw6sBg9eJViAuUtrBf4fFJaJPVJA6ag7sYQRuG2m7aVtFB9qh1DTcS9KGKK3jVQbqbuPjZMb71",
  "key3": "3CZy4ecsUeke9HPF5bjCxtWhsWfPyMfrmyFmHuaLuW2BuNNghQTgEaWgSQVUVBrW8J1y9fxmn42TdsLQ2DE92vcS",
  "key4": "4AaCUTdfC8UXNSzfRdMcKF7jJnPG68JzUhmtEWJ9wQzbBeAjVv4HqrvE3X7WhbYvaJ3XPRpLzzzYuhtiFqMFsHFs",
  "key5": "5acuvykBFKgdLGL2o4UknsY8mAaobkeExpkoYAoceGTmYXa6oHqpPrmcsZrssEcQqTH2c1HVkxNAXu44HWMaafvt",
  "key6": "2CPsJWc4FtQmX8PRrBV61V7Yc4i2V76RkXV7wr4XZTVatzKBydvqffX1avJyx3sSZrB6C1ePsajdb8wgnHe7AK3n",
  "key7": "38T9chuZmd4ubWvfEMW6Se4s6FKZChXiP67RHMsijuhwA6p47F6EgoWA9rnws2j8xjxwCFLSPyhCpR4h2hYJSr5d",
  "key8": "4hPzF9HpDfAU7sCBN55LD5QggYBUMDKg7nnap9agyV6gHaJs4tu2UMHuaGsdwTssU5Xis4B5dURP2UpUvviyYqwA",
  "key9": "2L4aTkcQC7BUc1QEveFeDdjJ1ib5GRv5XpiTGQX99S7DY683W5vjxoFZs3xf8jrSTRPnc8sTBy5dNf39tx7fybuk",
  "key10": "5YWHKiDatYRFFwumTVSFrudVDbTyUhrEPYcfhZECTyVVAY93BbxJoi3nTX8j9rBabqv4avySw76o8zBQ5CigNKbY",
  "key11": "421BkivpcSLZgYSAWAzhNoFLyqj8vdemmKJ1UZ9RaFwji18drRdRuKLwPRwrTg3bBKJgk2mwneYWGyb6K3mZYRpu",
  "key12": "4RgpuVztAH8kKu51Y76RbwuGR6cw2U4r5rQUnB1BZZCvwLwXWn39jdFKW5m6Fk7ZVoNsiu2TrSihCXYkAfWmnpKz",
  "key13": "2Kfymab31Ny5FmL55PQ4o6H413oaEz6pboi43sfdqT68MzuBdGe696PR7XvrViprwVdQHaa4k1prSJW4WyYwUnBF",
  "key14": "32q8wL1a1NHFBMuCchb6v3PChd4WNStBVD6Z6k3K5hjN4EoR815uX11iTSry5X8qxcLaeckeEBjrA4iyNRuWcmgn",
  "key15": "4kMc2PGnLRhaV8MZJP3DVZ3QUQZd61oUMS523sqwEcerUxshQTsUMvvCBssUEzi2S1Q1Ngid1QYuNuBovLZLgVY3",
  "key16": "51n1EgUDobibqPnEY2vnpBj52MwL2PJwvKBWQXvKWvjQ3KayCqENTMoaVRrfWVBrWoE4XxpamFrujzHq8RC4HhP9",
  "key17": "4ZHJRFeYVZGsgjba4RyJKnet9xuCekL9588V3WqfF6GXNqfHaLVhLD4BwF79315UnyRdQGnkAiAtnbhJhGNkYyZu",
  "key18": "3sftKJJGTSkAEL7YN8ycws6ANkt5JuBDMjushDQupYRhhxYSURBVTxt9kkqVUDST9fnowJRJXWDSAp894z2QnqG1",
  "key19": "ztZcGTReCdgcWXod35N7AyV3yDXX7dLUiDSbL17VwDU1o7vSGjvWWvEFbh5xXroWN4zTFRtV6Y94FN6ZkmVtCFs",
  "key20": "2AEmrRVxAXhLW7xQKVRfnCnmajkuGJJAzFgBKYaEJC22uS9Hn8jSfYsZNtiiPBFxKkvYWhLhm8gVE7RbeZZkDJdT",
  "key21": "3Rm2DFGoTayCpxjqdthQr5gfQxvdULg1og44AQ6Cr2Q7f2YhEt7Y1Miy67zPMAfEEo2sSBbpJFjfR3VsMNRRJKxt",
  "key22": "2QAbixA3mHza7bASWtRLeSnis4TKu8d14orVEVDLp2aaND8duy9Vygoq7cp6aWeTL5ePSm4Re8BWpybFmS9cJHfW",
  "key23": "5CNNHD1WkNbFaYZ5E6YGbCbpBfsB11a3EkNGLkRHncZQ4x3Kgp2eRavuJZwLKYQVFZAX53V51F1GUZJYKAs8Vc5b",
  "key24": "3gioSBohqwhzJANoRnYqrqcCFCXCVZMRY78oMKsonwy3RxoZwuXNTLJRjaVS9iG3yGgQBwJRw5edz47Ma7kr9odF",
  "key25": "37xRTRkFnN2sca2NA5dU8yVU7qBgrvycbhUQT2iBuYpsf8MXdfy1tiTm4ux9h9ZFxQpWFbhvTjvRcxtqCrZTx3AE",
  "key26": "3MKRFRG9fGkeHm6R1yXVsQMNQPnJfVR8mn8h2JjZ6Tgnbu7QYMz7fE95zED2XZ2sUixiRgyW94fbjZsCHb9gSLi7",
  "key27": "2QRc3S4VdZfvEjD7QwYwbDAB3CzcGhQCSR45RWmKU3sJc37cBYKfXvtUpyBF1mDsGw1GfMC7XyGQiqfiUhomDuW6",
  "key28": "Socv3C4YSqbiHM2JcHyHN7wQRs89KcVoZq2TJaxA9ykaXQJxfe5TzJJLffjwoGg7Q2Zu5b9pLWfgmebK5JxJTmx",
  "key29": "43n6nw3JP4A8BfswJfbMUq2dsSLKH9EFZqmnPKnki3VnMZVy4TjyEqQ7rPsApNWt7gwwhd1PRXwfJZPiPjSCEVcZ",
  "key30": "5FE8bD26wuqw6NKB753CpAdbBcdHQWHuHiuUknAwL4PDZzyJeeuYzT13JMD9AK5feEggGVqg5exWGD9i63EVeiC",
  "key31": "4YRbAfifmkzn2fZvxavrWcLrFgfkS9HeWgfs6VpytBKGaHqtyCyLiAe8GgiCcziVPuJRcsTRuueidzebhv7GxNzR",
  "key32": "5VkCK1ascvRBCeZu7LBZ1SfsaKNWLhip1vYzTkG8WS2wsxY9cfhsD2S3SwBERdibSidDFoqxLuuJPzLT3DVLtqTi",
  "key33": "3pZDv6yYHbUWb5ByBYPxNw7WmAyyBiggF7yydEonp2iMDZN2EJu5traE8NfRuWvc2CzmPmp9L2CrFyLvaVmmzRDL",
  "key34": "5PVrQFYrKqKxpEq5mWLzMFDwGDRQNNFzwawjcL5bcs9tZkaXcwyX5x9YmbTjSoEie6nUfaRMpPi7j87LgF6cMC3C",
  "key35": "2kkxRh9v9X9pRde3j4ieg1AuA3AN5MkupEv7UuQ4CzKPu8mLX7X6SDmN8ECFZnxL9BkUKf3hZDaFMGcg3YhfCPr5",
  "key36": "3eu9bmRuiokXqagVc8GdG96q1TYQ8wkkGtnzrxLUMTw7xuuxp7a32h8L9QikcZfcgctMDC7o2gNE7YYa8zshPsbR",
  "key37": "4o4GEc7XTAE4UvSyA9pQbeh5D2yqGxPyAN6vPxRrkC42noUrPnHv7vb1X49VkE57KuqmPtMjifBmXfPp3jBXisfw",
  "key38": "4J5qZ7yaxG9eN3sPfCyWVp5v2kAs3XvvQX1nuZaLqP8G5uEoT73eLfVQsH5JNbpoSFaAgHMdjrTuKVzbvw85aeMQ",
  "key39": "2apfLh7XB1pbeqDavAswDtxw4LXyx5ypV929GPBJ1kaVYRUXmHJm7ZaEHFqMCu31feBn3BKf7wLjhJ1tWHxA4AFc",
  "key40": "NXFckvq5FUA5pPrssbsKVfGYd7wTntX3Z2Jc7AN8C7QNXWoYxpuRWSDwZGcqp1TGVc844cTpYSnYAuPHLVXYHQa",
  "key41": "5h7Tr3hrPkMJ6iwNK9MRKDs7P8y1vFaCowubxzGJ8a4f66N2RWjUogS99pFeqT1eAxo2U6MWFo5RVjpPJaymjema"
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
