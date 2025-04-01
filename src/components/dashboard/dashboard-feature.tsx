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
    "eeHcicnAj2S5tAXiMAQNHEmLu43TDvFGhfo5oeqh74BxUmFemzyeZp8nogbtAdskRQQeFgYkzwFNAoqkmDRUyVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCa9SB7fo9hTDH3NZdJkjartRLALWcG9L4oCeoiwi85E5LfhAQ6AKFtxvmyFe8GrK4F3BjLPTddpyPXX4dXhKhC",
  "key1": "49ptSpJcbueGH6ETsuJh4DzqHNw77SjNoshvNkGeULutKvYvizPuBsofep1iagoRHyBafaxMrFewGEySKMwrHUNf",
  "key2": "2WwZTdCvAxPABDW1ToyTNwP9S1rM6qWqJRErAPaouxYCQZom1nHBTzbFH15JZXPdvGPHEAbhx8mkNSELQiPWkLo",
  "key3": "2eGW8CP9cKqzLcxBcwPfubnJd8Rqrq35svymMG3tVqeEfENhLphvRyGXtn9vGAYrpYrdEFjU3HB9NNKGqJ1WQ81p",
  "key4": "4FeqX85SsKqmxMxDcBH5zP3ecjohVQwuJ3Yn18P8w7dJDBuXcFyRwAMJ9TFekgTgkQHBkbcbko5fTsFGwS9kPquz",
  "key5": "3iVyiLqzdJFfaEFPyTNLqrPzvVJscPVrfJecbfcEXb37CzccATcN8TX6Sg5qDaLoNCoMgJTyfnZnTNJu7nq9xK4s",
  "key6": "udNv6D47YUk2kV9AmzBbujXvtngYRFkn4KyZUBjaf5xQZBadVvmb1WXVu6BUsExs9fpnWp45Yjo8UHeZeb2A1RU",
  "key7": "1BEBEXGHh1CXyre2BwkZTKGqHBQqy442mnRk92up8EMXKEUGpcXS3g1RzUHVXox9L3975SRfAX9gqXSJSYv2yiV",
  "key8": "5Z6JQVFQv5cS8dyk2S6dgW3obgUibawijBbpiP1owKvwTXjQgNFMMw7tMRXCqUbyqdZgUz3Ebz3vPmFZM8r4zRRy",
  "key9": "3yZo8JXsy5uqVGS6QzohuFpujcqUgeQ5NGvVrYwZKZmbnDijUwRM5bUxjQDGVx292xTXWvuFqejGpCQBDMnt8Gdw",
  "key10": "2BDiwJSq97BRxJebcUNyuFGVyTUYDMBG9KPhLxxR5xZ8HRiSt8kuAJYo6xRFREEbkG43P8dKbaZy6tqB7NgUeZMV",
  "key11": "2Jia9ziWTQHoWBaDe4hRbqbCCJqM4ZnZ3qaiPjVcyhGkjLdEuM4PM6jKPcnVNk8wCW2RT2NpBFaNgiKy7uQLbJmd",
  "key12": "2M57XAyEi9hCmy2vSUxVKnHcoGStFHUdvfbEwYt9JVKFgybQMkZP9pmSecXx2FbKrCVMBaBdL4Bb6dXBZhuqnQ2t",
  "key13": "2eYEnzX2wZHjVxKMLbfjjB2Cha1D76RLDwfcw61rvEXjgA5U3ud4VMbs4qUrDhweLvoRGfSMM2KpofDxrzWGxXFB",
  "key14": "2priR4GzBFsK8wgPW7DuaaQ7rJiNT7Duej1ajBR7sCnXh2oJNkRZQgTfEV2jsyBCFbj88Hp5SMa1Qj4NMjv9sWH4",
  "key15": "33dTYotZicescTNG2XbbkrRsU1UY87UGW8pqt88wQ863VvCTTmnXjNdYvRpWQi8ZpNsqANkKrWPXDJ14e6JLc72c",
  "key16": "5Eub6kVjVP8pnqwqfF4DEYot44DVniS3EivwHDHGFxVyXciPcnqtYzYMtQ25g6diiGhUgAPm2zynAJTv23LieeJo",
  "key17": "SKpjUbBG29ufKGLk75sC1a2eaN5e6DhXweHXppi1FvuriJteC8yGaXgxbyswbbTur2JbP9nzgLEWxf359G9GbRH",
  "key18": "47rctsK9XfrSABGVLFXPvCjskHnvG4RXorzBmjNU1fMwk9mRX5hfmJnSkGci5rnuBY3obsaz7CZK3osFRpcbBadh",
  "key19": "2YCutrBoY5oMtZdm1xwM7qyDfp79YPcvF5RJDbr9WHFDqHayp2L7VvAJhA4g1d7HptUFXoL1y8tr97JUQKkbYM3z",
  "key20": "2mo2vfsfaHiTa2r7VeL8WNrevcBJdppbpn5txBAAv6h363j9CzPc1SdebNZsdBkYdrBbu4Cjfh29GsY4RHvtpWTV",
  "key21": "5VBixHuU3FVXEwPcZZA9waFkmdxiVj6DX5kXDccA6LKUVfdQom4pKhQmGvomYDGor7HqLBGaAHtz1JD4VreTBf4h",
  "key22": "5P5tVrWJoCk4CU5bTKwS1wWVbXnmL2YgcGC43Hdtdps112KauoKQ2n5Tm6fXjFvyjNQXNC8e2aJDaoa8SzXs7rbq",
  "key23": "AWW9wg8fwcsaaUdtQKJjkxANLBPoNgPNxHBkXA1JqSNMnWryNB5N5h1nFRMWuhNTtYvFLWHv6viyP1pnM9sjJnh",
  "key24": "6YqTz59p572nANmRYH3CxLHACnqavDEon1a9FZX5EiQp1aRJafstA3JU4oQtBuZEQoyKgxkJVind1jbMA4veG7z",
  "key25": "5FCZpmEy5VbNDSoT3tGiFL6mAbZvUXTuFmEXgJWb75C9c9mLwJqkxNYzDVsc2H87SAm6tTDqejCKmh3rvVoPw87i",
  "key26": "2YpkzrLR5D6xBWJFRVJvDchUiFRqnk2Fxot3UBcREtNBeFLeabr4AbkWsEaYpML9Eari9wn5CWVtJjcCr9r9ACAv",
  "key27": "2PNjcsMUiydF7WyfAU8osnqAY9r9vEHMQK9Z6VXLwdwUaWmMyRgq34rZbx2r32xeQBPK7ifVMJfHxdkZ83c496fd",
  "key28": "3E81xo1NVBPTswsmR5wjzKMo5zoQL6GSTjCtjcfAnfRpZpkKzpRBeXZy5btbmon2Rq2vZ87BeHQ1XfPN6oLJqRPG",
  "key29": "4qyRxXuBDpVRKVJswg3BZrDkdwSzvQ7hSa4ehjz45TGtZhHVuotBw6mvHcSB1MLnMHMh4sQ1gdP1bZu8Y2jJnJsA",
  "key30": "5o7rzjkwF3DVdAr4WHPG9e9vEDDJHPAmkJkojv1xv3a1yQPjmfP9QrSyFNaVCB3BSWrUkxPMzKYc6AaN5qpEc7eC",
  "key31": "3bKHcQnfCZfYN3Xx2Nwmw9avhWBPHMWvLs65rK5UhgBpYvbNMid5ZbawFNjFjAh6pG9XZj8iWkNZu4p5zaAae3MR",
  "key32": "5xPAtRRKeik88TpCNLPoU2bLS6K57y1ebFq32hTz1XuQiDZRmUJMmtNJMv8TBADeVPv5h6oPTyraieu3Uh1CKi8S",
  "key33": "4eTmdo5kCq8thunasdKDVdyuWxhKnM9zFgdA8KQRSCZ7sRKezFm16n13S7JDE2yn1hdrEDeSR3F4MnzKQU4YsxdQ",
  "key34": "5DDtjFQHSSiGePFdCriyuongA8LwyNCMF8T2h2GCcdTmAAhQzG4vzZrqeJAHhPtCSwF5zHVYoNk9G16jinrHLxau",
  "key35": "4rMyRcTiSGti5bgGF42ihKTNxGwEcVt2By8cVAgxJSA6bMhR76BmRjUR4bcq9t7uf52tURfrN4RAHYcRUFgd4hFd",
  "key36": "D7iCptLc2wq4bxaDeZEj86Tsx6DycWkgAYu4W4C64tnfxPcLXJ1aq3wofDfXfcjgp3hk4JBXUWZE8dN8YP2Nyia",
  "key37": "5fACDDrh7p6p9ccj2EhWwmG7XjrfP9PkFNwSeRPkvMBrKaXxHpH74s4GaDyvkvgkjTuFnro5TKPEFaS3ZAcZwigY",
  "key38": "3TPE3S6sa3EQHYKyYHc2s6pWDxiV2jUs5JPik5ZTyCQPJnxVRjk5Bu17YwFmGYdNY3chQc3XzVLyThw1mAe45tKw",
  "key39": "54JHbJC3t6fQVTmJ2ZLqGe8nu5w8FMxtBaCvx7j9Jp8DHDU5S78V4T6R6J5tK4wR6PRBYFsg6TMPdd1N4UdaqfJ8",
  "key40": "5M1qGsBLwBCGKjbS2opahW4HEcKcFZhBbFYy2NWGbaPQ2YNvaR9VcVhWfZHNNxYX7r6QQhSwk3PBzxSyUU3qQ4b8",
  "key41": "1YrJtiJn8Z9zYS8iwAa7gCVMjPo8LUsY1gqjfSkKE7aVCgEFjWLGFzoJ5CduhLA1oiwSUNqQ6z2JvcrZSo32KpH",
  "key42": "5sip76m3HetAvkSXW5F1w43cpM7H9ScyiiERrC879tnDJoM9T2G2D3fBgX6B2iMfKhHwo7AD6kef6p5U51DL9WYR",
  "key43": "33g5uiaxh5Chr39ojfRjpvvmj3sQ6TxYZ9mWVrsKDizMHa3xhPPXKKfgSQsrPkwN2utyJ1AEDSV1gjmUsBLuLTgt"
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
