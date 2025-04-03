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
    "5GpDcQjpXouxiS7VWqzGx8VMjjC1LgSxM3vsnRxyPBF23NKcQ2EEqP1SYBf1rDP4z2qboZ7pn437QC3fekaUE3MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47z6rdPjpewrz7mNf8Z7Z5xXx88BbZwqNzfTM3JZkgXnVRFbeRcXaG9diKie6fAwkU3DTGV18dKceZUuiQctEQMz",
  "key1": "5QeTUWnfom346SDpUe6hneAmS4KpdUauqMDM9Zn6WESPxYiCnz6mH5nC9bWAVt3XYYBbz7AjS7m4DYWgfJc6Ti5E",
  "key2": "Zme35WDMuJVhjyHmTdSDQQH86nuT8LxgisRaQ3SwWh6S5d5wzgSGrMo9qY7SwrK9fnbmYE7j1eX1r9ue7Np6sJr",
  "key3": "27pUMi4DuWMCL7RDeE8Z2RmJNJw6yf9giKSdATHbAZ9sXkf9hvCdFk9GMqRPc1WSh4xx89DsMYJe9LJDPpvPE2AF",
  "key4": "216jZd2kUFRnXiHUTGT3LkKnbjWRspN8MxXUdNdWtxYrt4M9b62fYnQbdBQZQjmXcVg9pyzsT9f6q2ZEMPa3Z3iG",
  "key5": "5kmz6DyK5unFCvFQXkDh2irgjEyPwat4YFLDm88Xg1r9BTJwN3yDRo9WWRUR2jGszfC5SiqTF3WTi9zShNamHL3g",
  "key6": "2NGvkAXUeBcEo7t11qkLZixh8FDrrU2SFyCjTKTk1gmR5NhKxhyjGLfRu9nR48MjwxwJLoLF6KmAzyQEt9ZM7Vn4",
  "key7": "34XhdUh8HDEXE3DyCrWGSSdkxErJTSnjtuwYs5TiHdY1micRDggMptAwRwKzxFWaWegoaHj7kSSajq4eNg36jNmS",
  "key8": "61CeSKj77Ye54gYZ9swdEuSki2tXrjoDqVV6kiJRommpRNmQBPQWwRjCup4jaXpDB8S4k9WuPk4TMfNWe9HKp1Q6",
  "key9": "5pjQdopdnHwTyTwPuCwqTeBdvq1VzfD38m4k4zxfQTYngkjSK86bYS8tWco5ewYmwE93soVV1TbdnUoysun47BR9",
  "key10": "5TiFJAzYBy1Ej9kcg888zcHJCSqcSkgzCXJtxGM6mN7JjdZVr7KPtE3aFVDPxey1r2g9Kgp7cNgSyZbPxrTmPCfV",
  "key11": "4GdCXECoBbheyQ456nxkRJ9hMKfMb3GMXoNkznLEtyAfzHXTCdUT9WhuQDSNZTdeG3Cv6rbesRToNmFXUtVRqeQb",
  "key12": "3pm17tQTWXULa2Vp1Hxx4QpJM3rprT7gQGzkXZfHtDHQETA2FVSJGozff4EKdLhf3K5c2w8GokmyS8CtdebBRq7s",
  "key13": "39hBD8aVAEWHLxtVsYsTiJoZ64HozYTxCdrxYrfLwXYXbLH6Qauci1A8mS5CgPe6GFpBwfsyLRhfHpFPGN6AHjro",
  "key14": "2x7cgpmRSPL6Txt2EE6Y6N3s9eD7tkmiC7HYwLp2NQgVtKt5vcRSPWqq7wS3dbdBcZBX8RgdBCPwK9foAZmFFAMG",
  "key15": "2hGLFBnpZ4BhZduVcoBxJPkKgXM3j3REonNEfrvEYzhUbjTSFeeME3kzEcNSzkcHgJCp1fNvTkfQwW8wLHsnxwKu",
  "key16": "2kqv6ns1BgzYg7bj3wRG5nLesmN8Yq3gXFFeEeDXXN7nrS7YJ7C9pJ1eGGH1Ckn9z6kk77bNDihAENTnmf8D3qCn",
  "key17": "5CLrjVaUh2WbGHzjGbLzUN4JRDALRNja1rB1ppx77kNmNwV2Gb7j95zGb9vp7sBjwBJQhkTUNFF4a2sUdNt9S37R",
  "key18": "4sMpcs6dfN9dS496Pyp8dbRWCJae5YGCBSjPfHGU15fxAjW3JR9xcz7n1APbWeVqvg96Qtx6gFJsH1fTbeiwkSZK",
  "key19": "2zigfPb1fqxpLp77UjbFqibbuYptRFPZgvGiZeAF9F2HXcBUFPhFUpXHc3nQPJFPntRQjv98bSxytEJVHM9MuzvY",
  "key20": "5m1q8nfTmXPuagJoz94184AWA5UwsFTYw4Wc2GwvCC4TxCmTmpBK4tQfY4DXyTRNHQDg4sJgzpWFFZ63PuJZ11SM",
  "key21": "3zXYU2PADnPhGExWdeq4ukZxRsyGDFwhTiJknhEX6QZmZqAxr2pZqiFzEnyCPGGcQCzy3hNgUMnnDt8eVBis1h1y",
  "key22": "QfHZcxhTUpihR84hZgGDfxvhDRbcPai1v7AttR6ehtYHqATCB4wWvaDMkHZUE4qfro6BJPbfahs9hddC9GG7qru",
  "key23": "5SCx1fPEsb3ejP36ZVVgsYJkxmk72at2QCyuBYSoaHe1gGtR3tzS1oQ54ETyhBuboRZVPbLsbLC79qDjqnivSfTA",
  "key24": "5QS5qUxkgm4kUmQHQVoowURSXa9L8G4KUZArKYfBX9f459VP4f8oNKDREChAGpw9zdqWutcas5WLE8mKvbKTXhng",
  "key25": "5w3eynRVeAj67LpzfyzmtfuSCpRQdpx6APvADU4Ni3ucRQaoZSXqRhZgpEzcdUg59KCPCywYhoCkhgpgMxmFrGvY",
  "key26": "2C67YRPQoNBVKPvcLf7WRXP171Drm7GvghFXVNt153A5Q2qQqD3eJTfTHcpYvLGb8SKApum7ALELKk26W1qDbX3m",
  "key27": "365cruWMPFxp3RFEEvrNAwCRasY3KWEaZqDH377TJZdVSMr1fgKwiTzviTbJDnG6JCitrjFAJHB6xPnyPkbVNMcK",
  "key28": "2oijezZj1xygopSKs1XiQkhNFWjuZ21iCQdmiYqnADw5Mw5etyZwFbf6n6WuWVUs9YShrLP5QgrYJeM8Kv3m6bKU",
  "key29": "2edNCNg7sK6DvfwjPDhqMkbtjcvz8GBhonbmaqrZgojLVrfEzb24dBV3oVUtUSYwDWm8ZaX48h7dhtR4SdD2gSin",
  "key30": "3mxHLBy9XfpiGu9UG53zNh4sNcuMQGgYTbzMiMTAEuqK7qc2JWkf7JUyPqmZGZBDcTYfJcER2TwuaxoQVBqHz8Py",
  "key31": "kF9dLgYgPMzTd4MDpGedKiVTgVAngr8DMZGxpWYzLEvkfgyrxj1RA9pYWMZuSvJHUNRphfJCqsPkAvhpgGyGwse",
  "key32": "3jz9bDTYLxgZtpkcWf61eiUVWA25StQcQbMeTUZrWHEA6MEiLvoswj2ipz3pCK7HZxXKpZ6EDTp6wpzWeqTSPfPy",
  "key33": "2gabdkLE31EGsYzDMbVmx2TRE5TWH89V1vyfFjTW46ef1GrLACvhp87F6CnqgZLeDccjWQKPXLvfAYh4f22AX5XS",
  "key34": "5aJtUS8kVaHwTF91ihgL9cPGkDbSYMo3EYgTkALZ1X1YzDnTQq1CKQ2FfXeXfydAiMMr8Te4hkQnoXU6Hweq8R4R",
  "key35": "42QEH8dGpVcgtWvXxqazCzPZkQJph38bWKJPaQqfWMdhzqG4itcrWvXyu8aeoGSRyPatrL6Sofdv4eCCC6tmdk7Y",
  "key36": "4HuHj28Dim5uxaSedZKStkeQXeqBrJAxbDgXv5zLpDZc3YovuRzLyKscPgw8vmf14dC2onYzbacdDoco7N8hgHdZ",
  "key37": "32ri9zpLon5tGX4EHEK643pvwVzusnmwjhxfFchgLN5fMppjoCicivKEjQFZDBTrrr8kYDHiNXo34BXuGEm61UUs"
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
