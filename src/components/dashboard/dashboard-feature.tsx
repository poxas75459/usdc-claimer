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
    "2TchsjUqzKUzseJGXyurMYNhYjFumuBZqFZqJzpe1FTPweFLzrrinNpjK6K2CSjcUncPkwnHAzqayAVK4zaNn8Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5heABiH879iXcDvbp2TeHPxUb1NYdgnyxAQ9WMmXqdZDn5vG5mrSGwPfBFxtHMYqnhxLmgv3KtfkBb7GCFmK1WGw",
  "key1": "3zGRYKDBkWdts9wmbDgeBHBRo7V5C2FKq26BSFe3qAztyD5PMcpQYTJKRsmmSG5YAsYAwvK9PGwoktKaoZC7E59p",
  "key2": "4Sjkv7J75dxp5D2yDKBcSJBbQ5xSSCsc8W67y4TZ4jcZQgtPkX8W9G6CNqqJq5PEBEBeyx5bidu6V1KjFZEPQcuc",
  "key3": "5MnrkLsPEyYW8UWdvb1U7m1MKcRH48fjKjbRCc9Us2xW5KdLQJ4eHhSTrAqvH8MX5SPhPmM6NqMck34jY28xcFKX",
  "key4": "GXwz6Tjj4rSwnEgpNGpLx1GvjEijwbeNzKQxMjHW742QU4PpYjewYftfKFUsNYMgMB8FP9tP14zxphjFNLmm5ko",
  "key5": "3LL8rWWxqDSaeC8ATEMvwTw7Z4e6LtrARg9g6PQMDgfK5bzDCvtAo7TxUKFuSWN2s5ppxFe3BtbvLwhAiapzKms3",
  "key6": "2v9V8X43BbxFr22SMTyvLs3JC348GdighmgGMwP8NxUZENPezfxMsdmP2FyRi7L22tAUn1Krcs15ZuBguWA5uadv",
  "key7": "rgcsfJYoyLZ18kAjebkiZJAXRjkYvyjfsUuFYdHJAz4XcnaB6jr6fgdkJ6zYBEN4zsE2K1zw4pEs65yV65FbyF2",
  "key8": "22V45NPe4cmP3o7587WocAzkFAmEQaCjREBypC2mortCYPrNzETsHrG1zFYYpA673WCcEbnAG8DnTdrmVq8ANGjF",
  "key9": "DG5HndV1TGXarV5WYjJSfrv8LN6qayJsnG851LDJutzJh9durzgnid2tDiE7vT1Ehxa4rnXay4y21DDh5Bqhs6K",
  "key10": "5jvf6F8bVmZykSLtm9WhWffbmuJd7YqikBpr1wM1SkGQbivkct873XBpvKNbFrFLUB1H1qiyG4RNMGtrCw1DYt5m",
  "key11": "2jftDRvExG3g25PK2GtxpY34m9KerKCQWFnTRxJoo38NtGK9kissKjyDf3gVxwBcDwbtFePRtjByEaMA3FsTYFS6",
  "key12": "4KtNT2QyQDe8XLQrbV6ctbgFe7RjUXfL4srFbCKCGenaDWFFKzhPU89mr5BwypRvZ9wwy1kSYbUfBV3iZMUnvzNv",
  "key13": "62Ew7T9BMW9DbCskQXrwfNsrwsxNDHUBKQWvnisGXF7u7YMQKfDGy5hWaQkU1JR3Siqk2rr16JyWscQx4V2xf3dY",
  "key14": "2gnPWTsteUkipHrasZgAhyCBQ8WhEimCPS3hJxzZn61BYS2uE74w8TZTgTsk8FGBq6KojGB5oHoFs2353YQCSpup",
  "key15": "3TtCMqXmCDyu3ANawzApa6nzFQBUJD1pyE74frhHtxFDiY54mDpnBUwUCD9LmEE3WhwHUrArcvnahpFZFEhPuXqj",
  "key16": "3jE73XdtBBbci4nURB1rjeo8TDDbRSw2uzucJ1J4WgDQBLoXyQwSGUKaJXnj4ZsNWGarmvSek2WFS15q3n5LqiRi",
  "key17": "3xGq9qe4jtt4qmuckdC3LHDb1FqYE3ngas8SdV9hEPNE8f6XYLG3N7XgbZ6HQ3v1EuRKjkcuGNAMNqqXegtEUFTV",
  "key18": "4iLjnfGRMEibuqvqsYa6imfNXh5MkMh73gKuagtjhNTFv8ZxDeXAQxG8uozeG6HnE7p8eH7DujA6DyJdj7fB9Rdh",
  "key19": "2YiNF3k4nkSZMTJ5aMWXdEgUmXRk6oAE3pz9ihpNvJBCM7w8KMreo1Ee2dmBFBgxc4PnKLw7FpfMux9FvfoRimv9",
  "key20": "5CSf5NeaKa11jNwBeJNUhWWpS7ZQZ6irSY63mon1pDahbiYhuLUc2qA9sBfywdVfcCZRpCpfwSkG5EiKJsSdfBD8",
  "key21": "3mZXtYckdKN325ucqikp88wPpVgzxqYkGvwdtC3v3Pqt85bg4VhH51o2bEDY8LPXUTYyLQYhmHVXVtW9txDe1KYV",
  "key22": "5BeTAvg5Z2CejjgMzDXyzGMjBEVCgbcRydMnihoSnHfch8eiv4k1xUvhTZBH85fpwbdtcYN28UFkqkyG1RkpDECe",
  "key23": "2Mp2oGziMNHN45EAAs59N6tAtb6jJk4WLP5Sz48pAtVrhCKFxKiXSzsaoEzRCCKuynZsgUkpLqLQA6gbnL3m7CvS",
  "key24": "48781dVDhyR8XPJpDR7pBq7U7e6hKjXAJR7FagndEwBdwyM6n1ftRaz6CKkGgpXDFWfaiCY31AHkSdATxKQPWwYQ",
  "key25": "4yAoytfTGvnoLmS3cN8ETz9wz19K6ygfSEoQFJd3uh1J2dysxbgQGGDvvkhC3P6Pyw89VrJdmLPWZSuaeqMu7igY",
  "key26": "2usEw3gRYxEdmrq22vVoqN6nzpFq3SwRvqPYyErxhYhMQGrSXtT3oTCj2QsXKXBkg5ioRphQrsjfARMFkqyGiphj",
  "key27": "3jKiouq5kx241DnmVgbbjnUrApryRg1axY24RhBo6kZFXyAXJado4Gnpe1paupK6YJzuX8sVVkx1rW5Ag5K93a7P",
  "key28": "34dSNEBtxs8xzVMBrM2swHNZLthuqi9m3DGfhcHsJuMahzB9HCBShekofpTt4rkgj5Kd3HnHK4KEsioKKL33H2bp",
  "key29": "5VGMtBGgZMD8zZp2z8XKXUAbPzWLm3yctw6uQGdP5gwd2VVbGmbLy2vFYa8HkkupsAurCKaPjhhtpumwLgpAbLsY",
  "key30": "46zqbw112PZsNpJTUMvsEEU9WhmqvDjNcaHMJtFmPPonMMuq3ByMUjA1RTQm8hVQ8wYEVzuJEUQP6sREciGY85AC",
  "key31": "37FKxWGGFRgo3ZdBJmFknCzR9HMaoLQjzUbogs5ZzJxtx8sq89qjuJdEAEm2e3T2LZq9DFdwp9XAQs5t8kYBJ5Et",
  "key32": "57XzdLdWrDyAxUg1Hfoc2e6ByaZXNHFR7c5x845VUxWWLcziccQBpES29hXEHRDnEeDdwDLp7Ua3CGYUV1N5Gu96",
  "key33": "28tB75ou98zuVCHbE2pESkxvitLmWUKpJQavp1Pgo6bHeSYkKvXDq7NXKHqKDQbnH3u3K8MvCDDbivzZbYWianvo",
  "key34": "56MjEb19pVmQ1ivLekP8TFn8bbpubLtY2P6JLgeNpBE7mJ4LocXvv2nMTHfuUswaFL9qdXLbE2CEBKPDwfrEYxc4",
  "key35": "La2wiuWThymhFCtakTiuiXiVRTQCWeZxvfEUfGu3Q9ybHRX9aWafPS1BDafB8m3j9EeKbLMTGGPfPQX6gJ7pT7k"
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
