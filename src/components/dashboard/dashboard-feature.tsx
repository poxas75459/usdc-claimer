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
    "24yPTGGEGiinMtXiaUKEV2ZdpS6GuMcRtmVxFDc6xkMw1zLV2bR3F1ha44jdhpS3vbiLw6fvAQ97SyAesXPu3zFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcVjfmiidzGr3W9PHzgpaTJh4P2VDXY2oHHs2K3wBQgJjAS3m6v2GgzYErur7pmT7jaWmhT5xtVDgMxmj9T4oS6",
  "key1": "37VSjGjhQmnzq5QCPHYmYeSGL7AcWaZtyD5DydaF9GSUsCqp631Lzn6rYSQhNv3bCJQE9iQqa9drDafBkp46K8Zu",
  "key2": "4xwunsfmkGGZ4HgyEQ8p5Km8dkX54dvrj2prpeRzJakruH1HiUyHjpKdf1SACCazvjuK7dBWUv1wE6qwnEGjQccc",
  "key3": "4aYdC8ds1J9TMjJ15fDomPk7wckaJYYSpHodVRD2D3rRqA3BAcmm76WNPY8jLEXFcM21p2L2bPwBFTfLcaP41MR6",
  "key4": "31y8GE4yHCTC8AtnbQ45Zhpy7CZuejmydHeDVv1gXYgfSzZ2XbcDaNAHhyhKo9zbwhLeEhFb2eEZLzNG1jctm4ic",
  "key5": "2DqjkZYLphg4kLA2fGeTdUhC9D1EN7aLTXhgRSXesB53JQbJjXq5y6oC8gHdvPLnWKss1BKZG15doFogqr3TL3UE",
  "key6": "3bp9WxBzhWJa4tLxQKs6FQVct7z8jFpxbUW6HSCDB2iHMLVowk59baksBEnR9yb651Lz8jXUYjasLP3zV8QENeKs",
  "key7": "4DTPT8DUJGZTtRJpSYr4rgHVBGwTXU6w1WAtbKzcRZ5HeiBG7ZH9tZ28k56z3UoGQQUtU64FpfvMQSumD96Ca89p",
  "key8": "MuN9NFxKm5su64WZwjw6D7kKh2VaVqeKoWGitYnjNAiVTJSBQmFVTd7WZUKetximt5HN114Vr8rFjni5XM9aLmZ",
  "key9": "4izn7Mesi7USB73vSL591zJfgejCtbZixxMaJEMe5Qwe71hELMSwG7uAvAY43rADTxLY9eYP7bKvpjUMKLXN4WmK",
  "key10": "2Vnrqe85KY98FqxLLnTu38t69cCWkmDBPkUPsthQj1GZz6S34FszN4A5YVPYKzE2CoPnXwrw7yyCFR5uQRKQHS7v",
  "key11": "3Zo5oXeWanwGmLaULtcDrAU1wAPnASVc2VBHNCQHfJwer3XggLypcTDcjnbX34S8zfk8uBhuVWiekEJ1qEKYDbuB",
  "key12": "3ymqeh5b92Me5axUo9TJHcNjCz6AKnkEo3Tra6aXLxrZqpw85n8USUnJWDrKF9WfE8NSvDcsnXQrpwuPWiJpaV6i",
  "key13": "SK1KNJW4th2Tie1vnQoMbZnyV254RCJ2SqDijPect44L2Q8NTYYa21fFPcvc6EwiPHf9vcqpY7NFiTDyeoerBqy",
  "key14": "35GaqSjSFaaUdPHaWUqnDju9zSZV5BjNWMa3n7X49mBENH6uJrKF1n5YE2ffNF6bsCvtP7GBDVTUbCcEPSXCFJCi",
  "key15": "kzFdvuKLP6ogDPZ5qob37s5r35ZrHEyZawmqvsAFKYLRANPFGDAaxMz36rbaTBVJwwLZXXQ8afY1zp5H5yvrfSL",
  "key16": "3Zg5z9mdr7NFrCgimWGuF8nxXmNPQ387t5rg5VvTXtTddZZjYtbMDgbYCiZHe5zXJMHuA5DQ6iG73Phz7nWKpxxy",
  "key17": "eTxcbUf6i6degEbmuCddxe7aiNswmkqBkaR1HqniqeEXLNFNHCVT2Yrmoe69HJaZZbLymabNR7TL3u4HEVEtLRH",
  "key18": "5ZuahktWhbyYUCbxk93F1ojGdWVeLFnZM5gPXLR9YFZ5Di3dSMgTVdmqaL1NC7me5SmumRTh5jacj7iWX45GpA5",
  "key19": "2djpVjbivN7sAY1KmBaZt7FTetJJtWhKugJbJ8uJ5Bk6CiqmAE3gTPLti3zBTcYZCzEW1oUbr41fPsFvMRz6joqU",
  "key20": "Uvpie6ySiE55NShYxLRRWatt2XmWVXk4uZfxL5kiiY9yfU3SyGyHeez8FwgannL34xMReX8ZZTt5SEMhmQGTVJe",
  "key21": "2wt17ZzyLhkMnUeNAoyFCr53jpSL2q44S3QAaMjPj7Kk3KF2XwDUVh7iLoPus5DqGxzSriYjbDoyvSd5S2Rn4FZs",
  "key22": "5qAmuybYkvDQk1SHVf4ECfgMXPcp66jQrbVEpKVJeFGsxPQydTbMXSSUJMyMqkuZP5aNymMcEeCLRKqiJ8Nn3Kg2",
  "key23": "5aPLAkJrPBLe1Qs4dwTURX3X6xvBHE16BjMq14XVtGYwPSfRULJFGY2bDjGzCAHJiFXAp43B9z5kyE7oYAZBisPa",
  "key24": "4S7eREgxpCdCUBDvUnm1YFBkmvzo1DN5uRTTm9j25R4wVFUat6YvLJ8ziM3ycDgdNd7REY61rwxLVcJDan3kcAT",
  "key25": "3UneEJ4QdYcFM5BgwRqHsmFFjJ2hBgJ2m9bdc165KAjbXjE18idmpofg9QsGBoJhLtKrfGVnobxvzoAttQvNypiG",
  "key26": "4iL8NopKpfUjjr9HDqBizA9CTydkivLfZwsbQ4QPhWNKcUtmYpw45pHE2bJTeFK6khPouJgHvzsbqRDuKmwLeE12",
  "key27": "27y9prhMZEDGTQxFXSNKfpwHCv3LmJz6kbHmYANR8X9Pvk75e2c7rujKW7DY9ZiiAB2ADvJnzegbzxfBjS3sy1o2",
  "key28": "2EgFq9dkbPV4ae2YC2nHBPE9JYn5sQHacUfTtsKnrByUjkohzXToRP9akEE83X2nJtenjDY4J3vv5nrzqe4WceGw",
  "key29": "2FvB4QzMqwaBwUQbPrH8uY1f2U8TubNA2A8PC2fbGsazEXWBdteZhF1itvseRpQJ334siTQHBmnBuPz1Ebro7fGR",
  "key30": "2qdUwAjZ4BVic5UWvMiL28PUbTv1Usc6p8QN4XAch3iCTWQQYpfaqQzKEyBN2WbR1PwcwfSx5FeDoJfXgfmXLd8R",
  "key31": "3EivmjrocS9jLChrdz8MAEfUv4gB6oWCABsqZaJQCvj8WsiLb7yDDptafS9Y1Ao1JvMKxqZFFtx8rpC877BYhMfB",
  "key32": "Hqo5b9jXwZ2amaK17EdYQUW7SErC6wuQmyQALeXkoW52PUPe6zt45cVz1gqiHWnoBeCsD7byRVxS8ae2VcVKiKy"
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
