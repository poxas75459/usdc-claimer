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
    "4ePpt7r57PgkTTN6f6Qs2f4EkfCqJq9U3hCha8iKGYNqYaucWphr1vmFPF9NDVEa3EyzN3KqwyH5hNFreZq78aLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptUnxaBKDH4UWL468yMoLUc4A7XRdg92cgN7GqqYrJJRwxr1rb19XQdwef8d4iZwP4mFPkHvi4nXWgV8cMELxEV",
  "key1": "3ESLmo5hEMT9ujqNrs3eQkowHAsMXXF8r5tj91nAKqRxAtfRYYhohAaDxvkjv6E8buh5D47ghvcLbrBvJ1i45vcp",
  "key2": "ht9XBLTt1gAgszaLWMWABiPx2YHvEqPwDuxqXCAaz5orNPb6U8n9Qo84jYbPbdSwLXi5zYn3w7VNdSAMTKeXPG2",
  "key3": "3VNNfsspBqkWgxpfJq6j9oKymZSHhBTNp5MmXFfZHysdDHwwRgCt4x8bXsRAC5q4K8qjYktxb3xHWN68QygfxYhr",
  "key4": "5Ns9SGgLSiSUwf3mPEvMDWVQfWF91fNfsTNA5mfSGBEBbbmft1418mn41aQY7p4dk1EFJjb39ZemqxGEp3CoYhH",
  "key5": "NbBcwsa9MEcYUBMxEaL9bDi6wfZutuDQyyK1QYUqf3Spxxv88V2tQabcjjmu5pEZYMu9TDQm4uSk6sPiM5GpfaZ",
  "key6": "4WQ3S8xoC9cYGwAepiR25XwzWjA5MEVYPw2Zxyip9QkymBCH9QEGojkUJ4ofsLFMALn5FU4PTSMjcYuGZ7YkTM34",
  "key7": "snU81y1bBBHUQpHtA9B7qD8P4ncFtWyuFzx156EcFr8AxG7YetKD134fWRhTQ5hvYDmC9cs7mpozYM2KfbKA4rG",
  "key8": "4DpiRN1VagwSY2sBMoCNXMTr7oJLCRNpS2XAX5gnyfJdSp9Vs1jymgS1PBJ8D9SbrMkRBsYwHti8ZV7Ty9SddEZq",
  "key9": "QC4yk3t2ho4iijyDjd4LEwbQqnnvG1Cq53qm3DYGQAiJZjG5wUoBBt5PMSatv2EgfWjEZq6fCB9hLHxfBRkyY6w",
  "key10": "4GUArVjAQQykx9DBhiKVUywGXWsScZk5MSL1AU9Spn46rV34Wn39amiCsK1viouRcPMSvMkrVccj14tgwBuLiZYW",
  "key11": "54Qimgr3jc6rWERaoUk58UGKfzm1eZ5ijNxmH4J3ekqERFrE57hTc3bGh84wNzEyqaxCNL1cqSnSAZQqYLbTzris",
  "key12": "F9hZXJDh344Qz628ELkxXUX3g9a561m7rUqwuRACAEx4DAGBqD79ZCkkGkLxB3syhrk31T8bMQ4uhzQBhuFjj2J",
  "key13": "4rfeBQkiF25xeY99RymtW3YBiKG2kujQHi72iCjqmYwsgELgMEv7dG6SvZNS2QYZVVJCJBwkX3mxY313yEdyDm2X",
  "key14": "2dqSuNUk2urGheQEMtV7t8SrnzZgycwZuvYMumFojdkYjXrwsvxjwjApnqwSKzVPGZkpCmu56HXYJkaYhT25yHxx",
  "key15": "2ycy1TvVZnVLpbij4V1gsXRnopB5s1JhRz8hTTkMZzCdwFm28qrvK99sdxXzPzRCY3kLpU3uhREc2tJzFV38C37e",
  "key16": "3LReseYJZ2iQ447QHyZxeabQGrDdroShzBPffrMyvmwKZq38awj7jfGTVnVhrfWBA8YMhRdgeixUWQ8N7BBHDwZx",
  "key17": "4nPkExAUQ5zhcM3ogCYHxeQHmf2dFVXQn6dgqEzCTa4B7qLCe34CKU41ez53rene6mCbP1a7rnC7BmUsD8FbyjNZ",
  "key18": "5L3o71HazXVXh1ZMVCJPhsLpvzATsKXtHnqj8QkEG5oi8vTQiQHPrfVHMkBBVxHGyEXpRxuWFczRLbkQ1gmzX1K7",
  "key19": "3WtPzRcMLj9RXuQTf7w8Q8EcrU2x7qJwykPqmA6Dj2ZbTLvND3gpoJY7GcMPPMcVjV8gCCmVU63em2gvZ8u6coLb",
  "key20": "3hEeh4uiBuQ8hPBKZUw6jCmcTtfJxMgRktQN5GVZFFyt9dxhLstJ3WH6kbCXs4og9qALTCVYTMaatV63Fku43gEu",
  "key21": "2GUAAzZUYPb5RpKinberUmpcncotAGfsXCZxvYBd7J4jz37emD1y59B1dk3xYKSk78gFcsE97dPUquRTN3HnCnfV",
  "key22": "4K3KnTghoAi7TjPYPJgcL16giUPxLMyKNujAAh1YBpveF9FYy9aqogMhFp9LbsrURVfS91dGXKoRGTQTG7YNkcbw",
  "key23": "3o1A1g2XF3zo6pky8yb5pNEasadRKds1oBzUBRHnobx6y4eKWTKjBRPo7aUioWbftQH157GnEDaLKZACZtzEwvYq",
  "key24": "5W9Ni9ADsEESbo87ssA7mRCsBmC6RQ5Bdp2jm56t3q3m7AoqxnfgcP8W1Bk1Cr9kDuPJjEdUUp1dropYMV4937ew",
  "key25": "2ba2i3Lyz5uYZS6zSHFFtZ888yVjXb7K69UESWDkAT8Ljte2y3igFw4CxzLmjCXBrWoZnfWC4M4Jh1MKvurNbdPF",
  "key26": "3xwnUEcpkgFYCXD1pgugkDQQyRSkPcwB11eT6TRmEg5isiZsamkzomw1wtGb6UHk6GV93mCdAY5WyhDhC7ixSgYR",
  "key27": "XGLacDuwfptHs7jirdm5CSr9GrF49VYcUirpMo4xLVA6NqyfskGbxn18vtaBfZQpE64WAEoPmxCBahgGTAYhm9M",
  "key28": "4GL54fWBw7CTZCykJkCUkW4uThJ6LF6MHKckocD2r7y5isA8zVJegFtD7WMhEf5bMMRVYoqctnusSHTn65YGHYPt",
  "key29": "tyt7KTwdukD3f2oHyZUiSy6Z6qd7uQX8cgZwaY8No1EXA7YQGrHqisTgVjayJmiNYfosXTJhPY69Ps1MArcqmWu",
  "key30": "5wXtMb83x254w5yg4hmJi6pFe1VDFZiHSsEFKSsVR1qc2AEkMwkS4sPsYctW7m5V4wwPvjwMotgKid1jbqeQacLY",
  "key31": "3PMFjm4hRthrUve1GoG75DsVZq5hp6QpQAqcqmNLfuZCMyYFfE2wxA3nb3zaBTrDwDAappNFkkEv1D7gBHexVJ6z",
  "key32": "3SMZYzAHqdyU42YTAGVUn2DGxYymds4dx3QUgDzXCwTJpcbAqfCbL9g43ynGgctoFE1r8s1GUcP4kXmbxiwwQCPB",
  "key33": "ojUAnodC1NiMG6ZhvSpqnT1VuC13k8a563pRMsZJqyatuZGcWdF67mkEmKULepmABeQmChVJXF51QuTUoUQ5da1",
  "key34": "k9e8hDdPGshgbviaFbpVcJt1dtNyCLCgmPeXpmWvsabNmEEM9iMu9gScHm9udR4aJnqAT4Tc9vcrzpqaaTbXbUi",
  "key35": "4RqyJNcb2SzPthmTnFdzMjBZ84v3dSrQZ8euzpcPYePYSd4YaxVhVdaZnMm1RxYquBZ4zyJf5sjAqC5dazjXVzVU",
  "key36": "4yaBye52UpcGRdrnenstrM4wc8tBrYjxTAWtFNfH2RSJUYEYJ6BunCFDsDDLcy5ARLmWWjU8DZyozQXUq5RiCDnh",
  "key37": "2JkwBvjSzDrTN7SGQQeGe6Kw5FKRyf1kCGstg1Vdd7UEFYuhyeuMAsWfpRr8JXqs74FqV6FA1EvDgN71uCYyxAdK",
  "key38": "5XJ1BctK5hmFvdQcvAmGVhbrEY4AYDZExn3JbPbfAzx6HqTuA56Bq9YvuoqTtwjjbSgxDHb5EpXBEg3jtz6fsrEF",
  "key39": "3HsBYyrqCxt9STdeY5EYTef3tj2ZXnAZP9vQA2CDREyJEWMoWFetEV4QvmR3PnUBa2GZaT6iCKNGMzGScqP4nFyj"
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
