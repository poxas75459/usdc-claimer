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
    "2kCWb6K86pQp2aPeETYQhjLZJBhf3JPU2yNBvsQvGzz1n2qxxFYtZF9M2xwL4hriaWADz5XE1D3LP6uE4dfbckcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAZtxgQvr5r1ygEbJZHTSTZDv4fL7nowLy7bcWDqQRSWQ5x5gRzEzLwoHW5nputBqvGuFywjJ7fNBWApfF7jugn",
  "key1": "2a13zTrytMLAoQdSagwavYT56AC6sGph4MYo79awf2xPu1AaTSwtU6rpWcYxvWS4DvK2sDr2itfG5sjCWnW9DG4A",
  "key2": "3j6XBg77EAwgy9rJeJg6RgVt7WgoWLtUhk5aAxxZB3deYGbM9c5dhHLv4WPfraqhqZpHsQf7vBtsBhjafPnWG334",
  "key3": "WrPbrTSsA3avBPxmFmgRRkh1Gd32wn99J2hwZm7m1M4MJn729NZ713fgAdD3muErkeHFtpPTzKxtjqcDwft12uB",
  "key4": "56qy951btYRJL6cNqkybqnqE28cnVfLTQ4PPyqV5G4H2b5foz55UrggAGjLr23ackQriftENVNs4diDjprQhnxgn",
  "key5": "wXNCr88ejLkgZgZQxA8PA21LGi3QsUUsCbhBcXhhm9gf3Wv1BrbHtGvkGaXynYTtKdnpr4f68CLt3ZQ9bwzQ3pa",
  "key6": "Wq4rLCFXo44zhmACQfHgNDvaWtdq2RviBDsHjB4ja6SfP4GfM1yv7sw8LqyY6XWqvpirqT4QAKy7pmvDurHfjxy",
  "key7": "3PHDzXVKSTb4xcfqmbEhYPTihkEhmShu6zXYKoMkbHrSsiAdedi1HH8zq3GpCNhjk19zxVw85yLATJknqZ9SY5EB",
  "key8": "2vo963DNP5EP9Gpk32qMm6w68WcZzYDw9CHWa6nYTUcesJwnbJp6P8mABcykYNv4oncbv9CXHoCqBVYHfkzgwu2M",
  "key9": "MH3LrThdGTPpMVYTR8J11DsQLhJm7TMKnFqUtzVDj94zb5puyz3NLiA3dMacxYjMa9iKAqh3EwbkAKgyByBDt7x",
  "key10": "2Yktw2HBZDa54xGN6E6jovnqkL9jvkPH9JGcrkJ7k2RcYAgbgyLr64EdVoPZcypLwAmmRUgJoyqWpSeBMrvtQAdV",
  "key11": "2q5cxiwUpDkWMXc8LBt6Y37U4SUB8JJuvq4W8MFeqAbpWs2u2tJ5SmfZoD2ihKwise7nCnaz3YUc1gR9SqwGdN2C",
  "key12": "4o8txGoU4tA2GQZUd8tPJRuzrz6xFE1hq8EYWGecsjSHXUQ1YZaQL2q2KfhgMFYdp3aCprBeiY9Vp85yxrseHXbU",
  "key13": "5g4cRxMGL8DKmn9yk5fwSJYau9ZcrCbdPUcGtxCJ3V4CmEkAdw2H1Ypwh34jEQ2EYpa7GuBxFDr1uvD8nGNJqbGH",
  "key14": "SqyEtHQcJTpAZfn4mSPbTWREEL5CoGVtQR4kpVnXq7m5CovneZYjTupfPu71etr8WRW7PUXAbmCy1NZQu1J48fy",
  "key15": "4cJEKNpthG3h3GdMBcwkuxi3Uthb5huStscrpC4b5MjnwPob2TkvmNXJmzzmKLRzGqcFuYjWZ4aZhapcA4ERdtDZ",
  "key16": "4gf2yyEAYgiSyoKXkm1LCkvJaLvMr7jbDuCMJpYtYgcGw21NYQQ1b2wmP9ayYmaCAZ3EhYYJLTEtqaHEaoegTtJx",
  "key17": "2iQSDZTFHS1dUzBsr6kgoxxCyqdiZFnSo7HZijcNUq3FKBrVQbLxgYhWiWZuiHWKdbc4ZasFwHYZxoQ6QXYtDUQs",
  "key18": "3ad45eCL33vT2C1PaSwTvtpudfLE4p5nHJCfxCMmUCvswGqaaKauHdQvvSBYFSM861F8zb5oojrsApuH1Sz1viDj",
  "key19": "5JPCa7HTd9Jk6xiD97i5mt9SHDMFbb7DbbYjTBC1S7dKxxuwvGvewgY9F47Qjfq4JXuMZCgJdPpdbicR4N7Cg4Dw",
  "key20": "4menjUQnc8WiwS7KB6jD8L4panDBLKnJZwa22dRh31uzFwaqSii9N4iDMCpv6CFmoebRMFMvQbfb3S3Wgz1QdWSH",
  "key21": "2Exiu1rucfJzyxpdePeFddzNxfpGLfCo6LrDi15UzpZaFjYnsg52fwXQJ79Q2jWx3tP7D18bTByqGiD7jcG9dekB",
  "key22": "4DKYrx7uMd9LSpZJELoEMHTGHJUWHjGRmDYwkPmbANfvdcLySyjhqT8Lsqjw3uKXBs4wQ7GHY1minmN95ohe38AM",
  "key23": "127TPB28taWLzFYcHGHXUS854byg55HdtS9LZ5RJqZbdCaagQcNLXAVE7TKSLLDiMjqeX3a6WYmkouq5NCqFkJX7",
  "key24": "AHMk8edcNntpg3edCs4aN9xAXmPuBjdDfSaRMJTSUqzvd93NWazYqVoMdC1uog9g6EYNoWeMVPUKHbPa86imd3R",
  "key25": "3Vt9Kr3GdxmxNhefcRZfpn16GNxSgeSrtGvZbpFvANgC3v6BXS1QpWE1Ng1pBWLcPoQveiGKs5v67PYXLxvzCQtV",
  "key26": "5uTw7QboENCJRHcTA7XA8foDqPcER7HJjVpo11cGDQnWxzXx1FoWVYYFG1KfBRjvhMtHwkkbDusKW96vgX1LfXD9",
  "key27": "4Wi6X1Z3oYrDL1316ExRXzvvNMvvN6DzUJWS19EqyzJtghaCTZfv9qdK4zDmfQh4mgYpMts2rFRCMhhuyPwXsBWV",
  "key28": "58NpMkeTsgwFeKNtvsJaCQ7ZqecN4dutpC2Kd9duoWC5Fi1h3YKrjv1AqoTdpY1xwRSUCZXuaQ6K2MLg42C8Ypgb",
  "key29": "3NZLW3hyaVGeY9b4Rx6qv7j98NLNcqBRE9HbUQSLhKVqT8maEQLDcs7SGFUFpFPJXNmpKcW3248S4LCRjUSbhnzi",
  "key30": "2u8rfJ1EQw5ds9z37HvjHg3JrMoZJ6GLZct9KmdHfVAZ8CaE5vB8mDJWUwkG6rkRQb2fqduhpvJXBcCTNvY6HXxu",
  "key31": "5SUXPUhax4UbRK9FYfSVJKReL7D8tWJDWxVAUEnmMwockU26FwwYjJZhe9pncgdpwejJZkThUAXgEQXtjjXDirXP",
  "key32": "aXFQVENivLJpNSrrF33HqR478XGQzRJBCgJZ4wgTPHZdWYfajgZtiytDTpZ4bgmLe3suoceTQwQ72pYF4JZVmmf",
  "key33": "4wZChp7LQd8XwqXF1qXPcwJUXkasC9rc8Vizrjsx8p9Kc3EroGSUMmJmFfiAyWEVuobQQQ6RATRN7PYgqKjDaSYg",
  "key34": "w9EoexLoNRdwg9FZQKBfQbnka2VkxawV7xkpon6bLszhY5CPR9i97D5rTT4ac7wUdSmjLaojLWeVtmj6YV7oHJ8",
  "key35": "5eP1s9w3JJJinrtpXBdQJdLDsKZXDpvMxPzaaBotjupJuX65SE9J6Uuk6yTAvM8j2pJuvHwj7s6jnHFm1pecD6SB",
  "key36": "5CXMEBme2tj1N3quRKPJrku8NKMZ6PGbyewzg4ogJXX1U6E73VZ5ZBHVRAQKwXM1Qauq9knCCHdpERfH5v1xuptu",
  "key37": "yHNzqXiPKz3yQvL48Xi9ouYc9SGkQirkxC5jxZt1Yvg3zXPZtM2ytteFap37epm5WvYaRo3rX2APU7yJfxNospR",
  "key38": "41Xq8eKW848gmmYohv7tWC3ZJrMhgsRX1xdnzSquUNt5RLm8Q8HXSRVGZ1vFxPy6gcqRgmXHXzPm8A6Fiu5buSyF",
  "key39": "3T9XscHrowXU9X6vP3zQ2KWbmcQvk9ToJbmmqwmUL5Z6mDeFiqE7VooCwFVREKcNfJnVnrMGTHQKaAqTJuuj9JLZ",
  "key40": "2qyqfrzDnKVkHzeFiZLLtxw5M7ZoXnyfT8aAy7Y7uS7SyH2zrvS17YeaB2YDkQRrLpCTkFuDmWqyMFncXg5ZQ7Hv",
  "key41": "3rx5UMeKFspPqAgCEqc6WVWLM6wAVbyBYro1dENh8ypr1VCogifZWhKW8LU7spqigPLkuKJgeJP5nrG4VQqzatBf",
  "key42": "4b7UFDgkP72gJkDUKvNzWW5dSdySuYUDwy5wgAtyAx8293DuGBP4Q3VfDp8yJhTrBdnrtUHQWzCEwqEKnwRC8Mem",
  "key43": "3xoHdpwKaJeGZYhSnnPU3syQ6BYo3Pg2A4pYfAxKVPitKziiaShHABJV98w5UUsLHWY11PtjYbdJLW5mN4yC5UTc",
  "key44": "q9Q7Zt9fEcuRhY6ZjBwwC4TYggffmpSaQeKnYfun2P9acwTZDK4LCA542sGiVwm5D4fAo15x5pgHiw5MPbFnAUR",
  "key45": "53ueRHjZLW7TGWwNtnFyQNNPzzzmtcsZJjGcUpKv6537Tm54A2wi4cJUFh717SvNBQTXuBBgjt81HsDpPThfHekp",
  "key46": "4tD2dAC8NNgvaNvBMeGgwNesbMhS5EtTah2tVeG4RSMRsMJHohLgYDyiUcqHnM6jVydAz5DCzrFykikoADLAXuzz",
  "key47": "5qqyQmtxNaxwaR3dSfAhERXWrQEE5fZbddiSMKbe3MLC4mCPbUa8DBGgrDvssRbWPgNMrJDzYe3gv6PinCkJCATV",
  "key48": "7M3GRuDBGrd6kogWZbSDwJAdTJpo2cWYFBoqKqoswXJdfMWqZr9ZPmFuAjsvLHSZ5dSRse226VPjZSNJBM8TFNp"
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
