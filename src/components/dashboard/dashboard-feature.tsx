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
    "5zoecFgzn2Up6gs9nKdCP3Ev9Pvct9HChnEkuuAxbUjhEYQcXmHmNBYQwFHv48sT5WA95A4n9cMAHfC9u3WdMufU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RL7PJavCGXvRvwYESDK7Vpqt7AQyBTrAPJwT2cLRvi8sLoN7JZRKpQbY6cmah7RVZ2hXmod3U3dQ17F7gHkdU2c",
  "key1": "95kfGLAiBugZhXXuR4724VNxDCjUD5Tq5B3z9YvuW9Fes2yKAh2VDCRoU5H7qFegW5nW2eaWGAwvT1v7MiQYJDg",
  "key2": "3AjyALui4LnGdxDmQJgAp9RXkFkXmrUbjKv12uCmeoDZ2uTZ2TZq5owEZV87d7oWVRbePtkCTPFze9QpjBU9rWdJ",
  "key3": "tpnR7y4wSxenCSoDCjA6unT5VsUwagG4Xfg2ocrX5TKYGbRTxCCMBbbdXzz7NbnrgWNdkvwd6gKyM3wQFuwxQ9m",
  "key4": "DRWThWUBnq9aEfkpqLRSxdhxpWVx1tuZMQ8Xzy7pguyoYNYuoQV7DTR8YKqENFz9pXCVtBkmX3SiUxPvv1pKXey",
  "key5": "2C9vcFuy5stwtmhy5XdaGcHvLg95GTompmcFQoAQs1qapgTgcxkz2RKdyYwELwxqpJyzkWeXknCj5Vp3tNrn5JWE",
  "key6": "2YjJBXYdJQZ3jBF9d71734Wwg2cDrTBs1GU7E723yLaqjPUDnzBURVH8Y9vQ89qSSW7DchojXe2Zocy6P5EdefX6",
  "key7": "3TyXAtzt2mzKeYEam95Wta5CifvDbUSExKaGy1tKEtHukr7SN2KtUDc2YpZqdBivwptrogAv3ywLA6Jj78pecKpV",
  "key8": "3RiPftvr2XAewkfwRp6sdinA8gaAtV5Rqka3jcTcwKkuxsEAvdi7UoaqMpdtruBHUL3tAAH3HGe7vhwUMc7qfTW7",
  "key9": "4MgCYxKLqi3NgymXPDSXbDUJN43LeusLSnDjniwQFFLxyomcBqwTezQpbHwvCJcvja4FDkhqFZ1h15bYH6u8ZR14",
  "key10": "4vti6cdqkxQ53SGH4qCRtnw6eio2Y6aP7YAy42Goy2wQ3SVL8iNudhZXwZivnBz2HDMCrNvmfzwcgqxAHBiBgTkJ",
  "key11": "6VCPGdwgpU2Rdq13hxDYmng2C19CtxtdZA2zQSLeb5CkYBzk91RYLs7cnBQXhc4Cowp3EtziMQGaajsMZmp5tD5",
  "key12": "4ZtgMYyoFzTRkY9uKHV9xXxXmGDbMvZ4MYbA6tYqCrZAFZjyrUYMxQR23yYkgtfA9MF71E9u2KV2BEXKjaxmZJdt",
  "key13": "E9qh3msvRu1QsEEGSVmupsB5x32tyXPz46nrATosKz5n7DHSs2ikeRFbLnAnTrUfPtZdEeBaXTyDadWthYWHRzt",
  "key14": "5PrNWuNNTFqf8cg3PVWNcC73chGv16NGLVsysKAVtiMNNMkessPPZHHasYQZEj2xh3oCvGXduLByHpbkSzEVoPzz",
  "key15": "5e32d5W1NRPMTG9qgPstG3rTRQDmsGBLdZkt5TJLjS3wL92f5ZsBUpqMmbXhN1YGHuNku9JAtLVGpKGHHzYctw94",
  "key16": "5o2WzhXMXMWNG6mGvBo7FURoEb2UZGrbFDAkCN8s8a9CKqMETYMMGYnMVJhhSZHshrEmZbWTeHnVNxTAATJbecGy",
  "key17": "2PR4n9ZZynLJBBH5txkuSYRmXSqLxHw4Q1b6un9LYto7EWPy7w3xAwr5CLMRQN6FUMqUuSnsUwiH8uYh91ycjpPt",
  "key18": "4EpSC2eKnE8KccNeNk921jyAL7auLdFpMKGwqSKPh3sV2LXQFEdMNbdcyYYELKN423EY8hYSk3AqDqBUsEg45LYr",
  "key19": "3kcDERG6V3i7Rxos3NR442HYSoMUanAdeMTfdgFNPm58aYi3mxQKgnFahLx78tKJDCAvuxVRzsEQLBTmTxV8BfXC",
  "key20": "5LjC2M5TqYe7vMBFMzFCBPcS8j4XeaCbvaGyNCCZExnH8cmkFxn8Khqu4fN62NWajHoTZgUfRjoi3G8gQ6EJh8xf",
  "key21": "5QLPi9U1oqXDXGzwx3DsJN291AQffD5M2fbSS2HcyKDcSBfDcrGYqRuzzewSRDFvVvUNUCTrcpJx789fp7zXB6gV",
  "key22": "4L4pgFkRQk87NYG8kG5xKbsFePm6pjqQETykBBDigNBhTQ8UpnvR9qEArbHAbB6AR3v6nhUuc9J6cAQH3ehR6qT9",
  "key23": "4hdhgPQXqBcMFmsqywpuSzxzVg8ia3rW3hdswfNeAZ12aPkt8exs3kUZkGG9JqpCqs4bLBAorZ3whBtjLw8kFDVP",
  "key24": "4DH1rZfjRP2XGvK8oR7tuTaRPuLdDEBPivoaGxsLjzRSuiw9pSL12gpfVz12rR79tKgaShzvbb5NGAHWx9MNMdkL",
  "key25": "BmGd2rnxtd7kbo2EomHQNVffQnKLFq6MVj8KjoW3t9GWnno2xbvJDcvPe2LH85CMWqCFWu8ZAdJAX3kfbWgyxBz",
  "key26": "41DbWV6o3Jm9eWdb5t8t3z68ocJofE8Zg6jqB8eaG7sKQr59SADU4wVqiLbAo7krKBFPe9jN1nYoVWX1KmjGd8dC",
  "key27": "4GEL1JRvAnqRiQXN5rC14hU2ZL81UttcKwPnc8HuGzjZspcSGyVYe6ax1zCvM9N5t65anUPnZUj1xPeoJELCW5Ya"
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
