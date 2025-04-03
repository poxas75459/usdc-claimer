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
    "VJBrGzfGEWX1KraSmeVnPmJYzSYftjMr31Cgd6U5JgzZgXKk1ScLCn7pJwbbAKcszQVNzwaki5MgsDNJB6pVKEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnikpFGTcyG5u2skHVyHXocwsub9kj7igVvTbLc4aVeq7bVNGzFj4SqMNURKPzSHxdLig8VHPzKzsS3eWvKo3qf",
  "key1": "vxKaniuB8QMfLqBnus6LH8bhgue9ztpGzpHqTxXwLEN5zwjpHCFtxYUBtaVXCuu8oHGgUWRkB1mhgaKZfphQdBZ",
  "key2": "2qjdn46cdgbdkxxrmximieMVN2tNyaCDdhtqAS3QThWzSFLGA5LUqpVLuJug1GraThqZqTLKhDUW6KetRStyqpGA",
  "key3": "3xZnFo3EiU3oiHLYcTJ3GkgghPfDHj2XzG5VhjxA4JyQ4fvvdaF9Y8D3vxUy75tuYQiuXntSFv92rmqFimkAXvRc",
  "key4": "3kJeBx1mv3hT9gG7Ps1Qc8QuP38MZ5ZCRewfHrWMXqABm38B3sEFQwQe7W1f5BhjMrHTxzvZLBAox2nCcZk54QWz",
  "key5": "5yBGYfCK5qM4g9qTVmsuAvvChok6jNk9coneDfYeppnUfMskDTEezKNHky9RMghqVVUmcJUiS8AqwNX15j6u81UE",
  "key6": "36QkYMzUxGcXjfmsiwDiUWfbqvcYMqk8nWpEcQjfP48X26n8ZEmMKSkzVad55DEWn53hbQqSP1dUmJFUGczmU93n",
  "key7": "3MxiiWmrQ4E4cyab89XT7vLgiW3J2jf5xmQSxZ5gXznzhVyW2gQjhEFZVwMk4S6VnzP3AZ7MWeGKGanA1CUKz6vP",
  "key8": "6yf9nHW3hZD9FFUfDzavBAEboYxFkZ6uJhN54YHXPHrnQK1a2HBi2CNaQV8WD7686B7cTcKAXysWjadppcvb3cV",
  "key9": "38tFMay4tPkY4MF9VdXzjz9TCXswf4kVRpJUo53jWnEC9Pp79TfxNkoMp8YkSCUB5VXJkRff3Wzb3DPuagE846rK",
  "key10": "5qX3TjWPqLjbXz7GGmLDP6Hjf4famwGPTyUrs6GqLhYeMsYyt3UrQPfNxVZ9Konz1u3djnohGcZMLvV6UuPYj856",
  "key11": "2S5ZjBaz8JEvzTy6XkTiFX2E3E2Z9jjUXcbjNRYiv4WNmYwGYvpbSJcQzrutBZEHvNHuwjxtPFvXihwVGmf8LLzT",
  "key12": "67ayzAE6cPwBnHpCddEUmm9gxGE4bzPnqpCGGEat2ABLXZjA3sFSDjH2TZA1kALdoaw1HcrW8D2oXuvmWMkwMWeG",
  "key13": "61SW8YMb6xsRxfsz9RXD46qmZuFXzXJSFaURPEkXEKGNSagPxWtev9qa9WURQKSNxqvrUyhgFDnbXvbRkQ1D7fox",
  "key14": "39bFhdXS1W6oFyi9XAtzaeyRAxwYfmGs7LcHQvyuF3iJ5YgpWQTpV9pJXjQCKtiU13sQnSYesA2S3Zxcg76DBwdq",
  "key15": "3kFUHZjX2Sqjzqd2DfnUHjvqnHL8JTS9YEUxw8fYnaMZbBxbQRoyxQTxCRuGgUYQFmbksy6HR74M2dhkPmw4hvBa",
  "key16": "2AFCM8BuJPUrNgd32nGtHMCg5xLrmfZK7Zt8xGsn4nCBn2G9wUfX3zCCJFdeAchhHonWvDgC3Bs48apBrqPp1wGD",
  "key17": "2Dtnh5JPo4Cg8zRQJpvB3JQUGWq1Mk824kjGUM7ohKcyNUv7eDwvv93AtswQTH3eRPx6K7DHVp4R7NzLHShrJBqR",
  "key18": "4cicQpKFkqBZxjp28AkrnhWseCyGywM5UXApyg7b5CZ87x1dCQfu1SGK23on35xX6iXgHTLwqT4A7Q9t9vPEKwWP",
  "key19": "5gCzsF3d2NabgaJntuxA52uoJG1smP9rBcQdT6sq886ZAAJPJWWcRk49P9HE2LDkSN8fcFVB6i96wQUKPtpZinWC",
  "key20": "6gqPs13x3eNNRPrXyGaoEwamiSMwaCJfAYWKUaKtKthrWdxwhy17ztNH1WBpPZe3yvFKTt5e6hSQ1R7fmTAcwu9",
  "key21": "2WuMPE4MeqigEfJHxwTG6d3WXZew3g5m7YB3GY4XeVVR1mP2teVqn6ef9wE5xfwv35qJMi3TDVvTsbZthtKFwSJo",
  "key22": "2iP7KerHxVzD4a8hsjH1QSCtYhLLqkQLPJwuBnW78xu24e3QQU7KWtUWvBykQeY3jMoz3nKb4mjst4jCywS1vSrF",
  "key23": "5L57A7VuGLd8jumpqm8iHgRmCYRp7wVN3nFKQZhDDresLXgcRchFaVEgs5SjZmRW4tDttshqyvdKNjUwBVJeKKJ7",
  "key24": "66DwbtVbLqr9rAd7X4Tas7DkY3JW2hN2iQYThSR6xc9N5zqLmvdvxzsgbBDLPNRD8Wrbxw85XD6abyYkmWa2XWFb",
  "key25": "j2ydLfMuHWKgnnJijjzsus3U5nJz8CPFUZm1p7dLyQQLdGCqxUWH8VdDHanY9PAB9jkYnMXHTkyArfhBz1QTNhA",
  "key26": "2ctuYXbrLV5tuVZ59qQv5UYH3V4FCihp8LLR3ecttKseJDirrByaYFotgw328MVMxJb25jkLgjAMyYfGF8usWq4k",
  "key27": "3j3LCwrDrKZk81V744mYYbhAKXLGM6An2YjEXAsvtuXxxJWrGKGgmj7N5VfZXE3ZWHFWAVMkcz3CsSnuadST9ULd",
  "key28": "xFHXy1khAVvsZwsjWGGjQh4khaxt47GDymZAwq6f1DKDE94oEFASpQGpu8TQsDTee5oVueRRjQZwPnjQgEhV6F9",
  "key29": "5dCD7EhjqmKxXSuvbjmBm29nFebnyfCHWcMRiqWFESZQUG4KGyhzUKs2Zcz79LjXx13RsuRo5PiNezA9bF4yrPAV",
  "key30": "3VZZBMcZtXGjByRD9getvkVQBoYiPa8RAhMw1ycyo3tpsCW3VirCSUbHZZSsD8zCp8EtCm1hzHHfcrzvZ4J8HYeL",
  "key31": "5EDufWSCX6KQKJtT1ZTJhXPossABDR7XDCys9G5NRmkhihzxs9FPgs9dP1eE2wxAEFCFZCMDc8MjmWpBpusva743",
  "key32": "5gD4w6MkL4xeobyo7y5fscjHW5CEyxTBGGaK8xWjyUujf7L8TMTMvYMnxufELkb6upXcDTTetBvhKMT9tubFvhuL",
  "key33": "3gynkLH3yHfronksV6FttiLX4DwhF5CHsbywdC6qJupu1qDtoy8U7jNfokyqk2kz8hXg4sYHyiATt8RLGW7fW5fR",
  "key34": "4KMuhf3cpU1N43B6Hm9xGzkR4WJzLrcpVCPUVJVsrezzjJjv7wq1qVWsh3vCxfEJKXKBcWtiX4gDSbqX62FEgvrJ",
  "key35": "2wyq4uBMbAeGRH1NHpgmecy2voXoTQGC52WLtwYg1xwDez2dxT9dxgFHAg4c8Jd2KUyukiUA8X2ZzZXZqihtBNxm",
  "key36": "2z8HUwKGD4JHEPXHyBG4PGm2Ep5jJkYk8K5rhoqECfoUVYG5jgdkypkNXvCgpKSiveyaqyhA9nFe5dyitBhpvXmn",
  "key37": "5PHppUG8FTYMvgkEkHhdP8JdT4Qg7uTCpxAZW3qJ5fZSgqaaAYN4XL7VoasEfta9waRyQhN8Ne1Dx6MJtg86R7ix",
  "key38": "3jtBbuqCyk7FtsoMz9jyekZZykGK3a8hpAvMfrUL7QZD5PKz8VKLjGdfVbeJnkakEGBxKfuc7QEdibbftCwkJSFd",
  "key39": "bUDybfniYCCFuGWgmwQnfZRA2ovPVGVduhwN1zDy7Eq4JD1DKtUEdphrj9whpvddYhXn2Mz27jNYHgETPPG4Ywo",
  "key40": "eJd72YoY9RnzDmVP1ThAChZLEuxktzy1tmdQ1gBrN62FqFQWFUzjxFAJZyqRSjheWxE32FHCYJ9MKiXkwYqFCrW",
  "key41": "wxQPep2AmkVCPjoENy6LaoGfiSDEP5m5SyuyoghiC17pQx4BRcRF6ZB2unEQDf1HFCFiaXaFUqXdVBHCHvRPzZE",
  "key42": "319fjWAErXmtD8s3LEBGxxJx5GadCKuD7purjn3kyQpDPtGXA9a8ekA3rhm7k2sS39EriwSbZ6aqsKwU3L9eHkNc",
  "key43": "5vbUUNSDjjhbx692CRvikX91rbCXXe2EQfTti1BwmnwTFtDcMYtZZfoFGBe9p2nhY1GeeEh1Jf2EXjTvjGXTTLEC",
  "key44": "3CXn32RfPhGLX9agfkxFMn75yhZHMJ4j4TQjqkG6ti8WQ19uukaMF97iQxiuYM7UFEcsBM4yjf7KsK3fcXSaGwPb",
  "key45": "4DB1F7JhEwzj6wFK43UJPEAsL7nwfnXkuckdM6PN2ghkEnW4qy7W7tr2QZPXAhdJdeYma4AodRk4DgyGdFRnxSUA",
  "key46": "2sj4xqfi2SVehngDmWj1eZmyQ4bQtvAo3zdnZ6MyrFgmjLftJ8NBg9XKhrwP33JHPv93L94gCupU22g4Tpce4Wxh",
  "key47": "MjjTnQgiA2YdpBiaNR3nT1rVpEvvjxsGkwiHJQscGK7mDyfU9mZVBJCsRKcze4aVVFmioKUhBs6aLUVR3768yci",
  "key48": "5FD1wGCZLFav5Sw4MEhRDCEm4ryuYc4WipuSJdk3jvGKnHuKBDf5NFXrSRNoiXJ5TAv9irapTu4o7bW6cvyDD1ni",
  "key49": "3nuG979xMr5sdz9CPp1bqBZMmPWggev5Z3dCY8JfWrTGVct1UmuT2tTL7swBgTW7ydcAPypewYkMZeuU2anzq1QE"
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
