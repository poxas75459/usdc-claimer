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
    "26hws4JUsSo3o1PB6tjRzTxhzXdqjkVGMWcYhz7imUNrYavG3pUjyzHRaLeCuSbmVa1a3ykM5QBAZ4dmnbQZRNzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFTQbxuCT1m7KUj1CPCzSUnDLXo53epwzqN5PM4omSChttsJFup3eFssvNqbDjXJqNmtDnCxm3Cr3ueU2JNDQjd",
  "key1": "5PGajmTxWb2X9xDW33KtuiFtRvA1cGo7b8VRRHMQZwWZ8VGc5gpJ6gQFXTxdEw621K8piLSf8BV3MTALbtrrkoXu",
  "key2": "39KGjYG1UxewRw2mcBJk7WkzitVEBm6B6B5jr9z6Q4LHxVDZPMBN5T2gmLYKPMrZrS8i37VkJjqqRWearkMCEEiv",
  "key3": "2tNUcJaaa7efyQFCGX4mnGEJvGWpWD7UeXcc6BkBSG3BsUAVedytLxS3WpAG7p8LwVMUbFyS8PR72bz22LPmSdzj",
  "key4": "h5n2ciTXxHCv8Zp4arLrx7dX9bxovDpj9xoN7rGexcjS1HDYbEZc6X7suWVr7QGsJCzryUzkeyJ5oviFSxFXJo6",
  "key5": "3aYuxUkbWk5SaHGhiWUc1aL5z6nLE8J9BNA3YxZfpJ4qDe1saABZWRWcpDusQwkut3wnTvSK85sjS1xLgS9XZtLw",
  "key6": "8ZQf9a1V5UvVTy53nhDyT29bNn23EDhiSz6KKVw2njazUVHiNZCByn1zX9zHSd6wS2GcNAMSDy69RHBGqK8qYdd",
  "key7": "PVpbVcJe69L8xagkev7VaNiiWwFqgTXC4o7FwjnRf2mnZpAxBG4veBQZQxVAQXtnQ7tkCp9MYqNGVFv53BVNcNx",
  "key8": "5Q5EDW3GHvpLZobnowfnhevk4gwLxK4tH4guM9Bm9oY78Rot6kpMHusUhLzj2mQtXh12vgewvwvHMP3WJPbTi8fC",
  "key9": "36TYAvejtJkpUXn6Rs12PewAARBCHJBkUtZFwWitA4qe8mu9ww1eUmg77HviWcyxbroNfjjTVx6i4XUV7ujUb6CV",
  "key10": "66nZXYnpav3tbaQ57ZAHHpPAVYcLaUCUVcn7XYtsiukmpHM4nbhWaTmwAZB8gGN2FX7AJusJ9StuHfrhUCw7KeGN",
  "key11": "LVz6MjvS9CHFxRsJiRyca6iADSuQMJ6FysSLYj5Mo4R6oj7GZiN1RUpjHgF5qXTNW6qTfoEALW1dvib7fu9ukoG",
  "key12": "55rc3kMf3PHuAvcpmhBnrXYJhxFLJZt2PrT52zjaGfQKfijmghRn2P862VGaz4P2HUX5pWW9n8sDFWTigh6vnUVa",
  "key13": "5g9LXALf4Ya5d3QUKFHiyBFKdvEHjXmp8phArVXEhQenHjMTP6zqVWxq7qF8vzgC6LKvANi6mWU6r9Yr1VfQQbZf",
  "key14": "2FBMcCYvhQtQJ3sc17bDYwXLGN46uVd8NEgMRUV7pjx9Q4cLvDnjNWz1BkpR2uFNZqwrZKMAZqvqXXqAuf752Xc1",
  "key15": "5wA3nmBxc4h4HqRfZGPk3BqiZWhXtmDJdc9bFgSDst4UzWsNqxwFy83xmxSjKDuMaMYyuuNPHFxRJh1VULeLVFNe",
  "key16": "3JVHQfjK7j3WAoGz5aWf9w4mgrT3V5FPRXMhJAD6gxDca8SC4vTv3TpJDx2PGKX6PVLbpNXwJjUBvJ1jBZ7GwE2i",
  "key17": "55XJDRtja6HW4DULV1amJpimBRd4LdWYyoZXxotDgDaToTTCaVgfdRL9Nnxt41zwQmkGJemB1xurLFuSWh9ZC1Bz",
  "key18": "5HpDV5PXtnudCbVehyDQS1kx9fy8Epwh2oUu7JegnmqKAmsMPEVHKcsk4amwhrcf8sXNFuihyqKXRRyHgjhap2N1",
  "key19": "5LRa8ovgMKweGX9fBxwzrjfp7b92D3VzE1rhcycymjRzJG4EPirDBDMLzndwCQ5UFtn6Wv5LPZ3THK2fdRRLX8Ey",
  "key20": "3QMLwyfVGxQyoo3CoSy6VutAL3kyS7sHdHVNesrsKm2xR5u3g6xNVPboqHgNbkDAJvggwbhMdVimXLaXRwCwEuWC",
  "key21": "21wen8mbjTKbZ7xaVAX4G55hHkC6dsYEAidQXxYedYxDjPaTxhjQH3WqNhr9ZSzFv2Lay1Qf2puF3wWWEHmhubck",
  "key22": "Re4c7qCG9UM1RkJSHErqvg7ujhU3oW6GhEqxtMDpikn1JCKxicVURdXd92SWd6p35LQngtvQzaTJvtqxJJH6hFZ",
  "key23": "5tX4sAyAVY8MtfbkCUQWz7HdrmBF96PBfRWaph23S5zWUYyeSJ5VUBuRyg6q4MhWQrit8njakNmqAfqQqmR2CS69",
  "key24": "5S8c7XgBzGc2VFchuQRmpf4FRpGvB5oS4a2a9z3x39k3vCrqqLQ5xCne5VUL6sSkxqKh64YMyvk9aAq9c12qewaB",
  "key25": "29THcSP2rsfk3K8STnfb6o1UcKW3MK3sUsr8GW3aCZXtvGxm6gDx4i1AuHXngeQHgZmBXxZxpnZuokHnZk2nf1Bu",
  "key26": "2VwbsqRwWNUNFqPzjyKHjE6a2Gtsp61GYFWjvcRky6uGtHVSpbgAgKALJjCEKoeDzvWxFTbwm8LUzdx364EUhV7e",
  "key27": "4LPM6ddgLRtzFUcNLG7TsPYT4USYj18JM4uUZoc7MK8vhXVwcvmCgbvM96wtnnkmZrdGncVLnHhYzWKFTYhY5pww",
  "key28": "2RP9y1ZBg2ZZ8W4JaN8bBQEkXzUqLKvZKYKQK29wnzT3AL4mNryuoWxxiznK3ZEfFnHU9uqF8zjQpNh3v9fzQshx",
  "key29": "4XDtmpoRB51JWuhRCaRZf5JK2RVEyd1UYh9MfV7oL6r67WjWeh1HGZZx4BMwea8LYCkC8js6yBZEi2SfV4Y8GJXa"
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
