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
    "4kjzztJBttXnnxKb2KckGcdXZUgSuRHZDJg9J3YppuReWRjqqveDg1jV6wKG7y49ma6XtC1mkBfd6Uu2gRX8fWPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SDoBndLKxhdFBWNLmrnCnHaEDTtWoFCrmxi7U6eUxWPy1BqnxQaW5xfaZzcZNz1Q5zCgSRcRTzW5Bm9kCTUsfL4",
  "key1": "m77fohPugkopUi6Cd1WvwLj4PQgKz8jwzc6fumK1V3MW2VVZUAQMo8vdWuxyet5cAuYNqdFGhwtrZzss9xi6AFA",
  "key2": "ACJDm8kNoaqx6z12Mnz2LSsvdwL3yjPFjsLqnr8AAdLk8a79dqWcSvjmHFv5TCmfZ8W2J5eMAHJSWjfYrLcVc18",
  "key3": "2NJCzptZovuBkecp9RPn7VQvRTPNqT72ZYDkjHNkRbjfy7xPUg8k4RhrMgt43kpRwsDZA3uAcDcW8yV1rZqDNFf6",
  "key4": "2vfaM13dsWTUmaKCiUDEvcbMbpVwBU7oFdn7NBt4t2jKrEL6Gc8NFJWYGGSjsWN8mukgxMksBF6LQSr6DgengweN",
  "key5": "3peZz4TfMbYqrSXeXsBMoGWhVkHpNc5cywV85JUiN7sVxeSzgCWwiUTbcm37m7bxgVCE8c2tYaukZitMKvBUtN66",
  "key6": "3AkVZvXmgJP7Pu9fmfgeZBSRueLfAubEjZPHQLfD5C4wJkSRf8pFMa2g8fd5GDhM3H87u8yiPZd29ZL5PCKhTGS7",
  "key7": "3ZH1nNHNjNwz2cK1qDwDuY2Nme5iJww8xNZYahBuP8fMtUTHrxCFvvwaxbgqa7s8h2m93nTmXfhMjy4os6ted6m9",
  "key8": "RhssucvaBKxcr4Di9Z3UoJfBHLDqrTpLcdRSPSueMNjH3fAqMAQoBpJTrSpcg3gKYLoEQfKHwPE92Q138SXnbce",
  "key9": "2jcriaRTajRUxkUPjiWCC5breSSHXjLVypt3npyaSfQxCbaH4vY8uMTTLq13NBmHWUmou99hkhLBdpYQ3CjPCx9J",
  "key10": "2hF15ZP5STZ5GD1D4by6AKAn4Jkc2cNXDxtLJBWvVV88DqihnF4DR3wzbBB4BpJuxZpvusdqACrN6ks9PhVcv3HC",
  "key11": "PDQ2LWBFABa5qmmnKhADuw9ZUuXaNeSMpH74X5JjSFrYm6jLPA4hxJBE2g3yvCZxjBaHDwijsAMuvbjVha8Ypmy",
  "key12": "5KYaiPfYQvY9QaHT1gjt3tG8iXz2tBzLFMWNGVKU9ZSW28k7Lw7RY26o5i4yCHFXRfyMN4cZJDPZNjR7N3THsUSf",
  "key13": "39CcqqHY29hMydvwoHfu8dqLkthTqzdhNGTxYeeXbqAqkZ2xzkRQxaxUxteiF32VHubRkpKBEcPJo5Q92XAhao5A",
  "key14": "3rss7W4qbTMWgKpuX6aykwqnYnYY5Yw36TnKDpQPGiQWbVv6Rb3fefMGWxCQFoojsZbrf5AULhCrKdCkjJRsuhpp",
  "key15": "5qhKFvQU8auYyetZgM9ptg82CvSowuhuynv5TDDJjZey9Gxpmxpah3JeyPZJyBfk2usag76XDNPXFQgSYpoYbiMw",
  "key16": "66wCscM31CbtLNrM47JRyYWWBWtXLvKm7KzwxSTPR6JYPoMWXaodMb9NeRkPFmEz9cqjcnFTdWMoNYzQCTfiNYAv",
  "key17": "3LJnmYqYTri1h6CRRhn9HsnE412GUYRke63EW3sazbRv13KwETTB4KHuEkm8Gk5Yk2tLUL8fdEn7uD1kEVxibELp",
  "key18": "nhYBypVt8YA3rPVFTrp8B2VdG4vWEeV4ZSB7gSRrvdRrJF7gJo4dfo1EXVeRyWN187148KHubFyJiPY9R7JUSGz",
  "key19": "4vTaC3U5VQU5ypZ4szaLuFGVU4C4iRmRGJpwSpHLACaRdoKQ4Aj3Yxkg9FYf9yxGSMnMnbaYjMEuwNa1VxcLqPDK",
  "key20": "2KnUmfR3ypz7sAfTWmEaEJbW3d4uEzh8XNsFfB9JhxMgKkf2ZBSQd5NH44AhftvTFFxRXiZjRMeUeJeaWYg5bK8Z",
  "key21": "4Sxvv7TVoCxeAa2jBvyauVjwEM3hZvV48NobsM6Pg3nAJY8kZmqTKajvtwwBYxm1VA46y9GH6JzNifjRwDCSweA1",
  "key22": "XhvSKibDN6HvD8Y5xwihdNYy7KFiMd4NfBJvsH8HNMURkWowAJ6sQ2Uyqet7sFwRixQbRXDFLTvZaT99S6NU2FJ",
  "key23": "2jqSGiLYoAtTyRHqWZgwgQTQ7Qi7aGFBSzMB7Aee6sj9bgGqvbQvBVZeAtvwP6ojZPPc7ytovsss1ZocTZNJSEsY",
  "key24": "5sRPK9jZTi1GpkvdievGTqAcrr81YarSbzsSMa6nrLojzf8kakS8uatZMUGhRJrEATxBk2Jh6BErrT1bi9UcdbnD",
  "key25": "2nEV9VmbXknrp5vahfzQP5TmydqCpRArfm2UNanPKd6eGVbJHM9GZGZMBYM3GarXBrPNaZ4zf1qtqVfxcXuhBVoM",
  "key26": "27EegwbjJRgCVnDSM4ptZczqoKgmgv4honc7ivdY6awuj1A2huxkkv5qpsmXFHybuqFEGTjJ7xMHGrQL8nhqwWzh",
  "key27": "4Ha64cJj7HykChRgVrAGibBf23Jut6mCjt1oksDwdLUVm7ZRv7goXkGWTnSe4XyMN4YBGcBy2EaoaEJqAtSaCcR4",
  "key28": "58BSouK1MmP78Y6HLghFoRfN1FuQMyAKepsZ9MP55mLYeqzZCiTsj8Ft3StNsTJkBLwRJTfHdFm7X27PXd8esjDb",
  "key29": "XWDuEcokLQSPr8WvfsSKsqGUoHiRinURcEbKsRybESiYGs9nv5jra9MWCYwWrQsuyS8kKz3hk6AzNDPyiSm2GHb",
  "key30": "2nnT7E3UPFK5P8CR4TR6A85Vwwz4hetNqHVwDNYMqKdykp8PfWLknhXN3GPa5bwTvtUaT6ohpGE9AaVky7bUavza",
  "key31": "9pY28pGpqcPgoJ2wAuzGKKya3wwM71dosTMYLLStCgVSU6tnU23U48xPkfp1vUdbUDK7ba5zHwX7RqpTyy4Tgzv",
  "key32": "5yyrzdn3mFyMoGQnVepqNaFNc5DcMmFFybyuBbJqws4DUP33HxeCQSaxiHCnxAvbenYrSsUbk9VfsMHNuoHp83U6",
  "key33": "2bsZNDWjcogDtyYebzhvnZJmcFumzgNEvLcegWD77SPcr8AateLn6JDyNxYkgB71nLVAid8hbQ1ueaSsJKEhwnwm",
  "key34": "5R9prht6oBHfYQY9necCZCzMBYicfoSW1fx6tAyq52xzxAKgWCCVkYcSf7qbhGxi6bfeUwUdY8hQrx8p1aEZq7NS",
  "key35": "4xbpon47vZEUtxVzs88tujXEs238aWpjWbo2j61TddVHq6PDTgES2rr8xTmWY5AcFBmDtDj9entjcKj5guXNEVVc",
  "key36": "3GrQvc74wB8BtjEXGnHeuHgc7pHExZBNeMa221V91H1vfLiQ4PKKjT1MgY8rqTdExEfpHwXuCkHmaFT531p9NiGq",
  "key37": "5F5fAN5Bqdj2HxJcQAaeTCzKsMQKskuNdByRLUMATXByfpT9uqSKJ86BrTXW3JAFEP6wJ2pRzKsnTTwrXbTDty9V",
  "key38": "4bk3tq6QFJ6sfmgWahMGTJMRpcmVmr421yMayc5rrR2XTbvwmi9dUcc6SJump6qKED4qftTYiCG8DTkZgv8LzPDQ",
  "key39": "4tKRbKkQLvBRx6eqwAgwdp6SLVccXrjr7wAUPXGMi2BQ3a4vyXeyuxDwPeRzQDzciahFizQqrQBLzMv8831MgVD3",
  "key40": "3taBeBNHT3qwEz3r4x38NP4jGGjJnj2uon9RB9g1aJWFbHZWtAqsEoeDkgi83U9g4JUkxyBZxvA4m2NzbJCkHcAy"
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
