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
    "3WuMYtstDrWRhi4r33AJW1LqjZuwwxnWimsL4eAtA6CM7Gq8TFbadC1A1GP88xgcvYnGw8TTwmUUTpubmFYhfoJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wv9yZ9unLW3AKSURV7fE3VTvHEnzyeAEiSeDW2jxpLdwrUSiPx8ue6tLYpDgh2sYAS7FKtnAFVCwBhsLQQF8X7D",
  "key1": "4W6cpFuF614Wyuq2tpJNZDH92YuGut5vPP37h47wtbD6ptAC5bHzHBgKeWVndzXCRmeNj1YQ8HofqcYeYHhkCfG8",
  "key2": "39sU4qNKSxZ4DDAcJEQh8QJSDBZGxPK1vACs4vwLw8fJayc4ynXV8BkJ9J9tPaT74vuWQHFmbdx2LDyuM2GJSW2J",
  "key3": "3fk6pvrKzwcZSzavwLakUbscpsFMuwaQao9yNF3P5Tk9yriWojT7Wf4M4QcDHVmT1pJ8gvfe2CuYQW2tLJ7foYSh",
  "key4": "4KzpzFrLnsktwqzF3gPhxBLVxCRfCwpoFZdQPpyhvUWxrUGXa4hwcVWXsa3ZD7xQ4yQVKxxVjeFfdZfd5U9o1d37",
  "key5": "358xSi7TsMnWcQwdgp5gRfqZTAYKcGzTPtbpeTzPmYdGmYDPLwd3tx6RYTqA68UxFjyUnZ1Eyw7iXJeo7DCKxeuQ",
  "key6": "1SvjbKystL6VXevw9b839zKWoe7UfVTSGs3BCn281PADRt2H2kHdFPYKvWBspQ6B2vNup55SHsbHVGrU1gCbPAX",
  "key7": "2nbpiyjZr1XY2RE3CPS3jAUYqLBj3Y4Q3XhGxPHbx4Ej3LzUKfSLGHmXBnuxRQvQ8RDvZ5Pe7r4GNv8c7KrTLHCH",
  "key8": "3LVjyoi6yF1xkxFwwWCF4dtBeMTLh25TUWZDSyTmGk9ZCgF6Nyg1bupqU43HG88XjHxWVA4kkwMHAyfDCrFijEWP",
  "key9": "JRs5ZvAsjhjX91yYHCzm1Aqj6sDQYgC4EuSU15xxwVPmWm4eDCRqozbYd1Hn59DSdLFEZ4cA6uMcAoo567JxHF5",
  "key10": "3ZtLXE9G7kqpGehygbtKbxAv7QzCsugiqJtYfFmfdnCYeGjT24X4EFHjHk1YySAR9UBUgBrFU22MxAWy298zQNBd",
  "key11": "4PKXqF7uNFYTKAzJD3kQyHNyfvbBYphUmFCQDfB2ndkvJhwnQWXpai3Pm5UYPUuM46yhZM8xuNVYysDhZ1dW5aZ1",
  "key12": "5mzQVhrvP2tSjx5WhXayZ1LpdDNcQ6hENLL5JKSA6QGBVuGu9sFPBEtjwiwy9h3BKRaVQ5pi6qWxaq6Z2WqqjFFd",
  "key13": "Sp3f1J3prqSTVQW3Af3Ke9fsAZ4eZTg5vfRKj6W3egePdxkjj4bYgWFcnfWtfKdLgdUAuKCsHFed6hCHSw1juxp",
  "key14": "5GADuoX3LULdd4mDBz5pCQ9rksMKKf2n29qLoMa7TAzt9QfiBV1wv6j7TeoCvaCefy29iW7KxRdWRgcsPHH2mDzV",
  "key15": "2HrXXCt3H2dCsPsGPKZsuB5FxHhBsZ41cv6kw4mcF2QYZpWQDfJ6Fo4dueg8Cjp1nEV8AKotc747jn2dh47RA1Bm",
  "key16": "3Q4wDXP9yJoKN1j3xqMcdR6Y8rMr7VzJgeXjc7MvcPdbLxBhALmzG8LMECa1xewJGrnrKymbYLSAaGq4NQJF2eaV",
  "key17": "2bCJWvkJmXxHzyx2naZ6y3MHptKJthUWAv4GJX4igxzFquYWTC1yE6u3g9RdmEfNURrstPdJoXoAh2Fn3P5sn2yN",
  "key18": "2qfFkiEFQ5MMUwVNSJCXqSVxHS1igpKSNBmKSqQzgDmbRau7ypEBrSt8YmtZgoLMfDdwNEt2SbHMPLgjfn995Xii",
  "key19": "AcaRkmKZS8HHua2QpXXNZBR1FJbwMFkbeV1yA7CXzsyuej43WtrXJW3eLCYkLXxBk9gEGP1RSm7kAoXzEmAe8h6",
  "key20": "3NQ9AaomnYLA2bDvCAqHvuM778APw9KsveQN9xKwRrZQLdC9LiXtYW9fjEgb6vcdJZQfMvfQkcy485NxC3Hmexej",
  "key21": "4XEbtbNxMa9jNMVreR2YEqJfoh2ggk4K5Scfoy7sgrV8mcNz1y7VKoB3bbs1B2nUQzhQV2YeHateDycXFXqyJSy6",
  "key22": "3V1AQ8paXWcG6RCP5izCunmaQZCRp79gbK96ET7xf3C3n9m67DtWQMnAvWzurUaPSkisGvUdcSW8A7oLNmYUyEFo",
  "key23": "59pympFFCHezM9qdmPxmtSXebCpepBd61e2c2UBXL8VTGKzJYJEeQRfep83dbghA3Sutdpsj1MKTCMv7USZ6KsyP",
  "key24": "47uq1ia4bfpwvfW856xKAmuQGsgqGVUxbb4ytJZ75Azh3itqrxBajrtNFQqTYnC9yNeGwdkkdSVLLNypX1SwbhaT",
  "key25": "mzo9iTQgyMcYDLBuuMmz8FYKEW6PTHWZ8GmUCzpXJt6AARBsgaNWmHDrNw1EEiLsE66TF88dFjnC94bnDpg7tdq",
  "key26": "9tBPJ7JEB8GgymuRxi59HaNagxRa6t746hxREbh6QdkAcSbZTMWTFZTgkd5gDNAerhDnZGhNCT5xPr9jnUfMsCC",
  "key27": "NK1UJRNZun98NTFNJHRqVMdbDfxRrmZcsqYCP4uZYMSwSYbns4wL2f8bDWrJL5xeyZpLhgmQTYgmHshnKC7MNu9",
  "key28": "TaE61gcK75HrsGKsiqaysFemrXm8JteDKAEQZv6z8FQjgZYzXR1Td4CGawHmYE5onitnPorTnB89MYmScLnUcEE",
  "key29": "3nYdGRLNwPwpvLWv7DV7Uc55Rooa99LR221uLBUxQJE5eaYGv9De8k9pp6cNEFEVseeJ7nLCezbinWndFAwkmkbK",
  "key30": "3UXzVkKsaXbAARooMgmi9qzq1NTHFVCid985cjVXrxDPPXN5rby8vrJ7jXLpEKBoFapNX4TC5cqLtuceLpDuCdT3",
  "key31": "ejvRAKjoTXB8egmAYCHVAvLrKhQf1YsNF28EeFsnvEWkZ8fCEkxXo29ffGxA3fA43oXQtVdBgfmWnLbhDH8wYAm",
  "key32": "8zXajvVhmZh4rSJfMiU3GbW73gDWEnCLK6eWtShRYWuwvtcTDbPhaL88z8bwT96XucSCB3DZ4qkHgEEuPUFUHGf",
  "key33": "5fpycDJFZzxtG2ZYZTMHnZWi1c3NFQ1FCg49bXxvoTWR3J43opw1b1QCrhmsw8bpzX3QPPjP77ab8CqMe2pTbKQW",
  "key34": "Htr88MsUSCzMrMDvZYUjqZN2bfEFCQhzkS3o9LRXjCWvyVwdyrMxRXSaY2bRxc4TMBS9LFCq6DhfGQJk4VyXwGq",
  "key35": "eQPm3TSAgaaWXiMwdayxMUUcx5CtcaChDCykNjZME9Jn5FES2KZVFm1GG2VJJSxE5La18t1zPQrvvMzSxuLCFR4",
  "key36": "5LUZGAMnykcYE23gBoEgGbS7guNz2yedR13Bv2Si6NFr6ehHhpamiAZ8uQuD2biBqEtBzdjX7Thk9dJXySvXnMbd",
  "key37": "4CcLpxY6GZjKz8xedSjbSaQqR4RF9b8ihGzh6NF32LDtWa1GX32wTdLKCtxccpbGx2Y3chgz4uRECQ12kZvtYWTY",
  "key38": "3AUrCij3MikCpzv1xfuwX65FMwUeHiD6kHrDLApuQKdeoUszba6RxUfAyrKHJbqaVLPczgU1PRwqPGzUmi7w8qbp",
  "key39": "gDdyjrHWfv25kRpE1oqBgLw3cEZYHVK9aEB19BQYMZ1v7gBX8GUosSr75fEgkZqsJnvxU2sg8CRsnNBmY5Xs3E7",
  "key40": "554KATjEjt6WyPLnMDdZKdoCxX4PKT76EA9g3bD5YEJJZzXqDZoxe3z6Z5GGg6V1ZBb3btDF7mjvpP98tKKQrMAX",
  "key41": "3UdDgvvgq5NptawWKzQEUs65qSPMm7JZNYyhzL9JNu2eqvUdHrC2B3AAtCYXLumcsnomDVJm6rtdGNb9EpGZC6ug",
  "key42": "4Y6oozedst2iPyC71aLkxeGE9WBZJgEodm4tes29Y8wRurdDGFfPAZuz4eQTd8Qd2ytvgR1qgXBn8EUdgzM59Vd9",
  "key43": "wG17bhMKeyF7hdM21ZPFqm2Rt2MArt5f5ru5zmVz1w3EwtvC8wW5cD1pQpuJax5hiULyAgk4CfhhYZwL28VgRKU",
  "key44": "3Xd9Uj1jhZe9WNqUPsNu5zsPUXk5Dki1pEsbA2LQJ2eCiQZWr4oK7fwDzxt9qaq1onNdPJMAPY36fj4ev7UJTi3R"
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
