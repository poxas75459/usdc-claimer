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
    "fnVpvi8XDMMg1H6WrXcXvkWDd2fLWXirPFPCLhJdmikcNgijVWKjpf4Hi6JtXYXy8igaN9NspgW67MatcDXbWvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3joGGzck4xwcfpEzq72ad4FAQaibjNJZ1EbhxjLbZJpGs58DF4ejWdUvCANY9QBCsbfEXzwEmrSK4mopTAsrBy1u",
  "key1": "5hy7roTqGtNhwmKFwHZnTxMxwtb9ysEthxEf9VG3ZCHhD8ALEAveCcEfD2bVP1mAsGPDxuysm1X3fKhGcaGrwFRT",
  "key2": "4uX5hcePcipd9v5qCtF3j378UihP9PS31V5fcj4Uo7ea6htkJAcS7f9D4j5NRjzzBKfNcjjcRmb3xsAt74EwTtZ4",
  "key3": "649C6tJ3vHq3sUvfhiF4bYg9gD23XoRHhazoHm87zbfY5V7HwcnXfRtAkz52RmSaFiytdLfZb18esgTow1yNFkPX",
  "key4": "5GF2jbJxR1yU5eSxnccyJZJ8BUrUHMW9s4XSXTi9hxaZnYQWRLfCh5sedPZxnW83d8Jr8r2qk1yPXRXydEjwRSPy",
  "key5": "2F7iq1aEydEswBsTm6Tvicifs2ZSjj9Y5pk3vYdmWzZvWD8HsopMs64Pmpr7AUMq1iyAS53vVZzPUsaXW3WPYLLt",
  "key6": "5YXGmDAaCQuV1azuWneH6uzAX8rw68b77XQRKGsYAqwQmtHckiMgCpoejgddFjetodn9XoBfJ9QyBbf5mUke36YZ",
  "key7": "3kubTqYRAwXtDogA86M8jZFadMnSed43XbpK8qC3AUSvrmpvoje46veV3ZjLD4XyNuK9vUcKqVarD33kmkZAcLB7",
  "key8": "4At1VERnLwukJjLmxHs792npmdyMC9zqyFtjuFSyChp1uJHPt6emkkNtjmXgSTfzrEb5LkthUEw2xgaQuidsQQeV",
  "key9": "5P9XVCStodJqX8LrfFPFbXZZKLwptC6p4cpdwzLuUrcX6Mp4Ki89vEMkJCSFrTmwTCEapyE1iS8Z4YTMdCvdh4G7",
  "key10": "hMxzzinSx4Vgv9y8XPYAkbdwEPRZxSGLJuQ9bVgwSr84dU5MZ6FbLYMSQTfPQ6d7qKaHbnJwXQzSLDqoquML5Uc",
  "key11": "u4rZUrKfnu51ATd9zZjnXYFoXVm2hAEhRHtnwyoowYUTczUf62UhoSnDQDRaegrZaRL688SE6aqkreVefBPpKge",
  "key12": "2AGkzCN2AfcD42oFYDqvBHpvWPD5da9zcu123hBjsAShg4acKFWf8capLU537FeEP7DoRB7BLsfCDAECzLPERRdJ",
  "key13": "5ji1ujcxSU69ZdK1DWsQ4mC9yF2nyWjPCqqVZxvT3npWiMpXKnT4tJ1zAqwTDWnb92V1h6Gete1ptwTE6bHN8qJy",
  "key14": "2URNfKup7ewh81HGsmZ3GyhGzbvoM9HDdi42oDjzaK6h5xYzhLiSWKpeXz2Q12Rnb61BJY984SSgwAQA6L6LuyL2",
  "key15": "31mdam7h8ueduweSyNG8jq5WEciVaMSqSRhtagM9kufYX2oNWwWkPaLbKw4XvuoKskdAgSQz97WSTDxNrzQSTBbA",
  "key16": "BJR4Y8Vyt3tWQfagjpapEx5MdSNBxTc7H7TiogXsVsByKwsonQdVSAFtGHfLfqCnUmyiwtoyQMqBFRNgutimLQo",
  "key17": "3EFKTidC5QaD5YjxMtnB3oDdRoUEkvYdXqVmWoHxZdfCEuYPE3TVxFyAuFppg7dzU4nrCVsGHKLQBSf45ZLPSDxx",
  "key18": "p4FserZNSZQwmRu7MB88H2Mf29wLvm6jg7ee4BNvP2GkDJ7XoLsb2RTm3T9payAh9jvCrS5PcGTCasp73DPH1tZ",
  "key19": "7qdvVNyjDSPotgQhjc4HH6JFU5YMFqD2MnojcHKHFzkR7te8Y7d8MZeDr9t3w1FC7nUPn3V5E44a7pmumTC1eGB",
  "key20": "EPpMuSFwTQYWCVJmp5dQyRBCdpydZgGPq2UnVFBpG5vf5MFB9ueJx9BhLphSfn1orYKmzJnF5Mg6ER8pvcCetmN",
  "key21": "25RmfERo4ZtSJHg1z8tvZVHBCmqqYGuRLz3oUdbRL9H3QRG3TAh5n7Rh814oraCqnYqVwtwsazo8mRVGH3tARTGX",
  "key22": "8wpgkRs9kUQqsegorVXMV167Fgw3MiFnQavxtCREhuTrqFLAU2piTszk8DheSGaSCAYSr5NFUWyTFYny4r5F5mv",
  "key23": "LCqFnHb8N8gkMw5Cszocd8YoiAD5nwF8x5Epk3hmiothixh99ELKQa3nwoDJ3gSwbVv7NB99YATCet24ZVTUEkz",
  "key24": "D1BaNUGcFLeGsyaYk5Z1svNWPNM6deBHPsTNyT6QxfbLWKcJW1HSZCo8kxjaNHJ885MyWpNz9YjL5CWU4WkUvrS",
  "key25": "62FWya3qE8b3hgQVfX3fwnVw6oNYgqNzJrzLPH8odChKc79ZhXyiau99WrycnTiQgMFQE3vUW4tcnNGMztncj4M8",
  "key26": "3ryzVeZB8BS8VVBAgno1ZitZtdBBg5geb5As4NTEzTbUU7pXykDcgn9o2dDRbQJMQDpfJmmGHESMierjQwQqUGFt",
  "key27": "3ufBJuaafMAhf298KxtsdNmzMu1NvwkmxNxL24fevnS7GtqY4HiV2uDcU23WAn2hayLne3q2ejdijBSg7mjncUY5",
  "key28": "2r4LhVfRTkvDxVQAiSy6LDMPkyBKx58jfwYhirtqo8QwszjDgwbMLZxNowy622HsxC3yrv3677gv7PiUzmRJ6bkE",
  "key29": "2v3AZign8PCgCjTtfmWxokySe6cf8aPT4WzZyoadSCum7Zau5qoYCfyojXQdU7y2Vyk2FemK8B726aBXkKVXLkEd",
  "key30": "2Bc6nVx8qhowdswTR8rS8jWXxJazqVUceKDWupeK3D8q7afBfmP31EgL6ACB2CmBP818GrBJjdTBE76NxvQVU1Ph",
  "key31": "5kr7cAWgdkLznrvfdcpMua7rNS9qPTMVpNzXzBcSeT6LrpVikz6dpKMsrJjKnWnppjeh3KNpxRKawcAx2s47DBSZ",
  "key32": "NUyjSpL2GgeeirYELNAhMkuCPHFPPC7sAGJfzDjd2xmMqpqNWRoHyEEjgk2j1VCCCsxJUuPG3DWyMWpw6EUBdhQ",
  "key33": "2iVnHyEb8iPQmk2giFKEuCb2pAv5hWJtAuKr7yJJe9wQUBjgbvyBdM58eRrpnzru7VyivDRmVqL7nMxCiJpxpyxW",
  "key34": "65bNT3cn5Xodx6B9eWKiGyNfvrBEZX7NjpE7nC7MM2N1g5838q32ZnhC9YuDw4gPh3UbLh4MppE5BfvwSpK7ij4p",
  "key35": "2ui6hvEAEWj6P7PYWWitrNSBPLjtwCXfoPPBSVhKDVE3vtP7AQuGySNJ6J4jMsMEodE7qXDHtL6a4ECKcTDA2XR8",
  "key36": "23k49gM2drUA4QexhR5JHbtSfnRgzDRsDdQybo6jXrPrSnPitfZcHdPZbw4UMj7YPuMUQfUw6pwD1Xmf1KpK54tG",
  "key37": "5e3eVhuoBKUKpFoQ52H8U96rqSMtfyKg1HHpoMnpFpdQAjiSBWk6FaGQNPaDCAoTPK11nvXff1BdgGNv6zx8bUSF",
  "key38": "4xi2LrJo1oU1V3yPRQqta4VPn7zgG9EBuT9YyZqheBYeKSd5mX27B3SLPi8uABwJ4htLej1QnDCkwAYhTuGn86KV",
  "key39": "26m7WXwzqHTprkBsE7Fj2UYaPKmrD7B58SKFYUAvZMTaZYCS841n6dg1TiCFDgsPBAAHjMjTF51stftA37HpTnDw",
  "key40": "2TgTVjddGUbY6Brh5pysz1j2xSoD95EZZaksfS8ANWy6aLks6S1ujSZc5hw4F4pxZt9waZUwLpX6NB9YzXKUZ5wU",
  "key41": "5Kf7DA7ejTmLkHYPKYj2bfkVCQFSeLPoeLDa7gUdshKdtAq53z3QH3Do2xMP6X1GLYmAwrYJSPjKiUKx3vhN9Win",
  "key42": "5L4Cyc83FUoBPndn8VTVPEpkymzzjUHCx9yi7QaoZC7HZB8MFEn9LPp8Jan5KigNbpQiYgBsw8ZK8BdE9zQ9zA4c",
  "key43": "3aPce5RUtJUoiE2ctAy4Fx3ioAufxHTLEKyQYYNbpNABgnFaRwbG7a2817KkRR4xwPz4mzBs1MVPqHQhP24xFYka",
  "key44": "47xHiR3DLZCcQhgMCLboJWqCaWArQv5RrNjABw6vgCKHTJ5ZTTovPZHCP9mqK6yiC3CczWYTGn3nLCFrR1FyW3AQ",
  "key45": "2xhEthc42rXJWAp5A4cx1e87H72uio34nJEZGHmXijeTq4jcafdE8KpUCSh7UrqYuQkXB2zoHaCYQyeSruHZ7YLc"
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
