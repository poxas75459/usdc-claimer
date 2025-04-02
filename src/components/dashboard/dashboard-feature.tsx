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
    "5knHPc8xM3XRRupKXmFzASgPskqeoSAVSMbyMef6RPAaELgn5az7Wa6BjwkegtjhDEEXDUsk14TwNyWUmYLdhXXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQYANFWDZuW8ahEfUXVLeN1YbMNoqd6XabaVXFKrLnwGqtdL7qSai4PSgz2h6E8hVTVjGTwPQ7RccJ13TPCiNQd",
  "key1": "2GXzfUPLcHMckPx1iVKKRkX75eQVgEwa5FfVGeRhgtPh44Jm7ufu7c9fCtJnj7GfqBN9c79MoKTav8A6z3PmxZio",
  "key2": "2shaN4nL9DbXwvsRiwh8z8KgYeJ1D33QKXtEhfaokEd1g3xvQ5nPoqTMaHF49FX326o13jtp9BpDX3QaPLXCnkAF",
  "key3": "5ZiLkj6wTDn9AuZnx3VSnF1sk5GatnvWkdff5i7qwrFzAhck38uUPPTo3KNew6bbzJx1UHy8VGF4eUwhHFvvg5eJ",
  "key4": "LVwRq3t1CGcGRRAgogGxcYfUeJw8simnDWRYrfuZjK1S4JVRJisGgXg5KjqwAZoLf5ed8iSbSi6VqfTURyMzN9Z",
  "key5": "2amc495RaviRCFgXxJzVd97fmihqyhYYQn4rWeMvux1hXDwbaEp1JEoMws45JFSTTMJgBWJrNxd8JXWi7KjvcZLW",
  "key6": "3ZpiHvspcCv5LmHY7uG8qAKQtvnoZXSKQHqvkmdwzspx3UXfzRNg3KtE5SsXmcTZUCwAqWBHLahZAQLhXRgExpn1",
  "key7": "46cSrbNYTt3p8otqgfF3tAdTopK3n46QnFPPTPinF6oForUiKjQxUEdWN6uDZtTca1hZ41RoHnthhpDhPgZgteeu",
  "key8": "56rP8ZLLkmqptZF8NdtXyGBwG2MSnqyQMxJeFK6SmR5SB5zBFYzZbfUMEk3iwi6cUkTLbvUoKs5EiJ1fpurToiUm",
  "key9": "9TAa1bMqxDCmZtihrdtUS62358xxryMePbXqysd8UB386WXFojPKLDsSYeZNbMiLjGP1vPNeKAZifQGL84VFYQ6",
  "key10": "3rppAPK9pVwNoqCjDtWhBbEkwE3GVaHX3u6RsCPCbETNbKhovVA8MRcfVF7eJtDjXoLAuKSoVjMjE8Enmae2PZXr",
  "key11": "646gDm4fjT4zYPR13QTc4ncisyCRBYV67DZFPV7byJp3eaTdqjSxHQL1Z6qRK4k4jNgWayegfMkmkk3N1jcXZsGH",
  "key12": "zLjRH6TKUemWoNRheBmVionDh7ADkmneXXXf92boSy4EtZGPcynwwMQJeCj5RxLTjYZsQ3GnfzmvE2uZdpbtGnU",
  "key13": "yKNYkaZtss95GVrMNMt3wAm4bBGuEBjkyJ2nqMnpow4tiLijgsMfyaHiBWDFpP9fux4Mo5NuJ2of9sHpcbFnn2W",
  "key14": "2Y7UmgkMTMdFCXtsPLT3g3R1iESuoYt1U6zrf8ZVfvbfAqTcMnpq1tma9oJLqZvcx6kdX8L6ybq7QVQtGTu6jTJJ",
  "key15": "4f5MgfPSLmUFfNxNFVKgkHCMmtGZXsj81eSTPxyvF3UT32Hz3zJBJvEzgksDgXWxbrHqGXWRdxFYboJ4N1kVevBe",
  "key16": "2dx6AfP49SuzPBeS3XqbzSPLJncBJs2NvBFbsgieSpmFrikQoBGthaJCsfRTECVi8AiZRe4aqvoFXERgGjACPYnN",
  "key17": "5sM7KtRy4RC6rNQ7QYeeuYjYw2Eug6WnZ4JqkjUu7trTpDYFrrHqRh1bj8LmxbRNAw9r1DYf1Lx4Y5MzLnZ6Wquy",
  "key18": "28ceyndCxf2QMG3dtbjBom1oaqbs3gDXxdGMf8pyQBvTH7HvaBk2X5vLL169NuPDfKv5CWdXgnjcajkJLo1UaFeu",
  "key19": "29qwEfdpQMqd3DjXu6GksgEFvfnRbEbqPiCtVUeG7PZfh4DogY5YiAGEDPqgKa8kntJhWbexeHUixWxUuZ9Ndd8J",
  "key20": "2Lc4ifQMgHPCPyU3axy4wfBR7y6sj5oLWrauEgtmvFQmCfooqmycheRX11MyxHVdiL13xjqCLmxbB5zDARKKx54w",
  "key21": "5tcMS42UAQEBy5CL2LxqxiK2WsKd4vL43oYJ5ojCAi3eT73uuPgMZx21yQ3C387Aa5DZgoaVdnHXBjkCN9qR5KHy",
  "key22": "5SmzggMeQR7B1Eh6VNUUwGDEBmXCCg8xwvHVQviWemzyxWzf84UCEAKCGNUVbhAu42W7KaRgw88HfpaB2LVHaAtP",
  "key23": "2UFNQkMqYuxaLVu6ByDWJ1UcL3Uq2X14Dm2RUHmsxTax8TLmG6dEQJfJ84CXPGnVUN5Vx4T2852itSNMnCJMhpu3",
  "key24": "4ewmhcZTqJj8gaPJCd8pBMEvV7ZfekXLousrUhUqhy6pAxS9vUeBwZYKjCrZvD7ynLF4DaWPnWArJhkohSk38j2n",
  "key25": "2iqMzE74DKsNN6x7KxY1YhQkUD7vs7P7B4c3qRUirw32T6sdG6hKsnByocBeLpff7RgJUoEBX2t9KoSmty5dZvSy",
  "key26": "8YbUtZpuUpRnsFgwkxvA7SUmbGfHQwp5WS1oFaH3caviB2acNdU62Wif2HbFfuSwZEEb1WWdvUGWBuTmLZjUKAY",
  "key27": "5GCvFWQXpcdiuhcmNL4CfzG8L5zgJH2gvYQ5CSbtAeKqdhkndNzmVZ2H4mxmvrpZkJq5XFpZENpGKJhqZUF5btDu",
  "key28": "5KX5oXJ6Rqg7AkPqCW2unc5SiYfJWN1As8BxF63RnXQd56cNhnJD5jGToU7Cz1XmcSctBw79g4vpxbxGLyLAeGZP",
  "key29": "53y6ALSiUSFH2rSSq318McaKz15FxhhwkwkciMc7VnzduoC29c2nQAbcUMYtLHhDnrs45mb62h9AgZjYkPyX1E7L",
  "key30": "3ySyGfttdSdGRRW8ud1HZDHnaJLSgqVB7MEAJSkWRLGUVmpPdVf6tKtf9UST91oUHwT5PppckF6372uqU88La8RT",
  "key31": "3ubMuJSQuMADxJ7yposH7zXwcR5BGq7GQEzjsrfoALER31RC7swNe6wKLJhwcSi35fVPVWBRcmaAjgh8RivhqHKz",
  "key32": "5CC4jz8dPWHcTZ5aCq2o66KJQAa4Mwrih3k3Ju96w9QFWqaUzMjgh4FJKCJSaEQ2BezHWz9hgMPqWf6JqanesXgo",
  "key33": "4VJuk5yBKdFVv1GT3piXjHeL9PaoT2QMdX23LFd9d7AMyj1ew4qmXjDwjJDp8jcRGCzMLhyEwRGte1oBi279fwDD",
  "key34": "4MwWPd28opWCsCkGuKdeZTwSdtUu3n8R257MPScannQmp3BG2CMdBwf4oNCq7yEzqAUMA54yVSah57kWUWaSSogw",
  "key35": "494ZLkRVjYc7QoDNN1Xc97r4Z21bKt8R3ntQ4QKoVZir7xwJjEwL3BDYC25ab9upwfpssE6qtrJnZokgiehhR4Qb",
  "key36": "4fWwctBvr3Pv95kuXcDkAP3Jfg6PDmwopgntfgS6t4vndSKEQua4aXJjdRQ1hDC5wZDPN3vfpR7xicN2Znw8uJC9",
  "key37": "61jhp1Ba3hWEbT2gRDGML9RoH37Aiv1HeMkTLdBZ2ATz2kTcRU9mKQ3iyaZDirTgEjZJfvBBTcTGVx2TG8G7oaMr",
  "key38": "cvPea3JdwKiCZp5XRHQsuRT4n8ujsbX9z4v7DPDkggr8uwAd19vcxJTa7wf45kVAaNaKAJECHbMTxYT1kEdmLws",
  "key39": "5XN5S1W1yMNP6ErTEEv6CY27CxoXFkM9jRuvWiB7RQ1vCGs8eqTvaob4AUaBRjy5n28PVhhHtFwUqVTD9wpwzTxj"
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
