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
    "3n6JgN7ssrjYj41M4BMXot83pzfiYPtrbr4Sy8wa6Z7bF6ZDAHhtmQfH6ikN9kEchvokHrtWevgTnkCXy1QuLzsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qoyr5cvC2pskGheiVw3kynXzwQEwABhU9muPaRH4AwwwpFP3DjJba4t25k3UrnedVRCnsd7zKMQBQ7oBXUhc8Jd",
  "key1": "2riVR99aWiWd2c32aQ9Xr32ckdShYdfAcg1GY2i4BmuiHs9jBDRMdKUj7m4rP1qZX8irX2zkNGjvX65pKhNKAXKQ",
  "key2": "2sXqmwma7idmvxatAhazK2ezCfpjEf1vucXLZjMb7fih4zApfMkyvf7iWHXj7uurCdbd46uZPS82FC2XEzTrTbuc",
  "key3": "G8tJiCwzuFURvgPHzEpjMCxDG2DY5PHSnrQ2zodGqv6QFMPL3JfWjy3HjybQEthdJytQQ9hpVqrKYiiywfuSk7G",
  "key4": "24uPskohSKKUhHrhfYy4xZdMvwNif32Lg5CpbxNETEcHpP1EvcqiUBZvAKBgzrJKAVpWyw9vWx5Ak4PmBcWci9jm",
  "key5": "37iLVmJRC3XV2BfCanT8PBygCL8G8ULeRqoDMCg6jkDWKE3tkNgokaaLg1dLxHJTefgmWT34AnUsr1YmZDzXNtjY",
  "key6": "2qZ1etiH6x7VJ4A76bBHzS7JSKd92Shxxr8VUawpRjQMLF84SXHK4UdjbC46p8jBmoUkD661WuihL4WHUnL3imk7",
  "key7": "4989FAhbLW7xo4QGVp1kXdU7PsTYkE1Bg6J8BZ2Kc943oCCuGtMAd9duiUqPg7fNVhyKVE9Boe56S4z1CGYSuNYg",
  "key8": "5tL1QCG6HY9NTSJXhK4hJZ2Mqj9hWBpWEzwPEVg3KPYdDKWFeaDU9mLL4iUDu7JZHBXsPf4mjVZN6cz2MwBgw7Tm",
  "key9": "4acA8uSzw1uTMMobmFFUBiQZBYxzSkBaYpGYz23a6XajZvzeFPn99MSfrj7Z7faViBXcFYyEPX2z2gL8CdWVt19n",
  "key10": "N8AfQfFFmsN9jLbgJYCqRDCwJuTUQTdUoQJBvEf79as28wA62EDbhtDuPpdfxzFf76ZfqWkhHXjrKptwNmgEn3o",
  "key11": "WEpzgPkSBXLT3UvNVsFYaTwMyRerhRc2TkhmURyWaAxq12GRZ3xZWCo6PYu8K4qBxeceBG6PYB7sjn8MXb27Uvm",
  "key12": "3ut56oLAe9cNMq19CRVaEdyroaTbqkn71V1qWk1aUmTkyPhPvDrMgfgjFgGAmYFSkG8NSfaMTfDaTM2j8jeYJDUM",
  "key13": "4RCW6ysdEpevd4ZqDKPqJMwG2HCpgQXaEp1K3ghiHLtbuyHpmUMCnAqS1JJQgYKfGDnk335sobT3PGCMAkxxVseL",
  "key14": "NWPhHBKcw95wA9p4ZG8ZLxauxktEjp2Xvf6QkPnDdhQWgMbLcdQhAHzv5Y56muohWNzqrUWTNCeefbWxWKq9zNh",
  "key15": "kCh5ARLixkHShfe4t5WStpHZqZnnRKjSxL6GZz33sxdbHFCbEjmnRM9z65n7zYZDoqxdV8EaBhLs9aQAdacnCFV",
  "key16": "5sGNNBvV3XdNSkUDHSxsUhftVqFHmdmV8ME248xMJwquBHvjAjVqKJt6gCcS2jBfSiY1nn4xoJa8RkMcohUL9xGu",
  "key17": "28umzJe4CobLKDyXtX3AsFmg6KVkcKF4ke2M4zu9gZufx6f1VsUnCAfETG82QJViWSsmNieF2Y6WizpT2bs4gJfh",
  "key18": "375eHkMdgRhCcbipjKKtfuqJUKyD6NAb8BRmeKC1JhA5uUfacm1fCNuWESEGHzuxYMDmdKNH413M9C3srSG5m6Fc",
  "key19": "4yyTGXB83PtgyE6QGAaXr9rjBEvAnArciV89Lq2BsaXV8EPZFXR8uJij4GfxqA7KScam9KinCmPdyQdPj6qSoqu5",
  "key20": "31SEFy5JswrtHS8LFBsP8BXQMmRVU45VT9t2o9a8CxEE6c8u58qUzDW3v6aYkcQq3tdzdTrY1HfQ8H812k9yEHhW",
  "key21": "4estLsjYU9EAXDPJNQPkPcz6MzQmNtupXVdYpeVLn2vT3sMJiwkPbR54dXAZsWj5uj4qCMVKSehbNj8ntPTN1QWe",
  "key22": "3XuTxqLVpbcFrkgqrf7weUf9PGsKHUz7eWYEui392RaaMzjKhgFdRrjsg8iH3siDgCZsznqtH4F24QoXhfKo6Wqa",
  "key23": "3XszFzpyduBHq9wtfmPkY2Zo5SYuWjZqs9VR9fzqhkuK16k3FjLrvV75xjj335AN5bgNeNPD46aA2aC1vB9udT7S",
  "key24": "56NY9SgVrMFoUWtL3rwcGAics29HfsowPosB9KgducwZNCrFRH5cXdSR8koqqKeunNrrQ21Ww7jZo9sd7GoqW6yS",
  "key25": "3Ndc7NaXM7NDwg1pgn9R77aKun1pDfr9TJyALaLYJ29iGhjNLkyWGUbMuqQm6mXH1G6RJPZsHA94vMJj1UJFFb2P",
  "key26": "2ciVEhKBMw3Hrb1hwfDG9hG9kXU8jkGCDK9LhgfX5rMdSuoq2viDZ6GieMs5LV4VwLA7ZftzP19YdqZYrhpSsXqt",
  "key27": "5TdZjNSZFUdp6eWGe5Qxe64gdH2trfvasThruPxCXa1RScnJiL2GSRbxRPdZvCSDSW8bd7UmFoPN2d2hhjudSv56",
  "key28": "45oqAQBbsbMk7zPW997pkvySq4expsHxjDVsUuk3vp1ycoRGrj4boAhqZVQTFStXT48UcvaicMGq7w6FFkcFder8",
  "key29": "4TyaRH2Js4jboYpMj7nvUb4ED9uxuJtNYWRWhm5DaHKjLzUnq1TaBjESdagc7dcZWdq4zBubHFAtFW6N6jHGok3z",
  "key30": "5yg8fJRVF7aptHvRdnEzxZzjqmsPjDJ3zCYAhNPPF6RY4vfwetfruJkNYmsJWnMMiezMC7C4roM6FHJHJBz3GnzS",
  "key31": "zc1cZhHniUQgy5mxuyfS28fHLDYMvfPpF1JEb62UcpWpxwmybek7DCCqS2pqtjQmWGEFhoZFwaB3YvEebTwmokk",
  "key32": "S6TfCdWLwmpHWW1vYJEkA8yvzPGeAUdtZ8ZovVRyVMa27gi8XH7bZyZzvD4dyUsFQGdiX1hZjX5QDS2XfS85QCt",
  "key33": "2PWyPQXY4q4p2T24by3i2sjUNf3tN745gxhnQY5JfRnpbkJ97sDXDZmdqBKDKrr5WKpV6CESkGY6M3VwfSrpPc5H",
  "key34": "3t35UjEykYsvoPH9muZfoGvoD32wA6aCrHHvEus41DP3BLoYXrHcEQTZMVhRzsSNhcNJDyRqarStDADd1gGz8wbP"
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
