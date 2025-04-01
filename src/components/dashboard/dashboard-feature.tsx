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
    "3QJbXy71aBGqhV2dRA9gVmRoXG7px2gdrdTbaXe4RmKab9RVAnZyPGywqZ9mWxXsaLaN5cQC1RXHkBNRgsi34QXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aB9PT1HAHJtdG2MzVM27NY3dxdQvYZaCAQb7MBbmbcPubmc4gQF1o3bSwpaqvoceoRVYf1nrtLdXxTfmZ6hu8kf",
  "key1": "PbvuzxgM2wSVSQvgjhNBdLuwMdvyjHqW9AxDkas4iQFBR8ghkRb2yjP3G9iTqEQa83MnrBtJiACfLo25XD9dw8n",
  "key2": "2fKyZphnPedmi1VU3dmtWXZ96PVGsxFPthARWaVZamhnhkTPS6KUcB6eyFTwskhY42JVUUouB6m9mCHvRuTZNwon",
  "key3": "4w6rdB71XpiLp6UHLdmZE1LvM4PBuDridGWFYvY7nMHmD8gHv5ZAHRAiKiLf4ZcCAVWKwVxSyhkcLfukoribAikc",
  "key4": "5ugwwUMhuUVBqksJwYzQsqeNMWhH7RJcBTek173Dr7NG4TMb8GYUeSJvqNPAsDR81AgmiKc3d31pov4mm15GL3pF",
  "key5": "3Hj7wykRTSQQPfRvp3HoPiHps5GhZpKLVmWWNroqSwYRxdeTabDAHTCDNkzfjW3y563v1uyMmWNjUF3kgGQYaUtg",
  "key6": "hxhAQezy66jKUQ8EAiihKjAmgor6Ft5ZMPFtoULcyYvfGz6Jhhuj3Pt3KE5UkQq7RrgzxP9WLzZJzPR8BBZs7xW",
  "key7": "2hpgdKzGRrDQoMo8uEbJcxHz6wzj5ZWE2YQgEKZWwPU5YzUyFFkY4xNoLuXwPk7RyfPh8PVp7V1YDtowsjPkc2Wn",
  "key8": "2q6nqmUDV1eBpP4T1knGrSJFaFvPhM6P38gKhvdJmz7c2AKTbvE2sHJD4jhJUQ45TuBDh2UnER9u4Z7KVJAE6uvq",
  "key9": "4ZFVYmEf4DdUcfeADKgRTLhcYWnnV9RNbKRa3zeVq1NQRDdE8ez43JE5auuMuvPde7kWzmWYNPt6rBzPCmCMjRiS",
  "key10": "4gCiS5oHc5czNjut3tu36WqRF32PE3GCmpzmnR3v3VNYJSR3X3dC5sNsvyUCswxaysnvru3tQHeobD8QmYKX5dhv",
  "key11": "5P7LWqujriaZ1uJ8U4euUG4NGfmx7mX4e4Fa1qPTway6YqURXM3aPGux9DZv9gAmNsVFhMJcKZvvBg5f2J6Pkh18",
  "key12": "3qdiYxxjH6Jke2zg9WiduxTQbURMYYZh1SmiavT2tk2UHJXj5NK39J13GAobFXrzMfapk1mdJs9tUMQFbFxBX31J",
  "key13": "52nCREdqxTndQwuVcSzsF2QXCU8sPQ8gkeJL2Tc6xP5G4rEsfxTZS9NRzBKxMhG5qYWGrQzkGqxPjsCePvJYA3FQ",
  "key14": "xMkh48Asn8EoP2r83xAh5w4yjdhgQfwGLk6FPYCFGJyRU6oNivug7RWeb94B8VPNqUAkixaZfpySXjk1jcm6v58",
  "key15": "5kw1SQDNiysdkHMd4TybzQmYv3uow3RCkBA44iztyhccsGDBCSjoTfgoAmF3yc5PV4qSiAUYSbABSnW8FPnyT1vM",
  "key16": "3FAUD9MSrHATgxgMcPT4dkJG1C9NBYSYMAibPJEP5pWoCkZCWUvXNAMfjgTWEKpoJ19WwWXM2wzrrCxDk9AN2umJ",
  "key17": "5HSK4x7PxtyHhFEepaKg6vaCu8EPPcNELjdV7eJzK7VXJ1bmPvwqswbTo6RB3cHTWxgpi6xZ2isWi1eNKpDRb4KP",
  "key18": "2rRRYhiPpS3iPWaRYktJ6prnQgFVmd4kSksF8bgsf4gZnq3ksRWriEEUVVQYtGoBou5YWc5wcLRbLrt7YBd7M8gb",
  "key19": "2YQZuKH5rJ5wZ81dVb4zNLUwQmUS5GszD4HhXYiycfuMGLu72BC2zzp4ZLA5LCVUUi3hEhsZQ8kv5AzCcioQKGNY",
  "key20": "3PUVKM2AGLApBxUxC1bAK2EyeHN48KdRmjs7J475XqPMBaaWus7XAe7Pimp6p4g3YXbz624HQ5jeTeXAwJNRtN3X",
  "key21": "5ScH2z2N94Ff18TLmztWZkzPmzfnGacSLo9fwWtwcQHG6eRchFMqqDbvcEooFG8fqHvRPrhPaRq6Z6zYY27w9dvV",
  "key22": "4BKmeAWHzGn9E7VktersgD2aTRTEmwHsqrg3UE92Xs1j4jTjiu24u1GQ8BoHvEPocGncx9QZydB9XCqzm2Gmu9Y5",
  "key23": "2vcHn3rWJQ62jg3VmohTDndwjQ1aiAKWTqw6WEVfTW1646aRsd7MTMLAazFskagruBWHDSTVmPLf3PWZci1iCYTo",
  "key24": "5txxdtDHyFRK6AXTgBG86f4y5HDhyxV6yQKdKHXQS3qhxjPuZH7FV9WXbBno6H4hoKuEKDZXiXYbxaEifRSQD3aq",
  "key25": "3frSoqWYdtxXo4PzhjY47pArYPvxrfsmn9426XFEoUs3FzTUrpUrhkvy8EVV9XKBwx1KsUzWoncCYr8YhTtPsuJo",
  "key26": "3zpx7DeZGdj9ubqYs4YadboXzWPa8zAf6mdy3Lu78HoLEDk1X6BXDPfVjWSwjUi9k2ZeckbAc3TXQGxv24vHHLFB",
  "key27": "29a8DJaaSVzy3fA7Ei1Njj5c9czCa8KtHdySFvZQnQtWYAdrQWXdjLz9oipDxKkMA5jdkGC1tuBU5nLJ2roxEsd4",
  "key28": "4tFf6jd5dJ8zkYnigmHjweh6P4a6t8NCy5UMToatdHcdnGz38EtWLGvtrtetQjEE3dhmE2QbYqviCKx3CCZ4omE8",
  "key29": "37g61MGoJhg5ZZQC8Htt6T54g4RYJAJM5dr279vKWKXofSBWx2zat9z5HHssypnRFS3UET6EKfwxAFckrZVxLaNz",
  "key30": "2FnFEmehiFZfZmqi3dFdoB37WGnJo3pRBX621cPx2gHtVc5BVvRcY9Pd8dziPRQpsGbWajP6GdBgJtfzukeoybqv",
  "key31": "5cyvokYW1JCz7WpaanibupwotTA82n3LqvWvy1uXvS2CQPCNzyekw7Z9t7tqW7JJvo4aC4QtG2zc8NRo2qqhjWb",
  "key32": "5FaSgEuvaqajzqGe9ivVEHW6Hivr6VPA3xdH7jxMadUJR2fSQ6VBQBhbiYfuQBD6ZitDsWN1gjRm142kQ9T6MRKj",
  "key33": "5DArtkFuwPb8QHcxXR49pr6vXJqCMw8xH8uK3VVmuv53RAPD4s8jTyPaFJGbLsApyxyguikbnZHrMwcR2ZLHKSEy",
  "key34": "5JwMHP9uaVVrk2Lp9oJZ9Xu1G7MiaUfkKxvqHnwEwgcYzR1WhZVdyigaf8Mmwcvdijk1QbgDjMuBKWSysqWY1EqH",
  "key35": "3vPgqUhohkReV7sGYijpN1cz2Fs3GAzZ4RSVxjQXV3XGLn4FLAWu7dERzP3pPwgDyyoH8hJ396th59iCQ6YoeDiE",
  "key36": "3vYLSyzFZqWHTUVq3PukQPfCXvgUSLjxz6JHELZtHB4xrAmoXCxubcwabAzYcgeXqZWzcUdCHwHudeCtpUSwrTbU",
  "key37": "4cHTEUjxMj995S8x6DLjdfmuhrjgkrQDQQKb8LTu5Jc9VvuL2bRDELzckCUHC3BTyrF2ch4oshxQyLtbzRoXnhkX",
  "key38": "54XJDxZNT4HnLAzVgB9iK3xUA24kLvm1enpWttByUa718XZai71rCkEczfyPTCE9FufZ1oMdNgXDWPne8msAjGcY",
  "key39": "3M542NUjvRZDpnHGHsnLmKVyzwL3LUsPqzm5a5E2BTbv77bP2WExod17BDpXHsMGYvVjJnaRKdPQu2Uw2nndsXmq",
  "key40": "2VXyEpvdFvZzdAccEnHgiTtnAfdDgQWzi8kJFr3J4x3fNGtj32bwmcJzZgV3hWd2ZW5qtLo7cUkA1pQAoZxdv1K9"
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
