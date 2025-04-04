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
    "4YnrMGwBvZrovw41byPcjCW7XaTQEydPtBg1B8z1dWhTYCisq91wXmrg4y8DuDP3vbRNBZEJRvxDQkV3jT4aGLdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfcgBjhk71eq9NNFzJ2QKUXCUVmCGBqy3BbBLq3vqfodomKFPeZD3C9dGuqjGeeHUwsazgSN48nxtRzdx3pEkR9",
  "key1": "2km3vivu22WR8gaUkrpmuSkqwSXRUBDzygUP9avj9cusJVivHU7GMU4XVtfJP6cDVWoKw8kMLv1RvzKy2pndn3DW",
  "key2": "5KEFNvqWa4kVqf2StxWTzjwnkqJWd1oRRc8HokzS7emJHW2yHHQ4dfbKbz2ndfrUnJenbtkyoVrjr7MyfSZ5C6vy",
  "key3": "5mFg9DGQXerfRTATg48LzwikZgfJDA6L7M7BaC76CLB7hAGHbqDYWAtTryj1urnGGv3yXwMvff9XuNTPcTHk9vCW",
  "key4": "2ctEAaTSXJgDjEaaP3bXFXwPqHxdsnSvJbFnDVUSSby5L3W1MgSxGWVC2D1DkJdmHExsAbafeNFCSUrAQNV3freb",
  "key5": "2AXm9wYCdYeVQF1ri7oexcmaguskf7bE9YTzvUGxeKEa69HPw3DVAL4CvPoKe5AFtsULQMNrEjzoHRLWZiYRvDyQ",
  "key6": "3zk4L4xYe1B41uYgTSzmx9t9hb9v2v4eULsBWaWQ55gtVQsueoRjFu6e1nBEXNHceWTU3VydEai75rVXQjZ72Qcs",
  "key7": "3rGb8P31sv8LHNmXeTC2nKLJzCkTG9roc55DcXD8XdBbPciu6Pqqacj1SJhweDY7p7FdSbZ2KTEGnZzJoGUvAM9C",
  "key8": "57tXkGiN2LwPJdLefnfkEFeNK8h8FeZGDwGmrynkPyax15RtU63R6dpHLJ3H5qxtFRdVJnCGJxdnKGAL2eqKTDZk",
  "key9": "4CJrGzU7SLjjosUXLKmYAQynAxoCubFDe3qa2q4A3Ezkt2FHpGRBtuUZ7e97C9bAGyoPTPNhhisDxnyz1EqCtHL9",
  "key10": "4fv1jJDTpWWevjTMu2ev12Nya2yjvyg272uNioCNANt6DSJ1MCTyzP9GjnnHjS4WDxRzCc4GnYox9qAThrfE69p8",
  "key11": "4kgv6UsmePvcLypVCaDuu73xbVy68nJRMPLQ2wH81YvfxVjtmGwXGsNRmxsrR2TF6j8ju1XcabU3LYS7EWJ1C9DW",
  "key12": "51iX5YmuD5FZRWnCFeRLTKeyiuQyNwmFtAENAq1UYEfKLmbo9oyzRvN1b2FKvwzBd1dwxbL6enVycJeJ4cCW3oyZ",
  "key13": "4N63ZhirT9wE6XrA7qLjwmHJy91i1KYd2AGB9sEZ3uxGVZvNPLEVqKQfFLnkFQoru1x4t3HrBLtUSiWfQz7kvuXA",
  "key14": "5Bamqmwj18JWdPmsi2Jaz6axRLHtKhAmPJVgQZeVeedFfkzJZ28k7wUTzpv3rtjv6uedMi9BKr75pJGQmXbzjUez",
  "key15": "2xAw4TZw2pprU7AkSrb7JUSF9zk1HLK8yn1R4iaPKYMCiKNirS8pQJ55NKNoA9EhMMCQqELYr5wv6ppbygfNooqs",
  "key16": "ee6TmC2BYtHUzDfMQPTbpHBrvT22XPmE5r8gkjyNvaHUxVKmPCMGdzmaSAfSJ4sGz4pyBQErybB6Wh9EvbwvBCy",
  "key17": "2MD9xHDGgxiPCpejcfb1xn6aaWp9UupJKqX9AMAi4mAPUc7jWkKJ9KS67aX94shaPh295mSmJ6R6JGXLKRXMuYAo",
  "key18": "3bHsq4mpdci9dEqufq9MHiFBSRciaH3XTbquQfrXAaYuHaaAV55fgGyV4uhwq5LRisFbVcwFFuH6EL2mTQt5ut5F",
  "key19": "xgrDyzTWX8j8MhbPMThGgTHq75eVkzcKRi54KKnT3mEmtD84BbuwKARPeTAz4KNiXZYYaSgeQXpNL3sqshRcdpD",
  "key20": "5kW5DhRAnQaiieiAt84j5rwpcrnyifCzjyqZ3ZEJ1DZBi5DQSSKogfDWc3KHAzYiFAGMevdFsEGfryNFtTa7ES43",
  "key21": "45bvSGxRj6hqvAbusqZzMdJPC4HSun67FX7ATqKRk4TSQ1VLCW9Nb4ZLwPxoDpQJFPr4Cs8y4N4rYFyVV4yKwZMz",
  "key22": "32cdYkZokUoJpfKWhwTne1W6FRmjuDTRaHDvDxJiRvuzv75ShhJhJnYXXjQWwbwxmnB4sMBNeJm4tdKLevNZk9dw",
  "key23": "3DYGmBNMeHGwLysEazcagcvGA63318tCfsD7ApN6vRhNvUaLMTdXQHb21pL8pHixzMsjqZH7yGcXVHSXx5u6FVwi",
  "key24": "4FN2Y35AbVuoLAmTndGTTubXVy9GmSB9C6H9DGwMu4s6g2rvs8MTkYLFszfpYTFmapYHkq3tUdGaVqqfXh6GWv4L",
  "key25": "3hQWeHwoKXqib9A5DYY6bpUEMBVRKUKb7Gi1H7yDHkmUNmHKTPCHtLtgXbaS31aoWqBoW6DvqPKdq7hm9tYKBQRq",
  "key26": "4A3gVxVMtuQmPYDVJVK88qKRTEjYmiCzFYhEhpV9RGZcd48H592sVrQL1BJXRqNcQoaThixuKfPUPHHHv1cY3ND7",
  "key27": "5fmbTvRNFDmU23qUby9jqD5QPPU6xJRnYgjg7Wi3AGePcSjpYAyGCBps5Aah9r9ekT6p3v3aeeMm8mFUhGRprCcC",
  "key28": "4ttrekPTTqhZpk66fsgVMViRNS24i2LQxGpXBsjamLfLfyD8ZC3rMrSBUYLRDnM5Z1nD6v6MitLXQ6HHkPMEDZo6",
  "key29": "5yMuW9jc2t4WLd3yrEnTFmGgA3sjqn7xsC9qo6qXMo5HUQUjJbwsNocQFDBRELvqguMMXJZEuTtSJ6tQC4EVKWEc",
  "key30": "r6KphveanFEo7TJytyPJ9VuyVVntQn61xLF4btGX7BvP5n81hH6FXvmwL2sRoDmZpVQGs3ewfp9NPurRhu5Xhum",
  "key31": "5X3R8SNW73eEviPQMhZA6aDXUK9r26fruZvwARHqVyLRP3DVX1Abdtt4quHQCJG243NFkqSMpgyU9kCnFeRLHTfJ",
  "key32": "4tPmi3jWQtB4gzfhfRfd9evdzXUuabe4po4qNAKk8eTFLPKY2YFTXUySwAnCNpHi4xxqu1wPwuj58Hbyo3rUnCdN",
  "key33": "eiF2MorYn2LbR8ipWzLUwn7RaBNSUfMfuEPi3yM6VqE8vUzAABVXT1A7ur9XwZM7LyRxcJUpmZ2GnDqrAk79YM6",
  "key34": "3sHNsYSXJpdzkToDs14miiDknTkrb1xUnjARWCM27vRJ1g6a9jDWpxTKr9cQeYC6uBHo8TW7efB9owTbjcK38hH1"
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
