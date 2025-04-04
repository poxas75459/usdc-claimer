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
    "4WrfeW65LEZaG571EuAJ3YtTv7wkBKMEs3nbQ98k5XCY2J9LGZEsbMeM5G3y5kqKfDd2B2rP1kP8peBVXr9rDL96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PzrWQ71zYpAFSwsENDnF9gdNY3BCfkQSMurQs27A2UytygXuvBwKHMT2ckNpNL1jMsVgfe348md3k81b7YRrHN",
  "key1": "4ksSY3cofGpieQeUR2MMVEM8afVf1d58dPvW7xgXEeM875M9nerpkbSQJCz7bJaEUEiiiZHLCdKM9daFxF7YL595",
  "key2": "4iJtY4qFiFz6ZDFrCrpoGbgGHgjPyo8K7Bqhkd8ez3LSd5xUMgYH4g7uvhqvzKnsvCj5C4Mzdm3Bzc76KCqsRgXr",
  "key3": "242hYakzzWFh8r9bq8Vqk8JYiUnkHwayxo6Yy6gZnfKAfZ3QN8sW5CysyLy22zmmuzkHWQqvHmEMs7qyRW8FoVza",
  "key4": "369gw819useL6mbdZ4HKM1jgnwwyc3Qpynka7jwhtZKFEbTMiAnhu6EfFuUQ6oxocvr2zqNVHX5QdeNJMdixbYdH",
  "key5": "3dWm4xUBNaxT7NeveLWaWJ6Y2fSL6Ee4gdcioRXdRdSScm29CtxUoCkvh5yn3mmtcgfZLwNNLqyuCzuZ6MxxsxQx",
  "key6": "7yCfu4McbbT3TQ399UoVnpNohwuifuYk9trcbyjijvZgKAtmpgrpMhC8MfArhWjqdxfcWfk8Noro3H9p52fbRCT",
  "key7": "5GNavW8uKeuzWCMu5D3R5aDVazXmxxmhkDwoJH21bzuuKVnJmLcXReWXRGBzA8nvTSZYWZAFgDxkFHq8Y4bpJDJg",
  "key8": "5zFoWg1vReamRHgZAPZUB21fnE1s7VUBLGDhU9E4UHRJQXZJsUDz3p7JoWVRi7A23nCfj3YxaxJ2NNzaR4A6Rcf6",
  "key9": "5geC6hovqyEHgdiHQQ1kNoGzhMW9d9CJ7Yx9EbUCf6M9CdTnVG2iT8tm9V7ZVXk3KWE2rPxLJLkxxgZ3TNxevgAH",
  "key10": "49f544ifKM4maTgzQ4B9M6gmKp3kM6rY4NrrKrhmC61cor4fkPNP7KbUyXTufUniH9KkiJ3LeAKPvw5T4REak23f",
  "key11": "3EBtug4WdV3f82apo7u23jsXq1aBBzpExRPJwXfvVi6WbcVTZCy1urqf7Byu5gghGqQoC8rEyQ6gbTJRbbMaML2p",
  "key12": "3F7fWymcW1PyeVnwRdBGuz8WRY4ncBLEQdKs87oFVwv9pswmXtAxxL6RRB8fJfyXRgpFazygR15DoLPo7okMTFSv",
  "key13": "4nauoFd9QoCzCQTnMnbZ6XS9Taz3hjefiJ1HAM2HStqXG4kDmrazBXNsJpafyWS1zcCzetba93DUbotjGCCTc9Qp",
  "key14": "isLQGupDXspb3Nsq1UEFkW98aKHRZtfY5MrE1F36JtdJmzeFFFtWrogCRdosPwStuqNKiGzrYMpn7fwrURnFE9z",
  "key15": "R8jJsUT7P2odJMgqwXkf67rspsyBwLisnPGfzE8V6srJfkBCK7guYYExVxXC3CM6zf7MQNrmUrSZfWzRoSHSDF8",
  "key16": "ainSixaLy9rSbeiLyJE37XS28yKNrD4WUAsGjjbfnUL3BM49Jjjn6RSv6kbJ3d5GV6aZD9mTLpjRTKonhJKekyA",
  "key17": "3o3Vo9ygxpuNvMHcxeQfMpKUf1DvZfke4WgRKe5Ww2rQHsGU4YWz5L8KjK35XKT7m3yQ8xjURmz6aXyVhWFciVwc",
  "key18": "4vsu3jniBLReEVYiNuxwDN8iAVGD2m8PEbhWUxyJukiDFLnPKGfFR8xiDCjYcGMUi7n51UBs71rju8PLyAbqdufa",
  "key19": "5TAvRKHX63FDnE3ypWvR3UUAcyAxN9fraS3tBevoURY9bvACpeoBUnjMFMKp7XEMaCjFWYRN8j7rJvkGoNaEtvK2",
  "key20": "T6cNPWEH4xViCHubAqorJcDzzs69F9dzysWABAearqfgGmkeEmUhQWzMp9WTW3vDk1U973JQFukC5BybJMDhRxA",
  "key21": "TPxMEu2nEbBCjWcYjkYdzzR5QWa7yiC1dKFrqxuASr8N24ogJAi3B3tc2ed3TTsCYEtbdouqs6MHX1M54FvHfAb",
  "key22": "4TEwa4fyybrQztnjkNouRdoaekb7eoK32pgoh4D57MvdVcQ4KGuytpGJVM2Ef7vnwF4UPyHgPTTtEkPPYum4BMEo",
  "key23": "5baSkbmBcXStB3SK89BHtJ8FTgUG4JrsPXSgzEYiiiqvGCRajZjZS16GYbBUtzEgcVUffNqUzQBRCXSQV5N9x2Ww",
  "key24": "5GaQcTQbTyN3WSPUhMyyoTy6eVZwKcexbTBGnAC49y4EnASmSsbnPUdSp9t3LsxgrxkSpkEGMgRUano5Nct4koyz"
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
