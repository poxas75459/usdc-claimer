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
    "2xeamEFxPGDqvcLPUZgQ6Xt5b2wp6D4azasfbbJUGgTA1DcxpeCWtnbJBkcKGcK5FWYQH49T5CQY926fqP6RHnSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8f15sQRrjG3vrSUj4DKQVn5YLYrCvDahR6zep2UwHqSctjKSkk5ctpMDyp6JLVXBz5sN3RgC2NtJmzWVo45d668",
  "key1": "648EpUJ6rvcJeS835FyotNNWbUHRECq1n6HJKJGe4e3sV3LUyRNMSWLuhXYHtWyB4XMJMFpVfWXRjdE2cTARwZGF",
  "key2": "4cv3DfQoGBgoUY8vvMgrPmy16c7swmXgytkcbZRuevGT6TTUGJFXBayHUYjVM5x4kTZVhByMAsPZre6GFtKNfGW5",
  "key3": "2ecJAKLBdDGDBARp91habRhSc1dVRv5FYdscb832JpHTgqWGxb8AnxDYsTA41gcegwKBtdb9rBBTsLPMb5gzhrfy",
  "key4": "5KGFSjEEpkdSm2ZmyVFze3P3FYf743tCn5HuQSBAsDKkgrbRWV5f4BUjvovqD23YVdY7VzcBz38nM4XcbhRJE43N",
  "key5": "5DZQUTs1x1N63yQUjTvjZXcVGUrzPd5ws7Ltk6vdHaYYDmUxks2dBXwKyZwJ6h3o36oa21KUn7j6y7e6Mn79JXA3",
  "key6": "2RbvWamK4LaPu28hCfEfHLzrKkYdrwDz6HsreDoZcNJMV3BR1SYMtEU1igJvwL6gyFzSLuSpJ5dPzoNSsCh5zWWN",
  "key7": "FkVpgzRhDrz2wsofy4327Je7s24XYXnX72xRiw2Wau9wehaPSK5SkWnSDddJpj2hG5ZrcQszAQ2UWXGgqNtpycG",
  "key8": "3f46Ga3Q3ncjbcnCJTsBMoE3FPCYG9WuZ2DDGF773Rf42DKkVhrGdEzFgzaMXhG8tav7zwYdz1SWDGFvdT1CoVMo",
  "key9": "3ZYUSNEQaUqikySW3PrN861d3YBCafpoCbaF9cma61t9R17T7bhL6Ydqpp3dkaEGkT2byoufBxVCg7qAY9z1uWJK",
  "key10": "23MMi8upannihEi6CgcPuPXMswLjYSrUCtMUAbVr4BiEY98eXXsNU5zxZWQp7rvwJ8VyhuTfrZ9Kf1Ac1N3TVBRG",
  "key11": "46pr9jyHKxkbDjQz1JUHKQ2dSSiTkUqX6LPBo1egnNuWG5E3VJ6sQ6d4i4hTjxd2a3tcnm2MEW8whFckx91RDBE2",
  "key12": "5pSZcTTQe4bWygGjQudDPrsrQdfxoBB1VjsoTCJQFKtBvVcT1wNffkYAKHFamEYt4EcbMVbES3wEDYGm2rqj5SuG",
  "key13": "pxcN5HBkAF8421croxLddobYM4vnnSM4x6zHBXyPLEnvYropq3nJdTnCT76XGvgvR1H1J8eA1jhHvLQFtxtWnAc",
  "key14": "2kGHQ4b8u9a75J6GDxHsL98aG1TGPxsNM9EPVyhs7iXUinDKBNKD997LAf7uQ5KyhsgBCwQ75m44CMh3H3ke78Bq",
  "key15": "EYesDt7Pk8ZGbpcjQqNBFstnf1MAGXfTFEZ36PqA9KsJEMMBAupHvxtBHYcWUqtNuRUyWjdKusZrzKYcxGLmHFY",
  "key16": "43FPwbDtDGgg5YPPhyJNPztGErARrqe2kCwG1Fo5CJmGzaGU5CbDZevyvVH54znHhbs7i6CqHdfEdW2rbqq71ofx",
  "key17": "3kfUu842f54xkUADzt6x64p5gX3VZiQjMGNq3cgnwXNEAtvpZF5SdqvTu599BMkboMFYDCSS8k77rUkkg7cXQ9Xr",
  "key18": "3oxkMVb8RTRTZ9aA4SKtqUPPS7WAjd47B4c3T2xnY6RzeSGP7hHuZYipUc2Mnh64dRzWEE28PATBpATXX3fU8Tc",
  "key19": "2kHDJu9C48d4po2eQXtT6rcJ3gpuVSHFzecdB69sA1k9Jf88dR7BK3zo1ohYVvHJjMiZgLQdGVWUWT2Gg2vqbayo",
  "key20": "bxLGZ2H9wJmtHhHdhfwycrGEXn4mFwSVe9GHr7Phzu3mNijW1jLWAZ9qUuR4Nrd2TDbDC4wDnmJjrCL8d9sNjbf",
  "key21": "5Z198rxZdN8H8nZ5hXMTdsHBUBV6Mtp5ZRdAVkSrmW2SzJ3gZdxBaF7PDy8iTjv8QzW6HnJDVgip8rAgTihYLMfN",
  "key22": "5zocMqg4zP5F1o7hY8dX1aMRpv6zAQmPbsDdCptwAYCx1YbeyPp9J8gdcQiQwuettKeNpbjY8YSLx5ETMsHzVHMm",
  "key23": "2j5b3fYbPULcrNeskP6N42gCk2oFw1uBPhuWEs7bRqRdpwT18Vp1TdyJDqXUjjxrkHENwmN9EVogfdpuS8GhJYaz",
  "key24": "52GZ6EZNuvr4kK19DSceBjp86grWH1RYiw4gBRKs6rqBex7mCKNjLCa8itFMf1SjfBBYfFJZKBY6FYC9TxR3FNKK",
  "key25": "2nT34TqztQwhdJbbFQAumXu7DNjfCwRnD5omEwAfRzrMxym9YMXmSkvRBaLDEiYxc22W9FGZervcQt9djuPCtUic",
  "key26": "5DrCLQBAXPx3qUGAFrJJhBDdyCz8KXNBZ2WSwCrT9hj9RJuu41Xohqi2K7cdYFJTQb1peMRop1nxSQuRCajLfaFJ",
  "key27": "4mgq5H9t8C7foKfDRjzPCsxqxgR8ZJTAYdV9RyBnvjEjpdSgZ6qC1y2TnGFALumaS7EVdFadSeZLKdgKRJqYa1ZY"
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
