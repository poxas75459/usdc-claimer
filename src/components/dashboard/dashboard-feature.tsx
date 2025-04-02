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
    "3SABdsS5KeQiwF9bypYoVvSvSQK9AfAQwt7GqXrcwCtMeQRaT1G9M4EUdnRSw367vRyUe8ppu7je4kYWmY8oYhKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvNdn82uqEVY57kec1VpfAsALmu3x9okVFz7Si9NasCm5LHxzvstHq1JTC14RpoAnRCc9SAWx3yGp53HeydaZW6",
  "key1": "3tJZhyq1LFrAstJmTbsbbwUGfnDJaWLnKydVPhX3Cft1HqnC3YTzpPFWBFRNSw1WtyXVg1JNuYvtCRJ31qoCwbfU",
  "key2": "Ec2Eo5J1fZde3LEjpBNZu5bHcZrD5ZVzJ69XkowYtJ1hAmkG2kYAdzZ3wkwbnjMrYGss6TkjdLvAXyuRrHxMhmg",
  "key3": "2nQ4rq3ECu3DLnUSne8JZqy4GvxNj6pUADxqkC82ALGiMHmuarMz6utYLdNcD5mcKTYfQrssS28pH25qdrVWztfB",
  "key4": "2FhdEiur1GYfgqizGo7zvviHemQjP37LL66B54j5J7KHYr3n84Zys29H57kbv8LuSt7AcsjpVS9VBx3kHLUUyXXc",
  "key5": "4eqS7yEyjMHPr5LqYoL5FfKCJ6KycTAqDBpb6sGz5RoqpFUbiwwk5NtG7cxnCcS3yfmTA1XUjGzqgCjyryiXK6pN",
  "key6": "4cgs6gDyrsWj9uguWGuqUrJWPUquRxVPDDVn9uyFjpS6mBcSrL34gSmQBDCb4yN21RQeTZL8nAraBTWozTBggfYu",
  "key7": "3NLkRt7RefcKposE8c47sxL3CuUgNuHenwBwrcuX1kUFDroHPAoy334cGexxT29bgwYoGSez6RbmyEQKZMERrfY2",
  "key8": "4BxJvFpKAiPgPZqgtNY9jkjp4z4fBG3mqABEXcZqm6pkeQMo7Lc3TBp17mzK2QjcfhuoktmPmxydDrr1wrt81SLQ",
  "key9": "5Ba3rJahf5mSMfaiCCgdWXFfcxDFtS67Xmr86ssdVNnkGhgzC3ArH87GZahtpRictzidHzYmgnWHvFdNGbTPAy3E",
  "key10": "6b9ZG2cBzybC9gsEwujTvaDeoYEAJDEw6mD87nn3x8fTmy9zeRdzKR8BZh2FsEMPsVbmrobsbYQ9M6T4f1QAPMZ",
  "key11": "QtxXiF6dAgzKtg6gpUHVXaxSkzXXnAzzkGXNEYCNFRNqeHkTSvtBsjbhWApy7cfV8QSCnNdYjb2GE4xi586XAbt",
  "key12": "DtK2AiNtiiJXpCjMCmHHuycQKaUUKv9a7t3jAfMcHAskcU8Ta6n3euFaH5THtxMpN249htoN6WwP3nXv3UWmQEK",
  "key13": "53dRJkMmq2bDv6eAdAcqkbUQ1p9uwP983tkgjaGgZZ5zKYDnefk2uoBGxyqYYAnML7mP1HtbsNhV9EuQinc3dX1D",
  "key14": "4mSvFfCLcDs4JMi5p3QD9QYxVvuUVL1kr53etqeNsjgZjUhwsjWUr93fA7EF8RrUhw4L76s6T53z6BPKR9CDrFmW",
  "key15": "4jSReXSdm4oyQcdFPjPFqcR5pcwjn14fezFDT25AgNacTYEgfMwN8YSLYHnRFdVCVc58N4eh7LQQMETrtHtPnCbX",
  "key16": "56DTHwvD2HQ8A5CymUdWTvkP564y1GBwQuNBhTcszURhWZwjHtXaoJRshG6KsFrUj94j7snbfFdA2ZV6KUx6NGc5",
  "key17": "3RyA4gg4x3JVx5FvmaqVBhieGgi6zc9sVEKm1RwuypEDH5DfejWo7f467toxvqDT9hhcw8AQr1gZMtuHpCP4gY9U",
  "key18": "2UaGvo8xvyJFbMJRpWLS6317meJfeg2nQXBMsV4SZ7R6Rha19oawHe8bcMiYNCdcM9vfbvPyxfVtGbuzUaB2nkze",
  "key19": "jjtGsrb4byeGdv2KuApp2zXa1AKJh1wJPrpRhsBWX8y8cUm6BCzBeXqdoWXYwZQZFcijv7xiLUETaQsnJaLEeWK",
  "key20": "5GU9GR2RVGQNKrSNXC8GXeRt2BEsXf1LHuRBm48p3xGWRyUfRKJpUpQnn6HMfrt2W9bh8b9t9pQ8aZBDQSYHWW7x",
  "key21": "3drbFpE2hgay1kaw8hp6jh3iqbR4qsHAy5aa4jRZmN6ZAhdsxpdxSqEg4M1KPixacxExoVySVaLerV2oPQZkEwb5",
  "key22": "4vYhHy6F1KvxVciNpwkzdhNAzQ3jkyJENBQ8QrivnSdotWqAPST8TFdkbsZhzbYZWd2zYj4uhNkiqfKzeY3xwQp5",
  "key23": "2HN39pm37eTXiruk9cY2aESiBcw42evLNyH3eUoaY7zS5A433TDb7auWXkWfLonWkyHB3Y3tm5dwzZRx9rZAgydi",
  "key24": "2GqZ47W3nhi9CFCVXMR4Bz9axxTxKsXvYVziCSSBDPWwrgEFJoUtELRBz43QY99qh5MsMMpeHb8paLehtmqyfENB",
  "key25": "4qbeKSZzp8jqi4jLt496mBPHG7ktogRCMX69SGCvbCdsiiv6rYBp17WnV1ojkETSWBSKAnKcaE2hLShi5SzV2ce4",
  "key26": "PhXB987wX6N6wBUGKgfXaAa8FXWbib88TKg8GEzuxg5YjKuADR7zpi5J5NSdcM878mu1jaYaDbuCe4WXfwUbQ7P",
  "key27": "27bv2Sgz14sfb8y2CMxQMxERQkkzEUbGwzwTMxBWNWJxjknCK7dswTwNkuAsU9fbdNackrd5hUx3qKHrfyhDaUNj",
  "key28": "4ySJq9MFQDEKq63E9eKogEHNdP3Nmcr77nkQGovgJUihETPWyRaUh9b47zaMKA8r2Jw7jgJx3cb1HbAgA2s8cv2N",
  "key29": "3kpErn71i5KapMv2FwqdgCrLrf6axpiy5GVffdpPUk2M87Bg1yYxiAKrW1ZApUk7kRjnLstUL3WJe68freoH1bdu",
  "key30": "2xMnDgr9gpDpBFNJsVazhEmomAgMqp5LAQk2MXfLPYVbyCst8qpCJLx5fcpiQBbpmnjMYQ652KwgEKNHfThChs5U",
  "key31": "2obSDX2r2bB3cgEfC3UtUaZfgn7k7LopeRFRudHo2FNjn14Wetcz3VgtmKkDiP26LmrfQMzAZnu9TuFNB91RoxgE",
  "key32": "5LToLU3516mFzA9cs1icLrApUKSsF7SADA6HHCYkEKeeRaP7uZS532eAij5Ew2r8k3i4u4pzFj1Rb66LR1UXccoQ",
  "key33": "3akfnsqYwZgn7JE7SaoLGYwjZE2NNM3GADdkhM62rYMxanyqKBCK5uQEWDn19bXqE4APkDC4GPg6R4oBbp3GwxNq",
  "key34": "35udrhopwjSmGJChnMYzyqWZrqSQeuAd2aEc4X9CvPxx1pVhukYRvsnhFYEr9MNko5ftUxD6NPLcZLG3ZaLJgH26",
  "key35": "3UT9imJUj8GEbGVyX3c5DaZwB2o5CWwURBdS86r5iyKPAiESZgKVqcRDfx4tLeTPBCWMSUSz2AX46rPrK5yjPv4h",
  "key36": "2tv8cX6iwkMJoj7pkH3KDcri1amnKH83jkmcoq3H89t4SYBETLe2daqPgTqB8A7EgBMjkQvfgAqEmZm1pS6p2qri",
  "key37": "p7VvqGKfmAAcrnjBiw3vhEdTaEp9wknj1uY6MZTYbyaXyKsaXzVR7VoVKrCeg1wtFnTEssiq9CYDBmK6b9garmM",
  "key38": "hbHsk8MLuVDBNrpL6xFaEvKjJap9gbRNG1kreorKdpjm26APbVBqQgKfgjKMG1PcYTqkDXT6uHt3s3j2QpUncAn",
  "key39": "5xeTZVVj4nxKMZY512TyshGDYbtuU9yaz4q69gG4QqE54wjDG8xZC1pWbRM2YNS7XcP4nxddQe7qbC74oTp1ERc1",
  "key40": "rxhiz7h4xgHSnb743TSqmjLBHTyQhxmd53HnYCoM37T7J7rEVTwWhvycVYmMDiHY7kEJF79APH8VHsmQkwuiG1c",
  "key41": "4sXwHgDubbahjQaBbM6auecufRsLsSgWSwhevC4NV9qKjg8379RwwyU5ZqG1dyN1g6PzPPDrU4dymuTzH1btfpSR",
  "key42": "5bmzKUGfih5ct4J3624Pr9D1dnE5Cidjw2yPEuuCUT7BX4cSJG3B3pbisVaEqqtsHSyhX99WFuxiKKKrpYWUa7tA",
  "key43": "57AQKmfv8ynFvGSEzG31Njec9kkpBRCyMP6mqZrNdxPP8mMTtRFxNb3hfvhaTbPm5FHoHAEomBtrni1vbkQMoCr4",
  "key44": "iGbLMCsfd2Vc1rcbDPQywrVVqVhtwqZAqdKWvKYLDZuUw2BxDhgkaYR5EhASrwADFwHAmfVhPs2eqQapkAUGiTJ",
  "key45": "d4ZkYAEnnr4WU3UeHpK1jKQFFvWJdSn6cfjcBKuFJms3MP56gYzFF1sjXTU5Df48NeafNn57y6GHL1ycNNQaKCd"
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
