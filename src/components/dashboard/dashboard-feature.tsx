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
    "Kizit8PB6AhQocYfvisuMBLwiYHVJGCefgzDLojMGwKWDJt4zwkvpFxb2jdv2sXkDiKR6gddTLS5id6P4RrF7hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJuYcBvbunmwKnAkxBoeCKcQKSwhk3VLVoaYJgjrD2S1ZjPYDTFhFN42v23xEHTUZk84Ydzkkkj6YocsvhT4YEG",
  "key1": "46EFqP7Dr1rib1kGuofBb4qozbgvq5uHKPaAG9p8nadJxee7b5apn8hnYRGCYxxHREnytGpLJY5xhxsdJK4ECzvS",
  "key2": "3onK7ty1A8JxDrf6x5394S9bCaP65M1mNPmo3p9exVuLmnAqVV1d1SVwBvUdpMTPczLVW5iPHTxNYiNNFPM8p9FV",
  "key3": "D8QfDtMH27A3PWkR61NbsBBfw2wqCVSik2dAtpZuddz1ydM1wS7dHYhLtkE9EqsW8qGjj36PQMgb9HB67k4JXvZ",
  "key4": "2n7Zj5T3pzf688F7EYyFqRzG5vB8MXH4frXgWSiM71jK3ruLQNEpGRW3q1FbtnZvfbx6wXWTJqg42rfPjuRjFY9B",
  "key5": "4noTcPmhSBXaZowEz9LmEdrrYBCzkVwPp2kQbyJzuH2D5kMdUmMJ6UoXRJDpkuLB51cco4rVhBZcTpoSBVmxaien",
  "key6": "2c5ycpBzCTCT7EggRQfkGSKhHzHDJ5XjddTrhudEdvSRccWobtKjNxQ7LCyFtMJ3sRiGxpnyk66akdgdEToVSirz",
  "key7": "3VjAsTCJr7XJXmeKkPog2zvQorFR8nuXUPqVt7ZyWpRA6aEPswXKMW6hLhmxoWJYWc3wLirWc5zJY2zrVSrCdTvn",
  "key8": "Nuz3PFKxPjo8BQ9GEu4febAngSM5FhSEfsZZuK5rMPzBs9i7pxhFKiakbcaDLgMXpckkib5hbiDHzfe7MrH1skc",
  "key9": "56XFh3FdJA4aQ24eeAMzpJrzxiFWcnGC9o8CkokGqS67gwJVAZZoaAm9yktTWxLwVKJk1Lgbxu2c272fDweXGz6s",
  "key10": "3T6NAUce2Z9ap5s4cWjZFYBdeurzekvpJa7wNBmJdhM4Q93sQUxQiC1Du3foKVZLYauSsMaAca5KL5yper4TCmBe",
  "key11": "2SjZkK7969GEeuPqQCiget1C24vUG3PnJLG2P3SLXYsGURfq7urs1PfbHyAL2ftSTXXEsTcg3reqsKi31obnDvaX",
  "key12": "2mXUSvrrX9v1hnvnfNUhVdC3PVxpX12qX5ebtFcV8bjDUvn9saH3weZFiandGHa7D5WHHSSW4nhnQRaH74dFoU6Q",
  "key13": "2RE5eowFwSFYASG1ZhgAFV1TZ9ad2tE54KQPT3c7JGfuhqFCGkJ3KBZfUipddsGqwy8Eny9AussqQcJPLEEuNsd9",
  "key14": "48emyJHGD9DbBwm47Z4S5wT7Y4uCVGSDxtWUcouQxBAusdy4D7y8FH3JebwknngJhgmHoj58W4ujtpyBKMTwim99",
  "key15": "bdMxG3q5beRxZXnPzy6SPKvfwCJ8tDKM8Dp8techKzUodBhpkhwnr4qVGZUCT9wkhXvcG2uwwnvJqnMUstGa2W2",
  "key16": "3GKT62nx5QZqgBR7yXoEzoRFHcTpPPvogyY3wQY3zT9xyipxayhsRZ5fNRuXRNivFb13E17MK64npVc3GHRjdDbE",
  "key17": "3zBpoUUMuMH6K7YKJ2KpVNSpXexS3GkmbTrMWpLYZZHHdMbBu5gBgthNro1jTrDwNsHgR4dUqPvNyzHvb2ahSUcd",
  "key18": "4s52kHyKKqHz6o3C114yRyxUQcDk77fwe7eqmihjet1dRbRMmoej92574C3rWUS6smm4wfi7yN9PG8b6SRxRde1C",
  "key19": "5bbgZKhCfjaUcSD72f8zMxrZv48AiWXDEt8k9Fo142zbqCVk962nz3jwf4Yiq3WQLyvUMWV6uBmwg5SNvAkGzNQe",
  "key20": "4pJq6QYyxGJnL2ZRvGgJHG51f7eNP21cGvswLLVhqTZtYqMp8W7MobekqhzoLbLgZvswJRrshup1uQsLMeD47H9z",
  "key21": "59MjzqyTQ3ZwbdrnWWcx1bjtWYWVqBkZow9zEJcoKM3kqJjn8f5umLjW8KRqWyC1CUaZ7Ldria62Rfbc5os8q8H6",
  "key22": "2evBRoBNuWRsXi5TXHurdYeUv4qyYhf5dBsCGb7EQhH7xSpCaE1RsTt45Rz9tLESs4YieRwvwQG8weMRod68qukB",
  "key23": "4xthUFLYYURHwy5sJ3YB9rJNh7DYMmZJ3A9YPiyBejeJwKV7Nerw454Ro4SP4xuNpybvZZdFV7m2q8uYFhJKBXAn",
  "key24": "6756cQ8hxubQirgFHwuAzUhFij2sCQ1y47WLktuGqgWDDm8U7xbFLpmEmPSmpEmfSGejJHoGrRPxuKsKS7UD4D17",
  "key25": "3hqppFxKxZB1RJxRNZ6Pk8osvr5PRQtTEQekRkfaz3N61uRPdWhGk1gys7UZ6dtqgY3WDKVKAJGiMjChgqKUMXK5",
  "key26": "64THT3darPnUdna6MkuFUeXtZXKdQ5C6CkwmPyLShwuPmCPYugRnLiQXkwPMT1UkXrrMKt95mGN5PqSNnV1YkSfL",
  "key27": "3sapw3hKv2G5oW4cUANi8vRwurcBWtjJdLkarsn1KPRcPyHdF1v46RTrcSHC2tdni9w5CW8DPHzG3jTijkjtwWC3",
  "key28": "5Fk2S7kY3r29VtCh2dc7cMKLLoD2MVpfw5S6An7tQr1eP3q7qdMrv8VN5unCCJphjnxd5j2UwRzDz2EqkPpTmcPM",
  "key29": "2nPBgdLYwF485bc1WietNGyP83UVaBY1LzVJsC6nh4Uq8LTRdT8WbB1DitoShdN4XEbbCod3uSnFuTtMDU23DnZn",
  "key30": "4Xn2hvoK4WunSwZ7QydQBKnuafr6hjjWNCJCF4A9bHPLeYRt5dDB6A759nD7uYscjKHTC9LSFKty9Jqn8Uj3THR8",
  "key31": "3AUb2mJAT4jVYwAARNKjAVtGFDHza7aVPiuYNq1Ve4gSdKHRnXF7JAQGYEFunHnGkK4KuqyG6x94HRxaiZLvdqDq",
  "key32": "26dRECCBSL363auqGCiT3wtjTHYCxHGrMMwvB8JJ6FaKZA85TRMUM6hS2RcfAW5tzNoiJyaBbLLydWN8sFLPYs7X",
  "key33": "uKetYo7dQvsdqdF1CQK58tF38NvbrvteCtW1sbLTfGy5BpHz4jDUYaoLwDgUWgL2XLouRAUQ4wFvqFXaMAwzAXg",
  "key34": "4xVNZXtSd7KLdgLpmoXbupSZeiCmjkUGuBbdjci8DMhjfSZ8yif1FAocNVfiJMCy8pLjHMvFHCHxW3nNEiFXpKto",
  "key35": "532oX8uBbzZdXmp9Y8h6GM8Kpki9KX6GuBjoKG3PeNZdos7nVdM1sxiq1FsqGMZVrMPxU5mX9wNVyXaEbS9D9nXo",
  "key36": "65cBMkgWPJX5TNPe2aVPbLaAWpiDz9vMNBmkYmShjMEZnN7sJ2jSe5hnQCBrJn6o4GKwCtCGNyphYdZHaRoA8D4i",
  "key37": "5Zq4UhJuPz4wY1W38Z7y9Zo3JaKfEcwzSpxeAeZyQWg6nhaLL7L78hvD7b9HCAMh7L6Z4KBdq4eRZTWbmDNhogBw",
  "key38": "fzht7tavBSVqKBd65iZWVKgPAnwpictFD97bphUDXDNQQ4yyHbZanmZcetZETEgut2f4S6GSscKngahTmwnGykF",
  "key39": "KsfvmSP1x6uqVFpc171QKmHEsQBKzFLhZriaGxZunogMZAdz3JWBTUMqnen8TdaM9UcHsZEuoLBwPQWaGiFTraP",
  "key40": "4t7mkozxYSBLefXC4wY8AhvyApKzc4snwyLzV9XzC8QmXzxDreS8Y1u41RySaG38u5qfPTukgrAKrLPNbZDVquK3",
  "key41": "28RYTJmGbML1BvFMVQoX48mWeh4MUtpuTiqZcDsjdWSUkP73Y81VohLEWC4GTcCKX3QaqVR8guHro4use1PnbUwj",
  "key42": "LyCZUAQUJB9RfzwrhtrGTEUtusmmJzfkonMsHfdQJNDArpwW19zFZUTNmuxDASdmx17kqYqvpN2QkqXioPzQW85",
  "key43": "3NvmSeZbADghicn9NNj6usk4mWjcpMb7D7kUEVqdQaRWVrLjDwrrhBx5TKMEpfDp5BRdisy5rZFv3h2nQnqc26Rm",
  "key44": "34XpdvjosS3pojoM2mbwStoewXCE1y8yVrc3ZR6Mr7jDidtzYHuF8EGcnqu4saPRhJhBmztXEbhV3RzYSowNg6Uj",
  "key45": "5Pp1sep8TA5k1iAbeMFbEtF4tcTXXEpWVRoper1yw42b83vwr1udkfoXk7L5BqN74eeKYhuM67y2yWz7iyardQ7S",
  "key46": "Rdy7vpC4tSjiFXivdm1DPb7XpAXf6iSNgqDXgHxLhTHaKzMCafVFnFkQUFTb97jXpipKNCrYuoUypqV6fe3o4ug",
  "key47": "wfUDtkMjdZUPk9S8bf2ZtQD42Yn3JBZ63Gta6KQ5js8UWGSNPp6kGBvLhZLpYgngvg9m85tkZUSGxtfWwn74EBG",
  "key48": "4WWoPxtB5ey25QDFq342NkwJVxxGP4JPNdyoACSJ8XcXbiZ8zYNKMTEH24ct2S2kqmqZooG9eobaNaMUqaRGvuh5",
  "key49": "4ecR8kx3k1KWqhizx2AxzxvQJkkmtAZtuQ1gNFBMbyNC5Xt5SRH1s31jfmYPCDjuUVmMnorVSdprwv1ww1boJSaG"
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
