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
    "5TPrWjUyVYMfqSZtaNwroyuCcSfnGsToKAS554TMa4MXMkLEWZWdQDLmyVBjsFbM7R2LoE5Rey6C4WGLpJu9iCRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a4xmS1j6T2Q8AJ3b9zAeztvxbZusydWpoaiLpuHhMWXdL248jZHSCEbKhC4w2NiGEyY1n2FBZXcvmQYwWAW7aSP",
  "key1": "sds9zpjjgbmWaevRRNWn32YqXRfabveu1QGfJSiNVsUhmbkj686gHss2UEavivBJGvMozWwJ66qGXadX8ZWrgzs",
  "key2": "2XkTM1xVqPTiDhAfjBr8o52tAWdEMoKNk8QKQkAPL3w3GRs6VsatQgBHUFiyczNB43zBvXqQ3gu8sugz9SwaZPwa",
  "key3": "2J1MWMoaqFu5vW4XwCYH4qaMpn3rUZ6rHSofQ4R1Qy7dTDDYeaAmhYte8rsAWX6L97HnHTMUAxkxZPiVXbHVU5dQ",
  "key4": "2zTppbeqUUVhvN1jFxcfDfUFokwezTceLZEvwSvnR7CY2SSHsXMCNsqFXMqWsxKqjvLJCysdhXgMZQPCJ7bSUy5m",
  "key5": "33U6GSytt51mrnVWrVJibUzGFhEbCDp1oVSZ2qBBV8txezZbr6c9oXZ1k3WdUAMd4RUzuVZKf6tmd9NAgTs8SynB",
  "key6": "28Jg78NUTzUK68CR5RJMQTHQ6oizzLN2yaMxgtLWz3krRZ9yVpVNqDBNFtz4jFyydQyB3nJoSivfjEvmvficTd5C",
  "key7": "4LPhXwGcBwoLXz5PTn2SjcjWab4Pvcpm1jK9diUZ6u6futYzGz27sdNF2RhGTufokt3TW5vQFkafwc3j4YEg6YJ2",
  "key8": "2iAZV33sjq1W8js2x8dShC7vZmXDmmUowbqPioNcGmVzEKmr7eTRh6EzkMVWP6Cj7QbyBVD3uWsWh2zgTxTFms64",
  "key9": "XWJBNWEapv8hHWCA9EucdJ4AUhf456oSfZrmVC44jvsbDW5Pxxvm7RN8YTKeG1XYfHwtgNoikCSznfd6sYDTsX9",
  "key10": "2vSgudzyNq56uXeumMawbtfoQFyYUKrarRmfUuD17Y4j46fve753pufqR4RjyhGiVKW9jz9WBxvzFUABca3XRcYF",
  "key11": "TyQQcy1q6akVj2DswG4p8ftV4G87tDN5jHNndvqtj4EGLPLL5k6rnU9d9hmYxEwd7XcEwmkeQh6UF2xtggqCqqz",
  "key12": "4MGnLqZVYe38g4YExLREV9T6giQwymALgV8xSHuhiXj22uE1kA1pErhrCBr4Naad6D5eHLrQVtSUx2E9Q4Gydo27",
  "key13": "4jDA9eX1oLtFXtzYjx8mZqdJRkZSsZwtigvKt1PGGfoDdaSeBtDLxjHoqbYLhJsD5cZgnkiZXLvx1dZoif7bgHeX",
  "key14": "2Zb8ZiZiJiNsjCWgPdk3WRweg5YDuK4qc4r3eoCRJJP5Fk7hNJYWnXBF15ea1TPHtBMekqtyCpaVf57kwjiZK37m",
  "key15": "QFSQLiz2RTuV5aVfKpvHKB1tPEm8d4UU5NJrGEPz4S7D4VKEkmoG3bEadVhTYdkmCE8JQoYZzwyedqxikan4RrW",
  "key16": "3KLVpbMwNS7de5rm2Qh7gVTMStAMQVy5ZJDnwjcwnLbFVmJN728jWWNSDs5n8pfe8PBhA5ZagXMdn7UUeD9bHPn9",
  "key17": "2V32iGjnonU4pGxc6gSj55n2NWjMvQdBM8FrPee9aKZtkjxWBuovkBTeUAeMapJnJzSxRRM9enzYWjucWdY9PWkg",
  "key18": "35BAjFsp6DR29Qvm9uFCoq115eGaFrzRFJ4fAMDgUJRvX4zjBL6s2w264QBF6gcAQHUYSEfMPvHH8fBcrzwwavay",
  "key19": "31ynoSur3MirQRdSryugAszEedWadW6gwyUvbojZnapDJsvzGFuRxmfi9vdp57kZsihQyWrNK4rqRjMWTf3bsGEf",
  "key20": "57736JrQa625eWWDzhfxRFbwHiZBQMUpAy8kQUprCiM5cEtozSWW6rEsVVWD4s3HgCuhpYBbqpFvPkq4xuNn9GVB",
  "key21": "UqWD8Gg2E6P4Qc1yZ15TJUNDzx4jVxdS4SXNwuL6jJ8PW4iupLZ2p69Dog4A5LnH5UV7Wok7UjWNqXas5F4Hfm3",
  "key22": "4VYEH3EDYQU6rSbT7w7bBnc5w7N7s3c758TJcqws48ZeVYGUgnBK3prmEpYudzZnow2vQt54CupqPgqWwJ2v7fGd",
  "key23": "2eW3oYjbySjEHx7oUdv8fTefcEARi3isrQPidkdSLcdnoHZERaMEqgxCQdPb6jFS5HT8s3GWGtWT9ypEqsK8w343",
  "key24": "28kx3dMFz5HtjXn6hT3docBS8BfMorVa18ZrUwTWeXPVaW2eWe8Yj6o4QHGB9VvuuLn6ksFtJagWcjpGHzsw9fEm",
  "key25": "5yYc5K257pd9mE7qKiWacJzkAWzpdvHjQG9FbFsKbTjHZLoJMDqTNdc1tgNkP2wypj6KAGfEtcKZzmuwXhRiZVq7",
  "key26": "3pqz6tkN4cpg8jj8wMSNadzoLjvTxX87xVN7yPBKyr8e6pUn5sgHBdtZsV93WnQpP7YLHfn9uWTW5DfTBVnVmB4n",
  "key27": "5Njhh2Ch7JgE21kXvsLuTYvpFnGq67UeTNptRfxyptW4qJJqRzUGE2tmeE6214R9jizfi29b7nvWe8SW3pGpTykV",
  "key28": "389Pgc6ihj9PMgXHkZB5knwPfV8ZEtpYcS4Dx7QU6HBhA3Luzvwh4sWdNseaHbwL64PFAafyo8ezHqHjCRPzT52Z",
  "key29": "23GQr3766vBJ8wDK9kr3LeeLPUK2qSptoaCUNQT44mpGMwukgLSbq7ez6PqBMTwXB1BUAuMEvVqLdTFWi9i2jjAk",
  "key30": "2p319GJTX7CR2pj2rjWGNrEK5j5j32Z3xDrKQPZK3Nf41yVHub5BmPczPGPL6GhMjLasSQwosSMH2hyzRnnJxdUg",
  "key31": "33BVhKo6gZ84A1zRJUasN4fDFRDn4VduZiKfGUt7SxsXQgzh49XES8KFeKPgdZexhY8jfD5BTknggpB9w8EXd5NY",
  "key32": "5u5sT8NnqoTqTVAfziP24zt6y4BiaBGPEDVmpr1QjoEwC41ebDFntwnFVikPnpzwpRhDwH6TTYutiRg5zX7StV5m",
  "key33": "4KVeZ6dma4EWW7V4noVJr2GQEJ19WLB3Tsw3sFR5QcvyDKJm6nkVSkP95PRWb6E5eWd2kUDW2u76aPYJUHj9bEmn",
  "key34": "4RHEmLUkWWiddF4Qc5MF7oC7s1oSwGcXWGPt6ZCugDMSehxGrX4nhVAqWUMJw4eWVNmuMW5no3DpLNvJqzDgPb6m",
  "key35": "5jcdF8KCY6wtFuJqkAFm7B5Pk6Cm47iAQZTcWzhkJrc1a1fLDPFG9zyvFV7b1yhk5puCWUhWy2Fbgsh5iKZsNx2Z",
  "key36": "673TNFdsota27C2FWFfUjeUbad6ot1oX84L7jiW7z5AhVgCWWRtkMYv6gPaSxFDSux39emYs1EnC1VnETGpdpL9R",
  "key37": "5JHUHNMQpQfq8BEZRVBwJWSX5Gv8mRTwukzKhX2W5hAyxr4UBn68payjWRWyK6MeBmfmz25LRkafbEjbR5cQEX9U",
  "key38": "5LV3c2Z4XMgCLoUiMwLub7HqgdYwhHPs8pb3nLBbnfJQy44UnHrTN4eTKgE7cqQARrY9DEN84s8ARxHa4Fenoj21",
  "key39": "5xe9mptrqjMXhYWteGoXF4NW196Z4zBYA4qvJZSPwUcVHSfTarevBiki6A5pPDpNSmDMzkiWikD5wGjw8ieceg2T",
  "key40": "vy1JS9imxrFN4PR9HRh3s6rfDHeewtLriMJa7KvEGKRYmTnYTpNvwSrCTGZ8jsqFEhi1FQDq2qLSRGqw5WWyHfG",
  "key41": "4xb2x1kNcxy5fQEd3oohojjGJ5vu3WdaKsBXZmLfdsF9ZU56Pfd5pTEgnR6tW3V2GVq81oaVGFmZcfnfn1uGwriS",
  "key42": "2ZQ7rXmnsb4ivCjj5NiUyi5qQvpuzKb8jvWLRUrMjTu7LbwKGdhbybMGpuSbqUAguKikppG7YHKdVRnEA14oQXLu",
  "key43": "HZ67PqqWyMQ2NswXcjKrzU1iAhp7T4A4RQDMLiQjejA6Ag8PcFFBDk4nGkXVXM5pAPEBooqmvQ7ZGjcJC2aBCZZ",
  "key44": "fFtHTwFkjzj3WJp2Vduh6Mnz3oGCsqpNyp9Vb7g5EikTdEbaZk3esZDcUhcud1bshmWmorTDnMdQ9bKKcaQkJ5H"
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
