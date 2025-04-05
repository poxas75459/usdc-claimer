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
    "5w5r2Xcx5NgpkGPQGJuout4P2iFNB6bgesdrBc5KoBpYHzJrqXfyFS6V7YbeXzcJrNtEVjSuSpCvmEeXCJvj9NAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tGvrgExstwscwPBAdx1rnWUzXqQ6iUjVSVQTkKmgXYZB15C9tgt8TXrX4puQrZGxGQMhbaPNUzaABvmyRxvzooQ",
  "key1": "QHbVNi4PSw1VPEF9L8FWyY6N1wKZBx91YKqjLGMP4KkSC4C17zPynmowp6jJsrKNUBRCF8wNbPxFUpZ3AvDeR7P",
  "key2": "5kDhjPUUGmSnq5AWpzhwwmf6FbQygkodRjCvBpLgEiELK1QHkzfunip3oLRvpgJJ1FH2E1J3b1qnMK4pmdwfo2s9",
  "key3": "51Q1Gu1RiwvuUPsdfccSiceZJemmZ6YLhpZjVkZqohJEGXKYM4dKwcxGu8DcHVbDWQg7zFkDE5hq1xyQGcu5KujJ",
  "key4": "3essT3nGZjanVmYgkz8KJ3A81E2JmESyohb4hzd1h8CT8JLgvJPnsn28yhXCa8iRFskHDE4SnKF18Xx8HqmUFxsL",
  "key5": "gNXhWtvecEiAacYx4fHfkfmB4E7g4KExytPhnaMVURqTxhE65sHfXFADZmDWSrjDLEcZt9oGeXG4Sc53zTCtU9m",
  "key6": "31F2fydKR1DRksJdNKPXqf5Dg8yX7iV6iHyMNuUjYRUPDNYgzh9C9vsp8XQHTuXn6XcxJY9L6TBctBnjTZ67k4o4",
  "key7": "3oYkshXEVA53445Qr9ycHWWVWoKxE8yde9aR1GqWny8zggdzMNh76hpPyaY7ksX9cAKgXbVi8VfUvukZnsM7xBNy",
  "key8": "5S5uQtYdhR6z79DBEyGW8N2BzyeeGbYoQcwzKUFkCHcbshJfKeVkFYHQKjKGE54LmBFHkTN5qdAahLTtHoJB7M1T",
  "key9": "65gsRh6RD7Mj3X3TaSpcYGB9REcfhX5LMzCPmMrGhfUJdNzMy71FVZ9zdJhTPE2vaNoxCMCsDh9XeeYaKLHCkNBx",
  "key10": "46M9W9podiZ6Cg1qsZCB4c7ZeuoqhCQg64Zgm3xwPmLaE1ASoc8RQpwZVftkikG4Wy5MqpjZs4zxeFCSCZjFKpii",
  "key11": "2LpLKyqFMYjX64btE6gFytDTogPxvuFzKaTZBmsv5UHX6L6aTfc2bnoAGCpeeod5cjCx2hVd65B8cVFwGLKAURQW",
  "key12": "5JSYbwN9f399gPzu3y2NWVazfbAw195LPCgQrSK7ehwTphtYGSkd98n4ZiWD93GtejYd28GbM4PmQF1Etg1N3vDA",
  "key13": "4Q6wMr4uErTPxKajLw8UpsEipX1fRN82a1KTRgm52M5GbicSTptKoSueXmajYNhquPnCcc6aWADzD3TS5sq5woLf",
  "key14": "45N481B6uPCiz4dvvhvAZ9pk3ACZsE8aKhLjmUdQFqujorG4a8BAFeWDZ62oZDUpSGKRd8FwqZjCy6nECznqqf9v",
  "key15": "2cE7wL228ijqiSjFdzdCagGRRpv95EBaxQe5GhQfdq76yHCDbGJWvHa5Qmz3jLp7Y63Df4UdCHrT81c661RxDQ4B",
  "key16": "4oQxzDkcm2A7bmDXL36GdJNMzwmSKgLWcb8TvYnUaojcu7HT4hZxbCzj93Bcekwp2UsYWThTkSyS7LDDrcie2bJ1",
  "key17": "5ddMgeSXKpbWKtFa1jMGtevWd1MRXoMqzrTw6QiZh2gVJfbWtFCSDEgVzetQKDAZj1khZws1fEE9d8SJVPYmY5GH",
  "key18": "3pdFsLLZdDjkmJc9qbrruHQtjXP3C2k2DJ6cPoXtNxqCvxhMZeFVKrEU9Vu8SxGsETEtrvLjetDXbPsTLcXsreth",
  "key19": "WkHuhrQtC5c8z3Nj16Diy18vkJF8izKzMP4SEkkmPH2VXhbu7jk9fMjTFg1tm81ubCtN4BGyWgjPMji7MCX3RzM",
  "key20": "3Xa2Gd1nHmG21FXstdCdJ5KZE75kRHYUFPhTKfRehr1SwCjVMZk9TYiNQq2SxRGfRrHGzdkRZHyaYxgEhSB1XWgb",
  "key21": "eQ2km7CmRnZ8UVmNS89jtyqgLXz77WTBtBuTatXLm5c5SWbwcBm828FTx94qckavBZfCkyHZrDKttMqMijWchve",
  "key22": "4itqYuJPSWcJUkhGQ3KMPV3MseQ2jJTg6dGwY4FpR7ABKwXDGVfuLinobyKRV4qqz2gd1WxkJ93EzDVRZoZU4SUw",
  "key23": "fGNFhKwJ3PmH4A6C8D3ZDrboPjTUZgWwBn783rqoSXgryGrL1fhMUNsqS6qLdSApSrNmbqg4BSD7LPM7TzLQEuP",
  "key24": "5tNJwLZputuESHRRJBbSYETQjWDchUzDfY3HYGoUZ9SnHNmhyqRt7LYmSURx1yD4c9hf7qewj6xR6bBi7ty4i8jm",
  "key25": "29SPPcrh7spYKamY57ZjJ8G5QntRawZcbhEdWhWBbG8pNTYcZXiGkZbqCEykRw7jJCN9rxD8bVD7kb1L3vfXbhb6",
  "key26": "54zLk5h9PLKtwzQ7RVou3MtgG3KikYuJRt33qSPD4u9mPUZqqee2mCi2gLsVRwDjAiv7ejU9Eh62VeSsDsA3bzvo",
  "key27": "4tWYbB12wocQNJFe7tzKehLJomWNDoU5wJGhFaSkjdnJ4dDWSqdMDenwc2u1Mv6uTqo3JjYRFMSzCUf7aB6Srzog",
  "key28": "3Dg66oDGSWRoeVP22hAGiPihf2NkB8gpS644JMs7ykwKJ7EdCA6z88dmEpyMSRCSbCm2mGCko97bD3px8jr47bmH",
  "key29": "3f6kk96fRA8yvwhEL9UxkKj3cPtbGvwGvYA7Wy7dXcSzHjhrmPk11N5WDh4QspAhSsxCEhTqJokRVZBRvSSVFiHP",
  "key30": "4hN9vfNQBkEAeDNwoNFLmaaamTKVqbU2egrZjXi8qRXw5gCBPaL6oxEL6ENLRT9uKdsXzDrNuy3c3JfjUvb1grnv",
  "key31": "LzERFyLriTMXUW8496sDnQhQRjx6oXrmr3dxSLsNwgvVpKWYC6j8AKMVggE5c9yGfZNjktm5PagtkXgbwtyUAZg",
  "key32": "3mtZ85TZBGzUaqf5RqyeeMUV9tLtacxyUzPR3XRotdAm3i4aDM9FxY6NtUejBAHi1U6sEwSUFL8tMyw3kZ4Btnct",
  "key33": "2vSSq5VdFzCpCscjGS17VnVa3Kfv9D6cTKYjmmFhNDdHSd5Psi9asJYojAokmXLAAFZYJNZnqfZeoi9EUghUNe2u",
  "key34": "caUxHkLTduA1rHa4umhG85xdE1Utc4hm8yxtBjh2GeSLWzq7kVG9XkWao59yRBYkX8ukLfsTzZRUMj9xWVrXYzM",
  "key35": "5k9oY9SFJsYjstx8TwpFch1gmugmJEmKwet8jdGZ2fgqEQjQ7xoKM6oZvKbjMLC5MB3meDiVvbNtWWy4WG4FFF2L",
  "key36": "5bH7FyuqAk6gzVyAX5DbyKJp6YLcu1eTyfFFb9auqpjSn8SnhDibQxrdyxPgiQzQAryjUP1TzV4rRrkxbiZduV3H",
  "key37": "62MPWout1tyKa5bikhiRW7dMXZQ1C391kdnKtGs33M7HgDZhpjEpGadEN8VoF9LmypAUEDcu6TdiMhp9YjWptFey",
  "key38": "4JR3C5CJeWo4P1vk5hcnnbaJzJH2dVMKyBtPRadMzJAwT4sqKRGiDWubDVAbannfQRR1PyMcGhgYJkwx3HbSna4Y",
  "key39": "55cw5kpASBVe84JLiyAL62yFDWFgKVTRKKkgRBYmgQSQ2t7KhyPB7aoNvthbWX96dRwsTxgLe25JNMddhixUKTE7",
  "key40": "2gPqEJHqL9BkcsbzY3aRCXZ8XtSYMrze6Gy3DkXPozj9tZrnSayQUARnJSu2C5pSEvNubTnUzTU3VP2qWhKq1m2i",
  "key41": "3DrQWpYFGaUGigr75VYYQLPTBKaVqkNXnNN6hQW9pSeD89KjcPo5HeWgK2724w1ZgqC6saxT9KFQNjG9GsXVks9n",
  "key42": "bY3E6fhTeEvo8yPv9ZhXd6r3dM1bCMJh8Wj7pmrcbbEK51zxseeU3TmBG4pmm37ymZqNcYHkCW8sab8iNrvdJJB",
  "key43": "46wdBwcUAGa82db53QWFbqCPe3AY9GKVc9KPESEawbqehk99AKmCDXNdKyEXpviRh7h4mHSPeTnuc5WCbzNuCmmR"
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
