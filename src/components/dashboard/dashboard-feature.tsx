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
    "vFNquz8rNqEwQqDzFEz6EiQ4tJH1AtfvAnqNjwJokuuF6i3hAMVG3tBBqsWv43iLQZda1GYQTWYDWzNv3dYa5xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xj63BMN6CT9aC2m3kqBxJDL1RwdSzmYSUrchXkqpvLmU2k1jP6qxoF1gysucEGCjhPik5ASGHzBP7vHfbWjFC5q",
  "key1": "3J5yyNp4MVEnneLgArit8dp7KyA8x7dUiNyXSfzLutzVp8dDuhAbAFQBEZmLqF3X5SzVXXPaEVdWMLmA54bGwqrJ",
  "key2": "4f8cAXK3XvhMtcsmdTzsc9D7YEYY919okB4Rgos9M6iHbyZoushRwikgv1aymgMBUsqrwwwYtdsBvkH1wyHQh2xa",
  "key3": "4Edzr1vtWkaTVWwjwvAYMSAsTpGi3C2NV8LRSNQ4hEHSD972g1hzKRMkAU1r3tB8AJ3vR3kxzomNvNrVZ56buoPp",
  "key4": "3yFXHmqqQPk4v3eGehAqU6w66FEgTGi8hTgtmvEYrjmp2ArcmbGtnbPeZvmeL1PZ5Z1cZ9YUvEisFQRKmjtFYtvZ",
  "key5": "717D67TuFckLCRCQunkch2cv9GWq1JEb3nbcj5K6sZyXzhArPiyMFjjT4oBBdL8VUVdfQUTkjUmVhqSTJwU8tGU",
  "key6": "29aVJbfPg5tLEqW9T4aETbPGLoEG5DPUDsxYJE2dzXyEecPoMCLmBePBpKiuDD4qgoGGtUpWUTCZg2ZputpY4EX6",
  "key7": "3RqC91qR2My4PwwLqKVGkD4g9znGysy5kTTJniRdaKnSEEY9fxfxKMBcBSQoefHmntpdezAskXaCkjZFptPjV1Gc",
  "key8": "2iXYbRbFBFNTxXS9qHPACNtLmwgqkoiAK19Pb1nMQRtp9bTnU9VWSJ4iV1wEsxADk6WzijQqcbH11mMypFqCroS6",
  "key9": "aMZArz94YoiWsvaK1WPvppWfzpP1iFpoMdBNHFCEpHDWJWRt6DJh5qf324R6NVTb9KLZUzaNLti3j1Fdx3zYWSA",
  "key10": "AwrMXwEVRVERtPTq1cLCxM7qzoBXXFReLQYRm4Lf2zTQcU4PK8yDoHSJFWRujLgk5L4dMDsSfREvSuYA5YmtQfb",
  "key11": "44Jae5uxvYZVcqc1wRcead3B8LJnN4h7U5Fu1bigfnobKXT3ZnuVFx8aDAzEGzWANXBd67FCKQ5Rf8AJuZ7hnzPb",
  "key12": "5Ny18jymvrNaLMDZuYe6aGJfKDgzTecrVjmVUfbAhBiPybsBuobdgpSkTGM8kHaUd1o54mutoprBeCZxFpwu4Sbg",
  "key13": "4NPkfgrVBZdF75FnJRgyYjfk6ybS7FYY7azJvMkC6v1fbPZ8eeDGqiNff6VnFWMdc2aj6mZEQRL3HjXMyZYHC2WZ",
  "key14": "4TNkFQkxTZuQHtkBEmLWsLYWdyVJPqeapdM6Yz1KAfPKDwgFSUTbb66eCrerUkzuXdMDfGHCkWJNSPmQoAkHqBmV",
  "key15": "4NgCLCHFKbPbMfEfyYjjgWkKnAVRXURXZGtfhbm9jwuMDSAEpom9w5UR8igQ4myxupgXSXRehAD393DuWgAPjKfM",
  "key16": "2zhnvk9ZcHdE3adyekKhFQndkCjVpNk7VwW5J7peAYrmtAMbQL85JgRcJgwL3mFB3ffYnPZkw6ZFyBv478G8Fgsu",
  "key17": "3N9z9hGSkALpPURC94wX2cNLTrHCpEKwwbPEumD3MMXjUoWgLCyUrDrZU2Sz9kajJpXWNU3Vso83CyTDWKqQCGcp",
  "key18": "vb1rRwAc3LpiDWLCBCDW3nzs9XhtityBpThB5kkvvFS9QBfQZHxQsTbawPzKVjML2eDPmyvQnZR4e35kVubGptS",
  "key19": "2PxvKEjHLs23agJvVYK8pYNFeFShmkZ9j2VJQQi3LjVQJ6fiRgeeRcsgh51gdvR5XTiPHSZZwyJebGzNeCFYDmJK",
  "key20": "3PkFuHYT1krRQkUdX67WwbLhyfjVZ5nKQaYbCbmUx3v59zDyVRSNrwty4iDZgvETQHrJwnRGLcesaaohYFvFjvsb",
  "key21": "3XRTQ67LjH125p8sAJAZPNs5meQcbvW8N4FsBdvD3NpEiQLyeoXJaQL8ENuWU67VwWrVjGrLvs6suEiMmthvxnCT",
  "key22": "LhRkTYQWmf2aXk8J2QER9trraYnDaW15cWHAMwBbv7gqzoHY6dd2y2PXhNDzmLRuii7fNbGkKsYDc72qG99rNP6",
  "key23": "5L7nUnTyCtNaHs9j3PtfKujLN22wZBCDpk9MUBqDvsgyCSi3bZxJPcGxd5G8dvjBFC3zCLhmLPmwEk9bMeikY6kk",
  "key24": "WiW4TvBLxNfHpN7WXCRwGw21nR2Kv7iGYBB6EfBT4AxHiHQwipJYugEL9MmA8FAHbnaoX92dAabbbdi5sMqDqP2",
  "key25": "4QZJSBkW1AuTQrvRyqsvo9BS5yGw2U1HqpWGDLZd755FGoBnqmnbdrygyQqsy4f7AZRGCbs4BZyEdEvyzVrWLmeT",
  "key26": "4rY2JvGXmWtveWkSRZgdwZrQhbyeAJpLyJPtqtvK3G3ccPz1kN1njkNjiciXNePW91bXqhKaFKbcYwrzvaRqoEfJ",
  "key27": "41qffYyvUHwtLz7cGK7nw535em6Y5JKuvbAGcnavPUcrP5hjZVAvJ35THepihyWV8cqtwaM1pa3Y7VafTSzCshNn",
  "key28": "33xnqjM6rcCxPujAK4KCt4bp2Lg5N4fZC8xq2cLBTDiDW7KecEqrVpSESfqF44ZFB2p47WjWvHU3pKvL2actF2pg",
  "key29": "3DCgc21gwwETuTPJTfoqyVCtTRemTS9MB7rKJCrYGSEPvEFLSm6sBJFkiC33eWHURv4TSzPCx13PFKPDH5LSsQJS",
  "key30": "499trS7LFjry9Tm99MKuBZshrJtbvm89cq55xGbrvcd5TUNGYcfD9oudqrLJ2SXe2ZcVjfANaLbvxnmom4SPTnJg",
  "key31": "UYMPd5gMyUpPHASy4iyqjFJ1EKtZCMDQ7ghwbWSZ6hs8m3C6SYT1wTx17KnRnUv8JLjmBWcBM6WCe53DXXxE71b",
  "key32": "3pJDDHSydZNWc4xaWx6ApF9orERV9uQgmpj499otYPVYUsqRoEcWHEkBHhQwKG6epYxyXxu2FUwdEsphx4pwBs5W",
  "key33": "576qcKH64boApfDDaJZDnXJZ4XRefm8YpcYKxPziHKc9ArrD3nvj3mw42TvebcxLXBBbwohYkGEqCGnN4zxyuc3p",
  "key34": "45EHsxF14zX4oFGD4kbxKT2Z4MCzGEN8KUc6n56pdVQF37BTUMXPzqSaBwDKp1crjqhQfJfCdwX1bgTjPzm5Hzpy"
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
