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
    "5MpEx8EezAgnnNipMBEFFHqZGQtYyYijpM3B3dD68kfaeLKHuqsNefkNkG1VE5ApdQbs2F7tGRWnDX3dFEcwe8Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5227t8szpzQ8QYwspjoPM7nqZCABaHve5apm1h2TbKo39WPCQJaew684mJvXzn8c3UzH2XrFiwKaUAfZnor6LAV",
  "key1": "48Y895aziwkBh5jZMzMbjP62ee5rZTjgGmwGCnyVWy1hLk6Tiy2jzm4SmhtZS6VQM7uZMeYeSFu969bxgEpJYshN",
  "key2": "5chskp8ApgzYxrV9XCJpS3rTByLGXyxiRTBBMJdomoWRt1d2ATZ2pSC8mxUSxFvd1y5ejt1CFekjSuALi553EMRS",
  "key3": "47CxTz8L9Pwg8czm7zypK49NLZjrSK9CVdV5UZBZD3pn5wvZktR5oDMsUFCs8p6Mo1AdLEU6LW8KBF64KQGfErPx",
  "key4": "2TLuT472Af8b6eQ9UnvWp2krXz8zivTh8tdk2Ubu3zvCqAyVFQ2VJrRHpJuot4KbRv4mHyAPr68biosgkbHHCbB7",
  "key5": "3u7wuvRrg7x2kBtojqvSeGHRhLqVbP6JDNvZMpW7zDveXohJ61hbAKoJ2t8XwD7q1tGqHzhBFE9QbM6N2XDy7anw",
  "key6": "5eySvABETSW72UGtvThLpLcJW24oceA4dUYpgRLMrmrhFpyaq7wVgswcq8sJFWYuqeuva9jAkA2n4poD1eQ5Xs4Y",
  "key7": "4XJLLc58779SNqrAgHh5cEA1Bkt7qNse3ubqifCbnmBG2fDRCqEMzM9yzWiqUhxMNTEZ79Bf7wgHTjBHgr6TdF84",
  "key8": "vjvaX4r77CK5C7LWWWdpFmA1AKF1SvHCEfFXfhM6tuR9XydRErh1meGC2AVZq4jX3JLTwC77TgPzCK12SXwudQN",
  "key9": "5nS3tBLcyygPsDWZ223v2Px2y36pvHALvNTD22KqBhK2agaVJQYXUaxU49q3Y2gDF1QNWwjWPTKCprHVY5Gbw6YT",
  "key10": "oCatMMK3vS3GtVHvQtRpWL9dqXZ7LzZgCNiPY4rqFXNbxkVtwHPuxeniYHkJ8Jtp3WrTt9je6DNybrw3MUerpi8",
  "key11": "28E6EgiMvLdsNrAQSUHSf25Mxi2rcpp8LdLsc4g7QfT7EKKpauoQ6KZrA8FoNTm2fiVpUb3setAQVrkXRjAFU3FM",
  "key12": "2C353T6xrMZ3kjrYnbK7tpeeao7vZ9N28JjPahX95BkcJbpcgc6kZdegjHad3AoC4VADmmSXzEpQ2a8WLGBxuYKL",
  "key13": "2MK2anKubJQkSZ7CyJZivztcRMWjQ8HzqML93aZM7AqsFCidmd3ZjmrxwEV3rjv2o7U2sKPor19hwdyrxaiNXvBY",
  "key14": "4BLPofhYkuk5jqpwot8TjGwSkcqp62QJ9YUaisntoLCAgYHuGedciiSu5UeWLLYF2Ljyfa6cZvHNPzw62YqUbNhH",
  "key15": "2Y7BD67Qs6dzPGY2Yxpw8pzrr7MBwKzGeTYxm1iHXgM1d84JxfCQKYB3Jy8wXprzdwfyS6fxxgFqGGF9GFFntSXd",
  "key16": "4Jf5Hh5bbK7vDcxn5AkbnJz992mthXj52LBePDJtmdCZvyJZeo3qa9YRJYwhqJkp8x6WSpXGnA9RX1jmyeyJeH47",
  "key17": "2noRkgSnqPvMaLv3jZh1nGsKxwUMBxKSmGGE9WjijME5VyyuoGst1kSHUSVrFvewoC3xpUtqwkG5k6YR54mMfAeo",
  "key18": "4wLW86zsnDrcdDCbSQM8hWGwczbNzZ4JUEhoLfND1rmwBSp9dc2n2Rpp4CMN7ypVfmTpqB8gyQxbYkYaiD3NHFDh",
  "key19": "sLgwfHxoTjzM18HbQAbdPLNGecEDxS9Jy8uqXqvJ5s5QAZZkVCf6kkm2AS4ok4BdhcrRYiJiPEidS4DCDZktpZw",
  "key20": "P798ij7WdBu3eoFh2L46VvzM2NXoDiB8R1QvKcM1LF9aW1trUcmhxER7is14KwTCbYCzqijCMb56FaKpTCVcBV7",
  "key21": "2WjFTim2Y5jmvWmMK9xi8vzqCbqr1nuDJo2wAjdwXLp8r12RAPpKPUpU4ZUyWznRgKFSEwC7uushotiD7N5U3jo7",
  "key22": "LVAoLXpDecXeCxPw89BEu7Sme6xWyeXBtB4UM2vCy3HAJ9BWpcVsmg4PwVXByvfkQuiBs91bSEr8ENN1GUhMapD",
  "key23": "3V4N8MVnigxq3wXHzEjK2spvN5ot4UoHJcAckyXXnnzESCwcaNjJrrTFeXLXdrzvyTNZFd3BPGZKaZYnaS8Rh1SD",
  "key24": "UPG7L5Hs5dorAtbeG6NSLg7LZH5Ud55axyDcwEUrpMCR66oVe1Gv9YztjoWh7aHTGGegaBB9WtckCku4o8XQdRX",
  "key25": "pbYyeGAcNagP4m4fCW8u7ySJ8w7RAq4w1NZoZ6DKuLyZNm1j1Yp74P1UVyYeELW1SWkEdMVChazfmuau6eUHFZP",
  "key26": "4gNYAaXw8usJWNSMki6KqrdzRtLDZsmzA1RqDucfNue2otsbBmNJKeNWES7mvKKTme1xmukjuAt4cAj1QGNLPp1n",
  "key27": "4ry45K47msKxKdYuH9mVWq44Kjv42uR6pa5kh6XXcoD6i1R313ifuShgYXCWzbcQRQ3pq26phNm9rtBnFgh3JfV3",
  "key28": "2C5gqq6hAYNHfznfaoTQmNkns1ZGe1tHio8HhQqyfZeehqF1kHHKrfCQTxzog9YS4h2bBi2W2Fmg3rvk8ha6TUQ8",
  "key29": "3FMq9gq2jwfSdeA2eBpuuSQgESQFoaAr2xvKfob5uZUkRUawXJK9WoSsH3xyeVtUFEPnNPgx8Dkwpu4uBqsDLMpN",
  "key30": "3PEMqEVQmT4UDEH9mhEmN8bknm5Zxs92N7x43SN2vebz1qKCMjKcc6MFn9QoTgN2cc2UJ4rm5skxULkPrY4rjDm9",
  "key31": "4zchBxaBqdCgbs9ptKRdpKLwSWjDm2uwjgKQ6DpmSPftGZYnnjg522gHc45PVzQ7d8wtUAha34cviWtgtVC5ayYE",
  "key32": "4BdxtjH34t99rDy9fud9iA2nSozkEimtTAprka6Yn3DMQYu3C622UJwVh5Bawqma1JmkDXRyqMkpW8AnhEhzCgCK",
  "key33": "2nxLAi8R5ppNx4pXd4RL2RSkZheia7pXf2ooNtdncBxJbcNuYw2QHy7EKTCAT5YMzqRDucXxpDHNwC6tKRsX3Dpc",
  "key34": "2nqknBt4PJ9ndMriDoyD1bCfmkDKDeVuBWWVF92hur7WgG2cJtEKBy8EysTVqvH46ZYDeEATpAQxb1ycnM4MnxqH",
  "key35": "36NKRtgWiMAM67fCdDrsNetg7Dsu8VHioHzj15foKNewWHsXdftBjnS1EL6XWEBPXn8CUHDiTZVBZv66XRDnNMVq",
  "key36": "3BoZdbuRoHwmByPYzWX1ERCBCHuzRx7nghG1KDQQLuPgDvneYhmRGXMZtZwKzsYY7aTj1pAfjmztdkBAQ5AB5Hq6",
  "key37": "46AJKhp8sE9wo2mYgRBdFJFLfmJuW9imFRi7oHTyptfN6taCRwRR2Rm3R63hAUAQoWSiWcVwQCxZUNmR56xRK4uQ",
  "key38": "4roXQNgyJ1qgyvwCXfajGTqE4bQtsjQf4A7QtLMKoJiSaWJdSzHNFreY6tAnJbdZSiCgUxgedAs8yGPjtnyvHn7q"
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
