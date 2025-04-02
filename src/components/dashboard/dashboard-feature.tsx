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
    "2yGwrHAC6YAiwYnnSzSNaEtXbHRBpQMT9tgyBcXj3JHQPdFstc5tRrHxrs3FJVFzvTstVVZjTNwJ8S3679NrvLw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zQuwoi752UV9tAuFFMpd2yK1hxHvA6hWLWyMZXdTNBLb5puYaGn1VbeHm5YVyy6iQ8uXqHaEmeuMUCxpNGHdFG",
  "key1": "T2vJuH1JMrmUwZGmjULXDjY7BxV8KypM9bTDNnAHYdewDZhBuL6VzcJrFDdLhEZXvRstq1j3kiHHjiQNWNKESYL",
  "key2": "ZkmRkvTRjDmZknYbWs8ZQaRtVmJka8mykJoVbcTXj89EPW5z5KZHBt4y6zT9etP3aPQ2hwsDBgWoyqda4p11RMQ",
  "key3": "3XVn367gSpXePZCz1aH7KMscbWdofy9RMz8y13FcGPwBL4qHaQ97D2aqmftigj3YrztsyNYKVVzUE4n5XTzLWq35",
  "key4": "5Xz7VaLcjpXpqYm7T1uZTJoFAGGob2gfJqkUuHhEDgB4UmhKhjjaXcGQYv1o3HiNrUqS4BeJvLdSTmx1nydBdEHR",
  "key5": "5yovwHbwnWTjvQdtBKBcn2pS8CinBbdQiVicyxiwQBYPTNzsvoVZ7jpsFSpTqbijmcEBWAM5WZsCNN6iUeMt2G2T",
  "key6": "2ACoyQRHdrxfxXuecSfa7ZV1jeFQKxyzaqH9jSj7Q1GPzVSqXkD9JYcME4v3p8B7i4dxipPKCHykQkAikZj67Xxg",
  "key7": "5zisZmyXdt8DAk8iCjt2TZV2jtw9EGd8dec4PCkydqRVBywvjrHD7hyFuajv3B5T1SYP4aVmp4NYB1Et2zCYhfuL",
  "key8": "5iAYKGE1eGj81uc8j8bX1zqSpezzMArRXGjsfg5iqa3iH7eA546ZzjpvmUxgagyTqkMBdGmQZfWnqAhBBwf7nV1W",
  "key9": "3U8yrUjWsMLQxv92A8FGnbALW7rRmkJRZNUhyF8xZYajNDxTbW8v2DfGbsgMhDWuLbna382iPFYV3GoufHop1yn2",
  "key10": "4y7rmMnXUwD6PhLPH3KCgZ6TmJaqiHhHS2Xkqo7zmoikiidCdXHS1Qg23q8gxDdNsRAPWCKNSmK4nDHqZ8Smh4hu",
  "key11": "BcyvqKcNQhq43N424v1jdNbuHSLHT7Vf6wsKo5xnwFYgkZRaKaCVQQMoN9TNJr21daxTrWziitohT14jEeKAAfH",
  "key12": "4mBS6oZTNE5JE8ttiBw567FaW4ySCRW7SpPZ951zMKSs9Bf2mqit7RRnkkdFweScVgWLf5NL8V9MuMyR4WWC2VnF",
  "key13": "v6oYUQZ4BALmD9VyGfcDw3VW1XfZDJSynRhiKpMXe7QvP8VLqQVEKZRzJqBeLcAZ4rkHHWGT34rWxsbMkh7rvC8",
  "key14": "3vZ98jbtdoCe7HZCi8TapbiqkjPkuWKBvmWYfCWNHtYaQekBe3ZPsQwphpkyXzKeTaKqRFtxcKe1AMsUND736EXB",
  "key15": "2fBCZL7JvZSb49yWGaiQHgEexAFL4kgPYY1EVybH3dEQwH4y813b6ZadTw8Zj86UKk6nA8WeJ7mbJhMopiBjWKc6",
  "key16": "57ziWVRnycP7Y6mFM8zUPSEu3dKNUEp8isqXV6YXq9juDiUdHqeuKSkS4xzA2oW91YDKjfWFfPb2dJ1G8CTMy8Xa",
  "key17": "YDfN5MyMmZrEYYxtfJp36pdLuL12Z4iH7hMMyjJxad7DCVC4YiC7mFQ11tJBUxbLVSoEo3yLnkvZf2kWuUVQNiU",
  "key18": "2tycYGW5X96jVQVZHj4gNwDV8f6RNNC6wbkHcAdxvS8612kimYG4tVqjqpLWSxZ9wNTofpJr3X2CLxvoZhoVRaCa",
  "key19": "5teWwbK4KrdrvrEXVQTkCm8be5a3hCnbEx9td9wfzENf84HY2nYqrR4zEWkJPPSJQunLZgUWT5fiiUFp3NdJ9fba",
  "key20": "5Q4wvQquRq78hv4FAKS1EnAaHgMxDTut8ELmctp9fH3zfi7tc8ftEe18EGLYx48NuaLzp4Hnu4Go4vWZBGPg9oVN",
  "key21": "4qhQpHgv3Uv1mXReuLz6PjDkw5MTGsP77PsN2Hb2C9n3LHcnbFMwvqw5TCJsRKaE9Em6x6cxxpkMKvKZrbgo2RGH",
  "key22": "H6rJ1ocznNVUX3L2PYgoxdvcaLUtuamys4L6fxtLLjQ24cjudUHAaW3TQgXhEyP2QrbcZDcKV9LysrkrqDLvhJj",
  "key23": "AzjDergXxVWP9ne6azD8R6rpfmMQdLpCh7LmrMvSfx7VMgBY74DhyGTmQVMoe9SFVraGNdXVyTQohN38i28UNta",
  "key24": "364juhUSkVKezEqWCjhz1EfRcmwNZpwnXEe64HXYTXTYDkNL3DBtKm3hDPrZq9Gy9UJ8o4M1pp8C2PmQj2888pkk",
  "key25": "4SiCZkhYaZSp54jYmPZ4J7HzJwqXvRkHQjdHmQN366e3RYvz69SMpQ5YGxWRj6TN9k3XoPEXtCC4ksrCitcULG2d"
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
