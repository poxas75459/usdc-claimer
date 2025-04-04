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
    "3Nm6ycopgsEzV2AhPNZYLK5KPzdzNGC3KYFyFMa15vSX9f91E3rgDkaX7vL9rH2zARJgpDpRsC15VYqRpNAwEVjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMfxxGmeAGHPwo4Az2a7fzgZZkwyNqTPqtFG4L7RaYvDZAmJajkJajuF3ZU8U7emdVzezdQvL8bCSRVRsdc3CpU",
  "key1": "EZXFdzp4ZvZVGkZeUxqFM1s3wMzxrrz59TwZLmwTpC7uZxsHTLZSQay7k8AVENSChhTZN22UGpHLpQbERFosBmZ",
  "key2": "hJ6n7uGipTb66HRwbrHYevk7rzJvkkY9X26jZ2M8wsZLLYPG6sjMGAPNUzDVK1nUz7f8jvzmkTyEEkEpYKELvNW",
  "key3": "3Hsy3yp6zY5dSXD5iRzTcNpc7LrTF9st1vVicGJ7mBdt3AKb87YRQvAtSdsbPekny4tXq5Luby2tg1rWHWpEqsQD",
  "key4": "3QsmyyVQUgSduqpj9Rcd4623Q243ahxYZnADaiAViCmv7RboKV4gd8ahq7azM4Nq96Z6d8UvYAk18nSFRrSxTDfH",
  "key5": "tuhM9ngfpGEXEAdvxQPtzc1hgvKC8UumTTDZENZF9diLBqbrYStLgkZ2m8aWgR1MFSsLJnazzZZaBVcjqjmy3gc",
  "key6": "48ZUPd141En5gtgfYabcjZy5GbGvFjLY1f1WjXtJQGndiqJKMWycC9ikcX2JhNJb2idzSJhairmV33Wdui48YvqA",
  "key7": "4utgqvbADJ8t71AK6YCNUNLWFdrjnMT7v16e3cFcLkpSMHUHPzi3vdwe2NEASs4EgWQcD9zDUieiZGuyhCBYZtfU",
  "key8": "9iJoCnhNFtWpgf8Brfi4UTKmTQLNLxMBswBxubgjfbAcmcUU1dMQS5KVQtUuHbDvDZmKa9TnBJc5wVFbvriHjDT",
  "key9": "4Q232YkmdDsuH43BiAhEaM1oQKvBLjeQQo6HHYYqsSVvHaozgPgLwqWDDnZeDBQbXL57wYGPywLRYDWKxjCkYM8z",
  "key10": "4EHoHxCqskfD7ZaoWuaPQR4vfh97eHotzsjSAFmn7Pv5LJv2sSzEq116X38oNd15cDht6wxaHVqsMdr287h52mMd",
  "key11": "5PNHTWxhjQcZyJKN8vhFG7M7p9oSEiFTuxWXdVaD5u7sDT4RDQbmMzJvd8ctP8cJDBN8JxZZvCsWLy5UoMrJ5LAv",
  "key12": "4U3tpKLck7KDtdmhekaxNXMP5ccxRuHvm5zskn8SrUgAYCNhKy6u1PeGuv2VcvzRgSgtuWRi2vVwe48unsF2eGhX",
  "key13": "5ZWSUBoWX77MYJ4PFL9N3YST534Xbvespck6it131oxRJnMZrV3jKaCTEhX72t5vdXRnYYRDbPZccpd38nr475GA",
  "key14": "93Ho9f5NvWCJZWNZX5nNVw6CCpQdet5JBpTRYBkNuBcsqUqjGwaJk1RUPznnBecj5DRCLX754DV4ZcFNebrfhGn",
  "key15": "64yuv6ifoWHraBNwFZ3p8NJcXmMiJrTYKrz3o94o4CHopvMpmJw8rf4yxRtm3Pxk3ex3yDy6kEAeLhrzh3oTtnCA",
  "key16": "2sJ4tZCBjNzuTdV4AWpF5fAmgjv7fFwSyAj8i2evvhysdn7wrBF1PrFnqC5owouXMigWqBArrQxfNpMzqMVwXJu3",
  "key17": "pqbE1DfwLiscbXffneCyCS1e6s842LV3gPgxkZ8dQSRY9WEExTMZffE7b7HBqXb41YeRMzThqsf8UPCRosZ68oG",
  "key18": "3KB7DTthHbK9xVYBwpN4ZYVVpDZh1KqtFWcPSA4sfwZF4xR8oksyPowQNxus4WeGT8LH5sgN716EHzqrahheyqnu",
  "key19": "5qbndUpE53v7BhgUd1sTzkracWkXSjLRvnojXgXt5hYSifGPg4wonUnKhXvvkRbxghRtEuMZREZgWh3xtwaeMysd",
  "key20": "wytERcfjpNGUVdKb2MpimU6qsnBbxqrbPMV7VR7RMjAkW5emrfTaCm8G6jBLxBgyZqKiC3AbRFULs5MZfW4BVde",
  "key21": "4QaSVnijbTh3LhYFvRhymiFzSyzPqkhVF5jX4Y69QhzvrXmX5QwEHjg4CDtKZ7k26pU4qb9fTDgwxa877bVbjbdY",
  "key22": "4Z65nzbhPx9q6YMzuUAZGp7nHgX4wDdDnQ2Hq2Lv72FgiyVLiEjafdFoR7kdRxFB9MpEMnEtyc6oP3DQcfZ5guQH",
  "key23": "5NkWuFEk5TF6MdEJvs43X1goaPx9wGXnwuNCZTPrxESfqaGNtVpofzxMRBxBu6Q4UyK6vrL2Dd5iV3VAWb1PRzFL",
  "key24": "1TNa6Pa8vDssFG8y52BQ6UGKYtAyjrn88hUZ9XJWFHzzGGd8BFmeKgL1eVii3ckmZLTpiaDMGYyXrzLq5VAVuKq",
  "key25": "5Ka3oi87w5aBqbyQqYrHwJ7nbskrwG5A6nyA1Jjus4GEoFaNxjNHkVmwFYa2PfQar1DA6Pow8xLS61P8BFRtrLxZ",
  "key26": "52pkB98xRxtXVkR8R8RvMouVQzNj57g4EvuBQ7j98UHLqkyUNBsfb4YFtxNYFGxjeg3Edf5dPxXE7GhvKy4q24zB",
  "key27": "4TrfktL1oxhVeF25CDpF3wxdP4pqPqS8FrHMi6YhZeBsArPkhpjNXKFAG8nnYiBT1drU9dzgWUcQ23zEaqmGEvaG",
  "key28": "3XBXtcrxAKvt8t8og4P9T1XWTJHPgmfbstRgzMKRyk1gEJAX9Y7yW8Q6M5dPeBgtnY2iVbyc19PW3uiaDNW9mUPF",
  "key29": "4Btystzre5DPvnCs359pkhu7GcHAL2fZmF3sh7tC2RHvkFLM8PNQCxgab9KVoNY9C2kHYNmh6ic6usNxqD2oxBTH",
  "key30": "4jcTnyRSih3iPa365j2dwBo7v6mSauGSdbAiECof98YRGZoZRVguNBrcQ22TvWrCWsG55jX3waNyD6neMb5n2i1V",
  "key31": "zeyQ3GzZA4vuWsg1yGCS7cv624im5qTBffpifrpD4vnW3hbyDUbNAF49PPYS2BAL9hwrNn4xYebWraofk5kroSw",
  "key32": "2TvAsWf2CScNsSWmjDw7karx6s8Te1UUmFqQ6Cu8TpPohkditjELrRarLrSndJHJMUx5aG7ReG2gVRvoiNE4dW3p",
  "key33": "3EnE9uLYx1bDXiU5fwHVUrsCNoWbZ8mtq4BRe85EFTcaMpcKmKyecQ93eF7tRTj57L6GNUsjobyqfJUF5FpTssD2",
  "key34": "2Kxqj8fYb9GdKCL8RTJch5P9DdCZoXw3qo9GA4VXcpbajkUqUmGxND74gq65gAsZA7SnQhcxCBnmbDjPUCGHhWRf",
  "key35": "5w1fEFrVcDFUEfdXNDYTbqDF7K3MCRVufc9cvhRi2npPDexx2gPjbFXky4KkFWCyWmFYvmSEhyXqobBXLruEic6w",
  "key36": "54ZXSGdpvv6KzK2FvmRcEcn8yUja55xZZgxu4VmRforEVSSg97jbnVNcDNXMYz3ijHnCmggmFGYfQFQLuHaQd9Hd",
  "key37": "5y3sVbxC3974Ewt89ckREUJof5XxW8ntbGxYBzKN7Boc49eXjQdB9puxWEFZ1FvuApjQkhE86m3MR8vZdhK4Y8kq",
  "key38": "5cct1HGVHXKUYQqmzakjnHo9EeNV8TCcndTxrg5epWRdeePSEBSxEbEpsg28BxRVsQzWBiGW1knbGJreHqQzeomu",
  "key39": "RZwjTKA8bfmM71nCENbJ6s1zQs4DP57HJRSvFEVP36vttaJ2wGd6j119mD85TymUrZdzboGVgmkAPPXCCZpD817",
  "key40": "4fW6dHUpksL5TuktbjcJeRkfgdU8enMX2c22UGpt5wYZmP96Q9uuDTRS54WvJthNE9LYr82V9EuAz3TrSrwwKsZS",
  "key41": "5CzXtFACnra6Dht9P4ExeSsdbmxPMmEEcmeaJoScLdWS5SSUKdz92NDYjypqeVoS7rEbKqimYADLP2RGGiF4hMyY",
  "key42": "5NDeeQNCXqi8K5yfyHXKMYxgWHTNASPvHM8w6zW2TDGQfqDFL6jCdnTB1Qq14MDJenDkUbW5WbGwbBJ1kj9ryxhT",
  "key43": "3jHou7jxpVbx9Wm8azyD9ncHbvWbwzAhDVPPcfn36EHBnJ6yJwN7kJLVgTznY9LwQxxxfQMx99rCzAwpS4CYMwjc",
  "key44": "3qsx327pVivHWiDDnVaenq6fiKYSb12ZDdysQHRchenW9oVQQKBYg4e2j3hM6WQUtHcpb54sKk7EPVoUZ1EstXk",
  "key45": "3gXLgdHKUmiBW1vrNarMoCPLav77rmG8KPe4FhtLLBecVT6QS8QsU8zCrGcSACjCfyYb6Ys9HmNkxKPFFFwA4uGh",
  "key46": "4hZTdUuuHDDTJF6D7fxpdP7Y9Cm88NCUryCWNXaBLeBKHUXirA7ghXCwrv8Z7SpBM3pBD3gLnFAbdg7BBi6Nusr4",
  "key47": "mnQsrJnzJsnS6XAziGMPTBs5fgAn1GC6gmvwdJVoxnYeWusDwNoT9Yyibvr4hbDAybvn7Ufq67QqCsMZEQ2ABeM",
  "key48": "Tf4bgBiXhfh7kDBoafbZ3qThKWEcyg6QPNjpna9YAQRFJhMkJY7vEM4pxcGZ9Pp7MkHrmUgYfLBt5yQsoTrWgRn"
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
