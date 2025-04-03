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
    "3JkdhMW5gW5GR8wZkvNY6s3KugEBqsB5aUHSNbyENY1EYSfAkc2RLeFME1qZbpJNofMjni5bJk92RKCvjRwtudSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izU1AEsQ6GZy36148vH1Xz22CQdcmiYs6dLbLmFBJWuUgtrLoEg5j8BKQYLqRgWu4pcbGnVVvAChKo4tCBLKvTN",
  "key1": "2x9dP1egrM17Tc2jRaGZpDZHdQuwoTHcreubQoitcMNGW2DbDUAqTatnAb1BdB4QFZcQHaiiBKpkockdg3wARPzH",
  "key2": "3KgfW2XB8LcaN2SUz8pbE29E4d5C48jcfek16W3HgUxVDLrhsNrqa3YvW7j58uRc2QGQohJHbpp6XLUnG9aXt172",
  "key3": "BQAub2PdzNRnYjjJKshgeDW7tRjmMiGp3wea5Q9bvs8TQy2U7xmwvNPy52XkVG71uLzGFfmo2ELYVAup4hsTFkv",
  "key4": "5zAopmhohM9i33eJWyQuu2pr7i5LfJusvsGemkAD6NqEZ2qggGDJZ2bFvmzFQhBXFBN1XK499dtYpuA1rKeQesYW",
  "key5": "5FGGHfPqTCZjHYsxbzHSzVPvEi4EVkpd6a6HJvU4gJzyErqscstuFjDMQdp4bqsrR5mRDipLw4S131WKFmhQGEKp",
  "key6": "4krVZ5TrzntH7ymYbEKRT3uRAmLe8Na1Rs8eyx8SwRVu1aa4qig7z5gUEZ7nPf8g2dsD8DiyHqfcpExNKsihiukT",
  "key7": "2TZY5QTtfsfNQ5i5hYYDgz2bucmwWd9c8yaRos1mBPzhR87CW9BpQRyfwZcc6FVDs7WWUNpzsKPp67TiEiu7JhuZ",
  "key8": "3JC9R4rmDRtxddkYA3WVVGypcquVy2j658HSWNrUfwKCij9UpvCpSrWq8PkScqfcqAqYuRkM6DeGYAkL12HxyCtD",
  "key9": "5dAD8i3MSuNJCj5k3otLSc2sR3BgnL1RVo5wxtaNwpGqNtB4hRv3PgZjCM6j8aLEi41Mb7h19ZhvjEH1eyiCaqzE",
  "key10": "2BLXCufwSPQRLcn6Ar3hQ5SE2A54zhutxdVuK9yjYibjjXAYrSf3BMAnbzQ7KuGBEG2bPgsNodkiK6QoCCaWTdyY",
  "key11": "5bcWqVCxS3QnCzWRq3kdHxZQ6HcaRQkovYSK89susQyvymp3Qjv2LTK8NZVHC8vj1YQVhqJCUdmhzEyVugBGJG9a",
  "key12": "Z3bq15PENhAihZLAzLPCARbHrikPoHgBpioD6RhWsPeQZhgSUPyb1sDG7bFVRVGjhtshuTojfvwEQrc4rzK852N",
  "key13": "3VEJpDJgUitCwbKspRTFKAnZF7VGn5njUJHDez5fpVn7SKxEqKHP8Hki6NKbPvjXWV8zmxboyxNkeHgUmWoqKGTy",
  "key14": "2Bsn7EQrx6yVv1579seCuUw6iceu9yrZmCrDY7B2tT7wzpAUz4iUgQP1ps3QSL2a7dQJtv3kj94AieJyisjpKmMJ",
  "key15": "ayUgKAn5B9i4obzXjiafCU97jAveZTyM9CWtX9zrwyySPDa4VEuSMy8cgG6gTPcSr3pqtNCDbPJ7Ub3GuTTs2xd",
  "key16": "4FstziqY9Yfaea4a8oyPa9p9ErYKFBCU2LBKddfvJDzHCtE5fL7J5sJgARU7JSmJ2en5rEkwLSkE5XKiMAL6QGb7",
  "key17": "4W9Zf2RLAZbkgKyYRw7nQy5dHqNCTUU7kJnTUAnUNj2jcvM7PBLmvvQUjrLQKYKCqfDgdeL2wkdX2NFDtQuyzxhA",
  "key18": "jnfSTTdbdKbkm7LJnSWA6rzwiLNSyJsUtBUFUFyHqRNk9aqFHftwXC52e1TuPfUi2vs4WzPbBhvakRJK6tQpnAb",
  "key19": "5rr96EVcmWEpQ92wZXGcM2obLgw6pJSZGZ5jVGJ2MN9P3wFpLzj8Re3iC7yZUngUAD22dxD2a9aYdBFKQSwThUh8",
  "key20": "wWDHNmN3RsBGpC3d3FpYgpPBq8S82iBZydeKSCSUqTvxPbzsZB5v2eLqhbg9Va1jYPwm8MLGoJNohjBrAGcESRu",
  "key21": "23N1BJ6PCArRxCgFbp8kpzvp6iMKBf6uo9ZNzpU7SbYFTCZGcBcXWW2X915JdZ1bQRCk43hxCcECEjEqAi4Dt1f2",
  "key22": "3dWpV66RLDvrRDCLDntQ3f2tVcARdCUNqgZM9E7P1xPiFc314z5rL7mV2PiXc6TvspMC1RGztgqEdYUcHhuYbxEs",
  "key23": "5q53X3ftpfwX3yC86FGUU5D5DrWzdwhr9VDsq9F9YvnWqPmyB4X6RrNNrjvZ8G5WNqkPAhXE36UJonFQfnxTCLAc",
  "key24": "3yokqeeUjjiPKq8xJAKqyYmkHcqns2pcAqvRnir1s8egN7XEGPjWGm923so9TNymREBHQmB7VtCXTRfJxmVt6css",
  "key25": "36UKBeYnskWwK1QYpfVAoJaa9Z5R4B5vG2ey88rGUWvaK7fWRPy7i9zXEccg9ci5kFGRWHoZRdWVEeLWZ3d625ko",
  "key26": "5ohYrZ9ioakeVixFxrFq6obR4rgr5xegEqaqmWAtFrhvvJHVWaCgbzG3QiH5asQWT8q1nuPNRpU6GUki1v9KfAfK",
  "key27": "1hymFArdxGQU5wmX5iLwg2D1kHW2Qg51XzcYAft6f6bnHiCovVs73yPCdM5YbNHcEMhZdMZugVXDShdDKRL1811"
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
