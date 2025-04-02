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
    "2xWx3G3tHr2MGy1bMqHSqudXq55URAbJCNTUTdrPrkxc7qcXFqEJiq4FWBqb2hXhqZEGbwB5LZxNvQ5rmSPJLeRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkr8mR6gZCuW3VbFgEyAYLnuJZJdJwn556NijzxLxJSC7wzhA6pEjGVnky6qbvzshC4kGJRanMohcBcKeNCtk8s",
  "key1": "5pzPKtmmdeYCNfLHetcgYccffM74nZ5Yq7hbCAHKzJ5vHYuQwMfjKCwMVDFaM6EMsovo4DMUSdf7xX3qpvdcQGEG",
  "key2": "2jYZCuu6Wm4Pdet62Unew9U5P65GKc2LbyDinPLCtRsdBhvoZzsoydHW27r7kmEaM62Eida75YUWLPtWjmqY7zpa",
  "key3": "nLyQUz3fwiNMmEcPaKQg67t7iGFGZKFoTGuEzecDj1VFsGV8CeRWHnZksV7X1H4LUSkNG2ycreXZjjarV2zEk8o",
  "key4": "3uozU3pK9MfQg2Yyff1bRjW8DJfz9R5aQP7vDTCXHDxzhbb7x7LgcSHHEp3bYPr9NSS3Vaxmviz5rHjfPSdNC5Yy",
  "key5": "486xvkGqViFxw7itAkCg9deAPtieAB1cCbXXSMzx2QTdsH3F8f2SuV3BSR48RsfLZNwhsEXrLKNXEJPjcdqBLP4e",
  "key6": "5Rn2WE9jUwgthFbdCQGszqRCL7uXk4ciY57j4RVPfc7FjzrCxJ3vz4XwAHn2aFDCN3fFPEB6DNN92aoNs23tbXPM",
  "key7": "3m77Gp2v4heXTNUB3np31uA2wedzwH9r8VLcjqQet8onvtykRHs8qkFFaLTYye2KRqxLRB2Fu5EozxmJqcZ4cJux",
  "key8": "3f7iE9AMtxFpHCyiJd1vM1e9GBzGFrAKDoVvy7euduqbzGvHHSyz8xVTUSc8aPfd7fZYWsyS9VXY8VVpyR2fe7Dh",
  "key9": "25ifeAa8PBStEbySsxYrUT83QNsnkq28SE7e6gBAPCmiew2QqvoxPSqpkBSKBEgWFtsKbEyK56stUxcGsd85QtPW",
  "key10": "3GACXApbSR8ZfDszKc1KEWKWnfkbBBrec344XTv8vsgx68UVjYSHis4BRgXpw8z57nkBmyqs59kpe1jFm2iYnxLx",
  "key11": "4J3Z3J1DYkmVsn97e3Kd71rgnmiQjgMra3xa1QwJgkRR6XU4kpe5YZSbg8gGZYef9MkobWCGGw5TPPvxFazfDYvH",
  "key12": "5caZuQZ8U1SDqnBxF6xpkdLbpFtWfWLrpu3Bdi5CCY67NWYpJeftUNZrBVNiXmTP9K7CQtPBUNjufunMENmzFWem",
  "key13": "2dQdrjtNpUf2RLqYWTM6Rqgz2b34rdgdSfh5masXi3kiuNd9WDMK4KAYHvA3yQ57ckaHgsoW2cQG4jwGiYjFdr5v",
  "key14": "39YZYVPiaMVnfP9YucdS9j7L1LiWSfNzEYqFBMaBMRdSKLnkuw5Qgvoni55gEXvBWGmCk8gsmwSGB4BjHcq7Ls91",
  "key15": "3WVQdnpe3GEX2yVWMpKiDN7MFQBHzCSkLXw9XwDnVZ6BPMqFiLoKs7cmbKzwqcsuPwzvxsp4fQ4RmRcs1Hm1H6m5",
  "key16": "5G9ZNsT8hqbAgjsPfiLLT3URqybrq8GhRsyK15WxJEe6wL36ZK4hr5dtzX9cuNiNjaA5CEidTn7pSyJXTP2PWkjQ",
  "key17": "3vpuKWbC5WwXKGC4HSKMWrQEzog6nfBnjXy1XuYbTfzJ2cTmS5RsncqQVLXg8Ahgy92c6hH4EhFLQCoSqMJvtSht",
  "key18": "67S9pBY9yM3sFDgcHZWGs1y6ZzNc7t5bxBYY7fggbKAhDwa1JgZutHfgKgiJomXVcAETEGSurXT2iCzPvt9Nwz1C",
  "key19": "3QEgMV8qRmmQau31YMrxhv27VkD38x7SCC6M4GEPqVy1eAxwvwse8pvuWM4c4ANdTy4igDrBQdaV4HahXEAFQNLv",
  "key20": "27Z1MNSeKsnrPM7yBQQ3wVubzXsmjJtzEYe5Ayj5U7Rs7XLML32XPS52261ADkXf6EXDZnC6a5qWzkSh7bYR9Fjn",
  "key21": "jWLf2mLJrdVQqBTVZwEPf36hvaXUFGeTZKDKJDRjZBXrRwTReMVxBPFAMTtgEWVcr9ormVKJAc5qHLMWL9TgJPg",
  "key22": "3RM4vnufwed1biBVKTgWZiwavwtWWdipy5ca7wZrrZhXTCairasB9uRDfDAaH72QHaUGhgRkT4gM11LboKst6yED",
  "key23": "5Nio1L7Yhaw4CZYY5WK1h6MSsyVtZNw2pPih31Av5yZyfLyVHKcjy8FNrKzeYcToFZ6E55TZfXQmVGnQX27C1HQh",
  "key24": "2iPwZuJgxCN7EiLVNj8fW48EVhr7oWcpSeSiA8A7JSHxLLsopH5Aqhhwubg97duEoqxrAJA9gQRqdN9wBf3MhL4f",
  "key25": "2Eb64BzTmraWBwqiYWrJGjSVQ97aZ193uzMty7P9w78ecLc224hQTfSsJDvXC2DEdeq2BqaZRPUrgrnayBgTtmKg",
  "key26": "3UsEqo7e5bG1pbwkereQEEG5YtdwEcSDs8T8quc3km2fF3euPuat7Jb4yazu7Qn5N9vxdiiUF4MuRiwkBM1Vy5B3",
  "key27": "24hYpEfb1ZTFdVxpdXkJWReyPsrev3CwEScuXbCuLNjcaoi4pcDysXmrHHqhfiMsJRf5JnvX8Ebct1WkywpaGW2X",
  "key28": "2KHVSaVbnBWFeJPztY794oRMzA78Wipg7ruwo1jqRHgEACkDGH49sruUqhC6V6LZntt2L1M8xfusGKKNBCmvEntk",
  "key29": "66JbBMCnTBgxTPxiQ34Nc8VrwRunKNKEpShnsAYxbL6EfezprG26GP9yE3qHbpJLXuVV21gFkJDTyyCuB59PHhE9",
  "key30": "3K5NK6jdGYnicnMqDaYY1oZgJx5Gfs5Hb8V98MGph963zARKGwbxiGrbwxCbMopY7YbxVkiALaTEGmsVAHn7GR5g",
  "key31": "3sVcTtfcpxU2MrC13PqYxAa8sRbXBiXYqtrgdCX75Theg9qE5U7DeVcRMqGvW3hvRYVhpZXk5F7quN1ubvDwM38Q",
  "key32": "2jarCUHGCwfi5wcEhPSrLij1YU5fZ1Lvd54KFzrTQZqkfXn2iaFonMPR2u2tKLjGxdd5QDdNDrcpVYg1s172Rvjd",
  "key33": "2gexAPGpxgLVXmKL1jhHjWiaqBXWhipYTGKeMMGv16nKjq6edSgFAD3TxsdriNbppBuWxmVuij7RW1pkfwfvBbnr",
  "key34": "4cojmbvv1Kr9ifkNDnPgjLcCcPTGhKeq1MS66C68pcG1BW8YhP5wh5q3RS3etRT9ka1TGwovbLJT6fruAumPkVYw",
  "key35": "8hxTjMxevG5Nk9CswE9A49xQ1qbWJKpjBMg8qm1BkGfEsohkC8mmNTyfzDCWWUDGo318s68nDaAVceaw3quFqU7",
  "key36": "4PtoMRABkunbH6vPUe3FzbC4SAx27aP8zCE5W4AnFfYVfSNEonwrW5nNHMwb1zMTUgmkNECMJ3fDGaQXPmW82Xcj",
  "key37": "2UXF6tuNZLxTef3GtDnJAyK3qSyvVDn4Bvj9EF6PguAmRNqBAx5LNck76ymmjSu3PLFKzKj6P5aoat3WKZRpXr4V",
  "key38": "2PNo7oy2k64Ekad5o29dH8R3Ck5cbAdsi31hNu3yHb8hN8QLuBAusUcnAXmgA6bdukMaBmMzuinh8bKA9AFHqpUi",
  "key39": "4mRb6Ew52VrFhyUSBiFTAp3KpueFfPZR7nJRrRuvMeJhadbYRRQC9NgyCzuk7mfTiqCpn4F76DzdcvdZuctxj572",
  "key40": "cz8DbPKnnRKtgoXvnBYQ9dZM7mCuuANefEB9EgT9PgyzGAqEM2JrptnHcWtCoJMzgHaNhHV7s3Cbd1D8xRBUfFy",
  "key41": "3WafTxQUT3az2mhDBgv4BpyTz94b2QBkqoDKw6b1jG6oWH3mmvrpKqKzcJRqGoPy8wbubU9B4oWV9AEVu1piLaYP",
  "key42": "3RQbe9dEeSrb8eJLBHjL6YcDiiMftXcdGZF9YtfcLGs54ud3nYfkKiSZmRi1ZpPeipsre3Vf7WAkGgWpEouKt1pd",
  "key43": "2BPPLVEqc3EQWpPX3FsoUei275cux8JLWUXk9WwuubhQVw7e2jek8aJi1bcinASGiAqGWxKa6nAoXt9yuDzsbL54",
  "key44": "3V6r1oZjyXuEK7W7PkwGG75tpyn7qYUZsbYC6m9xJR4wN8AnCofq8jqRvSJie5noxevq2n53Rw76gYcoEVL8Tjpg",
  "key45": "3x8tQDszs9nSvzY5JEN38vesSe7vjgjnVaw5Lrb5eTKT2yXqoY6imjj7hndjYffdEUABX3HGDMZ8caWBWyqW6aDs",
  "key46": "8H2dnCaoXM51nhZ7YamDHS7G3XJ7oBm9G1pPFZni9H7CVUuzvHhdemDNg97E8P2wJEbxLqe4GzgDJZr3WbaHk6C"
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
