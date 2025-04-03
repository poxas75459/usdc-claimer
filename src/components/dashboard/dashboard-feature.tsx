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
    "4TSUWUmc6AxJodcuLTzpbkhMK6oJfSxAB3rPixMbzWqogf5wgkceECuRNvDc7ZJpBn43cViUXDGgF2ShtvmMqGwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLpdrztv7a42m5tWuVurunsyxEwPU5ZEPZcU77xy5JicuQG2dc5vx9GXJgmGqg3NkQ3k556eHEKUtR8bTXqyWHV",
  "key1": "2qzb9NB1i5PFHXy38vgrot7uAo2wAmLsgbA4oyHAn3vsi3yopYtVkBhGXjjbBga52HPfk6ioALG9U1YftwGxeR9b",
  "key2": "44QMpjE5WN5vtm7SrpqTVsJkbEZyRrb4HUqJ8TVCx1BRmhdcGZCx1K3UswnN9AhDPqKq4Wnji7wo8mxk9Kqcz7JE",
  "key3": "28X3P7b2AwuYhipZJZ5Scf42A2WgBcp6NgfPoKcenmBQtmvh8VpT9p97e9EU6dEkEHaYJLXdqE1WL2ms3cpSS56U",
  "key4": "5qQvvTDA3chH2UxYGpxoLCd5x7LvMoCnspU28B8u4u8RrmV9wnfvpN5DDkNVq39BGoES8tyejW1X8jnJXvM8Lzdr",
  "key5": "2JepiDgziA6ANw34i7qsQ1sTMZgsU9MJY7q2PrfFLTEiApBWHHQSanccX34zxkfRfjdis8oyQWTxxJQCfyLEq7yN",
  "key6": "3Vwa4WZJy7NqVpumNR3p3cmfcjsWQX5gdLBbMa2Eme1zqbQPnX57zugdBzVqPCtSCRt4xdHZ1MDMXRAAnvZdQexo",
  "key7": "2JwmYPw7mi7aDcYywGrLZQAQJsnDs6Wmm7siaZb7Meg1h7LXHsoMjDGHEyQyVFuHMUjA7JUNiBxp3ZLUHxdzbrmr",
  "key8": "4DP62BFRhrX6buGvyKqD6a4pUUgwnmJD9GsxdAzkf7a3mde53dewcpk478DXaw3NRHp6FUWDhq3CxAShb147LTQR",
  "key9": "9MYeWF266v24ZKcJbgP2sCAMsGFyhYhARDUHAievjqVSPTPP48a5Ni2g1vDDJmCXJTigcqD5Zp84fwwRBsoaMWK",
  "key10": "2JbSEkVjeyS4BT57jd9NkpMP8cwu59xBbwm3uJDNdVnYR8rSGz5GD3ZpbLzhXiPYHP8viajvRwGMevSqp7dQ5L25",
  "key11": "nopes3eL6MvpKFZjVdskTWtwRXCnx269UVN38FSEQJFgsjjqDDm3bZrWB9KDK5YvbwnjfN4Ao9tRxFGmcywRVdn",
  "key12": "4HgC1AkibQ1RXY3QLm8MHB5LFTM6Xkmo1iJP3tFTAxaJXfH9cYvPjr6Tt44iDSDKuGSf5GGyStifnrqbhkD9SHFd",
  "key13": "2EWmWb9z4YWTDNmcxPH3wchqs5CuEZYgcbpGHm6F1KqYWwtnuUSi4u7HvE6d8XQsKMa7VBWPNESZLCLcaaQ9rkQJ",
  "key14": "53Lu6mVzja5WLSBj8F6xDgujhcpuBYJa71ep3iw2pnNC9gU4trUA2JQ5z8Kn9JLMEtPrs1DSsYAAfARL1GmrRkVV",
  "key15": "64Pg68orzfrwizDqGxqQ7K4uBJvNZ1dwjyPs1gbg9NWtaDcgdMkfjqBgnwTce5vXRGTGXW5d4aJAs1oySmXYUHMX",
  "key16": "erhNQgSQB8pYzVFjJAnTqsnXd2d18siYStfMZrm8BDbuBMGjYdXnUcuhuJaGggmDfgt6NP3VutgsdUjDuqjfpWC",
  "key17": "3UMGFwuu54ZxXwcAevHtcvaNDPqUZpEHxMtLgcxkDyxmGYX5AVz6LKQQdXZ5RGFfuVVNox2VHpoaA3UuAUMu8Yhe",
  "key18": "2hAF3zR6jydPw462vdhvRqTUqK98Cscyoesf28VP2aN9ugP4BRFxT4UNnVwvtw87kfzX5DACd3jAn7YXuVgHdeP1",
  "key19": "LwcuEJJ6QX5fPpFZvj7CLaQmhoTGasdFNw2TKEoYpdx18rBcXNB7YqEgrEkxy1ReSxT1zan9cDir3BRqXCPxXTL",
  "key20": "LoWEedSLnkNdtdpp4yWETPCAUMibh7tLr9FSWXd9orkppnddmGR5EXQQ41Gv29JernzmpWLRychfLLEVvTUctke",
  "key21": "KPZMvDYRT8KBXVLAHPSmeYH4Hq2bHxyu2etkM4u8CK28btEQ6qsV2ZLs5h8qjWdgY2J9WDb6uQu7sVhVk1iGEio",
  "key22": "2JsnuUeQdEUzCA22JzfR7qWr8RKizAvnbkCwRaMar9JWDJfLW2BpcD4JNJHEnMcjPxgCiDymFCCnwMciwEaxfq6u",
  "key23": "4JcHuiZXBnjn4pfgHTRsgtL5Fw8dSnhLsGFV5WGCNvZCyGjXUDGNXHXEpa1V5seZvDQ4StDNPfybhRxRxNuic1AV",
  "key24": "4XPKKQ5mueJ7kjp1gNvLVnEiVUw3gkUi5gRW6uKNGsXCCaR7CSoLWLtDYK8cEmNEoHmG3ynkCyz6ksEJpeDpcBSj",
  "key25": "56VJZHD8JV7xpZ3d3cVm4shhts6FyvbMWv5u5gMMpEeCq8M95A78PgtpJb2QhNLcWrqXvQN8wS1kKxd9wqfpKZv9",
  "key26": "3CjvUBmVviYyepgvnQ298WPPFpSm27vKABvkFPN2vsry2bDFH8ZqGSsMnuE6xaEMHU2PaA7b17ES8sSnXrsfXk88",
  "key27": "R44k7UZ3tNoMif7SQJKxVzCErc7vvaGbo3dkiF82a6AejonEtcWmr3mbLzZMzqxPgPrBY9fjsMYxucwqF1wT8ju",
  "key28": "5Eu6JaxKe1BQ9huGoyuuPMUHQUoLa9aqyxCaLL8xmToHhBDbo2S6UNAgxZK5prdJX6DfqHc3bZ5WjVshHRF8meWB",
  "key29": "4TWxRjKi4QfdKkjjbNpUywMzJxNM8Jo5cvDVWfLGfWJb1Bp3wN4Usq8sawQXBWhH13K9uBxTGoqseH8NeDFFmdkH",
  "key30": "3NPdGMnyc4pvVMzcged3rLLB5qL3dbyFwy8YM7SUAZk6ko184pu9d7L8morHPzQvnNSMU9Nu87WZSrRHXNQbA81e",
  "key31": "576DoQeycq5FdcAP99whVQUXETzqhNUeATb7BgPhi7coSXCMThenZVR19baJsf12coFFLHWENFzRZSqKTbDnrpSZ",
  "key32": "4NUch1v42s1N2oKX23GcTLxKqeVHR3M91wzgSn9nKNG81jkNvFHYhCfhogQdgTz6xHuQrJr5x7quKy1sup3pDJch",
  "key33": "4dmyxEKEAK45LVTt2TTkHntRPeiSFsYop6F1YU2VZMmyVyNc64pLJqJ3TYe7L9cyY11Jc76kQWvGFrhtJuAH8c6g"
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
