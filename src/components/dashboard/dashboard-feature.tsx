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
    "2iH9qiqF3fv6VF1B73djyoikJLwPj524kMJ6BULGjG19haAJmV2eHe22gJ6s8KCn4txHAbPLjQQ7KDm4aRu8uAhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9Jq69q9V5Z8kg5q2KMhNgb5BRVfbnvFUDqU2jH9wi7GP4QdBQ36eBDVg7UazbBu4jt1J6fDSzeqiAXxe6PFU9R",
  "key1": "4WMkcHeceusne4D7yJ8j8TeaK7uGhuzqXwdidYJwoZYzGZqEMLyM4D8jTi1iAgfKLrNdrSEaca3LSXfyjNt9ajtE",
  "key2": "4oCZ6Aar3M7P6xmsDqN7SF9486bZvo56syBDg4UoRfMZyKcuiV1ifQGn3B3A2bfFyyVPib2xiY9KpPcQzKCSWeSy",
  "key3": "41ffwbZmumaVi5cQwcGW6AyEYjpCumFtd5st7LLmFMe2qBDoiQKEyCUvyQoGRpojah3YQtC8Ks9YcXrr4wxGuqm8",
  "key4": "3RSsoWubaPp5CViBG6wpjdtHtyv3sjxPB9R9Q3xjYx53ENKf1U2FkYgDKfZot2bSvaoktiAgxgQUmedkbceLnEqb",
  "key5": "2zH1KknbXTdtkM6JujNjLfdLmLUnQQiJLezb6BArZw3U7pXJnTiZLcb17bPzm23Uzp78fwXoX6ohUVmjmGt3N7CB",
  "key6": "4uzRFNonoWp1xZKJkoG6bubVMHMR4DHsXM5Af5uA9AWSKATcfSJDa5SHB3VUe53UyFfjD8WruFS6GY3LR691PJmR",
  "key7": "LWKu69FJKQJybVqJh7Re2Bhw7bKwHavP7dt8ggtxD6ADUt5TcAyZ7VHBGwwgVnZgjUG5XnQdDgnFzAdRg71f7KX",
  "key8": "n2a3zxdJZVHNNAk95bLxLNKK9xb3QkuPJaFKq8Mneukvd9nXRC1i5Y5MzAs5MRDkx2DVYyiEuJvjMG1AdEiYDk3",
  "key9": "63wqJ7RET1LbU2sfw6eDCeQQbY8VgtQ5kUEUkZAgFfJ4FZEm79t2XFFCpjLNXfy3f7TfiSB4MbvRYmc21yCjbUes",
  "key10": "3HGbJdA1cbWoriu6qRMQ4YjicCidaoU6wVXvWPp7fEisa94pR2hQ6m3TyUxusUM3eU6bU7DYicfthr9XzQ2DkeHy",
  "key11": "Q2hd1P7dqYcAYNB4VdY1Vzq7Nr7q5Nor4pGa62BzwgxTfHHqK5naeugkbzr6pivKCue47BqiN5cNvrHDMQZceQe",
  "key12": "vkQWkDH6Xcrgo5tYuKj3QLqHLiCxJws1CmzyiunXC6HTknG4ZoNzSSSwMZncKNPnRnZZ5neT6LjzJeg9XYYJvD4",
  "key13": "5HbK3btAiYWeqhZgWF3L7yrE2eXtBRRJSu1ASF12RccRP3DYs1s1S6pzjQJLDqJfVUCtgMhjpYmLsjwzjW532ApS",
  "key14": "4s5BkVZjebD326XDTNWvvQfNLyJcjhBsVfCRWEZYQ8PB3Rusnqx87zxJLSdYKdZsbhtvdmQUEYH4Pau7YwxLTPoJ",
  "key15": "kMmypiuxrwbUSjxrT5o47Qp5gkTSnUaWvtMxgd47XkWzrpwx6dGHS2yEmSCkgRyVZxkt7FVjwB2AyKQuj97PBGK",
  "key16": "53XftwniEWTxVgcZxP88UGCqf1r3jUQpVWV7ZmkFaPGQzihiGFdQk81Bvfd4iJk7jJtP3KHU1zBJFaGMVg6cNG4",
  "key17": "RSSX4FsSPjLE5QFUQxMZC2XE4fbKxcipUNVVXNfcSa87B7EPGsF5WHM9HVMQrDmBJsDXgqDCWgfavwrg15YaBha",
  "key18": "5zXRAuJ5smys1wuqrP8VuQeTusZCXtmQc3bH46Ri2ZwZpJLTKncqYM8SVhFMpmQ6u4BaQWB2MJDZPdc5AQDPyh3n",
  "key19": "2ewBLmaBUydLNQxpXZbGnJQNx7nnNwn8ReUUqVjnwVuLkySAWF9wv85kfmAnQ5DNQoWU3h4nuQEaJHA4pDi3xcT6",
  "key20": "4xiqHF3Yimz5j3tg5vXQuYxVLuetAsD2WaDJQeZxASXQNYuxk2AHDKXBCpqQzABMjgrbJWWx38kG8GMEmKJfMUTf",
  "key21": "sS27ihSkvTFVt2Uq5g4URD5CD5f1mWbTc9JFP8QfYPckDXU8AvXkKSe1t1i4QL8JxWX6dB3VwEikvnHtGk3b1LE",
  "key22": "3kYXgfYFHacSvgCwW6mJcYX9niMG5RGivZnqjQzCSxQ8dqGBxKSogXZqV6ftwcuERwtTXTCdsGfDCFscZjcuyxeK",
  "key23": "QUQpWinhoFa39h15jvJTBABHXza9WZXDYF8vYTwR5PjsGzKpnPqA24CMvoEWFt5TJaG6qB1xDEXVEAW3o5vvu2c",
  "key24": "4VntbvSEofi8844DGD9pYTTksGxUchVaZzkK4PV6xS69iPumwpC2RWejPEJuvGniQQzNg36YGyx6WPcxxgHPbpAc"
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
