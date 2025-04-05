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
    "2U6Gv5DUhRz8ZyuwSxRMrkiPhD9PQE5We596C8akegnMCgAcEEo8kJuv6CDFUaXkhiKTqXPhTJnXEn3jPfFUpcLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPorZHq7N9Me9JLHzv1b3WrhbhE2VgWj3xTpMfEY6ufr8fF7TfonP2BhJ3PiaHjegAHVri617SFzdcfKaw7XwkD",
  "key1": "25gMyAEHKiVEycVPYBQ9tRFDiN7p5L9vLt8JLNtKMt74zHox3vL1GdUeUuJDoZJvb1Ax3cBeU5QGeGZz8JFq3PMY",
  "key2": "2DcLCZMaYweg4MMW9oZGHGPhTkpMw8eQ6CNw4hddcdgtZjSv8dcacyUvxSGLgkVrzu1nny7N4Htcq2QX6HB3Qdu9",
  "key3": "R41rfCopeQ6Av9c8LWkGa58H2viKvWZS5n4t5RMR67YGb153h8v7DbfuaQbVQyiMSnc4NmfCqZjZbH6qXDpSWmv",
  "key4": "2pV9KHve8rxr9AWT9juMuUSfAMVB9Pquf26g1ARyAcW1kSQWC8ep2FXok1C3LCh7gmzC6AxVugGGqv2SzYxesnFy",
  "key5": "WxQdFpYWnZJM21WdEy9Zt67ESa3mnGjux7vMTKjumWRewXyEned75b8u7oYQvfQr3sBruZFPseFCi6muuoBJt8A",
  "key6": "65yBgZT6rTWWSoFE2Mzxp2UkYiM7tMVHrcfJSNPRqUUqKqiXDDQaLcjdpz3BgEdGGyEyHPXWUESB9hTPkbrRSezz",
  "key7": "2trCTGuuM88JfdQTDUHVD3ZdfTTpMTyML875f22f4YFD2DQj5jGBuNaKqiAok9d2ApAsnqXa43YEVWvuhXt6i6E8",
  "key8": "2ECvaWNMCizJbnoxaJ3UNRrRbKPaDBPTmPgaKi3oZRKtwLwWSBWAjYLkQcmZbhHymsG6ot6QCfaDokKGoEto9MAs",
  "key9": "4PP4yw4bnLVBU3qVzu5xTExNEUpmc6yUxeHibcCZaqo4zVyKdecvzX3x4wqN4XnAR6Zyjs5vA75QnxbBHEGYH46i",
  "key10": "3JVV6ZEEWgBKs8o4rzhKtiDKP4rKPfBQVdvjJmRmo3B1vAckxWsQBEFozh51zF3GJCN1BbG4uJbpMWy3uwpur1pw",
  "key11": "3PgtEpQL4L85vTND9pZbZtZoiCSLeoZtr8qhkcCTvh79nxBsj7NnueajcFYAL8BibK2z4qvDvX3ZT8xjYCb1XJPh",
  "key12": "3pd3HMf3C38LjdxFZKZvH59qL8d7HkHAJRdGZcZgvsnweX5PkCfKnrtxFZ6ibqhXLY8wkrc9wM5zoXFCsAzMhmUY",
  "key13": "5xBRVE5NgUBGsofgpN7kWxUozcEXzvokMCT7XVmPM4GHhzK3Qe8A7xbNNGMmhSApxaqr3EB5bfiVkimbTBmDknyd",
  "key14": "5N2HCFjCWQRVVcHdS81ecTndppoDbbtN763hRUeLd3swLNx4cDyAczNzFWWMv9BaA9sLb1cY7n26tfeQTihXViLG",
  "key15": "3dS83JD6DtnezPbXNve1T2j1s7uMHSRSYwVpcNLbrrbD8couF854qQP5QFHeekh4YdbG3nngDbnnQJg6XrvqbKHW",
  "key16": "54s952RoZuuTQXhw1jp88YqYBMBKAMceekeoEw1EmD5RjYcrBAn3G1aYv79oc4fe6EdxPi6Jiyyx6mgdsddib62m",
  "key17": "4ZtXeQdnBvcmWDxX1ctcTLvwurFAmjz7pxuzpuD7zVjNcm3PwoRovjXRPgE6WTTssEas8bD5BrBf9Qn1oNKyRJLd",
  "key18": "3Wo85XwLC8khFaXBKqZCjDv8adZuSeb41nodnjDy4K3Tv2KN6EqLWHmk92gjkmpKcLmsjJzN5yWDSXJ3bWQ1yMKC",
  "key19": "3SkgFJxr4Rh3mLNpPGujFj7oZK2eZTgSGhodbhB4qK3eMXP8HW1iA4PJF8xzfvutJoki6iPus7yVomasEyxUKads",
  "key20": "2znH7EihGfSLmdZUXpE2egYqp7LWFUAnZ3LcSUSVpSpjT4BM2KGfJB8bpBwDDXh9gWCMisTg97hQmpVY5mmSf5Ca",
  "key21": "5s8fy9YeDM9K59fhTt4fS4xgcKtqfAwAMWrBns4r6rdwFedSLDm4HpWV4z1k86Q2fYdbJrXYWgDrn5f9xYKdLVWS",
  "key22": "41pqQP3xupAnF5DLMfaajvDZ8xdueSTALg4g3zsxk7T3zJE7fVhLJfTkZ6va8k1e3MCw16CRW9sDEd3Bk98m1p9s",
  "key23": "2B1YuAEenbypKuXbjWLd8V3BSNUYJdsEpNC4N4EjaqWCNxPz2j3mBjYqWzjvBDXcawVrngpgQ1japzSaZ28VCNJ2",
  "key24": "3Nx1WA7dy3h21wWqL5Mvtacy6Wmpp7LJAwE822CejgtirkQCYm2fS7LqToA7izFn4AyhQV76RJCLYzoZdxH6Yrru",
  "key25": "B1JFaf2dHz6hfZ8jpaja1TBHDyGxdsg135bdXScqnZkhfaZTPJ9kJeZfHoXJdzLwUfqgEj7smH3JLnmk6NJrFt5",
  "key26": "3NNNcqoWpVadP7Nob54ToQeA5D6Q5idGfmjN6U3nTkeBYAap7Sv9FRuLab6DsqKQXqWaQv4eEtDfBvEvPPpxCy1y",
  "key27": "4tfwJ8Tsf7aVFENH5SJxVS5acfp9h1NeF9tesXvvbhoFdEHbNfrTomCiS1BT7eAVMac83Lo4Na89hUFWvRjXWhhh",
  "key28": "5CdEfHmVwuGgb9rSwBN54vyBeJQqiFB6UhiWqdRocVnGo6BBoTKkq7KrmyepaNgajXFpSP1k9NXDa3URmnyddVSq",
  "key29": "51Vvgvkq8MLJfDc95GBBegRrDGYweRDVZtGFU4cMtruzqY3GhJc1wHjF354zTRQKzfwVEGsQYAZrjvwNpYneZ8Vx",
  "key30": "2KrZiJ8PLEr4YAUMqdapKB3UQYZQ8cnervnoszhdWHrNYTniLnQDCjny2odLmTbq4YWZHo7WjKyKuyRtYWNdiwAw",
  "key31": "4ttjY9rXeczaDpRqyJmtk6DsVgqnB1n8HLQLwpbvbeJ5GhrxYQi2j3RE3VcdN9u3qfxGfLvXpqu1ziwSNZyT3N4A",
  "key32": "YgHv3SDDK31qxmTP2YG6SFBSMBpr6gLBFoGi3sjeDD7Gq3wJ2sWhD8kMSo86PHXCKxgRzaWurrhKVU6oaqy2XHY"
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
