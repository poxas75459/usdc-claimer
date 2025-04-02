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
    "HqL3m14Fy1dcFYT9UqwMzp1FYb66KcKeT9TEdeCWGhxKkcNyDEPgFQRMiYoA9MtukX8TZAPqR9G8fDnWUrxEMtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhQaUa6geACim5hspoKHfW5nbocQwnHsZGEAfoLZzf9h6jiXJJakw8uQ6vw9nAZjiVD5U2cuyUjBRJ3PxH1cRNp",
  "key1": "5BKNbmTCSAo4PdQxPsiMX149pnbyYAeWCfPYoWRgTgYGxeTZDfXQ6tjZ6C7YNmM9mh1FRyKZAPMkoEPUGYjb29vb",
  "key2": "4kH6nGYgwURdCCqCL5kUmEE3fhq9VcuJrvUjiVKNb8asUAbdWsH5nFK3eHxbeFSLCwNpqCfpR3kpqTiJvjNKyzr7",
  "key3": "GW7a61JGs7sATvcWiwR2jret5Dg1GgwHFyu4hhxghykSoYg4RrX3pF6DqsH9xBnYeRWWkaYV2aZeGbCHkXegFDR",
  "key4": "3kTKcMdk8ZHZueX8yRkKJHQGL6Xy9kr8NEEQpFndLjns8KoZujQLco9ndZ6YgdnZi43rmHV51KXFd4hJuCUWXAnz",
  "key5": "38SE6QeDmqhhp1C978qywwZ2Vh5okmDemNx3QWWHg99yTUC2VbNGJvMxAJxKu66ZTK7Gc1qjkNofNH6iCkJantZj",
  "key6": "1JS3rHa9oRGU3ESm4f1qqJkcTkv6xsJGVbqsovhNgKuWF3W3qauAJKK4zD4ncHTgHmt4ypYkffGGP4V3J41KTde",
  "key7": "3JnJB3LDCF4NfSoyZhD6LT8NGPfoTZTrj8HAxckfMLGiMzDoMFBbYANMEuBRp9yoN6jpY49SWbkZqrgDEZJ6DCVm",
  "key8": "3okz34dBP2tQQhuCzwr7obWBoSFUR4AREjZDwNYLbkrorSJrq4Qvme8xfgS3X8dAJ7uAbzdKRKc5ybKvvgYgRxoY",
  "key9": "3fFgL7i6KCAbqRrjasc14AMhNojVYPGZBEMN98xQvbD9zzYbg6x7iMQGZmAFde9A7xsBwR4SitqueCXu1zppKhia",
  "key10": "56GvTdMmrUrkjFyVx7i8Fm7j7XJJK7bkVNBoaNZYcstmuLssCikWo3kYo8LFyL5hZJMMdfWtZB193qBmTro8qizU",
  "key11": "5aiSrbeuWsJW9Ri5BwHjv74yqFDpDn1iybGbPkrgtBGFua5QYWU5mXp9j6qfwyxXfkMcnK6cecaUtD391QGAMyZY",
  "key12": "5Mdn7T5zdHKboEUPZyN7bHAKeMedtLHqXKf5iQB2ywJP8TCzUAZZzqM27KpcjDXf2EoxqgR2QCX2NstdJTbnVT7z",
  "key13": "gkharJ6EJS1LPsfA5foeMxmSBUVBgqDVPuQhBnvFNC7SHwCWFJbR2pX2edsQMihtH8XtMqC8cXwWC8NbLHSiTj6",
  "key14": "BHforW23Txfee2pqdhCddLgquXkDRsy86xp4KRdRXV39WNQ6Dwm1ztpVy7GHM65L12YnP58KCTGrzBCf8yHSfNa",
  "key15": "chjNGrQwszDjh7ToiNLubrBkxjq8jBu4X5dNhaYLm1YFGUcfZtH7MDq8vWxQioJhinEAaGr1ACqLqf74RY38Rh4",
  "key16": "32NGgxBRyEn3EKANzyj9r7sorQB94j1GdSzSdGTzzzz8ZJxuHFsrga5UeAu71a6wGvem6ho7niBZeHT9XQMMdMoT",
  "key17": "2yzaeDKqpe3zhsux3rQondms4JG9DRHvZsSSZLgvv5jURjLzFEuMSbPJ9FSFf9HfY9ACizuXFZtkrz3NBYL2Xmpy",
  "key18": "5bC9qigYN76e9s6jfV86DepUyhiV1i3TxyvaRTtgepvmPTAydw2mnQ9Q2V1SA2qeNtdCqCdHMxkLbbzGHLUp2Jmd",
  "key19": "2RA2GdH1C5MUFX7fXPdUX5LipfAFsxhyZr37qemMkdPxLoR5t5eSgKoBRTwgn7Gaxj4QuknF23BbRVo2fyBYLLyK",
  "key20": "4MXRSs4jYw2HVRhu4iQMq8nmiWrJzrNSdNrnD5d8g9Vr47tQfCgBsTt2LYaXNFFgyaU5QuyadKPGN9Xcw1mQUEwd",
  "key21": "61p8qvqp41aHhxJbAEvkG9zrCUxZVkBoVNYpYPH32DKuxvxf12oAJRdfxRyR1s1MZLwCrQTvpEcD8DjuVXGVzKcm",
  "key22": "ygCnLuPmzT6fa3dvhfrRWbaJhm5gqxgmzHWniALbQybY2TCgBpP2YpVmK1B1e71Ks6fw7jHwWNvcSxmCfZUtyZc",
  "key23": "24XmDu5q9TuRNaiHWhjYwptHdik2zLAMkX97TzrQWRghizt1tovBAaxxKXeUBwVa7bfMuvWFRqUAfX3FHPAqy9w9",
  "key24": "2YUE2GLTNfSJNZzdC83p3dFr5pPSZZeYiJvM5cmHy1cpBKxcciTs8M7rgwX1aL4S2HQruxWrFpnqBM3AACNoGM9j",
  "key25": "4vp3ASKFzeNXoTUHnn9fNsmFaMQRA8TzS9cbrmo75so5zSC9PP9p1McEKmMURhYTnyHpn1TXw9zLktwPU9Zcwbry",
  "key26": "55KR4P7aoc2fRDWMTruLS1XiraZmK6WrKMRyZLUWxfP2yxHs3QQqgDRK1RQ1vxzafMrSqyzwTxm3gAKmYfjrYPxB",
  "key27": "4PJ7BZWu1uuH6FUYCJfrHajQt9eEZicuJK3PEsjUHr1LE5giFbzbemGcnseNz6F3XZrY7GUjdMwScUf8RbSLYG8d",
  "key28": "2kqjyEsS1zqjDXRW4kRfB7ubg5DvVGMkbviKFrsq3sYCyPoJR11cMSSiixkqG5waBxVWPZrSyVxq1p4HXi3bzaGH",
  "key29": "2nAaAYLrdru1YXHFXGCQEMdASiL4dJqjyUbP8eFMPBRsWFLjN79DhiYDd1mQdi2B8RqQifUTtLVyazQaAwg5bYT2",
  "key30": "2asVBVAtQwdNZjXwogSAoMjzEebCJ68YNqBwU7GJEFhXWd3ijANmUu2sMZGZX5VHtzH1wz4jCJ6cno2Q5TgMs2dB",
  "key31": "48qu6RJ5LmL8QBSHZAs7NaJE5K4zUzDxm8iBGBPQLKtWyw4BkJtscC2yk3QF8exe9bhKK5p46e43KMonwBEGt53B",
  "key32": "8GZ5nrBus8JTs3Ccdbsj6mHNiUFgm78kGxyuJtcbLWeFv7EXYXEbmaBRhur8geYuKDju5QzUC1CkTTwDLb83Rp6",
  "key33": "4zJMoc17Aoc6oqSjJUiuzeeCnWM5tQgXC8NaVXaxoff56BbdLQJDGGDvcvQdAvqVQBEqp4S4SmEyBMVw33kccCHW",
  "key34": "3XjgUAK7s798y5MaUUDQHY9JdzkJMMy9D41UbjqayXvmZ32tUGcqoS9QZuZHu8jTjh7bgugduhjW9J1KxixQpE5X",
  "key35": "5Szv8kNxKsCeiKMEuKgopeNTvqUh2bY1nogHwsQACuP28fUBw7ecxDSLr76uTvDqEYa2QJQjH4kQdTv7nBu9sHKy",
  "key36": "2dghvz6UdayRRfS3ishJ9dR7F1BBfqjf6NdGKMusSJr6UQdasb6EbY2XeUZ3eq4Xrbt4vfY34V7xF4PUyyHkkpdg",
  "key37": "63P4xq6jfCpeAZdXi16w9N4JvRXMAPXookV191PrKxBvWwErkzioa59yXDhSqSY4p9D8JNDZZYoAcdm6jzGkyNQU",
  "key38": "2KzztGUuVjVV2Zke5tr7o3ez5kVjz6MAAJDhMHWvW8n2F8BqEEoJ59Hq8JJoucvtJVHnBECgd1s3gs9VDFa3hr6X",
  "key39": "xwVc5kn74t9mDceZFF7gXzA7MMh9vLpnSP3cdGYXC5v2ER4hgNZq2XSQ1vNCaumHXvKPtNew43c8SqWxSEZ7n1C",
  "key40": "4hhtXG6bNZe4vGzGX34FA3jtBG9TMLUZWTyzKVAeCRLVmSA29zV2fYU26iSdrGdpFvURa16BPbzkSQBMtVSjGcmL",
  "key41": "5ZeN4B23Ctm7rBUYPuZ6VB4vZ1RkyJ2DhhSSUc6Su8MMXG5BWLa4ixvRAJXfoKCq5g3bEjDCNBsL6chTDz35KZB1",
  "key42": "SDfeuXMESqficrGf65xZUsRadzTo4UWqzqgzKULn8Q1hhEdk63UiUfYRZDtDiaGenhyep3s176WhWVwJVJEVkNv",
  "key43": "EfzdQm2LNWLPh6WpWDthwH8EWth48JL8wubW9XLi5gJ3b1QzKPLyoiRhkjoT1KjAffKcsKvrCBdSUfCS3zAE6Ya",
  "key44": "4y4M2SCYWha31z1FAYWbZhNJ8gFEQriSfNUhD8ySD4Yvzz7gJ3ELeyjFF1TVsSo9DLJJtA45qmC2Wom8yZbCuyhy",
  "key45": "2VRZLPv3VmtMHr4G7v6Yyqu355WfBZTvyBZ1krqjbJJppLARZ5TQySGYNuRWEAhojeSyXtazSoWgMPsVoftwzxQX",
  "key46": "5yY4e923vX4gXw747B4szvhEgdPNhqtH6tbUx3gwv9AK4rakMNbYnaxVPxU6qn8WMmYbygq3kRKKAryiLXUHJS2K",
  "key47": "29oXvVsrPVnWJ7xAzkkVK5nJ3gEe6RN8u2L2dZz5bjgntz4tdonG1fJbLa5hNsUb4atfyH6Eu9QQ9xzFEPcKPEq8",
  "key48": "3S8jykYx8BKCNH7H16fCQj8g5M8jP9csnSjpCaduiimx3zUm2dV15tQqS41X99PX6wPphozVBkLVLtBL7KTJFWDR",
  "key49": "Ene87qFXYEEkp8HSr6abnbRkittgDnnyWeSy9pGQHzRVmemUemEKMzz4Bu1vo1aqwE757x5C4DMn2WwCBdoXsCV"
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
