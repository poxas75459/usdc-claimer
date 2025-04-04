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
    "3XKSUpCE11BgRaaDhxaF3Xt4K3ggr9Ex2j5r6Y7SpCt5Bk4gtqH7QAHrZecgANYHTKNWWLP6iRFtEGkTTQUmGcBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfrp34SXsxdN9DyPJJTfLrEoUwnXZ9YZy6YyHHLJcK8M7KoFNpNwH4i72EB9QUj1TqT1tqFFpZCGA2QPshxfJ2d",
  "key1": "2q2VeDo1CAhTxCKeEas5BqKNcHm6r8yhyS8pNqEpAvjfYuK4C5EiU2Q6KMRQd2UggLmQXEWFHzcWbiTxLx6FXMAa",
  "key2": "GKPCJqfg5XQP7xRMppSQ3LqA9SLETwRAw77R6YfVzMNNfzRoXFzxdQkZpo15Bh8yh5odZtR72Nwn29k8hyTJ8DH",
  "key3": "5wV5Drvd97caoYK5mDx7MRqAqtgrEpjrxPJrtHWEKN58oyKyrs8W4p2KwKcYH5f5ZpjDbqngSczvD7ojpskTNwqa",
  "key4": "2amtCSV6cTkEw57iStFprTMUHoG4vNLQzMd8bssugLuAk9JTd66c1EHHPBd92jYz6TWJ6q8qtb77TXfe3L9sFqCF",
  "key5": "2zLd4B8SmkX3NEDPTSUgQkv1vX4cXKGzy6F3xhLAXdsJtchhFWhVcRaE7CmxfkviZedgNiUxTLLXvUfAtVC9CSaR",
  "key6": "31k5K16nDYTGxMituBLUjW5sVhGbch2yNrU77K2MHg61fffvbahUL9EcMRwAduhzCPpgYoiRusBUcyArJiMkPV98",
  "key7": "2pQfkJLQ7Xt7rjzgWcFaKpFrBerQiQbh13QiwBS1JQ5ub7hTcgwVjk9kGkAsQLSmc6K9KhonRipZKxLC5ytxes9D",
  "key8": "dpt45idH7ERE3X88Sy27gLWARmA9zxSneQAYi92SxQcgXmK24gPSWzFuzTmjaMPMZgRnFvTEu4fkXTCMuK8CNjz",
  "key9": "Lku5GtqQNnmZXny4dnVougcaGj2YV6NE1ozJz6DYfiMseG2UFpdrY5U57hk37VR6TXDf3UrVPtp2awMYcNLPZvn",
  "key10": "114pXr8JgmQMEGA5AGJQfjo5yHBGntjpoEWB8yWBsg5rF3NhvXuw8Y9hENri7cFq4kUrmy62mr3VNU7PeruoxaV",
  "key11": "3GQFYfUDkVHe1aySMfn4JLipNhfD7dSPhg9sh5fFj14qNK7jDfoEBvXupCYCPChRgJHn3i5ZxyLFGmCrfZSkZnBP",
  "key12": "2m6aE11pWwPkuLEUPkyPouagwMHc4YPPJyHMS1fnVyymVfBK8oCbySbjaxSiindTeAEc49r3UvLqJL4fApEZu1f6",
  "key13": "m4tbW9HVfjYFeds7w6B3BWNqJKbpYwfoXrx4QdWV9cYWTdKnY2fjR4ZdgVYQHzNgkYs5avCnagAS1W3njg8yzaN",
  "key14": "4Xg3gtEA6U8pLNNEYZYyY6yJoVe5x2Ww6UqXqFRpqgVfvui2juoV5FKyGVUaqTJ8oCHdG8EBzfWRy9SwZ26iTNN5",
  "key15": "2ByYn9rToc54dhuzsMjW1gQFQVY9TaHgNo7gHPnqrUoQ6ALUiASFa1Pq4g24bd9Bieeqmpr1Rb7zxQNyAbvaTuW4",
  "key16": "3gWxtwwjELBBizuz4dwrZWx7Ph75gpU3XQySWGYgUjoTeFQgTT7ZMNMg9Zrj3bpcgsgU9f9uqor5sGkQP6dNNrdh",
  "key17": "HZW6wFXA238BantqqdPQVvRhUnitf5pZMVG16AxRmnntRHHLLedwpVkMzHdTw9PQrPtjq6oWAQeRF7yxxLDmuNa",
  "key18": "5etTz8uPGbWA6A8rj51hECqXipHuvFdtsdtfxbBjmhHdTHNxAUMMRHbhsSJJQ1mjyUkBQSBGQWMYXoYoN4Vp12t",
  "key19": "4Chdgu47hXAjxSfC3bCEKutkzRTdwaTyq2t8SKsbTe4gwZ3NVBZWRMHAiGx165qXHvMXfYWu85Ca93f24VPVBDfy",
  "key20": "2NHEUjjt4Z9jsHYcqCQD38GZ6u6ma28mwdBiQz8x2GujHtseJR2eVVmYQa4tk39S5v3GYZSmyjEyGDbfjjiB6FbJ",
  "key21": "3LAEz5Perz7KhRz56LdpXzqTTLSQ53vxp2ZNRdBEpVR6RTnyu1eVRMLZUJ7p5aHZjjtZw4wXbjRzm4iUzAtQPzqL",
  "key22": "4cxfjhqEsEZqfefqASW2S9pkz8FhFW6k411qtzBGYfeVojMK4kJb1agjE6JDqjg1LsJaoTufcbApJKDDniBmeMyn",
  "key23": "qk8hJerkEjiL7XArJfsHyhG69BixtBv9QcmVLgKbwMetMTDDtEKG7NJ6pBsv5i5GpdhrQfA5JNWqKZYzkfxYU8M",
  "key24": "AaX4G9HK3Ccqyy97ChP17BXPqjcbFwvxqg5wJCaoKBBEn6c3fZzJnRJtkgu4zBGDrstRLbcCoFASipRgU5bxYRE",
  "key25": "5ZGWYz5q5AAKoM4DjXjqFyJmyu9cVFyHcrAhQq9QHpQk5wBGagKto5KkDg8m5CZAkFxKNsTU2PF7GYYxHSf7Jwzx",
  "key26": "3yHDqzRo4p76yxAC5Sn8vTJ25SR8mHX3vrW2mLMgLSWy7BSPjh5NowxFHaHBeCJGGZckM2T3HFz8VbQEEm1Liftk",
  "key27": "3nvH4faPKL7ZijvL8iQrCicThiHoZaBQTvexsq934on5FHmYbpTvGmxSaq3BB54biftTE782YA5rLURxr84XUKkb",
  "key28": "32qtRzkFs4qHDrbipSX7nC7rR6kHHSMMQWwAhQR6G7iRyqiYVjqCEYaBZF5JjFBTVg24WobceipJ16HXStEmsahe",
  "key29": "3daPV4KTWm4gYjup7g7APHF4GZV9WEEfTV11kWgohchBuvkXVhneHaH6bknfFZTsGBTqtEbVVcH29ceMyxc7ik5M",
  "key30": "2Bt7MhpWYnhYhQweKyLZrbNbCJNgBVfyP8wfmwAGgU5gFaRfubqETMiu8kcF3kUv1hPGkGvUfBrc29AJb9hrYN33",
  "key31": "4Qi7Zaww3AtBKujvi5WTypsnXXJdxJvv4v7toRADPkxy7D8HfZTH9xUJaFVxQT7qX9gmvLy8oKti73uxD8NU1gep",
  "key32": "aYS2qYssTfV6ZEojHJqmZwyTGLwbSUkBJG6aF6FziLSjijw6VVuzp77qdMWuDgdixcRnGkzBune2Lfu1BCkNwML",
  "key33": "4CJwjS5v3wkn5Tcypu3Bwfu4PcFPgHLxAyVQQuX9xAqtzqnTFRtnf4HM4trVpUNdKHFuZNJa15hhjexkhqh3QFY2",
  "key34": "3fBuATjHZovCEpbKuMEkhAxkaNUsULPAFMTE9k1DSWiinzo8N4QBnDNqtPMzY3VRGjXdipZmNwyniwM6NuXjY6Ge"
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
