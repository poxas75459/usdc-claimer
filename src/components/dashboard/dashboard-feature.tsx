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
    "67g3uEQ74NNrVCUJvUXDjMLuZTBYdVce9dsjYJpgQJmJZHZSYE7zKHSvYgi2EFLRYDvQVqiawa1xkhuzdHGxUNFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umnQykkotTzduj575M2x9qHKmngsqtKnsGKxFpDyLPJWkmmGor98XdFG9o8WtuRZF1ETGK6gXC6BFXvpX7F4kva",
  "key1": "4jLKi26vUBekD84gTptVeRiguuL2iYnKxEEtLaKGckxTmK4GupgQgiCo6HuYk8e5HPKS18kU9NwRsGUcz9FMfYkp",
  "key2": "wEtPQdZuoCBUQ5EhpbpvnDqQunudHR4npPCgzXBamB4aGeubmQyvV2uEhxaWFnYFSXVfCuSMPH77FCvSeyGyGrz",
  "key3": "5go5Ltv5m2tufiq2t5XhuEHVpRyNudh7vKswj5fJPwHcknMm3GRNqrHRpVAQw86KnSwmb8bZ4y1bTkGC9bjLZ7Z9",
  "key4": "4bXEGr4TsJJk2qiLeN2AhzRKLF4MVrg6dDJF1WbU6iULiYzyxGe3pAEGSefdNvvTYPrfa58G8QbHu2oj5ZCLM8EB",
  "key5": "VB1mtnxcjSiM5tRzBM55FrGYtXZ1ismyPvp4EoHaJhyUcP2Kim3SJzi9Y12cytbUo5aZBJi4FC9mDSBxaqvEZTo",
  "key6": "5nGy17DCrR3xATNZJKyhacPNKFWfy1CA7ZpWhZPpKdQqzwHucrkNqCywTc2bM4MP9ZgzaciBLrVg8ZoEysXVio3C",
  "key7": "vjQJjbgHeE1LjPyz1Va8jBCapcgecJQMCyKj9dBgKoLS1VqqPgbM4sgHv1pqGdKutjA9HiFmLHpS9owHP1KUfTN",
  "key8": "5WWqmfaFymrn6TtmVnigvRGAWGpz42etLo1k1StY8daFJW4nRNZ6KwHGH4kTsjtBbEt5WkcnUfTr6PjnbYCy1ZNk",
  "key9": "4f1kvU5K6wRjKSiW54jcTeyub36CacM6YKAgYpEixgcrf1nwRD4oDtyVaFfM7QwbAXLcSfaVVA82d4SesYh2ESzX",
  "key10": "3hG71L7Kz7UXuKdDfxec2Exh3ExwkjZcwGyBFSte2A1ygvywB3f7dRtD7zZKR46EpuK2XmvQFCAiBeDpSQWCguDj",
  "key11": "2xeuZjS9eeap7LnDZygwgm3rWyNotq1i6Vsrqj1LyN72aAoHyYmktCmbvtQP1iVQr2siL7MZ1fPtaDpKLEtjM8Nd",
  "key12": "5xa9BUaLpTXxWiLBDAr5Q93CPwWxspNQ2eFhxJxKiCKXpXDdVbHjpdCwvHhN4EieQHCJnkYQVYD9GGgWUEAPp6is",
  "key13": "2vzcqv8HczcPvPXVth31AMkzGMy9pFsiFmteuF2p788hqjGc7PYuR8jTFmvUvoY8LqVzsnfT1DXmYz2hvThd8eBq",
  "key14": "23xCfkVhGq8YQ2doCKKZgqZbAzzyox7oNf39jWYTUcJ5chcBzyXiXpi5ogWLJJDcbedeR148F6BFHXroBn67oGXy",
  "key15": "YrAiihLty3dDrShNBDRQGKZbZcSj32HzbsExd9sq5EmqKjNx6d2AFUaEm3bsXjZHor62ARVCvSe3kJYviAa8FUS",
  "key16": "4JZreFoVW2SYBVKfueKwMwMYFNV5GmcwwD7YYBAoUQg8zmjtydHZF2N1dFKEaTP3rsHb6AjWfzAoJJJpuiffXwDF",
  "key17": "2KmsvphMsHG8MAcgxypGcn5YWPkBkLx2u4YbJDZrqAdBWM8DoQRgidZ35U3PSx4T75jzAWCBajVDiwgMxRCK16D7",
  "key18": "63tEBvKErz4LZt9ooRwPbY2n5Tvxhryh7pLPWD94eiXLCTyv5zonc7aft3GPXtxYbpwwEVfCj67ow9ASqKMjgkTy",
  "key19": "3WCDGbHZP4tEkfXo84kniXdmaALBj6C1MvxbRpvs3wZ6QhaNgbqQYxmmF6Ya6RM3eEEhMczDC5rnELds8nKxpRr4",
  "key20": "3dz1hJqfE5tJLfwaLb4YaL9B932KYkZ5DsziE9oQs51TxWppzt5UzLHN859EhhHDt1ypNnEy3B1SPcaFt5Y5zEQ9",
  "key21": "5VfC9bV4DJGLoq3HDBDgfGoXNmKPCQtQsaQ7Vi3e3G97JeB1qWUaq7pEk9ZJvoujUMDYoWwdEP3RudgrGHttkSYg",
  "key22": "4naeaKvKaubBuHUZyGFtg7C2BZhDpuMwcHNQjA8sYZmuT5PQuX3Br2qqBmJ35xcbnR7WL4vW8pQTdehoG6da9drS",
  "key23": "2noRA7wF973jBGRNFWmhLrSzP3YCk1z2VKgGmtk7M7k1oernAMqJqzmRPe9jkxyatAoTSnk8mAJL6BJanNp9KhjT",
  "key24": "UqwxUXzrSfNKpozJE9w8QVpF3d49xdK55w8w6d81Y4KN8jDmK9TcdeTEUPACBVCezaBv5E1DQPfqWjjHEekeSMy",
  "key25": "3TCBzUa2BUJfZbZsoQEs8Dn9oKRquuf1WkATV84FWf3EhqFXDBzvCFRVTqFY4hoHUYToLtanYYWVvzzWwFJiFySw",
  "key26": "V1is9BzE4bShW4JU59Gr9yRNGYgffzGYi2V8ZhD13hQoGCy31hGmHMGui27SY7YyYktkzgQoFvDQK9pSBuCweNr",
  "key27": "62KoXCpQr9yybbarVqLJu967Mrj58GUBVVavHztJt79NTKQeUXGCRuqmgZWNJaJT3Kj2DhpAE7dfkUNfcRjAYqcd",
  "key28": "38H9ALb2jigMAAVZy3tstZxu5hZUXbtMT8zsGjRAN2hgLqB8dx9RNZ3gCurEDM81AX9UzVHoixcHrUNf19D4wqBn",
  "key29": "SA3h5fdcTnrYfTtzJmkHc91YHPywVib853hNTeK7YU77gkmbwpe42LTVqceY6Ykp82Rf3E2aaNZeWSNySwuP62S",
  "key30": "5Z4e1MKraaK2P8EjgbrCNsWPzKQDcwfgShzBmga5JbYFXgwjU681ttL6srt1gTNHFJqzTVsv5tfDLwS2Meii4pcm",
  "key31": "3UpmkkT3Xy5ay17xdVTJV5VA9zE1hZHwtTXJaTMGiu8ThwxyKWCHRwAue1gNKjHFdcHoTFuuqpq3URXKM3mCV2nb",
  "key32": "p6dwqnYWNay8CwsHXTLYwxVyqN6rrA2y9EjnkQA8bkdGm98SqkNUtS9x7y2Qq2mXqKz6H1SZUdJ5JEJXfo9Voxv",
  "key33": "ECtqkgdEfoE6UaU5JG1FaLgJNXwQ48AFN1RUJvkko3cRUYwXjzKVQguk3NCrhzDJQCnKLew9wmTfqQcbz6TEFaC",
  "key34": "38qwEaEiPZ8jA53CN9zCot4qXLitPS8irhPDubnyCAmru46JSDZAnikb4y7Se5SLJDHkrKPmJS8C15MYKjALvP72",
  "key35": "4CbUq5qUVZ6a64Lz5E23US8okgGrDAJZ1vAwXtKhJpNKG7BG7u7KeBdu9XnTceDQt8QXvoAYXk2KpxzScT6SdpwK",
  "key36": "3YqiaSpDM9pHsbLFcDxx3gtTX7EKtHtDC8pqTMwbHLZhJuWzFcrNcRtrAnDrrSgSKz28MzPkVPNTX9dqohhRTJxg",
  "key37": "5WoB3aWqV4tfbyMfop2y1mXCqfpdkwtpKLd5vZ5xcPgE2VFLiuGZVrbxb8qJhT4QC8FPtngg6UPdQQk3btDNTmDc"
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
