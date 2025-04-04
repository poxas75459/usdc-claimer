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
    "hgs8qLsdpYXpn8Euywea6Z4pGA5Ci1eVNsZVPDtVVnxn9eP4Bg7VYzJDcwPRT6HsqDCkigY22ncKmYuH7b4qyBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyTjXD83p8ohZ6sudii1JTKBTaJMY38Pdox2dyHhevTQvaWeqcimrEegcUkGPNMyeYcSN6rF3Lwss31gXPh9gvg",
  "key1": "3tDZ8GFvY39nQmngWvWaebMhbh1gL8Ahc2qrHLn7AJtWXBCoNFvwiDjhh7ny5yLJKaHfnVsKg6zS7xGfrgDXpgtH",
  "key2": "5dzataDeoGEAKrHHJXSeJBz3taeFC6XQXXQtjSHtbcvxqExWrQGLm7K3u6u13vbeXKoTp5xTXzmYaCErGWazaJiR",
  "key3": "5nqnyua3rjqqnbjoW9c8SFGmtCbNE594GBYogqShsyDn1n4a5nKzB5FBhUVvuAuzU78CkHEofShfwieTz5zV8wG2",
  "key4": "bdrStCDfA7b6Pw9HaXDtmYpsY25Eie2Qfn2KBoxFNVV4Qrg4Zbp8PSWcfenu5n9YLhqisp2itiyQnJiPNzvZi2c",
  "key5": "3UGHYdGB6BWf43KF6Lc1EbPsFstLEtLXcQJk8fqAimNzbMwGMHvMbPnBVWHHky7LHSS3yrkfckvDRfW2xHfFJ6e4",
  "key6": "5oEw63WMGxUquvWGLv5xkcUS7E1fYa1XYetRn6g62vmK7nqwK5yxRj6bawgjByEYhP6rjcoCciJz4yRguTgSdhNn",
  "key7": "Pw7FDCs8wVw6sUmq2cH4LfzVQmBENsQWJDEZNLH5siafJjUEf2MjQUDpXfPSBwsvrQHHtT2AmvD9nF3WjbmABF1",
  "key8": "4FUDaC7cVmVqr5UtAa4i1Yw7icnyC9n5ikc1wYtwQECbSNeYSUW7exKqu112DK358oyEUu8wjGuTzJK2YWuUPJPr",
  "key9": "3Z3tTmWFJfwP2SzCHYDkModQpPsneAXP1yfmPQ6qVC1a6EPLG2ru3dnwxLboRL1J9DDaQJjjm3VxVYbt6yw5yqrU",
  "key10": "4HDHZY7qNxAp5Y9nJ9rv3PoMG8AQ3uvZFSu9i1G3SotUzPpeHr9gT1mcRVvqhYxrQecYqCiGxzsS6q2Z91SaE3qd",
  "key11": "yXBgZrxyFtSWQEJ6jYBmoAd9NUmgM464uXqGG3sMR6HnKBBwLsRj7Gx1pXBbgu7uiVZ8GnJAWL7UXqW3szQxfo1",
  "key12": "4fLWtzZxGvacfoioyLQdZfBWzxS12frqCADXvN2NsWj8dceW2wsSByBLb7B1bXpnvnBgpnxMQFh9wu9ajkSbcC8Y",
  "key13": "5DLwZYYxcgTJsDF3vi7YmFbh9JD7MAU5n2GYSnjYNaWpiRkTkg8WRHBP9vYsocFVSuSRCWjSoFVxaNR5WESvC4CC",
  "key14": "51wt3eZyDLi4oE7LNjdFUvauRyR4ZUhhSEPm1keuMXtTwgi5iH1ESy7M2MeMrtGrX8X82Skf4hsCGf37Wum91F4d",
  "key15": "mpVnCGXEqtQUuwxpSXkWeVse2VZNwdYfaQs2vdnt362EKb78yBxoYaJzMEeDyjocgekMYsJysZVvsNn5KaRKfLs",
  "key16": "hekJsUH4XYa9JnJbWzTCT9bAyre2uhbGnm8o1DsnV8emtfynMMKjjmcA2dhhi9URCa2U2tQnmqKc29h6zjvu6qL",
  "key17": "2o5fuDZqKpBtYWbFd1xjBmHvEvtZ6kgz8sy3NfwMdTeJgigpeJMtgNuFLGGgXSUAyvhkG8RtFLgTe4U1ojR6qmVA",
  "key18": "66nGz1L243EEHCz17JPYSAyHMcqmj7mHpQEFF9QLvwSffidHRvxKhNzQM8fXuYUhvS6fCoaDUkVQBnFhVTwbqkAP",
  "key19": "4XvXmBbhdk7x8RPD25za5gTmLSWaA2AWv1uM98uR6Dg8TaNSGTn26DY7EJLZ4QvJM6NKMHuBD434GXAVBzSaDeTK",
  "key20": "AYsFZd8awquSkR3nhgkbi2NCCBc9E2iN48k952ricfb7qZpQ8qmQsnPMgagBxPDWcvAQ4yvqrn5FjrtVoKkhZ8r",
  "key21": "3qGeLVXmWEhZoRPcmKQLAxqX9Axjp2kQ8VBqFswLQKKJLbJFWRGrwJ7H3jhA4oPDrJZppSdG5gezjoi1bkKMBZwz",
  "key22": "4ZhEak2WY9pTyWPSyTP8MvGW9LiD3TSdnRsLPbPELJCfXdUiyWafs8KGcGZYCzpKTRAEGby8NZFca2DXauKmYaGf",
  "key23": "3BenMwg4Zog68uvr7TCSSBQViYoXTFK3XmqsnhmFAM5b5XJBv5GFr7q7Z6ySxhFAWtRmdTsCupjcuqLshb5tGuZ7",
  "key24": "5MDjnNwrM5CeTRETuZow7F6gYujYovHnKj2fYH8iTouuE8wNxPjWGJKHw19dpoXzH2CzT8JcQr2KFK18mkKmGwYd",
  "key25": "2WySPphKnSpNXQZw6fB5vvFYSJGX6KzYQoDQyDVueLpMF6XjggLVfbJxkz3yAxdXbYQ1cRgsrKccceJvHnnVpEUw",
  "key26": "3kFsBwRrBDQWbesimwaboNLgkFxLLFy3NzcxjGPEMcFevuiQsHRSFzMm34a5UkUQPpEYX9BWXguiAieUXDXSgJHf",
  "key27": "ABXrLBrYxazh2m4yBARoKz9nud7RiY624GAhPYadKuWETNJnv7Ab3yS9cvcmwohfSgvVzRNxAsCaNC4zZwBe2RS",
  "key28": "5L76VzCHMfjETpcXPCTteSmYGifHoAoyG5ee7wxe2WgRyxAqmqQNQjCxYE2bWHDwfpj3AWww1LmbMAMJT6CfHdUh",
  "key29": "34etWwFvBJKCwsZrASXPvHesFbhj68x5RqDKz64zUXBYUW8aE5Ff9hRYT8dPH9LwjorZnhac3f3iXdKZErNAuXRn",
  "key30": "23nKTz7fNUVbiv2iuGfvqFm1CthCBCSYCUp9jMWxMhFgD8dupC6LTjJPeQ4Le4LqmwLomAg4xccmJvpPs7Souyab",
  "key31": "5seNhcR6Lk8amtiSK2sV17kEFaPSirPsBymWAxbRhEiKDXFpV6MKvNdsNV3fMzVeBB5JCymRPD8TsmL8s9e4qphr",
  "key32": "m2vfwBGv2zzr6ddQdRBrpUvhuVUTaEQCdZ9NBRYtL3PzkGjiMVuZMkpjnQbWm5LekkCSCqodoeaudy7AXMNXoJD",
  "key33": "4yErKPi9cSJm5XTfUqcwmGBns9Ln9jyjCom7J4opHngbMNKEBBGJDBnyePkgMkqtHG9fLpaoDD64RyP9SeVQwh3D",
  "key34": "52XXvyHTLmFxHZyhzmgsUHyGZi5TE1EeX83jrbNs8d8XdTd4hzuzgKhdqo51UYVKqwgcdGBT4zst41cgtJ6fDrto",
  "key35": "noMhQvfcqNSSjeBPaRNKwYSaqPTYb1sHJewb6KxekPaCjGQpwusveGZ553w5MndeAvzvUcHQaWFY4nnGCXZzEH6",
  "key36": "4BgdqSsggg1KT9VThhMDLRTcCJ3PQQTeSskfiiUtDBx8tYd98vSbopT2px7jtttjv6RxkJTAiWh9MoN8P7v7RfLZ",
  "key37": "maVtLZvhzQubQYU2YUG1PeqwFRs3qvwvK4ddRDW561YQUFskhrBki5ozfTZuednBvHVUyPDRrgLsQ3jQFvHXvfs",
  "key38": "4XdLokqEiALXB7hVfMje7QD1WECBFMDwZzKCWVHGkW4zb6YxRh5ugG9NYBq2esxL1CUF8bzXtTgq7xiRsvptiFuV",
  "key39": "8bLfQee8cCU8diY43o1B8mM9ennYAhE4Tviy4Ewpy37V6Y6X5uYnoGxMfy6zv2Jx1wqaZKePPhUA7x38i8rkcUr",
  "key40": "kYVX7SpmWXhXsbNhEqUrBpiN8NZFombVLSVkaVbkXr43xdcqdZmcPbXoj4AmcMEKA4oNv7EZcc7jziUAJYQozZi",
  "key41": "615EpfkahhJFcBaxcN5Q72RP3RLi8q6ucipuijNECmhxxNVCRk1fp3bD4TmPq5pBQviYiTwVX1iaWSVr1fWwPgar",
  "key42": "5ZnkWVH3pNnQAtTnxbHtxjVVL8jUU2tXVCd2ecJvnoyKv4NVNJDwxcPi9VhGfCJcBJYGRRH7ShcoQ1iGnQkannou",
  "key43": "51LTs7B7d6F2PWmXpa61gFstuo3DzLQa3J5VjBVx86VmMhx86Ri48YeKrkYb5ttswwGrKz29Ak52VgnCJJtzj2NY"
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
