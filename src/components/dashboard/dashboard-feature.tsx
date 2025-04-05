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
    "kaxxQNosmicNRZGGYwoxSPuf1R57kNiLZi5rA3vbr6vJvjhBj92q9shHTM5qGscoRBFsf3Mh7JsL1Qyf7koqSXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55uXLdSV9LSDMc3MuaBQfhGyH22b7xfzhnAujuQ4qBHyKXYxwLzi748GqWLmChM8GuUs1Dx5PhfCo5nFpQvh9eu8",
  "key1": "2HrkWWWfUNWxf7qRj6AAprV4zfbYCkxUdkAqxg5WDucgqC7VM12xCQzSSAeCcRNNscmdrtuNjRu5iB4cBFVqTQdW",
  "key2": "q18QL9oUkJqYspLcYNGMeYQGSGC7x6s3khm6swbSQ3tj3W2sF7h2mb9F1Si15rpRNmdPNVY1Fcje8nbwpUsBL6S",
  "key3": "5B9zghDcNHG54pFYmxtY3aNTtTu3aZ34dJpSQ2jZgq5h7zAPVQdZvZCZL6LJPMBgigbJxE5mvJZix6G864Nw5LTc",
  "key4": "3zkaLUozAwKrhSzQhRFkvMi8cN2Yw2voyMcX12bersQFeZVrXx9JnPVTrWhA7B857ZxU15jgc5rLGp1ZinM2cDMM",
  "key5": "59hViMPwZzLh7tQCgj3RbyyLNepST9X4tJBW8fAAJrvRRjucCbkAPmRkbKD1Rz8hPxJSgjaxk3j44PsPoPgxo4Af",
  "key6": "5haD7bBYbeW6tUZPdf22ERZzSuV8cpC5Cq9ot61AkTb96DhDEt3XdadSde5QU4jNyAEt6RD3DbK7TamqKBZY1fLM",
  "key7": "2dqGozxiUEeYXs73YQLuje9So8WKXPJX1k6inQTwVX6JeRGUeWPmGxc5Ggsf9jaXfSngMp9upy6zKw2d4pvxsvaa",
  "key8": "fR9TamEnepg219Q2R8NHhbXXxJgtWZZYosQuKcY8HUKz5c3CoiyZLyQRa3yDFyWap32vewbximsxfTwVVxaqJXq",
  "key9": "2B65VyfqPEsGjPX4fVR5qK6STQPx2rLSQDsEfksQ6xY5X1nMh4q5pVjbqCEUcJvMHS58WG7VDsKcwHTXqq6XsP2q",
  "key10": "563AxLh4vF32BDvCJ83hWmLsbZpY2u1NeF3ezVKhVnZRtjRgYS2MtjMGi2i6JwLR5N3QL5wrXYQuRV6oxCvrwRRW",
  "key11": "4j8Zc88Uzn894NoKXCcxMDK54MmA8yUpCcciejnmoohwV39yMu7MGBdokNDQAELdvFHPXFFF9Z21MjzQL3G6rXj7",
  "key12": "55tsyGovym8C4SAwHXddVc2HSSAp9xPTuV2ZtWoPfGtqjGSGhvXCAkqEGYrCzc9NtxvjpXsj6h4EkSvxr48z3AWM",
  "key13": "MrBycfzVH7TfzamNwqh5rGgLidT1rHTKcPYKbfWpmEsc6yALPyHTXFvKALRZVpFvNrpEmzy94iFCxjuH8v3yD6A",
  "key14": "2yCJgiFFhrKZFE5xYKuAB3H3ioxfxrTWFPgooJ8ZrSaevWCJCZSuunBiaqQSsshm9AaPWgBYYS9BmmqexmqRHbEv",
  "key15": "AQ14EkjcrcZafz7h35FPj2FJg2ACJMMdXfnisDcsApBEfUAkE6Tg3UFCcPdXGw5XHRQXSfLYQDDoF5z4DbgtEyY",
  "key16": "4nDQRx28FkxXEjLMY3v5cV3JtfcELxv5XHbByS7PKkpUWrSwTNb43tK6rBra3rYeX1fdmqRiRfXdUgHjudwtGTZh",
  "key17": "31c8stvRPpz4NwzXZmaopuCNEVfGsqoiQHYmyYw6daEbFNWWyyPuQJZu2YuYJMcThESBD7Yir2GzgszWkEWEMjtw",
  "key18": "2GivLtCLNZQALPmb7dy57F9sQtwoWUvUQ1bUX9oE6udFdepDnnkGs2moodtLDR9VybrLw3Gm6VAnvAbwcJrsq8jf",
  "key19": "nfJdtmLLTwSTnxD88VKTVxqZ5U2p455wqMNBbpajWzpwZrRu4LajhJqZNXJ3p2ct8xcEZjZ2WNSDoP9ehfgzLiU",
  "key20": "2pEeeoMDDCuL7g2WSpnbXrPorj6jfC9E1VKZeW5928iQx3qTjGFZdYtbqtd2TjVWVrb5QxDFf5j2EcjSrAH23da6",
  "key21": "5w9uinDo9qJqmZ63LpKEaNLUDiJktrCuqoAxGB3HENSCrtAnuya8mH5Ha9goBpV7k5MM5NQYKXnCef3seUy2GPgX",
  "key22": "56fAaUcWnouXemL2Pjh4wUKXPWZpw7SrENxXp3UHf6kk2PfqVnZSgiT4whFbY1rspHcF56mvEMsaHRRmUwkkEZbd",
  "key23": "3SBaRUzLjdcrT3aYdLEGfr9jUTGaAMEPSqd2iAn2ixqtJvwYaBSKw38EUysR4Wf3Shw5MoxSWcWPFPvbyQ6gGhhd",
  "key24": "3NSpacad9Mm8ZzfZZ1dLnCaP7Z2d5Y52rpB8VirMWPkM7jKkganJ29usU82gh1PJPfxkzvrrkc9JHPoryMzHBWRD",
  "key25": "3yF7EYkpDbeTd77aZigPDiFegxAom8sZQoRDU9JiKJ2XngBjaA1bKRAuGpPHwBwErucmd4pLqaH8B6EKB7SHRFBe",
  "key26": "3S9EZNTiGNqSRAWCxhm9KGcUS6Y5NAkQCwQNVGr7PAvcVk5wWSjZmo6mGiarQvCH3bRqcy7NMLxth7dGg3tUD88A",
  "key27": "2L8tP7qitTSFft6gR6raREPU4MDEsz13getgouj3xBUmN3fzYdHXhs3mz6sBtihGkitimhfiegGa2L4sG6zjxZDp",
  "key28": "2sQ2rx9fjAytC6yyZg9PrGZfbmzac3kmvM9MzMLe3h7XuSJ8NZtbnTB1FHVLgHQyNesqN9jc7KmN4phqJ2DTDwaP",
  "key29": "2z2Uay8YCV84v4xsVcSNkW2sYYKGjCWtRFEN4GiRS7bTixi1aftUw4MGVe7aA13zf4qt2sroMjPYtdQ7jcZzKS1Y",
  "key30": "4vMRs7oRgmpmFoRv6CkdRzLT4hgFkBMvEG7zC3VxizgiAGPKA2Ek3hSByWbXnoNFgEXrmq7A11MC7i4WyWeKbHGj",
  "key31": "4H5DBDV51zJX9mBMdPx86eTXiheDDGVAyuhfZjDkfimw4DXrMoii9dCLQRfSYbkg1LW8Q84ju5oQmFUCnCwKc6ye",
  "key32": "38xWgzo85NnW3Gxr4NL2o35QQhy7yeWjtnLT3FozBmmbpMd85hwc9oqSQMwUtuJ8BatHzeFYfBJiwatXJzqznvwd",
  "key33": "63sqxXimZMDQxM4S7Lg8aCvExMyS8FvXmw95KAvbWP5aqWNf3ChRjWjSMWuDD2vabg3YaHeCph5eePWn6CqPxXWK",
  "key34": "4uj9NZkqNZhouryXPaaC5gd6KQkj2JmEJLjsVqicENdw6vyCP7ugC5gFQmPmG9osLgKRZ1nPsXXqz2zJNNUEyzPJ",
  "key35": "ydJxbhxqZyr4P16L3JGyccnH4Lsn2EPC9ksEytqYBvxBQb4gDZpxm32o8NBiN3pj5kDnsgcznA8Dadwsa56mGLd",
  "key36": "5yUFmer8TqJW6ZtEYgy4H2oagzaXTqZnJPaTu2KmZwMdHUCqX9nifz1nME4zBSkZubBeomFbGxaGhVSD8DtWPD9D",
  "key37": "2GU9WKJ153Fg6eh6xpXo1TuLk4mmkpzc8zevqyc9XSLhdJhMFzH51J8FUQKgfbB1M7AdQ4bkwpYjfq2txG5gzcNr",
  "key38": "2RB3KXQpsasKMuyf6gVjrVAgqdPwnTGM6me1hrNDihdui34VkgVR2E7WMvrrSZtJ8G5aGtxm3N88ZrLu7eiaF1zM",
  "key39": "55Z2xR5A8z3RgHffYqVuh8X1AfZc5TW6gbmLcQFmSHJ5LFFttxJ2MtyELEQL5TLHsGrXz2x4pWsbYaXverdHPoUS",
  "key40": "4tQSY6Nqp8RJ6w5q7XEyK6rZyx2LVqsEYoyjrx2r8cfRU2dRktidqeKG3tonfNdYrptmR9aj35TDkKpUR3EJ46Yp"
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
