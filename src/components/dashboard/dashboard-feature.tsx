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
    "2KA4FcfGNWBnVdSaKJ6QLxDmC8kz9yJLhn7qFFDijGpRmNiWfVgFA4bWChWaX3WCkevUiHUzBtrcZWnKdXL3gFgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ysJmqQ78wpqeuP6fqEBckj7iPM9grxYmYo4HFCJKcqpVLZmgrATbd2EJv5LrNxA8Sv6Qpv4D5Ah8uzLoXzim3Ym",
  "key1": "5bTAfotpMnuqfLPAGiyWajUHfjDLLXhPTcXaGQV1rFZrK5K3bL449nRVNqJMLoZLVJGkGTYh1c9bPi6ty6DiALWG",
  "key2": "4Mk2ThXd6Q5d8QDm7zZQgorC9UB2nWQ933xiEzLrhQFY86kmmvsGvHW5SYr4zprdnmCnhXCkWDjHeGBPPBJ1s2bS",
  "key3": "v9TJRjxH93sy2ZSJePwSBhLAfgXf484kbDQSAAbv6AvBUK1C3dYRsNtaX3QE1CtMkxqUEFv4cgjfyGhVdTzuPgE",
  "key4": "5wS57EoBz1C1sxr1p9y3e3GyLNDfvpJVz6W417nBAJNfjtmnnVPnvP3gv2p3nk7AUyDv6wxtXtN3EcBLDmGJ98nH",
  "key5": "3zTh5fXV4L6roMfagsZ98QxdNy4HFyuQLMj6V8n163cnjDEBDCSRdWeGHPm5KTANAqNdtybAdMjocc4ERQqYA6di",
  "key6": "36HnSpEPEV5bLrGvGWGxs8rfkqQiPv45UDuDvqwp8S1Gae7NXYZaVj7mPa2bQUxDy2MakejyxQVdF7qMgBmLtyCK",
  "key7": "4SwuNnexkdRGJLahgEsPwHMC9H7Hsv2ntTfsoTYC1DQvaV1uahBRGfj5FjM9jyFF9eQXbfx2QxWRK5AuoiqaoDKN",
  "key8": "3JVZmZtJxapX8qHNzcuwjBag6Y5pbzNNKNjTxRpAvRUxxHj4oK6pBJtpvkZRdxVsaaNupLiqvP68aB4r9nhSshbg",
  "key9": "1jNvm3w8WBimziktBXw8DiqySq7zrYWGanJsoMQsA1P9iG1MyV8Xi5FtQtdvCh2NdkyR2urEKZdRJq9MVTggiHH",
  "key10": "C4CftKrYZdi8zNobXcBq9asZMPkSUknUyMTzVpVYZrAZWfhhXoWfwTtTemUPzKxcbWnZDNUnunhwtQf9BkWiR6g",
  "key11": "2bjga6Q3LuyeECJXsMeLWQHvXnZkB37MmbXtGzVFSq1L6nFrXZPJPVDHiUV98KsM99iUx7DV7xBxM48qggfeWwKt",
  "key12": "211Q7eY5ozexfG74WErohYCNjh1gUHCsEz3nQRXj6vc5TwqotgmhanfFbQUVHQsf34sc4DHdFg9nLnQxJPRLQLDc",
  "key13": "4u3jqAMd65jVkqExvsxFKPWPVEkJuTKWeRzofVppK92k11mEcWXdBs5CNVCtdJC5j1hZEuXnyZzY6BcGomuCFjJn",
  "key14": "5H8wRRvRoHerc8SiUbnQEQGcUrbi9XajouM7mk6qRGZNEakSC7YtxfrpDyaMzqkKM6WYr9mDYvdgzAW62hyyPoGw",
  "key15": "5uvmJmBb86kfTzx17HFzd8fgyHJDUe56PUSPVt4F7adYb82q234n8HFC24D4TLRcWfMVXVMdjYGqTXA8YcQENk2",
  "key16": "5hEMfgKMcbBNBHDLXAMvNarsU6LFS5nVNduV261rU7RyoR3UMzbWA4X67GdRAYogcK4Fn1r5QvZHzhir4GqUKfME",
  "key17": "3ydhMrGPi8SPVsV5ufsZPqWW1P211s2M3vZrYBrh1bgQU294bDYx5vqWp9FemBWE2nyD9dkNTvvBjWn2TMzjRgeq",
  "key18": "5u1Ztu5rkUjgseZi1rrgHm6KJufNJBJxKotvTPRDBCmnwrjfGJyX9QgabJHvVfmWXC9zTXnd7cfmqeVci9hHgCdw",
  "key19": "2AqkpSWtbQP6vGKZ5a3VoVtqDRgknxGrtiACrUWfGj2AD4dU2MfR8DWbzgMpAgABdfbBES6onULQNK8J5HsHac1m",
  "key20": "ksCJxTYGPLF9mospu5coaqmu1dzuTDTBcJ45X76fEW68Ay2XzpQDqqatNZBHGZoCs8ooEECR7Xmx42DqYHM6KGg",
  "key21": "3V4a7rE4VDoaL1mkSyziWFrmc5dq348wzRvQk8wQH9KWxmLYeXc4hS6CpwD5RShRoiQ52LUo6fxgw37svCfGdfcn",
  "key22": "2AgyQUXRjnzRnZtbLMVnCZyuKonCKuGs3aVLLibUqfBwNmBVPjHEE3kN3oi8YywLeQ3mJAWVqy9tsPSeLPEjYwcj",
  "key23": "2cQ74nchxmJaKrsVpENAfZ5arRLCuVUtfyAZmQjBK93Pa594TVfoLSQuHz68JMUGC7TXFFwRJdKDsPtyeLSM3jp6",
  "key24": "41pkk9TE34Fcz1ha2TRanUTAckAwdc3oDiRvFfTZsBy4PFaRbAVgwS3JWHySSR3AB5rTYvwTSU1WHaxaMYgv31aj",
  "key25": "62XvEPApPc1aAKVJ2ZG53DRJcpqcksfJ9Yj3i8jkzNAJs1iM5dXugKj7W6KxYua6xDfEdgf1kqLChKQLCJ2pBeq5",
  "key26": "4PdjRe4pBqeAYBjEe8WRLMe32pgkW7UUwwiH77ywRjAYJz2TLZRzwKWGrEuAVX7N8CuooYiuwU5PCt6Cy3xztcbi",
  "key27": "2iFsNiH3ibMqrp3hvXwKwLKfbd44y1w9tNpDH8SEGToQ24BC5xmCFYq5t2V6NfFQDS6SxDvmfQt8ids73qYhnZJx"
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
