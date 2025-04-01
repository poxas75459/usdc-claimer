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
    "2j5Q7uQv77B7xmmSqKjt2EYK2oiyeDiET9beY7qokDB3eCHhzUzMFzFfqRCoMWf9LvbeKXEUoKYhSEWtZSQyxNmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYVzqAtghMKtAtn6p55VpwukvehpWmyyxapc72awbfqtu9ZrhBWJE1xmV9qhQTKAAY7epKfjqKtYyrL2Tk6oSAH",
  "key1": "3W3vHq2iEZwdqgenfkbqXw4wRCmzjMYEhx2m7fxBnokW6FFQFoMzSQQdvwU9kkkekLNRm8GK89hhgn28MVkYDdMq",
  "key2": "5oPpK6fQh3asP9P97L6sGGXoiKYWRGczrQa6CCCU3f4SZiHFoic4ohT9hHk1LWkUTjJmCCseNgca8qd2Tynv5tvR",
  "key3": "3eko5ymDsKcwUtFK7AJpii7HAxj6TjaJKN7htSJxr39kWYvXe47dDsKmeQeHrWcSqfvnS5sug5c8N8A7o9mmaW4m",
  "key4": "3istUjc3mYxYbzhzCPv3nqG5wUSoasRYma1uy1fPQELeopUCAmXTDE3HRt5jiV38fZSvyeXHVMqaybTaZEuc6Vjh",
  "key5": "2HNiYxnuJpqgMdhcuTyLaJkzu2JREtgJroBYWvrbyzZoppiATf8pmgaoV9LUKd4B25D2RJMgAHftRUvCCLYeW1Qb",
  "key6": "4HKr1qwhGULEJjPNzUg8C25ffwLAhWCFWZXapQ51EPArYEU3fremFWCDs8ywq5an7hybbCN4LFYqfXFRkCtMMGqB",
  "key7": "5zSmswEzberKDAjQzZz4pQe6uQgsxvVWqtDPfHunkP39Qq6yNRhaNbWHmwjCPymyMqgSLnoWLeseqrL59nWHgVEi",
  "key8": "5wNwoMLJQ5X9sF2RUU7kH1beSfinyHdb7fx9xE1XMEZp1vNivromRFQ61gajTB9CGZ4oJSnRDVMRnV6fTSNkjXnh",
  "key9": "4hQ1CzQ6EYeiy86mj6XFwXc8zLfmKXcf7x3LzqtJsrPPUuxrU7gUKAn7XJKxWP3V8MLqiffT2BhEQ6L2vJpuq49U",
  "key10": "3Bq4iX8MkffdvcjtfqYe6dfF6NfJYMWbEDfw5u1QZsQrwkEkJVNjixN9yhJvH1574XJ98j9MknQBVAHczU5WmjvN",
  "key11": "5FCjCpE7nBDGGpBm632vH7AemXawcZLsoj6zoRFz66xqtJ3CSXW3oE1RYGJjMJUzY9wHm3bG7XgfP4XJiwMP5eiV",
  "key12": "5dCuW1iwAKGVUn5weXxyP8JFUrnSTstVWCUrEkuCUVt5N4pHrJWT4ohmMU27nAgLGjyG9jCaS5psf6B3pq3ypyUY",
  "key13": "5Mq2tqJ1JbX6mAV1UFmAiuR7bF4gTDnTXHcqUsorMSAdBquB1Eh2GHj5dNSWPeWvAiJEaCtenw5iCgRHid98psYz",
  "key14": "5rNY9MJdWgmGAp5yxxQJmm3MVqp2jYrfMcvLjnUsw7jTMdKBeDTKZs7UBkqMFbyddo1hT48NL5PkQYTE3rHtEu1T",
  "key15": "C5PY8JfCMyz77PcEU5neX2xVYtGMbChEBdiZzpDtahaudKt4Gni6seKHiLFED9cKe3ENUPitAXSxo6gyGmMdwaH",
  "key16": "3kaxdJyLRjW9QC5j8NjoqUF6yJd4ns3Dh4jumY7XthLxfXkeoBDPPqZrfosQtMK5zC97jKcN7t7KXapbUKRNBHCz",
  "key17": "4xPekPZBnKtSCMHuMbfCStiL2JjYTJYcMZXCkMNyDXZTpNHr8emz22iKhYLrB5F3YRHumJwqQ2WQy5fKY5GcgTvu",
  "key18": "3f5v1br4xKXr6VpXJM9nwvtbWEkoAN3yP8xG9u2LxRNm6akUMmKRDeu5dgXUvVKhU7JzexEJWrv7BR8GrBC6iujj",
  "key19": "5sJqXWZTTt6qujkGyHkkGkcTgXS1X4SuNYcWawN4sCsFHicXqTNYNof6hKKuyjEsxUNurQzLCxQK68bRmEfnNJGx",
  "key20": "5LqnjmmFDDasXvhiH94Wm16jrJBfmrqBFRFQCEMZFmVTL64ehjNk3CjdpS6TULUP4MkJyWUUNxifFkPw28gHuD29",
  "key21": "5kuBFU5agS7ukYucvqnSvL7mCkrXuh2HKcoMxXqMCHvYZK2gfdAZ2vUcQMXmBup2yhJv9cnwXuwGgxWSEqpH7jNB",
  "key22": "4EgJquNMW8wCXTDaDwKAf1nrKRfmCZmjxBwyZNnvLayf2s4pGGLqqL9T2yvrvPVjSQBHe7hN56ri4f6TJ4QMCUeA",
  "key23": "4KboExYK6exjo5nJUGNKBxiTyrHLL1fWqsa5d6qA9w9fQ9P4zV5XbtjcWftXNJnquCuRzJeZreas7mCysHoDgipF",
  "key24": "2AJBoo7fPWERLqw5u2gpDKdtbfuNQdaK4iVgvM4TZ48T2K5ucCZZVKDJcCCA7hKnDuMYVNpLaVSx3AyPh4qZ1FiJ"
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
