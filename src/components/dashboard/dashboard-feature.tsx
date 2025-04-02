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
    "9z5YG2ZoqynvcFpFzM3i79gDFdN7SA9BVar1q5FVMPPXPryHetRMvEmXEJbNnCDSDafB5j1a6L63ig2StjagYPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92gCQvP3wHjUNQC3BPMXokqMXQXwcoXLWaQeVi6zkyH7XkDkxuasJPCD4dPtZvxRTh6dEDHsw87Fdtey2i9KrxN",
  "key1": "2pUJzmV6WAEZhtVPrd3i13n8A14TQ5kgtxBWxGnF86BqUWc3pES8WAQowW4456BVWbc6QQEoVSXmCjs6S3RC4bZK",
  "key2": "5wmQoPMmRHBEDzYu8K3F8mBthNGC3s76xS47mzArEMEKhGZxu6JqQnLWRb8UVjsVJamLCXpNeGj8niCnNP1MYYxo",
  "key3": "Q7CNmeDaA3SqhK4MZ4xn9KSsafDrAWb3pH8o9AFpj6HkdN636vaTbfrtqCoXws5o8rUbjHcLAk7cDRLbdR5MUFo",
  "key4": "4BmCPkQMwJNSuexVinGUY1QZ9mycS9YqzCdHc6fLApWQfYMsNvvaVWAQDQ9j16iaEZD5deAq1C3ChyUNX9kK8oNj",
  "key5": "4z94J4zJ88TrL76QwAoarWf7uMQG8kpYFqyviXyHBMQJoU6JGvhWvvPhw22rntGQawHB59iPF9PH3M9D1dRtJULJ",
  "key6": "57xRn6HVLyTAZE4j6rez6S98qgwZThXHEwP6hi2rCeKTvoTGUTiND76qtM5xhw4UAvfMvRB3yzTz8juTWkwwLToK",
  "key7": "2uUnWSyUASVLDKCg7fiGvQzAhWET85q7H3DQXfMhuqvMJRxfdNBCx6PYpDKewDJwW1G5CErqrLS1JKzjhiAYweuT",
  "key8": "5cE1p6kjNoNRPfh7KtPJUwdGvCaKUBsrry8pjrjsYDfLUVHELGwdUASPAh7SYbm1aJidbcqzk3KVf7gFKJpFQCQa",
  "key9": "2CQAzfJmyZLFkLteBKKFjvEvGateKudVtsHRsCsLmRaMxRdZyYVd6XsYwGvgJHQQbQbMTxc2VqKcCdHXPwvSuC8W",
  "key10": "5DvFsNjJNbsSb2vrZJdvJ43RqTmFmGeySR1GoPzFpGFEn5eBUzoswqN1AwzWNnTATn5oodc57JqD6nwyyYh2KPq2",
  "key11": "3eehP1Nd9zcE4BBFUVPRTjbe271SxszbkMhFgN7YXqcoeFvpht9UPYE4BXxo44ZJyBD7Gv7wcvno8K1fdQPA3Fcb",
  "key12": "4yW7CeS4rpsCaHVCxSuXJZ3W9ybPDS12suL1RwPz9daRhry5TGcRryDc5bedkAGs2rgaB6oePVQmip9tinMFgasH",
  "key13": "4m1VEq94hNj4aEJQAXFpcYFjR5w9jVasxEcGZTm4XYQn4fStfyaBYQXEuw2w8EY3TNG16N81fie8vamteVbg7BoC",
  "key14": "3vnfaM4eMwdgv9z5LXL1ZJzZKPFPtZqj48sGoamqzXiny775hjctPoBMH27GaDiGHeoEuN9cFmJHUPhrZzE82Eor",
  "key15": "35f3uS65jsxY2ySrLD9qjQky2vnxEkUjLfhwq7FVhM4yabdCQvptRURyxmCoTrg91hoiyaymbhGCj6Sko3ewjB7A",
  "key16": "ooyHWUMRXZ6fqxmTgiwPn8eWPMeHHEkMpTUrMYxDpCwqDEMKuuiqzGzVjYMSUFReETDnqBw3x7LYHJbmZWdCUmp",
  "key17": "2g8erze9FstgZuAexWsGWpm4hAZXupQu6nZKBh22aWA5dPdSekzVWczgAufkZu9XNopGXTYRURfcvaYt3VqoSyL8",
  "key18": "3LCVjjfisqXW52S6Kes4pA4mBwV5G441DvM7iVXPEpa9GeQs3SJKhTzp2eVNwEvhkp1DS4oNKfjiPFjEzmprCo1K",
  "key19": "21Aq96Lu8PncatQ1b6HVtX8zhczKDMh5mFDk9BcnqRjkL18CgJsKUaP1hZNEYZZSzSXRJ2LmTBXNEumWqwKfQrGy",
  "key20": "4iif4BT9RWs8m99rovEGHZt7fJUNcCn4T2q7bJGAhgyx2qDf8m3o6MXmfVaLuAsXieCLM59kt11mYpP9jiZwoVk7",
  "key21": "2QWuFz9tXmijDcc85bikUycsWhVFfqkEwaqRC66EyRofZkEZjyTYTdRYhSNjphUiUZawzbJcp35BV87Jz8WnRaWw",
  "key22": "4r5RH4tYttRAkLukjSRVLSmiNFfs8Wn8Qw8we3fTmerPntLBjfxCBVcx215keWLSTGRQfqyL3dxApSejuMsKrFxR",
  "key23": "4P7rz2em6SNsqb5DXG3cxPfXi7rdDjXRjsAztiV35fY9F2gWq7W1fcYo2avXYMXWxUDSSQDCwk7PiroKoemLyhhL",
  "key24": "3ky3xfVqjZdnt9bJRgT8nvbdBTpi2aYatZCoaEXB7ysPW8eBHMjn1XyTvQpRsYu9XoCkhY2d97imyg1RnFeEoEfn",
  "key25": "4ZoBre6k7vno4Amm8qq9NrMmYL6gwXcG9w9dG8JpBVf8Hq4L1TQJeXiuTnK41XUzQ9vTBsiWitxgU2EHyrucpAh6",
  "key26": "2fpQqTJJ31SQetkjJvNemugyKooA2AoAVcggxjhtBWSuqgB18kmJLXs1afRMNutY3FBD7wYpzjPvFRtrhR6WX4mM",
  "key27": "2JWw9jw36SaJW5nxcipK25Fqa8J2wBuEEL2Rmfs6hja6VEwUCGdRmSULwF3CangBySfLo9ArXupnfsHfXUdZUd3P"
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
