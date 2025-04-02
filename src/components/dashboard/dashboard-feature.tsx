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
    "2ErtL8SQTVhnAF3nUUUHPYseGU2Kxx6zMZ5frBEy4Hfou7vvQBc2fejJi2wfuG7AwUQ1nfgMm4DdfT8s8LiQxrzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cohJEGtyy1F8uaXHaWmFswuZa71zNvL7xJ2hGviAfWQuSZybLLedFKULu3QkeCnRuvgwopEWV1xrydA9Mk7jm3o",
  "key1": "4gmK4ExBU3RFcCDG8i1MaxdJFpiBv55ZvBLBDecBFfq1Ls3KRyoZ53fGgDB5qE2HUNuRKo61m2Rr3CM65QRaUH2B",
  "key2": "3tVfUcNjpQvUQsjc6HYvyytahaDbdtPyCwbnUtMVSJVwRbKtXop3R7NmLFUFYBoxc2Z8WZVubpi9TtLbX4MJXQmD",
  "key3": "3aKQgDVkWTeT6tfYxMbCWXMRM8mof8iHhvzTCm41i8oXwRgvcWKoNKAdz4v8Ea3FGyjDbQk2x2SahUVTnVVb2YzV",
  "key4": "5K9oPwUBrYyEYk8a9xMvx1Wm7ERPXrbxmDuZ6gptKLREEZRn46hmaosbrYApwFntNvQFDr7mWGuT9btchkK9QGEj",
  "key5": "2NwCvtoKAQnb4WZSyS2K81zcUH2FMXxbMkwMysN26VtanusGxfkfmZHaLx5YSqDL4WS4TCGfbEzchxwEgCac4D3m",
  "key6": "yheNHmD4DcrX4fw77PGYuhb5L5zZThnaP7MF89VTviSQ7JS5YaLWoWmWAxJ2svtfnHNu1NXG2V3Amb8is93DiCL",
  "key7": "3edEPY34wAEtuUp7LR8PBYX7hghRLngL7fxxyvCZJ5UpdfhZq3tNHzv7opuVn6bz3eka8Tf2pYtDn49YvTVtuJPk",
  "key8": "34fGQSvCBbUdgvFxhguJEj8Kq3GxeDTuSuvDXqxnHCCVY3JRBHkfS7EPHyDCs975KqNBHARs6eiT1G2tkSM1HccU",
  "key9": "5zHHeTUnFCo4tZTUbBfWF4sQhXM8bBHB2svxskvp1nZNm8P9ZjEhRB5Y1zgyefa8SVZJgYuTS2ATvRAeug6iBqYQ",
  "key10": "2gUKZr9LBiW4wgnsMSWK6YhEcijjNgcWyFHq9CdH6Xwtd2TPgj53uZrDTh5mW3jYE3NTEjbkWaq9Z2bUvSfa8ZQb",
  "key11": "2cz3SpVYaDUCb6Kd33CV7LEWcqpDTjnxAdwvwh5Wgs3HrM5cq9QXHs8pCzvDQXAqNmJdKpCfM7643UXoRpMDBJSV",
  "key12": "Xb7pmwrkN8jTzA6M6PrkVXYDBAnJ8PnGjKLhqMDLPEAangzohJwKkt6tsR8LPC3px63sfDhZkw8PdBfJM4PhPtL",
  "key13": "4pTt65GhMwQH46NVqEzRkkPxNPJhUuig59X2WzGR981ce8W1P4FjZff342JtAvCVnvwbRwwGJv5nksodAi5ukJQ1",
  "key14": "5c4BfgKqNdvJ3AAaZW4Nic5fH9KhS7jPjLMzX749wNoSQfpT7MU1qWFPL3JgZaQn7M1XoxhkzfhH7EBULUJWKqx4",
  "key15": "3eUGQVNRaCSLENSZ51w6TCAoXRNoQFRbYgvdqHn7sd6jLBZeYWmGuugB1HJdr6vh8sWPRd1kSicqrvoBqAN1aosg",
  "key16": "5SQEBoEYv9juzhNDYhuCZPPusVyRgmYzuMHXBCnzakPM5s2fAHSTW7YwBqpkJixXfHUgLArBWQDKH1wgJAoaacrt",
  "key17": "5ndqthKiPof8fo3n2jX3sj5eLeQinN4CXeoG1ASTJvnKnrYagu5dPsSPGcK7Lo51k4rs1646N8ChrrqyB6yvMxKn",
  "key18": "YFC2VfkMhvoevJTVq4utXLqGX3NqmMha4A62UeWQjaji3zdqncGWvmavVj5CuGd8ohit4XaojZqgi4hpgS2yPPH",
  "key19": "3VFSrrQ1NPURsT4eTb6Cn8Qv4tKsfwYUWG2Ly258vJPrb3EGuCPx81YpHubaohaBoz9GHUoxDejPz1PYnCMSHddH",
  "key20": "3NvJgLo3YvCsHhBs42XPSr6VeT94ja1SJ6ZUtoRGh2iKw4YZXypzyCVrBLswJBQ4tDtzHWMW1NRkRSqRQTyqcZ9M",
  "key21": "56SKFUgoCXUnKoyTpiwegnTsASZBWh5zA6tp39LU8mPW3HxyB27n7UNWyKVu7cnLcWN6oNBw8jvTnimdvHdPGjYh",
  "key22": "3n5N5d94zqF5YtqYHPizh9dx42aT8Mr2k85bH6VnasjMG4aXdjueSzH3xPhLqWCyDjK67FmxXgFYmLcfWAdLNz4r",
  "key23": "5rHRoV5jxUssFEadfNWPKBHsyfxbu7N7qVNdjcaCPwb3w31vP9tRDCFuKFpcyG4y5o14C7wWbBCAQFkuDPQ1Sgmn",
  "key24": "5RAe97Ct8DrFaBoeThQto7XFmUZ47JDtdQa71dkYoNA9T7xMLdHbrPMbcwr54tewcNo32DhqNUcaCeFdCAXRK1h8",
  "key25": "53gF66LCDDH9inpF7ukUTySk4FiwTBQ3fCzBz1oAZjQ27zi2WLtc8k1NuBHqX1owboWtAPQbgmKwe9gL16zzwyp8",
  "key26": "osYVZjdxRfv922FSRmHsJHBcbbdrun83CDCRGDfcqMB53pz9No8DgmbCjMKAhi7yMuDK7epktKxEePRRJUrqBxD"
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
