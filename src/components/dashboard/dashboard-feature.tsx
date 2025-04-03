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
    "54QJ21JtAfanR2Zu9dw4AVLWkbH2PEuxSRqtMDnmGEfW4H9wg9PL2GSzdDDgbwUKDvjwL5KHhKEqEZmWhC4o9bG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cy14iCuYdqPLAfamGZMP3zULF3cQfJ8sHmCxjfw1omxSDPVUi2ix9e4EjVLsrjh1Gn7RRp6Y8MpRq9xLb3njiZe",
  "key1": "5M1iCK2LgwTfKKLA3iDuUMktBz48SiahX6fi8q1txudb5bwmDzRRLSn5cZMQyfvjHxGdf2DQx1uUBqMdGwzPGSAY",
  "key2": "4MhAy16eiCpc9vqZYcuGAA5gYiUjV3pFrxfoQ2RjE2bZYvNH7hoEGp62XZwNndqrqkqcPMvjnA3f7jm7y7XyKPHa",
  "key3": "3TfDYrtSX3B9SF4z9FN5J8TiFgKhRRdZR8rQ8jZyvLXEL436YjXNdR9bCBMgeJzD1iFmfHWnK56pt4vJYNBtFSjh",
  "key4": "VghrsMQeWLqgAXJi8cqo7iteTEDUTftUpWDJbKYkzLAZbPz9R1jMf7ACYKpHTRxRFNwao5Pt17vU5M9HH1q5AuS",
  "key5": "4ZzDCPZuUWZ8594ro2Sni4cpL5BtcV5GcThad5F9m7SmpyfsBm6MMbydhh3sAGg4hgzXhdsL5mdc4zfSq2A5bNtM",
  "key6": "wKJMLtY2uygjaaQY36BMi6MuzWb91Mp1x2y3juTJR4mebFhiMT1dRihZGshEBqRiFm6HxRdhrRWL3KxpWCgrbKC",
  "key7": "4bEbSXWaxHuREGmFv9V9QbUZq3KxsrUraifaCCUqF9NghcBcpxWNNCUX4cSqeE2DmVaw5571KbDMUoJdBTTGBpbz",
  "key8": "2o9P2Af2BJVzDpwnCtESHjjTgz3ztYudnyUD4aMiu5Kiwm4cyDXMunehJLcF7GYg9WqthJXDzAKYmML7MfvD7LVh",
  "key9": "5fUdVTBBf3UrWZzBNvxjhB3SRmNHKuuhiVtfkp6rD2jLD2QmrXyED3yiSHruJv9agA9AMKiZ4jEXNJ7PkmC7b57E",
  "key10": "2KLKx9r2i9GYwtx18TbyPVA29jEmtMKq8m8TtQ3fAz6JbnyYavhaASaCnohmbstNg5AYqzAhUhqswUcbVXRV2o7w",
  "key11": "9Ri8G8fbdvXqTm4FWHSJKzYfconhG9FQgsHfuhX2VGz4F1nDNmBMPwQJHLo5bEtv7BKLxJNtXwD8cKfnmV4VV2g",
  "key12": "4oxdtNUJ4nzDqbrCBFaQUAxfUtUb8JsBQpXm7UoZ5VPpJ7X5y577pf9xcjCawneJWw8vxQWJwerurc13N5Yk3yGf",
  "key13": "4HXTTSL7X1558SHWAZBAP6F3nxQV7n5uMmSFGP5wbH8EHGKyWeMLRTE7GYN662sEGgxWj21dHuDSYVJ1eB69JU3u",
  "key14": "3mmMEsFytMXoezRGXwaPh3eViN4VUeCuSpmh4mLscnRz2BJhWGP69E68HUGUtVWzNXXJrJvkREZELoyWjYkXcstk",
  "key15": "4cQL4owmUCrNszfwV2Qd18Uo2t5RFktgbmGWrNq7y72oXEi3bDSjEpypdWgS3LJosouPaPkduHD9s6LJPBhDjJhU",
  "key16": "4CX6qPC7hmWNd7Uk6MrWJ44sLhq3j2Xeca1xCKpbYKNRGtZrfxD1uMpquAGZqbDFXS8VU5ZxYuFDSM3xZyPJXN9N",
  "key17": "4jxwVSN5GzccLWRmHDuGJqNCTkfJZifE1reVRHKxMo9fcNQ4o78MQVLMr8YzvK6rx54HqqJ6QAiKgkbHhCMLJWdg",
  "key18": "sN85L7wDKx274t5VkTmP1TthXFjvhZmmPARUh7uWpctiokAycKxeH7Qp18qvd1V2XqSAyirekb4M4dHj5Y4MpbU",
  "key19": "2W1tpVp2eqbLmtK43USsfuQjKGQdXssLytNajBSH6mMKy8qTHk42CWdjGmLmvkAKPugqteB2qLJ3japkQgaMmK22",
  "key20": "3eMongeau8hXYkaZDz91x5ZmyWfQJuqszrbyf3n2Vm1vfQ22v1zSxhhhCKGGNtLCiP3L8LPqCrWN66iiPta6Xvfn",
  "key21": "4Eu2EJxkNURY4UYvz11sq3ahocoa5a2NaYveh6ohDk5AW6Kd6QYuxR7UN4rEr1mzUoyh99yxTB9oxEwxpA7aWEjJ",
  "key22": "4T4DM385afTQk1dV9mxa3sXxVcgPcX6Km2VYpcr6FJPR9jmH27XXKftNZPYqcGpUDuZKCUshH65NCgpusKcuGySY",
  "key23": "shVdPPfkTjZbnDVfB1H5MiASEhPchzo27dGUD6XEVNBpWidjiAhBALKiNrZXYL3kieRfoX5PNkJdpZovoZWXR6Y",
  "key24": "2tUunFZochh6WdqDZgtv8cnhHNyPcVMopzmzBvUbe9a6P1CX7tJvyJHcyALLBzNpWEzP6ZtMoAZBNVxZamWieaEF",
  "key25": "5NK2EV1g9ADz2cwV5aq2ornkELaZfQHVGc8wjuXqqYq9wr83hgxaknHGqtojcTWKzboUaEM2HiGuTqjQGyDn3vUm",
  "key26": "4BWcTHoik79kLHXxazdRhtDZfjHvcooqDkQpUB9KVELPhBBCz2HeiHnuDFxEnCmLUHQB42LXZgKECtgrMb5uJeor",
  "key27": "tUVg8YRVVhSP9zoi38BQXpbhi8oo2xNKL3CLMPzA6J89Lgqqsf7jk4xiVCyB72C9tCQD6ykbkHQdkgxKRYzHfem",
  "key28": "nCNUTeHwSog6QcS4tze74uUWy2KQBiiZ8dsrYFdG5RTEety68SWWYbBqBWG2JDimPCSSMm1nyoJSchkHca9ZNFP",
  "key29": "3jEKNjEUQSVovVMRDWtGU12q4mdc5gpa2RjV8bMzvQhvwxdPrN1uGsNp3ab2G6MXA68TZQevhj8QEuEBEdDzZrrP",
  "key30": "B95hJcyhte85QsNtLcwFZV1jLT9zCYRVXTxFx5svjib4twGD4Xet3cLYHML7iUJdnciyJDtSVABrp7XH9PERmzZ",
  "key31": "bJAa5s42hxME6bZm5kKh7eU1psoCEXmwG5tbVFF7kLVRJ6LGQ8Jm3nvrzond27ArfiteGcEtiUawBjjYoCagV8y",
  "key32": "2EZFFx1wr6E23WTXpUM3pH1SZxAepwNnYXAQEpxbGMJD8HC44Pn8J7EjdP4NcrjCvdZsqNsjoAJj49yZtyqXRZro",
  "key33": "3cdQaiXBdPnDqG3L247pLEjUmahSGMkH125TtZcbUPEXaQVQ2JxNv7kBhn9DHTLGdin6TQ915L3XSTNNUGaeU66V",
  "key34": "3RCLY7EnHQ5pkW6UUmkiShJKLZsj6GgpPza5tNgmbenk67CvEf9jG5Gbiio759Tm1PNkLjyRBAHkXmsZ2zhp64kw",
  "key35": "5tSXTmxe84xnrJQFshhmWy5ik8BRq8h4PSzuWKGCeqp3sG1R5F9KgtWVJ14t9nxzVCQffSPUQX3JiGeRaKsK7L4W",
  "key36": "5jR6cb3qno3RZV6RfqrUtXYXwsHjVcxiFKz4MMK8v5PLcJdo7tuSNhUL5oPngANdKsB4MyLrDDXipMNJ4b5na5Qq",
  "key37": "538ZrJX2VWayJpQcYMNoyqf6x6tteZa71pAqibF22CtCRLRs9AQhvzNGuCyJjWGoQqx1HzdSR5a7FzeS1RtbpZzN",
  "key38": "4ij7TqJn1ezPAjEvgNCMdWWreUorPoHSkDCNWtSsbREuPg6qAdMW8t8ArzNv8iwYtaQxs6fvr3PRHg3qWvnNfzo6",
  "key39": "5VAjxPTx6dy4EmyPro31tBEptdfmejnYDGrqAHn5CAuNGqFuMyhwvexUKfhXZ8ofuzVBHcFqaLhyh8Sn68AUwvop",
  "key40": "4FSYHBKLimHGqMpRK28igxae8KJdn6QaacYsX1AhFMrnUBtKijj1CwZNYBjpvcvPmjLQhcfPvbyzQffVfGEYuKsQ",
  "key41": "5zLDqZcJJWysBi1H9QdN2mZBDz7GMevqKWGDZPhacPQ29tXSzHUEHdwARNi7zBXzwBLeXf8j6mpAVNb3B1T3JvCi",
  "key42": "2KkKnS4SpJCNCBBQV1GGRajgh3GorWtqGyNY1QdfTdevME5GraYncVL61HnsUmdNfiEapnr1ZNfk3N4AsZLDEyG4",
  "key43": "223BpUJce6KyNX5VegV3FvMWaNhMtJ9AdD4Xe8YpPcKez4UgGFNKHXkWwMuurLTgTuLxdZb9MU3EwqYRqnjGsqkC",
  "key44": "4yVowdCHpw1YwN97MjRQCpevpSpu3FbGoWCteLppUcjFnVPRBKVrxCxWz1wFQzBZysaS5PaBCZwqMnsVSSyAHjap",
  "key45": "5BfkxTGJZxmz7suQteHBeYxfVb7CoZMEgeFkUtws2zkbMVkP1gqcErPU6SxKYmuB5qcFU8nkzse9VwAbrMuWMGuC",
  "key46": "36HRPAx6BDaDmiSy9v1viSN6R9BantQ6KvtyCUAjKtVRjnA1mhWKzLgUWZsTkCMGahGFimRsKEjuP2MAnUY4DSdz",
  "key47": "4ujMFTymqSGT3eGR4b86tWhgB7r3E84qn5vs6cMjppKVbRWLqUyudcMnGXXJ3svV2UumNWs4hHatNVL9WvDtCM4o",
  "key48": "3iN4d3yXR32PrSZE4VeLRK2Qa92uGTFVrc9kLMjJRG9vBiZzPPYDhRBCmXUxEXhDaagW4EiSa8panEQKtFv2moMP",
  "key49": "3MRoWs6wanK9DkeuydDZ9K9rtnYnJvjfVYYuGF2shq4y9RBn1RQZdEtrXY3mWE9wFXsmDt6NJGKBpkx83ysertsi"
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
