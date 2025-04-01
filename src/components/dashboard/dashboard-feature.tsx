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
    "4zot9Eh4F565nh6gLrfwF8A2njh7xrzQsXS1HMQ3FoqUxUJ7EJokazNYhoActCDaGSJD4H8hqNnN4P69H5x8cZdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGLW3fq8nu1mmD689FgCW2ZXYFkLQ39hMYYbCNRbX7hwAd4HzBdPhUCpihi8RABGVrYR2zaz3CA6HBPbvHmvemJ",
  "key1": "2n2imv5MLscLYPi1EYSWBi23RPSyPye55s6q5jsWUS7QTzSZd7oxWT2hDtahWhNBDFWD2ZqSCDyKeWkQjyVh9om9",
  "key2": "vs3qNFYoTueVYAY5yXvUqrTxfCgq31XsNdkmvvYs8tZ5NdbLTwfVuFfJr6NVZXhaZrcudqQt8UA8oBCqpWfsLzX",
  "key3": "39QaRUpxEQtJAJr2kQLVjRLAaaSNBu9KwfgLbmTMm4W7bAsu7TbwUTQR2Qbf2UpyARJsjiRX6xoWxQRFJNcGnBTq",
  "key4": "3ENcs3CnHn5LU2wxvM11nYnH23qQnrXLUVPEv6fc8kzjHtBEoq6avEDwG615xeEBVcLLH5hBQQiJQ2PPzdvyuai7",
  "key5": "5LvbjcCmTB5KYZwW2Py9Mxxt3JbtXb386rgTq19NdVkpGqZ7W9abc9BiN4V39MMkf8aCSj6hNKC77ZXpfSnKdyUx",
  "key6": "2CKeEsiTUAX7nf7STUZhGzevzbTyyarpVc8xvonrgRKWf9szkSUy6X6vajYnB9FsqTyy6NrkuJHGPsHmvze5wPpy",
  "key7": "3T3rm9wB5DJFmrbDHsXkCYQDQA5kBbezytY2dtTqVqs8iZ2Dj6FzQgjJ3FjNtYH5we1bYax3rHPZGDxYqyHYmngj",
  "key8": "46o8ZEDhB8F3mbuMGMLyWj94q4fMj2gErx3ReVFD2mrCeE65WXFPf5YxQnyus5XqnyahuHAMkNk7Zw97cxLwoGjJ",
  "key9": "Wm8FAmrD6VxegbdNFJY3YtV8AHC1ELRpdezRuFd9c478135CEPjBjjnSEyqfNiKXavRXkQsUyLNEDjhVTeA3XGK",
  "key10": "5TkDRtoNfQn9viEZeoSAvMCDVhbduaf28Ddm2cPS2RADXxFA4VQPucqkQdrsPfQYHWPYf13dGwK5xQiuUZsefMU1",
  "key11": "2qmRZ4Utakr219Hx9tUnWck5KiH4uZQWuhWM4xGwFCJ3SNsi6jC2WfC4StovcXcKrAS12WW8WKcy4Bf1XwS85hU5",
  "key12": "47G8kwxMvBrYvpFFmrwqv6u1He3muRmcpF6ERFQsQ6AJMLiobpCbTZuU1ZXCimFgDnh9A21PLnw549RJkbaWMy2E",
  "key13": "2MTwvh11TDxaNPKwQP2tB5SJGbdkknbwnaUz1mLAQuckijUeVYKWGRmsEbjC44bti2i3U8dUkr7RYRwDBypehoM",
  "key14": "4VPtYEq14jDjGBfYHzWgtWaDAwiAV951kh52ApipBpKqDyHq7KLUkPyj2gQwGAYHG9mzazxojQ8MbXH42SSZzAVN",
  "key15": "4AwHGdAtjXdMEfffjvuA9D2XZXuWeWg8tua7Nf3C77v9cDs8pmNP7YkFVsYBAX1d7BdcXCBRtjYARAUEwWtBbfBP",
  "key16": "5DNxgv59X7JecLQPnxVUwgC5HoTAvvXzQkhcGb5ABkJjPSbj492X6DoVcWrbsg4vm6wQzNhg2RN4FwM1b5dGbiT6",
  "key17": "45f4StC6QwGEPBguA5UkpfPRTLAmRGmC6uYRcDNCURan8Q9D7VMhYujsA78afFs53PpWj9ceWQq4EV5Nm7DWeooc",
  "key18": "PiJCk5RSsn29c8zyzHh83kisU9hCvgxMiNFcs9qNJXkdBo9nvxnWyA2fnT7r54p6NzgxEcmChnLCPGLK9pqPnS3",
  "key19": "AXsYxPpXFm4sHmJ8zCFfTGCjVTVaLYxUXUvieEgmdATJc9LFPigwuVe2KekbRwwdzsqh81Kgs8ofSgMRX5KXM2p",
  "key20": "4ZtQsoQsGp29o7c8JKV5YzM8vheTkJD2xJeMWtCXxWKfQ2DjK9ip34QMipzYQ3bdBXBCcdTCPpEnyV8dKsXthe6y",
  "key21": "zcREa9cRSRQBc6ZwukHtZDixYXDYqAaYopmsJx81BUtJsmebdoFosz1dBSu4DJEncrgadyMQ1r7isw3Y7pJ6wgm",
  "key22": "5sNYgHowZjuRVfnxPx3b67F688yHZ5xNQqRVs17xCd1UhpMMSyE48fYp8ut6MbgdLE4pf2cQB8NpUk9xTmMc2riQ",
  "key23": "2hRFQS91ZbwprFB38szz8PpsE8idJDQyePwCB51NkYm5F5R5yKriM5JPVapksfawQiqJFqpK3n9yozAJHbwy71g1",
  "key24": "2saSRsjM6A8PKFebJcattwCyPLc2hVjNZoXs2CFSHjskH4YUBaHqNmmDcCE6JVN9RLCYT6ZZZVnhV2XfCbBFcvEu",
  "key25": "3TftJZeTnT5dzFGNnb5iE1AWQky9aoDEa6ywEtGVD2g2wtEbKzbcjtdMuAY6FXQY3JDtfznWozXWY8SmWKidfpAd",
  "key26": "47n1Cq7CXvprxTkq966AzZDX2fVMv9mAt2RV1BegCpAFHyS48nLoo1XLphkkvJdcr3QUZVH6UER3Swnf9L2NZ8mW",
  "key27": "2rbt4KpvyHs8yhqGoGb7UBQEKtDNzF6zxNXDR4s248AQsz2szQnVNhJf4iMAVd11ANVx2dFWKyrG4tNqjpfVzAaj",
  "key28": "3X2zg1b3EkzC7KR1CJQp9a6ZMGFMQCbWU3geiVBej3TQwL7GZba5Kj51pjqJbEf8kRhnoCGqQk1zGgWrScRCRksF",
  "key29": "TT51BWZLNpio38UEFCsnzExDbbsiuSGf2eX7rb8GU8WMrNH5so1RNrvhZPhJFGusqWcSghRwJHdEX9NKGbV5SQj",
  "key30": "2j5f7DBrQ2o7wvfqrEJBeUnVxCNEBXTVTm6eYTqJ4JcX2TXGXyU7ot8xz9i5cnnxUKokmyNUN1xaVd1NT9YnQwk4",
  "key31": "26nLjUqeXzQRLYUZk3EeKUHbD42KihJRyezeTL8oVKYZ4pKMsuTTeKKxAE6PMfSfd9Hbwa21fzYxHFkDHZu9DXTA",
  "key32": "4Hz9mpsDY4kSXSu1YWdJaYhZQg8L4fDFrVy9qb9A97LQmtm4yKHGAhjXiAN9yPry2xKrCQng6WtB83aYsqTGPfGD",
  "key33": "2KvgdUmjQR6GVbKdMm79Xz8NNwUnCc8Hd6qfDQvfDkNAap9NDo1AUyvXCa5rTKxh8fjDtTT5uwr8RLrACuhQ98bD",
  "key34": "2M6fqBtifgsfCREMXp4cJXSd3Ctydqmy6GspvLVYFEuerLJry5Hyzj84oHmvB8QBri8eZfyAbf9mRtYdz3rf11Ar",
  "key35": "5K2BZ1NYGTaXJvGqgtvi74ffwyAo3cz9r8PuawdftkisSJYdPFGbYGN3nVersSZLYzLZNoyuiWEKdwv31mDUzqNH",
  "key36": "7mcJY9h66oWpwJKcWt2SEcCU3QkueAp1kyy4hkVKCsX7rrQp7zJoqvvykvAjFP3jKiPY8Mj7NAQLk9NAZkwVkyn",
  "key37": "5t9JXA3bwVBL2vE7x1UVrS9S6zqfEyQRChnEsZmUNyNoku2yaC88DX52hm6UytG9Dcm4ceRTui28fiiLTARZuSpC",
  "key38": "3S1ytzNURqJEU7DEUUQQw4fzWeLHXFveLgai5yrAvG6GtCR5D6iXDMKu7u34DU2Gesi2NK6oz1mhYgR4rKeXFQqq",
  "key39": "26AnqnQivK54CwadcuExfrZrQfxwAvMhTTqyQGZMV24GPVVtz5hkdUexLFVo7zAS39NUZmeg47XcF78wrx8RWvJh",
  "key40": "45Nr76bDyWq4DQaBXpheLCkwPbjQy4aRRWvVWpxengZRTckVBCt1vQE5CYgotr4oiGXCCMwjarJiVt7dPPF5Hhyb",
  "key41": "3TWYNiRjcio2QKjFXQd3C4homsf2dmYtsR9xoNcJeZyecyX77FjLhdHhfhngzxd9VF41Vc3cjsJA2DSxA4zSoteB",
  "key42": "2mX3sjGqiqc6HTASPKCZ76knwvxuaV8pbHFKeW5d2KK6sfiPs8reHnKEzFPUB9JzZ9bRN8gGvGo5yaF66BKMKwJ",
  "key43": "4WcyGSqt3R46BoeAmb3aLi2syjE6egjtSsks72YK352oLYTiSYYhRQwtQzXZzQDASeoNMbEcBnXYPSynsa9NFwZT"
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
