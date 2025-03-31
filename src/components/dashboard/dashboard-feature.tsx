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
    "2GPXje8KSGf38qV27cuk9YM4k3durkAUaiYLGsc26Yq7K47KXYsremzAPJwwPC8yMgVtzqVH7oQqg52u8dAjic94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUojP5sWe2TYkyFkpwk3tF91UFQ8mf8HZTRJWYh7g9M67xKrEDBLMUiYDGqMT9SKDnJDinHYBr7KpvVNkEXLm4g",
  "key1": "4gTphKHEtEf98C9Z8zcuJ6gQCkMK23TtZjJVjbhKAje7yrE3JpUKY1QBftFfjaW6g8CtpTHShnNXC5oSdScz8enw",
  "key2": "3z72HGYaRgYUXuiyJtRx1UZJvPX3fbviUmzxf6Svh1PyvqbjkCPV329WLmy1PNJAqJ9yM4vmDpwkL5rDmq31hrsG",
  "key3": "3ypQC8xZnFbzEfhQGzi491J91fVoMKaqFvxn1ZET3javdejCEdPQyEwBmLr7vJVHvoQRLuGMLJwWaxyM2YTkWBrq",
  "key4": "3pyqAdkXxZ1nYerYaTiBGFtnWx5TAA8sAfhEQZ1MT9zcBxa8Wbaiu99sonQt1prH461REJaKuNHDvD2suad68fWK",
  "key5": "4nMurox2cBVdCbk5nMj4v3NCzNAhBvauswokK9Ruzykv8cpzyv4XyWC1Q5X98Uv5qwM2aJvM6MjJgabWGKs5i2yH",
  "key6": "2sHLTntFgTbSqt4DYSqjdZXasZzXMs7PuLCVgC1vzYMfDQJ9B7WN1q59Uy6MZSvDLNPWzewgcyv7m2xm5YPtj4Vv",
  "key7": "uryHYRucHXKfq8KXG9EZELwBeKG2qA69ro94irgHNAMZGqtWYfpBEXke4x3LqoRcWxh4CYXTxKxJ4SwfzRYqQ4E",
  "key8": "4Qsy6x5KUSakcuGgGX43iYfACMfkqN4YEUo8xADTZMWZkBtdscS8p37iF7HiCDDuX1aEyWz4MJGZmQcLXu93tYbe",
  "key9": "56KfoLHnB9xzncmAQfhSyWMprmeArGsddRtYPDmDQ4FDATanxY9tBpoQymxSDt6xfFithxRMkvhrnDhFy9ZgPzXq",
  "key10": "VSvvDND4AuH1Mq5L1gRDtgrFNy3M6UZVeRGYfmXnurPAR9GZ3Jm664g9zQjLMkGYeRdKHD1Nm3eUpneEJCK82Lb",
  "key11": "3Sbt7wWvbQexSY1MCcTtu7aHRBFhvGWsCngYPLqA89yeFuTM4pkJ1qRYQ8fXHxB2tXXLHV5K7iNzRbKdq2BvtTKd",
  "key12": "2PnndB5FhSDi42FfAyBy77qrNogPiawZEGjwTmXVyKJyXhMmoKM7Y7ZSb5M1U5TaWukjQLzpACJP3nco1gbMqSM7",
  "key13": "pE2GEzyjAzr1gBnVqPSbMzsQLC8GuFufeqbbctZSzrrWEfDeCsf73JMrpuXS9AtUM4Lfh3XwYxLvvfEwV5NwAH1",
  "key14": "vXA41xkd49AJXBoXK5gqN7M8AfEDBx9YywCTp4RJdYpMLg9MuS2o6Ue3zzaGGWP5uTuFabccnzcwhCUDpxDtuYY",
  "key15": "3pqoCdximzmbnNqyK6FgJYU5sW95yKsb8xFTRJZ6FJHEj31ZW7dtMoFpqPeoXPZJidWXHgUtMr5siDfuufieLYEa",
  "key16": "5WVTXjNcPzS29EmgERHWpk9dnGhvW5zNgBRLbv6w6scK3S2FuQmuyKWMbaku6LqRXw6vzGZYqWTcZe9LtcYDP5wf",
  "key17": "2mkt43Z4yxsgtyQE7izTWVVRLDp56uBxTudau3gWW6jj9b26k44814ZkXXSodCnhyz6UuL4ZQ4voDaDNeGKaSNFk",
  "key18": "3qK4cBP8LodAR9uZAQzw26pRrVAgiLyHeot5nrk5YJ5qepK17VKLtGpjYvC8ZYnhcTY4N5dTF7JdubLjrs3beAZM",
  "key19": "28ckxtMwyGQUDPKoMM1zm6BYsXcA6cP8w6xotc8H9y2dwMwBCEwdmaQEqT6DGDEbdR17gHXjimtEhN39j5AYxdgB",
  "key20": "4gRjLujyHZKEeDB8nFjmZ9PrrRq1uzPm7DQttnTSu7Ts15GENAjWHZkvUf6UjJ6yB93L1KfUWumTaG5FRzg8Fj8N",
  "key21": "2WUYjKWWUi6YfJ9VAvKzgq6FrGK48knhAzjFwgEKVCjzXsjxJ2RRRQgqgM2uJEUWHPjv6DCkZtNCB7q1UN3u9Zeo",
  "key22": "4fLSHRPKyVXigiDDLYcsjoKLtGUe3vpEfj4Gw8PQnUGQygQmLcwtkDAjZTFhke2YnnazLiDy4WiG6DwfH1mPrZpM",
  "key23": "5VZ9H1yQz2h3Vyn5M2qNidWWdwYeGMX2X6zBggQXdLfQT6U6TMBbRJfDBsxcTPnJCoaA6eQe88D2fF8MnTyTzonp",
  "key24": "5iFeSFS7aUs4rTj4Zy5dMSDAjQWGC7BsA1DV7ztdT6zeRhR3VDCEMDykuhLYKJ5ahRANAHG2R2UXnxQaZQDwvUd3",
  "key25": "2Bky5nhDR6xAfAGh347VX3xDFDZky1hYMas7AEcdv31YfVnWDgyAqf63Ct3o9QcaqzDk2zm6QXhzvarF6x8wkoqr",
  "key26": "33grRwGxctbBDKDghq6HEzQ2YK92jeeRAtX4GYfh1HF3MqoAVN3m8syRyreYrWNV7q418mTthGn5uGGGjY8ebvMn"
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
