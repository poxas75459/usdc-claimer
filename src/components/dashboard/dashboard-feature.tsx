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
    "4KfHLzqVQQRceCj1UGXHkVZ7uwXPsNQWr2rUJDxx18J9sVuCmbo4ZBoaC9Pt3JCXhzppwDbUimp78sknTmBLQzbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4YSsXUN39GAJNpeEkWPqxQDv7jz2f62B8fgVF6zy8nycKtMAt2RJWFZ5Fz5JDQkb1mwLWyU9MXQwCvDEdmqVcG",
  "key1": "3xjfPckigzN666wboTXqsLJPLYMDPKZpueBLb1tCB4nycjbnEhHHAPHtV41tMLC5CwdsfV7aTds3pLaoLvZ7zTfe",
  "key2": "4Cuc28TjaXUtDNAsPi6i2DeuLxaYYH3CszyNdPqZGbdDVfyuTFHUUwpgePbRCNnaXfspz8dxDbPt2yCthzWFE7qN",
  "key3": "2frSttkcxS7szp43K5xPNoyVNYYX3P5zQ8Pg36mkZLnk3C7xCqU5mMhCVHj6cdg7wW7Sv5VzzbqwwH6FvKdnXfgb",
  "key4": "3kwHrnijGNj4CV3mWZ2zqFAUB9P9HmbDgbtjf2qBb24cytj9L1XxykY2MgtpiTZFfkwicHCZLvzH3AvjAG745TMS",
  "key5": "4REweXkpgvw3G96hwFvgRBa44bjz8J1gMZREoWEq9RhPM91LmNNE8Pq8pmzHQG9Db1KXzrjHGCd19nrre8mgax3o",
  "key6": "2yY9xWJsxjAxwLTzmExVfyZ5z5WCpM6WnJyi1BR6d1a78QpAxeL9CymP41gzzYWJxtTELxXPhz4434SvfHRyRTSu",
  "key7": "3H3JnqKeTJeFt7dcopqCGxoR1n37VZSGDKyhaVtvLvDSJ2FKX3Dc4taLQuF2kTzu4jVrvjS2gBj2t1UGEEh49MKt",
  "key8": "56S738QL6h6xG5w2izscG65xhwmK3podzfCy95VptMMtqC4Hx6LFqc3PHZqTLPHy3dpycBRszafNeNut4oDFrmzS",
  "key9": "3sjQM27k78yDrfivbC5EW1mXetLp2dqDHpd5PpC6vYZKGYbHBqKydaQHht8gPsqRQEzy5mokTuZuaBg9ys4EuwV4",
  "key10": "5Pd6F3F7rqyqhZXXUovX4CqwqHY2iidtjPoWcZNtBuoUWffhjgMK1mqwbvou7vGoVhoDMheGA3Rp81kgxFFmBYwT",
  "key11": "2fhsbgGZCndBFRFvidtzVTXX5Bj5pvxRs5M4G6EvFmSSzbsmxCAikc4zSehujVJMD1ZY9SW12gwkHrTrA5KViiop",
  "key12": "4oiFdTXhfEF5P3Umv34DBvFG3LNnC9SrLm6PSeXcfLWJy8fvZJico5XJK7cJQXrefKWKisfm8FEGoCQ7VsyPtLC6",
  "key13": "3fSvhEPU2jxAgd8HV2UHVLCWWkqKcU3jjbJb1gJhB5uykUft1vRaYzKf3wT8BPDaHfYNTmSf6sUsdM4qTVB3Rg7V",
  "key14": "R9EbDAfyxubYpGXYVhRW6JvBMui6KrRMkymzz929MHxvmkic1yFAPCptEgwcVh9wo25B5W9Y43C8Equmaei9fU2",
  "key15": "BQ8jEd67R3jNjQGF6a9mP1trUiSNpLcNQvSqNhU7UkA2GqjMXdqtuaRAC7GgQeeAuKoXrTxq1cpT4pauxFNb6kb",
  "key16": "3H1hejTV8zJqiTsce3QMpmYeEazzaEFx93yfhC2EtAT65CJJtFauYDCorZa3yGVemcjsvU6YbM3vtKX8YeXVtUSJ",
  "key17": "37Foq9DfYxDQH1rEEqX7L43EJRPtw5y7rPgD9DQ8z19WkRPdH6XMhPrMKQtoKqhZe3LnNyqcXNFJmMaVNM6KYTq2",
  "key18": "32j1MBieyFGX7SeAD2ckyYdvhkvYgUk9hrt7CC2yoZjfMYnGaHgwRXW3ZSyugTSAToEYsVQNPTD4vW2sokHc7uE3",
  "key19": "5FLVdqzeDMTMbqMP9em4Mm8gZFQH1prerFYHfvqtcxfb9uFEeAXsNStPMdJNnaMam96btqfMW8hvS8DDPpMkkgto",
  "key20": "VLpdew5XcaF26nmayBZx2UMcAUWcXsrzEsfZGzdsnSymUSdr4fVoKSobEwu3wFgEff7mqaFhxXdyoEJ5BWM1hqw",
  "key21": "2aZQJfr4CuGKTbKnWHMirMYvjU37sHmCaVwHgN8gfaz62brVStj8RSTQ9nA91mabX42jMwoxr5EFAFzgBEYa3MF4",
  "key22": "2J3nx2sGfhBdCg4KWACBJCPoVFo8hmCoVx4MKSfg8sqqBH4YtUiEFYurgb4Fvsof6drcQibJqMa2fJ8vdFv4Wxia",
  "key23": "3o8BPGE5ciSR9paERNMSEGoi37theYotv2zfu9u7nAC6soZt7PzoETcT2FbnscvAFyW3aj6u7GcVpVuNk1MuyTv1",
  "key24": "32UcpYYwVidHd2ZXasoH8ZAL7q47Rh3vmiipvix8VfKJe5xT1wWiSu4Wg4jKYq9fSjppzwKt9bTUPddTeZ7Wz5hN",
  "key25": "3fTv1CP8KMK8BfwT64SLP6uMinZi3vgKCBPH3nkNLs8xdwnZYuVW6iELMf7veeFKBFevkH785wDZwAR3ZSahAH2H",
  "key26": "hzUbXbKeg2m8LwEUak6zDuSoBuXV9zrrBN4CSnPs5JBuEo2fyoNQmUkS4j9a1NHRvhG8QhY6cbP9R8Lf4k2CL32",
  "key27": "4WkAvk9zCsVEfxPQz7fuymW6ewhNiGBpKznKa8qCvL3PhEgRB6ZBa24JSsHFutx5mbBynHRHzYCvJVKtzQyaBBBJ",
  "key28": "3UX4C5fiFki5oGVQueS6euXmhL1MQD5P3XN655e1SuivF7RqVvKrhWc8mqAEerZ2NXJAmFCjAHdMsdR87wnP8vEx",
  "key29": "2CN7mDvrBw3MgFpPrjryLfMojh8wD5kZuBBH824iF7EnC5QVgef3tjzrEBALhGKpS5Mdc3RVrUqob2SvjnGwDCU7",
  "key30": "4wjSjHk9AhouQ8wbxxokS2nLRzTV2HUmn1bQWiJx8dTrQ2VrGxiG7LC79nTVSBzCf3ApmfqWB5RCQWf6wXkLTkKC",
  "key31": "63e7vKSt8KY55GSKT4BRA6C5SW1G2DGzYsFDVAZiokK3g6NjQ4zaADmg7NWzMcHdDyGuRfQe8TVXM1v7Dknxr1uw",
  "key32": "2xHmnM7tFJrgHVuNZ8ML5Kr1fqQBfnKoRmphJZnx99N4yTN1h6BXRtqx5MuJsST4EdpNDpjuk26HcuAs5JWRjvt8",
  "key33": "2yELS19hFGtEwT1Zmu2Puva4ek7wj3SGH5Wqky1S1f3kd9kNA5iEd7GvnVMSvuSZW8facZoaUVUBmAMRp8tZ4sfP",
  "key34": "2ywpYgbt8EeWjtDHbghWspFZkHPxx2fWqWmxQJSgBUZZa13a4XrrHhpiksh9rGBXZvoUrwrq7TkGzVa3DDcLooqx",
  "key35": "3pZ9iWtRyMFyqJXykHx2rzrgeEp19t4RRLBZwqa2S8xBqqYv5Srv5WTDDevwDVFBzcpEpvG4HTknXvTqAKGTgAxy",
  "key36": "55QNo7B6efpr1YcnC8dwBVVyhH9DNquzXRn5Cabu5B1zHA5RrTqSaV35mVPWXQt1ZzkSLpo1rqyzNo5J5mhnFkWN",
  "key37": "6BnWSNoVTQQjHxFecDJtBzPwLo47dxAT5X5ERNGq7Vwwe4pKgrXtXF93hsptvGYcq9TZjeLz3dVy2sL7jbGfYhe",
  "key38": "3JU7aDtrnknLBzZtFXiNeEm5J5JQyAkgCfdLnov7b1PMpd6RjqFKLNcGgZ7w3NpPKQQPAZE31SW3xfHm6Uibkewu",
  "key39": "pnsFW7N4MrTbBFnmVkPKJWUiBpsoRkApxBYqt2tuFc2ngcbLAWTr9R6D3gVcM1uNakZLuFJMcacqSQThQZC1GWm"
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
