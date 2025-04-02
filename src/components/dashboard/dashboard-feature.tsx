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
    "1M1PqnaJ7hdcMV2ZCuQk4pEbocJKPqRTAADDbjkba7yEqmDd3axDMb1ESBrRDnYBUAnKML8B4GuTV9tS91gFFCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32inDa8gaGR4MLNK6jtFc6r73yrkGjNigKrpGs8aYn19bFVQiMwvZyvQ6h5NvAcCbCnWXYUDBF6gjYhCbFDxSQUy",
  "key1": "3KrJ7y84wFtU6g3triKrMoZQsUeobSf6dMjZeSdWbcutERUX5CyRhG8jGyuRkKZWHQZgsnh65AHabPQZ2bGQsJLB",
  "key2": "5ckwQwQfTecF9kdbkhkL25igDffY13JPMzpSzz112zua6rrzbvKmBaxx6AHwdBQ6B8MF4rL2aPK91c2CXzr2wCcs",
  "key3": "5mbqWgqGqHLdvqcKRGH1SgLAA5CAMxNBmGkvbNYvUALJdmoSc7ew3ujCv4EKAvMMh2egEqnj78KdRB4M4hvS3XyN",
  "key4": "dPpsq8UCid6DNGTFvYvuLXFWjcksrLmrYCA9EuqHqUptk6RSDvvU9X8VhqcRU55QVjenfptz4tmwYEoKUhxMoDs",
  "key5": "DSMCpqCUzaGsXitZ4bRMQr7tTh1QtaQwwdG2s8FzBRdVA2FnR2wHJHaaCXa2zxwJx4Cr5bkRPPU76c5qdTKVXPt",
  "key6": "5eNjq3DRq7nx2fxw7LxCAjgbMGTv8DwfJK9CpjeKEX3EwCaryw37BUERwMnNU9vZ9Jmx3HoWeavY9ELXYVEuzJag",
  "key7": "3xWtgpzWSLJMQeA3f4LjD2BTvLGdasut9bnWjAvf4WvnDesVheaNkow6uTVCKBmfM3PuT1f1kKe5E2WX9wjN516z",
  "key8": "5HhgA8kPU2oLwsTqhHcXrCiKt5F1GzCwzFEfKboo6tEYLFuYt1fkFx3HRgccbwrGd3hEdvQSt9ujtP9DyJU3BRhQ",
  "key9": "4CN7HYXB2x1zVoHsHECGkyueFbqe7yDRAta3EBcwzRahsA5jKxTgivqWHatN3uCmNQdJvv4EGhqUR1QEhdLNgfPz",
  "key10": "47ZFtkkLJy5x1JtkZ1VFPHHuL2awArGmoj8wb1dhcK7E3KGf4MWQCeGZW3QEuauVhG89wx2WTAo1A6rTLVkzgCsm",
  "key11": "5pQ4r6RrMcYXfSERhg3XfdEG689cLP1nmutDrxq6ofhcTXrHXPKLL9bJsMoEAxQ7cfHPZqdwb496wdqpXXoDTYER",
  "key12": "3UVMhiCfJYAfaPZR2PZALJX9V9Nu5jdexHxJQp2GYaTNEUk8jzU8UXJrEF8m5iNTHntwuytjZiSntPcHo7KQHjWN",
  "key13": "619K1nAwm9ruutFdFvCmgmQE6QVXYpqwv35VAy8oGTnxRP9KeAKLmxnyJ4Hfmqqf1nhzXzRd533bZoL5g9HsSR5Q",
  "key14": "3WkTEK7hd9ybdNbW7FVHsaKpSp2JYNKLf4RABVqRGtzyPSQa8YUYsiRRRSZZiXP9yfXrVDBopzig6jyARcBBc1Hy",
  "key15": "j6sVc43DApuupiHDVU1FP51JZ6LeVAYUbjo892PAvQmmm41nPEXJwoEQUM3LHGQGjyXKCp5RyuTVeamJ375xSX9",
  "key16": "gFsX6Lx3TjTB49cmc1QzEbuBazX3b5xYDV7qgG7GrUYHKvJCcJtjuPtCZAXZFhgmJh1oBWeN8Dg6mCHE5TPsCgs",
  "key17": "53oma6dStedjvLzhPzEwh7sTeA9jNuzc1SmTeMKVhcXv1ov9Q9iGi7GxoGKeujMHQc3KXdFSy8AC2QmGYTriroB8",
  "key18": "5tUGQsFYLHwQeBmtRu57aJRR4BZFNuVH4D3g9jy67eu4XpHfVxmAQLCqPuN9CgCqwhLQRzzcQMQ4RBe89shMeNb9",
  "key19": "4xBLm7bjQRF2rWcmapqEvwr27crgyoceSvChwUDC6yMJ5mdtsdfhQZvuswxR8jWSqZuNHLvwi6WByiKxTuTXXATD",
  "key20": "5s5pDz6hdNZvvUSmdLnudacLgaRr5LqUbKSjnC8oah6dAseKSMmbEuCX9tFRJGU3tdhujkeiXahq2jcsiN1RpaKr",
  "key21": "2zCFE4LmS512MnK4Yq2wzcvzNx3s7KZAUGW8WjGu5RYTawkA3yPMoDYGSQ2cEy97ZHdUckXJXqsB3JUjAqkTQDHG",
  "key22": "SpbLdpEHxfQTZ9aVTL1sm7WfsWXUyM5rjUGVJ24VkwKjCPKcvfTHG7sZfoTdq9JgU2AcbyCwa7P3w6jRgnvTz5R",
  "key23": "347VrCArppv62r8hqV2bxnDUNz3c1eH5teVJUSDBHj84eVcEztErpLzrNvDfJfTnmzyX3PyMeR43Hdpmbiiepgrp",
  "key24": "26PPL9RiAhemCpqHfZc8tFWRPMh9Ly9QoHVqp17yuAG62hFvNzZnF4Usu6owm7fWQBYmpx5aRqfaBx1WBcKCB8KJ",
  "key25": "4VQ8HwF2FUcGSvVu8ek4sHcipU2Ew2uof231nLKXvkmykYkuBJnfnQXqujgjuP1zVYA8PcnTQ8Q12e41j2LWz8qX"
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
