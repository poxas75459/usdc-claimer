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
    "3wfSFLh1Z1p4FN2w3KRHPvacHD5VvC9Qqh3JQRk2B7dYhKQFUMmBMmd66ZsxAf5TSp58xbK9NYMxteeK5HTdqVrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYTdkipAc4hQNob1UKVjpTn98vTXZSA1UHu35WubB4UZgMHzfXvzgpTgzJFRjZSmXjtFJrR6LesSaWspCRJWuPJ",
  "key1": "35EiVLR696f4vzYMVJNbiHLtNThi3krD6fkoz7rrfacpbSDsFBCpANsvCL9jYzcFEpprQKWBdLDsFePS3D1n1iuk",
  "key2": "3yAAs6yZWMi3kPXVD6Ewv4CvTjo8d5kzPhLBvWQYiTGqSFSE4Q4rMfJaLGiyGRZsDTidXSnFWxPE5d8Gi93v7zib",
  "key3": "64H7zTtFMqGrzYuqz6mmU1MzxQEBcMK5JCV8aJqKTe8zHkLuLJTJPj4LVGMBy5THuHMvYS37R9k8AMVUd5tFLFKu",
  "key4": "ALJRPUUmUhq71PjXHjjNNKZ4ANXPMeGrqTXf5BqXupzxvU1ZFy8CEmwoiJ4T4MVvKiDuSgyS8ydtCG7R6R6MnHc",
  "key5": "2U4VFnJTcZpXQqGn4xvHz3SNpGeFtCiF1aUsmUcT1xdQuFCZbJPqwdwPrXu92y574pv4YsJV987uEfHtVwJBivdF",
  "key6": "3oNvvgBojhtuFH4Z5MCHnKu7QTd4ckwqzJuVf8Xuhhfbbu65jmZ1Bwh72Ww4ZcCv4QZG1BtnJZ5c3WDbn4jrEBqf",
  "key7": "8vq1ZQt5AudXtThXd3LK18qUdsZ4jxGPFvHqff5PdhmgCNM3Z8EemzhGpt1y5MS8bdyLuwbLzksh42kBVhpzkQJ",
  "key8": "3je6z29gRnk444qFmCmDPeGR81z336TZAmiNLtZJD9xpygZd1xYDL82PKANfBhfwv5eJhUrLFPGiPGZZHbw4fic4",
  "key9": "3kWdxWX2Lh4HXZdkLkiMkQzTh3TKfETjPTv4thdVw4mtDzixWqZbJRq2UFVLsWCgjpaVxuyu59WfNDLJ3EA23qkM",
  "key10": "4j4GUYof7A8RMzSMsn6fcnt6VFWfTaEpG7BAvLyPwmxjjEZNGykWUfZfvwvYwBLQfs8QUFKVZunN8Z71VE4iScnU",
  "key11": "2XCuxgPwfcKBqy3j9om6t92VVRVv6RSB11Tn8LByhhREHXY5PB7Yu25TKUgyTss419Dsk4ZvaWkDz81mkjYngLPN",
  "key12": "32mo3H5ZpjorWwdE46WVu7hCAYfubajvHFNLEd3LqR6v4ptzyhmz4S1GRYA99jWxE1UvmSNq4Xi3df3ujDpW5PAo",
  "key13": "2cemiqkQrDezvXLVc2am1hzosz5AmsQ3bAtzMkn738BBcqajx4STXFoKr2sH1PEB83AyLbHHGMDVfxxGj4sHSthC",
  "key14": "2YFLLyDQeZavmaQPm6PYidaL2NMTkckFxMa9rkHE88WRCjBdN7jKzYE3jgSgYEFS5nMYvkJMoednmgUu5iMPnAQj",
  "key15": "4rGtb4PWqdz4UximRYsqmbH6fSxT5zG8Lf4opNycGZMpZqzMgwPSsshd7gG12HbasmKY3Uy9KCqXFzTfTiLVYakG",
  "key16": "2s8GFPUCpY95rmLo1hHMd6HBtR1cCVEYtaQndxTHWt7KnKgtKPM5jfv9H8XRujtEJvaJtV265dbdri1fPYBavFt9",
  "key17": "3jVBo8XQfdkpJg6JeuNSLpniAX4PdWdLACxLhhP2iXy7jbr86mJFxJdsYUpk8QRRCJyaP3GbeBuENyQ4dGqTthjm",
  "key18": "7uL3SuDXSFxcuYvL1W21foE5nf8f2iKg1ANZJrirGtNp6MkfHdA7c93ztuineo8itjvJxL9P9qjAPFChYymACfY",
  "key19": "5BCPxDsfNi5RRRm1tJyLnLbCNettNBZgevYFR4YdM6fuFJoh2DVnxjmuiqZjwPh1duUCrDhkX8bSuu7xnMhJcSxN",
  "key20": "2zYq2dpUjKVDaUaf3Lmq37TmRFja91C9Bcics4iKPWwUKqqBuSQqCH3Q5iVuuzgxmBb48XNNjMHD9ucAi7Cr34gZ",
  "key21": "4tRsgQPwhNWzfdZ2XACfzydsSbfUNtWH7W75jjveyW8BZv9vX3GrdVL6PBbHpw4SKSkb5b3MhTZGdfS4qJztviva",
  "key22": "Jv6SyN3iJuvb5KErPBX94sdHV6RHhmsDK9H3gwbv1ExFfHgWr9bnRPUkzpmvFtutn7uuYfgQ4utd7SPUN8srtAM",
  "key23": "63ke2QWQ6tHao5KBhZiq7JzDj7gQ2e3qs49X3DqmKNtdWvbnn4ubHBBY4wkaHcLnbMvQhgTofLMU5pweaFnZneV1",
  "key24": "597A3moEG1TjFL8M6fzzEMWo1LsydniYXpsfPN42vVKib54E8jPDAP8QWHuq1YaAaR5JhF9TtpBimvg9qzczEfnV",
  "key25": "4h9JVaJQVhJfjxxWRnYC9FebpnhvczT4ve5xwHoZbDFUGUZSLcQbC1kLckmh3qNdB4P91SoyeXbhBLoUsGWJiGK",
  "key26": "4TzsnWLKD7KrJJQHyS9TybsDJC3gwaZKVXgAM9rBqTNAPhMcohzsA7viyMq1KacGZkCKntwfXU9VWR9aMn22Caat",
  "key27": "3FSRUDhg6PJ8pCtE62SVsZLPj7uTBeqXauAhpEzqpoopJAUYwyrmwD9USFWUnpQcKtLt8JDaVDFQ1qH4QcFRkm9g",
  "key28": "5WTvD9uePMuaTXSgrFwguF1UqbV8ZrvGvABfL1zRfRyjRAtc7sXTpWMs8igsYZMnJGLvrPdGnfTD1AXXMdpKef1Z",
  "key29": "2QWqSUUh46PDwBcte8PChCUJnujAnemBNBLTqYRksqe1iptqetjhUfoZAh7sfJ2Nbo48Gxriv2LemmBPuJUWfYMT",
  "key30": "52kscA2sgjQi1ardr7GbsuawpTsRkHYUoqX7iLXALm7mCdht3MPttqNY4dGGBZZeqURzenVQSg6Th9a3E5G3w76N",
  "key31": "2aGcq8M5qSMh4498enAAyxtK5voXgq4yrH34yUUponTgqh3JJExpKryvt6ka4BVJbNcxeFD5rpANgmgfzVtRH9Yt",
  "key32": "3vrfQFWZw62Cfih4y2XhJJ3ypNtjvcfW98AaJTB5cZ3ehoAGfpe3LpPXLQYiHxCviTZWSh91yoCKyXmRqM3wApk6",
  "key33": "uqyhieJEizpuzoohYcQ8hyYvMcvAvyJxYqLF2m7frL5gxPCmNB4tghsatt8NzuVwjKQwxcDwwxJsP7PRaPBEu8D",
  "key34": "5RmHygsnJsurGqiH9bQV81jLx6ZaBpYxBNft8NoXHb1k9NmaVYhXyv2YDyvRxbvQiSz9T8Rv4Y7kpLR7rtk2XUe4",
  "key35": "3C86M8F3JeGMqCwo8rf4xvPT5t1etxbqu4UXXDvHYGW5Hhn4xaqCbqbyqUB7HC85mcPHitP1BLpaBVhoWj5knZu6",
  "key36": "46syEkpH7JQVQCjmaW5Nu4LsNrTuBBhkJf35caNDXJrbv7K25zmQAkPBu5f4163r5HmNkUamhCN1ASSuL8xz8eDf",
  "key37": "63Ren1KarxjXHdAHt8oi2eg7Lqra3ANyLMnt25BTbwYGidL5naiZ8ynvVqvGiiCBiM12v8Lt4cGZWsz11m46aU4v",
  "key38": "2EeH49DHFmVdmaomTNoz5tG2tktwuwDeKwXkhcMCFu8mKYxS7uNtsGMmkodVgG58Pu6fpugSK43MyC7EdfXCfuHU",
  "key39": "bFx2HJaRc7Pmjh5ARjKMjux2DgfHtPxdkmXSXs2Z4VxBoDJRsSkajNtafnCd4zYe9EkJYeRQ9773nScdydCoq9H",
  "key40": "4SFxD7puFZRxUhXSPXTEjqLJCZ9My7XoxrwhXdxYC37yYLWq637eRSf4b6enfSfkDMX73eYshWRcbN6WfTh4Ebbu",
  "key41": "3nnerhTKnXG5ynLnhbKPjhV2wygvQ1UoPj2Ty33qVtACWjR1fAkq4f6DMRKmsMRXFs9sVj7L5pPDyBJWFuctDFAU",
  "key42": "4HSo8oaN6e2fvBHA24QTbZy2UyTDYKtzafSJXUhifWwFNnXQFjx3M87DcyZWbuaGrDTZj735J15mcGffsp9QB9Uz"
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
