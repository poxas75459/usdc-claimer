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
    "2su4SWq1WqaKzY7aZS5iSJp8xVwspMhJfXp1KfhUs3F5xhXUY6MMgVwAsB13oGt4Cq2CN4qPQvpqavvHBoXvddPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SVgDUnUR9n8qUB4nzmuJHbPLHGU4drWmeZUTdSHx3fqQT4M8fAMTfYzGBsXRKRJ3geAu3ZLWWgufvRz9yYA4SB",
  "key1": "34fZtTjsetZjoNhJhBVshNouDLfWPqN4soM3VSUVrP4tqoYbTv6tVUULZpYvzjiqsu7ut9GJL5vZb5KRqDFdfzZu",
  "key2": "BkhYgGiL3wgkNZWgfzW5Ucdt5iFGxvYmWjR37VhXo9b4s7c9GHhMMUS8BMZw7ohQFjgmcjJaV9iispQNMQsN2AF",
  "key3": "4nETDSYhhpCMNBCmq3p8TRG718WoivjuW9eavUcxzwiYMYNeRmdrJy777Uj3q1RtsrfCGyLVJ2EGhoAprGDeXsA6",
  "key4": "5E2GWzXPSBFoGky2fVHP3CrW8xYPcYk3c2kUewoK9nCz4ZwQxcVDvzezFgnmnLe8WYRNxkdCcR4JwBRtpwCQohhf",
  "key5": "pU9QhetTThAHfXD3dCdSN2MNApFSQQeVgZmmY899e11vb48JVhiLRTNUiQjoFvmCfXcBnrkPPCLMdP7cm4UvBLV",
  "key6": "DrRKqj95VeEWHnknfK5HbxMioga9CLStUgFJiekQqcJVYAZq6jtS6J9fAi7qJ5C8hnSMryY8iA2pXbPXE3FVVAg",
  "key7": "2paLybCtDRFZdvMBpi2t6hPFyyoiAJVCw9AC3ZGtspgZQgd86tZ3WdT2V8SGvcbf2n7BPJ4de2ik8wr8YPAuUiVn",
  "key8": "5urqd4eCMTEfSctYcyu6DxqCUzMVFwnfoExGztWmEjcWq5d8UiNtYHh7YtekdL13SJPwwy3RK2W2e7Zbj1TVxw7F",
  "key9": "2Fet8HTcG1uWa1sLNi96jHiwzMvXSEGTD3KTa2jsfdE4PLWCpAz6TQr7JTzyKfZTk9BKjX1W7sK6xr3g4va7VpzS",
  "key10": "2QWmXF6mrnqFoYrJBW47fEYKSwPb9Ykt5B75A15fHqAXNMbW1Bm9SbtFzRbtGCdKCBoGYTw7pi27QvZnLMLzvc7z",
  "key11": "538i7pzUPdKPHhDZLbTqyFWjvK8L9b1y7XJrmRjs2ShYYhtQDshEzXVvNn1y7gHsyg8wRAHzeLZQiRnnqE3FEwQD",
  "key12": "22V38Dm4jAGA6GaMTr9VjPkT3xgHXcom5qdd4G5GhTRmFnxgPcW8FBE9jH7fHut4nWhzgUE8xFU4U4KasCRzCU3r",
  "key13": "5PSJTBUVk8ufhQExmyRDjTnvGjj5KWSKFTxZUTUZKEA7GBf5cBxezzj14joHHQ9sKg86EmL1188QgxwqHxQkRsPz",
  "key14": "4uJ1LCnNjXSwtFxx6GXHrXWmCA9m4giJqPFDe86ymkBv5cnJeTSs2JExy5vHzU3Z3VxZs4AWFm5KqwUfztckmw7d",
  "key15": "2Dp1JqwfnBeGJvSVBsHJg7W1vUpbcmgDJjbj2cXiBcU42AqwyLUGHKg6yTsFih56SahK5LB9RygSioLjGvY312xB",
  "key16": "2dU9i2mRqJHNb4xG3az6zee78YAJmJyevkYS3zxj5dj9cfhXJTPCSoBDHKvA4wnEJVyMdrhj8aU67kzFiiTPT6ai",
  "key17": "drfhrtxJutt1vyZUzrH7qbkE72pbBj3PxL87xukZr6fEWYG5cBsAPNnF9LKWWbRPcGq334ecdhcTFuAKc2hxLQY",
  "key18": "3CPmWRhLd3kAxvBXXBrm6Qd3sb3ugncyDRcZje91TjsKzdG7AfYgwF1Ksd7ZTRYT1SNjpPDgs6GXqFL7DG2A51sB",
  "key19": "4KDsqcqwJ5KAiMa5US1yj8LuCGrzjbtdQT1uonyZ9NozHMis3hm5te6dzQDHoxNTvrjT7UP6oDparp2jP9UR27K4",
  "key20": "4u4DnvkiBApo5y5to9WGg9B2unCoV93d2tQTjwS3xNsDcPMtbGm1mV6wQbHGaDhFRidGm2RRcxXRWrME8ZidJdHh",
  "key21": "4cGHbdLnDVFY77nnXYEUzq69PnDYnQhFS9B9H51g63rFWu7whzGqLiY5kyfC1SuwGTEvHtRnhWFwkPoVsKFohtAu",
  "key22": "3JcKaYBNhGbnAn57jDy7xhia5zP6KX6H577AamK2NScrtwTH1SGsXYuJRyJQG5HPpfJFA1pLCjMjKwBPBFbfpSDL",
  "key23": "2uonLcMuRerd6kRxxsA3pSTALjHoBLyxQfyFCSJGggM7RRqEb2TnZ1ugrv6sUzc5zByxjfsU893L6zbx2TfJGFus",
  "key24": "5XCyG8cnxLRQKurWnFgHAmrenvpyhtSyvyzeCL4XGPLnCtjzkQ34uVTMhnUeAY9P8F6pjvjwZK4fsw8Zz2BRpnMV",
  "key25": "5MCMGphLvbKAH6jeySk7BuR8nsF4PMrz9DxdjNsqnaawdutAein5V3oLQrfLTDQUH95E7Z2ceSogEDGijxH3BHB9",
  "key26": "346C5AEkKLfsvdFWUxJQ6WUbJqJz9nafpD9gKFz7CjLCUNW4Xd1bz2WUUFQmqzaHzAbwiGZcLbZhtCqzP42gx6MY"
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
