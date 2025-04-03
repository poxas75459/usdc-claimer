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
    "24M9Mzzb4yijjvTqhp2E16ARqg3hLm569w3jvvP5FPNDR3ZsdCPVADVnbVXPm1vUcU4WykD2smQykpGVD7pfVNPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3en3FrqxQaAXqtsnxCgph7eZjfRhnPvF9XxMxZgCN9woKxsEE3ujFwc9WdCzszpjKdmrQnqXsFUvauEytpfbUkN4",
  "key1": "4ghFMMTwMbSbiAYRx23eDYJmnLd6SEJFzvuVBZKcJ8DA7YjYKisgZoC9dQe9kT9KHkYmZRgJ3ewekShieAZ5N8ct",
  "key2": "5FrLQv4Mr4oXAm14igtWzxF2rvAqEbMLx3oi6shYcwJwwNk64VGJK4nVXk4FkHqnuYF9zKKVF6AzkFYsMsTz4bmc",
  "key3": "42NYxxJ5QxyowsM4nnHtgSR9dwTtEBr4bhFLxoFodNHdU8YbaAsbs7jDK5GsTxoYjH7W4bjKfWMuLdDeaT3zaTDx",
  "key4": "5Q22DZLx6VoDxFqdz7wgT7ZqnE1RsFRLYadrsXyJMaDDwsw2CJsFoM8uB2J1kcvR9fVU3Ka4JzSZzLg5yhD4WnFc",
  "key5": "4eAVmghYAJAKDdZSfzM6X3zgbmzNLrztZrPX3KdFsDxNa6sopXWooT9fKikMAZupwvKWn42MukD1KYpGJ71hq89z",
  "key6": "BgQLYueiDws1NmZF7imEzcfDr6Pp6PDj28aGJ3Y3iaN8jgYALb15bmUm1pLinafxo2ZgqF2Yj1ahKsEme7SeZeX",
  "key7": "2myjzFW5VaxVVfQmWqe6FpibVSXpUVopY2zczhiumWzYJBWbxpwWADT5YJ7UprrnVqw5JtFyXjnMg1ud8ac1G3o2",
  "key8": "58TMHjudEGfNxBwpD6uaUos4QQFLZkgp9cV3DfsPW7KKJubj5nbJJ6gS9JinYb4s7FKkiNBcrxsT6FaH5BUqbiB4",
  "key9": "4YAjotiLPRZxkXAVwdtfs8uKbY1btyLpZmrfYzvjdWDFqztLaXLxXWUqCALg3ETQsCGzTpxZkbwTLprjgjYfju9s",
  "key10": "7ULvi7peSi5j48BkMDq8zrP1qMPKedLBv7eatmi7P6n9XZic1X8qGLY7tq6mDBzGTYEmeXhhgvUG7WjTmp6T87w",
  "key11": "2UkpuVBaAWNxahwHPNA7cpeBo3VQpgvsGg4hSeuwyKyg6PMkQ7Uim5ZLg3WEyqyVa9QDQfaPSkC6JFE14Nyx3nda",
  "key12": "22JkbXnwTrgMLaPHgxdM3J5C1Umn3CmRAEA2XWS1uCi2WqaKY6kmuyTC6G4qSkUKQKZhBFXQmT9511Founknkfph",
  "key13": "4QSke2ESTaTkLcyUYvemaw5b6f7ycSDrHTM7wcHpNqXq3N2ttj71dGiQVNk7ahaWTiYaPyZyDWiZYNTd8RNjGKo5",
  "key14": "2Du4Y9nEXXVEXMWabQAHD4XavoPeTRC1NERmfJZsyQgaeb7eVN6pGGt4w4gGjdh6MKHNSo89bz1STps1H7FySGQq",
  "key15": "2zuzxC2mTLL64229j7aSqNieimm54TrwuZMzHZAXvUc9PAJL58mbWRWiJWXdRdYGpLJwxKtVisnga9rLqiGZeKKc",
  "key16": "rZwGk3FBtZBcyHngWrkL7A77B55kAByrQfpgx5x6WGfGjN9UiEEsQFZhvi8UL7MSGD17kwzwyvECrHG8bQ5BGRN",
  "key17": "W1UdjxZESek3GEDLUqedzxBfsw1oKsFHmQSKhxZ9BHJLxJxLXZHAwsFMd89AgtGd4SUULpeAMCXT8weoSiH1tzX",
  "key18": "4ePfSxGJxREnjeg3kdAvYF7TDrmbKfcYGrmdebgPWoMNHREEANTdEd7UCqz4e9dMtfGb9i2fLJRimQM9cpBrDcVd",
  "key19": "DDYFYSTHTDUvRmyP48f9BZNPx3SnkF4sQzAVX51vG25jiSxEy2joTZKY61RpYJzbHQyDyEgc9fyUwTmPpFHUDrg",
  "key20": "2Pb9QxtvV3epDTDnvwYqJpVP4Eg2aSmQNP2WUwC5sEio3PRiBrEMazFrScHPo4NGLQjH1R6RtAHLGhvz9R3bSpJt",
  "key21": "3uqirspVNiHj7CYG1V84q4AsZt1VaWKH4Qs9Y41bkVF7Yf2DiqWGtJfwV9W3D18XP3KKf2A7AwHok22nkYJd9tT1",
  "key22": "2PFz8LQKkPGrp5i9xuXsvFWVyWxLaXbw3riYJpQAQyXCixy7wzgCoUXfQ8QeWwmhXNXc1trGygKW5f1dNXR6ME84",
  "key23": "duXi1FR5oubv11wUxsCiLaZb8PphMBRBGekbDPJYwAgyQogJKjC7ksAYh8v2Q9DrLgKcasteX7p1KT3HQHKdQTc",
  "key24": "4mAkLSYt4PMkJWKLPMiSBrLCo18ZAWjQRrFx7VhTPk5pvSxWqi1a5z8wF9uZTeCw5JwYjVTULZy7nZyKCvPXZ86P",
  "key25": "22iVq7UL37efLJoW77u1JNxE91BMc8T1G6G9PvRb2CSoAZwBkJiLCQE2MK9uppz2ax2mgCDFLMKC4vh9rE9MeyAy",
  "key26": "4WnmJgdvaNcuRUT1Ep4SZ4rDmpFTGjfMV3gj27FGDMGCkHZcFS267ZrHq9LHX3BLYc2pKi8Pj8BWGJvXqngFrz3v",
  "key27": "3ytt9RdhrP5zNFWgfydKn5siEQoqnfmv2eS6qMb4RNG1LAFtB29pzo4vP7aPnADsB3FJCAgG5r6jczBwdGhH2wNn",
  "key28": "4wF6zjvBGY7rW1Y5a7ZUJu2ebHtAKDsUELjuhocPUGoXuJDKjZ4bjuLE1i1ueEVHa73kRqYPyWs6U7Ep3ZsjkCr1",
  "key29": "64H5v6jXTY5pdXCe3EmkiasTKJm7WRWTRb9BzAjuN4dspy9PnzRVXUd45dC4NNifcvxbiKuMEakKZktbFBPA3UL1",
  "key30": "yukrTVi2Sf4jJgAoJhHZSUNciapmujJswxneMccoYRfVpxfGahJgLbJoAKPHH2Me2kb6B41ZN3oQEmRXhSeEXET",
  "key31": "663eY1734aDSoWcdhb4itog1Td4qjeh8gSCSKnyLXTksEXt6LKf7yXJvXiUUoguST2y9woyws7AijJd157TdU6Fh",
  "key32": "3RpZiVKtLJriupwizXRZKnX516NrU6cEey6sLpET5VkHJwF9ibMTjZgWNkDe51pC4GTwGXfvzyouxcrh8VRYKgE1",
  "key33": "61bhXcMznqVyTWKxEoxHVByLyjzG6X9C4kbE4S7KPP85CuDeFYqAaS68QYfZJj3v4DfhcqSDhSisK92H4GofVzAB",
  "key34": "2hZhoeeGxwGJhwFnyjgSy5NA6g9nY7zhU4NGdKp8sz3UrLz23QTy4DduGrRkUMHxNczgZY6ZzXWVd5vmQiBivfo4",
  "key35": "2S19AVzhB8LwYHGWCpzaoG8qEb8EjUBK4kZCxrhHJVaTp1mndUDAVv6giZ9wRcHqtUaJRPtEin2bt9VWhf4NACTp",
  "key36": "4n19gLsY4YFSWufZLtpCRQBYrzfTGiARCZRCcJr6wAXS8zb5PrGhqRyoY7nYPn3nbbWbH54gqEezUBSd6cm1uhim",
  "key37": "EhZ5p6SfU8MnyLxabeMXrscveym2yjYiqhNa37xVwAfA8Y18FZajGJ1bD6RiBK6Qejvxd4QtjZsTtiaGfctEXfY",
  "key38": "4ru1MymYkddn2Se6qDGjqdhAaPqr29hcENnrqTaWeKFz1ZEHsQjK6JDD9o4CgBkcRpVtbBGvGWc6giaKVoLvzuxb",
  "key39": "2Z435mTrikiD9gywNCafZKxycyjh6m5YS1DyAKQASAJdrGG5caWtRKGQVyP3khbEu7R9pqQBmh24zEPTTSbjipRG",
  "key40": "2Wz9e1ysK9sF8ETfMBdoLHoS3raiYRkMR54PD8MkQQApVK8m6XESa4cPQRiaTjUAunB44wu2LMLkehMUsYJNbj88",
  "key41": "3NyAJDNAQmtLsoZiw9uiBafCVcjJPrvAVDGuu7VtHqgy7xx6sk9RHqy5CKTdTYALQXZZaxZKwswrG1MdmvA5d2Gv",
  "key42": "28AQ64DVbmuDN4wvxLfcQHSTBbUmCPxgBf8d2vNEfgNSaQWAigVpSnTfGmf89gS6J1hUiYgooCMhtJ69qmofArPv",
  "key43": "3MKAvoC621bRKtUnhdP3MGSWGHaCXwexri8WkDw1eHCJUME2KKrHuCAkVo6J8gx6BTL35VAm32fx5H7SSUMJgTWt",
  "key44": "4ozqfcZRiZ3gcPD6cWvvuedqnoPUV6sRCKo3svbsWWAm4tjPDyDUX6PSttn8LeR4NFAs33u4a8tJQ7CPJa9pkEAB",
  "key45": "4uWP3Ye64eTMSNUkWcZGWboQ6NZNT4ptF7sLPJRRpaMdCoj7BeaVtaWwdeVFtRhBhzkeUrL8si8vQtYekfNm4dLS",
  "key46": "3Tx7AQjd9AUe7aSheWy5K41khMFdVVaMy3J8rAYjte38rWZaeHtDQs2oCRAtvFvyHn74ytAepA5LD5ZBqXvhgvP5",
  "key47": "3dqkZmBXE8LTepPy4JYFgFB9Aawro8znSNUENBYRkHyo6DAJg3PQuTbwUs4EKDwkXrnmeAQTvPs8nM93Q41AZ3YE"
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
