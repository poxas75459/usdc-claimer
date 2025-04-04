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
    "Vg9Lqm4PxyANbsdhv5GbHas3e1jnq2rRiKAH6MLbEYoyaq2dcu3j1D4JVDibGqEV8z3o7X8ebnoCykGZ4CtscBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ygj9Be5FXkAgxw8FfDcfjLgAFpdQWsip61ngPgLJESjSQeoxMzc7LvRbBDXoH7CB64Z4LCReUD1iBfQmSXuDHM",
  "key1": "4mZga4AQCuqpUttBdxNqffAwN4fM3HEPqVNq1hj5h7zcNYAz3a4YkwzaTDPQxaqCoEEv7SA7qQ8jFtfwXcCwnNk3",
  "key2": "4RLYTryDGMgoENRFRR8pYGEHXqGCPA5Jfg2uGVBnTG685Gj7j5Nwd263em1MydnZ91eJpn24Dg9doSELgjp5ddNN",
  "key3": "4M89wSVENnD1AjWdt7X1Y1iCHmaNGAzSw5cM19KgkbCVMUWwJakkwZJXMoaEQqDg6cndVxPMTKdokNiG35xDhKN9",
  "key4": "2nApzp5CDcncjNLwjrJGXD8QKoVNMa7HYoup4DwktJKeUNpVq5FFKKWjGudBq1kEU2NJw25LWdprKYzDfawsnnSM",
  "key5": "4bQgBwuqYwDaWVv58uEDU1had2DdvvdZm62cphiPzehDKF4PbtFEiKQaRSxWTnQA7TX3AsSrh7WyfuPtJBdNTXuR",
  "key6": "5eyUrhEoxW6H4XKSTu9VzRDRjAGmeejUR6au1XRuEvzAU8yt5CxdNy2qz3g575tV4rimGT7Gzp2TY6JuCWuanP4t",
  "key7": "2QCxpJdjoivmyLNyLh4EBvPbiaoWYbvb46YUGCZfenhAR4czGoNq2LziXSB6ePXiQX9WknQK9EvZAp3kQfzQbUuD",
  "key8": "2ULgbWNH1HiVq93oChxz5aftxokMF8ihzWFUqyyrT91235GYWwVNqUr3Qq752GSnhiNmV5p6FiLbCKbokNVtFdsR",
  "key9": "UqFg2oVearBzd4i2pb788ZidE2hRBKds7KoxGMLCYPVZfcKw5fX66jqmHytx1QTiDf6ocM1VyjGJpWYbUEGFxyf",
  "key10": "64ZxUx9izhMihtLcjmeDx8ywiysHzT9VVN4u1aLkYN3HjS9kRYrBTzqPrfsBuqGucQzvaquLpognByJVGESeWHKv",
  "key11": "36LHbv71xwPCjVCEmBThp6bSkpBfX8eoV2vnEAFtJGmkVLKFJSG3miSRCkxtYJZK9aG8jbEBTsV7jp3caQevogac",
  "key12": "2PNqbSdmReMzYWTWEBD2Cf8ZFXC9Skwq8am6retjAkcjkcU5QxFrLPnx697G5QcBr7GTnBzvhcLr3prn6G9i6jtY",
  "key13": "52ThUDmZQhH9TxLaTKXJ43oMkKkS7UBbaAoafs3yaejv1nu2Xm6uKskA1snWsguwn3osN9wuEZK6Jk956gwyhnFE",
  "key14": "cs48ysQbvVefowpNK5ChB1xQqP5dVr1oH6uFiNoq5yvPggaEVKPphS6JCcMMR48zkH7KQ93U1ov3PPCsEFWAen4",
  "key15": "36dLhjpAN8Uyrcsc3E99mJ9fbjQNrrDBLLwtsXNQiNeCvYMab7jNYKq5NYfc8H4cgPsiMxBc5w5ZyYUWCBiyG3S",
  "key16": "4DNnjmZjQvh2Tjk3FowyF6ry4uNQ5rE5rGYHPHNjx3cwnEm9mtmdU87np3FuTCgas7pdijqiZJJEQndwCiuHKPWN",
  "key17": "2A1Sm5vkoCk9GinpcyobKHusEvw1x9brAjBSVhVLFJp4Au36SzyxGg658FaqRFMBnVaZ2yRsyd1eQXkqsA64xnmk",
  "key18": "47rhu4Ltzq4HeTZZrpDaEDQ4kDunyaAAAa8pjaxosy6J35d75LpsfaraAtmCKzt4K2e3nQ8mtEJTttbG55YeBHdm",
  "key19": "2vtqY3zYKgZuhgsFfBBeke8AbPzqJprYgQzo5kRU9A5BmPgrFUytjGbuL3FnARfHEVgJNeJz8M54KATrf2Wqkjxn",
  "key20": "3qwbVykqGTzKj1jLnVsvWeTwhGHo5TCju7g82jFhMYisPUbig8jNxvkXJED4MS3vsthDZLadmAcgWwFRvN1tguqh",
  "key21": "4gNwp1gV2eGYjMHxJ79hsdJScDzZ5kKUnotbj6FKNCcTH9HPQdjN1UT7P2ihgGimZgsZSFJELwH8TVijgUtXQ2mG",
  "key22": "5NX5NPGzGpAzv3K5jD6yNiCYkZLkrDmjtX3kfbKzDZTLaL3MmdtXn9bacM3WTtcmYyrxufnrCYdW8h5RgB6CVXLR",
  "key23": "4MMSPWnaRxp49DFdi3Kh1Z8PHiRmY5b7zEUWCYdbT4BgM6dbHADxd7nB3uEWh9yCwb6xoW9yYtMb13cyfqi2D3xC",
  "key24": "3yffatXhERgEGAKqrk2iwNx3XvN37CKBPK28TcR3Y5gvAnEQhDJp4ccwFCZ9RFTGjozta1Sy9MTgwRFNuEKhHGf",
  "key25": "gaTMeCnVCHHmbKJn3dRhQWUAipFFsYWxY83N2JmMrrAqd1wfiUGAw58gMuugjhpyiDXRt7b2s9pDsngCAqZvbAV",
  "key26": "4qW5EG4RutoadbGvQw1h7hrwZBoJ8XHHnXKKgFd3uXD56QVC3TMWt9ZsaFhmeztQF6c7VVLgQejGvvfNdWuSxz3t",
  "key27": "58QuwD8j9GknCtZGipRmKWccJj5NLJYakLpX8LMMNsfiCnppjsHZmmtvFgd6eMBcrbPqa5GzLtuwd6vFLc7vpSV9",
  "key28": "4y8wXxKwx58T7SiVzHRfzash1xenfy4Y4vN1Y7uoxrggrVAEYx9M6bPb8giHE2C5tz9XRGNChNL8oDewcCWrmauD",
  "key29": "3pgpAteBcZt5MtPeg9SHjwjVV5TqTyyJ3K2GveVgRS6EXeA5oSun7YcoCnJDHUK2yo9sjFBGmUjgAVmUg6mWm75D",
  "key30": "2n6LsPK8x7eMdPZ1QouSMDMkyCBUf6NnQqJduSDbT2ySHoSzM4e4XwfCzwCS3gDKC8wi1R87AgMaJQHbTWs8kQ6c",
  "key31": "3RgsiQ8cx6T4tc9D9pbAXW4HkyPTyHuNURmXG5saxU5gDdaLkoY3NmNU9rDnV9D474UHjMJQLJb4xijXc6ezCGHA"
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
