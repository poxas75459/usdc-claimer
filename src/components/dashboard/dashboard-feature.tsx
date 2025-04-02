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
    "5XrJSTeFokPVLDybP6vuRQZNBURGeU3byijNNhghNfFN5wtTfphexngFGmZP2FAy2rT2RnewEyuzbgLY8982qeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "km7ZDkZdL3dv8YSGaVnGrtbYYJN3c4GNy5572kdbtKwax8VekfbVmickBCwfUfMZAnqFA1mLdDvZ3YwQtUmzNr9",
  "key1": "3HraUAeQb5eb84PD1MYgSE2doTnT1U3UD9yPbyTwNw2xoorjxW5NRt7astJuy4AMa5DtLL6gRafA444Bg3dbKjnB",
  "key2": "64FtJnw9SXTPee8WQGqiDg3d93u4sD6sAySypBnSZ8UPbSbSZvKgCUWGjK286w5EyhnkfLLFCULdGvmfK69Eqqih",
  "key3": "22MBKiRNLPzf3brvWDqEEX8X3rrxoqLFkgWSiki41iuce6WeK2BTUx7gKGpCAJ5YGRYAUuY1vagMqADHTSztfq8e",
  "key4": "49UPzE9vddGbC3cnzdM13uKggqBCV8EupPkrYTVu8Dpkfow7v7oUbP22iCwjWbjDUb9RJNrfBjS1YGWf4c8GtjpF",
  "key5": "JsUQWx4tMcEDDh9SRbFroQkdai3DdLTRdGKJAQW9yNQA2d4hJ3wci1hNMc5LQLhRo4anw36AbPmbKXDu9c2wdSW",
  "key6": "2jasXS1RDFEddf9HoGHswTcRcwtcRrfnqLwQMn5YDCRu7GiB3rZqPGhD4nBGCyCUFw3UTmWzXVZdnXdpjqHuWyXb",
  "key7": "27m4DERsrwSpzUn545rujpMajsJu3HAAT9zgBpfZmqgV6dEtYmYs99SqtMrhuK8qKRys4hjHQ6gEymQ1g17nb85V",
  "key8": "58rxAjgiZMf2igbzVPdFMezG5nsp7Fau47Gk1H3DReWD76mVdZ88UzgSybvWkNNStdEgaMmmPuQGdy2qmuNbLZCb",
  "key9": "3nuLCKp2TZdyeGTuyNES8eJmdTt64XfLRynCzsP5jxqfpCx2289RSTQoDkc62WoTmEqup1Q17wXF9XuMEVWKGn9Z",
  "key10": "omT3HUeKmwzdEuH5dK9AnypkNdwWKLnP2GcoS4hCKpTYUmmdanxGvk57oqKzxafUn4MUEnZWDvQPpmNDDEnG1rx",
  "key11": "5T3QBr65aHynJpzAXgEQVrZx2k1YSB8h9XSZXDG9xGo8tZ2V1yfcDmGM4CJG5CiWzTtgzwdC1PTGY7zq8uVGExS",
  "key12": "9yN9LkgDdWRTkQnQvxYhv2pkWsdnFqFLbh7CKMug8SaECxiFedjycUnu6QWdxQeXp21x995RkS8rk8nuEtHzgUa",
  "key13": "2PX8frCro1SprNTWZE3wB8tdU1cun3hWiuLsLh5YE5LwEzyv2aZ47hz4E3o8tEYLrWyDSREjnGfUde4DESaqTD1y",
  "key14": "5WE5VZTYToHwvnvLCqDBxSbfENgXMQAk8yHB8fExYoWm9nL4DCtDpTjWFZ6H7jccGV5cMcbX3ejVd1mdQJ9FpxzR",
  "key15": "5HzfnEeZJ3mmuXzfvYCAzk7qddnCqX8Q75RCZLhJLVa3Vhfxj9iiBqi5gxqJgq4m93PeeNsJvoUGA42YHLg4BKy6",
  "key16": "2uDqvyV7V68C8TFx8rtms633X8nswdAzVJM67qEq2qritbH9CJmN965tmdnvjg9VC5RhHkArBjxAjr4npj38HZyb",
  "key17": "QsQ93LHKSPZrV26Kf8J9SSVfVhCXKFx4yMxPcXqMn5hszGyJyY6ZfteM9ALBVaSgCHjuHLNfazxwg7xQgAvDpu2",
  "key18": "2ALJbiXgzfbncKdzzfWHVhzVWZL8tLSsiXPYKVidgQxy7Vbfdx8XT7P1Tfkt4HNXVDEd5P2AWjEXJeRnwxcjAYn1",
  "key19": "3BeHxUbmdoKCHTFWBRmBT2r5gvwkbwKv3c7Fij6bk7KMSpUtEt4ZP9u5FmxEoDtRHP7j6aKGvhqKkrg8icC1Wzn8",
  "key20": "5de2EqZC3K4BaJvS8N4peJkSWdcEYJ5bxBM4viwzLqGD6KNwhvYUbPoQXbJqHnMobKrkegW3aUVqr17kuuyxPGx2",
  "key21": "9ofKezYmFxsotGRBWgVeMMNFR9hnx9obFZMXPuGZ77MU2fK2dP2yzKtfcb69LCsAzghHFdG6FCzQu9eFCY9fs82",
  "key22": "XBD6pgk64kGEfuaqogYH2E3vosYmSZnutNKM3sWoSMVcTJiLqE8JEoGJ4ULUSc4DerLe1Eb37t8edeAfYjjeYpU",
  "key23": "G1Fj19TE8cnti2dVtSoBottqTQhVfaE5daXvfHcXrCQQp5prJAC3Wxe6LJocFihrXkAMVNpBxHeXzFCN3vSdK4P",
  "key24": "2qQLzW7TvMpEsh4r2HJ31EfkDLRhuiD29jQZit5hz4ucnJsSfFwXyFxu2DbjwvNGpHyUQs3zBgTJ5eAR3S5vWqBn",
  "key25": "4oEdib2WG5pnpLujGodosY35Px44xdBpqpayjF56E8VTbLjd2p17TkoTSATJ7nzGNgkfASggEYijaGZp5ZWbACka",
  "key26": "5VZnrZpG42L85WjvLKFLtd3FQvzxc5hobhGRkHHTjFAsyHaZxSVux3qzUmehDz2vpJ5XhpBCMVZEWHFtX66rPxTA",
  "key27": "eu9Q3KQfmweuLS1UaWRktUd3d265E7Do9GqvunZ6jguEMKSPZEnQDu6Qjm6MMtDyd8qveAcngybGvTqnVUdBCpZ",
  "key28": "b817Z9vUWxpAvKEuqoxTKpL73wJpKcXpYJLouVnQDdf1jwuxUiPiEma1RCWSCL74k3W5WL9s7b4eiyFPohnbLx9",
  "key29": "yWWLQL5jVraSLcAHN2RNgPPFo8ssFfNcjBKeTxKXMNWUcFmRKPvGqqeNXTQAAXkNJZYi9Yu9ogno69KCyCQjyAF",
  "key30": "FjoyLYk29yjsdqcvrQTwQrCaMMcGK47m6xftQQN7dSDGodWqjdKZ8oxrAHYX4n5qh5KYsgySd4fo384ZA3mbYac",
  "key31": "29rJ8eS5eVSBmXgrnLRJCP74Eg4geMWbj1Z3TpSnfT1EVwE9fJNqGjqxwmaD5bk4Pzh12of2ZdNv9Cac86QWyfBQ",
  "key32": "2fXNaVJwwmxfDMCXmqjbXt1c22T2YqmGXhG9kiq8xYjjQb8yiU7CiwhDzvF5GamgtHTSXvcDrfX9yM1DtNcPLH2m",
  "key33": "2BEjiJxdpREu1CMZR5fU6d6Wep9rrie5maPjpFHcALC934PXDc2W3Sq8NpvnaKm2B5i6Je7L3PJQacciy3gniiSo",
  "key34": "5vbwu4s15p8iEnuaNDWcos9kZUEwYAm3Kj9CCs47xE49huoYqcY7LxqSv8t3fohs1gA4KLCSy8kxr4C7muuVNscm",
  "key35": "2MDCcQoJrBwRRf39J7kexzWswdPURnCyhac4SpGyy64HzX5Q9UBhGq27bT4BTYekt1vp65DawaYhGtwMjwzCRgDo",
  "key36": "4owh3bU4H3eyKXGuvKHrenXgmTerDE3nUSdkj58ysWvZopksS8H3NjtNZHG8o48VGYey5eYC7CicC7hdJr4UsLT8",
  "key37": "2AaradZRrPL978uH6CwP8ChLCkMiX9r6ZevZXJHgbwEh7E4fnRo2NGs15BgPRX3E4AE4qeQhhQq11MYmVPuU8DMz",
  "key38": "5UeLvHhAAsetPvZDwby1pxiYfbWhK5xddFxBQPZz3vJ2UGxo5csSbjophao6ZQdSjPD5fRkhPqoE1SNhiyuoi2NW",
  "key39": "3MakBD3A2n89X7KuY1DHnEitMkiUeqcYRHYPXxyZs3nk9bKoooNjEw9BwPKFBYnxKUXvsNsoAgWMKFZqfmMjSxUt"
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
