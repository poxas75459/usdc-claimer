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
    "2EC1gJnE5yhiSVTVQ47cgrdnEHo7a4fvHnw5NpDSRBGoxySg31htBzfvutzZfRuvAymjp1EYMqUPyXNuJDLFNvkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpX78oShMdXwgn7aP5pQEnq9f26iZFskUZaL4Fd8g4Lmuyw6QRQWLZYZjJ1DdUyV9d6XuQqk3SFFvca9puFu2ZY",
  "key1": "TQn2i7b58HxnBBHxSRS7RNv5P3bGbVdYFB5WbZMakiwRsmi6AYmjyKNPGyLxP5G6MKc6nskH6r2Lt6NAh5zWBr9",
  "key2": "4v8i7cUZZnqWpEXeCidWi4ZXQvXAz38CnWgczNRxiudfSZdk81BzSqGC4y3coT6jhJAgUvjv26vFJjgijoja6m4u",
  "key3": "zPoWe1MYSDzMooBfwpPArETwKJzgwXA3RmhGwJfpkdVJphLyRADgoZPnQb1bHYB6PH4EZYfGfPShhj4YA4Ggzey",
  "key4": "38NWe759ZVuKmxFiZxnDuo3iTnBEX4c4zDXhzVH8BAthRyqAy5CQGSnFQP6qLwFpXexthL29q2gUoxRZtCEeZGdr",
  "key5": "4eAeWkEtQgrECiGQ36sBceyav9qWPAMispa9Uw1gSi5pQTAj14G5s5qRETJSodcNWuPY7TGL3MuwcCh8rqKQmSkF",
  "key6": "MMkLzVaWeXWAQXtMukgr9RmfFvPbQ4W9YnVMT73gwVH5firmcSe3QuRZdS2JxVjxfzBb3hvJfxq9NPtdFmkC3cf",
  "key7": "463uqkBEBBsmHoaz2LBg6FqAURXoqLdt1NnYJC8dbnWUDpWJ5qRXaiwbmKmTxDSwWvQfHeB6rana2hWt2LkDmNB4",
  "key8": "5g21ju3R5yrYoQx8CPxa2kMyr12AFx86NPCBreid7xpXz6Mi6JmRmS4F42X5TLrxusN2yfp8aMpXmiyRrwtgbnG4",
  "key9": "3Bvis6tDKrq9yoNj2VakEYfmxXscaxrdNDK8cpneLymRZCbxnPJe7gYT2dVK1eguwyUbrR3k7MxoNo26dDyiMRH",
  "key10": "3jFRqc4jDJZWe53ZUtEAUHr1Q78jEm8ysdjfzy8hVaviV2EfJ7J2nUb4yRk87eJ2g7NwAQx5AUchzCgwuP5Zdb6C",
  "key11": "5FDJ6GxJ2hKV7H8Rd6fdXZt2UucsXHCCxTtRMgdso2Qg9Ynx2eUmRHKkriWZEbS5hr1m28BNczNqX22J676W8DYW",
  "key12": "3gEc6h2djVh6CDpSfEG9L34rv8gYTBfS9ei9uVTrhvbQVN2A1itWDwTNujcEDrAVCP29ZhpZg2t9g87fnPcnjnk5",
  "key13": "3keGZafjem3ZdwKtnP2bLq4MeicTcaCwVDRCgxtzxevJYnoSG5YNMssKydofAo1WxBZ5RyjzpuXaBE1RKqkTbu9Q",
  "key14": "5WC5mMZtvw7AWtBDPygw9dCNoENnieKobrincvZ5RnkQ6mj3iprvnXe6kpbWubVcMbba9zTpvjhCLZJdWXb2La3J",
  "key15": "2NcV8jLLHXBv4cTwGnPRa1TMGJ1ZRtJcv5hYmPriaknDSN3iCJ1uPtGo8R6D95R3TuVbQLDXY1iPwCE5iiUcdh56",
  "key16": "5BpP3euhs1ae8YKd6X791vXUFgAnfHXQyQgpX5Eishw1iNk5dxik4TNFkH4DLcriMRmHLQ5shhUvD29yuyGb2qHZ",
  "key17": "pG6x4otouKt8z1mR7MzLhh9njcYS44dqJboz7UsQd5cs1KP1pdbfwiFYUWA77uhs48MPqnGN9CiZ3b9AMShZ32L",
  "key18": "4WQckgQqMU4LvfwKCbhqC7T6WfutmffvXjxqdiSN5BkujiMbfaGiWhg3CBs1HWkxrjR7Y4JXX9zcDuUhC9XiHuqE",
  "key19": "9r1fD9hcWSYXFmp6MjcsnV368U9BKtzX4nSTvjMJY37TQ5WsAAbBsm3CzRJTWHioKs4DZHazizL6qTBszCtZzFG",
  "key20": "386qoCUjPeJxAG7FteY8x1PniRU2eQ64W43RrfvN2ujjxbKPnJft8r4JRoo4ecZKSSchRAHjBu68AHPkrhjn9t5W",
  "key21": "4Eoc6jWRcFnbiBXJo5dMtexxZTpxWKXbGXXoUqwGUBnm9mDsNqbfEYAT7QXABYFEqAEjCre2YmDD4cpqFEqtagWi",
  "key22": "3qKUVuLeuAHGnh542YbPY8UdkUWFcpkBmEbyaNUs44wFgyh2FCMenv2vQPfk7t9S6Ak3tVXoUTerJhhenAwzUyNB",
  "key23": "FNJxvudN6bB1KCtocr66Uqu3ZhXCo3FBx6s6rWfRcF6UXiYG4TZzEdHDnZbRWAKZurY6ixn3Uht53S7XyDFJdfo",
  "key24": "3eZogtaWrvJromPDCuVbpKfwqM8unXQkPXgFPiFjJ43oF7Y5UHf1hmmU9BYwTxPafoETMKQCqg5oxdAaBHsxTKP",
  "key25": "2SfspkWwuSrvy9PnBN2S9QAd2mGPkVGxRJ3TznB6j3SX1UJsvF7LG4y66J7rdHswt3RkzZQP7THReakCRSeSrn6x",
  "key26": "61JnobKMQxBdMJxaXNMhnPjn6a8Sf6RRouMNnStP5rTkCR1WcHpMyKmgR454YeNfjYv9o8DA2E94e3Wk5V9pjErx",
  "key27": "38fJCo6FRhgwbj1t3MP1JMtiqhkVBvpZG81Sj9TCDEmsYcnaxtLdi71T4qbQEF5rBtXtaDVjyJqnMERAd2psdpv2",
  "key28": "2n3HovycrMd9ng8ai9evfxyMDfNhiuv7itqSZY1meP6aVk1KBD6w9hLG6YX6spEnsa9kqQ1WsfHy1GN3Uy54sHdx"
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
