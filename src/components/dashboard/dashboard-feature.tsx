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
    "5e68pNx1F8afZAiXCE6eTmaozyRuaFZttmdy937HejBvEq77SY9mKzQoKmHVeSs7BnPnmn7Pj8GdmQ14KJxbqh9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnzLyav6YdaoJv18XGUw21kr9njXAoznj2yqUYwWBxkQeYKLXdXqoRDccjV4rnsSqqkrjsUXFmmsJrcMx9qA4Vy",
  "key1": "GMcRVHFEnd4iC4NRGngAbYxu5iZZL2fmCcaJ9HCktJp2rWvDekpef3rRGwuASRYTfyVCEjFge1tSSN5jmLQFfEs",
  "key2": "37eEEJKZEURLa2zM5pHVXWafNQSU6bHqGTmtsgosqn9TjdRT7s97RpUGmu9MQn6uVCbAFwhzCCP3c3KQHV5isM15",
  "key3": "wMBLbS3GxMAWWSxCi7Xu3PyhVKBTFpYcwCsCxLGKS4hXEJ5zvU5CcptFF7qBBgG96FUkGgeAR3VrhKyfLscxwYQ",
  "key4": "5wqh1Ycg42D2bRy237WjcwVUTqaNk4aTfJ2RRx9h1f6SWehyVej8cQnVp4yZsTeWKNM5tcMxFFKYHh7u3DkkRHNo",
  "key5": "2CMhyj7mEz9nMRa5cqgpqKk6pctAfE7q93AkrgFzig3pboVjHAKkQLoV5AafYA71G7n8g5QuAk7B8Kw2nW5qWbC2",
  "key6": "3rrM8T42yvafpQ8qn4Qoq3UUMQ335P5hsMn1wDSbGHdbY24YQgcQ2FnfNbRN4joxryWR6KULsMowB7FBqSyX4VTQ",
  "key7": "Mvyek9bqGFxEQZ4GiJRq7rnrPXZaKC4bo1u2bbUaYxRot5N2n8NGg1ft9PPBvHgjEiBFdnZ7SaY68MzLqzYqwng",
  "key8": "zNBRebergf7kMX68omrJRnVk3e8WKFVLZ8zuqCciNeiMCYhgj6T7tNK5L6Ue7UiL8VF5t4HLQN1CQXC5Fj9oVu2",
  "key9": "5HWqYzT64pRdCLvwg6mVhQtHNTtQZy2b6Gk1vxG58ot8akzpGPFiSVvYjvT1x3CqknMjd8Jwo8ZaYEFWQqb7mEAt",
  "key10": "2ZKBkpEbkd2b3kvj8vu34mxEjCCJLorLYCHvWkKJoQdrPeWH3B9gYiDupVTK3TxaXxZcek3LZ1skaR4LzAK5u8pX",
  "key11": "243B8KXWmQhCifAbotbfVjrj2YQHRhPjRCSANXqcNvqbiB75TdFCSdLFMHy4PPtyATnfzDcxQtB6oWgYQR5NXhLj",
  "key12": "3hPDuXnKwnEMp2b5fxuSkJJeNDvaBDrSe4YAcqbW1K87m3ybtRwV5wL2g9BpFxBGLuTGwmMxLLABT9Ncupa8J5S3",
  "key13": "4pURbomiD7oswqupJGox7EVSkw5qhVMdsT2Txt8LDgkegns6SbJeqeu1F94G1yvJQKAzNtd5VzNmLgvrpJqwxmAs",
  "key14": "3L6sXGct6KghJbmHxDY8yaN4pLU3Y55jHwXHvxV1Gw3z9z4eCwQwrYNYEjTdZs7Xftum23k2YoKMY9MczbEQFrzr",
  "key15": "2yfo69BU51RSiA93B3dEs7iKpQPFX16EtjkDoqgT9AF5J8yHbtSvPSvPPK3mWWdiB7bCtaProLRSMzGkwGCTCjGz",
  "key16": "4F1T3XDS8veqmcqaYKHpi58k8g2iUQ4gc8wjGBcbBpVcGdBgF2xebHbEk37bBQpivd3PARGqx6jE9tRDhwQHt6V8",
  "key17": "5bSNnxYFvbC3qiXoZ93125Siuc9T1S5QjAoXKWpUtFWvXRXdK7FNAhJBVDMHh53xNEXJrNyg7yBxzfrYhx1FUaj8",
  "key18": "2QAb9hBxJJ3NEFfRuD2EzhR9jjgE8KdiFUcKTPyiRdKhM5D98rJgV16A98dZj7WYTGWsTtGou6bKznN8hdK37pgG",
  "key19": "LUdK3wW5yoaGHLeEfWHua1kfu6ctwq51kbsNDHeNyjRFAGksNCn9sqjqfhwzxZUEBUkofKc9t2bEHzmXm2BiZ4m",
  "key20": "2t2dGNC8EdUvuiz5XYyAWeszziQAwNXJHiSkkTnHxySSaXyk2XvsGrqncYxFLPmcAMEamHGjVbRSoYLQ72kMHRrf",
  "key21": "53Bb2A1EPAnhUg4NJchA6fmEQBMmPnP2nzkoAWj8CpvfJ4cYzviFMKj3nyT836kmVPEPitaqSQSmys2xVLmah3it",
  "key22": "tWyuZbb6mXJfLHGmrxr5H17b7QaHkNEji8DvGS8idHeMuveAnGBiSuH3nXuiAG2K74zPnBWPg4QhJuYtV2ykbh3",
  "key23": "4eakCUsBMvQoUr45H3RHQ2MxiktpFVpqFRaeTWUvnRDxyPD5rFASSq1n5uJobU6J8kd8Rcxuk1KUxhyHzGiNn8uS",
  "key24": "4RRB3pLocVDsBp2UFpxab8pzecdPs3ha9HP1CJFuN5myXQBRLjkjuCKqRSE8BEWSUztXBJua94f5mf3ztsv37VZL",
  "key25": "5mfn5jbhYLds7aScMchGMat6S8o8yKxkkZCffFFJ2ZWTh98D7Zu8TGPDng6N1pRQLgxrHt7MMCLrngevyCWie9gd",
  "key26": "3vy9nFB9zTMUMEv8p3BvP4XDhcNY5usgFJPBrssZNEJSi3uw8uwVKPF8vJ2sTo1MWtud7cYQcoAYtkAiDfKAeoxV",
  "key27": "5oGEcTBsbwqLZVJ3hn99ZCxe9uTAS2QnfTvdEC7TRVDSgZq2gEuuVQmVuMJk68uTmF1bKG9xrJN57pWhFnRT7Nfh",
  "key28": "3Xs5DYNsvmQ8W1GuVLiKEpC5hdzvy8HWd4TCkdTUDD8khnX6GqrdvrYK9SjjGkWdgU6qUZdDFsG8YUvg8cBRJNdi",
  "key29": "36HWZRZL6rpuNj8FWuge89nQ93opuyx3owrEyEZ1aXB6VzNX3vZQ8zGyPrCJq2zgcQ8usSZSZC33raekm2kqXAyW",
  "key30": "5wxaD2zMQoqhCbHhrcbaexMwN4uaXoJmc9UFpfugYJHztB6aXeGUGeZdahccqLfMxjbgYMmwGrSLpFcLXMHCv41Q",
  "key31": "3NgqsrXDgb5YiX8xpgBC3yYKdkeAjsYSQEFtFewpjBQsibNcynM42thyfQBBj8ohWv1wXgL42jwNPjMju2CqpnPv",
  "key32": "3PCU7268SgGcGxBxyxzBSNFyNEmfTfJVocfDGQmdSpge7rDTjANJLF2H7fAo5YNFKmMSprCorAYA3Lq5bRCsoRuv",
  "key33": "5jRph6nUnekduYgaV2ie48qaTVQVnLaDv8qxLpArBwtY81iFjDUE4XCKdn74eAMGkrJEDbUSTqEGjrfAPFuKsDTA",
  "key34": "5C757dwoNa6y2PPDzfRTzxdiEmSBFJgdTW2J5fApws2VGx4cmDPJHUZvUEboQZsxc63dzZhgHev1nVP8fQAHeR6p",
  "key35": "2SwA66JDrRyqko2ik2CELm6YGUcuseBt7imzA93YFrULWh432Ro8yfKa2btunQdBaQCtJaoQjWQfLbehRpxycPtb",
  "key36": "4jNB1mnekvmaxv6GLCLXp4bjaDLLQPPn5T1TpiUBv7wYri7A4e3KVWe5iUA6bkzC3ZGz8d8qUaAkHKNJffVDnPTT",
  "key37": "34bRFefo33dPc5Douocm4i8pqnmNTyfbsYVsGmnFSfuVJqFvR8vz3Y51Q8TViL2cfJHpPn6m7HxB9q2kewNbi1kY",
  "key38": "4c2u7NdUTTcysQspJrk9PVdjiLH73krBqffmNL2mNE4WJVXFRAmM5KKSSWp3Bub2s1v97WXiHnjosd4bJGUBbDi",
  "key39": "4QmJUgD7rkDHmY5KCasptcaqS7RPpVjLQSbirjNswGpHsZwfzTb9kk5rGUYDSsFJrxZckWhLzNY5tUXXcET1qjeZ"
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
