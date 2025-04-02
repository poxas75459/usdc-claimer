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
    "Kf2EJXyac1Aq8QuAHKUdzNzyTfGyFCVfdwbF7ovdQiLcxi8zDP2PuvmReskvijn4wn7ZqvD93iG98ibnALtwNoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jb7EJPVakku9LA1nTt71eY6B7wV8WyAgg3RqGr9McEg1UfJRRLyMDZcQG2Kea2zVE2vYEJ7G32whogCq9W17Beh",
  "key1": "5LReiWp8zGesqcZK5ok9yUXmoRwoetLLkookG8XqKoG4rnzQNZovFkq2HDrqcvpqtYEMU6RW6W9iZPDDUWPyxcLT",
  "key2": "2EGCXwaWVZSPeLKZDXWV2eWmqE3AhYXL2jqY77fEPmjs7jrwkN1RsBNYkFfgf11VaCWnUjPvtZZUZtr7Y7MdH14N",
  "key3": "27VcqVjp57uYMLwpot8iHYs3nKz7K3EsnFFT2Zp2xWqwbsVKa17kiBf9woBLjsA8Zb2ft4ks3UVbLgxwuSGo364H",
  "key4": "5AF1tneA7CryoTBg6YPCnnyMYWmPfgEaQxdLxYQJaRyGXvgmxKFT5cS3W8kCZk7mWrZzkMponYHvPJEELv19V7zC",
  "key5": "gi9tZGRFzqcKF6FZNRuDRSU9ExgtrEBF6V5oV5huyXUWCoqSXJcePpmP12YtBAtdgZdcgddWF4k1hcysCJJ498u",
  "key6": "5WVTg2FSQL9votxr9gp62W9q1yEWjR1PopHjpVV6A9yXR7S5bujDq8MmTzVAndpMSshVJT2moyiLjY7jKdLKQFn7",
  "key7": "4rGViTcJmFLtfZzSvB6qXz243wU4SzaKwNwHmn1HP9uGiJxpdg3xJue3W9EBHXAwPHSaRhxjxgVBXaJy227CoSZL",
  "key8": "5czwAm226CQTwFhyJmTHJQKPBLKi4UwVqMntN5MPDchBPjjFP2QjBFiBCRMruK3c2fwxEqYHnM29fdLmm6KWFzgd",
  "key9": "45P3NjBzu123FGXFuLntqkpSpCMr52XZWXZCpuoqTNmeDQeite5aJbFJdaGFkHF8AyTHBgnmqk9PmHbRbPnrQ2pQ",
  "key10": "47F2fPvCZWyAPWfLya5JagsyVfLUfC5vRDTg7TQEsrGvHqtCchbT6pRD8MBhfzAgDMD4qYTUxT6So3W24Wnrj2rh",
  "key11": "2KTahbJUQB7LnqbwMYwfbZfCBwyuE2w2xzmHZF8uEk4hFNH3PJ6dFduvStCHYMEXziYtqqjkMKG52YpAKb9XShur",
  "key12": "3q5ZhpesGcjqrUHkkBdYQhwUAQ3J8znN5xS3VaypLGsVFnj5gxJiHZ813zHnQwhccSaQHr9sFsfGzxeXmRuUssiS",
  "key13": "4EwEVkX3zdSJswCQqDdbGtVbKxMQtSzp7VpxAUgxt7jAemsDo3GzhtfwFbFod8eVGPX2eiiNn22tou2CVHVZ3Luo",
  "key14": "pnRbAtNwxusZiYHFgc18sCH2nXarutvbQA3ubd8KSGHJAdVWvZDNecUq3JHPvJkJcAxGU7BsB7UcU5iDaTpLnNc",
  "key15": "3nccK5oMX8sXZ6cXztoVL5ApduRT78cN6VeZLuq7qdU862Ea4oueTaavuadVxAD2TNkHnfATmqkfUPkPueaGq1uC",
  "key16": "2KymQULJm4Q9oYpHpgwdjFsP7H3bn6B16aQSgVnWmoSDC9eYVzvr3KgTRYKXHpZeWQWxkj78agjx6fvPd178w9wz",
  "key17": "P2TkBbKn65vgsVcsSvhMTnTkJqtQsB6ijWAo6pvutSH2m1H6Lg6J5qRHHehZczdZk5hyVNavpUfw3KSAGrtPMG6",
  "key18": "3onqPGtx5nxB4zDpW1Zx3uY2Zm1NEZZreuYayThX66GWBxRRZZTa86vAZBmxVVzBvbCZeZDdJeXYKGskoJ1i6W5W",
  "key19": "3Gc1UKvQ3i8xmKdHWUwQf9NzUGqjeeamCxAPBsURoFWJuHxa17xSrkfZpG3wSioXTFAmyJo1PfrJeDHsSuhSLWth",
  "key20": "5xFdF6uvWwcaj6VzQBSyBAyhPnE4zbiajgjFDRnfus51sM193W326CetVUyAHtQizdQKWSzQZA8U8fhztV9ftei3",
  "key21": "448TLpv7THXBTRjF2AjrLVhPzeGzYyb3LXEJUQ9H2ReaPtXGSPmNgZoMLkARQDxEuUjoGJe5AZyTNwwGw5EQGAwX",
  "key22": "66uhdi4453CxRL1TVvGKFMupDKNP1kZo3VSuPMSMyuSjHuikHCD7uxwyYJjDn9JLXJK4DmA5E8iQHFphxYLt3TLX",
  "key23": "59oJYgRsKJArw3EAb9Pbizdk7d7E2zJtyP2LCTS9aDiCfVm4pWWpttRJvDghAv6PKKdRZKB13N3iuQegwgLeQ46d",
  "key24": "58KkwRCuuJ9uApZRSA2ohrtroqbLXrtQaNVQpF4YS1wyHVATNXyktriuT4xNUNqG6aafDQqqMyhmXWPb44g5MJ4o",
  "key25": "31rN5jnjsAWRm4Hcg5XeHyczLgrxsocRoRi5eaP4aiCUdVdZxvW6jaCBXQ4MgpUxHRCrH5qNvkJLmr2sp43DdvnG",
  "key26": "4xmApDQz2ULzPYZTSu21t4r7NKsanMK5i2XHnQ9Dvmyopt4v3vx8odhJSoQx5YUCTfMsfYtgz6EAMBLzgYcvvKJ7",
  "key27": "63jC2tihWJkCrPZc624UwTCf6TnHVjhMihx5DxrQrRWe7QXLQncpBWPaaYfyy5AsVhtUEQD4vEjL3inimPTU6qyq",
  "key28": "62HTJpcqKUmcFnSRWHpfLDYYbd6hhzouKNU9hFdUwaAnBxKon4WpsfBnjpfy8u66Bi6KhTrcdNj85dWuscBoKb4V",
  "key29": "2aHYDv7mhFaEqb2UXDpjnGJhW6YCMdgjphmBzMQFbxZhKod6rUh98p6CkiSzeC3Lsq1nQ67n1wcPMrYLKsQwmkbw",
  "key30": "5CvYABdXTa3i74j6maCgtRReutLqTLfjViaPXQoCKRjNRAVmkti41moHEuhpRr1hnpYBaGVBvzV1bcjKp4wEpLfA",
  "key31": "46pnk8tvkfvotPEyi4AGSwVCXj3V9G4rAaPjLwchB6mTb7SvNLnYS7kyBgEs7Kf1FH6MFrLg3sesnqp94Q2EN17C",
  "key32": "2rzKQuh6UP6eT1aadM9qe7UCG274Hd5QhJLrV82DYb7VN6CAEmCTZWK6rFBQVqijf6ktWx8wjvkhJXdJYC9DMPaW",
  "key33": "5b74sEJfn8vKTwpG11SFXwHp83PtqYihwkzUyTdh731aYhe1E2fVLGnSWzBXStW2j6j1ZAHimUhzUGyWVZPWVwbV",
  "key34": "UzXckPA24FyEUevhUgfaaPFp1XgA9siCsDX6CBGDwRDGPnwFjX9HuN1ksdNtNhTZmuuiYjn8gdVRM7ywBsWi1mx",
  "key35": "5dTSkyFfrHS3fVZpmNs1bzvrv5wRxGW4M3zR4q1gnsp55jKMU277haJDQzJTHwukXSyRJjSdQFUdp5rLMUrhTSbH",
  "key36": "3bmxFoxJSQ7PoMoBWFGiJte344itLwREn6QyuoFYkPQ6y2hVuDSeDvVaPddGnooN2sfsNpTXYuNcwqcqoQmxz5d1",
  "key37": "5R31AVdPkTyW2DjXMrT52754BzkayXZ7Mie8nj77VNMQ1oWxkCHrZg1bwiaZ7zpYCo9rWWPywK1JjiEt6PCt9vU6",
  "key38": "659nbVH4KC7igM7z8JhqLjwcCiZVUVwFHCtCEyPWBybcJwqdEE73G7oYf9832oq1nG9uFitErxXCmNnSgGvGhByA",
  "key39": "58Kn1hzK7A11NwoJkuBgVn2CJDSYGYj7cGSa4fF3iQKbMq2AFd1eCL31Djpg6zrqZLJUPDqzMFTyTcpK5WBywrQ9",
  "key40": "4mCBTGKRwgMRrNWV872i6wJ6K64GtnBPzcqgQYgVsYPCUdsmWEjoBk2x4WKuNdTgUqA6FVUnCeBQGm6YyDjzfbUv",
  "key41": "69yR1CbGHUE8zmtvt2M2RiykiV2v2YNTeEREUhL4YTuSpJhrTRNyRr9kwx67Hm8v6QR36DsoN5gk4MarwtLR5v7",
  "key42": "2CWwXKtqd54d7zzc5EZtcebhxhYfj3KBMLKpBdXXQfHnXrujHJfiwuSG2PACTN3Ck4RFTErkpy7tznvFdsp9DWYS",
  "key43": "3jYfwVunV34qSEvy79YCHP6amCv11GnB2vibRoGV1cnnaphGMC4UhYpg62usZoXbkTr1qG21yy3ujtnyshuManPN",
  "key44": "2Mv13JHQzGz2QF2trtF3sLzooYWmvXQnYaq5xhP9e9DyU6TKsLhB2aTHCXakBgkgCHr51UEA4nJQgUa2ns1vkuTH",
  "key45": "2S4qmoX9QB2vBSUNng727Cw732caWH9MNWEmvDyX7fa6HNFao96kfvp6ebpKUpq7NsTDk7TFuMefRz7Z4mQwxAzb"
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
