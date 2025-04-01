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
    "4MHmbkqwW41qE9AnEnMrEkcantfAbnk91W79ZDtiXg1TPBe1w6RoQa5KR1MxJhJF5sbFkm7Uvb7ardtnViknsP1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n531XPfz38StexDgZHE7hDdKK9zM7VmbczKWDHcuXJaDwkFkbY9qsdSyHVsjUYVxzoUNT5z8o72NK5r8zDiaMPt",
  "key1": "3ed95Xd1y7Bx2ebR89D2SVHDvFdGEX7547913DmS4iD9Kk2sHJmcUDWoQ1aB8c5kLgnaYAPnrzFZMU93pJ5LUkCG",
  "key2": "5bysLuPVQnYPCDBJ4HJKJuRfDW3H3d76N63hp7fXtdmbLBhd935YtKCqs4ZuAwK83r7g6i4HtYYNvssu8NJNcWdb",
  "key3": "CsnoT59DkSQmAh7uU4MEi9Vbf8MMgfxJCT6M9YzaFjSqLTsQgCTy2WvdAcGNdA6RFbp3KJUmnnrR4XDLQSPgewL",
  "key4": "DVTaYnZKcqH6iQKyu2y2WMTXsPidqpGESzhdUprHot84Fo2VBG6bkHjBVEPErYzm3uinLsdDWam2QUWyf65zMDw",
  "key5": "2GPJ4SycfgG5KwUfPprDotZhRNF6vLAaWcT8qzLbgDRD95A9ApML3Jd4qTTXvnz97ymPqHXjs9tcjgx5cRsroAy5",
  "key6": "25vWetVfqSUQ81EBZ7KaBh7KxAjkKibTa8T6dwSCQdTuQK5nYvZPANA4yMLBg9FBDQUZeAjh73W9S9mXD33VCQff",
  "key7": "3SKNocNVykUe5xzrzEdaiLM8EGit6B17szEfAt5MK5GTm917Unf3mbLzSaPA5v9EdxXsWaBQbBxf83WjiPDt1Xsd",
  "key8": "5s9qSzLRM7fpAz7QL7v4goxydutLGrCpzBWdS1bb1CRepuQ8NFcWFZ1HVoHUJQPp3hFntcpTXrVzSTsaN18uAWnk",
  "key9": "B7dz7JjCgvSk4bhw9UCz3ZAgXh9qiFSkoVo9SoTUqy5PCW1MgBjqqUa4UPAvCybQvKeEjfzCvhEjwRT8w3fQFzw",
  "key10": "4qJanK1EGiiCZ6BD4ZPQzaz5kqRVacmnJ5hhLGECjaXD9VsU4hqZPS7qSbfF9jrDqqdRmtzTzhvdFY1J4L4RGpQE",
  "key11": "5DSJr2rx6J8zrgNCLxzfvuVEJjhGeUF56te2Bxr7gyyJPqxTQy4Pw1SBFSUcQ1ibHodXPD1wFWvDJgm5cD2v8sEV",
  "key12": "4BV2hjddJi5ufoyRwMirFQmUxhB2jCSFTh3tC9qWKeWHtFR1DiBqYkUUsUQjx57BKGTE9Yv2Jkaj1rVDBeLfrnV3",
  "key13": "mQ6YUFmGoDJahvs2Z9b79GgtQ4ypAghdgr1Bmz8vMzMzyum98XDQD9GisJ2XaP2oCtZx7Uz7oxj9Re2McukGwRH",
  "key14": "5Exhz9ZZwfaqD5fterR6ypdWw5AC8XLzFfB9SkcKfSSiozVgodc7boNWyCde4u7fWmtPsDpRFuZZUJKNE8kfy4Bq",
  "key15": "2QvHL44Mhr1DodYuzNZjBRNqHAre162a8BJENaohZcu2y1EU8yEjvh8jPxvvoQpvLjoKoP7S49EHNYyehdsWZVk6",
  "key16": "3H86yUFYM4qoJkPSvzefr7SMorxUNpcJyYFKCvRWdBCe8ZGEV7gNC5yD7oPtq4TyNBDZxyrvGpNirnaRhSB5u4Tk",
  "key17": "3i8ATDy8waQRp7cEcbPZkHyYFioYqDmPu8QLeUGwUSLeUZ9o1GXWXd4Auh8DLNCgLg9axaDDQDGnE8rjLnpMiYtE",
  "key18": "54gb2c5N9rzNniWvMTiDahQeT3CwYUESGPZJ7J9PmVxDpHVNHnzr4kqqzomXoUCn1dqfqWCyY3H6cSTaBFnR4GtF",
  "key19": "5ZTpGiHzLLVFAS9WK7ikfZJpgbLmzTfwVnBkncPuf5s8pf3V75g3nF72rByBY5NnAGcWTmGMxWEG4dhAx6UYpfhk",
  "key20": "5ZRnapYVWtBfhU7ezXxBLEcgEYbwQtK2LaftK3wrpYzr8mPkPCtpxQSZ2FbwXBH5i9FcnjoqR3XHKPdEjMTtRGNf",
  "key21": "45fB7SWT4EAhnMDDrZp33ZeFf7gNdoXviWsQGU6JEKEJCvwu4rCKmX5nMvVCrMrdhih4kisescFTxEbV8Z8JxFvD",
  "key22": "3uD8ficrDVheKdoxCMQT4fSMEQQf5kXA1jh6iEDan81y8WpWJAfKvB6ZeU3rEG9vTZHxhGNYZEyDAr4XxNXxZRtP",
  "key23": "4Ww8QvwVhCLpyqhHwyVwfe8Sk4UoVVPtp3GEyqkCy3ZVtWmTKK8duKEhXjUJQHwejgdhuy9petNCWobDutkRyDSo",
  "key24": "2pqCPjKiVkRSJ5A9dA5oRkeUwpLrzi5dAsDWitqFDCJ8YqAh95EHY1FyD8H4a4f5ipjSKYtnQQgwn8buYtCghkWH",
  "key25": "5h7xUABxxD4yY2z9JtaUFEMoSZZaEcwtBmGb7i5wWk8vzGrantu2oFeS9eED3j59og33aRZmzdKynmViHVeQdsZT",
  "key26": "hF7PAHEDwPLBQKZwdMms7bUAcGRpRyv7kAT4vsdVz65AMM4WhzxT3rjyDThaqAoyCWB9QgNWiiKdjs1scEYPazR",
  "key27": "26z4vgwHChDsWQ9y2Vb2iuATjFYDuEnv5xQjjba5XoBnGZ9r5iZn7zQXjFqMnqCkjb9FxBk9L8abkH6E2Z1yvsaq",
  "key28": "2fR3tRccFgrLiLiaNMaMa6HArqBREqfZo2UQEBh56mtmqMciKLSJWZzRDKr4yt68sQPUpBxrGfSAM34QEuJeT7Zp",
  "key29": "3s8qDBH28y35wV9wY6f8H5NHXYvigCwpG2rn1xZ29gX8Kw56E4oV2ZDeRHsvWNmSuVZi2Tj539irZtoUxMJp18DS",
  "key30": "37p3fZQdfvnHCjsxhyw2di3yXRmBxVnfaaiqAd7cH2VxmuZrzzK7Yr1P32NZK9T2HDnaAAKBnu7sW3vtrLZKmLq6",
  "key31": "5UJeS8X5kdYT8496FLWPS5LhHdsh3b7esK5dvPiWrFVCh7djBA8X7VVkoMm97tHdcRfmEwMfabMo8bocjyAThzMV",
  "key32": "2u9jGA3x7tjhyTcGqvoxTkme5Ruw7NH8XLzBZ27Af9obr8b8ghmtpoqkZY8r6nk6dHTqLB2Qd6Lnw7nfBrrVZQ59",
  "key33": "4m5QZUSDnaGKCT22F5jj4Hh4e6xrFZDmj7iizBRT8P8DsFgZfoGyv1LWnTUz6KawaZ5SDtwsdvtq21GDJ9FgYiCC",
  "key34": "5MhRKAA2Jpnb9nb3DabY6kvFLV32CjrBo8C7McdXaPhUTquDAR4Dd8Dan7Fn8A8AZrG8yULmTQvBoWcBn6NGoYkp",
  "key35": "3Q7Ccfn5KuoKCJ1HtjNiX7rR1WY1NBEPLJ6aRXZXExkeAAK6Q3YCGfqVg6uVBm38dubLcrb6EqXLVBjoFzqDn8Ef",
  "key36": "s5msZLCL8a8ymqRS5Yy6TSXpLL8ytp7q8HKpsfwAwrF4seAJHhtyxnbngpzt8T5Bww98ao3ZKwr5RF6gtG3j4Bu",
  "key37": "3P3uyJpS8XnMrXsb7WwzZwUfFgU9XWqNbw5Cj8ZwVExWRm6BRLEYoVpbWA6NNtg1hx8yobUfPTLw4uHDW4GFtvVa",
  "key38": "2xrg8ZWUe8Keim11z41A5jjJNGnYsvZ6fNZgjaXKrXv9ZMLZU6kXok3SCTvyfG8oYaiLhJ7n3CzTd1ckDzCwwXRt",
  "key39": "2MutbUbVABcLzMm7EFWcUcFEPB5ezS7bY7KBU6m4zAgikoGe23eo3QciENxyRftJo9f4y49DBd3B5tVDtQCEavRX",
  "key40": "g17ZUADifLvv57GkrSyTahMKPpSVtxtjTTPedf9uK6DAehiLwfUweFFgou79Vj1fs2jATgYgKk9hvjxUGZqA9UK",
  "key41": "63kkMUDxv4JGcGK74MYh6KDAzBPwLgJTDUXiVGmLYB7LveWuU1Ygi5tQD9AVC6Uk4WutHgppPmxCnFJUypXQZELH",
  "key42": "BGL4j4iYtecVPKDtjZDQ9TLFSaDkthZgGcRHS3v1yRviBSBQe3y57T6bGTjviRowhGJekTheh8416iPfmopEU3J",
  "key43": "4U3kojm6YYL7PU8QtrFD6gQjjeAS45Uy44weBZ69devfxEfGvAVi7U1DGpg85AW9b7UGmDN4Xbtz3x1Bg5VmGtht",
  "key44": "2daEvMbAPG5wf3KXt7swAP4ZyR8HtTNJhek8eXDwo5jYXMZeTBsKE97FGWB9CbXfYz4y5B1YeqbbUmXwdoG1ZboS",
  "key45": "375jEuReRcDVNCn8rMz3CbW1ML5i19D2q2KaCmVCs8BpQiKjQNyaPGbXPUj6NZP6eqRFL9XV2UM1JiwUnGcfiHPw",
  "key46": "3RMWzF7QkoC7DRLqmXa5DT99nzU6ruYnQzShxcRoacmfwrRQPTLevdYCqm9K3jipo9N6aePM7j5WyfTbJg8Cm634",
  "key47": "27kYVTFeMC2FcKCvEfUPAmVwLnKzZmS2P8fXrYJsFprNPSdJRDgnpMqMR7S6fdP7cvntKHVxcYEpFUuoNX3WTzME"
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
