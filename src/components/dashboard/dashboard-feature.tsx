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
    "5bL25ouHmT7Z9dTZChwWpt3zMQGQFbF74eyac4o7NXGTfXZwVQ9oU3YXgSWvEW64MzZjc8e5qbpxijzuMSDbupYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBfrXMJscFuX5dCCTzFARtzc7HuvZ2z1jqTrA4hLL9abvh4MkLyu6UzNPkW9ghDqm6mPRH7aDzUinXFfaVtjsJx",
  "key1": "N2sUf1sWPvogXpfuDG2JsUBARyGF6iXoWV5ez41BChGw5GtBK8PGY3cVB1LYpoNWQuYC6JYFzrw8iNoLcNvi74T",
  "key2": "4gi5oPfFMcb7Zd38P8KRUjfnBUMpmrWpqDbB3tDERBgx3rNFYxDMAKH3Gm8sP6p59Qz6XAyCMBfqGpQqdjT6B9g2",
  "key3": "43Woa3MaCAHEnGFq5o2vdS3wva5Vj3DF2kn2vFthURqnsm4vBwa7hMyTdGbmQUHP6Kxmt8MCuMkptVfZdSWM2mP4",
  "key4": "4mDTETMhth78e6mdqKtQEZwxiWveGMDoNhAcC7bbPNRGChbTAKNUaVX8DZz6KN4t4hviDEExozSZquJZ5MHfD2c7",
  "key5": "3rmVaw1SuS9V9zihUcJub6rUJbopQNpuTHtMZsRQz92nYe97zRiCgHEieS9PBNs3GgBbq2fwovQgdttnYNvSPK1L",
  "key6": "3ZrRS6EQ5LaZGd4eCA7DxYCnDivVnZMJAFyNAq32UtLM5AjYqJXfrtFHxvJC4BGdaiNP4JX5hyssz7rziTLy2J9d",
  "key7": "guauQTLmGFqyeP9z1PUmi9Us8cfb2CoqCyzX5u8KPc79syKSoZjdeSzpPuRaVjwakSBMQK8FzgV4iAFBL24Yde2",
  "key8": "YUUkVnvrGMgnkv1N16vGFtqZiME3vz6qeH4VmYqq1BhbCPKhkwUa9SEqKzV1E3ofMYxnMRvn2M3fdCTqnrrAYTT",
  "key9": "5z5ftcaRLtB5P7DvMgGre5XvWVRpsHhS8ZcL6AZD9hvNq9LUHt3WLDSXswm2GWqGLJSMzRJAxiWMsTuvovJhNjoS",
  "key10": "SczjMYShWLUHi3LeNSi6z5aWaWVeZkoKtnrk9dKwRA7xPuwMeUKZhmXK3aLF5m5t6Vb5dno1nr1BmPZ1NnT2YEq",
  "key11": "5YWwR6W3EHJMTao9gLg6Sr4tiqcwsYEahzi1vwmFNJ1wb3NVEe9LFtGg1z5Qmg1fkRB99o1z564z5cYfCnzeK1Ld",
  "key12": "42rzBtpoTNAqD3qjZJ5fjsCE14wkkJQeb3FLCaatAHsL2MSTguQiRSYkgDyRkUDWbUP9QajfzeyindnhkcVYgua6",
  "key13": "44hPpjYeHpCEYhya9XcKWUtYNDKR7MU3jhZFK1FW3iJ8DUgf6QgmN7uWrfREsr8HwueASHHQHU53zkeXfVZSnene",
  "key14": "5WjUTiAJhpPyRzfCi4eF3LHCUNYwGVeSd8o8JpvPCmQrbS1ZSMzquH3FLaWVw1SYnY8k1GWHg6ZLiuLWrFPJzy9c",
  "key15": "5m3Qv864qaNPsbuf4wfCppGz3ZVRk8YbUBJpcpG1dVwja9cGbXshsV48iqk5gUFMNA5zHPsb9wXMkQAvRd4QGUXG",
  "key16": "64CpEJP7H4bHMMWrBYkuGhryLPKXfxB5dfbSdQmJYoiPGLs4iQgbFftF6EjL9utUSWGhtUhSxzw6jcVnKB7sQHQg",
  "key17": "42JozR1qUgRKUwH7xbskWqt7oqr2pz2fSK5zKA1v6bos8DoUXTsv4Xosk5x7PMuC6tJRyxbCs7e2TyKVqS22Ur7n",
  "key18": "2am4AZu7N5BwzkEf2y6b8txo7ZenzcYRouviGWQYonNNBzHmf9aXkRh1QDZqXTP1NEJYt5znR89JtZAjaeomxJ25",
  "key19": "hZPNM3J5hVZnaNBEDKSc1mHuJBMqMMq7ShSkf7YGTt9uYhzGsd7jisBkkU7Up6z7cX8Hf85o4o61F3oqfvTbDJj",
  "key20": "3kXKzjcthkru4oYi8p9BTACeXjDCTYqjtyDabPgsmL8h4wWCnZZm73Nhduy2vm2YLRyhwbe4N96BZfH1pTBQ8Myw",
  "key21": "uRF6ctMwhRPCFBNGsvBL7Z9zKpwpuL5AuuhhdPCwWj1fWkNYxSsowo659suxjvVtUdDPYNbqC9ngn3SNLqYesgP",
  "key22": "2KrPuTfD3wsF9qwFfRSN2k2Ddg2V8k57GhHGyq9zrSVgbJuu61YGEfJmbzzMYbhCN2pU64UNaKn37CFe2b483TAb",
  "key23": "6ipW6ybhwAso7XPCQRkzw3w3kzWfXSDWW8uQ4yrErVnHKqko1QN5UJXaJfV33N9Xf2FPZHfZG9MEKRNy6sJE9Tf",
  "key24": "5JSUThAjRa5tEcJRWUYRbgKXXfMuxBf8vNCwHNgc228Z8k91UddeMHsKkMRmyVz5qJh913MC5zZKZrx4LLkhQU2y",
  "key25": "44vFZxzecSR85WcDRTVULFjgLZprbiN4AXBmLTacLxQs2Chc1fc44QorJ9LSeATE56uywS2TUQTMpzwMRYXfXen1",
  "key26": "5tApdUyBJRsr1MA7rzs7x8VVKNByS96DTRVxBAXPQN9HWL1miMpFjB3pMq7ALd6cpekMkSWwKC9W93NefJfbqBE1",
  "key27": "5sG99GQmKDkuZnKyHtB8yp4Df4vGD3XsVxUC4XCGU5ZSoMjLcHGEFPeUgLRZPHydU9of6gjc6RMJbAZCyiARWZBP",
  "key28": "aoMepsh2Ms1BwvZyjNANexBP6inm8CAPNJQ2qmH3tLwZnVefRtdFnkDDbvAVSZaKCSsNGg4DbJ5q2eWfcKpWpv9",
  "key29": "2NtW1Kedp39jRHPsFh254GCwN2u1Cahd79XM4tHy4itZKg7CBPQf1C4WGNZgK6gVLYx3JLVUHrHJnmaCyJbbU8oK",
  "key30": "26BsMXgknNYh4FpTqPxjabMYdjmBR82hh7QWRA4LsRYbB6g2BnzREUzWN4CX4EHC2SgrLfvC4bUq8mbH9qukRABH",
  "key31": "5fAdzGn32nYvsPkJV1Jz9ANorSZsTUEc5qEGFLAqjgCH9mQuf2P9Sdk4aw63GEvJBRY54hrUbkvdqTfe22XrLWS4",
  "key32": "4mzzLTnotvvGeX1LpYb6wyu5MnXAgBsjWmozz6NPw9AES1iYwSKnmysXixFQS7mDonUa95gcPs523A37vr8zZeKZ",
  "key33": "5tQau8NQTbU8VaQvsdDeVCSfXTLLQy6VBNxcdbLbbY4Hd9tTqCNz4D8ms8B8nJMbPRERXPVnuqRtdoxuPCZ4gMcf",
  "key34": "3LwD3TfMy4j5c7G8g3ZkcgXRYfajiMkZ5fhj9Fux1MkkiUHFo79Zyk6UMxKDLUcEgzgaGdSzsq551qyxv2m1kgEy",
  "key35": "S1ByMcFfCJwkAmE61dnVhMkpoiDKuswfkzxQE3sRxcJY64m25dqWrY2wLeRxUrfnKZmM27efyJqDZSVM5Xp57rP",
  "key36": "2TegLLskNn9yMnjq2gF53ZAGogrM2NkBeBEM5wHxy6xfy4rECQNPTAJGHH5RS8dL56cBPg2Q4epJzN9VKWr94LKL",
  "key37": "3wep3gQXKNu8BRcaUvbMpBoBZzqpmzFH6gfdUHx5BwZbZjuQC66iRsuMYugrXyYMd5pyPSxQcMBQ6r1nYPfNKaNZ",
  "key38": "uNixoG94Kdx1rwMKGoU32VNJCXPbBFXPs6KUnyDfUhMTWPgnweHAWum2uCqbPefbPs8ZE3LWQN1CwN33PzJdF61",
  "key39": "bWpY9rsvcUtM94p7CQTz8M35Ju6z9yxAsDHehAEu5kwLLsxLAj3K6fwiRT2sNqBkmLKUxLQdPYqsJzvFdGtgY6A",
  "key40": "3y5ghWgwv16bzGDmtXsGvmWGYoykakfUzGZQdqnembgP4rrqE9FS6eYKZxXYhJiM2hAyvgJ3Lw4VrWJNQiqPFA2o",
  "key41": "3YwU8wZe98TfUhoHzu2r2soJb4fnwuKH955f4pLFAmPUde975ikr7ZkKYsaie918ZfZLnbuPE2gaJ6qxg9XbVAEv",
  "key42": "3RxFaSSThiJNaKRxSn6dVcv1dwvyiEMVfugVVnmCbURZ59qaZQ9a8P8xA7TxnPTCCnJuYxMgUQzi7ptDMbwbud9E",
  "key43": "5mz46jB9nD926FHqShGA7f2zw7npv6gx3tkhWgGKcvpAj4xfTZRH2fxvYUKvwp2EdnMDfnENXowHr6Z8hidot4ir"
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
