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
    "39WWJX58pHHjW4NR4ZFygKCNJBytR6Hwyj7bSTigxCzdccU9HhW2T7cmBhWQuNJWWzAFuYrSL4PAnvaVUVHSThkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqQ3fUsh2ztn1aoihrn71rCVjzQYkRFZ6xgtHFP6EnmdYaRzkmQqQ1WS3HFoRH9rYWPfnD2WBFEhq4EyWcAMShT",
  "key1": "5CWphihs6orHydSorPnUYg6A6PnpWyBT7CYcLkhfKrC151s5jYsGYNE9nVr9SpqvSh8Dqxz4a8qkKvKJdwkiNNH6",
  "key2": "4CkbpHoUn8n7Zr2UysUhagGst5a8tr8fYjHcCAppdZQTcwETF7nwpsLuFpyKzya5Pvn4AqRLbtN2SAhRbVFDSUyc",
  "key3": "or2Bg6HDpxXwJU3EJ7QyFDoLRYRstfzFQrD3hVj3aNxp52y5fghaBmkqiZ4YqLTW7AJVG4KpNX1Rafh7XgSCSe9",
  "key4": "5cTU8GRUQw52Q3hb8BVaX9AgtToMvGZQDw6WZHYm3J8BAT4tPuWZYN6LbNFikM4mShF3bZq3P8gPtGfdEw6Qz6v1",
  "key5": "hqrWiYUwk8VRrFrYWrgZ3c4BWjrSGVq5xrLkfMwCZzuARs3KC8C2A51TFM79xW2ADbLFSE8sa7ykQpXgfWk4CGu",
  "key6": "3RvYRbWWUh8YLVTF7HL2uhMNsBzkRFy2MKhBqusTG712tyGDzDNDu6BF1PKQ6ELCpysTS656jRYR9Bk7Ev8WRbaT",
  "key7": "2NigJ81Szt4RBDLgyHsqQbzySnctPNqf3vpMHCTDQ4UZzDXBfCM3udwWGL35Q1sVMYYbeGGnkGj4C9jPiUDCNBvk",
  "key8": "5zVPQJR4xa8meGArUHjta9YxoqFM82QBA7poDGp9fAfn1t6XQH7KEVn5jzTgXckZ4KMfU3wwjjkugZrWjYK1e6H8",
  "key9": "5cvX8Ss8gzyS2sw2sKsrzoR96sQemKa8Q2LjupNPJ3U15rMm19DM9nwmobuc1Bfchw1UyR2pamswwdUuj6jUz8ss",
  "key10": "3tyoGEYJKBbry5o93N7eDj5PegNhKBJ3D8qnCvpXcErHssuKfvD6aXjEHLGEmsD7GqKVznCcVfFrUGxXFewqrRgU",
  "key11": "588VoBpb4CNUYr6jygSUSjdaZRztKgsQwZ7GgrAR4FF4zEwNtTTaPZ9cYZtwsZ5y6XxntyWntXeXXPU6jJ9RXspa",
  "key12": "37m1MrQjuW8bM6kVjouMAaEJ8aeNs1RGicyr9ZHkZs8kdtCjP7ww7BA6qwmeyrtK7bTm3JDBTtVt5XDwW8ezJssa",
  "key13": "64KPJaruHNzAMr4j8yv6ngQPQKBqJzU7oTNyot69ktDFtHKi62G8fpwa2oX54HaYEUVVhxYWfNVCeCnt1wwUWpiP",
  "key14": "2uNWXQzj1P9yofmxxys66vcWbqVDkLnaduggznSHW1XN1RUuRuVXDWU9N98sR8eTpYeaDpk4krHezHUwaWpJSF9v",
  "key15": "2BbSSxxcgLm8qo9vVvNq4AGf9towJM3Aq3caLMyyie1UUShKHd4XxAedzjw6gemuuXcUvf2XxUyukxEdZbMqy5LR",
  "key16": "5Y3uctYQmZ9rbC5bm9KWvqe7JfySaGkgaz6BZm8A18PghRvSoGA13Q5QxNk83RLjLUk6LjjXFJa8SVgHEqpxseYE",
  "key17": "5R7M4fqRXcwEeuBUQ9RtUvPjh8DVHUFo69o5LZv3ixY3oxSNZ9GxG9Jrz9J5P46sHofxE8PLLr2AaNEt8eqh9p6o",
  "key18": "65zb23G8ffjkP916wDDzBZJY9QH7Xxgq5ULUxdFbtPfezxkBo3XsjDUCbrmxAQJYmUqxU3Gz8vNWzti3pobz5ENo",
  "key19": "2S83xorbjwvz64oYmUD6TsLtrtT2BJbyR4HmmcGkvyHzPk2xGr3WPRwaavFMEAnBgA5Cs45U7dDPnKFSSk1LEydr",
  "key20": "5Q5kRg2G7wm29Haq83pQyUAyNBxSwfkLKBp2Yj6FgV3cFuadPQ23YXFVu2jqEGM62C162uhQLJMX6cp5UshdSWym",
  "key21": "3QYxvjcNPvg7uEefxDY38NwHJmunR7oGgWa1jLRXRKz2jPdjmzo8tQjMqv79BM6rSBMbkQGXxPXyeV6BayY2SiA7",
  "key22": "L5j3SxwwxL6jmGLupftJXHbNSTbUNDKHZS5ji9GEQgrBdxi6w8hau4Zy1HJiwHBaUDDhRjtLHC6XSCGXquHZyPL",
  "key23": "ERnN39yc6gjB7RUS2J6qon4Updguk6ZMRyJvJxK1wDZRjmu1iK8tYD7ARrAVA3pFn6LkJPCQToAHHDJ1rS7e2fu",
  "key24": "4Ge815mfufvg4KD1gDhebYgJ3BRP7yfNnzbvFpb9z4so48CSqevNDKmZogWQZ6KNwpv9x6JgsnL8W67xojAvMQWH",
  "key25": "3JNwkoyVbjAWqYD7FdMMG6P3Lv42xxzofrqPcyVYGNEHgBW5DGqtJHFZLp6TiP4xTjqjwJiVgTYgorLE765hFJUL",
  "key26": "4kvVHpmgnLyqwGcv9UyauM4LB4rfUE4x26aSWnq3zMFY6XMaYoj5oSnWw3omFq5kSLNXoZkEHZLNZhSWm2z6uRui",
  "key27": "3LYdgs6q62myiSn1YKmw2RaU6VpsY3zw3PjaKBqjkyzyVfFVBFG2cW99rDmZ8UuWeUEeRhzkAY9fXHF54wuTYCho",
  "key28": "5qthWNjqKihNC2Cju8jhBcxFr46b7fZ77MWSsENgAcULrTLofUxJKFEimCG5QLRJN34tPDCvTbrUeMre9xiq9ZLw",
  "key29": "2JaTn55GpNdZn2hMDe3ATQqFDbngQtYe9QAio8fa1gJtAfjGpR8qqdXkBsKjZNFMpBD49p2ha5zfEfq42CgvVaKA",
  "key30": "2EZUuuwvr5ay1A5jUwSYX5CaZCwc3dtMQpCoQUsFwf9yBgXD7Umk2PN2VGuHQSzgLz99gBf88Sdxocgd6f2mGH2e",
  "key31": "2Quh8vDqaw2RQmGdv2SaifMgoW7aLQ38EUwr1QztdonRhSNhLmHHrKEeZ3LuLXDdyZHntwfcrbdqbvKsSUKE6kF4",
  "key32": "nB4q8ewqUM2rSJko3dH9ZAQHqiCEL2RSbqNKhv17o5QaAFV37WrkpVPJbbXd9PrApTd96JB54ck9VmPW2CS2v7J",
  "key33": "4MawqEF8JdZXWWFZ4R3ZSdonmbJP9tRgu4rCXmSgUKAcTS3JHKrEDHqRUbonySGiDfpyauxWMrdSaeW2XGQwiFv8",
  "key34": "3YGEkNivMTMwmMwuxar7QzVxKd5xpUpRrsgTujCmJ7uXijkCngdG4qrRRZtvBFWP4qeFgNzzh3v7EZoUtiiL8gcX",
  "key35": "25iwRn8o74pUeD9qBJz5V5NDBchJsrtRwitqNdcnxhBpFWRvGu2rcWo8vBah183xME4ZwxuTmTYZaFQnjmzSWrF6",
  "key36": "vk6Tq84J1M1386st14bfk93RSc8hRFz87qnGVE7JDEuM9VoriFnFmB1LrzcSzKaBHYGPt4W2iWeCezn5TdQEYt9",
  "key37": "HsQDoS7ikMRZdUQ4iMz3KX573hTdCJQDXSJVZBpzyFAwK1gNEEBuGuEV4LTBycCUhA629u5e7SPaYN6UNvdnJ9L",
  "key38": "62SLny1VdGFfePEzkCAC4pyadHFoNMChHvQQAJ2dZnvwAfYTpTkWUskPw9VpjCyz2JcAQDZZ7RTcyoL3HgdcDiho",
  "key39": "36zfbDtREjQ5K92XPwPSaTXaJ4JXtUfLvRg9b9UgXWJvT41fbswnksro7dneJmjUwqGDvMZ2EGXS61BQVGWAGNZv",
  "key40": "3ksFYtyCErygrqrXnGfQCtmrY1B3RSKtoXCohBCEPbpxFdsVmjpEwKTfsj4KrQjEyv92BNyMazNx6safSj9DwE9t",
  "key41": "6EomESXpFkFt4RpU8cM7cuSF1xnZDAnSvqBD3QgAswufbWBgASQZRojsAAqqxDV1ZnxAteD2MzCjkoGRjzKNV9t",
  "key42": "AEq1njvH2oJXwdcDoAsoNnm1qsUn8SNxVmDam1r3zER44jCR2UMnzDQhmZ8p8CxwcGiEqt7uywJivxsnxBcRbyZ"
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
