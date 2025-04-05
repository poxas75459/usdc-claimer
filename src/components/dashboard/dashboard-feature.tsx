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
    "4ed8L8Waxg1Fvf45hWBZeQDy4AioT1fZcJQa1yerp7Yo57ci54rcUBcYKao2CWbuRL8FwrAe5UgZodFcrvTFy5xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AK5nbcP9WTUYonJe65ob8PTwd4EzYa8vX59qrT9FW3B1jj6CPYmhwhvMiBPqCRdgEkvEM51cNZ2VRuYACB5uegj",
  "key1": "5h3P4xUSDmep5o5et2vqNwJoMtgi8WPCKYYKB6qGRYYE6GzNJg6mjbpmeRdRMcq6mPZFMoCioiqrKHop5jSgoPnG",
  "key2": "yh5EoQDSo9hvNoG4hRyKrESAHnBNujGWhgJ4RbRjBCjfp8pKThRCSmVcYr8GQpk4HBv4RKqsV1MN7vp6Jb74Dap",
  "key3": "2CeX4GCHaiHWmqxG1ZVPW9JvWQJbVw3NLpyiFjuNFz449r2G8jrtwLUuCgGKdxN63EFJNegLdcoeTseCLDZyrm2Q",
  "key4": "3QFBXbvpMwzroPotapVyE5o53ktdG2AaSabFfN3xcM6y8cpgPsXCcsj6YAp5iJaWyASVvqGpGMFcBUCCbPkdvvWU",
  "key5": "5ixscPHxn8EyUWcGaXYaJH52nTdMpKRWACsXP4P3xApG5tzHSk3MbWDKZHwdB9FsfUGuZyJz5vqYWwCbtYNEYsTR",
  "key6": "2sNU8peiawD6kGwsKJbgwj61qLbK5JoFFFPnd3H4kyfx7sRs5EwZZcU3FDi9FYwAZwNMUdDB3suDBwbkijjwJ5wq",
  "key7": "5qiEeo8EdYMpNvyiYB4YUNpVDNDyRA6FUCXobTxLAwZibU2TmYWoG1eqHydfP9dnfV5ikNvABgVvyMRB8L4QY4C7",
  "key8": "1CnPrg1bXbGhWGcJhcUE2TsdZJZwBoDy8P5zPZ5v2qwts4LFWSKHqWf6gPR1aVu22RBfqgkt8J2EYcwnJGk1rFd",
  "key9": "2AzR394NtPKBvscSbmecgtQ9oWzLr73U6aJrKG5EriT3MNXieL1kubvZ9bekTtaiGcwgw49KkXZscYoo2hpH7Jc2",
  "key10": "D4XbqPi2AZJUkXQifyUed1ai2EHb3ZuUSZ6oyFcTrih9Dv7ciSovHh61GAaQeDzga8yhr1xTDKKZsXvC4123hhs",
  "key11": "5KjeL3RrABxpCvAgwAJdkZm58kfNFCxNc9wFoKESthGgPj5bKKUx3BmePrfsUmxQQePE5ZNjpCtfULMbKcP4BB11",
  "key12": "3gDFzyT4Bcuami1Sp661zp8GpG8rYNEMmEoJC9PEw4aYaq4L26LthQmdWY86jT8Z5tVFQe3JB5H9wSoGwdFwSGpk",
  "key13": "3GVrgpuMHT6EQycuvFoL9moKR2VqYJzLsASmjpZA4njMv6DJXYrJtKbHMCJKrVhSX9Wza1BeoFsqktW51MQcybWT",
  "key14": "29dnvEwXGZwkZKhVyfvbmtr2NCDbLzBS8SiH2VUEnyH9quLMhHxNzbayqiM1f2g9So9xxwEpD1jF2r71vtnafpXY",
  "key15": "3GgeR9Un3aVfUy9PUzHEMes1bv9N5mguBH1FtyjvCocsMKsxRKvgbxDenExAfd7HABBhAy9Hgo3hCrZ8Xm4swszo",
  "key16": "2x3HMj4UvGGyspQH21fwYmhMpMxaraQhh8o8H32Roa4SYtzCL71B5kvqcPKYgVki95UCBpig3vPDNNubnwoeY1Pt",
  "key17": "5BVMXPQG8E3CRX5DLg9kHShXcmRLmgzyZT4p6RSLaksU7GmtAKW1e8kmLDdbFSsEzCViveJYVSS3679HDYUBHAob",
  "key18": "5X9xV95uSpaHCULgdTzjKw5bqZ2Zo5qGwPzfX26U1EkCKdCFdKCSuWDygsa1gYaNrgxyxu36k7VLrcKgKuA6yn5o",
  "key19": "54xMy1PfKcgoXYCxfc5mjBsYVepapWseTo26cj8bt3FAh2sFtM65TrDrKRfTs5YRFRqyxTkComszy6PBdEci3Uso",
  "key20": "G49Vyt6FiRRaJhvAmyyd8tPtm2SY8S9zMBBCUtjkarN2o8GvR71rUKxSLr5bc4QqE9zJpAJij8xsC2dZhy3ivsa",
  "key21": "NTrqZ25bQDzDKYorvSZJwa37piSd4ydrh1WdaN3WXHg5HDdguDvNYMhxGTzMooTgJNrX2mP2TkFm7iZR4EV3r2u",
  "key22": "4PDQQGhxrrWWUWQH9tnJMVij93u7as3wES3rF7K8Zp69fSpH7sqFBDN1RRXoBNkt6sRwkRV2LXBNFEKHJBQ5i1FB",
  "key23": "rdLEemGe7XJg3nJqaWbQczGVvWStmbH5BNh4pBxxmqHU7VtK6w23BP1FbePhVrzUNVHCwEA6c6EiHNcLAchcVEg",
  "key24": "4dejqQrUPPk7trdQpyEKHHZrV8zdzV2NpCDaCkRxbScci2Dyqs7UPcbLg44A6VniMfnx4y3eM8E5Hwtr7fwXeujw",
  "key25": "33MH1GAfvBeviDsVpCRUsMGjFdHVrkrfMLJQe3itKSBi7ywNLo48Bpz4FbcEL8UVZDhpLuA2RTn3rG7SStw5ewU",
  "key26": "5hgpyGoJm7McWjx3hUDMmBBGSAy6oaigNs7qfpjc1v76K1okFdpzmsphSrcC798aizNGKVQVAyEnsgfDP3ijo2fW",
  "key27": "3yaWuL4vwjB5AUQsJjJicusxtD3taR2Lfc9UR7MbH2Nn1jzyCqPUyrrWC3EkSG7wqdKggtj9bA3BfMjZrEN6TQrZ",
  "key28": "5E8MLwsP3sHyEZui2Rn9SXho5QxVze2KA6sLMG4bYkfwt9VgQs3wEUbMRU6nfUYn8HDfjbrp1bwmpkTFbzYuTtJg",
  "key29": "2jothGFhR9UVuHZ3Kuh8JrYDET53Ss2WhR7Vdqsa5qbr9BuWfxXRiBPViqqqeJJAmh8mtmRYPzvLZrHaaLT8pMEZ",
  "key30": "27LKBuzLgED6G3g8cYP6nHoPaSVQrEh4gbR7qFcFbqkDepxNnG5dh3effEkxEzrvkXzM7AwRhP7awgiX3bHpHaW8",
  "key31": "4CC3q8R3Br4CrkHrtuN1QEawFJhPeFvBQBm2kWbofaQQzTcCweudvNDa9Sm4DxpJ3MtSKiNDmTL4boeV4un7eVPR",
  "key32": "2eAht7fJnFV8DrT6cNY9h9fuissuchW8G7rR9gisvVtrdpJY8tCEYMdJb7aJmmqAM5BWuf6imAfTgPAL4Xjg38Ab",
  "key33": "5rEU1GCyqobjgjmwm2WZj44Z293ZUphBq39tT2eCgEEKFUjjMvXX1C4h6hpWoZka1mAETugF3d7EztcuEW7RLyyh",
  "key34": "E1QeKCJ7EvxjEMJHafCnZqHtDbxzVkQzsrXL1tU9PsnBn4QL923UXDVjNvG9v858PUpWyqD3UrtXfGJQKEN9vVi",
  "key35": "36E8kNXSL8No7mCGjy3MAndbPHEhoczXrqEwna2sx4PnCj9Bf8XUE9HqSQvNVE8LnnaqpFyDhNZ3ghsSXfn9vpsP",
  "key36": "eEpaDm6N7uMb5pdKNUWJZiBi9W31jsfYV2ppYPUJKUSdj1HQhsdbWhr7eSFr1JCtiyknSiMQqA4WHXx2LhV1ZCU",
  "key37": "5EKu9o7kGUTKP3Sf3gAP7ip4HX6rNo9CFH8TLsqenddaEK5EXp5wf5W2xopa6WrrgPYrB18er7APVZhMj38SxUHx",
  "key38": "4FnT78VnoFtPmrYXzA5GWPsZBcm5M7TVCQqHeA3C5Kr8ijiimu4NqNgusECS8spz88c32rBMFwyqyQaprdBiP6QD",
  "key39": "4Qcu61YK1qG1ie7TvgEUUay3RHy5EDTFXJVdSta8jv3DLGXuwky4DALhZZT9iDG1QaFMSvKgmCzgFYv8N4peGZH",
  "key40": "GmGTasD6nFegW6cVKxc8kD6CTt8eiaFc89oXRHFKSwETxKJxWDCtyjh77PhSfEQxRakogqX2Peyh7qxrJbQ36F4",
  "key41": "qarCatgAZteZoqd2yCtRYuqGEE7vdr3K2NuPdzxiKzGk1BQi7PD8GbCxWRe5nLeZdcL1AvJ6mjpAVrCtRPYkDAS",
  "key42": "4C7pfLk19bmPgvdp5tUBVuZ6vCSgX5eJGzF3GMdG3qbQY4xXUFeQ2CrSQDYHaaPwcCRZtRhvCU1gaUGfZDuNBA4y",
  "key43": "5YeNpWwXsEQ8ybFvLH5gPWcQYdT7zEwyLLHk2yLkYNvLPSGQyyyEaNevYr8pfmfRgPtjZMFVxsYTqQRpky6JLGdG",
  "key44": "2kYN3c78apPysV653K5zg8N2Ytq4ZqTFKEdXMdiBAga9DGBrNUc2DLaLHkFoJHWgT2r6kCmnFeYQM86dSe3s6Ahv"
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
