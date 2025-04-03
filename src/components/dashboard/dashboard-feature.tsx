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
    "446Pe2YujfpuwnvQkZTDbaAd2UyTHkqZRqyxg8kyUqmRdLJ6imUdhHmRR6ZhPReNRbk76a9keMZB2X5oCqygK2Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6QF2xxp7CF2WcMZEXCWz6KaBcV3TY4MUV3dFaHRWWEU5J4wHap4PRP6pyWgxpLWnoii6WQ4NDiXzB7LZtjT1Dzr",
  "key1": "2Le7Fth2L1U2MKAtKENu3Qy3THqQhhE6JWHGn5YpYG9KGR2HJxo1rurtbZsDygB2bqkVwQ2rrShiAYmkXCksXx9A",
  "key2": "2Dr8whgtZmVCxvDpu26JTLSeTqh82PDQZdjoGwrx7eeny5LwojZWAH4L3PS97LmdtnqtHvtZxY4bkUedZgvy2HXj",
  "key3": "4yf6o8UcS9RcZ32UorSFsBtBeVrc2ciTTB5YDgdwv2m99kWoaicUTwqy89X29J4de6mmHuc8LveGDhbGb6yLM15y",
  "key4": "5JTZ97UAYc8ptD3TTWYvbomdzcEVqFiLz9mwjPWH1noiQx9StDaNjsZyEydkeLYCqTLA89eXC3r51kAQ7JN9cjUQ",
  "key5": "4vDEsan1vRS3sDcULCvZQiqBd9Fk8K2Puj7wRxS1EhmthxRXbEeKKxZjnhAuzLdcEfbGr6a3WrymXzWSNYxMbzC",
  "key6": "3bmt4TRiqmNpji87CaCDoc9XMzVNWKVaBcq94qRHLm9t3aHuQJPasfGKT2buLm4Jgv34sSWb5DYueuQDN5xMR2Xo",
  "key7": "5B3kw7mzeuqBaygtR5ZW6gWZ63Rkyx3L4mALt76qDdE1wcJek6WdmeJSgGsMGptYDAu1tP7aN6XWVpYn9sKzw5ws",
  "key8": "2VceRvMVPHy7q9umQNZ1SKHgAHnnPYWugeS4gLVSY9eFCnM7vA3yXDEWHLrLo5JKmY8QYEBzpautUoHMcPUgETQu",
  "key9": "56B3Wgo7xSDFttLHfeLRywDxKA4tw9e23F8Zewyg2ScjcSDujs56sbDkDe95FToHvBTsgaGVx4Q9yNUpLCRbExA5",
  "key10": "4DSCDc7VM1g9ix3buuRAyWSzxrAYHUec8be9cuuWv195uPyxnpPUx9EkeJHqLzHFi5JKdHGUczkAS9tTgjkpXgR8",
  "key11": "3qkEtUgVdyMvuPmN57hWUjqYB45bcwJVLyWhgCgJ2QBj2qvazoXsrbJGK5sKN2DUYEoukJQYNTivsR6BXJBbWX1a",
  "key12": "2TsY2eJD9ffsjxYSmztX8jLYgA3ChwDu2xGBdBjiA53T6mEepGz1bBEAAoSGxRyRs1f2p3fMZSqiAixbgM5KGfwo",
  "key13": "49prxv5GwUPzfK6wHHrrzDewfzPU1pBs1L8tPhsaTfMa6KdAV1gXCoCkLW58y4NCm11f6xKGx3ossQuMyW1NzW6m",
  "key14": "yFr36e794ivwE43RrqDYejn2by1dmrMrsPaS5M2eUpjwEFb3w2qcxeqWVWTtMjwkzCeEVYrjALRaDWWwLCBSDmu",
  "key15": "4f15quJYjiAYTzrHHxvfXuGTmmdkY4UrCnXaxTgqmFVFp4wXypYFLq15EGNcNxNHXpYCY1JQgMKtWK4Dd2Fn31Vs",
  "key16": "4L8NgxzafeGXCVDx6JfhfxNYG6N4f2Bo7hBeYbUjTrDRfQBnRR5n1KY2ogmy8iUsJRaRQ5FfazG3LqKUjBd7B66A",
  "key17": "2RgXTEsMbmuKNQZX3YDd7787VS7Mbb73y1MuaKx39HkCRhZiEb2Gbimd26ALVwKhzZHnGGZzH9qpVVn1AM7mdz1m",
  "key18": "4GjT58PbBdkpXf7hZgWk3AqaGmq6GKczHzWvsri5UwcM3JNyHBYRpQTAYzdQRCAUkbxim2G3PSYo2WYxgDXWC6vp",
  "key19": "2sK3akWj772MSbRdS8iVHdQUQaB1tEtCYfdkLr8shkhC4aGQScVTZduJkJVZicxhKtjX75PTPhPaP1WwH6HnXzc",
  "key20": "2jwgg87KcDNUveNeryQyZeGkQnVqGJbRSJJM18MXh2A2z1i9opTy3inn9PZ5h3FhABYgXawT1tzHcJ3QS1LvGsjJ",
  "key21": "2HnxTKVxZYeXYzuh424EBZvCC5z8JMSJM3uKY45DmBVyxNVdCbYkiSEKqT5sYRFQJU4AwXXdA7UaXcRk19nexBM3",
  "key22": "2PWJCzjZMaRUJoaDELxdEkSyxiDWq256KXTMpatQwS6JyvsJfkZXbe8WnYB6reVRfARVBbUu9eXjxasocruByCDw",
  "key23": "4PXmPBw4192vpv44Cjy9VYp3Z6nkWLDb9EMQfZR1CbXxQ1GAeRtBFcwMubU4oy8pbfquvWHjkAUMwYimyYPecbr1",
  "key24": "63ry3F861JRoYWZX6QNNw2xnKcYwsuogcU8TFCdvtXpHuxLcrSarXANQ3NoZcjeYhKJ18uKokhHawuK47tBcARVd",
  "key25": "51JQa9zU9NNhgkHunA73Vz7WujxyGmFRwCUbX45xxrZ1Gc4w1wvLp4eE5G7gc7wcqz35h8USq5E2Kngjm8EB9mxB",
  "key26": "yU7UtN4r27aAPSRT4fLgXGVmdGJKTkvkqQG2MuV4PQmPb73x8F8tEC4vCiKxeTSHRXw9oKdYdjCmTGiMPbS3tdv",
  "key27": "4ne4stGfKUSDuifitNELFnB1xeG9SwEkfZEbJ7JhND7JedGsQkL4k4VigNAESQ9n5q2givkmYfYczG5UPqoGT3tJ",
  "key28": "42bXMrJ7s47Dd9Lkzi7wb2gaifGFwupMCtECLwVUdpKtChBmXYn4q7gbATmPytjfFG4SteVc8XwWbvWHa2PJD7Hk",
  "key29": "4wN85p6imtyL8pd8221AyptCJgWSzuR3G3DEMTGfjQc59hnb448A7ZMQx8NF375VD489N3oSMeYUr5vXsZrU9DZT",
  "key30": "4PGDUJGXueEk2hw4ugm4R8ifNmiQ6E7a5TfqsMS1ga517yLELsfarM73FBtRQRHAGgqL3YDvBzykyKmdjfGaq4QF"
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
