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
    "57gMLyGW9ZVjnu63RWukTQhZFDGUjNCfXjgRshhyyCepeU1oKeZowDK4x9v1ef4XU5mCX25BZgBTAYiEZuMHoXt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ffc8TFaZN4KStDyMjJBUeLFoFoj2goXab2b9XTWVEmuCGZnMpW4coGSaWe6be5h8eTg8u76BcRS4MRcQ2X9H5vu",
  "key1": "5LmLKvm1raYHBL1subTgSgYGVE95L8koLTukR9N5SADNnAC8pypSQ1s9jzPxa3onau3ACEwFoHb4p3TavhU7jZu5",
  "key2": "4S88sjPMUeHbEor7BJydeSv1zeDYPDZwTa12fJLjcKgdCqcoBLyQSYAtQhMzBF3uevxcdCHYk5T9auMRQz52WW1N",
  "key3": "5ghrnhmG5gX99NSjxaAawjmDJr5md6C2LwCGa81xjfWFQNwVTccYC1NXffHQGMBNwG7hACfMKNC4Qv7mAmy71QHk",
  "key4": "4r77hf7j98Lkuou7Fh9fLMqAWPNGip1Bzq7Qs9sBUJCsoJJkgqYjn73iiqd2tQNj3PwHu47PXDQgzuQPfA2NMrG6",
  "key5": "mcoet6c5eUKDRkqzNhsc94AeuBKN7qcVfdmZTs1tFDcojcEPf9YYim2hacg7JdTHPJL2j1jnJrZUnqJPvpsEEuq",
  "key6": "3zVr85VZDxhxeWZBjPi58fXURDvBTyVY6Z87J9gYrGhJiQJ3pKexMUKwVcmP3SMSRu75ChLk2XQdv54K3yxXfK9F",
  "key7": "2fAL8MZoTuFgeveDwFRsbSJMAMzwCcBsN32A1fL3toPbgyBHLNpaReqFhrv4CTqs2TFPgLPnXb7eiB32q2anmNzV",
  "key8": "1ALmrMhVASN7voXvpoQZENwqefqK1Smy48r7dzA6jWiMT8jyk7RtXX4ySHAnwuMkYttHtVcB8qUipZWddCo7RGb",
  "key9": "4Nw6wxoEPtd2jsnFBjU1YMgio9mG6eCnCJ4mynDqs8rSzYVZwMWttAbDShNYwgseS46LziaXpLiL93YLhzDeiJFM",
  "key10": "3YXaDr8LRM4ZtU1ng5qV3dKEZYBB8Ww6eZzn3iPZccWkXRYgycFr9sZnb51WtXFYRLyUZTsgt3DZiCinDPcCvRp8",
  "key11": "2Jersx9jU3au3XpCqKAH57rzR9BAWHX1SU9PMrhHNbLNKWsjmGWV6FoHzHbjjXxh46ihiEFq6R4MAzKJVmBPM3b2",
  "key12": "62JCxJH3PK4eShjQKp936aie1eCptgz6XHSLAY11HmXtSB6ztpiw2kQkviySTiE4xfZR2QS2ZDNCT3GYe9ddAp7c",
  "key13": "2gLns5B7ognr6oJVQ1M1j17PX6PCtCC4dgHW2xmy7sUeQPMfjoQU8doymMgsAwrLk2NEDR3yoN7gKCKDYMd3Q9M9",
  "key14": "5ACzivk3ufFYQaFvkwXHGYJzmUdLH7fag5aVVhjAMxqw6XxAWQP2VNpxk9z88aBm8WZQb15WZWsJaTeQZEBj2cwR",
  "key15": "tdbBen7DYv4gmsAgqHa4QDQBJVJc2WtZhZjAM7ykRGpZZLmhHLzd633BgBLjjeK78V6gS44Z4rg8sxg4PMJ3g8K",
  "key16": "5d6yfMsjbpJtrDMxwt88K6FASH6fW5Zq4gsQZHvcNYi9MQ6ZZgLYN1i1st1akT1yNS9bgviyqFQKs7vPDXjipLcC",
  "key17": "5tC5PFgx1qZc3dTaurhf49eFtha29r11xmmmCxoZBg6zoJmW3EfTatGk8XtTZzHYQgJNkghyUzxX2MJ2fhsSTn2i",
  "key18": "3NSADmRYoXv9khxZTCWwXxFggfnybJa2A6kTUdcpxrgwdfQLWeUUmXGV3jzVUpm8C7EZwRP9AyoBvvqsKdHEzzFz",
  "key19": "5gZoCV5WW2nQBbQLMiWD5gUbdpR8o8fdJEJ9CQWcssF9iUwMtRgC3pD4qqzcikT5yVmXXGnyXMtHUWxSnWwmbUpN",
  "key20": "An5aG9A5KXN4BZXy8EP32mUbyYfFLf8ehbLnCVRjozyGh4jiGX9Wh2FxBpdXFNPK53L457P8sSVmadtnnv1i96b",
  "key21": "2bVryTkVXZ1kPv9HA97manvy4fFs27D2CnQT2cXGpWJjn9MTuhBtrqvaesfjme6Duhz9KH7MbXPotkNvGpQf4UdA",
  "key22": "4oakr658ww7fwDEdPFcac4kTxU5ibUBYCCtZYMgUL98nBjSrKx1sLE7P7wTepykJ5zyotqXcvi8LBzwzT9k5kiiu",
  "key23": "3LgiTcAstw8ZjuCmacHKvYGSycEfKHgf3BfbkV2B7J8xC7jt1JDcQXJkoQRxXCEh7ZiPKYyNp3XAgUYrNyJ7ojY7",
  "key24": "3zCmHtG5KH6Ftwo4CfxmBmCYxj5rHVvRz7c2nKwR3BFDD4PGfwbw1Gw9bgeYAPk8pVWchpz2bjTrxPLFZUxxHaXc",
  "key25": "vhtisdKN12gnoTqZtvTaco8ddg8YhrYLdfmpDpwTvmtycPvgsXab4htkZDuwZLMmrzU2cDScLUwGGMBGAx69Dza",
  "key26": "5sjVBCw5HyLHBq2mDpEuX4w4hicyxVLXctF8t2c1WnxoUuhRKThq55fkSwNpomfz9YKaWcaWD9t3kBkKmP26htrg",
  "key27": "pSW9Rk7uaF7Dk6tPrpZeD5A2qLi31Py6jj7UmRqoU57DYUWaJGCPiabxrybd2atYHumritkDubJk3A8DM7WUJWg",
  "key28": "SM2aGadACN4KcoJTog6PiJfWBb1BwwDTQx9Lw1WJLVFpTrdXDUVKcSmdb72P4iytmP61pbprjUkHqyZ2FyZcFFo",
  "key29": "4u4i397CWU3tkHJgRdxRZDvmGDRoBLNWArMSdV681uamYsuqtfWZsm5o7Bh4SPQfjS8ShT3uiwUVrsjQuiAptsFR",
  "key30": "3ZiBRjawPWnBGfa9Qa9W94reKbgCHUHH5xXhgJQA75drVRZUs2Rbm14zSWsL2y1UnD85H2To1vARCwJYzZUaXPha",
  "key31": "43ETBQNUuEkPfuPWh2MwFKvSzmsSaHNQfEv63qH1B3po6oBtP8bFPc2uueHAw1WfcjNTsKMkzFYAvtz4W32fZB5K"
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
