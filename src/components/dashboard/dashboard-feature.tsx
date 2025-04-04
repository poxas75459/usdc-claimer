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
    "29LmRnCwVgYnvhJz3TrFDr1ETmQNBbMW2X8z4Kfx24n6Cr7AHeZU7tWqt4UMDH11TwPM5N4FXCnVThWDdyDYhebe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKtsaWkiqh8REiDwUWaTsmtVm5PJzrS2vMVmwu2gVtEMYk7iDoQYBCsKWBkheqA5mRXnQYbBGAyuRG2UsDcZad7",
  "key1": "D4k3VKdXktGgUPyvyRvsW6k9k9CBej1ws3PDmEuHGNqWcLtdBEhYvx7grx7TpobM1HNmcHXYW8Crim69uKZjLJz",
  "key2": "2v31RM1XKsceYANaxYQELGctKFp91Js1syc8Tb1rhxSAuvao2YpbbguTEwhdVRzTiphcYgVpeSUDVW56zjzhjb1M",
  "key3": "5pUv4qgkCngiLxb3YYgrgfmQbRYfQ2g46yvpPQQ5cwJerSGZGXSvM9X6oYqCWMtF5taBffmxX6kw1TCQGXk7d7kh",
  "key4": "3tBhHbPMQFwGA6ZtuTJtfHUMMVh9KdjFUpvHjT5D2FK8Eko4hpepekrMGyZEuaSC15JsSFX9QxrpfcPmWN8nEisJ",
  "key5": "ZpZjE42P3d7rjF8yPCJ762r4YgefKxy33pAtYsJsDUCmivQC2jy6LEY68LJcyF3xEFBDS75SWAAP5LKRPn7kPz1",
  "key6": "2u9CtkvJ3NzrdGuuBbRS4s6Tg9vazx2dbbq2f8GVJMAv55BUsiwRggAxy4D3AGbbEjezhBLvULmi2jGR8x1hYyZ1",
  "key7": "4qZsxQciV3UktDTeJzb6xCbqCLoTeJtcSSmhmTQ7WaijrwfrMDo48BijGEDReq1NvTb58xBaNnKACViKdid6P5j8",
  "key8": "4fYKTddfLQW84Ef2NbpR31ce6nBQui8GxZ6dS5QKaZeBna5RKKtGk8LLaTstSP1Xw7csQFrBHgpX23SFpLaGqeK5",
  "key9": "5NWVzet5cUDD36ZRmzTz37ugVcatCb3xbhSDUupwbYL19oYeckfNMFM6vaNH84rs7E3P57xDPLi9AMfqkSS38kaF",
  "key10": "BKCQcsiE2mrwT176zFvsMgd8mQqX8aSp6b59E95ePRo9AJphKJMdgsgWr8W3VXFuUAVVu5Piakmg7F3fku5BJ7R",
  "key11": "3Hi7NCWjR6G9zhFUZRiT99eMLKg4gYi58c6rRu6cqtua2NbnCuDm3Cx2wueQDk5tWg6RiE86kkeWja3PkdJH7a2b",
  "key12": "3CMrybdpDjfU4buFCQyHaFe7TnseFeaDbsQF9bCfhMcz1pXAwqvxnYbQvcrqqCdtmCsX1TYjAiNoPdhaNdCTJ55s",
  "key13": "DJMvxbD8Wvw97adkhSWJZHjdML9ESXTZS4LNFCwU3dJCFrzTo4V81xFzwE4L1ivxPMmiQTrGGopDao35i2WQDo3",
  "key14": "5KZ3jsfBK5pKonj1d22ff9eUQSdp9eMKbSLewsyAUT69KvVLzQqRSjaG7ghkVUyoQG6PzESpKteh9JvR7xRwomHG",
  "key15": "3QUf72MKEMLoV3xTK1JzqkjomA55moLREDVxYQJuHJ1neo6xKr5VvmpiBvFEEA7qtxfSbJ1D1QPFmAgnEQWPMqZM",
  "key16": "5ogn6PJcZsUzhme1ZKyPqjnmUPexaXULGankJaWuC3uDwUD8YupymerYTNHvpTFJZ48mamzahynnQxTk8FDWMmSr",
  "key17": "33GtoUAZunX9JDf2ppkmjHD1sbGqFL1EgA3P5RhyVU9NacYCsoqfVBqwhzF9krAVPBvqDvLT7K8HNJfQCqXwkwKC",
  "key18": "31A5769KbUs9crF9gFRnL6Br1evfrSdeP9uQgkZSFVpZuNfmZGEgt8T3EPDNw3EKWMDGzwyrh9LYbwUPRS3YJfZs",
  "key19": "5G2Ykjtq3YeJi5ajhCo21ZK77jP9UWtBDDYirqXEMZfxEogBgdcT6hcozyP5pmrgq83KEwCk877ZQRs9Ury7MZWe",
  "key20": "5uVi4iv5yxDP2wxdASTJPtBYSipjxFpqeMMTzL6fjGr77YrEoa1UdzduGUKXp7hm5uKzY9YmUbKrY48PsgYG26bz",
  "key21": "3Jtyg1c1RnqkSmMxpssXkPbSw4v83eHBxJFitfLDu84VD18i8RBMv2grVqYjd3JkRa7JETX6Vs5tMqqmF9D97jDH",
  "key22": "5bAsGinWaX7ynDpXtD1QsmsNWqnjVqr2t2oe1v6vgu7Qs6rPHZekr6qMqQUjm5CYqnvWRx25Ka3NPo96sLnSNwc4",
  "key23": "26cSQTWEYqJT3H5d8XSxgheE3ZjT8UG8qyxwimmXdXrsvtkGx6siMBxA9amQ3ZBFFEm5c3e2noF5ti2jXU9nPkpz",
  "key24": "5T9pouDvt9yp2TNutKdYQPbgLVisT1Tbqc4T8yACwQ1FL8CBDfwtFiswzMimio4ea4LxZkAue2qPahG8FMbQGyxF",
  "key25": "5jBi3u75KAD6ErjNsGUpP8VbpCUtFumYQoas7esxkTufgBhAHXfzgBQyfiWMNVcJrgrSyo5Uiw84hj2sCyvJkr34",
  "key26": "3a6aDtTf4oQsWnN1oTXGXuQEvFZ3zbzpB66NafXf6wzxBZgFui2ojC8YPq5wbdqnyatrKc2JKoeqFomuEXJRkFFs",
  "key27": "3RNoNby5kmTkTw6qKoJ21kkmHCR9Fwe55UGcA8AojsSfk5LyeoxMZooDwyMD9MHJ1QmYgMK5vho8UqYCiPEXNeBg",
  "key28": "KyStETCCbfurVY12WKySVRYaYjcsSjr2nUfpgXfpuY2qKXddqtYZvWW2wQNHroVSRHJeZGdgpkDzVXBU5WSmaRa",
  "key29": "jfcdnk9wrfVVZJzCTBTjvC4xjWFQbAmoD61hNnD9YgPXa2oU4B3o9un8orFy5sR9fftdnpn2wCrAoCxq2F2vB92",
  "key30": "4YojcbniX78UgY8kXpVA1treDJDmGr2BnPmr4A7iQmN8vk3RgKL2ApbPSUn14rf2LhGz9ebr4gWKg6fWqpWqZXe7",
  "key31": "4jp8LEGuDikqLEUCax9Q88o5i7A8Xkhi7w2DEKmzDGMVg6oNtr44JJM7e9to75uZaRvY3wFq1xAuLwWQXTF8PcdP",
  "key32": "5FQ3PERkfsoSdkwtQN7QGMAaZhhfthZaVk7NuTf4AhhMsiSmaGs5BhLmb3xYnamP75dnrzCpiViKbUyzx6v6N1wz",
  "key33": "672gCMkfJEUefeFHqS5SNsDUm5fE9KmPVrgwXERPtB5EhK1a5hYNEX2dttVGQKdrEYaeqAaJNjevLd8vHigwYJu",
  "key34": "4re4ENFZthNTfRpjZWzVMx5sLV4uPzsH6aSif6R7yjmSkgaUuFANzxdGytLFsxwtFoQyzrkYddy6tuXaidd9Umd1",
  "key35": "QBHy3B2uxXdBS3aySN1tHGWE9DST4TCVq7dq8JTQ1u7KUQqssqme59HgiDB1Lvs6U78fwSG7Mze8U4Wc89pRWbV",
  "key36": "5rueZ367Dzpewoz4ghegzjqxHHgmNzjQWZbjjepwnpRiWiirKK8JyUxeozLmqg21Yd6ERzfspfkR694YceCSRCjq",
  "key37": "5UkjGX1QBZyagEKPpF8GgfpPj1LJE9NCsc7MPq5FdETK9Stz2FdWva36JnikAmC9p6qk3ExC5dr9wxX9KbyG8Sgw",
  "key38": "4ttMvaZWLzXqaGHGG3Pzz3DQaw587X5kTq1WuZ7r2hBLA5Gvfs74jHHqhdypZdRhNTXp4gzSXDXs2VE5CvwZi5S6",
  "key39": "tAKbrSrSe1dJoUMJMK7yZt1YiSPrMWcepnkxq2FA1PrVBXgTXYCZR4jGSmSjEZnZ6PkLM6j7waYFsTJ4Y6ccoRX",
  "key40": "b2wKVXwzkRf5WWzkDb3GaqSFmJ6VktEPH8ijMWF7z5z3bMdxPjfNRQDdiBME788h6eHLZtZKTufo6eMc9vmGv2w",
  "key41": "5FcjHH7wV3JX3xqqqL7SE1xtPE8G35CtcPs93qb5mLPmqXWCHzGZyfJYQjhQgiBhiaRCRmtJ3dnyhPcZJhsKmqp",
  "key42": "3ipVyEW1aMpobPaS8TqdMpyh1AgcFvczGUNW1SFj8mykv8pw4yiA8Ec2eMgMcgDG5axv9Psg8LtKkU4QDgDrS1R6"
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
