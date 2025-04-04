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
    "eDhMeniJucpEwWoiJVC5g6Fbp7JXvqSfCqhh9PqNzJjbaLK9EncPmBMMJaFweiPE9QoURfWZXJnqCY7ViAwm9be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1d2UoRFuZbaPKS1ntzPdnyFRBpbsdWn5RiFSYx6MfLg9DacNLczmaZFxS24mdckXTuPQeuysgduce1MAQ1w2uk",
  "key1": "2D9jo6Dpa28kq6xKXVgDeR3q27p1QJm8atXMMMEEsaGZPvNXPQi4sxHBrdNk3R3pWwfP9T2yXB4pdvJE1eeL9PEY",
  "key2": "5jTruzqUU6qAWPVxQNmvWg5uFm1TSxAaykW5w3jcduun3EzFVwSzYt9a9fgyYudkX5Lh4MuL6G3uvBEqFML3YH2q",
  "key3": "QJwSqzq4xtLr5YLQzTspUEJioMKbaJyjdecqCgMDYSaoHBuZnJK4yM785yN9oxNgMZ5VjqkFmBFdTzzWR8xTuc7",
  "key4": "3ekprzcDHhtBCEwXUdN4uHxuTgdtnXpEA6K318MhaAQaCjm39SuCKSvwzAkvFRyVfN867T64cwTY7p9Z6NQ9GCdd",
  "key5": "5KP4qdsJ86gEU34taw143wUtSCWHjbULLbru2xpegAH6fRj1FkwNymvG1mtxEqHXHeMDxneArMX1W2zFrepucvU4",
  "key6": "2v9RPfgm1UEYGLRNZuEd5QobrQww7zJJ4baGTBqhJSctVjbdCCWYvKDuSJQK6u1YFBbcqP2M8SUrbyqYFyDfnU1G",
  "key7": "2AZW2pL6hDH8So37PrdSFYCyaaFdDKQF4kyzHDmv7ibSM3u3RsTnX4Mdd3suF4Q15MXFfd6cZuoGpejtiTzaYuPC",
  "key8": "Z9kCG88wcv2BinGUyPmJUM9hzrXh5ur77NdUpVMgkLxi7tigN2DJGZMgZDi3jUHgWcH8C3XAKgSNWoZBg874T7A",
  "key9": "418gTrWpiTzuAvQJKRaqxe2Hxp5PLKyWLUCwpF2pFvMFuAgsuYnxqryAhhzRBGZtJ5hhwCaRKf1wenCwzYQaeFe1",
  "key10": "4dKw6jckisbmcKUWXNtXAMX22x5DvbUmWH1sZDNMWNEvWCRkRyWceB5nAxem9TFkaGvnZGPMBhrYQd8MZtjYjk7E",
  "key11": "4EWyvvbWT9t3bA8abpvTqKTJJhwptLMYSw4V7LMRqH3o38Bw3sxzrzEU6NEZCrmpSRE4ma3MdNXkGZ7Skkw4q2u6",
  "key12": "33AxPY23N42aQAMk6PiPN2t5MV9QgqinQC26xUR1aBsnX9KyrnBuJ7jSHokoWk4ogbpcMjMBPWHXNFw25ZkRLtw7",
  "key13": "3BjVKFsCu66tjrNkt9zSDGDngHGX65sYYadB6vYdqSez5gJ6VYGBJ27fE95EwVzuj4cDFYniVLDsLB79EcBkdvey",
  "key14": "5ZofdkXjQKWxnFZeQutMjgPDqnWjpbWxEQEoUh6F9mzP1BqwcqVJRW2aUrXB5yD8wY5zJ8WcZm7UysP3vYLvrKRE",
  "key15": "65LPbvB7LhZhgH97PTnmdAgdq2dC8extVBdEXSZ27gMQWphQbay1MZn6ncpmpPR3AtJfUuFsKphUCbbHWfHY5Jc2",
  "key16": "5uHgPJYGHSEfFv5oHw9nsnBTsnwRLEokTjNa5dXnsQNtYJtUCLpZWGQjdfL8nsSEvqwxveumdNtCnwkbBjvn4QPk",
  "key17": "46qaqeqwE974sHaLUZ6LgEGxFE6rmn4AWaBKPYjmXJo6VMfC76TgVfQWYnZB6heBAVwxp7KepyVmhCXQbBKxJCDP",
  "key18": "542D5GJq91DU3XS9K7BryEaRwsbj7GnS4xAGzNDr9S7Z5hwNUR7N9HC5rYMFJsgrtrvLhUj3uYcjF3GMaKzYQPVp",
  "key19": "3XKqfHx37KQUupqbmfnwiEFUPZ237JH3GrHmCJFWs1TMPVQjrviyevoMXoGVn3t5NtpwKHUN1fEasxfTuutnBJPE",
  "key20": "2k2BCs3tTu3TD2BAg1fWCE2rNFreRQTcNdZRMLrPX9Y3yW1B1DqRTu1JBNnHGw96YQwsr98vmkCo6GzPs1VDQVRz",
  "key21": "2jMuyyKF3YAtZroakjPmG6txwiJMUtkhGz4twt5KE9sJGyvrAUeJdkxWUu9XEh7zy5YeHC4bSQQcGu4Ew9HmhkMR",
  "key22": "4KVjtHCUvWWBUVJd5eayXyTWDMzByDBnpDWcxbGHCRqfKQWhjV694FNBwKPwuTkpTPaioGPTtHysoQBnUxwwJbZY",
  "key23": "4ZGLTtMATRMQMF7xzezj8Lu3Vn1bywjHyRysjjQTfDrWnWUnMnkLyT2hRBVaHAW9vwa9UBzAgtsnKPcDPmoBi8k1",
  "key24": "5KxHzD5mL7kkGdhwAXsucYfEkTt2F68C8RkoeqPZCgEnnTGCmrzJJdp3RzHNo5v7fxY39jmju3M1JhHHHBMBAw8c",
  "key25": "CDBtJjMnEdMFNkjWVLkKff8WkFtWE65dRvin9Shgk2sdpKzUy25y2jbmVezFHabMARc5GqddBgLMFeWcxUDViCL",
  "key26": "3BLe63LCPZhZ9M7R5syTvinCoAFw1i2zqLxE1BnZ9K9kWoN35FcoNgNapd3HYFK2D85rvfJ26yTNTgfSNE6YB8Tp",
  "key27": "2YB6WqPPwLEkUFwGXn4WJbudpBW1ny2KFEm2oJs9o9L7Yf6WDK8LLyVVg5deC8fUJU8JyLJWrCng1cg7rd1zEjNH",
  "key28": "3G1ZEEeFXKTXnWyNRUkM5THrMfGxrwtDkn2Dd7auC7p36NGC2RLq69NT68VzXovSWeLzW9ZimchTEC1rzkLiqYDM",
  "key29": "37SLEhDf8YLfTq5AE9Xuc5LqLZN6v9kYRVMRwmafHHiwwwKS9XdFu5WabHvdyPevGgFSarxeu5oBAD9QPxVuK4JG",
  "key30": "2rwwjwFmrdSJ2j9EL7ZPvbu4r5jgUttmsqNzaMNfdrLF5zpcK5DpUDtq2MqDfV6SHNVKJcW6naBmWt4rLifYgCUd",
  "key31": "4gzA8FEhWz2Y2utc5i4efTvDFEv95XJ7WZYUPFyxp5M3JyJ9LnPhJTQyC4Tr9dfDyiakwRAN3rYiVfEaLU4CcVYW",
  "key32": "6g5FdHkoPGPJFydftaftJVVx5LUxAuJWmvmY7vW6DJgjTSCLr4pKM1YbUFpxTBwa86u878vwByKqwRDGenNdkrC",
  "key33": "po1xYqLpe8Z3QdK1Y5WQtbTMpSPKNgQjmuCBmHzJpGw7WeJox5RaFJ5EFEJBswKnUjpDUUQmNzga2JDJXhC7jET",
  "key34": "58sp4Y6XrpLKtz68CNKdh7bAvESu1VFcLjRwNyRVNPcuQJht684gRoLZyptAUkXbRbf2R4LeegTMBo5qxaiGjXpb",
  "key35": "5niPWQ4Dzz69RyPM3TvGa3uYJUiwp5NmaWQoEzyScX2FCsST9UtCHHhSwXjGJaK1c3BtTGqSuVdd4xVg6YgMF5ZQ",
  "key36": "248ok8FR41AaYpUvSDjGxpdVbQaEaxWAN3rpHyhrK84Tth5oZ2szV4uWAxBBusgzN7TjPj2E4N2n9SvS61R3CfDr",
  "key37": "4ueqRdSmUxPsaZTAociRFuNs4kUMxLP7G2secNgnYhN8A3GDQZyHsN6UyYT5xo6q4W4ufgdY2dP9LFchydZ1Ud3x",
  "key38": "2njZRE21p7sj68vdsZxpUkjx84jRe6cD4BAcfrVda1bA4FcgvLZCTuULr9KY5u3squuRzERBQaJBPg9hW6RDvfKv"
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
