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
    "4bUQ9cAb2iQjZ9MNjmnKqEuRBZqZ9X3jFDgtbJ5zg3btu1fucGs52Xj1LBM938edE956WD5TFSk8ZnuqC4UmJEhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZuQEt2acnaXmW3f7HRNsNoZFyt3BHwVrtaXvrdok5L1nyjG5hxR3qB6Ky8jkyhLvp7gz5J2q4BdumMXU7CuobZ",
  "key1": "ar6NKLGfbsRiSYDnrCWDm4A2jUEVZboKmgT2e2i6eoup1MNG1CZ1LBzGRheNg84EjiTun1gbgVLhqfwY3JPR9yn",
  "key2": "3rACih7sX2scqRRR58PKVQJFZrbYJVSBrQK68Eviu4nuezeoVLYH3dgctypw8Pvog1eD2t5CEY1WmJYzdmfmrheE",
  "key3": "3YtYLh8GeW2hxrnpubBUHx5dkfnVL318G2bbC6hkmTJXCkHTP1LMySSHHCvFxWq4DTpRDwm3Ca5qhSd6NSNFwXBV",
  "key4": "4RN2qBfWznzAiRfVnU5CFqWBiMZRFY2iawhpCbDd1Sh92YygaQNcDwww9XdeVg4UuU9mKVWTFEmXE5YcVyUCyHPn",
  "key5": "3kbLCL2pW786rYV5Qy5tytk9kNBGaibKycZP9bkPStfcRKCndv8aJVHeGP1VBYPVeK7q9onezujpUN4roX2ympPm",
  "key6": "59NKhP6yE7ArqQYwkUhjhjNDfvhbcDuMFkEDJsVkzYpDkakpuri3eDah1SdvL5zvxUEvJLNFyZViNobXA2SZmy7o",
  "key7": "2a3iLLbYifNvw6UDvYup11o5DBVgFebZV3eot1CHAoeAZFARscx7CcfggTaTSB7pX59QRYBZGqutZTBYFaZZNv1k",
  "key8": "eaURVitBkBGYN8w2X7gj7m1dfBNLguvqnNsmhJoaHijBXL9BRw4kRS2RzKvMVfNsWrgiRErU5N4VybBKB28eqs7",
  "key9": "5isVjBsPEBtkJpF5Qn7XLYu6gY7qk77WGUuYJHNc8UzxC9K93VqYVQoytvVdiqwTTpp3Ta1L2Cc3UuKHRNPK2JHP",
  "key10": "4Nje1VuYWk1zJW7FihrNimQ1gnYKsM6q3hrTZzyBigez9i3qAohdHqCRbLPtzSPDCcXvoxo35o8injMzsnGZq5V3",
  "key11": "51APWmwNLTjG6hS6vxCnvs4Nqb9YFd5tpF9kKXcZXSnt5bYyVRhkqoDZ41tmNiU9XSwy4sckpjVyB8wVepUWvERK",
  "key12": "2KT4CGUSbdbpV1ospZHu2ws8wam2qrk18rmTMv1YTQ6GMp1T8LSWYqBvTJhaPovX5ahuUiVe4oLNTzXFHwHZwTQ9",
  "key13": "r3stTnDfEoqaACkdeuft7B4UQeq2qf8xxGqXmyztcWghDvJUEakvWkQoDf8kfWK4QGv1d5DdqksANBiAf9PPdQ4",
  "key14": "46WPDZk5aUxxhRLesgvUfc1rMi94yBv9vX7tR9nZMyCM3MXg6hJXxvwgfvJKsowCb3hagKYZC9jpVpazjkMcxZi6",
  "key15": "3EUx8pztckj24CJEx5w3gdxajukMf1YAwJSx8wvzDp8XTrAfUNiH8ceRY36w5Ykv9DsBkYEvPCvtvEGaXjKNGCd8",
  "key16": "2uHDw6UX5rSjb7o3YSX2VeaTKzhTRyzA9VvZhT7Lt8VeEyAnVAYvVJe3AZhv9AaDsmV1bKsi7BNYu4NQds9u441u",
  "key17": "2Qx7fPFvhKN5A1n9GhrY6oatdPR9VTnXcRKjuWEa43HLLBVafFRfzTnpbRzBcXXvVAVvsFdeSTsmdXK93bL613jD",
  "key18": "8f74SAgRLzZ1czzXngJD7RJKh6eBF7cAHbjUNiebN2T8fdKC4s2SZ3jJ26o5QHFNjRdYUuzhGASxNp7F93UfUnC",
  "key19": "XQZSNqeUS67FChATqSH8WGK8UaQLUgtShXgpUuhQmXpAC5LWgoRUzHLN3cS3ReTA3t6GYCswo5d6ycDwF5AGuVh",
  "key20": "4FtLqeYUW9ZYJw15ifnTiDr8AjMrg8YiqfGsFW8RKa5dmiQuFCS5fYx8TogFp7TcUz86CfL4su65t1PkRih6Hin5",
  "key21": "p5hR2PgvoqGNkrXwGHZ8qLQ6sxoWYgtrrYCtte7FxCPBs8PRx6pwX9TgrwrAnjXKoTmJrfWwtARhWH9LxRb4QPZ",
  "key22": "61tfiuAkYavU73qKYwxkUxYN8wesDXjuDm8EFLesrYSkcJBSWZiU8fubH11KgY8YpYhud5a9C8J5EuzuJg1SxGAi",
  "key23": "i2cVpbQmrE5BjwnsNkAjPiHrVa65aPU8rhvi9JwBi5GMD76PWW4UJyYFQe9484mmPidZqbJGTgFxJ8aTGz6eiV8",
  "key24": "j9Zy98gtphixZeB7sGEGuwHukWvic6CiUSXLoLzR3sxYebPQ9HmTtiCkb9aP38B8w8J6bE6q8eN6EUUXMqnYddT",
  "key25": "cA1dWm6ugE4FgF8bjx6QmX2yJXwKYCjtxRVMhvqkX7gmo13h79Waie4YmBoZBRtpU8NjHhS7rhoVNwfvsuMAPgb",
  "key26": "4DL6hxud2aqemqXPdtjokCo1gMCJrz765kBP3TN4ygboGpquvcPwEfbVTLnno41bcmyMByye9YYP2d5ozdzv6UEW",
  "key27": "4oFuXGxBWYebDBZ4Y547LAFUGGpgZuWZP63jz8yJVSi7RmNua46vvmeM6UTF6s4Rf7kaJwD77qBaDnWM1YFWEnuV",
  "key28": "4NkmrpcWweFg5cByPD3NmLpDeqYAXeUzWfZyjeXntroXAMpHJKwDQHRXKLiTgKLvrgiuapj2Nb6GTYyse6fQs1Xf",
  "key29": "5gosjveuzwz2zYLPAQhH1SGpahXHzFquR6RedBqHsjsHUWyrUk27pXP2qZefRZzYjPDmDZzUS4C4MgstNeuK6Nxo",
  "key30": "48CUTnfikzBCYnF33e65xZE2EwT19oihufwwjnYUfyuhnaouQyZeQg4wy9s6TVHgt45CAx6d5XqU6DGstxJpNkv1",
  "key31": "5acrDQjSfX5m7BtEF9baiLZbRJKDTWpjsyfHh6DXnohBaBTpebFwHYm6BaXTtZ8KKr1oB9GVwHEoxDHUKwawhpyb",
  "key32": "367Sd8i4YjDYS7JSeUQk8sq9uy82knvSmrRuLaS9TG9vvNXvHejK1aqyEZfnEFJTqcunszi7iFUWjM9BEwcchL6Q",
  "key33": "NBbg1PK3ESfny51biuEJsguXcHQY1aK7waK6BLsbgV2JWXZmhEoD42Q7npqAcK18DvEpmAsrDbfKL7CPnEty4Qt",
  "key34": "3iTfmZkAvVrV2gwqw2hadnnwA7hP2ZmLdSTRzwqCRNrdUnum6pFMsRmG1kWs3k4xjWDBMr9dKC1QjBDvLfEKSXba",
  "key35": "2uk1DHVPxnL7Xfn1L1BCD2dUEPgHPXURs99LXVyWg5FHxRLRYumKGBPQJkxwiUZGj5Jzeg5Jsv4CvkgF6tdunFHE",
  "key36": "44esEtGwCAbdxZFzoWv6D7d7u34FYzpm3CY3G2x1EDwSS71zcUmLgNaHxbCdnpdzcopyTY9RM68EAHBzhuJgYh8w",
  "key37": "3s3JP9QXpHsjdsBhsAnkCRKNQRXf3wjZfHwEUEJMRAMP1ccevR8LvmnpkCVqoHLAgwLufw2MPDkPdJcvoHbobXis"
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
