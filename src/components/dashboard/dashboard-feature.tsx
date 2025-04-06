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
    "4iemijnRmsT35sXAtz6knWZvyj7YsBttjmNkugKAZ1MeCRqKteHcx9iNhx4Xq4eqbkXziRv6zmienRrpPvTd7XeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SByextU8G8NuZmmEw5BXgmUEwnoLh5ZmgpawPe5uXp4s5E5YEvsbehN6x3Yrb8rbdwDpNZAGR3R7TstWDhcUyaj",
  "key1": "VHZAQGgeK6W8tga91V9mSxKnaHGmRQLdACxWSGrdyvtT8qiqPkRLfZdnvRpv4JAgrirfbYrcdeRZF524JMmb2wB",
  "key2": "3yto8sLJjtAs6fM3NdrrW23p6G7KuVu4bqXNF3jY2S9vWkUPXCwe75kbhicR93tcrExWTVLNMHXey6Pqd7f3LZb9",
  "key3": "4csnqpShy5scXFPWC6hd31AUCkXZQwATm8hmZaYQ4ojv8ro46WmgSp3t5pgfMKNEgd1mr6jPgjqAfhgmJxuHT7KM",
  "key4": "2MRGeXMDZ8YpJRBEenL1TcUZHfAJaRvBa1vFau59x9A9TyYrmhT9mHfzopyrVKeJ82iEMgGreSjVgbtJeQmq41yy",
  "key5": "3wNEYLJe3T9syRGhwM5G9ifkZEQtoYDrjTLRjEWaCQ3Z1mXHwuq9VeZAHK2G4FC34WQcqHaXpoiztwTMJf3ehq6T",
  "key6": "5c3qQmSKiTeza7K2PDurXjMaqiM5xM2E2WmvnfhUSzaRipLo7ejuCG7HMfJ653qcyLPsMQkppyPKBwYovJPCVriR",
  "key7": "26nNbbZfDY5ngnFMcEpETyaaiQMvm5QXEfWRnwrwUxSxNRyNkjmSGNPYu1UKFqNk8zLhXdLjRKs7iXbAxKk1hF3a",
  "key8": "4tuVoZ6gb7rajY8BqF6YMxMvKdtPELYvJvEgTf7GnF99b9vDTEMnBq5dVbTNgH7aRdASkyZ5ugjsptx8j6g7Zun",
  "key9": "5bpR6LXmGriDxt5eVANBw4JbJByoS3CKFC6ZVWQJzWcrrHk4RxXcGovQtdreWEqYgaMrp4mGJ2mZZZLqDFauHPLR",
  "key10": "4L32M7KPncuLdzNXj166TDApwxEmxX1PfDQmhjZicpWW3zdPVZrWzx6J86k96wnWzpyqMXkeaiUe6J9cxwEm6kRL",
  "key11": "5ChAovnvottE4GCztJeB33VF3epczYgQqg7bkrpWkhcbvmwrKtw7JxH2rzP8z6dLPwqMQos56VyUoGaMxkHfnveZ",
  "key12": "3Sg5isoQPxZfAx63F5qSTa6s9LatTnHtmLqgboNyQvQKFavBCs8GUVRcs4ariguum1fWWMH8EfL8VsGm9hfoYhbD",
  "key13": "dYuZajB8RUYz7vi65xMVpAz9ybUeSaeDb8zdU1r2JPxSgjXXqunMGfhuFzQxjcwVDBUwVJtq2XU3csfY5he9C3r",
  "key14": "2UnStzJ62ykd6Ap62TpNCvStW5Y2Andxkijma4sd997npvtL4hPdms4YewkmgyC3GGr1kAMip6yihhSEmP5jL4u5",
  "key15": "3UFzDtWQbKmowEgDyYoHp2hwwDGRpp7ZuwsdwJcnL4YwFTdq5j5M9Eyp4DYgqqunB44kDCFXkWopE29DiMbEzVYY",
  "key16": "3qY4Dvh3KfS5GLcH3wF4gQyGAQF2KMGhBX1SU866Aa8kpchjbmiuxobSGZuZjALV2u2kSMrxe4dSXqWpoWGFSs94",
  "key17": "4ycduQH4GS68FGXqo1rZ1W1pqtEj7c3isrSeguHogdwiRxTDwHVjkKtg6LbbSQG7kQp7ooVRrhaQj2UKT6KcXS7v",
  "key18": "2Bx7peik6WgY8xDGEuDe8HUQtMmzpqHwb1LSRc22AK8QVYbim1GCavHRWcmgqbzRWhnUF7WYtqaaXaJQWNcgX4UM",
  "key19": "5yyq1hhR3Ye8pdPSJGcf5HDKfWpVQUtFGErA1sdnojEv6Uh7bm8hL9A1YMskDXMdLkx9oPwGHpEnsqX1RWyAWs9q",
  "key20": "3trAVDXERJTCLzq29JYWAtX2DWqAyWFfasTJcqyuWV4YzYsA5cQDtvyPw8HE8h75Bd5cuUCf7mgXvYD6mZefcas2",
  "key21": "37HJGYMxV1rYBjSouM7LNUJa73cv22QRPjqjx9sEax8PtuAiuAXQCh29pkxHrTJCZqmHQiFgUimPGrr1iYqSYMpz",
  "key22": "4QMuZKUNrQRL7EsoagGfKFKa49Qrk7hBuzJkLqhDF9NTgxxGaEiVrGt2Z3WwZXqKHb14ak1h7sWpic6kBSz7yeck",
  "key23": "2Ud3zFVYc6p2MaQt5yjiLytvQ6oU2KWKqU2PA65Ff61tjwk5ZR414nV9eiBcUqQKFAQNQ9UTJuTAnsTw7qWdf429",
  "key24": "4tcn9o7rnorunSVKTUfbNitsudovMf4TNzWi5tShgrcbgNYjYVn6NvmpcyP34X7pmz9iQ8Rvaav319egrCimFaQi",
  "key25": "5erfnQcnYE6eNQj7vLiPdZ6Zefr3CTQkHZRsZR8o9hGcST3PmmK3kW4yesYREbK11KQwFJoqNSjXDmnbW6gkF8ee",
  "key26": "4km1ir3uY2sHtBCpDECR7SPfkaYCLsP8Bf6TZjrutTwwysiqzFxCbXUidphMQwJWp2FNiw62zVAHpmRkJnfQ1z6r",
  "key27": "3Z7fS2hCHKj57pRU6sqRQQweegbYDLLRm5QK39MNwgFwFEgWfSMCEmURkhZ34wHE7DCvqfBzjjHLGbW2KiMDnsfq",
  "key28": "Jffy1f2KbxA4iTEbftDUghWvMbvTSi5TnWMhWk4K2Vs7YB9edb77DeUSn7dKACTEti3V81sfMJoKzCkzVYFpD3e",
  "key29": "48A5RLoQpC6BdhaF2nEMK3Yn95V5Mv8e29kPWTFBoX3EVwQnwsoRKymeNWA3KrRYsdkaz9qxeHWusBRhTdCmPKg3",
  "key30": "4HhPvUZBBNi11LE8H1kgJrT1x35GkUXeVDvoQyhutznQQ1enagrKVDH7bg7uQeQupXWoiTK3tnuRMZcdhFwbyCv7",
  "key31": "5Xt4m6iPuHEQJBwtDWS9cJGJJvQfCD25WrjKJvq5AkWWjyAE6YkEDeQQT2XXCDBdLBCmLAoHEnrhwtqvn2GGrUkJ",
  "key32": "49JeduciiQ26uu3Ynzqp7F4aWgBXpNZDJtz5aLmNntsVgC58rGWxJteb2vTciwERFjtzUQQSdVUpmjYvimhB4w5j",
  "key33": "2TjFe8ogGYY9qKSPC7YExVgM2Z9LsApFu8bkhtq4PMDYBmDAbsevmEqvLLhASSnihAKZgj8SQmgTPWQjr22mHVid",
  "key34": "Zs759TsxUMoZuBa8UM3DYX4KNUC43S1uCUyEsvFsMcZ5EWxFxrFUW8XBWuYuXNMCVordPsymTAxSm2RedM6mJoV",
  "key35": "4cKZ7FmkRhG383vCb9m69T3etCjeNdvKfPaTtkDmSjUWvYeKnqhRvE1rQbQJ7tSpWWoCLuC1syhuX9euvpEu8pzK",
  "key36": "oNrnGNzW6kBFofpoBACa3efwd4dFFogX9GbTsLN2tnScz3DxpHbvGcpDgTY7xoHfkxTRjMboHwsopn67V69SA7d",
  "key37": "3114jS1cZBNTYAvANwee89NHrT1yASVxpv5KAoKb7PCMpXy2yjhGhc92h1L3f6CrHYChKTammq3go9rrxrJ9RgH3",
  "key38": "w8RG76UULgBSXz1emHZFtH5ae69z6wG19YczXTUoHEpgcMBGxQgK7FrNe6FCHhyxmt8mZvLDboVyNbSWyMjqMk6",
  "key39": "5CGdTiqkyY573gNGKNUn14JNjLMLcmfsGmuUBrZtJxMmtduZHNvGaEz9N9fRAcx3oBn14xGJyKPwyiyzGKeuKFYn"
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
