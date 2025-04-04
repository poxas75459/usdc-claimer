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
    "2W5FBN2TXR3QfjvASwhBhZH6NUoYB1XEWybzPmD1s38NzWzLF4Zbe39twwVbrysFeYMHVaX3wMwJoAqFzYU81my1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUjz1FvT8zGkZPUDsJem6KEpBa9scj4WrSWTd5oMJdKkMbsCob7jqXWmhmMCLe4L3WcstYrtMAAFSqBtd1uhtx9",
  "key1": "pXg5pEy5Luth1cUFr8AqMHdzdavEQ1b9k92AEkU21TJoNFjMyrG4iAFiJbycBqj6aUVLS4A2Hwb1LHikUtHzPh7",
  "key2": "1HTpzM3KRAT5di3FWMkLMXYwm8ar3SGBjnxxVPMug27FLUH6fUANXqS8EyYZAY9ejQsQhJnuikF4BCjjUs2XtaS",
  "key3": "2QMrqiJPxwE1pmc8aKGq5DpqXnwVxvU8gUeTHnN7wnRVtHv2mQnCUN9hNCgzbq9Ebu2qY646S6oCmQ3jS5nEaMot",
  "key4": "5rNeEkgQg2XiqyqAshHyqoj5bN9LuFwcJgHhd25j3KR5L4DfL2TAr99iXouHf4AhhVSX7qH4JSf8d3Fhwi5RHKRG",
  "key5": "fc6Y128HnQXDbTLAZsFyEGa9LYEfdfvoKjgDEMrrXcGjr49JUdbK4ST8GfLnkvnRDJ3zKQXNmLxZKe7feWPCEcp",
  "key6": "2UEnSJDwaf7zikfMyaypBM6qcZtvyn15fqc592uub2Wru1J9Nh6nUa7B7pj293D425ofM3UWXd1k83QCH6XkBMj3",
  "key7": "3oQAKbV9yUwVBWC5KdktaVrpK9hHFG1xVJQEc9oWrngnPs3nXhMDin6eP2XoLzLjuzkwJ37iAho9NLmU1LFZNGmY",
  "key8": "67NuDxGnYijbmWuUueXHZRpivBRt2s7HmeNa7dqrYTQbnhH1LzbWndbMVNnagEQXvbtVq4b3jrodzZUrnx9S567t",
  "key9": "2Fi1u2PU8FWYboLDpTm9TtzTpKMTiPmxDHkGt4uic8Bk18SK1QtHtxF8YrigJnxKaV81DejjX99HmZuyLRKuY3Xh",
  "key10": "BRy922Ji2QXqVeMqWuoetUTW79eNnC5fsdGKn8esmw83AfDazTcgVaJgMwC5bEDHWYTx1ns8NuffNgQYt4qHoyz",
  "key11": "3H9StSGMZBt6emRqRHxLCAMJpJM1S2zMk7QUMHhSNa7WeNLC6CSrjk6T4xtRBPRdGUKqRJMwDQ27HQNcCR6RygFh",
  "key12": "5TsayWVMKMhqgspmXfjAhyJrxEpwpXcSU6ogMKYAaydYRyArqMKvZ1XVNwbCPvTpEFrH1ZSkp2LMxgGcu89QxAEN",
  "key13": "M7quAoSHHWFpGriaxXdBr2VBtbi53MhQPyBCniv8BKkk7Ku4M9fZNj49LUT78iiPpFY1WvW9x2sWqhB5963cHDV",
  "key14": "85zrpRrrLKULLiRKAiF8DRfein3bmUHULSL2GYjsKJY52Vqj9xuWVztqC5kxwx8JckZaN8rQvFVh1CQudUvhLeG",
  "key15": "Bz6exoT7vYMyBq6U1AwUViYQZCPT87DcSxbPY9SmUMsgmC5MUFfHeBiKJ6ymb1UnVAScuJwjAUF4USX6orsLXeS",
  "key16": "55WGXBsivmpvFNwdXdGgUKpSpky2eVfQFoa5YHms9WaoAzqKRNSsiheTkq9RpsCpWc9vc6JtyyPhRWroEMq51s5q",
  "key17": "YB6iRZjTadm6sCjxQMNPoSVnMF664BvkuFxk4QUR445prBJVB9C5VKf3fL7MtmzUVw6YUtMWrfvRMLrYKdDeCdu",
  "key18": "2prH8oEXwy6EtzeV1RYfbywa1JYJQnqnRTDK3rMkbMRtnMHYgT83L1B4SSoE1y7SH6Vcgs6MpqhjqSX7KUtbMTvN",
  "key19": "DMp8YEYA53bXHenGNFhVo3LtQd8vEmCgqxS8Y8BEzJpZi7yUbXVKnQLRGP4M3eFQ58g7ifESn6sbQLfGMKv7C8i",
  "key20": "5qWMBW4pvur7vtv6kvi2Lko6KnCuv7SpwZkpcd5KNgdknHXEwu99uWpZKtdqDztX6FmAJdm5XYedCntR2Se6jkLj",
  "key21": "5yTodtmCH7oBrgrwH32mDbMePfeYkcFrpdFXeYSCfcoanHKNkAH9R65n2DDkKAvUk5deJPeHTvhEncN7VwqgcMh1",
  "key22": "zFjuQ4cpugQXEYT7ioQNVdCkegd5xWHvUw99umC5CL8LSmD6aryYGZULFCzeFusi663Lwhj5QBCLFLHd8HVNc1B",
  "key23": "4N6Gu4vESNk1isUQnFaD3RjhAMRsHwRhs1QnSStR7jLbefVeoUpDP91zEdLZLLfhtk7yhPixEbHoq67MkSTJQAqa",
  "key24": "2n42DGdbs3W6mp2t9f9YkzgzrGF2EMz4uKhb4HXeYi7zU2VACNohqtvJbXRZ7v2PEBzi3zyzmkUi1MziN5PkYPzt",
  "key25": "62Q3KXyHdhHr79eewCYEcNhUyJ1EAfocA9Q3wgr9Jj86nm5mqoDiwvQmaxq2re7kPooCotamfBv3Mkxx7tfmbnCm",
  "key26": "LFpMr5sBNFM3yVdA2N1t9W9atpmfYV92jqFKm3mc8ehRcCQnFNFg6NDMGKt7J7wdFZCTrJi963nFRQEMxoKuaNN",
  "key27": "3VPQZF9qpQMDRPYZZVhzX7T2vrd9Cgo2oHCymcU8pcGhR8X6Jg4kuLyfgyujHRgGXbAERqzDb7SHMCquJ1q9s5EL",
  "key28": "28gZF5q83oKn6GHMc9tcLV5N6tyqDXypV7vngimRMXSvBpbfijiALKygsyb93gkBKdjRH7e76Yhp8moq722LHgMY",
  "key29": "5Ye1R7uYYMXtK6V3Uu91bhqXULqdpAsk6VPynPt4bt1TdNoYcQRKHDUbdYK2XFLJNtuS5j5YWpQM11vgg54Qrcuq",
  "key30": "2DsTW9bcWi9g68YsxgbtH862PiUwRELrGXP2vGbCoWJZZB6uAzHNXNyZtmSHB9bjk1mvU2JuguV9HeXbYdGD5vaT",
  "key31": "3dsXA6PgkqzStmZbS99BvJXf65S2rgnpQSKZEk5FpBFwgzPTb8V5Hqf85MtzBzLJ12N9HpMjdQZCQk8QB23QYxZw",
  "key32": "4QqXgeuReogquSaQZMFckTxboSPP2ZdtHDy2qVBZ95GJDxSDJHjsKZA8vT8ZXyGLCe9hDZYLrYPQ6fYm3ET3bBNa",
  "key33": "2aZs8KyNRPwRxNXXqd5zRYVVv9x63LnnUbdowmXsi5BVApAemyjRaz9KVLLrm26oCZJQSNk7PCf7iQikrdyJKRBs",
  "key34": "6vU2jvrMzsMhBrsYhNRnJbBK7HySDWoCRfsCnG7j3Ahwzu8nbnqKVW8yCo595xvT6oL84QDbaU71B7nGuE432Zp",
  "key35": "4fFr5ec4fF8qqyjwoAvFq7K6tQcdLCPR4B34tUJfNLFuLxoGHRiHmtyWriaRsJMVxyUCS9s1KfKiGFr9nnW2TKaE",
  "key36": "59mjrdaBtDu5WYGE73Jp3NpkYD2Ept82VkLdTdCB3cHZppViPAB9J1WDCfvgUNq5prNCdEVNgmvfr9Syw8aQ4rov",
  "key37": "4jJPfyTH2JgkCrgzHuRK3ZViTpa4PiiV7horS4jsDcUHw8mgAqefpUJWpi81wC51XMYFNVadj6a7zKXuXKm9Yd15",
  "key38": "5XTjnYcBN3WNZkyUraSkYFTR4ABhPgq5EFqSdGiVj6yZ2QKjXs5muPkT37UpeEwKGx4jo1k6vDtdVzxRmVfxDxoT",
  "key39": "3Z4MNSZrYTGH2UBBCsvDB6UQMiapzHLwKu28iaB7HG3iQQfcL9wt8VuM3L46xMvcbyhaFxTGCbaaVN39vXqGWrTd",
  "key40": "1bqJfd9b2uzmnVcDYAitqG5vwrPUQQRNxuEC9ugp1GCSNuswojcXYnvMWakFd1bhBLU9Z55x6y3W1ETQ6wvemjE",
  "key41": "7y5bqdP8djsE4ydhQzZssNmSBEZw4qwoY2xw5bChJcMru9oba8oSBuhLqnLk4t3oxnunGyh4djbjcvhpbywWgao",
  "key42": "2SDpg6DPCs1Nv7FXQ92s9fXebyxbxizSyJCUQQRywsURtnkVq4x6jwunr718ddijYCWpV7by1rqkXZGNRmRX9tNm",
  "key43": "jKVn5FhMGrwtmWrZ8nkH4bDBU8JP1vcCbpE8gUreeB6XdSVJ6NM5vAmBimyjsQRsjEJAdnPQ58hYWsyTcu2DBmp",
  "key44": "MzGn924b6tDnHjPKcWSMTMc3YaDT2j45Q4SPthgoperJQgNrTVmjwqLr8pdo1WMbJiqirFwrynJ26GHBBdatUmA"
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
