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
    "3Hxn1wuL9mg7x4YsowJZX5iYaVwQrbdtpE3RaCxGs7SPfUmmPpEBpVRnUXbuJdkEbhcMZdp4ncsWc1Acu8VjJwwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiYpGgAimuDjZVVnMyUF9Wa6j4r5UQMxVJ98YxxJ9PF22BGEbbFUxKc8QMcavpva62xZzumGrXckE8ruJv4joEx",
  "key1": "irhJF2ukgNscPAt4RJ33ryuJbdLMmAJcLFDf6SkjRgyJTWK8qikEAKZfbtjSz667ouErF81KUWQHEo8nSstAeCK",
  "key2": "2SWZyxJdvxrkLDeoBgRxrxpmnRxixxd5AyeTE81TAqP5bg8CjSSAYyGEyY4GyHqw9a3pjsNDQabznhjXVMszHmpm",
  "key3": "5o2qnXdWtowqEVkZEfkro7k7zTFUc1bbe47d3wMRTdn4w5us7gvjYGKMLDARNSDNvEDRHqEohtDMnwTBzFC59uis",
  "key4": "3R4ZdezJX9WjYyPebxNNfuKFH6tcXHpjqdSnNGvXowybSpF8fdEqBEeEgMrg5U69QUyNNQYGhfv9KJsMQUiySE5D",
  "key5": "3BHubinqAncbhi9dsQFhCM45pMMsxMiAg8dyzKZF2fi4RRmvcSjKYjKYt6eWzmYJc7jZi9eTztVWPWFRs7RB14BB",
  "key6": "4nLorWmRmwhvG7aCBkfupwvAErTmEUCGmsgc5R1rUmMZtAywfhaXLY8az9sEEE7j5A5dUDrzFWLmfCvCsVpd6QV4",
  "key7": "5AGSkZoLQ3L7BRP3reKHKttbZdLukASWnrnXDqpZCTsgsNJAFzazA4je8hzZwCsvc642CFDfkeJpwW7AUExhv6En",
  "key8": "4ZY8y9JKUvLgCBeXBkMC58zHTZGWXGUdyPHjUgY3rdjXR9beXeayn9jUVssBRPFZ1eJXXmM9zAFCBkhkTWXCS1uC",
  "key9": "5Yt2suExnczwrdhuUUPawPYnHA8bYirifd8HAAiygJfUWygLviVMihgbAdTD4GmneSpZJk5bzvsxmc99yaUsSYVB",
  "key10": "Hjiyfv26PEJ2F3fWFcsf6aHaMpk2i9ybieN1uzsBXxJ47z8sr5mpsFU1e2PkKDmFnSaB54wvJ1toETF3uuRA1Ez",
  "key11": "y2oELfCUGZDwLYq4qf5JPbwV9mVThoHxPG5dwU1wwyeshPaQVaH4SDmFGEqcc396xg9HLNb1Xwv34d2dCBRXyLt",
  "key12": "2jSX1Tb4z8qtXwfKPpxe5B3zXHddBMTAykJp76MrHhdVUwqiNFEsHGJeEpx4GCwUUg5HNUMM6T6WgjQXGXWRSLAt",
  "key13": "2MUEmd9r2reCAFpPsb6uxamBEKqJugrJ6L6ofdTC6HJcU5NEWF1GWfbbJXLNdrwxJMzdWnVamN1wEvSvFgbQ6csY",
  "key14": "56WVRieqFkuM3hjbRF6QtapSxaaBm5472YWPhkXeAtftF9PJiv18kXDHSHQ15BnGTmt4LyD429w71BYWbrzHtoKf",
  "key15": "4JtTGmNAoB42kjnz7vB55sAnEh1SZ94rpzC6Piz4TdJHsykYeR4RLTUSKdgsHd1NV1uerk7MCPZJzZw2KxojoJtt",
  "key16": "5cXBCySXZ8TAQHZWSPNv2cBZU4KPNKHGey4M6ky4BnEcoFtQQvpqJbwfFkJErGhCL1wGHyMhpUY6cHcErV4JUNQv",
  "key17": "4Q4eGMj3vFmBZmkwS8qpF7i8tRKkyKjnmaFaaC7X89MWSWrGtsVVRMgXcR6CDsE5C8vX8GUg9ECXtnR4J61TEd1K",
  "key18": "5fPLjeCisxfgmyfoqyFU9cx9xXWnMkAqgyWhRdig3HyHuFFbJneGgTV6ehRMfWzmcWbgQmgAhx3q2Udu7qteYkg6",
  "key19": "5adQ1JUo8jXaopSPe2kiwwK156JpjLr2s1eKQwSmYDdapgkSGYqJ8zv2KWQaQPpzr3o39dQV3ArndPzJ7C7nevtB",
  "key20": "4quo1zaKt5XQaeXJw5msnFzj79sPP2rE7WYtPLDPXCbw4LEAxjL3aaqWvE1MiXCccwQC5G9V7uMB6xJSWYpk3A6C",
  "key21": "2TK317fficfnp6pJbEskK64FitHbpanj8pcMuBie8FgtMswdzxDvjLWyY5brgMmV82m7fySb37jS5GqdAEvqnSSe",
  "key22": "2sLVzD1v1Y8VVovRkzietvaK69Bznptfuxj349BWuoAEXyFdmYaYLDLNFC6vBW54dkf1pEFJkE9omZQW7SLfNJTY",
  "key23": "3v3rQFTE2vtMAnUYAAV1HCfboxNPfETyVKB1c78auR5ZhwuArgxydm39nZ6gTP9VZQTvKXRhYZmAqGeGpfPbCetD",
  "key24": "5WfccB5hFLQXJejzuF1HNkye91akykwm4GeRRan6CgAZAUbzj6RFQAYQV3BkpcawbawqYBgBb5pNwsmx3ovVCfXF",
  "key25": "2tv7pWr8n8F9jVUX5FVunVQ3RCV2nyyGYwGoV4JR3ymmVbbKMj7Qz6XUmS6oogmETi9retpkeYQyaH9wEbXHfxnn",
  "key26": "33AcZdG74jY91u3uVdCgXS1f6eojpSKXKzg4ZNRnV9CZdixtYiHbCVsZhBZuTcWdLqEE6A8nDbCoTrgZrWf71GRb",
  "key27": "4LBe7nRhyLvA9BtvUAHAdRgZRFMaAhrnjT1zmwyJu654pP8kAPUJXwTsrp5dyS9BvcLUhBRNjyH9NbFyX28VwxyE",
  "key28": "75ZGmUL3s1G7aiKQXFsimcj1mE9cbACsJRBZRTb66cdXWfPjodZEYifzEvX2biBQjwTas5gPJUkLVzqaNPDGrti",
  "key29": "4ETmDyo6YTeNKgidovnB8jtse9NkvdehRSozgGdoRxibgzxMvHrdg68FFxErFGPiqVfqpgMoD7HPwkUfEdnn2qdK",
  "key30": "28qS5qQrCWu9a4aBkTw8dta74sPUDDFSdM14wN2xEu5E6NbH79MCQuQUsBU2nB2xHPSRVnKgYWwuMA4rUeTPpGvD",
  "key31": "gUM865eFQipaYM4zP7xFHK88KwrPZhiGSUEJdV2mVAhmitk3bwVn4U9T4mbE7Sn7iwDznuMVuQaKiiPrxFeGGKg",
  "key32": "4zER1WU2kxWp2d6CXkHjT5tKjytEysu661WNYrPnvYfaBQwpMj82G2btxFnQhB5eJbKmVmutZo7iwwxxcfuF1NUt"
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
