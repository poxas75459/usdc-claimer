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
    "32TkQAHhAU59iALPYwuDc9dvVhh5AUw4j7faAe3tQEhbAdarijKjZUksMfh5ZkisTtTJtcFF54Tfxpk4r2dJ9ZJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ff4sgoPEAwg42nPHm7sRvxGZ39WY8fE5KdGpN1nEzzpZZJDJT9DgmE6LzVoXgba7mnzVsbm3U2vXD4ixV5NhgHE",
  "key1": "63ebSj5FeDPGb8fxBS7v6ni572pLDkDkZF5mFzHdn7Kj1Cq5wJHxRbYCC36H9Ryf4oCWEjK5YFNNj8c7tUR2izDF",
  "key2": "3qFNfpB8AsTqUG9EVii7y8PyEne1TGpp6hszZVzFuugDwbfLk9Fb4bzJXDD95zD3S2JXohxQs88DNUVRr9LJ6jCW",
  "key3": "3sBeqzR2PJJANT45Kd5yTR8GM2tAeuUVNrc76Kp8cpG8qzMbLvunyPn5dSCzWeMUQsR76eoywmBgDGqg8H3VAZBB",
  "key4": "KqtawGbSoK8wYpePwcKkQoJiB29vAtopVJRhhKoQHf6HC18GV4kkQA7rNANPbpT16WSvGKDBGqPURq2EmT3nerT",
  "key5": "BwekqE6d8UBVZ7sK34yvdHcgVStfspiJE69g1o1VGjJJhD9h7Fv2MNewBPHdhL7XDAzHvpRQaZMdcE8bTFk96PX",
  "key6": "2pRCSxDNpX93oGjqMy5LRwa5VEjTbc7wV6zij8DJ1dm8D7c8tu577885E5tF1f8mtvgajdXDGcyhr626jtysWRZM",
  "key7": "45mek3HEE9xjrNgMQyMFN7JAxqmVC5TUHeUeL8zvY6ipuPMFWyiuFmMTZUTH9fpjTVn2byVfYYMefoKMktxzuFQH",
  "key8": "2MNQtUM8hTeCkwmktddnbesHs2dwyFBJ9LgutCjm4KBMx4kwAv6BFB2sLFjPPV95ZAeeRnrrfQiFNFyNUVqaEEZx",
  "key9": "5MdAsFFrLjzJhbBKA8LjvDpuwWBrFvxcLUeSpo5i4SsoMc6h6YRj3tNgFu7fZcmfWPFTVG9hf26j1AbRd6sVrY15",
  "key10": "29iAqqnJWNMHHfJhzwLBaR7Ur4niD6x5jAAihk29hUDws8GYSrMFe7ceSTT9gWuBK7Xw8fd8EYsfXKkbCY2jEQm5",
  "key11": "57Hx8T5RpoEpoWub6s1WDKYRgBesHFtWPH2HH87qwJ4A35TFLjW5gvzZ9yxFbr9MrrSkBvwRLJYmUYK8GWWfLoyN",
  "key12": "49JC6KtN6qRDv6v45yBNbTiDvWpxNP4zFqA4fbmbmAACvFUmCBDNBPDVoTP6oj9mrCbFZRnDhsNJsFevejNWgfRL",
  "key13": "HgJvoMViEZaqV2qbAchZH4CcXLB8iitfGPKxQWEXmesmQGU5xPoKnzUELGecdKn2jQVavkjRG4kQKYqwmmC8eRp",
  "key14": "62Mp4xFSHNnWdX6iRGm1N2HSq8hh2FHuG5fbpJHB6SQYTMFxiRmSR9xj2XM3xqgoUiB6MDo9QTyxrBjCMGGQV5M5",
  "key15": "37xsqNumi3NAEVfeLt884SJLzPZDfP7qEg1BNm4ToG8aq5JunvBytaucKfiNbSi4TAaLPwsCnDJMvZCPkdxMPjX2",
  "key16": "5NKwLUfwYB8XtX8VuMfDJnKjmWSzACjw76BxGoB5fmq1v9nA5ZFiMZZEf8sQ9DWvtCvnp54T97WRaB5CM2b1vN3H",
  "key17": "2XvdjhqZrJxykbnMjjnf8rVhJAJSjmzWdvUU5X8MFChkddm5LbbM1P1f8JEHPnGkF11GUGhPcvosYCQtpnBut9py",
  "key18": "9JQewKHcQZ19mdx5EoK9qMWPkaZ4Mod8qN6UAwsWhxthPyNh4Qo7cLprgv3MQ7a31crWpppzDMi2jqM5XC5qTMv",
  "key19": "F3ZxwCZsMsdMzm9tp9HNsJb6B5xN8UHjrs3kkUjLEwLY15CraiuyixRCuyPE1HrNfSZ2gDEr7TKhscBAx95UWay",
  "key20": "JDmo5Lyvz1n9HsxHw6UqNBE2oZ6vA3bPAKepairJNUnTM6otegCEEhVpbbUe61NFWt9Lx8KvGLqHD9Lp5VF6bYY",
  "key21": "2agbR5nB26UWF66f8LwhksUMv7GdNoVEtRHffyq3sboUTZ7cDCM3QcL5dtPM65NW6k5XH4hKVDHgiYFesPVmaNbn",
  "key22": "59d2TFquWCDEWQVifpBZffP57sQdmKQLtxJQSSCquxNyumpcC5xFGUPBwNGc7mQZPA3ZJAxFdDtFcujrSEThHimG",
  "key23": "33hMJm4CwQTBVh9scK5fZmzbmTRvYkqAe9GtTnxSnqoutMRLtVE6mLhQSNC1xnN3NsWuwQ34ZdApfuCiQAGv9oq6",
  "key24": "5yRQ5zaciacDVsEVXzTWqdveaG7DmeyDZoET7VaAjZsoUnhWUusRepU1RjPbu2qTpxDW1cfFv9mwR238Ep7farkG",
  "key25": "4qphgZNPbHA5JU8QbQRF3kgvNvfo8r37D4pZJMYfGVyDfjsUefoYvNNJxyRauTFv1FLwFsx6iD5RwznXyW8erP4Y",
  "key26": "4wWA7ox3CPowvx1mWQPBCPmcpoA35ReLrpubKA4KcbZ9KTA5Ga5ctp91xhQ11fqMNNqfGTh3Cv5UA8WMcSz83Lvc",
  "key27": "2JGChUbrZLrkKdbeyHcEdWCQvVCjrZU97syHSRXg5QXjVgRqZAVzBHQF927nDv4eHevmWetUQ1ewYqYmCwH6RA8L",
  "key28": "sCqDrBWtiJUoQ6PRdxP3sKJ1F3fm49DGmr9db9EypcoB7nBwALQ2uhCzLuaPyieNmkjzBD3WRT5AZHpsX7Srd3w",
  "key29": "4ry1ZikK59XtSbz1JxnsW4yD5hVwQ6qiseorsDY18JZSCuV8z72zm1Xe2XotgQ2MLFe2FY9QuYdRshfhyrN6er7H",
  "key30": "3MJH212yn7f2zJ6nM248k5AGy8GyaDsSSDN63vU3Yw7ucyvunW2swVaGrA1DrC1S9YeNtwGtJnF55zKEZgrDa1fz",
  "key31": "3hqNKWgMw8au52B1kb7EeWmTEBhRqtEdJubgyQWdEEHFXFFFgEkRBVRkMmRVkzo3WXfZu8zniYW1Qyxtzzd1H8Ux",
  "key32": "5Q8sRafE6C5ikez1DkD3fwhURhRRJDzpJ6j1jKJvRrXdtn16qPFuGQE6VKJQst65a279VuUpdincpNm5E49NPYYb",
  "key33": "3AYRR5EQqXFKXh9BPD1xuR2zThrdA6CDiYXW4BT9wVqQmK3W5deJfhiiV24oL75e1MFQZBXCpUC9whVJCkWqdZ5U"
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
