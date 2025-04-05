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
    "EyH26qYwzGLYxq9c38RFQXwEuxDnWUwymzHQSwCjSpJ8uRJqTcpMf2LAeA8jy1EvYfCC9ThoLw4edBUFQi1B2Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dmcZpVqHP593cBR67tqGfxEPQgifQpBys4d1WAnNAZMu4u5rVpDBcWnKfbJYSHTaGMGfXaU3DoEDh6xnTp9MzgB",
  "key1": "QTNVKQCVaJzsxYK9CXMJqSJSxGhbQdS2ApXpBab27hvdD17dY7aaQz7VSvKKnmoRa3iTYCF6NgrXGyTuMWKbb5z",
  "key2": "3XKLoDuba7dKojGpr6z6TJQZWYx3U8eoAWTn8BQ6iy3r7VffNefo71GfJZaryxJMNUzfywa2V8MoiPEkqmLJoaPm",
  "key3": "2CyBo9JnrL6MAsQ6qQWE2YLwUoBGnRMVduhs8U5CVk183Ps3cNrAQSQTbKVU3sQy4iDtnuxXeAwKdwkqigPFzagd",
  "key4": "TH459DJoBPW3zznQgM69Jx1oQuD4i6TH32rEFqWYtnG1PHC1sTu4fxkY7yktyFinc3tSwoPYYNbxscBoNKTE64M",
  "key5": "24e7R3AF2RfNqTJ7TEuVuEmv8KcgRtvVaJWvP7qx5GKjPHUzrcoe32CGXgf9tMZ7Nztsgdh18JAnrMoLULTdTJ8k",
  "key6": "5XAbNp2ZTdStASa8FjDJfjJ5y3yV8Q8KCYUUML4t4jpNEMr46QPPbt4zcARGgXjGASpqJ8UwR3o9dK9NCWSXPJnj",
  "key7": "4cuj2h3TKaUt9F3yZsoSXEsgJAS9XT7M5UkcNBYh1pNLJwimv3KxPVZYq2nZyUXFcWJGUA6Sy8pqqBtaRVopBoti",
  "key8": "2DT7KAJfvz41yNidDbboc7CzBs2QeJPegsG93WWqDKFZnEeb84a1nFLpxqES1uPfu8sYGtMezu2euzrrEeFVzGx4",
  "key9": "YobeC2eEhKfkS92VH6tyFMGfL9W9QjCQWewLS2Rs1AThTkg2x8PHQbjWuCfdo4kJJkDbHyokF5TYhN1DsfUt4wx",
  "key10": "2CXMKSv4zzrW5EarkLp76GhXc5bBPnVrYwmuP1D2KBX4rFgKEKb1S7hvvJCS2CMd27dvRGD89mJ2xht18TLJsVLm",
  "key11": "2BpE2SLdL8vkPEckMsrz4MfcBzxaJcMe1b2vSSGrF5AaSdiZimbvfdfRmeCzaEMgWnGyDnbRM5QhR4baQkoptS19",
  "key12": "5mJWEnjCSeuRRCwmq8NxNMpHDetTKntSZfKwHEzFWEbQ5nhEchhoZDCS9TfsPZiLt9H5jjpRocjjDituNtZ7JSQa",
  "key13": "5C2FMN5JfjA3vG4yx3GeBzpY8yAqx8WsJhoT5TcQYDrA8ATH5qBTVUrP4TPjKzsT27p63Wv7L2K93j73CSdBM4bv",
  "key14": "4AQvTALRwELoRfmZUaAHSYvU2ybuFKXPRtvLawdtCfLxKasLfWz66r9wmWPxYXvhqgAXGaFXKXw1xLuxzxdGqSQN",
  "key15": "2EWoLHSQ9xaUNSA6e6pGBZ6WQ7kkiP7qgiDEV5AFhNMLCMNxUiARCNTzDHChw14HEzpjF3PccPvc6waFMFh4q1YZ",
  "key16": "4rhG21pp5xvGHJVuTCbitwCxLGrSCgAZBw7JBjDvjD6UbkPxFvLch1FoZeG1y5BgZBW7rgkYsTB1EpcbxoTm1f2E",
  "key17": "2vbUo2i2c6wRzXZqp9KVzghC6q9MrwncDtTjuKbYVJo1BwwxXF69d14sQXfTGcyfEwE9zxj6M9fp7KrpYtihJnr9",
  "key18": "nYTrgjR5LvSQUF4VeRyUE1QQJnTiebcYsiM7asbPK2x4qU2Yurvg2VNsostYGux3RFHtB3gfqmo6AjARzn5gR7N",
  "key19": "3kQjS7wX1LRCbfB3GnqZEbS9HXJeiFPshinHsD6eJNC6dDZ9o3X7y3WtkvzsAxvuKUJNA6XR8R4QQ3YRQ9kP5Uwc",
  "key20": "pPKhzzmQkTM6iNsw9T7SWf79VZym3Xaq8uAFnC3AyAcfhFs1NL9pmEHUdQhkQUfPkGif6y9ef6dk1nRr3QReNMV",
  "key21": "499w1y44dqMSg1gz4zaoCL3rSZ5sg1DGqu2m5RNyZvCaiNFeyoqrWAqx4CyfELs8yL2nPB5hHb6Ri2gWRwX1o28H",
  "key22": "MzWi3nr7yJjnHiseGCMEyPpqedKx3Krqa4fMQV36umpxmYXfHvVXqGWEC2rxPWXhxe58cF9xM1AMWXdxC74wgiq",
  "key23": "5VPtir6RJzFu84i8YtG6UsU4VvXYX9moTkFQhRqWzNL1ziUQX2GsrxLPBxTFVXEvibRVmGcYmHyK3hgu8KywDRWw",
  "key24": "4gYCMnvg3VK8RLmFSN5vJppr2RLsVF2eNF3ut5RthfrTbVzP5ZxrdbZeJWucCvJjpMEhhQ4UZFLinhAJsLksGtcP",
  "key25": "Ys38XnKV4QXuw7Yc1HErvDdZ3q11WD8rAD9xsRYHgqbm5SFuLRZ6fNyz4WQpRWg9VqhUf6u66TkCEBt7zU5MfRQ",
  "key26": "4VvS9kHMz2nhr6rKvPmoZTp38tZTxmfqVSXh1KtJDQ3idqujvuNcUvyK9UmxGpHWEd3BCbNZ3tKWAo9QbBkKXoVT",
  "key27": "WRhoGsLaK8VTjv8yuzHfVHw3HniRCQfsy6jQ3gzyXrBp83dfbnMpyDPkE9ALxnqPryiqoGtYUBWhSoSdnvZcRzL",
  "key28": "5oSReWHtqDJztHcYzfP3QbL7mQCgXr9Uf19Zc6UCw1mrvN4rhGMW2zkDuqdi76KDu1kqGvzCvj9gCz3jTy3poSQY",
  "key29": "3Ax562joEnU4fWccRyYspc652be572gNtSNMEeoyagYzW7iTRK5b13qFCi8Ag4r3eC9HuCs3qZwjA6U4VWodaBdq",
  "key30": "293vUuGGgwJYNUsbFYCNs7MNpwzLXSpYN6Qudw6SvN3hJEX4wDtRLwUKPa9MLvCuVXn1t2j6k7q22mfoYWbqWUuo",
  "key31": "i3joPEc9WyoDry7kG4YpQTwhvR7Hu7pkgkuiNgaE6CCgjAQw6sUXLHrDB9PABLti9pZk8oxGYJTQN6rWxVwkyev",
  "key32": "yfmLZnm5ZaWTLN8KXwLrbXjBkjDkUaD5vjufztRbSC4bZPR5aYcLpptm2wESvKvpsqM9K8JW5GAtmdbvXgxutjv",
  "key33": "27FjkkgsqJw7zvoqkn4WEffUpkm5VWFSiq2CbT1acH72RC7EtvP9hsxNa5KM5UcUkHfo8aHvE2PbV9qKGVV5PDbx",
  "key34": "59AZCVgKximdmLSAh2EPhWaNapFmYZ9g2jLNUxHQCVbexUUxCa85yvPRwFo4BxtfxXogLMR9z3y3i43F9xZJkSZG",
  "key35": "9wcyatS6r3FqYkKDp3PMnizgYWPifDokmiAFLZTr6HujXHxDuTyDj2WGGQDPy1Ur5HqC5ZtRPHxi2JGwoMfRupR",
  "key36": "4DWbyjc5MoWwN42s8o4ufgwL6hCRzPA1BKeQGpGdWEjX176H24bEHrU4pKJFtpBT6XCTBDt5NKENBLqVKeD3Ajaa",
  "key37": "3jkeyF5Dzm91Xfg83Leas2ypiSLQSa1ktp71Kn8VzKdv9mu6Hkigan3zmxh4fSWZkH25rJuKKw8J3wSZPwDAe1Kj",
  "key38": "4JV3rU3FqCMThm7Dzscz2xkSdj8QHypRjJW6JUTHdyhkNrhYHKgdC8SEP3s3GJfufGUGwyAiJkuzY4oYNe95VTAz",
  "key39": "4CWkBG17SpioXmRpCud2kiGhXsbu3sNCYsk2iSTuRPr8W21ofRfYai8wgXJuaHzJWtR2MyNkWEjcU9xjfVr8mdyN",
  "key40": "2yUSYoYPKzFPE8t4wgcvXmafafP2qmHuuTZKZY8XffmitWBtzWwAuWLQa3ivrMm5h5X5ZBTaG6N5yeeBtuTeUGAY",
  "key41": "2JLXChQQPjyonqUSPZRfWqyQUhc6UZJWqrWh2WwSDXzyfDKMq3ADeMt9hcWSuUEh1cpvfvdaEKmUrAYe8E5iTKTm",
  "key42": "huSvGgNiozk9WghMDfZSxxrKRiTru5LfcAM3kNUPxmQnywYsS53GbUTjrbFfgasB7Qt84KqqkGLt1YEcTchUNqn",
  "key43": "5zTEGZBZr4FRB6ss26bFwKPWe1KwRPd6qPuvULnpH6ViMyRQhV8WmgSWaBcKHb2u53nAQirvriWjNHjWeKJFsus4",
  "key44": "4pMhfR1LKJ769HswTzCSPVc1czhA9yoTxSYhBWD8p6wkRNczwvLVxpcnsnBX2vhGTjWJAzD88dJxPg4JgbMta9ef"
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
