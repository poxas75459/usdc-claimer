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
    "2kJtYHL3toKsd9EyjQMAtfredbsZyVKp4g7wjPYNer1M9LpT8zNLXKPqzQhUedkPkTqVNpPyTbQ3tcjHwzLsLrid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TALYY9LCg1F7BAPU65ULctfsvHeRA1GV4NetsNemUtEGdwbJJhEfSeRTk9AYAKkwxu6reJRFYowsgrJLQF9D3X",
  "key1": "3Kr4RpViXEcc9DsXBhWtK8ThvMQtT4CQcxNUjgkoEQjCA6pKxWLkzkhZuA3qhvCFCUdsoUTk8XJCaMuzqBK2QFFp",
  "key2": "JDwh1N4nnQtmiuE9ehHxZ3fNEWoqajbDFnd8Zw7D4Mk5eopvLuwaZFsoLAx6TgTUgH3ix5tQ2c4fboJ9NvAWcPK",
  "key3": "2DxaWTUjBDYNbaHUr8bnndq5shm4owaUgEw9vd74cYzT2tegPTFvFv1d1LhdHLTLgfMp11RuzQBFCLZWnvX15Q8G",
  "key4": "4YVjgYzQx1rdtybT8dKEVY2wJw3WGN11LT3Pfi7jovZJ1L9jHR2jV9w72jBwioVL2H8DPdaZWXMhGDQCUxywhhAk",
  "key5": "MJMbXBnkWb72ERqvxee2YUMJYhaFiHBeQ4oQmVhunCaa388qAwCXASzNGLCmVQjkUH4jQ8wov9dRScjktNTqGPw",
  "key6": "5WojsxXByBUTUpBrerEEwC1TAArnojQ7TzxrNiLrEVLtPCNTeEGc6H9kEukCz5iQGSVzesWvujEVmVzXo1ZsdC7Q",
  "key7": "5Bwjba5xgQrpKJ1AXzKmsebSxcH4hyszST9vuiVXpNhpPMaXvvZcpDSTP8XwVR2v44U4mG7XMHHKZ9GpNJV7yvfU",
  "key8": "3M411WocvgUKUTRB7BZeaJpF5WiUxWQEefBnFXydT5nGfFHJFUbosa32CdrLLYhGM8WVTFX8AeFpjSPykcqbE1SJ",
  "key9": "4vwG92Ji7VkZTGLGVd4aAzkQFJVVxEnBRuyF6ZH9ZXqkCHAGMPQntnCSP48GMkRHnzVagU2339MGAVzQaGaxBQAp",
  "key10": "2sMnEmkXb9UbzwfNuVavSY9KicQq6ZRBWDy7E6S1xan2hqd25KFp1HZJPcZQZiAKxEqguPVx6BaC4YRGmHzyu9So",
  "key11": "3wXMwTmKFBABawwicdmmsySBcpKDaWgui27ifnPUYbvj3jd4oUujPDGAVxhCavK7tWY1wAfXDJwA2NKCBbu86VHx",
  "key12": "5uEcN4qaGMk83RfPNoq88wF59fRzyq1yPHnGXvVwsAt7qJg4bnTsuzA2LWgNRPsALt3JBtR1urxRz3V6TynAmuvc",
  "key13": "5Kxx9DXJtqrn1pxZf4hJsSz2qqFrHqbNSXbiMKasKjTAZRTUV9yLLJkLtgjMnK4T4UbJwLKDhk3xSTaTMpYznFRg",
  "key14": "3YXVpggfAMZvqcbpxvqniE3RRmQUN8pUC6Z6CAYFFeW93f8iNBYXxNWoGNTm7qLgyDeFqfaqqyQRtxXYSRCAwvnG",
  "key15": "XNrZznHYSCBmY2Cdn6rBbfSuYMGNeNESghCxFmzsD57CdBCbyG5dfKaPF3WPpbZEeBnbYbiw1m4oMaaA9MUPQbD",
  "key16": "3CufJGYUhaCYmKWdzv9BWXXa2aTNaQVovWfvmdaXNZqGjN6dvaZJ99LTTBx9WDZmW6SToXHZurpBerQ48seMPMNL",
  "key17": "3taCSvUypJMAhfnC8NUgd4VWAjHMCi4meirL155U6kieL4DhqrNEdBxC6JFxqyRb85FbznxrgLVdhDgnUkgoRYQ1",
  "key18": "4kzVaR6TN9fQNnccK1GeXfnogYqjxuiApwCTM3i6CFJ5U6e7SW7TdimiDz3X8T2UDMqJrreRn3U7AHH8EvLzjoUN",
  "key19": "BoaMTMYxTJFEEUnJi3X548h2fhe7gGYiaGuA9pAEB4UTzny8h4DD2hoqgeWnGubaio4687B8SQ6sQpuQPVBWyqY",
  "key20": "3a1mAKToTgitb7YLoTy7oqC2C6Vb3VSVKkA93P17fsNqFGkbVb8MEcsvka5GwWqCFyUAyhdxaqBnJBghvShbqG5N",
  "key21": "2SLqJ6G3fAwYN2jretTK9AEMcbceT6GGpGQJYKPVh9X8ms1Yw6NfTTsAQtZAyS9JRyuiFMYGpP6tFcn7NhsvjA2J",
  "key22": "5KeXSaf2VYaSKuqCcgrxYsS253w4mNtXdn6MscVSNhbQEJkyaLuAER7d8ZrmcNfVKxzH82vfbMsdLvxTvMLanNmn",
  "key23": "5S3gAUFjXTo2KVbTB4zd1bud2Nrr6WEo6EVavevrKZ3iZe1EHfJVPf38n2GVT7aNgkEYkgLeLtZFQCcptUwLQFfe",
  "key24": "51Phndq5dzpn7hSzY3nJeh5djmMMMv8ALMLMKfPPFXRjwKSMHhRoPYG8bvAq6Fnb2TPoFeJrPMZgksLJRtoUJHMB",
  "key25": "u57tDAV6P7TsxTdQ1exdXnnM7ZMjbbfyGyYcraCh682hi5DF5Kgnx3LjqZMWxx985JY8ZAKefkPCaVPvZyWGy3V",
  "key26": "32CqH8iVyFyZtYtgWYXjFm5jR2ZNrdZYbyfo7QPVtzHxDaccFpdJ13HeZoiZdS7CSoEHbbwSYui4XeP64cBNPUyM",
  "key27": "4Pq5MUb8hoNY6iVjJSgHCXZQQf6Lnhm1PA4rVT8jmci5mq8MGVVaH8vQfP7qzMp9baKX6ejN4HNMrDq7MA3oWSq",
  "key28": "35fniJkguTuMwS2qWsLdM3ezbthjMH2SpK8AT4VDM2ZC2jD18YCP5pZeNigzqWyCi7iJenE6r71amkXHLfPXe2TC",
  "key29": "Ym4UQH5yuxmaJscF7tdWQbu2TXLMizHLEKKq5iDnfDZp1zM1P7nW3946TMqjmzCxigGGZNFNwcK9dwbUAwMaaXm"
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
