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
    "488U8wkvSz2A51XvhWanPqA9f9huAvDi4zox7TPX73JdP1dpXteXKBEMTuwkzUWCsRKwBGnfrZ5R64WVjepdhDEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bS1wFguhaNuStvDqweNGH83fBx81xX3mHuUCrmL5Xh1rkYoRXqhCWaPuBf6azMSXaiA6jb7h1PMsmqF3iqi8T16",
  "key1": "3qEr6fj4Mtv377sWZwVR4xsTtx7iEW3C2fMMVSLp2joJBXeLrtZzSyjyBV3cXiTbUynp388bFWWhBS35zHqpqP5g",
  "key2": "5JA7UCJQTGW12MWAt6o6nSLmc4W59UnxYVEqQbp7ZHYkF3GcyeotMNV3ntyN4GzinqcAn3yWyTgQyoRyAWpgL9Ho",
  "key3": "2peBjP4KuGQzM6prjaPSGH7XBSkXx4ZQEEiV9oxLtGXtEnRX98xGNHomq6efA2fW5hZ43ZwApcRjvVaBB4w1p455",
  "key4": "WGvY2rVWA176t6qAa2zEnBY8TxMUzhtzrr4uGnNPo755YjCRKkZD4795sd8uxXp1bHKCPoJCp9Ts5fPAtGuS3UG",
  "key5": "ZFTgFeeGc8pKJb7TNa7yFzWPiGsFMysQWnu2p5x1EZrT2LUAf1vCdX77oFw6kixcxBv7XwakcBTnQFqSNEVYLYh",
  "key6": "42FLKuf1z98dpjwCgv3333UvcMh34ggwUgjJwUEqNbo9TVA4UNDbuF8Zc5avk5kdmKnfQzwBJGqJMqyhj5As4LKZ",
  "key7": "29ApXbfuq4QyuoG22i6KVAk5R8g5h9f9JJT5Cfr5FuBbQ6p5E1mtpdWsCguBXbub9vaaw5wuUPikBW3n6MRpLVZy",
  "key8": "3ZWdfcGensajguWfTALQxGryUWgwM7nSo9GwK3ws3Y8d1YprcMnE3wxZ1zsQXMFyWPnWrRY6Hr3PyzgwVTVfT1d9",
  "key9": "3wZJjgN2iBztML2XkoQ6jW85ULQHoadAQoXotf2QtJT2ciHE9fu9k51xkD9dFwKMzy48GGK4d9pJjgvVBatVpZps",
  "key10": "RwXPx1rs2Bzg81W9HHb2tEVxwt6PKWoY1C4JfewkDK1FbZNScXZXB1L6oB1Mv6LAaFyEJ1qXuzsbbG6NguCXHdx",
  "key11": "2yqGdoYaS7BozA9W5mFhbNWN537ZA3KUMJzNCJyNRB5usCiZ4kQz1V1aa6ybWCDEtw1PJaaompFUaXLNYjxKzo5T",
  "key12": "3ZULZZXJrUKjonU3wFxaVxC57fhfusJbErECMQqzf4vrdWKezYT5k3QAHkTTV2p9mYExfKMW6svqaTCN3spWVugz",
  "key13": "a1NYfzmPiUd8DvXJsuyNQccmHXNrwV87kqF3rReYZGwMRBzcD8S9u86aET1bh7hkrQq6k4FMNHCPmEyT8u1oJ2g",
  "key14": "36tSvPK1wg8KKSamRSpHrVDFcLRGzSQQxqtysrwp1DBh5pX28yPzhRbHhj9HCCPNoV4jB1XYTKb2U5PiHmAiWYPL",
  "key15": "2DaBodKWQ3H8AcS9HriRzAzkk1x7BU6aZzHKCf1yrnSPk5ry1szQy94bjQNpYqBH1U15v4NWkfUubQD42y88bC1Y",
  "key16": "4rHnfR9KdHHQJ1wNvmP5ww12yJf5K5V2gsd4z3ttW9awT2KabDDnyqj2dQ4qfqZizpNX4SnqDsysTtjo3cELa8Dh",
  "key17": "3x4BG5CZt4BNf6Xn7pwt89aRRzFgFcvz2SoDBdAdU5wAjMkojVaKjebdkYkSHUWrEJ7SQmevCdd2ihEFVhqmRgAK",
  "key18": "2jwJE4eEAswesvTXqLSB7SrBz1Euhwy7eVSqRa2BB4ZamZhfA3YZx8Wm5c1jZGeo3RZsDVevrJsyc153wpxnMToV",
  "key19": "5PnuhGySx1j5dh7aghqLaNUgjaG9HUnxzZdd4tbQvXJBgyHXv7m6ieyJQB6gTvUArPMPexN2cjAqmszdivQbu41A",
  "key20": "2hsdaX83uG8kqrVBWwMKru6ujnV62oHppu9XQQddVWxTDYgEzBKqf2PD79RocpzAVKyd1nbWh78yPpoHJS59V9vt",
  "key21": "2xtycq4bn3mofpGFcZuRUQ9QnhDLYeX3di42fEdJNSxyYDtxYq9qjaz3UH5pFPR8qT3P4W7XLnhk2E8FiWrNE9zW",
  "key22": "5WkdKjHtURqcqdXwUv1EbW5Kqc6EzHnhoLjkgz5bBFDfJQyiZCjx5WVgYYA7sb5SRDbEVMADUMeAQKQVBiX4oss5",
  "key23": "8imvcLQZd5vssidS9w6ii4PveHpZbtphuaDMBxL2teRSEyy2uiFioaLhrM2oketQK52K17h9GTU3Q3BLjYNVdjC",
  "key24": "EQDoyUpfmjgev9gfKTyXsnZ3yiEDSGsynRLDe5kzFy5ERmX5DLqyTrAhyNNBfWP6A8rVN71ckpiZPqDmt1oEyJA",
  "key25": "3bhzzTGb1qVbooqqV44b7fwZaR2L4Y6nCbENPdtuudGd97uA5hpPtzAEBU2eBDsNtpFAiQhqGrVEh4Tz9JsS6wtU",
  "key26": "LKSR9oxYSNwyWqXaQyyFb4gEq7qNZ8LJigsM6xzuQjBp9GqgFgfbrYUoiJkhUyhUpE2HnYFcQEJgAbobQrhfenc",
  "key27": "XzTJGvDaMRDdGg6LfTznBH3LEmwKjQEZPprULkYH3Bf7jHr76Mk83JRh1fE7sfRV1ZXEsNCSsUz4qG3FyWnnE2K",
  "key28": "43XTm21p6iq654MWrjXprU8PsA3P9VFQ6Hf9RZFYFNsdeqnpif3xDhk7w9u1voV6A1Z4ieSzNYF7URFpFchBanz2",
  "key29": "3PFAYGpYSyRdJMnhB2sBdFux8MZL9WYgW4V7uNvE3FFhs6uStFhzvLfRycirK8Ybqk1pNyHQN55n6g9tAqZKQEAY",
  "key30": "2GAzb88GCNFjR3NkGjTAXQWcex3AXK1mEBJmawFmH4JJMiY9W63t7Xte543ASZT2aoLZ6nrwKEC1avNBDP9fjGRb"
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
