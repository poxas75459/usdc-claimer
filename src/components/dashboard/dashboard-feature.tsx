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
    "2jxPE2KaryvtE6KgGjTABtYAjWfdahGeZ5uNooVQ8K256a8Je483gY4tceAJ5wm4xR1KLiuAU9nRcrq4Yd2DrUpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHpH8bZ71TE1dF83xyt7etCTmzCAP1zmdJJmB6zzLGNGgdTae8FNZJt7bGM5cRnTLFyD9XiZjWeGKQNykG3nS6k",
  "key1": "b7SUNAB6egE5a6ebLQU92GbZKzk2iMYe2joAgWaiTv2G8f6Y8YVjqVwMFCQnpg2HSxhUu8xNow6YgQer1QW1wVR",
  "key2": "3VPpMeeeQsDkwwxg1yXg4RJUj8GXJprNAgufiwhNg4UmH3QeB94DUGbpEDX2mpq1hF6SJRwGbwetDhewZNALPdZ7",
  "key3": "5NntK97aeSC1LdaKKKg7x6nChPZEijmAseaSUZjFG8XbHcA7pMPZpNw9Sr2M8qdaEwQoD4q6WXGMPF9gEUFo9aQg",
  "key4": "6YQy9n5xcERwbVJoozTkNVskYQWBkAGDByNjsSyz5yAjmVCnsAVQnAupjHf48dLALMdaRqRDUjK3Ewt1xcMKEQ9",
  "key5": "HLhMUigWTnDBiNmyVUJmtrmf7DSVzY8FsaWgZRuLejGcVctZzTk4sewdv5fMhg5Ri4rKLpSeEQPfh6mSViirRVX",
  "key6": "3UiM4pm88MGMAcMkEdwbHg7TD2Zun2HhPkoKdtqM9X7eEM7rVi8CXPgAqHTc7qL7znr4pMuH8MN9XYMVdi4HgcQY",
  "key7": "38XsmEfYfJgYgKiy8RxKG665dGAZPAeYoiYCGiwmrAw5ZdckLadrV8Mu3tyqHkHCHNSL9MLxLzaM79A5ydFYp2gH",
  "key8": "5qRwgmkYk5xR67rrMenAhSE7BPspiUzQ7w2XWEJpkLzVGFNuB6REKGBZztsrwgygiKFPpDiYqFdVcsXFm3JDn6hu",
  "key9": "4cg5gPJiDe8XWGFfi29CGgPyDaozMgdGvaoXgw9F5NDPGAr8fBAWzW97pqsC5NRpWqJMrpqcNqWNGrw6RMkqX9HV",
  "key10": "5SVRxzDUoa9kNzYHTbotgyjsNUc5TSRhNq6cmuMNv8mZdh5eqmbA13TXhrSX6Yg3UGM7wjAsgyrL6apChvT972Xk",
  "key11": "2NvuAspw3ckbbLbwpike6DQhYj6r1mvWJ56TsVx2ZjiCeZhPRMi4d8wCKhB8KqJoQ9WjaL3oFcu3F1K32jvLmqkU",
  "key12": "2nUwfzCjkQbRrLkVWJVibujHmGKXZK27wqCDD7ddTUzKXzYwxX1FpzKBfYQNSQfkrJnTAzBNedF1GP2BFxJJmaYL",
  "key13": "2QYZg4yAQtRBugWZZfADSVJRHWkhvXa6Ffmvuu3tAegG9vevEixWwqsbsyNYp5m1n9hrxLe3sYCeiXM5QLi77rd2",
  "key14": "5k5aT7kcMDanBKaQ8wBxLRrUnTHPBaiCdxtJBivGvBakmqE47iDr5q26jutemZFBcBbM3SPq8aUs8PaGjpXz5nsn",
  "key15": "22i55g6cpq38rVjjTJbEJ9aJB7y7wK7gKzwLh5hxuMr8ppnP3dThTNZR9SqvVz6Syfq8URe8SS2QyTYHLj3jQJT6",
  "key16": "3sYgxAztUbP8mEWNEnJ1gN9A5jr1oH5cd5QaaKQ88hXKkaqtEWyXDsZoABYAZaCh7TB79N7Q62g8s5ngzXerZQpn",
  "key17": "GHaNyXpSffiijF9xH8ZdxynUyVSQ6W3n2EeiyhwQynmzasD26WZp2Rzuktk1tao3fqqdUy8bvZhdY38QiLZejc8",
  "key18": "42VfTk2xwH6M2CudKC6KZWu1MS3DK8N87ZrZpCN3vnfgrDab3hZDvUUqD5FyHMmWKZRMrhxTc8A9HpEJob6JwhhT",
  "key19": "1TQoK9RyQxsWFrpBe1Gh81MNt9Lrr9UnPJ1AAmoMorTUhqAf3FCkz34iWzZd3emVaCNxrTRXQzg3P5sYDWKATRf",
  "key20": "xRRN7CVBYwW8FxD9mTFRkpjDPjAD7s1bNVq4PiCPJCWrHmg9JT8rNSdCXhTNUNeQG7vBXk4w6aSwYFyjb5NBB4r",
  "key21": "3YhTyqJv5mTG6MCbCMDa6pQkV5L6pyHrv2kBfVAryAtqWY1Vh3vMk6YHo8Dkt9qjT8XK1cDdSZYRsdBjpiUXFt6W",
  "key22": "2SVjfeb3CCVfvuXUXtsyYsExfDWekph3oxiqxXL1qXYULXmzNrSHuVAKETQYfKXFetGCc2EgCojzTJFWGK9pYUdu",
  "key23": "3NyigdeCc6xqaHGnwapAFyntKHrfCEECysgcmxL3fGq5UTuPZor8w4n75xWXAQsVtYmbomAuq5TY7zcsqJJyfYCt",
  "key24": "5Hq7B6m1xchgbNQxhguVQRfV1khiR8LEC3yizevC8aJVXKg37fixR9nD7ekBPVZDjSdX79ryWMrcnmii11aSy7Dg",
  "key25": "5CfNSgysdVtMvH7NH4MXXokYvWhToyHm63Ko7AzWMN5cLBsCPxpCgEbuw2qhKtajdXVKqBU54UDFoSg6ALZJ1Yrc",
  "key26": "44LqmJrFhwYmsZu4ZVG87aucE3zU5uZrfRbWL2izeUMxwVAW9YhL9t91qeB5PkLruYS8YeqDv5CMKZWd2uEHmBWX",
  "key27": "2EfPAFkrfftWeAbfFZjXsQE2bjhD1XusCwkNq2frJpZKXn2JisB6SaMsctbYvb94Jvkw7tghcr52wNf4a7K926SH"
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
