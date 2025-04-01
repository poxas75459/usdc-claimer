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
    "5rStWSpHiw2on8FkQSMHEtxd7KKftucdDyJAfJzY6T6U2gom2j7rhTwSiEyVdxUV3NMcuaAUHh2KL6sGaQPbfZ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFGCdJfjVc2R4fC6RKeGR1tFCo55FV9dnNDHhUveik6c5Ym59HJePWMNrqrXirV6KWkxr3ip4dMw4oQNetBganA",
  "key1": "pdHiKBiNJPyTjdMH3W893zKvTE8PUSaHvUntyMqHWb8j1bX38kzWCauNnTmvTGw74DHd49myF4EVjSAKRkQL4pX",
  "key2": "575hdZet9iFDZFBfQjsLSSMcxCcKQzXwZABMWjzoKQnSV3VyGMafiNiQUvENo4QtsxPkaZTcAGw39pbTu4dBsoT8",
  "key3": "4LkMmoTZGVDrXqdRP8hzFJgGr4TkFnRJ3mB16n4pYqyvXsZwWpuVoHuuYu4QMazm8KB7UfKXWVYRsJzFVpa7JboD",
  "key4": "44UAKa6CDNALb3B3J1qf6RBynD8ttqVLP9hiKZyYyULYLbkNRJvGWJiXvWFrP7vBznrXJiP9rLjnc273isjfVaHH",
  "key5": "4f1oirDSGDifmGEA9syHLARXzKZmu6WgyGi3sTTDjNcGy2ZNaL2bH8Mg2rfHPUCUADc4r4rr281mZyr998qJRJXA",
  "key6": "uZZrM1ZUFEx282nvqJp1iMtyRLQToZ4XtckjezuttoV3NMgrp3VQPArDVUoVGXMahVzpH6CZz9ReKWyEsSdEF44",
  "key7": "5Qvb9kVv5yA3xzgT8mPbkVv68287VtTVbnDxqS4y6UoPc91LJnH8ao5jUKjAbCNLzFZm2EW3uQBGDHTnBBnW2eS7",
  "key8": "2saTSaRQt5f3TXb5kAK5BEUf3CiKyRtfmvDb8TZhLW8miBpfUHwgJ2Ma3AvyqEofPJeBZN6zmpPiU17LE1zgpdd1",
  "key9": "jEqRSLiTxyxDgAhYMouaWoHaMUuxmXWPkKmUELJCtJCggwwA3MfsohMwtDwptVF4GkQk2sbPm4Nzg8efyW9gkFh",
  "key10": "2FY5bRJhv78QVhM1b5HSFm2ZH9jD9xFq1NUVM3WA8en32HbaP24HGPfn8NKDyXW7B2CHQwLgufES1iG3r8wBcaH2",
  "key11": "tdtEKxAwPnZK6xNEE1Lvgb7N8EdUHT2VVKD9sP36rbodGoEtsA1puezLMa5yQRkvvaQh5JxuiCnXV83yBFicxAj",
  "key12": "2qV4aJTKSzwXZX9XJApwfcUpYneGx8VhS14Zmj8kuUAzjimm3uNcUPz5XKKpQaQzd8z4tPm15YXBzzNeWtMiDDiR",
  "key13": "2tK7qSTP6fJVexWX2JyPd8ubXZowWK3bu7RKL8rzdJ79jPVqDKxZfUkrpG2QmXGGTnQLA35cAbEic4pGKJSPymsw",
  "key14": "5ovNzQ6tc6TUC7DKGXcq1q75KB9iwaUt7GqQb2cC2ZGSJyenaQfcHT5SmDF4Z1J6sumfwbc8fWPu7onWBUHezNRL",
  "key15": "5szKGQYV7aN1Z5Ft2wDTEA6U26tMNfiZ4zqtPwv577nTYycHz5LsY2dTxSgSJVqWTZbXGYpX8xCAQDpbtwhonvLd",
  "key16": "5fbJzPWNZd1VXv8reggsUgemjfWUYiYetzZDHq139WBDczUVmaHc6u3noXSay1K1vmzu9FEA9ygewdL5EB6YiJNK",
  "key17": "4sv7iNLRzJJGwAKQn3heGftWaosPTGY7SQedRQP1pv5bR2wB388oP6mGEVKhaGiyMNoxLbdG1ouNvaD6K7E7w31C",
  "key18": "2uvAM7a2Bwr2HBHN52LSGe1YfgAniHAzJio7Cd6P3oWuBJ3A5KxLYAWWKsApyWsq2fYVWVXcG3Vf3PWsGNkxrMbM",
  "key19": "4qyncqeLF3Z7gh4ZGwsmreXbPREsaudDL7R3SjUJzwnw4UugmdHfiuSe22T1EUzZfNqLNms5MetMPrC76oD4WtHA",
  "key20": "Zv5ZEUWVK1aZNBg16sepFY7K2gVsSPeiwEsDAgQxL9rKncwNfAUJbofb7eUK7Cr79pdE4RmxMWDDZNyXHKMnAfB",
  "key21": "53ovv84AwwGpUDiS5UCDkvDcSYzhWSKqKEPCkuwo4NrhDBiukRxkCqCrB9Rwn2xQscy3nZufi43USawbszZSafiW",
  "key22": "4Qu3nhoZGMZ2CVSVP3YjEbLveuM6ikkDVNneZHnNzzhqXh8pMowfobfV89FfuhREMQMrz4X841LYQ2qmmSF4nGKr",
  "key23": "45muDwTx4eKdRdBSbKDqZzv9iwaU5JpEu6bupAqnouJm6NNTK9d6hjZyFvp3GfHaVdFTn4W77HMcLQc1cnjjykL7",
  "key24": "5FEAvedGTxivRdK2LdonwxUvMez2FgBmu6rmEiioxTcpWSS6qcDQM79DbRiex6dY5nh5dJpssJajUeFcQ4rubA1X",
  "key25": "4S9mMfY2dum5XSNny1TGV3MD1nqML2SCdBoSAvovoLKXDagAE2ZKh5DSuPt7YkimyNFyZ752tnnGFeXFYURPhauX",
  "key26": "4uAy1hpEdz6UKryK5T86HoDy5PDdu1KmAx5haUzvxDPSkrJAcGHsyJQmfzJKFKbJuntSZXFni37u7LhwpqPc712X",
  "key27": "2PDtriaKHbooQ3FgEqgy8BDRotB7KigevdU3Bga7xseV3Zt4Ak3krk8NqNcBAwzz7bjkzKXVWK6HEnEHm5gYwyN6",
  "key28": "3zVs8dGLRe75ujC8g1yyruZpKAAb2oXBLfoAJmmm9bCCRMxsGcPAeuhpEtMUaVmswbMKAAMQEiQkNmDCeHJ8LBAS",
  "key29": "36uGw5K3NiMYDBpMXrrg1aMfsDVfJ7a2qK1jWjeoZNdmBH8yGQHjFgjz1cXgY2JzHLZxt95x35WPKYsg24XFvUFV",
  "key30": "Reo5saL93wBp7m1yT4XCnzWVuhpdXKFvSQRtDYqiDkonH7NgEEqtqNjztukB5DoviG4ky6sXY8srHDoAkaYXets",
  "key31": "b4hoaZmjiGfR6Woex6enYvWMjSEWArDWkUZs9a3KmUTxBTb2sgEgK6Uh1j5PbR61J9dpAghHcnX8yH2CgGKsxDz",
  "key32": "xFDFRzuqNVTu6VTY7P633QLo8x9saoiN9rX8jVFdChef6cwsD3oHuaaKduBdGHgFAcUwSW1nixqVBCLXKCiXAkQ",
  "key33": "APEy9sizeExVdN7EGtjENvpRNB1PQqGAUoseJicn4e23Frz6ydXMz9yxAngVeqvZ3kNEUz9erhhnwf3fwPoW1RC",
  "key34": "52pSY596X7n9FfjF7CHrwMdUxAHK3R3nYaFxQ4LVBFMGSJTR3Lb5jJawtoet4WWeYL2iEAJf9tGaCJhUoiJhVw7q",
  "key35": "3uE84i1gjMLnToSgCQAY9ou3KUDyKWrjHmQoZRUod2rkVizSf8VtnvFkwbdFvRfmrBWmSybZuQDmcSPbaFzsXjLA",
  "key36": "3Ymen4gMZSmyTNn1t5g8HyeanX5WGkMshw1KV6b1Jt7kMHeszHrMHnKsMZKLAdUjfbgjimMQCfVF2MaTjPke98bV",
  "key37": "3tmgaEqpRaWP8cKm4DsrAEzFD1myndmvWRj7HbdzGfwZKERYToJZwjT4xQ9ezNEHUhC79sNkppUz8q4MMM61DHNB",
  "key38": "2PFKGNG818dtQ2UVbTSoZFfYHH6pfw6VwDVXMFKRCLFrUdNPCqhJyuaJAFZoXh1y2gQHeJnXWk4Nsd5AWb71bggS",
  "key39": "1zZzg4pNMrgJxsq67RF5C5Qx8oa9hwYwtdRt4QRsSY73YUKSfyjJBc5LbL4pdqYBsDhcWx5nHsGX99HuijDEwMX",
  "key40": "4D8xB8d2xDm2y2eyC6tHUB1R9Wo53iRPtxqaP94iVqWL55FCGDFegfV5UtDfXVa1FPLaYHWzZdKjJFPhXKLwW8VE",
  "key41": "4tPiNJG5q7ST2DbFsVUGA4bPPUhDZVKYU5uvE9PrBtBnX6kG5AAnFKg2VXvFxJRtov3iNeExbkRH3AMSfLPUzHHQ",
  "key42": "3daYTBxUkHdJYpBFQXxR9nmsxAF8j3jcfzKudYRfYsi5Tf7vhjRT9eu5zAgVNY7JFkqbV2PmwX443XPFUG8m4YaA"
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
