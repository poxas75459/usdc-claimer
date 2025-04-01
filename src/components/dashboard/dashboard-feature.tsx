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
    "3CpworvNcw2eshuabkyvCiCSMEghP8cghaWHMPZybrP2J7F3jSJMJPDQWpJgYxEiYqL4hcBmJXaCys7GGLbLXCCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FkkgsetemnUBZbazVfptcXK4eGzSmqCHjZpzPfYPAN2rsFKgNmfbTRkpGNgCYTa5iHBhjPdr4Z6GvEE6evjWcC",
  "key1": "3UXMwRbg5KM3UCaQgnx7NQj59PaSAcPchB6ZPCkRFK55cpxnxW8k5ceRuo9xQqyrsEhmkSAYE8Y7Qhza6AzzPAHY",
  "key2": "3AVWVQvQEq8Bu8pMxTntLuPqhdAmcinRC6UhrNCttwAuiwRpoZSguDCn1YVZ5EsvjFT7QcRxRq4nNm3rcmtHkgiM",
  "key3": "3J65yE8UvjzSpW674rLbTdNBuSEbTgXjc5cvxhDh57UdAqFXkvqq38Npzr7SqeoTDBiJcv5BRFsH3UwFuQaHpqQC",
  "key4": "2yk9a9KT8yedtzJvNmrodN1cQNZuRmax5vitQg9cmSnjTyzsnJymQNgybDzKUhmgxTi7LFAcRxWjJK5c22TQTqXZ",
  "key5": "4cXDJMRf5Yzafc4mtuUqD4Rng34zBqz5bH1eyXjxx639C7UAgksU6bbc3hhFVfMJjCMqMhKLx4AuXw23McPszEe7",
  "key6": "28isuQngHWSzwUzsrdcFmd9tze9HAMZ7XnYeQVU1yPtCFT5hWQd6YR9KAkCbvZxgZTNNb1UVcqdo2M5KmByJCjWd",
  "key7": "3KpMk7GJQZKSutrLkbpN8gF5Jj3zBzZVddbEsQWBMJBSYvPvRw2zn9aPAo22GE9nNMBCxNnyV9wpcSptyQt7BK9D",
  "key8": "5JUN7EPGAdWwm895nRmn2L4F2tzuSw9PorSwoLAEyhS96hiHNGmf6qGMJZfz28aLnBrxz2MdmrPwrWYivghn3hw3",
  "key9": "dLJ1WPUwkyveKXj333Tmgy7rAcfDS5fJwSMMNEt7Y8FxFPyhuGyL9G3b6Ezd4W1LA18AjgcazhRpqCTNZXpSuTC",
  "key10": "5mw96ZFdf2bVA5ziZ15vvpPWzrh9AKN9FrSFRUQDzmjmNu53Nh5DN9QUZ3oQ5zWBXNU3yrjx2qkAxiWvkM2UgNjc",
  "key11": "AJTU4ZJaGujiCr2DAtLrCarST4shvERSgtxHviuxyeQGMYsaLzt8QW4f9jG4tZwPqVYaUgEyTnmuuHMGMg8YcCi",
  "key12": "3ViKCiDfN8PtTSc55debm91daLRVFjeEtaJgyB5Wbzybz8dZHDrsWPFPUcySxazcDrWnEicn5f1h5XayRKw6dWcS",
  "key13": "33n4zRxz6Uoohv7DotGbP2JcChxRgGVyFFs4dqLZo4147XNTzQST2N7FarDQ2vUQS3YcG2Z8u4nfQCna9Vuitw6h",
  "key14": "55f6Hf2ueySrXJScJ9Jivn2qkYk8r52X3T7yCHawUQdrjRCzhqQLmrvpT4YcHuLGcwiAJPubaqnMnTCrzPkAiMEW",
  "key15": "2YWFijSzNza84sBUBX8NfGGBi2bb7jxfgp7K6knQYX9LLWbuaJh1bLJ3vgs6sQatPgj4EeomJzZoaXw96z4HHR12",
  "key16": "p3HKqM178UDdPVaPmxeariYXXex4yzc8K1s5xszQ7Wo2YG1Qe7aZHkPY5bY1Gd1GCcvNHCmSfs4wAAKEaAk5HYT",
  "key17": "1GP6td1yRVa42emx6MXXXQt7jZjzeigwupk2ET8Ro5VYoKbfPznQ44gCAqHoqVxnjr2SSvKTVV9BK4Y1rajjDqF",
  "key18": "2HcSBaZSu6MBBhxQww8HEpT3oZAgxBqQUCpjG4k1nLpaouAf5nALYJBSwgRQRKxAtuMhZtSWMa3koKQGkM4Bk7Yu",
  "key19": "2MT4uK5ERc3KXVm6hrcx7tpkLobPK1ixDPkkeMhP1gpf2tFQtTcDKx7PopMuxtjX5uxKuq7JxpGeS21tZwRBCzyz",
  "key20": "T1mDjSqNh2zgEJwmVXWY5bbMk4nQDNLiQuLCFA5hi1ZKKQH61DVgqTTm7DqtJXWRcj88WPZSFzp9XrJsL4DwDNx",
  "key21": "2cabtcd3m43A8ZxxYDWNMGY2HkLx1KXdx9pfHw5CzdPvwkLzTu2TNL2krywRv2CLRND6u5KWuXhKtV5XD5xMUPc6",
  "key22": "2zMxKVtd5agj9zRpLu2uhtxAbLP4ifcQnQsCbFUn1V1xzRd4TJeR3TtX4b4v9e53gtvmyhoJLipGZmPtELWxeP87",
  "key23": "4YGoJcmAfoQD2mjMi1hpN7HNqPgeNcAhp2GA3A2hAxexZPEdKf6LqeFnNVgUDcH3StrdgpYupSB1eTMgLss7U86z",
  "key24": "5Dknq28LCHJ9HKUpze4aeE9RDpj9AdNqCavKtEAbTZeqpmPQBNmMJXDz1x1rZ6o5YaA8mw9pQGi51JkzWACSzAL3",
  "key25": "2LuW5vxPYzAF3bHNxkRoSqn9MFEM1eayzUMyDkqmaVHrZJJJevMch24rFVf8YVf2gUMXmVXmCkzPagaaaPMEcvYG",
  "key26": "mvC5BqRyYzzpiMPoUUBcTEnJaKS3WCinmJGTgeg2H8P4gf7zqfqFWfWzjSYXxfsPDnYXjnu9pQn4Vnv9HCoj9AE",
  "key27": "3SP1Azouv8EMXsiFYmY4m6g7wR5Aqhg3DNAKmXbUrA71pV3rdLLk5TuwnQPKzSRT9hWoKa7CTjp1S3E2sZnxU7N1",
  "key28": "4ToDTxit4vcyjTFMR6JwGaMZGdXSaTNcHZSJFAZ8qoABg415fYQ4rCppW2ErE1DvDbeKfMXskVo94QskzCERuxmV",
  "key29": "XGYJY38ExYFnVhVmNJFxM3FuBC9SC3JtdaJdEfT8Vr8o5YaqTKcdw2m5tXdpjLY6hKdKoxWs1Bzz6RmZyNf6Gue",
  "key30": "2u6cktXicNqk56ceYnyogEQGj1YZ7Q9i7DHp3wSfSdkqzRrTY7sR12Ca6vBocq2zfVW4Vzee1C9fAs3GU4gwQcWa",
  "key31": "2kuJAEMkBz55uWm1e8mxJw74UhgY8o5wDRa1N3HxhPNagg5yeFAneg6wrZhcZKJUGB8r5DucaWhCwWBuhQiHyKYf",
  "key32": "5nuG693u6d93nrcjaAnsfqjF8ErbgcHrLULoVzS3RjqM3UvEpWdYMw5MEJgC4CjEy1ApkEthSXeN4zgLBMNzGLCX",
  "key33": "5NuutgWY3F9nxbtHPAyvQFpMLnuWyaU49xuPrK16P2kwt7UT5vJzrRW4PNczwqARv3QyAZzxKRUaP7G4zgNt4neV",
  "key34": "4yRCX1JfRLuJu7S39RHPMkxvChoeCsnkddQVKAjro7WU81DtGyX7GeLVKPCWKYuHXN5fg5HKHYR39yTFgB8cK69f",
  "key35": "3KaogHgdp4Dau6jeSV3C8gHkuV4e6ij1FNUGgJkeoE2WbjtLx4Sp8wrWYSyXmuM9ycy7dpQJTsZm5LwX8j1icAmQ",
  "key36": "5N5CDD169PWmhiorMKT5nitkbrdWxGEVCU6wM1hmTX8XC3M14Q4GZdA5MppdycXn6MsCyBAHiCpnPJNe4Q7AyT1d",
  "key37": "4Trsut1FQMruwqYKKc2reWiDg2Yxt8wFD8Ve5SjNEJjtKfETFjqx4hye7v5iG7PJjBKwRNQqeEUMTVqUm8vWuNGg",
  "key38": "g34RvitkUjUCtsgN2KVa1ZexQcTEHSZci7xr8HiaQL3ZHXBFXLd9d7Ud3XoyNUmTjfwXgKmsWcUAyGxWivs3ALH"
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
