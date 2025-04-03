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
    "2h2BhhFicUKnkvfFmqCbvL5dFYpWiqZWmZJXbvaUGDFr1yXMNa2DByXT8YEZAQWEWMYRTy9saNSoM6H71pL6CTKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPPVrNby6pp8Tu2tNH5wgod4DKWGx5DZ3y4UTF4jD16iFbcHUkcW3G3CmrhrefB5g8L2joKbb5efscoCZ5oZPbE",
  "key1": "3jAHLP3ZhriTpQqhmB5Hg32GWr9J3ThTW6yGvVjwoVUvmSqwmNDhX7npFaDDDndpa5xYi7H4kJ6agKEGQoTYo34z",
  "key2": "3QKY2PQFrrbutoFivPsRJPZRhSv31X97WNppLuHXa82HoheDjWQ7Ne6EZpT2vDbTNbzWpZTXW6K8sfvkUinSgaoi",
  "key3": "2ysM6RMZt1QmEfuEEeB6r8KV7gxNXnz7CFsuCgSt76VYx4gFRn9w9eRUepwHsfKAmo4dUdujC7PAwnV3AS7cTBur",
  "key4": "4P9hFMjdWABMcKNbGqBrdNriUWWo4fRXwjVBw6PgRD3aNPPuL8D8kdDZEW54qNZvcCfniV3AARUwS8Qnhghebk5Q",
  "key5": "2QxsBkuXLcX8mkfYh59rc1xHaqJ7M9vzyDZZRoXSouUqTFL97r68U1XkJ8aoxriWyqChYiVsgu14t5nG1cJiCLg",
  "key6": "65Cj6z1C5fXExKLTor2nH4tGYgzG8YLpHNLHodcEbkiszVtGkqKXVbSUdFD5tvoYKywd2TJZ1bk4zD7dBExQU7qF",
  "key7": "3RXajFsMdWXKHGs68FN2o4aAhoBsyaAuuH4Aqat1HrxoG8yvy6fTBSvsq1dNcS8dbQSUU5Ge6bxSRqDrpp2yvAF7",
  "key8": "2kZL7kGGLHsc6PPttqEfANVa3Uu6cw4XLZpzgDUM5uF1YyV3K1fiYoeBMrtWCeLfyk84xXUWF8dZSQY8AtKU6ju7",
  "key9": "2nAiMWYWBy7TzfuyYUFgEqyGNeQrWBLGrCf8uwfSXYFughmUUKq9irEaTYHd9T2oa65CjWqQrDf8QszXzFsfMXU1",
  "key10": "3HMSFGxKX2UKUS4j5YGEFWcoyHJaAWTWxXbnAunsUx7Z5YLXf7r6ynkKiFJZ36m3TJ3rEfcJzthWh7W41Sn4gFHQ",
  "key11": "3RM846Y48Du5NjDrevEXS3ZL5NuPRqvxowbDHmpmQ6kJKXp2jKu1k4VLoAxWZ3LypetMgRKmsxfh2gYhkorBU8Lw",
  "key12": "2BSnkCZNPAThUgfBsCBDXckokPgTUXKTRmhMAVYUdFYocd2rW1Dsd6BsT96y4f1RbRoZ9YniJPVjDvU7YS8DTAgm",
  "key13": "5gpSX4KqzNurp6gVzVZfRWDu3DASwr61jRNU8GA9vpTmsRRX5HiNc3ycgAoMRDG46ghf6WXqBJ9qGb642vwzRj4o",
  "key14": "4KGoG13Av7TdGrQssXTSMni7GQdeLyAtJCj8HPK7s3L2BhsKDY6FYndKjoCWVwuJFKuj2Dh2qdKpATs7tkrUqdpD",
  "key15": "GBF88cvQYsamZc36vxFzbS4jitKLw5CJL8QoK1XnAeLKJmCvjwbfJ6cGaS4WVdsvShFWQWkbYMaXptQZcC61Eh6",
  "key16": "5fzmyaeqzu4HSZ2g1mEWXqrL5RAV1KDEK2J6TgSJbgtoRgkbfCbsWoz8MZ4o5nGLiU5ZJK84QNy1nabKm8ppBhn2",
  "key17": "5Lu95jzm8Pyi3tX8RLeYffBuQitDViPZveg1g5uhojukiBfS3zriyX7T2xVd3rbLe8qDUveJTGhQNrzyC6piTySW",
  "key18": "3aeAWabjHoZAM5x7FoQ1uWkxaWYmryzNEgJhexPSWUutqKVzsVdoRxuAHPVdY8V6Yodus1L8wSr8iP4x1Foc1LYD",
  "key19": "2f7fZUAtoJGfJauhHV6UM2k8KFmadXTsrSjiEYEp7AhhtBTMjvhaub2Q7qcoTm1vxmvhuQiqTrxV23jNyro7whoH",
  "key20": "42DA3WQ5v2wD2iFDPS5ktZFxTxjxgw8ZtQaA2A1nqRQinr2rKxTRhBe3z2j7bMt3w9DYjLJoRHqV4p52ZH5b8FRK",
  "key21": "23kZe126ZfwJCu2QHgmUkqvw5TB2NhpwxaGHSqy54yFb6q4CNqLWbg31Q7h2rnuWr3dGcSegETQHT4rKzQbxeVjq",
  "key22": "4jMLfpXpRWnbDPoHyVUpmqehQxwLr3Lz149exScimE6gKitKRotGzCyBLiE9H3gtJSMARd3CnTqasUYcYSVkMYSk",
  "key23": "5DaGChh4dnA9eSusSYsfuYxL6WZACvew1ous64wcEXt8ynTFXwFbePHJ51KBMjTpCoiB3rW4uHW32ajvW5VUUU41",
  "key24": "5XnYZjcuKZdKu4NbtAdXXfsZfrwrkc4o73qPqn7dM72cvmVaZx2MGLbMjg1ya9FKj7GSjMW7afcdDo9hUjD717hT",
  "key25": "27q7n3JstMbC7cZZ1Tp5weLDuKh91WGppvjszhaLdcqoR13w6KbAasCBkqq2kDfNt7id5Muf7mBYwtGkou9RfbKo",
  "key26": "22VbpmE9jBsSw3E5CusR81PvHbt2sq5JydsHhfdi1ddFfHEbF9vTLX6o6om8siXndFVksKJJ3VyiCthVUNJB7n2k",
  "key27": "cTLTCczV3QV1rC4kjLMyi9DkkAjzNjNQEigXtEE8fxzz2g5waW6f1DzsU29tMoQ2r34nEacZRhiyjXzPQ2ZzgKi",
  "key28": "uJvvVU3ezpUfcAB2VLQeTLUNDBrj6MwSF5pAmLgBQQjqJgSmPWvLz3APVrr3drPZEKkPtmT2wT8KMikdeNRGT7w",
  "key29": "2AqNc9Lb6Gsnm8J29CBPiWg9b9XtgZ5J9SG4T3fRaEY9FRVBYoTaoyrZtPxPtUZMvihYrLNBgrx3Bq7JeFkDMHHG",
  "key30": "4qnr9LcuUEtUZTCqyF3zvHHb6QgGnSZa8UQoR5ZmMAwuWJuJepLiY6HLcFdL8XyGXKVUcCzHDWbVWHAqTsd63hT6",
  "key31": "4c3JMNi23DrRYdRaQyTbkRojZVD3gbBUUf3a7n5ifcQ5kWj1aCt9zhPvW3Eze8CsPZPLa9PKQJK37qf2D9wc1rbf",
  "key32": "N3NiivLivEnjTR36TinrQdmdvkiFZMgm7TchK5QB2LuS3j9ePWCkuNzM2V1aA8tSp5Ax5JfwmowHpghAJ9FrjEP",
  "key33": "2GuEAHmrb2dpZvvjxWy8TC5pjaMf9Lkx1peyXJzXmvXWmnF2ZaC9LnaKc6MsriG95Hd8iLE3czLTZ92WH5FEVGXJ",
  "key34": "3TKr2hum7cdPERMvH219CUfHa2xxuNRiNc6vnbmgjFHW5QHz879Nr6UZWxuDSXCrFBnEfjbjje9MacXJQRGDazJB",
  "key35": "5JTpXBPMW3qzVS4gBCS4z1RtQfjMMWy6YsZB6Xwjzp9fmijj4pBEjT7bTFwspZhFygMcgrWcy8wfKhNwKcAqbZsU",
  "key36": "4ebopmDVpkYNtXC3rY7qeaHvQwFSHzVnZ3qKLpPNNKwt4hWgyRGpxw9rRcWfauAts7zKTpUBgUHbthX9GeP9QeRH",
  "key37": "4hieqyypuboj6v8Vs6vM7wtg8MCvzAuhkopoL6kqDXghWAhmknc5vbyknY2ivU72MyqtWocYy5yLyhTFveYgbx67",
  "key38": "tMsNVoucJzLYKAzn5B7QKxrsRpry3U4hoEUmMMoiuSLHdYutNwHC9j2Vf4juztHgriqa1CSMEJPF9uDZpjj5JdS",
  "key39": "Dj3a8jqho6Zw8YYFz4Yu9xsXn8XUtWkcXWQuvo7o3FGSxXnDQKQwXMcAPgNHvjbZaSuhU8xymB3hi72a58UPBnF",
  "key40": "Mkcqs5syNTMGSbFucJDZcRjbcJjjU6sU7ibEW1GNFYaGWDmxK9TDwXqe86vwwcQgusUksmdY755QUUDtokwp5nJ",
  "key41": "4PYb5pCM6d6kPmkvCwbeuyfKBDtaQtYbMc4sLGi6Jb2mFUHwcesQcDriyVx7a4nWGirZqaSS2WsNLJyNENaodkKZ",
  "key42": "37sKivtTswMtGCq3YzEmrSjhMszcWDM5f2wWCKRKSRjY3uwFqJ3p1YN4hfrGWEG6jFYomvsYD9TJAT8L5udSQ5Hw",
  "key43": "3jEqEWw5ENM8ZpzWPufJLdqSfUH7x9Xh9KnY4yFx5bpoQuNmHiDVJTrwVXVnXKVTFr7Yab8q4uGRT8tAAyZDCuGW",
  "key44": "5SE4mSUgeURrGgiJNyk7k5WuHbptGXxnQj3y5AfBEYhjrsM92hStVsWrx3y3e9vTgdRFACtb15QnWJe5CaW6iaFw"
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
