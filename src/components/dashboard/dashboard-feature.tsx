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
    "a4eib8mKz8GqK1xeFi8dNQn44qouFFHfYeEtrXy6eDhZmE22ThvyvsgtCTLoe5E15ZY4hutqm7vnEqyhhWQtZAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StXR5K6oGufAtaAndqeeCtmLhXTDsGPHQpbE9zeh9aCf3vdLGh1WYqithE7cWMNCfrQvn72QWgfWT4zHttVciiG",
  "key1": "21pDLjZquBnN7NhCRacxUiFSJPCHfqTvEd4dGT5daBh7NaJF7qwLZqfDKfmv8JcQQVeAJ79ChBqCBRZw75kHkzob",
  "key2": "iTKwZXEAjwkLCbHqqnK3d98Vk1VNKwdmVRbQEbscUTrEDU6uohdn6aHs9TA3A5WD5GBr574FSbSitGHiY9gCFyQ",
  "key3": "4e8S1HoCBsc2gHvvftEYDi5dvjNgkSZDCPwcmFdu4jRoUEWtLEyJa4ZhDRRtTYFcYsTZEc9kKxdQLVGVuHxFstu1",
  "key4": "wE1V8gzDS2E2cSJepAHgNsKaqeySo5ZPmiCsLKuWdvFiKrAiq8arMW9RL27hBEQdnbYYZAiEcioqBNqoyAr5o1r",
  "key5": "3rbvi1NoxHg1Xkd2xcBVzPDCMzjneXabyws4JzrcSeeUWpq1nawo8qb7EXkq3gCKqVvANZWT8L3q5BasNd2zg1Rm",
  "key6": "2TbkZRJ9gQvwc6WyddZTiabkfuKt5jTjtZVT9cFfxtojqNF1R7cECiEhQXQoZR5fp2tfyENynRq2nzf4DdZQPsGm",
  "key7": "2aJiNGggN5xEGf3cp1pjiVr6ggepWDBMY7PkGk6WRX89Dcmq72Y16iqLq56WCsvc294Ya1V5yZJx9wQNhyYGaTac",
  "key8": "8Q9iGwkqMd2xcXH91VPFagxXx9MtQgpQHgtwxZ4Ezw3gngiDCUHbZqd8tNZonfW93jKrAuKRqgAYuqTE9amEpCn",
  "key9": "5zPhd7SQM27rGcS1gGHwgjM5R6tAUC58RbqEQa5CombYpUg45QSgnjezQBQcf9RaLL3B86mpQJe9BQpj3SiymvF6",
  "key10": "3KtRbM72mxEz5WrL9EWDAgEUtosLHaPrWEzttqDmMTxLym98NxiPzNETV2cuw992szh6q6QHtiZfYscHD6sNCKgk",
  "key11": "vBaQsTVJHXjAuzR3QxQQNCgZxtnEAjCDKCgziFhiJDGpPvBwWKupYWreRkAhwFf6EsqRjGMhunXq8bQWqAs3o4C",
  "key12": "5rKMfLJMtzndGS3CadSiBEMsM5uavSRe6vXHkWqo4GaX8S4u1msuTWLmfhxGKMpx8pm5DZ1PTwJeugt5HnYKrqwY",
  "key13": "3WZxcu5pXi7UVwM1oYjSS9Cua75URwABYU5RFFWZiYGwcfEYZqsSdncuTjNuVhTN5PJF49qPXENR2yResGTYQb9c",
  "key14": "rDGjeFWTxaLX2yATF9isHRnX9XbmviErUsJcRC71RdBSCER7JHekb51DoYWXA7QmAmfmN6nQ1QU3A5Suem3xJfn",
  "key15": "qMND56AwGyNzvuh2hZBdQHWffKF3z3VFzQ1D6osNU5tBTrAeabyKaMJUT1JSBBjaJFKDhKbzm7YvTev7G8xBHAS",
  "key16": "4NuWZEgKxeiyxjodtBEcq8UxC3tsZ2a8RKBV7Yahiku3pMMoyFyXCXWMJN4VgZv1GjeD25UfRinWog1cW3hU6RbX",
  "key17": "46DHEi5T2BeMrMuTYQft18VZMFBJYvKiDGKTf24fLT6VK1m3gBRbNQAKUHrVHrz9BgqQU53aSz4BoKzdT9sUDoiM",
  "key18": "cTykQy1xotu5bzH7FMV8L4Vp6p5pMJnUaPehbrJBg22Z5Y2PSDiuCL5YutgSLAd9W4sEwpxQA2cigH6TJoySdMW",
  "key19": "3idvPX2RaSMMWE2kKNrp7GEt9v8QxwnUDLQGWm9ZGc8A4xRzzAzJPGqsM3FU1TCNoXUPnm8AcmrDR8atHqjZhmvY",
  "key20": "5GkM44Jyr7fPUtdM3yfEZLho7DGeqkRQd94ZJd1jgsSkLhPeyRQQWVXmpbhxy5P9aZ5CpmFewJXp2HgvnJzr9LHa",
  "key21": "5DnhsiCwdMmxGFryyARYLbCZtna4ENMwP7ygRPwtHdaFbbwFQdHsrfeiN881SdCcDfHzjtucZqLuHpoNcNR7gE5S",
  "key22": "7ZcK6rRLmMh1gf5bqNvEmZ8sSbvVLqDutXsfBB2iAhQNbzSEGjkex5H5A9uUVqKTcwY72jAKCMAYcXNoWWw9K2X",
  "key23": "LEaoyBCYp5wjQxhKBNT5prCbT5PdfwtggvNTdRGrKRvEeRG7uPUmNdazZ7npQtJ6YFWukstVSeXTDwvvC9jgPAp",
  "key24": "4Duze5rGW8pHJKgVNekysyvSCG1GhjGkA1ntvDJi6XKhtFMxmzkgTHcpG4bobdpJYZXntaSMNPuvPrTsZCnUAma4",
  "key25": "uZHaKnmVxfcx5rArpNRHvbVRX5ejndMyRQP1YhoeBexm4iXtRi9mNKnucsDvMheGeHqFvdHhSDUJrnht9H1BuB9",
  "key26": "4Faa7QH7EFscsUoutd7Sx9Zhz4G3BYnYFtXwvsw4VjR7owMFPVtVHRJvKRzJnibc8Xo4qXRNAr7gep99rZhNxcsz"
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
