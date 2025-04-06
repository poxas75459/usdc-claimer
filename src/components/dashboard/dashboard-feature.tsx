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
    "NXcdB1ebGhLKvjYmU3adPbTx46EV5kdyTFjiUqnmYQFBDNsX4kURwqB7GdVae69sdLYyT1846nKsjcaDzkSKe6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xmpfPpyY17UKDwi7Woc2UhkEjJGEcyAT5qHRbymrpkA82NJJzHeH47ieuE8CY3xC6cPBrfjQ5qnvY3XvvD8DuF",
  "key1": "41FLHcEJtgCSHR5c4xeQKeQSJyG93nGHJKArGcfYWwqZGUhicpjiEPFiahgLqqjp6cre5k3yeri4dGwn84bEhDYy",
  "key2": "3orzozjJ7xhRFs27wVxZKh5x1NZiWZaUjRhvcjzibM3VQTWmQGd3fLFXt6z8DFb1Sd5uKY79nwKZKJn2q8h6aZAB",
  "key3": "58HjKotYK6zLEbg8keUxWT2JNCFNdEUB3rmr97uBBJ4ZJEbyu6Ljbide5tncidS3dAW1HXYxvL34TEN7QS9RtsUH",
  "key4": "22zcXu6rriba6ojzt6SStny7b9bwj7upzTLdzh3JJfb3PHuy8ASW13XHwb1vYn424VQGShyJpPTAwRnxg4fNMZh3",
  "key5": "43zbXUNbtqKS7pHxz6q558CtRL6TSH4Q3a2C7rCpDuKwZEyc9n3wW5FW1M6YGNn5ey1g6tmsGZgpCFkABB3PtPJ7",
  "key6": "4UagBvLURivE5FtDU6xyVUbfYwQFWMzdTQU21dsT4KB2PX1Y44h7XrPaeNWBX5g8HfUwJ7oELgtfiTnCAdpt9mPu",
  "key7": "5msJsaGKSP6aZjY15pNrF8WnADjQsU6JTvUC2NUfJ4vaXU3V2h9HZtTyeC5XVpcJ25uJS16JA1zbzXe2zsNBBfvq",
  "key8": "2VKKuLq1ro59X7RTXFKQfCJcTwF3HZ8eAuyE2LDYLvzvjEgCEyEjf8wfhEgo3V14htkHNeBpGnRe9NnP8EKnA6bX",
  "key9": "2kdntWN9wr77XeBRCWihbswJHXYK1tfgEQGwhHGy2PqR4sfGAMz7FhpEsZpmtsLzVcfubvNxJNrpWpDzvCbeVFcF",
  "key10": "3ju45NKEwuaeZ3kYvsnUZG8DaeKSD3ERrMPvPxj3MDXgRj37YmaneuRK6L3fv5JAxPKx2xw8LqSi71GXb2DGPTfC",
  "key11": "zhVJG2E1nLKcLAm5DSqu9kiXjmF7QBbpFvzjVMt7hyqJEagUZXNE2Nwy2veWBcvdgswAZHG4awRxRC7g448NAgv",
  "key12": "58BZUPfR4PX8GzPv563Pb85MqDvreHGiCn71FU4AwRuFS95J7LNG8dCY54F6ZLrV29Ab8do2SGrWKq9n8j3FWkhD",
  "key13": "4tVgc2DuPibHyvAGniUohv8cK96jDsSEmcrtE9Zb8Saux7yaMEwZF8Ws5TKnJKr94DhiaszriXticLKz2KVY36bW",
  "key14": "tZ2cwHLr7eXf62uCfEe1Yv574BNELBuxCtnsktZtMmbR42jiA4LDEew34UK8L3BZF6nTRaQLvjvHPAdCxJE7SHc",
  "key15": "2ZEp97M1mHm2v5eJH8zq8aHsYeQYEYGc5qHXnYAEmbUhG7rsGYS5q7RtNvt9vQV43cnzsbcozZ9Tw3xMZ8rYUSok",
  "key16": "5GrFTRBHbnRSzFS9faqYACRACkbUhvBPTJhm3hjRc3fnFxuqVXxfiPMx1U4GWtSV5hzWLxvCkVyDKXREgm6Ci9CK",
  "key17": "5X2gmcUuCy3urKm3YUS1YAqTNdGDeA9ckCCqQJrszM3PMMsT5smrGhp6SDqy5MopiaWuA44icmcqLmmJcPtJJpbx",
  "key18": "55VPBUx9PzCd7KHnUQ5RLMwe5K92TcR1Kxwndr5ZMr8AgFSYKDC8Sxsyqie48PTSfWtNL2SRtpDpUns5Tpxh6Ro4",
  "key19": "4K2gFN3HUGdNSkZMDzMcfNv8vXaXwjoo5qHqfMFVw2WZkNiMXBW3xMuRbTwWd9H9odL26jmyk7AFXBpWVvkouXbW",
  "key20": "2MJGzKCssDBpgsGU4pEBUtj87HxLR2oPRMgAq2ecr9H8Gz4aJiEDJadRYYPkDDRQLrcBr3SVXx6GkgvuXw9gY2zi",
  "key21": "oMfBD5bxAtJr3wQ9tHfensZcry8eBjjXPiXpETwxn6KqB6aLy6Yp3RP9apUyUDk6qNnaNCvnukiTMX2MLTqcd74",
  "key22": "2pJ8QYTiHP9ze3VT3amkamyZdMekQLQYAG1ForKStThLygtTNdPAGaiaEiCAtiD8wYc4u6YETvrrSyQRtrv6EAgE",
  "key23": "3acLocvWYUVarGtFYu4bBTAPpHabPuaf6ecUhwn7WeMG3vmrPQGER7fEGcD4xgzswLwND8CtKS1vdAhBHwLECPoo",
  "key24": "mApNJGz6efavzKZkWJMvoZQVGKz6KAyoVVvQWEcMC4Ag5iTzvpaxV9eD6FjZSkJDGDtBz9TAgfxxFxuBD3oi2wH",
  "key25": "5HZgv1mJaWyYVx6A76rRG65UVmB71HegiQ8tJDuxLdqEgzqKSxjBmUecYkxuKq1CSA4dpxcAKy4dfzxW13rTXrir",
  "key26": "4uRwFwCTCUvH8XEncEnWXvLvf2AcRb1W4Jk8upYWbtoe1ChPDwXBPfQ9PxmirX3SPvpJ2Q2yJ6HiFwFAfEKCT4Zj",
  "key27": "22GENLx5MXN7zWo3mEg8USyCP6YKKe3V8AL4KuKevo8JGoLPURoMehkGBLdNnYZFqadd2FDJVWrb9zKcD4DQHw4q",
  "key28": "5DBX3iv4K3i2btA62PZsQFHjxpDEuMU2vLiCPFphh3tcgiQAqdhj2Nu4fdNdMio7MQ2qGuHVEAy97Mf7dvFLiWxm",
  "key29": "4LQmnKZUQjKwX6dDaK8Ri8iQTjahPbEpDAuzrtVL5wXyFeKp41md2jgMSsDY3zXARfuCmdtmfkriT2FnP8Jx5VmC",
  "key30": "5R4UAPj2TjHJjacEAbxY2z5UkzWDJCMF1wuD3qYigr16zKWVtphaV3Dow2XSoU5feHG6Y7v4j1gCpdsrPqSNkGsw",
  "key31": "3mY54gser6aiq6BGm5irTvYf76EXacY2RdEznaQReaptGchLV8FvdE5sR2Jmq5RLHCmGLaGsPNQ5Fi35qaxYKyWB",
  "key32": "kLSt9B723k8dWQtZyuMnwVDx8QJkXHxPb6dQp1v3pUgt964rqy9GZPQQnXVEu2Yb4YBGRV7UUMiDoiQ1BhbABQQ"
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
