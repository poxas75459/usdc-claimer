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
    "4becbqZj91atEd8mhzDVNcyd3oY4VJWBY2Mif75vGASK5hzZjnZAVH1dN5nKXHE63Ey4rqkyPVMf8aYdRYBjwJRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xe3DgMo6e9BSonVzkSrfRCevbbNVT4NqdvH6iDDLU5rQoDA7Q5TzSW96MkcpDiavPrWAfx1tBrkrmpHVLXx3xWz",
  "key1": "4RqRAkZ26DvnRTFNJ3npdaVAerXELQVm8kJJMD2m1JJNYZ11r23mc2vWJc4SroPAS7559zJmCkgt2Dz72moQJXsW",
  "key2": "3r2N6Edf8tc1cUBjhXzCkxJj4yFmqtXkcvXQvNAzEGitQcBiDEpxk7h9Lm1NNAwVG6HM4e8ahFoiAvcyzUmn11RU",
  "key3": "5Yck9XB6pJboSBJ8tNGKwxESCC42gJQM2WCZP9onMGApDU9NQ8xnTTuDWXSz6phi3L6yTUzU1Gyuhs5c77N3ALJf",
  "key4": "2Ughn5n9qbNHi2QW3jW7PdsoevS4bT5eVv2KA8Sgf9XvUfJUdGLqyA1gJxvryYhf4zxrVgKo5R3eooeMZ4vKiKWW",
  "key5": "4aDujiPoCXiTczKuWEsrYEsSh1JkMBLuDwvob2xeB7QHAUjniWBSBqq9xn9Ad2TojDuaBBxGGee1hywvVk3v2WUp",
  "key6": "s6yo6o3Gdc92EKR2K88Nyxb8jjS7KMxSuTF4fuBhtSnT1zBuPniFRQFDKwxJFMsS9PXSU5wNq7utxuxp7quZyxQ",
  "key7": "4YsTRacHN9us9avJpSrSAxoDfiivwDUWqyFLg4dpEnEJ4x5ouTp3PsRxG6zu3pZkZYdkZGijKPcE8Vs6agJ48Mps",
  "key8": "rx8ZTx4hurPxghveB8LKsNRgZpN51xAfbt3TAx8pA8VnziWW3Stcqcn5pPjPAwq6SNtVgAbwNX1G9pMXPYPpa8y",
  "key9": "JKL9E4G6TmXMnUDaxEMMbkukeeqXKcRaJS8vwbXfrE3QFtWbhZsxBFxZbCnHnWACB4sB486WVBLRtkdAJgFgjAs",
  "key10": "3UkprjR81m5M8S5Uqy76t7AmicopJf1GUjj4CNiTRa9bCLxbMk15vXTxhTXfadWTH9TZJj7wVvmh1G2YLLGNCgJJ",
  "key11": "359SA52eWjC8BoVSd5FV6fhMjTnpfqGEnwP6fmb6RDFeopFUCrZfKvEFGcf8LrRcwZsaJorJR976XnuArFgYwZXV",
  "key12": "4FFUJiGUYHcHAUMhzS6RxR5Sb8aHmgy88EBRx5rFav9qTuGML74BjDMas4XD6hFyVvUUiETGFSn2ahBo2ydJPoLy",
  "key13": "3jCVfXkb1g1pYCyHqh2mLdujJkSZvMxj9YZPDFBy8NGCrGMWYnEApQamMRJCxoRNgX7gUwi5CKJTp8FzTaHqCQD7",
  "key14": "5hd2dS5yfY21C32CDbqz77meFDn4uvE3z4PDhrbWch8wGKshyDMskQKGWZwDvRWheze8DAJr47JGQ79ktHD7c5xu",
  "key15": "36uXYqmzV1aXBKWcLmQtsqY7GexWYyo97UmYHgS6rRxcoi9YKtyMdysv5hoVWvkK1xs63ux2ftpj55CaZj2rD6Pa",
  "key16": "QWkeQg9dntacmHueJSsk4uXY6AYotm7twBsKwvdXj9iVoxbXdg94dnTGxeEahekH6HjucyjL5bPRHrSpdWxgNze",
  "key17": "2q3hmdDAiFrpsnS3zRgZ9ndkxDiiDpkwiviC3ExgXsvpLRGMv1h6HmNDe5HVLsFE58EVM8dbRXZuF3ATQW7ZvLC9",
  "key18": "2ujLu6g2eYqNKUvrKUeXhBiPeystGEXMnJBwgiR73U8YwB94ZjT8N8cNJBBrvQq6YgP7mLe2brvdTTXSqUFU4s3D",
  "key19": "3VgWZP6q6LsDq9j8ViTyTwwh5FFSm95J9quCdFxBUWcygJhnZSfXg91myVgT68S4v8wiJLJ1WZATKVfUhNL3TXiP",
  "key20": "4Ycuv2Crpype4znFsAx9T3su3BEVi84STn16Y9GbTAmZj1tEccKFEPhAQ4xU3iczJHAhYe8UcuAQbwDPKQQKANRM",
  "key21": "4LT6xWKEgaGukPC8K8bKhBs6oFruevh7q4yU6L5EAuoUX1RuKhwk6SQTAWtG3NdvnsU6pB3Ct8f2bEUFkuCYWrjE",
  "key22": "67L3hjxpBk1Ak2Wqh43cTSPn8DYnVBq7UH8zhvcfATBXWAzuZe4B6WJBzfUayVBDzYmdQ5j2vqW4W7MkiiQer2Ti",
  "key23": "4xwFmqLemEshTDRJ7UDjry7og5HcfRAnEK5gm93uhARdQ5N9SUGTBsxLYHauZygKem7jCWi8Uobo4xqaTKohyB3z",
  "key24": "4f1Fqhy6JsBDJVouFsVwFxNPhuwqbLCaS8PUQyuAsddDi4sjRTYe7KRpoSjAoLrJ8Gd9w39DyErHT2yGRKFEu6z",
  "key25": "2VCcnEXWvLxb9jDuB8jEJkaQRuTwDjQJxXhnVo3XSjXJFxNHGpjENSW3GNFrWUCmQLdRAP4KwZjbxjCYUZSu3MCn",
  "key26": "4VSsMwAEuquDbuTcKppYrY3n9nMrqSgvoTSvDWE1f8SWDzREjvAbU8K8dASv99TYDSqqPNiWfiCbHBSTpkQsXM95",
  "key27": "5x8kCPFvtUxRGUVqmj9MUiDpSSHMj3Yi92FiRz8RtEQeMMJ7ap2SyXzgL39NRt7BTXCvaVpNF2LokkoKrshftVGN",
  "key28": "53E1XE7ndQzWgj6dUc26cMz7Vzwq4uvsMr4CP1y4nv7qVxKc6Qd3FM8DTDKpjeKZqppnKz3iCoRkVqtxZj4iVoe1",
  "key29": "Nm2fJ75VFcPPHZyVSLbSejKMGie4nK6HN3v3mBgDykEpxudzYUMowdnfYV3N483MjiqASfJ5YM8fneJDURCPkuR",
  "key30": "3r9YkyGVCC55CwH2s8RttGvANARbjz3CUi7N1fDNRzpL7fAurPKPTdaWcZc7vjwRq5uwfQSKALBgUU8p5s78ocFr",
  "key31": "3z3ybJo33DMHRuPhrbguQkytGkby7YV5enNLeZ2Bk3RDzEy8Ga4ypk7S1FbbUKxyTKCtX4C731b97zKEENacHP3T",
  "key32": "4MmceqAfg618DNj7sMqQ4Xr9jhjYdBQWHhjRR89smS6Lr2o9Vd7T5DPQgh7V4sfRowC6dsCDyjWJ4wyQzmMcB3qx",
  "key33": "3YfYLzBz3XmSVBhXMaRNPnZ6pzS5xNrLBLgJFNZ68hny29qKKAUP39LSQsfpEJKMfkqUb4GUcGP2GTbAA4Ed6G2Z",
  "key34": "aoi4D2VDDMQwyHKswZrV9LNj8ZcWdTyc2ZYZpqh4VKmfM9DBvqm2jHJzr3ytGKJgQBqzCCF3eZELGoUmzNa1wmX",
  "key35": "3X3SFhLFtTmaWBeKK2Rz44kzp4LnCuUdyQe8H1j2FEL7XdoFfx8AwJMc51iE5GhbKSdAoKZodhpKcVidjP86oWzZ",
  "key36": "4x9id5WDztpZ9KmMq5zrXMEBL98HiAAtuQdUVCuk6rcZZSw4yPJjxnsHbzwzHwweVAfHN1GZYr8NHzjHS8LLkQ72",
  "key37": "33pkYFafr3Loz7BmSmFpaxhVnkTpeAp6r4EAc2zjsBgE9E6t2YdtmrvSvnnNR1LkWGVKw3FgBniufp9sgbdPmx8s"
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
