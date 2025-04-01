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
    "3ocmV44PCN9RiYST58Gy7rVpivo1mto9yWsmmJPw8cUv3ri8UtBonVRyFzCuMi4j8HJT8T282jkxLVsLKNwyrjgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVmUhajoPZ9NYVeu6gAy6jvVNWS3X92gJsRC2kwJqjgc4G3wqSrvsGuJJH161Z7ZhqPkXHGUY4kGeJoGcTB9poq",
  "key1": "Ntkr6KSpcynHuJvDh8BzSmDucEUGWJAXd5AzhYwAaAbj1ss1o7cHTznkCn8B5RJHM1BuidqbExDDTLUqHZo5u5L",
  "key2": "28AAQhvo1q5LXoUv11TvrpRzpKQ5tAC2wxydFY75sZXd9jV9xTKmedN3zJfANKifc4qLhsmxTwCFoX3MwMoCK9hB",
  "key3": "4D8MoQVtJ9q7ookQEd7FWpwPwARp4h1UZpaRdG4od4mzgmWZf1CTsg439WDWhPusZpHQAyoRVXbjrQRtqeV3P5YY",
  "key4": "46YyuQueP4vPzuGDAbz58QruZXPy5M5F64M7VS66S9yPxygRvXnaBxHL1BM51VsGCgSaHkSEb1XiJapwcwHwe8Jy",
  "key5": "4d5foAhACUPvZbkxuxZV3vouWCf8xEXuo1GXNHGbnVfBmtLsndHYQfwVwWtFDN7eFBuU2hideKPQpVGjaFkAhkKD",
  "key6": "3PVjTSkG8oEh1Xo3xdYeXcoTDN1p5MNVKSTCBdt54NRJFaNW73xeXYgrD8hqPRLgGvjPXfqPuCvSz4yGrVjJ2Vn4",
  "key7": "2KANCpatQ9yo8LWazMoQFPjSzrvK32oSN6sRo6D5cgrCkryRs1vi6gBGAy12pub6V98KuZqxd2yAtp43NuG6nVHy",
  "key8": "3t8GrZJ37tyrJVSz341G7XpbAHGLAh6MR5Dxc3VcQUHKnmwBQ3Huk22dwh6V6jDB2GvgpeV5cHG5TiCqhaFamXn9",
  "key9": "41reqm2HSLNHAE2eqCF77SPff7YQHNoP7k2vMyXWHU9XjMtFo9RDmuPCLosy6A7WWd3r9A18uAoQVKhk28JsgQb8",
  "key10": "vVK1KqkpAqzbYjX5dDZhfCUAvAor1AEeUnbWbtw5Dpiot8QKb5WZKuZDwqv13ubhVBTyupfduCmSExZUkACF8Bz",
  "key11": "3U2sAwC1zyhySnn9kyBDYGwyJF8DABzdVKp5KGg6FvSEAZ4zzQZgX3uwphk1yXJqXtCqjAgQtXFcVPS4hC2hG6aX",
  "key12": "3Esu6V5DyYV9DxZinw5s8BiUdWE866pYZxT6nKYiKtq79LAPUQjY6qkxeZLWxDEpVBji3MfYiqiJUBUdwKjqMjn",
  "key13": "2oB1agfM1EEktzeMPJWebrGA7ovXtheQPAymZaPqfqfD7XWTi7dUC5VthrBL9HAkYXiCnCaePG7GqHqAmEJUc6X3",
  "key14": "Wu2TNTgPjUSGAB7VRLMArweWPhbLns3J53XXUr34qb5kAZmYNrqNMhp8i2TwEGDbaTrXDtGTW3kAreucBbwFdv9",
  "key15": "5au5AQVC4yjoEakagVdNBQNX3CpXySfhgCYYjgkaLuD6FFfA1kiMUSZcdXyxzkRnkXd3UMimVR7mC6yPqebC1bVW",
  "key16": "52yPTzd4PtiP26KHCibcS6y2D5Qeby8dneC8qEBeU5TmJM5CRD5PqxYBCkLmXJJ7ibgKdL4tHMFNUGbbeKd8f7jz",
  "key17": "2RqbND8SrE5RW5nW9ZctwJQK8VxgEiMJYvWnJirEGnTAAPQihD1JNQ7CLoXGxqxNyrJ4CPr5Unzc6RqGZ8arUgv8",
  "key18": "5EryD27Sv2Lpxe5csG8fFKjofSjcNsmyebxmaJD5Ayh6edneKQHjP4uoHJzeWTuzhfMqvshZ442AmFYz9GoJ1VeQ",
  "key19": "5Vp9JBgsvY7imvQ8t5cjRq5TcKvAJ4gJApMP5iJtJWH9t7WMVS6mNh7QWpY9yC13LmZucuTRs35BbQwkZPEvRcPk",
  "key20": "3EkWxozSBaHbWoaQCYmxK1C73vbXsmogAfYfx39vkuGqVCpEUHeyQV6i4RCHbevB8XmqnHqzP2kRtkcmCTEec1tz",
  "key21": "58Y2ds5JD8jQiVTpAcm8ejXM6tBXh5SCshUjNv1Kdo1dsN7NncxUF5Vf4g8FpXw5LXNheeetZ94rUqpkdCVU85h2",
  "key22": "vxoY4hEDpUSi9X2yGoTKGSnEwsaKoyos8oRYyApERCBUxmqKhPjoXs63TFu9Z4yRbMwrzXeKwGG4pdbdyEz5H1n",
  "key23": "5MPcqeE8CVaZ5MhggpxNncoTBmb45dsmbDZRoVd3z85NCAwzAdnin4ewpQqceS6fzrEo2se1k4sQ7isztB5drKUz",
  "key24": "2Fi1sYqiG2HXT3ajzkYZXuLwgS6za9Em3D28KXL2hGi6ZSUY7EevGJbhf7c5DnECzi1SbTQzJN17XN8NvkjBsdih",
  "key25": "5PXoosSrfRknuYwzsV7h2aSrDuoyGWooSZz9AQp99X4JxGC5pZj2WXhSrHFX3QEEVHgK8wqhg5qKhu9qCG2NRnL1",
  "key26": "4yM1WnyTuxkTgc7o3Hvxeu6qeJGUdGZhWF6ns8h3r1MmEB6jvgT9Ftq4zbbw59YtGqmncVbeHWC7gvVRcCz3JDxW",
  "key27": "4LMbzK3w5LKKzAbqn9nng4avKm6g7fBkuuWLu3t3zswDQtvM4v7X7HyzjfPqK87rUBoog1CfoFPotWkKncqF1TUQ",
  "key28": "4XuVvTHpJUEEH8e97oU7EfUrZwf7ZyxNRxyt5sKfqMcvDc4DCsrRxMy7e7TpykKFWS6ESmht7fymGrskLueUUZJt",
  "key29": "WubmsKc96kMnEqTSWVE7RxYUDHiU5iCMpHNCqB4T8D4D2U9ZQRGiAmpmeE3QZNmc1M2XLjXh8HVLoHYZMQWcxNY",
  "key30": "4Du1CCsTtno5GBKua6dH5HocroR971LMWCTxehKZFKtxQrUDoUDFPubo936hAGauTwKkSgpT4XkWt5b1xvPav2Eh",
  "key31": "2EzcSStqRcSdHQ3oSNnzM4e5VBgGrJBqHeshEfcKJnFHoTsHvsRH27627ozzw1ohAdXiCunMkTn5d3jguqdwpLZk",
  "key32": "2XRWdXUuBtC5RNfCqHhDmZZ22xCpCu27pHVqYgQsiHeaA3iaUwdAZQHHTZ8SUHvPjE4G6Jd8kR69DRpazErVDNtp",
  "key33": "YrmQgtA4g7pryBpC3DxeggZyVtDb2KFir6n68zxybuU2fkpYthqb73Ki39S9utQhrdze4q7uSnhkgBCb8WcPcdP",
  "key34": "5U29Mssifz8zaJiXCmAdWtYoeLzFdWo5UBk4gRuxWR7va2BwjDo59iF39J8zhaQ6Dfzo2MLpdiz2s4NvgV8u1Yex",
  "key35": "538SdzAh7JMn1UuQETkPUPNSbdfd9QMRhNwJYSspv1cdUqK31b82yeKV7sTjEs9YDSJWiHeaerZLQrtZWyJ58GU1",
  "key36": "wGbgoGS6Sa4VHvBTE9PfFtAjqmNemG2DxCtJmgESgbfxnCDDSy2xPWyzBdqr5uCDrST9fXT9AME3UHQt3VLQyzn",
  "key37": "5qLEmWXiS7BjSCZN9hQvQNWUVV1dxArU2J4t4icgkE8AyFm5mELZr41FJ6oSmyeYs5m4gMPtVrufSrD4LzqCAW7E",
  "key38": "zmjhVxXw7wN1Dcqrf59jZ4MCn5NC4bnZfLA19h2irhJbFMEXvJG8P2RcTFSP7gJinuK3vRtobs7qmUmLRnLYkvR",
  "key39": "fUNxCEChaAKKb4EeEynwCbH1Fv5d13Q2uQSCQfz66HRqRS8xLQsRtbQePRCXvWHBFyzNfzdLU9a8yPbAGkqCUEP",
  "key40": "2sTZPboXL7SnxEHXHEGXZjiYsR98tLLqDhrrS59CEzyTEF5V3fQqZ822nK3WsoowTVqESc9uCE6eKsdLnitGxM1d",
  "key41": "4Xn9GVM64tCfQxE4qqigZfXcbz8SUEEVGwYmeidopUWmTjPJ7mPM5sF3dcEGM4gqAHY75Zh6GJjatdrKjfFpc8yY",
  "key42": "2jPzj7SDa6fJSamhXfrxM4D3Lfidx9BLBgeLWGqKkrgQGwrPQChYPHukYCvZw66MD8PpazASq6mYxoYwfY7Wvz1n",
  "key43": "fc75phrCjSyvf58G8Fn9gv7zrK5UcVuLJAPP5Y1B7Qhr48rbttHwfeeZZQBtz3v2GjtenJDK2d6KUnSS1DnRkhq",
  "key44": "2v7NSRTu99dzCj9qCXU4wzy61EbbAZfuio7oPDDxpriJL6Mt1KAnjmGtSzySn6E4X1M4BFBmcgFryW7P6WrT1VPJ",
  "key45": "5rWwLh5zLsBNxB2Wk1ADd6HXcKHuKTYhDXaqcGuTW6cRWmwokyyLKyFnXBEoYErdRZHunw3j2edWBezQLRPZbsNE",
  "key46": "3SUTEcYpjWHgfL3WA7kFKr4fFiNAFEvm6EP44bPKTBCCbUZfbogE4R2UhFjeiHo3i51ZTVxjmGohnBfNwwBC5jtH",
  "key47": "4VpWu79RtLbAtHXEJtiAjTadJrR6WvViUjCNnnHSCaGxULLNjppG3AHBGqwnhiV2kJDSXShwc2nWd6yKp3iXtZ7f"
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
