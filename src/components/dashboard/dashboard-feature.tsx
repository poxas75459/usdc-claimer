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
    "w7eoKf48CmCWFA24y6cteoKXD2keRF89kVo7gtxn1fNKvqReMKkrdKvmGPeViLtoXTcEpAyUyZuhf88mz564xUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwMJycE1dp1mStHtRy1nG8vv7zc9ttkBrwETChSUzyqk8hSyivCSoVUja6aEuXg7sQ7FBnHm5Kt9umjxTGDrP1v",
  "key1": "kRcv3cb8EP3t41XdrZg5XA7fcAefJ96iz9qs1KtBXGhuEJk2uVxcYWrWmfqtCG2V1Y79XYkC3A12fSQHXVH2e11",
  "key2": "4qgeryDczdSDjVdyJdA1iHDq85JMo6BvpofYFWCZ33t8kGGzDZxPSxBLFXNN2xpsQanpJE4SeA9cWQibvWPFpheG",
  "key3": "4FG8zi2sZLo42aAny6BdtX6WatJhXCnDyCKRjwuKrSF96iGfu2qCTp9hRYWyzNR6RGZnf6AAZDwpVxg8xy8r4WBM",
  "key4": "CYyntDHd4hYWdQpaKMpw3L2YrCbCf1TLhRGEiwLHqqerohmdQxof1br5ntxZwP2Y32AGNW2Jed6buPFxLuYaDHK",
  "key5": "TknSf9n4f9MVjPi1z2HzyQZWYnYaPq2XHD6pEfv1KJLSfbrM6cQGB1rHBuXUQkzbRAh4jcXagv8HYb5S7rC5Ra9",
  "key6": "5AeT8YTriFN6P4PiVHtn1foYJSAqG5QkD692tVUkzBi566fBsKXWJHj3SjNPYxRD44kRftKNzP4wGU6USFGDuWGL",
  "key7": "48c3zKJmzSTxkDzCAFL62GMKMjsb8YKY924D1JJeBqFP9WwnPsWoy8uAVCwq9ngbiYHGVe8cC3RAnpsqs62ZLPo8",
  "key8": "3TYNyrUFxhL9GDJjbBnV2yneQZsbpy3rvP54J5RYm8KLu6ZbMAiwYXB7L4tkWP7KBLUb11p2ySHyQtGd1DpWvSvW",
  "key9": "2vzEYh5PtCmQCfHq7eid1k7HdNGxv5eLxko8VibNfuabDTSjtgxc6jS8axQkwwAfitmcsERqNTD2bdFdQndJRQP",
  "key10": "2BpdQKNJfWYBHVo1UN7vkncW1UdtHiAx1PUCt7kmTntzbzh9MWiW4ekmW9QhwtydeBxWhDaDQjsz8R6yGJeA5nPC",
  "key11": "2xDZ4cMvR9uG8yTYtvUXRE5abBC6s1uz3JyL5pYvjngPjTHWFEYJTYPoHuooCfBbk3TBsKXMG52TnKqN2bAW5sVE",
  "key12": "DzopRdsapZqh2EiXwxmbzkwBvKhfhcKNkX4QGaAHmxy1KuEiVv1ZYfNTWsvpicVn8EqWduds8oa4Gk8hWGk71xe",
  "key13": "37qZjHUXiU3vbSoXhMznkhCiDztSVEPvw97iCrhcc9f7UfnMzgZ7LabaJigVwnuf2hRazEa1tn7XZd1wv6NshdVf",
  "key14": "5PSqNHUYnWF4Kmib7vZYDdcd6JFMCanXLawvwvju3pzs5py1bLxBchX6Z5Eq25iuRHEzpts6vdbmjQmSV8V1Adff",
  "key15": "2tkCB8Gp5Sp4oWJJUp8HZMkZxmM8SGaddGJfSKESuCauJwD8CzHM5XHUhHuFHBLF8LezBpN9zutH7ka53Erjb6fy",
  "key16": "5UQ2F8sWQtpGhQpzUw22qhQJAd2V61yuX2YHfnunBye4TmDiJZMF39CMPfPzxzMzHRSLgJUudkoZj6FtwP4poDXr",
  "key17": "2zDNXbGXjJnHTuRE9R2FkF3ZqMB93fsfsRVfXTL9C6z3FKaa2jQUeHXAfShoKKE7tD2esqbuY383nRXvFtsYQnXQ",
  "key18": "45s2NhgZjny14xALX1qBaYYUNUSpTbvgo2XCRXtBZqMQQgV1j5FxYuiUWFGpnpZhfjWhneuf5FBV2vU8eS7ejmH6",
  "key19": "USnV2aLPV3BTE4rTZKDYRBfdHMHDDp2SQxpGsYDf2gqX7eRBE1ZcDPCPgLKmHiBpPmLWNhwEvUcEfZvXmTbEJvm",
  "key20": "5YYGoXLi4H3fncSQMHwJRaq2sfUAmP3cisAdqW5nhWyzamFaitdWWBKcnEdLDaYThJtgWLvHtM4fsRaG6d6pP24c",
  "key21": "4w7Mm2rns8dYeQgbCmCheijAeLS4DUUezWnryjvoxJDvNycxskJH1CNSF19bxk69yn6HgBV5g6YMtF15aige3QDD",
  "key22": "5a4Japa1cEX2vGGSx6k2tCSvKQCj9x5mogrLW3qe5vdC8oUeqcr5fjp1enQBVwQt8GrT8S7s83umpGtuS2JvN2Rm",
  "key23": "5MQThQUc6eLmHE7YV6yhcwuCEXVdsdnykUDUjiRsvr2UCsQ8Bva5Ld4bZzcBQewCyqSJrHUVSYj7SjnTsDs9Txcj",
  "key24": "2U3spqcUpK27kmi5mZjGuWxANW8Yxg5zXujLNuoyNRoPo5tDfUA4YrbFADSK6T3ieLbLD9Vy4EXGiSLLDNSBqkB",
  "key25": "N1DCSkPiny4YsWKM49Rs1pTwHHgRri4ut3Ay9nyFCjrQkcfXu51Fq5VEe5b3c2nTaxhamTzGLg7X2SJmAVwyjbJ",
  "key26": "rFZm7RmanJ8NMCxSvBzSdSC2mqBMjRfpTGijEExDtPmSy7YJcQc2EfiJUJXjcLyq4VmdxK7qe8WPXfSiAj2V9jv",
  "key27": "2msZApxMD8hx21xNQCD6VAk583K2QY31k5k4WTMLhybSwgqDAGfLFm2srem5dWvSwRw98L9qMTdYeLAafaWBUrVk",
  "key28": "4bVthy78ZKxVw3TWJUkan85UW5WvmW23MHwp12nambmYJDPR82rJo48pqSe2UNfWy1w2oNn7ewHYcfLzFk4sPGKa",
  "key29": "5hDhpwcA1TqJ7bG7qYySaCgywfQZr3e7nrdk7ro68xHNQ6od4fXoiwvEnoYustxewBufCDEFxDEPF48L7hRtJTzM",
  "key30": "3Zu8yw8g9fVxhMJLsKmxUYPmqoe4VSaTj8J9GQmfb6huKgvs32KX67n5YBy8ug1rNaCaaB9QMnHKSJF3rbCq2LKK",
  "key31": "334tQiZda1zvwaPzHzEiX3j82kAfokiE2Q1Szw8CcxS9kqHfoprfW8n2JoqxYZ2cXipsKwCZwRSmaH6FtMBGhome",
  "key32": "3xRXrv6uz9D2hFfPFMdAN9LjrQAfPZHPw8pzBoX9cC4WDfbhKjf7eELXxim7qHJzNjmV5FZ8QdhZ3qNzhUSv5e73",
  "key33": "5V4AHGFipRrh3pubEWQjkTg4uAFYJvdid9a4S4QTHjA9mRewV47B64eR9oeo17VqcFoNK9mSNNNzBuY7Vp7GWjzF",
  "key34": "64L15CQW2jxSAmu4CfPJtnThC9dsDHDzujGQZS4tSwmDJHTtxVBicoAPHn4oorVye3yd62SFy6NZWnZkLK4TWkep",
  "key35": "vt5w7RkY2bvnAXTq5oDiQhSztVsdMYBz5FQ6eY51JZcH9QZgeQLhkD58aRmg7oiUsunvzgsFe6kKWm3hWeuNg3e"
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
