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
    "4fp67yuTJViyEc7m9esE5vUFqYqxurLcFyXsA8BpBEKieGHdSWTFfEKjcU99ZLoWRJpmjAHnM9yNZS2sWmqYx1AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHqbzFdv6PZ6wbnWeifotPq8ch51ffzT6wdXXgF5HQxggAePPT5NtJ7gdQQMdyxrsBy53WAkm5D6ap8j9DxUTgH",
  "key1": "61FofNDnWJM1XnBop2AGPSCgdmggQoKoC2nme8hEEfmZTo98it4PkAmigcPhJqxLmdM72teF8PbKKKajkZPcAaJS",
  "key2": "4cgqvNdWxAKVasxEULy8UjR2xbjjs1r9ntkUVyyqovhDHZ2vnaWk2A8euCs7HzLZVtfLDWMZD8adYVV4Qq6YHCXP",
  "key3": "3CKNGXiGLSr9uWrxp1EDrED7nxF77ug9S6BASVWsenjYVWFv8AP7zFydxnHe5RUjASRThXmAdBDFWz8iBvuN9BCY",
  "key4": "2XfDhdAppMtuVgmgW6FP8JneWF8mGvX5QQ3PK2kw2NpLD8A6EimwdqopNkVtov4M6TyF9f2g43AzkSn86wnEc8NS",
  "key5": "4mW9NLrdSnEiYqbQ2a7Mrc9HyER7K7XQoWdfcGcAfkGJBqnD1yPybShhtszDjXvfaSk1pKjGHEwTfSpeLmpPpjoL",
  "key6": "2k3Yg4TnafXXDj9G2rDhg5HMJAc6t7NxwRoDxfB6t2HfQgUZehjSLjLp9L9WmoufNejmx3SVsmcpwxeQ5m3oAcF9",
  "key7": "5ZUTYzzJ3MHSk8xTaY4g6X83KQ6Q4a6jLUDjTpkfegjYW88JYAquhw7GtzytgEKoY2ERM7EQXrn525mdFz8W72vf",
  "key8": "2D163uF7LkUy6ntfcFiRJYUj1SUmqqxeoXp7QCpF3c8PdBPZo7JgeSLAgrwN9gkXGT7jZpHytNYQe3xHuFoD6wAL",
  "key9": "45BmX71zWC5kjNh7HTnVWt8f1mXwZBVaznenTExSbm4fCQH6mShogzx5ydozxR76rhfUaagXGrDsQqUTiEZsrFPJ",
  "key10": "3eKFE8VyCFWp9nCyqfR2245RMQxyaKmy2rJJRHBQoL725pgAMbYVcwfZRKjGR9pNRYHQVrnxtCkkZA7C86g6egtn",
  "key11": "35JBFTJCwXAueepYvUXvETQoqLF5RTjhGhuGPan7y85TgP8rsFPzCW2vGmHyUU79BJurNrU8i4RHSyHgYzeqL32c",
  "key12": "58ieqM4BmFLqQrYfvZUeQqHzpKSjirheTfsgWhcYmp3ZKndL28HN8joQxbdCXLaiMekC5A9ic4QfHxGr2BvfGcHW",
  "key13": "2TWuTaohgHH2YGS8i2SmMEzc6f1YgKMGv2AHP57v4aewykL79SQEVHg4wbiLrwzmnBdvsZEYH2fh5nasuGVhUR4W",
  "key14": "B4uTDJUQ5XzutAL1GHtiViA1Npdb1fbraxZXCYt7UvAgnCE54vtUfiivxphEYxVtV3Jeb7WT44VRRSKykpU2rUS",
  "key15": "fkHkfkHrnWdzAbpp8ArTjoiga9fyHCuJG9VmRWsspZZDGWfY8ojYEo8V6pUGcnFzMfhsTQ4HmMzU7Jy1PtcUYZ5",
  "key16": "2gqK9xpspJt4GiRqMiV5UNAAg2xSZSrrcBaJ47aovRZKHYopwqRjFLLRkZYUESuxpaTsytLoEE2xahAc2iEcnXhs",
  "key17": "5YDnaTrDQm6E5HcqfEpdcHaqkFhKqDf6VTgKzyqhaTqwBfGBDDH8mFG2zSNX1jhQjCXHkJwp9ssJfrMbgRibQ35n",
  "key18": "oWvhjYf5H8B5cfrrPnnTncvKZxhnFvycuxF5xWbVGNZ2JnkEBZefXQuBkTWtgFyYFjaoXy8MMKA31e9dX7u9dcJ",
  "key19": "4u8QvhksvF2YowHJ2WghmsYpu6q5WTzWF8BmEFXAvLdRqTgirW8WSWyzP9Hq9kzXqnuvNRikAe4YXrfWuqJA7ZD",
  "key20": "24U1h9AoKKASzLjZ7vp9Ref68TK4tNDjeVH9G4QAW816fgsckVGiRGKHnBEd7ALXVXkj9WnnXKz8TWDEGLZWx7bG",
  "key21": "26y3tkKFQ9iUedWqC23oX8qfkjjxG1oVQpRqmSpE8za23LNgJdHBa5JZcLrGfiAeoFnCnZXLhhT7q3B4oJh1tjdq",
  "key22": "3FNm6sesEX3w5PcEsEcHaopPGogN9ixURhQku4RufAShyk9WPZvv7rYQnsVr6RAeMNwbhTfFFxeAHLUXP4xTYydi",
  "key23": "5A3nRuFXFgwXwQQUfLkCimdXkohwmhh2ZmHhn3U3dHmW3p8jQns66Qwioojxgr6MxsHU6Ng7oMKyMrssRdgGSndS",
  "key24": "4Zhh61JjrmiGNzRxri4cq4qYgRGv2Z2ezab3Jzef6T7J3DroWrWwZHRrobKbNXXLEmcBeEXTwdn7L6XbJmqFLEbY",
  "key25": "5EFxpgKANHZDfLGsA12DkmKez4tGrVS4dxUsuqMNAcN7pjLxGwA3YwpkqMkfKX4u91Pmd14xZN5TAEKEjQ2breL6",
  "key26": "2juWP6Mq8uHZtP4JkkiKw4rAEjmZ1AcZ3gutyacmCDy2rJjhpyieF5eER79RTyh2srbhsW1ohkxcpAEUP9oPUXfW",
  "key27": "4WrbWRcks7FCCo4op9XyhtPrurd8WFtH21DLaQ4RpaGVtPZuFrNc7dTigTNgsRdGkweisspCPcmGGKdniKg68HAR",
  "key28": "3E7uatWDxvoRRszf8Mkvaq5D3FBSUYZEg74QRt8ppyTvD7T9S6oT5uaWJ9rrFAFbTE8EWhAJxCaHr1ELb6KtF4k5",
  "key29": "5gJK7UA4RKJCdeGqqTFi835nmeVixVveB9sHAEWakaEmSmoBHTtzh2HwpVWZjbtVnzNSd9i3G5bVvFoeyf3jRxta"
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
