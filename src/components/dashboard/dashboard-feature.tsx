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
    "3C7j27hhddNXgxwYKUsxhHnfVLqkphbVg9Nd87jESzXnuVVNsE8HLLaWmtd7fSpqs8Cap3RANrZC4NcnB9bCJaZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WE6qSMCGqDwY8LTeuR359zdMaRPxnMfZVxSniNsAvHLZb5hjGmJMgrC6VCcp9NUJtodrgCJwwhQ2Byp4R84uX5",
  "key1": "3xwPWjru6tJaLL4VbsGHEr31iDzHa7pHcViLjqUpef9m2nDSS2Niyx5uSKwnzBwjzT7mJ7Lzs97zNGAmYejQba2W",
  "key2": "39rzb7sbifJBQoWAKSmmBfVs6Hxdf7HFCAAkRNsZkgtBAvK5cBHG5ZuVMDLBFAAouYshSmuzk4naLWjcTqZRuvZ9",
  "key3": "4BULNtcQEYWGdAELgzRwXFBsF5SLsdhJpNLM44qVAi4LuuLJiU9LEVhW5SAn9vMs7B46xj2JUYs2enxhdoHVccV2",
  "key4": "cNrjyDU2giTbqy348WPxZNhtikskmupRAmYiMAetDo8sxyvqaiqdu4sys6ffG8cqbmvkdkJDW9jVEPAQPJ49Zij",
  "key5": "KhzYdUWqnWYS6wLT3pNJQ8kt1e6vEEgj1RubtLhgHCuQwDpvmoMd7vbLN1U9v4dwx2e9xU2nhjK9ER6Kv9pDYyR",
  "key6": "4v7bibrnWKWWr8T7dX5oW9qT3FNaFqiJxbsxYmTLn4daJVc9eBuFUs9Eqzku3fGEedHLT7rBF9A8aexqv49igDRQ",
  "key7": "4jHyuCndCifRtPk9Xn2Bk1kZNuoiLmYT7SucYidgLtrPxmEoWtHPkSK9yqmukDaZBJ4chBj7cBRUxbi2q7xpRuGc",
  "key8": "3DsC6tjuJdy12d2nEWK7Tg9b4WBghSwLuRhKrnTwVyPafkV5egtd6azS3Qu8m6DnrRLvbnLucT8sVCej5S5X4b5V",
  "key9": "3QR9G3KVQWBTGfJXXiQCprn33zZAkMSV3gnXTBKcV1FZEEN8eSg8RhsFysCK1eovtNtbAzZfeqT6T5ghFMRypLqN",
  "key10": "4xe42Np52nnfay415wrAwL9QW9u5mCbiRL9PGH5zE4b3ooFspGrnxN8YFCGs7udbBoDF5Jm8FiR3uCjFjnfvaD6i",
  "key11": "27iXhNCyg5axyVihGiGLwnN6Wwfv9KfUK9KQyoyt4ELCDfV5kRJGunsBf2ZAxNe3Q2xwnmmzepzDuPeFxvwcvpEG",
  "key12": "596H6diPXWLchwsVxLmiY8S6P9H6CUTHu76LFmQayzdKBbQxvL5j1VzCUuSULHD4CuvQdzuXgjVpkJL8sB8HaKJB",
  "key13": "2EmhFwjkMndBSJNBFFPfpV76z7aXRafC5paX58D47Z1jdyzDnivwoj4YeNsfHGLsSm4MG188xAjP6csgoVEjf7n2",
  "key14": "4tQK5YDBudw9mb8Gsh1XXtDbimaGczSvtRk7jNaKzg9oz1q1FQuZpyhgrdn6aHwHnAdm9sYAqx4okkKzk6TMRCFz",
  "key15": "2NgqrLJ8GZ7RXbr4MNikEWLWhLixwxDLnxxoKt6FfW9pjdwKehYysW9woYRJ8ZQFpWvDwzCAdwdbCzSDf9nQBhon",
  "key16": "Mzqoo3wGWHy5rJnBo2x4WhyPJCYTziix7FcdRAV4Pdm19AHSDNP7xL2boW2ZE1CP25vsG69hMxwTShRaYCrQA2E",
  "key17": "35rUfAHjNCCSeE7Swnf4o6bpuJQEPGtB3hU2aHxYdiwwT2srkarZTRKwMxug37WNgK6xoCUSbKjzAomrmDH9JNUe",
  "key18": "2s6EppvpzctEPjm1JfrFFpP2cpgobDzGvJ1yb7Qbk6JMSFKBPLV8jtnvTZJzMfN33E9NqqJQEsjEswbTjdW5n8LX",
  "key19": "4WSLx1ypCsnaEwUg46UbC3QJPuFHQT8YLcYAPFXGFyrQKVCzmtoowTvtnzFqcybMvtH52B46qMWXKt1wHfrCS6kx",
  "key20": "3eRJvKqy58G923Mv9dAxxEvbY7AJuty4qvEYztPRXmaPbFWLLAN9sSekcAkV6vH6PSyjV7K4KEdVHVwaWfYh5KL8",
  "key21": "4nknZGGYzqJR7aEQ4RLX5ZFEKuJPbbEWexZ5NjmWMCaxzUGzYz6TCab54DH3MYKqBQgmiyEbVkVo4cLCnSs3c3yx",
  "key22": "5BUUaBdW54zTtQT4SdLr5oqtA7x1RUb3qBqm2SwnfUXtVyiQgbqZXp6NdmAirinR2njsnaJM9ogJnfgBazx5iphc",
  "key23": "3FzsaPedwFqPLvK3u4zFZPLHUV6cZDD3Bb5xYfn6dp7rxxEeF1TRycnnmaF3cjxPgQBpSJMwxQPbMmbqKKBxE98n",
  "key24": "5mGrcB6ErEph7MLxfBUFgZMAFu41nWvMqDv3VsV7K2GktDpUZm6j9D9EfvxAN4qomf7v136Hhsw5Zw7nHr37c5eu",
  "key25": "GhcUi9c5E5CoZndrWNefJSgtJ3uej5j834DyikXQ5qChsYqwnmURyLmaD8XHFhAtEkodHu1A2snNhd7w7FFXvFT",
  "key26": "42fzGqKfkQrGKKg5ZNxAnu2gejif1ypgYJJio2LTHF3mmkk5DZEKcnHKFnaVvAdc9pAQMQf38jeL8yeutjrY24d6",
  "key27": "5h4S2N1J4AEZ9nUCJ9Zs1Lgg9ebhKJcYPjrg6iF1gBN4nWG9yj2du2aXA33agfjayYJFhUmdUDg61nEUM45MUFxb",
  "key28": "2nkNBUxNJqpcftTLNyuAs9cqSaY5uBqHhBdwYFjoT1qjHWWaDfGz4s6AgS5S4bMmkNyTUakTYFUfa8w3hhaiSYj9",
  "key29": "5a5hsBPZjTxWpJZV6WuyfXiDsPSWvFjnQ3DnrZMa3nYt8s9JszXwLP1Zdxti4Kf28ink2Px7WS8XvmmeFvENWWsL",
  "key30": "5yq5S81pUhri28fdLhfJNbmB8kFmsR65avdkTZhEQ9Dr3ke9GaF4aYemj12QLpU3FoCvmE2FnHeRamVXbzG3QNAX",
  "key31": "JGwRyNgcqiKb15gfFTrRxMn5QuzmffF85Qfi83oqiSch9UUumG6bpd8DMpGNUqss1nGSqMwSJD7A7DBi5L6XEHq",
  "key32": "2rTYGNFKTgExK6tsPg7e3ywbDBxtdqHp33WPZx4r5UpBw2QcPmqUwHgMsfQXgthpCrxfmxq6y73YL4cuxyXQTpT9",
  "key33": "4tK19taFAu8C9JKvGvGRrz9FhKKHqNLZ6657Hh9HknLvPzyhtL2Ke5UPxaHkvJtbqJSRj7jmvNxyz85ZJECe6YfK",
  "key34": "2ApMawzkR6EVKAVtpELB2ajnU9qCs1EUbFSjc99LpgTSv7xNZbD6Bk2EqDR17u4qkd4MmaBrfBUfCCSqzJdzZHqk",
  "key35": "5NSiPshnGu7kDmdnES1s7RCcpZ1GVF79kNaUJFXxDNBeL74WKAqY7zF1sG7uE7tYtA39D5ttLE55WVups7J4GAeu",
  "key36": "5YWSrTDima4TfnJ4BtSTsqAUFjugC3RYNjBbMgGqQ9WfvuTkHbtHMBJAj3TR9AnksTh18JQXfkarpyFnZZYD3wBC",
  "key37": "373FrWbK6wnmQ6JovSeyJvP94vd5gnTTzASxiwAaNRcPYfTUPC1Ld8fBRbxYn3WFBKa3Z3X6dN5ueCHGroBBbXVq",
  "key38": "3SfUqgij52KvcYGpk2KhEPbqJpoirrKDyb8oCLwrAdj6EDVL4TGaa8qcM6VHdGbQnHmtnDgHvv3NnCDt8dMpE55t",
  "key39": "5ijUDar2ziuGK74s2xneDQnVuBgFymeCLbStZbXUWCfkiCPmXkYT7espGe2Hg9c8DSvbpwxhYQW55RWtnVN23BjB",
  "key40": "4cAyhsvrmVXhf9FEiG7hP9ZtpStCBsuWwN52UXH7ZCMzS7Uyz3fb65cNoWuMgvVjVkA7KkWuLDqnXpdaW1wSgiio",
  "key41": "4NxfPY1SFQ9wnJh7xvJxxWHu5K9GxUAPHX3ywrZyDzyoK2jfEWnH4mHs1haimBhnvzZqpAqbSUi1FTUMJZrJsj34"
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
