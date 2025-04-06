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
    "3k3akUz2pey4CAwBKCSAaiGA1KBpAGkbFCpRXVyK73o9Ki8HjeVS5fYuSjmyGvpAL6U6Sy1tb13GoCCPBx1QTsmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usW8LrATpe6oM8oEMB6ZtPDbyJMh85YeabvrXwbnhgS4HQiYWcCcpWXiyuBEnz9ZBY6hcFwy5cKkS75s3opCevS",
  "key1": "5HU9h9VnKLGVezmQkckNErn8K6pphkHmWva7ZPxPcAMtEkh9fRY5P2469B64eAeR2drbSwQ8Xt8fbu2Uih4mg9Ev",
  "key2": "3iC6CcVhKyT8Srsu6F4NMThDV4mGBbRae1iv6dj4UCQbUCBX2aS7F7sLbYAma3YpCFke5HG8wgosQWMdzf3SZyfV",
  "key3": "22eRaAQpmirwK2y3Q6Ax1imkNmtCY4xngZrJdjLaxvvQDQHKxvCVWEFdhuaN7D5KFkkSjUPBvZ9VEyCmZBrfZQz4",
  "key4": "2ALFvc5eCNwCyPxQehJZWWv4SDTEnVWRMVGPvMAp5g1bjhzmXTJEzp2Jwv79r5pJG5Jj3dHo8JLmsZVZqfSi6VpE",
  "key5": "2364nXbAJCs8D3PNv8fzhR9cEu4ZWSUDzt4ikSGyBL2QtxAi7YEtRZLyMvUvn4snedyQ2QAMXnpEigxxZ9UoPEW2",
  "key6": "2RWWy6CDVrjc9pmyWLa6Nzn2hRN8A3ry8xComwqdynXhi3XNupK9vaS99hkoQDb3vckLj5bC7sSL9c1kV9LJAL9r",
  "key7": "3brECd3rxiok2yzHhEPA3J2qaoEkVJvJWPMKxKHkg3jHKiLLVqfvG7hBSAfWgN8e9VjD6EsyvDftqaHbb4fcE6EX",
  "key8": "52zo7zDHaWYXV7xL6Mzv1UDhXxKGg1hBmpEGQ5v8eL3VgsZcbHD6KZsDrjLB6rkTZCLn63y1KsSpfrj3aApM8A6N",
  "key9": "9hePw5e1WXaYx8C4naGgkFdGM6DuLinKhwHuZNE1AwqeFbLWjH43jwgYpzxh5CWN4i2f6jG6F7pmgKkBCDDP22v",
  "key10": "46mGHm11Df8qQEWbPF5LfqHqqG4QN4wmGpthNeEzbUYBJdu7jGZ9QpZi59j56LjSGp2AA9ijrgVvSM5zg3pVUP9m",
  "key11": "5CCikBNCiziNhUijkAuoShxv7ZBrikCrsKQEPxmsNcuCJWY4DMZMmffeXLE5C6aBZm32mMwxhhDcuZSyN4ctB76g",
  "key12": "4c7tUeT8wxASaJxGBirha5XdXisWVFQ9BVRJ167DDVBoioMhn4kfLpEWtVpv7x5g51sADucAyF3pEQ2uFq3qCf9C",
  "key13": "4mFyewCr4jJWKMEg6XQZ3t1gRKjNUnAfrdqyx8DZ9hcXXQdEiZndKKrsoYmpSQemCnpSeeXdXbmnfeBv7PLvP7S5",
  "key14": "5ayE6SgHmkzDwbK2MCUv2TFmvShKqrM5toFH7Pf7wShqEVZEnNYbk28MpErD9bVVtumTguB4YGjEfi4tt6HrV2qm",
  "key15": "2yHVcjmMooqXYdmbguHsrCQzVXZAvQBBVVBiCjJdEpdK9ybzryDRCmTNYvSAUh4x6N1AKa6j7hsBcBA9cwuDn6b3",
  "key16": "3dyk8RTDTgXupbX35nbAGV7gjUZJxJSUrQVXj4BNpPm1QYBTBxX4jSNDC9Sfp27MoAMWBV5Qm9ZN9ctV8z1wTpsA",
  "key17": "5BT1SD62hP24xzNPyLQTzXg33EYwyxhHbW3co1SktDf1ANWDGFf62N6V2yH3wtwGN891eEYDAWCT4NaQcq5bdY8B",
  "key18": "4afAZ9aFFFc2cy8dZ7eMBQs49ugUi6qk8nTxwMpRQQBS4SVKCm4WfLK2irBYD5QjUDTU1Ynv3wj9BxV8LmRXjp7C",
  "key19": "mLSaZ7QgNhtUXfjXHkg6jFtdDYvQ2PpxtfvTjUYxs73tLKFBZaJmXRxUNx3CxiVWkwT2YggJcfw7Ms3LhesQsN5",
  "key20": "3ovNJ6LyWrftNHzy3cju5v2cx3nxQDmqnEakABa62fpXvPNo79ASCWn4qq2CNLX8Dzv9ccBcwAw3JgjjC3rsdxF4",
  "key21": "LN81SejVoofoYEWZnYsAyrb1BQd72cjvWHxM2gsXncfy4Me94tLWC6ddxUvj2ckEZbTUgogZLzb22hcZGN3tZAU",
  "key22": "4zv4mjgYadqFsHgegNEaCtUEgGBUcqTW5aB8ZAG428Z8iVKbBr9rUf9hynnVVWCuGrkgtxXdiQkur3sqznVnpXkB",
  "key23": "2jQuHexWsYxDEYoq2rtgiXnhAPNT1EyM74EiokqS8uQoeoDNBeQ6aS6uPqTNxLEnffM3B8KgsihY6uugLE1sBdyq",
  "key24": "5RMyDfBmWNpCppELTtZqwCEXZfmGas61AUAjjYk5xn9Fwk4poSdN67AZmG5rF16LRe5h8MSMDX6wjophtykpJuWj",
  "key25": "3Bj8tsGyCKBWguTiDcvJmwanz1xRVi7MmeHd3azaHGZM5k5EFRZbiELNYgx1p2qohz2ykGvhov69ki7rcGnJWH5Q",
  "key26": "ayLn7idegWUDAtk8GyWsHs4gnuyDMyBdZV3dEwpvum4rcFHMh2J2SbSH1dkcGxb6M8oJ1XF4icfzYkRJoEzrFFp",
  "key27": "4xyQxkrEcRqtykGDvr34CMviVqzxVpacT6fqZygxrvCtQFZpcRhLkeYka2wTjGMssztFmbu5MvtA5ce24qAvGs5h",
  "key28": "4uMx7QucbmxPKeymw7K5bfNPU7JUPXWuQNx47GHEarxt46BJgQgAVt6uZU6ccF87Csb316Kd6XbwPt5EFWQPg8mc",
  "key29": "4qNav7mRSh1cpMrBhrnoQoa9rYG1kK5kj72SY6weTRRXd1xLqsgGUu61XUVMUYPf3sg9EpZQkEpRnsBy5kiXkHhw",
  "key30": "2EJKJYJkz4C8LNdCQtgNJqeUsudbAxfcNdHnkKtgL2UXCVziKjgMgfXaBGdFKgfJ2GHFsdCzYSFt9VgB7GbY824C",
  "key31": "2qSMB4LVMH5x2APkEEFgePdkhj4yj13CMJiTTqPKRKfw75LKkYVeSZmzQdAk227d9cDcERXW8XBk6eGS4vQdpqKu",
  "key32": "3B2DHjkvsYSThYBA9uk1jXJbAfJxYiG4Mf6E5fS176119arRywBi3mvACJvr5qdWMs8PGccjo17MEboKiBQNfCBh",
  "key33": "3SaPjrQ8VbfVUBnWtfuaPXTvhxJavp5wZ6yESJMMDUmiSkeGVjkoXGXZbZWHNRsRTjPkfxz9CefjEaZuPS4RhwDP"
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
