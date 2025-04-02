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
    "66jYRrKRbQD4783ruyRrGxVLgS9W1mZC1uCkxAxdXp8oiXTRnwP3tdTZmhbBVAdYNZ3ZsvP4fXX6pgViFLNYjf3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRefvLq5BCMtDVFnjMyQoaxLy92Kf5YA4XcPCPJSC3nyiQKzxFVpnKn9U3nNM1kyJE7oVUALwBw2ogYqJb1C3Tc",
  "key1": "2kvwWcQtHyCDtjvH4yzXLRXXB8tW8HcsDfzsvZdZvEokKoLiFCCKUzu46KNEYFi7pvtJPvfijie2afrhxtUPS5Q8",
  "key2": "5xpesz6UdN7tu4qSdWFfiki2swPGTAvrEa1EfindmakivZSBfJzrHy46tReXdASCAt6Taq1NEHhdMx5mtDGUJAgU",
  "key3": "4eBJUEmZpmAE9rVwmQ6JDNs3hCYix89S1XLpZh1Mpdgw7sX4FX5eKbzDCBEAgLHLM6BvdXejqBWos4rKFB5cJW6H",
  "key4": "2VUCwJCknurQc3nnh6xZsBqVNMSjAAUwAvRK6uE2UsSfKRLcgYDQgxWW643ovv7YVNzjqyVK59ruKukUeb4c2etQ",
  "key5": "27uH7Z6UMuxWCAeSwTvZQoxAbrxJ2y2WWqQwEhH4hChuAPpxmTskKhCVEYd6inDcnCZNPK7UvvjNWzhdPhCcnhHq",
  "key6": "XXY6PbdBja3SDTTb3bbJVHaTLVVgipHmV2z3mqNfGQRBA7qGDJmnNZowA3Z3d6SMydHH6Z93TsPKA6watSrgRGh",
  "key7": "y3ginWBaLnHhBSyEHUWS49gEyfMXYSzM4fVWQ5v9h9jNs1fy4eAiAH6xaer6vDeDLNMZS9B5xBSXMSfNrNp7Nxg",
  "key8": "62pqJRy5XPvxA8Q8LhTitMXCGK5b5DLZ7Fs8ATmELuEWxT2XgBLs9guZYPps97HjHFLhtL9Wd96r5yf7M1G1ffuV",
  "key9": "3MAcBFWBytvigmS4TZ7WGA1YikQ9EvFUzPo9s4aqFbbuzUpjEDPW2UKxPiAJcDDh8R2fYKgbBW72XDhvYryo3gsX",
  "key10": "2enPe5oksyJpsgTgtqpS1Dm7UUkNHKBtxdRxoqbJiHTF4km6z4dy6Uo6aKf8eTTyC92FbJ8s7TYdoBuXYhczRif",
  "key11": "5LBHMFEEDBst4CVcaAKocuFwBd8KKKAVqQDqeRAiMiBWjAeeGCJ8iEjCe7g6B19WLW6EecWQ7sVRtbZ5HSBMKBkt",
  "key12": "5zvcC3G7Eur8J5XdEhSTuLRbtZtY3xiqUxed7ZXobiijc8eTDfLGDqQfHaDMJgCzqVSzRboHKjn5LFZrbmnk7FDL",
  "key13": "5ZfrDtU1xHQYHGTDt9jJkrTEhKzNxYK8NJnMEeMbZ2HyrS71VYeiWRVzATnUkBZfxU7iBvR8QA1duPaYqFYnFcLv",
  "key14": "3Y5FoX255G3YenaRXVyb26rYjRqo775iPAQg1RwA5ess9XuQbEAFmHh23r3nwkNfUgztanfFA8ygaEoTB4S6dFfa",
  "key15": "27W6BkK3q5UEm3JbQ6oucf3cV6YbAKisB9JdBB8uyR2RUqXUq8mVqAB4nViD9SU3Y7BaovQKY6wshkX3okFfwvn3",
  "key16": "3LLQrJnPGRG7qGXirnCVKuJRKaTxNkQHnZXgT1FbL6CzDRkJQZ8MTFR8mLQnNxQ7Uux1rdL6gSSdSBdxfp6GTE7U",
  "key17": "62hXoa4gDjmQwZbXeMGR6Xa7CyTCuBquYPm2Evwpxvdmubp48jWCdbhjQiBkbnpYvyXtRfCujjrzZbiFCATY7TXc",
  "key18": "4tNph2gNF9ojNRHmcbn6aSDBHKX46GbcxUacGHgAE7c7PRNUFesvv1C68kURJ3i8aYBqauEc5k8TM14VPaCBYxGf",
  "key19": "5rv4BAVsK3vRnBVdvYAtdx2rVdAedUYriFo9BUWFg7msmp9oYt3G3fcLuUfzPQnma8xJa2CmSxmsUqMgqQugMfvP",
  "key20": "2hdKmVywLDcmqSkQtzWDLsx6eySc84whjj75oH3tMyA1ugcY7Z2oxNYBfXygjwUqGePNQko548ydbUqS9H4Wts2C",
  "key21": "3fh3dkq62WRazsWXdvGWX38KcdBsB4nccDZEXNMVHWjZWzdxqaQ4EYdGLhYev74F1xUhTNUy2Dp5nvuwWKNoGmxE",
  "key22": "svddPECwx7646PGJvnwj8Db6XBPWc7syon4GArNr4ByHFnunH2pfhZ5njsFE3WdgPypjBbMkQxo2BFGGgjRPPG1",
  "key23": "2LsYRUffbSn95zMDphhYqDyjzQGnxPaG25WbSbGFsU4r2x3zzNGmyC9NidX6EAHiA1UKTY2WzHjpFkEZVKRZBEiP",
  "key24": "2qYHLp7v4xrDNMLtbiqmBWmSo8b3qKNp5MWkmnPyEferjqAGMmK15MvQUa6ckYJ4cyGYT6d9dYpFYqEg1YJgL7ST"
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
