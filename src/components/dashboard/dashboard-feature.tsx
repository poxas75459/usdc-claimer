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
    "4baxxrRHKwsxT6giMGBrbtwDmvZjXxg1wVGUZDcfKF48uTJjWSZptFKRrBEKvc2fH5bawxA3GJgSxK24bXdjmqXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CQUj7zZvunMJgaBj5iZrb5qQXfmATxP9C1ffKZZXU9XriLv4hVnFnr8tR93w97mxyDvY1JFjZTRVV1yyER5sbA",
  "key1": "4xypfKssj489X7EBL3fegAdqW35z9gskDkFFDgk8rYxMo8Ggi8tqr7vQAcKfy3imzRBQmJ3r5sLku39Jta8haMJb",
  "key2": "2sBr4qqkXdZj17u68ndQ3kTRFM8hBYFnFvwgZKzUnEbt4H7PAh31ZxZ92HA763dXksemnwQGfqtLvK9RVHZAKqgs",
  "key3": "5rb9DubFBzgshoMozvewoNz9W9y1URUV28kQ4eiV8GQu5RsQGBSnUr6jfRT5HbG1WPQSgesnC7r6aAyAGQnKN478",
  "key4": "4FkHhvkePYqzzGrX9qHueaAjgwG4YrU2xhuWcmPnoGDt6nmaB4tyz99BUWSofFNwJYL2mHkB7wxy9sofQDbwvw6F",
  "key5": "4arZ6GoNz7DdJR9HNpwrwXjKycW7pX5nndjsTriUxEq9A3uqYCSxZdYnWW96Bi8AD8997pS4z7BvFTW2Fu2EXbEq",
  "key6": "4zxLHwQvB6xxmAKvjT2oQk9AGjE88zeXA2mBzxMNzVa2ibDnEFtjBxtBB3cBXPznvS91ZuuM5U2TLNS1eNHt9P7G",
  "key7": "2CziMikE5xcX6KfLkQdq8t3uJtE4Hndc1ySESAXNicZqJd2z1LW1DiqrrsohQLKVGZoM9M6oVhGpodigtNCt5oF3",
  "key8": "GS4khNSUwUT45eTDDbEFPFNJwkY4frjQpQjJxEAjxd3za5aCdVAZRShRzTPKF7y15Ew7rt1aL8PnVBpkaqr84SH",
  "key9": "3L8sfEqeXRvC4jS1qYStrCVBRJZcnUakfUSkhTYT5JH3HzmuyVxWN3Ns7BL6oTDvxCPniGmq9rsRYJZkkXYCUpDJ",
  "key10": "3RTxnTjjx5fGbpWCR7R9LwkKzyxeTMpDpDyVt7MAJfnX3z9HvZjaYMhfwmq1M5L6fW2DxNkvJkiAWyvEbUKgvkZX",
  "key11": "ftFBSpDPJc9Ew9zqvY5UuCwvWFcWo2b9q36RNnBeYS2uPvRvcK1EtVYBxjif1AvxKdTh4u1iFZeD4Z9Y2DxK3Bs",
  "key12": "5gJ6VyNCkUSBWKQ98KAPnCv9VbmbUB74JM9YSAH488NbyN3UcuGEPJVC5aDZmEznSMfmZzRDBrrjrxo2yr9sfeN5",
  "key13": "BK7TMEkyaymBTYYDTvypSMczQvUEsVgQDh2YUbNGA4EoX1Xc1GYv744SiFqSHFvu9ewqQSCmN1w7T37EChQj9Ai",
  "key14": "2nmgei41PY2z8DgGc1omg2Gi7iB9tzS8GRxuum47V6rZJeCg8denjpqMrE2cDJ5wdZh5GKrDnmNJ3QCo6U1JPbUr",
  "key15": "41PRECewfRRSxYGjexA7A85s1oEaKoR8e5hkxch2SsnZRAqMfXF8SvfPvSWjmerezssAyATHn8Be9bPTxqwvwjgG",
  "key16": "2Y4ycv6aXJMpLLFPtxPjDy8Ceuyc1uRfuQXXkwy2KPcQiD67p6YzmiK3CJ7qtMK7rPKkb45euYgVf3rorV6CLCpu",
  "key17": "5YfpHGQWFHJFc256tpVzVoqBhDumJV383Fd81QZzxfX8L6Km38b2xYoSPrX5RTwezekRXVqjCnPXPeh6mPrkhsRv",
  "key18": "2wrdsKr6XZtYAJBjYhsXgt5yy8bPbvWv5sX7CJuK7JabgLk2LUnH9pdJDTcov4dwDcctJs1JQDjebxSUvu6U2t3p",
  "key19": "2Egjfo3t6AjLb492PdY7jqQj8BVMUDCoCiBqecbrCZY6jJKqHxGcVjwbUGBBbrhBCT1RKwU82YetHZuAVgtEk1TR",
  "key20": "bD2PTPYRxxYTQvcrUz9cytxxLmLnMjwakbCMEpkwSWpWJXbgPWk88xkpTT6bb2btncD33J7VdsKC8vY2vS5AUbk",
  "key21": "4KECDUVYbAjDKUZgUeWZTQsME9npNxefeyPaGbsjASqMbf2VTRCSPumS6dbaGUQrug7MJpyzme29kPgReTfpSCLv",
  "key22": "RYGyEAjdyVQocUvoujScCgh53TpnDBSpT8Y1ECQUaWsvDkz3osjMZH1uk5CCDx4B37bAdPgbhrZjDVWA7GtYZPM",
  "key23": "4bt2TSRn7Topaz7pRM6uQJMxUKS7CduVMAbaqBpdYoXhCajgmTF2ootjfWKBBWFanTptoruswgKzycqV3dhnoG7t",
  "key24": "63m6N3ZrChoGU1EDsVGxGYwoSY8jXrUSMF3WsmJgXEbxyW5N275AgiS9hHCpZQc1Aw5CWv5Sg3qWsao6taQQrBfd",
  "key25": "FPkG8hktFo2xY7BzmHZb5iPCJHXBYAwkfzEBndCGPcQiLDAy6t5Ynfca8qhk2b9rydRUBDL26aWkQvNyNHFSXFA",
  "key26": "331yx5AjE76dgQ9sF8hLJew2xPyDHWW8nFLXeHz769oRxykJ2g44ZEjGsE3BdL5yqqX38CKHxMspg5NV5T5hRaxM",
  "key27": "3iV2uMhq63ENcXZ2pkHzqMGRBSdKWTPNdBbHSCZWLjtYfkpCW3kCSE3KvUpC51Gzkq1oWVMDsXhwRzFa4TfamVqV",
  "key28": "2HhxDuc31vAkAKdqBhZwp6FT56c3sQbzWjrPHBGxMEFdeX76KW2kp9SH7YHLEuA63B4VzniPhkBXpgbn5Qfiw9Qu",
  "key29": "DW1J3i5wYugVKKjH5LPAqSjTTx2wa9tpJAxHY1z5A8BWcxbcRnR2T4bC9iJCPQg8RY5rkv4sUmtpkrJYtqK69ZD",
  "key30": "45dcHDQoZCTKa5wraX2yZus6T6tLrL7A9URmh1tfF9LcA5gLXKXdEenQVsF9KEhgsujWQEPyiBBeeP1RbGkXgzYY",
  "key31": "2oUKquKHQaD3hqRJpSJnoQiZt2s1tcPXrgTXVjxetZEz7Cehos2o8x7mQnUxKfQoKDWynDaSNgY7xDQtPVighEoc",
  "key32": "4vgR75w53gYaKSLttEn6JZLW5cAK4mUBssqaD6g1F7shM8qdYmQfSVR1aaMXRtP9zwuCocb3DpXQmh5nXci2pnGM",
  "key33": "5e5vEKynsp7DW8yDLoQDdjajGcNccXDqs6qKF5c7oCM2pnBixTjbrgLso1irZaMeXWXfpHSG67z68Q82pBtf7oYo",
  "key34": "5tnW1xG7eHQYTdsCeCNxJp4JD9e5tcTawHELt37RZjTEmJp7FjXscLaPRVyQXep4PxwqP9UA3C5pBZb5TViJx5XM",
  "key35": "63k258tfHqTqimfryqSy5CyhsWnhy6ZbNZfKRngth13QjSYCx2ZR57gjsvcE82wPL9EqtYg9rEDZG5CdHFnrYNNr",
  "key36": "2LNsVU9VHbwv5NaGCYN7APBU16x8n4dtBfNEUcUfa7sHkL72CKXey24taS3VgUVCS9m55qg9Mpao9JRmSBJJt28y",
  "key37": "2D9y9EpLAVY1AkSy9WZiRujxHYGikgXsv7jtrUofYDh1Hxq7fLb6dbodA8Yr2rNz9u4caLKmVjFEKVV1Vb5dvBfj",
  "key38": "2EgtinpoTquGtqtxHyKXEa6NJoTeCXacZfEShfCbdTZ1TU3SkHzgGSLjUCSpYhmZPnoN3qCqBFdj13D9PdiSGXw7",
  "key39": "5dgCTEYUdFKeKTMhCcgccWiZm8j8yv92tG1wAfVwVChWTZPCcuapph4U6eKDfYxChDCurc5YmNZreHQTFr6CFMs",
  "key40": "2GEzjfRPvJkestCU7kbuGekspn81ZUsg56A5KxxzQqkdDyQgvdBNr1aBJmdPZSeKdJacH9MqgNuLpCsRCbSiyCgi",
  "key41": "A4HsqYWfkyVKGNzvt6gq2pkzcJx546UvuVx8Nwf279f2m41gTkUKpMsenvoCCr9bN5ZpuXvwqmn9hbb6idVwKYr",
  "key42": "57qwMpBgBU5kjsnacFSzDpLYXdttxG9SZrTorezSrCsqsEPaSxrn92Y3w8aWScntnUzbHBjoh69cjhMs3AAJcvEG",
  "key43": "2FTydQgUvUppiRtxokquAoLHXqHAHGPwYGLGj4TAxY1eSneo1eAnKAGAcYHt9fSWt2fZ9ddUA1n8jFRKTtdoVM2v",
  "key44": "n2p36nbBqG46AwBGoD5rXfbDsPBiGPC1c5FvqVCGTjpEX8d5YERfWaBkk5c6fm8EcrWxWbzVeLB2oeMtrkervuL",
  "key45": "43S8octW8V63t2udGu6Sr8YukbivgyVykvVgbg7EPHpi4JUhQbt4wMQd49dvYEkJdteQ7fUQaBEq8bUZnMPRGVd8",
  "key46": "2tHw48FJczHmvruNoiyHfR3syHz1XhcUWDZYRAnKToSSqHHvJj3SEH2MTnyXPapEU7zJsvyvRxioVHcCFBb319eZ",
  "key47": "4RY467yorgsh3gyRVW42rhsCbQwvtk2AfcrKT4TMzqAvKW4baczCFZoQv7o59TYQgS5EAvq62Z5fHHtJQ1fYofWy",
  "key48": "44MoZ7831BCcZzE35jY6GggjK2ijTDzTfvWvYeaDNbTgNJfgd4pePAsWqSB66J3itwQajq15NDM4yut5VseF4KWv",
  "key49": "5enS2HX41d2fXMTsf8jhuqMQRMF98ZTNcXyjdnxANtAAyukg6sXdhdLA6f8doU8QWAjSVTkDny5VCLuFM73YRrYz"
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
