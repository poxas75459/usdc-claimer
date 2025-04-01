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
    "Hi6gzPK6CQrF2SDXicwfjCyAxaJT2af4gG4Tsn1D4pPt1Lpj2jT4o6dYbebQvh51AH4vedYUc22AAE5yZtdaQPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfPbHZp5wsRL9RdqayVLz3X3Cut5FQ5yHtdJyNcR3QCK5N1zcRF5HtLdWwnEa1bpSK5antyLURiKYNfanguFk7q",
  "key1": "5Z9pzm6bhwvzHWmU18BobAVPni9ETSRLBbTgJUXpi3WhNV99zs9nCUk1fSJWjqYSeXx1otT4dh4avRqo69g7QYBs",
  "key2": "3uXdZk6hGG5XEBhdoYb2p2u59dH71BnaAo7XQMynqnnqBfig3pFm4ARaqWWXZevV7BvjuNZ5CmJvK432byg9iHhr",
  "key3": "5cBABLf4xurDZPgQCzitU7BEyCkES9BaUv9KKcHxKNn4tbV2zoy6ntaY6yAVt4WsEiaFrTQaGmPwsqGTKogSKDQ3",
  "key4": "3jyq9mdg7qViNqrXF1927VpZqDKLo7repWUMzgHZ7doHvJUYXPSAH1FJNN6obF9kn58bnFg5eBFd51LduMwyBcT",
  "key5": "52kMfNQAYJykiCbpvHwAQdrGQEdNLqAD9EuSWZEBaypAXpjj4sUGV2p5ZTZQRXyprSnF785bhJMEx2wkQhkaT1fZ",
  "key6": "AgjMWHtw4UsGbVx8cKeVQpjCzDcnihTEg3CNie2EWJQsRucRPZzzJeMyt62h1hWPgLBtCs6fFvdezy4mrxmTZPv",
  "key7": "4SVTZeFeLeLUBk566fYYNFu7ho2hkUheVcwFpRjwku96nrDMgUEJyAxzEa7Tcu8QUwKECU94CRUVCaWt7hXEVezL",
  "key8": "5xg39HfqfsskX1WfUSXuRUQS7Qby2wxNZsXFxXPyMZ2k32S4iEhEKqugRyHLQwmp3ztmMokg5Mz1Tch3X731y428",
  "key9": "3rAtsi7n4Mkfr3dKA4CXgWvnxKikzJGqUpAhwvsus42xb7JrC3nDrGMcvmztoytGpjFfz9PVbTsnuHNGRFHPqAkb",
  "key10": "474mxCJ5jpwmboYdnGErBjeSrsz4Q7ykYqrCENMs6nfZx4fAorYBEG3gg6YeqMqquCqYRZNfcCjiTmD56AxPqhfB",
  "key11": "4LiDjPExjxQUCrRsvrXeS9ZqfvECpkRECtQKMnmUuRB8tUAyyGZni69mXV54e1aivE9BNh26AAXj2UTJSViRQWAf",
  "key12": "3a6yJRmiQ1t2KmC6F44USLQWRgppeubjXEZGyEhgCCZJvs57QZX65Cxw96jCwKPS5VWW19N9kkh4HXgzCpFH6qK",
  "key13": "9NZZ33codSex8CZXY4hLBDCbT6Y7Kh67g1LD2Ce6asEgSwbDiLNW2GbAMqgToj48gQ4s7yAaKMQ7J2M5fjALP6F",
  "key14": "2dsomUU82mFv5ZHm8WSpjHhQrrKS9eGRXVgQADrsUGQsqpdYNCY1K7Kcxqx39FvB4pbKkk3jN7fTffJ8UdP5Sat1",
  "key15": "5ig5NqNBvCwrStjGYQn3PVrY3Rzgh4kGuHaXqccBPVnJYQ2ieBQLyKwJfRCGqp4DRQARwpJ7McQqtT4JDoxGcBEM",
  "key16": "2KgooqfAdn78jf7tjLNoFjZ1jpRqbSAnriju8irt44Y8ij6BiU2xafvokVkXuLWCdtsZEDJV7QqNPDYU7rDC7BHv",
  "key17": "2Zn1uwrLwErAKhTBahkduEbwSdH4k2367eBAdgK7WYhiWoBcAfAbLY1LyC3LgJY7G3G3DTRqQdgMwT9iT4AniuMM",
  "key18": "3rCKcZgFoy2HgYsP6S75712QrW6RHacr7Ktn267vrQnF4UybL5tBBCgpiZQAkPhWNaStcCzijNcrFTPoro9GYq9f",
  "key19": "3JSopQoX1BULQrTYsRmdmxR9P4mC6oMmwnoS3PMqz6eTqJkCDTeY3sG9tQLRTERMHdUXpHLzUFGaCJSVPUdXc1jo",
  "key20": "5CtyBdws9Wh1vGDAVKkg6dzLF1c4fDSvGwhY7SuQtRSdi9F2iCxMtMfTxZaWmg21B5dYrv7pZDSGRbcVLAxEVQuU",
  "key21": "5d1mkh9WgxuBhQgy3mcY9bkyx1VBCTeJqKdcCtDBHJxjmyXNGz4wp8cG6AxUt4ZYRt52HNWfi4pMYHFZ3mSoPCf2",
  "key22": "2UjZJisjNxAxH1AFQ1DBGL1TDxBi6U8jXUuzUKDE7AtvNfC7qWraCyQr9d3UxXcGvYvToT9RL6Daba5qM2rtEKsX",
  "key23": "2Qwdibb4yDYoJkhuqRiFHkPDezM2aaYmBacqf5ftBMBnarWF192YUcDZoKpizaSPFJaifV9sLHdbeHeRf7L78F9a",
  "key24": "4NNw71aZtwQMnp4MPCKDLqc7nrBcni1EnRvu9uB48KyvjcnPwaPMB4wFwo53oHWeTfP6o7exw4Fxn3CRyYDezDzY",
  "key25": "5gAVHfX4ShVUhPewyD3pVJiDJKsUcX4b2SvXek3Fe5VdwumF1y5zJLuWRWxvpAGeVZqeZR7khkLpB6T1CyyvN4UJ",
  "key26": "4Mq1bsf7A7Y3SMVJsqT7xoCKgMcLiDmY9suTEVxGn8HtGyL84MjzHK1PyStrvN9KL9xfaYSf4hZzZHw3j3bZrecZ",
  "key27": "5NxQWnhseQE36dQUwPHxQXuqC9TzXAqwdvpa2GNEwreZsdBBs65uBkJfJ5mxXD9VbxRpwVPS9bELPEuRBzWvwXFH",
  "key28": "bmxDgrM2TdYPqk27gP4LNLf4cZLwUNXiTGcsc7vqsxsj7zBmDLR7cfTPzFWenTQo9nJEnQrfLyG9WCUqqya2G7j",
  "key29": "5e93bwi44r6Y6NB7MHXofsUtTWySe42S4prEEfNWsFnMif4pTMAdGsiyrpp3gPePp4iEz4Rb33KrM3EWEr5nTfCQ",
  "key30": "23kxkpDrtAzVLowCbZcNdtHP5vyG3cWiBJ1yYWsPSnqe2qZNCWb9HTLUjTbuBcQAoo7g2Sjb2jaHv79YAww8A7XH",
  "key31": "47ENWtFEZQtqZkZA2iUggcFx1q7sN5ztfuQ3JsotN6kJRqom6P1g5zdRZEsB91wuAJypfLo2jsi9HGfwbwh4mrC2",
  "key32": "2ERetzTegKR2Y3QW8gCVkhTCWp2b3E29o7nVLLGGJeKk3nDBnJVdpTXNUDDnkrLzywnEBpW9wP16nomZpea2hzmE",
  "key33": "4yFCFJpUgoEe4aZPd8vVrQUcXbK7G9n8GLrkHD3T2JD8HG9t7QpE5pK7HxLt5mPaKFj3T3D2voi2Y3fNUetC7KkW"
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
