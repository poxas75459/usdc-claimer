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
    "413EMTJqkhBWBKtUxKgV1Xk3TyUzFUGouhqV2RTHiTtCJBEDTyRKYRqyppM5n399FCC5SyeK2ogbztk7bSj8osRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3LzfG2wNK6Fo8FWcgRD9YszJ4Zy4fB112zHbACGenq5RdbduxHoKWoH1oXwj8r6esm2Eqdkr6odKJEyxGyca9a",
  "key1": "4sUod9XVtkn7dwLWTYoukn7WJmjjBvSD7xrU4P54CT92t2dYa472yrxkcZoZhoKofGjDWg492Z6QLjNtgp9LKvbu",
  "key2": "2NQxKQ7ksGft2HkJekfcwNsnTwpmFKGNptmvuXDYPpLWRZq72LUHFtcjWDnrH1u5Kz72JkTVkSyNUyQCkBAFg7pP",
  "key3": "5swmpWCMEi9uEMZkEeVoBGGd97bw8fZTbQ868LLEyZw8ZczAdiRizFq3HQxDUV1Gq6spVdiYsAHpAN5Tcu2cnt49",
  "key4": "3CURxBmcFRxkv997Z4hb5fMXWY2y2qDJmBw76fC52MGoP7EQ1ERk4uEeEHW8BK5UE973oSiMapKdhaJ4135QAKwR",
  "key5": "smdTUQtuREJ5gG9vVDoMTrdZtkZYdSQS3UoNsfw1ryYkrHoXA9PCJZ83pq5mHwsKzHiyPfhzMEET1gqWUji5HKk",
  "key6": "5wfYyozf9XxaZ5EXkPmyeDveS9u4AtXCHsmYzB4tdtwr2sedEAt4Loo1C4A3uzs1VjECztBfM2im9rVntoEv9FCJ",
  "key7": "3Wyz1HgWjqBxmDJhUDzHpDTXrac5PaKLVLZzM1ZSNYbc5K8qRtoQZnxfSgYhBum7UdY9Zd5d57Lw9KRVpGxt36Km",
  "key8": "5ALC1RJRicyhMy4BNchLTeJGxww7eYrbQsnV3fF9jjPCds6UTXPim9utZktcfHYpn4uPByseU4ToSoYiHrKgiTnM",
  "key9": "4egjp3WD6jzexqyyL5FPZrvLFkmPzK8ob1xyT7NBifbgXDL9PMe4xXDwdjkcnUrR4AMbzYnqe8Rcxs2wFNcQd1Nc",
  "key10": "58ar9txDm9v2A19DNCaDR6kKpVAoA5WSFkbspaRXPb9UoZoJMw6AVwtcPc8RRN28fc6qx6rNoMtqFPTTNo2gWW8N",
  "key11": "3juBcaXdMtArYTDGtxTBCe1UbBorVL9Zb6Uks1qzrucWXHum2gMjjdt5NKirqpqjWPndEZproRRah115sG2CyDub",
  "key12": "4inNzDkCKLMKBSsuFV5ga3t7cv5wnU2s7QjztHBZje8U7e8LLuhF3TSun7sJLtdaLvnng7wutVkzQHo5qXr31FMd",
  "key13": "1sSdE4ucd18eVSS25poYKHvHSvwiTUP9GNyt1U2SEop5o1GktaoZsuL27NM5va4E2DgRKgZfGYsKMW2eLVmQgdz",
  "key14": "2az7eEWkMBznhvdv5ZqhdPozFhj4ocTGJyNeAY9w5SDCxqJmieQp7TGy8cMNcdjWgTHe6G5LVd7rQ76QccX2qgqa",
  "key15": "3WPdGHERo5xXp4fRshuptKCLCuvier3iC2HDyrjvNahjtANdBTrHgCG7Husrbby4RB7caYrBRZ7D3Enc4ktzdD7T",
  "key16": "5q3X6zeM7gAwn6meh9Q11iHxsn9rEEWJbnGfKnpBfFVC9wYHFwHLwp8TvT51eM2RzBoQJ8FTLb9CAXDfw7jgR9fX",
  "key17": "5YBtx9mkYsqrovsuCr4HYSnK6vbkPqpVq38qXZn2Yt4qVUVKi6kMbuigH5hJPn9LZa7KGdKVSqrrcLqV5bmzyFFg",
  "key18": "5NeyS5HGQj1zu7wyJdQ82FSPWCvztsxWrK9gN5FXt75uCSLyYfRsj7d8XcwV9TNR4REwTVuSWKuj2DvbEodHE39w",
  "key19": "2WWLqKBQZZaeYz3LEekzRMRikH3nbHJ6YeujdxNoKATi7eaBi7PtEfc6mufFjPHwVjEgftgm6Qzg1thZQQRL9Fit",
  "key20": "3Na1iGVNg3DjEuJgyT55N274mQYV7wXWz8CCNmv5zg2sT4EioitqUnhzvKijp9Cn6Vmz7xAHwGTSnF2pX12TQG7p",
  "key21": "2SzGw59T6a18F8dwEwEe2fFqPKMo6Jhy143xPKEW1M9cN7cZ7SR1cCXdCnNBo52JY9AKySENf1aB2j3uV2h9BKCe",
  "key22": "5BY8Jyo32PjLHDnqtWqKPjknmnWWYGozULZnGX6qmLQkjt3SCbw5Wesezh6JvPbKwNqGjZsMXtNCeJTjqVfzyYZr",
  "key23": "4yrHyGFHCh128B3c627NdwrpyGdTT6hwXMpUkHiuthGf1F3LLfwNwPsYFRUoKzaXzqDYb5wS4XovikyPoeAC9Vdi",
  "key24": "5jhkV5L11t4jp7egmbapuHeb5x3fGjGv5Xj6hphsRvWMkgcfUEUmFkuvLvn9t3GN2FZuK6M1oEBMPJNDCG8wbvU8",
  "key25": "515eMW3GyJpPiVPqQLYTW7UxgkmC9BTYMzWQCW2gL6BHEPmFx2BAE6BJhYoLwBSfZ2KUr2pxAFYuEX2ri4MLZ9bd",
  "key26": "3w8XQUDvhBpe65b9Qi2hxHifYtRhGR5T4hJ1LtbaoGuwpG6Z44VSJci1DNBdfG9NktjhHcupVv7WsRkL784uP5EW",
  "key27": "mNJ5wNPdA53PrvtfGa9PxpXXhk9ANSMozgTdW7RzoBMcDZLAK5Jfytssdp5jFi2cYNhaqr4LMvZ3rg8JFiVwSBP",
  "key28": "4RcDxaYPFLPa1xYddCNmiqYbQ29xCG3Fece7RMR91dHT6FKsbLGUKcgVAdE1Ti8HswVKGZg2Y36YzDKC4sP5pD3Y",
  "key29": "5o7oqqSZphSiUf24UkMM97CUgmGM4zp5mLxZcErV5BqVeSwEibVbXGYX9972QpqSQcs5wtAHE1wn1kneY3udGx9N",
  "key30": "5m52zegQEjFHZLkQxugqApV5mimi2khRbebaQ3Dp5c9VMWL7uqnMLdpGy9o8rCo4wDLyyLJHtoXm3Lt1w7fk6zXw",
  "key31": "377Aqk1njZuBUVskWZyhrm8QKeDatyRGpvfTmZdexpi8gmVRga1ggeEUxdHmq9XgTSV8viusd9gbmqXrBnvvWq4n",
  "key32": "imjfVU5RHgCjC1XX5Zkf1BSfCrdFzPUfZS9R5DiwgxWC9qn6rQzkR33XaQnQ76yQ3L76p7LKJkH6dhAqxRz1A6p",
  "key33": "5fFLToCAyu1kSKj6gZx9u8nPMEuJjYnzczHFYuR7obt4wwD3PyEb6aBvcn16kY4Ro57V4hc24ZHRsxgNGPty8pjt",
  "key34": "XWfcWF2tHvWVmkxHmtLfeZPZRtoU3c7zMMgf6KVWuTyMrTUhAF4tnwKSuWNrVmXKavjkvjD2p7HCMUUWTT2Ctwo",
  "key35": "2RD7XPboS1j52LQM4G9nrrnDoUoQrDo4eS98LZwaJN2SPkTEvG2JwHx3gpcSe5P97WnAT27VBFiPDKQxAeVRawjN",
  "key36": "5uUYTtEJRPmR23YZGX7ooR4Zu6uVyLRVhMyZQeyMcDjo793ic97cZFbDCoL6eLwWQ9WASTRyMj3cdkbN6b2GUbwn",
  "key37": "2AgopuG9MHEk13QWw4uaxineS9ZfBFzsEivcXdXbHeRca549KtnAAqHvHixKb5NsfMJsrYiSGjPeTNUtkxN5pNHM",
  "key38": "3e3k2VaasUBr46K58MS8RhmtgRuBHSNxkKwir4YUAnPLK2xyq54mL4cmdSXAWomzHge6s71foAkRLrTRTgJ5jn7C",
  "key39": "4cW5vXyD85t435BJV8K4hpd9TaNzuvCRwUmJYYbPuCjgwJbnUv4YKFNitZka3743XTZXmUDERpcPprGPUMXrtkui",
  "key40": "5Yv5i1jDpvjqHVG2FBabSkfKMbdGseLHoUoPhVp2QPug8hSvn6Yc2MdS7umzgbkE6ox56YuQF5gHXRwu7bAu9zdH",
  "key41": "uZX4eYxAECjxNHy5NkfEjvJtvbGdyTdaECmQGmWNPRmZq7fjBiGrJGZD9gExmcDM4QnVZpjXVRvwuaji8MM37wr",
  "key42": "3E3gPsXn79qduKHTKCVTLnb3P4fWGpcoSCR7oap3d9sbuvNG28Zh4rT57S9paFyH4zZkYgB1UThLSdUd5G7p79fR",
  "key43": "5JeSbXtme5jC8GgSEDLc2MbsgZAK4vicjfCHQATfZ29ceLm8PboumN7FFGPow3RB3DxM5zmq1N2A31spK7F75Rro",
  "key44": "2t1bpDZ3j43h3tJXuYiJHappkQpEVjgTCDhjswmwFU1F8HifKhHX6DcVG2uvpkJuSDV6g6nkbUmCRZ5TF8VK5KRf",
  "key45": "4XxFRNQKh4gw7MopmJuphHpb43d5NV3ahYmM8qndonxZzcw9ik4DH6PEdZYbaBgC7oXzeiqmrhCHwf6fKCxYJpiz",
  "key46": "3Pc3vLwSiQcu32oGW9BE5VoWwr5UsgpnhgxT8uius6LJpMpmYNakqbESZCDevCjNuiDcf1gf55jER2fLmZYUMJ8z",
  "key47": "3cFTytyhmHA1tJdoGtGPqNyxDSRD8Am4JYjXJ86uFUXJH4tuFbRtzZ9Umeqyz27UfUG2H88Yj61p3TvytMSNdXri",
  "key48": "4FQVbx5tyhPBS8MbZN9LEXGspeX5WZB3B66G9py2NtMoLNbLLdtzdXoVBaPVnEuuo6xAPjBnpYZvRE2zR2KzEJ6z"
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
