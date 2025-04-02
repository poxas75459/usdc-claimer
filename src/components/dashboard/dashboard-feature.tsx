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
    "5FtzA4gsnTjv3f3QAWDS2RMSWbhFP5Kcdbk4Wr4CoyxPw2Mb5G8MdLDWihs1hTBQ1aMRR5v344MHfVrTj4zz41gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2WE5PmqWSYUYrq7AUkcWT7sZbbdbPC674MbFT4vfZFhzMm4JEXwAE6K24yxVXkhGg56TUbeGnUy33TRYWMZq7w",
  "key1": "KbKY6zCc5wmwSUK2UYiWzBmCiAqz9YKZ7aEfKDTLsW8Xf9JqoYEdtsXFwC9fnwjYv7ibp62uog3V9TVi9QxNCXK",
  "key2": "65Rs2STPk37RF5uaiaMZhUEZNk4b3iqp1gBSzLgxnYM1fMBouuzGprB8UA9MNCwpGYfLZtv5fixFR7Q9KBdzMcHk",
  "key3": "2pTwndRMGtJ2VBAeVmw8k29EPbVvh7cqTmZRakFqucwL7XpqPcVn2pHyzJueJwbH33PZPJz3Ntw7fTAWgNMcXEi3",
  "key4": "3y1YLwoUJJmL8JANeAfkKe2XjEDj5XHiXqTvmbhnCALY43p9HFBoa6TU22QHvC7AixmFRXgnEQNNcnRcooJb2L3G",
  "key5": "5hMpiaFukb3pRouEAMv4UFuYuWbqfWNmT4UQAQWBduqYBg6VL4Zd5L3stCqTmFeaPj2rm4JQXgNCP9UinvxRHy3u",
  "key6": "4HoyUSckorFcsx6SixiAgmMaFJaGYbJ35x1nBqMwHYg26rr5tZczcREkZXqzSgH8hzWCU7aWadufiwN9wrVhuFDr",
  "key7": "X8Q28X7DnZTYqvhW3mjnFpxJsxa1pWGsyk1aWMnUwe2XvxuHmdQbZxXb2ahhzaF2FbTFjzuFQCvBwPCeyYSZrQF",
  "key8": "2usy6WjbHgeiGSdyboXbVrnkxbgddMHqGrd5bTrhWeXyx7KXx34rVwQi2Y1JfVuLNugXrkDUpYCyJRoRr7nBhTXY",
  "key9": "3jPJsUfy2eWpY7QF2D66UGyTTdS7KtPM4cRMaK9rjTM77subNgJKGtrjPSi7o3EXharLUX9Ah17VxtgJkoBYmKaX",
  "key10": "4adJKZMrgZeP2VYS1mo8rMUTLjcmSL4uxyN7zwNGrt3HD6Q8QhcjP2Ld9qicJL74mq7LW5GYo6MCRBx8CeHYHiQz",
  "key11": "3hUP4HpHYaqBJUTGjBQ2RwMr1PKBDb5C9J5yfXccQw3HZetpeQ41KVQCyy9jNJQfSoPyyKGmRXxVcYsnvbSNz8ti",
  "key12": "dWgYhv7J9iyespyXVVRQnox4usqdEUipn5BwbbLWQzA2Naw5AZYD8C9KsJnPVQyiGeJ5kdTwfB9Rpe1svNyuxcT",
  "key13": "5zz9GTPidpjGL3p3D9RChzvJb3ecEggVsE2NJz9HwAzsnYX5GQ4SRd3x5gygmPeFEmdhynJo3bLr2wYqBRRwk3Ws",
  "key14": "5ae3A8HjRcM8viiio7qhrpqxiuYz3HVVU59C2BDPmAj1mmCzV8mQTePJdJGKTb4cg5qUkXUXyWA3nP7dUsdiiPdx",
  "key15": "5fdcUTkVwGQV835JAeHaseaDA16S2w39ATgntm9Cd5Mbgjrb9gQALFQ4i6aMV17QdWfY2jeVB9fh1mHzNxsJJqLR",
  "key16": "61ij4rWkwCFz8xC4Fe8QfBpCcdp7kyvuHPTz9KgeZHoqrJ2Wi7a5gZJ2o4SJcYS3SvtyTQZ3SeAkzdXfu6Yw3xNd",
  "key17": "4CpwsuEKBJJeVEDNAgVmFMQLRCDxCnYAS5CNB6UuSmfB3C2q2njSUo8SasALoR1oWGteevt353zEDAiu8FVs36EB",
  "key18": "xA2zLP5NpAuNW1hyujvVhdopE3aZWU6EcD8JUwaPishrm7D5Hf7dgGkQ5sxVkkDqSCAWrrNm6bsJhw71TmwnNjc",
  "key19": "2bz4C9ZL5YyWPLD3RXa9SgPTyNcysYVKM9c1JMW6TG8bLPPdsNtYfm6W91YmzWVkgX3yStN4Zbr8MESFxbytpHDd",
  "key20": "5vfgRmBBXTLQCjp4hupc8AzDrFfzswCLx4JZkAicLGjWZkGvjDVHe7J5ocUKJ5P5iUqY3NYeSUFYotHqJWKcWYkb",
  "key21": "2avnbFahdiLd9LStwx92smN7ZG1NVduEs1E5FW9AMtEAs1pvJbeh69goxyQyJ27mfgPQJAoxEEV9mk5BrkuK42kn",
  "key22": "5BZ4TyDQwYGEMSpcPxrVcCA1rRBV1pg9yJqStba7RSH1YdkV84SZtVKmgxVm7k7iGzdm4F37YXWuf8oHwSAJtJAJ",
  "key23": "35UH1r36BWktwjGRxmVWL8HasqdQxr13hV7EiVeUUsSgFgMCGeo3EW9C5k6HTzGfGQmXugLhJnNVdMQBzWcz6KmG",
  "key24": "tJ6Jks1T8RQ8RK3mbY6n3GudZ8Yyi7NzHepeM84Y6vXTEfhCz2YiLztguT3bFZH1AQhzX7MbrM4C1jUnpmEjsRe",
  "key25": "3dwgDJgdK7xXTwx65S9enURpDVaeXnziELn4TR4YRdZ43NHAchHArFvLGDgYMRSgNfBn3qm7TeJ9TozGc6P8MVeL",
  "key26": "4kDV8ua8jRoRjNq88dpRUvvupquGUYzdU3TGNWb35rp75L2BRTSzT9hekq4NLJWN5LtsKNwWnP2PBUTdEByWfEHN",
  "key27": "4TvtjW973tQJj96YnAwnaji6431nNTEksy5WApkwHPE8M2QpvSwJ1LZjuKjNCsGGDsH5spzUNu6efpLprBAh2myi",
  "key28": "4Anyp7mSnGBFZ8pQmuvTemwZnSARfh3wYXXAdyJWGQeasB1a5cGF5F4W8LDqrz9PYcvRgfJqvnFyYRN5XH5JL5AP",
  "key29": "4bn43YLhP1cuWnxuVK291rDtSpvuSPtGdShUrzfUYZzTUaDG4tpc1BS1PSK7WivQRTTYJcwQfVMRmHke3iY7HedY",
  "key30": "3Q1eR1mupFLxc3McmUtzccGmrj5B2nkJRcoKXhqxxG9oiuy1AzxomhcDyC5wNKHTgQbn5WaN1sitcBtvNXgMQMxP",
  "key31": "3zjsNsnjj13WKewBcPRwftuTcJdpkbiP95gPHg7KB1WGtbAumF9RYAmf4j2rJABjAgvjh6fu6QUMeruYhuJkUEZH",
  "key32": "4eLh5oCK2kuVuAZhHv4BgWYjAvx5jZy9CGXbuNWF7A2HgsxTfiTSavqwUz7iDDsMppN1H9sLazS4XuHbiFqnk8PP",
  "key33": "4vDrekLgCPLNXNEx7NiN77baHWgXnzHYGYiKsMcGcQ99vfdYJgrtSJnFLMpaGyFSCvoW9Ap2NTUk1KrUSNjnuGHk",
  "key34": "2e8hAz7uS1Te4gAS2Mec9NeD6oVbb81r7h79X5tDLjrrDZLH1yZgWFgnHJDD6fkkuJw11CWiH64kx4AK9wM8hRTN",
  "key35": "4SZKYeMd7S99Fj67VxwvgLbg2TuNvwLhaEB37iU5aYVyJcraaYQKZh4nFxAMEWtyXiWYsrwmmgtQoN46RTjTou7T",
  "key36": "3EYJAHeXRjT3d8W3bP1EeZSM7V9ZTVRHNuj6MnSbpxgGQicg8FashZW47Hn9pJDKYoYrVKvdogJstAbegBFkqjB7",
  "key37": "2JosPYXXo953UU8PJdcRcebmE5vQJJzhjfCCsDMG4h2jaQt4N2iBDXdfox2MmWcnreXUJCY5g9fDXiYrRL49HrH",
  "key38": "59FAGg8C9z97Aqzwyxy3iQbUpq4V2xR4eLH6xN7ggmxcPLfpF29dArhwu4iNr6CZrRRwu2ERyfZDMYzpkfnF9uEq",
  "key39": "4NscUt4SWPnhYy7Krqr4QXFMu8UtuPrNM9FRg7uHeSLnQZubfWgH3uZ11q9aCBGqmm988QGphr94VsPwgmhiPJ9o",
  "key40": "5yuVA21PJi2CjqTySH2x9dJpEjjJg32PoHNFBVQBJVXFio5axi7CSNaoVsMXWy3Tp2HnNWRgjYjXL9ZjoUf3vGeG",
  "key41": "4iDvH12jLEN8jejX7d6Ck5d6bGd8FeWRwqLaYrAhfMiMuzS55AdPzp7rzhKR6VzEtcFiHfuK1ea9spaFkp68e2mz",
  "key42": "2wzHJ6HFCrAKJAeGrrLXb7rcbibcSdcY1jyQ1kwirHg3iyX2hyvqZSCJbiTsBsEaMC8cM7wAuaXRraNHWQrXbWFK",
  "key43": "2t1BW5fdXdHZUGxzjpTuuBT7miKCQMGc3YP9EdugtbQn3aCsXsH3tmFBpQYSNLAo6bP98LdNdJ8DJXXRhqiBGyHL",
  "key44": "4Zoe6JQT4poFvexMmZYVensSeRtJEEgH17fTanjzExXfuMgW9wq7nFG81Y7tJVgbRrBH69sk3V9d6kuZgVWrZ38N",
  "key45": "4iGsu96v6kNuWUd9gW6QT3wfcizSHWjLXZDraGGzcywVv3uLhJBsdaqPJEpoSGjoUNMF5ezBWyFtEC29SfzVFtC6",
  "key46": "25yXL9YNTr8Yeah8G3sLvszo8AZK7KzzzsvtwcdECSmUQrGcSqAbrNfaSiPLXrJij44p6Hc3Ak226FMrPxh6Drzp",
  "key47": "2dZd6prZQUjKFMfy14xEjVzDgNomkzdRYy9EkHLiLnruTP9EervCFRHtu1FdbgC5PCvuQqV4BgdJMG71wZuEedp8",
  "key48": "hhDcz3TwkRirW7ezaX2dhMEVGCp8dzERGmkz2jRQFeRBiz51954i8arMHZksFfo929uoV1yc4GoGcfjVkKV23cj",
  "key49": "4mUbhzV2G9uwdCAHtcT99rcn77oJL6Bj5Umdqfxjgzbu4xpgmPBgijsxQUXzvUGRTNoT8aai75sM8YoAggH7hnmQ"
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
