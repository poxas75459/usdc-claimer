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
    "2yJzU4rT2bnBL4Ts64kaZktemJ74rYrwViEVfEzQ39DELbCfebjBqvrmCnkRpg8BVfdRUsxHhuBiBaJNpMgJ2nJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbEes4oQExS3An7DiBTr3tbw8M76S9Lwq8GvPAwRXnvkXA4YpXknNbWhha4TXjVzA1icp7EFM9ftHoFwpn5Cdgh",
  "key1": "5iV6XGaTNMX1b4VsR7oKzoUefxJD7PAe7Ndpy2kRAmutjircpgC2kXfxVAov6HyMeLFJorYgyfkSXuFJtpvxAcMK",
  "key2": "UHLyu8mh7tybMzzqTZY9QRcPrUvvHPSGKfMcHFic17fpyLZCjtPyxbbykRxiiWZKctTSXskjCQ8T1up42LSj5Zd",
  "key3": "3tW19GN6fbpbd9ZPZEBEde58jj6QcnSAEYPeyrEEY2MVJ9ci6frXcRUs3KFpf6wdknGLdCFdhCZSdUe2CPfoaqnk",
  "key4": "4LKaTAMdgZKFEDaLTJe9HQfqMYmcarbRJTh4YX7ozTMD7pysZXUgHczvHULUgcCKzTcDRihQvm8Bi1UgYu3YNsJL",
  "key5": "4ywcTxR4zB7S4RQJEjqgfujKoUogBCQvXECc1hvmhjJTvHvZ9tniQFQmX4yTMqmNwTucavdxhLzizqFuw7mTj8DL",
  "key6": "5kyEVj85ynnmKfYKhyF2irFP9pobLKHocQWEZVpNvsQ2K9JgadX9K1YtM4NJnpdU8nF86qu226cQDtUfJCYhnRj1",
  "key7": "4w9eJ4iGkN6ciaShmMgruk1VmbKbmCMN9PPoNkLggcwdNj8GY1To1AeCvSt6P5ppyU4FfdBtBEGjsr58CkPvSVy7",
  "key8": "f5tRsVuPDRN89mLJXAqPdKZrhn6QCPqRZCxFSPgWfutbmBpAsvo7pKtf8oT96JUBYiovudKrqXU9hJBMWC6NVkz",
  "key9": "1a5ciHyf3rgwpWy2ZTQvyXyaL1uHc35deBKtrNbLFnXUq2sbWL9Pq9tEThRF7Y8SVE2xuZeiSkv6UVWWrtpf7n2",
  "key10": "5Dw5MXQB6bFq58MF9ZT3nZfAQQe6zKREe7KupbqBN2Bb4G6WyCjYXxQsyFVMYmc5pkV7DQkpKjY52zKx93GuyxN8",
  "key11": "2mQHMroXDJeChE2CLkyfXzeuTHkkeWy8RwgoyxtaETJoEJUB9xtL5vbqcQs2kQsYRhTPZ7tuNbZPdbUaS58yPwbq",
  "key12": "RX5h4tEZNdPJGEjd1GXbQXWKZ8vdRkcUbwHgqWNet71MeoY1ANsWKBV2owdJTS4tYkitBVGsZcSEUZ3hd66GrKm",
  "key13": "M3idNLxKyFDfWa6Zm3wMXeLdqCSAECtTUKotYnPVDPUSQLamzUDbgpCxgg9TDGCWr6vbSn4Je6P14zB2SDQ8dgg",
  "key14": "s8jeKK8Gp5pUzFyzdvAdtGoSoreyDMzRGoozSUHUGKXpvytwyCQrk1zF57Qm7V4GU3uYArVrz37BkY7Q3o9M8U3",
  "key15": "5XmTw6APq5oLbDrv5L1bcqgv6aWRHu2iqwAig8bHWUXwAJvkGwjMW1TUDHPgHNtZQFvZ63Y5VZVbHnLFi92svdCL",
  "key16": "5h9CmSwfuaQ46ACmT5ktwZimrQUaT9wzmYwbzzkWs6syhpYqVRd226cJYsYwCZNjDZrV2BxphLh4FW1X3xBFykMK",
  "key17": "uooGaNJ8ToQobKYRRryXSiNHsL7asDsWiwsianUqK2DYSHiPwQnwmg7RN7Ug5APETSpJn3xJ3GauxsFGMWY5fU1",
  "key18": "43SbB946c12qz6iAatR7Q2A6ZP1ff5UPTA9LNV6YjX5e6z53hN6TBoCwSvNXPxJ3nUsRRtERXA3CNkUDUYioQN5z",
  "key19": "4jU7ERNsV1wBf3qbeKmZ4pdFfA1u5cxc5ZcS9xhizGcztbJWicAnmJdvB3stnjrxNZxaVM2uhx6FL8vbZxsLFs1w",
  "key20": "1xgtfZ87rz9r3V2QnM8Ydk5y7TrXYvujjaonxp3yhuYAHCf99Y5ic3tnd4v4fDaJKqgPgtQvWoJ4EFnaU9EYUZN",
  "key21": "28QiPbi7prmXQcMeMrPDBDF76YkgnzWGw6Dg5ASe7jTNxhtSTjZ1tsma9jxvqp4Zzz9pvv8P5TZuqe6k6sRnCBjn",
  "key22": "5qS7F7hY6ZwfhZDaUQRk2YSt31TdvrFgodRgedz3i4HHE8A3edMkMiB12d1U5F176vjndQZK1fgihSHBWLPHpD7t",
  "key23": "59hnaYdNP79rPA1h9WCAQocPdnRA7aP8rTtUk85BNfHHyYm7rVqbCkzx3oDP1VEyo6eKer27JCWURTNSLDjJV3xG",
  "key24": "4Y8t4BgUTfzNYdkKnEBVcwVYiGL1YWjB67SZvSCdZQK6VJfrTbHHXfcofzQGsgX9RCpjSRKLYuaQGgx6TymAVia6",
  "key25": "5AavJvz91RrXVkvnyqLqC7pzHfhXbWrtTPeHfewmKZqerYdAZjqR4qocEJpSZ6a1v5ahiwGuaoKG68n4LQfq7nNt",
  "key26": "cdjEUpVLVg1CNGEuHQr4Nd1ggQcBDtEuhgiMgopnEbNr4cWG6aVzJMK9trYPTCpgmiMQ3cfaWXywbKm5d8XBR4C",
  "key27": "R6iVUvjhuFEdjfe6UMPGSfmzWpNFZE6NixVAFtQHaHq1XAdwJHJXwK79KBqwHnZKPYLuQK87GZ55MPkriyKMthg",
  "key28": "2X4TbyLEviaZ2sdkUs5WWEmmCFm8MyYGGHRoskUj4QKWD6XZGeu9nZVYr8Hnkjc7S3g1Y9dJZrFjPt6D8MK5Lwyt",
  "key29": "4JRtgM6EgkoF9caMAxWqoE2aLsTwZccDGokXB9DPtFudWipWCL12hRzzqpssuvhd7FYPdzQkKsm27iq2Z48gFP34",
  "key30": "3JDp6M7zJigWys2FSnWMJk6pKGyQMeUin2vobSwmaUEf5a63pA26qKgyjJGWEau1TdS3qC7bBibabWA7EyYC1wj9",
  "key31": "4uwzs1GpFwLfd72yjAjJh9P4Y9RTB6REBff5qM7k6nW93ezJzv175rCrhhCgRaunu73xnGHHNVEaNhEd6wEQ2id6",
  "key32": "2ztCXEUQEJXgWnwHW46s4yg8QP4EvCe11aCLvzcJjP5Yy4pq5UNwj4dXHyxqe76D8r5KjWmc5S5DWkjidxw1BPpA",
  "key33": "sojuMo3kRseAhahpJUQQjLJrsrEe7qeBkYmAWWjtu1xuqKRXFWVe1ohTf6nWgKEHiyhGdoj33cFs9zv9QRBNL4y",
  "key34": "UAj8jkh1XaBVbqh5naKTBGLCDQAB7n6gYsBUXEByS4qrM4T1WtAvEpvZqzw8uJpiisadjTq6e9uzzFZm2mgiGJr",
  "key35": "5Z84UA529LtmFFUXnBAf6mw3iyKp9jU4r1Zh11nWQ3STxHYfFZLN8TsiwFQK2eCrPVY73KyVWbmS2NwEgE946QCq",
  "key36": "xdwJmNJqP919VvPRpn4zZVDY7tDStdyHsvyfzsYVPxtUC6TCLXRLqjT8Zp5bRZjwT3cuVMNUaQKfb6CndEEQ194",
  "key37": "4ihvwSjs2Y1PTaTJrHRFWpBqx2QBY4ipp4HKp5eWGF3LP9VvdYp6GcvQeF5RkU3kJFhhDCFyywWucDZd7AGe5Kpp",
  "key38": "mG5eZgSNKBs5n4hFoNhZgXsuEWnD9aW3rLArDMSobYgT3E62uiHeCn1KyJDxUjLQL1JMg7ViDvEUe14mhx6bwDh",
  "key39": "2eXQhdbma31J2bJSpCYKm9eF1kQsa4W9eUD7hVJjUYS5EoNEbi9xkU8vxGjCv27JqNj7H7qx1XquB8RhUaiXqaXv"
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
