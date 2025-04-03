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
    "4rugmR8eXc442U1NeMc9bxceifte7u2tWKLz87L7B3Q2uQoMPduUjMrfRMhMckmjiuv1boRDsVDk2mTVFiDVXzua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4By4zFwrr9DddQQCaEAr5QUDi5QGRrQTVYxPAWdWR6uJBdvQhD16B4aubQ3kn9wpavWRw9d3nDeM1C2JWRviEE8j",
  "key1": "3H4mzBBJCKB3527kDcRiPbPip4k917693Gy2zj4doEVxr6ED16VGYtqSHjRWP742eDHfaReP2V4LsgPmnXYNz99D",
  "key2": "5LSnSMtCBGEupqLWzSGz4Mh4VgT1gxLkcVEaLNK1D9vvELPyHMcH68mQogtSyPncKBbJW6Yce1LiCFPgnyuFPxsM",
  "key3": "571RU5hhBZNrwYjLi3MjVSqPxnFcLK49Pep7VvW8jKGBFPWihumfFwFK4zZyttExdjabXfjEHceeAYsfGK7EM6jD",
  "key4": "3UXQY5wzkb7uqSSUBudHmGxR6gcSiYcHyfMCCXUH3j7bYiX41JaPvrGp9T3wv9NCGxHHWUDex2Qidc9xzgNRHVbS",
  "key5": "4vKPDti75misUpAFHfbNqVXJq3HVrtk5h2da4RPR9kzmYL9tVAAvL4DMwpKPr4kgC1BVsPjwaignH2sG4YhUaw9E",
  "key6": "5z47bL9Cx16Y4JkQKnFwihPrAuPXLcAro8dkFVC8qN6KkTXXJaPnV273D3GzC3d6HeX37e8dfrbDZBhJRiXXJp4z",
  "key7": "4LZPD5csg5kFb4mjgHDDzGN9M8ECVBVrrMnuMrN3uJQWHjDUy85MZnbzWi8ULUBE1jRB3XdBGJdZRznFjvQpNyym",
  "key8": "5hyzsg6aeMYffmqfR5ZpYr1tkap3vBecMy5YSr6gTBcQLSZKM8vN19W17x4UQi5JbNhcB3Mhv2n7yV2uG9tfYfBU",
  "key9": "2TKQ7YWfW5493u5qXh99zBJ1gT5ZuEZbTWXRXouTcRZrRnGboSkN5jEtJe5iJyZU1S7phWJunmVw9WfWNrK4NXQM",
  "key10": "4TubChdQZ7fqiqH6rRTqzri6MGEW84xJPjHAgfnHDyrVGgVVxDpFQKcCcghRYmWEpWGvv3PDMi8iZ7X6r4kGatqB",
  "key11": "53mV1kzkMhZAotenXXHZVhDbHXtfpxV7PTC4HkMhzAGFkSjmYV1FQo7RoibX3opFWzwoNzTybsaZEW3kqfeaNSG8",
  "key12": "qXUGu5JL3CWt9DNKsegHrSjGQHBXnrT2cj2AqGKumzcHg9XTHfsFv3bSfm3j7jHxQYkuskUkziFEU6bbD2zQCWr",
  "key13": "3zbHAwR1aR4Sfi5ecFVZQxd2oUFWP17Qn3ySF39iX6mkoydhKnecKqtvVBksC4xCThL8jMYYXGK7W51u9iGF1UaH",
  "key14": "5TRs1oumeJ8dgBx1manUpaHv6a2CK3hUD2ZFGPbA8McPBingMVATChWLGHCZomkiiK8CszCHQ9pWbRWQknt6EK2J",
  "key15": "2ZPCiFbFAFwWCmSKTtr4smYaLCoAxxxNiaTPgxqCY2wpNaDd1xgFhumTYb8LW2CtRwcP8qRzukJpDCfrjZAeTCPz",
  "key16": "3bJAZBy2ZCgNKvCrY7ap4cJRyEePjBNFYvt9cMD86Eb2rfKJJ1sQR8SJCSm5avmQFnkJ3pxhHxEf8uin3LpAGnq1",
  "key17": "2negPP8UHvh27KdrhNsEjn6EoPv9YoTws5wii3Rrnfs7k2LhBrAybY6nbqfLEdjZLDD1YMSFCSdvHLHGN6zwWcPU",
  "key18": "5qqD7TctYPMxf5FXWAXU1AA5eTNCm4EwR7134JFpBJRpNBpjJochaxSda73APm3w3CisSRTxwtMUXu93dr1yP6cb",
  "key19": "5TDHE8ht4wKfRw2pH6BM8Jw8Fpnrvhf5PJwchAXR6CLWUtUBKP9nkFds6CEZMKy4C81iCGgzM6vm1ChnphFYAJst",
  "key20": "5hYmf24La3QsZXSLHZggr7gCyzs3MZvmusbdStCCGZLCcx7t5nKj9aqYD5typQM4V2vUxJahmPJ1fhmepkHvGGiG",
  "key21": "42QV4aRJLRShb3EAq5EBXUFdLF5vriCiwr7wwnAcc2vsdz28RVq9QkVH4UERnAVs4iTAdbQKMsu3MiWHpRuqtxoQ",
  "key22": "BLdkgn6Y8KR5XfAGhbUikcegqR6rbCp6pNjrLmFuHBxguU7peLCR18EanVQB58Dp9esi25mnPF91SWmSp9gJyCm",
  "key23": "677M9fzfXaFKGM8ntT4Z7QWc8gjphePoxZtrr5zUDeJbpipKaDWxTJ6A4pSf3Wc1mKVAmZQ5CEAVNKHMoBWY4Tgx",
  "key24": "2KNCmGp1r6dbNN2C1oozYUkMsVNhstZNZUQtKGRB1N3FHzJeaCYHNPkyZ6yVnRidc1m3vbSCSeuk6GZEJ6Lod1hF",
  "key25": "2zJZGDzjcjjbWJsLzHAGq78QRESNMca5vrRuL7fvDBefu2cWLgaynTQeEfSfD765ci6o1cmN1v1ubaovCDoKEsj2",
  "key26": "3Mqe5jZ1SBGNiYhEA3huLqHdHAYhX6cSsLZDNcacJobMWycKdb2ivvVUddyd8h635j18Atfh8mzLHTiCKTpn71Ts",
  "key27": "RYgGdzodnudTujNJ5Z5GoXWxPNo4m93PZ8jqAzu6FWvUPdHzJxc5SD1qPr1resuGjJcbffGiouVp8qE9yKLsRzy",
  "key28": "3gA7AvCYA6kgyu3Q3Qjczfi2Vk1AFb6tnbHrxr5dtyAVH5JVhKMN4gbLkFDQvQ87BwvShayjQv2TqTRR215DpXBZ",
  "key29": "43asbMP8sxVwGXjJZHi6PrLrJpUZe5iSD1AxJ5TXKPhvqufXjoAbQFwp9JoNCdWHtTUMrvESCpAUu9GMswuFF2CL",
  "key30": "3fYAkgyFEipLR7By3U62xFrQ27yXUXjdTP8pHD5bQ8UQRFseNLsL9BeBJGnZ2PyyJHaVquxF8r4ZcGwUWr9CT9gz",
  "key31": "4uQnhn2uVaBMtXaMFrYwDKcyVUZHAbtzYCEnteStce1FEt1JS3MUuxUwsmbJiSDoVi9cQg4mYD7gbzKyk5V1sPTP",
  "key32": "5KLYFEGgsMYYi16zW6ARj1B3ity2Pag2pDaSHocWkjGXnchMytJUAK9jr4bQ5rrA2NiYoNPr7z6LfWksA3E7oE1v",
  "key33": "5dnFuWNPv7qzq8UvHLDsumYW7kwfqYTTNeFPArgzgMvEG5zRH6C1Mz5b6E67n1wTabZy68PC91rSExvzMyNYi9vp",
  "key34": "5mrTUQPfAi32DDNwJddwuio5EMPW7pZzsd541rPXQDVL7isZLLaSkAoDkYV4Nn4aM5L5xPaZ48nQmMTKHGBdsxJ1",
  "key35": "4ntMJ5GQXGi1TwsRQ8S8FE2PfSjfpzqBzeEakvrLzHNwYn2LHN3LtypZJ3rr1yT4mJ88xXj5FDLWtpB5KeZHcNJ9",
  "key36": "2o8zMzjWwkE2KsKN9RmujUZbnxbKD7wfM5ZQvsbCQKqUubAceBbDdiCM5jcgk42AiMimzrmUFqd9ucf7WXnfDZrW",
  "key37": "22PQyAyymEvjXrU4sAL6KXwgWFP4SdW5ejd7qBb3yfwixudo1sCV6ezemy9P9gP3rD3j7QQY91c7pMRbJY5ptsDe",
  "key38": "2W31iSfetoC8KfYej23KZGminyrA363cGykU853yxykED1ApBaGbp4roD3AdyUwtbQHntqwxit9poiYHFrREkTXs",
  "key39": "2pcjuzbGtqx7yjnUijZanZVPi1f9NjZerYjfiTzuqAs3hS8inMxNoH5MqSSgG7cMKBaeSwGbP6JyutjdnJv7f1qP",
  "key40": "CByoFYD5tuv4JSZZheTi1mJvemjwnJAa5AcsD169NKEFaRT5LLZSDPFGiEpZLro5wdPwDwLsVq7KdxdEQaS4Zvx",
  "key41": "X5VbAxkqUJLuLccwPZw8tji22HQnEjsTdc2cqcXGyLcuZEEUxTkXD1h1Q1Nt9x9HYi8yCpyw89eQwizyXTCy4XT",
  "key42": "tYcmCTkLCgDTrY6jWPcLkxiGhBjkEVQfEr1HuHi18VkpqjNzuZgwwR5zMVhFW1SVbtMB3tYe8t8vi18DcURZZrN",
  "key43": "4DvCJ7R3NHXZ3K3K1yCN5UgQZUZz8HqMqbitf8iLVHkLfrvcCQpyXy2WC3wJeUHDWUNs3xmBbj7onYcvnhaYw6Mt",
  "key44": "3TH6LGqyuEUSZUKmEUwmQP1rUbkwdiUru5Y6hHWuko5wMMgsXhxMzfT7xtFFXUUAjJmycxn2vqgq4bBc4CRDygvM"
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
