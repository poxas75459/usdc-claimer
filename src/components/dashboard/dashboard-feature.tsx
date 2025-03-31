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
    "ZbDhir1DNeHF42UvupnS9FsPFrWPKLwqDLXsXD1UAPhvaw7prqwNaLXUutxM9A5GSJpkpUHsXP5wKa3WYGCkDy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsUqEaA9CMudJTbZdkBSPDjvMxuHsSgjbqyeRncuvS44ADww7fGFQzcdifaXdeMqT7mmPXUjSTQoKQ6UDyjpJaT",
  "key1": "2cD6jZjRk6NoT5t9KvfhdAipg1B3tnxhdwEUcf7wXdNA2UGRLXYXTPMzXp3GaUCpHEQUrSrS3QKxkbNv6VdoGY51",
  "key2": "2sS4yiCioP7NLz8itNy2b94CZRxDvdAhE3Xkz4hKzZm2zFFWDsJd7PXNYSDVH56hy2tvWqB73rXxRgFtxT75RYvz",
  "key3": "2Gb8y4Y47m6YG4Hcryu4L1Ct5zUtq2dNss2eDwvkZ2N89CQN4Qz9xSHtL5PJHzhQnqEqGGXPJjQFfRNApMCFghQ6",
  "key4": "35aVoncG8RMwhSHzbYMjYXuJjW9Ng4Nfk6JWAonEfpK3cks5gEDy6GjLpb1whn3eCxU8V16nJVPnpUMftFSGaNz6",
  "key5": "367CSEZbJCAWM59ZJbJU5Wt9cQdbTUWJcDfRHRLXNTJtiqe3wZY3r1GmwS64kHcfnKZEY1c2SuLJsqasfjeemPKu",
  "key6": "3x2ucjTjJ2jmLGAfretPYwTF9t4R8ywZdKjKX45WN7fpPvfwaJ5GdRKJmT4yozzcKUNmeWeLFzh8soMC9oAwx1D4",
  "key7": "hjrpNVX4VTTF1by9syJab4QLSram6MdKZB72KJ7nhYhw4Mh6wjFeiCotMjwbQenegtPnYmisgtpzq3JiTtTwkQR",
  "key8": "49vvgkYRkiiSGSDoXanmqkf9ZRd35iNAE74U8j25xE8FcREJHarpzMQGm9WL2hJ8CZwgrAPQKGLq6nvccjnvhWLV",
  "key9": "3tFfZRFDKouPp8MR19DRunYSAGujHcUrTkuNpRhPdBz5ud9gexXMK9kwiCJs7gFiodPRA3yDVNEVdZuQuf4ZhnLs",
  "key10": "2dgzC84zC8TDegCRZxaXE34tGgoaHvukTT6v9RsToFvnwFEDTTT5XVTLqJ7pYjDu8T9248Qg3bJrgsTRbiyzrXJM",
  "key11": "5c7LfKxFzozwXQ3twGZju8xiGVmbpv2EXJEmJFkdih3dcZd6728JRYmioUP2rXYXHKCN6daxr79XybMerrtmBKzq",
  "key12": "5UqYAEiks1WFj2rydo1oamJAqJeYXc8y6YUsRc7KgRxzwECRVywTSPxJLoFweur4ehd9YmNB2UqoWem5oQKgDxWR",
  "key13": "dT1cRm6N6ZZDukFSKAsb1crMnzLaeU6tbh6GetZY3SShSJ2gLyyF4JQbnZCPnQiWwr3KmFKaBwWZ5Eq4g2j263d",
  "key14": "YtTxj8gpmMxDVLSHo5pzzohV3UoYP8MSRRxv5WDUEMdf716wUHgcVHPKNrrGPZT2o4wuNutHk3uTtTGn5KHixTL",
  "key15": "4RtNVGW4vXWSoeWSdaouNGP43YtK9GMZqBZVTuLUZtPc47MMtMj6nfMYDSfMaL19pJ6RnDJ6AwvDHDHGNbnVV6wh",
  "key16": "2K8Xs8SnhLzpe43r51XknFmi2kzxxv6KJ1RV9wLbki8MiKwnWsQr7rBne8MagcqmswtpNDXnFKe9ayxB4HamgvXW",
  "key17": "5Y8ycn5X49jsyLtVTjz4sigiHo8GBgDMkWuNv8B9SYN2XSoZenPZQdX8yZp1pnfq6S5gC9BsKD7FK4iD27dMxEjM",
  "key18": "583aAvDrHezNTgr9EBhSqD1WfaPaaYZG4ep1TsiSPHvTuutMoYVzDJaskLL44xkRXVGKg8c2EAeFitja4S6GU7Sb",
  "key19": "34hS8Jry1DjYTaL3wta55daNXwe4kZ4UtxRYkT95vZZ2GmyJnBpyR7ZXgas3D9eqGt3f78LiWo9Y4oULTsgLS1b1",
  "key20": "5imir8VJiujWptrySuimYbCPeMHscy3sqbNmkwZfsYEfGNaC6iTgkXxo4dJALBmoRKNhK7MYQAPCt4A9Qk1Te77u",
  "key21": "5SyNa2Qpj7LnEYnTWCKK9BXcgwcLgSi2sEsziHTrFNxJpnCRQbLaEpgTJ7o3jE2QBLjbDk4Kxc9Ssoccwyv7wyAG",
  "key22": "N7C8hj32BCeQEC1fVH1BMJ2E2gMMA9m6emT2hPnAyKY4zATiaJyRRE3JAKqkJFB672jRcUoDfAqVfesuHcAjf6o",
  "key23": "bMmg8fpvwMFSLgw1DW59KwAPvDJtpqUHHepkv8b6W45eAK336t4U46gzXuBDoVcm5CUTqu8oBafPVZavQxpGQM8",
  "key24": "3scibHux2S8N6QzUESC6VeXsCproSTPWwtD8sVM384wkN8A1Q2rFyBd6enbY75Wx4TDccVaAeZ8jqshszJF1zEHp",
  "key25": "8ZXidKJoYkR1mDMFN6aiPJJVubwdnV1hhmMjA9t3NpM1ASWCiwzLCmdDnWwmHziYUpej9cZKZSvYgYm2c9A5rFQ",
  "key26": "2jaDxhoxiHvEYZGikBn9bGSF73adBpH5Lc4zqovVXaRpf8Lr62NWQovEeLrAd3qmPSfxk21zo2TCCU1LS5gt7PYu",
  "key27": "5ftCWQpG89Z9S5Dmi4wjG9STLrvsdUf7bMc97Qh2aq1RUAweDugKLmqYhm4NvTMQz8PbTKCFbZu7yrMHPznigtFd",
  "key28": "UA4Kq3vuVLkuhdT3p2ybT29rET8zGhFhMQdLS68cV9ExGD6dCQ5dmRRDpKodv1xUB4a25VYhLW9yNTBHKX3etz3",
  "key29": "5r94kpV2qgRemwWncSVYDXnFj5oaKknptfK2HmeEpg3A7jCe4dTA6Smxqzmc77WRYGskQ2HpFDGgvskjrd3VM1Xn",
  "key30": "RKgmi7TeFfMmhSZTx2a2Ezo428Y7Qz2RUjZBoKSoDiL2uUGSSG9CPZ5A17u2i1QHNNXb7bhF47n1obnmFjo4igR",
  "key31": "3gxckFYgqHsvetCeVvid3GKMU97pLh6dAykTGv2V7VdUtxAq7jJF1vw9MN6traTaRuS4QGMxV3MDtpJgk8bGrRW9",
  "key32": "5vB1AoVrRa17pDAByhZB5f669Q7LYGbQwFbpYLwgwsTUcgeJWJSdcApGhnwM5CEdNCuUezJfucZa87LTKHEJBbb3",
  "key33": "5aX6WTseMRnVYCFZDALZn5Qi9Xr89fvgGbWYK2bSYnKuTGRweCJZKYSjZeZzc6BdwzTFHJK46L1zkMGad8qLUQuv",
  "key34": "41ouN3UAS4T4VoVjqWzxZikQDFggYFtxpaY9GYbHH8zv8C9BpDnoM7sqBf2qQ9A3HYsArkgiwDgbXpFx2NjPb8Q4",
  "key35": "5KX36pE3KeFDt6iZH6QNZo7TFzcdjYpgp1oWf5XQXVpke1TqBqQN6SYq3AYSbeqGRX9PKyC7zE6ZczZU1jBcC6e2",
  "key36": "ks4vy2fTkgigBRRPZYD8Hh4fTen3G1SdJV8LqfSZqvwx7ho8rSqWXhaXbbS3YJ4KTcxwCJMhX1qJKsUye8iV3ev",
  "key37": "547bmj74EiKzREYms3M7up8tqZBv6uj7sX98Eu15AgHSvm5mrBeTk53kZUpauYnKFSTdwg6hKQosMd6eWdQ7fVwM",
  "key38": "27FuqhTqwV4bp9zP8joHfEXPFnGKyqeU6XrWMdAixRrG3s9ETT5nbNtynVkH9Aumd2cygHpkZ7s8Gf5m9VVUKQTB",
  "key39": "3Z5q8dQYdJ2rUeFJDXxUEF5sGtZ1tuAS7E9Q8HV9EJJ4jdxqw44pRdu9KqQwuWSHtDjQa7hNsGkSZHq686CZLKAQ",
  "key40": "3aVchquxYDTd3MBrgGv9a9ynZ56akjnUeACZvyWvqBW6FQAuuwq8mPjynWV64WzsY7sBzsAxKdXE1GUwr3EHmQcq",
  "key41": "2973YMgDhVq3aHkAwUetosjZxHoYMLksg3nHXoAMV2bCrGT2RvTsbzuix6a5kAZGDKfK4887HCwEWdNdWaxDc4AA"
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
