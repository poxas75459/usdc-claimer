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
    "4TagbnFnv6AMGUqHdXPYbzY9rT7cePrEZkipxvQjsSuCKJQG4jFVpwEPxq1dMXQAwrssF4kJnPZbThhZZeMUwDTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tfnog6mZDyjRnB3g4mcdh48v4iUUEdNZTS1BCPH9KMsL5nQpj9DxCLrRD4V6FyLQGCsZCjhXUawUhRES4MHCgQ2",
  "key1": "2j55oqPuZvVtYM2gpyNusefCwc4DDqnDuyYi6EnKmPGcdvgSd44hQ2ogat483bhQj78Uq29zTw8SA3JSKrJiqKhi",
  "key2": "2DSV1bdoYPSqck8T3bF99x1iw4WcbjE358mizqVh5XCcp7jqmhAi7CVvPQFbtB4LM5bAbVrskYLnAJi1ahV6BQ6s",
  "key3": "2p7WiAYPKjhg1THQiwoKtv67o7z2WauqdaKfF2HSE1zCprjXmAbmPXoW5vJ2LLZ7setzHrbBXMRk2g33z5kPx9y",
  "key4": "3VRiLJXPmr5RzRSPwKsHzUdY3MghySTXKtMeKo7Ts4FCeaFuMeKFfrLy6L7nLFfE8uqtq1ANHYyfEMQK2tMPN4Af",
  "key5": "cUvLVhnnGpLT5gcsRsZTJFPp56uT5tNQM4E3om77f3oXbewPH3aD8cYAA16zvcEmJmMS1bpYmKitEzwXEDNd7GD",
  "key6": "2cmD2rxXptrtGbG7GLf4s6gZjzV6jgyuHPXxYciBpb77ChdNCKCnDipHhp3WWomJibYmFokHWXTQ46Nj1FvruF8U",
  "key7": "4W15MAtkXfFih23XkmdqHBXXHjg6mUismoz9sdQw588SfvCTsRy44YhCqxk4LXYTh38Li5Ap4dgi68CnM3g2gp4c",
  "key8": "5JoKQfB98PCApeeeCWJSoHZLLMN6NwkHMzr6Bk3c4ZvQadgA7k2F9dmPJbVjHajHdYZyLj22xoAKFK3e9VjFwyF3",
  "key9": "3YAnh52CPabrHi6nifcMF4xTXSyHgQj9iQ17a9p7WgbXjhNiK7h685M21Y3pPaDfoLnctAUH141sKj2CejvM3ANB",
  "key10": "2SQpq2PjrEXAoN8EthHGVRMwjVWoRHaXUhrfpMNwnurjdG2X1yC99FnuVw5yHAWF3SfBTdBe8UBozDNbNTgXFpLm",
  "key11": "3Cb5gzg8aWJHo4HnKatZerJAy4Q8X8MMFLQD2uiB8M58VFR7rzjAAonMBM7ANaTTnDUDLHLsp5dDEynoQsaGPQiA",
  "key12": "qfCj6VEKxjFKwem2vBFzBX5YtqgZWmr1xocXEm7nYbPRDVn2gZ7xb6Xkc8vswrQNu8vZbtuCKg9RnL6uaSWHQdF",
  "key13": "Vgu5kehmyKNMQSHTrQUvny4vx2BVbRYwncNuhYuaChiuCHyTzjTK3QtxsnR1RS8p8AYjGioN2CrhUg9Xr8KFffx",
  "key14": "ipQzUbxCN7UpTfjgfxwfMCMQTfn2ygFtvT4cTdJsEQoiFJDDJmRYNKDPEZZrj63BYuHk7CR9MG2yQsw8ykDc9TW",
  "key15": "2i831gQh7TPnqyUspe5iT8XsGdVq6Zu9oaUBqDSPp3mHbi9xEEPU26DLusiqtFZjc8aE3ke5C3Ge11p9eJkUfFd9",
  "key16": "4WQKrqK9cbnZXKVP6Sgrnb4zoss7AbozBMz3mDhXWvebiMxdA1XZg9ZukPKMucHyJxFmSH7W9unZvavXqiFLUdpi",
  "key17": "9w6kUruFa6p2rLrZQnQQGkcxgKZCiabf5wvwMuAT6TxeTZeRvkaWZmKHY6mTihjK1b4uMrGFHSNT46RJjLzKjpR",
  "key18": "3jwkjZxoV1s9jrSvErYALTN9V1ge382bTDyp7fmQ29xsEVeZUEPAevS89kLZY6gZaMGxLverV1T4APv4ujDibBf2",
  "key19": "4qSCJWJntP4hJoW7xHWiKBVDR8vstjrxfMhE8zYuECcCbieAmp813PtccjBeXvpa2wu2GCiTtTq9k8766MffHawt",
  "key20": "3tFHf45kvPuL5De5w3wYK7vLvopkNPPpGNkJvReub1P4H4kKnm97m8a44ARBajfYyUM97m2h1ky4ihuv8nDZW8oV",
  "key21": "2VWQhouuKKZ5A6rX7HoH53eihBHqHohAgjiaF319Yc33cpTcMUWrC7DwGMT1aJJxFLvde7cc42KrAy6etVspMcRA",
  "key22": "4WCAAPuaU4MVZnBmyZPa7EXbx7ZZGmDkNGCzRhQb34vmHq2AugKDkzrr5FWpkpsGBEqew66gKwPGS1tP5fe7dNGR",
  "key23": "4BiUvJX9DL13FAUT7AvoDfz7XgufmddwqptMbk1MGPE1DaTzfiZ42XVNfiPszAB3eUoxoGGDDdDWdDWZVtvtcRXc",
  "key24": "2rhxptNtv1HM5SqBP1j9gNQFd6j8P5nPUdLCowL86R8aRxshTJ8HSYdRPMTDDCkDygof7CpsfjM2FnP9KiBX9bkj",
  "key25": "2HpCzKebnLuyuynFsMRDd9tGwn3zSssGSDZs2NeyHrs2yYVMwB3Qx1EDoshFTr1SvFsqKubnnNP7JCraZRGRK9tp",
  "key26": "5Pxu8eg6f4gktHaKyGNNHQoUKAaXEpx4xyCXihif4A9EHmFX7D5DEA8tLowjm2fPEUHzNipormyKWGEBAPuEtzK6",
  "key27": "2C5gihaXXsZrGyVBto5Dku9BwjTn4uSZieJatQD1T31MjPgk6auoZRTofu4ttZWb3Wk2PXxDF9sbKjZ5Q1fPqkBs",
  "key28": "5uuZof8CNc1jVTdruepfRYmcT2V1YHCLPHLcJc2xon9rNhr9B95hQrAmcxQWaSnkfaoaPbgN8kg6oBPYPkHMsfxu",
  "key29": "359bjB44iLWEnwsh8SjigMjN92xUiMde5nG5aLDq14FsTwF5crLkGjGs2BVdxnq9nwDGHT6fj2gGXETDvZdhQ7Xv",
  "key30": "4kWKBuBukgCpjnpbQMvuNZyyXniQiCuxCzRT7rDsSBosfhWchyadYSV1CTj2NRHFpaj5uAtw8GEZuvTWfPimvGT6",
  "key31": "217d5Su4b9MphC5YHTF8eXQJdhF8gDgiFsthQHrm2cRa9nmtUTJhXSdHbMSUXGAUBy9UDb15GKFaaK3vB6hJ2v8u",
  "key32": "65rMTDku9FctRf1RtmbNPNjrABBBrNWPUapD2yRr8pBkxkuwF7Wac9Vf5F5G1pZkM1LttGRSPZZjbJ8rwdxVirP3",
  "key33": "334g9eaZpWbXBtwHQNmxkBccRgivyd8Y9NQh6Zhys5VzGwriBY4dnznRYqXkiAMYLd3KqNRxgsafTF1JPDe6cmvo",
  "key34": "YsJy55wcFQMnnfYCZD9PPtBh6pTN2q8SPcNkNFQNh4EkG6faxUTzHRzttrERQvfxe5mcEzX8TC1RRQeqWiQ5kbD",
  "key35": "5YJ8Rj6tVixGHv9kfgqJj6NpV12gFW6jL8weG1oebE1QHjbp77ed4iXXCAhUKWAmgQK4k8r5b3oAwFTrt4hGHG16"
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
