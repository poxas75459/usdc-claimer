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
    "3USuW54cv92dyL2JSQTm6YZiZNqvsn2aMz51shkDridSFck82GrVkSfbhpatv9iR9v2is3dWwwajonCD7rN4mCX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KymwfPN6vYqxWCnGXkJPKna34GCSv6FLcHUHepTriKjKFWnaVCX4VTVYGGVSpeSfyPho9S3JdmUDw4ZKuEnoPki",
  "key1": "5s6UeupzF2KtGnkYYfpeKNf5jXvWLqUMGBHCEPvqmFV14fHcTSfGsLvVUKQaZoVApqEVPZyBusmMd7gJC6cHoNAb",
  "key2": "3LLfTstoHKJ6ujGza1mBM3ivLqmiriwdLJMfc9kbjDBAK5nNTYZ8wUTtV2qnvTMLxXi8pbzFEe1zBekZAoSWHsUN",
  "key3": "5uibnuYgAMhcA5VJDyvfMafmUWtM1163jnsGmULiPNhDvmZvLNdUTR6nQPBTY4CBN6p5QoC6k5gBeYuqM4jP5QwL",
  "key4": "43pLeLUyPVDUUBVVxcuC2z61ov2b1UbtDhBFTQ7x3LLJd2CoEi5xbvibjqAjdJcLWF3vWiHLqZNugsDSLPd6XMxa",
  "key5": "4KteGaUVg1eHDVTmyBQhbSm9TkrGrX33EpVm2uS7w82ZqL4zEctuaDjtLmnjY1EMVY2pt8umrGo6iLsL1wKryyoo",
  "key6": "2cmkn57PsqavqJkQEAirtEZJ2V1jnMSFerjbUYnKE69TF8tdHwZjctsMbD8dStKAXYJogdHDgmznn3Zt97Tf5Gs2",
  "key7": "48Rc4crqRe4yXYAM1PFoycAc72txWNAuqDWT8WAV2m1ynxWah7P3uphouL8pKYS6JxnNLnHSyEknn5vwKDDAVLkx",
  "key8": "mVShVv1TmXmKhArNEVMxNDwYJbosmnGxSdM4B2CAHa2Du9Bkda9UrZoyekPoqmMkjxZHs14SRyQMsffF7K6KxBF",
  "key9": "5seRB4QZhcwUvpnhA2G5hsigGi1xaVJmHzyfD3B32Tz43eZhFt6FNnaA328rqhykTMXqRaj93esU6YHVcdgtk5EL",
  "key10": "2gRJr8NUwe7JHu6Kp5kq2MmAUmRvtVmeGf8VKjtxTeTwYfyWyaa6k6Ucn1Dqe43cri2fLay8b1nq9wtRdjXsC7Xu",
  "key11": "3YVRi4gmAsfbXtUWdaowvEv2b5HX31yJiN2cDYXRJmQ2mDhkxPWwDicjT673HXsehTxkmRVpw4nDpedvSrZwyJkG",
  "key12": "KX4TP5HXNjwmLsR1YUHBXiuzgwnwKQFZVrJKHtVwK4UXgDhNBxTtTPraRL2YuRXa7FvqDAmGMvucWX1Dyvu8Bvc",
  "key13": "3QvDQqiWzxumsw6YWuQVsKZJxn4QWHtRigQgeGv3KuD2jhcva7t8HTccRfzci7HTgSVoYkK8XY5zJStXqresZ639",
  "key14": "4yiSKi8pLJ6YVaZWtpt3aDygTwYFVFPt2CiUxbPSZnFgTzLfJypBfLv1e75hQPsMFBGSPP4oLmobaTSwuzJQiXpt",
  "key15": "GaLWSj3hFNhg6grV7giXRBgEGAr6imaaHs1oTgr4B6speQJ5UbmjnxwM2Hy1dfLXfCWK9wwY1cPQE8Hk5dQBare",
  "key16": "532k3HeTiLUtchPn6vv2TVGHQMKiwgvV1fBdwLgGU1FV3EV1ffiJ9ndM8VWqatwUtWQET6sGKc7ZyH6cPGMz9qLU",
  "key17": "65yf73Xgkb4BNk7GiKGMSH9s1zA1tYRcFKvxEfJvYTiK9V7HLrVpnawvg4cs6exzTsDFCwVFvtA8WnKxUGFGPPJ6",
  "key18": "5qywkastXjHMhZCzY8DBZeSdzqyBJejQN4RAfmFc8621yUBRj4gWgMsERo9PULNC7GBvXBoTQWrLfKtM5nsx1CuH",
  "key19": "5P1G4NovBSDB49CHyytZdLrDGLqpgzqndHWRRf3SBBhdpTeyj5PeZq9W9gzoi8WvMkau5vaDZyXUF1pdVhDuApB3",
  "key20": "57oB4o7BYjYAWPYS6s6TYvWc52rmmAbFyyNHQvqM6fwoJHu4LgTBTJNrD29HtMArN5txvCx9PJYLknaLr956q6o7",
  "key21": "Cw7xa1wAaiTVgQymD6hVBZR7dteoGvAZoKytYEiTotZTzKCLPjN4e2NoY6HTijUci7DNyY4B7KMQfEWjapYTEwE",
  "key22": "3FxLsiVNNWfjD11wDV9kUrL8HX5ysaat1BYcRTu3iXK4gLiZrCs6ENjzDX3Y3E641gbTagdtYphEcFaDwpgybTwF",
  "key23": "2YVxkj3jj7g6QVqiS3WjUYTEgcJa1SRgFmR8m8hem3uXvg8LcZ7H6DFgVW5DUQqCTftsmv62LUarW671dnBij3Tj",
  "key24": "57yuyv3EvRUEstGVbrU6A8qToX9yhKTTB81t1qmxo4bC4RBWgkvkPojyiaUHFpF2AANfoNrHdbrhfsk876emMrAa",
  "key25": "4wHm1diZ5rHXM4TMTLW3TqwskHNJc5pDbrhzQrzqbgxz8nN4CYYcn1JvAHZGfh6gDQLyufAdQ4Zp1tYXt6EKAx1N",
  "key26": "shAiw4eezgHtQujkQAZmyQb3T14Awpn5jyxgbBG8xbDZn4Qfe53YV9UMF4vTowykwwyKCuE5Td5j4Lj8x87DX3a",
  "key27": "3498woBPZy5dNjuTwjRMrm6Rgu2ef4MPb2uMxqEn7tYsWKSgKJa5UZAhQaa1vFfqDHVu3YsHNMKMzCDAXsYEdzAC",
  "key28": "3gdEZv4o5CKy2BPCo3EKzxmxLeTJ1i8ZwzzN1GwshUxn9sfPVchx6fNyjyfbeRsnyBZvZtSh9k7TB7pXpx7WWGNt",
  "key29": "4Atc3H3pM7KvKghDvvscR6Ye4wkwiPj17WJYTAGLjk8AAYm3WJRjeNuNBrzmuTpgMAdgYTYmeHjqMPqtoDXhZECQ",
  "key30": "5wnaURapqqAGpzRcZrd2K4CCdByuwG2cyZ57KyPQxsbZeSXFz1pjwLRqrj6g9o3sBSZr8o9SpPZiYfakXp689Msi",
  "key31": "4UoG1csdX3TWkc5TfVY6kF7R8L9BNh3QGtSbYA8mnFBbXbyWZQVSC4SS8UCx5dhmEwVc3S4UW94HLPMuwkggAysK",
  "key32": "4JMrnFoAdjP9NDReDCAbjY6PiwYzbzjwTPTAnJiXLGub8aMJfaP9biQW8MMmzBWvy9pjtW63ptmtMvsyvJBwQNQu",
  "key33": "2vGCim6uSm6HjLB8Sjp8gDvYb7PEGsxKus2cZkBuExj6JxadGwbE3ZyRSkKjEqs14tu5ksK9uYHKs2fc7E2vGn1",
  "key34": "2aLQ4hQc1PCczsstUNzVyeTpufvGFaLypGxdqeAmFG23juTYpuHchEvZG19TZS4XkPJTGP8N7RHZuLjawA565yTs"
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
