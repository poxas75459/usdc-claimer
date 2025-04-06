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
    "mdXNr59X5uNL9zJotrToyQRFbKGi6RMNdQDoC11CbPNoecTA43Jz7LBvcNyDLThw7WrFg5dot4nZ6TMH3zaE7tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjzFqJ6E1zQpB5aoo3jgoAEqhXjxqjKhv2ebHQ8VUAYihT5Vti1yFoj6g47L2tA6ov52whynyWiF2dzUFBkffYf",
  "key1": "65uBG56cxR8FsUwGpECsSdss8cBxSJfZvT9wSfsLHUyGye4qkXtoBr5rP8cVC9k6dN7o4EGVbsrBEmt28m3Y3dMw",
  "key2": "63KjUo51jw9dYY9Am87w1XgVQkDJpe8oAYfrPGuqrPQ6Sco1XSm5jgWN3jEz2j3aS73k5qGYt3DYfRFmYbdTyebC",
  "key3": "2P8djK3c9FZ9RNwHTiCryBTMFR9BCLN37tSq4azjNRrEf5vkry1WEcY38ETmJXKoQi9WkkeVoENtYgprES1ZrsHW",
  "key4": "4osuskMAouMiYhUZ2EzRMtx3AvVesjJ8SqbfxPzN4jevC99h9P9Fv6DAk4NJEYZKwhkmiH8efA2nLYwQs42QzfER",
  "key5": "4ZpD8WZwuHJ2uxj4zhtbsSGZPG1SbSRxLxUoSjt82GeS7LsaRY792TVcyYw5K6uGPq2W1kqgNgAnqEPpMmDhy8jj",
  "key6": "43w1XXJCKfwDpw1JUm9uiB3FXrYwNVCjV16ZB5QCS5m6uCSks5fg2ApXHRzpYDpKbP5JtevSZJxxbWSyX1Ax1ARy",
  "key7": "3ucy2V3mWavcNwqrM1tmhm2EgVGKrTZ6i7GMug1sEUVsykNUjRmtrnw8sSNi1emvcu9fysYekcFuXwebDRpEcQ25",
  "key8": "4691ZFdmcqC5i8MdeYhKS4UQUj2FHFMZEnhW4sQoCDymWrnkB9cC3h11GzwYeNjhVJS5MgfQTMU7AaoUHXVf3hVT",
  "key9": "5EsquFCM1tWU53aHDH3fF8w6dm8aiuwwqNranjXu1KwW3EdUhVZffqMTZVsLTJuDf3Y4Y8cEU6wY1Yc7t1aXLbMu",
  "key10": "5D3SgV5PLdRLkeLohvKkMaWcUbxxEkipy8HFn9uq8k3P1BeDfWmp4JgAsRWJWgXe92pVSk6bzSgfZBdjeN6n6mUM",
  "key11": "2YoH6bTF7dLdQBuJfBZqf99UQU6UcHfxJPMpY5vi6LVhVcHHL4xEFt45QX1oegVFsZWAdmTvYQYmRXuvewsqxDCt",
  "key12": "4tN6G1jupFb1ar52JDqnaY2wykhTA16XMc91NdoiFYzycWcvjLqRiNiNR9sg7N4gLViSvL8gfaawHhUFUG6inc96",
  "key13": "3VRX1HAWVH6cAAXCMoAV2K8GxaAzWEhWy8waJbM66AtNiZZ9qk7eiLt7WhVY2WSn3vxToDis3ddY73d2o4pFvj4B",
  "key14": "nhGuxEQsNRDnxPa16TFrCnzWCAVnnDW4aLQkxnQndzT4xb8AceZSxGiFLZZBYN87g9eU4vUpaAbjbGtmvPooazU",
  "key15": "42T8vc7dgrkH8oHKAMQGXdA94kEtuoKtUREABMLgqTuWhJ2STnGKpbgiujuRzDwus7qwhyzXfaUZbQ36jttWWLhZ",
  "key16": "46kTCWVLwoY6MXa1g4Fvzy6rsiUU6GQYYRcRAaRHLcaQtGFkQNexMZrf2ovvBpSxDhHHW57miPZZ495BzRpwd95m",
  "key17": "3D2v8RfhYTVZFe5ur5GXGWXZVmMKshdzQKvgQW1d3VWKrdxEbv364iqQmTdGU3rKsXP9Y17NP5qGvoB9XM9zUz4t",
  "key18": "3Nbq7fV38Sz12KeJk7xoQ1X1DCMTdhhFER29ATp5nd6A7UiXmK6Mo46QVrM6T6VPnTe8NxU9SQ9MZTeEzzaEspHq",
  "key19": "5Wu7ah2wZr6UzqLMFgfR6U1z89tEiWxhvZPRgwU1iDqEuHeDQ1D3mWZspUXePjQcSXEMv76XsUcHX5vGRgXJydhs",
  "key20": "5Bu1Ac5mCebv5BndU6i3jw4JxDqwcuAKRLaUVnnQD8secJSgAEskmckg3ehdZYac3siFknes3SF4LnST1GXKNTxG",
  "key21": "5ww2EXeUM6VeZR29MJCCTbx31ysjRGocU46vf4w4m5SGC3SbwbSKeLmTeVQbmuM2eWkTXfk5Rx1YPYruNBmW1DLg",
  "key22": "57WnHCWzj1wzQv2ABvpYZEaCJcUH6jhHReAG8NNLWbupJ1jJTb99cJxEuVVMsr3PkZADcV72uCw469MQaAxUGw52",
  "key23": "5s87T9f7mUWCjzmpG75FGUd5JzNHPgF1tompoVzywFZgyXH4TYrobgUySm1bCuNNgCXUFjL7H2HwZybkKehYccbx",
  "key24": "3543AvLXTGchATf61V72mz44EKhMTMRpRTK94AzUeDzA6B1y8eR2vs2uTe4d5LDJ75nZvFupyN7v829BvSLkjjq7",
  "key25": "L21mM85uFDhdoXXSmSP6LfHKGyeZqhemBhkZ5rvKU53rGVfFHReUpFhLwU6jRjauXdYr2kYKV1RHtNfuCQEYwkT",
  "key26": "41eNTNoX4fUuvrBdQSYiCpYvpq4ZjnN5ArZEqUyDAGYEi6d7qzPWhGz133Us4HxyxZ5etbC59mWvtXWRZGt5MA7E",
  "key27": "W7R6dSfmZ6HS57yqB4sYuVd58UHh7DDqwUXjjH2UE1QwkqMVRiBeT2aAWoyuv8AHuoRkUMMSyuckifBy77ipEUC",
  "key28": "2o6dy4Vbv7kfBYaasZBdpQKjUbkCecoBbmH3PWu2g4ZXr4dA4N8D4MLHhgepjv8HvR6UYK54h5WC2NCQWGinijhe",
  "key29": "2JXvnsZ7bSn3iknhTz9hVKpyag3yCARKLUMwY2MoVHMkhJEt9MdoCfuVPdq95xwL3ZdzCajwS3mVTNXEEexmXdsY",
  "key30": "56H5z7snLsHoRmeCnKYD1FH3xs4FXKir5urjrb6avznHXUGi9f91Xd2R9PGJDxPKKpxV4Cdz42rV54a45vHxcGyT",
  "key31": "3oj2Sy7T4U8YZYjoZwYZHwrtcvKiKamoRuBfKDY7hP2c34VcQGfEYmrkHXuzboiRZQPQzMijaV2MMthggt4p5rzh",
  "key32": "Ud3q6YzsWNcbj8CngFoTLs9yojcbDW3Wydrw96FVCKTnioN4oUU2xTdg9rABfmWTxYaDFtJ6FMjPwZvWMA12qj4",
  "key33": "5morUptrf2Wznkxhk1KGYoh16XXTJKUw2JPRCdASbbDmwrDMgbS9aS3qNYhvEnAqmChd7eH8EVwdVVKgZmNLzzgC",
  "key34": "3SYMbCRWnyxj6rsg1R8Cr4WV497cw1Z8jsfMPdg2L6o53fQpKCNghK722fHZLbnpKMroQ8XgxMomQ4yHjgBrUtJ1",
  "key35": "4iMLQvBLmGYGaYb7Vnm23GLMAqDRbHEtFtZSqMFbzsX8u3oDMFjwcBnLQwy9UCYiHGuJD2v89NTb6raUoyQmqinS",
  "key36": "2xx9HDHKjUqePFYyQRt5HJaDyRT7upvWeUvwBUkYCxbAuT8rnHHByacX9gucvH1Yp3HizSZ6LzaXCn4fDrsrPF2f",
  "key37": "23PnSPEJwz2tick5LY7VYDbBE5MALJqLYQMtnRACydzh52cRFjqFFHurgTC5H8WfC1EMgw7u5SiYv2kR9a9QZmAM",
  "key38": "2Es8q7iHZcvcRWAGxzFt6ESEiNVsLRpkysWExEL5iqBuKSctUYcsX7tReFH7AK9iX81KFcphsW1pRPdkRLMP53L6",
  "key39": "5dpNUSn8gpAKkKjRd7DTVmWkMt5VaweyN653bNjcmo8EsnM1SKSjM6iLJGjBtqb2YWhn61hDiGTWc7FRqPhixci",
  "key40": "45vTM1aG5tXe1BCnSUhd8hDb5aW6c9VGSEfNei6sUnS4qcnN1b1FEQJYmSL5aUvXZvBsKFjynJcTg9CpDt23Tyzn",
  "key41": "HVgygtXkNTaycU2yu8auCvqczyEp17vFwu4fV2U2Pyn4YHJfP1vdQqKn8wk5tJFMUfXtV8h86rjLPYPok2G8XLt",
  "key42": "5WU892WtUs25YA94PcP9gVTzZZwmELWAHVxXBKvndhCn2J71T38HSZ2beuSMcZWiKLN1erH551KPLR41GscEENu4"
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
