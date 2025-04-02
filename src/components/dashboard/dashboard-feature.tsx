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
    "3SR3tdYX5XzgSoK43KHhiFwXaLh7PqnE53varMjsjog3rGLissiWFzhDMB2LK4RSpoacaZBeU3Xcku1kKLDYshjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nQWNjN8VyNKhRhzf4TYukRcLg6E9UkSVEL1spUE349SQmvA9pUdjyRMmNAnC69S4xQqYRCJqFeCjv7vtZf4Z4U",
  "key1": "XVvh4jy8hmXjhRzEMoMrGTSVnyM8QuM3NAeoXfepVL6fadfQBp9RU2jV8JaY91i3s9S5KUUeVmm6oQgooKTkMwx",
  "key2": "3nezbURw6QPuZUiYroigKcqtTq7THnWCjry6FwXNZnrqA8zx8isqThSEbL9ffWuggFGF5tK8XHDLbpPMMK2iw2Bv",
  "key3": "67UmfM9B9pmdKyJytY9ZzXH4VUSTz2hZQKZgjUebHZsqsWghRs4ggEokGuUASnM1vJ5ZZKxN5VbVd2EwUBpPuk3A",
  "key4": "9N26EvzGPhP4hE45HtUai2ib3vTbHuzzkhwcap1Re9LSqg7urQHmcrfQL9paztQvP7fFnSzjZTePnts9tSyv4Um",
  "key5": "5jLUXxAdZTEbN2AGHwpXMpVU8NssAP6A9eoyayBCxb7kFA6kZw7nJc2xmCo9V5q5ek2AmtTjuR6Q1gNp6tZSBDF3",
  "key6": "3QXyVXWefrf2PpBYxijKntk92K3mVzSjtQRgZUut42tpehxj9jzRR1cVd6ahnnHVC1ZHP2Vp2xVsdf8ddA9bR4Yy",
  "key7": "2MAZmhPTgUD35ftgWGEqLCVVzpbooNXFcS3AwXrmrWgdyx7zbrxerAjgCcpWn3rSaWsP9XuKUgx1Uzh1jxKjoWdx",
  "key8": "3JcaSKi1q2upxM6mvn9STyoJqAqmDNkfPEe6vHKATxRLeSZZ58NLNxPfXWF8d3PLGwHTcFpG8rfw2od4YNQyho9q",
  "key9": "mj2yhsLxxsBMJqKggyXEnxgf3HQVo4rAwKRifMeCftJRFv5P45ctq6ZDuViQostBrwPR2AUCQFs2HCwQh8vC4RF",
  "key10": "2pyrEACJqYFxMEerdnLri7b17TeSyfr9X6iwetyt1oBF8c6Nv8LdEmk25tyjnFxJVz5oet7AmtDKwKvb9FzaBf2w",
  "key11": "gzA78MJSLKyx3dUqzSKf21LjadevKmVymhqDWLTuStPDLbv1A6BQEjhoa4cu3LM53EjqbxNrGmLsDPQ26cZTmWU",
  "key12": "5CRsW88p1zTwn4KjARKHyJgoXp3ZYD113jYeDpGakJ9cW6Ciocq5re8qn9gMTNfBJ95n46fEKmNu3bob8Dj43gmP",
  "key13": "29nMEjovN39dyAFykhoSmKX13mMJoZtVEgzCitGoEpu4Hdedye6ujP4kcPycJh6z1xeM3TZ96N1fkLwJtPd7VsTo",
  "key14": "4qiecog2KBJsj9qMnFzDejUCfSgFzhQNxxiEbjQXCQeH6yscyqD4q92pBhs1aYCckh6QgcgGQrwR9Sb83oMrVo44",
  "key15": "4Gynnaf3WWDy45CJq1Up2JsBCikaaTVkBfJNG9Sp8FeD62HgBvEr75sztHYtQsXUjva8y77aWyhWR23zXsFXff2e",
  "key16": "66rjziR5cPZsQZkRaCfvJYRftZKWjuqjF4EacjtCiubKYXY49JsCiphU4gjyhmqJmMeNwSiC9o6fLZRHN2V6QSiH",
  "key17": "4YMf7DFsj8tJA4CDrHJCn9YJzK7ui2NFdQ7w8gPLvDEZC5DmUiH4jwwPcCsumXusEDc381oKKM7uFZeKp6BQdQf3",
  "key18": "5KVGX3b6QURUkrqRBBCpZfz8kmppNtq7ZNegSGYLHaeuBtordRjNDvysF7FYBWpfUMFfUzsd1N1JsjiW4NthhTqi",
  "key19": "3AjkE9729ZvZPpzhNSRnEQakvEeU1r4fpKsnRNyPwzoqhejHxAhuNVgwctaJAfmGEnE5Fn7NKiRWzzE7WV1KAugC",
  "key20": "4wLNNtRTR1TzTmVS9grTKawMM2Gcam1jYyk1ufRHxMWfKDcCz65SQTDARt9RphVDWFBjTJEAEQskStRQKju7BsQ6",
  "key21": "4sR7qFbUjXytC8CXLifoKE1DZa9Zvajp6T3u73WPiw6YWCqEzpUBR9CwER2358r8Tp2BABoVJcct8p5heyvRhGxw",
  "key22": "5YWM9STLbPw7WCxVxdHNN8ePXgcuSJ51DxPVWQjWnYT4hx6JXjXT6qYwVswqSP39U7ARgUXx68Ln7xDuYB33oYLx",
  "key23": "5jZj2UVe66pRREoRGioFjyPQ49NJ6oQ5fXi6EgduFWA789k7oLfnCwRgYoYDXcuGWqykHBNCUDh5cUTUqfxZQegi",
  "key24": "4bUDsBNUbA9iVFfRWMPn3ryzvT4eVmgpgVXAzHRoG14k2mE7y8Jo7Ftm1zPLkJ2xzFT5iQpvnjt4UegX3ohyvHVV",
  "key25": "3crmPC2Lshn2PuQQ9pQt5n4U9ogtYNFTNkV1rNUEmMJ8LUVz276bFzsWyewTVXHW3WwH4dfwnHTc252qqQggFifD",
  "key26": "4mRj17bCxFsYjf2cL2yQiBhjZjGQXbwrXAwf99MyaVm5i7Tv2egNEEGVi1AM8rLh3gZusWK98BVZW2zSxn1Wj3YG",
  "key27": "FbJb8xHcphDuEJ3cvyDwWvnP6D8xzLAjM55T4Ny7BX6tePWjmWiroBABtZ9gAJ4hNQSKGdCVHR4oCEUG9EBsaPX"
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
