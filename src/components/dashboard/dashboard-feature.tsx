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
    "45KVQecnDBJgqqSJ4JgESozegAJLo3Hdy4h2bdSh7KsmDuVYFS261WSExRWi2KVCEucxALPU4P6PRsvaxriVSQQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdQHLo6GK3pphjUFaBmhUiGcvhKHNoC5W6Jtsu4uCv4a4ZfCDZQtTn6NcWph7M5UL54eoNuxXrP7j5EwQuiHJJC",
  "key1": "3ZLoHDr9kSfXQP5mSjAVGyEASmN1dUQJUWdqXWBheUmZeERW3YXVz73jMvTkQVKP2nCwe2q2YtpcogGDfJCUR4Zu",
  "key2": "65jUEwu5gwHqwqtUtz5iWktRxSppg2sF27fP7Z2D3uAwfbmQ3gmK1jLgr7gnvb9PYgHHW6jnaaUdVcvop5rrLX6H",
  "key3": "4EvTTNEYRwoVp35qQRUN2roX1eu4GbTmgda15TEYaiRF13nM74X56QmyCo8wzG3JBuZ5BJ5HLzzLvzkBRvJr2Mti",
  "key4": "35qiXeYTAKELoRxVTekX9UHXQwhsJ7cq3CVkeE1D5EKp46N6tembbqKA4AqJrZXcwn7T6GgtoyNEojmTuXcPMMtz",
  "key5": "3kEWmUBbtAToB4zk5ATBJeRzikDktCpaTFjJgMCRz6eS91iMqqEgz1jQrpn5uQ9afbY2WwwwsVur78nQR4Rwewg3",
  "key6": "5Eopkb5ByHmBFf5xHW9bojr9poGRosf6DwGrxNy3h9kBv99YgzRQUeK69gGzzvQ6Rz4SXMg7EAziuJAxGVAFaLvZ",
  "key7": "4UyGNafrbnxAZFTrN7v5R6mPcnDDjc8iiFnkgZdb4hH3NeJWk5koXyTEdcnHt6DDWTo9QnVf2Pzi2YMLiwTP68LP",
  "key8": "27AsWE2cXaDQ9V4e3baW7n9pNmLjsQLcunYGZefErkiTf3RHmrRsrFvnfauQfmbznwrTNHuFkbjW7PWRm3VvWy5t",
  "key9": "4aFoG3FFMLjAk4vx59p3zQ1DBKQN7eHeQeY8UNsm9DKz6smh5K9YApyqs7Kc3opDDCJjx3zPn8kSfCwBoCqcbyf9",
  "key10": "3pQzvCKqNRLJqJf4joi8DXRzptSRfVTwU6wHPTL9NUFcETig1VUdYw9KUXM3wvhNG6Rnc9pPPjkCgTQAQrvbbj5E",
  "key11": "5rH76fJR1Bf26e1TCXL444va8sb7ynTHQD4FqbbZqKqsDpZjCi3qgBVvtngxihxxKShb5WPxs2rj933LqFbkUJkq",
  "key12": "5qG6xHnieV73Vr41KtjPupS9hDdhiHbnRst8wXfyvrZmTccwkJQMZEhLMsxYVYPwxiRT2wW3Ez2JyLAPzXwk6AMt",
  "key13": "4BFRWck5wBdn6U7XLkYLpmLJa3y9jNvtbEGZ1f8XFzfib7k1u3CXUibSRmTxyiMJWegNFodGFcKWML6qJoPKAuaP",
  "key14": "2HdPd9pMu3nZYAeaUfvWmgiMravjBDye8Rx7uYvJ1WYCgh3vHX9tttPe5igRxLdnQEEpYMnLdLwmLY3msnEsj8q4",
  "key15": "5LjF4qshTp8dTZp5PddyU2NBvkkJXbAAAXT4GwYxtrWWTuUAGNzskK2gkaYH8q9Dfc5oQuiJMQQyWpHNokRhjTVV",
  "key16": "4a5CLZyoXsQegwLxChStZuz7ZYzWvskekpRi8XAVe2JJo7WjTLEff5FEq7SrHhqbrfZ971vh3xFabrWHotPJZ7eY",
  "key17": "5bArdV8pRkBmqDme8NFcBLTJPcCRLhLht3TVzazXQzjpSTBsVnYV8CuXZJ3vtejNRsombdam3qpJMGG169Gef7YG",
  "key18": "4iGT36k888twproDePdu12bSL6nSaZeBrvZ4dmtfMzZp5vWvouT1ghk761noyAQ3dysVUKBo1tA5LTf3u4trNu7H",
  "key19": "4FuXV5CdJ1x7CG64aUUUjNxFDoPYPPEQLQtg3tdWxCy2GHMSKtgmpC8hkeqCdiycGpKGWHUTqLT8avWCwSG47hYy",
  "key20": "vMeoSon6hWkgGP9Dg4NdBhwryimtoQ3xqpgEcNz9HnxX73U63whtz66B6CsYGzKzr3h2LbpVWAiaGquN6jv2Ssu",
  "key21": "H5QWxxPGBgzxok3XSizwi1SaAw23YVaWhYcJ6xymD1dYyhPXddW4i1SUVjyX5nt9RvyzQC6TTRPptYC4YELfvyD",
  "key22": "CHMmrMk6rnx4uSfetE5dUetJXvKvMN6KLypuGyWEBj8ULjHDXLvy4rrHtZBRhYWtZ6671cp7NyRdTqyf451MvMz",
  "key23": "2NvXngeAq1BZyGLJX1UoKDA3UdB3TdFTAddD4g9cwiTSuxhyHdpMwM3Sg3qnWe4xnNzktxnqwFRxUwgig3hkFM35",
  "key24": "4PbzhiiWmFgabpYGrcArJkRKFGg2XqMxPWshWV3TFWXRYscYc3iYN7VxLKx4dr8QXuoytJm8jC1aC5t2Arb4WomS",
  "key25": "2haYCcFjFChgaYmUx28QEQnbHDkQ3qYvwKdsEXXr4ViVhtBhgK4hvze81URLq4hKi8YD33dPbiCdSiARWUZp5Mek",
  "key26": "4ixtRMTMHHhVFznPX6M86MYCfQdXzZxaog7RRAMYt6Yy71AHwHGAikdEybAEV7bEhoGTAuFfYDDf2vpQ5rgPQTQc",
  "key27": "3QzQuP7keySYm5TgURc25sQgHKXD9bzcWN2Ku8grATvkgGkRbfCprnaTmH94PjUu4pd7CoDXKu7MiL4sg46QKMwd",
  "key28": "5FCeQNnTjCJd2nVE5bcby6UtsQiWBB9EJuoc4n539z25yMLvQLxnwFWjbmxzUki4C6hrDm7R26NtFTAGUrygW5Mj",
  "key29": "3GKUviykfJPYokCmxZnopot9XmgADnmSnkxRtLiGhipAoDQV1yehG57iJVydooW7MsLhZJxb9psHV9Ca8FcRTpEh",
  "key30": "3NTtyr7VaK1r84VxB1NA1VAsymSqhEbQ9pGd5gtuiSkaZQPLsorW9dmDUp4dJtxAziNKF6sKodfoLYxEru2YnpKg",
  "key31": "4TKnzdBMjBJ2fVeDXp9tPV4LKaqs6R34h9BG7tafYQK5A4wwwsrppmcEQNYejXVfXcHCSUinYFGeKB5dPKjfcfiF",
  "key32": "5rRmRvJyAcopq46nDM31P6RX5qvLT3qxQUxceu6vKMh6AcKA5fkfJF6XVxWvgnUAdQetnC4mN5eNwoaZHB5c2EE4",
  "key33": "2jtZXa2Bd3QgVrRWHfaGB4CuMTh9ZoxDVk4CbXGF3YAUT8bHiFigP9dqL1mZxdwQFDwtxE3um1b8xD41YBqNqgXh",
  "key34": "3PPzMHC7GdQ1Mf5D8joGnYG7UYum4R6K8TGJFhqTv28tNXfndyKgUL5kaKrxMhGwJ1J7D99yiMF4b2hk8M5yfbEv",
  "key35": "3oJPWSVcSUUs79M6zcKxcKMbCcrrcCDxwK6vVHqLQwEzqz2EQRe2SxuAGgL7EX4Rg51cSwd7vjF9XCduJBFjFgTb",
  "key36": "4vEgZB6zzVkzhXG4Wxz9JuEhKRstBiSQhxqKdHDryKjvaVNr9XuNdk3n7wNUE9ZczGWbhiGsWaFfwQkKbtorePN7",
  "key37": "67JVr8mT3v6cvUw2Pw7iFdj326okNinQHpixhZE1FQuKJf1QFfHmWUoPV2qzCwKHzKgauKdtMCfnsfw3bZBaL2dV",
  "key38": "322UUQ3yQGmTqYsgVQSDnLPzngDVMgtV1sr2D99JvbYJ2XQVfJbMH3ai4a8nkVKUFdgXhPrRYe1uxeX7L5PCbocd",
  "key39": "38zPPn2bSrvditux9rKgNdRrQyq2j1w8SjJYZs7kki2BmpFfXM8dbKWYPXT9ywFRMpTts8d3JGr5zMZa9EbYWXPo",
  "key40": "2wmEBJphUW5JQTq9cGaTKxGwiAkjSur6cDazyLdiTtyPemDNz8NkmkEEfRFWE5iAbjCAY7LMi1xsiZuSbZke9sjJ",
  "key41": "2LgDoGhKQGabooKdQXCzot28ffYQjXqbzCfL4N5ycfhRTm2adYy1krT6ojSLvwweEHg2EoyeK6Z3fG8wtK1sawi8",
  "key42": "5xkU3Z7KPs9HuBGZENatYirLDvsCnyJn9pGHNsKXL2edYUA5Pa4aNWV3Pm7TzesqEPX3QyyimayX8beyVsfnwNx6",
  "key43": "5oW62AGrvi2xQ5tN1RyWk2ZvMXZj525Kh7acCLb1aARnt1TwmokjhEqKytzLYdzCVzmpmv4V7Qr5p22YepACCWkH",
  "key44": "3aq3XREaCHDyguS22jYcsb38fNrX2JuAwdU8XxCkGdyWUi6KNTxJNL8qswcYYiSzNZPGVMSRn6C2faDbRydN1aHV",
  "key45": "4oPn3XnSVDmL8bBLfkVVT1n61gMSScCFJ1VvBYijNqWmmvgVWrkDok9p5y6sJECxKPpfzSngxXpRzuk8t9ASoivy",
  "key46": "3iPskgnBhkZPSsmiUGcPbXhJmecySYMj6oR4NLGRaTRKuojUJD2PjEWYkSEhj1eBZRqXf514uLXwiXL7F4bQjJz2",
  "key47": "3FJ8UewEUm4ERpzfqSP9haNWfagvVU197z99P3vYhAQhFxaf4bMJMcQLp4NL3VynRw84vFuj4n7Gd5ctZ35BjMZa",
  "key48": "3eAMa1b891VNLgWqyAcs7epnMNiqLTp1tLYkEgoHX9pcgT19zLbFVrTK8X8KuXjkn2ZQAE6VR95pHChwXSseCfuR"
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
