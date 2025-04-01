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
    "2AefzgHMso2J2YnDp8gDNkd5j9iUf5mShSwkUMWTpiDtwWAZaopsw6GSPvA16f3AxzKyKqWwnPerjUhcbrwcbxcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8LxhJ24GMfrsLNiP2d33akojpEKjQMTEY7mYX5RM81MELE3gXPt4MCaTiNFwXbEXgNDfpDnPjXzAjx1NAJozFE",
  "key1": "5vSLrxY24o9rkVFSK7bzrESEmN4LQq8XfpeNRqoFguPNE6LkPdt7rXoJzQndoiwP52J64tKfx6MHQztciquUXdvN",
  "key2": "voZkoMgBpz62QKyAjB42bWszbVH6ehYJcVHjgsMc2pP5bFHF3Z9WzzvhNeYWteEaHTy7vbgoTsbhvgFSFxhFWMr",
  "key3": "23hewmp4b6szfyRQ5wowZ7P73cMzCKZRCpD1GB62wjhH3B5kV7dyGHSceZcrstuYbRNJHK9SsjTs1ssSfft3aovz",
  "key4": "5LobH2c5Sse6WsXR7caKzQes59a7sSKPT6dYbau9qShoTGTVf5QaZ47nGAm5JBPvJ1hWW8PXvcYKH2b7WjPRYCke",
  "key5": "3Vna4Rznc7fMdABzNjUxTuC119UwnWov1c5XyqqMJoumZGscrWTf5v9CxA9d5inAmVd8o426TExpw6jh7djm7dQK",
  "key6": "3YxFX2iXx5oHga3kQman9hud3MEs7HEgyEy9N4Rfk2CsYwKm4vZk6vXBKjhcyyRqAW8SYHXP3XvdVcttaeMFBS4T",
  "key7": "3kvkcHD6BnwqSWZ6quZNyszH1AUZ2aXwU9eXwWGi8J2sk1K9gzLqnSAS9MaV7K2oWrgS9XSecxvUXJ3svRxUtzQa",
  "key8": "2z44jTJNdaqABBL69qW7Vv8fp8Xhu4AReyokBexBsHyQ9Ku3wv8kGJN4Q1eSQ3kksmtLWuAjb71ogmeLjw8gF1sA",
  "key9": "2uDK95ymFqwMAkkSq23Ngoc2jmb9m3yBx5LKK1wfpJDCV8C2mm37qYPE6m5aonza24YtvTMr4uCfVPoaYBB5J9T3",
  "key10": "5Na4fj6ENouUMtq3GWsJXsrLjAaNVqjV2fH5AF7ZPbTYom78HN4Jp4V8kJ26obhLGiY61tWCqSqdrPpKSv3MR7hg",
  "key11": "4bVPXZgspPDSbhNQwiDeZ9T1tc3DLJ1j4D8maZmWFjEThS1SyG1HEpxWwoNeiVKsyrx65gK5RfFLkEJS7PP41cGz",
  "key12": "2LyLHRo7N6cc7aqTBf5dFMzeQMwZRWbYWRvTeyBJGzcyFqRpmrH6CSHz9UUXFG58YPcTLWni549ifenhfv2hWDqY",
  "key13": "4j1MfgPUFM7KuzW1w62aFQAwkwR1TAAbzpBozahhMVT3andijdxRwvD4nFQYhR2a9kZWH728mpVPeRNwf8AwB9oD",
  "key14": "62A7qA5JauiL57Er339ThAmR7s2hF7VM3T2ckQCwkADKZ1uA9MP8eEn5gFuba6PQCzN8LNpgAyUDd88u9sVrMEiN",
  "key15": "2YTbtFNqUyihaHebTFiGtyionhC1kyWswUJstfTSpKdo8DEfxqigwCNEpS1LNkNC9C5WrPGUXJBoC79CNY1P8KMr",
  "key16": "23VHLyGiH17Px3DtzNY8ySJAR7RGGELJmmCivQbVUq9DjGU5LypNhsY3XDhsK3iEJQqLmTzubLfg66hh4Q9kAYmB",
  "key17": "49ARkWUHbs87pj2nNcU3aHHHYK7PmyGMHEwG42o5Fe7obBYswirXxpm8hRD9p4HV9zhfQe1BtGRRaTVH7HGUQdx9",
  "key18": "pmi7Kigr3ba6P6QQjspgWa15ghbvJbF3E4V1zTnrrSByzuXp2Zc3DCZyFxqaHWjSN1NBo3EyqsDz4jgAtbBw9XA",
  "key19": "1epBVXaqpZqBiAmXqdonWqnYLGPXsvYebq9RkyTQih24pow4fLHjgxRenc2unEALcGGXKDnma1zUDPqKASuVpbJ",
  "key20": "5HTJ5cASsvi7ajq8mQZKgGHJ3Sr2TGYWjWUY2CBFT3faPaKupmxpRW75BUtPWcFpRsBMbVgon1RrSuCR4x6kjidb",
  "key21": "A6j9nSrAuAkNNDRgquaWS8G41PKzZQ5oCjxQprzWycZR7vucRdvfhRagG3dbX8R2MKoaZYT1xaERNSHmWmLMXeb",
  "key22": "3sM4LXjoC57NKWSFsdmrYViRKMV291TMJPrpKFBMMwQ5JcZekNhLS3tfsRPz4iYpNYjj13wd6rGFaHNQsh1JUNb9",
  "key23": "5hNkV11PZjWLm4ZBj4BcKrMVbD5T4uTPbcXmxEiY5EbkMBafx4ofZLWjkegPYRKtqTEtqydcEdmdF66fiCSVz6nK",
  "key24": "2ydgWUkoHEzLGmoRjrZKe5t1Wz6FxfTgbfW5rukiyanRHFYUXCVp35Gm6q2gJpKWfwdbeCCEyMEGnyMxEpxTraop",
  "key25": "3tGxgFmY9mgxbZT8na4LgSd118cZBGF5iYoFiFWBXUFy5EwvFyPGtaGwNV96Vguf6rR2pCWnLf47ZfHNvJK2pg8P",
  "key26": "UH8aEsKXitoi25SyNJvvZY1jBAm6aHBDtwpsmTCNNsjMDQqbimjxb7qmRevk9RPoSaSkTrubAJdGnUYCKdGYi8P",
  "key27": "37tnrbUYQkEmZTz5QGLRQP4zWeirPCYyDyKP3km1vy7Z6FvVHLMReAJmzTrPvZADzgRpA8XT8FbNhFDzLAqUv7gS",
  "key28": "2KokrsPZmZwgLJk8Z61u7DebibRcaS6qGRYNvxfWMb2fpsH9DABZ8EtvPB3khsu4qsgoUVPu4qA8UBzd3KwzuB8m",
  "key29": "33LvZRS6Rt7QHD5Wy3PcrgapqJLwqSWqxMw1gpHu49ddmhhgU6BYfxMvHsea5yBLRxcmf88AkFnkuD2B7Du31sLp",
  "key30": "24HBBD13H9RqStNj4SZkpXBUT4AWBs52zWsJPYPxVpMxdfiuV1upLzF65GiXSUy6maiwtrneQq5Ynao7h5bL2hiX",
  "key31": "2MNJS263PyLd8wdeg6gfwScAdYuyvzp6HFDbr12aFoZPW2J7cJQwruqcAUD1u66syjPmA3GSJc2fuB7fyaH8EPey",
  "key32": "51cLw13u5Q4acNAP6YyTieSgnCRinhRtMj4FfXttygaFWivXt9ymddE1kLUA2MbL5Qpu5kKBYfJRwvdp7YUPG2hN",
  "key33": "644hyBKPK5oKkpchtTzpmM9V6XM2P64auNhjdABokivFrcGr3vXXojbS6NeEKsKNJdc9KRJXaXUNhsL3EoxKdgpo",
  "key34": "2nqgnwBMh2VGzi5eQxT7wTgv8HZ3LgmYZUjqNc1nNbVQbM6dAtpfAuUEakLFW1WNsJAnzdPgkQXThKCkm87CfUMu",
  "key35": "56zuyg1YWfjzztDJhHjd7cDNL1ygsbcXNeNCsA2ar3p1unVFEFJYNWSLQph1zyCBQWhPh1UZBNy6HwPScrdUW5nH",
  "key36": "4ZVzjwckDthPe2j6tUAjvUbgdowoq4J6RudV6KFdUdaxFvTmPC3bnbjypEtF91ofAsXDDod3UokntxanaBhJ5M8n",
  "key37": "5AsTSL1vqpf2HvwvHiGYov4scbES2y742DnF19qoaB4cvJ4dephEUd2mLDQWf3hstQWwd4SxEAcZfbyoh2ZiaZbF",
  "key38": "45UAMRBZUkFYYUjCzhkskuTi4PAuYbssDX7neVnNKYcqcXbFyy8CUjcaVzevZgreBC74wseBMK89LDYX66PRPL2g",
  "key39": "3gjRj4joYEBeTeqbz6VhKLGTyw5VRsjqzEKuNnrrRhxm6rdR5BD8nP8TjcohnmQ8jwgFc7Prr3WANeNyQqVQsSR",
  "key40": "3Ckw3dBoiaERQRoF6QENWuULCnfAuS6qp3V4sjvfcgkSQKdH5zv73NkLLCUyu1Bg7Sw6vPDWJvYSpB86B5udmhnk",
  "key41": "4hqYfC9evAB9XeDtS3ueifyuSpu4ce7umSFwrYCKRwWMV3ds218FgKcDdEadz5ja6K7RrmMj3Dam2CKh9W1oaC7u",
  "key42": "2PWKgnXeN7nJUa8NLmmbB2crViDKWeRSHnAVfNrpWw6aYQEotMtGGw8A5rkjQCtu51jZAoC4tcT8YF9nBjcMVjM6",
  "key43": "5ZUT3YjxzzZSW92TrkejqyKXNciRUGS579dADiJXyPWHsBLkPzGmspHsaKnAe4MJUcjTKJMfF4UBnzXL7Qfm6cow"
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
