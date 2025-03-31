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
    "3cW2xvDeNcMVdtZG6GiNk8d2TE476PJbc17P3kuYZDZqyYpmSvQUUcicGBLwnf7NeyCasoXgvn4MzyZNGpW98EQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9AqWP4jycSBcycFx2LYeTTJ6kSKNAkrAv6y6dADZmTwEzp5uTu6hSfuydxdg9tR6tozkNfZQgbLvfGTAVQQ38Vj",
  "key1": "egARvMZXhKdq7UoWRYCyyQvUvEuFDF9hrbiX2TAfL9wV4UgvUzcj2qbBMzqPoWatwmv41yGMZoKvHw4AtByVJcb",
  "key2": "5igbkhbGsEfj3uH3rxRUxFz5DDTzpiReViZPYdhL6FvcR4YosrXMKTJkhuyyFGqAGRbcs45amXZkSGXzNwTv7SQ2",
  "key3": "5cgdyD9SQ9gXwL7Yan8YjPbMBdLL6EABzYZ6yF77cucVoEyAy6m1BGVMCfUTNgQgKvME5xtQYmVFk2wvRPQF4PdS",
  "key4": "3Da4DgG6QVWxd97XbjXBy6N7Uz8x4wky8XEVjCXFRR7dUKzwLyiLVM3gJwp8y3BsR63n1rPNB68XTK3EYGhwCYBv",
  "key5": "4yPm5HNBtDLSGcNUGHtzTMydhNwXiweHgMmAnRWKGHLHTyx2vsXEWEPxJUD5JacTmoTPhXtUazqqT5RZdBDeF95t",
  "key6": "2xQe5V9zFPmRa7nrtRNjEHY1hWH2GR2Mr96qVy4RoAH49nma77v9X7U83Ew4tGQAHhWWnTi9SJo5fqV2VyL8ma64",
  "key7": "2J39kAuzE8pyNJR54RJb7ay2o3SVQRuNnQH4dKorvHv5KrqyerFwKSXHJTGygVpVBxBmSzqqq5WjmrzuH9TYJjQv",
  "key8": "2Yf5iXP9UjNom1LhU5jRE6pH2Xhi87nuSdNxXbryTUvjULkkcRspimcpfG7Kn1CmM2QA68jUC9M4PmK2MF2kmbfp",
  "key9": "5SUxSYxNr8U1PDA9JLRr2RRE4tqcTd5zAiKggnPZhvL1jtFTmwUBQBYLUT9hqVE4NXNZmG3BvwAFva15UapsXMXc",
  "key10": "675qSTa1xAVmSyVxdvbgEQ3Uf4KPKtXERpnDbCjzajPtrRHj2audiEyZmHWU7vngRBECxUDrvrQ2KAyDnpjzDrqi",
  "key11": "294AgqNnwTn8CBQqodRhhqk8SPGwEoQ347VoPweCAcsTzcA6k6mfeJQRHjLyTSaxnSoU3K7vLhsxFHDjNv6nq4m4",
  "key12": "2uEJkrscnigyKyFtgHuvwQvm25KpYKnh42iQhY8obEjQrrxZkAFrPTBx3vszHjDKZ4s9iKjPqrr7qYEoRpLxNFJF",
  "key13": "5aurZ7Szs2BEJ1tA9gmA5RipQ2k9jEqWs6gSoQ6ynSDWygxA2howmCs9Sc4mQUXzy1xt4Z9axzXPW3QguysAW9S5",
  "key14": "55YkBQeFptsGPWpai5fAyqXwwjf4vE9rr3Ahxk3pzSXJLDavMwWpVERwPdYNGeKr2McyiJtxzaMAR8YQGhhuMo2n",
  "key15": "3GiCq6UnWKz5WVESeG8cS3UhmToUg3wc53a8n8tEuCXdcsZ94G27Yn1jzgnotaE5wjcRH5ssnQQCi4s6yYBRnEya",
  "key16": "2sPa13FYY6T3mYA1b2JPPwXfDCFKpGq2dyqyDa4ukJQkG28CZBVyTaXewKSctFbi3AQAQf1eiEYWtWLvHrAHynot",
  "key17": "3Cddf2MZr2nqB1o7TwaKo13nrETVt2nep15NjD3WMNEimVnh3yD5BfZbgRcyWX8YLtkimW3Dukk9fxumdhu3FiHJ",
  "key18": "GuLRGXGKv5RBLaxdohqrypLWuR7QPnQRnfZbdjp4jPBYXnS4Nbys6arVHXxxBUGxkxXUGG3JkEt1ZfjNkL3xf3m",
  "key19": "4KDhbjRzV4K7TnXMkp6kBxpJgEnPzzP9M7Urv14Cnqp2YVg4t5GgDYcmmzsn7F9s7ZEYrkEhrfaoR4Sx2cSUuL4f",
  "key20": "5qWAQSZL5XNjkRHbYGA9oTqkbHsos8cjkCRYFAEaoCYgqGqj73Tbana1uW5Nd4DtnL3fsHLyJpZp52iWFrNpZ4xH",
  "key21": "2gBE1cP6s1mF5ELpexjTcdzYowwTUbNxX2m3YRXJa2DY2bYDmh76RYACrFzTYjmi3F3CR18RNV3BEvPMbzFfAJEm",
  "key22": "4PrWH1UBpoT3TnVNxxUd79s4WTiF1kGUoCJ9pgcuzKEEDpNh6cnVUd2LwwVvpbp94GgbJWfC3JRdfToCoqhmMiwu",
  "key23": "5CpDcMpAfRNSvnWLbZUWCc3WzaG1nZavmwnSGEs8ZoF77xvmpK7nTrhznxiGVMUutekm49en6JKNLwH86sq783C7",
  "key24": "5VA14sCCsF7yWGsnFGboVh8Rp7AszJuQQu8bzZ7XaDyjUmzA9g7sZzrRksA8kyZs4anxdUzMTrEaGajodfrJy6QB",
  "key25": "Dj7wcpt8QAFbNV6BFjjQ4cRM6KLnULuhfpzXSNrZsqBvcYeEGHnik61V6d9EaEu12snosXdK377A1DzQiFovijf",
  "key26": "5i32wKGVJeaKGogrGMLPtpWNmfFYNQ755WQcELrge3PEMDq8P4L2QY7rzuneKpzwNeQobg7uQgyJYumnNnJEN3Jc",
  "key27": "4d5DLC6k3FCNZsVn74F9sxVpC7kZZdL7j7MXYTNUDDyZtyRTe3SiLzHMdyewhRm8Je4ywEpWe58bXfi26dwfLAyS"
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
