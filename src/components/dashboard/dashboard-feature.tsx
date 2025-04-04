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
    "3GCuiActarzXLS64gXRqR26qesX6STMoc22t7XRhnSSd2YADgpQhAHBVr83hh13doxonWRmfHTqEr6L6tY21MGbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raY5LdtHx1CWymThSnzfQMkYSSeiaMmFnGTNjJuBFEAMxLhbtD7F4Mj8eHzxkJg98CmExTYHxMeFjJ9eKDsAKSx",
  "key1": "4Eb4coSTFgS4PcF1GhA5DuxXSHp7UzKXxneCVJA4Dgwna8c8a6S2qMXC2FJgBdLmaQWXw7byzVmAqZxbKx6dS4uV",
  "key2": "4n2AbkRsuh5fEcR5rZZwF6cvbrEDG36BC3vLBvNX8wono4t2M9CU1wJ2eFHetzpKfyRupYWdm9Cb8LcriRvKVRts",
  "key3": "5HJU4ud2kkR8afLm7WeZ2wy4akg5JQd3S4eLZSVDVwKynwAD3ctnXAKpkBCwHfHgR78C7WvYqgeZA7Z1ap3XBGs7",
  "key4": "n3UCLGaBEVU2XGNGqeUbw5MY6aFAScjg9F7UqdwoM72eafPkK834vKJFEhAfP6QrPRPh39zX8nwp8JQ3qh5q2Fe",
  "key5": "5CRyTNYJrCxxNX5XW2nCfkccTxtJMrZmn12J3CFDQyW3QzEs1WaWX8XBkcM228QWBVFEu9mquutnY74FZioQzo8K",
  "key6": "3Ex723rbitzCj4wqTNbDGG2nqYbfq16kKoLkpFxmZPukEM8a7TTc2ue3MReWUcwR8nrDvvjDiyZeAeQuxgB4KizZ",
  "key7": "63nDS5iX6GDRE1X1UUVnkXcRZxAjimUdB6Hmq1X4futwFPp7vxBQ12CR4BVP6nEeYaMPWGrK1ehCtrRjJoginXwo",
  "key8": "gzwBXoF5fdZDJAaRHtDw224XAZCwiGt8ctTk2NiPHzohWmhMrFCyvgkJjN5yAyk6YGQyMrumgGNFGRZDo8CoEgj",
  "key9": "2Yekzri5nQnE2RWFEKkZxZbX5ZEK2JXkLmCJ1kXvGjRp2TkPyTmHo2r4g7gqH3CtymFikCvJLqEkAd4ovaqGrT3z",
  "key10": "5o4VZph5zskh8Z5LwizjKQt7t2eqCUV3eW8MnZKLQQ79GR3GVDb7MLffr7TH3QbkMJijVt9fmQ8tMuscScHKk832",
  "key11": "44iefxwBfwyn1c2SHyFhyv7Pd2DM9x6dmW18ShRP6Mw7742sxMpLjkMVM8GPnwM6L6uvwEEEaKZ1NRan14ckTexh",
  "key12": "5wg51SDtgyXgehtiQGk1WWdyp8pzkRp8fgRPqDmGt7imgmr5eLxiavR8H79wHsSFKsWD9ZWxUjgTMnKJHDhSs7to",
  "key13": "2XxHusVv8BbShT6uW1ShNXg3VkqraVQKhZD1dFhm4vN3TzAVJ5xuAL1CRNNGqYBZq2tGhKza7JABKd8tqN68JqFx",
  "key14": "2xxRQWacgei4sJ9PLkwKn6Ly8HRaECdEeoppUtsWgvXNpjDiKFTcvMc5aFqtk9tag5mSTSPZFVmUDznXtbhJ3PYn",
  "key15": "32AByVnfB72qrZPovzRZeTkbKNbAHGPADePvk72L1ApegFD7Ud7ScqkR7Dhj8u9xGhsviU7G34hLM5CBJqVvtVb2",
  "key16": "4KUvGhz55Hj5KdD4TYoe6yhDnyWULGXzvrgfte9LCq8JkFZ1SdwpaVE1ht3LjPium3rKt4Kr6oMh7TC6WiSpb3SP",
  "key17": "4DPpJSeAo8fKohSvj3o2wVSkmCa6V1ajZuSS8ewvfE6zk8YCas4re9gurqpefNioz3LNcjZ66kv7J6XZrQoupzV",
  "key18": "2DkfgfFWqsvXbEHtKLkLhbj4HV14jgFbkytpoWDQksVUP9mysqe9wBu47Y643hwe4NMdVcbGJ9ZMR968jeMQtdoc",
  "key19": "2bBwT2Ncmz1bMkvgLgxD9Lrjo23iUnE1ig3tcZyc5Dncq5U35XATmWUFBajPxeZAMYp3XnbxF5PACEx7zdpeaiUt",
  "key20": "2vZSHmN3Qe8UmKrHHA7groLv4CGvqFz1cPibgf7Cto26vcX3SuxzX18GDvUzEGtEaEcKgDSNXiqbqavawMFnHPLS",
  "key21": "2hxeVwBWyXg7CZHeDPbYFCRaPM3eeVdrjE1CY3TrP5pM2P1cnwM9Ti5s17wfxC5RCpJghGsFmXno5DgrFnKzKHci",
  "key22": "2j1en25w94fRvZ5hFoVyeg7KBmGob8sVeSexU16qkZSAfrjrKZK3ZBoDx63MABN1aUqA1EDkZSCJSCjbe2vzPzeK",
  "key23": "G29ZEcVkaaLDNCAaumje4cFx562JWFsoNNLbHntR3cJM6B4TVphSsR4uK3f6wemtKinH3CpofZYBLn8arr9rKT6",
  "key24": "5xPaQuFCjynR7zc1M8RWDD8iThu83ptnGpthaqXvo4BXb1GPX2jfbqVNTAkzbxpPQvqJ7paBW9B48whSR3XEZJ8i",
  "key25": "3XHW4ynhXTkBKvkj7gehCAtd9iWqhfEQfhWAyYLeQ8VX2Wxp8eEgwaiE6GM21vbLwruSW3vNpGz6G6wexEVDLTXQ",
  "key26": "AsKw1UuK3r6HPguUzoWw4rdwV4MMSPsWoh8CqLUKkMYHpnY22hvZGJccXWrH4qDDSAtNjNxX2waxro9eSbBHd7p",
  "key27": "4ya9LBBpDKAisb4fBaqRciWdwXHAFJGf2xqzkd16y5p2bgu5JEUX8CoSGgkAat9WAzv4QMjbAq7Wb94AkcXSYsFV",
  "key28": "uDfqPvhLTkZ481G8i7qYYBegaBY9rr3HXrmwJMYDFZAUAQgSZa1SrCYNvtTxiSBDJYmLtPhs22rjgwbKv6ezeeC",
  "key29": "3tbYzG7iTbYiqSod6tGRVXEyaDv5esbLRYbzLhS1CbzYrXSGLfWvaQntmJPYb9bGjmmAHmqAPFhs7itevG9ibC9Z",
  "key30": "4iCrNqEwZ5BvJ5g1gvLXyWayxNnwvyqn33YAq2NeFhz8uGc4Bmzj4XSe7nfj2zCHXXYxKQ9R2QUP8ZVFoBcxAEU8",
  "key31": "4tQXERKikkyoS1SjdR6hzRM98HeaPxHqnvnA9VM3xfZfJK57SCTVQZNgeA9MZNXKeXcJxjrDoknVKUSmC6jocqhh",
  "key32": "29hV5bFkc1ZQnkPMJ3i1gzkJuagKcN3kAXtbboyeAVQuCEoauQV9XjpJkiuE9fnjyjUpQDMhgGi5ypSk31tvKRTS",
  "key33": "5U8SB4HTpbDz4MENgZxSy3Bpgoz2DnwpC5pGJCy2cq8o7Tz9P9ErnyQDU8xcS33Hkj7ov91p5LEASWbPx5y1yUhd",
  "key34": "5kKo7ZTZYXC1PCTzdJA8UVmhVvSNrhjLbkKi85MkrLiE2ZGEi77kAcKW9UYUosaFXKg5mLdtZDW2N7g75nQZTa5p",
  "key35": "38XmnJrpj5GWkLMGaw3DUNmXcqyLiz3HYKXjzqtsdVnF4nph7KmtUYJayaCJBCq6ysfwVjFYe2wTnbZ7ehaYS2ns",
  "key36": "2Y9xxqhEQ9cAEGpGMKzs5H5FaTd6EHzmsA5Qdoeof6SSith3yofoppmkBd2fbxckAJo1nDSt6RKBRib3EFARxNXH",
  "key37": "4SB6tp3CfePjT3JnggTWMK7U33rzQpVughYJjofmfyM3tk5jSWoLf6dk75DGqSmgjzbyYMuZbFYiXxuD3Drm7T5x",
  "key38": "3qNY2oH3FPsrpFbFDzmvoz6D6X7CxyvNjrpTSSye35oK65fz5qvvqZG8xqF2dgQPoL4K5QWR4ZwoAJSPnVmJRfcC",
  "key39": "4ABj5TrfD4kH5RKLCfwSx31uUYcmioau141EhkxhPZkrpE27r9mZT2qoKXcZmwkP2nfMuf6km3dyLeRofj7ZCJt4",
  "key40": "3sEtKp2HrK6AzwKTPtLSJY4ekiJJheYkDEyHMJ4f6h5APLQ21Agttjk8zhS2LzshsntXknTX4PgBG79eYPGwDH29",
  "key41": "2RKt621yd3Pguhq8m8FUuJzJYFhNASfqhWEeGYJN7y8xWbbT9WHZyuAR4qjDK2kP5GXyYjGp9vQjqcKfnjaiMteW",
  "key42": "5G5VA8F9negHaAauB3qR356Lc1UMtcQeWKpuX7NCLEMfyZydTdW47QozQCnbAMTq8mY92nSWKLeaRdhrqd4B5tHF",
  "key43": "5YFeD9irtCRFrJPHHzuQvWkFSVkMo3tmodSh8TaD4QVGgG6xXFpppLq483gccJevGVhgjWq5WgDau2J5i1nekrN8"
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
