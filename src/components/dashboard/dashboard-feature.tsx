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
    "62wWjny9Y7R6ubZ9tVpXEADfQhnKUQv6q73o4FngsuXNxZeDZpTR2qQfmZf3Y9iNySQr1atqRatSWY65hVF1Fki7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJrxcmAyPkekB8Yub51kBw3eTU3pAXumRgDLuhZRrwR3ojyAsyEYkHCxm6CcqHj8oQmAcE1TcisHDmS9nz2VsEb",
  "key1": "3Pa981P4oK6r4kdgTKgTBQbLnnKEvkhjHWdfXzJ5eKqwMuM4wZzhJcLscESvsYhhkPT2aSuZuACCkpBTYpdFDawc",
  "key2": "5sFwQTBTJYY4dSj1DPHEQ62f8vfG6ePA3bwCx9e314ZdkAvjLSAmRmJir2kKfSyiyYUtH1eeYu8DuvNmgVKrst98",
  "key3": "5HVmpQ8wRKQH7K3EGwFhC2AWFC8s3YCxfxMamsMWnHuAeEmtRUMMu843rzVbRVNi1YFcDFy7Xd58sXzhxbKKZ3AC",
  "key4": "3Q1JvEcNWPPQCXiHA4a81DMNpcyigEeYXfdKakG4SVuiWoeZURuCYTnycU1Ut6XNWzxqszQFiY2J1KSjc3nRV9bM",
  "key5": "41TEcd7eEAhhc9nrmze8AbfTkhERhss8RdAZs7bezxTchjk7zLxBU1bbGJFJDcbZJL66owqftF2cyJdJDwzandDZ",
  "key6": "5FU3Hm2WQpvEydUn1nc6PVsKM7Enbfg1DftswjTVZhkxwpQgFiMdYnCQqXpvJD8QadtUdSPFUXMeAxiWcksvamF2",
  "key7": "42ZjnAj7j1LEDTGvSp6tgaBWruejj7e9HrRpT9A8wGgskeubVgjuFrjGHMWe8EcX8Mmdu9vxQQKFNdrM7BuCnQ1X",
  "key8": "33toyuqqw7QkbrKtYZPgq6csx59szKqConBt6NFfHefLUHhMJV2yPcHkAVpABccWJTVwDCb7nYqTDaoDt9iBRp6S",
  "key9": "3JADc8u8ndBS7PQAnGYy11ChTEz5qpPFjyykTjqDxV3VX255YmJ5NPDiRYmdFie4nXdAdFt6PSbSYU92KWFwx9zJ",
  "key10": "iiVd5N4P4QddgAC3uLP4S3YhzrFU1yse3HXkTfijECGRjcAy4RQkRkTkmd2KkvBkqrDNTo7156LNbgSYGU7EPGV",
  "key11": "ckt9hvbBHpXyj234cKi3YpYaU7jLsunQ4gnTJsTHtvPLxeX12WdJFtsfZbotrr9Vt9nj2SQahEssCbDRWviAPdL",
  "key12": "22xy5c1N1tZpNmD9Z25iSp8aoqU29afjsza8aDPxw37acPq4cz2gS17i7UQ7dYaNtaA5sM8TgzMtfMG7scYMSdNz",
  "key13": "4xHJ97jZbtS4pAUYQGCGifCN5Ge5gUZL1jJNqUoK34K83CjRnmdKsowUAdf9P5ofkFMNhN2MTyy9LcA9f7X73i4m",
  "key14": "q9MJdxURWkgovrE8VGGbbGreszC6ZJSVP3jQg5RvPskYVxkx27wQ4QKPXKMgK15QrWb376ACwNi4qz3nitRWsxF",
  "key15": "47aTDmuGPQ5f1rvPLfW7iZh9RDhHRrojZLUbsN7RSusXFftvfwYVRzuZ7JSXdtimL2DnZGpJ8fe18NKo29Dg8Cj8",
  "key16": "3UKkLHg7enhyb73QAwBgm7XoUT5xDZxrQ5uPLUoM1tPrrazKBo3ZLid2C37MujezK7TRRd2AJWNDi5pboadorToV",
  "key17": "hU8WWHodWamLdUyWqLAfKcD8Ta8LaULNDP5uvPV3JsNACsfNkmmgYvrdppZ8u13ayoKXHcBSGJ4w4fT7FgoP37i",
  "key18": "2NvGfELL8d1PB9q4qD2Tt6FM9AubhiHPgJJbNpBxir3Gub2vXUx67dy3h2R4iMKXTeL8wyTfEntSic46eXN74oP4",
  "key19": "2gneFz2YR9RpFPF62ddM5ZhAfjZYjWRtnes9M34Eqdft5CAqPzAf8bpu7x8Y4tfPKcspMSRGuWKeWmeFDXA3igQo",
  "key20": "21LDqLJA3vJyAcrf3RjvSz8vss6ftNw1HX12u5i23tkU4hyugURM5die7LWH24cDqB8RVCr1bWXsS7HCJNkKmEhu",
  "key21": "Krdn2zaBzAtvVqKvWpa5FzTDz7Ka24foQkAnRrFmHmThqiYqcq1EzNHb5GJx3eUp6fXUejtaF9hPaKjvFLGi6dT",
  "key22": "3Him22WCeTgso2GeiKHhyvS4pnBYkFJFS23DfAWSFXVazw8ggaL2hjnYcTGBvjhKM4f56SdLQ8ECUFK9w2nLLjZR",
  "key23": "4j5jfYRWN6WrgksF1RCcHXq9EbczJKRCJspGFo2W6tkc16amkZAAD7buNCTr7uMapthGEXuXoW81NTK8J4JA8quD",
  "key24": "515Y9EvDJ2SrXLjsS6hVz6au3d53bmuJ2ivTxoP6q83V8e7ctpGxgb232mnS4psD6JPqyTpJrXP8o25A5uLss56a",
  "key25": "3FLKLW458F9msKcYTYCn9CygiWwoMDZysMzp8xYPy4v9GQ5AXzYFqAyriKwKwLkyEwj5ofyHJ3TLuTKunP2uNmQp",
  "key26": "5DudHjYEZvjLJ2mTcfXPTuQT4u9ZgGvXEqBnG6hmfYL6Vg4NtDpDGPrm6ZNQGM2RogFcnYyGy8c9iVanmFWcHsZZ",
  "key27": "VA1rW1TcMLGeaYfhcLB9SK7epCT4hu2FCXyxiRK5C1uS28u4C6anDA5crmuzbUP2oph6gEA6z6Qc4WdnRTMhGtJ",
  "key28": "2xF86iRdex18M4MEQDnhjixAjySknewzuApdxYMXr2AkmELZRV7CowWtWDpVariE6zMSWuRZLky9GkxcykYsnQqL",
  "key29": "dnQazAHLvVZ8voxcBAGgHd9zt5UQjJm2qwt73RiyYQi1Mi5hFZoZzwxMEgzMopo8wEAR8bPSn2EtxKu9fQ1McrZ",
  "key30": "RJ2gJ1iW6pWaBcaq1DmQFAioYMcQzvzz8noAQoVsVRXqJieMysbRLbBQk1Xt8HuVxejd9d1x1PHte6V1HcvFNcM",
  "key31": "3Kt2Fa7THm6ACnNCG6Y72G4Hgc3FEbPs1iX3MsjhQDmQaxEN8M9iX83PX7vEFXzPEsLugqEJQVqBrQmfoQEnfSPd",
  "key32": "4wPtbi5vCTTKTs7zhhZZRa6poeQG5d2THHPraCe1gT6DrYRR21TsMSqXxPwVemAyCfS1FNDJqti3RVBcjgvCK1BF",
  "key33": "3G3Yvpj33JKBGYZKfzvBTCdcCZEbhYWpetEPqq3jDxV3Ukd4m5kT7LN82zF9JHa78Cyhgr1PKbmRrw2jpqjMD3P7",
  "key34": "4nuvxTTGxV4ZE7mRJNhYrT96sN9i4zpdWtDesZKSxEKEg7YbB4wPTXZcJqhTShMt2hmnMmLCoCkM321PMXmWsgFK",
  "key35": "5Ea15u5HbntWHPu7pGUwAySuzewqUGcJrKKGmYWTcuxfvVePBFr4rQBw1X23G7F1NnfyfBc5Xd9AaDD9FhtFfyt7",
  "key36": "dJ1tqMpNi5SWkeqwFuQAQ6sfpj7qXhFmkBDGWnYr12gt7LitCQQ3ciASAtNT6bkxRuskGiBmPqFYE7EGbuNYby5",
  "key37": "5hDSZQ1FEF6XdkT2zXBYLtrpjRRqfMtjhCB1BaAYyjk9LuoC5QRSDCpN4qDrdkUTvokdAkWf5VSEHsR7HQojJP3C",
  "key38": "2MtaYqRkpDr7N6x4BpsjSaZmGnJ46Uy4jrYL1gRnQxERQ87UdAVspwaJ6jsvbScnLXh7fDwE9qKtKg1UCwzCxoXw",
  "key39": "2BY4q9iSBoV3nXbCQhGmE87yeJHptivDJtNa5BXr95thiaF5BcEenC5yf92PW2eWtYFGhPXqKftMo6sNa64mk1GW",
  "key40": "LZqkxmfkeraQafX4Zu2udW3QCZb9XitQCCtYFZB3Lomac7o6ymnmr6BhCiEMAE7moveqoDZ3htFim3Lqi6SeiFn",
  "key41": "2N8LyFosAwcX2YUsHL4HJtpTN7q2cKri6TaQ2cwPxzcmV8uBX4vjDfWZYCcs7tQDvpf9UCS45XQh8LNrUF8SXSpB"
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
