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
    "4rXC8GYJgTNR4TdMWNGifgLVRNSA91f1xyURsuSVqZnp2vL6W4z5qRXeahgcV4EG3KeeHJpLDQk2UjR86CGmVLHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmqyDUKptJztF2sECXpuqq8oRfFztDmFieYzVwTsxmYdPcHXZXqEnAonKZpt7cSUkdQM48Y6x5AWCk1ThLqePPo",
  "key1": "4CFArz85jkY43hWkqRpZHKjW9288KWRoYfUVKVh7gF418mFZdbBM6rVbQQgw6H49jR6qtYWSD424RRT3i6wvr8Eg",
  "key2": "aWHtYMn7YoAEPwStBTMrLZ121Gn4vvqj5yvovkx9Pk7RFj2QNo57QWNHe8z2rc5EcNtbgZJarPfvYqRfyLt16mU",
  "key3": "59bEBhBvzjYeCMG4n8ysPxbc4xyu1BXHsZLDnwhA3KyUwvHFpgi5oPQYFcVKtFx8HMGqxUgJsSzyTfVEVQN93u8a",
  "key4": "2uEZgR4ckkW7htANPxeN4oUxUVdTFpiSUnj1QSUXPG9RyNkyYoYvzVLy9JyUsU52n1o5siTE5jvyyGzXPj2xVm8z",
  "key5": "2nwg4gxgcnthh9UB5qLre11uNF3qit5BNwzTyvvecsGia6wtzCJKW2w12L73Sb6Ukonvio1e6r9Y51rzLvmsTKTf",
  "key6": "2ZG1crSAn2zHcxfEcBwjkiNywWuNo2DfNbKK13YZMnmrqHiCqma1TCAUy2jA2oTRaWbgfFxrQHigKL8uUTPftSzi",
  "key7": "6341inaySsLffdByVWZizrhegNXMgxKryFDGpbhki7HfUrGjpVVYu6Ao1kUc2FjMbs2WHB4NqD1BWJTypq5dQYhu",
  "key8": "2gFgj978WXQoqAyHjFSW2bQ58cUPiKDJsSVP7YB57EPHHRs3vPNfFh3MK8GWECHtZQeEGQp2UxaYF5C3S8RjweHa",
  "key9": "54Sd5x4b3tFSdWSgVNcQRXwTR4xt7QcjNP1GtixLEcSBgrUp6pxfU5KAZQtjXAc1eF2ch8ze6xhEJPJxo7n28UpU",
  "key10": "9tL8G5yPsdEcj5rfLbLCJ7AqPMJo7oVjJT57do3STXZHKzzReb9NVJRQoq11b2CXgqFy3Gr1vtEuuEGz24QismX",
  "key11": "5TukmLDd58jRgLgHj2fTiKc7JsmnB3azqfZ9PofrrGGswt7RNgJzHydUsxFbWj7CVCebJpk93WZtfsBZweSScsgK",
  "key12": "61aPgfJNW7mJPAK52AJYkdTNtBUsqLdcwUY5q5kNntFFHNmMpsDDojKUiVvgzuqrJgRhHqsKxUunvAWTXq3Zib8m",
  "key13": "Snw95frT5yZ8BVLJXficiQNTDu85LxAMoap3crpZFi8ghrj9VdnsmvtFBmYBL2VU4F6bnVRcnUM8WpuHuL6SpuT",
  "key14": "UQkJbkgDKQrbLi6NPfAbJz8Aez3Ss1NfEgYHG8Tca9N4NcVf8RceBBXxVFg1MkzMGWQc7jhLNNWYTwAxDrAKF71",
  "key15": "2gtoF8YjXeJB9fdkWu9nusSZbfZjXj5UaD69YsiTts4Ju45Uju8wQtep7v5NBfcaLeSKg8xFGGaviA2SdYx8KEz2",
  "key16": "2dzadkF3Fq6ovkkDUEVYN6EaPtawi44muNXntKbpL1hW4cCr4DYuMxkBZQoXFVxJo4WebXmuYH7JYtTp7KXnNn4B",
  "key17": "2X7KDqnNLsnNyksJyR8HNpCB26Hu55EXVNjoPrqaXY2xxwDgmpUioZTFgDiBm8mu8Jv3YYpLiWH2LH8sSZqiYbbZ",
  "key18": "3pxcfcxpvvz5ib49Nvs6k12YsLN3Frs5xZTVX2xTndBjsgLToVDigvakg8U3Vc1Kku4H26a2oQmQpmPzcvx2AGeK",
  "key19": "3GXCBHwcVfeyRWzVa3sQgdkDa9WnNM8g9Kd6wPn8SMLYHfB4AbqYxVwMGUJRwjYjcH8xLvgNwDsCKuhqx27iU4Kn",
  "key20": "3VfWSU5AtkJzaCYFdD8cVHYf3kQGSkytSUGCUhQFXLxgcyqJyaMvK3oUwf8zcrNwiP4nn1mYTmkAR85uTDUAaq2Q",
  "key21": "4B21tN5ZCfy4MHe75TcuwBXVeEdk9Z3uDVf7xF7dCAThKP56TbSxZ271H9HMr32wiU9EXJ2dBSr7bnEwE3ZeaYL4",
  "key22": "4Wz21jeWVFNYDus9paTatgySfh7ms6NtaMCZWzdj4zWdTuQq6Nb7EmJB19ARJhQxx7Z1C1aJ9nc91ibBFwzTkKEK",
  "key23": "5ZRA9833WWuECvuvxJTGdPg3WRZDLkjpTMmugPzEQUHACaK7r6JfCEC2mi977kHUsc3XoJMNCX9BA6VKMkvrkhsy",
  "key24": "4KWXXvrWdTTWK2sJE1WxJcW5PV9vCfjm3SMpT5KraaTR9U7fQTm6yLF6xx5WAy8w4Wrm1LuLXPUo4L2oxkLMELC4",
  "key25": "3e2w1hoEALoGjboKbad4epEA7jkEX5aCWPAobnspTXMQSvyNr8r9nsk65niZSS8SNgVFyh2wuKWMCc9wpCAVnt3b",
  "key26": "wmkh5UYAkb6kVk44KfUatK9hEgy5GpZkbRBp3jHjDC145tC1gMrCF11qfm6SdDgxpkPsatEzj8KX5YZgCxgMsgQ",
  "key27": "46QqxgCEa7hFisVpHUeN8v9DWqg3eUcG7u7z4U3DWWnbxhRqGgXfcRR7XW4fhfLyLpb3exgxYfxLCzLvWcTAjPme",
  "key28": "SGkQRu7iwW2SUzA4hv4vzjPSnA8DGW9haoW4w3CzYuTKSGCGcYPSN3SxV7QmikDchKnNj15YcoMCAehd8DsegDQ",
  "key29": "4PtNVbwgQ95PgD8yhByeErrUuX6TkvdNGHGFTdp29ZoosjQN4f1ATQWEw3fiC5QmFYYHYngUfdD6piXfZTcAQ6xV",
  "key30": "DUh94gzXn8MADXJctZkUoRzpRggW6CP7xUwrXJwj2RosYPdqW2APicNHBd8y3Ps1JLJAgW3SFEhDdt4PePDwcmq",
  "key31": "23Rk1PNU5YRV5Dbh9nD2FsK6VDHqG8PPBJSG7952XMcf3cXGXaTqXJNEn2R57QWhaRtAmGasJgeUhLcdR89gFiQe",
  "key32": "exNdA7Ed7dwYgVPopE1qtt1oWnniCJFJKCALnC4VX9gxUtSpfSEEnxmgxHgC5wNkcy9KedjTek4m6QMEUL8q2si",
  "key33": "342d7j2oAX56Bn9cae4FD5pUZvAej8ifWLQb7qeQuK6g8TSTKQ3GoY2Cf4zsy4ARUUdTMe9FqeQir53w8mSSaJhv",
  "key34": "4eKHmvTffwzttJheqb8TYxYN3e6SkEdcHjDDhbgUhHaYRZGjiCtTkGdCQA2FbkwHszUP5Be2htYbvmofJWkCny7j",
  "key35": "AqUZBFFyTZwzZEKikgGHRJgdpjKRFDKtr6vUH8yDxoGNvqPqxdipp85RTmaNUa9JE825H9XuaZdPqycUinBh13V",
  "key36": "fv2ZVzBq39oSUmVPayscDqWnaTkLWM7xX377mqPj1JTKT5h8eGHQSUCA7fPeEZumSmL5EUVh7BteqM19btnnRmj",
  "key37": "2RF5ii8jZaBT3c4LgNPW4a8uuHFbBJgQDebLgj9Ahzs7SzwdtX7zoBt2JKVnmwNWJTV2nGHMaUUrzVP51wZrkCHC",
  "key38": "35aRpVma5R7S8Hf5qtzSKSnJV7inYSKQLjvM5ZecArYVHrQ6skgS3jHiDm3Xu6KxDNus4PQKsbxpH3bA7BvPu3WJ",
  "key39": "1w6KzZ8TeQ8K4q6cLg7aksZ6tN3sxhJaPrx4suPrQBBMSZfQjS3DvmdwPBaTGb1npp2ySV5BurwWasZDJFq5wEz",
  "key40": "29tqMdVXaDUs1DjU3LpPTtEKPT8jjFoXWuQ6LfScDAh417nSEG1fJwTrDbmP2RsQcXkdQDBfByKns6LN8yEnPHNf",
  "key41": "2BXLvSs19zPfKFbD5aKnfqwTY48Eb5BgxsY4QWXTo6qWCDg2ZU8BFURZ2GbSKMnwtiofhHVGsKWz3NMVGPkRtRuY",
  "key42": "33XGGSGdyiWyK57ztGYQdhZU4UW4NTKoK13CxtA5Ym2CBLDBYRHZv7YaA1xV5tmVYz8mJah5EN6bm3eYratGncn9",
  "key43": "3FpRCFoHBg6va6vdeFqZgC1faL2RKCrw2JD4QziMNQYU4TjVZqcnmgXn4LT9ZwKLTPrd8wnSquqACnfZdNzhmjR5",
  "key44": "52w2dgrFEFW45c31aqwry5XQ5uMvFQnvF4gNtEuMcTM9RLUbBTa4iptYtKcabC7yKKfQ3h4aHvZCXgLtrAPSY1DN",
  "key45": "5GXs9xwH7t5nwdocot6o4MpHKA9p2gGMDzzzqKXEeg6Y3h3jYLsUoR6hFZNwm7T6wyLfjc9FApaVeZN9c3fEKFA6"
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
