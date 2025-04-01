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
    "596k3h5AyrN3A52TcZ3R186Zr6sM3m5bL3bS79MmoqrEVKs9jN63Cm5BcYahgBZCvYQQuGT4uJzzz5gpnsq5dMNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZdGuehCxLjyVaoBSjSrxvDRD34mUgNNgujiz6tgYv7pDYaWF3qz1MsvYQR3sCd9zQ3LxKzKqGN9ubXGb8H3Df7",
  "key1": "54F84MWsYdNVDPGAxbJZUj4swUFMNNjNLTWnAWNcvYiHmTKBp2ConJNWA7C7xWRvkBXoUwwNT2wNgD96mVzMrUTs",
  "key2": "4QJGqMJz1D3qPc8B7B1qiSy9qKZQz6Pv16EkMyetdsHBzcQ8VMGpFWwn9y1y1W81G41XP62qhkk6wfjdALgnzhSs",
  "key3": "3pvYvw7jqP1jRhByzpggorZu93KJbKAZP7NaozUKdKUrooVCv55VkLzR3FwtU6nQEdMZW5TaQWeveiMCEpwPt82u",
  "key4": "5XFLhjiAYDC2eZLweG1jaEpQ7NnTVfb6guqjG3fBVAbekcnPww2goRB8uTqzqSLTzkTRHZkCqHMgVXrdjNhasKsw",
  "key5": "LuecgLzjKumVG8yokNPFoZziBrbnATvGizb1Xn1WXrGB9KkN6Jh5foC3kr2Eb9oZxD5D6HpzZXPf4jLY1d8gnjJ",
  "key6": "2nVNgmoURXYmefKd2D7ev7AyscRM4owCZ8NPfMkf89mQx5w8mGGMq7NJw7dG6tdBubZDbaRGVWJSWveLbhcDYn3p",
  "key7": "55eBaCD3aChCwQ8dAwYZwuTkD3YUCBVShrunHqpdsQzf3WnN5PGKRMrQexeGHHRXWYN2LJpgPx7LFEFVHBkww4by",
  "key8": "2vr7oomeLwVuqJRA49976UADcGmf8VtraZYekBPkkKRRx9d9uFA1icjeP2JsgPyzfaFDZFoRicaQXHxymjpkyMTF",
  "key9": "2b6ti83qGTUNNqP7TfecHsoivF1eKtivhzDtXkJqBxVUPjt8MuqTBBpgbCa7HJcE4qs24S2GnKm8BPrVPbb4q2mX",
  "key10": "wXCwKgUyj1jNftAQqKH6grWSXjLnd3XFHKN36qqkDMMamwfLFvZgsP5tYdTkxouA3YVnHNbqvXLFc8C8yj8wPYU",
  "key11": "3WgeJaS377eENgS5k2LQhRSAqe7CaXDn8MD8xAizqp8ixETAU9a4zMXAQQHAQFNo5wQa4ZMUbGE4tHixHecrB4Vs",
  "key12": "32ei3PL9sZTcx6ECY4rVLAfk2HynaFvmS9h41nJXeoGeJQp7Dv7SkQ9awsb8ZTJfXCWW5msgXH3Ma9Gczoeu6ErA",
  "key13": "5Y9KVnVgGdVsCg4XsYQxQ5R5KzkUqLatg1XrCUmof4pT4CFGLup9HaLek4PGYhYUkNRrMRXZYVxf6s8bU83SAt5k",
  "key14": "5MZkteLQnPuuw1o9Xq7wEy6o88TTamCPSACyBnGMG9DZtkYzc2dPrY1kk14xGiqdqx5mGdME49uSvW4MxNh5NrHh",
  "key15": "4EW5QjwCkVnS2eF7ra5nZkS5C7chJgnUWdVr89ajP5we7ES19rrTkLBYFKm7BGKhNzhJtYMpE2gJwvLaUQNAPMkp",
  "key16": "JuwVvdCza7rtAEGfsnpBb4pXdApkhiKAhaqocwy4nN6t98kwPz6S7yKfXAmTqe4W31UDo4GVsPciPNRsQJF5yxQ",
  "key17": "3jTLK8ozqxRndRqjdFAmbzDchpvAD5Q99RyKTBTJCqefQNPpfz3g8zg4ZEQLcd9JBqfCpPpn6zApdBNu1fbcZdEa",
  "key18": "5Mr8NpCitEggmEGh1tm1eNxFpHhQagUJpzZkjXj3BbRTr1Z7KRt9nxxaRMvLrdjUHMKXC1wbN8f9ESyu8MFHpdVM",
  "key19": "4bEWwjpHbEKDkgQFya9depPcZbDazSTXaa8ik5Xv1uLePwUneXZfv9ZPbUtqwgQdvnw5tRQaCQxf1sQNPtu47BNs",
  "key20": "4iZ5n13JPiaeu8DCub3CbkN2Ge7maDsbegMh8RYwi56ZGhWK8TTcCpNukNxYdHsjSdcWes3fhNb29M2hLt3G3mkC",
  "key21": "2w6WwG2XFPKJicDz6eU8EtKtGfGSLrXHy4KXpmK3TirNXNZ9K3JBYutUYNVFqrQdFvvz8ZGy6kTZt82PfZ96mxdH",
  "key22": "5rnvot1Fq4zqAswUhygdbjUX3zqWTZLbaxBaxcqbSGGucoEA7PmQWcibDeR4QoxTZRR1UFcoeDhjdMmJE79M7PUD",
  "key23": "2EbfjeAG6TuPpcyoNF1sMyUa2Hwp8mK6a8jEATy65PRV83v9JKYof9VFBzeXewRZLNq1Gu3CN6kurfQXM7bE1djF",
  "key24": "5emHiYjXeXaZVpx4eHELsdpksTfSpG1wqVcGXFgkN9TdobQ9E8Uj2PxzKw8sBH37xdC1gRCWzNDSDXjwp5dZGZj9",
  "key25": "9TWQJGciPF4Jy7i1WuEeCqpev8epKcxF5SBsgEJ3upwof4XywsGJMDuPfrU83pbTQhkKPc1D8ycXsCUbSKmRwZt",
  "key26": "2ztDzn98XuezXSK6r111Yv3d4skBztN3qgrNNH32ojJoMxrkWpqy3YgUWjZpz6EPtwqpHV5aGeBTQh3MH3URFs2R",
  "key27": "tup6KoxPmBn7BQbmx3g293MC4iwvF9Jq51YhCGnr6jKzHino9RHYaJs3TyniT2ggN2upU9AueXbQiJn1fLrjJjd",
  "key28": "3BKk8WUsUa3XgLuVqw28JrrjwBMWSzJtqPv5awD7B2xCZ1YKSy8vLrxFJueYaUkTPppnXYNxYq58D5kpFh8PqtfV",
  "key29": "3QtjiHz67iZCKheyvVWGc7z4GmQA3jXnA3McdZGHFc3M65e1pvA2KAHnYjGiUX8wraNaoQJDJFWFm2eYLzgSNDDE",
  "key30": "3mZwjq5fUVHUhwDA7a4BjQPQj9NrkHn1RFGPtuZXye3JrwVm5PmBgUrSptuR2ZkMuHDjRMngePNaXekaTXtgRxg8",
  "key31": "5kWWJkxjjvwZJZGQEqBdFKz7knDkebd5vPfEJrvMhDhEDELZmGmQ7tMD5mMZyESM43FGApe97gdsFqqp2bDhxcqh",
  "key32": "37w5aMWbWNguNcrcAX3b4f1hbdcqjGN5p1kd229E6fDYtgB4epYE8GGW7yrdn3THDdRjyBLwxcRjxbVPvMQ2tPA9",
  "key33": "5nECtKixG62VxLzhPamgw6hnb6SXST4GMxTwqT7GRJ1AQtE4VFnmL1PTVDzEbdVPpCoQB42c7fxgRPCAN6kpLUiZ",
  "key34": "kXK44AH43jwMuDh1TzBukBhDEZrmhnwMaWN72oWEjYxErSXutyNTW7cLZWz82vs8GmgfBqtL6xhdbZLskytpwu7",
  "key35": "TUXoc5A7svxtfMBDR2qKeRqMeW5yeT3BbUFunJger3SJveidno9HKPSFkN8whV2i8wYNW6Zo7ZhVXSwXo5dDJWa",
  "key36": "3FqH6SdcPaXXqBerz6TJeBEZtGEK7xmeEaY4nvLVCRxaehatdht8HNWHhNHPsnNh1qYLQA8YG9f2rsR7CRaeKaaT",
  "key37": "31gTbQX7WDsLVN3o8ZTAG81PYf7YcWhc2YJMwDQrhZkjMcWdioXzKFtMakxeG8RxNgKUhKcoGJLng8emSM2uc3Cu",
  "key38": "4Je9ux9D7769X9PFb8GjgH8kmrSpFsk3Bp5YStgeLjzg9EwiKSPFaJA8wBbPopUfCQwu7Dzjg9fnt3CwnqsbKes9",
  "key39": "42YgGFF54fd2DHCSxBM8fy7XNoABT8PwaTXkit5zbsX17MWyphhGSQdSbu3y8xVFXFgRsuFJ7XSxDXCCkPzZgfjQ",
  "key40": "5ETqwnT5jwKWHcenux2AHRccMfdHqUkiKL4DkXuwKhWTScizWZeVPZtxiR7k8dJ6tPm7ru8xM89FU3cTNDkxHFSk",
  "key41": "66drwXymAWyXxXejgz4mPmfAfdJa6dFfzphqjDaaE2nRWhMYMJG85hk9CwdeCkMi6YaVaqE6SYtzMsiqvHfLvAZH",
  "key42": "5Y7e5VzZSvweLsHQ7bSQAeE41Giw3ZePC2ZfMv3QGRDS9iWdMC4nQ1yPN8UabFerRPymuEK81Q1CycTp5CtSDoEY",
  "key43": "3J7fh2a1ZGffhNSK4kmPzAvHZBqfDiwodrN8dPRpgmrjWuukpj1dDFvitKmVukB7fht6Fqd6nCyTfEwW8JzuKi8U",
  "key44": "26mHK83LmjmcvmFBk658KwbnHtkxSg5m1oe5t9fdrg3J5Y8HeBYA5xJYU6oxJMBsV9756UZ4xq7mntV7QMeZqFRH",
  "key45": "5FZieGhsRFGtfy9b7pJgvNV28HQoHA4WA8ZArfUEwrW29M2HCE7oV6FEHPm7ky4ZpdBHFVhdXXyQEetB1GNr7QQ"
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
