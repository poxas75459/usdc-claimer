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
    "3WJ7FPrTfBdnaFzkggegp8stdeoDVbZViQVir326eUnxeMHYQMGLAmm2h7uwwARSgpxp3T21Hf4WsVBukGf1bVgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38a5A363r3dPbGKNLrSS6joTTWHv1TiBPTX1SUWFKAuE7ga18EhZE5yknHAdA1GNjs9nQsnS1Xr6jKGsN58L8bBo",
  "key1": "4VZS7AZARZkkFzvGzPhYJvU789EFBqdSLacJmjEXTLxfaF17eLRuDyQ3VZiD54ijJa75kQ7D8rDm3NuWwr3YopNX",
  "key2": "31J3AHqC5UVVvmesAz4WGWQEqovtMiamTZgXR4yLsAQw7owdRFw4TUMDfcAt5KfuVYDBtC1daqwCJWG2RcVjoV3u",
  "key3": "5XuziGdAqSswZoXysv44MAzEMD4n3HDwns8zC54fPReCJmRYXGXt7gPMpcoBmS84mKXuU5BNLmJKqugyJBEkr2kA",
  "key4": "5qeR8A1SJGwXugR4gyS23EEfQpAWK8nLAbbHpN91rJNEPLYWMzPA1uJZHeCrMpgNXUikHiT4LqQs3apvLQfrdNbJ",
  "key5": "2ikQrUs8LUkedtc1EXQ2K13DumixbUdMjhBqdfvbC8zPsCAGuhrekUcvVE1A9Bi2ZzfZP5GpBuBR5tsY63rcseyJ",
  "key6": "4eDWHNGaLe9Kimew1zAbF1biv6rfArXeeptW1313KNbgpqnBg63e1TucVQhvwSiriwxHS3if4fSypMH3sdcM3bta",
  "key7": "4pULp1Z7cAfB7YwZBDCAEPST1L8GKhLUYhX2wimSF76GWwrU6UYDswfv8q3KaY38DnoaRENp1PuKPeSGgQrEuPT2",
  "key8": "5zSrBeMpA7xxdVQz1H5t5ta6QD1KQu6xjpynkuN1haEdzLg1b79wUgoEhxQhEy9N4RXWeMBvR9sjoQ8B7Bzi7xUb",
  "key9": "5A2s6FVftC2Jfr2rNYWDQyngH6CPBCCFiyViRtPNHFz6mSxcyzTz3gssnbteqB25KydMkyQHxyqoX4r6TUg4wfQD",
  "key10": "4HY8GfsCcjzqJqPRoZkTZQ8dyUgQFwpNXCZsZYMNG8wYrj12fuHuF8niWY8QqPW6eyzqZXfzYWaeLwxPAFsfKqDo",
  "key11": "2gjR4vChoaZ6HG9AwWkqQepGNopu3KZTgzQuCwvACDozubtdDoa94ei61zeVABzJLPPAjuanNsWkqKoCpmCjXGZA",
  "key12": "3h7dJq1MMtebWsRVPcYjvpXFRmegLdf2KEVePqhKtP9LK1DoBhHYYyEoKAwUm9GS2RydyfpTgt48LLbLKksb4Y9m",
  "key13": "52BRwsPfZ91zi6TRXbVkZ61GmcJiyEy2FRrkSRaTbMfkLsVNxNkXDZMpCMufdDJENyRDWAqNGVbcPXHc4WXG7Vsg",
  "key14": "5GzJhg2wYHipsXn8xkjuyNraor69BitTfRzRAbwvqn2oqqjjRDcLg6cTHJmsupEUPR17gstcv7bTjMnR7VgWESGy",
  "key15": "2vQq77m74VNNDWzNqAw8ScdiNTeG8ZWSpskz6m115qnXAqHoUVqVnYQXg6jFA6UH4cU6yc8tPdU5EE7CXgTXZqRn",
  "key16": "35ov4NfHBN8U5TXBssMvhGt6WCAfwDeRXpDLWcrNMVV6B2xBDfHRFbBPryQr96Myfdf2hNCixbq96rPApN9sjf5F",
  "key17": "3tE3nAi9Bra3cWgFdC6THhchWKrQXAWxBAyNN21EqSajpymSUyVXnBupXoNShngPzbrxEC82sUDZfasbE7zpUH49",
  "key18": "49nuK6KviZfSPw3ABUJGnoXJfQWKD7CgUUAeThg9hkZiMyrNHjTcBSkAvxEcg473WHxr7f1NYC254nxe4F3jpus1",
  "key19": "X7QaWVgyUUSQ4suynLYZaNtkU9Anr6aVw9JGVo4WnnmSxqfEGc9uZ1wpd87DGyCXzAj6k4r1yWjQJmCTDA3Nv8w",
  "key20": "2FKqitqyc8nteEfebZi9E6h7CuJ3tu9KGUeWMXAnwvHkRUfQyndBcpgE3F3NXLHXWK4sEY5HYEgypQyTNVgacLgv",
  "key21": "5jEPoJdbteGtm7kuq4JuE36i5B65hLNWpUeCe6jLdh82cjdWWANcEJuZD4eTNA2FPKdEcWsrmWvELPRaEAXDqEqY",
  "key22": "2ef4jhAEDxtzv5tMRTty9Vrj3kYAN3rBRZqWBNAyW97BKbB9gqa4oUYZq67hy4ECQ1DGhh2YU8y9pGD7Zkd8vPGU",
  "key23": "c1fUYzoFh8CCLSQdKGjACuiKEJfwvr3dJVbDYpFKrKc93kTNHuh3NfMH71ZMWwsVK3BgSbHqAYZKS49dVzk2ndR",
  "key24": "4oBqsKHse5ZzrPQQVBdb29HotfccvNkvN2xSECRTpMpvK553FxmURWTsYesSzu3ux5t5iChabf5mTjskfYwKRMNR",
  "key25": "2Tgvkvm4JCbC7XA5etmNTwsRaMmfcTXjuambWmNoHKe8YkXZ2qEQP5mh49KHHK9WMxbAiemNsGXJ3GYQmQpK39hA",
  "key26": "5NWaPDZYFQMdkZKfjW3ZMQq4nsRcxMfSxATf7Tif1ijiDnHaPDhTNmD9JFyEdvqoRTTVGKq4Berq2esLdXew3Mky",
  "key27": "3V8wes5ANyiQDvDw5D3nVBoPpLM84RSvFW7u8gyz6meUtLc5QnxTBUsTEk2eYf5PMR6QUmMHSubPuGp2pEY6GYpo",
  "key28": "8ov3NvMwJLySEetDSXpkJYaafi5jhuiWUsGd59NCDBhQWBvg2mBdruNVv1sRVkMBzMBSRf8JPRpKEUjBzSNaeb4",
  "key29": "wTU9zCqanBEN3MURLqcia4tQe7Mv17MWzw1gjf4GZdF8pq9EAmjGqYk2LSAT1AyLHh1WqVC5aMHK2xPG4oiaAzT",
  "key30": "4o5LR1iuwobhqTdySX5nTe1VVXmuTbFaQX9J1DsRNi3M4SSNkwtVZW27py3LrvECJ1QaycSZpVmnr9YVSLzxsznY",
  "key31": "5chtk3D8wua37jVa8RrocFpwBymvJMm26wsibanafuK6SFvK3TuvyztoDFCtTf6JAkLtXoyfZdC6F85nu2z8qmrS",
  "key32": "5papU45d4FVc1vUdQoz5dbDPra188H9ZVeovXJVo23nrHjjsNAyHf7H8MpQUzR4EAzKRjo2maNTiA75WvpEmSM9e",
  "key33": "4nrcpUXcvdcNrvRkZrSLMsr3Pr2mHxGCRVEwyAPScon5dT6f5bcxNchGc1bRRKDJjCSWyopfdzEpfvvCuQeq1bJR",
  "key34": "3Mekt332zhGjaqtA577XMWzxz3aTRX3FP256fbJNxp6BREaK5hz2Sg1o8ieMqw6ETfqhrZrYMwsc5w31NpGT4PZS",
  "key35": "4esQWv5vsxfrMmwYFcjvio9q6agoVr3UEfAfGnCmGAcGBKkAjTJ2WPpcZhcVWhZDNPeq9HQv52wQT1cfhSPm4aaC",
  "key36": "24HDhCEsZjDUVHDE6mFrbANHKKBVPDFGYkvkDzDjzcnnZsnZMdexwzK49jaje3CD1TJJ1L7935aBiVYYzRSEC3W9",
  "key37": "4acxh8YQa5nDsSvJG6NttJf4LFTS8Sb8qvxNDvr77mM8rPnsb9KxKh4g95WtFSFKage5CNZx5zjKPWeJ4wHohsaT",
  "key38": "NHgDnGiGakTnBDJ8UzTvSvgY6P6YCHpHybY3soBdXrHyvfj7WqGP1Y5fhB9G8sLjJDvHDuS9ji2VkR7sY3JeJta",
  "key39": "3N7Khqi3CNrDkso7DpK7YCXwcYLec5L5otzy6oU8y7MZ7WQ6ommS1mmhDqy2JCM5qpEFHk3ZqHYhNUk4oYNaXMfg",
  "key40": "5ng6abRnNbj7ppZuqmb6ni3BtpUVhBaAYzgUv5KEEc1w5jk3mJ1RB1UNiArJ8QXqWvbRoBCMc3WFgViXM2hKQf2c",
  "key41": "4igJai5zp7erf5vEbtrk7tsLRzeAk4MxLqnRdhuQd4LndiyLNSqedxNegnp7FgeQJEhNsoEmJ8scXAqUPXnqav9J",
  "key42": "5av2v9K7XzccyG6oLQRPt6JZXd9LMWGJ3vVjTBBq4qqJwbe5umQxPNqqQtmz1FfDkhEWotf19R7goqjRT7teL1ts",
  "key43": "2ivf2N6UYa4pzMTNpe51FDXoC3TbW5SNtqXXSJ3Qh7bUAxqxzZsfTVJA54MP69bwua6DtMdqnTkKpShiRELFMqHL",
  "key44": "4D3tciYhTqdeW4ePCXBuVNQ6HjkQU1AjDLcajyeGJi4oRXYhBmomPFRdtqcPYCqxF19BGAB8aoAmPKUVDARQvReQ",
  "key45": "3SSYycFwKjT6mGffnWUi8Qu5E7KCQSWsad7kZhX9zr874tTPVJjCKJBtDH4qedCjumCYFJn2baoCLWwQXWKseqPn",
  "key46": "2mW9Vn23KbxfQtvY7Tui5EiZqcGEcDHKLGoB5BEb4A2365Yz5bS6XQvGjHPeiztaURhPvWd2hNxyGY1n1V1Q1LS5",
  "key47": "5WRRdnZXVcjw2xSgR7UDyUniPEuriUMuY246MmvgaAkH4AmbKyhDLNHoU6NfG5M4mxUhJAjhM8WamTScUAwP8pJZ",
  "key48": "mD23JyqchoLDeSn8fGX456RvzPMJBWUebtuG9CPcN8NKstJLxtyQbVVAvKqhhLJ5RZ3Vkq3FghXYyt6XSHPTbpf",
  "key49": "2HTkKV3CeKHG1voMQ4iRAFhF9VQt6yvWL9rrQYVrZsbisot6sQtLjkEF99e6PFYzAsGzjy9dKz3Giiynp2gmYxR9"
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
