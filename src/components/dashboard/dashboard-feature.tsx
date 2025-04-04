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
    "2rVr11MDhTNJ7mG3EXmeUwtBbVPyWpVX9Y6fBaqsmCVEjF5E7KUqMNgiPqqLn48TwGjXGmLwYTrVfnTZ7TPF3t1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227gLuYbXTEBC6tG15dmdU81aFZjGwuo6DBMpgp3Wm52uqbkXQiRyMKJ7s9Xj8ExF8JecKdBCwHe1waNVe7tvKnb",
  "key1": "45VduGvJehTJrLWvfV4xoBAkpHqsbgyakPhmtpVcoonSG77zN7JsUhFZ9JZjskSjw964C1ApAywxf57qR2LQmeJ",
  "key2": "2HAJAGKLrqUc3xQcFqohoXtxU6mZTFKicEXvoQPVbyGhaFmDtjZ3BaYxVor1C1AQsy3UktK2dvZgEqd5BornpVFb",
  "key3": "4W1JjWVfQxm2vQEzZ4hBqQwb5FLqzhD1tWjnMmmZvmhNFsdeHL9LY8vXH55zY3TcCNdQuHxkecxZXdaNrjSRVkPM",
  "key4": "JB4a9PK8xH1Nd1waWugBJ3x3CXUJiRPLKH1U9x2jxvwyHqpizm3psvovCfb1RDNdbKc9pnsR88ssAy5j9eMYaDL",
  "key5": "2bMgL8vmxYQ61daK2UsCeykhDTG1JCsDifTDf1j1kxmVYVh7fEoNq4NxaBQ1TvXKQec1H9AbicjPQGBRg6QQqLSM",
  "key6": "4k7sc9uiEyhdRcgZgJYhFqREPvGyf3Lve8SPfYJTgoJ61fE9trcBwkarx3SpJXNX7EmHzdDzgnYJWC8u6ugCD7zB",
  "key7": "34cgpz9y7GTXZ1GfYKUiFmq6SEQ2r4VyDVRsrpXdFEKvBwu8P5aktXAXFTKbAQQR6cS4sXzWQULEZbZzkNkAgbFn",
  "key8": "4u81y26YZbLu4c5bAs5oRipGjZDCmTsGsAfee1qWpBwndcYqrB1Q2tZJEFLjvMr4kY6suunvrnkJvQQKgovHHWJ4",
  "key9": "366AV4MBZK1rmHTVfyrhgy6RrwbvEXqNDiC5NF5QhKhH4ihC9EMKyh1JQfWNxmXv6drDHkD8TorXS1f95Gg2EhdE",
  "key10": "2P6NzbWaCmY1X83U54ZUQqym9JrUbX4mmJwyTPasqNEo4DqThJhJLp1n5NwXv6GdECFy3Km6ogYPjntjUqcQFUG",
  "key11": "23RvVf8PDM8gaia2HMJcHSELjPW3BU3Cb9Vef5aojykVgXNQ2wtyxSsrDGT8mXnR7KJaUQHd1VfiDHmJbsADb4dZ",
  "key12": "5yWYuzmSNdoqziNr21MbcARpxPTPW7YtJudThC12WeQJNfBZJrKWjDVta7PGV4dgrsdX8dp6KKqiyzVgnhyM4T4x",
  "key13": "2rQPua1o9mWivC9UUATR6WDNoAijSz3gZaDEVaUNz5iXDp2XPs7H6MMCoiJhnAjENU8Jceo7sibnQrBLtRfd3gQQ",
  "key14": "4CnszCSEVdkCstS8mkk9h4cyAD3b3RWPLSjhAMmwr41ysnwobzqgAPKQZxVQJKR9dD3uYfmtKExuV8nnNZTsWbXj",
  "key15": "3SXpVZh8nEjD6gCxiRWkdB6KNrFstdRZqnj23KRhLPWuzBNjqNmH5YTnZaKnqiWnvYtZv68VNeKfF9HD7aqziKPa",
  "key16": "qmzH6MLH5H5cwnstMJAV9qhqpiQkPgSCR63eRqJHowK4f8sHfZdwHd8a6WUhewWpVw86FMS7scuQMAphS32w3ea",
  "key17": "44WeZCxXNNcdhABxv3oBnHiS7GabxUErk2CsrDkHGYztd6RzRK1DNk5HUtF8CWU2EpbhNeRxn9h6VtqDqUB9nbp",
  "key18": "3DHohtWLRhWfmyCCh7DXLYKmx4gZoaRoNm1CxmAHhRVYbgTcGw6W1zmerD7GmXxadzSq2ibKKW2VGjp8DfD5tC8B",
  "key19": "2xjYbQHaGxeNek2ofVXPQV9jHkJ1GjGGGct2x2T4VcHQLt3JrByqTPjcvwbdyroVCxtTWXst97BbPk44kUKZmrxJ",
  "key20": "2P9nc2P4CF6XCqyZVt3UqDeUabFBfMmVoGdqK15sYBy1zNyAY6MFJ53pvfmWUtjuM8bFEDfwE4yYLpToNfqT1gFK",
  "key21": "oQ5pqtyAoZm6cteppW2Y3rvdnNZe3ASQek5nezpfw6QSTaSK1jHxfRRjHgvEFqDoK3kwJXRSmtRxyXT6eq5rk5C",
  "key22": "FdkW6VDjPACYkeE4wZyuKyYjEFnWX6nJWctex89QVBsSgrGcXUakwx7qjwinyymzxoU5N7BAQCYHW2HKjF8mCC6",
  "key23": "y2szvQ7NXJNz4t8a8pJhveyQDuzgkidqvbP8G44C8oMvHicR99VDqeuUSQSnjDX1unhYLXnuZr8enSuSC27knTk",
  "key24": "4j1u1X9YnDb9KYFeJ3E6cMUQks8YyeWaTqR5fM99gyBJGDpAUs2mCKGM7RfWtHqKpPs3PJi1wN25gziwi3apC8Lw",
  "key25": "36ArkbAJsPuL7qEq7UnMhLe7jnBd3bzESbaE1h2JXFLmQbE5y7nG7mEQrZ4huYYmk1gFmZgYDwjuRHBXVSg7H6tm",
  "key26": "3iDyoTxQUoGgp3iXXpuq5pNuTy7zDnz8musgyofW9NsEAKh4ZbpuUq1LZU9AYeMHy8oTF19FtsTbA1yw7qJW7Mwe",
  "key27": "4CCB6zZ9n8giB7cmRQTeGGo6pUSJ5eKq9J1eHFAPDguWqqPC6aicXQnX2Ua3q2kRmV6zvL8gkMCtkcL9acdfdEXt",
  "key28": "NdsbZq1CUroaqmiRkJrnQqCwhqWN8oXHLHMemvMGAViLHuySvffc3SJsv7re8cBSRHi31hWNM79qKMBXPFS8o3E",
  "key29": "3PRX4zF8fRzt7nWT9XKCwcdXcdFgq1CkvuuAe8o5exkEbbDoMPDEBCH7v1XPgwMXhpuzQ61Uy4Z86qvBvG3nH9R2",
  "key30": "3jMX6hVrjKsR655L7WxNF2uKKCNCUKgThrC12CzMszaohUXQfYP4wioipNrAdnokmX5Ef4k6rC44bw6Vy33eanrF"
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
