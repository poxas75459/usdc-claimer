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
    "BtxEUJMiZbu3nqkoup6d5RXyFkQJ6tdTz6JQ3CCa1YS1iWTVKDuB1abk8B3bHNYBqyYPd7RCMcwjfVC2QJS2zrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaUiw7sBjXEzbpAPPQgKJVPCWEkCDsBJfKXL34FVBMeXBYggQg8NV4FTh4vMiqSEKgN3QmZon8BGJf622KEvLKv",
  "key1": "5vp2jD2T9vML1XW5DjG6rC7qVLJJUyd1xmEbGeSgbdYvQmAfgi4io85FPJg1pybdjPCkBWbZmKfibfvCDg3AyCyW",
  "key2": "5vZ6HNUX65ANpdFduz1GBK61C5it7YKMgDpRgY2v2Ld93ak5iCz14iDZpMmdZVDJR3m7soZigJfbGRUYSGPBQKnp",
  "key3": "5jvaJwnkXNT6FdrQY8hcH9AX2qhjjC7EAy9DjijFhEw946KrSkn8xvkkm9BKKH6xBne4uM1XbEH8NYE6EYWfJWLa",
  "key4": "2YCkvXXryfpPMS73obCwvn4njMLQTuY4os9C8EtwQoy8WBrTRekWfhdGe7PQNXjUADvisBNoKdRb2KVQmJ9JG84",
  "key5": "eaP87taMhKLP5rTbKs6wmo6XjyNBQyoqt5uNS9AmiaPRJqzw7LJhqWbP9b7VqNw3Pi4BENEWBaFtAV4VFbbfmUp",
  "key6": "2TWFbXHEB86n7Pprx3SQ7HPPMxjUhj3dwU8i59KgXS5qfBC8uSm9rTpyJh5HBD5DVS7KcH6r46dmtELta5XCYRaR",
  "key7": "5GyMrYGZLhU3yRunARi3278xNGwcBu4N7M6AahG2DmfQxz4ohMiezquixc88bTNQag8cLxQQQygAUa5tTCiykYbJ",
  "key8": "4MbK9Vbn9hMpGVipg3uGCV4AdQXHMPMKqLkeSyoCjrj9gZdBFUvm8SoQVDnZDuhecmXqRzKaHk7TyVZkzEjP3SuP",
  "key9": "29VwqwCq1c4kLM6egzsNkQdeHnnsDwBcxq6Grv6No5m9MxqjrdcK6oKDnjFaQBUAG8cKbzR98oHAUrG6sdBMmUjw",
  "key10": "jixNFefTGXKf47ZycX1oxpNPh2beWActtb24Fodaj6c64mvzRacR576yJHSq8xobAoxr6uMkUfxbKruph9du2pf",
  "key11": "wwBzF7eLoeLzL736jUKAY2PwgwDCWeQotbpdkrMmX4s636KcRT89zdTG7htVgnJk8dXy1sN8DGtuhKhXrncpXR4",
  "key12": "3RvbrgMkfF1jncLKkGGDEz5nxNF76xtPLmuKFuyruEJY1WgkngQL2dWzoZBWE1V69963c7Hr2wy2B11w4rXXUAbS",
  "key13": "47sTzFGdy9uWT7Xkbrs3xWjKYK85K9LcRkTG5LJspU3ftLbuv9XjDKP1vs4bUx1TrBKgCHxaFMDYLM2D985GuN7B",
  "key14": "3zH2u77fF9eJwhEzgQDtsLnLiEn9tG5n7yBdSYpZz59SvZXtwP8BHTCmpmkYxbSCqTHi8gQZrb2VKx6YXfxX41hy",
  "key15": "31hvEdHhacegWwkueCqCjuwbRsSni8vvHWjNdHzrD1hSfan7weMzZWfB3vv8N7DMAyM3n3AWJG1YTXUf4iDwroCR",
  "key16": "3REAs5EXR5rMou2AkjHENt9MGus2eRtEjVMshEbLgd3e9QWzu7msZSdmwrd6zcxaHMH9ng3Kx3ga3TG4288Hs3EJ",
  "key17": "1MiYxHiXHgdMJSJiR8ZWAtW8f52cEykvXqmjN1GYcowsdccpySwbncWhZsy4NdVQiEDfLEzSzFxKrxVpX8eisVP",
  "key18": "3RnMxpW2fYW8nnuRepSas7NYYY5amgtQcs7ynqDG18v5syHGZ2cEDDiE93QSXFNsU1vj2G7ceqqZFFeeGsJAqJvx",
  "key19": "4tmAyMSyH85m22z1YfT72kNUE1V5UR3tMvM8h7vQSJiF14oG7jR4EtkVUH1sR7bbR8Hz4HmuEXuMuYx42WpuoxFk",
  "key20": "5xQRaGjABRkS51gU3852bbJoW8Hi331sxJqTy6db6rfWPTt7Yq52eMg6rTgZ2geiwhcAvme3SQvxbNqzR7NnZCrk",
  "key21": "3EHWQ6PWg2V3ujooTvjtznu4FKAFKiKAWM14WVodr24eizFisnZsWRH5n7SsppBXLHb61RFrpXQJRHaGhLdT3k9n",
  "key22": "3xeWttJAhANDYwHH2ozmPoNB4etQhybAXnp2BkPRM27Grur5AT9P4XJohdfk7voH2pjv92LeCLYZtEbSUpXptr3s",
  "key23": "weFCcnSjrgkB9ic64iaYcVGi2t48p21ess1un6UqNVmmA4hxrUNAVoxu6MqRkox6zypXBkK2yhGKA38CcXXUeHb",
  "key24": "2C9BHbJhjQ8e5ccxLYhR5wqnnRjyj6s1ZkpvRSQL1abFbjUBmVPjB7reG5akmcMKxJXrrGDkMDKwnuBKYxgRHSBU",
  "key25": "5AAdDpomPHckXwyn1vFL5XFz7PnRoWiRJJTAJSxdr3ESpbwnHdaDvRZRr23uWbiA36LJay9QCuNkVwPHY4XRe8xt",
  "key26": "3Qu3UuU9ghEzChigwZbXmXL1LemPFf4SY4vSTrA1o71DyCgURWdvyyKENoJY7Rz2voNGRsJfA9bV8aUvMeLYnwtX",
  "key27": "4RtQk6ardNSZLW5yedFBJ3axc5gvi2k3CAsaGVfpZf8ZSN1qkRCPTg9h2fNVoM8FAT8bo6qiSm1U3FeS47mz74uv",
  "key28": "5VB1xoi3qxFpyugKHeJxAVfNwmfgYYERG56QR4vFHvru54VgYjcGuTARpLaRmTgXCb6kqgyJQeRADercnpp3pYte",
  "key29": "2jKrN1fKzTy4v3e7WJKMXvgkHxFL5uB7h4TQz2XVugPhB7cFb8MJppkamCPprn8FpKGunAicZhn4edDqVzf6mhHF",
  "key30": "5asiCt3tFvX2rsftxvvQpxxtAptrBw5sP2ZLHtm9sj9aA5WmczyBGndAF3uCGX96JdYzkNftSvMjBYXADqp9mLnW",
  "key31": "4XcdVkPej9JeMRETgH7xP7x9JEuwvD6u92aF3oiHvCjsAadJYfaS8AtVdoEQSFpdzGAAswXNnsFFrquiyYqtYDNN",
  "key32": "M7scFqsGYzMxfctyqvvVcUMuUEwfiC3BPoPtHHUMQP3hNY5bqo23J3Pv9facy1cgvFs8eNVSjmg72wYpTvmLpJz",
  "key33": "hTNbqwR79Rz8yrHnxa7sUAZGks3SMmgmdGjaqKSo7ToCgaLBLK7soH4PgHkG8qB54z4cBxcyeXmwNSr8s4UcYEC",
  "key34": "4qnjEsjgTk3Z67rUysKgTFhm6NgkkGLJCwEDp3DPhsesCYrKr8aLrmXySvApSpiNtK1wXfAqAUmQJzNx1Aa8gehN",
  "key35": "4JyNqRDn6Fhhrpbme2ZmZy1a7GBFFmyhDEg932ejCT7CrvZRXxvHqtQnABQajJm8u3xgAn4PZGABwtu9xg9c2hbX",
  "key36": "5MhHKtFTHXwuDUHDmszAfNxeZoA1uPFVY1zHcAE2qB8feUSd45DqtMqj1ZcLJuowKr2e56p69LgBHLeDTEgCZNyp",
  "key37": "5dyhhdRHwFaPmXZGGN7HVpV5hBKLhuj1fHm9bJrrFS9qtZ5pteVKZcXSuM9zywboVjkv87vcSWXDryF79YfKq4Tm",
  "key38": "3hoqmUfeh6QvfDpi76ZqJBEUwrvynmJghEoA3mAbTTBRvaJzrmHJYMjtJrzbJ94k2U2nPE1S3qNeraoVNwqz6aLS",
  "key39": "4CdCQdCbdi9ETxWZJLyAoSA2tk3zm3u8FxTHvKE7VZF1AYcjhAciLbnzh9Avx6S1fsLuDTpZpfp6iraBCDv9U2v7",
  "key40": "zy3kmT8MDVXxnVbdV8f1zqA6EE5nTvqerWurhDtFHn7s2aj5w3ZSQjDRaSNYtugax7UJzG5bNGPM46w8Y52gYLM"
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
