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
    "5y9u2Jy6eNPXZg8Tuhxpo85AoAw6sCnVvsJoDbftbsYKqAjC3pVcwAuwxbu9tRoW9Z2QnEeVZzpqYG2Se5XWXxRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd688jcx2T5gpqNERZgzfQX2vf7sJp2VAgbPwUHyakyG9uE5DZqPbkVW53VdwV4Jb36cAJJH6zcNC4KduupSfnM",
  "key1": "4yDboQ14Qoc9VbQEQ6uKXSDhDH6BXaxhHTwXvRcrKSM1exQQM5cuLcqcxVNW2MsNCnxjF9xiGkrVREepFX3PW4kB",
  "key2": "2XpHDYnvqSQznVKWDGBymYGcpyEFKbyHnH39q8pZSr815yTedNExHxCyE154z82ceEGZjwXGaZ68UQNo2M9tY5KE",
  "key3": "93zKbYo7zNAMJjnqHm1n22tUwuif2eCT6yrPM8KT9WAp32pXB7KnUBecSWHqLgnUMJtENUJTPs4grU8HZygiydR",
  "key4": "534utGdu6EgrzrtHDswUPWk87VoM49Kxeeo5NJZTpDnLrJR8KRau4b1wFyyonh8BQSL4KjvHmypxM2Xe9EoESxMG",
  "key5": "5dTwSw1gewb4NhTDPMAdNyE9nkd3B2Dpe12vVcygNi5tqLSC3LTdKgy6d5CkCruQYqkWFcLtJeCJPQRXhJ5r4ABw",
  "key6": "5jcGejLMxCMsovZGhGGAx8iZnq8RYER5WQ8aeeMCFqy88zXDWYUjLU6eBLQMdZByxstb1vPj5CXanDVsmtXYXSq4",
  "key7": "4NK3MxEf8omXr64uu5AWdKgdV5zqanPVZQuHiCVrXTmAsvm9QFpJThCvepTKRwA9X3qmQ5kaUdKeHnrZwq3sjFEN",
  "key8": "3GNHeTVuo48dbCUZzfa3MogyPfnjYzpaX6352GS91nUCQMpkG7fvhfyCimncp8r1hzjCDPfxPSfcVXWRAV2Revpf",
  "key9": "5BfNjSJq8YMnzobevjSAtF286VE2FxgAuwPzR6V7dh49pYjjuKX4Sr6QJrcRmrFsGsPpN4NMFB33QDsMViqEQvjy",
  "key10": "5y2fF5db8U7tLVyg3V92EAnKv1CU3mfjkofZiszYtYoCro3vV4NNDukMNbLx8CaGvuLcnfVgdGHW1PVHm8PvZgVL",
  "key11": "2AkyymHahmTAssLymvkF6kihAGYyr61aVRqK8dtJMfoMxAMoESHtNC73yUacRhrYUPbQ8EagfUYTigcdNEk3mK3e",
  "key12": "5ttrvj5qQTrbnoUwmDoNZ2ofkbK8fjyGzqwAZWoxpuEbPVgk55h5dp99MaRi9iJTCdYFuPz94nXswTATsAK1P2b7",
  "key13": "4JTjNN8cyykuHiWHFxkkv7V8tvpUYL9em3xwj2aUs3VaiuD7fXK4UhhXnCUMjDjg1StDWd31Gf6yKihgFPSWP649",
  "key14": "2aVLZdvzSX25wWwk6V6M2e9aHZaQrNYiqh6CAASui9Ck84WCaqvDhnqiM4madq2krRqsQtpKGY3ZhWJqto257gwB",
  "key15": "34W345ini9ZPDsxBQXcM1k7i3zYYRBfhXk2QhBottoS7Buw63NTzrh2NzAsEsFonEhuzPShT5qzPmJy1kqDLjS85",
  "key16": "5qYKPNMH8rTyp3V85HtqYw1VhYWrQPKSXAKftQLkpWEEckW5ZPP5FvHFsbWdMAMqvmuHrnotd4Nr3PkHMmh8ySEo",
  "key17": "3YwKmL85gKyHumKMcJn9Vipq1RxKESo5RRoiNSRCkSecSZxBd8xAaQC1uXYr1ZbAruAX3wtV9wVgwj1qFUsczQtd",
  "key18": "5fVb5tHoERcQ2hCjjmPz2bu9WjzXAd8fAecTPDjF2X7WxECbtk69rdNvpA7Y29pH4LQoP9ryL1q4VXCJnKtVxcaU",
  "key19": "4qPTMviMxGXfDqhRyMXxkAgmQ7UE2m9aVrKjZnNCJDvvFDM55RnZczuohf9kqHJi3GnzigNKmcRxPtGF4T826ic6",
  "key20": "zf9vhovTMxsjdwfoFa3SMPYVzQWf13MTK6CTBZZc6nBAehi88LK57fyZQPFcC7jeKAK3r8QrTUudJzB49SVE5Dd",
  "key21": "34VFXQQ4Cn5uK55XvPQKj4kpr7F8vjBDkwMvGFwd9g7Sop4BUGmyYogfBL578bX2SBRtTjS8V4nzBcuR3jzcjdf1",
  "key22": "3hNYPFMjd14L9auJBi8SePNbeVXoESm2fVi6qR43R9WzRQkvgKXMsgYPRkYhBcQFsge6yw3X5rubgb3EPhLmAYb4",
  "key23": "imtefjuEkLkTqoBhxggbbNfPQNnR8sEfHqwEq7jFyXgq1t81AjHKwHsziYTp98YVf3Xqom2eccz4To7v4YAnb7n",
  "key24": "2ZCnYu1Zs3ZmYBf18PqyW4w2vyTzKnQYD5PMHkUesUUxXVb4p8xqnWkFqEU4AWB2brFkVMKyyHYJ6PVmV6TG3oA3",
  "key25": "2L7Mnijp9uribndZxmD8cAxtx2jkCULMPuA36cFdrNxmfWSEQgvMzP2y4V2GrfZ4vnaxkLbHxy2hdvsTr73HRBr4",
  "key26": "2HdiJcePRVtiLwYcM87nuQ1MaD4H3M43d56BnYJLVJaxxLb2o6PzKwiissK7J6DDH17qhqscEMcxPkQbAgjW2DXr",
  "key27": "2AThfPA1j4yiWWwY3DqDLHz13v5cfKnBq71pKFA7WGTJR23YywfwMsF8MzaML7RdRXnRFLJcaCDU6dp6FsFAAYS2",
  "key28": "8xvvJJiz8LX5fV2TWeTmK5jgzZmCkZ8C3PbaiLnvsmJdWjDG3qFyZfexvpkCBzDtoDmFT6yMhZnckgGvRsRZSLp",
  "key29": "QJoHuzTZsp5PkR9fbWHjoz2T4C8k8FJoe3SrNK1AYHRNhLhc9oLwdq5oQMLWG3oCMQJHXkJD6G3qcPqVtSfZaZh",
  "key30": "53JSWPczswWUr5TpvRoT9bcX4zyZStuHyT5XbLdSDFZEP4Qy8vLdEVTpZ2zdcRYiwnt7QSFJ6qntpMgHMcNadv9p",
  "key31": "4768w3jxKyK2LC7Tt1YHJUF7JbTdv2kWdnZaE9gwV6nHckaF5YxA66kbF7yDTyMemnL25FjRPHMBkLejAnNkRecE",
  "key32": "7eLEk4Dg9jRMHWWBHeFgWu2jVz43wLCt4phUNmZi4HznGmqXLDLXqKwYGocdzP84TMR6pP13iot2t9BkHfJ6Zce",
  "key33": "3vJF44Pbm1ADaMt9Ud6j6BeSJvFnp5xVtzgiZmSeVABrsPbncecs64XgV3tcAucDCBb8xrwJgouqfENBZYUdgp5",
  "key34": "2FeX3ziYiV38EZHMsWZFL3CjkezZC3VShhALD1XsFJZbw8s21MR1D2cCM4x4LB94UQC6rBEQ6Y2DMRWdSZHuqeic",
  "key35": "Ga32vGPhXCN1pJtGQcjsbh1yQBxJ7BnCqJ1rjBCHHDzhahB5NYBzVQNsHrBeDQFVuk29g5BmxCXZREAuMaTrNwf"
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
