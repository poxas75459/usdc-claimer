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
    "4yGsox8ojCgB5Sdjyv9r3YZMsBjW9mTu7ummZdnJ7wndqDvhoZz5SH2bDqFBCV4otXSvtKwK9jDQSTzpQDamysZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234WvuNj4UVtn9Y3JBeA9FDUdY5xRkdhkeJ4re4pjFmT6P5dMXBv1LSijDH8djUw1bLBzH8Y4i5CGDcyGKEHhHjp",
  "key1": "GckzVUsfVNJEXQo68ddTnLSGiQgjfPDgcXoJnvyf97UUaPUWTbM4umPDy5DyZNzikvZHXQNwGV5j6rQvo7Mp6fC",
  "key2": "vVgHQd1tEX3htEvgfvwm6tiN3mCrdi8vphHWyxE95NP19CaYe6XvoeKaBPdeNzvLMgABWuC9feZw6ac2B34ai8T",
  "key3": "5BBEPEHXgqYXq9Jwcb4a4rmeeERUH8K44R3GFjGNbmn8upWRghnc6t33qXyW6UVPeVgYX5Y7RdB6LNU3WoMcsXjR",
  "key4": "2cV3K1w1x8MH4fEkQEmo2mDcE9E9kFnb9ZwWoiaKifX59wH18z6wijM1BLgH2FTSA98oW7kfuqvog8vcPqAVBtTa",
  "key5": "ZqPnFDkabPNwLktBESkJ7Jckv47J1H46UCVJepeJCRXhvRCwHkU2iuybsCRUmGM4ZoRcBgh9B7fv3XhTcf1n6hk",
  "key6": "24UCT5gWJoq87oLjskJezT9KAE7QMXuqRcqM8uBEEmBGGVwPiPeA923ERcm2nrAExBJrn8SsMB5Kspq8bKa9Detx",
  "key7": "2E5sQ44w9UCcwz8z1W8RBQuxyuev2DCcYwxSec5tzGPJPtk2FgqFK2UR1H4j2WjCu9MpSnEykUHdsotSEnz3PHzs",
  "key8": "43jPtenLi1UbjLXzRnX4zeQjHb5KQCocCtxxwJ89FJYEWdbpbzhTGZuraQjzMVLzmQJE8unSZUgHGY3T5C5E8wWx",
  "key9": "3TMRQK2zochYPHWrGY7xwoVJVVVR3Bruf7MBTgJLh3xdXKj5Xgp5Gp6uyzcmqrgtjaxLXg79h3DieZ62NhS8TpgT",
  "key10": "hTq4N7j9D4F3d3UDSvEEqVLrbDiXpD4cB4jJFi7qJpfHhMdfcr7qFbam6H6bSRUHKapsAnXQJcGjuycYiA3t8Hf",
  "key11": "51HJNEYaMWb52QywMDV1ziMLGhxdxvPttesma5LfULHYQXfK6rgZdBbXgqBP2KyS2SqJZtwURRkHn5rp7pcPgzek",
  "key12": "3vNipVvV4hxiQi211bp3LrJCsicu9c9U9cjVit9b9FBtUTzU2TKjMEGscmfuuARtVALMc8nPJoFWKbziUCNJG1Z9",
  "key13": "5J7zku18EfuQBB3KhnfVQ8qXpyWqV7B1WHvpezWhCkdKzRkrktq4p5HBBtWeB7czqt8FPUCqFBEaeEj4Atxex1u8",
  "key14": "4MbGPv4fg1qBRcxWdwetJenrdmRv1bxSMaN8MK15d7UieQ7G5dZ5X4znuNz8uXdEhY8Hd5ZPqhY2BafgBA2Ke1MY",
  "key15": "5jEXbFJGxpKANdW7c22CGrSqX6yk4d2v4CEbS8sgd2kSe99Yqg8PR7RSomJgfRZJMsTGada8w9GagQmYeVPqJdi7",
  "key16": "5mshLCjfQHVW3A5YQfUYTfxQy1W7a2M8Gi5DimP9THgLNvFezw5kTugtsDD7MSDxLSmcak1Lsom1ejg4z9g9GTQB",
  "key17": "dUE6VyS4Z7bJq6dS2LwkShqNQFWF5VwFjASBparWJSqDoT5huAcQVBcDPACb9XG2jxrYjyRLcJoATpTxj7p1vqB",
  "key18": "2NrzThrpk6RKu6xVv3nwqAHnJqutGDLXur3K5uqb265Fh6NNSUk35iVtjHtJ1DLstrwG4bfq6huFs8zDHeFG8HFZ",
  "key19": "gpCyzfbYXL6q8WwN9f1bMMdiNYx16kxstM6Lcm7rPQmhLE8Ja7rtS1dfTZBYX9XGUo7gayon3ne4KdKggMJiT7c",
  "key20": "5tCHqDMTYBywGHfSiwWNZTYLys9MEAqk4jut9q68aUhgSrYaL1TMAkuGqM7LDDhHionRC8XoJoRdLymu5vWqgJGs",
  "key21": "2bnVUUkGPGLg5N6fQZzne7Kz1p875E8sVcRMEpxWKnHkXoZtxpbD9ub2g77CenUgLQ9UR8Bx6gMNe8XjwagdLggu",
  "key22": "4auVyY1sc8GGSdmJzyYUsVfqASZvWu8PDk3jmQ5bwB6ZfQ2QcsPL1ay1DRpDL58WKQrHqt59xEVbNT1NmcoBsm35",
  "key23": "3XunQCJfxwfHGd9mFiaJjpHB3oEXimYduFiUxciRgyAT3C4kR3P7x7MuDsBjfPvoAMt3SwPUZZib6EqPWX3CJvLS",
  "key24": "4TvuEi2NbSCTam8pBrkPMpzRj3UXVpNpJaYS17WhDqsG33irLBbRDHmCrXKGvmn8Snz9SAF8ZutXxtCYgt4b49MV",
  "key25": "36UTp58xcMKAgbn2b6SioqTWio7cfvBrCq5jqBjrNbuEssuYWYZsoaYScfy4JB66oaefZZX8HW9aGKjFxtSxV5SF",
  "key26": "xHDvARNBnkwR7x2U5Z98zbydtAVpSo1GNrNwZLhEeVkAGG8yHez6bpCoB4BKyBfaabyQ5SJ1XDrfUXxmF1einYg",
  "key27": "41mYJVDN1K6d9awrV7Zp3LqCv9ox8yaVgTbAhiQroj2X2PahRmRfvW7wqpP3sjXMQm3nnx1HCUKWPYP943bQgNAb",
  "key28": "527SYSj9TRCt3HRs2g1S92BQ5cdWh6AiRsbzTKLUfpFsBLCNxSFidXmtkaEkWxYkad6vQd8G1bekrfdrNuiP4yQ4",
  "key29": "2rD5CpYBzJJqjb51FpQtjcv2G9PjCvtdpF3gejbrXgvg4gDvdcu3MAweScLQ5tdpcb1FX6bzLSdTeNS9QmaceHdM",
  "key30": "4HgwA4zrAdcrKHfBhHnwNVsQTfvSQorvZbdmLMowoxnxXwGSbJXvdBj7JssG1uxFSguP17LAovfrqbvYi1KhNiHK",
  "key31": "3END89SQzcsSYCzK5hMKwu8ekBhrJ1mHWZ3ARfKA68DAJfDqXCN4tEtQjuVweQ1BL4UHUYp7HEdiuuT7ad26HBNs",
  "key32": "2XejvqPb9jstUZUfWgzAHihMvkF8Gec8qBj7y9K72LjfvRTj6DRVHN31aQDPyqUz8NX2FLSwrkUyXpCwbUT3KNbV",
  "key33": "DNCBUcvA28kqmfoM747zvctSue1bGrm7CvDWy3ZfwJbxfwX7DeuEHv5zbgEAdbZaFvSNhaecDjhqnWwPKBD9oKN",
  "key34": "51soBnbwQKU155TMJevHJ2qAKSust9VtCCA5XXjwdjmH38SxyEznaUSLCAZPNGvymAWeXixuyR28whvmoxvLf4md"
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
