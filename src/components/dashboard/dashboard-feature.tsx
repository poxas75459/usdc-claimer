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
    "7wb5BBAMrMeDKcomEgc3ru5GRype6eeW5Hf4sXXsE5DgkHtcFJQDdApJFj7TCED8CNNZYoeigL2Jq51SMcqYjhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxjftM7BztKTj8fmBu2SVAFoAHiZEKs8HV2uqKsfsSSSyQbQzTUTfT1vh5DvQo6atTctWes5MBT2SZ9dGhZpzxX",
  "key1": "26XJNL9jhVtRScky4pTyjLido6Roxu5pxeLfx32Lh3DZZuw1tc5dvwruzzFYhey7aovPdwU6rGrekRBksT26GM2Z",
  "key2": "5kjQyjKUyD21pgfwQHhGdrdaHy2vkgpSbUsNajLzV3MwPmE51VNX88zvuBPUDwK3fpn8nNUMSrdNM7Sn3xQMxFPJ",
  "key3": "4dhgpKy5KzPd6Mt1hpkgFki4TEmpU8S9mMzVvRonUZ3uK6qBy56SGNLMau1ERrYC8m5NHDVzWrJ21HE852hufUYF",
  "key4": "3BT79ULRqKtLbUMDtMNMMs95YAX535CjQRYPqRKMSscL5imMpdmvnwEAoFsunUCARx3AAeioKXLEVe5dMZFMMeYA",
  "key5": "4atej7ns856sTSPZXoK9xXzrhvJ28Gz83fE3M8KzUnDkksa3rTBDojP1TSAjusrTpdvgaWzhzGRCEyACc93DRQ1A",
  "key6": "39G1u8NcZh18ZmdsXPmtsYh956sJRC9XcTYijgtdPjoRtZrKMdVWWhNPAMSuJzi7YdUwybH9iJJBmvsKTnuKnPHv",
  "key7": "2URtVzPjReePx6q7gd5wTN7FCZKXQezAkRbdDAEP7oyjttGBkBkGw2rAACvdDrynvbMhv6GBFy9JzzCVpfm2B7NA",
  "key8": "5FFvrus74v5rcFs5YXy8tXQjiUAYc34ba4rQuearZZGcVvRVt4vrVeoxMniDyTjiQ5MiUadyzjkHh1rcq2qspvWc",
  "key9": "4z2xY8nMQDnwK8k5fGQH9pxm5MnCjsc6N8zuFjGmC39dEHXwGHQAPN2oTDV8rmKWCcafGRL3sXXKitaCWSJ5QyGg",
  "key10": "3z4PdCVAde3rc6C5PUFbKADMzD4SzGy95T7yzETh6BhUDws41Xf6riLRoUGApDKh9dJucE5NYwLWHqtxv1ZGcEgK",
  "key11": "5baFULBaEnwgqvGyJBFjJNi6TJYvGKBfLVTYc3Jf9bgXY3cKBgpeKxH8WAbxqZ26HynsDWhjUQtFMwWaZt1Y9FEx",
  "key12": "3bVXWQ7v1WRNsaRr4pjPgb9GwDJbgWLd28SALhTq2fB46rUQE1Hjy3oqPqsohgkjatP5BQN6CSzo9XKhY72iysBN",
  "key13": "3KbHiFzq9R5wEe3ZGmqdVtYLX1bmt2XZvt5QqiPs26WsU7VScYswpYRwhHGGoj4vUuHChzbTBYHm9Xy3WbtjvY4L",
  "key14": "3LzYr2oAMJHB2szDNj7QQcCy6YBxsiec2kZmgryCMKEr2sMvdbuFHP17Ld5G5vKdLPN5B3GM8QnS8UfWrmxLwFPA",
  "key15": "C7idVfCpmpeKX7pLBhZ6oWDJfZo8CjUkGUMA2Lp8XQsGZuUpH4NhAKin1aXmhkBpEupxP6668kxuESoKE3f4g2C",
  "key16": "3GZMuQdPSCqzzktoofpXhJrohbeYbLUJgMF6ppzuv8KRbcLEivbXHTwkjiFxpyXUR11ZhnVQvY3zyyyWeiuWngRa",
  "key17": "BLwGoLwxUwYg1TSCXpF7gt9mevK2TcLRyefNDWERTnuJ4Evjjy9Nk1UECKnUPsP39nZbMFVgpnDmtUV3tHmvRYs",
  "key18": "2qEaunNyJ154hy8yC9RbjLFa6LhMFG8vLcxL5dpu81V6GLiXtXwB1bZ3FZAn7fKjzujraSgZ9ZBaxC9AFZtLVHwZ",
  "key19": "5tr7oLajVhY9z2fMQwAyNcnQGbjWwhBjz4ii1q1hr41EpKebUUbnMHCFc2rVVpidR6hdnvHkJZJSDQnBDzfZavAy",
  "key20": "3yBJH9pMD1EfkhWo99AVrJGFKoevauZ4z8TeTd6ziLa3zgBuXbHaeX7ZkKULG36SB5gnbqbH8JKegdfpPHqruE1F",
  "key21": "3VPqGh1fauRB9tPoXYckKtGE3LPq1t5DYsAQrDyYqQCZESzpnZqQHKW6yDLovZEjiuAqyRmJaoTCAu6X9CkTBpw7",
  "key22": "2Qx4cSNRxtW3YNLJrmWV8GDAm8ZcMRF39UFaW1FeDABhyUdwzNC9w8iR4Y1hB5Ueh8E7NhWWvz3Zvm9rJVXq94bH",
  "key23": "5LcPL2cNADkVSNja3NhXDcZMEpL9RQ75nHJx3v7M7iaBjtVfPKcBLSXPe6pvrb5KV5TqpwMiSq44ejaZz4t46nzd",
  "key24": "dRhZMEAJeuhvXBEshH3FWYEqUx8pCR2DWoxbbmqmsT4ZBm61njdctjYs8wE49bkSXJLaQB9FhPoP7ZUiEg6BjZo",
  "key25": "4HyAzhHjX1PPKTC5jWT7imFFpFJQD3tJ8xsfnZrPaDCqDn8xNKn24PDupUW7rZ3wZGeY5bbyqxviYHAoCFqKV92J",
  "key26": "xA7DyjUHpDuHWRu9MU58a4e9EYVyjggjAN1XZGTh1s2x2iutXZnHPt2MEtDBnytQ5ZHmYPWFQMcJU79CrvCop6c",
  "key27": "5644Kwc8ZRbiUMHhq84GeccVxkzNXaZUF1hjM9DHanzAuoTao1L2SeJBT64jVXuUwwDsH8utKVrBebmchQ5XUU5o",
  "key28": "3b2oM7iDeTTJLXBbA59ZKrRXzSHaguLKVwkC6LrHbPp9RSc7rtTJMxWgdb7jidUaZwemK93PDd84D6HCCHUnmVm1",
  "key29": "54aRQAWFQo4WRMJLUDYZ5yqfgxuHadxZDXzV7FcX1uS9cLCtDzN9JKcmv1x4pdjLbdYvcSbvyB8MsGDu9Ud7zBgz",
  "key30": "nv4waqv3ZjSfWL1dqMHFnTj4odHKrbzUD2gp4PrBm5Ly2nfkAkHF1sxYtSCtqgLYyNdBjzCrhmNsmu5U5zq9QN3",
  "key31": "5aXYLAyWFFwQCWa1mD86mUXX2TkKHQkLMPsStWXnhU7ehyviL3pJHAxmvYJh8pvfUtsPgLuC7esjz3skxNTJjpvE",
  "key32": "2azttx41PTGhZ8muXPF4yLTJwQJ4VLBSYmGeSBZ6BKiNmaPCs9rt4GM3Z4oeEezUn24kkcpYWwdoNcfy4NVHkFwC",
  "key33": "3ZybQPLUuHuDWRm75KoPyqernntqX6sDFLQ69fktM7fc6Qgs9Fu84m4YViLvtJSG6qdnQdgarYBWw9bMQmFuGcYb",
  "key34": "5TZbFc118pYcgmZjVKQdik9749tD15eTrdVeRaAHC8uXryKFajmSWcH117fkVFrc6DWPEEeFtidZBVS8ExXssBdv",
  "key35": "5FcYnXhvabTDrVvP4mGzTopkpnFAgb9jhcFicDTCgWMDbZNNhzXKbVuBDrH48zJz2HNEwL9aRq3XtRKZjgy7BDeL",
  "key36": "FhnKuKjcx1ssTgpAamwp1SAJxNQ7x5xg6i7sLvMbDYSderHq2t1N8LckiZ5RbZ96s4dGcYFKcv6KPEtuRzcEziN",
  "key37": "2wa785yaGq6QDj9LykFKsgF7HAmCfPQEdR5QnmHoSeURGahLeBPQnSDRuq3YRiuZGPLBBzQ4RMxLAPn41ReVRp1n",
  "key38": "3QHjkzVCpVpqGSWuUWeX9Ku73WKsT9HXw69eWoajqMre9GJb1HY6Dow4X1xS5ozEKTtxnkDuj9aWsGZCax796xr3",
  "key39": "5nfgiRBxUxgn4VRSSBrsLT8x33eegkxjCZi1ghaNZur9vxg8we8o4EMkyJo6qZ3hJFMPdPNBb2FfAq5Ac78pkjkg",
  "key40": "2hjaXE1h2vjMmRopeqxQB5j5EazLwLsm57Qe1tiLFQmg8UFh6rcAQszn4XLQjBMU3SW8StZYwsqVBQSkomJiYdwj",
  "key41": "2KEb8LMaXa85sQKJDiYAsBEHQoW4LaAMDofqay1AUdttpi6AV2zAxC4FhCynHt2rfdyfJjDWCvQJRUHaLrMxrBSD",
  "key42": "2sp5KApjVFRdtQM3CQJai4Ln9vTKM8w7754i7FBLsRbp2692g1SJQx42kd8sFFtBc9NEa9SdNbHZnuN8othnzW5e"
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
