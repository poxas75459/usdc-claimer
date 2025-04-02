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
    "3GLCvndgjKTj2WdE44dY8GvjamrRPkfjDrsrMTMZXKMkdQZ8EGTvpzKNrSGS2nTvxH5Yf53eZGi685K8HfUmhEw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3oAcLgwZ7wC3MPDXwXXxPifS32cnj9S6eG64YNWGf1YJ3hMuAQa4hR8fpnjcNscFVjDnWshUjA1zGXqTiPNvQo",
  "key1": "67G9vU1wF3TWMXfRpbHUFSVCkW7Jut8JdvJryauAYRKEdUw95oTR9GFCDA5TPYvLZpYMLWboKM2L47xsxnW4xxhP",
  "key2": "4UEoY8sDf1mzXCdEw8ZhK6bkq9u5tgHedCWhCjFP8M143wFYmYu77xbL8R6ZFn3tUcBGYDZkv9EiPwdNqiTFumK7",
  "key3": "2nvhsARKM31ETKb7zHojmBtn4sTZJNPJ5s6cvSkeiKAXbiWWxwLTSjGFFhrRYznvyugkk8A2WwjR3V82GxGjwoae",
  "key4": "66SPpzNXpVkA9cR1m7HB43JYQNyXGFRkHEhQnGmZ9JiwfcbF9x97w7MmYhQB2Y8X7Po1wTPa2vuuciKmDJwT11MB",
  "key5": "3GG2iyEdCNTB2K1dSjLAiuoBdpjEyze46GRSRnq5djSQRHTuk84NVmd44JyeN2aRzHMDxKeJM5eVDhD9MBBNmXom",
  "key6": "5fPr2kCrAZUZrHyw4s8NwjTnNZqER9hwkpCwrGHQ7gsWxnhW9UvBvessGgGARa3U3KPcNnc43HEi99S3o3rvqEg3",
  "key7": "3ZXKFfAQ7WzgAFyaeuX5aj8fR4QboXtbjrvg3EyYV3erMogfhSW56DSMUbXVsrnuMykCa8qjr3RptvYQVtS122Av",
  "key8": "56ccdVr7Mi76imxsZpB6VbKWA2UH7MSChBbaAHeaTqzCpgKW5NW3HgjKCV6XF5HvyG4yiVpbMJLfjL9Yzt7gqC4j",
  "key9": "5LZAsYAk7GpASAquoVce2byMEb9mBE2buPYUNfitJBy7aTUhAHMFojAaCZu16jFwfavDje1fWBeVNeFmdSHydvjK",
  "key10": "4fUrszdpBfGz1AshSgWdLLc7GhQxnRrMSo76q3QSgxyPiyrXB3ZgbD4QWVJygXDXK3APy83pfZQPSstAks8PQTFS",
  "key11": "4W4V99kSLc4xQCdXi3k1LGLvjM5yC3jRbaPWpeQgXEjZ5JzkY83qBvQJWTPpJwj9sJ9tGnZatUwbs2UaVLaJcpUm",
  "key12": "2xYptiLQ43PYLUqYwY3L82VAFzESGm7qw6B5BDpspqFYAFq4eTH5hLYt9NY4oHgzxEMTxdgGDr3pBpAhVfeBnMPE",
  "key13": "5hiHrfanHjnYeNfKpJ3egpu8cA6jTs3WVozX6DC4oD5xWXXAs8yxwEu5wTBRP6aXB2vzCwswP2UpH1gJD83jH6VA",
  "key14": "251pRo63w8dJEkUYQRrC6mh5kjencEamdMyc6DDzJ7HSTQzKDt32Ni4kpYFjrMRedEA6yUsLgsHG3UsZ73w8sJ2k",
  "key15": "3J9WovjcRXJgqVGFgDzB5mwLbqnSnrB9jNJ6cpLJBsDzH4h3wSjiUHQrpsCLda4AX3FYmKdWivLbXRr4Fgab5QRQ",
  "key16": "5UrMTZuzfEUR4XG1d4gRfKyQwepWe6nMEmuVCAX2QgbAwMQkNujfN9D3B5jFsZYY2Yfsk4po85iHQ8yfJYg7oFPs",
  "key17": "2LUjcZizCUqi1zUoqPSC6BcUcP2nVrekfehrhbkxJW2yh2qp8JAa2xno9hsdR92W8JctFpCttvM5fzVTxp1SNRdE",
  "key18": "2dQxKSssRyBnbGdiyyZZFZJpsjv7RVczAGeqwui5SdtoppeWvF7VuL52w7jMKh8tqNFiEwPZQuBcPyzfXmWUgPxb",
  "key19": "3dTyPwZqETFBecKXPTXTqHpMpEqw4zEDsGHqdrqJbEK2gn1obmQhWmBrCNde294eazRasftBJtJ5YDgS6eBoiv2d",
  "key20": "5K8F3crT8c8nF9WRhHPwiTKhBEgtJfpwEmYk9u8XA5J44aAC1GUMWbPejRwqEoLSsyqQyp8exuKn2EqTEVLpYECi",
  "key21": "4UeUBePyf3sZSRs3Ro7hPg28bmSSXi3NAsh3Hjj3TYuBdGwHJrFVVTScKW3ZH43y3fvFq62qppQ8tmQLeC6eYKqA",
  "key22": "62VpNDbGBkrMQo8MBCgBoq8dioynfjp8gf869o9USMU5UVEBkiTneNu8MVW7N61c92CH4pNWkmydstGff1N5xc8a",
  "key23": "3WKX5NQxrfbF4oZ3MXHEomVhZiABXMDscgy18nBkrMAtroa5oQXfjJcuERCx3XAowbnD5MEjJNL6WdB2A2JdPsvS",
  "key24": "3y7eZyiXLfEeHqiRwmMFB8awyefkRpothHe1edtWmQaouCzBgiFPEZHdJPnjFBrnzMCWp6kuT7fmaZaiFwx5kNc8",
  "key25": "A3Nc35LsgSYgrSBn9EfjDFYHWQTen8zHEKyM8tT1EpQcMZVVbNsE6ZSo7VJNE2DGsXLGRrD9U9wyLTvr2JgE2w8",
  "key26": "r6yGT9oxnxpbdjxT9V7bBXrn5E6xtzq5zcNzq5n1S92meVyEsm26rQCp2xmNz5aRgXbkAuks8Qe16pYbdyZSnfm",
  "key27": "3CrpZfUZRcUpj3hoQfYiNsQSg1D46qG1WxeNvTiuAkW8qX77wFkQUoHhbvKvvsuAtdAG4VNUA72oZW4daXECt16T",
  "key28": "4YegDosAMBQ4yALbhUbJvW6U61ETUWvR643Cb9zY524HGBukz7Zusk7FScyRzNnVzwBkJE4zkfzMKRJsqkhQySoz",
  "key29": "3GhFYjpvGAvAsMBm7K5GeNTVY5q9HLwCBFEjNVq2WbMora6bfMTwP6GsvH6LJUxpmQiSVHTS4V8K5h3YPyfwudd9",
  "key30": "5C6Tb4pnyJzqy4NZ8bicJ7UtXbudi5NFY6z81ZpLSbgdb1ZsvNPysEaHH7DU4t5vhsWpZEa1QvZkxALkEmYw9jK1",
  "key31": "4LdenXdioFFyA5hDppLTqcfe1hoYwhdp7wzGN9KEGSMFL52RNzAJx1vz6JVEwHvvm6FwZG3HwDpksjnz169H8bfs",
  "key32": "3at1bb1cgebvrQgCdWbKurNxqvPkPUE617GoNBLEHWbaQYgYoiQ2srFBbowF1jhjMmR4tq6Y1DAeWv8Xgt8R1cHq",
  "key33": "2qHKW7qvsiJH2AF1geMK8X6RiZRYVFhptsQTMDsm3aarDqrNty9WbrQCu9CzThKFWrZJqYBJSEvATkhHNq1ZLAeB",
  "key34": "2qPtT2t6GVes2Vx9VLiKhR6LLyNaay3ahYtiQrqRqmSfPNWMYjmBKHR7QNVtcEzFqkSpWLwk99CyJLNCSqyFdHTD",
  "key35": "4qzhVdrQvhJ1cKLckRcuNZTVwhjmsZ9AS6YwLVcgu4ZjDperhfGHNYVxyR979oXaDosW6Hn6riiuLcgkkPQEQxY4",
  "key36": "2nkPpYPuztxK1zGYxQPNNmWKpnsY99spPmb1wNRYQyLUbsXg4atTKc54su5qe3qhAx4VKB4USKBjdV25rHsMioA5",
  "key37": "4a3hzQrHygh3YvYUS36YP9bBoGkqpGxjP2yj5pB1iPshLuYBXYvfkS8QwCkRygaS22MxRuBt9TK4TxtcFgsXXToN",
  "key38": "2n8cYZbPYig73Jpuu8p2TNZ9nzCUAuoKqpojkX66Xz6QUa6NcvUFZib5TtX3TTHHaKvADhEZh5zhXdxP5YBvsD7B"
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
