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
    "5zM1wokp4fivMxHMBoCni4T2HUYDGKU8N4urfDL8z2keopWZ2aRiFYnm2PxTjdHzYKQH8Q5eW1GCaVmtdP5K9MLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxV8qyEGcmNd7VTwxW9Tv3Kx9XJTWVbrfFtMbZNuA9VMg9XQ2jCSKYhGoR9bDuQbhDnHt8cK4r9mpMdhiw7NwoA",
  "key1": "3hVeq7EKENCxBrdmu6sn76QEeD9jukyPMxB5Hn3a77rqB6XBTYMJrbuwbBgMqp4AJK8QrjSdvojmnc5uSiyuGu3f",
  "key2": "5nbnFLKbjNJdhYvRkMfDgUKqMGW3EiDKhkE35mYMXUeRmjVbcsJZgHQmY4yRmLxxTMy4Wb3NmnhRQ3Dj53TojWCQ",
  "key3": "3XA9hN8AtiNqGjPBR8q74w6QYv1ymTwX9CcumKYwjLGKHfNXRDUwnFPoCmRMLQK78xAbXqSYqcWoGhQQ97j7x31",
  "key4": "62Nm18EkbiPEBopye6RUC7tfS1wrpC5tqHxkpXU5hQmz9gW5oGUbYRLwUW3jo5mMQpDZvUrhhwUMpsWQ7nT28dPp",
  "key5": "5sorCNBRXKJqVZmAJ4ECYCsEeFN65LErSX7jKLs3hBEr4vXpkBfJvMLP928uSDtTzg1rtpRUVNfhvEyu4phpfgUM",
  "key6": "2ezmNj28BM5PWJtjkdjjQSe6CfTWjJxPjajotiUMmRET1ShBga3DjZyns7QDvRa8ZpnFUAL93rjuzi38AXu6CJgi",
  "key7": "HV1F49LLkkvunegFEucgNdPPTdztKRuZp7QuwBMTYXS7UkokFUkHt18spAhCi9v4Jbt48PRYX4iT5KebmWCpFho",
  "key8": "vpaYWhYbSAHG5WrWAFH92hLNu9zBhYi9XTeUyekH9UqUkR697KCP1xpRCx4J8D92eZ4X6MyKecgUhcvtjm64Jcc",
  "key9": "56oXsnZz4gJwknEoA5QWQ9rRyGGdbefh6jHxzuymd5yAaK9f4hYYaPxMJx8yVKDed54U968Sg3RkrAhkutzmrZXy",
  "key10": "3M6gii4CU4KfZpihgmHE8A6FvwxZSB6DEAwVf2PCAYBm9WVmPb2kjQpVHhMbQwycz1eLdmrby8mmsXNmWeXjcWQv",
  "key11": "5yUCLLLF6XueL7vTCku2F4jhSo8QNsDgxEXwzEL2jpvUJqYKUELFtkbbPuvcMXpKRRYyzPTcrrzQREqjr1uLZ95L",
  "key12": "3MvGZL1qG9GBkpxHuB2UQWLbkFqv6TXRCoCdEzRiY62Xh6MMAMBvrwi9joHaEKHrMLiDSK6Lpjq99Vgj5KgdA3ch",
  "key13": "4HQbiJTxz2GfHsruLjTBZT3cT15b8PUXnArBbNzLt2Ks73yMnfXMrGi2b6uyUhPXPdHTWDLEpjBqdVT58YgjLgp1",
  "key14": "2DmAR3pTUArbNvbZkr1Y3DPsfiQxtp38KjhVQ4jXL6DpGW2MZDtxNcT2Ltap9bHtRQmw5KRGAUeamifyQ7JCohCg",
  "key15": "38qj7EnpLwPKT2op6z7wJrkqpTC5zN6hmwK2ZqiB3RgYvHsApPXW5yR4aNts6f3mdrsfjBp2aAaHDurS8mFwbVgX",
  "key16": "2oe6xBCmU7qjFqBnEufhUak4fSat8BJW2CYdBmQXBPz42YpMY4YL22c9FZ9zLAJRXVY5VbUroMAHY48u9UAYqn8w",
  "key17": "2SGhZfSyDGGowZu1yJtFrK8C16MxeonqSGFfk37CzJBgKwvstQq5aPhRnSGH7xHe7rP12Ewvnft6K8kbeN5cBZAQ",
  "key18": "8UopFzfJrcsKc3MeJz294kqgDdr9uwkVUSvmmtuvwqYMvMdTfmuqLQTWGsZjRCZb1oKjjfghKVkXymEPbjo9UtJ",
  "key19": "5E3ifpd7Qa34nkbjBxzjkBaCuw8ka9MGG59P3p4hMUKt6zvWXSbHThJyKZeeeCrNuCqd6VGJvS7HJF8nE22EspzR",
  "key20": "274XQwJLGYRimyife5YVgrXe3Wq1S6FtQ6EqA5udzibdSBBsBQtWXpmeqpqR2jJEXPXyLD3ykcf3qaGNFTii4F5W",
  "key21": "4eVwdXZNTu3946Xb1vvwoknRq8Rif3igdeAFLnPyFT6PWVBavvyQSePdAF4CYX1MP5fXCQWq7tKiFi6m4zmLQxJ3",
  "key22": "2gtAnfJCnSQ9kfx8YMpqgs1PNjntnqCezVnj2byNYargJZ3Rt7qLnMrhfc61u6RBFSemJZUH7UjWaQN3rDkfZxqB",
  "key23": "4UBW9bVa6km4MxS9UsMbdFsgZDfBYNo7CxRmGTk4yrEpvyqAhnWCB2jjaGczU3eJzBP8dqfn6qR1yZfkA8ZYWVGx",
  "key24": "2K4sexHKEFpiHY3TvSuM6YNaa8T3vR9aiqPaBmwEmRmdu22U2PrmHoyrUmyEBW7xj68u2uz3QXzvKRDemk63XEoA",
  "key25": "23JWxnxaKgMMzFJLSL9Yq4FQk5Sk9KMenxpfq3cp7zc4aT2sQN94ULUjP4VvffL3SPB4W8JhMa41S3gA5HTHK87m",
  "key26": "zYHrwNjR8k2NqXsz2UDCbNWJCxMcfai1RsSXcpcD3iCS7XdzwNE53QRUyK9ipTgpWRuQfEy2y3yuzE9KHnUS5WH",
  "key27": "s3gdqgi75tvrGLTrdg3Vw1Hmg1nWQAAZtjUR7sYLvtEM4nrr7Hr8DEskgRY788H8Th1W25QsuU4FuoXn2LUf1GR",
  "key28": "3PR4puSrvikJQc5up9CzxwhE4SVTMwodSGFS7vZzQ7i8pSEXNxnCrsQnfnWpofiZMDuF5QLRSXiGkVEHquw1g4yF",
  "key29": "5vws95kWKtS4XTvXhDkVzwhZfJHFtUL6RKaQhxvgbxfyGST8RY32vms8D6Mhi7rSC5wAZc9x2hkU7aknYuN1HGB1",
  "key30": "2731K1mFD1qgtMxBLT9RYe7MkZqRmUFVUNQMDHYGDbYAsTKrrMNF7LRAwGvUE1bgoSdRZbGMzqMiavMHCkaieCmF",
  "key31": "47WWFjU9RXJBuf3MiiewrorVoc6UxQBwFoejdLwFDhaHFp3Bt1iFQ2Jvmphop9vowBhU2aETa4Zuk7QL2nFiUw2z",
  "key32": "EFRfdxmwH4dhLPhegds4oBARGgJ5JFdbbqMfghku7VoyfEwtzCVUimN6DWqbquhLJnAZTzebYevCwNpHz1uRfuK"
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
