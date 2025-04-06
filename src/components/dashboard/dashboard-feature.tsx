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
    "4tebeqzrennBe1mLfmenNPz1zT5nESFsKPt7EkecLyWmwkSq55rQPd6r1i3f9yoW6WKBq16PSpCkNVhqNVhRvTRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwu1uGPZrabXocp1w8ghm8TWjPJ2QQwDL5siH8atQgtNKMkP3vJKF1oaUJaWYFi1npce1aa77B6VeeZNakCwgxo",
  "key1": "39rshSkMYZG7neW7nZqwvNNaiCBcMjXhgSBhcuXi9J37DjHm7AAL866AJVckG77mJs6G5Yrxmv7wwQ5GCSoXebiZ",
  "key2": "366ncGMg59BafjR7LHc6fzyedSYrXWx2oUNHAxxKSeCjn2fyDFDPoRtTdHNHLEhVK6YYd1fgTTjZTzoVprFzpbyo",
  "key3": "4kjxCt4d15bNtG9BcwXLX2xzsQDSRqfzB7HYZWiAPYjw8LetMnNiuhm3KrAaZhxXDTJxsu5zNfhajqVezc3WWC56",
  "key4": "3uHDVGTwcCKZE2U5BECNRWMcSKZDCBkau1Y7siHrkjqpWrooNfCdmpXXRRZ2TqKkPGxT3SZi7oDGmy5bD73pWgcc",
  "key5": "BSGLBgQzyUZC833UjZBB5RcWY8M3kEXJLyEz3k24xXi53EGLDs5rNcmqP6k5tSPqsyE7BSTEPPAEKMmyLnoTajP",
  "key6": "5gVTNjruZVizE6UfcsXMEqReiAQ8oxm6QyPbYSv6ZREj8iG6t8U5xaevRpak6hQe3YXdYVDk3EzgnkX7TNu8YifA",
  "key7": "4P8u1gbDDUWxZixyWPiJXDePEJsKonyfRfs7ivyMutEj7eWByykiun6WcQH71iSrbPJ13QU4UuLtVCfBz9R9TmLt",
  "key8": "61LZG8zyqNnYpYrhudkqjcRhRcgqr7jdTnYsejAQcpcY16U3zpvWepJtveKNzjE9JSag2r5XrGKhjPem5pDepUL1",
  "key9": "4er4KuuAn6nHE8cNmJxum2raFUqq9eN8aHZ3iWh7ocn6XuqZTwDvKrV3mhixT8uMapPb3tiwiw8RbrK6Ra4DE6XS",
  "key10": "5u6Aipmpq8qEK8VdtuX6KBq9aqBYYiaiQsCcfMdHhDZYWx5emQoXzurviUPiccKPSS9wsXUBcXCfDd3aJ5aKr1VC",
  "key11": "3txcQJuZEchaNK8AoFtW5oX663FZD2AFBsAHxT2NtgeHW92BbFkskKLPzkDv1VGNAEo2L8je2bM4RBG35a84cgLg",
  "key12": "4puwugMATBCH6wWATstnjKnH9azUXfhVwLGgsRrP9uuCsZ3KoUPDDc6FeEgUjVHsXtWPEimcgaUWopbgobjVTHDS",
  "key13": "4uDXGCEHEiqU1noW69iDGMcZNa2woVqxzAFUtzcqwCR8vPEDzddxfS6zgixaW77RgsdQTnGYBzA2zTc466ZFQPNr",
  "key14": "4bnaj4SRKYQhDDVJ4wFq3WwWfLL3Nqfk5gohgMwsFsgRXHXKR3fvqAJNfsMbAiwQwpja3ynaxcJb7Z4j5KiJs6RL",
  "key15": "5C9WArbWLf4LBfqgKUKEuyGGrF9EymMBaYsyeYXwmZcqFgzsc9KAUnhZr2ZAvHK4PBrrhQNvvDWeXPA3JmVjbs35",
  "key16": "5sCyAFhtEdqSaofHNkPq1Yb2DcxHhUa1kbouTeJzVTocpjVhdJMk6kchWmHksVoSCpk1W2bYguTK9U72SFm8zMk8",
  "key17": "5r7jevS6FTyiMZDqv6KHfm1hehyQX2pSLSFSDQ79XmaQaHUSnw3cpQFy1gSLyoHUQVJRbkEf5tqnN6cNNGu6x7Lv",
  "key18": "5NqSH5wC9N3wBBxKfRHyt5KueuSaP2AG3NBkqf1Y9ej2swWnhcRQtnEHLaUTJKf6GeWNNCPAsgZZLYacWqTwQe8",
  "key19": "HgtyZGwhyYinS7zaUKz5MpPgBrqkezYyHvbZ6N3RZCkATscvWhY2ZR6ZDs7AaA3T2syvs369vX4U5cqnPcAmLrH",
  "key20": "5M6WF34b5jHkX7iXrc9xFcTZrPKVMh8WR3WmdDrfxUwjJkx6D87zAQasVVE5frUcWa9SXLh6B6dTgaYZkzfN7JMD",
  "key21": "5fNpdBkCH4Me7JTbeRews3MjuVuGuZFe8B6L8u3vsaHScHnsQVo1qGE1QpVUzcRCdT8UwMzHKBGsdpenDcvJMQcT",
  "key22": "52a9exkhnu7NS15UbmuNqpsFJXTuqq88VqHWQ8Z2tB9KYftr1356HaE8p4UFNV63JicCyxgobSzpTsQeHzxbNGqT",
  "key23": "4D2ENhGrhe4ZttPqvEy46Yc1butjEANQKAxdcjNKw7nSHqze5APAvDvnKgxEttULUv9zVLEX6AWDCWSvWnRb83oY",
  "key24": "27h2JB5V1A63cbZ7fs1J5wrTxSSfJRXDpxW3BKLyCKRvTztpQwm6tiMqgMXz6U9x59gg7n6fZHnuHhVMqmfwy3Hn",
  "key25": "2eGdgerbRHEnpmAdg9MowTpYS78vkerGjfZAyxQ4T8T7e9mbs4aQxkaEKjnUHEh5MfRMgx59NoZvysQ8FNBgqh8M",
  "key26": "2cWkPHF4ai8VjFmn3uc5tG3s8naKCKcgQz5uiLHP4pTv38wPPMyiVDZL28YNCAY6mLJ3ciVdo1Gm6m9F2dPLiXXN",
  "key27": "3epmhQfMR6MnWi6y1zMbtYeR18fTH8QNcfbBqEorScDt95CDtBcz6LxbciAihAELBGV1EXyDRPBaWoASzoX3wEpE",
  "key28": "4b3ULaFK5nbdeRPrVpVuoCAVeX7bLWFJdsXVBp7V7g67p1s9dAjv7m2jZKYZzGWRc6CdiFsUjqofc3Qupbk2Q9Wb",
  "key29": "5byJJNT3fXnK4Q9ZKXRsHL8f6PY3vCiokGPCpC8cY5HnnzvHEo1sd5J35p9KFys4RUo7pneFiKY9ctxAxVAGn35u",
  "key30": "4mWQGLVp9opGiMXDveADYCx9FGfajPMFnTtdyYUFRPoLVvDzWuTo33nEznAsBjMApJpWwXrYGdXSVZa1NYWV6xUU",
  "key31": "4AaW1pMFJ7ddVtvPgAjx6mY7aTgPpFpELUkF4NUSe1Y6Ce2BjTTPzDNEBWuoVzwgmmbRDAwHm5LtPADx3k1CabFS",
  "key32": "NvkwcAJ7SMGcnYBjqyP6dEtRjMNfZCmjzP4LFA96MepGPzTWV5QogxFLGZ6Zu1YeZ2gWgucdoKKyukJqehn8Cvg",
  "key33": "3qsHsoVBLKF2D7HktoEPSESxvoWPVAH8RDSBqNwikF4jNgSpuvMiTEeuPejtbnLYvkxCuW5QbzJnxXV3yPwEP12C",
  "key34": "3v7UGzPDzTunLmWny2BLPS6UP4vqi2QJG7q6mGoNseQgikV6jHJGW45sQM6ARD8XMj1eFHhpMZ8NE8qkcH7UohgG",
  "key35": "67rGAKfCS8q8xftndchtcPJ3b1xtfDmNLi5S7vMVAJjztyU1ZzQj2hcDPBkheDDFTG8ox7xtAZpU6WEWnTQFaRBR",
  "key36": "9NAdX1ZH6LHsnUwNYtyhqWDCCpmaDQzqqk2h3THQkdEe5bAyNhTniAFEtmZA5xG5qZQGTHuCPLhqRj5e5XpuUSz",
  "key37": "3Wm6KdC1mx1Pgvgo7E5X7gWoYjKBudaR7Z6soiXfM13MN7568pXzkMqV5TjKzrTe4x7p42GWaU9KAmgrXYaDAtsw",
  "key38": "3FsLGw1mRte3ZAMDTFpgJYaoxTkyDPqroKU3U8uLvcAdPZVa7CPXDgGpKQKDK1P5afJ6XEtv8VqnkCFjy4uZS9ZY",
  "key39": "2aNdiUg7PRnw9RdN3ZgRnwVHq9uPyM8roYmSHXfeMtVTjwj3mTmgaoeJH1HNfgUwPmQSHSk9eoTvYLUUc7mw4yJR",
  "key40": "xccRd4heFDirWQPXWtuMTffQKsP56CyKKjCAXsv3NM88HyJKotJu4Rau8rTzPafykU3v3bWgrs3FfJemcd8bLCn",
  "key41": "3V5c2wRxXa2XiWeb9KvCcoJMmGEj3P7iL4fK8XpNtiWKyajdTVpuzXCsyALdKcMK7982gMtQDcXGfqwCdQWasXup",
  "key42": "64ejoHPsJpzfrs3tRDpmJ9hixbY5fv6725ktgpMwZnwMSrzZR9gJczPwthpACdrXWiVzKNcEGEYNm3fNgCYnG6NG",
  "key43": "4x17FDuaWtqRVxY5YvTx85hAJhC2PR26wRubtAYQMtKSx6pPX9QgrYcjHyQTVhZacjcVn78JRWYCsWNXK78yVjc4",
  "key44": "xePXc3XaHuPL9BfqjdJHfube9bkLdkvvxcYygZAo1T52LwhMivSFfoE4hZ8bQnpU2hBxR2vgT1BZ2Kn3CDZeRuP",
  "key45": "3eyu9aymY6XMcCrvBWYNawcvBR8w6wHmMs3PmW22neTuFDTnqu3CwqwXDmfjCJHj7yXtd9DeJf13b99sApSwDBD2",
  "key46": "zMpid5cgVepnX399x9CEhJ6L127SjtdxWixePx9Cy6mWYm2SF4VqPkBhGndyxRSuHoV2nXdcWDVnJmDPyaCvuTQ"
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
