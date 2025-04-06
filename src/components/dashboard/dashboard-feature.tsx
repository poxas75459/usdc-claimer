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
    "2M8ESBQZC9MDA25Zpdm72aYMxeU5ocFT6351oq5oDMspAMJ5PYfJoLkPARqvBx3kjchdqVKUBopqscW6KHYti4wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8YXkaEHLMTKJNMBjwARA5EQuTVbWwie5x8Co7TBfghJMTgXAu6W5ethfR7t47EVNDNi9a4y8VE8kJxq8tqX7WwN",
  "key1": "g6J27b66QrcfjPBicDKJdiX9TgCtgK5fMhqPARtiZRBWKHoNP4Jniu9mHn3MXG2tD1rzecgnzP3sYGGVBj62ebA",
  "key2": "3XXshtUDxPxfeyZubeBr1rTzsw4HfHXPuEVttpwqCu9Zj7P8KHkbok3th1vgCB1asc9MsuxACzvuk8jiYTvH3ZUV",
  "key3": "5F9WF8jVxJijmTgemqJYjBZWagi8xsi4P4SRNN8ak93iWMSzCVztURtXsXnGjMpLGG3DXJfUFzp4LZNU9ffitKn6",
  "key4": "4NUDip9G48oSUgP1cYwHamk9qJkftYqf655UC1DcAFH1WjnxkECPfvciG7KywLnzFYzrGV1gymJmC6CuGsQFR2oJ",
  "key5": "2NeqnExxGGhQBe8tTE6hF9aaB7nVUhygPYCwAybhdMnDa3ykdhTPmKyFzcYTtqQH6WthrnzLY6oTLPZvCx8DgYCE",
  "key6": "4n7wUHQA8hQw8eWwdzM5eaj9gTP9GoUN7W4sm5DLAiE1C6WspccvM6oDHwAnwxvUGc6Dj9DiC1o3VgdneYtA5iRc",
  "key7": "3AwdaggX25KGgJtBNurRqLDwJejrvn27enecDpBgDDL2aeeT7i6noowHcrX4Bo1uaG67QLSQzM135EKZfdYXhW2L",
  "key8": "4Zd4nh2j5jnwMCb5URSn7jV6HBEDyK647KqarqRVwcX1j6eY6pWrT76w5RJqNwQY6ur7D8CUB49RXaZ6bZeEu1Fw",
  "key9": "3Wqe31jen3brVCeTCch7scHkpnMj7UgTu1dRh49zrGSbkdTsxTaYGxcxESBm6pgYRpzvzUn4Thao9oYEy8JcyUAF",
  "key10": "2mEQ9XzFknSH7D7rZsogeaBrmaEFgm697E9SwiNVmCJAgYwkx9VWSqsyrEncjEen3v2rMnjFioQKEQoRKZnz1s8P",
  "key11": "5xqfQGgxV4gdpyE38YorgLKutfzgS4pHFKqxUWpSfN5vHibm4JkiuR8fWPP5zhNbuFBfiRwAQ6y1vNQ4vwKdfx42",
  "key12": "3wpJ9nDn3UWw5EcpoT6Hvuz5SEaPLbScvPsjagjdyBkxZzYbR8yM1NAh9dvBePC8yYzuR9Bvrm4NjcAn1hQbCxf6",
  "key13": "2LbGdWaEjPs818HAN26couPR2VbnNE35ohVtAvtJbDTVK19octd1fzkTvVSjfQ8fCWcXysVTQL6eWoxRN6zroNqq",
  "key14": "5QbB6qBrrRt61x8FQGH9sgZfYw3YpxYg7C19CBZEukyu6qaDCGKE6NHKYBdsSubrTxWA93uFWaeXfrtCBni2N3Ux",
  "key15": "46qVyCeVj2khvxUTJP1s4F22c9kqw7ifiZ3ueFsciaANy3xAap5dDUJGNywpykQV9xE57AcCRx3tauYjyq6dWEMh",
  "key16": "2M9KewZRKVqCBx34DsF7EYSyt7eQNW6rhF7yiL1CHtF45SJzU24Ww19JbZpUHME9FCX6M4R43GoGrYa5bBJ6uTwm",
  "key17": "3utimn8qH5mQtW8deNbNE9Wxmix8AjR9fT3MskGQkRDaGgDVmPsq3vfzx6Sr9rcK3yggmzc76VBLCB6Q2So84oMy",
  "key18": "Vc6mrcm6Y6NK48Ziin6VUkXL4Vf3dJ1KoKfR9bKQKPncs6s8veNmD87TqmFazE8mMemt3NXPR5dRVanaiybUVLt",
  "key19": "2yALV8fF4x29enRgGFhc8HujtQ5jeJ7bLEdJXuNm6bjULMwLZ3xC8LeWXzks3maNceYpgNySQcdMT1LhwtWZioZL",
  "key20": "4ygo3gBhGLzUL4279n3VVnjmhgPuHkqXKQ5WN13WZwuL8ZZHovZ9A1Noprch3oWa7gjzj5KyqGdbApJKqTtwHf5U",
  "key21": "21LrsHC9SnCKMk34EUk7W7nvUP32dVfhVVdfjLdpnJtPU1ZCTRmFdC3P8Wju1AhXhpGMjVqnjRUgjhQ5cBVd1Pkz",
  "key22": "n4HugV3cEtkCTwvFVjuYN44f25sithKZAZrQ8ZaouX95Cs4uHqJrp4u9evYBXTpNdX4Db1a9EKYN8kNBUYEeedF",
  "key23": "2hFnc5h7ZFJGqJuEQYtL1KxYACDVQUNw9VGWsnn87hF9kh2xGaGAX9UZNp8qfX487s7rxAbxchUcJnVSNU2ahFHS",
  "key24": "5PHwNjqBJ9PdYEAWkJqEUAgM4iUn2WPXeoHniUcM5V5B4Kt9e3mG6ydtGx5S7GftU7CJc9WkQf8s65js4XYELE4P",
  "key25": "51Km1pbCBNh8tfSGRbnnJJfLTeiBu5im2dWjVJmbGg7UajgMi2fFuUfAPDh9HKouiXjKYVegWDphh7ByamPoVdgp",
  "key26": "4coKBTqC98JyALtj2pxqShkfpsh6eNRTn984fiRkXqu2j1Q9zJCNfpmZjhioPewDtvXrnBSVKD6HEW8bp7fGqq1K",
  "key27": "2ybrmfBDihSm6M7LkGyutzZ2dGDYk2skVk2BCFRQL8nfvEq2UVhRFss4xMJpft4K8YtZwNbiCuT1BsK9SLCNEu25",
  "key28": "2MUHKSG5HmdcfQWamSEYoTCNwhJSCX4JWD31hxdVhse2GWWaQKK4qGgs11TszqRjsD9H2Hevtv51JvewoeF7n3is",
  "key29": "27oRoW8HFaTfuk34GRt9kZ47xzEMy1GcAht4kfmWG44ARLYqU4xq68NruUZiBHYp6NXSA6BAcbjqYdF46dHhsAsD",
  "key30": "43LSNvgBnrU9ZGJjp9X9x6jhn3TwH5v7RcTZu5GGGMcry6Z8WvYhjAX8mxjysq51YDr21Nszjg2kvXCn4XAH4UWn",
  "key31": "4ZuFkUUvLL131SsWoSXvaKY8fgQ3mbNZG4u74H4wcaQPWxkoURreeweRN4oB7rWWBKmy1oLfezZyuX7MsBs9oAAS",
  "key32": "5AhSsrsG33d8T4RueFLUw87Z6ZTRhFKhvegmH36b1Av9q9zfJJNA9PZtxa8t26KaPfVzzoY3vu4dh5J5auNfv7k9",
  "key33": "rB4qwKi8EAN8qAYK8DbiNxKmS8CCLGH4XZtbc7ZcAHgw8ShHfWJCgiHuEGXj4JMSVU4ZBhcdwJssbAt8G62YoqK",
  "key34": "42vTzSGgpjnFwa4o8rpGoXnHVAQ1iNsAQihCvothKGMXQwVAtr25YM8ZvhLJtJu8joFvMExjEfJqjz6ZZxMvidny",
  "key35": "2qvoHrQeUHsW6UZVqTuEAbTJeRNkJXAcLupYTPMV3iAtPdYMJkARv7b9deX8rT9vQM84Mh2MpxhypiEbR4ut9i6c",
  "key36": "4HepBh4LSrJKD1YAUbyZ3eGUazUv2w49jCygVfyVhZEuqgDJbccBqQYj7XJN9ebfpWLq2ehCKC6iWmJNSDK4uEvR"
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
