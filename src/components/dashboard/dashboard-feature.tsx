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
    "qDv8CEJ6A3zvxyc3f1APa4wGb8uLTeDCsE2cp1DAUtxrbWGWtMvYHfbA3qx6aLCCQy9A4FxdmP6yueuB2oTwTJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSic7v5YvAZH2ZTnsQYu8FC2DLuZHt9UsrMUe3nYhPb5YbyudGYEwCKD2ZS1c7n2LpuogFbxfMLiNWZgWsqeMFc",
  "key1": "aAtt4yrVMTbkcM71UyBZZtodXtFiSobpMYbH1PLhXU9LxHLwrzxMtCZYCi1cKLRC4rtJySHDsCRBFKD9QAKWwPi",
  "key2": "2hSvEuhjeHNX1FeR9eHNL1LDNv76HRzAbM5zebX5kqk8gU4binno1NaDFMFba1hTsrVzxSmcSQLtzcjD6HRxqCzT",
  "key3": "2mHuBo5rJ4Q76mxdmdqaLUzUcD3XB3cGzxwgSR8zgsLEWmqbQRfS8HQcJPF4P8XFqbw7bLZy8GByc8jvWsuTcdoP",
  "key4": "4661q9YbqdFXJNFPJG4R8k2SC3banKETSmyppyNiKeuDu3QLHpAUCdG4Ssjgs498YZF3wD8h8f754tuRQBaBSTAC",
  "key5": "4Fp1tc25hq4EENBnz6Hhkafgp7xhsozfe7SpCB8aMBiToUQs9uyPJenkhzk86sEf6bkie7wuMav1qtqX1fL8CUsK",
  "key6": "5QWZJMsamCUeeQtT62SJD9ZWpyGoJndedX91jwyMUxXEZk5rGzQMe2P5HMuEerKfMecFTrFNEgXfEABgnMeJPD1s",
  "key7": "4riHyvdq7bizgbzSBRwzMQb9vGgFbjWNpC2NA9EfAMQiDtbzyek1ptxKS7AMJWhddpqb3J56CrJGsABSYEfZprLq",
  "key8": "ig9p91N84tAtdMPwerjeWWZnB6Gzfg75DQUxTNUDDTfZdeL93yKExwzuGEGVcxBFLzQfT5BKghqFkdCXziqsSfk",
  "key9": "33Q74kzx2pbGKyRQFwWdWxCqv5rpwGAnFZ6RCGUmQiaMstegV3zwsbfx16wa3P6EW1S9PsPycLBMBTBhwGsZuZBM",
  "key10": "4Ah6FK3mStoTEh7UabjimwFGSTHM6eUVCKqiBMe7CzkbCeWhCQCvV936uYRzDpiN8SEZmoH2QR62evrCVJDyhFEg",
  "key11": "5SAVqGDpaFbW3k6k63dGJtrzcD93fWqRuhCrJSaisKBQqgccpLNKQDVa9jCBwx5zZprpFAshiy1UXimsSKXmwQNr",
  "key12": "5Sp8YGHkgiJGvjKN366SH3ePzbfPLNwNL44FtvFA9s3fwqT94hsWfwCqEh2XbAPLs9fBo1aHGvit1k6EjRwTeNsp",
  "key13": "4HTJSJ56DT8iPpYsACtAghbtvV26jFaXYvHrxVFZBwWoiCw8H8aHjH6q1MnPZJ2cUDgYTsMK3SZxt475hKNdnRjU",
  "key14": "3i9yu2Q1SiQM4PntgK3uU3oabwvJp3izvspUVRDmsVrkSmdhJiPFiEg34S6ZKZsjcNDUk6p5QamRgWJuQq2z9Zev",
  "key15": "2SGmhiMRipDBdAPYEF8psfkZ6tCHsSFpVR8ZpxUxoAFtY1FTj5SWZdzZmj1iFnqbwdeZsz66wJYL65keb6DWWUpi",
  "key16": "5PM5zksWAxGYXBqBcNSTqeVhu4UJAdRegF2ACT2e14T62edLF7JEHemhcFgbkQkVgCvdfJ6cwUR9wzgZ9gzYWgNW",
  "key17": "3fS485KjLgyfbg77Q1rRNq3aJMQmCiLjCyGpvDLbaY1gARYi42xTgDdBaQ8sJ6NBbaHzUetRzbQVEzEoXC9SDB8c",
  "key18": "3wsGQfGmYbT5qyYRasYdG7cqJx732L1rmtuN6r28qZKeCKxQbEJrLSXcdBzX4JxZM5tDgd9wLtx8aJiuTSNxA5hw",
  "key19": "5DikbbUj3ZxqU2dju6V9xekPutswAyL1yGLsPQdebTWsQ1nzrWupL7Pj2Yu1DKtACXLg8s5PucqptZyJuMehDYAX",
  "key20": "5FuWKdvMMSk1CJUpRLMBKkgzoM3D9UUnKaiwRN3nw7nWAUZVPup4bmdAwE2DH8YvGQd3wvCQbzbRriTco6MTaMUz",
  "key21": "2MgiY83ro5cZmP8KRX8psPD14KCLypZjyzRWDhBMcBCc2dYim38kBR9JBYNX9iodZkSyMkgcKJWs8UMAd5CHMLH8",
  "key22": "CubaLSppTjq4JTLtP6VjEWGdqxGu6Xh79Bbn89sVtoM1fxFWptyYQBHaq7xEH6RyPUFgS6A9on5Sz3BCrUBTnt9",
  "key23": "4XZrLL412tMvYuvjScAnhKHAeT86JsnGbABKZo6vKsUG6BKH71MNB2p99z4nJPeYqv1Pjjra7Ht7yaY7Zy7RnstQ",
  "key24": "4ZzMfcSRewbRGghHqTr4VuL3TenpbvAmH7UsvCeYdUSumc9hUbTuNEDyvJhXSEMw9BpZGTHsJWxgkAEWmjP5SneW",
  "key25": "9SLvs7w38YZqu43vv76n1cCeg1Qcvtzde9Fi8GSDjuDF7pYcrX4bTTTuBiMTTUQrdrEb9G7waZSuPbhM6M8Ha63",
  "key26": "4Gp6anVgz5PMinFnEPtn91SGHASgfWj4JfPrnD5XZ4seSykDLnREB52NeNnYJGRrM2aer5Zgc2dgPqr33Eh5Er6j",
  "key27": "2t3V9jvLHwkYXaqBw5SuVHsjogSveL5evP1xHDvXuF8teH3nYWs3hFVYs7tQG9ePowhau1NSPzDqFu88qLXnd8Rg",
  "key28": "5xfFbSXhaxbwB4TobVbeEQmRC4Z551wcJ16mnhTCMTMGcU9FgedujWTW1Vp5PiyuQmwd9gQfkYLFxwf8NT5ccGbe",
  "key29": "5VgSHz9nvErb2Pcdgsf8n45u4ASom5sExRUhsraJZa6uJejNU1Togtq9DSC6PHsgwgC8Bfs6yzAoeJzSXzTVgEdo",
  "key30": "2TRgfQdc1Hf8FF6gd49WAMeerJqriJifskxWEs5CALofZsk4q2FF3kTFziAmpwnYVaxEiUsfQdkW1nhpLyfG5Vxa",
  "key31": "2WfGx8v9aNBMR68jDUzcYqRPpdmeJEs7jY2u5UnMPEtUsktYDSxhYFiDb7qi1etjvcfDknhmupsofSjrmsDXUqZL",
  "key32": "VPJmAnV3mfRbEbNhpKGcMv6iZEjZnkCaddEg8KNXzFoEEzmbo8ZDfuYoYYPZt8o35vDDNK8u4pzYF6YyJqbpQQE",
  "key33": "5pZyZwjHur74dVQnf7hsy8gpMvGuBwnkYVL86fUgan7SVW775TAC86tEqDvkTbe6e4ubQwmkg2WitdSNjq8W9tou",
  "key34": "7p5AcxrpwwVkuzB4AAXNovZMtqmosdwbgbP7GmukEashhHtizJ59foEVViqvfcfaPmWfryLYWMPZmmCH7mwuqNj",
  "key35": "3UrghuY8tSpABzN86rRaymNzqq3x9uf9tad9uPaYQKMDQXQQBdJPUqzwwbG6fxYTzyqArmvnPkmmZtxnYBKs9Ju2",
  "key36": "5vmwLSZTxGj8WM3joh7vEhk1nsPVfkAxJar2NANRWvkXmgitQ8fL6UyACym6z8axfFaYAZxXkbkqmFmJ8RXVcaMt",
  "key37": "fdto8xQ2RQCYpZoEmBWkW7s2afMKwTxqG6GhPD2iEUq33UxXyVnJE1a4Fr5T9vZDr6h8v8vnBJbJ9QBCtUV7SUV",
  "key38": "4DFp9HHmnjNgkrJE6Xm5bHnLBdkMwyvQhGyTFQFSaSUZcbipDPtbyVJ2QkNpyDKuqWnhezouV6hhF8RP6WVVzx1t",
  "key39": "3XtmAX8w9Q6gePKBWJ6xxKm8zNaYjLx2f3U7Bg8f4TKt1viRnyN2c8QoXeJRntdbckQbF67snx3vHwMWBYBmg17N",
  "key40": "3HEDWBbejQkEGaWJnDXmpyUThAUQxsMFEbCAG7EDJJ9FMjhmC4oTCQhxdVchym1AuAxE8gtJvxuZdmo1jc6dwZJc"
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
