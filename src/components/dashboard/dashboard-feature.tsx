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
    "3Hce9KU9GvaCVavNWRJZViL8TjCzhWSsfx5cq8wac9CuwiKsieZjG6RrMC48xpjmhmrKbU3wwAQ2tLNWXjYdczQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nACTh5muStKz66NAZMSvmGVkE43cVvFSv8QxYYXHn4zk51PhEFB15NfXFKTNgrDjrnqqLikvwr3bke6FvHTT3Uy",
  "key1": "5SZFHoQJ1d5bviRkiVVP3BadFsGpyTzWRcrfZ9b2f1NDJYaiiTSu2aTRu53xu3D4wkpuBwoZ5Y1Q11pLtsXeEryQ",
  "key2": "5RcXYQDUZgMb2T4J5WtNvqLPRVrd77DfxC2Vui363n78PmUqDKjryyuNDL7S8CxYvg2Xjd1MFEzEAkzWmqiM33if",
  "key3": "3VomTJX1y4M3usMt4598dftAxeaNfJSV2hQrALcC5ZNiDCnCXLQqbQVPEmPzfgE98Qo3Zsp6zVfNDWnLV7LDYbxJ",
  "key4": "MM5zQvqHuefBivAwnJrHcsRhYBicgYo2B4S4SvunihkcRNX1RD1pWAMMkFJjS93AURzvQx6YXgq6iQsRR3qhM38",
  "key5": "3zrp2mEmhGHyURhf32ZxGhqM8Z7s1zkhpc8GoVmz6JSKwUwP7mEgcKj5FyUu8aF9daMSY9QgVkRezk89QNXgCeMp",
  "key6": "599x5jYLnjyQ4idxe1NTaP9SMpSZqhgiW8tMW1X3SHpFbXt2eXKxQUomecJR6eVyXEJSh3RJoocU1TtKM99tr9wm",
  "key7": "5tw32HEodrA4VcWJcQt7vWCQZejfKfULjz8f3UFxFVKfgWsg74rZHmBeohcocmYD6SqqXQtjvW27hGLmwqGFZrX3",
  "key8": "3uCetT1J8X1J6ZbH6WNmW3bntj3VL8Ne24KmEFb5Y3fSWSEFT6pf59v7V4qGy5yNMfv1KkZYjRGxk1PruHa8pDPJ",
  "key9": "JjNx5S3y1uFpF67hzJXVZMgu7qRfUhwtfPU6u1z1j7FhyNJHPZrvRw25NDVj4KLrDigtojqFAKqe1mT7owYEmRC",
  "key10": "2kHfCnei8A82WWQQDk8GHuNEWazZEyZiZAsy1SbHYSuG8gKzniJm9Qu6fcacLS9cQnWVZEPH47ZtN5SnHsFYbwMx",
  "key11": "3QFjHLQ3hS2ngmaHG367AuSVJV2aQi2U74SndquXdyyXdSSfyKJYAdz27Qn1p4W53SDUUUuqFQ7tg317nrXeTXuv",
  "key12": "59XQixyXoS7CiKU7Z93HckzyvRMDdFp8jEzMDg1bSHEQrjvVj1vuyTtsbm7RKhhfb9khfTPjPNvj2KAW7fmxU9Kx",
  "key13": "3MrUJBhHf9YqWAT6726BPcHod3xGModVCaUfcNMFk9a8931AZqHDtsDFCNbkUAhQDeJZ6W5agw9LLbwfpkv4JdSM",
  "key14": "4crMdMjqiph8bEomsdshdiQX75TJ3gYUh1wgRcnQLFJzbETh3MhwGi2w9PSf937a3Lmtn1voohgK6Rv8EHZ8pdVr",
  "key15": "5nZYkCvB8xZCdLXLLv8RdZ9Drcsy4gRXtKbUdHoM7oh7Bj3VcMtVKcrmPnZJXF2KT5RYkj5a5ofWHGo9h5iBLZyc",
  "key16": "5KzhfwYwFoCnbQZ4HMaZDtjHq651xxDhiFsci7RRbDdRuodGZUSwtSaWTpXHeT9FHB3UExqhvFUg4mNRbuUf6bvf",
  "key17": "4j86V6Wd7bX1DdSozH6UUV3zV8L36i8nokGxbBRRG8H1b2zrv3KgGjJmQffqWGTyepMMDpKT4VsVJuDWMpJpbbCg",
  "key18": "3ZmCSyQwhJrYDthvmW94T3GGADVyTc8vnehZCL9SnESgPRsmoj2rE4JxXMWvRVFkDw9j1wEY8TWfYqUnxtGewF6p",
  "key19": "4LEiFzYkxNPPNah3X6SQTR2u1t5Ra7VrfBthdq1Am34bEkoSszcDXPAZUoFW4Hq7PDiKVwiWHQKBKhce9kYbvydJ",
  "key20": "3JVDzAeWhSpb2JsAufE2SVjAmAdFyUsfPLKcWP4qKxNBU25tDDb6tCYMbscKdae2SGyxtVPzruVb2empWe1j4ceB",
  "key21": "5eA3FNMT9U4CvrLQJs8UVeeKY7tavj8bEXT4j6pHQDCg1S4w9eGfiKwSKzafSB6yCofqBfT83QjY654LFruRd4E5",
  "key22": "2xsy7oEGcXLeKFJ9H8JSv7XHpkveeRKvnDDEoFZY8gsgqk1hBBuesxjG9X5xdPy8Rt9pYfLcL1sv63YdZQZmvRwg",
  "key23": "61JUhbJ3vae2EJPCUn8rcRNGfvCvY7M5CueSvhTUW6DLLf22XmbMPX83x5aPfhWmfvvB5YHnadQf5NsyGgWYjXTB",
  "key24": "4EQtYBBrCjBjBuzTdfyAnaVCMxXg3WwLeR3QbDYnkTZ1ARqbDFtFSXPA9kLhNwBWDDiy4ENf8ghiwj9ur5ikUR84",
  "key25": "5A26PFeTVLwJbLKVFsZqK2u8y4cQ47TNoM3uHW6TiJWm7vBs1hnLQncQgRSuDkLaeK4oSzemT75Y7TVP9nWpUpJE",
  "key26": "48r8LgK5LTsAoe4EYV1y2NmvD8maA4yeXNRUYTQYWN1BKnZheJHEwDy82zxUjb8i5gTUphfWCEKx3oUxVpc2rvBd",
  "key27": "3SbfLZUBantvyb9UfqyRgpw7fJhyvDmHBHjGvssp8emGhPjtnpBc5SNJJrqst4sYdke9fhV4YKYrfA9yUH8X4uKo",
  "key28": "5FckpGkmVamhWb8WDJcLX8WjSG6njdTUBmYgjuTppFjoATaPgkBKiMNAP8PiWoWbeDNwJaXkv4o4kW5wMnbZ5D3C",
  "key29": "GbpwNmS1AXWXZg7FazUX7JPyYBVxTaYG5YfDcEGfuqbggMpnKhTF5xf95z3kPfXCLsP6NyYkzWapnxKmePXCtjY",
  "key30": "4tFQkoEvqCJpD6qyZUTP1kywks4WKJe7gEYuY2t2V28foFSNPnxhB3wQFoVkTMiETMeAy541PZiH1FR678yWxQnW",
  "key31": "uNqdxcpVe2g4LRX1BnXpkV27xaX4PM9pxYqEn6nyqD9PiLwmdv48q1qFnS2MijvMuHRtWJUij2jAsk2CgqjKVUa",
  "key32": "4Bs7Xu4c1hVTY2SX35kENWBgGvVxktcPnyoHJ7eAzZWy4ZeAqcRpmAtQPzPL7ESCi6JLiLDJHFnc1CyARwb5F6Zn"
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
