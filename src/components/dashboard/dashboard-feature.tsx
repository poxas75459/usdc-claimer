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
    "2hcz4MsdncCeyY5pWmwMnT7XD6xdAXbNBZuttkghATXa4jdNPHzpZqNuTrNobdUT37L3ijtYsNXumM2US6oN9j2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idupMSPTtXiWjn6s61JFVXadqKxqABM6awRwayD1XTj1ynv9jXj5YfSnQXZfxGCCcMzsv6yH7USX4FfFT3zKMLz",
  "key1": "5Te3bdeJUVD1TAMmjYH9LMkmSrJoQ8AW2EhA3hf8fPwMAkFgpE9ERu1cRKhZ4HJCfBbfLoW1qWtvduDeYrSPeBMr",
  "key2": "4T9wPx1uVhw4YgB6mXzW7RQeupr41yj4hRiETWZyFNmbWAbxrP7aLy2X9mN5qoxt7N9jhTEsn4hr2PJtUf68xU5e",
  "key3": "2s7Xp6jYLxjdHF1ePJPqgqQYC6L8gf3KYGBjh6My2WSYL4DPrKs1y6DsJ71vNuDKW2TYsKZAWb3kkRAXMJ7gTZ2f",
  "key4": "5iKZBn8EU3q2qz5QHt1RmjwEZPAHavCVfqrdZtTFvHMDcEuCqkNbCzrmg7RnHgxMVmdb9GjxCeX6Fpn38Ahk1rQ2",
  "key5": "3UpUVWrz1ETa1T7ixjkNE7CYPJipyYn5CEe2avJe3SeNzwMg45rQ3UiEQ4DN29y1dstzd5btt87N1pWTDBDLAUzm",
  "key6": "52uQHGYtR18RSks3YpqaHBGYnDBiZZPR3vpPtmrqsbajpT8N38TEG1Q769oz5FE81hkVCQ8722pxtxrLSboawmiJ",
  "key7": "47Vy5mNVuxSDd5Qf5jfBgSW1qsgXrZXXJwCahxqtZ62vuT6N251PK2B9VvF3tjFUbUtwTBC8GNjKMZvzEBLxQxhv",
  "key8": "4obpy2xrpatLYDLmoJpKejuE2qUev57AaRsaD9qUENETgTDvJ8jowrST6HWXFfASi3oMyYijB6UkjqQirTjAZp4A",
  "key9": "5aKMmMSZtjJicsyj2aDBaDaSz6nnfABEAYv7xLAMPJt4TMYSrnXvPJ5tYga2YH9PuFp9R7L2EZhZHe4uMEpXmFjw",
  "key10": "38Nzp3tdGdfhnTbtsLeNA1kDYQj2Ep1NFtjKMFpiAJSQymZZRmxqGU77AHe3ssHKBDSrHrU2s8f8Wm8eLgkkQTgC",
  "key11": "4yiMH5Vp2RKc1HcpZ2iVmQzhsGDMTfHyUtAXEP2ZyN7VuCzxLJMvVvFSCJoT2x2EVVwkMyXXkugwsH2ddHMvL8o7",
  "key12": "51xBwuoTUVMW1rQcJsXPe1rWbuuEyCACz4CPZeQWGhaXyT1K6o9FsSJytvnGT7AY46gzUMyLWRbSdo7YCZGXL9HD",
  "key13": "VzVEC5QHUxvj4oLHPuzFGVeVNRuuv4nCtHXHAUmBW2jVGNq424HYU7MK8ki8rPfwMhdtVfqeRRMNmaB7Ra7yCGL",
  "key14": "2TSw4qeJSYRPzaQZHDoKC8iMG7Zug46eAjy2iHt8mZBsivYLwNJUFXUExuDEBb7UCCWJrPa4qevvcbEyhXnyTFTa",
  "key15": "4PRuZJESyQBF4BH4QhBPFtjfMfA6DYoGRuzfmbj6rKNnzMk5wU7BdexH5WBwrqFLxYBJy15CdP7bvRcU9rH42SAQ",
  "key16": "3awjzjCXFJdnt77CBWToiwKMFGgqkk9UjgP7uNQpmCJqZh2oXxKRh4zP5k64sEoiErdzGMLCYEvch4iNTHye3AXD",
  "key17": "2vCyErtaN6cPidhoY1uvXsabk8RccCqpksEbBiiuWStsH88k5Y1sbSnsxNYfc3HY11tBSBaExEyFh42QMU8GFhBj",
  "key18": "5xe5nDv9wAf1aFPisrg18hif2vGtMCZGbHNehSxokdJk2dutCuLnD5WQP1Uyv4EM2nPgxApimFSqTBGcEgS2B4uT",
  "key19": "2VPPYCmns7mm9AYwFMrCdH9cQTc6fSkytWFCDqy9NawN5TL3ucYwkYHQvsp3XmFiL7YoCvZKBAXbx4nPfDNaTuZD",
  "key20": "26n6VepEKLmFQxiBDweDegQ1oJtaWvxCn9vS684t33uz5UWjYXpGTBHMfiiUYXA6noHXYwzAiLWSx64p7DJ8uiiU",
  "key21": "GGX6afMjzbEP3JCbpfuF2jD5bgVcUh6cUH6NAM8dDMWx2ha6fapoRvV2Qah9KzSZGCYpGHz3oMP3mkHqVg6PvKj",
  "key22": "3GBhLQoxCx83pNfykn41eVHWQcAJ6TS77TKS8kEccPew4CmmZ6iFZaUdtux2iZZBHcs12hqSQXU3W9PjFw3AiZTp",
  "key23": "YnwMosKdgmY9oJLzu1LtSCkdrBA7iuvMoEEV1FLDzreVX2srkBb4rxf5Jfg2Hs7WrmJrdcfMhn5VMsHWakS7R3d",
  "key24": "cyd4tzKv4n9u1ZQmozZPADwndHfJ9EcRKXxGjbLL8ELqo1frCXhqJzvbejoKeyE4HpHsHsT9BidsMyYYaELD3cr",
  "key25": "Qdb6TaCe4vXALS8v7FFaeS8j2DbW77irioieFtuXjaVxoJ9hFCKxpr9XGKPppcxWaXxpgs7K5fb1rVBYrTns9kW",
  "key26": "5YR97NRyBmgK95NC1nt2arfbQTu2C3u9d6rPUYSoVy7ZFLQyAXoYoohFJeSJUFMvBNo6NhdatnCxyy97W5dBo7f8",
  "key27": "3raGHXDS3dTwi2rCHG2xUSUgyvpe5ccYMYVaLdB8LCJLXUuayCQrCpX7HYkBG365gYXKPfPy1DxWMJMnrrXLdjab",
  "key28": "UfPiKe6BBHvoVCHt9AeXN9CsGCv5TqSLUR4C1aom6uGhzfYY6yb5dGpUuojaAoaqfP6wQQp4wh9UTRQosctLZKp",
  "key29": "3o3VnQ1Dz5KE2WJo2YyhsR2V9FgSEraXzcpjZDhYCwjjYT1NptDsXJgogk9PUpr3caf5rNb6qjuW8eGty3jj96FF",
  "key30": "4dXof5D7G9wnGWgRhyMP9MLefUs8KQFWDSEMbvLqcjdYTqdCXktw7Zva9hL7YG9JP3ckYA5J3wbF7tZ9rPb33uC7",
  "key31": "3r31HhPXndsUvxkbV8KJ5tGZseP7Fo6WaDUCya5ydhcorzRWasjaG88uA1zZXVdnXqsu7pyHo5y8HPmv25G8BAE4",
  "key32": "LN7sv64soNGGuhMT22fpzueUHgrM1RNxZAu2tvG6aJzHBEdNXTC4K1HwjfHhYjD7YnwbZhKfn2VKEDYo3d38BRi",
  "key33": "5McpifdkZ8uXeQCNpArowZbgWKyZZ3zHZYSDwgWKJEpuFadyW6kBf6QCTeDfx6k91vYBN6pn9a2gzsY9XvPGfosB",
  "key34": "KWBy353JDP6Zd1AgYsFEfWKR7m8i9MMyuo3RCjSKQ43UJ9aGwiRPXQy8yTeoSiVCMEHe6vRb4nvf8cTkWuppev7",
  "key35": "5S1EBPufMaUp1uJrpQ7vCGgGHVj3tFrxXNfqZF1QtdhjS32CCHJgZKvLd9aRKyN743C7KwB5VTyJg2nbWa2RVAzh",
  "key36": "3z98dzPLpUYdy1TQTSkbVNV2TXikajcnihbTSZX42NQA3NFxzKMPEndtZA6AspqybVs8Wzvh4LsXXZK5n7FtDo8E",
  "key37": "53L2wVEVTUAVRVZCWrxJ4mc64WpCQWKE92o4stKxe6LcbhCBqryUvgwZGEeJtcCNHqPoae3Br4WXSQJy7FGqYXVW",
  "key38": "4xVc7ytGejZyJ6nLEyLdDxKSZFYdC4kjtboAS1ot2uVbVRDeWs3c5463DaBcyQRsAVN8dsTsxhwPhnWgpqCwYNZG",
  "key39": "5quyizYQVUMFJoPzJncZAm7DfYNnboJhPtgEJeRSkpJQwJ2tPGRVRidLy8gxRCzrKf29tZgWFbzPrwJtBmmcZh64",
  "key40": "3PpercXGHauV32CW8EXbk6iegb4YndY9JMjH7HZRR5Xc9f2MmT1UJe5q2uRxYiXckmukFHZYd6t9PsHnrRoEdhxb",
  "key41": "4SCXEFwNzeLdRyUrvSh6khCjw2gaHxStov7hdfuk7rALCv4ZjFtxRS4CgJauP8MLEfuU2Y9qdKdTiUjMYrk4GSCJ",
  "key42": "2bPveHh6d4PgTK5q4TUt5izLsSnyepyKsyNHb8XY1ZMpA3xuKWXeyoN2YiFbtv6RRngevTrGKFu9yVNLvoWGWy8V",
  "key43": "4uQYstTCcJLwubR47SuVkXgpTPNZ1hd64RDQ5GkX3GYKaf2EXGm7ngAUEfWv8WQ33QRTJGybeVv9Hra4i8DN1Mb4",
  "key44": "zm7n1D7oGGr1g1LhDwbk4PVp6xZMMAHSboaorxHX9HSmFSbnbvXfGnjegqbQ2CkrrkkMpf2sttxpszXUoszi11Z",
  "key45": "4E5zsETDGcapErPeEnWMEnJaS6jmDz8TgjHDrudKSAWUZieGvLKHqLPHeX3mS5isAxazavipzFvrGgfKNEp6KvEe",
  "key46": "5xJUgYVvjGunid3egKrFPHFXWyiESTWCjdUsJjQqjNvRkfJiq5FLPH22HUbsJRE9hSBXxAhis71mW7Ztt7mBYF4Y",
  "key47": "4BjHQbASPt4tKgV17nhX1HUu89Mj6YRCd3RzUWTFd8tDoy1tuENkWrMpqdpvuimTHQgZcPHynsZkfTgBijtbwnzF",
  "key48": "TwAiJ3XJoJjAdPtVBvuzxWMit76ZYhDgHqQSpghjhBoJkcbxmtskVwTu7Y5g3LRvgzuVjeKVj7CkjRZoAfDrMNu",
  "key49": "45DHzyXhmNEFHT2nmjZ8zBkR1BZM8TcepvFpthVDH7PAj9Kr7NZN6cY3ZWe5doCEFAgjVr7974sxhB4kxNFtF7oC"
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
