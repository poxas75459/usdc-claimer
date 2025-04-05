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
    "cgbDJ7r2svJRZ73a38D6B3NoArFQN7syQafqF7emQMyKtEXkD8qQVnBUS6qY62Fmrqn4CqNJ6zZiZUcS2voTe5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTBpA6pUynQw2ARDFDxRa6trovPWE2tpj2jDTN6FT8jDdk2pePQLnd4YMAkrzRZFdu7YYiuCkcpYWrNkLWxmKsR",
  "key1": "4hiBvuvr4Qn9PapWgxt4Krcpbhjijfk8KNYRfQ5twez7NgaArEYjXG1Nghf5zxywhr6DNXL1fqXz3VDWC1pci4bN",
  "key2": "5sPxBNVZ6JxtUnoKhzyqA4hbjEP9QEXkBv6cLvuHdEoMtAkCi8dSVym5FtY5yutx9QiYxVQsVx46z92TtfNpzdcB",
  "key3": "3XUiaj2DATdiQPyvKg3jCytA1Ksf2CtFzD3m873wSXYxXQk67Q23SWjsjTDPYk6d4YShx3nF1vJkb1yEF44DR4cW",
  "key4": "4M1AJ6rfMgT3zqHxqCbFk2naCYk6qTBsgTvbhjRLugbcnASEJsu4VDche9UxrouecWGUDWNom1y2nnVMQj3DqigF",
  "key5": "5xgay5dYQc5J5wMJHz4BJzchW2yJUoZmib9PrYkjWAbMxfkViWAqWMGJSjRQKFhnPQAvZLfRr3FksRVDtp2vLVB6",
  "key6": "3otf9k9XipipMCktexZ9ey65CTZf7uhyWY7tfdV7i9ZcRyzZB5rA9FBYPznapmooyfgaQ3CTrZoYespQmMjxps9r",
  "key7": "5eWneDrwzTUdZZgruLgreHiwESR1xonZ3NB1KJmhjavHgckbqxjiiPh13yyvBzabbUVhXw6fCn8B1c5aW18LkXV4",
  "key8": "5kp7KdKAjNxQ3EZceWuftK5mQzLhLPTexAeYnPkvc5rwb1dHYQKcXLhpLT88DTjS4SCM6q2oZWJ5SNnbZR6nAyEx",
  "key9": "5xF9MmsyRyD3puYufAA3kzupPL6qD8BqNUSGFBub3BmNRiz9u78MCwen2DeJocBWpzdfvWSLYWd2Z495Co6i1Hba",
  "key10": "3JQHb47bVPJX1SKAbw4VXVj9gHejw3trZCsGzUDP9tXhKZVPBfNKmZjqWXG6mvwb98cnHvHBvuTsa15R48dQnA3m",
  "key11": "7PsYwccF7FqGf9UCsibJUw1BgEw4JFD42AjEto6EkSTmsDNFRun4BwTcBfzVPnYcwPRuf5HbMYP3nSykf7fLiFd",
  "key12": "eYf9uoQn4xa9PN7wr7L4n8ZnKYLriXMmi3JcpKgBf8BU5H3CzVwcdQ2RpBiUpWRoLn9oW5uLGqUg3pKZReScRED",
  "key13": "4mUudpC4tZe1q3Bp4pNM79qCzdZg44ifDwYV5hD2WGJqqd9CyGdz5esV6Qa6Cgq3koP7xfgeKJk3fFVDp8nzw3YC",
  "key14": "3v9BYXSjKcGCK9tf2YWJ4j3oq4fiVxZt9FY1L8TNeUaK78oqta67osJcC3PfDDfW1FrTfmDUSoQin1Kvr2SuLRsR",
  "key15": "6MGvtbsoZEyGEzPT3Zath5Hta2ii5DaUb25vPyBnLFyg8Kw8qpoShtLZ3Zi1cLzQNP81u2uFqeaNB8mjYXBdVZL",
  "key16": "UAcKuVowGKWFzboN9D7zPLL57V8aJQUFWLywj8ZZrqSDqfFMHS2XmV9hf7Pgy2NWGf8SLDSx4Q77o4LFLTtq5R4",
  "key17": "iMx5ogETeeSwu9NgCZXcv3CdSro95Juto1FhZyYtwGC2b3stozqFMnN1FctwQ47rmBHVQBojqhfb53okosPivbn",
  "key18": "5xe7VzXueaMPEKEdNVP8m6Eq6yL1Ced38ZGXCRwJf77zLdVCVj5qqsCeLTCD1pqwx2EJWQpzEeAt1pEZ9Af4nFPr",
  "key19": "2wkVKLA3P6hHqaUssfP57LmavZaHNMT4a4xsjdSrdfyxTWfvhxUT9jcAraEkaia1pkn1vGk9CWbT2kYPePnSkXS2",
  "key20": "3J4jvNtLMd1WNUzZf6imECHKCHjAzz9EDpVnXoBbsbwSpGL64V7TixyCxxP8F6M9QfWpniiop2xxKF3VH5Xiu6Y9",
  "key21": "5JshsqR2gDMADy4YyjJ26gmK8MyzdPy5sAdNzvKZ8N5rB6FUqB4xB5rJvEkVPsLqK9qW1Qr2qYWNPxtvnQuH4SkM",
  "key22": "3pq4EieqmpL4NLyvEZ7TwpbwTBJJ1fzPdMPAVynB6XGrfGtXvnk6jYt1Cs2WQabWcx1YvJzUSJbt661iowKqmpRe",
  "key23": "2k8t1Vcu3YNZc6fC3fKrPdoyTuaMKuob9juW8wgyvuRrJdtNBu5RtYogqwzujug1vXsZRDGsGdFEFhWukCckXmHV",
  "key24": "52cKwNkd7z7A7LPpqMqvSZV7iQaDbrTtV2Can8MpVc7gVA9EKBrrpDAayABFS5v8JiirSs8fw3LwhN9nSdD1kzYz",
  "key25": "22iwTGRzEvwk9bwdfeumCb3iMwFD67sjnXW4fdFhSKaTnSgbvTtLx4daQeQuVE5eATHm9449ySUigSkLkCD8KzB6",
  "key26": "VDMvX6Fzkqji43F99SVU8KPTjAeVsPGiBiqMD11SZg1k3x6CgkWu2uDzcSdoghM2RtP1CdQPQxxMLrB3RnqbM8M",
  "key27": "5oq478iu2N6LojcfYAo8PDnCfS2Bi3Ew7y6it6Qx191MbeDaV4vEvqsY5ieqghCbBUo7Ecr54P4nmumDdxhEPRtr",
  "key28": "2A3suRg9Wrfa87xocCW2GBZZE8wA5GmgDcAD4BVGMYEeJ63QoEhHpXsn3HSr97Dutvw67Ff6CDYbZnAHg4BkdHbo",
  "key29": "3vVVL4RfjseMK1BkDjXvzUJJDGnEgREVuWQFpaE2nEdFEfa1qSXhm8ynF47Qcm6Tcx2ojDTy8zizxRP9ZLKvfS8M",
  "key30": "2oV82kMaYXgyG3wBQj9fTgNM5365BjREADu3wKCioDbodp5W3RdvbNvPKcyMSwFLY4HhfdavuubwiNT7f8g27FQC",
  "key31": "H4z5t5oA32b7mvkbzwTvujZ1uLAZ4BU95VdBMHHtrd5hn94nepJaoHwXSPyj9guzg6s2T2jHZH1ZnS73gzZmmRy",
  "key32": "4wtpZG2rV3HTgRJU1mvvQbtssoHJiFbQVtJW2NAwsuN1oFYKJrJUhyj3a2uez4NPQ9w4Go53PmS7t6syozx1WB4V",
  "key33": "3Z1p4mxK6SpZQV7S2XnryjVZxMKHcWk9tRRsvGmjBdPdTCX366gXjaz7y2AyevKmtLxRtjjGUWuXBWkVYFJagaaa",
  "key34": "2ksS2CcFccU2YNuCMTi9j45aVFm82HPgXPZFAk5R9d5QQ1qVeZ6giymdjXWCiwo9dJsXwZ6du1EqZS95ETDRv1Mx",
  "key35": "4DVRVT9vsKf8tK8fQDy6fKVQ4tJdmyUVR4vD9EQza6CuG8fRW7TFbfBGMmqGvgKhAwhTDuQiXXarGfy3nwkMUJnH",
  "key36": "2qoaz2mTeGzHmBZjPQT8KbY4DvARL4GR2kdSC5UgKrwwRAGkPfk8by9PDAsGtEuoXpESuzUYGRRbZwBedL8KPAvv",
  "key37": "3qaPh6pfT1Mh3VuCgYCWSub9SNizF4g7CbW1gc6Wsi37rEQrGEBJGXHSgQv7LxrFP2cBYrTxugZ2grqU9s6pNtJp"
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
