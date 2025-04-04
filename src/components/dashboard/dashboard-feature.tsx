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
    "2Ajpozb3ipq8dFsui6igqx4kznVXjKAoxsQtkhcBbkBim7rZRdETZDGoJbnG64se73sZZmvLmLws1S7YesQhnj39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xqu5KCqpHquSpqrm85YbqaQrELHPgeYsQUUp57TXTuggLwVMZ32E3JUdC9njJckwam7rPLfnJbuYGcCEgU8aShe",
  "key1": "4ReFKn9Jf8vR124PGDz3yYWHofryuY83KFWTXbJokV7X1Zj3JRRn66Lw4H9BqVqTxtVcQfbc2z1B4LcVZHMFzMjh",
  "key2": "2Nt9UPGc3rs5LF7wCWR5Yv9EftpfZtkRTRh2aAM36JuKwm3VmhK5TXXh1AWhQb5eN7v8Vx79N8RMMdrWpALh9QYJ",
  "key3": "3Y8fFFDT9uZyUxtTunpn6ypSHvbGwpCkYvWD7BSfGYMwgL1qyS9XhkW8zwr47D7ysqAzk3zj18SH7eP2dPrKUNfZ",
  "key4": "4drqkkDQjdsHL9ixYaDxM1gcSfXPLYW7BmtfGfUaWzAwM8tJBHRztxDEKjT2TUiJMxZipYu9jYZyJF96f94t8ZQR",
  "key5": "3kLTrv7v8NPx3uLTSyDLN6u3eQymSXodUggLYJHgBWxwYQwNuu9fniDQK9JhB2EPZ2ug1SseU27QaWfzaNiuShm",
  "key6": "3yj5vMBPqVUunAAGB6B3DLRhdyb8s3w1UVRsCWSrC3Sn4ufqBP4cyLxbcruFugMFkZneq2KibdgcH7nTVoSHFs6s",
  "key7": "5KGknTsdxbydm9pP6vPpzhbPwPNHBwKdKN7iJkiQhzASpnQXZSCgpKDtn7FsZQ7wh5P7m5218Yg7bRdwqeSeDFsh",
  "key8": "5DnZFoMQajE3LUuQ1NPqE3YzXosqUUvft8pUCTgPVoqRXwzNJsTVsdUBUT1CvDHFtHA5i68zw8RsFNoUNf3L3UyQ",
  "key9": "4K86RKQq5xuWe6TKYP7nwMz5JKWqNTYaVRadAuXaobmvdongx9oRCvX3masiJHHEWkYEeFgcir6w6sDp8ULUWWwN",
  "key10": "C5uYKAsVs4DFHU1Sxh635Ws4RGNmDxKeG8DPQXn2pAfsRGYW4y4R2gYHNbknPhpZYCzGE3cdtdScRhgGDwJA5Vz",
  "key11": "5UpRM2G7VdrbaCPEcg5ixNgGawmqc8rHZ2jiqAtWczZPkK83d2aQtpX62zPEjzJvcogdSSj66ETFqbBsRPAyspNk",
  "key12": "4RGCGox144Fc5qqtiuMLAyZYDKf6YbFZMLtLtuK7zgGiynneUPykXJmjorKdydSbcbY435vYocKzHWerFjdTD1Xm",
  "key13": "3VuZ929Bp2DX2Q1L6uYPfsbRrmbRi6HYacQiqJkDB791bd72WgRHunRnH1855XRhvqt3NWGnvyULw79hS5f3eJRr",
  "key14": "2BnuPVsJ4ouj11AZ5EiUMbrSZvdT9w77XKqPW1SWBZTNkhyztA6NpgDzgU1UtcW71kdUwbQkPN4fkp4nGiDC7cqL",
  "key15": "5GkvruQEyq8qUoNX4z96kPmP5jgheJqzW87qc2B8foxjhkwdXKx1GLPEFjkAW8yGNW8HWW7ZXhqpQGDEUfPjt3Vk",
  "key16": "22Ch5X7MiYLwjgEH66PCY2LBMFALWpzKPaLGnGub1tbzQoER8LpDwYvkXUyi7SrftmoCkmCn7ztXy8Lj29L5sq4L",
  "key17": "5TFvTZARKdHi81sSj6x1ATes9VqX3vCEdBx43gmMEgW32pLkcB1QHvUdpKop35TMTwycWueg6tZcTtqYTC7qjk8w",
  "key18": "tSM7aaS6mDHohzSLudkiKgLNUpahyYh2G256vYJDfagRHCadY9ywepR7cihPBwG5EsnoQjdP5PFFxvfCWMCbWha",
  "key19": "a1CFzJmtB6p72wshJtmxaLL5Vph5JDLahYMiUurXyKS4SqXuKxM7zG7XPvMAWBMYHStUXNQshWpTywaEFbNCfSG",
  "key20": "gncLuQ9i39wCzkn9bCv8vLmqHwjT2zjCm72GCWsF4HMtgg6wz6vgLcaMLrnAcNWhZ9ZX7sGs77eySHxpYeSGUx9",
  "key21": "2jtLFnRKwvwyBcH7yyS3yXP3CMbRvLjUbqFGvvQNyx57DTVVaQNmh3T3ZxSxw46C8UYDS8UcBQzjhtKa2Xfa9Cea",
  "key22": "668ELRUj1rZ4Uuzmda4zDRCwuMwemXuxAVKXYP358RajnKJD4TRqB5VBbHtb8HsVNLrp7LG25rrvuc88rgSUfZhH",
  "key23": "2R76EToZu8XFkpFdSLoC5U68VuNtQ4Y6cRnqnPxLNsD8jjLUaEaWSc1GZFujtmPZQTiHrARHexEuVkqV9LWdjvzj",
  "key24": "3xfRQWMokoc12e9YSQFacd7ze3W2o7LvrRCpgZsCGLp91bohpF6S1w1j2ssMWbLDCuKCYhum9dE45F4KKLBo6cma",
  "key25": "2oSmRDg83psbSFZH78TVq5QQzzcDaWdVZuXH7oPtRn7Ny4bW7kKuqgJektvq1NuGDMbzxzrtG55f8iqp4jK8HjGz",
  "key26": "63zrxoUbbXNRg11JfgcxNCw4tpocQNuqMP6yV4uG1k6Co8JkZRUiNW5XzZVH1FRWmSYb2ar6cuhRgruZxqRNHe6W",
  "key27": "4g1Tt4z7a2y4Q37FSngGCw4RxeGb7dy8oM6Sz1RRTTemZjhKkPPA1mpaXRVvMMC9SFgx869ybSPcDvy3s6LP6JFt",
  "key28": "3dSwEHFMEi5PYMQQuraUp2XAaNu3R28iGAJTUT3o2phyxWYWWYhj5z5U2RwP92nKL5GmG9w2DhEK7osdrjPkodit",
  "key29": "BxoXbsMP1xG7XUMrP5hwox5FfKZfLrFwkybJkTv7vcvvADNP9Hu2zKd4DkQVUdSzZJihNUBB7VehHmQLAC2AEzz",
  "key30": "4bfNCvUq7Xb4otUvDWbeYX2UhsRGeJKkAPtgG25sN4kK97XQqHfBz8cWDAJr6W33ymTj8yoqPeWNedS8mwQWVRUv",
  "key31": "4aHdautoD31hZ8DZfDUGZqLA6nSQAVqVtcUHSAmxBk13drdVVNYU4FWqyJJnh8xCsEGfBB6g3o5kG38w3vaDvtbs",
  "key32": "5jKARQbYzK94FF1BjxuhekcrKJfiAWAbicWUfC6qFcHtLM4SgV9tvTanTB3XJvaURA8uhWxtZmhYpY23VwAayypC",
  "key33": "23CrmdLQWi1qgKzYmQbwcvYzjgyTupYRA9whM9ie2PsRRWub6nkHvMjudc7MNUtyh24jyHKjGhLs6BWftybvLyaY",
  "key34": "63yd2NHW2D5MpXSyUnaGzuPmzUwCuEStemQaVmFkhAbt2UzmigCq5X8iDdy6Ym3xxPZTVuJM1euQKo92ntVivWff",
  "key35": "42intUvFR1FyvRHZdY6kAHN27huDoLLgNy4qMc2wGfmL9hDpNNbpBUAETqESpdy7aSigbgvNQhqjNartNs9zgepZ",
  "key36": "32WYAvA7PUNXSEc5ZKk7UY5GjuYVQ4aqTdXNhiJsdT4Z29qtZMK6yaGBzffrstsQ4iEgfWX44NLQ2membWfhew5S",
  "key37": "24tHpKt1MqcEbqw57coHSoKLv23ttTekvQJEX6tWaXQUhr7mhBwjtUXd9gHx9CFxF3RAXmmWuR1d8Byyn9HUaR1z",
  "key38": "2MFGhHtCX4YYAJvYuHTJcT5XtrWWnto8QKHi1Zfji3yLxKrXSd49zMoNipGpTSXXxgmTnof7pHHwqtoDiejU13gv",
  "key39": "3DxNcqnD5Z4Ze8do3E3PFGL6vrHvbCF2kRrunP2uVAGq1pZT9TmCi8ji7Xinw3hpB2PzuuKFn7bhRTjJRhpAAQ4t",
  "key40": "LmkbhbQ3xTRj8phf4XKTYKttEfmtAxvcK7wEvCMhosdcTuW6dXLJdHnArWMuQMaW1L7RwaQUYmDNZqSVwQATSyG",
  "key41": "5F9j5UjeNphH2ogD8EmPdAfRs4G9nS45Puv8qifdvEi4n25FHFavyy8nKaLuX4Puzow8zsLdLhpScDnETxaCF5kY",
  "key42": "2EdTJN1ufDeDxN24S2UPNgrCKkSrtqgks35jdvsU89mwrHkvm6fd1vt93pDH6hUVjyR7KyFW9bdQ8LCton8uq4g1",
  "key43": "4j3PALT47ypr4HxUupTCWSBrRHW3P72PRPB7R6w52jv6HExHHeFPnboREsKqXzyWcz3mRzJdunFvBagsNLph6N7G",
  "key44": "2fF8SLxgbThhcBrsKrKvXVeM5Pbmso4RNzAcJhoJpj1qXJVaVNfbZZTABuo8fkW19jyJCkMrHjgKoFHGDX1fPGoQ",
  "key45": "2HgKBQE7XuTyJk9bBypHdishyXFJB7vGiWTK6twFaEgp14PZFKnTf2JSJyFLDqfKSnZjydpTJ4Z69k99uqrSn69H",
  "key46": "5SaWfBPKrSE8vNjJRmr9Xxm2mYjZAnGVzRmvwX6GBrUpZapXKco9HXAPnWVi5HVfieD96faWQ5qEzwYDWSCAB2SS",
  "key47": "3odRkzWhKNrwxRrici2kLnA1VGBARwgQ59HbvJ6WFKS7aF2tedeFpoXNYQp5vFnkakupcR8uxM5EaVZRBzbhasd8",
  "key48": "3nbyPG9mX4mutXqFGrxpDJdoCMCDgFNaTDp9pMPFzUqBnEqNVVkHJ94aHRAGV44Y2VskeMjbPwdTxPaKYEnShZtM"
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
