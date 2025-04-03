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
    "539Z6mm3DTuAEzoo1ZR2wfTteNmnTqCVqDMsN1rEmHMgsdvdfPSRvxqBEGzh6QBt3DV4BuJfNPBDDmWX8cvrexvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4fy7UmCTCzPuz4ZEXm2bwiucwC9mRCrLQPDW6PdqDda3Sm4wDgkgTXje3gYXXmwyDTEBmECMnRZ1FcYKFq86cu",
  "key1": "5tbbzoJZjQDicRWRH6roCrLftNXXkrYP3dHAG48K8terZ7tN2s1Cdi2GZRuzvzuy7usPME2YZitJL9nj7a7avBf9",
  "key2": "26PbvnFEUnXht8RN8BbcTaUDSFFs9SXXSr7qG6Dqp5LAy8QYwH5fLmj5qk3mjpNCiRyh39EX9RbPZ2eoyxNhGfN1",
  "key3": "3o6bgQ23VW3u8SynqjSMcYNgki8YdRHPw4KdzrJRf7ZxpKEjQhvMTsUoBDKUpZKicfwaPA1RYLmfsAwboSx29ujs",
  "key4": "4ocqKJ9rcb8kEzM96XRMCV7oBbH3V3BZSR3VnW7oSvDfb7pTWbpA6UxiwfqDh7GWr9yftdJsNqgkdxMCadpdozg3",
  "key5": "2ht4sCnV5nZpoUbRSjRPuU2i3ykTocWNZuoRyijdCwQfhXTdTv39kRoimMYJFHasE9UVeqMC9gENVLHyZnCY8n2H",
  "key6": "2UyKTDTARiYiY5hadod73FtGJdxuRsASgFJRwRyVabGj7gv8sSnxmBjJj2DrjPKA4cNLJTsmVzQkjLMr4uioNvF3",
  "key7": "5qYYndDRrz7SnfC8ErkzVd3romUjyXjEhGWsrtNMSPJTGRY9KwVuCS1WGoqvFCK1ARiDjZhU5zSDnCxLHtLioFKD",
  "key8": "3t7inCiwb1SKGnZorgQMqbG1F9qu21tWSjh2CLZPKYZWNyNsS4He734YwGmHy6RcgiFYLUiFrMEiMekDLVhuiBWb",
  "key9": "42CGBQmcUomTBtcusVMUW6SRkSLhMAAuZxyvmiZb5pkpk74jjgMiHr7uKTLqUY6K9MnsXVvten1jV8ayErppEtkH",
  "key10": "5EGfsNzco2hCUA2Bt4vADoJYfJSuABiiXqZoNoUrgWLMDWQ9tYQMKYodBKYt7jchGeL8nMX67t8YgfYRA9o7LKRD",
  "key11": "4gRBrr6DkArEW8REpfKEFSbtcKmnTUndE25LhuYezCPVTpVkzgqicGbv4SE1eV6REJ5xtFbFA5XmpmHmWxUEH9yG",
  "key12": "2hAtfHjFk9DCwM9YnfdV5UgdynPoYRe6J1xPrsAeURszmwXTckxfYCr9kFmr3odx2czYbnp6oiuduWmaa99SMxA5",
  "key13": "4vmMDwixrQGw3uLq9jxkcq5vEyKSVfrDB4yzkMcyd9Ac2U3g5UXAJd9wHgb5iT86uNunvWSVknxRZkitMwJWXsLq",
  "key14": "2ZeyQoYNQFykMvNqnWp48BBfL8PnHLvzhg7zaPcaAhikNB8rUMEwDtNuiKRL78KadRKkfmj4oqtE2StGw8rxXF2r",
  "key15": "4KvWcn4aVgbqYey2CNVrLEyLnixRP7JAdM6PMVuBBZLusU2CzoBNJJm4XbnNFohzheWhvyQiUF3oxbF4zCkoGUrH",
  "key16": "E3wKw7Fga2RMnaC5YuUYcw9DQMae4FXij4cP57SqXDUF9sANEqKQkCohqdhVMKNSWMrUW8pseD13socbBYX1NXW",
  "key17": "2sojMmVQA3mSvnbxQhbeSA2NwQQbvBq2up7ed4CXjEAx7JmvhEEFcdT4zzUCA8T1c4cbc4qDwVoadvvz9SgL9Qhr",
  "key18": "2V4BzmXM172YQZ9iYKWZdL2KznZHsd9WArDEUHb4YNbyLyTqY7K5yH8fPmuEu7vFfnWfEqCpPFFVT8vVFHGrsDgQ",
  "key19": "3cN7g3xBpPYNbH6nesNGEQoyDPfzS23xPFMrqNVtptzru4HG5bbJZUcD4EyYANjC5EQFwnFbFDpxRxZ9HKBEYbnM",
  "key20": "5n8eBBZZvr7RSYsD2FFhSZtj7Kt2D2F6gP8GWG5eMVCxoLX6YDkLDKz3NEGs8LzquYmu7f6JNFRgFJMHQSAwddM2",
  "key21": "4EwuLbywfCMREvkTrk6pF7b2zshqEZNwyQuRXYbAc52e3n2Lr1pS2kQXwCLxQ1dPebabye5TYwa2h1wN62QeHSBw",
  "key22": "4Njm2ufujXxxGhqiJJqLyFMjQCXPKtyh3f48fXHMBmRSiCHX7cNqV2YYFxXCJ2LcBuqU98WkSy5ProfCn61ThguY",
  "key23": "3XYHxNEEbyqFz8mCaQBHJJBvsXaYaBP4jzzAhiKNL63vPHVgz8XGVdsquaAGQPb42dh2Ar75i1FukbkkTg956RbY",
  "key24": "5W73VJsmL4ey6S7xcG9UdUBXsWcdq7823B8Mft1QrahVwF4gzPjFwpu4oo9HoPn7jN8MqMJqFpVrJ19qAG6HhbDA",
  "key25": "NmVdSgZHPr7sxXMoESbHzUQ4vtqeTBMysfXWuAoa4S48uedgV1YBmqv43eVFW2UsGFpxrFhQb39Aw5Rcjuignxm",
  "key26": "3ppizGimCj1smn95gYcXmRhqTHp7SjQvrjJocQEa8tuk2DsuxHbzLo8CCqX6qnuTr3vJzwEjDM9xzJ56Bok3zfay",
  "key27": "2fX57sSfjdw2rxTXFDWTNEDkqRyjPVzboTxEDzFwydbF9sSVZV9UVESVA1QK78YfgPap9MzszAmjjkSdJUW37ZkG",
  "key28": "5yTukK9yZmfDhYcJcz2DunNdBVFkqqR5bkzdDBJeSBgT7ikAZ8f4BUsh5Y7TxjKjH1MwUZPpTdpVswhremHYEuyE",
  "key29": "2TuhhsWMmwVUXy62oH2akwmGJE3mJGea7qM1aYUJHs2EUfSEKUY4CUTk983Nfy9mX5aP7wJd9vz74noRKwXWar8U",
  "key30": "5TxVifkAFDb74nSnQfeX77P5F5uSiHnR3MsJqLQ153aJUh41FdLWKr99XqMGAJwRY9xboXpxioghBVUbaPYHzy37",
  "key31": "4KbXE8ieV34LxTH6n7s6jwAqrH65obx7RWbdEoZF5TqacgYSAwXxF2sG9VD2LRzomyR2vXkGNZ8YWHtqSDeGwv4B",
  "key32": "5XE7LX7XTQTUvmbYATqmXmc4DCGKZHtKpw8rw9VGpsju3n58aGTGb6NYk13k3vSY9nGm1oiLZhWD9j4yfn9zmyJ",
  "key33": "25iQjwvmFVeuqxGMdeUE2iAwHkWXFxMXGQPojV25VH2oz56tfe4EQsXvTcDY1M2R6wXkPyvYRyotsfWiERMcfamP",
  "key34": "3KvQVN4ystp59dnSyDc7oLgz7TP5mNhC8Znn3AyyiV823WNPidjmY2rD1TiqQdZptat6abrqe7MRyGigSgsX2PFV",
  "key35": "4yw2BQTzVQqMN1xJpNMxgbZafteViAb8C8GtvJR8nGLM5WR32bEywCmcTQy9pwseSf4v43URVdfkntibK2mhfQbD",
  "key36": "4rs7t7tLchB3wZBEUaRW1GdK4essuy1uEmV9yg3XxRAyG5RSy5shJ9qkC2qWi4SnqVCs3eFBrZaKdvxQeLysPcaR",
  "key37": "3aJLS3TAZ9Dfh8RtzjTVpia5zmBiCu92a7dzyt2NrpHmtSvP58ru8AckRfT9mgKCuxiXpLZWQaR1K9jyi2Y9Q2Ru",
  "key38": "2HAWg61iKr7RXHB4Lyn7cVNjutq8zy8RkHmBK2w5MEJ9D9kZZvaUhH8Av6atQzv5RAPbxrYuYM58ryxdcG7rQSfK",
  "key39": "GpdComrdG6ti8QJA8hTiYdW5Lq1g6WMqXq2b1wbWrQnCXhf8yG1XMF3AAuuesppDvDvfcCWwMVQ5sp5LchLJnVQ",
  "key40": "45qJvQ3uWzzmNMhARbB5FhghfxaFSQV72KdwjvQoFjDF9J7rgP9uF3V2Dn2MC71G8PeGYYdg5YzM8zcQoL8XJJjb",
  "key41": "65mTak6aEcuJKu8frUUk7Hc3CszVxZq4cVFc1GWQ8PoM6LcWXoAbZcEiUDUHNrSZtSatpu9ZBDMWri9GrUQBiT8o",
  "key42": "76WxWANfhDEbz5ngyM2tBvZzJcuKke7VBdV6wCioaeJ1NWJUUxxF6w776Ug8L3nRQ93nAcmmaMW77JMU2ZYJ7KB",
  "key43": "4GfhoRAafitzq2KeGjKWmuaqiTMJBKncP72gs2PzCASATVjTbVyTCSstRLvH7Cqpm2AEF5vDoQRMC2h6e2UrNdfR"
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
