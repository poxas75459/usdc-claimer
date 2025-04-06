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
    "4Zm4VZsp99ERbtVVgx9QxHBbWtCLc8S6uXdV5n94ZH945M8ZUY23QFrU5wMnEdkb7WHngK7XSd81Fh5FYnmPDmEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XiasBBn4eVEMVfqVZ2zAuPTe1BsLuKc7J8JsDAH7AGuWgbHxYYgy1CMw7qjFpymoZAF2LixYva5a9swh5yzaMH9",
  "key1": "gt5B5sCSxpsBPCu2xFAM4Jwc1eGLGEXQ32wLvpWtQDoFDpomN9HJUbAaFFNDm8KxgiFDFaZSf9aWijAGBaZMo97",
  "key2": "2ZG6KMmCuUUqZnSLtkRbtoBUZip3rQw2ULjLnWa3LWUpg8NTGPBP4HZ6FxSi5Qo89xJoEFpJSW4fmBT57a3AYyKr",
  "key3": "4HaGo7CqN6yNAUZ8a1GKubEdkNekTmkcSf9VAPc998rECsiJKvamkrXRGwRejVy4Pa58YMn4ozVRXL5YJRpQgkic",
  "key4": "2jvSh4ENetxsiR6WcDH7kHqu59hWhUzPn5e5UyuDgdgN3d9t6hBoidsiHvcYPqZPyAR8MNL1VA6utDN6F4ytuSbV",
  "key5": "ZmkhzHpz5un4AgqPLmiwaQBBYDL9qe5papTKfpvJu5bugFpcJeEEzjymZLTkHmm95vkNsywzT4gu3YUuLfG9azB",
  "key6": "2iZD2DH49eGh1y6ULBBQpGZgsEkpj7Comdj4a5CUEbMe7QhwHHVsvVxXSfr9fN4mzcLEhvvnZfK2VwawJDMvYr4T",
  "key7": "5QDbHr8H8QfsiGzf5mDCJKJCXmq4VVvpzijfzD9eMJZAvgqjo1nRx2a9jTt5UrLTPChqvB7BsRaLgfdMjXfnXn5P",
  "key8": "4CcmmPLW4K8ukDtD2LkoTipY3Wkymho4Q9HxH9EqjL5RBVWBN3U4RgbxCh38RLWKKYgoFmzLBsgfhxN2UPA4YikF",
  "key9": "4MiTs1dqZDYAPfooa4MLX54Ap6NZmotR9f6k5Zu4CXiLgFt9A81ZUKNrrc7S8MURkipkznwUMBE96omGoyPY9go8",
  "key10": "3Pich76KcwMq6CKxSFUQ3BiXzTc9TtXkP686XrqXndHYvPyE9j5EY2gqQ17w3QdWDn1DVQZNNHxVv739yrj7BQpc",
  "key11": "53wwWcP12kT6w7LqE8fpVXCujfRWu5qcUdyMwqvmTSw5X9JnGrerGGxDiLJXwUotNBM3B6dZgQ2UEs3vbic38GFm",
  "key12": "3T3VjQwEzkUqcMhVJXEumJbETHJGnLnFfVCPvmbHfVQdfG9NCGZoCMzwea1wXZ3jBmzhKb3ttZth6HQDehVRKmKu",
  "key13": "4sTve4hgKcYDvb1gtMhmRS14hRM2aECktf66hfxuAt2pFBa5317KsbgVur77HBowJirWo3Y3CjMMAgGbS5veh26k",
  "key14": "2Tw1h5dQaNVT1Vo8zShg572kWCYm8aZ4BF8rPbUaCfTtgoW5r3UR9Fg2nSYh3ASeBV2bixvHHYm2QQkk2vGdFYp6",
  "key15": "25FHrDGaGbY12S1Cq9hUpp9VSEUqPnFv5f58zXxu7mzhCEWHUkbkCyiAaPyUgfD4pAuNKLYij822X2cN6XtCys8x",
  "key16": "5c3DEBpxEBZYWUGshpBYh5qzr3Z2W7vPdhvqVh1QYE11Hx4ajckQEjefLBGW2yNeZnYxF8PAGgzZ9Kh1LXeRGzMk",
  "key17": "4TozH572xd4aSeejSXiGUH3JZYaV7QHf6CG7YXGUVKVAG4Pna4XNm3KGrdjmNHYscgByNPoGieqwLkfcUZWb4CMx",
  "key18": "zVX9HYRUq7SwWgz3eqQVdb2SxZUHKN1uNJD335AT6omJdNyyXZVajHbrtAYQkcumvAYeHP2oBvcyKkeCsKRPo5f",
  "key19": "3nY9riZEbecEJMtrqNJsyAPmmVpSETaxYKyRuHR9Ekap9YNesHMqLd91ZVPxJXwQ5zBLqAzoYAcxX5CUdTmefrBm",
  "key20": "jNKJx352s6JdQjH68uPQ5y3bYEWCu4VsKf1GMwJPJfhGFgmNRHepsX6n7ke268JHZhhwrgcysMnAquLeADX98fx",
  "key21": "65sbyJGfApPrh73bXxN8JvmbvkgpvVpGuo7iQ2v4SPkS3V9TXWGn3EGMpamFvZHYUM1QJqvx7Zb9RkGac5P9rkbh",
  "key22": "2GjiudPTmqhS35aTnS8LQmn6xMXHiSdjGdkByGUDchGxySEzNo8HRmPZh5GWCUj1JxSE4pCXfww2nS8u3G7wXXTp",
  "key23": "5x4hXcxVCJN9CgFL1ByvtCb3t25zx1RsWdvGAsCSAUR72tNm4ahAqzxj6Cp6kCkD94Lft8Rx59N6112stXGnRJpb",
  "key24": "264hjmk4R4juHZdG3yqwH8ZAeUHTiU75cwDvk8swVhgNkrYXrqTyFB5UVT1RytMwDHcAUL4AtmJXLGf6JXFmUedU",
  "key25": "3X9JQKA57CSomrCsjcPjFXuqdgqU6WPDUPjF16CnxYsHtsDtpoD5VnZMZuVH3oHv1d6zw2Q1tEmdL6rQHYvaSf5",
  "key26": "67R2KKcjZuu9YnXPwUVpgJSTj9V1QsKQ6mmyjYyXjGK4B4kJSEwu1XDRr16TsSmEZ25J25gfnsywf96jzdnhg92n"
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
