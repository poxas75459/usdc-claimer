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
    "mGWSUCwnedjiRRNLcy2S7kqxkh88AEr2JoV26P79GfwdBWyUKS6Eh4Eqy7PtUaNxFTB3EL6TJJegPa19WuxZjEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPLWJwGkvABwVvNXRoY3HTWUaZgqNxwWXpvZYxncHP3YnWTWfG3Bc6yjFFASeMnCTnrCV25MDR3g6tmFLKo797n",
  "key1": "67cwDoX7U3YJmxxPx8S2MkV6M6SMoscqeXnyPAyFY4EroXguhujCbiFndwP3zP4kZv7Zkf8FEjdnFFPG8BrDkdZp",
  "key2": "3nUuEX1yB2MBnfquKqBjP7k37wLCEiNzyRLW5zRbg1GpPftjQYKMRPzRbuZuTe3T4ZNQBnaJ7AYjYqzrCCMiQrdR",
  "key3": "wy2rNMtiVySkBNpDfu4Cj8wbZHmwRMAzjUbJX2yzqs2n7FQvQkHkRtdR996TssNMPDSoMgV6yHq7VHEksEYJ6LM",
  "key4": "5HogaJKuxwfMgGYqQ2psbCHVcAUWiB2tStJsRJe8xaJ9C8H34NENuQ1ztCZifooZWKVZBMghF2qxNrSmeqCYibRd",
  "key5": "4mZqkq1ZYpJGVZKNVhJbVY1CGrNjTMyurBpCoba1Kp6ZgXwECXVyQdoD3M5qLvdbNnMc3uYfsmPVjQ8ML8Cy4ujd",
  "key6": "55dbmU5eUZFgkdfGVWrat1x3JNMWSeULtoLLjSy5sVdHRqGdy3qgu4Xouhfw73SQ8GTrXBY82oxFb2Kr8e4LaPNF",
  "key7": "4mNk2DU2yoJh9rnAtd2tnAAHMdSEgGiDGqrHHJcWh19XycFGPZpw4kks5xTZ1PkUcTmX7KvoVTh1Rr637mit58HW",
  "key8": "5hoGE345Xa9F1AiCSNsCWiFHHbAwcRJAmxQXJ4Uj3JNaf6Ryqb9XqPpeu5mQ8ST2Zw3LKkbBEZ8N6tGxC6vGFPmL",
  "key9": "wBGJdcAEuzn29iYgZXpCrDKKFFXrJ3weFpu8EoxTkYeXX6Qffq34h6azrxV5oj6pajc4Jm3FJK85Aiv8pRHYEXN",
  "key10": "5DVT19yVTfchMwD1Cdwr8JSVoAx5iVwxTbky9AdpRSXL2kkzuWoU46CYg7YP8aZ1GGHe29frrhq19wEMiRQAt6fe",
  "key11": "u4wdDwbHE9hSVc7CbQ5riUUeSXPk6iciZCYCwJfQdmbFMxKwhwHm8W2haqjd3ac6fJeh2L8HzqHrSZuHhQLmnFj",
  "key12": "3g3urJvs3zGzaCfip6hF6ihd3tF8AxFt8jrLFxAaus1hhmn8TdogR8xQNx3mHaa8Furo4RKikKNqdBcEFcSV5SP6",
  "key13": "pgcrf66dhaynKJ8U7pfejbikZHhZMe12cdGReM1FV8ksAg2oDQ36NmthGPBmm9hPWKYd13SWYwibVkts6yPfTne",
  "key14": "596TuuanvANed6jv1yHuQ5q5tBCgQLSY95gDar9DSbnvv8gBnNyXqvHtv1f8mBg49cveCSk8PjkaiZjBywPoUTrK",
  "key15": "3WgNLDaX38s9Pp63P1beJaZNR7EQ6rYZ2Kwnm2PeEEYHg8PxZkRbap3Cx9i7AeXa48HCFoMyVFSCwFSUBAZfbHeW",
  "key16": "2VCHs3ujTRh3MUGqEhsBHse6ys9ZCULzUeMY3kvH7P3JBRNKumeq3RVgLgNHYvMFxNkWs1s3vcePmgvo4hj4Y8mm",
  "key17": "3CD7k39dx5xWVEaQbw4mYKLMXqKotg2PbWWQZrbZZvKJekM7vWxFsxxaY2at3PY4QwfP9pJMkFAQjYs1mLdUDpSm",
  "key18": "5ZqL5wBxqsRTD4FJt5sUbmka3mLbogHkwydtvhZGCzua7uSHnYzaf4bq3ZuZGuZ7SEVrCu1XWc5aGjMw8ew9KYZw",
  "key19": "xeER5NFAnBt25svgfzzWaiQQfL4MMNtgYgszEVX2jsbx8jSscHvaVkUfjBqA3oL5Tw9w4TFNzCbUcix1Ebc6MYu",
  "key20": "64wuHDoHSh4ZgYjms2q1MihiXQ4jjzvHW9gdULa6UXB9dMbV4M8wdH7zRhttg8J1KHQtr7YCvYxCop2DhYooWo75",
  "key21": "4rQ6efciw8QDLVT1HfFuLSTz8RoqfSFv2Vvcsj6uVzbaRXTWGup6zxprTiS41pL37pPCHgtNPRwQ3f4qjjMtP6Ku",
  "key22": "2QDvYez5yw7ak9XKs2jfWMTknc9tcwXRrQREPoH3rM95Ha8vEQ3Dyo3UcnXatRB29CqbeHXevdHs6iKD8xnX5Sm4",
  "key23": "3X84y3bKQNoGBbWJvdCbPZSbxtSgErNuuJEQtZhXRdhzTRiLMsoDhBHa5hWucyRpz8hSdkVSBLgZWz9d5WE3hXC6",
  "key24": "33EvdjAa6WJtEmUuUHJytzWSHmZgbtfRan58PZ6TPHiUUmTZLCGYhwbdVkzTcjqPG5a9wGF7MZ2YWPa85kciGeYZ",
  "key25": "5Wsb2YEM1BxwMRL2xuCNtVDyu2iJr179xyBsjvJfQuB8TLL9U1ZqWxs9CA3dirbDJWB7Y7EA9NtYDjmfwjuJFF9Y",
  "key26": "4V14hGXXkUZfgjDgJJxgUAB3XMZZuRVfbVh5r1dR5V35gzykAHmDuzYyGsEuFxNMMQ6HCFT2ZEtYCRfDduYuTdWW",
  "key27": "2zXMUWQhAVh2TdEA7kgNQu1KpsATbk3YBuyBKcLUYRePLcsD3H9isGhcpUtddXRvmSUX8GcHVY8RxCCJvgCeWHCu",
  "key28": "KMiE6EtMxVqe3tc8Mzujd48VYeeXbgBFouGnFPZfKEkuwvbkhTJEHRyFm5N3N5BFkLFaVu7cuesyLdCPXessTaY",
  "key29": "2sPaYMgjAXMX3VJ1EV196uRFCPDZrYtxD5db6WSYX4t2sFMQdRX29ueF9xzxJmWRgipZPGFNq9VVG5XyinoF1ZRy",
  "key30": "3aHaosYQPDgF4SYvTitX7V99DKaRm6ZzTiaqrPMpNhD9THUZ22ZN9Ea4yXNKtW2AG5TTFDt1np2gEhfBwh3axKJ7",
  "key31": "4Vmu5HP8fw5MynmVzbbcmN3Jtc5QmBnbGyKUkRQqxEifLjDXfzMJ2UdFxLvDyv6ghyuo3AF93Ag7WQknZqjvcni7",
  "key32": "6545TWVMiMCms4LwzapC9dCP6FYwjiohsTEKfTQRMNxUK3Uz6xc5eCnuN94z4ZcaJRSrrkuPrJECRFhnBejt4BXr",
  "key33": "26C5gY1rTMUqcxq5ebAWaoyWZkpg6vR8wPE373J7TtCdVcfmAdVyiT553UAN8jfLXaYEhS6f93shKRePHCrrKBSE",
  "key34": "5XaiJrLcyAeQxg2o4bPW6vSEjHLYvJ7Fj3W54i6o7iFT56qe9pkG4wNEEyndU6Kevmf5aRtPjEzumKQZXYvMqeiy",
  "key35": "36KdgfU65fKdez5Yzt8UkK5MJB72Sy5ap4TdAkjJbWgRVKKaQdoFMcpFzidq85a6KVCsfpWHcC4aoSKbcc3ngMGc",
  "key36": "rrUpHhFYnZBW2X99TqUNf3JSvJHema2neogEHmYF8mD9GqhAb2P4DKcHQmyxsTsMDiYpTrm5eJakvgwPmZ5pSPq",
  "key37": "3rAkpdb7p77tsSGck1P3KRo5g6tzMvi7PTnWDQEzKPbAhyxSEbb9h9eucXxa2YfeqGQBFCH6mpnY572XZ638AvsN",
  "key38": "ZPUp9AxZ7AjaxB7Sn8QNyad3q7UCt86poHvgEbgqJ9mqWYFnVkHJfxCzD5UqkJxHzjGAq1KJZcR9D3JVYMteKg6",
  "key39": "326FimAwcTNdYQSWUwprL8gVfodRo2jkdMqzcNfNTC1caRHu178kopuie6AAi3vunWqJyw9uLzmyebVPnrwU9CWJ",
  "key40": "2ZyR3XVAfTbCoD7RsFk3UH4T8nKjec7tiyozqjeZeTfeqPHdrYuDpVSksVY6o8PsiWR7iBKbqVW63qPon1ZyXyvM",
  "key41": "2zvQ1BiSdB6YrhagywWZBSj1fTsThWwj7Tu1WAC1hCA5spUCpXiDZouzYUnBmzLGYuRNQXwFCDVSfo4mXRKTPBYd",
  "key42": "46LpR6nAfz1cqftEXwG1KhR5rpkGkbyyUfpDfyZMDJC5zu81krFyEaaZDRAuLabawdPBfB6Swrg8j49bZecFDufp",
  "key43": "5cqTBSVwGbtgPtgasV7SAKHY6mGWomGBga2AqU6axvwVVkKAX3z8ipMQhSbWouMgoSGRMxN4k9t8556wsJpq8Z8g",
  "key44": "4xYyqJUAHkDZdhewD6cwHv8Cx3wnDXcN7M2xqKij1Gd7TTAAoFHkwyRaYhN2ZEEjiDgut7PoPU1cM2HGTDujBXFn",
  "key45": "5QkZQKCtqfAnqtqDS4gFj29pPKhngNNbdN1dhhDh389Kc8TmYW7GiqjsyZY1QF5rYci6rKz81CD2aLbgET5kUYy"
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
