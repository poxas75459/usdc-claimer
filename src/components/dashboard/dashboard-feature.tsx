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
    "325oLXBmgjbBiMdDJkb25GYeuPfEd7GthDh7QWfTvf8ACHLsPKb2fCda25Uof6haeksepHJHuc5avRHNRVfg5dhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hR56HjTbTUVi7cPTkdMp2jViitFPTGgUpcma8373fc4sGhG6kmbJEN6mKY5v4nGEm3wznxGthBwpB8Ja2VA1uRY",
  "key1": "3R96DCGKUyTrNFBYLZ8xo48ZPksQ3uaRTgYqodbUq8vpqZwZRYh8H1pMqb3KiednNuZ9BqwWLjv9kku9Tug7X37S",
  "key2": "24rriWye9rzu76gVfmknp7r1XMN1vxnZH8wjTyoh2p6z8YH9wBbJ9u3GSktKcMxPnKxhoftTjCAfDRCAp89P6Z3L",
  "key3": "3TaJepAdAhDuoNNGzYmmSBatXwBbJxvofzEWoKW9bG3FHXLgvvsc47Z6Wz43HW4KAPJqec5NeMUHYQ1v6dmgwfTr",
  "key4": "hvvtwVo2am1tNDD9Ji6PLSAS41R2gZ7gP9xttDT45iJ26aiUW6zZtzHXkcffzxFJfzSgnvM45uGWDGEK99gDMub",
  "key5": "2FRNzbKU5jv2tc7pP91vvdNLEoaw2itM4KBUPTEEabxdxGNyu4JGDt1uQWHM3M2oYKwywBjNAezAESQ5QAQaeqZL",
  "key6": "4DKtnRvAC4aeeqc1oUDpanr8VZVcSKD54QvJMk7HXKhohdqqWFkQZvhUCfqTbKAtyCmTrt9nv1Jna1AcycrzosbV",
  "key7": "2n7w6voJbJT1moBPc2tQGaLqd5Nkvm1s8xoU5DCgnqaHg4yLUYbvmL8R3VnkB88219nfxHLw2eSqoLQSQdVn14Fb",
  "key8": "2L3hn7ZXyvLfZh6SX8va8q9hEs7SgrKgeL3tRmuLKhwwaFo8v3xecTWZpB9z6vyKBYAtER3MmV9arAuEx551Aht3",
  "key9": "2ag9VykiaPgxHrfYrGrwRG4YL3AQSsCbsdu8kiZRaFCogng9sDAy4PfY4msoeDoFZYCVHKheBpUgmqo9tGLRf7MT",
  "key10": "3KEsBCxknfTMArBz6Ycj2eibmxXhKtDJU4LfRDXNwTuThb6Bn6fvqu54bxzsU8f8ykKMqxXpmyDkCsPef94bcLQc",
  "key11": "5WLSxxevFbF74HoCnEeManceFCDrar3bf1xt66LYFJ6Zsj7YiTAdfYb7QcAa6PNWTYW7Cs5YNkHT7fER53JKifXf",
  "key12": "5zCZV1T5KUhAZJhCoiVhNr9AKt9StGr6Bdw1CLGHZExKHUg9L5EcJEfvncTqFLUW5h8QukwXgfEPntLj3L8kduB",
  "key13": "4n1dGLtupSRFZP2FsCT9MDSeZMzEQQQ4QBXzUR3qz2ykbw3sHR9CkRAPgXgdKUf5E5cfzNAFxbsDogf7VE3hu7Tc",
  "key14": "5pyZUwsN5GbapywsZqjuiVvRoPLmCUUXdn3aUTuRBebWwhZ8ZCY5uHtPCN2PcnR5WKMdX1n4gYreHHbxvHVSHFws",
  "key15": "4zGD3cxpSdemwQJ7Up5SknzkiSngopSEkiV3LdwR4LPdxsMkK74TsgNtFBsSnouCuAVaMr9Z36QXJDrxABgrAC9r",
  "key16": "2LcbEnyg7TtRJdsa8uvGKQqySirVvNyWutQqK8x9NcYzcFgS7zCgguP4Ao1WBVnRnNh6rGVrVJjZvHpXfdouNMcd",
  "key17": "3mLzRD84jorB63gTbuxYsW8o2M56USW2GcZ1Mtk451uUcsK2T8JiMsUrkgizst1cN6cpN5GnBigioa9pfxh3oTtD",
  "key18": "BTega6rw41tYG1ugFPFNHyfNFRHhugwXtKbTbtEhCybuFzz5BpmTcTqQbD4ACncuF565Rmnwx7tYw4QoheJQZ3s",
  "key19": "5cicwYmJbXAKRfiyKC3NSZYE8wJx74LM9HdgYx5nQVnCTg4RD7FZxHJ1xSqGksqQLFCnG8PL6jnXGswhfZsW4ALe",
  "key20": "jqTE366BKJj13wDckpqdrBcf8DWfjEVp98qe1wzenGGeBM7Ksp9jc7446kDNn7FRKMNsq9DhicLPQA3beRzW82s",
  "key21": "ZkVuQq1wmZ2cfJZZq9UyEcgoc29VbYzRWRSttDui9v9FZuRigu1MnftYJybuxVMVaeWStdnYBL5vNc2FZMv1TAv",
  "key22": "59xyJG4r8KHdnYpEfD4GPUxDrBELSbFBsi2jhn78WBtgvfqRN6ZBL3AHXn2LeE8c8rhgbdSTYhYkgPbFZfrp4iuy",
  "key23": "5gmqwAmPXsipK1RuraPSNvXQreP5Pvph8wEoVUkBtdxzC3SyqNDyofZtSubj78psbbqxE4ML14LPVL7fEPuuGMhx",
  "key24": "3DK1SYGGoepYFmcHvoaDEV97fue4iDVh4XGotcz9g9PE5RRrgUGwtPnXAnhGcxwHBGmjQYy1bjrXzpZAPhSbGP4V",
  "key25": "yJcQpdEZKbpzkqDtzEBKhWRha2VdpUXYgm6fYV9gEdsLBhVWFkjRVuw45QTwbPZGvo1mag9c56Ne9jjkm9PXiCA",
  "key26": "42aVM5pT3sZkej74vsTqcwgckqRczM9RAVch4Bwwh31u4hzK1xMvauZMj8ndGPjDJyfVL8j16isRHXCuM2n991sD",
  "key27": "35ctTBPrf1GHCbgai4SH2TvLGufzFGsgbtQAABVqM5PXctTP2TNhaXJ3j8sJfxuvm9VMFjJtXF7qBpRzNg7fHbXQ",
  "key28": "B46JXd2YJS5xZAQ3meE15RNVRD9KeteGGqhp1HPWrkMxvkPb9edczYHEbMTR6zQV21Ln6BSpX9TB9H3NWqVb7LH",
  "key29": "3EK8Pu2vKuCHMiukPvGHi3L6RZBpSxxr9FEK9XfPnYtXmodpYrU6ynP6EUfzFFfgr85MCCTBJw71vPkd348vjeMb",
  "key30": "oguezuL99bjewGRxqf9kdkGp6oaVGdGv643qLrqvn7St9SCFmKy6utg38nUCkrQdMQ6TmwLyMfbeN4J9NgiCte4",
  "key31": "4NVqp9v8gHknsqd71fK7shK2yytsf1zgGQ7JXhezEzKR6oqA677DRmDTNkcBtYFeWMt1GPvfpYuHPPVZWPmLXFSq",
  "key32": "4rAS6uNVckUt5msz5NJo7rDxvdg1DC7MNmjAsY88FqqN89wvH5SYSTTB45GzyZcuPFSPHZt6bJVjYTxRFhHoNs5b",
  "key33": "36aAfNMC9ueA5qeTEJE83th3tLA8g8en8GVMjpAXgszNeoTMznLifJvmTd1GHq2gdTDMv6DdQ5sozg3SMHLid4ca",
  "key34": "3EkDWRhNUbp9sAHQG6dQmTrFpMvEMCcM6A9sFtU6BZxnfTmxmdNwAAi2tPYfM3uzzEjn3tcf9TZwnYwk41Ds9UsU",
  "key35": "5PGujCzjK5YiUNLsaKC7pT35X5PM93qhLUDj3Y3KVLhpw9zevQdLUqySoaneiCV99ui7ryCgLx9QC9uHBrtp2y5Q",
  "key36": "SdkS1daS7KWPy1LrRfGsJvw8JQBwq77eom22Mn4QhLA9CNe4JQAJswJbWZacV2XPfcwJh38tsqXY5iyGJ9GQgMG"
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
