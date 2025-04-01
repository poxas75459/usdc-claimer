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
    "4S2wEeK6soJV5NayxcLdow7RZRWCFWb68HuVFV47UcxKAvUeBEpHFJFmGxXHpGtkpgEXD9Xp1EEN4uLTriDYTPEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmhL9DRh7WKKJoPCu7RRhqFmNyZ3tfVXZ8hLTTvnUnaaoANAKKYK13fTdHncGyHkYjQJTaPKSsQxrFrKfqV8fvm",
  "key1": "3ZMLw6ASwkghsAgMM9jnfLbic1yVq4mSuycS1m6eMbPC3MFGHH2Xy6Jbd6q67wKazPe4ruMkP8FVBPSZxwBdkXao",
  "key2": "4aCnquVuQirktgiQJfBuE59D4nrHg2P5ox9uTrk3WxUS1AnLLcqC6bsmFR5YQmyQfMwGcjH6dB1ewfCLAzYH59FR",
  "key3": "ik51W2DdDaHsdAkHNegR9obQwyT9wFbSChuhu8M49Z7pXJCrQwQEKYKcxBNz9K5MME7m9moHC2vqcgWJbqUtnrb",
  "key4": "3mBCejWNjPU9xYZGfMFHP96UvMwCiUxW5AmC8Joetf5d414nZcabLEDCRArLrcxUGHDHaQtaWRSTQYdpxBNeB43K",
  "key5": "2n9msHA9zx2V8LKnzygfjUTvdCXgeiLTbMoan5GPjY1ag1KU9jo8Bh1EtE5dcgrFb4RyrAZouRk42hku8kjDVkfC",
  "key6": "kb7Q6c3JHP8JoVW8jJLqGjEEuKpmMuB79LMXDyB2pJUXrYthyBPyTNu3dg1V1pmQNULtajQ93pz64FpwqjthiwH",
  "key7": "4CjYdJA7tWa76gMA4sokec4RxZD79PHgGCUoyVdnnVVGXmDSh7Xo82FmH8UKaQJHVGZg2TNsyk4aJ3GAiyb1TtMG",
  "key8": "5jpavFjkh1Db3sr2Pmi8zW619ifgKb367A1dxgwjLqGa2pWyTf9SZ8kYfDrJjQjr8n8ukZf7WXospgAFkgWV6mix",
  "key9": "q11dY7d5maS22zjCTXg63e3wkEWfRxRpnCohuAUg1vo8EJ7m3bxGxBe9tp4Vdy8K6M1bcbA3sAUya9SRdXuoi58",
  "key10": "5bpmUt6i2a7kH74UJBouWwK2RjWg2REj8cwKfFRSoS8XpJXxjKXkAPrc5ApZzyvJ3guUHhZxaHcYxE3msGabu5S6",
  "key11": "65Y864TgLxSLA9bxovfnSsijJo75GXzc2i3efdridVKrQX3jKUuo1WxQg3nFJdBcps2Q77VixUST4kiCikadsxTS",
  "key12": "CwjnjfFcCLGHHezebE3WXkS12oWxP5cbdECcCS7qMUQ8tV8gDZpEBMgGVjHrs3V1u8iQzQH39iUkaR1Cdcrdz3w",
  "key13": "DdkDqF2UJrFyT1kcbVfLFyoajB3YXq8aw8bV6yBGfUZRLqAQJeBAFqtnzp1p1zRn3omjecXpbQpg686S74TUs9h",
  "key14": "3uf73WUcckfexKDL7ohczo2pRpYkE7YaKcqdAb6mcvvDjaXFaffta22VwHhF3CJhkPeDnt4kUWqRSRsP4s4C6qnq",
  "key15": "3LJTvqti3UVC9E92iwULUK5DFCKR5nnNNomNC4LLQKzLT2cMq9Zx4UHb6VpBYhzoV14DfPa2UNc4jwaa2UXm8ENr",
  "key16": "8GBdzNPDpkUF8AH2ixfGyCrAPMCCsVwHBjx9gEderMGi27BicdTJV7T6mZoVYGGbSiZKKNxbwtpd6CW1N4VwNim",
  "key17": "4V8ietdcCfByy6uxgH5FApMFFrHwKTNXRNuSeNtwFqxp8JChqtnqoWcdCqHs8iniZAF4aiDbRYkazN3NFQzxBPLk",
  "key18": "2Y4jb2sMigg9fB9o6U2QG5ZPxR3UyLoVABQDAhEDnF1VqQNqbcTzUSiUsPtBc4WrLxUbW8VV7aa1uRjHQ4TvW3ko",
  "key19": "5Uj1isfaxH754WY1abTQmnbBzsoA1Z3Ff2AfSQr7Ts9856dft1GcwSVqgKqay8zz4apmCvy1a1dVj6qTVk9maB7f",
  "key20": "42zMUJZU8ZgYXk1GWivVAFDVJGXdnny7b6rxZNo3rL5Fpqi8FdRFBDrmZmU5JpSXxnuDbi6kuhhdpuw1rrAN6Nbm",
  "key21": "65xhKJucExyVZUHqGiSrqx6onZwspwSnR7R6t4UfFGnTD3GSfmp7yMMMEKs2d58GdiJWc8TqcPbjsGU8c7FJDHF7",
  "key22": "5gpZtiJcFaQfknsRMjXrLNkc2KVBDxyuPtjvfdgyL24pfn3mSkvRmgbyTd9M9TFHMEcH5B9SbFFM7e5ziD6Yev7v",
  "key23": "212AfX2ZQRovqW8d1bFqSz4xFvkfordhsC4S6xS8KUPjimkkybjvWvjsP2vzP9aTh8kkJCY3pxb2AxcDZyTYTs4v",
  "key24": "33b6nzcCdT5CtgNy8rrbFgydiNLcRiRSwvK6sHPP8AHf5gvJjNMo4Ppj9UG6koKPme6XLEEuLm831gcNH7JNXRf2",
  "key25": "3sqnnzuUc7v3rHB8NZMnw47FLtdWXtWT8Meey3qUqcGkddhHCpb6jXCPY57tXCMNmuEAYTPs5ZuLYwUayQBmMxDH",
  "key26": "3RYTau4oUvsAdDqaK61oyATnwhxCfnaks6azWiefwZwMJEzFXf7LgJPFaxbuXnr2qzLkPmBHMMk1GwtaXT5CaiT7",
  "key27": "5vtMuVQjdgdSbmM7k4WGDvrK8XcQoSFhQH38PKi7Hx66yBbdAzhZJgVPjvFkySaV9fU6cgGHa5WGqXcu8WMAtLfE",
  "key28": "5szwLqsWtiwPuUBAx8vBwf5KjGHdEtK6EZTgvSRVyWVqjpQkjPyuofqVGhoR4uRAQ9noxwZfvBXnBHouxEJesjci",
  "key29": "37zM5AoMap3m6nYG5vyEp2tF5yjMiXyfbdyqVdLQaVdgwebqcnGhg63U78Q6Gjg4CZXZaobkvxVdDtJUZb2JHLTA",
  "key30": "4smXnyhwmHMxEDxcDiztqv7w7wsXGndX7TVFeS6LnPLQW6DZwuJj4HDBe3VGqHFP71XhdCkzNKD6JSLouegPNJux",
  "key31": "2LV6CWQ35N8U23FCjhTJ6cqbFKvsgD38DTDxbaJE3f2YjgFBdCTsmgH7vZDZKvphcUbFmhrU3RKpf1uLr53G83od",
  "key32": "niBLvCSamTV52WW3znW2aa52DEtrP3CS8Hfi8g9LV9vMKmwNeczNCeVXFPi1iQBaymsnHB42VhAhtb7gZyFDdBm",
  "key33": "2sMfnk33ZKPmLHmn4Rx5aB62xNycFipVf9MNN3yu9kTPHJn8TgcVeQjUsjHeYh8rQoT4nodZpBA87yZvLrZt46M",
  "key34": "5iiCCPUe6vjKPKQUqmNv4N3SNpuXyYbz5fENJiVKyW7EMu3cuqTfuzWnpAtBc45KDGjb2hEbu2PpzB41KMK8RpmA",
  "key35": "2M2RBpJrjZEi521WgnUifeCNX6yvHieBaDo3buM5UR8kJ4EKoegpzH6RZeGdCM2FQhoViCcTSLu7bkQHfBixsMnv",
  "key36": "4gcpDgi3PfJLDnLhi9vmCx7tZvsEgFmsTV61p87ZgiqL38XMC9ToGroWn5w6u9ijyUfXqw1gwcVdhmvveMnaW8dQ",
  "key37": "39vP3wv7mD3vjHmavzodPxfYwqEsrK3FEMPSCA4zDmgWnYYWAEeVuakKt2f2xMyugH5sNAKLzTR1xiyTbKLczXG4",
  "key38": "rgqtDYSaUvF8FGEryzsvKzCCxnAnumGTQoFRN3zm6Mc8WVKsV787NJQfEz2gr9gFzBJmvQWQf2CMfdNgUXKi5gh",
  "key39": "22kxh4ZX43VyRHDakHiKZhTiuvvZ5qfFHMmgvkuVFzorevv1qxysL2NXbTSjgXRSAhbiBt1VX9oXqHAStdEuUAmq",
  "key40": "MtMfwSdqyYazKANur7EJrfdENV6jkNWrjjqPj8XSDcbM9Fy1aTHJLR8NUDrW3anjmZTFpzHdzGKmQ4jEAUvQ52c"
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
