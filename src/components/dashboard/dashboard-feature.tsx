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
    "2maq71CdNFcbiyqhxdgZEgMUN1WkuvEDhqR7YkXrYttuFW96J91JmLxvLSqXqfUpv9WzSZLZR9uoam2f5pFLSmC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLVJRar1pb2iGhSjpUxeBH7iYSgorMC3Z4VhPBwpgusRY9jebRGuFCULPh8FNvjMy7RAUN3AaMfnHNd36evyeUR",
  "key1": "5PrX3whoyYwAsrzD8aJsA8VCWWACSHJsmnH9F5suZ2hTMQdpBC4nUNdiHkyYZAjFrw4N7TseDRnjJ6rv73WYM5VN",
  "key2": "3mxaqX57k2TGpJ4pokbZpJzgLSfW9QXURhzLRiReL2iHy9tWP5hSzgLvcfJeZtEi6Qz4qeHSiF4xkgV78c8eFJo8",
  "key3": "4ckLGj1aMDp2Uf6tZ4xgevLk8BYQEms1QpaYpwZHaP2dh1sinH8vWqx6nLwsjev1r6rSmZyfWaDcTyQ9bHsvtgDm",
  "key4": "3UuVv5Ymvm5rCcwT2U1TKVeXU3oZvuvYFxjxQTytP8Gt4Nyyxu5rLRekAAsWX5U1RcYyDfgTk1hw9k2kJ8CrQqKx",
  "key5": "32KCWQojjgLww5uS2gYJqyirsw4UNmzFaTzSceqYboZkA29AXnXcWe6JUCuBi6WU84yxHdaq5WYHJBcrBEoqxhKC",
  "key6": "2E9aVKHXn7onpJBwRb9CjWNYJFh72TxPDosPm24UpwoHGkb524gLpVRR1hnJ7nbbWqWTARzKY3AyBU5VX78CXcL2",
  "key7": "5B7TztAjEQtWTEkigBjpEYr7JSKjtGgTxzndNM9acXYAVBAkMrMBrZL2BXCCp92B7YTbTcjnm9oD13kR6fewo3TW",
  "key8": "SroLo8mCGWffKHRwGYuFN4QapDD5n9xTn4wtfCEfdU88WLxgKoUzRtY1keDP3yAWBkYYquynpoUKrcTsZ9c1FEK",
  "key9": "eQSMdqDRD98DeYK7VvjEvs4sGoSFoT2v3CkXWe79BDAJMD6xUGSbJCjVE7WWG3JuQ1PtPPPEtdC4Byz1fxzRSt5",
  "key10": "3rpZPLRR53MenziCYkXsNHNYCPjhxu13D2crbVc7eQT24joFzA1YHy43fFZzU3UukSGskoJ9ZFbDNKzT6mPKDuB5",
  "key11": "3RwUz5DdaZpyzAaRSakpAcFhkuueCS3H2HPqprJqVaSWiiBLtruiDCsCoCAVUbh7LDno3ewGttcHin8NTZuuQXEY",
  "key12": "36em2G9nTtYxvB6DtUTim7Zi1igRAbCHhiuGGo6RfcNarWQZr4aUnFSgCnksXTDxQdR5cvkRQiMH5LNLze6YstF9",
  "key13": "5xB7QwwbE5SrpyyuZg3cajsvc4rDajocrc578xvixPXV5oTdvX31hXiJsw75835SFSCixh7Urns5DGaTsueeX6Ge",
  "key14": "4eNK7z4Sov3PPt7YPymwj62hHwT3yWFS4rguByq19PY5iEiJFVmqTJgUozSR6WXvJobQZt4M5MhbFntrWXfrQnDo",
  "key15": "e33hcaAnY7noXMWRg4oXarJSuzMvidSc8og4XwJz2EHvUvZVRCnwEAf6WyqxE86r9b8qLX29xiwFZgUxqfA1b39",
  "key16": "3WxGQMEybwxeGBqfYWX3Z16vfxEtQ66w5Gq1U6Zdq2SzQty3EofRCwp4C4svwhD6JjcDWHBx1FhrwWDotxJRHgAm",
  "key17": "5e57AaZinoq3893GXRyAxEsgDwb54fuUKa2SQ9PMkLCfA6sKK1jto3tkULMB9Wi1zit7P31gsAp3fqsA89UwGpQZ",
  "key18": "566oF3ruqp2F7t5MSSXwaLgHAKCARmTqNLwjytAxGoEjE5FKDxPayhdjGZYH2wHfMuhDKD7qAg8yUhWGpLum1CUY",
  "key19": "381NsECGN8ZAKYMvT3y2VK2SnJCmbefwHZGfcpEaaej95JNGs8NvvAnsVfgwBgubmgmKgKAcHVj64YRjnFirpV7L",
  "key20": "5E2iQFxbQxHst2E9RtdC4ffB2RsasGtDTwVygJXhC3Ae288xf5hoXYwoEdtA5rJVz5QVtZuKEcBEQCmMxpcnm7M1",
  "key21": "46m7JtfoExLGuKuKM6D6u7n4vbEgZe1Brncr9j7pNEkhjn5YgdtJxQKDLAVUt3s3EezcUhHU5jLbnBRneaKVRGFw",
  "key22": "4hLiNxarBmq3EskgeduUr8GunyrfgcMBBoipZUNqjgCZvhn7cZCXNHArywrxYm9Rkv9XEzakvZo6QJWCK8SUNz9x",
  "key23": "5jWCDvawEt8Hf9g5nzE8H8vTgURLRaEdHtYyQbCz9JgEx1Dxwnw8e3rwE3uFCJAqijBSnM6N46ZNUtbBZSMatqe6",
  "key24": "3zKJ1Y7TTQHfNJk3uZ8NiotKXFm9adQuuGzTyhnbCP7dWTqn123tRugNAxbrBCTZpuhXD2zoRo4nTSNS8AtUZ9jk",
  "key25": "KhsAawMm5KZjqHb96B6AmVwZGRMnMjnAns7KwXa2EUAiKRZUFGPU6jZSR5E6vNoqqgLYZBakVWy1cMCtVzvTLTT",
  "key26": "5SqhY2JMk75841rh9UDdCPQpAs1TykCrJfQ1G6Boy5Vjw2USdPnQ2Bfz3RJrTYDegHwJjfHWvVELEgevSBDWkKT1",
  "key27": "4ttu54y6nup22a1RSbqsTaJqwTE2yy6n6KeZni4hsMEY3KymFBEfLRAAGAkujGieERk9VMSMYRL4HuBivxNLkv1h",
  "key28": "ENcmtY4exHzKAjHD9ikMzPqUXTYGz2bnANSDk6mdjFnxWy6L15gbJmeVR5BfDnATxYTAZekLQfFtLmxwFHRHsvF",
  "key29": "4hFYxWwkTqtuD51FH1bN391LAeL3z27rXLB7r4jiFH9gArkZLYUcjz1kErt2FhGZgp4rRT57XhhhWqLzpMjCqSiQ",
  "key30": "AN8gJUHjT4gtTtFivUAzBfCQcD3Pw85Xfh8tzwv2PgYbREvrQ8HRW5EqNAAhwNGFiPrH8bhMS59hzm7s6zjyPvy",
  "key31": "4bQPXPqPtgqG1QMGqB6thwNEH24AqFaVkWnYYXu22SxQcw39eWQixUYN7G4mVc77whXoX3YHuZtdXpWF2T8zwvcJ",
  "key32": "5jVvXumQ9p2MtnzMRbrCGfudwJF93umc5kiWehN3RtaELRyLM9eYw66k9tcGCSoPNyWryGEhvFMzpk7znEDCMQDM",
  "key33": "5ys97opbcjYwdL8wySjFu4mrq3HUtkFQPnTdxhxruCGEGuGKDZFBSFksptHxkvR5tnoKNb3Z4asdSTV7QBwLv1CR",
  "key34": "FFk6GWEuNQcUu64BGWHQ7tcsd4ouLHFUfN9uAa9tsvwZyFoqeWrQFSXDjg6EJsojbvSfW9HxgnpicUA2xBVSWoe",
  "key35": "67fVoZaYD79eayMVjX1jhmNv917rqaGrTYT8SRLgwpRQo7mF3LNnX4B9syEe9ybkB7gvoiB2bJGCbzFgL2oD9BTd",
  "key36": "3XHKLHvRsej19TSQEZEnXbpF2uArZqRgKozUauMvwat2s1pCaj3hH6nXADvF4hBRUroMF1RdPL1RCsSGWi3xT6Az",
  "key37": "24j5fFAPDYW3oCHvrs5qPSA5jcZnRmsJFJyJSb17QY3csq45EnafxDH6MvHM3pHnGCz7zYCpF2ohit8faoaTAr5F",
  "key38": "L1iMayncUHhQLHmxmRfFQWWcP6t18FGUAvQYDNQF6Mqs3h1WPayiXh31nZUsiUDuV5vWTrgxMuhKBSStwvAhQgM",
  "key39": "3muxfBEEAQ8Z45tDmqVixmwd3BfFh4oE7j7oo6d3VonRtLi55FfyCRoTf4pxp7dbEdssNkCTUjgM2qJMMBxscSk7"
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
