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
    "34iKGv1unwZmTfYB7zQoQehT8aNpK1rYBURprcrb4vENdrdxsZerayNkJUeY5z7zb6C8Gr9fS6K4Sy6qcrQ5a3if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32FxJzKHKkJoNyFE23gnzU9Sg4W45iJcEPnZ3hoyrXXt7e26ufCj8AkYhKgphAqBRUNqopC3ukfCPp9sarT889Ks",
  "key1": "3JtzBs757gQM5V9Cw3NipVBPi5LVKVwNd1RK5WJ5K4U84v6dAmWwL9H2kqVXjxqyNvYQK3q7XBkMX5wPWV6tvLz2",
  "key2": "NwM8QaPCtDwhKUJWWGwvZ1GEQc38etSySB6RgDUfarPQsiQzTnywfyWJeXhXggwZpKeBnQMGhtZUcEp6qR6v4BR",
  "key3": "2JU8teK8eKFaBFvwLVrRXMqiDPi3L5BJyWWvwJCmin6LrS62XP3vdK2UD7vPDkeg8Hz6jGHsPSKHNwTdbS81UPSz",
  "key4": "48Lh97s6kocVT5acZq7BYrLk83Bm1BVHi4G45a1dZS79PUVkHVuu4nrMnN5ik21sux2X5KTvNXNQmpEMTJ8d51ij",
  "key5": "5ye86S147wMkp8ShquHbTGXnuiiBbJkBuvsBnjiRfRofXs4Ek6mYp12XbxBpZ94JyeP8cD6JMB7vsiqDmrsPvrF7",
  "key6": "3PRtuTVzdkEBdQNmDjtqtWKdcyTi2LQURfhQAxGRZX968SUvbb7G2jkASFFo5gFYdaaYPCrwkNkFgEn1r68HTAQ8",
  "key7": "2U99JToV1S9XrjpoAwvMdwTrnRtcQDsQ8cMBQgy9Z1PR1XYpV8zopxHj6JVC1a59fFkCw4fPwXwVPtmZCCjuuxXb",
  "key8": "62TWkT5atbRu93G3R1gkWEDaZnp9v8xZS3f3t8UQQegBND3ycP92YKtT6cVaVu3jPpgiKhYu4pJLWoWdQEAK5qGc",
  "key9": "3oouZ7tLnYQ2xgJ5YpBJPxAApFYPfyBoGx2ZgLTBPCzNgdcafucPzVCjfjT7BcB81h7yGGV1ydeym5FhJ6sf3YZr",
  "key10": "5EudN6CFxDybnjiDwLHaELwvXzKkAozycMBkHw9PspDE6jme2KCJh6v7aKpF3TpTBonJU3QKSgRdgiUVQBGJ3NMU",
  "key11": "31J2hJJbtV95YMbXvmg3LpYv34PDLqhNMXspRY1WCnPw1tQmKKUeXqL3zQTwFvKzNXyyha3533KriSn5aiTahTWR",
  "key12": "2E98aprgoj8LuxK9Mjv3qG4icdBUMkcLQxAJR4xDcsgMTgYjnPV9SgrRpkeZo3HPLEcHAEk3dPojPX6FEk2J6qcs",
  "key13": "2H5Gu6f3B9DHzuTFmoMBXZNuTXqwhqpru8Ehuw73q5GTH5NW3oz1qBNxJ9wCGeBrMZddsLXTPGmrBzxVWWZW7CDT",
  "key14": "3yzUL1RF4Myda2ScehEpFef2Btgsz7j8z6ghXDLLRhsPLgiitUhULjmf9cigDQH9kBdNmccukxF7q5psQmXZSa2p",
  "key15": "3jeNg9UofXCpXwVTHt8wgPAtHCKBKNH4gqc79gH7vSsyVy9A8Zi5yvLj3fUVS2UXrUdmc1hxMq1SqcRBzjCptdhd",
  "key16": "26YtUDs7a4LPxDcUHRUHySuweXoXyU988DdYPFy23oFwx6vWEmLJzY7grKg1TGBYb3dCK4n5YA18JyriUisXyBrz",
  "key17": "2QZQSxGPFLfFensmGg3Df2CoRF42D3anBvPWYj62Y2fzc1WHFugyoeLqAKUqUxvTwbdU9Y4AgrNuXN85ky71nzPi",
  "key18": "2jJ8UwUJwojyTsgAdY9fbyfdnsDeGNJNDBGvrXKZF26KPKYsjRmU6mk6v7Cc3mC1YLkPqbegWe8hSfAFpCXXgDfm",
  "key19": "4NEPoYnVebvFXteEqmFc2HCSFvx7bcZNaWej6VSVKbt3fQB4FYQtZ4NhR39zRQp7FCxyhovM1CppxFhBHnFxAsp8",
  "key20": "427tK9mUMweWam4TD8bPZnFHuojSn46NpN23Eb8Q7nBGKCBmYishLkurFmoCANetWonRFwBpziVKVK5RtYCaECUx",
  "key21": "2Z1oisUoabAcMPPBdAnNpgtjTSkfmZtT87UbMEtL3TStkArZMa7N5jWeoTKqkZHBULa6rVB62k4hQbPD3qBkRQXu",
  "key22": "2r2JsXpA3EDrhQonU2s3yzbALkfUNTL2kvEh4gBFYXpKmUKisAwSpATdPLnde9acoG1UwXKizRjqFrWKtBh4W3R7",
  "key23": "4WYvM9argFpS3FqxSV5oUZyQcFVi3UD9r98swcgXAkPm2vRVVvMPVZEQ8EeMwvNsuZRM2rZMA6Q7qPTs8GwBxxz",
  "key24": "K2jpaivJrSag5TSznCu9LasC4XSk8F7QThKfH2zeG8aRT3KRtExfjsgLmk2MqPmfPDyGCzTiscxkqtHYnxAtivd",
  "key25": "4sa2qir4VTJAFu1H2Crs34VSPeJArpo8kGBFQkSKLvz7CNBzucMaeJw2rdTVNRhDEAnSf5pBuhsnFn7gBqRPLci2",
  "key26": "2cbBDp5e6QuguXY6eqsxpUBu3ZHiquZbM65fuKQ8izA9exXXs59wdMeGhz1ghsvgrtz59kbqurFV46N7aZmGzJ5M",
  "key27": "mR99xVxXgBySaBS6PcKRmgkf8fXJKcgHpM8S6yhM72sbfFs8dNSUhe7F53oVpFUfWvDDqUA5mLcBpwCf2gmxxLT",
  "key28": "2AS8quKJWTP47etrVEjaXShSSDKqs57NuRft9UfVDcBfA2rd33zrWD65tYAZoDWw5FYhdtMUn3WurceC8Pbcpv2J",
  "key29": "3VfDTeGdkmoMQnQWttn9fm7gxUHC8dLw3meAkezAQSrXjveLsRJ9Cug4jB9uozDr1PMMFLx8YfY976jPBddPYEnp",
  "key30": "4kpeq4SXF9jMxcJDq7HXv5SmXBHUhiXX5pZ9vsikNN24fzPqJ4FiWP3dfSUFRZjMAoMfFXG19z9w4nPgUXE1sg5X",
  "key31": "2d2MXxNC1VFEr8fZJ6S9w9ufeMXxZK5Uv1eBWGYJh7QWd3jeBetjEWXdwcvhT2tzd7uP4kz42Sqj9RQGFccPTNV3",
  "key32": "46TSpn7xoNNL4ACVzrNn8aApnjw2AvBhj97QkprTDeaLbwsfUhqtfbpfpUkfwnofw75ArVBQx89fezCYyEB8FbWj",
  "key33": "5MdJxYJT67Yj46S6DvzyxsF584VS9AGFSfrb1tg1r5E7EMZVf5DqXkrPGhGrXVMgxu1AiRcbB7YT5q2XTpoJUbEq",
  "key34": "4r32CAe5QGzsvjp3A1bmRGNNsxMoCvMdvx5DZMCfUj1BpMJeSwStaqFW8dirajipSeJMmrXx2RKGMrSfasVAZcLT",
  "key35": "3FPHo7cRvks1ug7KHgk8M4xcoVs4NWF6m6KYpbRZVseEKXkRzz8jcYiC5PMmT5uMWxexxh6TejgE5RKyrsC9WcUR",
  "key36": "5CSWSsT9d1eLQ5ohCuPNrMzzxhiNSDL7qE35c1teMYFnYUGj4kSkhj9wk7mVKNyJJWuDismheH94k78cZLveLcQj",
  "key37": "5WysGXDgPGLYWQpKvhhcZjZkSUvGzYfvDNNe9JvdE3Z34ry3HvaP2sJ39ty1aRQMjg8epXrxLpM6UySAdVLtmq7o",
  "key38": "5E5YPdhfNytMQco66DHM4D2H5SSXn66BfpJ9KQRayxxkqtYgJWvAcZcWSJ7GoXJ9E4Tt7kuhEpoAgqWf59XgK91o",
  "key39": "AwzcLiUyHuMupddwKkEbjPUNEWwgSBq8A2GRHVUa8wNdJ93i413yCVKAvXiwNECdYsvyqzPfnBwJsmkLQQk1yQH",
  "key40": "5ReB8wsHKFPLXexXEQ7jSSPRbKzWEUdrFU9yArbQ4xXiBECuqGYVfKR9i352j5zqfJNWdzpnS9RjuykEP3jNSxAA",
  "key41": "3fG7ntDxfhTsihoguH9mVURh5RUdFLQKYNot8fiHuoVEgL2EMFF9E7FLusZDohR5SF4m8C8kFY9fHHmvMvhuBKSB",
  "key42": "4BfwBYfeoNhU3tCJ6dVrDLQrf5sLEE8RrRGAb8vhnd6Jb31w6qDgaWZx13R3TgEXmjhAGBVp3wmQCprMAhm4v43Z",
  "key43": "5BMyUmMdFghdVSRkSBfXvNZhqw5GoEUnb1Jpuhq4tNL71SU32nor3Ghzob3R198CH3pQpNVgjT5t4Hsb9bGsE9Tk",
  "key44": "yBeZp4KFFWwtyLwBo6shM4qF1RK6MPjZobpoS1GUDr8CGDtBHiW2sehDLEKDpDMLTBgCqFn4YBsV9qt9qqThi8c",
  "key45": "4gCDaJ9FJeQNMmBFBBhAa4ZgZxNB6PnZ2PWe8N7nZLBguzo5FmqMvzpFQfYjzXnAnBhr15mD38yp2eRfWQxTmGjs",
  "key46": "2mpKJ4X19MzPtfrrznCueJMLxB8bqHXqVHyGq6KaVUkdVVvJfXCa7RpHwXPaSfMMBgZBsCHqNkH1jhQBYTRki1oJ",
  "key47": "41ehpsJkzCUBdPFgtBk5V5rYsuPeDSx3XGtVEbGsLd3gbkZSyWFjeF6d6hWobfUAqbh3XAhbycVW8CF3ADwRvDGN",
  "key48": "KwAnnSjMDYRVemUVXRuTjB493afkkY3Uz6o5nwu3yzL3RfCaop8jAvPWBcmnjubQ1nNFaMA7WKyT58xMY724xc6"
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
