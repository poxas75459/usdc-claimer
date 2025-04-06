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
    "38DgqVWpLudFF1AT9TY3Z6LsyUAyV6YHMRtcEkj3v5Ctph8f8VgPdnRpqcntETzPhCFVuHxAVidMZ7RbPmMxscaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WuYnzGuGvwQD2H1sBgX8EVLUqpDzZT323GJeDTMEGsLkCv8RXSZwrXfiKsZ9YHTRMEvaUyoonyx3JbtYm1ka28e",
  "key1": "4dc1wR3BFHcDEwYKuT5inkXM2sB7RLPMqoMvzWrFmxHsqR2ehKWRUhze6Qdppk6HmKKiJYRhH5EHH4JDwWZaZJBa",
  "key2": "2NvQ5LpRdwqkLZQ5qeW9GKoH6R9tq2rKjh9GEByU2k31rF2X6DWojHDdMSYT4uRJkMoVHfiDqvHuVfv4kQGmZJDL",
  "key3": "53j3ETcUHu4AR17dYdPFLQGJ1M3pW52nFhRU3WzVfGTySuRWZgGEvrV8ErsKvf4XRi1Ae1YRyRnhNfQuxbFPeAAD",
  "key4": "3kJkXXof121eV2RB6GFNCSk2dyTMLnVjuiPhEc4QCFzxPBcz8KzdvwdqXfVQwrHVeq2enoJJJLfZVD1zNwmG2oGN",
  "key5": "39p7Y8f4rGLGCtkZdhTgb1PDp3D4H61cqQd5NwRq6SbBCpdbrFHqCVb9RHXUHbFSXwUHERvdES2LyXmh5b9UBcsx",
  "key6": "3LB39hkSEG2s3gatG9AtPFMC9GSYDPi5pfSC5kGRDVouUrL83PWd9M4oM3iPXw7Pg8S9D4byFVWnLxaktZXMWATm",
  "key7": "3CZ244GXe7sc61MbZtMYThY1vg3EJtYdYxREhzonRWffEcerZsX18G6UmtPz6YZ3Ax5dTQHokooXTs7shLohpDGv",
  "key8": "33m9bBtyTgtxXiLLBjD8DPVEz1vWe1WHemNSn9UbDxzod6EtPwJQP71ETuS2PEkZ4BgM4QkCsdEzo7pcX7aaFzmX",
  "key9": "VFC3hjcUkrniYXHSgFADPBGRL586Ux6kZgKCKBXTAGUfSbzKVgfazKutJW1VZq2gx7XTdMri7rng8KoDqXNSd7k",
  "key10": "214SftXXev44jvoQGp19D5GDvDBvEY5sh3ipEPyQFVu54gp4FVGQPo4sUd1k2kB8u51NnGpGZtrdqsSvNGANMDvA",
  "key11": "53gFPErmrWaoAQ8PQesoUNYq59aKnTPZLJR82oQZNdsdkdwcQA9oWxPv6cYrBszVsamm3gDhSNbMPwY3JZDvM7ym",
  "key12": "46k7mdM3cTtLiZAgEtWXQqqoH7ddZaZ1mrpfd9EmSv2vQ2kg9AWoSF7wC8CUWTwJAMLNKCMHQUJhuGzPUfkhSvsu",
  "key13": "2oqdVbdNEaS1HAdviePHhryVY3khKUuLrKTF4wKZ1UuQiM9zN5XjaxBy8vSmHjTbW26VMD4MW4HBSud9pMP7fRYp",
  "key14": "2T8cKFBNA9hxzvxRbFvN7foEMDfjYBbDoTdwf6Rir56GVrWH4uhbnDXe4eaYf8EiBRyJp3BgNbsucH9iNVBJwnTJ",
  "key15": "2pCqJcd74iHaHr8fhMx6BAvJHgiu76BUcwMELUSARVbX5UKWuEeAc7V8NULA1mXzR6tZ8nP6x9aR713m7uhx9tgL",
  "key16": "4LDVcMeybBLRowJbJPD4hELt2RZJrp2Tk7e2FKu6zN21qEwDUzyP346PQpRouirUP5kWJJGQh7h2i7yKZqWQ5RZJ",
  "key17": "5RTDdxky2Ld2dnXsuJJRkQcxyGd85vZXWGwnXTDgE2DqRbcAypy9A87ozCzxyJjfCK5E54Eovdwtzr4LL76HWzHD",
  "key18": "3A6fnxXKFKxcU1xgpvBmZGxT6AMW7HHBtmDXbX1WV8zJXSEyag7YQxCZWDGXQ6bLSM5j9xEjx3PFMSP78S4WnBJ",
  "key19": "5dBBUv3Ls5wX8myjG3cWghUc3NJbTW22uLXnZ3odVEZEvE6Eotk3jFLYpVHZUCkGsCfiM9faeHBDS4RAxW8SpHvQ",
  "key20": "2cy3AbWrGVfPuTP3ChprmCoRqKKPSXEw2CmA9Bq9gdjcLBombiJ7Wb4quzrHr1Tf3rXyoabiXf6qcr1oWQbmdT5D",
  "key21": "5TfNLzCGshc6QDKoT9NunKfP93a5qV4v5MY8GguQPnJr6YCf7WCnnJq88ZR9AZRNs5qhSdEQaG7xpEZr9ed9F6D8",
  "key22": "4ja9aBh1R1BfF1cT49zXAJZE1Cn3MccGCWcQAw4kJX5ExWVnzyTBo9nhbLvvLAVfSQcNZbmRpt1MgdwWwM51Lb6v",
  "key23": "jqb1DHF3XK7cCPYc2vuCkVm8YYkm6MjeGbih52sj3qktyd5Kb2RCctwvsibFTUvBSHt6qWaswU274dX9Z4APKDz",
  "key24": "643t85zRcsNErvo2ucP29p6CgsXBvXfJExZarp95581vTTq8sLhtMXS6nrz1Bkq4D4xXwKQdXmzsFB3styUdaSDK",
  "key25": "2zdLqe5mNMByznHMjqozcfTu1z4efPVzCVpb6kdQnTPEmzqEsrq6MuRi3xLMxyAqhJgyUxJj5LDSWwX7Mz3DoqAP",
  "key26": "3HmuboUfzBXPfPvjKaDsLntoAJDMLJgbBAh6Bc9H2QL1eUufV54SftyHKzTpeV2WAJwUz5SQcsXxTJerx9cj6hF2",
  "key27": "5RnNWej2uFKUEZN31vPdq4uuAhwAjhTsJFyeGbEnysq5JW5yKg52cKxZSMHAZ3ooYYBwBPAinGvQLwjqf9XkhCXf",
  "key28": "2PNPmyuYfWHn6vrSyFME285dgpXs1QmVmKft38mZGomdrNWaLCkHWUbzQ148SQxUYoA6qCt7Pcmbgt1R4RhiCcAi",
  "key29": "4tXnZPjCSpSU5of519rY6BrGMZK1eiWWP79Vh7upfvW4t9CDUmdWKi527Vsu8cH2WoB4XKXm4sC4ZJ25dy8V1sWx",
  "key30": "5J7FMyYskFXtbhXcEzRrPwbEejaSFDHVghHko1jDpP4mMmvLtk5NeRMw3esJ6jejKHp55YwYcb4mNBcyScncRGN",
  "key31": "Q9ttVCrX89R1zsnHMeF9ET9cBV9dKfWty3xJdEuYQjAHNZ5B5Ai5zTqeiG6Fnp9endJpf4EBCt9YW3SHx2d3Shb",
  "key32": "1BE2fnnJ7shHkjNgqAQY2WyrWtPA6UuiP6nnjFZn6xyviockDh5kXf6onDm3LqF5MpP68tfd6LV41ponxKVR6yU",
  "key33": "2mD4pZxeVSQHyEzEJBtDN67CGut3jEbfp4UjuLLhwxgfyeazm3JqAyF9mzZpoKG6GRGSDYtM9znYaymokx5nf7hQ",
  "key34": "4z5BbBUFWH3pv9F3SAEHezVmdMjW1yon7mjQCieN2n1cNLY8k7x1LTCwAoqUqzjBNdBWvnUn2KwCTfdABYFP6xCU",
  "key35": "nVrA26RXQV4Yxoc1bWAqxiVmfSPxtcqpiPZgPQizSZZd9fnm3isD2hxGgHp2dYYRSYBYX7rCBSerNKh9Wi4gmd3",
  "key36": "4Abp5zQzLDYojB7232qb1vKetcC9r8ViP8SsWm9oGDjXrqim4Bf8QUaSiPeKj4f7XKA6xS1bGHnmDGLRuYCzSnYr",
  "key37": "5bF3CyStGd5sBKrwBypYhTQQg438jg8So3KNGwvCKnz6sJHFMYxkA7VqDu6TQUYXyfBDxCpHTVEP58WeSxLqFAtN",
  "key38": "5MPYR7eQZHtECD6QTR26zD9dbdBoYToJU7YwvB9WHXVmhxFgoobEmCSQ6kNxcG1g4hzpv3BbDS2UbzznvPjiAhzN",
  "key39": "2pQGm9brJRfeFtiQvJ7GWXBpqM1fcyrKd4sZP9NU8gs2UskLrStHmgAbzczaujrUcyee2j63yyDJKR9Q2PvYq76D",
  "key40": "4oJestnAJn71inmtkc85Hds1b4wRVR14a7ZZatzMfB7QyV18LPWTCA7DcxY5EYjdLaZWExAvppzHb2JCd7Bq5Doe",
  "key41": "3x8cHYC5EQ6MPCGyH6WRC7SCW2orh2zHByZSx9DiVYSHjDvpCPEx7GrrFLVnD61RXxu2EBfQMQCHoetWEZqeXyV5",
  "key42": "KiQKebCqC7kXo4ysBXBxTtQp54qBrskgXCU5FNp7DcRzvrmXPbET9yBPrcfhNJsr21VXiffyWHfxaG4QMXwsG2H",
  "key43": "3iCueSEhiavVR4bRzdzQ1JVusZMWx3hUTg5AdYwQPVUDsMCjkuBa645BCw3wEWK1h19HEr95asd1TKwopEaXSdhq",
  "key44": "QyyE1KsdZygM6g476d6FUJpCAcAbLzqf5XpXgUu1DPyfyHPtvRmNJNjMFCqoBx4wHReNKKHYjCFAMtoEGjdymea",
  "key45": "4Ju2R6LpbMJiEhawTUVxLVy85E728MtXbGtsioAQvzXPhXsAFV68oCzHHbA998VYXhA2qJjsEvaPccJNUvJwfnp3",
  "key46": "3DnUa9GxXjyBNDJ3ovURZW4EeEpgfQCDoztC2h6uH1TUhTYKr8EjYW7YcP8YYDZyvhh6zkab5iKNDr16kdxgcpVe",
  "key47": "28kVE2nUd6d96i4hXNMKjKUawXVMvvCYZZ4Cqq8dCp9T1APg5E7LwWiAMTJqNVdUQhDPCTWJqza9ZUyVqbjqcUc1"
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
