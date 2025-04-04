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
    "2yDUJNfhfuTk3NtEvnXCXGJqYeb4Np5LwR69j2x74JuZP3Mi2Wsix2xfjPMyWWRYGtfsFfrCfJg4XraW6tZBZ24V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMtubFh3xHZ7zCPV1Aj515vE464CbspTxKpeFFQKBoQwxaQCL71aY1U4SwjKT8UcaCUhBrVXCuCuYPdCPnTw2bB",
  "key1": "p87HEQMFVa9RqmKy1bFhLswsWEKvCSQNDGg2X6h1izeAJCA27ce9bqe1FQSdtc2Z3xm4oSajLmfRwDCDppDfNBV",
  "key2": "ZMhPnvHhMvn5GR5aTUoGKRVBhZz6zxkM8TuDMwHa5ZAjyyTaHuQ2BKYqjgV3Wdd5YBf3869DBkMetSQPhLk5A9B",
  "key3": "99vBcaMKzmdaSLKX536YSxWf8StjdFpRbgbgHxdWznNXCdAvCny2rmCMNBvKSVzFnqyYkG99CSJVvXKihMshqSJ",
  "key4": "4A8rLUYbGPVvt8B4xfQnJghySmfoXfQRhHMF2wR6DcxkNnUkTEJSeMuYuWbNAjvAbsdPmNrKXbbD16LB2Y4xUMTb",
  "key5": "41X9a8T7SKPXfTupTvEfQjxD7GSFNLAdH9wBEs7JqmhPzCC9kdxLnkNzjGGFeKG7DntAr3mbi2w7pxQDK5pzLwui",
  "key6": "54nodFSJeULv79E3qcEfnB2wQwTZoCNuZHQiJ6vZXcNqM77pM4pzDkubWDyg9XU1fnBrbaF1RRjnrWbMH7tHUoUg",
  "key7": "32j4tt531WurkozN6fAYvAFM3YmTH4Xhou262traqVnzEBw2PyXZ96XR37zF3qYZjoLLufuqe6HD5FuTdomWuPpx",
  "key8": "1rTMmz2BqkyinjNyK8MZoU8x8qS7pQeUTZog8boQMwG52pRJRaLehfabkJjXrw5oqiV97zoXAgXxhWkCdqZdEak",
  "key9": "5hP8F7paMc5jgT54NHzTLmMjSjrCPSksHgwLQpTFvRFw6rLTdppzx3BhXBMLZghAuKSat836L8fNgnJ91YoGun2n",
  "key10": "5HEsBBXCsRCqqTEeJyghQje1N2TEaYxCbXPLqj6tu6aB3SgnbmDf5Xa1MWA6Ea8fBdBp5rSrTiozVakP6x7Gw6b2",
  "key11": "3n75DJv6NANUmhW5X7uv55hbZ5VEeXUNKiaSQjigU314Z47tV6J4UyKGixxYgV2TiWHJMJZgTBHA8YB3JJytoJNw",
  "key12": "4sQ2p24RZXZmfXa2oFWAt3ABNqQpEDKFxpRb1h3X2A4gBCXx4ikF52QospbBGvK9HxC9kivXtctEbVtxNqDu1C7K",
  "key13": "5WdNBuYpaNZe27EkvgnDn4qR6cbMTy3GTV8kfync474Z9xBVsugs4FKpNwuDKSdVyCXt7fKqS1YibqDU46vbJ2PV",
  "key14": "4ybidpq12yk8P3uk7gvFVZQKrVaug2S6qyBaBuvYZUs5HEanHY9Zz61D42v4dty1mYw8u4o51CZzKNdsQuEb9SSz",
  "key15": "396qmkAbpwLewXgVaT7sZ8zRAGx3xUqwUKyeNDvHecNvWuH3erW3Pw29PocJhJF6RTzodNzPn3gqXvNqHkGmsr8",
  "key16": "DQfwkZCZFx1zVfHcwHb6c1Au9RxTwJmvszkxXZmnB1PnBbSi6dsaiZeAAcEs4yRomzFwgjkbrT3DbynUZh6JJZH",
  "key17": "4gnF562UoU5uzUpJsfP7ScEwCa84FgHe3xsUTX9ooSWQtunBKBQBuDDqujwckEmRsZAMxmVYrLq9B8su1bDfDwhe",
  "key18": "27WFgM2VETzrAVqSmmniJN13B8dZK8SsFcu8tBX3EM7AUXrguff8cnDe5u9FPVXtP9BmvWhrs1CjbUqosu3ewqXM",
  "key19": "4RTpPZvYtSWXn1XrKSxhfQw4Z7gnYjW5HBtMwPmdcoDzEn54SJfkzyAKaLbnUdoM6r6eBVnV65vyTQZEDfx6uitx",
  "key20": "nF93zhVF1KgPbpRTckAzNLvfyYnuYU4HCsCbCjyktB8cymSiWnukV4LfcRpPSUDhsSs6JTQg1YcKLG1tUjm5Dxx",
  "key21": "ok6ku58X8tVHQZdEprPuU919BYMcbX7Bppanomq14uJBawLfjKNwi1eMh9MtJJPkE629frRhhfV6MC77bo8uzvb",
  "key22": "3w4YJivLvk71jGD3ETJ8Gu2tv5cNQEtJiFjpqfN954w1zXK42ZkGcDuJFxCNXPsNGYQsoVP4aF5ii6h5zYsJcXzV",
  "key23": "4vh6saswvg1m7ReLMH5uufUqZUwii1NtaFU9KX4dimzPJQ4XGMNGQYtVuYW55w813S8bfnjm1QAZdNsUgF7wAD2a",
  "key24": "5nPWT1BMHLimh3Bp1aWJkTUUjgByYoTBhbtijuYefy7sf3tQSqhLLL65NbLHY93oeHDMJzPD9mag4zeEuzC8cNo8",
  "key25": "3nHEaHCadSrqyGLGUigbyLAocgmZPsLeJiQLbRq94ykskXzsgVdY3UyeF8nPpEueNPHjdkMXMd6oLvWYkgqRxstP",
  "key26": "2Fc3TczPPrv2mtza5FWjTvbhdXfNh5pwKapzUsNsNhKGQBGWtSp8zqeGwXwNTNN5UuGE3nXnHiRAHCtm66PzcmAd",
  "key27": "ZHTJYuQg9ckpbedoh2bXfNu2vgurS3c7iwA1XvotGFCawxrQhRAMYAwQeEn3KWXg3LNmLJDp3gY9hYk2aT5348Q",
  "key28": "t5xWb9vTvceMNbZHtaRuhg9goPYvSB3Cg87aUvY87vorASPsKDfvGrFtEL8NZdW9RppYVKtBdbXW27Lh3fcZauT",
  "key29": "qbDy7Z3BMasinZsJP9TdqAyHvyYaQQ9vUjR1t1F9ec8b7aR68ccphFwsBecv3TMg8dbLGjxK9wa48zBHagiEPTv"
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
