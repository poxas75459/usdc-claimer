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
    "6wvaS9otufZhcpJcBp66ghNMQPNZjEVAz1aeZES6atNkLc87gkWHBEYAWyS82K6RWei6mHYW5SmsuFhnTvLUeYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBpdXfUfXvffZ3b3uW2nkXHYquuQSifAb117HZ1SeecPY7YeuN9XeYpWRfurq4cFhq7D5mMYYNPJ7YhhaEaKncK",
  "key1": "26AuWoTcZWsBMmv2RLSgwmtYvY4dewm6tpvuMAShsdnQHUxhPewcyZCfSzKeTgTJNAQ6MgdEZS1qfEePyo1ty5DD",
  "key2": "3mAVjHtPwajdZS3KBSWjRWtScqa6zKX7yr5uRPeBVuGwTwJ6SivAgQkUSnkFZxip9xHpBhgxe43BLkutUQ1eqi8V",
  "key3": "T9xJ2BPqMJs1zEHMZxmu1JSPvBKHgqXw4v3k7y6Q6L9cbhu4jjFpGFR2z5LyeFG231onu81GA567ixJiRV32g6D",
  "key4": "28vdE1yYJfCr7o1GGevphSiULNjvHkPds6iz3ui5khiMUqtPefpRGQNcJgRnZqosUuCrog6M2b7hJ56A8ZXeCXsw",
  "key5": "kvtYMDyPV7EsjyGQsxGEx3HYYgX8B2y38vLQv6xfCzx1QSnHmpioqgdF4Ho7JDy3HrPmpWg6v19eZnofrQsisL3",
  "key6": "3oktDoCbXThvyTapfhbS6iJ2H5t4XpcJGv5f3aqGZp8T5L9AwqDNLMvs6UhvcWCDA6GcVQ6GH8EViB9YwbEgNbaN",
  "key7": "4uMiccTaZBV93kWsuE38t1KSmycX7UpHabRAVjsgANhfqxConBDeSHYUdbbugKQccvGUHwBFHjhXeFGVpbjZqhxM",
  "key8": "WtQBezjFsBRq1WChK6xYwzWHZYA8mt8JFWQs6bsnJSY3jJYqodnBgs5SokjnJWP5Rde4cmQdjN7gxLtYSGLVg4n",
  "key9": "51zUJYovmfMfWrpg9RZvwsqWM4tAGeyA6og1zKY817jXQkfAkwwVWoii84aeX41tvchP17SG5jUKLX9N6MFq4VP1",
  "key10": "5iJip77Ltd4jULyesL671VYhVQhKd1Q79n8SmLto1BhtTTwQLMXa6ar5ZkQiyRMzsS1CT19uMe4B8UopzUryGLHZ",
  "key11": "4aZyTNkwAbMLwLjBroXoRzaoH1MwU3UNoz7ftnkiK7i8sFgAm6a4hWKn9Pmk1wshCXsoKRbBmeAejm5q7kibetzq",
  "key12": "2BmtVTrhHQA97tgA6S6zQdMxBQEk6D887f1PXhoFi5bGeKRF2TA1sYeKLqa2erSur3XgVMnd4by3XHUWaqgYco1d",
  "key13": "4FipUL7S8jGX6LQftmTr4N4u3jWvwHBcPVpaYskfnACkLFBYPH4QiWi9xAsJDgyGn75uQvHg626aY5GrAazM5Psj",
  "key14": "4hZ8TcbAg3UneJMmSKQ8Hfs2yJAceQEYCX63mzagRj4frs89raTDW9vbNmXj74GHq4eozttYxiUYzCR8tpDP3ULK",
  "key15": "WGT1cqeWBCGGbM4fsADfeyAyHKj2M3A13bjwve72PaGYymhn3rpoW5bnUQsfh6y72uNYy7QqXhUriDWYjNYJPog",
  "key16": "25vbNXmyiQ3jamhaM3PU4EzuXxsfypVKQWUKL73Fw8VwJVnv168zw6c9r421nLhvo8auJkQHyB5u8pMfceSgDUxC",
  "key17": "dp1vXP9YoZgAbv7XGjuC7UU4he7oV41c6Wt4qMjV8LRcWePDtvPezTGR2zRgbFPku8kxg5s3GjdtH3XkM1KbKTT",
  "key18": "4R3tYtmWhkpsjTfYU3h37cUT1VXAEPbU86bdssEGYqZWYJvP7nqeAS7k5ySkAHJ1zuwmjGY8JnYs4DETJQjqzPmK",
  "key19": "5dTgd6TfxEAFEjYzUXUA1Kf5vKB4VFey6jcCEVpoju9HsyyBrJdesgf8FfZqdZ2opsGhgzwveU21ZT9ErxJP3B7o",
  "key20": "3ddkKFxQ4dJFSSi3EQ8k9AS8pqMdibVEdDNp3H3jvbPAbJrmVJh7fDNVQ3yYU6KXGF9XEN1YddWLAYTSVc2AJBBC",
  "key21": "5PCNox1uVcFRpbqwkqyrU1hNrE1gJMSC7wv5xm59srLRtith6SfbjGsj8ieVJLfUGggBtMF9khPvimN14mDexgbw",
  "key22": "63ri6CzsS4zDF18u5q4s9BpdMSo3bePxcXcgvsj62PRzkZCtJq86dBNzQ6bmtH6msN11JRv1x3ZUDbEzsCc5jcDB",
  "key23": "4UiNowa2sCgLpui7wtUriLSKcPGQmndCwfp5TvEAgkY3rUUkewhR3XvBHAmaqKWGQmeS6QEUwKsC6k1g3AjGydnC",
  "key24": "224PP7bYtSkBgdd7EbeN5zWjW5EzLwZRDx36GpxH9np7QLu46QxuNrBs7kd7Sumd17j1x7MVQNEaQxEC82GQLsDn",
  "key25": "fRR4Szzk4U1oJ7wDJhEpRiCxtsYv4Dpe1wEPpJW3uPSnchxnp9S4pnTvWAHhtxfWo7KCReAs62u5XhYSgm8JJdS",
  "key26": "rKFLeYuGsbyK6hjLNM12h3Bvy9jKQuKbbwuosvFVLXArravNDEUCzYggDGJcERyYGw5UscYGjzEXEhpuNzJyyLe",
  "key27": "2Utm4WnXmkWcW7USzVvt52exCAZS1n6yZMLecRwbrxJm9DN6UFURBaZNUrJCCpa4uBM6whD9rD36y2gHUoJPLS1c",
  "key28": "2Td8ekd1obCseoBq4XdckpLG7ZYvavRg1QbvjrcAiaLZzFizc6absxyFew4PLoXRhREyjPvTGddxi5BbDpSGH8Z6",
  "key29": "2Tv2qRKpcENsFYoWSpKPe78uZegJ9CgoZr1YJc1yXuEG4VPLksqcmqxQB1LShZkAVFyVaG8o762Exdrbvtju7mSJ",
  "key30": "4Ur5ckrVsbBEoggCJbDWk3SW7U3pznYf3fe3B9yKUDKb4MFRNBP4Dw6hzU4ETpGJNQhUZ9p57tkPjx5YmyB78viX",
  "key31": "5jYxuXTNPYxVjohyxXjELKNXroNpXXGXTwoC6Rn9yCmoDnAKn1iSNutjSh8LAbjjPoK97EfTmtPeMZNYsPs8fRfC",
  "key32": "4wSyjRFfDQx7u2KYQYA2yy7nc1bowczAhReRiaBCsQoDP8Z3TqbrwhX1voL7moDyCfMCY13ygPSDSRjYnYxwc3BJ",
  "key33": "5UPbELT519dVhe9FcdBFzGws4RXbj8GvwdsPYsutfTzmCXtppGEojUMQMFBx6AZFqjcVrLPvK77AHVRaxcJaKcXZ"
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
