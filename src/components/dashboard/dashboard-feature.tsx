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
    "4iUkujeJnaCdHo7Fi6MPcYxAmy4sUm7fMubfKpRK943L9QUjpfPudriXAbunQhpAtT3NGEGR2CnkHDG6NUgVHmZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3gUaz7RLxFHmqLSq7v7BR6r54LXBBHpqfb4NdPdAupgisuKZJH6FvhjrHryUjQTNBqSGYGgWec14RVA7qqy5Fj",
  "key1": "4psmfD2j4421mDq9EozGjXMk6g5JBqKUy8pUFjVqD6DqJDiArFxvSS3XPd2gvDDQ1guhvfuiK5RFpBMYPpGX9Sx1",
  "key2": "3zRoiyAsJ23ogRo8gxi6vrfLig8o93YdoLokTGX45CqifgUSQmw2ygA8Er3rh37JtYgGGcEPn4V3fW7zknmLzq2i",
  "key3": "5Dxw3vvsxY2bFVDsztd5A1pLMPiz9CTxthZJEB3D8XEJEUQk8EbvqL9Q1PXs8t9hW6VunP6VjUb1JQFBmbGUMUjL",
  "key4": "57fBf2HwopdzC27iX5BAsvK3LafnxM3yMq8XXTTZ1cF2soYeKTRivmgU8sxsJBQhuHRKhMKvGZZPvgwA1oRmU3kH",
  "key5": "4GGXKr51459BkPhjgLpSkGgViftbUnNJsVwRAeQp3pfFLuPNt3A6Z4otyQnRYfLo1EzAoxD3BtTgu6BWV4z11Sid",
  "key6": "31HZnu6qqKhoQTCyaaZ86r7ABGZW37xhn97BbVo6YFjjtKDXEYYPcsL8VZssRZWqHRbe5CRwFWzoyJ8cyR7bP1Go",
  "key7": "3YEMFfNYD4oCqiK8k3E9vV2obxSk9s1XyCUEpUd7wVFs8KdTReSMQG9FTs2YFCAzMdiwj9bLS4376thGweNh1prD",
  "key8": "3Wuag1SPRVZWZJm9xsxqgAR9oRUX6svnjyArZboy5Y8WAbGmV4ARphwUGz7XUCiFB5HhVgz5n6sDP4XqePdyz9UB",
  "key9": "5ySJ4LcsmQ4pFFt6tZ7q87N1M3h8xrPKdLe3ZqFDjPxa3mZc7aS5haWHEXWLc2W9UoaSyfWoxvxGKgWXWwsEkm1V",
  "key10": "46U5y92c3jv3pNvrBL9dWRuYMEWuJ8NiNdXFeiWtRYgYj5EYJtiHDRpM7Muog42NcjftBvYzwSfxeyFxAMBBemiG",
  "key11": "37P6NhNSbRxdMWBeTgywFAft7tUStTttFbBcAwWtG5PtHSBD5zkumsAYs4Sxo6cr2mb3XMXQVFwE9NfP5pD9uXYV",
  "key12": "4HVbXnDffPGVGJ5XhHBCU8AL5QLFYYiBGakfda6mwVUC5yMxtPqvaZWpExNdztprpoW3X8FMrhiH6Gd9xHwavdDY",
  "key13": "22Wyv2Xjjx3ZP8RyJn4nm6ZJqUGDYtSQZaDobTMYMGZL4dKs1EpowMfAnc8TLcxk51X5JwQfVEvwoZKKyRv1VUfY",
  "key14": "4Q1jb5Lr2xpgXjYzqmYfhRk7t9fv3TaRvgmwKuCQqy99Eh7hi8vvq1xmEozSh86XqL296jMmevRdAHMUS2vHUXEi",
  "key15": "37d5fUwxian6ymFL3tV22kr6y5yPia1J8gug6fWhtahHt1tjuFPGsQh4feDY8sXvgYoEY3eUo5758FQWPkCqMdvx",
  "key16": "5B5dUTVtHyxu3gdW7zv2MvBo2tWuPUJcwFaxikp98UBqtdqE9G8BhVgQbpWCdrrbhv5rEgesYSCFeuAqJDhRG6CV",
  "key17": "5eZirtvAmMjUuHVaEhDDX6ZEvSf57p2u3Q99n4iPKC55EAVnkiH3GyeYm8Wyvs8o6ACqVycM29mqG6ZpaqxUn3Gg",
  "key18": "2uMPEH4gfBUVWNLz4zTurZ7hkruj9LMtiF7xNA1Ui26oYSCRPEjJaBwCZYYxUrBEZajHAfJWz1aRqtFdqP84cz8M",
  "key19": "57KZCLoAsQfMMwE7LmFpDpL19ZALFKaF781uDSCkb4iPdz5jN1ZhcKZbHTHE4kX3usBKH4LqYA74zskK1UUUVyKe",
  "key20": "jHBLKSPe7x51uF9GsqzxSqJRxLLno58J48iNKKQevHfNxCbYNuGy7wLJerM7GGUL9XLKaQKvTUhNbxSL1mKisCC",
  "key21": "vT9MV6QPbGCwUNBkCZSrUY7ADbxgrTq6ePtu9icPzvKEcMyFjh6TUGwu4R23DgGEiwJJQex4zaasQ5Fm7ikSpxo",
  "key22": "2e6fBufPAj6UbYdfinCrJgZizifmsHjFAHwLtubeiWM8aShioocUigpJQYFssZxF5bYz8JCfwVHczGVc8UM6H5YV",
  "key23": "4UFj3nEzFMVcuXSJ3JBFwLL6X4dNRr6aNr3nV2Zwqc4LbbRv7HwjrLhgCdqv8Rdz9zgt4GvaFqytrS9JCjdcyNo6",
  "key24": "o733RTLNsHJgwauuLNocjjo1FRF6pqHkLCPDGVB1Mnd5dfw8odA9N2f8Pr1QQB8a4b4ddqDwPK91faM4odJf6Ed",
  "key25": "3ccv8VSdP71GzLLDdTxC7a11MFgBbo9YcCX8pHBVC9kDZegoUYe4ahw9ysANEJvoBZ69cVe1nP2jC6VQp2JtcUtL",
  "key26": "23A87DWXC4vEtWiemfs5xFdK8LFix2KC2XpTQGRW2axUdcWNrBaSsxmhavZK6R9GskP1dgHwPefeu1nMf8X6FHGk",
  "key27": "2TdgLbmkjnKLQwC5XiuNskJVvz15r1HtFbcyeQNhd9BQPpuDbXWsRrX5RJW3Cv7HHgGRe5nVvBUoZeYjBbpyoHEg",
  "key28": "3zYtCzgHxfLbLk8jHCgfXbbshgDFcp1xhExUkL8hCzJvYv6zLQGjXePRXLyeQMVhvJ3zhXyYe8zc71BtwJtUjsYx",
  "key29": "3wg98WNkQh8LkC2sFQa1iH8xer2owkLueWavHb4AunBhHjs1msm9X8UvCQkgLYxgrU78HtxJk46aUisBd6WyutSz",
  "key30": "41kqXbdudKCDL611mfxkyKiHYt62MQ2nHPcdbCoESM9bJQf5bX5DKwqKYadwrJBU7i2Fo8HGcQ83o8uRUUNdW1hN",
  "key31": "sPrzi8TF9aUXw98Cca5j29ApXX1XYCyBM41Utc5CMSXEWJZNL7FG1AFuMnz5QEoxRFoEsi2G2mtKhbpoNiGCRPb",
  "key32": "JzPQ3xkiXjHY8pinnrbCot9EvoHRNhqKqPK9Mv6KimG3hVpxiqyM8LJNY1bfnGYsRKFKdBCnBLkzT4QNgxw8vdi",
  "key33": "BaFFpHgVJEcvWXduLzx1zCUEYNeagCT78HTEvi4wsySKoe4CdtTjYBkbzgY8r2nbb1jC5eH9yRW42TcbBQwZx4i",
  "key34": "5ZHAL1b7CeteRdvcoxiZBtrxYHBF94LJMKvXrQBSXcXBwKG7iof8aikP2q4LRwnvF5LMe7t8PAp3k52Av9GYam89",
  "key35": "3p6k8i3beugwNusSxzLzcjKqkhfsDSv7snSHMiXL19avJShNkQQhxN5V4P8Ctw8ZF6N9Bv1fHzNeLDzVgnD5ymEZ",
  "key36": "CpAT4R72YdXz696YqVqVXvoCybN9Dmo6oY4ZJcxXpBN2KBx8Puho4UPtn6SeDoT3JcRq8svFzewUn9pfwYgmRaH"
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
