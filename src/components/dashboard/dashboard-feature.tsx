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
    "2oMQiX6iL9oUxkqDah1RePhugfFovRW1snoKvzvesMMRk9EfmaEdtRb7MXFeTBXURfGzVMqMpb9u1ze98Xg7gYGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAXeahWSsY5cQfeYuZyQaBZ4dpHxKZbZudYCF6afqCGBETCjJDoorSKqq6jVa7Fku3C2goZsj132VHPwQVNQvSQ",
  "key1": "fBqumPknxTgcwbsASC3fF8DXW42BZmTNeub3McQy6FcdpxfevPEVSRyFLZWx3QY1sNLUchjoU6strqD5mSCMx6C",
  "key2": "62cwFRN2HpYQL4YLVrHjLbH2X59xJiurfSZwgktCaFiyJSuXuSqUjSHZUKS4oPjYmHW9R73HR2RpDhLg7GwS8oEy",
  "key3": "2hB3eAsvCxdnkATMmYKrunm4Kzw3xbwW5mP2Je97JFT6uaHxtxUGyaJRuhRi3vDdx2eSj4EcwNvK9sFaKwdZA5dK",
  "key4": "63x2Yjqsp7zAMc8huJ6K8rG8Egh9YVtJsAY7f5atP4BshgKrjRVa1Wds9waPjyfTGB3EYa3oSyGsbJmVgksn1YGa",
  "key5": "4ZoResST8E2Sys4ess9fNahTgffEB3p7nPDM1WMQcPz2VrzisB5eGGvzmrWjWXaXc5ne1msPLvi6pvRUtbZynNmQ",
  "key6": "2xjzQZ5Atnfcb35m8Wjm8KFG29JLfayaqhXKBnCZZNp9A4XAdxfvrNrLitZxaSWEbhzvNrH8TXBDuL8X8QkxhbP5",
  "key7": "mTRuJSzRmCDnudtgSStbBTgUWozSdCq2cZah57yVMEXpitrNwGbYdWZHkAdPQEGMAtBKZQRbNYBxRtoeowX8Scy",
  "key8": "45cNFNVhwuWgCG4E8VdsNpLiedftS9a7UNc9S6hCEDomtvmwRoWoeDNMUyQiE8wGJp39hSZQAEWjy5Ud7iCNCM9W",
  "key9": "4eE64ypFBTqHBMQ2hKpeLgSNZf539n5owmznwLHjin9XsjW7jDZAMRfUdpNheRNhF3hZenEKoqbdZa7f5xS3YSpo",
  "key10": "3N3szVPn7Z9CE757SKYVqD3ww9Haja8SvnSSARVEuJVyZCUzaBeWwk1VJud2bXCdy6gWDW6EjgqztAUwuzmVi486",
  "key11": "4WMXN6x32571i4E5XcDHzy9WFsKDRovUDXNDpqV3FtDcv17bpRpQ5AzBC5HDgyKmNSatQUUysBZ9J8RGDVhoVRx7",
  "key12": "5M1jgUsJyscXayGAqo23tbbYE9JdEgNv8rMbQwcjcDtEHc5aGgiCiRHu6w9PFMT8w3QC5p5P53N6n7LP3p27P77j",
  "key13": "51EnYAMJRXSMWphbc7FX46UGUcUURssgVzLDoZFa1bauPu6cTvwCZ38wssJcSh4833f4U2FzGyQmnNkHBJC7tq5J",
  "key14": "e9f5ue4knQo6GJqpdCpmKsLK2JHDihNbaa1nL7JoyWCUngsDWFz8v2B3UgVCaHtPfLSvAyzecfuVbgtwq4FxXKK",
  "key15": "4hE68CHQmAZ6KNUkAXB2qzaCmfFDdn2TJskhHcYmDxqtxkHPjJur4XQ2VPFdx2s1dntqxSM9wKGNcwpjgCPsXZ4R",
  "key16": "2f78TKGBZh7YS1ScxCWA2bf5JGvNhBEehxBLCgNU84qqZUwPDG1t9uMwMMnZfNzYsHUUHYuSsuQWZHFHVwW5JGx",
  "key17": "2mmHrdq2qY6E5iidptkAzKXXMq9ABHY4USzQCEFSwmupCouVA1cwxh7oacxeE6JrxBNYSXrjgKcan6E4Udd8r4H7",
  "key18": "3wp1JXDNRxeuwK93hGYz5fbhmQd9FHqzHUXJME62VJka18pgTm3jxCDvmsrmTJ7S3uFhXmXGz7aqewwTxvwFziVV",
  "key19": "39HxcZr9XvigSH227ahqo1LYvJbMsn439KaoELN517RjPtqUocuGrzDKeeq76ZPjaAbuYSAaX1VsbrfLgEb91ERF",
  "key20": "58HWMaQnv2dioDBoty6UX3xWwo62cLfprMwTNQLCrtY7sACVoetzEEseF6z7STbvrVNE3p23U7cxghAnAqAYTWnm",
  "key21": "5pMKCcRdbQHeKjBmNCSPzP4FYrzXZX79cTqKh2iCA7P52ubHXMRToiQAyedS3LoGbjeposfyurGSqjmbpyCQXBFb",
  "key22": "3KF6UbspkzsTfD3Qn1G1HVwBUo6bqABdvKSrxvC5QKv3YGyBFSNtvbcc3E4p7us7chsEicZxAVS84co7ev9KoQ2v",
  "key23": "V7qd9kUem7n5dRmZA3gHg5q5WwtRRLfVquY6oGfp69YhwCF5ns3uEVepNbhUK8FcCx2ZqARqXLVc64ETmxMNEMB",
  "key24": "57JUZkZvia7QFcXsF9qjWEGDHZ7MAFkdZX4rJtX3BvDwjHi64cX3Awxs4AjAuZUZ1x8jjgdvqwpKYTaHTjTSs1P7",
  "key25": "EKBxy58ScmSkbggxtjSJpL5xW1mVUEqyXip8iYd7hwb8dRCYj8e6HzJpC6M8LYTm7EiWDYYxfwV446uZzkNXiwt",
  "key26": "28vxJFy9ThydWefzxCWbdFdvttPUjJemF7KfaJ6eU5tJq5fz2kGongN1USPPG5oYftwzKkmR2LgvvuPBVSJ7SGUL",
  "key27": "4cQQ91xGEZg4nWkxfbsYYWSNykEVBYC3RMtLbQ6qb4CxhmTwJfVbexvC6d9hk9Fab3M3HcxTkA6EQV54xd33tWNT",
  "key28": "zXxiZisWCo7tt3wX7N6aDYspE62M1d61xLxz92LG2E9EZc5cx8mt1CGyXP6EvC4rLmEBefSesay1SPfRsqfcWiE",
  "key29": "3k7c6G4228XzCB4vbEYe5BfbmDZiEF3nLJE9avPMxdB49jLGcgMCLx3Rbq2TXSh6j6bDB2naGuYVKU5zzNsFAsFw",
  "key30": "33sHvgbemE4bxFKKFAMs26ayQj7gdwcqqNyHhQptvYQeGi8CngEPiBsC8psoxBdnW3Xcy3tvKLSE2E5jjf3J5Gwo",
  "key31": "2jjSnoL8YJCmFmKHouVJJtdEmY4QjvYACECCFxVErqJQq6cpPouK5wa59LzjB2c7Hc3em6Jd9Ut2RRZPvjUsKxct",
  "key32": "7axLwx9pBcgUUqmqCzU6QNCn4E8xN2qxpRBf87v6ghjW8DUZ4JzhDAEoXGmag89aDKQYhymHua2USHfARag5pP8",
  "key33": "4m2VWBavNfAFetaQorxcoYkdbHs9ushrHqFmGLqNaadZJCGzQANsUHZcsjDninspXbBJ5J3x9rEzMc2qwJ9wFAjr",
  "key34": "4w4Y3KXgFSAVUyocFM2SaeyLUEayHSHdt3FrQ3mTiRKgtoUqN39KgHDitSCAhyXZGoncC7kU9VmTPe7NwccPTrtz",
  "key35": "369SqGTAnK1Ed7B82sZXH6sSGuWY9b4m5mua9bi6oWv95KuHKVdJsL747gkgAqWKpGyP1coQTfnjUAo4ufngc2Li",
  "key36": "269Gy3rStfQUNA2UxENAhomjp9jQ3iPpzGWvJXoE4GRjUGFnRvTaNH51zf8XoYvpkEbf6Y7dBY8bLegbFMTe2BRP"
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
