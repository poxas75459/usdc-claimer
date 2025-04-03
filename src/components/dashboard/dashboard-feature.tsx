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
    "5XCCD2RQBMxpBbpBrYAYBmocEgRgXXZKS5yigxtT6UBqxJ7Vd5YjQYKJwZCMCGhJDyi2z6LmuSZvDgYKvo1BiEFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvzTKZf4xpHg65UMtfbg5E3WwpPt7DUztk2fvYic3iFor1XQ7LnQRyahUD2vJocUJ7s8TU24xwbBWV8jkPvi9Dh",
  "key1": "2sb8zb3dgLowD4GywDd8s3d4i8Qfujo56W42FAh7FQ2rxGKCTJ5UpjwezuPwDkMDXDern996rzc7ZQVsvQiTFZDh",
  "key2": "4qHHfe4xNidHHbvpSkaC4xduZmjLATLbzaTK5RHry1X4hb4vDYmXcECn79CVZxumHd5i17CAGMW2PkyYj7tsgX4C",
  "key3": "3EhwN6phrjDpVoWPoJ8dB4La9A54FLv8Dc62eG3qhQabtgnkqzLCio6futE3DWw9aTtw2mh5Db4zPTyxXc8ZEh3n",
  "key4": "T9R8qexf9JkpGAfuMNN5YpTa3g253omT3sq6WkD5gxBvSifYeFcnJk4MYLWCmK2Ds5rBxsmfBnrkhNXYAR3FqZT",
  "key5": "3uSAGPZNGFBScA25tAiLXUxNh95rP49JAJNGPktGSUpp6Mpoyk12Fqj59Wz94T2AGKfC1qzmsgmytboWjHPDCAjN",
  "key6": "29WuhTYdfhTwhweSyuGERMMS15aQHM6Yj4oLvbaiFvdEDGRHSVGXi1zKnxtnbXqzsELzhe2LsYGFrPCXMc9wnrRv",
  "key7": "2eoE6QUiyR6aSdWSXBDfcs6pRYKnkQLkKxCchEGrwi5aKsomWun3pB71ZRL4S8qfD4H9GBqXFB31upB58cUXicHf",
  "key8": "4Ctm2RNdscAQafiibyMwvE5U3qQ8pv9ntMyui2Vpqc4UQd3yn2fP7ngxPy5a6cTRe25khSdQfoKfjtwR9YEz4iYZ",
  "key9": "ZGdThSJkVTwt48Yt8WMhB7t4Um8PxHgYWVpGW6HXZ6oJykifXeSijyLLGmDBWVA7LRnVNUaSVw5ep1yozsPdP99",
  "key10": "2c48sNSn2NZshDet6rPnU3qt6M9Du78RYBc9imQSNuyL74v7WFtao53RrFiGxuzWVDJpC2qFLeyGvH8oK9zdarZP",
  "key11": "2XCcVZC3ZW2zZH7ByRDf33RN48o5bXgf4Gt6DhQLfUk6McZUdFVjq4uXDEipZTLVaQYvbpPWfGs12DtmQMP2xqcY",
  "key12": "4otDuijjSzfPPJRWVcQrDJvZKLhtRzJZdtxfCey3CZqr6V1AWnrwgWVF4zPXbARWs9oC21zj35CoPfACY2zp4Vrw",
  "key13": "3zsvrVtJG8xmjwpSX7YXXAQ1z36eUf5Zp5ukQpWwizEk35TkPGtPZmFbpXzUvPh2RhqsXAGyxhmApB9eDR6nqgaN",
  "key14": "2my4ova9Ga4NRMx3bwqy19iWBLe9yeKcUMHh936Z9s9z2zMzbZotTTmbSWUvhB9HDPhAu9h3H3YvUewM7BsY2YUT",
  "key15": "2Ym8Ub5AFV5gs3LchK6UK4KKwaCgrbbL2ePxD9XxDjpWSC4jg1zbjJYivNFFYbFu2FLE2EyWvEPDv7XKck3BqCUC",
  "key16": "4znKkH8TWAkjTAJ1Png3WwDr1rFzTzAvPjM5CbDmS49iMh9iaPeBCKiiWEv3uAFyXxd71A7XEct9VfpnmF3HV9oG",
  "key17": "CCGof6zXoXuGwfrZP9hmuq4vxa5UJXL8RJSPZEdB1PGKensEZggvwBTxS9stLFDtRweyZqc3pYZbYp5M2U9Z9eN",
  "key18": "3pf6sgcEjnAiCg9HmqEWhrsEiLtm6izEjCtpLi7rTJiFDgCybJPsfR6YrZ2Do7HCfvtaQUZY3dydAUSFhsNzQBXM",
  "key19": "3i6zYMaT2bSSkqcVoXSUXoaCEJwdx7at4jVAWSmnfv2Z2QDScPHDNUocaRxMxexRRRQ1xziB2r7qT9TK5JrDkFo5",
  "key20": "uUoSyQee4TpaCe7eLxnXUrSUHqag9TrcYcMSi4v3seH6Lp6Nj4ffw9WodzSEhLGveFCDDYJzmbnCqNQ1X2axiLL",
  "key21": "5NGhG2fWrng7qKtAu7RM9AHGujYqnvSkJJzdoxj3xEXvAdYAzg17ppoM3jf8fUwUmCHa7nCtQZWfTmYUP4e2rimB",
  "key22": "2ne1SY3Yok8vgzXTppxfwJ6YWH2Di5ew1xDY77shvq8pbtkzxPwWWiBQJubZCTyaQoafNPFNFo1Qomvs6BfXBJds",
  "key23": "5M2tooK2RWYeKgp8n82noXV4s27XdhV6ubNwpA8FwzmgKcxaeWAtPQCt31eFh9QpXw5kL61eQsyqWfDrJhBRfyB8",
  "key24": "4EebT136T6Wc1zkyuJy6aXcsYrqVmTW17owKxikaXfYjjEuZ2rbUEdxwoSfyTHeBpTBW8BQ4WvgCoMMHBYZWZSD9",
  "key25": "4SV1RFRr9JfTWnCPE3ob8XBgYnV2ZtbGGM8EBMYUe5gxPMxj4tiQFZi8Xn9mRUhAdMCo4jXP37vQxvKGskTQQ3WV"
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
