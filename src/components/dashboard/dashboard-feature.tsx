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
    "5BE5gF8i7cckjoG527AMDA8MEjmoKtX1g7o7dqecJ6Fcy5KSDv237t3KqkZssz7HBAodkJS2EKdv2cqFRCSU5CCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRDW2KuB3q7MCgZqDMk2QtNpcjRoVrKjW8JktJGCfGe6aZfCGDq5zxbbosUnuJtcnzEn81sDjWfyCHsMdtBYad1",
  "key1": "4iio9dcoBafVQYdmJgtkEKsNJpewP1bGtSyUj7pg66QzhGHcB9Lhr11KSy7xmtsKcK9C9qhLMbLREafUesLDb9fy",
  "key2": "4s8VdbtPdeUTunvKyL9Xn8G9PkzRZpyeg9kCsJN9D1F3DCv3fZgCNqxAUB2i3P9NUFR6LR1kRrrBPwq4dcRavdVq",
  "key3": "32Q2gGRK6xkPDBWVBAymFbJDEBv1JturmWPDBouhCWLwHshJhisJKkn9R7GYjMaFjHBnxb8kpgywk3g6hmJE15ya",
  "key4": "5McwoxyDPAV6y7MZgtPGf7q1ft943T5QpEbecmyL1erWDMdZAaNHcqAFHmSMx2RMSFwhZnaUrudvqSuremGQ1bNw",
  "key5": "3fv2e2LthgxjVyLjr5vSPzhgo6amR4N3yFpPuxYVNVLJVJ3PvsbMEPLmhsT6FdgCpxodvCWjFpms3P6uNvoFv8ag",
  "key6": "51eBLqo475Co5ajQt1T28mdsYtr5NjoVuzqPbGyU2zmoGwJRXd44Aaw6Ezys1tRQp57N83PsmjxkPfGAUiMsfjdr",
  "key7": "29BgzDaizzqgxszebSfDHVUefVxEdJmGBwaENaMRjAtwbU9fGPycrN89aVe2PgTJVrse5VUHuYLb91z3pYbiRzrV",
  "key8": "5ob9ktvBVMrobGjDGCRJwLFDWz2ijZw1eAeMieSQa3awQxfEayHkKHmm4F3uW23K8cXvGQAAsFCxAmoUpWJGoaQb",
  "key9": "5uQvC6nEQehBwM2oHgYc3npW4hNadDaDuxD42ALHpAuTHoGbmutDp8KL6qCxCq8fS96ZC6x6iPd3PDf5iTvkmPoR",
  "key10": "38dRYM6GdrV8CM4DMnP5KSxhiYpNG5LYoTwHavmUMuoVwFmcKGoZVFFMFoZowWNLq7J4XnGGrpE2B8z46u1VkdnD",
  "key11": "2dtEtQtjvJZwtxPJrYrK7DkDbiHSDwceMvgcG65s6gVo1QHcSQqHMRhDy6ozxiiWqduon82QyWUNKxZpgpXmLTpK",
  "key12": "5nfK7KQzumZBdisduTPp7h4Z9qvES65RkftqY3g1j2peZpo36tehKcuJWoPe8z1b1kcGycq3WeYNpasYepkJmSQS",
  "key13": "kZKqvdPudQ4bkHK2ek7x7GxvCj9d6VaieHMkTybq3w8DB55hFZBXnDbdqVDpWrP4u9rCm2NaDJ6cDaa5VDvdmPT",
  "key14": "2Rasn97UQ9rxzTfA7y3XN6AzjxRqLLtJZjGx39N9yjZPdDRPgSVuETpiAE6zwgRhLYbzxL21dVDaJJKym3hHJ4nF",
  "key15": "5RtYtVF64Wr5LtvBcSB8wFimZPVfcQ55Lj9DLUNLUfTVnyQUSmdApgvjJ83Vfre1Wbo7gH2TyHokqECunVTWc3w1",
  "key16": "zn6R19XZpwR3e4fAJVaCg6su612o8ybkM5WdL9AhkmHZGbqprrXDQzAQMVC4gpvjn75QGjxp4brYr95vHEtviQh",
  "key17": "eocYFTxSYwfwiHVYC4nGMbx6Ai9goW8MNrNnvxkZiKhRsrVBmk9XZ8gAaE1bPnHBH8fbKXnR6EGpYjvkUNF2xKv",
  "key18": "jArh7vmG1szGTs4nLKQZ729REs6si74JPDwawWsuPKQ4udh8ZHkt6ZU8o9rokn9rYbwEUTDe1xDkAvjpq5evCnK",
  "key19": "4j6vHGQb66DVDDbFDQAjYwABGfPkT8iUsou5CiS5jbY4La9UgpERiyhVWRmJagBRR9GoKtvdPp1weUW5G3PfUSMU",
  "key20": "2nAx6mruH8K7QMRtcbUR1HaSMg4ZxGcid4yxB3BKRkbBVczs3haMsEJxMVXs7uNRnJD9ee9QVrh9u1tz8Uy38msc",
  "key21": "2rBJT94q2rqWSULz46fyka9Xz75hSYuU1T3S2WT2DVXDbVNdXdxv8kCFNAoK8K8tfn5HxBNAki4KmWw3o9dNtDQB",
  "key22": "W1AB7AqXDvLJtBer8rKTzkAs8aVeSbcemhudS4Uy29ML1RaybWasJh86caMfGw7cQbZ4eu1oy6zAA4jNMduacjc",
  "key23": "2XLAKNCNbs5tPqKab3nAMsGNsVX4vY7bDaHmk2fbsAxV16KeD5YVLJ79cViw9oYnnNQw24TPX9PkMts9PXMdbicq",
  "key24": "ikbUmL6GrCeACm8QtryZXddMKWSfnE4CfPiMuQhgH4q4Yiw1qPFb5heFUtUHcdd8xoE6PoQP7MBWsUvWGsuCJEr",
  "key25": "3gkD6uJDd6rDresLTq1csXXkxbXLT2bC2N3qWZmvMwqf46qiB1Bx4hacsiepLrvfCMPgnT98b8FPNXfpdYN9ejje",
  "key26": "5x6QvTTh6d6n8Ar9gEofzj9GCxqYb34R1dQNbmF4m1YnPkurFE61vsm1by3E2o8EHjDp59pteKW9zy3RM1hx9o1q",
  "key27": "4L3wiaVXzu5NM7oK2KMgXJ1VSBVAj1xhQNeeXSgypWbbTyQHegPqSEsrmxLv1v7ygCxpLzeGSmz7LbkeQFqvkQCz"
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
