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
    "5x54PmS4r3FR63Mi6dHhhbkikJQzW23AQLhWZ7aMcjpipY7PUhj8RaShNBBBiFHaZA7JjA58Vv6m94rRXjqWBjX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9s2YAM9z7m9g1KvVcXANAbxHFz469Qy1ZP99Taq8xcb55zWftzKy7CK2Qn175UTP6dmvtBY2H3xpgTGMxRA8FeV",
  "key1": "2y3shjKn6gLGpHmKLem94ShPHNCTkD6u8pGWjuYM2cKmjunziF6NzpUG5Kqa5Rtho93E7ee2r5B2QF5mKF1c23b2",
  "key2": "4iaD3ocBKS71TVeohpy2ek1TE9qWHh3CPwvjhLbRAtUi9V1n123oqGaPfv8HDY5ZVjajv7V1TZ219gQtciXjNfcZ",
  "key3": "AMWH2Vx2T4SzFMupNxRpwAHi3q5gP3ZXvZExqLKpxnwdSx5HoZTuPnawbL2bqUhEeGAYestueVdSfLMHhkYDH5H",
  "key4": "1cQnCLeNfi5NP4ccKptUbPkvxgxMYTLyDjBPHrXXdzyVzNEdmJrXqGqmEtJYUi4VeaDttgn1AXPpjT6GvEVMmvf",
  "key5": "3Q65m3839CdfWP3RdTdzAzKp9ti6S7PuCCu9H6iivAVPBR6tyA27T2skLQyqn2kWGjVm3hnJ3sbNJjb4g9hPTGex",
  "key6": "2CMUahAfD4nKUdQYDyrhTbhQm41iyckDL5u4qmu8EA7QBNEpHTULNBLihG6YjtQpb4b8f87HLBgrmRxsjvCe254y",
  "key7": "3LXHohoffCaTK27Qxuaqy2kuDvW7fZ2i1mgXV6FR2cAKpNbo2R6fkSmTPx1KSxK5fLAmDNMDTrUKRAyMfgT9erRU",
  "key8": "5qvB4VZ4yMPM6enyUF2xEsErX1NUE5Q8SaQDHwRx2kjpRCwRVXYNGd1GxvRUyh3PMkXSw99UoMacbFRAQAXJPQVh",
  "key9": "U3JLcBEJCosDXAc77UNzGkA4PgDgqqtW6KxdY7RaGBTwRYUo4pM1wykpAnFqG6CFZvRYXaexciEpJudxnQWc71K",
  "key10": "4w6rfNYptaRxjXevTQ6RFWXExgRn7LoP3tMjHn72KvMxAZoSt5d8C4wuAHrT5x7dMTeFGg3X37Y6VJajXsUoQm9W",
  "key11": "3fJV2vJPX1SG8oyF9sjaTnhMGH9o1ii5jY4fDxiiMrt9e4RAHDUsyYQoempfj4zA5eJ3E7so5iMiGQfA58khYUE2",
  "key12": "41Tn6Mf59PH7xmirHKKtZznb1A3VTbT7vi8GwMvWErfJ37TEYUGmKnQPjBNreEp3HHmMN2SCGTE48jLm4UnTutk7",
  "key13": "2xkpayHwk9G71NvVRomjEu2ZCixbeq2c4r9GJqRCwkBqWftebgedKTK7KzTRWxzPeHCT5EfTSZQZ95s6XBL7saCg",
  "key14": "2CGvQsyfMFAKLtREqrNHDKTZMQGHFnCKwZEnR9tTQ6UXzZXZbgYHYu4qxPqrUbEcLmKnFMNxmNkmWvLCe4s9jXEr",
  "key15": "4bd433kZTNEKXy8pNtP42E5pCafaynVABz48SXiposGEtQjcYjujUdTUqTvbfFaTsDY9acEkgdaxvHVGVtVghQKN",
  "key16": "2aZz3pktWeQFbxJkS8VyTaQhVqUwJ8WzH3yLqhesuf7WHRrfSWuN5pZxfFk2jZf2PgtpKoFjVQ4XjTedb63uypPa",
  "key17": "5Q7vbaxxUDQnn32mRg9NfVZQJYuAwkAcHHaEqdpyQXuvSxJBCMPi15Phxec5GBPGLJfxiwBTktpW4rYWTSAVpmpA",
  "key18": "5VRpVQtvvt2c4KtndS89MewE9Tf41yqco7mM8iwJ6L3iULSPjeQZ4YAb4KfvkzjP1aByTtbZkXyTZ3huBmzCFwmw",
  "key19": "3o4v8C16qaJayv6cDSZxWttETVzELFWHRAghRdJ5HYR6ZiVvL6CpqzwWrhWpRjkWrsocWcH6JmQxJbX1wfCMvLmD",
  "key20": "wZgmFb4EGwT7PCdLv9jADDwxVd9HpvghnzvDRhBhXCnSFth69ZVAtN5VCbLUkMdCeN6VSteufN6hDfHwFJn8h1u",
  "key21": "2qbufoit1Aa6FCzSzqiBR9SCnbQTRsVmkLwkxZfciCmykDVmdZvMAHrQWixmgk5pACkG6zV8fKFhYvJzXSxSQvTT",
  "key22": "4fwTUY54T8APLstFxTZAr3XAbRfySrNnMNg7zNZCXSrS44BJKstFgBZ2QAXcHqW2f4GRGxh8EqX8KLNmVGidxHfT",
  "key23": "3yFYL9Y59NXXCYmQqTapSbMPzLPn4jrWx1uZykQHTCE7YyWNh3iYAh88i2iPwbbuyMChggqmUPMrx86Dg2SdCfbq",
  "key24": "4biVTqynMYZWNLbe6bd7BZBVmAY6PgZQR7FiRzPKoYMY2YKJiCZu6nibh9UHQXPbiRzahfRLLcAYmL1JduG8wNhv",
  "key25": "2PqGro2YnK1iaVa8vqpg4Y7GGGhGVm1eLuND1tnt7h5HiYE9zkbNjUioiTgXsczHHXBhT2Wf9ZHHYwSGxhAkw97",
  "key26": "2QsLeQfV6Hx9LAuJMeM4Xf3Akjjo2XJzVkxbZh9KJK5EVc4Ue2mJyFo9mtzAsoinfdWN1oqWeoNVVhXp2xpLY46F",
  "key27": "2hhS2FiGM8RBTPoAg3d3EYJz1GVVEJtg9YsXNT5pZBHtFHcTMPzZzwEuU3i8Uew7VkhE3PNQLsTHx6MWYCFuXx21",
  "key28": "2nSG1FiaPX3oEFMK4BLo46o4DSD239p12FpnMsBXBDfLanb1QCrq1Ei9svFKfjHUAtXsCQcJRVXn8DGP3ZNvih69",
  "key29": "q2LQ54UZfejUxCJdxdYyoYDqSQajuGf9EyUDwBSyfD4vDrWXHaKMhvMHMARmwoPLGv68zRc25r6eBPwYWwnQPjo",
  "key30": "5eQXTMhAW25P4RgiYuMBkVyRZuWKr4i2ytv7WGKKzTKdT2Q1b5DPtdTDqM5pdAHvDryQHWBZ2tdbz3Yae5xkyK1F",
  "key31": "U5LfBLQZLGerWPgHQKcd3KWTsWh5TjQfZG745vFW4NrvdaiK5BxoyxvqpnWaTgThDFmFWTX9zAqGZfJ5bkWuZDc",
  "key32": "5MDg4jKwm32HsmcJF6arzD38PBrgyZSqYStMt5d3skMhEejmWGMzRgHar4gFvtd2wq4vLTV5XQRmHZ3YUGj3HQAY",
  "key33": "5JGVfpTxTFuCp2fJf1p3PQwHiCzDhwUfEQDdTc3Jht9QzbhDmDRkbDK9F5HwAoQUCUP8XaAPKWfndMHqEBG87BKR",
  "key34": "4F7N3AjFB7aPXibbeWpHToVNFkZ3Rithtk3YUyjU7qQcTrih87zPTRSQN9nsXWniggd45235kb9Ex1TL141SRdk2"
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
