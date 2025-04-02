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
    "4yWmoZi8WCQz24YWqKThg9dmfCnWaA2kfRodMYwvyeHz94ughPwKCoRtgbZCw11ajyZi28gGZZMR3E5e5nKD3SHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZDeJFtyuHmmzDX6i62WZkjMJe4Yz6Df7iZn18q5XGoJ2uiDCA9Be6LZYsZsQUYFfiBsWpzLd723T6Y23wfpUCP",
  "key1": "2cym58UYJuTmjcM9yb3TjDJEGhYLjQhmiK69axFXJ7QUCTZF5ZzLeryqhz8KdjVy1HFgtxAQ4sPGQQEXNvtCzkEo",
  "key2": "35xWw6AyJCeaz16qyX3ytAGYKUw2ooz8HUAvp8qq6d6mMTzg1a6WCR2VGt8vq51bMwrRfwZ9pbFW8wsr4TaDSdSV",
  "key3": "3L5cDP8zY64sp9WdLEMWEiyDpHyKsGeHXsdRfS5v2UfhRdTNdvEeKTTWsFW9MqGhhFJZxbgL9MFRQeLVrTxbjSyv",
  "key4": "4HS3UoLuGDujmbTxBnnxnb9aitBLPKS6LiTPjv8DtaW6Bm1VWazf6vGzmPr6eA4bMx4NjZQHfr8okHJKMrtZS8tG",
  "key5": "PS6koEiNBZgZYxg6Z3oBEAUKvLF9KaVPgYMGFmLJyC3NU6spmLAtCYxkN66tNQpZaNXbJsZETFVvePFAQHmwcEi",
  "key6": "4tDNbtFPoAHYuYHZnCdezqDaqqd5DBAMFbKC5UHmwsVJ37rfLwSF1mSEEgkjCpM4XyQZUBUduF8w8di4NiLR6a2n",
  "key7": "cDKA5f15ZTWKpM1W6REboVdwqxfzJh2TT2vU5YJEKVTr3KDanKzQNnss8c71T6p8C2KMwyzdu6zYfnEZy4qdand",
  "key8": "31oJyujPfqAqMKcGoc5723Bp1zTSd9AfjaVsBsHtRKHGK6HgeX9bhkF6anmoFp5kPuRtfMVNxneWRhsjywM5RqFC",
  "key9": "2WXfMcxrcVwajVo79aCCfBGx6J1qcvpZhPw1JjbcdWbpnNgU52amw3J48yD9CvJJ7vWTUxpcf78JHJAUh3vH1uXc",
  "key10": "2WzHLpvAzJYhAdqoYvmDLLXc5YHdbFvAf3whUu4r1oPyS94WSrJJvE3cPbYnFbT3uduhxY5KJhBQZbgMdUbCdE3t",
  "key11": "2QvYhZ7xYeNFNtjnZbQWNGru43u4QX8UcxHQSSE6osBVqR6eMk2sa7VuGYGXwd5rmZSdhuiPeF8dENmKnrG2UgsL",
  "key12": "2ma8xcDG8NtCRsPNh7ozN1D1Tckvgtax2N8JQmjGHDxYwSJWAyNq1dpNCW3pXRLDkJ9JRLsDbFTCz5aQWNopUm6w",
  "key13": "X5hoxEQ88mUNndohGqZHsc37eA3cJXTCrs6CGBDV4nTwoh6cCrixa4NQzVLtypknB5Gzaq5kPtNaQ2H1qVjgyN1",
  "key14": "4sYxd97zmyWpASQXDa4n2ZqjnmZc6AhXEASaTTyriEpBvaZGeS6Ez9naxsmUbpB2Z7gjW1obxkKHBSEmCdwHyWtr",
  "key15": "22XpkzpDUoKCZoP6qy6oUP8qBNCaRP1VjJrdjJHyidHdMzWVcSt9cBnmnteH1ZmMZrRceZGgJHLBpXejcLvaYLiZ",
  "key16": "3wPEXooX7Y2Aw25NyVTiwHTyJQAwCRJPXgLeUHn5DkBVkhJhDysmcHW3f25V7KZV7UyEDQZj9mdaTncFWUD12mJh",
  "key17": "4nGThotK5zKjcVRTqnsxjmFTCQBwmT3YTYKHg4WDqPC4gYs5gPDoUKs9Lo84HmuG8348qTGeZRks1eBzkb9ohCKD",
  "key18": "2YDkZwR1KSEAChT4z3XToYPZrzXUBaVZEJcSR71hwwJJ659UbnzwtKiut9airoYRAguU3DPAFpLzL2jHKJbQYT6Y",
  "key19": "4A4dsN4bM1J3ffhngHhjnnRP5wcyb9skr5KmkkHGHmdSisxfHQPE36FMjUF5sgh8KhQEKGsjif7tGrAiYrSKHtC6",
  "key20": "2nfev2PP6KT4qpg7xri5JSxLGjavTeVadygkQh1rA9tioh9XN64Ygui6jLnvsbRpMvz2wuAD2owccqFfxTLjarcE",
  "key21": "4a9s12AcXpRPnVUp1Hn3LLnpexRLp9T6Qvqr4BFHydqEoctpmj2gsCqd9LS973WvyUmzN9nxhuPdMU4ruUpavji4",
  "key22": "5FPT1Q5PLDuhModE9jx4fnkV9m3HkBcxeTTbuo5kS8xp64ispqiVrcxbKmDb8xtfokDJm3vbfZXVwyrAdge8b3LJ",
  "key23": "2YmKTPdN9DfJHwRTkzFcxdrrNV7MynC14e8fvUXtFgyCzP1U3qRHc3FfNXvLxrdquSajU7AbTSwriLK8PmPKcftr",
  "key24": "3EKmP191vW91yBT3jgfcnEs8UgcVgV4nibHPaczRWvE5re4bFMPPGuDcQ9Czyb7A77Wu5M9fr5MgtU1uRoLE3pMy",
  "key25": "5VpuG1f59JqmkdEebMvSBVQMdNnxY1L6iExFtce3ddPv1r5rB8mWm9mCmBJHZkuLzkSBKdyy7n1bVVEBUyVgkrfq",
  "key26": "unmEYVGUbepKCLtAkHdSssfGscbjzQf47kkPvMydmzVkvCweJMyaZJgVwXM3hnRnMgptuvLPP5BTNntgjh4bx5t",
  "key27": "3v4rCAasFWtixaWuUdcBvUTYokRU82bxV41x5gnKnEgbWE8zf9731DAJmRUjjdsnTJ6WgL6TyGL1xySCSgPN7HLW",
  "key28": "2yfm25Yn4SqBqi5gLgeRQcKwmt2DSZSuv2JTzncDgdVqNW5K4yoSSUbPWR8Utk3dwe5jnZDPi1XvHdeZxsAu1bUF"
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
