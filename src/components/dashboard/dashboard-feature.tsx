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
    "4MBVDttvxudbw9B5nqx4xTAWsAHr8TECcddyzo7XzTRq7scjtLDcNsJBpyeqUCXjC7gsUC1uRnoURVnvmyM8H3ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNEpoB45JYvGUNwhVXHG6KAQA1G48QEdtc4WRSqLREeVKyKFCPSVwY1NtQhcPbpWVCtWoCQ5N69i5kTBRn1iCN9",
  "key1": "296K1mRnfReuWimXZ6tXU5cNBUmdUc7jaU21B7t58t5GpFV1p2CcSah6QHM5yadEo7w5aFcpF2S3yeyt4DqWFFPu",
  "key2": "5who56YZFeRUWg9fZcH6tp29RrWBmV1yyXRzYpqWpvMuxxuqC8PYPXosrKQ9A8ScxmB3TFdn9e7vWphFoxkgZMuM",
  "key3": "4ty9WrsRQhY6jyYwVXqGNnLmz7A2bCd4V7Ua85i9PApHL9j8uBGTJcNbsSrDGdwACKNSLvgKvdL1uTD6u1Gpd5YA",
  "key4": "SKSgzp6f6Zb6DUhYxkx9zWADwjA2vutQQ8fBbTrPooMTdQhvdBp37go3mdgM82BVSow2YiH9DzXeeiWQrvsZWtQ",
  "key5": "4ndrhQPdgLvqaaVtS7KxG9HyvmPew85kT2RRNYMawxXBUrBZyfJQ36BZdaBJ7aDW6Vah5huCpte2ixnBA3uEAYW3",
  "key6": "4Zq8LYjYgCVJjLDSqfoAa8GbDTTut2B83DpnAY2c3THFLrZfFnzVAhDJW9Hkwr3d27Dcf1Ash9Dd4jME7W8Gyi8U",
  "key7": "3jwyZJNdAdp8UZ9uoHMHHjoubDipcuGCZqDgzDKwQ285b9k5tkyAoBRnFk1TwRhFfhJkYxQgSN3kQYeRu37UBZsz",
  "key8": "E3LWRBH8V9DrpgtqDNWhrEPYJXnCBgGUjUnxZiVd6Q65VpeukGQ5ihwVYJ2gLa879Z3ZzBa4ZQcLJJpZbYcxPPi",
  "key9": "48TCNvN58BmfweqCz4s8N16mqcowX2scM9dqqeShCLpDGZ7DdapP2YQpeK7R52MVdW2zMuFxCre9vHi3HQV4zdVU",
  "key10": "3k8QJcUpAxNED6gA8z4e4kkwxPwfZiUwJoNb9tDa981ZtTR2YjZZzJJu4dSP9HvkJQA6TM679Sec5EEVa8Tez99u",
  "key11": "2UiL6ATquCb9stH3ViurHtrdkQHq9AcokpiR5PysdpS7LyMkyNPK3LYLxL9jREBDxhfKYiNVJtPtJSYi1vs9QpzN",
  "key12": "67Dk4BEp6QxdXuVvPJHhbbBcBeEsS9xQwuhkTxdMvPGL3XJzpPMuVPBuUd4ACApVzHP4Zszun3oKDE1DVqpALan",
  "key13": "3FjerUb4kD1oVdyATV2FU1TuQw6pcrDjtc4pJBgqANKkbcznZRXipsHr6pCXAwRG43FPYz3Zyz1bKBJCHJatN1N2",
  "key14": "nUepoFo4B4dkGHhdqAs55vioQv6jedknyMppLD3fDfxVNz3DK3U9bg7iwLTbv135dwPz9rtEkeHhR1Cno3aKmva",
  "key15": "4pdCB2M1AYEYYGhJZNUXgCkHLPC2sQFpCNrjFfVXxvLogG6Zvr1g4hZ5TofrWPpiKsg5vW8d6TZBJQM5SLe5y3EA",
  "key16": "3Ldr3raV8nDJomdJsUuzHfvsvkCEKub8HPgQb3Uc5xra6ooDizDJr6tEHRf6rzwEuh1rjMrAbVfN5vtpaFDSTNLC",
  "key17": "5vcwJFqQM4Px8PBydTEAJo18kKKtJ8QpCrWptNpiMDcXE6YWx66VQBgpAeabJvpTz5LHHKKi2fYDyhP3X6bvCydo",
  "key18": "4fNtZDzYzT8VsDZSHhu5nwobRd3pk8anaFLBUpMjpwuaZq7zyu2CgJjYpbxkUU2kqLVGE5oYG9YJdbBkfFvxyfjW",
  "key19": "5cNeh2Lv7M6CHtXC4uFSFrCWsWsuFsjpzCew6u5cbcSnbb9QJu2zVKWHDBFSQm95AnRi34oAiGtk3MtYzqzF5VA6",
  "key20": "4w3rzSp2wKj5mWdkfaNmrSBJxN4CxbC7NX7sBAMKCF5AAGPMVEkrENFvMeUcmSnR4ZrTXE2vZvcdrZWN9pDcDQar",
  "key21": "47XYzAZDxNTR8VYD2JPHYopd8q2najHNREdocLo1UzZdV1sFe4uyZgsV7z8cC9UbifStAEe3ikxeH6rZVaZZbxnU",
  "key22": "4jstR1QDjK4UR2dXhrGV7bivDJPafptEiby1fpZ7YbwZep4Yy6YvqE3v1Zp4RdvqHsqrUZ3CFSr3QQujfYsEWqLz",
  "key23": "5HwnRTuGrrFtwKDEjzEiBeKnvBAMhNjaXkim3oBDz2tBNhChoAxitE3byMk8FPw2LU6LtdimvgE4EuEMhr41PguV",
  "key24": "3aT9b1PC97Qyrj8yEqhCrJTsyhxAybie6LYvnQFNATRKRi63zcBtutPjrSanPFKTdWEhrn9iLk3x16bDMhXoXXqV",
  "key25": "3BjD4Qe9QpcriqtDiuMLT3fV5hSFQjWk7JCxJjSxVbMBTY3fi8UhpHwVepwXYL4Mj4iTuAfb9xJH4WHNnVKNmHAq",
  "key26": "5R5vLMAeZMnHmmcGwoaRpWpgxh2zgGJ8JwT49YgJq1bmboDPuaDcYH1kcmDPMc4nGGm2Qoys9WaT5B46Mqa1L2tP",
  "key27": "3HCTyHQ9p2RrBuYT2jHqxn6Ce7oB9bNx8GUm4w614JHaKMLqfEyxAQpARz4dZexMVe43RegQifpD2YeDfT7aSX1L",
  "key28": "2iR9RysurtLV2NjvkFonM8drdienA8cZmBhV2PjUSNRaQbkfxcW3g14wNKabqLMc1iXenmshjPMCeDyue5VNqLXd",
  "key29": "2pPvAuDakig5FzNdQyvxDXFw8TGWmh8Jeybk8jn6Ny2heYaS38xmoknN65ZDbQdkbfv5PncUenLVMGdEDTin6K4F",
  "key30": "36tvaVcdJkF6W9QDnetWdjvp3eF6WVgBjoqQ5zHxfudt9ZE9ngHgxqzUdNA7U7JFcpM2rUBYhPCQcdeXjYKj77gW",
  "key31": "37b7Aef4gudEh3vdXqcPMybHsCsUP6UToJFW7PSPL8tXKhbNAGrVefrPZ2AXEpptDzSycs4YcfVHLACmQWKmDUpz",
  "key32": "CcJADknqd9JF83qKW4JV6NaTFBu5jFCmtFw6V4TWwxFr4zrqikZEoMZmq2WtYyMznmhczjuGFuBKXR3t2mNAhgC",
  "key33": "473PYwmDrbFzThERbzQEmZgRpBBJEdWboVTvp9j841k5wWWw7to1sbuMa1k2VhznrjJ2pyYf4ToVzVf9vfTAy9By",
  "key34": "xmdJcomvAZUDyc7JuX8HksTwtFAmywrNqQXnrbuhGJEkJtB6oJqqbU6yXv6ZEqmPFVbDxx6L8jt3KrMavZShE3k"
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
