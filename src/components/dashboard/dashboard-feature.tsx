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
    "2tpnEdioVcTRfaQE9DVJb7vEjvz14YFBVkfuQneFYFZZX7tYGoCZAfygUSUdarM3hqiEVMdJLQUqFuMYnYj2GvfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAPfbpysqAjXaFdV1ieTfbQh8fESBTaE4uSzQa8P7p44yEbZxc6FXQHfo8nb1fkVZdmSvMpyd5hruHzsv89HTuJ",
  "key1": "52AMHqmfy1PKpLeTUGW38hu6yBxiukkgrp1TTUeZRommxmPDyAddyZQtuDc9krBYYnMe8Ux74DmzXoosU8iTvTmN",
  "key2": "454YK3qakH7JgYF82ZoiiptZVhectUB1iH4Pm5o9hvx9At34LHHtnNFzmnrUHxy9xePLMx3XU5DYwFQXy1taz2qV",
  "key3": "FEq3eD6u4p36dy7dzX4RCoZtP3wVbVySahyCXFyMNgWE4sU7uUhv7Ed5AMKMURKzgifnQTn9cGqAk5E3CNRHCMm",
  "key4": "3KfmVSuhEnDCpwxLFJ2wR9zvLLCuiAMSnrBYMnCVp1CvAN71uVmPThDZa2VRUqVFKKgKqHadVugLhkjh438NVahS",
  "key5": "5iptTHaNriHFNxcv44wwZRPit5CoMAnyVWPWNdJvDgSRYK4f6tJqNoFMZHedQccAzA1men1Qnrkf8FFCMjDG7iAo",
  "key6": "5Z2ArBR2LcbNzzr65sZaQjkCV5HogGTq5iZqdjHCQwbgFdikvg8VsuBBxYSNpLv5ZNnDrXSypoapggD87wf61Rp6",
  "key7": "39trBc2JW2csbM7sd5JgxDoEnMNfuTRGcRMPx3m5wk9tahNsDjNZN3FXZ2y3EG1xUzZPk5vJJHE6NLHTqjbzMRzc",
  "key8": "radpBU69WvZF4GnPhDQVieKUPd2p3dWPdKj6Ka8R3dLR5f8FUBobjGBYXtRnUtktebLXeXTDjhMVFVtCVMsBvV8",
  "key9": "5eWTi6VGHAqXPmP398ocTtS1L4yUfQ31hsKy7WqjF61jnvYQHsMSsyZ6Dvvuv3UQ2rNXEmwLbvFSLz5JR57H6duV",
  "key10": "kFRVBKA2SfUnojvSepQk1DfJFWYk4hPrX5ZAc9xgR6yrwgtvmUVCmeHhNHfg7Av2bWqgqocFLwbTEXM6Fa6bGMg",
  "key11": "3NMvMknE4JvA2BPyRAVNJJeds1V1T2ANXu12vTty6Jdj5XzkStKBGVLb8WaiHXdhFhKS1ooCdJ9zFNw7PvKh9NcC",
  "key12": "whuC42UNQnmARG7cGP9yViVc8s6efY64UF5y2TmPMCwW1xB27VsBWENrpmxPRQ85QgZszJPHdTGq55Q61YMtLzk",
  "key13": "cSJdnea1TUi4bhRNVFj3VK76swu9VMZyPaYGcAC2SZNT4rmEXnXbN3udwCvsUJFoUjEJQEpvgDZkvwbgCCoxhu1",
  "key14": "2ofyA3twtTNDojDnd3jsf5PG1uySK6YRSgVqH2Y7KYp3HX9xwLvtMWi5Bmv5b351hPmJDCKMP1UaUvV9PEPpih1Z",
  "key15": "5ayCUG5r5WjrUvSBfWyfgqz3tYokG53uqNYV6stsTf5qEHLwCjyBBez7h1RYRXUGyZkVtYBhkYo9jXbA4W2WDRVo",
  "key16": "5HR9AzzVR7SyUJYfwLTkgtL8CTTBCXSqeCJ2p1Zox2WdFakWCW7dhZX3KPayKJixjGjvVqwuhdYLPuN9ZNUMPoh9",
  "key17": "4kpc77rajzeBJ8Nq6cwEjdm3Xre4s3E6Lh7VfLR4smVDrreiV7XeTPCpHnQsSsxPdNJjespR4zS3AC28Tsk6DhuY",
  "key18": "31mQdD76MjTLpWJovGcZ74zjH339RgNH9fN6f8WUAPHxPvumbUJaS4rNMXSBmG93SPCghnN5MANcLZZ8VmM428xD",
  "key19": "5VX57QvmsJwvUiUMEu74BdhGRmbivnaunJGWSzsCbaMUeDvhh6Su6huntWu6AJGwoyeRhrDs99vVTkGhLpaqHVQW",
  "key20": "TZavY9uJPnexwX52sSDsXfapK7yq2eeXK2gLFUftByCHepRdaKZsqCX8E481PUjhwZAL5QjUYguiSpBLzcPnvap",
  "key21": "3uqDEkF8P21xj4NV4bW7FkwvRjVCB7mjeH9WEHTrM4rsA4aqRz3pdPD13BQYsT86v93bQJRTkH9khEMMjat6G3Jx",
  "key22": "4MdGUewaXRmuoiB9Bo1xfiE2xMBXiwgNiKKwGCyWKdu5KnjZhzFko92WR9hU4cjHB5vrnU1iZBrMobVu3aVD1zWN",
  "key23": "3gymHimmNwSTMxJLDMQybU2kn6PPGuW6MhtwJp4otAKTEudhM7shY84jGBt9A8erE52hBKqC6NQ9HnSf9u5GKK6F",
  "key24": "2sWS539HmrfUoiCC7twUbQfhxaifESSAgzqx84s3CsPbRZPhEHYPxXXMKRXmYeXDvAYJxsqqxDkneyMnLeruvxeW",
  "key25": "h6N8CkTYyf3PTeQN1SU1cE8QCGLzco3qd65A7My3XSPUkAEfWnzJ9RAUJXR3G7wJFnPZpQkLKNkc4o9tRbwcgzp",
  "key26": "4tm8VvSuFsDLzxP7HBBYNQi4aYwTY3TvoiVsFxQFp7kQWFgygi2xGy1u4Rw2rsW8WwHTyqCPW45qdpSrqgJwRU4X",
  "key27": "u3JdUu3882Y298scSzr1CTz6zHkrqzrpj7Cj4RpvivNKddab7NSXvkP9mcCacQaRdS2M4JN6oCnH5SiNrBUdnTq",
  "key28": "4EDkB1A7DUzvaLtWNbXTuoa468AnZ3XmEVGvRU9PAbTgj7yCqHByJgtB1nFCQ413A6vwT7FiSfu3MXfL9r45jQHj",
  "key29": "DfCGVfhPUjZ1814BUGuSkzUQsEGxtL8214L6sjwv27Ht9chjNPisGk1koQKEkivsYxjoS2vCnPWgggyPfpKuftX",
  "key30": "5aMgKr9CZTm95QGRf1QJzMbcXYinUqAMLzwFtt5E8fJGyiwq7FQTBbjve4wN48Fa2QyYbc2EMDejnuSygrTtj5o6",
  "key31": "5ifq3k7zxUkhH9iteKmoxsA4be4jZAvn2Zz1hXgRDovUQAV7Xtjxj8u1GyZ4qV26rZtB1L7LW4dn9KZMvpC2ZVJ5",
  "key32": "4raAeo7AE8Cy15QmvL4ebCadyWmZadGLcYZjZ87JHuoPyth3obioGEoVPJpJqms6pjrtajNsbYxHXhqYCfvYhPLz",
  "key33": "VTE1xv2x3yA9VDNXA4QHwprpR2TbBM7bV7xtmA7Gu7pQfHAze6xhxF8agpfuwLUfgWypLYfn1LkT3EMkFPTRmxQ",
  "key34": "53dBxjzZfa9tbNHhLskvy4bkU7sRH3hmwYXGkFFT1ez2UypXWAa8M9JWmkUaogE6QweLnt2foEhj7EqPb77a7ikp",
  "key35": "L85beZSfenKaC8Wg9euArE9N7fANcGSzwRBY7zCbTT1oehREUg8mGpLdxo11TkrzVP9huWt9QsMshqvVCCU3EpU",
  "key36": "4xpj1nm6z6BaVF3QQV5Y2EKSSYXsaDtJKtvJeiwYXsgib38JtvYYvU1WUGfkW5NKu8McBMD3CNh7obak9NUEyDrT",
  "key37": "457BWv1n3t6dsz1PyGrAah5Jap6dZ3Djn95HxBcf7nvNH7ffKvKbFcdBnH25CgViK9CS7T5AQiUQzNWyuVsHcpyW",
  "key38": "3HkGBR987a5VDRcDCk19eMUqatXHAfYmgjKKXVzLSGKP4Q4mZbxDtz8q91GdMXHuSnaNfuEeGL8fr8X97ecSPQan",
  "key39": "2Khuw5FXSPFgwNqWztTEn5JbaqQerkrwUWRviUK5qw8i5thjQF3j3zoBDoRnU3YV96QcNpHfj9qG8BdyDsBhWd2e",
  "key40": "D7Uh138S3NRPz7pwgKBuzQUdT3t26mRHUwwUxL8jMTQaaJLH7cMeucW1tyaCXK96Pep36tBT32YVrezbJjYr5yK",
  "key41": "F3MfZ5s5fnYfEPdq9RrKkC8aSbWkPLTXBUo27JegEd9Ge58CS5NPATq6KWM6V22gmD1WEsYQmLjjJvpRJKgdqN1",
  "key42": "5RKB9G1cnTemgjbiW5AKZL7JEiYmtkxEHWmQmkw9QYf9igp51cvNi1PJ8W9v3Z7hR3DJDjXdjr7GDNpW2qgpgTab",
  "key43": "25Ca8pzkzGBrnPyTvUDrBTZPjBjBEcQEMioeP8JRXVPKQtJFifwfuwGhzVNEaFxFGW6MvKGsLjBT6NTp5sQMwFAy"
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
