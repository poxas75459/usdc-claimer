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
    "55mtRF6V2urjoKv2pCLxHxTiquYXWimSbNC5UVTwZ9KLqnd3Z9ZSGPRR84jt1gPT7dpG5UQUDTtj2nUCeCXsESjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aB8FgXup2etJsPWsr1An5kkRB3tE3WUpyMq1exwg4TqGA2H5mq9MUJjvugqK3tuHJFAaU1qxkyXG5WHneDE26DU",
  "key1": "4MvDU5fooKG9JuFgEuoRZZcmabXEiHtk7cTZRmDtZD5etsa7CMqeDaY1TLN8CHQe2vkY9B99U4ck6uACU51rnk95",
  "key2": "2eswiKnRSFU7R1ssQ2cKG7PwKrnHKsJUNv7bKkcq3nKQ3KGWxdLUnLoa1GLdTQsjkcCFZRtXKqanXRLUKivihhdx",
  "key3": "34ndpJRGnEayHx6XTMUL3PZptA3HB14oQQJaCfYuzYMrHP93euJRcBCXsHuMXPDdJJNdNjk1gtWfG8CyUZoux8d",
  "key4": "3MGWg5cDVjqx7MLwzXpPSDc5XSMyBNfmQKs7W4yJJeEHRZQAgN3CcLM8g1gSmVSVbiPaynJTgNdQkq9fmXUakUvX",
  "key5": "aJtiWuAZRxKuH4t1EhxU9nz64BdpoGWrGy8nHTrFA6vD4VYHkUAB9TgvLPk49sViNnMvFiJuSnJuSYvFV1UrKQf",
  "key6": "2VXi3aEvkTRfU6VbJii32MqJiHVbFxv2QvH9o6Un6bvcCgUQaxdLQfBUHtmSqZAdiCS2dYr4JDyfsaAh2vwTTwMA",
  "key7": "2j55NHs7SG87yD2nZ3maaJUXDnzhQc2wFbzQjtwQsAzNdaEdLnCw9EBVNDquzLV4MtDDVs9AJYbJB745dg5UyaZR",
  "key8": "5E4Yh4RMPHhMifsokW1e44dCkfbsRNSGKkm9TFgbXTQJ6F1rTzYTCkwdgSDbPR4EUoqFyMU6ZrVQmFS2uXoUWPEH",
  "key9": "3sEam4SP2BU7eoLJt3uwuhDm5wq2as2eZhEasK7tHg9ZYnYXCJTC8JRG7w6G924haRycrrkHmDpYhA41NedvGB9o",
  "key10": "PYEgpPWtQzDuTXMPtbxbJBeGBx3y2SgJfYqqvtEnzcNHuM45jmktnWKNtesFiS6HQBjzKrPxBGnn4EoQcUJFmxC",
  "key11": "4LDstgBHSw3uqWYxnZyVCUcbnqjZN4mRgQYerqhau7cSsUQbdXL6W1JyPQtK3okRkP7zoSZhCN4ZpTVkzW2TEp3v",
  "key12": "43NXjNipJUjejutA1pewYtNVc4dtDqEBe6JgWw2wN6fmxna9sjUcVgCkqNDYUAbjxCbLLpvBQ1b7T35Vsi2LHnQi",
  "key13": "2fUWDoQJYb3r21JqWduvPvuQpyBLR5sqRKQs85pRPFYAJX9QWedYJq11nxiWtLM5HGhnPa9z8PCYMsiGksvzF2Fe",
  "key14": "4rDKY5YDxrxRPN97v2dodzaa4t7Httjo42xbeXK8945GZXsJvQLtBFsLKjCZH4hNXvKJzj8pSSffg2goxr8zunAn",
  "key15": "4yxSmJN3niLMj7WeyRtfkzmopuWqe9YCek9c1PHFJn9hKDNdsLndhxQSSjJT8f62V9kWb1YAVsoubeN9GANwcNfd",
  "key16": "3NwuFvnm1YVrqJyBPmikFdZMEGHb6JVq36eUn12Gft1XDRBNGi3nTkG4e5ae8K5vMVXZMWGA28bFccJEWs4oMZfW",
  "key17": "GP2U3sEmQvfhb19njKkQ2oFcNPBTRdjiM6bCRxQRUTsdRZe8e5p6TUadYkHnngBVnGtvkzePNRG7Mgc8aKQWiyv",
  "key18": "3YJN7orL51e8ApoYCSrwY4bDLAYiji4qEYckL8zdK6btstF9mMpJCKjNTGhMXEJ3MANwTdRmJ8JvR7nB4AmwxXi",
  "key19": "roXyfMZCsCp5oUoGN8JFkkKcHZCdn2EAHBFyxYxx9KJcXwN9Py6WAinwyzLEotA9uM2cFWVWKByZRmanYCXaPHz",
  "key20": "2t6UVUaUaXzYWSyec6RX8wY78g1rERXBxDskL9VynbazGU7oBmG8E3wwphWWuhMhwo8e5BqLw6EzV5QTzw6bU4ZS",
  "key21": "3HkkVP9Fjy1BkmEknc1RUf9zqvYdnasEMfS5bUZecSqiD8bVdTH8fe5P5MtFSEQVJDghCrCYgFmrdTCmXz74y1fk",
  "key22": "5MAZ1oBVhnX523ektTnbHSMfdRcFo6jCiAR8Mpaag5sbb2EEZt3NBqHZYp3VjdvbtvbV84czmuA5EV9eNWZd6YEn",
  "key23": "3iMHQYFJqRaQHU9sRuYg3rk7FyszvUsAAso8WJ1NSn3aGbB6DGrVCWimeKhu9mXGwZfDwD8REwh39bjWnzRu8MT8",
  "key24": "5132J8uRVEfL6g2BJbKBzTcpy1vJXghhwohHarYokxDvUgVefmKKYX2mHTHLZHojRJUTTCYFP5uALRZFVw9yGjBU",
  "key25": "5kDNTDCTnSir7uMTKjmNsyd9LSnaTNkavXfhnzUJu6Rm9qzCwnoHPhnV3PvwPaREFEEDs2RF1x4vkn4cqUshd3Vu",
  "key26": "gFPxyikhXgDcBQzVfyq57Fme3BZmUCoPvSEH2tt4ibeyc4p4KFXFwFMMmURCcBrZ3uBAftixfmiFpkHambvcyuT",
  "key27": "3Ke1bf2tNvsfzT3JCyCYWyAboJem6tez4NjzTWJKVsXkWLcAefSUp44y1fyAKn29hK8QtRpNDEQAudUfgfu6uJcL",
  "key28": "iKJ74J9uFgMTa5naduTsnjkDR4FAgHgfT5WRRJ5ZnNbKChuPFc2RQVVs4DpdkXDhDRMNHMyNDkFeWpQ8xnAhkzo",
  "key29": "3WUuMU62DNrhMjEsSoiTgd3qCZhcXSjY3DAc2esoLJBbLjjjJmvKFt9CHckgvLyDBzoLxWbeWpsbeac7Rtgoxk2y",
  "key30": "jettUcmxCMn5Uxb5mXyC2BARQgCKWycxPu97y6HcH4gxe7TsJZ4nPVh2xSuANwR8dFskfDvMqT8R5BWpykZoftR",
  "key31": "4R3Qm4Zdv6Sm95hZG51vGZrpYp9GhrZGxwYCx4uhbotkDG39mxwCuNSYAELjNusHtTgj4FeSqo7SY5STouqtguup",
  "key32": "3pnnHEUVymhDzun2BeG5JSYgXBzM8Uq8MeDvQE1Cfwjo96NUGeQYrZDFKwPU242r2dekscVu1zoD2KCvmTWqMJw3",
  "key33": "5YKrrdgMzHC5oRqGB8A4WSddFnsTZxigZjoAaajHhYvKt3PCb5XGh3Fv5HMhBvtWkpqy7WenbGGUbRivWAdE319e",
  "key34": "c6ivjZmYZCJvbkX8NxSkC4DYth4iVCkPmTus1K3XvQHQnQRuv3jb4NM748ex4AiRmzwjvrRpxCRmvQQ47qAuVfA"
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
