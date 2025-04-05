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
    "2CE4bF2hUpRfpdRT7RKqPVfEjNFpaMSQoWAB3vo3kdP1zDwh7mXbhMjP5QY1RZc3uEo9ajEssMiz2XPsQA8QrrXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irwRtC4i2N9KCcLQputBWkMeSosCFAReoQQnFdsKAh4ffziTcLt6xzS4GVUktTKw4V6z7BgP1RWuMCXhZaPs96b",
  "key1": "2DgNQKSpW6Fc7gUgi2Zjq1HDAMA2z4rkPLrEM7kpkDnyWV5LhpKVfPSDgQDysnQ6cdRBA1RyDmKGACPByuKhabH5",
  "key2": "5qU7HzvP76iaRPC8qqPuE9CDZng8ecZ6d5RJW7urAX5ur37wySSN5YMVpFTPbmENn1YqZzUXqVzw7msmD4H8EnBN",
  "key3": "5A6cbDK4AhWYVgdcGTUTctfapSGjWe7DCc5WgWGFhmsrDUUQJqbPFgaEhvVrA2WB7kg5ebugVkujCSXyFv8yvbHH",
  "key4": "2myJSexsqYPY3CgWwRbVLBQebtgtRBSWijQFgXY9cdKQ45xqy1eLjUnfqJPehohmNPq3x1s7tw2hTsbW4WoDB8zP",
  "key5": "2USYgsoGZZ3gixATnBfDDrb5LGUPwp65KcFKHhS9wF8knRjZCxLMeVHZnnXtBghwWqyRQGXQBNWDv2zgjwriseXC",
  "key6": "5ht1N3S52XFBQa8vHmxQvkdCr7o4JoUp2XVemgXmu8bKGJ5AveE86Da32isW1kbFKjUgetecjDXZphNjSjfpHP8",
  "key7": "JKNT63GqcXv68MTH2AdMfyd2riNNKkLZbfbxkNU4kob4FWGSzMEAGLcCE27pTYcAp7mZX8D1uFWq7ACkaAgboVV",
  "key8": "vuiVWyRiX38KXkwdiREiqvSQ9Yma7ABJFp65Lyye2MMyX5BN9tKrLr5FJdm1ZWYzQ7iP2abNTX99LLs3xxQh5jV",
  "key9": "2hRiqoQFmv5z68ffghknhanZJ2KPPEFKbC3RshW2efWbXQdaocrRoiHRVnm9KyN45sFh37zUUx4DPPnoP1gKtYks",
  "key10": "PixWTBtV4YyY6CdS11QzJtPfmzdLjvTvj18YQnj1ENYJB89eSWpDpAH9FKhtFN5yAfs2pst3XerPLem2dw1fk5Q",
  "key11": "38sV5FfzypPVjWyQKGw4cFLHqd3dXSYdtnKTpKLpy3Zsvk2UL88GmC3bzeihP94ZjbD8bsg4vegphyE1jmdcXrmn",
  "key12": "5ZskWKBBHqbmTGW8B4hrVUHA2ak3fzNyL7zULuPh4TrfqYjH9rPiETLRCB9W1ac5JSombU3oRGJQcSYYuCppN111",
  "key13": "36Gw5ZH4vmkynb7r5uMhwSHvomJi2EAkwvDyp8ajhtrS83nNMCXhMXrLkSXLRQ5owm45nwhaZ2WQRLwM891zopsk",
  "key14": "4eZ5HYhgtHL3r3F8hXhqRC9T3SLYh3jZCwg2BfCVY1i7pzALo1uFQUrDCkCUyPzdxdiB5UhMhe1Vf5pbRdRFGRh4",
  "key15": "5gUw9teFcvKpTpkEHfCXgDLf5EFMrCjZuXACveXh8twm6FbMRyVeh1Rp6aU3z25UAKYasEEtPma7oxALHgpx8RbS",
  "key16": "4w2QN8fJnvFZ7qQb7Eev3CR5N41oVqypUVVSxr4xguKdcEbVNsjCQvKjecLAwpFwsuypL3aMT7hvk25tURRkqk88",
  "key17": "1Z2XCzQgk6p12xjQyh81RdEW5YqJfrd5p1YoNFhqG2LHL4kSSnZPkUcLjCi3nBFJYKuErCHhmXNroDiDQxtb1Xn",
  "key18": "Q3BGx5LCwzqdbf5yrM16DtXR3cnzxe7HsezdYQWeyPf6911GLn4haYTyHDPG9zU8CdVzpwwSKU5NwFHT9pfK8Z3",
  "key19": "3nmSjm7BcvrqM6gm3d6n5TZ5Rhe13QkaBsti67juXPMijsuftq1bx6muN8ZUXhmvnkdGTX6LNi8ALWptGu91pvpw",
  "key20": "3KCyZfoNjg2xjVmsmLMB5XUutuLvFb1FcqWmZxg9JTMVAcUTuN9Pu4rDP4kumWTfmJf14axL9TBArSt8TWVcwGtv",
  "key21": "3GZW53SgQ5j2X1NCEjrEF6yxCTzkTzLEUPY5Esr2DqsBRPyCaVb2gKsaX2Y9P85dp4mUzvTSAzBN5Ym1Gxcxi4TX",
  "key22": "2dEGHcBRdrJAMuRTeS3sFNeGY8pLU6sBasZ6MTvmJcehpKJmPZYytCscvPWgJYboREqAa6VdjC8csrpwx3ZhVYNY",
  "key23": "mUhCKryih1zRCa6JKweL98PXwbDkdQJGA9kGJADjD5Y6ZmrLnMXNVTH1KHm6AcD7PvdQAtTcqvjELLbcKLESPUT",
  "key24": "4HV4oTMwwprSX6ikCVVQp98ugBwWQRoPUVBwAs3MEZZRUoppEt8Pc87NH8Ugv51Z989nDMyGnWQonp7VfAm9z4Lr",
  "key25": "2GMoSpD9h3eqWoqT48uk4SACi18YA9SR5VoaXSPY91TuJyGVc59vFSY1ZZw52XKDBXzkSztLjv7BcvPb1hDpPy3G",
  "key26": "3FS3WdkMU5uH713oYMsZTHYQYwc6yNVgqHaaC3rcWwehBRfc8sfjKkWjAFaCoKcCXhrzhaK9JJqNBeZT8h3dqRS7",
  "key27": "5obVwVmE1XqLuSqcEtwEfRWJ36fqm5HWEkT3XXEMy2c3D4x1oEtdQyXEXELc1bUYR8okFLJCpGgHMxecXHQziuqX",
  "key28": "3YDmC7AFw1JQakDQR4P9AA6h6CCs15b381FPSNuWD6Sn9o9k3ZcGWsKrzuGnK36zvchvwTrhEturtmwRLcV1K9fY",
  "key29": "4Bxq3jszL4wtDEvCReTCUu6odvuxYf6uFDHLiZFicEJKciBiJyJkmUfZNs2L6ivXCKRM6j5UCSQEESz58bj27tdg",
  "key30": "5VQBWV7E3LS6BNKMVsidi98xZbXgbapXRaYUzLKBDkg3jxQ9pu8WNmGByzeP1F5dJu2DEerhjYTvTxnANEUQZ7dN",
  "key31": "3M36Npx23NmXy7J1B9QdXRvKixjK1uBUHrTFVS6XAc8NvVNCJxiMsBC97exSGdrqmdj76LQ6K4hbnGfYLNjZBZhk",
  "key32": "3KXaR83tNDxagkieCDBPXfbYoD3Cb1uA9jweectrdAtV9PHsTPSh51cFTMc8b3zNeR9LWxXGD6Cw2TKGrrCrhHYv",
  "key33": "35Ybr9gfxHABainC5K5qVvDn5w3KuvfdfainB43A9VwWYgj4FqbUxbYGFvcHGMUNmz8N1uZWBy6RUKXvXHxSNzVk",
  "key34": "tWAYXSnx5DayF7rytjtkbKtwsCUCdduFJ9KQDVQ73cFseE5EFrjjzYQYNttMcdn19tpxGFSUZEkqmupNPAeSwQ4",
  "key35": "5wmcx7iva6V4SbAk39u6MzubnQNUQqYgBwnjGtiFTpSd6TzWTtYvYHxicGVrfyMN7qhn36oBrvHHvGimQUgyN5Mr",
  "key36": "3ahLybJ79tnw3uUN6ngrwbKnwJuYRY3giesBnJ8AJvMUTLBnqBJjfE5FLook63GaSu4knw9ohE61bPWCQkmKxQSC",
  "key37": "4TECu6eQDezJf8dewTFX1Ae7P2cP7HjQqgrQgWQkL2fcygwUDEJsLvjD6eqGtF9J63x2FsvHXP6AsLonpUX7FjD4",
  "key38": "2YFEH6V1Eh9wsjhNifNCPhGnFK5qVk6ZLPrBju1kc4SHAjUpsigL1WKHyZL1Ug31wFJQEerypBdUUaNgaYw8bAif",
  "key39": "31kcnv59XAiAaaKD5f5MQKPj2tG6HE73HTu8VGQ8RZYBxhrK4gZXNqx8v25LX8oMwz5mnSSFzm4FGsAuinttmVBt",
  "key40": "5QvYF6Vnmmu3gS4g9bnF4hy9o1GWJmxTVWfzesQWrnViW6ZmTSx4aDfLHr7crFaKTL6S3qDkBRX1CeAKzvfLEy6p",
  "key41": "4VUeuRoi4qGqo5HdpW4nJGKqVPcJVVRTwxxJhWA99JsMUPrBfAibEyuBZNhz9qAtLnDMdydQa2e3SjThw5NeUkLY"
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
