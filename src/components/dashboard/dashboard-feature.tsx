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
    "ZSzW4PFu3vqpt5yC6axdNcWHbaRWhdJNCwtw4cvZhaFZWgcdazMCtfZuH9Hk1Y9sET8QpDC2MVvP9VK8PXTAcM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeAE1neBqDRtdxKHcGeNSJ57i3uY4mqdjKjDbDgfybcoVbSGCuTmQiwpJnHspHEFHfcpj5yPC8jmCXb8mEftGay",
  "key1": "2Q78dSNusd8J3VrNzyHZ46t94Ew1YUqYRvhiviTPQU4rHHTWY3rXjKKSkPCdLPgxuFEVDvrDSecjutKQ71h4rnkj",
  "key2": "4M7NSNKCddwLvHKVzHmojiiQh5DLWXuk7XxqiymU35S5ifhMWFh14ies9XE4azYPMTp93JSopME2KvRwxnaiT9nT",
  "key3": "3ggcjSfQRW628qTkYXoDDB6UMksZZJ2T9GtAQue6qY8o9yxQaMfwKqj8gRHPQZb892UxzJXiss1tREy334tukj1u",
  "key4": "5UZ3uSQni6Xq6t9Na13BwsLUcMsePx88BZzpJu5xffWkHULQHS13qMk8qeELCoS2RDaoMAmL2JpcS4KJK1GiWcbn",
  "key5": "Tbuo4Yq2mAqkJhCWkLMtDG25w2Am6svEDxE8TUnt2GKVj3WxvYU8hMd1FhMwYfkszdHgei5yfRH5xzMnX8Drytb",
  "key6": "5H2EFA9UgaUN13DfgD8swjGNKH6LJ8FoVDG8GnmrreKgr5fhLo7eriPY5ZNFTpCLDQ44ZC8W1kXiv8LvXT6BKyUV",
  "key7": "5fmJbgikr9NP3XrrMSBXNMHc4QcPo7eAo5dnLkb1Tz7NX9JCbBHa8QD941LWXksn2V4Dn5RcsnoDnWdiWXEi8K46",
  "key8": "2aoasF8v5iVqmktUwsB9ZvwAWvmqhdPzdLuRjiSD6Q63tCZUF4w1ZFETrH4fgL9wGB8CNzTFmYLWFg1rvTTG3Nra",
  "key9": "3kbZeTCjG4mmQiHMt3vLgauMkaTXVWHYi8QgsZLBiBubHAyf7JS1swYSEfu1qGNLmHv3xmYi5CfVHoMKMawXScrn",
  "key10": "2XCCabPUZVvtZZ742jJSGg3QrCCg9KtWntMsevaFWd7r7Dd7WiN5QpqTSRBxB8TxtA5QCMgYZMHBe1ymv94WvDKC",
  "key11": "3JF9CsFxhKMfy6N5GX4uBzi481ShP8N6o6cwwdzj1PQATkP1NauhMRJ6LvtKiu6VyaJwWs19sZESwRkWp4N37797",
  "key12": "3YVfyjbNgFG2PcJZCpUKy9XvMWwfVN3LvZgoS4WHyKmMPDQGHAK6AYWPu5iEwFWm9oiEqMKYUxd3v91sSLnkyYMH",
  "key13": "2Xpud6LPHCD6F9o7kHZfH2MPyuV8S8ZtwmHuqJHtEHzWht3mcEC5AnsXrkK9fXsKKXD6oJvNHvHsTHgC3ALghPqt",
  "key14": "124Nfy9aGsRFDvx2CVvx97dk8fTDNqNMrA3KTjBxKka3NQhpBVJw2Cga89w5VB34FDXMKxT6r67HGdd4qgHd3Nwa",
  "key15": "4zzvGDx62HcMSnANLGpdFb9avoNEwarM8FGr8jiK2VrnD8q4gWohXef1YtS1VqftYtRgtQVVy8L1fQYhLEnJmLzY",
  "key16": "4yKQQ1BuUmLDGnQnXtL7cWdn6BqJfk8a5dPr5x994Y7m1gxHj72EhMqZeNmt1aPBfXUCtW29Stvs2tAeTm6E6hYn",
  "key17": "2J9wUwxvtygSj1ChJWpqs88qdCJPa4Ye3nuBkp4z2mc9u5SZTqe8bT1MXLCRC7poMVXajT6RB9ANt61chBMRms8v",
  "key18": "297zWPiW5XMWM6ZX3PDoPhSz6nniVgs9JrTKGRxpz6kstCrQv8BD2vsBh7FxzsDqAMs3pGBa59KtAB3nVKvgTLpF",
  "key19": "3xnfMvor4uTERxeBMbdFAhBkM9yvSh6Cq7Mcf7sj9cVZ8gTmt3qmktw9JA5dyiqEaTo2FJJCrrXmoRg1zsifTNtm",
  "key20": "5rx7pzs2Fy2xvRkMXPSqi1iVaeeAeHjh2bLXLJF29r3LERzgnSaDMDTRSHrxpKLvvaG1xz66mqkC39Ljwpx1E62F",
  "key21": "4HLYwYR3sbeGQi4hATQ8mTFqRTXmP1vEYcHFAXNTSskyQPrPUL9njJYNVR6wX79BNQ31MqbeYWhKf7zkkdAjr41P",
  "key22": "2oQki1JCqnWZn2weZ86nw7xueXYdNDtyDzPCVSzf5VGF6GEjmwzymUJgkPMzmJJfza2ebRuPCC7AdduZKcepXZNs",
  "key23": "5fcEZ64e76MuyW9Fsxg36Ua1C9B1NKc4LUZRLKKg1UnLFgakngDqm2oFVZyFTLkcXPdscEChTB4m2pzepYd8Egoc",
  "key24": "3R8daukpAQkqUmZnj4uofrDyZX3zuxq8tBh6PAa2z5yPxypkRgrJuPAAaTGFZwPeZr2TpF5cYwPasLzLzVqt28WJ",
  "key25": "45gJGq8tYhue2WorBZahRMFuwvdAVyzHkNDUJ2uohPnZZocQDQqHmpHUJeqx9dU1xjjd2gRH7mbuyo8SQ2R82qod",
  "key26": "2wG4pFJY7jna5MaCozhVWc1XsVdk1BdGvY8rWwehT7qnwWikGHruvKk58xSPxQ3HG1wxb8uCcyycam1ESibmxfWT",
  "key27": "2P99sV7fJWMKXZrS1QjpazMZ6JYnft47YaJhaaZXULHRC7GwJuYDooGKGTvH4s8QyDqEXRurE5nHUm5WBiMdKQZS",
  "key28": "2PaUCdeqr6dGhGggFe9wNp2P9mSbAzvcr3be2hNDNsdbAaPLkJhCGNPCQZ7p8uHpfgqrTt939nmn6TRUM7bU5z49",
  "key29": "4yCNnSMr5YT9ykBbTLf6PFrzxcT3XyWuCxdAcBfWzNw26eU6MpRVYLF75BqWVbSAQbP8qhxii8pNMzgZq2r1aSvM",
  "key30": "56qf8f6XsrLQjtNytpoJf75ir2JWa9iYV9uTCFT4sVMFhkLB8iprffBys86rKfvz5WsR98vUrmwcSAg9nYfQPDrN",
  "key31": "5j3NLLZaXRMiYLv3HcSfcSUoMn3vm9ahTW2Rgv8kjxd5et7cHn3r7V4rtQCBgmvPqXwKgbbL7mGjtjvz2bnx7VLm",
  "key32": "K2HMtdNZyq6xe1788UsSmHy4DmchizSmKsapupZhYR9fmyEHAQNWz1cQKtpVK7Du8By7GRoumjCLRXfuc3p6J4U",
  "key33": "47aHiodjEdTYy2KgCcyyCDzGhY2hZNPGmPbfe73DSr6Rfhnmb8JDwkBNwJ4Y4aLxBtQJTZg2NKXVmgWLcb2ibuZc",
  "key34": "5C8YKZBhFE7xD9B2n3PKVr7ezJDMeguEmgkRhuHqQfzRD4FSVEQE273nMhQtHPviyU767vRmBtK2FgRcNmmYUxK9",
  "key35": "3dA8THp7Rqbcoep2ZuyFyWxV4CVgwgQHtBsTS6ccbktAK4U5SjkPNuPKDq4b1AWGpKxZE9JSk9EaML7hdrSjWq7J",
  "key36": "28NdSBsyY1KSoEcDdwTWa8C62LzEnxokqJnhAaMV1awifhSkkKPoTEY4LjPVjHtcJkg55MX5nYMoLtjEwRJVGiEk",
  "key37": "5AG4HDfy3a5G3FPRLDsJah9ZLXTU8P5aNdy5XvpWU9vsYLGzjFceTzWemGnFhzZioesQBmDjmzyyeDy3KXCfGqLA",
  "key38": "5JnARVNabofcU76CT4Dvn4V8f1TTwUkTmRfzyg4tfuPSzPXBB59tpsRH8gC2qbcjzBPLCVYZz7AuBW5d472pZPzV",
  "key39": "iHVq14hVzWeLWXehh5tjTRVJR1MtYcK8PMPPvhUGdMy2FqopgCEpEC4ge3s6fvoTWpbsMdDWZybacH5pYuHMAjR",
  "key40": "bUvasqV37bRhdonfNQQ6LrdfwxixmNgJHAqiMqZF48qkuQ3opQejELGLiyt915ji1cFfbBbYPSWsgCEa7ub2JUC"
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
