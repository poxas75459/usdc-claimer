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
    "4QmTk7Yac3xXKNBBGWJvQPSnowiLWfh4uCrKgBkXLXLTGioBQ6GksPKnuePXbqSZ2vNGZ7yUez5hacQCRgCh1jaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nutQEPZezmUQnyDK2gpJ59Tz1e3N36uCrSCunEdDQnhi9D6q6PYWMdgm3WKRHZQE5aBrqkyHrBBH4RMHDGAxASg",
  "key1": "5L6ySMUcuuD8ndKwJ6szhDr9m6yS6tWosWbxXh3SQfCSGLGD3YptKdQqmjroeyTREtuJYDhebAH6GysHh8xA5CNm",
  "key2": "291XRDSkBHisDHcVL85YpJFxMJYaqduBbj6tY7beJw6b8BE3e2j5SxBwQLKPGVP8V1kyxPnfKuQHnW5YDqgaeMY7",
  "key3": "26fUU3MbYBFTfkPtgptsXe9xPFb8cywJQhx658RkCiiQa4CC2bGVVkxUHDVvsJhJUxu8aL2FPWQfVBpiHWUbqjpv",
  "key4": "3VrbyaqzWXc7turU6UnGeFRt8ydeUTbMhLrYyav1yL9SA9LFNLoNgesGVXtUo2duwLS3Nu23kDBAUuagbSxvwbPn",
  "key5": "3hcyYhiW4Q1dyT8vNhxKJ2zSqtXx2VfT1xGKZXpfRx6p9YJnqhC153qW8YBB5hZxJXcGHfzpTK22dGmbyBZhdcuc",
  "key6": "4HyBk2DsoB7dEikY3xzFickbiNE9xTcypFLp4pD5cJPQoLAV3xaZBd6NUAzUzAzwhmsx2CzeU2F3FXntb8pqH7qa",
  "key7": "5DD1svML9xPSx8F9kkyBbU78xRXcpqM2YunBKup94w9R7daV4s1iw2aceS673aMfwCw9BiDEYkT8q76Bf5V9iBAc",
  "key8": "3B6GwwQFLNWLtLGPr9uiCwruh8XACQ3eaRWehmm9btfLrgUGZD2ymjWQiijMdTBqivwLB5oy4Q4785sz81gxUVwt",
  "key9": "47bNp9BPgD6jZUaDXveY6mK9P81isVHrUgJeUxJZjJ73qwMAeXUoi6sjFQwn2C2KrQ3Btfc3hqTH5pXbCtgw3oiK",
  "key10": "58GvkpHgYYdYKFE95ggFB65dfn4xniU6k74hiL2DE4RR7qsTP7Cfxy9hk473NfqWMwg1uuHnUgegwwCvTWf2GNpJ",
  "key11": "TLJdSomr939tvNtM5KwV2z7wxLXUANxhSyg4HvKV6HLsqFd5qCW5BSXgZHQazXGEfWK6r5mDUr6GvArqx5xpK8c",
  "key12": "64LqT2knvYWvZFu9Ks9DCvTxNndFrTTxbWSj3Jv8UkUNZUJh9kB62SkH3sWiU9W1CUG8H9n8NaH72e3hkukJWewX",
  "key13": "3WTtEycq3EV9vVm87Q2xLNNS4kcH4DyQXH1kf6NxwP6p5vi4mtTdKiAY4qf1nqcxmpr1vu7xSvzWGHN7iKHJWYKE",
  "key14": "jd4xg4J2eDTVxbVgykumJnjdQBb8NgAMuVCpmLYm56uQapM4aELBZ1Bt1TpyAYHy3hE42p6axYqgmiqxhvDJLAi",
  "key15": "4vP6UJgtzSb8BgcyEBbHZGtTSUCswiNe8iaFxSUhjynYGFNXDPeYdzkBaCkRCBnMQtNLUn1dyPuN3DQUMd291LnU",
  "key16": "46EsWNibjgnAZi2EQNVH6T82STEFCN3zHMXqj15aB3TpSosvetyqXFez8zn7vWemxMtpMqEy4tFL4pQoiHzUMzVq",
  "key17": "5WBDGjTN6w2CVV2PL55QHbngZHN1rvdUh7ohXLbzMiFUcbEnAkBTNHL9tFzrJtCtoiWAb7tCpyb5C41aszF8W1iG",
  "key18": "amaFtDi8UwvMk912fUVWgXXiZT5vZnUpmsVYSAEF9qM3roShu2wJHYAUH2s3ZCvEC8Sz8rTqvpxd6PMcrcfoanW",
  "key19": "49oYB5Zz35tcsdpXEbE9VksJJzrMVm91izg57DWiUdyUGXfH77L5AvizRUiHCNZSBLbA17bdbv2x7d5CyWm1QEWo",
  "key20": "3MpRrNaZdDfj1gqSAM9kZLnYZRzT3cidY7PbhRd6dNcWdLDvxxVecPGkGWjvMyrssibpJCzEiJxF11DLibZCETQt",
  "key21": "EmoEGbCJqQ4KJVQkBfe6MkWKM2HiCJykTdkAkR8TQSLCofn1fJiZ7rpkcnYdtErruPsFcqnd4r94jWtcFjH1rKo",
  "key22": "Kvv7Wk2oRvLHBArdtq74LAWVwtCkv4ghNmZqWg2RkMjP5eNbZnovnphRBNLWppTAsGWb7zPcfimT2KRcJ9EWV8g",
  "key23": "2FPtcJMx5uyLbEUVZuaHPNj6ZxDp74zCwg6aPzPKM1rZc5VDqbSVH7UY7Lepy5DAz5L3HmKa27S6viB8BJyh2m5h",
  "key24": "4mVGLULmwwb7JDAiSDu26V3Dj1md19WGUqkyKAH3bwykpMCPUmXg8Up8kMtStKDackKZyL3WnC7MFk1L65cpXEC4",
  "key25": "5MfFEkDvdjha8NKbGM2aeHGWucqtfFGo5wrVCZbwPeW8a11ccgZAqRVzvZAxfPZhP4EPXcn6GXhSQgRaDNmSgkZx",
  "key26": "46tSzG384Vy4Bb3V1Cgu1WwJgJUTSkoF6yiYWfzf7EgHwSrX8niS3YNqi3EsFVe8saAt8tFh8bXfck6a7ymaEhph",
  "key27": "3AfjoyhTi9LUiEbgBvvT9NgzSgL9j6UdV4dxFHWWc2Kqjh3Y4qVUZH3gL7f5Z6VsqpZ5U983WzVigj7aVg37UP32",
  "key28": "2VA9RD3LLFME3HuZ1AzMbCRuJgCucX4SRcM225cvzanPaXM3EPhhwWu8VgC9zHzCPPHjYtj7mDWrd9BkYGxrCcCd",
  "key29": "53hopyYZrNGt7UDn8yo3RxUStwEUyTx3xqUShJPtYGsaoG8P3CNZBoeHh3RgQyVPyVSnNzceM6w251j3W4CtoKCY",
  "key30": "yeHcKAF1pn241rnSJMBz9sb3KSuXJQFFg6ewJDJVvVpjDAw5Lmih4Tp4XYvjYFYWXyrchQ9wuqCjYGnRFR3R7kk",
  "key31": "24YUByDixeo8rK76TMC5JfWjS4x9v2GAefVKd6XESW3eMsD1rVHsCM1n2ZgwW8e2z69hQ6Tutus1UxXa1hWSjC2u",
  "key32": "2jgSwRHehrhXMa3wHPkUX8cP5JDsijSnZ1tfVzmX35XsrEfKwHGUDRNFA6urigTHegbdfPDupvLnqtAz1dx6Eq7M",
  "key33": "2qGJboygGPiMU5ddHQFEXEYeAvRC5KvtRfYNThxcwfphH1R4xhbp25c5Q5ani9MwNx8xVLDZfHFYbprwUqANtcHm",
  "key34": "4AbkpuXY6JHsbJR958QP54JiNLwuK6tZDdMwfZoeEyuufvZT1nwj16VKgneYg46iFg1UXCuN5EsKs6aBcvrhcBZ",
  "key35": "59QFeFrkHEBSK6pGgjTHnk656S1igdaRgWtvuNy95yJ5BZ7FcWa4d1pcZBtjHjK2hyhMobsuduhWManQ4p4DvL7o",
  "key36": "28ABfkPamFx3tFqECZm3fzMJ9nDe92JAGPqgysBSjAn8ZYHBPUVdpmjK7nrm81wQpyWQ9vngx1Jxug3fQKS8h9jS"
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
