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
    "21q9z5BiTpA9jqyZgj36Ma1u3cg6rWuF4AM8av7qK8tm5E1Si91tDdkqFrQbciHdbTs55FNNqsk5Gm4DRkwGS38a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JRrGk2djFoMBzjPuS2n1RNTNPuSjZj9ugtirnKBSq9PKGGBHhYMCTVWRHrSNYhpK4QvXm53sUqTT6BJqXUwyEQ",
  "key1": "5gYEbHEUJWvcki4GZw6sZ9Uyt4mXFn1ZW7RLQY5dihaegRXZ4MBD51UznqkjoKgsMk2t26iRKf8n4pNvVUhACiNG",
  "key2": "2pD1UMT88ENdgiMxtPP5cGzFcVx15KiQyZ7roz21jYwPEdMaJNbb3cRZakeUi9CGQxdsZ9LtrjaC7i3DjNQRTW1w",
  "key3": "57aTJJCG6EWktJPgYiLVZFwiz7AQeHZjw3wEFzk2Ax2pceitq3BntzZSbKynpbViePbM1fTsphG7RvJnMYaKCZs7",
  "key4": "8vjYeYPDagUBSieW7A5zjVk6sUEDasTu9sF6UQBEjxq24ee7k7eBJVSGGbPmkaFngxADQDmZ8B6FMjHLxZ5UGay",
  "key5": "5c1GdQhiLe8YSdUPq9TN2omgbvxeMUWGCu8oNYxbASrP4Y9jGNwHyCH5Jo7LXmMLgBzp4jhserK72LjTq2tXVD96",
  "key6": "SD1on8NWzHZkDoZQcd2GVTDWXSTpC3AKTXriypzdY5yQjbXHngZ4ushXX5bUxCTHWBMBRWoaKxq85LpyBky5EDQ",
  "key7": "qdaij8ShkHsUfMejpr3PrUMdKjaxpAZTyGtgQFFHLB372gwpGAXpygRs5dcGbQQkPh5TJFRZS82aYmK45hvGkhP",
  "key8": "5ASKHZmx6Hh7enicWArMVWJg5ke6ncgXdLSjiiJc9GyLhhHiowG2NH4oVYs9Vkg2grCgFmhrKLPmzYeDFY2Hu8A5",
  "key9": "2FwapPcGzkY7TwE8tpwRqmrzxUXV9SCTzt8N65Ed2C4TvhyosE5FqZaxhpKkZLsZjU6Ap8TceLyRattSy559Ph5T",
  "key10": "3rj82NBXwEpsopHpHSYqL1734iu6tDymBkLkKeuierGwvDi1XedgTFLgqShJRDvzQEFRqN6u7PEMVTnDTUg8VVnu",
  "key11": "21gSwuYyen3ia56yDCiVns3kcXT6W5P2pvZ6FPSxpaHfActvKrgYPGY685hZ4xnhtChXcsxtw8KXS2fD5Mo1jYHF",
  "key12": "VQiyD2RXP6QpNQw6oXLKqB8s1xjJG27KRg3ZEuZQheMfAWpvf8HHGi3hk9LAxdyh6ghgrACCWsDrNhASS76Uk8N",
  "key13": "2Cc1WEj9hYQA6sVpW4BEkvy93A9MVSZvb1CuA7sGDf4ay5hDKKxyjmMHhNhcxfCaeLw2tPmV36Ld8PCeH2yseVXm",
  "key14": "4Xa9WzE7b88KqFDCdL5ceE5j8pjbUgVCHjYVq9Qbvr83NhRuWFbdzH3oJHma7Ynjux4rNSsiSut6pV7gNUTDh16Q",
  "key15": "3cAsh6CfdHzsFnAXxS5tMB5dZG6xMrXqwxvNoDo8chodMye2gvyTy4Jm9kfTG5CPVE7xJUjcsc5ieLt4aTYTrg2S",
  "key16": "qpsynKhp33tc7WDzFaQzUBveU7mRomVY3SKt5j9XmDzewZh3SxCNzoi5aJ6S3tWeTngF9vxMxN1jzvTtZ81qca7",
  "key17": "mQyBqQBX7atjACw8KTyGnVqF2NMgJ2JjsnegyRerwTPwgCuu5TWreTgetqfjAMH2tKj7c9gsbWFC1mazyb7g9Ye",
  "key18": "3PPzFKG2Cq4uCEWoHj1h8jkZHzg87Aug5KYyg4K9yUL12a6nMDJ5XLkuCahhqof8k18NVzTYDEtCmiBxkLSRzQaN",
  "key19": "3ZHQuRTtQRKnaMBWVh5pCtTUsGVqxQxRo95HdKXcUheMVU3433QMyc6vHsPVSLScwNvFEsms4oyT64YRUNBZY3Ma",
  "key20": "3kuwcb9Pacdhpuu36znoSaLquQANoX5urAEedYXfjJjYN53fAnoAFafTviENY7GrS3vMdF5x8VjMkTcV7n5g1q7T",
  "key21": "QkxJHYoqpHCzeaGi2a31X6jMUHsRPiAow3P5SSLZziKmuF4mgKeJh5Q2ct2mTjz6gGtvRhw7xoNcyddkTgGtfjD",
  "key22": "4siY7gpm5t8RgUqRVHCanpr3o9FsCb5YaTji4fw7e8mTL4JGBkCHDyt4uV2sqfWfx1Jf9NjqmqpWmjfhTV5EZ8Uy",
  "key23": "2mou1VGcwjPzp2EcVMdZVGUZRKSTnSiCjMKn8FYD4Tvrm3jqZB9nSTqxv52dgp5aZmgtXaWvxS6mJdwiXKo6ChFU",
  "key24": "2HXZTVSGZmx5f7tJMt22GAph2kfAx8jB12xgAKqaQde8CTEHjW8dbxw3JzyRKB2PKGrbRmw4M8bekSRBU1AoXHp4",
  "key25": "5rtwLQeVoDkahSsManroq3FreD924Lai93JbRuUybgicyLrnE3K2zDvWx5waJMn5t19jJnW2VfpeKZ37yAJmT217",
  "key26": "5VBqZxRecrFWjyymnwVHTBjGCa1ggK92JXCXeqh9GEJeDetuqfZzBMnLxuuVQVbav31ATJxaxsTHXPfL3y7Y7i3C",
  "key27": "2JMRECzLsFaqCYA3S6Gt7C2Xf2yKxyiGBidY45t8LD85Rvyw6wPSkZ3HwnDxsRmxg4NPBC4EDeU3ak1fmzQSEXe9",
  "key28": "5d3BKcLktvpd12Qv1f3k4TB661ThfKAAzzm15kjSaytVXUgFu5vWNm8b8hyrXg56bJTerba1WY9kiwWaqNMT67Uz",
  "key29": "4PGeTm3cpv8pVHk2WMwwSGdA72jDvCTQhM3YoU7BDx4bs4v5VeaCn7qCq285ooCKUyWNYdhMpbTgsgRG9LsVpHwa",
  "key30": "3PedMVADbCTeBSqyrHwosbtQh6icJdLUiBgZ3dVk5S4BSVhL1opZAzyXjsXAR67oLneBzNeN1Pc6ZQAHistFUdyK",
  "key31": "29f68CksVtmAcY7CrqDNMNffDWaGohSjE1MaY5y82fJAsYwXCsGKHT8rJthr5DUiU9NcCqhd6sSxznyxatzSjg7M",
  "key32": "3kryHpjZVyckpmXQEuL8uEwaTc9Xy94EfC76tt1LXRGKyYAUrE2u4nZZyjT5GJDM925oQzQrXRGvcLRiSzaTpmE9",
  "key33": "55BLJvXFYJgW6LBJS9RxBrS9aT1XTRf5ec3UV6W2HZZ9G5jnAmbFR2FDeZGjgvK5aqi121DdbYNc1JJ3b7iBriSG",
  "key34": "3WmQp3BUQkhML1kJMKjG49pQN5BErkwQQXAQGU1eDZgdjhqd9bsKRKzw8e5vZFrDspvUw5k6sNgjjA4Gsd6jz4Ad",
  "key35": "B8bubNri263R8Vc9ZDqsjwxSVbd9JqddXRRTrnUmV5ZDdhiTjTCY8XinAyRwTsEouuayVn8Zsa6AnTxDs6tS6kA",
  "key36": "2PuHotAGwic14AYZpQ4zestpfduvR4WTSegn34EkRo4Mg2GrS46YuxonJe2cn7MYqaZnsP5Xezj3xD8M6qgQwHwH",
  "key37": "3hLVRQ4dKPFZc9ethtzH2Z5EmHZVUim9pQFJ6wpdo694PWK3KSaUe8nuEVAb6xmmKeXki8bWShDppcnWFvjTYB6j",
  "key38": "3n6DVeN4K39XRGkzV1idVEXadxuKrkCg1SB2XB8UuUjFa1U2nSvejszg5Y7jXyXDSEUxsVqdU4mMgQpQQD1gcLrp",
  "key39": "TRXTJHuMtCrKnBeVSBgGNWbLWD6ewi3Je7cyYkY3p6bZoTLfgfdq4QXpSqJQmZHJqK4BYsQ3hEpr5M42DEac7Tt",
  "key40": "8WnRoH5FgJVQSvnaBsDSFCY7D8yinbYWNVEJfSpwiE94nmwuwnWtRba5sgXvDDnWNLoKB9kNrEnZSjxHf1U7JRm",
  "key41": "3XFxthNQSJrNT4i8Cn6661QyZT9vjrj85gShVZYpBNXyVpwRCvbxxdVdrQrw2CQgjgp3NcqdN3rGecbp6CjVwJ32",
  "key42": "5hbKZvrttUDbk3Vs1WALE8BjsFep6yDizcT4g6nrbNjQGsAA9p2zE9DPWAB7BnKZagDHsxgkpebRHdsFSpfThjEY",
  "key43": "2QhV4UeJmiaT8UfhgjBijK5V9tBFDurjGNcV2P2UdYm1ab53tqtyfTKQT2Umyz5Xjopcu9zHjKvzXuxc3B5viCrQ",
  "key44": "43hQt3XQX9oKbRHfwtCvmWxS9K9SjV8kwweEbz6NDyAjVSccJuVuGEB88h3KusUVGtCUvUFgNogmgMmu8xqF8JL8",
  "key45": "zoapqJmW3gHnPzGRT8oncqEYPSPT6rNPhwdDwC3mdRFKqYXYgYpYgqX4PMYCS9bUGtTLc1MTyubCpwZwyaUHURK",
  "key46": "nhMY42vLu2AZd83EBAGdDf6SU4Uk5WRsLjbiUJ4okPiVEBmAQcV7opxZ1zViGLpxfAJp7osqTd3m7YsTLpRjH8A",
  "key47": "3B88GdhRxXLkJAMrxXgCee8qZiZ2M4aUJm1b82uFBBnGyH4TQhQTguEdcwCkDEATRe5ijx6WFrVksxW9XKo67n1M"
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
