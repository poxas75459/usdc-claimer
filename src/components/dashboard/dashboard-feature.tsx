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
    "5Lh2M8GDdvU2tAV7iGY5KjmGvLu4US5vRBMSJxoADnbW5TmcggFCQvckWsHYVJSyigtZiLYbUUTYFjXTDvdb2Tdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vprKX2SzXqRC8qmnRsEbC4PBjQzA5DR5jkneao813iHD5CfUDo81BChkK7f62gLMDc5HaD8CEK1uVYEcr7DNoeB",
  "key1": "3gNuibKKcYW6Dwwor7yHgMVbmhHKUgdr3WPBbA5pWFvwefFSFoqJ3MNTr8CDYoMFTHXnSMxFr7iP5obi62oDcf2F",
  "key2": "f7ZHfdhuPRVSuK8r1CMqpBbZXrdRWFdf7CtJLZpBZAe9C4XuMi2XxGv7K6UbMDAf8eZFX2GK4Ce4peR8yzfTYyU",
  "key3": "5GvYRgUaxKiXoGcpVGNKj3UwkLejQUUNaKd8b4599n1DvKJnDfZuNUQfF4Y2X83xKPaGPrbFYzd5g66gZ8MhrKoN",
  "key4": "65CvjwireBAg5fApsbnps8McX6yP581LPxu2bm9FXh4oGbTUPrdEc2o3TwjHE9rwukev273VBAFQsX4D5sprTF4v",
  "key5": "2yCvUqWUFbEuZcwbrArLzLe7qwq253ynv5osKbB7UA8MrAiREGrrAEfyL36qd1iGCNPeWiF5WQTrZZLJ5GpS8isL",
  "key6": "44q3Qv9Buo8VReVnewcWWQXDdNpe8ZNJsDPTExeuyme4o5m331HgFyRmrCv6fXR59rwQjnkxQTis6N8GxKK5Mhk3",
  "key7": "Kd1kz9BJqWGixyXFfUw5qLWC72civjJvhWCtQiDpQBnfWTXguUC5dJCU4H1YZ9jPZrCy8yvp67Hmeof6kgTgG3j",
  "key8": "2119tQk9A2UntKLv4gexfDEv39MatFy4upai8xH1T45uUqdddPcjLQAWqHm9G9ZrLNBg7QMRptJa5btMFJf81BCc",
  "key9": "4hY8H814T4iTYP8VJRtKWntgPifmMHK8guxGVLfPhyRPp6fgjiGcvjAR7uyg3Exj6XhJMf8sXtvxuNNQ1ssMXqqP",
  "key10": "338myMzY73TBweG3UJbG6hyj77RfrEaGTXpDooJGEPcA14MFuKjBgvqB4R7sQxjpwViCqBHdZvCiNNzkzyX3Qrc",
  "key11": "3kM51n6DEbWAYWHKBKtSBidTQ5ToG3SDNbPbTP86TiTzF672mzc55Z9Vrq4GdU12FaLMvGLJKfpZYWx3aoe36ESo",
  "key12": "3qTQn7x17j6ZTEbH7cqienGr9QgnYMELyhBJsCKKv6VtGytRHVwypYGhdiRACrSvogwMFdNu44Ma6nht8Epyfx2N",
  "key13": "3L2RpcKyb4UZip25mnuXV5a1frYDmA6Pene1GPakm3NV15DCrEEeRSGkxq8ochnuf2d1gimMAfPpAC1t36BkBeaD",
  "key14": "5MziE1N1CcaDCw5Nr4FGUV2bT7QaXXLczzcXUWus6D2Nzo6UPNoNJrCSoGir2wRt1HDPMxvQ72ZNJbaDadYqj9mm",
  "key15": "5xbVy9wvn1k9oQ4yk5qXcPP85WYyMRJs9VBw7nQsMxC6WAqarJLB75dCvGb8gZULvwPZqnnYtCuTXTDqoHU94S8q",
  "key16": "3gSBj39jienRgjJtJHKFt1CXkoNwjLa51Q3Rhi3nUmQxGznhC4fhYX2ke2b8WxZZzrLcEW4xXmPjrqCnVoMgLCch",
  "key17": "5L8ViGosT32ZXgaLR7oSxfH2L5d99uDCvm2wZ7hFypLAxDzHfTmoMzS839HXGUv68RRNuRULwGTnGNcyQh77QK11",
  "key18": "3mKYSzhi3NY7mkNBwehvsRqqtAb9opbC3hRFehnVhQ2jJxTcm14NA3cKuGA5p3RXdS49CRFFzWRMsW8vVeka8WKK",
  "key19": "7URnZTN9WbjDyEUHpBuktivMXsdH7yVeQM2brPucZ1y8SYUYiCXT6xk6LP5q9GZzxrDZjVjDvEzpUJkbuiRkiB4",
  "key20": "2q8NrjVkKB989RW4L5jNEEhniPVbCyDenyY77SJXsr6BkpvNUUYZ8W7u4dhfHNrMtC14kWokSJs2T834tHXqSgg9",
  "key21": "32PMETh3yUF8C4hMpbagXnu8DxkJEmpBMfFtYnCpKLasMLvDkK4Uktefx64eMdARWu1ELXWFgxsbcWLxkc8uGq49",
  "key22": "24N9iesSvtsEScT9kX9RzsEZRoqM8fxmD5wfYbaAMm1jENpDkBuUTSrSyyQ8rYEe6FU9HFiDNJ144FTEyzmJwCWM",
  "key23": "5znKBUGkZpALVJQRB3y1jPSUtBPWP6p32GH6ZTBwAnmNTyboP8YCBKsF5iVQZUU5hKihCz79andiRhzkFxNbVWcb",
  "key24": "4SswEkYSeoHrgvoyWF4QoYoR4rBeh6kz8zuNXnuqDp467G1Ejck5if1oxu63Awe99A2ZcPB3RfubNsN2GHdjZRWP",
  "key25": "5FGE6Ue6xngB1ozZYdp6ecyiXXcn3jgumUBW7MD1AZxmDppTUNUrVWdCMGRdWjtdrdKpBFnscmm8RMChKUYG6DLJ",
  "key26": "4LabMg4saWJuLmqfv46eqgxc8Mg7LY3Tr2Ku8NvRMnvHgfN79m3L1aKZnFPbC87rWh2tXmrRZrnagqk96k57XhPn",
  "key27": "4rFTiLqweGHdTNYQmhFkvAt7GPd67FguXsGvPMxNKxucMZ9P3B7eDRhoRYoHp1N9v5xqfEP8rwnbcABGYv8ZmZE5",
  "key28": "4LWdqmbAcQXfRkuKMK45qD6Jw351fQm9Booio1kYxk5Qrjr4TeSVoDxYaTCE9GXgiWR1Rfmi2ZgJL36k7cov5LKy"
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
