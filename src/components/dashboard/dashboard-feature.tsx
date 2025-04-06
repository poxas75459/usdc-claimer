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
    "3WGBJ1oQRE9F13g3QgkPrrCMTqNsJ8p8L57pfd2v4LUiq1B8FyeSo5GkihLozqGVuYF5nqoWnWeU386Ktw9V48Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQdWtxrYF2dK9wcNuyxqmV8jPeLF9woPJ1UCV6Hu5fqJTegjreerYeJS4bDynJJRs3jQd3QS8KzcjmQQ1KqQ6NN",
  "key1": "4BUp5nuWLpvXipKAPbfUBFs8WPbb1tmPT5GvdyBJL7szZK4mjxJ3oqr4MGquhhxLwaT5aQWy5jxuAN9tgubRDV4e",
  "key2": "3XFA5dXpPVF1MQTJUTKaYgvCxXQRGdSmxmuwGdiK9M9ukatVkGGJP4bLf9T6h4gHqn82NaC8LyWzb6inHy1JzVzh",
  "key3": "tNV63HvY92ezaCNGTaPuEcraV2AC1q6pVt6826Q5mmWHqzk6BSwJ7W9FVpdndZJnJUQMEKDLM34PLmQcq4ickTp",
  "key4": "2Cx6cThGf86GF5jtXp7qoXh6Z2NhvdHtajzxp5nUcP36pS137FMFRHWSyG2hhHDrLAGpHdYCXFctezC1waHaLszT",
  "key5": "3KXF3PnfdavWLvZ5zUbzUuA8cDphTCPaRNakivgyrfZnGV8mhthA3TmsHMM11eoZXZGCpkcYS28Ca7dRi9jfKfh2",
  "key6": "3KpxTfEwXBzUwiRKg42fzbx9e6pLaJQNu5ADjdo9ihx7eXoeL9xmCyLQ75dapFuWzEowxh5buquxF9h643xghCFj",
  "key7": "3wF42j5pXWiMftNpsUKw4v5jeAvqVUbPfPnEJTZqVgLYw2ehMnj9oBL4qo5q3qX2JKbYZicUu8qGWzW4pcVAkTsg",
  "key8": "R3WLhGNNZNLiHke88hTZirBdgbzi9yh3t7MW5xZAw2Dgsac9y5FAafVrQmdXGk7e39XUsXnmMg6DhvKBFapTkNx",
  "key9": "4g1Lk78AUnNoo4j2RS2wggiCHB78Dw8omaBW7nnipxAbhGCY3jqMAjT9Cy1jXWT47to7yrT4UTJYw6CrakKLJmJQ",
  "key10": "3iHX31j9ozKoZivMp3BQACAZvkpKSmQUHcWd4GjXsZBTHp84ccg6WfXnrQzo7u5w2kCUhmxm7JVh6kZnb6kJEgYZ",
  "key11": "3rMh39Dq6ngdM3ZvQAnYPBrLWGD1AT6RVfAgXTiQ4u44bbBRCFJBVCYkB1FKpzzuSWL9nzXhH3KQfwWLDDgqe4w4",
  "key12": "3VYDqvdVdnRsUCxvUwFRRzwPPPbpZ2akX5bwQQXfUR4HzzCX4DtftzpZ5X5nVujcMLFGQeFY7zrA3Y5VE9zJCmaR",
  "key13": "4cSZbseshB2Bqf57QDWYt3yrv8PC8LhuKasVi4uX1hyFkYb3kCbP5cpFPLfwFxsi2FaroNkysP7mdF3g79bVGF7g",
  "key14": "62XqTE9TKRuWMEdhgTLMRyinR8cfJq4XNt16MkXnhnr3Xs7ivWqTNznWPQ71gEAXVH4aHawr2Z8EjrkwMduDS4eb",
  "key15": "4TepUzXk7d2PPzcnHDsuqLbXrmXWakdkg2JP4xGB8SWJNuJ54CB6TsHRtDRRz9xuL8ms9trb4mdCx7atw53x17u2",
  "key16": "2ciJ7GJ5UAsTxcVpModQGA6pmmFp5SSoFGCiskui58WeoTJ2Z6jFA3UUTfA3PJdzs64uYfkZAS3YnYujehChdQkd",
  "key17": "32HzuKgxbGiTbAeXkZCvsLFkDoKn2VmtXipP4JDhJmrytx41QkBRrSquYVHAnuenw5DKVecqYpjvR24oyP7KEJDS",
  "key18": "5B7LcyDS8rMBfXbALxNoSRRkxtpd2tVHSqrhCB9cjWgWAN8njUuxcknVK2Juc8xmphG2tNLoNDh8zmRuxAfQSzMC",
  "key19": "2zC5GtesLYdAeDQJQiv7kWXXpNhZT1cXYzS4GWZ3pd5wbhm5HaTSL3EWARtASodJ2fSdaYaEfub1hv7iAvfLoR7z",
  "key20": "5tBrdkpFajD77Q4NWPodJXzmZoScXFqBzoxt9FzQxg3AC3QKQubC3y3i72cx9i9ADdCcWFiyNQtSJ7oQJPTn3dHv",
  "key21": "4sk19kDCNjVwt2nFdyWgMMyxnPHXXdpGcCmHhS1d2eKvYMon9A9E557yPsPupVSJbHx3LyNLWapSqkFkkvCzMugL",
  "key22": "5ZUDj24VaZ9SUeHmsSCFx3hrNJCgJFu8tbf1JtA6joKLE9d8Lvws1Yih2EFo2VsQvG2pSCemBEsQr3EDehc1qqPn",
  "key23": "56krNxaUSBwiW142SvfApG3Kftae1yQo46yZbPEtFsWGyLq3PzmuQgny9nRbMsGWkxpNFJzuM9MBMg1gS3EHpHvY",
  "key24": "2gSH2TuGAibuSBjeZnqxUQxLdQCAzpnGPSeAFN9gPr3RuNoPWr9cGsxPMQkcZSLU6G5aYHaBdKwgyWgtmAePbU8X",
  "key25": "2HnZYe1vt8jAL9VXgVUxwzrxVcwgk7wRS17YTUDjgU6fgVUkwm1NJxPVR4oEGv5wMcx61ontjfeSXsnzVdEqQ4oa",
  "key26": "2ubF1YGiiihGacKKq4Ux9p7KVJb9y3pCkPiUAy4h8vtcsdzKovUB8xpswxQdUZ7JsCjBvynzhpznjd9EmF8YQ7gc",
  "key27": "5zZc2jWgu4aWMHcWDA7qbnjFD3zY8d3sYwYWjahGoXXiKFqxYZPue5MQ6YLy4qfqSEjgdRDsPCNsPpfrHpTajdZY",
  "key28": "4jFRMsm2QfEn1233QGhR2hcrLvDJuCXjzYBN4q5742y7Sa2XtPPpgT1EgMBHa3FntZ7pBesjMUpi5dZj5k49cpCr",
  "key29": "4XNX1yrqzu2Ejiu9ip5X2fRB81Gwx8nNSXy3th7czr91mTUEsktV1Mq9tinwpas55Hfrhhr18ru191LDN6XnoaVf",
  "key30": "2jj4F8WpzJMz8r8kQK7xV8btBXoDmCRYc54uZAeQFRvLNNrE3msVtpqycLEMi5hepfi9oKQQRmfajMudguZYQ8J4",
  "key31": "CPhMSe2qh6jHEs1WL5RcBW2cJJuZZRXTJgs3taWh2gZqB13eQ2Yr615REkPWNfacCg9N3JMrt3mGSZhG3xLvJKE",
  "key32": "irqLrpsN7RotgKdduTET8x6FxZdaANbUR4sxEHzoY4N6xWbFWNVBFHJ985aTzjTMTNidMJH3m6UaZfDaw7w5GZ2",
  "key33": "AUaoxz8GzNRHffrxYqnZV4i5r1KjrtYZBYwjnSLPaPk5x9WVLcVN5xMKxQiCjAgvQbmM8ogDRnPJGL8VC6er2gh",
  "key34": "MAPQ3pGkcB8gMv59gJ4JzL3vwZZSZQ7XAxcBUFPRTcRyeACrAtx5nTL2Dvftr4WjHb1JGbi1sk4HJSzb7o74pLR",
  "key35": "4Xiu4Z2JGsovS3ag5bY6hRTaQ2L6fEUDoFCxFiP3zQD3P9HSf4R5MpSR8t7DaAnyBvjAuPALUuprGLNwWFsc2veR",
  "key36": "od43TvtNWFFfYkFU17Dpxx1HKwKcQwootQqy3Gbt8bLU7TnJddnLvY3VNwYmRSrQcCiLC52d7b5kFazW9JvDSsA",
  "key37": "Nf8xyGAaWfACmNKUyL4uzRH3HhWzT6f98WHHDDz3KEqnBxb2TvrBztAq31eiAbLSaEKTpNuaDM5KnYF46SJQXhV"
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
