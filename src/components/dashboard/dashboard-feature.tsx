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
    "5NFHDoiCruhaXZ9ig72QB4QfTEgZwKjzgFCHPgcLd9dCdts7QPTYQEqkjnTL4cF9SkDVswzxiBFWgd2nckX78XTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y9ycmGofWrZ1w9v9QApEZGAEehocDU7Ho61HL66AYRzbkHDyYKmNXEf8spxNW5wmi3v5NfSZw2C91FQGSTPnrfB",
  "key1": "4EtVnUktYLzigfyBfdew9sV6xJmLvpXBMeC8yXM28JGBKfxaqvChGw8CJNDsLYk8qgCMGUMRAT8XL2XSW6e3mdBz",
  "key2": "5F5Y4EwgAoDykkD5EfwVX4VQSvoruahg5vFCDnfRuvfqC7Lad84KX1k2SE5Dy32nz17LYer6WZ7CJgWHtL6JbzL7",
  "key3": "41GZy7iqkQQ48nj7whWPW1emEgaKmeLTYm9qkTaayyyLjENR4NXvsZnBcWrjkg4Spd1U6sQeKUSP1ux1r35UU6Ww",
  "key4": "4bc6k2V2QqLPf6Y3eFYjXwFH8MT8khxATReqGeufjC9SESthvaxzR2LUPWwAF1rCZse3L1VVqHssJetoQixkxe6t",
  "key5": "12jzZMBtXdCbxfkSpQxUKXSAcEeZbfBhudtkhuNEczcHsAvuJJvUQZVvqXbVxBGzT5DAXSukn2mTsXGomWAotQT",
  "key6": "5ZD3NN3dFXx3t4n8sRpFGg9FweHn3HZeVi4Fyc8buW1uWF83jfSb6ThVx6YMmmT8uM2VifZVHGD9QoTAXvZGWAtN",
  "key7": "2Yce3xXptC2ZEeH9Dgh4W5ZAWRo2yVZXA7yiHB4E6yNA6W2gztbBjvGCFxDrwJ5KoUSr81rcs7pcfQjf7KUsoMe",
  "key8": "31rhx8te3iuCXHZtMtm1PavRqBmBHPoDiaNooviSJDxYt4eKLiSyL6Nz8RvGHyTwMazK8UvuTvPPQCRnPYjdCshS",
  "key9": "3ytUytTh3fXcbP7Yp6g6RBJkoN5gSkddU4zAdncw5nA6BU7ADEJ6EBc7LCev273Yb5BP61HKtsFgTcbuVHW65oQh",
  "key10": "5mELmxqrqMvnATjLFRtWKxwdwvqeUKiwSJWGem8VNw3Nczf3QGxMJdgkXvoFdBTUWDgFcNWFm6B1fHtLigAy4ZhD",
  "key11": "66eqJyBaiYrvtdc6fTsdUnps4f7AN8ouWAVHjA4TaX879faH4vEk2BxP3i5gMAU5DZ9XCcREnZNEDvCwuxoEUh4n",
  "key12": "4Jo18NBiFQnzSx6qpn5n2Dw8yopEBAsxtHEcb2oGJTkt1Jfj3MghYbV67Fdh8gVHAZVRtwW7krH4chCTJVV6dsCu",
  "key13": "3UoTmLz9cf3Yaoxd1VWY5WN5CgJqXH4uf1UJppuRi9QVMU4oYxHBUMsXa4ydchTrGRdyidMbme4zMNZD9fd41EDE",
  "key14": "4BovVup7TxxvHCN5rRqBEtv1286jPvG15yzn6QEnxUBjXbgjTgHt2GzDt5TGaTbj31Unvc8EVGeEwFEv4HZk5E2B",
  "key15": "3sUyLauDvXZEL2m6rJBcz432xHn4wGWQBNoP2VoG4rrsX4dqUdf4qLX4Y6TB7kFpQzyodgceb2a9zvKLC9wweDCH",
  "key16": "5QhWU6FBcB36ZUJUhNgxhdnZxrqjGRPN5VeEFqCNzL7VXrjWyHtRcTzDRkAtmmqG8BKivse63VhByEUnsQBxkfuz",
  "key17": "5jmZJqu7xQak1gR7Hu3gGtPjHfQiJoMBDnpkhFLwXc2HQkcroX3UmLXM7iL1uZbveasj6KTdRtpKdmgLAjxb1gfM",
  "key18": "33sDBFtqgR4LKL5xa3EampWnUhXCK72uxj8TirHjgL28zWSX4tBNZo7AgUM1vmqGxzr4KG6ex7RKVpg5v2UtKBF7",
  "key19": "3awRMpSQzTxKFJq5aGThMKNQeiWWx2xfUDRHhVpq4nwoe32nMq8zjGRcRHz4eKts6oXq9gSCvge3gRgynFjPtYhF",
  "key20": "2EHa1eSzqLa1PVUTmLJPHiYuXqKq5hwVJksBWwG9RLgxcfdRqdw99zh89DrqaP19UaKFEvp5u4ZUEuxzbyjzZpgK",
  "key21": "4bAQU2fqu6e6mjk3bnZdkNYW83UrpyULVZGwyATEdVxeYAVNArzECJC8Uq7kVhH6SWvBbrQjcxc2hwuUFgyG527",
  "key22": "4daxHbCPZ88Ygq6ypxYn9b6DatSL32myWeXM6vttaDbfmRTa7BVtYgpz8zjaGvxoKjZemFrpWHyMfzYqcV9VdYni",
  "key23": "3aUzsdvytEigXUuQP9Bu9YhK4QCoQEqiqiCjDTE1t8KQgtRqzzrrXxkqXDq8juS7APxuRuus5gTY8hRZr9ycxijC",
  "key24": "4wwtG7fC6UaSwekMnwQuR5hrSjYToothZW6qaceizRNvBdwsS74mhBUbY4FY5hMLTm3f2bbhNQwZuWZvkZShTMZ1",
  "key25": "5eF4ViSD5PPRnp8ujhWAwkQW7Kf2p8kXLFRVQjU39CPYgEWuhNaTqA88BaWXMvemCR7mieL6nWzhEabkP8nLV5aj",
  "key26": "4zKmBFjN5JZU4TPnLCYEsTvPaDJy8jN8pcfe79DfQkKWSjVdUJub4qBz4a3ekES4WJxyHX5iRbwBzezePzPvGipP",
  "key27": "3DWAmXD7w4ZHWLC19bPzeYsV3VtXcQEwxS6iKjYtdFGbjBPBtt5TJHLusXbXbnb9SfWxC8JgWDoQerN9wiAMoPAf"
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
