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
    "4TbU722iZAKau3wuneoUu8dLg9zynfjp2vA8L6aD7H8cNR6XkLtWEULxbRuuZcUBuMpv8iJp7YJNLdn4RKkRbKjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DE15EHEZgLNmGN6eR5tvykaCaNNtXGVn1qMbe8sJqcUev744zTThUwGArAZFwP7DxFbukthGRgRVwU42GjkDhF",
  "key1": "4BuVFfsf5xP91xafgJE5abhvuv7JH6ZrRuVvxWXH2wN6WhGmtRZpKDWFpKk35EyrkRG61BwJujR12zaLgN1HT6zh",
  "key2": "zxLiGsiSPhVnGFLFHriE8eWERmts5arZNX6oEd4kNoRaLct6kxep5XreFbV3BVP1iiNu9LZzdPAMSmAfhrSWQF8",
  "key3": "3G5gQJet4Jne6dkyfcTMwgjPYyHREXnfkiEXQdRLKc7CYPwLG6FmzvE5KeuCMJCv5ivoHyw7zJffpeH1uhVRdNY7",
  "key4": "2Zm9vjBHGiyb3W9oFvAv3iTRvNqYCbvk7kXwbUqjoAvyMcnYahoEoi7WF4wfwTZZtMYkmqGmBMUzxDGW8nqGnPvq",
  "key5": "55whWiZRMP8KhX2PhEfAdqNqohEiiPqCg13rEWKLWyrMZDwDzSdFc2Kya37Q32yKU433b4pFnr95FBvBfU3C1t4x",
  "key6": "5zgcqEHMrrRpQiqJMQytCr5e9CsGFneQCy9juCWyXezJ1nm6bFKfxbZq2FYwGfnWXASJYW8comrEGyKaVGobNvQh",
  "key7": "Cr4nmjwgTPuf2oe5iTnNWhSRnoT4n8QR9oZAev1eoCi9U1YxzhSEqUCBC97AHATxfPpBDy7qYDq1ZzmLC3HEbke",
  "key8": "5qaPLJfdZLLdQ8aNTYzSe8sPxBtWRPdf2NUkPVxGKwmMrxpSpxQ1dVPvCxLG5FKMvjyfa87xjXSTPFTKc4TUQ5VP",
  "key9": "4CjUqDTTky6Ui3nXJZKQoWhbM7WWsCFiPJTUR6AFxDSjsNsmzsfvZXjdUGgU3EH5Fc9BzSqGC7zV4VQDqix3vSVy",
  "key10": "23Gx7MRxEzAPCjhUZZA5m9X8945CHhYZmAXki3g23EotDc9Juko6XEPXBVh4PrVPXiuSYXsP5J1fgCKXayqavDYP",
  "key11": "21E3K7kPUKmA3kLxzRhpfsJQdCAmGTsgBKTmo4vsyWn78pYY2ehw4asPBGNqF2uGiLQ3nWCebT1HeNkWiZpBeBSd",
  "key12": "4pJSUmxXTSWFEc2gx3pu7yJqp6V8ggbirH3ZoVCM6kSG5wQAgLLoJUURFhfDcLT5ud4Wgb91VTtbDAAKvrfoJbZC",
  "key13": "2GQiLQu12cM1t2U7SxwimZ3EwWBKtqqvE4CaXxXD9UqeNjtHXgJBXdKG4pN34sBnFtmE3XjqZneDmtNtvhmd39mt",
  "key14": "D6RMEyCyvhf6HwBB8bX8WJbG98CkG3u2njfC47wmJr2V66NhewuTispJaegduJMT6EGTSu5ySNvcovpTZDyioPA",
  "key15": "5voD1JjsrBLVTU3qPN2q9ncKinMSMV6un5zFXtzz717gi7rzhhbga5QaWEGj1Lwq6VcGq2H4TgdYYaTHZjGKgNtn",
  "key16": "4i8wAyyptb45DnSZj6vByNc8cJWvhWCtY2jVENfQcDBvNHWSJxWQWvCXsCZFq1PtsNPTANrxhQ1cS9msjVcijnDq",
  "key17": "2aQqcxzeRBXtNvTNaXXsrAfyX4Cene9pQ9myj9uCa4F6kk7JxgUMDur2jTAeL7bGz8nGZiCWxnvob4AKtLvfibrV",
  "key18": "gNJ3xpGj3v6t7fpue4iKoNhymBjaftUN1mUE9guLguPgKFcy8gWpa2FufW1oy2DvT66yjWeYKE4VafGdBibhQxP",
  "key19": "5dNbcobYQmWhEqBf7nxDzkxswWAwmcxpCP65zxphJsi6WAWJTEnLYeg2jSsTgAC8PUaMgwe3QEqBXB2CPLuU19JW",
  "key20": "2QBoCH73t3gzepAR9cUtLHCdhzcybrEMhCLjbtJMZLJKPPm7fu4EcCdppPa8K8rKHWXfe3C9k3Y5YHpfWsbJYRFP",
  "key21": "3fnhCLfRPg8DxUnAmvAKbEwvTFeLH9JNww11mtZeV1QMwhNsjPWT1S9x4FEyv8kCjP8oWPt4HUVe19dEA7paF4Z2",
  "key22": "2nY1TqT2BxBatLwYZYQUre5T9ghiPAhG7zat99KJqRSNo8V2ubTzphXNqyM8PxZ4trV43pVaxcUCrtQzbzRBjNRE",
  "key23": "5N4U1Z9mgNipHE3GdpmNhTAfRyUWd6vpNdf6VsFs38ST1QF8Ff1hQeeBmPu7F4UAgEZa3BC59sZrMxghL2bdFZaq",
  "key24": "REXMFCMxqRehYNu4H3hT6XwkoR82fPV6CyUyrG5nxAj9nJBDLLYMm8K7Gvf1zoGkFqLuvtAqdPs8x156fdeKhPu",
  "key25": "4CSVjXCQB2jNTUiPX6Jog6KJHwmHAYGNS1ohugDDxVYJpZrYZeDdaA6Hk6HzXKtDH7djwnTyepwUE1eYKq1dtwCT",
  "key26": "32AvMaqmV17tpwkiVJDL6xxkBZkEVxctBQL1bj2hSTQLjvs5P3AY6HXiptLbe6eNe98uQpezWjFAEM25NrwZ8SHs",
  "key27": "3AuQ3jnJYRF9ZyGhM5BGbQDmYy4sWeSZzA7H2L1ZvntGTYpu7j1zaZbSSDupGv9YY2FReq3AXBzHZGdbYdDnZX6L",
  "key28": "55hG2cynAB5JFsZLGM12TNFJZjoeTiVMpTnH25gjsLbVNyEBEqaATHJmmMB9Ks8MGgBnEPFKbsEkPxfafwENg25e",
  "key29": "Luq18PQ79ZyLTfmZnncNMeGmS8E6moAvJrAiMktFregJRtodn9eW6WdkgAPG72SdQBqrajTqN5xTC6vj1sGbQXc",
  "key30": "4cy7tYG53WZtXACUQDS5wcGky4hNJD5m3tiWTubYcbWP3eQ9buB9YSL6PzDBHYzhw4kHrB4AMqKvSPWNEaLMkS9p",
  "key31": "4baTCfsXiZfzJa8qR5cJYv7KhLZFcNf76kffrPpMUU3mXfph8ZZ1s6DAnbSst7jQy7LLGu9nwQxMniV9MRW5F9tp",
  "key32": "5mnAtD8oc83ryAacURSyKdxLpk6rpHLGqUSH9Hh1oVR8LB4Gw3FZYbrYLERXp2omM6XrstYAUUu8kF6TNzaPtxRc",
  "key33": "4EFyZXrKcBVzqtE7GdGA9ew275rTvRMWz9WV3w8BJesk32dJosAej34wZykAmxZWx4LnuvZDHoWZFGvgP7QGYFMy",
  "key34": "3XthbayWDcvPeWpGMPsM2ur3Nfa1yfr2XDUMxZKdfdAMmFPLSMZzWKFLRAFPJZ6vvPFdDq1NBW69LhWgJhuQrJec",
  "key35": "3y5hjSwYMwrnrzvEwNQma86ViVZsy14iiD22Ec49cPk81gkenT4bd2tdRS5PMBiYbR8AkumE6b8CkoY1scnFjgG9",
  "key36": "2U7tKkBNCAfdHApVp2CeNjR3vpq2yoqkg1zaNkvHHaFzmY7A9oXsiFDNLuMqjoSUcgH4rq5YvgNDWxD9tEm8UjrW",
  "key37": "3GPHZ9wQ9sXNpTrV6AaZN8WynhMN4FpreXEbj3JregANXGKto5s8KG2W4L6eCPAqJfunMs1Fvdmmde3BZkd8g9TY",
  "key38": "4xotRcoJcieNpnRWFgCfAm7WHkcRTFJUuGCNiyHDoQjHDS3ffKeRZx8FVuGsDniPEktHgnHax8Gt2ESQ2TQzFtFh",
  "key39": "63DG6TcLghy2LhBdhiZvJEi2SLM7yiHB4eyvmrcP5rVDttNKyUqEp4gPU7AVgpWqSnUBucQig2CLz1oLiDs2aeb2",
  "key40": "5V4eFnRn1QJCUYvuXwdNsycjqtUyAiheiLUrbyfMeLURnU4KrMwiGefWBQP3PAxDFnSYgBbjJA6yMgCHFRegiLZi",
  "key41": "441BRGT53oZD7rjttMf6AdqDV1KaqBVXAZhTqbwJz6WCUxN5AwuG9eYDCgC8Cyj3QZTrfQhuQE9ZcVYhLd6QyqtG",
  "key42": "3Ss3b8nQ5Nuwcx2NYJtJwbQdnTAc44cPeBavr26c5rFVrZLUKSFDsd7rbLytWJNf6MVhcorXUWRcUxd7J3v9C693",
  "key43": "5btGc3NbAgYaFpiWTgbLKj2gZsJk1KxEnjSG3EaRQR2xhwYY7qn6CVU9c2BjKdzNQfxRzSzFUtBWZLXHP42UGpNb",
  "key44": "5JScakK1Vd9CZJ7MafmQXR7cxptN6Gww8CfTyvPZdpKxXKNnzTWuSykJjX1ZNQrcBpV1bVPAGSszqgvPBM9h2kTg"
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
