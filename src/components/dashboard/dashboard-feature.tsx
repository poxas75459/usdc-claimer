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
    "5fLaffwZRuUcwiW6rH7wRSw96U9GYtHszvixuYS7UuEHZj6ePsStZpwqbyJ5kZqAbTtFbeSRDkSt44xbYZAshqmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehV1Rz3sj3ByaQteyDhdCjyPcYMvaoCpHshEq94fmysvnjdm1w1uELiSae5pMyMtAV85xnFe3BC5dfML8cz3JUA",
  "key1": "3uo9cbxc3C2kVR2WTArN223SriW6Tm7nzi5Ynh6TZ2jmxiCj1F1hMykrFWCGi7PMxtyCV7UtyeaCbpmdvej4a9nz",
  "key2": "54i6bwugCc9CtnFBgJSNQfft66qcykGcsscbk7twrf7Nws7fQRvc9R6iBvkPPu68kqnokPRxMXcjdi54w7z26Z4b",
  "key3": "M9RyTCtCkmg5MfhnhrYRNpRMqzuqjWrArne6Xic7yH33418D82qcQc2uMHiVVy1KRqfgQegvtz25YAdyVGN3w4V",
  "key4": "PgPcazNRRAgW8CpPE9bREvxkWrzJkXNE8Ps1jThnBrkwPkFusrKrhrLQhn7wJMXZf8i1R7kaQQAoqh3EoyBJUCH",
  "key5": "3N4KGddE798UhtRELXGne4PQdvLfdVsEiJpk7fsPcGk2due5ckr19528K1KNxhqbhTbJ139PwhBiS31zu7wtCh2w",
  "key6": "3Hb5811VW1tQVUohS6yb63vozDGM2LPdXswykWZxCLXm8Zh65TJUpBPfGpkEwkpGWg22gp8Fb8rzjwqTrspuE3r1",
  "key7": "4hz45HCR3tfizMnLzM5ksuM118sRdBKBYGyUTEebsnVKqdV3G18oZ8axxVYzF3MUcbTYqe1fQpFHzLesNiFTM6a5",
  "key8": "34rdP6S3xB3KKNAU4QHWSQbjTCKdsWcPEgwm5baciwuAGPqK1wZ22UWCuBRtVd18Ya2DeTBoPECNjeo8ZbgBC1pu",
  "key9": "5b2HWMYEKT2jHBTyhJcH3vsP8zHtfKezd3sah7HDHLz5HpceogqaA9iBMFutQ28qzqzVG6g5Pra5r84L2jxQiWNx",
  "key10": "5A1hJtoriRCW2h7p9X7yc7RSbmBgCtgNdEK6d1YkoHV8UwJzyKX8ZrBPjAzoHdV7v3JreRcs8ABQZH1QSrNtFK5T",
  "key11": "EEATWaz1a4VsTzzhPbX4kvVYJzGrZfSfQbEKg9BBL9dHdAgnsFoALMzS3fEs1DvhkiXwiwU36ezY4A3tzjjD1YB",
  "key12": "3YGbqnju8rRQm6Jew47xZf8z4kS2fxDQbgGiaEGYDtmKvuv2x6hoPTw1vVCHyqYoUpq47ZoD98JoFeNQZhhzXvZp",
  "key13": "dqbBsoWVjTbWef4i5TYZRnpf7S2fzdyBDK53nKrxPuieAvbbnjEii42jqKkEFXpc9A1rxb5idfZmABhvoAHGSt4",
  "key14": "2rBoxVgE9d81V7JzG68CiF2xKyg7tczFe5UnyaxZBK8pmLBervrdjsPJ1kb6HCS55woKCUWCP2h1zDy7ayJBS1rX",
  "key15": "2jQQZzUdtZDwNb3gtU24HKGzu7z4V4NkpmDY5PiaFg3QdjEv4zTqWy4Lb9KgpbvjqTBXb178aKqSagDDyGwFnKC3",
  "key16": "5E9UNSe7SYeZqf45SUsrbff6CBzwZy3kPELefMmxwiMBqSqGVKJKYaQpn9f5Zko4DcVmqedf1CYUPnD3J7uUUmwG",
  "key17": "5s3fawFFPQaWUYazhoQ8Nfpi13tsn7h51xW6royU8k8wdywGaxCn6K26YWiJ8yz2qSnZFTKBg34jf5tmbGYLwvKL",
  "key18": "4mow6Bf6VimGCu2jkks6YeqkqWqg2hEiPgx9TMkEj5ic8uctMNoh1RRk6KKvKMkKYjGegDkRQMpzeB7QnjA2WqAj",
  "key19": "5quy3iy5YyNVp26xoQ4duDdJFGW9TDqKkicCwgzaQ1aWRixeSNo9VpgDQe57Pb6Vx9Erwnkv9bfiT8MhJi1RaFN4",
  "key20": "4RKeD6agbbH4CnAu6XFEvrNdqpXGYULNDN6x71fWHL4UBJxsajVcZgCYAYMkEFYasVRvZs7LfQTrjNjT6ZpKJXDc",
  "key21": "jJrb5dTp9ENRwkABA1BW9HFx2zBwiTavpcXMPirTDm8At4VUTBpngVEPpKQ81cEKs58NyZF7dPFqAnmPUiukABu",
  "key22": "3jS1Y4FncesCaWVEmvr94wpwKw2fZ9u5CAzf4zm64bunQ5Q9EzCLqiY2XCZECBskPznfXThbUxRKHajswnhhdwYT",
  "key23": "4b7PYVenVwFmWZRK6A33cmRAcsR2JfE6WCfmxEuVjq8LJ6BSvy1ntuvFFbapwKVqaBi8d9J8JwAbh7GC7rRG89kr",
  "key24": "3mw9QUSGjpge9PJzGcPY9erwuPRVhffHqjaQpnmbPzygjauu9FbSngVSMarsju3gwLgAdxgQrD7ZgypSXxwvoQRV",
  "key25": "2SJ1vAs5eJX6x6D79WmcHzwhHgWEx2CxLTogPjMTeBQStqKQ4M3pPNPjJk8SCpAwWBbYgFxwW5DWB1vuKKnADLDL",
  "key26": "2aJ12CRgzp7wJaQFXhELacqmkMPmnUpoFv8FKuutFvhPte4FeWyEANApTWZxBPKg5LaWDMc8qDjADZ6xRZ398imz",
  "key27": "tDnijnBSXfUyukXBGMFjk7BTYEJCR37y6iFwKJaToF9TrG8hhjhqyfNzQiqB8cZTCyFHL2CdtxwUiwmnJxZdTQE",
  "key28": "5iExrpiuXKFf4eA1jhYqLrRXJkRhkdS75Ut8UAauo5K6NvLjJdXA9mfHKnTCe5YW341WxxL7tzmcSWK8MeD1V1xj",
  "key29": "4gJACn44vrJz7JJhJfQrDwXNTUGR1hbmt3rshD3nwrkioiZPbEfCFwTkXjbfP4rSTah6TDwh2bx3bMh7xTtzTqSC",
  "key30": "2ktUPDb4rq46MnrZXkimQ9VB75U8raUWAzA67X9j1xikp4atks6fWj4rkZEJAqutLo1rR2RhARF3xypPSSPsvkei",
  "key31": "5XS9cMzQ3dq2UYufXBk6tfHqLXU8p9mvSdXPaN2R7RCrwkxuvk13JTE1rid8hkfghGk22qFDgMeuJZrtKnmYdAvw",
  "key32": "2w1TTfAZYJQ7au2NARi18k79LHkkUtaRD8DRaiebWfXDzpZ4kt1yXXGM5yfLeKNqui1N7cKNcwvE6u5qJEymoRw2",
  "key33": "2tLng7pSwvJFqvRtTxqVqWD92KY8b4oVJVndgENmCQUwbcwrd8jVjuQLhpovntx84MM9YcxfgBkEsv3ZN17DtqTu",
  "key34": "TpVkgbwyV7rfs9tFVtsAa7U1rUp4Xt8mKT25hXXh9SK8aZnuqCPGdacBfVveegTzrxdJv4fc6GqkCSVgLd6t28x",
  "key35": "5dovzNN9a2fMAwcMHw4gQbz1Cx5i5Tb85p5Z1VbueHgUxr3SrFBeZD5FfKwV8iarftP3F4YdGMpLdEYuJ7wsnDwJ",
  "key36": "2WKH2VZB1AEfcdNkjP9EYKLNfV3ZDiMfydcj5hPPbct8piZUBcGmpmRTdKGJFVTefiSPkQu1Zg23Eqy7wHoAA6Ez",
  "key37": "KnL7dwvzLoeLzrnAesCpAZPYs8fmSYp869jcvHLx7wCrM9ioxVP7HT2XcbjhZXZpDJrPATEuLoaavZSZ5GPbPm2",
  "key38": "4d2iVa81YHxughBD8sYkhegvP2inJb3LSz4afZSsEFZAUsZnfMWKxkNSE3FK1z8arES6Unc5Dg22GpVWZQUmaY6R",
  "key39": "4uNvFvZ7iTz816gLuLXTcmoHFgKAeJm7cpyjwwnXcDePhFoJ3ivSFywoCCer7sWbMBbi5QnEi5dmsNHjouY1wPZS",
  "key40": "2bVWzMSooJVwXubFeWUho9L3NHpVedmh7Gz73grcrUTDqRQyidwBubqQMXLSHspbhwzBSc2tYJL8sbgwN5pXfKiZ"
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
