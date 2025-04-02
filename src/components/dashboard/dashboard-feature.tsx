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
    "379zxv2ttwX36UAWBSoQXMTCxYszu3MsHbPeXDo1WF2k8xsxwU9vNYfxkPzPmLW37oai3z8Edj89cMtCeW5RDnut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk1eXJTMkNW9X9FQnYwdsFdeX8DkEmpkVpYbmoTt6hbD3VWAz8kSPNiT4FforBr2tGtyhBDkZDRXg53iVwLS9U1",
  "key1": "4cAF7ZvXPqwBHrBafkE21uzvxhF8sUQ2w724uumLVjWUR6Sc5evJz3zWAXr4TkMWVZhKbBosgaGzopZj5aHLvw7e",
  "key2": "2SUDXyKFXgw7AuZogp7J9474cJ2dspKgoFnPZSYXdjGMwNbwLRnF65b8QaQfiZighUnkFVyPenALCPTYoFXVqYj6",
  "key3": "2U2MGMqc8u1jdJUXSEqQsPLCFAqXAL1zWNqpRd2b7DZVnmnLMPviZ1s7qwzoXvKk1q57iHZCyW6y51ZuSYrFf42D",
  "key4": "4gUnz1ia26A5KvgnhvgBrvZPzGWQtVve2n4D39aZXxze8uu6jo1ne9eacPmwLuNZbeyfuhK12DnT241kEyNEmy1o",
  "key5": "3RJv9WamE3tVx7zdiWFGqornJprV7MDRkTFZpZxmNVDLNGh21wcypVhZRbLQbdUwE9Wi7dqibkewp6NLCzMVCZYb",
  "key6": "5P9urYNPPg9grzntn31uTDL7E8E1q4d7wFaK2uk76p42PMjNhCbXaiH1vwjNv1CeuTL34QG9TftsKddbfEe3QkqN",
  "key7": "GKPoXvAMdn5LK87DoG9qnsGvRfnvnpiXKcZQqjhWCCjfd35wUX8odQixD6RmjypkrfVuiakpKPfGPHCUMKAJr53",
  "key8": "PV9BpGKEAddQKbtJ4UhLbZtC9YeLefCi17gmBo7SJJUkvQLTtT6R8US2LMTCE3NKwNoRWcjFjdrLgenMKbZrFWn",
  "key9": "599nKDucz7LHJSqTyd4uoG71J8GHeFUm1446kyEFkwwTvRBR7Aze3d68r7GJjBZ7QPsUTUUkWmgt16Eu3zXW7TYt",
  "key10": "tkyht21cmzjfm8q6RbUsdu3Pdh8SpU6T64ULBt4dEpTgJ29Hpgue8sPR8NLz31jYybr7FaqrokGQX47A7vrsCao",
  "key11": "4YSrAThbBe5ciUeKcX1zHYSdHYAKMMPT9mohL7npdbQQ67yjZD1T8PspwEAjNUzsmgE3NQCyXcDhvYM613v63FJh",
  "key12": "3CTptHBsWeisHhwWLNDnbE9Lt24qEiZicpD6UyYAAw6S8kfK5UuWpYeiDaYZTJ1H6ArjvaVF5wmfdQmSiQS8naWP",
  "key13": "4KDoLQ9BQReRZtE2W6mSW5NVP2mGMGLx8QgUzMw1NH9QbQSZa7LHRVYwnAWs9W6RH9NjqDJankp9haU3VuAFvxV3",
  "key14": "3rymVa9LwnA7dYdXxDpKHjVBQ4xD5MWexNaPXcshgz5MpBdTJFmsX4CCk35XDr4jpBbYF1LPrUbgiJhCEWXyKNYe",
  "key15": "FU4Gphq8Ry2GKBSkpkbYVPCJoxn8SnmxKBCnzhoyDugx4WNzoKrpdUZCqtpqtbFqyjCPu1Y9z6t5FeqvJxkUQ43",
  "key16": "51AZXPs3YR1X3CXQ3NJ9SFWEL3TtvKM713rKS3fKEAWCeQFJyzkuTMbN5cUj58YYRNnzCMU95HeGcpHV5N6Zkey6",
  "key17": "27paB4BS2zaSFSur6RUVHo8MyXwiXscY2rmEkLVaRzEiRmfHaFMwysa4VAgcudoMuaV2qq9Z8RZ4HwGfsdRJqUsy",
  "key18": "oqEWPhba4rTkpmVAu92MhzP1MKeme6XZiWHYkBQVAuQxFgJXdJE7ZkFaZSoaKQiUwR9L7SehUgiVKjC5VEuz4LP",
  "key19": "2GqhKy52PSoixSxA8roYp2JeGYUmdB6f43rnn7vpdFqUbwbb6doFhAQtL6dFywep5LNfbiBcyDanhqF6L9JWJc9B",
  "key20": "4WC6MKureQh3ZeU6msats84t5FA5Shq9HmcaJmgfghKvEjDvZhw9shycqwgmwh6YP1fdiccLtzE24Cyy3yEmvnHP",
  "key21": "66pjGbmhobbgo3qqtGyjh7ZXPz7xGJmQpZnzii4N7z91xYEMB8nKzrtV28qZYmTkeKUqKmVLBpqDegjJDP1j341C",
  "key22": "HQbnQ1Q6ZpJVpeZqYJVZfzok9GmrSip7c6QnduuKUGcs5wMgP8rNryNMsd43jNKyCioXG6W9w4x2gYrb39aBUvt",
  "key23": "34YiAciPHCZbbFZVYBNpgbmVPNrEAHGGtG5g4UAqGt9hyLJEi7QJoicA1wv2SRPMG2dFFhaB3cdADHZsDPsPsHSe",
  "key24": "7Hqx5BQoe7EySL2YGVU17KhBwj7sSgegDNuTfEjWibdM75MBA8xmaatkDXUWiJE2yYMkPr5DHj5jnE43MJZLRfu",
  "key25": "3aob3Tpcuw6tbrKjLGSpJWAWera3HU3WcQ87KoC4XJKFHZCusUTZP9xj7dvQioNnd14H8Uwb9ViTSFYKf1epgbEg",
  "key26": "4hVZUGE3wJUGyUuUcugbTH38knYQR5s4pPRPJXps3TdBmKzNEG8SKmTK1az5zatabt84cvy3YuQPSDSjGj6RXRg2",
  "key27": "Mc8Z8B2AqoBQ9d4JLrEELjzqzMWFuS35j3ixhwNFmUe7TJPHki9AoxwP2yBuqv4QJMLLj1TVXHo4B2S3Xtz69dw",
  "key28": "eE6X4SrvJzEj4yGVK56x1T1mG8WXhF9t6vcEFi1J1KPYTRZLLFg4uowMUK8jDB8SHovbqwgnnt2EwUrSF2ysHmW",
  "key29": "5hosRdV6MebkcvCDPcwL7FQumgA1snvzTRvn6fGydnfbcZrkeMNnWyZvftGZVPNapQCgqkvWaV9RzHFBvrdimCEd",
  "key30": "nZNCzXPC6mSricumycxNjCEyrp1YnA1ZMR2tQGV98LvmXq46jx3ZBf7cvok6aJ3hQ97ziUs3dzTikVpNgR1oujP",
  "key31": "38JSMgPZy5RzZFcfQigmWahNYBrYGHLzwKiAa93JQLPKnZ6LKQHzWu2QtBX9gxSasbwvgPdN2X8AfEVscHqEk5vs",
  "key32": "4yTdNqdcZJEkUzoYJjp354RVnWYDdvmwJQyDcE5WWQ4JDp5VAz9X6Y191nGerdJN9EF8FzqTBKwKdZxwbbetEwg2",
  "key33": "4JSoA3DLUsErVo55J2JVrYuvpcKJbVhDYRB7v9SAbFzqRX4RCcQczTcaQD7FJJeNFgZPt22zKAbGf2yJJKDj6SCP",
  "key34": "5Xxuahgsw4eBF5X6WTgQWzgBbTBv82NCCBfNKr59z5t7eUK9mkyx8sK2Gy7AXWGZjh6N9akxRwWMwns3TnC1VNW5"
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
