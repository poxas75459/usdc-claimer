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
    "3pwWRC5dznQk82GTrkLvFRJx1rWQvBdotmesGbUpEYq8jUQgQ13uGFwLmqqK3oQ2DWVc8kH1v4q6VG7YsrKMwR3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7dm7b24n6pVeRNLXXmTcKq2eSjg15be7uskGVSEDLBUBwD14446cFU8U9Gezxr3dVpfTA2MQDT42RhpaToYkpW",
  "key1": "5xDJQersERskcZFnfUh9DVwTyi6HLBq3ZrYTBBHLGVB2fN79gWRKcq3rmkEt8bmKZqv2WrC9US48tT1cdE7r8y7g",
  "key2": "21gbwEGRWj8Zcaa3CSREBbTzmc8dW5PG9KH3x1L2UZYkKGLtASpUk3mvQapPsLTVY9zcyzDPidWEW3k1JLCE4azd",
  "key3": "4bgXthqa2E8uTKTbkgt4kgr79F3XNeVmc9L5rz8Gr1mFNKt8BwU21PakvDjGNSB32s5k5F8cLVXWgXrPqatP84cA",
  "key4": "2TxcHK6w8ZkQbYt2k34PC6V7fXqkSjwMRxe7oc7cyzVr68udMP1TdjKrMd4hFPqTLc6jvSwz7MTieuQgPtjKPZSZ",
  "key5": "5taikpQjQ3Z1jeJWTGYompY1ikYSHpFC68kkq6A4aJNrpXZV9AQePFDwgGGzxuHAJ5kcexUiWjsZsy3Jt5Wg9dc1",
  "key6": "3iw45PL7B9eqpd2xqdo9hamjeQc125efAx7HcAHXDrHx1WKAuhFmFA1gE66T98bRZHuuFTAYFXSQMY7VkkcQyYLT",
  "key7": "52Xq4TVLxmQWJk4G22ypNkr9vjABud93J7HMsCRS63UdazcM1FTMzVCzQQvTnZSCej1K1W4VihQwQXQRa9sJMC5",
  "key8": "nXPKAGEHZmNoGcHLDLgiDZN8V1JYYnGkzFVTDowLnd7EnBDLawKBnZUcUFQq94nXbYUMcmvRhFGpMSgQgAccXJ2",
  "key9": "HgAmTa32sCBZEAH5DY9s1sjAoVesAgMsVXzLUuQ7HdVbKD5f58R4zRWQzYAn42noA5cQivekN1mkEMGSSMPRPu7",
  "key10": "5CETcwC4HB11La1TCnthJfkwVaDyE9D1XQ8qpJqpbA1kQFd5PJ72Jk4TpoRcyXJhT1nGM7Nu2aHiwU7A4o9A2EDR",
  "key11": "5yv915vcdFXmq6f5Esep8U9HLKxjeh6ATFP1NzSk5JnPnYZ4p6p2xnkFSDWPViC6XUkfwzMLiaimQTr5EfoHZDZD",
  "key12": "3PewjTeKLF3zsQmjP2HfKMhCJ6GMPmwcoFqragWPbdhfwbDPaLShUcRRB13jWjBGZXwk43qgyK2uP1SpadHB8pu6",
  "key13": "4AkAkwD5ykd1KiPW7o1xgBWcC5er2RKtUX5cVAz9h2Hk1wKhto4v3u9tsLe9qUYMJ1PBqRe1ET2Apw9wuVtP9s8o",
  "key14": "Bocb7KYwTWg9De92tNu8HDvAW4hE1mKjsBbJk9XmNSFy3bQViRnGyvMxkckWSXPr53yZfC7bFpEd4hP4na9Rk6N",
  "key15": "35qMUnkFXCVT5ZgEcemB8RfR3X12iySDfLKVu28ATgEg6pacZmyC9xWDN9CbNUHbmK5FNqA6fjvTA5CUiSQd7t5h",
  "key16": "46rhWWbjt4n1J4d2kwrKzpHavbosUvQvM2xscZvgQqb4sp8PdkPMCDZntw82Mm44ixP62biuaQiqYoWMbscMTSFK",
  "key17": "4gVFD2cmkAKEqGuddYkVHJoeLBBo7drte9TRPmrdstUfKVLCxwy2s4sfeXjFt6uYG476uGg6NjgFj4xHvfYUr1kg",
  "key18": "48cbzzwgXk932WCQYmy9knzhmAU96oME2mUqeRki9YCtLaevNZyzX29CEwKQcmHmhnsBKgAoP73RBnF2kkeQTMM2",
  "key19": "48ibdg3DBJdo3X7m9xVXRY1SZzHSFcnxyxC5s4y971BjCnJCt7thJ3tqnM5sZm3p1dAC4zz7qd7rRUuRT24K8GQE",
  "key20": "4ncK7y1B1iZTb9ZKauTPUP9WMNcCkSrb4TkNbcvMsiLTZkVWe79yT6tPkyU8eNib4EWTrgbQ8zPQ1Q54J3ZLdpj",
  "key21": "3kRpVPKmvDPund6Bp6W9m4ZUMLYWMjoEYrW5KrL8hYTg3zUnHxZp2aBVKcn9haR5eYtG6AQdVneZpyjAJdM7vYuW",
  "key22": "23qNd7XZH9GAEmSjjVtDH3DhkJ9jHzjmw6rNEvXXZHPeCyksnFub7LBUKqkG64sZysovQP2ak3sLJGKC22bSiUa1",
  "key23": "3XuYepwWgkfWA4Hth69QDSTXQc2ymMKrZTX8kaJkUehR1qJkyyKaKfX2pZBHuPwT84LrsnxTKgLi7VXEFRCZ8LGN",
  "key24": "4VgDc9TSEtebuJ7oJRaDg4bWxfpyAEX5HT9oyN6HjKzMsrVEKoeKw4q961tjue5nnQKaMXU1oX7CqCHNbSd5wbYZ",
  "key25": "dcPQrhiWmk9dWxM2KvbAjXae9HrE8eMRudNCMyixucwaN6RuYManhYmdguCKWkCTaUaa1cxitCSJva4mDLs3ZTV",
  "key26": "25vV8T3p5UYbufemz1jTKks1mHzaQA8RpMc7pHZnf5is9DCSe2ZADFrb3U57eSGt6YvtYFjMeTJCzjfUDLKDPg5C",
  "key27": "3j2gXMprev4GAPFgmuPMQZ7fEETtz55Y7bRzCyzHNZDmqGVUXDNgGhLya3iX8jYsdXJzT3y93s22HsrhtGRYPzHD",
  "key28": "3PBtvtSYbcSgzd91njuYaxZjSrEHWT7yW2USX4HM1eyTed1tzQ62YcowyXPo6bYnZo4AghD47hsiN7zbGWgkFEhq",
  "key29": "2jMSU3EmY1GzavPxeb1du5vMFsa42zpRTiUJWxAViUb6hjNVtaMPqXQdQPFTDvSYFUxQ84iHfzxG3wWM9YRASjyx",
  "key30": "2UJRhf9kztDgYqxhXmGBuVTL2xRLZ5zh5L12dohZEYTGDFz879cgGiW3uHMaaEiRtecbSid98X7Wg2d7jh6ZdcBx"
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
