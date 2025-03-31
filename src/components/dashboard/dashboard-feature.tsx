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
    "66dzqwgBLPfcseuF7ciaT8C3GtTqf8SHk3bQmL7nEXrmfYPZ38BdRZtcDKiZgVUjP1JG42R8BBGE9znovqqDceZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzaCo3LYXCCmoCT74H8J5miYkkZDPq3G3UpDZn5mLZ52mtBh43axxt26MnX54vmz9cfw27VaTp7gjtSVU8h7RNZ",
  "key1": "4dQXrLwsW585PXXbtxRxhrF53WNEM1JeXHNxChWz2k74wRCBMhSFgNyMEsg9GEvxt3GDuxrkJd6pyd1TgsMLGoY3",
  "key2": "4ouE46QAtyzwU4rFwDvBB11bzznrftpqcsnWPKTwUBksAeTCGGRuu4tmPBUmed23N7HV5A8ZzJdoSAs6Zk5Hi3W",
  "key3": "zeXUT6ijpLCLFfQrt6Zh5XLGfPFcqmoQw75urcukY3h7WPBMjZkQ5rvgakRrZ6LTWspEfyw69tMkHdtXvnn8oMC",
  "key4": "2Jgu1LYsiXkEpijzuoA3DjCCgu2KyQ16iLE32z7ZxkMjrJ8DDjR3mZgRUQbvBCdbrtuMgDTraVokt5q6uv9BYrsc",
  "key5": "65cwKV92qhbf8jHPvnXFZ4ghbppXgj2dVKU7iuqrAMyEiFdt8F5ok121DVfsba7Shsw6aqQY7wLXzE7HB3UiJQCv",
  "key6": "dwz6wNMDesnTDy4ViQ1kMQK4TP52VdejPd7E1QDwbgMnE7XXfwtxnSdDRKYB6WjoczuKXL9WJ81NSmcazc7K7iL",
  "key7": "2W4obzyh3GVGoN8GYof8vq3hAkbpD4dF1pwZFjjYPmBn3rx19vGcHvWDWaiFFCpw1hj8Qaoedynq7i2nZrkDwnJV",
  "key8": "55CdFXrDspyWyrryiMAJ63TzEk9xxhcbu9whxrsezC8xVAYH6Jc1sYAU9fiSiF93qycvKF3RVonFKtRzb1a5rbW1",
  "key9": "3C63984kxjgopss5qfsBjiYPJvAVfGpzcQub7cUhhJkcqohbEBunhsxkm7ezjAwRTvYLo2Bkxt9b4rYBPYir7Yeb",
  "key10": "4nuhphkb8tErPDUkVsHTv5z3LSxAh5pvQuRkEm6QdMREgMvyqbi5AEEUXnFWbATiHoHGqQp25c6gFzo4fQHvqCRL",
  "key11": "4fs8iZm7YoFejRSQdrZ7cTP8wXuYfdCdehYwJzxv9NEsoGSQZkS3bhQTKLWzYAtQtBRDi4vzxwUTtCa3GTFNP7mF",
  "key12": "3cU6pUs72THhKqEVu1g11T8xAcFFrUADbBXz3iUvDS8VtB7ZaSUtG2BXPrX4KjZTEWmCVhcH6xbcQ7mZuiZj8qPU",
  "key13": "2pgX2neB1aHMjpxocbANpFJTdnModTkg3Bjv8vErB3Z6we1jiXa4VBoWtjoaDYuY67pozpKXRAitnSfB3gRnNhwE",
  "key14": "5pMC7vNyFymCST4SACiXRx7Cgpf5mPa7AWPdH23M74UyzgNUNtufBbUtBT3i5hW4R5fBH7oZJDvKcLhrztpb7BaH",
  "key15": "5a7sHqMMTNqrghXwDaCHictLnncxsN4ghG6skfB9z3vPEvR3JwWG36HGmEsZKQYrEsj25VZ8arL6WNMtrmfkMMtk",
  "key16": "4oPgrtABqbqxkFgJyc4PYTYFcebV52akD3PeTMNxngmuDuzMPQ4z4qF1EFHJ7fD6F9dPK1xazCWo8xNHfWVJ2y9Y",
  "key17": "5ZdMBjAj6GPs6hrqej9W5Q2HhbvAQqwfhN1KpiAz1ZKqaEwvNo5X1HtfM41wR9Ruebiwf8ZYuLeKajQQ4hST5rDb",
  "key18": "4gCXqAEqD1SYPL5wY7YFtvaLdMszK6yfkM9NFdmaw22f1TyuftetF9igcALHzqRJud5pRdiCDGz5YPqTbVYiPEe3",
  "key19": "5ovMwXRN2i6gQUWFfyiRNASzk5ieyD5NmdfbwMtqr4hh37xX4R18T4cF4Pimh3vs5CG833P6TTnBhsD16NDyHCfy",
  "key20": "5roZGtf57qaDMiY8yYcT8ZrjXZj9VphgEri37asVVPvm8gcbNydixkwR5LQCAFnwSst3PFpefNw6MAem4DEPVsxQ",
  "key21": "5X5h9LP8DWYExcVqAY12Z9dafFg21PwxxWXJaZ8kGAb7biYAm6SE7rbGpBfmMYiv1eKqmQsUNK6EyW1rtn714XZM",
  "key22": "2WyGwUWSsyYqTigYjPKJcZMdhCYhxbquRBjZdfLXahr62TBCCTGqT5h7h3P1M8tHya9Qb9rha2NVWwzhXdAd4UwJ",
  "key23": "ribVMyEGgbmsXA1mbsMpy43bJdHCXDFouRk98V4t6VfrcGiQ1eTZikHPwLUSyQDMDMp8Pk6hnurnbyhC6anY86s",
  "key24": "aKk5QjEp5Hsqd76BZJ92EDAgSAp3eiaVXXFQkRkk1yc5PuCwyM1yFJbenmYwvQ2ZQ4QMXXsKySEUzQEwrr6c5En",
  "key25": "56EsAEH5KbkYo4mJRNKQVmCqU1mf8AS4cfbX2zQuPN9bE5ig3suupj9c5bVDCfxrc7NkjdkS3ifZKUvxhn58CEsz",
  "key26": "5cDmB9HS1ks1YxpQscETxa8Hexq2aECVYxWaSeHP1kJyG4esecfJbTZexyqBFmXUmcWkfoFE1B1nGE5yJy3wPUnW",
  "key27": "21FYWv8V9JTckr1bPjMmnZ2M9pTXyg893hVihy7SqYcjqQ7Dp7GQnfJnm7mWDgyzsSsjRsMZ2AXhgvi6yo4aqJm6",
  "key28": "45UW9VBAcb2MuwoWyAxFRYyWjvF8Hgn1rxfZJLuVbwFDnXjuh6BJqd4ohqd3eg5uFGcVL58ZXE1DqLq3ke2uPRbv",
  "key29": "4NrgQuJy1Js7q3u8aBDnUYY1YJ3i895p6emgDrVNstgZtndMYZN1mE8nW5pFSmwjcxsYKHuNvRnXcFWZsQtDT3qa",
  "key30": "5nYfPkeK94gfJiafPezmZwK3tUGJfTdzH2G84jiJ2JKg4swMhgZs7ZYJrTnqWuuz7p6HhFw6w9RSPbYHNuCdGMbH",
  "key31": "qT2voB9xQsfvzYE6BZux2fhkZTLzNDWmegJZjDTGRCEhmJHs5jW7KtWqRfzLY6C9dVDSJT5o4b7kT9cyGDqLS4i",
  "key32": "3i6rvMJgChzE2ikxw5ZVJS4PMhLy1aR7RFW872f5fMJ8upBCPWXBUeXXh4zPcrRFUhQckpax4csqeZ88bzSDhr3K",
  "key33": "5pUje6yWvSZmuytNPgBrhnNbF5cLBfwJZGVBpKPiHf5YimcU1BAJGV6zpU61WbVfKUmTev8KkmbSimvfg9DaAd2N",
  "key34": "3foZFDaAJnfrsRp7GkGFqjjvkdBQCSvvSKmB7yFD2qQCFQbz7trwJvdDSbuFu1ikEGvzRKUtrL7PGkHZ1yTbtEfQ",
  "key35": "3WmWFRbXy73ThoqFh1dAXZtQ1sYeLUJmXaQ49y8tGz5TCJ1pV9k25FVyvRNd22Y6ispBSuoSma8RJzvux6G6oHd3",
  "key36": "2XbfrSWMt5hZopt6NTXZHwT89o3HjkUdfmhTm21bn9y39QFow9xk1zQEWmqwfr1SPGTfkPti6okE7wT7HanECG9Z"
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
