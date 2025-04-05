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
    "2HLbFZtUAfokohAKjeCqpGQzjDZHm1p9VLooHfrmXCjBpjkztkVk5MvmWDiKFVXuXk3aBdwnrPvVwBRS41iq3fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHLZoMKc7sifvjFPx4VC5whX7gpdUtk8snGFewPTNeWcwkjBfaqeaLcKKVog2wmNQkGBs5xhDKnWZfFYdnw7dYp",
  "key1": "j6h6rwoh2Ynz38KRDdj9zxD63x1Ji4RHTWaCsgBkSFyMkUrXCWqXvY2YkEr8Etg6eV5WH9pdbpN6MF1hcJVVeMy",
  "key2": "3pJEijz36Gq92MjZgKTksSTnGjVMLKAdyHmkt8mEq3FZoXLA8rY6trMLUE7nHifTBvMbTTaS6Z4AtSpxmCqGEj1U",
  "key3": "5zRCGNMbGG9kfQVT43Br3xwYQzhc9ysnMvKvkbTNyhPxbdQu6yEseapMGG11V4yyq8FV5hQA4D2A4z2hfWdtmzK8",
  "key4": "2kSKPBTJDkh8nyeZNTJ9nC28WqBdNFy4eK3kWTXcwPcxbMbJ2ACSVzJTZZLsPc1sX7XEWQcuJVE8RCZSbQZDEvwo",
  "key5": "217ZRND1odGJJv2mqYHCDBeuioPkBShM7eLinGf8G6nKuWiRv5TmriJAdzW3eALsneJECgdmE9u72MoBAbjRPD1d",
  "key6": "y2sibccDppoxhaM92uVKgXy88oJHpV6X8RzXk1dTpTrm8kgAxdEpv3JbRkMVPNkN1mGg6qjYVSvvBJXeRdEvsFP",
  "key7": "2cC6Xy98tG59U58nnLvF8Q5m3N9yBxCCfAbp5559x56pvxcokxpGuD6Z6jrEKiuFKqtzMXkTxm7HGB7f4eMdBNfZ",
  "key8": "5dpv5jF6B5hMJhahw3zNB48W56i3Yzoyfg5wEdHVknfpuL5EjEhj4iKmFiSevsf5JKZcmSuj9wPrkBJS19gDNvYp",
  "key9": "2rT3gc4yRbj85powTsx7GHMd19WaUfDNSHYWYEabTZR7AbbF4Mx5qJDEVVSsWjzKdyAqE5W85gLssejCwrPJgsXy",
  "key10": "GtyLuF2CtAp2fdDNvDEC82YJbq3y4WN7Z2CZkHkgHBjDTYXaj9mE8XZ42FqkZjSUirXc65aPHvdFJFW4X1E597k",
  "key11": "4a27zc28HA1NQexhRWkb5UuzMGReHYf8nwVCxVZNJnF4NLzCs33aHbUVAm286GgyqZXxDRjt87UUAZ1fLeiFZ2cn",
  "key12": "2XKAu3yLEm2irS6NDFegWaWqZBbdUsosLjvjmQTMQGHMNKzTDY7bGEA3dVpxwnLXPPUgE82NQT6imuAUTLeEFGfX",
  "key13": "2xDzQVSLUmu7ZD5M1HVb9BjjqfGWxgbQrAoBvtTsG4TvfypzDyrknAxroKZ9Mmm5NKenJsyQ2VfvSCNxe7iav85w",
  "key14": "4YEFYFuuRWYksZNK5N2NzPQaDMkbgBtzSAZP6kqWg1wgHPshqCSNNN2FhmRx4DcyGvoxQRknQMgggHRgCzJowYf4",
  "key15": "38DZRvbfHedxQ5UdFb4tCi6gshoA2vmTWo7qePLsKoUHQi9fK36bR1exxhb7brENatSS3R2upbakiAcgfE3T5Eb7",
  "key16": "tkATZ7n82rG3Cnns2eMzHyDhSpMbeFbLvYWUia9Z49VR51krE9QRdt9x45PS1TTkn72hy6m69LgitEtPmwhKcu8",
  "key17": "2yBRuXYDtFNseQxUjAMRwaiYSiJY8LSfpD7AQC84zM475EtwPWkr6qXhsSQRpgkHPb4N77bYzeDg8sXXoXozMYNH",
  "key18": "4tDfaNaT4rgXrtc76ffwFD7zzLF322odbJkarnMALKZ9uYcCfRJWVSLcbzuH4xrYZhtdjVX6uSvR9BY2p8yXNfMV",
  "key19": "5F4QggCihupT2ZocEjusEqXQKwgyahvbUXTesUG3U4ZWrU8EH2NBwgKYoDXcnHtaBV71Ut2UPaAEq7fgHLWtj6dW",
  "key20": "4FFTwcT4QuwKiojCLSzCbV233FACakEiUNJv4TLNGHMKSL9FbWk1G3tJqHpnrBQsb4CBVKJ6BFa9TXbh2xhfdgU9",
  "key21": "2MgZUiX1i6DLwvcG72mMKoi1zGizQRYnSJqHcUfULnxXSpoXgeH2pv939qLA9XCVkVa7xKJevTt9QDRKD4ia3BcJ",
  "key22": "2vdVzmrJcu9FKntCB1zfXaFMxxVSiMwsigmL5x3SwW9nHTqMn7S6sRupdAeu1J2mGMbojCYCZAbui7a9SFMd1ci",
  "key23": "fDzZYrrjtUiggXnM2QAfXrk8m1KzaKZq74kTmQZkKFnnop6oSA4CxELy2jXtr5S8pQhVkXpdh2WPfaYyHkh3Zaa",
  "key24": "5r4GAeFXUh2cSkhtengkWH44DMRLEjxw4wP2ZEtnfvkw8Lw6sP1S8mpKk8WLchgtJRzFVNWVj4ns4Ub7UyTF7PKn",
  "key25": "2vF9id7oxZX4NUbNCvTcVp3covcFdJCBmJftX5QX1aQ1rUUViUr2n6MBSUHstS97PcqFC8Zqj5UsYrbmAfkkjMz9",
  "key26": "mZYufAKVaicXHhzFrVNnnA58ubjEuHqGKxjje76r2pcim1iwkaX4B6JgX7J2hXBUGjYWHpTr2cSA51CafKjRn2y",
  "key27": "3d8HRBrVwVPDzLmrTJ3w455MiQPZiEaESNGYtYzdhLX8bWoNix8g77whRqrMNsaYFP9aNH546ygLyFcscAv41NSB",
  "key28": "3i1P6js5p4EWXHJmGgWjWumsHtXUpqmXBYQwiNX7cvjm9CANYD7NhF7Aej5NT5mp9gQCHU3d2H56B3EXGw8haoi9",
  "key29": "2kwkfEPZJx23DotLNhYiHTkMQJcy8Cao7RpxAnGpB3iHVz1VuWoZvc1HHo5x7gZEEzeqHrhq84y8UdVJpawwRPPp",
  "key30": "4vfH3y4Vz2xkj5BfNzhktW4oVoXgsPKoWHEcXn3ARzRYdq3nXsA45rhF2YPUUW8awNJ9pfzXVw9u2M792L65a2rK",
  "key31": "3b2PBXZZTvRY2v1v2Kd2GPhnZZYSrdUKzCsbALKEJNZEzN8jtQD9bVWdXoY1cf9Z26Ekg2gybxfX8hWYAyF6SFCR",
  "key32": "3cwNzgi6a4JCwvvTDeYg4uVgo2YJcjJn85t41fJyVLy3mc4aXKhEcYN78C3HecwDkEKY33N5gm3s9NCcEJyRhkvg",
  "key33": "4bvZn5jKyuCrH8jpTwEBqwBw2vzeFM8YBHmGL2CJrKymjbssYqbLgwCCpyPdiBpKVPK3P4XaU45ZYXdsm8Z31S4K",
  "key34": "4EHxvcQgdaLtmG2QPPVch6D4defqhNoSvyvjXuCoU7VsjhTzSTtqzzKhb352YhJVbYzwwGAaX9Q2Jh6awBnuCTiq",
  "key35": "ewjyBt8sq8a86upPLXmWjSmU2tj1bDj1P5KjZ2BCmqtX6hgrxgMbgNd9cGQki51GRy6KWocMPYfV7YfRkuQvYM7",
  "key36": "2r9ZFa4xJ5S7F8jsMfM8aVR1oxnfAzd7Mn1oSnE6S3bWyG9A7FUYhNKHUA89pWd91RNjjV3xh9Q6WsyEnQbuFg6q",
  "key37": "2ZEsgEW78SC3B4ZcjmEX7q1rgUthhVMpJFDNqQeXiYHXXiQCj8W9wjJ5sMGfMoRMCHFYjnTkQPPDuoAYxhwgEF19",
  "key38": "4sPNRhxyp1ofxg23riJ975oeEXx62yKf7P9c3THznC4mE7ZPgRvwMrR91EY9XhMAcrgqb5TcKFtsUk81jPGfp34r"
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
