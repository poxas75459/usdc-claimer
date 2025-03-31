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
    "4CTxbdrKArXz2MracJTfEfEDzf9xWk9FGcGXGhKn4ueccuh7hmHbenRkgM4BX42KGohyBakyzYFNK4jQdaqZmoiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4of3eUXBABhVWxokmqZxkhGyAbVh5d4TXVVTjMFdvwjtQ423oeoEsfxbST2VmpHnmPaK7bmnA1FJpenChAU5R7go",
  "key1": "4iuydev7tgv7r3iDagfYapRoxPb29q2DzC3THprTcNiu3mzJhAT2oG3M4GfHWHsUPuATeG3oJQvVvmrvZDWy7bWo",
  "key2": "QdHNoXTJNKhTXBmz2cSApb47Wx2WQjGUxhsmDMe6jM3WJidtqsRKY6cPhuVssTroc5npXGoDwvMLKdpV3W3xhDD",
  "key3": "NiZsU9AwDuS8YB9eenMoheobukQVJNyX1mkpQherZrfExj66WVvgkXUKUPyCd7uFBjYSmwCZysFJj8j43SUwoTU",
  "key4": "CWFh3pWFwynZUphvY1QyVTcMcP7MHXoBF6sbBkHkdgn1x9kPPZcNbPfEoPbKorTmTEzL3m3dQ4GpPy9YTV66LX7",
  "key5": "2QqATaJYXmLLZxW4CZuP52ouioNjkmmDYfkL4vBV9PB2YdG6CEYkMgZ3FkbveXvjMhWJeKieALQxLPn4sGVxX4Rk",
  "key6": "24c1hJevAa9xrLdnKP5t1RUeDjVPoaod3F9zN25Ax7LDfYpz1JKZTbgVR7LiuYxqk9WyKYv8bEDKUWuQUpHAccdx",
  "key7": "3iCuhd1T4xXNvN4tkzwG9z6KHJR7eL9JZka8SG7Ard4teQVAtCM7WKCxgPdDnVmMYHjzboJGm7AJneWqfyBQd73c",
  "key8": "44K4FBBRGKiMhi4CZ3JwVnJXL8zKJGhQ7RRd1oap7THtMaSv4CxaXbR3D86DJfKF9aRPqbW9rU28u7JjLqfYncff",
  "key9": "4EBHvoZuC3hM7wFrKnwvV5UbVQJhhFJrsGEeF9V6RCLMTwGiT1tVNnTsKrJej5kaAs4vDkAqi9BCXZtQ1AvzhRc1",
  "key10": "4mKgQQWHHgamN7TBJtr9Aq6TQMcgjdvRqxpKmZE6UBWaX6f8p11A5HcpcorVQXjduzo1RFJEgjAxsdUw6YS69s7r",
  "key11": "5bQVoeCpgicKs7DFce6QKoDxDo2ANqEog1JjE2dmQk8XZbQ3xEDXfudqLPiKR2WjVCNBYNKRb71ExqSCnrus8rAV",
  "key12": "47jba4itZBf23kn1GbDwpDVvETupEGRFm2D2GCkMFDSvKjBWz6eUw4DU5NXePSzcPzZddN828RR9NFuJugxr4USG",
  "key13": "5TM8Ww793JiL3qUUfeEPmU38Q4qgkg1uWtni2LZqZ8oAxgKJxM2ipWqahjw1omBmhtmY33PqTZznbdc5adzUf7vA",
  "key14": "4gTJC7VLy7StnJm3z6aJ6EhUAuY59kcxj8pAvPUCwtFJ4ZRfCdGnCqPy3Ax11PVb3PkWkoYFKvPdfgR1FfY8DqLT",
  "key15": "Y6V6iLP8vFjvZLSexECqU3NFTMd7zrd8XhGkxzKtWTbbKj6vmi8MqKLqoKFCsnN9xNDYpBYKeDQwR4UZZeyrtxM",
  "key16": "29y6ccnqnf58745sLHWGxYbvBDs5eJDvC48mQNdGsFLQ5JRDpwYh864tGKtfenfAAHcjfg9XWooQVym2Qf7WrShW",
  "key17": "5AfzBb4b7xruaXJx1MnC3vm9EGYNebs4ifVQDswZ8TgEWxiwQDeVqSFb8SqdZrM9ZvsxTbwVq2GwsY5pGUgTiBM7",
  "key18": "2j9nstrmm2Sg45PFMWwA4WmN922AQqt8P17EnCHiUC8EtXquxe4aRUPfjP4PgG1ebd6CLcFUqcBkQ5sKSQHQc1i5",
  "key19": "5Ax9AK5Q3czZPotGdvkw6ghKU6yPZPENFSaizsaCaBPKzoa9Z97ggHMLn1cqtFPGbE97wU389wPZo7ffMoWx12y7",
  "key20": "2rvzYPieswFkrqCRTNrpZanREtPf2EPkEXwhqp1Ss5G6pDvVTXXrHy3QnZix3Jcx5Q2iVgmxqj7qPHvSNbQo8nhs",
  "key21": "4FjNYU2pvTTrJHNWRxqnKVbMeis6KwhxCVhQVMCxA3JmtivNgyRXSNSeUYvEiZiC5cKbnrmfEDHV28ZF2R1HL6pJ",
  "key22": "56D467Kjjqj9BVQzUg5ZmjktGBv421nkr3JYNQL4fJYz9ETnhww8kg4joFa7ECkGuPNu46B31PiFw1fc4tDn7gUB",
  "key23": "Bd28z1CnYTDuAknGTjmtCTWKtHsnf1m99MJnCfZfdgshHNALZFVuvfEv1QUzsuP3T88Fsp1mTnStRNUB7QmeEEm",
  "key24": "3N8JPvmqTn4gSeWcw3iuAgwkgs4mtLjjshHS7XdhLVVjTU9t9hJP3fuuCt8dKfjktsBGEjL8tv5oFebjLJysW5MM",
  "key25": "Pb1azNet39a9HJDshCQeqGAchDgBWSdWAjSRyGfcY718ffiw1KKr4RnDUV1JkZCrTxKN8ikfChNacL9XrMsnmRQ",
  "key26": "5NoaM9pXijgGAPdZ2mNJmHmJnbvYmSqnxYQijViSXfAhcQe8UKsTasw8xNX6YBJZ2JpUQFViCvV5TcjQwnQtZGB2",
  "key27": "61sNjU64mY9yEXQhJPHjvrWei9VeYdWaSk7N545YCt68PUMfUfuQZaUjUFurHXy1qKfSBKXMUWAiVxxDXdTv9K1E",
  "key28": "43CfSbVQbqvRSj259WxwBGWZAmLEc6Z5fazDZrHt9XDEW9sUu3gJKrEB9j3xgsgVmAf9JnZg25D1Y8kWwMHvejiy",
  "key29": "4nZWDKMTxMvuRBiNxrmBJ8qSfqv4AjCSDXfrFwJ4QnhU7J13trk14Hn59nH24EWEorvXdFZxm5QmaTagBKqHZJze",
  "key30": "3KhWhCjM9yAwZnz8MYzSYKccbR4jGeHGq8JXDEDFBHT9uzMZE5UU8wtyVgjgqkrM91paHtKy4aF1c3QyGrLvzb7B",
  "key31": "5HFguhmQnjh3uvRBX2tFv8JiiWVZyiz8NQJisQyjAHUT9vFVsEoxBUdxtiDNJZVUayog1Nip99PbMwBd8cpJdmN8",
  "key32": "4prLQbonNoWSw8zNHVwjyCQ3xxPzKJnSp4RPVQW68Y49DvoZ6FZ5MYYBA6eFLaDsH2VPRrgw2SFHpAUs44ypeTNH",
  "key33": "21RTdUVUjDvQkkvNon2N9StbwtQsARPZRad52qcBZLx5GE7dRHdYSpiAT5oQ6ws5RykbjoRSuC79VJSPCEixwPSc",
  "key34": "4CGpGU9z357HcGRnSfNLk42PncKfN1R979uRcyEH24fUGmqM8fzMQdphkS46d3YqF839HKfLGVhDUV1CigSc5Cd",
  "key35": "3Jatigi9GUESTAbYbGPV77E9a3Mze387GrSL7PYpviD5iuxZZxQpNBQqRNs9p7UkTCR9sNBhZeuMpCm8p2x2Lfs3",
  "key36": "3agYiEDPPeKWxHkabwDMWmxkFJd8uCYNLRW3YEF6KDHJgGqRZaarE9W5nRnYVVeGcBdMr8VUphBs4NgzkxnQ5Hu6",
  "key37": "H1VvHfs9Dp4mvfbkNgLPCGzbfioiAPD828BUZVt6YWVVMxfzqdV9WiDvfShRe1tSBRgiWTwSDUqBNbwCNd8pqFN",
  "key38": "2BQFqaTVLudr1d93SeEeVs4MbRyQTE7TBcZJBGtGzDsVLoKAG7nkLp6WsCcXQcmJk6FZ9m5TCy53o1Sd7Y7ZSoUv",
  "key39": "2EFRhCWCZYek7wnLBdi83dtArS4TZwqpnKuCigr6X1Cs29otLvVbZ64vBQEVbcCpp33MdStG1yS8CiwcGNchqipP",
  "key40": "8Bzwm7oUKJGAKJMXCkgvfH8v8huAWK7KQSKuLG6zaNbCHJ7rkKz2i4hbx9ZghCeYyUAgLKhzLorceYZczJbYzEx",
  "key41": "4HbZTvtUXaMzrn6aaKpHv6VfxvJYotQ7fxTJVtbNaSBq7avLfHrkMsnYq3EHeedwuB64csoaL3QFgJjMtoiVde7o",
  "key42": "5nZnzs5zWxwfn4ayaFEK9FZY5WRd5SypHK6LQJB2sGerx5zuMrxxGLN4TaN6vqc6xve7K29UkvWYsbcmjmA7d3vi",
  "key43": "2mWEkgYW7yNmA4K1yB8z5EwXZoWphsUT3FaSH2DaQDjPKGCVJzHW86uZRjaDHC3EbvoNYiHeoE76aUfsumS5wQhA",
  "key44": "Vv5jqot93G4LAmyzanUNuHyVsPR8YA2LFRjQfa3EZKXzxt9cC6GWz3Cxt12FPY5gwwGDMbGJJt1Xr2pnTPrfucm",
  "key45": "2D8LPGoCjgSwJGR7KVEaauhrKZN4v65wShwZNVnwvyUiMMHHuiAtLoNgkRaMhAwAju1PjHXTqxavsMqgAYKB92hk",
  "key46": "3dAxNGkYsCg18L5jw2tcSfKFU61zZw927UUDTN6oZK43FRDvRYpzuQy8kZ7PTX2sbcLgqabKtWwBcb8Xabgm6PMe",
  "key47": "5kLemgkDRUMpxoDrCSWArAUaDkB42JSgDRg8VCEnznEJSbfN42f6vWhnTPxcnKP6VdmXbDrSFHGk3Fsj7Zu33HcM",
  "key48": "2KLKLKH29uMwSwFys47LstZZ2zW2JhqkLFwvdipMefSaxBy5GxKpBZYfyBm5HBqiDrMX3zWpSogi75d98CyGP14C",
  "key49": "3o5Rdj5nVChnhM6LfJy5hgyY157nFg2u8buf4ADEVATyTzTSqQ2bnYVHHCtTFsug97Bkyma4YyA1v6PiLDRWo6VL"
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
