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
    "54myYtr5onUb8QNzHuRjvy99NwqU1mSVivkznL4BydUQ4rSMcon7mM31T4z62JsnvWA2VsguHzpuituxYxaDcW6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xHZ3jTEhhubiNw2yKpoSVTYBGbJPP5QB4Cu1ehPAdDVeYRKM5De2y16VAtTTPLeQUADARsobTMxEu643wHJRUi",
  "key1": "4rgrwq1D1yGcgcMYyUUmVaAubx1WXkmwGmMvUf1tUxCSAfiv6WtAFThqoSNYLLDeAHpCfRy9HJowVsHwwKh4rW3G",
  "key2": "oPVTcqVvfNSDGmw8YRxu3D8zkGAA1i2w8hxh3xvhNfSLhKGwWDFDDeRCFqaaC63MJrRvmwwXFHB1gxzWSuicLBV",
  "key3": "5FYmdzFoXr1kBeTDHmdhbizkQNfYsJAue6WAq9CD7NSVQqoBhzH5fJm5t2ocCD2QgWZ8cwtey3xyHLfZzQzAPU5a",
  "key4": "39zzAeXddjJgwqH79FBiMny4xkyjsy7cHwRjvoid4vTshURQcaeTsA7K8Egfr3Gox4AhRzZAucni28j4k5MigHty",
  "key5": "2zBEu3PV2zqBD4qjqc4XPhk8LxrX8NAWKRMPy1NdRgmpEjKgRwbjwXr5abt41ncMjdrCco4bzcxqFjB6P8Zti8K5",
  "key6": "3MbfR8v9oXCfAZc4ariLhnGyBNnB2ViifLzR2GuTqADLtBvdU1xGV2SfFLVf6WSVHZH6zEi9oKUyJrA45YACDL17",
  "key7": "5E1VxKiWyP7ohArUSgYsYdhc1HsHpqCtdEboGLjRd1c8oKw937e9JtXVYtSyM8USJNdGDAQdUqMJKrDbWjtxxqfU",
  "key8": "CvGmhJMhj8TzeEaC48MFfY6Yza34YsPueGVZLkTm5S6KyPDpeABGTFp79nFDuPfQgr6aHXT5yFVoY55VmvJqD2Z",
  "key9": "5nu6BaJZoCNoifP4AAp3VeVUYhPXhj7K9i6aGih5QZDWfWhcQhhTspe7yMwdFRoUq63GqyhS3yGhPPGpjtkFyKFn",
  "key10": "26fmwQxDeC4EeaNwM1eLTXZ1sSrwvFVaErBeyCPNUmncF2AgCH6UNQT7XjfCkRBQpbXQ5BT4VkDRhPmFfmvdKEu1",
  "key11": "4ezXWjhSutC73tKbdks8aqKsL3n7EANKnTmWKWs4JiXxMbtkADEpfAm5LjgV7HVR74FPm5Lg4Bh9njekz5BRrU5J",
  "key12": "3yNC5ZhhEMMM5SdLGjC5EaqWRHY2qnAgise6VE9usnxcYHhxsKXGaFhXPpsAT4pHJfaPj6y1rUDXKj2CatDh9GhE",
  "key13": "2nv7bR8tsSHHUuKJrCq2s6ZpVLQqzK9dTzkXWDt5gacioszMaFEfDkF1wb64TAoW5ecVjmwJb7UGzKnoZt1fUopy",
  "key14": "4rube1HFVQiFoY8FJFfH1vNzzZ7qL7tM2YjfDk4wFpJJAtr6TzWeroXDyhMhVz9t2Qij2LsVDCHCtNQJzVWcfKBH",
  "key15": "5rHLyN8B5dkazZUJM3ySoyydBRavw6YTESLpr5reiNSncfHdc1Fa8MR2KLb7YGmJgwqHFeaTwyshGfyqXUppzi7K",
  "key16": "2mFY23Vp6E8o8R183fJcaLtvNE6ToUHtVMtUkTRCF23fn5EkmaeVNNaimcXrL3C3a4A1txZi4mCH3Aw8tChJZu3p",
  "key17": "78VrcKeXiDUsJi3K1g39NaViCfGgoWfBscuA2cDQ3fCyqKKVYhSaZVC8Wubc1C4HoU6iQy8DP6w6DXd2GRxeUk3",
  "key18": "2PdBWjpMV3b6o9H5Mge4CzoNHtr5eBkC5Tx6fui5PnN5TwEmjRTnM45VEJhBB1i9FZ8SXtZwhM3G9NZQaw8UW8hw",
  "key19": "sTkAaHikyogVBrd3zXsTLm9pVZr1snSnAsgvfGNo1Mpy2TqXZJPVQ79wnoGnBk1F6m2qGrukkBBtBtcMyhaceju",
  "key20": "5vu8CMbZ3LGfbiaSuYubh1gaYqzpHswLU2hMJJeiC6fWUdVPujAoVZrW2nWdKybjEggGXZfDgztBySRPzYpFjq1d",
  "key21": "5ke4SWPJkp3tRGVStcZjKmg9o2a27svL8xUtE4DVB4K5Q3BuSvQjMVyAFWswj4ZwRGGgNQzWzWcX368vR9VzQyR7",
  "key22": "VFQ1Mn2C1sotu3PudTrsS8CPw8kZHjrCYTyjy3PXcJSjmCxL2uuV3RxvvkBVwzm8S78qq8HPK7x9KZoCVDaSxHQ",
  "key23": "3H4mpiDDR4u2UKWGvXZtsFsNQL3qntvqF7KNihdoCaSJ8GGqsvxUCLjmkkSRMsK8J1FBXxBLYVRLmJg8yT3PLyVZ",
  "key24": "3bwwXbFsuQJujMChTrMEFLabPHPRXcco5YZcXUzSvc8GFm1wdDzeJReb8iCp1zVFyiFiuMm47AJsLzyS9PGxNm8A",
  "key25": "5xvN1sDnz5GzjskA4JMWjrHNQwEeXTAywJ1JfCQybUUspxkDiHeocDMBCfAQrbUK4pEQHg7V5tXcRqiENFxFLWaE",
  "key26": "29By1jmfedogdsmqLteMNrqN6pCoHbb9LMLUDVk58GT69Ks8VgrtGpqG8CYhU5g6jrovLimWaRLfmzMBQqRqQsFN",
  "key27": "3kFxPJrajf4zRvtk251Rk9ENASU9fxsEUhMMWkwNu7Q3gKejiH8EDhsSG6nqDwZGWEDoKhjRPcgEYUmS7vP3UD5z",
  "key28": "5gdcFJiiJKqkZrs7itqSkRiYcZQby54Rw8Cu1Ju7Zb5vBTrh8BEComn6abKvL53JHVzcD7jfcgQmwSBcyYGJWYoB",
  "key29": "b9MfxiHGDurWsbFAeCBFjMdC5RzBMR1qV7k1Ywb6XkddDmVsv1Sda7TQct4EkKnyVYqm3he4vie6VSauUjazRZ2",
  "key30": "3zsPVuQ3HKMbRaT61yxPLSuemRJFEVAvbWPUFcc8aacTMyy56RPUbqT5og9sPY7uTJmno3ZCgZNNGn3SUdf7CuaU",
  "key31": "rTCmxWg6ViruZk589T87DJwmBWecTDh3hEWQP4GZMBcsFE98uNpfXvkH8Mmw9B9XjVvRtsAkdj1CAAGtZgrex8g",
  "key32": "4vLeG99JATJsMqQ3Yd4jpjtk3uzDZmNchjgY5bbmtHc5Gkrd9nSzQj493gsGwTFCw9ZbxmVU4kT17GzDdMQMHTvz",
  "key33": "3NYAJxdGWcHSrGFPsZ9b68MWgpc78wHWJy3qqmmaYzhCKGgkn7LMMHeW8jmJztdqXsL9EXCWGTRENGYkZC2U3P9P",
  "key34": "5KfthpUEhcWJiP7Rg1qUyZnfXZ4Ghg9Q15MmP8VVDqCx69ceFyLgPAhTJsyJNh9RkmP5ietLnKSDDShrVbcoivsn",
  "key35": "4pbvf7hfbe1zDCgJDpU23Gxu2EiCznHcmLJUkmPJosRjaZ236LcrmYnYESuqi6AwkTjcqAJFTfBpnnDcFAkq8jjQ"
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
