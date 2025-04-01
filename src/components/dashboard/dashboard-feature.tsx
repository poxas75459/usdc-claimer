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
    "295UPAxZa8HbXiTJt419JFa12EL3KmyR99j8yovcbuJq2kPcZjC66NgDgf7MZYHHAEx7Nb8oSQEdpiSt27aWofFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sawE5rz4GjPxCUBpCZvzDGivPX6DyrLULxH6g6hdYwuRQELtxk1sUAXVwiuASFPvNTKqh4Unv4WEtYQss81ijDc",
  "key1": "3vuaAueMyb7QQjLDjwTDrTYpjpGA6qQQTqbmUg92FoZQ7Udwfrfb6URMsWqCLuqXmBpWstmmLpAgr7zgXpwR7Ehx",
  "key2": "QxJkxn7AFy9Wkk7GMahqasMmrq7zH64ihJHYq4QPCG2KsMQts9exeMsFPYmeAKYvfPoh4vHBBmGaR2SKNAs2fhU",
  "key3": "2mYGddxekYtTsQxAanNphGdrxywtpdiQPRYcHMLmvzVebQhcRL7Wd1KF63J25R9XvjWLsyeJshrbB3BBwLQRH1jn",
  "key4": "rsdPdANmijxTZHisTWnU26rmaoHpkrbSotMzB4W6Fhpah3RfhvBYTamTKyLLvnzPSZhXG8PcE2jXeNWDMR3JZrj",
  "key5": "2XL85hoLfN5NTSHZoz7i6YU2GVsLYJDs1zMCENeJKvJw3bhfGV9FjKMWa4DbJZvbFC4iRpVJhuUKV4Td1mSG425w",
  "key6": "2ecUTa3ccoMjqzBrYqUcBysJimH3ubfuTS18uYe7EwNwiNfK82RqepDGw7LZK9R138PEZ7K7nLh3H4tkg9hVXv7K",
  "key7": "3K2ubt2qtQ1Wh1CfuSHjEPsMmjNkeExv83Jo2bHjoJMbu7bjdrHHE83Y4sCuP7tBtJry5GCaBj9bwMp6tCb2EqyC",
  "key8": "2nxtVTKHKCUeThRmnoWx2jjWAGj3znHg8TdE6WCAUWnKZdR4SD1CF8rQ4XX3i81nPN7rSx6G98X19e7nCjnLSG9M",
  "key9": "5LnAD7jGNY82K831AYpLdoLtfr5ABSkh6QY47Bd9opPfmv1ZuTC2Rwy9q7JYbPUyHj1D2X6unwmHruwTgJYnUHtW",
  "key10": "DcXZ3MJ8j7iKgHPmhuHBYVk7PMee2V4ksR4XrhnLTaSqHYggw2G1ne6R5ZT6HosZMstvLSjjexxnZCoGRRBvdyK",
  "key11": "33o59RJyHUbBVjL3bjtLBfqvPiWBSbJner7isE7EqKU3iF7iP9k6jC95SHxBCUidEdktAgPSKFohXHa7V1cgBQvi",
  "key12": "2FXDgTZqT5MoMbmG3KuMFhSvLfnMsNH3fa7FqLDH3ERWSEMG1QkAVn1bLu6dypvaeEGLddUTtUV9sceAoH3TL5YR",
  "key13": "3MKtZPrzGSVsn4QfjtxRHmpcbf2KgbRz7ngTh3MTa7PqHqADepzvHUSq3vkxLBCH5mHp7A22V3eiVwAF75oqTfFy",
  "key14": "4REe2tDiz6hKnqDGj6vb6RvYcBZJCAhJWxM9kVb4eyLT6xcuMjoUvJmxUBenREnpFh1pN9ZHWP4smU6TXYRxkW46",
  "key15": "3eiA4Nor2fGALuvi3GKfvdPMXs8xDCcyzhsZLPNrftfWFBvQVUgbgRNdPiSoPzJhjJc583vDCnkEjaiHvgjUtWRi",
  "key16": "3MtXP6LHxJpwxXzBMwa3Y8wyhHvetJLgQ4wbiCtX3p9gVzcxNJYngYKx5iuwzg9RmKK1rYkM2obg2zAh8W43GQtz",
  "key17": "2Kr5TmQbFVqMp8enY8vFgknyA3teGaWW7ExjCPQ743XoiF5DrLrZ567puYLECepwBf7Y7avkMzBXt18Xr6UoiFKB",
  "key18": "2Ngzwc9LxoBwbTHtn21q2QB9a3VrCKM1Vp9TXKPFvsftCBuy41J5cvroeK65ACXvySf8GFRKBZaKHBkKZgH2wwRK",
  "key19": "4ccLT9gNaGKL37Pb6yZRmLy9e8PG71MUWkKp1SbwpCBzQ9yYLNUUjJrzfbkNATbKsL5cMQCZ6mz3tmex2PxTXmP3",
  "key20": "3dyqkvbGCpdAa49TftHaw3ptg9MNj1A3JDR4hahwbaEhgq26apq1dsz4JdLtV2wMBSVEj274K8PvXDcPUBMVjAtq",
  "key21": "58DaCNYkD83wMB3CsNrB5rqBq4tNyNcMecnN5VbB988mb3KJTS4EVsMKPEtvMpoXAAUJmEM21ZFgC1XUCKbP2jAn",
  "key22": "4FN7ZNsKCKzraYFzxGiTxMFXVxgroakR34a2RUqtaUcfbRVCMMrxzjN1P9Qss6Tio5ufmwuDF4hXcbcZUkKw59Gp",
  "key23": "7Zvcym2NcnzVNPHCrqNLEdGMhrS3hS71Bj7RhcnJNvfR3X9Ba5bMVkcNhu9Hge2jcdsQAq4rUxjABoctKX44shm",
  "key24": "2BqKv64PrdoupAuqmcY5HoZKBDisfU8MpfyDZLBdVfS8cBz3ZBrcRYgoHZ8vfvKiJ9JPr28iVzVfV5HiawJfannx",
  "key25": "4aERY4bV8euMAP9nz2dGLvcGhYEqcnrLNm6mwsoVoRAe48i1LfWju9RFQ3yYVjnw7mKWKUSvEzDzAzSg6J3N73a8",
  "key26": "4s9ogEL9kQxwT4Vx2CEwifmbvariUBCGzWvDkcLwS8Fnuu7VXAo68b8n8f4UxJYRfgeiLvsXBeMRvGNmRRjkZznR",
  "key27": "bmvVa3aTCWPUmREJHwPRrNJ23NphZzGUW3SCMf2tD3fjSxncCcxsKhUr47dgN29SL1THCyJxDhFxjsoh5iHAUgk",
  "key28": "4SsLmKQksMo1ryT6ZPh9QbiQebRkcKngeCg9bQ4XQUVeeJehDvoDvrFawXZ5EnYKvFhJWnibZSJQb4yMZDsCxLYP",
  "key29": "4WtRJ4SxUEuqYzKGrkQoMny7CSv669og5yzABsGBmLsNV22bWsaetWhGvzZ3Y8hb5iWkV7G66rwPtKKtkVhrF8sN",
  "key30": "tRXSjRd4WbXQznBRTkjr1HvtsG8SXBC8dEYd4yAq7DazgkuWvbLbVJgMxoCJMjY3k3oVzEyb7LHgKKhre6XMmRF",
  "key31": "cEqW9JwVUyvzyAqBgp8EazUn5zP9EmjojJVwvMhgxQ7iL6y65BnPnZMfA8cvrvYz7QfGvninn4LwXmnndt5LECm",
  "key32": "9mdjE9GDahpHzxWVTSUbfBPboMtCnjegPeuESYoYv4WyTNeiYuVhphAfK4KcKGnAkCQfm4gvVtCmnBEknCWeW4u",
  "key33": "3nmv54BTtusataZ7dkhgXe6vqX8eWyVUuAnjJAzNzXkiqABr7nnSwuzofKcEkiEzTDDNmuf9KP3Az8UxJLdRoXXV",
  "key34": "2e7tcFfZxFkKEjCvfuiV6n2Xnn11zRjWQjCpWG3MML8ksSbqrfXLJTdWAMpwMctFcsGok2pCSZmznx2yFcc2JW9Z",
  "key35": "g1igxZBb8todV8ChsFkPbVUuh95mTx45717Cumzvs5bm2GpguafbwAgqSHzk7KmunK9X4Jszpi3CiP76mK82QZU",
  "key36": "5jb1gBWGcGyU3drZtN5jgZ8SkKe1kB7FnGKdKBAZTw48BgfjfjxzPpqPtLB9tZgNNhU3S9KM56JfCheyUNmxcTYi",
  "key37": "49nvGAMnFS23FqwHt8B789YZYfnB9UN9e2MYNYR3hZo8xA3voHEvqK7EsK4CGBW9cH1Mo2rLUGW7bTqhZAWiq6Nf",
  "key38": "3eejkUaV7jzW26MwPy1Rx5UozwYhBmGgAEcJ4H2eKi11H26Shw6qPfXjRtDEoACJGqfiiY1xSDafYyQziov8F1Gp"
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
