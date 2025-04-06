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
    "2gYZ8kuP1jrVrhV5ckap7F2z5XgFHCrTR9Gy5HAo7UVCTjtCyWe3wLwvfdDaG66vFccqXPTgkv22biAqh6wNNE3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DA7Hfqk1jUTbvMMd9E4vrK5vkz5RLbCjMc22yCGATbhMZpUDQmjPS6vquWd45ZsnJ98iuCEAUC8dguKpz1Up3yt",
  "key1": "5yrPm1Ki87x73iJ2yYDKYs6nRKGNR48obsFsQMiVj1aSBiTNTjnvAF9PaWRDTiB5wRB1WudXSCScECoy2VfD1QMG",
  "key2": "Njn4NPjHtkdkUyB21TakbBtXaYRebw3wskbVAutRu3Zhrn5XvksNxgHQDvB5BjdmNPGtbLSfusADdMtnqAw8cUW",
  "key3": "2kCHMLiQjcBHUKTHptjEDSbsw6rnemzDvQ6Ctrvw5yLNNrqWcNUVszjgj4dhQaieMyJaoqc8x9UAbSmHRC5mWGQE",
  "key4": "2nqw93M8U62fjguFd6VVhk26WP5STH9Hvfr68uHuLMaiCAAgzkE1uMFLV6VWvJuKvwbjSmokmNQmg4iHsYa8Vi2f",
  "key5": "5BBFkLyC2HqDoX569h8XtKm7KbhwAKj5AS6jKPqoHFFtGxNYym7ytLgkbXDDokauPVLdbL8i6MjXsoUmx1PFRyKo",
  "key6": "2thwzQzT7GFaujKuE6A11ckjf9AUwxpvDwN77j8eWVm3nFcCLkGSHG8w4T39geN5biSFUTVgCx8Ea31edMBV6w6m",
  "key7": "2JeUPFnXLRbk6FrhXCuGhjkqqJcx9s1Gfis7Dz15LeZ9JKJ821CyXEP3ksKiPbpuLG8eXwAzXVbHm6mCgA3xMEFH",
  "key8": "XieGFCwP3pcGpVLy2zMzTW2YV7ZU2PxhsGzXbFn3AaRyv4AdsUTomygHR7Aa71dXKHkKTU3XqQPQXbCSUbPsPQm",
  "key9": "4CH37NHsspFKrJrzkjcbWUJtTK4m8x7jXfLj64EtHnH6K4yvsKV5XVYJCHkjRihhz9zwMy5EjqTVHgXQY6KHDXcn",
  "key10": "5arz1bxaiVZ3bgQBEczSuHbYP3BMpQVY2ji9JmXsA2Rn6v5JJYYnMR6RNdkEMtb5TWuE4zsZZsm7Ui6bYLGUzvWW",
  "key11": "2SS683kussG45nn4n57VECYTPuYs7PrmAoEVvqUheszvboA7P23EZi6dypDii86rkuyBq9vKMPDrF5UrjNfMZgCK",
  "key12": "3J2ZcUFDABvfP1yEqnvKqSPgRXdhmUrafzg7A4G74sEQToitRkQJJC3bA2dmzhPD7BaBcdQ3AgpDYJWxLpmLdojo",
  "key13": "5YHFPYzhPTGanN3VxaptE8c69buY3x4h58NWiz5EENxS3S2UVfB1G1LquJkuSq2ykZ2M3xPbtUvzxHeVv4BAcBsg",
  "key14": "255darGrdgcoH8s9YtHDGH5MHWbiraZHFkzxiV7iCirKUUNHYMzLAGX5gLe5bepYnvoaAte28huc8LJwLQNLfEep",
  "key15": "3GsDf2joNGLDyR585jEfTzm87RripnqsEizT1scki5fWX5E2kNuERKC5r2ELE3xzYcfsEFMxs3y7HHykeK2pZsUM",
  "key16": "E3s48DqPM5QDhGH32ZcTV9cFPUtLqv7S1K97eoUMWEYtSgcC7ou9usfb1c21NxjR4oAhZcBJSYGXFZub7HUGGv2",
  "key17": "3KXFVsA24ccrYTy3HhXBVkKkJmJDNvPRLQh3cgq4kKA3RUqGdcUmRKVSaTxK3apnBCYhMf3CTezbYRSgYwnFbXyc",
  "key18": "48aGZxYyKH3R7fjhuedNdzVzcizALk9jwADyktfYGdtFWHCoM9UxZ5bem4FK5bButbT6uKYBxEambufQmAYdGinJ",
  "key19": "4LkyH8u8h2VHAspxqT6PGVSK25oAYrN3RpbAxvrFM2EH4hjEePYu8xkGpNedX6u8qxyQJjvN7QF88VFK7oRQPFLs",
  "key20": "3MJLWec2pkake7Lp3eSKkgBU7zgnLmRxypPsmaX7qpRDBzCWvATjpn4rB2D5XxggsNNTWUMUDzVcNgXthDM5XmgK",
  "key21": "4LvBuBXNi4cEoTGD8ZTXFzG1UsEjwvGSvJTGfHvPFwkdivkkhQEBjhUb5Ar5rvUsbErz27JQPDTjxeJBuKQKzUjK",
  "key22": "3y91pDjNbq7Gn7xT3jeZrgKYpKM3vWvuU5GtxWyuZKiht1vjx3VUtMnpsJ6QFi2mL6rtYrcwz8nddzSTNfs74pEt",
  "key23": "dF5jwPQ5eFKfWzEhGaRmwrhtJsrcDo7sfnxEf1XX7RRyM8KBzieBRc5SnoArhcTkGNzqANMK353vZkeTCMArwPX",
  "key24": "527pSEChZyRPcbVPzq8S3bFsbG5sF7VVVvPGpW7o34o73Ke3b6kqoRU69UvAzqX7piqdKHKy1uemeUjeMzqcbASw",
  "key25": "5mE92Ar69DFDimNxcZajckTArVVFFHVZQfmSJ5sN8rVgMKne6XZFicd6c7wh6Zq6D9XoZDMuYHyqEtR2BJunhJrW",
  "key26": "4F7LpeRpq7iMdw5JMRuYXePMRyRcHtCrMNpmy9e3HcrcKmoRRR9y1dToetptR9yLSBiQLkGjwBD34KnVjy63HVx1",
  "key27": "44A4GHJ5uAd56LK6sqnfZ8yQzQjo6yBbv2XreTuFDcEw4nUTKwh91rxN1JQ2r7pk8KDpSAVNnTWhzKwQZdqVeJaD",
  "key28": "2C652VAdKj9VZ48FyMftBh4Di9dYKJbKHAoiACGFggFNDTR7J8FNWHcYAxj1PiVuagM1wQ5BHUaRfJtyDD8UFN2w",
  "key29": "51XgZ1kQY5qepPYPk1kv9TfK72q8k8wBUic6fcUWxZ21HFPKS6vt38MngCDCTYubLd4x8rS3yQ8saZJNweR1Tusg",
  "key30": "3WDEVzKQe6LAnEdJx6sWDapUP6qVYRtNmRp58zvyopYDV2GBCnZo6Z7pwD6iCGD8zVjJxzZDLmCZ1TiRkgL6HhbB",
  "key31": "3rsvy6vfs6u87cN4KRX4KmfhXq6vPcs2PWaj4XJxGiRztUwKMTmQMNRjjyDB2SjcR8XX5Jb28bZueU1xyMrgHkn2",
  "key32": "2C9Xb7V4eVMwHv9YHF8cfCwHi8PdTq3TMtvVBoxt4tHnosffPDFPagHvxpdx7y9BPTqDEJCSTFkq1rDdih7A7VEf"
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
