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
    "2a4SnpLoF6kRjjNAFYii8xR1vRrYdrAUT2uKSuWofJurYqfBYKuKcLMhiPUtdZV9Rr5xjS9dwzRP8HomKCjMbLko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vtQHhQE6XEHMxgTCF9NaqjyRBsTVYJjG4i4whBvTQhSNtaFriUqxe293sPcFK2dtTSaEjhPkPxJJhnAvcbH8YkX",
  "key1": "9s9Z2hR8fMuWEdnt4G6GDfVdvjERBbCobdvriwTHwiCjvB2X2RpsFXnoDP8v1GmGrShz1KStcetMn63hoQ11XWs",
  "key2": "3HPUUY1fRtTfjmATEXAP9SqqnCVYmhGP8zEj3HJrhC68fbw6ii5PLSfjbX9oixaiEsK6Fgic5wptUAsHMMemnrhL",
  "key3": "46hwFKtejsAXTYbjB4MM8M7bXXjdus27ZKWiTn1kc66SaCCs6a1EEQvtzc6szhZMizdcVpVodvbgLgGFSRvKvQaB",
  "key4": "4CDLVKNAkgzNRjrsx5pbQFouE3uCfb9GAugjVqFKBzCG2JqCBR5JBfgMjcYx3nkXH1wujNzTwmSg7u9RUYyGxuc8",
  "key5": "359C9fXCAFLoo4hYcSpEciiTTGGu4bFoz3HdRbjymeLLSZPQbpYiRmCEneoVRE9G9jKHNtRagBTzMkAFnCxAprT7",
  "key6": "5ZCTitHcu7MBP7TecB6ZcZ4C16ZA4H8yLRL1aGa6rubasoTcHvZn7vSLY92zWYCgaH32a32q36856nABbiiTnYvt",
  "key7": "5LBRKEJfW5FhAscXJ6PNuj3H2XvJwpcMhBqAc3wnQ2rVjam2i6wvcimmNWkHFnvU5Vbvnx1Mvi187BZKyZmG1t3R",
  "key8": "585e4RDyW53GxjaUafWkcuB61cGjgXCE69PNpwygTeJpXNZdu5TgqgJcLEB4ArKCWwPMJHXrLktuyedAqBGnsEfv",
  "key9": "5TfqCtaRH7oqp1e2BsyY7UAFDHJRRroJg5N4P3XihhB538S7RLQFj5UuXGxM1PfyLjaUbpDg3hXF93vUkQLCqPGc",
  "key10": "35kFiCdWWMvvbMSi2stGU94n2vzb8guZCbLbNhRAaHosQLZEgdmFYaL5JJWqKRd5kKEeRRYmoK1HTtWVVSmKGbvr",
  "key11": "5845i3M9hVo5y6iMcCBn9qf431aukPgfHwEVSJKkXdDyNXa5uXZhtWPGwq9k7Tv37PUKEi1NNgMpeuDJHxLvWTUo",
  "key12": "343stxr7Ro5o7HyUK487tS5Kqac3M3VJXWyTPqcg87rQ5RYhTGim6UAMpBTypTDBDcSkeYVXG25UeFfqdDVMjdBY",
  "key13": "5XwKHMtWf3gR46ATZjty27NUrmyMq6CtfJGRrm2T6DbRXGzRffARXX25sos5zGAK8uX3UYnwxdyXsxpYB3X4LPfj",
  "key14": "5F7bNVYn5S9guhiRcKs5WoUPc7teDyAZhSf4YxNNub7JDKgLrSaNGFEpL3EgKZ6TU34nEz7jc5a1t6ue7mdpBs3J",
  "key15": "kMuV1dHpSpo6iWW1t4rFj1LUKkW3qoaqCZLxyG8QXVLDogZPvb83q5S6RsCx6fukDY9vYtsC8hQ8jdqFVmDTdcW",
  "key16": "4PKi9BHrD51qh9exQvSKFVrgka3ATK1ms5Vvy6NGjrAKDTxyTYVeZ271s3zHd8Kyp3uFDfAEJZ4KjRdQJCiA3HSe",
  "key17": "3o9oRXEx9pkTaK6m8VqfhsargFFEgbuN7owGqitsSXXonGEwuuuHD5Lq14K6nPAhCK2t1KTrY6yfovVpAWQ7NQPr",
  "key18": "55eK5zbb6QzkWzWbpCQEQNt6t6ZEEMBDBi4AERcYubsb9TFgZ5E8ZUKG6hfoyHLVkbLrGEqzTp6itZfCV3Y6Duy7",
  "key19": "5NErckV9W5EcqUJcHrDj8c2Tei2ytF4oFE44Y5e8XFNuzLfGVWpZrEmLNGDkBD7rYsVd6FXZtzc1MBRP1yR1qPV8",
  "key20": "4EKqsFnBWxPExcGKtbaetTbEpSYxnT9nmoFtycj2rrt8yZD9Rh4bTzk7pSKhKTkjgVdsqXpZC9Xzf4DRgab5bB2F",
  "key21": "4pHXKg6RNzrAQuNeZ8J2RZ93fkRp4xbmodFAUj3qanwWzVNnoZ426z9GKS1oG8Sz3wkEHuLgbBrSowV8v5nkMz5t",
  "key22": "2yprtRBNtQV4vsxdEQiK47DyBFt3couHqXHKejYLuWekQPnAsBXu4YfKixkp16czSchNVGg8jXLLnbWqvu1eK2f9",
  "key23": "56tDCQYLX45SR1AFsJyodcVW8khWioyAiELn9aE8ZSPFTFE3pLjXRdvdR7BeK9byKe4Ahj5Ltmpr9puFJacQY1k6",
  "key24": "3YN5qZpngpXW4hxPy4pdLvRR5tLA8TgpyWMz7e6fPCVGw5YDAQQqwioDBoMhEpQ69ZyCN9GrcByyGbYNP37e1q9P",
  "key25": "PGqHdwUSSaUxDJc1ELrHuXYh5ebrfyj3jP4whqLbt1YhwL1eKbAe1U7f98nm8dZKcMMWLHqUEZFKuMggSWmZJuX",
  "key26": "adTyYiTsaLuodGwoZB7jNnxdM7FGddpLuRzzCVhjSQgBZvqyhkFDWyJpMEsKyEh1GAoptTJAs4jqncab2eXZ1My",
  "key27": "5BU2MqGCvHATPqVE94qpVruda6v4ad8DykerwGyQzQnPfBn5UDxXgetWgqUcBvu3kzAs5qW1vF38ibJqECd36edD",
  "key28": "3sjdV3PjZm8Utv7USHjw8gmoxKoEdyvejVi3RFVFqjUiqVZEoRSsQVN7X3249Ev4bVdRDxLU6EBQwJv7YkBdkhpa",
  "key29": "5cb86ZPGJa5J42HNLC5Rb3s8K728XWihdC4FueUm3jsKES6c4MXLFtKUFug3ZhNhu5EbgGSgqYbnagkU2ffaYbL4",
  "key30": "33bvDnygNjx9jXoNwgfmJNXDe2Yuo3Jzb1K5XMJgWdKBVJ5NKd71jjB8zWrt6EQnJEhAsxxVs1Lm3tG22VSbEkz",
  "key31": "23uDDJv3U3eY1thcJgj3sTTBHMhNNcRoqzrLmfSjX8tg8ypBMXxsQmHn8tz2oHLh33a39RZtA9hH1JgKeceLCwjF",
  "key32": "4Wh9FuC2oGhMrrasD3BEoVKzx1D8mFq9wPB1rqwGjw7tX6DUBuWGtvXtThdoADu3u9Ux4HEhdpLpokPcUgoa71UT",
  "key33": "5arn3HJ2qmc6KSuv3qu9YzdFQKf4bPA6uN4DhnsnZN1w8P5n22Xfp1AMgcsMKgkp4R8y9ndtpJjGDTrpHXoQ3Qwf",
  "key34": "5M9em2fDP6Yg8gkpRQ2XzvSDEFaZLWvP8w41uhmSJ87cZvrwRoouo4rUNhV4AgMjQ1PuXSr9cHBsLh1C1zL4yFF2",
  "key35": "2FtK5pNNpL2GfkKn6h213LxQJQmbA5VsoWGtjNAyvi1Kyjhitqze433FNqfSJAwug4ZjkxeQ3idHQjqCDPvhhFZn",
  "key36": "3V2yEKftJxFQmfBE9i3DysyrghoZNTa3Nm3nwDJJ2uAznqHd4o7ZZnVNqnk74RP6Ejmva1XW6XdmZGEeqijFBtPR",
  "key37": "3cq3jtSEnQ5FMqtPttRKZZnB8WgJVKgwFNbWeqHYz6v9YhgCFm919aqKzJ2kYg3sgaFebgH2Gk1RToHoTSh9o8ga",
  "key38": "56qBKNxLCF1MQCG2CfBbrXAPDWSv5MqV8VutoAz4AAfcdksspCd8z9TNveYJfzAFkuj3H61zPdKh4JQyvgVQKNL9",
  "key39": "EZYyLp2eHcDqgZgcNhPsJqafKK4hKD7sXvdHnjQ2ioYXYAuY1SQE1TuTsCLwMkm3MSoC1hdU4e8HSdmmKharnU7",
  "key40": "3AgB7cbobUsLwSBCB7RNDFqNR4dL2CMLYmQ2ukqFL3vnu6fjHtdr4QWw1VEfjE1bwJjLYdcE4Mx7vsWbvNMdbwvi"
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
