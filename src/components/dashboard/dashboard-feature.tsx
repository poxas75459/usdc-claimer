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
    "28Ftx3BPqV1W9D4TWS9JuxWhoinmm71c4FuDZwJTPZ452o3pgP2C5rqHtbzYbvYpR4HVYqcwEPfyP6dv3ud1VFGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84nqNdLpBUiPyvL8VvEf9wHNSEmphGYGchSXkpvyCJnBpxpJ8eZ9H1nWAxLKyY918kUA8WQbYbuGgydRywAGyxC",
  "key1": "5pMh2viKh4uiYw5M8PGL3dEgKQD7vz2kpAuyegRYUwYQGgsWtXgncptrRq9XjR6mhwFLXhM5kTsj3VPRYSUbY49U",
  "key2": "2FFeWt6ihjD5gWUuNBRNXQNNWgw86k7GivMQJZq7t1W1MXThn2K84ZiZQ7KtsHe2mr6XanDefoVQJFFWsdbhpkiw",
  "key3": "5GBvnJXuobaLqX1Z6ZRSjY8B3CHYNih6BLJb6c8t6QX1sepd8RcEDbjfZt7myHBeitinaoBUMPvtpfYBnkp8DVBX",
  "key4": "3dUcKfN1A1qE9u5zwYXSgQ9up788koVaDupSG16iXxNS6wKzFEnxxeks4SB1ZKTYh4SZ2kgSnVWy3w3uaTwQtqXj",
  "key5": "4rrSbKRuKxfLQhsoBpsv6M3XtaGhKA9pitpZYZJPiK127o9UQrhafW7KCVauvh8jFJS5Zadu4e1tzgP2fwJxdUHX",
  "key6": "ePg2EdEUSPx4UQyWSuKmaKU3co1bMiVL17KkjjTWUVDZSFR8vjKVCkeAxvx6uz4whcVoL8NLjQxUGStWRmuJDbA",
  "key7": "WvPv8F2PQLJY1RNnsshqKeJGrqw312GvdzZ7iJZyg2oz9vn6cMPYkFAGPFp9Y8qySy7uCjw1mnJpdU59rf9fR5x",
  "key8": "3eLoevh835yQfYiP2myCVsUjcXqMqxr4evczJAL5mzdWf1jPYFqTQDgf5pBQW6iUVvT92KsdXAVPDxxfQYvKpZw3",
  "key9": "4gJhKZrP6Q1F1vuxW3wLeh6UY3XgpFNA5nY7jjHt9MweuLHyBTKa4yfRkY6Re5bwWrd7jYv8ZGhkupCEcpxG74ys",
  "key10": "2FaJ9oFEKLenzxZkdS17pf8HDy3xT6ory8yb6FbXcgLBqkeqd5KXTwVgHcjpNtGvV2dy16nHAnVtQNbb95uBNHSY",
  "key11": "42siLLisGTyd3bJ29UNx5geq5VmzjrZF8qEriHbkeeWbtHV7RG55nBUDKokBAwdYtuF4pKoDDfGF8L9NYSzjPe38",
  "key12": "2ubhj7hWMM7pUUqS2pXzFMxMkRPeLkp8PPjCuLqkXihFKTFzeLFZ1xLuH3r5Fgh6y3b25NezVJ7gAApeCQXcMjzm",
  "key13": "LNnrDKfWmwy2YGWFfwWKCckRxtjGgY48c22gTVG7r1vdMeh2XeqW61AtgKrLWByC9EopiFjMkDoMtdT9xfMhXE8",
  "key14": "3vbz8rBWXnVuKhX1DCgiLsCVxMNxEXjpnpS9im6Umdh8NKrvHGTYknkP8NmspRNNd2oU2JJ28R1Wz4yVvhoUPk6j",
  "key15": "2M2zFaaFcF63M5v7fDkPzX8EJzewapxXZarMREjENiDUKowmAp7jCeNxe5eTmhJrfcYQjzPX3gM67o3czVBfZgYS",
  "key16": "3ZLuGMNnsyrvby7pNS1QfNd3ivfkVPQYBJLLnN2Tsoo8GcSQSCDWMpRi6Bv888vEXBeYeUbksBVdTZZTtpnPDF6L",
  "key17": "2KZYweCebCkVjf9wQEChBFWe58KnZC6GRwHBsZgbtWGNDcTaAsxmxaCoE7gfV6Y31HiXyCLxfq8JGC6bhek2BZxg",
  "key18": "5Eo99Ln7Jfj5Y41Rfoo37fBLDhftwc99rXzwHfof3uHrpKzqHo5S8L9fYsC2h6peXQcPePnkMS1wCaSpnepdB21H",
  "key19": "2RL199rcUQ3HLuMyLZiduyrjFrNwE6CzMWZdu46JvFJaCJ5tcDxeBtKw2ZDFmuJuMiu3NxTv2QJqAqSijYxEtMLE",
  "key20": "4t5FPgNxjYuhXNTetjM2pW6HgmdX6m8oJTGnHsB3ryyZUFUQZwYC7V71yWxwczKZWpmZLCEzSKsC5ps3S1K78uqR",
  "key21": "qc4bJQoJ8tb6kAREqpikp9qsVPj1uEHUmZGWtMpMwvtJScwbxn6RoRArqWBGKmk7Xa3JAJKgyrdEJR4BKpwu77x",
  "key22": "4M5vuo2ybwXiWr6KTJZf9NAkpXB9BsoHboopEX65Uz5A7PjrN9dphzC754MptHidt6LvBJGjVgbxXfrGtxDFNYxC",
  "key23": "cMRCeifJREdyPyrqHaCn7WgNVbvh4MrVZkvmYxoUbnYYbu4fpjHbJpWpzcsvc5cCgGF8rQBGdXnHdgkRCDHHQtP",
  "key24": "9S76YHGig2CSChh8Grn1ukpS5fNJ1T1tzsyR5rbvAcVEfJVruZ5K1AF6SSnvDpoxojFJ26YfbUPoamEYBP4gwcM",
  "key25": "674DWC1UdKPfTJwrz6zhSMvooG1sQYRh4viEV8KExrj2xpVK8z5cKvdhMamirxuoeZtrc8MccyPGsjQ2DAePCjfi",
  "key26": "5VKjkwY3S5H9KRxToL7XzxtRBCb4AdjjmXJd9HD24AW1MMiX1Rq2ZgqDZSuSmBwGPiLGbjKCz31YG4A8QqTMoAJP",
  "key27": "zqDqD9LhWRkdJffLr9BYk78NQMK1qAAn7BDiso2tdQwUV9qRWmJySRBbj1WpqH2QTy9Gjc8S2yeqx8cPSmzpprK",
  "key28": "42VNypvL1v9g9CZnxAbdzfmWrLFqUjkLEhtEzyXcCQ6AcckBcr2qfhU8VPnATMfZPndmc3g9d3aMTsYDRSirSWE",
  "key29": "5nijjBZQbb4moF3RJcDAKmbVkNgiHBBfLoGbzaXEAhxRT2wVVGoiuc5jRi6MLzJ51zf7TbeV2hTDAuNX5pzg9Y39"
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
