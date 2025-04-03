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
    "5QJqhLxNdHBUNrpgW2Q9C21xm4ftxHQZHKe1LaNYeGCwwUy6BynK5Cg8o5RPgmzCCswhDBSMPU9oGegUY6e2R3iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXECzJ1nGRHR1C3srhw1rER8dvUNdaKcxDnifUg43s8f2vVigWHV7z11TNR9s9fPGHuGg4bh8x2vAxudcQfqD1c",
  "key1": "2vfLwhn4WYiTkUCSE1iNCdtBwdyTuiMUdHFWQm1FxVaL8vvNqpgDTgH5wEwviRmPQ4iyMMiM3u2FjJwp3mU5BpY8",
  "key2": "2iXcGzVWmq1wdTmUjnZtQicRwMLTDBmKxAEGHBjPDPaFTUNnBHDfxinsEqhPNsKTqg23DkfvRUyKXrp1NNRL1svS",
  "key3": "62LCmNUVqHaD2QayHzhYZqbsYERRfBmZUy74LYAYzJQVXn3F8NLsNZctYBGqmW47cG5G5LmPZLavgw1Zt8FvUyAB",
  "key4": "5X8gjVk5PrJ8n3z7tehB4qp181wNuoRHwHHhSr7vdSPLqfzZZd4J7x5o9mNoyN1TxTWJBvLHPfz1aoMsWhSFvqG7",
  "key5": "4p8yntAmguEWtbpuhuZJPV3oxkpXCZP2EQdzca5jSAmHVW4kx34P25EGwW4wYuBVtRXgfqchUHZTH1PJSbLCCdPf",
  "key6": "4sxuuPvMbEnKAjiyC3pueA5TKuvtAPe2cUkz6nKfiCendj9FHQT5JpbossJRM6CPZVMvHiDaerbKPQK25XxLSMRV",
  "key7": "42U5BPou2W95c5N4zDsX1Was6fQ8h75NMd4CHNgCi6mvQmcmD5ucVJAfaAeywDupDU1zjsAxo6x9yASefFahyk7U",
  "key8": "2rSwvENToLTJMdLJWKDhJNnt61YPEgrC8ssVBvvUqbUUTRBDig1g47Q45MAFT9yvXTw4n7StxTaVL4kELj9KzxhQ",
  "key9": "AyQMt57ocKtLzVJ3Hn2F9hdrK7WRPidvEaYcj1MshSq6mnCzXw7cndufNGtfiGXqiXeKntbJVE1yyVHpUBjZMZ1",
  "key10": "FJySBhCyReoxDeohAkp8YS8J1yHZYUZTD4cZM5YB3BPCqGKty6oevRKxBLMzEdDhdrWS41FBXGbMy25uYXYaarR",
  "key11": "37KaFqX1yxbDvZCZc2XQeP5ZmQnKt5uwNsJm2qkwgnw5V5xUDTdFTYkoTiDz6JWmEZBVYKCz9bhw2QqJnCCMYUt6",
  "key12": "4w3n5rhR4pmftzGGnCg1BKA42d8EaegmZ8xhWVfaGVpT6Rec18AQtCutpQUn7QZmMZqNrDzXstzejngvMpSRiJxM",
  "key13": "6189QzznA4DwY21rGgXdawvqk6fdqYcvFTk1cLzd5aAf4NHsdapVsJ94AwY1CYU9K7XgsiMwgugyrXaVvsdUxWRX",
  "key14": "3iuP8kc6hnhcuhX5V3xGGqgamacf9NDtzkiGfakEYPPM8mfmzrkekARGcnVu96JUAWwXFNiG2VGjfrk2GQauDUhK",
  "key15": "4Nn6GptPP6UQQRmNNpd36W6vErt3pudBD4wzrwPLAMZzUY9a2t9ULk2ozqPKKPbHfPbAfwBq8GM3PU6kFBXZKTm7",
  "key16": "4892PHVmcZLp3YrLTB7uSwDnki1KWyVMtWAALzHPYbZKkVZy71B2icx9BW6hrYmba4uw6fvTTeSrv1XkyzuxNtTW",
  "key17": "36zsN8BMSDcc2Kh23YdjRsj4isB1qjXT9JcCJaVPb7KtqSQXtc8RAn7Gv3FYQ5y8SJggNVQGv216vymeUEDqWthr",
  "key18": "4sKcMERFsBRwL4mDdB4v39r5NkfPBhWNnHpiXXfps4iFxicKx2Ynx9LFp79Jt9NmehDzG2ZHmSbVDdzRojmNDCi5",
  "key19": "48wd9B3Bfvzu6uyzSDvN7kJH6X5eE6gdAYiW1ZK7fQ7Hr6MAemVq2FVcdo87jzorGFdEsvzKk5U1Fgf5jpomJnE3",
  "key20": "3dwvmZsKFhB7oc5NkFXm1DpnUSxEr5f3qN9oZmq7riPRJYvRLGBwc1qFhxy9F94qXy4zQc4TcYp9KVv3BHR8qJ6J",
  "key21": "4xJWQK9knjdg3YqZ53caYa2HGzhkSNhKQtneYsjB1Y3BngTqp7Ve7rzg18Bwec3LPbwuDAjdhn9P7Fd4rGRvu32V",
  "key22": "HwHrnXd16uTgs2uo2TBSRuz7cx9HnMYKTDvupUeKH73PXt27bfzxTYYV7pjM82DDnPmLnRkL1CCkAUWLcbFaQkX",
  "key23": "5F7mEks7dVKcnQCNLmzS36bsszA776mgr8iCCuTFY5TaU9xXWMEQbBzoenUyYM3KJtSfwp14vNEmjgJqpjk35Fv5",
  "key24": "2vwLFVxEXqEWjV9oueV6JVEzbMDNNXYiawrL8ijA7rHKLmvRqW8akWx9FoAFBcdqwhzK176YoYFetE8PL3XbJXB4",
  "key25": "5T3Ci5KCMxYZT3UfrhgcXBqtVL8XawgMPGGBGk6c3DnXWua3stCtDdkREy5WstWdjsVHvrQf1kHb6UAPNqojXmvU",
  "key26": "47uUVmV4HHFF7hR2gd85knz8C2zxpcQSqGLbmXWLpnUfsAbWq7o4KowkxuvbXhjFh17Na6xrjR1myhJVmmw5xwxi",
  "key27": "2sJtAWqaJ5Dd5jMjcnGU3UX8vycxVBe5vjJer8z4vESTr6nPmq6CtizasVwX5XomfUuUvWS2spaJUUSzvSD6BqBX",
  "key28": "44cixhRTfxvkzxA4rpjfaT3DAfjTjnb4jqgiH5p9LsySus2cWqzUmG3NdZHxMBTMQCCn4MfAA85nHcL6rRVTdd3r",
  "key29": "2SisAxEeGyYPsB5ZugkQGb1fRXX1nFBf6MocwFGFzjqWmYmLCt7n8YDC4UV2P2eJfCDEHXGoggMPV4gTCPZiSmeH",
  "key30": "aWmWc43q86jqvvxMr7HmCjkiJMuJZu3ZcdEFW6kRgnLkSrL9kr61VHMgEwg6XRrDyA5cEsSHKZWo9sy3mmPqnbi",
  "key31": "2YySn95EN747knPy9sLGbiiBN1xQgHsynGCnSds889zGPzBiQ5A3AdDfcG8WNHDHVND61ZE43JMwz7GqsuuJe4dV",
  "key32": "2maGN9wdBLZZksa1ssAhhgqBb1FJSef5ySRSvDkzFrghV9nvxUPHvptZ5G3XLfvdNV5ktZpbqrtjLVJjEkVWytmh",
  "key33": "2EysXydFi5YHNn3JQNtgFwiKCvtCXoJcZHQhZYfoB5hy1WQcpAfJQgvggQzCmpfgSyUm9Ad7iTqajdAxCtb4YyDt",
  "key34": "67RHw9s9QMC7HxxwApsWiSS7EPwF24nZHKcDYxjrDtnVkgop5YCZKAK8CTfmiXHrkix538zRLGpcvp3fiFeqPtFR",
  "key35": "3uk5H79CHQHsu5wYLi1aHooh35fzr8BGhhBroUAe7PCHGWyJH6jco97oz3TH4k8RxHooKcBe4jhiAZZdYjcqu2Fx",
  "key36": "3QhAbu57wQyGaJgW1ZTByqYaLCoNAmm9SLFYqaNDY8iuLJNrwcdRP6rbBszfCQStMNZs1ttu7uEZPPAdhHjh3cAB",
  "key37": "8FfcNmvh1j8BmMqDfyNFhbQ7CimuPLA7WBpfnmexLQUzkRXL9UYBFUfL8gfBUAtTucXd1tCWbECkcCGUNNQRZam",
  "key38": "s44QjfohUKt8w4GWEdf4hdPGrLqUL9RykkjZsF6QgH6JuY576ZE4yB73WF8iCz89Nuu9Qf3i99mNNgPZvT2GyX3",
  "key39": "2Cp6724XTFcNexqTGEctSyb77GadRcBhqasc3YgtXfqJBp1aJYzhTcYaxqi2yWPuE3nfenxZqXrjCpCvNCTYWsVN",
  "key40": "3NE2coCeUbcnzfQhHrSrWJZmqcsysfaHDtVYgPHVUEEeGCvzvCqaDhRJRZ1iQpGU8b6CgZ2Hht4XSWGN7q4s6Bz1"
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
