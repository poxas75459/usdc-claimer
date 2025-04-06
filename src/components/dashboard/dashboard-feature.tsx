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
    "5hR5BZokvD6vUY6K7QE2UnGjGz4dwdy3ZNaSSJFDqv6Dj7zmfTm7CXUnXvfRdTzyHN9Exbfbpo7YWcugLsmUD4DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UpCJrsgR2Zyuo7XsGjsSkYjmmUu6PGKwDxSXL9oF2Nvx7H9TqNj9oA44eyFzJeAKu3FZKBJ62o1sCKN3tQFyZat",
  "key1": "51MLNLQkiTtwAqgwPoSVHQ3cyhn1QQ3nRnW53hEWDm1bywK4oy6LJy2Hjr3iJ5us7ZqJ6cThcTCTfi36Fj2HXUJZ",
  "key2": "3rx1oT87F4NWMcTAVQJV8TqXY67fnpxkMzrPWrtPQ8wdaz6ZUSTAmYF6D9HRvUTPGwqHkqC1gh3UZSj2h9udn3qa",
  "key3": "25tsR8eh1Y2YQ6Q9CnwjXWuPRdYiv7S4kjoHQJW6tHRWjR6V5wj5CYBGp9Mv5AaszFfUC9YUwip4xfFx9vRAqcdB",
  "key4": "3TvnMxTWBifZDUQsNoFV398bLWc9DjzyNhuJvoTETt7LWJEF8rdgYrc9NoFMxq5ni3yPq379bzdH93GB47aUMckm",
  "key5": "4HSNEwGL8cLs1237mD3eUnPF2oea7Yr9zz3VN5F7nEBfJbSQiSqiv7jVFi8hE9EEjYUhBa2DEDP7xKNQxbfBDpJz",
  "key6": "4XnGa5Wsq9Uye9R6KdCYjafDwrhCwxWV2LEhaocdthJws7Y2mxySqXmhNPgMQouP31qYxvEnzeEFseJLqwMKHpkg",
  "key7": "5geesCNqoeoN1haznKjGRSBYDLBukN69CfYBMfLdsAB62h7A2zKWxFKquvXg6Jw6E9bMScRsnkaS6E7tiTf1zKy1",
  "key8": "NBoqXDGHi2rcW1yJfKidW1aD9d3ZPHkstM2zBr47L1SJz4wNCgDTT7uAdw9H57fJfNTUSG3RnqYNBqhkLyuHgHz",
  "key9": "3D3ZKeWyeXt6iaZ2FWZQm4KimFRChkTtM69JFnLWbCbQUhCSSLJpCX5BuYuXcJHx7e8nrDiPqkiHrsyNg1d5DGAE",
  "key10": "2qBYuxbNhmp9NmmHtDZXsBX4A51HMKnWpvXyWzYBibdb7TodX6D87dmBHnen7zVK6LB3488jVMoa79iSb2mkBaHn",
  "key11": "42yMMSubwkAtutygQrD1ibqaNVDZJ2ex5X84cyFhaGTC1Xn7W1ZUTmBNnZiRrmqxG3iRdZrxaK4N2JnNUQWkgkAt",
  "key12": "4YtiGBSuvcWN5Sc8P73BjqJehi5bnV4V9DQWKAaJhfCX551oqGmvEV81BDkwUhKiW8YnVAswQSSeg1tuR6UrJNUX",
  "key13": "35gE7RGKopJAQBrA4YiuUwfxt4ZRnRqeKhUzPQXPrUJYzaGVgFKGweXTHCgG4cb7gfRDjFtFJAKieLaYumaHvEmg",
  "key14": "5iYvERmTD2btyQNLtbDBgq1oWAdaPjmKNUFG7XU1NwgtENPDAFJ2t8TfJ6wRLWgtBNtgJ764Wh5zP1izwF7Wzm34",
  "key15": "5s5TEMpEw1T7yfUfuihDBcwPKAAe6i9Hw2xG9jnfZX2HdQarkB7v8tAo28XwquLqLhz9KvpCZkFwoUMN9rkgDzV7",
  "key16": "66P4pRDpBvTRhmbQdokduhQRxA4uGSeikXz2CfMg435W2txWw4gaYKJHQuxxaP6fCBGs2v5KzXzjmQQ51QiMUcGm",
  "key17": "52UgHB131VGtyzGiHviNzrVaSUF4qNBPdA75htnPTyiHL71hpaJ2CfPDnneN7TNkwcvPbXPaZfFyUZWBBB7eX9S5",
  "key18": "3E5c3tAxeGDAzUoQ61JD1W7G5rkmzbiEZTuSQeAi3ZZi9LopTSK5215uF1HZZvFVnPsPfnVfDtQRV8ovkGsFi8Eb",
  "key19": "3izwwTJeuYynSV73y6vD3X4W6UXSzSDBnE8GXhQ8CuU4TwMRN4hZWHw6bboYoDr3frARTQ87xiEtaodMGF67bzqr",
  "key20": "oES4sSBzmfTF6iQJcipndLaTJTCKNohkrzzBTMtbP79UWYxBYW9QHn7K6EfroKJMfmoVZN2GgN9NUYog2eaz9ro",
  "key21": "oq45REbbcsa2ALVACTN1hvpp1seQKfyCDtYXYMFa8deVo2j1UvZiKTJEsyMmgDLbanVgfChbNVn3pdV1vTbYpVp",
  "key22": "kHq4w2k51fycYdCfyZk7Ti7tZ6rsxSLun7WwpRmJgshoiq9DaiHx5bnC9vx2LUJEHgqWFS7sT1J4q8SFjAN4Sdi",
  "key23": "36tCbezarL4dsJB4cR58F1Zv5p5HvtYczQMG3oihMmhbePQsfMiVsZgXStYVVn6dP5yeM2Qfngqv3UYG7GaoxRN8",
  "key24": "3NZtB9GC3tWwVHL3fXe9X4Jxu14pahmC1qqMaFVJA2yMoc4vsBfgWeEfTYWxwaku2mZHfQsZLYVK9b89zLFPJMCQ",
  "key25": "2XGfsKwNsJZ8YLtDYubEJqCvZcG7yRMZ9C8Nz9UQvJuPFXLFAbmmfiyHc2eqebPV7CPiT2CaGaEkW5MLUU6ShnSS",
  "key26": "4p1FEUmYWNPxHgCAx3faPJJ42xTyR9kMQhqKdtLSAaJgwLgK5bn7z4FaK2MXCfwLD3fC8iTQXzDeNRRuGzTMGSNR"
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
