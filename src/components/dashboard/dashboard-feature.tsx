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
    "5QoNqGns7jSc8MV887oHcUJfRsg4zv2riPLG5dopPiH2oGVjp2EQHTGQqLhYEptk62eZJJXN72hxRhcT1ysi4AUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYsYqRwJJis3sTkB886MeXH4DR7VAdtdsiBa8hUjfFddKRmdrFdGqF49AT2EPE7AtpaoDUZs2ny5GB3u3RSRHCY",
  "key1": "5NdhjmoAuGPApEVrqkTEYL3LGMRQs7zLP5XxSAyphfD2fWGY6AJDCyyFB6Hv4r3zsgvi6917uMtqnJ4UvbGdfFgi",
  "key2": "bi5haDHGeTdaLcnWoitTaqVJMJL5gug5tw8PdPXbgQmqa2LX22DX3fJvDd34Y8Quao6CqKbvekiP3oJN3bLwvyB",
  "key3": "4nUnv3rJVgjnr5xziJQEbJrDaxpafJ7gHmS1sR9qfRUQkPZf64j8bUgHM7PxvFEJqYqjv4e5UpwY3W3CLHq8KJwH",
  "key4": "4zv18E21eYUUpNb1ioniqyxDYcKXchXkPLT5k6aqCr5K3RHtZ5eBYLGYY16enbg9UP3XkwWckaYBW1QxLt4rqnk6",
  "key5": "4sYQU2pzq4SHr2gnAu3Mef9ycYwyuteYiMtB3uKRXypNYfQ2bfSe1mJrb7rhjQ2QCA4pqRVN5xkkLtyFJXt333vA",
  "key6": "4mNt5HCKpGW1SnrkJgMXQC7BsRp1m7vZus9F42a4rEZrLrMvekJztCtYxpzcMfTZ1ayXki959eC2iv4wyYyzwtBv",
  "key7": "32yuWbA31JC8MSoC6CwiMXMnWJbEoPpwSHshfGkVGUvjc1VED7L7cEN28WyLckNxA7JkaKZZtz2aKfc3e8tYhxZ7",
  "key8": "WH3LPhFrfZH3AFRQL44vR6j85ePBRK5YkPipvyBg3HFjKyM4XApth493SBb6fUzLZwsBZYsCPxEzMVsMmvxVuv4",
  "key9": "5FwVJG9hEoiydn2p1btiKM3pxNHXP5Cr8BQzskVksjosfBUZ66jMkvsfGZgtiX5Y9UAS9CXuvfsV9TrzXh7HMzV7",
  "key10": "uZ8jMYdGbVN1pjLoBxQwkfeGUwQHgWUx54hgijVcwhYWStn1KHF9NuYbgqKwbsLVNj43Rbg8jRwkPtNJYP8ptEP",
  "key11": "5iG1mYnorjvL5d9U9c1EXFTgbnmngJiLmK8r8DEgHhiNy9kGXW7FyCqrSmLv2fhpNyNzw8kTdrSDR8moQGyxfxZ3",
  "key12": "4C3VBmuXv8FBVenaoJwoULVRWxKRNJYfdSTLzHbb64uSMTmW7oU6SmRgFB4vB2X5vK1LYerjxGbpMx7pq5wRQadv",
  "key13": "5xDQ7UQBcJt2hCKuNR6DahQLxop3JtBUqFhoQS8qXDyUC54mAsjMVq7qvY4DC3E4SVQqEyrDitzCUQfZhSABnQYf",
  "key14": "5aFfCu9ptsTnTmZ1oygT6aiaDxnDfiH3xCTDMfGuKGTzVSxEiZhup73L7ydwEzY6pvNbcdaAAZSpzSrrnfGVitTh",
  "key15": "5mTQh8wunWS8EgNunGK3UTPtfDX93LJBwmMs65V566JhRm16Viw1wpmP9VPu7BqJpLSoJWapiHUfzmYypyH7cAbU",
  "key16": "TSM5oqaYae6HcJBp92xdKeb6838qPLSMk7HAsWtKjnCjP57BV3Rw4ZTbGeioKghXfzWVywunS3VCMUnqM2urZA3",
  "key17": "4BfXaj4fVAsMeJ99tmX8V462k3jpsUPdXMuKoXo6dG89JpTMERHy7epZocwdJHCPk67zQf79QrabLe3DQPJHwWXA",
  "key18": "4xrkgQUTMfHKWKcfWp4cC9GdVAT2QWVa4M5LTox1uR52sjcEjmz7JxvsK3WfrKVnRrSLQcPHJLijrDxUqTRQjnaV",
  "key19": "4BHBRvw5SyRvXS2g1bE8TKnkCaiJo1PzUjpyFFPiQ1XHpihqmwrPE21mUqzVbEobtmUcidtXsDczfvEMuXqMf6Lg",
  "key20": "66DtdhyXbVv1PWqtB7vYtZsEP6dyuq1tMhes6PWvKecPMhVyu63BsdxqsfjVifJP3adxn9U3TK6X15Eyuxhz3Fz7",
  "key21": "4KjmqKN3KQv4UH5bEEDVEgjRx1tdV5Hzc87j543J7SfCT4EarwhkPAQWrVm997A6LdVvegh1RhuVxYs83m5hig3o",
  "key22": "56VzLgksdyL1xjVDQ7JF7p3kTiLWKYhL5Vpo3o83JiuCxxm6wP24LyzgyfC8QqXVNkhXz5CS5kB5VSsaXKXQb1tp",
  "key23": "GMVbVMnm6ukjgptd531kFrftVLXT9u9owbKQS2K1dGNy1Nn7cH1TosfPznytX8kjZQSDCXZiej6wrA3ry3WtuWA",
  "key24": "4QuQ4xGQdx9Rr4km4HRdkjLo36UF3kc6mwSvk4BUKtXvmij2kdr329oYe9Un8znsoXBFrV6rMd8sTdC3vUwgcaAu",
  "key25": "PRK8FrGxD7F4tnLr5qEQaVREdfuZQZDaPQYSFGPj45yG4vLNVvEdtsL86567XAfvUohxtPUiLvh9nMyp6tEgpim",
  "key26": "F2HcSULL3Pr9KpsRj6dZ3S25TFTQuBCJG5vAAjYfRLnvqi6n3FnhE3BZUihY9nqUiptDc5CxfJKjXpsBAdz3b9Z",
  "key27": "wjPzV1pvnm89JFPGse3htH2unR1jtWBYucrcWfKjvzG461kHJimDULQ4HieJHbKm9PGcW1DDsUTj82mb7Rsy8M7",
  "key28": "23vaYPbw17bCzuFUZW4XtNu2ExtLnkpUhwrHtcnhyhEnbSUhgNeCbAa8MkPigYJ7PAvpu8NGjFGjMd65LL6qyYxx",
  "key29": "57XuSbM35bujp8TdxeVgyCSgKckXzZ8bcd6uFWcLiWWUiSe2imjhPWDybahNeQZsWHitv1RGxRH3o3yP2a6YZkYn",
  "key30": "HgBQknRRET4MjDeoRsPEYRPuC7aiEEXqEdvwMR4NyqJZZ75vUnx3BiAqxd38KwJXYpPZezrErY8sdUu2w1BUwE4",
  "key31": "2MWDeZwms6z2k14gZaRDBScMouEFCVbQnFob9VVLZz9jgxJzkXvXu95Sh9ghHnEjnTVpaLD1SMtjnhoWhiNBYd9p",
  "key32": "21pwq1rhyWysSUZKV6PTd4LPxH45dkL9fos9RviK5pzouaKCCXUyyuyFi2pzvxY4qWKYYv4mUyPE1rr5yXuRgdgk",
  "key33": "LH8gdSU9D2B4SqYHSmMAhdHQuaejt15C4Hjw6Bq59KL4WFCmKdLDz68BSBkw8UFCgSjwhdi7MzmuudEVg7n8sdw",
  "key34": "4FTJGcCQSnHgbRyNLauvoEKBKBhzCXWH45eWgEW1Yvkf8AJnYLaVrNou3A4B7dTHUdqE6kufrAYQHhNXEmqiV6dB",
  "key35": "4Luu2T2spjobjQxoB5sAmrYFNbJrF2s3cDRcCxKtyUB9FXqGWy8H4FFLGGXfLH9yE23qmDuFq6Yiy4c5e4PGYfYS"
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
