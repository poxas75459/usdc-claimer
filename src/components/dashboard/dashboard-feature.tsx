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
    "2Yi784zZQHVUh7g2aKqbp9WnGBVbXGWCFjCu5DswfJSNM89KFw1ZHRD2R5Puu4ARSc3MGexq5212peEVUWq8ASZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QHqoRLYFAT9jRMr1rCdHyMHqfqoU8ShT5uEQD4AoajEDgmWcGWZKfuv3n1xhkyHrPwTuhDRdJVwYhcYrQvo9oW",
  "key1": "jsbz2nqgbmLF1YpmeXwrDJcuCyU2X9jJDAEaDaBuYpgBSgDDD7AX3kWx2r4vjN6ZgFKcG7JMEo4SffWMfvhA5ao",
  "key2": "5UairW11bWGqPCkHCigYZEunfWDM7cF2xY4s9yrLgjmZ3NA6oUxjXorTX3Tee1rQtMbNhDFEnj9wc18v4rjXYX4x",
  "key3": "4oEgWWAw7nBGqQ1YtgWzoC1e4rFcFaPUMKvRDtJAePQuWS1FqwoioeAzkDV7Pc8mMe92bZfwp9aJ19ur6P8U1qZv",
  "key4": "2oar63JiQ7nkxANRa1ZtqiAHpCWB9dZnP8sQrPViAg23habs2ke5YDU5WrGBdEmbGz1uEUjYUxs29i6CaLd5PuyA",
  "key5": "3QN7CjjfcWLwL1NQtUrm74L2Tqd6i2VnzgtSRrQJs5dGfzpJXtnwvrAHgK72V3RA7aNcFAbUY1Ce43HrTHAJFtdr",
  "key6": "3YJQCk21yMr7dfqmE2zLHX6AngR8Cn4kbvzBuJ2Lxmzqm8M2yDUwYnYgWpZCirivzqxv5HgSFHdxm8PqET5heX21",
  "key7": "21AHb1HAHPoVkUk7udR39VsSA5oyC5UVdBUGC5UZY9jVeeaTnYbJCW7nEmbh1U742YoXu31oUFPGR2N5yeMFwKUB",
  "key8": "365aAZEHx4zBNhSnt4kioYqv5Ew4D8kWrkoQS8tdpTAGyuLPhzJJjy91Mx2QCePg3BN1p55mXMrLhKFgPoQWK8ig",
  "key9": "2npRsG7vSeGH7fUwWT75RGSGNu5sTH1mpiK1pEZ5GRVMwfsv5hAcpbx2jNAGJYV1o5cufEXGhVQs18idESmgc4QJ",
  "key10": "5J8QWBAwKPWBXU2z6VNYabhnguCxVJ2gLa6SwLt3UQ53XQS29iUGceKj8TBFpEL6w4otfHhU2noLk5jcs9nyECVL",
  "key11": "5ANU9JeaSZBsKkhzHkFp2HKb4H9RxtcFvkVFTxZauvY12J1fXNgCqyEnxvRDqaPH8DrSEN78eZis58eU737AR86",
  "key12": "4YeEN8JBFU74WqU1GhfT8rrLLacrg2oxrvsE5HhFedbT7cwqC8YVPRYWvomQnizKm3QoUvGNXVyXjA4VaEfhPmcQ",
  "key13": "38XcrRBNkBhVsv8eWW5B8Ua5xM76wwJrAXectthD9vtc4h2LLja7FhSK1U9HZqp87ChGkanXTLTjLugiC2FNybra",
  "key14": "4XfQyConFgubCfxybMgPGeyFWV23SVrtA9QDTJCZxPxNX9CQyVj5UdBzTHNSMBXdoF2JCB3SDWLq7oNAxbftcSEM",
  "key15": "58FocxPz9tNtQtKPtF5Ai5Cb45bG12pLZpB2D7hKHQyzBhurAVTCmpsgtJfMSR356yLzf2W5XeKWfhtjzNkVsZHs",
  "key16": "2y1RYRXDQn8EPcYXd4gQ8zS3F3e6e3pbRrCRqfYcaorzMgcVqo7XnKxUpBCan7QUacD8SnfBT3FTYQfkiumStLQc",
  "key17": "5YKEuGTfBWTBpbhtcqUpCQUw8v1KA8GnxtJprkza6PGqAH8P6h2tB9x5jHTbSE8G7b1exfxDEgKChHawbjXBWWP7",
  "key18": "4q6PVMXgG2vppZQVYjMCBUyFYbKQsJqGiJmTKQ4ULzC2rZkNEkx5WUn4JPuAuUp2Ex8381jTv51NBWDWpGhPjefx",
  "key19": "2BeGGMW4KS7daJr4gjkbizmSg4o4Cwo5TnPitVzJ63vmDxjRekKrDz9RsD5Njh52mF2xS1UsgAwT4UUmLqGR1TVa",
  "key20": "43gP5MPePZ1tRrSusxFCnmqfdq7WkdWvp8fTKZGrcukBpvHh3KHu6gqyWf4KGEohUMzTNuhkxEqVq6trmS5JZast",
  "key21": "3ALynPg4TsHngjeTiSDmkL1sTQESn2r8hGoDnyNMQA3snCt8CS6e61PhAWeTaQpaynEbMGNU9X7yUYAqGoKbZsi3",
  "key22": "44eJ85WELsPMagChFAvJ9bqKsoCnbgwNsApaNuDCaic3jaVL9DV2vXUHbVw94zdAq6YcUpRgybj61jpCMdKdWbP5",
  "key23": "4xgiTZrn1RgK3duDuWVcK45AV4D9yxn1NZBqWu9RbGLQ5yLDcofHh6gS1j36eandFwoGAUQtEtBdQFcqn4bESyzN",
  "key24": "Pq1r1YQhLihxkYZa4besvUWM4S5mTdJMrZRB11r1KQf55ukvZZUFC3cRbCju8JErwdtYtDY9rJFaK9FYTnzArcp",
  "key25": "3SukkAKbHEziXsSNGTfFyiQAUinLJQNcyZrExF3dUSkr5QvUPzM3uC5XM2WMxvtLV43XGnGXbMfRQgtcui3iJa9k"
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
