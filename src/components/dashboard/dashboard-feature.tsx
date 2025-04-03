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
    "WCMoVmP35S967Qi3smiSjqtGMcLuyK2PJKYhX1ebvsiaLM8mmqMHv3WH7jj7Md9eB7VLM6bppm2aUo4LhGtMBeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3319CuaSDyxEuHh54cXV6wE8LSsF7x9VGgNMTt46L781pkJwK9moy3Q3P9YtRd25FEkqiFaE2BFpbNWko7tY6N1f",
  "key1": "2hR1hz5z4ywPiTaP535CqPFsszxpZMsdBLhGrt4VTBBcmQsG2VNeX5HmmTQEb6WvNNqc5xqtPKSZvbq2GcScjsUe",
  "key2": "4Z3dmuebcyrRht3qjHuppnur4DJmxxqrnnddes5fwwo8oxaLyBHuWoq9nESHRgbtMzvYp6NY9DSSRdi5jeTr6QS1",
  "key3": "4BD2JdZ1VLz4MhA7vTxNQNGhH7Hppdok6JTJYFYjdXvCDRaw4Pb6euAArwheLeKKQEJndwbJsjgbcZ6GSyfbqUAx",
  "key4": "2aG1borEdmWeQgSBQD7DYer2UDmjvEKqY8bA1PW3GezyTccrLVS4gU67Dd3PxMijMtXMQNFLsqMmFVzGkPgKRUc9",
  "key5": "VgKuQWtN5woAhqH1jcresUtkxDDnNvqCdSL8V8vkWPQbm5pfwjSNDFARsLqTfHTP3jbDtfjARd3C9Z5Kag5ac4F",
  "key6": "3EFLV4h3AuEkjdzZFY4eMVKDnx4JvxM42zS9aaNiVtAk6pkSxRTxFULT1KZkfLvDjKiXEhRkrmrKJ8AqBz7FYBKu",
  "key7": "aWGoXSNuBAJYNC8LfHfwbpZUd9G77TcsTiRnnBCGgRF6mV2rKpUim3NpNMgnuBrDxRw59k5VHeKUpKYjb4EVjWR",
  "key8": "4kVPhz3QRrzGDjKCpKPERUEQYUzXezfMNSFuf1vJkvxNxHSnZ9WdMVYZrEcNdq8qxhLWa8VsieWtE3upZadC2qXu",
  "key9": "nKsGm8F6XYQTpPy464DmDS1hSHJyCu3orvLQpaPxsKQekpCwVc7qzFEZM3vYKA1wQxoQegp4H9FLNZExfr2Zjk9",
  "key10": "3hhwnyqmCVD7a3urQACmDvUk2ogwcQ7uwzC47ih5uVDuuuFEkRtVJ8hJ2XVp5FJry9SxqUTkMFtx2UznLLjKHQk5",
  "key11": "58xVDBnNmH5dxLyMYfMLYWuDDGcPELmW2ZqXK33ndhgB6kEG6ipcPsWFLBD87Rwg4vaDTMJQNEGxkx6D9d9VWo3e",
  "key12": "2EmtJmkAJCkQsU1bc497LFWxGKbf4N9oG3YqaMs4VNNiH1kySQiXXej9VBqr7QipioNGkBwzUgu58WtAiymWp1tV",
  "key13": "4z1cS3JnXyjVEkL9j1ARG7GB7RXpSEssboRuLbWYKk4MQRVzwBzGrzBtU1w1DAkmeeXfBAxUdXJnUxEKEQarr4WT",
  "key14": "2zycGyNFUKs5zUE8W8TsqePyWCyeYd3oZreiULoRtAMnCPT9gagxjhxJMdmXbqZo9WNQiWqX3B7dpwLYH8oKJdSd",
  "key15": "8ogQh3ZKWt5EqjZBZndwAcLaqNnzMjbf3sgPoYpiqRLhytzvRVHT7FHneN7uVkkWa1eCN8EycYUn8k9R2UmckV2",
  "key16": "5dXdEBKf9FWzwqhpTY4i5BTs3Asdmap1WJ3mYv3X1wyFjXVvxXaJrhqYy8YKKJhHKg5ehGQFpRXi1tYSZjswRxrH",
  "key17": "3tTzLdq8HLGPt7d1MeGAQzFLstNSrTAQHoCvry5G2FziBNLPPSX2eCtq3JbFj9TE93ceqrD1DdKf6obENMxMZ1X5",
  "key18": "2LZkhaNcfuErppFthuNhVHP3Yr7Y1cViWpAtG5u9pT7m55KGjMpib4dQfYyzyc5p1RQBDFR6YvjgSBSBdqbxF5tz",
  "key19": "42Yv6PiJer3V3Kk5BAJDJkyqx8UD2SwfHaFEQFVDkK5Bf3uWGrDPo2o5XiDzsr5VPjxKWnZgxqQYm586VLPYif7Q",
  "key20": "5D1W6Cwgv2K2a5MwVg8XnYAN2puVdhY8HhaY8rxSkQoWS9Nt3nnbhzB5UK41voXEsNsjPZggxLEujBVmYMZGMfxx",
  "key21": "5T3ELV4SfmkNkuBuHqwRdPgDWFQ9b8E4fqf296ZQP3GMsikVFdHhob16FnmkiiztoYajdmYmKYKqzTjDsEtUooex",
  "key22": "mj9NqqiZbVkzLHcidDLSS5GnMpApGVZKH8C7sVGvk9mEmrkxRHzdwVHSooht8G6Y6jN5pNwkaM7fGAwX7H25MeV",
  "key23": "47qbtppGeEWorh8DnS5CMgPiuZgm77PzjoWFye7XxS3sNQAHhvgRRSihy44cGL6eqt7eLxVx2y6XqAKxnUYTCh5H",
  "key24": "4JXoxTJdTf6SykqKWbV1NvhjXYCX1KL5np3Wv46J1FzG2YuLVgrBEtnUat5bEEPcE66a9VHqpuogCpS6c42vsNG6",
  "key25": "2SXSLxyxxwin1WnvZ891YkaKUgV67JGHXtr2caGX4J2upmsptVDjdCirVMSnWkFNWsLUhmaH2PgDCBeCvCjNLUVv",
  "key26": "3BRaWetC9sKWVG96JT2PHBaWs13hgM6JwuTv4dFNKYDGTXVAJmYshYLaoHSWuJCwQSRiePqeerEe3U511mmhT7Z4",
  "key27": "46Nn7QHg6uGVh9QJYfCwcmqLBPhMUYC2V3c2beKMsLNLM8sU7DePkx9Qj22pNoGka7DNNfyXjuhmQ9zkbCZj2sCT",
  "key28": "4PQXtGVPxSczGT637wRYHydBwqW8U7oaV7Epn4rE6PBLpnYhaiHEa88sxKShtpuyz6fhU6BB9MZXEMhDpNqJ5Ymq",
  "key29": "2RtU3LZWbZ62cY2zknSsRs7GPQWjZSymtB9ic7jTRviJAr94dTC99xLNLYkdKb8ozUUTzAnX93KnuW3demjBw5k9",
  "key30": "2GqKzLDYwLGSp2cq6Rgh8KHSrUjPJdGwJU7N9H74bBSMoWJhp9pe2q7MrnXABbCJQDDdi9hhMijHCJAijPkWuwrA",
  "key31": "3gve26tfb7jqR3BnfBxPaoNJ7LSEDcj4fDPyh4Ukq1jBpZuLM7pjMVbVektx2o351wzMat88K7YhsVLn9xnzYkKP"
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
