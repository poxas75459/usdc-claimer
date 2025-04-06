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
    "22wEGQqXoXvVST5Lfy4HzTSJZnY4qmxAfnTGEJbTa1JmetRj9zX3sKPUzEac2zA7nyjuxUTn5Hi3h71kzxC6NFmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRThbDGozeS7g4zzbW86RWkjsFWsDsiJiwJYz1gnZhAE8mmez3Cjc1PEk3TkfCqAF81Anq9sh7Yb5VwY54GYiic",
  "key1": "5mocDnju31d4AYejEQbAGE2uFpLeQg6tRk4Ed2c6QXBPXV56bPmbZGURhGvpFN6MFZMjpsXW5geTjjSRu9HFVG2d",
  "key2": "5JgQSP65ey1wktekRYrspGtBd14uYoZzNTmjpXE556xoDkHTHetYFfNBMBGMerWV5PuUyXLDJ1bfvdABUy1nB6ey",
  "key3": "ADVcyoaurhZKcpJJdt5DRxPkq6MjspMzbExDTE4AupxQMTxPyT2WziDAzg8R4GoQVLgTxMcWZi6ZbvghNrCygXv",
  "key4": "5YQmhfcMfqNtjS3UKxxoTM1UMPE8ahnro7KRJELj1xVuT7Kxhzmpz9r7ehUW5DXxKmWiC2RXih1bXxgBU8hLN2nk",
  "key5": "3ysAG2vMuSRn8RnYyZQyzTEh1n6k1LKn2fJe7bHYq7use44LuPSAfS7XHZwNQwpegYkGFSj56kmzvaFq8xHPENYD",
  "key6": "gD7Y6GLGigyYBg9DQQeUcYpr2vs5xmQxH6KXPNwnJNRVXE2AJRzXfYu53cYy2ZACGdBWKEfFY9n3cvr1PzsbgTJ",
  "key7": "4kSaAahim6S5jghLGkAprEL2EXbzuTJZGB2iGKqGNqFsoDCF2eDrFfjtS6fkoAnTGP38jfPQ4puHTMx3ng6Axub6",
  "key8": "mK5YDZaFByLqCykaec3stnv5r8C7GdLkRPAgg7spBG3LwRoHxUVWpMRvwBYTvnFaFWcugsWqyuUukavsHdwrYyM",
  "key9": "4XoEXAXPJdMNQccooWzReinwryupJ14J97rCPiBBGX8UKT1A8bFxRGDTiJBuS81bR3nBCo15DoLzQMoA6D1KWtCy",
  "key10": "4RU2itki3g8EvEso7LnyPRrKkoPmriKLe84xBfSs1Uavt7xhscA7JxjpijeH2dgGpAa9QXZ26VqF21KfdxVWkhSM",
  "key11": "3ndNDuPELZwLCKuwcZ83pECwxauw3zn3Ji8Q63Mr2rLbBG8Hwm36yMRRG89BsyQMS6fag7azftVThcLbL4aiiwrb",
  "key12": "23ZrKoZPzGgDgJYzyYdHfsJCFcLQbCUF8SzS4kciUtVXWTiX4nZus4XZuzxxdnsd5fPtMYm8wTnMYkRN9yqzkzwL",
  "key13": "5U3Nhx2yi9uMAgn3JRgw7FkjsMELkENtLmVFMuv2u3CctbR87MuJgVdn1SqswLYpeQzUGo1vEnL3kmN91v5EwkvA",
  "key14": "3WXev736j2rU2fzCunVS4Aj1tM6zmk2JsSQUy1zuHQXhKFhjQF1QYp1u8C9AffqAU198hj2jdmWZyCJVLBvSzPuV",
  "key15": "32HZWoueh9QmTc5BYMVRmaxnmQ4JXpTBJFPdNWrGJNs41BiNQi4HHgpLGLyAphEEXrWRtvrrbR8g9tEMKurWJCk7",
  "key16": "3ahr2357yZcMbRErGqhZZQAh5DVeFV66EexAarxR8ayuMJ776fQkXcFVci3RYmHrYar6njPpcXhnT4BtSz6yTKae",
  "key17": "5eutkLzK6raMRjrqh9RgBzgEgiFGodJsMzHB2v1Bb3vAxKYdKUY4KYf3PV7VvBHTmNWjWRTwuRmwnfs7PBrKLGHf",
  "key18": "35TT7p9WzPaKdKnvhni4WbA6sV8vER543cvM7gwjXmpDrnM3K6ydTzg1c6jH3BSc13A8zKb8MVV8EiWfZRvsbZ1a",
  "key19": "2mcBPvJzk4n5Eb8r9a6Kxw9nXhPiJNrJp3xXBaf6Mp9piY4iu9ihDuA1ewnr1pbmVbCvFjhHKKF1J3nAvU146nek",
  "key20": "3fB58guECXfmNi3FTBUGcDGwfD28bNjfdb3ikqBf9kuxRaQcpYXREjd1AzuJrpu7e5TrRaHikXQMn19tXyJjwR1a",
  "key21": "2YJGUSe8G12ce67Nm3ZzSzz8LLxn4n51USya3PfDHiqUxvVgPLF84dw6kBfMHWiYXJbXaCfTr6wt5pstr6EFTsBq",
  "key22": "5q13zCJt7Bw9XBJ5gQ6JERktqFhsJq478tLWWC4hY5mXdAhgSGbKUKqwX2hweqjJxQPhXtv7Udxu1QjqfD6Guy3x",
  "key23": "KVgMf3mSseHdTmLm8dp3DRBaTEqzha3Pk8bGyu54n7jukvGQjmnHyX53L3afeA5kootphdbJUryBFA6qdj5GAiN",
  "key24": "3KnvtLzSUhUxJb3WqetVhwSjooGQ67XB2K7xbXwBHbRbtv5xjsgubwDw3kv2jFJZ6yFuP3EmUomc8Bk6oU7TsSXo",
  "key25": "2VVpzCFoA8RXidLWau9g7THY1qaX1rR9XrJZ5RTy4s3UPGRYK3eMmwf91utGNdNoZY5nUs3aBva95Xkks8JZQwbN",
  "key26": "4VepxDsLRvLCtXMZ8NXuvnBxvLSt4KnwzigPrDK1H7gGgT5CG1KNFYtuRWwX9uJQz4V8hkWgoA6Eq6ai2s9nRpMN",
  "key27": "3DZvKH1aFu4XCy7h5A6RfgyYsqyCeoVouZ4nyt8Xny3FzyyX34kMH1WSi3fDv9kxbWrTDwGgRSrJctiKLVUvFUs6",
  "key28": "24Bg4H5ee1jNwtaxtLoj2g7SSSbrdE5dYUTJKJWJAVM3D6REgUTYmnFQCvoV77pq2wkPfEhqpbr2GTT7GXRpdRJj",
  "key29": "5JEETR6g4dpXCyat5rnMiGYM7BMPT6wDT4PYgG1cpUHDZTnQtzxcRm1jU7wAijsfZVU89N41S3iM7CCJTVKQAbsx",
  "key30": "35XBkGrmgUbGyTxTszgV5UWKeRsS8bjifVN1vXLjLW8gkwhiLob8xyyfex51GQTjaDb95v8YJu9WQrdr8jgHVLb7",
  "key31": "25C2BhkL5R6XrQwDBb28xv7i9poquYrmojURXTwykHJLtjCXVDk6h7UMc4d6iCrYUvuNZfJjGHwakAQVutUo8PSX"
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
