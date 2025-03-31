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
    "2P8aBX3qt7pBULLfiwrK8UYuLJh2aeEgVt2kZLVwZVDHniqm9H2rnUSP3tYUTYLdtdFnyyKXJ7WonMeX4rTHnpzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgmbE2vkX3dY37mXaP9ewDY6eWoXzDyqaiLyHmqYTqjDMmuovHYaP9Kba5NKhhMJ4pFR76kiTLHuZVgs74gY5b3",
  "key1": "2YP1ggw4yvL81SwSmbha7GpdfRQmRq1cuWQ9mNroJdUW1NXLog86421dmFNZVMv1ejWT9kudJyFwVCdkbX17APYs",
  "key2": "dCPAzuSNRX2MQjEPyNSyFnKM8h159TPYyvQquofihAYUtsVM3E4A4d5JTRUefGwuVPWFDFfxjDxrQjcR19Z5ap1",
  "key3": "hK5Lt9NhBn6fQTnmyVTeQCtoQ5KSgYpkRmF4xPJtAqoBVvSWJCqjCA49s943cfsQBtMicsuZTSSqAQQpaHUoB2M",
  "key4": "YEkdu83QmB9QUouYf2y4D6w772HDQGpLW363Ft1Xr689pk1KHcYKDJ8BvgEaDwnvfHTR5P3tLkS8iBL6fSsZhsA",
  "key5": "4fy3HfeZ4zWfSaPz2hWMjBvXz5REXDeqFRBDUnondfVF2aZi72HY5tmTJwW6GBCSUTxyM8PhLhdzfDLo1qXTfitu",
  "key6": "7X8TxeGFPF7AYXQwMt12hvTD5B8h7AarXFs52wFc91RNnCpqZ2kCEGw4GV93Dh2Kj3HqGdVkHCRbdAFRvKQUw1m",
  "key7": "4n9LgeV6jxwPXH48yb213ffgj5am6Druoz6joa8RaNPvxBpw8Hi61HJGS5BW5giEzBMV5uZJWCyYsZndYYXkoyjD",
  "key8": "41UUoMBT2SDTUTcVDAcEQ2Xye3EaHeoGqcZ7ebzwv6QZdrdW27PzCkgKXmLo7YCEe1DvJNbs8USe8bR5SQHe4MZ6",
  "key9": "3rbCDMnD6Q4pQ79B1gVXuRkCBHsPSan6AfMRaPDtvPGaVwgeNe5e2qSpydhYji7KS9mNoMuyBzV4pvheD4xDUpj2",
  "key10": "8qUEnp5sPbqWUDSfXvwkJg9eG9QALGAnwTZFTyLYgfoWhgvLMBEXa1m5z58551fTDrAn4yZQsySTWdF1cz7rAHp",
  "key11": "25XJpScpEvVkHCXzCu7JXdE1ewrKb3gtmZv4tnXtiNAYd7i1dg7JhZk7j5XVauHJ4JNJqv1noGMwy3MxoUFK7Eoz",
  "key12": "2avnYAEXxCqA8AsJyDSasRcxVmKYrKJGS7Synrn6aKqNGvGfAtgaKM7A9SV76cE9hrG39tHxXXKpj3vh7SZaUocL",
  "key13": "4hmXsTGmfL1jd1xT9zfN3SPf7t1f9NdhDfEv7w9KGBEBYR246Rn1MSdZ2Q1yX61e5E2URi3YWmUsG3qh12dgh9mg",
  "key14": "3ciVdDvb7Qtp36jWXpitMVY34YDHhubvnKEAUHA9vCPVUGijDu6eSv7cWFy6j9hLF3vJoS2cfTp6t1iKJYzWKaBH",
  "key15": "5BDHed295AdVEYbzYa81jQX3hengnM1RrxM8hqAwAunpXUiyJwUo2jdxkygVnGhAQoh4BhtkihoSQNb8YBXXVuhd",
  "key16": "2Fid3nKkZfBJ7XQpom1drEE1stiQ4swhc12wAaeNeDzm3ymJKAobfmJ6fHC8f6gHoQ1wBAxC2dyR3b69NhicP8Vb",
  "key17": "66FSubXfsGd4eB8fQc2teWeic3UbLNCwWVka1KHRBxerucc85nXJcws9AKWBRNjpcGBbT2Zw8wRUTZ7HhcRWg5St",
  "key18": "qMdbt9QiyPXxKttgfYnPV3Wo1EqQGw89QZw9xRQ2kLjVY9T2hV36GUNctycz8e7b2WHrnfNo8KfKmV3m6HU73dG",
  "key19": "2iDJZWKrW4HQCCteyz9aV55US74mFeCccE2hpBF5a9oZCFijgRhKD6DkP9CM2tGk9aFUHDnkoiWMxzn2kdKtcqXJ",
  "key20": "54vZrmVtFpCWFz92kr6yBUoxiWhoMowm4bN7NXfgiEfHVAow3dZiKaaqQjccaK7f9uLzFkU6WdueNnZgKtH1xube",
  "key21": "4anJuFCEKMoVoAKMugePCGYo5ZApuXWRk5RL7AdC6BF5pZTuERFUdEpj6gm431yYWi2GHvA7czSBHVqoA1X8qM5W",
  "key22": "scG2sgAfLg9tg4amUmGfb8zowbKnE6VwjxFvLnkcNRiuU2Xq6xpB6KaYPKdkpqo2TDHetNsmqJZhm5rNXoor9Wr",
  "key23": "4eiGreKA6cpbiJT8NRq3u8ajcaSxqrfAFYKZe8Bi7G9RS3a3JxHDnwmAQ84NU49KGaawhiuawvnxJNU7Gbs1fKBv",
  "key24": "27x7MLPegMBNM74SaRiyusxZx7LE9d3Gz46kGbm5DcoCFajX7kBhB7teLXvbtDkzA2wamRbxXYBuicbzWe6QfQvW",
  "key25": "H2xsrL6mKSFai1gPLnMhskgK8TP1mh4BCpXf1LGHyaihZvvAyW3j36jJkKGHt8JLa1zreVAXFzRwuSo49hVQm3V",
  "key26": "5u5RGoDM16QhF6TqLx7QUxFQL6HFodB5qMzvBoAqDdTbPd6WA8fc4XWCwb3hq4ZU1EYjAyr15UFVXa3VXE4JYygE",
  "key27": "5HUYhbMFvjZZT8WNuhbQzJSLVxa72ABB7a4ACS38E4cf3y1UJ8rb7CmosA1kAs3hmEqH3ppRbtbg3Aumo2X8FpCM",
  "key28": "5SttK2DnFz2DZxybDdnWZYX618QTRSJperec4nhZAek9yScZvingzN4pPSD3U9DmqTcrgKSMdhSq7YPRjAt5DUjo",
  "key29": "3CmMj1P31DXyH86UzLWUjmCrmH85JfuH14Ywa5xuysH8mrL25pmVXxFfatFCXSgZAQwqnLNwa6V5xBHDDrw5xi2z",
  "key30": "5HoiChz8BxVosaQXQmna3rAcwtguDUkepYjxjHuBnVQgVKiJsAhxDVjRTbtEsnkr4cehSAXVdWcifetbj11wi3DJ",
  "key31": "2Y2Mwq9LPFcpTTHgUk2rDfLGJfyjSXTmhsrtqz1w69EnCsLfZ8MkABRQwTHNmjhyeE2cGjQG1EJTJVuBbwgu8WzN",
  "key32": "3tQgutWqTyRYgXX6yWLakkDbmci5dsmvTkUni7Pop5VJsNnz5MpALVRoFSP7PX1eXymwhWBbowN33fApXbit4aKE",
  "key33": "3Yhen71ULWMc7FSAgddM4gfSCNnpeFXF9zmtSFARB7sXfU3CuJYk48USykyeksRv1VDxRXeCycDHis849FDW3Hma",
  "key34": "qLpm6MjBTF9zL8gnkWf6ETBgDPxSHYwf91hzrrF8xHq4P9rVWVugviDAdgtT4JE3nF2DBWjni7npuMiZnZDG569",
  "key35": "rMz9gbqkES2iTea24R116LcmE1rA3CZiNsJEoxk4UtzBzfmLCgGAdnkvDnG78RfZdUmRS4UNMKeWcW8SqoCjsQU",
  "key36": "4VAiwpNn87ajTRmNSyQfMeNZJX6kDuFqLJh25aNNsjPMzw5vfTxsgZt7CDNzMrXHcqY59zKBFjavdCTepxD4t2ty",
  "key37": "vDQFvUdFdiKijcpn8paiai2da9UXTmfgC9QYjzbnSYJFaGendXZxUzp9RDqHKs5kXVoTYkdnrQ2Pf4nzUhzBszP",
  "key38": "4EeYNDKNRF4yU7iWgjh3JRAFJniVRwbikWFwimck1mTD4nd8YCJ1ELRR7uAiQJi51AMqGZzAUXxmwRYgHu543r3e",
  "key39": "5BLREsps2EEPtqKbPKmxFhocEFC6CexmctZneQLyAJRPcxo6xqvjcXrg1RYAptEysweVKLhNQAu9FV45gpL1XUVs",
  "key40": "5FjGqi3ZePSwpJvZHENu2dyuuFE5sT5a2qfuEsxU8n8J5bVyfYiT65mA6NwFcrdmm2ALcqFiiDSPAsQ6SMs9Aw2i",
  "key41": "3dKbh14bJdyRnYTQbTxGtsE7o9ZEBevzqkM1xscRmMJef1BsAoZE1977WjU7poY5kKAyRfgQF5xrguBaBVbub2Nr",
  "key42": "3r8b5GboERhkHGrraYYsaVNyji3ScKgfu4Ryn6xXwyUCj5Ky4mSjMg63uS7Fpb4CRKppdEnAZf3vnzATfn9L3Vw2",
  "key43": "4gYkdN4geZ9tYPTAUR3VsK7BbJcj125bFtaDbTvyQ2Qp1ExjJMebspGGAjTvvu8gVYsXveBY3jkRaFb3s6R2SANo",
  "key44": "3mLpjQMvbz4PBRuEu2M3FaDvGA6M6NLVhcCBzPuyg6ZnyDQ1f7auU6GZbRAizuQ5bZYArJWRhLrPL75YMHpNprbd",
  "key45": "2eTLb1j5BY5m6qodRERCse69hwu4JLBZ9smH5YeTNQNj48Mye1QfxdfeLUrpa8GY4MQAs4yGxGHbfzw3n3SsXLZc",
  "key46": "3v3iAoQ8e7FGhUiGc2BVMFV1r1iQzGduWNSNmRVWwSBirmUDWZAam6fdf3FYs5FJ9SsghbQ4ZZXDUFUR4qkfVVJy",
  "key47": "3DciiNojLLtYs1ehpBLSmGnUtBUeYGQxahtwn8HcXRQb6Z5XD877hAxZk9cpSgW2e7mhQEVLDWXKTCbLjaeWDdNG",
  "key48": "4kBDFSVd3MDXfRUsrk55X2YCN68r8xhKvCYx2DG7RNtvfpdpyZUsd5penAEYfaBkVfn8Qy6j6abPmchdWDTgKtU1"
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
