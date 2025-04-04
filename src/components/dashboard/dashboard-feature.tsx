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
    "2M89xRDdvFbwyjPxEj7LZDW8xLBBGBq5X8ATHnU4osVjc9ERkzuCja3bEFcMXLLX4PsXLMh3b5mn3q3jMdYpxspo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NvZrNvNdZtMz9GBhtDvpK5xy7H2BHjPtT1tjRUN84pT6hp16dmiToKQRQUyjR8Mp8zNEJpnqaexaRi9HnVvA4Fh",
  "key1": "3n4qis9zqcPU5McLRX9UhxjP2rQ4so217bj6GdmPUVhp7YCK3fEZz3VssW1txq61ZNaWCjRsAWMrEd3MoLMqeMiu",
  "key2": "yej3upMkfa11us3w15f3apzvC3vDEAcCsWHrfS7xkXySSAaT47JJ3aYeEQZTBsSN7wWF79dTEZWmHUoANNaEwm9",
  "key3": "3J7jNSDbff43Ge6L25dUoZfRKDcC6C6Ecw1cATtFZWCWZWnMvL6hDuiryzTMXZXKUfoJ3UBoGQ2U2QEi58tKK3YN",
  "key4": "3Q3bRWW9QMvvx6fumEt53PUtUxtJPaZQjmiwLg9nfhfSQZHvVP8bhkHNi4LL7jrjv6ofVR5HH5SLXtssLMLMHNbt",
  "key5": "AeoLyDfCWTPTVr6NH74LAsjtXNjNhBuH5mjHsHdyHZQjie48WwMUAX74yAvqVmbDut4SsdrBFjrVnU6NAoEhGoF",
  "key6": "4LEfCrcpAzWcsenSEEA4LR1SW1w8McjsgiedRhurm1mSNRWHjXxtgX1giFN8Tkzpkv2or8LBHPx8Brcp8mBDGE8V",
  "key7": "QZW7LWUrMuF88XJ94Gc2xBXtqmSch7YFJCbN9eafzPMiPLWaAwdUwwY2SsLg6CAGAz8suxEHe7UnKXB57LN9CBP",
  "key8": "2UFv2L63b6MJpthMmu1SKbD9KqKeMcutEZZJJJEMFH2HoonD8PP9pRXxKgnWpE1qjRi7fjEnKfW2dfUnK9ixwF66",
  "key9": "2UWbeivNce8rBYs9uDrbTTkB8iKTZXugB36L2FoPyMhAW99UDDdoJDTCBK4yoAL5kR5unZWSTLTtWqA8HNnwdppp",
  "key10": "4trogCjdnUoLaSaXHdrUKGtHmKGCmWbGgYdvbh4rjEhXm6f8ESivMNguFSYxfx5JBjZsFJJwk9w9pTyZVLtPJjxX",
  "key11": "5o1hLxnPnB71Bi7nTzwmkEyQU7EBJLwU2e8QNz1oNTRYELx7t2NdbkPGBVEa4d74SZTZ5bzwGANSjEB39gp3c2N9",
  "key12": "Vrfa4uB7vReSefYDkF5NpKPVQghQ5DkRV2tWXp1Adhh5CPJz9FBU1kyxNE3mAiUDcyeEsRqurfixJhnnoiaqD9K",
  "key13": "268DfcLSSEfqGRhWa9T3yCCds5P3ocMdwQQk7oL4JNLCXteqKjJN1xmZizsnM8PAQQako8eEEodjNQDqy9TDADN1",
  "key14": "5qgwZsJWH4A4fa9kYiqkhNV5DWrTdXYUnQUJxwnnwQZR5wEvXL4uCFauAjgHTmrxa2rvd8Ln62BgkmjEuJmQ3VrP",
  "key15": "4ATpxxUkcZoNTxrBgqm3h3xg3Y3s3mbQsAwfDUGgF1AtQ4aKRtWh4N96oGGVuC3SNmr3dntFW4jQ4xKx1SbpYd8a",
  "key16": "58NntLC6vjwhGnvg3NwsFQ96Q6QfyR9ng2W9MdBJP3ahUCzWiFscB2kc5gzDdt3w3DaJwWA9dYx8YMDedeQfHwQV",
  "key17": "22nXxQY6Pk4x2meci3yU3rPyu41cWWkHmphZwV6h77pXD2uRvp7JWXiB7QTtv6W8eczz39AF81ABpnN9aXAFYmGs",
  "key18": "MSNMKDc5KVYKVyk6vzW71XAtg1cLeLe75EH5exAJNQstY8BzfXmdFavHa8hDcUHSCcmEXkV53F9RbNqjQ13DJis",
  "key19": "Bd2CRHc5pnvHypgzPU1SrzSM21XwGrDtMR9Yh1SHQWh65PF5RmTU75o2ktngCFpJrXPhXbLQ3BoxAzD7dJM431Q",
  "key20": "5YkHkuRrERNcZH65tokh8QZuJiUZAc7ayX7mf2kxSMw9tSJUgG52XQPb9GaRcJtFVqR7AZA2yb1BHuvyURT2LsEo",
  "key21": "4Wez2jHksUMFFJqyaJZQWjdomXkrXnmrwE2G6X7dsUPwJZUkoSJYBupKoiSjis6YEbEjnWwaKWV3rNEcPoKqUhoi",
  "key22": "4aKfADFLgyb3dZ57U67VWcyQDyV3F4Wo3TPK1jsFdDrUSmf8dnc5gHRVwcd23nrfBAfsn7XLycBs5kGz5eS9Fkun",
  "key23": "TCgbcWFLJMzA2aif7FKAkB61bphhvCZ22356SpkfUG4RhLbJmsohvMUxF3YugBiWBByeXieFW8nHcmwvD2aPYk5",
  "key24": "2nYQM7o4ZJ4q9cGfxoMzu2k7HSH2Jy3usJvtQBpov34v6UQAEUJ9UwfrXFJaYkooHZMvXKjb1Mv7yyEV8aqFnebs",
  "key25": "42fw8snuGhkmVmnbtgwNbRUKbqtzY6n93f3LLak1Jxqkepf1RYtATZQs9SttQHpCEARH9zMiBPFwg6Veemx1mhVz",
  "key26": "5fqLupCw56fixJ9gm2gbgS4ww3rYjAagJLesiXHGp3XC7ktFZ7TS7dfdXAGvDikWR7JoUqxmhC2oVn2QNU9qtyuP",
  "key27": "5EJqTDvbYwUYVcuGMyRkEtpgNRNhEawqDoqyBFVWtc4atA7TGVcwo1CvwNwHtLyu62VeMNFH1MNFcqznGemHD5oU",
  "key28": "4hNzK1TanQZfsDJPP473ZEzDrhCbhE7G9xkHXbdjiKYinydU2ERLiF1izSfrvv3LpvJcNrYnY1MSzmZQPc9Wryth",
  "key29": "46TdJ1MEp2KXQjQuxa3UAuWNRdhtSe3fLrwvRp4CXUJUBS5wELfF8mvxvYvqfRt3PozcZNxTYDPWsWgiY4P3niff",
  "key30": "4apx2PAMqtCxNreoHT1DBxzcm9hYXuWrG7XFyv4EtBXEKi6ozXzsiHLbyHxApyGMXE2XBxP4nw9fudn4TpLaiq6s",
  "key31": "4d1swJonKPjREEvXqtxDqeHi11Vd76aZKuiv4zeasrFDpJXzcNpLk61BXKUEHbYpePUoTVjirDgvHiNBiGmxd5Ak",
  "key32": "5i7xkxmvYLcuXniE5qpt66B5NF3AB3dmwSqrhoR6M6yp3ECTua4RPYw6fGdH3dpVPTfTTDgux7aNM5ANL8XAFsYR",
  "key33": "4Q79dM1Nmf7rdDSLUPKZPcTaEuBWFVPrQoDcRU2snVG3DP7qJs38DbYELTfbY5HxJqtLRy57tSJVUFY7DojgtJ7r",
  "key34": "3b5FXuNNYN7chqbR6p74Q69uTbgutq6JSoVgjN6mX65Ls6zAQEPyjPnY5YCBJvVQ6xD13LBSZaAPiFkYxwjNjvGM",
  "key35": "4UWnwYTTRno4fqjKeKNqbDHBUyfDkuL79Qhpi9L3YPhyhTeaHNuCj6DrPnMYuZTANBDow4gcmZCUriVHt8Y3bm4W",
  "key36": "2XKNtbZ57kPDVordzRdvobBMCohTQnCjwzpqYVWBTTX6Pxb7hhamEQ95XEFLsZbUbgPqEEQUdshAeoPHxWuPMCQc",
  "key37": "5eqSnc1yPNusjCJoR3CijEULD5oNoATPpAKa75i91v6pR75rao3XEHfQt16Gn5euDcS9iVTtjnrZQci4UTk72ub",
  "key38": "J1cNTfskFSS6dmYBTQqgBmcQMdK5JhAb9A5nvpzdQmuhgBjQkMjpSqaMExAhDLSdArUzKg1amzQZBqEWNbfhXxW",
  "key39": "2F4Yky4dxW9V7rPFtFjCXZDNU23KEuQC3SVbHxF5BxGqgMDG8wV54b98ja438ExF2z2R3tR8bWUirP1pWEtv5Y4",
  "key40": "5fT5BJiycxASMFczCqThSuHkvqGYTaB2PafmwpvhbmigQetPU3uWEHzu7XSXLDn6byMo69U6yjaQSsH9RaTm376",
  "key41": "2vR6EgsYCycC2NvX3xFANFuZbT2UneMEN4SqXxuFJbESDPaRqtfsKTzBqHn2A4jF9YRJa2dmfrxeyF8u7nSNNky4",
  "key42": "2VJBtcvDq2kPmE4eMa9PQa2ryqmUkEBBD4Cb5EKzFh7MbJ54XwpmFs1V9n9xrQiYE75hzdQvGtfM7NF9RCG84k38",
  "key43": "4ifFgh186bAeRqSWFnrQ2ekcjjXoeisDiJBNtvZHBo61CyGRqe2X8TTbxxX9KNGUEoKiLfm1RewnZpfRK7ZgAuFv",
  "key44": "59dS7swEcK7PPZAyBJK546Ryhp7cwWNaawRAAuVtwQPHnrB3FMzYCK5ngL4FZ1eh759dWgvN43JxZ8Z6MkAPyHga",
  "key45": "3L3n49hdqgDkvFJqSuWQSTN2Rq4hJr8vEgexEmMQRCWY8MYrGhBpN1dCJRMo32AxtMdE5mdRBhiMHfenQaSK3AMM",
  "key46": "5VqESuDsiBe4LpAMsNVCoAt31Q56GqfnwoEEFfsEeHm3ViCNb3wnNyDtyzWrEHL7qrRxvXTuW74gd3868ZNEnMpT",
  "key47": "DHgA5BT2BE9KHaGQP22odzpizb2P7DUAHT452euvTaw1WVMwP3b5xdf5zNtAK5wFMQS8CcG5rKmkD4iC7r5kbmi"
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
