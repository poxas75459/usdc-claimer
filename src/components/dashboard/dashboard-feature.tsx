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
    "3iJoQQgRWAdj8pZhp2PU7a4uLYNUKyqa5BHqCU8EsPRBn6yQAPBeQqUX343LiH9X8c4tExgEtWc6vPgXypEwqopj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmQnFdNZvEseJ4JbwQpQGPSvkFWnDGK28VW9FhZnPCQWCvQf5Jnp4A9Powby5Z1xijhS1z9ZKLN5G5GsH4PKYob",
  "key1": "M14pKHDnfzupW7BHnyJMyRc4Kegyjze6nLsmbVPb2oQcdVx1DN7PYVuiKuasFqqhtqun4cHpteceqqnBB4CUhjg",
  "key2": "ZphB5v3XZXmF7ofEUQrNHdKT2U2BaoCtzqK6hHM7YMFjWUgJ92c9LtfT17DdD2XusPoBLQit1moeB4uGzbK6Z7j",
  "key3": "xJJd7LvsV6gCphWNn2JeWujdgCs5bxYGqmNVHGkUZcSJiuea2oFDuXNUqDHqcVPTVV6pbLj9CDhAEE3WDNeJPXe",
  "key4": "2ZaoKRrN76Qh4tx7KzLK8gVNne1Z32BBLnCaccuPbxknEg3UBhrwMgixPvRbjDpmnEjXDzxkv167KMCxiaeRFU9E",
  "key5": "5PkAca5Hu9F1rchpxDUsyeNpuETMn8hDZgPn8VYPE1FgZiV3BsxQHXD3oaTLKjkpHBQisHjbw9t6xtyJUMnPZ8ju",
  "key6": "xH58nJsmhGjXzDkh2YfZdhPMK1KnMFST2LKQG49BzHuWkfXXeKHpW9dfo5Yy93dcWx6bzpPCaFs3RL31xN9rDq3",
  "key7": "2pL2t5NHEy7hMpW3D4EnyyicVdzK5xgZj8pzjmrqdYNc1Sz3TRraLnrjNX6WvZUzt1Baaxc1MGT9yQnFb5L4z1mc",
  "key8": "5PNTSExPRZHy1H1mrHfR8xTKTcEstXjcu7nHdAaMZRpC7JxTMNY7r2E4Rbv4NmziCun6FXGrZC1yVCoLADmcgfCW",
  "key9": "5pU95ZW5r7H2Chsfk9bJvvtKJFe4zeDFo7YBd6FtuwwQsQnqvirxcqt647i5izjfsLuxSPLwjQMHWBErBnWnWwTr",
  "key10": "2mwWfTcd4iiuB2z37VtsuRjCsdQwimSHLyLPyyxwCWgK5op7nMwuzZWtnqCK1uRXa2DvHick2pA9eKA34TF4Ct6o",
  "key11": "2vVdJQraaDueBdKKg6sF9t8293ZaeQDepfu6Wz2hs5yRaBRxQ9Yd7tyBrWY9wkTeqXX3nqzLTMNS7MLfYPSW6CwP",
  "key12": "3ApageKuGxN1K2EzcEpPKZyMYEXB6dWCUcGiSKpEtjgFWxtyBTVsY7uSB6ibgepZUbiwvu1WCZzr3f1g2rUmJ8hY",
  "key13": "5vBqsKk5SXfGeZjfTUmGqqGebfcmZssBJSAaV5qimTTqXqxEkovw854gFLtpyvTBu8HM5PPKjLbu7Q2SyitvtyLs",
  "key14": "2aWvyPHudh8yDZLAgX9RjwGxnfu98A2VnoBUb9e4vWS1Qjz3g7JZRt9ghbqHZSSZBvmPpbwhCHeV9HyVhQ84wxN4",
  "key15": "3AmsfpDMAM7AHFUM1R9SNFZL4sov8cayiey6SXPXzzGrfpAgw9oV6Ad9NBJx1LSyMNAsoVHTKg5hsRruHfVJzDyJ",
  "key16": "W7iUy4YpQgpLgLjCsBKUzThFUXYYmWmQczbe1af4FVX617r7s32AznjZsrhdYUGNGWgpHU7Jrv5FB7okpRW9R3J",
  "key17": "5S3E9dLXx2Z6xtihuC6tsphfZYfTdfQg5cEDc93e1pcGg364JW9R1ddnK1ykJPPYhchovzjT7a95nHHzRR13zCzY",
  "key18": "xkoQ7MQtYAkCTrGRXLcxZWXJWRGp6bNo6iQ9BCT5sZ5HFmFnFcysCnXNa73xn9N8S1FfARZmk7KiTtb7m2WgK85",
  "key19": "2XfNegyosH4z78QLeB7CKEtEqX7fZ36ofdh6kGsmCNPmQJhJcGeYvahhXs98EpiuZvhG2tvdeUTfVMHkmBbD6D4o",
  "key20": "5Fg7htTaNqiXrtsyfeqkFeMWwJ4KxTny4GAMrPSnMWMvQv2k54srBcm74i4RiSgj834m8tVhH8e6msYmbuxZvWLC",
  "key21": "yVAsHkKD6yQ8nhR6V1icmsCmQaiGYLxDbrdScBVy8Xg515SNofZMbptRy94nLYsqZcrkRKEK8xoGhxnyu2oJCuA",
  "key22": "5XHQ6n38RVKusQBUJ6eg9tGCzHxsNbT11uM2NSqk6zyr7nLHxUMRYajdPhP7DncQYSUKrtooipDdAxENuAbjhRuN",
  "key23": "5AWUsupmomh31c7oHDtiDWfE46Q9z8onyZRbVZRg1uddTfNHPiG2W8j3rTvYrdJwkqgWGfiHV2kHNobk4X5XYzSN",
  "key24": "GfUb9EA9qgw7YYCaDmPP3ph8P217xEMJdxveL7zUuibyijBbyanzTWKvx61phnLoGCkP5hpPF98rUxLpPSP2rbM",
  "key25": "5ux9y25ZG563cQtNy7nC3SBoYJp1SbKvbZfgk1csMPtTyAWqGaKJ2HsFNZDpdPJm38HBWpR76Wnuuz9m7wfC4BLV",
  "key26": "dGQzbRGPmMCrqMHLSUs6kdtgeDk8jACVkjqwwxDouJsGB3mMo2n7jbnySvCWhaJcLFjz2hTnr9SD98H9UWssibH",
  "key27": "3beVT4tSPKMRDMPj7pr45ds2mTZ7wwBsBwJecRmKqxaTPN1e4nfbXdwEgJLtLaYjb25h92XF8jzgdg6Eo4J2zy4M",
  "key28": "2L5KFkPshHPDyEX3VPr4TzY22MwKYBEQHcTZhJB21fKzj2FuDEvqrxa7x5b2xbtjrnc73Umi6xo3ipULPH3sHY13",
  "key29": "2dEc648r5xa2NUhy8r5XG5vSDDokLKu2K687QdEqsJi9PD9P6ACngRugt9cc1WA2ZqsPrczXpoBX7p6D7YoQTcvE",
  "key30": "yNBEZnUHXQSM8amuKLJR1tgnjkYkJqHPeDLcaVESUsmjEn7UCjPfk19NpahEUYg4z7Fpgk9z34DKjvTrArxcsEo",
  "key31": "2sv6vpc29yEMfaTbxaA9fmjDFhR5Fo6GxoAPPAutNCBELTtAfi3MDqid19msNAbRLub4ZsQdXHoBtx4273ow5WeR"
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
