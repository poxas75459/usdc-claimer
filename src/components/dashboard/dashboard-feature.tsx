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
    "3sWtFXYbqL1yoVvMfEpKV5GxFBy7KR2Sf6uBuPyBFu3gZtJcbxEwBwbV1xNsyNEtZp4FyDKX4nYqzqQxqGt7PqaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRHreBm3mj9KHVtcZChEYGq9Sfiednwr6uHe6GMHBwM6HS7gHJiuWERfMgKcqW3EbSgP3oMqJbM8JTXu7rJ1Jw9",
  "key1": "5GvPYoYkr9Zptq9AkwANypiouQFnUXjQZAp4MeNpERzPHRLUUuod65Q5Y7qK7MFK1tt3x6saB7M5mb2ntwPBdBpv",
  "key2": "3uKzMEV2PcPipvJmyE5rnchr7xSkhDCrBSx3ZFAf8U744jhdW71HkWaAZcBhL2Nfirq7yqGkzzzEvGupNPvJu6Bi",
  "key3": "2nt5VifXu2jmpewH6mK9pBSZLM9XGTXYuEpHGVtEuzffHEPuU84iDpbyTw5kkjqWRxpwbhVupwJNjJB8waoauSjB",
  "key4": "jja51wnQmM91HtpzJ92NR7ecYuiZpCBYFRWJXobbTA68e4PhF2Z4jnh7tv2xJ8rJzC8J6GV2KRwnsU7r9QkdzJM",
  "key5": "48np9E6gTm2cQ2gmfnsLkPXq3WKTWhW3gwfQT3Xyt5Q6PfzGcsofmo8ryWCf68uhX6wupWs2sSSNHvW3YYK4C9VH",
  "key6": "3HKFrCEqwzY7pMpUhpugvuorAahEW3VghHwZemZmU37kU42eqGYD2LhwXbceqdkN21YVq1WSbMRHBY6TKZQqxxez",
  "key7": "3bvdr5XXrpxMRKkBKR6MjwrDVYP32WULZV1JQPYNVuhX2M2jBqmrYrbzEGtz3iaw6T4vwGa4Ww5fBbpS4HiEjJwN",
  "key8": "3uDU1Kr5pLWZFSKaGXD2PvQswwDqDW1tKzpREhqEpbRGb29njRAVDGWSmrLFbiivyhP4xH636po22dKxSEg5fNxt",
  "key9": "4yWevrdx21xB7D1w5hccjNcyDQJfQ3TMSbKowG2dTrpaSnXdboySYNsKn36HpoZqeGiHNj5szNS1FMXRdYG4jUFV",
  "key10": "3YdVC36G9XujGrvJ8ZEFjjeiC54BzAUs7KmShpRua86B3zRnN5qSgH83k8boFvJt5HfUCETpAQcx8jTYqMmMjmdG",
  "key11": "jdjH7pnzaQy5k7r8DStfFysQR7m1HJVF7nQmhMcnWHNWyXsHv7cceG7L4MjJ6KZxFLhsxjZNsfzVx23fAeSTJgd",
  "key12": "51K79E1c9CSVxBbdEgMPzeL49KxXCWzVNiB7JVwg5QizosmzNJAX1uDb65jkosjHk1q8os7caHKAGqCCgUs8bbv6",
  "key13": "3bZUc9S8UW9Ept9QshQE6uyH6GePmvbE2GBLmNikT2VLUmny18YheNQurzJthasq43sjpQ4BMPJcR8HTpCwmzw44",
  "key14": "51VMs7ergAMAJPSoCATQECxa2SZkVhtKNimD7E7eazbtUJhUev9dZBszu4bU8s54ma9138UMQUirQgJWitaTnpsv",
  "key15": "3tjrqhyNuZTYpQwtaZXoG4ibHrJ8zPv5tmsgHA3DLpwMzfBa2MiZ6r6e7kXq462uXAAXUVw6Hkc9L9WMyu3ozzR",
  "key16": "29RX6wiaNFaZ1upHWfbfQ9c4SZGqbozTX3LGsFgT2zdz2e9ZyGKGCHRhh1bFQhzoTbwNBVgWBFbYhwi6UAUst6a9",
  "key17": "FR4NqRV8vM3EaqpYP2wRkJ48U9s4tjm8aLSsEobN48DgUysmPJ6DhrbCrzAdVBJPVCY3ZbLtAtgsPGWrhSWUtEo",
  "key18": "3bmjqdYwisxi6SPZguR8DSvxhXtaKSPLJyUbMFJQXPHyyNKuwYtQYRSeiSwk2Kjdz44mECJNuJaKvRdAXbASmQX5",
  "key19": "4Wo167mQhxxfsYcgFY9TDkh1evTt3hPhN2zUsQMg5c8BLxpMVpatGEJ3K9GD4jW4BTXioEXcp9kdEJSW7KEJyYCX",
  "key20": "2dLJyaKRajf297L1ZGkYFrFtxMjX22gqAdJLrwR6kQJuDG3c1xUmRbepX8nzL9XAsANtU44AaRLwu8b2hgiZKk6C",
  "key21": "2kjwaHySzywbLDqBVqgzFvAPkbDJ99NteYYz8YYy54YXMFfuEvtZETjABVLEFfJ3EFqtY2tadguUjiAWcqkHaQW7",
  "key22": "3u4VVdr3Ghnc7mgZRr3z4y1FS1fSZ2vV3hR23VatniwxKSj2gechgUT2T6KYn51yffB2J6LS3Mp1MAhgK4JYQENc",
  "key23": "NxWziRK3ajMRz8VkHQ3ow9HB1K7g15LuxTXYkTrjVbHbv3p7ykjjsGwTVYCPGVwernHxxWnyCFP362Ebf9BVZYs",
  "key24": "2xXSCBtSMkcAnAK6shpgi1TbJu6usfu57dDPz1q5vkh1L1Emeng7tEsTqVirFJbx2kHV1QCnGqzPys6YYZcZMdrn",
  "key25": "3jgU1tHr8yMANEcZE6y4qWiGbnMgsP4grv5FhH69k3xg6VgJyRtEvYoLE9tLrN3FsPcDrftWz1MKmFBE5uo6wSU1",
  "key26": "4M9e2FpY76ykxEGmjsAu33AXTX9LC5aWG5UCmFH7YjPV8q1VTcfd4V6MTrzYjkujQXXx9Y6Sv4FkgrTLQJop7FZ5",
  "key27": "4wEA22J6KoLUED2uYtjTjUJdrL61ihpLJx3LoVGjUhcFFsMCHZTVbv2bZKt9SivRyZcPy3tfgXrYqEmY6nrTjYHZ",
  "key28": "4tVanoj11QkEzaT2dgHWzjZkTenXRGN4JV8aFKzxeD6iC5HiqjUkHcnscQ82fUTXKvDPCwd1ohGDQxArRSNsfRWX",
  "key29": "4UKKzLP1wcMzqkLtp6tnyrMypnLuQBmXoGJYzUQKd81Stw37ABVGHikKpFMi3y7G36KA84CJtpBxp34ZtTu1dEd5",
  "key30": "3MCfB29zw92gdxceCQHmP822czWV5Lo7crY3ygAMiwSMfFkEVtvEKQWYXDFpfeXpVfQfHYE3Zq6vmW3XqQcL7bo9",
  "key31": "8wM5bZba1HMCdFLtKGc5p2xUG3b9WFcjT3G7z7i8hAiLTNg1DiVspkjb2dK4WXZJHmD9gCSbm7GmajtCxogxhUD",
  "key32": "3Xa8RdjHg8AYsLao1mJoWHqcG2QxnqLzSJrah22uG1e7xfd8kZDEtFGnRP61DvvHz9A63CkRptrUgcXCKSj2hoxU",
  "key33": "5A7jmTTHnzsKhk8AL9wd9MU94VbFC7hutADXqYXJGENVR2hSg9QmK6jRZoFEH43AxDVhxk1PwsaAr8Am9rWiEVHX",
  "key34": "5zmAwmR8m3GGpgLjYfmNZawMNpHUFeEVMWuqa7SJiR8rf2NFeTy7MexoxtJF5yVcbsvmK7ThyoXBNwanjM4JNjhG",
  "key35": "5YD7iBanKkjNzuGKciJpXJpiJcoBP1kPnedTeMmhy51tCWuebK4Xc2DTeubtXZfrfUr6gPK7vporuqC65AnLiNqQ",
  "key36": "4kPSSUcqCZbGZfRKfT395jLytHEXNeB7GhVf862QDmHdnYvcdG8qYz8ijEbToB1MgAfPY9Hi4E6ZhDEFUTdDJhJX",
  "key37": "3QULHubPZtQcRL4CagCMf9X9QHPLqa5sCJUW43BJp2G9RN39HHeQ8HiiuC4MMUYmtutMo3jNqBXw6SzsgZGPabCQ",
  "key38": "4DkiWm3SQ1hH57J88K2QDXmXoAPqmqPMtp7mhx6j41dfrbsd8K6vXSZ5CiB9mLZb4VkfjhQoWuz8aeq6vZFuA4zX"
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
