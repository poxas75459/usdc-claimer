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
    "SDTNaXjyqeNfRaAHrt38vZgm7Xs1tpE6FUKq2Z4Zw23pZjmDMm7Dbt9p5heqsbTJxqeqA5tSe8dMGLRsgbNe4XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Npt7KW9iBFpYDCKrX5Vc5zRpfw9pbrKEJfhfikNYJRRrkw89Hbz59MXhLUcMEShHRWKMKi5kkLNVz2sqx9EbuEh",
  "key1": "5mQWjCna8vLSrfspMd1p3FB8DqTdmAbtLpWkNNE2KfAJFBLfD2s4t5XQKQv4qqmo6GpuXBuk2nRhBeoivqDSTnym",
  "key2": "5sjRiFjkZqAU4JgGiTkvw91h9PWbQqKBdLcqMjuLi5h97o2v5sfroGkq6NvWhFWdsNq9AmB3CkUfDQsRyB2BF63t",
  "key3": "3oy8sYKkbG1mShgsR6kepUR1HfRkyXTV6o546DYwnAmysn17bJAm9JabPzDPsGC7rB8EEZX8mTh9EJL2GGTz9DAF",
  "key4": "J9spE1NKKwUFguM1V4AyovGy8hB2ih58S3qwikxDBAaMvUKWNrPBqNmLx4ZDhAmrzwp9rWvUBR7rdBoreaN3aHe",
  "key5": "3S6dZyR57foufNZnsktBXYZfQXFHgjjgD3HXyEwHw6n8BYYjJu4SeQ4fAUHBjs4B7grnuSxrNBMksEEqP6zQbMur",
  "key6": "5J9c6i3vbuxV95odwnPkAYALgsmFJzpQdybrc5PvYLVoW8U5pCKibgkbz9jkfh8W9uDRGPDKm5168v4KcbKkH1A1",
  "key7": "39qSCHJqrB8pTgjVJS4FGRLaRLzBVpWyJXiQPyGCb237SCXWQgdX74gQqCt1uVZbrHqNnVo3KJ4XenkRDSbjeZPX",
  "key8": "4a63KmfGTQoeCASiR6RFHoBvTJCBjkq8e1JTru5qWSTzXEZk8m63dzmqCrWuC5Fi8US7iyzR8ohH1cGvLAiy7w15",
  "key9": "3grdLh7ZvYHbotBeWrSyNa82Gq4nxhWs6L7niPksJs1o8RXTHkxM71Unxpib37edaHhtUEq81YYcpt3vxC2yZFyw",
  "key10": "ciredc9eyTgjZzwHcjrh93qhX2xgk1YceWgwCwLBeojLQct9vfHPhCN7p2bbvQcLwcv5rrxQFfbGXgSUD7ZnoR9",
  "key11": "4d2WuF2EuW96MMQj23jMBpFtjWDqWMfGu6PQkLmVvDqkoAD3EUvF5WmhmwXrw4e4PTtVL52QLZ2DHysQC1z19s97",
  "key12": "4wwKzmfv4vsBQr295XYXzpbnNzAaB4ooh1M4nX4NmAwVD1RG5hp8iTwjjXeKGZJ4jkAvc7EMcukXHWMaMDqkbosn",
  "key13": "5ZUTTAGoe87K3z5FaytY6C7vhmqWh65D6T1k3wU1qb5QWZh778USRmq4t9yN1fDSkrMebYJNKSVH1h8Vd274mPL7",
  "key14": "Bgu1e4FTjfcmRhqdLgf63D5qKFXfb2A3sKCmoYCQSdyofZaf7u9qAg9D7dMfKyiuWq8acb4YJ5HhZhfVUZzySrF",
  "key15": "4f8Mnp6JhYGVFSv5bLve6EaKpjwApc3UkpEEvzGTGCowUCGPTNdsjHJ5DWAHZrNnnrkHJNmicQqArDZ5dXujTtDy",
  "key16": "38ski61fPvjjDvAVZ9khzYMc6RmjbWHtxQLk8mx859Xk9wSeyMYkqJ1uMK6DdtaGvQrhFFcvj4pTc6xE2uesWR5z",
  "key17": "g5pijNcEoxA26eXg6MSEH8UCvWKowBodTf7phb1HE34TLCguLYWsYqM2enUDw9sFtPPNq3HZ1uDRdEEZ9Fu1Z6i",
  "key18": "BPy1ph1E6d868yKg5sa82XH9RNH718Q12giim7TDB6zMpCAuiM3KmGzG5G3sv7h2PKsmJM8QUJtyJKm4R5BcR5e",
  "key19": "4rihEi6GRNBvZADG9kHo15J5hMh3XsgEc8SBYB1HvjZG1DM3Gbwng6PHvxmpPZWKA8W9qNm5axgNmavvs7f16ZNo",
  "key20": "qBfoUsNtTxbpFU6gnTCQz763FemujEcNhsAzvB1ECzdsVuN45J3Jf68kQzng8LkBMKDJHqDjWnnGeMYXjUbNGjL",
  "key21": "3mnq54tYFMQWwHC5S85uBKi7usiJ8EvdZKcD3LD4wJu8H2HQJKiCo4P6azGzR1vGi6gpav6LCQSqHgK2DHgS2aik",
  "key22": "2uAVAhQbajBRMyxSDgv57fwYYco7QiHvPgd7ptq3z2PfVUiYP1fpk7wRmNX3ivL3DWDTJtJkxWt54sUmCEx23HZw",
  "key23": "5JfAs5Zh8mmuJKPfs7Sha7qWjRLWVdcfpi2dawUXMfuAsqcBVvVwRsjTTn8QjEKgYbxMhNGm6Fhz81dy7TEPpBz9",
  "key24": "8ZVpNHk7abxwx9AZHFzvDvSqw4FzB9NoRKJMSpqb46YY2WzJxigdukzn78xBcrScsnQcEQZyf2DsGbAgW3vWkXX",
  "key25": "2H2xUBrzMQR1LPs4qC2ix9Uu6RiaMytgMptKHknpqxsgh9BisW4oZcdQqc398PFuPAPaUNmu6fnJeZsZLPTErU4e",
  "key26": "43BvCExEwyaq498eGcZEMnYpcrQYQLWZM9w3ixBC94FHuYVQRZ1YYaYb6H38xq7c7DQPHE4Qmv5BoQLMHbCydngY",
  "key27": "36y7zYwN2pnGHd87Pcpa8he9TC7cE5Tkh1k6Vi4ZcqBxUxhX9p8obd1azzj8VfNRRMjWggvM4pMW9vDp7LGoPcBt",
  "key28": "2AdkAnQsY8qRKzQV8Xx6BvNzaCrvRS5NwrRFtSu6QWidFPFQdVpLnrm2GHy8TPodmJY8989YAgPecfUyYGrWb736",
  "key29": "5xKDy8YgvHeyZETgzSS6uztwkNnzCdvswtyuoDsn9iKGQsXDzrowURMsmwKqDczhvfvwGaTV7xuo67LuWEnFLyCS"
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
