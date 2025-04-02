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
    "2ZRvUfSBdthx3HsuguDyHTxkd1jDFR3exAy1B6zyYLtRnt1QLUHw1p14hTdkUUSjBQMZTWoWPWnjPFA9cmfQ4pm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bC442p2NqAcLtf3BoWtkBTCtm3L3rym4r5Gaf4Z7bxfG6fyW3SPTa15V84QqfdEEehZHDtat4h6CeGPjxJVovAY",
  "key1": "5fhpWB4f41aGbRgHtmkp5joueFKtynjhb8o8BQXNSqnQaCHHfMDXNqLVumqNjRPyhQLfeTxKQU6q2PwoG47f8FT9",
  "key2": "2Hkohvbw9r9BqpLnbnpmMQ492ZhbAcsETxtFM14MjHSLBaHw2WwcLh3pXZGuhT5s5MfPSdCkggNWSDAF8WtyYYjt",
  "key3": "2gBVCjYPaLyAejzAjwGkXSw7YXeZob5ZQQdZifFj4vJbMSDjYhGmP5u6i2G4CHzn8vXS6xPnmQavnRtQ7PHnEXcY",
  "key4": "2t31s7rD5JVoHohSG1fQfvNJ2JBrbLe49yNxSymcDmV8hih5xrAKqneon9yBbFkHfLypMACxGNX64wZF2b6PAWi2",
  "key5": "TpDnPLQ5e9J5snmqcv7seJeRTRTG5bYu99EbskomrHydvwRvC1WNMt3UG2oe2JpsLPhb7ifsz4w5cBXDQNTtvBE",
  "key6": "5mSsbt6gLmcFAQCSbyswubBYUq4FJyvZM3N6gaaobvT6iSa5bpkKrR7sNi6dxYgXeuL9rHPTsoPwhUxdVfpS9ACw",
  "key7": "5gyE6kG9ymgpFXUsEsawByYqW7GNfDaivg2zz3msTtPCg7aKsYyXGph9smAkRorbNuqbc9PchiyNWKqTfMhA7RUF",
  "key8": "P3zEwwHqGLMYQjYALSgXMA5TtUeLRMKaJeQWxYG93Tffd48SaV1MzoQvxXPCx7vwTEwjwbsdLQodNLRy4dzxhAA",
  "key9": "2X5t3D98YVy4rVGcTBKmGnr8mCp4Ei8VhPNJKgQkJs8Ekpy4KEKzFgQUympAXitSEVANjTEaJhmWPDVMh7VyWn1e",
  "key10": "4ZcRwGaLi6cdLmR3fCrh9Hy9cJ8Yqmn5uCqvy1iC8YJSY2WwcZ7mcVJwFfQMuZpxkVRfgFzbn2J2CdTkmY91fURX",
  "key11": "reHPBLLrnaR4UkKnveTw33FeFVJxsQkBgGoETRV65gXtFUFzX1gtumDR1jSkCXbWPFnPeTcmEevG9VX5XNbj6M3",
  "key12": "2PJDbZwoojQp5QLSstK2noGH8pH5BL7BX1JbGHANgmm8BTK9LYS9ySHU3nMhLAiWe5WwktQJswnyDEyUuTAkN24T",
  "key13": "281S2REL3c7CxBBDirBQKfcR5ZW87XtavMkKDsKFkvyrKbMJy8SGcwykQUX6PooDWfbzwq529zfAEyvey9iZ8Da3",
  "key14": "2dBxNvzMVfYPvusevNMxzhLL7PvMcjha3y3RHdNk2pBiTugja1DExqMRzCo8J64SfoAHkRsemft5h89h2i4GejYJ",
  "key15": "3znaFfn5YzUqNJctyNy1HGxWgvGU9W7c1mG72A3GSsQ4ffAgwodLLvKt4wT8fvHhtHfxFvNAUUxLzEzLsdNgEAFi",
  "key16": "4K4SxzLvjutoYMEohhes771EVD6kGJThd5uy7Nh6bHq9m3trMAgHMLSCJ9ca99z5KnyYphAoWci2MsbHbtv9YKLn",
  "key17": "5chAhz3d9eWxf9XEo5HGBGow3iMCnZg9hh4sVe9eCjUaZ6AuxireNvtARrxEfCWaVcvdhYWB171aBp3N5YM138L4",
  "key18": "5BCZEEzMfu6PkUVuqiRd8VEym3F1XNmYHXshXorPxjRWELvK9k2TG4oatvd9MFVghsuUXeiCbvWcqV8u6hDjNrEq",
  "key19": "4ju66TgiX5nTSKxNPnxtEug4wa3AqitvxfY87iseLPai3ruDGXZCmWZzWum47UmwrAioiwDBCLoicrbcvYMjiRid",
  "key20": "5vjmNofAjjcsGKvRWWxPPQuTQMF26zxSGom9L9zLCZ36Gk2SApRh8ZRUpppkLEDWMc557TKLsXCCAcjF7FK72RGw",
  "key21": "2VVGdL7BSB3wkTQPBeTvQzXV7pkHZdEm2z9Mdx1JmybbshtaJBSfwSBYJPmFrBNpdMcCFZakYQp3N4g1jE2GgVnQ",
  "key22": "4AvheEnM84gEsc412B29RUwYWktUKHu4uZMeuqBp7hrqajDQVR2eNPQuzHtz6uv11vMLxEUMbnPD1yMgK1ycNQMx",
  "key23": "3p65wxDbrzk91jCGkd9vJUWSVMg9NzHVT7y4UGamX5P1sNXMkPpjHipVtbRMjPmkdtCS75AKSdWNDuzxuPmGrvWm",
  "key24": "3zGxxFo3H7eYcyuC1aFD7S26MuVYWt9a7A3gTyRdAq2f7Shw9qSTgJ7uvRJGD9jq3Wj4mPZffHxCr1HftxSRWj9A",
  "key25": "2gfVM4qtsFUJwjLLmZn15SYpe9AWdqwQUnHkRRgzQcxfjkrGwTqLayLHoBRiQ15s9i4KmpsYcpfRCXc3BShTtd4f",
  "key26": "4JD4JPRsyq8nXwEgsgEmnw3GnCshrdYZCqSarZJ94pPgUys9if9meqBRKXYciNcNGfrp87MiyMppLHo6kfcLm57v",
  "key27": "5nQ2BGxe3QEbvW7w6MEmUR7bhg4KKcvA4fTrLhZ3mMo7US7ruoQvizwZqbCThyCSdx4W4ZgFtYE23CicK7ZFPH5N",
  "key28": "2ZhaU1MmKUTZL4R9rP3YiNnjkiJX5gXht1nT3dbxzabfncqbSmTuzguuBUD6UjrYBuHDCMqu2s8WyP5iWzf7Hh31",
  "key29": "24vMjec6GehH3QcyxoQQ42itFn37DpuFcsm2MtHSqKo4dJUnnRZyYeE1QdV44fq8qarbNtBU3pF7UVW1gAcndySM",
  "key30": "2LxTVG5CJfXAYuop8EnRgKXYmzABq8WhLpCq6rUo1jmkBU8j4njHUyad8eKvk5EjrBSc5LUdxK78quSPgbp9eMsS",
  "key31": "3FYHeCoeQHXPw7xJoSF76wSTrJZWPxHRKZkpchTkqXoXLUVfgAk43RL15bjR8YmqCE9DmxxEVtHiMTh37BxYviHZ",
  "key32": "3BocqQc7KcLJvf75TRh5hd7QEQxMtUF16SYzqq8W257APVsw5n4Uy7yN2TwundFA3XDF3sEJwsfPUncpcExAaRye",
  "key33": "4K2Lo1VMJRgefWX65EDPZt8h8zaQQyWsesvUEpmSmWACSivgeS3N8vV8trzLNgvj5kpgaicRm6oSnd3yYJ4V7w4g"
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
