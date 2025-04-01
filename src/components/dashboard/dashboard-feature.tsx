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
    "3TKkPKubcvEpmP5J3iFx5p6zi3r8ZPLcRc5EnQ8pd7Lzu1GJYBBhRHQ8BVgYJtCrWx916Lg5JADy7Uw4pUNQY715"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FU6dvhZ9NpYuQi5Qj8DFBREn3yv8heD5kJHvHADxe789scrLkXEGuG35mAfq3LJffdpTfxpSsbmjGmzgzB3D5A",
  "key1": "2i9oBFbeTSm7quUsUXL4bPdFCk686T8t6xmqwqurg1FmRs9VzsBHczxwNJgk6mF2rbJ6nHHwzLfpfTb8q3WZaqCP",
  "key2": "3G3NKtqUnujNCTG27DrbbcFgtnLgGs8tWdpQqy9tuLnEebCpbxUZoLzLy7unzVhpm9cQo7Cct76gWbnxX1n7AhuH",
  "key3": "4eACzzSshWHzvMJfD4spYEsixNTizfNKPGaLbDNtnRr9BMWAPa5Xwai6eGupeaT1X1n7rQq8umoe4GAg4jYVC411",
  "key4": "3ruZmwbAzyhdq7kXSCedTaYYYopaj22TNV2UabGooEN9bMzoXLJh3Cey3bD7MeFitx7Z24GEubufYCyjn5ssg29J",
  "key5": "5gRhNpPhYWQpao9yrR5RuiBfvCroi6PC3ZTJGb5MBEFFP7FNNApdZ2jBSyfZb8F4xBzxTNqvmfoJCUUaHL8feGEw",
  "key6": "57f9Pbhj9fn7TP1dRBKaPhmXFH8AnBxbeDxq3AqeYFwMH83AxcUNX5Mg9g6EuxbK2qSBjxA49M1oEAm5eJ1CSo1z",
  "key7": "3iKECohqqp5dPm8XcwBgHC86TK4tUSh3uXWxSb12VZN4ZWBFrN8YDSW3hVf3G1wZTf8FrnrSg1dLEz1SjLVHBC4e",
  "key8": "35zyA6RhYpZZqAPcxukhQpGYjJJJRiXPn2un9HnhcKwR37gZeN5fLn5vrBKzk6PyDcxEeELYmFQH96LVvLWMbG3J",
  "key9": "5Hij9ytLLFhksu1NCmQd9A3PiEEcis9fCyH8mKvWeGd34fYjCPNgmcex3GCjL6iMAUM1x7qPn2ZauytJqaBe98Up",
  "key10": "3ARoEjvgRfDS5YPaEYb1XpYL3wdLksKdGRb1ik5cksowiConpUz9mYkfqHdXexX222VXh2qNWZcSVaNsQ2DsV3Hh",
  "key11": "EsXcdnpnsj9E256KPExpYwWJHczfLCVHvGjWjGFMkRzuuY33aVKsm5uzkmYp7KjsNp8Yc31w3hAc8qSMdBCJRDF",
  "key12": "5HhsydVZhu8SqcoJwguvkJYAvWRtcRzz61uHs6tF6XnGoE4YBaRHG6uBZqHXiszajtZyokwdyU8qVxAN714iMsyM",
  "key13": "49Bz2Vxa19pfSwUhz7Q2Ci6hCuaJmdB6pHr2xSA6GBtGgi9fbb6YSBYc4JGTZFG5h4xRmtaQPrY3of2YhywLE2EJ",
  "key14": "61KpCYV8sBfcQoRtm1ahyNcTmj6rhoeGrW1T6beFTKuKjZ3anfcwqQZN4CJaCUUPaiBmVeiQYGrYdAy6mNY9EWQ5",
  "key15": "3VqGf4m4TXwT2PZQC1aMed4MjX5Vi7QNVycdghCTLaysTrwUeX8NPTPhJpe4S4e5KtEssrxwZNedhD9vDby9kqvN",
  "key16": "deFmLXgSsu8CaNtAYHf6unP6w8EVf3prx4zg5nDduWnNY4w7LUwXdrqTMrsRcogg34hHKSjnxg8z6cKpX74hCpu",
  "key17": "4NQJuB6N7QFnb1xYrbqAeenoRoQTAvKNPKyPXnwNi6MdETrqXdAqboHnMZUc8t5TaT5x5mH6ohg2CPuu7trkwVHH",
  "key18": "3gv5qJUF1vBenGCUS89q5j3omWZc8rsKBaChWoSVkrCxWUt3pUEjq368W6U5EFrPTy1CrqmEk1sZRer6NQeoQekT",
  "key19": "iEq4ekeArE4jDEKFW9tY3Lut8EpHJkcLAhVDi3R5XYxZG5DGQAQnUexTvu8bLz4V79JGQuHGiatmhzi2fuRJQwx",
  "key20": "9t4vEATEQqFWAJKoNy6oiKDUEW6XABEW1oprxjvQ6yu92ZUxbfEE9hx9kEUKHaufSqAdwsfcNzDtXVZVmRQz9Me",
  "key21": "2gjiJrBVQF4XZLfr28LrkQsyzdbHeU9V59s7D4dSY4miMNdxJGigw32aJEn4EaonLZkkWUxQ3dZjmQjnrUH6ardN",
  "key22": "2s3UoyK4AJc8vMw11Mohvj9uv3aYA8Z9bngFUZixrAs67oAs9Gq4XT81PjxBVy9nkEr9nBbjFATQSeerkJgq9rrC",
  "key23": "5iakKQC6eh9p4f8ZUsYJu4zYYQN5qkhKkYcpB5u18kvDngFcCkF4Tri37WivKMDQ62Ahkog187ACtPxRjfqQpVjb",
  "key24": "24urGBgND2BE8XMr47mFgRJbgDMqGaED5uM8pPDJhwPYM4AqQ5VGM9uq7myQb7Megek4dAxFh5drEvSvY3x8xkjA",
  "key25": "5QCpuoxiBxE2ya8wMCanPSVtMhfaVzWBK4kV8VTFxVMPqUz7zePRcLd5J2io9QZSZ4kA4LXLjnfJKytPuuadd4k2",
  "key26": "y2pZ6z1sZrz7TN4jYYc2wCg27nJ91A6hMfMmRfu4HcCNyqynz4ckU6qEhU9RZcWmybE5xQw3J8185peMJ3btAAB",
  "key27": "2MUwXPtPUsGPgi4Z5cWAcNCVRsnBxMqXc4iy2t3SnergC9SD619ZDec2cMjPjGfNuJvvzgA28x7uvXaA2ZZQLtMy",
  "key28": "2tbhUi1yzD2pwPA5kLcXVpx1EMUXQm1oBLCG1PxKADfynB4pLVPDgWc2cfVXKNQu4hZ9SPN4v7ot5jcx53NmMH41",
  "key29": "2cKehMFw4t3WjzTbZ4rrkDtt63KBJuF2LhtrBVm73LnGKe1JHGJQfo22G6PgJKXXyHMLrG92vXYd4i1r3FjGD7zp",
  "key30": "4ngLiUKY57QDZSxecWaCkURuYrp96yS3x1BkBQYYFke7DufpzBZDcJgPq3N98NBqZjRnyhiCcEye1jiENymJARZd",
  "key31": "5QmaQNfTRXWpNCYcaK5YJxo8nrtB7TZECxrwarep8uGt6hFxETZ29rGo21ZKN89PBKtoFmfEZSkQvaHFVJCJftgf",
  "key32": "2tEvYdeKqKHtchKsYpzutDttPbiZmcsV4FoLrVgmBJihp1E3zNwSk8bJFmikqdjy4354m7qEPc7nsGiEWL6X8Npr",
  "key33": "EagqZ8jPxJRXGWKkrByoHh3kDwjBnTFsVnBTRiqsVBuveHT2kBBh4SVA3wYMS1hqhi8Nyo5aGhCRNi6aBbov9TB",
  "key34": "3tv9jAeHD4BhL4a6ayx97SKPkd9feFMQ8bZNovPyzd1Fvc2tAhduMvjhmM1Loo8RVathnXTzKBAz9zs4GmnWTUe3"
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
