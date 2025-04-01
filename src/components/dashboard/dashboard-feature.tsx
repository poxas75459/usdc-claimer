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
    "3NTyMhGsihsamtoqArhxsVKmmjyiCCHkByHdJA3uH83ySM4GKn7Fb2vC66Y6K4sBgAuVVc1cNCWo7cNrd8EGLMZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzFnBpwhkxbYRr9Mq4J29XQxnGVSdqLJ2VzEP8zdKohVCxvxpqNyzXn9ayQZ2LQjCA9zzRNN4EpR17Xf8nu1mgs",
  "key1": "2KKfYxyMZvfpfb25aHdEakVxgp2RRgu6TQT8J6h3XumLc5aPSnZ6UL8AAoQ7n1aQEBDRq8qPRji9xVT1hoATEWDM",
  "key2": "4syGvnHRS6k66R49bFxoFyLDP3ahEqKFfM5b9qV4wAtSV8ZCpUXXL1E6cKDfdGwxknKR5mVMMt6XNYWMt7KgzYHz",
  "key3": "FuJyzAXCFxgNHaqCHqB2QSC55gZQRGmRd6H6kSDDZMBJLRxERzLpGXamTfSBb1FXtmFgyembYNZxMm9e476a8Az",
  "key4": "4dnHXRScF8NAFYefCMDD9sNTrLK5ZA3T4dfySXdYZVXkhWqL8ufZATpwpfx8E8ASRTjBp8cxgTiUuN4cmR5c5mNH",
  "key5": "41kPkpn8jYZZhR4V4DntzcLqddP6KCBNvqBWRLivuNLyzfUqUMmmr65LnFDS9Weor3eJCJQizHGEpdZrdBVTih4m",
  "key6": "3pSZyTKY5kxwRc4ywdEKQ4cP8ewwRmZ97Aa83eWy9FJoQRy8v1r7oQqZpwBxgi9V2ez17m1GBfZ1QZNxwcFmSRt7",
  "key7": "2prpkYyZvxnK6aLaTK6TS87RxtyMpvgH1MRU47grpBrFYktUHNMb25T2xuUJEYW6LQtk4ukCg4CYECtREVch9xQu",
  "key8": "3QLSN4TSYBXZscAuv4QS9E6LXMyr3Y7GC2XsBKzmEPcnUo9MXJr6syKS2BWkRd9yvtXdySof73a2FusG3s28CJ33",
  "key9": "5Z2PR3SgCGrQizyGWTcLwa2Z7PsfEzjtF1QXBU7Q2TgRr78QhPWcAiqv6rBSyB59MWvQ1uAe96WWqPD5NbWjMDui",
  "key10": "pBrBrKsT7oCE7XcYMnUSq9QW3FCZx4ssMQNyMNtaArobUi6i9CTyNgDDrHj1GihYw3PwDWW5Q4v5wRGHLS8UHSN",
  "key11": "4ayDBUgcrtk5zk82w6MhUmFqGGqLvY7uLBte14QYcejRiPNFnp1q7LXe4UHQWyhfGi5ThY6cWtCCioF6kttpoxAf",
  "key12": "2fUmHVVprqiiTWDKmD6oMXHS2SdgyPphKabUE1kbtEaGTx6vLA26CUfYQHv1einSjxpqMtCwQmVfRP3yxwL7eTwx",
  "key13": "4PVGcdDb3vQ3sGcNhDyBpnTTJzXYjV91sbh2ffKP6pzHDiDVQmvBrR82GxEZToGJfWgtCc1LiybWxsafzd8k2fJp",
  "key14": "5oRw81pnMoMpDd5PwpP5wruU6rYphkMFwTGvLnGiHtMhuqPtKAB8YW6paDeh4q6HNhL23yGgC6amsXeaDCmgWv3L",
  "key15": "5rMve95g4jorU3cS3YaoSkdUp7enQLy6HgPaHqW3rKJBJ12VGJRWjvMiiZFBu1aXJNmZ6MHPhywjVR5wxm3yQuFt",
  "key16": "2uSwsRrM1cj3u8r1P8cyT2WjmKm4YfXe5oEAwtyNzB7qQwubGSiWLFkmCn7bzXgY5bRQ7L21B3AVVtkrKJKsd34Z",
  "key17": "5GxKSqx7NtBcii4Wb1TQ7T4FMmo3M65HJTNJJnNm4QY9b69Ehn7BVKFNqR3hHbhbLFuCrWVeUBZ6v7bATrY2wmj3",
  "key18": "YE4FMJMqmA1p3iKUuNhx6SxvJBBKcGe3X8qtH2KUyb6cJ5F3vTgKpGnYuYZ6Hfh1SC8npeuWAUHKbJEidcomTcN",
  "key19": "46Rbi7RHfQv6vKvfU8A7JwciDwsJ3pYPbEuBXgEdK3T6pXLwbjWtXREBHuWYpJ57eeG449QG74LDsTPXMCGQ3QEg",
  "key20": "2cRDYiVE3KrvsztDACdfPmKnek8pRs7ZLeweUjR8uL7Ny3oPFUoixokmQWJmPcRHAbZD1fD5wFecNPJjzoyiWRcQ",
  "key21": "MoaNBwSpXAaVwoPoMmqh9EPqMsBAjDaXbv5nts7EyAZVE3Xsh33uUtiagP6UVNWoosEkVyVJGuyuP8GsbkJVdM5",
  "key22": "5FAW52xABno9PR8PhaDTzUgyYkc45Pzj6i2oZQihtbKYWd2wPND9N5c67kt87koJ5vpxWqWGV4DTJy8y3rRZ9q3A",
  "key23": "386vobpmajsu94WbgE5HNVEZh21fefoQ3rsTKnMG7y3epQCLu9YfqmfWqHgWYjPQ5RKHADgKLc7zVq1BV1WtG181",
  "key24": "42cfrZY3yLyX3sLYe9HikFqrFxCqVofhEEDhxWHhSt4kKHFGnJo9UN33wg4uCDNH6rNa57KTzG1iBnkiuK7zteJM",
  "key25": "5G3n5pdESDhEd3gpqKisnyqaZ3rFPAdVcPfZUhMj9ZcYZTvHwqVB3UnELChmeSJ3isFGWaqDaeDWHnUHQTueuVzs",
  "key26": "zk5BRmsyLR4UTbsKvkJVCnqWunLu6tiw9Ggibe5fXSt52gqhBZ63srWiYhZrWpUySToCPMyKMNL5k8FrByy14zE",
  "key27": "4V9gQ3ZYfpV57viJX9wsxhKhcaop72mziaKzqxrWEAXJqjBTqSBG1ReEe7XcRWdq4wQpa6pVEUooifac2FsSZdtz",
  "key28": "3NxyiagkhvatcrhniS2yxnezyVnJQaLMMuHqHC44qxedXQLk7yNdvRtKd25YJsfFYJXy2LgABUFtQYb2S1VUoYJf",
  "key29": "AZYhJoYRstUUNVcBajRrxaoRfpgVHSBm65dPh63fHGRuMMNpYaZua8abnHbBLKrRzdsEv9voWbKwePJScs77ztk",
  "key30": "3awamafiZsr9JWLYHbEJtpKUZpsemh87nXDf9ooYJwF9Zgxtkg5vXnN6PUXCyQMPdhcpNvQWEeUx3D9GrvMktx53",
  "key31": "5u4QJnaDwGZ2V5jZnCmcxiLBdYc9iUySSZqFdmAcxfxRyYz7J6NEx5uiZeTjcTkFvjMdkdYYmt6gbvqHwavPHnfc",
  "key32": "34hNXfLphqLXx9of5zM1aDLZRYdCBUepU6YN24QvKrMxgnw4T9qVqbMLQKbpDxo64Lr85wibiFGzfAnajCR25png",
  "key33": "4qx1p89v2qRb4DBE6QWKf8UfwmQowjbpSxBvFx7Eecom1xdWNha67wbFk1736Cf7mbB7igV31a1E8eFqbLGx1nHd",
  "key34": "XrXHuME9bd3tUXDB9WjkouzT3XK55q5Q2ntZiFbfG4yfNV12UUrUPANCgjPhiv7AL16gBNJXhuZC2PU4hXw5V8N",
  "key35": "39qhiVbGPJBDcm1Bc8171jaFmviWaDdGmZ4o41a3a4oSbEbu2HL6gmndmtxnwDVZAGoBVi4B14m5a6nBSamE4ci8",
  "key36": "477ay3ZZ6jgXjkExzZXa7Z7F9DNeGXchCmxvKbkjg6FHxVCyAqxj9aHpvN4ijYfE2ZmGoaidE8muJvvPwKjuR51e",
  "key37": "2q5zYmUsY7QUtrYS8iPpppNdJHGPc21j4NcvzFSyR2qGzQxN6M1TQk5z7eBwe628CqYpH2KfevLAbxH1vDqEuZsC",
  "key38": "58M3MK2Zcbra6L9qmEAJRU1KLR66r9uwBxfS8vkwbj6AawTek55iTz1GT2qR5ZDEigdA7DraAVc9ThkyR2LKqua5",
  "key39": "3qNYtjdn11VYrDakbao2WPoMVQCikoasXUijdFUFG49US4jJhEqjXXt8DNobbYBk2UwCqRTZLtm9pxss8qfjCK57"
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
