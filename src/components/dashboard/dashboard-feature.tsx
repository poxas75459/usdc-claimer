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
    "4yb6nHozfzBxzpnUoDzWhBDdVZSB9oEy8qi9JmfnA47J6oot9qSLH5obe2jFzQtcWCUR6zTgbrNYavT9jVq6xrJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gyGmU8ViCK5MyxSY58r6nDnXzZfR9pxDn8jnM6zporbBYqVbF3XmkEjGxJSq5hQ3zMbQ48Srptpvj7rPPvBqJX",
  "key1": "2rA48n5Pbz9LvpC2CJrw2yfokdRivM3bgvyG3aWKcEWrP4egwrMt2XqZBekLcWv8keTiNFG1Jdak6mrq3ykBzeAa",
  "key2": "528PuqXohRyaqcd96BcjVyX92ALTCVW11MTLBGX36BfJQQpDxo9ReY2jUKMZS6bP7RVh114N77p82TXLErCtavbS",
  "key3": "3CtRGoZzh3bPXbpZS8JL11rfauBjsQ4Q9jJey5b8CuNUuWo3CFbnmP2yjDsSnd7ToFmcj2MJPExMbHQZoMG25Wmr",
  "key4": "4KHFbCfALXP9wEUtpp6oLrjM3A3DRQMpGDXWTbkPmxEa6YGsPeuPkR2uzioFFT8VGE66GKhExZS5Fq6uHuBziN89",
  "key5": "3ohn5EiSBYPPnYGgxT1CqeJmycqeVjmrYiUsASha9TbpFNvzwVozrHdTHSS6X1njPNi5hLzkpWhyqP9BfYwK7ndn",
  "key6": "29qJ6Us1vb6Tnz6KZmNKTWpd9NmiAKVcCAx5AEpeERWi2C659QE8Gz1wfqEQYdN1zd655daiqvXbgaKHt3UEb3eL",
  "key7": "cK97oABgJz5SSGhRXDncxAgz4sSfMKZr2anbCuUu1MUJwN1FCT7MuEvxnt2UqNc1XWzKzwi21k2AqAPH3Dze4b6",
  "key8": "3WTiHKFWUeeNcu9h5yRVWt3V3hFBvkC2sgaxUpttreNwi4vfhgX4zw87qyMvqsX7wnx9NnPCxvfw9u41mxBdBEyk",
  "key9": "27nJBsHmjiHJKZBqgzUmtiybzFNEfAHmqbeMW1rRMECQibiv94zj9D3ZQkYC7vzkZRQeM77V5Px695CeqQDGhWce",
  "key10": "3bx2qCZNa2K9ezu6xMWcN9eGqMhV3cbefT2TfK41bdrV369i9uxUBSr6fZBygsNnbJqggw3zjjA4ncFweNCTc1ae",
  "key11": "A2drUwYEPevUsM57bthxTpqGBAowgykEVkNQqwZZmahQBc4GhDToK57GuyXVvajden5Y396W8gfGMFrqrjSQrgs",
  "key12": "3enYASBAk6ZWH7uecGWyDxS5x7WwNkHAShGETjs2YZicL2tgmJ3Vuia1MviXKbzfrqEsUCdN7oaJWTJVRMoQeCmZ",
  "key13": "5U1FXGAeFUQ1y1thkP6tDWc89CVbNuuwBQ1octdPnizqwGeMFD2UTZnK4LYx2EoEyJR1zCnZdujJz51SiC4co6xu",
  "key14": "WCu5v5TWFkKwfTX8LDgv1ixzFhRhsoUpbgV3ZW3cS4qPXWNU8H8uonFXenwprG36L46Q6dYnJULcn9bCmvLVv48",
  "key15": "pE9m4CXNY9P4UD7KmFMBKQGoTVKZoEXDwrBjNEGsoUQEBzvZNqRxJKS92k7qgAVZLiQUxh2gKPZjRCpMtN5B4V4",
  "key16": "2CKCniLWy9BnFp7FDZ2MsJ76okkFkGXdfGaCdpUYHvBuuho1n5kaVfZgozj9HCZor9fLWTXTsqkgNfo8zb7EFp4d",
  "key17": "46y5kvbq1CmL78Uabt3Z1oUZDTNwMNAgH3scxHDWfJtdWJF1LLPzaCZ32fSVVEZL5BnVFpwFxtYZBktc9uUvQvsN",
  "key18": "4eP4Y14afMfJZ6povjn3VK5ZaKfvZ38pxAsykDK8fbEnx5Wm6vq68HVMDehrPArFw7MCq3wEo1ZJdGz2fx6nU4i1",
  "key19": "3zTzDM6FJFoFDSEoFGdnRGUFD8C9L5Df7xCz5omaxRbhMtXGKJ6CWYRK728T5Cxh76Mgb6H7Q89q6F8gNhSFe1mB",
  "key20": "3BFUkAgzQpBEijJB1VkCCDR1rVfj2vfD5acWLS1BZhEc78V6JVEnjFq2wbR6AoQnKV8Uqp8SmAMVHNyBCVbGmMnd",
  "key21": "4u6ttQntmvcjd1qUFNAGr6qnHFKWP2fZJH5e7vZoFztNs9KtEKpEvNNdTMXBvtqDQztHd76oiT2P5hoYEMpnRYKo",
  "key22": "b7PHpxWfVWavaBUYA6upbeAUWmWj4tDFNXjuipgLN9bqaSDCe9JMA3oaqNVUVD7ZKdX9oMk3gyeq9hvFHgbmwSK",
  "key23": "36772SioKweKfsShTQZHdFmf3j2yqg9Xsz9GQNg4qS2uKeLepXTSXtjWyQVY9N37Beu2WBf47aTdKHk8aAnPtGFc",
  "key24": "5GywvzZRCf893ywhGpKVqnxov4fzVfje9ZfJs2ymDzNRVewJfj1YqBp1S5paGZhBCe5WsFd9otkijaBBTtaM68zo",
  "key25": "5pQ5LimPae7ShekfhnztBPk5QZ9sVrPNsmrpmUacVz8kjPzQ6ieFDgpsBsAQoE1Zf5AhkBiPH7dH96BadXyzosgb",
  "key26": "2c44qFgG947fP7gms4StukSMNnbfU2gW7XTYzws5tZkfQdwBPYTbJCYGH7j5hPaQSzQa6SR9wsDdCBMCJh9e8taG",
  "key27": "42g5rN5J1M5joQwvapmgsnNVSNNJ8aBykBqd5cMYGrQcx2rdCFq9DBc5rqyQmePrv39Ef6EhUFENYC5Rn5hnqhrp",
  "key28": "3Ke5tfnb7xhEcRFJ11W8Wi1LbNAn24NJYkFcUh8ejS8YQQQrvs1bcp6ZZyq1zUJeLfW1eXzrfVMHbgsDkHmXgfuo",
  "key29": "3Dz5HEBtg7n821CyLXez9SD8GUYfrKtGmEEEC1N2So2mD2NSwYf9edrMLw1mE4ksTtouKmeyckLarunLmxZUn6fX",
  "key30": "4N424qK9fFsxsFSMemAkHCiYN4qvTc4pyYhhZHiDrdwVj5d78tYiyXKn3Gu4sng3UB3tnxQPhZQuqE4Z9y2V3ifW",
  "key31": "3iCdvHJq7xhbPfvyySEtmDoXdkiy2LA58XFCwkUqLhcheFx8cX2iniTNBbPGSmM6FGanujFupM2WGVrhEj4i2vcb",
  "key32": "i4HFfSx1vCSJS6UjW1KLdfADSG4UpDAZ1Y6NqoKUGxdZrdBK5v7pLKdRrmt4MMnNSM63nW1gCCFsTgqKNX5er7W",
  "key33": "CZNf9GDMYkMwMddVbaSG4U2ZhDDEEktA8rzRCC6qAafx9wGxdCzyLjqfJUAcFmkmXuUQFFN2Gtc2cynpzyXL9zL",
  "key34": "bjtSseqTkWffcfNeJG9Hsxv71i29YJwQY1faAWnQFtXcyjv4byuZGnJuFt7RkSaob7uQk5QBH17eyDqdZeMVjhF",
  "key35": "3Up7K2xesW61o1iNwxfVqW26AommHUYCTyhAbUfqkurPkhoPqEjCsxtruT5c8q2LEajgQ6igpFq7Tf4xKhCUkHBp",
  "key36": "5JayfdVhTsD84tSrPCB9FvCjj1uVd1APB64m8dtikgBAWFqCaFsKU3mSUARVSnHoajn2xnmnonPmchBeYgJhujk6",
  "key37": "5VCKL1uRgBrHPE4s4XU9xNZUQFjzk2Y6TnJvTtRp64Suau312U2UQNCqWeC3VVAEYAVKu4A3KVJpwGn2NpYhz8T8",
  "key38": "27MYnTKy6sJjk7Wk2ng5BEa8byKgfdFSe83N8uKVkLTHLpVbUa6neHt2s1H8DEvRrvjmmJmJbaxZpiynpURHHRZc"
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
