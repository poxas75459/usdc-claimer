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
    "4oqk49R5UBnLf2ziXvebdQ5Zg3xCDvRxMzihAb5QeheswmWtTTrSWCFQkYagB3juXsMhxSgnbDhZzqg4QRxUM35f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EE9Z9gstQtfUYEi7tVqGStsQ47Hqco1eZwXGTHU7YB2ijXiUJey1npWfAh8HoJP29Jj3AEEdXUULZV658vdqeHv",
  "key1": "2p4jTSupmMuEGvR16TEMAKZB7r4sBqCPdUxkgJ4oAVSXMEcLvVuANdb979i14jgobaEE6ybxWR5oFVDedBbfaM5R",
  "key2": "2f3m3uHSktSeS6xyEjbgRJ3PRdc4VC5BHy5xyRh15q2gLGRygVNpDMdssJd2ZPBayYiTdwYzgJUnmim1RYagGrX6",
  "key3": "4UPeRfnger1JUu5nqQNHsVLaDGKDwstJD7f2zAZDdZqLDEwNX4DNrjYm4dicxfaWHc7k2Spfy89HVjXsU7aw8AaH",
  "key4": "478XNw7DvvzGf3qiXfnAbWowndPNZKcBpVjpttHvx6fcsPMqKXKMy1nHey827TEVUwKAN6cVdzGNwDbQQ5hqoGtQ",
  "key5": "2dHezvUBw81TopcC5EnE3z444ptSrvNCLoTQrNLdsERdEYJX4WVpMc6CsKEWeG2jJ2zJ8eQEDwqAFhEsY186DoPs",
  "key6": "2CwhZNmJFEaiNeYUkwG7bXYcuwci3pKLiB8GLth5i4xEve1gBCa56DMQbL2YueF5ujQiTu4XmrNhxHZ6FBkuZMFc",
  "key7": "2myuxVsBNp9Jo6698ze9QVnx8dNR4cC8g4kHnpA9hAQ2DkWU9jwH5tEwvNM5DG8pFbQLe7qzC6Kq2UXSFzrma5ks",
  "key8": "5LrVentNs7k5FuAYAAx2AForALWQKhY3VYJTPjaoaRDC7RtJp628Q6ybHFUecoYZkgeNNYtQSQPMm9H5uZd9KMMf",
  "key9": "2gURC9kwakPgwPKMoPZyboERv3UQyuM9aGyLtpU3tpiEeKHFVsnDaNM263EyxBRwFa2dsKLPMVhbDBJ9GGoyk8BG",
  "key10": "tkAef88Uunc3PpFeLdBHk6Boan4W5DWAMvzsJjowqMzioGQraLEucwgBHNedQcnwUFguPsdWP2imwCKdQFoMC1Q",
  "key11": "52jWVrZGRZeGHdXPMgtNjRUSg6qtEurVCfPo6m7ukzrEJULSJdLUfidFv8kDiMX8sGZwRYPvWTUPbGeT973iMJ5y",
  "key12": "dzq2hxmA1smBrSwoq9NhQMoGoxbeeHbXsm74Wwxj2GszzVbsZk6M2zcM3R2xVhJpyiyug9VsfJhq6iSEuAnZnSM",
  "key13": "fLqEQac6UQNwrtjnWSCLAprnMSsCNL3oYDsUKAu1amr591DEGXz6hC5e4i1GDQLiJC9bg9TEb5AUbEGqZbJVNQi",
  "key14": "24xS3NwTyotnqKsLm7FeruCTJN4W9hsWZzwNDPnAseG7mJ962sbcKNKNu9LApsC6imd44Sppyn2x6q3TVAtSTnvS",
  "key15": "7ecYAB7oL4Khsc24rfkj1uftYBfdXd6mkNNbD2b7wyzhj7nkJQoH5GXvtBygd4bTYuhM1Ro9RQkCEBBQR8yuy9t",
  "key16": "2bMqE2Qr9TD8TsmeoqJx7ebHtEMNFiAusZxuJMNtCxfSnsp1Me3RJ55hKnR25RbznsnmkfXZTMsuLc88mSWno8iK",
  "key17": "24vbFnGuvwocbBy7ZJ6s6Mn6YMk5nLC4PSwL3PF6DRHAgX7CXWUEQGt3KdZfTnFMY6pBGJcpVauV5gQsy5QeKSbM",
  "key18": "3B1hXUaC87k5hYZg3BAetYwyCxoUTfBbJSebkuLHP6aj3Yrq8Bt1Ki4PBH2mhTsCbDj4Gprayoje5CUX3BdPTPhp",
  "key19": "3bCRHvvWyY34GzNtenGAnZdZ8QUmfzWbgCJvnMqSMCHchgzJqSPRziJghFdMdjFjUVASBPvmR2MqUbJZZ64FLTBk",
  "key20": "3UpbW8MB5sL7qrKwCNeChd7ihy6FenHfgMQoRhkkSkZsenZ51hUtJM98LtaGZxNZ2EWyBRc6rsrW8AZrKUSpkRMd",
  "key21": "kW9Ax1zd6neKa8anATjFcWRkLrfW25UveofNE3bDCrdDAx9LaJDqF2srLRE6AnZgnJR4kG8Er74XgYJTsue3B6C",
  "key22": "xVzbrM77pyguuFwTYzmraXQq5QaVGjXggoUidXauZM3P8Hu26UizHTNEw5sY9QuBzAWo9PY3KWRqCKzkrkQRyYe",
  "key23": "4EwHeaLmatKpdh1X3sEY2BavaajnYDhKXhfUaVW9bJGBM2xzLxncUEejTfVZorJkKug9LjF6WveJxdoswSdbJ5yV",
  "key24": "2Sx8NmVa4AVw3MrYcVj5AawcJdoMvcjhnwSKXfZvvvYjLEPo91XwiQAGPtQV233wqWmTCD9MNqQMcdVkfiprucN1",
  "key25": "2YkkuydouGstcB26jpAQ2QuoUpvmWdhyHP9te59oWthMY9fFFHjm6mXpNrpcNsZZDvdpuJmnNGVncMGV1sJGjgU7",
  "key26": "2axs6z26RqSHhu4mLFqXq8GpAj3pFzyN6WPpwhbRvwLgBCwvnjw9L9fbDafvUUFbYLAmRKBH8x2Vy6kTegMjXvH5",
  "key27": "4y5p6dnp8tngqwdtNB5vdNhPuZ6s8ks3id1ysPVm4v82AjTLg3ZXReCi5rJsQq9WsLhfQ413F67sC8FeUGhKiz75",
  "key28": "5Wx7DfsipBrR94eUs7k4kcfeWdxEDrGwW8cHfdPMeTQqek3DebBP1sRkjNuqUPY1vnW1ycwrrgcBqvv9fjWwutxN"
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
