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
    "3S7zXwBwQo9g2yXsTp7MxUCywYFhuHeoZ45cdqKMpzF6CPDa1SNCiP7HWMTafFp8tK6iWUAc6HNHKj88TX8EV3n2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAxDLzn6w32Y4X3m4ZxsiQYjkHyq8SCzK6AakZsbEdQdy73vXG61U9tq4CVtE1MtSEY5xLa3vK4Xf75Pv24QyfW",
  "key1": "224Jn7hytWBwN2yrDnyeNQKXDzhH31hHNQUB2uDrG6pUhViSdY7N7zLfk6Lf6FT3CB2nMueUb9Taks4Qnb5WWbNC",
  "key2": "W9eEaTYu6c6yCmjJDS85Jd3ieKkSPqtFUXJGBWSqBr6aujBPyzdcD5xH5ov6Mn8ZH5cpA5pczsH31zC8GUgV3mz",
  "key3": "vCDbSbX18WwHqW4ZvqAd9KdhdDomJQYpkvu19d3TaMn36zWgW1A1Vn76WJ59Sx4QJAaR7rcrycD1uS8y2FLg4nm",
  "key4": "3zACP248WZYwjQDWYwLfHnhc7n7jaZLS6jUdYureJvVqCKKG7717K5vYFzmua81RJHG6kFAVPWgJywo6dhbz5XGS",
  "key5": "5LW5JmpCL8Ni5ZxMkxWVnw4ym5FVNd89WtWk5qfvsQ1bUm5iai5BiF7cTgweuiKvCtQGtRtEcaA5Eb1VLuNKU9zd",
  "key6": "cFiZ3ZGiGkE6DbsTYp8hcDJtxoSKpPhkJ1CyiQwhCSPRoCAq5ef6cXsB3WenhyaLfAFicgS9d3pZrqeLDuAWA8x",
  "key7": "5ZuKgJ5LYDMbmZom8yKnqDN84g11GzBWxuEi2wDm9qsgUKRxR6pBLCQ6tKCDnfCYVAnNqbPpkiSm9fqPqmvzuS18",
  "key8": "4aT1iuPZ1r1r5iwTGLz541A8mHyuQLKJSZUhmdRwnbYBteKwwvq2pNYhFiFhRwLNsvJFtVYmJYc5UKqiWHV8qQKk",
  "key9": "5zmwnVDiJp2EWiMwrCJjqniSWEjExhiLT3dDED1C3SNfApHsqTekNkUZcupX4h6SmUJW37SjbqgtFbXAaDGDzbt1",
  "key10": "3yDZ2694bZvftv9S8GgF8B1K1bPfdLHSBDhmXjkJrVpFetoSGdUB491zmsz837ohC4QVqoskWg664WZrANfr2Sxv",
  "key11": "5xUamXBNNuGzzcpGbsWfQmFBFkhN9249LPEBLHSGN5ngGuhMSiPPREfKmfA7ZZHKw551eB6S1LMAs5H8d2JzArP7",
  "key12": "42UfhKhZoJHXp9aRpSNW28XVKAM4ofQcvZKCSTZ9dED6o4JGd6RKv1H3ixc8PhzydQLWXFAx6hN6rArNiJSxJi5d",
  "key13": "3dFbVoSQ3PaESRXogGNVXMtugJJ4S49v83AnyzpVLGCo5Wsy73EdUthu44uyPhQKQu6qKeNfZYxrToXPW5r5czcS",
  "key14": "2tgKtYeVL49hoKWLFQCkYoLY1vAKqgb77bMAi4xFS6wKdwsbf9RryeWDVzkm7VF1SDCkxdRYhum3VVUdGeKLLZqr",
  "key15": "5mNToeWfPpdrLBbZSdjSpbDijM4fK2H5yhGZ1FboGEnVfM1GBUVtZ5bwgjnkVYpVxpubqtYcnbL3SYSsjo657WdS",
  "key16": "4uwdLFBzBWp5DN5uN8JTjoyYifCJAhPzQMik2Xdo6DVidDXsGUMBczk6xjH21fEkQuHET88fFPgvuD6FWGcUFdMZ",
  "key17": "2K9cp91cowVgm74scKMNqQZ1UTF1qkPVHwXA8Fp1FQY2NcKCDaxLVNdp7hbHpFRfyNPMPVzbC3UujCNbs9tL5DGd",
  "key18": "2ddExkxjyEMaJdZFdzu41nm3EQ9giysnt2f7y3yLikQKPTkuLAKoshEVT2twPSHBfBL7D6s5ii4T4ffPhUUCo5kP",
  "key19": "acFmMqsqJFLXTPwUn7p4bXpSaSQMVou6LohUBJ7g1a49VTqT15r8LqfQTg9fb8yzfrroL6scPbkN7VwrR42rna2",
  "key20": "2ttd6AXF8ozMfqp8qYrivHkzL3jN8dZHKshXJDzdpMAKuUXUFFTqynMVyGJfeQzsTC7MSDPzfUbjUw1n3g67M1aM",
  "key21": "5dzYLB6VskGGvz8dE31tjLhAMRkEVy2o8nqHAc9MC9UW3d2LZPpu3vVn2X7PhE7TWuVxa5mrFG1HBwgT9Xeyxidd",
  "key22": "4qX4MsMXX6LnQrTzhjuhTkhjZjZNVVytLtanzQp2NC9weJtnqRYNjmLQHsGpbnzKLo71FG9MK761gcJyaN6wKcuc",
  "key23": "2kXfHUACrCnzVSGmv266gBVNQ6KQYvXTRvoQhkx9swdnzRX6Z3YT47c1fXNAAd7PGfhXQABjac5ZaHYnVajjCu9H",
  "key24": "2o3Ayyj6qLNhCdeQtnkHkuWMZZ1oAHNyS9D3pF7Pt49syeuieBoQbptpkzoDB9ZAwbWi6G4nfcLRsDM5dN8rkSAc",
  "key25": "4zzBea6N7R1sUXMeqZvYvSNG4Lb7smfmnnF7obVJ55NPsR1JNBVNDfJyJoqnzNJZYBKLMWgBwEVrSaNGexWpKiiY",
  "key26": "t59hbAcri8aF4oG4FcxNJYS25m2zSN7CzU7AHoh8hnrzDyj982dRtpSc8PxBxDiLN4M7mZJT6noxBAJ3vvjAD2D"
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
