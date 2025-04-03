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
    "5ptcw9UByCGXnYHZB4ByD7gHmbTHQom14vrfAHGwJSyTdhyisENeoH1VMeCFwcCkhu9KTBydvfffhbyADnjNqQUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61utE91CURGJc9vAyBMtjGfFMtki1FhKKG6brb9E79ngDAr4XoYifKMUQtrFkrT7LavYW6Gbfj5BKaHX85fzZ5nk",
  "key1": "5SbpMqguDiZEbHJTBRoGyAxFCRDK1AuWTXrcGCErad1M7NYjnBxm5hT2iFa1Ufywn1MDGN5YhqYskr6b2gjAQw6x",
  "key2": "5nNVvbZS9fDnPkGvBZHRSQQMMRQVH9fmALiJ6ZsrGuef9j1DXjmGheNNShdXWZY5fqFyxPFVRM3pJgdsq9gy4jn6",
  "key3": "5s3mz2zYKWyqoC21odVLb1fCWzwbczBinSHYKEwejBp8GRCHnig9Ghn8ZL4Da2YTMnoH4LtfwmYdFpiteKCLV8iA",
  "key4": "2XssWCsH4awuHaWWkpbkVLaQuzDfPP8F5ALYJ3vbwayEbf91sjTkpUQDrt711E4MLrZCfbRifu63bqJzs2bAdeYU",
  "key5": "V5zPFARqBUQ4Mr8yYxQxafC8eazpgWzvKLYgRyqhwWMmRi7gxzMToHuR2hVXDHVvsoXujg1G9kCMiUnWR9PcDCh",
  "key6": "2RzTT78faXWtU5gnLi92nu1c9VyFH8akgAaUhge2urQMT55k9PtpTwQDJbf7CSDt5HmSbE1otQg7BNHRqq5egfhw",
  "key7": "4r6amWZ9LDyBUnowZZ6Enx7mEC6y6DbaRnfDH4FoAH6dWrnWPQxQEdcwTjvdEYHJ9agjC4Rd5hJe8BYBJmZwKQ2Y",
  "key8": "4nBNq18xPqjvqjbEvgfodugCSi24q5rmiw5xYbwSsptU7MeBZgP1eepz4qD4MjZukKSrYjcpuYcKdXUyDCrKsmnd",
  "key9": "5oFJXcaxkXRAjuW6THQtVU6L9ajt6skDezxTXm1p2PzoDjRnCG2Qr7GZQSbT4vBzYebR4B81BuGao3UZwrmLGkHD",
  "key10": "3qHAnPztimV2BWMZx7DYCZ83DQQbS1Ay5uhzt2ne4TMtpKfhuFP7XwACNyp7YNNYCvQxJdDqXyuzh2gDwQjiymGY",
  "key11": "2pfQpE6dVcSGtUd8gVmUHT7CuLDANfxxnLvzVLEYCvF2JYVhAsgnqnW6snAK48Z8kA6mShEeXDHWEPWuW4e71BKU",
  "key12": "5whtBg9svyzRF2JXGwaaxBAdrgoQM6AKWCsV2V8WzEwLfkkZKu5WuWqWJZU4Nk3mRRoUbnxpzaHWtZBykqAGpB1R",
  "key13": "34pRVQvTyJ95FS86ZRcLndViLQUAJLhXjnzwAn2unCXAyqjh7AaFtZvpvKKzB69nJ9usPgEtiTAQescMkqjsbdUU",
  "key14": "3nZ7My2ePpV8VHkjaTcutrNbEMVRZRcNxNYh8oEjHroZyjx6BqEZEMxUVixLZAoAy85hh8vQHk9Zz4oi9V6zTG8e",
  "key15": "2VG5ftrfpY2cAZyTKzQoJ5n3gghkVffu3p7Z9HBj8GepNrHkTo1MpcTjaCDkxM9ZLodhCgHz6TnVaRiihL4PFAxY",
  "key16": "5axW7thbAnrJZBBZ9wB23hAjFywxG8wmuPNKJxEMjz5hi6Q39wKkhRLkKqJp5CThRJjy8BNu25RVmjJKLbVgfAPo",
  "key17": "2abJJZM3yUJpiNeAZzq1cDoGZgCcz8PahRMED9V89fTV87UwugrBPs7MkdTeK1aNHUDshriVhu3yceub5rFBsuYf",
  "key18": "XtYRdZwFpvT6Lbt7jPy3EvxvrqLDCrcrp5CR4QeP85szJjjtWQZp1AoEWzxJjf6BGMnb5RqPwN6Tq1scDEbwB5u",
  "key19": "3peC8CTziuDUMDNds1aXwYkLb4tf6WFydDb4GxkzirDyio1YJATYGpQZ48NpvxdAaik2thQGK8bt6UJwJfFGHWx6",
  "key20": "XBxsBb4sCoyeqgRyaWfN5MXuc3SzPWn6p93aQwKhDwL6QqEPLz9icP2aY1zj8am8JocfJowT21zTt5P8K5oCeF6",
  "key21": "23Qaia8CsviMZwuD4eSvz79Ak3eo4PM4fkB1WM5t2GbLMPo8PeKntU2zmpWXoyzhwTfK4dSu4sjfTtDDDYqqMBfE",
  "key22": "4crNd6KiasKFm2Kr8S7ZjtyiftVoLyPCWRELdhwMmMFz57JQ2a7nAK8LJ4NbfXDpAk1FrVySNm6o28P4cM8WBZj3",
  "key23": "3ym6uqTgGwkjuo9dv4BTTxhDkrcCtUHurxSZeY7W9oKWEtVL5E1Y3GnC1oUyeQ2FH2w4BgDMYvf2Mr3mEoy98YmF",
  "key24": "3wx5n3dguNBJ4vSgNqkCy8YoPU3HaWvAqWENpqKN8KTSFE1aWriw1q1LdQtHym6aFR1mEd2BNBnFczqwvcD9cPAt",
  "key25": "HM1cgXvdGMeddn2cVLDnFhkB4ub86D8ZKDHVdbcYouXifc5QVZdVKHQRSSHFBJdEoQuiFp1ChYrrLw6Q9qMXnRX",
  "key26": "51SKWJWRZCERQfAZMot6y3RYKH4FaBA3JaCSnzS5szPyfHD697DiGLtLYQrdMpWcdHXB3BVzYiDLuJXTmouf24Xo",
  "key27": "3VrMiFQntwFK6Bnf5DQt1oTp2R3wwvcATDpQSraoyAmaWrmWHdrQAHg8KhocoUYJJC9teDtfqQybEuYcuGQfbXs",
  "key28": "4nNChJiDtEArn8ThjDWYRKCcj2xzqVscPrhW4Pq6ErEFWF1GWve3n2HUYU8g2fGJpSaoGeEz6SFD2VzNjxbNSQRA",
  "key29": "3fYDP88wGBbRf3vGdGzYUpZpG6E5CHLgKtqWLXc9zPrESX4UdrhskwoAkx8L25TTxFRy2fGeW3m7Qqw4QFLgdQ3C",
  "key30": "3Acy6WXbaopsjUQiHLehVy1khn7QBMQc7N7cQoe66ByAntcutL7wXnRV9pLsE7eLaN3NNXfweBNcMWq5EKmDvtWY",
  "key31": "5otDF2oyuGiGehz9LrigyxYNF5c219BNUfLjJ9SkZWY2JxkzSMEyABiaLi5ujsVgpQp4RX3sAizc2piSHHRpKz6d",
  "key32": "KSdaZa3QoVYDU6UMZcNbVnrrxQpayvhtueEynU9FV9nHFEQgkVf1TiYGSiMEKvesphJmadheNtqyby9vSQatopj",
  "key33": "nSjF8VZrUYhGtw242rEUP7eciesDm4Pg793k5AhS5QVnEHwCLtv34CFYmzBaqZ52HBNEhf1kPYVa6h7B75PW9hT",
  "key34": "4ynVLEZoUoc8QAGSzSgJsFgSTyQj5sMFUzPRoHuqHh8HTGji1dyEb4dxsfPU4j42mYg1vY88JJ9jC31qm9KkYwjZ",
  "key35": "3VyYKwTnu7anjGUMv2PTRJcpk6csyHwoFdccUzhkDSTkTePkhcz57eH9mAMhfJSF3i82UWa81xZkgLZzp9aESgkH",
  "key36": "57k6boSTaG8Bzou33mT2266k8dco1qwkFxDvusS6LNih4Eu4DF5KUgiQ9LgSmjV5aQHsgtxyo8uSfMrZLeYMvuMj",
  "key37": "3GfAXowPyE62Eo1WwAd3rNLiwWNN5ZRj87i1c9Ye2mkxMazgwJwg7fpxrnt72UhVGFBw6RGD4J2CTMyeHyGrXvZc",
  "key38": "5yzSDGerACRYF4Cdmyc3djr97nPHu3BowabFcVhcG5TMzEDjMgBusnKFk7UBDVK4L6hZ2LXoJei6xRDewQVVxYNm"
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
