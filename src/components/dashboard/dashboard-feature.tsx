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
    "3wTVtLqPPb5xES6Lu8pvFdbsyyc6wUupU4f9QnWjkAM8tqtzgrjdtwNr6rvsZxTGWr24TbgJrF4i9LnTNMUKK9mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAQ1kzZ8C3kYhBAVLboQ98Z5LWfkQ9UssRVqGEAHirob3Jh4JeLSAEoQC8GAmNqW4hCc2VCvEJXLbq6JMQgADrX",
  "key1": "4ZrqSX27gMkBPRjikR6B49b98dgAXLdQLjjMhmyKL2pSCxuPXWHGMjiPx71F4G4AxQWvEhjQBBLrbYJjtcU2yHVD",
  "key2": "4YsQnP6JsHQCQdoL6AiqqGRF15nK7Lot8SaDsu7KdX29JZoRaqBJMBsCR887Pfm7cN4iDuSBbKTXMHvquorbo8ea",
  "key3": "2Q5sL2B82LXXTaLWhpmXXFAi7tMu52z5jsUypXYnM7pHwCwnxL21TRa4T8Gk6vmpmWXwxVsynNPCxLDRu5qsrt8a",
  "key4": "36oeJec2kTstSjWtLrr1NfXABjwe33ASRvcqsQ8wrtDbQiddTvNtrx1ua6Ju8c7smDSFiBXmqumWhx5pqHNQL1N8",
  "key5": "2dYGbxAT62AxRw9KMp7hTA8e4j1NNCYDTUaLcgEiLmGgvYAq7pXPvWULRnbMXLB1JkdwghYtRPMiFWc5SCDsDhbV",
  "key6": "3mBdCup5B2yDpUnR1J5L7p3YTFLHqwwknBseMfmSin6hHG5FbCmpm8ueooWjnmTczbd9VXSAzWtT55pkp15oQLUN",
  "key7": "2ZoUXFsReZTAiuyC8mAhiBR9ARxWzmETRKLKZnBsfuscGJ8NLEM14PKyuSuKVugKXddjs7WmEutCeAQgkHThBAHM",
  "key8": "3Rbxgb2FXzu19ubnAt2fPSQtZrupvcLuCNxTeiStxKmLyyCXaeKqsgJrojvX943KvtzXUgfcwg9YNnJrKfbdoE1Q",
  "key9": "uq7yCKxExZzCcP1JC8EqAdSb4MgpVWYqtEFd4bfrqgEHjoGpEaMvKvnEmBogP1m7WUhv9iZParr53CRt2ViQxBf",
  "key10": "2V9CxcodvFZyH6X1hCBBDCfjEKrHvxNXDBJF4nQBDG93YdF7zRGsgr7NrkDJ3auuTyvTt2UukTCwVdtkb8XAFzYQ",
  "key11": "5K4mEz97twQb5u4SCXvrMJ9ftGyTRqF4waFM6dyoAPZtCdDjSQpgHRFFvuH6EQD6NYRjNMsGDuN9ou96aBFnZG7C",
  "key12": "5nUdxq5vdpvdoo78a7vVcexrWg9SuDLQ4fpeZdqaXgjjuUnD5v1oDXr8EjKC7b2GVcYzZMciVCLWYMrHtdLe3ppV",
  "key13": "LxvSpctBY2HG993g3yMbxFRRxrRyyB3AcWKrQ1uPdnHnKDLtnoPk8pK2c6Q2zuvGN6vpfnVGXfnEmesXXx4Tczg",
  "key14": "owP5tTwizvH7Rw6rdaNhzDnGCrxL5bSdZdntire1R8yykKPY9rczZgz2oVPSeCa89FdSaeWf47HLxPHRr98uYt9",
  "key15": "2fFSR25rjpSM9ouVHJcJ3Tb6PJgErrkjc1dVJR7swbCHtbecUtaRHDGcBvrPrhqk6VzTBu9Ga7tAg9qZShQYFRdL",
  "key16": "5LvtTNkkEsFJHWfrTd8yTVrzemziwf75t729Z7JMLcwH5yNKec9UZJBaQbohetDdKdfgGttWDiGVZq5FnaBQeoLA",
  "key17": "62DJa2RRpR7rDETrZxadvzzCFdr47xq6FQ3PsyvPtZx22Je8vEkTX8ekfdJShaRnjpaYfF9bwbSYHStzQVDjLhBn",
  "key18": "XaJJmKfxpWJNMHvcXyxtUYRKhxot7ixkec7yzZGaHEw1BgiZejMEXDYa7TFNU17fWAeoGH3xh2syb1tT8s55apu",
  "key19": "5umAwrW53NzzwzUQMpF5iPWcRbV7gc7257UjNkdW7xWxY5wyJsDVeeYZLpUtShDUP81ZF6YHZW5Ya6HVia5VYB7n",
  "key20": "4CtUBwSCngHptevezTQoj3DwuDSJmxDaLuW2KJKEMKaoo7EP3jPPYp4cHE8eZv1gZR4hsJHSYMH9dpkH9LVH1oL4",
  "key21": "2vEn8P3hZJsm3kf3c8oFQP6ZnXz4uyEDso7MtXfisDkzVdhmWfLurJ2aZBHvKQMb5G4Mo4nnrc8VtxFYi76CP3Po",
  "key22": "2YAzi4foGTfn1BUgpuP3NHiMhn689S4tw4u8gHheHJfXtSyHcG1mXA5RdUUqNzL32w96qB95QxgmKqn94b7BYFA3",
  "key23": "4kcGGWg6S8XbBgUy6qbZYM5fxZcLVCjdUhG6ZT7c7qQonZhhGyMnbixvM6U2AekqwgYARiJ6Es3wdPw8LgrSit2i",
  "key24": "by44ETgogTCrqh7sRPn6UpthA5grrT2LcPjUS5BBVFDwXSQYeazLaAGDYu6YPNfud845R3372aFq1tEZzuDHGBs",
  "key25": "bu7HbSDsqhBDwXo7x6mMfn1Qx22iv3RusCFEKTMqKNoj4F3eJNeigyqwD6KummRwvm8vnnjwV6xbaWUATm6jfaS",
  "key26": "2r4QzZs53JQgMWqnQzzj1HkV9bW3tcvw3PNas5LH8Xqr1YnnamwB3rjYpcVLDGRm2G4YB16zziFvhAFsAxugbmLy",
  "key27": "2yC7awpsBcMD6sLadVqE4t4EdN2siJZMmQAkPwuDQhg7Yx2kRDG87qtSdiN8tLksmnkfuQHLXF6Sf9vcgAx8ABs5",
  "key28": "21txR6GMfvzUTPX5hnVjQNzhEzXkCLAJ4ewbpZct4Rb2Nfab4e9as8CadgVMyLbkKHHSLRtohWoauEDMX6M9rkuc",
  "key29": "2SpdVukH1BZ3GKaMMoCfVadivxgjFBPhfePrpUM2jpbd6tacLe9KfPQDnK9V5je3zARtAfyPoqS9G18DHnYLvCjd",
  "key30": "4uGZ9kZyNQi9Nb5vH3a6FQUYLcie5n5JEwzxTTJoVnSKoKSYhLuX8uRsess7pLDnEyXjE7ZxGKCwMQdGiY25VWJm",
  "key31": "47GYDFP96Xrtf8YeZTsYeaQRjqrcWEBf6tqG6kq816S45akTDaRy9hFmskmCTavvHoVmYrLG6vpw6ZsAP6QPtPTA",
  "key32": "3cE6R7UEKPDCpHZRjBSk6ojKmn2eunc5MoXM1Hu1r7wnhvBpDPvM7BMuJw2QRv2iipiYUTJBSs84WUSMB2Rp4BDd",
  "key33": "4JRjBqebrcpCDDGvYxDTVbxyHf8xVFBZDEUdpn1M17oavYyCGtCTu4yrNoWkoQ8au7FTWue86xUQY8t1TBUuA81W",
  "key34": "4Z4DCfPZT4avB98R3sJf5ytFYU4AhnBeHEkjnMuajUMMgHG1LBn2LeMrYpVRd7VBkpVvhQjTFFxZQyAFDN9i2sHo",
  "key35": "35MigiZZLRY9krmxQePvcaGCiW9BATcs7xEWfUv7UhZfNdafKSCrrcyK9itcZuykfZBMESrQV2hGtkbxDF6kXhLq",
  "key36": "Vvzj4cr7tr6avojq3kh2GdAgRoRR8AVXBcsRQCptCYGxMNtwaRZhXh4hd39jwgjEmQQmE3nnTj1NuhYPPdM4bpT",
  "key37": "3ntttprFiMoLWFdJms4Bm8JYUL1yH1zd8asZgrivWG61UzhkbjkwkTwNViY3jzWNjc8QMNa8U5VnaPgQVL11yJ2F",
  "key38": "SfjmwUmCNp6jyEtBkRGsUpF2zdU4NiqNXxnBhr7ixPb9VPqP9i2nFtHqWbGSq4CU7gS4H9uzigGJupfuAFZC7Yy",
  "key39": "4dAe168j8EZP8zQthS3Z3nKeFgQAZMxbgqUy6eE383Z895YwG2DuuXu2sPBixVYcuto9B6q4KtjvGQmYhBYnVcXo",
  "key40": "3xjQHfKa8mHJcXjKLBc7F1tX4BZnAC1p4Q6JiCnAdhdCP8ZjKtSs9cNJuUjL3VBJUmurXc34wLfnduMoaij7f6Rv",
  "key41": "3mT9K7ePaiKTJXBnH6ds6C3jcVydFfb7vnWUngiKm1unCkqaVdVmy6xG13N6rSBshkQaxXtncJsK2NkqsnCzU96y",
  "key42": "2bswahNZdZFxBoN8sa2xKyLjWPismLfqu2rVNtJj91mXrdFXFjU7EFcrFpPQGDGLzdD1gPAXxuEyL39X152P6EKG"
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
