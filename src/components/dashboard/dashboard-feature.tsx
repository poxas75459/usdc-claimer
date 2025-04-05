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
    "63oUaMeH8bWJCUSS4g3wKtMpzen6LjL4PqAJbXnr9V7tfJtHiTW1HBWHzXH7xAew5KfiYjVnmmahRmbVjYw8WRvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeTuzg31ZyH35a3Yh7m9Eac4DQn8UojuKdzVyKpzk2PHAacHWB3Bgw68iwVJYR1szN5huqpDvkc7GA1KpprAjeb",
  "key1": "41xNWp39xHzJHnHrxHSqdccmSsWwo4cGiK9E3hmbifqAd6vi5zg9Dd6zTuw8usFDeuACx4NkBYcd5pgQy7qNSZCd",
  "key2": "3nivgj3JSAU1r5A25bwtZ3ggJbUPJkczamLS3rV6ECK1ATNHjbKyJvPGxtdaKzfED6YAqFJfT3NUgTrPfoj5HuX3",
  "key3": "2GzjMBjWMiB4cigoSWPwotZN7cLeUPHM1mnZcgMBmXHr7v4EHkQCS9VU5r7boSGjb8yM4Zw7ha7iSnJGNgBeSLX",
  "key4": "4g5mHhXWUGMRWeT34uc8HnrVtCbMPKcos2Lov25ERCZULrGPrrMM6WH8ZAHw4eGbKAhL3REZFPiuuXDkVGBDFi3r",
  "key5": "2kh3RGhhFm9o4RwrtZY3knUso7FXM2RTwEmxhT12QUyNcxRymKrqeiinSuWSJfAwXAEMk7XPCqP3ERUwo1kA8Wcy",
  "key6": "2WYQmPHVePpJHNVu3bA17NfRKtuaDV3EmjZn1iamhJk5DShEEp7UeU5BEVUaT9PWTqap5H1kbX3xoDBMQFpievs6",
  "key7": "hhzVuvME91wc5KCESsLJ2wBgFssGNBmFFW9xk47EfVEf5AKv7NsQriwKL8KWdVJaMv8raG8hjwianQ6fkEixDVF",
  "key8": "BvqBK9h3brNJnWDdgAo51FCWGEdcdBB4s2yVqwYoB1nWVZDhzDetQyfW22aXPBV2ty7ttgW3BEvkXrgTPSdMN4M",
  "key9": "2HESaUJKk6QcH6BzMYKnaCxMH9Y6cPqpNvLoLYdoEYbacyFpwxYyRi7CMEJ8bgidf9YsutSZEpkTdz5BP3WDzzqf",
  "key10": "2vvjahc22FZqe8Ts45cJ4kkTPmiPmf5zP1mJG9o5xfZYWZe2GcBqHB8vJYPEcCtmGkrUdtjvmemU67B2vVKrjznr",
  "key11": "5HmoJHZjPkp4QZQipF7thB3aTCDweYqZzUC739j7rnSDhtGKrBnnWo6fZBWG19GRMMNUxUTkR7w8bGU4zo2MFB1d",
  "key12": "66hDx4E6J57frF12QXhJ2VXeQhWeFusJ4kpX7wuJ9ZGQAcG2zHzBM6MSPGFzf11TgmS3nZnwreMDVjqkcxS32JX1",
  "key13": "5L2toQubAR8pnWerNQ2N4k1FEVbi55xmyUqy1EGCGymz54zfuriZzFhMvZbLdTKBcdc93RXgmgUcUk5imqwcxCjf",
  "key14": "2S1S7dDQym7WhohgKAhc2pY2oUmRELr8s615eECqvHWdd2b996665YUBYpbfo6j1yynnC7i5jEJXm5UMztxPdcxT",
  "key15": "63B8vXLobiBQgJLKVNYbd7DSv8pWjYFaKkRg2zKtYXQYynCQNNEK2mXcJdqFMRv64Xg9WPL378yEGi3YMFonp1DW",
  "key16": "2eVaD3JfycpTZeQxk7rsYmKAaGAb38iFkUNA4ZZouyLAm2sRdyeGXcqm8idix5tH76tZ8bswu5jx6opsu3y2GSCv",
  "key17": "n7n7Zk5PSd2sn6L4D85LqYn5w29jhUn6GBRSMnXTUejTVEkncJRPMNQy26tXVEnQuhbEaATBQBxtYpvJ5GwK4o5",
  "key18": "4rvzXwQFuKMBg6fPWFtZHZMmHmjkZ8kXfc7AHxvnF83zPCrDvKXdTjQDhqdzzJMRe4YzMGuQ2Sq8S4McdvwfG9Nm",
  "key19": "64Sqi1Jyxtmu8pjBpx9tbVoBBhnAqCaYt2BMD9VsyzBbfXBqwW7Shq4rz8ecLFrvAwLxybqtZA2AGuJQdy4JYVEo",
  "key20": "4WmXoHjhkRHFeNekU429ZEbMe3DBNahRxPdctfUYQoh7LWy4oPLP6twiP9sdDaEkeC55ZNHUkNpdQBtRtRzM1k1F",
  "key21": "4XMsW6nsUGgJ8aMmhr7XAG9eC9sgfLreNG3xAUqGZ4qEXtdfhVqR5xUiHE14L3HLLAi7SaMNev5xnBKzFdR8HpzC",
  "key22": "3N4SseHyaZqffWigPbcDMqjyu75ULnps9MYr88F6ByuunPGckBKqhuRYx3vETUcJsdufDwqzFZ58GNWADarks5jr",
  "key23": "3X7iKnaK9r8SD4JNX994C2641fcX2iPvFiHnzYoGfAMy5S5bsuxe5e44n2mJyJQJrUmGE3qUNtqh8w1HFhxnfeeF",
  "key24": "5dxUCAPN7VzBaL86xq4GQkgsGqbLqKp3GTPKpdkwiiXTdLWJCaLdJLmfXcvProwQqjPFaefQGLssASNBi5v5rFgE",
  "key25": "5BLhDw2nJQKbLMK8T3dSq7Hy3GXGzs4nxSzK8tN6ndFuSq5tKZdSc4M25GoZbqXQTRsgbg6xU4gFZvhSsY96QVEX",
  "key26": "5vdfgQ9qK9tqWoDbUaK7qJkj5zs1i9nUGNFwP1pijCZzyDUWDcfmc6X8J1LS2CfFyZxAYw6bGauN8HoapmfsLRUd",
  "key27": "2VjehxWVfBtTR9XHQTHZUsrsyvQPJRou1VMztJ5xJhMfCL8hZnCEpSY2RXEXqo29e4E6cikcVWf1j4uq5AFmNDoV",
  "key28": "4FxPoiPmKfMzAkVyd5hNi11GArvZVqxrxj2S6f5S6KPvG6z88FJvA5GaU7oG2LTzByWLEY1uyT7ESh6LmQVgLJAB",
  "key29": "5yvsgffnUwvAsJ8H1kZMZKZzn3Q2rWZCSMTv7yarmJ9WZWNezNhzNn9tH4xwGhJfArFqTAY7ZYJADQVMhbM8rMjE",
  "key30": "3RFVzN6dXK38NiZkouqSvi2tX2xmBQE7ZGYPaFwVHtuFEBECvYhAYCMtoyfufVTxqu3o2yha7vuFf7LKhxd6XG6d",
  "key31": "4o57JALCS6xheH3oRkxCRM9yyP5kAwRPH7kiSpZACLZiURyr2udKmDNthMdpJumxZPpSKdnbyHt468r1imtzxLfy",
  "key32": "4hGLsUACdckvq8g6WmFP2XkY5gDhpZUKjEzh1heSW6f7wA8E6iP44hhpPBdTJ3CW7jh11TutYyEQaJYXLiAZ9ggS",
  "key33": "5FzfB8M7VeE9rHJoZim1xXPUEDq5RZsZgpWwyXc6XCYFMyPctKGVZDEMGrd5AZKskrC5oDhe9oQvA156WSvh5mvK",
  "key34": "5aREUkYcy4LZKUhGkZBc9fr44U23zpXVFzLerzrd6v3nRtHhj7yTQmM19B2Fn79wcHHq5xoBHEsh7b51pT8SP8jq",
  "key35": "X6reT2Zrsa6Jkgix2QFvCvdLzgShxqh9dm1pAEUfuBi1g2cxQixhQ2WxRxpJwFeXF8zauNXbbsLRjDxn8n4wMgJ",
  "key36": "3ud3oWa4CHko6qpWjH9PQ9FVHoDX44z9HmYdQPzLtNbdk7Sqobk1UPNqbT3XF6YJuEAknsLZsUE8Q7n8sYXoBNjt",
  "key37": "212fbyn2XyYNXMmYf4zX4CUzuNwTPJNGkP2TiGoCo5B4ggaAXNdNzf8rpbVXMGRMqg8CiK25RGYMpQ1bmta9eh3c",
  "key38": "2khPfkaXQwBkNu3TnL745EffE7GcsevkNbo7hKnyXxzsbb6jEjNTy5k4jZAsebHRx1VFNMTf7cc4ym1Gpyb5dytr",
  "key39": "4VhbtNrSHAgr8uCbw76GfinMyb1ivWvt2YTNS2GhjD6BGwr3nTyefuPFdZmg6Yd3SirYKiSySwzLqexaoMGJjiQM",
  "key40": "4xPf4FMRzP165oJaUVrzzg8aSQGekc74nFMrCeuSkJb9pgjNwFpmzW1Ha5ZAM9Ds5euqohTi9MTAnaMJHj432SbC",
  "key41": "eYfsNQBUE79Z5r7UysbVbZ443xw93L6iTSkzWcGwVJTQqXe5BpEPjdJA1t58tsd23qFJWAYg8SnNtcgQtybFJKC",
  "key42": "5azwLAvPapUfo8v3S6MjzHTGziyifWg27GQfyR4C38DZWGNc2gdADGbNpYDcCja5HoWe47aKRSfqvzPzy9ksZgjo",
  "key43": "4HJtt7WC3mkwGXyxu3gfDqkjtDwdEGLoecepqbM23ZqrJDk78s4Z5zwpzJ6xs3FjP9gyKRe24KhLQKk9CJFPhwKM",
  "key44": "5AvU75mJJRtMPY7bkma5mGE26beHphztk3wBnw8GbsYhGnBWdF8YLx3HAYKPDxdLyjfangvJd7b9ENnM27KKvTwD",
  "key45": "eCMRzZD5ER9RB1LWNfehLYtWaJPNcSCTX3EYecYFupuANbwBnF1Mgpzye6V99agFMdRL9ZCWc5tY4TdWfPg6nkW",
  "key46": "2rayxZf15GcC9smhBNAbawsBECQEVVFYdBjd9qodvniv3TrksqV6yZdS4iqJZcGDzgjZf6rd5fuUyT7fMhWQiYji",
  "key47": "4uvpJaFH5Eyk4NiUvVoQuMrzn4ULovKp9v2pKZ3QFqfiYq2q2bKXAHqH6ocLYSNsiTkhgeBDCHj946D4nw4iFTG5"
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
