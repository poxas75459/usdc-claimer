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
    "3tMXzD4sn2guZYE8FjrpxuFVQ8Hra4kspSf3MudNoqpgQpanGPKrAhCCe4Ra8DQ2fRFNtbQtSQagwZPXLjr295N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3Ea6Ld3bSR6K2BGAAJbn9eprzb9y9n8VFnUwMhgSYXPemeKrD488xQufbzE4XE4JjBNwydBEpNnZaZhy1nGvqz",
  "key1": "4w9ixNFteamNCGoq1fH8iPTuY6NNwf1U3K8WdMmUkq85K2MRMkp9o1A1jqE7KBYnmrY7o9o9GGxF8i2diYgrCd4c",
  "key2": "aeaMhDpBfkjwxe78Fk6JBrRmhqneXrKNruVwAJGC8JTxb4bu5GQyskXn3THjihXLfdTveruVh4RMXkwR6npksp4",
  "key3": "233fTph8aVFtXQ2AhNwn6Kcsv4npBtXyGa1PX3LABzVPQtyoSnVj9hX5a9LeLWcMpZGjLEYUTDspjkLB1F5NLxEQ",
  "key4": "2LbEiRymaN8N5GYc9RQSFEUUa1QVkMrALpaaM7RHyTHshtw6dkhD4ouGtX8vGdYc3KkuSnfStjtxAg1uPrwZyeh1",
  "key5": "5kHywtBCymRETpvVpV7ChrTHHxbpuUb5WZjnrMRiAGWD9iB4SB1343YNjJDGQg8kwYvxfxTHtZWysuzKowPez9pU",
  "key6": "28cRwW17PuUHeMLEmKViFdUrjMNqEdkTvv7g8o9TyYJYWzdZTh882AJseVPav1MNkMUWNZvbZtYVpWdzGkfUZJVJ",
  "key7": "285Xo3ZwgMa5SmtKpV69PoLCFBsTZbQfF9MMhNk6Cx33rMQhfek7VLsgsKyfWnMPGywqdEY2Bts4d3VVAGZpQ6tC",
  "key8": "M3eHahiftsw6RA8bATddZ979TJ1fKrjmNw83QNQq1h97C5vdrPHnyMZHqcuwYesVKY6hJ6Sr5uZXg4Eg8BtGv5g",
  "key9": "2Fp8iKJKxZMMvhzPwVk1qNySEb8ewjVM5ovDLysvsA5w3K2VGBddxenhYMusN8LQ3TVWia9B7XctQJyRjWsPAmao",
  "key10": "3xhbpiHNtUZiEAVBDfUgYyq9ivzfk4PPxYdRVfFumeKn9Z5XvDpCBPb3BtAVrsTaJhyZhh6qbPWsUhrAWPQr3MbQ",
  "key11": "3nKMAWq1dRC1eaCoJhwGfW73aFNoUHpvp98rEJwSKv1nq72FM4wvnbiqeCGftD5Y4W7eKP5uvykNpZQA83iN8dnX",
  "key12": "3AHxfgvo5yfHA3ifFMGS6VAKdcpkrmZeZKFHc4mLArwaNRqUeuxDMASJ7Z2caAMCoNCNR6Ljwd8zmCLye4jxnqwE",
  "key13": "3N2LhbaK5VbZEudYoMktKjysdfjeRoaYLKTeRrr9c47pSCZZozDSfMF9wKd6trdCbwRnLkXQrZjxkuHJDHxB2xj2",
  "key14": "2GVm8KFSGugPLZci9m6CYcNMVcj7NJeBE25Zrk1rKLDXyyot7ksUho3AUjy8ZGyuaDYNnkuvA7NzYrMazcaC5PmL",
  "key15": "oXw8SCN18eYLQoXhK9LfdEAhWowQQhRBUGR14asu4unKCs7YngPvMMbhrLK6ecuTuVv8K7af2jFeHurLNG1gAnN",
  "key16": "25ZSQS3MvPz5rgfdexuNRigo68esHAjDUBX9RMansgqUV81rVH7QjxZNNSdVQAjFYR91hzPbGeemNhQV4PthR2JH",
  "key17": "4iBhj93FtVWHarxh18cpWkNEZrhZeL1FSXjaEpVCCA6YCJCFgtp9GJVsrYnsG4pwftYnZ9S6UHavEmEXDzo8EJ3N",
  "key18": "3gwshyzTpQxVdJBqeExj5SjEkmdUE4jLXZ2aARgxVMn8bmj85ZaQ7bCof2b2JRZt6V8XHGcVrCztZLm7N3TjNeoc",
  "key19": "5pgsiTriXr8WqXdnNawhm6QREQpmN8c2UJw3E8zkQvTsSZUw2vSNejsRz4599pxvexXV3i4j4GNpULd72894TkZk",
  "key20": "38BY5Fcq3nfpFbzFS5g3VQuisorPSDCAR4PndgiWNaEcjrGtcM7Mh1oPjdsySgN8Sp7jSsdkzk5yEYepNQSMYLGR",
  "key21": "59RRehmNfYwtCbbSkPPo5xfQMQs4hQaiJEGaDYnmiwmwKQXuZYMjTkYMNXEWsf1Ey7ewXw5TMAsNewWbK5cShNKS",
  "key22": "2EoiYgGaPXtBxsuSJf5rEXD3U9f2uBaKBqMY4FaTiNamnBH8Ec43JqGQZCDUWEEdsdARBX9948QY8q6tS2ALQC3S",
  "key23": "5hjT43TkKPEytF1gJ5j7Sgqb7o8VHr8HTaeffRRJ7nYUCJhdkjgk9X3rFz3kU9rrpBz7cuoqp94sZQrSumuu625B",
  "key24": "v7htpCawemRTDBxcVFPY1ExTdKXZAh1wtoTfmsX4CEipMLAKsEQEYxLM62xcHu4UB5fywLGf3GGtQ5Qf9LMud18",
  "key25": "3GNXvbthKyg4MLumKTmYRJNMKjT11DAMNBDtXsYw8p9CcnFecpswLq83GULifiu7hdupS1dm6gHuhP6NTpUSndmU",
  "key26": "57NC1TznVLs9aerqbRgnEn1ras2ZhWUQpLMo8XAnbrEP9RMQBTvnrgJ9P9ZYGGHWEVqrfTjD78PbHTSpBcAfcPfH",
  "key27": "64xmWCo8F1pXTZoF55y4F74xrr4ZP1NhJRm3QSxVQ45st2vE6HPy4LjpzcgamPvsGf66kuwtEvvUc6C8JMgnaiEq",
  "key28": "3rVJpVJCUEGaeeaChrdTSRJF8rZQzjo9U75ZYrPsw1ELNCB6DdHJFmN8YVcGqkePsiwmPiLgk262rTrgy2Ssn28J",
  "key29": "5vjQYgCpQFbskrqgEeunGPWjuYixg7wBnXCsKCEbjpzZDEUXJHCfTDMTg7ieoHaSY3QeSZuj8qotddUJa6bVy9jJ",
  "key30": "3xaUq3Ppedbf8ctsZ384uzA2cN7YHsR5pKHXFfQMrvvfZ19e4wwLcjUe9P5VUuFXoeam3EKtru7Wja56phfc8YDz",
  "key31": "4QrHvz6ZndQ37BZ2y1j27iQ78ApL5NHr7ruBMr7AV4P2Sbjhufkq2Net5w79V5NRTMLWs6oNrvdtfzP1y5FKucuM",
  "key32": "4yt5udEdqWcReUJ4dc7pkikq8MbaiaRiEVJJwAUD6YWtuvUuVsFSV9ZF6X9LbZKUSweS5p81dqNWovH1dBwRJ7TC",
  "key33": "6s9afGAhuDAXS6Sukrdq3vYeGS4uFkoSTPJhfAkFTMd41NJCTPfZPp8jLCq28PgTznPrDpZzrcjZR45Hx5pP11z",
  "key34": "5R2TTZDqXkuDgCua3agEqpjJoQZ48DRgRN6Jo14GD9HrBgMsscTFCquYCTjsTkhMFYPpzh7eM96in18CiqdBPgUD",
  "key35": "25PC9isNXwSz3K2fJRmXyjNGBLDaNdBkoJVHMuWnLa8MeYiYhyhfi8kNP4YScLHNJemrnVxuA7qRHNWHp3yeNQvx",
  "key36": "5AJJe6iK73m4DgfFA6mQWjpNK3L4LL3qbb9tdmt4oLgtfVj4jJH35UYHjpSnWA4ya14Q9TAAxHH1dy39FTdZYJ1S"
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
