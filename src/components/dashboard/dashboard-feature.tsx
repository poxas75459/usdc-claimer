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
    "sTMhvBkjkWCeR34PRnMmZurJbNZt26sZETvYpNTSiyDkUYV9euUBzMCZRUzPZRrJ9WG99sKewqLbGKEqtsHc33g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xd6VBb6opKNcuYfHsjDoniscSaHirEjYgSM33Jq3paPrTTXRWodkRYR3tB9ThVbozMRmc1svv89GMz2LLrP4Jtf",
  "key1": "56sTYmR8UaoHuAAg1xRXfZqq49FrWY39T7eVSRLYXX8MSBGRGEoxJY7zrrMo8DFRAtiXpRETyMYBnWyTErt5T6QN",
  "key2": "22wDTsQ3RxzXZBHFNMRhzBpuoteh8YBgEsQ9tpReACd25fbEMbGN9hnerS41jLKvZ9SybydtJvG1zRXRxGZCv7Gu",
  "key3": "4eps4kyp9k6EiBoWegQo6XB6NvsP8ejMqTZkvesRxtJ5eMjFx1zLyKucV9StFz244YdND8bztvK1HX79pFNAWqEj",
  "key4": "V7KPSMRq1bcdcF6mMUKLPuHb8rKqsP1qkKqGXi3QBtRbAPLAs8vMbGXj2tKPfSZ5upS6qH4oiEbaDNz7hYHRCub",
  "key5": "2Fgo6g7nbaDPxV7JAHEq8zJeeNiu6UQfskLaDf3NTLvyhM89UzMHH6XAfA5o8Hd4yadu6keEPr5T9BpbkeLB2fBd",
  "key6": "4HekCBjcFijRNuyR1tRVWGUzbwzyQacqM3AXpT9JTSB6yCDzrRMtz4774Z3eSVcbG2wFTasezPvi2oDw6P2a9DuZ",
  "key7": "4TAhN4rHoyEUTrXPPWkHNFfmLo8rpcn1ReMZ31u89VRJ9qnHcxnbUf3KFsfWAnBH3oZwH44AwbJDKX9bhyVsxcT9",
  "key8": "2kXgaPYTQUJinGJxSr6W8VPAt5qQLEyFXVneqtp6ztMBi9jSPE9j3kEtfkGPcYwT7wRWMvhesSbdbHcwzdjGENff",
  "key9": "4YFa9MQYTzUfvGQ56ruLwK2GvDm6RyRx8fQ1XQ6LBYHzeTVmCqQj4JJWRjWFWGuXLZSHzRxgggGJdTte6NEmNQe4",
  "key10": "3hhjMCYv4LUq19FPXfQvHrmhhL91hFD1xwRSWVks3ja7cXVsnXZ7MaJafnLQTy1prgeS9FBEQ2GjaRhWxwuyRHP4",
  "key11": "6r7NXAZYfoZ4wbNEBnZod28Nd6PzfqFneLk69i2LgnZmTVneKpJR9LPHaTmQgaGCxFBw9AH47dWmnhQ2Lmqcn3d",
  "key12": "34YJ5KzPXLLVyUWJcfF8C6nfmiSYBuuATgj6E9TGHjnTZJn5mSNMmiaoiVa6xerT5qcHdJa7fPigBYd6EqDfQ95h",
  "key13": "2k4U9d8FPZLJywy1fBBFFQmqY2CTxDLKVDUfZCi3uoV9NgimdGMAn1EYixYedjz1V6E5gTecLYY1hsjidcc7auvs",
  "key14": "3hgVq5QTbPwAjRAtDGm3ScfEXoQqA2R3fqNYYjpDnEKCvT8XRc4xF9jrTYr1Y85MCniQSoFPFvDnCFGpkxyV7qg9",
  "key15": "WMm3kLrQnyWaLSCpo1D3cfGnQnqqMAhSnyugvdmE6By11a75C7qby8hK5CjR7vMWQfE9di5Vk2KJuMunXKweyke",
  "key16": "8C66ikWBLK4T8TFnxdpGfwUxyQDCZD8DfRnqomcRsAceoPCQZnGXWqXuEUWyfEhJ51Uw9Eo4ua6gg2ffGGF8gzh",
  "key17": "5PZ5cNDNiBLhGwyt9dYuHmWL1YV9dxBH4N961M3hy5MAuFh6KSNURGuR6GVQZzpt2Y75fZAezwWZNSEcGSZe1HMZ",
  "key18": "5P7CTZRUhkenikUYt41JN7JCTXvpFUu4SoopQR2NBDi1aVysoR1MSG38T298HHF7T1YhJExom2ErsMxAcQWwjcub",
  "key19": "465NYbmp811jDkSBCYouoaNEHJPGSoo4ZTsNmj1vpicVWPEMpuQxvUQphWbdt9gAZvS81Pxqu8fmfTLCv9AvBS5Z",
  "key20": "2hbTXjVbvQWpeG6yPwcBYdzuyvJU8wwE1CEqbjy2Dh6UP5o21vubx16fXcSuGR1qTXpzM2mTFP6aeicZVwBVNDUN",
  "key21": "3i4cNFtFVnBfqKLpXKfSoqJxsrEpmtfXDTD9T7zVdyZZg3UiHo8WQDuUhAmSeSVi9UpYuYBDMrTgAMLWpZ6N4BUU",
  "key22": "5TQT16pdiFct5mJSgB6gbgxpMA868M84LL1xYvgzsXegfb2z4Yyh14AXF5edWpCAnVu9pyY7Xnj4ACQFKU92J7cx",
  "key23": "4Cy9z2cFmGTQjwXwHUAHgLhkVNw6jWTZB7ST2KuF16vsrX6cZdiWD5iMAeT598eocksE7bfnPf4tEMR3zDNfTbZC",
  "key24": "5dkvmycFH1jeAtd6KTHTYWnqUAk4ftjg8FojoKV9RUh8HyfrbHL5yDbBK43JvWNsACByBa7GfSnNCGUStyiJbcMb",
  "key25": "64JkoXHjfCRHmtGhd25siybBuLcYKfKZzZWuptmStHBGEM97kJZ67iaxdxm21ywMVia6BVhkGRFx85v47ak5un85",
  "key26": "3SFUNyTj42aCbrrqEj42GV2vyYWZFvktAP94z9RzTHZhjckakjUywGqRs4cZQeRtZGuWH16XSL8qPfqM1Gmfp8aV",
  "key27": "3U5QeqZJ9WqP7EhhHFa5rhZRcBKRNoQEJfH76a9HtNZGxrkcARVk85x6Pw6JbaE6C1HeYphvgcphDyfs5rtEJZQU",
  "key28": "z6GEptH96uTG859TbHbhuLDbJK7EPUp4pwbbYornAwzjLpsaT4oRa6DrsQqTn6ajo6hD5eB6xkwxX2j3tLrv92Z",
  "key29": "3E2qgC9nsrh94cighuGE5QU7jVjMs4TnA4GjS11W44RyAN3hgWnMCnB2d3BkKvzNDdv1wtW6Vx8yja917FKiN6zf",
  "key30": "42zdgaK5sdaayRaeP54WFwYC1noLXeF6jYQr3CdCHSQrVkJE9DFNMx1yUKKPqcjLeT8vDw7UGxrdnjwKmczgfCSU",
  "key31": "5LfV2rANyyWaqJ8WqxkZPz21cMRsrviVDwWUNxJMqR4kvekJYK2vAaK4j4bo1NdBs7muv7DdBQ9j6MLmUQuW15mB",
  "key32": "4NxrWzGirgh3piBrJJ2WXYNc6ppNSMTtv7sAWxzz5oXfYzgxwdzTpyLEnVQQbEU61wFZkiQmESupRgL8f8AU2HTR",
  "key33": "4aoekF77QPr85e7LbVMTV37UX4pAr7MURKFjyFBf7N9Vdo5S1PjbBLt64Dovy5FhPyMVvFRhyg9Vd3VAWd1s4Wgp",
  "key34": "5zdnqfx5g4z5LJevcd1Jbbio9TqJgGu1z1FYAtUq4NxZpFJYFFZmBAphKDvc2R5sbkfKoCkAyZrHmG2SAUKadgoA",
  "key35": "3v7iwcN16pueJHs9UEjG2fETBZBpAkiv5ZiYpwZ4qz7dkDM2ehCUesvMjg8fY6AiutQoQ6tCDfqaG5Mi4uCi2UGQ",
  "key36": "gZ44akAn1oeeuYTWkzkJEcvvLLyvySM2WVPc2ssK4npQQ2xocuvAf9HrHer5iMrfoNYeCoH2Xim7SaDLjLsm9fj",
  "key37": "5hRUDVePTjnbzb47p4y4Jng47NFft8igHZnUbzagJ2zedBdc95h8gFA8BzNYNWgWBF9frDsFhUrMCeEs1qVV7yYP",
  "key38": "4uEQ1DtXQdP9GdyPCw32irP8JujDWa7XARnSyRbQXtr8cNwKmdee5XXSoQfnkxA1kWZWTQWUtEeiczUZjLUj1ELj",
  "key39": "3GZQJntt2Bc56QeVpdHNU6kAymNGpU2oMLUoaNEVj43Jc2B4hQgnpQjEDAcqnfDsKzSJXKpEGp3Xiw3dng4mqvVc",
  "key40": "5DtrDWrmvc5aX2w2J4kf9J9TaSmf2W52XG386j6LHFQQW1gLmcCvtX56oTUaYYgzrF8w6appyqqXB7UzHJ4ADwKL",
  "key41": "4mHqSHjpSKx7VMbzSky21i5K6EfbayT6yCE5CRrqFV6RUW94ajqZQ85X6bqGYdJXJVCrManyh1f9by1FSwTREyJb",
  "key42": "5aNnNYYm5mGUtvHirXjrnTTbj8cFFwvYyW2EgNGtXnMAio4AFrNmNp17pzemkZ3afdLmb5sw1KoH8TSUUg68q9PK",
  "key43": "5DzbmE1eTTHktAGNurwsAWnLwYwCP4R6UkDBAmA5R84eVeugDsgjwCbCCT17ijYDUgKpeC3ijhVNdxALDxUJorJJ",
  "key44": "236BZbWu5ubhnM8U71tAah18sJN3UzumLUf5mtZ33qoQP8HVuvu5JffTDV1HHYgp1UAf16k6zUCRnT1AEFNfe6tD",
  "key45": "4yKXwuchDMm1iLRkBMfbpHLER4rnQPo7tpKYfBdUxLxm88JGrvopK9CbWWMhqSM2ygdnnuwpDdbWYakXDFKsrX4H",
  "key46": "iu7KHhnBaYBtG6c43RGJ1qR4NGRtD3oBZn2Ck17CirUgJxnGcZQdadVdFzurqA2T7PBz75m2MuJa1Mo2Ui4z2DX",
  "key47": "3DdLg38zR4A3cubtjUr2prgMYeuZ6YXfktY1TvUVtXGSAjE4PjDt4TpJwvqSB5yFwiYwx6kTJfVU8FDRSoPmJQy6",
  "key48": "2nrVT4jFSDSmWdKW9w3TCycnfLr7VYrfeXifwTt4NG7T5rSX41PVM3hjh7msYb8N3441aRd94ovAQur1b4xM8Zh4"
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
