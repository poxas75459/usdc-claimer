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
    "2B9zpAREYtWhGMB6ikwMuKYChtbpJ8Tr8i4ecNsJmaMUBUMKuKRUtfW9reuTfy3SYfk6EJGoZzKksJms4NnZFi6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jysXDMnieBkjUxdJPzrVHe1n3dAesHFFAFXxMTfrnKpJzchrS9D6qoWwhD9VWMnkTZe8wjZFPSR2j7i2eDGYDr",
  "key1": "5ZT2UkFQaAbZCadQ4mBwmuHB9wCX4YfYzCYBfB2XtJwKc5wNeryqysp3RR1aiNNT2xjY41m3jBiq2ag8m53PF51Z",
  "key2": "VD6Y63mRmScLvMsAB3FX6yXyxeEXc9jAiVjxKgSd2b1MSaPRcC4wEwe4MTLT6EmEVrHamm4isXZvZ4bLghSvri9",
  "key3": "2a9BG6PKKJ4bhvPvRt8XtQWm76jfsZq65YGsDv3bf3oZJf9HpWgq3cb2MyM98g8U1sfPoasUwMEAKGrF69diWmwA",
  "key4": "5JCF6Lcz58akZt9g9TVkAt1F1xGXpu3jMeykWNSnipMsWpYgSm3i8ugmTmvH227uBmP7eb8HChSUzerVXJRWSWiB",
  "key5": "5wFyBDrJuffxDe8ekHVdWtY2sBp3oxjwjYucRGSdDKkg7eaqRt78MvZaD1sEBPPhH6iqjvBnLfbRUsGyQbSjsdRd",
  "key6": "5iRKBvLugbyoDRW4R9SQtRM7gXQvbwMtKexccLNAJ8ZzUmXCGUCUTQnWzuet5WAZDGRXiCSHC1cbGvf5JWWmtLjc",
  "key7": "5jD42oaVCUBiQ3jg3BgzqRA6ni9E4uTk98dCc44d7BZyLvQ2SP8Hyz1phToqKowJPuMMbmGkN8vhBTH3mcnnoiRv",
  "key8": "5A1jptrC93fNM4vt1qjjVjHwDvRX6E6Hasey2BP363shuT4ffB689LCTzmCbrmNQXaHbp51RbCkUTePnVQ6ZHuau",
  "key9": "2Y2nWeyT3QgXupJeA3T9ZxKHhkRpcZHYQBT98wm7WmtpKLnScZJuSDYogrYiRpmVvPwUCE721ygYfEW8NZngnqqq",
  "key10": "31RLeEENamHPHFX2TNQCynG2kSa7QG5xJePQsiBFvYhT72jYBYogqpvZPn4Sz278L2cJPD2WGWSsWK6XxYVL8aok",
  "key11": "3s8q7tHCixvbr9rA3UHLpRksuapcjK491U9Mkpi3HUB1WJKdziJYqWnUzewzMK9Zv16KomNKMzqnFgREExArrsAg",
  "key12": "4khCQiLhrgSrSvSU5LWbi8tqvpgZKqhGG6LQon6mcAbjJNzHjXsXc7xRsVQV8Seo3dgUGfZ7cqS94cKyWoorL5Am",
  "key13": "5xoeEfh6Bfu53Mkdb2p8EzpDJgRrTFM2gbqmJS8v7kQds7MZwR2Jwf2Zons4876dRETFiAnAUHpuLPSFtHHp1W8Y",
  "key14": "6gvvnS4syEPLGUt6JMtrvKEJP8NtNhWnoWxBRSSS5m34VjseLjdxUsHNCpgoZ27SrApGneTBiX966zrAFp5RV9n",
  "key15": "4vG1Yo4QWiUS4BX3MF1Zu7k2WiXZachqm7LmFm2X8qduuG65VxGKBgoLGjgKBXZz4QMUgts9frNh8rj5BFCiPBjW",
  "key16": "2BDD1nFCaWCSuqZcsnuzqxZkkZbzwryHtX3wapvgcap8mv5x6sSqTPNAtafkRSQNBLuj3Mq6kU95oPXRmVV9vGGq",
  "key17": "37puGr6h7oNZ59g4Fgc6TFq9xTd3PZSrhxdgP9P39jCNqwoE1keUTojHtaT9jpnNX419JcdmaiUr9xi6sCfwpCzW",
  "key18": "2oz4nBVyZV7QuFyS9TPD8EgStbYu985n9Lmb7dtHh12hsh3diva2zSMHFgRm27dgZVdFbWgFs97VAYXPeL4HRN2h",
  "key19": "5B9bGxZtUutxpGeNafVphaxhpXYV2bgM2U8D9ZfDCtD9w9vdsKkpw6V8GBZbxuKB2NRUdrb5ayAmuUJp55WveNWA",
  "key20": "4R9brGpLwEebVPFMRHmN4xAKGqSVnemaGSe5Mcx1GjZRUSZX5NzTvKo7bXWrespv2nHHHFAP1pmJKUAJEXRjZyNc",
  "key21": "3UZwLbSxUyp75gZX4LV8vyHBh1DaSweWwvLsSfBmpYaXde53MpBujWF2vFmJsgDnDd2HnWHskYbJDczkaZzjZ5P8",
  "key22": "3RW7cyUaTgp9G3mC5M4qRAVTdfHuFFK2bdLaRLYvzmA83MkTWvaMqtDEZKbwEzUYiXjm4Q7rTejeP1VMNvhE7zB8",
  "key23": "47pEokJE4CYPqDJs4HjK4zeci2LDi1yK3UGtL8Gcz12zu65ugoYr7wFrEnS86RGKxoM7x4gPLynGE4SrpsknHVex",
  "key24": "5V6sNCQ2dH38JPfkhCQTkMxxHv4JMQFFk1ry7zgSaf2t8JrmG6MZBFLK3RzBtAbRHJsR3qTGtxhbBqAz16r1Dswd",
  "key25": "2y8yj16xsyamthJv3QNYBUygkzFQ3SmKf3HSaYDtjzjnHR1m2kj8SiQ2g3UFDKSPJ5uUBwMtww3rbbwMEWwd8xzt",
  "key26": "3ksVdQVq9hSLMMqYrwRQkUcHb8wenuo6hoEqNstnQHz3mxZiJp9xvTGkBXY5V4FAbQ4M6XoJabyBhTsruqkMMAoD",
  "key27": "3tNVpVg2Aizhs6YPvypsuEDGinsVDVrwL2Vevdzft9FMc9x6Ckodbd6Q4mE2d5kDGvojYfWcYZGyvkRwBRECUMEf",
  "key28": "5jdETh2wDTLNvt1zrCgFtDEgNYecW4q8pa5TdcxgoZV8QiMC1xsWN1NDzWx6MCg1cA53iruKtXwNpavufhRzc1Z6",
  "key29": "3ZN83Vc1ZzZxAKa5qHTnrP6SfP59JdVHpA3wtB4PEYwMD8WGwgRFbKKK4TjvZri5TxiDyXZiYFcHHGwG17ZaWGu3",
  "key30": "t6DmheztYgHSqDbtRrPgBE8bgqfLpQKu7yEnxiMAv14ePrxhYpdDCknzn18WNoB6Tw4QnyD6RpFwqU5JHzVXxnF",
  "key31": "45ikhZpwR8vCDorBBRTkm9kT6KoycBdUVoMHoR2kFMU4ca9eQ1nC3godVf1DPq64qyXb1ks43dKgjeT7VTVW5VDW",
  "key32": "63zsHacPR5Rzd9yqCUZ1AattoA9cXCcqYNNARUsxbW5EF8xSqssteE6zYFnem6jejAZiCEw3FtajtC5qRq7UGN5Z",
  "key33": "4SrSFVeiXVnT7G33MsvdpoBpduXnPZnSdEZg9Ft5zpVGjD7AnNs2u8hxxCPmppKubM7oxZ9HUyUAZtdm56e5XSf3",
  "key34": "5W9yrZnJE8oQXK49k2oAiNsMKDpLL1ps8uWTvJzQ2dJjvwf2SYsRejC5bKoxRQZba55sNHvRMhj4Z4WPH5ciV9BF",
  "key35": "WT2BK31HxMXLK1q2VCHrmF8wsTRthU5bTToybmx35kNsbGQThL7HcNCDHWaAnoAaTAUBzVGhoyYTdwTiyirLAWB",
  "key36": "5ppCk6qUSyuFWo7vV2i8GAcK1RR8eN1h2jHAEEuSfUW93AZoxguYzM9U7UrGy9ubwJYPAj5DKZ3YqzXFVSfepWAA",
  "key37": "47qG6e1p7ByJpFPd91kXkKgA732fPZuKkJ5pqhfdDHednXaUi974iPSejT17xSbBoL5TSWdQX2SFcoZX8t4DqHRv",
  "key38": "TFbrUAMoKYHjWkApfk9M9Wen2iJSq72tibiJE9M51121kmcigxXFSVkABqkGancdFKNLbvfnxuynDtHB4fS8gUe",
  "key39": "23f8Ko5Yand2QcNLw3KLYwvH7tiJB3vKBvtNeBjgEB3Q889HpfyWZxZ82QNXYCkknn4sHJDFrxvxMHrtz9p9ghmt",
  "key40": "3k9ob2YhP3anpsML9xENfpr9z1eTCbXf1EuWuACdLBZ1i46ptM36KR29GhsS244172NbU1wM73uE1S5QFUkCZ1Mi",
  "key41": "7cPDRdNzn6Gao3t3b5RFq7CD5Mk2xvxwbVfypBK8ywmDkUNg5NqLBaAuX3hZZL81GAWp1RnhFr3CSiQUomSx5wx",
  "key42": "qjhPpYvwfQg5jbDAPetBg5mt2JaFpjF2BBMAFRQnDEVV2otw36XZvWKj8wVD67MzHbGzp1BniV1LPcEUPsAWzB3",
  "key43": "66vaN2sZBtYJbi9QCyRTw75fzEwi2ZErwtNU7XzKfKjhvzaU1vYeGngCV4KGa1s1iYxMMyCQxVnmMZ4k7ubdfXtK",
  "key44": "2BoBHy5KroerQamj9NxKwyR2kwiXksG4BMggdk41UNdq78ro8qZdJvKT2YopDCLmLD7u3MBTzUaabqn5nL3mTnZY",
  "key45": "3kfDnnBEJz1A98R2sbpN9V3pXBB6uhwZUyeYXAoDxKrhaUWqM1rKF68CXiUUpKUnSJR6bZ5PwcdHHhFPUPGrsyix",
  "key46": "9FrsriyqhQCBxkMGD5w3LD4ecuKTwgoZ6P8HbPBxewZdAcjjFwV1b3TUoiGFDJAZJUyxyMHbUp791W2LVDofhzy",
  "key47": "aaXc27PacctYkx8XeZZ1EQai856hUy2mhtmQ2cG6oxv5L9zsHbcZBGrVZD3NWvW5d1uU8BegnUYfKybSpguuoms"
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
