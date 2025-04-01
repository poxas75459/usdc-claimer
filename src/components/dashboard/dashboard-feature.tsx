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
    "3BekN5c2EJTYpraL5hJ4bBn3YMAfTHAbA8FZYkSUYXAb3bDL7uy1DKxdTWR7oFFm6Gx8NGLEsRVK9YwraQg2c3GN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kb6UEgEHrtZGYYFvfiyZygqPrAqTWwpe1HDALstWxSf5jZdUBnKw8sBm7yskY9WrW82msLnHRPkcze7VZ6kmjJC",
  "key1": "248wNMdjdwg9kt4v7vcGwC9sAk9V7iCzi4yQe1qLESuQ6s9AhxHH4SH8HefPC5zWsk7mqpa9FQuMkeNW3Lzb2mTb",
  "key2": "2XL3dcqTTdsQStJoDwaJHpxfWDbjLrvKVqPvrAxLcDke4bvZCVETXmnTd1u1w1o18p2CHwUSPozUevH6T6KqyCiv",
  "key3": "5oV4GEQ8Hs4CrZf9UietmqxwB6JVKKsuyoaubZAgZvwNZg65tRkzohcNYUuawNTJ5HXzyB3vTX8PLtAFUd2DVdKh",
  "key4": "4nTcyYXC5YFBxoYjhRyg5NaV7RZCQkC4VBC2eT3QPxofdDHqYn3w7PCTQERtTc8ytWcxdstAsyzh8RUaxrVZNJAK",
  "key5": "3uNX1fdoXq5dNTi99dh8kbWg1gRnS9wmVY1Csteyr9GVkCxRHChcCv2Zh7RwhQ4WmQRLbmpbr3HCeUiZxM5MVsP6",
  "key6": "4MaUCTAsZE18fLcaUi2tG3ASRDuLve27psi9jPWTsDzJpgJ323wWrhtxyDMZsN6zuKBVTm62RiCsyweRG86jWFw9",
  "key7": "3UEmdVCTn5V4MQyvqDyX6cJLpvuRYc6XPQ3nBcLxaWFAYUzPMdd124nHbFRErYvZfHBVbemX6jGWgPkKv4SNJZEw",
  "key8": "5jooAB5QXPFw16fF2YCUsaAQxrGEqTzJXEHwYJ7zyd8kWHAMPsd56yNqHQL6awzsga2WuaucwazY2ViGnhNhfuq1",
  "key9": "2chGG9XnzwBtGmKZPLWcdvLTdag2Eeys6A9vbfUqf1urXpJvsrG3XHKXnYnzc3UkJ9FcLQqKK2YGSWmgYNoPdhTB",
  "key10": "3eBi8igYgXCUPkAA4ViBSuJ4QiW5wNs3xmK3YBiiFGWnoigNudzHVdrQijKCNePwGvwn7qAgnGjJCzWcty8WWdeH",
  "key11": "2pdsau1d5JUPYGbVVQsupnhZV4nhDCQjeL5HyoU21A2WAD7495cdbeFXtujacc8hQESTQEW1WimsVvTd3RsAVPD7",
  "key12": "3k33fNzBF9cYtnUj4X5JGfsbN3jDrwmaomWySPbPAeEv7vEHCJTqCYxSDgnfF8P2fmCgA8azQHej5rBQXdkMaNAW",
  "key13": "5oLeUnfL3245D9Sy9MYt4yCre9ZGyeDptZR5fmfBCoAMeo3r349Vfcg6EuycEaW7uNFfcfzUebrrHLnNJys6Jo3H",
  "key14": "38RJhEEfS9vtJ7dwLS9UX7xNL9M5fTZvhAfhLE6k4BKbZMhomWgt85xkQZ8iLEpzGCkkgapPbsj2KtRMMXfKrcSR",
  "key15": "4TAFNEuPNM25TJFNJY8xSeFD3vx7RqkqCnvPc12AjXwKR7FWsH6gYkzYBpBiiqc9aj3f8uMmcreCw9SG98PYtERY",
  "key16": "4c6TdyuasogABFyz7MfRjAa6KjaGCsVFQiMPcdZXn4vWaVM7H3nZncNHo71sVXW4r2WWccDQEN367xyEEVyonWc",
  "key17": "4ZKT1qM4Y37YSma2fHKj4JhQumZsHr5ZnxF1jRMgDLohYimTT4uZ9tntVjoZdqse6WZDeN35pWdduwZVcGxTAvv1",
  "key18": "5oe6KdYpXGn7FwkVeFUcdLhrkbqViEz7MUC1xRDYUz3ZBa63xhf5WBYQhgDWZQGMZEJ16U9FJAKboGPCmdjmD4TX",
  "key19": "4wCzfMcKZdYSzLMvgnvMyB6wVRP8v12aPPqwhyyorqwxDmhxgxpgCiUc2uDGSY7PzBzfNvqJucNW1qoottUHGC4B",
  "key20": "3Cz4h87ZGXGVNUh5q1zDwDa6Yd6XutE35NggbBTBJ5PhJ2NTXvzsHEryMzAD7GsgGDzLRUDhY5mWkjggmiq1ADsc",
  "key21": "4KoKFfWyAjz4QEK4YZMjs52goQXY3AhZ83ShYUvmnaRQ6ANpTKFHaQdixbh7LcU8N47FstuMLCALJ4BNPd6sm3Ah",
  "key22": "3pWw3JEpTepUHtCJVaHJyNHXFMYEqC6xLcYwS5b4dp2mC7dMWRXDJP6BGenhxm6iFxg9CzBcJgdaPghG37orCFAf",
  "key23": "43NdSBhjg6QuBnMbCgr7e3LNN618AXQKg9JCXu7QCDXqPPsJdXHVct8xdpezyzEHndLasXmesQoqFD2rnLc8xqC",
  "key24": "5YDKapzcLBqBGxu29u8xkMjKZH9dFUhRqc9ME9bgyuHqeLpHrKdtn5gQR3cbRxFJdy6DWDbWx5JnDJkRzuoBEjWD",
  "key25": "2JkTVF1EdWMdA8GAoTKLEdeR34hGGAAMo3AdJnTuG32i5gWd1GLnUMLkcB98yxjGR4C1GRnNNmErZGZvMtX2KwZ1",
  "key26": "UgfQU4p9u3zoon5gynWThRK6MVEAM2vWfsm5U4qcBb9pxJJFpQkeoNoKrUuqsohcngfTFg4Eevtte5YDkFZAQhC",
  "key27": "4bDyWqonY1nxpP84iaH1QFmGrvsJUa7a3a347onaRAZmYvRfCG4j8RHMvrhSMiFtHRttghGP7ZKdkwih1WeGcaiV",
  "key28": "2NgaghcpLTPWo3zbYZZWXfKgtJSscxBTZRVUjs4nt6ccv2af4mKp2JiSXayvJ23cXKQtYcaHmDCdcP6dB8fdFfVp",
  "key29": "4Jp8rvkWxNvFhtzYixk9hazjkNhZb27PuwppowgTK35Yp8H3ivsHHEKi9MsgZuxh1BP3Pe1tE5JzEpZ5K3zzpyfM",
  "key30": "5sjSGrmzQMf4P7XLzCtp1wjqhNwdPcm3GvU1D7QsrDidCabehZZ7pSqcX4KnwgiXDGPVFPDXsads1kxxcx5y1fkh",
  "key31": "4hEc4jgHN6WWq9i7wyi4e3LZqJTomPuhtoGLSThV8zLzejdV3Vg4aCeSXkbYaR5idJRacXFPVXsHF1kVbRKe2SSf",
  "key32": "VoP5MwrxuPasDenzZ5p3zo6nwcsDsVgJavGT54hsieja7QhfP4HPwwQujcYtyNZXsBRnDvjczfSEJRd1ewABhKK",
  "key33": "5zGCfLYkmQ4wUpukZEJDeZxD9dGkdQ6JqZ733BrwEPQTS5aLbgxmBnjHvsgcUxkVNNYypvBZeCFKzqgLTSJExnJE",
  "key34": "2dFSqubLFBhhYmfCxBFvzaCbGbsGqqX2ZWXj8a7sqhgpg3GR6PTcn8Y3RSNehCYby7B2CpVkpC8qb3RMKwu7WRZH",
  "key35": "5Rfh3cUd7uccBAPdvsFQyYQRJqJF43Qf5DdNDuzGRpKWojyBKhEyTNoFHtPRGoTj7AJ7dJfRg35vQgNT6cnBn9De",
  "key36": "3AQwmWkpeiMcafrzusTrcCJZsdBJWXBA3Mzc9Pj4otyjLpTwy1ThK7kFne2bF7tFkLvJ7vFX7U3GCkrVrirUo6fi",
  "key37": "3NYtucQDas7n2EUyMhtppcboEdDUgM5fREKMvpXyc3GipWzBaKsqaQNwehtgXFAjmrme4L59s7MaPrmvdiLvtmwM"
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
