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
    "4rzS3gWSxtB6JnbzUpT3BrfdnmMy14cG4WtYUk77BEN4c582MagVZujvr1FYocbP7xemr4ovSETvqYrQ3jc9ygiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHMJG6c9ZJgsuw3V53KUbSfPKKTqwjwLBFhYswdwTb696dH3HkAgSaZfxjBuT1GgMCUNFC4B9S5ZMA7BukMEniV",
  "key1": "4EgVThk3XKJQhHvz5r3kPXoViGXawXcYncZYNvWv7joxNXshB2WkmvaqCyvdmVku1XrMmeFSGA4gnJv5BMsPncvZ",
  "key2": "V5A4ySskPRJnZ4YqYvQB52KuQAsWBTJsMTQV5r76bByfgbk3ixk2MuT6QGQfAQN16XbBPuv4VmpGuyZnk61QC1F",
  "key3": "5q6Ga5RRtJsd14szSNWyXi4jqVqCFCG5WVavc8RXnyjZmFzahqFyQeJaPW3cLuafZYqn2uF2nBfiijhBfg2CvoUj",
  "key4": "2QbFxdxLpBWUh2ZgHbSyKrB7hSC95k2kzwvVuT9ALaTJqcwHzYqy7aExFpGcfsN2Vcv6LkWEYfYAU5bXnB3PsGuZ",
  "key5": "gWrSbdQJrWF1CarikJi4fMQ4YVN39CY4TbJAQcs5kApTxuGbSYfUrEiRenozoThauUSTjXDSWax23B98d8nLHbX",
  "key6": "4gkDf3FkZeh8AvnRDmtuB3AyEXxESzQRZDmrb5Sf49qm9wjoQ4w81TPmnCSpj1b74oZJtmVgTVmN3zBhEBLhZjca",
  "key7": "3nVsHDv9PGWmE2ZHbtjqHi8NcfCCqKnt24rDF4HixEmC9j1uiY6WSe3n9ZzDnJD4daALzYRRESiY1yp1jzf2hsW4",
  "key8": "39UHQqRmz5ySobXxHhHmwsq2Mro2gYqUAfL1nqX4vVW38XwUBsNXc72BGp3S4d8sxeZPeAGrVF9fgJZLBWV6BTdo",
  "key9": "3fdyeBeVzpFEStypFKA3EPbYRD9Sa7iSW89AHf8ysZpzXPzjAyXh3PYfnKGisrsqYNBWSyw2P7cvgGDmHZMtjL6n",
  "key10": "3zJjvwKY9zrS6BmYX9Fn54iwZpu9w93hDeVTZzG8GDCNuA3X2gLCUtqH8vsEs1QX7yhuSrtAMVFBRoEjS1c3d6gb",
  "key11": "ckcwn8NGBBw21JoVDE9TMzeGsQ1ouZ5ee1oc1XU65HkoZqdvNdknSWHu7RqxjVgoXzCLE5RvV24Hnvfp2edVke7",
  "key12": "54vNjE8oKwpwdbEnMGz56atcJvHHc3d8y7dSp4WotXADR8jtun9JcXt9QfBMRLb2gKJVWCWZBGcFYoKcV7cDbzc",
  "key13": "3crxeScqEejRUQCk5eL5eipswbhC5LNVwvB2ivtdQjNsbQtKdJVW6w2VVSexhr5ndarGihAweBYCwZ3ow1HDjcFz",
  "key14": "3LRU9chonn8XzD1jjbmtnjHeCqGeim7VwBQD1Ey65iTPVLSUkLhevyAQnAu8DqnqsyoPfBNPBLWu2PbtrAFxREmb",
  "key15": "3tQzh6Wmkw2m6b114THauhVgVz9CUT7WETDPY52LDmTT3G6hxq5uDY5gGNkwRGrPqXGy5rZipEzLL2PtrnXQ8Sc2",
  "key16": "3VZyTgwWM2FrCSWV4y4bM6Pqj91u4KtsufzXtrfSrTGEiBz71yxrHwS7eq8DS282h2gwkG2mBFnXyrF67KnF6jW7",
  "key17": "5vmRAJa2ySG11a6yHR31412dqtJCh5GfQN3k1EX27ewZKkxnu6eDZKZ7wfckjRn6P7wun4VwBE88CoT5yUhuGKaQ",
  "key18": "47zvCUibhc5Apemj8ithArK1aoKWc1jPkNZ7L9n5j74ux3ot9vRBYrfet9vwTAn2T71fiiRxq6N8nM8S38SAGLip",
  "key19": "5EKgBK6y9VJW5gCoXZX9kJUfBdFDYgRCDardKNcM4d562cwHBsPKx79qxKXtRy6qoPDQ5tDbYRVV7u91Fd3qy1AR",
  "key20": "5od2BZEJYqtA87FyBwLVs7Y3FD716BqAB973ZKmmNLnQDNKdgX1NFzeweeoV21UD4N6BWWroU4URPAwib53yVHhQ",
  "key21": "5sk1kQ9USpZtVcNSa6MSa4AbNZ5LeK7yg59q1oRU6gGtSz6EXnK7f5yZREuSf9iPqwz6YvWjZzKvTn9VN8332Ap8",
  "key22": "2ACHQoukxLM9yuijuDoCFfiumqsWchTTcnvZZLsrscwhRDttNM4pmh3wf4MBQxbDYZaMKqT8ECYPPasE9Z53c5UB",
  "key23": "2vaQvzVozYYVQZDbUh81BbrfJ3RJw6uBCRwjkZtom8uKMtGTf9TFQdCQYUDzpzXUkxwDG1CbfhtwFpQ7csn6gGXL",
  "key24": "35qpuyDUnvyLWQ44Nxg7631SreTGtdCKfKEiFzepGRFjGWJR1KWNiZCWwkyTx1D5RxZVbzKHmReuvX29u4Qy1f3c",
  "key25": "2513xaL76DaQwpfinM6c2vuEPjL8rNwaykGKjx2NmQX2xssXxZUbh1LugYSJy8d38DwKUbEYfsDzq6sfQwQ1dtjv",
  "key26": "GWohT4U2tzevtJ1Buu1wWjxj1GFcfB63e8PbX1q9ZZ6xBthhHtnhc3Fgab1NDxsHSvLTsjnekvGbjxF5DN6qu38",
  "key27": "5Y6uuC8Ykn3gX77josbaSbdqkXRndJudNsUprS7uMjY6GhAAKW1dFyp3xhzVtjkex4m1tbC3aaeN8ZV1EfgiMETb",
  "key28": "4Cn45PYzZfyX2iqFwRAdDqWobwQrafeL3KiPee3eeSboNzfqj6dCyEkjjVYSmoiwZtdvAHtovG86PpHgnGZFdw7G",
  "key29": "3oUVPnJgXcXc2Qsr2HzJVkBpaJ8GjugBUnKrYzXfLs5soYfwo6E6JNoYMCZUCvMzsJ9Kk925fZerEunQkBCbUWyr",
  "key30": "3s3grqCNRQcTiQjSUPYH6FpZyc7ZvQA4xFJRPVsG1S9LFVcUAFW5Aez2C63XZLgbDeUa8s7LFRMpyGLscXeEDhwQ",
  "key31": "5RvBpQqswtDdwhvjW2fYzgoAiu67wJdma85iLBNueHJ2CS96WNSqCVQWPmh9pJgbgGUw7nH3vHC6PSXVfW5e9B3j",
  "key32": "51362jcgTynBaPKnpd1FYaGC1QjKeB1ecAz8R6bfCYKsLcuvPxi4agCc9ehLifCtDtZCrHytWDRa9SBfAqQR1qY3",
  "key33": "4XCzeG7JHoRFvHiYVBzGuWLaC1kvmujKT1ruzCQ28fBZCbe76iFTKyFGuGYQ8rFAq4Z4nwieEWXcNigizW7Z1sqv",
  "key34": "qBBEiwLgruhQtQisWJVwvS5kCBSr6EQ3W8Uf5LrHWiHHkC3xwdfYXz8DEcA1GF9RVXVNNQh6gBy26wvkrhsV7BL",
  "key35": "4Jd1fsmryU5eQCzQBrExxoj7zKYUDzjuvXTa7wJJ6nwxbn6vLp1FViFpcztaRjVSknkqGf1JKC4NUZt4U9wFCqZA",
  "key36": "4vVjPCWLM6Q3fWaFtyuNq2vwrGj9i44sdDLZUPDz1foZa9WftjBaDuRsYLUjmaYzw1nCM8jRz4hRpTyMEt9omCAv"
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
