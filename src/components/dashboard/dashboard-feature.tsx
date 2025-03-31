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
    "4izuvVLZC1LKC3PrH4oZY4rLE5gB6tDq4asw5eRyasNPDJfPkNMnzHdAkCima3gs7MJWxrW4mS1WE5YvtsuyFnur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhVEgpADD2xPs8CDdVLgU8p2x4diyhLnzsfTHWUAUj8HoVjoiQFvmmf4b2Z9D8VgTJmw333f2UYnHtqJQqrcKEu",
  "key1": "4cbYPgDdi5Ww2qpzUAVChwjpzCEH9Xw75MnrsaphgdDXPS8A3apFfHWm883qpXRdcPSQUADJE1pd9dUMgVwyht8b",
  "key2": "2BRrDbiHGH2iq8iXhscVofhq3fmHxN1yjjYwY1byJJBiNM47hr8FpF9q9BLEybSgkt37o4KhXwHe8GgF78U7ukF5",
  "key3": "58NgGKaZoBdgExVTj47mBMTGVVUjQR5nVq2KJd7PGZ7LFHDJNfuWpfYfu2kcpMj2qA2x5nZKQS1quQwoZg41hXgh",
  "key4": "37VNq2n6qymUQTnjv9uGCxdfWkiR6PGFAM8w18Jv3ueonfNHv823sbwugrhPFkeA6CiZyDtsLAJPxQkSQkstXiJq",
  "key5": "2sVop42gxcx7gBRzxCByGEyVxbET5nd3Fp8PpibzyiW6b3qGrC2eM2T2MWdjsQBV8mvyobyBaP3AJSt8QhvYn76o",
  "key6": "31fCQ7861huJChBwk9KaZvrxucWQ7trgqtkBezfoK6H1TnsYMxRagxhYrCMHJCE6X8XvS3kSTaQemRVqC8ELcmFP",
  "key7": "fBKeU58toSBQqmhPrP2XWGVfyYPtwhU7mhwbaT1eaz2M9JvcLG8LrqibXk2bFgGpvzfJU3kLxrHUPAazBrG5vUe",
  "key8": "WHCSw9jwPmhHL1LrqUGBv6MPjGhvktCm9fiqDRxQ9zSp16CivhGwQyqFLF9gx3yNQn1car3bheDvr1ufb5gGJ93",
  "key9": "3wKBGNi8YCmftafQxXkJLstbY1ohSCt7XHnSxVfQACsixygaardhP1GroMPPa96BzCJDQQKpd3HyUGrTDwu3kojc",
  "key10": "2CEKkngURxHPxqZMugsD5o994tAPP31yu4b5EeAkEs9JFsHdYVgtY3jk7RJYMpQS9vJoPCjMouxfmp2WM7wzyzAu",
  "key11": "NyGbkBQ24oNYLPVYPUd1kx1JXfiB8KRH8mBiboDTxuJVtbX5rV1ShmjFnDVib58gCbZNqGNESQRpLrCgqfFM3FJ",
  "key12": "5r4T5EzheqfUJK8FufRerVXfNy6tW24U7jo9zUKr9JMPMXeNTJngoDhE92gx8L8MhNvgMVBYR1z76d3A6DB6CCzm",
  "key13": "8nvMCHdvCU691BGK9v6A7b4CtafqXA5LdesNoPj2Z1yGAwwbrQXLeG9hCmA7YPZruxy5rXyxYEjAVKPeyKuTnjM",
  "key14": "5HXLiEiDzJCPNp87Ys7zxXwtLvosErJJ8oReGHm23SJDvzYWCqdCbJz4iBTpPz3LuMg87m9tGyMgm6cdHBuwfhXk",
  "key15": "5MupnWAB35w7KAvEDemCGk6NWaNQC4fZJTqdzGuSBpo2cgwtWhEtmdYaJ1Y2vPF6qDcgMNByv1hALzkZX8PmAR1D",
  "key16": "3RcoGvn7CUTkE6PWeGXkTF6ht7QiLtcZFXYR4z6oXq2YCD1WrGqJdcfrVx8p6dWRSwhPS8j111168GmxgK1mxdoU",
  "key17": "2XWZRSxQnw1NbweQ2QZYHrU9SSAgrJ4shrjdsF5KjfSYtu7u8Xuh3akdYKf1qUj85pibdqRdY8egKoyrCmuer4W7",
  "key18": "5CB45Bw535S3C6Com1Jh8EyPfKgr3sS7QvCshGevtE1pxSGZvoNbppVP1xuui8dQK6Fkwa5BzEVdCucd6E8Hpdx1",
  "key19": "4psFQU6tFP47ps46GtneEkaWovW4rs85S2zociHQbetC1kYPM9magY32yLBur8HtgLXDRki55UiDvKqjmacK3d15",
  "key20": "u7rujjStoMh9N1BefqVQJj4viDBxaDfaPUiEr1aoEe4SpaFAkTG8VVZqTk7vPSStcxhGTrEsMtGsaKjLfDFfoK9",
  "key21": "45SUp87BjPEaBSZWEUHQYdgQ35vxzqeEpZ2nDbtgfjRgCp1Y95CR2BHWcMz7HmLpNwsT5RGuR6mFhmK3vdVMTY6h",
  "key22": "4cCzWRmbWEAphru3MYxFXLJ8kbX1r5zcYTA2ZUS1KAciSz98ZZfeCmjNA7eJKGKGYC6apLN7HJv4LJGN2nhJJ95e",
  "key23": "37sQYJcVUJksAZRdH5sDNkdfAVwE21uwBhyexHE4fDb3yjXBgFsD4rMFHFGWdW4RYARKyB5QM59PMgPt4F8uzB4C",
  "key24": "4MUmSSPkVbwxbEnEA7i1QUSmDhv6ySTfucEKj2t14M4Es8fVafmJ1uj8p1utSqJUVcaXwDq48tusvASFci7P6rx5",
  "key25": "3VeDC4xsGsc3pZZUKzTCs8aphFqSHMQroSssDg2wfJNfJistresVqoTsfQvHLKVLbVPUvAsxPDu2u1JzHhiHKKCn",
  "key26": "3mGKjLtwCeFst7UmxDiykA9jPsLz959qyH6DbgPrL2WHfvy9KC4D1oKKUWv7w8dxaEXDwrGaF57MeYtjU9rLqsn3",
  "key27": "2xpMV9hFY5wvx4FWfQfpCYZK9497RpKEf6tyAt8Hzjii5tZXGHy3jnuPLNyWcKMn7uW8vR8qUmTMXcoNCjgSqqna",
  "key28": "33Akinc3NoQBy6sN8zASakGgcdJoK6RAUkBZYhrPaMuandWvGoNiUhGMRg6W9LKABfSSZkJatDyhfqPYcmdA4QdZ",
  "key29": "4rMQ6Fypk6mstjTWvhKvui1H4emTyEd8UQATt25fUPvS4nWFaRJNPGo39oqWpj4TuVxDE2ouJpQZhbWoaoL27rC2",
  "key30": "3d1YuwGRGBjXHBugG5sZ4BHhWTJVWtwx5Hw5ax1GJQRL24PZ3RSGQ74Quy59ChF3sVrFY5AK6EXNPkkRqaauEGSu",
  "key31": "2Ggrrw3P9Rjp4T9Qp3TgAkgE1spJivxBbGUesog3pe2WZWKYj6QTSDQ6CmPeH1nMec18sFNV4TwAFrazVaDoRAqp",
  "key32": "4QLSfXJfeHoTPPjBHXWybu9c2TyhwcwZ6yreBE5XeskSWfqYHkaHHuN8W6wSrW4kqS7awXhaXodwFirBRNUd3C2H",
  "key33": "3B9b1WEJFXKHdHrTgWpTXVoGXC8zzWhJNAEJ25M8jUNMvKtymXQinQxbpaBiVojswghbEZcMsnvjxBCGURkMXYwP",
  "key34": "BFqZr4yWBpZjiMaCBg3wiz3MU4tPeS7MNUBVvQ6MYWDQEVpdhUc7bBXteFWtjgkBC5f28ZVjjxWuzAVMkzxriyP",
  "key35": "59BwQbHYEv5TaQ5HxJz5U8hAw1UPHag2oSictAHgp3ZkVXqUag9BCjiMMRBAJKBotGhkq26pvtNZ5BigQ5r5x2Ni",
  "key36": "CLaPu8YeaCDbJnAjUYGUwB1mvMhFknG3GGZvDa2Agew2ztXxNAFho5aoAiLEey6TQP1dpBMkSszyhh11LivozH7",
  "key37": "4EG3NvSk9pG6KPp2bAGREsSaAzfzwcus5kHntX6kLQTwJAQbmVYeZvUyTVP9yUi29baKfjGnzwDdzJvHN1iboSqU",
  "key38": "3zy4dBuAuqF13YiNWqZ9Nih7ERq2yMi5ZYZpiQM8hr24QpEvULQgUFHqePYuRLzjyfUHvk6du98AqWBCqizUmpp1",
  "key39": "4pcRgHAfiaTJRWDkch4Qd3KV2Z5GBDhqQKM9SETnKxhYJkVfBU78srQBZxgyscbwTW6da6Z25LGwc3TZTkxLDkPx",
  "key40": "pPU9AQmpVCNyQqcxKsyAsAGidgWLtyeJtbSLeq8mfAdmbBsfoLVqgEW9ik9i8RPUVoCmGadnjm7mY7bWQC9DCgr",
  "key41": "4F59a52oGTFjLYnkLouYcEyJ3v3JGNdNmEorEGvuHiXehUARYRrzkjNT8cgai8ApM6bFyWtnspvtj6LNEmtPAJCJ",
  "key42": "3CQaFpRDWzzft4iPHUM8dhCLRhWqyakeEVenmWcWEmxLutdQt1mX671pn6j7QG7ERPqxcAYpwjCEqnHYGy3MWKsa"
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
