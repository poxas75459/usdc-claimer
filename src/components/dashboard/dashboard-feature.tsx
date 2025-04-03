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
    "3ojoqYN5ak9qFnz5YTMHfcmcRGrHJ9tJAwqEnCQARLdfqEdarEaaLQ3RJYbUf8xvTUXv9u7SZniWGUhocGfsYAHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rofmQCKMRbrLJRZ9HY5MtKfWXxF411UBfzQ2YCKDT8NfwLvQoh2YvgQGZLwkLvzQgQBLhCsU45YwFpyb5eF3Cwp",
  "key1": "5K2o4zf1PbZKZb6TapvBEJpmw4uKGqP5SbDDQXgUKsfBD8wY82yJgUgg79Pi9jctG8Z94vLmqBkY3TNAyDCoF1P9",
  "key2": "37XaXbjVNKSXehetJDt7nrfhXw4MHK5wHHpvnwEsWRXWMbGvbobor2aQe93dnmFyQXBP3WqWwhwwDXXDov4vJRG2",
  "key3": "3LoaDb8bthP5NNbswNiCFFdKv4tSNJK5oGZ9CwC5zPV1h9xReZxFe3vDDBopQ2zErBwNyBR61kCGw8dLRoYC2g7C",
  "key4": "2A1fUun6NNbgtDCCF3PU45nu4KcnNJK1PUZyWabf5HNoxbeVBZaWQFeyhcRttWq9fR1tN5VZVLcFsvz2AMdCtJGq",
  "key5": "51UxdSYm34xoeBxD2wPrDpfLEQt3b1Ep8x4DaM1MavFjfH2itTNncg7Bj7YiCezNtyrAkuoFmKJxtZcaJa5zk2Wx",
  "key6": "72FBFRF5XUYfwG4LrRAsAEHRSiF1fof9fANoLmowDckNPcmU2qq5oDu5dNdGbTAESPFXryPE4ryzzUkUsE7RCxd",
  "key7": "67a3GvKiAmTdgDZMpSCvXtGaQt63PbKBcsmpkUn1W8J1YV9dc7qnV89ZTJSp4p6TXxEFSXU2oRiXipuQJ2s9kSXF",
  "key8": "6kupo21Na2i9AHDFLkbA61esJ6TErZqz3GazJcDKMct3ytbDQ9igKHKyPpfVTGqdBsUCUjK7pSfxYNENTj8UV23",
  "key9": "2kmomoyrUchTGLAV3pvaEZzVmLRL5cUzdYmKJaimfQPNQCdjGqMNRBEB3MTNyg5pSqhXzNwxkVejYZyX9THe9u7j",
  "key10": "55MpykLuoaW8oxLJsdDDGfewzUnDnSdyU3zhBoMuT53HNb8wsSrrAy1vpYpAKijD2BswBa87vDEK4PM84Lt7MH5Y",
  "key11": "2nZMe6sDwaWrHiiLrb7kp4e2Lpk51QPJY7mXgicpJxjgXXWqGq39xRNguaLDypn3WLRboPpT5Xv9PqSXWjccFnCr",
  "key12": "3hYmxPfe7C2nyLtXsADW7DnSyrZnvvLTUp3s8ceJrgJrKejgsFiu3bsaKXfUoe5ct8cj87S6WutC6krKpbuSB9te",
  "key13": "2akypjSWddQophPhXsA8YWY8KJejjibjx6wqy67VLJe6Epry2z6fPqzcxjynLfopJzwEMTRKtJNvSvBvEUSiCYPS",
  "key14": "4ELe7u2mjLeQLHiv4Ld9j5H7hT8VQN3LHTch232QxbNpbofPo1GcEDheyTmAq3dtUW7DyPWmU7QYf8YWMnTYzXq3",
  "key15": "3zipJmetFhdQW7pcoV6m6yW645Bh3VUdcStLM4XRNLMWhtMjqago3aAhZnzg4Z3Qajoo7kHcxDo8WYXxUZ6m7QRy",
  "key16": "2uUDMwncEGyfE4fDkTtaiSAwFyA4QP4c4eybQ55xdsq5cF6RvRjEERpk5gfLBXexXt2CD2a4vAUJQ3r1envhbtRn",
  "key17": "3ZmqRsm3KpgkCL7uDKMB9W9hcvwAEnaNJj41V3BhrpQGYwcXKVgv8pw339zhAWk8n4cZgUURRdpX4KoGHieTdPLm",
  "key18": "5ZeAtAm2CKUjHrd8s2HPwBiKiP8m1dt8P3K6b35pFReujRmBXXzPo3ahRtG6EQSPyn65RrM6FqEnVBTUussz4rmy",
  "key19": "2A8eKDBVwgU1Wq5XirgpDQfpghuXUzrknPJ3wYFsKEjhtwR8jKp2secTkczrc3kAoi7VBDwV9fe8zfX6XismAQbm",
  "key20": "yMPRnzKKKyShgWr9PdMJzc1SgUBTSJZoZMJ3CuyDf7jh3gM7V7cgZCMaS4QiGxorHGHMwkiTFQPEZX6wdiaVhNV",
  "key21": "oy4YSZZZwGad8S4UxsgoNJ54hNEnJ8erJytv7qvhr32JvyQtJYdMf7RKxoYQ1yCnSYHE2m7kWoZJo2vULhB5fy9",
  "key22": "5GfpiZZK1iP9nnUPbLrGuPQ4zNdjPYAgJdkWH1H85vp6TZxfRRXLGrMRy3TzrTMwNuWFAakjpJiMTQy2GJYqo9SE",
  "key23": "ThPo2TcGbBJRMJgFAhXui5yuyJV9z7yQ7uiUnPmVuRXZhdQkM51At3Equ8joSHTtBP8TajVaq3i5y6DJCJgmN8n",
  "key24": "4fS74jDd1Zb7np85gdyHQV7bAMHJLVyn3aZYoh9THW26WqL6QSh25vMWYk1Xz5VKfLSUxi8xicRQ3W4fNTdK4em6",
  "key25": "3iytXsvNi1LtHh6iXTbLi1sfnQ2zthAsuSqx8dbFpiLgmnFoebiGckKCpsn1dVVUfnDaiiqn5npxEPd4BtycLG2S",
  "key26": "6sXUEXAUxnFC13xBbhhREjYQeGChsVeKHSkEstvEer9CjqRhNVVQbYaPVqQoQju3ph7uAx9AoLJJQTfMhRBdsmE",
  "key27": "4smPXeWTDPSubA5te2xsgripidmqHEMoSXAqKifum9PKzpJoJB2RuDHnoGXxFvJLqwbia9rsFWTg2NEBtfxdXYq7",
  "key28": "3dkcdpR3NohLawsWZq97pm5SyS8vhzT2wSxU4nJRrLGLoa8srNx9sS689bjZQwA49Ev4ck2XncQDwx6NUQ1gxZEH",
  "key29": "3Mz6L41sKBwJGfCDf99PQC1c4tgn5NQi8L4PRmDWr81ESvn1b41osjdLWkqTgGG8kND2YS1U44rBry5EFv9sKwa1",
  "key30": "SVFxHMc1yPutNtWUGUBn8vV5pRBYga2mrc8EfcPEpxkJLHuG6HgLPqYZdWDha72GF16TjKcNswmthhcAtQDCo5y",
  "key31": "5Yqrr9jBDSEsPgWrDQqVz1oefadosnQPrpMPMnfjJGE7uddVbZzW6EWarcnBEKFPdzZuXMwnTaFZYjvU2tJesXKa",
  "key32": "36qybzz4dchX3TixLW97svwjvMzADHyAVX6iNxtuVRFACc4ezAjnVH6xYbqEieGhQEV2wRaP3uZhhQsE7k9bhM53",
  "key33": "4wsZkKJppiuELGjkRHyzSBoc1aDf53q7iuaZD2waDtYGEY7QQUSwYBqWsXytKcnbdnGczDG4HojMAvNBh7XKRkCR",
  "key34": "3JtNQ8jZYzchYPhWUgyMQcYGGokUAMM82zQgYkwQisM9FcckbhZw5nVRYwHCfrFwbRYGceY6yF4AVuUtKRZbAiJ5",
  "key35": "3Vf2aQqGbkwLuCjCarAW6uExj6gVWiUMGh3jyMVCXt3gN9VUkGNBYoUURpZ8rgNsyn6i7SvdzyZ3WKB7a2y1qH9y",
  "key36": "49jsgvS8XpGRgL4fQcdukWfuiHNyP4tY27Yn8gCkPGGyEMLTyvvqzgCUae2dND4QZ6G9tqigGCn11iRsTLXNJrxC",
  "key37": "yCCn8coGbvZ5Z5vXZRcfVszAEt7f5ctijy7dGWNuzZ8yBbbKfWtuzdT7GetRnmakxC1ZGQh7wpy3gb1Ugs6m9xe",
  "key38": "22cquwnazmbcwSTmbQGPTKo8vmh9d2v7vGoka4gdQQZnPTpASzdanmeQUrwdsAeaK9NuBXn5FWyKTpvr1gK8P51k",
  "key39": "49WLSLn5KHZMhNXXmn9s1gt8uCPmZngKNfdfKzs5LPoW43zvVraBhDRB1K2pLzsYfht7fprUkK7tHZH6XwKcCbBY",
  "key40": "rbNnnbnR1enxR2U1vQDADK91GeYjB2pcqXHBPyDctKAGGJCmxrVWa6U9feVf979RSQqHGmwHaH7ZSpkJdNx81Ey"
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
