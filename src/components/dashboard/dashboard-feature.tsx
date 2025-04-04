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
    "5s9Tu7wqCufCch3t2voroBRFESaRPCX4sjuzHEvTxbMMAB7WNZfQeFDh4soRR6WnPi528Jw5pUL49kdLz7sJDxCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHWAY2DM6s7FyHGrh3ZEsf76aSiWhDLP9ix1aqPjdKWnL5k1BFv2zD9AjcMphrJZvJ14Qo53GG6u22Ld6uZoF9s",
  "key1": "56v3uLXBvBDxfzik5tGGm6XwJWDQUU8LQHw2DX4VwfRyve1XUwktfCuRTosSBxaYpWVDYGNsvH3eW62H2aosBVnQ",
  "key2": "hoVNd22H1vQWS4tgk9UY2Zn6jREKwZimbjCPy86DSEM5M6koLSpKA46v2y3AuGeYHwmw7Gn4XMNpxzAB5PXhD7H",
  "key3": "5dhvNZkttQog3eTR7Jp7rhgqpvryBAZmbB5szaDa85nZq9VUpkFPYZdr3SKRzfSt3HB3hoyBW8R6c8FUvhWgD3fv",
  "key4": "65t7bakrwRQTWVJTgqRhmjHHxtrn7AvDKng1wcVtcbYwjzLyJAwbLHS5CKRPYo35ySKTVdRkGXA7B2L6dAL8MQyj",
  "key5": "51uFUfDY8Jvy6V86beX9MZbNaUfzq5QSsdReFfYqq4qaT6FYfLXLorkSkoFyp6kCSRxttuexhDihwFu89jmxgRhs",
  "key6": "4saPbTcrS2bxuD5ErPWhQmv1x5fYyx8QGzUBFrwkVSk39ZeMuJkHcWsJSyMmRhFZGXuBF3KZPdkTQeRqyYZzo9Zg",
  "key7": "3MisFwdUypZ5A6ytjLogXPHhz6xEpeMurpwqUEhfULvmotTQNDK5NnsJBpBANA341mG1PJudKrcRFkwvRHuCtQx6",
  "key8": "3p3N3vv3HFtThpS93Anbs9o2svjnLziSpUGcUodt3f3M41vin6cqu9r93hxSLW78hRvn2TYesxyUsZhxXRnkJ5HZ",
  "key9": "4vhbw8d4h6MmjpabLdJQ9F7Vhn7CvpNi2vN3QHMCDwxBrj2b9HxHSWvxUgUKSKfJSQaS8nMKt2oxnqHxJK2rhvV",
  "key10": "21omVXZGBXTCUo7YRYPzjZEf8efwvvGbjvKpPhQWkSdwXpSbTRyeYv6yhe2ehQH6ctmu4EC8zv7RDy92QxGDJshe",
  "key11": "56iqDww3zp5iEe34hnt3kF6UiQFTh38LGnVwAvqyu9Mu6Vq2EZzbjkQqfuA3iQZEwf94SSDfcT9uBCPB1mK7ytRR",
  "key12": "5kg41FCAo7jVtG2EVRMrXZiw2utrppLXbYZP5teEGFwDmeYD5oSdRp3qTLifHv5B3uppCnRQnY84NiNAcpE3BVki",
  "key13": "2r9f87A5jpRcoFGpCRhhdBZn6UzWkATwdhfGgH5YxMFgsXNCWCaiHHFwLjYCDHsoqju9gPhZddoNp3txNbHUo7Jk",
  "key14": "dtSU5xx8ap24w8LCF6kRASMwfuxoVDUqm6D9BjnsMozMsE5FJGSHi6uub12AT9LpJ9aABxgCyczhREkSRDTTSVJ",
  "key15": "3J892vzisnJW2PAtU3iuCpYzb4X3se8Kh81TzTBc2F1RwYALHKRcCBBVyjtVEpKcrNDNNR7xA3vkFPXKjxV9UcaX",
  "key16": "5c8WfXDEWxgNETXDy58TzuxAnqxXG4XS385tNRNHmhCJbGcGVZNChHNToqzWucvGCAPbzEJvqQH5SUH1Xw1zQ9NB",
  "key17": "4WEYcDCCkYjUAe6XDA87TCba12KaqReHRGy5Adn5fPJHF2hD2WqzjRsxTgFTBbvfZsnbcaXjGBJpB2rjvewCXdLA",
  "key18": "57q4vfb1BwRN5h19Y73MoBXxUiQmc6VtEJyHJZbVbxd86QprcypHytnPhBCrEKcPGv8QMe2tcLbQcXNFyKMUh2AW",
  "key19": "4ghhHgz3s3Tp7bzN4XJjGkQ8DX4dtb3oXT7rA7VnigveqTKNDjyCRferRNb4CuoBHoU7QbJx12fRQam7u8GjW7ih",
  "key20": "433ngdYbXSCMqi56MoQs3RnQB3hNUKBuAx5xPgVKajikZ4capo2aWu65qeinKXNbNDuR2D1o47rBJA3sArWfsAWY",
  "key21": "3GPHz3qLTxvDthu8cLRYuVTqZiVYBt23gmXVZGzcoKJFVAxJCtjLwE6TJpp95rknXCcD4FrhB18L2VPxycdRGySL",
  "key22": "L468ZMi8vcdXQ9i17bqwc3dNdJQ9qxFrmxrDdycwHUvHoSBY8PrJi6DdBGLqR4Sek5sjVfoLCNvPanWzGbtzgfN",
  "key23": "5yyAHkJLd3x9BgbdfVGo8RoMNAPv6Z1WdkYxVkNXiU8pQLoZ1D1buL9MY7SfjcKtRW3pDgDLV2y1rFLLYdZ1jBvz",
  "key24": "5sB2xnigqTvgwzqE47UjYwoaxPjFJWvxZrnjffoDaxfWrbQhKKBzCMbKwR3HV4uRDBDKV2v1SKnbseco2BuNVp3g",
  "key25": "23XhrihnjHQhJDgHkRkmTMtUqrGkipPiPdAQm79ZbHW1C6WCWbR8eJeqVzbHbaEhRzcVfrfEwtTGz2zMv8Cd3JXf",
  "key26": "wks5Vty2bsYw2eRA9JdqGBVkace4TzmFMfAJN5VctHYEVskCZV6e7KivvTcoBwv6qmJst6Um1LwS1TcKRqQcyPT",
  "key27": "5uGfKWa5Vp5grVJKEU8kQAZrMedHn714ivvPpBvWGt6gitPKXMCRrmCkJN1Na29jtCYyuEo7cmfA1PM31qPVG3yx",
  "key28": "EFLF67deWXTi5bQbGZP2QqREtM9CXqe4eGLgdXSRpQraGJASicQ7BiaHbgsQvK1GE5FSMJxQvkxnWYkjeX3WQcg",
  "key29": "3NhsABZsv2GakosQqKUFt2tyFiuZpFM4XPxrU5ctaL3DS7dsvFyUkG13QM2t62F9KJy5aTrf2g7vUHWE8v6KmXL1",
  "key30": "3zMdLURS2kCZXqTrE6q3sSNxrpBhnC8i2oTEaqNJM2hqMUgFbVZmMkFVpKTSfzqzSJ7oJnGo7YELcybQaJWJvWhH",
  "key31": "3iuHUM2qVp6CJfEEA9ZABvy7G4qwukXDC7VUTwoqqbtnJjQsuYZxs8tjxQ17Aavgzi7KeG893bj6TrLACuijPzhL",
  "key32": "ChrcNJRL9rdgjiBSdCCUFDirRAE6LVodf7v2bD3wQ1bcMtkxbfxqdhncLtL5RJDU6yN6sAdy1mHZWVwFVpAZxfD",
  "key33": "2r5HdziD174AhFQ5B2a5DqU1WK6qKgukvTZBPW4vGeKs5b5hP8PYnZ8RQnupzL5gLhe3rm2oqfnS2qjNZGP9x8Kq",
  "key34": "52xWU3zxrJANRKm12T3PHXrAywKwLMjQiXeWuR3vVQBFro14aJ8hrRKJAJ1rR9ap93uy6CX1ankdY8VhgcZG5FNp",
  "key35": "3WWUjZ6AmTQyyn6UZXnftDF7cvSgY9m7GqB62X3BbtY85PhxbuM93k3Dy5tPncqL3wx6q8E37LhFU2ueKftJqZta",
  "key36": "8f6L7kyBJTb724DaJhYHuKDXwXXLonzNrEGbzsUPYAiFkbRsxXi8rzkdhzUn9oQTBckn9pbZXQM8Cn9dB48A18P",
  "key37": "3NoyUo5ZNWDhSuv61mzKBRMWL8aX4x1LqnHYTFpo57vSzaZ83mSxBCYrRnjxsK11HPpjDxa3kYHnqyVFf7dLyT7p",
  "key38": "8j4XFudeZtWAbxNfzSfTVQj15tj6w42S66Xuj5yAiQifT7gC7QN5fn3HCNsPGThB7tufJvYRfMW4d1xTmb8d8Qk",
  "key39": "3Dbdc5Jhpybf584rMQ1tpw3mY5NMrsR8hkUsRji4iihhey8Aybs998cyMiVcVRNiv5SppptLNHmDNvkJxAr8i7St",
  "key40": "5h4emoAAtVExdy1FHZvRL2Ln762QMxLM1FcrEG25ZtGWE85KUuk5yivxiQ4iMUg6sZV4Z5zW8NaYP8kA3hjxAFP",
  "key41": "5UtKp9wzUN5sNER9jc1XN4YAaBZ7sPHFJyGC5YxJ7Sp76aaaF3jdLMeBBgcXSCm8SiqszzbkfNooaHiyFvGxyeaa",
  "key42": "3ub4FAji5uD4jby5Ut2WvwgSpDc13b3tjZXVCiPkjVPQ5tA427HjSDMjqfhYA3cwmVRu9451DAij1emzAmvBbyPh",
  "key43": "45yNVejT9w1FTaoazDsCKykEN8Y1BwZVW8TGgdZBHbaUxLFh5PQhLcXSge8esEqd9vgDMjdGvH53LeKgjmvykxrH",
  "key44": "2C4cBiZsng2ejw9vSY8YBTe85z5WMBc54dPpiPNMWQPPnj6AeZNpfonvApwrizezzErJ8GnG7BedCqnb4YmLSBEw",
  "key45": "5pM7G5seczWmuWUNAVAMYd9Qe5iP8Dp2gyaP55gGLMe858a8oaALQD4DpvAv8BUKJR7vLtFBdn8Kk6SnBtifW9q",
  "key46": "45jL3wwcG5WMgbFhLgeNfdwn1yJpPEEr7eP71CQoES5ELg4D4Bn1JZVLSAVcZ4Fc71xQhCCmxJv6NabR5zBTnbcQ",
  "key47": "4Fr6xbR4GVg2tZWpZHwbeSupMGqYzTs3nu5KZFYu3KUKgSTaSRWFtNvTLidzfa1xegdL3sCPmMpdxnRxjHVyt1uk",
  "key48": "5vcC8r81LwPTmAAtKURwm3gPSpie7XB57C5J9UFsqCCRsUokdyWM9jxbHR7Ncz3KuB4JG5KsMhCc3Dd26s3W18Wp",
  "key49": "3QrzTezysPQFpHZjKVrNh6LtpHS3VzssRNshXNA1rrPMqrP7jrVdnuEZnbGWmotLgsBca1rHibMKuyES979o8koZ"
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
