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
    "4iKeb1G88LX5p4tkqEtJ2EV1vcEwCBSMyHPACsC2QngnLjwsiNeJ3qsYvE38b6tki7Ue13RHuvCgR8Uqf1uarTgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKX6Xk1GsQsE3LwP6sGRZynhtp1jJHGmsMAjfs9yWM6cQUoygvHYG92Q1uEDd7QRGw8QkznyU1T2hQTMsJmiPrF",
  "key1": "5vHd4WV2YVi4NRh4yWAa94PGHeyyTwBCa3HmC24EUNdssbBfKLCX2BzFKKMFctDK3wTQiBRskGJ9AXbvT6UXRWjr",
  "key2": "64jL74m8QQMGAap5aQs765Jv5YE5fZeasyrZD9GemGCJxf7bVESsQzjU41BwzGU1aWSsZxj9RT64aj9CFyJkvAvg",
  "key3": "71khD7EeUaJzGommfEEn9h1M8kRLhYgRtrKKWBiJGTFrW3nDa2M6BwvxD3uwrZXK6utDQM5RfAkGmLaSuiSeNMT",
  "key4": "3Bdt6KiyboaiBz6DbUJdkgm8zQEPLtcYzxY13uPmd3UdMvSnXpexUPtgRZVyUrvhZjMxjcyWDGqzQrVAN9XXy56j",
  "key5": "4FAsrfDK1C6yowKEPt3ZMr8yN14WCL4soztegHsjuC4uokTi9KDXRbmEjYBLNX4ziSghCEVwyT4JsQDArRx4ZZQL",
  "key6": "5zVyz59cpYCyYGK6qWieXxjSjvY2SQa9D4cBSVGsfaXuetjFc6AZdVqxy35revWnst2QxWZWW1epoSqSqBAq83yk",
  "key7": "566BHPcDGqNZEmoEoN4fjAdFctnQMGGRoewVr1v2YQGBBN3ju8dcZKWNsba6B8375rvXCyLGirvqzMqLATNM6wiB",
  "key8": "63ajJf5JGr1vjZbEoy3DvyDMAbUqyn4CmJf1dCzSM2mkRn7BXsxhCyith55XzppWJhiKoKoJ9Bo7qBEwyQwPTzkA",
  "key9": "FU6thPnt7kHodnsLTYY6YVMP7LZRmjuYyujabe4RQJfSvAWQ6JNRg2Vt3ketEm1cVWAVqFyXyfcddWht9Di9nR4",
  "key10": "2GrDVyy6pQMRCtXUFn9XLBCWWaKJ6CPfyfpWxaWBmcW992Rmtc4M4sxkGv2TY68AvETNndnaB4DBWcSTcTfN8LFt",
  "key11": "543BZP2DnqPHkKq2tKnXDXY8n576PNqbkgmYQHqxWzZRNMd3YgtJjTjpkNvZ62g1dkDqEPAxHBeR35W8is3pagSd",
  "key12": "3rUkTpy9Pktfnw3Bny5PNwP6xtV7RvamByrixVpAP2L5C33gHpUjrRUsfVGgkdhk5BjUR4zWhsAounpFP6MQcjNU",
  "key13": "5jrt6a4QyFcqH3PhyJx71KLa9RSa3b8ih1nSVjpDXYamodoifLJ9bbmsgZaN1Y9VoVPpfLE6UhfP9XmbGhKkDoRm",
  "key14": "4dPatv4bvArYoRp9AsqnJGB6baa145Ymzu3Nn5fCEXdqN5T8q2hgm5iZLEiWzHbaRL8yr4iCQJQP2Hj5L11y7b9Y",
  "key15": "5WdLSERom4eiQeosbrznaEyi2f3vzY1XNKJ9HX4NMhLDyDcrgozVGVsRRQiCQVZqggZ9UFTer3yrT1LkbaSCxwZQ",
  "key16": "61pSSgEVd2vevEEctHUQawjkxFhtm8DTYDsvJGcgLzJBmHYpM1VZPX7koenYo6qJBYTEdbnH2G9hPHFRRG4qd9ZR",
  "key17": "2YMeJEpfqQ3u4CavgMRUVDw2xt5jpfDyDLgJAXtG8hBqu2eQzFykvMQSZcvp8ijavFaMHx9QUKMYf6JzmQ2xZYLj",
  "key18": "YrHqxrYTGT66BZPDJ2Fw3hMQKgDvAgJzxV5rTdZj8nm5vts5nS27CHGnhV2JBhYDZno3M9a8zYK6fSowow4AYdp",
  "key19": "21stL3krVZBf8fVpnjJCa1pbCqudKsKFnitpDeL4CUWET8r9zY6LCZgFhmf7TMRXEnUk954zUETcRYikSyedjoDm",
  "key20": "To6PDAeY4da3YTGJFyF5bNgFmxAPbfjQfaYSqRjMfkaq6Ho9thS17Qwm7vkXoEpXo1FgpceeLKXsucaE2tS1Kpj",
  "key21": "4VHBSuELMgHyE5JdgFEMuMNyXNaUd5eVsfvuiyJkirwLVVEKeN7vRAVjpHuBFrpxtjr3Heb63HbQH21XJCKA3Ri2",
  "key22": "2wLmVvucbEQbzzFELYf54gQgD1EJJ38AAxQSytBCT63swiVhqS9h6PRCoH5GzvHwLNJxAADUKKPDX8PKUv7sFATq",
  "key23": "35ub1L4kaL3H2uAVcWq47TZXWsYB2wrhEqypJ3zDJ3i2ZBDkyaSYAJrTtKB19tJPRCnjrHGEmx5LSr7rMt4kS3oG",
  "key24": "3BWLKNeJFeNEPk5jJbmvuatMQvh1PEnqty638dVptw1TtG2zsTNZAsossomwkcSaH6DobBqmJ3sAuf7raDgVEN5n",
  "key25": "VqAYBruvMmWyXoKBGBoehmrJym8P6Qhy2ARLwtc7K1Jez8c5dxbg8tgLfshwQzWzvtRKF3dxLv75NXyeExQ9sy8",
  "key26": "29GNeNdXrHF1dyoeQSdFHQMieRP4tsRp7E5ES5LHASZRxbs3fXHhR4ASkrUtUZC6XEdRC4B1nDBfqRLFeEmMXnQ8",
  "key27": "4FwdNT1sX2e3pEZeWYDEWwdpJov6tbY8nxsqtKaJsXBb4bZAu4jRzqogaSFWRDhgbfs4gWJuy6BQFJWkDtKDyKYt",
  "key28": "47wgc9K32EBN8oHoPbdyYNRXWyqXWuinEE2GjcMGFQbqWvR4pRE4oKSLdRzqFvXRs87DUEQwjQSH2sD4czbyetD7"
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
