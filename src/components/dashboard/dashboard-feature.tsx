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
    "4iLAVmqTZNiHxpxrPvZK3digvbxBPLmt1KgadHHuqG3oN5F3YSgYjBKruckXuZd5WYfrcLCvtVKqLLqM3fJgch1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZb1JBKwNibPKd1vqPyvJCabRdzkrn9Kknvwh4oQvg5Z1PEzLKXirCrJ8NB4PEN5fZQK6fRxZR7M3QG9ZUTLhcZ",
  "key1": "4ApXzF5aRJVGGiL2yTBkY4dAwmBCEFg32ysHSDQDDnYyCxZb5Y9mufRAWYnDS2dcJARkKKDzmbmVUN8tqfMsSvyX",
  "key2": "5aXdHQgkZhJHLmTkkf7ZfGmiPyFTFSDZFUEea2CAsmJNxCL3d2DWzdPZNSApZHfQHSFyx3j8DWnfRcJKnYABvBqk",
  "key3": "5zJxXiZbBWsxdKk8Vfje2Dz5ya6fhao9fNMXEY5isenurKyqm9W2RS9NiXjmUUWnyhzXCkQi6FFEhLUUY6vX63w8",
  "key4": "NLmoyAeu1XgCtUTKCQa2h1AFnWwXXHsEdjwRF4Spn92UMApwg8mMS38XfRafdHJhfn24F3FMHaoPaHDzGk4dQQw",
  "key5": "4ZYykBdHHqehChyHCLQbgZ9JsoBZR5SewugZWxFhTk9JG9QjTxNFyuKwDPMuU2634VRJYqcM1vpQqVPLb1ukcb49",
  "key6": "3tcUX1ui3A7yRM34hd7N2HbfUTLiVuVFaf62d4nsHHd2aWZuXZLynqZtKSfF2eojVQ8mzKYW4sGkzBXJBsKxZF2",
  "key7": "AzszwsndGBaNVLj3sgAjdDcvQijJELAMSqshSXZQJ5SZTRfTnED9C2JnQyyXxQdptUrRXW1U7kEmAWxGzLSkx6w",
  "key8": "5XAfr5GSGav6X8z7UucsBY1ymcJyGyBdnJQxdSm42WVDLYUBzn5j7Vba2RYmjetvjzqpqr86d1MxFBCG3BXHCbYk",
  "key9": "35DeGjnx1vV2Nevv9uQPbYprkKRzz8ZJAxQyztAv7SpyFzRnRLygXQRL365iNPhqkKRZVnCSS5vbuhXJ1JLwbw2Q",
  "key10": "wNQmvCjebNP6Ed4r7YWbvwS3bsAWB5gUjJuNE6aQiyeMGoNs2LKR33p1fpBxBg92jE1fFWnjZQeL8QHg8SXTs31",
  "key11": "5KNLJixhRvv252WaYkp2qmocfLQguBp85ENb47GwQCh2q5favKpueiiwY95nYYhbt9kVV3ot5VWZxNeqaWQQxGJJ",
  "key12": "4zw9K3f4pvtWK2jPvDfgAFVM1THQKWCs1KSHdCA6hU9x9vTXDRE58Y6N9JPY6j5a2wHSQwij77zpvSwR2wVKhNBc",
  "key13": "3NnVKmhPMzSHm39J4WeLicVtM2HiKmaXcJ5kTN3SiPfKUJgN4QGSJrjgQJGAnLTs5rJSbkYxrJ13SoaTZM2gRmEm",
  "key14": "58JV6VhDJoN6NfWcFUKeUxxK9VFNZJvekg6A2kT4bQ2CrTuSZVDYvZQtW3oPjZCC8AmJDXeDuC6MAWVVANNQYtvF",
  "key15": "5qRh8cSFZCQF5FAxxDaJuxPXwRbqZDUmURmoZGTyHu9vmsJar5YBvBtGs2Yp1X38EpuGhCH2tsqdidEirskM7jDS",
  "key16": "4pTS4v593sSpQBPiqrfvgQ5vHvckLKVs2qsniKzK89rymqDp1ua3wY4GypVUYmZWGmPJzi3nKUtnKivqysJ78rMP",
  "key17": "w13CWuTPKFLS4iZ7d2eSWMSLt6h9y5XnkXe6kbsFmNqTLaiBjGrxbDohme3UDNJwCZk47rNcJX5SdARW6ScAW93",
  "key18": "5ML2p8PxsYAcmriMj1mZbJTo6xuFev6jRX54vNgzg8QsnYgsfi7QwdKLb63a63HoL6KfjWDNX6uYbMGaoV74HqxA",
  "key19": "5E4F6vJppUMPfMiZKSGVpt4vhVG8xJ1myjcUDPCwEPiiij7PSe9khKkCjFtLtEsDkAy4KcrFxhmn5xzfECxaQYSX",
  "key20": "2XGSzJVi5cVsKkaA6q4RoEJ55JpeB194R8oBQ61ftVEbBZVoSPVUDUFJbcmkGGKVM83QaupA3g9i3EkFiw4LU8cs",
  "key21": "62LzJgpBBc3XLmCsfmGzBL5uxcUbjiv3tTCQLA2SA6GTaUFnBfRmGCN8mLNDYGdKpWMCvfHcAZDwi6g6qVH4DGJG",
  "key22": "3PHyZGpiv4KY4TQoQHep1TExYuiritezSniXEim48dKH5VXaFBZcC6FpyirRggUJ4T2jeXqovFvVtvsecuWMSisN",
  "key23": "4oswEWJ9LuouSvkgtGvzsp7BM9QU9tZTvaVTzt6fCAgUQAg883BRSNHK3JaHQe5cNxs1mMQGPkTFBqzvpaTsvdUS",
  "key24": "5DNosdcj4jATX9kWyimnTJ8Srd8q3uLE6HVgWU9hm29Lw99hgG84rTYS7SQAMyK57UTr6E1PijQgW3puuZx4GpQf",
  "key25": "3tFNqcR3aUkuSeSnCGD4sH2RAhayFJs3X75jhpUsBHdFs833zDM16bKRAdCGg9TpzFT3mYBbHgzWyumzwzqe29MW",
  "key26": "5nbp1ZzFZcA5NKeXSB3vhueZ2ifWkMrpYx9tPW7kq6uyXGTTeW2bqyYH64uQpW6LMbZgwHNA3Zm94JmtvNiuof9V",
  "key27": "AnWchuzPtZwzArvtq4L3bex97HUw1cBXdLyAcUtf9hJLQoszA3uMatB3XARWwv8y8WYEY7bsLCotuTigCvNVXRj",
  "key28": "4GduHUmYydArATSBweJ3b2J3gftuVAMkLe2Phoj1rKBcg5vf9DKANygY26ACeDdE3EguGxZ9kUMnWRhzWbdJjMro",
  "key29": "5BcgZ89TndKpN8TYyJixCzyaorktMnSrs4LqzAzQwv6tzXjnVjSSCDAabjzue4AY19qowyp7ejj8bHpHHhyYdFkt",
  "key30": "5qa9vjN2aa5CN1EnXMhYRxN9BaUkuVrcKQ5FwnDXcaoomrHPUEQKG8UuMKvexV11W8K7VSgaCaCHmK46D4AKQaFr",
  "key31": "4ukrjtHPD1xQ1HMHubzCZp8SaD418NDfKFwXrUwZW1CjVFkGa6vEMrcSo54myhr8WgnnLJKj5xnGkTSkFZ4iaRGy"
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
