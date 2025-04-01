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
    "2UZrtBrDG9fQ6BGrk3fCDu5Cx26cj3dr23Fpx5LJQtRrXeCh5B2MFYgtkQDA5gMPLZfn2zLpba7kdT6vLQew4uNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eH5ZN8ejKtebyrKNjytUP3q7MHLYwC5FbaHkc8GFGcTA1qVayDYWheftmV4sbniUBACLnxU8hgD4gG2u3QSkEy3",
  "key1": "kTDS6DP712DEqMM7nerXVoi94rKLc99sKYdGKwDJerdYW5EUYqbpwwVJxR1BWfByB187tThKDm44znLvTojN8hu",
  "key2": "5P5oEPCDiTSp6jnf4co3LX4UyMLKNKymd1yiSNctZGdS3BX2KbQ7KgDzn2MWdy1y62y8MhnLQQQkn3cmQzBQdUQ7",
  "key3": "4zboKepWxW4fGv7C31TpkoJAt63WG3dxpFTqQmkra4BoPNwTNXKAQAM2M6zQwwQRzBJeSjzvaHhXNLCppYB3PJsG",
  "key4": "gnoS84y5HujFX34bXL7YUEUUxbShEEtNHEuyamnAXRH6xeDcrawhz6j6RUysNeMdXxJeHXgSvaFvsKMVHnYPBn5",
  "key5": "642ma6HEYSZWFqBf7K1hr4rCPTHkQ7U3D4yFbenigrsgyhLCKWR25ajSbkPdHFpL61aPwec5ZFyg9NZLdPmpByfx",
  "key6": "3ePMTiwVM1fYUzGxeqyHAYz49TRHvZR2SpnQhjiGRY9n7kqEjTfTBZyzpjZbzogr8EeAsqKpnaKzwzBxHUQXBnrg",
  "key7": "2GkFg6k41Mb3WLEX2vq6GAnJy6NWX6SQcQEVAptaamSjUzPD4Uwbd7JdNPZk88s5s6nK6ekpqtcUhpytpvLK363B",
  "key8": "mWvq4Vp6Aw4ZQhogAXsmKVDR4cT6QetDXP2Xo3TvLDc8UdHXNyEMRfKLFxxYHsnawox1zREkKLjnDJEb4yeh4vr",
  "key9": "eDiCYfnfxF4UByttVDwCf3GYAf4MabprMg1AuURFKsC6d2XZueLwjSYEC6R9BQ93KQ4HKni3nEZyLZjfJSD8We7",
  "key10": "3pLvzD3guG6ecET347rLKbhpitXNPvuFTgfYx3oyt9WESkDkJS9L5fY9hQyGomoCXYrUTf724LgkZDom5LxXtYHf",
  "key11": "2gTu6SUYRNcgfwuPmnMEeL87sciEyinJdJZQUGa5ajD687kxPSSpXsBa44WZjyU3gLu6PzCrLJUQAodAEB1g4MEy",
  "key12": "4JPyZx3MUm2EuttxxWtYe4KQvd5C2k21n9HPxJgmgkNgmFDqF5U49d1eLQ6KkYUD9gYQdUqMZiJpNfNSvgiygnir",
  "key13": "3jfp5ZcZs7hQ5JTqWbpH3MAdYFRkkMdp2NzCkng52BLew5HVjNEc2WYtc3azTJqXd2wSmn89xtgESGjSJCi97dUM",
  "key14": "3VRoNrjN4GfJTuGjm6ZK4QKsjMqaXyHbR2Qh5B5Aje6ZPzMBacUdbt6pJ2WnqsUNz8pqy922M5463L8F6ZX27ybF",
  "key15": "2fDGjzyJZco6WgEiweUgGaQp7ff4T9FfFkVvMV7RcRTw8FofrzmZKeN3txKHCLzQKQ4Zj2jxmQ9CJRFP3T1ihDnM",
  "key16": "3oBPphWaGhTRwmFqf7yibiGro9dtRZfKZvanYnFJGavXr7mkNuYr9nnV3V7XnzeW1RkfwuQ2wnz2KnkYj46GpuKk",
  "key17": "3eLmqymxPwJ4D3hbZd6tocPKk4svipHFk6ZgGjUTNiSbad38YM9EyVi5cpsCBhMjDELJkAiu8ZvtpAUYdK9Erzjd",
  "key18": "4XcUMgcrhRnmvSS3kycndp7oGEift457fuoiUL2ka374LTBTvAfnZ1tCDnhvMSN4A3wHoFXE6rie1z2xt9vsYiYw",
  "key19": "2bjb67dkDMxtsYDNwWBhoJDBa6wAtnUCoLXAXKy9YWfu8UfykV19aMxjCtED12HMjfq5umBwQFuWuVhxdP3yaX8W",
  "key20": "wFTJ6iaJFdUvrapZQ33cUUU6evVybU2beoiNMCFci7nda6UrqYtCk1m3rYSH877LA13vnvkvkVhSZqgAz6PeVYU",
  "key21": "2qjntAdBsxq3uQgEARJue8HK7pNNnKrGPQ4KZuvedfFUqrXKpo6dQHstvb4ZhCqd3Zbhj9BRPQQmXSuXH4tqAiEw",
  "key22": "xSKpCsVwXVntg4K1nGfaUAwwRkNcMweVNT9RWXepwgWk1vGMAiqS12jeKrGNpnniAuwKMMBqD7C6nr7efQLTXzR",
  "key23": "4x5JjGKDEQ4VMUHZrKUkt37vixN4Z5MJvzYRhPAi1wrsbjGsgQ3Ljm3B8p8i5YzbBj9V8ksqrSJLB2L4HMRp2E3X",
  "key24": "AA9BfU6HWQhFs8s377CjriQL5YfNAEWdrevfm5zK8JWuhNG5wB4MvezhUAmVYjUok63J5Shpf2WwQke3YtpRCJZ",
  "key25": "24RWXdchApkyVdAiXHYrsUgXEgsP9JsbMCHsMFUbL48kjtyo2NhGk69ivE8GBwoJoEhxxYyQwzEkRqHN69EktSJy",
  "key26": "3L9cNLJBiU16Et45pnnRgpXsj2LmVsTKqxq78w7R7h8e7QdTDHagrEy1xyBtsH6ZYFwCUWkvB62Q44YFyCVsMs7o",
  "key27": "4o6zbZsEz6vDit9e7bPTZDhr5cc97FiGCVnXsE9oCK49FXdgqmiNmKUJSGB8T4o2dwb5jZZumF6sKgSrkmqpqKGg",
  "key28": "YqamGPpYLP6R9WejEmKzMSekHfHfYA1ziWyUaEk9GPyx8hEQijj4oDVNKPiP46Uw953diURPPxwivUEcqSWLpuB",
  "key29": "5WgEHpwzV9VCNN5tAuXk8FJ79AGJZ7KfD7XXdrj6EThcCguc4Ej1QE7nAjM2VDvVtqntLyADhJrjPdhBjKTuX57E",
  "key30": "4r8GRTtuAkTqcCgJRpZ6myhXhzqDuYEcykRcyPt7pJtHaAAcfdngSyZoi8S1aXRM8HLFytdbB3H7cBGNErWj3zJo",
  "key31": "2bfxTzyVbAKbixsfgZnQWVwgH4Hos4iXo9egj5huRW2tv6Ude9RcwwYYnMBMtPv1UXQWjhC73AJJ1ZcaVsrQfB6L",
  "key32": "4AyZgzPat3DeqTKRh4bxW38YgMT89D1VqaEymz5NcNFPkjGV396pByyXkMV757hru76d7dgSr5Y3sheKCCUvT3Ra",
  "key33": "5MtQ8nzU8of1P26FMYptrndFnzzSo96EB9XvXRPR5T9U8ytuVy71CzXjHGy7N8JfraWiaFtmiMB4kQW2wp5LogCR",
  "key34": "3FjNyyYAdbfzwyU3zVTrh9pGRH96tUAyoHVLQLBx791KEp6Uxf26zMQ4GS1dWgdqrdgg6epwmEkLJ67a9gn9QvLG",
  "key35": "61hNdtVNhH4pB2bQi8LQJRpbgwrrbG5vjBgnQtWBzebs8Bgc21fsaiEcjUXRi9EGTvTBG4tseQhMxTjjv9qs51V1"
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
