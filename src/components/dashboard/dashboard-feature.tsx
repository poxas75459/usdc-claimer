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
    "4GCXrqhLXQRD22uPrGVrL4toamwHWShrsk8jUPNc7ZzGjcuvRkqMEm7BczgpS4CsyumBtu2SQ2gBTMSNCwMVV8ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7dYBKbTU12wx4U6wDwaPchDfsq8TS8YRqj41wSLGjHwWpwD3mpy8vPPfNhQTXJmCabbdyC6MH1FZorGTtFNqGA",
  "key1": "5DxGqgKzJhZYsiEwSBmUao9fWUavv9ZrYzoyFV97ToxjAnysEVurvNEW9m2QYstuXS3Ka7mmPMgf99Z3Q3foCNhU",
  "key2": "2cG1fabUDiyAwnfu35Cm8H4fYhDLvcNxmjVBx6cD7UYdYnrSuxenPmPwNtxv7PFvW2uVxnWhU8JABCLEwLVTDJBp",
  "key3": "3wo3N8HzmmcHyMTfazM4bwv9m6Ppj1351nt5AezEH9XgHs8htCwR5fXkg6y6pbn8SBVcMSxngK9JyYEEjZZ68dKA",
  "key4": "5oAwZppfwBbhAWfVLDfEjsWDY7vTpmXHt7PtT3RGRsFfpWQHxK1Uys5MbT3JfqQAaKEx856qJW5Gm522zrngt8Ce",
  "key5": "3fHqGJEUFuTvfxCfQ8AVQKJ72UmW1eADTTvvyEwkxfjiWhAeRPcCuR76TmsrkzLigy7tWKvQtgVLNLrMSX7uxcmL",
  "key6": "4tWcVJjQzDsDWoL8hDC5FbpcHqiJwsnVKtUNnaFo1atnDdQeyiCDiZyjqFpEfRJk5SsZREzEttB7ZBMMUaPJ77Mv",
  "key7": "2Q4iumM77aHkiJ4A76HkVZuCXWFTqWvqcKiuAjV2i4Gf85eJC457zBy1dhA4FNxpnE3a1FGVXPjUDNMMa1vf3ub7",
  "key8": "4xHQwZtqQMtZQtCAWTf3wREwJzn3q4Qac5GyrXczjyvnx3o7FKbuCfh1qWqaGMuF7nQvhAnrPmLqB12fCnBuPugQ",
  "key9": "2MUaxmtYsvbAChQYWAEnLsqDDQZCsBjeH4Qc8vDrxfntAFGSjDdczo5Ws8zewwSGo5Fges5b39fcyDx4XoWWWmjB",
  "key10": "4KZ5tCFaNrR8BJRzgPUEjNGH2HYx3o3Q8nWdbRCe1ZHf4vgMxQM21n9BXtnyvYETD5zehQUkq2VY32pzLKhyodrc",
  "key11": "3gnUQZrjxKeJar7j5vwpefWdu1hz4jfyX5R2wiDMFX3k1szrR91bmVoNbTafycKApXvv6px66m1LTMvfSbKE4wqL",
  "key12": "GJXf2EyKbtrp8VhGUsgbSR1mguFfLRhqCt4WrAHVdG6xprXdGZgwd6esWGmSXDHNxqiQ5zcrP8HgL4XukvSKtad",
  "key13": "4TyPRLcPtEvs7osTWpPBTqAW296Y8YioprK7dy7hX8BhbyYPN7VLk3yRnQYPmrbdVLDXuxhZhAVMTiZPaF9VVwXc",
  "key14": "5PmUQ9idVRztjcZHdHbE29ch4xUeUUvm5Vg5ZDHpiRaMM3QaTVyP9xVNKgyiHLLMTEkDd8T7aCbD48gb914QyBkf",
  "key15": "4gwLfZzUwroYNyRv9VYYWRhS6Zv8P6uASrau2uzn13SVSZmpvbEh2LVqXUkaiGhEftjWjXe3Q54HsQLGZMWe3CFX",
  "key16": "KiBt8QsCVfGREDSzuYHtBQDR75UgL44UL73ca7Xu8Dwms3ZXcUtnKnS2r5QH2oSQmcEQwZjWDfkbC3MFoNY5g85",
  "key17": "3mvNrHe5bReTwAAo5dqJe9wSEUcSqWKNBSTbMMTaVB6kBovMU6BUpi7oGA6WEzRNDhJjwCA2TZsP1dvmgBjPRDDk",
  "key18": "3hLzhN5msbyH6dhoaQncqowNPHgaLh4yYsJxdktdgt3XpfQLkWcX36eNtyumPPhTUkAMHr3EH3EvB6omi4GgVqYD",
  "key19": "4zS3TquYHnznMNjEvsi57DqQz8RpSYbay8UstkYBFcg7FVueughsXJtuBQuiuxcXUtHGV1fN6y63XqYjGpp4RmZf",
  "key20": "3Ebj1CemgMGDxNmzXBy5ipm8Ne5BZXpthQkNysuvpDAUXtmzhv1sdpSVqyf6sQ3RJbM5cMpzidG6kAbSjp4iL9dT",
  "key21": "nCiHke6QADktQNaeb1TLeqYJnw6auGg7ThLor3diC4RWM9x7C6YGevgGe5SovyE6hw8GFdAUTGddsGHd5ngCe6o",
  "key22": "9hbxfJYBpidMvAvpCMzfqgf8ssCWg1uCRZboNth3TBuSE72Jgg276ct7pSsbqZVZFjZULwSSpbnhB6iqh8uiEXm",
  "key23": "57ni4Qvvvnawz76tgQCi5HPuiQGhckA981MffwQbAknyGn2wVuYYvLo12cX7y2gphoVSdoVqxTRVwsU65sDiaLe7",
  "key24": "3mp18gNVYRDNnhg2a8vuLEo6G96MZxN6YdQuA6fzHSUKJH9JLUVK8BRjCPam76PtjXqJScE72ZPxtP7g3hC7Si3v",
  "key25": "53yhrHJSXfdKdgWkioUE2RUK6AcqouTEyQASbgQFMUorjo2eV1XEgDbRCoJ3Y119fyg8jn2L81hBthGKADWvfH4u",
  "key26": "2BqZzNkJ8SsNHwf9N71dzUmak1vbPHoHwrdx45Jdmotga4a9pZPVv6wFodtutHV5kmbuQKEmQ9qoz3cspmCEYasP",
  "key27": "3fC8pR3AYAdw3bv2bShXeG7i2qWVD2ZPpEz8ZRUA2koC95LYoaPCoywegRtU1WdZy8b6U3qKroXkfyRqZoJCAeyk",
  "key28": "TdABhoXBhTxo9WHex59jPs9WRWzunpAykQXX6bcBVHHm3mKXKidK7KHwHhNuobUghcTJ7iXzxqChpUNKqnDq4zU",
  "key29": "vcXvcqcyFbeYBRi4n71FSRcjvnT1QVHp55eVEeNagkcxXf9gHEP571VLzeNo7AUinrdk6tdmRbbo63bJYVHREGy",
  "key30": "22LXa3wbNfAwUhBPTwFXzYH1AjsQPTgdjqS5PjfboWvYJbq6rz2QRoZRSYJY7rCzRMKVm6PxYFv6mcGunR6nehXA",
  "key31": "SeWy224aEmUaQbo8Zub3aEyXXG4hFWpjUHUaGV6awbftSEDBtB67bcP32VZAZfKjBdgEcyTGSvLhK3GzYeTEmDF"
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
