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
    "4WzWXUNNthjUXtjA9qJsuoRYWm8Fa5GZvv1YoDyGNoPr3496iH7NQRwX9bweHpUtaLnstUq4zZWwVESMsu7VFRCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyLzgaukgcBYnAN1AQnWGDg1T5sjMeowJaHwF7VbhDgizA7HwYi857GWqqu74pCGmKFAJzqhdjdba7C94yMzGKa",
  "key1": "5pgS8QGbLvZNSW6T6rYzwJyRhAWL4GmTx9aVxwrA8jPnojAYLJWZKkbjffa4nzNHuE1XLz5re925cUGbV9gvAnKn",
  "key2": "GtaxFwccs8hLFb8kH9JbLWXR63Yh2cRe5vwymptGMZatog34YVFr5jxYwtaPtQnkxmsaAGHcGr8s9yfEYtcV89v",
  "key3": "2wCmjee6WnHMJ8f1ZuV4phE8MaJ3w7mjAeWBgAiMN5bzJb82nDK1CxmmqUkBfnn4AZnRLQYJjhZNeerFWrUFjRXi",
  "key4": "4FyR6k7NtzPC98VCtJxUvQKFF4pfUXNzc858uEqhz7Toz4SUchvWkEdvGuyMthtWnDFqXfXuVGbDzE3VSKpTcSby",
  "key5": "4PPmgPvjXxER7vnqFTHrw74u79u5QPB4uXbw5LyM9dcKaSXjvSXBfPA5a5VureorRd1DgtRgGS4gUK6c9PptGvAh",
  "key6": "2hXiagDVu7L9S6T9SLag9eWDpi3f5xp8T6RFYQD9TkiSXkkfHeVi8nyksUstLPovfvbToRhDM2pJEuTr3owaevqH",
  "key7": "3AXU6j1AKy7sxPtEJWgnyc3nYfLhXtw3NWnitim7Qv2dfXnBiLJnuWgNTZ4XQygpFLgcGV9LrUARcZTg1VQjA7H",
  "key8": "3CPbyRKvwPm1f3X3MYiKPXSBZStyRC2dToUxR2JoRRpv1KQDtGTyn37M44qM1CL3LAgfvGESDcQPxCz47js4gfSD",
  "key9": "3ZATgwU4qUjjfxFNmq84bBudh1ZzV631mqzkKVh3DohLqtyPoXQGLwoKWZCaoAt6PGsvXZHSpgSSYFZe7FXK3A2F",
  "key10": "4yP1F6vzoLGMagizVNwHvh82xJGRTQE1PtMckW4WcyiT7pK8YiXsa5aunCjrZYgZj64HMvUDqm3CRdwnhUwNzfdd",
  "key11": "24SfPCZMFFzm8ejQ93XxcQd28Jzb3u7oiwjV8FXYK18WQTvKWeTJ3a3VpxYu7W9tjLMKdB35UGF7W4eNGcGN3Ubq",
  "key12": "5hXjs5XBy4aLVQsxWQ2p4MH42vbYtQKQft8A6K3fEMJ1fmeURGjUDzkuLbQNXsHmFEwHEBLnQdRh5rnqZ2MHDBCh",
  "key13": "5qXiqWJFPMGGu3DiT4whUmYT5oH2xYVJxJnPgZcxQySLUbvMMX85Loh9sAeDNApynDfJY4tV2sDALP7SpNH6tQFr",
  "key14": "3vUrPuureoApaKbQRiLsizjdM7ZQ3QjMi1wuBBMmCLto4qPk3aZ5PKgoZZnur6aQAPAbRTh6fKpY6Z51Vh4BpzRv",
  "key15": "wwM4BostxDjJ71XEN95wRY99b9wB6Q5QDnqVCt17KtEatNsm9aMrkEhzhPrzLLQUjT3J7Piba38sL2y2QJrKP5o",
  "key16": "21vaMjRLxKCe45EXdthe7F8pdJQ1433kH8toVmBKn25CqB6UySLbe6d9aNdoMn3DTbD12YdAt18TU7Sn8X5wg2R9",
  "key17": "3NzT82cZoTbzfxE9MgGHKzBstc48HLx4gkiaTGKk9FEXVunAEZ6NyXVAzZKhMDZkzy4s6UsuxzHsbrE7VVWqdEz5",
  "key18": "3gPhhh6qSZhXspESCWkiwf9kEZaUA457ea1BYx2G1n78AAZn4YsqnD4A63zt9L4hR4YMQeL818x3afjB2NxuHzd9",
  "key19": "4YjfY2NYJhoy3t6xYfb8vsuKEtWb2tGk4oe9pekyXVniDKgc6EoxLqz8GsETwKAUgvAnMNqgrEMF2xuojQwrVyQw",
  "key20": "5dBerJ5rWvk3fHimW4KAwaiLZ9Mawh3dhtcFHjKZo82Njob9kgmr3tK7JMRAvn3UYdPpgA1XHzEY4QYrGhxqrCJn",
  "key21": "2P2JkbRLmskfa2mKsP7L6p1TkD4MiqDFZDVLeui7NrLS2XYZmYrb1N9fXBi2cgfUXmQ7qpi7aMrWVg25pHkaZkvL",
  "key22": "3uz97cHZDYyjpLcVuKCVrEYgBJJXDPoe54SycgeAoychdTc1cQywoyJYMyYfMXRyDd397TajZ13G6R4JRnCXiYYH",
  "key23": "3f5XRErQYtrVWZXaccBUQyf1x1efGVbsLB2tQbj3XEdqZqGe7G3LTUZ34v1AcnbNqsp45qCMEQXRMRJT6prFADAT",
  "key24": "2BDqJ4MTmGgFiRXEJUFMNLeyx1PuSSUS3TbXZkt3djfpJ7NLkQhYbS2QVE4177nwVWXVGKEZj7REBeYQJqETdaFy"
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
