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
    "566fko5DxLp6Msmyg5Hojun349kFXKzTRKZUpWCGf8hC4D5tJzS7uGE9ww2m2PhYXntfj5nMAaKTaJCrF3AUvUwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vphw7hD6G9MQQLCVAkW6WFj18aw3EGEzrFw6PbD8WCyQYci3YCJsthm9xyz4CGdUgtRVyLLMvVMdmAv6i9jtkkP",
  "key1": "598piTFXgK7Ncd9oeH5jSDURZFokx9FpjqnTcuGTyYAD5cJTknHsGPNK3hT7Vt1TUXyBZnc1A7HzpWdqDD8J5jBd",
  "key2": "3yWvBpR6wvzt1gUvYzdvEhoNrfZTuhtntoHfM8QMhro8tq4gvaRNLv9ovj9pU6SbNVBf2s8bVrib5NLCLyHW6Dfq",
  "key3": "2LDptv7nchpEXndp925u8D8GQLPujHKawDFxKWFrGCDVD4jy1FumaR7WdMrZaCc6q4DYBtTte96SCpFH8UHkpMaE",
  "key4": "2zM7NCdDewmSJfG1unJKEQGfttBEEwhDvPPCPpghK3N2HYUjDjz6onucUsc8X4Rny8vEdrCFihvUmjgUcntgcdG7",
  "key5": "3vvT4kJbxJcLdJk6mvSNyLyc2edaprKb6F5DvmpfNEWs4AQd2GSTMraDSgZSEpm6abX5QLqJYjAkhnwgLmKc4khW",
  "key6": "3mV7b6zukCw6urG6HAaYWDsuBWAS8KEYDjYzGcJCKsCd5qsKzvPvnmxyE6vBWQGwwEm71MiTrA4jEsrM3Uad5cnG",
  "key7": "ifVRQxYLPjMzEz29adRjhwmPrBv9XdJVZBJkbephHgcLaPszad5whFxePjJDdmS1LiUAqJXr67dBbUqbaA6mUBc",
  "key8": "3CYzFn2x16D4iij3kTc5yz6r3JSWvLMgYWqaY1eYDpFMPE8NeX8NJNKKVgLeLJpbKyvVxmqNhn9yDXXXgQEqH5xX",
  "key9": "2pWPcX3N4pPKWsUXC8sAd9HLHAhWd1ASxLyc8yeKBFxFHD3Rn4d8FgAnwSDocVi4xv5VsgfmtCWpBSE2TMv6LxLY",
  "key10": "ym57dq3ESZzseNfq6srMfGh5kB81rL1vVz3y9LiPUvwXcraJt2NGiQLefZhNMYeq17U1PMNrUbpFWCgmB6gSNjT",
  "key11": "3K5mwzwzZFR4QHP847sq9UvuAfBqX4nZEunuWV3hBEwkyu3h8UaUPUNpEcddos4wQoJp3cy97wDUy83tZac6wvfs",
  "key12": "5nL6cZhx5r9b43NkAbvkWjHJ5HwAcSXzVZHYLwiNsRV8E64Hh6jX4t5C2kE1yxzsnc8MwSpv6nvPCzBs7xgzU3SW",
  "key13": "Lj3UoDT7WhcNjUX6rJBDiBeryXWB2H4ZKEXYgipBbzPhgTRq4uriZSTitmiKk2wEEcQws86zhqxiaVB7btTLJ97",
  "key14": "51zQ8wBV18N6YxVN4J86RPVPjt2ucEoMMGsVDTxsorM7PLAmrZtFsDLTaVeZ4AHmEWYjAzZNXc6kycET6w6JTfQf",
  "key15": "4ZZR5oG5ckZwkCSNyGGmhiJUsKMrwFpsTJQ5tXSa79AS2z38thGCmBxbA7PT1Zyu7iYeFwMryxAidSiBW129kape",
  "key16": "3wTDGxcZqmLtR1isKNR4cqPweKzaXRXaCbZ51nUjm2pRFgw3A8umA8ufoRHxU8HYwFpniUbkUMwQ8Xm77mrZF3hu",
  "key17": "3aiK3iqwKo1NPAu69dmaRD5C7vxtKRbQYr3RyHHxb36K7eUeUmUEE3ePsTzr3G94wyucFam2meWXQ2WvSEbV8uMZ",
  "key18": "47coEeigUnEfVsuyqhvgY1gYWGqLqgfRuERoxiti6XSArgf3u5ddrMRNZA2m1wgFNRsgekdjruS159oeRTXb27cz",
  "key19": "DVWrTXwx97zc85F3svzX3HvJvSwD7Gg7csqDJiiUqZiu7YYWtkwqppkAZgabgeUN11nkWb82itTaYfq8k8SkD1k",
  "key20": "3frYig4qhtkXLb2rzPUQtdSbTwsaXD48yWukvRnqnjW4LKv2SJweMTqesrmfikuAmN4oCYpzd6GM4yhsGKjoM1kQ",
  "key21": "4c1if52LFWpyhoYQrqYFpmNdarSkiGMrNi5duWUmf8weHraPfXF5v6qqGnQmjJ367xVS8DE87oyfBdpLVkUAjkcQ",
  "key22": "2TDzcCCiG4jeBgu3hAjK8ks4vXZ1yYwxgfNBCsH3M8dLupYakRru6cDR3EMWAXyH3dqKCMULoXG1eMDM43B2YHFp",
  "key23": "kZMheP6p6MaXB3tzKv7DYd3ovqTxaRU6p7DygjgPqFmdE7bFPZzBaH4ccqJLkY6MXZQHzZrsviuvZW89wuGuR9A",
  "key24": "4QH3k8jPUTkZQzL92Juipc76mjdiMdbadaNA65PmEZNJ8axj7GfsFBNqTAG1NVSXs9CUqz77de869cEhHJq1kvMf",
  "key25": "4rHgd67e1XE6EkSrYUkPYYye8PW6cUkx5JEQz5qCFgADJ1P6UA9qViYfYEYZy5JcAmcFKZZCU36mJ7QDtv1qytdq",
  "key26": "4wkoFbx59xVefcVQyrC1dwWoC5ShUeNsVTHBQPs1h3SKt5jGZjqFihcKFYmWAQXuYEoKjpW5d5ikNYocihJMejvG",
  "key27": "5JzwnP6aPniHBJ5Zu4dVqKMJ9pvcSCxnNXSHPwLRFGXJPHuSrKgbn6Z64RfjyRvmfmwRghF1fsvGHN2sGXgDykrv",
  "key28": "3aJdijEtYj5oFJLq8MeHJr7Xzua4d2ftg9FmJncEqA4ee8VLYFGfz4bPGReR31J96tnqZJRSxCGKCzmswSdjniXK",
  "key29": "4SHgGD3qFF88a8XJ3Kvfr7TDybLbGpFobbjsHEMKHG2P4f7HE8unE3d5Kfd4k4JQCFjvWoCAQUWSTVjUnEHJcrxV",
  "key30": "5zMr9d8C9B1UAPZR7tdC4igLPRiKEAJqcsk27Nwrtm5WxoN9EEYQyeo1L7U4uAu8kQnU8xsirFx8puLQWAswSJhi",
  "key31": "MVCh43URq8TJX5fRLW7SxmiwS1YYh4i6jWEeP3UkWZWUoiqnjjVQo4Dqy89nd3QTFLZ2BKrAE5ayXjKNXUXVep1",
  "key32": "2PJfhUPaMG3khjyjtQyg3Lyb4cFdF6Hof2jAQs7p1eeNq9LGxapj2FS4sGFq7QqgDwbzUKisfh36RLxnDaiq7npG",
  "key33": "6zCLfrfC8aiQdtjhZY5s7j3vmo9sWa72jnhY4qCWoMXXMZnF3RhYsB5ffZGaUFxYkvKxsoxEn8dNQ2enUoHJ2v9",
  "key34": "4Uhnd4dKvJKYsPYt6gYgZDRQfuZRiQ2cRo55gMtHRrbZ9f47KQbJNsWaA9ZKkNpMNEHKG62sSStrn8HN6zLwtFWu",
  "key35": "5EwtHRSLPJf49j58x7krU7P1d8D6oh4TEoUtvW5FWVj6U1i963SxbCMckCSmNtSyj9MmzKxQMT627qa2ynpeJvk6",
  "key36": "T7tZGSuZvvx8ZFaDMYMELCywJ1oM5fofNTrsBkueqm35t15UyWkCKD2PKV2SXM1HUaLMmrtY4WxTHFzdVeDkx9o",
  "key37": "4SNDrQTvAun9oyEHBq2A3UBak2mveyju9gzPQg4z8UeNNaiE2TyhGVr4XmDUnMJzh1AyyVx1rrj4X96XNfE7djLk",
  "key38": "2or62xAAtm1kZ3qBcCT4qPCaHmNodvq3THvh3HoEfuAKCjS4niKLdQXuEVNqjsmd8VkxB4ZHhJ3jYdFThfhnnjzw",
  "key39": "2dA9KFmQee4aLtCTPpSndtYG6SN5uREPNqKa1Xq8CEguKmPGYtJuhvNMRQKheybxoGwonXKf2v6uyrZ35fH2ZTSf",
  "key40": "2AmNhtmcJSGZjdiRqPv2fHaegqQQE8FjmCerK89ZTpN46F2do3gBYo7Ebx7YfUbRZmoXPpfJ9YUcrVQh87xHXZs1",
  "key41": "5vyv4QNhhUZh3tfGTnkn5Ug859HqaKvBRZfcYvqg2ab3n7QxdBJivXB3SKiwiAioPmW5M9vG5wY4hQqgVLgBYvDf",
  "key42": "2H6KqecFvkmYTxe1DGSampB78eQLEcDdHVLQb2uZTRrjevWS36SmLVZ3GkGWMZ15scNHZE7yBdyvZkzVxiE9gVxS",
  "key43": "FeFgUhGTLSMeKgYoKfgGy8N2x2KGhBHARByR5W3pZguSwNYigev87w24nP8vkwi9h6zkLLW3RbYdYgYFgwCwh4X",
  "key44": "3Z69xusdMrbofMP7o62cqRcPPvuSd5jhJWyUmHUUZDdgvz7A4EkECcMgfPzVnr58tYzDVhopDnt24drSsfGkSMPR",
  "key45": "25Ck2Yu2XnXeEDfrPiB8oNLxAZRbRwN6a13aicPbaXfQfQdRJQ4NNR49H4gZd7CinvL3X24oWgGUHXM3eK7mh5un",
  "key46": "5XiWuMPZg3TobuxfeG4qcjCoh76TdhoWqCrBFmXUMns8Z7qLym1JGZMY6qYmDUxQeo6ic8F4GThPok9cjc6oJQsH",
  "key47": "67Mt7hReTKMcPCwJj5vt1yWFnsQeL7iUEzNst6t7XBnDQpdL3B12JFaEB2sfbByT38EYSQVssE1rQMMv29ArPqN",
  "key48": "3yqVM3pu3ke7dmkgsdHTUxsnQUs4t4A5qJMiyHezEFKNJXcMCkR7kxdamcByE3pMLHXqLTkdZkuyEQAyQwBRZc2V",
  "key49": "3a6qEMa8n9eYBbPVeiBY25v5VjvVN7aJ8zTddTucqk9GHCV8xGoaHP55KpEshnQvUPxVFKjoVWyrc4jM6EJhpLjJ"
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
