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
    "3tG1hgFG8TeyY1sNafdsRgVPktaStJ47J2E7a2NGjXtARx6Ea52zbMBgrnULgUUuyRibeL7F8ZsiTHwS3LF9rNJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ae83P6E396SbXgx2PFy9aMMhxxNLdaqsv5As5gwQ1ApbCzib3v3F5hMSDHo2WKDMWhmnrVqgGBVaVRsoZB48KVN",
  "key1": "3Cj9mJ2p9XsWuW6n57aEnGw7ST3pc6C5R2smAg1z5CK5F8WA7KZAAKymyz4xgotUeLo6FNrodZZS9CY7ET8MZ2td",
  "key2": "2rHT37om1VfqTf4WfoSUzGwEFyH7toeV24XqCWA4afWEVTU16qnqgRUq83h1z1sAXNiJUQAtpfLjn81yypwJJy2u",
  "key3": "4yVmbK7Ch2hS1XijSVBefP25bw8RYAeMjAx2y5MKYvAAsCVBJACh6jCWbSd9Ryfbjw32WE7T3U2RrPvUYJVJ2Dcj",
  "key4": "2LJgsgN81jR9zcm8tYJA4kBDxbYaCMy3TZjFMfYTC9T13X7z7KUCahDHq1y8nSP5AQUuxRw1HRVk7Y8HNax1aPNN",
  "key5": "5NKdPEvzSGbPpqa94BPY664qEqNpVPhXjXw3Qd4g8KrNJ4JBzT8DnmcmohJuFfreMwzLDAatawZzqtw8Vd26qmLe",
  "key6": "489a2ML31iD1ywFgaoqx4aVa9eMSEzoZ3V2xbu4RhH9qaVTgNhQxAAX3yZ6CtDvhihYvPfM4g3CwC1HZRvegHQrU",
  "key7": "3oEXn6UqcYwNQ6vVBJjZi7WjHoPQxapjdVA41cqrkcqyTn1Ej7SU2goVp7Z1bgs2y4ZZTuNfgR6AgTKj2SBYxW59",
  "key8": "2xYXDvL8cAfAWnc76kDtU6PwUtcmnusMvucQMMf3CKFxuk3JNvsYncPB8dkbmYyXEWVxmma7Gwd3JFPh6j6NeMT8",
  "key9": "4q8beXhPnGAxAQvdAqyyMSokysGWPhvLazSP3tai7ZH5DggqX22We4PP9u977Kyk2u7S18RxEkhMk6VFEJwLd7vt",
  "key10": "5ER7Rtq2pNDq5dXzCVcBm752oCwWYuFPPgwSVqX6XE5GTmmefAkt8P7PDFFQnzFmdtAAtzPhENWG92pchHFCCF7v",
  "key11": "5tPheJTrng2vrn33kBh9iUE1D3uWQzQPpEj1aSf17RdCnC4CBRqpKmt6vE7LXp1K4y414yoBx5hNMYQdmP8k5iVN",
  "key12": "4bf2a9a37jNjdGcG5rLqd8sPjenoq7Eec4RhxUBgLGSGgTMpw5Rzu1D7jtNoQ2Tbb6EiiL1Ab18nRdUKCLjb8eh5",
  "key13": "2gvNuusLvM6bnnonoY3CApmgGGCqRdQ2XmS4hG9e4BiG7s7hjC1TvRtF8J4o3NBRsdggUhHoeA1qbm7G5WTQzVRn",
  "key14": "5Y4HcdFEvJqPhM4BU1V6YUDHNRrjN679xroRc3e9JRY7WQjf5tWEJGoQ5MAUyVAKiHk9sySmubCT5ND5DZLtyD6N",
  "key15": "5jMzdirE5PDx8MsNsX9zKvkcs851VxUx91v4MGfksCboxocNVR58dGweTcSyuJrpTBUVtc7aewMrRdLk6BWGJ71L",
  "key16": "35FscowjixMNbxwTV5dXWkCPf9wAj7mPYmtNwR459s8eneZx4x5Bn6QgTYpqXmt1AAX6t3rYCsJdFBqcqWxR4MDK",
  "key17": "3jQqXi3c3u2sEh3wbLcaJmpaJYdrjaxt5kxC5hZbiUegZ9dqzUzK1ToBLUZZvRfG8r48rZbvY5Yti3AsCmwdDtHX",
  "key18": "URFygaKzL5nLJD4dEYZh7S9C1g2UxT96mUoX7m8nohnyJqycWyH2HLc99akwhAgvxz3R97vf4RqwQuUuvZAgRGs",
  "key19": "37LZXByfz6DE22oQpeWPDWUJRNdPLJzQSpje8VKpve4XV7N2HUYK9Q4m9g6nrEkKsPhmQTtgyqKLgGRnj28mCCWK",
  "key20": "Qy6SzkC3qXoaNaQ49j6imnaxaxGa2R7yLZPrXeSRDekcdEMVT6HsJ2EUTNbY173aQ2BuM6sCd1gprQCVNqhFLpc",
  "key21": "5BpgrQnn99JDhwVLo9JsW82vc92xv6whxZGwSMvQcKz4VNYGj4Xv8yQVP5oLvsXCe32uvyb1w4Aoi5sQ6UQ9iTaa",
  "key22": "4sLhMHFEUQDbCW4oubG3kz3EDy65STr6SSPup16BhL6amXXZaEsNEzyok9tpka2xKHQPbYJY3AmFE7McxB2CPgFR",
  "key23": "TX6gaxfRwC1nZnADRofKx84dKsHf3ePfQveBaTsiZGjLxjuXERdW5nnowsDorTJEPUKGzuA915Ps3NKsp3rZJ9C",
  "key24": "NuVhGN5V1TaTnFZnnYLikCCybR9UqC6GXMxEqLkZ7me1e98SBNp8MQB6RwY6wcgVahtgfL9jzZKwsm2Kbr5tjG7",
  "key25": "54juWmHLibrGHkae9icviANJxwZNQYEtS9ij6Q7tddVREMj4qSTdhnhKvHjT3Pqo8DM9ymiyeUXuaJB9cd7tugqf",
  "key26": "2EggU6mk9gHHjYod7AfizT7NrwGFfJVLAY1NNV7sSmbR6mwVj82W1KmP58cR56GLgxdRmDH5uKqVaRFdWgzG1yDE",
  "key27": "4TCkDhjJFE7tP7Y2ZmHXABDepBeva3hdR9hVwUeERsSREPbhPDkDf7hviLR1F1xAcjLehR5mv5dXqnUg4tr3hqWZ",
  "key28": "36ENErnKkREKeqiTDn6GuEtTM4ybN1zgj6niCE3kppQpRfhCETJhVmZKxeNUGjPGhYMTGVxu5DL4rPN7E6ZLmTBD",
  "key29": "4uKjvMdU1d7e4hxGSWpGCR81oH39ZVgevbNnLvRnJ7kBwFxP1w4vmtNi8fXE13oZgCzFakbw4ViGvHBRdwtLG4nt",
  "key30": "2DJvPyj9PM4dSVq2gJn562FtmdU9TurL9mUnJX3qkUAFJ5x3ekcpt9Th8d8PSEnzPpZUnoYxiWEcb2hXNgfPdEuX",
  "key31": "5iL1ZCJ3SX7JaFF3zY1SBNR8bjT9KnDe4YFtrjUQDbipXm1iWgrHeXkbtwpjUJDWNQtMWoy5U7sZw93b3Cv4Bqn6",
  "key32": "5ztamQBRmhzGMbhNE3fbMvTbL3Dhi8Zc5trsp9CFd5mmFWonwpgEuRkzpbbseTRveDp7PCuAA1Yb3DpmaYeKZrmq",
  "key33": "21qrtqtRVHTmqck9LUXy5Dcup1uK4y2kpkxyxCSV566j3ZHG5Ztrj3wWgYDHKCyJ8k9189PYxzSE1kifsNhvP7Ai",
  "key34": "3jwS7MAPsA2rZoCHqPc8E9uznt27roYYQZU6dnokXhh18fBzr7v1jNTyJY1qnUsC5NuKacLgmzG4JNvLagxVsKxV",
  "key35": "AHFhdvG1Fvm7opAyXcwECV3UczDHUJM9iErrm3rMqvu8dpGxHfNERXx2Q9ci79nWFqvoUPaoF4z6U6yoSPcjLnP",
  "key36": "5GzXC6QuT5uGshTJMr2xWWgAZpPMLedLohGsZFXfiJnEDLe7xhcaEXriTCmXJs6oA559GmPUgxPH5VQKXuEFooRJ",
  "key37": "5TiWuL7xy8UDF2rXs6sxtVZpVYowccCm9qvRgo5hDfAHj4YbHzwM3ng4s3d7Mf4Gf9RE9vdZuoUuqhkvWDpNstzQ",
  "key38": "ydT1jjUBH49EHew5yMnj3KVq8boCKLDM32JxqbXdAcjPuRvrv1N57fY4kh1bRTB6jcst463CmtcqmfTBLfMRNbM",
  "key39": "57bYXhSeL6yPWXC5wzaTfonoeheALJYNxDKyRzg9gGZWYfyQ7Wbmxhno8ysXAPhQTegCE5ZXz6agzMcRs3cY1MuQ"
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
