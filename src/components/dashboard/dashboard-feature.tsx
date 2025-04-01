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
    "44RuHQ8q4Km3BcNFxHZnbJmDiJLW1eFziDqBwqF1RuyEyhkg8j53tmX46nqkRsCZ9GkEAaLWD2KDKXoZn66zWLG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhQoF74JRmpAnQ2V6fcCpTgQiWZL9tM5y5VRWSK3QtTQZGjDYjSNMZ4Bxi3bFsVaGrHmf53rurQScZL9YdK2VvZ",
  "key1": "26jhQXffb5qMAvNaqz7v5Yv18stL9Jqgw2EH8LRwKhvQ4PGTRsTh5DLkmWWM7suFpdJeGPZURUYxRPrCU1NRwB3H",
  "key2": "2xqTRpdXFKaDZgyhA1xvu7GDhAwtLM9Tc5VDbHPXPL5pVsD2V6xxv4FdQzU4bwf2ePBrE4uht5F1u3dmeCPkLEeJ",
  "key3": "3ovZxkAFjeerf7fddzoDBdX7hevweCYPvVSWCXajEh7ToTZGm8frTemzT464rhwYQ3oqezesB8gyWEeyGwramZSU",
  "key4": "HQq9e4kijWPoLcv39gHfVNvS4ob7CFMt1UpFWnkgNxHKhj5vvVPbB2ad9X5GxTiLUfUmm7eDNNVfNQywuiQBifx",
  "key5": "5BHS6ZZYFoF1CFtfiE9qJiAqHKr81GzSDxLbrivrSSHcEGWPz9wHiCN669aVGKzx3MHW6zUecDXwBm3h6jeLEbbR",
  "key6": "3kD5bH1qJ6uME67kCYbGJcdj8siqqGiPCD3y7dvgSL5UnsL4KhzCY7DY5Aa3pxXas2U7HBsnKi6AobtYuy98BrwW",
  "key7": "Xghb14hYCCi527jpWvABoFmVzTVbZ7YothWnNQ5ZPpEwR9Ft7fKwYauaQUXkYe5dQu8CYqQHdtBP9chcHDEcFX2",
  "key8": "2Th8VD9MGZBRwPi8YXYQAiuqtHv1fNZir8E2xVoD9f3NaK3qAU2d4BLLt5N4SUcUrHumEnUiqnEB2M94g9wQoTWd",
  "key9": "3cJ4d8xo4v7fsU76j83UNKAghQk6EBRhZjzMVP14ZpXsjQtjvCfyTJzASUR68hPd78tPBVPbXZXh35t7MnpMaX58",
  "key10": "55vyfV6c43hEP7pKCsXVzG4pMjj2ogEESf5Q6KiNb4iRWR4ajmhtExgdTJ5ounaRxwH4j7SfsH9uBf9r6B9mn2nu",
  "key11": "36PXZn1vLKmwH7uXkYnsvfGa2p68UwKaM7KctmgqPCjmrezPCmbGWqvkVK2hHRZ42Dgn5mmLjPmB6gn8LtepmDFG",
  "key12": "4B43Tc9DSKt4j7T7FmL3GYvLAeNMXr7SWWY2YLcrw3vFsSncpqv7x7wqSD5vA4vCFrsLLZCZTLQQMN97rVWBUVLE",
  "key13": "5Muzru5tSMHhMqzgkpAXcNKzDcitFdcNWxj1m7tq4WkTUeL358stZBbt924iTHgkn2G2viLQZpyfTGSCrnooLV5u",
  "key14": "2UtkjFeiGWvHkRG6rGFvGSh69yxe8iL44CFTvySjk95ELcu2jCq6dhWppXh8RyF15db19uv2o4yHgEEgSyGHy6Mp",
  "key15": "ns4b9Rvvqf3stkGLmT8A9UPM4jb41424Sm7NPygqKinxVtQond7VEkJGZn8GKHuLdXAUh3rj3EozDfoH6fbGHSP",
  "key16": "5r23VLMENVqqbEfGaj84v3ry5au6vDRS4q1krdF2cS7ZZn3ghAfcY8QJqkeebnh632p5ZmRB8RPqnuNDm2WZy7gR",
  "key17": "2U1D1tsbDx8rHmK6kM52Dot3xyLPuVKMcwxPFa9DoADy2xazQTTaV7dLKJ1YrisU4rcnFqYgniZA3QjSdvzUcuZP",
  "key18": "2L6ftMVMmNha9YVEcyjfCipPP5S9PDqHKa1XuXiHDxAJ1nifMqMjue62Btq2bHa1R3AMZoKNxSkRFZt3613JF91m",
  "key19": "5bQy2w9GUrnVnEdtZaoraHo2aviHs9RRHiYywHr5hqFNNCFuc437XonQUzDRfgtFT5EsSmGCCfP7RhMqg8xny3Cr",
  "key20": "5KovUrVFnGKG6GFFDxH9FR4KcmPLgYNLCTLc49EESjsQ4wgFXkmCSThtK2M7FbDXXYraWSSaA61yEZWhSfj6bxCb",
  "key21": "5D9Djt7jJr2yWt5Cy1FCEfxbVEXrHuk1UUKVf8ZL2VjCJFP9MwdUUogyunfMYSh71uXonrDsKXtX2kouXy519vh8",
  "key22": "3SfocmFoukxvGvMi9cKDVDjksomSjrWPdfmEoHAToMt5gR8Bm5ejmPb5o1fYPnSM5fqXzrRirhSP8Syaiw4YJctD",
  "key23": "5MYrLrS5rMgcsihDYrpJJEMbPDUjKVXu2Z6p6rK43iKArfx7gMqirg3g2k4yZonmoQvzUdg3WMDDqThgF3hWubUa",
  "key24": "2ydQU5i3vffKKU5PL5k5ToRX13qrSFYJ6dsjR8D3vnjBbuZLqCPbJ3uJxWHBxFM3RcNp4dK2bKc66AgkSuT9hwxs",
  "key25": "xQomMhs4dJYEJfWy3LFncchMQxcqDLWALu1ADa4YfzwXq6EcXZHKNV4P6XLk33V8jyp1p3At3wdLqZtBiBswJxb",
  "key26": "4rT2ig8r2yzLi334NnFzqMZJ92pewcUUKcTNFSQ1rcvAubu9p9ZQcFEAEcv1MwFbY51578QRcE4Rnxh3rw48zPS4",
  "key27": "2Te7e3P9gP5KVGMqVZxC6P6KtswoifRfb8UU3ESeWZHec7AsFQBkJKN1444rWvhUKw7J8Pf1t1cXkMFSf3bgGGdy",
  "key28": "5YGZKeGArmcYoN77iQjMoPD82Wan8qPQPW58QXkC5cKoPdupEjME8aFyb1M18Sqq9TTiRU4LUjUWyT8rkrS6RE6s",
  "key29": "3XF5mJ1YZhWmQAjWHuomLSWzXEmvE4CH2gzFB9rChFnCgLrBsE9pLei1sb7D226mrYAiLqT2vv2xSQGxDA34LJJi",
  "key30": "4Zh6NGauFtkKzn4ufoz7QbVW84wTZrk5G7eKDsevqij1FnmL7kytAgVkjdAUcbLXTS1L3JQ53ZrzjG3z8FtJprV4",
  "key31": "5d6Xoduy959Z7wtDyoeZwU77LTvxW4gRZEQ252x7yuWUesmFDCABkaT9LFUd2hNrU4vkNFHCGc9rX8gBA1JZRj1H",
  "key32": "43wFE33s9E36WQcmMQBwgZwKzvTZwtVHRhmsSk9CJMUC2q2VktY3JEjQtvXtCLmxBtWF6myqLgV7QmnCBcZdx5r7",
  "key33": "7uL8HLrM31hxG6mK9ffrAnApG5R2XiqjGxP9zbUpegi22JuyM96SdzZAjiboB7czpLu94idvnDi7Y65RKWKQDik",
  "key34": "4QbWfRvvWbqY1KXXx1tpryA1GaZ2ezTkRK3HKHLiQULqpDAmuPByYd7eTiSqqdvd9FNDdm2TNho6CiDcq27oLHDp",
  "key35": "47JfrLPxdy2rW5RzFr3iQ3BbsBCRcgEnCP3A142P86XkF1Mzy584juncKKSt8vcjkqr7AtLgDCQem5ti1LJrWUJc",
  "key36": "4xNj29WaPm4qRVtuyBDjdMvR9JxRgfhAkWz5GhF3F1aYYntsFAG9kTbDCz85XF7MgqqTF1LR3yCJuRrHazS86uwZ",
  "key37": "46pj85n5HVjwVXfboNRVhZ7X2KrQGyvYNDMreUdYk3x4ofz9DQ9Jyr5W4VkFLz3mzwLDna7jmTFq7eak6ucg4mbr"
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
