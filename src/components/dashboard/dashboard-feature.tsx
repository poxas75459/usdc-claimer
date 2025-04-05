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
    "24bkJ4z6TdskVq4Leg3QEuHwkxSXB3QQENy8C2X1ueeoj44jGigKTuEZhdYSfk3qFKgDmQ22ScLrb2k1c2UvETsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qBjGR3QTtd5UEpYBEwkd4fBMsuADyaxPgZR5c7fDPQ4SQB4AoLsAViZFaGmfJtjrxXcPZLGR8wTT8KMvqe8gvD",
  "key1": "4tA5ZmpDi3C8idGtJfS4q4tXbqvYeafP4QVpsg27eHWKYPuVrDfWp5yFHabp153qbSwb2R6Sip6cGUQrfSKjYQgM",
  "key2": "ZgopfJJ6UJD6Y7ox8fYtaQgXH2Bx5WDqUrjGNhek6L29wD2ujTCP6f4X2FpzhHphVeNnQHHaVBtVVM9RM8FCiaQ",
  "key3": "57jUfVn77GUqqbZfWu4HTtNe2gNwSa8B9wwYCdSCZLEWRmAMSyBUEqZZY1xUeZWb24DDGtrdcajHUgazN5b6AcjR",
  "key4": "3RGbPMKe8vQTTT8q1Xju3AQacHr28nVnoeK84BzAFNgR8bpX1jMsb1QRhyWtdv2BPBgYe97oRvcPF8M6WuV4fErd",
  "key5": "2fuZMMMMK8hWb8hodGQ6eubHg1aNprVTbfLL9yfgJAfBtWs6FnD7jJRrVozXNcnFj6Mw5YxaagHjfznQAvF5ZR4u",
  "key6": "5o2q5tVfQ9S76PZhf534XHDGbhoLA5kTmGiAMWfU4VmU2cv2f4SoQPybUEnfJjrfncSsXqgwPPV8iez2MswuyW2f",
  "key7": "SF6e4kMWHc9N9GwBNTpnf4FXCyNgtntz9MqpbrxtDzGbgpFGz3LQGknZZYXByyCdacPWE7hrVsNchRELE9WTSo9",
  "key8": "r3YydvJDKMAsnKPBT587KvtfmmBbwDBo21YndNbCSpS2NMiVhtcJ7LbZgeo3Adugdsidf4pPuEMnHVbSNZeXWfR",
  "key9": "4NhJXzHfKJce7fKyV9aAgGSk3Go6mN7FGAmXMD4n43XeFrPEfGSCJLvUSC2ZYr5eKKYDonK6uMMcvu6KcGad1Gu9",
  "key10": "3PDjrd3yb2RqT75LAUAnURT3st54CHtJ19SBhuPaEjYvfgaDWZXeWKpDnpcVcLFuYYxXuTmS4YEksPBZBCr59Paz",
  "key11": "33uSfHJsZ9hRSarY84VLfqKkxpKik3j7DckbXZMFycTsYFUwbpAeFN2wcWbH7CfSH2NKs1SfoE5WW9Cqq5VG2jJh",
  "key12": "65MvFsYQGHNVhAxJqyZcTH6bsJbcKehn8Dt1kwLv1a2czvwDaa2WxMpmFYpviT4jNHHXZDVvtYxHGT7y98PCdWpc",
  "key13": "3hS2n5jqiZGE3Qib4HvgUR9haHP6HQaZQEQYXMXXEsdE5wkCa5rxt3aNdiGVPgtNJVfVK2u42Zf6JGCZkGYEMZCW",
  "key14": "2DjakjUgZcc7UybLZAKdb4sPuNoJDA3AGnvoCKf47C8xu3qEuN7AEQuTtQA1W4Yms4EXs8te81Sg9GcBbfJQTDiK",
  "key15": "54B6ezkzWerAFFvn1Ee2gFhhNRMNb7danZxTPk3gEAhxHVkuFUPx6onMaT19ezAVg3pQmEAx6eddPJGUTZTDhBxz",
  "key16": "4xMvYfbQifU8hFMLcy1Nq84T9s5LHi7ovgyXLHJupgNuAEZdSVe6z55ynjYhNPtNSq2PHi2qNfrwM42sWkUdNtBC",
  "key17": "4WxESYcH7Z3uejFvKAK75yFbPPoEuQ6JN8dfFChmjWe96J1ip1XCnebJomYhWGHUCYykfQXXP2KT3Q4Nv4AE9DZF",
  "key18": "5mZvA2wNeSqWd6Yfznk6XVpAfcu6qCovaYncdEMGhziUo4L3G1Hn5MkV4ApjR5mnBCpxsPK2cmJt9xpFCk7fW7ws",
  "key19": "yJCdndNUCC4kZtE2cHYtQkVB73UEJ6oMkAAX6DrmT5VfvHT9bBMmoZWu1U1JRJGmjmZnbXknYLbLksTqMdKtrzU",
  "key20": "2h8F8yYH4fcx7ZTzuMYWFDGJ1jTQf8nexMMEbBbPeHDSsZUSfGVF4kMwH1TUHgzgNqAovRifuZb6hVXfdXsCmGCq",
  "key21": "66nHmqSx9tmVc6Ry5kgp348UsTcPwMULEVZDa9EWJhMSNLFmwwcdnST7gjn3wVvWNiPUDu7ysr57uECfhVLaQaiq",
  "key22": "3YyE9wAAtxnbswVJV5PvnzsvvLYfTz8EdX4MKr58xoZ3rbm3heGFCgukFTDtWJhMcZ2T552FJLafnvQg3SQKWaSK",
  "key23": "4A26j6NXxTnJPAYg6mNKSYKa4my9r1DR1iRBzG6dUcEAUq9PoDeTWgyfDrYCJU6iYvyBs9kVzpNNzAGii1EYrirc",
  "key24": "4bCj81f4wi8dKMCrfZf4QYTtwnu8tGkUp1RgRvwPLrSH1UfE5SZU1JEMQ61xJbBoQasQtZYybnn16GXrCvWXuvAH",
  "key25": "2bh3fY9bmctsuuP3Cjtay8vYNpS7EkqhEFLyWHVUNwCC3z2nNngw3Vr5kUF1AuUZA7ps5U8HFtEUqknx1HYsCnvm",
  "key26": "4YfYD9C2MtFxb9reCvBkKc8nKMyphdn6Ccs9eswJnUEA1SwJ8Tg7WECVKZPeVXkAkCDsioDRERP8hc8PK8tamnki",
  "key27": "DTzGzkYWmuMZQe87cfJCVRDZE1vPozZCnxhS4awbLr8Py9puDNBcxZB9rV9cUf4H7cqSC8T9CkjvXiMHE1ESGhW",
  "key28": "2afqYg5BqiwA9K4LBfoXwc2iDGLS5undLTX8qkE5P1h2Kkbhf3JbsxQYmzcETDiV6ECkJhKis2LopJzSdis9xrkj",
  "key29": "qE3eJeWGc9532Zm8dhPqZy8zaehZR5kt4CSZ5ciqzSwuxEHPUNS44AjbHbwVwj6UfHQNghXMobG1Z5V9kSdkyiP",
  "key30": "5MdtpLnxm9fPmQCQMLHmUX8aeCybxkXSbsZKEUuF63q3NkBeNhygKKg67nmzKX4RxKGY7tgF9kmyqSofJSqyf2DL",
  "key31": "3zCpfBQnT8Xbh3pXv8Q4HXVeyEWrtuDfuPNEw2HrFJrYLRPRqYyJEjgc2JDwSXv3vhtN6LV2gbKa43gPUNVSMp83",
  "key32": "5oresTZE5yo2RFs7ejxFsXMdBQmyWpePPnCkdP4DmtmRZbSU4gKQwXqAVUMqH73qcpQ5qMLMqUHde3pZBQwEH5uT",
  "key33": "ogr8VLbdswZRj47QJzZjZzWGwyN29NLE6F1iNyZTZKpkYAC9u6mVqe679Vd3QpP4YqPM1dD9fSmAoofDmR4qCsW",
  "key34": "DAj76Wg791JAXjXG9xM4QpmP8qdxAKkh9z5UnZ8ENqR6MuYEwpdjtZaNS5joKALi8uzLcU1CGm6xL2AtdxEaCUg",
  "key35": "3XYDMbuF2FdYB73vY5PokXXkv8eA8vCdME6TYMyRtQKs1CWPkxzjeZbFRggdDyGgaTJ2AdxR86D5ufmtCQ4zRE47",
  "key36": "29Si6oWdQJSBFK3gYvNZMqGMfregcJRo453Hxd2dSj6jaNbFr3U3XuNbC4yn7cUySzaLXxJxsWneWYFEjwCFD1UA",
  "key37": "33QPKcJRCRENwkJMRK5NqNjHL6bxpSJBwyTe2FRcStLHhFRByMKZJU9WVPbjrzpQCoCR5RJH4ga4Fd88nGVqAaKp",
  "key38": "2rJcreyN8t6kestr8GBHdkRX8YvTtiQyQ6hjCbdz6PtZaYc5WYwM3TJWZEAk8gJ3aUyXu4pWYgnU4VX68c5Es7F6"
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
