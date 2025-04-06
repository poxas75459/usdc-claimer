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
    "5N2CaYZRjwrg76vyc1CmFpYb1JQPvx5FgSD7mTQ3sFsjbVedRYvkgPmwxHPwSeU86hFdRcJ3fyKAZVEyqNbNHDpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YXFGPm2ouxvKnwemGzsTDx5U8EWz6Fin7KpXLF6ysyASBxtm9Xy9Cnvfe69i1xDzvAjoczcCGQeJHzGcTEaSpz",
  "key1": "j4GFccVihzspCtjNzN25EBKG2TGvQ21KGYPquqbn8NmMrxjXmzHtMPZYj7kyCGtSJEAq3o7mBWkEYHj3CHv6gL1",
  "key2": "5KpzLnDupcrrMTkP9Crdk3cnZUFD1kJTS97dUw3UZkNzfZYGy4XLsGmtoTmuZpgt85HtzzXBs8sQgYL1BiRGT6ep",
  "key3": "dq3CWR6XSSZ7LjL2Pz8CpQcphNsCeZkw41D3CkWVnyESnasM6BHQp2soHLPjibYAau1ZQSnB5UrAkncaLumhbBp",
  "key4": "4Htf1WGKijSApKdZJeKZxnyPeUwPKQs1qkdm3Z3cCHEHGD8SNFTBmCd71ACKxSmgdX4gp2ab6MqocXehRbbn8bxR",
  "key5": "Ri7ZtGFhM5BP1Z4fVLKkFy8vrmZ2XhuDVsA9MPSavvKUFtu97uT1Qb8vPLqRCx4KJV15FQbXzE2wcRdnGytFbYe",
  "key6": "4j6P2CB5ZSFXNMAU7Sg5KgkGtVbH5A4gDBUNWqt7hyx7ckqwn4f9bJT4Zrqnn6dwPsZquD438MWAiXcwHioQT3tu",
  "key7": "9tiTrkivjWz91LU223xqeJSXioMT3ZpaBr8DsEH7MrnbhC2Eb5pJS19Hi7CDSyweFKAPEkfUXM13TStwWBajo1g",
  "key8": "36kerx3A7K4sMA5e3Mp79jA8PjubBW3Fed8ambxUZmMNt29v7u5zUw7fbgF4PqS9MWYghtiHe3xxRYznuYWcSMNe",
  "key9": "GT9X8vtV9S96RLD52f88CEhui69vwYZVzLgcu2cv26SNt12SsG5xSkMunJL3UbUMDS9jxVy8WdUjAXbpYEJcdfe",
  "key10": "4AUK2zDjK3Umtkhs5yARD9gndVe87yukjsgwrBjyTTDogG1u9UM9pH7i6vLwQvSHS9gRX47Njo6LZ6CbZFoA3MsA",
  "key11": "4jjpMJwWq7Q6NkodjKPT5kkYsKZzwfKCG4uGdbWmQFWuQ91nvRR52GjS1L3gtoF3fLDmzXfoirFpj1h1zH4PhW36",
  "key12": "CHYoTsNSGH6gQsuoXFRHQafwoDWvWdPX5UATgUbnbsoaSU6SkUvsbo7WWQNGv7SFYtPd3PeusuXZpWsvZeqsyvM",
  "key13": "3carjDCCpxN5LAJPdxkARt4tZzVQN7EKEwGu1wnMNZpqKu6Yqg1MafsW4FEqCnkyP4jXCYuUF4YehVwUhAQdvBAi",
  "key14": "49pvnHG2UU8uYAbnqwmeducAzVzpUNp2kWbnPRgoNbgViYMm671sfb1KTGYmq5DYux7LHx1KQJhvgcdtqtxmyrUr",
  "key15": "4uYDiEu2eHKTXK6TnRM1KMZAyRCAMod9PpWAbAugcBLgqspifR4gRRHkEp6nqZxz1KYZQVtaav6K9XHB22EQQ6do",
  "key16": "2siaW8jdEKEXeB7Qbq69U4fmQ5G6aFF1NUvsnm4TifzrQg5R7atVqvAJUGYdSuZc1yMwMWw72TSmRYVYggoNwv7F",
  "key17": "2A1iQzzPCs7CMhh44tKxL95KVZa8ZjBiB7VmZpTiz29F2up8s2XRNgMmA4UHY8Ecy7JAZDJT4DzgQ2JCqwfA5qqw",
  "key18": "3QqYkCmLbT6WiMmdzQYxFwz48h7jHdLmEXGeZJF9anw32AbY9qLLBWdo2meT7UJJWUE52cyq2Fo6MQiFxJizzzFi",
  "key19": "3freUmWfqcyukp1KUZEiQkPQj8JNz4Puchkeu6DFgy5bicPEUWANsfqHaFoc85YMAmcbhnzxUXzU9dSyZSnuVUvi",
  "key20": "4UJufgDqKKYKzxb6vy4pUjLXxrKCMRxVT5psbwdKtNxAeJ7QTtKQDL5aH3sqEKqDMMoUnj6Ui9FLWhu2UCyGzATS",
  "key21": "4PYfugqrk6NWYc7wnbfyJETNE623o3SLmnpphBzWjbmPXW8UAtdziZ75aFig9vmL87heiZGuLvMF3YzWHMz48w2m",
  "key22": "c97dpYC4fXXP5nppAqZJdXsBT2YdeyoMeyXDBfEfoTtJZe6HrymTvMEU25BAGJZF6ZtNgsg4oTkE8XqY3eDn5qP",
  "key23": "3KtuUvc2VzKTKzJi5eZGkbjB6BK7dTX3tSrsNBGssV4JXEgNBzSM39XXHtMdSWAP37ddYkwWhRZQK7Qg2KQ8zczC",
  "key24": "63wJ4aSr2v8rKKE66QreimJfSEGp4zXknWCujPGiydgapM92PpcK6wZUr6LEoTXww3qQ8oy2jQ74zx6LYuxHW98G",
  "key25": "4D99e2Znm2z2NLWKfpgMSuA6ix1tbNk1ECcR1H3fvefjjXUdYmJSfKgeC4yUfTMTFyXXiWcMWgvjraxjA5bsQwjx",
  "key26": "3XmwL4JrQv8XFB9mPKxu9spqcJnb3XCct6fyRboaWXTWUdDAxE5cAkvRjkUAmQ99gbiu2YbRRNQzbAP5nqJcCqRm",
  "key27": "2q8T6vREZkSbddF2igymMNjYhpyEBtcgt4wpmgatiWjiHGg9YP8YkFKYTTLAXXg97AM5UcS1wJFH2GbyK2VEpn28",
  "key28": "2JRvVzVN8QTz8n9Xccb8LQcqGRwuCh6wKiZabnTQbRu3ansYmf61Ga5dBsoqVowPAWsFVfQuykG5PvMrSXjq3bAT",
  "key29": "fVz7wmPfBwikab3UkYcxF31MDrZqPrzj1XPFdtHejEsMUHjjYu8vjQYiY5JBceYJjfREeBB8CWEzi4MQ1oSj197",
  "key30": "4XXXgxMmZ3sFRTi24D8wGRSaAj32JVuqkmRDYNaeD1jyEctKhSVbozaNqwYzMBk8wE5FZbe7B5u8jgG3qEDNATzJ",
  "key31": "4rb2ST8MU6vuRfcdyQerimxAoR9BDogGsLLFwnESuFBiZrVky6dVDbo8JoyDQHFmHKYChi5fz9EFRdXgYUNXh6r5",
  "key32": "463TaRDdsyA7eaza1AJuDBG4DMyfqh8bWuhKrfGzYE3sRzqpTyK3hpGiukFh2zD5nFBiZwyUWSkYUkGukHparAmk",
  "key33": "3gjsXYZ5AF68QPUypWe4n2UTRCuzh8TjHLieR2QDc1XofoozTSafcGJfYFdPhQp6FMaenoP5wTmSBvg9X9D3mbeD",
  "key34": "2L3CMCGSNHkZViDS2g77Kai8YtJXzyUPJ3Ew5XHTV6XK1sYxRYaVqcygGiXfv92RNxXjsiDUF2UxzHpq7jFdR6jW",
  "key35": "3jr1pM4D3bY87oP2RA9aXTz8VZrgVwSp2iUWqF6dr9YgpRR4QMxeuBPdeVcGZhTeFFArQTNHHwkGtFWPY1cTo5mg",
  "key36": "4HHx1NjfdkZqz2hGVuHpVFEGp7TRoNehUdug5xWSeifHq7A631cunReufLfe8AEAgxdM5TvEphLUEMVmgt7BjPiJ",
  "key37": "58MsMyoaesZUXrn5KqFE6aTebsaaidxeEia1NkxthtZW715PqiPsq7fvN2gjPeFD9GmW3w2dcckScoS2wgMSJQTt",
  "key38": "4hYJevxS7KWSCkoeUyknshekrxKqW8jxJqfErnQEWnLxKrvTTYuSFewxeBtXpMwKAFdYDT2TCdP99QarVNpXfr64",
  "key39": "5TDfjNiquy9brjs1CWYzHyk5C1kBJU6LYWAk3ecBNrCBKzupwKmHxhNgTgk3b6Sp5vnzKhFxnrpDQ1HqgkF227Gk",
  "key40": "3Yfv2A4fViWHgFzS23eA6RKNcSiuVBseNqAPr4nn9f8G2j6vxK56GAepq43Z8N9w3F24Sw6rTfHd1WhzWecWakwj",
  "key41": "audgV8XbMhKW7uDbe6DoqLetb5PVJL1bSYQSpPwHnFqUaHy1Tqtp4PPjDntC2tzj4ygBSdKFk18FWrMWAYtf2gW",
  "key42": "3oNiKXXQD6fqxbEXMYwXQtLbErdf3Pa1rBbw8LuKPQHRv9wbNgbTKy13DPA2UBA3H4FnZEBSqGQL368hmR4WeTBP"
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
