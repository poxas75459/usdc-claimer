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
    "226Ezma1zc3YEN64rWAwHsp1KYgv12teruJEgcpUph5VFVur3tNtdfCQGyB3D7zSAjr6P4GkpygndmJFtE1SoNTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omHW9AwhnxMp7w5zBeypkeaiozDUvEpNwJnRww4BghgBz2qgdwJYd1Wbg4secsHLCkRZ9ESVb1ZPJe2QtisoRnV",
  "key1": "5KP6MDorSb855RXpq5RGTFSPTCDX3HgnDWd2GBNM7BtFkJFeqKX8npqetRyHT7ieka6htBTh9enwdR46dGBCNnR8",
  "key2": "5UsZeaqxoNgRMEYY2Jsbsa5eNcfrCfotmz1Cjtw7muU6oYd9yfT9xVX4mnPuXPetfsgAuu1pPtqHYydYE8o6U8PX",
  "key3": "2F28LJRUrWpfjxEyFQxigwcCvWGAaacsg1wZf5Rs4LtiywTx3v71M8DGKb4PhJY3mznXGjnNo6i9epfUnJsGCPDh",
  "key4": "4mgCpJvjDtt1aj1ukGr5JfetkPQvvSwRm6jupF4B4Hho9hQNjQvh1agAQqaepSo86wvu5Pt83AFKnU6qsTTbfBer",
  "key5": "5tyrNTMxtUin1kYV7Kb7KHPpwRirukDhtqByymfh6pgwrfVqi167kNHWNdfr7iasdCzfQxp1w6owaVq8ovsnV5o3",
  "key6": "3Zgi5H5dzv8dDMXA9S5gvwRJ56QmWLUerWGJXxkCg298fsjk9y4x8W9zXC3FA1gbBQEpRsBGYJnYhhKx6hkXw2ir",
  "key7": "5iDV8BkH77qTh7etrX5As6PaBGRkGL1f87Gdx4adeZfsFDeuWJqRwQhQ13rcrULwfXmQfdmvLYRRyJue6GGbep4c",
  "key8": "2s9s6mzULU9W49vzpDXSKToWXagpt4fyrpYJ5iUoHRWL8CiQPLeKSD3tBSSJ66GT1Ys9dhjsE3mxNpapdPAiPwE8",
  "key9": "xh51zeHvgVHqgnpYmM9zYdyHiUJBSzffUFsDXLoGLpA4uAUL43RPWwzQyH55sYSWHhNF831TzSem4MhJmfY2eM2",
  "key10": "2DsjaSj7oZF6UMDxidYJ31pnSjCbfGkNF2NfHi8NGBQ6Krywkb82bk9Cp1JqUFuPgGS9f9up8HJ5Mw7SpujGTfsK",
  "key11": "3DLvVryiiS4ZLoH2xFAjhkeV9VweEZmLDqVBH8nDXq3vkPihEKJ8JmFm62RLZFRNE2tKZRwzcUUQX4iQoAQnUnrf",
  "key12": "3puArKANpJa6P92tgDtXVZGQLYg5BMecTjJQ32AvfKVmnMXH9U1FJ7QLh3AxxCRD7m2fsaouvo67FnneupnuXyc3",
  "key13": "5NxhvkV6nq6yxNeBhEzcm79KjK4Z4RyhMaBw6VV21SJicJtFjASQ8bNFjDzQucsx41cLkDG6Aj16DabDhLLww9cr",
  "key14": "3vvSdsibdgtspvDgDmvDAPusV7a3JERvWwAXDs8wiZjTGMn3NqpuvRsmoWeN1jrH8spi4jzSE379CjnfLbmGByxj",
  "key15": "5mhWjdzNjHnQgafwXkCYLtdiJ7Wqi1B3svPeQ6TJ76GAoUgPHCB8fWZ1XNqnXoMGH1L6Gqxb3nhDbGFtLd65YXyF",
  "key16": "tjLDv2AuVewXGEq22FnWuXVDSaTzsoqadH3modx8oEeYyKtkn9M1reFgGj8S7L6WaeumcKZHGUW8DuJEkmF1jr8",
  "key17": "4evhXByGcSXmqH3aNzQQ9qd6JGvvkwLSPzQHdQX6BJsPG4iSsYLxwzwpLsnnAqn8mcgKbnU7tgvPJbiXnR9nt81s",
  "key18": "36koUTGkdJiwWxK4Uvas7tiJyw4GQP3fS7mcfmRQbUUpQJTe7nmqbSbJQnGWHvTU5CBeyx4mms2q2EbL2M4Bep7k",
  "key19": "3cnBJnAc6yCDMSTtzEDzrq4G3ta1qKnkrFAyhzWDii2Mh8J9aCKjoyRPts3dVaDAZAtBimu8Y2LkP3QCkmupJXEm",
  "key20": "38Fkt93ynxhRQBZQoaTKwFE9RU8RCWQ83vvEfuDx7nu8RsiXfRt8NFEg2FPAuWbcpNHpD2uHrBvd4uDYmzoVSQrg",
  "key21": "1vHN4YUk7C4GDcWRQgKn8HkMxVPV2dfEyKWpe1UGMhwtQPJHEjep5XwNW356ZqvGcCDxRmDw2SzRczqwA6EENBs",
  "key22": "3Cnr5aQk2ooVsF1BgqyL7CW6ehG1UWCCKSax8b3akb9BRKwELfDxRZ3RHXPhGD9yYjTM4T8JVD3jBRzMPzy93L34",
  "key23": "3xybrzhNQc9sJD1RB3oyDiv76jiomvbCyCGXXsq9GycCkmbnnVWzzAK9v7UesVVudq4GuVpXksXUKiJ1a1wobmkL",
  "key24": "QA9QCqrMScEDqUr1h45hsPFXPp3iird5HAWz4VyBMd2VyVy1hZfscCKgjK5ae6hLPkvj46ALcinvcmXHSNZy3KT",
  "key25": "2wr3Lf44QeJhp5KY8dV4uoaETBG2uXuNp7fqvytqf91EkfJ8JyHQWdCwiRhmDLFSPfLYiPQH67VwSHFkwYM918MB",
  "key26": "5Hrskx5EpUwLNpAeoKuPd5u16C6uCZevfZkF1Gw9XqBaQ9hVvwmVJngYYsHBK2Q8ZhawVqXDjGTNeqpf3TnyJbk5",
  "key27": "2sxamvVPYEmQjsVqpkd1MAfrgaGLghR78N6yt5KEs8W7gKGoFF35VSRSVxEvQCEQd3pCxECEpNdAusKyvob7eByX",
  "key28": "26hU7iist5ybfYbjn1mLpqnzCfmLCVWPsiLwrqvoboaJ76RcL3w8SzrZPVq3W2y53buhBFuKT4xfyn6L7PtMM8Fc",
  "key29": "qh5RGDfdSDYi2dreBk8aq9H6dt86Jh5sFUHJxMwPeCN7QjZ2WEWMjK2FmRXmQKUDW7uH2du1RBsT54vMMChJ5K9",
  "key30": "3g9RAwqhUyBKirFnoz3AYY3sXi6F2MNfv3JBAcw2SR951me5yHXxr8EuQQg8TQmL3wFjUH1o71LhVBwehP5wgtPc",
  "key31": "2C3vwwq1tgr1zFKgYEmS8cCzDciCB8omSaA3hpPWVSHG5REjPoaeLWT9gvQWe6L9SiSMMTDwdzJhHHw7dW5ZP99L",
  "key32": "u2XGe1qKUddh5Mp3dqHD6R1KzohpEvrbmZwAn5MT5xGgEYKQLgVmwcsKpRQ6XgnxFRw7Y63ZJMxi5R3TodWN3sp",
  "key33": "2uB8eFLH1rSBgc6esG3zFAKH6pt5SqcPMQmoDepSDKosvqTWgWhqVCtBD4PV3y8pdsv3QAytpCgSdtvSCg45MRcr",
  "key34": "5Sf2JWyygqnGaKUpLFZ7uZnAGK8p7S5YzaTUHz71Mfwf5BBH5ECxozqbTrB6kn4QePLZAGFGnTdmy77Qj98VBFSQ",
  "key35": "3QTMox8EKbzABcqKbFtAQQ3dqbM23avHXaitwoQhYVXPJEhGn5dep1bELaWLnTSFT5XSxyBwoDHta5pFaDj6BraT",
  "key36": "5rLh51vL1M7saEyuhZR84oUe4tg97e4zYZc9LNAzFHiiVRWw8EEZMKfufQy9eHNTqYGzPedj84rnAhnZw1ELxVvd",
  "key37": "2iAeZG94QNzmqtz7JFNjKb5N5e6gGg42ER2G5qphvB4tXbV7CHtriKUwZwJqP8zzfFrALTmDsLe6a2718KZnnJJD",
  "key38": "2MaaCVeH5C426CY9M6q6b2Agph9D1ZjUqeTRMuippJmubv7UpRwCA12fWKXE1qWRQ9HzXd8tGWPYFXqbch5kYkyT",
  "key39": "5W6UoVGgvvJ7j1cr4JBmXzvAo4zqtnnrkTZDTE4SpQvvGxGNojNPZiDS2dMGKeJojRqjCf5oB7QH9SpmTg6Txw8j",
  "key40": "2DLLki2XZvwqYy4tNKiVK4UvPStK4dcyYydbTYXBj9hxRRmVoL94cHB3NdLmtQAz7v2pGCU7JNe8Na2Ei5ERSpsN",
  "key41": "4ZX86D5wC7qi6kwbkjAg7G2WJ4coxSXaf3Uf8b1xQmGVurbJhwYzqgGdpqQoxixwaRGNBhPeq3V22S2G3EB3p2zs",
  "key42": "4j6HLpcomT6f9TxUKccbS8B64tep2DhZ6ViyxM9UhmdRTXs6ypq5B9RNXQCwj5yaZiqVEEJzJQf9zhEdKFmrJjVT",
  "key43": "2TYqfbEedHV65egUgx7civUvtihxQ8nQGQa7RAX4USrAFVkgs6nCp4Ea14nFGLGoAp1tiyY18iKvHTN8JqjUL1zC",
  "key44": "4c8kSss7ofGNhkkby1zc3LeU91NC61GApZfwy53mALB2dwqqhswLUHHEjNsz9fnifvGHpvBE5QCQZraqQDfx6XeW",
  "key45": "2T3RMeMwZNPvRxxSxpf2XmXsno3rP9TPLD9xboSz5QHJ58mjE7fFXytjACGwRXXrEvsX4DZCkeW4VwhgVi7zYCyp",
  "key46": "3v3hRU1KxRqFho6unuQmxEi1eBU8s1yDsmUhujk4dtc4TodvGfq34he1hYUD4wxkBZUMSE8qmUgZMndi8paJpBPq",
  "key47": "51ziwxiYv3KoCHMkqTwWaJopX1j65aLVWAYLb1pWyuTfuLVWkyBPkcMyNfFgsFJAyJTdyfKLcJXoAfQGornWM8CS"
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
