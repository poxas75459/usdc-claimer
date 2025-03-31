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
    "44y6kVacvtfWjo4us1gbuNhcxwJzJFVUVDEutq2WPPKmA7g1YLPXTCXKWbP1uhFa7or8nt9CT5fv2vLas4gsUzAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272gki4AfGsKBCkH7Gcf79FWr3f5QQ3k35rfvR8THRPTkbaEXHLhhWaaRXNHA26SH2BoLco76XZZxy6VPgEpt4pS",
  "key1": "3LU5aQmR93przyAd5wweTt6HhJRPgmu5koKWsS8wE9BaSmG9heLv1M1fCYZA6noCmbhHuzrQr7rYnre4sEmxCrgc",
  "key2": "344Dk23KXdNJs5Uhqdh4g7b395jN839sg5cVY3nnoEaFzLnRKQ2uL5HW6k7zN5w9SfX1kQq1K4ZmA7tCiYubiWVm",
  "key3": "4umeDvtCanvmVy3pPeNiQ13LZ3u2NEBgevHyMd5GhrCqKvpE4Xk1QyaGi9ev7owrA8hm3xASMWcvHknH5mwcboJ6",
  "key4": "ZtKTUW8Q9kCT5X8kvM5UDqTSm2H6Ng5gtQ9JCCUo6USM6DbMxAFqZQuKFa8WugN5RniF47B4YE9KyafmhyGr8YL",
  "key5": "5B2rTZrWSddxQr7pCi4fHpHCBmnpamo6dUwc2CTujLdt6Lz55c7fUek29uEDWbTSHNA6TSKShJScsKp3qipLft27",
  "key6": "2RiDdfHLsqW6qDhEzjRFMhCoMGUNtziuBbyyWoGUpTiQ1buKydrdaKwfEM4DFRj35s2fzcJHERCghNkzquuP55Jx",
  "key7": "55s6fNtHMQZbb9yxF8GdrCyrAgraKQTeZcxN5DKYNzcduCT3zNhq5SYcHZLZsktn25z5ZRKPFsDPzCTy66pZ8u3M",
  "key8": "5s4gaxF9aCBN2DnN5BsoQLcWU7Le8ymuS1XgSuz8qgEhyHjG1NQBumhvG4jKG42Az5hKKfKPYrHKuW9sdiAb2XwA",
  "key9": "amfXHLDzn7ZegwzCusZ3gfTtAF28yfZzoVPvixP1ZrQC5AnY95PJ8jtvfvYpsnsziYtSHrKiYgDsaJQSyZhpXcJ",
  "key10": "shdoC3Qze5SEF7jwcfcR1UShQxLDP8JxFo9hDn4DjpFejuasKYCFCWe7F5tSihNbFGizxshE5yUJsaKwESvHDg7",
  "key11": "SSeryVvGmRkvDPuw9azYK7Y63oK3oVoJ3vzUTCaaC4DpU7NLPXDYazED1uR4VKb7UAvwY9xsDVMWnAdYJur32NF",
  "key12": "bxQMHkRGnAhHjVKgszNrdbprarsR98BNbDi7LVx4zrmVcwHb9Xy725SA4Dt7Dzv6vYoo3UrnXBqDGhJFvvoCD8V",
  "key13": "3kaFLWhk8HrUvW1iQJpfu7PBhsqEuEPZN8LCsrLUBHAMvo3JfbyYqzmmn1oEmrwavKi9oLf6DPAjQK5wmUzUXtNJ",
  "key14": "5G3x1PUgiDDX3yHQZsedn81scivKWAnjAPfSigHvzkgTA65jH9gA1qTL6jZoSisZpZpqWz7C2iCJQ8cJFgsETS7y",
  "key15": "5e1TbH7xBPZ9YsUvRiAbYcY2bhnZmtjGDZR2SzvkMkxGNFsQSP9kcnrr626A8KVwFWbeNqPjEquvMC5N222Hiqdh",
  "key16": "5cFzpmzRs5bNGun3rgQGAaB8b1pZFFnAmQSYPavjNgVKcucXeQeZBiHxNrhwX1NAAJiriaTLtWKC4bZQZMvuKei6",
  "key17": "3FBP41W8tzpsLKC464vE8TtwJjGfCjEzKfpySiPurYE9pgasToChHjakBuR5515UU9fXAxxo9dpMdeW7aZhiNp5b",
  "key18": "2omzPgJKqZ4baVhUA3w8Rdx5YLZfZRFgs9LreXbwVJo1y6Qgo6qo19yaxbTf9qQ644zswphCoFgRjf2H4PBnzojG",
  "key19": "64Y9vUr2MuZmjGZ7GsfJEhATendyBFWbkayiBZacPHMX5wDjfkDCiT4JhfaQRATkaNd52K63F5shve3BApTxRqsQ",
  "key20": "2F1w4tSkNX4MmWxgFrn4NJ5f6op3mEQBGDMEPXnCvy9211ZuMogdDXYASj7BFbMEGv9x6dv7pXitUxoxKWNitgSP",
  "key21": "KBMh24o3qxTMT5GC5AfnLbCPry3v6tYTqaUdGrBgd5mw47q9KV6pwgvPJG1PVTBP9SDPjNLfFankiGZVKZ6owtR",
  "key22": "5UrfYAxk1VrKio8u9aS463veKqXiB2jhyz2fUkCCEkKhoM3kyfZmQeoRfGXyCdxxRRDCwJDwQf5iwzWEhSpw9PSf",
  "key23": "3JsQoqCWC9xNGgmmcBxSxQvfQ6YUDuEzuUTcfDQ3T3cjXuxhwnKLYnG5Ew57BdN8BT777oTwctjuztXB9h6ax2sc",
  "key24": "5NQU4PNJdvpYLb1FLegRzgNymvUEaiDHtRBV9Q6tFfXvv71wmVjMm4DESvP2m7Jkrvymp9ihAD1yKYteqvYTFkBB",
  "key25": "31nrEdJmzYiTtUCgfy9QqFKBAUBK76sYfYXgEZAKDbsMcYd5sNUzw8byFdwN9wUivdAo8sZLoQ4QQcV8aGcMaDbL",
  "key26": "2MLo1vXPVQ31CowVqQaGfsMn1cXDYprvTGHjio2ecYnXBNW5hskFrHUzyT6gG3yxFuXZfkS3fGMWf54ecvBLByTw",
  "key27": "37CRhrvPUaPkapYqYrrjsX5fduQvAW64s1sko5zMR1iW3wDGQ884dPVGwNEcXfNKHXkdfeoV2SZTFpSBChfXYB6r",
  "key28": "274ebRqWPeSwF2Nuu8mD92p3fpAdjCSCZGEsEujqWq1Pj1SsWMvxZkPNzUbExn1Mz3qmvfbvVzXad8R8mBpJ6M5G",
  "key29": "4ZRVchMYELipk6PGFm9BbbHLpv8FNGEobQ2wc8fqErA2aW8nDbuMNWxMSoeK83SeA4r2t244DGsikMGwkphWJtbZ",
  "key30": "4nK34y2qioWLMrYdMF5RbWQfnrcPFinVHZJa8i9G4QJRjBVmExWn2Dgtk44xiJNeG292ZmBZ4RoRU7kgxMiXy8HN",
  "key31": "3PBPnyPkLfJeSb3SteXaZAr5udneKSzDwPCYYDSMXjKLnrm8yheTEiZHAVz9j3ZfDnmEvzH4dCgsBfxx54Gh6HyB",
  "key32": "5Kqp697316j2nYCaW1TFsV3awUReUTYsL4fAh8ymBke7APqQHEvmwqcYM1EiVff2fXg8WTAf1nSqdor99yiEtw63",
  "key33": "2AL4y5SmLHvhkhhDtScy47dcXnycaD6Xv4DLxjTH21wf697bgM8PVEkbHDKV3xcPqBVTacATD7tKeHgv5dvU8wSD",
  "key34": "3DkcjG6uDRbEpfDNCMzbXsQqrUa3SvPX7XacVEhptbvGNZ6gbTbwdCTQdLLWFK9J98XMjMAqwCJ9fvZMtAKFgZ23",
  "key35": "62yqQxg5sjYvfFHUFX1Uvs8y81BfLKBiqUiEpwGSohdoXheQ7o9UAKHohQzW3d9qduEMMJdgDWWeeomUz4vmfYL5",
  "key36": "gLXxC4S5C7dfqPomiQXFz1LVXX5Tj62e1KkKPttNGmri3FKE3WU6A6CWBrYNsBUAS7mnFgmEpFoH49XEMGL9Vn7"
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
