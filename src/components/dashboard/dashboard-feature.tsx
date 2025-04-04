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
    "2roqHVE3wMH8DkDoiujdpSbCb1odSz3QiU1wtZjwzpsoKikQWpqMi5mLNYYWKcjRTRZpsYFxFYK2DySZGUEFba3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGTfW1zit3F3EATPPx9SKoueP6pKFqtDtzvFzr8wCxv4bpin3DTDEmeDoCRUUAhNwRyTuKm5DkFx5fAoxhidQ3",
  "key1": "fe3SU297YGmW9dtoC1reX1BUNA87eLzkakqYiaDFFR5rerFSm9xt4Fn3ZttPVaSC4NgnCHBk1zMwhTdtdDsgzgZ",
  "key2": "32CiBhDP9rDjgrwbAQZzoHyTxS17NUxpyU79v9YVT6BEmYtXQ6QYyFVTwzXPqrUb1NpBzMey3wmEiFH9XDrcphsM",
  "key3": "3PCufgE3cnWi2z5Ntn7GpvUqQ5wsS31Au5EeiUa442TZnPYzmEQTruLuG8HtgXauSaMDAzyxrCdQSqC1U8DBxvHz",
  "key4": "4puPGFoAXK8finJ3r4BRKE5nJGP2N221b8dwvgBZgM9LSX8mWPziYk5fPBoNzk21DycC9KfhiQK6Qr5sA3qoCvCp",
  "key5": "5oPojKRSDq9opEzjnvtz9snL1Q4c65CCui776gngJoCFvTfrZntkScvAVUSrNhMt7taVbjxj5w793AKuSG1P9MMR",
  "key6": "eJhES1eUDd9bCBv1NzxMXGHaQDpgACHRi2kqTMzhbRoccWHDwQ8ZLGQRFbNxBeUcRt5jiKsWfW6F4caFQf3LXen",
  "key7": "2J1E7xdT8zxs2hhtrLrBESTQeCYD2x5bSPEcgrVFmZK6YzAq7g6rAZ2sEUnFSyLqkYs7yiSphdsoCLJhLobWNqCM",
  "key8": "2Qk5dH7ZyEStFNUicTk6syFstPGiaEBPMk1zisPaYrBqcMPpKTWCVULWVrVJsKGWxu5TmKh3suACLNoou2eD8DsX",
  "key9": "3ZmXMCZWjKL786Kad2LMwbPmYfqEbp8SGcNP6aSCnKFZuSzcW6F1MZHWLyWBC4TxY3nQFM3k9kkqqMoUQNjja9zv",
  "key10": "3xrVJ7WFj2n3iFDasZMhkydVr24cAR6FmrLByK3Y5BXbdCztCpy6y9Ww8XKguTcptAix7mRMLsVc9BwkpNSEtVDi",
  "key11": "5b2qb2WyneGhuTkDAY7ojeUn2XbrT13YddkDnSpEtMHt7VgvQ9jH86DvsFkaHi7dKJjBV33fVwZsoANMqqEjvE4W",
  "key12": "VXqdYAZ3kAKXMsqbBjfwi9ioAP54aJkgZsEGEcrW3rLYeXC7beVcXU2kWuEqfNz1bnvpa6vxjQcTr3c9ib9BiRX",
  "key13": "44sTsUHpKX41K6mkKsNgawU1p2fsYn8rfdQMTJT63kgvwKMta6BjZYcgeEd1b2XPvws8ZUUdVW6qFZ6PoWEqZSdd",
  "key14": "4Z8qr1qDpkLtK5QFyU7sPguxWX5Y8tdACwd7HgoXv6JkKpbxLwp3QJgZxSNQxfoVEvSMm9p9KfuRzR19aCjCiMse",
  "key15": "2X2b1MXxnBxj8zM8Zhzfu6txQSJkVtbMbwjkF58osby8HquyBzDM7KWDwUJdL8yzXeyJmqSUirhekodZDcDhmNV9",
  "key16": "3HdD8H7UYZDfCvdgzqfarxcctUhLdeshS8LaMSE23ARpPkxft3k6xHyfHHGCxj1p1UZxCsuoQRaBhfqgrBqbY5gN",
  "key17": "5egW4QZc6RZRysX9Bqad7H8chF4Q9mfHBP7AswHmk5vVvrCkKpFnRQo9xGJyc8uedoEpt2MgRLhmqVfKL5WqdvSw",
  "key18": "488vAPGSrDEk8zepdLm14pePTzQ6HBjx1kgbezNkEhi3G1uKzNEFwzqvmTtfWbkhaow9VGFBbCctBHSy7LHmJjjA",
  "key19": "5Tw1gqRHXMNudWtogRPt5a4qzvGLgvJYmqd67FNiyh4GbRxwFzsuGU82UkJhSZsPtpvbjtjHFQbDQfLiYUr3itVy",
  "key20": "4H94FwEo2Zfy4XdxMfoLS5P2zCVLu6eCn1XsZ7yZKB6KffP2FSYVucTiomAHJ3MWDH9TzRhH133ATZXtFef3WDRs",
  "key21": "642bYofGpFpt7oSBwGNV9hjDB5q6MFoqJw5yuEZQyh2ZKPtqKWoVWNvkCTc1U21wdF4BkyaCzRKFHEwXCsLn3Ugh",
  "key22": "zzDg3ivKiHsw7zAcTMNyCPDmX4BpbC5rxrRj8SmQbBqheDzbrXmaQkFLsnF1MSAmwxXNxNagZK6qsoaXqKK86yG",
  "key23": "3wRNRhxYaJn9xAovYuRrLgDnBZWWovDfscvr949titofpA9n8NAu4GgwY9GUq6GG9Gd2QgdL9DVy5ufwNDkTLvNG",
  "key24": "4KiVn3jJydcd72RJpZPZUFmH2YreBPiTpgetDWPbPr2D4q28D7xE2CanynkXMvPYorTtohdXoJFUQDH9oVGvV6MM",
  "key25": "UXibnBiGtMbpeVxNjx4QEXyuDgr8VVPS9MkmcmjMewCPuFyZMjRuzdH3y9YezyLHJNXZCLjuD3WxZjkJA4RAfs1",
  "key26": "3L1wNSwnawMaUNG6oUbtL2DQV5XBK5GSMGm96UmQ5AwnawMRcG7PWNmUAiuuSPufd8KC3KRWer8PupAt7a4wFYSc",
  "key27": "3o8ZVSCWG5S9AH2HZvBMd7CDFCG8YmwVr2a3jWhueViYfLKLmV37eiPG9eyrJuvBHM9SHVndYujcNpSCVgfiAuQB"
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
