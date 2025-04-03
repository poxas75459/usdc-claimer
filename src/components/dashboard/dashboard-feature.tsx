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
    "2RxuLRWNQQj8st7EYpjN926Gbcp17ZeVRTRb7i9NhyiJKV41Mr92y9Kke8qZUa2cBPCB1t4x27n2mBytc2hzaLca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQraXohsfCa4tgcmHpYhmwNTvByRHsVjyq9oaRF8iGKCXPnGFbdWPyWAMhzMWKBFPEwCnGPXh2o5jeH5VJqGC8N",
  "key1": "RaSBeaERmu496f5ftJnDmmV4joMMqNgtdhrzPxemd4rtbLtsucPiX247ETigCuH7tdLTGsVkGq9XWYkBM3mPZFh",
  "key2": "51cN2TpPGKEfpCFemKNGWJEaJqDqhjMqxp5rcEgTgEtv1WtRNtbjJSW4yk4cDoQQdPSrQwohWa2K2Ag5bxKm6XZT",
  "key3": "66MjFVCx5F9FBZJAiaqVMnQxdo9g2SuPmqWNZJCwH1hg1jyyz78sBnxq1xuBnjEMNdnNAfksu5R4aXUzG67FwMwF",
  "key4": "9fVLn1wsLCcXrGXsRZhnp4TzESokGekk1n1k5M2cS8DKep3VxAQRFaaxEUnWypWw9RQmxsYtKcjcaXHRKps487f",
  "key5": "pmFo435JfdqSrkGYgL15Jhx1JtsuwBBvqp5vLSkgNUVygbVNHUB7V5Z9mShzV5JxfBQaAwqoAdc5hygF3Vq93xK",
  "key6": "2b8ssaji9WRF9a2imYNvaSYVQWZUcxATH22tFJXj1sfPWHhCafmoqjGYiUFvGSA2VecBCPr9KkouBTRQqrxsQYMp",
  "key7": "mZLdg8asj1WYbRcRwFVnuZmhzawq1yFiR8va73EbPh9YHu5RL2c8dAnmk2zkjqHkcD8Yo5hjJWtMrcYbEaRtPbq",
  "key8": "2MsCo465UPQ9QeoPRBkw1ZJRNLzGnBbV3vYTtDJbq1zZP6DdNKVTnYeXhey13ndq5PDr317nf8TUTxmXmStmrRf1",
  "key9": "2NebkN47sJEW1JST5rDH1hhGGHJfyFfNEGN5qSvCAztDtibvruvoAUCQyQKeMQTZgVDCdNx6Xvp5a6erckS6v4oG",
  "key10": "2S78LNREqPxPKeT5oqR1gwGL4L1XPAizXNShZ6QPHMqt6nRowkTeZrQeUxytk9CzPTzeuo7hfoZ9Wy74hhj6VqsC",
  "key11": "4nwuMrfKEiJx9tRG6dCfD5gNfsb4fM8ypchfFBohiXU8dEESASh5UCmTJhjZpvCkQV2ysQgqfWLw5a4KseW5bkgB",
  "key12": "4JZqVUHur5GhC4nky3dQvrqw2Me29EJVqf2uiBKXb5yUKYM2iWpVghUoDcSTxGLs824qPiWfgQpzZwdiwFJ7DKmR",
  "key13": "D4ikhF1WaXcMTh7LBxWQZmSNh8dFQNaAguR8RAUSSKBgYqbVjy4juYonEDg29P7RKuv9foQk2XgFvHuhESCKok8",
  "key14": "46NXZFBhhuKDEPEQ1p5uNm37E4YYKRac1xV6zadQJF83qcnB1okrkP9KHmXBVDWZwKbKT2mSXHBKSsEumJH5HhpX",
  "key15": "3vtokKcnXmvfpDBiYdzDBNPFS6MSeBgyodpB4DDXEySnZCXKt1eVK9mWHWwBheiZnJuerf5H6cuwHDzCecxNDcnp",
  "key16": "5sZ4REbrExfNYE8RCPemx8xM7gweTdf3fTau5exf418bB9TidHUfhA8ca947HwdvxH4i1Y3aMwqV4QALzpJrSogd",
  "key17": "3iBRxQPvU5tdzNinZTfyHpuTYPnB3BAdL8w3J2WE9di34KhzBRkGmbWEbgi1yKo81TiLupJowPTCrtt68W24V7tS",
  "key18": "27C3yhAPDotW9orDhcFnavoVmzRupMXeeTzsyn295sTNDgzVsdHsFFBVXLH5Z8w82eYhz6Djqoghcr1sT7HUi5zU",
  "key19": "3eSiCf9pmfS8GvqDC3fDqz21AEmwXhQKj8JvCmVrNFVdh1ns1RWJXxEkWxvhTAyCVLMqAiB4Bn5WB4xHnGwaatXf",
  "key20": "45g26n6Qz3AgzX5QDjMgg8vtmEpYGrfEuUSrU98TPyBdpZgTpcbdWzo6G8CQAo7XpnFo8LBvuiANb3vvrQ6F9rQT",
  "key21": "5PFNX9bsWNBZnqa7XgZL85o2aAHm96BSbbM2mDPJYrcr89HVKweqG7jSZJVCpWuRZjnFRY97QrxyP9yS5gSVGWSv",
  "key22": "4YgpJgKqfyoPaV6uW6qLtGnkyogpV9VJH6houKcUq671au3TqBgobkGFh5arN415dHE83x4tvt4JytWMLrTErH75",
  "key23": "dbnZZhwFXFkFu4tJVRyQid53mUoyjJ31nM68D1n9oNZXPZRcHMyi51RmQBnHyHNgcibVJeCScHrGbHEdYk6dNte",
  "key24": "2xvztTqTJ4mK9hxa8Md1NKAMSJqDJARb5mUGzH4yaboG3Ziockju6hrz4QGrmLwy1WZFWxWff5NYEKppJkZzuSfu",
  "key25": "2hfd46PKXzisVnSYLmGfsDUdNkX9MGh8EBd7PUg8XpdfZ9mc9Ep57wPwixBTfWQ6akiXuzE6CERhEj8KMtH9s5Ce",
  "key26": "4oXXWti4PKVsNc9FWYecP73ohk4odEUy9dd31HCrWyQ4pqxL1CXYPjbaYRh1f2XfgvpqwTzW2pZCnQHZ3c2zm8f",
  "key27": "5zrpXhRopEp1wVBBAKhzqUMbfYkcLERm5Tt46qTBR1gJFhS9QvEc7ZB2pHq5hoaB8NrAY6KhzHaeFUwVUQs1FKu",
  "key28": "aFYbcpsGfR15ZGReuRGtNC1HbcJLpn4uX12ygLXpCDm8uHkgDtpF4c5LZR72bcNZxZ2s19cuLWZzSeNTow5qS1P",
  "key29": "27ob4ogZ2NPcY77hGQ35EnVjD7nwRSJngwxcHL1HBakGQAZ4fxhjGH9ZbqNUpwZBVJrzWr65N2AFfPGF6evsVrqi",
  "key30": "2UvHRhucda6ZHpCxtPnmCRb1XU4xHiBK4ZegbLa1qDbkyt8RBqdFYkPK5QFGMxvSVGuffzUTqycVNH6jfZZ6Gujr",
  "key31": "moqDobgAa8CwPu2BBVfzQCCTpwJRsFFJSiQtQEvL3jd6ai91HgjTDihdnE1DCnrcfBX3T7gCacXaXAJhQFUveXH",
  "key32": "1HFNK3J9K3zuUNPnXnV38nFdfN1JiBgc49ZbKE4e7GHmE8r8k5C5DUANZDAdd549ocMPEpgeX3tda5PfZRGj6hP",
  "key33": "9UMgbfFkRnDxTD1rEhXVh28bvwgBcwqtZS6npTZF6Nb9f6oGp6EydNtZt6nSDwZE6FHrmHcTvcNeyB9VPGTFmYP",
  "key34": "3HyhWoG8WT5brMisUSoZSjCbExGeWWwJorzS3BSuJdVKCXkhiMX2PHsFE35g4NpdCWYynxzjehW3uPPMeWDviwqk",
  "key35": "2BhhwNwAKna7K9aK9y9y9JjLQYhEGnfZFkUDZrUpDKop1JfYsYmNf694AvCaJyG72LtEaq6QL4jTA6shEyfzvhSF",
  "key36": "4x2AxTwXRpWkRzhiTbtDCL6SCpKmihP2VjH1mPNvLEDKytSpYDGKDNf44QcR8BsVzqi7xmSNRrwsVpj8MAStuKPz",
  "key37": "3ktvAwyor4JaKkbnHGmA7HP6M34wmYdUC5SFTpQZqqEHR3bRmpaCQQvtT9un4jenb5QxN4sxMjwT5dHJ9KbHUBTu",
  "key38": "bYhEP71xqaVMt23UtKGJK2GFdWW6yND1p4LRMn4qdzWDdZKbzhyJnbBhKkkVhUNMbH3sqznZULtS9m2KmXMWqA5"
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
