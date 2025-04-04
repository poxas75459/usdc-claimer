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
    "4TbnCFyWpWYFiQwSqiQnN7PQhb873gyRiP9eyxPqjX5PwUa7AtKuru8bdZTXdhr2vXkhFUEjVKMthLS9wQoGjN3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gR7tE9rC9sNFjwa6EutkjxeLsw9zVgde3S32rmikYtDT8DRm1K5z3dHTWZodLNs8GwnaFMaofd9g8JRVSFoeTZK",
  "key1": "3JPwZkMm8rGiReCGTePz6nCHkz6JMRB7F7LAj98mih28YydsSMUArMNnbU9gA7XPzAErEyR8iSqFS8PMercs9e9n",
  "key2": "27aYxUxYgRFnh1NhLjk2isTvGL1LT4UJgBYig17MGsCwfWf8D29iJfMhWpWyCigLJjAXbNtYBWUaQLHmDiqjRefh",
  "key3": "4hStgqiCQJWJsGn4ztxz6occNSgj8YUurzHunqE3shFkgVJS4omEj69X1veCeNo6WZtwLHhxfpRQBpaeEAMHxNdW",
  "key4": "5CffDX1T7ZDM3dSXjVP4K9J3Y2MoiQKv8g3wBC1TVkAycrq7JcKzsoY41CdjtMH1qmqbVn1Q2rL1MHUdwYxhgnjt",
  "key5": "45FkcYbAwudnga7gqHmgWNRRHu1CMShJCacWR9Xedg3tdjX4ZuSxugEX7TnVCwVxEw9r35p6JGg1zCx4eUGDWeVn",
  "key6": "3U5QwABbSYYzWKTcTr8NJMX3gN4rgk5TLFegRZhpKenbN6PXizRA2QQ94bvYKVau6npCSwjsFz1rvMAqgrobkrWS",
  "key7": "28kpd9zAgTuPTJymLJkXRZjSjNiwoQ4DFEWnbEwMTeR4Uc1hA3NEB1HEGmFzvdKBRK3JZx8FvxSr5JV85o2JXjST",
  "key8": "5yzTREp7bhvpQf9y39pdQPL2LzsgnZF7k4NevwEv23mSV8oZ9i7x9fxEcWkkt7q2rUjRQxSRiGNJbJcUKmXiwWqy",
  "key9": "7ntMR4etTcStuPPvmp3Bv6T4CsmhH37vU4Hx3uWsnp3sJ2iSbxwkfqZe8GYszgjZoaarKgNsbbGc1CBAVjopJ8F",
  "key10": "65H5vJjUidBkgsnQdNjU91DhQD8KJ13CPQnt9xomionpjWScdAF2bmiznRRwMLGqB17EUj3Ub4NNntTMdHcM27gG",
  "key11": "AeKWc2LgepKzGsNSkMT8izE6XfEaWZpRhznvE25bvG16nxkU7VfWYCaxunm9SswWhyNVXVsb3ik3mb9Hpt9t39u",
  "key12": "5b5J1wJ7jLKHvM3khTucYkVYskXSxJHJHSUGhJo1ZjLt4VNicJKcxRXSP4KDjHJ6cJA3J3E2BeWoPz2NFUnVgnqD",
  "key13": "3gecyF891mM6eU7tKeSLg8d7pvLuEtE7TgpKqy1CRGyoaHNJTUZsijrCcf8inQSXovV9jHCLBEd5riQ9RyvDDvwd",
  "key14": "4UiB835LQVzh8iRHCPtZ3havQ49Hs6f1C4noYwJDij7BtZNXtk8LX6D3haQDHPX9dYDc8PprecDrVtLMmpo1wVpf",
  "key15": "3XuZnNwBVxZZTChxa5TQLuSs2Z56zYXE4wakhPnaTzKU3aXZqCox8RV4K7QBbkyAq11NXaHiYLjWNGy26g6yAPKV",
  "key16": "4DEe3XvNDWwhMmEXwmG93uo5ShNZ68xQBGnDL3H6qdhiD8LnBt4G8qvrFXeRLvwHT2Hkr9EmciJYa2AQiyAHtQRZ",
  "key17": "4gsZfhgsSSa7shmTdyPM4KATng4CoVQHLJg69BnNdUuUXY2gszyZNMsqxZcswJMeeY4hr5T7LkmBuvqrrfTqNCDn",
  "key18": "38GGWNSN9oMAr4RheS8D6jDjrk5bbLB1MJwN8XE8EgJs6GSSQd8Q5Un4ciFeq6nTw26H1SnQKR67NsDRvarNxni4",
  "key19": "GjTt6HMhgs53BmjgZufFNEERbfgB1HaX9XUZ6S3y4a2uLScJy73xthr5ZsHifnmpe76u8EqM8WXbX5tZUrSJYJR",
  "key20": "wyKg7v539FXNznFcjf23DUTrEh4DrWwUS1LpUUyppyNHCsTHW3QDCzc7cKamiPRgWa5wXNVn8wUiPpdhsPCVNiv",
  "key21": "VkvUSXP2LN11ZoMFq91vHfm3bSosh6q1BtXuM27B9pLkYk9XdrGG8CzWSWPiXts6TZ8Je79esh4j5EiqEfGcnoo",
  "key22": "3UHRBeLRgQmvFWTBby8KnFAizSwrm1VMvtPg3g6wkWGpsFv6RbPiCrR7oJY2Q4kExkpyVXhkXvVHodarGs6wzQZD",
  "key23": "3E3FAPnNZQrcSJBFNv8MbGnu9u9WLczrdPbnzUzJjhqxWPHPYFMqA2x7bUi8CYAv3QWvkP3GYeFqHF1w5V41wGxQ",
  "key24": "4qjq33wqpvWgxefcHBDCg5ft17WUceTxpt6t1cc2y997NqWmWwBneiTRCrmqAH8vkRMzhvyWbfQga6ehWfAhYqbr",
  "key25": "2RRAiveaYg7QgkFyGviFtsUwMrXGxivwuvu7B9mBPjq4BFyXw5eszYVzHQPyYmtu5a3YH8huMZ8YsxdqeFNruPB9",
  "key26": "4ZFM5915RBEhDxqY4JP1yrLF6EaNeV7oT6FAbbbEZPd4mDARMGMXCVKJZZXV4x94rec2TtWgHAbYR7LDY52R4Dwj",
  "key27": "2LJGt8S3pWCRT5hRinMjmRFxkaJXnyqzhQjbDXie4ntPTDigc5jZd44Ktd6HPf3rs1QYRK9Ga3NDDV9wkti9g6Nq",
  "key28": "4uxrrNXYmtctxHr2mRyjJisj9fb7tnyu9G57CL5isAKQFmM9xcRirVEbMjxvjKkpHRmXFPJszM27ap6wgQGozbnb",
  "key29": "diKQ36EYXSVCq6Xx4QFWy8CYjY7jEZCXLMyUao8aUkvMN8BBx7Kj3CUwNfccvC2Y1d9GHgk63VRufoxgkfza6uk",
  "key30": "HjU2yWLsrzRYxF2yVMxRb9rwR91MACWVNTh42q49sytBkKt1DPZ8maderfyAFBxWstyDvepwLGXtLXxGxGFNQdd",
  "key31": "33wXGysbAe96jpDTFzwCJKdoZ6waJGkfSdhd6KGM4ALVRjmWpBcsAAGS1dURjhEVvbDq3ykFXHcbbc4WeSqZfkAt",
  "key32": "2YjCWiGNvcRGy6f4EcLb69SCUTgr56PoQJpv5gmC37jLrRrs8JNz2E4pfgM2Eb61tXxkEJ22qCFAS27Dw8fQUEi3",
  "key33": "33qmCCehRK6rucsdBn7NAnaQFAEKP8ao8paaxm7Dff1idcFzmxsNuwrT6HvtFZ9wAxX5FU8xd3N19ndfKgZ8YMuQ",
  "key34": "36zkd1jRnKj9cmK9fH4c5rHFoVDXd74qEByP7AHGC5vUqWLASkuewGMgi9vmgWd7Jte3SnWaS2C4vKi6ZHmVi6KA",
  "key35": "CVX99DM72y5BcMBmsiZmffXxyNc6zuU3CJVD4ZLTRZWE8fc8yJzBMn78wRZfQSWEA56KGWr28YKmGQv5ox5yscN"
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
