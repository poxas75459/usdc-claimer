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
    "2iVCJChfCUd7CFrF6tNz8pf83Er53CYtPQmz5DgCiyAUSNKy1wgHzwo4Lf2m8RfNPNBUZ6pc4Ffpa2DBqjBzMbHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XmedUHCCZ9gKw6BfRQ8Q1fRZtcDmqCGVPYoSTxDR3EZcbeFiFZt7WCPp4RQRtUUN39xdWi9PAns27Ew9t8GDHX",
  "key1": "5WZSPrLvqh99pULCuZ5tWkUiHDdccqGRdyU2GV4rYT7YvFNbTR2xEp2Wbecdu463izG3PjvT7g1pXTs9bQPwX8PS",
  "key2": "3b2qGxTg3arc9MupAYiXyNnfz2mCJrSuMVVzGUPf1ds69gy1E3Amus3fX42W6LD3oDZQ3rUQbioVvqoobQ1ynFaJ",
  "key3": "2b7zTWk4tLod7LfV3Jd7AdAECuNM1QKYuQ9YtR11oPxpALy2pmRf2rLFrvYoeUKfdPTj6pPSeMw97S1yFGvysmMJ",
  "key4": "agZrDA4HzAB5hS8Tteg9qqJ1hi2J487NBKqtheVmKJVNYSzvA1kSmj45uy4JdymDgmF7gi2RbHHY2A3ZJX1YyN6",
  "key5": "662iHoGNP1SXyEWNEmsjM33fN1MwWUN5gZU58DSfdiVPkSkQi2R578baCTvGDJFKMh8Lq5Mw6ttZm9CUWyJGNvED",
  "key6": "5tAAfqS4x1pFAjNnpahRTbWpdu4qaevfbQM2JaPP5ZqCjesA568vTCVkUJsdtHgC1cev5iFhx3fRzBmzEaL4MVXR",
  "key7": "d9eHdjTAP8SC5zw7RoYi1TqPr8EutJXqXQy1ompN2Vb1aJaHUZ9MRhwk7sQPMuhp9AuZSa1Du97QrbU8gTHADc8",
  "key8": "2mtbw5Ao6gAwTbzibkHE8AiFTUaWPJ3uiWVJwrLaK96rTySchUUJnaCASwzFugtJjTpE62Uz2V2a4nLi5U9mLoua",
  "key9": "4GQPFyLcPvNEeYkqH3G8dRDwHCS6KmvTn7dNezYAADkLBhb2UYJ8gdCMsdm6bbZXQ3jUKASVr27dUuPkykaQPf7g",
  "key10": "5xGXFmXc9pEDFGnLvjhzmjr6EwiPr9i8jf8Q9SiEiAkHD13zPktXvVJ8suRAvWWHccCTnxrm1SkNJ4yAGJKnomys",
  "key11": "D8cr2FCDxFBScgJ7YUtGGKPR3egEAQA8qC9vpeMdqroPCMt63FZmCzJiQfGoAmfkUAG2mxJE9b4b87o1yEpGmt1",
  "key12": "bYP5oN5d13QZbVxTkPq61sbJRA2H8u5ZjqcApH4EBM8oVHHkJzcJ8GzdTY8Dr33dMZN7Y4Rh7uPvVoueZAfmFxF",
  "key13": "2cfqToDPUc8ioJNHUc4XKKndCfSFA2uSyxwQb7DEVqAFvowoyatSsS6rHCqPbzjw4P6cj7h1TisdjdN7j169Nei1",
  "key14": "b8GzMeqeGhKhJPFQuMtBo97aQvDDZGfMGZsxBwb49zaWa2qow1T3aqxBjrMpXXqGiV4M8aiUhYRa6QhmHxbCw3c",
  "key15": "52x7LPapNS3R8RhR25tUxP5Lg4k89dktetbKtk7BXPQcgJowAgEvMURibsENB18XJRUUwTstvNdq4FRv4DiGN5sv",
  "key16": "3bwbUeSkyutdQc6N1a2WLYGuV36WTQeRfqsyP7X5ErA5XWDU677Jy6oHdvdVmLSb8x9vT1KkeUBCCHDeeTgY1Jne",
  "key17": "3TbTaBNKnfj2rx1PFWouLEiYVV7ZytRtdQbyLKDDJRWJFeGgC66YMWkPWpbZf9WPi4wWtpVMH3XuVT3wv9ZacYgW",
  "key18": "P6gfwhbnSko4CwXehuHdqJcuxU5AxTsrgx4jnL5u6NkguC6CcCE3fzgSeesRbQGW1KZQbvDig91erV2bksyaom1",
  "key19": "5oJ1yjm2bGBi24xPqnV27zAsSrdUVcfJWnTZkQvTVotuJp2AUjXX1rcxVZ5YetGTGdx14yFw5nMkZC7uS2HxyieE",
  "key20": "5mNG5FMaPYpAJPPNTadGS9psCHZee9Tuhc14XtqBnVpxu2EKQfQ6R1W31DNRrAWbvmiz1JmQxups4xV341r3fYUw",
  "key21": "xE9SKhxHPBQvGD9c2nhLeWcSyE5iwnttZEdNWFM7ghbcE4N4HdUFjYtTSVWmS26QdqHGzPVTrjPrmjyQGzsQuL9",
  "key22": "2EiijLEuEcbLydHgWpGWQHpTnKdSXPBojSsRVGALd9D9g61aTsCT96FszRgsjgwqXAkUuzEnzvjPU87Pmrj4eRwZ",
  "key23": "5GXPFAoSDBJ9NRjozgBMmUkocGExjg3qdC4HDDTorSN3eVXvKiGfa4r8TfyDtuo1UymDhwq5K5hXaXzKCJAGBep",
  "key24": "5Y1ptb7CGPycN9AT24h9ZLW5nXX92z1KEG9sCYvfKtZDgA7Z9CEBW5yvwgBy9SDiwLv2rEcN6tCuqWvH9bhMqRuq",
  "key25": "27ok4UJij2u8FMTCvYpcA8mgm68Knn8yCqXQSy3uR2ov27wZ6dnj41HBTtjy51FzVS9avvtiNnvPjneh6U3ZAG82",
  "key26": "61FFrU5vAzBtC2EofM3ACdz4F1wVWfjdcUDpNCss7bZsuXcCQEe31VpHKEwSUs4RkLmV5mMq4ywUHXj8ZGrcauTQ",
  "key27": "2cNd1AJkmhVAprnfXHZjvfiMyqS85Jt5Bt9uXLiPNxMRDqUtS9LqrwZ6jrpbhHFWqN1X1PvFxoWRM8zj9S5eoYxR",
  "key28": "4vMag81UyEfC94uTJA6kAShkRgT7FkXCwsatKSonkeYgKwRYrKc8djHJUduSxYSMNcitptMsX6ryUmgGgaoE9iM",
  "key29": "35oMjWTLgnuKLLnpTTgSWrxf4WzQdLRVkaxXM8J4siTAgNquXfYxbyjJaga6nDSjyg3UUjwy3q3J6m3m8dy27Ssx",
  "key30": "pJPW9WM9LXJc3J1Q3yVPU2JYvg7S9SKC3CZ4aTkd3QVgAxiQqd61FE2YC6bcDsP57ucFcXbWwFFhLwpcd2qLGMR",
  "key31": "3U8XeSrAfY7FXqhydd7py5uWBUTpA5TxE5FVtNXQwxi4BML6a7Nnq7AoX8z3TfFqEJknYwZAADzUaEoo88kCSZMW",
  "key32": "3Zs6dhheVZoYnncH3ULNkXswsdPP6exh22D26s6sdUZAqG5U39j6MAggysqjHgPEdihwEfTMTMaH1rpvTh3PWGgj",
  "key33": "3GsbXrJ1mRPWoaDV8BszTqvPY4zr13Xnx5aB628qE6PM1Z2Pv1fs2WcBvG6FfM2rj9XyBgBK2eq9N3YQTKcwZT48",
  "key34": "5aaj6ZZzkiJX7X1zYzTEbmLRncTSP48rumZKTWS1GT15e7q8cbu7t6z1wog6JDoo3WCFWCxsjgNPoprFvL3j43r8",
  "key35": "4GokjaQvrk7GbLrhBGsxw2dacbDx86cEa7KPDLLcZbrDYCqLV3xPfYGebzD5rgUCkecdUMF3MuRsw8RqzXQ1GcXJ",
  "key36": "38JVHT1s69cBZ68b87gE4FbC8gppGcZsTN2LiXSXJADwZ4sGaS8Pgi6Cip5GaLwv3rAXAYV6JsjHjREQinbD9NGg",
  "key37": "2eWGBxdNNUKSocJ55G7xDaqfWwh4iFQ34iDg8AsSiaLHbT692tpnrcwkSkBubFsEaqzYH5MohPwUGsCSFxKJpS17",
  "key38": "4cfcshHAuAEtMYNHKYqyqid43HHDx5fSPFFUt8c7aWb4b8zDAZj3mruKdSvYSsbX5VpL3pf8QyWdYbW767rY857E",
  "key39": "2nJqhqAnAx4mjNQBpiU1uCVRr1cTEpTdH1TVXJ5uCMYcygAkHwu5LMbiKSSgj28gqGpSHYWuo9pfA3VUzR9hLukj",
  "key40": "5nK9ojakmU8r5L4Bmiws1eA1K7BA1cTpuxrsvvCVrWzf8zGrr6YBMxpxFDqnwsHbn1Z3SZGzUhqmixuqkPwVH3zE",
  "key41": "7JK44jBPwATacXxezzvo9Pm7FRtxVodoob5ALKhJUuAHhtDkxdc2VF4s5TmLZPvfA9Qd2a3kBhDAi7U7REJxzya"
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
