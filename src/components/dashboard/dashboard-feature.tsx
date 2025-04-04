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
    "3LAZQR3EL2vnspQmn4QWK7dNkMAJweeaaKFYvP8aSxBdpaqEUZfqRMaKTfnhrfw6FqNqGFSYmZExA6CvD751MV8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERXCgZWKLBJWh8YQDS33zx7ZyGctU4tf2XoyVwpYNyFA9ehpiPvBHaV2UJvbRBNDsfe8qSLfakTPqTuYZrjdxJC",
  "key1": "2N6DoDMXBZSfYoZnMumTkmdSyePtWzGhGPx8Gd8FiyeUZtyxh6hdfCjJQqewByp4HU7ZBtNnMo24UqFhAvPezzd5",
  "key2": "5Q1FX7kX5Ru9PmVwrLUZaGh84cuHVibbpm67f3DjvGfsTWEYyX2sBWd3oao6K1mkhQtHN6PEwUyLv9R5VYRrrC4U",
  "key3": "2VVLDkRaBCD9zLVTySi4jaTN7NDm8vf6uh4wDGjCk46zW6yabdU83GNXwDcKSdcC6JXkypouBWvjKz7giwChfQ76",
  "key4": "651HoB5kGzTPqfnkCLhBoUYZo8BkkCswegcbkYziiiwS813Cd3HpWimda2STaFKy2hpBhv2aXufvikAMrbRkSvJ1",
  "key5": "4XorD2AQyiD3nGhYCnaNCEGuWikVQHAuWTcsKWgQkv6if9Yy5RvLdJXFm4UpoLDAyYszUwRAE8tK3c7pHzc35dtJ",
  "key6": "Wur6j91WkJWuWfa3yodAnUasT7Apu6wv9DGtC1bkpJQZzhabHXPDvsz5oWt6B8frMDXuwxUacZwgf35wPRH6iGQ",
  "key7": "5JUa8vYeVkoRa1ynpRtmcsyfjLvMtYw6yK2zmXwdo2myN3ivVRzNLnSq1bmBUW99cemchZtyQgYydpsCxuM6YaGv",
  "key8": "sGZZcs7VVJz9AxsUuW5f7FRcifsnZ7XLJCkDRNDABwQayjfEiVCAFwDptA1h2NJPchJV7BuNcUdhVsSShaV2WXn",
  "key9": "34dvUyG3TiFFgtxKvh6jPuH8WV7kDSADU6v8g6D1yCa9RNzVBHD2uEpcuL4hoatgf7cUtZNimuqW6h5VqbvY4hKP",
  "key10": "4cdqs9HuWLHdcZbXBE2d7K8GybqyHua2VTPkoMYQgT8sQDb8c9rjQJtFHfygMSzziYhi4hh761suMNhH8CiJij3i",
  "key11": "4wJLZkqzxP5mKXUZA8TBMkxJ7worD3LSLKmkaazVniccv4FCdJahVrz9npKzwmedhD3yRgKai2Uzn451ttexDBFX",
  "key12": "4k11NxsDYEyhm1tXJJSBT6TyAC9SKaCicGQXLibRs9htTXgkVd7QvXcffMcL9XXXJYhMoWHBECcmEJCkrBfG5hMm",
  "key13": "2yLzc8CqXXUXAw9Xi3deunPbG5Yd8c1QtB2DgUwr6PWucyoKgXijHDhUr5VbmbiDiD8nVL1siMxE7125TusiGVdd",
  "key14": "29E53noPDJ7a1Ms3gyiTTbZsrhKf5695yiiKVBo4sG4A5V4bdpZCuqwUFfj2z8UnQjhmGkEPqpW8fMZfhQBa5y2F",
  "key15": "21NcUxPcGyMLRAVg8LcRXD6gqGxKsTZBYdgd6NdBJruPRSJgcEz5osXvq21eQZajrdgzUhZ1Ntj5VzkxrezskdeY",
  "key16": "5YJzp3c2jKCuHzkNxGmZCkmLZ9Qc7ksGDhnh2jvjkLU6DFnJDf4sFdrM8ToELQanoSm9SoqB15CCFtErPMFc3Eog",
  "key17": "4XETz6DAVDiGUD98QRvCq2TuoCB6t1zjAoPk8k48zLeMxFYj9HNhzAiTX8ffYjRzKpijWfvsvBwzGJmXGK1jZ8hL",
  "key18": "bVmtFnP6mipeEQ3FwrcrNw8fdiuGuLhj3kti1z5ZBUnM6q7MqTKxc43CZPJC8X3sttQyuTa333qDVmhNpehfgue",
  "key19": "64zNh2eAMzX77RPtPPFGz6XP12eQUJnc6VWvXuGF2pP77CMPrF79WL99L6bZsMmxGTVT9LGmptC83NTr6LLfvJka",
  "key20": "22ozc6Pyh1qpKRY2cuaK6DZjYthVzRjzHE8v9KkrmLRJzNwe5ALTvM6UQUXHw4DcbVwUHBLgB5iLo1VLtoSxgrn7",
  "key21": "3uUWgEemWyqF7aUWFs1Bxtid3ADbjEMCcgFNcLJyu2UF92YCyPgGvh8djKyDeYLTkHaKZqgV5uZAHnn9JQtTXBWj",
  "key22": "5tLLRq2m5XQbehtqpe7EJGQ2PXTBE3bpCGbGDJRF7wHa1zPJArsTVWJGnYsE2JPu2RiCaheK3zBxtV7EgrcfaZFt",
  "key23": "2Gd4rgtmNgMwhW4b4sNGX11wPV9grY2j6mTymaxMttzvF2Di2EzQEoPRKVB4dQHYaywDwNzAQ4LksqCZzGFQZJae",
  "key24": "37pwdXEHtg8HuCqKqiar7CxMeXisvqaVwxdMufUwbJr2qXR82RMipGmWMUMjUpMbijVJ9M4AvSnWAZAiVdrk8vfp"
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
