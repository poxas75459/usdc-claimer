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
    "Y6Nqw82GNe7GTYa7x75EeKvy2NGLBqtiDHL7YAvvLDcbcMcP4euX1Ds4Usi5Am2yXQNbMWBqYRd5VweAuYnBB4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkGvEERy3Dm2XJT8LcwVzxZstDNU1soWTLZBpC5zG3V7cmvB8HiwaK7XpvDBcvrz5LTwSXUSZBJQgVeFB3mEsiy",
  "key1": "4mQznB7bE9sDwvtN1fZ89DqzjM6CverkFs3HMfUHr6NJ3w51krXP4perS6GSX3EQxdMjDJQbFS7PLyBvxiJpHMZr",
  "key2": "23d87zhUAbNCXNttd1dMsJTvXv5yw6c861p74MJ4V2FTsoiwvZ4EjJwRbduaQeMdR2L1otU5mQN6Vs7inR9AaxzR",
  "key3": "3nHrw3ag2EufMGyo626VzPpM7xGriV9vdmDXJCs1gzy9DYnQfdsWvCVtQYNnxegzNz6rpqntVD4SmwzrNCbPhWEK",
  "key4": "2Tt9jXkUxAAkHPxCiHCrxLg5iA4zQdCMM4Zs4DChcBJFgH6rEong1gNxvBFxnPP9Stk9R8xYTty9t2yvz3FnkwLf",
  "key5": "38e9xXXj8dgZ8GyZhqK9UWNNtHXKpXrW8SoVbYZDLy6rRF1qAmGiLeYT71KdyDMzKdaqBwiLF7BQpfcf1oESCmSM",
  "key6": "3wbeAtmDYUV5wPf4h8JeoCrhTFGsLiaUBr9Tj8BzcgRVsLRBCqmySbfE2yYbXGQQjvTeVGdmhekX7ZjzYN8P8Wu7",
  "key7": "5ss8t94SdHa7Uz5EtQ2Gxa3SxNDj73QvRNZ5CFTWtrSwRAGqYVUEuXpHUSxAFrYZA3t4g5NT7S7uny8E3s4efFPE",
  "key8": "4Q61gawwjchSGf9weaGe2vrJHdU4Kg3TmWpeQeYm54ViEy46hEF3NzPuGZ6TgHw47tRRnxUq4WSTq4j6MBGUCe3w",
  "key9": "3gAqKekabhVf7awVX2z12sjuY3koKdbXi919jAksKVPo5Ge5GMMbJB9ktry35V8bDwwfPMj3k74mG5THjSoMVwds",
  "key10": "2obnb8xVkSH93Mr5WaUmuBT4K4KeYpEpvVhuZRZNGXWnRMi7KxsmqgHbxMSeoeuknruJxo22jyfM4qoxbck13Kwc",
  "key11": "65zJCJLp8ncCfZHVotSoyYVBeSgPJKDxQJcd6hTRR64K9VNAr1A2ZXM8QnnXJmyDZpY1Qr5WzB4eCQS2rgxJ6KJW",
  "key12": "49F2GFZt3vkFLbLxuFPb7canET9TpYh1mmm3KLYwZmKYvqfWJmqGZBYejUN9ruHZUuVjwTS6bx1DYbNvLHbHWnVi",
  "key13": "5cizL5SDpKUfyaDL6Gv9hMNQiBnrbWAK4wj2VbFt5eLoXrDnwtq3om9G5WnzseAySe5KbPGrMkqEK2ywjV8MUMFq",
  "key14": "4oS7PoHnAAQB1uN83YeFupSqdnWX3Q1c1kpmxnqba7QMikikWpWr8qGpHDdhsUD5gsvY1aw3dnt7gcb22tVX9CLw",
  "key15": "YGeU9P4sGGwzQKDmbf7xnR7E3pqN6MjfHiJ2fwYJq2o34v367zGo2cQQBaa3ynkF3fH4vB7nQgUQnqzsXreaDKD",
  "key16": "3esSZjC32Z1xN1cf9WQ1C9Pfi3thKngbfNXwYbmWeY14cVnZZoQxYmXrXaJCfadngwTkapiieu5VxWiKxWMzCLPq",
  "key17": "2UQWffQhhtGH7EYhYoV9E8W1ZbTZzEhvvkS4LAkYG9cmF9mDr2aizfsjoCVEjxBoNTjMux2KETNSxw3pEf47gjDn",
  "key18": "2pgxv2iAfjkvow3BhjN72dPjHFV1phniaRwmM1XLkzUwjHfn3ch9J4QaV3Qkrytbu8LnndgRkkRLeZiJEGycSesw",
  "key19": "3h7PdJNZetMTscpzaRxRPYB7GBJCtFyCyJseFQ76JZW3QjbLU538Md2TYd4TYtdSZdJ3MqbULtGmHNxaWw7DpZRz",
  "key20": "5J2jbt5HtyLifirR8ABh5AyAepJiLeW2e82ruCsudt9YtFpmKXpcXEodExC2uVmKNf8a4qTBMdRU65z3ucPpGH5k",
  "key21": "3gan57iAmHJ6CoF2iPVe2qr9s8VMouMCHAcHposhMemEzzaJZ59SYtLRE69Mxbg7TTkrg4JrtWTKxMnda4jYXLA6",
  "key22": "34TgaXH43esstGdApmGjNqs6Uaz9QGfpkpcu1zYfmCVsEC7ztEGJYTZf7WwREdhTL6LainNMNRFz3kf6hxZomm8g",
  "key23": "466JEWvXMYMovZNDw3cmQh9Zkh2aVAGG2xcL4Xp2n1EhwuzQ1VhoQBfMPXSkFsSgetWodbig7DqEFcRnmzMkKoRo",
  "key24": "53qugcGG91RRX57DWBQXuknftKKEFm9VvHBDqxnHrhDxikxWrFPVitYazF9KYGc7QNZKFfLZAx6KqyCAb4k32jHa",
  "key25": "4SQpiithgKsRSPHhBFVmUBMzMJQKFPZmVqG9vrq1QgdDnNmeZzsg8JjA9ebaep82N7fYTxZG1XzbGMiTLTU63kom",
  "key26": "5xKjPFmcEwrabihJ6eL9nucGBF8Rh9foPDocVPbUkdG56ABMsrAdHpsfoy4JjGyezgBASVrHC1tdow8CoTZjpqEH"
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
