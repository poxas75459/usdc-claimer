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
    "5L2pXCm6HrRm1rSAkcttCFVqF8eYJ2NhZjZSBHtv1VqrxErQfDJSRNovBhKKgRNsMLYSTvxnRQ2L4QsR8gHCjRTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kADCroSWpj74REpsgN7Fkk9LRTXJRwXVm5dWUJS86UqbotRsTCQmEJ3Zj3469haVyTTPTi8KwoEjcWXXoRPN2Cc",
  "key1": "5PYpptbXw9ZHqNHH9Aupdr68UYM354RyciJpG8MXoR87MfD8dZEfHR4fV1ZhJvxLBF5f6MLbMZukrc6Ua5ydth1q",
  "key2": "3bZbR8BEECVtkctTSTdUcDpPTwpnDtxmpPqsYiVmd21etPTDCTP6DwoirwDn4i9pxKTWznJv2am8yzr4eN5rruv1",
  "key3": "3itQsKMFgBPhoihvq8MQPkLAqfYMvH5vUFxtdmJXXnm662bc5eyjQofGr6cNioHdpfudYWxAvUp1wTKCTJ9UmKm8",
  "key4": "svNZDwQahJcrjE5QbQeoYBJQym4mqn2wNBURfDu7Re7Vjg3HYvS4PTm1rNPchf4b6PskXQuyrNhcT5b8QPJ2W2w",
  "key5": "5Qrrr5egzVuZ7rz52BZWkC5BYSiLNUphSfkry5hXmgucJjgCuGTFjyc1YToPyLsQ52UZ64Dvw8GLDdDLMNEr2Dy5",
  "key6": "2zwnMFxdvdbN6boyXf1WScP3SXbpSW1QxAKjwgnUuhDKEqvjbRMByrNvCQgcZy1YUKtHyPLx8AY4LttR6bruQYoc",
  "key7": "53TxiRYMQ6RwQfk4UgdPutD53LrGr1UwQFehrgDj4A5FCyTVuoB8UQk4z33mu4XYo7jKTRr54EH121hhnVz3Lgh",
  "key8": "4ptwWgxHUQttXNPTqo8KEAKa2hP6K3PvwhXhBZup4EGuc2RbyZXpLVmADxvrMdZF4937UByaFnP2qsPBYyHLUFM2",
  "key9": "1fnciQnFek566TnoY5qukYUV3CXBGfkRBexi3WdW6XZZTM88SLtnd3mWfTLge31PTW72VjvMyDEeeNWiaFCfnqe",
  "key10": "3HscHtU83xpmR3Z718VtUqTjppZB8njXfWZbmfWzcs4EkbaeKGd4AThNjUmWLfghEuCfXaqXFfVxNRMBuZ13bDKt",
  "key11": "66moEjL5CuBBrBSzJ8GDbKBvkThA8Cic3UgbST2YJMZozJ2aNF5imPGuhTymufyU23xWd3AVxjAwt57cvhPRU1z4",
  "key12": "3YCsDawKXAVutJ52HFQoEcL4HE44rgRjTfCLg2E1eCysXXS27baX44GfYdFWXDjoAmRq6PXYgM7zuV1B9dUdYsPu",
  "key13": "5k92vfdR9CAG6Nfu9LpnE4vK8x1w5KtcSigGg5fFAW9TGbKwVfmHmLRTV6GAspkGnkiRE6BtaE5p6i7XKfUyQk8R",
  "key14": "5ZQfS4QWJKwUfcq5Ki8V4SZWGi4UdgAGpKTeZ8aHFqKGETn4vJk64iKupaQdxiW5jStpxzaGq7SupUzafLZKhMB7",
  "key15": "e6PsgAJX7QcmG4y9Qw62vdiFaTHp5rjmW6fSxNYqdtukPn7gV5x3wEAv2WFX2dutX46UDAJZdq8ai48D4Jf9Ar1",
  "key16": "5X1zSvJL4GxCyhqkNkpDVUMuhrhZjyVhQ5QD3u8DUx78Tm8Eor92R8sFzQu3TtVSRuy1aEMkUyy54QtGRcJJVJc8",
  "key17": "6m1vxtoLzHG4newdF19pGcvfC7ngFT9BuvaGLswp4dtWWo5TxEF278HZDhUMqsT7ynyQYUNeYTekzsY8Cge5Ndt",
  "key18": "5iZxgmXrFKYLbqUY85uTW3PowmzmAobZfDby7uUsfowm4UZtd87KhZL3dZNn2kbhhtnKkURmtPysPpfmWsRccrJZ",
  "key19": "61SPVsNJax5MK6KA2fDrjzXvVF95PL4iHujszEeFKqHi6y1mFfxG4EVZ813Yfc5rYwE3zke7yXkhNPiRNEkLRkGo",
  "key20": "5L1SFKfsGz4dAnPrDu5SgtrJfUsGZDNNnjePX9B6VExAFGDRYD6BTWd4ZMjRE6f3xuTtt7uxBwN5xXiYa7oeqJmL",
  "key21": "5o3MRrEPngpN2ZLj8tXq1u2FnM3QaGgPxvCXs3QiMD7WhxDnjBh1Q2jKvDdvkdH2obgCc34AHbApgyqwDhRzmP2w",
  "key22": "5R2ZkAhSSXsWKner9y1HEw3Bx3rpERELcANYszs7nArj4FuYJ4ekoJ9HPvJ8fdcxPXvEVcWm93q4BaZe72BXSVoE",
  "key23": "5nQi1fbzL6HcmUob92LMfwVTNy9UK2wpTSU28vEiNiSaDN9cciqr98pBSiGoq75EcNrcJyXgaCxv1scQAgQrmBD6",
  "key24": "2Uo7rHGYFWKoQAgp5VeQg82NRiLySGM2FGaa9VXvBWTrDPf5SsLxBngeyC12arsZJ3fK4RbvwBW85XykfKo9Q5dM",
  "key25": "5a4CA5eafqpM4FRN2CwibU3C6G7j7JAhHMVVENWexFrAJT7aWZqiKYyGgLJXyjCfM7Kyhu64ceh2p46ia8GqMSxq",
  "key26": "4nprqw63Ahm8p5RRqAPAFBRSKohQDZ7dtE3Gz5UjyfdJLKTQtyizU4DEvoiuXABqKesYGPS5f8VD6cYrcrpPY6b9",
  "key27": "5AysVg2dhf7qaVmUohrK1viTd2cjSRsSjKqGQUbMf2TaggF45g6qK5XevAxhakarL8R1G4MtuCP8gQ85KY4mAhE3",
  "key28": "2cUwKgPaFdX3ssas8jx2YBtCegLeAzFjzbKpnCHrAHzqsfMQ4K7d13gXGunmxXXcBdG788xYq145mTxoBWNvoSHj",
  "key29": "5c32Knzcgvzyo97dJ5HzrRoTaGreFYWCcwbVxMxs1SA8DiYQ8FKvCbEs6N5GQaozWkF2hYmeAKLL2mYhR9nsv56Q",
  "key30": "5x99DadHi9fh3tFNjp2K3K9vdbEuRMJMx2jtKKpfbpvPsfHZJf6e8XkSzsF1nmqfNgFYRSyK2rUbBBKr6TXyeVXP",
  "key31": "3ezGpxEBbqTFm52EiwUYcxktB9YjxtnGTvfu6Ay769oq3UxfM1Z82NLcJBHhh8G82dCtRN9ZrK9Ai59fVyhr5qA1",
  "key32": "4xgw69JsHyNdQnKfCxJDk9KmAqWkXbMoo1KrA46DwRnsYQYB2n6bdApSL56pbujg3i8ttr1PtwZ9sbCRy7WcjCbt",
  "key33": "5BK5fhdWZCLUcYAJkBcLUhTdW1udT1Dq7saqpLkcZjUpGFnGXeCvXk4qWT6s8EavPQ4EqmH4rLjSR7hs9FthWXqy",
  "key34": "2yTd7LCAPHfabsSxWBWAic8v1sQ3XiPoj7aCttXzVaoi3LcdPmhjJw1hhKfFoNVSLNBsPhu5osVvtnWW7tcFsCAu",
  "key35": "42Vy31RFsFMKNuDbWZ8W1YjYs9iUkcse3aKir2hqE4gJXKEgkSeEue5CP6H4P1Hj8sSUM7P4wWmvRhuiZi9CcG8p",
  "key36": "2EWjp1J96pQ8nffYD7KYy8RJrArja7Kn8mR7aEUcmoWExmRD9ch8gJa84tLE78sySqwBaBYkH8bkK5GkdpWyVTxP",
  "key37": "5V5PCTzm64B2BWjB4W58ERnjSS1D45n73BBBx6e39r6GL1A8x3VaasL86m2RrSZcrzgYfnsx8feHgaNC2dLbJR9z",
  "key38": "4FQTXq6A6q6qeyvpmbp4eoir988pVqgRFhVggvML9o1Jna9L7AK8fUV6JVDknk64B6JWdRTJY5SKWSaLgYtAAG96",
  "key39": "2P9PbYZ1UXPFLuFxzeSZYt5CLdhJn762zXKBmTs2P7RxWZJAyYqpRfZk8UCCsfTozbF8gHW8VhR83j93rtJVyuPA",
  "key40": "5XaFfwa2Zuec9ayRNQ7LJ3yfB8ZW87otb6ZjMT5YsbSzbb4oYcVHnfvaPHxSsvqpKKFrBujDr52rxR2zqBmQFabp",
  "key41": "3AG1FJcVRa2Y4CYfp4QsXspkXSQJMxqxyndsbrd8c7Vko4p7cHqPEWLVStc5zQW3LD7DjWVJrxqttmyHy3rHFC7n",
  "key42": "3ZYj5FbK7TNnjNoucCawqKirQXE8YcT96FTHushQGraas8GBaKdLoWqr8PSpJmcENsBMKKegJGMHd1gQ4qZFAXh8",
  "key43": "2ALMfykYc8xSd2CPThtfij1xrcP1y2kT1UW34o7rCpr3f8bYyrRTtvQpE2HggNHDfhnbx1YyFAes7G12BWGV6tou",
  "key44": "6716PLQzSqGf1kELUvFAvVdtPQBbC465Dz6mNXqDqQo4gmED1qsZBTxXGJNBUHhGPCvbCMzn98FY5MrDNmioDN5u",
  "key45": "mbFXp5LKEPGYzWkKjKbR4q15Raw87zFQZQ2HWPcPNniKv7fUmcovbL7X8UmnxGit8agCL5ufEFLKB3u65hbEG3j",
  "key46": "RmzckCCAkeiXQgYTPSunpWqSqRWA8va1nYKf3qZaM68CE2uA7FRWBGaCkEwt26DA5XEcjDQeeH54KpMbkrEMXhb",
  "key47": "QkCTcds5JSL93971xdGNgsvWr6qYt6TcEA91pBghD3S9L4WkB8713wFatD5GbZBB6uP4McnNd8KCwCnSeDeh57h",
  "key48": "5ooaAhnhR5Rm3y92qqyMESkPF9zSgfmB933YoBNY1fBbSmTahseJQ76qQRSpLitLoHUUrMovS2zTvmj4Y4NR5CF8"
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
