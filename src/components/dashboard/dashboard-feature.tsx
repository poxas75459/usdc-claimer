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
    "54d9ABqCCFM12uZzjCqhDJFR6XmZMYi1EixWfMeCEdkMhB9fnFJWpWybAQMHmoYTdgZNAeBAqCHy3e5WtQque4Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXXfDbQW5eQbuiWcg2xDqyjvevxWep3QMKrKXfx7JTX2KHYGRiwNSAaYiRDkeyexJS6vVNXkuMsBkwjGpb4dkKy",
  "key1": "3JrrpnBbJUMwZ6774MsEjqFXZXoTHCDuCzhzzS5vKg4PNqVtmjCV8Upz2HYF8T89ED3VjvrvVuVP2UHPZe5RDMqf",
  "key2": "5q6QkHJkGZkXcYmHSpAtD5ej6tUGBqweYPeHF5tWgLbLvhMhYgS3tkWxTdeuPZUaB7ry2FFq52f1PgACWW39asLq",
  "key3": "3pV7yhcZzhL66UBbTyvAHHWBFQFXRSk4cLsmT581iC9YLRf8Xhxbi5tqGmqwhqQgcB6vU3EJQCKMuj3JCnAVffR2",
  "key4": "4uYdacYH8D4eL3QQW6Fzw8Lzykqf6q2m8otXnoKqnzAZP9PAHSDC1r83gEwBgJ5QLsbmh8MHp3any5iNfGaFNrYk",
  "key5": "5Ym7WJRYT8Fgw6tK5HXViqhjzK4mZdmkQiwiUdCjRTAj4x39qs7nrVyW3HYXRukYuJQVKRM851KRs6BFb5jBhiWc",
  "key6": "2pMvfhZa9zWMpZfp5sQh5RKppKakd3TVtH8CyfRPAMAb9u8CiYHQgXeSxqWhyjKMyvybAHZserqUiDCN4MDEVAbV",
  "key7": "fSKACeVa2siWnFNjN2LxcnddY1T8vbB8QUoxUtQpArmevKQ41CewrdB9MApTfAMZF6BhwSRCQVfR9Xcbgqy5x7h",
  "key8": "QtjccegbzvnnRyoVpEu8eNw4gCyY7vaRPQZyMHxqkWiv6eaqvxWAoGNsLmWsLYnnHXsFhgLCPSjLJE6DSURJVkT",
  "key9": "tmYmDKgo1k7ZNtabs796ZvTpTPbPyfnJV4pC5eu69dpvaPszviwQU3apW7mkq35y51hEKXX3nGgcru5NyyJZW8n",
  "key10": "4YDDaWB7ELz95voSkqya1Q57qj7Y9gDoCSYbwF7gRisUGAoVvvzSckK9RAkZpDfBfA89UyX1NXrMFWbH1hvqBUu9",
  "key11": "53PUV3s7ycCKCZykGqsjJ7aJJ8jfYaGHr7i4jk4ZSNZvefWVDFjCHN4N4X8ifX8Zyxh1Xkm55q1k9LrbVnecKT8H",
  "key12": "5X3WMNKrtnUUbg5uAoG1VKH8AyUc4RoxqdvkmBcJHGguxeggtfMbMXVcBzfRM3xCWDoWfZjakamH58ptN4pQwwmQ",
  "key13": "5SrGdBSqYbX8zqX4TCh49FBzweP9XtNdobXM5ioSBCq228X2KsX4jZKXRnSVtDRcWTVgNNYBC3Eg84eYcjVFd1HY",
  "key14": "43XCnDFwF7dXyG58ZzqQPTjWxTZ9hj6fMZ4RxhWpGPyGmePqWRsXpEw1ja88UWLBaDnYLkEZcCefPA7zWBV3SKVC",
  "key15": "3gXiVJYyhcqbE9ndrHr2aFWshiXwTk3qShBpapayByJM3xhzo4CXresWTfUchhjeoHNz239ykkGWTWKQ7sYXgrqh",
  "key16": "5LoE3LSFHnkrbFTwNWsvEbqnUTUpfgNTgp3Xa2S6nR8iuDfeueE91wU6NThGA7wiKqFnfZfCSWQj7wawuapkqTYW",
  "key17": "YNM7ymqxr1ERaAcNnarEu4temTbsHiwN6xujCtqGUXaZ3ub2zRMzkg7jt5SJbwJks9xt8iLj8jE5B9rKy7zfGk6",
  "key18": "2cWbCMin7wT2tygLHJr2DVEWdaZomd2eR9WVEvY3oC3BQoVHYPUVh5gBzhs77UZVpx7ynKDLgdxvmFYzkEwMZcTT",
  "key19": "5g1bq4eKvazL4f1YswvPWGbMRJa5KUYCRr5uYkVhMJBAgoUwvyvuayngxCQ1xLojnuhyp9TxMXEaewca5WbyJ9h5",
  "key20": "uW5N1jydhcmAnZ2jXEcuk23oxTLMLzRTHmquXxd2KTJGkVdX19omLzKphCSThakKaykAXbtRuLigiCw6BXSzLAZ",
  "key21": "1ujUU8Q479XtWt8GeQn5h9fHukzvLDgaSqrJuz8fzWP4j85deXzpYFqFZg5a1bjUo6k1e3ACGyJ6UUhvYirx43C",
  "key22": "42BEShZZWSaihvkm4ECYuetze3T4nm59VikExLc5RGandeDQJYSRm2BsDEmR4m4DofuMzpHtrb7TGkRyrWfEKKNR",
  "key23": "4STcVpXTbVKaj3mGyh1tebxcNrsLiHjvGoiyq4D3E8idMvRXex6ntLwZoCzkUh3STDfFiXCjpjxGeZc4ZSQgyvKp",
  "key24": "4gwX63gfj6g6A7PsVZVy2syqqaZeNY7PXFonjHbuqAcmRRwHUU8C9BcZL84Ep2jVaPi3a5kbn429gmmixtxQgSBE",
  "key25": "2TgqgWUdGu5h5YhQc5EXjtEmDW3jMJB9yUrojE5vD8B5YEcvvzLajESE131asDkds3XgfWFs7EYEasfpdMxyo6QQ",
  "key26": "3CkRBtqu6VUfty2SLjRBfF8jVW8MtjnxoUi4i9RNnBuVCx464sBwkuybHTZvRUfgXqMQTgNitiHbnRRLAzHJMHZN",
  "key27": "5yh2NErHv6FRaeuVXfiDXSkbfJ4oMrJ6hW2SBva4VmU5i1ytYuRDxKt1XxwYqvKTgjNVM4LH97VYSWdfUGHdEaU9",
  "key28": "5d2E6vBK43esrQWzfzDt64x8mwYr2uC3mvMzZTYdQgRs6Fvj6uSWBAshFxUAqhq9jfBanEFdjXzVrMfBf4cYTaUf",
  "key29": "YA9WHmXMXxiRmTZMQKk5V3K4RF5XUrQnenEcxz7ycxM6R65G3PWBDBZZTwN4jHxjcmHKao3rDs3c3oQSupgr8DD",
  "key30": "v2e5hfT4z4tVMX5eGYXkm8RR5sADN5vtf8L5HBZVYy9fAGDFvsCzzNRwyA8g3Cyw5x9EZ5Zvni2rbcWzRWeQyEq",
  "key31": "3t8dyeKjwVGU74QVF87aALYo8SVA9FSPwz67CFTzEXGsivqBY8vVRNAsF1G88zQYxrVUMxCP4fFT45snhJhg8wPz",
  "key32": "52GvnQqKs4rRF9KUnNaX8QBQan4MS1tPyVzsKZTgtrjUXy8tawJrwR5hhYS9NVQfcP9wkrTkuGmQgBKu3XKqfSMn"
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
