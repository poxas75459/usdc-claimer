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
    "5qzLazoCh8JwDhTn1S7xqbd4ftr36aYs35Pugz2vodDjDeb7u6but6HhoJ5tj69NR1pUH75f82hYja3qBUKjQBPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WK9me4jhdPzcRy4JtmKs7uK8ajpB53ZEkiUwmqULioPSUcct8awHAfTgYWGb3pRyhtGseJFQAGev7rsfzr5519E",
  "key1": "4iYFwvQhYbJXhbFiwLp5CdJb4ijeQUc6rc5GHtk2qdzuoYMQnCvjHFY14F42WEvVeVPvhxFNtSxEttamTSd9JB8m",
  "key2": "4nVfXJpc6mUumvfhKdVGCma2j1MveLvgdWT1CWYnwsBsL3BCBupvpvoyFDT2GqeHxMvM3FtWGDNRrasrggw12zwM",
  "key3": "2h3UXmueXvNeftqYRW2siwXn7eSb8AcNfwjLU4qj1jt2VtWvDduKZbsW4wGviQCBFFWWJm2qyQR4zF8GCWgoJ4XW",
  "key4": "3cnmFZxj2iJ2C8S4uuSybiJfZDCkyEH3SxrCC5g6GxQMJ5VDVJToEqPVBTL6iZ212RWGzgHx9iY2qiwSqoZR7LFP",
  "key5": "23xMPhduT3VbBuFpcZYkLfSTK4DtPW4U1DBEVdV2hNVBDfYizAsw7JVQrvbuR2rdRnpUCcL4TsbCzB7yTeRzLgKH",
  "key6": "iUoR6W8usfXLnJKjm62yuPY9CzHkrcrHArtHcwmaX3L2Fz4wR2TLK1CFwyeMnaT2zAYrBzyBqrweCDWHouKF4oL",
  "key7": "KhsG4ewt567WjVgSi2qmBFG4CwTTGRACaVXqotXSGEQKspEGPminPLaZcou4JiFw4ohhDW8FJz8HonNG8ATwvZz",
  "key8": "4xHkAFA5ELcQcVVLgmGAmyqL26D7ECkSNQVukzG8EzjoBf333jsZPGXQKuGQWVbFdzTGzEdoNSXgafWmdgsgdQ6s",
  "key9": "55B9NyN5Cu9yJHHWHRASdpK61nN6MTbKE6TNuXKmqATDND7UJTyvVGHvr53q6LDuCx19whH334NvDvPd2fRHPstJ",
  "key10": "xnCMBwuxPvjZy7LYGRSf1YtyfVogJvxkYoF4JHUeP7ezBEK59Jex8j2awUvw264REzMhyFrjL1RVsBSVrwp7UcJ",
  "key11": "5aPcU7rbuTndAciXRfrVCWnVXsvQVTFTw4jh2bj9Q2L8crefGpEJQK3AmuntaRCiStt8UYJ2wxRcsB3g7Qmus5ib",
  "key12": "Ly16KZ4hqswuvwj91eNRRk4awdMDj8GU5efKVNgW1vZTDeF12y6REAVbQ4Bv3gqwBL9AArUytT6Jmb6aEuDuf6M",
  "key13": "4eo2R3PtCdYWi9DJ7kEXj1k4FDnGWF3ps5pCB54kypqCPVSwuvkmq1rCRXfwC7gmroySw7pXBNnBzc8jEYJexe3W",
  "key14": "4VeVurZFkadZMGUHc5mgjateMB3Vr6FAjTAD21V7A8yBUG1ojG1xdfgybhp5B7wWemxFgGC1tRuetsKUozpEJhss",
  "key15": "5m4W1H7QmZ1y6uJwRGVPkEh9AHDpVXr59VwEs5x6cWcdmmTkvpiAtemPNfyvPo1g6SStRx5uYnXxL2efrCLAM2ZT",
  "key16": "33GhU2NcPygzhFjzTAp9oTnqdjwvxPvcHA3he8tViRXoqqNL8bXSvVVq6XMRku2KjaxsAxAN6SyEdzX3FvfzUD34",
  "key17": "64wfMmfPjz5g1ERBGqm5yASjdN8cDw4W2Dx5ffD4a7jMhVrQZd1r1Yu39yx5HixQQ6YQf18HzYEWbfp91ChW3uY8",
  "key18": "2WugAYqSV3GevPnGmK7Z2FowPQpPBRAfKi2rwXVcb3hcr3bHsxvMGKbia94T5RwdMVLZisJmmPMwaknF9jZNa9yJ",
  "key19": "5U16A9s615pPGm5pTroQ8KSrP6iE69mLWumUptHy1RhXX9aNgLBvQ7tNTSco3PvrnnBRmohMzijYrUaTSyqfnRkq",
  "key20": "38KLNwZhe5W5nSo2FTyvwsdjh9CJXHr4iybw2caSTUeLarnedUaAkvxbxMMVfpHGjVn9FZqfeH51pJ2UJtCuAPF9",
  "key21": "4sHXpm8UoK4y1QMES7ejWAa4Pu1nbFXs5P4bMXvbGbA1Kte3Nt45yDBhFBqzXeM39jdrd611AyvySYqmog6U4Lhq",
  "key22": "3qgEgNkyUofqKDVCJc6T8vfuVSyHJKuQj8FhEAgU36VJvBS9Z5hn7VqgjYdo2BpkeTkJQjmYFRKZgnCP3JcdqkmN",
  "key23": "5fLpVoN83iuwkAiRHYTS5keU7yuVKnXG71xDzrToDGeF6G8RD7UW5di3rM8ACzny1pXFMor2Jozu1MZMJnHe82SC",
  "key24": "5btacU61VHmvVvYQcQH1VcfKXUDAYh7yXYFmfVvh5gNH58Y3CRGFuJpLK8yyZNvyWWvAq7rA1T4CPRjAB2Y9qVXX",
  "key25": "62ystj2sgwNDRLU7HfSiC1U1pKLTWTWoWs6jcVkor7pUYzyrJqhQuiaUTnbYbQX5DAdfp58zLz2J7DaEaPpVFURR",
  "key26": "4ntQ7B7zfWEbdwZNRMgLcvN7T4TMAjrz3L8gMUhxTw29mbnFpkdRf7pApNxpJTe77RWMjgK8JrxtG3Gpi6TdZmpP",
  "key27": "2bzSWnAU4CzhHi4EqmLMHgjuGHtFpX5KEAQZPuedNpuL2rqMgfUcCPdWGx359BKWLeYNRRBYgYzRkSX1VzFxbMpR",
  "key28": "532QS5mqFKZpUNYMrm1ovWMZQ138WJaa3LUjG51JuCsnfKT8x3tKqh4UGidzfAc5jidJoK7PdqwzpJR9bG6hp1ct",
  "key29": "4KXyVRwkBsqmHvuskL5aKMv2G5XvpKzbUViBtAatDTMTiZLnPffufHZLzY4dpPMiKRgERbh2Yrn8uJdaH8jgG9nf",
  "key30": "2qNiooV5xAjRuFvHdywEXhSG1rANKAQjJtUKw5qc4KY9MmGkRK5Gi2bpZraUzmYzdsU2J7Bb7SRpRNtJg8rUPmU",
  "key31": "2HR5gyiDwaiapGvkJqutTAAWTD7P1N9Cb8dnLMVQh7p2h2s7FFQHH8LVgxAMjXWTjTWiXB7LQAJqFhotMNC146nd",
  "key32": "9H6P1Fieie6Aosi6CM1x7BsMBvqKfkG1s8WLeDLhRYHK7wRxhn4x7EcDLZBa18YMEMbW9YMKcuz4x2fnoZYSTKG",
  "key33": "9cRFBCz3dqspmdYwiGjVQXGVKgNPpkUH8zpiYrWB6DygTLrW6LyMApbu9ape3FCVz3NCyvttMpcJUg1F4f6eDSG",
  "key34": "57vxTQ329JcQxVBFu5HZszYgZ3vuTWFKoRHwHGU2nHxrXRPrxgFPaXSfGkg6Sf6AK9wVccD5dpsm9GxLueDpkLCh",
  "key35": "5VqLGs2w6HhfDrfTGxaEkENnTPiwoRjZUMyvgRgjajVBsYy367iBBApR66qsgoSrnsCi4yssgDy1j2WioiYiqETQ",
  "key36": "5JJYycdSQ1NcEu72Xpfs7DwTRg3FwsBDku8pxaqtLwYZRYQJQx8696QL63MUdRLqBkxUop1pRW3d4krXW9xTrzcX",
  "key37": "5W9igNpr4HhUkeD41AavEaEQ1q7RbSgHV4WZWxQfAYfzT1fN4PPkr2onwha11Pf3mn9VTufMUzX37igEufefNcwA"
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
