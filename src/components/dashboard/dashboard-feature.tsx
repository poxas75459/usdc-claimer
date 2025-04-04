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
    "2vTRbb5mWtyHpX4ww6UCW6Htki3ygcNAUjovGhKYqvdA9Uyq4XybLcxsGkiz3FohWaotm76XE1stvVB2xUtLxZUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wA4L4bbXGR1xnkpMBn3ZT77vmYzuSFtJRkz9BbpXcJHLqaiMhVDBCfV9Yj7u8Eb4tFiSVCnMUe9G5ZYQMyXhYwA",
  "key1": "5dqzzohnFDKUMsxn9C5tQ93rBKpAvBgyeknQbdABZjJzMJ5T2BaQaqAfjDAZf9qS5XxN48DtbZJ31otDpRyNnXzo",
  "key2": "2RCZ2KGKCzfXQFLh8Pi8qeRpJBNNiDo3VU7NX3xKXM3qAixmFe9c8x5BpAGqUmAWNJAkWxf7GZsxh1dERUM9uUmB",
  "key3": "bHhEL91V62HMhCFCerPCUDxZkRtWDNKV5aythZnKoYWJeSAZQfWF1WyRvyS8TypMsvasue3XLioDRrHn8rntVdz",
  "key4": "2fDZiewEqm97wGhTPwzMhknSagStwcGyYDELcBWN3qCQVAkaDTebHiYxh4xAfBULWmTi31z5oG9MCVzCKvizw5MT",
  "key5": "Uoyzjdt9AVXmX1GQwtePvJ991BDbLfw9tbipMY87bkaJQT5ZqGmsQwnKx9e4ZPC3Aj4oRA9HbrzdCkTWCD3ea2T",
  "key6": "4JEAL1Av4BXvRKF78ZqMDtJA7L7FcieHdxWUK13Vp7AaDYSfi8TjZ8DuB9kqypPzPMEv6QGDTugJEeLzFba19wUx",
  "key7": "4t5Z4AjzqLBRaUBfdfrJH2pbAkeV4XEJJHMw5WVWGivcEHvHKC9uug8CGcMmc7wJb6795gcgrhRWk24v1ztS4yPU",
  "key8": "2qdJbvnJrRkLAZ98mm76ZeEqjMSFJFvAwa2jrcxypmb4qiefFN5sV5ZPQ7UB2BFZwX3S4cpajv2RvDmKKFbQWiHi",
  "key9": "4UXPNALt4X8PtYHbUfxfNEKc6BNwLXvEe9B1Z3ZDzRmueH3fkNMWhovHHaXN9ZLAMXm1gVpjNG2k2EvskSaZnkbq",
  "key10": "4Wn77RYpjnHFZvqd63XvUu8xkfzkhbSGKeD5CcwYdLrwGSwF4GKkwWNiw22FRSrAH5uUh6495mksr6x2BweSdCAD",
  "key11": "2LcQkDcF8SnhynYrVDuGRfqTnCvjkNavaMq5CJWe65VkFiGmcwKYsmvfe8rjywzsixsCGzVMVULV1CAYbgs3FaZT",
  "key12": "5PfPELe4n7mgkwxd3mdd1PDoGGpYrMhdPM6MVV1ExfHThgBryuiqAdyYL3HkY4sh8RVL1wqnf6Uq8FKNcZyRjRNm",
  "key13": "39KEyAum259T8esVSQw863shfgWD1Z4Vb5HKXCUYg9zNxnWpXusVUAXnyRRz57Z3Jo3uQVd9g4LMoLC1dYUzqmLs",
  "key14": "3vMvVYsiA86Xz5NTtkJrcBqTrNHUJdZrwKXR49afZcDukVXAMwALGJrFUDmJJrYRz7cWaEQBKAzs9DfDFPnuMPc6",
  "key15": "44SYm9zQkrkHDwgVRRJLKkHFeeMDPQCDhup49FmcfdKceUpzvbyvRh3pCZU8ZJHRDTjAi4MxBaN52CokeKHx8Fma",
  "key16": "3Qie2YrmtPCUyUb4cJzyr12brCTHqovEkDsUbTjcN4Gw5S1BiJapSirwMudqtAJ6EejxhYipd3XSVWjwDLM122vu",
  "key17": "2WwuQtmHWcm4F51KTQtQiBg7NNe4R73Ui2yqaTRkfVA2kEWZvpd6tmFn5yLFNiid538uF9W2YHnkoQJSp7ymVDvG",
  "key18": "L4GevoUa3939CburqTY9ujsMvHY525QVGbtbs28dY9BJ6z2eZ4GwwVj2ftvAsdFE12YkYCnrs9sYW13U8xwTcAw",
  "key19": "4oUDiLnR9YbgFLYYVNvyLgUMrsdWoxSZbuyoVpFRm4RdzrAHaiPDxW1pwKqBde6zrU1XvvgTUdpV3p1fNd4bJUcZ",
  "key20": "28Pn1XcvWLeLDeAuQRmqEdPdAaCUoPqEL5kYkiYnGQf7z3ygX7p9gWV1Fr3MH6GzYyJRHVDuGMYhaFN3EvjSQFZD",
  "key21": "596kkrHJQRWG7wxYxyC6vnRDkrSPNaJA2vHvQtvrzGuRrgdEf2xQmwpRaTypUpdF4EACkd1KLLn1oBcz9fxuAFx6",
  "key22": "2s9RrLH3Hx5kRL9BshxZEL1Lqce1SycaM1r7qxoEz2e9D2oayajEKrjk7dQGyuw5qQJWzfswgB56AjHpXfxnpyXV",
  "key23": "5V3q7x4hXgH6tTiAmUf4AfmQa3z1dXEgtzYT1UJ7yW7n6Dh64cML3RcX6445kaXJFqiGJuMCKxCf7hwi94dWkAVh",
  "key24": "pfS9nfhaqmBvzRcBHDucyWpnqSMoLHtcL2tu2Wo7GLJo8kvtNYUzJDfsu8fViEPA7ySwNHFBLPFHTP3Nrboi3Gu",
  "key25": "4ZjXRrJGqsSN69sNs9M7gVi4RNH7w1X41BbFL9vXX5E7cAv57urkT393tbP8KyncNpKyy6Gvube9w59r8ZjxGwDJ",
  "key26": "2NXPChufjSqVvsUBj4EgBf22iX3UFxsukXWLdp7s9ktXqFeHDnFqcAkb24ttAGRWJPYftcHw27CbckT1BvqiZMQV",
  "key27": "2FHrWGdiC8Aj6Kpvywa5MiJQpWXfDi3xj4Kt47sR1p1UdCjp8JGfLvLeLarWs5WbuWQ4sd3kmHWU4FxaBfMjodWF",
  "key28": "3vNuMKYX8G325f4hVFzkLvZvmvXG1bGoyw1taU3R7jfgDCFJfVoGdSCr58x4iPAnFFqcViJmyqPQGhMENg9BtHdz",
  "key29": "CsBM29vhC3fCvZhc4yDf4L1WewYkFpjJoSFXfc4N9WeNY3hDFkWJuez26HFNhE3Cfse5VAjRfAbjfqYZ6bzvj8j",
  "key30": "3T2xbhTq9HZZNx7YEqzLd7nv5aTdNe7cZWyVzoh35MxU4EzfCeEL3XeMDVAuk6yAd3ymW2aHLUZ3Sdyai3NuijPy",
  "key31": "yGFbLAESXzXZxhg7FeYyizuQcrkdiwo3nUQveVoKLd2b5NtPds2HBzQ9VQwHut2oAKaRheh614nHbJRLEVeFWxi",
  "key32": "268852jtq6CcaZM2zoXr697aMiWYpV4YBoMWQe78Y3pyVtyCtjxQwPL6yiFr2tPhn1nCrksNJUPdZEnqZczUgH3n"
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
