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
    "3sLUYpwtPy4wEzRBwLSMDWjH3KCczYRtaASjhbyCvRns5MU1nYbLhddsE1kM1wLcVZmLufnXwA5NajMXX4tNqAWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKhm7qqRPVAkhnQNybfHtPdkXBKzvGX2c1Hpw91qzUHKKjn3cGQqanJoe8kufP7AaKizxH2mjb8w9hBFxbXTpLR",
  "key1": "128E9LPD5ELvcUk1im9ZZivs21ex3JbKofGd5U1C8zZauoNBcNYdwLi2DkJeLUih341T4CA6MyzWrNGLRa2gRbdA",
  "key2": "2HAFuYhSsyANfMkAfFyq6LE6QvyGXviGJa8LV1Lcg9yQ56dZ2gZJNtg1uWKwwL6qASLZfB3ijdvtFPC4RMRWog1q",
  "key3": "46YgH3xV8BxADqqvQSuwgyUSGMV6shX2eswq8vo4YTg1Tq7QeWEGuGJkF8CeoyhxxipAy12prEewAYhHRQuyiSE8",
  "key4": "5YGhHR1NpKhcUkWebHiyxTXXUWL424A2H6bmDiQ72ghkJchjbSSVC5TckBCPwiQYsSv1bpNPwrhSW7LjjSYNGZUE",
  "key5": "S5bFdD6Wf3LXG7jkfsCXM2XvwCcKFCnucdMf2tAKCTDYSFWU4ar2RwWf8WQ1BVczKw6kU8VSkJnVLhG7NSmEz2Z",
  "key6": "KnBuUcrzGipvodwmZx3VTqoqfeJnSVnxyvcgsix1hFZS9kJntnXeiFd6pzvki4orunE6RjMk9bLBzvYAgUxgyhG",
  "key7": "2WJaRKsf1RkvYCrWs5ELAPPVkQx4623yi3er2Pq11kc5PjjS9fNMZ6tVzcT5W3bte9A63Gqs95wwNmwjW6SENk3H",
  "key8": "3uFuMLcNtJBtp5cokYGDge8gWmKLVoCMLtLWiE49mDfzPi3Qx6gB3YotzhdxKKsUzVzrx7L3P3FzsmVdHki56L7v",
  "key9": "SSmSCjMyVcF2piufBidCuQTFgTAtGqRfjjPMEpNgevryMEWPnWp3NWx1PkzZamdsBEectJ5vCYeyswVciexTK2f",
  "key10": "39EhJwsrPiY8YosnHZMrTa7FDuuEcuZanDpu9gg9VWZPXUb3xk4NtGFCstLPEy415NkEUvEvUnZpoEaR2qsodfrQ",
  "key11": "2w6pyKfUDE5K2XaUTUMLmvByBRmSHaZyNxV7vUjKmVtoWgMo71qPfHDegVtefjCUpLe3MC3nqKFobVf3KHy1Soc3",
  "key12": "f7XK4qH2scrzBTkFCBWjCzLNYSCAiAhRFEyk6rtHnCNCGuacgPrsRHCAj5ruizpjsrn3QxCKGNZuSbwbxKYvt61",
  "key13": "47pQVxDVBSGBDiLkH9tmCnidu5BFJVFxjkjJLsKB9wXJQ7JQnctkvePeCyausjp483LXnonWzHUsek6M7GL9QvuQ",
  "key14": "mxSwLiB1HoPVm3JAXex8b5TxfjzBGQPWPd4mBVCpnRecf2v61sCqf5j8v1EfSvfBwEemDxNyMPpZaQEkg7hVwgj",
  "key15": "49pKXosvh1LbPDaP57UDpq7o5Y42bjr2wESmX4UzjzmZc2j8NQyj7syaJ85WTSmC2jVdrLu2TWJUsUrSkEwHuUw5",
  "key16": "64Bcc7wdSgRB1zVJbTZqRU4NDG6DhXTuAkNvt73KR9cSEr7LBnKiHdpbQwvT9vwnmvELkRSLERy1muAZJZMg4CYN",
  "key17": "fyXp7gKgUs1WnCRkxmfNHETGgD2kG86NpFQjhKWt6TXS67cqX6pNEeyuqry54c212kTUwcMW5RwT1bEZRAX4UEx",
  "key18": "3JGVXpf7T6c3zvHCcXCGX9h86LDms2RuDD4DhdektEizg3U3dzSy89LwyGzAajMRoRVa6wNg5qBEioZmEeVud51P",
  "key19": "3vQQrAqywhpQ2umu85JGPLJ4Qp1cDLDU4C6Fk5qaKv3WYn95R5xssXF9kD39tJmkukL53np3GFtqBnTMoRMCASpZ",
  "key20": "qMo7EXzsJs9z1driXvh4kS1BJaRHXFjLnqh9inHvuqSBNWzEvyC16Z5nfH9gRhS4B94mAjjWWWCoU37cMd7hsMN",
  "key21": "3ifcryoNgvbx13CCf5MjE8eTWiprXfVYzCGx9viddSeVTtiZgmBxKfqVuREWAy5SM46ca48NBhrG5JjVAQrQETS3",
  "key22": "5CLVLTDdPrDmRjc67iKzJMZvspitwvov7y9Hs41WJfchuehCuQZwevL17zUc3DJH7eG16w8KftycgkTAxzfs5Dqf",
  "key23": "Dq8kyhZUjLgysxQYAgp8fWvu9wmxQzydwMxJ5UHJhMdCssUKZG4WWpiuomw87GaK8M7XtovRSUfTCRHV959QKDy",
  "key24": "52u4VS3hGRP95fvqLRWLFoFuzxdnXvvfVBJae4B6UaiyzUJwUurCAPu3f9v6xakay6aG4jmgjENC97rWZ97Gk6n9",
  "key25": "i1oHQ5tg8n2E4k8VqkwZ3cQDkzMZ9AwPJb7iQZJUSA6MGtTTfyfwXx8vLudu3oHeBxNNN1x7hKBrKo37jR81Mns",
  "key26": "2LvHoSJojueFurGL97Qg9UomrBThghE94KYFmty9XLmh6agQbony7eHML5h4qPJ7hqqmHoCFe4AXrvCPeP2Hpag",
  "key27": "3dcbgcLe8qaQp8vHhzUwKBHeskq3vyJBz5Wz8LxCnfAUJmfHysibhR7ec4TVTEZ2SS6aVzkHexcQyYVpGxiUi7eH",
  "key28": "Cafq1Dgj439tyJgvJcjMAj8SibmZN1ebGztgbrw9F8Za2tWNjqj7vQWZJhLSYK4z5T2U84WmYukyLzq6vU6W9T1",
  "key29": "4GNKas2wdq5Q84pCoP5tfjHYWsSHxQx5LKPWo7a7PQf7E72H9hmnErztNkY4vSqTCwrPGCB7TeWFJM3CyM3syK5g",
  "key30": "wtokfEVRxKKbfPTcQxjHb8UTcD2aPNBGkmzkDrrUnF8fHmhLr7EM1tbzmRX8XvJ4iaoyG4NefSTsQjkXeAMuEpg",
  "key31": "2LvWjHH4S5rUGPpLeYZk2iGb5v9zG2tXyDnHKyexWqw7QiwmKZtHRTG4xC8tKqePCo41N8BKWTAWKai4EtTYsrLQ",
  "key32": "5ksJYaVQu7iMwHbt4GeRUbSMvqaB2t1753RtxM1qLgDjzcbruVanEqJvbi2TxonjXcykGCQpRELWqCZFTxKESGX1",
  "key33": "5kcC9W76qT8rC5Utkvo6sX2gXQZjox6YA74mZHH3w5wkmggBdiECYe4ok9ZesApwA2ZPt9wC67QiZ6TBGrTiY2d6",
  "key34": "LqoYi6Hp72ZUtoLN3zz3YWDkrm1xfGTFLyYF1aTvsQS6oVs2Q6anBeLSXbbwKpSacsDYeXdkd4BVRvZFtEJys9G",
  "key35": "B97M511kSvgpwvYifoVi9MPrC7eGrsb8g1E3hsRAYcaLRXJ3yeRRyLamgXtdWrM92MfCMh1dYNKSFPw4h1EvvoP",
  "key36": "5Nf9nZDxQpBnwKirNjQDHaGSdJVGtnL6T6B72ZYvLN4pAhpVaweqf84Gej37zHjs9su6Ti3ZVryJSgyTeSLmf5Wa",
  "key37": "4pFmE35gBoETwWM4KkedE77M2ADAco4Fu8ZgyDSgdhQ4wv7NcAcBzCnUVgBzZbdkgQuPJMtWHN1DaWYhSB8UyPcr",
  "key38": "sprWv4ptz7BwSRMW9AX1rTS9vYQZj2sBvnHnMVoCBoVAYit234kvdby1oTDhk4Cumi7rZF9oK9zHvYRm5i75k94",
  "key39": "2J8PryqfcmBy33UUNYcyQENx7XnVWsELV1tgXZ6qPRQ6q2DRSEz3cM4e7gL3WN4zVQkX431pEJ3MGAtKMukkTgUV",
  "key40": "nUeqLHe6vur1g1pUpFaP8KajaDDnrgHL3t8JYcBApmUeuVPobiFLgBL5mSs37cpoLSVWmNN1KA3SNWPju8R64BJ",
  "key41": "2itkXkzoa4jRT1iAE7MwUxzEJc5oG6pwMY5QiKdpZxtY3X1UJvEahsoW17a8ZxGWtRfM6qCJHSpKyve4BBcwRrqQ",
  "key42": "4TRvcQKeXeDaVAbXy6QBVWSsMDe2fA7YdYKxb2usYTs4SfrpLnz9TjqVAYHK1acjZL9tdyVVJPbNfmMXCsAKZCfU",
  "key43": "5rBd2wmetSzRq2cfp3GcawLJCt5yusHMRBZoe5GYQAs7vw1kUCiM3LvDQrVd3Y7dWyCaZ3R4JY8vtzJpyFwNRZaa",
  "key44": "s1oCkXdGtYKpP5HhQv6BechCfWx1XMtoSCNBVNZpzYhNFAZp9KKHfwXRpxnwrx786jYvz9F5M6XpGtTbGsMVWGv",
  "key45": "5h7tLnramTVm4ztpDejVLf3Zwf3Fv59YkipJv4CAd39axk5bjbQdz9gaV8g1dTxUUR5RA3abrX9uP8bAVTEb252r",
  "key46": "otmRaeNcT59Xb9sBC51EP7ZPFHRCnt1HnrSDuSLaNWo2CzPh9FpYnqhDzBPFmWEERxN6E5Xws1q5nj2SaucDjnZ",
  "key47": "26nJ7tSTkYenZcSRvYcY8qL9LSYQniDP66WKoTXSSYkxhVPGDWsgQV7zQLRNWCFj4zEJFFeyGBHjQWRobLbNDbL3"
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
