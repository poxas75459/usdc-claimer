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
    "4eyDiDDTaxkkRPwwKTq31F7nsKQBHCVcYhNzwNf4E7rSfSzcDnfgANyu6ysAJTAeN91q2z6WJs5GkE1GuqDkruqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62yKgDiYUc9vrf1hc8c7QDNEKS71awQDpQQTJnV4u6kyrdkunFmzqDX1PhkHbnFbaCeKigaT9tua2ABB6XhTZ7JT",
  "key1": "3eNSxFufqkqZiFEJKbq4eAWB1VBcX8MZr81fQhCo6oLKpPuC2DA7KpKUi9jP1WLqSFxU4WXFkc2bgnwfaiducY3D",
  "key2": "45AEGpxjA2cMsBQ6E51CPgoBWYwbdnY1mxyiM1giU8necy8F61BZa87PTQwk8pUjgW8Lm5Rz8JUa99KypLoAe87V",
  "key3": "4BX32AwXncRdeMNNRm73TgDzKgFJ3VkvMmwXpJCLBP5CnMKjqWDUrwtNXemKRnx4faXYerjJB9Q2AmSQU5pjCaZS",
  "key4": "2fFCDmnH5okAPmd3hVVEEjx4Y5gN4uY5QHmhTDzge2C52tYeQEzTXC7P2jiAhG9LXrhgcBHkaPMehY6SY3Raaxqy",
  "key5": "51pasZpceNE6TBUW3xYo8Ygr9PUwYWdDNGJbJbAdCjKEuuEL475ZC68BgkgunyEr4GgFNKvBzT2V6ktvwqdRa3Ry",
  "key6": "2CXbnBMdA5p2oxuBXEsm1o4N9QiCBmMKX4BqbZyYdCaBCdGYe8ut5aDtyARZiXpQ7PkWcotNxUNwK5sFjy1qy3Jk",
  "key7": "2de8zWjaLWyjnCJaNcDi9Ysq7wCgk9vjz5THs8SqcDP74wZbCCi3stvErEwrV1UsstbSYvJWDjC8XtLt5F1a6s19",
  "key8": "56vijSZMH6o6uoFYnFTm3DLKJPd8ESz2h95SBHrsSR2NMdvp863q2buPYf6jYJzfrfZt3Px6HpheMnaSxoPfv4ZG",
  "key9": "4qwMZDoPRJJH4Qj2f2JPNsPgXuNjr8paKd4pp13w68hdps7gpB4mda87b4dP8WsA6jnVpJFQk9kwATzM9tJvQixe",
  "key10": "3rivNMxQUtWFbm8VxesGAczeDK4iEusWZD6BVcJiEib7V24CHjG41cE3aR337H1onwPFedtbutu7H6oK52JXy9rY",
  "key11": "46mNgTdyE4FTADawrLGqQCMqGViXumjT3DnQdkVtuZUtTXEKvWcGEA2M2hhy7E9VYawftpV4mVvLer9dCwCknvwo",
  "key12": "3YWkbU3fzrWi9c4khzWsJroHsaBybZ5TYit5cReTQigFzW8Kkr51XuHLZq2Ejz9BnRtW4CnyJuEpGeJZfXvemrWe",
  "key13": "31sZAkXfd2nYwCuJLAMz75o7tFDRo7Rsf9RyDvGDfpUJtuGfHY6uyxd4La9B1brqS8i2jmqN4i4mzvvZiUjj2AEh",
  "key14": "2dQjUEqW4wxz3pfjey1NkZzypnZP17Mu5i5yN4vfxGF9KHDiQxQiwLXhLFEVsHvB4waTzJeacDGjiqUTdSViKccZ",
  "key15": "JhsuuktFnXSqYJ7EsizN3tA7CZNBhEEjg55xfhT1rQQDup4Mv6MRjZa2VLB7PkHdJeAwSWtpkDRJ6uprvQnM3iP",
  "key16": "62gSe2qKKvD3m45TmSSC3FZ3eQD8Qwn4pBd6MC9PB1zxTEgoYkYUBeTQVGskgYMRgj7QF1MKa5S41jdNgmYHdBnQ",
  "key17": "2DPLe9zrLgLynNXaJuoDuWiULavtVHk7g6CXaMWHCTBz5VZ3AXgQgu36R7ihv6BijTsSHBoR2FkrU3UbN8q1AcXA",
  "key18": "2GEjkM384abgy2qz7kdNywhvLf1iAAfxz4XFYnrp3Lrvo3JjjRi4fopMZED9rVuy4mrZXpp65toinCrqR1evUe3k",
  "key19": "34H6mNvWCTbgsthUfpWnb63cuyBCe5sEShRWYrxqiwYewBNjfYXopJpk2iuUrHUyeHFVfxbE7qcGgudm1vNaz98x",
  "key20": "3yVSoidoG8F6bZYtyGsHhh5T6z4RsAjycBTmM83mFSKrhLetqP6A9sqfdBJMHMqMNQ7k1bFWVgEHDWqzyzEdwfg8",
  "key21": "5JTcUD9sn8Tiioss6Z5yfEHgUVgGJyZPZDpJhbNgqeTzgokJ2eaoNVmg4GLRyRboTqqQZHAzf6sx9Zi2JMP3i1Xw",
  "key22": "7fuDJPaASUiMNcvuvEfry7SReLCeiqyvKwshAVY4R9wNAXt71MwQAETFHTQFyyxXR7yZTwgUwj6dQYVt2zrYj4s",
  "key23": "2i6UASqcYiYEi8hjWUSyGe3Tp59FuxQZV5nUKkFv1uBkZ67GU2hime51rGk4JH1Td83TGWPjZykjAT96G3tsPAox",
  "key24": "uZWKKe4nExx2Yumusa4cdJ83yKwaJUgHijQfaaEjQ6xsTFcNTjqav4RSs5H8tBK8X99ZcnKrEY9SzX1qZq7zz7v",
  "key25": "wR3gHTV2PDJQZSnNVDBfip3da1cMU1nYH48g2nQyvzELyZmwfPEBX8CALsWTxeW6svhcgSHSyEgVpBC6TWVmrmu",
  "key26": "4hbNx6yh9veub6oh8jkbbwKEHJUSnpRmYWZzdP3X2K4M8uWVCY3ypGYCtW6URM45S5L2qMfePf7AE4osQUTuRZe1",
  "key27": "64Mvrug1gzj4HCGB9EcGLJH9yrC92UF3Kir6QJR7KsqCmddqReVDqwL6bpzHMLu8i4TZJrjEbjfrX38L2YGEWKin",
  "key28": "5MVNzfRDTdjBnfeyreGYfNVpvPUFmDU7tNTXudGRZKViwVWCEEjeimCMwqf1jHH3rtWKodU84wBnGLGFyZwTPeva",
  "key29": "t7EgT8aE7hLUc8pA8zAR5aJqpUnBaGpF6n9z8wjHidEEWEpjAxFWQyk7DUwVEkEdXUViKRsWwUQEdhXnHwUYGmw",
  "key30": "RtuPdD63XZjGKJzr7qxWAaVdLEnVhG1jsKbAvH2iBEwLWbLMF7UkJhoZ3xLySa1Yxb6N4msXVnmZfy8GscbVXjJ",
  "key31": "4KrUt6gLok7GNJgwcQP22FvYmzgAJmUWWtEwaQMFT5axQQwLeCDVgb5samkXFaEyMbGLgZE4d43oZfasgutuGQXK",
  "key32": "5BxMpcdGMAnQj1ubFWu2JxTUMqBTQhxuS22aQSoXm1TK7BkVuwWnZQPDSEzDTg4boKDyYiktZ5W52kMqpVppJ2ic",
  "key33": "4ABnsKUVjC5b6fv9hdzapa2rCAtNvRjRuoxhyXb2Rh9bATZcb3nyz1mztN6HBZGKHMSzerFoes8ESTBNiUnNmMWd",
  "key34": "379Fm3rj7dKRLZBsdKfun9Gv5eEb3K3dHvdaGqwB663gGutX33EQSbtaioHRoXfCvSEb5kS4kD6Qq4zDb3FgdLFz",
  "key35": "4ZFSHrT6iEJ6HALTRBP12S2ET1HYxJqipVFDgepwtDMfkvUeWZ8yp4b4GpFEZVSpyqCWmskK8snyM1kaaFinz3bo",
  "key36": "5CvXScpnrYDyCucPsbCgskJdv64if1rbPSvVZiEqossLobYX5PKc2CJMWR85aSgTe8Y436shS1NsanjogUSxaRpW",
  "key37": "2mfCK5uy7Y7UVt99b4XbXthqYTcZdnKzVWgwe6LLbF8EtNAh62YXrDCYA5ncnXc7pArsLURipwH7H3v4v87UAzEi",
  "key38": "3tXJq3VB8canYJNb7czVW4RA9ZeBoXRob3aLgRMtqV8uW8DqGgxwyj62JpRpSk43hjAd9MxbwMjSeabWz9PHQ1qk",
  "key39": "36wg6wnc41KHQXZruBtpjqRdhqCwNfpdtdmaWU5ERkdJ1jCBm8apsaoghQ6aytLBZLT5VuFrT6Fc1PU5EoVYh3aE",
  "key40": "48kf16gQtRhxkLeoGkaqTtCTqq54egYhYozbNjjDsJmyCmGag1Tonxhs3SqJ5rQXZfytxs2JbHsf8tiemKUgVTsM",
  "key41": "tXzKL1gpp34u316RJ8JxokcgYSxcmb2TwDQ9GhgBope6jDoLqUWmzugH81mjY7SY5xYjmw7uG5YHrzhf9oxk6Qi",
  "key42": "No5PTSsHh5JioWaj98PcdVQ5yomVkfvzPk64TVin3etJpT4BEopAcZVWSvXS8AVPNywFqjVpmZikVswKWizvdKk",
  "key43": "4MNzR3a82nEn5o2V2YtzxdaqvAGV1qeDYem8xhYaeSx3tpyZqDy53GBFLmQJdCxkN3wDySikCmkobNfSHWRTqkeC",
  "key44": "2hVczti3J1A2dtNe6SZ2YoycLsSz77kNg1E7KjHWe9dBzWBSviQFzcKYVaYNjM1wozsrYmxq3j4DE6x3YJ8vt4mp"
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
