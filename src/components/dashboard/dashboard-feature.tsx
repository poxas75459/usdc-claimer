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
    "4yoJpgwy4NL46yassQFeSTL3yqTYdaSLt1B9NF1c3iqP9X9G1LWNeo7tnFsNT69MR1GxUuTfYkRTknqSsMp21iXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQFHWqfwAQ72QMs1HrdbLza9UGN7QsH5CBgb3eXNRhbDUKKUdLLe93KNtE67ziKrRaHgDym4ZqeePTF7bWutJ5M",
  "key1": "GSx9iN3Ck9NrEGFuXxCKPmwu35wrGkERJnZKTqBm21UGbTSCcMABSzVB1J1LYWFxUNJybgoRnA5bWhZoJvhk3Ln",
  "key2": "3MFtsoLLCp8qi1JDyuciAP2YVkTcXZz3GEmn1takiK5EnBAQcRzqSK8DciUwmCqCsMkQLhFokWA1wQTdZWenVTRx",
  "key3": "KcyV7TpP2RJHu4hFQT5THyzk9rZDo5eDxFbUcK1MWuFjT5t59c9aFVMfMSKiLqkoBrfxWAXsJaKUhEBUk3tRpET",
  "key4": "3Hd9kK8RmA2rxD5oNV3ERe4yRNP723N7H4Axeq8kUb7qhsCnDh3xDj5wzCeXcoN18rbRAnQ4T3Q5yE5KSdKKNZfs",
  "key5": "4zyT5Aazo1RgkaWx8Ec1ypUanp3xyGCQN71gSqUiEi9PdXAg58hMM7Y2PeXCzc3ahjdenU1ULpQaCwh6xrk356R6",
  "key6": "2uZJvaPDgxbhoXVXaCgJBq5C6XEa6ZFNsCg7M1KQvj5UKUH2jSMxbtNcV8E4iAv61Y5MHpxzRMA4oBUDrEJ6vNVf",
  "key7": "3vscRKZKdyQBuVGHQpj8whS6Gcb4Xz2z1ub4qQt7HqJsqQ4SQUFJoGcGbP7QgfUskzo4ZQpPS33cxTcJCehmLrMm",
  "key8": "3gnZFCfrDCeofywwDXf4T7jSNMgahw4L7hCvHQfFJVDifE48aGYRxr5a1tP5V7dtirnK1K88CnEScr6sgfJawevF",
  "key9": "3US1BJcDQC4BztToW2x4UcUeXNMZAMp2Hrm5xAfD1qVqNKAhoefk9SYevxD9XYnEFoE55i6uME8GbL7XEC1TwXn4",
  "key10": "3Ydg8MdvZXvGG3a9KNDx7DFkUMfknDsnY5Ng1cRF52HxjGCF76tYwJbpES5GFZGH9rXYJ71SbzLVaEVc6BnStJrr",
  "key11": "q1744cYQGyTYdE8ky2BonnvmYLLzumsRQX1TzuJ3xA6aXD3Gv88sw7m3F8QxGpRS6ESvcRreoJjULuY4Zm9ZABb",
  "key12": "4yvEWgRpcjfmNSC1sNxXRXd4NbZxNh63RUvkAtP3sPw4MbtZVXz8cPTCG6Qjw6ZnzRrzhDbCPsdQtc6PAf7dcrG7",
  "key13": "6nBCndmhbDNDMKYhNs7FWD2hRKmP3BVXLQ6yoHcFWwhoznouJQCMr2VRFFo92wd7pNWN2JXftW7LwSeqVpKSwQ5",
  "key14": "5FPiDqw4YUNpx1ghgfo77auhSNM4m657fGZqp2o5985uUvZHbAimC4jRobdhNyRQ76azmLKxg248ao2vohngycdU",
  "key15": "Fm6QWBmyHTbCMeL5MFYNa3WxCHRgyA4k284i32awEWzLBsntSK5MEVQCpv9SmZwf4vNzzNAhbsNWGjN9CDSbtRH",
  "key16": "3ce6TaGpQyRHZe9qK8AGGcfgcHgCWbphdNgvvevbaN5YZSMnwPsE8n79WmagQNWLbQ1GBwFzCeukpycEuwCqSnxh",
  "key17": "2jYJ499mGgM3aFCHkagsGPK83UcTxAX6KExqdZohuNGcugBPEEi6QG581MXAGQdZ4y9n6Y42ERCx7EvhtDqz3Yso",
  "key18": "4wVu3xDY5BGf8dMFaXseNSKkLVtJksyHvRJXfQyC4Xgryq7fJdKJTYz5YJU2eMDMeydmBXdh79TThwp14PaEh6Zt",
  "key19": "2bgyTnVVvdcv9UprngUr95f5hvzu6gq5nE9sUQCyWgRHtZ5nBhCAHMJFXfacAZo5Nq4hYCVMgFcXhgaiJqscS2DE",
  "key20": "4W6k9zTTm7z2xvyrKct1YKYQxm3wV96ogSuSjwFAj8bPhTx9pWXJqVn3KcguRyvnosTgna7ad8AoaG9SGagyazpA",
  "key21": "3pXiCfYHXVyCszMGrF2zA3eCVXh3P8i6p1Rkqxs557jvqhLEAP8dJi8as8HZobNwNEYzimhuXPFwPQcz23ht6tnK",
  "key22": "5GiTbwKWGPwdBz8z8rhLr2vR81eEUnNkkpcHxSVzHANR9VH5uLV4DnxFCoz5sLLYXYtRApB9oYFQyaWq2ZtdZvDU",
  "key23": "iaYtnVsDqVM9wjLrFiaqC9JvsVnvjGt1eghLneh7QZkhZF14scAuCf6ZidR6jZT7oR8UcchJTS4B5KnehSd7S4e",
  "key24": "5wfg3N7FRq1hohtSZHhPusR4wT22HVYzQZEJcMiQYe1U5f7ifrXmfhZKDDwUTLXRbAhwrHtqsfJbkzkAxvPQghwQ",
  "key25": "5u2WFM3oVswF9AGV1FLQyHDeEYWW7dihL9jygyC3ongnPA6Fy8MTHpVg9FdgG2xA4kVrxRYHy7cea35ejchzoQDm",
  "key26": "neG8RYMCKugiNTe6G53ngE2tHrP9t1dJ6PLffZ93y1WQmB255WJqZr5YPznonotaUNBy391jYxWtps19npb5CN8",
  "key27": "4Xn8BKLzg5qheKpZQ6fYE7fVcoDwzQfQxdTjsfoK5aRDgzQ6SjkiRkgqnJtyv32J6nJia22QQvyh2jFPqznx9ieJ",
  "key28": "4GKBdA8UWAhMEjRGrQsiuQs35r7sEUCzCjDGwFX6nyzgt3oyJhXcoYTiqecS6Kc4U3tVnaonePWMfR3oA8nk3T37",
  "key29": "2W9vS9LhjMWuXtm3jnvrhkoyvqtFXGpcPjiCJQc8cLXVxmqJgwS65jtvfLFAkH9S6QjRau9i2sYH25jKZzXr7b6U"
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
