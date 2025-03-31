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
    "4LWC7Y2wjSyLFEFvQv1ZdEim9vQEzztksuaP558VnyCdWFyuMSLNk73DjLnzYwD63uGamTuAKpL9Wd7sXkvqn2AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjfD1mQKiA1ygDNfguBdJ5dKJdrHaP1ZPuEBKZXARZfmYsV4psPy6noaKzoHeX1jZkTXxgvrG4FS1SFc2hKncGs",
  "key1": "4oYCX66auLwgUAwvbk6TjewsSRUyPW4PeTfLqGCPpNE5xcW2VKGzAGFh68RFAasHFv5wKXDtyjR4KGFAmMeEojHe",
  "key2": "5LzvypVuGfjUxK3Sm3zEtjZYFnPKArEKQ9ywip5ZF1ynR4UDRRFchSthLKYMLSVw8rjHLcbMszWgPEi4M7EzwJGb",
  "key3": "47Hht6fV5TYUfKAhyGmCvpg4BF3JBj6wE4yHrdhkMfdmirkMg4xWatCjverVjZ4okUjH9dwXC5cLSDWYN3AHjKah",
  "key4": "4DJZQRBKhfthEGSNtq81E6qz1RtuwQzVBDu9PrbHdFBAaAxfe3oDCrQerVfZBaPb323ZR9i2ZUKZvXwAyeZbS2jy",
  "key5": "3Ln4xizmMZr9D9npjbyJSJxfNQnypy5WPUFCfu6agEjDha8pWcZj5v7tfGsJANqfpM2x16i7h2Qha8cd1TVQ4zCh",
  "key6": "66Ju1CjJKYz9HqxyPGdtmEYQor9AiKZTW5AhL7FvySmjan2L8XcgeGtVz3YWhtcZAkECrVBXPmBqg7tvHozbDMce",
  "key7": "4fhb6nES76aX1eMFdyAfJXP3z6bPyf4YybLfrrGvdxc6jCCmEQV1KQQLbPnpeCKS7ewawzjkUKZ63a5163C7QGUu",
  "key8": "4niHVXSSKFJVcDkjtBnq1M4dXwXvKFLtK3kwnUdE4Kt79XzWKqqv76DfBoB4jeYrykzchhhHPRi1UQ555j6MuGas",
  "key9": "omq3D7da7tt6jE869gK4usKxrbAj2tG7GrdN76TQoZVLdjVXBDM9yaioE2xKR4wAfkPL8cuDPKHG2zQVh7SyN4D",
  "key10": "2mm5nbtXYvAF2SupzBV8PyVZzaiBQtrxqBm6m953tbtewjw5PKyrdbjyete7NTBT5SFixntraaJCKfJ4bXtZ41vW",
  "key11": "2Gw5BPpN6r24teh7b2z34Bvzk8GRDDjxuF9Xu69WUWEiEeanqLKTvaGUq9gFUpsBKDzEEMUoNnVEqNseXMQJwume",
  "key12": "3ZT9CfeQRRccALcrqHpY6KgNmV8u6kcwHGWKhhTqe7t4zxHNsHytzsqCpuMCnhKXChn2WxP1cqTMLGTST6V2qsV5",
  "key13": "286LDBWr5MwGT45xTWJL4rByRqqrMEPNa7Nb5ZFc5ecpDpHn6s9xEc17F2QyS8yyUeJxaBCja4hvCPiLimWsuBNX",
  "key14": "FuJveYHnMi9Ctxg119chbu2TNkfd5bdAAsXLjDuTRk5BQ86o9mmfTvAxXeFVzYUyCHbxmLBYenSqtH65tDc7u69",
  "key15": "2saEiqgpd4L3aswDfMwQzTZppJbisH83tnCGK9GojaQU4bDD98mbKVux5FoR4zwwASKQbPQnV221hNjnhHFvVwGt",
  "key16": "v7GakYqjCPBP7vy4eNyDVBukjHDvPPSXZfRJVyn5uGVQDYbU4MQojhwvbLTgjxMYU8STP5nkoHNxNcErBERSexW",
  "key17": "4Dpodhf8HgvvNAVA675WYi7DyFNteyyJ6j5nJHLTJBSST4eLVYkddQUuPW9qJh5mnbntny4yznfk3QtcDt6ipuDb",
  "key18": "5cKpSffJikANkwQ2Qz1i2dX1exQdCDKen7VtuWzchohuRTF4C57afSndiX8VBijyMkSEQtzBxL5DTMrTFdBjHvff",
  "key19": "5uCuL9NbBQ9EEjYoZE3v3uHEUwDST49E7uX6sqnFaL3aRPBL8XAeLWndLaDXiqy9xZ7ktCdZ5RpyVndmXpkZsvLF",
  "key20": "3mmKBF9UHL2f8XaUwZcoYfpjuujJ7MRQ6bh13ZPVYr4B5TJ9h1LDqckZwog1L9dui5czBuQhnwmNDF3QVWTKcEMd",
  "key21": "3xXeR6NWDueofVcdntWHV5cyPyeDVH9rEFkSRPDNzJKSBgmXfL1opGQXtNDNfmS4KBvZXe7BBEt7cHQL81SP1yWq",
  "key22": "5oKboUMRSX9hzw5tjJsK4WSimyY1q8rNosvhyHP5RfNcs5e8eZ4vzpBP8Ri4uQogXHBNj3MKEiqcuwoBovTyFt1w",
  "key23": "2p8jJ36EgqHa8zpvtjoqGbCssnB1x8q9WZGgoWkG5GWZiJ8Z5y2uFMtMxgopAVoPEsjG6noKuPtT7zYTHWJuA9PF",
  "key24": "bMJ6G5cuHREXnyWBnNwCynBqs7EMzAwLF2jwHHDbBm1m2ppERVJUvmJF7xpxk5f8ffuXJfNssqQuaXKSqLeCHFV",
  "key25": "5yzuPdvFd3gYF7qmyUK7MGuf6HqUD8NT5KfHPyVP6Mvq6847Y2GCMLiXMpPb559GB3Cs6Z8fCXHcXjdu8z19jvS4",
  "key26": "5qCm9wDCjSro9YRjyKCXQ9AMfSmkzf1C1WRL4iDW3GEVKkowMNJLpdW9UByJTHDfKSYvd3EzKKwzk5DhxwM6UHgL",
  "key27": "38QZfgnGS5LP2T2VbSyLgw6BnyFjr3t394WZuNUaimfEy3fSk88KVPpXGV9LgqtughWhoAsEd1iByjmcGzEhcQ33",
  "key28": "3imyeS5oBthxL4NhkFJRRFHcZZT4nPnAceXzgCfNsqMmfxZxgb7XgjagTCYoH6WwProhgucGncfoSFCess3UqJPw",
  "key29": "5pfRoNygiPRXQxUX3TRAs8XaBokjjponaU9mK7j9ncvaepsHihmsQBwUiTWKtyVBx6f8iibNS29PJR5uYNtHWmvt",
  "key30": "4i7DjuE9ozXaT7AWDH3ELEvkGaWn8DMc5y68p9XvrJu5qFzS3zDpWTdg7uftrwrbehmyezPhuTTDdniKwZ6vg8VH",
  "key31": "5aNSyT3nACK2CZkCcBmCbnJQEciw3yjwBBnGVKb6yj1cPGJGzxiMtNZG1tZKkdUtjPH9ZGb9B5KExYMAd7mRTwuu",
  "key32": "2mYnAzvnhVVVA6eyohAQZcCcDCzrtBtkByVf6DBwR3qQd5bPSc6KXEE7sFtciXLKEg2W5bfRCJZrFdDMdX4FW7tR",
  "key33": "3UQZ3y3WWLAgegmyHatzztcXkPULM9h5h3KPfDVzoLyG8d1QX8J99TANpWMrVdhv6aDmmkVLxC2NjV1XTynwJA7a",
  "key34": "5AioVEmwYxBWUJkLe4DxjBpGvPtm8sa1s69kLaxinsA3BrAHReL2DnXvJHFsuGD1A3Cc9t8VDxPcAtnh6caxUXmW",
  "key35": "5tEypMVSuQJdikAfxsRkEFSy9wffnTA5ZkCwNVNCdxy1LJusN7joAo3mgstHTurE12wHKH9mb1SNrqKeoJpJixfh",
  "key36": "2maCPHEFFZbkP58EVQBDW317c35Qb9wmvFxCfj1WvWS7H76mukmmyJrHdTgezHed7ya1tL1kMe6bV8rkT1ZpAfB9",
  "key37": "29N453PAdAM6eneZaUhXHR6BXCyihyj7UBE4PGTaPqQvJA93aaU8XvNmnmE6utK4cfdiHmTRfh8D12VGBp3MMevX",
  "key38": "2AK6nZvPy8GhneR1MZGXzBH8RabNuDGjafXJNd2wrYPp452HW8JEwLu3kXr19VQJx178suSLpxKSvA1SWzkLjHhc",
  "key39": "3mqiiBHNRofhqMF3A73p5Ftkqtb1F3c558stetfFjoMd5KgGHSBEnVbW4o425zYPa1D3hv5t6DLjNDww9egmLHzg",
  "key40": "21dYLcaKMoJSdmAnrxYSm7upWeCQkMijFsdVD1hcn83wqKrvPyQhhYnErbGz1uNDEKySN3buLsCzkxCmAsWj98zu",
  "key41": "4GaGJ5hoyYKzCysrtdt7qnmaae6JnSxY3DykKi5WUShpqtpAfT6U7oU8MWn8JQDSjQ4gNsxZ5KSP4SzswoZK9RMg"
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
