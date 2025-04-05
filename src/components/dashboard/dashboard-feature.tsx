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
    "2wuR7hqfuGKLouk6Mhsi1PkqABvNYREGzsNBu1AMpnT9qCLkwJhNzBh8qtT8by2NDarVZ4S5hhgYgB5xXesrqMrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1954o8LwUAzZCgaou2xtXWhATgpzSE33KepDn7jDA4wYkxqNHBZ6dK9gBopo197eMSt1ztJQCU8aC9d4QaHhYaV",
  "key1": "4Duk7BA9oDAKUCfkKHgYgyj8pjoNRBHiqLtEFFRhHVmc9auZYynXquuyETiYG1z7jYGcA3MkDk8m9VufBcFuMSZq",
  "key2": "DyNY8R1cP5dUVFoNW8dRF2VVqHb29Zn49YtW6NZqX9q74vzQhKX7Vsv6hvZGrxdzTZEXWzpUmMbsN8fLZFa4ifj",
  "key3": "5tu82woH52xMhzchQKcLUDS7qYVeuCRf17ZEe5FebtV7YzXA1LQxutP9Xp3WcnFLc6GciMRjL6zihUrJU3NpUCeA",
  "key4": "4VRZGqjg5HnasGjKxJn41PTwKsG4ajKjECqpjAaKfXQzR4GxfoDhfMcq1qg5Yuxep3xWV1Vz86RfMoFhuMeXQqmy",
  "key5": "5ucbQKJF55ef2SRhTbVwdmaKjrPnzEuYL5JsA2wEcH55YZ1E5xgsgHiCSyaCNerWd2Ldu3A4eoqS8qVWqrBybtpf",
  "key6": "2qsYGn1zK4cMX3Ybj7SfRezhAXiN7qztb7Fb8LyaU2zquca2D2gYoYQhBwj9v41n2SvUi4J3TRQwfnhRVdX4bYmf",
  "key7": "m9BF1w5DbjEEuxYpKXmdaTCaUvxywSfZG5z3WoMohG9SSscBjQ2myiTaDfdYKoZvC5CqUs9i7yU7UfE4TSKwJRR",
  "key8": "Za4ByBxyzFxhG8wZfcfQZdQLT7sGhZfraawy4X9XyNAEckRhpsV5LgP37s6bjbD368F75GvRMRAZsoZ1aN8Qi95",
  "key9": "4Dta9cCd3QEhxtwXSPdJf2yRF3q3ajW4F8U5Q9h8WchYX9sdUMpTnp5QWVo5ABLR16a8qEZuE3BwvCycfq9MAxNY",
  "key10": "34p7EL7TQZ1rVspwHGvkWgqCpG54RPkdrtHJKTgmgSr2LAPjU2YspM36TZgct6CaKvUkLqypuZ6aTr1utxHGyQ2A",
  "key11": "46uKTz4y3XRtPYw9GWVKVeWERw4oEobummwjx5ThqKL5HsxbwyvjvkeDo5C772JHicRFqeywexoK9PtUcWb6zTST",
  "key12": "4AZsvAnjRtnJsUovWMYueyf2XyvqCX1LJ1HsCjgv4YbzbmaLh1hoSUfbLSHQoPMrw9tFeBuQVH8VSdk7Svjcnc3w",
  "key13": "41kEAkUEEBKzHdXi5gy8i7bNp7khJ4kPKTuaPELdXtnHHobBTSS4RX6CMwiaDDyyRaHLfR4jZysD66FgTXW6WAsm",
  "key14": "37v3osfi6tvPdVY5TjtaSo9WvP5EYAwCKiZyTiVgPUt6jzzaTZ1rReAPb8L52s31PWd3fqg7AHEPCTHy3kdaiqgW",
  "key15": "5GHju4n4QASYoX1rDpkdqDcaMkEgnAwLVVQfqGYLdMRPkcvWZHYmrVcMyoWsZjP4xhT3FQ682eqjvAuQiPBkEWXc",
  "key16": "6476ZL9FERzRSqa2QfJZCn1ZYr6HdBrAdY3R6xsthjdFNSYM2SizeGxcfWXxLpNo9UjBcUzB9V9T2gcjL5EAyaQS",
  "key17": "3MaKG2bCu8VMPpaBTxRwSp5QyCx3xjwdj3zn7K8bmUfB5psL9niEabHio2d4HKuNjQRQWQcJfr6kB91edJoW4hQu",
  "key18": "4hnvrZ6PhrRJSt5L7trgLWsqz8VPs4Gnxr2uFsVxcE141cnJ94BEmmd7Vwjh5pd1C6yp35MaGoiC9PtFxqCMc6mr",
  "key19": "4mmXWUW1hAmEfgomkbGESmSEJohWJZ5HMQWSbyVpVCC1j7d7w6ccT5w59Y78HR5GJx6hoCNtwwvH16UudkyvSnr3",
  "key20": "4CSmNAyhES1U8b9xX9gPDFLdMEsJVDcfUP47aY67mjbohYbMuBKEti2YboouHyQdchaoy3Q7PU9FAw1kjNCkm35z",
  "key21": "5GSZBD1hvoRbXY1ESx6nXfnnBBZWHNXShcAYwZ88FB9UVFGrQk77UMBfb4YgjjuNU8YTQamVyud2WfD2XXgwhj1Z",
  "key22": "3QTqYobpzDyrEdFuCc8oHJxDjMnS7PQQ1eKgUop7arNehTn756dMjtNAvsQnxuw7d4jZ6KHL9646mgfJ8NcP5w1N",
  "key23": "2e5qetr88i5Ni5ecThe1iLeV3CdrrMkeYUzPivBU4ReEHwe982BJpdMffh4jVsybHdjNdCn5Zhuq8vnpgVkcwpys",
  "key24": "28szjZMLW3jX2A8GYXbJFZk91Bo2bBpG1Eep3zCwUsYf13EyGsULKxhKX4nGLKioXtdkAxHC9kZcKLkqrpegbrnP",
  "key25": "36hVYqwjcskmyHaAE4EErT9hu6pzR9iF1GLkc3GaNAZJvYNQ3LcR2ZcqNFfsaY4VWQ7wgYQzKmDhTDQrWdU7cNW1",
  "key26": "35pxzYa8tmBhCMKKx2dygemVKYUm9FuxrgkRuPNzfsuF1f9CPsyB2JSTDnNtcpYNYcindWtfKiKr8fCYosWnJzDZ",
  "key27": "CLEbouvR9RME28zTp3dZv4Rsrthuww85WGbGcvDavvQrWsiDXRAmUmNdcC4DDDyDH1ncqWqZToSuvFLVLReB7Eg",
  "key28": "rmFAd9iPqxhdHUTLPrGasQzgKswJr2xEV68KRidY2pbebAy1HQawiuP99vMVfa94AKHcffFZPV9VFgHb44X8YwL",
  "key29": "3fwn1DsMfq4Kjk8ec3QfgNuoASpQGVDVpLNWXAa8AwVWDWdskgJTq43Jaf5Evfkk83BmoLHdGeCrGHDqxYDepddD",
  "key30": "2zbhDFcmUNyj4uspUSZm9JT8326AafCfvhWo1i9St7U9wnqzzHpigWMWBhFATgCbiZ3FLb9o8npGi529zyUrd9QT",
  "key31": "g9bi1BqmhF5kF8ty3GSKBEK8cw87CJimaEnVi8C8w5GEZCqoUoW1yG4gSmXgs35JG5k82QFsrg3Njn8V7AKiSkL",
  "key32": "3VDBjBe9HFjHqeeWkghA7WKGKX7MfjwRWAwsC8ER11ShmpshxqwGiRqGhNzuNFGQUVs9ZcNzkTtwH55HAguSn97x",
  "key33": "632F8if6Lxo2rYddMx1zMLPr4QcEeTVrJvB2DBBUdaxRKA4H7ThsAqKgTz6hCm1zVdhc8sFAPqKzdmbRvahxfJ9s",
  "key34": "5yozJWTFkVz6Zjd4cU8cGTzrtxnWg7uTxoMwE44C7eX5yxpdYvaNWNUvxn5qyTbQgEFi9vobHavMu8doNANMCCi4",
  "key35": "5QMHG3npAgB2TcuvPxYKRWWsz4UpcpBiXUzzvmfCL9vQQofKiUT9c9iZ6YhAfhFCXmhZwk2PPvJVySBKgHNuP8Km",
  "key36": "3ijfjmX98KAYzWNpyn4yrQJCUqexSDNuVKqre1KGSVtjvUj9NahRDtHovCX5KsfR3hweCp4x4nJcC6GMxwRkKZkm",
  "key37": "2WxKEYrUf8rsjasrog7DMWC5DG9SuyMJzu4QiwxBhV6YEYRHBwz1b4oqwvNzfNG7afEnkcHq8zkpJ4XbUMrF6Nvi",
  "key38": "5FVqZrr918xqdGJU5BvJwdKTyNbPxmLbaR9sPfMpskqD6ceSMi2KPCiWFyrResLL5MDL4wvEive8SpagMW1eoee6",
  "key39": "2spRusbrJ6WE7H3LWS6FrysQJKjBtAXUqmVYfH1VrDiKm3hfjkAa92vLvRfVKYccNb3jjKyeWZPZ9hGnZ8y5Pg3Y",
  "key40": "54buNhtZU3ckjsb71spbZUq1Dg5pkzaaQ2QVVPTTw6S82SgsP1pn8HTVLhWyNGBD1pNpuL9PwsR4jRMcSK9aAxLg",
  "key41": "5GPyAaXicBcYZGwLF2a8b2sMKFcSgqr9LUDU93PVpa7NAjLAcG9Fr1dYaVARAY4YmRmCS1n286uzZoS9SwmSmUoz",
  "key42": "3nS2BSVpnLQeqL1inVkaVpboojvFnRGNi7s8FMxuKRzYjUpUdZJF1cnsa7BVaP5j7Dei5u5PHdBbxWQRsAhqVSXi",
  "key43": "5WTr8eHMUR8nxpmzqZL3wA5hGdAYb2iGKbQoMNXgHUV3KC1FQ9PUVrXAqc157QCovJp3w39rvoHvNekF8wQ7jBSU",
  "key44": "YNRfby5WyRJCfMGUZJCvef7XytNAJpJYo6iAgJn9ajrfgEjPdDdFj7u2HiksHEdjTNuGT9EkFmToXQi1G8TRH33",
  "key45": "4PkUadEACcXWRhgJBvr7RM4JkFbKiVd14RBCLYPUVZLrRUaCBbXZhKrYC9uArdYbVcYEaqHgrLrmVEwFr41Jmnpu",
  "key46": "n7kTGhbzm3zieGD5h4UdGc9wt91XtUgLucciQe3qLwXQF4A6zJtN7FPD7t6JjLiezfy58TaJrteVbKug5j4YpCb",
  "key47": "5AieDYqF1ij6isw1w8PGL3j6cyhYPuPVziegYfAmynL1a2zcS7hAZddsNmh4dQrKMcp2jsGT7gBNjeYkdaki2SL5",
  "key48": "2sMBXSTXtUc27ZSvwCV3yPYDattCQPY4vL8SPB1hpng4QpwjxS4uGMdRagUVYHWkNfz29HjZxs68pKXmB9x3UmsV"
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
