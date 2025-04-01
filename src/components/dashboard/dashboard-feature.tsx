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
    "3BYyRmGVumcYNvzv8Q8gtsBtoqjPz9TDKsjRLoPCWEanEGRz3nkEJq9TmSRmjnTtc8CKFyFtFWCBgPYKWirXtwia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFpdAugUdV6SnDnzpCZH5SjRkapdcDXrjtsZmabmxv5Ua9bzn9mfvqajwhkv98YGBHdn5qh6aYqRpECG7BpfJQr",
  "key1": "2s29sZRtXw5iVrPrurJbakJoFqbgzE8yA69RXqURS7DQzkmwYexxGETt2Aq6B3a8gmDZeJRJJyvTdpZqmiWLsY3t",
  "key2": "6FnB92m4783wkJTBU8xsThfSRzf7Wa2koYN44br6kQn3gDYBmu8pfSN1hTtVLDDR1MBTjjh9Y2j5ZzRFF1nFyGR",
  "key3": "23embxDPPvbyM2z6vTUfrcpXMkNmdN1CrYh6iPZGo7uDeFkgiKGJXTFVzXc98jHfF8dCWkih2Moqqui7gGJ4Aqu1",
  "key4": "2jwmpLQ2x4jCZrWQ7fviyJKGGuT3k7DtJQriNphizrqyakJnHEZe5eUj6YP26LLjBPpEkiytch4fBvGVZTweLqM3",
  "key5": "2e6ggFLwB3URfdJzJs2nCqhuvsA5YvbphHDUJaVCiyMP36VMrkwKvkrk8C1nKJCQven5acWCCYfBywsAd7AHqrr7",
  "key6": "4wDGScorbpJrtFFTWDqsoCpcURjD59VAfFxonfr7AZEuVFF2hEyFwQ1C2X1epJKWbS4qP5SQraLK5qzTMEiEWNLy",
  "key7": "2h53brRwCfmEzoKuDsedhWRqAaeKyLRWePmwtUHCxthmF31nbBvtJe2s2ptAKemsYzwjcz1Qg1yqhwQfR9qkEBUM",
  "key8": "4S8r6ERs4xzK3Sz85PUSYvth8HUUxSUQj628zYKDKNzpdGnY3zR5EHPbxU4mhqXvzVoMTDv69jHRCc3PQaGA9RxD",
  "key9": "4biyAKM4MPxotkafkwCDdcvEkUP8Fsu48yGRMKofNhkLyNvF1WRq7bpJ4fpDnE6yscJAZ4rVJfuVRDWtEhuZktr9",
  "key10": "35XqTyi6NzKHZDDSkNrvb5kfPYBZyZEKEjaN28wdczM8KkNQvK3NPXXiaBtvtfTggpCU1y1d4ZELBbRPXCTs8WJV",
  "key11": "3McHvM8h6e1DYdxSkHk3PAiENWiABDVXrAGRHRb9NE8TEb6BRRz8ZULoMBzKoqj1HRAcaxoLYvpKi5ynJLqhvHMh",
  "key12": "3KAmntGQe7S21YUM5jTVYDK4YhKKtd5TkfkBZ5ZHQqBS6rDD1WFBw6QA8aQUhav59Z3E954oKLQhZ1AEH4disbgW",
  "key13": "2Wd7gt5n8Gm6ZNKiqppGZToks2xJ44ohw7izmKVexF2NUWA6WvKLHAStm4JDsF6qgrsfv5Q2pZUZgyN6ufwoCrPB",
  "key14": "uTM8xN3SmTsEV6wfZ5xGVe3SE2kEn1dv3dSzQ7E9aVjqZGhqRaEEZhj5PbHn7e9SKmaB3R5NXSb1zXFgD4iwZ2f",
  "key15": "5b9Q2vQ1Xofm8GDo3NyZ9bwaEtpzz4fHdiVcgQTpG1FDNi5ySvMsrs1ESfDLnkQe7nXAWVByrVSc9M65vSuKunhQ",
  "key16": "2oTKmmsFAnNsuZ9RdtyeJuC7BMhuoqe5Nde5uqs59Q7izPGsMYRFQJJ3vzit6AzAYg79SRSVz4K6yaZxdMzEuvDw",
  "key17": "2cUMeFzrAuhkdqubfRxDjD5YZKF6k54QTyfxKZ4pPXyfZdGm1zVpRmcLEsBm9EimdedU6X6tuUwf3ejvygyZQTxW",
  "key18": "3SJZUVnLbJJtNFY9CYWMaPM6N3oGvCUW2QggGaGKUANfCxfKCegvc9kKgaMh4hH2MfA2PgVioUmae5ajAr7QVHen",
  "key19": "3hpfg4SBv4zLCo3vnGVr2Kfgu7fE5wTkNocjbDFLqGrVtf63eV5gU4pPKcALxsbWzaN4Pmc6vXj1dSdkJqQzbksr",
  "key20": "2ozMrghFpCyNRZjx7nVMWFk6ogLKQ8GTRwahGqvAwQmkoURgc9ajX3wMkuPY6mpaaLTHwuGoyCf9a9r3DVJTGjxW",
  "key21": "3LwQHJCTt6nxNAJG8vYGaQyM7RiXxttmvvCRGgJst7xQqKDocuM4nvCoshypUAGHWNJdC65ZRFjDmqpyZohupgpS",
  "key22": "22nD7KkPr4ooDpSC3izSELsE5V5a3EHvVVRQ1JPfSbrFY52oh3DZ3b3pZXa93CzK4HDNyn3tXisGyp7LgEL6yvbT",
  "key23": "5G85r52kEmmHFu9MWvgqEPs4RNdCcCigCQ9kRDvAfcMXKQrJiiUAcZaGgFWf8qbsNQnJgZHdSuz98TRx9nEXjs1Q",
  "key24": "3XrhinN19LRxaPAxhn5eAwakLU9woGhQxH9X6cKD74ZnBU8ebdzbvZ2nKbeRji5wV5GaZcVcxE3JV8g8k5gKmqvg",
  "key25": "2HrDkAKZDfnFxzwykW2bUMKCimh2LSE3wLbQTcs4UijpmpcvKAksMz25RieYaRaTcxpycHEdCNHw6fUKSJebjmSi",
  "key26": "PfvRuMZac39m6m5hKQGP2y5EMF1t73oY8pNp31EoojdgDf5zcqnmVZtfnw1m2Nrjo5J8cawbbray1JqUsZjrTBW",
  "key27": "2kvdALCBEUwkWvGGvEBAQm7tPQtiZh22nKDKUVfm7xUeuJV6S2qVm5xZsY15UuQHJyNg7YDb4YpdhZkWSrDyRj3E",
  "key28": "2oLUfnC1Ugdkb6gV4HFxTwFWJT4wvi8xF1XPyV4YBHMfwpfqK35ZfWigrrDJr5dCv5VPjNFdzJ8M1vAqAq2n6jRR",
  "key29": "2geYgfXUgkMBHuRBWsUeuUFzAXyxhNe6uDDo7J7tudJncSccbHYQskntQSyZLGwMqQveDQc41ytPa5V9NNAAwmMV",
  "key30": "4LS91wu8SbT75FgkeDALnV73yHRKmUKhM1eBA33Diw8HpLZBd1d1BxXxUCi2as36MHHFh8v4uEYvNgQufaRJHpqh",
  "key31": "3M8m87AvutQYMR9xNhTb4ZBi91EYLqSTtyLxiBG8AxkhMUCiT4T6yZfeMdeWiBqTSep2h1n74NSqsLkP9Wmv2Ns4",
  "key32": "5SWZEvwvYcxL1pgvyHaKsAtiBrVNdNijESCx8Ho1qVd5LQDGBCSTAWwqWwe7x1xeE4VWTv881zc8PaULoYszebf8",
  "key33": "4WxTHqhZqoV5xej7YMf3XWPwL3dnMjY4yD8jjkmbYXpb5BRGxL7vAmLxtWdZim8r3gBC4QU1kpQZK7JBnk7pcMCy",
  "key34": "4JXYZ5VJLVTjguWBw9kgQA3V3gn1sA5R6s6yMZcKMFGTZcXrMWJVVxN72UNHfkDgjXY9V1cx5foChmjsNp9WNXXK",
  "key35": "qvmTXxebcEoQvwf6e6Srjdv9B3usSYa8hMf2UgbFXfNyfVyd26SrCxTknxmTj6icHKdKRGFUJ9FZTiVwimKsULT",
  "key36": "3YqpQTGExu2N7ABTSyDFxhJkVDFQZyNndXLMMYkzpAcpZnQfC1nBYex6mCfLYwtQRyZMMkSwxrncfnSV6esQ1NXe",
  "key37": "FT6kJTqAQ6bQkbX2CLmDswcLZgLb9PfukpsMXgY8vuoD148xyi9KpupaCoatQzNozwjmiKJP157JVGvVP1mXWEy",
  "key38": "4qjPmLG8WdXGpBDjEFUN7KWGhWd87EYuU5fXPMHtujBoPgoEo8aoNBSai5aRMLr9q3WgD24n61PhivU9HBD2Tv5g",
  "key39": "CSPEK5ES4tFhEL9vmKraEgdcJtSr3CSYJejmDq5oDVs1pCw2rgq9zJ7V26xzuMaa4MnF1LMmVZLmstGL5rNBziS",
  "key40": "QmcczqkUUjnzMrKACqm3UmcEGdsApmKj2ZEprkTvNVXtmoMskqqKF4GQ6MDkvKL6SDdnBMnNfthpTC63zHiJ1vt",
  "key41": "5CcVCUGfjXZ855NY5Dd2bDLuzT8CpTTexQ764cQrNDu2fW2mxjkHbDezE4GDkmgTk6Bokh7z5gLzhCgoDrX9wAYj",
  "key42": "4uTAAfXqzBXc6yCj1yoq8XUrXiPppjsJD6Z86TSgFP1HM6uNHdbBUXgMmJJTmiJUBiYPjagZFCHFVZyk52nVaLzs",
  "key43": "3GBvegwdhe5V74SbJA49j9SXq6RR8fiztVqQtN8LqpEv7uPRitkGuU2p17AWGMdrNPX1VtPaYacuFTNW31m1X6QR",
  "key44": "5p25qLyc1VF73pp8sWiqLS3Wme4zbJgoLixcBYHBWjSfhGLAqXs22zCs5okBbewkXPwrQUcSnXD2j9ZiTuRBN6NS",
  "key45": "2AZ1yFTHDnonnxtZ4r7eoAWqBQ8aCmPGRht8xpUMVa7zH7BwBDuR5LFKNV2deYxaB1kj33QWee891eMXRXQkeJGU",
  "key46": "2NooY4RNNPT9iGiWWZ1drSdQyzE7P19GrXx6seaHRcFAWk2aLAM8MDd8T4T8Fb2DvDnJhUxgXXiWpB26kHx9wzw9",
  "key47": "2wrq3n6bTbHDW2kwcBZHrqQJMKER732gE7hyvsxjZY8obe6suACHXpRHNyngmg8amVpSKS9GLCitijZmdoGQYJVV",
  "key48": "2wPpX7STuuPykZMVvARxEQwkQ4uwAkCyanSnAjntfbAZh8sZEP5R5UG3Mgy9ahdWWukNVCdg2U6jCMSuT8NLXjmV"
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
