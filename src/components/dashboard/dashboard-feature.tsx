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
    "qni3px2AN3NXezh7p4ooRg8CQg1ofhRkXRpcLs2eg5qVBodv3yX9VcgyqJNh7PoMnpzYSobtmFbYtLZEJ4hYxUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTY4PXpogjFGAy7Ltb9H38ZtVHmtyUAjUxXaBZRF7JpxSmLGC87obxTGF8L7AHVdvScZPFfDxysmS54aTQbxjyM",
  "key1": "76rqt1Y62nGHVei2nRN5pKjVGnBvESnaEBsXsrfCsEcG4z7mXbNeVgD3YBUx7B7sSDiixqNN2ZMSuGzuP8gpYJd",
  "key2": "39if3S6UzLgoyjMvo3tsznEqw4fQ4H8ksyKbUm7f4NgMybaWuV7Pk9CZMKUJuei85XtfSm5vkvu3ANM41Brf1usv",
  "key3": "4s3vNkuS2PbjT9TXQKt46qw8RQpLZQStUyehHSuGuJc1h9SJcZWrgQybtVknUqXisee7RxopL2CtpgUKtdgwsCwS",
  "key4": "4X6v7wyzBUdzUa3wd87tRcX9AFgRQotQT2Kvb5bVDJVN2mQaT6TG4Ptjj6UyW36BvzM2h2NaKxJs2DmdosTgnaLm",
  "key5": "4jVNke7ZnEM3GRBqzk4YEKA5gDa2pdZtNPAHwZm9wNDVR7nGWQb42St3St8YT7psevupsuhivqxjuFz5UH7sg68j",
  "key6": "5oyt3bRJERUWTmyzF6N2oxfVSzRBKm21QLHgM6Xauvy9Hmn4k2LypDfsavYwvWn2x9pseiGnDc9vk8AfX7LRKSdD",
  "key7": "3iyhUkFtNXqLozVDpCZTfcoPvVBvBpzJ7hy2YTgEeGawBLQzF793Y5DbYfQPkWvBupewwXX9YYsEfhYz6SJDbK9o",
  "key8": "2mdcob71RkvPg4M8a6rzQZHtZcdrn8Hsmo764BdQs2LZXpXGTguAsCDCwP6ugSuGRkrWZTjgD5PqpxXD3LtgMJZQ",
  "key9": "62yZ4A112sEXoVaC8GLFjNUyXGAEfcUJJhWYdhKCRydDdtAhZZqiWcxoCBiRWAkWPPXgRGBKNbuyyhwr3CJCv7WL",
  "key10": "3CEyNmHuki9y2K6gQaBKtVnM8hm6ibEwaGTEA8XEfDpMhrk5NACF7ekMPX6SWW3hS9jaXs5ksGbwgMKYG3LASZu5",
  "key11": "4jQesML1YqevNA21WnFcuFSbAYWJHeBkDnwwnTFJo4tqDHLPkC6syMh8E7GmckWzDzhqaToEBv58SkgcfPjPjqdp",
  "key12": "5gx8Dzin9bKeSGZ8qWaw89YjZyrzs6B4rKwbMCwdH7pZoKR3WMtUjhTaccBZcFiafcFF9ToYFNJeF5esKpKcf6HY",
  "key13": "2VAjbGtQBjCGqGz3kK2PQGM4p72k9NqfKtYL5XrCWmnZ4SUH85vTNka8s7q4zpj2NcgwvDaM8fCKtxRyycFSV6Cu",
  "key14": "4DVkK5FKPxuyc65VQ4tAJUCXwGueTK1R9nQauc3ghNyfTA3p1DArUyDPk7usWRe2YgUcUp6DYDwbZLhfkbwbdu1C",
  "key15": "3NzaJQJQAVinNrJbD6AAC5Dj4moah7mHQAHBPXo5RuSjN8fHhYgjRq79ho5M7273zYf5DFZ4sZHBPEGN1qecAWon",
  "key16": "PKo7jPo6VzFoStcJXFND2uLVdnMHXAFPybDqwLkdNMHUvVBPKSBtDL4Vfopy2RaNvTGPbGneohCBmR2S4HfxVtK",
  "key17": "4UAQFKhRTF2ekc46hcTn2h3qcVYzkVz9ooRmd8FuY3UpxoavtTTuUTBGrQJTzg9mw8u8DzX5mf9UBDbEUhxZPd2k",
  "key18": "4vTFYjCGJTsUcZ3SCmwJLVJgytB2XJkey9ZNXp7EmYuRFjaJk1UzGf9mwhKKzAwoeviAt41Mr76uep2dDr1ezJnH",
  "key19": "4YHKLpAvD9RzjWALy9gLkYmn94ZMsA6mFC7hgARD4Eb7HddMrtc8bYUpfRfHshBwQMNto8XJQjzCMZntrgaPmYie",
  "key20": "2hdSHK2JhUhqfbUjQewREouk6F4hgH2DudcjyQYYjqSL5mor7gPsuXQjzNjDneDuU2tvHzJzgtupR5f8FRDpuB6m",
  "key21": "5dQSPhAkWnXT93GNRuooeKxHrqNwUBRFoDkkDj68ko2h5C3ZRBuBTXoLAh4ZhocXRjqKhwqh64ngm97PrBoeqS19",
  "key22": "5mFh99AB6MP2CnZtRXVCLzunPzVUWRMqQxT1kSepfah7zev4Ujm6pn6ZipWfJKA82EwkJfuTs4v2iQpeRf8eqRQq",
  "key23": "5RN4AEVJG6K5TtUBgwEudmkXvCyfb4JrdX8FAZPXXQ934SqvnzV2mfh9qizjv9j2xBX7Avo5SknESHDazqB4tDvp",
  "key24": "5gnzEXNUXXw7oHQzpWMBg8bhDVn8oCTqqc8dZxQCvoN1cwgdWVEcjNhh1WyjUx59X1CjmTVBf9BczycJQRnPQrwi",
  "key25": "5FnT1Kvs48jAoamtZPv29KiH8JDkb1FjTFLrjFmdm1DDmVxrhBVCA1h8WBTWQpLXy1TJMAJhUHA3TfQ8PiuV5XQZ",
  "key26": "2VDUrX6DU2j6DBh9RdCD9K3KnssxqcTQadcvRcMAqeUPQFUbr9wBq1TwySpXZsaFc5eUwrGaHowKE7faZ5nLfihz",
  "key27": "4tnjEaz33M4uXNA1zsUVrcMx87xYN3WdDw1me3N6oN9Lwc67EtNPUxNA3Wm7vSSXLSef7pfFJTQSz1QVAzHQMwM",
  "key28": "524ahanLpDaeZ6WTWJWHFckZT24Dz1LNLPFbG1CRaGcyPesvu1S6qLpXWmsfChjHuiaNvbjbEF5mUTcsqYWHBGvk",
  "key29": "4SpxAdpdbwGuzoGvYhfjPjWpGvH9S1Qv6N79MN11bn3GhEX3N9XXyRMvRhCZaT4WVHdcmgf9MantQLAA6Ny5AKkg",
  "key30": "3u7PrJQBeVk3WSEKdfrRHZcBRPn2gtRPDKWDCV4kEQbGurAmz1vqc4wqqpqZastZJRm2CLJiThviCwa5mx7n2FCF",
  "key31": "2Bxnwu7XH4q7a41MZobYSojBXhCN16JAEZeKnRtQxjsTU2ZWuN4FVsumHysaoQuxeVKRg1oH9CKFpE5PiJ3BT3Pg",
  "key32": "4mvZJ4peDcpBX5cvoEyBjCL17dwS1Lcx1dNXYMLqwRgXVhJ2FcdGR5pybVLdQ9nXVv6bMtM3BXnceF9R39jJo9pF",
  "key33": "3uf8i1NbRBHqDihKggYHbEL3W3S1zsdHNVK47dNUWLN7qMw1LRb32RFi2R4feET7GRATazPQp5SihJkG6auuFRgC",
  "key34": "4t3NmKtDQ2HxQzfWAnFmFGy4tMP74TNDFzCdCb11PS2JeJQcSZFaz1ptV5WCFuEKPjoqrB3YvRgEBVuo2F2tQ7Mc"
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
