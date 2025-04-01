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
    "2nqnSTEqGnU8tJ5xMZEcjJGyyD8hEx9CmeP6aPovAnfdTCdyg37rFinDj4K6Ng2w5kf7LQtYr1AFyqXTGh2Wc11D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XTAUvcMgTYfq47T89Cj4bKMoHcSY1p4r9eB5vPvNagEwrjL3bn28xwdw5ec3rFePA3yjqKdtAuNdSNaZaCFREGw",
  "key1": "4qn2ULc8TQFTVVq6LdyMCecUr18c5zEqza6hYJzkcDNNzALAdde5TM8P1JhjcaAyYtL6MtPCWTGdAcePd3CCqsPQ",
  "key2": "3GHs63UwYbZN9ukqSB5joXdGKw3XseFX2gWtWgQBHyDw1C5L2fftGNnhndEX4zUSJFrpm8UcpKe6XYwFk9fWMtBm",
  "key3": "61YVa4eAXtHnPhJKgCc8ueYPpd1oq5LrzeRFhcrPxJfoVYWhR5VjYSY7SKxyNUrYicJC2qjv78yUi9KarosvuW6X",
  "key4": "jsAXACMX5PQbmAdZ9qsE5ooi7YZ8gaFYQZfTWNhL9ancQuiSdvLmpM9fxvN5D6BdkMckVpeesnGqMJBNsrfdF1A",
  "key5": "4fxPTJmtbZtkVDWKYvRbcNA7GmE2vxyCD3G11TxzAgfkr7TikN8eeztW5nTRVGDgxgKZNrErtEesP7PjHinEDTxB",
  "key6": "4WeUkUVUu6DgRrUUa9dKbCvELGT5zWnQaJre1BsWPfmpYNMFypcWt1Vjy2pnZvS7r7NPhowFRSmWajMyebwutJwU",
  "key7": "51FQQbJTr2HHC3pXh1GGeMb61nYgKsTfnLBR97s4nBXdJKeEbw7X88XhkZRsH8LQjpUEwQTpWCcGT9Y1Furdrxgc",
  "key8": "5b3Smv7A3kq5DwSTSdmezCofC8FV5zV462Qz2Dcui8xyytRyR7As8BpKstHGmRUXA39qrSRV8UtXdkYBTneNjjme",
  "key9": "5iyyJnKBPfLrZjkFEw53JuTSe43zxx2DyjUN6pAGbgWBerQpq1mr4w1nSHjahqThjrXq6QcLWa2CKwbMgsswWq52",
  "key10": "52ZGjFrPFsf3QMxjGrGsYb4KN7Qf2T6rojGJBocLx6s3MRqsPAEEAzVDY5KtWLfGW6Zok8xC7v5P5Zzq2coHKG3J",
  "key11": "3RXde4ZbMddA89BbkvwAAeNjUBcUFdRednPVfQdEJXsSu3U7GvCGuTZvnmf5JkdTk8EmjsR1Qxzx4mGzp9dyWtK6",
  "key12": "4h3X3kkoX4BySjZYvQppxL4p6GzZ8VvLREZ1pP1w4waxg6TjzvgfQHzawMmnhBDRVD7r8VYUNkT5pdwbeknKDi7G",
  "key13": "4ePsHbek2PGKTF3WvE5HrM2MXkHj9LWN6djPU8ciyRFuajmBniQXPrCA832q1B7DGo9c66syoMWpTjmHzZi8g955",
  "key14": "5M4RqhuTgTJW9C8JjLUq5h8fqJnopX9rM7br1MVtdFPMM432eqXYxq9YjJDf4Lvnqp9mG9Qo3sSrMsGyznRdRvAR",
  "key15": "67aFE9MoZjLABvaWpUwSzQe7DYweTxtY9rTqS8qddjFjc3g8ihZmt3Qi5E77hNE3mNGiukT4hafF7k4wrMGFMFQn",
  "key16": "3hngUv4TzMbcFeCESNVLpyh6gjxgDQhpvJEA4SmNJHKBcXS1u72o7w7buWkBLpqYB4xWRUaCWD5kZSq2oKcLjhq",
  "key17": "4fQtidJtq51JABy3j8pMuBznDidZ5u2SPJQPMCWk5i3q2F1NzEU6G6v57CrCYKTNqGCeU8JvfijHmJx63Dd4kFN7",
  "key18": "z5XWMGTBd5wCSqFHBmpGPCb4b1piFz7KjffQnPh1bSyR1oEtmwn3bv7AJJVbBQFfv8N4Etm6dWN18eDxnQSSjb5",
  "key19": "5oJgsSbSvPCW4F6P53v8gRJzsAL2xLCyXgLNvNSj5hwU4tQtV8ZCpLuntqymPdGhSQuqDJBL24oe32aVKM7awqP7",
  "key20": "5vSjKFkgKn3ZehK6k7sZAnK34jbjvrkXLwaTq63mswxSN3DyTq64vG2FUxySeYbGF3REZRshGtLLu2szcdYZk1oA",
  "key21": "2MMcjD5GC87bP3ipAJ4hf3YTavjNYCY9mudeC3SHBsKV6ks21pG5ZxeViwVE6rfWoFX7yD8qJzWzro1v4LN5hWrd",
  "key22": "4hLgdP4r4cQYngrsfUo1LhWMgnKC3weuod8MmktQUJeQmdTe6TFpYwRJzrvPELNzc6WNzExHu2ejf23qhFAdjc4S",
  "key23": "3cs7V6WmeZc9shxVgjHDEeK5sgrzoVHM2szYhzVTfPfhhYyCGtreadrQXcdDHHWXevYBLcPGtKAaXDXRNVNc2LZT",
  "key24": "4pWd1U4xsMbKNjfvydt8ujuDBtm6B7A7N5R6xsBHSxLEouAuebdyyyyxp8fZpKfbsfvBJp81G6kjG5nzqL2iDuBW",
  "key25": "2paCwohYvWe8cE36qzQ6WLR1nNVWiu5Jjbt9Eq9ozt99dt7NNWBzVJufw4qqzo6Ki2SUqQwzvFWGmx8tEoznvCyw",
  "key26": "C3pFxYrJitwcwCo9D8yHewhVgiHTDSfTSK8ktedu27Ei8XAxbbgZY7xoUeKSpRNBpQfsQomiH8DRdkRJCWpD299",
  "key27": "4sfmWjrUq6muRmovhRE4GrwX5UxMGZUww88tTMmgw6SQBBzv8tMbGfyFNrNPWYiQMsLUqGeFX1d92JnMdkfspwDP",
  "key28": "4ieKAC7kCZzT7PdLFWMdTo6TUHGS8wi9GK6eGjVTucY6161hSukYT3Uegf9qFhgwBfbXpajuc8G7cfR9gxPcyC5L",
  "key29": "2e1cM2VVHKZLDeoJzpx5hG2QPm3b9me7jGnzLhaQAzvN99n5fFiDt8CmMDj99VLtAshqbUuA5jbhpTJHNb9rsUx9",
  "key30": "4gRnUhmMbiaoFCasLEJhUhehYpRwQRamUrevrwWB5M1TzosnSDy6HhvfiFnGzx3NXNw3z8nkKHVRCCxzySqYscSo",
  "key31": "s5YGD26kzkLcqs7xQURTVNRCNcwyUQmbnrhNXN2Byiuz1Bg17f6t4eQjWEyGQTB9TBDjQK6cnZZpPYwhx4zLnT7",
  "key32": "5Xhm1Jx3pEyJkajZArQBuMCWeVi2LAAZRXMLNQTijv4R2GN8d7R5Y26EQinsiyWNKoAnXihCuRtyvN3SatNUnwmV",
  "key33": "5gxXahRV5kaNx52BATKV5CdAML5MR1ABiH72fYhASBERHTdDcBtpkeduK6Ef9rf2gxVNyZQ51kTHPpsPoR8Dgx9G"
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
