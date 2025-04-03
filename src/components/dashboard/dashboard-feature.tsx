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
    "3Kmu7GYiDEW9jmg3GYe6nd6NCD6UCN4RmTxiacEdsX2b5UkcA6HLMQyKZeuWQhYGv3bMs3VNWbQBu3NPfDeShB39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tq6me1QTBPH1fcfhJcYwRHmE1cj9o2atpFxkjXJACoVtTS1qxVTTi2c8PHkJJxpoeHkGA3fREPcTy96Aq8VeCdj",
  "key1": "4pKejhbnTmqKqXLjWfcuE8F99LkVaPR4jxtwaAJ4r3Jyx3VaLmG9QUtehVBA5K8GgEiLovwewnhTu54qoMKpSCdW",
  "key2": "3cRnxvays4h9bFDCWqQayr6tD2CvoPw3cMYzCJ9TfQZ66CWtQqSdg7BFyXiyCQ6pHj1rEBAJ13z1Ww54Z1CQkZEi",
  "key3": "2meUZtjoNXwGobe2hej2osBtwPdFddybqkKEoBVXUaj3cgLnPhPwAzJ24p22wVQuXKtACvcnTSFRjN6WxXRC3CgY",
  "key4": "33UXE6MFnWuKzW5N7pdRPxwjujCN5iYGv4BBf4Aga27C6ny5TjT7KLsGJprQERX7FAp2PuaMXGLccEc397TGGQmW",
  "key5": "4nyZsy5F98fWLHeanpBsHt7T2Tz9Vwn2qNhyJ5zCuCfxRkACyDcWvbUGLTfBu4uqjRRhqDhogTjP8Px4zdWBjkY3",
  "key6": "3CLW6RL4BeTezqZv5LVzBnrUzgB1NtoPbmv8y7VqzvGeG4ATGqmExi6nHvsHVsJfWTPE6av4dMuXbeUpDsAD4XYr",
  "key7": "3aRV8XfXn8FKKQXg77pYJndTp9kgJDGhNyC2BpbKwrWfjbzVxWRVFCepQrLPgRdrHfz7nj3vv3TvZk12S2jJfxca",
  "key8": "2vfP88LraxsAw98TmiYNZEM1v2RQjVTEdi2pDQapHJBrY7QmGdzDeiV6BmAQ76wy7yCBze35zdktU4p6M3UTjZYP",
  "key9": "32Jr2g1qiX7o1XuhffbsYbMsazwwJs6ZBgJEBASkqPAJ2JtXp8972ne4vk321YEoj1iWkT9vX4PWHHxj4tkhvXFT",
  "key10": "3ND329xoJpwvbScCsLNJGDX9antnpy7bKtm1zJuLmf3MKhjkfB7LZzG6PeCtAy8cmnY9YRDZs1BRvBfotodqmDVb",
  "key11": "iAnKBzGWRuMYJUv2wRtBB69YtzkfqE9PgdEikrk4tAoJHF51wSqg9FwbRYQykGNmVUYeNBCxKgmyDgsfUqznFtN",
  "key12": "5rCT3pXg98CLByfwxFJYhAHZDMDKynyqLbQjL6Qfd4NARnemQdp5Y2jMEkLjG2678ndaNqwTiWGegez5vkMJ8Tay",
  "key13": "63Vsm6dKG5BhCsSKaTGCRKDizb7gFsm3PmZscsTDfeL6rYF2AceDzsSWbwUXmrjdgX9F4FJVEDggFLC2nVNPi8LL",
  "key14": "5EBQaVSEDg27rWw2tmVDf1sorrxRNRPR9gjwZmhcKDqE4U542Ajxw1onRX6YLEBeKwLgQHKN9ErLxwAHwip1PDWA",
  "key15": "sV25pxGQKKvHr2iEsUPzF4My2Kv38iwwz2w8H9od6W9DDCyKzz55kveV96XuhUbHy7zvTZSFkEA3DtcC62kPHVs",
  "key16": "oQD6M7NdqVbXqmeDguzmqbXKQ94AsFdW2mTnw5nzhctnfgtSumcm7kZmTh8CCpBarmbb3BJ8MkKQkUZeh8LGA5e",
  "key17": "3cFakq9aHWZ4sKCsmEyvvQQR1ohtb9mUThDQpyVPWHUu7N5vvPArmcZchvEBXGFSe6NsF9Y8VXq5Va6ha5ZhoNQN",
  "key18": "5Erv4sTFdfsRYZTCGRGi5K1ZyyxureRPub4m2Mo7SiH3esEpJUJBVjXNyQjpWT3C9xygDNNkN2uxssmLpPD1UhFq",
  "key19": "2QWL9jSQY6zEx2sMTpL17KyNnu4EKH2ksj3NSHJFSPbYh8CZYnEcLMH9vbb49WHiU2uHm6hMELbHi8Kbxew9Pzpe",
  "key20": "3eAkz2eXa6EoUCDyat5Ezd4oTQKwiNiAEu4YnFcHWsi43FvpqShyx2F9C8tkV3XqEnygf4UQ8Kkg4zS6SA4voPDH",
  "key21": "44gqZ9FkY18VsmqyprFJC83Jz1pTRg8diCdF7jAd5njwjgDvKo34KhUmX5Ad8QjtFFjCsikXsjstwQZboJ9SujN5",
  "key22": "22Kg9hxnTiTjdvu1Xhhcm6mqtWRgDSMBxHTQnSixrfmgM1KsQ8AwEWKPDcVJkiqxD1fMfLQsosQbsuY95ho3F9yW",
  "key23": "5XsyLoEQZU7obyuRSD4ZZpiK3hVZbBaE7tForE4YEdWtVq9uQCw6ZLQ7UzPrm6skMnhgugYF5SP5wU496Goyzh9a",
  "key24": "5bnbFcQJ8un8TG7X2p128D31qQ1CBbGgaubW17U8Axkq6xy2PjpCWATsQcDv4HPkimPaUQLGkWUGzWa6nhQdwtmd",
  "key25": "zat4zwmxM55T9YEjXFxB5f5ppvB8DszhcZ9MrMQshsHrq6kh36qk4yWjXtje7SH5xvnnJ7gU6zXy7PBHDUzY6sJ",
  "key26": "5zFuWvcMWetmNAhEHBX3CDRTMrXrCLqv6uCYzwsc2EHUu2tfEpW2uXU8ycj6HpGxkrQJW3YQsyXJhgZcjNAfvU4g",
  "key27": "4w4yfqRteKVKk4fwyev3sMVKzUaVFxxghe4iDYd3ko8zgsHctGTBBLFJWoKBSfLu9kzL9Ymt5zT5D2o8iTbb6YUc",
  "key28": "4EbLffsXaR8sQvVV8A4igv2PZP4peb9xk6RxZdBfsuA6eAMVzAT1YVu8ckKUhaW7BD8mN2ZxknzvHQMoiaNN8fLd",
  "key29": "w8QuUr6U6ZZVGgNQft6EJsd8QoZfL8nmcaZbzTty1vUioKGCe2hZQLDCxBKqSrLiE2Wqcsy6B6fD3tajcnZGJa6",
  "key30": "4GaxDmy7iR6xUMchGbE5FdeFnFmkth4cbU8gfFtFZrgzzcMGw7Sid1qpBvqTVmoqn6fgPdmzwuQGreFV7tYUBsMo",
  "key31": "m3Roc4amX4cwDGgUAQjqc8WoGuxnMrHQqXe2ZdWPxC4hsSNVvGV2q67GSuyeyzc8Rg5u54SYRngGyRHSQ8UqoPw",
  "key32": "51gyizFbj3AsGvAycPJLZysm81B2ueFT5tDzgQK2MfbMR4bZGG7VcYbR9CvzW995pSLLAjGpYKkJ68MFMWMLCvqF",
  "key33": "4pbKXwKEGvZJVBVUuRgNweMfBAJgvxc2Smr5oAT9ZKvfZ4ZqnLAp7oC4dqDfzaMhBRawtWxrJQu64JGRLXZhHKoc",
  "key34": "4CvpVXzPejNdKaA79JGCYZnQC9PGESrYtMDpzVjTtu4TnbwbxzqhA2mZvM4kH7FoK4T8XmAAfrmywCYhokRU7RqE",
  "key35": "45cWMPNU6KZSM2nLLbyttwxFTygP7ijDUNGsTo2HLeAtU6dVi5t3MbcTc8FbQcV4E7K2E5nsVsJhBvPX1tDuDNUn",
  "key36": "3tA9Et1UBfcBu2MpPcNxWFfuRm3AFW8tz92Y44tYHSveDmZuuktpUwLUg4UixAMjbMFU1UDoqEcAwAaQaAHCk7QQ",
  "key37": "3eCpWXHPhvyzhTWD7TN9fmHENZpK1AKhmKwdqxXTjEjt77DvrZuYHnHDk6nfE8otA3AbvRF4wFEhzewobs4Ak2sn",
  "key38": "PV5ojnHRxm6hbYVSMqrSqSLoehiNw7prxz3qvBo7UhDw1jj1KiLsBrbysujQxipW9XRs11N9EVv5RqnLxXx4dYb",
  "key39": "7DXjakgFwY6rSJohivDiZRvSLEhhcsg2Dk9eEoWHSqrLU9qsBA61fEUmWYsmo2Dotqt6q5UoBg7xTntK1MjK8mz",
  "key40": "3md4mbuBsrAC8SCCJtLeM8TKLXdt8b6PowB2ZL8tb4gGpJ3uFT3ubDbzCzc2YiAWxsi1ZYi3AniASzhneti3m6FJ",
  "key41": "3qLjZvFUsS4i7jJbQyGYvf3gMUipy8CcrtKPJYwkQBY2nnJPaBkBsbA6iRG9gEN6cz2YZKGE5gf4sVM4SveyXmQ9",
  "key42": "63emNTc2P28qWEEZ59fTyTntFYGat3YKzwz697pQ3QfqWnRVYm11XBFQ2sdnrUuKF7r8SRLx7rHySLcPnAEnmkkP",
  "key43": "27mzAbvEnVqynorHHCNHJqZCwAVgVcJFkhPWakWDaeXd4YN5dsHM93Ep3aHARKWVStbX4rjER3nUh82N4hziaxwA",
  "key44": "3oqWU2xqCuLgqJPztjPwD3zW1s6BwmTQQrCvvNn8tRk6Jer3NuFAow5KzyZhFybgVVjsDyvjK99HoG1dZ9hd4g4y",
  "key45": "3QV6QYubXp1HQCD5CNETjPvgCVGpS14t8RzcNbsk9ks7CPy2tHh6sFgQDabJfd7dXzqeqS39sVLPb5pcAnHHQ5N5",
  "key46": "4sP6XSXHWDosmFHnnP7VPYrcDdNdqWk1xdZAm221dKTcnWVjiM6L785NwV6nm7zvdzut1s2DD3h3Ei73NBC1cmHg",
  "key47": "5qcvPjFPC2pAFgqDmxSro7MAjzzQgemwrkJYXsQPyecz3hEXSnUg1L2zBrA2xJJfUuWcS84yu9YK9UfgNRbY3Dqn",
  "key48": "5EMTEjQS6WkwHMvwJP6Dw8xhgnRD1MSBf3t1yhAuj68ba7dJwgVDqkTR1TRub3DQvyiGASUq8E6o1r4VePiAaJhG"
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
