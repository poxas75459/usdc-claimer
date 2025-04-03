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
    "278Hq8de93oWzzEC6upUM5bNmHrzCqV6fkBu5Tfof6vcwTosq8Eo51DcYwHdj9Tss3pa45jiycLKrcFSsr52Kjjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qe5AEMLPwt9c5sHxUMWrif7vWCYsgDyiiaZ328NuYbJVH8xW6FHiUq3gtQDWrbLEifEQqZdJag72nMDiuqj2FZ",
  "key1": "3zTYJX5rWeWWUoYZtLDUiYW7zT5mT9gvYgjMfEz8qi8DKTMdTY3t1gNbBsn5PrppRC6k4vq4wVMzqrHNcMwHogEL",
  "key2": "By9d7Bj8NxrQ5h2ecN6gMzWRYTtxtDgdTXbr4ipd3jW7nnrwGdjbqe8Ts6aVp7f7nuaJ3unw7q1eE1XGBMmjr1M",
  "key3": "RPAqGywUMVgwdCpmXaG3gDXgexcbVYJVggsKWftmYeqXmxGBPPRPgSeeLrybKqLGWqngHjGa8Bh2FsJ7oWTvAkv",
  "key4": "EZ7JJBkMJbRzFSc4KZjCKwXSyeUNJfKC1hzsFkWiE7xkJYeNA7GyGX6Y8Qm79H5PudWaEr514yKfJmURk86gfAz",
  "key5": "2zhcVruAsBfWRbbv6vMbLP68gPF1cfQtttxSqYcHPTH4z8RYrMAot9VaKsJzzZ7sTALi3qXNLozd2Xrszj3QJozz",
  "key6": "5bBD6eKTAMKgmWF6tZNcdwrhBUF5qF2bbF6jAqwks4CwUinRLqcoQ98GVHELjxmumEMdQ5rx4t6p5hQJvoQwcy1p",
  "key7": "2mnBxEUXGeZ7tfzGjFH3khpmP73bBemhaYZcigB7Y7ZWLeQ2ikSvhEB9UMSGgn8Sh7Z5nd6et8ADznjuaQo9sdnd",
  "key8": "43h1aL8LS8si2ef3bMZ2LkuRQzQfYvZpUHzV1NiMKM9kn8q57gsrZpc44neuonNFT1w6Cg6zHmYnW4DgwcayArfj",
  "key9": "51CCTKmNq9TTDqj8g2LCRhC71Z12AZZXGUa7f9X4Vqtky1JnGzARBiKP4BgyfF7gWwxVob5WAAX69dfTk1qBSDsc",
  "key10": "53Mrb2FmMkS7KaNtbdn4jcvWZ1xENiBnJQ4QaqZGtJA1o1uMB2htY8ye9tfAZWzgDmt63pHpZCRgZFkQE86HY2tR",
  "key11": "3MLGzEKDN2tyaUjBw7zh5bdbAGWLCWtvLZECK94QiHAKj4bwVKDSqFzcXo8BzTcU4ktmArY697cZEsnDTNCHNa31",
  "key12": "28utjcrUdQ52LXdm4KSd3bu2uA1NqM6NNRLKhoKzaihoESNPrTuPfTxJCK1XSFP3y1zHAxbBHcbKvvYckC4gaK6s",
  "key13": "GRTgsiYmM11nZtdohsbMgubSrFyR14Wg4y3vd3Vz3QsDPeaFQerCF6zj51omUbmNd177LMaPxsMb3Nda6bMeXRv",
  "key14": "38CNBAHKTSbr1rvcLW4M2K6s7nZF6rJrVGCQqS78ZVuttcqiYB7RPZoPeFTapvQGBxg1BQYxKN19J53V8h63Z5NW",
  "key15": "r5AE1XMzWvmdqdc8Drb5smFiTZArKfXepsn3UXMsZHCkTjqcQTVyEGcJ68FWDV3tzH7MZrLCT1yPFssFsjgCSBk",
  "key16": "3hBq7yQsCAWg4YwztmxFCMsWLhkKYC6QDSoqhSMtBfbAGQ3JZzy5Q5W87G8ekDhVPNFqeKXPRBR8a46tGSZ7y45U",
  "key17": "4xKcKMiRiPwuY68Bcczrz7G28F9mTKfpyiQxN3qrhaqGdApgT5CPHrKTqBsRNk3aqxSwfsHmhC1iauYFzAr4NNo6",
  "key18": "2Qsqy74zujR3GCWLpX3Feqv8unhc75E3UfcPaM5Lf1JQ3Hb7zPpJymWXchMWFZRTWnEWiLM5nb3jihgoBQL6uT5b",
  "key19": "3gNydVJjbArq53rHNJ2XzA3kZgqZXfjZDPMdnucUvP4LLHW94ifeZHt2vWxZHdvxnCHarT7ptQfkZXoUJRbxd9Gu",
  "key20": "536E1DTYazzXt6JFR4SjdLSqwA91Pno9XoxQnzqAKj5AUbDdMDZsej97PFh7dYsNWcy8hpGZxnxZAstDDt1QDQx7",
  "key21": "4PC1oond58oxuXt4psmFPuETnKr7LdKBNYvfJtodRpV7sSi5saeUKyBTQjC9y6zf6tvrPuMZk7onbEJcgv3474yx",
  "key22": "5sZe8f9Wfz2xJsENRC3gsMUgdBT4oCaKLLop7dukoSk5pMxHXk5v3Q3KWkAJsftEWvoQ6QtJV5HVwT9niqcsSArP",
  "key23": "65hmV85awU1BXb1dgyr9kWX1jBvZ2cT5xEBXX6KLgLZhZpcD1mJNez7sd9DJ6q783dM2kZPz34LJxZTFuGvAsp7S",
  "key24": "5P6ZTEUobf5QpoA8WKSwwYEusc8EZU7xHTUHPYYzuVpLGXdegn9wLUQKfbBGwb4jNtTk1onrwCwz1o662NE14buN",
  "key25": "3vt1ZF12YE6iw3HwreZ3qYuB6ZcTD7iF6rJT64bDf93adPQNnKJkTgrzbkbmzNBHmut5J47qDY6dj1GagxJCGBEz"
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
