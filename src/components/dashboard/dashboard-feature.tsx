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
    "53Xxeq26HVRvMaNoF3nGdFDT64as32BZxPB4gFX5EoYQ2DVXtRWy2BKxNvtmtPFmQ3FwQRzAs1ieBLABRMDZr42g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAtifkbswMFotNjn5TiFC3QktQFYdZwPQ9LEhtpXVVMEKDoeAi9UuxvmsPeDPqza4BRQXaicf2YSd2ybJXDWty1",
  "key1": "26pMYqHCFvM7FcKKFyjqg8V3eUMhZhFNqPShAVZNwjsg594QUh7nWSZ9JV4raKXPH3S9xpqsKhw4uzc8J9FsDKSc",
  "key2": "2e6S8p6RrL9kD39BrfgA1rYp8H2JWog6RLqDkMf9V1M7DNNeZF255wdbnUrjWwvS4RhFvS5XWhRVj9nALqMNEPgE",
  "key3": "47J2Hmj6pgLts6rNghcArdiyKZCk3E2xMWnVUMpee7TdQLPm5tTjyEC7YCKoAS7RSupnM4mEoW1yqELxqx7nzgvt",
  "key4": "vuYibsCDpWn482fWMPSNtLkxUQvCpyxtuCVHLXnb12RXsoN567Dt7XZ2LVQbjumhYGhwD2eQkrd8VA9pmsUPTB7",
  "key5": "5HpAu4R5teSkiCE2gh48fceH23YWLShQtPPTnbD2bAgf8hJ5kzmtpX7HvdDrsUS5YvkwyS1NSRHTbZ9jctoDmZNW",
  "key6": "zt13kQvfGL3QrRVhUV7zStw6p4ZbH6hESuJBP48DBe515WbpazHbDmRTTMNFGc7MRfXyAdYEx62dzAuNSg1sXtz",
  "key7": "31w8CoG1KxqRkwiHXWyPrQN4e5D4uH5B9kDJHLTJKYYrasbbLF7Nn5U7Kx9y3yEFEiCYXykw8eR7VwZDyWDtCnYa",
  "key8": "3S1bZDtQovc2EKiKKB4YAcxpq5dHjhUcD8VxBWfe6vBpapHcQNgqgaboSYqkM84NCmWY816jd14SkUsp3Q69nntA",
  "key9": "5a1etoZUn73DWydAmjvnbsVaL5jKoBXRP5H8HTJJDZmTSX8NoouTHwVvuDL8yaP8JcxvAZZueTg4hAvV14AmX2Z9",
  "key10": "2gNMbKGnA7CrMituUiT8MmoboL5CMtciwhLxLVG8PMj49hAi1QFQY1XGxhWXYMRecnWqBKPgFKNedfRd2ZPoMXS5",
  "key11": "4suo2KofCVHiuQic3Fu6TqUoMYkjAZi9FcDtMYNg4pihsAr5rubTBBU5KqVYyugWpXEG1z9EQNp5dqY1DV5Vur4r",
  "key12": "47vjYzQwHXwnYVBWiTsS9yJuZkndn1LdvnWRBzaAWm9ZojUx75j6wxfkFMA8ss6oPiVAngooBprYCgqATCkNfK7R",
  "key13": "4FSjqsKL3paTy9mA8om3QuZtwKyYWLrLB5bQCUMUEaMyK8CP49UTvZZ5eVrr4mzwxiJfDc59uzU2Tv8BSaHqvmBR",
  "key14": "23B8YGJR2fyahzcGQTnQ3iWz3vswjgnuTGYty5KwpwS1eAAXYeuFbDq6cQN9Rq8VnN8YBDYSAjQV74aahCB9ngZV",
  "key15": "65reM4eT95UBEdyBxqx76GAzPFvyAjLJe8jxcNzudCYb1icgSwjEfHQDpTKS3RKqH2GvBJueDtr1nVmtiENvHrSG",
  "key16": "EV62N3vRYo8U4yfC6K8jARKiDcyQz9vVrxhHVa8nZV9SBZzqpYxGTW9bXR5vGLTPtngDbxLtPQnmpZBa5KC6xji",
  "key17": "3oVWcbMbEADGxFcDz1FQtor2FxGP4HdxmpBJ1iuk8265kNnn7uAzMamiAeaJEgDW6wFNG3tYrZppdWk6fMtayfm7",
  "key18": "sVfCLctVYJ4WJ1F8V365y35YkY7ycPkXEtJHpsHsTveReQdJRQ3wFf8z82SmBaW43RXAtB6PuaMynW2WCu6YAww",
  "key19": "3sX3679LVYjQhYsWhgdKVH7LxAedCtKuTTyGZhhSmiZL6rQCt5ff7uf9LfbyGN8uVRjy5syLbdSLaEk4DVvdn1GC",
  "key20": "2yP2bdMSQbBMfTXpNGp72puB8S6NdPrmuL1ScadDnCyJsiwvjhDe2LZTXgQJS9Lwf2BeZRZdzcCjRFiqBnD7AEt4",
  "key21": "4A8JuChxhhEKhBJXVLZYSSd4651XNxD8yWmUL9caUqD9UiKDSzGbSu3GcxtTf9hK37AVr2uBugKtHoPiy52PQfz6",
  "key22": "3J16cNcgHek4LZSEvvzPfjPSCMaMDLbL8enXejehYA2qHDpms4jbkKG1zKZQTpBoQk8S8Rsc7XQhQBrZ9WbH8Vjy",
  "key23": "4HTs4KzNuXQW2iJHQSFuHMxD2d4TLpok2my6ZuQUPkEALbp34RgrDrBn1hchJ5D9gQzpQtNm8fz3sckTMx4JwsNy",
  "key24": "4QCSBQj7rESokTKWXNGUzyncDVWfMg9Q7GAiRmULxUTN1zHm2iXuWjMkpbWCMai4FwJ7jow7TnfK1whZgZL4dxbv",
  "key25": "2mzr2cbcsMrApzXhB6DekBd8eWjvPUpvAsHiA4SYxF3mKXHc9yJsKjKfuk6kDcHkP2NmjVykt5dGoH8Zwdh9JTLg",
  "key26": "5EjYrUiqNoG6FHh6yCsLEUxM1qyurkCbbMmSnouVVf3dkeieY1u2W7HfHASoDfy6Zj6knocjFU7x2NwH7bfoFo4q",
  "key27": "2cQPLHV95VEgkas9hGWLTbrqy6zSE1LkFUovcz3HqXDJh5q56rCPwCNSjs85CSn6GjA6XLgijoB8uBgckWQ4sh5S",
  "key28": "4j6ogvn6gXKTAdyK4aEwdYkH8bXYTPKZiQoeZmBk3GBrAPY4q2MQWCdZbgWNfqjGmUwMeA2CdeRABhj1hUU787n3",
  "key29": "2ECbrU6BCTzshfju7iYxYztFAYAPgvb7BzUM2MQvhNFTDNbv5tX4T4pPXMMVExebxo1CmjF5mpabFe7FamNqxKwG",
  "key30": "28WAekj7gNe8Kggsvm4u6xKZmShmpB79kQy4gyCnZu6D5fZdtpKsuriv2Wgysd3EASJJz5ftLCcut6HykabgeBm6",
  "key31": "63bbh8oqLX7HawiFpicaC8AzyFw716Y38hxsoNUbxDMXdTtqcAsTgm4DsJ56PujjEcJ556mEUNvHvXe7sUwpQo9T",
  "key32": "inmYkoMps2PVaCCaGjSQKHWHq1q6YT9ZHHBsb7XxtstkvkL2wxj9NLuzbojJoyF2PWvKxMbgr3ky4T2sDbikBej"
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
