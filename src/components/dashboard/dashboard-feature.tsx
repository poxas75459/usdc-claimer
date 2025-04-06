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
    "3TDzx3t3igAyC6jmDFewWP69HVR3Pe3N5HXjcCadQqF7JSCsDuX7RHvTdUvFK9EMACJZUmoh9BRUf97CooRpCFPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZiGL2ePKU9L8aL1JkfvhKtKfVLz1v4DYtZPvmHwdAmCcWMqgg9j7HdfzfKtoDhni5o6bFtEqjW3XfqqfUPBdEFi",
  "key1": "sSnJDfUJykFfJcYoqoyesnnsvsUSwqN2cDVnhq4zZ3oBVVc37eQDkbGC53NCf5kx3mnqzTqE9PmetxvxaeaKmTi",
  "key2": "3iZ7gzgiSoiNfw3Y5vDfMKf5FSEoJ1r93kyxih9iDr5gFsZoFMz9MCfxQpiTTfH2CUPpWGJdeW9psXTJRzFW5nHz",
  "key3": "2HDSysSRFPpR4FxCeVhQuCzFd7LLBSZauKc7Ls2yxCHQavcJCe98MnmLBdmwT5rGyowSXfUXPoLJf3wBC7ZQHwEc",
  "key4": "HW6qzuzbuCq68JtQdaPBbE4H9B7kAQnV4Z6PWDdxbM6ZjSve5oK8XenZTU4Q52GS6sdpvJ9patxRZ4NsC9HDVRR",
  "key5": "4j1hEBQfkqexX5xi6Tup74ZGRpyHN1QVSexMM5xirx2JWXwwTjshoYsUJeMZpC7WuSJJgy7MdDacCced4xYMR9Ug",
  "key6": "49qAT7hpKJsf25TRuaeqJzy4UAN29KqUj6RvDJVjxVSmr1PA4Kt7vXDSV6ir5iP2zaVK5timTk4QVZYzALHpd7K9",
  "key7": "5acqjVD4E9LmTy9TSnbyoLse9uBvaAffdQQxi3cpzjC6ibibynd1cqkaSqmUtFyQcw8SntyD7V8YPv8bcwsPb8aq",
  "key8": "2VzoMd2QQduwGM6ufNnUNnoe28VrzGu86Kmkq2Acd6dRm6uAAYQAxFaUpcywRGxkV6qahKB2nXZQEw8PPDBaMDQE",
  "key9": "4CpUmHPtVHnTwpUHwpGNmmbFvXHMinRuiiwQwKwARNtbEcfFCZYe1MKb3owDvdo8RBwGxJdxAb7Qa5iFev9yhRxW",
  "key10": "ZYxXKjprQTc54A2KaK1skw4wB8kCQbAHXHZYrC8oMYFhFs4dSbJ3ph2BfXsct5gay1A3DLnELXhyUFs2esPWdjq",
  "key11": "2vR8VYfUungE5ycADC7hnmXXZQUaLPWQiRujsWAHGRV2pSYJrpX56MUxPTNWbvT3qXeYAw7R6G6ZbQ4t1Zr3rXay",
  "key12": "5XPd8NLtfQsqA8dZondJpU1EnTnjuAAMDntnuKqHHav2DvJpS27gSc63ZN4AHvij2ifkQgBBRZmpJqjRM4VFbKnK",
  "key13": "A5omMt6LwDMJRhJGbeBLezZNEy2NYKeqver5ndAAjW2RQR46iZ1Rtd2LPL3xwW2vuNH4rcQK5SMo1dTawZVM15S",
  "key14": "4aaUpXRzxTkfAeirEt9mMzthGJft9wLSKLwVyXMDwfR2Y8sktoLxGFb93a8c5z855hf4dfMetBNb2BRfJBixchFF",
  "key15": "3c8WZ2m4xCWXhLQy2zNxo1ZPU4d3FBtr76KmoMWqT9nELEcUfSoo8U76ztV5mWpmPcP37dmLarf3qrfvRS9FfZg5",
  "key16": "UG9ApfRJTpiiVi2KJbdsFdGFiXFtDUGZyJgzymbiDeyBBLHepd28h9CiuaVoa64kTUaYzHPvHQHzSFsKHjibR6K",
  "key17": "ntzpLtjSofi2UdMdFnFwujVCHuuUJeFdFcQN5Y1bxDPkxrS7GUAx7jZ6GrnLfzTmwLEsJ9ka4Ff79QisWGTNkPY",
  "key18": "4MYe64NBWniYAPFxT1Q6E3JFb2htjcCu1a4tBaVoWRkYSd9Ca7iBXDBT2rwMrP5vBNqsaEsjjVABvv89AArnhat1",
  "key19": "2eUMZ7RfViUXjE83g6uwRSQytjGmnE3L3vmvLmEAf8dNmM52ZRVb4grHP3VKe1GXozXnyhcfVficsZCbbJ48AgAx",
  "key20": "hvPY5SgXUpttQhUJdWAnqrfvpWU5aXThKuijgfKHtQFqAD1QF6WkiKfboTZJFt36GPtAn8iQTzXX7yd5zhWKNdF",
  "key21": "5BaSQhH7a6hu8xnhcejQtbVkSdqCmQsP2rVQqG2Ugzpb34X9zUN1TmTPSKSATV5riGNFqyyJFbiXnPS9NtbqpWYt",
  "key22": "2fprTmYUzF52zLPtzWstHBYDbTeXJifQfCfj33KMSnFHA7bf1XJXJjKa9bgw5iAr5k6aZTUCDZ1GkaBFpu3rtHWF",
  "key23": "PRgXGRFoKuj13g3A8BVXraUZ6fzj9oD6JYDQMAUaDn1Y3qisoMrVH67ib4yBHu4YyF9rhe7b9GQ9biHv9A4fF52",
  "key24": "3gB4ZHdJ9coUvoNqCtPGDK3ZvBiK5he5TzSe2JZVp4N7Hmd7FWdTV6cPJMnYsGjWGB51d6tVGmm2ZiLUxiNLwueG",
  "key25": "2xJbLs8uBwJZiPkgt1gSxtah67LEHSpfqGhcwPUK3ZzgnenbT6AXbxS9KPaAiHCwWR658rGnXMzL3LHa6CwatKi7",
  "key26": "4e8t6YjEFsVqbug3Hdmzf1g6tyMXxiaJZsKy8SnMy5VxUeDYY66uff2ykuVE67gZvFXiW672m2h1tGwLausxDAMS",
  "key27": "282DtxFRXSRG8Ebir7tw3DcwpsvNUh3xpZWUvaapFF3ZDajAJcoWdXy3MZDFKj695z1ELNRju3BNVQH4TkzwD6Pa",
  "key28": "626bi76hzaKo4S7oGmA3Gp7oU9QnkePt4C9jaQZaVbfvQziUhieQvj6bmk8Qy375rbtc2DWTazCGs7qFAQJCCjWU",
  "key29": "2xL7s8SESwFUvwGKUdqwfiQZ9Fep7BqbhCp4jWpWie4sf6Wbr7nyoFijgBi57pHo8GK3E5LLJu8uDBeGDYUJJsgY",
  "key30": "4Jr6UUL7cUYeL3QnCca9a5BskP3rGxnT6LLVadPwD5g1hG5RMrEjVPd7hTeiaK4akjGJsAgnLUBuyFA1VxP4NLTD",
  "key31": "4PuuWxd6rdAGPupEVY4m858rsjZSRhTQczARNx2VPUbs7hPcR7qt1zgVkHBBUxiCH4vgWeQVNe3TVYUx9mVpQAPu",
  "key32": "5A8pyFbM4UHbU4wM3WQmi2LQmw7LfAobortiJ7PwsA33hPfqzqADiAUn25JWNBmDewxntpKQSjWxkELJouxg62oL",
  "key33": "6573faFqkunxFfuRCQkJHEoWwAj2ufsA3qQXkbv6DppHrfMdkhKDUBQtztxHj4NCFznQTnQmjETdax4FVQFLLxAp",
  "key34": "4joByy3HxGghTxDtuA2CEFNMvd7MzSQZzXDxidUL6CNNcUd3GBYbPnZBpeEnKiAae6u2iJqu5JwSYdtNwJ89ka66",
  "key35": "49iUQDA3yUyMkkrajR1UFkxUeJbWmKy7syAwR6J5BT6nqEgLmH4MTvH3HV7WHSsG5tuw1tg7CakFNUNNLUgSxpjJ",
  "key36": "3wSyDK3Lw3r4Z3P2X9nKC8nYuuUj1M5C4dcdrzbvv9MgNs44B5Gkmpfzu5M24rzG4acApqLRjoGiw7jDky8pBn2L",
  "key37": "3qPeDekKrpamrCbpSnKuxPJQnSmF8iZMonkMY7pRSWYhbBqRXMHppP1rLtZyLAhbTcxEcs6xnfEBD19JPdtUDVBr",
  "key38": "547prxp1o3YN6AV42ydQjCxXDQdD6xjoG4Li1LrNPavYhu6L88dNyQyzuNtpFDWZ794F8vM1VrusvdymUPYvEB6e",
  "key39": "3q5r6uEvprhtCVV1krf14wSsiQ81CsCuaXxYQN2jhRZjnrwbPTX6REnF1ozZrpi8D1JmMgcRgfbSyoHsFvMeki5m",
  "key40": "3eFXRBxEwGLa1Dw8DPCDC223zbiN4J6M6n5yCtQoLrDbJPjJJNenZ8ZPyG1f1JUvRF6YxVEerPY7wkVUmVTcFCUt",
  "key41": "4h86Q2hvw8jcboqzvw21cQLtqop2vqhmZhXCLpe37nSM6e1vsxVpkcQZ49umiWJrNYJYYTqtkB4DNE2UDvdEAwyX",
  "key42": "4P513xNLQhAuY5Mg14z493fBAB6xCqCmVTXuGLwR4GLPNrLLTtMnVz8mELtZB2BykgE5dbf4Ki9GzftcKPD3VyDf",
  "key43": "28bBhR3tBrFCtvd8q7zCREJnWfWBGoAjeUQtPmeiQdjS9pPcZFRZSTPLKXRauRr6ShU6ou4jvKkXLa8JzfupBoMf",
  "key44": "2pqQFes3aysiiVDHHw7VhbhWrzitc7q3bj9JLdqn4KzycMdNJQVAkJ49nCdBvVY2ByLe1eJgWaKqDfNfr8crwwTU"
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
