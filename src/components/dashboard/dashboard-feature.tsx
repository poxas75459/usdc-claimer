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
    "5ofTz83KifFAwWNk6wR8fVVkX6qPfbjCZ3D2znn7wuJH25sQLRxxNDLTqP6ngpHjHLPa4p55t5bxXJsBMf6n4FZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDiwZGFL3neV19iELwurxDXHhiPiYWfZYMxaug3zwVs69ckheH6Ligg1NniwTMcVHh345SQe8mT3JgfmTWiY5ne",
  "key1": "41gMkTFiSfGFhH4fcdcBEcGi21LuQYHxW1NVJimkWWQxnjv7XYhovUNSPCpumdvLi6hqoYpQW7CCSzcDhWrqni3V",
  "key2": "4udKzGSr4QKuYjfQu9BG17VkJbzMg1EmRuaYKzUTd6vTgZ1eP3JgxavjxPgptdrkJ557MGqCvcwMd4338qV6hV8B",
  "key3": "52MBbbvX18UaTaAYYsHegGkenwoyVizYiumc2Puu14g1yosE7oCeAvYfcJ7Bc7TZnx4HgfSrDYKe5ede98XqK2wH",
  "key4": "45UiMdA2ggLWnocVXeDg8cjuUUh3x5YxpNvqfRksKURGahRj2Yhs1UzguYW9Rb3vueNYHdPn8LvaHYv2PACAc5NB",
  "key5": "5JugsnfMoDeiStrV5kYmdfPHJd2XEqhR3itpSabRaoWCRLD3S11Zpt9PRkg8r7MYY3xaanJQBqTee5wv2tHSa4Cq",
  "key6": "5AAfXeJgJcYW63zzMAgDRkrcvUrBRTVovJ2oBbzN7kuumpJHar14YJcKQT7L16oNuYy3oyAthTDgs66LGqjCSH5X",
  "key7": "56oAwfih81nRkxif9zMwFDSQxMopVpFx1fUyEb9iPjNH2EVSJ4S7sLrBT8iw5LN9eZt515A33mSsjt4zWqcSv9P9",
  "key8": "2yLp1d44JZ9LFmU9qcHEPxqAMjvLPBARC2SSyvf26qh4eenK6UP9oZAuYVVM113aAYuMM9HUuetfct4ehEryG2h3",
  "key9": "2J9rfca8ZBJ8hfrMUY1wFTDmSALgPFFaVWTPw3qwCHXRLLwc61RrZfJmKGr68EEvApGx2pSZNiweJ8Czco8hGSyM",
  "key10": "Pa81TKHyB1vAA4fgx6CKrkeKRq2jVsEkwcuJUHgVtnmu8DqHy2PY6REgGHRaWVvzBhj7pZ1bzeaKuaCEbcY7acP",
  "key11": "5BrTfte8xXhpQDzrxamDKp7LNN3gyYLUr2VDku2Zag3EeZi1hDU2RWr5Cy5su6t75645ms4FW7GgFNSKXmQFeDL1",
  "key12": "43G3f36Rwj7QVz6c4kYVRK2TLrHkr9r6uPZ8N34ryDBm5dAbr5ir9Lri1oNQ94SdCu8uRK6QUMYYuv2T9L5KSgDZ",
  "key13": "5KwEbPRxQv4ScuTh2tGivd3KfNipyEsMutay6EgrkDxH2JBveFUcE1HJHMWahTemGnrS7aKAyoTkbhDv4bbTTAuW",
  "key14": "wQhgDYzXvriXiHiQdKoAXCDWaX8gULcP1hJoMzf2tRpCUP8Nk199o79TN5nai2V5jwKtjL3rDyrnAMXzifLst7W",
  "key15": "38bjM5TdtwDHHRkT47dbfNdu1gph1dijH734bUzRSYHKoTzndFDYqkCLb4zkc3oAgPG5hrVtJgsGsNWFteEXdzTZ",
  "key16": "3uDFzixGkuJghYAVa4H1pDFurASMTvb4WMYGSgCTFs1bTXt3rhRzsQqiyF3aLriCVojAXxFNnCw9hVgCST39sXBD",
  "key17": "3NBgoESjzDmNZ2SQQXyaRNz6rARVfa9Lm5DVPZM9GnZvzBUshn64d71pm42vyqeAcevdDChd6CtnTyV68yWPUYwt",
  "key18": "3VTvKR7PHb54CSicWN1sd5LAjXbBqBJhpFPB6pY7R8mvaKh6dyCq15cbiHWEUMnXV1gDH31XtUSu6PuGruswzJau",
  "key19": "CsA5arerCbmSr9KxgEiZJ3aFDH69BGZMQog82Z3AEZMmspJdSeLnoAUNH8HT1nJv1gVf8pCwqTxGEduo3FJg7ND",
  "key20": "38utysAGbpPiq5LTERZDBCErx5ByjD7i9aXgicEQcTMFEy9haTk6fQbwAodC8nBwp6UGGoDw7hn9v9nmhcApDPKP",
  "key21": "4QyTv6tNdTU5oT23ebciZ2hgSMwYJmQCAdd9B7ULkV2wDyjqXWLc9fYGXqfAN32728GHHAi4zMzojCw7nfKYdT7M",
  "key22": "41Gy4xdwWL2FbxHqcBQJxa9UEhBcdg5JQDv5aRXFdLsUhv9tTSmUS7fPhT7MjHAgsUrHVkEDGfMqQsmm1mQxnZwV",
  "key23": "2SudmpKEaTzPkyWmnzdnoKh9QXBsoaKKaefprfxY2ewseYHfkAuu5XjDc8uKWRo7i4bVzqjFswxuevrak9v8Y9CX",
  "key24": "L2BGviWuGzSKpmAhHMSfURN13ZmZVEmCDoacM4JBn8WexTvGbSZujN49LyDU8L4WU5KfGDtq1L2czZd1qN4PRpQ",
  "key25": "5R6TqN18tiop6Y5KgDmXM3mhAoYSmxKzq2iXyfYrKhuQbGYjWDEGnS1BZ5MyqR8nygueUYPqX4qxcYSYfgGv6yvq",
  "key26": "2bymiuWrwizPdPrsqdQN87mbr6bvTbAJJaejc39vW8Qtmr8aMeBAbVLUZVk3NpoT5E6TpNNQQmzqmZYjoXxG7Faj",
  "key27": "2CCEykduYaHgrQX5CUH65JK9bmWuxgNdyKRWAGztskCMgN94R4x2VKpfrLKNQ9Smh7UjVMCCT7vVcsbjY78rRPQ6",
  "key28": "QBNxVpyoZTx7Vh9urLdoPM1QjfjPytVoi2NoxbD2qgHM1SXxsD28vAZiwPd9AQS2yFujDLc51cgXFtQhK3vNPtY",
  "key29": "2CgHgPL7v5vBCh4Z3ZueyVXBChVHHsjknu2AFSdkMh6B9uCxcU3vckcjdvwNpDZqMm5ySKkC28ZUrm6Duq3dUtAh",
  "key30": "3HmfgVYmoiisYb4fA4mJkawJBM7N8AinZNXRBpwE8omCwa9BtX6LMahhTpjR3HqHEbXFNhAtMp1sjWM2gSa6q9nq",
  "key31": "315ckPC4UaaGfy4LPVa9MD5x4EPyeA8gv9bqsMa3xoR3YAyZeG7ox6T74QubCCMiC315ZVdRdt2ypiEC2AawHa2g",
  "key32": "64WojZG7JgWqpsiAAZkoEQggMVtndiwNznrpiitFgLFyvNfsF7yyocrptpYU34WEskCXXESJTgFcxsNncqiUY2Uh",
  "key33": "HTf9p7Qy4ouQrLFgmbvrv8xbHPtA26WASEudsXTY9jwiKJTEhyz7AVLdzCP9zNaN4nRZPjX5sjZ57FS2Jp9X8gy",
  "key34": "5Mq6X9bqG82JoFGnx7w7Rq9KC3753EVzeJrfCBBwat83rhX92M7BfreyVdmeijtAryWcBsPNPYrG7aLnthPtfydK",
  "key35": "3WMFrGd7p5TwhEkFrBA1EGVFqkMMEDdJ6VDmna9bbgKjc8YdVxY4DKCQp6wgHHCh4N8pENDmbnja41zP7PaHtEi7",
  "key36": "k68advtA8o1UXyxQS9G2RsVY7nJqy4L73CVH8j6yv3LPETudrWgUFDF1jW7BPH1wAPoZku5iHdHBSRpp9rsJT7W",
  "key37": "5EXnQjYxGvZ3XYPzH9raxTfJ66E8yMEaVBDdwd92eypNF7JTF5VN4RXKbYqf1tvUGCf79WW1wAkshoLg9ZZepfWm",
  "key38": "3Z2F4bkYR5Wmm24YMJvA6287pwh2NWMJqwT8W8B4bDKndLjCUZVkDuRxzHfGJpuHM8L3JqABisLkUbyQQSiUY1Kd",
  "key39": "38xVhzLFKyd4Xj8xwVRF8MeYYCY8ABx4De3ZVECuvdmRmWQqRULM6jPwcKPBkF9hWiyyGpC2W1yyh2piUxFjkdRh",
  "key40": "55G8q3MfLwPrbviZGvn4muyUfEXCvUqidFxA13QoXjsyvC4tbJivXuRK1VbruhsXYvSKc8o87Tmuu7jmVTkckexT",
  "key41": "2d8c3W4sbNfbyWh4MaEzeK6UUfGRtzd1Wr39sS6keRumG4nGcZXUfgNXXHiiJmxK73oZhp9PzZxCbHCx455fxKft",
  "key42": "2emcfVk6WJhXZZ58gcY2oit64o2gGduvYFaDsHr4s3PQqTaEp1YiAtEF1BLTQzWXbxfX9gYBXainHQgZgfdQYMe3",
  "key43": "5ULFQAgnk7k9N66MJcGTZfnvVB36a67sFjR4X4hZcdJkd9t6xddHFwmSYd7CDgoSPEVmR2E3qf1q8Q8tBaX9eSgN",
  "key44": "eJDBxJ1MFDHmnZeoANz6LtLK4x2tqt8QP4FhnkPVHPYEkfekzbDWFzpVjV2ihHx1xEozyferKt94cqZN9nE1y7T",
  "key45": "53qmLvuKnYfBKxD821jBFR7hb6tDdL5Rmcv4cXBeqnwEu6HE6DxuvaBZQxhqoAYGwk92h6FQ1cdrbBreaoYx6JYj",
  "key46": "32zuMuU7qDjsAMCCUBUxYwda46taZrFZNQgaiNUjuSCT5ugGCgvp2krajkRqVmzy3YbJPS2d3bApaVRFiNhXqUyZ"
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
