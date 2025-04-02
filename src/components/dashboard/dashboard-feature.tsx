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
    "4yAM3z1ExpEsrnqRQc4Ee4bD8rJHs6PpdpG3eTs7k2QCnqxUsFzRxzzJN7CZraEnwaXjN6RshwdS7HqxCysqZppw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m27iYLh9RyKPVjkbZ3WebJoaapETPAGP6VLfae8QMupzDCPoyuhdDosNjr3BS3nfvprZwcCiCJ4Mg1sf69mbqQU",
  "key1": "5AkAqpT7QtxLcWA7w7LPppKyPpAr5x5pezBvNGmRutTL4veQTBuSgxrhR4LQnRKZzhYRUNenXL8JJAuRZv1NzdiG",
  "key2": "5ik2bBQbJqajLyy5pFfRZo2LzPaihEe32KSr3PmWHFKe1S3tC17JARsg8nPbVkE5jzp14FBAcYgdb2GH9dDNDdgA",
  "key3": "2fBpUfv7gnJTDUcuyVS3vAgMJfyUY83twFvadyXo7FxCb1GbmEkNd8qrvnN7DsU6X4cCCiqUBFjLUizQpTEi3gob",
  "key4": "4vMgRjBs777bMftuPcXcE9im2r8Xip5C2wStrYCaXATAh5RgXzpkjfHvVBEbJejzkoLpZkiKQT9Tc3da52QpJprc",
  "key5": "2VvztqPoWBR4gkX1RUAUo3usk757bsoo82TbMo1eucC4SMq8qUtij659Fc4ep7tTHLg1SLZfu6nyYA5sRJ2k6pRD",
  "key6": "3gzV5XrvqhBmBUxTdYEGQ2HMk2HCro2MuTcx4FdRwqEJ2xADmWNoMMHs1rdd5Byydb5h6CMoHAaLLqq8zu9upvos",
  "key7": "JaKrJQdHoy2dxxK3jRKQtP8sPHzvdjATWdx6sQmfZxoFWzNYq9S5HBZ2JDJ8eFiedXt3JmSGT1ZAZ32i1VvUKe3",
  "key8": "3sWDQ4soFy3XCckXNUt5sNSht5Jyq8m78JU5N8DQgRszz8YWB8WEKAwDx3188cqFfVBd1Bmxgc43m2ai7BBBL4Gg",
  "key9": "55zPrh5BhnLgRcKmkJXWbM5xXQkK4HjHgHhBkw7hxBCnaQoi3LWMmHtRbDr7b76wpvqeHrxZikWpbUyjhiitK7RP",
  "key10": "4ChwXgugv5eQ1e8iR9DwchYGUXkruT7MGZPJLe3hxbpxCTbMKhfYXCTyTiaiiHmgxyYM6N24E8Abx4Wpnh3cK7Bi",
  "key11": "5x5U8PvnwB3bckrhQzGm656GcbuKKnm4rHPmzwq6kRYiRsfzquTXVRyThaPZtcZJ32AeEDx6MDFVjqNQhUuxehKz",
  "key12": "3a3MKrtJBKC1LySEHznCzPP2WZNJ4EWUjrpMT6exo44sQyFzm6RCxUHosc8ayhW7XgvFbF5HEw8oHeNTHGjMZ98Z",
  "key13": "2Y28bUvwsQZoCWAEUnSJR5vgCqDCcuqL3x3aKEgDkrLnEdRtLXiQsZ1jZFsK2TstswqwZReFaBHLsvGznFJd8DPz",
  "key14": "2K55vCP5dqyT2LLheKH9wWkN435Y6LmEnWWsRGcUpER2zvudTzRL423A4ijKX2Pv7QP3W7aX1LzkGKDKerEcWCdC",
  "key15": "qt6xGqsTuVd2wMeY6rv91STD7xux4jeymJ8BKcYPSxskjcMkYZQ5DyBzJydj2gMm69xBq8zMr2UR7SB4igHCo77",
  "key16": "271pEVjuaBytYyvnTjk76iw6Q5aVBkcJCDemzaWCusSYdHDhpiMVx6oVtmk5fKHEQ7v4gpKBcTPAbSM3JxGsUqxS",
  "key17": "4xAGTTo7rDEuYTGtPcRpoZkMJLuAj1XdxAypy1fUhNBCYadP5YpmevGLH6j6qDS6Cg8RG6HYWVwxT5y3ThmNsWQB",
  "key18": "3Cvm9FnjrbrYpLt7zcDgvzJuqJUCJexTEMSe8Q3h4sEdJrhvEQj5QivUhPmeQPStJ9aiyw9Fx2Z5pwcP4372yxGS",
  "key19": "w5S5fxtJRPxE3Xy8G2DqjwVfNaYMXu4x5Z5Mx3t6NnEgwfEVtnDVhzV5sU8wPgEzLj2Sh87hbSWpDGvRbj6BiG2",
  "key20": "BPCtmVETiWz4mvypFxkZaE691AzLCAzgZrrH3SYRph7wpDnZfWvWjyapwKroQLNK2R5deN12dWsofYx5ieZVVPm",
  "key21": "27NEsde8y2VEKuUjSfp7LDN5TM3jur6sjpdbRE8DWRAUBaTi9uxrBDncdkw3kD7FJT8ai25dEydBrak1J6ysPeP2",
  "key22": "2Q3JpJ4Gjyzj3uUdTRqFFCVNQLQbvmrLmRQuNWqdX4iH4mXdxVxzc7bvq8rw3jocb4AcHHsMTfvd2oe88Li73T8d",
  "key23": "31Nwa8wv7GiWhkVV8bTjFBHpVhYmbqkbBGKVnuWRgjg85oe5zEyCj4cgVPSPy2ks7qqDzzmqftiFnTVNUKXAfHMv",
  "key24": "4RTBYSQCQzZ9bXv9juWvdxaqew4u5y9wk5SkoCuXF7GfWyAnFWGJ3X2rSfkJU6xJ5pvQkwazVK4RGpm4RVWtqXfy",
  "key25": "5QxU82TC49qXXUJMX1TB1FKTad2V9PBRyXNJY1EaWYsrgUwkUzi1iz6ypreac5gvXZyAWDzvHJMDo2AkWJirB8AC",
  "key26": "5E9rUfxQ4RPtT5Br3F29AN8EgUENEb5kc68ng8KAuSH9ffew5XLc6BUvhWANFu8GFNmmtNrXGo81C7qbqMw5v8xt",
  "key27": "4pDSCt1pbwMsfwT1W8M2eEvhfU6nRHJVUizDsdnTSMVaGWJtVxcGBwPfFwpBvZ8BDqv6SqwumTC1XEvBDmtLGsqe",
  "key28": "3z4wtJfqqkMEqyucvPG9GQ1t6in6XLFz28Lb2eTBySypC7BJyS2mW8BRJR6MvRH2vD9qsCX7bNuGKiTZgNVKQQKj",
  "key29": "5pgnh9HEaNK5M4Z7s58kDrKU9AXs1XCFdBXpTbAiJgFJgASMG7bvDVymjtwytHtokG6PsXvS4JgHRZYa6YWLv5YF",
  "key30": "oHAmFLz4Zcr6XmV1iTf7xnLJHr9T6WTs1XrezBzUWghcXXpCe9c4fh5d76TvYoBEjVpjfMG8FAwM7qQD4xSXzXG",
  "key31": "4QLPnMVCwaxzHazVQXNdM9sLHTTh3TXmPq8kMCQCfABbZWnJDs6qUaLpC9hxTUzbwaoZfJa3Gr8CdWMW4ghp5LX8"
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
