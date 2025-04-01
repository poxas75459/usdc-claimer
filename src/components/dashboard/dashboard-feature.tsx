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
    "51ZDuxW7QogFn5tSheRrhbikh7J8hUsgrvihPqhj9veRT43TMW7rcN8qjSVTH7MJPqvvmGVpMT6MyeHAAEm1Xxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kc6SrnZzS6hSWo1Z8KYoygYjs8ENhJG5XmWhfTJDQmX2ykQpEeqzNr3EwFz31uS9G7Qn2oWwx2boFJa3oYnpDqQ",
  "key1": "txbaGjZ7hZ6n4k85hG1NSDnALHGmv669F6qmtgoADxTTGbj8ybF2JUMfqLAadxBxwZGjeiZPxybKq9hERnbFjDH",
  "key2": "5SwnTLFfDdwBxXBu8q8RdSW69XTHcbBioHVqi1iB7dNVU59LHRYDYu7fGPGjSN3ApNMwyngGqgqsfaG7gK82yUA",
  "key3": "54RsYrFi8bT6KZVKnHKoJdf8vQrEWvbuYhMjKgtMY2TmrDRGVTPHmLAm5hxNAvvj28rUaRwudACyxgKpY46Yffci",
  "key4": "2wAjKgKwBpu5HNmFLjAoSq8pohF1dB3nq6uT1oRV9yg6d1oP43SZW325FzeGQGSawHXYiGDmLKrGrv97YM1gEAtd",
  "key5": "9DmRb7MibkuWfF2m214Nrt4cDzD3gz3vJbAjqK4K7YSKikmSdwdH4GkWi6ouPPJEJEu5KmVJHJURY3AuRm4cA8D",
  "key6": "4sqN1P7wzDxN2GHm4LV6HQjiAeJRUTbryyPpQyhZdz2N8dxwcmutQFyzMoLuPuAbH4Vv7swYr4Yjq2DGXUoCMhWV",
  "key7": "35bgHBqS6vQqQsaS3EgmEX7qQfrs8cJQ42oLmf3aGDZzt8G828PCvPjsQG5qbHJRPpNcSCiW6MCP7JYuuYjRVRRW",
  "key8": "4Y6EpCigMuuxAXQiV1kzNhbRwVUkjP68twMkSc3EBcu8qvLFmT2sXeJXjz7mi1NMaeSPiSVXwwrCqMUB6Lsb6cUV",
  "key9": "3FnWeQd6ZDrNWqP4ToxiAmrM4VQNmmBCzEwJuXoJsk4rFCDPDPXB1fokEdtmhFR9s1iJVqbxfPZWxivFxXXJLqKg",
  "key10": "5crtRNptW9jzeqHpNVVtiqToLicpLKKFtaqsMkBwacepwX9rH5nwCifhJDtoDXda8cr1yzPGMYbD98Hj5gpcPi3B",
  "key11": "2rWTa85R753hAHQ2aunyXMxbWQpiGAAqbVZauzenWNYfNfL4Mi9BVKy6y7vHR3mGinJ7hdYQumoiniSaHL5abM2H",
  "key12": "3wvgr8JyqyTCskrKAf1m2Lv4LwKZqh3MPdfDKiTdnYyBTf3pdS5H9nwLHFA6k91mLWz6UTV5S8XiQJemPPWRGGDd",
  "key13": "3qKNVV6AcPDYzjfgJmgpTgigWpr7hw7Agp1sf4fDVxZNdSidM7CCuXfQP2JdhmgheT5LkqxSSrywU9rsieZKZzg",
  "key14": "ebyb82hfb5DdKcWMCFs3Si8JmMg7DSiJR7T7jQsz8LGVQFr3d9CevhXg4RayjKh8Dxa8dNGVksPtH6x88FUamCa",
  "key15": "2kuDPA8e6E4WMg3kFep8dhAzUyaox18enn8gPFFigLdHnmmK42usuRxmxY93qpMQDY8yYTEfWKQ6URrTRz1axjAV",
  "key16": "5AZeu9RmhLWa6gRdjBJnYcKktv12hja1GFftivfU2azoDVCQWK4md8Hoe2EkhDkyB5QW2GrzZBLDTsJbcjEvuZyc",
  "key17": "5714fWzZynRZx18nDKF2EGn9JmepEU4cpzWtHQ3aoX6HRDucz8ZAbukkLsmKzZeD9HsAT4TbtFsbGgqyWx1QcTGa",
  "key18": "4NdLtNfSxHCRekby2Z4b4pCugeoLiKhJwnpqT5S65i6MRAZ9vo6apxiFV4FwqJxD9Y37Qn6hAQDKhBsNBdmahFrR",
  "key19": "kMMYk5N5gdm5V9GMpq2PPEYVrbXwFuEVktqqemHh2Vv4BLnBDaWE5PE4QbVFippgRWQgNKzQM9Jf9EHb3xQgHkn",
  "key20": "YxzRVKrYUqSAPt2CRRLzZTeYZd5AFW5K2UpV23hFxs8wXXKgFuJsDwWw8H7PsZQKV4NaJA3BxrQCoTuJZnqYktz",
  "key21": "3ZmNP7y8rDB26bpdQvrFDcNWBVfs8rsXuqzTbUfsZxZJGCb17Uemod9NhaGcpYCVdG78Sqhag3MsWHPf1dqxdP5m",
  "key22": "MNj8kfWfkVC41XwhGsx8bMUHPbp9puTBnbffSf3DLH6h9gLwidZh5jD1hGkcoNAN8HTzUGQDuT2i46N7hPgTCQ9",
  "key23": "5i9pf23oGX6j3sxvXXVrCMnZgA6CuM4GwFWeHutM9eTXzuex6mbU78AznxT1d2N4YbnV7QYK8tUbvtVFc1wSi286",
  "key24": "4hMfMBGcpWu5cQ6DLRDynRbRdEmvwQaYNqZ5BsP4BLeTT97mxs95Rcs4ecyKg9ae1tFHxkRRBa66SQmJYCQrGdLm",
  "key25": "3MJXPjwdcqnnR8sXHXKpa3jxmzDExK6XNMENpiK5sZ5wot7KdV7DkbhpVWphNj1c9GYs2zebXpVTWzk21RWKctz8",
  "key26": "5msW6UnJsA6T5bbRiRg43QN5UyDqp6PzEL5Zq25VM5vutBsrXvLx73tW9vKrgFcn4F8hPkVLbNh9mEjANwtrJs4D",
  "key27": "5m8STJcron34MLPqxLuyt8xahbaCyiTBKgCZFMZyeb8A8ByiqVvmwL1Mh6vgcQjmGNudLjSuiQMNJEba5UqVXrPF",
  "key28": "5fNhzSsmcAjzSFKhb5c5oZuEgB4BNgoPfUFQfzjveQ3Ns8VNZDaFufzun5r5iQCETR49TeFNEzqrXqmFD5Yi8fH1",
  "key29": "2oBKtY5LFtGvAFGBkyEAgMPqbNzDi5Sh2pLPcCxebjpwcL7TweUx32pJBGedgRz5q4ScwZhNTMC73iqQMjSCJjJT",
  "key30": "5RnKnUMsAa3sGrXMpzJpQJMsCEEcPMTVqmRWiyhjpnQFYc6WSaSLdK6gaDaWjuU6UtQg5jGDJkjkQCHJfG7vyEoj",
  "key31": "rjp1yc2QQokFgN6gYHRGb2xusf8D7QFALnQJUvpKvbjGRUehQpDj49cvJ9aDWQPczEy6p2kM2Z71gFn4VGeJ7H2",
  "key32": "2GhochS8Zr9kb31CDrAdVPr8QEZxpQuAujwYuhLfN5RdYWUBNqyEayym6eHzrVwowec7n1xEGkzT4s1KmF6d5H15",
  "key33": "4hrRQgZafhWTAdWarTAkqfuyUmNzdgf1CMymTr1KK9Q2c921QbBRKBZA9T1maaMynK1PiPvuixwh6saQvKN9qnEm",
  "key34": "3so1RTewAJU6w76bFsaJUn36Z6hx5YUX5eehcGXScp3ktB7qrugDNTXXg9wrL11etZyXpanYUpasTsJftS3VQhsW",
  "key35": "7E21evtoih1A7iJS15W3wNaNPrA7fiB1fS2cVhNigStkwL4qnhcTABo9wdEPDf2xqd3ZfBSSPZ1ckuF3HXJCKkX",
  "key36": "4yKM3B4DpnERS7LTfJ3ParTKm6Nh99yCL3NH4vzcMMwBD8uot7MbttJaLq4ByTyoNCadRft1dHPZ4W4ejo3fMU9y",
  "key37": "3bXP5htd7TG3draQGthFJ1vgnxEq6wtErsdNY3eWUxNqu1sXshFRac85yVSnSVz3tC2PDWDoCC5FaZVgG4LfuaQf",
  "key38": "3XcMvjnWAmABNk4W2xojTCDQ5seuqMdgBrV2jNmdfJRdR9BAEb5EL6H2g5s87Nwfs5bJwitPERrH314EbuXgEiDf",
  "key39": "4EmeXKcRd9FG8YcH4YpLHcxCChaKHT9Wi8kbxxfS5oTv6uL8YGf81j6r9qG9YZziG1gvSwwzYf89h5JLyN8tdbDv",
  "key40": "37mQfX7WNWq4SzG8U8zSwvMSfafsk28kjtDF5VBM9R5xNTPAuqwBKDsDejADCtPP8CRVUknDitdeTNYXvemHm8mP",
  "key41": "2XE1paDoFRyK55k9k8kkKdNsbdsJ7t16V8qGhqPcrBzq4eLaQEq6NBcxYgc4puf1JpU36UuzkycwAEU5MhAAQNwC"
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
