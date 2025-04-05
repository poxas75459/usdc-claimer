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
    "EaBQNFn8RtsxonCYJJr8bdi9ZsDBHwHi29Y9hQrZQTxAarUZsGHfhZ7bK47Z1nyNGahiWGiUhsLUNy4eoknNKmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ve7QVGxVH495ASmNefgNTpcNbaYLNCvtcfStHx2m9DmHL7HGRiRuMEU2MYfmokcpRBpzM8Mh4vtytJKKT4HFoUz",
  "key1": "3FuQTNDD2bUHACysT3iZcfvYeGkGnKFbNdExXHSNc6ModfXZ18sPTLhgyNjkrzwyQNPUSVRdP4QibvEqhsfsFk5R",
  "key2": "45Y9aEsu4CmPxG93fMsAN1jF729qb3m94vS9nZJMS8hQNYzvYzQ1K6a4VqAN3jBzFUqYctCgYP17PKMCi3TNxtUp",
  "key3": "2WhshtRpL2gmhoUCs7EmSjv52KUt36gv7zPCnFWkb8oVyZoDE4jMVogoqsvf38c4fg2X2xG4zGHKz8vogLXY7mAb",
  "key4": "5YeoFngSyFCaTDVnFaV3o1mMna9qgLD9bbpv5uzoZACLiP2tzfg16TqzybqeVnnEYZVtk9t5eoFoZotFrssNPUyB",
  "key5": "4gCPErKp71wv7SWcwTknC7KLqoarT1twWQRB81Sxa82M5PGTK3KUvuuSZZrvxywyZvToSUFybiSuVx8ZynQQDuaM",
  "key6": "5NvSbZvmR5hDM13wjQWrLbRBkfY3FYpGkttjHcyT5HyGqdAWuAuEdYuEmBfS2Mk7VdFfLmncMctEHYBgiNSKCFUU",
  "key7": "vWJjGG659bbuzdbEAvzRVCkUJeTLfEUGczcrgatfGRcQZN3pXNyF24PDX2p8jqVzAgGHKXkDrNFQwjsbmfFLnR5",
  "key8": "3qqYjHFWLgXV4KzMKhz6W4YJ9sQYDFNs6bT7ZJ4ioHtAJzutmxNfjYtCe7HdTLgDgMKvznFC1d8tfuNdGVbTh4ee",
  "key9": "cNYtQCW4SqkxHfVfUATZD8QWYXgiwmGms3JoWMF9PT8cow3zXvygEQzo6GSoLzFqCXsZevageGkteaxqmqba2BU",
  "key10": "43ZcZqMXsYuGtCS495xRygP16QwaYiM5XQrLTyWs9cbEeyeHvsQWnHGLA1XLSQjcess41tWZGPXZRaYwkfvRYAmt",
  "key11": "5YyjaK6mUp6fW6VFqBrQXJ9CcVwrqA26i5aYjUjNBjUZqkNre7W5h956cW4Y7BS3azMmPMBJqvB11i2K1H86qPTz",
  "key12": "4dg1wQC8AZpQY1WWNjNx5qWrRQRtCheCeTaWf19eAKDA9gHbm5J22ar9Vo1XxDvyywYX8UkeWP4eXpx54xUr1unR",
  "key13": "5emH2PVfiE4Y4JPSwqRRX8EUoU8mh8zZGhxyaRVBibyBYr3rqvkcYbtHKF5nZCDrcuMjjd3wd7zFcR4JoCuaLhuU",
  "key14": "3tCRePTJds6w4p4Yk99F5aSgXUK2PwtJwuF9ni2eJoKNZo4YWJSHCfqL9U7Qoxfej7pJd6NY8pwKJGwR5PM5EKia",
  "key15": "5Bcp4qN3gofP2kR9AaV3PXoKwxaEDW4tBnVp9pg3yXhmY4Qaqe3N5pQ3PBkmsYWLXvWgEMJZWZnd82kLd7Cs6vBu",
  "key16": "Pyd37MttMp7CZZCGEvfGfKF5DJJCKJJinqotZWvHjUVgZctHvF3MQCmfQoEvjjvvmJHoy26Thhhw3sCCNdhzi3g",
  "key17": "2aot3qRxRFweVHcSMbEPeJcG15VAAWL9shPrDw9CkLEQjn1iGvAKchWC7W1pPSfvTEVo7RCXjXThAUdPxYjFVmLY",
  "key18": "4qWuPNTRTarZQcdc3hNXjYu7xnJYypYsgbbskAbcJJ15fHnFSFmB4w7yc1EsetQ7b8LQXiE9Bie92y84uG81Tvks",
  "key19": "3bJbXQFAGAETUTu5VPq72iJVrTExxXisDiCpjrTZdgaCitpHPnUUWXZ6UBoc7dtrd1rcVHvsDB3bt4qKjoEtmewG",
  "key20": "2i7F91ovRio78eZEEYqCyiH7qddkYXPArDioyKj3eDmYoTk74nPSGnbMiDUE6GTAujEVFnhVkNNUFsgfawNxmrKt",
  "key21": "2z32nfkG3wUv3NXeXx1aKej6g6viWJrVR3x1AtULSYn3GBpPzqYXbWYZ6PfjYJNg62FHtkuoHKZm4GuFkUK155TP",
  "key22": "3ZFZ4WgDfoATnMogDnNzwyeeG9sabphqhLUAcTVcXDV28SQe3CLwhos7cw6jX8yrhjfsei1n6msMs8mFFy3ACxJT",
  "key23": "SsVQrabqMpSaQ1EaJZDmD5fdqVLvra4MzxoL93U2zx4UssepCDA2U7C5wv13WBNTD1L8Z7S27vdRBW3mVeHkKBS",
  "key24": "3AJFgcERyqM2NiUUSXP8QvTz1Ex8T1r8c7ioVo6se59xPcHHVL99Sh9hJ1NVMUdMA33K2mQMFU9R7eTFjaoiTaJB",
  "key25": "4VB5Cj8uCX9w5HzZABkTLsDCzd7ob5vXeUF3xN14onmAovA13rXYVrcrwBUj3i98FdoKoWFMSruSwqC1U6HqhTzN",
  "key26": "wKoRkH8x7DEb61fLM2ztAmwSvLSfkBcDM27Ksu5KQ1KQZyHcDKe99dqFHrnRkMryGfkUsRNwMf5SryohMSbkgMe",
  "key27": "4qCadsVjqZwqHomqYkifk3uspjJFuYPxWLmi34aRYVs22J74di2jdTszaE84SnFPWEx8USFpi91rmxAwXt23wA2x",
  "key28": "2cyqSHhSF7kXYNKULW4JdNGLyDdQki98NYwnvAwD4inexTu8ZUS1zqSPWYtRFuKj6R9GpF9d8uHovABb7T3SzqRT",
  "key29": "TAPfcvAeMJ3KZBGaws2L2wAG3LjYQrUxQfbYtBXBYuoKgMLaCbaSWM64ATMnG6tfd83QzvAKKz8YoBeTGXSQ328",
  "key30": "2BwAVJCaMxMh9EVw74Ntj3GCczHsvikWssuoJVTXcuM8Qq2K8Gh36drYDBE6TM4jF7j4FWzC7Tp21Pp82MzYXXJW",
  "key31": "y2W39afwebpN1d4XFoqN6z4sStnVoJ7VBL8FddfUB1E1zkExiGXpt99sRmZq1n1nv9pRWzqGd2nn9mV4W1A6G3C",
  "key32": "3mE2qjq68gk3dsbv4PmnRjYozxa7m5VaqV87818ruSvQh8STK9uKRdvYTp7t7F3eayd9WGNKUCgKZe3MreNh55wk",
  "key33": "3ERR99q6n993tp2ryAP4Cic2UxoyTvnswQurmw1uTqq7gDMR5Ax1Yq4pFM7b47RHVC5LZroHJL36SzhNCns7osVK",
  "key34": "YnnJdWz1HcASNioo5Xu1CtUG3LkCjXDt4bGJjNtL56wienYcwx6TXLUQkCphVCgLg3hnnUmCAxGfKi8nSsm8pLc",
  "key35": "2BukQAwLuGb9zEpjKJk5Vabfu3EbNnw9TvPorDViJRAy4K2USxQeUrZAj5FQ7aadBKua3LXweEC3H9MgbJaAVGRu",
  "key36": "4A4Ppo8X1SKqMs9hk2yEsmapVkyw97geVXVghksXm6qGZpkLw4aUaMW1Zk1dACTDp2FrjwQKwYLEAzUb74UjysEK",
  "key37": "5BaaLQeF8uYYeokZ7cvYAhAWHRZvEB3DQXKCsNH4kWtbEZB9FwHLg8XwC7zxMjcb94qyjhaFUaeA7KS7bwtNxR3R",
  "key38": "5MwVD13DNpVsicBNNJe2yThyWRdyykvhaqxCXUFiMosBTGaW9g95cA1WZwBjLdSpRiaWEcNwggSBCpdnEXo2gfQR",
  "key39": "5Ep8S4Gc7ZQdvyJau7T8fBtxwERnFNrpNxNcEc77cj2csokNR6FYWKAMSZ8Sj1ZbUAo9AH4nXRAvNRsQbZiYkP5U",
  "key40": "1nnudPsZZ4AkmGBjQwUuzsTfEk9kuiHVDeWTSX2SP4eorc2VHdj9cVnsDqknDJJnS3PE1qi1yy1yQWUXGYfsF7r",
  "key41": "2hku83pAGKFqKDBGZFmu9qwd5dy7kzLLryeDdY5gEjyHH8dSgTuH4JikUHz5GrddoTb1uvWjDvMm5iuhh5wK5o1q",
  "key42": "8Qg8uhVvbTZHXWg4rNmZy8Y3vkxBAy5uFRuEsdXdDvVY4MyWCWriCKx8KhkMKYkPhS76oN51cqBfjivLFsaBpuH",
  "key43": "2fDFnKLCgwiVq47vEkRtr2aUi9RkbxVG7NvY5UTtpSvR5DZg9EYb6tNtC4Z7v8ccWBEZLLkqWgxYJ3Cz3rh3VUmM",
  "key44": "guxiBPuHMweKTFLZwpSogbUvrJYRHGt3QFd1JEJqMZNevZ9KgrJRxXxCVGVgVeFE212ZqRsTf5ry7DRGVDNJrU6",
  "key45": "5KTRRL42e8GRmRsVBVSKqp7bsLSzHjc5VUYMUKYNH1tEbTHMKweyjptnZN7wcfty3qxBcf8Lj46mV2VWqfA1P1JD",
  "key46": "5QwgDpyBqLYbhviyEuzu2nA9ddXWnHff1bChKnFwP4tmWiG7Rx3mUjEn1BmXgggVTbWcbFmrJH5fJnjzsrEvWkiN",
  "key47": "5bHTQAYbQ8Fo5U1gzpE9jPYan5qqs9tFcC1ayEbq4Sk3zn5a4okVoKQJN8SRGu7V8qYuuPF4rKY3oKRYVi1KvZ4S",
  "key48": "jti25Fv38RKqJgwijYebeBoFfyuegYwZ3LPdSdDoK37D5jhjbN4845NERon3PbLYYap4mUgvs1vHLb4Uj8CAGQt",
  "key49": "4kBbwTUKjNirEm6wZs6Md9V4M5MdbRswNQ5QmQVp3TAQrLf4d5VuNCUN66tW7Voih8KnQRtSjzPVkCokL7EPK1F3"
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
