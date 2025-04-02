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
    "BfhKj1RGe224emvBF6hZaAsRAidNixSf4tGcyn8a5UeQxTvgy38jFoCdMKiPrFy8fiSkUSDZbAfC2UyRTDULiGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gz5xBbD4MuibMUDoTU3fgYAvqdDk8mtxDK6s7f5mpbzGM3E6U6HdNp9bpJFgPdixkf8eDXC6knNqmnHKqE6Ri57",
  "key1": "5s2erVcxdGQEkKQ4QFCKcepceBoyCnSe44LgERzq1Rhm5jEKXohs8F4AAH5QPynhAYBhSUrhffo5iXX6fnzycNdG",
  "key2": "57ancguBLjbJY3EZYLYjAf2uzBEur56CSiyAZFWHLKKRfA5xUVkSovEtXZgdcVGc2TYarv5VuFerL2sDeheEuUBR",
  "key3": "37q2QBBz7RrRYJNA59Ak9rHU7oab2VYPBjNXtxkMoToz2vTarfsaCBGF7FHeuVwryzSrymjKzh24tBsqtwnkaswg",
  "key4": "2s1uMmqVFNix38TpRxHmLKP4ExVEsqPvin4Yz5Sb3dC62nRDv5hyxDdcY6ycZWSmvzBtRNsvKvEdAdmFZShiE4Qo",
  "key5": "4nEFNWfM6SUrM8TBBWv2VMggPypDCvtosft3AAdW1bNvoeW6ASXxjhRUBwNHKbb4KVQDB5E17e2DnBD6HcyerriG",
  "key6": "33QpxKTACKs6uRsYGwxHSZzFtF3JEUMx2Ptac6BGXMcU3XGJrHMUwjoHCLJpimZoCM6zvoewtBBTgQxbzGoppgrP",
  "key7": "3wLHysVQd4ujyEbdzeUdTcjAzSxoHGr7tqpBUahZx2T9KETx8VckkNpLiqormRbLC1jShaMYjBP1VmEf1Jke9iq4",
  "key8": "3dLUB7EZMv8Xhj6GnhMY1SWDaKyqAjeEFcTkbJzHB6XzWiUpsmZ8VcDrtrTLNdvEnEWVxjL83o1mtYRejEngqSEV",
  "key9": "L7f3rLpgjsNUtxrJxPiXCcvpoXVWdAqcdn8CnbBztUr297uA1LJY9McYnYG7eizULPACVTdAoH7NaRb9aXJATCD",
  "key10": "L9EQqNrrzxFbtVedAwJPPdfY6TqwvwAwfXoDyPRSq5KtBmfgvEki5aj6ZPQc62iGzrNCfVSE63aJ6bHF9RuCTMg",
  "key11": "4VwrDmfWysnTNzhoDJd1zLMqefQgCfWNADMMEHZki4bLLioV3UqR8qzYjhDXrWnkp5b26FHDBWobqK1juEvZs3gt",
  "key12": "h5XwagGMBzYgY5t66BjYtB8dJwTutwjFmxavaDCeLmWx4wBhcrwrsWmur2vzCjwG1S7wm8ZZjwM8zESFng1CoB8",
  "key13": "1xt6hbS4S5eS5QHDErN44S8URtGzDjibEt6GGYwU99fd8dn2t8g4x6fZg3foXEwUnFLJnZkAGTacjR1XYFMYsNP",
  "key14": "vMfk2y2uCPgiKVZrqa38mCocikB8Kht3zxarD5tUwXFshPULD1LT6YiVAuaw32rRUSHw1GmB21tbF4ngvPWgQdZ",
  "key15": "Lkpkdphe99uhB8dUxXhnmAzkGt2r2VBWapSJnTumFZJLftihATWaMmfV26pqg6JCpAgMJ6utyRYaPvGAzP3pnsW",
  "key16": "2K8Hfv7jKyYSdzbh8M1g1XfqTnNnW58kgJuycaBxyv6nb2qzFBGZazJkUSQh1DJY8b3Q6UbCkd3NcyrfdYaciHgw",
  "key17": "3jBZ8r94uGCqcR1cHo4oaJDsC4TvBhwgWatjNcqMUF1yNA8q4HRQQpeKYf73Pcdp8qe2JyTeb6Gmeesysza4CLjn",
  "key18": "3yu5xrUiR46uzvMDReSMLwos7SgBHbCrjsDbwbBpGtY11GHyp62cxxrtK8vvyFnEadU3cMRdRBmQpL5NisHMMdwY",
  "key19": "TZRtdv8u3X45MP3DsnbZZfgXzdR2o7x3rvYDkmfdaYqzu1SC7XvKeSFYNrJuTYiScvhKH1j2z8YRqQtkM6Gszod",
  "key20": "4EfsC8KpirheLoBT9dgV9v5ypEQbVowm2T1XUuf5uhhqYygj8n1N1Fheh2fhiimTzMAa65qEr4xwur8PQC1n7iih",
  "key21": "2EyKMsdaP1HL1fEDQpypkrH74WpHQj7eb7qSnvbZC533fp5zRQoUzB6BNcFs9GNUwTA6aiRUsb9n7v5KXqAh9yeE",
  "key22": "2kmbT4uQg8dQHdRHVavohZhEwZfLvJwQfGTPoNytb6fASmmdiVaaCVx5RFz3cxpZCxZrnkX1TYSsRZabGHuN8vBa",
  "key23": "4sCH7a7fX5XH1RoYR5YHJzYDAA9wVn6doa6kQnLaL1kaL1LtrsYr5XdPdqtjApfwzHpnFmmxyHmVhRmEUnDbajSS",
  "key24": "4Xizg5LNbgWoeV2NJzVzC31ZsS6gvD2KEepyiSF3PXtqPzLYG4M4GY8eHzeNQ1dAfknbb3fSQ9aAzAA9vxhgZCUJ",
  "key25": "5NDXJF8oZXqFQue2EfoSXFSFspRu8htx7ePf7aP3qGrfNPQegFUENTcdy7hHDK4SYZNtnzX4kPPDxsGy3kXNZkaY",
  "key26": "3rRvTPLeC9UcTyoy1g9oT49VyqSFrTtnwp9y996rgW7hMnTzRK8J9gbUCqd6fZVSkRJGStPkC55LaCcFbGjGwBtU",
  "key27": "4RSKXntFpbdEu4P5K64samFg77nRGpBDnJ8u6d4a8bXEhvFXMmQd6spTPe3kP9bKXUcT7K9GktSuUTnATw4Ci3Ga",
  "key28": "tonx9pJsWMQYJqKTKkkfsLRg2gZLzp3yjwVTdKDnHfipEXxZgknMWU13jrmpSbxMLhSjnxbavF8jpydDR5iZhXm",
  "key29": "4x9dB9QayhowMM5XGwC5NPveAAm4xKeEacgqD6MxwCWTjNGsPwp5EfboEx2x9Hk3omzHTn7K8hzNQNozFuCRNK3x",
  "key30": "3dYE33asmfYX1S3fPTrfh9x5oUSZKTxnymoCMdad3s5RAjjbD8ZMQEmC1w7vbpJApqcEEuTr42Mj1nz7S3J5iPvR"
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
