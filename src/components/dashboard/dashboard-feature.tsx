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
    "53b3FPDQyeSCZALem811ptTEA7hDVxSKUtqcyVEVi3i6Eijwne11ym88Ejd7h9MzWQX6V1eQEfYpro1tnV9xQVdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGSWHD4PHB9XonDNYHaSRzLp2zjzVBFNL4MrvrH438p1dnVYPxA13LfaEYCHGz8zCa4UgGTzdGd2FZtUHQAUYZE",
  "key1": "vTqUSKTHXV7fMdtoyGHYmyP6rrdvzQHxXdBzrDEqwPvUpzG1m1T3PCegTb4HaKpdtkTG1PhQ9Y5n7FLra7RR2xU",
  "key2": "42r6YEQSQDEd9XK2HUo2d3xt5UgM2aWUHn6EfwaXmVr1Vdd7spoJYRFeUbNyhwXK5bYeKvczgq8Z1iMTst6fP37z",
  "key3": "4o7vVVZkpxsxmWcyoYB2D4RADFEELBEbmWNfw7CKmozNCoTS7V9yuaQ5UwviczPt3KDmXcfMHqL5EgeuC39tCm2Z",
  "key4": "5BdqiuHrkZTkwHsFBFazNBEwJMuUjBApzTSd6ZhSfa5w7DYaRsYBX9tLsPih9x1qarQKf3Byq74az2uxD4LVRSsz",
  "key5": "5c7Q5vRiGGNT9L1pmY9KFvmj3JRv8cdPn74VcXm61BuhMWGvmAwDh3TuLU2C7Juc68FAs7JzfZP5tvA8GfEgA36q",
  "key6": "4MdMhrbTMkfUVdP7vsc7afQxmtWFVq26mD6LTnrjdef5VQBdSNqki6GDYLDSZ8smreUCw313nXWK2geaGdncVWDY",
  "key7": "3HqJZXaxzBpWWPFXWBuifXHhSWavwG484MS79SC3mzHkepKmumn4XYjD33dmLbrWNxS6rFg2hTGuaWRCW21MPfnh",
  "key8": "4WCUd2qceQdBSfZrp2e43F7zxTDp1XoBkeNMcL4b4aY6ZuW6Xurjgfou1j5rFDMURAdcTa6y6BenVvTkVA8RZHYK",
  "key9": "2uZN48kRcC3T2PSJJtEsEBrwsYx4eXP2G1m5NpGqX5VuPyy2Ds2HtweDyrTsVDNTGjpvMHXmkozqq2C6GzVQcoWV",
  "key10": "26p2wA38uujUrANwUfVyVdA4V7jo6WuXJHPUQMrfFKrkcS9dN9rE8hPrDL75eeR4U25JuWkifDKZdXfJ4xYkuu6w",
  "key11": "4WT9hmcEhrRtp5D8CqUZ39NXUaS7vNX8EEAsQ3SLCeMqDaevtHHSvzP4FGhjruKvPWH3EjgTdZbhpPsZdLRQuq9y",
  "key12": "bxejVNBw7EuBZsF9cQuC1ZQL8b5uiUxCruhgwiFLycVA9QcTu73RLxyqncZTk5EzHKGySCwuYQXuwTEwkf1vxrf",
  "key13": "3qecv5RenxuXYjmGUS13tVtsFvDkpFbXfv1P1H3uXmC8maF31GbFLY3sTJ8QXHUcEAxRaiP9qSVXpNQzRLP7fspW",
  "key14": "261r7T9qqTzY32MmZXJkcPi5JEUtcgrL8EeNZpDG49NENjVNMf3P6bMacQ8kPvo8FkpkkMq7o13J8Eds4Lf2e94A",
  "key15": "5itxFrEChPLZwhMWszCeymG2wnbSjHunY5GeSDG2b7ZEygMyKbcLpb58HEMUyp7S1gnDnC5b16ZQuA9R9t2RViF6",
  "key16": "azW78fnQAc8VPb7xeC3BqtL4g1dCA5nzCzW35Eeu4LJp1ZdnrsK4HQqQWyHzdCtxRJ1u5cJEpmPM5E7x3MuhjGV",
  "key17": "4rr5adsqfv5vstckDd2jfpR3Z9EFWKxnreDhV8F87mkvZRYVZYNMG25THzWxYJC9L5i71J2SjbV75GE695o8RegL",
  "key18": "2QdLZbZezfoLCTdJeDdGZNWXUqHYmxtErWUaprzXmkmniVuvmXY21LfZJYHLp8zrfovy3shV1mEvFUtNt6BuT1bY",
  "key19": "5iGhf8spLnv3X6tQcttBm3bK1JZ8x3ALy3ohscE9TXdafZ2MxvCLTDEzMHe5VuSSjKerXxXpnFZ3HAyB6exCzLUZ",
  "key20": "5WVfxzCJUCG8CYPwdWMZSjaVsf3c35q3A9wphoBviD8zMgUWE6AtEqjwjiizj3yzfNCDoii8F61E2bcSLSzQzJXf",
  "key21": "2nY2LtMVuYW9HRjLLPQ2SMKDcXLLFW9hJAVefPyNgBmrnwCPQVcPBnbTte16XLWhcfEsdq6gn8SXFLPpC9m4cNFx",
  "key22": "2ypLMz9LckZQmENCb7tzChUoHpUUKX6Hk1N88phwHAGDwPPZ9dt1v6XunKSXGVawPhuMALwBibCf72Tf3NjiisJN",
  "key23": "3PyrYB1LM98D8YnrgRKTdP2acDrAnhMAVzzm6Vn5cL2AXNqVnQ86KTrNREMgCUwg14SEeeGjvLRn7shCChosQXtV",
  "key24": "8N5kJMtV1BWZXmwGqHyzaQLxDfpWBr8hVU4ZN6ME8iKfUeppR5N1QYmaGGk4TRX4BhScwMFYusWWD2b2UJxVU64",
  "key25": "4J6pezMiD299PYAWpFd86kWUBoaFKJb3LiiN2cBZpvbgViNbuBsXmLCWMeRTn9bssGfTJ1rBeuKst5sdfN4rSVpG",
  "key26": "4MmyASKdGUrf7a2rW3HpXbbZoBhNWVxSHVgoUMQgq32U6y41Wddd4r9qRNSwjMLzLB6t4qmbBmCtW6RxTH8N5hvZ",
  "key27": "2TsdVsUwGFR77sTrs73h3RfVYaYH5qrqsgpBye5XPShKeyhgUGECA33zVQWYCHvAp1UGDRXL5m4eqmy8DArLD3ad",
  "key28": "2WTcFJR4KJs6wgoUtXSHB6Paj3DSHxBXWk6KJuhEpnz6sxUeXWWdsdi1YFcxfqBreShK8edi2wa44MA3L7zQQFfX",
  "key29": "2wo7JEqBWar3gBwwiWrFtYQJBptib6w9R6yyfj6FkzTPAgvaoPvUNkjyyvPbUGrW1Y3j66Uiwsg3bSrxGRkS5z6d",
  "key30": "5pzWyhJbtsByPzsyfJYSo3UNdA7GmEfbhwEW8ESEHjboe7xY9gPj5TXa2Pr44HhxA4hUuFoHq9D3ypMPPiNQbBKZ",
  "key31": "hteHcZdt4hx8WEBXCqbRCdnPd6cXrWELAH21ETH4EKXqmUL2xcrEv8ZX3ejSxvGt5M3VyhCBJmnCdBKv8qWmdyp"
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
