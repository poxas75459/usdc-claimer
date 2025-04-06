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
    "5whsAmaVm2xq5mCMvo6vPXu4zCZry7XkvsLCC9HyqvwMAfiiTr6brdb3zH4YVyLdsEF4vHcxRYQ8tEPjwnnW2bxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuRk6o7EStLee8fdNF6iBKR6rEDgrWcQQHuBfUM7pKLUPDqFnyPvqZXAZMLAnbwvwCkPqkjExii6YbWMn8aTphM",
  "key1": "52FcXxXWYU8nrCcLr33p42p4bb2KkXywpUurz9L8uCSUP82FRxnsB8hVXi37YCwkGKKpo1KMkDPpzZH9mXJo5wVB",
  "key2": "yobrRv39PQXy7dvKDpchX3YmbPkNXHK3T5E5wqYK6hJ1ddCgfqcrKMk92XEvF3faakHDZRx4BRR6sLaAsWte7yr",
  "key3": "4HUfMh8vhHcMLvqCZCFXHAyAsJNGbAf6rFUyFdbN2G7gs2pgkxCPVmVL2uCiLukhfEw6iehGAFfptw85mvSeXQ1Q",
  "key4": "4cd1Ly1dmYvVUP9S5zDDyh6PZWNfi6P4QSCRWiFiEiUcLugggkD7qs2NvLFfJ1MJHHRjKuTo764WVt2Cud57YdnZ",
  "key5": "4aXHvHjtFFZKuU8gMPshPkTF55XgqwBLMaXrCTfkZ2rCLiVp6ce8y291M2mmpR5SxJ4oJuN4HM6mA3mJJUzZ8qbQ",
  "key6": "4VLcRxdaSQWrs1xh4mV2d9bqpzXasC3GMGZGm8Q9pqfAkQrUdvCB96k9KM7yk33nC9hCZss18K9gRjR3qZZu1zWA",
  "key7": "3KWH3fHawH9UPSnyKAE3K3kKCbcXXavfh2rCzJLSUWbaodq541vt5cBK3sLTfp1a7mRvVNWBP3DTQXWbfs2nxfjx",
  "key8": "2AiMXp3zeCZwqfs8cNufwbvHMVBkut6zStbUwJ2QdeNUsantXuD2Buhuw8acyPNHo7QKhpnNaAogDX8rVR9h94gz",
  "key9": "3zDRwcMVKHnPRzWkSYLkf1i42Z1f8KHDsLUcvff9S6tFB1KpYyKZ4kxqAFtyohDUYeubu5Hsc8u5y1B3tX9ZVSSg",
  "key10": "23VZeKDLZYEz66dwUqzmQp7uU9zUbFpCXcBeRSVy6Fbh9hA7fcAbh7MpdFfP8zkv7YVhtEq8sdf5Bk6QCMjbGA1j",
  "key11": "3Wo9WGsuDTT6NqV9BkUNuogxhSDqJ3K7WmMmasRwqetFa7rSdr8i6wXGqjr6Apuqy2RiphrcTepJ6875msaVhVnz",
  "key12": "2zKFEornkJ8AqtfmVtxqeKSex1XW68QtJwdsBXpzvmYoY7LgZm8f67gz18GwXVW3qhoUe5zNN9q4g4xEdeT8zNAt",
  "key13": "rxsoyP7o3swYiFtPjrfk8ALtd2trpcNywTYTQ49bk7Y6eddqRvBVyoRK5cZ1QfMq7c3UZhX7NmQRqyF4FgAypG5",
  "key14": "2hQG5ycdn2WaRoutMzB8haxtNgXkNcdFrtdGiScYD1uYvMErdHpGjWzhkuEqjFRLo3Pby5qC4A7YAx8w87eUuXfu",
  "key15": "2Gb3HZQxHUkKqnK4xub6GnZ6Kmo96MCnUiVwak9BLUBcyDHFwoBFbAFDsLakFYpBeeYP7wZMA77DXX4mURzsZLZz",
  "key16": "3TpC1p3iHgxxDo7xYAgwgFjpeHKP2YrsQRa6WNKcGxoYAfL6ddZqXvFQ267DdGZexyzYNvymPpDA2b2maXrHG89j",
  "key17": "4Wd6WYCQgpRyaYLECwj5yjzx7qZ2Bm7kN9Q3tASzikFyeigi1XsF6ToqpALCstrRVnVVsWuv5cEJxoXviAN6WP3P",
  "key18": "4vrqVt2Y4Fxf9qAkpX4MAZiZazQH9F1nnB13p27dWUyhLwkqmMjFN1aMzhCNNeDhfuAHdesn9xKk948btoS74NPx",
  "key19": "Vf3ThRC2jRDtAWnDTP4jTPi6qEQ21MLWBdHapr7Esukm27a1jNY31jAkS1hYv9LaaG9BykP2yqdR7R4PhYF4tzP",
  "key20": "3ENeMQcpRCFgrCcEohVL5cKMTXcRi91u3CThLh6hGw2KaXX9L6TaxW1wy1mTJEeaxxjxtBEU5sQajotGfxMk5Xyf",
  "key21": "21wQotbRBNMNsQWC7zQfj5mt8fw2jZeNSrYxHbTr1inRJqV5mLpUFzTygjgUHZGXKcTci8uedSZHETes7EhkDLvA",
  "key22": "5B27R9Ra21tA9WwyPraHXUZBpXPZALgb1uvXsZJihyehS4smK9oqSfrWG8e9CNeEJ6D1B6eCDy1XxFKtas1jYfZN",
  "key23": "4PLmqHjHsMk65NSKVXNbnsXosLmpbG4XBVkNgK4YARx7rPAJNbJzupWQPb1J5oSRkS5iqUi1zDBp6XNY9mVCaBp",
  "key24": "67LUY1iDd8TunkNuiWfmVgXv2cSbMPo8UMRV3y5pkbgNcZ5nkdW1DNK9CuCjBYxQ5FTCTziQ3mofgSFSitGRkv8j",
  "key25": "5xqqMZqcP2upVpo78ExRsGdjex7BRxEReKX4AzhiA5rayAcE2tYhTz81b4LkpS5fKtDFnvg7HeEtxTvAG1EZxwwv",
  "key26": "2KHeS4YREg18jPDE6Q2XswNZU1RvbLy1atV5kLpsuHYpKBYHurPQ1eoi1rFDASQYYFQzFWjJpSwmARTHhWNQeWGk",
  "key27": "5qqKJVvYZFhbCkPjf8uo33Ko57QDZyPZMrVvvBa9Kzu5XmshDWCjyuHXcP5y8r3HP2jwhSKRoZJfQVFRLBBchy1x",
  "key28": "2UPS3TSCKJVpZMjq4nc7TE9Pn9oCqRuqfcm6QvjRzpNr17JaZAhbG9dFDqyqELgSBWgaikEhMZz1HCLXCSX6kHrf",
  "key29": "23kfnsHhsu7NGmjY4HW2HQK9GjnYJdPVAMjhCMWAMk4eAL4y9gbewbZoYfSooYfGSpfZz6pQwyvdu4t8eAXgkcPn",
  "key30": "2SVqkSDSkfDEqvGwH6NXFu2Q6JaSqYtdyVE1Yg18J76LLmAYZ7EEbWkQR6tJbrUTu61MMc3vQjLe1gY7TnXZURbN",
  "key31": "66MXyoaW7i7QhC9KNYgRwsxkgJf7GbeCoyCoWxHKcgnHtD8ZxGUa69z62zCMgVfnzPg1PctRWVLKvuEnyBNr1QmP",
  "key32": "2xVZCHjRYM5kSym5eVE1dU8QM7Duok9b3pWSzyP3iDAABpC3k8SagDcpfRCSUZgeQdGf2xDezaaCbHRgDMZ6VGwE",
  "key33": "2vps4cXzNJ7YLUdGohqhJbicV1MxQ5qJLfKetqjaHop2h8adzmJzgN6u3BLZZXd4aLgk4tJ848immRp9kTjDDs27",
  "key34": "2rLrvBCLSD1HpbWwTzc2dhTV2mJXrDhbLRV9z1hARWhfYpDncvSXYNCfZQ4gXcV5Myx6hUkoHUiutTnEDL4HhH5T",
  "key35": "54sxUPMF74sVfzCXvp1PUmFeGn2PDvWjJ6daeb3ApAwjc7fsLjJ2zmSC9kVPPNHYNx2fmFPfSswkWve1hMQd4SMV",
  "key36": "2q7s2mJKzeigwz2cnSg776xEYhu4BVcXyLFKWe3tAtQGqFzu69Bbr4V6RKWbavNNzzk4dYEtmRKDpRbDWMic5bdi",
  "key37": "3wYTVzshHJVHRWzpwFP6TytMXbrqfApS7dRabo78Ei11Hz1frTH36qrbsBvLzDHb5wsXWd8GWTuNzN7RGJb1RnuA",
  "key38": "J9fJUzn8HM7gZNzuUJFHhDd1zb6GTpRG936M5924Y3gV6zEpNwKKaXKixk7DqnKQL9uueq67538xpbkS98RgjKM",
  "key39": "2M4TBk3b6GGXWcppgjvQMHBeRGS6VDHs16w46eyaN3MhagGp4SvYa6iqbMbdjvfA9moBsswDMqhDcz8xVFCQnKrX",
  "key40": "2KQVHqPxC8aJe45MLUEmtsL7NTSz1qsWmygwCw5njqzTUxUBQ1jZWDRrApu4pfBJoEg7Dx5nXfNVVZrFt7Zmho1p"
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
