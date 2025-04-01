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
    "2tzqGKuiYbDBMUuHqyPm1XkPoATqjyp6sEAERw9Z6kUN9WGuTQjRRUmxDprsL3fM6h9pMZj9sgejofo8MFwo7W9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qu4Qi28Dfsm4AXjWvKc9Gnmya5R17fh7vMxEQwQNQDcu1BSGRRvE6jUvPVE8UZhP2rcpL6uGJ7zUCf7hGJW7UWZ",
  "key1": "61f6bPZzf2RjmuzBHB5KG9PM1Ls6Ds52e6TxnECULJw7k9Gq7tn3uK14rqtH3okw5FTPy9rdiNcTg867wNcjEavv",
  "key2": "wkXwTpSk5AeNqAwHp4or53Lzcp1chUvebF8Aq6Sei3Lge2uB2FWGKwjCeRcMxhxxuMdvwSoHe9wHxyNgZcv3XmN",
  "key3": "KX3dk2agdkdU1N9PfcA4AehYk36iaDpQdANH82BV2aFNTrpqQKSLGQ7EMU5hmJ3aYoBoF7XDWaEvjWW261nveBJ",
  "key4": "3bGbqhsPQWJfEMv8N6Wm1bUJSLpzHK8KTNLBc45nVCQjawsvZAD74Fam1Y7Xz2o1rfzNDoxGvThQdDkGEZg8X1V8",
  "key5": "4URL9Yp8czwqF6LBq6iVEYQoqKRagcmLrAtVtvK67UjV3hUnpnC2mnrL2XwHkgs8tGJnnzHb99anWoqQh1kzm6sR",
  "key6": "2uBYL6SSJJMrSFJpEcwC5pR7HgZcDyRCF7rJqcEsbFXav1sYgyvZ3bc5VTfUT8jG9DFFpyxwRa8FiMavMZPnmuSK",
  "key7": "4wPthKG1yeE4gtPsqkTzbpxQGD4kM56rkvFQpz2J3r8tqX4stNXgudoaG6vwhdMy2Ps62uzcUT9HKnuR7GNuaFBa",
  "key8": "ggPBbmMNAzn7k3nwMtxzfs1wrpfxiSYp62jcbSyJU1GfksejhwFdKQz9Nx9WzgkeBQmdw5iiLZzWGAoZJQjQQXP",
  "key9": "4vKk3Uoj33Yqj6RmGXhgkubN6NmJ3v7YUuA36TV9TXvBKTsjsXQ4tDuHKxuGFujmoNq2ri9pX7KKYcrgKjEmXvNp",
  "key10": "5n5dLjCkPJPAo2C81WpNQvLF9WYVDXD4KfiodEq38AxTPasAMpiomrNam8yUYNX6UyUA37omd1uySoBM8G8JoK6M",
  "key11": "617U1W1PsmmxKHEdBd5fS3SKqxWQK7gURYFN6ctg2nqc4x1NPNuy6HQvAzgst2SJW81ZiEYLQc4Jde8Yroq1Df1U",
  "key12": "5J7R3NWr171v8xqEkewjyAwrJJKzqQC6uWyiHVdyZtF58maa6xTqQrmawAq2Lzrhg6N886shHTnr6ab6cvznPHTB",
  "key13": "22hcCvNx6cnSJjQ7wdxg3e7cY2wTk3ACVTShVfTDCZSkve3KqMrMou1wnKgi89qU9LfEfYv53CKzwyUPpx8DG4ej",
  "key14": "3KjAjSJkidumZUx8RnsjwXidr7r1LEHUmPiHm4rbkUtUdedpHdSuDvbztKH5ZCTzkLzBYrdvys89vXn3QRn2dNbW",
  "key15": "4DbPm4PjH8yqHvKR9zRhBxPX1joAyntNQ8XfBd9B6a4SZLtWSZPmR4xLU5DWPgruKojYP3LmwCc3q5x3iNbcTxKu",
  "key16": "28rn6rw5rKUamTzCLsswNGCvoBPwrrCWY338ZxdDXSyxRjq6xxu4RVX75bcnupasLXpicYYAqmyjkHFD85RaUrem",
  "key17": "2yn51Ah2xTs4tooDeo4iHKa4NzToyys1Bfk45TRjJkoqALhY8E3bJVs9JwedxmkKMvbGZDKpm8T4QgG5iNqLHR5",
  "key18": "TsJbHCaGELP5byLD9C4oMHz5z4iN4BkKWxs3xL9UKhWNshfyuYahuTbitdEwueFFndjKwF4UBvcfZDFMdqcrjnx",
  "key19": "3npjgDWswqcQfc6Z1QbxaYHrFpDM1xtwqZ1Ax1xNW7Yxs4ch3qVYjvRMbtCNdTaQQ8ygLxBrU6eYgm3jYzw8yX73",
  "key20": "4x3uJrhNXwAJKSwEqC97RQu5vzirVZ2zQpMj2q46Vwy8154rVL9478TLAaAB2nbkG2qYhcBz528RxZJBhhQEsimw",
  "key21": "5TRECnncPjE2Hq1td9rVA6fKVdDK1CH58HXVdqExew6VrvV3ht4SeQqWns1pfLck3TU45roX2KWoKo1DKkpxiKNC",
  "key22": "4apjUKJozHmbry5uK2413PtupBe1mSDZZ5jUDL8aHWXTTAGDhHZdCAhHhTELrfggVEybX6LovytRTZfptChUSmxm",
  "key23": "61dMHSbBGiRrMnaF87LduMJi4PVKZwZkESugUBdAPG5T9HcfXrh3LNz63ZPmhaiBayhHNDskpgeYgJfTphhwt1qB",
  "key24": "5Q3kiA3xFVdzQYqH67uLFKiz4zLWdCF25jmNphZxvAv5SLj3aLpX2r2QnMxzPAaqjSkS6Fpagv74vYKPePKK4iad",
  "key25": "5zKHg4LCfcaVdzpm6PDKKDsnurjXZSLPw3Aen8yZMqsGqbYLYctZ1K71skNB3EQAHf2DsGUJGXkZiGsBkhndA4EX",
  "key26": "5HNcg6mj3pHiKVfURdL925o648pojBds5iwusKsizkyxdE1kHCesYJ8PLt1rwDXscD8jhqSy7QYHU1T7uYdXaMq9",
  "key27": "5hDVtPtQXQ2fETefiSHSg7QywNyBSEFixbtxXGurmcDEkjucGNqod4o6cxn8QZMiZgFT1wcDJe8ZJcE5of1WCXM8",
  "key28": "EdBedtugXPTbaBnF2eTycXATHU4zckH7QwH95iF2y3TfjFT7sgXTUk8bX7KBuozXroanWExVJtBWYmsTg7k4V7P",
  "key29": "viaqfd2uiR65YmoS1iQkpQCZNuqD5AGo5v9WNHK9QnGnxfD2fP4Ct1oT3ubLH6LBTLYq4GeaMTu3Ujnoby1hiat",
  "key30": "9pyMbgh2GtUW3emtPyLnzwPP6uRUvrynmCdZVyMoZRR6LwiuHAv3rzsBoBJtZjTrZRyJZrMwP5gzR3FeLWRTVXe",
  "key31": "3ni8Hzq78zthgavTMWo13NBkcjFZfaWVUfxSEmyMixCuva1v5CPQsgUbZLYaT7YE74GMw3pYdCN7tN1a7nx3gE3G",
  "key32": "2Vbasv2aDgzeprQQB4weFBZcAWHpmwfcDz2LKmB3HSbcHaDU8b6tZZRpsut3Ea3mpQqTx5T9tsH33ENJ5N1VTQNb",
  "key33": "23bSdy2TeJmr2vQ5n6qoSGU689EW2sFybzi4ACWP4AGRk6QaVYndgc9w15z7TeJPMCqFx12c7e4wBGoViwcJKSRk",
  "key34": "2s6ACCi6Rjk8tXJ3Ao6ajz6CA4wTbyjtxhsX9UyEhtTZC2qifGgRfhZaZETx7X8Dwjc2C9DSiXwrvuaw4Hc82ZNy",
  "key35": "5LAPaZmS6rMqNoTKSuMD8QpJrVaJxsWY1rpVmxfoeyUFfkQzRTBLXZCNySRe3ZX1TS3QgXegpo9SSPSQ6onPYv9b",
  "key36": "2ncfeL7UfhfMn5tPqYVcTNRH3QpAWJJ4HnrzWRKDBfpJMU7HVhJA3FM5XvWA7gi2vYqLtkSt8bfaRxg4tYJLphLs",
  "key37": "3tYTqtMAgajAnT4zKGnwNwh97e896fsaWTsSWpUQe15r4vTNPXLtmekAGtCGxR3ZiwEvScEd9uPBK6uXQbc2tjSK",
  "key38": "39sVS4UKrZdCAhhmKc7seZkgFVWWG7JyMQL5ZG6Gt4fjMNRXVCTP1LKLyb1tqtGL5bwbYwNQgSf9S5mMEkec73UW"
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
