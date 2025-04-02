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
    "3sTC5zDtVtwKujpukSdwqQPL6xUANZB151WBUpFJa216RPcQonrLX7t6kyK3bmmGs9KjvwJFzoCdfJMH6Bz4dSEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVHScaCQrvNRioELv3BvpRp7dv1TruQWjvSe1CjmFZA3YdANuRv8rZ752CbNounPo5xcsRuNtiFkasjXDvS5bRF",
  "key1": "2h6mayw4h6uQ8wkq4EyLJ7Uuib9xHntRUE9idaNXrdUycraY3BHsisjDtarE1A5xW2WfawQuuuzKpHsRsTmAs9Jv",
  "key2": "4YUBV36CxWMQaDSCdYVN158TCi2hc7Kh6mT37apmMMkr8Qk5UYiYoRf8XC6gi8bGBKm7vPszdsjnzrxJ7Ai62ddz",
  "key3": "3h3FBTv48xHncqaRznshpSJuz5CvMdp6NQf53ZgN7g6VPgxgz1mRLrQMmYrMkghACWTaxTHnf6P78KW5YHMnYLGy",
  "key4": "4EXZ77Ko4spQPquMcf6t3sJhazXncBmsmWnei9K2ZDN63QxHhVE46U6Hm9UXyjmYyiqvERr14jnLLuasGH3rcf8u",
  "key5": "26tTAtdUvqCfNdjTtNX78DkaDgPF9Zf1qW63N98QdTtwXrcwPnTtoPKuk4iJpKXriRxhraJnE8o1JDJ5EDRJSAcN",
  "key6": "2yM1q8GKHdDMFz4PnP9d8RdFYdyVSxxHbAKY2eRPWuRUksZPG2jtNLVrvWtd4Rb6XX4s4HDkeYiJj15Pdz2BsRZJ",
  "key7": "4bLMt3M5qVRkVa8bbyfQLmMeKJ7EFWtFvqe5CCp8ER6rw9Mf9FKmzWzYCPDnEynEtwysPV5UHsccd2ixyUejaTwX",
  "key8": "4EQ7ojdjRXG4bQHd8oSnYq5oGUu8bZdX9PAm7BHdq2SrFyZfg6YscfPxb6tuE4CQvR8JUfCKMrNT4pCvuyxvYrKy",
  "key9": "57g4Ez9uXukfYhSBbResAnzM4yxVLHu91TUJxf6Rf9frURSJFesoQMoeQkZiB7jrz9fUc9DvKLCx2fgdz8JPBPYN",
  "key10": "62PJanYBeJr9CEYVJekKECGHeTLk4yjuvJeMcThngtrdcqfMHLE4xvkgjYi7MqkGCFvyHPF8nN8fBbDiGJWf54t8",
  "key11": "4zaxCLwH4DCtdmkXwxVm9ZUdEMyL4e725rpbxbooXubMyF34ersdf32rztovqTPWG3HfKDUavL8ybB2sGFScqnmx",
  "key12": "3shMkNwpoxfuT2DUHyCBAPMowtBxZPv3cZvEs9zcGQrxuhVm1xwxHCMg1jhawWSUocpJHCaQa45h9jfdvB55gdiG",
  "key13": "5bftzQUkFsfGD8zrUnWwbwnC99UwQHqTrbKP6go4xiQ9vubEtzAEdEfLUkYFr3549ySzn9gd8hb2g2e1QK5uL6rk",
  "key14": "2NExjWQowofgi45WRWRo94suTrdLPa7ex6en1u69E9jooB4EqMgfp66YUoZhuW6vykz53XkXxEYDdkwDH4P8pr9W",
  "key15": "4gfBqQvQww5wWewqTxytiGdvjHrKCL3xDt3ZtVh87WpGWWJwW4aLAsJNK8JFk5Wd4W574fd4VpTxkpmzr7mz6obA",
  "key16": "4qe77i8RSYEFah8eXPkDs5wW34VXTE5NKKj8sLycxk3ZpqH5FJWsdt6rqcDAey2o52xRbYCqkUqYz1bBNPFF5TBW",
  "key17": "3PhSMJM4BSpXVqKmfrr6p83bLG9LuHy1jirHHiKgMUsrzE3XviwmedMUB5j7kKuDcHymQhhAnsYeRZPrEBBnZYT3",
  "key18": "5XSJHXAvAGgQvKYYEiNNdb2uEvYLBCY6TYrGRTCvtekzffwdPjJZhs3U9k5hr31fGqs1vtiYqjoJojLmLxZyn5v6",
  "key19": "3qEeiBJMsbRSkUVufs1Max9t1k4vQ7bqPqnUdYSDA9YP3cbfU3h2MnESKKZhMEQ2iefAcWmmB1yosrgAja1YY1tg",
  "key20": "39ECMuGbuPdpNRVHwTRpUi2Pw4xsGp5uuBqZ9kSwqzqZFU9jgzv8rsXrsY5J2eKowLNGkB7umDbpxjvyakmef7Ju",
  "key21": "3fQjMZWVgthHAXxhaD6b4XPedvcUVAUu7nLPVuhcuNTUPCZQxFt2t6x2fC2BDwjBPmxE98GmiY83kPgBGHqDZMDa",
  "key22": "4xhbT2aNgM7w72RwvRqQdVv5fLSM7RYhfQh7gJ88WgB1sZqKnYi7fwoTu32HtRhNYjsPkZnYnXf74zSZqp31iGL1",
  "key23": "GW2fhQbFn2PTWGP5ieryKYFjvvaLVgsspHWvhYajVU1E1eAbixZSqgEYb8FF1DoMDNDEGXTqbiTWmi2KEbYzQRd",
  "key24": "h8ikShKS6zSc8go2rNspcyw1an4v44UAA9YqZ6cLndh7RcBq1hFDvbDBqLwbv5XMgDr1CNq34WWPjqvDzfrmJny",
  "key25": "5pxaSK9m4XUG7vm2UVH9VoA9vU2hfLqgQT578xjV7gWpVgA1pDsJYMSb5nnjyVyXJJJbhxdy6sUN36ff4tWUE9CS",
  "key26": "2bpjAhV36QT6Kma2TkvRcsc9u9bKr4s1LuTn4hUAyLmf1H8tSYRyxxN13dYELgrFD1Hd7juJaTzxMmsdg2ZQzmLP",
  "key27": "43kfghrrdYLBckHSrfwxYKxb9TLe8C6eMjEUCxtYfZR4gAJco2X4f24V6XuSbttyB3dAqSURgKcz3p2XeDYUPD8P",
  "key28": "3NrW9WuGYPahspKkofiiYPX7PPxcPa5sokU9FA9iudu58hkKv4EbnHJWFmPGKP3MGwFzeYXMY3DvSTMdstfyPkXB",
  "key29": "5VygFGtUztQwWC5oNa1ABqEhG43hc1LZ8iD7krUckHWQFnXPQ64iaz4Xua9ZMWzcXB1nfmwwS2JAMGRXHkGuF5pP",
  "key30": "hargmFgQMbo9LcAasM7YEQaQVHjjrxRrN8Q9BDLYZnspvgaCBM96xekJWqfChxkeZpb5wdWEYuYosLAKp6g9Y84",
  "key31": "5Zud1kcetTX1qRCXhLLSswit7tnLB3CA4pdwB4qFzWuCWqgbhCbmZ54kqwCA83itpccs4NQWZrjRBPYd111jvKap",
  "key32": "xHJd444gVLaiKSV8evH4qHkZrf6Va3vhFtPV9Uc3mn7MFiuru5hokKRL95Zbrm4AwDCqgCyagqusAReQa43UArS",
  "key33": "2zHUTGgepb6598D9yZgSWyv2LMxgieTMd7NhQjfBUXKG41u7zCE4Wm4mBjnMa25azDb9c6B8DsM2DiGN1vwWfik9",
  "key34": "5MbZReJSVPjUz4xsWfhfbbHJYLUANcjM8bWdKp7tzshxN7K5QJRTo2NqynuCrEAgXWtdph8r6LTbsVBiV9RxMfSv",
  "key35": "2uvTVPQDHHoMqQkRUwJiGu6Ns7utPygfgD2QJKPHs3kV1kCtvm6pGYChouky9M6nFuhDAneD3Cro1HcM5PViCFV7",
  "key36": "2vUxaAaBrTdoBWpAPasUr3iCr5XadxZsqSBamdxZJWqJNtWdRZqoZz36rX8iVBMMQEc1g3PmJwTkzMViktfZeN3a",
  "key37": "2xENVY62Q1ebDe6sEf9uGKPSpXS18fkPsqipCF7z3we3b5Qdu1t2XPARMW4eNNvhpx2xiDjj3kKFTTW6CMzAkC3n",
  "key38": "u64UQHrmUHLnj7GcsygDYv2WW4knekuEzfNhpcRVkAQXLNaRde19RsahNSLC8i2C1AqzskN3YnxECicbV4aBi6C",
  "key39": "5aGs31K8z3ubvf38rZs9Ux4d6YgaxsZvMj1WSc3X54pa6cufSZNQGkzuVw9udFLcTmyL238PEt3vjHvjJCfDUHcL",
  "key40": "3j88jiwkPdbatCGUmwB4Uwf9Wm7v1mLRGcP8Z7cxNFso8FtNxam9fJ6yWoiThDUuWEbMfTBQ5vrPC6zCXH5tWevg",
  "key41": "5T6UsyeNFgsrYrq2CPvaUJuZKarGUjPPVsZp2c8Vj4h8g321Cgdvx8dHNN5DK4UhrthzgS4u2ZAyEbav57z332nK",
  "key42": "5H8rpix6xLUQZVWtg2hrwt6tTPauJU1XEAroiJAucMinj5mSeGBXyRrUru5QqA9jMqVgqEJU7v6n5VeUWyrpLtk2",
  "key43": "KCkWVbuMTCCAMjmWe4WEAMPCEs7wxTNr9aoCi4KDuzpmsWZhwQXxwPMpmjtTGZS5qiSfTXeEyVWxgWWE7Qd6e9r",
  "key44": "3UUcDFNjeDZBMpKFKRUW2yHf6DgAtQKxdrbuyL97oRrj6QtCsE9C3AyQJLEDKRA8LyT36QD8PKXsfRpHFq6tFp7n",
  "key45": "5nb4qBjMnkn98aX3cLuWS7KmsGwb86NN4MDU5ZhruMQLD4xppon6jfdwMy6FGHCwwtC17HWHPW7npKBfHJTz5ZQv"
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
