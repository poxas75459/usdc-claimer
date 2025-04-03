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
    "4kPxy4i6SzmdGpqQxB6SvrAMWjDNMAdLEVHeaETy6JM3Wxqh5jL9fjENSqm7Y3SjY9AAUvrWy11oWX7EMC5P1xeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3kv7P9mop7HnG2nE32XDXVv48DYkqMAKJZTGqj53NTgm3rhFR9nrChXZQyZ2MrhxG4DUfpLAyusfCkj7KHp5k5",
  "key1": "31XjEUtxPaKuWFhh4mGcDRb3758DSsLt6rQ9yJoc5fZYu3pUN6jgKzPq7AHpbUaMUUMbvbQitCXTs3CUL4G9L9hU",
  "key2": "26J34wjxetW9hYxX5AryknsqBueUwDWkiKYtXWg9aqtEeVAT8Qbx2Sm4V23swGQ54ZhBdFBajmgAS1iYhTbuHNQP",
  "key3": "67Ndin5MUThDsTrtYY4W1J8hbi1dRMPhaNPd9dxMjSxUkcseDXzogpvTFWCzNMsj49xx2ktogPZrs9BVr4vm4qiE",
  "key4": "2JewdisjxQPx32gMW8qgFTA8GnyrrZmLkG8d6cmEbMULGDycDr8jXL1qx9hiC41GhQuHt4sK2qrZZkiHLTU4kna3",
  "key5": "3fVGUys6zA9CaB5Jc4S3NKJMMKAdbTn9DQnU1BsU4EtR8if5QyBzwFWP3m5uT2RE1rgZXrVZsvfYiCE3WKfs25a",
  "key6": "BQkYdNP5QR9PZxvTUoPCJcjNtd3ifxDnFeKXqqfGErPHsSZY1rGtEFzhxVCS4k7bj6qET2MNvf8jfu6C1nwaWGC",
  "key7": "2ewGMtEv4ZJFhHSZdthD2xC2YTorac7EQRYhMU6my4V8dPnngEctzuqY1nCKADgbi7X9vEs6EeLBzn2yAfhdcaFX",
  "key8": "uuAGB9UzULTBfQxKugNEy4w7PoaKvYauGJ5y1XVJKPTg65RdQnTGevYXABaEYWTWqazPMghqUXNSzX32oNhohA4",
  "key9": "3CBfuCEGq6FMrozXbNJU4JiPEkWw72HwFaTGiWw2Ro6qWTyyYq9C75frwwirxB3JjvNnNJHqeXDAJ2SwPkSnPwkQ",
  "key10": "qw4yKRoQA827ujqqDeg6py1WhqWsngAMErEgWDcJkQi8xV75v3SLdxifVc59xDtBjQiW2ohWFxme9RzJxMASi9U",
  "key11": "59qHq3XCmeLaXUYV2A3dinATum7XSdjehpPDFwW9jcEjYx67vSgacP5wQM3co1C16grHc96ktjQa1uRauc5UzVVo",
  "key12": "4auKCYwZ6soGNA2z8zLdKqNevzwPkrgLyTNWZkyxo5kaB8sm8DLtYdp4KVak4iqJsPRTCCZCQDetTeRFRwUak233",
  "key13": "3DghSUTpPpCURZVmg7mAZiBApBERsF6S9B9vaenJsjr2AHavahjFxQbMCqJabbGBkHKpK9E5Pas9FLBdyCgKGCB3",
  "key14": "3Yy4ccifc6rfbYWx5ZUfuT4sqw35Vqqs9iwRLfgsHPurY8KXg49AEG8fshMuhRVYCECMUezfwZCvnDD2UE4BsYMB",
  "key15": "5gi1tCfDeDaA2nh8kixpzvemRFsxmg1qBr8UBWAG4oU27Jin6rnKuoE62jMm3Ya8c8d7GGLhSbCn7grRNAztA7Za",
  "key16": "gxMbcSC3dXo8M3S74wgBosBy1U3LRTELoqNVsQLPjgEewTXVrFdZ5qV9fP6Gw6bfbtxpCyZYVfu4xeiqRrWt8TN",
  "key17": "41swdJJQ2McQwHLhcJFQqgtwRsQJRcQ2ZRJu5HUqQM2d6ukfhCE5TMdqnMYyyNxDQ5fcFLNexYYadVpPhC8fCQQg",
  "key18": "4qQBTXtwg4zLY7Wm6K7ufTBSEXoVWQxu5u61Y2qQz85rEHXgmfDaokqiHEq6v3MPetNLyD21HCQQi831ZfSYZoZM",
  "key19": "nR943SevNN1598PnZkSGRa1Nytz9QcEJFhTMiG5qtcDVuRm9vxgJJyzu73ngBgWxcLDyTacmFEnYBthwxB5YTkv",
  "key20": "47oaV5hajC7afos5WpDSZDpB44rTdeN3mxbZ3iFdRJRP1U8poG8FQjrUGi8GKGi6Z9bd9HjbTk4yUddC8NGgUvhN",
  "key21": "3HYTE1KL5MxHDhWVqkc6KmBfBbQYFxFnKHZhGjZi9PQPriqaEQ5pnyP77krrJ8sfvauJ4cn66FQBR8QuWB6asNg9",
  "key22": "4XbFzd4PKgxCmiRMiPPh9wy4oxnEZxvqGiR7cCp9ajuib85PV3VS8wv4ytLzbyQzeLrmZEUqJr7iUo3nNZejgE2G",
  "key23": "5tkUZzRBkJ3NksLvVQyBFPxAXv8ShX14Zt2DD2YzRiUNDGHsb47fkLPSaqgZVtTkjF2E1Des1uA6dcHPBxvm1jmo",
  "key24": "2Cht5vTVts5EH1Mo9jo5QxiSyokhBM1v4upXPf8AbZrhjnmqcvCwEME2zXBx353vdr2ZvnKuoBgYkaWcDu5zvYYR",
  "key25": "2MyHPCqeEV7Wfdc3RrmYy7bqARRk7LezuVhBTFyGXLd7TfReXcQqf9guMh3jcf7hWp29PeQHAWiymHmdBp8bkbq4",
  "key26": "2A16qbyfc9TjNagKFboh27ckvRcSZmGo2o5Cp9fhTptigWyic9s9eXt2f2sXRTvcmzF3L9NdDN9SoMyBkVAJNgYt",
  "key27": "41b6ExdcK5tLua8ndU2wmuzLWtVNuDG8E6EndLHjmUnTBMZkdYnvtrbEStNwgqSfXVtAeQJFiPrq4tDufCtN6Zyf",
  "key28": "6FB34JZJDSMGXHPWVWhQYeW9cLFy1U1toQabX9FMpkJMYuUvJhS1aFiS6w6wDhGLcVQU1cD4WCeN4iAasbRuEPi",
  "key29": "5yg4vYGjW4f1KRHzdYpvg3nLtx2c5tiuLdLniNMVQtBiAsw96NPLykpRbrnaxUCrZh9M7yAv2LhBQ9PPNg7Q2b2z",
  "key30": "5RswPc8NZAhuvXAKigS4YRRHyh72E1zFBYU3zfxZRqdTBmE7jiwzagxqLUW7j5i27v5xY4L8VqUiDCaAezCKAdN",
  "key31": "37JVrzoB1orWBuPUY3ridXzdhs4ZRwMqrTdsp5wDHRuvwuVkcAso7Z257QeJSRtZCkxD6XFK1c7oTU3Gotbsx6hn",
  "key32": "4gEST5qPNtLF6S4nmTaRXUtyJNNxX95ffaL1EkUSmgUavgQz9hpNXgxWKntj7MacPPRZnjWKYp6TFXGCB5aSTak1",
  "key33": "5MmZ4h2zh7gvjYXAYjfS8DTfA5uEoFd21LrTiqKuBVRPQLYbdjrBqWmWrm9m74zYtVXvycUU7HRfaw7JzAQhxS3H",
  "key34": "2GvU5xVkH4C1qqtYnWUFau1Hf2xo8hyfsAMhY9jTLGUTJMNwQHkNDjboQGDGDNet1vE8MriVv6NxQY9LXBzuVww2",
  "key35": "2YiEL2Xpdb1eXNTU8u7Kowar1pVmtpdeRXWKB2t2aK5f6PkC9pyp7wJNW15gPYNcFomp78fySTbdokLXueoJcr8g",
  "key36": "5mb3D11Sg4tgnE387bwVGcdaK6XMjVixTQSihyV4HfTiNTaBtuJzbHAuBU4HUS1F7Me3QmQUkrKGMSGhuSLJcQU4",
  "key37": "dmDfqw4RAZxNTbSmNN92XmNga99FutvNxX3kh6LJ2fa5ZtouzptAJnQQTC8LFP9MCFfSPEsbWE6LkJFpi8TAbPG"
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
