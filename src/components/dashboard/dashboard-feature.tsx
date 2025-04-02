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
    "5Y56VUpGYuwCJrAfJUxi2WSVfvGjDTb9djvEHXcBWpvC3hTxUpf7neRjcYuoA1Rwsf4YNAiBX6RV2NNAz6jT8Wyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjRHssRxhpapQtM3ALK1QMTEYZvVUx968jcvEgmmNg12ivAqNKNiF9PRjaEt72ypq8WQfM2AbTS9mEYF5jHYEmQ",
  "key1": "57epYrLieXoW79LdKZF2nebo2SVrY9SYoBLqUReox5oZbxDm46gVVoautW9Z484rGmt8yFxdcqPHNo3no6Ptua9v",
  "key2": "XZRpeATTrnxBT7iAuyGh4tfyeCyB7Y6NJi1XxkU7qDhh6cKQmJTzhJ5NW7EHULvCtWMFootwrzZgfJqwmqgZxUk",
  "key3": "3kUSHu4dm7WQTJa9BCnLW5AfdTtZTUtfzL9YfbGrvPmxM9qdA2oi4g9hyX162uZa7tWALfzU6WBvmdDRzoQgnhxi",
  "key4": "5jvCp7yFJwqzTp54dNTaGtoGaigR67fHS8j4vMD38vdAu9CAQQp1w5dLG13ezijFSKqBZomihvBJNoAfQpfmCQVa",
  "key5": "4H1JHhvCYfiX1FHqcD94YevQdL5yqWV4t9VXWTpZPs7zz8XDy7u1sTZKmkyv3D5BmxbNzAafSqfBvWjXtVCYDiJm",
  "key6": "46m4bH9jG3UuainDWkCVcxc444MpAaHvfmwqRrsedtZWmxUMfXTXgHauoDC5E5DjeP9zWLNAfar8efQZGgUsTk1H",
  "key7": "3TJcv34ZaAoZF3y5uufqXZKkfTNzbaYiaog2aWGLiiNECjdAqP9KpQswDdm8h9GYSHo9dJnL5YcFMpa8S8Kf96bQ",
  "key8": "4DRjDWgF6awz7rkrg78tBzFV932EZuMS1p3wSeKEfmeG4TsvPSdGBYmqTwrVdtNjwV7r5YFN7rbAZV2EpAGLGGsY",
  "key9": "3i9bqUy2c6LegKU37W4X8fCjVNC34tivvu7RBniryU6uE2QV4RNNqZvU8HdCdRY3YC7ws84RfYSnb33JCarqHKwb",
  "key10": "EgU6mq5x7HE9PFWuHrFH5Fsc1yS2o6Tzywneaf86NirJKQi27CgdmusZ9N9dYda7Ar5tKqmd5yRHtUg4wofy1ei",
  "key11": "2m9XVqGJRsjnY7z3QfUTrtgiwui3Wv3ZhkQScKRqDx9UKTVtYx5GbwmPbJnvbP5QonUqzgiBi79QPAksr3av38DA",
  "key12": "5tUxzoJ5TX28QBwk1AGSsWtEXfENX2VXe3sHM2zhRfpiQBSu479bLXKe6rrtUNbRar69m8v5uS3mypkfxHgQKSZs",
  "key13": "5ZBCCuC6zbqrbSJN8Hb6asa9HW3kxz4hdw7J6UhtqtAND8crJ78bh7k1wdVtRfdJYvGbZ7u8hDCTkPFMSQyPpwqC",
  "key14": "4tc93KT8NczZs3cZzTxcEf3GkW2tAncwb6jZEi3LDaXHJq5zTLiaDjAKAjcJkGHqGHdswWLX4CsEE2YkXo1es2NA",
  "key15": "5oy3uHrN6EgNPEMGiQundGrrSiSbSjQ8cXXRF7AEMTikwaoofgB88DA6UKygNyWenD2rRRgfJUjHfLWy6TSy9vTm",
  "key16": "5wF9M8m1sovVivmzv8ZXfApMU4tuKVj2Ydvtps9UYHSPqakwkPe1nKTxQaBTTcWoUKMZuuBHekZ8aDEVxTQjFPit",
  "key17": "4ScDdizUab4fwqLxXR6dPERqjGsJmjyeUFp8D5NmMRYZPgDCUZaxFgaoeoJND9j3svG36qreKAkV8R4mFkZCgoYe",
  "key18": "4NQg15rH4mygkwL17WKyUDyxyyk7vXqkQUauepGTyjTZuDEYscwM24RKXTXSSVhLMmyPxjmbgoPsAygE1nypkLpE",
  "key19": "41th3i4B2RDo5szbpTLPRAX4cDLrqAiuPjm6g3TpEw4DQxjdLis9yp95Zwe5y4EEvwZPeSLzxiXVVDNnjnqxmsB2",
  "key20": "38o6NKnvyTZeehXRmvfq1BLhtDTSjeXXiut1zz25xTxgb588ZR75RC6vYPYzMcCXv6it5iR3JR2SHUoRXPL9WWic",
  "key21": "42nh7cxC2TwjJbfepSeuGvWibhGVS13KKwQ4qKuaKYompNxWKHFCJbeC464Qh5tFSgL6yjoAG7CMeMbwcA973SU7",
  "key22": "3z9XmeqMZsbWDkK8FpcD6yy3aRGeTe5E8cPj6jkXw4FoW1wY83dTxsCcg9Jo752oU1mmeVvqDjNZY8x1saVSPAbf",
  "key23": "5PQfvR4MeYyJszfrcTeZpd5mCT9zQkSeJu9J7h2kqz8yd6JQkcVKBwnZcDWbaFLUmwsxVPLbSZWZSikGEs42tTv5",
  "key24": "2qkUaQjiAa5LG7wYR6mK31AYXjkDe8CYXdunHYuhGCQMfNJbzroduqhQTyDSFBzUfumf6r8k8CQfkpoMuPhyhvyF",
  "key25": "2nkLYHedCvkaV7igsDwFMQBtvJR6YFutTFatNhiyt3m6GpWuutjxSupwwZvaaiH3MTKBMrAEgcxzqcLhqoH8kwqg",
  "key26": "2hRE7CjcGDuJHMhgWhuXPJxVCJyfsWrKReZ4jebY3eLNRwhfw8AZscZRL6ZJYZW41tiZaSgeMX2VRvuwAn7LVZjf",
  "key27": "32E3SAqmJq4jAd5uaMZmYf17dWSJqe6bcpgwYkZgvY9p2xtkF5TsmMBScejqv1xL7mTVhqpvoVv3vAsgGmaiydW3",
  "key28": "2kGoWg3H9K7dsA8TdwaNbg7cTT9eP5hMx4nqfTWf3bZwixWbfa6xit3jkqRMpWic21NJMkf9wWTUgAhzGntKQokm",
  "key29": "3t5kf8tqBvJeW4Dzd1LtqC8zqcPANhZmG6UPF2JLN6dEnCXgYCvYSHS2APWA5i9Z7LpwghJE2zb6WHr9uF6g9qnx",
  "key30": "ujHZubLow4nKRKA6FLHyxGVB6ZYL37wAHCW16Em7Dh6LkPyxdNjAMghH5oUzHKCvy2usUxxjy8x6JsRiJaYvFdX",
  "key31": "45oedp7Qs3Xi4XNZg9AXwRkkPxhGw71C976argHUE4md7kiMXE1jsXDwoWvjmXkk3MW6uk61s3ur8CVUy5iK7DBC",
  "key32": "4H8q2mS2f6Vgy8D3sDAiy2kCq3sX9frJSRztLjWMKVcfL18sBCyDa1YRPUb4Luz1tBv2dtwEQqFTAFZG4T7tsgYK",
  "key33": "4L8vTsQHfgVFwmxh5GGAa83nhQGEDQohs4HuqAZYYVxEXyMtjXeSPK7H7GbaTU1Eeyw8QJp91mqLcL9Pd5yMUgqr"
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
