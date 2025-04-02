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
    "5AZiHc1Mkpxet2B28xCfsv35ev14SnNcEzTTvroKsN5G5fUYARBrKZ47KUKH1qqhCwQkcpQqwEqjKvMUjMNU7inW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgH56s8rz9X2C3bC9j7CVL1AqEkNJndC9SDAqiYsVc6ZqeVJkQ19xWygwnpg2YST6fJzEZdxd64Aou2B7f1Uxnn",
  "key1": "4zMMdxyQ5XpoRoescdzbGKuxzWcHVQjphcjZXWWhBMMbSads4imxC3xvqi2JUBG9yJMDwFRPa9u6AA1D8GQdjWS7",
  "key2": "5gWGCV4UxTKMbVf9EDxymQ5DBWmgWXf49JMzFdAG1VzJnCkgA9gDPdxa6Kymse65xdqP55Jtc1qD5VVwDf3v8HYh",
  "key3": "4dSvuUQagMQyFMMPQa3mt24NtP4NJaQPE9vPpuKdBCR6QLbEFcBobQfevvRrCgzBc6esutt1YBgL4vB6QWW3gw9r",
  "key4": "4zYRb381xjejTxQ8QpYtVLBBDE5iVyFNWsyfUoAr8SeRtFCRahbjjj2Bhb5yhZCDknH6oW5bRbXmBSnLVh9ejgwn",
  "key5": "5rUkiY212viujbyaKa7gPR1VP3XetLH1DyAwd18k1ezvFj9JSwUZHxGKx2KosS84WretTF72MrLi51UxNVQgkpbU",
  "key6": "5xHcphPhypVaNAMUe41Kix7a5aTKxxfhYry6NaGNazCTPT7wFj3y5Jc6gmKJgffF2wenHUMGWKQDCy3kedaAVk8R",
  "key7": "31SVXkrUSabTzXD2ZRXHtNjWtpbQ3nwyZcb27ZGspj2Y7SUNcG9SKbqFFGbuaajsQUQhcCZC99oG36WVTjoR74zJ",
  "key8": "5MygKaMZsKKUKmGHky1D56GGRkchw36NEQZUxypudqX81UMdt7YWYLuto8Cey9YwwS7wK3yyokcF7orXTYWPeffn",
  "key9": "KCSxm2TUFcuEJNhYT9KDgqVaAExus1yGGE111sbCRkF119S43BTuNPqJVKphQoQedYj4GHL3yBwwy33H3CPYDK8",
  "key10": "JdEDzxyPUTZYtYmBbeEbTzV2mCqJx9yVtDc17xgv9aTPrDeRTjP7SihayXjVqRtDYc7v36PMy1FLy2ZAfWh5nWk",
  "key11": "5vZcjuwZS2YNMYvh5UBBY9BYJ3s1JH66LA5eC4vLA7xHRFiMr7PpvEVZypP7aE8HZjKKr8GG1NLDjjPKcYudWhg1",
  "key12": "4Kn7nWqmQUThckj2UtxKgNxdyjDCPqsxXBom2uJzzDhPP4jecC4PCXYrYXqhBY2JqHwnY6uUgRaTDUpn5iDFi6yq",
  "key13": "c7qzZKALegvZR7TkDMDHNQyuAkptRN1gwNvb9JJEA7R1aMoiRxJuGsPPusWWnKrxnHMsW79cYPmvUvyKRKTnEzk",
  "key14": "44p9Bu3doisgTwZvA7FCug5SCb4p2fYFwBoRTxcwoMBWxCuwu19jWn4hp7PyzGG7C3YqiYxDtgzKHbEXyb6hnQZm",
  "key15": "3HMweUZ75FW5k6WBNSeSqBdh4NhfMnFD8uLTLp12WjJxCFAbgqJjg8w3usyfPNskZUjPfCAKBDRkUtT5QmpN1Gx6",
  "key16": "6796fSCgLSb7Cs1CeP7iAr9DdtHqSnx5bcJ8HGfu4yvwv38WFsKFSxCgfMCDFFkhv2R7i2rPiV4h2Aj5GZq8WqPW",
  "key17": "4ASKgGPQtPXX1r2pUNSY2Go6Ym2eQcfHLUWRi43LWbC2Fdc485Ej2pkRbpHpb69hAb1mZCV6qHPqfU9vDbSBH7jp",
  "key18": "4wn8X6URBZzvf8XjiRgjA9RMREK5pmMHEvALf6m8eBbWBeKzpbYhyJg8k8fnv7QWpFCbN6a2qpzG6u56UMWm9HPG",
  "key19": "2V6kdsAnivGPpk7M7LhSSkFhjQJbShSJAAeTmvLFb5Vkjid2iG4URyCiDMYAT4pzAvS9Hy3HgP9Kk2mfmhpy1sH9",
  "key20": "2uqqV7j28SuFYF6BEZREsYwEEnTMXxNsoETxrd8AhYUZCG7Kx3m3uWqACe9nBfLYLAxodBQ8YTk4KMMaF4JkCnsM",
  "key21": "563UibA2Fr4P9dQY4AnGb5J5VkiGfVCWYify235jrr6q9KbzmYrbR9AbVC67AY3DBVZrPaTu7TgfqHt5Fn7BMAMA",
  "key22": "389aLf9Hkt5U3mfCwaAAfZm5o6qTb28UciKJGVp99dmHgtPGXPE5uw6znJ4ieSeub8BpX6FRXJzjqdjokisDyUNG",
  "key23": "2uzPfuYw4itcG29U6zKuURmgtVygLCxJxS1LScPGGxAiQfwgyLkV9iVZ3HomUE56DDdNkmMjnia1DjZL6xXx2ZVb",
  "key24": "5NBiyuN8Lo42sCJUwvTK4XQdBWwiNPtugTV3aNjEyiKxJz2DZZwuyYT4sbXfGHPPukjtEgyMTxhoHhx65TVvWDgz",
  "key25": "4YEPDNbSKn7s8qE97hXo5xPSTB9aQCpmJLhhad7aNaFzHRQF6qLaL41UMu5bveRhMVBosf2JqTf5C3Wwbq7tQGTP",
  "key26": "LPmyWHZg3LfUk6kd2s7sxUpg7C9L2s9ZYaLeeYaqSnNESiYh6Wm9YbxXThVAwNB7c7qbpqLepS4TFJmuddvHUFa",
  "key27": "ZoyG66SpqJvUvuRUEvkQFgNZ2HN1m8N2ZUZxQh4eEn6dQJWtB5RfcGCKof8ZQRKwdQmh8iJqVSB5MYB6MhihGFX",
  "key28": "3DUFceTvCN8qN19X9Gyaf1c8Un4YkUfMcDnMBNGuVur17pFkMK4dNoSbLr2KMxK5aDP9dGC9HpdebKtSznhn5Gxw",
  "key29": "nsR3xrFu6ssssy6ogriKRYbdo8jqeQdyXytYfLZs39n5E3YGpnPKu8ULx36beSifxLJJHzmmcT9hjVSDEuYZDqF",
  "key30": "2DcZzEoJTgP5dS1FsjzRHeGyGd3EPfEJCCoooUWVifSa61CZv28DQUWotwRX7BXDChNt6qsZ9bwZPNoQLW7vtFfu",
  "key31": "4UHwyVibbNJBuQf5NGLm1waX2ua38Mw6nGakdN5nVByCsNgkXFuLiCzna7YEEoG6sYTbLHvwmD6e6SfHWu8Ey9wQ"
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
