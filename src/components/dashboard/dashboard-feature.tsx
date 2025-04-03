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
    "2AfZSRvqgdZM1kD4p38YeKbQ6Y59MYUt8wgCMZfLWpJt5ivXbRAP3ZozTJE4ASUTsuHhzRDCDJdySB4jG84fTFzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLY2t7HN7f7v6NwZdoi762a51sbYwrQgjwJyqPPbFR5xsLJYpEgLuru1i2bn1Zu9oTf69R4v97XeufgWZsHxEe6",
  "key1": "4CtWQ87A2X6BaUGJVP7vEm8XYHCjGTVvytCXjMHRbvsFBifxHCPSk7UZ6waA7Qk9pCptsSEhz1gLEAvkJMTsAFBr",
  "key2": "5CKiCJGGafUKURpnDEQvJ53p7VKcHLCGVqEwMkUJ9E4xjizsx9PDCh6dmcHyAkm2Hdyw2FRv5wYJRohj9LD2CBKc",
  "key3": "3Q7faDJDoj2HwAqPsHnuw1r742F9A4NHaUfaQKmwEyEYdpXQqRM4dYPEreoUGb5VJcbkyTA8tTL4MjzyeNTBQHtK",
  "key4": "2CB1Hx4uN2EPTfWCunWDPwyQcG4PM5Lqd81iu3W9oeA5WL1yHC57vDxQSt8aE6ovi5pBtbyoryZ5tBwJD8idEWXq",
  "key5": "2vJYupxft8TbjzAELK7DtbpAznD8buaoDs7L9kiCkr8kRX7DCWKD1QkCYf63QHeriai7Vb9wnFwaKhKkKfgbLE5u",
  "key6": "2fmDeVfxDDp7ZUPM1MvcfGgFhCZDjGZNjAiof28EMJNtGv2BF8c7QRkyaMbmD8AycMhReNWkSUXs4qGsQtTzG9bN",
  "key7": "AGCmPaBaFyBxaduQQWVYcEUnLQxDE36wawY1sbJUu2KrGGuNVJLLRCw6ZJZwzMrnvLFXRJaTcU6GMMz2DssFvih",
  "key8": "5ZARXYXKSA7YLQzQvqz2yqL8Bt3v9AxHxFZQ7mh5YYaaYbkwL55MBtEKqUNwFMZJnL2TjWL2PXBLJxySbbd3wJWM",
  "key9": "2yVKwaUqqhijKiPY5cviB9nYSDddb4pup2h4fmzseASzzbj1PaWNCjHj7Wj4B4rXAiLd72XCrBaxuniUcQLkVbwC",
  "key10": "drBkTUwDxXJp5QeUBRcutwqfW4r5AUTfaRbxNEzATzoqw2UpnvNbiPEDC6YJM6jtaF75eKFvEQzd4GtjcKGjCXs",
  "key11": "2NbUUrYQLeXjftTH2QyCaU7oMWvaZoFsnQ7fkgYxkAvd5x2QE8T7scoSgoC51F7e2hHzzLGvLVtdqcNCvsA983Xs",
  "key12": "5ucKgD4sbngypt4KHrG2wjunC1iXLVirMdVNiiCghQFUMfAfXRyzy4G6S7WJL9r2PUqH4CCuWXSYcoAKRP2ntwDS",
  "key13": "23U4k5rY62vuD8WxHmnD1PuakAC3w7tFbpd4bQ3aZRRKR2j7zaUAgdtrAVoK3bMzvfW1JH7TUuYe8yZQPqdr1qjy",
  "key14": "sV3rVH24DuPhnpxDy9mrkhjPE5M6EKTgzuYi5FR8f6BwT65ALVJu92fAFA1hebBd9XdUt922rbB6xu2CjACzQy8",
  "key15": "5c3fZmFQq8ALwht1Y3HpXPUotuRAaogEn6gSVfGCH2foPD7KRYuG1wsePoUjvSyeP1dgW6pexejtJin71rS6iT2a",
  "key16": "2WKS3JFMs2zavcWBoNeof4Y4gqirE7toUjQ7RCy1bhMc7yDupWBBoyPhiMpERCjGBEzdahTyLo4cR2gtEuEXXc77",
  "key17": "2frDGNT19DGMVkNAkega4axgVDnkuiF8zhs2UfpvnVCkQ6QQD554iFzZNCRuFZJfuPKe4EpdUBTjr7gLhXMYRDMr",
  "key18": "5NKCAJF3jKqfvE3NsaoMWmf2j9ztLbBZhUjpSsx3Z1CQ6druFcDGCdgfTiaX1oVyyo9TUrn9pdHA24yaS9kHf9tU",
  "key19": "5mRjteueSgtE8HibjYJ2dcdUt4FM1XW3vubPotnxi2vknxw9EB51dsJ8nCpNTYsJTok3hCFgWY3JHfoggt6RVQ79",
  "key20": "4pJMZJVUenNw6VF4d3nQzReWA8g3v3dbXQtkUj5SDc98PCw4iG5jf7Vd3BDYYMZv3i42r9mMdn72cZ8UWREWw747",
  "key21": "4NTce51tfSxUiuGWdQBMhQDgtkfTh8pgSRHbiSPziEo7HTGjkBMuAM3h1nxNnFiyE1wJwgLrG9F4dbfjkKcNHtPJ",
  "key22": "2qonPdB6NzhhFRGSMu2WadFBQRRrpLdBSPGqfrUMhsaqzCs9mqxDyUeu5pb2cMxUSdMjVS3Px9dioHamHx2jFZJX",
  "key23": "4zgVJVUzPQx4VtXZnuYWXjcGoAuYfscMiTsCWgov2ivRsx3ucKnQgU9Umf5Lm57hkZbQftjMkUJeXftzGHcVwZgq",
  "key24": "39UD4NQiRBTGN2yyyM9Dtm1Y7PGCsVpmJX34LPuqUvWe7JQdzZML8xxsT2LaPTX1dMqa7zCor6yGGSybGiGaKeY9",
  "key25": "3SL53bewYLnd2GZGHqwG9wjG9kmQZUgKuh53zjuo6GmfXYm2bKEyh2rtdYUQq2NvSVnguxu2AGBnPMK7Beop292f",
  "key26": "4WWdRHmhXHaFKcBhm5jrGxs9GVn5MiihwmyEVNya6WmbheBYjgcxs1ekft2rnQfjAAvLqn6gG5QxsDyxsB3Uo8af",
  "key27": "5jPVBVY1sTQDthpmzLNXUFnSz5UUuerx5PmMXnBWht86BTVXdqWUdyFNKfCG4VCGAUqhyZ8vbVHvN6qrAAgbGWTo",
  "key28": "5qee7LPUUzVMnbnVfQk3CAUJdCraD1Zw9CjDibYwiW6KaL8ocdAs1gwdafanPweFSCNWHqUAvMat1pNt23RcLt8a",
  "key29": "291Fu9Rk3GiZFW31VwKP1cND3mnfuX8MNWW3NR24mBDPQQPGD9MBwjmqX9rWMfbAieHqAkFMW927yRNzLZVfcdW4",
  "key30": "35mbAX1g5Rn5jSJjWrA124e9z4kfQSD6mS1Vp1fj2J34Mr3SgHSLiec2HeTLyz6yMVyENpbw7mLmq6wpa3Soy8Yh",
  "key31": "7xgHE3r4HPdVZoH9xuQC1op4grrN6bqXa1LhiuwUik8qjnKVFWewrDwti7DLDNCoKdo7GpcbSUFGYWamdas5WPR",
  "key32": "2sQW1tJeZkSD9NTebfuiwjmgewj8bL2gLbntiPBzCmfZDQh4c91v8gayNsTuXZrjLBXDwVELzuncn1uoYE2NaNpF",
  "key33": "3qJfpwjNrEt45emUM3LkdaizCa5emEqu6Agrz2eTiqteYffdrguQFQAzpkpCZqf3xSNgk1JqM8KnSh2ojus72HoM",
  "key34": "4gQnAjSeg1WFQJkqt7Jzj73qD853UzGK1BzLeKjBHrGcyRSaQQ8znppV8j25kjpc44qFKrqmvGPsoPJ5fVtZZoyF",
  "key35": "2u8wVtgbCgn9AeoGKMM6AT6pVdnEo2LKgpdFSzmXkDZZwJbLY8gpfMXsPkieYKR9mhz9Q244bBaT5hia4FK6HNBa",
  "key36": "3FfCMmEEPmc9LL8Hjrfa1eh846ZWjbRyZxbBXuqDi5mjcrKWwVRfTX41YZPtfct7irvLWgpEGZwHkoQprohisL4E",
  "key37": "33Ga9AC4Je9T9FbZpXgCMF7Tna2V1Z1vNvDCKZq3dnBLHKGZPmv2YPow1EdiVbpWaaFjveU9ZXCMqdxrmkbnEuXw",
  "key38": "5oBwqUSERcAAc5pJ5DErrVcE51mgybEM6ACokLdtwi3tiZGBytoCmCbeFR5QMqAAkNQa5x7wDVDeU4oGsuW1YopM",
  "key39": "5sV1VnwLZ7ViTT13i2fwnhKHs6GkUx1f6BtgEeREf7buDauH434xqhyhT3GNCCwCcuBm4pibCPPofsmC7N6apMU3",
  "key40": "53p9CCCoQLXmLDtPHVNz1Dvk4TRVcRgMcJeppgdvcoCgFBsSQ4KgHcvwrjerSac5axZuDLiRh5stXoxr8CUQ8DKQ",
  "key41": "5dtcHF9Pwh3fc8kR3ieBu9fb6CVeUmaxA3v4c8t4ZrXQFUeWwftA5jWmPJbW17yZYwQgrbXAziosLfUEr3o6gvJL",
  "key42": "4hKasCGduQNeqWbvcUMnd5ZSZSzk7MJAz1VXQWVbvD2x2qMxG2QS2Mv33xgeQ4dspEwhP7yGDPkCdrbq8cCdy324",
  "key43": "5qtA2yqJLDKxzJ6RqqUN6C8vXRE4BomtsKxxTZMMn9ND9eVJxGRtSuNDKLLCDjahZLkMyLVZn82R7Nx6V9Zxywki",
  "key44": "2K1SaUEkxrwkCuMWo4uJLJZw3ZqsFgf7tatY5cKWhgW2T6Ze6nyShjKJvcASBuHbF8W7rMoyhvqB8f6azpSPkapj",
  "key45": "3bvSZoh4w4v3oQ3iHcKFhVNMDjVtK3ugHgBTepe19k1aTe7mQodhxhgGKBDuCnmMyzDqgQFHDLZBvviQYKHQxB54",
  "key46": "3iKot82iGbAg7MoMEW6TGpmjw4NVi9h7VfCwVbaNn1bm55kohiSY5hGPrXKGgMPaLEbk2dMknMbTmKg8KKnDhQcG",
  "key47": "3CcXcZy4s6tLAjpkNBaGEt5QgGHEn8avT6w9ezg6wbByKyA4zrVAtf54uSH4X1eQZcv4T4ML2C17Es9ftBo8wpb2"
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
