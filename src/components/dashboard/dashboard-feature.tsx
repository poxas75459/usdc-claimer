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
    "3h6KP3QfrxHGmT8PAKMY4RWgVDeXUUTcaz7cHZ54owhHcd41VaEDUpTcNenVWmY71i6tq3QnSNESGJorqrRmwtb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65UUTyp9RsuGgjuskWWPDtzCh3LS8VpGKYDNTyTkhpA9i1CkV7MosTtNybrruudr6XVnXtwdnfBaZKyFkBymG9tu",
  "key1": "4CKiv5eVa16e4AkJgJNvxstsX5uTvdTQC99DKmWjmo6J7mnsZE358h2rtdqy1eYYqa1ErVgfXCgbsKPGS87fndyJ",
  "key2": "3XbojhgYguRyphVs2YJrBr2ZyBSxqd5iSSV6n7kEeZ6Ft1KmDCEZuFqPaRH52GoJ8UD7hdjVBRXiCkifrVmSDgYD",
  "key3": "3haDDLSeyeYLLfRJ7asKgu8ji1yQsrefZ8ipEektVkeKdSY9qErXwsHEx47EEVsYyiEhqUn3ZGQCmhMugaphtR21",
  "key4": "3cgYeX4bPJq1nuKwnhTrm2ooaKwAZHoQoSAv6M7VB4vSjihyxg6CP6caFnf54Z7eg1TD8RCoaDNiVtYrNfn1evPB",
  "key5": "27pyvCyGnhAvc6N8cqSeoViehvE5T9uKfDoeQpN31zZECqeUn2cS7v3GUgt11YDG34XwgD4M7MywPmcKjY3XDqsU",
  "key6": "5fgktMwgRmGWD1RFwg3UT9wr8bdvt29LHqBKjZgzzjW9ySbHkidHmQJj5MbjDszHsKbhbh4crWv6xjocYwxz9tXR",
  "key7": "2vNmye5UDzDry9TtzYpXZiTcLiWhtmNwCPn6uTZb9KKSNVib8nq97fLHoUNYYiNFimGkZe4xY27BDUxjm7jj3bRD",
  "key8": "4vmoDNT1QTQxB5JwujE6skgNuKFH4U9oEaDhmccAGRnZMmWfCb7XwuMZfKdvAG2EytQwbuwHb7JyLHqLJzRtbXCm",
  "key9": "4CvvrwPbiw8HTbTVNuAs62tSZL1UiSpvwCo2LesksQ2nZsJNXvQK9uoFFhMgwjKv3PV7HL2fnbD3WPrCo43HuC2N",
  "key10": "4TNmU7VqcDYrZAYnzFT9mMyem8n1JaQhmC72odBsmTENJ6oG5RfAehAAJ49obmjU1SgnVKgdgQFz75kxYk1vsQgL",
  "key11": "5Gu1G3dbvYFuowKffDeHd5iVac9VTxcfuXhzuZZsfu8oCscU7NVgpefKZDSA3AWKoisedpL2NnjRe2odLeS7ThLK",
  "key12": "3ZEWvfUdESPBDJtCKSNVvTtiPXJXNhgq9MFKZAsAKDC21t4PAA9hwa12tDNqCukfMWDABNsbChgFhq26rjW3AWqi",
  "key13": "3we45E9L9PwyhysoBZNEqUu9bAWNJ8K8CsXyDuDLFb5mg7z3sCFonuiiPrMx5LCA7jBrV4rLzkmdegEfLkbSywkx",
  "key14": "4L5iYk27RUKfG2hTceJJmwAvn9j5wFkGvi61X4oGTECrh9FQ7w5bZmqQqD1AgFeGRu1dDz1rmaSh4TbDYXwnkqZ6",
  "key15": "4wuwqkN177iZN4WedQx15WX9spKSWhEKZmZa5CxmmSiwvxAqY8oEGcaaZmPwVR2Kf7ndwNoGbUBBVu3pEouesGPZ",
  "key16": "41Jznp2wvzBfghN1eW38JwGTjFnaEAN8k9KNJfqYmUgwby3331iQGc2LyV4iFm7kGgJJh7ENMcBPxbKkcrWhbaFm",
  "key17": "XRoSo77Ly6PV1MaThCN15pmpDoowPcYAfoujTPR4tG9pPREa7UoihmriLLbNMxXJVUCSkL7XRyDLhHjzDreQRxT",
  "key18": "2nMVXCT2hqmHVKGSp1fuPY7FAQNVdoYJT3nu6i4MX49UEEUcptCVcsKK15Y8h3EnsFU6pjcaexfg7Ym1fZfoDc9A",
  "key19": "2dvsN3b3ZYMwye9srGtsVoSa8xstZJ4BXxWp8n1oqVszSB285CxCsDxNq34MRzUif5h83kADE44NYZBwC57akpp6",
  "key20": "2JLgr4WC6sviKVLpMebCySESf3anJijTyQMevESC3Fe2KGJy9GH1BjQ2jKVBBXFbmJtA5EfdxFKdHcEN1pn5k6yx",
  "key21": "5Y4MyszrVRSteVdZjR1rrVzGDsCnmv2HbEZ8F6Rp9eEwsgJbgrHjXzxZjhSGima5dNJEnUa8f4ziEw1sD8DnW1qi",
  "key22": "5a3qZHkoYFSUoSkZdUEKe11sU5YeWKcmxmzsKT3RGo6VjmEt4AQ7F1dAWJS74QhjBFzaACpUENbTLjEQ9YXHbdWR",
  "key23": "5fB4UKHtLviJz3k3kKcUqjScWFEvAXyjt8jcR3hMdT31HUKkrT9KTqZSCsi2K65xmvnqQwH3RLwXv3tEXaJ4kAgA",
  "key24": "58vag6odhdoj9JH3qDNqQxyAm3qJPAqp3cSdDLZMW6VyzzotT8yYXUZ7TLZQgsD6HPpSjEhfHEkdNiB3NssGMU5h",
  "key25": "3UvGtqSJpQm2QaLJaC7xmfz2JueTPmT33gw6xubUYCmxCwxo6jeiffpeicCJB13F1UNbn8pNDu1Ld8tpkLEjZL9f",
  "key26": "brWfxwZqyfotBi8F3asTYwBm4pLxPrW83xApyNjuryirmTcZPnCesVBmcc7XmBcSZXQTuJ3rrHVZH13PvMv2jfW",
  "key27": "2P3nR7X2c57gD2pijPVdsHtYDZuyFFzgZVWZcSesfychxGknLgdDyjKj3g6Aza5RD154o2zKcBJuKLJtnPP98zLa",
  "key28": "4vJddCth2JQehBJcCo4WbRjnnLZjmdcp7bCALXvuwbXx16c6Drw5QHAkVGy69fFeLrJ1r6ZDigLdWXzBkm2UbjpB",
  "key29": "2X1kf8uPrYNqXnGSYpfnghMU8wd81bsHcpoDNHgQGZAPrZF7JMzBudTeJRRtuvuS9k444DWTyunT8mD7W8qVjz7Y",
  "key30": "2zittYcpoR7RPuEmDB9BE8a3qMRaEVbDB66GgN52fsbp2emoo2tBjhLrB7SEWogZdebwbwFkAipHiB6UdkfoRQ3z",
  "key31": "5ZQ1S6SsgCDZB9P4YCCf6d3WQ7hSEHFN3ciMbauqEQu8Wtq7gUKsHjJeLgcjvxiokxckqZEPLf3yb87iXovg832m",
  "key32": "3micRxW8USJJzoWwVnwQtxptN6ZrRxeKjFTf7WSTJov3AVEgN7gA9sym6pGpiaQmX1WWRzpZUUE3UUWMQmsMigmZ"
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
