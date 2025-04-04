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
    "5MfeSiTDS2k9e7mwXKzNUZ13kaAm4gPgLcWF1fhrJg3ZSh6bTa7NFRQbgi1gGQQJp9Gi9c7mYcjtAw91QnUHtybt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XH6JLGdVC79a6Kj6sLyqJuvb91y8aM9m6GVSaRWh1vFCUMy7UwPXDkffqHyQV9n6sC32Z29vpqaQPrUhurkbPPz",
  "key1": "5Wb7sQbjUN1CF57Mxy44JQLzJSwmvP84c8EUebvR47Z28itk9noZNiTx66T3tw1iGgpsMh57GqkBhe4gsTEbh41d",
  "key2": "HvJdm65jpqF93yHaYPmvRe3aPH3sRwmkdGAUH9pLAaEdB26W35JCoDz9pnAKq1UMoM25AzA1xJpm42b7HLEXvvd",
  "key3": "5gvjMAY6yKvFSQnHUJwUiUYdE221PcmKTgRMxTy2AjgjwDyAVYx5jN9Dbxama7U4kSVxGYkbQn5fLKBzrGjQhGuv",
  "key4": "2erR1f3epNgcsDSRrLVvxw9C8S79CZFVhfoPkXudxgRgJZEjRgayBivbXWGLhKzJ16N1Uyb3rzLB3WLmXBF6Cpbd",
  "key5": "j3KLJhXPW8x8iRsPHvLZxKYiMhUGvwpcucRU51GeizGrqfCYqTZcS5T7GKxpTg12saN9jeusL3Enb13xK14LFec",
  "key6": "2VYypUpqF426QJfwMz38UaSAVzSDQYXuemm6bCw9YSSfxL8j1h1SQvgJMZ5o6BCqo92kPcHbCZSEcuKuNcLq36Ph",
  "key7": "2w45FkB6FjiuPEbMQ6iqroi1yVCAKKjqrBLafUS4TDTaveRTwfqC5Py8rv9c9FqoEhs989Yryerb6m5EfD7he9Jc",
  "key8": "58pwKDEVf3HQ6mUpLZC4mSZUx5W7EqCP3YxShZ1YU2sJMhY2kSRGPqRikkxapbiywVLL9jDJvjqspne1736qFWZe",
  "key9": "4L3j25C3YbyXba64SnMwvYjEp8GXqng3sFZq9L6VHaqhbC9ypbxfFGwK5vLT7q67suKcuyAP6gvog8z8uX8Tb2b1",
  "key10": "bUKx1gvwdrq9SdeXPzWZ66eAHRkK7iTG6hpVnHfyCn46zvWQEmA8KezVvQyb2heQhR897kPW1Pa1teTpQKz6wXc",
  "key11": "5mh9U9mm1t1uHAbxD89Rf4LjNQk4DJGDSU9Rn9ePkiP89qPcUnbhuHithQTCxCD1B49cVGDB1ceH1XUEeNyn1Wb7",
  "key12": "5JPEo56SvQV5LnEhsrYs1qgPDx2Em66qZwpSHjeutEobqGnHwVNn5DL2RGfMqMgQpSAnrxgZ6b7Rp7hXdmZbnXho",
  "key13": "2cHgL2k5avdHbewxY4wiUwphqU2n3GnrFVfhH5zVWNVkWWTKdvk8d2dqRVsq1FXUPj9vmVjYTiu6pinA7TKuJ2he",
  "key14": "25n2t2H3diJH3x4EGXj9wqQdEVnnNVEkKVRe9gCbkhZV2cvWDQyjDNY1qDsjydGTmoCWCvY3NbRQMMAasDjoGRGK",
  "key15": "2jMfCv8hPFkXeeGU1vK6qrTnHqfdRTvnSUtGe8LrhD8NjgLPv9AdD6Yq4Jq6BrNz1gphqjiwZcqM2j42wjFmZ9fT",
  "key16": "3fAMvYcHXiHP319gYnHhSqGTZnPHYNRecmGKVbiGBNC4bTifTRy1yXSwrB92Md98vNRzomEgx83ngmJBYbM7igcB",
  "key17": "2fWH1PtXkHMsUxyM2TLSMwLunQu7S9dyGfYSHFMKcKWhx7RYDmvNqzjF8gDcAoGD3U7az2CcXZyx4LzPaJwN8LHB",
  "key18": "sFy7LGg6K1CKYJF6rjsYVRB38JDxwJYmQ4jG3PEYRkTmDNgkonXjAtmfhzH4nwe2embK8LWG1Bt1h54ycJLUAUh",
  "key19": "3QbcCWzmXuykN24NkUrHvrbHiNBmCK9dsbhwbq2oLDh2Z4xXrqPpZBGmoJzfNC3u4iuRqNyXynxyJPn2u6s53tWp",
  "key20": "3PwrZJvc3bBkdh3fT4bPhGakaUmiK6MxdTtvByGPMKBbk42C1uDTrjW1DzSG93LWTau9kWa5qis4uLeRBxRuSRgU",
  "key21": "631ArpXHzDFLnQAHgKi9yEUDfbhZBYMZibCLDeCCDwSpRv68u5P8VEmTHfRpTZ5Aacx8PU83zpMcfmhHT1Bj98Ch",
  "key22": "2unbYKGwwN8Z64A58Mg3vofSzEywRWzRFnqXhgKSDmQiyEj21Z9ZpURobBJN4yMtW8KV9X5uVVswsyhw1LwWGn28",
  "key23": "5E8VTVTFVkwzPBjPyKEHRp6iKbCXKLFivSumYnfF4RE471KesuWsciaDeBnQ7ag4vsfegGqPBTHXfVqTo9gLsoHP",
  "key24": "NsL4RTBf3gcxPBdPHKVt4KVmagwrGs7MK1RfAEApVskZk8ZqFMG7W434YGye9KMDYn1s75JPY1Ymapwi1k46Xg5",
  "key25": "2fgitSiuew4DK8xbBgx5V9Dk9yMVV71p89ZKzX2wEgeLTNzW7CicTC9j5gevkBREtisXobGSLPjkhUhhghQK4UAC",
  "key26": "54F4cZ8pDY6FebWhb72CSjgJ3YqdDWYCwACLpcr5V67rZWFbKmiJQFBkKovPwiYSdGK2cfotYmbxpZA2kTfzvLQy",
  "key27": "33aMAAt9aZkdAaDNtuWQAZUeNBhDnCfDMD4oFtdRqC4qnqmDCSNxMykRY5P99pwSzAPiKZLtokrVfMoHoJFNYwy2",
  "key28": "4B8QvrcE7k4nXFirvwYW8AgBdCzScLptZjo8RuGftuHAobpqXhQfwDHVNtE83d2iUbqGQgoU1eJtvyT2Gu9HVJS3",
  "key29": "2HtmYoCmxtwmMrhhriYRWnQwf9qkXoXn87oMws8k5oxnprNCMKDdy25TxSEAhNuwuXVrjoF3GACzU6Hj4m7jWPAm",
  "key30": "5VrCJLUyPRg1yn9g1EH9pQ7yM9yWzvBkinxNJJtcMfCWo5bgnrucy69GyhHHdXasDZKBaDM6VULZWNp73r8Lyt4R",
  "key31": "5gJQ7XAJeVbsuuwWNYsCoMhvBCB6UMoMAC8MyJes8Pv3PPULQksAFUd1AQVXwF8UMeqSJf1DvrNyTWWfTqSszjxW",
  "key32": "MDMsqqytzGkwiVaMeY2EhbcQkfvKuFo22A38T3xydNVjkqTzpGp2EFC5bqGCEBJ5wj1nup7a9LzkRbeBvgDnHuk",
  "key33": "45KR7sfYGpZmzkcVHbxq7UL3srcbgo7UqmgHZzRz468nRSpTZFmJaepURR8AfArt43FqbARg4q15AfRA8xod5KsE",
  "key34": "5qVKgAmAHnKdmNpbfNDa6X5ubWepjq1GvjRM2izfn2H1e1a42D5DbnRSecxBJ2HrQFxRyiAp4CL9pfU4M8Bkr1kn",
  "key35": "1A9XB4AEoB2MLwgpB7mSQQjK9zLKps7JsSqxbqmuQ2FeLUwpBLcKc8tEaVSWQ53z1JQvfJ2yt72ypeb3i4kBopi",
  "key36": "4S1NascAtaSgy4dvG9YmJKFhgyNQqCRrVMQwWZADVdM8Rw3RnBpG4rZQNyYNb4R4vBnYMFWGvEM9J8RofAk6iunL",
  "key37": "NuFMbWxermna6zmL3G5neL6j4J3eSqptAxKP7k33HZ9VkzH4a5CA63puCzMS8fzHphG6NksacF1ts8iMfdJ28nV",
  "key38": "5FxkqACwVhEGXaPuJc6Sg3r7B3peWn5PjotzScVkAXvSCG5Dw9Yzd9ohjdPirWoy6qYaK1fiWQxXhZ14AnMVoEz9"
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
