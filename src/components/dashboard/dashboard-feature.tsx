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
    "2Mgn7MmZ2GsiveDw2agjngiRt6Um4tJyXWFL1GG7FV6K8jgPQWUmBNv4oYfqauGfx1Ha1buEvmFZbq4Uj84vBLUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eYPcUobrFgGBVQkbYNBtpMHttqMCHDuZ7awYn2cERTW9YTuXrwJxNxKXygbY5j2mm4rTp4fcatbrkvzJUoCVBKV",
  "key1": "47eqXwxvjkZSgpiBFzk6Fjo83Ymvam9ZHiiQoTtuLm6Nuz4hz9AMJkaa1zstNWCmjN6KV7WkWNaP17674D9VhEuu",
  "key2": "5kSampa4NwXhrPjddeSKF8bxy9pXGeLwiQzLt9aeUD5ZwiDZviU59J2CZ6hCpDo2khSWY5FBdRXMDzyYDu2cpx9x",
  "key3": "LjPYQkNw8W3uXzukxS5bhxNFnossNLYxHJBZH5sF8ZMBKF5JRrU3PUSu9M9LgizDSFB3PC3emJkGnrmKmkvxN9V",
  "key4": "zj4CZy2Jnh3Q7QuUi8rqoSw3jRicn5WvkURFPixn7LDHb6k8iH1w9xkgkYaxhE2DcMhE9YvbytJK9yrhzGAN84R",
  "key5": "52B5PnPerDQB4mp2opHWPPREi38reWWBNkfYxLwkPLQcTZpSoU1FaZRSBwnDZXtTzccezaXQZUSLbZV2wmwHCYPx",
  "key6": "33iqGqHfuG3k6si9dhraaqthNch4tHArJwLY6WZE6cP9Bgk6vk67Cwhu2iXUM3P5pJ5fZN3ekzmmGso6pnjb1tev",
  "key7": "3FsGMx1s3HmWrYZfKh1Wo2YqyZaoKpLDSwYCwR2bxxJUuLhmdbTM9NkG2wssAkyb8euRUXWdi139YTVtUJDkFJGV",
  "key8": "5Kzm9uSdG4ugkAhqGnSfB53v28GnwWu8wXV5f4rffFu7woWncuUD9LXGYLjmvy14W21xGcdfDux7eJLTYjhxpmc9",
  "key9": "336xXyYj2pb928WHpmX2QdXSmGri88BqGeecgfn158SbqxQ6y86Y3p6XoB1nq6zkNqtMP1mLRt8eDanKkKfrQRth",
  "key10": "2B7KpphDHJnr92RjwZqNe9RMaXnLeVEmuWQNkGeoC7x5aWvbiYbqnWr1kjAVRpNgjooKC3gUB3dDz199BpzQCGeV",
  "key11": "3AvQZfDFgikisyMcWw8yAhAEsrjkPCBB6naT6j4F9xmio4Ht2oErtv845JUB7CYHPKEcXk9a9N6EZy3rjSnx1Nih",
  "key12": "327DheRJmiPH99bQxG84WjkyxSVo7mwq5B9LpA8kxiwy9UjSU6hbWhDLdQtG4TjFGAaJVwQtBH33usEw8WjqwZfN",
  "key13": "26yrbVCvSEjhQ1ECrEfhzjzEhYyMdkE3pamejs9dTMN6VLmrcyqjjdBM7d1L3Xcm4yx5obtteKM7yM8shdkCsKtJ",
  "key14": "3ujCBjLyP6x4k2xQ4JraJKMCf7uH9vVKgyEJngFNEWA5WfY18fqEvK1VzAg2wS49QJjJFHgmVn1FZHBBnzWcuMLW",
  "key15": "5tyRGTnK9VZs9QNEWveL7P4W1jR8rWb1B4BP9wUsMVaCHmvnfFs2PWvdtPJc6AcPaT33cdzmgEbn7wKFkb4Cq9e",
  "key16": "5jGZFGB6zp4hLNK8N3AcvGXF8v29xAmHpC6p4XzRpBimrTyjRANfRz9KHbq7hYKxcKjXPxfvJ3nQYvp9ZxcGfoFm",
  "key17": "5xvSDrgEYj7tPHQ66UPZJ7PgHHZChVNqj5BteLWK7dSGUW6mQnjBpzqopfQD7WzSTAVpNjN73R2BgtiRLRwsGuzs",
  "key18": "5jJk64dk8yyAxfMdS9ZbFwPkHC8sTMeG95SUDevjTai2NQ34XQwDYXrLfoCVXUh8cnN1n1F2u1vzEq3CTofi2FCh",
  "key19": "4cMEf1KouvBekWZM6XYyxtAttSgwF1bdbQZG9aU2SZgjWevp3E6bVczn8fvJsJCbCGB9YhcLrsWgMVj6y2kN65Zu",
  "key20": "2JPiifegrcxHtynQmwDcmp4z7neEXVuDCpurR8rrxbGWNH7uYBoNzCdCWWE7ribe4g9TRftKUF2JUeHrGuHTy9te",
  "key21": "2Q9yFVodD3eqGWrmCL1MjBz44d27iYXGAKuRpckwc7LzvDrpNCLRMoAkp1qTWiiXveM9SYm4HWAnwk21cJCTGn5d",
  "key22": "AifzA9z4paWM6PhvgshD8rsqhmtBSqZLkdFb6rKdHsCZvotmUcq3audRdMbp644jGSKPSUiijhj5usPtUgjEwod",
  "key23": "5VhAXejFJynjhen5kvWrog3boG7b8wZ8p4gsiqMEKn9iPezizsgNGyPUsTJPf8f2sANP4bktmYV1gPHKZVS4Q6KP",
  "key24": "2KMmCXWteUD4Wkus5CMNsTZrE7NyGRSq2oT71NZj1B9Y3QXkyYBYsjLMrkSCvPjEQgSf8ky7e8ACHdP1P35KT1xq",
  "key25": "4qMQRtEPZHv6uUPzfgMy7rY4AsrHFiYkiCcGJjXGmzBLUatSQ5ycTEjRoeVZmLhShC7CRE8bxaxvwdADVLu6ziVH"
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
