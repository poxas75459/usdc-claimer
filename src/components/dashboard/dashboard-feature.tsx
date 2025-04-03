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
    "5aqURCrLNfgR4crnDJmvPkDhwXnExYzdrimuaYuwuqhnCysgHSctgbDbGAvAc8oiCMCTDnGUQxcNRF83d5uHbysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4ti3rfnWXpW1NLuAaUwwnekpjEgguQfQqGv22ot4Mb7RhTe13VHSKKRSMvKKvLjXPskmzKyUvhj8YPk8f4FEaL",
  "key1": "5FchspxyhPtUbGcUkAT946LQGCqRYC14Us5PDtzPzDeqBbcXdr79fV7dDKv66hDs5Q3ihV89MieLKtqgTJy6dH5j",
  "key2": "3EAbdPTiKaAAGTdfrNG4nmrL74CuAAmTB4mZvvKDd7qVcVTmAWTZ2yAV2Vs64M3B4s6b3Vby1Y2EcUdY5T8GDEfn",
  "key3": "WB7fdkLvTZtXKNDQyw7nJfT2FZE2nZJLXFWSWJLGiQknkxHQRiHK6LHywStbhy91RUv3uEWnhWXRv5DmAcTmvM7",
  "key4": "3P2gwebeFttjnv6j5pCnwHfprNnRdT8ug7pM2nXcqQUiL9gk7XxLNZziraf6JshZqtVojyHuk2bPxWRZpr2p3VXx",
  "key5": "3HyTwkWHrdAtzCw6pAMoo4dTiY2aU27YqWuWFjjkRv68G5umzVy6szUMSRnuLP9oWhKvzVTrJ6mZFSsfsk2usHA6",
  "key6": "fvbkoYvX6SnFBw7pBch9j6REqa7NEFrtMGjZbG7DzWBMvbR5kp1WbxjyDZ3M89haRFvZbmxCm3t4gc44XAdgBdQ",
  "key7": "624KPf9N7u6NFWM33pjt9LrXYkKsoXQ2ifDiULjkNJHu7G5H67wqNCFgPbFKVBtNQApbToCCK4zWNeG6z7zP46tw",
  "key8": "3XNY9yKMr4C1GfQCtcmZ11eAjSsWnsr2yp6qG5ibg9GjLnCxmL1EqtEgUks9yEvhx3xAEvoFwEH96Sd4BCkf7n9E",
  "key9": "5ipaUh3RSMKy17mqttCf1o95fgJx2WYuMaSZupGdteacKVwiuZtaq4M1sf3ApoBXA7RBQoV1diTgRDv1cHUq1T7H",
  "key10": "2iWWe3jxAfdtFVmHin1GhWmq3CM17rsLuGNethg8XStm8AwovD1prDWhnSKjoYPGKs47QpFYbjV3oi4m7ponF3NY",
  "key11": "mZypmYxgtUn48m2Cyb8aAuas41haGyWHVjsH8EZt2JPnw4Yt1hdMH8yjqqaZvizU72gtUqApY8spxqtjCuwUbFB",
  "key12": "4DEJ8kddcfvRhqJgQ5mCccp5uTt8P24M4XXpUmDsHkDDQCTc3WhWhuTAmTvkFqqX5xSgd2ZA1fXePGpqfy6emjvP",
  "key13": "9gsBkEp6Dba2hC8nkc8cPd89jHsRMEiGDAXYo9DuAJvHTmGrt1rBMN6Cs8jg87qMoDC6zUTNT3ZkinoNgfqfTKB",
  "key14": "4Hn7fqXkBpM1nFdJTJuE6txQK2jJfi7MeR9Wt6Q5wxoFjNJqhtuBN58RNVmusgxdQuggaB8EHPsYfLu3MNENPnrU",
  "key15": "3iLQUD3fK9moEwSC9kzQHzaELy4cwAi5fnnbHTzQ4ULagpPTDy6Uj6uDjkkDqQG9FiNh1sSgcGGMapo7Q5ryo3XQ",
  "key16": "5sTvgnt4ZmMrrTqifmxA5z33jb8yiqfpfz2F27ikvAZtEbzqDUqzfNCHYAmW2UUikJFsbGdXRSDuEoTjY9pVkGV5",
  "key17": "49vdLfHi9JjVgaVEjY73sFT5USDm1aPYhUahAhCZGukWA2GgDdJASmdinK9KmhxLbqNSCuEj4vvn3mvQ6yoL9kyF",
  "key18": "5ZadTv4zWfTeof8u57Gb7mD5BePRKknLiurCpajp3HkxHABQSeRmuF6dNbKGgVLU76SbghhpPuXCew3nFpZmGjd2",
  "key19": "55z9wGXNsXf5sJ69L45JQXwGfj4tHzhajBvjt3zQm8Q5Bs7u9EnNKkp5cTY76fgVJobKnf9c95XnNisJqZKR4uf1",
  "key20": "4SzTqcvpEhoEe3tDvwY86czBDZnmj1xDxrrDXFuqKeD77AYjM1X3nLpsDwFVqwiBq8JtF46SavXijMMcwLUnK4DR",
  "key21": "3XPHDTAZLgV6RZqrZLhYzTmRXhVcQ1tp4tJzXdQkgE1G7vCbkwjZTZ32PbHMxKv3oscNHSk8SoKQAGaezYRWHAHg",
  "key22": "3bXStQisnFGHpvaXLmEAF8YncNJ8ATdvBJhXkgboMHSfqMbiiyyipzU9uK2fgwA9ehsZzr5JZiUxZdSpUM8SBwV5",
  "key23": "2wue6PJXKxuWcLusv4sQs8McVXLhePp3Y7zmPfShFT2MFTHSDoHVshWfBc7ttyprLxrmJUvcXsnABvgFwHWjqTbd",
  "key24": "2o52sn6M5nz9ysVnCWo79u2dqSypj2VMLm5ZiKHsMMrnBgTXSMv2cuXzpHhZ5UHeakrPiHLgiCLbR1Vt8HUYuAP9",
  "key25": "5hJmMcTdiSNdFwPhdiEr7MqmfqmR7GGTyfsvcMMgW98AwXZrcgDozkk62ny57uMtuQ6wfw6G4iB4ZR8K6vNyoGxE",
  "key26": "4bVkiipiu8DdzntLn4cDuPxAaMaE6sMjn2iRo5t9iq8fPkukfEepXsdXagqKWfAHVM6gLZGPMxh6ErgLmVDn6m5J"
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
