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
    "2qmkdkMksnKt9YLNmsx6bEjdzDMzVfinoBSFbbdBDC9mmHiaJDtx56EC8QotyLxeez1Z13XH2yBcXV8ibAsepf7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cm2PfkqLXcC2N8ZK9SAeaSYXUtVusf2YuMRZkzAHdZ21daFoB96ut8rphHiBH6LG8UAFvXKZtLwF8TDKC6Yi7F5",
  "key1": "oYm7x6RDGhmjqcsgXSzG67Ro7pVVwiVUwDTXVKwfb6Gv5eAeJp6sd959riXaXwfewEark7RbLjym4v2U8Y9WmPM",
  "key2": "3wbJsQYXLSQQrAB562VfYzBrnVmz9UxZJhpFCaNbNufdhKuP66gQeLjHFEkmesyRhDCjyYduogzGkGn6PdYJSFQK",
  "key3": "5UcpRPAonJXuyrYUmiMaus395VRKPmwyGWjFV6Msxf6UuNgszkihbrmcBB8ucrYeXfn3kdfHLdVFQmQtNceFjN4d",
  "key4": "2MmkKMwop7B45N2zBji67Sa4Jr9AjrLJqrUXUphYNBi3Ad4hT5FaftnB8MpPGZgoh2vqMGcVY7JEVZqGmgd7CqWv",
  "key5": "3mris18m1oarsQM3WD93sxHjpvRNUQReq37fEqG1GY5pco2Hmhd2K1F4kwWx1QAUPTMQTbap7RtGyk4fDMmkzSuZ",
  "key6": "2mUnCZ8hp7CQ4TeTMnxjX6KbUdQZTYipZ8a3u527HLgPtFMYCNiXZxCK2j5qwYE8ZW9AXJq5QaXE1cP5MDFizLmx",
  "key7": "4TDv9UpHRoxMYMpnKPcCELUJKbox3okTdjaYnCqy4gX2cGLJ67mxjXubfmEW854iruZLvNkNMnv4sLDGiGjR832x",
  "key8": "5RdfWEbmTPRChTWMmaWqY5dfBQ2R1zsz4du5WLXANaM5CqDsEcimgK6GCbJFWPsftCwh7brDFAmFNKCgFgBotksB",
  "key9": "gn955JPKTPCZ9AEkugNQLBngJPZ9VKcyu7V6rZ4AtG4PNPVSqwxzhkuS2NFTL2spqgBZbsGjnmCWe6zRNN3mNum",
  "key10": "2PDDqUyevo4fzogu7ZAvwiriGwvffqMk79fPc1aRoPAGwrCC8qZ2tfVaGmjS4F7N6nUxhi4kZazTu8AW869Kw2HK",
  "key11": "2XRybVs3Yy4EJUsrt2zmZiLpZThYHNqrHDv42zmNBaszQCohFGqj2cavUPVGiqijeVR4WCJxw7j4ooghRMAuAgkw",
  "key12": "4yLUChtuHjFR6nr1qWiVZuTBcgDK1PGkoRxWwGBhVjitfpQcHRjzwnyN4oSKxztbuH5cPh1jhW2xUqbAtaehkbXy",
  "key13": "33yspAxzXt3c26bQ4cX3HdS3ow5DiSmQ7LWzAS6PwjddwciwdCVh54ZEKvHT3c5LfFZ6dsRMNoS1dMwKiPWyGt4m",
  "key14": "3awm7RPHrRJRg5ZYwyFuHNcrKbhRQzDywMi84MBWa6R9AokWm7qmrDdWAj6neXrXzfLwL8EUe7i3hzvVwvVXbDA3",
  "key15": "mNrCecyYJ3og3YTY3nLDYgzFzSHUZkZt5JUYZSvB38phe2h4LGw4dyXxQehJ4S6cJpfukZsEodj53jmNeHN4xMa",
  "key16": "2QG9cuc14C3ZhDqqS9yGoCabRa95Ah5YMDYSJGQNJPvrfGWrQPzpsZQ2Y6Lz3bTZqq64bY2pyyqakkJHfUnVh4uf",
  "key17": "255U8r9VLtboSiQyKbCUnuHD4SFqR4MkJCpESXTsSdn7zTtQ1kvC7wQPXVoPSxE58QQfVVvavY2Jy1p1hQTBxsdS",
  "key18": "4DL6bR7pRPp2WJ3hThQwTTuDb7FgoDgBzpxu5akvagbsDVYXCd2Cyo4qvgMsTKzhv8RVBwTXPZ6dGLHvAtitTr32",
  "key19": "2GJNXgSjYk8Ng1tbGiG1DPwrz98f37DVWNmUNkf4aSX4gaQgUS7HwJukoXfZiivX1Z8ZR2HrqWTvyBeCJpMx5Y7s",
  "key20": "2eKEogzL8XBSzFYYo67KEH4Jqj5Y9Gnw6S9hWjztMK6UtqVsJRYX2EmBAzq5GAXq5VUjyjsMBoJGqZHXpbZXZMMp",
  "key21": "2Mxjsn25EbtWLJye3AZa2MYtg5VJs7YaShVQAdqCnS1KneFzmDGPTWdrmFf5ZVU1LXXNfwCAeUmVNcLrYCgb3xR3",
  "key22": "5ZH1o62Rsp62HGVxTvGK56VeKPQvARWnVh4qNhsMHrepFxtBMaruV5wqAPEA7ji82bvLXDANPauLQ7JS4HbLLzLh",
  "key23": "4BRZDhm44JcHidDhRyaMnGrusNhdJjZvwoBPwQrmyyJJ1oxKdoEozEYQupRZZsaMY79cx1UzhJrtfMDjT61afRGp",
  "key24": "pY9rsfVzLL8GteYpYymgS7n1dzA9PpTRxBX3Au9PmEs5CYj9w5gqj5GhQfoinFzAfc8kTwP7zi5C8Fx7DDaxBhy",
  "key25": "4XA2DyiMHYw15ot16K4iY9U6Urej8FMRX1Bcwez2KVLnuy2U85rTwDYRHRL7X9iJ6E4kHT5AKkzpWaPiUz9YEE63",
  "key26": "B9CQxnr5auBWEvgbcdPWTpuZnq9gP68mSbqmJ4AnRnodeZpGQEhQBAfc6pcwP4f3g8dTdmDvtLpP6uDVqpR3WHh",
  "key27": "5v969oueFJCiqRUcrwNow9PV3BQejUzBiiVS7Xo2Gp1ZtTY15Axm9DzyNKduy594Urr2ypbdyiJUR9NbCYp1mACw",
  "key28": "C7DpsZvwbosY1Bk3igFYk3KvNpf5R61qbooSxaQMrsLPJKAcwq572cm12Cxfd5YbkYt3TSRyoSiLXu7Ryb9dx1r",
  "key29": "47RcemNqExCv8NNufxB2V9D7b3u3TpBVcJnQja54ZQQaeqcyQa9MvhbLXXfg4vEebQqpJSNQUans6iCareFP77nh",
  "key30": "3BUe6fRhUw7cqtszsARFKvnN52pjL6pMqX7NvgcyVe8WMrDAJa8ZYVohwhiCtNpe3RSQGuturDJM61yf8SLpiT4j",
  "key31": "2ntkZTsP48rLnypp6VMWFHP6PoMPRbwRLGyBnGyhgwX5WR8rR6cEbFnLxzQUyVhXfj2n3XQk74UCy5evCdaBH5G8",
  "key32": "2FPWZnRQwAatdWWeFkzeNxBDMRLHhbxiLU5LCTdM7jmxs4pzALeA4aiekeqhe4diw1XLbZU6mvzCcsW7SxyPZNbJ",
  "key33": "4yq4HN8rU4ekrBKTX9k5RxNoRwK6N9BEKfyjWgFp8oiqLqHKSFKfzW2ktcNrG6usWCW3KEvLzyPsk7HRX7UYCoLT",
  "key34": "5diWXL42tkaTGG96DSFDbsE3VcmHwqEdAFsEurLvSUgHXdM8HWCoqppv9DjqvVdSe7y7reAcRsAWou2YDYpwVFhB",
  "key35": "5Kg8awTv1wBFLG3h6SDyAg7uhwUotrjf3RvoBMzikams1HZ53ha2CcqJvd8UL6jbHGAhsJept6vj1MZqsbmReRqn",
  "key36": "43oKSVnA4EQ1tZCw2bVPxFkbnnFVErwEmN5KScMi5vYfn6UihPZZZuKFyHNsRrTSFjZaA9HGxrtKCAhjjt5YBaMe",
  "key37": "NvF6drpRNRn2hhnALRdQ78kq5T2AKbA2fbJh7FJLUxMs3VAq8yF7GzXT2uL1ohVMj6tPSiFmZBxqtHdKKHnPZch",
  "key38": "2yY2zQPe5tQDdHy1Xs8DAAsPK5c77PfuQreTK4JZNR4dMzZ1g98D8grHjvsUhJjonqT6LSA875tVPw7gd7JnnyJX",
  "key39": "5va1hPW79ofxr9CNHyySoUBkfYHJNp9mjJ3u3A98NQfMR1ttZfcYH2hr4HVePW4EiiTFrbWbb6xoYpzVF8KEdDCL"
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
