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
    "3oCTgYy4hozksdUhng1GTVcQD8FYVMuFLfhjLWrHTFnY5Mb6dqcDQUYoYLEhsanHgFc3T7W7u51T845ZS7v3WULt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EiCzDS116hfWiZbsZPjiTVjzTvqVzzT9xFScZMNCSCCqCQ3i1kPgntCyhiGE2pW7buApr1U7CqEgB5UbmRHt6M1",
  "key1": "4wgZjtZsxjZHdtrRfJbMyDkmWMwt2fCvazdj7vxLsLcB5nm8rwUt5ucRwKii3jtzyjAPrb26jdcf62rKqHyDawab",
  "key2": "5umaxU8sLDbhHraM2x84wNCxvc8jYsmRxSKcZBAeJZrdFocqNgvwEJmcDhgQps1X7e5qcMQk2j3dxEVCpRiRbnhg",
  "key3": "3QwTAxkJ2us6F2H7xL63Aqd6GpjhwnWsvoaabxR86rXgin5GT2cCUp2BfFMhkF1ZwiBT9pzuF4VqNGYzxMWbKL4L",
  "key4": "nmxMeNMzPSmtN7Vt3RrDDmstgyYbJ3jqsJLsaWL9vUKMjvaorQMpjtsncmTZ9mZ7sFXGrea2MabVcf8fPyYkQTz",
  "key5": "5HAekj5dTebGmp3UN8zEPGpWfdDY7LEnKRq33CEB6CvWExYkM6XYTkrrTaP2E1zQW2Rp2339QnzfrNEDYuNEe1gc",
  "key6": "22nXyGDrQN9xEaK8RtA7WDZkKynehCHSGyzrmLoLemZyNUrWXct3Hh85YLPJ6SFfJapCAbw6TooXcpQbu6njwyXv",
  "key7": "H2vPovLhcMzYdxjF3YtDxFnuCxP9gH2sahxxkwuH8kSH1kbnPydZxqMSWJ5rEYbgt6CAx1WhPNDY7MpSYfoie6p",
  "key8": "65vWFKVesTmrnKQKhnRTVueurW6kJ2rFtUZAMogLeYJEvbr8Ayd7PUA9jqsjQj3T9a4CRSsq7U73Z7vqpt5W1soF",
  "key9": "2UikFkA9iqMZcYbphaqwbTb4tEagnArKTnLwzSrJKf6oN9QHv1xKWXRGa5geTmrJpZkvBD8mC6E9Gbqpfx64bH7z",
  "key10": "X191xLYkxis9nezNTmKhtTWnXKPtqNGr3LhnMtXJxHjExbaeWUbcNjZRFUWYJyMxr9cCXvLCVjppDNWtPpiWUZQ",
  "key11": "2TxMSUzAvr9MkYxAmgnP6kozRBN7k8ofueW3G4SjrsMcKmauPhTRcYmVqLsFzhPuqGF5fuTX2ZhXD17NSXnwEwBq",
  "key12": "4EasJsqjc1WwC9q82mCqhgp4RKHKgfXCp3Rg9A5hVqPkWTiYxn9ysJzwBPVtyQV67aVxviioCYyatMB5RE4nZRx6",
  "key13": "2Ytnr6ATb5XnqLeYzDqouQ6WzoZuZkZncigJSrt7ST6KetBDSB41UEnRjAHBQBULeRihsWe6W1zUszg518N5MDmS",
  "key14": "3cHedBPa267EFKsu9uKi1LfQyntHBxiy5GnhoXqi3QtNNC3TFPfWvLygXFRhpT4PHYxkTKxFQ2QtxU3pAH7JFdUC",
  "key15": "55b8WxbfZTennL3zdMSQhksLbvSYs319mnJJ67VF6UTBKwEec6KfmRJwT9ScHUww6AftSpu3B9fDCZmDQFMrvXC9",
  "key16": "2R6yzvGEPm2RHP4ACH3FgsbZ6dUGaqbxaEHN79kQAWjsMeqyBsVhcohTJzWx13doi6QJPnUv3w9HGj4DE6Y4VbP3",
  "key17": "3gbHravQgr3X2yVedeMsCDxc8ArmNDNqDVZuRo9DTrA5PmJqD618kX3zcpcsW7ibcxuH7jsbCafh2LqLErEJvPFH",
  "key18": "DG1vgNfiZfEzKmNU37ZoRRrqyYYHhumTAEvRF735hy8eePSQqb3JR6gL3HxhLdo8Hko6bEe57dpXdRvC1rXaJCs",
  "key19": "3UADgpfx4mhc1XeoQXhUGpCtdxW3xgNu3oHPS7dVgTVQzFytUrJzatrm7Z9AApDxaTm4yj3MwNS1mu5Goerb4ARJ",
  "key20": "MznYPPK1eKWrUZoerj61hf8LzPSc8i28GfKSW3tij5obhuRNS8oSd4HZffQycSMkXjoiX4QK5eaMxzFgxEMsU9H",
  "key21": "5ofgoUczthBvKewyACRQUd5vqYoTqBv6XZvMEAjNaD6ktkgHwik6zZXasK2MtCPU7jSdJLA1k8HaEXqEGQa83AqB",
  "key22": "4CabST6SFYxUQBCa1rcMXQQ4rNGhnSi1UsvPZM4XbV8Ce9SwoU2TUohTj3Gu3B8uWEmXA2QLJ8FCXL1Cd8bwNuYm",
  "key23": "3EpkazeHqxnVAb9sgLmqGwhgvUeRARDF3TcniBX5eq935z2FTUSkTGD4CeoTMzxv6dWeE6MEN3R3eJPUdT4fAvDd",
  "key24": "joMKPPrY1KLT4zHJcvuUCoDRz48p6QUisnSDS44roDqf8mpqqEyc1mCjaAbzcJF9kKyUNZcFyWGA2mB7XjRLUBg",
  "key25": "5GNRkQVUTQ1Nyh9JPT92uxeULwg4h3W8sh1Ec5EfiXtn8X5PgqXNMW4pBT2ndSSnS1J6vhX2m25wEXTdFExnuexT",
  "key26": "35easQnMKfhC1iMDLtMKdFTieu2nkvdHWQkDY25wHDv1nHBitzQuQuUCgtbJ2UVEzaLPQ59AvKRmoKQpkZETxjnJ",
  "key27": "5SV8SvXzJnQJU8gYayHne6fFrY1XZCCgRKFbNixAhifAZVCxcY1WuvLcgqXv8QwNa8mGZkQEy3328ebcNasgV4Lz",
  "key28": "2dA7Asyk28HHiVKKkDy7uySph9TkgYNFwnfMwxpoEXB7sjX6F7vSt2yVi7SjJaAntnzZ45axFKyXZundpWKM2GGR",
  "key29": "5bjsA75DSGywQMLPaS4iqiWuuPFKgyxpcFpYEQEG1JHAmwekr2LL6uq5c1i86GBrCo6E4kHLcQRLJrhxcojLmtzF",
  "key30": "2LLejopcR2RnH8DqtctcVYnPwYr1Z3kQLkVQUaCGQcdYjqDnWrh7GyLgWPHuENHEyap9JG34CW5VSsU5wSMvQkmZ",
  "key31": "5ckpjvcrsaeuNBvgZeuJU8YLtRagJo2fpbtJ8VvNFfnB5xCnXJqYdMXVHguj2kBRhZyiBf63bqKTVyQLhdnGGCno",
  "key32": "nMMcH6PYyhKu9gcbt3VXdgiTP7CT48RuGoxuw6bbpMsfvBsc15aVkSorZ2RyFDZkkRRgBHmUzM1ryp58kPbSda4",
  "key33": "eWjbYr3Z8LyF9jtBQzLU96KKfEDqXGFygJv5EDcL5sLzJ3zgHSjUhGRXSPkYhKbGSXrLTQxiCLvHRyqq3M5YN4K",
  "key34": "2o5v2CUbJb1jAAXxAnGNfToxqVq8AKFXJVhM9PjbF4gNQ1MrqLu8QCszCnyuV9GpfitrnQe38J3t7CaegdsMLuLJ",
  "key35": "2zEizdZthGp712Ey2fZykCnm5fw1ocNfg4HBRcK196t6izHgWRb5uTAyMBJXBYrCbqe1ffLiJugALCwpDPHFvDG4",
  "key36": "5cPXSYNNWVnC5bwY4Akx6iAxnCfviLthDY51cRCrEAdzLQE4eZXW5sGdoqvmkkGvEXNUEagi99JV2EM3YSKV3hKT",
  "key37": "4m2KiFbZvU8FaD7ftSKnRHkuwnR6YRCndbeBzHjzBRzdMVP1qbAd5eexuseBhgBXMJex5VgNeq7zYRZ1Sp5FqZQH",
  "key38": "5cLtFpUQwCEqbBXJPa8Cqv6ZbZhbMUhfTjTJTZnEZ1csExTLJzANAcsLXr5PFSpyKKdLMgyaLsZXzm8mQrXCLomG",
  "key39": "5ueF533gf6osHUcWwq8tABmw8Un6Zu5JMMANd2dqLJPVErqiKgZvjVnMTX6ugf9bAeENtHrBVBaErAWA5RAJSXCu",
  "key40": "4kCy3cyUMUGXqJoatAxTnxw5nQY7N2XqzHCXj4VaXPLG4ohwMeZAzWi3qtir6QMSc8fZ2UmhzKpscFwnXbCAtpVx"
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
