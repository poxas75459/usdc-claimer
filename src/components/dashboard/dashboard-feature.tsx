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
    "37dB6QjpdDxJrTb8M2aDxkEAns5SS22UDPvoj7JXwfeBD1Cayec5hQ6gDRZX22Wz9bfLJeETFmwjyPJdLDzxuXz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYbTmdCdhhuKqTR8Xq2ToqrLJ94Soq4DTVDEnXaVAoRk397ogThEh2qGCSrVKzAfLCTVpM74zxsHjQiyccr3WrZ",
  "key1": "5FoLt5A9AWHoXpod3frSJFPBnNn9qTj3v3xYYPfE2UyqsUmuQi2ZgQxZvDm82HVYUEXz4mjJ8fKsuc5ZQ63tDhvD",
  "key2": "46XyHxXN5aLkf3aYaA5L8Z4vySWUXfJ2xkuAqkFf8bCz3FuXgzAjqFvbrHvBYcEajFQ6QFMm3L4Gpm9wvZdbhJaF",
  "key3": "5cgDCLGD3ZZow15TioPbSc3HijkqohZiVBh8tiiYz3m14YGpmKvdi7jdfKoYQLxyTcBrR8yxf2MxMqdfSji8SNuY",
  "key4": "5e8rpPzcsf9ZdU8peh7GFxYXWEUTCfpMxJtzqr7gfgj93pNcnYXGfF9RZVu3zM4LLCfDrKtNxDWErCRZ3fVLkzmE",
  "key5": "2swhTemq1shCC4cRLVakap34KCtdk2yzR78tcAs96xfmUeecp3ayCBP3mvqxwKRwH148dwoPCPSEQjaaxP6fDqYt",
  "key6": "27knj85JScQ5zQ7XFr9nmXeNnHnxaDRVSFVFbBWr93d3mQsRyN7J5ZPRo5V3sHy1ngLvh9VfRX3EQTZbx5zt1tGe",
  "key7": "3F4HvdJ82X8vZER8fM3xvxua83QP815YG1oRFVHsESE8Z4wNEN4yPWWUaYLUYMXu8eHzKnU6x7McLkHNZGWLMmU3",
  "key8": "51FvDMsWtRTGsJyJBEPnqSnE8nCzo7HSMYAnwERhVB2LEXACunT7QbvtEfKZq5JUvgaJhrDd7BqmYfwzNe1JZrM3",
  "key9": "5ZAQ8eRaQQG9BUQvjJ1M5SNM6JMKu4MyZT2dLbu3SQYo3uwZdNrwrjMtQXF7hfc97DuXwzCwB3cUqU6YWhvwneyR",
  "key10": "5M4jMiJ8ZwF1urmaQD1CmEFr4hYb7iaGVFH7iK3Bad4sNhCEvgp3K5s3ZA7aU3WgXF1Ain8L8qf92yBEGEbNpuj6",
  "key11": "3uxYMTst9qMZiQdGDunGAoFMZA38Srhr4hWmzN7RehD3mqHX6H11idqEWnCJ1FSrLCYG1LYbKUBKthuHwvzqik6h",
  "key12": "2zvPyJMH5iDk15BkdEav3ov5YMj9VJjo4h8EZu2P7v6wBQcgcauwUYcwEvFCmQQcVtzPJkwfxZF8yPV5Uc8tuKvr",
  "key13": "ahft1URvsVSc1MRi2RF6Hyw1hXvSUs18zBfyeFZPoAzDWncLTVrVaPU9v6XzirZiUPcgWtv4c69LQZYnqyzhmQN",
  "key14": "R6uEMg8YWrSTYM9Y3XM9EujwwJQp3WCGd2hdqgQjUa1QzZeQhs1SQCdUUZQhfaBbw5dTxtcJazHpk7XUFRFvnJZ",
  "key15": "xSgVdvAVeTgcCiVbk9cEp3J4m7Fn7PgiPLxbFgSQf8YdVqNe4g4q9h9PBzffrp9RTWiAv4mFho79UQYd89mwiTk",
  "key16": "3r9vRD6LNz7ZdMFCHZuNKhUXGwqchBjCSc9P3JX6qtY6FVdgSUSpXQmdAbrDHprUvscpgxSDMToHjecj7D9xH4ba",
  "key17": "5xA5LcDKxkUbXB4Au42jFaxyNEeyzEA7wAb8cEMQM9mvcMNNYYjp4ToAEeKaEpUG5jgf4jBDQt4r78xBuFnShXjW",
  "key18": "LdwWN3KwCF6fSd1jghATdQBhfjvDWAyZKCYi9icKdrsXcfKmazWWkyqTHsvAV7Ardt7Z7cRvrxjYiEoR1mjyauc",
  "key19": "4UYuYKMJmcBTVPN29qQu24wpaLEB34KhVEwr7irJNbf1TFs3qN9N7LEquzYXcHfCEXruQ57z71RQmz7LLKGjzBeP",
  "key20": "4BjtvmKYP64wzVi8ad4niDqhu9RLz1PyY9msAF6czAgT8RCrK3QPaQocLHkD7FfyaP4VizzGg6ZntKKMxBxowfZu",
  "key21": "3DyGHKFhmQHS8phRFaphK29TBpMHpDpB3xPKyFJ2yhEURXkWtaNogCXwUNg7kTCqEP4ZWnak3oWXMGGMActidsuW",
  "key22": "2D9dggMxXFBRHd3FhGiAyUDqLuvcUHPS4fcQPUYA44NPi4VzKvmgCbguCGFe2ra6r7wc2GryjHiTJzgmZCvU8puc",
  "key23": "4AxtABSeQMCRCCtB2PBzfK1gU5hwWPT8ScSWiL9d3LsekNhQMVZqGqDjZse9t54pQQcCVMuJgW7BK38oYYGqrZf2",
  "key24": "vRRkvp9vcLPJtZgM53uUs6G9hcPqiYWkJjjJggYTXNPKp7U9z5h67zeDjxXqj4oTZA5ADgLQ1aAND8KtqKqKmRv",
  "key25": "2nvQqefn4wmRA7rNb2FdKiELhuctdxnhUJzcjCUQcektBqc2XwDbgntWiWAWCCevmbyjTHy2WgUUZc4TdgLrAN8z",
  "key26": "2bkH4wVAdFp52p8T2mYVU5Q9ScxzPAv6izixzYXHXfXufDf7LCUqxvXcFgqW775uY1MrvxVSkBWpr5uwYsgvQft1",
  "key27": "2PMDmc2xHeTnDQoS6J6C8oyKZwypi88s7ZNyRHNStr1XdWapDBgQs36Go8KtUyhwcA5A3msAPZoxzr7z9EYoq6FA",
  "key28": "121Ha2BkP3BHckmotCTNQfRGxfJFAjfb7Ffy4uSSJKe6pzFQvKxLUT4jsYkF3z2bZkiXsHPfC1aUTJh1e5eJVgkc",
  "key29": "3kSFgVJnHzQWaR5C37FYAEdxswdUYshHGhh8Uxr1RN1hxRxbWicnMnGwFZY86aWRVM1q5irS3BEnanE6wE1gsL1K",
  "key30": "2q8BhPRACvVxN2xb91npbt2amUikgvGbL6qyUozPryuxHcsQBdLSmKEmmqYU4oToy38orggxKu22L9YvDF8c4qaN",
  "key31": "4AYbrfqEmTHAWkSAkJdDMN8KFtoEg7zjhbzbDtk6jwq4yMMmhc65skRJ2mGBGZtrgdKGeyfZnFSx5HAmmsCEJRdU",
  "key32": "xY9fxRGF9BRjSNJzh2EzadkdMz6Vup5Ge7bCDVNZncZ26t4dL9WcZEEi13LN1Xcmvzd1vycwM1o36oGFLfRECNc",
  "key33": "5dXHU17pELoEB3evHupQKKniNBMbUXLjQz6uqBUfAj5zjpEJ6SwVsZJgGnW7qDt2FdH1s75rvG1CxBAfrt5sJ8L6",
  "key34": "51SmdAaPGHjSLc5M9kpEPGau5noynXTeNf39GXPT1YtJnMmFMp3L7X8ZUPBQuGqjcLCuDPKFqhygbcNRLMWK5igQ",
  "key35": "4j9bsDL1vKfxZNbMPgJe4bEUCZUEhscTj2EAkmNRBePeo6bsAsj3RgUWk4kPLKhrGYTX6yqeTWk5Ny4AJ6p4x4mD",
  "key36": "5qm9RAc37wqq1dLh2wRcNW2CYNLUcFQwrBMokXz5B8RRqLJrkpCxzdtndpbS1kc3SDNba2AULzoP3mQC4KSxddH8",
  "key37": "27MQm7jfa1sxm7rhAu4k5hBGyMwSSvupbpy2uTVwMRDCWW9CZB6VX8sLWVvrhAgbDgu4gGYF7JPLKhCiQE7Lx1SY",
  "key38": "33wuHGDktMZB5PqPJiSkedj4nW7EjWDUUBiM46VRjCsCw3w5ZDa6f2R4u4yG3cQUTrjeYyFLviVKw3cro2wrWwuH",
  "key39": "5n6jv3saQoQdWWLLWa46RWFxu6s1CzqaLDwDwmB8UfiPLhQyNJufertDoJNgyVA1HvDUVuvMFTYHSA53Uf7rTREu"
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
