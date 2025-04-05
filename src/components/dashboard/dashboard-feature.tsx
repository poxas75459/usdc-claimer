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
    "BQ4yxkQPHWAeh6UDWTccShuQrf77jYyEahFAXLHnC3sY9aeqTWA8GDepUYMsWj3tcx1Qf9ik61v2xFPWkC6tFXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3TZ3LGsYyyotrJh4dZmecTpYYu8PNhptHtqsvgQfYeWjc8RyU6nYhz74qQYGEVKqZyBEYGT3236t7A6R3ZdSCm",
  "key1": "3pUtvMGHrJZE2d9kMm3bwvzJ33FP9XZ1hKFQ5HXpFoJZUA29nGGV22Ft4CEHqiShPjyPryLnAHexeuC2n64YYve1",
  "key2": "FTdcmxkSqm3Rp49mHXssu5JWwXpWKosBB3hkLFNisVXa6vAPnSEc5bxpLScAphvsqN3pfpRVLt9zP9jBvPcXFeA",
  "key3": "4TgydAc5CT9VFP2CkBJb4LsCVTFRz6xrhiSMduG9wWB3VoihcbW1YK2RWoeRTwBapWGiizuvU1RZBcNkwuKN2NSj",
  "key4": "34Xz8H82wSRpfVYosGBo9GHq6rCzshNZHqoBkfoYcFXfj3Dk7HyngCyHAuhgi9pzPRJFBTZgea6d92WL525cMii7",
  "key5": "5YLWPPdg4XuewDijKSjbj8kZCf2sXMg3aKtyRHUbnkdo2giopcJpVgVSbsFgCA1vnZUesGUXkguKyeZ8QHi4tupZ",
  "key6": "mmi1ykuEht42vErLw35bcnK9Z3EBZsvp4Yd3W312Sh7QRjqdd5bcWPCkCG13mSjvMqX98K5ZXzfuHngueiji4hH",
  "key7": "fAWNyKQqk2j1zKPpPnaW3NvnPYVV7kQ7KBcHes8RYdn7rKkzvtQUfM6uySghQFRUha93sJTvtEEFDwbvXrJtucj",
  "key8": "4ZfTRc3n8AEiAge8hcKpxGh6d4VxT79shBUk6ALqkjVZc69QcyLUuuhSijeYeBVc67iPeUhWLnViSvQaDZc2bprK",
  "key9": "3DjYUnV4ZuoeJANzV6QNMkwEt1MuMJsCCNmEfM959ezJ4c4aPJA3W8cGZVCpRUzPgdmZyERXDbKqKXdf8BrV2sRK",
  "key10": "2aMtupXAaPu9ZzpbXGrpN7i3CNj6R9Bk4uc4rwLZt4GJ6UCdRRbyBiQ7UBWPFZnzRdxjr18kHP8nqbQxC5aSqzd8",
  "key11": "5kQ7QxHXjxaoV3zr1CoYavKLS6GneCXLb4zHNnJSyoMYe99HusAcf2CnZpfR3gJYzZyj8ErhLVFU8qxowtmMinb",
  "key12": "2AmGTVvUUkdFBxz6AEKLsHPucaen1ztNJRcpdQbfbg7ay6SzEgap4zs7Qe4DwBqXew6q9rUmBPKR2rtJMrVC8BiL",
  "key13": "2cNjwmqLRXXsjA4QP6Y496LzEz3HGgteRbCMfK7mdgqKSEN1ccrvBjZ75Z6geFtgg91koThf7ZWg9UDr9VvURVLf",
  "key14": "23GXHnAZwGZZQHmemEzM185iQiZMxK8ioJoG3uWtBNNoqNm8tShgEHYvnukyXChoYyzp9iWZ5GSQbnjsVXmgKtWM",
  "key15": "52gb4YN99UpkD4ixY1BHVntKmrhhdaC6ZCGHdVfU8FMUE3zrdbk69r61uwwZpjgp76j7bJk7So1trkeDJ1VfMnGt",
  "key16": "4QRYtbESJgmzLkkBUnGhhS97BCuXF6JsQXE2riUa29Xro65LFjbVqD9mFupA2EcLB9Y6sFsxttPxs7vcv1amnDqy",
  "key17": "GuVAiAqpixZkZ35yHd6DuisQ73pFqkvVtAziBjin1Fg2C15QmWtNZTWftpbBNYqCzZpaQ61Stfq1Pwek92QUVPr",
  "key18": "55njTWWxPK6H8S9KJQpC8ZKnVR6VnQossqc4P2pFNEe9TUZeX2Km4yktxfQJv6C4SkdDH9nTcptninzUXW8RAWP1",
  "key19": "2XvShDAXyEZMQ7M2hkTkr5HgQP9ddvgc1q2eQqB9EYRjyg3KQMaS1TeVcahJSxCxeAcUbTXq57id8aLahKxzyw4G",
  "key20": "2DXHzhbW3ZbaaDwG32TkoorUrwCSHtFVUhFKhAq5GmbBmvF9H9QyFY7xL6pdZNqWVooxumc73MJ5hfB6TKAv8i38",
  "key21": "4ArcPaoS42SvBGUQLmMHJA6WPQ4AvRW7vhBELGgQRZ1ZCGzumLhPmGmExwc52gBscH2xNLWPGhQRuMhX62dJEGF3",
  "key22": "rb7xcZzMgJaH9xckW9koWz3PcKiQfHwuqGaVG4hc5Rq5zisqSuPxxPcBP3CEKmSRGDY9ygXZqAp7HjW2z2E5qMk",
  "key23": "4mVHErHsdZUkNkVkQmfb67juJQMjjkzEcNUKD8YLwGynRqGchYq9ugyYquFL8AzWCX73vRKwT41QEGuysRPqbswP",
  "key24": "546zn2suwPpGM7UbDpuaU1LinseCW5HrhEJXvWhqjWydfr4zSSuqvp2dyGnCFq1N5C9XrqfodDfkHoiFHdDG2WDf",
  "key25": "2XopBTJUyXQMaKt3THEGgHW1aBsHSf7HSYZktVXspmdQWrZitJWL7vqnxaktadsqRF5DmEVoi6SepSLh2xyt7ziy",
  "key26": "3RAm4GCtJdfqXHCSgyHxbpdx8yVFST5cr2uW5BYosCNSKr9z5GtdTBKARHN6ovAKmJjvfaVzwxzpgdVk5icgFAPS",
  "key27": "3Rwqpg3t1reBcjDWC8fBFp9PVKSmFxAzKrKF2pyJZtTt66EG88CPJEfrAbjnYu2uJpu2wxApenFrss3kNjXEuFsC",
  "key28": "5EH7R2EnxhCva1Ht5x4xT6xKxcwtVJ5hoDH6q7tfyy4Ywhaymk8Zgn4PQZf5MWUL9qbaLuocLyLbDBEhGikQ4xfJ",
  "key29": "4F2VbgfU2wPpMWYHCp9XzFAd4Ykqthx7Wz5Pixn5wbzp7r9hy7GV2NhdSor3E3EonexVwCPvZoDxbT3pDNML817z",
  "key30": "3MTEatkSEhRAwuCAK1qdKpiEBZN4qGJ4VCx6xPtZi9n1cJXm8SeYcsryZAYGAPaR8aBCvogfK15Mte2nciSc8FES",
  "key31": "2DqjZczBkjRugHqfuGhQHBkUSFKN8HSKnf1aJ4e7NjZAvVMeDBHuLrzhy28bJ6TQzdsif4G3zHA1FTqPKoeXxSco",
  "key32": "2M7VQNXDAismqXnaMn3bhXh6vMVhcYwtMDQ4vjoPzJtDnTaVgPGaiPSqXFtM6Gm5Z8fzWY5fzwqtnoyGRpn3rvEU",
  "key33": "5e3g6s2ZLVhFNw4ZoM6JFQE7V7mL1HxhBPv4Y9BVsdRxzqPvspZidvydZR87T6VHmBpWnc8Ao1BB3PNgAJD3shiV",
  "key34": "57pYBxZTz2Wfwu4E2KWz19bxnqy5JL9SYcrSbWFGtyycK6NWVqB2Jd1vkPE6aUWLyfwAWeNwJCdxScKJsswiZz3K",
  "key35": "3pvDVsSDyndZfZrY2jEoMtPkP4euDCGoTqpF4u9DmiTJWmqYnrEAgW9jVPshBLavjgZweTfx5sRVQ9vvEu7BSvFm",
  "key36": "3zxZWdbFPzijwoArgiYsNSmy5pZHrcocyruqx5HkD163MgLPYRoGfMjjBuiWR5WErtwYHXZ5TqcmUmvsw58HxP3E",
  "key37": "65Xu2yccKm2JiBAZcjXNmtaj71VvacS4r5qHRD2TZerquFB1LCm19h9yrjzADcTxMwhAaMRNtqva8JXwQk2ghG5D"
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
