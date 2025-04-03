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
    "2JmpV9W9bziVFu4EPJcXygGywCmBmXvsiRKeQ6NWf2oKLHfGehZDMKTTzZnMsMbuE6xvZ3SFxmMU1egxMdtxZT1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t9homxwX72CPLUwGWjdv95cMWBYBrn8r86HVbvFBfyvnd1Gq5tUTS2aFYtGzKqwhXA3Sd3qgyi1KppcRroKqfcG",
  "key1": "3EGsi5qctQEtkYcmMK58H9V56rJCcwvgspjK5FQqxvAdGkhHyxdQPWXv4M7CLW6DgTt7Ef3C6gCwLfNK1CX3iaLA",
  "key2": "3nyiiVtEESPgypy2kTAJqBmuVzzVwJ1H3SdpetSAJYcjaQQ2Pogn4HwjqZEdFZng1sYYEQJZd6cPKTZd3dKUhnY8",
  "key3": "5be18imrRZ9WTsgiGeTDRjLrR8BuBVAGrS4AzwcfQ3ndCXDA8qVzfoQqkt9rRg5GsmfDH49WVZrLEMorz2NzQW99",
  "key4": "42vnERrB7oZrj3oSXujpzNXnV48WLp6SUuexQ92nhFoqEVCSDXTQ6Kq2qmu6AHExNLcuVCkDfAut3yq2Pba8hePS",
  "key5": "25tQ6YNbpnQAbHArZHPamyhKFZpLsf7mZY8L6tFjJeirQerMbq5f1XBYrHpDb4kVHUDXCQ6W5qDorwovN6CPew6a",
  "key6": "26bwfMrQe4p4PPrUof1YXjVYmNFYzESxQTH456EL5s1sCwLQ4m4fdYa5HTYjco25z1KynG31JaQPpqHCSMxfvkGQ",
  "key7": "ZMc7s94nAECDwFXyWJU73b4WTjQAQUjeT1ywJezPBqHminpoVq2gmje1UjUi7Ch6fCL4PamjgQb34B16zLgsp2c",
  "key8": "5DqEHj3QxrWWLan5STyEtd3f8nF3pPnXcN5iKgqznNhyUThRutcuQqw2AYbon818serD4cYM6MR5eH5FcZnFcZyN",
  "key9": "2poAzMCeCvd8SUBgfPgnqiE4UHDHX9RgsLzmisBdVEsJH5uAqjG23grqpbn2B1nXoJ5gYXs9AcxzHmvcaZe4cRAc",
  "key10": "R53vZ1jYiD8eBwh4t3DdBuMuKfSSP7wuFPA52EGVmeKs5VrLW2Dt3NKuWduT2XvSuwan8kAqKYQ4vuruUbWUF13",
  "key11": "4vjCt782xnChrqc1JvteeUiUxCZhvqtZffPwUQJXe97YJXqHSY9H9z6VYizvXh5Q4na82dm4amwoP8SRYKSPXiHG",
  "key12": "3Nmatch5eQ8HH4ZKFP16yowSkHWDQ7PUY1QPx1JRuKhTAxa6SVftgpo28CcmFSTu3VXRbrNzwA2qSrNcqT19u5co",
  "key13": "qBTnR22oxWDDRbrqc2EVEvFWXb7zbxkJYPuRQWBzaZUFaPSiFRqm7UowoyPuZGsRNvGdEKe8d2GCW9GuvbbQ8ba",
  "key14": "XEjxSUomr6uCVgM96rNPKeHxvqqgoo6s2vcU9zzMtix5cUBSrvBiVKAzKPZxJcQFrYU6sdL9N9C1dUZ2RT56Ku2",
  "key15": "4XvKXBSMtyDheB1UGqEmi6uCkvGgahjazHfAexnyobjJsnRgJc3mKzwwp9iAeba8qf4EPwGgSoGF5uBeen8Mz9gz",
  "key16": "2gUy7oBJ3EtFm52ipKWLYW7em3bTsgLCPTcefd5bUv1DzHTUWxYUhFSVDteKH4bNHaLoN8x89osDVspSibHebcrt",
  "key17": "4UHugCSyk8U4XUZ3WaLriY8VvPmCspFTBMPhzRFYLwsh3EqHQ57t53Gbv748rkaddCo7LxuPnBjeN5r682GDJyLK",
  "key18": "3niFah7GeXcRo1MBnN39UD9NqizN51v7pKzuf1TNWa3gMMbk2wPhmaBnRw42a5LrKoVqLEchvtciZ2RXnQkkPwWL",
  "key19": "2yrMDndgjzceLU2gduZwTA1ys8vkuTVgR4TJWRw49Uvqn8wutFn8ndZnvRcntRSMNpELkBhxqcMiF4RkWb1CGzBR",
  "key20": "hsauy7SvLppjDiQtxFVrtAvo8KvQuFprD6qTBwZratpRGjDc9boKkKipE3NhTjk83QzhSVwrCkBjbL5oqYmdxFm",
  "key21": "3QTdbd44UPfCEYjWQkaJnFy1og9nGj8amZ6rPn4gt1XjV3ZTTBewL59Dq21rZH5Bge1FuSPJNY2Qj69qEFdXu5JZ",
  "key22": "2ffSPfFfMvhiyL4kidQLWqmY3UWqNf4ipCEhh6eWL51emB9e2hsbrsXfzqL6hZwo5w3gB2JAxNpCeRKAaaLuh53b",
  "key23": "2B6Lh1HQubxziBd5dsmbU2mcsSZJWvu131DZNVQdtKUy5heqjVsXMGNViGkMKK7YsjDDVQnFpGQ783vPLbPq6Nv6",
  "key24": "46Zq3AxiymQQ1Pd2eJV6xp82WyaV4fdk6NHcNBCWusNasATYEE1SHkAGSWKsp7p5Qi482cW91Qt439D4xew6Q8RJ",
  "key25": "S6DLoBDzT8gmiUtkE4Vvg3VXouxswvAfWvW412gumbegQoQH92U7EVdUaFyCQ2Hn76MS8f3HoDpx4CqewkBHQHM",
  "key26": "48QLxN1J7yp4JT5rNCKibuzJp3fedGtfFetcSACACRrhrBfAMm1NgWnAEzDLZ62737fQgFESQFEAQpDLm1M3vyAC",
  "key27": "3zxaTU3bEjseKSQ9Niv1nheLh3UUx3aFhiEgR1PDpp8CB2ZRnJ8x5FYqQqYw6WHops4VZua96EQoeC4QJefaUsq7",
  "key28": "4hpwkyx4etAQ4RJ3dyuiqfth9N5gijDHonSgoNopNHU2smh7WDvL5jDNxtPDXQBfCELf9y1QchzaTDMQVin4Gm5h",
  "key29": "2DDM8GCRpEcPd8YGK7HuYQced9NZTKuuetBohtMdP8fS4gmCDBCPdrPA3WV2sS3rsECUY3DzRgWKxYpudgENZGTu",
  "key30": "5Nz8hds1vHKMJ2NxCey2eFrNaEt6Y8cKKptMd3ima1dXLLjrWthPAZdvhna1HoWxZs7epXK7Vf7hfkq6AoFdnL99",
  "key31": "5TmFkVWLrDjf9U85ZhbqVViuYeNXdbdA5U3UVyuaxJtyiEbanrZif5cBmcSusZa8Jba1nvUU7nGntZWuwfPmU1So",
  "key32": "4pKp2dP6syyAGcjbnXUvK6niinPQkKJGRdRfXKCt6hg6tQRnkzzKgjHCd5xh5YaSeUXw2WubLYZXMwNHDPZLpw3p",
  "key33": "XVCKNANd5yrCvSN4oe1awrdsPzV8XEwZsedHzbo9SxzgFrC7bLMZ4qwZvhspiAZDkizGUP6CjJQG1DnXbrjj83G",
  "key34": "eHLFxJiXeb2UE2aZ5J6eAqK7v8vsFNs2psgwghrKdqwACnPZ3ZDTNMtu3i8ETSGE8a6GSaMNFXeaMqULCRa7je3",
  "key35": "5zWVhQh4rME36BrQUfDm8ymE8dqHzK19zTXhsBXstGpVRihAbxSqjnb2dwwiQBax75nER1uXquuGweMRQu6xZSX3",
  "key36": "3AxbbYyeJFVcotkFmhxCk5FZ1Yqv3wwWHVuWnjCfzCDTyHNQbrkwTJs7nFwxkp47bo8GnkRJdiNnZAgjqRMbUtAu",
  "key37": "46kjeqEc7biNbQAksu5ftbxmu49RT3dbwsEzLWS4CDw1oU8mRkQwUx4fzfVSKjUpnzBNFJRd9RtAWtnGSz2DjMwh",
  "key38": "2NVz7Kfp4H7rbZJN5CVWzfv5q3VUGuZ1RwvJnkGu52AG6XyHtYuGzxx7q25QSpn73W4jVGKR5Wx1qzNfGbMkXJSp"
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
