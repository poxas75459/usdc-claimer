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
    "N3c2WwKUSwVetSBxfgbpPdFbx7VBYMGUasvau3ACtJNpeMy8cm4s1XnAYfGWEP2JfV9KBqfLRRL447vcxeY2gq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMcexXw9eHFzcq6krQ1P9BzZ6Cf92gwm3mUm9nn2iT9d6EbmSUXXJxsWzRhsFg3BXQPtHaXxSKCVveh9WoJbHf8",
  "key1": "44PpJjM9VTudYUZGbJdEivXntxUeCh3WnC2FiFAmQ3QPXCPNW5W9YMMPEMmk2LFHGGnb7s5544GoVxoxBVSH55jD",
  "key2": "3pNf8h2oGDfGcSQqaxXy56RKpsXQFt8jPnhMuqTc54eBTZmq3rAEYKSeQmFQdDZEeZtjkobtuec95dtGGCEXxW12",
  "key3": "4wro6d1knEXNW7GCGzqHjrQbS9Xd6TwEVJBwx63VgUBC76QWBtVC2CrYvo9P6czxB8nYcmbWAEh1pZopQykfpyyC",
  "key4": "2hRkbWWDkHW2r4yBukvJd5LM5noi8QmnjdKK91cKJ57KcakKWQoJimuhjQaCvtJagmDakD9GEZ9yvRhHwnnM3HFq",
  "key5": "5P89DcMVF1bLijVbjwPcYGxgA4fNneLKAtAPMnDVGEuZnzigtJSPm8VDmtd9Wio2RuEFm2M53WAFFbxuwBeCCxon",
  "key6": "5J2eXRrvgXFg9PUsHrHvKbCL3HgLiBRttk1oVtraETBsTKBt1LsTXUc2GL3cYn4Ecxy4eEgSiuevb27M9W5s46mC",
  "key7": "5w1Mdcu2GusX7KRv8zw1ktYhD1hEUCVSPovy6X24naHXdzvyrXnn6GAKLmgyNVmbZESfEkKLTXD4KXuRPqfTe8ZT",
  "key8": "DkLrKRgNaZdjMsMCV8B4Ysy4XiLNjxnGeyjvyB9SE9jmEFRa88nhhdUoWN31A759scqgDfrg21FnVv2ewUEo1q4",
  "key9": "5Ux4iq3nbw3i5Zv1cZ6vCUZjakcV9sKxbSAVE3TnEjLHdtefX8Yw23JKLMpqqCP2pnjkVZVdrk7RjwjuuLMpDbuk",
  "key10": "2Ty7KTL7RFV1Rtn1crmqQrk8wQo3bGnjEJrLCVHPThxbmjwA6J8TqW8PrGCCvQA1tmRZyCD141yPkmaLfvLpibPM",
  "key11": "4PMEfqyP8EWjpqxGc2JGCbhzy8oZs3pn3ZSspJhWJYVAopBwjZsSpykHJxJKd7yavpEWLUDCwyjudimUxhirXUGZ",
  "key12": "3jGEr9iGV7EKMNMErP64Jv8ZaFLkkVaaBPh6mDHJ8FDBmzN2LG1dPR7cRhyC2ziBoLVDmfHAY1Uuwr2WdtaTMu5o",
  "key13": "2XT7935iHqZDFoZTi2EchbajXzCaTiK98tXJ3TiBdgBpMNTFJTBs6JuimKckUqCJXpi6S7jc7xd9WGpLsxD1Amn9",
  "key14": "2b6pdHp7oALb65doyB7766F2FFtzGnR96U6rmLabFPgsU54sqhcs1TYe8TJDgKq6YhQDWRbLypcW39t4WyaAfVx1",
  "key15": "EwGvxQxnJncwkSEXgM1nbuRoacJunSvhMsZGpAgvzZc3rKhMirut6is7ivxwqrc82M29mpXFkyP4ahG2Xry4V9G",
  "key16": "4Ptupr5Lw4cbSNiLZjwJhW4YEHSLFKs4DmGgbswPDs5Ay39wSnsLSe3a795NnwBqGsS2JmzxF35pTuGpMmN7A2NL",
  "key17": "XqXRL47BY29upmNkAd11Z9bCrAU3xdURjSZ7NAnjNvRWxZ3VbgtYiEcpQENwj8Yzyq6e2nBbxrJSnn5HGMcTKzN",
  "key18": "4piGUBVxh5zCvfw8fBYznwruPpAg1RnaANJcsMFu1Y1ro2CKeoiM2YmaXG7K2Exn5RJh4amrnH8ekni359YEaVgU",
  "key19": "4Txd6Tu6cyoL5mzmXwjbYYAMKiVE4HBDt92XwZEcSmRt6mqeyjMRjvvetA8XaviipDARF9VK16BS4A6L7HAxWwfp",
  "key20": "2y9dSCnNJirytTNbeiYnucF3QbnVNo2cU8qW6dVHiXqzXYygwyPZfAnPD1koj8TeyAaPzzNtdTbENpEwDanU9kQa",
  "key21": "4uKCMLnSXnDum5cKHUvjdT3hkxEErof7grXSJYQxVVbpynvrsFoM4AaYKhh3thpoe9v7GCgtJSgUqz9j23gLkdQe",
  "key22": "3RgobEmEAJebCxFSdaadVDejiT5SJVbzX1ra45Db94aoADkeUmKL6dojwGFam6AN4rLH4RsNQhDW7ViFTDwVd8Ga",
  "key23": "41rv6GtwbipxFQYoHKdo2TMN4Wr86TdhMaX7iiNMGuvenYuQeU6mXKuUNE6EvaKw88PHb3rBygk3Ey3i5S6ZTPgt",
  "key24": "22QHiBRzdrvwoV3DsqGmJ258jziUFADGebuoLxVw6Thy3LtVrK2aycWQHmJ7E6k6vFRcY7JEgdk9oYncaXDg5aCq",
  "key25": "5dgPqrppmuiFPGfT48U7D3MeDufN3NwFAPHiGAB9xwSYqS1UZCmwbm7K7X4bjkYyzNJhvR7Ngkqx4yawJRYhCKCQ",
  "key26": "3g96SfrhtnYetbyhS8oNKmFoLASQWWfuRPvKNKFLo9bzcnvkA1753pudGwqCdMjrvQAyHiDZffFNwSsjp8jmBq7k",
  "key27": "5E9SV5SNgGhv5qcauekBcvjUJGrxLazx9YsbryYCWi43PVLGF1Y6W8FrhN4zKE3u8M5BXQrgaDrDhF521QxPkVdX"
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
