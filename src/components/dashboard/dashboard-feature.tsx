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
    "3jPaeKEut4Ljq55ERv6QaxfVNbaYMGr5g1Q4iaymPQ8V2ChYEMihRZ6wjMTJxrFaVZWMvFQUuB9t7yyMyUDdevNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wne5utr8C9YPbQ78AMcdvPTBZtb4TVmfMbumKSSBbG8TuReRBymEYt5xfiPLVatPnGTBzLRbFd7VbuhkbJJvpTK",
  "key1": "5axHiiXdXKoeL1ckUeYgNrTUu5QAPvuLMe9ysjQF5YySLQk4DYu1SZx1oGCsYMUoxrqBNFznFA3WZdPprsBynd9P",
  "key2": "3hyZFrfifGu2nj9EU2ifatnRbBjZjJT27XFxFPuGqu7ASYT6CFcQgLkf7GGsXQMXkewGS3E7G3Sa5mdBJppT47J7",
  "key3": "5aQzFMkQg9tmPsE7USA5xdhx4Ymdckqit8kYePitN2fKxkDQZBeCBAveCUoLxP5vEA4DDcT6rbFfukosZzr5ZGW1",
  "key4": "2SSLRhTXPbhYSQdhDzxVqYBsN5pxxeUkNsEXdDFJgGJfZRD4cMC2gvv2bDLhBLZAUMD3wgbkXTeRzDYzDbk5jPYs",
  "key5": "5iHe1HKjT77cXNWeG2ZM6TMPtmhiGBky6kjqyJ9vg2QxDWUcg94orzGm75CokyHttwiFzUiH13etiqGmWACuTTL",
  "key6": "28keHvNJYFiyXfLdDEWKvwnfM2iamfGdqXpEM6odWRMjziy8GBUGwnYYWsMnFcVRCD3WPRZMHmgjZxAFmnVQweaW",
  "key7": "4MF5fUiV8froguxfZ4EVTSTQ1FA46jP8uToUnS3rWx1jSEKzz13xUe1UVZuPXPTDja5h4Bvdc8NSp2oDzLxL9fUE",
  "key8": "4NTyZbhAKuBu2FMNz179QSGsAEYGHJ9VfKMxFgcPXaxTptFVd9y568Zs6cRiUamdWTY9aDBAZTDWFDqHqX8xCbB4",
  "key9": "2bRrH9Yhge2BbGfZxnPJGaGQWfx9oV81NoiSdmQDz8JB6MNtmnnRVm9C3ho3F8ihq1P9ETCevQmFpnHqMwFW5teJ",
  "key10": "dJdegD4A8ySLXZi92cyGadcB3sazZj2ECV6Hq4TzPnLGN6pyBjBbvkNF8ACxkkFepk8WPdMNTQD7J8tWJ7DQJAF",
  "key11": "2VE7mSr5AVsiBNoRciCTP3G1yC11HfHyKXxQ7yEWjgW2dvZQArwLp7wi54NKstzQUVRpLY1fW1VNiRed35132CEu",
  "key12": "oddn8QByKghVJA984TiWXWJaZy3o3BUPbeTBmTHx4UYv2yjEVHidqy8sZXHEQ36XFX9NxrGWBN28JEpy1rPCXJ4",
  "key13": "4FmFAwBnnS4dbzmkBi4CWM7HHGThNa429nbfpoFyYwXaieQj4YTArMCyKixE2QexVPnYi46f8oAnEQe371vhiCFC",
  "key14": "5sCmrEQaDwJCdCYGFLp3pcdCwzTvi7PAHKTKQv45uVfLs89U22TeHjToTxq7f8sxAKeo9Zcx2x9TEC5r6Gr6arSd",
  "key15": "51AD4bfXY5gzcz1WU5cAkYujjYyu85zJGHABP4DbXEANNYK63rky5KCzBurcFG1DxexdsBSsRwVLZoqwS953fBXG",
  "key16": "3vvqczfCbXEtWXC5qK6V1p6wijpcxaAoqfdWYeXg1HAUPheLx6MSMRRHSg314FaoaSc5bpS46ZaQxaiEuffJwTvc",
  "key17": "LBTmHi6rpVLLrK7Ev55UhM3jFvNWVFw4dx6jz9b4g9XWoeqPsbfokYF2Rzu3YmNFowNCuqntwy63C8runwahMmS",
  "key18": "3mmS4ePVFfEDFWR9fwxHbqzpK3MVAC8dCbkuVjRTgAPXZ2AMvGgmJmvK3hmHRQQMePDqjsZxfAmY3m7M3Empusma",
  "key19": "5HmcTicMjJ1fa89HdehZ9rMoSeD6Qx4JhPANo39tTmyAgaW5Agf4Mb3EhSDjeR2szDoiSU8nAE8GEciLF2EQocjR",
  "key20": "24cqxrGuGg8LmY3EcxcMEqEeYNGEZi7HRv9kqC5q4zPCS2stVFgRgLT2VC55BiQHugogohdDooDKXLAABkVWF9Tu",
  "key21": "2TD2fSoMkBiopXpqvvYGinT6VY3AT7VQ2J6cFg4TvJBGnGRGXGzEXj4PaWBa3y5D1NgEJsgJVyxjZvNpFmcB3vSf",
  "key22": "6A63WH5To7XJV8hefU38euFhP7P3dPyopDpgQ8HrYRTFyv7cGFP6mVU4CfK9sUK2XQZrTScWSWJP5iryvv1PJab",
  "key23": "32EgQiBSjvSzfzmgSA1226et64Dp2Q9VPpYZx8fnyPFDzqFkyU17EQ8PBofmuYgF2c5Yxebfsav1irwNdScrxz1B",
  "key24": "3MoBbj5nohSiBKSiUbJV9w7GwjNhWHyKUrFbkweCzxoQYKq2hQAtvsq5a6LkCoJSW3L3WVK5GAskDKUaHr3PNkQr",
  "key25": "3UPk3nMqnmq4eYCGKnPrLsefjMbiim8NDbXUNuS46CbejQHTXPXEaZcSK3GhnodvUpKKszQFJUUdGNJpZT3hoS1u",
  "key26": "67h2JNu7xcPbaXrqnZh7FYX4owmvEZw1dYkhhg9moiGuhzseYfYGwyGo3NvQEz59VfAmbSPrS8qdC9YUvXwBkdLz",
  "key27": "4Wi1A97E6JgNQbgq6aNBvhhoqiEdp2AvtZdpZ86peLEV9qSu9kDnPSQG4YJW1ESVhuaZUTxvUdgDwe2xkWD7HnN4",
  "key28": "51vptF4SFr3oF57JZcQQLiv7BmFdesEvegMJe582DVMEq4K5e1kcrYFEhsM8YyNr643fkKSLvMxfhP1bCemhPYcm"
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
