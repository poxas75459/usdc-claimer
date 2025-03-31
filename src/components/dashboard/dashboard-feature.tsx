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
    "3ndvfsHaTnm1tYh3dsJWFtXzbBaSyah4uWCkiiMeEKQmcJXEXs4871jUoqWBhNAMBPJJF9ufinvp5YvnYMaWc8i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "348ZAyuwcidjnEWiUBQAzcioXre1SLjBFup5Yf81rCJbg7A4ZJpC5ZDd3LNp4TM9pe3vxRzLGkZypNL2sFXZ8ezZ",
  "key1": "27tbGSHZ9TsHcq8H6Vq5H5wEhTpMqcSQSacnMd2LqGBnELdsH4qAbmmDGZq4hZWt84iP833KiShk53bHqD8utY9g",
  "key2": "pvePxn47UPDfUdo2PWS8B1RvqX2e92sfwCPxFW3kVTbUAnaoxLvXF6dXYatLVH7TR2Mwp4xwa4fVE5aHzD8ptFT",
  "key3": "26QUzSysZanXro4UjmVSnEinwfTkgSy45VXtxpLw5swQLPJSCw7dg6NXNuGRTovmoJcD3eVgSFch5tQAyVCx9v3y",
  "key4": "ZmxVDiHimuxzzg7Umb2VJEpHTQSn6Aa9oipeDNnM2puTuTTv5cBPWb9LY4JDGQsuFFb8dmXbrhaUcuxn9GGypf3",
  "key5": "2t9MtvF2FhWgFSXeWcyayT9mLYaVRq5783rdfNW9DrRd6aaAGx9CnG4BegeynHAUDiMexywVokzsRULirXvhB1sU",
  "key6": "3KFLfLsQThFNH6rFqTBeHNtX1x5YSoRcKwT5VaHZecnf6U12GnQm63BvfRsDuNes1CC4pfwkcHFcJJcKv6iL5TVp",
  "key7": "2NTSJ7Y5HcgQL88D5DRJVHcS6CStBSeWgqA4bStE3UWsQkkFhfb3nq7CfbGWo2iARJYE4udBDpEGXWJBx6cRcxgm",
  "key8": "GD5HrsvHTtoErShuvE3neaH5w3LUThodWPWFqcP4sdCbmUjsABwfbDr1mMYY5CtNPuP8exz8fLmVCC7p9UNC2GK",
  "key9": "27LwzCM9kroyvZeSBAiD53poJdALbREd9ZymLy73cgch2snHgKazDxqdorhtbZQbPkHH9DZkRyKnRXju4JYSvtu8",
  "key10": "3Sn5kdJdwjc1sQZttsmQ6KvxdUwff8NBQMxA8pgDgxZdZFmGdr3WFTh28AigGDhPLaaC45yavT97zm38JvQa8bNJ",
  "key11": "4y2Z6oSLNCcnnYT35emsaa6tkGNMj2Rtk6nT87TsBEFwxJz3pDC6uWeXxL1xoYFTnZdKtXcVKY1Mawyvk6ctKhb2",
  "key12": "38MhQroizkQGqw8G19BRcqbHDgARUVVNWdkhpQUQ714n6TkjTDDmH7bsRiNr6FLP41fEixZy3gaQL7VFFct8vf62",
  "key13": "gr4y1gwLNcMxd9uk9uZvpaeasESmcTGXbhwWQWZdeShnW7cai4pi6xRHtN7gf8uqkG5wa9AsZh1N5va5w8RwByu",
  "key14": "29BcNzLnZCuunwz7zHSSh25haMNM3veFcyy6951R8K12C9nHgHuYjVnKGJS2AzrTDeS74pVuE6ztopAhdsuVsR4k",
  "key15": "5PTXqn6hzb1quw2krdLD3vWx6oEBRRt9QaS3XUT84MVJVB1Bq3BnCAcmLZ3VVktrMTFBmAvtn3xWsfRtED1uYXTp",
  "key16": "4RCxAUn4yh9bbz6AxV3VvRrUhV92gRjWaDxw6H37s3Zdx3bYEp4kQEWUHcSng6McNUNsT1voBfFch11tZZKrJ5Xk",
  "key17": "2b91zV8KNPUeUEqHw4VRP8oynMnoCEJj3x2un2eXJxGdrmC666XbJkuxfe3ym9xTtyTrdr3z7ed7wdUVopMZEJMJ",
  "key18": "6EzCnqMnH7i14U2sacaub3S9HNwdSHWqEpWGPtXLmMmpUuLgX3ce1AMxaVG2fCzYzrD9KCLx3pXL4GhGZnxohgu",
  "key19": "5wdpJqKTCzMKqkiZtyN1UJ76bRj7Z5zJmLVh7SzPn9JBFmCBQEGLkGpi47K1D3eaeR6oiATeZRbofFDMH7PgVpQK",
  "key20": "2hxLjLthrLt6bwfSXDPZVfNuB9qKA9UNWAGTky5xzg8Qnuysy1p65v4C6UbXyLySqWhJNMu596DsuiiCUzypw3i4",
  "key21": "4HPyS4ieQcLS2EyEReUjLHDdpektzXiyqjv8Spnk3jRLErcJeUUP9isZ9eq5LBiAUXapBdhxc6dvxMdTCMh9U3Cz",
  "key22": "5LUqmxxAZhwfF3ZGsZCduccR1Nqsrt3mSheBG5VZfE35HAAfN9RQh7byrNWMUwTresyS8gYdpWmqewxE5Kv68bRr",
  "key23": "da6j5q11GZGVLG1ZbHRopzWHC7mvAWCGDonthfVmsYFMcWS8ks1HEpUnnfqDxmRsL2ehbS6r2dNFiSJKSEutKEt",
  "key24": "2YQZETGUXSWEv9yYMDo9XWp61rG4dQ46QbXguqErSXGHK3FQuYouT2HBL2XiLBAHPVARF6bnkx8QbEb4b8dybDJo",
  "key25": "dv9KUXvDUbPfLKQKK5PFwBrSpV2PptASaiM9o4pn4aCA9P2WbjgqkvKVAqw8fECALaM6Lg7xnQgSCAov8H5kL5t",
  "key26": "4cA8aoAG4A4NLoA5DDCHrwZGipFzhdHW8hWo2LVJQtimmptGw2YKuTNqWWhXSHJodswsqdXu7BbQD3cLsFHPYQnY"
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
