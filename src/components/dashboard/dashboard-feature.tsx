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
    "5d9S5pbXbbRZfUfzfD3W31dVDxXyojSWEdbnX1BFG2CHupyjhqQNUdkFxR6MXwYZSsQNjnbaUfgVWGPuCDv7yPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2PyjAg8tL3LY5JHSnUb3UGng2EpFeW2x4E1EP1XXAmPagYPwBYqT7AtQyDspQH1FSWFery1UNGZnyNex7eqd8H",
  "key1": "4GTdozzfPUWSYp7UDKk5EkVJY5MGPaYzj9vyLNr4pUvwAt3F6MXuravftjAqm9Gd5BPpcPhCrvw2etQixZeTJDfe",
  "key2": "2tMBfFKkd1fw2SH3Yedtrtbke7y3BCBtkGUeEkNFHbwTW2x16jn36eHrapBdcDpaexRK5ReRczR9s7AGu7hT6umK",
  "key3": "3gp9Sy3HewsnXJzPATGYEZhN4aAP1yxg4XRjUC6ahFLWAxCQEqDYrkPQ7AvTk7HWCZ6egZQbhLSZLXqazRb9gHNM",
  "key4": "418yToVccXc3vmtaJQsDyRKBqCPcBMRDvFVtqEDbxnhXpudHWSGrk4r9PNR4owqKAtWcxhJYQqRHPBqPQxbDzaEL",
  "key5": "4BdphXmiiV5QFxJwLSQYj3A5yoG2Cc5TJxY1yvQ5cmGqGqPYg9f5T7TGt78Kq6JrsQd6SJWDPvTbGh9ZAZSRwEnn",
  "key6": "49af5XK5rC4fnFvCiThssgDvr6W9UC7tCfAZVjcaE4P3Hv8Ca2WE8KetAfagjAaTxAYL2S5sNH1fd4ggrExAMzZD",
  "key7": "2Zyc3rRM9bDoHBPEfSw8acfqzaFYUytFKYhpwkvj1TcCzVhWFzkJ6QZStL9gugryqheXxuMYQfAzYxW7RFqoE6Sn",
  "key8": "8yrLJ5JBHtRHpB11EykEHNwQe1K3x3X2hnk5wSK7QKCTowdQ1RTwtVE9WqqmeNHYVep7vTtmJLA4xQHwwH1J9Sj",
  "key9": "5uUwHon8YB6M8o29XAdwgd4bTJki3YygjkLT2Pk1qhnmaDgcJL7NhdVC8xQKQxjJmZBCQTjG1arFKo2LUJpJhagH",
  "key10": "3TAr7E91p2Ma85PrLUFaD3XEorXGrFYY9pnhSZNFAoRaUbDKU7nWiBpDu8z9ACE8skTzBj4DehfZJErWN6e4tEq",
  "key11": "3RdCtgLNDVk3s684p1Z625dFDZvKBW7AmAtHPguPsAJztDEXQZEjeZ1nyDPzzQEen9WUmMAooft35MqmMSFaMyfJ",
  "key12": "L2ZEurXb3vrapCfvRbQUuti616RWu9fmJbo91vMhAgGkSihkKxhxQTvWQw1f6JLj3nC7KL65VsNFfPwNwWq8gB8",
  "key13": "5FPGajqFqvtsm5G285q3mrt2iev1pYaePMXwxTXbMALaPs6ieUFpXr2F7U48RcLvrTMZAbVmzBE6GHr5pMnSYpba",
  "key14": "3MWkJM1k8AbzmqmSS7xLdrgkkkcRoN2GE7GsFjrJ5NNAKE8da6ZEhsDcVVrKLV3bzEAw71e7eGyf9Bbs3dVfAbuU",
  "key15": "2NsJNt1CNtGgPeiRXro8gnsWK1UJeebAQ7fEB3Y6EiVHarc5GM6papmcF9UEFUfqv3rCWPDxD5t9rXdi1Gr4SqeK",
  "key16": "CtpYkVUpREezY1obTAuqfxCoayw9ayVi3N143MZX6ziCBoPE5bnhViCuCCgkSoQ3w747d5FsCLSBUpJwXRcAVCd",
  "key17": "2BvfVg7JCcNCkpcnZeDp8DnLuWnjdv7H5bmtxmz288ZzrnKWu6EaUcG7P6aSnT5RDZqA1emHMfp6dqpu3U1Z9WNf",
  "key18": "28FDawk5C5fz6rAxLAfW4Q75ZYKqm4NQM2o58DfVyAbuaqXU6Bo2G4g9nEqsfpL61knUoPTyFmLa4s4GjQUeQCn8",
  "key19": "3uVuD34LDDF8F4idRoAJsZeTRoVcZQQg5rjK4F1rDhmr3p8X43gStWc7XwLWWtG5hfbBwianqXNmBMBUvW9P9FzX",
  "key20": "2az3zHqD4CgAFWgxHGooBCWAz4Pw8nkrvcYbPw9in1j1FucyyQYcXTvfdt5monxDFSd8tt5FcSE4sAxcabVz4BAy",
  "key21": "61aW8g3JqjFhcZ3NP33wmDi2qxK6EDArfMevoLk4HWXMNfqLt8ijLExEP3Jv4smKC4v6gmjVWkap1aV1YFm2xR5v",
  "key22": "2zM9YaR3JCqFbx93SXoH2oQ7hhynwcCQ9krSXQtokGSLVDQEj7GdYEg2FB31RKdner34T7pFbjhQ2z4mhuPWDRop",
  "key23": "3s8qnbVpPkWzTRK2gpA96FFHwqKeBtHgLgxRf8XY2y1YjgekVozwKoi7B5PsiXEq4x8DMKQQdoUDD6JgsPwbGt5L",
  "key24": "4ZfzHC7279SzmutqQ38EXP77KvpUoQ6VFRkDg8i9c5AuK74F6QVyGNAvQzbmhRnhdyAE4dH1fVAyhmScSvPa3gx9",
  "key25": "MaHXRbiNPN26BAAmNL3rRFzAJkNPcC3Z4pz2ohtvrRfFQhhsngaAGivnWjGUXV8ryAi6hKPkmBADEDH7Dt25zmg",
  "key26": "3n6QvZgctgA6gR1DCnMdm5FC8koFVJdHxtsRJMjzNzxqdMa9BC2GM8xVLjPJxXsRr22mBamLURbsHougJXLK9HQ7",
  "key27": "3P5i8aHBpGibdQDLk23J7hSz6FQtveiAYrRUdRWB5LhziSz2ackBymCpKJ58EBr5U2fgK9aezBSERL6Th6nzf8uf",
  "key28": "2uFiv3guHNnEWex2MKrawu3kXzkdqUwF3eFqBHqv96rAhrKfEDXxwN49WN7wXxdYtyVeqSziV3qnJcDaaPa1RRky",
  "key29": "4gpxQ8DTnC5fwzb69haQwPyRH6B2WDfSQoQAZhMsz1WajzRxBeXC3gxFGhhdXcm1toc6vtRp3bYaPAtqkaTtuFdg",
  "key30": "5ZZDAByrrVWeAyqM6MZUCXTRAdLmftv4e6AJgBv6tQkwgZ5mPEPwJGwVgxUGvGo4gXStLBs8MJ8FYzh9b7m1M9bt",
  "key31": "3C7n66HNwvpgCXqTTiuDG5fxnY3r5gLRSSAQvr5qG8oEx1iLCGe2iKpVjdYqSkq9DhFPEHJTjg8ja9VzaXyhE7hA",
  "key32": "3T9tUCuHmbAk62rji6uMsefkqeLqVkskcQ972hxQVjqwxNkaJpC7s8mCApmCpeoaG7jJBS9GkJ1tuLrQ5fieQ3aC",
  "key33": "2THFqRURdcAE1tYyY4gMhDBZiQ2wA8jGbxR8Pv2KsRqR4hCPTqzKcJZKmKWUWE6dAhHHZYZK66qKu2wh3CUvAWEe",
  "key34": "3n6vQ7LNagyxht6D2wdYWZpYkFUQWyy6ygNBpQGG6PTe14i146jQqHFJ7G6wy9P6k259N3AC1KMoyTVw9XsRLbcf",
  "key35": "5EU3KdPMFYmm375Br56pJTk8dHzpTzup1oWZiWSrq4AEJEb7FQ4hgp3FgMsX8Cwh4QgvJCVqbHmiHfWzJ5cSP98o",
  "key36": "2drtXLa7jEhVJd5R3iTt7E6tZRULLQe7Z3Ay7JPjTUFqWoPauxQmpvjDLuzgXavivpGJ4NKWHyGh5sijgV9ifQi5",
  "key37": "4jysMMqX8k68nCPPJHDnTJqG5e3wEJrg6MrQJmnU1QU5PF21Kd7jDNDZcGmVs2JyFTjTSYwfHPJCSLNsaEkSKgVZ",
  "key38": "2DixrKN3oUmpLihdA6LwrXdU3CaxND1q1ZttquaMqDzLP8GmNRPopKz9MtTtjumJ7maJNhvEQgNKuBcYZnBcEvJi",
  "key39": "29VTq8ow6gdzQLz8xA4GbzZGBx24t4THMJd2XJR5czGGJE3WwGzeBWBKzK6WALJy2KX2BrmNpdJ5T8qzmi85kfvg",
  "key40": "2XQteX2qVqSrpzMy8q4jVbL6GPsWadtMd6FHVannK4Ntvm8REA36kRY4qbWTLQQsXymhhWtYvpbJU7zPUZGwco32",
  "key41": "VWEamkfWSWB8WbSUfHs85aKBtXVseU1zGhVsSsRYCdiWecNqwhE3utCsjeVdmEfRYg9dXfSe9rB3hdfMMosoboh",
  "key42": "f1v6PUXcsotjvpw1o8JgRpDoLUwVy1y79A4fZ69c1LryC4HgXKghxMSWYyR1NbKztnk2C4etDEXaBSG1XD2Kpxa",
  "key43": "4oZBnDNVX5AUSsFw7ZGVhn7UeSy9wCzrGqhomhLPMehhQUCP4wWvNmXjo2KnD7X2muiD11Gi8zHAVwCoU7FWexEj",
  "key44": "5CMtm66gkoJsrAfhi8i75bFAzaQu1v52ySDYS7uYyP5hzMcHhDfDsc1zKW7qF9SnqRC8QYDFrHEd2vp2mLzFcCAR",
  "key45": "5qmxq1jAi9AYyktuULF24tJrttWq6u6hUcSABNem9MJ2c2jNqKUmZ71NYsBp3GF8g2u15CcZREDjbovA34HypSaE",
  "key46": "3U44sPquBkqQq11xS7ULfLuahpQfKsSWs9zTPfjiY295x8G3kWoh6azj5Rcf2VKNmb5rxhFsss5KmN1Gssy77KA7",
  "key47": "28uHGbLCV4x6maXaF7oPB6JobMDffHcNtVYyPAYjYMQVvKb3ENTXCLvQgE5dNUdaS7SHdiA9DaFrUHHHnbikKySh",
  "key48": "kfP6szcXdMNUrVRXdrjbFbc9Fomof3AKW4NkPse1orE6b3zowMX6MP7bpsgrTxmxCUH1sag1L1CkHCTaAbVJvvK",
  "key49": "Ak1qK7BjdKRT4xuBV9JMoUvVgEZUE78uvkPWrer5m2mmHwFVXHr5ZndVpa981uCeMEQcxHs8RQT1sWCbUBHQrYm"
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
