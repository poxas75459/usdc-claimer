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
    "44JeHZFMEY2vog2orvpHDcAT4YFTjD8eLjZo1cH7TsssX6A6m4Cyx4f7ubiiSEcrRAQFBYUVpD1rqhi3RgnEcAVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeZWAAivxh7zv7v3Fu9Kaa1CdbsjBN9fmMCgLLhGbNppu3fsXntrGyDk4yKCTz8uBGV1vpNAR9ic4iRfXRKV7G",
  "key1": "63So9WHhYrcUb4CFdw3rDk7sD92uUSLLEKVVxMPUUnQVyJ6sQ7aMnx3nGkpgkyWqTT1ZJ4q4TfZhpQiC7JBtzbfR",
  "key2": "26wXQy9Ee2fmJ9Xj8BJ9f9VsaUVAugGmnNiKA6EBHNN1C6Jb9TTYqbN1pfgx6CkYrYnhvqy1uZN5jPqmULBqyXyL",
  "key3": "4WRbtrk53Rhx56haSdRUPMEnt7hdBYQ3X7aRPb8gyFKV9h5AjBbwcXdASdvqJZcDKwtBDM7WY6SNF3fZy8tWYtva",
  "key4": "2aim6LYUFrapRp9kcWRXBhWTHfUzkQ9MXgXb48LJXKE9G35BzTsYKFMe46rshogNnK8dBFNC3kEVkECCryiyFmZ1",
  "key5": "51BKmBxrYAEQ6fMj5ZoG6WiXQAbLsVjr7sR116F2ULzHiJjZ4zrX19asZhLxCa13sARY72N7GXRuqYuMxUJHVw7u",
  "key6": "4DsLjQUsWL5evm79pwcgvPyns9ukaoxGfwPtErd2ZDecBcXTWChoCj7N4t9E3Lw3319AuFMaVpAzHe8QoX396yPB",
  "key7": "3ckWycaaDWDHvxXMFxXXvZsMoZr2RViikSCjxDUbcAJkj4toUE1nxM2x2fCdamxfYSFMh7CXghsuwPrE1R4ugQex",
  "key8": "58h4ALQ6wrZHkDAS1Mc3iey8MbnjSrNHAgavSefwrhSoSynV7oXu6FBHYhF2chCiLxXJtAojX1D5oQsdnwhZyWzr",
  "key9": "Dj2Y24pJSU61nd8eeQ3pVRBWReW6gS7zbr767sM3sn55PipZ1Re9e8pE2dpLKYFNU5MbcNWm6MSBwTT3RWp5aMZ",
  "key10": "gqMHBDpgo8F4PBB9w2MuNmp3kYQCUvGZy8ny4vCaAZtzJKaqHAPrLWD1GLt1T55LAhfkZ6uUC57zenTCdqD3eaZ",
  "key11": "4XFVJT3afk5VDz4HE1RVPV5vVVBHJJLUHeWAq6cVbLu1pEwFYgU3yScQeeYWkGZYfvEqKjbGiog6F9tHqs2kwhW3",
  "key12": "fURdGZvmuRBdp9azg5naxb6BqLf4R2tQfXcF8Z8Z7gjE7ZtwerTYP5RJ3qXGeVokLtzguTuDq9AS6t9dfxAcu7P",
  "key13": "54ccgywRtJij1bgiGkbJJNjh9AX1SpyBBNNm1noyXvhXdfua9pLjkiA2d7kv5sVJP1SKPHn2fbZEzEVFpVqJsb32",
  "key14": "5eGub2UUZAsxmuau5yNxRjK67S7cGvH8k2YqX4xAGWikH7ypSCNg5XX6P8vJT3EKpVndcSevDg5GRGvKWLLSEZ1N",
  "key15": "2d4qUwzGRyMdJSf4Emvf3eaPC3L7tX3Sz4k3Wi5gHo6z4rKZt3DZjCfCJXQ2cDY6otdZ26PSVTG5R2mKR6HhvKs9",
  "key16": "p1fvrJermKArey4SdRxCXaeAkJKPkXZmWt3F4pa151LXgq1tSVN7RaUZ7UB63VmbDMwtCQM8p4Wya252QwASFeP",
  "key17": "3wKS2aUrgyMUKSqbz6E2Jmn8XUq8GdmM3vq1oXpd4saMhBxw6DntXJUAhBTRMKrYG62fcBeQKYKCXraM2kGpkLUv",
  "key18": "2pS7cTQbTvVenL4J3bFy59AJw9AvGxsco3VxqGRdd3kCCiGCvp8puZmkeUmTtYBRb3U4DmGn1BWDXNjYaQpGqyXR",
  "key19": "2Q89yuetWcLTm741CJsKgpDWJk8XgSVC2CbFjcAYhwTLWvAMfpnqfoasrUMWGzaK3by2icWe3xrBZZD6amXQUrT9",
  "key20": "5V7szDFGJtL6q8iB3zVdr3KNb8mgLjhWACx5rvqcvmf777qZXLsT6Tyi9HKKz42q4Be32vJSgMt2KSgf1JKdQbL5",
  "key21": "5yLH4UautAn1mWni7G8goRsh8Dij7concrQwDv5tbvdtPS6D5MGhWgkxAaxjhLgE24d6ktioWkgfG3G7dTgZxj5F",
  "key22": "2VtqwWoDj1K1mmptiiKwmFoNMsDwsPM8X1Jn5qRjVdEBQukyAMNkpspzTFXSptGnGZH2sXrdDuHaBGDbr8Ehku4k",
  "key23": "5GfqQUP6UgMHRt1c9cBqnNC6fy7FzpJyNQC3cPzrshZUy8V4fSpDohYh1wyZD5foJQQRAiurLcfnsrNUK8wZpnie",
  "key24": "58EG4DzqxWcztVHP2ds7gZR48naGYsaaV6uiwvTmqN1knqZGp34DbLthosDPry6P638EvRMitseGE53xqU8J8RzH",
  "key25": "3LwpCAui4t1x8vkEpVTswYq9kg27a4N2jLh3EzHgnGNjWFPLwCpkxKe8g3Jinr55JRqxp7CkgcSLphZTu8ZhHyyf",
  "key26": "DabAmwqLjL8ooQVVUzdvPwnxwVsRKcWLpR7ktCgq299ob5Kd6tekSyxqU1XykAivwpcTv8dGcgxZc8pL9pZ3Kic",
  "key27": "3d9GUc12owAFQsH1S7QviYLyeDQXKcbfeXSnTDpiZ12zMKtxrq727EExPmNYJHKSkDcZHSQJmcCEYCKzertPGrG5",
  "key28": "2ZjMaUwd3zAMMrpdF7ehreAGpPM3FdtXjyPVr9pSc4v1xEHYoseRkqe1X1K4H7djg9cY7rbf4uULzCzHqbD2NYcY",
  "key29": "3oVzweJsvvvR4FQpSGQ6iss3dFknJW9UVG62dsnoaAiZYfFNUaKskEhh2eKJJjveaZu6vu4SqUD5MFvCwbR5wf9W",
  "key30": "53GkMfUxdCiUFX46sJtWd2EucWKLyDbps88KsJnQXmBd3Ed9QTLxMZdPCMAAi96buiTzd11vXLHKFazLZ13beeJ4",
  "key31": "1Re4cqLusRFenemkfck2oNmhE2ZMPzPB5f3obkne29g7Md3MEUcP9HgwSrq2uWubQmTE46jmNbGt6RfDvC82xQA",
  "key32": "5g7LDZofmudHevWCBj1fjUct74tzPD5hQs2PhhbxQJbwi6XnvExxZCZWToWwmYqSsrNqAh3vDUhDyP2swxFWG8hz",
  "key33": "5kD27BKPVG1hCxMsEvLS1MPPe35an8gpcNq7S3pRcA14GHpfc5FX5FNCwKkkzcDrHqnwNaMrLutCC5soJS6Hzsjs",
  "key34": "4qNsAiaYqdtNivnCSNgmPyVZiVWy7Mu4vJ574oe5cx7DFT71i5MmRUDGC8Zr6q84jHw76uaC9nVDrQAJyftRniT9",
  "key35": "67Rh5SMPGitSMLoxff28uzU8aRTKTPJNNuzhLf5RtL14Cj7bZqNaVMKV4Upo61AFXmRwp6Q261nMyp4QT86cK3bz",
  "key36": "X4hApieCXuJfbo8ERkJWyLDS2qgPq6inALsYo991Rux8VGnim7VLEoSTwa91H79NTX1bCJryrgq7RSbe2TDYWNe",
  "key37": "5WweXxQTiyBHtxbPjmoqpMN4Zdcy91xpgeGmTbTgi4JVCdLmkar6A5s1DXrdHK4tJV8Q9XjpM3beswGn3h3rqbt",
  "key38": "QEBUkbJjEhqvYMPyAS3HuK8ajUEfBTHWUYczm2cqMJp4bvNvdLvnkR8mZPUav27jbbxSdbeiiufR7b9d8FMJCgm",
  "key39": "4Eho3bi4YTEPeP6XHbpFjRktH4M7nvF4xskRGDK3jVhQ4PhF6mdHQc5qSfvAvTT3fTZNf1qyr4i2HbjnuGLAd9KU",
  "key40": "4ucBknLgAUHUpCDsCWKCegCoew1icFbTDtMxE8X2wFGGHGkeBv2GVHwNumimBHMQF1911yf8A7KxJYeR6PRbx3WH",
  "key41": "2ChQ6uNEKLJLG2aGyLVKvWhniAHs7rEVSS2MmNaKPWKrrHyoM5vgLuaV6zpYaTjUrC6VifTmpt1qnyhiXS5ddU6G",
  "key42": "3hyqTCH22qmBsGEqvZxmRDdBVQkFNhyo67dB5HTYn7Sw9fJakYMjTCtejhw5dCXhoU7pwPqKw5qerbDupFsHLU7W",
  "key43": "2XuH5v9ZZjxgL5RVTagmVPsvTx9WVWvvuavnQDRhdG2GXs535juUPaodzcuaXefopx7bABhAxgvuJW1dm9dmStrB",
  "key44": "46DpBWTvnkm8oGrkzGiFaDQaBD7VWiDfMGXNxVmEVyGsvXdRnT7aaAohnBT4Hc6AFZ4EUsCsPswXN5eYeZQvyrZ5",
  "key45": "3deTS2gD85RbJLrEqpHWXgMQ4CkGGeZWxEzoHZ1TipHBnPkmf6YZEzN6A2zk5yjKVf2e43WMFZrpjbPSvZ6RSQNd",
  "key46": "5dgGoXE5S9KGot8NUxhZbiqXnBubb5gV9SKgHD8pT4oRNXVCdPHm6PtfGwhukMeKTg9cCrNoERNTMMfRNfa3QDQr"
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
