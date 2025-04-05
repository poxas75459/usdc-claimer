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
    "2sfM49dzMrnqXPAiLn4iASNEY3XgUqdPbWXHgpJDQT3SW9p34xmT7a7vN2WRKs6qFMaWSHJWkMT5K73MKeVuPeHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPb18HtYwuyd6aiJWeDtGh5TpLS6HNdUgb4hkUFq7k8tRFZxxC7V8bbNUdDqwLxQpvu2TPNHDrRAJmY2ywirgTZ",
  "key1": "4tq7ngxkRPNsjB8cLiYfKu2YABcU28EveJf8d6JFc7WuwjEBDytmrSiveV7J2tARmEmHAfDDTuEwQiMFvr2tY3NV",
  "key2": "5oGopd4fu4Rr5gRHzqqTYGBoZZ7G5eTPvy3ZAU2eRegDqkjB8V8KhmFPTaB3i6BoJHXsjycNG4cXEB7YJGH8KXVC",
  "key3": "5f2JeE6QmQZ3evbzQawcFmvmLdmQV8jVLcRUjmwHvFvqaHiKMKEGte82gtMR94KNyHUBcdMSXzVU2V32uKuhatMi",
  "key4": "4f8o6Sc2WrX3AaD1x72zzoe1xFFTMjLPoiPmzMZCLWnw6d4uDxhEqYFFqm3tPQ32psfCXPBubscmMBwesPhP4uQL",
  "key5": "4jSm61V2QpKrPmbd6anhwsUhU6QT91L63NK9tpSQw7BW3vzxzfnNBVDEMV1zp9jq371hbkc5PZjDHzFQ8VfDubzx",
  "key6": "gMP7LcGztT86kjvwQCfTGfjgbwnxzfsgWRoBgAqLsR2gHKhkfTrJBRXLCiA4cEKR4cqdBsj72ZnhPBns6XaKUP8",
  "key7": "5hCP15iLmFwRvRmyPYbQ8AyHHeHPZzcfK6oT3nH2w2YQGBpfRJaAeid1n1kejhJBYrBStgrPsrRNK97jguJVuBsZ",
  "key8": "5yzbu7CyWyiwCA45Q64BvbSfnxAXwXZ3biuyzn8GaAhJJCueCSoDHQpu4bbWjUeUn3dBwz5ovbpXGUb7XWbMkPog",
  "key9": "3cJdaCyhBsYpSxpNQ6gHdRVo4oyQWfesKwSJ4AWfBi6gGLF8qNLEkL2uDN68WGLJmVfHnEm1pSFKZj7RwNjLvuf4",
  "key10": "5NjYLxDdXVuMCi6PvGjFBfwTxgYpKSFwMSKq9L69W9GCU7dQQ2FCGG4sqzewCNhJ82wze19vp5XPZHEEw4yuUAgv",
  "key11": "5HNiFPrXbP3XSWmKHCZ5zs3gM4FmrdTFzRyWyeZ6qm3rwELbMUKk32QmQLpP8QaRPGZiRJEsNFegT9MLVv4Emgv7",
  "key12": "5vyJRnntijJNSFPrcDdy976Xsbf3HaP5bGv71AZF2LBK7NXT9teRAMs5X6MBRm7tKUEUpWc8ybGcmmA33t1emujS",
  "key13": "3LqsnUFoTPp6vdFpDacxbDgfTdiLoy7LeHTGkTGvg2i5RpokB3JK3TpX8ZYqQEM5UFrRjEU6TFLZ3SrcG5wkr2M5",
  "key14": "347n93P86mAsfV9RVveaiVSK7uZqLSKZUXDikzqjkgvXsYuXaaVqBn2WrXeefmMjxMBGmYm149167KpsjHHFg2DE",
  "key15": "3Y7Msg6Eax5h6aDkW8a89JQiMRK9DsTW8mDkoS1Sb2zGNUcEQcxP4RJ6zmV3JF9Ks2jmXeqmkdMGaa2V2YFtwacC",
  "key16": "5T1buodhz5TDSEo6sSpMNeyUEfPsakMXo9hRvoXov6Bw8oivnxFhx5smdDRDJtu6EdDDkxRQFSSYLAkd6uwK6mbU",
  "key17": "4zuvDJUUm3xeTwBmN9ShfhQQpMxGx679ZmbNt6UTnTeP2C9PAmL9BwUvJXsKeXmFjhUi7tQNL1tSkcLe5f7n2n6f",
  "key18": "3H1wXKkwsqv7UCfpYN9sPVkx5VWfQGvHtjgMv9XxBb4pscqaLAxnYT94BD3tavXRBetvEUn6aCMKqWS9xSptRBpE",
  "key19": "2Z8sPDwuArX7gvbNfa596WR7RyaNQYmXsrBDQxPQ9WzK8sgqRVgTpFZs6XJxy8D5SUGQ4Fd8CPPL4Vb2fDtvgcaz",
  "key20": "G65aeZR5MrZdoiaR41eSx9h5kchvpFiDknmeEBXNja4N2pLV6eURP9Y4sYmrnenQC9ADfqiqr5g34wcez9fUWH4",
  "key21": "CNwZiVuPZXw4UkPbSuEQZXdHJdATMsTNHWgYghAwnr4T29frtRRej2VGPWiLHVRe1p98Ppz5aZ8z1gFggAn1AcW",
  "key22": "5pBkygnhQTNzDL8C6VpC2imXAfdiMfvoQLPCwGt9kUgPoGQQTaqTP9eqXzLHpcJ7Gk5wWxJeWHYUoii38cs6N4Se",
  "key23": "25UctGQYWGNhRShTkkV4RVkqPZMPvWkotWMzYTifggJGM5nBeDiLKDcKyH2cngkmRngNrkr792e1yKmwicnXbys3",
  "key24": "5NoL4w4NLjaLiJDxEDUTN3kGduseRTFRJvp8auqCzaTKdM4ZBPURxSun57mSf3uUzopWpCKMLJLo7Mi26tS5X4ga",
  "key25": "BMLqcZvnjJ4pmKUrV6BkFbtk3zLnQxK4nwSKPQajCve42ELeyxnhjjuopQ1cYLE3jiSrE562BXQPxfmRX9rV8Ng",
  "key26": "3E4KQwh4VMtjv1sJBUaSVvF7Ly1q1QkBUZBgmVEMJu3VPjPw2M5d95XGq1QbbjHB2HXiWNLijDL52xhWAP13CyPp",
  "key27": "5ie1TaUGXpQGX6j95gCKdFaF773vuieBT2m7zZd8PSwidoS9r9W1CFLCM4mHerX7hPGcoJib9zHUyScrBxSYaop5",
  "key28": "8AioQHU8H89FjZgCjrykaPmG5gqrPkXWjtvpWT3RPFbSpp5nmXK7sopQfBBBA2fRDQ3oBr6KQuU29BuHRtGCbyT",
  "key29": "9uNvdnPyizQmrAeMEGdfHuCLA453MAJTpeAon2dAMHkJiaqHpMzbF1TyS9QLJwDbArS8hP7poY8qtc1bFvXkKK1",
  "key30": "2CUB9mMAL2c4KkP4qFRvGMWUy2hLtDhN4Y8gQ1oJxRGT4GGXFXGMdnHhaoYJdn4ffiBwymZQBdcY3SeZ489wg5kz",
  "key31": "ZhVhnWFhuH2izWof34bkojjCGhWukagLQKuwdP23wJ3bfLa1j5cXFbhZhrGBoN53rNu8jXjDJ2AXnsyH27Zgune",
  "key32": "55cyYjxFzDRs4oC8dmKiwrPjH7dq6rjn3HVc7pFUAtmivvvzukdeh26kVgWZ5ZatHcTMF3KhwyZLPWjWV63mQs9U",
  "key33": "2T3WBBn17VTGoiqbvpY1rxuqTYMHM9LKfWKxWj6Gu2yUQY4HoMo4QEqx7UMo8JXVyEtvYcSFjFy8ccF2MNcLeEfc",
  "key34": "2n6c7EaRRtQofYJVYMdEVpEAyNNTPjxFn5XPGu6aQsLPkMmhV1RJhY1V8im23r91WURXRhnsMiE8aVeXpPNHKLP8",
  "key35": "25v3GK538jAjkJcKiqiH1qW7Zvmnju33EiXcR74nYTdk8ne6ZirhePqfmkHTTSm5hCsxPxiqihpsXQ8ids6ibQtv",
  "key36": "2bPRSNdFBNAtLWh8rsnqdFJt6H4gJakGVwpPEnPppuBqG22MnipfmGULNd2QpLDALggkonTEdbya4swmazxt7n24",
  "key37": "3wgVQWfVRM2GZnsK7nPyBz3ry4bLKyuKo3U9CcEpmH9XjsJmRsVR5UDxhdPWRhW8ctxDR5cwUWXMPdD8vLHp7TAj",
  "key38": "4LcqbTm51PmvML7QnxqFo2k8SgmpUu2beh7rrdqbUxUzsWb7CBfZu6jZ8BKYUJqtU2ysjY9xJEHQBy6L5RqNhoYs",
  "key39": "37cKMAncCp15zDqSECRC9hq5yLBzHx5R9FLkWmPmYNxGZN4TfYEKf7Bu5KYxANFRtmGTbbMoSSp4DM8xuuH78urL",
  "key40": "5cT7zHQ1YXrdCbVX6oKPYqDnyQJ7eyBfNJjKH23q98naP1Gaqekit1MxTE6YnMB8U8tVXSxHYtfvEAamn4zwf6AW",
  "key41": "zQFzktHHShzQuqv3WBp7y3eEmZre2mVeaXSZAggxhyDjnwLkcWYTbhYSEyDwWeGoPAEQTpEtzMfyMjPTrcajqJy",
  "key42": "2dPpMLP3NCcNxvRFqivWHeWPjaKm6gxNghMu7uCZ1pDbFRkF8LmEWG79z92Qo8iodrMtPjW2bFqTrStMCxpzwk6C"
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
