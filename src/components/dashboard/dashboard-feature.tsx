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
    "49PkjMv6sfPwU86wrTNHZFujcW2FNgwagswRoWX4oVTcn6UhHv3jXQ1Ra2UMhLqASyQENzZe5PKezFYMgecBuKmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdusG7JYj941QyAw3u26nKtULo8JKgwxJhYoAPSW84rB8ejo4m2oWj4SonhQYmciqcaWJfSnJto6VBpNW69JM9h",
  "key1": "2urDtwyzfyWPN34Fn52yLrWrCGufLBdqK4D722yd8BbAnHMeULf8CXT85apH8YXtvU7eUhKd1EJfNoQubvpXhjh4",
  "key2": "4pn8schp1JBXdPyQyLHZpSBoKCwQs4VcQti3QxUGqTuftTeQaeSfneCApNnftKycRNgdbVu3GN6jXYp3CqMC1gA5",
  "key3": "2kqV3ppumGmQkMt3zKpEQbYiQhhXeoR5QXFNLV5FTwYWBPK3tZ6ZbJNzyUWY671CoNFZEexedjyZXPGKdVqxBShb",
  "key4": "5n6ZcTr9e1NVdSFFvNCUsfZYXU3CHyhGugFgCunjZNA8C8hdFmYWnwMBEfrfdVLckBy98VA5vdA9HmAe7c6NKi5E",
  "key5": "3rXvkvm274kYPBLtuucJ4ELW1RnuU91pJCoHSHXayQtb7fQfJcAdHebXSHsRdA4ELVkj5gPpLYD8vrB7ed5VdBcn",
  "key6": "2xfGwZ6T3QqdmSQctHpr6gzxYee5H2MvEX9mDaJndrUAqVBBFBL9zm8VKGvcARdL1zgyHGemHN3BtdfUmg356Bap",
  "key7": "5RJ3agk54671gRUoiJj3w2oejcHUXxYYRVPJPn83zHPp2hNwVunAYGPGgWnQLDo6synrUtWPsDXB8djXEbZMwgR7",
  "key8": "4hEh6kSkiUm2qCBp7m3wffTvH77foDzqFYkLPtHnQSUkqa7qYhSJj7vF2mUAHtivDn8P98UbJ9Cwz8yWzKKe2sSJ",
  "key9": "5Hzv1KsgQYLSYKzkfLENCt2bkzDa4KzfNFQ3w3pqAX8Av8tHkHnF481FXyQzUH84jGmx3cF7NJ3smc7RaVNct2ij",
  "key10": "3HfrF4hLh11UQWg7j4HWRZsNKppeu4gDbLSkeArygzqWU1WANPYtrvWhW2gHt3tzV7kndqkyfncKG7iVw8dZZdAS",
  "key11": "3zDwvbcaYLo1bQxCEaXAwcpMRQQzVC32EiBsuq7jmDNJNRZ7398TrbpoDRQ5c3KUAnmjjWNQqxbtheyWuRbk373z",
  "key12": "2YDzPW34e5RXnM1vtgotMxr55uF46jsrjDetLgCCuKFUnqhrYmbuYw3rkodebDMNYvxEuskYALQNqokB7X8Vdaq7",
  "key13": "3LrZDRTpz8LzqsDbbtCD6ZxX6abGUg9ag4PLHZrBrtnfdYQF8R1Tu8tJW2qZtziQALtdVW9WHqyAdb44qvQM7Qnk",
  "key14": "RMK48tQfU8NhU9M6nye4cYg6tgG2hevUQvvUUx1PHuz1NHBZm6r9Wo4puSTqUArmbdPRDXQAaDZbZ4HRc1o7GKG",
  "key15": "Hs1Y4ZTmmJbjuhyAvbpnQvY6PYL6uWd7LN5mfWhqLmZNbvsg7W1qteKTGJNNnkAZ58fpUDaS4YyVj48onqRA24g",
  "key16": "5YkSiqcRyp9eRedYbt5rQrWWHft5bZBHKpvEVqhxGDrhCvE1wojEsvP5HLcu9yzcPFxZcsb7bCL9efCW8HPNP4XP",
  "key17": "2GfzdDfexuUkYpwtpTxm29haTFXTbESk63ktYLmji998ZcHvj9H7TbgGVfR3VE8PEjfnSX61ovcsWvzdzF218pZ5",
  "key18": "22y7EW9i8LJGSrRZoSBGJBmN5D9Z2bQXAkVVn11ZMi8yNFYJJf7Q8C1Fm4WNDP8THdEthMhm3eFBo9gEhtcVnLWL",
  "key19": "64FRRmWRKzfDwr3fFBzm6ZbSqsaUqASW7YMRqES7LX4HM5HVUtHokXNAFzLXz4yCPASbQePQazjy3NxuLmjSt75q",
  "key20": "2bpSuVcgMdrqehnxgzBQESHKmc7hcdAk54fneUpYrZNwzHScRPET639JCHkfRkTk3sacSr3Yx8ThZSXsEU1GsF7S",
  "key21": "2EW37vz2DPargz5f4FvZj5AkzygLNDJq8dLR6g2HNMij64PpMZDGC9F3CGDuYcLniEj9Vt5F6u7nyYYDx7GitnJ2",
  "key22": "4VoanW6yt69BkrKV7QkzN6YmjqxYXmb7AV9zNvZC4bEqQsinHgX4VFbLydVAVPoSJkcRqnzCwzYpEZMn2BcEwZQ8",
  "key23": "ns1fC8uEdSpcwsEKCqPhznycob6BMeXATLgtgu1G6iMdxyQiYtNaZdXsn9ws7anweDAS6fYWxP6WtvfuNE3195Y",
  "key24": "4QhBwfYfGanSrZXRfW359Y1WXYUZxb771Xcn9bA817azB1iqZQNzq3npxLAvJhPYfBjw1RHZkz7LJAm8KhbQetgR",
  "key25": "5bYogHLyNgjLVe5AW6MNVc6D1bRk6LX4V3Kz8qxnGjiWW4UECBoMb8xY4fc18VnjrgCK6zKYJzmHW7gQyCEpdTbk",
  "key26": "4ccXQFKiPjMMj7S3RpavR9mz27FnLF4DRXeSoNJdFei55kMb8yeDgpqYaNPfBvQYkrcSb4mX1WqaX1Fhfvvuwg2S",
  "key27": "4EJb4w6vP4A12n9pqMrYuHsXPCZkysKMvUNtjZyTzGmFbkkTfaUW952d5VFG55ojADTXu9kZLoyXMvedBATahCGe",
  "key28": "2z9wMJncK9CKdq3p5oJ7Rqo4A8koDYJ4ymEkDVXfjmL49NVeh6zH1MYoXEUsnoUd5A4eP7ibZTbCA6P7aCHjzPPG",
  "key29": "2RCZDbrhUgpwTddD89XNkCizh8cEkRSuNsPbtietiLp1kQHCzw3awuqvj7KkJeWKFCSfW8ivkd4937zS96GvYJCw",
  "key30": "4j7duhr3gMhPCG4EigJwj8KmFQmxPW9QtsHBU9vuNUsVKy7cjsePCuaReunF44jo8X2qHgSB33Hecev26RMyUtSC",
  "key31": "3nLLiht5XbKFp3dKwjT5JYr2o8t9QADmJKjFJC8V5pMrH59fG3qkDhEtxXRSBQkyS1w3e1SatxLLqDhksmfzGqNb",
  "key32": "2qhd8XDiG3HUwEsSkSgoNByd6kzwT5tpXaceLqbEEP4gw2ngfyV8hgK9zLfb5isHyRNduW1LLfotjchorjL6CmAd",
  "key33": "6ZHHHM6SQyME1UU6X2in6zoc9dRusbrQUycS4vHqZeshE9JqKet6bap66gbCxrDrmCoiiseeHmqPzP15P1oLorK",
  "key34": "31EQzZbzXogsE5oZ1BzTcvNhUfyzC3VwTHScaEmEKG3tbodQF88LYrkRbKFgBp1U73MDorey7J24JzezG2y11Pf6",
  "key35": "4g99GpvH8Lw7ypFXkVtWYud2YhpBCVrwepFATUEqwbVE76B9aNz7uWDQ6GMfqXz9bhiVmuBBPZkprghdKR5CuEhe",
  "key36": "3GKtt6FFemWsNczdeWgfW9rBRkQREuNvB93AHo43fBh7GBoz3GBf9JhrBtz8jYFQQQdwG1WznwFvgPYrgb6AQL1A",
  "key37": "ufMFqqBkVk4D42WXzStkFWfNQvEes3s4LRJgijaWiqrq1rrMj7BzL1E8y66s9kqNkq2j1wfNzT4T4fVMRR4qnzr",
  "key38": "249yuzQo6kXJvNA925U7bJko9JVutSmwuwDL5n7tZnTkewEXRtwDewyx2vV71A6b1P93uzoQkiXVBVLWLTZ38s3V",
  "key39": "65c1PTAmV91nkS7uGe1yM2QbnRYWAULwAU28nT5aDHGiEh6BPeqw8xEWqErok7utagRVprGwjBqLJ642CKMpFji6",
  "key40": "38YXTsGLgf7MnC38cXXcGDscyFnkpdz8aGdd1LYkixkxfDGoNBGYpP2Np98TbimF623ag6RrDoNMFj8nemGC9ySb"
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
