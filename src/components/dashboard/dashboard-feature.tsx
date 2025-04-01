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
    "66JrKPqUeQtuVKacDi9SxbU1jtNFdVEdjpaKZ1G34RfJfhjXjMPGYTXZuNfwG6GLb5yZgPEM3ocqsJZsdGUK4Chz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpAZd4ioSbrqLdRGJcSbjsfJUErV2wTQRkFThWegRVcMq3afidFfx3tK2GkS6gLMrRfj4jLdthfXNXnLYjfAtb3",
  "key1": "2wSqorLXUdTnBJvdbHGCsWepALUycmjd9JQ9btEVkJJoH2cvVdGiePW5Jj7UTtvkVhYNzisf1mrvcxuVtFRsLzdF",
  "key2": "2fsw5zZ3bCVcfdqH2AKWvpDWb6CKG68zXY2JWHSyyqcfaLc8M9yhyG5w9gqY2PKJjELEs2yr3vxwzJPQYVLD3opt",
  "key3": "5NvxEWfUcHbSogpBEmEWt2XYLgsEKxGxQXYzQTGVDq2TpoxLF9tBK4iJabAjNoMU7PGnw6tsLqDB63pit4rEaTYj",
  "key4": "gYYk8ApEb7nGUVr9ahAkz61d7dbr6acrRrDgQdDcJ6ypM2wVQ6K6i56aD7w5LK35cYFz8VXmjo6DBDGczg4d49M",
  "key5": "2u1ejZZMkxgwRGhF6Xosgi27bTK89DkwkdNmKj4wcxBrz1wrCSWBgvWUCiipKwrcs2pxZ6RUrc8H9SZ2CsfS3AqC",
  "key6": "28rsQCnpeVovmjBEpctrLxV4pkUB7a4ZZm6DvHV1xCw7sB7m2bCbGnrCcGLzHVTEzxNEEjnpopTpTM1vZ5eR5nh1",
  "key7": "5Gch5xhLvdG2bk839UMRsiC3LSXCSZ1DC4kXSPwaDbY6h1howTPHC8xBWn15kT2J7rjQfyaV26PhbujGkw3MvmTQ",
  "key8": "3k4knTX2Xfi7rFY2d5WCXPpNXX1hdxpzSzfYYhe8AzMdatdmwpcsyBVVtVdgcz4DUexqcLQXjpoxL63vcw58qNzZ",
  "key9": "3CGZ7JyTR21cZtnLUnqwJPAYGP1qED4trDn7BmvhCEQCwbc4D5JmTD7QSNjGp9dk3bpPzGQtbXVFLzQVkyKzyUzq",
  "key10": "5hLuNLefyedbmx6goq4AhTVRsvex3AZifKWBhn1YAduuKpwgXxVg7Ue7b1QGcbNtHsXTFYjt5fZEx8SDTMUXvqC5",
  "key11": "5kJQxkiLjrVTvH9tbeU1ju387KtTJx1KRAN4UjNJe6A7YxuFwPgnqjr5LYXxhpUVPWw9LMst77BkLwuxwmpZ2Yq8",
  "key12": "3fX3eheNm4qCup9ZuPJWRgCFJ8TM5ooMD6bAV2eJgWX1ADg9Btcru49SJAEcD8754YGFy9eVeMyNHsgp7t679Qrb",
  "key13": "2Gj3oNx81DSYeePoFGY1xs5rp79Gw8BmYsumj28cGrK9hyJfe5qG9nLqbxKuGrbMDYjCDQSbSbJfPabdYQDNLJhX",
  "key14": "61Mokt16H9vn58rBgfMbRx9wLcuXd9f1d8chk4BawpJoMnRY4p1tTtULnMypXuh3ZV1BLJ3SVHYpbhQoz4PNCMkn",
  "key15": "5MRQfkZHa6CaorJWbidTq958pusRhA7qCfd1SVFZtxVBxcHgTQNLrjmn3UWeyY3sRgK95gEKYeZx6BWvbq8hNfXz",
  "key16": "3cTfbyQkgTCZWcehuiXqfk7BDfWC4npFzAkvxYq1qTeLuJqeASobb52Hm9DFRyH44EuetH1d6BqVZQPkcR86iGoU",
  "key17": "5AWmzYxCYU7C9aKVBRyzvCF6WBWxZmWriikvtWE282w29dw9DatNydyZwXDdMTwrF5bWmurK1P74dHeDaD2X3eyh",
  "key18": "2DF1U5XqsXa4r3hpWGLxjvkEbPRxQ8CSsCDwyV7pUdQCurMvMr3YyMVNyeDpZPYFbbXfXgwY2CQrxEkXH3k1ampL",
  "key19": "5SKdrseMMW3AtvemuyWdkxvrbnuipspDBBH3D1zc3W9nVsEhjtFsTW64FZpeaLR8SSCdC9gDEAiLyU6ovv9nkvB2",
  "key20": "4FbETyj2z77qT1xqiMeBqCG3P9SShzB5WbMEGGFmen7m9bm1dNyrMnmDfx7MpW5tJCoALz1oKNt1XMbruLS4Etw8",
  "key21": "3EBEVmMqciqVHDnmbMk7KogYkJ24uoBZCvxYtzDy3UG7Nn3VwgBqVjuDvw8qv2XsFVmYZDCdbwZdJqJDtjKYjsoo",
  "key22": "2wThKPX5EvPvoR7UUS8JcG8Sqv2VMzrmwgR3Y8sH3CCf7iXHhfvxfcLNM3PMTyMRLePRd9W5GyF56SfEA1Zn4K9Z",
  "key23": "47Mwyj9AcQgpsyAxF3vif83szm781RBKpBFZFNDtRMVFvFhsERE7FB9tsCDmbgtDnTMawyFZBR6c5iePU5myPG6S",
  "key24": "2YgVFrGqhovjvJ3o3mRRa8zXo2sU6hm48UK6r6v8p2GtMnB8jstCW2rFrvEmZcbnWFdDEbLaGH6JzyBBY7rZXHMZ",
  "key25": "2AfJwheGdrLVRqLvj1xQLkLnHSprjk5fRBjMqAFZ51ywhb5MHevm6MJtKewCztREVgGxSHMTha9wsK6dGJcc7RJL",
  "key26": "33Eo7HyaoRn2FRjRAQjESozt3p3X3YxeeRpJHGVnP4C3CZpDwHc5SaZxAPmemEbRiaQYTKLR89DeLsfNk6Frh2hU",
  "key27": "4NHaKjTeEYMuKX6do7jdc66W1XeMFtGAUtmxLr3km3PFN79jqD9kcFjJGJnKXwaPDiaswpZd2jPaMDCxtHSmMDgS",
  "key28": "4ekuMK21YNVKhw5jLrs4uHy4PgXcbyXDEHCTXqhmU6i3haiQESNNytSoFgFGedHVvsPQeXtiKv3GBf5XbhXfYV5p",
  "key29": "2kJidhmkjTB814eDwG2pDKBWzc9THQGXF2gBoaNog5KVJJHsFeoZ6ejVWyqKcseCiXFVN2kaMxJwGSmGAftWq7ZW",
  "key30": "4TwUTXknLRvuZ81bqjgXksXAnASHphBAau1xXYSyS12eXoqgZU4Lnot4Erkq2avGsVjr9r2DDRTGnbkVYye7Mz7g",
  "key31": "36Gs5jd3uef4b5wzkes31BgS9FZbcMmdgdBjp9qvSFwRR4PYU4gnz7CAzKsP7ZevTJtDSp22UAj8zrTN3WM7BETR",
  "key32": "2eWM9LkodZTQrtv2j1KQTU6PwDD4FaqFccQB11ZbSmSZhMVjfDDx3d7H5qaJf4vYMC4y3YcAo3axeuoCtWEXr8sJ",
  "key33": "3xqFRw8atKpsH4BW2JbQCoygvAsTBPrB7nQGc9EfkCZit6dncwmSk67DZ57FjetrAq95HXrz69Zxp6J7AqqQVeGM",
  "key34": "2F2rUvjMj7KEJojaRG9JsrXpiSQPY5GUwEiUUFcRgTMhb1mYcpmGDEZ64MYShiBifQ7iduZxK6Jhuw86yMtX8sn8",
  "key35": "rvBZLPC44pRs7uRFCj4vdBxYwteP7hvZbg5JMMPmwEz17aEhp85YU26q7yACPsUPwGA2gMV4cXTRD56jaUkLoAh",
  "key36": "3HegqMC1P1teLtHuDfdoybumQ9zSDerLj7uAvBwDcRgoguCEoLnSym5KjuVThv7kZPJNP8WcZQ8UkcZeQ2weydt3",
  "key37": "5QwM9qyW7PtACjtgs4ra4odHfJQPqFNnqgrbgEZqvjdv3uQv3Pvvxt7iFAFKTajJFfasfuyugMdDKwR2v7FoEMsh",
  "key38": "5FXB8AFGiTLDL3ZkCd7bYMzCLEwuUkJYxQDfjvXwUqtqKsuxv37Z4qVW3wX4wqSdtRAmzruveSTaoH5YRyNnonqa",
  "key39": "5tBkfk3HWNJx5nwv7pH9ab8RyiphAVYUyWEjAYZpEQa7fzxGJjS9yhfsba3Xoiu4mFfj8JSXbmZKhe8NDXRwwo8a",
  "key40": "4XMzvHX74xd1YjzT8nvQLeq2CwyWhnq9JqJBew2Jr1m577xatNgf64R7xVYwV2kgrn3Nf17xdzpoHT1qrvwmTkZs",
  "key41": "2i9cMUCfS8oQLXtdrR9Kqm5ov9ZQTxFBd9VP64cqwCV3S3jjodsAhiDwkDP4D5YZRqALoRGts4nneaUQzVESLYdV",
  "key42": "3j98RBqc4Fn3vZuKi5JVihppCUJRVrtJ9GmFcjYVnz8gYkgNAtxRSpN79mG2RgysPvPsQpCgb9wZEkjfCEnsCdxU",
  "key43": "46uSZJUza198cfsJfvkCXxZE1xwLmxy7YKRyHYmWN4Yd9DkXWscHKNTUR4cqYGVkVWNiG3BppSs6HZfEvwJW8omZ",
  "key44": "voj9tdRZfTY5o2RmECLXkSMGMpWmenWX66PjV5xRoaQcbQfxPuZGzerUMqWLn9zACCYVAiwE162M3QEK2HmgcKB",
  "key45": "2dfT7TtfYjB1xZwZucn3yXLDadPoNoVSYQR6qTzqR83U2nEAANchKnNG2rc5znrriFHwEQ8L2Jy254UuadDESzRz",
  "key46": "66iWv5w6A7cfFkLK6KUh8SDxCi9PPmXH171ijbEjGRRWydVXQaxPqbDqVqGS7bGAUw7bZWgqdNApvLLqp5Y9tTJ9",
  "key47": "q2mpqJotqAiMCZYhGMMUSWk28uCvAdxpuJhSwJtJ6gFvKfzs1YLskLr7vf2R2k1Vtv5bztdypQgYLi9G6uDjptA",
  "key48": "45b9yykqXftheM4wgzJDVW7gYBV8cxvSUu9X8i1RXgjC6RQmHdMgoHbTcFR6GpSLMJzPxTCds8cdmiC3qTXY3WVJ",
  "key49": "4hAQ1FgwswD9o7v4EQ1FSsymnLDFX5GYFCeW8fB9paoYYbDu1y1aEYPuYJ9FUEQgLoxQ2aLWPuyXz6iAuM4HVN3h"
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
