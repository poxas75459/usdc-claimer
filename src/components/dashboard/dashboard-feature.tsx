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
    "2SHtczkRiUuwvTEtdtKwE6uq6ChgAuS4MTbu3iDSZJvxnJYfKBz9x3VyXFHasM2yiL6ur23XWhsYpcpRcaWsWp42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMZWY2SXdXcQopaL959mFdcPRi1HtXoPCGopp9JoouvscL7JPdnXWEJHP7eAKVZiK74UofCfxDAQt1aLcZzZ8z3",
  "key1": "3q25vPJd15VL3K466KCFrFXn9XrwK2Jp6F8m8uvZWXAb6LNdMkRd7GVxXMWJsqTjfepiuAXawT2vcfwm9ewX8UtK",
  "key2": "3BrSFcno9L9z5E8W9J3fsYM5ooomNDQLnH5obqZ5RXqDox6ngMb6cHRzUcZa4BaVRUpKtSNiuHuizUcYcSRueazq",
  "key3": "4ADohBA4F5FaxR2H1L6AEmabzQ2UkNsnxkdp5wERuYexNEqTBGRP7py4j25aBc6HaMjkV2mD3ZcnsFjhXZ2VtLxa",
  "key4": "2v9NfpuoDWVyDUCBjDQKuu7D8RfDLgC84nKewaP9u1kUkTJ6vvHD7KhFsRnMkW9a6Anm9QxgN3NaLKPHzwCwqoyz",
  "key5": "5W4tuzmFgHw1nHFMGm66MjSY8Rk8Nab3MKaVU7652KbntmFU3bXsR2AU8oJNoCqNwbXmMPnsygVmnDQ3rUYZpFxW",
  "key6": "b9zthrSZXh1cXjcVeKbf2pCF8HbDNsnvEFmcp464fuQx8ohSvHwUHht3siJtVMguDi2273YMEgCDNXGhyRaVwmW",
  "key7": "2RUzVYDhz6oekqEixAH7Y8Xk1WH4Dq8fmKb6ywacrcAju7LRjqc4cSQncW8HgwkjzPeR38SXEhA5sNWnqQeYvwgw",
  "key8": "sHYFNYumE4MNRJKrvWhhd2nSXX8A7Y5LWmqa8aHCgTNWh9iRyB2riuEJwPYPn5RX3SRumuNhpEuvPF93qAm4JGJ",
  "key9": "3pwMi1m3b5y7YNcHa3V3BLFEX8WJWoaUhBRLUp9sLnHofZWiQXDsajTbPxuDYZ5px8dDHecyXM1DJTDTMBskpb41",
  "key10": "5kV4EVYKAEjy5bMzf7LEzUr8sxj41eQk5xJ3PnoNY5U78D3Pw33ZETr4ctQYQUm15iVcHaNW25vEpA7wdt7mAC1",
  "key11": "5PutPzuBdbDuiViXoSDYKS23EjKq1MyJv3PZ8uPuj3DNFGN5bwrcqdTSzVyZbQxWkMtmqi3Pe6h36yxXu6TBXYiX",
  "key12": "4fWSSj7tpgYJX9GEZ5jB4BG5eQjB2937UQ3aoLApLXCem7DjUJakFxooHKEcRkhC1AfZPox1bfhEPcoiBQ6d34cC",
  "key13": "3GayYh9noEYQQHDmbnqf7cQgAhrjauBqREVvCXG9ZRkciwKFu2Qt5t4ZGsHdyzg3keMaHQQxTdWPjV42eMGqhSFh",
  "key14": "2iafZntTbHs3nm9pgqmD8DTXottJ72ihREeCqY4ixG5PFSUZEjLckwGannqUSmAHAyX8mPjkug2NgfQeZfBqqXYM",
  "key15": "3Kqn5dAxePhkxxJhS6UKHLqWttFWBWPA43rPhVs1zXdQqCDdeHS9vv6cJcmhCFP6EEkoTPPbuYFYQxAF41o4HnNs",
  "key16": "58JNKEzEAy5BUqp8nSE7y2osSfqQNc8jBpUM8YBPXFH1nxaZPoUoCidawJN5LTZEb6SkPNhDmZMr1vMphePSpWcg",
  "key17": "QJmJY3NoP2bDXWk4FGDekJAEgWtms8H3nD1UsV8pnJKYkENuBfmSFgGqATgvDv2NEeyprcXeQyyBmSLNUZAiH9c",
  "key18": "37nnoBGZ7DUTmtHP22X1fHerWTW8QXDhoDgmbnWMHdLVWQg84pKgeBjtQRzzaornaq6pLzRZf7j7LTLfMFwc4C7E",
  "key19": "5vv674q9FJTXnrtXqG19exT1Fy4Mmix8oTcjwevaewY6VxZf1EYhRf18stWaCxddTyCb3pnFjiWzrhfZEJ3ivHYC",
  "key20": "4kyZfVBJFFN4DoJGLgVj6WYBSNr3cSnVQ7gxZuQtbPHcasq2WJqZi4RDC121pRc7R7cMjjrUrMwUwfS2f2zmbegR",
  "key21": "3kyX9tm2nh1PQy7VQ8WuBqHAuGwqR1tzk1GmMMcg9wJyYTmarz2ZjhaUPkaL5A4nGfKhBD4AZhtjBfMwmFG8mq38",
  "key22": "5dW8NPfnCd9yBHQHEu8ghgkrf5okpWDCYFTXynV49rkySaDZA3ss9SUahkwKG4HMMTHAU2MUMLhPbLyEGj8zN4ZT",
  "key23": "232WfQvFhCEGc46Dj3Dc2qrVv2esY52evEYnmNqwLNi9TNwCSAF73moX4PRubxie3WHf5gwCUGBw2Vbw5VKpTHCd",
  "key24": "5t7aEhwVMR8AA4btGdwYvLkQoFY3AWRMfzeVfiYN1gxLbNxLftX9mCY52kcYMW7sN54BCU22F1xDzMJ9tezuKG5q",
  "key25": "2Z52czKSryaYJJ3Jq43CWmzqD2yNDWwL2qJCS2JZGjhsZVKfp8daeh9WS8cmJCwnswTnVTvzpaygpASsoHm67E24",
  "key26": "5qarFhSq8wzoE5ryaRLgq8z2rVxtxwAuECojpSE8YuBkVeocjfiBVRWqpHZUxtM6ZTQ671MtvigCMxqhLaNxMrjt",
  "key27": "4RekKHu49bpEGc9pBD7WWmxyxGYByxAvAEgV8D7VDTz8i3oFBF5YxBeL9kzMxrg8qYkciBuy7q1tb3GoHDMPX4GS",
  "key28": "4R9rzxtULJfJwz1Xm3LE2fnpCChRaMFp8yWaXD9JXGUVVQvrScNgKgNci6xDWC6mFe9XUbqto83zP2SDcmpMjwsh",
  "key29": "4jo9RXBbWf5nKQJznS54MUm6NWAGA14eo4iQwjEzTNcM3tJvLMZbr44LN9TjrqWAyuCU7Sy1Lr8Ar4gEBczDASJj",
  "key30": "2yws6pby4MKQw6rAkSLKRH2YVrnQGqsgev8cGJ7K436uxbycWQ6wjnT85FThmHx3bz341GuLuPtYSh6rQNkFrWAv",
  "key31": "38TyerrvdMnq2QMF4UkekPipVbqB3Y26678BtChwM3F2woXn69zTBZbtBvhDho4XLLRyweiRDjKtUmUZEdojNfn6",
  "key32": "3eyBLEpj8WkkCeFwRqXBBcKk9auDCbX3i96Tf4Qhdsuzzu64YCkNP6hEg89M6NE9Prb8WysLTFJ4TLPwBDGMjvbm",
  "key33": "2e2KfwPHmKnVY2Un7ntABV8abbbEqD8LShLwAcsTfznqVa28VNgJhLSjNHAohj7JVR3zemiEXW9TUU3hFEBkYoiu",
  "key34": "8wEPkmoMhXnZ4GjwMA8TNfsihdK9vEW5ztn8b6q5QiQdrjB3BRWBmce6MhvBPoPg2GtVTQiupDKKU2fpwchXHaC",
  "key35": "66vcXrbMCbCeLhSyCjsVhfrAU58dUcjoXpb9KgRgBgNd4QrF83JXdnrTU8433QUs6VaDQwu9gbwMQufFvMzKS1DL",
  "key36": "3ruH2Ln2Kut5DSHNFn8Jvx5JFFtFviRKcLbDBAHE8bvSbb6aCgaujYo1pfUZavhd3n7wBbvG6idwMeszWaXBYer9",
  "key37": "4S2kPgKGK83DdLuZe68mGCpebh7u65xirBVsPiTUm9Wrp1QigASE6QbXWKfK3Ayhap1GFxbp6NqmvhNkxcS9fe4K",
  "key38": "5zdzBjV7euoCRgGBDwBxAokz1XBxV6bDZrVCUEx3TWAH4fzhZ6hXNqc8HAsvxZr399T3qX2dg19ny3t7d12WYWgW",
  "key39": "5sCETipjpTmT9yoR8qgEbkJdgc6cRFsNR5M1HehGx5PdT2YWSF5ghh7mqEBq51P544RLcxVt33VPvHXYFBqmDVC1",
  "key40": "4JHqQpf9AXULN5xqUp9nJCgkVgGzMsvzUMAfHSn9hTkSexGXjpZJn1zZzupcicebdR2pPdhCZgrNCgz1g1F58xVD",
  "key41": "125EQwo4PxjPgHVSrQSC1qdjpbv65ApQW5VdESEPSWDGhfFcb93DtrptFQSEyXarF6zFuAHRuBnnVHkH8S9dXgUc",
  "key42": "59b4WX4jc2eeCUtVZEJZWB7F7Q7rgYxBpJFga5QUWbHCKCknGidUZTu8F7FG8EV2K8GzaMRW9HeXhyf1ScQQd76K",
  "key43": "2671LR49qF4bhSUsPGRSJvmSxm46x5uhNJHAFi272ufMWHq4WQWbF2JScDkgrC5wqNFF8RUNy1btkahA7JPzYW3d"
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
