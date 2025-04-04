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
    "4YWXQBU3ns2XMHL2QerG3ekYxhEmZtQBBz8CgYvuTbNsbsK2d62PJWm7ptxABAZGwaAPdEiE5iYe4Yh3YLQ3hdbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2fEJ7wWNMoix5j4SgkT3GGSq9ZsNXWsva8haz8ro4ZEVo78EyxaTxG9ZBrH1mR9QmqAb2cr5TMpmDRwxNmFUCY",
  "key1": "NeAs6ecwGKjahxE4JaPZAvLpc6AN1C8HR3JmwEiH8Q1uAPRJ75Lj9jNMbGmCuTiTCSXRaq7uNo5ecAJ8XKMdV6x",
  "key2": "5ucGT8puzL8qh2NHwCMpEsFRFNFVjAkFCuBL4F5pG1FjPG7SCCsr1JFzFTqDFDoW8WJeR6oYbjp2wCuT92dWgJ7n",
  "key3": "27kZhMwMCKUhp6s1vT9MKoJPW9dt6T6Bi6WuhDKwbewi87vLRyFbdjzG8f9khre76wvA6Q32eXUXwyucoTZKwuAL",
  "key4": "2Goe17usRZPCc9jh3TdfcUP6RKbwKBjAc2bZhwx3iywtUky46qxtaEnbX6hgKMwUhvMS24eZCHvBecZf9Fb1j9WP",
  "key5": "5fCe6JHXskgLpcKcZBeERp3cD6E6Yoncidi5egoPcZwW44mprxGADbVQtxuRA3mb2CEyufDPLPxfNCnnSF3Fqqpp",
  "key6": "2Q58btUA4PDqnFrk4xRHKP6nR1MFbkhRErhLD7uhe49TpLkdwWcWXUVASRC89BybpMutCHrYsaZfCzBDXTVQhqtR",
  "key7": "4p4nrQSRugKv11FCV4EV1asHT44CnxC9TEijpqeYddZE6eqWvGDJXzgUYGz2mwyA6NgtWif6uG9CDooFtb9vEK21",
  "key8": "5UEowWKZPXqZYSGWY6MfTWzvcpkJ5qZgy18kGbDtJ2mmAbNZYFwda3VT6qwYZNMB2RXAxN3GB75wVNv81wHZrNPM",
  "key9": "4PBqPgQ2N5SX1ZigxwSrv7hQGpzohPJzp2Ykpb2n5FoSsD1EDuDMM2DSRjJuU1vLfP87x2dczvxgtypn21nkGfCS",
  "key10": "Wz73NDbsp3cJmaGdhHudo86b11Y1JAq7dKQTSFbu1hpLHecL3mocsQk78YfcSxAsz5EPA5vPLfeXKJnkPHeTAYB",
  "key11": "4a32e3GiinbVXAhnribaGrEGvtvvfuLe1FaRnkG8TaGcuMgNkwioC3twQNXNUkdkLDxgiAuC37PdtUkt1xwC2smm",
  "key12": "enn9d5PifWpANxdhJoNSByQCh7vigAWvCffNDi5dQz18Y76qccGkQZCmuhspmb8Z88FCe8faa9H2cUYVYhhRePW",
  "key13": "5vEWz1iB5EX75n9QNgysq3CzrnYkDAj1HVxbNnvpXyTCF8YuDYB1CGJoSWj5fbEVECWQEfngQpzKKmDxqSP3Vmr8",
  "key14": "4V6oyVwP1ptMCGW381heosXZYj4CyfgELAaaa3s2bM5f91AARxzWayuPBkcU7jg2dDdjAM7MnD69TGH7cqVa5zY1",
  "key15": "5wM5CfnuuXSzJf5pdAMuaWUKmxHtfrh1MDG3YBagG8Auz1UbiVSzA3GtjqFFQt5NsUhiRXJnobd9r4cfrdsnCEaH",
  "key16": "3ohFuoYWmeWxvLTgqkbcLYDJnYxx6JHaxQMsixTT8QVJsJyLjbXYBBEom5V7ZZetHAgkevqamNesBmdVjrEAPhJ7",
  "key17": "2cF7khbHMD8yPiMvwGwGCaZRCquGja2QGjnjXrycGbBLRmxNCmfQXcSrUYpZadMBbVA7QQ37xFXYwJBTU6bErr6c",
  "key18": "2rFQ39Dp4YjCsruQAzFhviJQ14jShxb24t5WxuFt3oDe4QNQ5CpoFeUWN9AdhhJUZxMYNrbDXfy7nKfSj7Q6qNsV",
  "key19": "4ajdwFpv91TC79pumWRe4UZkcBPvaABQH576F3g3HLHUFHvsnR8g6TDXbsk6gqRfcyA4rz6M3zeyeCt5aGusAB4h",
  "key20": "4jazyrGgMrrLmaXifWCBeHbKhEQWLGJ4Xis8mCGCg8hf3tNrsGjcoe8Yardq2YXKA23qjMcrqf6jwg8rBU7HmiNj",
  "key21": "3mkQxdU6Enz71s76p2s5FdewfnrJeXsUgGtBwGWbHsfdMJyUC5pjNEfNgHY5qoxnGmNtnTbYVoQhwCuUGbz7Q2Gx",
  "key22": "42g1RE3awHTSG2qqJB6ygqACCsioEZG5JqEKRm8ZT864Gpkjy8h79S68Ln1WvGvxrSRa7e8pyt7ayF1riYRR5L3e",
  "key23": "5NEY5VvfNA2pyuQ3EcLHnXtDs2V7suK3BJSaa3uT3Q3EkYjk4v4LDEobyX8ek4K1AYYzmgvLM7xB4eXWkjSM3yuj",
  "key24": "5YkE46go1JJmTfBP61CwpKTXqpDnBADehQ3MG7sHj5RRZAnWkbYgiX9MPZbfKxajP3job2H9RP1k4iWGSg11caTd",
  "key25": "56wjvnMjR6VU4feuAT3DL4cvoFj6b315ECH3A6FjEfMPUh5KTKhak6wstGUzv9s6HkTuAxrUJAfMFV9LFVDdnhu",
  "key26": "2hR11t2n6dBwqKefcAXxqv22wUcvbwjgu6tryHARQeCCZXSaFbKfy64WPZwwRcZVbrfTRSK2KcMKpt9KMdKh7RW7",
  "key27": "kEKh4pj88gYDxuTxfpGnum2H1szqY6rn1Bt1axbu6GsueKRFvXHaQHAtMqxEtMjs7k7TxFdNaaPiqxvZ7gzmhQa",
  "key28": "27aBNECXfMXMMWWKa6wMgMzBQYjNUa5pznvqyKm4VSnMKvU59qMY3Gg9NPWpznTHCuYuifzNqCw675RwBnGo9AJq",
  "key29": "GtGw3Vk7G4z1drkPJRKLKRYSP8JS3JmpC8PAL46PTg1FmdtXt7TNh1SqdxEZeQHnTZ1b5LGxSfnW4B1ryYENXTs",
  "key30": "4sGt9u9PChSiiQUQQtdrPnM44N5yT4cCcwDgB5FGVrnAMNmKDgLxmzn7BWCQQr3hMa7rQ7sFFUBGwV6vqi8FBNDK",
  "key31": "rYEAnmJ4gGhuhQBv5Sb2C59HCuoMBw7dJG9sjAJ5Rs2PJXsqvTjqqKACbc94jQj4eNCJmQ3oUkFzBDDXWgC5nAE",
  "key32": "5nRUJkcM6rW4matMqT7vFFo48mhT97uJwHcYvwihpX5jrvpKdCVjG875UzFKT2zmHe4L6HHU5L61txUdiugHbXyF",
  "key33": "J6BnhBESBKNgnSuQxBsQqhnSd1g6WZkuAE2vMUuzYrbEMVstt6j2cKz3iWAEQVVYxdYdhPph3kyst7YnN1rir3E",
  "key34": "2wmSUPPHfEG76WXn6MAZXhPceLazWCVBYKdjKffVXz8VeEFVrMfBXCHTR2UwKxDAVobTN3vtwRZ6Cc21doduvWZP",
  "key35": "7hyHTdtRXzNNgFQsK1QEayY9htJ416o7qW3ozofvmb5qXhv5T7KhsGkZd2dUnTax2gefWs8mLqxmSqNCYVfbRbx",
  "key36": "3C8MvqhK2UztiDKkgt5fcit8H6qyD9baqebavt3yxNbaoit6fvqh8AMeHrWTFZcge7JFzwzkDttJoUWpwedKVytf",
  "key37": "4dBvQ7QU8ckYLAgGehn1VhKWvcehRyXm8RZfM7ifkGELDzNwKLVYRodkATes8U7yWtcvJ6yJVJ2RoC4LeoueLqrs",
  "key38": "2txLcPrDMY7LY6YJNoM3x7y4UrCfQRXGzZ7HFGRJXZqVVjXYUf7FTTcjXaQLnHH9dmNfTL1Hnh8Ascgd2ADxSATA",
  "key39": "xRhf7hQRcyp5doZAkWg3vtzvM1bhhG8iKwWzxNrSybGZpdayekYifp5ZnkMRRG5nk3m2RdZ2bLKEQinwJLqkHHb",
  "key40": "46wBYkNRuEBCy4tAee7FKwcxhqRfg9B9MwgwQB3t1Rv1m68mZ7cp9hVAQuCy826VyXRNn59L64ceTT3JwHXZSSN2",
  "key41": "DQmtPiC5S5PJnmNDT8JdpS6jBStUNue3Gy73eFC2XTGPd2ZPzcbu7bZJL1dWra7akkFeTGSEssXGdQT8zV1pfeo",
  "key42": "5jNFeWcHd745Bk1dnYejEG9u1wnVwgMB3aPEyzbnDJpdSL568YKE7FH5hfd2vbTVzDaSQzcT5rbmtCafzW2QZ2kX",
  "key43": "2dwqopqTtEy7PQxh2qPDjEuUE2DF9bDUEbdjpbR6nmL2vHK17FCg2i3L6KWbywhx9KUiHZ5Z5MWeNucNnZrVvTP3",
  "key44": "5CEMo8TKNVzMvQqYqsU9E8A9W4xnkHQNrVo4tAihWsipH9yFyAcsK3zg7331HM1ex8a88HQjsdRZoQ1BtHJG9hJN",
  "key45": "2VWLFvXzsmRVU7jpsyiRRQxciJbhFPQBoKXWsdWNiY1nRiJBxyvQZfZnFibTkunB4X6zaTttiuBF4ppMhzjSdz6P",
  "key46": "3Q4D4kJ2FLWKH58K4DCjM3pqgbXV1Hz65kHBnyKwfCWqE55MYorHHAU7PcHm6MQHW3Xo5R1fx7mJNaLY3FkwQkXF",
  "key47": "2DWaapQaREsJArcHXbibWqVdA9oQd157dFjopHHc99z7KiBixWT4kk2s36Ymmu4pEZbGaS7ZeEWSBovUkhwAkaDr",
  "key48": "3Rqxa2Kg1Jptqj3kzx6uyouWqcEeq7Cyt1fp8HTeNHWF9hDCpYR8hrm4P9p8oK2J3yrArTZ5UMt5YtboT3bw3BiX",
  "key49": "3Bm39kQvhDihCN5Fw7SUSnNH6cydqJp2bYCaQU9jEJZ2ghGBZ85mmYEnCgPFBQXHjWRPfvU63arE2xcT58G2zx2K"
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
