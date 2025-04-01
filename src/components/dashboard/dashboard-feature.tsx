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
    "2iL4r7cEcbxcGjABki4e6jW9Gd7kUL2g7tM8VmU8bqNEo56Y6XRCbjJ3iQW9DFHaGN6ppAidkpzPbf6cYcaNwf7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLmKLT86yoy5TvScsLTinqCKb1fNSzbm7La5wsiV8431394gzWTcdkGTZWm2S7fyddvdVXpRqURPo8ZvNHBywMB",
  "key1": "4eXx318cBbymRTyhzY7SH8F5xYBPHcDceyRgCV4Dty32mGhsrQPdE4v5TSTLxTeaBerxmTvevXWMWdUfS3gs8sgm",
  "key2": "6662AfH3EtLvcsZdS8TzAP5QDbtg3xyjmNWyUFUWGykZ8v6Vrtm8NTGYuAS97nKyQrpFKvfDmGQR7RysMTyJxFVf",
  "key3": "4UyhWknpkx27WuuMAJFXQDnKqorbiB5GJfq3oaVaphrdBb4p42NXJpSWREcucihQ31j3fWRQXzzDX9wVBM9LEd5X",
  "key4": "51AX2hJSxSNCbhjoA2pkbLdjMrz8eQAoM4XRnMZMq4uiaDQTLhbyjQQA3zrRLHktrQ3DPj2poB3bGJAwMXgobRsX",
  "key5": "2YsBSzjJNzYVpQFY5oZsf23ceHDXtRqnqi8YRi6qE25H4zD7iQkpnCS8dkTm9yHaPjcdXLb7E5E4PEBcqDPiNSuu",
  "key6": "4BXN8Q33SNtjMKjyfJdcSttYy26fdA6bYx5Vd6JPgPh7eDFWKrsPA6BR2Ak2CPCkpqy2Lsj6fvwaputssnkom7SZ",
  "key7": "4ohVQTSjxiB2gFTewFUaDPSrgYMXPSvmwddF1Y4oUwnpLLUzXS8v6oTDRpiTjbEbxjphMYpWF34vaqUWeJck8dDZ",
  "key8": "5t45yHSgZSC6dS38Ke5s7egt4uYaJEbbQbQh7p2r8hs4h4ibqmAu2fqJRMhxTfcJaDWe2rpLNzDqjoi74QLrkGBf",
  "key9": "4x6tQzug1QiPaQDDa155W2Dx2fZBMuzHkdcDJRLquTogQ1Hn5aYkCjPwRJ9wu9rRhFJpLGBU1nKYNqKsUvPnkngB",
  "key10": "31pS7iRwashKjmwQnjQu1AZoVVepqbTLcJGQgCMd2v6eAtvUNpmobRykX7MPwYfxmP8Qw3piUzjRasddhpDAViue",
  "key11": "489e9363uieHMJ68FrnNeYkHAvXbMb8zRFYun4TyNj7Xqp5LcUEC5XRpmijkXtzZFrbK4ZjHAaYfYWwBE6AwiYun",
  "key12": "2XjLbFJ7hDaN4jejmYqF6HAipBqGTJoFjM6qpTqQPFCf6qxUiw8onq8Ywj5y8x1hATZifZ16vQHAhnE9V1Ne13h4",
  "key13": "2zPRfxyGEMQvkmbCtYaQ1B76a28xPxwsFCYY4AynGdfqtTbJSmCBJa7rLeoSnbdcWkNLw9BHdVr5xk7fUC1UCqrK",
  "key14": "4D4ExaodWU5yuVQ8pjA3hdoBbgccqHdBMMsSA2AygpavYZbAH682wtrEVe2ap1UvUQ9R9uc1m2vghitW1GAhQQzx",
  "key15": "3MkeTkpco3t9a1F66fAoUXB7ZbMpMaZj4xsbbox3SYf9353nnjXCTsuQsgHC89zpu5SoVkqewKQ3sVFKCCkppjNf",
  "key16": "4hA5Ffp8bYLb9TzWffwNoyuhEM13C5U6JN7ciPPC9SLferV5xLf5XBJSBHJhqHZi9qzaH8uSXYaev2HGJVCm1fgo",
  "key17": "d7LhJtHg5jX334xwLmHo4CWUsQ8MSgrEtjrEUwSAWddBvEyEbVvyQGEK675MKmdWCjV2bFt2MKqwHVDrYWy1jdN",
  "key18": "3EEjXScQiV8nNrfFr6XKCWdjpUEAx6GcMVK26TXMKA3AsczB95L42v212dUMDDdUkFCiwDJUWmTVChYeNyeBngxr",
  "key19": "4H5VTnYNBd1oBXxJjDHh8pB2U96XzRKycvhtNkAxq32pN9C5uEWHaBi5frGPMAmSVmbmfVQzyhJhdvmiBkv7cN5m",
  "key20": "3YRaojT9LrPin4Pb9MPagtuMuTDkEg57LA1oRunh1fK2fVrtSWYPkScCKYFHs8KAZoTk3zrGXpoe2BQgtz5aWkNZ",
  "key21": "2C9VvE5pXKqdrtyyVTrn2qrm7Agk7g3K7gBFhfS3k5j6uDWpUbWy5huCLPhvVamEQc1xBDgTGhvXR2Rp1bZmRf7N",
  "key22": "4XTt3q9GK834kEwu4Z2GWawdAG7kh2md1guPtcG35sqJZTwWxxSy9CcXnXn46wmyWBWKyLZmXrCBJYxopbMpUuYj",
  "key23": "5nHdnFGwpiY7PDWrU1tZtRH1ZxeajWCuq2HntHHvhjUcxmzArkUNPgbZJFB7zsZYRqMYX5jUqoCJeYB2jPBmeYb7",
  "key24": "363Yp7ZM3Va7zRLZ7Qfi8DmXZKchsNirreGAK3qYdxY9cNy33S5qzboT3pRGGGTqWUuc4qDFTJqdAzufanPFP4Cs",
  "key25": "gbX4ZjMEU7tbeCjKmj2xmxRdmGxPxmfaEj1WLohu6sX8UvymaM8t6zZRpZZqvMFjWitswQ5Lkn6tX3Nam8EJeEW",
  "key26": "4emZ5BSQ3Lw4hKka3wqkUPc9qqdpiWTq23MEdth7GAN9JNgMpQB8e246rSML9CiJ56Jhn3X75GSfYgFwZz2hfb9F",
  "key27": "35RyywcETDMAdDjJsh7ZuNQU1RnkqJ8fzijSyv9Vfkq1CLsxVUC8RWX1V1MLKnn33XrYEcHYcKrdfew5p93qCJiT",
  "key28": "4qXARK2e9DhiEGdhkqNhwsspfqPo6eiMeiwx3TyY7pq3XLK7wAhYdNLz4bc7v2ihttkRBdvyA7d29JAkKf88oKVK",
  "key29": "3oXX3pEAzoA6Lm9hQqy6ed8G49WAasu9aKvKJp5TtZe7XzxVxWXASQwhqHrWG4WaSLr6RNjLRi62KeAT1xbLmt7L",
  "key30": "5rnwbZrsgt22ZCrXMPDAtvsP47cvC5pcWZT5WJi1aGpv9cWk3EQmXyKtEy7hYiQ1mEnHRtsXHfEJnmRKCRBsHYm4",
  "key31": "xYuXkDKhaBSy4Dog3xx7TFpTpfHijE449R8nZ8i8qc4o2hRM5TedwkMQnCSjALHhpBvdxo7APiJpfpxpF6e6afm",
  "key32": "4WfaL4vUmT9uSgjZ3uCviXN9BbuW6nnXKbU98Ht8YgpQ4v1eesrmp3iCR2hkbfsRo6DiWzXuZvjGVJkRa3UAs5Dv"
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
