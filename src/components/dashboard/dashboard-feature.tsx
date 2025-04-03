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
    "2XKe5wazgj9XmZxUB3AJk4PQo8DaXbEgCt6VXBEFdoKTG1DZRqRz2Tax1AYeCNL6don2EN2M3UnJDkJuKP3QoN61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GgtxWQtZqBdvhDzfGycptmVgRoDTqG1UpdbcDcmeu2BE2hLRG3KteKhPQ1QDVMcXoH6i34buRw3DZXk8rDgMGka",
  "key1": "2CUPYsgCAYjM61UQwLES9tS3ZVbDyiUYmdqBJMzK1mHuuCP5gnk3LZjbj6YU7P1qS6GtkE6J52KLVLwKBx9aTRcT",
  "key2": "3QZo5KNVwS7APCeep1HyTrDXj1DnkAAYrJ7Vdkb33J7iSjpSVdakfAVMsgSDyiWvVkK9F3mRzMT6tswjrPtzfnnu",
  "key3": "3zBbzo51F6LyRBayEMJ5VWFnVMaCL7k6GZLUtehKJLo5o1xjcvvu96gUbue1FjZ9EZeGQFCqoHf1G9NWTRPe2ERi",
  "key4": "2VXckyk6w5wmqedZepCN3WvA1jVjPHg9rcnbyit1LBic8Z3QC9sRCGxe8eyfgrbjiuaa74ggXZUH7fMfjE9LtVfT",
  "key5": "5x8d9GWzdFAKxUNLYnvRWUScz6b7XJyX4bxdkXDJxadwCzsg5FUxJXpgASjumTyPqptYRmV8E5BAUEGnKV4fbStm",
  "key6": "24VaXijcu7oFm44ahnsca92pBdaeNdXb2S3XXy8zEhXhJGSjmP3V4t95W9PbfLVsunriHPnZM3x6KuCnRvC7xiXi",
  "key7": "5HpR2BMKgnMNH5KKkWs6q6ymu9WbM9rV7fqMgT3yziyrJXoauhX1iR2PzygPiJWYh8xxDzZ6ttHF9d2BFRSREynt",
  "key8": "57iNMBiGX7Gn5dCsD3C9GBkCAKXTy9CDwd7Lv7ZW5QQqFW2TtAwR3Uy5UYp7fEdNSwtXDNHuTg43jK3cXj81Dg3E",
  "key9": "22sD4eUBFV853ZXAHp3JeofkbvopAA1JE1QfQ64k3ZT3EddbUhA84vsmGZRtKGs2iRa9pJRKXr2pU8VE9qVen7eQ",
  "key10": "4PkRgBT4mBqb9Gd3U79iigdLSZ2FNKjmK4iW5wBmwRPU91iFuiCjdA1AzvJngn8LNq6s6vZL8zCGc6AE3ZpQXKHf",
  "key11": "2UEBRXMXjHg4aTsrzvhfwtGCzF4jRr7CM46Jnh79nknav84hKP1wfYYnEzc2mG9342hWUWrjtb4o3HjC7pmZWYmD",
  "key12": "2uWquqHxtnHgDU3QhYbrwycGtvM5NLM52mPKFs8M39z3DCpDmAJQeKGpjWn8eypBbywEZtf4a21e5DvKBZR5gL7V",
  "key13": "2ZRZFxZrjmUw8Tvg1MDt9BQq4p4LisbptcnQbsP6unfrJMLkp6URJ9CrB5dKoVrJhACPX1j7bkr6qZzkdhfDr2J2",
  "key14": "5eBo6oMTbRPwgdvN17dHQHQRmhFEsnnqRyTMsQB7Dx1ihMWXp3zYMpmRFDaHdWMLLqPrk4dWzDaHgWp36ZxTx4jY",
  "key15": "345tNXCphppP1sLHLLHsKS388agMJoBu2erw3Pr27tQsB56QM42TEcyJSaFgYnG6yJBZJS1HzuBdCSPGNAWpLxFJ",
  "key16": "4XS25nn4y87BkoNxt7WdJ3hKPZT9JCoHh2icg7XjnCYABWnv98KqoPyJKJaMLXh1GynU4sMgyHC2mcR6L3fHZsmd",
  "key17": "3hbUAiqjFtMuvheaNS1fgPbizsjMqaym43Kcg5xN6UB3kdkJNyuWtXBWVmmL37xiQ8hs7jzn9P71nzSUgciw69eA",
  "key18": "2LgMTv3SxQEYcoVmda8ZEKCuXA6PPQaEEjiheZsDJUyZ6rzJk6WZPATWMqMHaMxF7iVZsWvkBFZF1XJNx8N87CPh",
  "key19": "7dHwj2yuCqJgdYQ4PhWu52SydekCpYf1L4K5kXr7FXLWG2RuTVuTGkxyL2TdETVHi4Bq39VEmnf4HGTX6XJ5Unz",
  "key20": "4SCui12Nd8xxXkC9LgLUNaedEnVFxqeeoyQkoxKN5Tzqi7RXhyYvCr6H4mvNoqgBVWNPFQDfQfkbrzCREYvdayrj",
  "key21": "46jqpmX8zMEbBL9PeqAmTtiVW3KUJMRVfJ9c6YXXtXXwRhpUyoGPkbCpjMUqLU2HbT6GUa3ypJBbLbNf3BMyKdXo",
  "key22": "3CS3EibWHZmbiY1aKMUCwDjqqhcom8PCsbprtYrNcwGFDTq6mr3q9L8mEgiY5vFDmh4EmjbqXQDEKwSx5rNzc8XV",
  "key23": "36Xb3QhpmsEXk6e9ERfT5J2LKedCVFetBQFyHT9UzJNUfj6ACu72DVUNCpituPAY4j46rrwTh4HFJdNq73rrUnZY",
  "key24": "aZ5FzLuraZna1oSA7eAWqnztVdn9egW3bgZQrYdv9E4ab3pm8rv31GVui5jDVqG4bCcVKiTkNd64C5mqkaCV2ey",
  "key25": "33DiFtSK3w2RkxT5KWjMojC7hUDQVWLL3iKgpvHZFaeTqMMSuGGnsJrBp4mnvfMkV2Ug9Sb6j3NqmUUASfGPY6Qt",
  "key26": "tM2JytoNusbnxYbtCVT7SyjA4gYM8p5umoU2iKLwEy5hA6Qai8TaRBs5zStAiBGd7FRHzpbmj3FY7UHVPDTt3c6"
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
