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
    "3272QKKJJqDMeqQmgAccU4dsqUtQqKLM7qCC7bji8fxRbokKziPD7m6n9hqC1wZmWS2FqD5gmCS4bECtKxJYUUDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sh4Rs44maxjTjv1gAi2a2VSdST7BUpQDuB9ChXBEw9YMzGRRP2z7zZZhnNSePkj7W3qH8puQR1H1Vx5gUuVoCRb",
  "key1": "2nyfapzQcLCfsmNjg5xx3SXzawfug5n3SR2cgjVnw17nnfdFY8uJ7VajSvRPbCUrFSFTSdj9xvUQWSt9Px9nrKwm",
  "key2": "4jy5JS2XSk6K6NbSzCGMaDbGQAeoGJHv2dBjS1aPzgGkpBwEoLQeih9yhrvmM5B1qaBJ4732JoLQQSPgX6XdKvSz",
  "key3": "4ZUVB3G3jQyF5ugx1FYjXpTDmZDaPiFyDPEYHMgWBi52bM3jhd8t9sTdi2eBiwMu6erzHWzmhYmFCML6JySeBMYS",
  "key4": "39UpqiQmoqapTUMz4bSYEKiZZePms8xmce3tSfy5XhhWXKQRm7N7bP2wXXMoYPhxRdyMgmvaDJmWtNz1jeZoizXU",
  "key5": "2ZKo3PuV5ft4vurJ2VmL62PKxekKvjKc4TKNDUmgUXN9QuPzBrgXHoc1c9c6XPoLvUut97p1238YHamoyMWjaZv8",
  "key6": "NkWh8GJi6BcuMuJgWWuC3S9vSGxadtBfxsGhpVRqvSediQPCf3R6ez6kTxTd4SQgrNoVYdv1kU5RVb5oqpUd7Rw",
  "key7": "5zGQHN8amJz9NdSnkJHihrT9uEiDhRMGvMHF9QYUAYjKijBq5yDWZyTK6uTpSmL13Lz879YABFKd6sBK47zi8sgj",
  "key8": "5F83zFYNeDwFR4WvqnsvSjtdk3L5mK4XWZ2iL9wu2z56Tn3ZifbS2WFizSHJA7XZtBdfFCXfYCuYuPvMqJbMS8JC",
  "key9": "9XtHSAYwE2d1S7HS3V6oYRqU2mrei9qp1gdKTcW8N2TJPYqK3h4VZW3CgCKk2ScovPbdfXc4hyYbxZGLC3imQuU",
  "key10": "5Asn3e816g8ys7pjWsWE92jDLs6cNrUGk4aNzCRCjySMi998My6hZrh1Y7yDj78KHNmuQu8ZLwB5jUWyqp6y1ePb",
  "key11": "5d2xgxFfKmdamnNSjKkiLr82e9Q862bMrs7azikrtuCd6up4z8AZhy88kY9uUA3eVfSEARzkxLqXcegNJFykcAWD",
  "key12": "4QgWzu7JN7iQsLqQL8XcS8eu7eRQ1xxVcYLbAm5DbnGDVjCaZHEAn3NDBR47Te6uTrSRShs3DLC4xoKSGCuUoT5U",
  "key13": "S92nW4SYnmpUmK4wu9hMYEcSbkyoQ3924qR47oAgF26swTfrxv4oMwtkenm9YVBird1g9FjhZRz2aeEKGsHRQXn",
  "key14": "3Kd2iMxJCdYCEtG9vekxy8vPjTh4nb4RF4498o3iBozVJtaHm7fYG62N73fVPHSkCxqDiT6kcUNuG99ZdXV7xBEu",
  "key15": "3fiUXMJagFuCWmeoQ3cYp12muX4nuBQvDcToNBNNHVTLXWkp9oU6Jve6u7tYAJ8cTgeAjUxWVF14sg7kUmieueQP",
  "key16": "2KBT67DRQX822ox6DQ9mrDioCftLoehR1ULW3sFDGpiAJ1VDADNHZTLdpkdFxdBCuyiJutn1aNABoSdnu138zsqE",
  "key17": "4UPcjYCjbdB32E3Yf5NwZbjWEPvuxPZv9ZCpHoKHJC2f5rxJXMDA7m6ysW8MTAvMqcrJxux8niCqNa1vpLALy4uC",
  "key18": "2YJiSQL9aWQ7PLQQTVNKVAp8GmUvzHdrfP3Z6Ka3MouLw7GAHThSpkgjBrEVCeqdUrfHHs4zYuzAcSwfiGKNCmEr",
  "key19": "3PDSbYkmQy1iLAHW2GnCZvkaPFWa4m1K4JV3fxkz68e77hHHfbvwGhL1ccjLcqJFUu2fHdU8FA71qSeqNJr4JCwr",
  "key20": "36ZxkogtAZNe2o4f3WeohH4LBEGS44MD7y4Ehxh72YYykAXCAsx8gAnYLi7V5G5eSidTi4w6XjxJk5dQJkzrJxSk",
  "key21": "4htpeHEiqLBBdigGhvTkRGgxeA5GSC7NqddRuyYv5VBmTm3wVv8TfS2zuULMA6z3TsivuqMbzAJrZg8qTmsJ7TvD",
  "key22": "3wBXp44js3uNxVNN9zydQ3Cvc52chSgGSDTJN87HVfpCHDEbk22xf6Af6vvKiwFrCeoM1Lz7pfZDZhhAnxmU8XXp",
  "key23": "4YAw2KgVJhFHf69QaghZ6SXFCufbD3KQGLacsSKgWXSSuxTu8DuW4E9xXitygjEFY1oShcVVJRv2sdmWZujBHYMp",
  "key24": "4atYNCJvWtNtCrCH4x89oAPQwjjBvXthVBaF9zH5JDKAdMXTSXWYrJDvus4p5T1sXCh5vRbauHKekMxxJWN1qYUY",
  "key25": "KWCacuk4mFqB4dPN6nps89M7DNVEGL6A5YUSYZE649FP2we7CXQXXsy9GJtevCE9GXkVpg31hF77SPtj4mbs9it"
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
