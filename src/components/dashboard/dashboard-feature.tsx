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
    "27QsqXW5Jb1zsiVNxwhT1TeoxeiT7vcdeQ8zT2G36Ec1JRrUJ3P9rHiwKRywdUbwg7q4zVGYqADzMV8SbbfYAtMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqfjDhwWw25fMYpD5tY8HtuzXGpSN4XVf8CLSDuB5TCfXa9GmESqueuMEsxokhR5ydemjat3T5ddgMY84BhZCBC",
  "key1": "5WXeJVUvQQbwST8aqKBKNh53YKGDWQXQrgaUGSwxLJGCaFNmSHoUCv5FnFTd94b8nKCW5tPdtxf6wbmDcqEZZca2",
  "key2": "4hE8Tqj2PGzLk3pfzb4XXYguogKLAC4JhNyY2rBuv55TsJBWRJ8g6N3DggerTQtP4Cjmu4Enq4caT6pUe1bTMVZk",
  "key3": "3J4GWxdvw245ZRUVuQMNoWauE5erSpLziT4mqZ51Hjwn77vZo9XJ8zHDnU7ceMLrrWyk2dTyKPwUGLMeRZ7TKvdA",
  "key4": "32fLPhfcK1xxNtDcdJ1V576ceBTcgNuwDqEVXPjj6sfvTrXxodoAMWBENgnotNSQ1Ramrt1RHcFHRNkS3CAhGshX",
  "key5": "5CcVM7n9YNjnJSiwbrvKPwuVaLXbDWR4TmHfCtdBWNYxwNNPvh6rufppaj9kvNCgB9nwzpzqMHb1MAqTbRAqkds8",
  "key6": "5cNaipTkyEwJfqM2TbumGHDLqDvnM7rfEcAHimsBLRXJTbX9HPrp86NB2ctRFN2EQgoU34VQXxSmKanLD7md3tmw",
  "key7": "39uTh3YvKm41ncj4XkCNfc518Ruaq1Yup8nLsFzse5SznZWtT1St8F6rshEQ7dr1PeArQv7x27h5YGGRQDfKok8u",
  "key8": "26Eowdr7cMXxkaf9ZY33HFy12wwHbMzvRPUwxRABkXaGCXgj1dp2fEtEZvwvCejAmBxMN4vFmgaJgFGUXXvT2t1o",
  "key9": "3ynZAX2pZ5ZbkdDFSJm1cbBuA3XuM7oNYMVbQEZtA3aaCJsKMJb4vFBUQe9EbX9zqWSz7A4GCeGZR3fCmfZUUABu",
  "key10": "7jgbNQbFeTBb6osS64NCUVPiqxhfPykH8xKcuCa7FCva5Ww5hArSVPVCZsfidwkmAk4LyVnMdZTGArc2N8bz9rZ",
  "key11": "5YGXEZduWVFpuURxd2KpVDUVHJMqaJhzmZKwGUbgHyg11WXnGN6oJ1vUi1kDc13HNW1fZ6dNdKGMxxgcMUx22YdB",
  "key12": "2BGvzfFcmuUrqva1tg2KRJw8kEhC4noLemMJLun68a7rGwRNH6Tsb6VgWbz4L5qXSSy9rW7hR8eEznhNTAtQh64h",
  "key13": "5TDbGTyJGnRiCSqGQfWoYgzfczhBYjg5sRvgrrte7w7CN88FGtk4PWQG4bgujbpRst1K8XDJ4XUCSwvT5EyhPeJX",
  "key14": "3eXBMFmi7vpqvmomVPnCy6TDbwvJUjhnWNX8WSEhHVL7S4nuS537gQN5g4zL5KkwNLra5JnVFjKen2KxnC2tGGZX",
  "key15": "2aPyUJQVKZ1pGyoYZ8yUBeJ68oarV5xZVez9v1wVg2dr3Kzo5pxKrRDmfETWB9gN5Bd1M94Mmc5iXQQEE834YW5S",
  "key16": "djqQnPPFjx5RXyRWVaNvuiDCwiW6qZrJiA8mUQ6yWJJUZrNxBnT5jBhSnbgvrc7msqkzdXoD7uTTJUsRgXRymat",
  "key17": "fo6kCT1tUoRqB8VbwgewroejKYd9FLka8TfZ1htw6fB7tcsgkApffZXcmnDZEwT8Uf7f2Ury7yxGRiQYXXjTJCF",
  "key18": "dumMjHZ5AJjoBb9qdSCE8j7xSQeo327FEwJ26g3AsFmaE3dXKc8bs2mb72N4XzR5LFd5h1ZeQBpJH7ptQY3MYKQ",
  "key19": "VeJTeShDdH9tFwbEmetzGhDjbui5xu1taDqV7qXMQaYci4Vq9gfKegzCvRNkSHWRTb8KWX8BebDwWng5Wj4Ys3c",
  "key20": "4ffDEZ4kJdZh5p4nSWoMGHyfJrAUnLdkh7KphPfgeAkVgWGPDknth5qm48QkdyDF44SNpmRcbmeo364yc8qHpij1",
  "key21": "3AxacooBYNvKe1uqzKwdGDFDFhevhH1WPDeSyjGs55hWsbbvdNJJNYs5am6KCAXx3Xs5mPdxMFBWci6NcUu5GjxN",
  "key22": "4YxJBetxoCYdxtQv8CMhJ3VGAHhkFcEqDXQPjQDFt5HD3d7etVJ1bJdfnm4SfKkS1iBXum9fNvtrgTqpn7Uj664Z",
  "key23": "33bQw4istWyVArKgq4EHsXXbZeaLNSbgNUBKJJFKbNusTpT1YgZMBD7ef8hjbynYer45G21XdQHuUgWTHEvj1s49",
  "key24": "rbnDAhunot4zYWeDkiNhaK8sH9fF6EU7jKjaCiABqWvkjqiDVuXNdjD88HTEoW6y6u2JYXerpf4ykciahBEpTXP",
  "key25": "xbATYAM6hmt9SUHwsNV7HZgKNeuuxpYXjvBqSp7uGdzPMcEJP94hpASQWxr7QLEj9dYXDv1PnPpmFpPSGbnDaQc",
  "key26": "xuYewBLWjeTU7BDkmgYEcCpzEyPX9AKpqubrkaLWdsFQJ3EQnqx9HQp5p8MKsErUJPPBsFfzRyAJBfYcJ98KAZo",
  "key27": "5iFeNvfZanSeVBwykpS6Z9VYTMEmU4J279sTA4Js4tGnLPfQrEWnB9PtdHXyFhpttEFDjT4rJVwPboAhzYZjkE1A",
  "key28": "3bp5iCMgD8ZYjE3VNAFweSx1gud8kyb1gpXysoXpf3iVyjfo6iGztCNPQTvyGRxQtXuPhdYcU3ZB4q7dda5zHiZU",
  "key29": "3PHbfTUpcauKBUvNPWKtcr6TFRGL64S2EKtpSkwu3ZDcqsML1z7ab8P2FVm3FBvY5Qz96piaXPjEy5R19D14Zysz",
  "key30": "5UVix8SnCn2VaYguar58gK2P3NAeWHMEWdKPvnQEiZt6u7oGcDwgHciiw4q3EDioER9wtt8eCu6VEMDg9G6dtvzY",
  "key31": "5zjc3Tne1XdWvk4pw1ZzvAavaHsH4Jiba4ED9uEDFREkd2gqzyaHfd4u1hZ79Zg8JMT8Wbq8RNWJFB16d6DLHAiH",
  "key32": "4x6SeTDHvt23BxgbQxZ9gXBeLVrbcfcnKz8UZMPwfEpKTbhvEsu9vs31nY6wBvRAifbNvT4J4i5HbSKvP6g9TfyL",
  "key33": "4FNyDzRzV58BocrQVNbvB1RDYp6CZLicoBroRAofUfhi1mTrKNARsPE9ni5fEAB9NKBC7XQYJV6acZC7eDoXwQ55",
  "key34": "2pyZEG3q3xdvBKdAtTabxCgDpno6Z36QWfCBkNnYhro7HLvTYUQBLcaRKKRFRsfw6apq51PTfoFftr9vm1JH3ZQf",
  "key35": "5Jqn4pQZwU6Na4qHofU3LqojmJAtPmLk4repLPCXSdsjoaef2TE9tkgfbTpaRmsD8TbLPwUWR6NKH3oPZHJefo3j",
  "key36": "3RXjLsdvtnbQtrKyJEUsLtSUaXRAP3eNfQ4UGkVU7dHxdVAxv3dCJcJgUJLTAxEk3WZbagXKKKeLL7rAdNSftxkJ",
  "key37": "2emhj9RYswgRnnS3rBpJrEzBDV2YjdfbP7M2BqHqFdyRgvkWEMQCWBQ7pBQiQjJbUPbVhkZzQD26qYgyEz2ZFQ9u",
  "key38": "65iFwv9JrrR5nRYp3uYUsKtLMQPRiFVTuQi8mZU8rXEh7PNtLkxvcrwMxZreGefPvgLLztUVvFVjBM1BAKQgx5Po"
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
