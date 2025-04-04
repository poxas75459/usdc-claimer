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
    "41t1bGDoUJynA4t4xmyWUg7862kebQNyNJpVaXFfeyVEdBzBtiGjB9XXGEdtefzhrBJkaB7kJtPVwfHUE7J6GAcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMZVfKMDngF6JMQV4mc4Zt6SDgaMgtpbk2W83Uf2H3H2Pa3xd8q2kwB8RXjpeW7dGXoHXGG1zUS8HziKRo677Wd",
  "key1": "5ehjqQdw1XHNkwjgMLgKpyqe2WPnYyEvA4Y8qatsAb44JoMrP4oREutHfd6fC9oQhEBDJ2ECjEp2k3XdV6ebznZK",
  "key2": "48AEFG4zq6SCV11eqDmq1zSHVvXW6Exj83jZC6V5EeS2LrYsAceswVsKyUYjnFq52HQGKypJhFcj6cYXi4mUg6as",
  "key3": "Lt3hujEwXQeeR7icbNsQQ56CyonaizY9vA7DSVud31BmBUjnv5c7DSJS2b9MtoBquNzA4pCPimBng1hNCCYWKPy",
  "key4": "3cRFAH5SkPBRGX7v9ycN2uWLt3euWvNDiRBSHAeuMiHs7LvHp3ZGbi7Zs4rVWYBQgfZrDFC6Ei77WLLEksmhBGoy",
  "key5": "46itjaFq1Pe9k1gQdcTGpgQub9fPqG9tSdEDBFF6T9fzifDzh5RvqPYEBb5Tc7F8J3gARAQDkK48zSFwGsiVoLjx",
  "key6": "5wVp3BucSn5LNQqufQZ2hA1N55e4CqKZkxyPYGr6Qj83F52hY5zFXuVCCkaxUyqzG9R4tFBAyYkZZYCZG9qbh2br",
  "key7": "5iH3KFxD7yjrvMoWL4a4CB28sn5deemdi51nJyQr5wHLpdXyqkPpdEueNA4C3HTz3vmuf6gdSqnekrJNFFEdDQSX",
  "key8": "4u5qo6kLbby5yFNJf6duoW2gGPi6EST46pEoC5XNDtRA9qUySGb3RuZvpYkmbGC3ACsBgF1L3f2eVWsWMg7dyKZn",
  "key9": "5xY7kgmpL4RuMBnvDJGkRpFTQMpLfgSE7yVEpUNyiNxxuDbfvrU1KyQLiuF7WybpypuWwn6uBfgiB4sXuKiTEmcW",
  "key10": "MM2vpqvRKdwvYLDpxy4Qew68hBEB3sNFEmNX51FATGrwVNTXHPXGU3hgMMANJApC24ZBzK6NVyFGZxUj934Jm3V",
  "key11": "2qhoDpG6S6EUnKmdoEcaJhRVtjmj1xvLMJCUJ3w1fk1TtjTSqVD2btH49CemQgng7gWLBtF9ciiYLq3Ue2CbcUJm",
  "key12": "3gXt729EHrTqoPYbDbnoowbSfYKXb76b1QKasKB17xzHdynywHDfLUjDTtvhEM9oqHQ72FVmuv4rSBEpKpcrV7S3",
  "key13": "464ea17yKVJKHST8xtLPkCqtizUj3NtwpRJj3kWRQwpsNbjsw1dJ9eHizGmchxSBNj1tv6khJgW5EBkArg35k8LT",
  "key14": "4q62ZSfUv897Noq7Cdi3LWXUTH4id4nMQ6PFeriNGBheLTtMNyuCEkfkCMR4rHx9aHY8AzVqdyQVCPkbqJmF4vwu",
  "key15": "5Sxq2U3nigS9shSyZQ424E4KohLUrnYErQBz7f4Asq8odQZrZHex51EUKsqSfcD9uvnSh6Z5Z3uhZ6WNQvsGqwLi",
  "key16": "2fhfw4Uhhhi5XqfHxhnExwV8wboPidyJ9aof2o8hwJKuwfjYcY4smLyWbsH9nYZdVv8kR3dtKTmBzZZXmP7cGcaJ",
  "key17": "R8GERagabf6frdNyTeJWHZKwW7U3dotaaBkksAjJCXJwpeCnhWHanB2NwyxCZXEszB31adYpZHZ9wBbXxkva7bm",
  "key18": "5RcXE8j37btQxPJf4AJg6GBnzTG3gwmYBTGEkbHMZnQe6sCssLjXnZ1ZTnZ5nGU5DHQ1W5jLsV7pWs4yHFtR1DWd",
  "key19": "3pU8b35M8c3RngWuVx68P7ZNTzaFFQ8fnamBBPKgtPAe3EgPcrM6imoznf1GJ85nXKkAfus8uhEYw43R5goqNUih",
  "key20": "43k94SQ8P8HA9SZnDMw1WJPhFfTph2GV7buj8h8mNqyWGSShsJQGytqFLKrf3zd7tawBADybvtwMZZzKe8xztmH4",
  "key21": "yJH4R5H2ySM7sSY1RyVxyvQiV2z8a8NmfSFoqaCJjC5eTDgA66iTUNaE9SLk6bwaEbJuZjtDTfNzcbZHs52hzax",
  "key22": "4DVXSLyZaPWxmasrVJkdipZKZJPcbz4wu4Brrp1mJXdu15KnhKWFHDQCSnxFqV3m97HgYfeCo73Hyxkd83iyEGUn",
  "key23": "3V5tNaPPZoFGWcXwSRn3fabkhexx1VL5q6N6D5pDYbbcuVaU2iMzu4SvoCVXgZz4et1gignAD7LGKrwNaHZ892eG",
  "key24": "2DCApWzgrHHt4h2uSQr6RXQXxQRBt8yoVzAHg1Vu8ybRAHM5eTGvsR31ENoxFayDaAy8yNYCzbsLG8f4CvrAvG2W",
  "key25": "hGhrRb3t5jbBZ8jYHNdb1FBCmhURKy2fNrCVuaUa65m1Yv58Y5DHSQ4bR3b55mgwj649fLep3XkdiuaL6YFJWUU",
  "key26": "3vkq1XhNvJiWghWcsdGJgWpWxwNRMvVmEjsTYGXCJ4mNHtv4dEwtBPK91WGGZyEqiDruNVCrEmhUZvpmZ9jBNhKV",
  "key27": "2gfcUJ2HKkP5TvXijmwX6DP7CHNYkTDCVipNi6Qv4RBuk5JrguJF6UbjT1MkWyPVbyDyeibqfKQ3BZYt2LxKxb2P",
  "key28": "5WvYjeiwjbDmrz6yVK1KVkAUKJzCVTL4cWr4wMeR7jEGzyRm5VqHeb1Msdz4HUpngkPCjyf8TXKVZRkxD2YkU7E5",
  "key29": "4BdSpK4ASB7sM4qcnzPuFnMHiwyvxFFG4U2DuWy2VGRCD4vwpqinFV6Xk5X6sgbXFR93Pqueg7zkGFNLu6RGP5S5",
  "key30": "4Cir1QJ1eVWdbHQfNbWUE7wDQF2kudmBfnY7sugrXSWVtWPs3VmyBtCHXCdxoRAoW3GBSCFLrKBZwAtGeyE3eJpz",
  "key31": "2CJGemTZAxhEPFMttvqLThwoiXzkVcUCg2hfL7q5FQ1UatEG9J1HKrfrXdU5jJZVxwkov94QsEd4M6pcCCwEUuM6",
  "key32": "PBcXwadUPoEgLVDE8FGxbUofy61yAf6xxpiwgxnwmwjnQGUQ7tN2DS8z3ucvm6EzDVVAwTQEXbdE8cDf8rRDSfA",
  "key33": "3X4w2BxsdKFR2jVZLFamyc66q23hG77RCGdF2445p5NX9h1xUuENYAqPZxvQc4CcMoehC5iV7zkxX7TEcff4BFze",
  "key34": "5vy8pdRZWpMy7MqjLhAqwSQdAaucKEGHEAX7GabNvkyfwjGztkqqpFEuNTJvpHqDkR5r8vZtLhNFwjJDsPGTMGoc",
  "key35": "63qjTgzQS1mRCJ64kcXmAEDgPveSHuk6Apib7KynnetsSpCLwMxfP24exfGRPJYYYHDp8EKhVmuGM4Ga9LAq1fWw",
  "key36": "4ZQ4aiFPq2ebNJStonzt9ZNDUEv1HG8G1kAoHm9Ykjm3CcoazuhCkPoupo8uH6PhXdGz1wQXPFqvxwpvNjWSsFWW",
  "key37": "HnSdJ8UNR459NG7pdL8KJjroFbjPKepcH4FhBhvuC5kfQ7r8EAdShtAPhRNBJ4Dws3edyEcLdKY8AudzmU3v2mp",
  "key38": "2a5BLtFrPJJzLj2eE45fDLsChohL4RNLviPzseNysbs935FJC9nPTgtK8jpGbqi466aDRtGyszJG2nsNSfoPZEMo",
  "key39": "297koBhWocpriBo3fSCCmAMponsMmMT8ntorykSjq1dgFNTxbh8zQXM8vTs9YvYKZK8tF8HutDKiTwYJxmDKWy8b",
  "key40": "Lmk3kq8y6qV8cVthbKXvQuMkd11SY8jwtnUChRihh3wYuVLFBFat1TANrKwnrdYrngzL3LEKm8QsrUeVr1ZDYMo",
  "key41": "29mdYkaYWFAtinJSXxnNpHeyvz16ZwK5EuBX6y4Hzp9bQgccNJRZYr4Bm6qerZ2Ae9p8ZxD7RUPzqyaexB6rk3AU"
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
