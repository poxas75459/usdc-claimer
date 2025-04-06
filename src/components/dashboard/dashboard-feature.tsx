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
    "pzFxt7iWQnPfpCzy8d8XubHoPxRH6qbp8hNdoRx5mWqTuPvF7g26WDqCzayMGrURwcQ5gWxaMmrGxky3k4DW7FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSv3tgyimfDdaXHif79BmqSU9keT2eP27kT3QULL4WhYAKgcne8jNHNwWJC2MN5GdWYaRbNY6tS7gK9rwisrz5m",
  "key1": "4aaGa5MRj4pZsXEoXTy4qk3Y9Er9GDU3BJqyB7eBBN9dNUp5uPvGtSG5HkGcfu58WpujfSkkznnjUQhDMRLgFWvb",
  "key2": "2gw4583BvJxMgvcdHoLt1EXR1Wh8ghNtWjDQXt9Ugx3xMHqPuFPArZn9t9SvSYVqnqU81zBDzth1UYsPN5p7q2nu",
  "key3": "2JT6bYvPc1AAEDzCo63umseD7h4RwAei5CCwTgJffFc7aZwgupupNtY9J7a6xXXa9QsnAfMErHuXGBnV9sYkoFBh",
  "key4": "4yWnwJW9AwdFJWm4ghHTgHyQNET7gjFySJzv1UmHjPY8Cr1BykD5Nv29fHgX66bGVcyUFsyZy5qv3dcpTpM1GYVL",
  "key5": "5tiStAwpQ4oXTVCjfbFyrhLTrwwGHDNWYyHfbLJp5F4qyDf3PwVmdsHduaiu6KCg4Km5x6u19fAMa6U4FJaQtQfJ",
  "key6": "4HXMjtgfv2TfBkJpm4q9VKKirLfPoAeAwpVGw2kJtB8ex79t2Hy7UuTeytKsCwc42JssFDUnN4zXgpuLa6zgTABE",
  "key7": "4e73ZcaTYSDDBzhbHmgKwDMHeAtmJeTQdGyTYkkW3wy2LQyDNf5shb1WGQwi8R6ZHRUnZiw6XKsGhJoPXJazfqDW",
  "key8": "2B6d5yP5xaXLmXPP853KwAuZ7UnhEiaSWS3NDwrwCZ2JeZ6Bfs2mYtEPpSuFSVsUz3TTX7Ryixnvc4o4qxhoXTY1",
  "key9": "4ffehHKD8FGnNcBv7aVfchQghzPzwm1qpDMwbks7UaMHTKMnJgUvZZNwEvUGWQKK25RrgejBF363jw2XpGtJVLBL",
  "key10": "2T3v2tML2FBpoa2cD3zZyNTGqA18ZanQPtHoCyw9DuPFvrFMUor6W52qLdY49kgdZTS9oWZjMhxJRaCt4M3pyC39",
  "key11": "4Hwk8N9UDeBknWKXWtsQj19TLvwW8hNZinTgz9r5rLYc6wtyowuQY2bXNbqfnpU2ou4WsjSS6X3ZjKH5jD6KEkNu",
  "key12": "5BkqFcdKSAreeFZUJXqZnD5BrstFLLMRiLhVRke5GDHti2coHZFqdgQqtZ4kWLUHjbciEyASWvsEiJGy5TWondnL",
  "key13": "316odQztsnvnCkae8rSLDcFNFLrkqFz3rHKXeQNm8PmtjNqaBRQXq41oXTyw7VUdnMArZdCx3nYDoxWRmghHnN5f",
  "key14": "5jBSTTBwqnWB78ztjTRtkm94pwFoiAhrDafXbmQhRgg25w3t6RJJJ5eTj57KikWgu3269YZbykf7yi6ru2Ftzmya",
  "key15": "4azEHKcdf69XortCFgTF659WCUdTesgHuQHZNoiKThBXfduX9BWv8ZEF3JxkQHymwnXN9W4er3gQ8inztqzvhvqN",
  "key16": "4bm6z2NZY29c7Ciw9YTUqbrPfCTzFyv76QmKREfp2f1xafo1G6S43cdi2JX9XjqQ4fQva9SbrMpCqvQUsFz3Yw5k",
  "key17": "xXo2E3iawdo9taLkfQDUj9Nq1NLrZYx9VUYrY8kYeSGjj8kBB3tXV9TXaakFACY9baYgYytQK1aVFKMa8jtBm1t",
  "key18": "4Zm7GZfYMA8qr2VsCgYH6SqfaudR6xb5upx4Ajt6Xoi1aZZrRKfT1YorQLsE94ntTE2kv8ajZ47nvuuiot4J1Qmt",
  "key19": "6nQK6BDu5wk1UWjBDHtKUr4ZzG96CzrDmXVj1JyBhNdahS4hwtyuvc157BdMTDWpp6JQWSbJxQ5moS2Jo6dmzsc",
  "key20": "2jDyxp3wjiBTeoMFRDVWSzPcMTNz31mYDbsjXMEo2TRncCmzpT2h3qCN5r4Aem7rgthxeVLL4kCwKc3Eq7qGAGyJ",
  "key21": "T1vUwGJiqfFANxoZ2F7xqjq4YWQKaGo9z8veeQm8aNmE3sxCfi94jcYtXfReMTZ8Kd37hbmcSMMRxLMdnnWkLg4",
  "key22": "4CqqcccNinKstw8f59cNJjL7Fzfd7CNyjh2yaMnxyDVJYgeZPwS5CFyyD67ozwvaD5ctWKgbMigWmpFgyNPzDbXX",
  "key23": "51wuiFJVPwJsq6hdq1En8eTix9pvTdSbAyeSAhTwTq1eBy8LeoTeyaGmVVv8Nee3WxQWCQvbCg2RXWoXtJmvzBeb",
  "key24": "hCA7CsXLMpvB8DWJj15bVJ2LaZc8wA3BAw4ongsYvPxsDSfwbuR6VGjfXqSuypN3ghAY1RjxqbwvVwQg2WLcdKk",
  "key25": "qQnaxSnrKJCBwZ49UeMNod1tQZmeUpLZwh9rFSHYxk8ZbGaFWboPehaArdCtnm1D9jkMhsY8Gyahj6x5vuN4D26",
  "key26": "25vZFXeJVb5UttbqrKS96tKnD8wVz1CWWtF7VhiUkNtqF9LsdHGVMRcRW6ReK4Ea7DwmeB6p2h9SAHKMcY7arkz2",
  "key27": "65dqk5vwKPLx5zpNqUvuZUoj22My7UJckGnLD7BuaCUZnq68zCZuhJJr8LGvbhxHqaVC4qUYqQD1YKZXMYf2tgyA",
  "key28": "5iSwvmYQ75HoGsKwNphcfLSM71j8PXtJBiMwKc3DLvpLFhKF4zWaVQRURzF7FzQkWMHTKLEQWY7XAFgzor7yBRWf"
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
