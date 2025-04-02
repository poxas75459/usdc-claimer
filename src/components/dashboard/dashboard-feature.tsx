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
    "2UedqaAw2EtVfVLKV3Y3XUX6d4aEhJc3mtyC2QbRmkfEbi3vy4sQtBSK7gwrbeXkynFBJ2jjgM8q613ywEt5scwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lcz8ZPvmTXcHD4ZMGhbMngFuBv23VoegtzmnHK94xV4Gns8rEV7dsp9kXCBX7fCZkFLeMANontbKUYgN8vHcFSH",
  "key1": "5ewYrCiUW7Yo4Ppso5Nh7PGF5F9nGMHkBYm1XyCNKrQfyj78ytRJkxkPZ7RoY7hM3nRDuTwqtfiJXQZ7s38pBJAk",
  "key2": "55w1HuZRmz9pCQ5JJ1C4NpJcEtkZeYHvjcf61KGwYrZ4cVsYU9f21DbCHiU7j2djDaiCngBf8EGCMay6TFwhJ173",
  "key3": "2jBfmpG41rgiKiJFWDmSXjzUtofuRTF4w86LoPX42B9NZHzBj7u4L2J1XkSATU3hdRNFoyQ7FVK4YLYZvwy9hrK9",
  "key4": "xxzyfhQJVmhwfLXBh5m4dP369WbLAwchAYRigrKBkrzL64HcBBJLc5ScFRN8s7PXPcGyuPitvmeLHHQKoyznVFN",
  "key5": "2EGN9w9Kvca14WkUPYfLkQmki9gxXjCiH6FuXM1yR4kR6UH8AxyNx4PcbgcY6BSQf8NyxhHfBeSo5xYXxqbEF8uB",
  "key6": "5LwQ5jtmuR7JT8rGhzWt96vFcnYruXSQgKP6aJYR5sj8KeDXJtknpKRJhfD4vhE1yqfGyk5Aya5RxaFdeAHpZqpK",
  "key7": "ZVcNVHnNav8TWqXfbL4g3UgWcz4XFrmtuCKmexNvZbKNqASQReRFD59w4JC1n97Aa7AwvuhHxJKdRLqYPZQBbAr",
  "key8": "4mLayJejnh25f99SRwEJLHsL2EAvkcfqXjer2xoDdJMFj63F36gLLaKgHFTTZHA2EQUys6UfrbqkmzoUpE1wrYGf",
  "key9": "RsQn4ctMG568qhreA6hBrXPtHr1nKAF7va6KtW65fcBetorrgmHJByhPY2wbLDvHZNnkczZZEMMsfxdsT1K1VeB",
  "key10": "3t4YDiXGP2YpLhH8yCerUeYhhHNG3Nca2wTwnwZDvK3fbuGMw2ctRVWB9SDvTGsacsgRMusth551TTgNjoubQFQe",
  "key11": "3M9Nkoijw7pedx5RZf41auXaMU6sPDvDtdNvuti3Yg86hYMaR4hEJbxK9uxddCcZCQbgWGUJ1TE1K325C2L6RMJW",
  "key12": "3KWmgV3E8xLauihofPw2mAZF7Ykvt7ytFftXYAWVzm2tR72N5fzn98UuLk6VPxhviwQ42xMc1QpHKEiPnfSUDo9K",
  "key13": "56k6YY2nj2aDayzY5YYzCra7KZ5nYDueJJEhQK6JWHPpJ9cWUFu1wsui1ms2oJ9Lf1nAPhF7wWbp22oEyhRDCDSu",
  "key14": "SFvDHNk78u4QqqPDVwJ4o3ZWFNDibT5aJVDSryDvY7juF1Yvyw1B8h1txzHbZUHrXAF9KprTvMMsURpqXc1GeSs",
  "key15": "4pCLL7TQhoGFqMrvsVFgiwJzAVypZpp7iKsihFDntsdHEV5zyviuRpwQt6p3Yu6M7izVdXrShGB39NuzmQ4nFYzj",
  "key16": "zfubox9zjej2kuehDoJgQNrm42h4XnT2ZjcZRck5TE4sS4oLKK9VrUcfT9TGpX7BFJpcYHZ7iHuqm4cG92aJG5X",
  "key17": "5MdfXUaSkCmQpdUEDqjnUCanEWqkWB3oLkShHqYPLMehzkX4JcKZsDKZ6J3jLcnopmF56PBaFQr23NKEpJd9B8yc",
  "key18": "36Tnz7cPHckZV9dqxsJEZ58g2xJTzeWNjmJz6kk7zTUo9qneTuMtikpkXfhBceZwwMdYPzNSbda5t5YQ3firjRXr",
  "key19": "39FRfbHVde7uLLQ4cVJvJjxunVv4TF2iPUkqvdGtHuMoXpPPTYfBjGrDVjkzBchVvHZm1depT21q93W4nnGvQEPu",
  "key20": "5aYAYseMFGq7mgmmP36jqS8AK7L1EuULGcQEdGKXnf7z1A4ZYtPVn88VsC43MZKYCNzirQSMLWu82tqPAfy4UfrE",
  "key21": "2g419Jd27XYoVNfR6FMmPwGKmPHHJ1ZYgsk5BK7dFiQWHpyW7G9yyCZheuuv4mgL7acDxmTJAM5xUngw5aDPPMVL",
  "key22": "4mmWGqwK2gT14yeoX9QZJciVkYADCCYzcmkz9SKeF4YbA1ghEPReDgXLR42bosq88cXgVbZB2WbeG9EVj3jdE9Tx",
  "key23": "wn3bRnzkhznrqGUHCdqVqQc66zhgpLAGpDv4pps5kcJnfNAa5TRiwBoGDgYbnEGworiXJwTFa4um21A8UBt2NDM",
  "key24": "58XazKQf7dr8P4huR1dLpp9RvSCQAKkf5kChyZ3fqLKCDXAcLgSdaXR7stRB2db1y9pEdqd7z3ELygnX59cRKi3L",
  "key25": "3EPpU7qW6UdM2PnCKTqeyXG4sLqiBM6ymP9pK6KrYjA7kTEckE8LFabXBe13UKfUa5s9WLy9V4tSrZbVK72eXByy",
  "key26": "2z1KLo7ZGvCPuoTLgeLCLfKafp5ZXBN2wYm1evL8UV56TvPke1Dj9bCQAEcA8KatBnXqEmQmC6gbyVM2fJUZfiUx",
  "key27": "D7cSQwvPzi7C44aPTf9vFbhYUbiSKBE6MeBeY84JmsHdFZut7gJJhhByzSBrgdzXMqGfr1BBekYGf3gknb6pkfx",
  "key28": "5GNv6y1UEcvELufZxf9SgdQy1MR14YhZzX6yHCJ2jn6hR2YeqbnV1ndjMuj6VTGm7AWwiEWgf6wCtTwEEzuFCgRo",
  "key29": "5oQnGStizJyrP3EpqKxU8hYkzF7UHYnvGvNXPXcjB7QRcRrW9ckvb667uUqhMsPaj1WqhpGBGL68EbquqokL2Umv",
  "key30": "3889C3SRm8s8NYFuhJG1XWTtZPZaXgWd4TZgrrsP3y3UCa8PM65qUfhEyWg6cjj8AbSvBLo3WWm6dRPvCG3uHv9Y",
  "key31": "59zLgHhpqu6PvFPtYXspK7wonVB9YsvtoqiYDZbgBpRb4s34PFazDig7RoDrCzkUpWJf4MakgN9fVYZPh6wiHcZJ",
  "key32": "3qhUdLjmufC8AKXDVWyznYCXP4D7DdtXragQX5DHMALTLfdUVZuCpq7rNowzWr71mfJTLrLqhZ4F4TdCePLzQiHn",
  "key33": "5ytLceaeiAEdgK5TfPBjgvmbJ8kFBLHd7dnMCpr9GmutYp5iE7vu7QvM1GbhgoQiAYihFKUdttKPg4MM2FiW2y9f",
  "key34": "3rxA1XGLbDBdeAMKXi8tbsrQv71GMi6EZLW5NkVZSNuh3M9PS2VvHtPAymjDcL6zm28MoS9kAabvTFPnHWTHidch",
  "key35": "2Wo1AnkKHbEkF27o2EQ7AJQpCp9NUoozZQr6jZk9gn8wjHhFvQqxCdkVWijBb9jt4cj78f9BPEYRFfDGsfmyCUBg",
  "key36": "2pW5Y9T9C7bbsbZx3wnwzTJTBj3W5No51MvThKdtCfJ1Rm5vUDZLptbtff18qU3Ep2keMN8vciKHTxDE1AoUkpd",
  "key37": "2oKMwyrvjxbKJ3H5WS4ecRi5pE2H57H2g7of2iU5bEC1zZdeMDCWZ2SbHus7iP7MQEP8HKcR37cBSWTPooyecCY8",
  "key38": "cHde4cdnHvG1qEnydD7n3NXhto1jtWcJ8S2RcC76LjAY4nEDM2tqGNjVZgD51G9bFcyGsfqvesJxdFk5MLEmzcf",
  "key39": "3fs2q337wFeggmuBKKi4gdqJYxc6Dzs8UgygjKJw3CgxQV768k1pLdeWtvP4R8DaXmkcs3A9wdaCUBqJmeptpSnF",
  "key40": "3G2V3Efxqww9aheCNAQDGFqVGttA7wd1BQVVmgqDbDuYHxvpLJfoxBRQBq61Bh2wZ5Uzgp8t4vwiAKcCWgpu1FFg",
  "key41": "2SoppKBeUizm9QieCAhG8VxFUHgBQ1PZcjjRa8BUjwh2W54msaZajRqYachGXYcfT8ePs5Tz1oDWC1zEC14j7wQg",
  "key42": "3S7DDDDMqDvjBU3oi9bxRT4z4ZKh64xFmavjVcaxuXe5XJnfwcoRYx72Z9EDZyEGxBcE6HLDgyg7tTn7TMfBvddG",
  "key43": "3gzQweMtqnoD4r8wbnpijye7xjvJFY2McwMxrCjz2qLjQxtFaVQdtKsMmVvGzHNCno44qoVo8syuqpzr4qyqpeQ2",
  "key44": "4J8dEfR2QsWrKk6UXSUxUJY7qwkmQWVXu61Kd5Ko5kbYXoeBZdkerpH36vWETZb2FzdoLCu3kDW7uEbQaKC9HMHG"
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
