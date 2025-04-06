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
    "46qhUkcD2oGMjbfTJAe6W7NzsMvrM9aFGaBpGxBVpBuPUi25z7FvAmuMaitshkMbZXjUUfpyAPLQhXy5fjqF1wP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJWuD4nx3D3v4GERPKXrdjT9RbrLEyu55h1WQiQ2RiC9xMzQjZXn7cNq4rTD26sxp63Qw5dAcGdMofh1sphhmcN",
  "key1": "5yu2xTr3Et2kDdDG8wVWLx6k6V4W4DgSRMmAXfgK8bTYU12eAuJrVRwoGWwm5utbmiisYWSWJqcDFA88u878VHwA",
  "key2": "3BMMM6bLf1DEC5qm2vZ7phQLmrbZFWg5Ss5DvWY8CWyXcU7aFZRAyYYtguou7dKqawgCpWt8xdMGendsyS5Cy6dq",
  "key3": "36pbhoHv14RR1US7CgjXS8c9N9E1WaTDTzmTbu7iAMHybwxyVcU8ktwBS9hs3Y9jZkQBqxbyXgdAockgRjZZgNKS",
  "key4": "5X3uwSBAyVMeD8W1Rb47nzzxaxZe3Wqunmb6AHy9jYXmFw3fsuB7ddBXnVVFDAWaEL3kb7LgLxzt3q9r12zPy1KH",
  "key5": "SzKa2sWoa3X9LUV3hTZEvwjiaAwn7q6Ej6FgfrTyGeqa8oJMgpaZibK4ggcEaNnn98ejzGSv7wkRPgKYqXGZxRD",
  "key6": "3KPDkVKTxtTRMqxZsk1hErk8j1KSS9LqAiyHQdrLm4Qe1P8rRcu8XJxD1mT5P9wN4yKPVB2qgfjyzZjHWWLNaqw7",
  "key7": "2KpnJEQVq3djLJrxTRA5N8YK2r8d85EjFmr4ajtvdnt5wwWAN2jVUJvkWwtEMB2hZHBvsxKgyupjHDZUKtp5CUC3",
  "key8": "4Ax1rKLdxyyWxio5vWSkmg3Hh3Q2qyb2rvzKhyD2FyBxGFsgxnF2CXCqbnrFKpeSFT5ivddhcUU1QGkAuXiK8vqm",
  "key9": "3HTqnatDUujSfhc97VNDCcJU25YhCUGjBLLXwFu7ExekNmVUWfgxfRTnsJYuwCGzXUw6uGjGT4JeDXXKgTNEpz8q",
  "key10": "5T7f9YfXVX8V8MYR79cgZESY2zZ35LxxH43j3P5BHf1Ek8wVd2EuKBXk4zMAe1dC4i5ufpeyFjZLU2bjQAXcN6a8",
  "key11": "5BChc1aB4SjjLqfEomMqGPCrsH3ddLf7jNqVasMzxVzxyStmAiZ6Zw9Qg63JN7q9oELQ61UmXfqqoF91v2cFCVee",
  "key12": "4jnRKhPfcZW8L56pd9faiMpWDxPVqDyrF4dgRsPJJgAcdNGrsb66xVWzUMNtH1MXmTBXjApuQJMQ8M6uwSFd6AF2",
  "key13": "2j58tqyQYVYrUqCa3inysUfeGBJ2YrP8xb7yMwN8v5D4GbNkpi9R1EGaawDGfRZfcrDw6He4wEPF53W3oiPRd4nZ",
  "key14": "21H2AjQ8Mov3ZZZ8G7EEhg5iz82ijiqUJquGUmHqneqYu1mmPK17vgp1Gz3mDMJmBKbyp26hj71MCz88XUkWnFDo",
  "key15": "2RDKCmCGskq3hH5WzZ6UZB9hYks7USLuQeACBjdHq6pyHCzsdjy2GphKtcqXgfGCCZMbieL5xRyQ2rRPXJuTQuxr",
  "key16": "5EoqTPAty6tDEpEYp9zGN9wKDzQBVrXhWLXJfB2KuF6CpPw2S758JqUseVXitnSV759QfEn1gbevN8GC3PUkJHdP",
  "key17": "2ckeVf6UZbnS3sLjbDb2R6MsZ1pHkJAMpAP4J4nQUcXaKz61ZxjgRJ5B1nguLC7ZnL1YzPfadyQe1azwHJdTrXH3",
  "key18": "4ooin63atgfFwv5RWAyZUUN6kRXfXHsYs7UZVqxtivcv3yty2aaSzM8sNDpRxXcUTizrZDdw5fW5KFD7dptk38AJ",
  "key19": "2hrc2aqtLckTyESp5AQ9b8BPWkkvVhFkPKHzxEU3MzSTcZYSdP1Xu3Z3e2HgFfWH9mUnpNkEyZFwNMwAYS24YRp",
  "key20": "4L3ryPw8h15Lav9VWVUdQbHt9c69iVC3CSzAuSJ55qC1hQ2BC3ZNtYV4jvJCQbNcFGsDJpyDqMMpQCajW39vKnV9",
  "key21": "59Ce3MngbzeCQw1mzTX5LAKgcsTfgieXKePnULnWbbnk9oXEtJCBoahUAZdsjX5Ry6i4RikAynTXeTh5iP2vPD8Z",
  "key22": "2YJZK5E8qwjnR3c3yUjyaZRCCJ4KDezu9BbSyHwHKWQ7imeFo9v5f97ftevyvsdBdk73h7aEKXGnJfV4nrpm1Vpq",
  "key23": "KSTWK9WS3WTZx3tFNkwXw7Q6ghGd1b3NS2V6MnhYJkddea6FaUbn3AyVfY26sEMCzktjSKmKSyNTrxdLSQk7SYa",
  "key24": "48Wt6HSoa3uRhvxKyy6uUfXszh7Jv2p6sf3SJtLKaPP1TLyCpJgQQ9yeNDiiGgu3e6rffzqQbvP8cwg8xjK4YSfx",
  "key25": "5FkpFUxLMAbk4ovxrLzBSMKgzjrNVqm5hFtpuNCP3tNbt1okWeK7JtCXaRs55HD3mdCc3tmjpqhqzRc51NV3s7rd",
  "key26": "Pqmmyguz3XNgw36r1vUNt39a8Qe66BZpBhRZfDMvSk6n6MnxxGGFpNBNtLQEbE1Ea7ab5uZ9pQd1qadjv3sv2rE",
  "key27": "3KkJxSKXzqJqVi7joC2HUrQtqmQ8hpDDrPR3881qwbjxG4nYu3WyWDaVHMHGk7suh2hTLZnYcUAsUhv5jrTDuJ59",
  "key28": "2CfXjwogFzHaofGTt6HqgBs5XYNBuHhUeMq1hYojRn3HcwLDTGAYg4WtjDpzGqEZ361FBpmxgTQNDxMYLDEq4U3f"
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
