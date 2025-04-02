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
    "sNGM1vEqW4hkxDHF61Yq97hV9wKCUu1GFyrkcAbVwP4rikfags8dt5y1VGfPjNm2x6Treu6iUUQjThVi6uUUN96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4Z7imiaBkbuV75notyVd3Xdy4BJtT9HCWU9FhGqthF3smcLGWg3vCusmdDoxdhFEa42pZ2LkNELNFDVDmvzQuE",
  "key1": "3t6KhT3oGa4VACGLHfWMizgbTtRrzVrFwoo3R6WzStFaDG3F54rGMFBLQ8LeWtsCH28tsP6RF6PoE6u81CzS9kT1",
  "key2": "5JM5389cqk4TtcBhtBWJYo5pzKVB9eiEVk9jpyzF7HUBkMgsXK3uWHQLJvpxachNqeeB6RqWYGw2ovn5iaP1Fa6h",
  "key3": "4reUfRGFm9ewZgrz5u9haMJcC1JuyGy5keRSjVissPbTV1dQG4gRQWPJkDKGBExG5pRsjqgRLxQ5EfQbmZbd8icY",
  "key4": "3nWPraztsdqB5HJNejMVrTPBQbc6xV9ToqHFxoxLZjQpR7a8iAsctzwYD3VkkbfEXug2X8rFoUxcgGr2qfGPCGrf",
  "key5": "2vZ6AvXTZ17AYqAjCsBzZwxcCkVvx9AbN39LeunBz9veMHyxgt75p4cpCLWw6Q4ADo75dZirKWsTyscgGZ6LtJRz",
  "key6": "fD61YoQPUgi3KsZzEH25TDNdPDaLWN5K2BNvpcwLgosWGqQv5cNRe6CF3hGa2nPT9HqgdUF5pxpDSDgTU5UWuHe",
  "key7": "2RJwY3DfAFEtKq74WU5aUaG3fC4QFv1UgGbFUdv4XvswTH2UaR22uJ3JH4YTcbUZxhj8xC4eTHoQQc3wWeU5Cgp5",
  "key8": "MfMcaagg8MPqT38k66gzU5iuQDZWSBYPNEFLEEnc9qK4BGpDxokvNQckz3LCyCJVykDNrkyU19zubD5bizza987",
  "key9": "5Jnp3XaWT8xDRnmmjh21KzBCC4wQ74LyWMCpFSyJ7gcfEzoaTEeguxCzXo1qjE4684st5kevnhepJMaPNK7Ydmsx",
  "key10": "4EiSvh9D9WFZzsW4bYsjKMrG61SYpLF24iZYZtchSrFkqNebXZqDaES2diLiDMUGGj8EtmALAHSFQMq1AiTLpf11",
  "key11": "2RAepyp5zvdXkgZH4xhRdEDno4UrDzqzaWQbjWLZSNZApXryi9wxGjXq3N952GCnP9ZBg8wLgJtfQhJGH6ZjHZhP",
  "key12": "My8f439m9UvoTDpeAsY8Fjsj82RMPFZZzBRhTYCMxCr1BiauFEiKw4mkHjeRGWLNLrJvggD2XwMYhawSiNqH7Dt",
  "key13": "2QxByTDMdF3M8BuqWPEcH9eAujQDvuXgvbVmVyoC3MaBoc1oXoky7WgyWcvX4RNc7zryrvMaPFJpM1hEwLPtDHmY",
  "key14": "3fMw96Zr5eurnNt2RX8BqQ9yyCNEZG845QMQHyeStp2HULd4hMHFRmsA2YbD1xRj1XMvYRWuZ5KaZ4qBusEHSAhM",
  "key15": "qZSKxcqoPLWg5wtV4Y8rQvKBrxgVz5Z3cZVune3hsxt5cPVQ7EEZwbEL3wAzRcQn73Bm9t51p3skfJctSLTxD8W",
  "key16": "5rrqF4MMBh9eb5fQXjbP5GHq61Yos4LMorC4GfRUcBMzUx69Kbt8HrJAorm86p51pPvxB6z9o5YXwMkk8yVxNn6R",
  "key17": "5LHc5vZFZjkuwL9GGoK2EAt6cTdR41C3gi97X5rZMJhx6ZYKvcHTXbpTqkbKJ1GvD9F3RwD9mXLVvEQiYNkHUXbi",
  "key18": "45dkFmMsTe6oH8zwt3rWPufvkSRFjtPExtNtHa3bMQ5JmpnWivY1HxoHH9AUnxp7t9fhNkUDEiRsRJLex6avAEDQ",
  "key19": "2FJmG6BPnswBTw5PNRE72AopDUSLd82Y4C6CN71sc8VrgAKV7kB58mR91GiwdSvpUxhcrGWP6eN7LunEsQPGr57H",
  "key20": "rcFEoindBcq9sF1EdZHwMUtedjX4146xHc5WmupMWZrESYppJpVEhbXWNJG1vzvwvtLbgi3x9FgWCoqpodvZcJq",
  "key21": "2BcoVKzcyc2wkQmnUkDFc9EwrdL7VLtNygS3nGAftKhkEfAk78bcmbTFHP7dxFaPZXGKFGmyyq6zVCV9uBiwmjHq",
  "key22": "2C6ktcDvpq4RH8g9xSZSJ1mnAtDFBDQ9MTHUmoqQy6Zb9hM7oGjZGph8qYcN1dsf4yNLwwNm3wNjtALBcaf7B5UY",
  "key23": "2dqzNnbC5fabJ2sm5MJ8S2yqtwbFgEmQGVTsU6hNy8MbScZYGXZbMCRXGcY8bhX3dkoaAE4vHmfjQzM5SSFiSJik",
  "key24": "4GUPv2BQ2E1dd5TSG6bCCTRPzPFvPc4fDGBRgVAxsqNnprEq3Qkugzwr5AUJqQ4DGgnkk7ai64xbazQqraSMyhBb",
  "key25": "444YzTitou2PPkwWBn3wackQxVL3RjEuNWvmRqHFnqYkyy4gwZtxW2HEU9f8AaDsv7bSyg8szody7hhURZ6QCNVB",
  "key26": "2462C2QEVYKXGAeEbtJYBxCp4VfKGMaB7CjbyhSHALwk8FNdqR688QmSUwhWgFicRp2SLDQQoeVCZhssu98Fwoui",
  "key27": "4oCmnKWhXDu3Xs5JDtVsjJgPRVXqJQs96tUkAPdAkxBhvnGr2PVqbySmqqVCccxkeeLRDZK2HnPrH9zReRyZkUJ1",
  "key28": "9YQdkVc4885HWA7AXXZbJPkK49HPBR9eA7AYzpL6ChZdfUFpTd4qgJDnFjwuihcvz9Efn118BJSkRicr99V2Q3w",
  "key29": "5BxSFyiJJmuoxERTvF2fTmaeARwNui9yyxxFSviiVio6gLLY9UkuynSSNvSkfrynBo148Dmefc9N7UNfGdGFuJtd",
  "key30": "3dH76p3h8TBHPRfEnGyyPRgwqbLbpzwmfpSssr49UQ9wRfUMbYC4ZDJt13swStmLGbh3wRvd3xawViYXbaTzCvBq",
  "key31": "4xd612QgyoAHLWHZqfyZ6VTyAiLCKsiNn2a6acuTjTZqmqLqwfVadtrqhg3wmPB7q2GcJ9BKkwuJLKqkUdEmKa7J",
  "key32": "65z5efv46Af6Vd5BaJkxCnS9qzx8WnfyZ6yAo72vkpUMvJBaWmZS241RUcrhAhuSJ39Aa7vpRmn19S96BYBYcJ6s",
  "key33": "5bdDLKpujCgfRZtjSJGbxEqTZeR9n69dK4HSzPwtbb6KmyqsVxyLhFaD38PK3xtK5y3QAWznUPk3eQLfxuUt2Zvr",
  "key34": "RJUAJe9nbFg9sEx7SecbyZCrZVeB6id2JdLkHdZEVxBud8EVe1mSnjQgfcJiSifKyX2VyTnd7nmNFahuxY3gU2Y",
  "key35": "5dX4iZJizNRrwC5zJqXFeMWiHBfN37cV3SqfWqWw75Jou25inDo3q778mKKGQiq6mznxyUM6dXkmm2DnoQZX55Xn",
  "key36": "5nSbVCtnpDFCAK3MaG4NKFUMCRDUx8qwRvAH8bpYMRzwzNt841vwjTYeGWYhgE1NR55UjYSk546RrvKd79HV7P2G",
  "key37": "e86KJzf8V84Z8oTs8C5Yhw3bYAqoD9sbAcmNBk7MW1EqZTaEefXxF5ge7abm9gMD6de4QnGiecLX3JZUC61oQw3",
  "key38": "2CTKdKuxD5L6DYBbD4HgVbzBdXdm4rNEiFSUhw7qBWQkMUxkNPy64KEhqsBXMXPpH1gBeEb2ARb6f6Wa6w8Y2BeH",
  "key39": "4MfUhfKQcUME25wN9gSF7NDccMp3ng1ftLGqqfhda1ygFrDD46XB3UBXw68xGexTeG5VRe2dofMV2usoQ6WNNFQB",
  "key40": "4uAjDYQYyAfu4r2kyRndaSbQWGuUeM6yeYzXW6x7zW6qtAHFApnnDt1gD6GYiu7Wk4Bim6RedgQZYy1qVnfabsVN",
  "key41": "cQapX7aiGVnY3DNhRuJ4nDyuTkvvVdgx7xC7sA8JjuAUE8cCUD7k1k5j1jgYYvLHY4FTty5mWAfbaTPYHiR3cFr",
  "key42": "2ZV9AxDtDvUKUkfke3cBwLn75f3ZAEfUUG3GCbhMqNUrKrhKA7J1hXMBYmSvJRb2zdi7ydCrpM3hd2Pxg15aMU9p",
  "key43": "4hxhc293oBXyu5uZFwKs2UoA4L6y52CRJG6gA65GhiAsUh3FqXus1biEap7TyrhTiB1MHRsmTscviuhdWtmSZnv6",
  "key44": "gNm6KwZViMKESVEuLo3iFf483erLme2am2zKsXSnFAvDTb6TmdhNaq9wJqJo7wALoooRv4XHjzykSKjs9NJkuNe"
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
