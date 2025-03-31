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
    "2k4CbQcauW9KHVPexDqFdKMFaD65sbsWtEVNWYQ4EhXoS7svH9GSMaYonkYE7GoUpkbCDmK8nUTahcKy5qeteKH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgbYR64CF8PYLRXReQ5x7ynMTaFiz7cng7AQ8JX6T9CU4fQY9ZsjKdUD4AeGjCBDkwgxQSBfp2UP4di8jQ8GH69",
  "key1": "4n8xB7cHejpSVAvipLxxwTPS9uXVSRutBiK9ojaSPZH2tiNcHqRbrBiXa8QzXrqfT5DbCyS9sJS17TDXLh82CVRQ",
  "key2": "2j4HeHywzBiYEjgXL6GekQY5ThbU83KkHD2xH8nBeFE8GKR8jMb5VeJGn86Ck35VHweg9iMto5zprn5wwWvpEXK3",
  "key3": "3jSF9BnBNnhUyQUq2ZNHrMh9RFGqw82Exj3VsN25Ugiwo98JXCYyQiknfDXVrTraShQPSmvNNTXLrUXBZEXHddyF",
  "key4": "54y5gLnxV94eaw9EToNqXrxAiEKd98F6VBJjDZin8cLG56wWH7wAqizYppNz1X57LgrUmD7fzw9PfV5BCZMQE1ig",
  "key5": "kX5YvDHXRxgCV7B8Feq9nWuYEExQcXNF5cryqYJh5Qi55Mw6awUbXeMGxsamaaVzaspocQxdnim5PF2K4fXN4vX",
  "key6": "5hxGnSCgWonf8FjLmYzwKW2f9UH7UwCykaGYasCR1SMJanaYtUDVqnmZ6yp958T42REktxqVci8UHN2tY1p7kn8M",
  "key7": "3Ww1KQrLq1ghxrbRRi6PuyqCAJeZxyhRwgHB2yjUSgBreo9QZghSrEdzdfEE6J7Y2UDwKswGnj7hMtktok12BBKi",
  "key8": "3ebWY8BdzhSwvrHt5F8RGmpsJQdtMHXo7Xkspcstz9xkh3CM5SMJCididcE2ZSmXwvQdbjEJWw7VF5XYVfQSKAk2",
  "key9": "XhUibzFvrFs7Yb1mXPXYbs7anToFgkoJH9tEwyiiMjepPRVADTasg8VbVmteCS2SLCum5h8ayVUqTV8WXeiFmoJ",
  "key10": "3MbTxvdBmUp1W5AfmgwZQyia6VzNeBRjTmbuMnRucA97KrfU2MUh3yQLEaM4JRV39sM7ARmgkHRV3msm1zH5HT78",
  "key11": "62i21bxEji5pnwhFRSFE7j88JK6pRhz4ZRbpAh9wEfydSz3GGYqU3S9GNmNmGrNSeVBYwyRQuhbXpJZziKg9Yhr1",
  "key12": "7TpjRQhGJ3i3KjHaeE5N4boB5dPkdiBgPuqGKjTaEQZJfktzTmbxibpAwp3sTg3S1TFDRNANNmuUfaAEcWbAUV2",
  "key13": "5s81ZF14fB7iKmkmSKDvxGA3TPhPotGkzrbfWHhAHnwdGoPkAU8yC3bwBJmZZqqqxcyCUxosE2XwJ2yu1ZfefwM1",
  "key14": "HN4bMs7mUeCKLtAWqPpvcXRKqy61DY3LuNp1h7QfmvSfo4iGEb2cfdtk8s6tZ8x1rPYdJxN8BoaGpHCTneSzG7A",
  "key15": "2bt41wHi4vXwpKGye874DQ3fGaro6BTp8b2QraBHFLGvWzGi2ttnsKFuwVcHZYpfh1sXJreHJKqKdUK4dBW9P3V8",
  "key16": "4NgeWuzKcNbxPgwe9DX35ZBP7uo7VZAJRT5eEUgnXVXA3jeKmVxH9zQp95USMVzttj6SoVpoEbaJRvn8Xe5S7rxQ",
  "key17": "3QufYwECn38ZkXoU1jceGz1DECFjcScszCYrXaKZnuwmVhmv1F53ciSEVnJfQ76KodTfxMMboTkt9b6kLtYQ17ps",
  "key18": "62thUzacu18w9xYDKVwW5bNkN4uSyVepszBRRBRUMbYXUtCdSQg3ztTx5UgqsvS28pLz3Yjfvo6e1CXFn97ShbdV",
  "key19": "3FozUgUg6gB64SPhkoZC73M9rnFcK4o3vresLtd371f3ZHy46U8s5pYe3GEL65e4ZLYFKf1hHdnR7vj93mK1cuf2",
  "key20": "3hrhzBr5DxdAKbqyWgRAhgUbGbvctdYKELCfSMuVJHFztLNgSUCCsPx6AjCcjuifSExE7fPPTB2ShyDPajEVzkRo",
  "key21": "eSBZTf6a4P3XiLBRNtYFnv2Pfat2bR1ddHQAUwxzpaLy2F8XgifW4fm5GHtb7CoTdnpviL9pEY8uRqxdK5hTCER",
  "key22": "2JXYDNApuimjeCoHTntCF3spNfS7hi4wD3XnzmdCErn1JjLSCPH9Esy2QhrR1LUtQK3fcizyHfd5GPNtTsxDqNUg",
  "key23": "36qiei5g3K5GLpP6UHM1RwkhaHr4kFqcStpA9FFt46JkR1BD95AUrrfa9qn3QSpXevSFSs33rgp5tgBvxHBmRfjo",
  "key24": "AmW8uvLU2ZRpk9LGuV7X6qBS9aGgJoYbQHYXY5v7YaXpbXVSe4vsjbYuQHmwW3t4yjHyKU51TXyq6Sd81PcfMPz",
  "key25": "3h6xSpFhtuA65jf31y78b8HFQzVWWCmMxFYmcFE8iDB8hq1M2sURBWpdtPxP8e7JVifL6tsL83ygXDvkvhU8fi8p",
  "key26": "59senVNc6uvv8KbHxhgizGik3cvf65ze24AiiEbMnj94nV7vz58EeNt6iBFKyH7tJzEUpSyYSZbqQswjDujg98zX",
  "key27": "46ehv155NgivcgVQkfi23WxgmZ1bLyNK5CtjomiHUBSdLWZ2GimWGb9MBwdMjEfRCb4qWBzXoiNJDStb6K6y9tDR",
  "key28": "48YFBWjWKHpdrQR12M4dCTewJEWYodwuK2LtJf8juPCUGS5xGCB1yE8CGpcNmaPkEdpd24VbmW4MGGxAkqkaQCQQ",
  "key29": "GJBoocJ8QR6dbSmwuFvUJckdch5j2pz42DQt67GKYX9Uby7YS8n5nVBTPhennhaKGvnyxWaLgJpFHkrQdAg12Ca",
  "key30": "55S4SZ9Mzs8p7uzhu2eUsWu3pQ7yz7mHwaQ2iauXv9cvyoZqzVc69saShf8kFP3gBDDQwdAbT6NexdnvF3zkeCK",
  "key31": "5fshzSpYUNTagKQ6toJgsBvfKsZWSa4aXvKWC1rhB9bQsub7xa2JPxpMgAh7rHqb4W9nnAL87a4iUAZnWZnnE2kM",
  "key32": "4Kr4xefEEqXCPAqiQTQqrjpbR1mtEyq97ARpsyvkUeVjSQE81fmn1vsX5pdWUipVBn6n6dVkEZV9HhZGdRN2CPjH",
  "key33": "4KFXDgGYJXnfcfXtV5NRVufa6mxufuZ2Yeq51J7Dtnh8mppmVxmFRzTi6faG8WsucFWRSy8fP3bBk2b6Ngsg15ZQ",
  "key34": "4F2WSTDZEnYRojMnyaUmCrjsUpEXDsgcQVgnSDmSmCZeuwbeCSmaKqkkUtHxPHYWNj1CuqWpktmJ74irHnvB3kvT",
  "key35": "xkFvPxpCU2h9xH4zsY4BkuFEkQoE99ex9phwayZJXJGzBXCrqNof6Muqvv4CvZ2f8nVFvWV1dWrTSRFNomF9uLG",
  "key36": "2Cgb26efT6A9s1VbKQUPM57ty4itgHHzBKp9j8emjMYNsmV8ZaZJtJe3wDwnW16MDUaCVtWjPgHBK2zGooz53dQ",
  "key37": "52s14Q5N7Bpbj7ibMHTaaVcEg5pcxcx6sCP5iLmDWZ2bjbe6Yq1fnMSNthn2TpyDCvQxEQHMbbdc3M5v2i63V1n2",
  "key38": "4JjbFoUZtxft5KoXJED2yLb1U7EMtkJSNBRmj8TJC8qP4d1j6akzKnGavtg2W1UXNJ8aHWJQZg2P3RpAMHND2JjS",
  "key39": "q5Zdy23hmiXmcrz6MzEQQmc1UMUNsFDaUpfAy8aATU6JY2QCrFrPHB8PYw6obokbu9xBCPtwdxNAPmQwPKqHhB4"
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
