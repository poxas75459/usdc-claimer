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
    "5iPcS9FzSpbeHP4R8ZawVhk476z9BTAbrZ7SXdLqh2AVHvecHx4nrdCZVZzdU9EvSQ9d1D5pmdkNm3e2wL6pDTyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36zZ2R4hYpEjEu1bCuLUL6K13dFJbnxzfbR9hRE11So1VqecQ51dooRkWUjVnDgt6hQYqnSLA2rMePtrQdxWzaJd",
  "key1": "46ZmxM2nNom18jvwDbZ7DfGbvPmLwBBde6WgqN6vzD7DPUpCeqiEENoMVdWuyDwKjhh7yqi8QmHSHhKN887rxwkr",
  "key2": "2MUTJHU9Lq9QRKWyx4ASBgXRkAqpTmF7xYFPGfeVChDtV3WCaP8AprFPTtvsxWED67ATp7YJvDTrd7SyDi9cti6B",
  "key3": "4gZX7yyAosQndnvJSAm8pFbBozaGKQE1NXHJ7qaCBJnfhVmAQiGZTtuA9D9j6RFNbEBGjBErHr6jd8tYj8R25m61",
  "key4": "5J4DmcZ8T6uGxVDdEWCtFa7qWcmEVVESbR3taxZhLkfkgvuKkihkSho6UQjoBN4krhgjuyzimwnp4s5GYjtBnLXj",
  "key5": "29nzXNtK32ygEYL874MKpA99nBb1D3KNAJBEugfgRy826giR3e3pRV9Y6frKVKq9LeLykzv6W3WY8UBEpWtPMkh9",
  "key6": "ks3S9qd6KYD9W5iMs3M3Tpruakj18UwvfPap1s4AgFUaKPmUAeBK8sL9UHm73HxtLjicNXM1kuDxVTz8a8jnbcq",
  "key7": "2HJT8DptjF54CBkcC3JkRVLeoeUwjQeoawzwCZDinQQghKcaSyUDDJKzMedDFsjeYcziNHx8qaD1ANMjMe6Nj5iN",
  "key8": "6652EiBW5grH7WQcg74YJM5pTr7KYPpVsDEMaT2iCo1GKDg7SghibTAePvEtXP6qYRgPWqTMGeXQHvZk1tugv9pc",
  "key9": "3b17V8ixBJqTJVfgBthAbbiYERkJGfX8x8rgPQSxj1gssgQmk618yNrS2Kgy9nZd1qTnghUJCpHSL8JiiYa96nj5",
  "key10": "37SiknnrswimUcH5gNSwxKZk1ctxYhaQTxQQYzDkS37BHueP6s1bVNZhgFi7UYkXnsvLdjEvQNKbM4MozkUSW223",
  "key11": "3mqWkTi8ZpeSmNgrmUDg6PjnQrgR3GXe8JtuoexvZpXSzaprHbubLnNMkVgG4vNCjqQxovU58rvG1smmQMN2GJf7",
  "key12": "5ghd77U3YSsBWXKwVrDJEepwkQwk8QWXRfdb7cGBn4Kp2gsLPvkXHA35zm2YvRjgxy6VobBzZpkg9UbUKwtykagG",
  "key13": "4GvjfnTSFtWgK3cqs7DCoNsphsiepddg3zkVnk7ZnPbK7ACCCa7dmSidoT7a9FSxXDiSB7qpE3AfMxTm37nsEtGD",
  "key14": "4MGevpmuJoMZ9pcjkcc5jjYFnre5vi1LTMGGPdjdXk4z74bwpD6hjxbAEmDWFPdayDYeyo4rZfDCgqJ5wCtykcFE",
  "key15": "4MJTTW2ULrEuNB9yZi4XK9JmREotZ46Uc4DgwYEeLjZgC6SxpNJAEY8tNE3PQ5tYhwYRyjR9ZiF8DeUTN6bZinBR",
  "key16": "5DUoipNvmw7AdHWo7LiYJZS5jRTYwLH48WYfabHwchcEqWRBf77zbpXLd5SC4nCM4b89dvv3sC54N8bVJznVeTUK",
  "key17": "3tKKkZmHoq8UeAzMEzLgb9hbydAmUwoWpuhCdiNuKMvAF4tmKiWBaVGLnQKCt77roeEQivoXRHGsUCiY9MHb3iKk",
  "key18": "5QF8pR5bRUS24mrXUMi87RLjnwgcjpGQ7FahbCwRCvqp6GvV8rAMcUCKRCiVLb1ChXJEpzvHMLiH2N2srYjPab9R",
  "key19": "5xdLjwWindGsYRRqYf1KJm5uw5kKWqNHXH55YFG5uBBu8gyTva6sdhRW65KVsVcFUkdhzNP9oTd6j83ZsTWFmkwF",
  "key20": "4rjKFq6YG6gjqqzwTB4Q6WZ6aoEu3LqSfuNRANXubfY3YZKphV26LZWFBbSkzTTemdAXPcntjFUnXfWTXjusiMyt",
  "key21": "3XusWvbwn18XEA1WBDgpY9MUzy4HbcSwDNL2tDjXfFRu2nTLQc96VXC3DyZnQuBMUtLds3biRNvhZX1AzQxL5t6K",
  "key22": "PrpqAx5YAiwtrpctEXStDDspkrAFUyPJa5nxjbAcShaPxiAYXF4u9UGUXNtWmBkrcmfgmJ4U3VhpjkG8KBkA2HT",
  "key23": "4c3Li2pQffLVxhFaqizuVqLuxy6gohEH4pBei444w9UXNdfq3mgW9nhjDbLCfsRJtj4WsGfYncsdRKjfrkTnGTkK",
  "key24": "2QBSHmkdSW7JXwgDFWJdd71oYXYuu42hNz3eZj5kC2m42c1e29z77xrA8217xbYhvNvRoTXHyu7hL84uHQShQWSr",
  "key25": "3AF1HR7vprLjYChjWy56vmxPwFoPptRPnds81HXtMGF96t969fYKBnfWMzWfPHMwEhxmzZ6urPUVyG7dLteZuEKb",
  "key26": "5JkKM6pbBEdjYRKqwXehesfCtu2XXPUQ6Q3QRNRztkGvAhCi5W7YEMNBsjygKytfijoDQXAy4Wz1JBE2eEPBmbnC",
  "key27": "4rfXjAwvS7dCUju8qVccM3gyBPJTQWuz7GMVhwC3tFDGe13jM6YpWKWML3GsAATQCh9iZYALBiWmXDL8XHMem5zz",
  "key28": "3ono9d5bKyYuPpzj78kjn7QhYuAAd8gLfvktTsMDDAnvPCg3r96SkjA33tnc9vXA62FxDrdbLHHVvyDAWCZrbgK",
  "key29": "4WkDnW3RzWFng1TAYxGsPEqfjQDDgH3jDg8h1gpsnTz1GHY7mkS4mRRWpiZdRxUZGhUKs4oiM9w1vXAGQQLyM4x1",
  "key30": "53DMm1QNpYZ2Sbc5kJi5tNwNSpPaRVu2qsSndJne3hmkZHPNfrdmxKypsmjMUjGgTjZiYNiHwNacjNeaE4MiiU3U",
  "key31": "4sYdkcdzkZHe94FJYU6iWfVGuasnpNvWwZRhFxMXvQHymHN8vMZHVGmnKJysdPKHFXBpd4JftmqCsCMbuj6wVDMz",
  "key32": "2wNH38BHYmKDbkh8NcGTiy4XsEfq2vf6KMZFpfMg7EMnieo3WBMRQqPnpAuJRPJTYnUVx2V3Wo4RTr42bN5NZSAi",
  "key33": "3W5JHtn8eBNjRNTxmjisY2Dv4UKt8HLcuvBEsQJTkBKmFxLxkqd2g6QA7ddkzpn5n3KWA9cgaQPbKcs1NJ9ELCcD",
  "key34": "zUEMabmyKZ7vrPEEZJcZ8kbub8tHcT9jVkjoU1cqosAfSm71wFEgE5FzWiEUCcQn3fUxT8QLF9Hr6v8MuFBgsbb",
  "key35": "3gFVdVvn5RvozWad5CaeshF1qRjY6qZGmhYzVUj4GkiYJyHARg1gaaVXo2qE3ibk57xHsC8ECFc31eTY2LAb88FB",
  "key36": "2gFQZo3MTKdQyfv3qDtWRTjzVfQnVZQLECvQ4DQDSw1Ca4x9ExPmYHJ9QvxuARjeEwyRY7CdJqK4ZcmWLAv6pm7M"
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
