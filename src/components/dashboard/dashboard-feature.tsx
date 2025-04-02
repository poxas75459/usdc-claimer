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
    "2Ce1Z3r2yNQQt6rzTpsqaRzcHdE1JaWGGddhhEvzaZ4kpqDwUE4oRUMFE3cg7KMpfkJcUuxzEykzJ2HrpbzFEVij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJEjyfbAhAUuxT54S4eq6wPkY7YZ3eyQrm2NcvScFyMZTK59dU7bwjrChfPQ9DZzkiCBxecUtMXiHCxBDYDaz3Q",
  "key1": "5o8CXMb7w3UMgZLbtLXQaWWjBiqk6e9YVpxnQdsbXJmfinAW23SBZdyPNKHdzDsxHR6FDicUgVTpWUGHkEjbfuvt",
  "key2": "4v4pVQyhh7aP9APMhBUEnmyA5WZoM51t7yVQYo8dshzGTuz6MqKeFo6v7NMX9BYqMyFVvXWgo5NhV73JUUomudHT",
  "key3": "3PTYjNiKsBVf6keDsv8dDnMfZhbUD1GjzxyXpvd6GTMTb2bjqUbx3MiaDBtuApCYh7jV8xrjfFJaA5yfzYKCX9Db",
  "key4": "vyrTtgEQJWsGEHiEsLtSEuJQwp342MLALRgorUfF3f6W9SaCURNigjFi6mXi8vXEjCF5kmyKqBBXgTBcMvecvXv",
  "key5": "4DCAQF4YzLiUyLydfFW96S1qyDkYgfbyzBXqH61xpyBuF379fQmc4ASdK4obuQErujh13JqJrdpaqFfvrRAf9dmt",
  "key6": "2bjx9gG1kFd7QNvk3UYv38B1aNXrWRSbS8UA3Cu8bEnnmR34Z3xtuZj8JdGT9VmR2m3g2apCb7zgeun5NaqoYqE2",
  "key7": "5KkfRYLHAK6miTPNTzEtEwyhAtP8jwnfGwrDqmWNJ9gf7SJqMaPqqsapvyKwqqhmT3nUNJAX7aemw1cJ5oo2Wvxw",
  "key8": "tAJSN8iVvCXVDpDzq5QLL6HeqEdmr183RMHMqVMJ8hjAcjuFTVuXX1k7yJgxacBnL6ue48ivEnwnGwf6R9x7FTc",
  "key9": "Vsdx9RHZSFsus44qJcuN2X1NavH5v3RrrETQ8j9iAttFAWnXFPgT2ovXjycdJKNcgusx2k1FK6GwtGxfz8YwHux",
  "key10": "3mF3wvU3uSg77jhw1Y5giTe7ovWS7NAyQS6ni8M8bJPWvbstbAkuecsiYooTd2LBxmn9P2zButnWwSDvrJNFuoGw",
  "key11": "5Z6uQonPkKeD8adjqg9Np33eRF2s544C7C8kmxvrEiNbR3QLLbSyrodoz1Cq6BK1Vg2xKNMVjgkKvMjgU8fAcGAa",
  "key12": "4NA5vaswJXTD7jzNhLT8TGmmtkYouw19jfq6sgD21a7AcWaSWXJKVh8pNoKWJi1XPQYgHNu5hVmgheNfAeA6U3LZ",
  "key13": "66PiEBmqnbLsCxp6SFbYqXXTzCCy8LnHUDCAzBSd4AfwB5KydYeGTF4pB9L8hHxSQeWJHHoZER2CxfCkoJHK69jR",
  "key14": "GNfqkJJq9w9VZN97zua4jpUHLoB5mwqF1QHig5EZV7G6PgehUtacUkQ926FAVPX5UYqBne8CZLwsQRVyw6j7JYd",
  "key15": "487ZiQcxwpPLS2xaRmkRJCNmkCSJqHv7zH95NbN5UQFeHZLnVVfi5mKSiicNEeRvyczuHMWyCT7sJ2VF5BSXF2R6",
  "key16": "wUr1ee4WTwo9hVWEJ9pzepVFtttRB6HqQb4YDUvDLL54Q1XtBdhrWGYfpHzDnM6mCgMbpc4rh3JHAB71YPrJHDE",
  "key17": "3pT7tEvsWi534yTra97NbA56wHqiSw8KJBKrSYUAHUTcoqKquxg5CFy3GGxdUUAPkDgsimDujXsopQNmsKTNGqw8",
  "key18": "2SKi3CiyhNYwyQxYWt9WUh7GukBZTEU7ie6KnVYTytCotH967s9maj6z35q3VvcwasAAiyQdccnQvLEqjkQqpStQ",
  "key19": "4875sgMJw8AcGqaWHdeosvrUNbMjCZFPELqyA3HgL25b4apTDxZK5VSxiC56zPH7puT5XiV5xumMfiLYeUpNfUqB",
  "key20": "5hTfhnPvewV8vnfL2f76xJGtirsB7jRwuqmpTt2JVXmkFpKgSquxwcbUTfpTbh3qdqsW6m6T7b25iCfZ9HQEc1Bd",
  "key21": "RAj3gdgEuMJWrzWeW3WW3G1atntMCuGVftupXLpQdY4CAxVstMhN2yCaqY6GvcHMuQr3RqS8eKXGvRTqjJt9nXx",
  "key22": "3hCmkjvqwV7855B88MVgS12YqNJstTMDJuk4gm4FitT8JYpth5UDgPQXUwYETaHMVL5tDZbrFY7NGXsvam1GWGDP",
  "key23": "5fg2ZbhekjNe1zndf3gR1gbSfcjm7BqiR7gSgEJ23NT6q2LiXenidKf3XK2i3RZpzrKrt2uXqByc1Kv7S15K5ySv",
  "key24": "67ZZiKEjsmLffT46yQjHnmcEUp4pFkXQA5TDqhHiDeFkmWfEZYVR2PqzMPKowL38xerL8WymmjoNfwYg9bPhK9mm",
  "key25": "538uE2kBV6BwukgCZ25TkqBsoQzGtcxXN2Fq4nVcWyAE6xDMdbNK6EpXHkxTsjTM8U4M2G85SqTbN1XzCkM3QVQd",
  "key26": "4NEwAMnyA5EzKdMKyPU2KUihfvnBrL5hnQ4HY3PP4JHFUJRwwqP1wNNpeWQZ2ncYm4AmUXhFvS6sQXNYMqKZ3ZYH",
  "key27": "63AJgzsiziq8rAi4Sw16u5AVU9B5c4ZQhSF6tA8d6zj46nptfYGKj4o6zszbXa4ZY6Dr1o2oFL5MBfMqhPMyGqR8",
  "key28": "3S1TTBdpiFtWpN7h1rwF8dthkrHrcAjNn6WZHCHw4hJS9QiLK3diVpHcUyjy2UN9g1skLSx9AMmDRbN9jXe59Sj2",
  "key29": "4rf1PU3eYRsLWbq718gf8JJkCQotswKRFpfVpoT92ga7ZgDe9NJdaTetftqoxQ5FanhWai31G5sAd4jMjhTZvYgT",
  "key30": "5bAdFVnnCJFxQqoxiKFMnhQKtDfT7PoALMLB2xFNgYqfTHQt4Ekviuyib86NuQefQ9w3HvjSL1WwUcdP7CKNusXq",
  "key31": "2EDC5sWZ6L36N96p1oVzF6DPD6touTHu6esf1uzkyKw4s6vzyXET5iLtCtVpf8mYHuXj57nGp9v3EvNMm4e9FsVq",
  "key32": "67qAt5YFEYEvVVy9RhUAs41JEQE3DWcTQTWeDFxpP4Z2GhjH5UbmDujqkR4Saec34eETGrQGeX4v4Bkww4rxxEUA",
  "key33": "664hijCFWQdQsptfkzikZxJgrchcSytGryo6UoJCEgLMvQTSsLMBLkuUt8QVkKKp1PUpUcWsuL9euWs96ncEuRzp",
  "key34": "DwUYYcdXQ4Bf1uggyoC6xpjzTmZ8SUcxtTYHdAAYxgGB4c184kVg11PY7pPaKFpvQmEiB1FnBWoge1TQ3mFDXTF",
  "key35": "P6La7VcLBvrhbzX7GGmq6Ak9hKG5ybiWUWvXC7MHMaPuTLo5USQ7q331G9qy9bHZy5iQKPMBLrK8HQCZfyEApaN",
  "key36": "3dUmgSfsxhdoKoWoBticZysatzcDWUis6pyJ1oZKiaxK4dWNkx8SjpUabAN8Z9334VXd6Jhgm6kHZkakoYuHm8LV",
  "key37": "4WYscN9h3nTZH8NLbnMN5rFnKmNVW7LwnfYCSpgeRJ7sXRtWg9v6QJ9eFRLYCsVrCTQx5uDpdp2vAfCeZy19KFVA",
  "key38": "3QHwysnmLrKXuToMu3a7APRnEczVXWx5ozyUYLN69Fdot5Y2uHXPT8jwAVLV1KUcCcBZQQVLPQd77fa59hQmf7qZ",
  "key39": "4vvxefpJpaCskxgAXApEJxdkZWgGztRVPeh39sqrzwPecXgsaVvwsSCq4p2PJgGQbvLdmUVydsxheEwqvBjmLHxB",
  "key40": "2zDvCch9kdi6bhJ5XswpekTKsDkEX6H9PBp3kqWFXGuoGpa4CRHjaqNpDRW5NVZ5WjHzrZMXDqRKuiq9WXtyuA5j",
  "key41": "fGkwgHrq6dc9YEVhezP9da1FN3q3B8ZpeScpgmD7DeNm8yy3wxvDZFBJETMJbFicqsPE3JpZYVPx8mX6HQShe9G",
  "key42": "5v1n6TvfC3AnN1y3hG8tSWCupDHddgcVasxqnEAB6cdSQBuWrKDnBUGU5EByocKHrdoh9WwWqTEcip6gqMk9oPdU",
  "key43": "4dJnQtNHegXE9Nnt8QRdo8hSMy2MWLR6SNFZjbCePswvvWGGjCCVAYsgoQ2KBmvx8LS6fmc7ZQgVWGM8JgEk3YuN"
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
