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
    "3M98dg3oU6Ku6xvbzwk7vgUBV5jkebjWhBsuEEcgKUcGv4bc36oMTsboJSbhD8kWbJLBioX65ThQaTKmn4bBz5DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6E8mpYn7tRJ83LpNehTooPKuBhX6UYQCcmMiKUi7mYLTpNC4TUMXJ24YtqCti7eupwuHPSERB8LZkyJUhLbnqJ",
  "key1": "2RZq9gThWrZPemjADLnpVQbTUti4rpkXbHCTimVdAZzkp5U6oxSMWQ3h4PRKnVeg75eroC7ZyoKyaLo3KkMKZN5R",
  "key2": "3TJqJiMCFsmkGfM51HgNf1pRdnbwgKyy7o46agamDXq2vDENHEeMvTRugogic8sWkoRzaQCLbTTPA6Q2QqXEsWe6",
  "key3": "4TzFbQobfGSo7ojbbo1ki3HnSoUoL6fXAmvS9j85UFH6KqiTj7o9YF2zWBDVo8Qwt8Pu9MKVLJZq1YmaZxdiz1tF",
  "key4": "EaNngwsTJsVWcWQtkcQSnPj7wjojxg8Ztox376SrVi4cm4S6peWb8dKFZRDiqYr8Q5kdGDkiuXDegR2ZvhrFxeB",
  "key5": "42Fa6eKpNk9X3NRgf6QaDRHWras8jmPpmbm1zoZFEvLdwS6Qm7gwBjRg9Zx2UfEfsbncBYgeWARgP4C58uUkYNrQ",
  "key6": "4ERMwEw9e6SwMT7BUKmjuNrJ3YXPCXFZKvuVuRFFkHRGeJ8r519CgueBerwxq1NShw9hrResMCSsb9y45MWu5vK8",
  "key7": "3kHHyyK4aU55eCHxBeuHV7MkpWitC2RKQaKSHc3RcCdr8xmZvmxAaswj1MtaU2rxMxAV5rkX5gA5MejhaTngdjTR",
  "key8": "2ef5omT2ySMUEzWH5RFj5zdaXE1mdM4atbbRS5XkRGbMFuAPEg892XcuD4aJ6J5psg2rrdcqofQSKCVJ8THbTPQs",
  "key9": "QA5VkeGFp6etCQBcYG4yyCJibAmSRp5DQ91wdy2rC4Kbt2kxHeTzZ1p4H4K2VLDSfa5pwnmmrd9hLZH2GEgoVW9",
  "key10": "3JMyoTGpjdSm1wQih2RSczEHeumpcD7tWHWHVCaXWanuEwfdJVCtZ9Xo2NKzKVQavACr5LqcNKvRJGcc9KJBE64j",
  "key11": "2AbF4kJVWekdSFMxj3Vt8aPeH9XSBkkUY2mX1D2NUW6gzRVcz5DXUJBw3JP7U83bXq5bp92gvufKbkLu5PWn8e4t",
  "key12": "3zvkhifqukmG1hrL1rwYw93ee4Mhyf2aJC5qAvjA4f4kXEuNECaX6m4Ec5WbpvJELmq7GJN2Ec3DjaFhZpGRgHRR",
  "key13": "NGWNo7saRCRFw8XTkJVkTwJ942tAL5Z56WPpvsoNJr7aiQqKgvM6bDZ39ddQRXebMA5sui2uXgJTDAhLuXAYGuN",
  "key14": "64qUvGGcMySNPyWi7CYfbrMs1Q2kXPzscuZNR1iv94RwUnJK6duar3f9RvuhB1w4V2oeY13mtdmxZHdxSMFTevvd",
  "key15": "EMGUmvfBkZyTzUwqTdr4wkAG1UPKeZ1xjCLZNimDxGXs1xu18rWKDZ95DUhEyVrVW7DJssNRWTFdJyRQZeLdCLh",
  "key16": "3CJTNE74YKFmS5sZ5Sznw13UhA3H6mvi7qPMyZJJnyUMq8yTYZ71q2TVmmTuYtgkmbZB6ttsM3RDdeJdPmVWqJTn",
  "key17": "385LBKPkuz3oaFKnqXF8f71UBVwNZcj49vXq9DpU9ncCpRftjxqK3jTkmPZdkx64q4R6hLoM8Ag3ekDkBJKwL1fo",
  "key18": "3vBfA9ivszorqYepVxLz33GqUCubeHSvohaXZr6MPnzJujPmCqG18Pm6JjzqZjxZWuEUt2egXzyKyCfVwBxpnonp",
  "key19": "p3m62qVFtkzVm2tMYy96BF2V9zTg7XpzZGCjtSExbY3fQ6bVdeoZx8Rhvz5ve6h3upuvh4rq15QTYeKe2b6jXT6",
  "key20": "3qXkSx85RXVprrJoWrtuk4M3wEodX4ZUJcCfBHi12vZncNyBxiL9Y87jd7xbRjruGX5BV7ABpgTPpE3At7xvQ7m7",
  "key21": "TX9rY15LrpGCU3AUAeE4JJxRPyfWaRqrURE1dbifa1CqKbj6jvbQiGM7uWZZFdkTTreAojkCdgYkp4ZQhz9tBjD",
  "key22": "4GNvu9kmziSEqyjURL5q3JzWqDS37Qc5vZTXcLRJvZkKsijoomXUGrHBdjkQm3hqg899AZ8LMyys5roxUwLzjc6D",
  "key23": "3cNeTSRxMWd7tLamycMpG99TXiuD1TPnwJMGYPHP8AnvUsjqNpF4x2gbwpqPaFjtEUDeJsgmVrjw25VvgtjqzhdP",
  "key24": "5xCpcvgRYzMibh7XfrQ3A7amrzz1vsMXTVgyMqmw8yYYFXai3KgRLDR7jWWZhf54Nbn2SrdLebHm2MJyZgVM5rAz",
  "key25": "cusqmJDNSxXfcbb4vm6Gkz5R4d3G6ebKivAZ6X5dcaitEDYsSdZ671d2BBRuuiLWu4J78cbww83qjm4K6doi4Ep",
  "key26": "3jbA5ZqC9JZ8aZHqWwHB3YytGkVjnGHrNrRmbNsBGfkQymqdxoKjDeaer4CgXbcPsqy55fcZ8QfWYtX4ew7XyRm3",
  "key27": "5Gxfs2yyU9JvSr1UPEiRgfVpyAviDhPm7AgZUwRD7GRKLrK1FVb9RwCLZZzyDQ5QHghpuDotF63ocm5XGM3HfH4F",
  "key28": "4F2ZpSdb3HNPzrvX8g8XmZ5JJiHsXrJq8kY56K8gw1HF9tBvogToLyu2tzZEaDiQfVcSo8NMabEfEMYTH5EMnw7u",
  "key29": "5GK4M9zXm6hQenSe8HCxYSx7FvnvFHuLDKX3PyggG6vcKBdMAUeReCFREAXXydykSmW7h1AHCHM8MUPPuQmBqSjc",
  "key30": "2jSAPn2FmggyMS24bQPpDRnjjUXiC8xfKxEgbdGvSuJHu4Qkqz3TrGxq29897j6i2Aa46NW1sJPuWYBbT7jACxKu",
  "key31": "4wsDXmAGiK4keTnkxAMu34MM2av3XwZK7ynoNdtZAHVAFFbk9oDwYrY4oDd22o47VmXxapUp7xoiwHU4uVzwnE5D"
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
