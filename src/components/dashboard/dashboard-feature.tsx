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
    "4rNgejn2dTTyx56cusDYuPoA4xLnutaLeHZDQ29z6LHpcykfJUKVA8Ju6amX2GhxfBGPX9MT8TAtjNcnpC6S7FDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfcBKAiDPymPHmRfb4BePnHeRJHZvTiGe7B4jadQXP45r6VqPJaHwHq6vBQuYMUKeLBmeu3XkFo6FZ4HFHAspSE",
  "key1": "yVte5QYhrrzAd5oPjy1BxncbK4M2Q4oD1PfhSq7WXp4Mt5ufib59VqzxDpKEbZXAHQLDfsZd7E2oKwPzF81FTMu",
  "key2": "5pitUJivfSvZjGpNdcVYm2G2SvEPBbUDdttnDwqMNM4HZZ9izgtdZ5T52R7FJD5tctTnhVX6VyiCNY4oL6Q7JmVa",
  "key3": "3Y9uXhu7nELuXwgJj8VB3grWu1jjYmdYZ9aiJ84V6CJ2xThbBjC94gb9ECiGdjsfhcMwezUB1dwcpLNF6BPsDNQ1",
  "key4": "4tLm8tQbarRnBrmGSxqqCgux8egrSyc4QwQiihxgjPHaZQSXpcwTwNP376vYCDZDucAAeX6g8rz5UPKKCNgLy6n9",
  "key5": "5cRAttj39yvivpprzQkQsb9xLRqAmTtaiP85zhF5ghDGgQoYwPM7R28zKr3bHuKrPmVcs9WNPSgqDqbAR1aZJGtG",
  "key6": "5Rabo81zVjjAgYJLZSWkZVFLstx5HbruYS2RCn9TjgdQ8Pda92oJb4wbpkxfWNmgezhjJty3XTfnSMJwq7zFecJn",
  "key7": "5PzsQ2pnJEe4nR2VQ97mrnR8cV865jRtWzYQoHH3XPBh31D9f412FqT7XnN2kcJAJMr9qV2DjycDVFdEydEeyNHK",
  "key8": "2xgavSpWgfQH4R1ZKG86i8cboz7df2o2yaV6A97Ms2YNjCKmKFdXDfhJiVPaZMBVqVgweTUJM3xm4PnqUjrJHMHX",
  "key9": "3tHWsK8ampyiTPvx7BfPudeFgqETABhj5NtqNH6CsqKeA8518pccXcoWwQS1mnia1ZTA6TjVmXpQ5uq61qTX9p9g",
  "key10": "2BhPjsTd5SFRJkpH85YG2gzgz8aL6ECoxQXGmDrBQugtsG4sDDP4bJnE5XN75E9GcxaFECd93sEmQoBQh3tH2cqS",
  "key11": "2w7e9Ku1KNpDcsZ8CkMrxMC8Wn3fFjAyj7c7uXUMWrKd9eruTznsAsHVTn2uBtaV8PpshHBdPdjcntjcDQmyhSAD",
  "key12": "389JqKjsyvtuRsV5ocqNkDxmpbLAGNRfKFABgnLkgvdkiBf5J3Z2Xg5fmkj3AoZCRMAJCVQ3eEEpqDoP3PbjdDTi",
  "key13": "3jTG7y6PjE3yxhMG46R5mCL1pKNCd4vW9QK714o1oHrFPurH3ULEuXi17aWRqXGPZD378L4VeTZoTw2Xi8wbwBK7",
  "key14": "5NsUzESBLqQaKVNupq3jcyRvU5VgKCmMtxWnLv88NVe1jAFUYvNCwVpM16cHdMUPRzNB4ggtgNJeQ66RkHwUn1JQ",
  "key15": "127r92i5aMDAKjFmd17iUZ4dL3XRaQCCkAz2dx9USeBnBrLFxFD7oYuxkHJrBEtHS5VQeGJpju2tLRxaKdXF1Fxh",
  "key16": "3T7aD7J1G6QR2z5bRNaB7sVYuJxbiac9aihbkUynrN5bFzaxQUhuAuoguSWjYRrCH6iZ2adrcB4eUdSuVQvnCinv",
  "key17": "5nkxNzYU9wsXFMjFX4EJ1FznjcVqwkWmfHmNQSyaKZWyph9XepSXK4dxyMihYC9h4PKr8EpzsDnMaTMgriXZWsuC",
  "key18": "3rUKzaGcDYM9V252x9am9v7xjE3K32tjdBFeHD1o7uS4UygEvLUjT949GdyECmYo1S9G31skdfkd47XfKmmEi4YZ",
  "key19": "5s37KeWNtrmjktRrLUn4QoETFAajJg5qMYB3LRWsik3mVhsgatY8TUFdG9Kqin5P9F6QHzppUNJTChFRzoRn68tK",
  "key20": "4fA6gCSLUxYsjL6gksWMTpnLeTnACn5bz16Bc8burmLwPruCcaSSrr5WvxUnrGr3DzoVsBkCBBhE3NjZf8mmet9H",
  "key21": "YVTG9ybdcZXiMBszvjkUZJNrKxt1GkanFtPwWoC3q3CkfGrgJqhpgL8psYVWHVJDf3ijyMsWT8iVr7Shp6TBhDo",
  "key22": "E9wStQx9j5tXtYD9DBdRmfScrdhkSWUWjXYJxbRaMJtttMJjDXPXqtE8zUTSrr6oSek3ENS3V8KyhWh3rQTwHCa",
  "key23": "5MAKv7GpqUS3WcMf3KYrE7PNkuodW14oBCJzFPUfkCgs7norBLTMp9XUqyatkibMZHB76PNgQ4VE7qUUnRWWoWko",
  "key24": "5HttMfCKXjNUH6zNmZToRNywsGJjJaegP1c9PE1WioJFphiHFmhhkcR7LLXvYUq7TeaH5Lt7xXubCBa1kk8iosnJ",
  "key25": "2nNh1ujN5HdXRhSwrAZorH39NKmquMXtcT2b7F3KCz9jLDEkEprXWTathZoSsgepNh9ffYjYg48Yrb3iDWhKu1Sa",
  "key26": "47xyLFKo4J5TQ8buDKLDNAWh1AHsH8mC8tprnsyuiqvYC8q3oouMHFiVwKRFcuZuoj4wnWYtaEKwh6pGFndK85ug",
  "key27": "2RaC2AvKXjfaZ67jeag2rHE5JEhjRk8bqppMoowcecXxzE8DFfwqMGn5t772tvtGqu5yBBEsSc6cucMoScBoNj6x",
  "key28": "57b3YY4NyqDRx5bwTm2zYoqS5ffkBEe1igJdH9Fub4vaUHsGwEA8BdY8gkrjH8b66ccX191WeZWvwKQAgiporH5D",
  "key29": "2nmvxpwGiwDzp6ALBk3iXf45kcR5k5PCGLqAPpGsgHLGww4v74KPTYf41GDW81qiwRgoUe3nGakC6rpQHbM1BTD7",
  "key30": "5Bas9cQYYT2yVB1tWKEeReQKYMxCBWDwSTafGKpcJwCHcadoskuzS9b8oAEZ2hMh3fTc6iU3jygRxErHu2FSyLM1",
  "key31": "hKZPce52F3R4ogwRXN2dxbiyTDb8ooXR8bk9U8EXj1nj8NBy6sx3hYuP5KJLmrRU41oboYZ7741e6QxKm7QnyqY",
  "key32": "3AxxZsjeEynEnkhXTWTxnoqf6Td22TEcAmCFj6i6yZjXNJKfk75EfwmgAqNmPWhh6m4uhj3LHXQDyBKXVqYvVSPi"
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
