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
    "4Why4wngpjEx2vvWkfrbb9FH12hCowHP5JEyfDDANMFcWt7UYJRmaSMXtz6V3QdodVXVrmj4BPfHuVwAmtFx5xys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446yEAS5VAnNMiDUqmnuiMeCJCK7zAdSuqoRsyJpLEdESsUrRRBufcqJdy1ae7oxfaE3McoV6mniWrVQugHC7fbo",
  "key1": "3xW6UzuoNEuqfqAggwztseSvEJ61QGMCqYftY4jb7mwkuiod9GT1YMdcv7CoRBXwBBm9qQ5MLtmS9ihwui7oeBuZ",
  "key2": "55rXDQuHtvmVC3cWKBZNALusozzWiXDb1aXvhjH6SouFwFZRUwzq5XqnaPWtTaA1ff497dABtVJrBmX9WVkE5FMQ",
  "key3": "Uaz2kUPBc4vaPPHD5mTqqtdMzKBfaTBJLY7j6q9kKoR3t68a4ATYrnP4V4XKekjJsufNZHFPTupa6UC87cs4pFX",
  "key4": "LUTP536XxRW7toXWpTfh9Gb9asET1NVHma6153r2B5iwuMqvKXwmc4PkmqTRMBw6szSvLJ93v4ggutWTRpG1Yq1",
  "key5": "467ZtaCqGQABrZRFkGgsXtfFw45bBWLkfWGSaPabpyMYqFx7BgWrLa7zwSbjnHF11T5DLtFgBn2kLwHJTtXcv2vM",
  "key6": "2D1XMB3wvyrre2qANKDsPwRjUq6XQ7ThcuHYSa2VehcZ1xJLVbWdkzV2du1zAbUZEebbEyzU8mi46gGLTWAfCGMU",
  "key7": "NbG2pLkK2Wd2oZGWcZ5vn1ZK7o5DCiSuFXs3NiqN4pR8Ho55EMBtjb8wJ4dK3skWNF3aqpsGbK4pgW5BC4XUw8D",
  "key8": "bDJ2hu9m7dXypCGZmJX13kYDE77LYatargE3PGBxFiAb2jsbP8RgMManQLQtfrF6sWx14pPBRCqXgG9zqXWn18M",
  "key9": "26ktXPY9RqH1mBzvE1G93kYn6vPD9YrvcCMh5odpjzLkunVRom2pEyoZmHpKknZUd1Bj1BXXb6YZZP5KwHhNjbmC",
  "key10": "5jqmkE7YfBRnhMxFeX4EsCcGWa7CiL7TPcWvP2TgJ5oXBdouQJMoBnKNpCHNKZufWhej7wxSgnRVYkayHuQTLMKt",
  "key11": "3LyYckwoHnBrwg5dmhXJMg8awHmfHLfQqQjaMDyrbZE2VMdeGYhmd1AYkcr3JVYMJ8pKzFBE15vrmRJvJao3cvjF",
  "key12": "5iBa9pycqo6GpQP94JfgzCWWHX82gEQsRv7Vi4XTEnhyQZhaJVNmmEkL54BpWKpG2P7XuCc55LqsXYNngmkJASK8",
  "key13": "3eLgdZW9Lu7WP2uttbreUJMARTnN6nnnJYF1G5AYHGcyBaS62k3ubbS1Husods4vpMJ8u2jGx9pWzBbEZewF1xq",
  "key14": "42fYMQtKXGooZcLRX3W31t4GwJPjJzGNTEGTKvLYhjDc5VEdFtL6Ynm1WZML6Kh4JrtjkRjzFXTPWSsQaomgpQqY",
  "key15": "35vfp1Rr7cQAjpXpPaJLjH3zenziaXWhdbGVYs5UcKHbsmdfEYNB6hSrTpMLGTyNEaadSh2cc2pcKuBzsUbcWqvF",
  "key16": "g3Y4YYUEyH7UYHEY4CvoESR7qoY4Xqy4Vu3UBe2MNgmoycnkVX3Foz3ThyyS6FCxmJrKZgTrook3ECigGwk9siP",
  "key17": "4PSdzNpGRq2eMQS38qNxmX9dQsPsqfMvhZPhbT7UgvKzDXKu7mFbprdUgwgd3M4VzQVQLxhmaVEHQKcqZer8fwMj",
  "key18": "Uj33byuNDZNG8c9Gj6Bpz7oKFvmiYa6TPKrBfkZ7af2Y7N7YrDpbS2kRdQK5DxSwyc9scM7UCDGhS1phvTJHuAF",
  "key19": "4Hx8FRt8JZRDr879PN6SnHRtwWESPJ6AFPvdE9LpwCXn8oL98vLHdnQFxwB3CX5T334e1PKQDuovZwGV1bCJqXLo",
  "key20": "4uW39ovDfH4mkZCvyXHk1i6q3j8Y9DXhpUFFq8WdRNz4U95wJ1C7B28j9aaY4juFBkwVK2weCFioZtqdTUrYPJJu",
  "key21": "3wWzng2C5QVWRfFVJJLtjVG3r87jQrf33TLz4tH9ugMjQwwpkpBrBZQz6vJZQwFKgsursEmtmi35awGGSL4j8hTQ",
  "key22": "5BvZChjyZU1UdsFmCtJ6VApxHNMhAguTsZ66VJAw18pmKaQogypnEGHr2eYPccTJsgGQ9W9gFKCpLP1XB9wjxr3J",
  "key23": "j1JnxTaJnNvS3DqS9zfmSG1y4bid1tVsjceDfNkUfmiAhpNttxFhKBK8dsVFHLDdFRrrDTEbdjrPRncTJdQ24VU",
  "key24": "4vDLLifTRw5gjkuq7m4kUDqALZLj4gGb3ZB1Z9Pqk5LgRMGm7T2k9Sgawgc8uD2argfM46JssFtYhM5SA59UsrLV",
  "key25": "49szYLZpebh8e67dP3kiaMGker4FB7i29JUifEZRhkGcK76ek7g9QhfAyPMj1xA2yBQHCPhczbfLKxx17bcu3ZXM",
  "key26": "yCfg6nzxreJXHgHjQWoT143XHLrjW1zdpm18PhymQLCtBo35zFDbfuqSiMdrdUL4ZEgUJMonHKyFKjjaRb2DGQm",
  "key27": "36idzn4PJnXFSi6ntXjMj1dcbPFWpL4Gke3uwmBbLFdmYgp4GijLTGoL4AhgVeUoQ5VTmrepfsvPSWQDP4qNANG8",
  "key28": "3tiDjhGTWnuopJZRwrCqSN6NHMqLTCHd8LiPXT95TYhtsxxL3fziqJGwpVxcvPcZz6WFxF8vYAEcrpX3GfPeGgmT",
  "key29": "4tqthNsAGKA2hCrc4YLKTRKq4DNGGs62sdiLsGXjgEG1mYJhsQWHN3C1MmDd7HeJGDTdBemQma7CJXBy79kRvHoz",
  "key30": "2BcZXAS2TYqtEJtVqR5L317TKLy6gwgwAYomruxkJERcFQW21nFrrhNy1qmDLBi1XteZLsiyCaTfgvgmwG269iVR",
  "key31": "5GjzCqexAdpoqUkqtcK4xMfrkijYuGKHQ91cAQ3FdMUxCcEqQeM2SUVpzY6WievwZvwU5nuYUvfyNUwc2yL6xZag",
  "key32": "3SNPqeTqWAb3y4LxnTZAaWQAGPQjPQkVFKL8oZYjPSmzL12GiRsuk5D8u6Kzp3hRkX84fBDN1XmSW9RuSg7jmXEo",
  "key33": "4kf7X81CuTcThs3a16rB4VUmcWoXSMXuJaDdYt7f2dBYAfbkADs1MeeG6JGTDMwKgDbXAzSoY6bE1zkAvWQ42Gu8"
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
