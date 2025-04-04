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
    "RcJdxacSyrMsgVMA8oBZ3EqC1ZMM23xv3pH2mvg5F7PGdi2imU7m4T2nohPLKyDMaYnkt2SbkSTXG4kzxnkg3Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wyTjFCXisFVL65pkai9JiqvP4Z5h1oYCSRokqvDEAGWeJMLNdeU2rx9xj7exoy1gqYRdg3W57tYrHnXp7sZiqo1",
  "key1": "55yZwHKgQ4VWJQppnonbBVKENeHWtYoBcR3KMGaguDy52uBXia1BCUtY6PTZcU3f7cSBRWaT6GRqLQviniXbMfnC",
  "key2": "Pr3ff2FApErA6wBtLWKAbMK7KtFhbXJJEV9V2gfAeKTSFay7YQpGrpxax6VJTRVzQtrjdVzgZ2vgnqmbbgCCJan",
  "key3": "3pRsW8tcuezBsELXU3ei9rVPReE2jgKtW4JEwsSRDxLKtiZJ1M1j3obV6nmanJ4Yc1BUKf5XERULjmDpAPRN2LRR",
  "key4": "5DSjqKRsYLAqjAmtEmEEkr6p9ywXHp1roN5jNLQ9XLBdVP3THSpNVxVcwbsvPDhajUBhnmQzXHUQkaTHK8oJm7BG",
  "key5": "4sFG57gQcej1ii93gQRcU8NKVycid8SBmq4tRjntFrQueAu9ujydQ196ASDrMLKAmKm1DWqt2RV4YK6yuwKQ36xR",
  "key6": "5FcQ9byBLYJBwrCJLJHEbEEgU3jRGE5UWtwYUwNZz6hDyfZrVgiXP9GrTuxz5jJJ6ivvoa27qZJEHaMjiGxN425h",
  "key7": "3FgnQoWypeocRsheKpeUnKehbhg84ACdN9DSfpvBe2uBiwqfiEY1TxANF5TC4514xiVnxNM6B5u86qhfjZmYEHCj",
  "key8": "5c9cffmv3mEGXqiQMhPHKyLPCsmv6Qsj8kTuATjtaRRNxBckmFUdp8hKHHtXYcSQM5JoQhdmbjjo1Bf3exUbFKzC",
  "key9": "2prc1y4tSg2JnXLqRignx8bMcZh2xHvSaL7ZtwRMXuwz3y43wogYZaYuuRhitkqXBVMf9ydKMezUHbvA6yJFVHo6",
  "key10": "2g4TH2AAaknq8jHnCR4Bxs7vwEKz28KbaMrCAi1nAHQfjYhWwJWhGHmFEbGWMAECBQTd3fghKUhLFh3hGwvXWXg2",
  "key11": "5TqQAbdGngFYvzYMh6VY4no9ACWQ6FWrTkHYKMUPQnjY68Hkj3ADAApNrYwGBTWpY4FMgdFybDmTxyRkxQTERa8i",
  "key12": "3bLxUcB2sJsZ7xFFfNuQAbP3KF7S1cpguLtZbYsG13oe3j3w2UxzYjtKGM7YSujgyaBkds6j9RVAQjrazgGCEFtP",
  "key13": "4fNUp7vgiwVjKvn2jonKeXYdpi8Zveb2EtK3SXkbgjHAcDBUD5cRMe5eDucDgrqnuV4QLDzJapfRUrEdhya3uohC",
  "key14": "42JXHsDwCL2dAXAfbnoaPwezZ8VYGzRJWh7YLkxzb9kx884XGSAXM7rgo2JA2CncsRw8o71aDw1yT7ebuWcS4oVE",
  "key15": "hzFJdYxqBtbnZr6vrxmZccPvkzSR8oB6tuKCKA9WaBYukjLrTCpPFvoagtUwyuwBjJVHA1pYVVP1UWs9Cwy6y5x",
  "key16": "3e8e8h4hpMNfr4uHyQzetxujdLjTtjnPAp3s9mvhC3a8RTxTVAcNWEXJg94dA53NJ3fTxrJfr5tXTfj2SdTWKwe2",
  "key17": "5V77RPodxF2cDmjokwB5yU8Yuzi3X3wr3HrLrg85XDvNVP58BUVWizpuB29pUM26iHt82Exy9kEsG6FArvLARC7a",
  "key18": "5eeTPDqd6fueZ7XXVbeSLKQLY8ecYfZFtKeninLhh5TF5UQnMaaFTEhMujQEWa2k4nRb8DKS1wsdyzYAs6TC6cB3",
  "key19": "2zV3KXg7iXL1qRrjGLTb6ibzuTdRZfV2UAPNAXSTXwRhoRz4qxC1PX6KyiK2SshwxxwYvAitvELNqnNnHLYDRkm9",
  "key20": "4EDZjP69rBKYQrn2v3PPepYZRYphVeRdTWLoHhFekyL2mpUUE3V8T7qbQtHSf3it81ibkHVAyB1XeB3p521uLZSu",
  "key21": "2Tg2PY8w1J4KwQsvqhZGrSBRa2XGRR74ocYsJYwDzWqbENG7WZGu7BV6yxTiMixU7sXMVbpgR1GT5xxoWNxvrwDk",
  "key22": "4pFDUySTXMPxVrdSo2eobbizBwnmUc1xVL2zQB9Hi2orWwLXmYfuwrxe66HP9yw56HyAQvQNHhcmsmpd8BpMtw6K",
  "key23": "4SRCpeqxwJ3hNjiiV5AcDQ38WDQ5pwURqmnF5DBtpYMbLt2aWdogjWpgzekizPHFw2LbqK98Pw4yr1NVgBZ41WKr",
  "key24": "3JyiuKTxA5tkfvYrYf444LNw1XMadb4S6oinJLCwb7FkC5nk9i7XKZBT9Mh6ELabzptAE8hxEFg8uCY3XM8UqsXN",
  "key25": "5tdHXs8iJHiqUZHt4mCppMyUaM1EY5mpuE5LJQs4UDivd3dGWTc4yuAj23pGV2RjStKAvsnqWKmrxFdwFeo2N24u",
  "key26": "5awUur5fro3PRqxPvn5nsLmhhaNyb6dQ4B2CsThCBGJm5H4uBUv4nJmv7PuxUvVsi1ZggpPKQZvax3iyNX7zQRFu",
  "key27": "2RSFje3xgs3h2oGDrMv61nr6545viuMM8zB3Xgfyke65Ue2oFHitUHd8fSuVPt7XdmpEnnVgw2Dm8UxJCxc8UJKh",
  "key28": "2fxChcfF3D8fw1RSZVvbuVtj5LLX1NJJZnGveg9m8cXXojEmkM6StHWjJNdQvCrQLu4p9Qkf2QDQ2BbYgMBDubse",
  "key29": "52gEZbvLcQdJCchsceMeTHDbcpp1kJbPZEvMqjFrwhDwg2DPqe2RV7wq6qjfTpr9NKMxWcxTGqf9JsSSKBzMbRvj",
  "key30": "2sKGHemefY8uNv7b2VvVxcXSQzKMhZ18WeCrRohbkRy4qkWwqsadHW4prbJ8ndpmuBob6sGqA5PEQBT2NQjGF89A",
  "key31": "3UaLmaw5SwM2AxH5U4353DVnvLHye2FunBUjq6JCYZa9usnQtp9VS2hNdEcMc8BM8Z1LFotynTSYjxFVrhZTMQ5n",
  "key32": "2RNzJw9KmXpkWnT85MCHXAyHisarxGyBPz4dBS81snz9cXu7L9nm5KVQ1EZ9zH9BjnzuR9Ttbm4ADwK6w8SAyAWT",
  "key33": "5jr6WdLGyXLCoARXdpqs6pGzMxPcK3KfLbVEYzFKcTBP6ktf6u6VxCCipzUBzQrzypbuu3CrNDo2AeCcAVywehxi",
  "key34": "28g1nMYDLk22UPs2Yp5GkQePj1UV4Zht1vM3Ysx8YWF1sTF4nfH5yRmuFoqikQh92WwAR4M6Ro4E3ihn7QLAsZpc",
  "key35": "FioDMV75F6eMFWwA2WPEHrfcaT412y12nN8APh27Z9cSXo57jGWZgJPYYtyVTrEzs2qnLJ4mq6X4TAVqdti677g",
  "key36": "4S6L5GRVfnAx6175YgoxJFxLH2xaMHyooqZPtJc2Ribxihf4HJWNuh5ZwW6eBX5dVVgM5wZgi2EPDsP5dpwUj1Tz",
  "key37": "2VhWn3mrfS5S9exA6PEt3zp2jynBMa36rAHZvYSh3KhmrwkJ2dy7R9WuycMRw4WW3YSi3A213pcpq9itPkQPVoc9",
  "key38": "5mWCLUW8kqCHWHNomHZXzwiMwK69HG1k3dSsWPb1p6hkQ9GHccBY57iF1kW5FMwa3vV3op66EHd6wHLNNT4vrXuJ",
  "key39": "55QdcGnsBkTEKKJkXmJYuarf2rgPbTzJbnEqmcJvTzsrV3RE38oEtUhY9VDg4odmUrvxSLMrpZtLd4A3jt1TFfGN",
  "key40": "2BQpN1wqbzEmVcpVVRecdAzQpS8JsDX9jihrKqaURNpEPEcCErt92iXRmWHdNt314YfH8CjkDU3VoGebzBKgaY9W",
  "key41": "3wkquZ8yn3XRY4gfmvomZTm7rWXUeFcyxKq891pmJ1yJZAu1Qq43xXZx97UuLnbhoWkFPcTedTNENLgA1eqUdG6f",
  "key42": "4N9XGmm7ZUTgkfd4YHKcXY3UNfDtyGM8v3X81pQWCTepFuQ2YrFnteF6DYGUMRCFMhtsH5HH7ubvHZx2H9ahBSXE",
  "key43": "wqiDdUoijL3rjWQUfwFxsRJ57qEuMCnNybQ8kdYeeraohDxVxUGXqaAPhvo6Qhu5R4E6gPY3ndYQRFAiH5LQuDF",
  "key44": "4V4Yf85wvGkQhPj2xUCN8jJA52Ai3D8PYA1m6W38jMphFW9VpKuBBbzGA7jdFw8Yg99XJyxEegUqzo8pZ7Tb1rFA",
  "key45": "5a2fwsx8BHedgEb7dqucgygHg8FHV651EZYJZ2ifLyXEtTAbB8VUsPTGxuSdP2G9Hd4EBgDywGjSVjomGJDVHFa8"
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
