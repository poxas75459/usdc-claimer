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
    "4VDRcSYemdjtfzKgYRxL6fXXv7RoiMCE2e8R448Z2zsDXZ6oPHjxRfeipUBwNEMyvg9aPYhob1ik9Y5vUWjmzypb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBRV389ZuNBd7qiEytoQNzNBDnVgiFdUbf5kbmoCVQKi9ow1Fu9RqegJtdicm756Wf7AvvuH7Gd4pKZc78KQMYS",
  "key1": "h5gYNnbfKV5KPQVzAd2m9aAF6j3rEW2i3bJCuJ1K7Wfmuc4e17SaW4PYmpSBXMUJhp7KdxMMencKCooM91z9JEz",
  "key2": "Z5qMHB9F5P5CX7GgNea7bbq3eZ1JPHCbiuhj8fmBSpHMsLE8kBHY4t47PxmnV3QW26wRkDPH2bSH5hiQeqtQgqz",
  "key3": "5cy5BVgbkXwJxuSGjJcbAq3vmzhNTnBqXjm9kk3UJUskeNPRpfwjvjsEKCu2LieuRoGgzXhYBRcDT633aKVUZ4YS",
  "key4": "3ZUSzRmHa9LWi5HZXZcvuo6bEqdi51Bq2kQVDdKq2N8eAPvnXX5BP49xRjHyHkcFwv5zdMLQuLMfKXkkkiVgBLzL",
  "key5": "3xEUkAwtQYTkVzLJMUmPfefAkEEpKLmKsz2wPvBQLPTVsQV5EUELVpS9fJj7EZTvCSDWdsTHR3Vp3dQuhFAf1nd4",
  "key6": "22XYGkMdxAJR5jgHJjXHE4NgFra4EjXhDXNRozyvjWrQm3QE4BFeiz2NA1boNMT2mwx9WuNxdYFgpQoDR8BTMN3x",
  "key7": "3hdkzCHPg5QZwWLtUfHbejrTp4sxNxU1xnSZw2QghbqKbga4pm3fbbe9nE36UkV4p84FBkGfKpfDBLVVwh5J4TP",
  "key8": "3W94t9DXoSJNFHKQyw1fBez1d78reKesgkrKjS54UcEpuhZhG5bXnzoP3HxCEXoWEWkTi7TeKRi1RVNWut9PsrBC",
  "key9": "ScQUhUSsXzoe1oud29aSSvCLANDKs1vpy3wxa31X3933ZaSaDtRLMyMej4L5R9iQ5hq2VNbpobdsPEiSBTefymK",
  "key10": "2Dt6zj3zsknPKTtAgoviSPQ2jcLejAB2SJNdkYA3wUvvJBA1RmDMvZr52HUY2KqNVHJFKaSqcR5VhfY1EZ1kEqNt",
  "key11": "3yHdDbs5QMowyZk587JWUsC3DRBB6puvyiJBkALG9MruVg1WyoS33txhhUu9cw3a87Ws6z9W4Mb3Fp1TXazA8hiv",
  "key12": "4igX4m1LZtQ1a9eFLQY1Sd1TfXsB9woL9CzPyb7jFFYLoRKU7J3T4Bnpx8VdeBUKbYYBA3CRWTa6x727iQ8iZjgp",
  "key13": "4PUyJD9u3Crgcgr6DDL4PWdHncUpAJD6SX6c896XEtPhzoD5iBR9GQAn3N5VsqqyyE3YaiaEzJvmqjKKnvaYyEep",
  "key14": "5vBaiD6eKhUb1aao2EvnN5q8HnykFAVnz3SFZuzvZeFNUk8bHC12cZz3jZJpRpucyfdsGjmTbet1MgP6dQu8HusN",
  "key15": "35o4UURFrEzvibvAiFoZ8GMJn1bPp4qhbbv1MeFuwujj9ShmUJjDBR3b7z5orfkGs5Xkxj9fHMi3URMz3nVBGVWm",
  "key16": "3wboJtZtxZoMy113FVF6zj3gvna2SMkoSMx21jLzU7Kpqy4mUc6f5z8dCzC4zmVaoaqwkWumafaUfmWL3ftcukH5",
  "key17": "2QWdrQomERFPFq8x7qqi6jQxmMG1XdVR8NhPqgoTkk9bAcyjdDixEdLiEqhbi9VDisw1AvDnmJ2eB1gMKRYGqQhd",
  "key18": "4pLXpJZTPAw9MFNriTnEejaHSj3D3kVwXP6MpfDzaptT4At7xJi262oS2Q1f5hxf2yDkFAreq2CjmkefE4Xiox4w",
  "key19": "3XFw6ZEeDML6zLbYym2xwas67rR72wDEv9p5LXuXjkrosr3zpoFhFZowLoPnrS3CEKY6us6jfMGTcpTuRhRM7ec9",
  "key20": "246fXN1XwNVPGhYW2x5uHuSygiij4ATUkstimDWfvgtA7vHxqqH8uWvH4p3TR2kKiUKson5xpfw5disZZ2k9AXV8",
  "key21": "SfajH5GHqddypYzw94AUNjpssW4192Q2MkBizuDyFfcWKKdSF6ACxeFKVWMX9wLDcm7ZD9TyTw9GkbABQANpWbs",
  "key22": "HWTdKDhjXZ827wDssVzmaXbTgiGZMcFxtqNngjwBP15zys3SqDvP76xXDCY4b3SBbv2xjorX2xXMWLWFADE76Lj",
  "key23": "2Ptfo8RWzSF4FredrdxD8TWd6JsuvCtK4NC5PRn4j2g394pJXwsATLuc74iir4kzSWopgFNcmiuYBhqLy16g21CE",
  "key24": "2V6vUbUKycT2Kg5KAZbqdK7Ym6Gy9PyeV3ZwSz4VbAgK19WdscZSWQXJR1S316TCnWfPXytDXWPAu1s8ncjSD1w",
  "key25": "5bZycpwpUFyUke3YWAczZkidrof3LVKNVwbobUkENnvFHNbQ6ehcmsxNL8Lz1UNz5WPAfUNi2upPtFBijMVBrHPS",
  "key26": "4wudhEvasB8PXYpYbUvjPj8ZdSpHZNtPnJNYy8UsUYWP8dFYKRjSnggTn45rxmoZsP8omQTJTwVhcoWNw9KzEtXz"
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
