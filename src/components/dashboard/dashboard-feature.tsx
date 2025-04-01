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
    "3LC7RpsX9R7u4x7zBcouoAzz52ckwYnMgyFK3sMhnZdJAuJJC85pnhPrywNgmAXWfLGVSpMafz9vHevumKyMXdYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4tVBrUxfvWHuUbgaHWJjqdNLtK9g7BT7vzZisSHECrkxUFfZFTDmChVMXN8vLMqTAVPM9Mxh7iGuj4FzCyvrAz",
  "key1": "3ecrMaUdfQZpMzppya9DfQ6GexY8ynKRSBjP3UuXRKDnmVzhPFBjuwnuWxiPMvMdV3tii3x4nhvM7nGJiGgSFW9W",
  "key2": "C2cjbn9mgZdhtmwm1a2XNHYTJzwzoDK8haf7PpM6bZXoHRt1hJnPcSChTGGZrtuC5hXMk2uEBpC2ihsNaJUhyP4",
  "key3": "3irLCwecuLKRAqPUtU7rvGTe1rBGrfsbgDfhzDtmXG96hNxxaWdg2YcJdY34kXCXWKZEAHWPxQrJK6WNgGBTLTs2",
  "key4": "2aACBZdZbidA5QxMA8UFkWk6gNbfizfqEDmPnoCZiZ3qoMhoGK5p9rA9fLDcwxwwCtbEXgrZnfLXpayiHuy5v8rc",
  "key5": "44Z5zXFrQATY9sJhwthYiNJ7chqnZE3XJovr1GV6FNN9GBcuxtVB83ygjgCTZBiuhq7b7do5KtnDGYychvWxwxvr",
  "key6": "4TrYehWdWZD22TFBRchNx5j5K6J7NhWXh6jjReVEQudNLaeK7sci8kZTTDYjbhnXC1Lmx5AppztcE3aQGYykDEkm",
  "key7": "VnzbAT4WAnwWHz86bN6pjWU8ySNEpfBZvHTGtY8zv6o55dHmA854Bnu2MGUbnYPjdVFWUT1Ga73eoKfdk5UZg7A",
  "key8": "29GYmQXRZ1eBzpgRYgMn4Kdnd8coKjaXFd7GotiEEtMhCKokaUZivePT1CozTsPngcKWGsrKn3DC1Mq8swTPxpzH",
  "key9": "2AysT1ad4wRkFDoMJ1mq5owBncyY7oJo3P1GVQWRqPuaNGS1nS2aMLikiwjFKYvXWb3d2mj2PrkogqPCEhnszvPY",
  "key10": "GRjD9CQ5zSzG9W2z4cjT3qXnigCCwbgL7NmBhu97qqzH7VGwaKyc3wTbpjxJaF2YfPCEYmmZdKe5Ly8agYq8hDT",
  "key11": "2v3673YYVtGmMUNGRukVFtNd8FcrN8ufFeD8e3Mdgm4AZaCVQdPaYADx5NnFpwu9swRPkSZdq8wt5b6ufrZruHQR",
  "key12": "2hxA6ZY5tKMRNU8bwHNhZMc8V9xhViWJWDFB5HjdVkT5xKZP7tenbkpbCPzpisvMNuwEFkcAcizdpDbcGrGKtBMy",
  "key13": "QJaAceC5G3Pxpf7ytx9KMkEiew2wnewk1dzf5LrUoxPUMfWHbqYbncERDgjXfMPn5nz4iqTqHyGzEqSc2TEUD4L",
  "key14": "2v5mVceYTRi2U2p8XLXiZmLFD9VbGjqLQBxnq4gYGKLHa2osXKw9K1wXR9uLeSLKQLgJ6Uzh1WyZoPc59RR52f1o",
  "key15": "62jxo1C6cpGfkr8UZied5b5mypmfviSKGtsD78ckEF4SWLnPJrPAQgJfmv7wmnmQrFJNxDuV1U8ekA9j1s1ix6ZZ",
  "key16": "4M6DQQXVosQkndnkxyU95psVddgS2gXBuDgDQD75iSxRaaebnsWjdvgSAsF5QheL7XwDf1kxkyfiDA4LJiSv4VJA",
  "key17": "R6wMEqMyz6k3nV9pUVBsnb8f3NkLKS5h8RBNFivY2S822ZmST2g9tYgr3yNpxP6c8ywV7cqAwfPN3mhcBqhhAbu",
  "key18": "5CoHXhBE4ysU6yaCEtQtn1v6XM7sjpgAE63Qj7LZ1qT1x4JsjgNZG6PZTWryXqCCwRehKKNKrJwgBvf18cixp3A3",
  "key19": "ojRw6q9QfesWaQX7GM1nijY2xnmoMd15vxBPWb9GMfCVpk4KsgxTVVpf2ZgmMo3kCNjjuBrtRfiemH9iRQ7qU28",
  "key20": "3xSSk1dWh6J6GkXFgZHy5zBHVCmF8BVwtsgJt3mmS9cdfnJKkV35mq7BP9TLCwUCgNE9ufYE1guqzb1JrnzZFdNV",
  "key21": "4JNUCE7fwdV1c6CuTSpSdrkrPJbj5vi2ed7UumGSuAbPm2sQdXuSsn8vhWkxmQiTKtq9jxFuHvvKA2NjhtCw9JfB",
  "key22": "41N6egDoVyTfY6ntUM7YHSqX1i8aA42Bd2qq5ugEUmq2DykqJtVEB4MuskNZLmgMRyHDuUzc5pfek5JZHqh13dms",
  "key23": "3gujRuJio4Ee6qUbcWLyWb8E3HCXgW82TmijVBuSheLcZ3Ju6k56t4ZwpEwhZhsQ9rRwaEpyN9W3GRpekAX6pBuP",
  "key24": "6iCbt2jyDHMnMgYKoNCVdCexi4xNkn29MugA3raArfFEACvbB2aHvddLWQU9ut2yZGsCuPLkUM2sCXqK7sA1oim",
  "key25": "DyYhjYjWv6HyD3zSb87JrzkB2ChdwQPhHsg7Cc566gWM3q9YWHDZNarvprqMQi7rfz9vPBJcWSW7f2K2247n2SV",
  "key26": "31nnHEgZw2M8Z7M9M27ukss6nJvprULdn2gY1uV2hKrHEJuyd72j3egRHomRPar8dCHXfiJnLb2ZmyyvdXXByxAr",
  "key27": "5p1PiDYxGotHk75ui5ejnt5dQmyEh6Fe8sYfnKCohQHmwtnhshBF16LXnMhq6QbrFm7Wp3XZwsaGcZYV85A7CysT"
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
