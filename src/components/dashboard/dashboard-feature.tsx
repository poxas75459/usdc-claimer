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
    "2C3mJiipFJKgVsduer3ikQvbXCqzYy6vfUr3vdgXuwBaaKjY2W3n38o5tK51dLdZw8JRLNegtCRvHcmCZAWXp2oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRhAbFNbZb5gJUXHJP2EJ84G4cKfGe5eGu9HGmmEy7U1JYBrybW6A27S247Qv5S97LmNXiqs6dSe1yU2KcZc37Z",
  "key1": "3q4q5CjX8LrhZ819AboNYqcFpZzSm6qbYaHhaTzDRVhWfE7AK6c5QSUHPVNCnbNhSh9j8sT2m66xJMVwtvfBEad8",
  "key2": "38euMR2GVtBBDSGnzqPyTuxa7saW7frHeFHXVWYbzN66seZjPJWoyXPX8HcBh9pMeNBTqAR6Brzi6Ly58iwjwp73",
  "key3": "2NGEvjjJCXr3Go3Xk6ui7paKBWEXCZx7aR78H5b2vsdgcB4WZuKABEAUfHa3opJWatcthTCX5GaoANMPAYQkUAQS",
  "key4": "55hd9t6v8GYx4HitoqSExFW64DEVaY8XHoPuFzrrQ8gcyc5XBstaWXLPZWxqFbwFE9rm2Sb4vsLTzTYLwksw7yTY",
  "key5": "4wEBtYLSVkaMeoMzW9QfFkSmfCD4wBoiPy4vLSZsjJHtZxDtALJ3vtNmTc21ZJ3Nfo83XuocX3jKw7NSg62pt6L5",
  "key6": "bjPq5dqkLYK7UFk4aEjjsSnKvVYK27yW6ScX8QYr6vkJ7pdqVQPXPfMgMQJzLBhgwMYiriDwkTTeKhEkVLTjEas",
  "key7": "3G5JZxgS2fLfuYVPRg4tDkhBy92kYUAVQyesw4KUksMrHwqFEYkTd2LEc2T8HwvKJUneoeFnsJpeGiNnNx1WeYgV",
  "key8": "5qW3VDYipfd1cdz4quy2EpcqHgbrc6T25U4TwKqYGL83hicuj7o8Lid651nNwegQV562ovomFStkr3nZzP84ANJZ",
  "key9": "4XmNcq4NonGSpdp2G8WkZPFfxTkjdEpankdg3nfWym8Vs3dRmdAaRrM8Vobrv9SyKMPskd3kSQuqsHyDxMvh3rZ6",
  "key10": "3NCDtJrCqz8pehUbryaDgCUsAFp7sXyASKQHdLPdpfF9sTePm8hGSXkQjSQriXATxAG6i62RugEksKB5FL9ETHLk",
  "key11": "3zN7Fg2rDjaHZcCnZd3db1SB4K1EzYKa4yFsXzMdG3SZrR9yJ5w7uZ6kuECmQbae9icW6mbAEmzrG91D9cm6HUVe",
  "key12": "WzwyJZSppLkoM7M2MgUKK62sj7uFLyuToZ9SdbK4gq46EWNybmDTDm6psBWsasw6nzNKzx2sf93dygqHZti1kp2",
  "key13": "2F5tGmigywypUk3U2zdNU8zLWBirJ8ndyZXXXDXHk1yQMRcqiqb4PMUPc9VJ6hTvhkCodJ2CYcGymwv6JC5qVdvA",
  "key14": "8ccVmxde5zF3JDrDavyCNsqcALCtiNJtUq8g5vZVHxxWtbSSm3mR68iafsqPYcw7T6AQd5jwdPQMPufVFmVtAcD",
  "key15": "3UWUYnTW5JW2GzEbxUQWRSFriPAQnyhcLmU7iHoxN6oCQF6ikx81Ji53wvFQdxsrTzP9QwqDJUDDEQ9bfUpgZdM1",
  "key16": "2v4mbNkqw5rxHv8NKz5AQqwquNhzXhx3vBCqiHrp6LNMA6WCVGBBURtN8ntBn2MZUTqCrN5HkCtcz58w11jM2tkU",
  "key17": "3QqS7yuX195HmmMJBdprGfDQ39LnmQkDEFVp761AhYQ5oH5jwhb3PkJdJDVWcaXwL6hGRckYarJmhvMQjWu9EDhr",
  "key18": "HKdizDGFjAH8Gm7qpEcnjDBWmzDtqTzF7JBMq8gftbN9fYJ8btx6ZYABe1zNHwF9wYQ2BhGgYu7VMtgzsusysGm",
  "key19": "4EovppBDQ1au8r3469rErB1L3u3G2zPJhj6EdBZPJ3HzbKQMErGSfjhENa6n2NmzGtPS9pga1sg25Fdv6T4LnYQK",
  "key20": "2w2wyZek9KXxT4be1xqGvbcxRRg4mUDZoXbjJhcQkeU5xjudGaXobx5m8RdWMwP6BnsQQfj5VxnsHia6aKWM3zS9",
  "key21": "3d9cbkqhAZPH9yYaWPzuxs2CLvF7AnKYmFr3LzwX7eeVTyH7otTnQXezrGWrM52H13ZFiNmAKpTu56iLqZxjiNXT",
  "key22": "2FmmDrVQJTYd9SeCaEP4LF2jhCmCk5z8aRuDWSCDJHNezuaXp8owGXKfK9YR8bbek5YXAM5D2veQXTV6Xo9uowEu",
  "key23": "2evqgFv7xKrDkdHpE13q118THpjfLfaFKDtNEH7sZ4ELTwPcb5JhStu297iqvNs9TdoRdoPGAvHJhvu3Xf6zdCqL",
  "key24": "3TjeaTGwu8eaSdYom4iWquAGwAAwSpEDePcHNzz5up8YncwhdANZnpyYVUeW8CYtfBf7G4FGVUMpHRNR6oXkWwja",
  "key25": "v8hnyP1Q8eeUSEbNwS5iwbp68V7SfQ1mj1k6Z8PY2Gr17BKSH7VtQr9BseerkfVYKWmiqJbaXn9bWGhdA3m4ehY"
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
