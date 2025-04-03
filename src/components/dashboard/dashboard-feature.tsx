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
    "woZhB9XcQmhHXFJ2TMfwNLizfeBqCQjrWTyyGAVfG7PfXHKA8CjYDkxiYPKknzAw2mhwdYSxRgzoU8xZqUWaHYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5fahLbf9yrs5xtYyMpAUxrVgwzqFfWb3jZggY4K7hDYrwQrGHuZBGyp4Q16CaYqGd82b8aicDp3uietQHrBCGy",
  "key1": "5uQS2STLS4u3aHwaFMN5WMsJTphkwz5nYYf2efGajr564DdUxF88m4sE66zvgPGuk92cjqXAFe3nW35jFbddospT",
  "key2": "2HF7fgvABpqPz1SGk8hzJocH2UmaXEtgo22FHw7ubaMj7cE3iXrGG8knr8e38nZbVxzYtKDZDDb8Mfi8nxZeTLpd",
  "key3": "4n91iaKJZEQcFQr5mwk5KDSMvFryBmwp9zJzYmr1pea7L8K3VQiLzPruEkcdWP5hVP77fnS1iXk4LWBASkqKCe6h",
  "key4": "52eLgTyMY7Qodi6XtysUWuNR6mt1C2rUFmTJ3XGcxi5Yait2jciFGxDZ3dceFN8P6sqJLR67HwDoLJnob4MByGJ1",
  "key5": "2y61xYFh61YJc8ZrGqhinoqonq3QzSsNA8jXbSJYqdKUvvxeKqBrhTkhNa5o4mvw3GYUTnojaNaqbYWQkD8SHAEd",
  "key6": "34biYa1eE66QwGdzhrUBrE35hDNf4ExNvN9ATTmUihmZLLeg8riZ9nPWir3XH5xC6A92DcRra8pFkcCzcgh1EeDS",
  "key7": "28htXG5vYyK3Rp1UmmmPepVcQ3g6CVAHgEiGQSTwct5bGQz6NJvqwJ9czGyKb32uGgWXfQEtpk8Yxx4LkrEPc3VD",
  "key8": "4LB4V3scxajwj3rKaVJDCJu2dYPYHKmBGZRhLudfkzmGjcDhzKH3CXwob7Ddqv9U3ScNLGA2BzaADx2Vg4EHrZWV",
  "key9": "28bfBkxfgoAiKHv3QrqjDE2Qg1EC6VjMrf8g3yDJ8ZA8bm4RaNVsSc3k5KtGuPwCT5dm9joN4fw5CtfJBmohUCy4",
  "key10": "2TqkmSF1cQxYuTPnYgnCURVbb6hwHu6VE1xuH4FGuR7WjTqGtNsSKyUGubCx1p6aXtHrLCf4GoFLcAgXgLdpYB5r",
  "key11": "5Dkz2C3BqxcJ4EjMX37Bq1hsJ7UCL94ZKYjwfF48Aq9p6yUGT3zv8FCcVR87fotBRwLMq64kj78qXACpYe39dy6d",
  "key12": "2RQLf6jrW9286w6dHXvc6mTt8tigjLPyC7V6LWby44k1V5LVApk8VHEDWwKGfG6mVNCqMxguyLP4dnCxkEJaHbt4",
  "key13": "53zCaKJK2qck2mDmexkN2j9z2bdiaNKASAhdkXh4aAYG4JiqhvYanijFhT5BafaGaWme5VyY39EPiNveWcaFzEkT",
  "key14": "5Y2pqsX4TAwPX5Mt9b4RtszYwWHEE9XNpwqAiUzdFYtyCMRLyFWFZwcfF1236JATaTdYw434JPaziPMrRnVWoK2e",
  "key15": "2Ab7viu3uqWtcbqv8niA2mAmadtFF3Ki65D24KDUb97gyguW6YRLCQaNP1RwRBufxHVdcRoA7i14Sjr5pJeaWqdr",
  "key16": "5AnGjYmXS4a4YjkdzTWKvZUernXh1t9MnzECBLS3Lytzt6qVc4RYYkNEXzqyS3g694N9WNdwjfev8gGr8AfkWS3M",
  "key17": "57F7gX7Bf9Wozbaazd3zuYXoxRavhwvEnmUhPgz4BWBbSjJNeGQETv1LBpe7QzuW9x6UhZFcRDeKaTEygs9Y5Qtk",
  "key18": "hCndes1VdsMhDoZUPnCyqnkPcbYPqzUTYvPziYcay4AcVSo2Ho8q6veuLtqKYdLBbiVKNMbY3bcoGg2PZqLyZVf",
  "key19": "2erd9ZjyZXBVwh9wCe33rKHZqXv8Dq9T2pnYwtHH1VjegQy2B3bcGb84564859o9sZ4EABP8vy3gP4eiFA4DWfiG",
  "key20": "5zri4QSYTdend37UQCrFy5S6z6pCH9W7FnhFJQZDDnduGy3JmZep3d81HLfrEn5KDkufDfP7zSUvdsx2uxEEyQAn",
  "key21": "4sb8fVcyLHxbVs8S8MBRM3QZdnKRAHFd4TzweMqiZgEHP5doyx2GRx1EAswTwUCp58srqJa6gifQ3fzSKFERSz4E",
  "key22": "2HDbDteVbRWz5byhiAHZbdH1JE8TyE8PtSLE9FHxUYXiDZsctmJPRzTqcFoQzcSWeCx8BSz9gEyrLnfnfNpaGs67",
  "key23": "5QA7ecsVLxAF1zRB7SrC3NABu64ozRe229yLEpRAfHFgkcWJAoW7T7z9wF8yuyRSysMphFGgrp5BQrXi2asA8zH1",
  "key24": "5n8j9FrbJUQZDbZxtvMSnP22cnDmw5YjLj5dudc3ZDvK5xYAk8XnB2sXzNGgG9hGtQPduEBcqqxDEoL1MhoCau9P",
  "key25": "4Buca7ka89ShjQC8xgwkLwMqDqp12HnfYK3qPTYr3XSNYTTvPbL6XB4ygKatgQa3Hrp7BbteDR8SNR7xBR4QA5uA",
  "key26": "4XVgrGbemfgXMv1C27B7y7q8Q8MbmoBGELWY1hx1iGdUNjPUr5EVbouUkgqpBUcP4YmJxq1pKVayW6o7X4xdHvBN",
  "key27": "oa2n51898BoWDYAAKeeYw9Q6XrDEGbzvGwEsqauWPnBVtSc42qQn39j1HLmrNLsNEymFWhVjLTKvx2esGVqNFEC",
  "key28": "3yTZNvFfHoffViGrvaLWFJqY2QauPraU8CYGZu8RNHTXLdKWxfUYiDbmfJ7GCracSjWq77aC6WtfKwa3nB5d1g3r",
  "key29": "67LfvuwCAVFiaYGdMWcXC8cbBxRL6GiJHVLsQKqWtnmb5usjvGUujUz3h1hNjKW4qoU3XCTpg8g9avqzaJzXCzmS",
  "key30": "4fo3yNTRUpEQnE89xjGY3VvY2UK7ekLaKoHohNJTQetJxNwWbYQbQyCSX2yj8V7pVuWL6Z17eWjC4seGwxyisQUj",
  "key31": "4kwThDzHe3GpFPkfZdUymJn7JUHJjM8kNyVdd4vbQc4En7Ywn2fzJxxM8f1r6ZQ5GY7qLDadCPPuzh4tzRZnaF12",
  "key32": "MckKCijZboT7J3pQcMtenTS7b3AFMrLaEF4rkyj7Y1nnQGnKYB6ZGrbQvTJbTyrADAJdUB64tAcWdYoZ2ksMNwc",
  "key33": "44kcTPkHvkw496Q8poA23UM8KLwgc2B1gJX9rBz8c8vdrfHABjHa1Q719QdUf4cN5djMrFR3LehrRWsiRoA4GxNU",
  "key34": "WM5YYF6mqcnm7gr2WuvuvWi6786Ht74KaQG93DQuXSEGiwma1Swz8KafZ8AyE8xzF84gyZRSb3S34ndM7G4AeQZ",
  "key35": "4AWR6BsNiNX6JxwoSf2CYfPnjBcKtgTs1AQ77N1YLqA3VcQerjJkrL1UEFYvAhsdVj4Lx7v6e9ZDLbkFb8qzF5Un",
  "key36": "5TFvdSrWpBG8miFq11RQdtYcksK3h4cibLdfSMUG9T4cVsmrGV4dxqe9b5d84woJAXcHLePjuiH2cbavxSFxTAVp",
  "key37": "4ynMTzvJMzTS1dQBHWtLsRtfHq3HpeW5Z1AAxWVifHyqVvDBUMh5bde1PiQiGDdeARYKr6z8LE4NwUaKy3AdnKE7",
  "key38": "3fZdcfsPfmsPHeJY7Xh3oYWkphDmbKXmUuuEfPxPibpTcKvvKRDM2gMJvSh8WHHoVJTFvRCtbnSuKKgxYET34ZwR",
  "key39": "U7W88fmUE1s7ogaWRtimrnJaPDUdUQoMRcG1LEaq1gUF3YJfKghQ22fLRaMjTH7bWBmFX7zimvVSSxh86jhb7tw",
  "key40": "reMAt9RGTvDoutSxHncABvc3tZsxigaLWuSBR5zBjZC3pieNCbejUVY9pFjyJRttCZT1LVjAK8gjFsL3JAaJN31",
  "key41": "5Jnn6Vo5WUMFU3NaYg3bWEt4iMBFEtiYnTTpK5xxgkksHghRcKdX1BNLYGGEjEwNwvbKxCyGYToNEvjLdprUKBwD",
  "key42": "5uzgVaJMRPuDgrG8t5vRdN5r64S8bHkBxG83coz3NgNk4xYGVgv64Jd4vhEw3iEhCTrzBMW3KTF549pAw5QBbQj4",
  "key43": "5TWwJH5CsUME1tYjnjxPB5RgaQR1BFXtYiJfRYLiPVzAjofkXCQo6J4aW7WouhJ9Fav9sHaBmc7jKHHdAPTQgmoS",
  "key44": "3qxzy2d8GRT4TAbMJc8GyqJ7Q7TnJMhDicfBeNnhKAZE3nbmxzTXSdiZkY3RjDcJy9JeUKfKH9RQbFmBSQNpbiUn",
  "key45": "FnRczCtaW4yESiEtSVs9z3SpUT4Wy1wtjJvSNiN6vVLS5RnNLwoXh7AXosbmC5MDqa8cuurk7S8NJQijwcsdyXC",
  "key46": "32wRB7tbdVfobF63rat7Q4krsuNmmrTT1m55pkBwJCUkeH54nZBqdbJKcWJoBZYFAg6nr7YaYPoMCrRrZKq84etR",
  "key47": "5bU5wRzhNTR2aW7KFxtUm1Z2bedghtfVvg7kZZ13cQp83p6D9umGhRv5q1re4HVmYTBmS2H7S2qFd17td7bhttK3"
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
