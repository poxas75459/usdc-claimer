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
    "2xxV2fdiUGwoLpFigyWk4WVTnC835a541LdiP2R6imBrboVekhWQ5Wz6TxF4qd2qyYU3gCkQqx1PtUEZDG6CkKzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9EaDEKcsxUdJkD1KFqA8CNgVM8P78vW2F82kXCnMnT5tdfBvZRtLXzq76TUMjaGv8r1xkWFHAxaGhdM3FvvUvZ",
  "key1": "4A5GpwB6L66EgBBDuPmr9HGTgk55pXvzgEzoWHQ8m2TXi9M3HHkSFsjeQRorodejAYSdZo99mqiti1Jf1kx68T6M",
  "key2": "3naTAMJswp5vASctBJDw2FagzxkpYSJHHk1FhtM3WtzCT8kSKp1ZX441ndmZXLcTAGWfKcxaWmHR8GvPLAjxm1PE",
  "key3": "5u6rjSvc6YEstVdCrjng9nmUhVuAx7KFbmJwaSwcVfdU366cHLkN2wEBFSWU5AD4kvRJ4FFCqm7BqdhGoY7sTPQ5",
  "key4": "41tZA4z9AbpTPbpPpM5CGi4QCexqdHfrm5M6LXhaYEBTAvgABNNgNRzUCT7Vb3LduKcJXWi2HojSdkXVgwEFyvQe",
  "key5": "5ygymJAdHfKHQKjEKkx2g3cqiLZzFZTsziWJLNXqzjAZHUKh1aLfLPZboUxpTgmZLQxJFGNThqCS9jJtL7dLKsrK",
  "key6": "2gNMWWog5bJMERqry965bkmLpyaoNbBQWFTauViF1sQdhNdCs5PTe1yTCHqY3pCm2xtGbr85RYU3pxFpr25AAmZ7",
  "key7": "5UjWNGAo3c6npxxJocnAoBcXrE9bcfVJamerSNTsBSPCeMQrt1Vi2SLiwmAD1W2i8RZ4R8Lsctk3DoaYoepzWpnf",
  "key8": "5bowacCyZoGaR8hNUerpNRX7B1jGdmeXMwFdjC9PLR3XLMvJ6DRVw4AC3B93GYN3DfcLziKWLiLFchtU3kz48yhq",
  "key9": "JeXyf7KvZJQsPXWHbS5pVeTHkQhmRJRRT4MUhCbEhvueGvWw7ypdHzHj1JQzgBDTvjvxNyswsrWEZeFpBygBwpw",
  "key10": "2PUAPckjmoveq7FCzzneYFqdNq1ZtZZQ7vNTwJJQ5oZ1Urz6Gm4Z36sKpTjJidD7fB7vH9EsccipqkDP6By4oAvK",
  "key11": "56VVxMWCh8Pmtzrsn45DZoj2jjZFgiWRa2ZPkhUmgz9cHCEWzGiJnzTSztEHUmRWNALxKbkoEm4w2DNVgRyqrtFB",
  "key12": "61xJFXPR9dQSLAhwQXoTsdP7MXWgPVXRwU1mPk3R3Pi3Z9AnwnxmHgeCrGJrxJmzSJfxkaX9MGA8edNgwUA8TZXX",
  "key13": "n3skVKsD9oeHAL6nPMaVn9dTrvSxYaLsYSJcMe75V8uHEJjfqmudyiLqLurKGEbQcVfrUrmPBLujoTVupnQQPiW",
  "key14": "X8CG1MA4WCPnu953mzCkMz3qaP6Q6nkCAhM5SGvsgkQC8m5xjyRa55qkoRPij33NmTKJY9Ziro7keZpVdULd8mP",
  "key15": "2djAxRNexnvtTj33t17fvhyiVzqxBofKEUDhearx1RnXnZsdSnNisSQW6wKUDpVHmAhLkDMPxdAKBVYg8xwPYDtr",
  "key16": "26K1QpXdbgDKKn2WGTkQ7PLeC3QMxz5YsqE7eoqaN9ocVubaALHRwpA65StEhesy7LnPtpEEitmZjNkFwsFryrkn",
  "key17": "4HUZJhHhMw3Y8gU4JY5PK8bzNkomq1P4BoVJj5XXdqoKBZJ8wAGQ2xKfbNPBtMjV22rgu4wiCZtSUixvnjJ6UJQw",
  "key18": "4Vmun39NruBRtfUR9WPMptJBGSPxMbCweEf3zLDhgFmYFTWwCD4oDodguY23uR3FP9DK6JtpNhZNaqs8Df2BZnY3",
  "key19": "5gfD1HYkxJC7Ybj1ShLcov1D4uBgHXtcrhNKuBynrbpkHLeqcEzFM1XK1VopsVqK6h2VVn299ynuC5KNm1fdeFmw",
  "key20": "4FrXrrF1GyUqg6g3z92Q3NEAsm6hYvNjmsLZgsvtXv3EfsPtVSgaNBwqojMN8mmjUKWH2B6x2iQXMnAgcxDx6ET9",
  "key21": "uZwtMEhizpwjmqTuHRaiqzt6HD237ybWjEpDBYsFZ9zmfyEhysPVywdjsymZyDJvTTrPpUFR7a4YJk5ZTXFKFdi",
  "key22": "5wdeaYQTBA6XxRHcVYGeLXYDyTP6ET4tTGGSy7ctg4wbssrxGqqKwFwYvz13tjjSSPA2HCURm5DK6gYVnqSdwR1K",
  "key23": "4Xz6t4yDcscZNzafd3JQiHLb3LgNhdcCFR7nDy8F8ervcRc6oedfCjVjEaJMLYkyz6Fin9C8ncccyddxkQUuCeab",
  "key24": "e7qSBkt3YFxvDn6q5MedtMEVeWQXBXwwVKVCXzcejrq7ThUX4VaN558kjTayxYaoj5iD7ExjcGe95noEnAycANF",
  "key25": "2X92DQQvzfXmrrHKLarQLADpCQL2y96i9o4595PZAGsSha3uS9aDb7PBtJPeKkpgFXvP4hpeY9VpNuEvg9ePcakv",
  "key26": "42bYvQj4y5gFGArZTsu43s1C6GKfL2LMbYAsxkc4q2F5eWV2jw7vadgs5Nuc29N6e66E2cLwZeFZPYPBjSfD9tn1",
  "key27": "5gwHytgcEEBb9cXDEFKgPwCfGcSwLXpC97CDikdcbMinLfSBHz63HY532qmrz3nCejTVE5yFrdF1cei9TjLtrbMD",
  "key28": "64TTBHquCpEJtJbc9c4qsUHLEtemouh13HHNKxixqTXc3qYorGdttnB7Z9ij4qzrdZFxr7WgX8cWGnngXKAGGpPv",
  "key29": "vfcGZi2rR44PuikVd5fDpwc78PYHne5G7iJuhBs4WrCSq4wPRtbqMUz6hTKxePDd5yRVC1zuPm1iNUFNNHDcrUY",
  "key30": "2r6udngaBQjc8UbsFt69PyHjfr5svBDT8CzhrB9ejnJQBj5A5zdm3Yi6Vr6UC25qJfxjDv5MCv1D8fnhpoMSnBhJ",
  "key31": "tYxjMqVbDtkFVwHtBordtMNJL8sKqaxLd27X2RHnb2HmC1zhu9kNK8PiMKbrhv1qaC14fNtuaAWvnZHqVD6xnw1",
  "key32": "8XyrxZ7MLWfKdy2k3iZZQFkNUuNziXYcit1V5MSzaXU7mLSrfBT9BcH5hXPDEm4ke9esTVrFW5rEu6r7nY6bYrS",
  "key33": "5B5sLtpuySrEkoSAii4CRE3YymMLdbEz7Z4eH23rm9ko1A8K3ETvUwoUwNW23QWLuP133idFKovpHDDZYTS3A6HW",
  "key34": "QkUYr5JUqnYQahkkvFZsezgarvhDBAXXxkmsSKKUkCSg6SC48oWNwCCqVQseeiS1pd39cok88B18aM5938qCUja",
  "key35": "4rSJ1yzu8SCz6LnYpak8CUpwCtFoEFzhTkMCPqNKtiHtw5eWYUYdzxBchEDit7nFReJmb3NfJPJU4SXP3tVcEGYD",
  "key36": "4g17kMiY4fw1RwTmS8MsnUZmXuzNg9NrK6qZmhWWjc1pWwHMC97EGd5r6H4LZi2uZ6XtUWvJ4W7BZyVp94HbLvty",
  "key37": "4fLZ2d8385we2SAxGg2C7uz97kR6ax3c1DFyUdn3AfihJn2cbBgg6N6TFuXAW26tixjNUtA55tmTWKLKZj9gSg4L",
  "key38": "4gTwBz3gVHUDBZTvdC6QDnfHJ9udF8A3zDYUW6rhz9asaA3ujmX5n7UtRjoW5b6MNVtXcPDLu33wPnmNZFJv6GcF",
  "key39": "5DHG32nknjBMqwsR5p719pY63LjLtsTwcBwvyeCAGKra6SYeaQ7cLuJx5iyN5UyJmWH4cmCR9Bj9yF1HSS8rVAUm",
  "key40": "KUcZwbNwRcJskUwJqdupFddwZnmbK4vVcE8Fg68YiFe4FMDX5DTq1WvxoqXeyHMfW3dMVnsUebc3aCDEuvviywT",
  "key41": "2ECfuwWGeH8wZFxHhbZjhm3GKJ1ee3K1DuBP6C9HYFGGFWe8Jaa1wKcNKDFidYGhst4jy15G8WPTtGCy9v1R1ZtJ",
  "key42": "5BHbf9fNWmC88pJLYByH1d1jybTjdwxbKgWHrJNnjoHHdQKTtrwyrSUTsXuyQ8BNZs87wRfcUXE7kuqC8pJaPXx9",
  "key43": "5HguCfDzXrSXwGTDJ5gMbvLT43oB8G28CpEGAkncrgMJnSbggvSjsXmX9ZN3i8wee2MMzCPypWFJn4RQB7dfVVDy"
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
