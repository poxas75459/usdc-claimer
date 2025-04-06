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
    "5t1fLHrCQcJTCTwtmLr1Wxb5YVcdSCEitgzgHW6EvmPG1BoyNnB9jC1JVqdqX91PmPraSL916XtJVCKwtwzxiL5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAko2XkQcEkTrfUMmjtgrvSNjUkqcLiKUEyLiAaSkiu6XNhhWtkNvfTQ6vGKeU1n24ZnctJ7fyMGGrQiNyo2v3d",
  "key1": "3LYSpCrDBWh2cTzQXZQnGbvPEFjtczQWhhzUwDJVpa8kMShbsCzWG9mqY9TtoxqKCkDXABUWSZjFy1MTDBtsfWWo",
  "key2": "2WogoBZ4HvMyPupypJcM7dzBiR8QL7X2YzwVWYZQP21XxNv1LyQSnCegxGzqCidAegUgLVYGFPdyLZw2orY7ewW8",
  "key3": "393NX6bgGqz1P2k6oHLyFYfa11mg1L8s37iKsjHpGMvBspRwjMqZwUbPqkkogGt1Gu3w4UitDwH8wWTGGdEzyT8H",
  "key4": "5mKdpNDB6iQStPo6vm65c3j5KYtt96twweXihz6tPHDy3ZbB6yTDzZLoKaqiKgfNM2HYaf6cqon4H5jACdmFxFdw",
  "key5": "41qyJinANDoEk7DgJYywdt2usTcAGLN9wW4o5bWwreS1LaPgvJNtLuZ6WfEDEwQjjqDmHquUASUCexPnbKr66nz1",
  "key6": "3AykMTpEWPGvyTgXsazyW3LxPgEdy19aVaVhym4Vw3h8HGCREh2oD4wBRZuRGGWFv6qigy1N6QK7Ak6fpJchzuCD",
  "key7": "4VjZKPTiM5dehZMfNFkMxjKX5VFDuY5KwyC8ExMTYjZqPEQxBrvJmJmvNhy4SbJNsZUdmu4zALasfuVPJr6CJ8Cq",
  "key8": "4nyjZZYfkLChTxkTC6DfA1pTXeK23VArH4Z8kCddpxQfRmxXMrbPFSLyQpkorzHP9uhW2iFUaY7UwghitCrZ2i5K",
  "key9": "2HqP9KCizbda6kkr1TEwLTYDimzAjV2FdcjhmWKbgTzRnF1VSBDnnKMfPo6tWSN2ZH9FrcmRGdBgQWonhdAQNvLW",
  "key10": "411zaMWN9KiNngHNDQppEatyNeZgeoMAhVXvfSBf5KgdQbAphrYNBDFsRTPwATW79Qf9BUVNQ9H21CuRoCSen21q",
  "key11": "sAmsKsomgTcafz7PGyrtNF6YZPr7AoHbfCkoogoAWpQE87G8avakugN13s2WKhFhzCPLi5TPTbwdoZDLcLs8ud4",
  "key12": "2nHCzLKLE6ef6xFzykE5uffBHjRVs6iEiAsLafQsKMk8TFy9FZN9EGXkw8vCPcSBrXd91qa6D2DihYkDFCSdYvB4",
  "key13": "2QR7k1n9a45VeJkvfQLEufNCSe8e7cfGQPJhf7hEc913qgYr8tJ6H297v8nxAmgCrVMeSEhf8bhB4Cyhxa6WxzvJ",
  "key14": "3Xp1XB5m9yxEUyx89VCzgKcuNo3g3D4iCDa9Srb21RHRUTdDmJr8oRnb2fT1bQ5CJjwukcqsgHgtK5xnrrFX5m9U",
  "key15": "3yMBS8KKJdXczvUiGEBMSaNnhV3u1HEE9RjtW9fXrpWphCDxmLMwrDv3aLp4HnNUPsw6YN3CZrdLJWpFF1AD5QMq",
  "key16": "5ajLZBi8WgaByZ36u87U4yPwuTFQv2s4isTubcLW3sH14rpwncESYCw6MSoueZKA2Ju4Z6FkaQWofPqkKkA7xJtZ",
  "key17": "zuL4qgJtnVVTeVfPirJsRH3RasQWUm7ZmYCsdwc444jf9WLmYUZW6cAawGEVSG7CkCbMAh5p75EsKWtRxMfdnUr",
  "key18": "4twZCjiNfAtNQcGc6riDrXgstrsWpnmhis6WagoRP5sKBN9GB9c2eD6P3zq5fA1HwttwdDTjQxLTFyeyJL5tr8pN",
  "key19": "5V5RCywA26VXeYu9LuFVi7KRHV4Gz4sdEn9jPYDcSvBHK6fenRUS9oS4td4fBvhr1NUt5p7gFiwzC29sk5eFP929",
  "key20": "yKPisQSk662wMBuzCsB2xza77qxCYN5aorwTSv2r1mopiuMNdV9zvAiKmHDSMnzSB2Z3yTBCLraPW3EAoKT6XE4",
  "key21": "59iggCLWYEc1Dpijp3bCSA9CPACvL2UUjfcbsSFFNsXFuD4NfgytNhThksXKcVYLa1weXLBn7HQjumUc2mo35j4v",
  "key22": "2miiufNLs94JWpCMFyyrUZsoC9bnCgLiyDqZjHNGC43EUh5TkXK7mQ6rsLRSFsuB9C1RU5NPfJy63nY9ZV6WMdBT",
  "key23": "psJE6d9ZYKuHLrvJb13b3yjdBGFsXnLLuXm7ckFEXF9QeuwQAzoXQa8NiJgaWtAE1DoyyqjUmcEGcnwLCJnihdL",
  "key24": "4nXkT8CnsmUzNNgLBo5TjQNXxkLbrL6SDZsvbZDiWRQj4EycYLtCvnHNbfcnE3doES3Zastncdve8k4hYbonokBY",
  "key25": "5CVF23gtLhPsTj5U7nTR3PjoFkLdUY43nfeQrJHz1WoBNVdRoVDeMdQWJs6Xy7YqkmJh5VgA7cG2iziozFngWoLP",
  "key26": "4kAuR1gUb4Yo274SYTMXdH2Yq7EvVYtkWwtM7LdgFD6tsZStSSRMjtDDjv6jNJpPq91tMF3U5yGsBj42FgBHbLuQ",
  "key27": "yv97yCoZThF8RdGDnGBvFiFZJzkLtmqvbbDWu3mXwN3ZY1Dr1r4Rs6oW9p2paLUtWXvvg36cYcHEsA4Ry9sruMH",
  "key28": "22iCPdDpATYbpPf6G3Ef914GkXYNCmrqCW4Z4ophDQbhbDbXuLFNQeKYwtzBm6w24WxgpjFJxZxUWvgY6cUE7Ejo"
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
