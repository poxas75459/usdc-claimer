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
    "2j5EHq5td8zENnsn3tXmhfWt4mTKj1DbKiy82vM1aMSPEm9vChLxT6uXRJN6NdrzdkAqdkR641VRzYrjHAQ6mjjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEA1vU4RGS9uBSSrq8ex8ZKWhPkCcz1ASoWmSf4pynLWamb1M5z4oBVrNotbKq7P4ecerdbXmx3RApM424V54nV",
  "key1": "Czhg7SgcjQ3AvCcTgpcnFcDCte4se6CtXHuJbjNmBMEoZFoSStyJvoFRDGCET51d8rAU6ze9o6zQfTXLjRknZkz",
  "key2": "2aji4XGn7yXs7ETff9pXsfUo43uYvJZ6aBUmxZ7Tgqu2HMbpk4d6CfwKDzFC1B7PASd9yycKawhQJL73tNCpauyZ",
  "key3": "2bWjsDCzqJkiNFKYvzYazUgz59pxoDTzQiCNDP2Zm4kuUxKgDWbTDGqGm9JuCjMrvPYiU3xyiMRTX7WkSfr9fFVb",
  "key4": "5KqY713SCYjueD5CH4EHeGWsgqz5sPjmjNwHjAGukndXEUmMwBrjqeA5yhPG7Qz1tr29cmcRZt96zNdP6srkiB3A",
  "key5": "2T4gNGt1y6zD6pdLnrtVNzFus5DrwrdVoTKkXGQ4JXYXgxafbU17kTWtGUioQJG2iFKBFbS7pksmB3iM3vbzWE2W",
  "key6": "sTUQNHJwQTPZgksZ2hbvN2VQAUWYx5xxQWzF8DeYryPFAs8RVmQJSJfrMGmP811sUTeNCHS4ymwPcAubaygo3Vj",
  "key7": "RGoGyYQXHtK1KAEc9m6uVKefT3QoaQCTDuM7ictAzvQk9vsobUiNSaNvjvNdEtEJnm4rZz1ezYkXLvkiZ5uCSRL",
  "key8": "3JPCaXvP4ttv6fRkKpmDQJ7SWEafaitGf4dRssJiBjKLJSbta7RcDi513dhzLga2wdthwU1ykCHcg48jM6c17xGG",
  "key9": "XduU4jmiLcckkeGFyvUhjiLeCUs2TPcETmkzSNt6oMJZSpFxhCFWv2LhBTqoYFpfzSbiL7uD7PsYBr9H1sDMjUa",
  "key10": "4H9SRU4UCd2DbNw8CmADMAwRnWyhzKLTk9MtWmykz6kFnNMALRVxsN4L8xzB9DVPiDeREx15neXiX4pYcwTVeFzz",
  "key11": "4aGUdc4iad8PDk2xZrgk9gkTwkXu3zLHGPjE2N55P6och9fwnCaV8cBvV5fZK537BvzzyjpfREDZQytcdGm7F1RP",
  "key12": "4WjfrugZfDQszdiVqtWmnCSbMSDePf68sAU8vCDK4pQwmeZ1h18G6WaUyQ8vTCBKVWvMw6KkeJGBMBhPfMVvgLxA",
  "key13": "3LiJ9mvu2AHR8aHmHjZmV9PrJYZmtrLfayijJHKBLMJWzj1zU7nosuySMPw5stABEisSp5J34tfmeLVqaoExzxKW",
  "key14": "5RLqJac9tnn9e3n6K2wR47W8fYcTijTLud9YCoz5kcsM16tL88X9knkYiHGP8ZeRHpgUsuCLHy3auzxZ8m4J4PEG",
  "key15": "3wCntB1tiTkbeDXpTq7dLyKW35J5dLaNz5fHnsVK5sRZ2tosyrbArNHsoUe7MjwSNFjymPRtoJ8zhh1maRK3CG3w",
  "key16": "28EjhSJ8DRAjLm285mCYtXtwzjuBNRpxBDHAQuP3kmaWoWoubQK6mCAzvKB9nVcZEzsfN9Z7UPWeRmyZjLBh9Yr1",
  "key17": "324anbj1ZGuGLJXH8H6PswxCcpAV7U3WxVAKwT37o8HzpxftmE9dSQobeM3UUReEYXAhRKvg4DFb3TGDWiFR85N1",
  "key18": "2jkuE5DgvvBzipcdnChVwYRf87JwGpAG7pLm2D5PLwUpFG9kFjgrrukZQuoxhrpt5wLEkLg2UdnB78M9j1byDLhq",
  "key19": "39BZMV6cT9r3dhJs6tUr8GzFoWsFF1NHKPyRt7FTByp1y2ggKYkHu4eQ5g7oRJ1GMJFPKMPSSxgJtYTQyjUvFGx4",
  "key20": "26GPgwuLZTaQoBeEGrtDzr73HCnv6dyF5NzfTMGSde7DHAu526kxHyZhjCHkdb6BdAN2AoPPzxXqx6xiKdBiy7FJ",
  "key21": "35PnnwGofwhw4GHF74M6igQuQi9H9W51iRq1GjtiWcXPRiMLvQ4GjnQL5QvRNv8Haioe9gN3MzqpviSo7qEMe3Sy",
  "key22": "5X9JJsc6MqNSKEQkw8iQUzHEQ6ZBYLKki7v1xNN25mGUWLCWpqZcvCHv62rV3xxxa3NXxCsdmf84m7TpZ8PG6DWV",
  "key23": "FcVYyQdbjPMg3CmZBfCesiktTgyNQnooMNPWEErs2YFNaP1EauW4huWiHhz28SxCRTFYKSxHGWBY5q5YZsoM8T7",
  "key24": "4Vqbfswuvu9TNSdUGJnGMNVqTJ8Ctdi6mtveGhfh63SV6PLMVbAyok9ksLxbCPciofqTATGFyLWj9n3nwdBePyYk",
  "key25": "21RuSSuGbaqqP6TF2XaDKDixEBVayaKiXidc6aDQtvmJ1wizTC7FKAQNkFqFT9VdaVALUTDfrknNF7kbz4raJmUy",
  "key26": "5rG6qnKa7J5DZmpBQxmSKZ8PF4rhmBTxfSTDJ8KQue7wnGFsJ8rYfGF5FLyQt9vAqUrnfKTYxZFiSh8jGoig4VyT",
  "key27": "zuByRNfWSxKMV45puhvhSXqnZ7bcd7AdgHE5HqoBp1RfKajvbhqV6SCCJRuJz9eFRmVZJhuAhZteNQoGVhq7HjD",
  "key28": "3feUXguaWA28r2mpbAAsdLmcD6AhkeEUDuVpKi4vLU5tAJGWh4SQSXZpe5FFVCpVy82YnnU1pAn6ir68bTtWvsoc",
  "key29": "oXMW7bMzTyDoH3Jey1jg6EKAxz992qrwpsC8E7vWbWkPpXyFjRg69doiYoErx5Mz5bSwxtaWZwQxhFDcp2C2Vc3",
  "key30": "SBiiGfNW8FuXVgkE6LBsc2KAJfJjhbRJNDYfJ7yZdn5oeDVYUV4SC2276Af2efVAWvqf5rd2pAEtAQrUV9hthMr",
  "key31": "4NKDRBrHZtqrmKBhgD8Uu8FhJJSE6jvDutubisNak9KuqhB6trKA6vQAG1nEWXW45HeXyMGnGTpcJ6uc4pZ2w1vn"
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
