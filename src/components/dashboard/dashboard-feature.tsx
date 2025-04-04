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
    "4brajbmeh4aU6avGdi5zGygyXmaSjMMwG6oMr94GdVwqmjitgcEGoQJXi42xw87XRa1kXdZow6UQtqyhTM9kpcNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfoS1ysaHGt3yufh961gkF7VyvZgYNF1XG6V5h69hBq5fYc141gmzx7jiVbii2wm9wXWHjtQ1LC1MTZ6Q2frAJZ",
  "key1": "5i8wuH8MzWfBWqQAwMgk694ZLuiTodwcGBGwvxbiazYEcJBozKj1aod2ErCFF7yiJheQ9Kb5RNFqeqDTUDZhYaQt",
  "key2": "45Hc7XVYMwqdDxjGjt3FNACr1whx2QxeWdBLW6peHtVn8V3gJbV6dvUhpXAZr7n5mVwMyifAwstGBtkp8N9VZA7P",
  "key3": "38yAseHAt2HGZiK5JJB3E4fqpATgkJJ8uJ3LaD3u3RCLnwn2hqKiiBmS8ygEgwZc8LX4HkUpVgGrVzTXRdu7PpEu",
  "key4": "4PZHyeJAGs2RPyd5A5KkdVU1cfFRHCpPsikCwBZKApQvbv9WwoMCAXiNJPU5pjHUVeKHfyuoSBPraRRUB5qMsZnP",
  "key5": "37iK5PDUneoA39z3VpW9xpmq8owir6U8ddjRPXaRD1HpjCxuv5Jk1LZmuhFimLoJczwQa26k5SQHbG5NvkocAUpC",
  "key6": "jk4kTZmNKF1SqJXzB7phamMescJCPdfUKSc9n4mo2UAcYURWrVdoSihBrTLuufCtq1D5iBEzbsBbjeFiJGVEJmW",
  "key7": "gvfgCa5xMc2WXmMy7SoxhMwC1qwHQ6mLxZv8rgGMSdrWBeESYovWL9nd9xx9ebkD395ie6vrWsizYrF6B8Dq4Zv",
  "key8": "2r9V7VMtFSCmh1xvuCmiRMeqXC8S3UpHEsyLpqx3wbsqDbn92y9cD7WPjvaocnjRE8yoof7cUkqu7TRQZQWtHWd",
  "key9": "EdMaHLKUS89aKZx5SW8VhVbEUSAaPU3kzDnVuaoqX4jXa4pgKHsK5sQGf6MkE2zXxpGbB9ZabapFM3Uczd7MGVA",
  "key10": "367rrvzZAJc2AfMx1AsbwDV9pE7M46crfAh6iTSSu3tVELoTFjeDWAdfEL4wx5NSZ3b718o9Wj12Mc6LfEJPFi2b",
  "key11": "46jXhsJpJBYqLFTH2kK6jbRAusE1MuAKFYLCzAt62iAQjqLkL5wu89XJVgGsThxmBdvUir42VdrqKrozmqqhXHny",
  "key12": "5HsHh9mPa37H9a8pZD85CUGVKrojeRYqfx8Egs6Bmo3a3fvFF1dsZLyiPd5FW4T7AitdZp7P7y5rTkb4drjwX2Lv",
  "key13": "3ZhP6JYX8GVpCXbXENtME1pzxHtM6eqjSThNhxvkAwDxWF2FdTzBkSXyL7PQ6KaSYMTwmv5WYbtkQNkw17B8hr7z",
  "key14": "2GXomSoh26Q1U9pGaiEG3nKfKzK8H4sbcayWsXzfF1zRf7HZqiUUn51sjj118SuKh6PcK6BJGbwEJ8mPF84emHji",
  "key15": "2HzqkswGtzbFgaSBHCi1DCARtRMq5GiCpGeBGLzTERswCPDLbbArc6y1sSQgm1CKtaE7o6bzJqUCs11KFoeLBM9F",
  "key16": "67Z2bozo6Q3t2hegAQZgV95qmuVJC1iUzX8uQZfSm6drMNvyXdeJqecsfL7Dif5jgCWZ67KedaG2z7qVrwmPKseg",
  "key17": "EsqKPsPg32LjCYCU6dzu8RkrwWMeTaH9i9wrX9kqyUcdGq1AS3bP69g9QmZHKjAh7akgjpmLGYGyLdCb9yvPpkn",
  "key18": "2obWUCcSZhGixXt1DcY2G8hzcQhomDsSQ9YnCgP7jVVYd15eH893Tjy3vcLnVfh9HBrP7Zmgu4LcwYRfjbLi9jb9",
  "key19": "3Go66Dih1AYNJ1d7o5YzgWXs6RsYdtyNgaEBhyEu4gb5pjAx921vnUHbZjdLuHMA9HErC253Gt9r9kd79A7p1p9i",
  "key20": "siYU5iFqNaqjC7kQ9xiEcNPoADFjQy8BetZv9MWeWMHDXCUQgn4tpq95MUMVvLsy9bkkeu4V8xdGCzvcLyzrL7m",
  "key21": "S3E8FpaaJg42DvBQP9kNNrYryu3H1SWYNcSKvt5k9r2mtC8cZ9fvzvEu35At2fg8QYu6gX4P8ipP4NUhgj4vquD",
  "key22": "4ta2iUJS4bkmUf283QVJ26q6YaCwHrPmsvfz6WBiSXjQ2nJM8RVgNiDco7DLTnDKLxmsRF8jnmaDttcj1VrucNzY",
  "key23": "2b8xLT89mLsfGnmwzGjY8nxhZeT97XnFhZyCE5JujezCKDnaxu4vBWpfgGxTWL2bRdX4awxKdPLmXqVex9VVAXLy",
  "key24": "4jFE3Vh8sjA9YBMCgZBm64ArwJ6kDr9VA6gbig3SbsKrGrkYqmHkM7TQRM4dVeFxuymXQFinLMbgcN85qARQdjz6",
  "key25": "53QaxqQcHjeAKYaKKhJ3V2TesmXsiPeNymfDTesLEZz2Gw2KN7SNG35oiWByCGG9a7HMZsbabebLKq7PspTKj7eC",
  "key26": "5M8s4D3i8FzaaxwgDdUJaYwKWAzqevGXi98Lyu4vqaJmHneZcLqFFRHA3zK3ko65seMtTbvrgdGhrTpaxm92sAM9",
  "key27": "4R6AfE6YsztfZjuXc8qDePLE4hCaoHwECa6snYVyyueZZmzvjeKd7iH5oca9XGqLJtyPNXJe5FxTgVaJuAq9j4Xw",
  "key28": "2fkF5ws4Yf8AK7ebD7ZZ8r7hcgQEzYFrTotW9WaEKy9r3nwLoY2jF9TgnTd86WMVsv24wsGURCXoSYbeAWphWoWo",
  "key29": "3ks2YgDMAkMcif5G5rnD8aLtcwuwUoDUo8cqts6KfGUsYGzaJhLZ8mqf4EWPYLnPunFbbPvNfzcGN6bcxxHvNYVF",
  "key30": "5cgEz4Te9rWeaUhSMbKptRP61jyNQfnvjPahGygr9ffQYVJCqPvXHxNJQ1nE8H2J9dZvTkjwX9tgFBW44szmgeU6",
  "key31": "4zbp53P8zTPcWnNz8S7w9u71782q7RY1JbnZL4WWVTyXvsB7g7e5QQooVpJN7cjYZfks2zJmcqq4cVUZvnX6g1xs",
  "key32": "56gSPJ4mjza8ExNmq18gSRmuwckRcc7AJLELhi3ovMmS3t4v1Sy6gbbYPEvLnTkpWBkeaSQUxeHgHyk7Yhmu1q5Z",
  "key33": "NihNz2JvvkFjSh1cVaYj8w1PBnpPTmqr1xwYCyxoXf8bzxyHN1L5VtyPDNZpWevnBqiRmgHW77wmbkcvHmXXayn",
  "key34": "3iURskHhocwPPUHzFf6nFxhJhp6QzpTY9nUEVFGGja19MrZQpnvuBzM5uHfT8fyAD4Dn8r1LfULngxbKoxPFC6Sk",
  "key35": "3PZaqheiXqBYuQXV4j8gjMc4iwwae3pavnTFhRewmoAmq7Jup7rZkRfUhcBgsNXfnVnvNjiUUphjNkCWWcwWGzFa",
  "key36": "26gFrWmR8U7WtVZnFoRFbPjH9cBPVwCkZkXykmKnQkZGbnzxWKq1PxCeDDXcmubNitxZuWmehfZ99hVu2cVs5FTh",
  "key37": "3vKLr5YpwDxvS2EedxMdfM7FiUwrpVUHf4deTozThBAKrMeXuV8hMBucxwFz5RY5tRHZFw76ggceX3UyVxGAtZsA",
  "key38": "22ndi4qXiKEQLYhea2nhqh2qJ98NvuCzPR7kNvZmQKyjVgUvtD7PdiS8rC791CmWtQWfRn2TKU7YcQ4ko3RedTFh",
  "key39": "64VFY7DQykWMgZ7dBiTQv3tuV4BKQ8hPy2dYf8QUkMCgvicTNraYu2JY7JrQHbB6CYNccxSBqL5gXDmDQqkAUPrw",
  "key40": "4hB6hHzSBF5NFZWo2SePSEr1GkvHeMGSxYtAo18ofw6fGADjVKrKvKpQeufTLwdJYWMFvvE8aMDT4cu3ABm6DUZP",
  "key41": "5VJgUJFkJZSkRCRBM4mhWwTuweyXQhSgkcMYwNyM1rWbrsKEgTAkVT6DWpFeqJRNa3tmuYciM1TNPgu6tAb7p9q1",
  "key42": "4W3Q2MVFMMQ1eFDA6CaAYiJLKQd4xTyHy7yrYoro6F9kS6yDWpZa3R5mEWSyBgWC44c3zAH9gjnb7S4T3hthDATn",
  "key43": "54XFXgEgBPT1gjeBoSwcGyzs331o9App6YqdkFqknC3a3s7dcySqZftuevJwSFKfjCMVzmG3T2bqM7U4RzWMc2SR"
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
