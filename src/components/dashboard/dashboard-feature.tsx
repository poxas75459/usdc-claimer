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
    "2uC3ZbLrjQHeBu1AeYpwowPqvrNqxeKe5UBnJfSix12WHhBNUpJ3ipMgoM2WuHpzZMB71u2wLCVKRmD9YJRhtXzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WC8HavspXT54TWCKNqW3i97mpSZZGqzJ1zEnz8vjGsMgSoSkaf3P5TKiy7yPeX2Y9jBhESpKdMyrWSvxxAAn56f",
  "key1": "u2W7EU7jgxRHxcHRwPLxRYKkuwKdxPZKzRWPiivQaPU4YYNq2skjPKbqnGZvUaH4E5AuPU4zgK281yL3Dvq2msL",
  "key2": "2GqJhFYNX9xFjzzaYeHGYS1WbQxrmChbKiz3HTwqUSQfibrGsNqXhdntuz1XmBZxySBhXz8FZqSzYFWXucTNN3oU",
  "key3": "2tBR7uA6tGxaLYHDivZ9tXQeqT77jypECcn57ygZLg8RMNYHftojvQad4C5mSoYEY2K3GKr8STvmMJ8L83DnpLKA",
  "key4": "44QNqz4Ths8R6fZpAD2MSEStxfzvkaBibz3ddzjVtAuujWfeEF8us3KQ7VB8rSe227YUu9TbAWwk2BoWYPpbYp1L",
  "key5": "Y13PTACaeHL6u29KN5FhLvhNRG7iD7kmxdGoDbjreDrKqveAmvN3iHgvBF28L8ECtUHn8QWyLgG9Ba9grjPLqkp",
  "key6": "4ZYqmPZmUZYSaTiVkt8GJ76SNHH2JgFkwEu3UnKbh94cH3GHtG5H4p2Ka9pFBXzrLKMTpNoitvyM9WbpLosARERt",
  "key7": "4RZdTCy1AQ5ss33ZHoxjrnWwfccoiojypKqkNhnjuSRS1pSeT16hFLiQ3PrTiyvNZuNAPW23Cz9xJaWzZzN9n6nW",
  "key8": "2dvTbwkBAqQZtjMvjRSZzKJWqFkUDJjoj4WGEnmktAsuK3U2vEgAG6XfJgpiAESMmEUAjGdBWtxrScvHGwhVBjBy",
  "key9": "3B4SLZVtq4LXaLegJe42oZcEuCijNmRWHUtKnQhTZs9QQyGhiv41ZqkCrTRZUhUhPXZmoCni1FHGbXcPwgGniJ3y",
  "key10": "2SaYLm8yFCRonnyNxifXDd9BzeVseSM49RDfehZh4nkxUqDZcHmftct35cvpc8kGVJ245iS8Sr7rirZ5ChARJKpA",
  "key11": "XHEmdA1YzUCYKM9SjY4Ag6FfUsMFWfkXnpcV37hsvMbVsoBd816SQCJF4zy3SiF5r4ZEFkzJkJdeAKtR2SFG2ub",
  "key12": "ShAsQcdLPbfnHiHVQ3X1xBWPru8Wg6jQwKKBXMYR6PMge6KrC6fQQsD1FrdmAXCsXvhzdGXqXytTZb5DAMkSMs4",
  "key13": "4LhdEdKFtS5gHbbH2i8p7AetvonHro6UVN8zUkFC8Y91RBFqB5nvERriNi9JLqXYJfNx1KwnGMYJxb3XCGX8uZeo",
  "key14": "GUKRVM3fKiPgyeB5Es7Kh3NEegPKURDdif3X6gAzeAes2ZncLErWXmWX55hjaq2xaG2qV4ZQ7eiutmFGnpydxEE",
  "key15": "6B67j1Z7RSZ45zs2y28eDgQUaXxZdhdQuY6D3fsCKVrWK3cmUftVfGZLcRTwFG1Qy15qskrMZntGHrB4ZdikueG",
  "key16": "25MSJAuyK8ByU4CsAEWSSk9Z8oAxSyZr4eCyWWZi4YXmpFGTMVmUpERjeRPvDxKyfbrdoKf1qn8JBDKAQtmd61Te",
  "key17": "3a8AJswguLFrj2XeVmkHf5pSBPo9uVpnJJoU9FRWTX52oWnxzZkUeHJFTkCMyLD2m3xepQ7BbbkN77BvYrNc4cs8",
  "key18": "3eyisbU34zXv5Hgk9KF56dTbcYMWtJ8jRNf8ywgCr9RhFUXA7anDbCXZNZTtoG4BAY7ALSumvj6W9pYrtReZMUTW",
  "key19": "4Xu4BGEgxR9uXma3KCfZQaphfq8dEFAJDbMGNC2MgQKxmeLGhMgsUBGzHhxDUhGD2dEeSaU3Th5ZQwZoLZYJWJG7",
  "key20": "5XqZNvYcK1EJ2Go5cCJexycv2ff6cEtYw5bWi1c1oymeW5ZgeRNZcakjtaBTbtrrZCrLE8gst6mpwwpYd62VYcdC",
  "key21": "3dRxHzoqx9AizpF2zF1cadWiexk3zJuMTPi4VAcnWkWJm1dCjGuqsQ9tewxQgMT43QUQhkSMBmGBGGFUDcxkx7hP",
  "key22": "uxoPYddAZw6gBeZDwCAdtGEGjnTsHpuVFGTMhCDacqfXCf8eCbns8n6DGEvwEQgfUgzfTWvmMKNiB5JTBKZnsHk",
  "key23": "3BYQZf5hMarXev6isgx7T7Tb3Dhf3Vd4rKcdsm14ZHFWQT1KHhvn8p3YqH53QJnRW7oxYHBhR937gGydmExF44ax",
  "key24": "5uWU9sX9VXetZyrR3VSucXvfhJcL8ovbmcnNegas57PtbNvCYmjK6Aq5PsZQvAkjufJ7xYSuQYRX7QBGnEqS7trA",
  "key25": "rpyVEuDb3wyRwuKW67EcAVSmJ4xTgf9G1sRD6onQ5nKUp1ft6YqvtjVMRKa9xedEmW533b3kCNgu7LvkW5ipUVe",
  "key26": "3Y11q2h78y4cq6QwkjUizvg9CGrMq97SEZ9rED3F8sJV37QE3uS8f2zwf4F7d2QrBnkLFDqJtsVHf2kvSuGuifhC",
  "key27": "5aFdnJhVN7cg9eD3XsRECpzNQ7Rsir5QgGvTyszqjh4CdTAwZZG2TUqGGUY9RizncVp4snkEFg7GCPrkTiBPHBy8",
  "key28": "5m49JvELpp8tyjMy86CMDEiHQSL22MB4ivPCuLDTExVyzChiet9g4uWYA5W983E3if6kPdyFdUuij4Tt5spxXnUm",
  "key29": "FNctgLrSiGsGPKoMBB1zkiAd2Mn39wSRJZAJyjQLfmHt8cBtGBsdAqVTSr3TxJHgC3Wn6UAPUNTvXZE61SXDD4H",
  "key30": "Np16dGphsBAZ5PLGtbykST4N1XfHfQ9PsyZH1UhHdM5CojfmErZALb4i6p1Z4U7SfSTpuYPCkcW936iGCdfYCVc",
  "key31": "4mYQxQiJMYF8jKyg458usfKFsgVPgorZ6V1argwRA9mWXqeBa8X4hq6YtiH2Yz5rzEsJjyEi5rXx9N3bDDa3bJiS",
  "key32": "4BWgwyZ5WAndskjWx5UsnyMai1GXFtb6cyDqrJQXjwnJdeAtNhr3g6EVPzbNdmriFw2E86BVZkF7PGXKQtLtHpMd",
  "key33": "4jiUzPYs9uBP3Ke8RVgvSSYSnH523rtQKoqjtwpUqmRL5pSUf3Pgi1xFFLRTFfz1vW5G5RChX2pN2tfmoXv9t3tx",
  "key34": "3Rnu634ryZGrGrz54bP5yjaobA6WVeDfW9PRaJVycyxdVcRJFZsbNnTNiXFUmfDafMu4yFhxKvxSWGm3UPeDhvQp",
  "key35": "qe4BpgZag4aNT711o1UswFtCzfBtwjd6JjLAseppipCNVqvqw6brQhs7dohM4b6iXY7ve8VrnKGZ2XZjUTMYqS5",
  "key36": "jf8mQv4wUGp7x7rDbF8UwUEVQXaTzfYcfudWh2Gj41b6w4LVLLBqKt27RXnasR4iNoKqcQVVDMN2uvc6FXMJQaB",
  "key37": "5ehE4VCBJA6HEYs7WsuyMFsPKeKvkenKojwD9MA4AwJrob1HYdVP6o7HP78W3mfysXUzbt3wkiL1dUkoz5x18wS3",
  "key38": "XTUNAokSQUyP7UxRqU8vmnZE9ysA6SCFRNAL1rbhBRtH3a3A96UKLAkJVBbrnAg3ytxmcAi8h5USUECev71D6TU",
  "key39": "47xj5vM3SBcFHBGaXdMCYdT7iJ3Ybwp3bpLQ4tUwKAHrgff6EY5BsN9hKtXGykUX66eJYE3LTvF6aXxh45BJXM2r",
  "key40": "3tH5RNTFX552TadxwrYKjrqdRGZmwPw8EDhgY4pJ3pQEkcWt66MWqe5MohBDKJv93i1iCHjKoWDuUryozfr7U31Z",
  "key41": "5jF9B45Go94cVztPogMpe4SW5z5dmqjQ7ENWHF5VtyEpoTpshF7Pve1gc3hHfsVULbQnx8bkrU98gBHkmM269ZGx",
  "key42": "5Jd4LyAroJoftmBmrePu3oUwgGp74B1MgXLSwMeWCpd8MHoazUds5ebhMfeD9we348eTPw9yKSLqWGWj3CicVnuJ",
  "key43": "2VqdkBx2Mw9sA3LKDWTZp4ZJXeWj1u1vNaDQzeqBmDrVTMN3w1Fxg7fwVLaez1k2G4EbFQxcSGZFnRZuxcPwB8aj",
  "key44": "8fSfMvxPBAF2ZGZriznAFNh69FhwNcSmxVLYiCV6MqNxuiAMLopLNifBr2QgqGVpkzWBDj51jyTPWJN9LSCYPW1",
  "key45": "2keWi3SfeLaB4rKRyzuXWFt3QN2e6GRC1VNZUKC8gWF4wk9GD5MJKcxRS1REk5scgsgXPWvoHke6ZodBzuaTf4fZ",
  "key46": "2vVqopoNAP29wSaWfRWDHZtys29hpFd8v4QUrjXDBaSgqn6joxzbEFz6U52cYKQWeEehxzuo5rioq9DuqpAz9Dag",
  "key47": "2t7vkmwEw4WWaQxpgB8Qp1PukLGprMnrNwVZqV8sW5eceJnD9Ay9k5n9YHW1i1EM6b61yo3mdn8NukDAHjLzTqeK",
  "key48": "4Z8didjQf8R4G2S9oPKChApG2zR2y4d5s5WEpR1ZBadnMd3ViVuqRRDTBHPCY1PSTZ6AwomHcxUfrNFAecfKPksp"
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
