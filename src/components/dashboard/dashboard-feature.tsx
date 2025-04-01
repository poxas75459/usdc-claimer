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
    "2WwrUD2aQqv757x7moTG4veauzANbyXAuh3SBsK2uaUUz9pyMty9bGx5TYuoD5N4zBDPv3a1w5hNMcQgSc6NgWGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywei4DVSEQnDWJhnpW8mFQrazoXWRL4UvpYQqUDMSh7GBjwTwCZM5JqUQsTkpikciRnDpWYjntcTefCaziADJYw",
  "key1": "4yBPeM5gi9cis8bYJBbNekxK5HtUUtNW3zk23Ecd2mzjhNzerTRMR338H9d9a3niGZpERL3B57MskfbN414zxn7u",
  "key2": "4jk7Ewk9syPJanEca2jR53mH26FV2JtCGPu2LKsKaToNCjFdWJc8E7AJAU3sHBhSEHEayP5kffuCtwG9g5GqqRfA",
  "key3": "2m3mCkgrWnVJQkE4RfYAmG1NuuGZm5JizQp5A3D2aJJFAfoMzDgy6N3wLZDqUwHGsA3JXDWq5oj11LFvzpAZ5bT4",
  "key4": "5oTNAP2P44b4vVaPEUKigse9e2wzC6UqAupxBqFCAGsQovU37au9dSVjnHBqcGxAgAJLUapygLvL6YVonm2QGyEu",
  "key5": "4fAGSVv649ZMNsVc9QDs7gkK8PqjJtyEAwvyS2Su5Vuoe8qXvDM6JsYEhzZDvbJ3eCDRwDCQLJtqPHQp1ZK6P93G",
  "key6": "GhFsta3uVdVxJiUnDybX83ZNhnWCmFaTzPryJFBUB5PaxAbEmtkHgnox2dfnYd9uHv7CLhHaRjqtHdih1HDKC6q",
  "key7": "aqcTrTaLMboSKtUxokMW7CQWExiZRfwhrYTYBmKK7otiFGJ8PNxV3XDQ3VXxhhBxaEYk6SLRNxhYugUUyQgZihN",
  "key8": "WoQMBmbFTT2qdMMV9Uw9WTD9S4tZKUY8s3jMEFDbvULiZdyZxt3iqgRoE5tyDE266i7QWj5zo8vyLZWeC66AMWK",
  "key9": "5iJYDBDW6NMrULWf1Wzkumri7XWMyTT55JJN5PjMJ54dUaUufoi5ErVep889HgCVhAoe547nZLRuKoASVi2NNap",
  "key10": "4AzWYhfdKqKLGbsZv1tF3d7qjRqFkSLxjs2BGm7ygexx9s377rEHkV2H3wnezf9iv1PeTstiNmQpBXCEhqKmnSAq",
  "key11": "4uDCEYEjphihivuKikYGaiMH2BMmREPZLvSs7rTxxs625k5fSbz2fmT9LnwiTcNnSsAc5XUbetgU3faRpGmmtvwx",
  "key12": "UCUgK3w4V5AsTgWcBA3HuQtUM1eFgr2MvHBuMus5tZpNKPzZoQmVJGvWdPQMm3SYVu7YSEQxtijSq6bXRzNCo2R",
  "key13": "RxrDjLri526g2G3B4nAYZstU81b6HaSm47Y6oHssWdmGr1EeR7q1HNbV9nZw5aynaQg8vyvCbahp23wZay22cAw",
  "key14": "WZZ4aLjNaiGgQ8SHet9jk5Z9fFHwQSdAfDdf3jCRHav64UCM5jE3ngwUJ3Mfg8YrbamyUkn8vrrBnMzHr2YAMfF",
  "key15": "fBSBqZkgfCuVcSDuYUy2NkjvnmKE9WemwPL4bKo3JaSiUAeFVVfmTEZo6V2R63EGJoKN3B9hqrDAqmtwki3kZry",
  "key16": "4uBFFB9hWRa5z1DB6XdkuGVjhLNsQKEaBXbR5WuGkUSYok954S1M1pZy2fTcvqESabB438JHvyCTVrrMMS3uuuFC",
  "key17": "4YQ3Xoqq5bRdZunzqZr9ftaT1w2KHhB3tPriYsFfcqUX5L1nva8LjptwoRRW4Yii5PH5gyzuYuC8xcyQeRWRai4L",
  "key18": "2qz8oQrjn98L972H7kZuSsK3ZNyMDYZaGrssU8r95f5RJMKmyzGYBjv82ZbszzwQi5vmXSdMpfCuwBwGapBYw8RW",
  "key19": "5Rrrn9nPP4mnRPLB2uXMBrsMkgbLwZcqjYGDpDWrNpbG9WXqgqUT1fv9d1Y5KxcbqgvocZsu3417uzcA5hS6E8hW",
  "key20": "3fq8S9KNxbzMdiDAScrbhjD7NSFfnDmn4TDu1NCUu7TQwTN6wxRQeuufJSwbFxEiUmBQPv8BDrqammCz2RkJyQwv",
  "key21": "3mDEEQqomnfDY6mA19sSaEzSF4C5aTTKFTSQHCRdiGiVYAPmYhFJA7BaFKmnjqY6tLs4ZC7dyw9VMSKi7yUZgSgc",
  "key22": "3Z4Kb4ffNbKqmCgYK8FzKbPt8ARXiMRWTxvTkrKZ1FkQgyjRmNaGiVvogaNPA56EKyaLngsC8ubNXNV1zesKijni",
  "key23": "5CgLmhSQ7ifG18uDBJPzFkfh9ctuFUfwC1VU2vTkh82FMtxkv2RFJoe4vqx4C58p23Te9qxvuDAZHrYqnfWc4WTm",
  "key24": "2hdsZfFHsyijbGYvcbANJDDAaoUhyGWv5KRCwixB1oSjsTcztur9vHLdNJK5pWhLnktseeAzrZUbF7Q1axbgNVaH",
  "key25": "3cKfdByGuxWBeTG4nAHqBpgZPytbejPBJ5vQxZdnzqciYSQwcTEoD4oDsXHiBYcsRTiXdxBzB5tz1Tm7DSd3nTqo",
  "key26": "2suPrWBAYgXGBQPpTeYVXuxuLNMvU2kEBfPwX7vk7gnVK7TQDTTW4ZZxoQVh9LWNYd9x6kzHNfDzCpZC1nanNkVJ",
  "key27": "t7Eg9RrR5pf16Qdg18faDwXU7GFjhUPi8AjonDT8H7MLEoXpoSMPcXy5m9AeWU7WWdSnUbCznKrNVHsQ5F6D83c",
  "key28": "2R7EcvA9Uk1YyQQEffK21EPDkZQdQbRkm3w5rAdPotTjhWMFiNLkVaRYbfSiP6RwSQ96W9ChnMwreLTU8fK8Cc8n",
  "key29": "2gNx1dq6VxFqC9vkotEgGAEGGFbwuNbFucatNegyj4cMtAUa2YevgdR5V3FNqgdL56k1SCa4jQoLgtZvSh5cQSum",
  "key30": "56854Vzb2213i1DgjKzgCyZSsZoC73gBVRH24cpL5PQyPjDpwZJz5SU3FbE17h7aDpMZFCVcv9kQsKGqwAbx4NAq",
  "key31": "9aXqCwPpWAcHwc7spsEWAKCW9oHVxr4jzZCkNe776cVqKPSKxA5S2DtcQLw9XxArdjNqg9mVhtYeMASwrV2MYxR",
  "key32": "4Gt6Do5k5gkbgHWWrRvDEhmyoKAYihUKz4c6DVRfUERDaWxsK7QJxbQPX4GGdiBjJbpa3d6HEfbVVr1CtxSmqGsB",
  "key33": "5DzRk5Cn6xRgw7TDHwcUpvWTpVE4ZT75yzYAMj5BfwQe8KhRh3cF6Y8fbMtbN9N4LDLjibhapL3xUGQ2R8Jt8VDd",
  "key34": "3ZzimNp1nechfeXM4UGQViEZYyN4W7Kro7vQiCtMqGDTQy9NnogRhQyCapnDNDkneNqUW95WrmqE5aypsFpKSV3j",
  "key35": "21PiaQSmDqpzQ2whHCVwVxbbyLvt5YEDh2frFpQZKdvt3g5Q9SEeGyv5EZDfJrtoULnthu28zMnE5jaq7F6ee81u",
  "key36": "4ZpBHMzoKpD78FwCxQFs1tsxcWFys5KJ2vQuUSvjqQwEg1Bw37uWgHyzGgvqW7SZwkVTYbgsWUbuJf9p676hF38F",
  "key37": "2dpKt8pwB5tUWRxTkaN37qAKZGLikqPDYW9fxhceBsusWfm5WLUrKpBZZ1FAPeYSKVgZF8THNDFQL7mJ37yYfTsg",
  "key38": "31duUWqSEq6fVc1GQV1y8JQMagSE4wnB1j149V1UJVNRLvyf8BbfQFUfa1AZeKKG3JG4mdwh3mmmgN7Riu1RcyyV",
  "key39": "3fMpp7v1EKb5R6XxnFVToc6VndekveNMfQqJDY8NLpQA3FtZWkbkt5Q3EmFzjXHER5ecsWm8xW8SsgU4Gi913PAn",
  "key40": "5bykpmvwvhhVw4WNs9BVY8htevtDrNrgvGFYv5N3JymMHSACnc7VCVE1c1Ya1KzPDCShoastRUNnuY6KZ1TrGywc",
  "key41": "VTsX2tGdrH78hmRMz8R1gdRXdcoZRyZEEvAMyFTNawn1hPYDtpLbfvuat9KUtEBfrySdkdq3m2W3yQKAc1qc3pj",
  "key42": "2iDzAYKZGcaP4uBWLfAzzzTSExKUteui8H8mcyK69pxLMzF7cFZxAhXsSjaSSVfLLdBJFSNt1Z3ob8EmYJ5Gv815",
  "key43": "Ni6mE5ieZuTTBrZ8owcx2wgYE1LzjAaghKW2NjYECDaexrorSYjffYQdFAVcXxarDvaRnogYYsahyXhtbDYSrTc",
  "key44": "5FkUnm9T3Vy8nn1iR766mBnfjrDZw8zRtujs8Sh3iEtDEkkk37tANejgSKxFL8JcKH9qyq5Qb2Yv5jonZ9iw3VAv",
  "key45": "323WuGxNoXZSW1DvzcPxAqB3KRcdTPW4cjzUqyEATt2rDcTf7YuFauKKCxSGy9u4Zs8EYxLnt83wE5fAmuYdd459"
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
