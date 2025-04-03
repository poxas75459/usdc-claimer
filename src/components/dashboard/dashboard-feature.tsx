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
    "DpJJgcVTNsDj5o51E51NTDpDo5i1yGQZieGwLfdEkUm8usBDYuRALa3BgW4Lzmt7kAdpCXKxEJrsF4jiAdwSoXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8RFukvgX4NoPesT9QcJdYLvpvxiqnexDprcM9GJva1sEb4LcQEkg5LHXWSJspoEGDxk7BsnMmwTnaShDQxXqee",
  "key1": "25AsPP1QE8DzkybGmLSLhsUrHuKh52H898XV85PeobJkxJsLYCNim442D5HWRsJhHuCqcZDhER29u3EfvMRjgQ9a",
  "key2": "2CWskmYRxPwrTD47sR7ZWQhahheNQribXB2mTJvm1cMnqzEVn3eGJV4Q68pBFRC4DpvEqJrjV8G2zbAf8uwuSW7d",
  "key3": "27fJRzZK65CddgQx18DZapTsMrfFMeC8bkPkiFdKHmvZKcaQbp6yvcNbBC3EMQp5oMNuMLMaHmkyxvcoHu8fWfqu",
  "key4": "3E1tEwZHeKXb5H21rxsxcXXUHZKV45xiUztSgA9nmJoUXxJPJYvRfUHCT1CvATNAjwVWapq1CACpJgYpMTwBbgxr",
  "key5": "3iarWing37iJo3g7gikH6CQjaEHESxqnCi8gJdLRGM8WF9bswYPHBhp2VMmzh2yjt237Cq1n5PHvyTfqgBG18iCb",
  "key6": "4krjfmPyuhWKDi4CBKXFsChQVLNEUeqGffs3aGQo269ouDJwM2haivqskTpdPD6s5AXaY9uRdkXsksJQMuCTzUq6",
  "key7": "3RCninWdeMgjSnzM65vyNPAsZydpcnPv2d1Ru1ZhPDepvtG52t2NXgUZsz1y2E2B2x7Df5tYzw4AHXq4EYJdjjcG",
  "key8": "532mLV4JLwBeqqKZrrRBNVz4QpkDC76cpwq9PH66dUVmxJVcDq7s9D9L6gDTGJp9ArwiPh9BMHAyKYxsBrJyv2mu",
  "key9": "23PRKfT45sB1xyCWRkZnSMiFnQEGyYnR9GNb921dHSfMUCMi5uasPo4eXrCkU8GAzEPKf5oA4GUouy39Gj6cskx6",
  "key10": "5Sa26MxQdxaU3G1Sj65WpCBL3JqgVBke5XKRg91P4vEg491HE7BR38gvyem9DtXDbNMFWdg6FCvJ2P3Ves1KmV2y",
  "key11": "5jS8Jsa9waLhdozy6MhmarzQQtom3hhMvm39gSWAfuJYXKVsW2jVLejjpCC7prJaBfJvzQ7PAL42aJU9cQboW361",
  "key12": "3s4PJ3EmygR1hJTV2afAUkGFf3PwJ2GQFkb5HhxuSmduQVoj1fvykRo7g3DTG3W6NNCVVefPAUdN93yx2bwbKPR8",
  "key13": "3ayfG7u2amyHHozGyWPdBBZ8kGgRBhudWb5Bh7sW4AgbV4T9JqMw6zLyZaJvC8Pq5VY3erUDqQBP6uXxk8VhYJLg",
  "key14": "bbegWi2k3rTeUFtUeRHR9yJ87nKM21rBY42tCZd5AjBN2qvKYccDPCRoe3RGVa2fMfKadNApWi21o2dnXbxGCTB",
  "key15": "3HboNnTsje8b2HXoqbgfcPvjPx1NR6JSE5RJxSidtJixdS8T9DU1nQoqQ8huZPUPoggcP1fUf36jN2WVQxn2w7DX",
  "key16": "CdAqC3EJ2U6umhKJWeNtxhGhchFgP6R4jFivwv7FmBgCi6oyiWLraQGrnkLszkpk1kjYYpRRwWKZYSUjvHCp7Lr",
  "key17": "2J8mFPfPaSPVj6Ck4cfGCqmZnJXUgBZfRAiQwqaXfUYJKdoLc6a7M8wqAzi322EQYRUCPiJKmGsbDnHDueKjjZZ4",
  "key18": "tGmjZ7nPZAZjRkM5vot6xLCGUGoo1jzG47WjCCaYtK4jop1Z1RmgCFpaKWbQodQNn9Er8f5nKazr9ttwvprSWK3",
  "key19": "2ZTw3khyyQRjiWWhT8xY9mescK6ZZcj8H6X4HYXn9iV4MbLCGXg5aCiJfGPDdDyT8no48w9bqwVNFAZBKBhTGEBC",
  "key20": "mD2bnakTAD6cYnjWerBkWcNdLYF2YsCQmbhzNT5rFVKUdM76RsKgtgVWdtkaYEG3sZRN5KWYByBAjTc4DT8ZgZn",
  "key21": "5aCBoRvNf5H87FACRqNGUsqpnViYzgbzgJ1WLk4BcRYN9CJPKo47nk67gEK94JatiwrjYB36LetWQV48hcVMGSc",
  "key22": "3NhaDCwhVezRMMx9MkCdZ7HH26U6WTmCauDZ9U1YVVd4amKsdpVgnFCbBJ4cdHEq1mvD6fn8tR7s4ZcEDpSbKrmo",
  "key23": "5eySHkzDNjGmtCjx8ucJVaAfQwCdB3Xr5mBLoJLJaHnTuNp6qjZYfY1LfQ2GcVcC1h8GXWPU4pbUJdZFmPLiySk7",
  "key24": "5ZfGHwSmAhQtgh5cZaCGutB8iuxGe2Hs7cPA1zyZjwQYycyiBg8SFxi6uGJL38R4iKUtRpgAFLvst8rLujdL2Fta",
  "key25": "5nWuxecsHanhewsoTgskRwgJoJqqskfeo2i64hDsfn9tESMDxwPsSaVHsmiU88dRWmrf6xha5RSXjhUpDFANYVGA",
  "key26": "ubGF6XGtgMap4F6UYLQsJVugcFEA86RNRdB1fpaQr9CyUtFJMeDaEELnTyfMzCriU8Acspb8QFEt8pp65NncA2t",
  "key27": "3W3qirmK8xdxpRasoMX3eX4KDCTUqF7o1LmQQmyAoM12jHTPP5bp5jCp5a6Y9SaykGfSU66zHtWDHycs9yaDxLF",
  "key28": "2B7acBndW3GRxmWfbecF1UmH6bmKQT2xer1W4bMhiZd8oLeY4KMksw5JWymVHBCdTZqhjejzu41NGXa2WpJQSWUr",
  "key29": "4n1ibA9obwNspqhsPhXGkmvSKrE83N8NdAQx7NveQ15o9usN4xmJPvsz9d1emWaFuuyZt3PFZkx9H94cXMKr9q8A",
  "key30": "nt4XzTAapz63swH2f2iksjyFzZkenmzk28nTiAVo6P6YoyTbbpVAjoV9GndDY1evJTdQCDrMsHHmimnEA3WeUqh",
  "key31": "48hHwZfSj2fv2iDxMbHfEPQUtkiFCgg37br1JjxDtLk5kFVBsLsM5nnHV6xHFj5xZ2MPcDZLurvuy1T4DvHeivpw",
  "key32": "5twdwQhaxtNktj3tYuHabG6AFAnQHnPUYTkb8nXbVmZ2EeGDtpR5qNpnXkLBNsVWXvZvMEKFaZ6yCFtgAtfxCuHU",
  "key33": "r4jK41rMFub1JFbS2jYsu2wgkVUrDnhLtY79kjytSJjAY29Fyw3Yv5qbCgFicV2v7XxKHx7HvXXyHDuCNpXaAeL",
  "key34": "2TQSuc1aG8KFRU78eZMqXvBi7SWq12VZapu2yh3p8zcDt8gtnB6CxfvaR1r7exEaS1nPfvmcNKFDgiACxp26y2qv",
  "key35": "5VpeT7g2taKdeZEhWvCXEWVRGMXFq8bsuEvboTMns34YUL7JSLPcvQUUXHQmtzx3QKcd4w2b2MyNsAdjbpLyQ3QD",
  "key36": "3dFVzGgVD18FSPMVLxfsL8gd9f9ebAtym1ka7nBD4K9Uq5LZjbUqLyxwDHTcmFgFSGpjyzTCwBMSKpThZEbrk7fZ",
  "key37": "3bCQm77pKW89y8VHiUFCe81nHTe8NW6NeaTdutrrf3cpo6KtVaDSp2Q8uYd2M8G9m7BhxB8Em8HxSdZ8zzbxz4jH",
  "key38": "CTmX451wcSxFdquWUquFFcM7jASghwkmFhdJEt1Jh7VfMc9LUwAMrbVEc4YYdRDQ2KMmGb5rz689Vy3wdSfesVv",
  "key39": "2ZXXesT7EdyPoaKHeTNMboG22B4dysoBfTfhGBFCjtC8YTo8cr4dSexNE6hAn2mDt7BVdNtw79epe6VJCbRKPnQL",
  "key40": "2KXcUQ1HwN6Y4MQSLEm9AceJc9gnupPrwTsXgQBn8xsPNyuuLyLorbnqocs7V5c6FU6uciZUoCDYF6vZMYMUhC5U"
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
