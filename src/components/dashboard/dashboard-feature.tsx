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
    "5fFXn8XDto6EotHQ8EY3hrrhasJRpsmZaBS4dSthQjvv73Jv6sAyPvg2BRC8gvt8n63yyfnbpUP5fpo6496gdHzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQnH5AjZt4WdnsXnAq8ypgydm5PamnmwEcGwBvKPWHj6hEryrhsXMUMg7MsjEruyotRiQC5JTDcjwKHaoZBX5BR",
  "key1": "4q6kabgUUs4MnBC9jvji7ynpCypQii519GZ3u3D8c9UezxEQsciSnLX7AKqhFft1hFdoPy4uPRPLKRgmeztTyA8L",
  "key2": "4jg4eUpgoQKKZWSLd51QPi25xPPeTTFq9rREDL9UbtuoCZnSLxCuNdu2h5DMHUxTjNHAoqdHzLfqgoiLxkAXGrRF",
  "key3": "4Cua6dqozR4jXQ6yMf5b6o9WJJbADtH8i2QYqn9Z53wPPyVvkd1VafVwAbUif91oA5gMNo94Ah1ZSfxV8zr2kzpe",
  "key4": "2wh5YNS6H83GJhtYAVWYTREJPKMEPgyRVPH2A6UGvLHs9vEBWVEnmYX6sfKyxXKmZEvk9aiRX3D5Vmf691Lj9iXz",
  "key5": "wiFEJi6MTCwCzEMNkXoSLeHojr9C94HavjGH5tS57Adon91CEF4UZufsgoQf3medpmhWuw2CsSjqH41tjpBZSj6",
  "key6": "35LMcR7tArn8eBu5YaW7DyKbGbG9mymf98adXx7SqcS8KZpnwSVnGAsTtqeAwESHYxWaW6aPbTYh4BB63bMUQHAf",
  "key7": "2eenPLF7J8w9Xbcy1JhRzDotAUwqzFjxQ1bvnoCJS859TfGB7fV8fw4JbJG4rURkfdjkEjpkUkKcd26DYKYzLP4R",
  "key8": "5m5cYjuRPyqkjp6Mxye2YH8Pc8f2qQ2cujv7nJDB1W73SgF5yWEdrxwjhdeLQayc6cYa68ty2iQFN2rWRKWNqCZT",
  "key9": "2MuzHZySP2wJ7usTi8Yma9oTtkf5DCobntEwup3D45RmQvzFsRWTxGpegVPsmetFkMEsSCbn6WopPbP1khYMCLBC",
  "key10": "4kx3oiUbvQt6bwH72uxtrvMCWFVEdUm4uqW8uTafxgdAesk3jWfsud7roabQf24UsWEAd7yC1dUm8feBWpgGgvSN",
  "key11": "4QcPqFqvm3B4vUPb1QhHqPBsBfw3daXRrdWJ6VqDfqtiipUD8pDaKc3V98xyKzgp7hNGUcUHQfmkznuyQc8xwdUs",
  "key12": "2oFjJR48CK1eVZJtx9MBrmZ2UNeRMvjrUCzWHsRkMadLFQWWcisJNpR9Y5FWDLPRd5ApCocXcoSmbm14CicmNBbs",
  "key13": "2RS7UZCaLoYsUKaR9Z1BXSCH9i1ETtKCui5aaSfo3Wd31VuR6XT8qz5wUhMTP3EimpQgWtXf95MjNToTfqY9jQZU",
  "key14": "44o1Za4wg5jXHtVd8XvE39SMPc6Jxx6u342Ujra3EqBiUfgDLbi2rUZ2R5m4jXw4JTZzC18BCUAa77fAdXrHPZkz",
  "key15": "2aaxPXzYtUY1mjkHWk7USdortK8rPpG6VpgNHTkY8kh1QtH16dYfXZDjj3Uerp4FTUrF6zmKR9qoWpF4S1Wa5mwv",
  "key16": "5g7RPaKEbES47zAyqLhYDwmmtR3tuSURe5A2a1q9TZTrATH9pivDw5yx5SipYNwaeAqKBE4babF4amaDMbNpQW8X",
  "key17": "2hjbxSzSdosq7pC5cK9xifW7v1NJK2pRQiuBnQ21nSCztDVWK147qGX2KgGicT5KhzQAPL8i4A416aAVu925iPZd",
  "key18": "MxLAnRM4YkmXdkMhjx8FSyba9fCsXexBrEc5ssg5wJFRERpqmhqWuRwMuKHqm1YBa1NJTUs5zSMh9364BbMx5Cz",
  "key19": "5j9ctVLqWPoLuERTZJh5CfYmX2beQptTa4LYhiMxhNVTJMtZR83hcNQbNQrr63sVLtuWZYx9Nk6JC6XFBQJEo2UF",
  "key20": "5eUaaaWerWWNtq6BM3ZdCNWNzfdEkACPDtfDHs5MfXwpq6ug7wP1cvbyaFRMzYwdLUc1MKrkkFSH74DUCPWRaLg2",
  "key21": "ftChq9UJPh3kEo5qYpAaLFAoFf2ZMSL2j4nftTz3pmrn4Vf2b3Z4WbZ6PoN6UZZjqFhWHoawtBtBSC4w8vfr1W8",
  "key22": "41NGeq3MmGqczFCvTiwUsiBvoJdEgKqdiuXzbCXpwGpJp4oHZkptRaGpZjLRMYmyEJu1EciofJmw2PFKAKJaW8Cn",
  "key23": "3VuJNLoPhD1hE8NV3gXH9zHf4iiXRqrphahvoPW8u1zEYYCZexYzfidecnAgiYv26K5q6o1EoZoLxkbXWNEt61xD",
  "key24": "4GKqrr3QEnKzmdmcdK1kAAPhSBH4kn2om1EwsWNupd5XwCk3dqaoYFEoqkJLFVGWV2yKvLbT8p91cyV3sTD6rLM6",
  "key25": "3QPVniradmcMcAkwFjTqe2gT1vQCxZ8L7g6GAj9PiPm6yzi8Q5XjUrPuTA7YHBqCbr9FaDbMFrHaqGkUbGiD2FQA",
  "key26": "4qyFKu6AxcGpLjy92wxt2nAwCMEmDnV5Gagao7ccw431EHxKExdb5jWpwAdSXLRuJmTfrAvxEMDVxJtrrXjVYTuQ",
  "key27": "2YjgAJLUQVmJHjWSxzSZxbmtGPU5ZFr58jq1YEPnGJovRH2vNy4xdMRbs14wtQ6rC4iQYp7Y3GDcSDPvAwVyNbsp",
  "key28": "THXmdqWakF5wwheYkB52QNtnAgEcued2TTAmmbmWaSepzLaczVGXFiaJtNEzXtUXxnjYN7Bzgetn6ugpuRZVWtA",
  "key29": "kzUuyqaQzuvpXypNm2tfZaLs7uiqkfMFiM2q7M5YuAqR86gUUYzonGnZUESrmieGwQgmiDHwcHsHAWUSGqsh5wp",
  "key30": "5CJWz1sQBzufdNoc2gGqYi7PNp2W8SaxD8A5FuUMQEGiyCeh69cBdPi86bTpCerrgw3ta7wXE2Kjx3CxRU5YxF88",
  "key31": "66ietGnmxCZWhECseaBwiDuCwceCVxayy4QdVkMpguEyikgsh3Rp2ytQB8ecds1akLJQMZk1PLFG8bpvn7XD4PoW",
  "key32": "256r25pbSqvjYn1ec9nroESnbkmp2nAWvPLDVmNR2SkCPhbP6PsUt5JdVCXj9DnDdBcejh5raUumh49oqugr5ipU",
  "key33": "2q7j8d1XquVWsyqH2HzRpdv3gJYQDL9xoNGSoqbBix5Lmbv7ZB6hYW3qw37J2uezTcvEasaRL9TGD4eMcQuG7p8C",
  "key34": "3YPGaCPcdQ4zUAiTpNnTisn22jCGpwzyz5YgifQvB816FPWxhxi2nNdreNFM1S5uXNPoUrUWENXjtA1gaaQNkQ32",
  "key35": "34djCYFYjDhFckV1ux2x8Vnat1ubUWDr3xibSuVVCWgPTTwUVavg6K2LpitswkngUZxYjkMG55gYtAtNQwiduG8S",
  "key36": "2z3Sos17wWXXGGHao2B7SWhbVg4Kv2sVX3euBeCAy7sFctGx1qjRq8S9KMGBmgT78527iLs9JzQ258XkNKBuN3ab",
  "key37": "2qGGZpuC1xL4ym86dm1Ue3h64H8aZGSiRErPhVvXgfreEvYgDGV1gwsJbAsU5LNFgcAFzvVa3jyz1C2ALHWRD7Cu",
  "key38": "3fUCPTfLkivL4D53vnXDb3zWDjpG2PBa2gBRB4Ffq1HBuADGmyT8jmtY1m29EDhfntbLLmoMCqktT7EAqg7UM7Fc",
  "key39": "2TtFvfhYRDK8RzH1eCg2zoCBAFjmRzmcLjDakcJGsGjpwwjNUoCyjfmhuRTjQ94UEC1dbgQMR1DwyxbBKkLsRWTq",
  "key40": "2gDEL5JbpAGa1ERZp1PNJNhADQ7jDa3Pt57AcHs6xXeXw1nowjBNG2GErPCR7hVzLZMcfpLo8Znphfa596F5vwE1",
  "key41": "5AJJKiLENwPdGQLRq5t9jPyqaZkQgxjmizRRckBstShzvFq1dZwbL3quVZCFhWqTW1Dg2uK7Jj1N1SjjfxJ8LG5B",
  "key42": "Ver152eSjxBReAwoeHKt3h8Nf1PPNJLnknBmvnz1CdZmpz9tPtHXB366dDGUzF4KKJSS3vcX29pyCLMPhxTMF5m",
  "key43": "49TQ9a9kRKv8jNu6XDC3UzD7U92smKEmVEYvB9wJv6yShLaem6hSkbeqXmZgAiTAkgjVWCx3aT5S2Xw1VQM4AgnL",
  "key44": "4LV8WH1sTjDKXJ2M8t8NehPpHi4Rkz6VogihxwUSrxVR6W6aFjhbQmde6Ki6rzQEW3oaMs1rzTiz8PUt8xG6gAXF",
  "key45": "3Kwx3rAdenjbwesxDuPt4Qqjpij1LBgWSy8bcdwhXQkvVmrg1v2UMBNueWGntKYSLiDo6JR1iwtiGAokXkYFLoLc",
  "key46": "41aMgJGG4HckappfshsqERzcZpCrvRZgEbrSYqM3R89Kq2vDdHAZTra8g9ninj1Ev3f41dfCc2QyRpHLC6EvBh7Y",
  "key47": "5wR6fVcn7F6XsDoTU8kVDTdCAF7ULP5ck2QvivozZx8jSrcCHv6jN9FyqgX9B9nbbVzuYoqDGNv5MSZSa6hZ7WR3",
  "key48": "2suZvpM4Xcg6AD5Qj9L9iUaZCF3tefZZxqLJpndaFLxkyNEeDobP3PMtRnSLUdAV5z6uVppVJHFQeq7RR1Mi7e56",
  "key49": "4hxHY7PwU4HYHTm15MB4SzCuVjqHcJRJ5QJ7rwxvfQVh96VpyRmH5fRsdsyvQjsqFNbhpz2Yn6Q1fJqUj1FPpzDp"
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
