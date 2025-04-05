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
    "2mYTJsWj63zWrSf9BmuC27FGFYYurBrG4NDk8taTieQ1a3ijyyTmqr3mzNaDpSi43Eeq7rDgVQapqyKeCfsyxM4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cztt8t6T9fnyGy2EV7n5HNWwUSvvGG8LjxjLaMf8LxEMSRn95sTSiCGWBZxGLUxqNVi7YZMhHXcjBtyBw6pRRyz",
  "key1": "2eq6H4j3pQL5mUUvbjS3JkVSd9B9Vg1w21gP1yHB2QTuD4Cd3wFZAYSQF1BM6v9hD7jDehXZhp3r8vrcxXTeXezR",
  "key2": "4NJgboVnATJdogkimqJE48uu1wwoGJXtTGB3SddswTqE3Rt9mGV6eWoyqHf7D62zTDmqkAP8QP1rJe4hnhe82NvR",
  "key3": "579UjNwkud3N22VAvGzFgqwS6E1sY5oW2U1UJtpMEkmnHeNPDkzjsrj5ugV1X9ctU6mPyTQLThLEe6pZEg4M8qer",
  "key4": "4GDPy4fqBgSTJ8zVi6gAsnZDdwy4ZDpdtupM5jg3qD92CR9NHsQtvQJBPx7fLPbrKAMZY1a1siGCQ3tQ2pW56YLW",
  "key5": "RWWgVS3unniNLJey547n8LspX7ynVmu6FRCpdkBzM3xTxpHQcByXWnYY3n1KiSQ9XFDDC1w1x9hKyBfPCGoTtDj",
  "key6": "35f4CV8zpBYhb8XPAm9n2w8GrpFh63a3UFnuN3taas28mGrVd8DfHK14N3GSpQ2Pt7L25yaAqjtngcJ1KRiaCLWg",
  "key7": "3StRHJ4TLhZ8c4xiZh8DghYTfzWR8skNNnfGKf5imUWq5kHvdRA7Bs6W6oJ1NFmv1LkASFSqwJe1mMeLqkj1nGUj",
  "key8": "4uP8jGt9DPYmP93Qaqufai8zyQZi5znjaKxFemd1bMut64fqJb1dxzSvmN9NpJEAkQmejRHok12HbZjUU5FL1TWp",
  "key9": "PiGzMhD4UChZ4nB7NAe9gb7x7JTg8sdHpVPEsfSdGDC4TZXprrBVta6yFpLvvmmhSVKJZJ4rDZLqmYDst6tMPr4",
  "key10": "5EEqd9QQZepZ9tBZnYz31qp55Yp6GraCe4YUFo9ZBo6dcYFNyL73MQeDdse8MUyuJ2uy5BmHewcfcpXkXJMgW7b5",
  "key11": "4eaWt8rC1KiLudzWfmL8QWw8ahMgeMpUd1Z7K7qFD5SeCtw2v8x2Ze6DsKSVgF4E2dryD5dteV4mrTqJCpKo22Q2",
  "key12": "4pndTJ6ikdsCeHY6FuyafYMy9T5YB8eAZpkaQVWWMT5366kYXa97n3xFhttFdZAgQnFbMVjEzeNsAe5ms2E62uSP",
  "key13": "3ePbswoieZ8psNbi5JBxypFfAQ94ANMeTGEhXLbp6ft4gRwUwpEPvTk4pRiRExDcqBnDQmnckRVXKNrYykhP1fhf",
  "key14": "Wh94Cis4CuSchCP1DoirxVxYVjCinBTdAnsTnH1DTTESb84MUHawmZbqweeEkq8RgNBEjrWtTBUY5qRoQ61uVTj",
  "key15": "3HwcPpbzPu1B9xbobjGfhYEon6evHK7YnALzpzZCFNd95cnttbqDZ3Q7kMDSokjmB5P9d5fimfMsAc9684htH6Qc",
  "key16": "2nQyPWZk4wvWVsKVuWTPuH4vi7pWxitggkpZHNzGy1ReoxwwXrL8eKssQMu8mem248GXPV5E8yGKWK4B3sH6VSsZ",
  "key17": "3Ypucyavc1yMozdkipAx9hjVhoctgSx8sA6n9MdGGKJ2MCxWkf1MHzAJ4Wdks9CeBXnyw7RZpeydzEFycrvaorv4",
  "key18": "2vXnXVjWHwhwuE2fW1peRXrRgD8X4tqXinK3o61SHBjwGWbWjVWCi4fFiMfYySzsFvdkGH2xmMRXp94qYg8jzvZi",
  "key19": "LNAKZUbp2vdJTDMQibgM6wa6bLX1nTxncA8Hr8iqPkT5g9CZ8xyX83DHvC598QV9QmbiPSC4prVCMGP85ndnPFA",
  "key20": "4HQxG9N7oP7NNWN9v3NDxzPGdn5LukcY44AYQ5QKqqAwZ2E72SxLkLLg56JWAW17J9vFyzfz9ppe2cYp7apM66bH",
  "key21": "5MKiBWsHSfYZBemVB3egA5aTCEaaexhomgfiJhwh5vfMHq1954cTFNSBc5o9CgpwceGcZJiVucon8aaqRsyRnX5u",
  "key22": "3Z3z8hzg8rBRxfQ8ejULXLjSnb33dqhycWPXANuNjasKfYgjaSoHDUpxE5R48qLLfu72BBv6LHUWz7H7EMjASuUt",
  "key23": "52RgN7YbvqZgZzvz2qUhyHXT6x2kmFaNBAxkPN1wgbLfE57zfGhpDnMfrMnaGYNa7NFGC5wpTPpaQ2Gy8c4cXCYT",
  "key24": "55xXB7aPQDcqRTTHoPHF1cJBbd2o2n9mcZfHPZEMXf9Hs2hvwYPtyosdRR2TrMoN7z3mxwvmnb5wAa7XnqxBXNB3",
  "key25": "2d7wnkRqvFDs98ZBVsEZ3VA9wq6Ek7WtrE6HTeXUuPbiWLQ4zgiJjFK5ATAyPBG6udFJkpFWAaghpZ22BJqAQ8kY",
  "key26": "KqPLrp3PBfQsBcxTDtGQuDU1abYURY7xWSGxE8MPoDtwCngULQMR4P7e8TezCBVnrTxgwa6BEm65ckLxp7ixZQg",
  "key27": "38DjABEzLyVYAD9oHzSJahiebGnE7CiiK8MAYgujUknQo59dqKktcuyG9RNC8hPPCcNTb12NKTiSb2rm5cvJqTy7",
  "key28": "4XhgWz3BZBvGWLEbGuag19zjevGJ4PKzQkYVbf3aJQQFCsUCBMyWTcVw3WQVkguCvAexax2Ev6SeSRVFG5HRD2cF",
  "key29": "38PJQ1hygUracAqjWMJDSx1hYiwWjRhmZYEmeYxohYoL8HmqBW2c8P3gw6FF6rXvko7THN1F6zseAKPafoHhvXsk",
  "key30": "2hfgYSxn4iHkEAT2y9WK1ZD17Lkdrk33AC7Xys2kbtpmMp2Lipxdoo9qzyTpV2FodYwCL39oRuCMkyLux5zosWHi",
  "key31": "4EJU983xnaeayb8RRraAKPvuxSdxQmWGj9Jb66SBnDxSMwkgjPueqYy2i3D4kfxXmwKSeL62PpdszCaQdecZPqZN",
  "key32": "4LC4RcmAgJLtsV7fkCXSMkucAdBJBt5m6wGVerTxrunBe9CPWXaER28EJ58Bb64pzQALSqwTAyUSL2D7uZocWZPx",
  "key33": "5ouK8G6MzG66zvCYZTpHQJpZ23vj7tvQczS5mENEWWCoTaUcmsN7kGeFvag2hqDxCwpsgD8CCZKVKxdicDRSfvHB",
  "key34": "5ciwXQai3SrTuZgjS1RjEJKCRq9sxDFYAJ2DvPnqwiFT7Dpu4vWvs6xrD8UPpzBPSkxBL6AAjSkYKsfzWefLc6qv",
  "key35": "2kfKAukCNVhZPcfD3dTjKhDC3h93pRUgWmpcUgxA93ELnwDkzggChKJnmj4aqckYAVhiUiuZnUtyEx2DgjTzKyBE",
  "key36": "5pct1Wg5L5BAsNifm7v9HWARcV8nYzEocoMzEATSDXhQMSM9bfxAPWqKktdh4YWgAvDw64LaAkQSW7d3AVthhiwA"
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
