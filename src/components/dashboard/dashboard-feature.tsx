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
    "3RN5kHgKZPVDts6FBCPNDc7UoNiEzVQceHqBTA2PffU6CF3r9wY6aWWgqZxpDuYpcXhZYn3yN9CDpAjrEg6Mi7Qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKi8HErArzxb6FGGbigQsV38d1VMFVdBoEzPRfXUvZnxVjsDTpscWu2eceSXKi7ppSvyUKUiTJZoq6S4bw5rmpz",
  "key1": "4UJzp9cUUazJfRAuns4hhXAKV82K8Nzr5KktittcvNpd9D5hkUTc5x9SzSDMtP72c6WD1TmoYVmW2tma7rT2dnTa",
  "key2": "5nhgJ7LAubYmmVHbk4nZhNsKZdhjNwzZ4zcnctxqDhn2jcL4Y8eu6GvoqEYPo3LyfNfPCfXbNAhdpabkzp53rhJk",
  "key3": "4ndzr3bCRc4vK7zWn7m9UKP2gsg8nVKiZNAXjUUxButUrD1N8EWZbxiARQDn6KGKvExsT26iavC2RRPBEaXuLcTG",
  "key4": "54xLmGkdQ59w1Pj3rRUQW6NeRm8vSTXw2VxPs7BGy3mPhTex5K6Pb6bjFMDXf1eng5a2F7jqcJTtR1Tq7dVa4srS",
  "key5": "2h8s8EvFcetSV6ZEjYy2b72D4stV96JuwWwbvNsS9VhCYWcNAJaUMuX5taGQHfEzmCkEQyTmPrLweKkMywEWztMD",
  "key6": "2AsttUWshD36kxJ9hTp4WQxfenPf29Qx4KkTwmtDhuXDjPdhnGyKdZPubvJZpKdossoQNs1UPJ8XPAjgHFDrAVzA",
  "key7": "28yagya7jc1dFsEsDzqUMjvG2p5gvAtvEXgyGzH4Sxfw2GUKXEwFh49GZRMMtJLCEjyhoAsknsipzXMGikdQxA5h",
  "key8": "4pxZq8zTBHDRCUJykt6EfM6n4ypFm72JATKdbAeCDJYSHBt6p1MLwqcmRyHz7TS4JyJa1StoKfSKyzspq12wL37k",
  "key9": "4BCahyVDUyEdNUzayVNUAuxBHfYYnuzgwXZZnxZGo63vTnwgJGDP8SXwKfp8P8mHPocbcjdtHeq2Xuf4UmQBSJ52",
  "key10": "3sqsVDjEP1sobzrtPcaSaseiokm2SkvjyEABJJQsVMFBRzwfYRVXmexaGw6TqchM7wTpsT4F226AeJw1gQY2cehQ",
  "key11": "4HiLdHerrHsmrCNyeHWeeH9MB2Xp5n6x841sfbGTxc633nNJhLzHuPmBtkyANWrykBgpQcB5myEcPTj63FtEegFY",
  "key12": "2A2jTjHpGgHYbxkHdEQ7epzLDy5BushWkdTGq7LmpA8xk4mUVfgL3wBnoVE8EhwvJoXk2cxFHeg5xo5FhQZfNXb3",
  "key13": "GGY4duixYH8a1Nq276ytrwWw4eFnfNcQfKRaLzAijiMpp5FSkxEPhmRJAEPFAD6gie3ZAUkfNzFVdUxhtwsWDYf",
  "key14": "4Pk59neCKKJ295e3VH4oD6AyzWxMwC7m7rERsF8dAFsbRs5sqdDqfi78kr2ec9JW8rPnz1dmLyDT58nvkPrWF6Tu",
  "key15": "5Shs1Jrovq1FuxqB9z4j4quTqxjFrpnbQt1apQRr1JkaB5QxbAWsHw12rGspUtzjUCcghdU1T5DRWmD2TiKc89Zf",
  "key16": "51gpcPZxSEjv3y5s9eoASLeNA7V6XZZeBpJwAM9xvzYTLtdRWQ19s3HB8ZU6dT3v4p5bfJ4nV4CxccmzEpr1ByX5",
  "key17": "2bfDBznLMhkwUzXE5BaNFtZVAkuofUWmvtsZh9wzUuJvQvLHYQUbCx47pd7Ws5ZnDScDzbTuCHtLG2Jh6AuddqqC",
  "key18": "2Jm2BZDVWkeW5ZJgAxJiaqb9xeTvicCaCZK2UmGxhyeYTkWszNjb3toETqUrJKASAEAdLLTVJCC9aUT5iRhxbgvc",
  "key19": "dNz3UXAuS4gKkVQFQty3gWSeS7XqeWz1As1CPkAbBJVbk1hHH6de6bARwd5JPgyuSv5S9zeQ23W9H6VkrjxrUQc",
  "key20": "3wrvhnR6cADy6Gkbr1WveNy1WJc3nwfuRbmP67rH2S1ZtjzkUzrVWndsstriEufQNKsg51NGGzKyMT1Zo6EQnjvh",
  "key21": "4CH7e3h25b8YPAKRv6XmKyWBT3eHwGfhwXZddqTZEskcUKNN8BVrKrSN3nivkWSyfUjLz6x1qVrENiWYoprWBkB4",
  "key22": "3hh4uJapxeB4m4At3iYHbVs7GC3R8xxtjePcnLmReu3qhmS6eQi8Et8mMoH3nfaFBCycBzRFeym5LhU8cmupoJkL",
  "key23": "5UMirmYzUQNiPPhBTRZ6hYvmqRCu6nNsNzrMxePo8WhkxZa6bR6A8Myf9KrJRSn5SZaXdBWqFZrPqXaBTRR9TfTr",
  "key24": "51dRLWTeEftKgrt5Nc3C1jZ1vARLF2xacBWXBpZqtoxTtiFc8XQHaF7nzFFhgVUJs2tQcp95jGHLwhAxEUJBqhEN",
  "key25": "5qof22dUGurLorFaTXY874ieZqDVuiW2pQxYxcuWH7y8acko5uTUJyUJxdGH2KA1LLp4M5yrg2uW8vWgCgmE8eRL",
  "key26": "2cgziH8NCDqMWQD3Yn8uoQS87HrSaqSMCvt441oprigjbA5rwBmtsD956aUSsQeZ1pR6PnCVgesWVfMUPaDpkfX2",
  "key27": "33o6aLXx52tTLbToxc8hJoLxbLksGy7hxByNQwgFjNVxuF67QYrRPAZMeR32X8fGaQXRgDa586n8FYXVHhBf4ExF",
  "key28": "5MmQ2TCX9LPfsmLNX442DoUHBKqEdu5AuiFn1BjUNQWTpSUB1FgtKNzQKCBvfy9ajqR7x9ondPYgzYpCjoTmVQty",
  "key29": "4dMjYFLa4FpLVnsVfDEYs6Q1gwf74MeZYs1w3R1ZDScQbQh5Dd4MSsA4e3grSSUPHJ6EC115kjnMNfshyW5V1Du8",
  "key30": "5UGe2yTKVwrLn3nC3ZzdpiAyT3qSbC7Gq7XhEyw1CmSLfTpF5P36YSWPtUx7CDV9PvWN9c4FpJ4iZaf7XQQy1Lco",
  "key31": "3sxE3jbguG7KdWszffgQfoiB9ESAuRofEirYJHXuJK8iyrmCJt2NKyqvMr914KVZ7bSw7HFDETrR6dT6qUJ1GkvR",
  "key32": "mEHaJSiusbJtj5Q7kzdcpSnzunQ4s5kKjDDLKTgbV1YTbz1eEWKPgBidFPxqiEUJgzFxshkCcH5yVujwvLqJMTS",
  "key33": "5KazZrXWgE3ctL8j4U796KLbKV8mZMStXe4Afo4hjyaS7voFgK5rC4Q5EZApwS6SsUErkpbMH1oCUMA1MZuasoYi",
  "key34": "3C38RmD6fWd6XqHXCktftDc46pPcZxLT1RWrbZYV9gifUETdPGeY9x3e1ZPbdEeJnxFSAr41j8dhUCsywPvMYEUw",
  "key35": "36h2SCt7kz2QbiPdJwLPWzzJM4s7vrrhDQPypyT1MKeujmXMzqN8VhhghGW1EVhHJ46428PaAiNa2nKgs4X1E6yc",
  "key36": "4UARcUXJjN9TcWfGHciaVdiRsDRvUbLhy2YUMnafbA9MWkoTKW2pWnG9i62xhEfWghbyuHTzbZ3QiRV9BcgYPzKv",
  "key37": "jfbwcuzKTzB5eParsCHXtyi2PyKuNWEKeCqeNsJ1asH4SopXDHCzEouUw4n1SXvBwg1efQJ7LRe9ggKQrAXARqL"
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
