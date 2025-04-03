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
    "44rU1B66waVKk5c1prFrYs5wCkrUkgE8ctq1jE7bkgVWmcnpFwVimCXkZs56pAbMQDs4HEK8n9GJzAmvxo43gJ6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pK8sBtrtuzNfTT45Nco7fnqZnk1WQAk6pvJT4Zhe3f3a3SimP6JeFTjsX5Fd7E1XHj3sgabYKjM4vefSB9EU6Rk",
  "key1": "YkxV66HroNiZJjQyEXp3APi7xsHaaFPoYMHoYa3p3VqugCiLK2yrDr4sx87H8tXAoyfhDL9b4L2Ramh2JwBT4bv",
  "key2": "vM7YKwLrcge3EkBk8kDs8Y18KpHR8MYsmxPoRBxX1Lb9KWc9YJ3o4HAi4HbGuE6r2fshKYxeLy7PcxqaB1bYrgP",
  "key3": "3nG9EfMK5hXfehZh19C2wHzsWkkuvAVA9GaYVktPpcXsQLkgXBFTEebZK7cwKLSHAJJ2M5nL4SqSBYXSU1ERiZv5",
  "key4": "4F8kvdKwxJanpSnKu4S1r6JydjiszwsW23p1kaCCvbwZmqeoLX1A2VWGU441jsT6KawhhPy9KcfyN6xS26cb2A34",
  "key5": "2er3Nn9SGA7sKF2s2QBHFNopfn7c8TDXCRmiEUEFSi5YhDsr8a1gPL42W3NVGavGnjjjrcN8Wr5S7SdYMrWV73MS",
  "key6": "5ZNbZNfvwykdsc5Q7gnxKAaSDUDjcAnrckg8yzRovC6YgfFhQN1KBmoyxnFHeGntxVSjqKRBV5GF3HxSvF85pkRt",
  "key7": "65ycmvASkAgfPwYYDYDeMDGc5c31ccMhFmKrbuXWozwMEqoR6yJhCvY1TVdhciwiFmc88wYytt8k3bPAcEPmvDq4",
  "key8": "tEyk53yTCDtPxsJVDa7oxo2NXWobsnYb8TPxHt8CZi1Dzvqe2mgwvXi3T2LMtsGEuoe3og8pETXeeuBBni96eco",
  "key9": "5z9w8W7B9mYopAhmy3dYv4RDwVYhE3X8jqBJGEwxJg89EycvkJtA9Z5NxmaohJU95CaHiaJ43wd2Djzwmr5T9MRN",
  "key10": "4FpdNZnWZ3QSk5kHcDUpmuNGC5pX5M4URFmjtEGindwvXZsxHmQnwLhhKVieHXN6EkK4ciXH1mmmgoZSxGFns1nx",
  "key11": "4r7yQsqJLaXDZPzFRacnenyzVvUXrsQCs1PKP4v399wy3nEdYTg7JisjSK7FUoA5dQ5wFGgNVwKZrVwygMqoCfgE",
  "key12": "373vf3VGvzvrdxj9EuGNuhYW3B6mWbdKbXhYV2hEr9XmiGVB3rCByzh6S87cTuU45G3BSGWqgcj5JtFaJLgfhMxZ",
  "key13": "4W82HRanjYJEJKsut2WArgDcDBneyAsD6VYsupF1VMYEk3kX69VdTYrixwAuWvMaikFniSLYYLyL13hk1N8tBwR5",
  "key14": "5s8RtyJPnWheoY5dJ8daKjG469DvfZ4vxJ9zU7uQD4XeyDJb8fdD5LwutwpPqz6VCAn8ik1hpuaXp88YduQAxPVW",
  "key15": "zX85dnNgEq8cXPvbY8wjtFXbzp9ye9mt9WymYK2NMmCDcf9RnSz9Dzaw5mj9tfLGqxiDMBPmfwiBU3kBygnFkYY",
  "key16": "pq9rMoHSyqLRbwVUiUUNaYbZYbhW7GzrfDV38Zq1TGsV3r4voLnNBLeSbiskh5zN7FngL1FKTHp8MNsH9ALEw6r",
  "key17": "5H4PcYUYCZhCZJmfzANxxkcd4nP1fbcqf2Kcby5NxuHqUtMReRHBwPACWbp291qnQiB1YfnyEWVRnjKzX1B9mBFE",
  "key18": "3cRUTMijsyNNHKLgMHVKB65iYBn6x9vPYDEodgwqupSQASLgnDKcyZYqjX4jr4rBsg4VXinP445JPyR2Z1Ra6VuM",
  "key19": "2RVD4nfZiYBDwigjzbN7anCYLS32t795yeE4uVGiRaLdJPMfuqWLcbYyRh1TXDcA1hS7DaqBJg3v9W5SsSnkrBcQ",
  "key20": "3ktC9jKuxcJx217DbN7DonPSMAQniRJK33fK9ccJNJoE2bwjsdyQ3Mb5UFmRLMskKdSHDCQHZbPS7p9mNmYAq7z",
  "key21": "3yZV5ezryzYaDaBQ8waGXfQNw6htf9K1cx4DRq8LmZwUxVqfZzUV8WeipfFK8VUBxTKX9TWN9FHozQHpsR9QVntH",
  "key22": "4dLmwUi9B6X2STJXatgrbWUsRhotQXp98Lij8Q8va8mHGVgA78s4Tb5ndzu76XwPNFXvGmgM17KuSstDEfSqKBkv",
  "key23": "Pr6KkJ4fn3H2MhY7fkMEc65kGbvd4mf2mner6e969H5qm8WoQQ6sH8JZ5pYqxJM8Y1BMz3LW9aFgrS6HCcn85b3",
  "key24": "47dRJVrMFGb8ipYGZ9rJSVEnYRGQV5VR1Dkb3D4X7v8pGQr3Nj5mt7CAFXE642XBz1DQ73cwRPU6vHB5wU4KNztY",
  "key25": "U7U4wESjKHzG9TbNZseMqDyNadmC43aXu2m7ZUu2y2No9cFShGySCtfXSfKo7hqxxkn411Wdq4hjQpPQ8YU6qdQ",
  "key26": "3ZRui1FLQXrGoYE7dp1fXhVNrr3xAJSaJfAS19pXCA1rXBgpktn6WJfYxbLkBb14rVjcs3gzamXyb5TjhJed7Fig",
  "key27": "65mXZKHaaqvAodv6cvcnjHZ94a6DixaL78htUnUb7tRTyjVVYkDFsgCd52cPva1YSco6C5ukpc39R4hLFfEZJF4E",
  "key28": "5t36tTshNWPybjSkJWdtGJSEKVsC39jsSGJJiMwpNsnQJkQwEczpN2o5smiBJq7oqpVeViDVbTtbhvQWPzW5uHc6",
  "key29": "n8qcuFRnTfpDz3ywAA4PftizKpP9Zh7gJCu6mccyH5jgHCazRPULncUb639CgDE6v2M8aDtdGyc6XfbumBzmiAw",
  "key30": "Vt1PQKuSvhXLSfkYpe42e7tb1Jg554QRZAYdu4RV1eVPcnxM6hR4jtYovzEFkCD5DkE7HZUcHy4ZWwWPjXyAr4Z",
  "key31": "27bryYbwWRSYmjfcR2dQ4H9uqrYQT3QgP3WMsgiUTWisUSbiaiq47tRc9tAG7Cp5rGkMuEdSeJswXjUbGej8BSz4",
  "key32": "2z6qRrsvtU5U69RD4Wme9YWn1kfas1xeuAMmCvmBpThwPEw4nUaX5N1Xv7dpBTKNuqBPtiudQt14UfxPQfoiJzBd",
  "key33": "24vU4RW4q11gVxXhHsPaSTfVRPy68a9tqaugdcAYe12zRuMGQ6rj1zhYfPX7cWMs4kkeUYtGw8UQ8hZoE13YSVz1",
  "key34": "65QzusN1VeKvujrsvy8L6ykiScesLNwNy2veGdBkBPWuZCcCP3GJnZzscqx2xr8yvsMCTdegMpTpiBmJhTZmiJH7",
  "key35": "4KtrWrB1mzmH7ZUFSTfizPPmm9ajTHW9heDunpDLae94VdTjhTHMVTwMngJiq2JXn4RxCkh2vTrW2xPrgmKM4xr",
  "key36": "4weHvW61e1mQMV8nQN4i6JQoJceuwBzmdxftXnvstaKigysmSk5EnTUWMsotLdqsvc9gXMJ1xJLwb9WchuaNNekS",
  "key37": "1Nwpy7CwVA8hMhSFmBt3ggrEnsYsHmLisKYNW8bfQG7r77qGP2FreJRqzxYTAXMusP98Gu8bQRTnu9jfb1N2DTG",
  "key38": "4F1LVbNsSkjHi9Z1jJo3WA2s6z6kDWMdGGz5m3eJw4pJCvhDRNR5KUxMBzMcbDA2RyZ35PxHJZNhLe5mjACZ84na",
  "key39": "5s42v2vipmv9jPWpbJyZFGsY2zcX1aPMGM3RZrYpgsQUFLU8oGLNXopHFxevbnVdPmehEBs4QfkjU2EzFCZQmmja",
  "key40": "4woWzXFRL6QpQ7spDxyHLbGFVxt9i3NrGxNPMw5XS2DpH97kvZMccfpJ1zTCmr9J7QvE4sfTm71V9SWwMwsJgJQt",
  "key41": "5mXyppyr2LPGfyzL14xwfjt7oZaC4CRv9iYnhzDr2a23PGDJJuzuWZ3x683nsX1t4cYZX9fQKaCsPJfXYbLKrAQn",
  "key42": "28qA8BLYYG1qq61mpSj1xWARsQCPnuGYWBi7J2ALpQSij49dmi8mdjta44Xqv5B3Q17Db1jWd8eeWc3jnLw9eEaT",
  "key43": "5Zh7pSUZiXt4B5eNF3FYR9Avxp5r53jak4U3teipsRozaQXsPrYYJBHDSmJt9vGVUc7kX5TojcfeedMYsx81pqD2",
  "key44": "4ncMZNDTvv5E9hKweJtCiZKzVohEPKWwVpcqdGWaUQZCZNkuncdFAK7ERN5nrLpcT32mJ8r3ioCrkXdgV5uKbLka",
  "key45": "bBbYcVGiVLnNULHXGg2e3rmZsGTxaHrExi7hwYisGTsYyUkv9qWVWvzXnHvUhUsZsF9kLxxFzDgWg4KBhrmvdJQ",
  "key46": "4V74bxKZwJFJBrzkBMuZt6fvCm6uXUYM65ud6iE23xEAnU8JEkyEsWQMk4DGCh1mPFRZUcPz8WyNDWBtio9vUk7q",
  "key47": "RNboGyGRaW6EV13Hv6p9bmDsePgSeyR9anoo1cDrqZfgfjKpV1j25dVJogGj95jwaSQKML2XSFQfU1fZS5qwpTn",
  "key48": "2fR833MuCCnM4diU1UZKsZCdU3gPuwg4idGD2sq4uRuhwbjkW63iY9S5Z6HUytn8XeTz4sUbihEdWMuKUqN8Xx42",
  "key49": "2UFxuSBg5zqs2pGFrLoVHJpUhZPmNzQPVQ9sURD59jcFRCVa1MgWq9iDksk5232Pk15p871LPuAYJqUoTcQJ6pyL"
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
