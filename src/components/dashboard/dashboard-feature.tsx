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
    "3sjFsGWVbyvspToz1t6rJ8JmSabBngRGCr2RrDFJbhLaRMr2MzeBjguTwS7YcKdUtBSUMnR5rjiUaBy493YCgEru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRRJUB4epGVAg1qpQUBgBAWVx8vb7jDyRQ5cUyMvD4xziy9qxkCsFUXiyVLETghJmBLbW91DQdijRc6SeP8Xdri",
  "key1": "5x1Vmjxh7UWzDnvghW9doHHPJAjh5C3zVCdSk8Tich7pfU3UzqyfPFraX5fAdLrdCaFFdKtDWDLkwcHRSWTo9gsT",
  "key2": "2CiZauiAbbuWqHFV2u5DE8uK5ZJFRvggZEyeuNyXS4H83ruJ1Pq1eQobWmua1g5tPoS4z9kPo2HLJhSX1CneNADP",
  "key3": "44izBGUz2L4nkUvpZ6FTszEJoRtPeVXdiDhtmXt3cEqk5dtuqjGJpSM1AUH8EG8qDbhCjJsY1G5oVKVdWwtAm16a",
  "key4": "SULxjP8F3njMRcGvAMQgyEUBfUcKjiXHikQXQmXf6ybbN4YkQNovc5f8kN8tuEitJKG2LgtmzQz7b22JRDk7Fey",
  "key5": "5M2gz8nC4poHg7v8LLuZSFDJ2sc2KVLRa2yFNwv4iLt68NQZpxviD62RftZSMmeq2zwEsjwC7x1xQrzbWpvzvnrH",
  "key6": "wCC5P6CLFuLBdgpFDzHDEJZUfBwFwEbLpgcob47JT57MftqrrZDBqszQtceCsF8pDwrcQNxXVWN4jr1gC3Mguqg",
  "key7": "3M8asHbYhxck2KTQLidRh8QeUby3V6JMrb5KcjJUek3P8ViBVRTAVDMumn2T9xcq3kYNoM9QD46vh7LEUHotXENG",
  "key8": "5SQaHsApsZUbpoPPrQ2jn1ay1z6i8nrsJe9hJfBy5NwCEKJBvQMqb2c9W44xMxpP7KBFboGbkwhjoEzD3cZg7C66",
  "key9": "4qJuqUzE11eVzxH3oW3R6SYWUgAhEwgHk3N2frkBq7GbHQU4n8DDBpnx8FeoFBgh3ckaDLPMJ94tYud7NQpMnmoB",
  "key10": "2gEJBbYWFZFq7iQdN9Ef2fxT2ZKFZvcQJNNNiYVy1AAzgSPwMF8HUNyEzmojMKhjN6E99UEaJXA75HxJFXgfyDxu",
  "key11": "3Erp9KMr8bVFAVJaR6AQUpKy23MXN5FJG7MNrzs3kAqWB7Nd6JbnWrnABk4BMbdrSfshrRXx8Vxo2xfRyg6rmTKm",
  "key12": "2Dav2Gc1HanU1TviXgwyA1JHygdPMEjzLpGjT6z2jK3pHpj6uyR9KKZsH1DMX2knrHg46tGJghny8uQF845fcm58",
  "key13": "3RNWR7EndcVEbVvZbPbU849jURuveLKEozfDwop25Le4gfZW8vwb9yv5mbvogTGs6jXtFLrpjGn86ryfnSLvxcxT",
  "key14": "2mWyoPXM5MjsDrZvs4cuPHtfhB9j3FkJsZDuuXSqiCVZ31YEXqTo8EydLK7PXNZ2V4XinC7X6xtmsyBAfoCGjBp3",
  "key15": "3WWbsvUfPrR4jnrDB1PrLni3BR4yfNEAj3adw5QipUxCj4HikXAvyW17XsMbgyu8WfEi38KVXZyt1V6ZjX6NHXni",
  "key16": "5Ng6uwyNe9VB1nooscmEAtAjpWm7qWhQtY4y7sFrFQ8fwXqHsc5wN9vK15f2WZhuKZwNHdHxRHvydEcV5srXgu4H",
  "key17": "rN6mjVaGBDjBeQrLcJDajmERiqUxvpJYVmzz99nFv4PDfqvWAMfpt2UmVA4ydh9UsRRhDkzySHDRRPn6upgryTe",
  "key18": "2MSNJhJjRfHgUN8k8pZor2QJCYMV5RFMJN29Z8okgbuWYQUyEB1nyyL1ooFAEyGproroiWBTXzp9EFig5c8t4hQC",
  "key19": "wFcceRgjkdwjiHC65vt8PiqLyaA1Dnq8mRNSn2onyGfsM4JVfNNdG4uZxDH7kDjP2j1wjPJdZFKkyn2vf1EBP2E",
  "key20": "42hwKaqwWDasKPwfpx5NgtdbYC7RVtMsYnHaKBDjWCbPADYWF6TcUd2YLPMBssrtoBrX7UeX5zgbUkKukpnEen4q",
  "key21": "4mz8J6XpBhiQJW8jfKtEKj5R5anmeL5LozBsAgNPN5kA2Mh1es9kaqGZbR89YHavZpzEKDdnjXn89ttkbTB6SLH",
  "key22": "44TL4S3WdeQyJev999ZWAUUepWfbh4uytuPLHLwGLiQt23fZHVa5JbQCTY2nWRrLKvNJPFYxJYbmnLeF5DFhuUCy",
  "key23": "2BgxKXpgb1ErhxcmXmNEik7Y5i9km9scuJF7SgTLD2a93pEoi8ZNP8ATbcFqAUdELywBhYnV6dadffKXfyF41cwS",
  "key24": "1u6hxvnEiRvHyKv1eAPbeausr1TrvcW7ph6hyTwkSx6JQdWjZUWujtg6E82QbuAjTYQ68Pjd5816ApJzJ5edQ19",
  "key25": "2tSHnAr8xAEp1dhh1sY3AS56nGRR236fDryQw5YLjfhxN3m8ibv4NkEyTUdvXSzRhu3yeeoZbbgXfLJXx4MwNGqz",
  "key26": "FbBYMhJYbBPLwtBMJaPx43pCE3gT1KBZAuckB7PdpuEtXYvApRdK3BTssKLEk3TF8XyuQKHGKLSsARjoV8yJZqz",
  "key27": "5zxUVikkYuTc2pD18EkpWxVr5EQRKMcssn4NwtidEyMvVzvx3E5GYyz12baXmqyJXkaWA3qFBvC3BP6FyWZZV5ni",
  "key28": "RKZWp75H77MrtwPKc5S5CSATRVVQbcztSokiRc95Q3Zj3oDQvfVMcVpUFG1PKzi5JqaQ3ftTvo4CCbXwSh4D62v",
  "key29": "2p74m4rgt5iF8qQzSb8k1dXj2aY1yvPtpf1sfeqy24Q9AUG8pg1PF4VKbHDWzd9H9NDczjBWWCJaxKVkHR5GzgdT",
  "key30": "484MZRiZSK3MCdH2Batj71kRsdy8EoasBmSgL4auyK4d8ZPgWZjWK2ggShT3zpZSerPJn7vF7jP7BgrBDQTaSUSd",
  "key31": "45HpGatUfT8B71D8bpjuwBEETuuuK9QqCFCd1deJtGTkf7nuPRY5DXMGi74m6SxXSCEpUny344DPcnWE7k7w55Yy",
  "key32": "5zgho7zsmXDbLcKSeXfxePrLyNkAtkiVxr5VUnyDA7xnU4N8oyTdym56qNmtHVuysAGQqM6f2mfWcypHxC1UfZcc",
  "key33": "jxuDf7A7D2941qxVrQpgMDNSa97CMy7AHhUTbfgexoTU6uZZzGAbyqGpRzW3NnBMoxCmKb6FiLKXX5himXjE1p9",
  "key34": "2Z2BmY25Zrwr2RofYo6VByV1ku319MfWvk5iLuD3UW5CJSncjq2VmjMjj79VbVw1kckPzkZaweNEWHHuW9bJW7pD",
  "key35": "5eAFkd3SdJPaWQLr6PK6pdAPCWB8Xh6htm2YNUzgUMquyM4AqSJDXJ7Jn7AXuFn1q6rjd2Uhh7YpaRbaXGGWAUY3",
  "key36": "2AapxyoC9WKH6wVfPQ9p1NhG8LTFpSge57PRZfKqYUN3nE1vUshuRuTcuqpRmd9P2AZtbYmdEZin8WtamfjaCYaP",
  "key37": "9WnkN6UvjXJaHibXcqCBsmi6rGTkocf8xNk2FayQciUrH3wuR6QBUcZndEiWgNGEjmyV7wPJXeoWmPXAerBByQC"
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
