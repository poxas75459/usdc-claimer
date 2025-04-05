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
    "5HkDBghnv9452tRnrBjkwQbeiRdejMmvfUwAbAZLxeEdMc3MBumDg8prKT9J2fbvg73G2y33jMSn6S6LHVQGfN5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXq7ndT7dddA9vefn6xnnLFxhBVyur2VA928gr7aKqn5ZQfTTbivcAuwt8CmKw1k5FsAMhTs9nriyPbG12P9xKv",
  "key1": "5RGGu8a5nCsdYPgVh7nABghEAonukzZrStUFxRN6h7PubJwfN1TFwFEekTCsZjVQbMEwdAM2bbD67nHWnNBS2Aoy",
  "key2": "41kJgX7PNhDfrVwTLHGxkroKPZ92jChbyEdZ1hpQUUvsVf2mzjMvUG5bfUyy5PikBFRNzWtjrosEf3BB1kQksW8a",
  "key3": "5GMCZdVQS9pr51b2ppu9FVEhhusvdQZfbyk6CNLfJeCKSt9dqcNzNZ1ASKbg331F7ofK2iJpNRQWqHed9kiJjZos",
  "key4": "23DBghX1rXvrWNkEXVoNchnGQYfu9V73cJn2zbvNNVpZLmRTNwaWv6fPNCq554JTtH56E3x2HrzBhqEc8ci1Ur7E",
  "key5": "3uCfpBpgHFja3PGsW1H9FiuVJnb8cQF2Y1rmRSWziaAhaZ1PWdpJSw7fGdVfG4vv4oUr6UDsDyCSzYywp8UGrmx9",
  "key6": "2Lg2TBf8TSbNUPgAYGBD5qxRNxUeRTm5CkwXVk16XKbAwpwoyBaPZDEKA1zrchz8yhMRZ44ngxs3kcY6CsTfZuiX",
  "key7": "oEsKeve5P3CFJV9xgkA4X29F3Dgd3mz5rrsuDS39Ky5EUDeo8yZB7H73tnhLh99zEMBFq5wPz36tGouMauoWhTU",
  "key8": "26bzGRptDXJjeg7WrQpxsGZWNAnyW1vjAkBC4Jb2fkEh9dc9zjSSkUxbFPMVxNnbzyzqQQEdABstQJK1Z33J6o8c",
  "key9": "43uRs13XQQiEF3Ki887y82dVLruUiREZmp6ghm7dAyyMb7KxQ5pUDt3s4QmugDKpwiqWtDDW8UUEFvaycbyqXDSt",
  "key10": "3Wndu5dFhqbkPru5Jq1PckfwVLnJqDvj9TaV28HSkGfmar19Pg2DvBxysF8ZnTZmozjeHbvsBAQ9u86F46bFJQSm",
  "key11": "3m36R1t69csAKJ3GTNjiR5YsJVhoRem6FXKEWwCSqu96uGWKpSBMw2nEUi85PQQBT4xNh3Ch2eizYuYG7YYZZkqe",
  "key12": "3psyMYuHZBh5yT5uBRGhdcbYAzwktDZ4GR8FbkLBZgV41deoTjeGaz7XSWubRsVYWo53YCyBV7VLeyRAmNh3ExvF",
  "key13": "ZtvN64nxLJQ1cYxyWw1BuLEJbf2bLekAUqoKhuS5gcBN9SHNJWutmu3uhpGhEWfoHDcgirZshJQYGcGNnaxdh3C",
  "key14": "5cRTLYDf3zuwvgLgRHLJtGkKebDf4id9C8zPqa2cD9wKVA7Jgkt1tcAYHufBmYJJCzJXHahY1RhjQpqK5Jf1M2yj",
  "key15": "2DVz3cJ91P5Y56SK148uZ5Z5QBZVwiHAfu6WKUdZ3RLA1FC6PNbJjn8yUYrWemiebDjDWqPPKJeLzQW4s2npYq2p",
  "key16": "5GdR9dDdjXGVKZrwv3x8TfEkVXENbRsT6nT2uRAuhh4xxEf7npZBj2K5QGML3rnxMh7vu36zvMy11gwPHZ6YMyy3",
  "key17": "Haf9zDMQ58LyS654yoN7JZoCAr4KqPBvnEiVWLdc21i4k4QixDbxccm9mmpe8S23436yBEfkpt2fwJKyhQWoVcD",
  "key18": "5EroD5uSWg5gJLVVmdUQnSjnsRFpXtGHvFweBbFMm5tmBTMo6sGpA5iqJSNxLvXQtcXzcV6kvKzyHCdcuUxxS65s",
  "key19": "MgCFQNwn6EiLscgfcfhTtchrsGYwt3MDm6eXRZCyMLj23FFfjxRGDEpk76VFjGknEU4ZuKqTaRqLPSagSpjev9u",
  "key20": "2DAzP7APaHSaHbmrQnQR8nKjwaY8B7DZMCviyEsbtdcZr1RA3EvwFJsGkGNU3ZEbaYh6SqiLJrRt3VciyAdQN53A",
  "key21": "4QHiRC5r9qa7u5vdC5GDSjk4Eu2sQ8Aa6xZLoJzqxdazeQutVy58yzbkBHtvbPTmHf9j4XyusBe5peaTrag7iHpK",
  "key22": "4oPwgGg6iYj88cPRGfYwYt1dxpf6Af69LC8cr6UqA8iTRwazg7YHJPx8RwegWKiHqX59RQd6am5GRrjLwagcpBKN",
  "key23": "4WaTXwmixEZ95gUs83kXstAmVvobTcEfjbkjzwLgRLBPwRXb4PwRjDtjxR6j8NodAcmoj7D9NRHmrsszcnG8KFiW",
  "key24": "2u7J14jdSsfyAH6u1JFZGbzkoAyS4HYFtgzmmCn9TJP1q8E6sKBjZziNsTt7xryGrGAq7o4VV2vgoncN1cXsKw3V",
  "key25": "3vRiMR1uREtRgyWHwrnghYLGPiGyZVcyuXsRKfgzR4vC3jJoQAoJVqVVPxvF19CCFsRfXLgaYbe7tMUpcxf6TJex",
  "key26": "4FEpQJmGXwtzwEqnjWvKcz9Ptej6mUCg8Fveeuyyur8voW5jn2jteiuu7MXnbYHghDqtcmWNuV95SzEJzxcRVPCM",
  "key27": "5oGTFYTJEBbtrg1h4VVG436opNBwSt4Xf2nwvF3jBErzS29xVk8pWq1vCNVdSFky77LiMoTg7hnz93zZ7XRRMkqU",
  "key28": "5ucGvV3bpn3w6ebzHpgeQwQF2h7TKwptMnUYGiagzceZzHFnHoJuAF4BdvsosyzvByUQpEJxe8CyFDHuNk31gDe",
  "key29": "2ZuHJiXhMvbvEmBsEthkt126APHBXLPoxN8kpCgPfwS56bB8yU9iBCHDTeAiudmR6hcsqFwca3iDKhGa3wLtBBK9",
  "key30": "4yxuPF4ZR8g6r85nBtNg3j73dis5qwEQCfvg2Mre4Pdi7zFBuBhTmW5BzBQZwAgr1stdNKjxskmsHMh2sMv48cYY",
  "key31": "37cLhMiSwEiuV3vq2sGLfoAVqhTPM5hoz2jgAhjyEJqJdAKcPR4nyPYS6m1Lisx3NiGsZQESVP8tgjap38qaWC4Z",
  "key32": "3tc2cirabrCjkYuh2i4WMrcZSxjKvWmyHhHhW47TxnfCDzDsEJt62q52fHxajHddUxfVTysoFwxi7Bvz3ppHf4Vh",
  "key33": "3fYwGDUozd4JskswcQpGpfngv9vvZ3P9FmiSyUNoBxwGQ8zgWyEV19Mk4EPG4HuQxhKzuNwWMrYLvxt7rPfvZR6j",
  "key34": "2bRuaRKEN3iFDRAicybDxysTnqFjfEKMguaCjtFfrPwLEGP8WRfmX57bJkwDXKrAgbpJgNzSf9xbaJ2JgUxMd1r6",
  "key35": "3fhXzsNnby5UqU23PUbEmDiFNGbhbhEswQ4APiJyq2NyZz7SsWesYGP3EST7ZgJt3eJdsyrTXw5ZMMvQfnvd5xDf"
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
