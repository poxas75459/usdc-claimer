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
    "ZLvNPYueCuFvf4x3iCsmuFbgHHU2481fA3HMgdaTsHybjcd2LWPB7uGMC6vteSupwmNfZf2XByCJyT7T8pnJzgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9JBeyPJMWC6FkkN9Mip2rLN36vTZr6w5fpLvAKbhvFZU3Wcw6WoTD2VRdkf1hJeW4BGoxHzTrvshpjEFHqFetU",
  "key1": "j8Xz34cgDKTnasLCgFAporpjKazAHmkHzitZctW8quo9erZFY9VbZpTK41iqBBfBVs6FugZSP1AV6kdd9M1DDcT",
  "key2": "5zM6WcJ8ac4ypqcPNfaWWyvrSV1u8jgyMseXxBSud7N9277SQRUZep6BVFdfJw2frsdyS1YbXWR45kt9S4vss4D6",
  "key3": "5BYvqWF2m7RhhbhMyvmzMgU9jS834q7muiGJGLZx2m47MnrG5Li3RqnU3sGdX4GLU5XYKz49EyS2br492zbFxdLJ",
  "key4": "3ASj696JKsedn381yPRnvHw9BcuxASo7WVK7R5YSb8nLYvkLKXbZQ4wceFSUocKyaneCooTGYtsHBExVnDgpscPn",
  "key5": "4im2fzji1AV7VfHndWBT1VXj9TJJBjrHg5DencyjP2fiLCtuNEoFgeuX7Qon4PgKzRLK6DL4F8Yc2SD3bRHVGrxZ",
  "key6": "2TLt8oFojpmQk8QX5iyn2vDvcTiGkwt6EuQ6CoJESXQSD85r4i1DPhF3kckmsRV9J8nqnEsw6uMRoE3HJZhFWkCw",
  "key7": "3Ao7QZV2hJWJGRo1fmUojovsCxsnzgjsxjL5rs6e9p8d9imxxmYuQWcBZaLALmP7mUbmFdnjzHKxq8uF9Wo8DoJA",
  "key8": "4dLBhozZKkdKDERA6QTs9HovLPQrfyQUHy4TWkEM6gje1igBrxBsC4tfHAWyfm2a8JoYmHjfVrGKzm5HmKJP9jb1",
  "key9": "2LTnn3VjhLTiFCMCaEUk8VrDjTZcpYpcugYJHBzixs7QAaRJiK8HFHEtQRdq3vS2AfhqAqQrmGx2n4vL8RQ4Mepn",
  "key10": "5MDaFwNpRYiGXyYpkGvN6Se3jQqg6WysBGXNTvkDP3uQbr3qidNZbsJWYRGHdKf3EsUZhw5iP7L7FHRJseqVi1a",
  "key11": "3WcwVLu9MPurgrMjpr6cSgHXiAMjyH8qXsfXSmGDhzHEqfbw1xkpJ4BN4dgTj8woQCHxnhpT7Ekj1sTaEx5LLk3p",
  "key12": "5Zh2BBo9B7GA8ocwDGP5Uh8NRSN5EPJ6B8rRbdJ7F5Mz55XB1Ti64sRjW27LoNfb5zUGMeDs4EZq8JhTKGA6rs8z",
  "key13": "4ZUiJBbjH7FFFVtB9hfQ7De88QHQhug5VQjoGLLtHsbPoueCopeisKYA9WVn45BiQjiAtYWfKNtaNwFV4g4gwya7",
  "key14": "3xaV5YRrwbKgA9YUfjSMza1UmouW4S228L8bouevGNxjA6SRiJuVLD3cB9yFbS8K7GTGNrDQjxsmdixwz1xUghKR",
  "key15": "31oex2k32vjvHW1NkCYYh3Ar1gw8aAbTH3hJZvXu9UpNTvLmeFuuB6tuNqTu1CWUxXL2csdSJXHZEd8UuzaEadHt",
  "key16": "pUJpbPTY9NkZw5J5YRvpLK48qjkVoUwY2tGAb7KP8z3mPVsgnTfk94Y9apQ6Te3bhhZKPVNVg4rRzzP8fdjZiU8",
  "key17": "uHYknvuW6a5ULmTJFfAEF6f15SrxBnFrxp84FZAUVKNceCQob7BUoxTiGAnGH9v4ukKDm9ZacQBiJUhco9EFW81",
  "key18": "4n5Cvk2q4mawhhdLiDf5rLo1tBGU6ULpRTyLmR94ChanWGFpRLhybo6bCKuK8txtQSsCFP41aVX4ffrcS8vS4Cx6",
  "key19": "3JfwGEwnx58VPPP3NAMEL5FooBXRqsM71WDSGu23t3MjtWBfAdSED2HuxUvfGk8vjRHcjxmi9tGktLVP3ky8w5ka",
  "key20": "2LTP83JQk1SfA2FFAzfhTWxFtYfxKcCxopsYGfvKXW9UMbTg4aqa98k7PoGDrrRsfbRnjXXorkQ4GbMBeFnFEbVQ",
  "key21": "5Xt15LDkQpdPMABo7dViVLSN97kvsnXpDidEH77rQ2ZSuCgoBxFh58CeJmXwLEbCMhGnfuTeb99kjfEr36M3oEFe",
  "key22": "24UkgxXJSrbggdiixGRRXDrr2YNLWmqm7FiJiqyZUijE4Vo59kyKfdV4YUMo2wLPNHS6o761UsYDdrZWx9FHPkAY",
  "key23": "4z3RobjbknWM7jPyAYTRmy8VpM1tPH6LmEas39awxEMF5gkXykzQjjKjPtFybN25YLM4EVksJbJTUqPKUJe19T9p",
  "key24": "reHRmTPbKsPfbe256TC7L3H8mpHXzB5wS473o8Bnn1mqn6ogpcuzAKsjAbx8skCcd2FoFwzVM9MJaqNq8TzDHLQ",
  "key25": "eGpQ7Rexfof3a45RpbvXM4XJkvrE82pcY3vG7WvuG9PrZHEHhpDW7GPDKKQc7vNnSC8hRuHEUpjg4udZtErSCAM",
  "key26": "Z5gRLASPztXDzQcKXyzXMQYed5qX8aMXZEBriFpBdQRudMvfwEgT5GG9kjJYvnMRUZqeCxbKkPgmFLNbc2ChJnT",
  "key27": "2eovXs4YiazYkgwvq7oU21Hyqzxv2K9ntNqip54K3wBHs7txF2uihYcGAuBaTXeAPwAkir85xSK4k25ovVQNSYmt",
  "key28": "riVU1hyeMKcpok4eAL8RCHRb9bTa7h85SFdNsaLK8VEBKkrCKvauA3zLfqUBPp1Jw1wV1RerhWdZvEYBhAc1A7a",
  "key29": "57zyYLVwXaWr5qEAyyMkZF7S7xpeW8tkf9KR2zQEGnKzGHUAz12ftAPj63ZJfvgejMG1tbc5xKcMcrwZf8xpVJNz",
  "key30": "67WsAgx3ecK9nx1HPopdbP2sq9scbSc61ua3yneAHPNm6q2gPUpW1HFYShBhe2oYd1VYHcVJYkE984YRP3i5foDn",
  "key31": "3wtyq7s1vfa9q6fbcuznZ3jWv687eGXi8vhP4eDNb7ygjuBZottLT8XkjuFfqNZnmtTG7DxejRGxFBmbGzqiZZUM",
  "key32": "vUXFznBpyzwS6ktt6umhobRXxwHwyNU18HRuYMscEAaS3StW1mZguTqm2ye8zw8B6EzGrebEjULaP4cdjqtyafg",
  "key33": "2SWq6z5TbhABfAZuRY9awPZ3jr6f18EpaDu2h6nyUxD7UztmskZsHB9G5jSBx1KVsx5TBduQmm3aYPEqSjMDZ3wZ",
  "key34": "56e9dFD7xDJz5DxPAgNDg9pa7NVqZFKuPgS73JaJZEK429xCZJNxJsWw2KrKZNtTNBF7DgyuhdtAzwstfmDd3zMs"
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
