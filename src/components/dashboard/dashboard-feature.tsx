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
    "5kEFAZ5iy7GRzbbQApZcU34zX2oxXTSo8PxJdv6tuAJpfQ8rP8jVYPTTUB38jErmynU43LYzD6VUZfMxzX8oWzzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CL1KhsRbrV1hbkEDfsyG8Yb6vZzvkQK6a8fSz5ueyQRTyCW5DQyMrrRB6Jw8zMjiPPUWvhLwWQyDyJrUwnj3fPf",
  "key1": "3SkJyGBLvga2pjjP9T8f12cq59V6x27TGV6zPUaYMh3k5VsniPxeLza7w7jyWKA1ipULBV6Tjh1KweWHZVHfVHHZ",
  "key2": "HWppTgnV3a25SMQL25RpUwXCVokAWb7zD6z6YkDQU8Vof9tRFm1Rw9SxfMy4g9WD2akKeYFxKfcqjSApiBhtY45",
  "key3": "2nCFFHwkA4NGNn39V5whmhxEaHf3GdaeTHp49u5Wa7mbNTqh2Jn9b5nz72iSF8PvoPgMHoLF8XraD2H3qkUEivbG",
  "key4": "3a1Qkuj2Pz7omkGzxsLX5DJa22LvujCHAt32aAVfH8jkd3H1rLF66X4TCydLXoW9S2nP9sXxBA1WaaWbo4PwTuNh",
  "key5": "36XVsYCH4kGssdwK5Xm2RfsdY7ArR5ES6iu8nt8zLDyWsWnnF8XAXusc6xQZJR6UEXShnmPTc3fodoM2tEF13zYe",
  "key6": "47Peov6fnkn88VLg2yUTTimnLx8Yv3eMj4aWH33mz52BMUhPCrG7BjVGw2uBz2cyfm9buK7sGpQzNX4fTNcdjLru",
  "key7": "58oAFdGedoBwnevjd5aMi51tz9i4xRErT241tWxo2tfzXegpkkQZhKZxFXQrWvgnYYsg3h9h6RzgpGiqfskvhHxj",
  "key8": "3GxeoqA6wT42KcptuYyQPfQyg92QK4Fqd86Se2qN2UvzMQTYH6cJcn8cqsNqqXCaaGXxy7ZFJ2gZjUeYPPg9jSWD",
  "key9": "46G7StUnwjFCvPssQKupC1rB6XW5Z6NHYSHprSyz66TXPFgvimjZNs7TUJ2YdnPyuGzGM5WgaiE2d1iHdwjbp48k",
  "key10": "XY3WiW72ttyiJxG6TvRTaZuS2y7noWR2mnEsuWPpHHm4BtoPUL8f1wjWgXAFqo8fKHeciiam1CRofJUsqj39Ym3",
  "key11": "swMoVVcKr21dCCkWwSx1XEVsrWd4t8x9SdJRoWpCKyZ4ZW4tqZCtLdMsCV4PVvAs9JfsDkBmbXhLkVQvzqgd6TN",
  "key12": "5i92FBdHUFQaXnSnkx6jwPaknffkdXtmLfu9ajJ8TS9DBSHoFV8fvbcEDxgCVtb9hxkcY9adS6Y3RA79dEcC9XP3",
  "key13": "2XhxziiJhqHqB3J5MhqGPyJ3CHxzyu9Hv6zdsyTbW8nKrCCAxaqH9cx8odhkDCn6mUE1uSRUcyktr6Vpse8GgJB3",
  "key14": "5wfKm65wMLTxJrZE6VWUEjwzoKhM7BtiguETxHfERjMBS8m19BC2tJExo3D9HqiSgpMjJjVV1n1gva2B5VVUihcF",
  "key15": "3pZpTjZ3a357jGNXMNTPkPqcMnBoUKnxzP9LQqv8qTu4cygamf2nNKMAeDc4JboiKacCAiiQLTaVTCBBDZww25yy",
  "key16": "Rx28yrWBYbmQeKfBKZgjLAtPwUdEqx8rJ3cv1baEpsd2P2zih9HwniAAzkzt7hQ9jcVsxNUTXXMRvgnBEYkB3yP",
  "key17": "3Ek8A5jLMifvcAz9RdZsEjMRY2vXMtxg9T6Pn6AXp99P3XDEmbSNUP21H2XLzphZQcZzZ1KCWRtkGLbt4TdKFSMJ",
  "key18": "oZYSEwwqFu5M1qs7MnsfQ15USZ4Y2ihfvG2kkex21nSY5Ckr8kD2H8pWrn4TtFMNHeRMCdCyu2SJ7HQY8ytTmCc",
  "key19": "3nWDVgKNdiwX2AodxJudJ5V3KWPLWa6fpQ5NDWJVfYJ3fUHNkAjeP46Yx2M47KHWCqmxLLvMoPUYkvvnS4SPRyXY",
  "key20": "2ijxGyToSRgFc92HNbaYw53E94D9aHJpaqdKzuKqgxVEPLRHkYH4egpuiB3y2CXjnT5V294PoyuhBPfeqGhVLfbS",
  "key21": "59X4bYSpidZv8rJ4p2F325E5ASfvcxL9iedfimwo8456Q5xsL2jbTUXmQzeCWxrssXTbCbefS9u9NxiyXzQgp32h",
  "key22": "5CF5MUsaAdAv6LzNSwrcEKfZAC8oYQyQKC3MwiLJWNMuKxTAkFJ3rf2eedryDEL5y6fWhCm7V5Tho5CTNCWdJDfw",
  "key23": "3TysnhnjjZiwY7xrxvaiH2Ah14cpX5r7tgPg23Bein4QhQJUrWuPJ3F9Majk5cPxFCaH7jbaLWYRaLNZQUbJkD7d",
  "key24": "4BLCkF3Ar6GswR2dY1832Tt83NBDNaSSqoquq7EWePR6ffLSyKHhQkN3B8DXh7FGyLLvGJQ6W8W1FVbdkx8p3Fw",
  "key25": "521upmXQyn5LGDe4MrrAqWBYGfNzw2oAwzVnWjaTwPrENyxXx93Te6aJXJRKpR77fDNtUcuN98up5aaCxCDkzfEb",
  "key26": "4AbXnvkP8QeW4ZMqvheN2qC3eUKzLd78jCKEKhF9VpYUF9Q6pZ7BqHaMz1YSEihZRdRNY7UptWq3CuUpK4zyEHZB",
  "key27": "2VDJDZ47Jdkaaqth88jkS7YeXA6ZSBhF78arWCRLfKmyLLdERqDJVGNj7osGU8msSmNYxutsRbaBicQvDkk2x5So",
  "key28": "Ma4SSQ2WSCbxWivi4upQ6UDNUgFuqKhtwQZcrjrtyHmdJQqiGChWpAEUFEFWFsbYmZXEB3NxM6te4QbXh5kCPC4",
  "key29": "5JnGd8dtTzsWu1voxtGjA4HX6jtYsKG9AjgtxSYeX7BukefK8RGFbcYzBjugV32rMWT7eSx8nuW1DxntFdYXpUAB",
  "key30": "3rWBasR3LQSVsBQawU4K5uQYNK7aXrAn6RyCRy35txFAautoiwiLEqCmtSZ8VpHxr9gapnSddin7cj9GQ1FGkLDE",
  "key31": "3K6cpBgbq9kxZYRVBYjcjHqukA66DXyYPctfbPcU1FkoHQJ52Avnm2jUafKQooqfqDkTt2Z9mDy4SYyAwaokGdgq",
  "key32": "3vz7UUuG8YHgAVH7Rvym5FRUsL7xpYrFJSb9YtT232uNPdiDgbepL3Yps3eJkhNSAcThFxh5ZMU9fyNmNg72JEB8",
  "key33": "2zVau3PZDayn3tVe8ZTEScxfdFw5cDPJb19ycURuNGe9Bnyy9gPu46P8xBU16ZeZPDhE9QZWAy8eWH2ftnDDAd4c",
  "key34": "echgAw23Jo8YaqqLmrGHFqR7fmxsdNmLxVx97S88YdAUq6f9MkBYAs8BvGgFX7UQJeYGc5x2bPEyXrZBNNfKTrQ",
  "key35": "peeywifryyjM3S4rRz2C3GiQ3HNJgpwJNaH4J2xudbRF9YU74KnQTTQm5SFuQfR6ist8Pfr1RnTuFd82Fp26Qsg",
  "key36": "DQPin2EhDnkuiHP7qzH8uBukUq7KnzpiK74hJJHnqhFRFUgKjPzVy3dkiTtVMZAzDRg92qqEUktUpwZE173ADnu",
  "key37": "2osj4Ph1pvuSeHpEKE2QUXnYHCCFv9XL8hWWt3WANEVtFoahL5vPuJiGsB4RTTW23UJ29eFp9DUycJnA4YDG7DnZ",
  "key38": "5bhv85bhtSERYVoZyGaJkTtRGuQxERum2FdEmbtxqHx6TjEGQCaRb8WBWBJaLz86zashfJbrmdY6eQFuJpStmMYH",
  "key39": "dwuHA1Kbboo5vE9uAwM2LDbCi9GnpnrmK8Hv2DjqhXvunc8HtDH4oNW3erDNfQEGVdYoE9XuAXVBjkHwR5pnaj7"
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
