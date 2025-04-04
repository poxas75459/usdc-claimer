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
    "4wqLFNwrVnxQmbEaiczT82aAD2ei9ahdAFL5MP2Hv79jMjv65GdVvuRySgqGBT8vqZmPMaLYh2SRY5n15qireeXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9v32iB5f6ncHbaqo6uXsPKHSrT2EEX2zxdxNv8JnovszhEZuScjutyc4JyZBVFdL8R5fQsUgcpafpL7k7Ui5bAc",
  "key1": "2c6R3osdhJVPpSTxbrcZFZFD9iQMkigvN9RWn38UEQdsYXny9qXj8oxqg94NKQxqExpazmpu4y3gFTQThYzxU54S",
  "key2": "4oXg53JSBBLCGuDw8BcUte6C7LgqQJpV3qDnrgQVQi68rhySvXyBUwTeG1hm6x62ST5j4w3QaZW8BKiKJ73x53Ps",
  "key3": "q5hAjZ8PgndshzEZEXfG62LDFJ2Hcfa2DYPcQfp77iKh4ZF2Sr9wraH1V1zTQgk8UKDeeXJgjykpct1AYzvneFa",
  "key4": "2XA5BBr8UBmRSU9wpCDDRjVrBasC3T25mMqSJSBpcVVpHAadepA9obD4BMbNepV5opVM8FHgmiFhBd77nqd1ngxs",
  "key5": "39bKgmPwhAoUQ4M4uxKhSUHsjrTd3dZHMtQDHsrqZpW1T2ng1DYHpk2tAMHYht7VN8RtFJQc5mmkMhjB3mnSW2r3",
  "key6": "5Ch17y8BaxvR5td7iWE5L4oaESUQuAxpavCPdNaF8M2YvA3KrPjsM5V4zfQjCbHbwpezo37vdno7i7emcvxkxzTk",
  "key7": "4HeroV1rKkT27SR1DdX2GNaKgF9J3h6yR9ziCM5gZKjJc7StP52x1iJrR4A7EfwNKbp75op9rngSAbDKrvnYJivL",
  "key8": "32BYbDaRt3YJLTqynEA43yA6GMgh33cBKDBKBZKMdiLmAMWLjxdyfbD8ZarqwLa2rW3J6q6NLLQVWutzqAvPpCZi",
  "key9": "XKrvgi46M9fDBpozy7ukN3GPW3bgFNqsnm7BxDfsVjN5eHcoGNUHim3NrqaFNP4T9FUc5DS2mBp2qz7zsnJG7b6",
  "key10": "4W38UFRXDeCSdfngXr9pLt3xNbC46JqPmnapWSjU8xpyVjZ97w6FKe52adyud2GQmU1o11uCEyZfKEtYGi7tmAYK",
  "key11": "5VsqndSjxUneYdXaBnKWrXRoKCgNnS7TiuEiz9HDHvWnH9SHgy9ARvZJTwyYCeLdUKH4uAdY9F4VVDSKK7rGpQ3s",
  "key12": "NBLzzBKuZkEQejg5osZw5AoKQmT6mfAnEbQgY2s72KjxAQPXBQR8Vskv7ymB5suJmmwsZx58NmnRbsD2rXFBnrg",
  "key13": "5nJ8wRZdWPFsLosdfMKHwAcCQEhXG2dSzzUcRdQ4efDyV6LhsXyYgabmHwh9S7Eof29EJnff8uDSksheE6dcpBNa",
  "key14": "2RHH3hnWpUxjZxpDnkTBXRzu3MSKLexMHbMN3UjAx7sBbCRdSNpXE3P8uPfME5ZBgUJq1hHaofBQeZw1Z2ft9e2f",
  "key15": "3P567VDsbajSmdgzXaekYUcgQTyxmvWhbVtsVxPay5VR7cmWZGaefNmQjJY5oRTcFxtUGnvzgJjGjBG2y77VxSAi",
  "key16": "5R1nfwpqyjd377j2qNECja1zHrkkW29aEt7xuEHitZcWR7jg2b8TokJuAdVTqrM3pm3mrXaxpgbvEKa76e4CT4zH",
  "key17": "2GdXLnHFigRdJz3ChPy8vMsFL54MeWMvpPmtvFn1Wjy9459uxdUxebifaptNtRoMe4V5Nb6BNGmrUYfPhkUzmTT9",
  "key18": "2xHinBMxe6j7jdcVGQwDngsMrR6abW4jSf4pFQMUQBJ22NfKYJnomz9kEv2oMukLE5mKn1ChVd2qU4wZNo9HzqC6",
  "key19": "3dsVXi3yz1V4B88ah5YqCSEXxcTr3Tx5kM9XtNgLHUETGjdm15pcjRyEBybmsd8BshjMeRHuKcMazdmVnjirwvqy",
  "key20": "hYkQZj41L7vUyqKUy6MhQPJ9ywnxa4jKXrB1QUWW8s4scR5yYpPmmFwPxYpdNPaDpnQsaTSy4P2NYRvctyJWEFM",
  "key21": "4RLtJ6nx59KGMZRFFWJa2eTq3ztkk2fV6UZSc2QiQgWYpa595KFnSxYuKDxiHSNRC8yWuXCFFY9ANLgRpauQ3Lh5",
  "key22": "BLRjo91iMz6SAdJHUbpwaAiqDpwi9oGTZYzdZ5cU599RZ6pVgLTPT3b9ERQwMeYQud5EE19P1JrAsMkhCsRQBaL",
  "key23": "3pNKWVHC7UeF8Cbc8JiXiXrKfFMpRVAHVUGFYemu8eAVtXdk65MX49nRRvChVWGaYxzQ1N6cXuiCiygZMZk51QGo",
  "key24": "5oih6mZdqmKpuAjBV8PgJkhAcwVRrzYx1Wxacm4VQUBQArmwhuCkKnJExo7xprtABFyH5pqwxBRWz1siMvcYUFZ4",
  "key25": "5ZVJNDJMNhYc8XFUSWSMm9ByaotMwAY3fhtUCENhAmUtJnTQSsHooAh7cS5iQiNQLin3J53E4fcPBpNiddXiArFj",
  "key26": "EyAh1v571E1scqGMiYWo2ZeKS4q3ugFE1LVKWeAXgiQ4uTTRZ212B8iVTENjZ4tjMjEWiX1viHykVprX2cUWC4r",
  "key27": "4Yz1LDFhSsurMKPNZRwH3XtFq6wSj117c1N9K8mBFkN1UaCxPRf1GcfjBZQY2dXpS8JfNK6auomKryyL9JxteJAT",
  "key28": "3gkp7dFcF1MgoKkuPKhYck3pW2zSkyQnckni3roCMVpYxp2iDWFoqZdTgzjALEL5uu2Dc8t7qMqSS9yWffpd9Vqu",
  "key29": "2PNFznARPv5Q211yHn3WbzNYTY9Dh3MoAeRL24AmGaP8WdGNNjhtbTjYpotHhnjnMzYcJjvQTcwTB14wa8tyx2gV",
  "key30": "HmufkkdPMHLfE7NQcfNt7C3WqJ1j643Sbyg7MVDSRgDYMKj4GL63gDuAPUE4dEfPp5aiW3iuatA7GanbTXnQzp3",
  "key31": "2EJB2CuPBtioA5pyZgCMrNwCXJgo39a8LzaBCBX8NR8Cbqdxfzvjti2Bc8nfaT7WxNYYUtj9a4mm5LbyxrbCRVXW",
  "key32": "5NGVe6yEpXhGN9T3NezUDCxu83jC7AdyXbbeqJDFwKDjbMsrRQC1Tf9T4cTaQZx5jWwtN5mTjgFxzsLJ2uQmSono",
  "key33": "2pwtXHvyy7p9hPf4Wnr2yJ8r6DngoMugXbC2nU4nnYgZBsQ25dvpgj1abnkCsLn11f5nqPweJY9B6YzuoJ4T5xgV",
  "key34": "3eR5WS9qDnniqkBc1nS3QkzFHagqsve7CWqGuu7gQHHFajGxscCTpifyx9bLaTNGAdDRgfwCnyRVfsBw6nRAb6FB",
  "key35": "5WHeZXXcvwDDCxy16t642AQtRMGMNmAVC42CAiZuUR7UDZCS5Eyc22293T8iKXEEkgMnWsPsDBpnucPtiaFZLDJP",
  "key36": "4tbqskd3oSHdAwVnFpmWsXJSghpcHvkP49yEyn57m3s9nEX7ZyTJ9sYtdcjGtqVFh4MUtM1vkY8pzjMwhrzNu8Vw",
  "key37": "2pjV4Gd6bVciYurbSoAyBzGWXCZqcanj1hq2sa2aB6GL7jCEdf3b11qL6jcDdfwBxSubjfEoH4DiDnNa3FyBY9U7",
  "key38": "3d7FycXPJD4bKudHAoPMPBe5CUsRsVmj6bqVJyYaycVZXXBuFWUeUeYnWakX5VX7aJJGrADoftxsRZHvsJoRvMzv",
  "key39": "939yXTeX2XdSzDajwHsqVS1CsmGWqMhjXi7kL45SoXobS7XEZ4VPpnqVKQQTXuUfh48aLBVmWXx7nYFD2VA7zkd",
  "key40": "52CaAnJGSEpmabxVResjsjmevGQn7a8bkjU1E9dcFpir6qGTTZYmPVfEiYaXpiMghJWVnFmXLm9eW2yZWsnkWfqV",
  "key41": "5FmRBp8F5uHS2Py8JKfSPzzi314foXZn3QaA4V73SpFEKG2Le96BNwPxFWhkpxcsk9hN44HscAVrHfKZfWtqJpqi"
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
