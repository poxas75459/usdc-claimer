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
    "4r6qZ3AGwjEdCrLF9E274fCUx5hFkP4wcggvuNv7AKPKDa9xkh5vVBiyqBBojNw7368rfwfUwTSQKyzuWvrQZcgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WE4JJbCBQKn7JFsTN9HSoa6B6XsYVi6es5UQ5hkGQVa63rFshu7tRjGgMNodvLd2Grei846kALVCnVZ9Vw8Q9e3",
  "key1": "5HDKyM7WJyNfPiyAnHuce7NDjVczMVwHUyHYPh4gDBwp6BkrKMW3S4QeTNo4zNNtMn9hhaJ3T3QTUD9XcaMBKBqZ",
  "key2": "5ss2vjYPgrp1fvbBokTjozJBzYmG7AQgDB4iFUNTD1o6q5VGZcavP8fPHvXZgEccKx2HTNym4i5gnNPLGe15m2bn",
  "key3": "3sAdqoU6KHGuz2FfErraRkKgMVhhH69fyz5snfvyDvaUsEbHWxyTCtM5RmDASxZjRhYEJ4PEbWEHFwqBqUvkLfM1",
  "key4": "5KTH3ApGdBR8wQgBPoVSqfxTo3eakkqczib6rGm8WiJjkzqqcZ2xw8ukT8Ko8qxVptRvGZdqvNKyuxScUe9h2UJ5",
  "key5": "wPjmLTB5bVHRJHeQgxNF9httH7A9fVujMbCEG5jjbYauZQYnJrsem9Zu289t2yP75gt4EKy7yvFPfQL2xTLnPoV",
  "key6": "47ZAHzFvA65KmSinu5wEfcG6MBLyQMPhUa3kCMva8z2v1SfdM7cUSNCdSwdK8HsEsxFgRZ7MBCY21kXi32WeFHUd",
  "key7": "5xmuHUZ9DVYTK2JU2BxDNiDsx4dj7BY7aFJgGxMbLi3Xw4unNCncqgiKpS9J7zR9ZaB1r2Rwtpw8bLeCkEsWCfDQ",
  "key8": "36GdXZYS4aPsnNHA8ZsqFEVruieVt3FKWtQCteinANnwJMXfAKzq2cdTFuYhcVzb4yFyoNtVU58Lz4RVE8VjYuHj",
  "key9": "2yAEVRCPjVn1xKF9YbvqBXvwX5HaevAtQi7hntgShPKeycanK5xss17gXHcf3PVRRPQWvmcwUBFASviEVx1bKF6h",
  "key10": "2cpURrJH9cAYxcckQeLNAHyYJo2SgJDBrV9meBbmiGs6UUTGYeTStfAxMKryDfp5bgFVfNyZ9uTFCYnVjp8GE8eb",
  "key11": "4ykVHYr9xYkrw1mP8KxLE3tingWHHRywMwcCDJdKstiMZmmgo69WvHKrVSWR4dbYS5BAp2h9XgwfvPtpzeStZTYo",
  "key12": "42gj2DvhQAf9pbncdm8rcqL7fvfytXPAensf52oscE9ynZEsZYqbojzkiKpEbTBY72Kv3f8rAkfu4qFyUJo7PbEN",
  "key13": "5HfYCXrv96ZkGhLDdMofn6aN2f6pRrywMjZWoLbyjtyTG7735nAUKGRcogcvbSU9H71Vppf87bFKBDw3WmnHHY8D",
  "key14": "3E73m4c8E1boKd8njRCcdJ7bkRdBKmx7hsike3thHNvLR3RPGQBAdyTuCzenVBQjAuoLKapvHiK3LCqvKDnhi5wU",
  "key15": "Zc5i8eTeCh98oozBM8jVUkYSNexLzHSGiTzRYioZwDTC2P5Xh9vZWq14iybSTDre44Ws4nRwRq2XQopnUnq7x1g",
  "key16": "2rvXbgjjRKGhBhhkCb1KjHu9bcK9Y86D2hdaiCDJEfk8z6HbNmqP8XPEvSzfMtZX3AYHhUPvxzG9J68y5pdPsvNU",
  "key17": "41o4uAbTeNkPQr3GcqCbEyJjH95wGUjtZqvgFTQ78QAQcVFhWT6frdpEpds2Z8GFr26BsvERHHc1L1BwdjF6SxWr",
  "key18": "4Q37pJBngUtdwUS3q4j6DBq3wb698GprwTscyLoc6ZW2PHW3bUfvmw6civddChEf7E8sSE6EM4XXKF9Rn1F29ri7",
  "key19": "39rNb6QsRHRCbJVsoJvnddBP5ZT9gx2SfkgXTRHRLD2AbCNzPsnHVVnQuwe2iZrZvpa2GM7Tqrkz2BxyUahGZJiK",
  "key20": "2iAxbkLQUFypC46wqRJfDmULHPsb2KWUFQfi1R4e7FHk1rg98D87Eyw8TtmHqqckszSP3sxeKcX7cJGE9VteHuUU",
  "key21": "2n7uZXiu8h4hNycqriqSMg62ijf457d4wbL1xSJppGKK6QDoCiWjGDStRS7FDEtTU4kWBxL5nkr44A6Y3aYjqmNd",
  "key22": "3H4CWYRDfKa8TxwCMfJDuPsyYtyrFZGQ5DGWKgHhwL2gH6fcufAVzW3XRe3YTw431cmNjhAJRB6xky86rHnSZyjF",
  "key23": "3TTw7xJipdf427Q2NNreqJnjeEnTSyokAm5JErvbR1pvbb42EvwuHQZz1E6i3mAWQLzqeL59dkSQYYdQG4G38aiv",
  "key24": "fhi1XhmVk63BLQMqyxkZ7f8rwgCWSDdBXWevvXm1vGWqZsgC5UhvLG5XjT3uzW7NGnMwii7fhHNxQGRAsv2FGp1",
  "key25": "4C53nhrY3FEccLsd586uewRh7bbhb6Hecyxyqqs7Q66u5es3SUGPZwoTu2qgKvGmoNE4XbnUMNdT1rXnm3PtVmyX",
  "key26": "5LMN4QTxKzzQd4b3jHTtyrSkY2Q62Sg2TLc2WFkchzvJ37od4UQuD64VoJozpFeMZzTGG8uB8Cv1hMWk8fUWjay9",
  "key27": "2WsxUbyLVeg4jwe7n4NSpvQNqA8zBGwNzE8RxiF9eKeMVqgVnYctYysTgbVLRHHzBoQ97N9dGN6oDNvAR5fz2eXu",
  "key28": "5aT2kdpfZxEawum9HbX1dE15GE7CQRAqhq7An9wxSNPoQzTo6CWMUBwPRvuTQD2CcYvopBgnkUgporwXyr9ZtFz5",
  "key29": "3MtaB1Evp5MTLkYBWgxNicF5JBrNPrG3BQoKW7dyYUsqFvmPXaVUwju6t1snUSZERZa74Ri5YZZu8ptBY9TynGss"
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
