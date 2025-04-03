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
    "25SWdHbN3rpxxUiVXWtk72Qz57aB7cA2awr5GRcnFuGj2m3xLoDFjTLkkEHhRYF5522vya4eV7ZqNzwaAGxF71w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FS7LDnUwWU47rofzP5GypvfUC5eqMeoj1HeiXs5G5yCqxjAPV9JmebLhEQYgF8SHNvm8kRe1Z5Z72LCafEC18BT",
  "key1": "5uQT3SvNKBAkbxBYTaC7oBK7snaXYWVksvJ3SDratwxqy9M9DeihiMDCo35S4kTr2nXGPqM7T5bxDPTkSQjwWm8b",
  "key2": "5R7fuka144DLQBYVnMvCH7ccRFWqLgruPvLMweGzcMYrgQA5WdasAyKMxh9PpX4wiR67BysHmXVNJKyFvsQKDjAq",
  "key3": "4mwdVdvm5Pa9WfPXNYobT5uVecSjQGMsKtadj1hs35G8Jsp7VHMnAa9HRWCwzXFgUJ5bZfwwbqciKwVU1sGFAb6P",
  "key4": "2ZPCw6L117Yn1fHaa2isudZWvsun8Xx89datNby1mJkuDM9sW2ek4rTmrbynQ9K5i9y4Tji7qnfz4MvAMSeERYQx",
  "key5": "3CsHgRdNNwGffKmBqdwXbdPN8sHsJvRD7L59xWKm1JYqgQo9R7Q81xGyMCa2seF8rjmYToaq2Sa14YK3qfxyphcc",
  "key6": "31i3ix1oMEjwE1t3yZ8BsPzvs1rXF9b8Ww8pGjRJBBgmvKBsu7ha8MMW25jeMtg3xmM5QqQeZnWHvnTJHPSWKxK7",
  "key7": "KFWaBvFbQLcDwA9bbiCf1D4u4VzriE4NghFegQEVt1vi16zd7rUr1mimb5xvkumLPRacF8yBUcwgxxfBdRJEHv6",
  "key8": "2kTpfafRs1GmQ6BitUjAFgMz7DyBbjretGdUb8f1n2sZj2r1EF9EX1mRT6BcbtNBJcQ1rcFpSAD6DMad3LtXBh6r",
  "key9": "3D4ADLyqdFRofqQuM7iXgtmc6iZzBeXNUuvH9sVjX1Ks7vw2zUhDXmV6NTJLrfEJNUh5VdwCzYdJtSi6fSdbqfbk",
  "key10": "2mSJuY1pnDmtfoN5DxuRCeNZx52WxebUpZnUHbBT7yxNbJmzzcKDVXjqbVove2xqBtR4rXpDLNqgoP1up7B5aofL",
  "key11": "47rRHRiiD1rjWrseh7Z6w6DCNUECgxikxWMQTKgtKzSKhBhUmMnXiwx4fuQ13QxvZMLUqsYi81mLswcPv8GEuXpT",
  "key12": "5wRvHN1i9VBiHj1PqjDCfmY69Sog4brPK8mRimpH1DcHywq48JZatb9mMJTHciriNNqcwaduJvjRBGvy6aZh2aWX",
  "key13": "4usx7B5zdgfmdQhjebDUy1YPMsCNbcCPbMFCzmd4xbH5dkzgNpyJX6WU1eqjS2pfKW5Gg9VjPbvXx4R1PbFPhWfg",
  "key14": "3Vp9uoK8K5pGMadhWfNJqQPXX1JsKiN6WVzPc83oy68tmcHTDcQrU74qrwBipt84a7dYXR6BK2c4EFRQYeWzvaVj",
  "key15": "2W28AZVf2a354kjTbDczVU1tSp2H65wgeybSb9gJyzotkHUPmeBoqzPyPMmL92jTWZRLmeX3xBVtUuECvLoSTvBi",
  "key16": "4hgQNH2nRp1RQ9DYWXErth8Ji7yEGpT9ikwHqcw5X6KRZ7CCub5F5MvpoePiuESaXGdRK86U19wsatxSqDZNK497",
  "key17": "3GL5umW9D6UrgDvMjax88ZsEBfauzVX7zde5gvmKxfPkhXgYRMwbDP9AofBNREEPhRr6zB5djcmRMz4FkzEYhs8U",
  "key18": "5QKiENVYT2Mn8Euu9tuupEntyngiBngnRAm6MdAW4dhkfNrUDDaTerAQ9DRH7p8iV2oZanMVi4zaB6xHsPCCo1ii",
  "key19": "4eGhCsC8hFuowUzFEA6S44PVqV1jLtN5DJ7wQDxsUpM83R913FmDEUjrnNYWbbu1q5ijLTZCbtH1FupRY8u2mazM",
  "key20": "4zkfEt1NiBCgEpUYwwTE8xZT33NAfxkL3KzZypxaorMwoZTbjn13M3MYA7KpxwcJR4uM4ZeSqQJWjbdJ38ovpTPm",
  "key21": "2Eg1cqyKomBxBoe344xXdDF34H3L1txiNby6mvxn6YvRYyZYgE9Ug89vLiBVNi4ZRgeNL5TniwCzbkSF6n5giUcc",
  "key22": "hVbz8CwS27vgseaNCnba7ccHTE3DMijuFTnzbxkeVbGVJyAdD1SFhLhFvGw3RxCVaB5N5JNTxvehAbGWcjUwqr3",
  "key23": "4mD8vBMbSno9GADn8w179SMCGoKsaMNBPEWhf38BDFgh9HHHQT2DaaC7bdX2NSn4ViRAbEQaZjUdgbynfEmMshkb",
  "key24": "2tWSigZfGQzphhVRVeUkwy8Th4Hyeeqczp6k34E8bznvzaNsKU8syJt3fSp3yociVZiRR3oLkLtpWvkX5ofzya5Y",
  "key25": "cvqmBZnmKr4unhE8kHe9s51SXqpXuiVwqNnNfpYPXUwRPRyYbAkEQbqsk7YRVJk1Yg8qAmvCGCBsKsBSm3g7X4x",
  "key26": "2c5vC5d5GkWVRK5ayEv7dBKZ53GhU1hy8dsGibh9oiJdMpvz4ExnjMRvyyy1yorh5VLFSUFfwks39C1fy8nYg5fn",
  "key27": "54CJ9iGwfLrCPUR7tyJMkzqiXcpLNUaE1BFzjGB1Y8AKkbNjJJeAyiu6pD3C4WU9BYuL4g3runxNgE2pFS7Jwt4",
  "key28": "3mH18yw46h4cBtnU2rxTnFCw6FFqJT4UjzxoML9954ySqUiVd9AkwsBTBGHtuBMogCpPGfRb9iQMx5KNU6ydyxn7",
  "key29": "3ifryBUUsdUmtQkHfpD9zQYEQtmYcCUsRJzTfDNEjHuKYsXxz4tTGiNohUJaqiLBfH4MKYstExua5TezK8wuYEFf",
  "key30": "BugScHAp7hAhv5NkAjtUqTLyK1PSPvMfKGf6Nz8qXBWmxb2CaCno3MScaxTXA3nuXYLezic4YgMTdNxGtyx4Zs7",
  "key31": "2w5bAHaJxKJ3pCbmVuT8DxaThezAVN6xXAvs7LJr7yMrmdcjaqrNYS1X7dr9i8qvHiVKL2bWQE4qxfHQvbq9rP88",
  "key32": "7oFe7L5Mtcgp9LvSuSH4m15W4pukECez2NaP4qps1ouJTeomGAzsBxdXeFS7TPMUksFdUwCD63uYxT9w2U3mTfW",
  "key33": "4KnjhJcPhJgaKZoP3FZ1tRy1kyKv6sbv3mz5U4sTDGiAQAouqg1qwBpQc1M6VJrutxQtnn8FZbc5HvDr445nsvfs",
  "key34": "5dwE74gE8hSXtooX4QVxVtGmDD4eUeCiDuWCkkmoRKGpobLLKCJoxLTdhzqpWURenUzFLwnvLfiFD6AX9SB8yt6z",
  "key35": "4puTYWwKXUU2eqVnR4Df9co5RBZfLsqvfVAowcn1CKSE5RPL5y4MsyAi2TtvUjAEgPrb3XRrByyrQztMh7e4d5op",
  "key36": "4KHBTtFQiYrygL6oxsNYyaaRNRMAaVdyfgYk3hYNUiUEfNLCbwKM9ECqckRA4Jmi2noHedywuEuM8iCAgLUqmZ1K",
  "key37": "wQhEPjheVGt9sBUn4iT596maa27dvkevNLHyGbribUvh2ZUur9wUmG1sxbmZZqWRtMBq7W9e8ywNFgHRRmrqxsa",
  "key38": "4WBAkFTgofMruko4BKrE3kySJ7DrGrG9Uz4dYNPwJ61iDt8e12QBjT4eD2wmnZdCz3QcTSBXj8kYz5MLrCUJxzQQ",
  "key39": "3YhGcFH6oGHiqRWvJa97r6XLuve6nhr1R1KRVEhv6d9BBGbWJMjCZPQ5czCyfLSaVaLj9qzWnps6DpacRnHJ7Tcu",
  "key40": "3zE8fyj9gXVjybURThZntgQjjTRNTdm4Xx1Ro12K4wYkugmZXHvtZKG8yuz4Gbm1fAxSRTvE3dBEX9d9XHo1tqGh",
  "key41": "3qaKCE4TGv7QeRwC85JgzWZQCbfBoM4nKn9aC5jaNQ3agGh3R2MU2GS1SEzmVX1smtPEjX3e8QV4V8izNHsM8RGF",
  "key42": "4Yfwd2f8NRgCosFF9RiTB2Dmx3Mjt2gKY8dVpTCTH3dVGPyo7LFjy6FCaRsXyXmT8qcrJkH24ZUtPFafRcXYjfde"
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
