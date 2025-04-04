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
    "2X8317Kqjzbh6tVkqcemvvvec84garzNyPxWWovBB3FSTzF6W7ymEJ7t8hf4o7EPLtu3zmWk8QJK9ii555rqdXTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kk55F9RqgmgFz7cC36mWKWisjU3VuM7k5Jsa6ya5EgZvCpNroa7agkpGRpgW9U3ZvyXQEWydqMiTPVzMRJfdGYk",
  "key1": "4z9JX8P7u6d9aS9xgC8MZCJHNA5y3kDCU5eZ26k9BtRi6ySPyiFKx56sYBzdZkdYX9YeUsUQD9mTiGVhtb8JRFj9",
  "key2": "3zZdgGmbYUhXx55kHnhd2vp5sqtzPDKZdyGCtJPXmESnnF8SC6qP1Xxi6nKFFtUSCCXR4NSXByaUA2mUoqritRp6",
  "key3": "5KwdffPNASvMd5tuPvTXx7L59vFnYChnnr6b8yipyJKxbJTXgsNfC8MbrSuLmuYr8P5JsxzjqVPquyHtZGrWVo5x",
  "key4": "EcWtR1Rh58fDWHQVqbJJ2e27MfoTkUWYfN8YXfopxk355iX4hbKw7wWoJn3tiH9W5DagE2H4CZAdA4BUEvbPtNG",
  "key5": "gDRBaob8PEoeaqZcpXjnveNAKwcBshuc7kuFqP4naSzHsvwjrJpLTV2fKjHfeGNHQVCeizDzkA4cvZSKHqEGfLm",
  "key6": "d1V1ptn8DN6C5WgdvtbcTMJNr2ubj6f5jgFmFr4gamttQcMzWDAvWpfZm9bWTbYw3NidfDN23Th2Dt9vpCMTZi5",
  "key7": "2iz3JedXDsPaygimWvWxQA6E5iuGmUkpTK1sNNLYFjLhEhjrdS7TvmtLgF7wKiUPLKSZtyuJKNkHtNtMBNN9dRVC",
  "key8": "5pJAngRcxR48xdPB1922gkY1UXXNHhgaEtK2tGeqzosH9Yha6FvMWv1W7F5cpEQKfKViZu5whogUWtVfDz69WYBT",
  "key9": "tVWwvveSqUgsmouDMyWBfwqLbMexsEUnoXBuu5Haqecbzu4SL9ipy7skJc1NerZck5FQQCwBcpVnQjhxR7XS231",
  "key10": "jAATUjd4fhVBXKrtmJuuzqaPVK1ZYsUvR6qEmMs7vico14FSTPdjsvssaqWG3FHSYLvY6w1A1q6iJSSSS3z9m8P",
  "key11": "5guQpCz8w6nrGiJZ1KtPFsCrfGSqRy5BgUVNpoksBRReEV8jWwYpnReQhCF2B4BUkSbbkDyjGwMR224HtuB47t6U",
  "key12": "2vDqKrbkkatNo79Fh7JnPMAQ8BbqW5bZ8m8JkaoxRoivfBPQKUqesNNrURsEqFK8JvQH1zo37RCgU3CBNBcMbAqi",
  "key13": "28xrLs2duDv7imUQPAeMNaj6huRBm5a86HrA74ZYvC9fec1DB2aA8nkcfgoirsXrTqjxJt2CA89SdRnhkz1AKRLr",
  "key14": "osdUpFa5jUZitocbUG5TZqX8QoRJiVHDz1iNyeo9ezVAuBRcjguB1cvaZ6LnWksGq6N111A8gDCcqdfvE3QEBUC",
  "key15": "2ndfgRhJJ5PAEumg7TMNpBzy3CJ8f6WuDkpnKTVGxwUzSPKyxfiELo89j3ebAtTCoibuYiRKgeibFw5AppCUKKyK",
  "key16": "5ZFgGLAe9Q4jsg4aGYMCejcbHgzhkJCA7kfg8X9Yd8CDnp8Gh26NYiRDHa8rK7Ys3EQZYXCzAKfooAcN3Ku1h9ic",
  "key17": "29a3kTC8EuWMYtE9SNu2Ynn2oNmynC9fE9BT2t6i2T81u9m9ZbiC8qms1Ko4BXNZmdgHPB5THv8uL84VXwNigDdN",
  "key18": "21mS5paJa6RNDB5B5CXYxK6ZY2uTyrMqZjvtRFkaDJsYXSY9GSFCtZBjtc5XstEHeztaG9JyDBcRjKb2GTgBm7XK",
  "key19": "2NimhRwvHWhy3LcszPPJpaxTdfbXdF7NPFu76uFNedC2BWQrYhdPiZt1y38uV3uC4bHu27YzidDaajGe2qLk1ZXG",
  "key20": "abnPXYC5Pv83geASEGvDsXjYofHL4YkX8rnKYTbqJQ5Dg8ngV83XioJL7JAhGj8RWqA8Lm6TJxZz8pK8bMcKJ8K",
  "key21": "2snyc4X74s33M6BWH7KbXSqyrAhmgf7XzED6fyDL94SBo8ZJJMNQhfMy11JGqgC3xP3v37tcR7x6udD46uwa65Jx",
  "key22": "312FnKFJvsWr5f7vsEd5MjMsKERZoniLBATQbASbWsvkYzYKMDnE8pEaTJAaoykAqpxpJTURCxTmprNtF8gF9jNe",
  "key23": "29Zo3Y1SaVURkW3mLHGJkY1G5NjkPT6W2ayq7ntTt2gpG4PUhcc2drV7nzWzC1oDtiiS6Cc84TFLtbZRS9W8kXDy",
  "key24": "b2S6hVYLvWF9ihrXQfYVTE51EUg2sLgDJF2bpkxrSVAXknPPCtVN1DHp9z96Yw7cijURqhpgoXQMavSraDiMUc5",
  "key25": "5zqtPtsUzHk6kaSgnjo1a3ipobz3CZ1ca5KxB5tMbBU9ZmUQZ5ExE793Av6KHpK9d5o6RA7kphFBAVXh5V3AMbkF",
  "key26": "3geA1CZ8XtASbQn1uEJWhCSNZn6MmfmUeWj1wsWfvTmAxYe3mL5bagrYbUt1Cb8EZ72zS8F2T1XszNRcA8zp4oUy",
  "key27": "4HpqELiqLnSzxzTRwkmz3pf6HGDweotqVy9Qjmqhq8S3KmxQpsEnmirQmKdWLuH2c9ndMsmnDKqrXFq9LzHbrGJB",
  "key28": "fuKFeowHLnSZTg81zvomio6vxLNkoH75NLAm7A6dD2XgwNY7y1RoMojUJwtDLMKsfVmdynWkph9auN4Kgq3Wcv9",
  "key29": "2gjez9cCWyizw4FQLG3R9gn1PdZ6iKBZKJXN6G4SJiqdRepnfayCs3F7bzTc5VUVESBqhg5WcewwzbHeNuf6Wuir",
  "key30": "54mCSt6TwTwTz22FD6hjLPjQfM5kFu145P4Pa4htD5ybrWFqDKfEpWhN3JBdDzM3xqkK73c49WQeyE3NjKMLMXWA",
  "key31": "27bV56QXsLeJqesShURqvj1Fd2T2ewQmn9q1oUnYp8edYvustJgJyfa7EDipGboYE3SjjXHqUN7hUtUe9NmWwzDo",
  "key32": "3hqZYMQkAp9wHGDFgf4M8gEjZBAbhfSAidFwsFurbZWiS1p7dpQxHjKfTJ25WFjprns6dbVQsJgyMijm1yaUPXt3",
  "key33": "5e96ALvWcahZ3N4onw951tut3dx5orgJwxy92DP6VR9HY9hm65ULy3tw6Dbq1GLEiq4ghMFeRjEkokUzd8vxRHoE",
  "key34": "2fW25YbkU3N7PtFUPdvZmuGAnLHYhC4fBJ5ZqGrkWtpiWQMt8wEjEYuxRvcxth29DTQpv1tPevrv8wGiUBNhHfZe",
  "key35": "46oMSDhPbjcCZVy5nGYxAsR56DUom2aiz518Do5eEWrahaJwKAaqoHoKvUS3WgU26TkK7mk5cLT1dt9FRAouRzEj",
  "key36": "XS5Gh8KpNichfreBjNsBES29TjXvGHFBA64XyDuVwRiMZerhtqw3JJpjTqWrzqLq3zeVqmRR2aUsvtEECHXULct",
  "key37": "2rhUh8ikjYrvbfGbagUbkmyeuuLGEk4bvairK3AYsMnrkp86M45eC8bLrCPJfeb9RBguAQEMonjbrANfztkVrVgo",
  "key38": "3vPq2wMwqRD9Ly9zdy8aMzUDg1m69Pq296xCoZHBsSNP9yFBPgTCj2VqJwaWRWJMNruearTgSsLqiiShTx9cekiu",
  "key39": "4pJDiTbnSCY4tUBGhwXEGPpw2NCujX7nCNyA1mCXtNCNNctzTtw4gD7ahjWeco6X3gpFP4eJ6MvPLdqYwEMemrQi",
  "key40": "5p73FmwcnaMWXMpxCkxDRkSJjrt931SUT8KAvfPWwPfZNWyh52WKn5FJYvm5eEgPf6DqBAdcM35d4EDZ9ge4oGnF",
  "key41": "pEk7tNoVzZbURX9xoQXN9QYKen3DfHCsrqoYgV1E2hXGnbDFRAZnquqfbooDRpd966cHjgFwzfypD9szAhtfTj3",
  "key42": "8FYUvRKR4Hvn8Kyy4BK68N9i1EnSvWmTKbNNWza95zQJUyw5xA6j5QCGnz7rePV8BRn43URg8FKYv43tcgTwtUi",
  "key43": "feQmATR5fEcN46UeaAFqfRbFE8aYtSP5mcgbKCF3UUMpHZyWXVhHLxGZfuyQ2XmjkjUUu8Xm22vaD5VJiYtt7oL",
  "key44": "5S6843WgUsRhJgFTRUeShrw5gQpqhiEb1Sjb8J932B1Agk1LQYwjWtSQfhtRX71A5NdBqAn5JQ2Y2szcstvfVM8c",
  "key45": "SsiTjtcDtkcdnMJbWydapcZG4LHzT6yi6zhbdiSJz5qNMfXY9KeynQV4cT1QTUdJoUe7AZK7p4qzQLL2Zd8jvD6",
  "key46": "29ucxiSUbGcVN6nQKXqLWJqfGz2YaDYuYUCFEPjvHe5CN3FkBLt6irxruD9KveiS34QUTeoCWfM6aChL3SAwKm4s",
  "key47": "3kQNbSyLp1DVnBXQvcaUHMG8RuudDfNHt2MhMtkeE6qt4T3kKzESxdfc7VC2dLWZiCfsiwCp9CNEGcTwJA2QwcAa",
  "key48": "49c9E1QAks52kq4NjKfXrogz22hch2if2CmD1hSzboPSfc1UdFCCvaw2NCZ9HzCaTmpaGJmeviMJrL2dsu2BpjxF",
  "key49": "PnaM11HDQtyAfNmdgPGCkKPVp4aX95W6w2nenrpzwWi4BF7p5Y5G4hUJTM1FkMdkMD2Bv1E3FgM18fguMFXAg4R"
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
