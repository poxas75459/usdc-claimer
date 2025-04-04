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
    "51poYbVKxZ9BkCQiytPc7BnkroUJEeZSHzfMcT5R3YehKeR2HNo2fNSSe1Qhr4PyD4csNvrcvpe8DKjfnrQWmwb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qmy6WaGtHekPz9wfGsAmE7q5CKt1aSuKcFVh19W9cRkgVCwKRs7Aij9278zs2FxqYS9a847Zk7b1JiLptfBKkRn",
  "key1": "3pMKSQPjKtF4K6kkaXK2ZEnGAQVMckts5uHJXsR8drncLCMLCJ2cNKRLNLmVBx443ZEbArTDknvxKQs4CCC7wwpm",
  "key2": "c9ovvk8L2JTp7X1W8kkgj8vxkJ723XGV5RN2wE8t3J1RUSfPR9A3jKCu264EXbF4bhX4i5iNmaH8RJLYQA9zmTw",
  "key3": "2d9KQ88wvnF2Z5jhD6knoFjgLhRJ8H7CfpNT82jDLBfjtf6fRgvqez1VgPJ5F4d1qkCXSDPmmw1aYLTogNGHf5VL",
  "key4": "2SqF3ognJrJp3DAw35t775S1SNZr95qQSdHsB69aGaxN7hX1Xe7NuS1Nu4RtSsAS4qdmHsrGx9CFMqBhZQUym6ax",
  "key5": "56U4EMZdK48Q96akZ1r3nXkJk2nzTbhHoBLYHJPW4ThCuHa32ha4oKTL8yj4KzsaA6jGJYb9tSUi9rvsRpqncQTz",
  "key6": "4HU3pzLbG1tnUTPmVZWcMvapVmSSbKefw1jA3xAhdp155k5Hf1nbTKVrGhGxq8r2UuTMdjxPZVZEZn7VpQQ2L3Ye",
  "key7": "3npKrQwhXrrbaWHU1WfBuFuAxaKVmu8KnRr38ZYEbUZKSEni1EonPyQWScxiTw56saDRYi37mSX9eWTN3Sr8YMKj",
  "key8": "4iqBXbL5rDGMefMB5gw9yiqQ1jw7tWa4bPDMvw3cpKqSYJJeKAP6SJBrGS8p2nEExNAs7B7NbjH8gfKS9zKP88wi",
  "key9": "JByiimrKtx7jnK9mFR3odLMsdSvJ6H3vbRFnCbehs34u6tUcAwvUGJSjbwZg8ndWUdsgK69zQTYfASMdbVJiLyC",
  "key10": "5fJB6G9tm9H8zCUJVVxrZSo1n1VKS1fb6oVTFPizwivTMGscmZz8QffdBiFQQVR6yzah5FDyen3MpUQCPwqbNaTn",
  "key11": "5XL6c3TKV1SXyTNvnm62o3ojJwUpXFdRPD95KGBThzad2kmYAsDd7jsBtG5UJYoHfG9Z6XMbq82awUZKK2DoFJ1P",
  "key12": "39vz3xEHHmNLqDDfpKx29skzCcVefeJ3CpbgJqrZ3pFNEZxbHzD2bHsnm6Evgs8o658VuCmZsi4nouohsexTJJLk",
  "key13": "Sofs9aTmrnKdVPtX32Qjd7YtPyt24pPd2tWebyrcdbSob5WUbRZG5Pr5qv3muXkSzgdYrUXWYjF9e9HZu4KSG9q",
  "key14": "4rf5Tq1dxvPR9M9q9MALDpD9L4jBEgWZxgfuUNAejnvghXyY9g66vYnYdjAnqZZXMQN8FysoDJszX4GPX69P68YF",
  "key15": "3jjTjgucjgcFR8QDGAvpXbCRkah3dofJ7cW2ZPxY9MfewLsQK1kMgdee5aKKuxZEVhhSMHzWYQxC47m8GBPBLx5y",
  "key16": "2yGrrjj9fqxZJgqRZTg6S5qmx5jAoMn1ZHbxC8HFHQQyRYDaRc5Cpo87LZ3f8hmm83FPdHzU5oovoB1UzawJk4of",
  "key17": "3JwomYJNsyMVM3DjKgUVV3jeh5iorsJhziqitMkebxMneVUXzarDH2Es2ad6NMeorLPx5YoPCVD76dCXrC2kxFHw",
  "key18": "4myXoupAJW7vteFgjz3TD3rvDFxpFKK7U5ThPjteo2HQ75YmH6awEmE1L3XR23qf71BjbYG4JWreNYNDUJYSYku5",
  "key19": "2LZEzqbGq8RuXaNqWF2MZtkkHEWnDHg8j3pj2XhusMzDHsDBWbTxRD6fjBay3eWyC7PLADvd2cdUgnpNEdVyKp3h",
  "key20": "3mEw51sDAZRebLcAc7tRmY6wFqLLrkPKdCD6GxKyAjgfUaKY1Z5JUDVMyH1fkpkG6vbDzy7YumeJaExHWv8n5pXc",
  "key21": "2uSoa5xPhhNLrZ2txwdQ1NrCr4T4g4XLNhgYTRFdiW1T9wBZ6zvnAFFagdVJAAfRtXKwTJMigddCGPbdEVFziq9o",
  "key22": "45MvaFMeM2kES48fQKm5bZ8WMuPwtcp3eYLMoguTL6PWsnex5BQbLYbVw3DHD9SzRpKkVyvyq4vmLykorHtEvdh2",
  "key23": "2kUr18atb5mrSqDW5ucDEvSBiSLoYep6zd3CnFUCBipGJWR6nb1uhjMgaiP6q2XgWVECU2jT9Fkfroo6R6SaCYPY",
  "key24": "5PrgwzpM4kZjpYGSiyxXZpYN2RmPxQkP7v6bhSAd1kHqiQRbGPBFULFKGEMbxkb36BFtFrhzGsa64QECu4hmFXvu"
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
