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
    "3mMspo3naUBEnaUdDLk49S8z3h3TzoHhy1YXFvfqydZXh2way26DdHrBy8tMzXLvdnUSercJqXCd84RuT2zmLKVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NdQ45Hqtj3zQVVn58XNog5Pq2QoxXZUSz8V6hE1WnARfKTaEjA6RnFg49FfAaYLN7QXqAVxHvqNwaArouXeuALH",
  "key1": "SogeQo4P5gAMDpntUHGoV3Vy1gbMD3nYgLvzHQwuHMoKAxZBjAxSW97HVm7i9C3nu3NPBxVJ7xHsSDPPcZyJCoT",
  "key2": "4pWkeNUedS3r6xjiZWaU5STbVxDf1YHPP1WQXQNPSdvnRtexrr8G8fuEzrczA4TjSpN4za96RF6Zr92eEnycjdgE",
  "key3": "QAixtneDZL7mf9u2x5LsRUyiFJwuob1F5WEnuiGqnqt69J79azA7eaNruJH4boGdm3JqibUETZeo5ZhHTm61iHJ",
  "key4": "5STypMj6dKJMnuUPx3X9bmL7JXteULsRMz2hEGnTVXNd2NVczL563m9JpnjZUf72TAkmEBxu1EfmjndDjaPcYX75",
  "key5": "4XtWg7Gu3xux4KkTpGkW6kocgpv6CfrfcFfSdBBmA3CAAQcXQkVcwA41BNW6aDnVxEBVpfRi3nzzCc5dowcvBs1F",
  "key6": "4PcwHWNqgicMhbi3vQLZ2zkdFNeBqbtRocckhpEPfuGfJsAz3v5TKBxdEbEitxtDDo276zsT4axNjB11eUzRgHj5",
  "key7": "4EEJaC6hen8WzbAiVK7ruTdyzGSNWEEk5LFYKugYg6E8E4MK4vkNscPgz2VDzQMwNo9ziAdJ8T1Q1D4vuGzTua4C",
  "key8": "2zpwf8DSCiTMH8sTEpBie8SAoWVUXoPFRLRE4R5eFGvw3b72hV5h69rUC3yh54k2ZDnqUsmrKa3R237HZX93twkL",
  "key9": "4DTPvWfwMS9N2Kex1VGU4fTza2hC2R49aosRTVAG7n6CtSMN99u7JbgEC97zfrjsFjqJUF4HU2Wk9HrENgJGbuk",
  "key10": "2oLE4vV1gLmnNRB8kwAzWKQA9WwnUPGKtoFygH1RjSSM6CrSQ5JR1N79VWAt8EJUH7sSpmTMm4UuF1br3WZjmjqD",
  "key11": "3bQCRTZZQ8gchjRJ971tUtEi5sXbyaJPiDhKSBz95JxMUvjZTAkvANe9L7YqeWDdRfpJAYUAnQs54A5D16Fkjwja",
  "key12": "5Aws64Ez9iecN9UJd3kJwVsGfnCbcpTKoyaR3VR3DSSWhMbWVZa2uDyaFUYD2L1NCz5jvzPN8wnVycFwrSed7q1N",
  "key13": "2SnMe7x33s4APPK4tqFvjKaX7RX7nvZZ7nPzbZbCpRS3dkC4jYuw96zwmpYikp5ZeRUrKVMFaLCSzNpwekT9VNNQ",
  "key14": "5KKTDjri5r2s6SHeEMA8QVXb1HNaGB42NX4z2GyW5MyohtvioQhdx668YFQmmiw1CwZiand26taV9AzvrBaJwKSM",
  "key15": "36xPnsch8M9eqWF7h7Az9Xtt1P2is6FS3fSvLg2KCCRh8RFbkdhEZt37At5cRenhtxaLxZnn3T4rx1Gu5z151zUe",
  "key16": "5iUwGFa1nWhSt2D5NShtuPjyzw8E1Yyyve4s33WiEtQBF7RW1mAmJKD833fKAD5M4WS5AwyuUrodtcXWGeULu9TL",
  "key17": "3D4yTWfserbmGzV6gh1UiropkpuVUAyvFMn721ZRRo5t1FNimBCongVLkoViY3mC91YTLCi4s998y6f3yTB48wTE",
  "key18": "4zkvvZLbFdmEwQXJ2h4Dyg4R9BER6hSxgY19g3KsWaZn2eKELd4ovEyRDpj3JjRSvrfr3BqHk7pEo3raLyZnsAtu",
  "key19": "3Qa5u14biAws9NZMJsraxdKMfGrgXATJTb1eGF7hVPNcveQS9hySSnGdfNWEbDwPseBjxKyeYGLfLSxypdAZ6MFN",
  "key20": "4upNTU25mWsKjAZULppAnuWF3A8JtdWnVV6rGGWjfUkp3DuVAZ3hBasxzaUq5qc11MzSVWvHW57oyWoW6bxQMu5L",
  "key21": "4775rM7oEHFRXmk7inZxBha7AiAudL2HzH6EtvrTi9WoCuNLAJzFgLTodjAATPYdcLNCGJDKHotktfbhY3xFHcAh",
  "key22": "2LEroKMVStLhdk8r3mLRtQWun8F1iSnZ5bWbTF5XxXW5L3mnS5pZyrGYAAgut7jsSetNPsuF4TNjddRrEYn7mJ9S",
  "key23": "5ve8CWXMS2Rvj6z6wzLsvqWwzpZj61ehuFzA8E2NWqapdNdFue4zwGj7r926CKcQBgs4Unm7HzM32k3i6d7GKncG",
  "key24": "3kRUNd1HJX4mQMAJP8ELSCLMjhHLJhdjxCYt2EGhA8L1c48X5RzdoiCthYzMWYfWYRgz8DAQukogGunuyiExLJwo",
  "key25": "3ZNAAXZRvj8b3PRLTKHUjTRibfTugzfSrW6ubHMDYyERjp33Q9UZUQ9WpqvfNox1P9vQXFn2yQBAYQoSYoWCtQA7",
  "key26": "wScBcLf8qexNW3CerLcMzEP8JzEbS3bvG8uxnwnikeEaKgGg6qpFoJRNz5Wa4sCcKjwYKuwmbBpFtWRDDxhiq9y"
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
