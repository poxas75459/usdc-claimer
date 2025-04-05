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
    "2VuL21GtABTzt8P4MSe3jajGCXBYuKSmT2qQjzV7UR34meAyUK4sXS6wTdYHfRWwUx8PvaLiL78MWsaksDgmH3tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562P6USkp9ouPUeJEzdNbauWYkNUm3qNrRFrg1D2QhVsYSH15F5SPw8hp4MWgkkJSwLhhgAPYR67i1Ph8gz3a8t8",
  "key1": "5uWXxVkWMnFSembCwecjHVLx4cJDmqZzcnL5o7RdZVLvxtvG589jn6kTs2cLLkDxkAZeFbyPfQtGKqS7EgvyJC2g",
  "key2": "SsQWCwpXvip6W7ZXo3hiDyqBDQ6wzAb3qqdFPBxanvjiCu4RPmb6qvrTKvzpqpDGb4bWoojn6EAL36iKQxtKb91",
  "key3": "zvVmQkyuLCe99FNtJa6zddDyofmzdx2XgPBswpjdJFF2gvovMurEVLRwrkVf9yKZDmmuDNsBHtHMKYqMhcChvEF",
  "key4": "4adJ12Uw7eyvegZYZWPZS9r9QUfrDtVuDZbP5fi1PhD8HkHrZ8yiDdLgqosG8afGgf1TTSb5SH5AwSrDYW1Eovx1",
  "key5": "4jUSGzCWNaoxSUinweDc7waw7EYyTJTV9ipXaG6vd9avfdmmMs7St2nAxuTmrDuHatHTzLGneAmY2cM22FbsrBBe",
  "key6": "2wxKQ1mWcgnRVZrTE37sis1i6NGNeGMFnfoUakrAgt7puWj3a8MiP4yuVLYmrXmzetLG1zWptgBrGz9W5MJtsvfo",
  "key7": "WgckG3j6bvM8azpPzXo8Srqsz26YxayWWpQD4XjzVWcdqe4cyszUUz9iEJM65ESbmbKgRahemtZWQ7bM2j525hK",
  "key8": "2ViXyPX4iEKC1X7vsA41WiJJfQ57WHQsFDrz9WaP43agbrD56DhEhbcb1YCZmmCuRSr5b1eV7HYkPAVxqVbiSRcq",
  "key9": "3KXYhjfQ9cVR16UN43h3DWNbzuSA2Wgh2p76FX1fER9NoAAs9Y6hT8sp2e6TMkGF5CvgTGftRk9qXkFA8tqDKLHm",
  "key10": "5J6Zi12dqCBZnVUA9ZSVMnukWkG7GpNd8UDaFSDqVeqYNnChiF5E33wuWRZBuouR2fSFWwZdq4u6hA1qwR8zjK2H",
  "key11": "3CjYtv21D7va39FukSBUTtnsvsjKnbTGDEUaQdMk9RDfCWBeqngLHQvzmM2jkLp4naBgEJbsKpJvjGJKtqHNDZCq",
  "key12": "5KE196ds1y7r1xzqSn6wnw2EU4cM1y6U5y8STiMRiKvXFcJnp68wBRx2ubc5DpDFrex2aKSZKbvyfXqmNhVkpGeK",
  "key13": "34HvzAZVKjrKPT5PRavzRKuB7yErpVK9FJgqvu6R9YzW37yCzXXZmVXvfiYkPaKGZtNLVpvmwszbWS819x9Abwwc",
  "key14": "3M1PLMFg4CLrwRwkLhzqdnpBCjerBRuomy5mmtJgWbpGZc7x2oRBo2uk4CtqfCNTtgdfSNhkqc9fWzy9BWxxs1yW",
  "key15": "5nPiE38of3WC7QLhqkLYff1f2cCvXeoGEc5uuoMZqEjEeTZ4uHsSzRpY1Kus7w567oXFL8nuVKi2z99aJZJ6DNB",
  "key16": "5LqHDhDWvgBDA3VfumN8hg7nHvSmBGbKS3nBSFY8rUK5RSb9XVyZCs8BgsEBEkJydNxB9XxDQwKVVq94rHszkibF",
  "key17": "5YjobWM3deViPY4PphsmhDkUA4G5s5Z3h8rhwj2odwrhiSFcHzdYVBnXSWMyaawCDkTvgtzJbhnAGuPtsF4KenDr",
  "key18": "gF7TAN2YL3q2GvAP9kqFw9dry3bWoNtSskAzHNRNwevG7wmhbbPi7RaEGXFeuNP7g38LXiE8ZnYbuRUWwT1dupB",
  "key19": "27y1AjUaw8qsQDw25iLgrWx5z2TWDnJCurXCtjwEh6Tp2MFqoHdx7hbURgjHmf52hre7vKQCaRNhS5LUD4d4sbto",
  "key20": "5XwghWmNpkFLF6UvnygKo1U9UgXG5sWjtoUcc282WQ4559aff7J7TD8QZMeD44m2N4prJmL85MmiZRQvBj5GU9N4",
  "key21": "2rdYc2Gm8Z3zYUBN2eHZn7fa4qAkXAYShkBxpmiRcL42Z9pcqEG1arGGUAdumq3nVhDpMjBazxV15wTsLSFkES3S",
  "key22": "oE7YbCxpPHN1DAXcqAduFKLbmSb5GDfC9owh5yHiFbzKY76DWvKMEWa2fsLonMuESUYVjDo41eYPGiK7QL6r1bL",
  "key23": "3Tt6A3NaTm3FQraAQFVhKX1ApG79nvR2yrA7EZvCF6dbVfayfN9q4xzzgDwMbQfDy58CycEhSMPhwwWU3emLjZXk",
  "key24": "3nZ3VPXYMUr7xZFBJsnuQNk1YM7JUUoM9mgmgZvx57sDMgcvxUdyFmtv1aJqjnZ9EMup4BC4sK1gSwDnS3o5qb8y",
  "key25": "fXZh2gpfNB16RtqyrwsGr78r1h5DS7D2GvoDpEQYsLdCPM2BHPs8a1o3WVCLWv87Dm5ByF75EabfFWSeRXcSoUa",
  "key26": "3JUSqLWsPUbTC7nhvemZVZWedd3bizJTba9nkBKRWY5ZRDxBVBvHh6MmdyEYYc6756XZz2Jrd1c3EoVtxE6cfML6",
  "key27": "GQ9jzbEK5YztyWnZJnwETQ16KpFZVSUKRJgLjSrT2kuoZxkewMXm4tp3heEVnUnMmf8D5ac7jRk3ZTPdPx5SwNi",
  "key28": "2JeC4UjyTXE79YR4m2iD2MjLTGgBwgTEXYbZF7AwttdBngrMW851JytEJE5r3xqwnfXdXu5WEXUkyomn19ZzJ6br",
  "key29": "3GnHgZKKiBVVKm7qaw6iM17f71gn76JgjS8UcdW6SZBtNQckhRBFVLvALQNXE35wuyCdFyh5FpkDNZAFtbQM3EB",
  "key30": "3zucHfjAWPhH2bG736fy79Skamshj34nivaGyXLkZncxJfhCYDLZsm3gPYahkYMD1NbDDSQv4VUKbw2eu1vChCqP",
  "key31": "2s7yK8vuZWdkQSxqEmy2KkT7qge2STxNhr8qht7AXSTyBDBwv5qeRqtBj5XepJzV97e8w7DxjBa4q4LmJPkuAYgo",
  "key32": "GGrDpnP12LWNC6NqL1Bhx58EPcJ4j8ZUZwnrnbgb2844uqH8PjQRqFtaApuLLjeuSiDbbbnetCJaA6eEx8tQF5x",
  "key33": "55JmwEWkwUrs4t4krGNQrQpyzFnvnC1BaZtHVWzoC6dEqiZLxNySRwAp1mtrnETVKeVjg5AK8QuKGCaN3JzjADbf",
  "key34": "3w7W3AyG7wcdtyfjGPf6CPn1XVVB2WvakW1wygGJJ5vMp5vncMc8phZdajtixBwpL8s8aTPgfWaEN3SJJiJn1S4k",
  "key35": "2geAmLkDKbxjWddQ7aGeDK69igYxYTvWwaLecx4YUDrpgXeGdYbudge8Hh9GDZtiuv69XjUbvnck38tqGNshEYs1",
  "key36": "2dgpMAP7Bcz14ZVGR2uzLGFR4WfA12k6zhiE4riF35GoLJsrsN7pZChJuC4krU5vgw68G18Smtw4oHEPi5KjzukE",
  "key37": "3b5SFTX6WRJVTYcLrxuuVFFAH7zWU5T83XWfVT29ayWiKjqeWG7P8bgMvXLEkhSRv3d5pcvQ1Dvs2qTpxV1ZaDLs",
  "key38": "5cZcchXn5BWeNtAqGGExWxQUcsBifnk6DvmLv2mEn26XeRRT2MzaNU331K1yLHAjNyFH3gjchdMzDNvQT1Br4edC",
  "key39": "7J8oEsWmzCgWoxoyS8BjHg42WYLja3XkzvEjoFTWpzNd16s1Fu4Vbsf8RABXsdbT2oDMzK3spVmwace6343BA5s"
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
