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
    "4wJM5VnCU4FyEcyfwfzYEhRZbu4gFBzLgGfri8EbLAYGC2FZqQ45g3QgyhUo433Ch5M5AzMj1FDhW2NVfMessPid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tji1enwyuyjA1m5ZTvGQL5rg3vPpYxaZzfVSJxkMXfNhKT4oSURaEPoK8GgMgZBkCwtAoDYsk1WEKo95v9ZxHv2",
  "key1": "9AsSNC2jJmgnP8N82NLvEp2EC6YedoR4E5HjMxg1T7eAfTWEXfXjj66Zq7KZEEcNAg13iNt34RgpjFwCcbaTQrm",
  "key2": "38oEjg6ESpSA7UPwzYsZk5gc2KvVkYs3tyTrVuHfvVFYjpa8FVE5PtyMuuitHZ5x4aH3YxfFsmNUxXDaTPtuQsrr",
  "key3": "23q5QmqmuvTzEeBvWr1xW1qyhkUkjmznCNSmc1ZjXE5iqzhXBzCD85oEZ77xRpxuJmWgQr4bdw34uvBJSwFUDTX4",
  "key4": "5sajp61pwYsY7GDByZkwxEr4T7MjvRqLkfqVuqTkmHFpFzk1zUep5t5ohZ8XndRzrMQyX1dPwGYzbtQ2uxk39whL",
  "key5": "3nub2JcgU7fdsKyKhF5hMzxKwERMYjXwN88vbhZ2JsSnyzMnVLYqmct9xsqDBP71KRL1U18uaFc2JRMYSbmPU8Vp",
  "key6": "Yoag6uZ3W4sYCHnCEukH7QKFomWHWYBt3fMU5yHVSaqb2BiBm7gsXbWZ9FxieES8XHiaRPBzFBhfiMsLhHyp93f",
  "key7": "4CKpNTwHg6JY4uNvnc4JztSD7TpSWYPsRYF6NoEe2aL3V1kf7YwcMbLQjqmBa7Rr1T5oFHyhnSHybcTo8nYeScB",
  "key8": "4Zf4jGd4BKcK6pwzqhA3GyRXprBUx7sbRhoSeN9Z4cx16oQAJwexCHHnm9dqGj3mwdUQWm9kmtUYGXXQBPLR473t",
  "key9": "2RYNsPviu6FRHdDdkKadpTHVEBhc7auWVJ5eXVaKUk3ufd5yyFG4TNUx5jt5pKWkUeagohTas2aAcpFZt5Q2nRn",
  "key10": "5tdYFo9DrMMNw67uttYuTc6UDtB4hSPqgDUNJSaNZkbhxrEBNzg3Cp85cmUnp1FWTbAzuevYiDkbTZ9VHXQYoSdM",
  "key11": "5dXKyqy2B8E9Lr6g3ZdU6LjiJMpZ9HMNv4Nno5MivWFRJyW7YQ4DpRMd49Q97BdAJAB4kLpgywrMRNyJHP61dy3L",
  "key12": "dcTrQVJNQsnBTap5hm7WjnC6A6sRvi64zjTtNpihgy5nRrF58W2HeQzN5suCwoKanUECDfwMC2xaNWy9hgFNDR2",
  "key13": "4fwF7Pq63zeCZb5wbx6ygs2EXTLKhkeVjqaGRLXUhxymgjeUKdGL3Lk3PJo8ein7LmC31rz9zTs1icUp92tew6eu",
  "key14": "2jhZbnPVbqrmhAqSaBdnbgCDHnUepysGt6qW3pbQ2C53kSjHiBFT3o8rNe1EGvawMLSBvC5sCugqQTwwBEyUAc6c",
  "key15": "3ywAzCsNBxtqRS6SBizRp5EGDyrpKfk87PnXdqr91Hp9acVCVrtqjhwCv6usGr9SJpxi666LJU561jkT4bxmrMS8",
  "key16": "2ArjzvXgJNvD53zLnVyzK1QdXvFQeQ2STbsXfB6tzAB8nFa9X5jLWtxvLyuqgycAs7ycw34ynKdwXLM6iUoHWU27",
  "key17": "rWaE6tzNL5YvszfGPXJThAvMBXw4GxNyigxTMRTB8W8vebnvA381r3yWoJvXWHYuxuMPKAdo4TGKGptg15DRKtU",
  "key18": "555XqCEtxa7bhqHEcLFjiHvYdSWKnAkFKPbr3CQhq8T1kNFYuhzdneW53FvtuBDfwT7FUZHjz57ZMQhFySK1gz5v",
  "key19": "TS9pgQKrjbgCJF59aSHb5me7W9tixqYZ72k78aR3EzqyQQCAkHghYeMWBKfBBRejkzKSFB4hUw9aMCwrFfyS4cG",
  "key20": "5QU5NacBrA9hhd3aAt5a9UVcxTRtCScUx9BusXhKFQkQ2UFeCJSydzGr6vxaXGTsdu3drJRnVpgryN5GUGds9HJM",
  "key21": "2MmNu5DrC3qryfbCm4gR6ZUAweWcG8R6Jdh4cQC5MAj3hvNDuTwxDb7tG1JboPdfsJetFQ5SSCuZmL8nqjddh43c",
  "key22": "63NtAnmKwJ5saWrWKBJKzRsVNYjEwVfX5YeyuamHCMwXn28e3XdFVMcAkevhD8hMNUj5xpxpffhnaXdaLFdcdjTw",
  "key23": "5eTfWi6kJ1jDwH9GN3fegsq6YknqsA6GUyK6GKbUqpnpqkJGXUAMuadA5forqcdtj9z1YyTKoJe9yd8CMsnPxKX",
  "key24": "6ehHAsXBXtzs7uPE2kYaTF5gVbJvKG3zFn2oPziwUnC47Ht6W77FkfdZPdgWeDshK4Gr6soXUHdem3nPwTdvLdR",
  "key25": "5kqUjGpnkL5AFKv6ykNAYe45kybxsefjhQz2yXgBunonDLXTFZUSFmvpEah6ZiE9D2UdaLRfZf3h4SFstVWaobo3",
  "key26": "4nHvq2P3U89gAdQGvvKbFhdmt7MGSbaoo5jjwkDnkNqDvMj4AyBdnf1Jiwt8cEmJCe9CneBwenHG75YNM9RmKZu4",
  "key27": "Xmmt2y87FhvqZNT4o4wDFpiH8BsMDM2QDuXaSKbHUKBF38C8jw8e9EWq7qyy7seaC9oiQdWECRt9bgmo2YbTZse",
  "key28": "4eQ9rgscPscbaH1FdxxYJENNcmr5iWs9ZbYuiqtAkF1GobC13ZY3AC72UHDf6bwaXRYL4rPxymGBpMmWtEByrxHe",
  "key29": "5BjXcpmp7vH65dGxNCFmfWBELCtxpPGMjSN6zwEiGy3gmZwqTPQyFSRBERPt1vvnNoVh7eUPmEbhZNVgCcagXH2v",
  "key30": "5tHXETDeinZxrdxiexEXLWRFHWHDQPx5asGtkGjtqHNHXepy91U92pdvp49GGhkhgAtQbUMbCYtwtpRBS5SLFjhj",
  "key31": "3yVLG144NXPzTstu7nhHwLuP5pknxh2fcyFEk5zsMJ95NLCaAosG5ChSADcfThT5FrJf17Q84fvK7JM9x2nGCitm"
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
