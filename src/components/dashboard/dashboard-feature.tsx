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
    "2CbqajSNqFZmkMHLmQGH8wWqpUYWsyJyC33YF5LEHubxG3aJydTbX9GARgSYmxTajwTL13FpTT4iPtZ2TPHjUs5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfZ6yA6iW5SDL4FriW7ASGgfVm4zPWLuqZMHyShkdxwTe7BdxMx2uXAiM9ax1Ruvpxg8bMgq6rK7826Pq6shDvV",
  "key1": "61G8mKeEXM8vB5qmFZftHvMhA8mYbb9Pjd7req4rKvrtGouqJcfZyRCsE99zCHXsrLaCrGyoYXCXKk1Yt4PZjZEg",
  "key2": "icNr5m8vhjz7wAB9Z4aSDJeZ3YqBWFBKAEkw87kiL3XW5rDLifpgAhJPLX5KqFyCMa9NyuM3oQ2Zdq1XKShNTbu",
  "key3": "4XLMxJNcvdMDgDJgASREPLo6g69bWjwb9sLVHVMtHwi3thGksKEurVsq4SUZE1H9Eap93kbdBw417ncSpyFQxJgK",
  "key4": "2XJ4eVnJUxkBNvuqdiWc29yk27TTivS8JB7Q2eJNhX3ju69gLVXbA9eTs7jU52M6Ft4wdfrACAsdekh5qWeq4pEp",
  "key5": "6YZ8YPvMAkrnjQxWVV8NAqWzMJvKEa1n4pMpzePQ1eEeegcH8rgfmarPN39fe5pxKRQpXjQ6N5aHoYiTKCP2jUb",
  "key6": "vEFY84rs2NQc5B4MZmojYy3Tpc95HBkAX5aZGgqLztvMaGxe1kAGn1TKtaHMGFxDux2Uef4DfaTYFaknQPnqY44",
  "key7": "67Bb8Qay9ry8WBPhy3H2NpwbeGpcvT4d22LruUSSkR9z8Zx26AnirRUgsbMe3Ti8eVbMuoJncCNUBUPV5FLDWzFF",
  "key8": "4sCnW7KAdeULHfPcknf8D9MkUEFE3w57VkvACB163SZLVqxXKtzYnfdcr2s11MH5azY5xtmzhtyHpX4YyUmdUjS1",
  "key9": "36Z3i2AtmhkjJ93b8Pqxja79dZYzhM716HHcYFUFKuiVaJHiNRZBMTYPoRbfRPp5k8Kyfebo9WpKBVtEsHeMZzo3",
  "key10": "CeYhhydD7VZYG3yXCKzWt88Yni9RhbDRD9nZcnXgszZ89EGqbk2cZSYrvjbZC17UG3thcpARyjLRfhPhPn7M7ER",
  "key11": "21mCt4tZsxx1MCW94NR3A8Fyo5tAeQjnXy57kh6AGQ9ZSg4XgwLLkUFMqXLMTX6u4Tb7bkWnMXCXQ9p6sFKFFsEq",
  "key12": "5XEb5KbquKLsGdhfD8qt9GKWpJjfnX4uX6Rh6Yght55osDwnjqju5XqCR9D27X5dT2aL2V71tPnhcLdSVE4wcujy",
  "key13": "4M9EgEoS4je5RwZmwHAvbeRqdkvz25qS4Ym7LnTV4vQLCsQ6mCBJfzeNV4BYTBPLx3pd7FoeF14vY2phuAq3Y71D",
  "key14": "5trzaxp3pEzEUQUyUiMxK1ebcYe9nFdxGXxbD1RtxTbY1cvQBkN6bkfA6bUZgps9P2YuibqhFf8ahTMfyrszhLKj",
  "key15": "2WmsvzVqAtS8c3H3i16QYQMVyw4QieFuzkC2yGumXnPvM3UB4MomTVuScH2HFuTaLGAe2R5cCJNSKrS316oBqg46",
  "key16": "3zBF4Cu83EQK3z2rR26Lfp8Muryzh7MkAyCmnKvpX67o35Q5jQpk2avBY89MJge8DjVYvRtmcLqo2Gukzn4TUvHq",
  "key17": "DwdLPyySDuMs497ohQ4xGC61GZjyeqVcB56aTeyeNsi6yFDXpniqHHCuJxsqC5cKKSmXUqhRA7bNN6VrygdDxsj",
  "key18": "49nrAB77JBnPqv41EczKhEyGTMPNQaHLaY628pwHZBaLKuo7mxoUPcbYndei4F6RFyLYvLzhCB9oVC6R1TqmEuAT",
  "key19": "57rTKa6kdUmXCWo1vk4gsfVppBGjYN2ou9n2eLXpt212P9ywpJ1tCmXByg6HDX7qEf9v4epWG9chnP9bCKiSd2nC",
  "key20": "3MQNR5FDk9ZE6BYTGQ77bv6WKhkFHJZxE3sFsv3FwX1Sp8vv1yB9JoZoysq9sJMtvnWJys1Vw7HJuQBjeLd1bDzZ",
  "key21": "2SVkF8GHiv7iLMdUZF1WnidGBsBsqTjaSezRLsPuy6wWNzNMF6SvTEi2ASEhiMSvYMc4NthQVT1ENBvWPzJFd1GX",
  "key22": "4pNUFLvRP6nZeX4kCSQenRcQYpdkKAoay7VHug339gFyHvhPWR8q3e6NKRWWWBj28XxhSb7ixiFSv6WrbWLMjzwS",
  "key23": "cGJGjRM3HGqSamrnNrTtbDeQiDXdbwoFnuAWWJjWVQoK28YzgvAvnGgGRG2QyV7RLQ8xWt6a6mgMWaocwS9GraS",
  "key24": "5e71pzzhMxk4BoDaJA6FxLdp7Lq61q4FT8TSjcpfMadeeo8rG5DVv8zwMVCZspRLu17LtCqAC6nA4GNSFrW6aoba",
  "key25": "42drczX2QrJFKK8gBq6vziPbEeKjwGUp9dkHyKb5WHUHa71JZN57U5T6G1h1eMzJaMLkkeoS9PXhiLe9WCDQWHtf",
  "key26": "54RJPJaBEQt9naBZy1qy8wsXKMJjmRGFgR8CT5CuZTLvYVVk2ciAkcJGz4hgnkRZjWpcn5xsAAjNLzxiqGjnCNkU",
  "key27": "5RmxTdrnVEkuujGSKREX3zjYsTgRXpCueFriqehhFZqAhnR3LEjN1hRDy8Z816VjHovU5AQfRhPq9EUkAZSDyVfC",
  "key28": "44Xp5brG8GnL3wXetXV59UzekjeXrKfDhCnTZ9Fu2XfW1SMVWUBwwomfipk43hTZDfHFdnHug3mP3mFREmjZnixf",
  "key29": "4GLE3xQRZyZbya1oCiFhk4jrsA4892KmcLBWHcKUQcUzCpHfM7cM4givncjg2jw5XetT28VZnAMJWzaFqt8PUnSt",
  "key30": "5wwKvTHmM4LvidihDbp6zduzA9qrE1JCzdSpEGyCgfqYCX1TRJZ8HDRTxrSM4JTVi75437p2GHtGScXv82VjTCyo",
  "key31": "4X4FbBFT4kkP1CGKsLtMu82XgDvFnCHnLSZVaDRB3P86BQoGsAKRRdJUHPSydgrAzYwWyn2heaU2GEga2nAGaCwE",
  "key32": "atz326CjG8vnSqLLbgKX1K6QXy4QeBfL8YEzV3GqjRLgBW5cvBkFb2N6AATrpLDjJBoJyA9gDdgV4nwbqMp8g1R",
  "key33": "66jUkEoEqoAxjR9eXqw8YfhDv47PGZsqbGUhNpCB9JaAhTWX6Q3HEbd11aF7xNcqin9HBTCir8MSp4NkKggKEGHp",
  "key34": "wWpKzikA6ZhZiKYJv1yYcfyEpa2bBppSYxo95rzZnzNqK7cZYfySRj2waZkN3mqaCbpijrA4mgZ69AbXWb6zLnd",
  "key35": "35B3SDJi3yFwZrnDR5VfY61Gy6euCYTC8PWSMRK6vE3PjUNeR6Qv6nGmW9QPzZnKipXhyvniaNoNRa3rEKUZoVZW",
  "key36": "5LjSc8p57hPpVQezeBx17YxHgo6EDZt97xStzbaPmYF85Shrja7QbxXnurwdTyU3uWNPfLsZZTPAxLqif3TqCWkr",
  "key37": "257unDYUFtQBMGhVWf4nSDSejENVaKHyWhVQQvQxGNVn6cZ5B236e1c9NEVojvbFfuff4amUkumFwhBBdj1js3a3",
  "key38": "3JdrLfMoYAW7MeWqQmogsuEm8e4PKoCcgmhQZHvULnbp1qDHwAHFGsfwXYdyax7PtXv3JGRWBZciN73pbCM8mBSS"
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
