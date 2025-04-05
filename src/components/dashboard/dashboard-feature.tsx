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
    "4dN6ejuCwLogZM5RwSYkzzBPhpy3aMqEkBM2fF91SU9uduNn8x4EAzzQGVNUD6wgGY1Kx1S3fb5yZWTC34a5HMsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCa4SEsNhC1MzqtWkyqh8Ni8NGynTx9yJkwpKZALXN4puC44TPXESUkoPgfYRygnWUAuFoK9MRuWwVYZMommYsd",
  "key1": "4TD8GguneYYNXes8VLBYBAfLDvzyY2UTxDpCXNmjonWCuzXjqa3bMBhVxp3mFMDx91rMEhxmGEPwuxVsb3u1aKUW",
  "key2": "3yLPZWbV7kevFMQav7WDGYE6uLvvCCJXcCH7rk49MuKtZ4fe6SwLnEJRLJYj1SNBQ3K6H6d1L8doGfyaHDsz2vNy",
  "key3": "YgB6QRaNo9k7VCJa5L3WqcUec3ukupAY5ABU7nnmw8th5tmoGVCZ9jLJGzpu9VkZA3weP2oTbMoKVm6CVfKwxGr",
  "key4": "4J9Mzvn54rwzRTkee2PbjP9HhPThLgsYLYg4w5W4GKH6A2FWwp7mMnFZnYPMyTvkFYouqmc7k5roWGgKaWqH8MbE",
  "key5": "yQy9gS9B5HsEPuZVKrvGXYi5EEY3tToAhHoTTv5Joqf99x8TZ17iet1yecXZL2KCXmirqAbz4VSh3id3zBEJ4vW",
  "key6": "2qJvDMjqprVVVm81sUzpgkLC9s2N3RPQXcuxrCQfmzWHkocXhoF5N4QGS3Rjrs7zNzpvxq7HyMhZR8rnQQn35AGU",
  "key7": "32uJc85wmtWZw3nyTg8pPUkVsoUvfRESLQSJ9c49fitd5k4kmzDLM3iGPJWWNKv2kyT9NgZbkLeyLiCB6gj6aHXc",
  "key8": "4KTf5ktYgzNNN6bM2sKiokbCEyFSijH1PY9woggkLjCHbY3SDYyCRbjJLSy5utrSoVZBr3FUe3trrc8HXLTckJcb",
  "key9": "4MYpCDMiJBQSk1FsXAcYW2VEpMgesXbdiGVWQQPUonTjdxfYQvLvjRjKppwq696eiczh1QzUrDXo7Es1xrELuixp",
  "key10": "4Ye6Uv2Xx5hzt6nUMBDV8gJ4PpESrczvc99SAsC2DLFPDerAE3At9qZQM8FPREwAQcE9nBg8eQWS1AfkzAjxhFBr",
  "key11": "2Vh2NGkrTXqYC2dMeLC8F3BgWkta1rjjboC8ymgvxuEkW5v5BTPgjQT1g7w9YRW7ChiDzPmTTZgd8Sw7J96HyAyU",
  "key12": "SXK2BRwpfsnumskLmUoTCKLGQazXRZBkTJpEydByKxSxk6b8gJen3mUVutt2NtFctg4rXUzwVMKwDc46XaWp52e",
  "key13": "58kts6hLtZJYjCQjJjpRK5XjBHo5R9MznEUMMm8dDDNmQeZ3jovGj368rgERPsfbezerYM2bpZeUeRU48fDm2eg8",
  "key14": "2moBpVUN8ujYzkeJVAT5CjqGZDD1KhSMZUXGG5Ro4LkA8J3FJgeadYxej8SpFFkD4xmfTkzzCdVHxbyiLC2hjsd1",
  "key15": "2V3MUyXomV7reBqJdGKLbbp3FRPVWnPfPn4BGBzRpNGELmQN38oZjnAdaYgxmquupBFK3MNzZwMD1unGxWdNMQbK",
  "key16": "52AzMqERdUadddDjp3VyNftpxFJKgqDw5BmQY4M1teKiHvuaSxtXr4g5kXM7enQyR1wzNgC2t9SFq3SMQA7PmkFg",
  "key17": "3NmmZAL1MT4NHgPCumdt4Z856DDHYjcARau28kzcr5NWdhjoSAErb32pVkKCHktztr1UbTojqSKLvLd5QYWioV1A",
  "key18": "E3RPPJ2KPSn3a6nWyVpJUZjfxrwegFMMESwUgs9udk663kMiEDzs3XhEWt6aT9jod2fDHVw4a5kziXE3MJRDuCf",
  "key19": "3FyUjBsdXympCLxoQ8SiCT2hpmrKm2wmEukicShNq8bKeVbfbHFm7KbiLgq9jmpFd8hY1wBDpBxMQP6Dr9tbH7Rm",
  "key20": "9MSyfiJh5raW5rVnmPMeXqB6Xd3kw1EFnn7YD27wk6wh2eeUQKGv9kJMXh72RgT1nRUcvv8RxhaCn8q8zQ19EtG",
  "key21": "572gwts5XHGX3FvUw8EaiAYCWZniWFRPf9vvRKStJZuUt2Ce6fwyMkoeiVqm8QnehLXWqUqBUsVZGYShDUAxx8bV",
  "key22": "bw94VXzvSyFw3pVp5Coh9hfUzWbVcoZiBu3NkvxBcRxi1yU7xZmcP1Z3rkUMz3Eo4Pe7RqcPpTXAM4haGJGZjCT",
  "key23": "5vqPj3SzpoLT7gEUUGNSifRhHkHnKrxvJstRKQLDdLt4HeUsScvpGSAba6yoNQvnMsrG3vPrj8xeDWJv8bGWHL28",
  "key24": "5AP15TkHGtXTTHm8Z9Nj6r9ezkFbV7ve467TYrYujrLVHJpLRiiZGPzHBpQRigg4KAEYuGQKW5dkzoPYrJJbCait",
  "key25": "4EftHFzoAuMTpgRmDJM3dwiBou1buTViRXh8jfWrFXdywFwFcSiZHdqzL6hmzXgX6yB8yVf9JNm349rjeSgLxgpd",
  "key26": "2hCH21Tr9CCSB5wZXKQg5PeEHzyHBJ8JjFZgMWeNE7XuuxBwz4PR7b7GkUa67SAYvLVw8eh28BcHPXzqrNwv8nTS",
  "key27": "3VKvqhTuecJA46DeYifn3GvBcvtGwAo5k3XgCbBi1M2ZCfNqQW6Uzhkp4NbgS5g183NgcCdxYzWFZX7giKNU6Fii",
  "key28": "32wBkpffojUhBKg5FR7a7iLWRtjdAv5omXQLd5sxQDCZxZteeSePUNt44Ruu3a2PWoQ5eypvkmY1G8xGuxNB6QGL",
  "key29": "3YLWS4nZD9WXhqqSe2thdjhcjPd5jxaxb4hmnR8zYmnLH4umGCuNrncsyNbp9GSHkRZamFXMgdMSYNSXjLFcWtwY",
  "key30": "41hDH6r32PWR5xrh353hoXBFtezTVzV73DXrDRF9F4JPQWCsC9eRmnLew7WeCFrvqbKXjQBxs9kCkgY1LLvpi9ca",
  "key31": "4XigYhUuSrx3qU9bbVcWEfhShX2VrnLwBEUEd7mSD5zaTVC2vyUTHeMkaLF5tFtkW6V8uv6skKzi5VUPaD3LXB5x",
  "key32": "3L6NSB4FhKmALRyoSoVbnjBBGR3cBUpRnf2vZkzySZ3E3BbsSYnUHWk7EpgDQS4umKdE5AEEBa9KWtFhkCU2cYcz",
  "key33": "5k4VRD3CDunTvufNpnMyvkXXtgPVYFYSXQZSw8Ch6xA3tHmb7JMnpexMoT4QbfoWdissRYGucTYicbQfLmDiLUWn",
  "key34": "4aKJEkS2P3UxcL1nK9EqJxKHzFoQsCXsKNH4RqA15TasxHFsFVXvYiVYvxd921yTixH9d8kmzyBrEGHjR4tUA1FB",
  "key35": "2jj41zgCSeKrX2PfUzvoHtKrWQcNXwp37hxMAtrs7dGHnb6he6sfGFz7EoBXEtEd3Jg2jYN7MEe7Noss2CuyHjL8",
  "key36": "4qzkeV8kGuDfFUKcgTh93N5Ztgp9mDqzb5VaG2bUGus7PtSKvgiaf6Epto1sdJdUE4qye6LWEwwoNaF1ZBdKExkY",
  "key37": "wmxNDZvQ4qbywGxu48gh6aSpoiNHcKoXTVSRs9bEkAU43G6bCLVbuGqm4u8VYYkhgJKDDqi9JJs1FFUipa3jpgv",
  "key38": "2orka8Mkmsk1zBWyvFtKtSBPxF4Q1NGfLeCDeAe8AA3f5gQKrAQvqLphzCmmLfenHYTyMtBp9yTWL36vtKLpEgJV",
  "key39": "4JFUsf2hFefRfRJkqA1zZx1MJ2XxHJZ4kjartCHR5FJkfiH6gPwG6PzLsD2TWTTN87YyX6F2rXJ9gwFNGExzUEJ7",
  "key40": "4JP3kQYx6dZBZwq2gKf8AumwpgkwZNZJxQuw62U4JaZEcefSgxEkVd37VXmiDK4C4zxWniCwJWLCPwrHMSz1CbpN",
  "key41": "4s4yk1w9KHkg4MJ1SaT5h2nWJ8uXeDrdcRYRcYmZteM8BRXYUqKPzjbTa2kRQsekdGMGLwUH77o2mojjjXzEQx6M",
  "key42": "5Zqoyiog3Rjtg2r8ehrDkDoCrcuaTwux2NDeRUWEXo6bqpduZD7Rzw3AXxYpXNNHXynVdxK7DTNmDQxqrmM13uWh",
  "key43": "4YHSnvn4cs241vb8GCG26zHB7Z7K4dyuiEeu7817HTyWDPK3aV4FxdxRmU4uVdrtJjaYiRgesCsNHXR97rUa2Mek",
  "key44": "3QWrqpe8PQdF9boo8bR5a4FmDdcP4rre7Qgz9cdQ2GyJf51genxzhFwNsts5xoYJcjMW83tJJrLLoNEyRZxwHast",
  "key45": "2j9xW2p2SzAjVvQpL7a2BuR5WVQBUadFnp233bfmCH3MznTh1T4aRDQzced1oWXr6xZHa7UndoNU5CLebwomsKzh",
  "key46": "5TK9XTLT2H7QcyvVUWfH7auafBhdzvF6BZX5usxt21JFFPuhjyPDdW8UQinnDTn1d3HfDsSsgpuB62U8J559J8YS"
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
