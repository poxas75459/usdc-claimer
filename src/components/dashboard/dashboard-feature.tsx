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
    "5RtKqSzvdQbNMcpSDP4An9iLkkiivyasV6RbsCfaPgrLKHPaX3CoNxPaz6mrAdGDZQxbrZWSg5Mwezbn9TYrYUt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQ2PAzTwQ36jvjystQNrdP63X7DNJmBJDJWSmtwXUJREmw9mQVog3w9KHgyQxFgFNJzbcnaaQkVu4YqKzjvzLFA",
  "key1": "3rbdxXXwnANmJdoKcVNEcsZ7v1p9u91BawQCtixabDAN3f38SXVpfpYe6K3wY1h5dRZiD7H6aYewDqA5ZbhCFmqp",
  "key2": "374hcJW5EPsZ4Jiy6uX9y6XVRE8b5STqZm1eZ7xM7YCSxxRgNEmiHXDsKEnuSJuCC4zQrVQvP9mAFhVHNNtqNAQ9",
  "key3": "4fMarQJpfLmnzDGK1qthkXkg1245bRTn7wsBZDU8yWvi2V3QGkRigHHFqxibvDYH9gEg82Shw3bxZxM535XRn4Qv",
  "key4": "4sf1KzsAU9MrNNeeUYgMLqGSRT4rrZn33BMbP6Zrm3XXUM6SZJk61zXWV6E4qSSk27EYQF7Csj8jV1nKTB4PqW3j",
  "key5": "d4Jp6tWfSyr4JGsP46i4V8SzF76fuU9VunhDhuRVNVQXvbBmAzuTcBk53xmaHuGJVbRChZaGebuSARL6jgqn1wX",
  "key6": "4YdBUbb5NcJrbCCfzzSbj6KaGsTFtQVggbVf1zxySEdW7u3D452xCbK5HEYNEaxJaXJTByZe8uiqKQmLAkMTsDnt",
  "key7": "2PuhTadqs9o4rAkda37EVBL7psi248xgpRCjs4dw1JqAuj6BVXwKy9McFf1am9jVFezk4aHuDTZ3qrnozjrcx6uW",
  "key8": "5o9bWWyHxWi9gF4VuatVnnkeLwAeabkaUd9kBwTbao6VPyZVoACdTqrFVy1A8MwyZEoeGKgxgcMfnnwTJP3NWBu4",
  "key9": "3M8imdDA5YGB7Svfe2iZjhd7nrkFh18x57nWDtwbd5pHBzVVdGiqXNa6qeYw7db6FDzeocCHHkvufhUATLjtdzgh",
  "key10": "3img4EMiaaRTJSnTCSqToYZNfmdfmW1DwRXpXUJGJLabzjkazS5a36ipecNqzCzbWSy2SBg7YQ35mb9TWvmujzTh",
  "key11": "LAxDKCT9YVVtMgEZbfKB7JsPoZYP5zRT5P8EsTfLGB27MJiTi61mGhWYh4We7J8P5BvPuCuQK2zRj5K5XCF6R3w",
  "key12": "3QuwyhucVmwBu5GWmr4ZvBEyS4GT6zcKZCRFV9e2cewNoNEhVwQ6EVgWW1hS4qsP3aWBczb8HM6tQU9JpiVGB2og",
  "key13": "31pGmLm522qhDjehNrXnawn1pVZZzh3VK1KxXbbTSJsK3yvd7jcYQV9Ro69eDDge8myMY8EhaAex5pwvSxAfg7Kk",
  "key14": "2jk7Dr7tD7fEPLYUfTBW86YnzRKfcB6HvYRE8XbhUHSC7YcruXiu9vzY7DLW62BQpZnAQJNgyHDcBg4S7H8pJoP1",
  "key15": "5EbDZ2ZABjCB2EBijRmSmotHAyqyzfDnFwXN2yM3MHRioCvo4H1v8aatQGPhBRfZuC9wzvWjNprCZicACcWgStGJ",
  "key16": "5ocYC37rJXn8ik1b3MCbXefJjRGXBfYfmsiFF8C3LjLKPkvahBbM218YtWopCotzievUMQdYA7AqAjvKENa7Pf4i",
  "key17": "3iCBpQu6iskgRM8tztiCajYyF2Nx1BLfenxTXWGe1M9yNZiQ4ByWrJBaHjdZV8EMH24WU6EUmQ2SDFpJynjMYWok",
  "key18": "4FFXanGtR3hYZTvETnQaiPy2i5Pf13e7pV7hEoZooSq819DifVZLQVgqppghyDhsgJjqexUGbYLyWNHoSM8M3HQT",
  "key19": "kHBQjhCYqFDCVQVaSkCgJ7J8bBTHcMi9WDLop61zjKEVyZ6oNqxFLWtbj9ojz8qvxnaucmrsFHySezRB3cGrZ1J",
  "key20": "5UWviLQvLDWoCAW9gZHJUNMH52XnQnoL5TsTWYtedN6R1vuE4bYwirZ7WMx2D3KLU8QENyTPXuqb5rwyp21TY1bC",
  "key21": "5xjPsn4cWb9HNSLk1gydHmAsnUNmfFC9Y5StaZ2dKqZhheFVWwXY3Fqezh7uoz6FQMSY3xoxGuETCwAUXGMeHUeK",
  "key22": "5aY4EUqp3a6tdcwDoriMWyEfJBZ5XJACrBNQFKnZ8uRbw4Dczpzkh77u5V5WuGDTTe5gPgb6wATUUABvcwizxgiU",
  "key23": "4zcWdhgyN7tATgTfyL6SvSoGHhzEadjmJAD5SUDQW6EAbNAdahg1p8NuxcwgB1Nt2rSFtySiczjJH318BCZHcEsR",
  "key24": "3ehRauaEcNTX1jiDQECYLzud6ieYx2Pyj3VgHkejMJggn286wWYafcNV1ia32Fpxx8tvfNSj2VBfg2vPUEW5U2tz",
  "key25": "2cL79RsiXHzqMCoppznzNBVvMhaaoPvM5sYyMHAishvr8LmoN4aPAoihmoh6fLqqXXCPVj3i6ZAxipqiZz7Axshu"
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
