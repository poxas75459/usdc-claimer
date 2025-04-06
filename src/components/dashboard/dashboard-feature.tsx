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
    "FUi2bGJfoGTWgEKBKBYgb9ZKyQaAxojTNQqzqjVRWcQQDwwawuNt2A6TdjaGxkoTv543afTK3w9GJXoSj4fTKBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxYmgTpaGZ6u9FVpftFhAGRHmRZ7J3CXCpd2voA9oEEy2ADHH7YJxiXhWPUj2SyszLF65P4Brv7UzerB7Bv1gwQ",
  "key1": "5pTgCPt7zxyixgSeR55aA4XnWxJN6FLxKSGZN5FZUazm3ebajndqrNyX7ZNAjqxPrjivuRNDEcxpRJ2UAfxSkfyQ",
  "key2": "3uHC5e5AQfrLuw5n4648GmYHSr89CUqgnBHUvf4sWGaeec5yQfPvsmnxoeCRxYiXBvKjKnfxA2iJ7RAwBE5YoWMF",
  "key3": "2uW7dNX43nzuNJE73UyWPDcLj96qTkFm6FoaWNDqpoGyeBMf6vPeog1QAht41kDf8DHdep74vbtuHj94JJwVaRez",
  "key4": "Rf9MwbUtaJMSPEoy2eVV5L2DtPemdAt5WfvSYsTw2QxuqY3Ddi7DVgQRpR5skCr3nbTYLstmHBLX6iZ2Fks3vM5",
  "key5": "4KYbAeTNovYgTpCtKnp8D29EyzYzmFQF1o4B7QSGhiGusSRwpNqVhMNsR9on1Abj1K6QHEq9or8LdNPLaoBsL1jr",
  "key6": "3HnGMAWibLs5VVQuaGweiBhPghdkKSkt1mRw5QNSJhZGnVRJrGmHhmBSqDGDsHYQyDigPyDQf63FVbR2oKPa4TAt",
  "key7": "78XPWpj6iQuNgrTgCrcCfV1juiWPQpq78mQxJAhu2yHFEPURCQ4UVYYdUQV2bBziWWScSdnN4R6QSP8M9FCFrG1",
  "key8": "3hkzYtdgnGD3mKMsunuyr4tfgf83LiMf57goyGDVDheeXoZVpHxopWkZYNKYNyL9KKGPmaLrLATSW5RzTEKh3225",
  "key9": "48Z9a4LwKZxxm2prB14KeZGdj3MsJvYMrEThBHv9QbwdbKubNwTrxBGNbcZbsJGF7jMJpo1t4a9GK5EYKp8G22jy",
  "key10": "vcNiUGJbGKfY79CP9BmSVzBoUdyWyW37NjQmsFm1epFMNjNHMh8EkmMGSDmsByxRzTiPDvLQV19V626UBLG8Ap4",
  "key11": "5B3hHWw5xihhjR4mSco8Fe1vE1wDfnRWBPfTk9iEG2pSqBCc3RPLvZLuTD5iEaBinHWGbYJcuKxfBAx9yx9PzisC",
  "key12": "9vn7G5kP2BLvobNWC8Nuua9KauMEWXh4FL8mdZqLoZpRQi9PYpxWf6pnivaX2hDkjN7SnjcMrpWQEEVLckQGTjb",
  "key13": "3Ya5u2ByB9A6NeDBoLj9rbZh5Cm4EaQGkP6XG4Cnxd3TfP7eRv8HE1NsyCKux31UMkekBvtQXxDMuuQ9g9AkkPgL",
  "key14": "4Q5RWNRgC4ScQZF21hqBLxGtKzyPfTJ6FtizEhBHH8QrQTWSdEiXh67EqCAdzaYRM5nxkVe9Y2erCwbPgFjZsGDU",
  "key15": "5FNduG6c8k2isfyjDdBHDDsAgb23X2Wft4J6cpo5XZD81TK4JVEzoYvDoXEc8VtBdThDrWgaBkgAmUPthnxqMrbz",
  "key16": "5twVoueiuEjVXsg7fDp8RsLVHfEgDjo74jbMgfV3Fgho3fRNake3iLR4EocrXu3yKs7uBoGJDeqNtRQB8NkJ1VRb",
  "key17": "4NgWz9b5n6qNQfmhQKd4X8shcvcfeV78HvhAcHEJxW4AmLqpSF4777w4jM5HHzQRrrdF6Db9oXh1Mh8tsaS9tnnJ",
  "key18": "iohcWKbcpCgouBcbArJngEqhmHBd6HxAjJiyr59ByJmaXcU8t3eR48Xv7ycDSfSY5YUoJ1w41fYiq1fehYcESYr",
  "key19": "y1KMiEkeE1tjViXvNBUjR86beaMdaSiq4v9jaYyiLSj47CEHh3CC7KCGrKvn5jaYZUonPdEXkx9D2zrutt5MSJm",
  "key20": "3r1Z6KCartmiPxnxQPBCmATdk7DYAcnNQBMhF8iMU4Qmef7jcGdK5Wk1PHozEoWBNUoeEZmkfVVELgKfg9MBbJzK",
  "key21": "3JrrY5tVnqhEU28g5fkeXTHZT3Hoi5UpAsXLtM1JiM5qEEpp2toMBv1FJomUYrL7qzdwK5ZuwkQBbzyRAwcLfCtL",
  "key22": "5Gz5gQt14B7TjVqPzJzgW7PtM5mkwrehXwUcLVxv5MgY6XnJnUo2qKefVCcyzGeKPxCfXh64qZCRB4dLCgRFeaGZ",
  "key23": "4sYVHcqhLjk2zccewa4zeRYwF9ivHLw9GLNzgsmYkXvMNBGPYJRGZtBKXS66QNYVj7oiQ2cQL74TsiMpSAL2D6wB",
  "key24": "4VXU9brh4FyHX26ZaJXvd8v5WKDfM5KkhF3yd1A3d7XUhgkvQtYsXS3U8trMnZYpdAjNbo3MeTKDSAtPQ4pVCpzb",
  "key25": "2Bs2EYnnYmvzn6zAQ7tiY7nrS12E2AZL2RetJeCokT1diYtZDqHiCA7DHLV8CekPL1YK9HYeoYAXtfvBQgTXiHNG",
  "key26": "32PBSFAgqT8gdeQvhNRh1r76o528dt91E9fJwtxSGvihCX7SiCV5vHakSNNGQyqEkdWDFK6nsqbD3sKTByjkicwP",
  "key27": "xzr52rPG5wDc1GhJSADZ4CbzjuxUPXkMux2icdkuAcXbFxzpAwmjmKDCnPRSvpfxgDQuMabhGrZ7qEwgC5wppeL",
  "key28": "3GLM4SxojrPNn1UiS1Ggngi3MNEP9niAVxLp63Ph2YMG6zaQFtXYgXFvAQZSzdS5wCZEZvbFRgvpuSWj8NtVZgrv",
  "key29": "GV2ipSeYeGdhxDPDF49ZFiih2EX8YiDPi5Pbrrq3csbLGzrVXEGvup9NXsLU3JpyGJs7JqEn93LBRtTzavnEvD3",
  "key30": "2z9wv17eR7EmSSwZu7EL848DVYU1pzS3KvuvuvnHQSKs3TnAitpt6gcQJPGB9kLiKdqXrxriB18fjAFYYb1MrBsT",
  "key31": "3HVevXTHhmYrhtBHehG1ji1LkgMJh8bGkXeXJqZ1J4xfFeLBrPJpsaDWEUcKNuH69yuadEywduDj3rBFm3Ei2ENS",
  "key32": "4jjMGkWCDUDsYBRrGSUibRfoBhnEuWF25KsuMoFBKnYkHWc2dX2LZo4GdrcJiroNRHAPgdyFdLD71w4GnUf2iFSX",
  "key33": "37TigjyTMLzx6uVFLg7hQDmVC3WidhRKsxBdxS6CDmcc2khgvxi4qGNVAVZh6pjyKpexPsR45Cvywc1YUD8PjApS",
  "key34": "2o3u3fWN58TFCrodCWmLJAijXoap9vznT6ZHtyYLWYbTTEBRZ2FpS54UHaBbzsmabcrpwskFzvovVWgHZiTnm3uT",
  "key35": "315saeudaRTpihTTUYfZo8Gz537KvwNvE7D9WYuRgwpd5zJuPd6zEoocPAqysQMQJ8yL13Eo8RjnAid2SLBHPepq",
  "key36": "hew8yYp5WhFmaVKZdyTzzoUQAJVL23HNUgioikiYfvpJXfPDBGgB78ANQH1fE8GNfd1yAPjHAFV9kpatFowdrC3",
  "key37": "3G9Mq3NT1nZ6zxkXiADQib7BNw5Uhjp21uPcqXkWREWatib75VmoGLt7vshNuBkKjqsy8tgbknqbjqQp8mcPUD6S",
  "key38": "2Wuhf1iFDefqL2wf9ke3owxsdFwqyvDKvUD6NpZAUQpVzAtc59HLmCWRUitppehYZCXGSmyXpbteb9nx5s7Vz7dS",
  "key39": "2sTxpVF4N9nKJgxnPWQFE9aBqND65Tsm2qPCP2oHnvX5zmsrXuRUNQJAdDWT7tRJMyrJmrEzici3vjbrwGWQBbp8",
  "key40": "23WjeEECRsiCmw7wdTbAwGjS2kPpLd2x6yJPbhwC7qequUJ9xyabWWmj5a2ePJx9YdyuwNzm1ipkfhqx7bcRzd6t",
  "key41": "4GCi5J8XAKFaRi3JLv6t93DncLrZQoQ4JNBWQXPdgQkng7A7y8HvDku8AewCyZbjY3NKeRAUC3AAQtfKoGKsCBv",
  "key42": "zqCQ8csQtUZmWdLQTMv2HCju13kw7htVqM5SRkdUFDMVYQroNtTMqSXKEccavjkmRTy2yfw1aoeHMfMcaDrgFK1"
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
