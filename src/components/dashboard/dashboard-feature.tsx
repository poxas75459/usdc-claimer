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
    "4Ls6GhXTgwTccaxjCdVQWo3GNGigpPxjfiGUa44qpKx2GXQgJdiYVSJDJGTRXZatApPDmT88TFbNWrLYgP62Nm9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YuPQUNuXUM1gTj5qkwqY9sGU4d5G96a31C78mXh6gYXWU4dZh49ivkfNz6fmV2HvNBjaR74yKdmBPuT4ukwJ5aJ",
  "key1": "5PiiLdSzir8YXeP1tYpfgqVMWtF89Saq5jVkua4HqbfHtjN5HQtLCDRDep2xrr9kXGZKg3CtBDNEs5ucWqg5yxsg",
  "key2": "4aUJufQot2GHPN2wpk7px4vdN5Xb4K3a7cpYd5D7Rr8mNjB5AbBUrj2BwnayvUaBeWkyEnHPcfD3MAEtqP4UeqQH",
  "key3": "3A9sq5bcMbTW6RYpk7V3HX1EgZE9wzvTwLJDeHzzRzZdTMun7pHUSP9iwVWMqjA44r6pzgWbZWTC4ZU4nNNBnNHE",
  "key4": "4AUXcHiS9LDPXXAjC3FzKv52pXceBbMAU6pd78VT8DfGUwLVM6FfUxCRAV1hGDnUFqqtRxWvyE51H7CW6sgihSix",
  "key5": "5WRfPQcrp4dR3pothmQCfZ44CxnX25fzdugrCEPxoJVhRk7GqSZs7rgWBDnJwqmXTFg7eYNMNmZ7ou4YzUfjReSQ",
  "key6": "2Md3s9cS7DK8AtPVewtUNdneVPJtAhnYyQ73vDAaQb2Uuw9SKxPssZeJz3bSLBc6QGRtfJMupvinxQWo5C78N4ZS",
  "key7": "5sj8HUXeZ7pYxrxKMN2JKqxni7Yg2j67RzWJArxPvnVau8VfzKCDs2HbsvBGw4tNzoK11jfw5b9gFpWjPb4HaKfb",
  "key8": "4p8NdXTEEUwPoiWu1HYSeC9rTEJM6gv4CAaizoaZJc6A2VpbtXsqVwiSpmUacbLVVcbsK2Bicu1Asmaot9g3EbJ7",
  "key9": "3Db4uhNmWTuZqYT6VEvzxhmHuYQUGAt9bWCNWADN5yH9etzhxPC7sy6qneuvBui1chcMaqDav1ZLYh1GjcLKjnNz",
  "key10": "bwanJ1p32grnSo3Q6hPNxbPE3thFdQv6zgGqp53j7EuqfVygW6tcuP7nYZEDPuE5KQ5RMqNnGM31dCFB4c4a49C",
  "key11": "MLDiYYngjHg4aF3RGZmdm7inhQnbvbh5uGgJzV2RDKueLLHXNChdakogxjHkeLFfR2t6YHkZb5yThBUpEbm652N",
  "key12": "4msG4rw7EGdZ9rZB8DMT1HAHEuuq14VKVDYaKYK9q77RJUUwkMs6CyXzKyCDu6W2iTMw1jUqWALYmheRcuqAgt9u",
  "key13": "5a4XF4miqnS5nVy5y65Duqh7YoYQBp2gYJYMHEgyEDZCXcmvgTPxnVE92UEU7W7XLF3MFxdoydhJFXHf5SD7yE3W",
  "key14": "4EdhjfR71FcRiwFhFqHWTggnks7hBnREfcSQikjfmZt79bRo9efApSDuwipuhZfsRaPYexCGkVfPeE2qKTEaVzH2",
  "key15": "2bvNTu7ibUHS9C66Uq7MDWbCVxXazYiGbiit68j2w2A5PmGSR2mcAcEBxKP4ecWaqRxADEzTdcno95G7K6TiRC4w",
  "key16": "k9YUCWfVToE1urvKaSLiW64y1XgdRQ6vqXsxeM4eTtm18KVrX6Yd8FMY13hSu7ncXpEj3ZCP4rkQZiXb7Vq32uv",
  "key17": "4Br9oAjAcreCvtzjyeWKJmxnztm8vJAEHQz3dY3BuhDJHYPaRiHGkPrky283Z4bmjQ2TQUw4usec6y2TVyMfKwaQ",
  "key18": "3HXY2ZF3ENx1t4iZab9kJBnBwBvntyj6GdGrTnkfzsnDcGNzXtioz7fBchkwE3M6arAEy6BBHX7BhXJqqdaWbZ8F",
  "key19": "5YVypYkaGeq1zsMx2ADb82j3692do2edGbHvdAmsGtMaNZNnLzqgCb9BdobB5TK1z9uqVTfy7tc95fPNfvtQvfqc",
  "key20": "ifsE4T5mdCuEFceDP25LnhDg463pkC4kX1aCpj8JciPM4AFAWzWoHqv21YuYMCQbAiQFpiM8g4GuP9jhsjXFnZU",
  "key21": "jkeg4KoowSJuKJQDLKtCYwLjnjXXNQDVDFDSAYJhGL1GK78bVGEZTiEfwkeJXhGe3zhN3HTtPukMB7ymrHxs536",
  "key22": "2NzuG2XM5sr3W3nPZHGRVTfQsEMbamZNyNqq2pG8Xb77dvyhGhCcttazb5GrNgnrYVujWPdSab2gW4PamMAa8dYk",
  "key23": "378pa4mq5X1oeFBuKdHY6DrpA9YZE9a8mUqUSawVmkTkrqw2zARFJJjJCqJbTFKE98NvHLY98cJ99WNPiSSss2rc",
  "key24": "5v2ToEmgUwN59UskuQk8rhW9hqFWGMBoNjVK8xpX3u6mkA5mBKtKjNiAjrG1pHCMq6jn8nqsHFrAwJZdQnnLXnTv",
  "key25": "4AMoaKrdNVMLXuUC7PXAy8RqecD47Nwfa2ACkAhXqRLBqnGtGKKVx34Y1fB4nRp4kt9GBn8ARc6U39A665axYCkA",
  "key26": "3iLV17MjJ1gqbgSK4ubUsqLk7a7EZoBxEBDCKJTw842uNgrbAgu1KZx98qcnb6AL7UBxXsLURuuRTPZ3EHAbvoUa",
  "key27": "JzaioA3DSFgGoF7d8hPp7worrjo1ph9jeYEXTG4zU27zMbhJVEuLEUAZxcHxtR3QaccxDtev38nwfFHgmohtuNB",
  "key28": "633tBiZjARafWXK7JGVjS5ezN57zjwp8BRKCgoaNALFGxRXpbvANwLcEGXrRQsfffYLNvi9UUGTHXaRidrgeTGRB",
  "key29": "4mjE4nvoxdq5Mj7jfLaxvnXk7vybvC9FESEUQiYjJ5KkvYMWDLaWh57Pcgh5N7Bm3PvVk2ijNnqaPeU1gj2S3eE"
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
