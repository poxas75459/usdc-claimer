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
    "Xqa7VtbvPJuhwCZ9tdnSX2tYViVr8F8D1ptZRE8CLo6khqW1fcjRWc1aSYyPYmNZCyCaN1UqqjoiAYSdYz4wvdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdeta4UG4h8JpN8Rak5k3WbPgSYntryAadM8k4nqepVtkaL819LH9N6jjm344KS4Wchd7yvH8PsC3EHXpJirCPj",
  "key1": "3gjuguBQHq5Ldn1fPNrLtgEoBqFXfksGVzQjXVeUFd6V4Jo6kBxfzq4rfEjj8rjU6AuBprgt6B7po31vYE6iCNkN",
  "key2": "3FfohHotYi5hjxc5KnvPUBvZeL6JUgrKLDouuWU4RBbjX5yngzAySkVB7sHVe1FhmW49EJJMoyZWPzjJjmnwV3RF",
  "key3": "4QrbaJRb1E8bY8ygdG7weP8UxkYjWDAR7ZZeRsQ67tYTfwTJszbzMAXeXHykKDA6AsvsUJriw1xuYPEAgyT6Cvn2",
  "key4": "4GrXhmi5a9PQUqgxAw7qJSHtBV7m22nZjSXLEpUzsLwHVrpgmWwYdE1btcYcL3ZJLcGKBhHgqjqPpmAa5SZ4KMHF",
  "key5": "5GfUTVEdXNaS4mozJLZ48nZEgFjX6BYwHMmXdUDVe25c8nFpLAV7ABWVBj4YZ9Yej87Wo7ELdMFNJQxYs96rCYaK",
  "key6": "67StEp9kozkc9e5KvFkLtbRFJcsQdXmtDr5JSDvzD9Q8vfZ5Mywuw3zv9AqTftsNoB4LCVDYRb8mV6SSAZVFreZZ",
  "key7": "5jgrzeUFTGsM4rtZGCsW4nudC6P41rN2ywX9KiCzBaaoGTNJGUt6GbsMheAnuH7nEyuYtdiiYWkh9QtQPNQsMkAy",
  "key8": "464zJ4baJseYEbmATA7PejBwx5JUQfeU5dQmzvtXGQ8ckxqLvEHdMQ6fpGTZ8RttMHb8A63LnZNCqAM8EuPkASnQ",
  "key9": "3dyftJNjC4i7JV1qMPWUKmr7xazq9U6erWGkk4GhpKLVWeKdzn9JE1zi3KjPd2iKvMbzjPFdiBy7YiQXcWQSnZNx",
  "key10": "47SftqwH1wM3rPnwu7abAAYf4bY4GYD3eN2fs2V1k8ErHMV6wZnddjhwfXrBFj84f31Xox6xEZPiQ1K6QnzTDUrC",
  "key11": "5YTuwevANfKRRtHXVoe5PUsqzZh5YhrvG7W8oesTHDL2pfXz4ZH34DBgLsjBkiT6QoNKXUafLPUZRoDtdKZ4JEBd",
  "key12": "2PYnTbnv3iska713yiL6TVFArUx4vjLj92bxPPz3ZpLHHNj9tEhpdvV6BrNsyy5baQr3kT9BA2e6bvrYQFXisL4V",
  "key13": "3g1vscNdrB1hYxDHZqXWxtMcwGiUDeuTfPvwRfhrBfVZYZqsfHic1qvWyskheoatSu9SegYMAT7VkCbrYJ7VDvjE",
  "key14": "59uRsj24tDJGDFvQTFurCySFG5ZRqJbQ6CuVsfakiPSPYDJt3D4AARoiDAnuggDcuc1sX2bctJJdXPkYzm72wFyV",
  "key15": "574B51AxdvmMpzG2hXUAmtyQVRsSK3DgwFk8SNXAvGhQPLQjAm1Af6an7wZDH7JDjA8f6Gw3twKkydVNMiZTrATU",
  "key16": "2caNwmHKrLP7ru2NHiwJNBhEVRa84ZX8sXn2wfzHCnH6VP4PkTzDM869ythgarmqvjiADD1ceeZim89XaHpYqXMD",
  "key17": "p2vPAsPPfGpH6NnMJRr1a8terPNx6m1GNZix2Z4uppYRQAkihn9VFUHwD3RwfFVe142qe7QFbTVhfxM9D2Ahd9m",
  "key18": "2sbJLxizWFgpw8zF6Pt1aupM9q8xyfCm3qPo2LrUv4Esf47h9VBFL8jb3KHokWEPk4oSgXbqjbmFdh8CnBUy6nHq",
  "key19": "21qxtoyUWvEffA45bfmegVYpVhwcUnNQCEwCo5XKeteBrtd2yc6EZ3QP4KyqEBqgSAkPjhWo36LUAKWgBGAMbpdf",
  "key20": "k2Pcft7nVRRGg4bAHWQYmPReFV1BfV3Xb9iVwNszxCih4Mz1LzXT3Y3i9AornV84K5S83s5AEbvFmb69UiJ1gpG",
  "key21": "JSy7USr4tnjvEpMBXdpJBvqxATVQeu8yMyopAeENqWwqokm7FtQFVw7cDWA6L8WBZGPY8vkAieShPHQT6GA4gbH",
  "key22": "5uoUJtGh8S8CaNAQ36hZ44B5DyJYA86bFejXs8vmvhYPANCmyYbeuCZJtEwyYd91SXmsWBy85Hv4QL58fwwWGXt3",
  "key23": "pdLzs6PB8R9fsiQfuKsgKbWBAHbCiBiUJ4dEhH3uXBiCvGTAHhLRXVR7MP1Lggg2TB6XnFESi5i9C7yJbFk5Xhj",
  "key24": "2o2xYt21TCnx7BQ4aXHwbAwgHCRxowx6z9CX4aYM14rR5jeuZAFZfaoBQoLwLHbS6MoQFD9NqpNSwUq3Nxxy5WeA",
  "key25": "5eWV3e3qbQJihGnb3i8tw7RrcH6t3TRJP2aS7yCYaKyiwdRbHCfDja92tKx9kKPCmLs4ntGhfdhUi2SYhGCaA3yB",
  "key26": "2pHn2L1KreEiAPwmB7o6gmG2MxW6yNKZpHiktiRwhzbfe7k3hoWWWMNhuDdVxyfhdj2PHH3AfxCKJ5jCYSsYGR5r",
  "key27": "3shpffVXAgdfqnwjBGsC54sxAmCsQTLzux2DkoE7ChHG1cSZcxR8Kd7yB784V5fZdrTnHGZ7PJ2AqrGLqUSZJL8a",
  "key28": "hyQL84CnXDiZWwZhXWKvxuXcLUWwyv5HNLGMeyaLdEXCVARkxgXQuwiR7Sj6agKPRCLYCtgS7XQaZvjFv7hmW15",
  "key29": "7zF3arfFoFe9pHA8WYTxPAmJedPemxPdUYxd5aEcCCjLjYyRjb5AAFwfSiqvwc81Ea4EshDt8Y4wpshU7GdECcE",
  "key30": "qG6WMi34areJeH1QFwfje8YK4bm688Y3ub5FWgNUJJZRREfDsgoxotAaH3NgSr9Gi2g9Hfi3XydCqLguhP7Cowr",
  "key31": "2FUmyX5hj1THJfMVhQjEjcHGegwLZJ9K35CPmE81gvt3PSaEYC28ZcbJfLBSqWNaAtfSgkVEoqCBtmEo62evbTHK",
  "key32": "57j5AMKQxtkWGsHFLixG3NcfqqhQXmq13JYj1JBsXpqkoCcdMV8dpuHLP6fBwjjHaGf1aoq8CSvtorkjTKEptusF",
  "key33": "2Dwq6MuKyimVAEZN8RxEvD7QqEYfx2giJM4ATbZCRdpCiVdVV8yfDQBe9HnztttYty89BHS8FWyS6ovWe6ouTafQ",
  "key34": "4iKb8fwikMb6eLAfnFhsJ7NzEwyx7Z7LadPuLAvh6WYmbgEKRU9uuPdp2B2AQ3RssRQQTFUNcCLBED4RJ2kVo4Cv"
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
