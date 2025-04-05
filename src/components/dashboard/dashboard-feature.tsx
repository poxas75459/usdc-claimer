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
    "2He5LrsfYPikC2EHRzGb8HcwhE7pAHBVEg3jT7GvcuYGXzMw1AggNbbRnTkG7fFnUAsb44ajc3fZeUdA79WW5Fpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXkxUvxrxDts7V7ycK2dokoVL4ZsPAZ3GABu1XwoAkyrrQiBZXAWJFz7T8Uc1vQgn35199H8LQY9gjwXYgu4qmH",
  "key1": "2Dd2C7pfKeKm5KPeEVzn9WHBU5F8pwzfRStuGpshDcJ3yrA3MMD1WqUtZmMXFy742WwdjzdshdFvd6S5obvJRrVS",
  "key2": "2ZXi1TfcETdNttDGEnaS3wZUWiCrgWFsdDig7z1SEwnHrQa6PYPAGPU4B1mpyU3iATQwYp6G1AmgTCiyaQ8TxrJ1",
  "key3": "4AQuNT7WyjWtUbxWAVxymWhaMYEuWr9fAzixBM357fT4rrSzJvzeTfjTvaufSESKmZfh95j3UU3oqDP5VXDePvfY",
  "key4": "2hB1nsw6ShCgAyCZ7QvnffLDAKPP7HmnWNXffkAnFYT6asLBVWsUJAAj4wm1L3CMgxe1o6zpTqSMP8eFqFgnZe7m",
  "key5": "3EdQnpEDgwsDkSNcBWUWhN4Pw4H4nRXJ679KxCDqyemTz6AnkK1gxZ7a4CWf7JfJu2odxSqgfRFmp1WibuUcM4r9",
  "key6": "4G5aBb89t1pqzUJ4AF3XTWqzcxTsHuBT2bhLbda3GpEW2kyFvR48uUSx3tZuFAgGkRznAtha9abcrDu2TC1cQnEM",
  "key7": "uAXDYCPzHaCbgMxPeusefG3tRkTtNdVuMQmuyKgvwr7oSnu8VZMGSAARiAEuFcEFJCb2pFpKaeCiGHCJTUpqbLF",
  "key8": "5FodbdReonzX88bojpqYf152q3LU6A8b657hYqVuCowxBbCZCDVUoNHRM9xQ47th6hkRmzg5cPmY3tetK3aXRTc8",
  "key9": "4n2zwAydjGypG5FnQsSqGqMtsHmYdbVDQ4TEBvfwP3pxa8M79LwKbgW2Geby4JqcGmmG8MVgVwkDbCuJSNd1cc1c",
  "key10": "2kGxwWWWmkjfSU6z2bnV387XZUs7vA84CFweJKrU5Ep8hP5E7wJoG6xhj7t76ybNHVhaqomzCy2pv9JM6BAsKZF1",
  "key11": "5QFXfAj4WBxHDy5iS5T4HvwpaKSQyVkvUMvrQzumYFXTDSg9gnJE3zDZJRXU1Ld8bcASVBvYiJLEh1HKiRPmN55R",
  "key12": "4G5mVekET9UEeHJxyUP6M8EdZa8XGp8SwGyefaBfkkAWP1VnPYR2b9dxkZLF9czKwKyBJDhrCx6BbTDcVifq3n5D",
  "key13": "5vj9mEHXpPmrb32uGwXxh5x8ytF6S3wpF3Bg4LToPBSByEGUhzVR5F5qXVwMx5vmgnkP4PWtdPUVmhrjek34yDe",
  "key14": "4vdjjLZesPVnAqNdA4CJfwX1KK8gM4pQkY3S6m5Ma5xNiA4jaRNMytnqt4sdnXc1kWFpgQmvCirxFVARWh8TNKvp",
  "key15": "2WWzXQvFmgoKj6sSPTJbDBWuzAPgvD7AD3mTwh4rhkXJHqwX9ZoizCKMPyc4ScrtG9pV1uQTQFpx84Fy2dfhe5na",
  "key16": "56hgbwV9WqW8StgG3LGWd94h1FePT8Q3EyTctP6GaEGtqQtr3mxtzqcXUdkFgkssX38gh5JTtF3UbGbakQo5aZE8",
  "key17": "2kNzg2BUXsuVKaTqxeaqngZxHoYUiPqbixYXCBbHHp4fXHFhEjpqpeS7XHABgkFK7CCWBkhMTY9JZfQpNUqUZCzY",
  "key18": "L7CJsKYijpP37U8KqYroVkvc4HadpUNYNF5CnKo22TXjPsVoBgXsMbm5bcdSeqtMPtdmzwttFFufsFntGdGfE63",
  "key19": "F3aKGGQbzrY2SvCH7GojwF8tuAe1Ut55CqJ2QcEJgD4kYCshvPWyFzSkCgfXk3eWf6anKvUyoTnB6KgUewzFahk",
  "key20": "4z787z7Nnw8dbE1WM7oerMcPw1GyLLgwR8CVvQRoqzgbFysoLM7Qj9ysdigeGabKoZtzfQS9HYy5QHndyPyDjoXq",
  "key21": "5WjNKDCnRJBxCZ8k4cAxdLJovM6riewEzUyz12TyYEzUzDKTi8xvXwvfbZty9BAE7EkdHaro46JYWReiaLu4u7CT",
  "key22": "4Eoc5KzoiNduyjofm8fhVBTdmYAtadwMWD3VabZcP18vZJRq1CFQhTRJQczWdUHFtj8uuETeJNDBgpnfc2Rbsz6k",
  "key23": "2is4Z63byNbXjsiSWsnHT9QvRSfRnE1tZysr9HYX6beF6PZRHm97wHPxdULPuQLhBBSHXeX4GYNm2aMZ8CZryqnJ",
  "key24": "4yikEJCPHZjWtWNe7euut7eY7Lm4gqu9kNkBtTGC46QxYMDHLxMFhcjxZiX5US5noZjSkr32mQZchctKeuMNMXA",
  "key25": "5Pxtdeph8RDLBQvJ74J6gDcJWTZF7L4pu7wVLfm4orV86iPhXaftRwMJJTy7mWNcCfuDYmLHEbnzrEn8BMU9Vngd",
  "key26": "58c1S14T9pTnnstfRJaSD6RAmxDBpc6tqcJiTfm1SaWLaBHdhWFd4NQnHoQtS2MmxbUmhjnbpeeSbkwTa8RKEeA3",
  "key27": "3wu5n5GdrdgtT1QkzWt4QyMhkpqV5BuH5aiwARKaWULe9uWwvjhvFxrXmL7P8zurrNUxhWd2J5ydUATFfuX2urei",
  "key28": "3HRoJC8NKktQGCFwH6gsW6qaFgpt2Ub5bCNB8zZevQ2U1prJojV4KdTbLm8BXrijuNNVYvt5cTg4PwuPzNyzHTcK",
  "key29": "5YnyeMgsNii6VCWdfBVRVTxQUYSyc5VAAwn5ZnZh2mdteFKHYiyYspkvh4wFqATSq3ojTUfd163BXoeRfaDTUbF8",
  "key30": "2yg4T4qsq2xQv7vTmBNKvggSD4JjWazZLGzAXipMEPZNGqc7oAho452eufSzGoJKYR3WgT2whD6Q6Mf7NNqsMzg8",
  "key31": "o7JKWBc1wKccFKadAPvfZv2MtkbMqESC8GfeDVBM4nbUKKK4sieoDLGdPRFQwAeK162DXgwwPccQnY7h9ja365y",
  "key32": "5PWYud7QMLxsaH83PU2Su5QSPVyA9qG2C77p6TtJyXTCVhrwmTeUG2bndqXPvkN9r3GV9crXeyVgnkEFFpLqu3zc",
  "key33": "36GW2p7iFqbCiwmHo5RPxxKx4VZXHRCmFSiSiefdWH7XUoXqoKtamsCgpLfmRSiqStFwdNDUxBf8EsfeHXRLLTKd",
  "key34": "5mKji2x9fNGNa9FUHE612WwLTofStWG9Qtifm1PoXJngYEjGzTw97jy6ZUfks81tKgyPgG1vbFVpXtst7JBKZnYf",
  "key35": "3SCeK5t2ppdN5oJLPLdMJH53PZ2fT8PXCRm7HhBJskMpaGKpn53avX7CRmmshCGrzjPNFdUBhB9LRg4nDDYunjf6"
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
