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
    "2rR2RJ1E6c1PB1H9hjfYGiqi2gh7QvJxPrdf45Gd8xTQP9BR2F8VBBhegam5eT6tdGsd5w8tmbeaEsgrtMxEpstg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491KmBSCGgaiJnLUhrDrcYYPtchjVYNkxgcnVKzvjqkzYp13bDxJkhUFvpYpoz28eqqBkzxqAGGyMVDfHNMcrZAJ",
  "key1": "4hfUBerhctgCLFhmj9QcE1HqC1ceJGEPQh37BhQA6DXhi7h7o7tZ2oMXH7BRRvxBqimypp5bm1m8KkVwtnP5FSNm",
  "key2": "3TtLa18LhRJDj4Q7kPgKsGBxfSo5QjbqCcWqM1PQwn2oTqq5rVyxJCU42PG3mqreDaLunrJiw8pGySqBwCuAvyt5",
  "key3": "4x2TY4uf9j3mHHjX3nH7fn2XkWjHqqeAc6e4BbyfhbLgagJiUv4uJ9CpJejLkFLnptwCTHWDHz4vy3pHjoHMoUZ8",
  "key4": "3pJfNEPABdRzF8sfJxzAfrJPXKxvJuZ3nyVxTW3Q7hFiUnApu25VnyYfu4qg4cr1ZdbHNJh1EQ31cweksevErZii",
  "key5": "5WDm7Reph6wXgNw1QD7ncyNnJqrDUg7eDyWZtRjcqGHKLoDGGG5HLYqxU7SjE9HZB7THd8AuFbXZd7AuFo8AK92q",
  "key6": "2K7k9bmLjCjCJbRJeee24sAHKkujwvafa2Xzm44U6fvbsA6odWbTGPfw4M9CxnSomGUdLzTBrTuQNJ6kRWsEryrJ",
  "key7": "3dqDWPc2F3j5HdVvYaiKTY1XNYAM8dSogKc4ekBdREoEbU8RVzt83MWCFMjQijqUTYDyi9aUfZdGpFmjBn54QFzB",
  "key8": "2KZpHU1doPoM1bqYgpCBkZKegRPMC4xxCPKffHuav1xfUnr82rUaEqfRpeZJwQGLbH66qaRWZUDwECpR3eG7HRSy",
  "key9": "25qS9a3P6u5x63noe4haeN5AXhTz7eJSppbwJprBCV82uHdpL7oK35fZsDx3FFSLpRbEwvGraC1mYm4qo5Mh5LmR",
  "key10": "3EiChikcGVE95T7Pcx4xaPkL6nsjELP98Ubenk541DsqMAz16DQ2uXc4uEgQBnp41A1wptWWHRUrY4bkCHomuYBb",
  "key11": "4Czw3ikJ9UfXSLoAtZmauWZL2Etvs2Z7H3uHZGQUhbGYhK1tCew743Xt8rtRfdoztZobAqVB5tTALpYYfHF1wNMz",
  "key12": "5ymXSuvoJp6BDt5V2m5i5FrNj7CwRYBU4GipeAzjZ4qtpzX9LH6TJ1Uu4SN7UEEH2WrcVqPaVmg4s1zFD8YqYDJB",
  "key13": "56FrmcvBdqYMDHt4bD93bagTx1BRsvYuRZqNQtmvb41UKFBPp7V66tRr34UJbUfnAkB3ThLpfQZ7ZL9Bs6odP7KD",
  "key14": "47BiBRvGD22WDoM18PPqc8RvBHKgRVKLnJXu7HH9NpwyZ3JHZTjZZpoeWdTUWR9M7zmP3rt9n8VbHzxVyuCLfBUK",
  "key15": "FQF9puwpUDp68EN9D4MPQvAoomWADrq2RqpzmzQWvd9i39q8S9n5kXyRWSm7RpMFfrDHuuDCm7t1iyMSLY4PxPg",
  "key16": "2L1B8yKvrubhJZwH8kdig5znyPEoQux2faX3SWLAu2BmS5XdFZkaSXQnN3wTACS1GadoaRRdkFrsQHfoj4PbyXfr",
  "key17": "5KzWbjbeE724RjHjek7ncWLB8X2kLVYvHEyHFMfreK4o7RwPCcdrd76C7mvYu4U1N6V8zQ327P3SLwmpdDJWEguA",
  "key18": "mF2JB3qf8d4oKDbRsfZQjqj9Yt1N8fmuuy6mYm8GNeNMAWKxggVfX8s6xTs5dAxga84unXGrA846bYa7TvH9MW9",
  "key19": "3nJYRme1tit961a5okkBiq3Xf79XbXB48Dj6bpwRJt1LYJWMAExmTPrmGJ2uGuEs7zJWe87xaP6v9Rpqso8Z31QM",
  "key20": "4Qcoy6v6ScvuqskdKvJLGModLbkoKg6cv97cWGaqfiYbbcoEri8xZvQyEjFmeghL3Y2H1Kt1WTMqpvhirrN1gVNY",
  "key21": "3U9VeEBPcwLYS32uQkcA7Qiwr34QTFWa2eAVAnMjVQ7N5jukUh772sUYsyQFU7L9s3d8iLvDS5EASww1yuo2JimF",
  "key22": "4HadyAFpJp52vAaMfi8vu496EZFh9PHdqUBsoerfs3TWitaWkPWFbqu5SHPCu3Rhj6Z2RPVjEjc6FHiLpfzDejDG",
  "key23": "4f9fk5Wkag9weYsJuMPLAgEVY7KZN8647JWWDgdSqC9fqi6EvWqT4kRi9q7fSxKrsiHzzmCH8Jtm3AUEQUkhFkUA",
  "key24": "3FeaQdUvnwGYddfp5S5TaGLLVChCLxS3Uz9KwjXtvRQsNeM2XA7d8Ns6NrjWZEjLid73LqRVGFxegfuTqUxvY5ym",
  "key25": "2EYLpL4AWGr3ZBSZiVbX3S83ZmAp5KeVouVoDqAWMFnjNiWTvTTKenvt2kcVTupQpkdLj8akfRHF5Utp9hXWvtaD",
  "key26": "3wZGyDZwXyi6jWiyfUXLk814K1P4B2D1vPhypxQLQQd78S3Qj5v4LpMWKFvPkC3HFsFvPW3Qr5Qhv67d4AdKxXp5",
  "key27": "5tB6BawToe2Yid33TJEGYTDxWGKtjcC4uZVxoYoc4jtWRDGoEgoHv5Z55Kj1D5CAUF4mbrEZCg4wNWitmpFqQTc6",
  "key28": "38JJ5pqgkJmdxJtY1kVU7o2RZjMgG4yLCciqD5Nqke68MshZMTTZMYWCUwNeQbWzJMqMZH3NDxoWAhZJnNEXXuQz",
  "key29": "52QTUq44gosr1qFUNZwtvL29BM9Ak78VTjHSQxngJ4cCmY5Q8xVt1h5vnhUcmvWcgPdAi81jDhxsUrbNqMNdnJNC",
  "key30": "h7xkbNG4R1WbwWowuSiqW8NkdTrsgDn7VV7A5cdvYLZ9EJxdkp416uWtKsrARvgwUMLjVS2FYQJ86sYjHzCckzL",
  "key31": "5p9NXmvjXKZ4beV7e9QZfxzjmPYtAU7Qr8qp1MF2sGFXuD5iQefrTcxHwXV5AKqxovpEstQkqbYCUGdU1ZacdCFV",
  "key32": "5QrPkaATRp8W4vMKUYJcuPGjj3AV7YyS7VfmsmEqkRs8zhiDx7b9gEzgdeenVoiiX7FsboALfoAJ1kjJHi74Paco",
  "key33": "2PdxkhwVdpkooLEESutv6n7yThLwdwZtPDS9Yu2vYZFRTeoENpS9MemCTz9qQ4X1E42nWBCguUgiBvVEoR6CPy5F",
  "key34": "2HgWGVFtmyMHi81cvr5NKMhh3bPgxE2nwz1ZSf43Hg8x8mMRurKgZF7qBHxswh5Xn2R1YAajKCveZBVizVXWtW7R",
  "key35": "5o51VWqYcbhLN4gouUyDiTbB8AFjRwAioN8ShPspAoPq3noFfbrGPRecm7JKVwxqLz5f2q83BhG5p37V5WcHW6Gz",
  "key36": "szzJwTvyzVcm8EqFVijTk6cRFXbQc5zPTu3ekDJVGtVMwCFPohJyGNR5TbvNASVqJaAvdk2nbYKy12owhX8KAA2",
  "key37": "3hwXZQY18R6tY6ypgEF1ocrn3Mofuan2bFCtfWnsbKMhZGqa3yYHYrjaDELPw97ehJuAAYjKGe3AAiZGESU25nwc",
  "key38": "5eNM2VxUeUugj8jZ3zwkkTBhpbNBKwsbfTq8YjcLqnvpFGF3JJRji4pB3jcNb8GFtn8bS9s1jfTP6ZSw7keJuo8D",
  "key39": "58j6bZqrUA66YHkgCo8ayhceZnXGFoLi7FxcSvurhgXY4Z16NHDomdustDti1oz91NvbqGo3KX9xtgiVYea9tXbx",
  "key40": "5RCKABPpuQ85DnM5qK5DJHqbxh1GZsV7pNnvX9ndXqLXpZmGBSLCwierGEJwrDergHYVxTr6BTf4cCFgRbb6D7ZA",
  "key41": "5G6czMHYJgqbbTctZBYpxSr7RUtcximHC9hiidZgR7ji7sRg22MWrfpxud8cVjYnjtEygSLGLMALvUJoobCbbup8",
  "key42": "5ddDsdV6SwTUwPWC4Fc6wTxWV7SWE8xhFt73irLJxPJ6dhAyuNhQSMxsoS5z6Y6Z44Fbwu1nX5DF7ZyHkEk3wBeF",
  "key43": "3Mg5g3GvqjyZYFNomZ925M2dYkBxeczLRVygxPEG4w9jC92zSybJ8ZHgdgZZARekL7QZzti6a2a9wpBUnM4nLohw",
  "key44": "2qPbwn59ss8L9LvgE7V2Tht7amUSYvfuueJML6tnJZjY4BrAw242DCE1fYZ631Dm3V1N3ZNeV3skXroUW5QLJKCt",
  "key45": "xWEFuqG8rnj6g5q5DeeGLGNDLA2ktmANhMu7N1NM3679AYT6wEZA1ZV1JzhtSP5d9UVtskLokVSk9bbTtrtWN2V",
  "key46": "3gH5KM8sLEmkpMhfm4pkhbpHmsYUpdNLCivgAEh6eYDgHZVx9nUwGZHCedrz1mUCcvW8oPCJ5s1HgJDBS6V4jrRJ",
  "key47": "4vh51Q2F7wxJTKRR5mg8w8JjTbBifBs4ydWjjZJDH9sHxkwhkDMEJ7nUoHiHpwufn8KLqzKkeQHRbpM4y2ScDhjZ"
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
