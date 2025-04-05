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
    "2EzsAaQv984PpsJGrBF1HxE8PpzZK1nxsrFFQc3T5SpJtnwF9QKZM5uGGz7fRgWfZA9AV6LYDVVDM7KBR13YqnN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235HqD5MfQ1yTpSoBZvtASyUnFwHXWhHLhRMTmSKKQLAcXdqMXNYaJ8ZGckQ14mQpKyzw4vYKivZeekDR2LghLTM",
  "key1": "TrjZzXveJRzqnD7siWASTmjszYLMb5p45C6yXK5n8XGpuVQTEC31CbDzfDnxrZMuovmegmMLMni6yjQ7Mc7sfpQ",
  "key2": "5QSuQupPgkTuGNQPwtQBTstd8LEQs3F1JLW2ZKRubj8Ja1GsEyKgoYm1W7vUm3jPQvd1NgKiQ7LzK2etkRKnvEtG",
  "key3": "DqL9QpWnhQDDwkGnM3wAkLk8cevZfdJHDwUSwAc9ZtXMfrxaY5xnmB9iH3mg6pgjUJWw42T5dja4yZGtn5uCiVp",
  "key4": "4kjcZh7WcuRpP1fku5ouPXZNpP6qiNnwegqenLaojL3LZhgwY2Hj1yigXTmayZKzu6wFtfMTevMMQtWfY6jG2AMj",
  "key5": "3RNPp2Rqi7v5DUYHmZrjiANJDFNMep7jAjJJQ6nacNuxYRuCHF8EiW5GGGfD8EeVpKpiU1QaibAFmqYEn2vR9aez",
  "key6": "3x3G3f4QUedLtJtMfqvL2AT4R6NTjATJG6VTJ4PN2qGQWKr5pHxuS1R457VZQwAutDX9shEbqHf2rEpaL9HW1MuY",
  "key7": "31juCBhT3hArgXNFhKQg5Te1N68HmZPYkceTFodQmxuv6CNhYjWqQhA26PGvSXs2KEAYAQjr1xg2Tmwk7kdfLzJf",
  "key8": "4ecgBK6fpK9AxdZVRMumjnfd8RsYegTVpFS6vUFSzZ3FHeyeFecRh6N88gAi8uWvKGezjBWtkQ3MThzTSrzhkpUs",
  "key9": "58zy2rBkEh2asK4FpxpahA3X2YwU2VuPLePS9NAubBfwt45x9EXpBg4Fsta8N3F2BW2HQg1n1AX2uWrABd1BggK9",
  "key10": "C2uFTD7Yu6Rk3xSC8PhYhDUKhcEBNsSgGwYcrP25rtkHUGgRtKgqzYUwpXzoS1q7LL5fau9UnPb2J3pmBS3XS4Q",
  "key11": "2D56gzdYpqz3262EKVoGJKTMNmu4qY1kytmDKYVDzSdrdBeAbLa8uCqKTZkkJVLhakxQ9GU1mzbAai2rg5UhmSgV",
  "key12": "3iPUYhYj88NAPT4naLxD7MXnFMpPdiCaocZHMTa1oR6VAQxFbcSbTKo3oZTm9fPFT7Lfwj9xCQ5KTZYcHU4ECisL",
  "key13": "E5snYWZoBUyvRrsnSy5JpeEL1ub2fpSg2XR4RJXVyU4z7UsFv2CBjLJCPvYcLRggcryPZEx3T5hyn7BwcxVrgtU",
  "key14": "3dygtwJe6Zih7W3Bfbkzn3CY3XY8y3xzRviNB5Dcx437CoxbKXJfhjKU1gF6mNUZ478hyJ4BTBfsK1k7GXtc6hAD",
  "key15": "47NQTnCKhWhttASvzcawTWgrHnyakznUxcryn7ZZQSLe4ngK5UZSeM6qGFT4o8nfwBcv9UTXJ8uZR5cnqBR1LJEx",
  "key16": "5anCKra1gTnsTL7uTzJwkBoAZggEsZctMXDNWzR7wJGW2fyLivRCGttgywsNGSnZS2TUevgZNSznkcyXdSWquGzP",
  "key17": "2TGGSpw6dyFu3cz5bz5gicyGs9t6VFEsqT9s7co181XbJy5VdYAue7aNUxXmJGq9KPUSQZEosiEgQGHcRE2XGqM1",
  "key18": "5hmj3R3dqi1ynAvnikrLtMDofRZJa4b21vnyvqeMet54MfstN8oAGRi1w5ekvZ8KNFdKbZH6d9iKENKiwMkru6x7",
  "key19": "54mK1UdnqTLJQsi3WKJ815cnAHwMN115PKwHFA9FHybkqEmnPvE4UWxo6CPYqgqMHV4fx6cKdzfT8a2zDSRtmLuE",
  "key20": "4aiUFqLFNfs4PTfXVDJSMqwD76KrJYMRWNeC62uiBCGYat4tKrH8AfCGY4yZpM9HMvWcg8DxbQuC7yaRoGPUeHuj",
  "key21": "2YRYWhPaid9HpMn75B9ZNQTvAHV5F3Dp77R5kKZe7tCkgYSVjsjkGVY3K5FuNv3f8rKeCSHfJKVYnnc5TKHPBFgR",
  "key22": "TPWKpzW7gxj7vDoziYLQxLFmSjF2Qhs8SpWGusoJfAPe3FFMNFSMXo6UhCnxxStW7kH14dVqruFMypxCc4sKJLo",
  "key23": "4S2jUgVLBdyFHHpuujojndqXfUSCYZic3zcp8ftgseeX8yHdLCzvAR3XB2CxGABUpekCfsYChdv76V6fp5EXvXTn",
  "key24": "6pf4qoXa4nwpKfD4iiw9hXLz5y6gmyhi6Ge6Wefv2JkGyXuzFa6Du2GE5gcmN2wsozELfbNnRJncCa26yVVHDzP",
  "key25": "5x9PwmXs5TFBcw91qpHH1A8efwW7mwVRKUMbqTG3zNKBTEz1ge8MtAp1MgE5rAVBhCPXyNz7pdF5mpv3waL5RE8D",
  "key26": "51oRQiL1wdYk1YntSDAtqpeDwKoJFtHbdq52LAy67FVfqGWGcfvfLaPUyTk7d7hhHQwUznvpDCqJ7ruxGe73nsfs",
  "key27": "Jb9hNYorv28FkLTeSdFjeUxuMRdNrJsNCezYubCHhXoodBySv3azeWhL6wYZfBrxukDEj2gQkHbvUX9Vd7Bo7j5",
  "key28": "T49utCn2qAyJM9d2iZqBZfWFEDWGgeng5epihw5QjcEXxCSk3VuoHo5feJ4R2RHYZFpKgz3Pm1RWXJU2jpGaXud",
  "key29": "62Rodjc7aagRfjgbyvuManDPmwAHuKP9xFAiGYqWETz4SZCAZSyb9GQo2uWA3RzwrLWzLRTpy8pzr8NYdQNa3nMy",
  "key30": "2i2fs46SMWvH6ScJaKz7ca6CoDH93uHE66649qmiwGergjb4rBvGZ5JJdM1dcYSQPrKxPfcuYiU6tdQ72jeDouRU",
  "key31": "4XZR7GB7CGMLsXCZPwBmY237fXEoNWA4L1FzZLTJD4MrBXq4T4ihNcxeZd2Z26NwB8JURYRyxFPZdmdYTF74m4UL",
  "key32": "5RbGmx5gS9XYhkzMHLEodSxHD15Y61pCs8ZnE4wP73U5viL6bdWqdZTp6VquZvTuqtTGHd59EXRDk7ctpJF8GobC",
  "key33": "4RKRbxuJ8aq9DA2CwWnNCATx7KATiYePXmugwoV55FtVMkYemV5dEXzDcVrzfjejCa64kocZKshg2k2TKmBqqwBf",
  "key34": "5hD6kwPnPpr3rSFXF6WBwPu4kURs5oabTQrBPYxvnJRghFFHA3DKd3whtYQRmcYo6Y3T5Xtprs2B6wXrVRrbufjq",
  "key35": "5ZE9XYeB5ESSos13waSHxfWqcUBYq2ANMz2hP4uqSapUrL6yAn9zZgAEnSjS5wnFEcy47vwzf9P99d453adTdDqn",
  "key36": "3bf2cWV5ykvmWAv6cacM8yrdJB7nbtWJWSirGxJGqN6xFzNPoYgt7cvf8oKpMmj37vVPkwKzJrXiD2oZiKcXvXLe",
  "key37": "3nJxxqiHwLtTnQ4PAt4neBNR8e3GgcpfXqn98XqeD5b6KFB7T7Swx8QoUz5kqss7FggFLJ6fHTDjLxLvDuF7n5Fv",
  "key38": "3njiZUeCoWox7Rvq3d8G7gw4irVi5j6FVjxVzbQ5j6MUJ3d9KzNt2bm3No4Wm7QPs8sFQZBdhpLDagKvcyFrJc3W",
  "key39": "5Ymp9TJjibBowUs6XAtRb6Lfvz6hQEvoWMN4KgAL5WU16L7p2PvnkQwbV1k1maGR3Z49iLsPXTPe5d5TTqBYmtqX"
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
