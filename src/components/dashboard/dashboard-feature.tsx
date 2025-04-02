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
    "5rDAJY7v5s7RCw2A5GCx3Shr8Z2aXCgvG8NwYtUB7pCC98TPiPHYcXmmPDWdHXhMSfAg3VHxHv9XZcVthav8xxog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tXizWwVNfPS5EF1EwHaPEhwhnStzpxGTAsmDnBwo2oLDJdMu5ce6Y5vpzgp8mA2vwvTtZz4LNZtNgWh9DJx9oqV",
  "key1": "3xtJzy7wExStiHShG5shH5pD9QhUotzqKYb1jaMcHv82XWHt2721Rgz8EFAZEUJp2iHENJFCT8vpBEudXdaw42aw",
  "key2": "5Xyy5SihPs4XNuARV9j5674aztnLUqwKWZJr8Ck8kajfCABuVAd8qVJ54URMf7AmtBJL15YoQ7EQ4XYQCJDUA7V2",
  "key3": "62JrWx9iArkz823gByiZEg9jfD53G4JM7k6uHqQ3t4qA8MANwUYnuwUf7veA9ZWsoCkPUgJycPepVRHqTAMMdMKm",
  "key4": "5f52DnYHqj4JxZcPjiVug4JqtSaQ83QzYszJ3o91qMh27DGMsgvjDdSxDowMSadEGQgyc513oeXdjmmLCKcRgfcg",
  "key5": "5X476PDezUJbr8XnKMp331gebhYU5eUtXTejwu57KEuWWBPhuzRArXYLjYbNxd3VCpdKrV3uRVgW677M8YcegErk",
  "key6": "5BfPfKGPJCzHyXA3toAqqS9HraFNk4Z6DPjG7V7VYYcEzYX9EYMns6KujyY5bQnQMMmt9JNEw2ijy9MNBnaDKDQv",
  "key7": "4K3Dq3EJ6TBDkNG2KsEwTqRdvxcPzF775XskZRVUo8Z9pamhGZ8wfYYHaC5ANm6UkyBrTNXSo7e9jNht6M9kYigb",
  "key8": "3VxwvSFWm5BqphseT8DG43HKRrVYmwH4DqQC9E6NhJT9PPUCbLQczm9oa4AakotPT2RfmmtbXNkziMZZxp8YprxY",
  "key9": "41j27B3Bc64pWNxJQU9EVSmxMXSFSQSAjhRwZBDvcSG3Wsg7zTxzFHVKdsVbvXnZppjyaLbheCZCYXU7dsvXkzy8",
  "key10": "Fw5HhBdc5czFQtg8NGnMXNbuFt4kkN6LZZ2rj7YXTziaxjbUB4onUY3dExKT3rdszLTF1K2qwhbXnwh3GG7Q6AT",
  "key11": "2HDDdSKhxAQpLqqEgmcKJYnyXVrfE23ttd5C26xAh28zH6u4mTJFQXqw8s3XofxDnsThYqR4rcKMQAnVUbjyaVTc",
  "key12": "3kjNCatTnGVRxyTbxKD3XiNSnrbLP9RgCCJLgTLV1Jpf2iqJeLgjKok18rQmkRAc7XScjH34a9XHL9ZP4eSFoVeM",
  "key13": "NAqTMhHkvspEa2wEJNMwKnYy223DEa8rzLqAJRNNcXquWj7MWyc3qP3z2dih2LnPtjm7YEEHn2xSkjBmsn8psRq",
  "key14": "r37eNz6xEmMi6kMLuDwHerCWJBkDBx12S9HR5w46cGCWSQxpaPWUqXokMgCmZJzQq6menoTZv8SN9Ywwbnzib8e",
  "key15": "394EBWCKxCpQ69AjuQnv7zxsiLJUdP3SpQefZRhvXeksPtRdUy5G1unUdYwiyoXjF6zZXUzg6iFS8viALPLFx5fs",
  "key16": "65pe2Y4LB9V6D4wFWRoxy8nnFcm7rLZMh8qydANbXwQHzuAC3qkm8unqDm1tqt8aXyyjzV2TtL7Vdw5Fd1sLaNEn",
  "key17": "3YFShz9gvxKiTXBx5D1U1wosVDXitqWHPL2Bh6oXCcmQPqqCXufL8Y3SqiTMtffYSCudLsiogULhd4BdYMCe2JXP",
  "key18": "5n87a24jX2FZyimdUJ32HvZwkxgJhByPNEhyWZicPySMWZAaFoMk78PEfsUGrYYTVn9tkeR46EYYXuN7sd6yct6v",
  "key19": "2yq7Uanv49D4f6pQ3dAYk8wB6iaP8nCde6LnGVUDNC3Lc2k5FhxTy5n8dQLQGgtqnnLK9rtjpdeDKWFP5ezQay5D",
  "key20": "4EkzrxmguA7Kt3LQYkgnQJodpY5Qhz6D2vLcQtfkcwRT4BJTjHUd9yCUwWAYfEtmGkkTMjZBuhcfUjuTevKPkvuR",
  "key21": "WTriY89TxvGy3rs4xvT4Hch7v4vtkdm68Y7vDBmSfCH1nmZcbLFQHFWUh9545ybcSXiVa3ZNAjypyngbNWQa9fP",
  "key22": "4CWU9QRkWyFc6Yb8nAjN6pfSwpdF2tppr1ey454NzyPkd1dFXMJGy9YzZsC7jggQ93xAex8Lst2a6yrNzincRjfk",
  "key23": "5LbCttX2M6qHM1jD95CAKgKMpYBRyAGSJMDZCukkymFBb2ea4WyhEps4s5jVSCQQwzZtrYWtUo1kjydz8byLCGqo",
  "key24": "2jPuKDJQPsNEmbXwujaf3fr1njNxNco6vuLW2KxTaARbcTGdmaJs4DdwDdMh4WhBe2T1qRKe3q2f1uHw5hP1rNX9",
  "key25": "4jEFBe9ubQZazWze2QCsP3okHej4YoyJRK3tNCXt8hWoUguDY3dXQFAoyqFSQUz4ZRjFdFi11rZxyFor6jJuEfSj",
  "key26": "33v4Ew8CyJSpshXHG2ureiFiSe5ATWntnaHxJzuZ6vfmVZMQdboDm5Lm63FRhi68pF2DiHokPNEJuvrXRsNSSFos",
  "key27": "5pamSqjN4mga9wnTrxMcsgSyW1Xdjg8xoXoj96wh7qE9jV2BSjpubx229pq6uyMNzhZQybAhd59QvkM97q2JCiD3",
  "key28": "76SevpLM4di18nZL3gvS8Ur7sxX9qKpds122MfzyRAyveRAGNPukZ3NbKAuPdFb5LR2FRJKtdCTFZoDr3xSkSoj",
  "key29": "bjVm33hGmRM7LMmW7RwYoPH7w9mrkJeWGqKhMPkU4Yb4UiVFPAoLDhBnQs27ciPCwGq4Df1pRzTMqvX9EDYHR8x",
  "key30": "yq2AfJTmrfh7y3QZU1zExAbSD9vd96eeDU4nPA4zKGZ4iC41ow9W9dRDNeUksqda2nUeEtJDPPhHRTBnpuJjWYd",
  "key31": "H8VCBhT2Qc4Mr8jY8XzkFrpVgqjNX3onHqGhGXHCBoHQtenUFaH7e3joTNUcE6iK9YXw5QGZtYCoEfJNaB8YX1Z",
  "key32": "2uGWXGRbmizdTEhwz6RS3R17DMwCABzczBKtHprbmCxE6hTPAMLjQCWfs6Y1cK1ezeE4Sf3m1RongFdkBoAdyW2q",
  "key33": "4FCGYSLvFocbR84a9CECe1uDgGexL7oW6KEGaGMpXre6ZBAjQ8TckMhYktMNKyMFV7TWD9kkcv1nYpLYj8tEsmXY",
  "key34": "5XvmdPQegqrRo1rJcky7GMJSS5jTGLemXmhYq1tPFkGNQnw48RiqKDQfUtAMD58KMdy7SXRN8NcrTgeHSi11SXqC",
  "key35": "3yS5PKWsQKMLrJdPSTR3EosS52oSwC3y8r3Pri4t9UW2M9V9cnX7ZhttK6GXjECPPwUqp16tAZGrWZu2jRzqVUBU",
  "key36": "3VPu2Yh1svEkEJJRjo7mgG2rBc24LBd9JibJgmJnUqaqn7StYdtVA16qHEzguYnTgCuLnLiyRvpcQ9R4nzXv4XW9",
  "key37": "4UsU1x29Btn1jq2RpUDny8HMFSZ4ouahaqhtBp1jTYPedt5V5q9SWhbiPboAFoyXnmxf36Mdcv31aDrAXKv7DxHr",
  "key38": "4TDqV1FvMumDsCXYBdJZKZLCyTFb8En3QnrbFRaoZWKPCXPP3QR6Y7hQYRHm4uiuSQXb3yMrRkd3d1moVpoJhxUC",
  "key39": "4H3SaGB9Y5wCSpKztYdY7K9MGESbwNNJVp9HEnbhiYAarKvNDAdv5oS8FMwr3epocte48QKSEbVWvcdftbJU8hCF",
  "key40": "ibQqSxPQCV7QyAMs6dcUDjf9kAqKwyRFwwNGvbDoG8VfiN2oCgK6zhZzYVgvBba5SudocSxpgAUFFWqvB6GxUUX",
  "key41": "4CMmh6DVUdqTHzCSuBM1jkJwac7h3aLYbtvbGGiNqfwrYco4g5fn44SR35ia8Cog26WAL7Pyj415Jc33LWpmyUbq",
  "key42": "63ND8V1iLAsqqfLkAWVm3hxtfCavvuQFvU54Ekcurwzj7PZoL1fK81ygkbZvNmi42yu4MBvqaBv2oHm1fFMAQRhf",
  "key43": "3Z6wF1fu9HAY2zE4mseNsniTyotfCeHnpevL7vhnUEypMtQJMmNQB42qmhBgyUYDq4DBoWYKFdKECZ4jAJuzdF76",
  "key44": "2hGRUgEFPvWHZQKZm2SNYcSvxj5aAsWqPvprXKzcR7xGaymikE5jcWdDWSaudZ2guZWHt929EQtcfaejSCU4uKtK",
  "key45": "cGpsC7g9uvwBC4qTpPKCzAmCQCURYDV6dWm4NTFsY5J6ef4YSDhXBkGiEw4AJk7aVT8qgBy8528FDHNR3MEkVxj",
  "key46": "4ADETER8KgMrAtpYgAHjXPXNcjHxLCQX6sG7yK3VcHQj4zUVoMXudqDWaVi7awYWcEurZcZg6954C9EXE2uW8ZKV",
  "key47": "cRbYrTvZKbCkzRFUjeq4WGY9jrbEUE9yLBqkekKPqYNtDpxEMHg94yZEEjgjhHVJ2rd673joYroAwWSSbZ9aBtT",
  "key48": "otrcjUYgGDtUmS1VrhZ8rCcmz1L3M8v3QCNHbb43Gc8zBPY7MDgYtzbq3w18in8EdpNtEV9fK8RJdQv6L5obNqa"
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
