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
    "44byjXHcXrN8zxkCUYTgwGG9sMsswJkUQZp2omDkzsocg7UMUgujj6U6oKEsXhxV6NhdcSx5ihAGnKKCsysc5aTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6529D8xqfM3ZAJuAfBPXANX9rm2azFXZmrDfBkR1gPC6EWwiBmi1dsFQTsHUMcgRXzXNnJqffm3pzRtX74Hs65ED",
  "key1": "4dwAPnp4ZFB9ga1KRJwRu3iXYPf3PbrLSuWrgWkERorq9tkzrRTMMYWpsFYbVjMcDy2tYsos8afbL34ALy8WcL5Q",
  "key2": "662bCt7xtN59nxEa3Eu7kJcThfA1kpxK7DAHoXPwv466J58inkUsoU8h4oth8NMtgKdGoE4bDAeLtGuYygjg5pDD",
  "key3": "4Nctc5FtXhaADYGuJjwAsUqXNQarYWXnXMQdaXQk5HkvnqEPfbDkVEgMVf3gnPurd3tZwTg67zamauG1PsW1Q5ws",
  "key4": "4mDcopeP4YCw59jW1yF53wrRcdkPwHJgJXozMx2jnGLN9LJMmUEXcqvp1xcba6LEUXMSWHUWJ9QxEcFTTA5y2DFV",
  "key5": "3LM5uDFEbwYtpZFfzQT8aHQ5T74NXCpa8jhTYcoAJkSp487mzHVqDwpHwnu74JDTuARQHFYfL1xikLAmjnET4SSK",
  "key6": "4QHCupdzJFfGDvoFeAMSpX5SsSRoXsRXgDDZFpUsLKT9ZbwYiVdAiL11QS71QrMQm5NHqkbnRfLCeC6gHor5Y9ML",
  "key7": "q7ufmJhgNxxba9Xj7RSciJ2Yxv44XvaLRUG97sk2zTzV1a7H9HFqHnvXpEEe58EvToXgcHVvFVJ5ENMCBo967Fo",
  "key8": "4QvreMMavMCqWqmfTgbikVJfrxQurr4UzZTfi4Z9Bpv2PCGvJZb4gb1hYVHZBtcmUUSA9jMr9M4JESuEsc6ZR6E8",
  "key9": "5zSrUjyUiaYTeYnNocyg3RoQ3Jw63UhFSSqB7vUpNLHA3koih4cbWTeAVCSwnawMSQ6YcWmQyU61jwKfyBYQYvcD",
  "key10": "4VnFWXpPGWbQv3mQR4FGDBp6YSmfEFtiYwZHjwhCx83esFUZ4p177NfgHc5VuAgdnDDiAA8A1YVNRftBqwF2jMLn",
  "key11": "36xFZAWfRWq1eBtoU3njzXnANQsPHKCPXjdZ2YzzPuKC62W8ZL219Xg3CpXzW2eCiisrsotQhyA2gwLX6VKQKvHH",
  "key12": "2NVLPxtF3dYfjhNCJpaw6ZwXuKA2Jsx6FBqSCSm5d4y6keTCe2SLpCPGkbqkykZCSci4jPFhqehbZ8ZDebFMktZ3",
  "key13": "5pdVtQPPctMZDA6viJsAiQKndXDP1vZEBF2khRHXWUsyFQgUzuv2x17cP1br4oaEHNNUUzpmgjHu4A2K6NVkFhqj",
  "key14": "5yNkQM4mRwhxncABKCrJLBUbvxtW2R8WM8RcnihCWsywWdHr4xV8nfyDtm7y1pfqZKnwdPgTb5SAtFSSnTfyGGNA",
  "key15": "2weCgkVr1Qo3s2gPet6fXZc8eTnNoDvKKm1xvEf91HAAwgBL2SAyKBCxynGRQ7FPKctiuXcRH9afpZtpf46fg84Z",
  "key16": "4ahYFExs9re4HqqxZ77a6f93P8cQ3Lu23eqQLCCVzTpgUsX19p2LjtM8VUpAdoZ2q1J3ESYxjJBUt1faQ21GuQGf",
  "key17": "4YDCKJcEa9JYGdG57TjjUZwquPY3BorLNTqamhsmKjYGDsh6LFscxfr1k1wVGqy3efNrVhWXB8wAR5XbgEdeoTt8",
  "key18": "2kC6twNohVCT5WRL4oDT7ZUt6DWz8YbsYpZWz3c9kq3h2d1qM8P1GjyC7rab1NcDWJUcYwSRAC7MZM8EsmvwwakM",
  "key19": "4LMPhWBC4wGEKdZCujmqbLvuZTUHc8bpf5YEf4voSy4kBp7v3ANA2hpBVsig1LQ6JiuiEZhFqrU9M74LFroZkSGD",
  "key20": "5e3xzfRbAciPk19DURpV4TBfab6NfxpbG7HmwV56ysrxEccJNf5b2vPk2hgyjXU4s6vjZf5Mr55xWpqnz7W9MkB9",
  "key21": "28dBuDUUrhaaNtAHqxUj1JNuGqkXXcqaH7k9RmbkLJmBQj7RK1RcDMYBQrSF1VY4nMgf8rUQ3s9Fb1hxVcmteZVy",
  "key22": "3K7a96FC4S6Zj6HHFwMQFe2LUAZqJ8PTdzN8KchTHVnBUD2C1zRaF8DDTLDPP6j4dBoxm7DEhuYDthgM8uxmiysW",
  "key23": "2Qv4RnohjVTjA39xhmn78LhCEnxHf5AEua36ujGvdpYStA7RR5A25o5tSDzGoMBKdzVppLq6qReW4GuMUsXhNKB8",
  "key24": "2DKtK33yQtenznxBEL3vCErv2NyytMdTrj6acTzTVoNYBZCNYANkZSbZN9hg8aapGxVPXLaz3Y9BxJyxrwLqq68f",
  "key25": "39sLp8jE7jPGiVUBShCotyLV6Gx9tpFgFLV2DL6BsUpEygAFDyPMM3dFCgr782r8pDWYwhEGdJmUMQsdnrDLRQRs",
  "key26": "3MJrfDEv4YFzicHHQV9bgnLRwMKgEM5JpbJLyNzoKVaib7bzBVbn9gwGmKvz4DYEyuUi5nDQMv9H8Ay5iiGVBiR6",
  "key27": "zA8EkfMmGT9XaUdYHfwFPxKhXRoKWSdKXrQDRdyGNNHZ8yAV2dJNwN3X2pAgwV6SsJRqgYmbLXdj6ApghD3NbLQ",
  "key28": "wTqZiR94GK8zxmk2fjfUiorEJMzeYz2RsFz7aEnATj3gfSRNU2UKBdqsM4xffwZ7xcnZEBsy7FY65LsY9eVcKpS",
  "key29": "67rgMyvmPk5tBfC8GWbh6ZHNgrkTuZNCLeRQmn1ffcahYHhsm4nj3pfjbWQZQwrkdMAeEfMPGL77HW2v1vFnZxsN",
  "key30": "5juAwod18XUiUoJrowaWnrL4m3waAwsi3CEDmkkmGqrnv48vAkX9yjZSDrqCF2UFZT1tmHGYd5We8Kks7eoTdi2L",
  "key31": "jfbVz5kTMJwH7sV3BYBE4jGcTgiMM1B2WVsAU8hsxWVubNiMssaN88mdzUbpd6h3oh6kHNY3VsehsUWZ5q1rEa6",
  "key32": "5PJesgNpKudYSxif6U6YGdfScda3nXYHUKP7S3BvWksL5H8kZcgcxrwW87BxU5UjFkzMe4sp7Gp9eRG8FgNpmb8t",
  "key33": "37xSubdQCCVWucm7Y7yLGFq7VBE77SDm8Gsk3ZNfRDLkaavkg4syckHURDVX8a1jLyHZZ6LRUgb1QJLGxVmSa6Ze",
  "key34": "3uh3oH1xH84UwVDZeah246LJzkMaN92HNWFaMeSXC9TPdcjJBqBBMfymwhtMTJx46ME6sqVFEtC1TQLZPAPkXwP8",
  "key35": "5eN5LmvAZt31poVq32Ery8ZgZRx5LjXFR88tZcPN7moL6DWA5MVP7uJinGhgMtrEdGC1HEuCmtyeYGS3xPouKtzT",
  "key36": "2cGkbw88eRRhPW3nTbkJniLqJYbXdDkDAiQrwUvXDfRWPtfHUvqECkxrcjGgyGUX8KHo5EQt7HsqQNq2eozchghn",
  "key37": "4tbzkPtXtKufgQtSHCqWyPguenZWoH8xcqVnv5RNu9nYfeNoKSVxtA5mhL7ZxWajF3Yv1Py9xuYjQhuk1RdYhLmp",
  "key38": "2LG2MXWGHj75WyJ6pxwou3XLWpm6nK2vz3UWgiY9KNSJsUG6gE8qYqb2pajnKnrSENPxxj7DywvzNMdcZBZ4yikP",
  "key39": "2E23kmxAKMX6hBG1itLx61N1Qo4Ge92GLZaRYojos2G7fkhh4mGbWqEUTjrMW5fEQd9BGtU3V2bgdHH4G6ssbJb3",
  "key40": "57LY5QZxdATQCpWQymB2YjNzCNtznxs77y48AFUcbhZ9hpSHpFbnb3xYjrFkL7jioWvx9UM5Ysa9geraGCp2gRpo",
  "key41": "3r4WSVVfJUdCE5m18bfCZcH47Ee2QTfCWwNc8TDr9edcWRpJkMdpB1Jfct6SGuCLuRes1kyey8gt1eRWvbwKKUPT",
  "key42": "3LpfzCtPMVb3a9Rr16vP4VajfzFRdUGbosBypXAFTmrr2MRygWvmxKZ7e16dZhbUH3kppUbfVSVM3nXfwkQjt8KK",
  "key43": "2tZn5iEERxpWdfFXJQqh2VKiD87SfEjgx7iPdeVA3TQsa9PQYaAirb6bW8eVAQ2fZFgWx4f9Ea3XXtWWPADCJwQD",
  "key44": "3sRNGPoJ7uMt4MZjNe2zVaej5wdPanJJpzCTxgVSuFLsQVKtvu8t1skJKRRVM5zeUjeUYB77nSkQHxYan9jrQsJA",
  "key45": "UKBB7NBexMwwkS3fyVzDxtekbv8ZYeD9nCTJtDrqJjwHvayQgcoW2JhMJ18p2NikmRgzajNJFMEPUSvSkcoMsfv",
  "key46": "RXBssb9nSMANpQaKuw9yTvLBhHZH5zZx8T8evKzLfGLGNsSGXuy555biEQmnCVrPY67BWu4hzBBZP2tfSyqU6bf",
  "key47": "FPsQQAHoKrEkjCbHGbx1SNKrDTuy6wfke7TkDXHfGKQo7P8vird1vVoZpTUEW66tq15BALmZsidzwbDoow3P4rF",
  "key48": "3wMBJnNkYXirhhYtgVUDSy4ks1J9DnVQvaFPSXijexeK5hsW9Lrr5xjsqtePmwPBgUADDZzEriEFryD2BfgCXj6h"
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
