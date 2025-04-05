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
    "5gYSmdXXqh6iW3WHTHnMFhvVbTyH1fVeX6rUJJMVyH6HiuQC3VrTDTRsyvWP4yx6rDLuXevbMPvqZ2ATn65S39wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1Wc8C7yKZ7GUASz2pxNiYVbM4KJthF3jGnrXFYwfaQrXhTjr5QPK4TBraSrPgo9wsyJoUeRqBhsH5MfdKTGmwm",
  "key1": "2D6sGLJXDKJoVrPPKAzK8YT5JByHWDjqwsJjNZFaL5knaG5VEMRigYDXBLxGyutsJSpqoxKzp5GgKgf3DD5ZVYqA",
  "key2": "5JzRDcyq7BkSCmiuSw2v7cmSZ3NJEj8eRV99oKezeFi82nn1yT3XviDBPVpbR3uEkasyzxh57bZ2eng8oEnMkAT4",
  "key3": "4qoAtL6N8JJoJx2mVh1gcBFPiqfHwRYM7VMqM5drJBowDhAzKZ79VVH3P8VaUr8BrWA74XfCL4FfLx66v9CMhzJr",
  "key4": "5k1d3qq7M9XWnKAQ9YDi2t9jt96zYFudrRnXFGY4SPcg4CicL48L4HuXWBufYvA8yeF3q44rM1wdJEAjewGsk3uR",
  "key5": "5L7xSL5DyYGhWXZvb14XdfxSSxpVZxynqcH3WxTTjVE4jhHQ9pBT4JQxk4PsCtU9pKF73u7CjbrsNqS8wy3gAWzy",
  "key6": "5mWC1RmEdqUXyxieaaxiYaRi1MuAZz8hXuCZgp3VUsA9rJWgxyBkSWYmtjyfpoqDNZxrHU6HxjHRUfaGqqy1beyh",
  "key7": "4Dyw8kWetTXPPj2B2UcNgCzvL238qSyS2UdN54uQd4zirKvbX6yboQUd3zKgAqgjowKsdRvQoRBPy1vAiPyAobvB",
  "key8": "4Ade2MjE89YhRwJVvXFgyaFpuJZt8wuHhTWhTkYaEczc9bdhdVN4aJ1FeMaHUBUB2woYor9QWBxFvGfF7LtKc8Yo",
  "key9": "4vPF51xR8Dx9QmsvSVUJHkDkcHFnujk7NLmb8gejNYbkgo6XQgTRxdqQi8pUv61s6k5DhCcjsW5N3JiGg7MTUH1",
  "key10": "3DAebDwsyxqSr5aiur6EPBwLV1tt1CQpbLFcdf4h2ZwaPJuJRsHdXj9uFEEHKfH7MeRKWvbSEAARdgSzH4ceYB4d",
  "key11": "32N15khFeW6PdjqWs4CgoajZbpfFRaYmwSEDra7DgWYF2XfWMZUmE83n7JTuXwCnNKEjjaQheWGbAf7urJt9Doyr",
  "key12": "5A6gkVbqp7hXEHa9BfUAJiYigxNTx7poEB2yXKW9TTNYYioHQSDbcVcEnT69jP9MvVZ2qs1A8uWsYTqoYCLGYwWY",
  "key13": "3b842YXnxX94Vxq4nHTsMM63C45RCDnwbZRrV7nVCEMCU6z9G37wF5uUSW15rVCUoa3vFBzKdaamvkgGvN1bDouk",
  "key14": "JZgeGt1J37N7ABAuPbwGD1Gx2MmovruzRLq8EPUfJMxKNB5gsfVhjUqJMghGJPTsygwsYAGNmtfxoV2hqEgcEnA",
  "key15": "3GdWWd8oPfeueoTb9Rzp4RZExWBH5Jsc8AJZirCa1k4jjVxwdHA6Ceh6C9wfnoQDwPktTbTaLoJnmB9bBm8DPR6n",
  "key16": "4sTTcphs5vmrYqQHJFwT8Ha1z6ftK47Pi8n9TzneFuu5YwY1nrLWKoo8j2rvJ5xFn1wBK6ik8qXqPswinVUxus4Z",
  "key17": "5b7eKwzi4vQR3QwzVUkQKBxCUHJHFQ8TW8eByiW4KNa3VBguXpsv7Yyb948z9SxjNEmfhCkaqviPD9tYDHuEo9yv",
  "key18": "atHaVMVfM4CJP2GWenDhE3spDQ38mxNEbDuw8ZK23TcYw9m1v6L8FxtU1tfR7fEnS8GqwgTq6KJW1RT279m9Q1g",
  "key19": "4igyiT5iJjkdG4fs4hrrKB4k2qN9wHpGfacrpDJsvmr9g8axpwusbJiqgPUxFjGktKMpvGY5SSvXFa38EdXV5nV",
  "key20": "3uJsyM4XJ6bTh4cuSfj7ANgNk3SZTZpaSBRmXqe3AVk32rKjwPqH72JuR7uJZGKaPDXxbMkVnFHwv6Lo17FiRCA7",
  "key21": "FFx9WFxAb5v2X8TyJ3aBVFXeLUwVSeMtorhdcHK5jeWsSEv8zvM1Mq7xGwyZ4SaxFbrMn6AgN2AoGYiCoUnVq9h",
  "key22": "33Qo2dAwy8camFSXc2qbkRzyubirwWB6kK33bLwbhjHVvSxhJt9GNXasLbg1GdxfP18WDVSffpLxpVgDuVAtW6fs",
  "key23": "DRi2R99CUU9nk6aiFJsEUcR4CavsYEkTDcGasVuZfq45Rt18VfJHBpssjuW8W44iCkhdzf8mk9CwDDYv1RBsRai",
  "key24": "36A71J2oFsYTYVyxy3E7TLG8GyfctsEGP1wyvPYW8SJgJFfbiNobGW9zkLzeeNBPpWBWUKPUYhAanzMsZMjrEmno",
  "key25": "4NRtfrdX8fuRA8M9BEWQxyaw9vWdsaNsQgoJULiwAoryFhptJZYScV4RySANA7Tdshy7bCtcSyqxVDbR1hnDvQW3",
  "key26": "4EMB2Pqs87mxbcJMTiAQrwN9s8Kq8amcth6D2UEtRFkxZqpiRZkd1xsqwpwCLDm7653tBboJoWjUdVny74T6K7uA",
  "key27": "uBUCLRPGimZM7hDXVGwCh5kgfBvJek21dHKeH21jXrvo455kAf8AKpvcyyj3gazcGe6MQLLd6n94VSXGWULot8z",
  "key28": "4jZdPS78AMyoSmmyzRMWdhFaGxLBHjccCEFCoNBQ47XWgReqJy5bnteQ3h9cWeZFHLg31ac5PJfrnPHxUiiNqfNc",
  "key29": "4JJCToMZGvVGsyv2PreRZKxKHqzGMRvrer6pLor7wv4ZiZPovsr9HX9vkZf69qKJXjmbphrD3DDCwnr5mGSgzSYF",
  "key30": "5DeXpuc8Q9gJN9tMnUZPrpMqRq64Nb7bvt75rWZfTVztWtznjVT9igCeM5riRR9CkRSib8qrhWkZp2VHYDjcXPjU",
  "key31": "2WZn7RFUSgjrjdQ3pMt42zhwBVVzqekgwj7TukjSwFgzBPHiEcNobrkBD5Y1hdyZnmqJoC5SxetqRaeosSCxaPur"
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
