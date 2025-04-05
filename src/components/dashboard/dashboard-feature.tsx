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
    "VAUi1Ts1UXBuZDM8uqvTzXpRGt4coQSpHfyoFWzGBxm5ihmTKCdowBXXWF48o5nhSmxyKwsrH3XkyCqciE5Jq64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXEGwLpkQtzyL76jGbbDu5FUzDLYFdXR1xVvqbFunQBB8w31Je9QdewXGggQoYMEnAc53NjhWSMhe3XNn4RevAe",
  "key1": "3MZH1EnpN5Xaq2qJBj4BqHiaCqy5QXKM8zFfFcHdMKZLmFJWpeCTbjSRRiRFVaa7Zs73sg8uTZK2QiVT9H8xn3bb",
  "key2": "2ASb6NfjYWYoBRJ91sHvyzU82et5fszq2Hki2wTL3pNgWBQJq7NTvqkoc7bJxaYqgpGsJ4eckysnqLK7X6F7fBuj",
  "key3": "4S1GQuuRzbsYhmWnPbmNd8Y1py5pR6Ho5zDbLXFfawS38wTLabWcMcdGzQzXsXeHYF2kjCuPgAoU5qsiqvC1ApVU",
  "key4": "48EYqRY3jwz6kMV6HJD7K4EjWbuQTeyMNp2C43npyy7nYGEwMr1nFvWJw6UNDd4SqeVwxb9hYWCCP9egTkPSJXRg",
  "key5": "3xag6aoDeGBi4xNpGLiP987MD3FHaU3sAiZAAuo3MrBhGYrgh7LTdkSyfodNMtgTjAQihLWk5cFzs4rpBaiRSW6c",
  "key6": "5WHf2S3xtSH1k1aNgRGVWjfwsj5cyHu2BsEtRaxZ92N5j2Gf48NRAbHjm9Je3Gt6BGVyq2Y6Met2ux1CxrUJmHTg",
  "key7": "2JEHu1cwoNn6HuL2dkvPC9FRXcWv6t4FswrNZ9HLsbKBYivHbTzuthdV65aPMMkyrHf7no79q18yHqnFF9gVrM2E",
  "key8": "4UV6yYfPnTHrX82RsXxwfnEB34PHW8RdR7Gs47DxGviZJWVB6bH9krYmU7gRpbrn2GkraSE2fQHGuKQPhUb8GbGe",
  "key9": "5CQhSGrvgEMqW9MYwehbaNj19tPaxCfnBeDP37kNecwVny6y8Hu4jLUaiMjjUCy3RENqqocUsML6XUFMARVAx8WR",
  "key10": "2Zvv86hbp81WuoD26nxQHLfdmMoMju3SeTnWyFgq6WLa7bgvLHg8MMNZw95VyHdJCdoV2Ur9BozJhL8w52tjY2B7",
  "key11": "4nn86nL5rjgFcK6ksyxGrx1Mq6R2vKPZnUEZhCv119bqpmUP9yNJhitM4EXhAB1fjhBMn9EuqEcVugQ2YR8cvNsB",
  "key12": "3aYGnKcmfVHk212rVPZBDGwedUVwwpq6ipCPk1CtBHmF7PTdMCewA4KiNUXAZAqr947nk8NuxGkZEHx7TGHMND5k",
  "key13": "2MhaqMzAyJjbUsh8oCXiUTQnio911V8u1MgoPBPtpkVGAv99iekQd28p1k5uSkV1J5dsdEDUJzUW7tToLLvYLN9a",
  "key14": "2S3VKbYUAv1EdrFhS5Zfo39nPfmhKNSLjJ3bM8F3UHG8hWVpkSJkGwCgjw69rAXhLBcWNdjdoRp6YCvVz4LiC8Bs",
  "key15": "2a67wEjF39mTUcpViUUhCLGAj9MXgwRokbQPk9cmbRezKjFjJQS1jK6AQvcy3Uyk4p1TFGHdxseiPWiRk1hDZJgc",
  "key16": "5Ph4bUYJHpXBQLe7ErKowecK1WnWcAry4dQj8dbjeoj5ryhpvjLRpT28qBkiaV8yWCio2QmQZhN34AynjwzSpquy",
  "key17": "3hTbe14AM8ULjKqZBYEbo1NcpAYCuaLd2sg6XQVTUQo7sd8DeNVKidLwppnLgsfJnnftufe2hXTsWdn7Diutr3Qo",
  "key18": "Yt2jxppFyVrNwZVJBpmScSxKjs4WsBesX8xLgPYcFtuA96ak9TrTjQhBqBcpL4cwSrK5r1WkN6T3qVUKwXbtoat",
  "key19": "4BC6ogfiMbqjF2zoQSLTEDAfsrX6y3VQ2F88pQA2c58rw74qwLtgVKX1jjBNEaRrJ9R6Cnx7RBoPAhPKg6L3jYh7",
  "key20": "55SH8Toy8kra36wVqZgfNKTjfTndwYRKbXAae1fv8BBM9Kw1qsh8qsVXjV1FrKEmDeAnwe41Evdy6u1t3X4CQBTg",
  "key21": "5E8kArsrgowiq8vZEE2xSQdL2Eem1KUwryRteMsYB6Wym2c1cv6cWFFxAHk6wkorz1pADaK3V783ZmZ5pk31Z8rY",
  "key22": "3aHMxnoMETAUA333jd6UUL2v38qFuJgiJQXF9pyWdaTxhiwb46t9WW7479y9MiBHtsEJTR5VZt2fq7uMKmDL5Uf5",
  "key23": "541K8gTqKywRw8vQUM1yw5zdw43LChJmUNyt48e3p47UoFYPuMxXurMwemwrZZ9HbbjZvUDP6ehfQsA6mJZVKphU",
  "key24": "2GKgpRNLfqVCNnRePCe1n42JyDwhXFLCNdQiFdGqNgSbYA1JFHRrWyJd2nDcXuWcXtyboWzvDv72aVdCWuAJvy7o",
  "key25": "36fmuwvAJvRGYW7UhEznwNtRK2sUc3zSw1dkdyF6ekpwfRAMKjfcsetJv5tKjthYEuGVBs5ApKx81m7J4YT8dfJ3",
  "key26": "hbnxLK9hh4TNERhEHPcZM4xk54qfdLncxE5vExgP6Jwz7U747utDsjKYQ3pU7p1SuqvhRZ3j1jycVZUrdEzhDVN",
  "key27": "5XFmUdvz8jLutsVpFp1r92prYYKHQ6JSPJn8wfJ1aKQEg1Q1MkskmdtcypSfeMHywREABxEAeYKfKUdt3GkMs468",
  "key28": "4VKW5eyneyBQKMFPpzQ2vEE8z9vXTgd4wYxejtcXytoCFuVs9FQNrxxDH5ruWP7H1PXixmSFVUQGkA2yLeCko2bm"
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
