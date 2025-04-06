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
    "3sfMXkAnYuLw1L78fjpSuPxPfJkFtVWbVHLpdZH6XGDTq18oFoeztkyvVTNvWJ1DLBDig42jcDLPb1NkxHJUdZqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nsrSUoEhdbixEMpHbjsGJ2M6BAg82FnSByBSUJtg3So4Ti1TFpJGjA6xRwJX9qSw7QZUo6RbSE1fizzXbdH3dvV",
  "key1": "4YZHmaCFHLubG6pDwS8163w2LeEHQ72eQfNJ9f2shqbmtmZLWs6xeeEVhjMmkK11MdX5uM5KADvKrwbnWihe48R4",
  "key2": "2nShDLivcTbNL6dLdcsxsRxYiDmfvWXJQSA9fk7SntaPYjxaWHP5TfcSbnNZn2QY68Kb8V7eBMPjMr1rL9MJsQ2a",
  "key3": "6zwKgodssimBoARuVumnLdMjHo8vjSfZHpQB4TXhF5YpE8T1WajbPR58YQxwpQUsL5gV1KtK7HRCYnpR3x9N524",
  "key4": "2LcfK3Q3omgwt6GDQdfhLS5nh2fvZM73ENVUCC42bnxvgSgdQTujNHFNxnL6qtcrmQmGynFBurS6RVmpVsYb5RAD",
  "key5": "DyuERAnw9bcNrDactZdrZ1LET4V3z38e7URVT7RWF2Gufr8G65AR3jx9TpaP93JJHJs18FMJRtvCJTh9NPr947i",
  "key6": "5KwKW1qWy6b1gDCarW5sp8P4juJoCuje3u1wzb9VAaHtXb8gf9T9kYpxsmTyex2kYHkCDvdHrUhzz4Mcsf92jsC6",
  "key7": "3QXyttLPeK5YDUMjhuNNcwhKi8QWdWyrosqKRw7V1FLRc1o7arUD2WgA7TsKE7dq81EsRdCFqhWHXfzM2QSG29iq",
  "key8": "2JQJJBKeSBWLgQqTjwdWpF9EuRJRAV5JyDCe3yxYfSiwik7uEoSkJfGhyeU7qrzioXtA3KSEhvEUa9BHVRhiNgMZ",
  "key9": "3VVxiCniBgTKgxD5SCdy34GRsGQgS5PnSej3G43uVCsxngaF5JGZfJ1Lmi4Z2Mp4kKvf6J8Bb39cKsNnb87J3Yod",
  "key10": "4RZEv2QocsoY46VrUkhU7m96F1biRByBnjKZ4fZRHR3uT5HLkRJirp4yTEjaMo7uhbrdLTheZd3J1YBBznaKxFQV",
  "key11": "2D1r1sdXSsJbVF6n2GvEbzX7obrc99BfatjQyymBdbPN9sh1G5nfd3Sp73fKz7gfAMeKbbhrneNW4GR1kn4c5DMo",
  "key12": "3oB5j7pzkvKYNyHTQzb8EkU8R1rRsZBtxRKtz2dd2y6ZFAXe6mx4zCPYsKRWraVbKLxvyJtvusH1vSJJZifQGBbW",
  "key13": "4aZCW5g7yheZrfu3y5xV5tZYsbfZRg6hvm4oNRGxtAjRTwyUqJirTK5bAhcphddAcCk8vzyHtjsgBs7S7qUyEZYK",
  "key14": "3V8w3mCmT5zHqPuS2eg6w3rgmCy6EHWtWPWHLcn32GNfnehii3PyGKgHmNcEszxancXtjsvVJRwDvXnyYb1BwKvY",
  "key15": "dPiUUR5a5gjkph4hkv1yFoKWchsdD3BL8gvkNNffCJFe5M1ze8ewyzVgg2kka6XzhvkAMmGTc2Y1KFQK5X4LWHc",
  "key16": "3wMrB8BjZCHSsN7H8Fffr91BigWx74CDgqmvkaCvVUudUA1oounJdcFgutS7LuZpGa71hhW4CMwDGA9CCMaDjuAd",
  "key17": "4KPQ73QZjY5mNEczqcMbXiWSzxFpGMUSr7haDNkcnuD9RnwmVxCZ6yHMMsFsUMqHJYXkJqXabYj1Jcj9hGGLbnTE",
  "key18": "4nvwQ8QuEPRvbX1gdP3NiPzpPVfC35w7qCWzTewVgAonts9Fpz3f6PNSu5oGDXngGKkPnLrMkH1T3aFjvcHkgX6m",
  "key19": "36aTt3Zr8J1Ye748Yd9L8twPo63NKSYsf5NbDNnYQKeLBWboZgt3sJWdMxdgagD7UY6txANNygBodZmw7QHt8Q1",
  "key20": "4Sbrs4ku1fuMA5vKDiixJfVFibx7VSEd7VgwkdpjZAFRUtQjhND8rjAAb7SS7DhVpuyHzXR8AYmFbzu3AhJDguMA",
  "key21": "zuzzijjmzZrcj6XpjWyGDBKi4Zvs6LoZm3CCWhPQmR4pfwuhuReteUkmEWFcMjZ7a3M8JLBrPi95ShrzNYk16LL",
  "key22": "32znCTgqiZRopiCJKU3xw7H64UEvobWfbo8SXyZB49fyH4DR8SXoZPAgapQYmcS6gdoBmqpbggVEZE2b5rsv1UfM",
  "key23": "5hyAGR5Vwftna7GcsqZFQDzxPRJNWQbkcYFhk7s9Yeh5YX5G5B87ixexUwCgfB31ZaNJT2vhCkRsgWEbHapiEyoU",
  "key24": "5AcpXjYsQZe2C9L4Z76EfKTfJvw3YomoZ9KW51Mf8DURA6bHdCJEHLTEuvTow4gDPB1GNqfeEXd2MMv5uYNh7rdG",
  "key25": "3oNU6Bz78Da8pvSd2y9ZToPmDQSLRfYoAMTidjEf9wgXs9iwoDeooA3vWckGeQRgm3T6YUvwXJXW2S9twApTSumY",
  "key26": "5rzoisPqkQzHW7c2zQk9SnD23PfvWm5Cq3n641jBZ1Kt17k5zyXXDLV12czEBkr5LRZDudPXr617vDr6MKhX1YLb",
  "key27": "3Z4RefsCVQzn1yXA6CRrgyGNiJxaZsBxfHXLUyMGQ5dej2DYB7pGK1bvowCk7HJjBGPvNvDFdA6AqH1u3xhMhXkA",
  "key28": "5A8UBoAwDqnnzjLc8AMgyi9tGJHLppercwnf3VgELmWZfCyFfwtYWWtAowpUEdaZx5ffCNKNETL61jWJpXdM7d6Z",
  "key29": "4PmhDW8f665eGuGuFXMShgNjQ8wbjG4LXEEyUyrLQknQiwCt98JvicJMg81eEa4dmCcotwJ7LLp6tGZjQoopu9M1",
  "key30": "2VGTv29EVaAkiYDv8eDJF8ms8u31R9JC1qJ9oMPwf38TvQYjN3s2M5w1BF4zfPvi3oxPZmLEh7esGBbUq8yWDMqN",
  "key31": "3XeU63ncZwNrNQYPE4wKJrea8N7b1Em8NiH8fCuRGV4mhEvFa9yzVhYoyEivnxPFbSXsp14mtLkaXB6v2rnTqGzg",
  "key32": "5d5CQfMHH3QLr1jBs97khrKo4AzZEsjFbjVsxP3rwK2axrTApQaAZGppk9GYYgKpcBwzFnSb6tLtPCVNTq4rxRbE",
  "key33": "XcKNPSVoRpVC3tCUko9VEhmJUmjGvwuXAnZZtAorBWjdF2ZtqxxsjVYaPY8aUiSJou3ac64BjU6ZCfzfhsYdL34",
  "key34": "3BoS2bp4rh8xMHvdkDvojkAGzp8ZSKumXjGJ84gHyJit2BEWP5sDQcLmrJQEahkdvXLUpK19W4GVJ5Bcaay4WkEa",
  "key35": "2HS4aU7Sh9PHM5bqt7pZafqppzW57fFu1CUFcJGECF4fYgYHCpoPskGd1PNb26RwJmJdiwTWcEE6p26rBjjQnHYY",
  "key36": "3pRW7e53ZYmAnjfPxtV3CKqfuMNcmPphJUEmb63rAT5p1jTqVcRKvoybc4iwM12RxK48QJSQr8GZfTKqA5MwdzW7",
  "key37": "3RT44AJe8APWerbYvTYKWcoqW7CezUQ8viyTvXUiDzVznHzCMXF49YQSQBptESFUQeYWyd25LaKRHcfnE7674LPe",
  "key38": "rwLn13zvSrFxHxT1QqFTPb3WCZZL7GAaBsU4974FKxQynvsBDwCtZtKz5biiAPWQBjzHTCR5sx2rcupLym3xWh8",
  "key39": "5PqTh7EpoBhNMGL7JxJLQ9MMuzHNpKWJf4hpE2gRUkhN9Hv1rVqNZSyKhP2awXH1scKdwpzYvMhdw6oArR2Tu1PY",
  "key40": "4oZph4RQMTLzFxGhx8u1hiQC2QCbRAD7K69fDN828ycEN5ycR2BGAUaPMKLgm4uvirRkmzpDbwfdnGtvJ1mvuLM",
  "key41": "4XER9PTzhUZjSy4QLZwcKkvtwyLhDhxdEX7J1ZTjqtWFzqVZfANtxbEYoJSyhogUKU9BrPGK5iJcUGBE8qb9ah9R",
  "key42": "3jP4wY5wt12B78qFzM8XrrXTjXgrSLKLFPdXx6u4BDtWwia1H7BVAuuWT9seAdbrLDDHX2a5Vj6FXsQMNQtjuhtH",
  "key43": "5trFTV5vxuRwaGGjkUmbatLUAf4vrS5KjwVx4TyCy8YXjVC1qM4uZBT9hZZ6zz268ZeU7aoFYYmMMaXBkLuJhY1Y",
  "key44": "59a9cHBnNxJ1SkCVEfPy1HWHMihNiKM3ZV62CTNBvPzgLNE6a95hrAAEDgpS4rBpwbycNTBqPhauW2KwGQMBNCbE",
  "key45": "er3SaZwRdt4R2sJjeCrGSLrsLYahG2ebrBrLSrtrToPU26Sm4W4LmTbgAbvKxvEGH7N4JuLDmyPzZBW6rvJfTzm",
  "key46": "2Ub3QxPn8yaRyd8zf4VC6pahQBtafQnbQomKJusb16dpJ8AkVtMqQPWGwY3X7FSqJYYyBCcTnRCKUGFmwVjCbAoN",
  "key47": "3R169h5vtp3hjft3nB52zMiG3sGZtT57tvdcrTd9dVee8kSS4SmKHhXgSoDZcQ8mB6S11XY9WxZH7gNYSWdQ7psN"
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
