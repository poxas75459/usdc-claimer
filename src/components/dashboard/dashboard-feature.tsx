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
    "4jm6UcgLuQRrwWWXtydQ6XBsDqx88N5TJtNbnnzNJg6Dh898zr1pJfkDXXJEoV6zxFdZzmRcUp5U5iku7tbuKXCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AuFfAJa3ndYUK88RykebgHhiykbpL8cJ8uMmyJbWyNCJ77foL5skY2vw9MXgLr9zZbhDw7Te9ahSbertxYCJr46",
  "key1": "5oM2X3gVhorQAuAiSXiCVMokdmtu43ctURaJJBdJWmL7pq7MxDW7m9MAzshgW5EzCr6iShLFrQhPas4qSx8Njsjn",
  "key2": "tB9V8hdXpBGjG8tLrACJbEbvvyCFMkw6gGAqBD9iwCEutfTsASHB4d7pwNX12AcZt9dkwCDiPnSmNdgUysKvkF1",
  "key3": "2YcKELEY4HcWzzdVCPDTotqVZz9BRUbdSgKT5qzNUg8ozMf5itKdqtCCburCcTm3ZynqqkcbbyaaZVGtWmfQZxAk",
  "key4": "qWfDvoTSj7QAXwiCyqsJWxTSymCA7KznJH16NT7UR3pvBqrnUD3gSSf7wE74XEv6AfZmzW47Z1UwqmVdz8wNoju",
  "key5": "2JPwSH1hh9GEV6noHGWzE4VopvuWix6XoGjVocc3CWR9E1Z7ooMovVr3MCxSpGEwkmuagPknZ1jYzijq23QjadjV",
  "key6": "CeJVa7fiehM4wQE36bpsJRaAjYhDM3vvG4areXUPkcuMhRUiswaLGmesSHzveA8WczWUCr9c3ATbzU1Sc3wfVvC",
  "key7": "2J8XPcbzcXLH5BqN7SUcrWECCQQ6vAWmmnUyueAmHCdhpzAVGk4BxtsczVuCohx8GxNyQyk6QqqKDV9g7T2KRuFC",
  "key8": "5v9GHTeyY63d6Dtut9wL295ombGDMCcTNKRwGZMKx8P9RJKCjjN8xrsfZT2rxTGVA9tYuXjBDNWKYboqw96XHzxc",
  "key9": "2BAhhdXaJ73P7swbXpTnNVMKQNngV9fQCKUZYcv4RjfLQnhrxzwctrQdmCVHGHPFupCHqwCrzoxPRt4HsJvctS4G",
  "key10": "5mmCeGUeJGLcRTEybS171KJDdfaHxynqrj87iHh7Uz2DG9w7mnTRbZJR6v7qzbzKzjqAK6oRgzuESqozpfhsDrdd",
  "key11": "5aQfLA3bS1eLWqC6ZPDLLEeoZdbUor7kDYBS5BY7nJLd3AWhCw15U4NA8ukUs5HKJtu3KnG8WaUgEBKHjgcKx5VV",
  "key12": "2ge8zmAsireMJCHb57eYb1nh8QatKNeJp8GN3BB31oKAZyGVeopamPdret7ge3Y28Eh1m68QVNYo9hTNjcNGtuDS",
  "key13": "3cboMeQGSYQqBDC1WGwkvQFKhBbB2F5NHkvxHqKpJV7p5B3YvGL4ACvjRtHR9ATLgJ3jGqTKKZwArK5UHXWrHrmB",
  "key14": "5Ve76AT2UwsXx8xw8QA1hFxwuWaYPjZnHCvcTbGQ633V5jDnnFTBdqQEBDm75LAsADjRHvFDCJ2vJF72Y14VB4Gi",
  "key15": "NVjAJwXRzXyUv2HRHTT863FxP8p1WZBUx7dGiimZjdz65bHuu8KUS3aqEzrnDs7cyzE5skjjnPs8WZTRGD7NX93",
  "key16": "4naSD4ejJiZ6MSsWGq7fGEUpLrJ5XodkyB1zg4tPDJLHic3LHyfwDQ9fLHKBtcVry7N1F9HFFnad8Du6DbEkYxrH",
  "key17": "5398ixeT1HYeRNx2zH63JY7KuL2V2ubMzCBqkeLHuF6V1vC9dh7RkypinWy68tLteVao66q5V7xW3zjjmfiXVpbq",
  "key18": "2GREpXknaYhDBUb7BDU9fQEmjqYKZeVehhyEBhwqbnWGtQwzg8Sxn25crPC5Y2n4YiMo712GUkbRqxo4EUfJZcEE",
  "key19": "3s3XndKU7vXB2TX6LVg9UyZhegD8t72df64bmC6hrNKLfa65XjgJ4Df5V2AhDEBc7MPFy5ytu9gSD9EB9p1Vtdyk",
  "key20": "2wf8ZeuHk4mFTpbXQKopDTjmdyYThA24CAgFjJPC9D3vMEDRtf2EdY2mFvhfgowbdf3vPs7FCNDsitZuy1QtqaNi",
  "key21": "5qDST4VW8J2ejg3ANCBqivwpmLYU1qKbBoE1v7dreCid8wc6uFo7esr8Whv7vbMBUKixrpFKdbcSVX63aAuVe9Jj",
  "key22": "v5FkhYNSapywHzhDQngiA3tmD9xcmqKDnfBmq6iZ87ZA1wVjpcFreaB91nDrDzZ22XXanxZJERAbtV7F5G1cjjR",
  "key23": "4G51oTVEkcQjyEwbPeFt39sjtz7SaUr1vWS4TZVACV3oAxbFS4roB4GYC7huQ4q7HPkFdovR5BgEVwZvZhUkCyyv",
  "key24": "95rcPwF4yVK3EUorYX7raT1DM39LCb7sSsPTVY36LcSVCLHwQ54f8Q6pRG6xo6CZnnrGFp4zUzD4rjCgLWgCw21",
  "key25": "4JCT3YKr63KpCxCrJExqfuWg65RuCy7h65KLgs9dQB1Fy9q9QMYBiDidjVpjKL4YdukyFLgMBBViB5nmXfNxPd8n",
  "key26": "41yPc2RH8cvaTFCUstCKRQRYcjLjsxYP1fzW3mLoYbcKa5QWCWXsaWRhTDtfK9LLgFsRzcwjpZFeXE7B5jR6ueCn",
  "key27": "4johGLarP1RbS8Gi43M1aBcSamvSFVYuaCVEpNfFPJMzLJK7eMSWLQxT9U2cqvxLbdRRpa2VSJwGBMUkkpWA449E",
  "key28": "NMJzXoVeUXdF7XYsbQ4v6XrzLCGf9wNUmRh2znqe5iTJ3AYfe5ZdQotmHMfCN6c7W1mXT6aSTwCmHCjjeSufwx3",
  "key29": "3VZgtQ2xLMZ8FZ3uEubsTU7LG83XLPXTwx2o46Wm9RReszN231rgZXwd31tDAGL4mNatTU1DYFi14jvqVNxfXJqx",
  "key30": "2u2JBJkPTwP7iGRsYr9Rq3mUsUyndFAAHsw85J7DpDo1zk2Yc3177C27ehfVPFVFQarj73ico4DvNbPGhEgWrHU6",
  "key31": "qRTjYgyTd4fQyBzedwhDzsAV9zmCmq7RKi553toc2vHfL7YhTVUbZERargs9gqux3VdzanyuSUQ6msmUzo8RQrH",
  "key32": "5vK2x5a6XhiXNgGnd7iaR5ueCJmDW1967RipdZpz9ydHHLC1SKMHdu6PC7F4eFoSxUaUsxU4DTxP2PsbhQ2gA1AL",
  "key33": "3cMrBNEsv2j3LJCyqNNW959CEhn6MM4UJwu3om7esFbbWgVPJ5yXnQTDKGVZefn88XtiLUgDYFQih9dYAen62xfn",
  "key34": "3KM7agfwRvdCjpX4fhfYeio7gd9QwveajvYvswjroGS18qHPNatK66XoPJhuwfLQvsmBcXsd1grtKUsQumS3fRN9",
  "key35": "5opHVHSdD3pugYs5J2dGqQQqQ8GcXWwWcnY5Nc123o5j6KXZonSSfxv7qT7GMxX8aEhR3tyjQVx2J3L6GSynMJNU",
  "key36": "3G1Gc4kNpoqrRsYcveHPDG4MPQzi8489r6zvu6LvZXYDFLthv8WW4aTouheFbwxgH8XJxgUwhuWfyHacjPCV6hjB",
  "key37": "4LZmquWmo8MfBQv221BYapufcQiwuYkcJ2WURGDDJJYuwAoZkRMegVZdae7WDLB2gzifkahREsnbfvLppRZMw46",
  "key38": "57txLihHJPhWfGSwjS6jEhhAEpZtvLN9ikWbkhdc1SQsCX244TXD4mD8nYiKiCAaXCsq8tfJmnLVSt3akCJyqS9t",
  "key39": "3kEWwFpEPpH4U6tR3NSiQrAU6crDjsAMCjpM4GuN6FnYi1cqmFrNUYjU2NeuNjAD1Gr8RNTPXFKVDSb85PWLqT67",
  "key40": "2hvN43DjqFkYX6d6sv28L2cBVZab3Xby9aJm7XL4ueFL6Eu8dc1A25qhTiXUJUn2mEn5r9ZwNpGiH9CktQ2Vth4J",
  "key41": "3mPSxZw79789kh8nJg3PQADuy2oAcbm46jofFv92TcGeG8NDBKcRrwgwLSm6FmAZC9ZpXSdSdXzWJrifz6NKgVWk",
  "key42": "QBzAFCpUALK9nR2KLggLZEkSfGWSGFgjL9Sm8iVM8sh4Va5xE8SyZVJ4kRBnWwYyv8W5jGyfcmNa6qyAPE1QDk4",
  "key43": "2JNc9k36NGmWg9EfBJeb7P4Mu4g5mhcemtwG9h8NpLuCphx9v9P7JBbKQhoXCHKwq2PZj5VxL36SNHi2AZBXUWv5"
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
