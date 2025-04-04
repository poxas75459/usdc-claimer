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
    "2skTyy2BtmHvm7ZH9QuSQ5j3WUPJgHABV7yyxtxvVmqiKn9hreihjb1ayjmsa6zk6x4j8pxXxjCWgtSzgMUpfhcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApeFnbxKuicXrWqkvVKCGr7toDisWBnKtFQCt9GfyhMHGW5tgtwy31fnWhPYHozsy5tJMnizYmh7jxkAZPa8o9t",
  "key1": "494aGes1m263gxDjJ7zKjPpq4ka8gd3AiY6oskCiXDSR8SX3DXE3ghZsizMnDEiz35JavxyZnC8uaxCo8dDhqpJB",
  "key2": "2C9mrkppDkUxg3N3jBo1Lczoc1MAAtNgF4SCzvBuLGUbnTx5hh2ZA8cc6NXcg4tQGwuL3eWrAboorKrZiiAvrkM6",
  "key3": "uzUAp6Js9NsMKgf1PHfeQK5Vo4KkA2Wshvt8hVgY1zh8xhiBo2qFs5JdHL7FUEXLGgT7XsSjvyCHvL3pLs1PKR3",
  "key4": "2Mv3qYHLgW7rWAY6QCAsKcPCHVxmZ6sDtVmgTvT2Fc5YLG4z8Zaw4RbAmz6PdBScTHJt5mbE6M31471bCYvpNgpt",
  "key5": "2KiAwopZ4cSS7Ks3ESa1Vn1UHsNM4DcZo5wbRq5EfJMyp8E7JQbgEvpr9KxfALzyy2BNDF74FLXr7hyWjfpwjiwM",
  "key6": "o8QuVLjEDcG5J7uezXx8ZLMP8Bt54gibJ7JXarugZTCob7Pm51LCPs5LhGLzTbfcAmjVFfUAS2ddR2vswxRj3X8",
  "key7": "WfVg8cnUaxRnvzE8m3sRiyVusCZs7ccibs8xD6RQtrHQq6qUCDty5Yd7wk8eG6Q3rxHvCYUVCrMbYgrBRtpKXwb",
  "key8": "5hCkoojybPa8qT3UjNYg2qj77Eewi5QEh8G6UTbew4iYTAEA6VoJMwUcTeWHQCSJL1q5wgtFVqfMBJZLShCw12kq",
  "key9": "2bjq8WbSAWLhaRBWryE7Ex5tce1Zg9mig8A1FBwYeGcZtQzMa4tpGPEbrZwjAtFqikUjiPTWrmEwuRiTeScqsi5t",
  "key10": "iWJ7YgBEWhk12JuoYU7noQ4sJdueNJPBdYiK973kK1AhnERnCwATu1p1gBYdw6m9pfy9UyrCg8xAmbCLM9f4Na2",
  "key11": "3kQ9TFyZwb8EJgM3b26MjybUmovsB5YuRKRJr9nkYrjPkthLgRqHhsZ6eHZzBMhFxkRqbFT9iC9WxLyEXCiySyAE",
  "key12": "SSw4ewcxnuoHQRDe7rYBnCuKkwfDZ15m5ug3bUhEFFvMQExeu7dGH2y7vWDr8t4NcThUXFpHpa28ZSj9MMjkL9Q",
  "key13": "2GTUBtq2tpkyc5yMfcHX4hYv4hqqKVN7h1wBW7CfLpEyd34MRJW5SLRjNw6tACzk53Tk1eCRAUqjMapsGYkgoe8e",
  "key14": "3AW1rE9uY35KHh2WdnnRL5muzpKDwS4eW4knxTZexVs1bAKZsg4iDjz6A6fLNkorw7iodX48MJ3ocebdFJyKu5Su",
  "key15": "tBvmvzAhY6vXZ8NaPfF2XCkCQJkFjofVGLushqyQfLWqmQgqJNrzuCDGTkupSJSMPwg7kEuNaELFG2mdjkTSieD",
  "key16": "4Mz6F2Xb3jhQK2WZKGZF4YRHM9xV4RB3s34ie3bNWwLGT31QK7HjxaMqWtUEr9sJKvQ11Lyj6kgqACy2451nnBaY",
  "key17": "941tkpXL3nqayUdcRXLxxcMdSJyLq5sNX4ZccQVvg1Dq7VBPdfs9XVE3CYBD2f3kwi2d2yiye4M71Ftuw8EaXyW",
  "key18": "5QrWZTah8AqY8DmwhrNRLtFJWK26n5CrDvoqAZXMMoRgTRTYE2y7Nv6eGyNzrXLF58ocucSeWLoHYZGpawSZUEeH",
  "key19": "62aYGkoUuExrsn3ztm8V7HoFSgZTmxia7G7naKHYkAuKNTrnoq9umdxi9aqk7oosHJRdKqUMSJ7NgPzJJEVBbEkE",
  "key20": "5wg3MFyJ5vxMLEAJb4Ryw7kVsSNLVu6gw7t5nqyH3PWAttmAT325HKhJVaqA6Ny9ZypQMLbxrGmscjW8b7wfB6eR",
  "key21": "4TgVmBjbVzJEkDtAQaeTVPhEjU7MJv7mh1NLi5rALaCmvxrvmoXxHU5mzBCDfZRRDBYtUYX888d3Br2mGmAb9bQH",
  "key22": "44HvdfEK6giXsMPhZvAKv2gp4yjuLUAnekY69LDssR4EX8XoDQyEBMawCntTUcDUYhqEsCCk9HZ8W9ujNVcDbfiz",
  "key23": "4ybH37PQYHRkRHTsdCbJ4FA8XRp9CzYEPVJiAtefE64VaFhQh9dNb8nARB7qXbWasEwrfBHzBu5opFZR49bFVa1x",
  "key24": "2quZV96dYjLZKx2yugbGpae5ybZKfrsQJspcGb5953SnFRfWPUv4eA39CeuzoCvspa6Bp1ZuWKDaAvAaDp3Vd6zR",
  "key25": "4Rus9KXZYq3ewHxtAs3LkYAXAqsR1vcfJKFuB6nyiToteVtiwqAochQ8mxqGoa8v8iboAGbj5X8y4tQWRD7zS7uU",
  "key26": "9kFGzA2cQGJpRKqnBm6m19DRJsd4RUAvEWoSuRihQbMKa54iisWkYjpj9NxPSdMm65dQP8smN5hVP2gTWFn7iku",
  "key27": "3nDRHNyRYyUyHYVc433eypKCY2Di1ji8msLNkAVbuWr1Mp7xABQ5BhNNTjBFduqs1AZ45T8VB8S7P21FrjwEaXjK",
  "key28": "46oqvoTKmLMWRpHGa7FZBPQEaDG89fhCG6BHZx72Pg4QytcMHTiP2eXj6mSqu9xvkpxewHhknDytMccquzgpQrKJ",
  "key29": "4dGuXgA7MXYQYHrGHe47HbnaA8SjK8f66gXFSt6vXFy9nz9vUqrhxc5iG9ta8NhVEDBXyuxHc1cz3dkcgUH5BUJE",
  "key30": "8x651dmuNqNTMMeyXAYVzaceLfbXHhW6HfSzC9UgprWEHVGB7vx9dWgEZ162rQaX3osmkF13oqrGoZfgUoSqP5G",
  "key31": "3iy87VxJcCWHEgR85iEMQA1NyrC96rzEeQ4HCUPjTLH1nApsnd8Kq5akPUkTXgRwLPoF1MgFCyVWmcYH2tKFHaGB",
  "key32": "2vUdknDTfQfoohYYbZUsWZxbzSpgJ1A8gLKuxXbWy3P45h4DyUg4zDrgKifv3pMtSYxSxCzqyS3n6EUWSBr1UVm2",
  "key33": "2XtyzEXmMiE7mRBaaoWrtx5MN6VCXY5PZKLQHFBmAekysuUgesrSxsEY3Hd5h1yXb46VM635LmpX7LNqUPtzjydt",
  "key34": "4TsLFNRMPSHotPKTZQvGzaCNuBmfJdsRD5bMHgFQFYyLYXbZd73BU6gAodS6vFrfkKpSygoaMPd4Fxxj9U9Cb7Ri",
  "key35": "GoSytrjaFMv5DNz7FVzTwsQdpqV7n3uCXDvrRjNSiG9jz1MUbTt1bRMugsWeUtF9X6LMQBfSkEuZ4J3MW7No3wC",
  "key36": "5ooLvoryzkcHZ5nYgKnQuxn15ijJaKN9yNP8tcwegyBeautvjfqvS374UbSn9DE1qA5V9Vbisf3JFoNSeRUDkX6P",
  "key37": "5kvCdF3y5Fpsvh8iDnNffkSFDw3GpnJtVjLSEopTUfMT8tZme5QALaBNwBSzqqQpgaesu7GceHfNvnYSdCK6Epa6"
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
