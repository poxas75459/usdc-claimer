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
    "5fGuZ89jeokWCbas3UCvMctFhshVmyStu7XiRMyfseyfqUFDkDe5LdRQTjCNmdvWxK3LnUMX3W81Kx7QrgkXU5hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9vZ65E6BcKzijJMt6fAAW1srFMQ9aF5cQqQdtuetszezo6RCSJbw8U9WjCZN5LaVZHJfRGSneTjR1wTYNtJmvQ",
  "key1": "5iJ2LJTvL4haNbcMWooDHJZ94Z6Ft5BHBrsN78xxyj1ZP5AKngpYn1wQBcMMJqNcSk14fitysR95MxwU7YxGMLHK",
  "key2": "2yVHbsuaYL4NiGcpxQE1wDwXXDs8KTfpFfTBsm8E52jFyqUwspFZHenkdBocvvGDx2r6e1KMY6HnV5BvNWQmq5Lj",
  "key3": "5p4qdBpqAXyq26Dzy8t3BNSK83A7b3MviaphgYYnTPaf5nnc9LZ4oppyZF2VXRHzBfBrzF9Ennb5dMM58hQhhMey",
  "key4": "2mFFLviRuqRHbSEe6fEJ3dkQJb8nBLXpXZLc5DCzUQfb4abfGbHmTbGVNLLJEsy1XWZjmDLyd9ehuFPn12Gbmxks",
  "key5": "ZQ61Ufj6fgS5cBnKQBgPmvbVCe7mnu9uQuAAHH91WR6c7CEDhBPPVUhfejihAqUNezEvPL32a1Mf3GWYHCi7Xxp",
  "key6": "3QVATaiycL7NoWv8bQTz8A7PBwgCM9BrgMjm5UbteFLJdCL6BDufJ7PbMBqsq4CR1QXjyFRH148UkAzwQookAFfU",
  "key7": "59uweNbmxNc3pcD4jQzmuCn6h4ALPurStJQonzhV4Ak5xFoNaxCbQBsGRvsftB6dBajFRB9eGQRLNa2aLJrMhChU",
  "key8": "3VQEe9rdNxKWFFHbNv4K1fB6vXxnpuRBoTWVYJcLjsZQunSvpErFJpyktzf7YxSFKjamFFaESYeGtK7dYd5NyEC4",
  "key9": "4aHyGrSpCqEcxEREHjbPXu6YH9PPC3c6Yc3c9sv8EoURyswrvd64hcuWokJbDjzCDuzju6CnDLfHBtTDpsD2bmk2",
  "key10": "ML98AdFSnkHM6Yhjzy7AtR7c3kcHgg8h6uFuZzockHavZLAyBzvoDX63NQPaqWxc1RBrPG8Wm1DkTMpB6jcToEM",
  "key11": "58zP2wmqtCV4WWFUgMqhFw7teyRdY5nMYqS8P1h9ePUiTAyZYBuTYX8wGZJumNBMVKY15zBbiAqhNZzETxs6foWs",
  "key12": "i2ryV9tvGpvpaGMeqD1rhTyifYQooRTajdR4CeG1QVjscH5zd8MK6SNjK3pmyoRF7g6fpEgu8ofcnjTVhAN1Xyg",
  "key13": "4DE4vg76etASgeQVyJcWBhsWcKsSUx6LjqDjQ1fdHw5f5d9EbBG25vSfAqNaH4MT9bRGYYgqm3dixQADq4FjD5zC",
  "key14": "3kB9xs2W4HSqLrcpLNn6x5pqNojAgiQTj8XrJgvGBWxSTa5PJwG1gb4ZEsYhxGs4k2BTEEnEa6F8mCDN1yhg8udC",
  "key15": "3a93qeoMaPdpj6kAocPwfscCy8ocZo8BXCdYYwjYZWrc8M71ingozYBs5BruZsycN5bCJfwhR72fPttvfyBLCV85",
  "key16": "452yyR5os1NxXAqaNDK6FnQjrNipCWimvWYRNk7sP56QXw4v3c7e6Ek6uYnofVtVMw6ovwLg7nSbWHoQBc3GfSbk",
  "key17": "3VMXfJfyE9y6onHMFASTCp4mb4jzKzhAiXWZAbrTPNyNsXmvgYcUZrgdM4TRvKLvRCJ7fKQJMNYtQ2hbnQyLoeSA",
  "key18": "2Zya7d5rfrAvnsWeZFi3zbdvE8dRRrHvGkpSYH5RK7nL3BBvkL9TSUZBSFaVGu6gFx4SZ3QX2nbPEM1nT2FKyxJE",
  "key19": "5q2icCWBAKgWEfRVKuHctHsMbNnBy3H86Zpwe6CffgBE4detZ3qBNuGptgjMKHHqUtCuf6z1pbA5dSiEUc9oJ2WE",
  "key20": "2ERJQXP2meomEHX7XbK1UuGYk9e1vsJ3zQPACAJrBp1SMcSCRYsaChjUDJxTYmSt3q4PM74SJNJZF2bGh1BRQmTi",
  "key21": "34gBsYp5ApxoVHhZgki4K1E8KNtpESSmjEoFCXUvWeykEa3cunWpdNioFoeRXzuKXcU8Whjw45L1WYFFvBQ2Vmnj",
  "key22": "34pydEsPNE6qRV3w5S4XzPJcG6FWGqC7zojnnYQoo6DQZTUuKLZq4uzbQJjXeXXEhaDZUmHaXmBBF9vdxepwRzHT",
  "key23": "ZZye2ZkFFr774yrT2jrnEGWqGJZmgaUAd9cLZwHDmKJgNdBi76y2a1btsKkTia6f7vrkzYquqQjBPnkqPGAfEwq",
  "key24": "B7rUPwP18Dtz5cCxcKLvKJ3jpUP9JLJ8iHJpinKvkBeb6z2MhLdoakXzbfGpBG8fPhQ61HtaLQBNYSW6dnCChbi",
  "key25": "4kvwSd7Yh5AnUhfdnesVk1fLZE7nYcPURuYbZZhqSaQws6HFcrF7u59FKV62ZKhgxEEcqkKrAE8oTbprLRyQxtE4",
  "key26": "5nwLyP8jPpjPi3V3L2E6pJ3AmpP3wSTq7HMk6TwsNsYhMDWVXVAHBsWwRxLsak1pQRYePqtkhnKUAYSTwxp1ew1q",
  "key27": "5ks6f693MRsAVPtZgWafoadKfmrgEGchjgF4nUe1hh8EtEiNZu5VPnFE2gCkSTfi2kQJpKaaEz6LPnoSCyDk9AS1",
  "key28": "5C3Rx9w23297hMJnj7MNrqpTXjRjqqMPbYzg8ZebW5nd1axUTVJi44VXj8rAjmPGbC9AxQjCe7HYbnRaKE22GM7L",
  "key29": "2ZnFsfuCX9QUJiuubpNt86nnbXUkSma29TwMXUaq5QxiVFVb7YVdHycc9iPVztKsBD2FNRnMbKMizprzH946JYHB",
  "key30": "4gZY2NJLGhVvGWVPc78YtH64MGbFRHtFdwA5aaWRUUhwqdNereQE6oHBXZUV6JZrwwChrTL9UxaRbKECKb8Sh9sD",
  "key31": "3aPMD8hhiXpzdHAnXqsBN6izFCiiq2um6ySJoYLTNaqmETdBRdzXY2hAs9e3Qe6ckcXDfUyHDdbTBE7Wv87vNkaL",
  "key32": "2vCSkseaa8kZS7FmG98wZQTBbNURRwCeTTFGjwa6DvTswcwm2zSt2s3qTsN62j1GoEeLxeMD64orpHnvNAvHAK8i",
  "key33": "z7pttT34wRnDffaozT7Kn4wM5KdaxA9YFcvmhoExyHsDGhtYAmk7RnqjfHME7SRmh9rnD8CQLTF4YsJCumbvBNq",
  "key34": "KHQ4fBkNMR543PstqSkNjpju3jBbzriPWZ3FjZ1VTsTFvWfovhLCF44s1V1y8d7YvF5fUhvWytcwHLMf2J1DjM3",
  "key35": "3edEaeQWt27EbWwfykKBWjjH4w3kwyn9hZBrkkhx5dGfjkDXRMsHiu6EoThJPTvhfnTbZnduBjXjfd6rhwLZqrUk",
  "key36": "4KcC8yh4DcNaC5AUc78mQ1FRGt7Hcd4JFwBW4AcpdwtY8mXuT786yMVqbPxNUTzu3GKvPbyjm7yrRw9pJL2uaMoU",
  "key37": "5LShNfkHrYxkxbQ3se5KxHWQX1WdKFh15zhNLLrdc8YonWF3vonLduc8QgbE8gaAYTRAeW3LxdJK8WCfjBQb94TV",
  "key38": "3zBh8JVbY1qWtEYRXekZBYLvjtzN7C8dUp6nr1y3e5N97kxscnAJ8WpkDvn7QZ5NAUpFG4dXh2RjiCwoBj5878er",
  "key39": "cRPJStoe4Jn5qztA4K8NrWemeYqgjtDZFxbmHgoASNsDZCCgJ2D8nmzwCHyGUmHiW129FLUjiyZpCD7AtzYse9T",
  "key40": "4J94zyoqPu2wqqQJyWEQPe2xGMkeqEQYsb1LYYZNZtzoDzAPgg6HBYjV7XU5qhF7aNvsKWvCRDD4RTZUrBdumFvF"
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
