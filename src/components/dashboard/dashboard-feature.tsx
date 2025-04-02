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
    "616USY5x5xcbsTkSPUcHv2b7xRmNMUk25i1WuSmd1AZaT5chgKf7EUUtNKNdngQF2sMUb3FjZxT2eFod3NHG7SUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdPfLpNhbEjrNiBgUUUoc9qbokr2y1Myp7t438iviZ8LqVzK7XmtvLfH4MNHDdFUSbFXdroPaoDBiLUfD78T5Kj",
  "key1": "R4zMcMDKoxrabR85CHVR2xKwiyR3abeHzZsamas3YapFHWoVm76Y3EzX4Syip8sQtii4eYKFc4o3BGZPzXUrEvd",
  "key2": "2g7VdrP3YS8UAydJtcWpMK6DmoZiN1inexx9uAfhVaMM8kfXetzBZ6gAdusgd3eHFD9mCVsNPHNiyJse7UVH7vdx",
  "key3": "5bowuXGzew899kf3JW6W9uzkUuCZTFrid75KLA1rBwRhG3r7m78T9XLs2rfxpwSNHuoJHGiU1PZcYoYMZPtGY8kJ",
  "key4": "ErR9VmD99AdUFpu9roTX2aiMFNckwxbCdnVeRBTGJDMftTvhayT5EQTCboHaGMWwd4nMnkWhrA5oNbDvgwP4Pqe",
  "key5": "5gWAwGVZkdrNYRDTqhrn4m8isTZwNH6RUyHYxVqwNJ14fK4qLAyk8VhFmrkBeqQp8BY8MsyhaHE9Um1FAbAZTVyq",
  "key6": "KzJ8PfN3dBeEcmbbDRdum4Cnv1FavNJt5FeQtG1XvJ4VjVF93xV3u67oDvD9dyGjZsA5PeA5cWTZW4foyCUu5cD",
  "key7": "4RrGwEFA88W4jyZkcEavf6ZSWWx9U26B5fMCjhaMeEoGqW8ZmHwzYJ8fiadB2kXcVQhDdDtxHhfDPzZMsjdcpebN",
  "key8": "2a5ejHEW8QwS4s73xTkcHvRNZfBZREd9fXpMtNuYk3YMd3as7Q2g854FnoWNq7n9wvjhKUa3nNfCJqm5ZuQU3cm7",
  "key9": "nmUoCrZ8u4gge7x9c3KNNyy3E2iVcb853pfY2WNjuWWkfj9CGCsSmJNSKkVyCQE8fgvA4fvr6m2CydANaaMWyDT",
  "key10": "2J5KL4ChdcbN7tSxSEktks3EoaKN4Vy6SXi6zgCNnjqSRSpnTcDZ5NR3sZqeWG2zv21unprmij8KzfLSP9YcN2q2",
  "key11": "53KMmj1heBGGqR6hYt129is7acCPG3eV1HgVFKcJ4qt8Zgbzype821xWNSpwtEgWi2cvTaXDZ6iKdqZwMcvqGjdt",
  "key12": "4WkJGgjtUQjPfmqgori5FfhNoyWRj3JBVnLb59nHXva8vehk62oXpN4qPfW8H8N1K6UJtTtfk8wRcZsn8AjQiHcG",
  "key13": "3ezFNoVBJ63kNLBkgpBZpKR27zr3ApCF8YT1Z2UNjhWjVDK1Poog9sJR2PWLYYtX6Q9BKnukii4BLBd5CFWnZBy4",
  "key14": "57xLHd8zmN8bUhbiMZ45GEKoA1M8zZY4akdFm6oJyo3JXcXbc192mLudyFcbCCgUHUGmocnQp5jP34R42bwFFgvY",
  "key15": "2b2jyuJsFGhwzYMEqJiPn72aKuaNeEHXzJT2TNZRSeSbCGF1TBVX58JdLqnmaiacJhaHeL2nq2S46dwwLvUFiCQi",
  "key16": "i7T1GmPvp4vMpUSYpaPYW3rdyztP1zaGfrZnn6NfkxLAkudwLvin3M7gmTUt9Arseo9jFxB42oju48LvJZKSzYD",
  "key17": "C4PMSLb8Qw1WiQXkSsVDU1EeVGWd9EkVqkQC1E3muPs4WWU3fwmsyd2pYxE9oDXkzpBCGEWsAUjz1QmkeXdzYcm",
  "key18": "uBz3RpZB9nqUGxnFxdtRLPzq6bCcT8zj4YWhRDBJsMty5rbzSHPw46c7rqMRMf6hdpVwVLrRodor8YFjisgWRGt",
  "key19": "4cDB8Ni3h45w8jhtMB9DqmEVDfCkV6ax6XmxB6JgzGkmLt8PgNdZdR7SwndsonNue7ouyhoDAWF5E5asEkpc2J6T",
  "key20": "b5o4mU617dQbfCC6jdBSUUiw6zuKRLusdVbqRwz7v6s7xLcyXCDBE71cZ2j9Ss5ehzAnaGNqoxa5ZsW1gyxtNpV",
  "key21": "5kLYeRJm6CAt7zYGY3tKeb8rAX94ozj7zfzy9Q2Nsg8MV7jMWAftfFKVou2d2FnuMPnALhnrJbi7v3nA69WV1ax",
  "key22": "2qgiZzDcpneYHfeU3JqgqD4dweu6QYUMvsgzB2WAFPLrjnD9eGzP7DWYsT6boh3aTR2wXeErMgEDY1L6fSWJxoU2",
  "key23": "TM9wP3AKRmZ6jYkFbhH58YVTrE4peAGUMPUwnHkSWDQw2dv31ZRAWDbcrSKkTrft49XG8CT1SNbLvAYMSP9wjvj",
  "key24": "3u1x5H98BZcBkrU8XCiKvSvYbFKFtUt91EUJRpbtw1SZ8dXBFNA16VggqFyjaTUTofB3eFJeZx9FcrrFKA435mvh"
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
