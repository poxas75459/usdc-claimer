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
    "2aXEPCMYiqogvveZmpRxopcVUASXFWC2cziyHBbLE1WuzEkGckYBoW5LWzfBfrY3VgpamN2AqJwGdakMgayG16j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjPiiDjXmkGQ8mKJViap2Ysb3TKG3dMytrwMcXWBTsMjA2kFpjfverNTWzNRamnFeYQzGrVPRcNwDDLj4SDdgbQ",
  "key1": "3JrQPTiWVd8S6Yos3Fch5q9YmC8oY33d1PHox75drWxoF6eJTkwNc9HMTpDgb29WqU4SaGyAjbLUMCBETHcrQ4i",
  "key2": "2nXPLVhL2RLXoVHV3qEc9iAzQZcSLg1bfyNhSiDc2y5YGqW9E2soR9hWfvpEB2hgt55quLMnDgGALCMoZx52UYSu",
  "key3": "4HtBdf3enspuRhYu6DdfYLG58x4EaE81Nouf2U2HkD7UuRRj6NFDmwfazkDLzZkLtwJGqcn1rZfpN8LTqbMkEeKy",
  "key4": "5YvTTbuFaY3tRHfjByQVKNxNrw38bLwjd1zt4RXj9qKrjYAMn9dHhjCdrJxBdnTBiroePCWnf29kSmy7wufCKKLN",
  "key5": "4avtJHzCEWtBt3JyyVfxueyV24XCSuBwXKkccjNsVsiEjkbyLozfZLcCWc1YTXb47mpvau1J95J3SaDJQvosyS1a",
  "key6": "5hMLpkxMwFvNmPzL3Mcjq4q48CBAABp711Km7EbgxiP1nNeHFEFLVnz4ciSk34gjnLTTg7wPtgtviyGU2huQktpu",
  "key7": "4Pastj8YBj6jiKk7ouVL9qpkjTkEMAj67jg3oJ5kjyECadRbWjDFBA4frDpNUBymiuoVvRkGVv6b6LmsxLFSwJZ9",
  "key8": "5HazqHm9M56fg4gkcmuCT8J1Rgk1Z9sjiVNJdCkS56fmJqSWMJgByWxAKrFUe72KSKjBu5eNNawyo3jG5g5sMqw6",
  "key9": "4phJXatB2TPo2qqYsJPQW9k3JoNVr1hAi5cS6QQfv2Hx3drcKfzDKBaN3KT9YbmkPG1xSfDE1aicNDFdSZDVQxRp",
  "key10": "ybwCgs9Zh1j2EBNrVj7mvBrL2PvFuCkoRHVZgRGemyg8icXobCkywZFKC7N5knpBUzvbWVBCgbDT9F8VZryaCE8",
  "key11": "3K9FN6eRke5L3fEdprY49asMX9rb5cUHN5NL9HxJZiTENr2K4TRudi4u2rKUDx5Wr6JKhxsq12xDMoagojQm4aYQ",
  "key12": "6zMhTW5XZt9L5x3t4mJfyfDxcWC41TJT45LtcG8ybqYvLYm6mrfSzYi8Dv7K4pBeTnv1gcFKLLVShgzCJGSQtC1",
  "key13": "5Ycf1FU38cCfCDFXbx5SwgpCsRYU6jKFnskDgNJeWdzRdvKrqdCsK6oZ1kf3L3CoANP1FoUoKZ5YBvNY78t5Un2W",
  "key14": "2keqAD7T3HMTZ6LyJ1wkKMX5YZTb7v3RAAiMnHhiu1iSkFh9zJVcQD6iobepEonzD3k7911pzuRuH3NEje3hSacL",
  "key15": "5f4pTmTo5Brwzpm332w85o3PLbJkKMwqTpqxkUssx6GLm7tG5RWner3YjRuBg9hcGm7pstAwcg5Bwn8ptV9jVDtb",
  "key16": "3BuoNkJnUfqYerjskxHPeRvbYE3Zf1xhNggytNCXJe4AjJRnJh2yhYiE8NoeEnnmLPJaUyKQmAU2ETYQod8AEea7",
  "key17": "4hAmE1HTTx6Rw11WtXGoQmEUao78eA5dSxMRvJivuea8gw2uLBVDUmqaxh7LNTYhVvjTjecSwZCsgb9cELKtmFCU",
  "key18": "66EqRSQyP6SaQGDsPcukexrDHctBQBmLYPkXDZUHLbKt2S1LJJJZ8x6HHTyxhZBX9KZk7Xpcd7S1guUyv1Q6Tofc",
  "key19": "48Hqw5YyTmvaQzSkMqxfdVLBGdfFeQGyNmBudSVfev4UvxtvA7fMWjFh8SsehWdVepnmnQQgwvs6NyYjYZjP5ZUW",
  "key20": "3jF3kw28fsz8NK2STdhNRt9YKZ9XVNtDqVLMAwosXLzyHGKvyvBb9Jo8EWJGZu1GBWUszjwTUjAkbadNuDBtYkUA",
  "key21": "3rofxo1Z9xEF14XSUBRpc9xYEeByQpM8UGmfYY5fWZFPyuvasg7AzuKcew9PqeEEh6RM8D4dHkSqU44kfYNJ971X",
  "key22": "AyzribsXSQgsaU4d3EjeFYZa4rR4FUHELYn6fcF3YLUKYX4B9ak6cQKz41WTJnKcYn97b3vxfCdn9FK37rajUe7",
  "key23": "2s5QygDvdMH56uytTNCeyCQTnRJA5kceubCfMU5Q37nBC5V3T9Lg61ycGbNeEVQAVHVtCcS7S3zZ1Wne8FhKavM8",
  "key24": "3vEDXpmnTv8a3KBcngzizZjcZdPciEbrWhSYjkFuYJaoukowzeewFU8742tcvaU32EMdSDr3KWp12Rn2BNkmzUqc",
  "key25": "2nhnWtZ75hqqNFibNrPQk99nnzoC3mjFqgvFRUN9DtN3wK3tdbMjoWLXSGZ7diywzKSqHxbnSvjVfjXwSfp9bZ2e",
  "key26": "5KDjsZ2NoEKviEPKskgmMnzNDXFNwiwmFXEECE8UaPAW4hvip9TAAUDuYh3NgKqRRhjeRYdfSdaiPs7X1AuEnvVo",
  "key27": "66jB7itQYTgFGzaJLEraXKM9ZPvwR81oM15b8X61KwUf6EnX8Fq8dyhEU4Y2CviSfwfCkBbxiCrkaUjJDsaofGNc",
  "key28": "3uf1s2JYG7yDFzGYVSspHNBW24W9hGsQiA5R5gqg89F7pfvoxH3hEssctKDZKmSWm5SuFBSHs5zRebA6rJ9nnbD6",
  "key29": "3ea6DHy6L2GuXuLNSamQQi1bnPDu72Lpb9wQGXved3fUfZAWVDpXgW63gu6J2f2RTxrXJpj46Nt2Ei83nKswe796",
  "key30": "5n3LHsm9ZPTCNCtZuDznpR2YjsSujCoD4F4tQuwPMb64AFnrAbmgxiKWX5pPNocY5jVTduT4LTbwN4uZg17tn3YW",
  "key31": "5G5CTzSLmhsdYzquntRczKuGAgKu1ZL8CgXsdspBUHWLpPR8eZoA8mNsSPrG45Rz3kaLpZZzwYmrHhoKMqqC2nag",
  "key32": "xrbUvYQMpXUsuimv4fnxehC1GiALZurEY7qVyhtZtvtpCJLY7M6pKeZ6R7YgnHKLRerh6bZxvuk9Uh5NRK21uB2",
  "key33": "2aec2T6nzATDir7gnpo2e1dyewbPXoQnFsrxodAqTR2ydGHCvTWzknQ175knCbAYWZFJ2NYLUn9xbpQkWFUi2DzE",
  "key34": "4DqAkaRVAg44aTwTaYmMBYtRsBgFEZ3uHrukX1x5gNDTuqhNNR3MUdpfeLusKLpMjoV41AURkxBZJijqJ3JhNHsj",
  "key35": "3UZaG241fdQFnBDywpvN5HGC6R8vkcmXTMgQZawm5jFDrizciusJrnnL4b9Hw9mvH1QkonNmcQR3qTNH71BhU6yA",
  "key36": "3sz6fi3kiurVmrYccquqS2bWhnPBYF8y5uYQBr84aDf1LbPHfJsDdRUfzJiMHmEq3iVYV5GPEScrBHAdzurmyAVB",
  "key37": "ADmwg19s67jSn7izuKDNda47b926XBV756sijhMYBDz4aVyoBSMQ4yLG5eNx5Rus566fsZBWLkUH4C4ks9bK6L2",
  "key38": "2jAFnN66Su57cxPa1Z331WfHFA9EjNNaKGxbYMAyM6g3XRoe4YrT1zGVGoDC7bqDTwqyssMR32UfZGshg8nmCuTm",
  "key39": "2fV4i1Rbeoso6KLQPfopzz8rfCvfs9eo92UwY4Jvhu6yABATG5L9Pe7mDznpQVR1hNeZNmA2ojh9SK39RrNX4nGu",
  "key40": "3hCVu4zL4LXPnZNH5gwydjozz2fvVgsiCLf8Q7gqdgqXypDr5PaiNANGhKNMt4mZwXaaaUJLACErcC1Pbp1paBBL",
  "key41": "3tu1DGzLMTTkfxmxi4G5FpbhtZu6L5stuqyj8iBmqx6SSErp48kywUCtv8exqDyGpENNvxWmZ6NKiJnCWJLgNss",
  "key42": "5Q13j5bV5hY8xZLV8euQyKRNgXvrxnjnGBcbMo5CW74twLj1ZTftHd4rvFw8o9CXE1hKD125ggESAUMDLwNQAh53",
  "key43": "4ThzH9h6hGtyDfou9EzS33tUuVAaN9MamiL9TFWLQ2CWkY9QzhNia5nQBFHgccp1pmgibRTb3LhYYWkJYNoM7TTR",
  "key44": "3n6T6TkrtJfZs7mJQ8DT5fpWvXY6jfDx8rE36VAhRvn5pdvM6Qn9W4ejLxAM1WpHJBshddeWHdBTGmCN7JudHUkU",
  "key45": "2dQ5Gof3JrqwsRQWq9e3zEGfcrZm6cKDMc5U2KwuQXSewbUw3xjfLnMfWqxQmzJhPSSm68Q1zG4EcqA1rqYAaaie",
  "key46": "e9Mgidn2G7x1rrb3mW5veLH56LEHHQoqNJoowJmmHvgWk3WwdFY9XXftCmzxoxbLeiVdo894j6D1ZMrTWGGjYZn",
  "key47": "mtbazbTX63eSFB3ZzsEGi3eEa4PivpakP77ToKpaGmnwKCkV1i3GBUV87ErA61aTLYUCiS3cJ38pU5g9gTYn2bp",
  "key48": "55Vq5HMZ6vZ9noYDm51mCyxes41skMAJhKdReXXitV5FxchNAp8hHasRYkvYgGADtyHSBitskwPmZRkn23vWwioj"
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
