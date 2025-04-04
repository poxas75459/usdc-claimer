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
    "5Ec2arBraw69dcGvrBySLs2XqkWbfu4o9CG5BVWHBfaFhnq3hSC2jZK9fz1QYEyqqufWJc43VfcyJaxwZEpYTe9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJkixKeU1dSiyACBPXsd8n2USVcGoUrML6Mm3xtfT9sXyKyR9RGUdzhgeGrDVWynFYqA5x3t6jNHYGCbuUsumJv",
  "key1": "5gwi9xAaidUAoxQjSyA2oyBVf3v9mnGJdFBUEkEWYk5gPkrF3Nv3SjxBubYKYpx567h1JdEv9YySFpCX1sr944wL",
  "key2": "4G9SP457LrdUB8qrTXwd3sP4P9rcmgThUZeXj8XBk6RAJKmcCs2F8G7jk3FDzyBrvhgmwVxFjrNeiLs1Sm171bNr",
  "key3": "25iyPL1RXVNedUE7a8B5z4bTdBLboACht1AR6avQ1SHXJZGuaHL2W3vvtoqUug3fdrWebpPe83qQe8Rjwabh3BRY",
  "key4": "5vYxCU8TQUN7GWd1dgdKmFuXoAVxH1o9jN2FoNzgWKNQcCxwWq1BX5jV81UZ9qN1e5XQ1fBcKqGZ1hYN3DwadyYS",
  "key5": "2EZiAA1TcqddiyqN2jHoX8Ni6R543JrPtML2Wj2dtx84KXYpTXZ1CUVNmEuGH9Hsakh7PWthd3diTAnSbcqqLKRC",
  "key6": "22Su7u9E2ahJcs9HKF4d2bA648j983VwYokWKuuVPRLPajYyNoD93aHes1RpAuFncnT2cNUdF36R8hxS5e9oqW9H",
  "key7": "QrrSag9uLVcoGPnjiEHGSR46hj2nfruN6GffPsiSaotfSSj8sk2gftW8adab5XGsqrnL6guK4hVJGZVtp7tmg47",
  "key8": "12ABjkaLD6BrunYhaWqLFHwLBBaSjAfUewAgJ1Ad3ggSRzLvZ1yWoAAqGKrZ5sm9yTNt5w8fSv9GTZBXwakrTFJu",
  "key9": "5Medvggh1RYTk38abycBpv2Ft95DcL2VkfRE7bNyncZj64CKPXWmGMxqxmb5NacsVvCNAPimfjpcWHhGd6FPvSBL",
  "key10": "3XLX72TTZDRpekVWRstni6yEXqgGs7mhAPSZ954dQABS2h44oXw3N9as5xztGNXrxekh5Qt6qkvQbtYEgpkC7QTR",
  "key11": "5J3X4Vr2E56MbTLA43aH5cbzk6GqKH4FuhvM3gr24VEMX86WRfVF9uFMJ3Q1aWgBo9hLBDUZkdwRt58DQirVN2tZ",
  "key12": "5p72kBfj44igeQXVb1tmDdZP3SJ1uStrTdYZyZ5M8wiHqsYyKTcEAGdPn4u7pZybnpz9XbML3RcJUc6krrnWhjfo",
  "key13": "38pBkAk4DJyka1Ypazw24NEa9sk7YkkUu3sLRYhV4gbiGE1JDqeVTBAkt6v34Y6hsViBUde82kHYWmrw7FNHPxqt",
  "key14": "3M5ostrmnr56XkMJWciyfXnBrhKit3Q9hRz8pTqnuZXUg6EKTg841xtisrLWbno6p6rNwg4j1LzKtQUave9iY14L",
  "key15": "4K9hA6cPf6NvgzKQAE2qRdF9zfbp42vwVhb5pEY2Exn3p76PKpXfrVGx6gEJw454GEMYaTM9wiiE4Kc9v6YQBwLa",
  "key16": "5FbiAeUwXko9BCt3AkwQRuSTyDcTjVsLhewHuFpUg69ZbbaM8hSUyF8v9qZdXB73k6JNXWV8mKzqbekAoXXzfjgF",
  "key17": "5beuPFyBXLpKZWNzFf4zV7bQA4W67sU4D4E5NhgXLrjRbXne9BCyDKhuWa5hoMnJbfY68YqyQJfs86J86iz1mEwy",
  "key18": "JsiXija3NT344CnqxG8bqb6uzYj7kczEGUTUC7A6uX95ixhYtX5yVmR8JxiXzF7eYXudzYReLPnxAf9pzzMYQGr",
  "key19": "3xv7QJJx3mgLfmtasHqYhZZ3bP1ZpMbi8t5LZJPS4ufDGmstzBsrUP2bRRNqaHJMtHwf5MAAeEfZuxFA9pTG2ns2",
  "key20": "3eaiTeLz6aq6bGS9yKh3yynKvZNyeDVJpzsXEqXJ7GhJqb6c2hh9mLDCaheSVzzUShFdpSCr418z5S4wTxsY2MKW",
  "key21": "2tpaRQE6CteTV4kq7JVEk1JAsjHDHDj9MQK6WPw8Ybd4XuRSt841dcJkEgCXsBdwyEWBTkyZpZWcTzEZBLMmn6Dj",
  "key22": "2Ku1yDuH4uiCsYMqWFNyZFKD5qRLBDLkiGhVyr3T7mDCQgL2jrnkcYW9ZRAaHdEizAyRcJjcsQJH8wSqXYtd2K2C",
  "key23": "5bFtVL3yPZRzgCmvCrSQdkzGXCx6UWrTCBu2VsMD9WRcAR4niV9o6wvsL8SDdiiS1cVq4JMKXHXW6oBBgQepqzMw",
  "key24": "3DpVAC7KvPbnDRuzexyhHB4xzKJWnpNSYWEHdY4KP7Rg1jRQk4GXha2JokKh1dHHPSxwYrAjJs5eNMVcw1KieDVN",
  "key25": "4zMchdmJ1A9jcpDoVbVsPZaReko99cDCq5C5w1VfJfebeBFmpbwHMCBhxsFPRAauyhyFRKXJiRZYDa6rcMjgE6DN",
  "key26": "KmJEZMh34SeV8A5vbxy8RxRR3SzLFTbtofTFfMZm5w7Dzs3F3osdKYnQKdnYNV37ipD9GZgHQcwuS1L48RNL9xk",
  "key27": "4K3BpXYbrg25DSYeQqA44jf4sMc3tP3QwFA64mDev3DECeGVeTZJ9nULghfz7gjDW5YqbfdzeLZF95x12nC47kT5",
  "key28": "59C6KSVKU1C9iWhcaNVwjaL66SGbwwsKaSRKybkWrv2Q65TbTPNY8Z7oLDuwpKfeHeRxj1zeHyM7qUabY7ZpaXT1",
  "key29": "3P9NFH8B42WKAposYDDzTcQG9if4fvJmZaDHvsZ7q653yygebP9UZStxcZCkTbvrC1LK2hUY47Kg8wGwuoGoTq1C",
  "key30": "5TrB8Jn28LmT3bZAJHn4j6Re8s2GqdQBiWmksB61mLFKKGoNd7KmMUXG5FK1tmAztidEiqBkKQAwyoG1RoU7Uhst",
  "key31": "5DbYYeqQwqcovnA6YaFh8CL5MLB8VP5tY3VtkFvqrBP8EZdVSiVBcMw8R8ZwSkzbpvHy1KEM7QJsCzAWqzMVWJeR",
  "key32": "28qhkWuM2ft5yL3sg9cMg1ceWxxLWXoctLQr8875o9TXKMtDyTtR52bzPAeQ2XU6vZkspFXF8qSj92fvn2n8Fefs",
  "key33": "5ermuHwNSej3hCpLqHNgxUXbxn4faeMcsq2vFdfut8fepUYCLbAYHLFx1JXi8Uxdb9R4JkSXu43pwRPPYnX6ycLt",
  "key34": "zNNWm4DtwC86oZGxKCZbyTnD7pkWWs8bmj6VTJRbfHi6rfzKyiJGYNV5o2jh36PUqX1jGLgrC8mLvc7xPYA1SA1",
  "key35": "mgbtRsh9vepy49WddvH6CAjC92Mj4o4ejFZ5DCcA5vk2oE4EZW8Qc2nQDHumeVjedFdFazAet4XpihPPcTeeGDA"
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
