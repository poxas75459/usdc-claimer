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
    "61mXjEr5qogAfoJHGq4cABVv7nBgNK8pAfuF9dxkqHgNBgnCT946ayzDXRpFygo7xGgJAYa8zvoTMcJyATV6MiY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8AiJ9YhHTbzvyUDd7qBt6UYenAVsWUANbTdp9LDDRaFZp5s1bufYw5Cu3BYjK7jH9WnSQhDmuyGAea1t5w8iy5",
  "key1": "3964PqRXhQjJiTbPdyoM4RA93TyjvwKnjGmQLAjm6L9zPLgmHZTjHj9irqcuUJUZT6cNgJ6grBCxRCzpg3UaQD1j",
  "key2": "2pAB34D3wUsmnZ8Ae361SwT8ppM74bVyasGQpAzYNvWn2f8BAULFMgPJBqYbv8n36cecWPGWovkyJwfz4ZnrKdvL",
  "key3": "4rLaFnPBbFscgDMdyk1ZCBo9uneVzf91Uv2FMuDba52cZCRf7nHTFmRRZhNpsep5XjjA9mRZwUYMU99tLQbJ5w28",
  "key4": "53jhq5Gg2AbJ82sDTVUSfiVt6PqCjwYNYN14hUdg4mYWpyHBtVNTa4uU7LwKtduCjKaykbjzCuwgfoBnNXDHAoqc",
  "key5": "3aJfQ1SvNmeuN5FVoscCuHvbMcMLzqZGy1vAafqBBT8hR9M1mfYvqwU2eoGGdiUtijNaWd1LHdMBMB1nZGE5DZve",
  "key6": "35UYhhSe5nCzQxfJXHesba1zEkrxvnJiHUKSxxNos6CZGxTFEuHApuzEMLvCun1uXWUd79jktDXyB3Dp5ZfMw8Gx",
  "key7": "VrLjbTk3KAq1nhFRLXxGN3REcN7hVRhZve96VCAo9r61yYJ2rY9vP4brkAyPpTTTCFFCEJufN8iqZQavCXv7qtk",
  "key8": "3CNUvYK2oLp5RyqRUChoXZFzK4KDPpqpgLhj6cNqqR6XDrcP49Ha4tdyACqGaqL1ce9h28jJ1qbyynbSY3mUicx",
  "key9": "3YtpZ2LicTfenahBYHm2REu2bGXgvQgu2zUgvKqFmhvHztcdPrkgrPu7haDjKqyzRwZcVzUrxkz6yn82qaUN8A5E",
  "key10": "5rqZRxED5hudV27jbUCbCQmZkU1VQj8ohNgWPtkQ3xmjT7UsQESoXFJr7bynoSKo1hu9FPFGZZREsj8yHCMKFWBi",
  "key11": "2dh9RtGeX6BZXcD2EFvWkf2DvupagE4kvrXB3gR9zm8dCbBvAu6MygRx4urYq7RSEKWek7Td5WNrVeEAxihpZNWC",
  "key12": "54cjwUFb2YEhGSbEdSciQVB2haxGGEFuatgZdBtmAxHqvq47sBZwojm45pHuLmAZo3AGu8X1H7NG6Gk88qUqCbXp",
  "key13": "LApGm4Lxdge8WJjBZq7nBiNagsc9seHAwftapbRxCQuYkb2EExmJDCu2cEo6kwXV4cWWP5pHkGFFEfLEswH9poT",
  "key14": "4cVyAAcM9335XRAWzRfFUTpcgSe3JudPML8tfREzkgscK2pyB3dB6xGu6sPJFh2LzqEpKWr6EDXTdZMU3g4frSaX",
  "key15": "3YhMZJJwpS5LYRwkHQK9ukTXab7GArQLbXghfzUVE5cmPGhFo786kmUscuwYBuKBrzJJ6zxCzvdCmqzErwsZkQPv",
  "key16": "FWgQUAgRWayhAKifcdMGCtYDir71GuRbXXFHNhwnYxcA1B972LsG2ZBFEDo3QFXmgtcMvv7bCbhokqpwuwr2ByS",
  "key17": "4fZkaL6drar99FnWDNt5U63mQZEA2bjs3vb7XMuwuciBkVvYzuPDkvKNAn4VrZXPYvVjRW3Qxi5q3enH632zEsrD",
  "key18": "4xXQ7j5TmxMACFaVWCFZDJCNDivUG83hZaevYQtELxbzvGNz6eSjomekcxXyTm69qMuQ14MKpg2ALrMfLgWqhuRf",
  "key19": "2yrPjwVJwmXVb1Aok97J35Ru1F5QbbYxcCTp5CdrdFupXMPVG6ZFGsVfKDMQUXWuggZErtbvve3E9F16s3HQ4D41",
  "key20": "5dUvZyjXrGcZU94oyhTyd1s2X6eja3wnDSzjCoCBgRJpLpEPfNFxHHBteo8iff2CbDcbEUgPLitvLQfBm9GZuwbs",
  "key21": "2VAvCpu84kpovx3ZTnjM2K4vtrE3oEgVN5ZbBTAbWCwT1KkaoCswhJ4gB9ZaK1ZEzQttJbrtBi9cN2t14vCUUREE",
  "key22": "4wsqgoQQXJZ7gyECGFBTcxCDQvHFbyidZw5NxskaHZijYXf9Vuwr2HTqy9D8g9scWXdHQfGN7v3vWL4NGg58Rm3r",
  "key23": "5jLsjBTxLQ53ftSZbNknCit9FtxfQJwuexGDgFEdYZYkSkpDfjGBZ79ojTijNhUNCFz8oXUMDzXmTd6gsS8qDpZA",
  "key24": "3F21VBLZaSSDrkPgthxPPjeg9um7uFum9SRkcggGFnH8Wjh6bPddvZRXbS72BWWFsiUmTzUnaUH34k8JJ529DkSf",
  "key25": "3TFiaT7LU2UULhMEx4oFNxLRLdkn5Tx1YSQQ3A77Gu1YMjdWdLV4vepZ4xC7qTnSAYsWuywrwEu6SGcpYte7QL7C",
  "key26": "NzVYFGHuURU3oT1fBEqGR5UR7C7JMcCJF8m7jtm8s7To69hYZApFAaGZRMS1zVjURt35AkfG6CnbDcBvQn5QknX",
  "key27": "3n6YYPQBzXZV9sjoGeXqhFmL41xoXm1nc25RFsz1f2aWmYnFN2DxTxF61Qju6bucMMTmrnyZpLvHFr5JWeR3Umgp",
  "key28": "6wizuHz3E78jad5k5eySLfrn3upS69tV58WaBZVFcZhkxK158VxJqFtmTvVKUiKfCzX5wXixBHy3rmdDUnj8utd",
  "key29": "4FKCdmN7AVt1q3FD9acpnDUo2aBYsWYzgRD9sxC3rriA5wMbt8choJzE7Phdg9PgGCBpv7aa8XCn7FU8EV2P7jv6",
  "key30": "4yRbWuuKdn2naSoKTygWmbZ2Ph7cCciwM7Z6zLGUvAo5UFwLn3v1saYhB4tdN7dLGVuFB1zkxhXh6ggH5F9GWFyr",
  "key31": "2voxH62exQeWfZ6QWxeSDA3oWRkowyUkohmtUK5mzWYDdRavKFLYnzFpD6Qu2vd7Zr1SvwDXU4eEAS6zc7CpG43h",
  "key32": "5fcS3cMFVY9yVumysizR8LyjaPUEM47H9cjjV2zGgd3XnDruCH29cMFV2TckXv2V7UCVEdGtDbUWSVRAHEvMBKZc",
  "key33": "zd2VSk3dg4AiZzKx5SqBFEk7po4RoFgyuE7yUB8RmDJkBWVjdH96obUXtcE8ewoHmpSBghLxDa9t1Mamo9vinrG",
  "key34": "4dVj6evrU68zcF9Vx9iJ6MW4Z7SQBqzt6U24Z139crDnn6STtZEUHy555aNJG1DM8SczVvUp9Y81NismcFQ6pV91",
  "key35": "5wiciU7Le4FD7JPQN6dgtg5jvQ13kVNJ3MAeF1m3oAdwbrkbZTnKxXppPLci6R5xWbw8sC9LmWBPmAez96Xbp91c",
  "key36": "5ddZ1bzhokHYWDQmb5vz68axCmq5gyKuuH5mxDGFpB6w7sjsRDQCVznDAGXUUZL5GmpqpXfkfHaV548HhmUFDxuU"
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
