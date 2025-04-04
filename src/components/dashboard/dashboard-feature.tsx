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
    "3m2QNToZDQJgJbWU69bPLJT3jTMn3gfL15YwoVE32HZsvP7tETPvQgYp433HzS6sK9YmzDVF3AHuGjABdH5x4yZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNavo2yxkcQRVg5VU51ujxxYwwPZ6atvTmhqs2DuMjsVo1xkAUyWj7dZmddACrp5pZirX5kADVJpTccHEeXEAzZ",
  "key1": "5FNf18iiHg4vgH3mY5orW7VBBHfhVhBxvmHK2p9UBj9EmG85dg4cdwCzThxyXwGpfKoWAf6eHDVdb3LLbkV1RyAo",
  "key2": "3ymLmWRFxo7g9zQWkYiK1oUGHD8weYfsCeUmck3ZG8LS8H3WB3KkWt6uUNXDzqpx2mtP5KmtPwboE4u4d62hK6rH",
  "key3": "5roisScDebF88bxT8yhKjZkg1nujvuWR1Aayff8AAbMyF7DvEa3axAN5J9EHpVWPBMAbzL6dK8H7xXcXMDeJNbr6",
  "key4": "5xqjBzxNuksSJQA95nYUB2mxyvkK6CtrFYLQdFWjMSw4BZBPvjG1heJ5LNmjZMHcYevo2hYUrHuDpHSBEEMetwDH",
  "key5": "425VjbFrzNkxT9XrUKKLu2x7sAC19wGovgQCcYhFuBcUtqbNkcihXLnmmg3HHwUZCi1JHdMD4ATm3pFyQsXvyN9h",
  "key6": "3CoJPZF8aCr63Fw8gMHpD793s3Xt3z7eaYuA4pkGJ8Pk3uXxjK6F99vd1cCGE3Ju3gYHcU3FLRNtdnY7h8gPptam",
  "key7": "31aakS2JdYXC2uzXTdvBEpyojS2X17dWrvC4RcKqAfL6HLsTMe3Zj3p3YWpzJinPJJveZSajSsjwJZghTxKLvbR7",
  "key8": "QgvJXyK1k1QcmxW1MmEpDGU7mugQTQeuP2MoqF8cJEGgQ39S5LdWBg7TJ4p2TgCJ4xRcNGoGJhyX4ZhXnzNmAiH",
  "key9": "2TukDm6241zzXGiRrD5FokbAnKeg6EbeqCY7kgeMha3FxJvie9ie9GwDQykAGZ2cdkLgYuqKHurxHryo6E9x3xZs",
  "key10": "3tLMMKBFKgJS5Y7JGPPogFbaJ3tdqFfGxg4MdkAJ5CGxJnu1W2e7dakq2of1zvN5Hx5fCp9P57ZF8CysmbvjziAW",
  "key11": "24G2vx9e55b4Y9XabVafdWBa24CFfy5rKRXqvRSUQskPZg5JgEjNQqrsm2YfaoYxPLQBKPvvMhbu3rF1TkZ62DyC",
  "key12": "2nEeB5QVyAmkYLTR1uCMdq8y9VYPMDxtLrQCKCpjp3WKtw6zBSZjj7wz15y9k9ghHFBbDx8fJotZvPS9wKYW9wbd",
  "key13": "2zz1SGP3ZhgKb1ViMZE7vU9xYdrfYVmwonMsVbWpMsfVTCqq2rXU8iKdFtUPnoGJvdfxqB2vvULgs9BRT7RjBec2",
  "key14": "5nRLwVZDxTSvfbUTmWmf7V8nsWuG4xmj7bQw7NatvQV1XghSoPMLBzEL7unsXKWiAaLvKUgqBSje7EAa3ZCtpJBx",
  "key15": "45nR9NqRykZaNYsDfgBR5DTZFZjWaeWvoZ4ByTikjKexX9pYfCWiBw6Wi9Yfw1KMWJnj8HNcyUcWS4g5kHizWXis",
  "key16": "5VMgXG49bcEPzDhDMGJjnm6BdhWxjVex4ZMoN9ZsEeUWnnwZYsXZgSNbMLvgwKWQinQnTd7LVF2BovttUwpQRGRb",
  "key17": "57NHLxMLhpsNAP22oJrqKS7M6kA7iAmSPNhN4QGxMuG1Ho3iNf71NYuwZ8xLEUQ8ApRYnseDDdX3GEMpUbhoUkp4",
  "key18": "Bw9B73gK26r2q8DsNxcSUfYCJNQkSh515KcHtjTzdpNoTb6LibQhvh2aYgz9Fhk7bnMmWppnWYcjemFJDnFTWyw",
  "key19": "3sQ7eppXp9Lgn7PWqP2ycSG3xWQ3DSTQQH5m47QpaYijtU3v5QZpQzajK3TWyTSii36EuVfnFpEbuqrankoFrHQd",
  "key20": "fTZBCFZMutupiBsDxUj6jAWTNUTfKuJZCaimge1pVa2MpDU6BJijUh7BcYBMypkfMMxVASuUTBVFap8vvqGs1tF",
  "key21": "5n8zxi54nKu6vCByssJt3X3chEM3K96yWBC1xa96TQV6rh3UVTeiuqcA2pAQmbjtvCQnfJEvSynW4Hiuqqj38Pwm",
  "key22": "3UJdtDivJsfefFxUg8J6NSSwumvp8Y3FhwMMZRz4UVCEzbWFgK9bMQ2A4R62CYWNUoJMBNmvdUiSczMMj7T6VEna",
  "key23": "58Udq9Aj8ozgYMP4zDHrPUddS1EEAeC9LCA3x6k2F8f2HpPcYMv1iqynDL2h9h1WuykY86fFGJk4vo1qYdbuxdSH",
  "key24": "32Lc8Ykw29qDxPaLVYDJee12V8XoRtekS1MTEu4HeGywbpq28P3prgFSvLP8FshskADoVJR5gSAmJKPj99jbXP26",
  "key25": "25daz48zbeepZTqcyYUXvcfUzan6eTj7M68wpBJKqxz4JvsUkLNcdpuVJz5AFHLTwjoJhcXW8ejvujUbMXPuM7QM",
  "key26": "58eXMsyCX9zyoAGbokcVxh4RuRGFXyvWUFC6JD6qQsmwCZ6QjaFFiJLoVDRFjt5pHMvpJ5Fo69Zr9qHXPR2EJZ9e",
  "key27": "5HM8aqi2KATWSS1Muwgm7ixd6dCKE1yVD658kKFrJfkcSn4WeaBVkkTgDZvUyMtSWRHVwJUuheafr3gQ6fcmEg59"
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
