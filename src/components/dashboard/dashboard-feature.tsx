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
    "5qkH6Y8HBDarnW6GwkWLRKZDainxth79RGxKnYC6Wha4esjN5SsDK8UU2VuexFtcB2cqdHXbp6YovtKDLSY7b7Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bKiCX3AeAMHaqY2S3R7i2iqhwwVngWXPkBgoYnfrRwUiyCdm88ALRECBitpgHGJEhKr1bPzSqu6wFpmyWEAK9g6",
  "key1": "fpd1R9KxQGacq8o79E39BrMZRHC9dZ8h7voU8EK66ZaKTxGqYDsZP5U4hVA12R8gecgYcxMC9uMjTT5E6kNmWiw",
  "key2": "4c8ozouSRGGrJoxEz9w8QXMGhSyDgwcibKeF9L7Nsz25BTsaqLcJmqnTUYpYLf948ncV8fXptKeV9KFnCDfukoRx",
  "key3": "awV7t13y5XvBwzT1XAyKVr7EFLiA2AzsXApbG8j926NFjt8Er1YGGVquMUEAKNT4b6uAQXpR2Y4oj8hkXuBy6ij",
  "key4": "5nZfX4MEDUQT8bCaXtvMCaHxRYfbuVYXkBKyMq2q1DTRmvyTea4sPYjSsnV9BaB77PN27cvhWgqEFt5Hu5TtunLX",
  "key5": "3ne1mUJJ6YuyBUE1Em52eQHdAhGkmvEk1F81fQgzEgwaq97tcd5eqGcBvGmxHqubmqzBwB4r7uGzABEw9wSw7Ai7",
  "key6": "5LfzkGLiK7qgEZwdpL8U2rcxcVmQR1wStWtcetasG5Sw58jXgpWw6wvu1pqhrYWKBK3uZapEX8yJvxvZDH9jGfnb",
  "key7": "Pa8zxcmPGRb7vzwEuSVZg7oPmxTiiPW7K9tn3ppQFh8u58ajHyV7KZUopnJDDqqrRMkFtDZCg3A88mutWUx5VJm",
  "key8": "3qaom62wBhaJEnRq42Sj4AZ9WG8anFRrcvAxdKA4WPSiiyNCL3uf4Y9pVDYk5faxwUZC8CBxsbHyJW4RjwduPjL6",
  "key9": "4KCsJhCCqgK7Hgbh5SPVVyLUNLNKfcnCxjePfSLnqwLQNPW1WwRh5Mf5NYWF1yj6GtjaV4W9a55axKQ9xGZXgaaG",
  "key10": "3JqmvzgS4ARQszk9FwZVCno7fCQuF5KjjSz5UBvdo8C8iVPHnj8BzBZMqrp7gm3G3EGKnMUKrxnxX7AAir6Svpnq",
  "key11": "jmtdBxWEtjDx38MjCpDBoZK7Vc3pHy24ixx6SBdiSGtC7KgkNqR3exMtBRXzgpYN5yKG7naKyLvbUjP9GENHsj2",
  "key12": "DtdkqtbiXCEdVW2Q9vutTyhnqaJYzFRRummxk2yZ7ZSWmFGqZQ7zKfnZu62zFFTvVugipbSNMyiWvHnQvk2GzNo",
  "key13": "UJAeQY8iWwywft87hiMipErHRByCy8ZYdRUrhcB1SohJf52eBKqzA8uSKHjUgHhcM4sAk6q4PTGDkp1Q2kkQ3ez",
  "key14": "4Rz8n2kdY5vToae2ooHYarZKqLsTFo1z5waPhUS8C3ZKqkwuBUHEnFGmZeG5DeRQroPuTw4YBsVwy4HhTAGRdJsR",
  "key15": "4hvfumGSgCZ7U4Rwdtzc324eKVbZpSzGGWBRdEbat2r1A5kto5opxQLDzCmHUAP7WtXyNwNyNfqqVPcwfZD4tepP",
  "key16": "5sKg4Bw3bdNKZfWyQSpWuQgSgGiia4JNBJk4ymWXKb4aWBMpeo3eLn1bUrfXgnSy44jorfTKUCQW8BfrFzvZyZSR",
  "key17": "25vpvn64cMnHske67ffmisGaZ844e2FJaKTScUUSTFhLNfXLiHUw8tr7gDYHAKrmhaQ4n2PoXmarE3hJ9vD1tEw5",
  "key18": "roYcq91LH9nH5bdX2mCxXNHJHW4qRHATnL4GdWRHkjnwyWxDd34DiR2P8mLmG1PY4qy9C5Sx1coPFyySRWsH3eP",
  "key19": "4pcWMCrV4hBW2MG9etKLqJcrtVQxfZZV1cV33QrJ64Lw38FGLMifjNDhR3GpNSNHF9U1ukQfbwDahGXTesYEV5Ch",
  "key20": "3P9fePoHncfjqmyLjSDnP7yVFjHwPeoFVkqXen9rrU1fp2SVGFCaidPHW7FmgH3FurBZqyDp9C3EdzwK76Bs6P6G",
  "key21": "UqGkscsJDZTB85GH1xtW7f3jarWHMwTdqAvTtaRB1dPFz67xXQTQsyaESWctVax1pH3DmAxy1wJVoPh1Stp4Jw9",
  "key22": "2t87iMZAVqeUDARdtrWeBxb5NoiKWKeZVVyqkurAZVXbEVs47CK9fo7aiBDyTyxVctV15xMpbSMFd3oY41YWA18Q",
  "key23": "36xYxjokingD2v91tJgEa1qD7XtV7Bqm6sAJZwaJLmEKoHkAhibnhnzCWgK5WjzBc2va4cnfATkUhJjr8zQYpssH",
  "key24": "5bzyRiNYAMwcHSxVFd17eNcf3XfvrjpPDaBtc5TthVnrpQbtPE3Axv2EtavcdEJTeTRcSBrjvBWk6dWX8G5yJFbe",
  "key25": "4WSxVaCr5YXcKW9PMbsgqsLCRFfbfYHqncrPL9VCmYVZ2DWtkamfESztqo3rDKt3VDWBPmEotfRgKCJsQbnz94rk",
  "key26": "3cFHrwQJSBVtdibEWXX8fmppJk1LdDEF8MWxjFmMgseuuhucVQ7zc5VC9BxNVENuNG1rL11wZz4HQUBPQf6oxrGx",
  "key27": "65JPVEcbDRVeH2TuyjUWzgSfWWtXwRzEhh5caAGbmidRMa5ZNHttpb16BSwM5hM5KLDhMfR7SRPGPvfQQ9qsg9dG",
  "key28": "5bJpUbgXnpfUQexqCMcXTQZYiGNeeVgQKsyXNhoxkaYtWyRZy7EL3aqzaxtQY3CL3cSto9Qpiev7CCgdjjGvYiXX",
  "key29": "49xSvxkfQdbSvMnrUf3mwe4jNBzDAnxxS8awWwa4VPdeTSc9tgV3MzUdfjNCPa9Q7dFkFAg7dab1Vdni5xz2bozQ",
  "key30": "Awb72GjS8NGNWa61xoKK6ZsEAkMFzL7WqbZ1sbVQgJQsdFr2fT5zrd2TtCXovpfRrL4KWbN3kMfvAPMxxuFAqXV",
  "key31": "2wUgCR8wrJawfKKg4oc2saNeJ8yDi69GmhDfZcL66vzU9PZE6Jzzy2MeSJrVWys4FksuHjAQRVmGDqbUCkdoJy8L",
  "key32": "5cdc1X8msVZfuydEAUDm37hJkFn4vyhWQ4K3cN3HH5Wans19BWkfEicAXf59g8vi1sP66CTGny9ozwnzRaUwZhEe",
  "key33": "3X7hWySWYCX8tUNzNCuEjoFKPXi1DLiym21c1hvuphqGQFFLFJCWbC8myKjTR5yqdYrNW3UtFddBiAyWUYx5oFM6",
  "key34": "4MkQTZZ6MGKFyaEBpPtRSEULTEMVk344wNRNXmCjaeQNCWByrLop2QkAz2vhXLrZXGqzH4XeTzMVwd8LPGcUxPrm",
  "key35": "5GNeNAmA8moaVK6hD6eUVt6hxYCC57iXNTAUBeTWEqKssehum9QRmksUBg1kHuNT7BLsgLqeUoawFgn6JEAfzLkT",
  "key36": "55y2cpAkt4jZyhgT9hC5hWuXvBuP7SXH3JuaP6iJVcog2ov3REpFf7FitcphRi1UGiG5S8qvtUinynMYDCNu9tF1",
  "key37": "5p69fxw7WVkBM4CMdd2fz7m7RuctBAoMTD9TSTbVjMw1enjABraNce3LnepcF2WHYTXRbdyvRhnBUErhRyqvn2Tn",
  "key38": "2SYMdfa8DDw8fyUiZRhAcnBRV2oER7bVtaix4pjCBX6jZArfazyMdtxWADhSyuA86QXcv8U9Chix3HpqW3PMwHui",
  "key39": "623jccNDShcMSFxucYjArLdRVj2HoAMTJncoYsjnwY7yiMFgaxL3ZGA3NC92bisXJuq9Z37pCGtTqNe1w9zZrkrL",
  "key40": "3ZppUTJigVzrJHy3B1wiuTcFVX34mb3JonvkPbc9ezNjCX9SV9xnBQ1qFMeFT22u5RTKgGH9nh5usGMCAtZKUQXV",
  "key41": "2YBATN2nZuYx6xfdSc5LaW426bw5xSv9Qj3HnpP4CstPP8CrdZ9xA54KrAsYRwdBpHucLimgo1piDeKFF3dSTmQ9",
  "key42": "3ednUDpxzB4H4sUoFux8m63gKJB598bxijfc8p698ncMnQCngwf9KV17TCbQ8Nc3WAqPo6Jr64MSDrSTBbCgjdMq"
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
