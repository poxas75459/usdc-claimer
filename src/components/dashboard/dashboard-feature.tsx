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
    "9JLStSrrjkZhx9i5np36KGmtrnkSThircKZAgR4wJN9v6Uhvau4boewJo9XqrGHjFneZuG3APwAWy6X922o5ptp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6tBypAps21vuPhqx641pjdHAKfP79DuUDgyoyBCt8EvAaiGzbjhWjfijvjdB6RLg6k86ZapzfJxdYVtqpeJ5wc",
  "key1": "5QFCn4NWkftgb3iYaYpcwhBE8f3Ms7bptt8CXerR1BdUri1g3oLmvHZoJhnpjRHE2tfMhgAeDrBVd2zQxHM2V2kc",
  "key2": "25s1YttsnbzKJZanRugqCnbgWu5jj2VCpbUaEQZSU3vPjprzLvDK2nyg6ew8LmMjDdU6RWnedLRULDfc1pt5VUBd",
  "key3": "5pEvWmABHFxJ8yBvQt6a9kcta8pA7LpyrHfY3pQ2sd8uC2AvUfRoi11JHtzwrLEq7X6ftL1cu645htXjCpQcfBhC",
  "key4": "5cTVgtPhyXYvMFMzd1nYt4MmKZxzNBK9qpjXJpHMwFzSt3EUtLECZhFVhB1WW7VirviBdugVBAt1NQozEZnC7c5s",
  "key5": "24GENhgXjFpzZHe8EBy6Fu6LQXfPrydXNPVb1EeKp42Q3x31J2DFPH8NjkMxUrz4bkNQgEx4tP2RCdcyBnMkoz2q",
  "key6": "KqxzEWAT99UA39SCrJ9bf6iwgwgQ6ePzNBdnpk4BaRtjQMBgQ7m9fuUfSF1pVdKJBHNBNK3kARtpFptQWDwyciV",
  "key7": "26jzuTQ9GcqiU16CcvYjoGSVp6xxXSY2VaxN4A6rLFLTjGcKrTbYGoa4TG8x8F5ipspfjS3GZSK4hxLvyKMNNcqu",
  "key8": "3hyC4h69UuQcmtPUDgSvCeVSMn6ywj2FSyDMKokwfJPfPidVXVxcDAVdURbUxwN1U1AaYub4mA3ocKeDCJkGCWMA",
  "key9": "3Z6fyz5SxLUQxNKp7uJTuvjG56X5q5VKc1RykBDmyxPWJLbGFDG9TYpecPdUW8t2iWWx18dizBqYwUXvDeqAyP5Y",
  "key10": "3tvJXoNGb78muuUrDoqipzwrMCF7271hjwpUyK3kk6swD49koT9hSZrEpMsBdNAmEeNz7HqAhB764tGeDPKDngQW",
  "key11": "37ZGPgubZzBe4oAN9CxkxWbHXJK4hQmN9jwppH2qQhHNGPcwxxrxDPeqHBDLqSz4qy8PxRZdsWaoh4M1XwfDuxd9",
  "key12": "3mS5nqDUFDxcQp8tfP1T7tFgiGv8JjhFkn51ouD3XKfppu43SD2vJt6DpXzuJj6F4wkhwYaeY7BzvkreXQATCp54",
  "key13": "pa92s5naULjX2ZB3h36MyW3X9DpjUQ8M4iMR9EocmpUCzC3cGv75yCAhkAtaebfXgCZ4Ct7oRFMRVoLe4uJyH2q",
  "key14": "5Ro3QZP6oNDmqPz4DsE67dKvzNoU6ejpHdK552Xzn8dosMyNhyBCDyaBHvETF6HP6ZaEaQb77NpK86VJFBtUNuaw",
  "key15": "123emaiWRdKsnprSw8S2Qjg8EcfaeqrG6fniApMvHzrepvjqdyPtz91pERWZfxNgd2xMjceeWPaBKJhxn4ZBT85D",
  "key16": "2uPY2GNQf8YQyW5p5z426bZgEc3EihJV5orPUP9kGbEg3VmXNR2hvANFseTnSVTTeo7JjVeKJ8y6KEEFqbMEZxbP",
  "key17": "zUfaZrJr9JS43ZsvBUYWbRa9rx2oiFDhyu3b1EATXyVc6HVD8RcHqvRjxTNHob4UcJWQxXu2vvtAuxnVGbsTXmg",
  "key18": "4BKmziCybTEbDA2QQKW6JLjAtpkz2Adv6SdoucmE2ZqM1tPy4DNcWodg4DLWePLKmPikeHDAeVEAvp1Ybkp9Aazu",
  "key19": "4dgGjPWrg6fY4bjdNEhpMJBqYffH14krjx17ThiQKri8M9gte1TMPMGJbkZDmzv2MSKND19rSdwL3xsK8HUnbDoQ",
  "key20": "2QteMNUfUTf4tuusHxw3QWggDDmqYKL4sd1hUEvBzrM8XruNgPfGimv2bnjMNu51EZpH88mjLU9Kvnm3rVkTcdmh",
  "key21": "3Rvrbhv1AuPpdhXG93H9anHwWG6sGXMU2ojRuX8GayV4xRPdGHyb3yREp1KrSW4NbpqjVwbiwHRqQPtgLuEZRpZm",
  "key22": "2WD2AaLKXMH3VwqJRxNuBcvwT4yG5LBnpCFaHfn5qTr31hYAyAxmb5ZKcVfLxR3jq4fza687NmSBhYcHuZ8VwTrm",
  "key23": "3PDrv5UtMP9Yb3qhxTZPdYJvs9fgFHEpKn8RFUEUZQawCZufH7Tq4KER3fmnSgzjBX6JwyU7xiEHjuoYo1BhftQw",
  "key24": "4qkQcroFjow6H4vBB54BuNaAySqAZtEYDNbxADgcHk1vTxZ2ZGqSDFE9WweNdUPSHdVwbEjQFi3FoxZzNZx8rC7w",
  "key25": "4RfqHWpK3DNPdWfjsgipqXYS5AtyscdNxUsix1eRe4oTABpNHnsgrrHmRVrch1uqDUzYARHWAPfrHavN9yTafKFE",
  "key26": "5UgTWzTC4j6WbEo8cHS6RjcVKAYe4GE8AkP4RY4yovVuDwTuUgUAD5uiFEHRykBLunam1dKqkHJz2UBpx3mjf4ww",
  "key27": "2LpfUJqwNupeWgjCzZx9LVWrCoW9Qb4LrLr2oDo7Y5JtGNMKD7vJ5Ki7KkgoqjhrFL6eC9qwPEvSpE1qpsvAzHzx",
  "key28": "3degazAsELiJhS1Ak8kehhE3C7d3xzYa3LMh73tojhS3GLjn6K7P1qaaPHVJXLYgYn6YtxQKiHPe8fu5Ys9bAYi2",
  "key29": "VDjz2Q8ov6ndKQbdXnAPCmwSwhnH9VKz8YVsfvarUQ9vWiKY8czoaEMv1Asr9oaBvqGpwaXnGRRRyWBQnwvk3Dg",
  "key30": "5tLJCDRb3AgfbY8yK2jH9XgyMUzKhYkGxT4qE4fX9CSCxwFs8DXo9P38hSyF7xex2QckUuZAW7TetFa8x7ZLfFPh",
  "key31": "4gDGw6ErtPEYqQ6xJF6JpAt5dXp8zmiuE8J87YMBqEXCPTFh2CMhQb71bihpts7qA6zvkAsHMeWKCZz4DooXyMC7",
  "key32": "29AiEz8VbdEfPCkcLmyEf4L1AmX3PAxfmXmqEnW1ttqDimyxwZ5RvPcGPj2mphmmkwNbxJZyu1BrvGveH1NKxzM8",
  "key33": "2UgRr9MrmdYSA96hFeFFuWqsbmyRKQZiYTm4k9Bgp5qVRBhsWBPoco4WfvXeNX7EK6MNfZu31wSptcmNiK7CoSTY",
  "key34": "4c5KiBKxVwJytkrJgeMXZVw7URckCJjqhi7bceouJpGrqhrWoWAnBoizu1ynXrKm5g35xpUNRr6Y366N9BywmhUV",
  "key35": "2GeALrMy2rrq64wH5V4HTBkicqTfFghxjgh74gwZ2Yv1knjxkjxpNaDXuhsxBZ62MWEYyBRmqM4MrWfHoyM3bQ7u",
  "key36": "4TQAMNXxXCqzuEwnkjELfG3Z3DCnD97rsdqbg9EghfytmP6zx78ebxjX7A3Agihn1ZEE6cJnSrjRmh1P7Wk3HJoD",
  "key37": "3UViJremtdbPS8QKvThe5LYvAP8GDqtvH1nSSrXpQu1quTKgH7b7vgxG3BQcHtmi2gbzHUUe8AjBmMLo1J9RTAWf",
  "key38": "4gm2oJAREGbrNYCxnb8SANbBvobgjkVwQVysrj9NCbtud1eFufobjaG56VNtEsxFYvjF5dssD2p7AS8Kbkt6j64A",
  "key39": "566bpHChteJb9uin2SFtpSsTY56uS8bvDwdTXe8QmnYVULjoojpm7b3MPRgtaoAEi6MiQL5ciMsLj2vRfeP9NDjq",
  "key40": "5h699tkEP3n6YcAg7BFF5UYhaaGeEnmbywFtx1aQSWojjZDzmqZ8vDFwSwcM39yaCa3s6bXrYp1vmgC3SFCqoNfP",
  "key41": "azeMxgUp6WBK25Rsdhnj9KY3Fzr9uxJNzs3tng1CBLqZaY7CazLQaofF1NQdMKDeWAWjKqf7fzvvkx3YazPSigC"
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
