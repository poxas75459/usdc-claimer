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
    "DA16Joee4cpBaWYiRwAV9B8M31JzkSnvuf3rgUSgQ3sNjHFXCwtCW3s2znG3YfmHEtMaQuPuM5iYXMkzotNmVej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwCHbE6TS1mBL5euTNLRRKvPbdmBFy7ckKpQw2WHuJkYkEwCn6iayzr9bbCDyDzSho8v7xAeNBcDheAvhJsRofH",
  "key1": "5nQJJpm67x6dYZZq36frGnWXCmTevkmosaKAWuZ1vhXQPu6AV42w6VWA4jdEZyiri7TktPSzVf8uAFckbJKTma4e",
  "key2": "5Qw7r9X9K47GNbC7GdVxKqe5U6ZbzsYR8DH7tRvk2eJ3midev5dBZWL2p8H2q6ov598wsjZ8VEjxQ2YekRGuc9QG",
  "key3": "2Wov6pQPFF6kyvHEyxQHRAFUQxgXU5uyiGmjMtkJ2GK8DjCuMWLNp3GmdGiVKt2XSUbCDPPAm9PghwzmCwFwGH68",
  "key4": "4yqW6NN3xS7umKi7CvYp1m7fvxZCSZYEmbQ8iYeK3knTvcmzXc7B13qiGB974pvxRKWjVV5eSAPrDoyPmfqJGEvs",
  "key5": "3Bkr7WKkHHYSmFyuX9aX6C5AmKncWSFgHdtFT8kRkKkUwg5ZGvqde8H4JvGwRVEyiPUwv66tUJegEZrWh9MoitWB",
  "key6": "2N9JTvqAcex7cZ9YM4t2zxf8XCxFB73zkUkXaRNXBpJVKWyVmNTxAQ16NbN9bqnwq9vpa2M62svZqNV43dX7mbYX",
  "key7": "dtynuhSHry4GZbZ6w4d5jhcRjwD125ASqXaMuHgDhWXcwhJr4C9cYYQG59vgRd6hiEmcTS1UhA8NuEaq4FSCX3p",
  "key8": "4cMDiSgd8Pw4qkwkLK4tUeGN5vXcnuAXmUTVeRKvBykeWk6A1QrmrMxzZRyRZ9uPZoRYKaUfuL24y56rNyu1oT72",
  "key9": "28rt8E9Xd4mzwgVxze7v7dFqJdeGvbhEJGAGF2UbuGEHU9q4yUeYv4ym77k2EjjmwZt6d7Z5Tkj3RV9d36AQVCtT",
  "key10": "56pPvwCWWGtMsxijgnMwpRzN5tZiFW9Wk1TBXkJmDKReibNeyE4ey9g1ZASCGnGHXXproVuzAMrSQLg15PjGXF5z",
  "key11": "3p34sBwRD2LguiFnZdVXVRPvQr44ebG2uMbfkUs4eyQdSaheAbi463gS9WsKTwj7Q5zPDtGYvM5tVsQUNnVKNnXQ",
  "key12": "4xFWjVTsjcUwBELKmzCyodijfHzXi6xuLZyodWoZeTTnwLWX4tebqX9rT6VpdEvJn2P97kUyxfhAEE8VdtGjKbCw",
  "key13": "36rjjQvJYTfqRVraH19XWqY9hwfKAx3SarRFnLgfSCJevgZXyiznehyZeZtAejYRxWvaKVm3A8CPspTsmW62qa8C",
  "key14": "5B2kgFc5tyKgiFkR2TUo8iYRJk53KrDQ9ZbUT4KSk6YwTzQYYv5h6k5B1pnAMDmXdkQ5Attpb3cfb5KtJybrffZi",
  "key15": "3gH86VRZKu3uvfPUBRfbRUw5VAdp41X8335GDfMWhc5fdKkrPkwT12YNHpzNNGtqBLHBhcuk8wwXkES6PA2HtJyN",
  "key16": "3m3WEseVY3eqj8dY75FiUbW8js7rWduu6eYKbmUgivhzaP92HogoERiSUxmWnHP7pPigiNFpwf35d2beLN8X2tS4",
  "key17": "1ftDcqHcRTUgnVDL1XX3uWxtYWUMpJSwrfgzMWqCzu9HMSr7Z3wr6akqZWMxfnHUUXiPJLneTJpr1qnbhmcFDku",
  "key18": "2SY4hnJserDvQJXLw8JUdLePGiFREL8kM4GA4FdZWGrWdmae5Kt6qWHB2chZcA3H3CBaq2umXWyixK6SzkoyfM6j",
  "key19": "xSoh4yzXPPpidUQmNXe3xgMCAkuiLpbTEvzBUEnY13jQyDcvfjbXXyGKiW9KpCiuuhrqd1X6Q56v8tgBdBqTZeM",
  "key20": "2v6Rbxbb1xmTDmYnei8MKbRh2K3WDEeqo9FD4jDaSer6yDrNw4PQxAUCTW8tznBY9BgDHezRwZyL5CD5H9Y2yMwg",
  "key21": "2qt1n6Lc4C2GcC9AjEsXNqKGddUYFczZGXBbjatY11nN5QmiwqPASPuJTnpsu84dQ8duRo7ysrQNZVobXCks8At5",
  "key22": "4SY6QK9pqUEra6MVLrpqsKb2tZEmuon4pdL4koyVGuayGXoYrNEiEGkKpEoSbuuuM5XVXPiGuDWEuxEuypPeFyub",
  "key23": "5QugzpxXtN4mV6FJvoAZAtMgLTjkXJt9jwxcZaxhVkiTT63nvoFSZ3ycqGKKMCgowZSMx4s81JDPxaYRf4ScJ6TD",
  "key24": "EeTAet6f6P76eAMo8jnVn8oBTLbf2M2Ebf9SutHEGwUjfxRjGPwH18c6GRgK6X92KHU19vsPwdpRxAMLnyvVNAC",
  "key25": "59HJqj7iHzsBueuJBWmkcVxb7YkRtF2aDZrFKskLabz56ckaCtiPAaEK5MCEMvWLVbfRryCKSPGHE17PQDkWs4Yk",
  "key26": "58Ut4Qtuqr4q3GCzYGH6Z8yxGch3uvJPHvVYHymU64ExsPYBwPMkMu13KKasABXea7FfZfHypD3Fa2kvF2NQXRkf",
  "key27": "3hfNnPdrpJCZWAQUjR3BZyqPbNhWainLbGaWwJTChXpeegqt5VDTSKNe56TQUcp7b9KpgYzJsEG94FRuxKnGiESQ",
  "key28": "8bHTkGM6eCieLuW7372YeDGwrR2oEzSig4sZwLefaHL1Wy6Qu1wPfpphLMeRdMHQs6wT4aBR5nxniba4F7BJmy1",
  "key29": "v6aJ8Lfc4yLBXL2QmkbR1MatEyiCDHs7csKDQpMUQJioc5KZgXBVvaS1y7CePkPTsmGJgF2w2NJYAP5UodvuNnM",
  "key30": "2Tc6iiSbNJu3xHiGRUXAvJfVVam3jyyzUuci1EKTZREHV4mYXvBrebvSz9TwsGFe26fbdtvnsK5RWfAXFbFYAsmx",
  "key31": "3gYccBFXgRBxYekuVSGg5ZsdUHqSnQ7CKiQeq2vTt9kV5F8QjGK7BjfLqqcYLnujvPDGRYcmkVWEKnapc9nq77CD",
  "key32": "3XXidTCFxPpWxdJ2KZuaLiMsGdVrnPDFxQhLknmJ7hS1gnR255ePoGBLZRq12QPpsq2syNR1SXzCfq8YAQFuPf7p"
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
