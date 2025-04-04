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
    "671WkckH9Q7SDFbhCTBxvCqe1Wgg7VVbqw5nxEAedLpMUjSMCsju3BVBThQMi98tycTznaFpRPg9JSY5gZR9pYXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pA6YnPmHRG5UU5RQNGBwDZAek7SPky2KMX7fxZinBBVEGYSvd7DvyLXatzH37BW3g8s4J27VBxJGVKjGg3KoK6S",
  "key1": "Lda3uRhu4vDExbDA7H43o8PqBi8Mp5mNDAr8yCFgMmoV2uG413nKsn3NVE594bAHHD3Lsu5CpWX4zDB1YwXJvH7",
  "key2": "63EFqZdiNfTXcM7ciRcCDzu53vdycrZFkqEevs5EPGHaHrcts89ZPa6q7WddRn5voLRJyKdxGUfmCrC6cTrQdm8z",
  "key3": "5a6VCETBX93evegxH7enSeUx6UKSiHRVbF8tM6mNWLzFnw8fBB33QjmrAiYwtFtqGuzbfhXEdRJtsYoM9QWQc2JR",
  "key4": "3Qv58YqXogZq9kodwxUgVzyWqK542qJ59MUVgQSX5yV6ECB9ZEBJtvwD62hsGxXYHpLrPQJbBxuuxdVEpabSmoNK",
  "key5": "5drmHKWfd8hdUv2T6pXTFgLU3WjWnPhH2GZs3h5ywLa6RP69qNaeT1kYSxZ5FwAu5QW9otwW6DcMdsTK7SwNCfw6",
  "key6": "2CMP7wf1F9N8h9M8MQvaLoAhNvADv9ZothDYiX2FfhRNmW2s9ZwfHMvPuog84dY6d5vfPKJZv2upcSvYEdybTUQp",
  "key7": "SMP6J29duk94dPbTfQhgzYdKmwFgeie1GtZfCbS8yjYtnKYDntNBdHSJAiD1YLmvSYmB4Zhyi8bKWMmXpwPaa5N",
  "key8": "2GFKWk8xWf8Mw6uubrERGCjnTfExPvaCmW5DLMJw5LEMVLR3jMBFTYz8r5dVxnNJy34AL4jZbemip3nxrr4A2WfG",
  "key9": "2vbtnsMSxXWhiSZNw8tqjGegTNqoE4bGzxz55oXYBGynxNLDh3wixAe9E7JpKzU5hWjvt6nozgxKnvvTUer92LDp",
  "key10": "36YcjsE3MofsGvVYZAdCXNqsv5rcR4sQ5V6GBL8R1U8dndxGNoARf2G1VL3onaM6EbsxbHeJSRLrTdGg2z5iCBp9",
  "key11": "4EkyHFgaGTVMo4Z5J8aFfcFR2gWTh4fWMushr9iLQUtyAkLE4py85wr7PSk9WxzJUswUbuiGwMmUJbpRchfmKuB3",
  "key12": "2Q9FrG1jwXUu9XGs27vUvV29dMAzZHB21gJg1sjoCucj6YGYyWBvZcpXevTGtcGAkmCowT2KPeDev1CR6SfpXqoo",
  "key13": "3f7N1wtQrD1jUUhdbKyJeJbmQHxZ7aZzAm5cM2NF3HXdcpHWK677ND766SbY5ydyQ7DUb6obpHjGdNi3hJxg2xb4",
  "key14": "5cY73XzDwmdYVZSMM6KLSTvTLC1EH4zUpD8mZjupKwwRBmv3yjRUdDCvfLrcDu7iGfggDRQmMZNXt4WLmSwoCNqS",
  "key15": "5mLQbHaJ1X2n1e7fLKn8BavitwzHDUWfVB4eULVihwq9BkKLzbRGHQXpQccyisR3zkNDFoUA2Vkb9m6rDGUhV6Nm",
  "key16": "h54r5z4SbiAieB1WEFFhJWMRdPzQbvxcbnxyQ2xEf8yrSPkcvJavU8EjpqZUjFKsoTZ6Rwmcp4UpUDP7dSLUcyx",
  "key17": "5ZGxirhPG7BfwmdC7zJ8xEN5oczjAtW46FxJtX8YGin8y3vBjqzWhmWHzmGn1vDCA3YKFU2kx6GPvC8GmbAT1vWA",
  "key18": "4BiLqCEVVW1JMZ6F9esXScnE6LmYD5DqZRuRrWzkkP2ReSYn27myGpvJy6gaKXRkjf4G5oLtAemSSRSazTHhvBSj",
  "key19": "5mdVJgMeiUZQR2hYEaoXBzwqo8TzaobErTYtg3utCzMz6UkbsB1rMAypc4MEruCVS5B3EsYdKq4MGPAAai27JCyx",
  "key20": "3hH2gBE61Wksfuhgn7TeF3WPGsDSpdExEVqJT3gpXqE7KJvurRBJMdfW68BQ7F7SWyJxNgKw54am3ckLthKT74MN",
  "key21": "3h177dzzhqPJQpkYkGrt5R72o82GGfTuSb7iyUaKE38FB7Qey3KfYicycefsnFWGL7wBuDcSFLP2S1gSBUw77JVp",
  "key22": "5TaaKHBsYXPKzA9szWxYravspit9SVkqeHsKF8zYFrgu1PNPAS1vsUPMDcbKbV431BqiPDSFqq4BKX3ndJCpiyQs",
  "key23": "3sZ6vAGWe3UnPGjFNyoy2hcstwpu25GmbhznEgLYaYkuFK7tcgkTZPbW78S5DsGUuLXkoBfAVfiULA2ARzqi8MPc",
  "key24": "tyTPACzpdRjySmy45SpGAKHpEw3N616WUseXmhPMbBaug9HbrZmYAHgPnkiVxc8igqN46n9uvYBLckqY4c2bRKi",
  "key25": "4M7BgDAmXLHi2JKgtJm5UBKBQdUMtbtyVebXhHaVoHmtzbxysbvVg8jvr9n64bJihjVBPh1azzkd7CnGo552i581"
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
