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
    "2xL7gSMATU8kzFJkaXjdtC2HRpgb6MSw5Qa28w2fKZ113Z2wr5VvWQPGXN6tP46F2qrEZtvuXQEFmpn5ucCENHiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkVx1zH93PTA4QJpWqc6TMN2dYgj6QgChr2tzxsVLSnG7H4xKuTBm6AtKFjzRzZy9h6XWaUbdEcp84DoVSfeohr",
  "key1": "29qofDPtHhEggsJCTev7rT1HiTgqvTDdBGs9m7hZYJR8DAuULLEZTmS1d8rsfyC1AkDE5AJgVSg3MFNrZyqD8VT5",
  "key2": "61ovvYUgVidCwo1MJSkshcVqYxUdDz65MgoYWB9suFrxRJu6cxCoipEGXs6KyZXw2T8z96NG8xgGTdhU47ZhQCtP",
  "key3": "63bnnpaeVWtNpX9JvCQDCwp7TQZjFXZ33GtVVZAosyacyDZGCSzyncygwsML44r7ZdjqXkKJ5PtrykUcC1wPtbzW",
  "key4": "uCgELrFGsG5XvXmH21y9Jn7eG15eWz9au1QT1uP7MohKhSm5fa6fmCT4AuRivb4phidK6djkKJTU2utg1S5S8mw",
  "key5": "xVBHJjitAfhx6JaAvezNc66SfChFdAbX518QFrT8RGJkea9nH6xkpxXFSva5TZMLLtQZKHhBA65YN5L2aYeWYbh",
  "key6": "kC7ZYgNaJRGXv47Q79kjCKMnmU5Wi9Nb2wFG84tpHd9XhMoiJxkQTiigo3QG4rDc9jPaiHif7G9NAHHcKZWD2cK",
  "key7": "3wuG2ZmjubhaK9BMWS18qMhdp8z15rE9VXs58dENiPpn8KJFJzUVLgvpTgnWmsfPrp9RxLot3vUmZMHTriUMo8qs",
  "key8": "5H6Raa4P85k7TQVupAFRK3qLZTUWPEGZsMA7DVpCoHGcJ2LdQ5mhSktmQBwxiTpsVYmzH5vgsFDs5bT9v9LoduZP",
  "key9": "4bpquyaakRA5T9U7WoEbwsJwJKTm9nebhmpxj9CcpLQ3vunkYzF5tfVRWda3VZ1PWKYXFesyAY3r6PEF5BidKNcs",
  "key10": "257piHBK4WivtyNqRaYvasaHnwMPwyB72XtThTYZ92JiTZeo7coN8aA1XDGgXf6oQDd8wc9NHxFG5PXiS5tdEioF",
  "key11": "4L1DDQ7cZ9rSnTjyYXvwNdfP44f3sV2j4s7W7CnVKYnnFwMzJxnJmytPjEC7zXY7F5rV5vY69kBv2ggPqjWerEsQ",
  "key12": "3gMjJLJg98dst6DVh9akVvYVVEdGkzgCxXG2XmQbpi2m5A96LrdYPwSHW68GTeq3aBVeQnGngn1kxHkjwzbzXbFY",
  "key13": "gJ1zDafMWuAGkfXNjFQP2YpqBQuNWFB64eec7j4kuo75dahko4RFbgp1RcZ4W9LqVkiUsNaxHAJyF8S5MBC2vuG",
  "key14": "51CqKZau1noTqUA6vKMGQX6mGERX3bRcDS6wV5shLmfbE9y6QJVRRWdzt1tyiBY82trDh1uLhUkcJLeLMnt3eoVC",
  "key15": "3fQn3c5QNyeNgdMxMY4o5W5SXqv2RfuXptsCjWQjHUP5QKvW6qW4PyYWq2vdkUWJ2txz7i2WW7MXWoN1QUgffX9K",
  "key16": "5XwQRwspudvZJtzBnSmUcwFwAD2UYNf7Z2EgcPkwBGU1qmkrbcwHP6ovNf5cSQp7Bo3G3gqsqgYCq5UA9yLV4Pjz",
  "key17": "2VbfqrFpFxb1vUghGJ5fzqRohKCmWoyAzcSiPAwj7DFtaS8BHf2ZvFA7xCf2xN3cu96a4yzLSf1bdBdpFkkbGvnD",
  "key18": "Axix5qC6NkoFgjvnFoMcUjniKpN9159LGsvKKtgJMMte99CKD7pDATkUS1aHYSrb2TJcHV3ckQsvjKKokJ1at6j",
  "key19": "3Dyoxg6VQFowXSKB9r98fTXHAEcPGFbdybwb8aBSGzggAXgEsvi6fh1ja4hVQFJgU16hERVMkQp2LECuiSxpdeUe",
  "key20": "rpm5MCWKdXLBP9LkLqbbMcJkqy7Js7VhLghohnJJpxkbnhx1iKF9r8wAGMpoG6BCW5Scg81w2FGh4ak4R43Z8aQ",
  "key21": "3zuD9KECShKmSM1iWzSsscBXJ8H3s37otsP2UoUMg3SHAieDTvhepwE5UZ2g5DPt3U2ayZDYrTCVXBFZugYUbJGF",
  "key22": "794DEYHtAKJFmXazNhdjc7zo8oi5iWiJh1ySb254Bzx59t384bgHBfoh7sq3AhkkNXw3a1vBX13RWjky1AxDx65",
  "key23": "5bWdyFFtvBHNrKQ6BEuGbyjpa9z4TZVvf6p35x1qW4oZBemWAcsAMaiZTzwwyxXs6pKs8gB6UxAkhA6AfgoeV2yd",
  "key24": "mUBgMc1xoycXAmmFKLd9pt72KzxGtsBJBq1dV7LE3paZbRKgyBYALkhM9jkwMbCU9pSsk12wqAGuP8M3WerwHaB",
  "key25": "3wkFPewq4Hka9vqwS9FyX3cmmGCrBWqyGKfzB7CUNh48cQFw6aHXh2kJBTRzcwZtZD49MvBmqEaSSydsZ4PEQGS6",
  "key26": "3ieu6VrJk3P7hPR2KsqDEUXcgGJR4zB2ZiGwmvES1WPoYoTAeSBNemM2QDTQrAn3VN1MCgLkDymqXMq64xF8dQYY",
  "key27": "ihfoXWmSRtrJJ6cJGa31iBc9T9ta5YuM6T19XCYaKUEutZPCBkQPDu44ULd4PhDLcPSftERAm6THxf9CCpiuVj7",
  "key28": "HMz9kBGp8zVHiU28MqttVSdxHCWipuZ3voYkzJucHA7iDouyu11vuAyzbEdTVMBdrkmB8BwnT935dseUuL133Pk",
  "key29": "4a2nYt1ZAAXnvi5ZByAxhzAR8JBjyjGVUHgGa9RwD89EAvzVAA8DhPBfH5ai3m47hqp6P2kEK7tHCDGQctPRFo7G",
  "key30": "4Fn9W1sqCxAT3UQ3Fn9u9jrPvZJ2vRoza5kcdJTvaj41QpWVZ1eexSrTNMRLYJsCYwB27WvxjB6RuB3FpkHj1vp2",
  "key31": "5iJ6KikSHh8jrE2e7xMUDoNXtCsg2ESq3j933QN3if7Tt928VKtRstVszyrq3RGVbzJGe15q9Ysqeo5rpStdmCM8",
  "key32": "EBY3MVwMUoND3iAZQKMtaZbeYpXrT1ZMwGz4Dy5EipyjQEALjiZVYYAyeStuG3Mkhrgk8BLAupSSccdB1rmR4f5",
  "key33": "4TEXi4FH6SqMBPo9E76CEuVpvksfgiCy5psiBeQzpaAu8caYQZpRJv5i4pjXScKJVg2NRYLBy3cKMh1Xvma7xTn5",
  "key34": "4YCqSaR7WVbwKiKLav25nqz7BbTnHFEphtqEWAt7L6in9EXfaySSEiUcnnorWDup4m6P7VpTMeeGX5X4rxF1sVk3",
  "key35": "5YuxwSjwRaxKQkdYa3iUMSU1tXL31HfHGBucBdTv8tDfXhCT1sjt6G9hfqYYDFDLKpwEVPWH3UagTW9aDBPHjrko",
  "key36": "4tTgc4dhcxMJU3xVkUdZZnYwPtZqutNBB1fojR9rx8iWyxVQuWVyj8zZ1bwuzCEcxzjs3jQrmYPd44bP99DKvGXp",
  "key37": "25TLDKvoQ9j5bM9e9ZeJqnN44JE4VvhHKzQ1WGaEf3mgPVh3XvboJras3vg1fSpWn1Mh6L43HafoPCsKeVaBvdr1",
  "key38": "3G8EP6FtSTx9zBdcU4yQ3np7FPXLJxHEVACnMiqg5A6gUAjpfK3BvAvz75R9NgJ1hQRwcQgVVHL79i8yWosddiC1",
  "key39": "4AcE7Jnu2moqi3dhb4roEJSDovomZdDJYt4jknWHEjTVjZkiWms6QZkXUsZA6ufieeSxVwBjgMkrj2gJXWi6SBf9",
  "key40": "5r33MLZpYuEBJkVqyyNPtwoexaHtem4r1eU2uxpGf9PWSHny4cuW6MNamPy6cwP1u2fWgdfFpg61viFHvmLGpXnv",
  "key41": "4GEt2joVY1D142c2e7SfJXoJiJYGkVANsLgvyLH1SJqPeJY4fgbDna6BFU6suPE9czxHvdi1EzW8qDP2ibhxBqwi",
  "key42": "5LpwjYwqa6ib4xAjofyq5Lup9PNJ2Z2eGMpfBdRmfRxs2zWvwYmDkVyMCjzYr4zbtciN2TtRtbr6TMszpquSRMgo"
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
