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
    "vHBU6hXHNtMPd8Y7aKRN8cbZc7Vqm3ryaCq1Fah99ETYfhiF2YVq4mMK11VBaqLGXmJLzPuRCBAEgZaeXwGgMwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgqBq6WkCeRpCvee8VygMob32iyBndRgs9ubUWRCPNGqMy8SFtCGPr3Uzx3GWzzReZ3fJUKabgecKXqzecNxP2A",
  "key1": "5kRa75vkf6XEDg6ptwFE1iHsdmnPJDjZKv2K7NqnkWpTEkSYnBU76wzciMs6mLfuWqy5D4qB4XyKmHiosYVKBQ8a",
  "key2": "4upJsfDJu3FXJXw65J4fSav6oBhj1ywiViwdfY1R9964mfhZ5UXFAqApkZKHz9DSeC7zTDX57jnbaRWuDBzuooND",
  "key3": "2ZaV6g2K1J6WLbjinTmSxTYob4NBP4c7cmwX7rErJNmfNgg7UWiRGeXM8YZgQESXzQerxFB2iFfyZLwgBCJ1fWmx",
  "key4": "5j5ptqzvE6aX5hw7bHDCHtSTqVzK4xCFr4AzQbJgSaDJMjKh9D7sXPKBRkzwyUXp37VneuFPdJ3ZkzU4LFz7wZMp",
  "key5": "5JECpiPwoaqba5jM7YrFxfcjSiwWeg8Cr3zegnyA5xGpjrdUUBEGrwrJgt2bbhiovSbNi5JJnY2hXr8KRQhRyLze",
  "key6": "64aF1KWDRAHBcGCWUUnEnG5uW3gbGmXwuP4TVYqzQzGgR9p1srvxsU2wqiDc2YSZkCYDJthThGMBtnNA57WjeS94",
  "key7": "2KSJyHFWrAnUVevUQaBtX4SM7GzXVyj7YZGsqPCGuPakkFhXNuQJRgUfkHXwvr8ivDXESWaMH89qjHUoEBZiUeqv",
  "key8": "R9V4YdyHkGu9uFqs5eNhMhTFMmPo9LBbLzJoJzFvkXp1yhCHp1CaoFvjEU2UJDETXsZx6EabJ2BwJMAXKfnYEH8",
  "key9": "nGDQwic7QD8MghHt5SaaAV9qfJv7KTv73AEiTZmU2oDn8ce28LqjQdJWdDxpMeXXj8y5Ftstr5WJeprUMvqhVTp",
  "key10": "2CbtJ2uFumoNpMj5wtkRp9uc7X3wdKf1C8QBR2uqrTKZSCZs9vfTZVWYWpr4BQgCZmEpHLuzz7Yz9xWDKnHpYxYG",
  "key11": "2NhDxgkDvUsHNyHy3j8sRNfXh9TG8ab5DDajg7oypdaJefN5hU1Usgb73DpjS9e68vdJ4aLbRtCimxguXpjDWTmB",
  "key12": "4vykJcJ2c5VScNtmd8LPXcH1GNgMdsy8VrRxj1MXKSNZ9KkERevKV2GbMZ315XzcX9DAw1SYM9Rcn7shHmEgjT28",
  "key13": "2gZQdSDnMHm3EciDuVRzVvxD1CYaCDfXpPJeK6PxH7m1D8JFa93Rz1PTkmyjjrzDJJ7rzdf2B8qjV5nvnGxSw2dp",
  "key14": "3y6czoJ4xFwQ1bsFfnomnLPnmDZLRSYKBe8VHmXtDDgsjWmtgwLkdUehzUN1kM6xCwmGqhL32PX2EM5SFDEN5c1r",
  "key15": "4kr4rckL42EnAyWGVwUUWteFJg8cUSkf2kFM9Diry3D5KAmp4wG2rrFnSfvnJNScTCxJkpQMw1RBnBt7vziT8HKx",
  "key16": "MYtYoreST41RTUjtZ2N1TC1XxofxGvhPfdwPRdfPoAuyQvjvwJUU8EGTdVdHDt8XARuvzA9UB4pa7whn2ntg8xj",
  "key17": "4m31XYcGG5t6i7QRy2dbC19M1voSovQBsBb6wfg3FdWyaEMpXpEhLamBfX1BaGyoiZGj58t9MoZDnFENPhrfDQT6",
  "key18": "4NqYExB5MpxGGF51DaXGzLUMFYSsy7wGKzjqY6LzvjQWNGqoVzuLey5KtJoqjhmPcNoKVw9xML3DYhwSecxATTaR",
  "key19": "43tPurKoEzyCB8QjSZA1yc7nMYbiDk4kgwPHas61Wj9YbhdduZr9tCpg6DtigDjgY52hAmte8yKuErtPWHprJZyW",
  "key20": "5qVDWx4P7Z2VUgHgNBo45e8VdEy5wGhnQgVHE7ZrEdLieh2EF5JoiiPBgNiSfBC4jabakKSkPi8SqQn9QJdCnjz4",
  "key21": "3Z6HBSpC1BZ9x8CCVL62WfT9YRAtWFhYQEWbdr94w2mDfnBsjovAPmqMXg2CYpva7bbprGA7wg4LdSAJqrSTPyXt",
  "key22": "Xb1RrP67b8btWh22qiqeDAiFvHUCBBb6ZoNas1F2GRiCeJcrnoTXmDfMdjiAusMBmap6LQmXVnTXjvv7KBNWVCX",
  "key23": "AW291T6h5PtQt4bBMgxH79mcuLyuBRmjmrfbo1jJaJWMwHrwBsXs6UK5GQy8y6YRx8yZXPD6TBiMjrDrZwTh5Zf",
  "key24": "NjMjsRvRvYoZs1vqkgy6QJePLYd5XZnpV7vDsw2YAYWJcKQ7rg5YGncdZPu223tswPBKTyTjofJMirnhfVptSvD",
  "key25": "4Wdo3pAHgtRVLarj9pT8fjb5KjTB9QmyuS37qSPprNf5GdFrvimDM6dBeiS3XvDbUzGMRVux1zaUDH3tQmpyGF91",
  "key26": "2RNAcbtEhKhGm9FaePAFuNqpvPF47UHHSFVEueGisF4uieWXpU1HtccZCLYcVtJxZMjSyV8RAs6JQ1XrGJuG4cKq",
  "key27": "GXhnS2wNETU6JJSw1VaJHu6wTgc48FfnxNSpm8LhwMqtBZxgXQo9jnzJNhiHVt9GCFTjXb491VhT21zLDxsEbQ4",
  "key28": "4sitC8saBhH1fgVKym3Cj5k1jJyHgnVCvRdunG9V2o5MsPPfsFHFGfWkPVbxsMvNbnwXXZpGyA2fYjCyK1WsEYb"
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
