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
    "2FSFQLcgL58Rf9EryMepTtVRaNQNh51uP72oDFvvJnPg147F195yrQP6K69YP991BGucTM5DQ54ZgbUf9HEZqv6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqGB31dxkjtkrgA96Vs73Hc1v8DAnaqZau4ffWLusSsCLxEGYSCZuoUPtufNjLpyk6ewMX7Xfg8GqGSXxVKmuq3",
  "key1": "iinrtrjFkq1j64xnRCyB3gPmo3CVuGfyriBc1YBaFSWaz41kCV6Senta5FzX6gJMZtmyTrRrMBzsAASptouRB3t",
  "key2": "3vvUq2CrHpwePtgnvx6FTxFURrMdjFdJfBd2mvfvjXSou5qfNMTpq3xxxNyBb7azW8sBpoc7pUDUp61gY1nEjCRe",
  "key3": "5rskSbyNGW19ZnE1n7NFzBEgo1oZzawzaGsZrDui1cBBqWJqp6uLtYCjinsqGD8q44ddut1qUcyvW698AD1JBQeW",
  "key4": "5mSdRwfzwpwSFMs2uGXhyN5hwEW96oAokCR1se6hsSgWRPco8oYkYTX57hNkfWshpqiUwQqb3vKqQ9c8pNi2jb7Z",
  "key5": "2DZFg9ZVwfeoTfprj2TmNxY8G35wR1uqSqt3iomn2CWUobH3ZYFtPmjNDNbJzwjvKJdLLcFYW94NSr9d4jbPMegk",
  "key6": "5CFXtpxyXijtCm3deEBTR5bHCwRyU4QV7r6ZoxTUzndNRNxmeBChHrDLrWv2LF77bCgAjmedQCFP2xhD1h8jEgTy",
  "key7": "2aEhLqffquU8vq2trep48zg2Y2q91qiP1qzXfyExMohJzBNRY2KMg2YMakD1GSZDhq3VD1coZcFHs69sdZqe65QU",
  "key8": "22Ja2RnbSQysyd2MyAiTDJNQFNrZuU1L8Njxv8kqXeFXHCyCvwPRuA3U4UUvvS8Zjb2PQWkMHWBCjfZ2DPArK2JL",
  "key9": "3oS4bQ2fu4tqmJPi58i4dwEBnCHqE8htbV29R1pETAoRPttQqbiG5RAUNXcBDvguNB9q7brjUhoifMkMJsye3UsY",
  "key10": "2d3bQQj7D4QkzQSriTsA8tmz4d6FCx1NHtqsCwsdEkqqDjB5yCWpiZ9gGT2ExboSVdRHDnotT7WKYSqPS94yt4Gx",
  "key11": "W2Gyxb9iYjfqn3cG6JkeZEk8qs7i2LKqmc74z9xAj5g2x7VxxaWGpLfwxoXZGY2GEPn9AQGnTuS4gKQXZJR1v5L",
  "key12": "3RFTSUeZTh7E3bHeBph1PRwfsCPR5p5wchU8BSMEFaMkavARqoyys9pW8VrYtEb65TTA5ust5CYVBwoLPVuiedqM",
  "key13": "393UmGuKXSEQ8rpRob3ndFdRnU9YBWAKF8wn4oJHqCPv5afphB2jkX7JKeymekDLU2auM4E7T5FfKSWroUV8Si6x",
  "key14": "5t1LWyHjRMuFEbscsiS3LMYhnLRWdLFvWDoG9xvvxhRow8NKB8FBzUCsCubPgVyXm5pDDpeFvSRLU3iWFuwPtY66",
  "key15": "63nKeNfGJpCbrKyJpg9AjkwsEC3NZSnuL4UZPCRysN8ErTadTCcjgeuXDd93rsBAqAUi7WmLiHDV8A66G9SVxetA",
  "key16": "2puGzJ9UVrReeLGwWpzs24mZhna2cdUdk1PMKnvEHPJCexuHg46dozwiHCmceMM6UBTfBUHXR71kQvMWh3x95nbN",
  "key17": "pQevKfgcJ9gVY4YpvfFGpURuL99CrCUtL35xWgmHLQ5Pxm9P8FccrLdfB1aQwP1P1KtpWbz5hgWw1hqRPtST8Zn",
  "key18": "3Sa6Nuxeb6EpY6nHVF9CTcbXewvzLuGZSPk5iTMuAwXT4VSg9zyvypJP8U2SMTozj6EXSiWAeYVUkry9P7amNfP9",
  "key19": "3ZPuyietMiQn7RQHBRfnaMe4maA4dqtXELfewFegW2Ar1oozcZEsLwsqnvssAjUErtNCeyLxEqpox1744714BxZ",
  "key20": "55e1AJkiRR7UugLGUfKj62UQ9uoLMBfSqq3VdvYY6u6tBXpdnrsA6NaNwNGstDBQesRZoDfZ9M11LJdJkz6hd8g3",
  "key21": "5ALAdFg7zyTUeQ2jVXqsiZdWCpEmbiCmx35foiME37HskCHFn6CohxhEcx9SYMKCzHoTn3Y3ngWsEUSKJzo43f58",
  "key22": "5cDgVSxqcsoXnKqK1g4XdP9wwV7Ryd7WMwj6eEk5DRgrycTYVBwzVvKbXwfyeWmiPp5XBNjkrJ9KfQWJqtiBzsad",
  "key23": "5rbyd6YYJhfoEfqPBpHVH8FPreGmfg4bkjNzmS2WJrcSafcqZha2Cm8poLhhwj1B9MTGQAR83VyokvF29z7YqzgQ",
  "key24": "4uzKpuC2eqXZgCGhHHEVHLw5vsZaUEmQARYybxx91FXPBi1JAP7us2KCHpq1Xgd3XDhqKVczKcnYevqhqBSbHRu7",
  "key25": "3t3QUFfoCbPweaaiQqp8A2xiLP5UtFxURhgVzBofKLu3JpC9kpz9mfaExhrokQ66VSMoKBokbsCm1VfLjEEWhHPz",
  "key26": "WjxMJdfQb4LVwLE4dnkSJ8vNuAmt6EwHFrb6tYLz5ach1g7ef5roMY3AQc1FWrXpAQA7qREYp8kMd1THzoyAs95",
  "key27": "3z25VYuW5dsaHDEZtrTsRtU8CPSWEXGg6XTmz9ivbGDs7CRjhJcW3jofdmYmarufeeNjcA82rJnzVQJPybbE1Anc",
  "key28": "3PxhYfJAq3pWDgUnDpKvb3PUjU3HuJh9QXkXtwSg2FfbNUj9E19YyGPoep7aSUtpYfvBuNZ6bJVXZRso8jfSLSrM",
  "key29": "49U1MF6u2iVqdC2UkJUWN7iRMpBpAXmo8oG62wxNYqc3ZiPdT4x6L3ZQZ5LFv8Gc4ENUrbMc9vmA8dPaYTJRu6L",
  "key30": "4nrEkvN81CXYxt61bAHyWKnYAktiEF4tajj6EGtLcnAve5VgkxPazihDzEMMMZUHr47Sdkyt4Tk3YvXztqgsgcaQ",
  "key31": "5bTShFTXC8U8WRPN7nVj7DkQoBKgaNKdF1xq68a8xXqQugFyRFu1G1BgtKzx5bfFmKCouqpgZsAsHAX6kwbddD9w",
  "key32": "3KwjrPamFdVFK1EBasWwJLP4FapXrGUXf7HiGcyWF2bJBxgzA8PyhMjLmQpYVVRiegy3BrpaXkMNjNo3F5VmkLhA",
  "key33": "2MnABxcRXqBodqt4DTE9ocn9GS2z98e9qtnzXYUubfTRiL61CTxw9rGtZPuoAeKy7Qjf4K16sS9VRiE46P4H4XUP",
  "key34": "54kicbVjEDzDkf8MXYbrszPsfrmdmStoQFtpZThgA7BTmnzNJwGEyeWfswkkVJmadxTFr6XooRSFqKpp9ZwqGpiq",
  "key35": "oEe47foNWJZykwhWvreLp1rqNoqExEgz91WoT3FwoKiN6zEmisfsuFh6jfxZvvTjD5zBkAUkyHw4h71tnn3AbfY",
  "key36": "RxaHxjsrxnS6mKY952UN3mhJRvU6DfSuib1brANsuYaDjVaUYRzTHtQocDmsbcwmRqP5qmsZ1fQBiMr9rGAN2vf",
  "key37": "QH3daZor8g7VrSvaZusSkgkV2LK86SFxRH9p2aZXM57XLCaay8cjwhXGWr7tJA7cVk4gcWRrbTuG9rr1L9hU9mW",
  "key38": "5zQcEDJPrRKaFNYkyQWfp1xSTPmc6ymQ1q1tB62wKMWZEu9kVvqnbBc1TtXMWJzSFMLhikw9nX9WFeEhqjZGzRtH",
  "key39": "3t1baYbeWPoQnRZy1ch6zP6tu1XVL4eBhtnBAjzXwf8dURjidvrhothgNa3mZvZ5w6bMES7YCsBTai8WEqEphtwm",
  "key40": "4cKzq9SgFijPDkRa7NRAmMpdMAq5KmrpzCtdXyfHFQALiCVXjmVPnFPQAhr4CQXmvtM61mnRGpvxnjm3SJ7PivTz",
  "key41": "35RktbqWDDVKyhrDVoiSdWjeyvMSuQptSE6jVH9pNixFrKB6xEiUh12FzPvicfRojYidGKQRk1A154AdUipebhwb",
  "key42": "2tfP2cpqJTmsMuHrmLLaRYXuRXE1iAxdSWUQinnicv8PimxsMMsYTji2YcK3MpHyPwg7vwKAJw1faFarcZ75BMf3",
  "key43": "4PazZYmTrS7skdvvzn1NvnZC7amPpRmSqk7fTuFNBxM89pWZe3XwHBWTwW7akA7gCJ9QggDDZstepLn9eSPdxmvX",
  "key44": "4u8nf2taMhLQPfzczkrDh1YmxH4a3emJRJQb6H4eeANCY76xGYVUm5pT5kCqCXNVNgUnEFSHv7ZWsiqGxjXom1dF",
  "key45": "4MbwyuSk765FwuCHhLGC2mZhis1LghFChiYzUVoX6NPoPcV6oF6JFCTpStwfsmGHk7QFeqi68jcsgreRcoRsoqj",
  "key46": "cwh2pS7BHfVPRfQcmUCpN4HrHxGtAQhP7SzCTRUBPjbHJbZo3UttueqdJNSM6QHk7o39uXWya4kgNb6rBg5KWRN"
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
