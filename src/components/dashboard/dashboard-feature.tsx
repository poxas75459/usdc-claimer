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
    "5FKpM1R5JMwbtQN7STcKaFwYVi8KxVQNjPDWpk2tC8birp1kX3mnKnGhPvDhu6Dtxa6RnyNus4z8RfRWVXJJqtRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9LszrvvnvuMtS9cs5wo76nEaDSqvWhmxQQcTuJmjakommJcojrGUwGyc6aUk55Y75F6LJs24x2zcxinGtiVZG1",
  "key1": "PKtLsV9Nw3QK9Ci3mbwwRZSJq3DmiC1pxdMUCf1FVeZJch6xyTxw6uqYdwnACfBLbpukhnrLZAaboSuo3U1p8Em",
  "key2": "32R1KSZfH6BBdvMx2C4esgS3dtW6aGG7y3L3drKsP1Wq19ddjnVbpWaDJvzxFRK3jKcRSULAZPuQhWVWUsHwz6US",
  "key3": "5UgaRVqxtqfb6YG6szrZ62B3QhtWQrQsQnTZbsSs8ZeWmvKvS4HspxrM2XongW7f3GNqNQCCykLNdK7FhpSmBy2G",
  "key4": "3Yq87yzoCjtw3HVrXgTDFBEYooNVnqsvmJJU26699ch7Pt8x7mUjkT348uDFFmWhw4uZ86HUsuuhNXUHc8xzJ3f4",
  "key5": "4oJkVMNAanBVVBroq7XkVcVyv5xC38ctREE1YW7bYLsVPaB7Ey8bvxr4wECXHhQGwsBprkGyhegqPuxnfm944e3w",
  "key6": "3iAVSLB2m9YZJFzzXsDqW1V4C3oszqckTCxnfPd2cMVanq3r1SrePUQTWb6iwDG5Dv7fWt1qXAaUaPeqE7Mz4WDN",
  "key7": "5pPQ1s4YFb7P1pS7R8QPPR6rgMaA1vs5tZ9K7xWp6ty4weWavFBhaNpmNSrY3NEUb9U35ig9PRRNa5CvDgLQphJ4",
  "key8": "t2YyXiMoQE6agJLxrwhyYNM5mnbYoiLn6maDLTXY2p7iDUj7LUnqo8zvXhUXFqrwysPrnzAjfSA75Wsd8gN28Jy",
  "key9": "3NDQsASvwzPzmGpLFHcnvdv32ZL31KMkjQFLEZRr5mfgpT61LVzWagwGNSG3a9xLJGejU49EZVMmUP4MrkbqtSj4",
  "key10": "2ZnSLWWyGTkqnBBtr1bMD1Ts1z6hmnFpbgmk1fFPKbWzz7CK5BUDEMttZmmve1vt98uHa2fmsYySqC8Kmh1BaB5",
  "key11": "34FGZ9CNFoYNLR6CDrnJvPuDvLPGfVtAWmbwUxrAgzdwJ3YniGhSUHMADAWQSj86zyb44XNnieY55sYGnQ7dwugo",
  "key12": "3wZexqTWTzjuYcwUYYisc1jab34dEYLnpcyP2J16Y64rPvitD1VxLBvwpthwy8cFEkUnECoEMLtRYPz7jDCgDy3c",
  "key13": "5a9Swb8qqNR6bpbS4WknAgE5QLJZpjosVis3JtS6bcf3Sq4tTxyu9uZ2Ey2rdGPQy7Yn9yszxRpraEX9csuHDTCA",
  "key14": "5SAXKHNUS8xroNymgcy9igj4WedaGMJdxfV1gZoTnqEYCWhZByq9xFB5QLDay9QePPqmDxUHbkPyNbUUfpk1kduN",
  "key15": "2QDYVBww5mDY4k1GXVVDQNLw5fvDZM4dzRfDRN8PM1D5YQ2vVUwgPZhnwR2fV6aA9oV6qRKKRmzGEyUKwWiTDHJD",
  "key16": "22H7GVPxrJ7VBYCeauGhL9tEkLU1QfWiDdhRcYnyctURw5kDevP9R3kyXFWi55KeBDWpZ7B6SDp9XLzLKoxwfnrm",
  "key17": "2rQzeBNk1StdFXVVTjgrjvoq2xKyaeMeD2n6KBUwjdVFY5DaAvnBYaEthuxXiavmnrBvw33JXggYktJ8QQ4ZF8uh",
  "key18": "2gnkdUxDK2wTkgWrMWz9m1bTsrn1YtRozEc4vg61BU2XazVbAttxiJxfvQim5Nf7KUpAuHnjxQMvCCEgMLfcEi5R",
  "key19": "SboxqV32QEEEn2ZLgqiXc9GJNF1UgF8ojZpWJEBi89Xmk5fa7CmMN8JkzvEPUhK2b9Fgozv1yeLMEz69r9cKwr6",
  "key20": "5ZXN7zPY2W4JYn8VEuZtEWHKFGw8auwRSz1jwsyP8rY939PNHcpkQ5D157maHtEDKF8s1Jiga1zJzq1awaxG1rGJ",
  "key21": "5cCAJCZPBsW26CH8S5unPXighCQHg6AfHSZcZD6vea3k3shbGJay9BxZCADEDxnKeUGtDhaSrrZokbZdLkcZeqb8",
  "key22": "64mMdACZ3G9uyKzQFBYW4ZSENgWQnLqXKRN2XNp4948W9Bsuv4CvcgLsuhdmbphYwBimy2TUUYFCgJBScbFs5jTx",
  "key23": "5FRHxtkjZN2Jp12134Dp18u9TrXfMrewtQSgwc1E8wJvsD59kYEYxUrrhvCAnrgRW1jFxXaSxv2npSefGRfDs5er",
  "key24": "59q7mYyuDd3mj9z5kSJvLokdxzX3JoFyJq2H5JS4xPYiUvvpjvRAx1LyDY4GYwMP8eHoCCUu47oNCB1wWhG9TbK3",
  "key25": "53JqGdSnCihDZSBuNmqjtsQasfpkspCh27dzaA8AiXx6oN71bCY1aakA6aJyLYoeyoJ355A6ctEJc25pzTjTAmzN",
  "key26": "4wYqwuHtwYDiyB5jvoM52cT883EHiPLz66htPf5toWAKE9kWowDfpxmCwiiogGr8XwPZbsjBn2iZcHDppGKZnuZ3",
  "key27": "gHz7R6a6RUzRw6fCX7fKWtQKCUweRrbEQeKeZRnhSfYbYjfmejKeehzXUJfuR6BEqZpC2KmNGx6igRrrvsgC6Y4",
  "key28": "5Cj18NyjmEakSfse1FNcDMB7UNiWRBj6Sr6iL2jzGUR3FMrZ5VD5g3vQAknDi8MMRffkroW8spEcjD8UhNMmGbbo"
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
