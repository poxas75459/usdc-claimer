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
    "jozxvnCNd31jWbzvoVwq28FY1bJm8MaUcjaAjEKS5QVTXZkXtwcx4YYKKjfjYTrk176P8JHxiqnuCiX2Jxx9K6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtG3orGdWJrtRQVU7bGoQV9cCyuiXaUik9M9KpsvFX4yinb9nP4vR42ToSfULiXjvqytwZ4ZRA8dDkax1mDwidQ",
  "key1": "2rFmjBnMKJqPYq7wPaW4shK8nawHv2wL2XyqHi5YPEhb7vqVffrEVd9GAotHbNsS8LPZnkWmN9AeAX9HyCgsyc41",
  "key2": "5VjDe7FJt4i3BkwDEgWh3FCLCfSB4sGGLHyxSk9ZhMbhxUCo1J5Cs1e2kgPi4GjdoSHz82qcvowENdryyNbu9YxS",
  "key3": "eVgMVP2jkL5soeBTmvpNzYwxbvvrMXZjxJfpF29UjEF9QiYe5s2xo6USGzJg8pi5ZzbCsr1nAUkNPKiAuxPJALi",
  "key4": "4ppBmocP1GFNg4nqhwbnKbHr9Xyp8zfmovca1u1TCWSZ9JE5yvoK3Egqd4VF6Np2Wy8CQ2AXj5WRQ32uNmVyzCGZ",
  "key5": "1hVHeDYkwHhDLNMu3gQrR2wwoqQVaPp4XGtVaA9R5a8MWFoKJidFyaFZMjdprWiuZej2QK4CpcDWacwwJGPNbps",
  "key6": "5XB4gu4n1j3Yb4AktwA2JFCMv2rop5tAKmqVhh6avvB2sbhQVWN64AZ22xFMmrbCNdFLo4MpCxCdh6bMuKw34Xkv",
  "key7": "GHUY6R9TfL48gV1X3RB5Fuk4R2mrNY1nqjP2nXAFLkEhZTeS9BKetTrVNn4TiU5d8LWEhvjSYLmU1WoRCx5TTFy",
  "key8": "4KpYoe4DWJzPX43V3fTR5KFPLibohBKeGkFvr8SJHw2eutHmx2ePkG2mMjodwG6MUG6cZR4a4QpNzUpRC748cdQf",
  "key9": "T38ABnc1fsp7cFahqcU8ZhuYD4fZPa2j3JKCFv5MXpXm1M7T6PMJAuQdq6KbFatB6mvmCJS8cDyq5Woj2zY2Xq7",
  "key10": "Xj4qSgq3NPDNnroJGKbX7Lu39ssKYbZBiyeDLEvrqesPdRsGFfceZxv9CA7SUxFodTRry7h6TUktqwCjQZMEAQT",
  "key11": "2y6mSikG3HyBpVQSnqr1qJ4vKm7CG26XBc7ZeEqE9jWagQTty8JNQMk3aWQwsZQ2gJ6eFPJDhdr22d1MQfUz9ugj",
  "key12": "2Cv3n5nxqKyQ9pb7hpZqqyGLo1MNvt4c88sAZSv5ob5k8tJCvrh9wgusfzpSrgBAYgCMnym6Q4uYhg7nrTC4gEhq",
  "key13": "Dkx5639XwR53oiM3xKNvoY6jxvXikFgmhhSWz8L2kLXXhvijo9xLtoYH6cAA9iiW64ScpCTk24Vmpe2Mht2yVMv",
  "key14": "QAL6aE9PSGg7AnaVh9sskADQQVhiC5u7fuV6SrXCu9enMpjaQktyUWWXach2j6FWrNv1WKD1gCr9XnSwo81CzM5",
  "key15": "46czUB2JQssLYYE85rUnfKFRNqAHMVBwbhGizCdBNsUQL5A4xrfY7xS8KCj8JLz7hq1sGPqZ21HqR6oe4owhTjBn",
  "key16": "5djYUomD4mhc78Gggp8p42LM8QkN681z9MFF1QECunCJqodE3RnTmWVkLAmykVqYuazNUK8ihrsL6C3JMBgpAv2V",
  "key17": "4JYiM7YvvpKiuxBVS5UimqYY5BY4Gsh74LYtboUpweo7VximnVihWhhhqhEvUqxEsTS4YgFicserMcAK52ndovpg",
  "key18": "2n3KkJmBpXFEtBk2VM7PTzzUXHgu5S4bguyVA5kmR5xTLAVbYHTjjRBem2QZ5N43kBeS4KhBXRiLNygN9z24cpCx",
  "key19": "34VAAtAHKwspnuQ7xjH5dKEBo2xLv7xwoLji8zfdwVyC5cvbxhpXT2jQnvto8UUzDAv9awJMiR8NhcMY3AfkXMqT",
  "key20": "RRnUqzzAwkhyWg4HXKHgwZVtaSEaZ41ec91yTXDnsunR4puN6GpQ2xSutE63GzraxHxGp9Mbm3RwPwWrZ9dvnYD",
  "key21": "5C7XFzvDzuGJNEH9KmU1usySqx9EnM76x45dMBktskADsnxUBFTD9L2Vm9v6nw9E6oR37bZpqEjzcyMmXEUS41mF",
  "key22": "2cGamvBpXWk4U1M42XQ7oE4kE2Dz3FieVSAtf27w8d4UXG4RXk6ByUyVgm5q2k3zuj4BZWzuRCNDRTvCgdCDBh9Z",
  "key23": "CHwU7F1rtVtXbzxMRL3fQ2xMAAEPCG69Ns6bm5yCQrtYx9u8xgjSrqx2yskvQFW6UDjGXXMs6XWgRbBB3iREJrM",
  "key24": "42N5BCyXUTZaadK6CZtRXRnJLHyZNFZRqgR9iMJB1VyKJ139jRXt9WJogLPKQq9pp4mzgX2ydfHkxGfL1Dj6SrMv",
  "key25": "1zZFpudKWhsCBtEAsqhr3cYsntngjLbsfVx6bFupBP1eNnPhbLyrSa6NhmxjuKV482HujxpKC94gD6FhyikXNdv",
  "key26": "SC3ETrRnygDnUrDNHbA98RxCPkhYtnHyYJbnhMJhesBT4VuoHarm488qZR26Av9oFVyhKyvqsVCLAjLsfPs2oqr",
  "key27": "2c2DPy6ui47MXnvmU216RHYpE842NkgfaXEuDAgvqzhNzxiUxBDZkjoBiCU5BVbf7cfTW2GTuhinLxqPK8PnJXQC",
  "key28": "5EHk5N3X71XzoDPD8yiNqcLVSK2KBFNvPF8kDB7nPjkkgNvzBLthxB1CkfMkwfaK1wPXGtsM9TTnXccSYvwX7YK4",
  "key29": "4FBJ5TnirUrJi4tohMnX7QqMUG6rLLrt46PQf5MouKBATXaUA4gfwjWSj6GNtGGLweTnqgBvcqrWgqKN3ZqK6jFg",
  "key30": "4AKnGauRMCRw9jijLakh12Tj8AdqA4sge6A6ekU99bXzFrqHgx868KPUiVfBuug7pzXJzAK1wnXj2cyNz6m9uB4P"
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
