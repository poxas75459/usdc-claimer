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
    "4LzJ9nsowXE5rXyNaRbvkcDX6ioAzCZtzgaBEJtx6S93enF33pv7kTtHRikmmYSYWN7iGmnjG4cwbA27p6q9qeme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B52LgTrVPtm6KseBexAAYfqT3M5TbVQMKwYnQWt1mxd9b4SkjfZatYJwDD8VG73CHViUHjS5R6DEAFozDsNbS3M",
  "key1": "2UCBfmMHAHHWMN2jxPAg7Ws95mcpDmgrGGU5j8VophDkXHWffbLxCpp4VHmPHa27odFHhwP9Q2CHG6bE5FQTnKba",
  "key2": "2bNfcfJyy9vE75exELuoMmvJz8bd6baqcoWDKvCqELrpZNnxDqwKAV1nph6tawG6dg4xDr3SPHvL3JdMfEif4ypT",
  "key3": "KwunHnMbxR8nizi8ozacdziSiv3wKmUEP9LgoKrLcjC32j1yxSHFDK22CTz7jdMh4yb2ALF9VLKoCVGVbrrupjr",
  "key4": "2ZmYVGC3S85HM5JafvBoKqhskAHXiEnXFn6W33eC9SYEF4iFPa1XT6FXUfswTrVa8LQx1kZ4mkV9mbiY9cj5dUfd",
  "key5": "4m837droim9pLkuZpnsWr697HGJbbWTxCx2oEimnN1StrZnAeoBpSD8x4FR3GiELRzNSQM1AWUWJ4vM6c7DkKB9k",
  "key6": "41wiLTCQVwmgUU1T3gc3Y8ysuWYctfVjsVehvf7RqZKrmY7sPbntmK9K9jySoS88XGXWY9NL89Tc4xZ5awEPmWCc",
  "key7": "4yvbV9ESnWdZezLE4U6KfZz2CU1pq2Qezq81CHhwBSoDkU9NqgqRXFTsqzw6Zv4ENQDR3vHyMrq6HeT6iPnjWa58",
  "key8": "5HWre12k93CKhcb2GBTXoS8kdetrZySCxQQtDfTXDajMKsVYVzknhzpy55Kft4DYvYwBRiEyRuoXHQcdsHueLso1",
  "key9": "4k1qAp68CMJ7RKBSimrVAW4shsULyG4QiEupAa6LcsaTyJwrXUvz2EdiJmwpXKXKGYiU7DttW8LkwTSyzy9Fjy64",
  "key10": "fvmNz8mTAfkubRR9ciqXCyWZhyHEJdbKVEXrQf8uesSkWonRkovv4yGUBHkQ1yYYe2ohFj2t1jEMfz7WUXwQPGu",
  "key11": "24xcJm6UBZyFMGt82s2h9opSayirRhRYWScJ3p5GBzuUxWWx6pu5FVR666eQ117GRwS1NSeipcKW4KV6QT4S2Kx8",
  "key12": "65ZcFPFEDynbDvbYxSPUjT36itRdpxV7pEwyYPV1CqbmkV7JjUKLiAp4urotUaZhQ9L88LDBXejTcERyHcYGe94W",
  "key13": "4hcdfMGdLWcLWWMQtDDjEu25gwNSpVSDq4RASKDSaMSwLApaJfAssXDZEk8NTCiioW5XMd9VfWy7TgsfhXDdkha2",
  "key14": "4kqnwMsPnT2xgno4Q2c6qmbQxmUcD82PxKruU7P9CZFMZHyihzqQuYzQkaQ8k9T7RRcZUtVp3JjkDDFNqw5EGuQ8",
  "key15": "4reN8PL36aJDTPeXZ9C2SYHvSadDNCrb6J4HXANRdWE8MyRicENfFDxYq9DmmTwjnj7HPM3WAdiri62kG7REgz9G",
  "key16": "42X6h3QAVL4Cvr9ynCNgSfwrL1E8w2CyRq3G24gwJRZguK5JTEGFvMpuvVXR93G622v1zwqX8aCLQqWw2YkoXAmi",
  "key17": "5fx2aFCD67q5w3Xdx8QfWX326ARNd7xvDgNw4bSp2eEwVXBjkUrJrq9veHoMEuBYip4GUiZ9RZbkVb4EQzE5pjxN",
  "key18": "3Lr6dtmo6u3AATysPPmtcuf34Da5one4FFZnj3f5e5QYZ9qnoYEiom5GyX6Sj7EnH2mqL3f3gmc5DW6xBFyWUPrV",
  "key19": "3DyJcWzhuAYQKKZh2az3k9hPnL8oFmwbAA5myRzdqNjgEWVqcA4mNuxEb13fhHPua9msmHxAQPKci8ttsjE1DQn7",
  "key20": "45uz8sZw6mFTw82UfLTARZo48Rm1zqRnAyKWfzRWCpd4y2VKtQjwfetGZir7EYSNGDiqvML7DzFVRfLUA3qfpVNy",
  "key21": "2iTSW9PgiU1gMYdPBwYVzz5fTxxhPNiAiGjMMd2GWXGVLQqVp2EchLywZd9BcVGE3urRcZVvWYd6vFgPros1UR81",
  "key22": "4Zqa2Y8ChtymWTfW2f1U872KyWPqorFxuT5LDD6cTzq8Vb2zafHfz7L7ekLBFXAPAFDZndD37vUg2fWHtCEidDDV",
  "key23": "U4vyUzL3NtCKdNymxgJhMYrRepWeaYYhCNUWDhPaP61nWJ3PsXyJSCtDJNwctvqceiDa8sVpNyHjwpAqZBL6FtK",
  "key24": "2aVrdAXPGcKecpCMSrvUac3jfvUHtGneUEr47QXKNejrH4VVyNhGwUjBswfFWjN2ez1GHPuhpE5RXVRsyU6XMn3X",
  "key25": "4p3iy3bBnJnrLWrjaYoh7jKJGanmUdf2TVUq9HEkz9dmxz5dJBmqQhsPM3jgKeAUZfGDQNZEy54jSoi3bXfHTMBR",
  "key26": "2YKVeoJVyrVcdxXbb9KuWmrnadxCTuDt5mB42yFyxgbev6x6cg2Zf3qKcx2Xx22Gtw9NcnYkdubmo8WCsqiS89Kd",
  "key27": "4RMcoPmvxvtULjqMEYifn2Nmj9hLQkpEcshhunPZjquYjAJ7EigRTUXjzWAHi5FTAADfUYGNRghcbqF27MKrpx8C",
  "key28": "26ofd1LWyoPETdZrZaNsLArsAUBfQPA7jkrw1NdXxnTxSnobrYSgKPVrLpgfFTqW6bXR5RF8Afj7yAsuCLEBYFA5"
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
