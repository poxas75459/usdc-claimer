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
    "3GNuNQeJNeiErvERinjLWz2japU9X8a1HNsp1GL6d2cuoWXB1trcjCDjzBuQTnMnA7x4E7zftexW1uC66qVthNJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMAsHfDLzvatcNzNJ5fxZLrxnLcLeFGs3hdtnQwWqgCk85QfuNLvuntVdgwUuyn3ddUawjLJQH3Q8WdWfy5LCwn",
  "key1": "3R5nR8XT1w3bkwRSiLXGUCHg5rUPaW5wEdVA6SNqJkCzk89WPeMHJ2W4y36Vhy5UdHfuR8LAFJT7Cg1JEn96h3GH",
  "key2": "59wwdtL3Hhuta8R2hAAXypvH6DKTBtqnkseYu3D5nG1ei8DBUbEEZstVxLfahwNsUKxFJHWJoP6JLCqaXWmx7Ue3",
  "key3": "2t6dL4MbQkb8u7mecBEH6ptzNWJtPeJKjm47rxiLWeijHG49qJxfXA4dzM2GYYEfQQJUzC8Wyci2SjdE85c9zZ3Q",
  "key4": "4DFnJxQgk8VpUPeMhiYXyY9E6mVJPqJ5dEdLT5Kkqp2ukQ4wGtB2P18cpmSGojwcQzSYVcAjKKq6iMEpBfpMSe1Q",
  "key5": "3iwnZ8E1EBHj3W7SJkG9TnyqDFB2Fc9JrFpyoTwAazvDoMvTKG2vdrDPaKEtCcZ5fJUKcFNxiugZYsBuXVrXv9Yf",
  "key6": "4FE8s1szF558XDxVRg7HC1qeachf5LS8VgFBqzYM3rSRsxgCKWkiFXSZ6mJ5Jtts7ZaGCnkYwozWFTHGsjaogaf7",
  "key7": "3LDSENWnANKr6zEu9XhZC8V9AMsNPdWnww68b8ZTAB8YaGMiLcdGCqRApFbRGYCJtRjjW4Emjt6JexuhZ44UtZAo",
  "key8": "3JJhoTVthHeMgn2DmWtqrSH3i8pUWiDspzKh6f35GcnGoP7a5HWs1RNH4whW9jX8Zyzdz9EsJ7Vbs7NuTBvWVDKK",
  "key9": "1yrJsAhT1whvb11WKnGrFqFmc2u4Jj9xBBUxNQ5JkqhnVasxMxDPRyxsPuB9Tk4eQyT9bbgBvhbJk2j8dSjrm8f",
  "key10": "7NEbBkmmHuAQsqywDFnpP2tBhbbAn5etPDeLnJyVwf2AfDTHadRVKGxvTpQpi73wfQKP5F6uqNgUccippR5ZC9y",
  "key11": "3h9UCr5MWwKTq8UD8gxLaU38Rh8yLurpQMqUDDMmvERAkYa4Pgm384KgCCjwFiBR5WBQaLDUtWb9DoK1SaWBobba",
  "key12": "2b12B6HbkSTtCCpvKMk831DUrUxTwJM4QQYz1RyJRb2oadVbJ2viGBdfR8Y2ptfWzQQT7hyT7rXKiP7M9x7cand8",
  "key13": "3nMpNdiasrTs4nirq2oKhwQmCDYVvghLYSf4DRVXC29X9fddPaaTAiMeLejVhMVJFzhS4NsRJiysbyzmvordpSyW",
  "key14": "67MJMrzdmLZzKjYFGxjxcSYHxSDc1G8AVWpsCLijjzviJQv8bLyq2ZKgyWAFU2TC7M1rDjujzC8ZamnD9yFy9MYz",
  "key15": "2cURLBcXCqbJjKNGcmKXEWCdB61sfSVU91FuSr1Z974tLGB7UTeQxGWiTp1bH41ushAwBajrEVhYYwQpHhTSmrTL",
  "key16": "5R8bMBmrBaz4UwpbZhLcD9yH2nmZj6M3HNmbiB4dSYZYgjkS3maND1EkSHh98mkBAp3FjrCNk5FwCsx6LB3fTfXm",
  "key17": "3RrxcCXwvCzL3B256NN2A7E2Bt27GYubkS2wbsKDiTsG6E1Zw6KiPVkHw16L6Xd9TgDpjhtPf1cxCyK5owe2kEW9",
  "key18": "4feS4ermfPpZJ1ZjbChv3KVd1ANhjbH3Z1hD1JaEwYTcyrxsneg8ivmXvER673gP3wx4GbKT8XAtg2xq5Ak8QSia",
  "key19": "5ZKcBnv3kdP1WE6TR96eMZVs6H65HdcdWakzLsjSBWbfVCNPEN7MHm5SvpKbSXdBRAbA1tyce92G5Jw573CrSTVV",
  "key20": "5gSwy2p19c1MAUrLGCt9wpfRSHpzZxniwFACRokA2yZGB8NVXmTgfLCj9gHC7fQxxH48YDGcnGfiYL6VN9S9XH5P",
  "key21": "3E7pK9bRdcpBof4MJxPW41iJfuNGFjLhHNpp9EAK9sNLzj6ZmcwgHwpHhrmnBKHU3mLq6fw5nPWwBYisoaQ9SL5R",
  "key22": "2qRSfBAQd7LW3GmD9aci53G37Gp9sLW2ivjah4Gufi6g1qFtCyy3W69Zn7od9QKpF4QC2nopRYvUYTfERVAJ5HUY",
  "key23": "4RgsQJMqhxYrFL5YQdKnABhJryHnHsUAtgzz2zSjJnGA8njh4VKhhGgVvUAGuSYkeSM8BfQmHEQhQcLUywy8as5V",
  "key24": "5efHMU4jcER2fACn2rNXdMXasBQT1Z1TknKbQo3NaHEFTskWirkYGsgkL4Mmix5xkNX1dm9LX7Gt3jZX7yB2nLCc",
  "key25": "3MijgKNe2iVABCdwnooKEAvsNFPHxoazHFgNBsoyLcKbz1KpviFnMQbHi87xXsBvHGpAvxVj53AJ1WVEyFeJEQUf",
  "key26": "4H96U23UvyXuveEBCEdbzMBnmb66jGXcwtjBcLa325LPdWMrCQfeX4mhEMcFLJ3rxkhdNvAtzwZ8X1T2eB8qLmoe",
  "key27": "2tiaTPyX3bPHWinGPHqWVY3fRML7B17eJ2p1TiWp1kP1uj5r4hQhTZcFG9Ye2suyFc9EdxFy7AkFcNGh5aaeHC2Y",
  "key28": "4ZiapL478RK37VcE21JJ1L2s3FyqJB2UGj5CbW5eXj6jwJtUHr8o3eFuWAHbcKNeinmWveKcjR7dx1keiW8CpRgr",
  "key29": "5oVPXcm4c3fyL5ikSWRP8fUaBBdT7nhbqbDaCMohwYGJ7gMKaDMjTzVAZBGLz8PTibg8hGpqBoewL7jA5Ewp882i",
  "key30": "3EGsMw7yLQ2Dcz66BbdFu3A8RiHCuhuNkP1W143cCUdHtyTnkaxDVoJiExkMjGUzm5EesvhXP2bjdYBGcbLGCb9s",
  "key31": "4XfAUKGmaZ2zvuA9Bebm4k98k6BEffu7bmcv2MMf5bdEaWKTTQPSNFB8s9phd3tu5X6j3ppNjwrZuikY6uKXE1kd",
  "key32": "5Vs59WnnLQErvPQR2Qb3ShGKqWT31ciAx2RPWCEyRHsUMYaiXkddxz3ioJGUadLfTViNBvFPQueGUGSfXfSR53fb",
  "key33": "5FZqPrSMxf6vsKRc6a9PZtBuoDSmBfk4iSeUGToV2p6D7rrWmtUDYpzkEt3sTfS9NowsenmM9dhUd57bTaeY18bm",
  "key34": "5eWNeXWUuEpFqPzE2W7QrxqVveCWK56VHmv5XZnDPWdRsd1AcyERTqFiMzX8czXh8emGFa2orgJspTw79bZSoriF",
  "key35": "5tmGo5tKPtBBbhRzPucbUhhHnNgxMAoQ6ohGXUKxbp7P8fVKcVNQ2EhdbQKR9KBcy2qQNXDiwMK1LY9R3ZTxQEAC",
  "key36": "vU5iNhgNZEXTtaqAWrM2RdFHipGizucuEHjps66uQ5w4TGCKQ3vPsJGfHFEoaqn3YgfmwjzqAxCs9KiJrgYpJH3",
  "key37": "HcfuTJCD8kqtnxLraYEmc1soamzEMBqvzW2mawh7UCm2KZenHEtEsWuJAgrwu4wQzaR8QR6WwkXqDptxMSpPrw1",
  "key38": "kACp1UZZW3pFRh5L4vpVUwKBvjDe8hnX9XfDrRNirckwWn1hWZsuhc1ZQQ4Md8i7hvxLkvJ8fiDojkXxpAkf2AM",
  "key39": "4pKt7H1FfbjH1idAdHXLCTmPwYtnyC8Ha8unQp88f6ZuA3xKABAeZvLbSBj66xy82yGLc3EG6Wsc7VxSqSXDcrUk",
  "key40": "2CGqpw8ZiKLxGHJXnAQYK4kYHGwtiRNG1FhCnmwdPSAY6uS4w8hL5unkit6aB4nb2wrVQ6eRqBfiBL78TcQ8mzNK",
  "key41": "35XC6UDjF4XnPx8CsZRzPxZ5ZZauiLwW4SbEYdS1Ke1LEELT2owVrKVygtLUuRsDE8WGHjsya9Vom347UhvpsXN8",
  "key42": "3HXxuuswA7YbGNb5obhM1XqCWbX988ikBxT7ta6ipuzJf8aVwjiwPSpGmnMrxUTRng8b5UmjW2Ec5Lraioi6GDXg",
  "key43": "2K4wmpka58oPuLdE7GTw7heePRdQjwwqyP8EegqnhP7zSX6N3QZM7b6FTXdwGEEyGrVQGb4SQz96UX4CfHz45zYP",
  "key44": "3eCi1e3hU6VdbGvnnyxvg8qgLgnEws7pno2AYB978XRHs89HUYnwfmvGxW73AfsyjoCmcopy288yskvc99nygiBe",
  "key45": "978tmyJAUYcFLNKS6SkcXR1q4mtkcVJTA9ePHoh58tQxPWNHsXJhpDkvSkfP1rVBjM24csz2KxLegnmUUGx5uxH",
  "key46": "5GtBewjFcRVUPPkfFM14BVqvzDTt2JZMLCXNw4ukz9qbDKkydRB6vDXMoHqdFcbb3CDhjzjFfgeUnKcFpPYv6krF"
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
