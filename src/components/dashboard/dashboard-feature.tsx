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
    "wH9Y6pcQrjvNMEuFK1hMomHgqXCTYxPNo6qnXJXoAfr1FvYnaHxfdfLC5uN5f4fckex8rvNfiCDaLSBVLQwLKkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yANrZs5Xgf4pExaAGQVmgzimg1S8pEne95kSgg39JtkmRdfTYKSNdAc3NwF7z8ckKztFzacUbpxAvhB2Zb8K8KA",
  "key1": "3vuCYVtobfEBaqpWSJWVk2atfVcJsAg9rakbd4JXP3Z95wJDiqDE1fXyvqXBK7V5q53K7AWDGruqym4mVmm3S4YL",
  "key2": "4PyzZnRXfuizDxpY2B616hSSyiPuYeFghbd2QnTmucmHiMy6o6Szy6QYCigZzmsfqDcMHb1P4LUGpDA6dHgPASvp",
  "key3": "49MgDt6mrWW9GoErtxztHsHS44zNr7MsuHz73ZoXWtZaX33fazNqTn6Rg2UF75s7SQz83hXxXc3p56yCQApDAneF",
  "key4": "2wEBWAzujcnCgkGrsSyS5YEB915686cPT3AUQTtcCX2KuWtdb25J8cNstXqYr3XTWSvys1Ez5d5kSJ48z5fFqN9z",
  "key5": "4ChqBQR7VncYV147jq13VBNUT7gH7rqtZzWX1Xj1xhgvF7XsoPyrfueb4Du5eX9dAfetrZidf5u3m7u6mWqCkTUm",
  "key6": "3yxCoAoExPRreAxz1DLhxTjZ2NnxVnhyAVoSa77HQvCdL5GcmgJYjLhdUPJA19Rs11daQSF717cKpTYorrQgp6VH",
  "key7": "2kqVLrXYehXiUr4z2irParrSFszqc5u3bHxThtSF1MkLYoNBRBmV1ButkNXE6rBzGNXNjrMbSmAhsDoPqk4etkeS",
  "key8": "42CZ49Zxvs3hRxgfDgk3ULYvDEuJdiwGA9gnwNdgCJxzoubi2k8ExCaba3KhKuiQ2hLqx3cFknS1eULm8xZbgHg9",
  "key9": "Vn3eZzreMQjyzfitPrJeqv9xnx75M5jFYhPfJnuNdyeuBL9GvzivpeTapsHD3GkDCCK7KKr9sNA2eGrRNMGXGCQ",
  "key10": "3kDu9Q4dMRryB62XFv2P5SKz2t2DuZ2of7AcWhnkKBRgEkUuztK9AjoRjH8ApfkJTAbrB1y34iF5sgXX6Ky8nxBS",
  "key11": "5hhd4waaixEwGcCgF9eTnmnXMfs1v6RWEAtkZZ6p8hVvPZ8VmbFXJevkmVhQvWy2SbL3uW7zmQgaYR3jb3uSJmrj",
  "key12": "cHeqN4ZsXkWCurEeb2aszeWpBQejA55Ea8EdS6NgLN3MZ83FT1Qw8ZwpNXL1wBbMxrgXXFZk7oB5oYiUHrmnryV",
  "key13": "F843t1wCaasCk9xtn6ytHn4uhj7c8WDVv2LE4E2UeffUQyyAvZb5c6JYAdRJJur1yEcHiYkWhMuDfjEFxV5Kv35",
  "key14": "3jQFXgeym2fW6aodhJjwb73U3kj7YRUKvYpPFsZzVcVcM89dAFjKVWEyu7HCvwkyMf6FWHqnvNZVddrBySwpcU3b",
  "key15": "22M18DP6cddQR6Gguov3GgkUSWBBWbLmf6enMicXpAFBUeczeWExgS9dKzrcEregWHHmAoLWPqDTMhmSZSzjS6u6",
  "key16": "28cX9YWZ6FN2La5LVFr9YSgQLhddh6rmShY8oztojdYGtehCnsCqYua2gcfLZV6Ybw5vmjfNirCWKjb2gc7crvSZ",
  "key17": "5GtisBTG5w3BHFGGMerLJequarKfp1T3yj4q2YRk6puwYLMasWDQtn2zpcFQUvrRLn4TsmngvziDDU3bUr9ssM9p",
  "key18": "2vwc7GG5viFc8e1ypgZreB89ywNFNo9HNDwLjyMTC6JmJurZ4zA47ZYsuRDT1o5ceAp6euHDcZLuwr9KJDrTX8BU",
  "key19": "96HJdjeUZpRwNJ6NLgcfV7XgehLRUU5UuRLzAjFpNXx2HRJ6nsD4Wma3Ge3EoxkB9xG4VWS7qwXHm5CNBhmccLQ",
  "key20": "4Mqn3aNQcuvu7sh3q8AatojdHMDN4B1sZKig21qsj2rM2ZuMgtV8hJvesre5TwYvgjmh9yQvJ2sjjW8qBZMqRpGP",
  "key21": "67o5kkAHnpHoqcGQcfDK6F9iGUhfnjsEd4D4NUBHUif6wZNXX9EdiU4DoDQjLhLzRw13ipWMraepunkLHMtRpxND",
  "key22": "4oXkrUK6ppfFdfM2pcHnmgDwRAQJdVYYruq2TVEHiVFjKvMpd5rCHDNQkfbibvNYWwemNA9T4MEyha9p7Fgd4tCw",
  "key23": "4Xdt74eyVhWRSccV9ZanG8hwRyzTLhCyJDNcrL1YMgz5ApaDK2YVDHB2eBWUVntn3xhcvTvCRtwKrVnYc5otCwV6",
  "key24": "4ugYAnt8LMu7121tgPZn1Wccn5pAa2pb8rfVWeDEERuojujZ7wUbywqwHsZf7ZW4DMASFNbcCXnZzz94VRXUMiWM",
  "key25": "5RxgANzWAPFSYBWh7aibweeKERf9zM32mCTvEU2KNtDE2nXDpTMoRH3DAeHkXn8KCVd8QsutuenzAyPFk2qKQBXw",
  "key26": "41YsUeMALTFyivwVt6uEcuRBRQFzJ4wHKhzsWhVDv1EgYadW25Turtd9U1Z8M7pimpD9dfAvCxAmxJBVszdGCtjY",
  "key27": "w1aBe168U6Gzdpk2ajJ45o9p3CQNEgw4jvutE1QKxam2ueZN2uYqJfdzAZ5JRcShxrex61oCieMeGChDBVEnk9j",
  "key28": "2PJwzUjv7bwbggDtwMrjqpeZNUKNvjxrTuU4sX2ZTQXySvmHsDnANnMueeRsVfL8vm9NTVLmrLvb7S3UhXD7oMe3",
  "key29": "4paBxQP9g7S9LqxDwSDek8hWfGbPwLLrqGQPzExLgywEZMGjRirc1ib58WNZk5QaqZDCcct8c4YPwzE6bUhGn663",
  "key30": "5zidxWXZMxvXD2rMsvTXE3YNddwbJUrsFn21XWHL8HBumJiVB2hVeu2cdP1Fa5L5jQBf7zvgbZP1FuXsD1355H57",
  "key31": "4vqPGqNe9diMw1pyi9WY6ZeQ8nVUmri4DocuMjPsW6RtrT1eN1JhJvGVpQH44eL6oNKNryrfXiRUzEWJN8zqiR2P",
  "key32": "5Yp51VkxYUduC4PKQ8cceDde28MFUpmcPX2HD2H5FWKw1ckp7dSMFQUf3QiPw2Jb3EuhL8Q7en4uLW8QjFyBdqkS",
  "key33": "2vMSEhJGokDzuRdXad7VF5rmZwHZVZScGKoQPeqCVmqaZpZ7td3Xq5tWk2JPRA6i3nKPT6UHF3WMddUpYiYBhH4z",
  "key34": "3CEZgonVRenJ3uAeBBJyLcT19nYinZ8GoscFHfRtfXQxqsuWS8sG8tejtKZjER8EFh3YwQAb2WwHTruHYjctXrdy",
  "key35": "23F1cLkQdwN7pdmmbur7oAWYFpjG9jDkqGkz3Egu8KfrqCHWg5f5C5NMshcGQWBmmisQr4NKFQtaZ26esdGkuxqi",
  "key36": "HLA9KAEUr25dnFLEGd7DfoCcxZjYDCT8YWVWpxeYoSNYqWiaJxrDZqAPep8E9BVhhWWtrCnrxsGx3Ej1FAVaHjT",
  "key37": "3pK2E4sAm6DfFpwwz9XtXXmBvRA47CsVnBqrFAGjpLGTFVLTsiiAz3VvYvNRcod5P6YTdtU3Qtz4MX81RT1mzN4f",
  "key38": "3wha2gfVJD9YKfrHMGRZGrvTxaGYkGpFtEJb3znXm5vip437u7bio3x2RHsPNx4DJMmFjZ8yu4d6szFVSukLxgDM",
  "key39": "28ArvHTxcLesf1Etg9vigtzqotenVzUxB3yvwNEA32XGn8UoY7rkPPvARU2UuXGN76T4gPDN5EXQ6sRUU31sjePJ",
  "key40": "3uLzqPLyYgsRgCV1Dq5bUbuBn3ugNtGD6DsyKVZGk7YwRd7yG773nuqapG2PHUuBBjEq4gjeeeBXtewGjRLHjeFJ",
  "key41": "5U93vKAf7ZEqFkBCyG7fPRspSUZSGA8sfjtSuzQsnSibwCG9hSNhj7CjTY5f3pTcSrPPKDrWc4uDJbjurxgeFFGU",
  "key42": "2KoKyeNdWtJZddoWWDGf2CLhW1YWiKfyBRG8Sa4SfvaUgfGVudqYwKaWu4BhzQwkyTv3b5B56B27zwfX557qJmcj",
  "key43": "5xJZTuUALiuqpEq8XgRwHd2B7gqfa1GrHDMWQ7HwzPA6YpDz4YyHawttTyLK4dxi6XGdfT4F7apef8g5H4TeYAnB",
  "key44": "pzmrypUuy17b8H6oMdfv2Q3pucE7qiGg2SaTmrUvi7JXKK8UxtBdhBxDa4DdRKpDNCu3WXTqNrkgkVsvMhHZP29",
  "key45": "p6s47eYGUPaJfjs2RCEpLsXbJbcmyZeCnPNNF1MeTL5sHvXSJaASsFEL36aYATB69b5cpRTCxgPWpaEUt3dncF5",
  "key46": "C26DG5NGvubU6rStJ95Ceam1LoHisxkxGcDn4Vu8WRzZBaRpbDSW1TETfm9SWUZSDdP9dxDycp9d6Nmi94jDZWx",
  "key47": "3v8PD3rgn1ynM3UpuxUiMikrk797M9D37uJRWJxHqSHdcYC3b9PyAtZvGL94AgbaHafk6SfbLbkrrnva8YPUjYW6",
  "key48": "3M8dF9nBJTHUuVHELyoHrzYCfct9fCKpoGNjpbSkxdP5mnuRy5pHVhSfH6yjzekxEW5cBLA4LGmFwDAwjBqqPQY1",
  "key49": "5Q9PCJrAYumFYxJ1id97sZVM9HaJG71V55t4XLduaXtXkDsYegWgvD5rUFs9ApjkLwUb5ncVGB8iZs4yDb5biUYg"
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
