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
    "2BWBqbXeaBYPyVhvxcqwXzudRG7iQ3LWBJzUvNyumpp6QQBYdHB2wCWFDgzLvDcwWKWeUEia4mo2QdiUbR91Gqx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2At9KF3BNUtNB8XiXXWu4aFqeeYeRo5B8BgSsB5Wf15tZxpvCQED5ZxY7xRR6USe4zCRQg7s67wy7bwqo49u4KX9",
  "key1": "5idhpYQdU4xMH6km7BwtrZt35d19GWF6sNLP4r6LZBzHcVW7e8owwppcC8mSkrbHW1QqcJCUTNBGnJdJZpVeNuru",
  "key2": "5cDr2ouDhvEFrpk5QQJrPY65p3EvdjR8pkhHLzhgKwc5WnBuqDzTmjytbCyEfYDtx3s2MBh5Yusi8PBRbmqu7mNg",
  "key3": "2BtTc5qaYY5hfANaRwpcdrgwx8K57U6ydmpAquVxVoxyJxFfsrWkqdPGHWn8u489wFPE6MJLh4EqcbMRmhwTiCpJ",
  "key4": "gRYAA2beKUsADfjf6vr4WcnQPKJ2JzKDomLBDoQ6sBMbtxGz2TBxzj9Le3k4KhyLxj7DT6RiQ2J4c7QVkCwejgq",
  "key5": "4D1wiSD4K7cZgfpnUjZLTzEU7HzFr9LwUh6QnmDBr6G4zSd1Br2LKt65RsRukFtkdnXbHHUam2eKukCmAqWUUEiB",
  "key6": "4s5XJGWKehXyVastX3ADjruFNG2nQDKpzyfJzJfYysUkbxQqnkis2ddzAvnws1Kai8w5dVLXTX3P9zWhdCxUMPBU",
  "key7": "bMGUwa2z6zyNoPVNT6HzgCN7aC3CBs9qiHZH6ucKbY9yNUd3pJqutzTEFv6k7j1aUR1UBYUD3t1xDZj9eGNXLwo",
  "key8": "5WnW2aodgHebB6MGKvQwPUcn4N5po5dSKSsdtMx7YrM1gkePExJvNq4X7ZMtHSDbGu7QRKM9WRLCeJkADu1amtmZ",
  "key9": "xJXJdgjRM7mp8owLZRBu4L6nJo3tG68GA5mXQKpTrawoCDArCxwgosZeQRTNeCz38xUb2BvqArAhj21pwK1H9ss",
  "key10": "4ahwKd1piAymj4Y9SaRqVz15cLW7ru6DsLu6USJ9V1XHa5cm7WfQv96ZSnBzCBFqxL7zQVWfCXNWLwAmTfJd2ZsB",
  "key11": "BvZnfr4mUsapjPJjRGZzXRECfaGD5VEacoozKdWeb5CV6HzSMRUguTmMR7dzA6pjQb3CDzAY5KkzTguAgSWMTY5",
  "key12": "3k5rV9yy63xqidbHLiScrP4Vu5MBwgrpiiR81NKDf5M9HHhkLd6CgC29tquZMRi6b2BcYYY35rK9hnmqZwm4q6Py",
  "key13": "2ckPiSvXs1Fx2PH2VbifKRWy8dwEJ7prKbmWz4y65wEXrJuYwaYCJVFTFgDZvW2mARQASUwGyu9zcsK7tSHQaBV9",
  "key14": "4yq2riGoJ1F2Cf1fBhTbkBC7CGMNe5yqaTRBYN6fKkfCSF17iuB6gC6XRxy34T4qwfC6NGg8DCFuk9EcWNL7qirs",
  "key15": "VkGjcsKV72MG98FPuzebe39k5iKXCfg99kiMZbbcbRySMCmDmF9fCiP6a7imb8R94JsAfA4fmYUNWGnuKzDC6uo",
  "key16": "2KMYBnvMhDr2niyyf5gmRHUW395g25LDHxLap6EPKp4bMgs4EEcxBG6BTfy4gA72CUGYs75ped8T9YiaSzQZe7AE",
  "key17": "VV3GRzvDPQsSeTU6RfhkL86xouuU3K981mKeVqikx4wq79ZVm4pEbzD4h8Tzo4nhzyhe7JfyCktaZCimxvDENir",
  "key18": "53mVbFbc41uF2oH6sphB8szKhSMXURGtLwybwe1rnpu6acjJbqNANaec4hR2mt82cTNxLV5aitVd8sDCNpB7y4f",
  "key19": "2diXXnDG3uPwFA7Vuc46cFz1G6Wdp14k4y2p8yGYGadoR16YnxaZJvG6f1dX1L9DhhpSrhFpNobxguYUJ2PXze7x",
  "key20": "oamaTTrGiUYJC5NJhDZeWLUjAwGkfscZ17nKjCiKJiSgZfNt1Nuv9LtEfcBu9J5JirNcVacu7qH9hMscmVZ3uYk",
  "key21": "3ibvmkBnjb4NqVPDU3kUrmHmmAzpTj5D241M5zsHQCmN48T5JX7Zn2Fy3rhVP3LMoaPPUGLQcB1V2ipXZu7x9oMK",
  "key22": "67qFgHKwPRCAAfyTo4XDJXdhEdPtPmVZFMwmYoT1sMD8XwPxRACe2WZ91dobk31rGkij5pYDcyVJNzpVqeMLnGMP",
  "key23": "dtAUu8FBVAiYHwYoEX9wMfKbaFN2fuCD7Fa15bFgg2DJ5tnP1PcYzUezWJVxVFSivPvYuWMhiYK8oPXFzfub115",
  "key24": "5E8nXnLBfpCiiSgzZB3MWV7Yujdevk3qsmH2hE5aUSRHB5itTcoGhVTTMFPKpRSbCaUWNTJNccgLDXuNJ22dX5ph",
  "key25": "4LfTYhpqobJ4AsUqZKezVoNFTNwcu9HfQbzYKEcc29XmPaJXxyovNrwrEo5V3idtT9dzipV7FYiZkduNU52yojVb",
  "key26": "62eJmd24koy9nYM2fsCqWGvSZJ1fN3NpXbrt61KBNM2HRqgzaA7Sp1c6aKeZmq8gEg2WVLb5wdswZWaV6VhaZQ4h"
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
