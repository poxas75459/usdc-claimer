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
    "547qM4oy382xCNXVRnCQjs74D7726xVZxtg9J5Lg8KaYP4BT6LKYbriYPXkjDafg1s3hyoxDAre8b54vUw5Truy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3CAEUiaTk1qwoqYjF5mm6U1HYdHBpv34yxFGoXvaWUuB5KbhCGXyHrtoc35afzeH8NVxBvz6idT5383ZvLr9e9",
  "key1": "2mk42Z8JTEWVs8sMaZpRR2817RUhsZPCUVg4keaErfxyU9ycWBxNKE4SELQhVmknkiYBZjR6awxiG4ksCdy4dEqT",
  "key2": "5EbTESwJKhoNJXzv2aYM4MMvLvqLmCNwACm17yqD429QwRyPmsNYzYJXbkJ8WyCdZLsiop21PVk1Pk95t1a221CZ",
  "key3": "3YpN4um4nBzcNas7YinznCrVfCnGeT8BNqWN6Znqa4XTARoUH3aXyzipvRdNzdFcVPwKyqDqcHj9SjHWnTcZm18L",
  "key4": "2J8Vc6PUgiaT4zP84TqF9fejfWeAYwZGHmDg6sobfqhzazCaixxtSM2p5JLeSjwJmqrTqJjtDZH3Z4sFaxV9GHLf",
  "key5": "4z2eVbwwuSjirVwjDpCbwa7sJvsfK6W1doMqhMsQeoxEvxSWF2tRHb5ppfKTrTEdYfCLLkd15afz1MV8gigdyeHu",
  "key6": "3kg5ASreorpum3DN5QYNmFHuN8bvp9JvpUYDkMp2XZ4wc8YPAUKq4GpBLJs9pEfiWanxAzXsgVsu5nLGrZahy2ev",
  "key7": "5GqApD9RvJQLyyn96y7NXhzT97BrUo4wEaP4KVGZdzZ52SKZtg6qxrVQADmH1k3WXDK1uDfvanXR5J3N4nSUBxib",
  "key8": "42Gw25LGhqgwpPs8oKPAXtf48Fbwwkvi5kHK2rPWiCUhfXGYgJ61PqYjBDUd7Spj4LUiCb4vkyiaZynpjDHGKvB5",
  "key9": "2r63mvKKGhG7hA3TC6TZU7DikS67HxQF6aa2icM2yKmq3qtZUEuE563bhdRLNyVsQmxC5RrsQnzpDjqFjvTh6Egf",
  "key10": "3WTQ7zb3E2Jw6ExK6uUtJqBwS3dM7KNkTNVVro4BW8JtbPhf882AqSb7tUJExTgJqzidF9bwpDj96PFnw5qMXQzw",
  "key11": "5zgyKBhWcHAz24zJf9Lt4vcHX3rrvhWq1mmm7FT9kKcw8g5SCXQgL3gHPTUkrGJMJ8njBbg3hteZcKvQraEu1uwu",
  "key12": "sk5ToyT8G8iUQKjvYEVw9wAgQLQXRbGwQpifj2knWYGbqXQPUiwmJYGRy3M27ouo3RTm7AGGmZCgaLBUXk1Vojm",
  "key13": "5k1Wua9q7uLjnCVSjphjrxEkQqdpiaquwVj6hzJtgFkNNJJEvEV3f3LRPcYPTA6C1HKK2K45acQev3Tw6mrC8TWi",
  "key14": "2XVsiYxthVFTBtRJxN9hQt1Ma7JFBqVYjiQjqaBAY12RuB1C6hZirNBGMrEjbuzrh1KjwZid1Ns7RKBu8kjrs38G",
  "key15": "4tJJdtWfdrHVtkC3AXRu5tQSykhPRhZ8mjEQtt9DdhckYZGfmteJMGEqHDvmG3pDze7Ww8mEqDWtf6RAkbmJaJW2",
  "key16": "4Z2vxdKXjLh15TwKGdAkH7wCX1RWgisjzraA1sNYRZS5TAPYytM3728oU9Bktv6m1URXb4tvrwjBWJpcM9Th3Hkf",
  "key17": "dgmLbxXzox3ZWAFkaUXcim7ZyQ2cGebDKkKvkUs9Cpbn7L5PsHjgiKSVBnWquubs16AwWE6TNxW7YaMtoFWQerA",
  "key18": "5S21raTM6Av6MWWNXQmU169bRT7S1aJxHywQCNt4tqsrBnFoNtKPsoBSVJVnjtqTUP4xuynCBbcjLACds1iBhf4k",
  "key19": "2aLH6c7BruNeyfbEpft4rckwWgKd2piB1cK6gFboukTfZe5zGGbcpDnVV7jTzKjBa2FysQCTHpYRcFZVUyFQYcoh",
  "key20": "2H3DrUVHcQ8U8y2x8HURBF52Uakmu4ieve4aDgT1imeqWL754yFXiLoUgjYxbFNPaueYQRayHbVd2RRo8gDv5hJV",
  "key21": "52y1u47CAa7Y7nKqKYmkcE396BCuFF8GaFRYg87MTHwVe39mvsjQCd877LHtrvm1rAo6R8oPddceb9jWhYdNstFA",
  "key22": "2kCAbBfSyC496mPpHrwcL2LpocNpU5atikJ35kXe8yEgTdQjfcFjYc2uxTnsYLRmmK5XDqmmdMgWdtyHZ9RYfMtT",
  "key23": "49P4aSgjhGrmX5fBXTG3itcYwCgDaiXrxsKhUmJJk5TbL7ULybNQtW1TBpTP6hTSp8chwCtq2wkP63FHwjYWpXSZ",
  "key24": "4hz8qCHjgRu5mvjjBGvAgbDHP4L7ck3diWVruMbnog7y35Xu2pasowswtC9V6vUm2fQX4fM6dzEdyZcPcjxCj7A7",
  "key25": "3QsWAXeoAW4pZ2i2hLAkgSQP35J26jnHCR6tH3H5VqVcWfCdT8MDXNLxx1ECVoHWju3xcWbJQXzpkUH8n7LZnZuN",
  "key26": "3WFF4yrSeGjNuHvPhLbneVCVnH92L6PZLSwhTTmYjRa4gNHtyKLgg9DQJuRYxdBHPdzdzDT99VeedZjAPVow6ZT3",
  "key27": "3azqGdetyESyLHxKwucV8TSizrXwPqvVZRD7cfbigdVZWmkG6v4Vo5MN96fe95qRvcVoXcMuY1CQabqKGrE51z5V",
  "key28": "5YJizEsPRUXa8mv9PVbUYPTUi6bn4P2PmhFubgjod7xSJiUrE7D2AZso9aDmCw2Th6LGGKdd6PQeqvFvnZaYDofW",
  "key29": "2oKavPfcM6H8Yj7uzBqyXqyPadxpA53TNwZ84n1AQn7TpXfLNw9zx1ncV3epUJTGzBRLAUZM87fzNqrc2ww9z3Ao"
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
