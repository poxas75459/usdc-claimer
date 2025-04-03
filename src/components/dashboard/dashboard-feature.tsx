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
    "czcotD4XTWMhR171S6LtLP3iZgigE9PCPVydMYhswcLoBE47H2jzxugQ8BCACZCE1b4yAkfubsFKMJzEjqtGv9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rDbpXV2eth4ntF9ZxfsRDB9YdtTpZgJwQG5jGTZqEBB6eYCGvLCZ7doedoX6AMVwp3d8CV7HupaJHoQ2NhdHrSa",
  "key1": "9C4QHuK1wKmCbKRV3V8r4anhNwcmcSYqVjv29SuVGk2NFHMgywa6f7oMXE14uX9boRnP8YnYWbnoP6EXnwMVJsB",
  "key2": "cK6quZRvMMzxYrLaeGN9QeSxTfddtxFp4W92rUDkX32ufLaXCdbMv5zvaykfyDm95KCNrif2f5NukWJVzWT9CKB",
  "key3": "2W5FCyVEwJmWvHJv7FXrAwqgskGmQ1LRc2mqT8ExDvRrXEELZ8TH5yZYNQ8YxLk6UsHvVnLDRoYnsqNFzwXALmCM",
  "key4": "3AH93H69XDJ6PNEjEshvptKkb9UQqFNMMJYRzpP2uqy893ymYGeFW7zWw5cQRn6MTdWhyUBb94R95CjMX9FK1yxp",
  "key5": "2iAs3KMsGQTV5mGk4k9VUZAKZs84QxvRiW8YUq94r9xpT1urZDLftbs3cgdWZbs6tJxt4cm4zd7cJuT6zq8WrHtH",
  "key6": "3uMfptsYrPTc7k64ot4hey8tkwkDP9PZvwd9uBAm5yJymCN7o4jBW6rbCoacjTmYkQw5fjHj45TDwbPXM3z2Xg94",
  "key7": "27Hi8rSiW2jmgvErMhx7GPcXkz8k9ENkp32ZGG6FMqNBwDG6L53uxfBcqASctkzjmQKykSUfXMrYc7f9mtxjqKAX",
  "key8": "3uX43jPzpA8j1oJYMT9Vg1hhjrK62XMWE9T8NiQ6tKgStGEdHUiiAz8ZVkwPsYoefHVbUqKBYZKaQ7fKHfoJK77p",
  "key9": "2v7Kwj4eLPf2kBdm6NGrJjRCoCoyxc1WBApfK8hYJyY1aBf9WsCwFC49vFYqkiRHd6uoS8rfwBSqPWox67orATLE",
  "key10": "BtXrXJc9dikjimzA17WQzaKzFBPmhwGh57EBGFt7aoBy9HRXKvbHNXdyG2rfpMzDYYUmDRFscNTRtXtijnvmZ72",
  "key11": "4KETNA9LyCjGvWyi8r2DLKw6hLBFL31k4yowEPkVBaYRnypsDZxxKYxaszyaMkoGFywggnmr9Da8WWrAHCTd2SCb",
  "key12": "5QgXFrvmxdpSvpCeH6ZVAkZZST99RZKiED3qgdEr9ya7H32dYaJZ6ivoioCWj8YNzVqz27M84DWQqa7r5ZGuafra",
  "key13": "2uG4aKa7YU9ssrGPrueLoW1CkWWDw4sYp4vBs78irhXjjUSWGpSdY5aQJTX7ivkyzHQH5VXauVQuAa8znpfZtohK",
  "key14": "33QFiZi72wAT22tMDYLwczC9Pwbx86CZaezRNNaigubU1745dUa6BVdUAqsovF3Vubccg1nSiWjFraevUbgTQ47G",
  "key15": "csYWUZpnUTFqEo97Q1qnT5XGTrPUiddCXPWDVJLShQMdCs6z3FtVpmGoNzU4tkqCDub1DE6SZfwqijKFEKZgS8e",
  "key16": "Rjg5QztKF78ZrWCnKyEUU1NqNiZ3ueJuop1RFNKSCVJG9yCWfe9nf6Gjt9WLF3r5mbovZCHEh2rZuQihfrCxA5N",
  "key17": "3JBhqvCFiDFsQjvfXLWaghYfts8tbRzF43wKetHPe4S5aunvao595J5eML1fxHuynUyZYw7j6tTgHLHtMySkPAuY",
  "key18": "2w4wGHKJqCiWJpbpRxqaukugxVASP2HsxAasSrscwcTQafCXLqZDZUvnKJepj1amW49aQErmWuUBQDpr4xM9YQhx",
  "key19": "HvraGUxTukVLaof2h1QiNCBufm2n5miP4i39U7dSW3aSCq9d58ELQ8SRbA1nHt6Yfn3m1BQQUp5KLHFaTNv3MXg",
  "key20": "2euCH1ktQcdh29WZT62KtT39hGP5YK6FQF49EQneMLNLem9EUd73CqYJUZYtA5zZN7xKWKXQEUe9KjVS2bjPvLkf",
  "key21": "2aKJ4P94QMSPq6LLBhE8Ui7amQKMHdYC8CzuoTbyq7HFE9tqHB8YY2UNfSw7JkpejPXCapLhEKXq5zQZGA3X1XFy",
  "key22": "4d2vgaktNzRh9jczrdxr2th8LFpwwe3b5s2x5iwxeMiA2M25p3E5zSgXz8jZm2BxLRxBtdxj8yHpYGkq2A6k9eb7",
  "key23": "4GTnCm4gaNHBMmLe1wWWgBFgBFtwiDYFHuURCdRXF6tRJHTXf2Cm1AEiMvdy9k312T5Y9Q3R2RRJ8WfrGSyVG5Po",
  "key24": "4KPALzaU7rZWHBtWoNskPy7h9ctp2ygiumNVyuxtowmDjDiaAUEx2EPUTExvxwbDQB7YN1BvQX79vsrDhd9SBitc",
  "key25": "3D6amWbvwW6QCGZccPBKc5zRgrYFQm65gGSSFc3bmKeD5Lt31TmuYNTvSi1bMgKDT99WemtbHDCSeeo5SVpD1SPC",
  "key26": "4px2SEfqSYpXHCDaY18aFwpwoFoNZ8P55VGNqWXxbYnhB7XwjWeYfZcEgJ5UR2Mrvyzi6D48vrxgetjgihPiXRZZ",
  "key27": "RX2uuj1sqiphFLsggocu8qUvn2Vko5UBdmP3BCM9E5DsxLiZf3B2etdxUX6uhjbRnmzRa3iLkqPvVDQvP9g7mXF",
  "key28": "4BnByta2NbqzNeRpYq4FuWvbThMMerNcnF6bwdT4Y56rJSZnNy2jNJmdGQGSaibAQiJ8KZeC6pzLzkKjpXiRzaYG",
  "key29": "4xip3acMDhQd173LnQuKng65BWNik7xrmMz9BWjWyMF19NtEibsL8EfcwKrzmzY2y59YdGPuLqNDwVZLkSYRDM4S",
  "key30": "5wT2xPggC9QvbvUkK8AdnM6mE7RaiW8R4eYb8vvAYK1dgP6MYsXqurfMpzgfN3hv1DeL8yLreSgWjN5TZ8fD5wuY",
  "key31": "2hvN63qy43vqH4QCVEZLVGNoxBJzndG9oMosUE8xX7BYeeMGhUtbLyvLfT4NUcutj1f1TBPDMMZ4eyfLhTqTeJh7",
  "key32": "FihC1biYTLH1PyZeRk91ucHz837ww6brAP9Pdf8MY7p4tHxmWFucu7ncL3aahAtdXftLuVKxxCABXsB1EvGek4p",
  "key33": "WPRKq9eMtpBgENscPVT6JgTkAFJXdF447M7mW57sgUh5BquYtwwNFurtCErvgkKuzDxbJdYKCPFoFRC6n2mdjbV",
  "key34": "2XBoxceCgkFayJHoP336ZmBqWsuQiVhPBuY1N22ScS8kqZ3xuYhYkpJ9jf5j7NcAaKUQVnV5g9C3uENzMo3WBuk2",
  "key35": "495qxWChEwZnbZKXxnzyjWooLr2H2eJRuB9EZA4bupSmAwps3fGHwJVWdkFfC8hbqhqAx1VGhYrSSvqJvfGcF1xf",
  "key36": "5UAGPPyVMhVEQRmQzcfSDqLAfMMZenFzeGkMGuGnLoGn9GYsCrR541fn2x6cqHdgkzSkreGjHxSjZsoWF6RjWWao",
  "key37": "3kThqdfJ9zEoLdKe8DcEsxyBqVeyK2p4hh7KGQhd3SnsjHBZk55hUfz3JokZgtDGCfaXFXgTaDqYQb1sAiT1qiXp",
  "key38": "3ZC3ynMEXTWUc6axxhR36gEStvEK7ckBxJmf7WtZ73jF5QCDMNT5j449jnBqgeZpCbK4QVaHY87dFuPdJXebapnT",
  "key39": "4FcrNPau2N1LG8F2Sfw1zoV7AVCdZiH9nBDiZwQ7WVeaPevCLhq1wQAXT2td9QkUyico8jwQKPqWcS2F7Qs5FPBp",
  "key40": "3NWJ4JTwb4SGThVk3adrLs9iGuhoBzSECFkXPCH2zq6pUiNBzYbCQy4LN7ZhoXFtBhfdXEM4c7LGFi4q8wNrYs6n",
  "key41": "4Qw7e8sA8jH3RN15LrtbmhcNUTrrD35yPieJq6AchHUD4awRV8gtvC1bGwvxBvSG259W1oZnWYd7ypKQ43ztfmki",
  "key42": "29mpSacKH48CM8jSwCXmwXhb9hrLyoEcv1Uqaqw2JHXBHd4MfMazkqTmQkRAM2wDuEo1PtYyeYFQTFYZo3aSCTe4",
  "key43": "3upb8fjVpyBCBXpMoaTP7Wyv1UmP2xYySCGRJr8jDeyBVddhqvFMk4xDyHzrRXcfSmx8PJ9pN5rp9CNpq8VqAVGE",
  "key44": "t64mPyeLzFB93z2ay9JNuc6aHhbemu2bVpYNrDeH3Mu3Smu6geuiMtjDb2rW2TeJr8xwF35yFcB5yvoQeM7sNrk",
  "key45": "LBajd4y5Acqdtt7qDiLTNFZaBxLq7GuChatD9pRsQqSsPRbouWY9n49Q1Hed1uSCWpdMxyvaATqC3ReUrbEqpqU"
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
