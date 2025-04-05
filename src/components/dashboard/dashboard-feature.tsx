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
    "24mYY9PAD1FsgtgeSLSnWxYiCd6txPbF6n14RK7vNjSZZxJsQd33KyQFMK2w6GLEy3XnjojHZk3ti2Pkr1rVZktv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnmb2VqrVX2qBznkYGk1ZZsLuuqSkMsfjuwtcbjshMWVzirz1UkKjvJhRZZujkJonukEwArLSVEfSaCGCCj8ypj",
  "key1": "22sjufvfhzzWhXf3mcZE9NRGN43XcYVjCFRRNhtP8Lubg5WamSUTXLkevL185ZDzx59XTTCuU9MdbhobSu2v8HoA",
  "key2": "3yM1QkPQ9xzF4aSE87WioUPYBMroJqFMXneZUyeYBXtJsGeVhuFea9CvxgBFoZMXYewCKDhAq5gCoAvshW2VbkP8",
  "key3": "mRD8TCmqNWhycoK4aasyQbRQMEH39WkbVBLXjdFcD13EEpkDv85jrBYKCoUq6mpkyg2zEMmRJdhTHejr1cmwkXU",
  "key4": "5McSkAqfKMHfof4h1yP2YFHQZ55cZYRbBaNtRy3sSYXETY3Fcf4UZEjcez8x2KpYH1DypfxkS24iYrnwVUmTvD5g",
  "key5": "2PMZp2BB4n8mPSYLJ4qzDNkaa2fdGiN65pecqNaNZyCyNCunqWRaaLJETRX6R4yPHzN86aJyD1Laquopaa71hC2F",
  "key6": "5C5EGNp13MqCeJWkAjB39p4ds7zhCK76DgHqvvsh6QttGvgKJLQs5XBawH5XF5pGGnKDuLBjXXEXxmvWNP4BAF86",
  "key7": "2Et9SH49o3FvBP35UiaSUj4S9ySobh5uHt4ENoyorRdjhtq9RjVPSZRk8BQkfBd9HfvArH32oeQ5NnunhipJtsd",
  "key8": "4Mur4CiPjR1uqMc1tB23vyREECX2sUbRhMTfpaoqFGxXw93QUaM8bvorV6G6zTXAN6RNhayrjcB9AHxfHtBjTjQp",
  "key9": "5Nhh2TzkA2e4rmzJ3pDX9ts9b4vQxjpd6VsECaUBrfRLo1q1rnDJT1XU8HnzqUtfT6Y2xm3ipyn4EaU3fYCfanSy",
  "key10": "yUpgxBXa6sJ5kVmQ7EnTpnjUEE6Z5fYEzoB3E3u3AWDm9DNGiirtUD25SZGXk6K2CZoSe87J9NU5JsA6K6m1dDk",
  "key11": "2FHy2zYnSqW6bo13k7KN9iqSzpHU12qyutwUy7Y6USZqJHdX6Jq1fggbxsnCRmELwjV1rBMUTVDLhdNnXidcUtu1",
  "key12": "63dHtkyZn85JKNCEgpwjMneJJHYYjLXxVnT6bQoxWYaQjDdgSdmCp1Z9fsAbtsVZgQKq1wJFXfBMsA7HBqNe5kK7",
  "key13": "57ouTBZckmrBJfYgYrZ5MwJ4T3h3V1QKTCCnEFzrav9rQx7jh5udhAFDBGwQCwXdBeu4aAEXSTh2pxnNFx4tZpqG",
  "key14": "58Vn1ZToQmRpyNvCU84uMgQjq18WRU4QYNZhzRRtozvtJypoH4F3B5W4gQBGDQidiSyqrsfKd2JqXnPbCzxpgU7Z",
  "key15": "56Nckrz4Rr8ZP3PoVZUSLg9EQdTy3Dmf7gWNso9eQ3yHZTdhdN3qQxhXMf9zqeq9wcskngSD9kRgazd3tSwbBMiA",
  "key16": "4Tdrucd4ezmyBvpNFAmzudppPsSNUoTN1goXPJUy2SkEBoKeF4ygfT9FQHhaXLS4J8Jy7FLmRc59Rwo9LSo1Zb6w",
  "key17": "5FFbfUQqJwxmJ2bbUcEu2TnYNzgna8eRZEwXhDZps5pXv2jNESEZitu8FHx9venA9EHJptHLFXhUpABrjEyci4Br",
  "key18": "2JXKqUxvxxZ7SXGK26YF1zsT85dERjzquiLbkTxYYrWAPpqdw8rbojxnsaForWNNbCnAWWpG8bU8ddGwbBa4bgwG",
  "key19": "H4bbg1dYVFuVdwQGYtDuRKsZxHkqGNTmSiA1PsCX5Yiorexiyqcvq4j5XGMFWFFYRsVMgdcAmCDyYAA5B3EJ9wJ",
  "key20": "4anJ2xPExMvE3iZENG4548RRVDzwM15aYNn8FNk9164kHVHm4ZDomHjSxBSFzFeQrLNcJNccQkF7j6GwpS57UCsJ",
  "key21": "3mvw8TobKmnrzWLfHvHHvUb61bRUuGtHWCu6ytnCGuhfd2ed5rZxx26PmxzwVyEUjJrou31cTgFaTJx726Y6wjrA",
  "key22": "x6a7rKFWq6fEWz8kxj6Lub34ruHFjnYEDnYRgyqF5bxzAjsZHqezLeoZ75mrNT433AhJhxuJdJshnsxhko8Mpk5",
  "key23": "13x6XjLbu2AmBAuGwc9hufJfjh5ybeNVovht81urEjEGezhexyDjzTB5CbPLQsf4tEF9ngjU2FYQgFPkFwiRfL8",
  "key24": "5bJ77DJAJTbfT9BoPSTjBPusbHCUVT6fcBhttiHTrestJPiEVbRvSaUiGhGH7SNfW2XZycc3vSZpCVUkwgiKADoW",
  "key25": "oxA8F2e4NfC73T54apngzJ9e4QSzL7kNR59aCD1FW3YwTf53ji3CywAmE5MwqkA5eutoNDQtYv39agCwp8rkype",
  "key26": "4CBxj9xBsVGz3Y3PjJATsTP6dSQ4KvihFEmDYQKzoXSMBiiXzqAidZuh5icPUbuY8L37DKGxov9wYMfuUpgmaQNu",
  "key27": "3Phb7BX85Bw6wHgNegWw3PWczjaTiFyg5C8iAJXeTygc4BhHyfRXoFMvHfSHUQe51BDD7GzZ39JVVrZcQsWpWq1r",
  "key28": "5S71bokeqQr81rk259iDdbM5LQH4pKUVjrCxAsigVzKTksHrU4nwXwf2sfZxJ7cwCtDEoQgd6PFH1uSbK2XumnhY",
  "key29": "4ubNCv3pxWjNx9yRpDdGUtTGPsDK3JfnnWBzYUen3k9wofcwAtRLH5f1mLVWrhxYC1mnAM9DatVciGEMptvhmCQm",
  "key30": "pkBENtawNdqLRRbPKLAGmxejPZPPuvu3JDmL62ZYP3WFoK1TsrEEQK9D96wifvGe83VoEygJ5ienStdLPpZBhos",
  "key31": "6decviSk6uTuUSnjxTMmYc51AjuwsWN4YjGkA1XYCfSVyn1drYgzRRgkzfXamUVVkaaE8zJihGtR4T4ZH1CSLn5",
  "key32": "3C5X26MuerGwb6XDKVY5L8Y9jk2pSqBHarMwpVNLGdEajC7Fxo7wCPvK4FyQ18Um5mrHBgMhfD2QyPqxQ99F9Cc8"
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
