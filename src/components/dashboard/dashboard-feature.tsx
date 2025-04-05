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
    "37EMsunBe1QDvunns6LMPhQiK8eVZwA52vri6fiPYcnHsHbi2nvu6KpnmbsF6hFNmrPU7S2Pvh2cYsjfSsi3Qvt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FSCdbQ7fVFjb92WtuMabeE9Q8ZnZ9Tv22KvVEGiDnPgyj9eAsdYGEJRRXsT43YW2XQouQ16rcvwmEBMCJMwHf2a",
  "key1": "3Hb7uAUkCJtASXmaYitzyM52BZ9wgyQ3AHrsj5oV3BjGXwDTE8MsTKhAq4LXP6SJfGDJUALiKULHKqyDKTM1jgW7",
  "key2": "5SK6S4kHyTDpqMjQkhpH58rpCfnFiFxBA7N93SCTwhnH2kUgXSXoHVH3hVTXPD3p2QhyeM7QCrRppxBEQxzaJZ9z",
  "key3": "5hF2AWnJyimhvLKXvUJifDwVZxirQWTesaQ6daYibjNydBR7F93TUPh2awoC2fMrTnFi3iz6u9jdedPNVYmcKpeM",
  "key4": "3xsymTqGAbcfrQmMcQqXGU5h8yzXiHM2yrBTYr6259Yt1XCs6PQB6KoEDUHSwTX3974X2fabiYbyuExDTmBUvg2M",
  "key5": "3RdwDuPNqSYnu76emzVCqTcCE6X8RSrdo4BtNomuegTckQ7N2iTXrQUh18tvuwRwbsdiAhSdj4eKe29z9MJ3uepU",
  "key6": "2oY8NBzT3eSgBWo1krijFe7KrU9atchfHJswccQnCe5ehhibvChKZwLMXqtPmQaBequKXC5gmH5GjZknCqyKN89K",
  "key7": "2uM1dddBGKRkZ9Z5hR9jvMa7rwaryNXvfLWBqQTT5TNgBTmy9f1yMqfj4poFME83FZRjiLaCw6CcWYBz6ofzWKe9",
  "key8": "37gaobyET113Wr6UZ7AA9dD4SxSXzv1uMk1Cq1HeuQmvLHNcG86RZk7KgyfvPHZs1kPoMSskhPSvnDF7TFy1V1vS",
  "key9": "5wzuZRyYMx5MGNgtVvWFZD6YMAc6kAdkmNwkd1HvtnwJw5W5GDw5VbXS816xzMnVwc1jMWfBLRH6GrJwfYSwhJvR",
  "key10": "HfThx3cfG2axnLxCYGUdhGMfanSMNuNoYa1bTNoCaFM8YcP6CbYQpNCzB4ZERiB1UE44DYaJZqJQH7jXvu2SQF6",
  "key11": "2eUGWUc9JdwMy6ndup14C3fr1RLQEzt2XiVogNe8j63yFuFweM4KbJ7XZAXWdFufyB7o1EuyeZCfTqhMia4nJbtH",
  "key12": "3YAPtJjrz4rd27LgmyfywrrGUGYs5q8yt8rSs8GurhtBUcMsvSwDAGD33if5sVL1HZHiv8vSz1gP21WnSA4mg5RK",
  "key13": "3JLeaS5rhmjkUEAW5fLHwbbNtZ1zTZpFZZH7ei4SZZVsViKdL8b9hwSowTxxn3GRuStsc3DoSr1Yh7FpqrU7xApo",
  "key14": "5uQtGryaQ8q6HV4RUQQA4HACHbJZzugGZAZ44aaPcLK5DJM8PsLF9Bdie7cimGjk27oPhghFLtyca5Pv4WZuTepY",
  "key15": "5cKL488nN8Ew7Skv3D7mpkDV8a47UY9FPQJpHN3VHufEbtJ1grNwuhepGtc9FAJgfEDNihjbvqycmM3iDiyiK1Ge",
  "key16": "2FvroCjyyNyy2gTPvSvSqEXU7ste3afmV7GSfibrD6wBBqqJF2F2TQAUMJt6oU5Qc2D98nZL5yUffzvne2RfTHvZ",
  "key17": "3zofEDEPX3mgqVYTUGHAF2ga6rnmsAD5px9mMYtc4bzKz4RijqxVhoMZUwpYuof69RUhZHS57QxZ2h9FCGKEZL22",
  "key18": "3cN4vsnwmuWXWU44SPDvEaUD4gq29xxP4rqev5YNYHgifL4tHT7PNoD9qVJ63XujrKa1AWUrBM58ZeQcYFS5t46H",
  "key19": "5TWAnQfc3c368XwkXVayEsKQZi8yBG8fhbee3RAAVU5f7opoNHgFijbgyaVXmWy21gpcZUAaLJwyDMjC5QUEVbr6",
  "key20": "4sDaUScVRQaCz5evcVK42RrXEdMB5aB6R8TBYwed1EcRfThJJaQxPbi54RGnSszUqTS3G1DVs3wKe5jjQDMDUamX",
  "key21": "3UGT37CwooiVhWCLa76GFw77DWNQxHbLHF4j1tpVrJHDnhqHpaL5zaXQE7U54PuTDcAAHDDizqhUn6bDinBLxhG2",
  "key22": "gU8hAufDBdjywFJZb8t4oa7JXCmrs38hfsZ9xXrusijvrhtCFGnV1EqvTf46fDPbJQTuvZgQEEgocgNHNXqDj5c",
  "key23": "5fdr3FWSSk9sj56jAuWRkN9BRANHm5zYYw6mBDt8mXDZwsGGLJGNieZYZuocznMtHSCrMa3YayKB8YB3CDiHiLwV",
  "key24": "4EbkXfLSjfjHYNtdstvXkZs1cT6ZhtX5V4nukJb3e9CHx6ZHJgm4teAmHd7K2Z3ZoWUgAkAcWUcQfRz5Fo3CqiUu",
  "key25": "ZCZqkvaXKAVuRne6oUzLQey8iAF5foKUHMpKUGqApmGL1LdwhmB4b4YBzEYfzhec9Kc12MxmjpiYJzL6yRyC9nk",
  "key26": "5mvJPLZhnmvVcAt2gDZi1KgAQkx4tjcojAeDb9onz1F6ydXCWQVdxmLbR89PGazHrB6XQA6RhDQ8CRfo7offJ19u",
  "key27": "4MaAx9woy4tFuLvUDhGSukrJVwaCKr92HhSTM84K5koLcFR9XVa6d1C8MYFY2qqnuxKGpHajpKMLNRioL5Qmziqc",
  "key28": "8tPB3qwvGh3nVwAFsfh1H4cZ9RFL8kpD3n99yTrFNq1s2tvVqrpkrD38iNoJKYfHiMWVmxrdNUKk6S7WtE8wM5V",
  "key29": "49v9MNjeFoqzCtq9pKuQ8HkRFmRhcT47kEojPDJvmY3Fjgbr4PCUiFeBzdg9LavkT9TFG1vQv9MuyeWVNFvSu81G",
  "key30": "5sNxqn8Ta6HHRGAoHgMA6kfgvoCUU8CuafMxmUjGsxbEjTHMyQZwYviF2R8VAGt9qWGjWxZwq8ghvh7j3LKpMeaD",
  "key31": "5qQ9TVwKwRDZptkWtYbodH42ZwKiZALRDVqW2xi8C4HfgXzVk6TkkJ4uqvLYunx3YseBcJRCBEgq89C1bcFVrwsj",
  "key32": "2UVLXWUZJcjsgTVWQq74KBy87LALjWbEezx4uBSHCFwuZ7ufEnxsVKjQXtCgHSgAMbxwhdGCTh1KaWihhNpTA6uN",
  "key33": "38C5LQoqS2zE3Gs8FiPwD6ZaN4UUvq9ZcCVmTcr1L1BmRdXospcBYPfvQhYmoL8M21LqcrUDD2fupZdy7i1DBrTb"
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
