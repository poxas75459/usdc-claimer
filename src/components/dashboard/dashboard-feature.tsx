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
    "5q9fzBFm1d7VpMyksbhndPAPar4ApgySt2GgpXrukEqijvacurVSVWzf83chpcsmaAhfJt52cPxZZEXYLhgSUjBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRcQXpSGtkUgvU3DQjRVkEt1kWWY9tvt2xKvViVUkhy7h4VSLRd9TbKkesdUNuZN7yJustWBRZKSz1hfvEHAJdJ",
  "key1": "4u9cFL9NvFEXMpami5F9EqY7o4rgsSNssbpG6Dpbj4rqteZKmDNSYrgVtXKi3XDsWHiVJMkEnym3pcb4MGNZkTGc",
  "key2": "4K3tExQVf2i7bUxv2sewCKmgfHXUu6vQ7P6ZAAwJcU2PT4krLeQ5K1qVFHmSztGFG2Acq1KwnHjyJsYnpYjP9BM3",
  "key3": "2TFbrHdjWWkckSe6gtXtqEFwHGWsHGY4V9LctHoYQUKn7okUdKQhkB6SGSET2b2ZQXQg6UbdYHxFmiWnfAomU37J",
  "key4": "5ZoV3qzsNNDrqE7dke93ttWNpjpiUexhRjZSH7GWxJ3LrqcNzpZuD2PJprqcG38jQoS6EznkNkizpnmD3mYJuwvk",
  "key5": "aQmvEQQYVxdjttoKVhmgiAeBdk6b1aAZZhw6PGEEkibV6igs6uRj1XRw1HuXGo1SL9ttWJdgjuAnn9uKrd8ngbb",
  "key6": "41joY8iu9S7QhdchGTDwcfkQjRWw4rNyg1g5tnpEwqzrzGYv564yBYAdEJQmfXbAPiRauSn3XmbZcwoCrYMFhMFA",
  "key7": "4KskgkH7Nx5tPqwEAe8tSWJ7YgkpRQontyXjqLFzDcj1ZtkoTaCVPM3TN6WBZededoU2k22qdALecHrKGVMuewK1",
  "key8": "4knLo4XDy1KqqRqsHgZMxYjFn4L4rNDgxqsLxVBbMWnfEuaNN42HJu6W8DmTrjsJjMEtkxbcXynowViiuqMqgvuE",
  "key9": "4APG9iXSVyapeZqvT9sa2fT7GsjHKQGwQ9gGqzCnk8TCL7YMtwYo5NMwkjaZssVgg2d118s4JfFgsayPLJTsGV53",
  "key10": "2zDmq3UC5Kh1rZCXcijVuh9ybS6DCwzpxDdHep1KtpmYtCgJGDxnTLGQM7gn1rXcKkw6hm6BwTEZLHtEMYcyrDqR",
  "key11": "2r93b9Mm56ichuza9pdMcnNZGnmsMcM2iuBRpaaVSX9LFUGp2PU1fJdqNX1WiMHj5nXydR5sVZnU6jgojjZYQmNi",
  "key12": "5FJ7PGmssRrKGyXCvRHXgdsgF8i9zxP18JTUpTe3Uuis3urA28mskqS8THKmY4qPyWwLadPUVg8qkUYBaPoVnWwn",
  "key13": "2hGhJjQKT3hyM6Z7ufa8v6PnFqzamTKTSF4av3hVB6W2PH57L7GYt16x91ZUx7VEtqB8mT9Yu6iXZPgN4CGJz2LV",
  "key14": "JaH3T4qBEv7sZ8Q1dss8aPSCnXfBFzxDys6Rv8Jmjqh9BzooHUFRMv9pNgvYQfzGaS2JVN8Z7TDYXuwS8DT3BGY",
  "key15": "2byXfBEuJo8ZaoFPKjT2QfdX1Vdumz4y8tLxVRjoqPmg8RCwDKrsMxweR5yPznvMpi7LigES8Ju1BVta6yZMR3hJ",
  "key16": "34JTH4hB3SQYwtMEdYZ7cs33txfeB3Mk4UdKzkm2jb8QRbm5Yq4MUSZxXGbHzdbVFXRSv669bZNB3KbDa4Khy3wq",
  "key17": "2MVpDLxxnd7r7APYsKYPRRsNqPRu2TAToUwHtsQT3cYJsbA8yucM7DhL8We9JRQTkfvjnPV1Yq9A2m4BMKwHNqkD",
  "key18": "4uAQa8Mymd5kVJjuaeR15etrc7amzCpzLwJiaqbDEwJ2uioJQ7xB74cfGWTnjw1ggaQpvrHsxhyUj2HFBJY9tJJU",
  "key19": "5MhAG8aG1UVvzp6ECyYmt3eCm4Qnz4ceUmTvP5M9EAD8soD9aLErcrsuEwK8JnXtZkpxpjcn8CPVPuDL4whKcrT",
  "key20": "4KmQSdom4W1kBu5d6LzKUW7S1M4Z9o7xeVtpfyRNRpiYU7RUDsgVVyY4YXVuWnYVkngBaM1iRN3Vyb7i47VukdQG",
  "key21": "58BADGGF9iYfrveJatWkgjqDVqwkKvPg8QEFAVMtwepncocNRKEjKjXthFAzRz9nEPo3fDjvQcaHJKNTbbnvHjah",
  "key22": "2WFkdStmGt3sWpj5hKDGEeLUNViABA7CxNKa28Ndw6NQsGpVgF1GWHHDcVx7xSnfZ7D6BQVyNjeuSUUwBRepii7T",
  "key23": "3Np6Q4daEm5D7nT7MjKR7nks1A4kG8GmMajRbz7ZJQqoYisQFaHShtv8zdur8R91dyd8zmHrVc92p8eirgUatzMT",
  "key24": "WB7DP96TApo3cvVcv3hMw1dz4ANuuQkqbgXfs2zmB7k3TNttJe3PNnHno1uqeBF1FsHRkHTVd7fyU6VZQpZxhTx",
  "key25": "ncy6eL1HVVM7jX8fKTsQqhUwnMaeCx8RiJPXR5hC1BkCmFENoz1eBb8VBiWng5YmGx8VXpRj4p7CoGYmUa71HoF",
  "key26": "44HXpetjuV3342hhGJqeTvbJ416guRR1mQhvvRJLF98SrKz6sTAyeQnnmFoWswE1U65hQchKYchMftpMH6K1oDAn",
  "key27": "3QcLwBdyiQj3bJNzbCGwbCdJi3DTDe5Rhaqv2kqecyFv8beWrGh7VRDxH8LCF8NdsAPDP2yLZwRgPBUZPS4HrgcW",
  "key28": "Y6W8CRfQxuczjqB5WunJP3efsxUoPcCjaSrZVmH3HQJCCmUStJjLEVSBqwApB6nJ1aB9B767ht1oWQVzVSAE3Nd",
  "key29": "37xcxT4ttZhZYMW1icvYHkJJBebjURJAkXxLcXcNqLafx8C9LcZam3YALJhXwHKYKiKZSJSP7wpA7k6Sztuor4TK",
  "key30": "EEAGSV1iu1V5k8zo3r4nPPeB1gZTLrsx332YZuufegBjfLogoFpLvgCJSrcju6nsPfGSDjHDrLXk7HRPqQ8brfH",
  "key31": "3Zh2zgxNziMFqWjkqBSkJwvFLThMbsAT2kQExNeNk5DFZzVZjZ66c2TaY3tBYkoDFx56tJTuoq3izyR622QJHN4X",
  "key32": "55dnSuBvLfygbY2wX4gJDuBNSPuvd4v8GRH8VxUZvVi4nmLsQTTDJiasewM9AfqqzvRKRh7XopfBhesgutHaBp1x",
  "key33": "2uiPuw5Zca3cxuaaw8NBXGS46bCm1KjZwkqg2aVfkP1KYqt6KF4LKcP2EHs3f29g6LAPAgjyZD2Ak1qy65yVYv6h",
  "key34": "5DPE4Zvgr7yNq98YJmhjq6mXZ5GyejwZC3LmWckczfQPRTBwrB9PVqYJfFJZtXrCBW3Bf6k9ohVzgs4Y1t5XGUbt",
  "key35": "3eEGYaARBHEFZA8qxYNFPK6s5g656bUYLw3rf6Xm6LHxqCCgUPc1zqCZX2ucYqYFi5b98y7ruzNJHduL24gBjJej",
  "key36": "5YkWNCk4srXRLr8XDock7yPNq5cxUpTrxzzd9zGk4DSg9e3Mz5tAfkNKkfTg5LXPTTAWahXDL6PEGC9EnQXyKYwg",
  "key37": "egRdbSt1ZPa5jAFABrroErW6AZoiGJEmt9t5uLHVTEzqi7URuUPwm3MUFooBWaa41B2ssToSw7nGQV3bYeoiR81",
  "key38": "2zic38aU2ZU6DdKFHwXouKG8G1pjnneA79HcBK499KjqRErFE5mQMjpoPx3YKsRdiFzBDcxrC8Md1j8vpTD7JNzh",
  "key39": "4RNp2khFwpR4dAnhcg61C1c8pHKuKQtAgn7X42RgxdxHxxDMQx3vxzLv83NJ4YBdu5i7aTmxDTycYGjgHmE6Kebe",
  "key40": "2Md7bwW3cX4s5dqin6Snn6kkGPFpYXUXXbNrw2pibmqpF3Zkyq6hBUcCwqxcvaCa1DfsYyCmJZC5gR9SqFXWCzc6",
  "key41": "53V9JYfSsFgnGBXcx6fKN8D8QZXKK2dV7bL926q6hJCiBuELas1ZYYoYiLvavyH1iy1BGiEHAoWcEde97E99SWfX",
  "key42": "41CLPpRWDbgL2BX4U5C1FGF8h2ro6bMYi8WyvgvEKQPRHssXyGF11gZ7FUy4KJSXyn9oDCYSCPzWm9syfxobbQAw",
  "key43": "2gkNytPiuqA7Lah2UpEMkckm28KzGQsrsAFAugs6e8uuB8hPCj8Ftv4k8F9C4ntmery4PjcY43qfCergHmrC8Bt6",
  "key44": "3j7CvR3FRf1XP5tEQorn7XALm37JmhYsGfPpYm2rrZMFLQfNR9NjZ3AsDFuxgSLWaYWrcduB8zHA4vyEok1JqYrh",
  "key45": "267RSNDrToR4aVxmpiJzk1zf49brvhyfq8VzTzpwNqPChKq41VmyGpysg9k9mCd26nc8hLnhUDJrzA2efofSvskJ",
  "key46": "63q2VJzJrXU4gjeqT3ChZjVQCXbpeTtfHc5WVz7m6i7CjK29acU3VwKESx4T2S6bzWdegrLqu9gnJKES7uQRXoNF",
  "key47": "yxUEtgBnzeCFNXRScC1NnVu2ESxRVDrirTdEc6tyZX9FjH9QgECMhiqukSa3q9etdsGXDUVAoxw2jzQUpLNaj4k",
  "key48": "3xWCukBwoXibTmaLmzXrHGKJbyVS15dNJ6X7kVYv2mxAuY8RGyzrsHwjQGW2Ze4HEcEcb81KqxfvMVeNUZhLdXLZ"
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
