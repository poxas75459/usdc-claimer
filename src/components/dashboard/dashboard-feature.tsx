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
    "hLsuPsjLLL14zrWkki7h148oR1koTFb8fFcVLWKJ5ry9R2HtCDVCkd2vGyNEvH4d8ZQE11J6dfRjVDZ3zH62n4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQEXae3T3N8NjQ4dScdJEqt9R9fLQNVvEefzWUr7x85JCryUF3JxoBqiTPDaXZbLSQtBBCDoqN6okpdnZTXrpgW",
  "key1": "4W6jdtzHjTzpk9feAboQhVdN2LocSWJM28gggNRansM7mYaDRwiVF3wbgyCMkNKhWkcov68cV3c7VCwkwd9zuedf",
  "key2": "2rugMc5DbvWApKqbD3jgUNQQVDWyXNNQuXhoUN8SeZ8W2PYEU8tHvnBS5PC8GQCDbs6oEaA8AxsTEokziHM7534g",
  "key3": "5UvGJeBdDuramUznjC4zSX8EEATqosH9i4CedqmbvKB2J921jt2JS6phtPBWP9F5p6XWGTER66pkLFRL8cZJmJrd",
  "key4": "39aXNBpkHqiNch34Dq7Vm2DzGzLknaA4cJ4T8uSmLWhzEAxUerq8zgnUyUTYkqMbvVpKgTPvW91TR6d5PieNAaHe",
  "key5": "3Yx19wp8f1w7yptp2Wkp2LvPVENa2HhLZVwvDWrwBvU8cgkJXFLts4aJLoRozfFwHfB2A4w9KaqnzhPXqtgtth2F",
  "key6": "xM6oGRxe5yS2AK2RPvzt9nxgQHjWWebfbecSTbHpx5LdEL6x47Nz2TQAYzapxKqMLrp3sJfY8kh9WNY32xgNHoE",
  "key7": "4XuvqY691tzGRFiPZAh7igQouUdEfUNkrCjAgGnNbhyRX8hoMNuFRF1nszrVh4KkJazuHK2fiZCrgsv4MBp8b9M",
  "key8": "3RJQPcU7hdDkxs1hNMMcZjAfKc63YpFktrSpVVgSPsx6hurV4KeZcxBFbkGcRjcwGtFRCwPmCZ85cUkP82ACw7dH",
  "key9": "3mv3TcPLhSVsGU7e3QBYLAwJRqMnUMvfsCJsunC1GYfcGKn52GuawQeJuDvMKNGi7CFR4vGXsB8CLTT4yycFPLGZ",
  "key10": "2KT36DqcjeEKhzWqFSkHYJPHuqfTq3HjehxwXGf7cFRBDQaCLe5rSLSmjwJhHsdKnQ2SXzVB99fR5Ns1QPvqW4XN",
  "key11": "vG3qURjpvLcSem1K3knJ6L1PUykvWHPDwVbgUAn56Cp3p4w7BVxQQXGpX6NBWE15yw8EPtsAx1meW9oXenMS9CZ",
  "key12": "4w93s8a6rMk4Q2CHqe7zBT2wvbp37yxeptascCWX9SJUNewvUShuqUvSrBSH97b39fnChjsg4xZ3iRiVKDTmmSUr",
  "key13": "58P5vTw2SCyTjEDLtnedkyZvmX8udpHgBHUqq2suwdWKaMNsXBCsQXdGmxgQhVZ4HDgVFmnCeTFWNQMzrUVxbUW6",
  "key14": "4WgGZoZBzp3kQYNBtSBbfgH5bUotxsXEeyn9aRpeRBefELqa8nxxX21G6dZfci29xQ5vF6GwFvmNmmEi9TGPypLX",
  "key15": "3QxKms7bnnDZATyQqzyuA6vPEfp4jbw21NeczXXLwWXneFfq6ansTUq6pTQmSAaNEwhd76GXC4WAm931RoGsi5b4",
  "key16": "4JnvVBbYUq33Tf1tFLmXYEdrf2RjJpsQ6KF7gHLXVZJm59XFpMau5FuX6cd8qKkXsLobsVi36EHWVW2ujYSZ18JG",
  "key17": "5eQhq4ZMxbj6JAL6QHTQZEx1CP4H85XghKLsaHhrP5hbZoUiFPZwHDz226L1sY5ZxNEfSKJxSubGUbcs8gRak5V1",
  "key18": "3w26xcCkT9bguESHyd6qcJyw2efxFLywqzDMQnAoHumK6WsWAxaRp3fQzZZWGfk1wriZ2MC6vt1YpYRbzLmaAFpk",
  "key19": "26dWWWHPDai1vxLLEjp4AVqiN1B51bzXp1sT1rHzJnkueWKxPteK9xqbsMiBMYMMYw5Z84gSxSqUAu7mVxqL1MGG",
  "key20": "3k1J26hBVJXLsTjUfZRFzg73xYx2BuWJiui7bmnxG8VXbbDz5JQSVZnkwFuEXig5M7tYqcCR5Xzge3RNg4iVu78T",
  "key21": "2fhi8ssGqgceZJZCgrpcdbYYZnqPta4CPfdvcK7kiMm3J8aFChBpEyydDCdW15mFjWAihrCvFdTuiEQBVTnxVjJN",
  "key22": "2CAmc6Zm9pCkYhGGJQBuHHRjaKTVG3GjekXnA742hn2AMa2pgW3iwMChUX2c2nFqjUKX41gCWRpg7pQc3WEsvu5u",
  "key23": "5bEXzRD5PhtCwRkdjqggqYtVgy2D1N3BMQ51NYee8qt8icps7R6cR66Ssx1eCHYAoqb3Kr3aU93AwpjmVEGWXDEg",
  "key24": "3JHP4HbRpTzV1BDuZCTyX2DdTjKvcgkaRDoJU1oCN19Nge9eM2rfAfNMMjN1HsDXD4sSNHs8wpZaYPjP2zNnxhyy",
  "key25": "4fZ7wbymK3q5TMaeUfG34d2gDxtnW5h8w4EsqKh4m6S523Atmji9hMWHo2PLu5Cv7EWDfGCgpSuqAPZ82WbLa1aj",
  "key26": "3kd5teHc88GvbxmthJ13GjR2ekJNN3c2fYBpXj9MMeCEEX5UYD1GjsE8jrd95fBs5RrG1rfQtXqrqDR3B43Tn1Jh",
  "key27": "5AAAwJokkQtCi4KiZcxMZBBJBfCXtDbiAXnTHnprFXMJBuYqoVH4qp2sTwWMUvfajR8CWGXBZBr5QmqzYU2sFMqS",
  "key28": "5xsS2F2UyfRNz5L4dyXF8tQ1roAtHsYSP5NZoMtCQggM7G98pcCuL4hAymic16KmvJgaS5oTmwhqxcns6mRj9g4g",
  "key29": "5yCfrRbXsXK2k3XmhJXccTcbsz1rEXLoD9zxHFceYya5oRVGW63gVArkXPaAHysSgJR4zpYdxwdQpq8ZbhCq67tS",
  "key30": "24y1isx2gydgGFwHVMeWDYEkcKMWEZnSqXBEGCBYBz83K2SsMuuapF9BxbzSBNexQUoFXf9AeMWu7r7urUMtGGoo",
  "key31": "3WrQeTuHQLzyyE8MTzterfq6QdXrew58yoH2KqEoggogW7YMN1wvNg4ACDs4cXVB9yDDie4gdWaPJoAGwqrttbus",
  "key32": "HXu5H2eqJviaQYZpADCKX4zqr2BTwLzLvA8354ngXaHq9BT2k3737Zhi28pBM3MsRU6qePeJx1tGyzqyiRCHHvC",
  "key33": "MVx7RjTjb2ojVEBm7bqCX9AhNXvZ2t7s4muHqb6oiS6f9Db6DdarHnNp7QxGbzRx5STRdFKMXRQqQPz8WBNJwd2",
  "key34": "owTp2EKFWMCeasdue8f1AmfNGSLM9VD8TTgQuu868L4tkH66N1CyYHgX1i9m2jQWFdzbAuJ8UBFJVY9KmteK4KS",
  "key35": "LSzWWWyDQBGqfdgLHPxJGP6Lrd4UvVaNdQTBgY51iLcnuZkubRCFRm8r1KgjqVkTcQnPj4hzoNpHCQ6UjwkFczx",
  "key36": "5tkjtKdxYZCF36VVU81C5AxRzTT9FZ2GtqHzrqid4ycWtE1USzqFA1YkUaY2sFqriwAMKMFjdEEQpkSjrATLcMD8",
  "key37": "3FMfPQ9AsqDaWWf5A5AyvGX1uSYpxgr1PdYtHZjnKPtCsARpFPAq6pK9PXk51GRxYssb7pWyWnMxA4HgaGW49EWR",
  "key38": "4HwPQBMnmixFUyCCkaaSoj5ot6V8YnfPEbrUHenjL23CkCDCtCquep5kugr2ENqj8rDwjG7BAqyykZpfb9XQSAy7",
  "key39": "61krjWWg53g4KXCwxCuaXH8vTT6vtiDTYr8JL37pnZrDtFwAVQRv4B66Km53DEv3aFLrMPmHJTZk7JKiz9iry4ga",
  "key40": "3rAPfbuFmGQZx14a2Qd8AVi1sy8FgdEGX96aqBbySd7mxnXuzPPcwycLjfDWETEcWxeFxYbzYbWPWUDr3RRfGeWu",
  "key41": "24EeJbhyFtJNCAP9KtwHst921wHjYrEQN4Y9eqPSZ1LpT1VXanucggxBju4zW5uo5ffetLX2RUvUurYmhpCQkLVH"
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
