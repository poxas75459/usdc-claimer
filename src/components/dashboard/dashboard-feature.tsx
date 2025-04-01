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
    "2fhzPqUdcgumacpsf5NKQ7sxeNNwYSxHkLktnAVzgHDNY6NXLgH5g7KM7koH8bcCb26f5D3qfbtffXSwWBzmsAzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oH8Ee7TvK7c1cSqBU1MnQv8SzZXz89ep6L1mjDSQ4VqkAqNzovAw2q9kPJxzBum6p6kLnTEpeL7bnFMvZNvnWC7",
  "key1": "5GgxkTDLeHXMFaDmmjjPBgBjERnZ39vVA7QsHz1LNu92HwZSdMGKqqXivWU6RKAvxjGzHpqE6uuBDJvuqXmPoQku",
  "key2": "5FydfyXsCH4mSDQxvxTAVjg6raNWYZ4orEzBBVc73q3K1o8uVf7ny8q9kCbWv8rSmuQj2oj9pYiJvngaLPdkHxbX",
  "key3": "zfLeHr7XdtERqmpzfygq36Dfni2MmmrfXam6C6aKE4do7JcwSeqsL4ZQuRJtexzUEZSD4fyW3QY3qhrNZhjGfU2",
  "key4": "45xUbfLDGjCyRiP9m7QG4mkMuXZKrGhf3jLgBasERGTFgoqS67ZSQ7NVZYk2zZdKYfWDgdMv3y3S6dBFgd1667ER",
  "key5": "5szKUPFk6GbLTdovADRyUPEMuFetPgPSLH3DQoD1JaN3NaQeshonM94jz4Y7av11HejcjmaYwBcHhtwUmYragw2T",
  "key6": "C2FbAKxTGvCeyWfQfJSVTvmUXJYQHW17EtPhK4v23fFk3U87ym8aBgjLjEGrV5owjxFAjw4LKozRb2N3giMcZdG",
  "key7": "4V8nbKYvyLx87EwVMCpMHxpbLY5suCdrQao7x1aSoJcEELctfnmbd1LUgYhSV8suJ5LZNT5THMM9LUwsQC2JuPeB",
  "key8": "5MBGh5th5HqTkh43PjfFKtAjRabRdD2g8M9aKwFA6srYtzL7StjxcKQReFm1bmraDhCfbT11umgwKkomvFfMsbCz",
  "key9": "5X3LVhTZVy3wGuUFVm9Xbm4iG3FPcYpncgGieG3xbGgQjXPVXffun3GX1A7zBV2WYvDVt3d3BWFJL9bNR8t6vRTP",
  "key10": "4aZoyV7gZ6ckquSLamfWs2e7HbQJ7LSpavZVLT55e6gyff2LTPqJagBmdSE2LpGhpYvRZxwXvfZKkduUyqHD8x2k",
  "key11": "5395Ecm3RoW1FaJhYuUCnXosWwpxLU6ZD1kAufNNrQqWEiZYkesocCEjnx1AMi3DgU4YRQkC9tMK2JttavjLBs5r",
  "key12": "37f6m9qrifDT7dpPmBLjKW44qEp4fhviu4zQ9AnuctfGjMxyrTEXhj9fmMze1zPvR22jzbKfaVMcTBNAhf56pkcJ",
  "key13": "4yqkG1zuVZTr9RjrV83KSLpTWGGFZiCMXtn6Dt4CPZ6mCqxwTKvU3qsXAkRgnALiD4ofaqdCa5ztyEKDquEJLsjp",
  "key14": "2WBinn5weoqoSWynsoyZdTGE5TEcmFDgqM5x5mGDayjLscF1vVgDbnXcrDffkGUtAtyBKjAWFkhQNKNM1byFA7Yf",
  "key15": "5Zk6Ntp9Smvkdqj9xrR3j2h7TmDgCN5j9LgQZjDzuv36mavoZ4Q45QErwvD6S19gzMSZpJGMnFR4fNa9aRFiJeoT",
  "key16": "2jpM8D3y2VHRhQtCK6w3tSwqFrRcefpLUC8CqMiFMc6Byqy2cd5gvqoeH19rehd5TEVwNFGDMJ6CZ6WF3N242hKi",
  "key17": "scZRSxK2QjBsz4KAZSZneow2eMDNojMzB4Rygei1ZiA5rzeW5eHC5PpBm8a5FhUBYgKaho5cVThxhvdMgCDWwyy",
  "key18": "2jEfGm9iuxs9t3sNpWVkF3NxPLjRAuiXWYAb2in6QxVXABr8p351Q6KyyzMSoGQ5MR8usFVouMn95cwwEJALAmcG",
  "key19": "2MECPzsYoCNGA5SFddnG2MATgUjCnp3uoiyC1PbwVtsRzeazeP1fXjYzXi9z6QTNNouj8BkkDVbJJ6Fkornk681n",
  "key20": "2LFuWChqPMDybZMjgQWnEChzwDZtP6eEGhKeTSM2XUmN3ypsds8kNbGe4o3wXJNHPXfzoWKq9UKz4MXVpCxHkT5g",
  "key21": "4Woa4U2aQJGd2wkF5K4sT1SBSzcsiMycp8bmRHA8fUS7sSZ5Xj8mjSKJB4huPs7n3GDraGpY2CHcodHXUEXZuyj6",
  "key22": "3xLSRfBY3M94XgbjsuMNG5ZquamCCY3UyTvWMnpUUPYTVK2cDpBZNN8o3X8KMaVYaxLyC1bRQJPrgzX5fkFNiYmr",
  "key23": "uvP4LFyHt6Wx7jozaWbA6SLi9Hi4AKHgSJheghHLW1NDQRxDMX6dC9gxmb9ocbGnB6tnjixu5WaqutBrPv8MNpq",
  "key24": "4C85cjPjc6hHjSVRKMQqDfuUap3i4MnkY5gs8aTSaucJy1wtrTuDM8SPvX2eg9ApAYiSUYLhgfDvHikTfCDZKiWL",
  "key25": "otCrvvCoHf2CagSMZrzcur7vidkrj6RfVFZVENQM4PpuBUHbN78zWiTFkPtSA4DvdSHXGCwx5Guv1bmCtRzpmc8",
  "key26": "2J5M7MswLsrXAnmfqAVRMfaT6B1fg6dv3dKi8ehV8U9KsDJwEnrTzzXuc5MMS9aTAP1wx7f24gxCrsWiwNppyGWX",
  "key27": "28ksFLEjzeACcakZFq2NqS9jUMs8yGvC5cUgDRzAn4XdNxEwQgybDNfUs6QtVoQQJikPviUekaUwnWWWFrxaiuBh",
  "key28": "3DcQFxrLyRP6tkq6vz8ssUwWZuBbkHWM8Lj6yW2UrCT4KnezXVYLN5URHn4HZ43Y5CaKMgsVWb6nBatTucaX92dy",
  "key29": "5Cje4pz34QE8UUQz9P2bgQpsvHFE1p94btwFFjG782aHWGmCdzCja39UdZG9J2nQd9YE8X24TZHXXrTL4efeRLkz",
  "key30": "YnrZPPWSLHcBmbQHLcFsvAhsqit5kZDobpHYxsHmZYpbqRrtQkykGBS3sBYxS1FCgB9oNLLRyGuFRRiimgQ7ajE",
  "key31": "61hfcJ29nVjq7AoXodDKskQNMFEzXwfAJjN7CUMMdakQfGHz8vcqZAFZiKJp43fLHBu4gAQSdWkWyaExU6aRwHiZ",
  "key32": "xPXDoKq1gSahzrvmqE5XdXaWcv9JujFipRQYgx4aVVKwnFh9MyZ8xG7krwW5rzLzzTrhVUpTmXFC2RN4AdFhpny",
  "key33": "5HtC8eKe1fvi8HQmJ7vDNqJXgZERaafDBpsnNWqMLRDL2H7CjRx5DaUPg1mP7HQtD1jSgvPWpd25seP6vPfhV9yX",
  "key34": "5o4B7SEENiw8A4XCWjMNJWVjn9CWPzffiFDyciu9sTSKHnX9kQaGH9qQFyZrCHJSzqdJWVgCuKvWyLhnQjVKNnCm",
  "key35": "37K4YzhJ9TgYUDF6rbapywsF4ZG6Td7e9yXVb7QRxRgUwe8v7K76gwpXrrUrRomeBHz8XrHypCaiP1TeFYgbbk5v",
  "key36": "4PZrePQXbxjLmiFN2e38KyATAvnV44HuBiobYNVmHdtqWby54Gfzzctg2nMrZaC7JDFsLSzk4H4nYe1ijb9WPgpx"
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
