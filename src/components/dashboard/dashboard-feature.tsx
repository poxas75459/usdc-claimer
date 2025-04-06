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
    "5NzKTskZZFgDk9KyNiUE5DxfK5PC71evEXtgoSAaGJxBzhmttNLr2PJupqAhL2z1Q69nqqvL1SzS8j4YQ5S5cxNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1DkCoMmRFp6q34MPd8fPkqTwZgz4iM6cP3oP2D4HbagR67TtMVn1trv25x9jUtFTgXdUQtcvgfFqhjiAhVH5ZY",
  "key1": "5ext4bua89xofXuWpkAFBj874RK9y3DxGctiShe9CNA74DDi54rtqC5K2sQfJBQWPoG6ZwELXYfdnQBkWm9GtuHE",
  "key2": "3vgsavz3oswaN7THx2maij9RDAJrjNRMDUFqFS1fehueJUwTtmrZ1R7SabuFwhTgdfswN8GpL9MKqu1XaKSqJ2Yv",
  "key3": "bGHKW3cLvdC7PfeuEoqKLyGp5JhG2EPNGQrJQA8bC3L1XyRiXA5HB8E6P8AwUaHyCZ1GkPH2mDLdzR58EPcAWmv",
  "key4": "ZiphAxzrvjNW5gMUE1FwVvVYm6jHdCERmMbp5YEymCpTLUNkpHh7dqtqfT5WgFDy3KQKibt5gucXQxK4C3LdbGu",
  "key5": "3S1fVxacM35tBxzxBSfHH1utKWT3Wc3rxJKQ3uwrZzJuhMUrbfA1V1XJPLQKHsddbUPBV5eF7apLh5L6WJvvU3vX",
  "key6": "2xNNWUQcANXUdL6jvqb4Gp3yGCs6YyVk4PWnAccv1XrvMyrk7UQEq5a1VkEr5t9BxiXfprFzEFhGYQRK6mA6HcDy",
  "key7": "5gaGQE6h3Dm7u6pMtXjZ6TXCw4AXyCNyaiWBAW1pqUshd73uD8rnMv3SQGZSQVLAd2VBdPwHYdfKv2iYMHDdR92V",
  "key8": "3Zev1jp3MrqHaT17sQmjqsyYrpkcnPNNr1SifeNUxaiC38JXNbaKoifB1HT7WPjpsP12yup8kd2G6kCrZVqoaNGd",
  "key9": "4LxQU8rmr91RqmwcJJGXwtR64YojvJqBEht1qSdg8jBBuRe3zpi66MQQ183GPbRkCwsMMHCHW6UtoqE1iCJpSmJz",
  "key10": "2FwU6aqmJbuR7UoA7d8PCHUVpmF7sc8DxCxaZVzaoGbxDuy6UNQFeVowbj8GiZKHPwqLBPukncAQFzJRDHYRwGfm",
  "key11": "2BiZfsnfKQP5jRCyVtGLHGfvn7L6j6AL9iZ5ufxyKBucapBTSrF6Q8qNdNe7TTkuZmUgmrCzy89jqDjMBPnsRT6U",
  "key12": "32cwq514CqVufn3JBr2vqJb38feN5km5sscUFdPEBeEcVJ6usiqAMdwb5XUv7QfzxUgzYmoiHU6Mr2yEbYmwVQLX",
  "key13": "342FCakquMW1BJ5mAaxHczjHonBGhFcFQgg7uckJuXRoK3mn4Zb3uyKQv2nwWmdRKAcaLZCgW8zkF7GENxxB8e3t",
  "key14": "E4mEup87qhoJXWoFggaCtmA6LnojhmocidFr39YyvY3pkjmRbRf4rKkKkqgydCxS1QLmwATeGW6RiYXmNwAEy1U",
  "key15": "5SWvToqyKu9M78fTbQpaQ5RSLspa8YSz7nhia4nCNTkiqEkYxBHoKxgbtdwhCsv5gpFGaAY72Ld6wmbZW4jyZADh",
  "key16": "5N5AusgwF637r8D58No8L6bEgiCUH8Pj4yeBEpwYLwcu7Qu592z9wuuxgabDBtAZJRaJjYnwLn1HaKipuitS8BQC",
  "key17": "4jTX96NAxqcoFU4HnjuyNrMjzTN86BrsC3yJ8s3nrserahPss6wMB3mTksC5M3KPdS387xKEBmL3MVqa6wrdtixe",
  "key18": "ewJVt3ocLbfpisnw3FH7tzoxSEENPyV4SrKZ5mxsEnrP2CpFCmiPiNr2F2fm6Q2w8CqATr3MGqDvfi1dVwGaggA",
  "key19": "4PjVXiuuQ337U71E4kR6MTytewGGuhwEyPKsVKkQdp9kRUytCaT9J2rbdx9uP2EmSVFwuBguQsfLPaYqVxtuJkrF",
  "key20": "zpDnBV1nZ6eTWdosLCATCYBxkz9STSZSfP8eQiDwFrmrb82Sks1cPGgJzqcpJKzVdnwFHbppaDKRCXjPQyWaWok",
  "key21": "5LrsfvXB1cokHcghmQeGcwgizojbQMBPzbGjFsjCcgf6BvyWzcjpVMQn9muCC5UESs7y795zkqcWkC9TLMNWNovh",
  "key22": "2uWTdY7BGofkcx6sR2AUWYxfaBQhACkorK3eQUkT8KoULfGbsDRQV7Gfa1KaGfnFezmm5sHGXF54XrW23Sa6fKzU",
  "key23": "vJmLXVBsLHfEaVDNGtBRCfhPk2Y5p1XujjVvuy6U4deCKAUDAxBSZLiTgVMBDBeu2FGBZ64L93tUmud7AxWYYYh",
  "key24": "56SLQZ7mLQ9pjzvbNFiXVBpWLdpoc3m4J2UBMWeRPzUJB7WY5cTSwnUKVC9hQn2ve3PQE8zTkTRSvnqV3ZhXPqZf",
  "key25": "51dyBccX3RdNyHJFKay3HTV21FaMNBrWFvowJCAz7ZDWtyzr8b89uzzj6wQjzUmoZHo6Baad8qUnYm6f5nrUgbJN",
  "key26": "2u54fu5UiXmb16saoFZrAD3AgW9vEAgu9H6CJk1uXn6EXctapuQ47pHehUL3JAFKfh2nJGUoHDfpQevCKmLHaQb3",
  "key27": "124jUyeAan7mJS3aSssPJx38anGPQtD8WD8o1y87GyonSqADk8sEghaRhaEpuS7azC6Lfcc3UPH8S37qxWKa9VFd",
  "key28": "2ZdBAExhy1XL29Sn9irTupifCCXvFaBFTFHrsJrmF5EtYLWMPg3EKraua2PDvp7o7s5k1wcjfqfVz4nqU7jvjdf1"
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
