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
    "dgbh8KrnPpn5ML8nR3592xfc6KL5EeowqzSWM7bbF17vB7dyRrEXqxkCEPNtmr942JsJ1J8xDWMy8PkDwut1qqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379EBL2JRPBPg6CeXJsgimQCLMJTAFai3p1TLpgoWWPLUo1rUp7pe5wSttbyHaBqfwqCJK9ZHBAk2VqhStE8Hn38",
  "key1": "5DGVk3rDFbXidntQJF45h9Lummimo5fk5kkWd5c9gLiTtCtoRabWNsGAMsJHvHCxgijnZ9DfUoBQ97ZHH7DZbwtf",
  "key2": "5bgcfYrbyTJHKjLGzpT4v8P24KahLkDFR1p25Tt6k5aUFKiH54Fp5xTJb6VMS3Wj3qzsEWPeRXJa5iCeS7XGaKmB",
  "key3": "2xP2mGMHrybNt7D5UutFGjDmwqiuJC1rNafdKUwbRtFX8jyD76FqjHvwfzHJXNqCNRGGVsTsjZXW2mDeyPWEbKhA",
  "key4": "5Wn4GKUDxFX82eYPJJ87s8Wvczg5iwpqKzqUdSrgKQ7jjdg1TRmsheT6vUbe1Js62vqzSmv2DKmPtPnr9cgxFUw9",
  "key5": "3J3iJdwMzdSoQQTsVT9oHCZJX6uRTkUfj7aRW9Cf4iuDK2iEJinXPC5M6hKcUHb5cPUaBpu7LGsNyAfR7vBQVvCe",
  "key6": "5uQV5dRQFY1LwdeG89rfYXwXrjAVua2cj4k4brDuBjE4eiRrXiQ56e5CJpzH6xdWZZX1zXWaJq4oBaXxFWR1Ej7Q",
  "key7": "2vm1xxTwdKgyUxgLtFVu4hK94v8VpfimHPN9nDHFcVPi3AnMewP25bMeycw5HdwH4A4LRUXXLyvebZkm6orZWbfW",
  "key8": "28EK8hXiBzBueZ24tbWTrjtJYQRC6XCxX5Qwf7R8CmWRShDqepHSbtxVjmaVwcUL17k385Z7dAeg9feEWwX7biXN",
  "key9": "3RywoicD6nwzHrA4Ba1vPWVKMvzabh8uxrjAU4cArfo6h9PgvVfHMAgwtxpgUYN7zWv9GaUqU1UwbehezRxJZQEx",
  "key10": "2TzD1JnXyQNkYQH8ahgxsA5ZjommaQeJ4QnEC4z27zSVi8rcVsD1ZuDagDHruKNvdUdvT8jpN8CVZ2weVeTK5jSH",
  "key11": "3AH4iwKzfoF3jmdXZCDPT6sX1tqJJuAZQJgJcD9LRLwFu2PncY4UAC8n5Q3CY5m2TKyw4sXNTC9sW8cAdUqeVzro",
  "key12": "48kvqX4NGhVW6D4VfmCsK789DtuiGYFcA9VN3r68d38F8LPtZot5YhdoZdUtu7m3Qsf3Yt2SN13UW3wxUMZbHRZf",
  "key13": "32x45iXQRjwUXrXWxdYyK1oRCtNUrDG1TTMe5j1CMNNse5ethzeMfGm6GW45ZvW3EqxSYfm55cfTFspMpEtmhs1S",
  "key14": "42U9aXvrVdnHzgE6WLFCFdBS3HDoH9ixYSdZuiU9wuoBvafCAcziNzpqTTz28LC6Mv3nEsdKPq2JgzHLBrFqYt5z",
  "key15": "22YAqdKMwm3TeqocWNAnG4jUBq3NwPtxMZHc7JWARQRgQkwKcBfQEzQ7CbLRqLcEZXfmsjPRD2FPMg4B8sedcG8i",
  "key16": "3yXz9DmC4DknxqXjNjGiUeaf2ad4wXNQq6uThJ1WZiYpVqQgPMYdwBVd2ngW6EhXVj3k3i4eamhKXbkZin7MevJz",
  "key17": "3onf1bfH1MxFj5bx8nEitLMay9hXERmq3tBXcwSDiQc9J4mrurPi6Jydbb9ZY6BAppy6eDuucZjru4cPrgcE7xEh",
  "key18": "nnZn3AGSRZgGjuWZHZMBjKSY4qpS7HHsD7tnJuw36sNzZ4iWkd9mWLebgSSBhfi8vJRGeUdzLbrs56uMgpA4P1u",
  "key19": "3PPpPbVdrNs9sYSY8uHD4Tj8abFRUE97SmKYo96vqxFi9qfD6rS6TYPUbr5AhtRsvmiYtpWZaTYC6xmA8JW1zgkp",
  "key20": "5RDVRYCYPFPTN6Ja5moUk2ngVqQp37uzFvJ7WDuSW5p7BwTMcvfKyHb4DAta51t6ALCUzQMxG73vTNyTZEuhFfzu",
  "key21": "fL8Mn2qh2ry4noDyVUCdkBFB4271dikxsfCPke9E6rnfYouQqJckoSpPeWTf3bkDRCSYGL5SWUxYzj37G8sAQeC",
  "key22": "2MbXQE119GCdxXXw8Z7emB3tctBFF2DSt4hdcHJuAp13V9sttapiPhgEGn5fMFyChG42x5CmQ2XkRzEQMpxY8XzA",
  "key23": "2RM9k6yHcm2qAAJz6fYgZcm35B4LDeJjZD3QWczH43z4aN45aWhAaxEDMtpiaWxaP7HqoUN38BqYkYbSXXPtMiap",
  "key24": "4pWBSYUn4qmp2daCiJCaptDLV4A2ypRWAyZ4zKL7K6yDAUZXAw9KCtcPDjwjykvsLgvncKQSxMEfdCU8MQeqqr2j",
  "key25": "4iae2xVHWL3DkfSLDZcQ1XBqfzVWMcYn9iyU9M136svb2cWkC1ZTKWfr6pcSgT2UeZf4sf8xUMGkdZWahKP7f8BS",
  "key26": "bAFvaPEaR1T9kqRsjXK6i4qC4aAzF5kyeU9QgpqnC3U6eDbZJ8qrTkE6VAiRrbP9L79K7YCNSYxiREdtVwfHH5P",
  "key27": "3UhtQMLxL5CvEKVMNy2GU5X6SgQtChMZ8ALQMwAMFpFnmoGm4t2oUyBkrQESF91HnD5ahrrumALeySq1zqMMTCFt",
  "key28": "2E5cvWn2nUvnPeGyyjaY4VF5UtvdMjdSnqwxASmEXfvQjUspMrSogys4FPf6EQ5GoonTHWyn3kvkxCxusKFzpZJi",
  "key29": "2vNkcz63iFdr5dgNB59TfHNwVLPW91GgjGYRDBYuAPvMkAFhTbrJqacawT1k5zD4uFCztmhVM4FiwS74LLSjJVM2",
  "key30": "5AtMqGohzheJ6yjv5rRYeJWyGZGEtCXa5sLobH8QgQZuZmP5a1w3j9J1hYQ3KXYSFxsjEnTVqFpk2h7kEbFMQykr",
  "key31": "1c4fKLUsdMJCRJMsrpm196oAtk9SzusqF53NrkYsRUf2gNAyc1RbdccGkFiPBr8u6xfBYcNrf8RC3ZtVdhDjGQo",
  "key32": "3dhEixJYcgzTHP2zBprPUtJC6ze8FJLuedYuTE2EurJ9FVq6Rg1uMuFvVhnWwW4ZpwiAo18QgYw8xKdca42HccZj",
  "key33": "3p4nUeNRh4fuu2fGKgjKiqG5VuaWr71c1rRvY3Rqzq5k2hTZkFCNPbAxDAq9Wk3QEv22Sa5m3g5hkfPLPfEpHnRV",
  "key34": "59BNsrim1XVWsz9r1KrqyzSgm7hsLUHFbZpHajQrbc67ZAL6Jd1646WqDj6J8y9yWzt22jzkz3waFSWkgWHJ7op2",
  "key35": "2wBf7KuX43NytNyypgTdtmgJpFGyaof5PceDitRHeyJixikmTVjobGbM4L9JdPUTKfcWE66fg7NUqiekDcfjYPaJ",
  "key36": "2g9VetUeoJqQEdF31qi8Uxop5RA1AbtR8j6knc2AAoEXYwBDqpo1HT5TMm6Vx6RVkFBfJ4X24YCaatAFr1VQikX2",
  "key37": "3Nh9EkWE6MP1R95L2sbwjCdzFJdW9GmnKH9wNM2SjH9vaBaQWkdid3VRpXQgQGbeFjqDDEyai9aVNLiM8Kgg9Lg2"
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
