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
    "3QuciivdebPnzDuitFmFqyknNMxnPoAmTFF3dSuUYYweoaxbGDcrt5VpfFfYVN6Mtp6jMbpFWGDTgTcAYK6nzQtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwHAPHthtSibrjSUdFhH5VUsdEEHDBna6rFvjyxcCqeVXoefEuEmysqaUX17eyAwrStRLA2pWN3o2vghuftxmYn",
  "key1": "3UYYsPpJiQwtCgir3RB2HddbEveW4t44PBTxH7BQkhs5FH2ezLC8inasCDEG21JcDuSLPuPWrAbnfLLsDQfv5W8G",
  "key2": "3FD1egP16VKikGCMx8pXVBoErP6rzbKV6vkicVA1AU3JQNRvesmzHnH8tenjdfWoFBc8kaiQvyzeSLYvy1frHt5X",
  "key3": "4m5x84qSsk227XFhKCQ85WuaWAsKohRXGWw2pnHJL2UycZjtRPd68GVkhvu2MscKp4qfWRiRER6jKxvpaTYp8gxW",
  "key4": "3kKviVT1DSAVPt2CUTpxNdoqb4p9DuGtBrwxENBiMWnUV9RbPyRBMmMWjxMYcnsgBBNdybgZKZJY1uskpe3LPANs",
  "key5": "VQRJmhFDneSkX38Wkzr6SaWPtMnTsXxEjD79ZdMPcFBGXTvudR2NLWjbbmfZoZGHYdfxFpz1KPnj99JBRgajp3e",
  "key6": "5Psk6ceRzxYy9d8HW9DtzsKLSuyvmS2XMQH5U7nsgq8cGsugHEZXdbLWL25U8XuBRoZnp1Sxc8hLjfQnD2gB1V9o",
  "key7": "3vL93mwmtf6JzbjsnwF9esfFWGEBpQAgGgAeSGqqquWtCnSfJEiWJwhhBiWuMmGo4eegVk2rW1tuzsz3ZiiPxGaG",
  "key8": "47Gndicgr8gNxGaQJ8FTjBR5HAGbP1rvZ8V6evoEVvZBbz5WVZbgxuJkdoDo3dJ4KxmFaMWAugK5aT8G865HvPbu",
  "key9": "3qCSeZjArKD1HNAK9WvUdy2nXpFzQzXqZ1XEph9LJhFyd6bKiqNAnyhS92EHn3cDJnXqdewQN6gLHvTstBErdSPr",
  "key10": "4bATmxDiuJGvv9sssmx8QKGNfq81pzeduhLfNqxENEETGnm5PTBDuN7x2WChYyGC4rFqXGAQPBy2xgmWQL1d3Xr5",
  "key11": "3FkK7rf9XvAsPgSKJcVZqh7sz5t4Gkq4GczBnT6pLqeD6zw7HyYUCVKZxaFT7gwvwAc9GnskX8T4uXA4YJjVtAHn",
  "key12": "4uSQyZq1GmMzgqyP2Ep3ztYS4hZnFdsmv8DpixGa6zMsPt9W5Dwa6UYUVwbs3TkzFujJUSQaUPF1qo3fGV9tcbFq",
  "key13": "3Rpt3TrxNY5irNbAHt9qdtCyTndMnLTh84wkWvbZfh3UF1Je9deXXEinLzY8DpijgKsea671VkvneybRXqK7k1RD",
  "key14": "5pwSKN59gKtB5F1rUJC5HwTkQz6f8NorgfakYFrByccfjzUf35hdpsCB8jWmthDbuuKD9YMiPWByk1dotXoAptyF",
  "key15": "Fv27CxFaCR1gw8D7FKbbxwA6ZHp1yJjb7t8Ba11FHCkFhoQjqomNahAW8EVADTQYWPpC5AqAtrJtR5GpQpw3hro",
  "key16": "G1aBcUniztELYzTf7hEBGtaXwRm1chp7hhL6whupCwyF1Lu6fima23ZbsjmV1LhZkZEwCi4E9sMV2f5pRUP7NmU",
  "key17": "51M3LQBBPeDmDYmCQvxDTZVQGC3RqoPMx5PEAgeiLwAYWk27Gpf4HUcPtzhCReF5vYtMwxYSrR4SG1Y26yqP1uTU",
  "key18": "32xk9abKtLvvJfMdjyvy1u4oMQaCLBKN1ghUze5TuTwBgbpBw4AJVg1SUpD5EtuXD1gZkMX97w1WV4Ab5jhnj9hb",
  "key19": "3f5djts9fNWtfFgypMbHNfHzcdnSsDaxx1qK4ZptycYEtc4FTfuYosrpFfRcw3P8wxWTn9iPH7BwiSkhgzTSZen",
  "key20": "2ooqE56AhBgiL4Kce9HQFs9VtryMQ1LLWjKE3KPiJoEmKNMJftEBW5bwqR6RwkrwuXxeUhyzMHfR7Rn4tNLEvS2R",
  "key21": "PdGQuDEuN9G9s82vqpSxhasTn7nL4mrxVVAtTSu7XdXYWckTzVL3ZUyo5C4cvEnPRu5xdgHKgQdypTEX7UVb86L",
  "key22": "3FyuT1Y1rbPn9KZdrHe498BnAtDqHLcSF5tGzdB4RQpm4t2BYz8SN6eqccxTt72P8wbt2EJBhHSkachxaSyb1txZ",
  "key23": "55BufqEHmVXNJe9FdXndHSRgYLa2SV3iQx9MhdZLYYr5VVroGqBiZ4CFVvNoSx9wfNfUuQo5Hzj4JcGSBrTYrc7G",
  "key24": "4nG5dbmatHZsGePRcGUSd9NwpRVTchNyKgcutAGkMQN2Z8pEJAzY4qPshsrSFQHeVs64c23rvXbWJGRLfxZJ3nNv",
  "key25": "4usVprqBrZqxik41RD2WbQV3FPwe5WjK2oCAhmrjNiXeo4zY2fgWuMzJZ47FMhprqzxqFS7AWFwyM64JfhL3rnHA",
  "key26": "S5hSr1eFZ5WdUkHqBzbhCmE6NtmgYA9CVBXYMTWAQKXiH5hM3hTBDXvv3FbBTmQbdt5WCahrTq2Zgae5CVjLx33",
  "key27": "4Y7hnjvbVkGs6db7u4FXr4wfYanuozJbg4S3PReekAGgRe8MssDiuntBPd5HvcdWFugP47G5uFGDEx4KCZ5ZwCxW",
  "key28": "3m1yBMEonW968vPtHD31ZS3NSareL1NQkWK5x5gLHxFRGDzWs6TQFW7DxgJJZCXZ55DHQD9qCkWsAuqSycfucBAo",
  "key29": "4F8LGaecGwwt65yyUQfZLbDhsLGf6A9oXASAjsJqJaDp7mLEqXAVumVpKrTP4MY43ZLf4mK2u45qdf7xWTmhUefe",
  "key30": "2heifsAb8mPQKUtY1ViyyMDRdi9H635YPKj182WriTHhqjC4czSm5pUSLyGjPkw9HsZ8G63U8sQS85uomhZAvt4d",
  "key31": "Ki2mZ9iqTkiKeMBYm3RwbzPu1JQqpHNjfw9D4a5er1io9gPq8poFy1m3z9Hb1QNPqKz5ky2mtjDW7YcYF8LKkAG",
  "key32": "4cH24VtPyhpsK1eawVpUp9jn4sLh9E6SsV6dwn7qLZAMahcBcDt263PnYFvqCYBUxfHQw2CEdzKbi47RkxuhB3JK",
  "key33": "2L4UNxCv39XrHYABW13T8XVwdg3dqRunHS54fkaaSQ7rktuc7B8rMPNPu5V1spYwD1ZwnbCSmruhGzPFWDn4tC7b",
  "key34": "5q5t3Aa1BFSHFYWHeNPKc1NtykShB5bwNGHo6qjTG7FtWK5fwiTw8hM4B1JHbvoB7eDqLt5sLKVLiZCM2ZBnrDv7",
  "key35": "oRMHnkDcNLvdVA4dpN5mLUZJ8WJcpU4nZLwyxDWLfGRsBc83oG2xPFxLWz1V1nR7WyFUGjnqsEJtxcRLB9yUoex",
  "key36": "4k8o83wrAWn2MvRD5yEMX7ukjPHvVQKKq545kakqkySuNSu75fRZcZgLetCdcvL13yZ6NUDSAoezxEHkYdjAWGMv",
  "key37": "3b9D7wAe9MpiNZBih9Y9DcjKmTEvVTtfo7D6DkzsRKX36f3s6RtsKGCCqDEyK5YjJRTDA6Dt9YioUt1joBEzuLvJ",
  "key38": "YM3Xj2vhGFDdXv72qBvnYwSPHHa8RyGArztZSoornoDU7ydprRwZKWBZAXURcRWDgg8T3apY9JBRtryEVNPQFHr",
  "key39": "3EvVhJKmeePCg4o3Xb4EpReeZ9kqYTiMLwv7n6X454t5NcRevxw8BASZoHNrHada8nYfGhqv5AxqUPZrp1wDZj4o",
  "key40": "3GrKRNHAEgfy8hA2cD3vgkghhzWwaNF6roHX4FhhgRJmSomjGFtibcV9i6ZrMztp5y38wrB5XMHy4oxytCJsJFKj",
  "key41": "5DstXfDNEQyjxzSni2z4uwf7PvtjQbEAQUUFWVLkhrBqmf5YQBNMhVb9SvTvfBBAyaCZfzewD9LFK7RqczDWFco1",
  "key42": "VCyP4iQmEML52XcQ7hFzdmxJaea1vKaoyVJ4WEyDrswyHQa4QAh4TmnHAawaCLJo1NY31uijLV4JVgo6vgLVZqQ",
  "key43": "5upk8mMQ6hjWxwRG1nEWFTmjdt3faoDCi2dR5pRirHo3NP9ucH9DEqZbvAd1gzoATURCGWPAXvwo6KkBZ74i8HjB",
  "key44": "2ttxud6VBVkiUZjEKnNfn4UVskJ6PwHSkjdnVgVDiQn6G58ArEG6ZJiVAYeDjHaGh2ibxmeTvuyY2QoURnusdMAg",
  "key45": "4ZsZayHe7mcsBMhRaw3V67ErRK2rKd9YKsvsBATSPtbfZhLNbD2RcYSPTU8qy9svZfYinKGcbZ1HGbz1jVZvxK9E",
  "key46": "3m3Dffb1Za3T7na5pLS2UVpZcX2qyERJVRTo4RAaLAtZM9kpepp81SH9VL4viLLp6DKipCTAKnPLRpobhj1D2fAR",
  "key47": "2qtvd9L6TeDuk1KrT2WUbTzz8bzNMWpRYDLsZAX8S8PnaVuZRi3rYL8U5XWdkbFUhjhmLZw4ovoMdEK6pgSX61eF"
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
