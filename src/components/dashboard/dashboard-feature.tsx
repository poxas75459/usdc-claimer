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
    "2bkjYQZydwxit9t3Yn3QLXmJ46tVvrrSjEVUVTo5SsHbRJAmB4ubmZakSKehbDkhC7RbFCK4XaK6PtemDusjCUfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLfETvdEB4fn99vqNxHj2fe55UFYVf2jXy2TsHLSscCVpT4WG4kp5W5BSezno4R3gLCTun8gdfH8ZnQUkSgJoz2",
  "key1": "2rT8VWSENgEJNeqewxVVxReyCzMZ58a1YoetY5yEQaTF3djv76cLkEdJEu2zcfK9n8Zo6XrCv6sC9hawo7uTzaYp",
  "key2": "fUyfvM2xMi9vHKp9zCGWFNzZ2tEBdjbUC1ETgAxfFhBPhJMbAinCRVZ3mw3yNLhWihfioDBcATL7CUyZKBbcHeB",
  "key3": "3GZtVax2JDzRAXjJxFhsks2P6AYQL56xZfYJ4o9TQKuXgQp3d4gSVrxFeSwPowYiVS4MmqYFe82jYaTQbYbKVQbS",
  "key4": "4HRdv2ocCRHA3oDMMaGwEdF8RQSHNDH8rAGMJTQ5FNaquQyJrdMV8amXinzbGrJPXE9NAH2ZSGmqMEYWeWac3YkZ",
  "key5": "3TRy3MmrkNymNBFfca52kTH6qsmqKJEX32wNBvdqfy1kvtMSPNLyKGKmi7At3LJX5R9j15HoPm4FbeTmSiLqvt8E",
  "key6": "2ksPxJxo1SfcWwonR7yf8qnTuVTKtKL8MnmKA5mWbZnrgD84zpwh4CyHjzH9KMR4H4Kqhs1paiz8zBjm5SsnYaah",
  "key7": "3KMjw28gQM6yRLKAoP1VreaRqsvDLQKg4h3ZCLn77HkgmkzNmZf8D4kif7JKGjaJ7RFWUmauoTdMrpytUDjna4wu",
  "key8": "3pxs2XZuEyQ4f8BaF3e9cTpU2nbiZSdS13nMYNjHXujPWdx7MQQoUwjXfzwu4ERDaM1xXVdSAKJLmCMNKRxJF6Di",
  "key9": "3Lga6aZ39Wka5mbfe3cL3JXa6Swe9GngJ5mKoa77JGUbgcaBLJLkTN9RAetXgUjLZzQKksu2mu4K7BKtpHQK3fmt",
  "key10": "3Do7AJAtfDZfghzc1JtskZEakdUwEXkSoYy5eoxF4x3b6DHk6jJVYZB7WzMG2ZeVamxnmejuZpAF63ZgDGc9YN2h",
  "key11": "qhMsZYRdtERQX4LXpBRbupKu3q2jfYGqzH4h55qf5iwbmNhSbYm8ZaTkBKjKaSRYAtVFzqBbxgbfvSbZAsTwhLA",
  "key12": "2WfBD3P66eneAm9bz59W52RxpSqo8quhjuWHQybeRtEMyNhWzmhg8agGv19RBEac3G24vqUu6cNHbkMposaLQLAL",
  "key13": "2oqLBhu6CHVQc5VXybUNHpEfwKQ8Tmdt7zoRvGX4vT5yAhtGnAkP6URbUjX34FHDdAg5KGWq5g4kS8RAMJ8dfn9G",
  "key14": "23AvbTCsMrdCcHmFRZtKQ3vBdPqJf2iwiAzWJ5roQQqZUjNkdGMn6raRNtkJrqT8VHagX7P93RrAQ26Ff6G66HnK",
  "key15": "3PZvSFNyn41tcCygVFbXKhm9x1Jpj425hWuSnR2bG6vWYEDM7BH9bsDQbEcTEzzY5xsTDzSyGuqL3bFBUVbrkvdq",
  "key16": "XUy3w9dy4MACQjVxHiDJ8krutCEcLwToRVLibzPsfjchSknx1FrVAozjCnXabTSBHPRfu5iQYFgncXtcSJM7RuW",
  "key17": "3MyZ2Kog7uSLyGVYSDtufLKco4N8cL2ukfndxvi5w7i2HwYSJX5x3ZbpPFKRFAWKDHrpCqvX3eC6uLhDKTbFrF28",
  "key18": "2yaFeKdmPdRLDtnVDB1BKAoFozGjCoFuooNAj2v61gAFVjQ5Bj9vJh6mLbxFJ6a2wMJFLEKB4GaB8SupC72HGdF2",
  "key19": "4yrpBdiruoW8DKiW7Ncz88tx7wrRN6wNmJhB4H3YLixF4YFL6pJr4WmuXijTS8cXjEiaUg7GeEcUERauCrdowoyf",
  "key20": "2xF4985K6xttZAStpndbhLmpb6FvwQM2jsgyhYnoFSDAApPzuJXfCaZiwWhx9EpbFP9NnUfEGD4vnMVX6yMenixb",
  "key21": "5PPzhvqRr8p7TKABhpkE8c1ZaBStxPVXa7x3kVvkoLciqT5MJreW7t6HhoZEcCSYkfRHfaEENFzcdKnGc9KjEs1W",
  "key22": "3VgRziHXpCitXLSK9dp9SdPEFNvBxaP7NMwKPhACr8HVB1udgYmivkE8hHo5UukPgikbqbgFLMx4bLZ38hzfh3ms",
  "key23": "2vNkFZf9DnpfbKKf1DUmtnprKa1PMw3WP21TdNkdQHQ5hNASAC7CLeQhZJShUrV2L21hUXM39KL8vMaYtHt2tRTR",
  "key24": "4MSy3121uATRFkAoyayt3ush1JaHR48ES1tXK1aBRAamXMghWcsEdU5s9pffpYuo59VWvjLXWmnyM5mCBHN7E1We",
  "key25": "VLoKFNDQjpwniyy3TALaQKwiEAc1mF1zovemL7ZRabNQwfDmtdxNGqHaFv3JtXMgVByTUQN9o9uFccm3opRoGjk",
  "key26": "4kjS61PgtmAF6xoNt64gRPviuHCt98K7pxSbFzmJXA7HmFPxWc1fojeoVi1Pb2R5CTLKVqkLDnm81kojKEeD1CPo",
  "key27": "5fGNVPn2YLjhhEZ4WELGTwT2jaqWtbUcMVrBVzjEjJop52ZBKxJeb6Hgc2AE54VXMNvE8J8hpKy2ucxFCGxfQRrL",
  "key28": "4htMF3TgPL6ttddko2jGqbLBhNPQzqJfnLERSkfh3Y7aFLR7XeYxjY6rY7fWLTddvZrsNK9JDTdLTcF93rX1DyNw",
  "key29": "2ww9NoASjt68XwS2Tq7wrQ949EDsdKMoZpXpq58ecV6w6ZyKduCoY62vNTRW6vgefL92EjahSFk7w5MuMRCjD4zJ",
  "key30": "2vhe5HJFwD4LTjSJxR6edFUHMFmvbKARngSXUjyJF89jc7ujEJzPCvjeWEgjrw4VkBnrvmZE3HaNhGZFSDjxJELp",
  "key31": "5JcaV5924U4t44hpdXndD3rJjMfUK7LC7KeHgrqq3KaESRw29smGu1pLgmxVKVStGaXCxT5RjvPabC4JgajE2mL4",
  "key32": "36CQ83sHL3u8vbKAZMbtKSXkQcEjBrpnDWESUy5QJnfjmKnbFjYiecVQh2BFT7ThY6wF2TWPwtagMJD7nHcuetRz",
  "key33": "fHzTz16WgvLkRoQgDvRktM4jQdS4V52nYps7o4xLAi5Wq1R6VMq3CuCc7rD2gMQ4y9iQcvG8ktgCUyRXsv3gZV6",
  "key34": "4PU8VGqEAeRq7QcM37fTWY65dxJVRJ5BxEPA7zi5pHDNbUqSFAi567vyFTQR1kE5T5rjfmMW2KidYqsW3s8MA2mR",
  "key35": "28yQvvdobKcF2BK6oPMwW9DPstTvGJBGE7nZX4cpJaeEoK8YSHeu2HibzhyVp3r28Bm5w3obeAuQyu3xGZBPkx77",
  "key36": "3wgaRNjPGQNyy9nfe36QvV7S3i9hazCGQcHnxzMYFUcHd7apbfvQErHDM8UWAkrLf7d8YZ5rC4DsjNhUuvtr78qc",
  "key37": "2yKns1FifLF8Af6bhwS2YL3WR6QFTsokZ69sEEa98LJRtbDLki1wrdxBnHbvizeMYzdieco6yuHXSSLRuE2A8JCe",
  "key38": "2tjmZQLmMpHHeS1cEQrngjsSCQgv1zsZkLX22ZRGZhS5nNADYVJjz8XjzVVJ2z6wDciFW43VWPxzQPfTfyv9SZZQ",
  "key39": "3FNTECQAMVidTSisKw3SoDX99ha7N5shMhoH9C1d5LBcFSN7SJhB62mYuqHTY4ZcKRPkLWC3784vqZDtqAY4ceBH",
  "key40": "WeQB8pQXRLP8cMPCxddE8j9DdfpHrYoCJXnRU9vwD3ngSuGGFUvDWLvoktFWwVUdcVVC3Xz94nvz9LfUWk1vvKp",
  "key41": "4hNUL3yF3RVW9XTQtcYCEsdQXCexaxx32GNBNgX1MjNXdJJtSkPk6bLGD5hcDPvRatMewvXhfZGHThfrDjPHnb4a",
  "key42": "4FHcSigmoEB7W7Ketmki6VFvE5i334XtByQMbXWxNLp2gtoLcYGMVj7vtYFq4bvrFdhw1K1G1omHsLk4kHj7bunx",
  "key43": "5jR3nEuVymAqzKkxXHCbRYXcCGNKxYoEkmaKYYTT2MwXpxJQsnTux3cBKYRKLz4MJhRz1PTCmnf9HJ4AF3dWNj3p"
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
