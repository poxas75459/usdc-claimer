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
    "NYYAAi4nGC2DBzpFaSp1VXPuqc8bAbAdGaqWFJiiwYbrNhmvXWPgypz8MmdVzmwLybfcgf5K2Uhx6AusvFgbuWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6aC32hJF7AcCouub5f9ikrp3AeaLwY73tD2FV8CQ26PQ1bzji7ErgdPRtnwhjSUy19hDor9xQ7v1cHVjzReqmA",
  "key1": "2pJRJQ7DdMm7WLvjtBgS3NVLSzKw7BCSJe8eS9kCWBMhUGc9c9Nfy2z4Lc3Gs3yCnnjbKezebgtJoj1tjtGF89ap",
  "key2": "2fLUYUa2yJkWBqzXzdoLTXK8nkwpLqgRCuPXp1PomKxW9XFjHgxGt8tszrdAjxNMkuNTLZHVFz3s5hP4NQV7SnBn",
  "key3": "5HRwJzTBBrxPMtVyUPtLNSU6r9UTtdaJFyD8Dw2ZBTrEH35fu9DYhVZ6MkXY87Q9xZAGKNtt13GUrYjTq9z1vFQn",
  "key4": "4piew6gmMEidtRyPiUDPksnQ2nDbB6p33PfpjoDUWHqRag5pfKanitisMkHVAm9DKVJZA5RK8aUDMFykDgdn5wqr",
  "key5": "2XvmXsGHAy1AhLEZPCQGkw7pKk4HVHkSYVwnXQJ5ZwtWT58nNc3nn8pho8ePDYdGVgnvTyCgQGmka6ricisvzT4C",
  "key6": "64HLJ6Eepw4reH5xEjXZB8FeKfa3ZLbv8eJaK8vEbvTyCfLxAH62jaBFqWsqNJtSfipFm48MPYhhgvdhgbNZvEax",
  "key7": "4oCouYUPZ28pGmDwFZqjwPRY8PNTVACvWgtP2xbRMYHSSthhSCqBf62oPqJbbvBmqueRvkrftabW9Q6gsM5BWaAi",
  "key8": "d9ftWcorvS4pJSVsxGeAgd6VQwhpQV9HXSEcPbDSZr1eWnALLyJmPRMmPuNZCdGs7YEwdvejF4U6CoP6bvNjwf3",
  "key9": "3Wmm5UPCp4ojmMQv7cJMcrL6JkfwxpmWEpzdvs4naUnVuGvLjUTU11u4SUzvCqU34QVxy9YgMtzGLe1D46PvkAvR",
  "key10": "49G5kkhazG3FemYB9gTtiPWN1Zq9fBkyYsaapCFaxZd8CN5bEs6Xyif2L2EwynKFxmqCrhSRpF9RJTFBvkSiNvpD",
  "key11": "4GtMH5UqCDNaMMjYCm17EZbedbATnR3FhHt5EiQJ5mVZVwkuhRsVtqC1zRsF3Ar1bXVAKfuTq9EbiUUfZi9KykXR",
  "key12": "bKiJm76FYBq4TfANiHmKCwbnABkLjQi9JqT34JMnwhnz8KF2B5UEKvxRc2rsWwsP8BLnaxAyrkj66RJMfbThmS3",
  "key13": "54XKxk1tqRbyiNcMJA5LE4cehv1gdLcVHnV4qyQANVb4vkPAs6sAer2GGcyxzhkLUeYhkkQBj5hBwbYYX3ypWdzT",
  "key14": "ptLh9imkukHqXFSPRg8srwfveHUCd1wUHANVUEMfWvS7XTTe4JaURxobKeSDoLt1Pqk8ewRJ1SqfsEJU21HvwqE",
  "key15": "53zsK83W31CqQ7z8mzNDJnEtFCKTqJkgwNBCKtwwW5jj429AN8sZqytVu6cDZ3bJU1r5kRD27TBAca1C2t1DkC3p",
  "key16": "3piKWdAuno9mB7xfTpWJpmequz2VqeHWnGauPtiqca4wVrRV1EJLyDFfBabG8CpKTmESe5WaS4dakhBbd61zYXHh",
  "key17": "4F99aJLaKt1vw32Lp255LeD6V2RvoLGxdvsiVvEocwrFUMSEACe5k4KgdExkX522HodQDZu36KjwMgKfWrcDuqCz",
  "key18": "2dk9qxqe83SLN6eVjMkJ22D165SM96wrgym9Rfw6b5xRZwtPfxnPHx65S5kZe6zhGf5gcwsDF6UejcnswPgvfc9H",
  "key19": "3mQ6bm6VQtMk53D6rCUynC4GpS4iPc8Z8EF2oijQPxQUm7psYBJGzXuyoJmPntv1Rb1F8Vqis7CPNtkYRyGCUF4Y",
  "key20": "4WLdt99FXvBgzv4EMvAoPnbgQJ9yEuztuuJBmWpZXvTrCrjZK6yyNMt3BVEH9FkiTFcR4wQByrjeJN575gFL8Ur4",
  "key21": "4qC8r8pW3nCVd4tqq4yAhs7m1Ft21ges5AmjuAh7mG7q526faJqsVMb12xUPjnw7LTbVZzKtuirZ8nNmLn21aGLy",
  "key22": "5gbWVPxFUgeV9p9kssfwyNPfYoHqZDG7cMpKPFvJh91MSwug6Xt8dwvXzP8BaHV35HCUwucpC4UiMdxrJdWz4Tb3",
  "key23": "dqH9gTUhUa9MHbiY7njeH1TsFu9FbpAgT8YBEMJm8DSkyjmUuCuTjE5VVFZq1UPA2g76WkJNs2EeQwEKnKR7JEm",
  "key24": "5EKMGsjZnXNLk79dCfZjJpbFsep2yGrTx53HcSgrL9LWttBBf1yK5yZv6TMYsZNAi8qZs5zeV6uUk6JryMHsUqBs",
  "key25": "4n759SxX1rA9a9HKfNPJrsJfwzg75pG6xkETycEvymX9M3St5djD9vd5ZiJP6cB39S9NnmRAeMZS4jaLCf4HuTT1",
  "key26": "NMDVuv3CDMkSk67iXVn2grLf8ykw1YhCnRqDy1jA9jjJ5hQGNJ8omC6KkHtZLJvpyx5w4KnBQ98duHCSJiTkZVw",
  "key27": "GBvhxCMALm9UuxCFnkeHgx78avU2LTJfH55xxj871FawtWJ7obY7CbuXX31QdoQ2RMsWdwxQSVUntqNcsWadhhU",
  "key28": "5TKDh4JNmRd2uXS4zeuF71obwegiFoBtuucih9wtSgKbqNnVBZuRQheiCzRrDVGout1jyBNm5GkzphMVdFiBgRFA",
  "key29": "51TKWjKwNMjE5jxEX4ipYPCdUx1RcLXYqFPN5DQG7VDQBJSA4VcUwkGwwDqxePxnRsRk1AaD1cWy1F75qW7zPwDs",
  "key30": "2Nj2TMDCzdduCZRRirt1mVNUJxCH5kiukXn9jFGgE6rBK9rvu3yN3rJvxYLZuJ6G5DM7kiAPGDELf8RGk9jcTMpZ",
  "key31": "3cniWzQgmys6ouLBm5LZPUr3SvbRdvueDJCpyUqj1FTcmPT4ceKskz9FuN2mUDmnb7Yfzi3U9dkoB887HssWRXJa",
  "key32": "39aXVvVukdoyJnFDSTafCKy7srt7RbY63eD8LDgodzH8zsvM1VX9mZHoQWRRJsvfqthfW3qngfiAC8DJWGro757x",
  "key33": "3e68D6rm6RmCT9xA8RxeiqvknFjCJjHh89rL7oYFj8TpA1Q6uvfpC9NnXE4vBeL9xpJPxXX2byeLmMkjiQHjJw7Y",
  "key34": "39WYy6fxN15EvPMb8QYHgqkeQ1us4McbhjyRMVkJVbn32NzridH8PJJZk3Yb6mH2Jfc7bYfFbSZEL7WoUoZ99sZx",
  "key35": "645AC6XAhdRzPDUGTfrTGonpCxRxK3nqDpgrdvXLjiyuE6vdfB35LBxUiNb5fVoGYbiPPnuvvhweFd3JETxccUNn",
  "key36": "byDuiUAvQHPFE7vxBAF3c5e3wDbBvLuDbv7ApjiyBhHkV3vaHcXekU9sDcjTitE9fYJrRFPXYr91eea8nzmdDSe",
  "key37": "2uWKDR2qTAiS277s7q9x7hWNhsohzbYqitXgUxA7o9RLUSZqnJJChk43ypFSHdjG4mGwyAbV57GzKBUzy8WYTXGm",
  "key38": "XWapDDaZ2sWgMoq61n2cFiJzwm1nJXWEH4ZTos3KDEywAYe1H3dVqF3KVtjPsnZMh8GJ1asVGMfFRzwvrKGrSz7",
  "key39": "5BVvwUbfoZUvsvy3uR1GeLik34uEtpyqp5uprdrXfcyTtwoa6kAeYBrYf73YHuqp6afiv4exoBZRmenhJErzgt8S",
  "key40": "W29ZmAAnsC2weTTs3r2Wq1u5zxC7UjyrBwaprX2MmwckoufLnFxw1RyY6f2Hf4LiJ6WoV1RVEDtnkbugcVpfnG2",
  "key41": "tMj49WWjtgRXcbZTR8LmENEb6QXtZZTvbYJsmzakXBnTh6W4RukTcJBUuqcMNr6csX4nYT3Zmg5v43fsMfkwECZ",
  "key42": "4jHeBAnGRCSgzRgi1bBWK9AgkJjG1XAFUdot56Jx9YPoVStRARPcUJFFw16LTxyqiJTHrdSunpSwjNBsxoLbpXFC",
  "key43": "VKsWiLPTSKWBKkeRgcnN7eGZkuQiSshag4NZM5PHriy6UFT1wVoKNYhgtRgsJ2Yp8MztkL8gK1wyx2hohaWbSJo",
  "key44": "2VM76HHrwofpFqq8E9ckTnwXnH5U4NMmkFBNK6dfEzrWeJ4WEybmd9d1cpnQDs6WH2TT4DoJSCMgRYMhc8CqNFfB"
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
