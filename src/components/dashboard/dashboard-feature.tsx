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
    "5gBEdsvfKb5PCGBVwnnQtYnFh9fBBwJqoE2TgMZ34YNkuaxij6bjjUvLLTzbnH7R2UmdoBgQ4DYtCp2hq3mgtaWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmvRfytUC1JHtnBZYsR8sVf8cX6Y5hMLDyTyUaFr3uS367qT4L8zKYxiG45aDnyVxhQgLiHN5VB3hZMgm7n7UHF",
  "key1": "4HG5NMJbYFyFvuTLTDpe8LZw2yhc5R92xB7p1RrZhgTie2fbFTuRT9GhwZGy1ckHoBpGCxo6K74zeKo7139hfrxW",
  "key2": "XagyvErr8bUHQ6zKk6UBk8dFqHeVeJGRr3faie6vZMk6aJC1gEf566C5mZebeE11adyMGNsbcG5EtgsTKNRH3yG",
  "key3": "3HC9CgUzhaQn51ELfaainbmCoixTE4uMDHA1fWmqgQZuHiaSFs2eDW1MVQkDdKY9nsP7B6kriRLofBLzo3KyJmpe",
  "key4": "3AsxwxDj2HUw9pjwrnYs2g1ApUkaajnW8jDf4vVUyzLeqU9WR3S5gjyV37Zc6Dx6tbHm19TL5X9bNpmriDLAQE9P",
  "key5": "S9M8dapARFuAa55kcsS2JtVgUZepmhntLCKh3DhtSrExTcZysskGpWPvNKq5sDAbv5mPUcYwMxM5oqnVkN6XhSL",
  "key6": "3DR9S7qLvZfUELjWjmNS9FrNYmRVDpZZWFxmoihuxCENyhVdFL7uGyZeC6NK2JteBy4WMT6oBgV4dUVMQP7nNJoz",
  "key7": "5bfZdEuWCx65xJZzWJJGE2jssW6EoXiweT2istxemvRzCo5tordsTFRj99JZn2s1iU7YcNsiWzLpiAma3VNEGCFn",
  "key8": "2vyguE8iqb8AW8WxfppL3E4q5eQwS8cutzKuspKxNtM2urU1kiPsQ8JhThGuRTbM6HRM4nBBWVVM4TAHoRRHmt3b",
  "key9": "Z8J3inPLwPMUgSN9fXKgRE6uajHUhszg9KuQjthBzxTDsvKNtB3ZxsCSNnDr8wQ4q6nwT33ua9jjm4wJEWrtpsk",
  "key10": "48f6pr2VGtGZPuUbsKp2EaLStayVbKwTyjL6iP5u4eqTZ7hotgJp63myts3YbC8HX8wjCNxYR61bNr2RYzAscKsX",
  "key11": "2VRscSBLNXKNyrot1gpBQHYCwFd15uj6BARs6jLmzQSYu8rzy6hBRicc4SBn4wDgBtQUJhzTD9ezBewLrMCqteH5",
  "key12": "uspD8hTPTYRwPyaCWwuLPgB3w7VwJcd13aVYTk4uA7bXh5irL1d4pX2DzK6u67tjLmgc96cP7qxjAuByHzg8cZP",
  "key13": "3XybtPkHjmqwZgVTgH4vRawGWuPD1LpDiro77mNUa7V7khqajxfbasD3wVTFiQGwM1FjKeyKytt5Mk8j3X1utzH7",
  "key14": "5p64nnFwNrrbc6oaAJ6EiBWStLBwYt4wCxzk96rbKSHGnoJNnQW47kdGestTJ8CGx5J4BkftARBwMsZJRPcyDPka",
  "key15": "3e9tYhwnkGmTEeDkQ32ARAHwE6vybory4Y6fMY1NQQAqghsGv5ZBPGCCDU2wWGXpkpHeK113ShzDTc5RrQK7sEFe",
  "key16": "3Lb7rWT5QbcmtRUMSmRqPUa3HDRkR8Ky7WkycmWhcwWJkYnFoLAuQEFbpNfHirTVNxkbhfENAvyJHCm6og9ZGM2w",
  "key17": "2yvwoXN7z7xjxjPNee11eBqmBSQUvRSr6SrC3Y9zV685nWLJRfzFz8F9ksNCM4gJCuF6oqM1Cti9GQP7dJhsgahe",
  "key18": "3b4V8P4CZ9vH9vxBNUkewNtqTb5XD3kXYSkPvX2ShQ2KHvVZAJNveG49kFASYjf7W3ksXD85LnbXCmRgfeVpNcg6",
  "key19": "4m3xEBKLe5as33aWHUG2xU72KzbTaftwgtdEB2Q4GncDdMpNcJTYajbSgZoJSSbj2dY6sZburLFdVfeNbaxSmb9c",
  "key20": "48fKwELVRLMZ5JEzPS5YSET6zB1gdgKfMmGsSNYH6yiRZegCAzmwGGhPhWNAo56Nx8S1jRicXApbUfnkEFgGsEH1",
  "key21": "5RbFFyGuh9FZx1be5SzZFMfKP1CrRMLmhJCL63Qf1QR7XnNM2b5EYEjKTsDTy3kUp43BJ2dSGd7gWDZY22dGr6kx",
  "key22": "3sKZ3co8WmDEKNUTkQ5CjtwEPnktwMFXLMiqw3uriRrUzQn8RxR8XBCVyDPqTDWyPnWrqRRH1dP3L8w8smCQSyj1",
  "key23": "5ZLH257F4q2pdyjMzQbhTS3tWXSFLdDkhArF2qBWnSf73eegkcXk4eWsTg86mX9rzsv5ZBcCJvwwVRvHPz94FMqK",
  "key24": "5eTCGELVFfVmxH8Aeg2v93M6wbRV9nErPwLCbn2dJWiFqQnGLBCCZTTz5jioku7bZXpHXw5zBPzXPQgrfBrNPNJr",
  "key25": "4RcpuMLP7WiyStyYvQXPBh9YQcaSNwcb1atNBPkWUC4bCvYZvdWZ4D1stUvSfr4T55LFBr4cYFbN5oaPuT2mgGjS",
  "key26": "3fvRp2Vy2362gZbp7VNagaofeMSxUV6zZpQ6D6sZUVcvzcqe3cJNkREGHKg29gEGwqM1wuNLZqM95ZaU64a21hPN",
  "key27": "48ZUMdtxuXhaBWC6uFQnxunGP8cE3TWtFnsZWnT5pjPtNngt2YyVj9HYSvDAAE4NFV5Zjbv4F6eTPBkUvxF7VkF4",
  "key28": "6WARigC94CMz7Y7wf2zu1DicVQ6qpaQsX19UevQ6Gz1jLtGZ1EeYg5yrYpvo1YoUnmqARDDVKfgFB91qqfLanLJ",
  "key29": "3atD3mwWWwZDbBtf4pd5xvC49cqCshYr1n4uHqmChegk8ecxg2HHiyL8kfVKx1tL1Ee7xaZtfGs1QmBXSFXB6pbC"
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
