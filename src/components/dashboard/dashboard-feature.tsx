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
    "TjWYEfQZTX3RvEDcjySktYJ1NAQyQn9jbwPMF27xTCsrwteoicAMEqcz5yR5uCDaWd5uggbZBDh2aQXNXry6k49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7oXHMsKVoD7vt9dgeu3CCYZV4yKyBqJQ7ysCuWgS7MrNmv3nsawUN7uXSJqr3nTRpQSxxjH2hSbpcyhX5oQ7wo",
  "key1": "mWM8vJNA7DK2jPuAKCN5QnJgY4TjmrjMo6TcEhHqV99xr6rdtpaL4h4LSAumPqtYkK7kwfiLzcqdTCgcndDgDAg",
  "key2": "2aSgN9ULDyLsuhtaf7MaiY1MRsUASmoQohuF16pwAtkt4tZ1bJqhTGwcnBo3Rtg3LrUPigeCyZgMr1Bipj4d6aMe",
  "key3": "2n1J9dBvZ3wsftSHBQ9axQ7yb3ptUz1k7T5Ktc9twydmi13udQ1bWBGaTC2K3CAzs1cvV6bghsXf8aM46rC5bmkX",
  "key4": "2U5Un3Hh2Tt4ufSLVLoALZV8iz1uECLMS8AtZenoekVPoV7ZgH5EypXME17VaPMsVvfUJngxj8gM2MJxDXj56yqv",
  "key5": "3BKBHAFuEWEhUZjGJhNqatnCQM1cbhAKwXmdon4GWBhM7zPsMRZR3N1wqEokA7rudNPxD1zRU7bdJmhPUYTTBnRt",
  "key6": "3ou9T8NDhdPiQr1pEReYubgRtfJ9ef6bHBuTW3YK9Gu7GbJJN2gNzZQezMkerYrh69HY8X6zdjjYnMzeQM4K3vRy",
  "key7": "48bvikAiWu5qVfAWvUVCwCaP6fGq1BsG14dkgTAr4ymFbKKctZULjFGmqPN8UQ1QnVAaCb3g91u1TR4JFTg9aejg",
  "key8": "3XH2xH8hVctzexN6n7qCHYm3hrDFNLaWVBMEp9AwNLY2UpyCPF4hrcULbvBgEEzU5fALWNyR3JdPxAQBmoJxd72H",
  "key9": "49sPuzJ937X4Uumy1fQwFCpxNVESVuZ552xbMtniBxLL9MoaCwhQJkHCdZDANEDZaFFiN1De29UbfkQSxQeGLogX",
  "key10": "5PBnCRhJHrfRMpLuLHM4HnzH7XHzXBVSDgzjxAsV57Sv37usUejvbi26vcNH3VdBcN2r37aQ9ka6r4C74f81SG8k",
  "key11": "5KYBTj4nX2pa73399ZVkgGuj4xABkYTUJeHLovH9jDf1ubWMJDH4Z4gfdDwq1nWchMXzcrj8NUvxoS4ERbFpCyqn",
  "key12": "MVJ1deSw5LQgFCisGZxqdB4YX4dQDLfE1cZcThJ7JuP8E2ZngZiesCo9neskh1eommQTZkrPuGqfZfNc7CMQStn",
  "key13": "4sbH8mC8PatAvEqJfznSk5eraKWhU7N83A53Rb9JxhbwwhSNr5sRXvVM8S6hSYAwUHVjE7ThwSNY9dPWcrU1UmaF",
  "key14": "2A3kLsNnQiLMTKz8sz5dXmghCg9ccjNPGuRpsYEg1LUox2k9PviQYXHUDzKYQzV43rZp3neGKkqnzWjR6wExr9N1",
  "key15": "26QiB61hQ8UAjjgLrvL2hSbrfEU4zyww4BukXtf42pFSCG6jQ4BcZ5tGAHoRARKqNPJjPuWK7pycBsjFrk9Mpp6j",
  "key16": "ZG4sik6D5jTqxU2mMFgBSqU422v96isk5nWJGhnbFcwBKwtmp8WPzQgrDXg17U6X3Ffmf6o2ikpCM7K1YTo9C1H",
  "key17": "GcRXdwjuMkAHietZJRsSR3Q3AnBfZBNG3BkPYJ3VEEWzzzzpXwnZWuYWWfaW8XaZRipj1T7RB6Mu44swJSD2grE",
  "key18": "2YPCrAJ4nL3ak4iYZq3gsTDuPrqzFw3Hj4tr3wipN1sHm9vxhsj7BLLPhQ25ac1fjEhwfo2H9aWAbiAaRJkES4w",
  "key19": "5Xxig5ne57sDUyJQN4oacmuf1R8JqitLLy5YuZrpYQaUWvrqGCgtachgYRhciT5f7ocRZzwRJwWafVJ4rX8B34MU",
  "key20": "4UuqcpUk8cQLytiQdtv1gFvbUXRrZ8xqC5pYtZSus12hSzs5icsBjBAC8wVVuHg46uAEaqVNqtEFcnrXYq1QJvdL",
  "key21": "2uaUikHR7GSBpG4A1oJVLJUzDEpy9fVqBj3AD7Q4DuzQ4pB46bfYGmhM98VAiPY8Ln5kBNJUi8hmtkke54GtEyMU",
  "key22": "4QpzbFRBnSfYFdhMpixH5E5cxPbgYef2B6BCUPsgHFTBUK2Jwk8xxpgGu3CdHHdazBNaKpQaNfo7Tw7yBwgUdaXB",
  "key23": "4r1nCe7DF1AbaWRJJgt7bj7HHwVvb7m5f5cNpRPP5jHn1L3MRbZA2MzGoS6awMgYMSMDUmhRMZJekxpbQkemUqpX",
  "key24": "KmuhsieEA3dwhcmTw8SZRs5RoGS8GkRBbv792sM7ghccvRcds8p29fik3gK3Ffdi2qFp74SakQGymoDRUosgeSB",
  "key25": "5WYEEWkbFTV2WUVRRTwReK7jy9RykoXcLqq4hEvWYa98eoi5x1MpUdWepygh9VviRbMXeFEYu14ABQgd6vyKWpzw",
  "key26": "4X8Q3nFrXcn8kWBoqCwnfwqjvqfpB9yNvv9yo2Qs3tBnPndMyguD3MP4DgAG6MmiURxkZzjwKmsoFLy7yyn3n3nb",
  "key27": "3gY23C2J4GsvC1KswuCXz4M8Ni29pkxz3XaxjqnN4rnt9eFmhXy3LUYkPjkS5UV4CcmJKF1eSLNT9f6ExstK5o7J",
  "key28": "52iLGk6YR31enJGGz3yby5DjNfZiTFEwRTuioG3Xd8QpHbuXKDismZViKxht49jfBEoxumcgNW7Fhn71JKeL8mjv",
  "key29": "3cAfTeeuteN8zmTMqCxdoqCWEmbmbSCAqTEB2mNvxg6gdE3HFJMqNvDLZnSmw1KhVAiW1CWzkoXShTUZA6Gj342o",
  "key30": "5tYSR8rxnBckU2ZvjMHLP2a8c53DRNz3ANzVCzPDPHajS34U5iEiYMVSPgFZeaVdPkFdQ2ys1A8yizPheCoSoV2s",
  "key31": "3ayorRpMu5e5xutDob3h574tbDS2Em9SE4wVxtUx5zhpbbVwqAtxM436Td7SNMqrAh4zvmKh8dwnjF5iipg8YUKc",
  "key32": "4aKnNa1GK5j9PxUWBs6GTLAAUEbe3Qs8c5jgpuoMPknjfe6PJnQTrwnaA3z4Ff9MLVrWUzb5ES8PjBoXPqvKfKFN",
  "key33": "55Wvf2BvWiUvQwK8QfH7cB8grE47aYufTtLYPBQJJ2KVnVww6cqQvobR6JS5pEyYyTedmVc9U1rf12F3QdCWsuTZ"
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
