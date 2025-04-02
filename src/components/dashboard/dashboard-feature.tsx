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
    "jdo1hfpLb96r3ZHTAiiRBBdZVaiMNEvaXA8uHCMZVf4c92cvPQBAHcas48HZbz342mzrkakUP4FtYpFL4gqfUj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYaBEHEbK8DMoowQ7R6f6YSpk8e4mcQTCvGU4WPpsoA7EsuvmSmxCEX2i7vGEU6fsaRGfMESxysAd6if8EqiR9d",
  "key1": "2WWqUFbFFFUntuyHCGxfNhU3hTdZ8Kazgc7jpuZN4qySrc8EdQvWoCCNaNR4SKzAnS7rRPjYVJMaf3x5gHEQDhYk",
  "key2": "239mEVitwMVfiuKoMpREVSZKG5ZnzYc5sC9Y1VozPrifSosxFnDjj2Th3RXqGFwS3kVzRoMQR2ZjENohfKMCq5A7",
  "key3": "59kP286EbLM1w9DWpCrvD8U1CGdCvtvZAi7Fj1SxFsP3f6qX6t9DeSoZxXKCKkcheQEBWcNaSxTMcTDonjXSog4D",
  "key4": "mDFquLYJQyU5gAnaMgGxF6oDkFyZ3v5RGdQXDRrBkqT7K6V9kFHxaLUzFBzLnrsWk3TvxtZ4cG6xVwLpKVtcLZc",
  "key5": "4PYFFec85WYQS86gXZumoj4aKmdgajv2iMbhQNuA69C5a1zpH1bXm6Kx4YTygKRbdkUVAV6QuW4nrsg445ZU2gqA",
  "key6": "3n4SERuAfCA57SMXTwfFcXEQmRgi9W81NjQc17BQYMvmKicdMdsdZHsbPJkGdgJkV96Yw3MDLXoRQ94WUuchnugu",
  "key7": "4pp3V5qCE211dPui863zHVxJNay2UzjsfEDV8z7BSCjkF8ehpG3ZRbxgqxPyLjfzdUb8AF1VWvsvTkgZzqRqFK72",
  "key8": "3WRTLddopd95TXjPUmy6vwNNCqtxM5du5iYes2UPwTAiuVpwka3QC8uyMQQ7buE8RFWAEf9AatcNbsPyMQMNYn94",
  "key9": "vFvmhedcEXAKApBADnLA8c8JfA4wxzCKWpRcGRM5MFGwqS6g4PEZFEQhKWtw9EAZkoJPAdnUwajUCbab58NSJ8w",
  "key10": "3d6pJBhcmXSSUZjPcy1LLTh9EPGr83qBxJAoLDUv5u6aQ2c6u8SqsCbe7WxxAQFEgsLVP5bGvHWooH7x5pyTkeuq",
  "key11": "BfGVH9qEPoMsKKoJ37eD2ELeMmEJ3TfKgLUxrodvfhjWpSzcWfeZLLQcjmrnxZzJkyfm4wScFKJRHoo2mdcXhby",
  "key12": "diBxdbixqY6xxnJ9jiezDQaA23w7ZWikXQxrSS126hndwAoFfLV4MRdiwaSgYkJDrAvi9h8sfAUFoegCACBfx8i",
  "key13": "5kYECmBZB1dBFUqCuG8PLMGjLZhjimg7iW2mRd2nP17jgwF8KmNmPciYA8nua3yNDmaMraZ89SiYzADpXJAxxv35",
  "key14": "5MY3jAAxQ1Ky2nsZ6jjsmaTWFg8zz5ujaA4j4azfworHL5jJo9pTxeFKn86Ez3fy6EPTeJ6c2A8s57Cqd8hchDBy",
  "key15": "2acVEsd4a4tzm1y3QEeDvZst9YKjfdDCCkWYduwvtXmpvH88PYFQoxUmxXqvRb1bzaMBzYLajQmCtCGu4zSf6UH",
  "key16": "2pWoDC5RjBcTRrDWnmQvT7wT83CuVqWYuXh28Jn4TTrGTZBZPfLUjLfk9SrqfpSHoqrh3sAxFmqdr7Ph6T2vUQnV",
  "key17": "2hL5pmSiB1RPKzFmBZVkFxT5JvFaFXvMN82fzuaEQuFsjyG7Z9YmaCDGcETZTSrYFSRAJGkB42yCYcHkE2QLRyAT",
  "key18": "2HbQwteGU699ygAQwkTBwoS6ecRZneh9AMaFAStVitfz7MXrDvJMhJVT5rEQYSikueE4Zci2QnYu6MDB2btpwNFG",
  "key19": "eCFVLeVKQgT6YkgTYUY3ZisUjWrduwm8oqCcRiXcG5zyGEe2HCurwHy5iqtAYjyGtCFm1PtsvHrSnXZH9iM97Pf",
  "key20": "4fR2q4hYngXLfQqw1EJ7ix5DC9vDzavoMyEWAGfnaUStaTG2ANxQDhcthUPHvVkLY9oJiU4k68KZfkp47ASyfJu2",
  "key21": "LSD8MsofrEPh5Ej2TxY9qkYkFxaVGbLdk8zzzSAxBwkreUV8D98xzZA7jbe1dzqABUM3bDf89ps6HDWgRkxBQBh",
  "key22": "4EBkU2nTy68NUJBmCNrE5bRAsMaj84jjNLoaGSJ6hfckJNFjzjGFRNuXtP6gDZKJmnFjDCUPLmZ2m9jjijV9oz1N",
  "key23": "3Q2Yh7E2xhnWKDkeHTi4iPyTrjymfGiVsKCmR9yaAx1iGxZk9umLnY6PJYRKsGu3HP27xvcLRSfNhXTpzgriZxjP",
  "key24": "4P12myMksNkywD4wx5kji8L1MSap1QCVG6UPwQ7UXYtzveKybfJcueNXGNTvJqfnbfGgoUBLT17YjMbByFidS3ME",
  "key25": "44maXeM6jKxttKhDWJcL8geoMCwdUJnKN8imffs9GnxcnVAb6FNrFGUYgRrU1mAGvwpmN2tDGQSJjxsstpg87UTV",
  "key26": "2ZFUSwNLSjGuwv2FchQYWeqABEpkQdFGaH2XtJS1h1jqzQ4WK9GFxdYAb5Nqq6cZuv9ja4vNbArDqCwCKseFZF4U",
  "key27": "2JVdMD2sQ3vxYvDFBQ54gHkyJxgHH2rd8AVfqEgErNpFnQsWcWPS96z2cMvREipU9UwbhfEo2SRBdzzhe7Nmit71",
  "key28": "53YwWuKfVAFMyXcPcu9cAerb3YFXF5NhQem2HYy3HRHgPNic3FjPgVoQKUFMkP6hYzYdGFDA9Rd3ZyJ8fAHbseRa",
  "key29": "44JuRnQTQMEY9KNdetbpy8U3tRFmxWqpb9X6MYYeprQZQ9f3znqwAUuspzKtSa99sCEgB2tA5zTDM1QZAtquGbU9"
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
