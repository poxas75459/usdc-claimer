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
    "4EBSSdMNpLdfP37anPezZVBWQCGWULjj4yqPsPhSCAYEQ6VzFQufPQ3bctqhkLGRUR6ZKLiia8MtsYCcJuV1QUoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1qHSQg3czP46J3CfypcY67aYqGjAjti2nqBH6W4T6qtVc1CXypJhSPpQia2VXqJmWVcGf91iHMPVRV9G6xjk1Q",
  "key1": "52QXzED6PRkPHNsMkgaRFSeGNKzGQcRWNbiEphRF9bqFj4WiS9goEnqU6G7fKvMiep2nm3cP6LzZs3bow3ov2roH",
  "key2": "3NVB26QiEjC67qEJ4gDkSJZDbuKWaCktpiC15qYqj84ct5sJ8XvEwa7jyjP9qzUAwkZVC2FqXuRxm41wJqBeEwAn",
  "key3": "5QrzZfEjXWSxkWaV1nF2eb8XQs5SKsWiHqDjNsifaNz2hB9m6PYnShpbJ7LrYsDAEP8ftZAarCyCwKgBDduyP7r8",
  "key4": "pQxAAdshYRyQKdUrTaucAB9A68dbsDxy2EACAFVTPiQ1Qoda9syf7KFrJNAgswbZp2Cft3CkjKuHscwDrD7unM8",
  "key5": "4Rv2VTxCLvAGP1g7cuiM5HccCX3jkBaVdiXrU8JxxEzNGsuGJWAA1Dx3Fe2p7W34DCJDvTg2YKcP9RnmM3GHRNjh",
  "key6": "2r8fN8CmL6RHFC1tgcNQMyw3cQQmXUEmwXepBXT2jQyxjGa9fExn2imWs66cJLs97yAFnyZ6be6nmoVs5K28Sz34",
  "key7": "5749rTjVRGhFi6icyYeNAkUticSB8HdK1FojcrD2UTUw8z7Vfo9NCfarFiNqp22XJ3NF5PuderCv3YZQDUUreRCs",
  "key8": "5dxAMZ46HWgpYLv1i9fo1H1xgJiMZoEv1jVpDuSRRWD2XTkLRoAPFnKfsZNnUaKuA9u4sCNrjRUg6bNL68bS8RNL",
  "key9": "yK73SHJJn8E1aLWgQTHdMLtUEuU67oisfZ8SkfcZ94k46aZV2XwucZuQzAMegoPfujZxjaEa8pjhtsM5UQzMZkn",
  "key10": "5joqJX9ynmihD6FuaKjtFhf4sWerwTcM8MgmBg1gWqL9Q9MDxHTajLvwwW437D9yWt31N17UaRHwEGFnCQ5smtUZ",
  "key11": "29fyQ8ETdbzhUfw4fqaTLViwyJmTnVSmmxzBq9sPdKBZEjsQPJZfRXGXnfoTXYMQz6eSCYoEbUb1BfSNh4vFNiTY",
  "key12": "5Va5wkfWwDfwjMuBTjquhiBHSHoZSwScxEYCrC2ATZ5EwCEhkqqy2j8dMCPJ5bz9jase5gYcbRoWXYDqkq9BXehK",
  "key13": "3WjMjdEbPmeYHVAhi9HmkdcpMftBZkEVe1U1c7ZJoq7Wo579riQRP6uUK9fmUtUj5HmUmKfofmp25kUfxrmpumYx",
  "key14": "62C8woe4GFu1QLMr77mTQavNwSaYyp6muuFN8VnHovYMfVeJhqngo9Gk5L4x9eeDVLLv8PL27b1ituodKMXZLx2e",
  "key15": "22bkJD18yVHPt1Q96q3X6KcMKSKrkRbLqFf14jouNorDkXCZsVU6seQY2d8axhsDqsnBCeyjVhoz3V4GJAiLzMRA",
  "key16": "5AWZ5iMXvoyPViPDPinQL67fJLZaYBr54KkFKNy7XxZkYvyxd6MRhgSCktLisjMnD4cLaHLU7z8444oBWxozwgLW",
  "key17": "5d5KqGCi2mnXD2jGxNixNKmjaP5vECmMDsnpLStvkyAYFt8VPvoMwcqgnhnCoFfY31PxJ3y7NPQ9SHYHeW2oeqrE",
  "key18": "5SNh8SwGPb4jjNqrkbwgApwVafkXUDvXhM63GPHyTGiu9VPL2RGxj14Nq7HuxCTxgpQRH4q3zuV8m6tz4D79t5Be",
  "key19": "21AKGzG1HauMd767UTwd1evvkkKt3y7rY9mgTAWL7mMJLdR2YWyhduziqB2pYfhMTqRJGYHXPaWyQSepKMJPtGNV",
  "key20": "NSdV35ttcmuBTGEBy7tKAwxkG8cXMZrQfSHNHoQuaP31ieG6WoxbFyosqPUzyZ9AuBGZu1bFpM6wqPn58WTj158",
  "key21": "4LKD4xXSuDayuTZuUFb6HVyYrXjk7D3hAjijXcZAgH2xSE1Sm5C4yLXaoBo51ko5KpQtod92PjJqRHDWnL3AdxGS",
  "key22": "5GbSsYzCutmwVsa26BbC8cozAcQghAKTWhKaDuwonMd45nV5EnfvK3nvLaYwr3HPhianrWJwAT1VhcRVJGJz6RCT",
  "key23": "37YRMGXm96FJMwEq95TUDaZH3spMfjnWUy59dK9zcXSfNEck3GkSnYwtn8m9R5MdDv2a7Qvc2JQfzyL8wEFt9ELw",
  "key24": "3GX8sPaHeS2NcibHjVp6KhE6LXAiQnsjDs2hMk9EFA6FCg1Ap1oY5C7ceauA1pdtrvvfYNURXfysRCZtUA7cSD4J",
  "key25": "59Mcp552K2M5VhMAYi4uTFMB8EanSgFvQJ7MCz1TUyoabq9XjzXpzq52EhFED56NNr2voZ6NpDw4a5Ejyw88oLgn",
  "key26": "3wiHiZoVtXE4arFfaAdH5oMLqk3xoAzJ8BnNW3j5m3c2XE5iFp9FuaPz2HwnEnG9WW9Vb2pYY52T6HynzLK3xAcG",
  "key27": "2kcfcbbXvUK3Bwa5v74sAN5EfbkwoJiKLZb1kJEA4Ys9hUj6f1gECEkZQaZVA39McQDWX5MoZAAC8bCePi5pUpD5",
  "key28": "4yHEWrsCStLDJDjd6iKfBpaJMHhyhfz7ecZgaoM1FsPg8cGGzPdJ6sPfMK2GciRuHf9yDB1dKLwN8wxCxoUkCUkR",
  "key29": "4We2CJMPRHcfjCQwJM5eYYRwKQnR6XL2WdoFDz5fA9RnFhx8TAGFtDGbdZCGQ7zb3XLs67wjeoooZWeGESpfnkFA",
  "key30": "5DXnfYHdD5UApoL9dTV4wJ5CPhPvr1hxH8q2VHSZ2WYsF6SXz5rha2dHgZar4QbdZ7Fbk728gDnfTKCRWj9Wk5av",
  "key31": "2wzVHzL2K1XA564Z34fgUUcV9VUtJoGxaLqYbdRi6c8MNLZtxhNVmyFG3oCVyV5xgsrksU3TAdmnLibVcJZ8G4Z3"
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
