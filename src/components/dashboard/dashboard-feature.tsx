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
    "4rEvp9yu9YsCTNLnqdTpTBvutZTRcS4syfayePNzjZGwXMeg4Z62LhM25pgFSpf9nr5mC9DTht8845jvn7SqiNTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9C6wDniXfyKJZrnYBPbeh1yfsyF9hN9rwzQ8AftK1oxfUvhpR754yEsDEvn8UiLv4QuPs8YVUf7TdGXZML4ePB",
  "key1": "2kUkT6s7NXTcvcMWR5s6a9zpWmQTX19CzBRBnATuwNuav3U2ZNBqS1WmuEq8vjBzPQjGkxUg6jjuCE8bk2KdSA4p",
  "key2": "5dFSU6YpJPx5UBAQnc6L7fxfWDB7eEGqEtvigd8uNMfsGdG4hLor6RqD69Gx122Q2jFSyXRKskrRsBZctZSy54Vs",
  "key3": "2MMJSqhjFMNi8Qy6UE8Huq1Jm7yZWnTrueczRwJ9YoF1XEJPaB9yhZAEdpJFtcU9sYmb3uBAYKRwy5tnjFTRLoKA",
  "key4": "5MRCdFuaZqNpKF5NGjHTVFpmwcm7JjsJJtEajCFbc3RLM7K3cdP1ww9xSJQL9qx1bfMFya3k9edXKGZWHcEAZaXL",
  "key5": "4HodPP437TPc6GK3dgVovNc6vrvXK2gnmi1nTBWfwaAPZLZ5uH5EEtnyNuYX6apw5AKj5v1gDFkqxvQhbfHuonHB",
  "key6": "58VcWb6XWFSWqgmy5sdpsL7feVbBZMYibDS9pE6boFmFq1smr3FBkdvKEK6kvoeM9BUKJicTim8Npy9xpSqziQxm",
  "key7": "vwMRHLQKRqPfeY6XEX9KGmw1Bx7EwEACYgFuaRwEtHa7SKJXWj1iN54GYSST9eMWkTW4Ra4dwbBorsaZGLPPzsi",
  "key8": "3vSLmwoWUFnYaBvJU6DpJfrXBdM9SwLrgt8x3iuss2p6EYDAgqvVhCSWzWa5XjkxQJXGjQPU3T3xemfvMQvDfKKD",
  "key9": "63zBJ8ogSfM8EAeMvZEaNK55DyQZ9catQ2pYiogUt6ziusaHwBzJipgZMTSJaaMNhe5wLJTrsA46unXNyEHHyKjk",
  "key10": "5WLubVuXBBgUhK5DVwnKjENDbE8P81aP1DpttSPJoHw15Byyony2WKdJmg2r8nXy6bKr3wKarv142iUAGqi3aTgT",
  "key11": "Q7xigeZBXJ1PZ3gWVrurU28qSBjjcxptgbyT3BzEuQHJny5mmU8EtMwEMHv3QPqtKQsNTckgGnpWkaBj4iWy6BS",
  "key12": "j8Tqd6xiuKXFxmNTmBGRnFAy6BAks7siySrzbaAH8d6Lvpbp1dd9mPQHTukRaPbjfmFcCFT137PTXyfoZCQ72iM",
  "key13": "4PuWaWokm1u23NLp8fQE5BbpnZmaKCK9chmUeqE4sKe75MFB1yBi8VvntoLBiyecGCDZQ2nrafTioVXXeuc6GZAF",
  "key14": "5wFbSLiX2jjcuTqXV2vgfeq9sSTYC7EyMJEakVkQg4jZ5tjDscS4g9oVCfJezm1G9xa9athTZzGktLfLQwwfZ4bH",
  "key15": "4VA2NYzVC2VGHULv4w4nMGJt2GiykcGhkHFRKDzvPKQFCBbqx4Nwkfh4LPQbHvps7CRSZ1VpkGVd8P886D1hhSTc",
  "key16": "4APdxYQsDo5vewqW4AzVPWJrQBKHjAnsVVyuoa4YSgrv2rKqrVMbVxdDsARoQGmuazcJyhwi7XMYUn5ENd4q3eco",
  "key17": "4CryR8TFqKccZp1ozNBcvp2XfFjYPAZJJRXk3MNHjVmtXjYj9b3U7hFLt2xzMu5uLDgeQRfTQj6rwdi7jGwax1df",
  "key18": "3PHttAPogWEi6QeZoiyxzLLo4PKKZqWh6ahoC5fSYQmwoqpae5Qio1Kvu2gvCbbdTgAtUvNbHZL7WfV17at9Zubz",
  "key19": "2h4DeMv46GhJuD2cKsrLvpNet5VUBN6zFSpcymJPG5ntiwuXsygDVfVPvwdqVoJ9GwPYr24mGoWVxSbhxBhErWhG",
  "key20": "mDZUzzuLXeJwEXQeK9bvoDjFSP1jchoSqcyF8ssyY4T4a37aw79v7rXN4cupMJoqVHS4mvwAHnhKJH1NJ3rGLZq",
  "key21": "5KxyFqDoNM8oZYtawf12si5ND4we6A4TXJvwysLfHuDgiu6iG74MARUL6By3FuTb3awCaizS2aGvFxLozKygiJW2",
  "key22": "5j2QKxeAwUKnL7eGF9Jb5huoF5wMb3ELytwwhsRZXqbZt86NWwnwzU8YsD8DXWY5V3Q3ojk7o5fK4KaFvBNx53ye",
  "key23": "2y4AQfberoJt2TSQRLmJP1T3fTTm7Ra4isMbbvzJX7nVKp94jpPEvy7hzoUuPt6W1HH8nFrQeFoayBjkNimTgdAN",
  "key24": "88iFoiFBKd6UwDNMAAUPnQbC7Ky7n5dhQD9nVswGUFZZ5udcj542CVsvPqGvWahiUDhXw2MGzJ57MtvyUFPqked",
  "key25": "2ENuTmAfLZiJ1Y1NaiNAEvCqk7kmVQKqtT3upNFSSxn3LYqmjGUyRVNW5g58FdL9sKn1PVtMs68RppJY8qm1giUZ",
  "key26": "3qQHJPKjkUEX2q41fHabceGuv89sw6M2wRh7jjDdV9v7jXAgwR1354y4osR3xMCuhSgTqXK6X5SK6vtMrvMfBLfW"
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
