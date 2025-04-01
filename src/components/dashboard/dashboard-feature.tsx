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
    "5HGb4UxeabpuRBBziA37PaxNAZAJ1GnQfDdjo7uhLW2XGh3JmVc4C9UW6mDkKzECtyc42Nx4uzdN3ubQUcfdDutm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pS3Bu3EeRo6xEV1eDDG92PUUMtainRwJa1hWWkgxW3bJnisEEwdz6mFATBEQExpzTf3WSXe1QdvQuXMLWg6zoaX",
  "key1": "4z1EpjzrpUZtoNwNErBoroAerPoNYJ4GR26Fmei9FC8hSzmrgHLzGz2ZsHsNCtpkHKNHCWpy4HXkux1RBHnWEDCo",
  "key2": "5KMUAFFpHvUwSY4JsREVW9k6xg1ror2RDtnnn4fp3GifHpzPYD2UXZP5D83KNj9GKcy4AChc5YnBYNCXqWDhti5c",
  "key3": "3VaGXMnxRYL3Z6GprzckdENZ122T3QubqCcqM5gDLfQop9faar7t2BJYqYvZXf6ozVC77eDiK78kdg1uasQRnsV",
  "key4": "41GeSgKDPQ2xTsteAXo6cRocL7SHwfvwAguPpuLAtwwFE9Ja1zC6Ad4nDBG6TpzTYixDWC5A2jrqhfAPotWbEZwg",
  "key5": "2D1TAjnVV6CwKBz1Pb4zmhf5Tibkm7gjGFcTKQxey9eJvQ9JvsEbdvcZ2xZKNNHdKFfB8iTAvVdS4RaqDyhvfzVn",
  "key6": "3VDVcmhAJ2Ve9rHoYgzciwknULaUBYaveWMgW9DPwK4hBn6p1A97KpVyxNhRkEYJS2Dh5W6XWTWFGSew4qUdu16w",
  "key7": "4i7QDVyNn6iFLTzY3HegiS4gmYwaJ1bRZi3WRU6HDFAw6o47g9qLPLshpYtp3zqCpotWA1YoiZLLjbL7tQiTJuFV",
  "key8": "3YzoWgaEkXcQEapAK1UPtVcR7gC1PjUdCEFVCXmgxdN2rPh6HhvWntPVkQkWdfnFNmGu2VmsAvPw1BdCzCquYbJQ",
  "key9": "651jy9g8Hg2fBpGYWwv1MQXsE9yQ7ULcTpmAbwrvYm9DXtbF4Ck55YU8verYkASeavpZwi1mxTR2ydf4cA4UPbvs",
  "key10": "3rm3Uqy1t4r8wB77HBr4VDEBgFKDQRqA9R2DG7RDYAt3rZ8FxGsi9VJXSE7TmnXV7op1N6ZJujmYPUGCmHh9JYQo",
  "key11": "pqqhzVkyQiWXSqzFt3ndHvvsJobR8mCrQ7X3DhRNRDi1zRJVu5mvgujentdQvMNF8iSB4akrFFdP6FdeDAPiyAA",
  "key12": "67GQZvpyrbnk86siGXv1ZB2d6YYR2ZiKqEBDhUUj2oEGRmqbfWB4vC5SVWnxqU3TPP8hHqnszWUtUSa29FbgudC",
  "key13": "4Yf9SqXo8xqh7y48eFGpvTpQVjGsPe4Q7kkMxzk5iV78aXGW457VhhKY9bVNYYRARxU5kDENwJngE89Y4JP5DN5d",
  "key14": "2fjUrPDSkosmLxbHSrPuqZQoG7TvwWZJDoZSGGRVajH8vXx543gFhziYuZpJCfu4KvS6bzRcwAw7Fqxzt2HEUzTM",
  "key15": "36X6e9q4S22unKNPangWfrZNhALQLLQf4YeHvYsJN1X3RwkchYjzD9XB2WWQkn8A8pF4M2SjytDF9EfJtEV4NBK1",
  "key16": "4umKriC8qZYCE5wHKEqWtF7uMCQMh3X3pTmzTXbTrNbo4KgCsSeCH1wDqkeneqMBtuQVD9KSDTY5hZc4hACs8BZu",
  "key17": "4yf4ZdKB1dWYfCUMAsrVMSn6P5Wfaihtc5AMcNeN3fhy6Nj58aQtGAc8PBWg1z4mqaZ2WPoxXhwjosoUb4G7zWSj",
  "key18": "4w5smtpD8i5B5g4q1KfkEWRzer2sHmCvqHJHa9xRqMyDnBznEhzC16z4sVD2VHSRydD7G84AyEUya2BKEicWgf8f",
  "key19": "5gejg6JHCuxgb1FZK1zPM4YB4rQoWUpYKWAXKD4GgqWjZXQVafxZAQBWrkdVzZJzxuVe7DFYj9YCAVTKamAkRHMc",
  "key20": "3Tf8HesH9xBkg3ztbJdQCicRwhj4Tx7MkyVMueKYUNuQ1ShGBUZgtKAYM8fK1cgB2i53jkvGc7p432ZzJAdbZFXT",
  "key21": "2jXamwrQFRkSAMRCuzoyqbphH4F3KxJrg4rWm9VLEKJ2sxHPb2siWZnTVL8Pks668czixYjDF2MjgUhVPpWAHYJV",
  "key22": "3xnJ7Z9TGqA3yNHX59fbBihvQ6NzUFAQdmn1xF3raLkvQyg5EngRyhkZA9ja1rJx9oDCQAviG89fiEwUyvdCJ3Ax",
  "key23": "3DVahyBDNqDuv4WVWmQ62q7a8WtGtm4yAB23t92PyZgeErmJHTrfLGMcJKaZLNiY25QiBexLMBtWkP1wKg995UgB",
  "key24": "5yh1xDWX37gBjnU29chDy7ogUcb3LGBmcMKMqrFj15TEo5oqoinGJZ6ZrW3sfvcoUgJKPd3SaPX2TDCPiJkenGEU",
  "key25": "4hHRxnDZ1KSXbyVCcYG2XArHTXodiQhtNc1B8UtiRci49YXGVUCBByHsPC1pFmcq5om2U71vRzPcPyAhZYW1mGdU",
  "key26": "G5NJxFLpao7hoG8oFfrmThQEUJfTJfVLdSeaYSgwRYHFPUjXJh5RLeZNAfqm9LP2RmYNEHvvJFgtYb7w9RgD4Af",
  "key27": "5reB6dJPUFcDVxv9QnV7ie1zw36fbYQ56epn2vzfqBUZ5axJ24ou6TsJi6CckTJv5hVCqQ2Y5tY4hBWMxsN9TT1D",
  "key28": "38gQkDkCxRNG1Vjg4tDenz1E1R6pxWUg53qVNKVjufrX4DPJkRWfY7ibCDNLZNfSsQ7cE3q2XgeNrrmT3JRk23SL",
  "key29": "68ddu499UR4cp4kwoEaJtcGawkrhs7REYV8VKcuBuzL4W75HcDp7dJCxWtkRRHFhCvjXBeY5JagV9zjKndidSaA",
  "key30": "4uEJxd91UBmD6KBJQhPk47JMozXzCNjT4xe7MJ8c8mfPxwbs8pZYSnAJ4w6rjj4Kq7L85YaubZ6ixp91AAbHLXHu",
  "key31": "4EyHockRsf43K2zimBYk3JxaMT3R1pZNwMMxSJqaNbAxZcLQ6WCgvYLtcjkbXJQkzGPcexjLWVJcx7yVHFsYKrNV",
  "key32": "3jK5C5H9DVRvLpzM8JxNHXFZSWzaPgXJLRxRj4KX1BAXfu2vhbL81NF8uGa3TwN4DGssiPhMcZqznwMH8gZsRo8s",
  "key33": "QbMdeots54Y2KhAkVFWzgpSmbAu7B1pRwxA81iFBhiisLTv41ABtvPTGooAoEPN46JYZcdtCwR4exqNpsTpfuPC",
  "key34": "2rh6ULDaXZbpeuBNjkWaLQ7UcV8N4ci81X7hEuCV4wQ6sJJxEg4ShPYo1YKDGP5Qpv8x2z65ijJGYcdAbujnvENJ",
  "key35": "3o44aEvoD1tpohxbmkokpvcZpBzRCXCgehC3aj9cAPHn9xrCUjXjWGkZoKdfpShswhZapT8XNA5EczyTnXsRHVGp",
  "key36": "2npoNSAbu3SHWjP5CJ38wR4p5H41kzcJjP7nrNqGnEnX3qHEZ6X3nYYYK5EEnoNGHakThfADfeFyXiRT7LxKbD5Z",
  "key37": "2YBStLj7946sXbpUK9hX2nrDfWxZnnRVJte18yFkA8Y5LLED8nARnDb6GDwcqUwfQGx2RxiyY6RJPoqdbduGf2qv",
  "key38": "T8MSu35hfpD4gpyPCKHvLARfGw8hju18JP5rvKSyNLexfDJfUCddjmm5Rj2yDMxEr3cEGigqJLRGGBEbK4MNaSf",
  "key39": "4bEHWfjRyF4mVp2tqmR6Tq2mmJdNJ8bGMcTZ6ht1mHv1Zp6t9Jm924DfCZe9epDDHWp8LvKRYCKQQpMm8RJq3uBr",
  "key40": "4nyKWpYsbHQXNyVW1Q4NLsL5YDLUidZLouf7VExpmTVy8j3pnbpbP8k2TbHHPRkZii6bR3b38QTX4w83XP3RBsS4",
  "key41": "ynhoyumc1c9GAn8QU6iVK7qsJM6zW1PWvMTRSXYT67V9HSLSUETYpT9WQWygYgVLQ8UPRmg15CAygdDUTMLpNVE"
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
