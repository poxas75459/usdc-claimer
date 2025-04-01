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
    "5q3fUBZPbTMkiPdaXekiwsTTL3Y826FkrSUHiNB4BhrH7vDAcLS2Yj4uV92eGvmrJo5wNi1cxNh5r3b8oBBVz5KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDt4QXa39j2yDK7nsrCv7VYPFmVGrVaeubxjCBmqe7sCu87WCvEEDbbehkwd2FSHywNiije5M583SC9wPNGaJBM",
  "key1": "3a6puxooDDYQpBwvBijeTqiJufkDwBJRwvSF9paXakvGVR5GuSqAPW9pFoXhwmnK3aNij5GX52YV6PUcDZLQbdkJ",
  "key2": "3kdYoFiXXQPus3qvYgu9iXM1iBDiZbyWGkvetBLrCftE3jgvrVKjwE4JY3xN9KSp7Y6K6ZSYFkse277H25gYw71D",
  "key3": "4X5jbjru2NzTbwArmasahKFzzxfmcDYxcSdBmTQ5zkmp9xdhByoEGvj6Xwv2QA1o9yMsMcWTaUwK59CUzVA42Hm",
  "key4": "2zSizLtYPdcJpsMxkUiybsKHJz9v9CQaHs2jbhMzJTb52h91qXdmSwTGz5F2SLQtyDf96pG1fZzdSnXNFTUw7YHr",
  "key5": "5TJXJ2n8fgSbkR1Mccu6rN9j8ty4HqJVMH3xc6uV63GSoPBzHVp1CQKEirPtzkHT5QuTeSdNtpT3Zez7QoFkEqeF",
  "key6": "4CFDqgwiFSTUtvLMPxuzQpfFtwJZ7FDcywcKpn6ug133F65aefFFRrWWDX1XbN4zy63xyoRW8fjjkEsgXUjf4gGi",
  "key7": "4F9wURZHa6xKBkXrdXsFin3rmNg4hhbaJgX6LA5ysGF7X5ENadHvkCpXTNUk8qHzvDGxFJmhtm7RhXK8Rduh6j4f",
  "key8": "4U2jxARVuHArspjGWTTMNX9CWA2gzhsrLeECEwSAwdLAF3qXn1YYJQKxh1eRiziZJDoZuyfGkysj9uFocciWkqJT",
  "key9": "89hG5TKE2bYKHmpwEFrxJ4R6k5AmMhLxMAf5co6wQxsYdJEkU75QGqNbJMe2uo46tTgnKucV1xpv9nabwRhTNR3",
  "key10": "BWkvcTACgGB4Ug7bb4mtaKGfc8uTq57JoCjXXhfMQ1cFCPGkUkQmzwg9HRbA2RS3fDmgBTnFP2G1SyRoHXKc6nM",
  "key11": "29bLnbeNx5Vh2Gcn28cNi2VEztPUwoZBHtWGeBnr8nDEVunzsQRHbvNA6QsDiP15zmyGr4nSsRiRLYuJ2rqKrH32",
  "key12": "2LN7deuLDKwnWofhP1bWHmgPZxvBgBXc6Vbo4gaifRb676o1CrPpbx887SrHVxnATTCthsfc8p6ZPW76CD1Q2sPg",
  "key13": "4KiUAnEhe59oEJ26WpdVz8gfqPykkmj9H8gPic3bp77r72BPFAKHoQytywc8zmwkbe4jMFX5WAZPRHLakY76iwKq",
  "key14": "mRucqJEMcR5w7PteqjRhoebc8wR6N6ue6VhjiAg9wkpV5giLwsnJ4fyBD8Rs6HLgKMyggMorDHUcUmqGQtKc4FE",
  "key15": "4WS1dPcCcxVJYD4aGS6fmGVzHxVLDq9FgpA9sA1CqyZ9DPYsQsfQyUJcpHY4fn2J2wQwnpCz4T4KPDiJNHKMrxRq",
  "key16": "5yeFCWu5MARLyA6TeQCPEXtFEvVj8bzKqsxUif9qQdbFnzfhmdqdAAuVXg8tSvTtxJr1r9Eri44L8tG2MVcDmUeK",
  "key17": "42oyaEm7pKbbpi9mNH2kroJ21LmBLnahM4KS9jPQpyERWtpZL6Jczk2PKgZE68JqFb5YKiWwSQbCutmUj55NXHpA",
  "key18": "4tH2ftL4BaHrb3cTJLC2sc9kNnmxPphSo6rQn8jFtckSS4zvVVxtHzVfe3hkt6TGQLw9WcSfoqreUhzkPPDoRVec",
  "key19": "5Q2K6WYkvEdfZAnLtjsN6P4TEnnU55zz9Cw5znyG5kR3oLb9YXiuzGZqeZxiB619PtZp1vVtzkLEoJFnwPnwbguQ",
  "key20": "4GRZFVStv6Hbv3GzXgGkxVtkAsrpYmx8xA4X3GYN6NCKxqQLjHd9wTKZTZdtos6Rj4oJvCwYu3HR6UBzsk776u3L",
  "key21": "5jCrc91p9CGp78ohdXFm2TXFPMMnKeBpEVXW1sQoBgGF7urMpproCTBiPrkkhg3qWad3nWsBzyLEpC2aquafYRt2",
  "key22": "3Y3P34rzN6cWCTTqoB7yAEXKMVQRVbKhNancGktvVE9uQKdB4S1uMWJpR7C1Ek8DAaeLopZjoun2iMn8widGY3gg",
  "key23": "2mqMmgZBA9QHMH7MC4e7kf2Qgkm6nb37uvvdScsTNnmAvnu2bHMrH8w339FFF9sQsJDeAVh713LfLYC6YotGCmUo",
  "key24": "ymeshqYkyc7bwWgRBC6uhtF4zeZ3Eqcb6aHCTNrP1V5SKjD1SnFBC1sS4FG43eVuMzpmM1ut6JSnbe1ZiVPXxQi",
  "key25": "5CCVhKjU7WKdA8o2GSS5iPGYaiPCsPYGqtnU2b9HZD7wp7EG55cJy86vCM1jakCGJ6UXgD4GFJ5jHEwpRE5bfXe9",
  "key26": "35nfxEnE4jKqc8jKVgMmgFnVt1qjMmYiAfd5egTY22LrLG8Tutx8Rcq48YUVu2f9Gsnk6CJoofQoKUYdKKNY3cHk",
  "key27": "2PhqygG35x9w56v2z9cxrRcLNyQHpT6nmXntWX9C6zhaKfnotJEMUu8N1kErTLgzMo5PKdeCvK794xS3GiF9x1qK",
  "key28": "3VyyjxVgZwsnQKBSfoJuqC9oaxLgvzCtNmkNdvzmbELhwLtGzQpMF7PmhNUMT5ySjzC1RBPzRoWEUcXDmuCiPhM6",
  "key29": "2hnw9ePgxAQfGa2pidEAsjYNZimDQfvLA61f8mcBYiscNqBmPFUPQMAYjtL5DasX9sPU3ozHZdtvNuqc8AdvBSKL",
  "key30": "58y4WNZKyZxDk41jKzJTgoCUK9XxWBFtemUkMsMGtGGPqzSmGK2vVWxQs93iURZs83pNCbNfJewwVpDk8FzR262f",
  "key31": "341yohDATpkDZRfLEePA79b1oH4VqudaXmYRjGMH6XFEg84mRqf3HjvJjaENbteB1Fjz3tnv66aTn9pK27KPUnVG",
  "key32": "CEsx5W5qXh7itMbnwNKYUMPAUDQexuE7wXv5jQ8hbrBTDBmrBLwG75bwJPRjPMXhkYGhzYgYNKP7zzFuYCyH7YR",
  "key33": "2kvssCbmDw4qMrKsZsY1VSnj5hNmuuirYQp2s5DQ9NeE7qvXg1q9vQKMorZTpkcXpSt4Ktspz4EgMXjDbSe52Tnu",
  "key34": "5eiqT2GXqQZ39nLXfRvU28FgvF71MvSkkG3yQH9A8jk9XnGHu48j3feieJwxwaMMegEAQ1zy9gbKv4P5x6XMdqE3",
  "key35": "5JRyDMtxCZP6ckkGEgn7Nqxqr195GzJGQDjsALa5WGFJrGAFeSEXwMzoP5h9n9kEgFnNSngRkMhbKV5mN2GcE3wp",
  "key36": "rrZmoDiuGaLV5Up7hugutdFsaWU3yXzacC7zwWTR8tHzf41X7Vyx2ppFb4Bx7RgmMbyTohkGfVWxyF8A2ZoDLPJ",
  "key37": "3MQocF2fycwVwibXV6CKTH5tEJPruqK3UaxFX932PusYUoLkYUjSATGKrGJqtATR7etpXUJrux9fTurZ9pikMTWx",
  "key38": "5wD7JpUp7MBd3qB8VCxfoRWRvStTHVkddW6nwjiRDvUfh2fhcWdcEW1RWV8TtLsXq7s3g3WsQFfqe4bgmBSU83fz"
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
