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
    "3JFb8mcuQMA48MbcXHQApVfXSuxtopyzQB9LARt39zu7VJN6Yed7jptCC51PFnhSx9i4iKzfGwD8NneMa88j2bNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBHhG4JwQ4fqYicEpb5zs8T8dw3iPV5VSKdGtMKehArHEPDWMk5kZ19m4QtbF4UB2gJ81chfDy68rW6Z9rVkgAt",
  "key1": "boSA1KPbyjkxuxGcRtiP5MKgK7mBuyRctnMJkSaSoiTiUYq4a8ixxmkvN3edBiCMX5BmUDmKvENe5aZNa2WkpXE",
  "key2": "WGMZ9DUMSSzRnAW65mVvzx6j4bh7aXQgvRVDiGgXW1ucfJ1Z8axKXECrmr1iB6pHPUt4ovfeTs1q8phTANQZAkb",
  "key3": "PqEKJfC3E93FYB6dp45Us9wTe8u29T6TUbxrkYrvoShzZYuojewB5KVLKq8k1QwZQ8JnBXXfaXhcRan354mnroD",
  "key4": "3nfxVY82mHfuoutYdv7XgGphTypvrN8WFLN2K7T3M7yAoZwBTiY8G5EmqPk3BPwueroCM2B5FgSZ8xPGt4c8vdnj",
  "key5": "3FjnuWjpaZHpVU5ZCUyHiTN5gKjUJdZAnsr7FWVykSLAocLA5z9qUoSXRKj7HitnRb4Fi8U3NYQknU6avSuuwqfK",
  "key6": "31Ehk7fREijEFFQjPiNxMyZkrw6QJXWzxBmBwBq8GTqKWd46nr8octubWP7BUQpGJ5ULRwwwqNBipWN6CRNLSxeD",
  "key7": "MxvGBac7DAkreUtjqwGppQriR7gDWTmNWEP6tADPzAUWXWQGvBQfgipAAauBhTyyouLc1aMjpu4yzSndDVGgM2d",
  "key8": "3vDt2oUN5PvY6JXUw2tRE1N7mLjMATCT6izg7UdQkDsZUAUR5zwtpWyJR4xPRSxu58XAxfqqbUYQQYieYkKBzn9A",
  "key9": "2rNmZD9yuenaPkfDLYaLUN6mGzuz85Jo9XzTCJwCySwoF7iSY4d2BqTQtVcToNjLXSBhvzWF2pKo7EQmeqcMzc5P",
  "key10": "3Tbu1wfzYhaNHPYhRytbvTmi83gbkq4thrr9Z4gGsAigdGzDcW9eucXjFaMxFYPAjN9wJhFu5H3YorbaQe4MpaZq",
  "key11": "2Xy1UDSo3GsTNQnDbpm9ZGwz65ZMTDxwkA2GdZCYUC5nkDoyhwtxd8dVdx8kr1V5zmtpPiMV8JxUpnhApak8xGLo",
  "key12": "5tPwZz29KNZXhqXjq1Bcxk9Ufg4CTwRZD9PwVYZdKR2mAojE1ggEiDUJuUqysv8eW6kB6mhcrX3TeFSb4hjmqQ53",
  "key13": "mjD55MYhjpydPKfsJrRc5Fc1LKCn1k8a1SAUSvzaaEhWFwjpg9PvnZkcdwGbNd5UBPw5aRtYHN5GgKQNNR36cnP",
  "key14": "5dyZ8mAM4rokQ6KLPbBDXsh5mWie2u4yB7mQjwcqfgpwSnnaovq6iKgJpsU7HhNQ8v9KkhxJzwyPbaeL4wiWwDrm",
  "key15": "4FxzmumJftJPZbxVG5YvSYpnEAe1tDptku8J52JKN7aQwX9evXjpgxUCTca96ZyeJHyDEBfFmVihuLJP6LPbKX1H",
  "key16": "GC3kJMTsFwcvnqYNEpbaLsrLbK1q9E65o7ZjP2iGmd2M7CQBQPjW7F6KucGh1MT7edYmHTJGm6YMvhbUPYwXeKs",
  "key17": "2Gcm7ppTLEPuWQN4rYbWd7QMQ7eYeipce2Eu5DHH9CvApD4L6YiBaVn3t7pz96zaj5Cdi3AnxAM9KCZYCVimphFz",
  "key18": "3JGMYybHPGmAtTu6yRUWy4YiZpmsEHNUw3WY5mA84iHPhGdoLwgqdxQxABEp58grQfq5YDFaLPrTFgUi2wPhE8KM",
  "key19": "4E5qHh6KYHyXoGD5fnx1WTFD4qKTE6kVBdckbfbg2LwEgadBiGrWgU9DLYUnU6aWoqmgZbAUnVo9oTjx88FWZhUS",
  "key20": "RBF92aN2kYSwWLhS55ahGf1nUb8HpFCPtJzEKKyVivkkoP5gePU69dmFbYQS6X9EjmBoHkpEA7x32YJkZkMXQjw",
  "key21": "3eLu9t6fDAF4BmxFdx7hCbEF85oNTacYgoqfMJ5FFjgh28bWVr6EoEzj4GJfcXWF6JhzG46QWapYYwZEpcJBrBfm",
  "key22": "2sdvA8ekSn2AhcS84QqwJDW6cDGYEd1yHxGnPAtPBJ7MZV2bw9dGWWbK3wH9bVh1coiJgbFHZuHqp914oFDfe3HZ",
  "key23": "5t7EwsiCCqBbScM7Zdf1qLWU23baVkZH5z4rwsiETL8a9cxN87gXZFaozodAc2YGAHC2P9i5q63SDijdp4boW8n1",
  "key24": "3LwEivRfVGEdUGpJbHK1xA52X573aaenCNXNAcoFYATaB1pszixJGso3asUnZnKSPezWpN8ULJHABWELeB3uA6EX",
  "key25": "2PyyD1odsFLgTHaibdpQJxMm7wohdP3Zwu4abcG3VoVkQPrzG62qsDGTnksSaafKwxPwhBmreBpsgymjmKm5Uytr",
  "key26": "5orcWTDG5BLmskneU8rho6WE7JAU6LZyqaEdvDYdjiHJKSApcXs4n7KhbaFm3CeJtFBcMJYux4jR2eJg6S63uWz8",
  "key27": "5M1vsG4ToTmiwjX3aG64o1mmqDBp4fXLJMNLH9hWzr1PWB3Yp7SKLePnMimPq8Fi56HXPfGarsadTFQMSdRFpUre",
  "key28": "4HF51iuzy9cMCNs7svvqT3kBpSyD3JMvz75UrLSg1aqHmaJdBKgdhP19ibVddRCitEGLAfE86vwegKGGuKaTwVX9",
  "key29": "46aw83Juvwf2j6SpGJ5yjR3xvqnVUiwKnYUPnvgBfsm2xLPPsTQfyUG2nSyvHPQLvtxocakQEpYGiWhvxj7vLzoM",
  "key30": "5PMAHz6qfRiJAFYjRnPU7YXgoRPAm6ixnUuMhrsNhkfFWaVpbfmdv2HRiq1smQmg3thuRYo91qJMKVEBVUq38ew9",
  "key31": "3yy8L1aWs4QJY6oDenfb9voPQN8dw8jkkvWt1ZNjnNJRiwewZHbm2mbKq7bC1dMBhtJDqwssxqaTWyysUh1N8MBz",
  "key32": "5KbVbsReDeHy2vrATymL7VP1E9yd3jyAovmyy8357ceE6AQBFe9zLKfCcRLy95CigzRVk2uiPRC93SGJYSLpFkYg",
  "key33": "4QQvzjt7eiKFRKWJigtygdF6VnXqZRxEwtZkeoKgn3SU59FZVeecktQXTNHawfbgEAER25MHbE2GNQaCpuA6FUWW",
  "key34": "yfikYa6PcxSHKJyvVFBxoGyhud2MFBTrtYTgRFeqbvuJrhaXVDaVrJM5VWfykzNWmFYzFApviVF25EGtc7Nxx32",
  "key35": "H1oLDjp2SuMFzLSuo6bEMzm97XKznt9GQGy44SQZkDHfZxLhMxVxF2AJrE2UjAJAhLmsA7cWxUQ89RYqJQrS7Rv",
  "key36": "34Qw3UadZG68eALx4YjBTddmkn26VKxT1JzvJwPyCTMWuZGNaC9B87wUPDwwgXNnTDJrdXPqFWYuGnv6tFXZc5m9",
  "key37": "2FeRNJcYJziHRMUkQpSFsQUF6N9MjqMYXPBKMt18SRdYHHzPdZy5pKwZKqv7J2rn3SH1K1nssTvNeAoxF7vaL9TR",
  "key38": "4ayrihWdw11Ttv9EGB3Hj6WYnEJoUfJVkdxLMChbPCLFpLc3vdiEhTChFrUYWnLgtXfsT4xnCPuMH5U1YN1ek6tL",
  "key39": "4XfEevZscjEGqxceGA9SR7YEcbn2D1TBk9PnsJDhS8k4GPE455GtZ6tezD6GCV8VpUTENMBuwG5koTenfhWRdbhQ",
  "key40": "mku4xhDGpR5VXngPpnypzq1gdvK5Zm9UfGGwN3RuaNPhf1rt4ZT1jCUvxTuFJNPDbFHqE9mXDVwLmKzaxPr6316",
  "key41": "4B4zQz9Vcgk8YqDfPGxB3fFefQm59888wGRhSxXwDiJ7kFu9SmWKZEZM3JAQ7c137SDjRipa1E9xcSLo7uS8dcUz",
  "key42": "5sVjuGRrGsmvgEAToNUW41pzYm4ySp2YyX4LEZXx1PjqGEMBZUED5A6RRNKQfeZa5naqZJGp9GGssP5BYQAA7D6i",
  "key43": "3c7RRvaMjXjnXrQbdYe2rrTwiVo9AuokBcCBpccaDwumkteLNy7AQ66naK1zRvLqjxCyXum6bJfhmsQ88kaBb9wm",
  "key44": "52zBjdZcp6szNPktec4KLSBmXrN5tYzUtMupK1EC9353tx18xpcmgBQsByCAia6TEXArUttP6bUBpBDAXfJ7s97R",
  "key45": "5WqV72CJZ6gYVRPedk3UQFirevD1ixYqWQ31Mq3BKt4yT29B4m8bHcQDnag83axQ66bCyMYUoh5uKwJuLtH89ZHH",
  "key46": "BNf931zaat73Jp9HMhg4sPdhtv925XHLvqh5Xm8w9HzoiVD4rkaHCXj4pfABCzdoVLMKe7EVnQhVHKVfzVXACfG"
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
