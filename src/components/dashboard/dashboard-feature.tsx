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
    "2tFdbdNXVWSesfbpXe9JP6mr1oBsYdBJLjVN5FqvcjrY2wdHqYrHRGe3qfLhvjf16kexQcx327G7YyzLJ1n1dQSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJzbjv8PnFtWRb434DjHwGdf8TwLJmE94LnVaEGCLJrX5Xz8qTCNi7iPA3kSz449rnTWLoxcVRkC67bgr2ChZg1",
  "key1": "3idCWyjLPGVYQZbMkhag5NqRHrndy5uKKj2vaSsFzg4miQNceR9n5gZ9j57iqRCxFLZgPcGnFFYVFQnUsyfWW1AR",
  "key2": "4gztmVPs6TKZ8Pw1hwgkQndQS6b4MYq1tLM3LVrPzcXFMaNXHfLiLpDJyPFrcR9YkCv1HW93qN4m8xwmMHJwf2y2",
  "key3": "5v2jms96kkGaWGJdhokjNUd9GESohBKUxPDCbTDPYg2Ef9fT2mRcpNQmqxt2sLSgUZegh4jRKcUtDeZ56sk4GBct",
  "key4": "4GKGwN7iEyLotJEhFz1RKZ1fmKZHtCncb6AgvoR6upG4uX1bLw3wqoVTpCMuxdYk3Tdt7XFsGPz845tnJ2kQjQA9",
  "key5": "4josekZohCptGmEBx8K4K63gFrSyxrnTYHajDPcdwJiKtnSQNiGqG8X755mX9Sw87a13HbvRXL5BtWZwZyut3CeF",
  "key6": "5bqnr9Ed6XrMybmEveWCiQPQYArEPZmVcXtLamJmPghxP7sL1F8KkuemSghqWkFVQiVBCuGoE7FD8WiepvZ4XTH8",
  "key7": "GTnmqhFS95ZAjiWLT4LJNRh4R5vUpQQbT1oMyrEjmYws55SK5wLU5qJhaSTADc5EoQTPr6ZLPN1nP87695D9gnc",
  "key8": "2D6kZm1GJkHNEzQcFJss5Jq86f2FVNGZvCBZ2zqjM8nAa1byMow2wG3hxfoZ4zN95CwHAWbhngMTJ3dhvgaZ7kMf",
  "key9": "g25BnJE1f2kMaFztTiwEAAcG9hYiE6jAHB1SCTu9tnnRiijGVsfYkEz6y44q3cdi328Mio6KY8NoUrutbwYtHNx",
  "key10": "3p8j3foxJTHDLpXg6Ts6Zv3NHxNPu4gdSrd6Qtx3AuvJAZ9KviKqppw4nU6dPP2ZEJo4QiroinhvPdart4c24PtA",
  "key11": "8d6nKaJgot25bPKmTZsZGeMZRiT9fzSFK3ss9RofBtdAAhEaMBop92zVJSP7wz1CasQ3wLrEW4ys5SLXwcstiQv",
  "key12": "44GUj7K4iTZWCFg8zuXwsTnUMmbtLvt9wZDib3LW5oE9eDxZNDjn1k9XTEk9NRpyyyNteuvJfU639wvC4eD5rQ2y",
  "key13": "5Nvo8oESoxD3MKaYkuj27h6QWYSm7iMHj2ZZBGSetEs81YuR65vqfkfpLWWeKxDMCpRqYp1GQSxNx8j61GfxESCp",
  "key14": "5aWUNnvzNiLb21KY161MWDjbJjh1PKqxoKmoVYGGKGEQqJW42n7xUvwReHxRbA4cXTwaf568WF6JkHk4xecLMkt8",
  "key15": "5ZrW38JbtxzrV2ndZDow8zdMiDVW1vcCjQwX6x9NdQfjVNNwuz8uRiDVr2m4bpGYR1hK5SF618tFLEcTBraLU1wA",
  "key16": "31vzft5WqYaWq17SQACgGdrtJUvwvWjGjAQi85GfKV8Ape1NQZPE8GtCsM1Cek2d2D7EchygdR8fTi8JvMV6QjjQ",
  "key17": "wx1sGSGBRf4EFfvvyssssRTRXr1Tk1ZtxxMwS9HupkKGhQQdh6tMxpZBzeVAAKAm4SG7WZFZW26ETbqthnCxt1K",
  "key18": "CvfApoNenTuBTdYBUqU3XbaJTZSZj355J6CkJmmWx3wb1qErBPV7QBWBqoXRyjuRMHNViKxGWDaho4GVCcu2GA7",
  "key19": "GMS55v64GyWgnGMG6WD6BVVVU9EHi92r9kkzn5npT8BWZzR5GVUksmauxQeuXzBn4MsbN5StNntCEpZvARp7y6v",
  "key20": "27UFf3iTRGuqHc33rNEeqVnQ4whu8iefKX1JdxoNZeCxRTG3YSRGcoAECb5vxUidYz2Wn9sdkh5VEnsjRg6FvbYJ",
  "key21": "41rHhCBqdhainPmMTPPosMHpfAAuD8WUq82Qp7JWu7dScLz2nqsgesSkjJZQFNbZ2LiMJdx9d4YMB3gALJs4vXRX",
  "key22": "3nnVsdDUUuMWJYrkmwLNVMNaCcco5ie6EqCyyx2J3zbMWtZSzYzWxvDtU4s6NdtR6ZUzqjpzUvQydLPEKdCsRn4B",
  "key23": "4EXf7EdSuEnjma898qM5HaX5wnAjdUp3sKUrvHkb1DQ1zdNbe8BXVmfrHxbEzopBxezUhZ7kyryPkarn2uAs8Via",
  "key24": "663cXDoDu5jvXhhPUwt5Giq1B5HjUVyh1AsoztPfPZaftGZrtNehJJK8bUYjFmQwfj953kwSnQvqmasufPQgDqez",
  "key25": "mbkFbyw8PDjPtBybCrmexFAmgmhGfXBB56x4i6NsNox6xcPHM1AtAk5nskHcNbvDfj9QPT8JtJbVW2tir6wfkZ9",
  "key26": "3AiKg6qbV5S8ZSULHmZtfy42Ed2vviLokKwrznycT8crVk54VihDTg9xEPNGtqfEaK4BmPFxgeCbH7xYXzQ1E5ZP",
  "key27": "5q4jAhmVaXwHdzummBcdJ2bhny7mBfRgkypFdgb6SypwNzm82LhqdSnnZxUdVkwiE8PPvtSAf7twYAUo8rD7Bwjr",
  "key28": "58RGB9WcchFoj7RRmGJXMReYi837aar8THxR6penpErnXLHdg9PgsLHyy83d5pP9u9p23PN3HWcySHydNqxvaiEB",
  "key29": "4ixMqtrzpC6qKMcmeYnfEPGZFiMGdG4k1XP3nqCjJMcjcU8PRgWWdkWtQbXnP5Jbo6MntqrpS6jKfMxWFYMY84hz",
  "key30": "31sN63kVB4mH8f1T64hHpRyiq5TtyyhbnAmQyec8yUsf9t5SaYdcTGhCr66sQUCqB2kLdosZMgcQaZfFypjbPEoc"
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
