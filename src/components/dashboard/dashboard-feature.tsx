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
    "v5TxtNj7AEkmhevGteBEGmsGHx7HgAnwV2Mg3G8fSCpQBvDp3RkZPJfmwatUxw97o4QmBcHbMU5CDq1Mcod9CVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1GkRTKhCUcfnAzDhbdQeissXHgis8vw4zx1xMvnwSnXzdqeVqsWDGnEt91mQ8bFZXtuSUgEAivfnecbSqXXwh3",
  "key1": "VGWNyvLa75hBUpf1pYwjQU8Gp7v4KFcWFytw1LsTzWtor5cZfhzN6j9H333ogDJkS6WvWiX31YZb3pxt4qWbRQB",
  "key2": "5MiskPcYRjGtUqokgxJwsf1LuVKz1AhxxfChe914tRBWFmcokCoaQKpifQ6R93WboWRi8LHTFa1wzzXYNvrtLJLs",
  "key3": "hi5VcrWfAUSbJcXbkGrK2qnsA7YxLjhD2mCVL5TKvzYtn5AxsXhxxUdk6SCkuCv9GnYkwQL1RCr1njynzvqFMec",
  "key4": "66rTGLwU3ZumpqeHtpxBjYTn5NvwXtBFn3KD8rjaLCchgBeBdiR1MjN7vivW3fD9Nq5ynTg1rWQmbGamESnGiDcd",
  "key5": "2aC9hzf6YG69iLoVCgRz9aEXrXQess9NQ8EaWusoqefK4C66LQw8VwBEqdMgc3Aa7VRi3ZNnqtEm76pveoWjYUoC",
  "key6": "5UgR4TENfCe3cnMSttcGsp9yBs1XHzHkrhwrKNNVcekwHdnnTcyxM12HwJmdHXgqPVG6jzB1KjyRhjNeRMmMyezc",
  "key7": "4mEZH4CYb2J756bLps1yfT3LiogCNuRsgKpLL9EfrKZrE74aUcpUkrbspsSJc7DEZe8htwvtp11SdQnrwnEs3TA3",
  "key8": "2uznakCpuuN2YBk5wGeqCGm8YTDoN7wpxSzhiEWLd8WLsyv72sWv2J5JM1MtXRz5qYMfqYVCuDsE5Ju1nKc1Qzgt",
  "key9": "2DXEHLssH2x7Kj36SNQcwT1eviZGU5ihBLQBKEtQMFJCdAVM2iX1L9G4KXApAfdDF2qhHzecseH15i6XsLJGdLNu",
  "key10": "5AmQRoSiXcDv9nCKD16Hatw4xZywFtCckgWF4wzrVq7DViXjd3f6ziVjYxDykWwnhRyo3iuPL6z5x1996HwzuKVe",
  "key11": "46kaxTnAEV4H49iYLtr3y36oQTHP8xBT2rxEeah9wh9mPbppZTFxdSKKseSaqxHGD43tgoADRwPmdxfvhbVUxBGh",
  "key12": "3tbVNZLV8t2WS95CyqutYCdiaPCH4Yckx7HN1avrWozaiZvhViZLWQEDPEj1DHrRkKqm1eJn5ebN7Gqq8rgcA3DN",
  "key13": "3LtFVgcpMbQXwWL4H4guGzqRKnE3TD6Ey1stFcHKbg1fEqK1tkCzFcsBiv35cvokTfXEXoPffwnZz9916jQwTKnZ",
  "key14": "UCTek2bgkh89XBtcHCym6dTPxu3N4G8mHELt5Y3eEjPv9oLATbuBxirnC649iZ6B4H4quAUEJcQDFVwHhdYaCmn",
  "key15": "iFmnAwF7E8odEN6U1PkxckDKDXHiCzjPhxAJ9Z3ZfnDJxbwKaJYwNwtLD5TCQkzZDwbC5ZzZwuQwesLKgX2bvyM",
  "key16": "3DNNrAnpHqEWaiMQvMUmNrfkuirhmqEiuzwNaQfbqPtRrqdbaWyPCL9yXXGfLqMM1aNVUfuyWAbQfESBGKEfGWSY",
  "key17": "2HQe5ffw91p3kG9cPTJ2x7JhqDjDb2YR5pP1c1pMEMFWd6kaQVYQr3cMnQ6YimP2GJNwVVWZztDi1HsUSR9j1LAD",
  "key18": "4PAEVcZpeFdT44wf4C6zcw2jqatg359wGVmvZVVActWSqpReESSQdQMVbb9W9wPYvZEr3htSsHcjxsJobe7sWzJ1",
  "key19": "5QyBcZRY17A9rmG27XHMiDCPvNYsmFSsC5TCRT2dPsRZeY87w4eRvwuCjBRHsfDuo4TWdSyBW244jVhrCdFddLwF",
  "key20": "2KnGmQE9Grzr8ovcc6qJhQFaFM2aA4X3kJorpywTT4kWvoq7qDyTKgYyExoYDzGrXpcstM3XtSxbb7rKFmEhis1P",
  "key21": "4sEZ5nPEWETtEVT5vJBbxZrcZLWz1YXRfj5cvQCMpCUdGz658ZgBWPzDNipQLX55685KWJ2Wb4Ku2GmbU7nG7m7u",
  "key22": "5RLmHa1YXCAaTdKTxfBmoZb8vF1aUKzqdD5v9A1RxDuy7nxb2fG8V4xTUS4EpwpuDUC9JDV7oP1pUsmkMPu5K2x9",
  "key23": "3WUU7mRXb97EY8d6smPaDfRZqmrh1mT1xqkqobLpYZsfN4voetgJBCfRBQtYJdoarZmYsghpeShbHQweoLz2gaR6",
  "key24": "5CtKnHbJGQT67WkXYVz8QSuCDEngCyM1PoUG1UgEmnYY1dGHdPMfUJag1CPsjy8Ppa7kuGzq8ozmDoz5xu7AxF32",
  "key25": "2aAFy2nSsH618pEZcbQcnWiBK8FCr9RMJFz1YCAhE2LUGNtT4VBBx9DgMiEMfrFh2VPPut4tHm9PviRUH74H1ZJQ",
  "key26": "45hFKXyTYD5CsPoTxCAXa2woEGhWWqEFRLHcZDCQYvpcitvEVd3FBdVx5mPCADKXsYu58Eiu5wEbLRJBgk2tQEJ3",
  "key27": "4bErTGM1tnDYJ2ERVx6fNV6yBsggMEiFB1pDW5RSDUB6RjaSCUTiBwfNsSUMmAV4tYYiVfN2rQqFnn3rT6uE3wKt",
  "key28": "S2SdMfcX18M9coUdtMf6cewYMGYA5B1GrG3s6FrPMeLycTnmrWML6SdsKLS3kBBhzcvi1v535Xroa8RoXEwCBqM",
  "key29": "4MknBkWf8CkZwgmrD2EH7NLs3w9NP15encDp6txwjptXnVMwoYtsjmuiE6NcNgoLrAPiqsmvsZEVsVKzJVzUkMZv",
  "key30": "3pnvdyaqXrptg9oZ6M2UoQqxvrdNVZ7M73XvWPpRzE8T2zymNNoe3UB3Gxo9joct9kg8oQRdnDwTq8bH6nwq75rD",
  "key31": "gmFyy3XGgiKTzU2rYuvTtjiWNS2LzQ1KjBXhZ8VNkenSbAk6nyCuQb6YPht6tZjGCFuBRNCdkpk5fLtRbnE4qAm",
  "key32": "2GEFZfrKZw82WSPKRgzmoi55zvYzJyzhMkdD8Q22KbuedW2H4a7HXtPr77Xif87ymbBbrep9M7QG3MV5nNZmciAV",
  "key33": "D5X23kFpFUuKRKuf1M38WevMte2zHZNfc3wVmR2wQDQqsJbT6ynzniUmBnoywFNWbPHsxYTqio6PkHPpRzLfLEv",
  "key34": "77G7Ayr7dj98UAWTmAAbF4gk1kg64F52yA3jFaa4Myw5JPEZiXcWUjjafN5wroJWmgZpbGifMCv9F8zHo3sMukz",
  "key35": "4a9hMSYGe8EoMuvV1MPXK2wx2MoRPtho7p8dfwK52GbJYybH2sFigzxc2soRnFdutbhsdCKk8x7niFLCsXW9GeS4",
  "key36": "GyjCCavJFMK3RWCLeKW21TjQ3pAqFpdckgKzRoJ6QYLMnmwbhvz9fxfUjtd2y9ooXJ47niNxShX7e2sfjbxoWDf",
  "key37": "UiXwrWY9JpX1BiUJyTWFb89xN6BRmuXRVGxdHf9Swsn8txJoMy56gwDzkFs8iwfvPMFWKinpJVmfe8J189WduSm",
  "key38": "54ZuWJRQ4eQHkMFKU8FWjvvqoan5UbQNPFJUcRG3pbHQ7YCSM2Y5rBLFkiAs8pTpUhnybXKVtdqeF9CCtdYRZ9nk",
  "key39": "B8d6hUgo7rUDxg82WTTNhHvnbzfiTz2N4KoGAoMiD6zuaygu2FLXRBKMrq35pnfDS2wfscNrde9JJq2JgsxRJTC",
  "key40": "2oeZSJ7UFXnT3z6hfoZypv11WDtcuNDrT8rWPDJKPdpKCPFNHedr3X65Qxck3fors2xf3s3ocnXHGatRvFMSYsDY",
  "key41": "4SM4kiC4hBLvdYVNsZyTD2p2wXrsshTQ53mWf71UQvwpaVfhSTFaqDTamWQEy7nPLyB3BKYcuyvt9KC9X3rLxJJs",
  "key42": "2CBUyabCEwbpxYtSyMADKnJPikRhVWjwFDbmKdYagWVu1J5LRWV8gjBdSemTa1augtwfxjMigC1nDWq4zedbhWe4",
  "key43": "2Wfp97bfVmHSSdpXPQsR9X54maPsw8raKz8ffaj6U1fhmfhSkKPX9Aq7SD4QELEEWcXD12pz42XkmHdXD2KqJ4rU",
  "key44": "4WnewZMPZL4Vso1TkkS8EktUs8KZgvqRXf3AdKjYwVEACAd4MFU1fZ2tAuXHd4j8quV9uoXxCbzNzKoSXF8q2CL2"
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
