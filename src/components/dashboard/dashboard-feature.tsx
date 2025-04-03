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
    "5usBvhLvFTXSXr3KxXpmDpFHhe7JDcwaHPeHM3EuvcVUCwr7HAt3cdp4pDaLKPQ27Zai3NVAJLyd1zxjswWwRCxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQqLt9qs5YoZBAszWxgC6CRMkjLWukZvBNg2NJt4VxyYeUwVRNgJkTgaWaAfP8x2BTbWGRoRE1NsS9ecV6fuNjB",
  "key1": "kUHgawY25otTBdoRpxYGPWb9MhNAoxR24N6SAQcK3LeWBrRoSXVAy3KZ2meLqAcTXQX7s72w79orPNemJTP7NZU",
  "key2": "4DPWBNaSfXsuMgQqQiEXcrrVrmGkhYsRuF9csJjqtPmW1nz1rcMyBa1DJ6CivtRMdMXa5DeSvSwWaewYRDfh3uSn",
  "key3": "648hUE8NXjqMKoseegKScqmGPPTBneGwnY4aY7v9aaKhYjeMtNZRiK1Sh1PcjAK8jQQcX2AsvicLhfRLRHx1ynxW",
  "key4": "n2HRxwNZHgxsvTPdKByfyiBhSTwUfC8TmnsfttC1tYCLrcWqYHtNARYhAm4YjfuEA9QFhG9T23BFuQqieavN3CN",
  "key5": "2AwZFbopC1gTvaUy2DCuXxaeViUd4GkUAVJwViGdRDXzKE1MgU4isxzHPnmEdgjE4KXtAhn1217WCZgzLbFwKZDK",
  "key6": "3FeuYMT1kaux1HfECUw75oexNHjbnZo5B6fRDZMAbN7FyLYV8PGkBqws5z8JDu9kXDTWbDyHhn4JYt1JwMVG8CQ8",
  "key7": "36QuYBdk84uhQdhHEANjfNjSVNiXVrFMnx5pNHFWUj4kM5v3f9a8tPBGX9Ly5yf9HqxXyYFFxwgoU5wc2QhhqgDg",
  "key8": "L2nTPHaAN8iMQ9wf8pCz6pbKYZb3jyreVvpQPg7dwNDQJXnz33vPw5FsGauzd9qp3uxraXfy6PpN35hQJU9aMFP",
  "key9": "2XgiUwrZnhJh3z8gvnS4zbAiRhgbesyPK1B1Xyb9kon2rargCa2au4RRLxnCxyo56dZoCHM3pYqNQfkosJNMMtse",
  "key10": "2UsB84mM43E7tUunepKU1tVT8NoJC4LdswzViDTTDkE8p9Qp6GizuVZPZfL4vsZqmLD8xpR9EmeX4XDtqoqoDyNP",
  "key11": "4FtXyXgbgkQuYH3YvLxPbqivbrhfztsu4ZGGu2bBMiuc3Yhcpxftidtkgwbn3UFA8unvFx9hgCFMRpPVvDetnVJN",
  "key12": "2ifryYjnoTvSEuScYGfjjmSkYMmB2Q1yWRj9hNATyyefXSPEiufjBYxVpxLU7NGuqN8fau6HWnFimRL1uJb9ZrMW",
  "key13": "rFRWTeDiNXaXqRxmqp64cMPzUHM73R5kXifwXM7kkECPeyKncNgWMcY1HdbhukL97iGEBFkyekc2N96Ji7xqb7d",
  "key14": "4QUi19656AHpPf3R8qM2gaByVZCiZ4DQxA7W7Xm1wMexzDmE6R2q6wZQemu4rcgd3NU8iuwV2ahmqYQCeh2nR3yi",
  "key15": "2HFnxFBxCXsMdh8uRqB1FRT5E7Y9EhdYCsbxg1mzEnmJcRhyZahiTCUGTSKPhV8y7yVjnJdfKAFdgJWyqX45fe6Y",
  "key16": "5aE4tUK3HWTxUc7Vps5CbKCUwN8BmSjxFjYytcMM6f6d9WygftAWTzrrkjTS2aA6S5BFr4he1tWV6rMNspBcMW7V",
  "key17": "2Qn4JpPoUhCz4HmRsCnGxCMy98PXM9jKMSHg2ENd3W6BAyanw1c89fwyc9Pmw3L4LmBVmAEDUuc1e5awMHz8Sx48",
  "key18": "5BNpNvA1T4dhxJYxSNKZoTXfu7SUQ2kADyvH96oXyHsFVTf3agyoHMdJjuuFubQbgFW77J85cqiovAVyCzYSQR7S",
  "key19": "4u1xzwenpP81YJbvaD3p6j1JCq6f3f6yxirHHeQpuDLFnNBCxt8pZdKf3dfVfQCKSThojxkDWSwJLHSckwTv7i7c",
  "key20": "2wZpQdqH8vyww1WXTMx24xEypHSDtExdWkcNdLt2MnErSSKe8Vc5aBP7qKbFvt81xxtEYLCRGarKzrxzF4Ja3rwr",
  "key21": "x9HLm6zvD1gUDVRVb34rwL5wj1QAaihhZuG72Xo9vuA6onzaqF7suEEAGDWE4UfnT6MG1FZZH9euVaayvAfiy79",
  "key22": "4LA4zszBdSU6u1AebNsWaYkAtq1TniuYq1C2ZX438D2av3pBWvKRxjWi6sAxT6jcnhAYAMgoYVQWKovTrD6KCC5Q",
  "key23": "3tKKoT9ynxAihTxRqSA6FtbgqgKMa1z3dpXxao32NqjPh8EpKbTDAysQELH5HRUQ5U6UNp9uCH1bEFY7AQDaXDH6",
  "key24": "61pohmE4KrggJ4uSgq5kecA9Fw1is5F5jo2KhpTogBGzQhEfuvaLb42oPVun9Pyp7T4Kom5Bzj6Ytk24L4CaD4WM",
  "key25": "BREkA5Amjgoff8NzodVRiZrs4ujcqzjSMQKUvV21VkDbVsvduHj4RAx3wiEoMV3aEGL1mYAUD7nXE8GkCQBFnZs",
  "key26": "2wVG9dn9z8TQCVnpkzejvMbpFiWT5K2u36Huy5z56nPc5wpTFZkeHYLhcUdrptf47ZDoPdyA2H6htazq2eGfzQdu",
  "key27": "3ibAtFqwyaJ8qvFPLxpkeBZ6TW6nM3iaqtAfiphxgmM6nPr5EAZdJjg6b6Rbg9pQUBjU2PoGZ5y4urRGHiUojySj",
  "key28": "5umy834NBF4b69cEbvLYr1qrvRgkzDmH1BKDkzxPqhhKN9Pe6iXAVSwLHWeSzcUEfDXsZZAw2cQuSEr49oTkLVHy",
  "key29": "y9R5w73H1ph1TMphwrbpFedfw9CJ142zzXZyVVQLAy4xirheauzoNiojUJ7nzgP2dXJRFjHA1CizAweNUVJexiB",
  "key30": "2VFj38UThHBSUEWnBqC4uwTtsViDLriYe5isQkWKci4FiMXBTNqw6sZQY3izyArnkuzFEGZhCBAVypM4eorw4d42",
  "key31": "2kQgf42sdaNyN2thVg3JJ3seCBkW1TAjdfLdVtKRNDt637s1rNoA92esYogj6o9tNi1VPQuRr15oNuEztbZRdrE",
  "key32": "B449qh6FspMJiPKdVtjT5uJUC9w1iC6YDRdjQEVea4eM5DL57DX6utSN9CFErV62KsxiRF1yDgu8vJBfBAHjBWV",
  "key33": "5pDeNU4YJkAW2c2XZGmrvfBpD7pvazbRazKBHoMxotizJ95mc4LP23f8z6BdXKsYfqK8E2k5e4fxftXDhGNug5kP",
  "key34": "2FJNsRwLJiEkqZi5C1pLiTDnSQqwBSTWqTUnaWBYVoVcGG3oazZnuXy7dYJ5HWYQnq1axxpEWYDWh87T5ArXcX1X",
  "key35": "5nrorGw53ZZjiLomKUrkweDR9TXMepir3K9idSfxGL1F5LuVSBc8TMLhe5Rtq6BK9SQJifMyAiEk2Fxvejojq985",
  "key36": "2JyVq7zBrdrYu4ELWvTTi4N8KcewKV5DFSXR2VzRoeEPd5v44JC88h1Qqdo12eiFpzeyTchwPcUXxo71Urtfd1XL",
  "key37": "2T72PhWKdUzZhNg8jF2BFa54RPzGQpW6vWTxGJKn6L3KYNGqbvYBTb9LegpkqgUC8bJYR9ScSRrc6o1VMCsqnzZe"
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
