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
    "5HtFz5JfJiD8JDyEigFPaYW7m5vfCH5XHDKChJuiWyeu2kYx9Va43xY36czWqRiMVUr5NPtkc36HSHBXCsx69xju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23zUU8x2zjUr6Xnnc7TyRXT74mNAbCDTDMkS2cn5jZWoSNvdAQeqEesz5psbcFcCij9FMKmh3jiHwbFwFsyDYmeJ",
  "key1": "2DskjrnVpAKmDA9JKwnEHRWoQ5pN4dkRsQpjPKBDQ5j5t8GHGbKSXdTcdeWZPCgP8bRivreAB7qtqbMPwdVybh5F",
  "key2": "4i3j8GFdeYG5SNYgEqGPm5JwheDhvkkFxF8vir35wpJorBD2wLpaggoTfELwGxuv2aH6aPPJ8Ln9sv2tf1BFg7qM",
  "key3": "5ToRjqo94dyy3WH846L29onmPPvLruJo7CmmNAoHBd7GJWpopUgEmsvHGRAKFquFD8KTFhF5xp62zeb9PSUwyJn4",
  "key4": "ibjGdJYZV9SDUxh3B1H3VMbqHwxVVWHj4L6w2MpwtB5mtXXayeaopwCpVKhqcpTejLtYHkJ1f9Ai5JcQftgeGuJ",
  "key5": "XzFZr4JxErWXUT5UcRh1CxLka9sEtfV1SWHYW6bLPFoMpuKmunwNsiwo8paGG2qAMNi8dk7J24rgqqBWsy8GfXn",
  "key6": "3fpifPRQ77Tu8hkXn4ErJpHQKrHJKA8katQLEnZAWTCi3MexF1oW7eBVuQ4Ze7HB2QFLCuh51XrKqVJ1JzcPetsj",
  "key7": "58YJS6mgPwe21iQtrvjehtSrxB6WDuqezEtB9mPrKN65FEB7VUeqxTXyfseXKoVWTtGkfEHB72HJ55K4MqCcfzwc",
  "key8": "38nUr9hptv9aYKw9HUNqtmBqxBQ8kG25PpBGMD4zDdQU2Xpg6ebD21kQcrafGWdxj15xXXwaPWcSdrfNb3aURWkR",
  "key9": "2M2xtkR6N5vCcbB1WqWwYoeerFpRj4ZiUAzNkJnCduspXyRWvEMkHcGdqDf5CyGVN7LM7oBLPAxBdyGLZSF1j1mT",
  "key10": "3DbnNRXkSca75KdCFMZLfj46jtS1EsqxjnBeofRFx45LxUcwRG3P6Hjk9fHKQqTF5reWkHQdFeP4bjNSX8tPwSe2",
  "key11": "2jJT5M9Y9jMu9XrfRRAcrYy6RmN5gft9mJiVcLDqTEK8sVGS2mQSa5HkfE4aVBzuigW4v1q37bWL1m1DnYKMZ7UJ",
  "key12": "FJkiwyabyBXWG6cEMN76tG4xPSBbksaVCbYZfbkEY57AyBoMQH8dFkvomLFfFJD8FgxEpFoCU4irHMeZ7qNtYcV",
  "key13": "3N5HWuVqzogQHq8njHaX6EmEYMnkGSU9gJpQWr1SJZZc1WNBK1UcAH45omfuuA6tqZiyfnM9aLr4bjBqBk8PpLUU",
  "key14": "5WBwrQR6iPvBowvoZMmT58rgubjKeZ9DgMf6jhEAX7q6zULZRv2Hs8DQEBWQXhQDy9ZpZC7zsfyVA7VSBm8t2hUj",
  "key15": "5r15HDHZP9t2UYvzcnyzzfDKf4eveAfEGLLC42MQGCXWvz2vvuggHbQQ8Ea2Xo4oRZfdS2w6cSNVmj4oxRjieWY2",
  "key16": "33x4A44CZAmzUZ4hsdf8csAy6QHB6j93fkVLXWz6AXAuztmGjz5GLEWqM15SRbZnCZ3oe8VgHNSoCPZJyFWTfWs",
  "key17": "2SaSFKCC84pzHoTck8FwmKjJsyWDdexaNzDjD5WxVEot2X7QaVMm9LcYj8a9a8P4zDPhxRwvvcEmGH3PJW5K9Ti3",
  "key18": "3siFYTp6tDDS7quWMrWKXgpUiChBbRGcbfcRAnhp9h4T3gJ8FGHC6CJvanPMYj2DnMwsUEYTYdBaxFvJuxdR6zgc",
  "key19": "2FufGBYVnbUS5u5f3rsjEszzQ3E3Wx3XujpF2YZuySttA6XtD47YsdJgPHjNyuEK7pAQQXRwzKoQGnDXtBfeMfo4",
  "key20": "4KwGXmCPfaswzNDveiUNxubd63t2BG6sRTLa5WGBkA434ap2w8ruwKuDKFLyFKY74rQnm6s52n6NEDYaYyEZoHcB",
  "key21": "223cJiJGPxrGTqU7qfWTTqG1NdC2SDg5Dw6tSTBsvLT5inhvHknz3Mqw6jCef5hXHmavX6MQj5cJFY7z31sFjEf6",
  "key22": "4zuxuUrC15Bz7C1UCEpYU4Levw3BrF2VwWjKkDovjjF4RTKfW2zg5BN4MW32UXecvkghAy55LixtqmxCVbSGN4Pg",
  "key23": "59VcLzHn57ceadmSxxBFqUXsMfQ2Dm3Mj4N2utcceqJbFytFpMcjnZdzwbPq4j2icenCYmD1cfEoTAMPiF6hsGPf",
  "key24": "5oadGC5p4fPUB9j75cLQQHaNiaNh4zg6bL4fKjL9257rPQmoAj6Xn6NkhPFR3vFkFe1918bWvWC6vqZBYKtLMpSC",
  "key25": "3VBVdHjrorzNTgGrhWxDzengaKKW9vod1hWUPhUjuiR6CTxmRS8omVN1EaDHPXwfM9aoNGH77DAVPSEF8RpyzKtm",
  "key26": "3vMBUAvqR8RHZroKvTep9yL1VFSR2RkPAY24oAMPXshJiLzuhEFArVuyhHxTTi2t4fjv34MS6m42J8tPPzN2X1Un",
  "key27": "QzB4bZa86Zz7L89pGkpPmVW3CjBxLPTBK7ghTURF7sQ54GxdXkVt1JmJXPiFiCMxPY6DXQsjMo7QQHunAzRf8XJ",
  "key28": "4uoyZUtx7wC5Csmvtue8cQUnuYwh5SZhyXAgQVXdVkTZpi2vMfdqCVNPVMCDXQiL1xwonznDmgVoh5tTytDNJ3ko",
  "key29": "4GH7k5qhL17iQL8qUnByBE3Qqwko2LZpJokkYMiDACKprt9bvcxLRhDwFRuFVTkhJkFkZeNpHoMQwQQHDdCY8yy4",
  "key30": "5VnVMheQyUC9LwmjKQHbATeGnEuyVxHGMH3zrZsaNX18bH12xpea1JsokpKsbypZFj2HmTFsxj6ajbxgtiKRtE67",
  "key31": "EN7Xb3J2A4vbczrD9e2PuAcCJkFPc6RtpdSWRWaKcEKBkUQK3fsnpDGbzKLje9VqPoFN4A53yanxyUUHxE3YCWn",
  "key32": "3HYWDUdPJZnXUmcYKe11WDzkCYPafr8LwqJMcUFthPTxKQEQB5N8sZi1cUquudXWktYoKpJb5wejLUfoVqxAtr7q",
  "key33": "3PRwsAL1b5n1DTcDBpi6k2FoznyW86xcQdcWxScdVAazd7FgAv4Kfxqxeg7tYXccq8sjuW1Y1dBRoZeJNRyB3681",
  "key34": "34aZ4ryfFcJLG2T5CzoYRPJt2rSFDM49Qs5GWahUMEVZBtDTs9LHZAp39Hwh9UWcHKjZTsx4vEgpgXWwfm7JGoRW",
  "key35": "2MfeoMqQ5ngysr5LcQwyGtaDWcBVBP2Axg4phESymK5rC3LVKF5w8gWtnxVSjsaBHeHFbHHRk7m1uENY3QyNuuBq",
  "key36": "p6gYcDmGKRDFoagrXhrU6Fy84insh3hwJgo4pd2C7sBa93oaaFKJbp2wX4KVTXGNV8REtjvjPfDi8xCMyfWgUHV"
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
