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
    "2hzG4n4JNyWBRJitfxRWLDmtU57HfkbZy9HNn7nKF3HhjTyMtW5s1KvuXrQ4zX1qi1hD1BvQWTzEJNh5GWrvoe3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2FDRASjzkneLpaWABZ3QQbDTeNuiu5fvrRjcKU4GtxFkxCKmH7nVe7qLba6dbCwHtjCH8y4gsXJ48BErQbAAFQ",
  "key1": "3ntsa6A2Z8ZbWY2atoy4Dk5sxdYw4KbNZCHwQg8fTx2zBr1QxSULXBSfimdkH6eTxs9MVdfriB7LqpRuWxHrgmTT",
  "key2": "SCDSUsNxhaPvwWj7xQ2VcAAiugzsZnCgHU4RwKc6kJUuEQ1udVXeiWG71dqMUNDFkJLfn7C3cUAjH5gSrQ5e1UZ",
  "key3": "3xnQ6ybyvSBCm6K63gNvB82jBGdqbeywF7p9X9G2ABmGaGsDRzag3JdLVNEj9B5QCnj3ALjutdJ5r4w5rkBptrxo",
  "key4": "4jd5evrfmJ6S7xgTrireHsLsbD5Ha8CC4STgpaCWncygH5eAqPcJBdM5sAPVt722wt8ZBQRtZauBFdpmPYPV52M3",
  "key5": "4hpmb4ni4n27daJbPB6hk5cmCRoTA6KGqcNdu7gjsTZCAHU3izLB38bRYUMTiC5XKhJzo1zzFaHtshG1S2hREwhk",
  "key6": "5d1dqbVWGnjNXmVVXv6BKo6AoaJNWEtn9EnWXepiKqm32U1hWi6Uz8jnhmgL3VqWxM6kutQuCjKFNrwBBvZsdKbm",
  "key7": "oNAvNpdcAJCNHtzcbAb7YMVgtZ6FWQefPNemsmmiQr5sXnXAmWcERK9RfKcK4a9gpCcvG2VpnYcntg6vHpMHfgV",
  "key8": "2RWy1tntdpGtxXma8eYej18FXraQzryverq8q8q9P1fwAnj8EHM3gdzd9ZoMiUYamZAtvQh7ftEeFzjabgZMxw5V",
  "key9": "4AggD4DXweHve1rUnvtp1z5tnZLbsQjQwafseZTSHccLPcSo1rSpw2cVR6yLYHforL38ZS2LC8Aa9mXB5CXuye7W",
  "key10": "FeMYwibcrresgGepvfUz9pFwSB3Ha4AsZqZ9e516uWZeNHWgBjCo2mH3kn8qgR9jKmouRcosqL2c652J7KScvLc",
  "key11": "3AiyocRHD1aYHcnB9BwTkkB9RnUbmsurGBWuZYVKFKCnzKEx35HkpEXCM4zZBE3JmTPHsMr4ozheSNoaBywieWqd",
  "key12": "2mJfaGc9uT66gZVY2dMP5yjAewRWQMsMvXChMBQWBjrCgFajkrjQ5T7Va2TejrqfUrhg5aWxme3C5ZXqDqijr1Qj",
  "key13": "4FZmVtXeZmeeYDf2bdKwdj2cD3LL9qadrKE1y73Gi1SYLtuD9g2ZfAFBcpvYrtd6u8YhAKqFWV2SEQt2Wtmy1JLn",
  "key14": "2x4YxAyudX5xXENQeSZSVLxcA2x8Essyh1jkS5iTYEL2xhtyHHdiTyxMmgRPMxsPJGc9BnBgZM6EaukVNagu3uvV",
  "key15": "4pjzriRM8QY6H26HhE3HgZdEHfzTcCzJrD2qGVNnQ3H6PtXHghAefxnzwntUhGqtwbgEppXvkqy4v353bvV7td9c",
  "key16": "Qp4ci5W49L2RMwW2roRhMaFDDi2y67gtRcFfmGhfCqdUbLLpegBFptooLPLBYaiq2gJ4kB81Pvt1jMsYoACXrk3",
  "key17": "4NW7xV5szas5AJNPm36iWRdapwmuFu5mDWP9pxc1us1qCCHo9HTKUqHuKMBLJSyBFKpMYgAbUG8uSS4vEgnqXJXW",
  "key18": "3YWDRXd4s6uUrsvYJ1Gnnrimx4Y6QKrSSvUgybjEzcXtA1uPrPeYjo2LQzCFMCi6mS6xKhTjAmZ6UaqBDPuYTauY",
  "key19": "4rkXhtZKdx7wKm3EJrPRz2G2s5q4rHunJLiPjDEZbCLBdGySJLUzw8dHySFrubWfdXDLPyB2oqCYL7KddesFYwQk",
  "key20": "5zCnmRaCVAvBsoWu3vEjL9MgRYp1pXNcgPamak4jvQ7XiUnJmy8DFUGVbxWnZs53rAsdsAePs75dKjxzLCsgUKXW",
  "key21": "j85CpeKz6iBNMcorHAAYWyodQZgmE2dHH7ydCRNQNCzoK6BGtUdB8AZg48zgLnHVbj9G1QW39RWEtVhgN7K2VdT",
  "key22": "4jjuNAdS6MX8r9Kcxb3DBoMsHeuEgH9TUgHyfeaUFNpnHewb6tdXgvaW2gMiEGnjCHpT9zaTHp1HHt6JxksFoycV",
  "key23": "67n4nFezfAAuahLYLDj5XNffMUtTyJT7hQwT8Nur4PksbQGPiN8JNEB49u7pg4sbEHR27TbRj2ttbhyqx4iQuD5H",
  "key24": "3D7K5fG4wnA88k4jjWjc3pjB1nDL3AHQKF2sNbqHvd9EgTeewPTq93v7ZnHJCUDkffH1v8ChYdLse8dCLTjiivW5",
  "key25": "34k9uocGmWRX99w9ovmVunKvLjVpztCCvV9Tm3SEhbSPzTKmpczXB7rCEhFJPctcJ9Pm5jobWnDyfS4KVXtnum5p",
  "key26": "3oT5GxEJh6qFeQibDjCG8Vwtwxvk8wXzmJKfH5FUHhniMcWdUPhRCudtHJamoKucdhVa7JfoTLyEqKdrGgXTdiPo",
  "key27": "3EqKsGYfzy1CzZihxbpa5Qm4R8RyTJ3E3L1Eje3iucMsMaRTTYpTPaKXaVVYnpwpez48ZdP2GwemaxjZ7P16FNdy",
  "key28": "37RN5mLy7n5AFCDKVQoH5BvwobJ4gKX1dgiDa4EAoLxo5C8EhQKvmCeWu6rADCjyaBqH6UGH3KR7HKUgDgrZybLy"
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
