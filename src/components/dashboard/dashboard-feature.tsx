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
    "6263v4sSPZBxxoAWz5YjuAfc3uLdSHiHSR9dBE7fMmKP9YH2FBoPcc7xi7TcahCAqVPneHppVmjLTw3EHqtTfQEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUxVHQmXYrqBFrUTnnGRxUiwfB3nCDsRVrkC4cV37Csg3s6A6XYybhLoxF3uYGtLZmRnYNAEn92VaGgweh3t9wy",
  "key1": "mFGPWV6DJKd3hLyGH861wdNXssr4Pr43r6E11CcJC5bSWVuAxmNQyFY2eJhtEfpAvZ6wtjmkrDXD3SQtGPbWty8",
  "key2": "2hEqSAsC2De2UWYUQCeDpojhLhDzi1cqMRWLAS6oHomRaeEBbs4F3k4cV7LWkCCbuH7KA3QojfSKWsZTTK6jgxHq",
  "key3": "64KwbmHekSuiqbvXEoxAimtC2kzHui6nt9cQH6V4YY6kCzw1KvBRY4viHJhBYhgQgfwRes3ubNmbyZ8hEG8Wx6TV",
  "key4": "Na3Hktz6RFCJqMgm8whSNPyTL8tUXnifjee5WfLK3qbowDJNHYb71YA57WwUz1MCBt7WY1bJ8RaJ6A3E1jpz1ev",
  "key5": "2quaTbdZrnCne3ppHTgf2va27Ke87sZa1hMJ7mZudfbLZAhtTn4vGipHE8MnBqcLbY4QZcc8n5H11URFko4v5nba",
  "key6": "EkY9XJWj7UKvvxmPyfiJmqDiP8SYkPYjqjSB3gpmn9kCYPAvv7Cz2jU35hUTxVHUzhJcRKWm2ECgJaz8CGwBhvK",
  "key7": "naCtWuJsVGpw2qrYUn4ab5vdwvtmvxTpeYfwzkZ13UdqPBVYfQt1nW6S3FkHAQVbmqUi5rqD98pDMczXnTPMd62",
  "key8": "3fcHMou83dPhVALEnvqh4vVBqmJ8esK3kqLvgrT64tYwoiZZWbkzd2eAYoyUkoW7s1RWJk7cfHjUd62rwvrgfzg1",
  "key9": "TjcqVoC5jgxMhxZG6t2MsGK3iLswpq1y346v7busDc9gAk1BZhCCBacWQZ4h8VUqbF5SQMfwbA9mKmgkHSF611z",
  "key10": "5fBCMJioVzxz1RmBJZktMCGz7cAkCN5pfRrv6mrbkMKRg3d5bGWXaysmkBMco8uofp1xXg7wRJt4c2eiZ37636Uq",
  "key11": "3J543jV3sb9HPyqCL9LrNHQBHsVXwRSRZcxw92UQ22GU7Hbw9rB6u6AzFATZp1qx4xCEniXuqL3RqzeArekL8MbR",
  "key12": "4zWA18yzBZswzXUZ3esQiNynfB8Wh6tpnh1Td2pdSG877b9r3ohWg5Yg8mmSZwew6diVXWi1LUpcSGRRGGBw2vCC",
  "key13": "2nyttqE92L4b1n76mNzkKk8Z5X3sCB6cjNGxPQBEn8sGnQzzpAxQSzogfaG6T592im9gZhurcBWDuRGgJZz9ShoC",
  "key14": "wd1ppvm5eoS4fSL6E7ZcbL75kVbsXQgyUqvtzukFvF6LhVRWtjy1NLTiWcCZBmgHSbGPWiiUQaymHf6PEUABY3z",
  "key15": "2NBYSV5Yqg2rcAKk2jzpMUeMimmrurWReLbRkJZKBe5ccxrgjWWwFnQVgXiud2uLreiuR9FWKKDW8ELBoXLJbjqN",
  "key16": "38g2AuNZt6WxdgPNAvgQy6EN9rmD4mXJhsR9QEvD4HB4vPXjRRet72a4DnFMS92uYEXfyjGAeeP3yMGYeqVJD4PZ",
  "key17": "4guWbhBDehRgs6o5ryQqjCi5f3p666FGaM2WCB3rTHmvdcnumD5Gs5jVn9bV5mBzmNTZgbbjv8ycc8BHN54Ug2Yf",
  "key18": "2KFNr9wHvgiBLBhrJydaSxpoa79fcM66RduZNM6YC7ATqNRU77PQ6YMA8b1MrB32pATeRhyXfcpGaVxvo8jQ6KsL",
  "key19": "3cMioRCMHhZ5a6ZbAfUsMUmcJjAg9NYP9bZtSRd3hjhxf8VMJJbopFoafit47vKWrQehK8bRQeJLJdibGpUJBqfM",
  "key20": "RBiHbSeTdTwmhNnuDsmpqUwS9WnaYLXBmbVne4WiEPo6NDmXQQprMPL7V4hjbFusqQHw6USLxXDq6s3ciKcSFoi",
  "key21": "2MQndqVWatJ1vbuP3YBWwiY1grZHjyDHdUrRZaNSK4ozC3Zm3XhAGvJ9e22RgGS3Mq5migskFAUkKc3DudTwLWTo",
  "key22": "5iUHQBw2eM7phEUNYkREa3W8WanATmc2opHpqETWVRnYb7fcjSfYnz3S3TDPVDCSC2UmpfZotbePBzFUX6UU8cGK",
  "key23": "4TxchMEbkwtMNGc4nd5RorZnHZ82Tasq9YbUDEdA5nPjRzEJ89WubHFgyzmKkPFHCwXRvq7o5GDfw6ZmqYqn33sG",
  "key24": "55o8gGY4cydEYXMBa2L8EwBHuKbH7m9pgsJiGjgzLDc82r1xbA9JLkW86WSHZBqDeKTVs8FNgkvjJ7wvih6dNAy4",
  "key25": "52Kji2dw86qGxrFAZQJt9sFSX277BgwsX2ZSovGFsirM2G6NZfUpx6SeyG1HZZ3HP6eLZk4SvSNBPjZvR5xriwc4",
  "key26": "3RnoWCvkozzsKD2osMaTTXFsLAHxb1cYWdXBNbMVbp7NDk8ZzmAfbj4HpgcGM2MrB7zr2f4Kd4StEDrAxsGX4x5c",
  "key27": "2YDD8DmFm3YvuXhSrPiefvKF15TYx91YjroULugoZctmYkH6nv7Jxp7MuKkVtTE5LhzV2vniq3YZg2YH5o4M5quf",
  "key28": "225QG5CGMHnRaKmAUSLxfReTUq5Cfvz3ysu96oR13VwZnc29RqBGiUMYp6DfMVxdxSoiqyvkaiJo6xRgVPg57j4Z",
  "key29": "h5FmfgyjQL43YsNV7aNpe8ySJ3JXxbRq96q4JXgCMAX2RqC1MyqRe9inKu7tPL5dXwyW9Fuv89jy135TmzrQQz3",
  "key30": "2ZbWVZZ5rW9VWfRaXmisfd89UiYzAXnQXjdZHooJsGwff3Xi5ywzqH5cRsfbQZVMhx9rsVdkru6PHqqCLvjU5mG9",
  "key31": "spq3hPepYEP6UbGeyuo8FVpUTk4fWLBWfKXJUuMXsC8F9gqECptnkVygQE7zPSwfPMp54TULuBcZnRH5K8SeZQn",
  "key32": "5gPc7UdesiiqnwWd3iCJBm8c25dBW9RHZGSLM4GPNei2tXQvc9G7B6WFbxYmB73kK7cV98XJNmfeRw8WyBHSurNw",
  "key33": "WuDJtNLYGeNgiGsEB6HioXenqizW4FhQrN12qPrQHS9oT16TMP9bVp4xdVFXXcHmBLfjyoMdn5vgBUpvvUuj2UN",
  "key34": "FFR9L4ozFCzfr4y6QYUYKTUnJQJhjFsQwg5QkRTHiDhSUqC5yzY2zuAxXy5ffpurMjFVQJXdNfR56VRfWYC5oqA",
  "key35": "2kWmPuCugeXHKr9xhmvDYErBZ7n67EP68HNtCMMdPk9tKmpUT2AMD6UVLmwbJBvZCUtBc3kbcnqceoRgfnkeysS4"
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
