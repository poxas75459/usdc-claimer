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
    "5hLBdUxJ7GEvuZKkdVkc39MreBRJDD83QrHaPMRwmgnruZ3FLPxiXFYmZZ7SGqBBbgeMwWwMDF5SNtfhMM7jk2X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23mr87a4xtUfymbWyZNYgUX57a8AMQKvpxJDPubkt7sDT8xp8ruSbJc8d1wfH37WdmnwAuL2fwdcT35PAXCrgbLu",
  "key1": "4UDbUHhBv48j5itBBr75ASy1DKJBnoP7spnzDvzKTCTnw2qeXZyfHixvjQ6dip1wp5Vw1NVdofmEn2XRrsNvwt6b",
  "key2": "4F1gzo8fE8iqVFRzJeT5BwKzQoGhsH3Nwx3kPuY9kETTKXZ4X4vU2XrLUA17Rx5oaryQYNV4iSmJrzCA52fGQvZ2",
  "key3": "1AfH72h6qQZJPBFPiW52eTRJSGYxp1SrUzgTpJ9nfRihg6QtfCNGVDECoG7WZLZ9vtqotEyh6EXYpQwmP3WweXx",
  "key4": "5guMDobEkjQaTFWiuRh1Y51pZvvCEBv7wgpdpi95Gs9zKBzVudWkkJzuoS5A1wWTmNWVhbidMhccPo7qTAcStRT",
  "key5": "4EWjcQ7DKrTp2Lu4TE7C9anXurm3veFoA4dBCDKNGDC2KazdthmB89mq15CJ9MYrzQjMZxyQsjWVnGpwUFfoPBxu",
  "key6": "NTmtocEZ1u5sb9Ayvgz1pDW8bauUSKEG5oAf3JHkmy9GoCjHuHaLLaiN7wCnAdWqAYeo2hb1mjRHTpnGa78RewZ",
  "key7": "2myyYazpiYwjWxFWSX3gjqDMfeiiTjnrHryhgLGRg6AyaqzBduUvvQBRJ1xBsZjsK6PUooE3Ex67CM6EHuMBMm11",
  "key8": "aCAQbqpa2C9TSJWYThie2b8eUgzM5bwtwasW9P7NonYGtCjJYkuXmWmm17xwRuQvASCveQtXSUdwwh1qZyfQz3Y",
  "key9": "27bEKDY42dvqw4Ba1gvQ29rybUqEB6EZXMkHXrcY5XsyMck9VzLJpi2GWHZp8fvTma5QaWmMRRtjzi6PEbhJY36h",
  "key10": "BAHVkLfuK59NCc9KfAgH8dPF1Wm2xQTDeh7cVgLSuYwJjYLBnK9hLeg3qrMundDkEmftD8TZWPdevxg42VrYCeT",
  "key11": "2pvxdVJy8xz6ZqTneaPXEH8XnsZogCy6TyrauAruYBPB4NNSWhotNaPEHZWafYUy33CFq22Nd1uM7KEyGvhwAJgG",
  "key12": "43MBW6NmM9K98BgSB8n1bYxYvXijTnLyKcEz3hHdPZwHyyin9yTz9E1yzLnfN3tWRqbnqSEB87pcsECoGzZyH6jt",
  "key13": "58SKFkJhEyBtNiQfvAMMj2aiZGSYvPU6kpPeCcGyXnCjzkEf5dPs8rVt1qYXxMN3fdoGBdvD5REBonZbkvN8LB17",
  "key14": "3vhQ3P14E5EreY1u3zFBWn39pp9oeSWWu6sXej6MRSdxayfg6fXM4fUY5XufrVomeZbTJEfJu6iM4A9p1gPPtyUe",
  "key15": "3SpRy3JZprxdhNA8yTR8gonj7NyqLmYTxaQ5RgYJruPHHo7V1ErWYKLewTobX1JJdJsU4jDumksGP4XUp3MLy9rA",
  "key16": "4RwaB8mp67vSzGmRyB8Y91jEBJj7GCd8rqgxNKHu7n8BixsZYAhX62PdTURdBxMPy1ueJ8D88EjAEdF5HdAnFcxu",
  "key17": "4W9RjnY9QUci3rg6SCstMKT249csdJEh2Ni4WeTnwpGvVfZmAkozFykMAAgVJrv6WJJjvSFxjMBsqWZiwtaDp6hn",
  "key18": "5QAwqi8mYQrbGZAw86uyxds6dtDLnv8pEmcsCEtbJaJQ25bvaCohbHFwnoYDeDES9gMamfYozXJfoX1NAYw5YFMV",
  "key19": "4Q8FHtuY4i9ViGH2FURN9e3isRr7aGesqi5jgAaAWjVGJRrMbAc3iuqjTvES65wq2r2fC8SaqdHGuuSNzNUECKzC",
  "key20": "kfEL4M7P41b1XGRhfk62E5mzAmmpRJcKEEU6MVvzR2wtSB8rVw45LzuSG6gj5rYX2nc78ZGstK72PSzhCjtNMvh",
  "key21": "5JsUSnveqd6Tkt6XZhqrK2p5QzbNsDg2ZevD94Q7MZuY48EcbDSMUfazaexTq3JkZCPUotrHDq8Nu9R8QS9sWrRh",
  "key22": "4FcnN5MAPdVfq8YDC7ZQiMmESqnhQWGDT9XvqSyJ3A8tuJcx49UR4xC2bpmiM11vPAjiHXV9hbqatgEVGpa2uK2i",
  "key23": "JEr1eBNGHhA3tD5Qd4xii4qwzQ8gYVuyfSorLeybs76B8rqYXTWU2AceHCzFQBfZo45dMBq5xHXVkWCFvG2nRpj",
  "key24": "2RAk8haGRF3v4yXeYR6HzbSkqEafLXDE8Bj3NFDujKcKXHgf7A5QzP8ynnJBLYmCV1fCr5pdSzgB7uoaACyseN4Q",
  "key25": "4RhLBUxGyHu9jLEbhnC4jCUuDYcbFqKwEvLrvnaKa1fcFd6Xxs3DqLeQra5kM4BFV8Yb9Nwns5fxih29jWrQYRjn",
  "key26": "22FC2RbtgZu8GQVNUdFGpJL8Uas4VuEXSCtCN5b6r1oYhctNHvxpG9mCbbPt8am9qLF3YwcxYNNmbHeLHpRabpEG",
  "key27": "5t7rUim4B9U7gKKr8WMw3mPspVy4QKBuar7ULudCR3DGe5qwZtZm6v6DcEYJkmPU8drV16jcfwS7Kb7juGtoiN7B",
  "key28": "458222xRZQGSxbLXR11vUjZzASa682YHBn9q6DVuSFVBpoZYE2jHLopCcKGBDziyvYSCYrGjuWGmDgB6NN1x6NLM",
  "key29": "3f9QZG9xx55KcYBCEJTPJSuudDaDAk7SH72zjXoRHXNZgLkwzy65LXKAXY5iF8afKo1c543WKtJSDykhQtMxDfoA",
  "key30": "3BtG9FH6wPEBq7cJ3GJccP57syCwXqSA2TQdC8vek6pT28NDaqA4Geex7rAWBYMxPHyj9NB6Huy5f5V8Pqh217my",
  "key31": "27xGvmKZp63ExTdYMAqq4Toe2a3raTNDGfXLTjaWcLomLhC5rN5Mdg9vE1jMNc3sTxqvqpSSRQsaWAxRXBUhwLR7",
  "key32": "4g6ikVPvXCJQKwFAdLP1fWnSr7vkm7rmJx9BJ4vyHmdPQ6iL7uaLu1ag1AdLafMugfbfJdWZkjv2ffyjKXhAjv1y",
  "key33": "9WHr1sfT5XMG57mrRzfvEr4vBBNCeBLcLNTT4sRvuyQwEGspBDnKv31aRy9Z46ogVao9LxN67odAtvEJ2u9geUG",
  "key34": "4pCPeMBJYxp8iHSxDdpKAp6QaGn7EUmX5zC6pshuURoumF8bXMEwG9nwWiUHh4TNhgVX68zGRRpqYydi2GZVKFKb",
  "key35": "3a2Wkjv3DLupkctm4c7zqq3gkutWyjVTfXq9M93G13eevuxztQEWG6QeEA7BXj42Fo1JJnvon1a1cA6Q482obqgN",
  "key36": "397FMnYP8J3t3NnM9XmWGqjPiFcFKoaJPMmL8uL4w9x9tXgtA2dRK9hofda2hb2vUKRnLrp3ScL6pR3Kv6qmBxE4",
  "key37": "2gxs4gtWFvBBqHr7wEkMcJ7XQKzAmPZ4WHHdiNKUC9Fi6VfTV7VteoMrEMnQzjfhvwVPQE2tLqdp46Xvy8kBLXxA",
  "key38": "5DNB1AAvmaGoFzfBZLdsQru9AGZqUwqzMyePLrNNNXkf8p4ncVNSS28rjdZwDrhyMFrDnAu1dBhU2zq3Lp4Qhyx2",
  "key39": "67Eio2Sz4F2cG7gMQGn1BdzRztkzA1Z24L95UNqTjf7YsStznPw41pj3zG9BQxBitgJyDJba2sY2qw5w55X4GUr",
  "key40": "4GmYNYbz5aEf7ebnQndA5AhZYyoYXLrmh6zpYZAMrntuvHyBCeg2hTuGvDChRq4tyj45F64wxSkDheVaT1D7HTGF",
  "key41": "2nwpTHmpKTfqoe6UESXCSNAknw4i3UczGSkhownmRthEnDKGjVij1H9tx7ZtnxqSWvTaWqdi4Akx8KJgbWYuigUJ",
  "key42": "4Tz6rW3ztT8ixMvxDkWCxZsHGpR6T8b1GAGhF7AHYjsHfJqhWntJFDYpD9oWLFo1HDbSVZ5Zim8KgdawHhKme2cp",
  "key43": "2gqZ2z4ChjKpYjWG6KQPFve7nZCwGJe7VLKpJhjDkT2AV4cTmA7vv9DWG64Y8tSHaLC2EYddXpc2PCWNf7hSMDJv"
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
