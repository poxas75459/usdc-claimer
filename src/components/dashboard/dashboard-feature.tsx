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
    "4c6qas8Wsv3GdLSDM8gPqKaCErY6sUjFN8uV4h1F436LoNzETXDq9nrmvjtKYZhr7v1ogn4kGxXxkRhRj3qg6of5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SzohohHfguDTT3ZgKNSVB9qobqUaTCkX5hPyPDeEkNsrsKo7aMEYM1RUwrgBENAutbGSfQ3PRvJE6jrPD12rphX",
  "key1": "4ovekrQJEBurrhcbaDmgo9Uhapk3gvUqPTWuxaGmJ9oibCQB7m3x6gD6KaEmNRsg1q79quKZD6Q4DSRvHNgCzTt7",
  "key2": "YUKTXJwdjwfRdnZBTJ2bCXCQ42MLvvgTCV2pkH5VVL9tKmZeXHqPpKFtB1QsxnPWhtvLwLyVUdVjvhAbfRxARS6",
  "key3": "4v29GJwGvN5DsCG3mA9kSA1nrngfYCRLJSGVjqCu85tuB1BKfzyg2KQ7DRYkbAkg7uLbydM8k1V9FfdguLojoTPu",
  "key4": "3pADah7tg5xq48HEe9L8em5LzKEyv5VHacsRmgdiS3iUByC9ki445psiCBWX6yWbySHU21FxN6BxJDwVomHEJkJi",
  "key5": "4NuWkN9PAx5YyGZJoqiLc1LSh5bHfHVbGbMCPxEo2X5sL57s3EKpKBhtTGTPQJr5WwpeGLESbQ2sq7mNKyTVdDBX",
  "key6": "4991GCdKNdbxe9pC12mEeiwuwC6u28TEs7WAFBf7tSeLDSyMMucAqqKa6s2vi7nE7YeBV577L4y7u2w3X4PTZJjS",
  "key7": "4uS1CeWsr8J9C3hwPGxeFXNT8pq1cyjJ8t9jjoJDL9ZTAmQ7YuyVKHkT99pkn6ewJfLU2nTmEB6zRC87LtM1Mqaa",
  "key8": "3QBP8N2RUBEeuy7H3qovLzZ8Lx6MgtrTCj5qQ3fiaRGWTMaJMJzumPrUZt8vYoXcagmFmw2HkX46muhptHYFeykL",
  "key9": "2pAJB3w9XxgFfpXJZVUE7YUzot6WNN49khcYiYfomf64kXyhKu2f7nEKKM5qVayqrrR6LoJCsf98pk9aV3voETQq",
  "key10": "63d1T9G4qRb2eqaAGLkReHpHhrncSw6LEmffeAG9BJxD6X5e6vdBdgnS5yiJPcZmEA7ny3i5QFG1RFcpwGd1mgMP",
  "key11": "2iVU33vGSejoB7VUrbRCeB6Pb6xJkaaxBAtj1Fmx4dfnhq3ES96WBieEfjhPcngpnmuEK22cmBqPcwvDvYV4Dcwd",
  "key12": "2j5YLAzByKL6JF1Z46VKUWXabWWz4ZcsX7gzkWF1vnPtN95NJFt86gCnapfta7Gwc5Hj5BHfhNRLsPTW8oSFbRUv",
  "key13": "4ZZg8fbgpnmoPA8x8fPuei53TMVRtAaj69MGsvTLjFvkUnM4v1NWAQKrZGRZbJc4i7TrTvyhDQXmWiVEtVfjJbLd",
  "key14": "4m33LexK93fA3tD3DUUXEdv9L5Avnd2224Z4qcPYSpDJN6goTNwy8Dber23iKS6VeTaRkSAhW3U18PGuz9wwz9HV",
  "key15": "4FAHQvVc9CxFJpULbnS7cDgggCgyNMNxiuSQ2iECbC228DrVqCoSv2ZZRvtY3tE24B5MneF3aZMkky4rND1vYgfJ",
  "key16": "4StDU4WpojcZ3rCC2gEJnE6T2JmvqsetGcY87BHxdHeWWayxUc4iano9AHxDjv949GKWQFiy7wayJRJcT3yVTzKP",
  "key17": "3AA4J223eQJijEuuNb9jCHHfVrijcYvu8jGu9TGZa7i4jeL5dT15QBgdgZHwKsmZ3wpbfN5QLBQmHTAcjMtdp8XF",
  "key18": "4SQCKKpyAcRtj86h5X8eoZMQ8Ee1YxZJHqpWywxKFymFwNEDaNBQkcttxVdV9pDVGZN9AcqvEdnc69pMfPQmHzH",
  "key19": "urP9cJQtWScikY6J5zyXfkiqkY5mR6Zeuag5YiVSTXJVeRJPZgJmVxvpTQib2ri35mr73ACviG3Pwc2pmRasmef",
  "key20": "5ugaEfSKVsfg6sZAAi4MaTUWw1r7eQn7zC7Q37bbhJq14bpZ6A4yoGGE3RdHGCf9TeL7HHpA963oMrnWnUge931v",
  "key21": "2WbPnVUvPEgcpicB19WnNe2vbMoipH59mM2QrR18TGnMAaJW6a6MezATe22zdCEgJdgr6vmjzmpHL6ys3j4eEEKC",
  "key22": "qWH89jUMQ51qdhFydWfrGqWTeqzc7mFjDFuanMPDvSU79RDdSiPEBYFyMBBnJmHJ2fy27P2r9yRtibYkJ9FEWDw",
  "key23": "2PECgW5VACABL1nL3AsgM9t3BQqk1hj61Su3NAjrGS8YAM8WSRpfStiLdGvK99ybBhGZz1aL15E9UhcQ1CKn6iwX",
  "key24": "38RbhNuMSou5jy1rV2Fe8uRDumVywLrqJ7DgFyymi8wxu5tXr3Xy9Thvk5pcM9FHiF7D2gaQUPekaJUMqHhGBdec",
  "key25": "4T3FiP7G6i8aBtTzaFQYQsVksusvqf5nBbudgtPfNPtL5UPLkSMmLz1CenTdRTUSTyaf67NLdzFwapPNuFT1wQJ9",
  "key26": "4KEv2cTkXDLW1XBQ1zfaNdj53RQmC4vPxh5Fu4vWP6PzxxLCxCTPcoiHLTmwBJgFigDF6oiqFK9ynwdSGTdVqMQT",
  "key27": "65Bj3kJ4hwuzrmcngK541483cSYyW4E9gKX9vegGDvSxpLftQ4dsEbqTrehZburm6eB1P7Pcobh9rfMj2fLJokCY",
  "key28": "XbWgBUV2q8jrAMq4Nyup4aUUQxKWbeYSwsYxiU9yNq2CM5ZWxmabcZdPzCpe5Lnd3tJoRwpCmVWuiYMJJB9xGgx",
  "key29": "XgByPnRBHEWrPKk9rgPTTtXZmexbCSwQFm3VhJjnMkgJwPrwFyDZBhVjGPqNqfzgGjuxD4SNRkBaTHhPFxMkDcH",
  "key30": "27WoWS9ksxzq1udE2153NyWxpACUYGfCAfMq7BYqkK9A9CMr31giSSEx7qrWVvu8soZjPVREJvF9BbUbNjiApt8E",
  "key31": "27h7ULZDHmjH14tpUhvRkU7oXMQQMV8YonFJoq9aj32ZFNJfzo3jLWQpGCqc28H6ncbesSUwxbXnKGMazgkJJNCQ",
  "key32": "5dk9WwGcVCQ4S85aDsYxNqbQSGPdZB9VAigA5d6uPUnuWuowJ1Rm8gP3VwfKXVVDiRT1npKeueA13ibzoZQS4fow",
  "key33": "5cvx36YEaKrxWwnJGDoPYDdRWaTFT4WyaHAXuSwVg2qUhB1jfELVJ23tsu5ACECm4miHe4NFMqogHbjCjtXmjwQJ",
  "key34": "67mXb5H6SJvzNuMUYSjV7sUQLbxdfW8ZpAymgpMRbw3anfi1Voy82BCuyx511zr9cpob3eDVKASNdiNUxR54KHKD",
  "key35": "2ygvDRE7NU9fTiXr9vpVVqyhmiwSCGZF78p9H2ujbo57n6f3Qdgo5MqEpQ9HA2Hdes2RPpxcJS4erwycf1iqrXRs",
  "key36": "K1ecR3PYRUNjGUXroSy6NsNnTAmkuMXg3Qdbxr2pHqX2gbX1bB42WBggvErn2jNuVpUWwaqign172YHjQ7jAJoy",
  "key37": "5MfqmjZUyXh5wDsmBnrrQhv7gFGs8wUoREsiX6mMLARNQnmYXE7sinmdBjy31mHtEnshnSW9fe9RE2U1m3qp79Qy",
  "key38": "3goVuNvNSCKmMTN1uNxTMw3hQnpBnYdBBvsau61ohSB4VPWbViDav4mzpSk7ZfmQZhsjJEqW4mET8DHoF8iAsS5f"
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
