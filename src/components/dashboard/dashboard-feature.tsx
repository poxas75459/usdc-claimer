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
    "2hu79MbxCugWghUK2ydbW6vHT5gEgkKMaMnZjQxEWT9WX7v6bxYPGHaFmR5z7972tfrEqZrDjpCRxrfaR7Jp7W1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpDbjYZ9ksmcPkHEWBuaWqsuCLKAbxP94Dv6fJc36zfgV1rPCPgY9a2qnefrWVLd2foqAB9DjaU3zRTgDE5aSos",
  "key1": "4CiZKRwSQkXnAHJ5NJa3QBGHsFBohKnNUMLr4xekr1ck3MM2VKXcspQAUSK4vPtejayjb5fJJri3fzzAgLeJCano",
  "key2": "2ywpBNibudrXWz4CQJEQDEDUPhAD6ghX8J3RM2eU6uB3p1mQxzN7mxSGuAULf1ujTT9NxB4DjfCYZQNJsMzCbZgb",
  "key3": "3MpsPoE6YF9KXXUBvPKcfhSBAJJH1KKhDrQv6VF9KxevHSBtdATMLgDWn8BpXpiCXPzvtdDm6NsMxMwf8XCmCYed",
  "key4": "4ZLB45NaVaboYyHqkn5BZKpSaT3bBDnDntGGUpYr3zvK75k9iYWZKyfgHU4ibuwGsyhe8mqtQgkNNbH9QBBkbdGD",
  "key5": "5LQwMYBbSKWp6RTgiTA7LhVvdQMrB5R9rtzuXJs7VvXn2PVJwp9FJdzNgQfz7Nq5TYPGJYpfiryQD4g4qAwzQEA3",
  "key6": "Z4GFfR4Ns2cBTAPnjTCS7WxRCg6YKK7CManhQbzTxbLBX6GkdDjb9t19gCKPi6VNDkyxUkSku4RTo4Q1xUGMyQt",
  "key7": "67ja7mQp6NY6t1Rw9FR48LxvDdzSWPbx9dYj7WLqF4BFhfsNBPT2FbP5QLPkfuoQYCzHkzEgWc4TJFyh4qovh87P",
  "key8": "5ZeyrcZgGREvyHAFGBRQ3Kx7gejENfmbdRdNrSHiBuTVxmkjXMicVR3P8HHucM7eJPeqKUzcofYR9ToZBju7Wkpy",
  "key9": "2zWf9mo59xVbKPFZLpM7z8QEF4J642Bsb8f8FWcnYJFCQN9J12wc82U3Ssr6PpVDhnf4sbS4cWLA8U4eWcAYoMfN",
  "key10": "3KMFU9M8RV1YD91TLozspmQwPW3kqNgrQbtA4tae88GSaWSSyAB5DW7VhXyVSR4yL5iWdn31E1sPpnumWfeVbr4K",
  "key11": "2TZZpxndALGBCGfx3hVWPhc9FXotaD4mh38PYDQRp2xMKjx7J8drcZC1H36uBZ8BrU5jcgYGZVHoVt3V1iur8tu6",
  "key12": "6a3M65AW9bvDr2hUJ2xwtXx73YrjLhmfhqxkt3yNEYa3DMHxsrHgZoabJU1faibfyZBYdw1wKd2SuqJhSPfUCUu",
  "key13": "4NZLnpTXqoi31KpKJrQDHzy6T13W9yLxGyboSsb1fJUMFzRmD3CrkXqPR2SHWE8Tfo9zZf9UAzr1PzqDRZQv2Mgb",
  "key14": "58T4ocag3ejjQzEE5DjTDqAQMedLTDmAytw5AoPKtGd7E9wr8CPZxDpF7RVCaqJofCV5RGWvUmwD8tz5wvMYYCuY",
  "key15": "65j99Ku7i32jJWVCH9dPVXJ5TU5f5h2YkHVLNHTGcD5ZmQzjF5q54u1rBDQFHCNacMFNVRUr6YXC2fej51y66T6b",
  "key16": "44Ffo1gveyjQVaiuvCHjgaGQp8rVqfjh5VfTrZEJnJzSRCGPHBTeVBPwrjHtK9uGFKzrG8AZHPUEGUPFp81UAPJh",
  "key17": "5Bvwjye49qBA1rnuCKuJNoFKpJXqaE2sSsoFAGPUR7yAdBubfZHz67hMf5WNQ9u2zsGv7tRek6YnXsrkCMQWhadz",
  "key18": "24QvHgus4vipUpghmrNtUTHHtYrqU7PPLRAAndgP6zqhjMgS77MRyGCcXFhokYUZcTeWbQWVfFLQE1fVe29bRnzJ",
  "key19": "4u7fENJzq9HgcGF4dV8NgL471ahaamGEYL5bMhn8kUniSEy6eeFkZxujsdxwUU6ivqMJ6kzQp8BBMSVtHzsNzx5J",
  "key20": "2VEnPKgN4dovwKkTTmaWFQdV3MuaodFNC7WtVmTcH8zWDt15YhEKKkn7NP4RNUrxE5Wn8KuLyzRvr9LgcCudaD5m",
  "key21": "2vCiicHzicdVxqroy15YSMFRej4sX2wwUyA1tpkLRYdZSCpPEj87aFfiDCkFMt6GRwM8eY9SGatsum4YZGnQMfVd",
  "key22": "4c9YYjg4S6VRvcNf7CVfG9AkN2an7WL6hu4uAsdv4otKrRTvuBpiREUsvs3W8RhiPPCbAcfXr6zmgFyWiSkpk8sb",
  "key23": "5D2VAzt24aS9CoMyYcwigWg4SFvT2m1Z8Vj9Xp51a1oV2keeroSRSYy2Z7S4xc5W1J3CLkap3c9KEf7rWd3BKZ8v",
  "key24": "pAqavQd1SFDNRAf7cgxKFNhJCf6fwxCVa7TdV1paVFqzcN8Jxr9fUaEMfibkzYZYVrxbTMyqpoCesoDuHRU41sJ",
  "key25": "2yWLDHCwUociQJqvtvWabf3suasvchwY5hh4CqHPeFjfAuEBtNDprnxtM7iB7gbMQqHpZaZEzp5fsa8ee56E1Sct",
  "key26": "6467QWdu2k9BnNcsWutNJf8TryMg8fEGwqiEiVK26XMbpJUCEaPdjDZP8GicHQNPLdffB1oCtEDb7k3qb3dT9Dg3",
  "key27": "2PRymFXr5cCuHSAMXab6GPCofL4rw6iuZc4tBNgYez1QEMm3ZUfYsPoc6vJV7o2CLrxdwjBYq67cbt35rcmFkNfE",
  "key28": "CqS6dXqHvGYmn6Ya334v6VXVyVRWi4pcrD9kd72u9xD7238XeLNkJ1G9WYAYLLBjg6A5Efcmu7pFczZxdGBkvLT",
  "key29": "5dUQea5tna4f2EzJtkWJS2w8KLUwdqu64zJDMCH5NTiJsWJCjdpKggRtBChTWDdVigKJBPe4EaE2PGWaYr6tJszj",
  "key30": "5zxNd9Kc4TTv6f9XzSmuFQHtvUAYcSbkYqvLa8VTubYrS1dE1RXVTy3D3LwMQ7Znp9eAAV7KqyFvhi7DgHsaaLuz",
  "key31": "5Y4j4zCnsADe5vvhY8RovX7cqXmn1pecZBKJ4rEwZEj1zuYnvpzu9P96L3ShQG2iVfgbwD15AQe5o2JpH9GHxREy",
  "key32": "3UZoLycpXtEK1VbcKnJmGKopXnkeDvShuKLUF8PbUQS9VoFWzdHJ9nKsLByNjyutGFGjsjKmMF8icUBFoENoq7B9"
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
