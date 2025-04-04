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
    "3zptsi5h9bxQA2E9worW5TCvf9XrzDCfVf1hjxcPTprUq5fSpwiKJ46ZkrJqwrXtggpVxJncXCyNpbQbH4nwdMQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nz7RMUGkS7tA9AwwTKwccJkn4NKkSgfHn4Er1qdQNr2NXxWoC95mJfJb6EQ7UNL8tRFWfB9iXYhvcMmSEYW2yoS",
  "key1": "4sacnYBgEGKRktUXZTriuXhZiWe5Shs2CgPfVFtoktebmzccm27qjmp9ALcp8u52J8HtCs6GHUjhxZ3rC34r42Ar",
  "key2": "7TrGdJZsLBA26ejA9SVUUu4j7YWgNKqENa1LZpRbWTjdyZebGDSFbJWRwJSAZ63Adyt76coH4tHoLnGMkvs8uHs",
  "key3": "4gMdRhePSx6UWcqi6whB64cVdcWNLuvHGCbSecQgX7bbQToWFxiwiMV7ezV7XMtYkAMckAFcrP52DHKtcbUjEsE8",
  "key4": "5zucS3K2HMPraUSqMobP2uUX4Co9WSvQVjyzLFwBn8LgcyjpCd1VZMqo9evdtHv5sB9DZGXWqEwxhCtnmXoZ43rX",
  "key5": "uou8njjWhomoi8qk2PsemEcesnKBeKmYQeJYJxzaCyknt5JpAkZ8V1HLxjUWrxCW9nBTGVm3ZmZBWGShRDzA1PN",
  "key6": "H5ErxKRgf7QEpJdvymS9EeD6P6iTZ5MdGKLVidHNYQsJGXaL96mehs8MyCdNwbhofFgVQZpU5myi5vPZoqU7wbg",
  "key7": "5xmD7hz9W6qrQ1xbkx9LPUSMSuFEBe7KFH2Y1tGHSjTTT8AKH4Y7rJuRWqbXzxyGR7vsU6D7dY4WRkwhLksLgFJb",
  "key8": "qY8KzTfDQRmzYWbDhTpZUmJhdhmgZ8c3o6RXCgFKWeYy5k1zno8peZTkCW4mqQntHvcUiwg15fEuiD8DgM2dwBT",
  "key9": "4S3JLXNd2YMMZZuQoQyVTKGaHYBSmjTDfgsPWobABhVSr8dHLBYLWKZFGDmaoST86zZcXS3nAamvyua4EPLEaddS",
  "key10": "4B2y424rhft2sv5PfNzqqxqDQETvEZzHU7xmhLPPGyppTkjADvVUdT6ZFJv9FLgpzKWcceZcg9QGWT5iMJi1R6GC",
  "key11": "34VAX2yRrEBE8LHe1i6YZ7XEXEJink4aUL9Mik1iCFQCvhUp7SDLoKWcikMoBBUwFDahZAma94vfLdHiXgxG7rmY",
  "key12": "2hhJ2yGaMGR22JZ4E1Qz5kfrDKNfdmirSd5REJ7goXCSapzLjUxVDqBStwih4JUcwBVKkL88wwWgncfDZhHvQL6L",
  "key13": "4ynv2fiYY3XjmeD4mLKGFqvBjCiEdeZhkvqJbjhjTnhaY4CoAoHEgRkf92ryt9SmUzhzhFi4BkWbWukY2s5j6CvX",
  "key14": "2Lu4msNMtv2Jg9MtXzNyiTjaaaYHxfa9w3XU5rCbfgRRsEnU6oCTuNfSKdM8dSdduM1FSrUyjDMxKDLHENknVRBE",
  "key15": "jjzFDhbn3LmPftUMSirS8LzXd9BHaiVKhaeZ4ppFrgyAunm3dAqkzZc8rvaUKmuzYnzLaoDwJXTjqQJT27oWgdQ",
  "key16": "59okWXG8CJzjWRCCk1kFkCPk4AHqe1gSEvBi87eY8pAaQ4rLJZ7gRsi51nJwkcHJ9hdRAJFKGAkMMAH9dV5FoXkb",
  "key17": "5vzHtKhsboYpZBkTJSfhxiCNwQN5QxiMgvjooWwzFzHzpNBV2kfiMdP1GFHeaVziFXrTMooH9tdUZcHfsUuY8gH9",
  "key18": "5Ron7TuqEYTHRJqbRki6KJiEEtuATN4TVLEAGQTKyEMB38tFk2L5W6Dy5r4GpW2fUMiG8Jjkv5Z7dAsWio2KRDHS",
  "key19": "62dhPvZyNKQCz8c45QvAdMGqVMeHdsL2NQZzBKajCBsoft6BuiR2xCaXptsog84WjZDAUVo14j7PdZpaXEY9fHvg",
  "key20": "3aHj5dHFV1cyoaYC8u3cei3d6CXMbZznopAdyuya3exB3yWyk8Cz5x5VkJ4Myjeqvb6cnTSSSZZ8Vq95s6xcAy88",
  "key21": "2iaEVdhEPn8npJpDZaZzr8fGab5NsrH6tA5pSLnUHZb8eqSkA31JBb4tjaDksDZJEQektfB22v9HvdusmTpGJcgs",
  "key22": "23QYdKsnn8YzTA6MDaYhtYW57F4kkJEo97PntbD4Q4MzxcP27V2SX6eL6Fj1kB4iEQBQYrhqtJ96g2Jnh4NiPQut",
  "key23": "bPLd5qwoiy7suVtAyrf2rYFnbjrw1A1pjrnWXHcetpd6nGM4xYSgfQ5uJk99RpxHm89aowVWxURWRiNAPadk9CA",
  "key24": "5KhmseU1Vg2WDKRb7PhQ3y95XSQtoBMrByKNbcAgFY5gdtRV8oGcCoVs4T5FA1esGzchjeR6e2yYome2NNr1PBmV",
  "key25": "2AKhXdM3iirPiXvosPtwWRUGoyaNPtNq2y7mMTXBbLKsvasxBJ4PkLqzsjyASHrzr4ti4sTkDw88e2i1gthoTur5",
  "key26": "3oE5wXa4cJfohgDVsWjj5HSPmtiAkHRCFFaHZNisZKPTDRqZzTeTuc6SwfzJ3hWdKi7yL6h2NDT6q8ejmwUpocdM",
  "key27": "4w4v1hkyGQV8cNimHoj1HCAtzyxakyXEX7ve1fyCYxqTa4zpgBPYsDDrkTWwFjPEbPi55HUyubQexuJivu1YmEso",
  "key28": "iR1BWwAkCfJQmf2tfKcbxf68wdCWh2bLLWqwhSgvFcxyavQC7eFwhLVyJKXycjXpbqfQ6jpi2XHhzNCNxfkr2m9",
  "key29": "2XVYfjfWBP2d943Pk7EQVt21pz1bfP4SuYK22pLZwF42M5QatkWLYCs5eGtpcdsmF1iihtrNq1XZBUMKSGKsLeyV",
  "key30": "2XZmS5QckXVRFoUZwJ8V16CP15tWLraRGnEPSLsBKa4QjUzTtQ6kz3JKaJb38t5SEqWSHTb5bUrd5LcmdZk2KLP1",
  "key31": "4qWaA1ntYMLohiRxxeUf8CYUTdZGYbq4QFBhGpzNADvKFgEXDbHctRUAEjeX1upc49QQ8tEp19FVfmZKmein8XtU",
  "key32": "45uGcHraTREpKZWsSXhkJNn9gGptgExuEQwBcpi6TAcQ6gLPyrPyLc7wBMAK6H5CKR71wnXAiWv5i6aXjw79MsMe",
  "key33": "5aNEr7gXLD89AtqMrmNdqaiAdiS9F341XMisoHFc5qpamHvDHTkMraqamDdmWDFkPHZpJcmxzJS5m1TmvgcM3vHK",
  "key34": "3TUkEemwtUe5TyE1gVKGtGjaiuXS83cg2gxNHVk12eA5yPxHAgftbpDq8sB29NWqfYCHNFDJVAPZL2AdyBvEvppE",
  "key35": "3aDtpLKh6HnAdBQS8hMzjkZxkJXxvSZjE98YLHRZo3D9N47Zz7QVACVD2qDYuohCwWxiM61dV2pRJnijeXorAWt4"
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
