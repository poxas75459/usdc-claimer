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
    "n7RNaPCZD8ev2FrG2HbA8fonChc9mXtLM1acxq2m4of1fgen5Tq6kBbP74UvfXsJeQs7qfqtAURQwWqpFJ3WWaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jcDJXVYPp5vpqXgut6GjXkPb5XyvVHc3TqgdBSPjHY4yHCvSnzQ61ZGTPoy9tC14P41earG7Sfdn3d7knNQn8dD",
  "key1": "4HaNPCvoojZVcVALmDeXsmsM9H6PnCuVkABrQkDLu2u5mqxCQoH8WRcrbYtcvjgM17Bxoo9Bor49dzBVjW8mvneE",
  "key2": "5TkHVe54fdkLxRTya4xFvbSNmx1Q9DGNqnw4sJG2VQQTBRSdaCPvZVhEvsarnzzzWG8U1yc3LnXyxgzvSKtXA1Xn",
  "key3": "3FnzfeRmLyzt7v9c5sMQqXPJfZxmcfPg1QfVBNQYwF4UKAR8evugt5RpXwqPG6Z9oW8MuWssgSMboG1uYfXvQfrs",
  "key4": "2s3zh94rjo6zg3Hd3HgG5xFS784YYKuL72kdqyF2u7QjdictRqwgnacbyjKV1zwxaUKifCiw3oDehz7tPkbrwacd",
  "key5": "3yPE8o2MPcJo45fYQFnSZyuzvAHaaDupZpzskRCf8eorSp5iz2m1fQrJHNM7drKuGQCs4i6c1DST6Wnn91uPtRjY",
  "key6": "4X4cr2bUCuuqYuf5THNMCqEhe3Nzk9KiRpHRWSNHNGcBJ2m2NRtd9KYeN1Eex1wX9SStJtryU3HcbEQ754Cy92uC",
  "key7": "3S4sdGCCQ6Yiu3k3Nyn5H1HqKZwPMuiiAn7VejyPryadyq8DQxteGgASNhMPvb1kiA2fCH94FNikzAqdU2B9Gs8t",
  "key8": "4kikbBXggtopTLTxFj6638d1UVsPqMJSTy8SMGRL5EKdbxAdRXRJ2vq917kr5BA7uFtxywvmocxvS5okEsZnt8co",
  "key9": "42ENehfMVDiZ7jEZGb1HqapuLfS8yZoju25Ad25ZAG1JwmrpDUjyR6HF2CgRWWvQWBE3nDXdKiw9reJSZh98CpVG",
  "key10": "55FAxh6ZHF12Rt7oTibNC1ukqTWov6LMGHFR6hUR6FptZpvWF6YfZsyKpa6butvAqzC5YrnT9Aw2LfA9GgX9Ru7M",
  "key11": "5crJkbR4yCkMruijQ5ezr7zZefGUx3SmdPohPGc9NF2myWuoNtGXhUg22tf59Mv7VK2vU2eC2qzGTvbdNNiC789f",
  "key12": "3D4BjCAaDphFb9nVDdC2HB11j45ZEGxsMqtENnx61JDUaQXLX5eaPUMYsLpkrQmENvBV5mCxPXfGv6PZLc73BtCd",
  "key13": "rdtCXN467waFBcHpfYGpPMqmKjUaop4XPVDsbcEeWkRJvHJLacqR1oTfBFHB61gG7n7oZ7VW9xmqiUjq2hzq7Mj",
  "key14": "4vas7Yg3dExvybMLtuEhfZ9UFz7t6E4Xzd4WTbixUvsWJEW2dPGFr6ih6fDiFmm4tRpZ8rQEy5oCfwSZUAUdGS4H",
  "key15": "55a9W59cWXuXdTGwdbf2dZUSi4NLdoRADut5MBKkCQy99Y27n1X8kBLk8EHu4zMxvkQxJw11o89PshU6CphDtU7r",
  "key16": "4KkirahBvkuboni6SDaAwsbMr9yvh26oWqdB26qLVkAUrsBANwhBiH6KWe7cUF7HkJKEfVkeLQyQWbfGPEzrgw6X",
  "key17": "H7VAdNQg3MuNX62dgYCbrhdRGM7db1acprr59MZBPinoZN3SrFVvQUaTeUJ1bmADwexHvkQzdAAZdDbR1yKi2W5",
  "key18": "5kinRr9iR7Cqmh7qnnN6k8vVR5SHpzu1nVqPXChtDdE7GpqHDQHuuA46dWbS5sJJSRwXS714mHn2vxiaLrPttC1z",
  "key19": "3Torw5GmJYdh5FyJ9YeomYpSFmL2EAchFKhG3qUf1XeSBaqvbaFJ2drS8Z1nsPU9DgUMSvVGepzbMityD49DmLXK",
  "key20": "1kjT4Z1hNi1Aq1sf1LjhZbT2njLYc9J88FUhFXiZEfAd5Y89AYF2819XGdd8Lphz7r7smczYxJj9pAU261748n",
  "key21": "fXTDBBzJP5q4bChna8ojMLqdeZvT2hDK1ZpuJ3wt3Jn7zE3BW57wvaAsBTxPASNCRfXRANghY8K6SH8BoBgXJAa",
  "key22": "3r95EeCgMdcF7JCkNVswkvQPD3dXM7tdezM6VDhNmd2J47yfphqPpqXgBcFvYT8ZfQgdspomQsTBVseN67Wgs64z",
  "key23": "4AfiWfjMgfrKxKbaekqhqsk4xK5oVgrbTZWMC8zTQWrcrqGqb3VrbXBiQ9suyKxr9dtn3rP2btyGT4LqSLCdM86j",
  "key24": "55YfjPK58odWCxNQi3txyLha6tkkPiKTPKKxErFWbVcWbWs3WGE5d88gxyDpw6HYEyJKcZRW5JxYt7EhuQdWXwVK",
  "key25": "42Tff7yX2Gz81QapggMJpWQnEXiM3yB4mYvDHJGGD5L8mnLtiW4dJK8GzieWoUhbU7Hiuis7SYLgBQP2HymFwKUn",
  "key26": "4qkyaSZbNNJxJYTdfrAdFfY8RVLBmDW2tAeksVYxNHsLvYwW53mks9d8i3fiyVF1w1TYru1g8wrij7zR86ZwwSN2",
  "key27": "3RQfb2E9Hd3zpkfBTp9jyNgGQQmsdzuSrtQnsUsGzvs67WaFontdgS9aCrgCKwmk3bS8uAQE4BraS1J5kRyJnSpR",
  "key28": "5ef3H9wW12UDhiyFabDw1oy3kTze212qFHv36qkQRBW8pkwMbT5wwPkp21LEF3xxrXMi6pCdWLjR2z7uuT5EZk1k",
  "key29": "2EqqLZcBDLw1PYaEAjr9JDqRkq8nUHbUnBcafhDMhfxGNdnX566WXRrgGJ53NgZWnk3ZbCURraikpiyueFNddABk",
  "key30": "2KV6QkzFWkVfjhztr96RXijSoRGXSsLgi5t7XAW7URDVgWcUysNUdTtehbgZipJNTPVJ4c6DTwFMRRjqt2LvM49W",
  "key31": "b21rykhYGNtLaiTFKTfwELsTsC8tygEai3E21245Uy2asWXBRb2ptsCystx9mGVEwNLELbow3ntt1gqU3SMwaWK",
  "key32": "5DB3CBLJo9BMUkAcnKmdbLG1mfNoCp27CxdjNW76VW7ELAo4Q73MyHXa1ASpw3yUwQ4RRPh9ybuWmfoeoZCcETBu",
  "key33": "2UyZiC1bk7ZmDvf72q5vVDKZY1RCJK8GSkwXUoWVLJpHBnfp7kYqjNuUaF5hZaboS7Q1qYcbKqSHpQhSfGZ2zUrK",
  "key34": "5hBeSmvykgpGp9ae5idXQgbUWoprbJBzc5h4WrSUmaPernNALvEvNBP8pjQLaEqsbQPXHQsNhKgfYs92sBJX4E9h"
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
