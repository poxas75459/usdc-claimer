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
    "3uGeEAFwFGeR3fAV2tBjymcbsLfwh8mqMqe2ABVUU4darkBM9p8TCtTKVjfB96Vtyaj31qd6yyjcskaBN6u9ZSTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMsLvMTvhBqAjaHwd7GAyk4aaZjQyFcfLcK9Eznn6RwhxMq7ufbSJZQ7VsgQtjoZYoJgPLh8Z1DdD7P3mK8Fzsy",
  "key1": "4MZ4gyY4VDBDKj8G8QGTQ4BytBryhEVmNiYL2DaRb5G1GTNhhSrM2nrsdApKe1StSn2dg5ne4HAzL4bJLeTrKwBD",
  "key2": "2NM4QdqmQvdaPHMgU8hTVdD4QgohPgTEek7o7urLkTbMXqNLZjTqX8NKN8bEWDxJKbdCQiLgs4dPCD85PyLQhkBH",
  "key3": "3AhtnESGCgxa2EbtQCXremWdTSPPxneKcgG8F8HzS2xEyTpJG4o9wf8AeUcghK4SRk5pfaMNdTf3Fo68c6kSZZ6D",
  "key4": "4YLu4McmFovR3vQi2c53hi43wNZcsbioDVDzLoP5ideiT1TGDyYKofH2pQMDandRZnFBQ7W8Mo4WJTZRqHVk9trC",
  "key5": "47hEfu6kmPMr8jBmEScvHfcvgpEVTDZHqYmPKq9eCgMFSx7ry1fbNgxtVqrgUJFn9VKcsa2doBDzwnAFQdsXFZbJ",
  "key6": "2jkQf8noU3fUWLMrpmAFyFqAofTNz12rdhrrS6mYKEMZSaepoThG566q68fihb6qTbBNEGpfT57QiRg5yPhr1JsL",
  "key7": "5dHcBuTSJoPEnPPP66wzQgTnCQstTQn8joH5JexXimrZR28xKvyBWzZArNrtiwwbj6JTrDrHTYnNTXLmfYC9CvMS",
  "key8": "3m85TJVNvYhKqRdYEh2VVsbVyZqufRqbdeQ8DMYZanUGQ9zwB2QWg3pagRimomrm3nfUgT5omwwx5GxABbiKGcbr",
  "key9": "5rr7Kk8PjgmwjjXT7NSkt866wbxQK1vU4RdcPMxeupFdSujcM2PxNsDsd3FpiKYbUPYRSTSGDoYCphFWpY8JFvwc",
  "key10": "5jkMAYxQ2fXHw9ZUzpgNRgTS41vikvQ1m3BZ2adfLqZyNJUCMJrXPUKJq4zTvcEmJ4XJLbibA2kidnqay13hEA6z",
  "key11": "3TSXyUpEV9g1dWufr6hDTUNnty84LwRW8nV6pMrKxpMchUgz7X8DJDVyVkPTXA4Zxtd2HEztJrxRWsprJXR5oFCa",
  "key12": "4BqP4PHLiSDHcarXrTq4effpygKq4MChZ1k6Ha2pcUdgrTj5E1hMncRe8qvCCuQQXtBn2vUfRdkQwZAKyCLKuees",
  "key13": "4znuniE652agEPWmzc49cfaVQu2t1VEYK4SyEFRPrRrZduYgnw8viiV8Vuz13dPH5wrv1KwjZJEtdgDY7K6UnR5C",
  "key14": "4XpTdXgKf7zNMYSdLNiUbV9AZLqBJWtu56yxdK7cwws7N5ujGFSmhfTTsUVaUyCv4QHfUA4jf6ktrgfE7Y6ciNoX",
  "key15": "2Py1W9sMj4yY1TVLSkUV93Pn9yEKCd3GBodESwMVmqwvcNqDVhbEfiRumYxUrE24i5cMurEQwuvn7j51ENTVrLPG",
  "key16": "2DnMtKPkNpcERcnMMnrqDyak1sJAbWVLMhAVH47e23vWVv2eYH98QRnZv8bMASRkQJMsRttg9wFG9x9SqaCtn7Xb",
  "key17": "3fZYWQPVL6f8P8RrSbBvgZBvHF5evkoLywzDo9Wn2eTTG3VvSRKrqmaWxhyGq1btdvxH32KFAM1XnyMoZtUm6Z5u",
  "key18": "5u238gy8CXJMfDnUeL5r4mNPkeZV4vT6FZvwGU8tVinRsqXT3AdMsdErKKyHXXD91xekLkDHd3a3PP7VkZhRR3PG",
  "key19": "42Jw6eKTMJbmcCxHY9a8d6NBKUYvYVRAjVj3oaTo7BcDqPE7Fwa7qhw2gF1oyt5HAceWSwPft9urSNf7dP2598hi",
  "key20": "59QVXfv3n7GREZi1EnPJjkupcjJPVUSmbE5GKZkmwFbWQRLJfKXthSahT65YMgjg12Rf67G1Jb6dR5YgYN8JRKnC",
  "key21": "2hRkRQvmGnUtiM3S41dR2apNmLba4KGN5noTRoXyECCHLdgEdf5iP8PuRd9Ga7frR7qyVHYWAYcDdhsuvS3fxPcn",
  "key22": "3uyzc7g3aHYMYXMXPd2fzFBUhDxoLj5bEzxP4ukm75ctM54PrFLxzuPfzRksJmJJtmN7rP6qeDHaCbpFsCXoAZDE",
  "key23": "iudxybnyTtve3jYjVMWSMKrTSqrMT9vq58pbA4agmHZv3Pdght2bhtGBAtG8QNGLtxjFAMtwcXumr7NUfTjf97n",
  "key24": "2MU5RJ7oDegC1QqATTk1mfjZ7vPLP1Ai3vrApGc3rVfYsGeodEg73j8B1zDJckfLyAeo8rfExWqB6nEUkVVwx7xV",
  "key25": "3h5RCtwe7uFQrej95MqLuRU5EjenPF9EG5PMmvY1ySKRo5XzJxRUT5UUx7t7okaze3KFgB9kSSs8pRzJKtiTSrg9",
  "key26": "Ux5C1cmf9mvmeSyqfozRDTSyujLqejRBdaz8X1gE9327FMUuFF189ZoJcb5csTUqXxjxQo1cvRHvDfCJuWBMLn1",
  "key27": "5jV7mc3nobquwFYSvqdouEV9GvDbUyBRsh1vmNL4GMEdKRc7HA9Tc3aDQ1WRNrUJzJKmKWfSr1tehebTEJzRxogV",
  "key28": "5RuhyhhJN48asBzfRxzu6Z9nCiteF1SWihQsv5MDPb9NuT46tSBc9HMEMxQrfHzFREZDCqVUd7DuU8223GyNorjT",
  "key29": "5n55haQBuyJ13H393MZopyLLRw33B751PZFNee5H5H42JueDtn8JdxcNEvQrnFZ2ncxWP7VG9ZeKd6rjA5EvMa9Z"
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
