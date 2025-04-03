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
    "3KFx1aXZ1m6ehjCXNxVVN5CcRkCZ4S9geyaphbAG2K6LLfLbp15MpAsDK1qSBmJZJFMNKVsnUZnQPfZ6kkuYFs1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXpJiNGEMqaF5KFL6D7XusNKvqtuxhRqG979mJ2nfBEoixNbKNi7WYiYAJFa6sgJK3f5NLt2ZokKh2Eq8vqoCRT",
  "key1": "5piTFAt6Efnt9zSQyMajM6gXRHLo1W1FAioLYZgnSiLFyTXSe33mGyHPFJbpEHuDCRakJ9zxpFT1i8czLJDyE2Xa",
  "key2": "4pP4czWEKpZjPfEYBXdw74dMcQXVqd1UiY7phcoG5DLyWWm3SErZY3UwFjWCQiab14fcR7E1Z2BBZboWvpZChEqi",
  "key3": "2njfkvL56rSoAR8MtQqEFDu5BGpaZYYrSsEDw7rE4s8ubF36bWdHkwQAmFhfQ3AtbvLLQ7ZqwpCognnFCj5Aj2Ga",
  "key4": "3EEQfNNXykfCvCRvYNjKNneZFYj3tLizDiGYFBtx3tBuJph53d9Vr6XhCaoVVzL2s3KQDQETBPyo4awcqWtmuWZ3",
  "key5": "44wTY7YMrdjr87C1VDGsHGMqcSarTJGGBp2DCdEtdBiw14brWA5nQq6FQEvLdzFLHhg5pP7pWibeAC3KmxKjZeAp",
  "key6": "cCHSmaSgYrAeR8irohuJK9YWTUM8pizqD5vvgRzzRkb3kr94cYdCMcYQM36R8FuiGf88Bkof3zFrpzUW7cR4qVR",
  "key7": "mVoiY23WL9JiSvhBLLcqLWVmPTZepfz1vgxptvVB653TYhgwp4SeGCJqkVGSezXBsJvCrERAZWqeJcH5obhrfc3",
  "key8": "5XWyjBkz9aedZRApTRx263F2GAHMiNQKtdZ6cEpvpVwhMk8EdWDLhAEMRUwGXSmvT4onSMTBMSACqFyMrwhVzJzi",
  "key9": "2itgmPXR7K9yxF9NQRVrxP24utwdUCNY9NXyXpeqsxaU3cKnUhv9QP2ZzAQrgg711GorMXgg5jFWz7CTn96Z9rNi",
  "key10": "5CHeVc4v988wPo8hn7jZZSjQEAQVDp3iApqGWSY2f9batfAnfhCMdkkRDV64evq92R4jc5mvbhDMMeJECjoqUqMK",
  "key11": "4pLURYJrwj3FPm1exFcuTyjBzZ3P9LVKEWqc2E9knGknKQqHDL4F9wAGDZb65ZNdfNF2kNttYanQB2CESeJ8PYDw",
  "key12": "ryuiSxXu4hFraUtg7B8yNVmoRU8ckSsGVwcivy1UJfGLE1eb3uP2ZRaDgUWfEkrSTZ7AU83GYqjWdD32XXYbGm9",
  "key13": "47PDbcbBfrR9aSG2qeXWUpP4DZp6sS9oZRn6dxJpeM65cUvBU97wwGySLmKQfnHDdfgPCBScx9B12LHQTKtfgLYJ",
  "key14": "LaxdqzERtR8dSjgdRWAAt4tkX2XvXjpQEs8MufKAUB6xpZQw72JPj2Kow6YNpnKJWXdCGQk3WQQ1BFdSYdmLEhm",
  "key15": "21JFtKF7zAh5mq4LgV3efBzjrSJCUvn87fJLd9SzCeiMrnrc3KdUFtcjsNq2xWf1551p78phN8iZECAxzNSegaD6",
  "key16": "WmfmdEGko9iMtZWBr1K7qgGjTC9xFibrnMDRsR9SFSrrBz99X4s3AyMSD8LTS8D6SHXaENoDUVQM6Gn14F46xFm",
  "key17": "3Z2LNN4dh7oT88cGcKwFuQ3HBFTPuSGDmPJv7tt8KFztoSEJ5qC4qV9pgKThjDPeJfMGt459d1XEZw4m1QjTZHfo",
  "key18": "5ASkYhWEp695xjAojLc1FPAaLivryczD74tRPfC48QYVSKyokwfTWdyeMM3jDVzpUYhc3NgbZe8PhWy1NELhb9sy",
  "key19": "5nqCNQ2Nq7ys57d9Q7UHVrzcxMGTmsjWFityYz68aJZZiGqoKeK567ZGbTss4RYPFhLD9DcnxwwTwhpDq41xyJym",
  "key20": "3VAobJoBAvw93Jppy2ywasLnD7eRKQr1wWd16cjkZ3SrThnSnD44Fk2wUNJeDD9SY2Xd9i3diBddxpBSXvsjQGwi",
  "key21": "4JH3rPUXAXiXLsHhGr1pLfEFyd1H5e4i1EuMTs5AaSrroqrVPL3poK1HmoLiK2b9GAFEr7HHjxX8DRb3fuRPvZH7",
  "key22": "4HAgeXq2oLobBk3rL3vLEL1S6CLpB2wMDJikfYupyNMMh75eKUkg9zV8Ye5x4gWAKznYX8LwWxB3SD2tSzAdUDC1",
  "key23": "3kansUvvUXTsF4RCgXrPHGRy3xnM3rZV3QwtRqnNdL6L6NL2skWevBt8pGfFjtT7dm35CxwGQwDiLrjeWTojaPLW",
  "key24": "4hDajGYf22o8q7Z5xgf2RD4vxC57C6rWamh17rSW4EfqBhUNTmogTDC9kN9CavpARdqvnPSn112K8LPJKm3xvvHv",
  "key25": "2eJRdVVqBKqW4YDRfaAw9DdWfMMSBNiUhP1W2rxhjc4RowD9TYpifYw7tpMfNnJpyQ4uvoiN7Ve1PsEjTe3hhqWN",
  "key26": "4zovuYWRzYsvQp1QEwzC7wbrFt8NhqSPEBtuKa8AHZRGeovLpnnyJoLKQDk9cnB9zn3Zvhs5sCw6BkuLBthpiWm4",
  "key27": "2dJH8LrK7T7KgYd9QkFHzeNYFcFZ1ffCKZDKReJMG1aknqdMVQ7UUJcXHpWysVUERTV5rC8sFfbmcGnXpQuSCZhL",
  "key28": "2wci1thNyeV7ovVJcJg4GRF7JKhsqaj7mFDYxeE49NfvLYQjteMEFyEtiWiK5ACZ7bxuWTTZMpKgmTn6FC3193vm",
  "key29": "4W5ah5dt59yVBrojm7JpAzcNSUjTF7nwymZmUZyYBFX1GCb8CJFVN7NQaZctGZEaphYPkyFKASSePPQbMQtAyp29",
  "key30": "31qQu6DVE5Q5xZCNUWEvdK9B45jAZRZVrs1EhUnYYYpc6dDj8SDu1XyewdGDGT2CZT5k8c7DWfXVe1tN1WwR7eZS",
  "key31": "4s1X3XTyBCxK28BmBhHBdjqD3nTBttUEJCEfQzuwxj9VVrgRZhXNctC46Y46JJ1wLATHW6t9EgKTniF671qoAtVJ",
  "key32": "5epNFaK97Bx3Fn3tf2Ati7meEaqBsvU27zeR85TkYGq6M9bLA9RBGhkFqGbwytHoMMYeGAMj6KUcSweiftsEgTTP",
  "key33": "3MuHtj2UZiEMbQF1xUEH7qz7RLVvSfse8pfZyzsGhLBAzQp3CJTT6Z2pgmVBZVukSminu1a1onn7Ec6StiV3Bzgp",
  "key34": "HcCSgQ8BSSoHXVLxMg1LHVRy5dvR7p184bSMSPkD2Uo1AUZwb46R2faqmN1uW8aJXTeoaNfhHtgxr6wTvhpiVPQ",
  "key35": "492F1ycWQyNpsF8zPFVipi1ziQhq1CtQEiBgRjipEhmy9RmnPFv5CUeVibPykTSBYuwodA4iKFzS4ATVKTfj8EBp",
  "key36": "2FP51cVn353MzzTRi9HWjMnQ79FBNKQiN8UeR5jVDv81Ew9ziraiRdzeqbsbYAoHudKLSSfy1eMWZakexzTfn58u",
  "key37": "49HF4T6bZL5yaufKmAs6JNFuhYpkhENLWe4YyrPUDVmyMTtaRpiCaakj6XgJgiAwMBDhMbptCN2iNwLTaSZi6BAm",
  "key38": "i3YevZAzpAFauHEiWX1BfQrCS8jGHq88M4h9aXBEGMuYvbzA4GB7NXGjiTexpeQgGV3XjwgxYXwnAKfLE2fbHRN",
  "key39": "4Ln9uQENd9XQ42VTrGqvZKWX67bwZJV2xQCn22qx5GzbckWR5G9GZV8bVcgsfyktbKpadrXk6y3KLxjcoXmWHPzj",
  "key40": "5Ebgh7Tkq4Qa8WmfspWmzMcWiyMgMMMmghU5Mbbve5etc2PZYSNwgbQALKEgwa3YyKp8SLRHD1T1hHTFeh8ezjZR",
  "key41": "2cStUyUvnoLFuq1B6bKDKYbuabSCa9Ef9DGMVi1noKAJMKNzUze6arYDP1iwW4h21dYMmZf8sFGTSLzt8Ma5mEeD",
  "key42": "2HsS3iYTbfxtEDsxMrCq39PPDdYi3PcVT77LzEdDLWkUbrU9H8KD3teLtz9KHdX65DosB9ZckB1Jmgqh2oxugZ73",
  "key43": "4E3ZXUWBaxuX8Pyys5LNYzZAexVqJCRdPdK6ppgsNZ8RPJR3GUavJzqY8JrM53sTVH6LkJ5m7AgcBqTBEFrHCY6U",
  "key44": "2wJkG77d1Y6tdobdA99iWf6DR6y1jSxoJ2GdKae3kjxmSQi2ib2oFCdwuqvVKV6Z4GoE5dr4igFtPfZbgH12hSA7",
  "key45": "2QLTpaw2xgxkDV6t3n44s5FrutBQBPSRmFw1S732zYFsFCsV6d5LANzkBieM2VmRaCCy2HRAfxtpskmF1r5cASy3",
  "key46": "3otHiS8Tf1ntU7KN17MiGDiE3VS9hpzDGKeS7KsvAmSZU32P6Vq5h2BqfNYhSwmxL16xGCirNHRSyevErR51mi4W",
  "key47": "34fz6UZGvPqaX7qYqzgCuGqo8DWnDtyySkRwRTuCRSDmDTu3nnLL6TXnD5X8DBU9sh684ZA4jRvNdrzoPZPhbh9m"
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
