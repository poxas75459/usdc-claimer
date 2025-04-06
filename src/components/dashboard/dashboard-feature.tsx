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
    "BVwtp8sG23Ebsx1ihDSpCS8vTAcVDJqtQbGrBJrjgNf5aH4arDAqnkHcUz8C631RQYtJ3x4HxnoLMagPpKpvwTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYfcWjN3GfNVS1ACKaEoKCStAAApeH6KvQrnAajzBtQKrz5L3VtMpMdi9s39FFwCvmanxEtgYkncwbFeRFNwX83",
  "key1": "5x8mjVshArKKcf8b5jDhPQT9ft4piq2L6mJJTFUWnf1AjeZJzRj4R5N9ZZsoDu1BC7qCNrYTULEtfn74UuCpN7dC",
  "key2": "2hVAGMoc2pc7urbf8XsJvawb7aWP9SsUSMXWbNXfcEeLa7cwuetqAJ5HSdYSx91afe6WXDoRJ5WhcGFV81GrNHph",
  "key3": "3bfGsqNEXwwKDCbJ7AfweuASqGeECgwutjw4RiLKW8v8hHPZMAxKSNXmwdQrhGuWt9qXk4gYZbiZ37NZoAeWor2o",
  "key4": "66amp6Q8rBuewP8J9yTTggsqLcQA4otCBF1mEHPjoVeJkQ3wikubNyJe6zAP36sPeYnbttDPW2Nw1jiULcA9rqcR",
  "key5": "231AZCfYGH8mEy2JiJp9cgNG5Rs5x7hzsj2idjgJmHvRXR62n2EaVWijGzSfYzoLc4VhS4BjXrSKoPDhNVYAeCRN",
  "key6": "5qoKwoPJ5AnWsdAzEid7CWkBbELFxjVTteTBoiVH5hsdWTdc1B7ASTirJF84qF68X41AchExRJDiSNXpS8pTY31x",
  "key7": "5M94hLBz8eDyoRu1a2x3seGz3rdmAdzSiAqP1QTjYVZmNAzyE8LmLKKRyzTUakPqViSj6aBdHvzggtgoRFcRzFj4",
  "key8": "5ijnHbHtV5LmHw8fhNavDGryNUPRU6Dt76zAQebFZ6z4ejaEkvjA3fbzDrwWLYeEEYgpr37mCEvkrZqauPNzhzUM",
  "key9": "4YFMAnNNX4Q1zqp5yVY9zThU5dtHdvjg3Xx191G1CrDm6GMPZwDYwQxJV7DKauBZWz95Q8zitRZwqVQ2zG7gjYu7",
  "key10": "4ok92VBdpNB4cNa2BrhK27AxkKGgwuD3XGJJ1td3iZYz7jsUZf5jLPzM5C43kMYBkcB5b1DHNAyEh1vAegkA8RrG",
  "key11": "3uPvFaoX8pYvxcwKFFaYisduepUc5bi3w1knCsBWwzHAVTvXJSa81r2KrkgVbPbGBQAgC1F685KrFwSn43Bn7QmD",
  "key12": "3vwiAzzKTScw3gc87YTKVHjkY4UDGc6PLZYVgcTbG2ripi1ND1BjJ8makmYeM6RMkxH75PQskQ2YRv2H5v1qXjmL",
  "key13": "3myh5UF2nsM5f4vCQMCiRRPKv72vs9LeLK4kRc5bpXAhWqS6sfSN8PW3dQuekTfTftjiLaNu6xNk4DREbWFuwxvE",
  "key14": "3jD4n9Ego9iatRB9QpMkNB5rt3TncZdTGvQDfZ76gTvFsLNFwHkzrnyTgNwE8hCnfEVJP5y4bDZGdGqEnHDnxPP9",
  "key15": "2LisPxrtJ6s2cZiEBof71ZXG5brpW9dxjkqFV1vVfkFWPG7YSEaXh8hFB1SNN8epwFrLxupA19ac3wEbBEEsNvWn",
  "key16": "3ui6hyCUrhnrDWoXd9DgUdQstJBEa27uw2TSyzcJB8ZcoiofAtStt8hmEYDCfEFVb8sQZzjmBG14BDFzFQ46D4j9",
  "key17": "A8PnMG6Ca8mNZ4He1pwbQKxXrbir8bWqaPJhvit39aUfszFPNYtH2Ci23TG3VJtg5sfgezjhe4TP6wgD9Bh6LBZ",
  "key18": "31yervnkT5Db13ThQTvHVFb7mkLQuKH9ZgQzjunP5dwv4fucvRZmHazrZi525F2w3rt1Bc5uu6z8Ccb4CRi73pnC",
  "key19": "5EGTJj45wEDbwaesbkRXbxLCAcV4PWtuyHndKd3csbscsZLSpVTNq3EPFm7r7eh5xigDXXn4et2pJkrWNZNAhqdz",
  "key20": "CAxSEgeWgGz8pP4tjwCnXfPZvahQ59SyBk7dq4zirqZ9UVvuPAFn6hzcCWYnAQfHTo8mbKBZ4WYYAR7V5BiSFJC",
  "key21": "2LS919XKWFXawcWNr4yvgAeuiDMfsEppsgnD51WfnQEAkaLNjRDjmkzTuwykH6GLpQzt89PQJD7oCkXp6p2croJW",
  "key22": "3R5wx9AyU2wBgJZwU7zrmzhqRByK3fkxpQpnS3fsZtn1wdgRusEDpNUaLjbtGKB78jCuWBX8VE4y3NHgVFUwHrYL",
  "key23": "5v6naeUQ2mvT7fpR28WzEQtDBDDNcF9DSfDTjG11K5QMxCoVg9kYYKQqYPrhADfunuDf7WJSQd6o64ACWGCsGRLA",
  "key24": "ko1XC7mwnTPDCp1JvpZr4tSr6e1Ztcq1uRruDaoderCoVjirss1tjFVDJNF83WRGK4ii6wDr9wiGMubfc5hAYTf",
  "key25": "2QQijoX3ag4sNhfyToEfwXfFcDvaoPcQjG7eYfoqghJbA2q9Wy9tBkUGUAPFbLrEJegiv22uxYnMzjvVu2KbtHze",
  "key26": "pymQMMSkdfpMRjfM6aRdwaiLAZhNytHhh39xJMRJWbuXPzqSKqjoMV5q69aAJEzDsk7YbSvArJobg2vpiXuACdS",
  "key27": "RdnUcAvh1U9JF3qicnWkNTiK8RVHLMwnuxAHdwK8CMGgK4eLrRxAsXjddEHXtsVPo5CKCy26ucV9gVdH33zNHv2",
  "key28": "3So3w99u6s2KiHFjv99c6DMitGzRjvJkerudPcZJt1Q2GXahKD1SzbHg2HBQHxCDjgCEqNJMmxkEVVzdKqBfYiv5",
  "key29": "48NCwF4wNxukjGVABo11byeCMsM6w1wZZqwR9uNkyvR5rynMYCTi1tHdezick9bNSXJtr4wQ1bjfvNqDvTPJEGG7",
  "key30": "WXJXzQfWoCY4bKMECzkmJtSU8Av62K4eNbkn7M3FgVu9WKBd3EdDMfAfQ6qTXL9bVrwvDhrNuc2awSg4GiXTpKx",
  "key31": "5U3bFjtWCfW8HKhVSkEH5yFrA34wV4AsDTFdqt2L4hxEb6ct2Ppi4NycnaXLr8TyYpcJ4Ho7RnGwaVfU6KDaCto9",
  "key32": "apFjoA3Gfp8eL5LMVSH3WoCSZpmBenx8J6ddoLiZJdtZZTSHRdq9o6ZhsVTyeU9ABvcQ2yCGKeCeFGgpWAQd4q7"
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
