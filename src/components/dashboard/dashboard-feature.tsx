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
    "4uvdRUDaCPTeyCommDGBdZfv1GtgBnVgEBzmNn1yY1e8J9j7yBDwg7UYY6HSAHEEbMPEdcLpBEWqg2rwzRYnYKy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1yMTTdBGTbAUyaqMKWcnQKDfmUQfSMfQaUGm62jXRTWnHZJGJb44caZbNGZytfevteeg2ta4mWmT6dGUX2C6uJ",
  "key1": "5q6DFpVGWDC9Wu7kJSFoT1zjswLF8x3Pm51Af6FECiSTdQK4Z281rMCf9Ue6dJeBsYv97t7Lq2EAnVMTU32URTwr",
  "key2": "4Q3R9AgLtqEnxnHq6VREWBFB4Xx399m5rA5r6PLzPnTv4B9h2BbkzMTow9A5zkydFCta4fQBeJdpQHPcjTMXespW",
  "key3": "3gKtT2ycnExYVUK55BcvX4y8GK36BCCEXWKTT398ftPnMvyCBPAwDZQpVc9YWGtwp6ksUo1pPt8uLChHykZMart3",
  "key4": "4GUYvxbH1JfWjGTHLUaPVpFPgeyQwiLipadhQdaMcC5w1MzckS2DAwUXsFhyWiA3fBwkRMi2vx9mz9hJsHHMGuQD",
  "key5": "32W1s6LgSiXzF5SACcfZLrBzzqeA6LFg9SzPT135oaHeUUZ3KgFQZtA7heViknjFNaCoHA4JrznH9ef9pJVL7DCU",
  "key6": "5hLvTVbmaJxDbztq5cRHzeqtYFaN2ZmGUconC82QhimhRPiz4wAhS9dnz8BkqSwou2vRsNceCf7vhQfR2L1NDPzE",
  "key7": "5rKGwVGQxPhhfhBSZxbyCBpYZRsZQwQ6Lb713WpMCBPFVvDYbBzDWfoMYL7qNKu3n7CpKE3hCqaNswLf23pqTaxY",
  "key8": "5emRxP8Kn3cZEnoefHHDQeEqpUJCjCsG3VNQJkr4R9Ko8XVVWwEEfvv9EQz2vH5BhLaevufLsaazZdtEc7BuEuug",
  "key9": "49ZaaFstJNue3GJJjQLc7TdtfQhVUd3coXESDRyvGS5qgqZofphxydUGSRJ2YcGYjMViH7qqC1ZVAkkRu5GxTgqH",
  "key10": "129s5Z4s4qLGoZKauvS3pNhtidWP8XmL9qBhL52G2azkUAiyiY57FWcDS1wyURVA7rjWmfrqZ9BWMGPK5FDnoWLn",
  "key11": "54B7AL3zT8JdMCgkoTHhvErRt5nhQogG3RjPMCu4SoHPwkzj2dr1D3PKia6gke5MyiCVn9LhVhGww8fmqJq3viL6",
  "key12": "4k2XN2VuwPRwhuqjEm9wGcKw87NZbhf2X4TGzJSbiAEZD8u2sav9GhhAprjgGNdDgrKUTSikzqRKHRLgcnzTc2cb",
  "key13": "2TzWiN62vEe7dEJgeGyvSnFHrf9B8Cmj7BMPyq5QhxNhLGfzBvP3v9is3WeTFmJ6vUZ3VyZz72tu9ojM3FDCa82R",
  "key14": "t9V38VXpPZE4Kuf2gPo8bdasTbQ7ZxNqxNrbUWFMSqEKRWtJoVXohnFFrRmUbZVwV7hMnUP9AkUFkkpDhjZHTPm",
  "key15": "1NbB75ChqotLBehhaPBV9TiBt5UVQ5o53rhgqFpD7neLVdETJWNKbduFmHjXBiBPC5XY4xiTVv9A9CqSwVpbf9j",
  "key16": "5cW6hnmSqZQG1n4h3ThDSQj5be6V69BYuEkqeuqte4CjjUQrJ5GCKMEGJfwrHvzU442BstfxxohgJcXhufTd8Gxo",
  "key17": "5zHoFobUBLp2oNebC2Rkew8ddW9WQyERXvXQGoFkjbFto1iwnMjMrGHUuCRTpLb1rYQhofPq5JEYSzjZvLiyxY18",
  "key18": "3FA7bZDBMuaNohgeTRQ65H1nbSkWj2aC8ZT1t4ABxyd6fLjV7U3u7QA9JBb578ZjYeGvmU7hvY6sfpCUJgb1dd3B",
  "key19": "4dWS2mcTk4HLMNjqmZp5DBp64zcnGewbCcgvnaUFzi13UaExqwnJAPz2DxginnAwroug1TCyEMgGQNKpC5rm4StR",
  "key20": "5tadVgT6hU6AXKQ5beLLL8NSWGTJhqmDjNzG4e2jZoJumZzJmVS73LFStkycHE2ce1vbdcrAGM3pzYKuQkZ7ppAF",
  "key21": "eLcaZhGbMGK3T9VWBBhn87wB4ie7RG7otFvzvsBeKBCEs16SfWsMHVVcibE3kp3FzmUq4SQbJjwMQPdwcAu8s7o",
  "key22": "3nvNnLyFS99D7M4QeRBnyg1yme6t3hnuq4xScng7NijXcGZcjfx1Hs3F6KbavLX74zkfHsrigyw2wu81iyFnmU8U",
  "key23": "2iyRCSFoXwsk5XF37pe7SzD4fv8AexETi88iDPWtQhrPhMWdafhnseR9x2ZTcp5UH1VyRbDxLqqdXqy9CoYiHjSK",
  "key24": "2HbqkinfLCXn8YHjTENLQpMdaycXwAUYL7hiTB1ZrNJ1ivtwx8Xfce71HPVp1ahQCG1gDEvwQV3dUg8M7Qwu2M5b",
  "key25": "5a3bYFqUCamREC87AzYpJREu1FPyH23NcECZDnJbQJqUrLxV1gQtrtNaMe6ySKKNWjfsEKwhHsJU5QMuWdWdvjdA",
  "key26": "4tptRrcHGHCYX6pZfJ5MhBf4wgbXwC9znSL4QQUrgRcYwmu5ogNRrSAEL9qBWaBTYcKbYKrXihPYpyBx4hYYNaq3"
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
