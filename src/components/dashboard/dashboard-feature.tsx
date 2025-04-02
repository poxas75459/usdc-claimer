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
    "4mcawt1Xs84d511YjxoLPrCQZWAquq8dM6MBBHKDS3R3miSdNqnJoztioNPfwHX1QQ9BUMjD1reb3kcgxCXfphL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wndBbbCQ1VzzXwXsjHCd1qTi4UPPZcG9PK4ftnxhaJTeoKvrqUV3YeDjvq7582NZp3dbEDFrtaW8uEqGzpZZEy",
  "key1": "22rmk5dce2E7xUjqTT3HSZKyPevHUuGQJrymKueU28LPSZtrRExPLkwDNZHQr8wDSAN2eX9q9uqQgtPXBhoQciWL",
  "key2": "4rtXCzuLDhJRDw5FNB3dLEfHhpKQk9fkcRi7AvxbYFFbHZ3eJj1xZf17QQE4BrC4ZbwctUeutfS9QU661q5gJrSy",
  "key3": "tdFXX1aTjFSvmLHeuuS7ajYY652awhqXxSF8ZAAboVgGspspVXVnh86et79Rw15XzXitwrijTUSJpphMhwGi5dF",
  "key4": "3spnNomitkTDvNQULccXMVJJy6SngsC7inCEgrxAeUZEiwYkGZNSsD5bAzjiX9wK7xTEAPZxCQfdta7DnF1eLQ7c",
  "key5": "4vtpwfDbY6f6MXfyb2JhxEBJADHAqAY8k4M7hsAGMYaGeyE22dtu4Kq7N9rJ5ATub9T37juaMAJg5MyiyQd9kWFW",
  "key6": "V9Agd1CBQAYhq4WjZiMM9chuWkH7k8xCuBhyKgmvTfXPZD1oNYWR73YLWyWyqbsydsKGLupqjQ17cLZjLx6mJpF",
  "key7": "2xgMjfMx2DKg85mgMrZMFAM2Yse9GRDv2yhwAko2hvTPH4fTus3hC7Jdwx4Fb3K8rPbu1NNv2QHDRAjESfHAu6C7",
  "key8": "4heGLEKq5J5W6m6xGd9prC1i7oFfSup7xkzwn2zT9eTouYRi6ey6KLZa3edCYf1QES1xshaAEAfXRKC3JNrfreJc",
  "key9": "6AFBroVkUXjzLYKdTGjFpnVUWVsvuLuroPUFWSHZppMiJgueR2G1VsX96T6tZ82JrLNhK6i8U6Rg7iA4jrkW5U9",
  "key10": "9gEW3eu853RyNN6WAFx71xSArd8Y2twWNsjaZwN3brRQrhq7mEzRMwo68h6PhQCymaiA83ZxWWjMJMpgwvGE8LC",
  "key11": "4J9paQDPUmndoriurEMF47ALcM3yNfhVvDjXc3wxpXE57uSaVaeoZdcsAbasZQMdE6KodK6ceHFp4FsetW5RtSFn",
  "key12": "upnCsqB6VTcrS28sb4gwqztqoT2wFtkW89koL1pgtNQaNVakaU4Qo2J2TiV1d6e9v4NNho44ahKVG7Ce5xCQDRz",
  "key13": "317hwy8TdemSNvdQiUMjmD2Bib2ZQeuZ4qvh4H2JFpJhbUiKnuvv5J76cMbuqx3GgwzzayrNQCrfAyxsdyfrKek7",
  "key14": "2xmnknx21n1NPceXUYNPDPxjQtkgKwp3Lr9kHBs3dBwwvciZZ74UAKHkbtEPCr8M1Lm4jEiYk9RkW1TYBtnFPAod",
  "key15": "jz56f7iRSy94W3NqHT9Xwn8LNraUjax6LTHvLGjiSqdKvk3s8pDveVYCSmrPKGzpSfPh8HKuoRoDpeeGJiEEmyr",
  "key16": "62Sjy1dR1HCxC1iMmeMLNYUbzLkqeTEJS9naXvqVqyyNjeAkTgcrVAYAHhp7Y7dJRRNGHpwcr7fbjTqtJSPbEe55",
  "key17": "5Jpim6dx1DLzMbmTfSBrtqp9cVyNnNSHHXbvu4H6mvLZnZT87HXAyQwt86jpVx31ZrJEeWYWbPFfa7U6zNNRsuHd",
  "key18": "3XFnHrSQP7o1haxFjifbq2cYrkJesEbjiFGbiESa8yRLjUQ27XvVPYhq8NmQddVQrwXLq9rUCB8p1JtL3qjCCa5B",
  "key19": "3zuWpQ51eRfEe2vRJ6gqeaSA8kt5R6BGB5Xsh8GRv5sBV1nHcMkuRTTcBCsvBzXeLbyEtZAJJCtLzeHuNMWMqERA",
  "key20": "3Z28nRizuzsw73RbDZnnbv2XF1dJf4H98SiYxcbyKZPFCRqFG9h9fRBzTRysWVgS6op9DAr4Af6t3DZ4cSkUpUqj",
  "key21": "3NEV9oujocE5LXnZCwaYBFCEjvVRSpBmxq8eWgiYpE34pTGHNeeCtFttegh3iubs7nrVTmFryTw5jfPNvNVasoFF",
  "key22": "2DBq63wBN7pix5aWsFHB6w4CHpNPoWD1SL2AYNwwJXVjyNszowCEZtT9WMtcKX5CvbEKcut6FGa9gCAtKbCmQnFG",
  "key23": "5QrXUNsztMtDdU1E7wRsEPoQnXAz3DzyLKEq4kNNNVhPa4tXUGFpju88gGcS9Vi9uhzKKw4TEw21114sqvUMooBX",
  "key24": "2Jd8G1vo7mYhjodrCXBB41auuiSmvoZtzhGTcSPTxMfjhSCb9Uody3RLuhv66KuAZy55Fnv2vJumUidXMaumRtbt",
  "key25": "5ciHPBCSL1UvUbGc11fvDpTsFDpnw8sMeEYA83YPTx41Uac49jm2hRQK929Qe4f4DSuwHvfaXVCh74xisHV7BDXq",
  "key26": "J2MZLuLA6KtKKHrLxc99bMnRDuPPTv36LkusrGsWjBzFMRK47XRfH5mciXd221ShkH2Xj7P66DNUy8SXwfEYur7",
  "key27": "51KhESUSHE8LktDJ8EQt9yCgCq9BVZDPvHH6QkoWT6gL5bSNmvTnLP6PdjVG3USZSBCigrgaqU2ckrcive5zfLMr",
  "key28": "3uhe2WC7tWbyZPvtq1qWVHzsYodAJ2qUjaG1AaoB7nY9rQqz4YmRy1xadmnP9VXmFwBHyaEu8LSzoTUt5NRSacSk",
  "key29": "3F5Q7cng424j537k9nYLjvz95XWQhRYyrjZzePViG4RQPTaxKUptsATHeVMqYZotH5VZPJxg1JaG2wZcARoiK73M",
  "key30": "3rY4195ceJ3GwHCe85M2q4VJUtiYt8PpmjNVgbgQ4ueS3a2ikpZfmQNsjtS2c8haX3g4sjvA4T9NpSpGJeVsUvPt",
  "key31": "5SDU4rGryXThU3vmp8h5carJ4EJUeFoP9HuJKk9NiYPT4YWcak32tQVsMRKxnWmuipryFzG2wpzubeqT5XznizRQ",
  "key32": "4wMA9umxWPpSsTpnWn4ugg5yN4YpdRTCHLV7TPzW1SRSgZo2Sk7DoVwUD7AjU8KytRWXCeocXU7iRTKKZf5QvUgV",
  "key33": "4Ucejz3P9ypk5U8MALJTFNpxNZm1tMQAvHv2LrZp8QV4eecx1kBe1TqDnWLo2AsDxEZAkQUPM5Xpv66ZCmiZfy1h"
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
