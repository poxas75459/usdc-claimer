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
    "5njrWF3n5CuRsxMaQW1wGKWHnPVXfvf4LF3DWR7rgy8ZbFMPX9YtcDHiDZQSvF7YGvVZdHTS8vDqhgsYgZkJuebR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLimjjkFoCNEuWduFhPSZPTkbzndmbWgKTiPiee6WDBfn5xnmNN4LcwXfzRemPP3S4f2QTPdvxDMymuarby5Lgj",
  "key1": "417nsrTkEk8jfChwuHyUMXsjjA9EfnSWvFGJgSUosgHVGuQWRKiU3SwNCUS1hmbVhEttsHLn77tQg3e4ZHsBKeLc",
  "key2": "42QD9HRh3vhg3FEFKsKnVCqYVtvAdndBJqHjMMqKPkrcCyfuonKWHV2GyAcMcNooVdhRoYyGqkP8ECQxC2jpPk4b",
  "key3": "3rGRHP69zADorF81j1pXNLBs82RKXemkHJryhrTEwULLthUQBBgWVWMYHnaAWaQRrhWf7kjiTtRbZcx5g4BS8beg",
  "key4": "32wJT8oBdLZFN7JnFbUwCwEuRrUQ94R3cZQBxPtZbHwdUDDqDkMXB6ZQpVTfvTq2STSU14euVLVvg8KvsuFL8b95",
  "key5": "43hDNwUGi3pNLD9k3fW722sG2EdR9n3yR3thPWGtyjvX7ZVUpmgyt4JQHwpFrnDZvnPVVQvJm6eLLj1hJcd8W6ti",
  "key6": "4oKnz4YFHAhuvwcQKeMecXCvVNZGniusE6WHehhUfcfZY4eKpqAgf6Z5pDssdzc2L2CGaxXv9pNaBXMKSSC2WWbH",
  "key7": "32CpryU9X198Gb5bRwe9tzVxJZgus9TRq1qitijVfFbGwfWd6UabyXEmrkrq99mWYU7yvpJPhUtNwzwQ4p9W8Liz",
  "key8": "2w1yVP3kHkZTMn56sA8CNj5a4LsxGUSSSF9jxnNGMDGMMd5jctmwvm5EfYV45eCcXVbzVUzYHZsfGjiwAhLZ58hz",
  "key9": "9fEuXvW2KKQk2yf3QQbqzSxY8u6vq6JcBaWCqPNUdrdg9ViFShL7gSNjYzxmJVxxf3j8p2LMDsoimkD4uFLd45i",
  "key10": "2wbcdYLNaaSwgLeU3LujVYk9pDE4sHMwTxy4jxEjpAyY7oJP9pkZqkzPq4Z3oZebEY5eaTyjh3UTpYjaen2kxhR3",
  "key11": "4jA1EJFe5aSLffhbSE31WjUtBSo7mr47Bg3zhxmis5BZVTAn4RQeGAy8CqPaD1yEqeDeK2H9DCG8JddbSkYiW8Y",
  "key12": "2JqeyTcMGe5MBJp65kUxoeGtjqC7RSfmFj6DdzBn9qj5T5i91G2wchj72TABQfAukCnu8NVdcudCC5aD13hPHMkQ",
  "key13": "5rLwankqUUVnuh8rox6j3gVSnVfyHTN8YuwP4vAQVN5EvEpMZ3hjynQYXJs5Bd6P7gLP3jtjJANioYN6mgbHzrew",
  "key14": "3H1MAiNQTcw8eAcESSoLLR34XtmGK9HtpoQkN3EQWZdYXuoi8Un2qoA7Fjfj45JVuSpoCtgU3P9jtVhdLd2LpyNF",
  "key15": "5b8pdq4uWZUJfpogUpZsuG2pEYveAg1eEDYfW2WNiPWxi5fofPjnoU4RwjVsj2TSTx5fWWoi9z26NeDiwAxCFmyR",
  "key16": "54nAU1bsGFbSbsPHFc5KTKnPYJi5F9Hafv7nLLDSb7cn2vbtgDYNgBRzPLJb1KEGcHjidAgTiuohhmShwY8JnBu6",
  "key17": "2kYNR2LzqvmQVajBQNPfKmqkxQnTwFNQipKHqmvTRbk2H6aSeV92CCmhAd8oFDTfBjBTR4vJ6n9TCfqGcu5fd5cd",
  "key18": "2YVDq8ZBRPR45HkrxNXtWnaTNFvX7KhNyKRQac1sBWRedebwVjineqXtbA3q46bNHSsivnaoNRUPJoizqYwNRdyw",
  "key19": "2oSrKxi2r3ueHvdHE9ALSEGQs2RJR3fftKf2yifkg2VNRnJRMDH3pXStttFqU6GQXerAhUySkFLmNs6pFP3k5xFh",
  "key20": "4b9aCEeeSoKwt2vwCg7fuKSR6JWcj5GHqNDhgQZVk6di14FPx4LpJtDus63tnU4Gj8sg4TrmkF5qPS4jJhsWgAAr",
  "key21": "4RXwNMQETFNZUnm6fpMEnBG99KnRQvdCmc2vMZkJJhosL85niM1bfMjBWQME5HLGPt8FN6rqh9kFFwrsq71YUsiN",
  "key22": "MKmxo7VC28Q5rnRv34wBY33P2vLpZsTeixWcPws1tRFSfwcRxEtmVWeSskeYoetJ6gmhakmYJJpJkunPrpxbKiN",
  "key23": "2iVSkeyJD81DLMDtaQm7bcb5PjjUFmi2cFEy5uduzS6N7zc9mHxYY59idRs4sP8hoKtZaLDneCGS2Xbrbhs5Qv7j",
  "key24": "4o7JUVkwdeLaLAAmZH29XaHTYgdGjYXg6VC9CWdfWXYfRb5ee5trxsrVW2pRTQenx4k5foE3kcR6DZiHyhuCNUkj",
  "key25": "3etnePUQV3UTzbHx59f6NjwEiww5hzHkQfxJ6ZjAPHPJQbF6b8U2ahLMECGnyLtMNiknGw7VxyWGtomEwX1k7onC",
  "key26": "mJpSaKs3aoYQ1RyKdsFmYCwnabFiKvavan374dxnynA1ovJ97HuqNYkjobDb3679QsmLRSzxEsS6AfNQ5hvvRk9",
  "key27": "4AtTL5dsyG69k3KSfm5biMsfDD2g4xjfMhTPUsEyz9NBcNLzb5aHF4d6EzThNm9PjskzZniGaZ5BSPriydNZ6Yp1",
  "key28": "2ZhTLTzyk1vmCDjDKM73tQedD9hPRxRxgdXkYAopLnawy1JdoWVySjDgoX75RdqGxsPVvL1HLnCbSGv81JHnPHvV",
  "key29": "63tdbkbGJYRAQunjdib9CDHebh5CiBMVmePcEsKsV3UndNmuGcTq1SSGkFuVY8GDTc2tm9F6MyTwBGcjoRYmeUos",
  "key30": "4f6NUF8feMK7AUx3xgovyB1aagg7HzLD8sDjPW5owwAdA62uZD8RB8f4k43igwW5Q5qn6aJorK3e34r6S2AsSBSF",
  "key31": "5XBc48583FoohLNNgBCU18CpHgLxH6GN3aw2bgyY6uTtvjEYXZC54U6j43Kbr8CfkVBLYyW3kAKtT8smed4VG5Q7",
  "key32": "4AvmeYVkMKYpbSzJArG3n7V7XRh1aJgBj8pozXAu8aBKqSSXnGsdf1QrCcgrkAk1CSJg4DnLhuJ3dqubLjKceRTk",
  "key33": "HMrRiRQh9epHtRsKQ4pjeSKt6QJRrk3bC82o1tt4rLZe7KBkrG7xsGL3od5Pi1JhkVQqi9sbxg9TSF54J6uD1Ky"
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
