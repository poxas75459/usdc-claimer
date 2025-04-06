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
    "2jCoa9e7LoX1tpfaEDYAiNNsR7FoszJo9wMFHgQwCLHK8QxseHiu8s3hHZfoLw78kt7Vh6aiDDXByrko1UzM2Jw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzQTzovBNER6M1mry4rquKQrw8Rk8n66k4MTkshHt2aZrzi6DuUYDaKReayC4D1FTZLBCrS19dQAVL5WkNpiCC5",
  "key1": "4WUFnNFrrAQ4n6qh4LuxdEKnE7Y7xJDr8Hg77d35N81PKPBPaaXQH5WnyrZY32XgX99vEvjhYUe4q3dV9puTzskf",
  "key2": "51ssCmgf5rSJcXKV6LCfVD5N5qEfZPEwTqhyAVT8g9wKkgAC7Jp345Y76ijWGW2r9kVA3Y8RTz77ueuD64Q1uKrP",
  "key3": "42AtqbUyYttwHi3fG1fQdTbhnp7DpJTa1QLR6LAWffpo4vsJzvFLvM6DUnjTcekTSGVCrqVmJwCh16CEBvd5PkQ5",
  "key4": "5yJhK9xrTXkoVWxEpycMuKyR1NHHUf7aNqmYCBaui8BxUZdPmwh6DWrLkDp5jW8CyyL2tiMrVAMSQoxaEVtYCn9p",
  "key5": "UrVqLi8wUNn2RQQM988awrhenAjJsWN5xEFuRCUiPss9ioELfm425StGFYUjoEziFJJ3LCTaSs2rCD9u53V4Uyo",
  "key6": "4dNfCWfkx8pMpbJFq5QMkDcBREjoFgc5nJkCvfziSCBD8Uthq5EUCGSZQPp6LcqtkM9iSggMow8xkMMewxqUo7sG",
  "key7": "67iX9fvtsWRVTYS7FTzfEPzh66cjEeCRWmoeNTasx8MhnFeuhrEdS22XMACrExqnio13KsMjdfApQR9YNLD1NntG",
  "key8": "AiAtxqRHeCtQcYBv5CSJZfYRUseLTZn4VAwYbedbxC3A75rwu4ZTEMqECeLcYPkyKh2VG4vtK5kYZPUUM7D6jwY",
  "key9": "3SNYuxC1Vddb7BPZo7B7kPhUr2Q1EiKqFsGCrVNhbbvDJ9dNdKYzqVBdTtYCPsvDDiAd3kcLJ7oZFYPYguiqkEZB",
  "key10": "4S5r3PnLx4NAziggnt9o2E9YgWqpzyjbgxn21jCbE5QCq2HWdCAdqSwx8Zkbm5LvcPCqanwzc8vSdeTRnGxcEw19",
  "key11": "3moVs3JvjWZGAPzcZ8zSeDqjbr1kvF5iLv1fHcf9eEE6J7JQ85HWurTURgnGeeaK5gVdjjqsbVX1TgvqY5MnKCpW",
  "key12": "2Yvz2pw6u93kyjgBQLKDonWzSty9VB1b7TZDBeWQ4neyiQJMYCmffotem6a8cSCP8mYo4j8NrwHAr3iWvnZrvfdu",
  "key13": "37iqGVkKXKfmL8sJH3VbepzWFYwE1cZXduGu2jSf5Bn8g3o81AZWjezJWrfkTvtVQcx5HLcJGCskQz9vfmEJ3Q3q",
  "key14": "i53QTz4vQz1he7Y7NyxGjWg9T6kKCqiDXAHKcx7rqL6G8NJpoPdN8jKEaMF9NNjv6ZrZpgYLhXFLtFh8tFYMQBE",
  "key15": "2EpLddGvwxWrXkGxDdgPiSGRLU1HSvWJnCUHWgFfCvepSF9fvecsTzgPeRMHmeiA36gw3XdokHWog7KfG1fxkBVZ",
  "key16": "yrhESycvEjtZaqt6Kt1PAwbe3Vpn43cc9J6c2B5W9qXHQeKU9gyh4y6XvYzijhGvGjzRpftMzVKHBWmnYbYcxPe",
  "key17": "4WULufUxxLdWc4QZHZp1nhG21Hy4r55e2SeELNFMG5Rgmh176CRQZ3GYuqejc9hMEtok39etPvkAR1BeHTJbkLX5",
  "key18": "2XRehM6pxbUqoa5sf4erfwfXVxfNvEf1JZqvqMLbcaMGXMDhk5wQeSugkMvn5hF8u4eMtASkkJMzYak5RLguSPMs",
  "key19": "2QmDSk4Rer5t95JxXq3jjzUmdrkXXiqe7iwae8JoPYPTN29dBdDqVxidN2wPYoJCdjTzA3kjBQKHkgKR5rGtpym1",
  "key20": "4wKoNqtzSAs3HW4UYLC1Smw8zeSs2McL98DpJ49z9pZ9urrmvtXE88M933gFhjkA8Gp3df8mRdn6WDA8ryRtPpyg",
  "key21": "gjpbdoJHHmXrbUhHvm8EJAsQzvEo5FFCLDEXbi2rk2ZCCgBvA6dQzE5DwBoSjipQTFchihLe9xWHcEv7pzRrQ9L",
  "key22": "2hFFz93tzyV5dYjaMVGR66NXLT72m6U6mMAcChKosfyUNBF8jg9AsgbcJihv4QLSKTcpZrKgbth85eBTSu544TMd",
  "key23": "5h9BnBMY1Pkp7yteHrNUN56V7WnP7T77GCUsce9pkeeV3pRSi33Bor3R8PEZfaBWXXD19QmSteTYwQrywLRkWxdx",
  "key24": "XEysuHsTWAJAta7UW35nL1bGexMq1WYzn2q4x3tDEEP1M8CUypwSdADY6FMV4dHuVaJQzUSE6Ja6FsRWvXo1Jzy",
  "key25": "3sZXeaMMt9GqpqsLuvhz6GyG7z5QtoyHiMZYbXSrWmf45RS5ZvbejLq9hscQmSkzCbf6Xc7hsYeDXafdrt7ph42",
  "key26": "3rZPePdcmBAyxTjajEFa613sXvAzCy9XC5VT6hFBe4yFqcPY7Go17yLyxEjChbXjw9JT2xbBxbjztwVgzpuRUNRd",
  "key27": "5mWFcn3fGTBPPUKop6yk2U1HxzSDXhvXTAGYQV6TepfAxqZbrEUNDSK2ceq45JmzEdfqWCk2wvUrJbbR9sT2K7bq",
  "key28": "3UB6wrfKXjJHGX4hWHDbNM9MKV8escgh7r8Md9EJ8uGd61tfAajjYrRmMty7z1mrMVFeADFHLM4RQfFaKkgnEUGn",
  "key29": "9u4TQMvcoWk3v5kBBUpo4fbyoJgn6wNQNaz2LhpTNqwnyN7hxEZhKW1khanjYnCd2w7nw2yZLuzUgw2XnFJ18XB",
  "key30": "2KuSfmrPPXceTmftfPuPs77twKTkuK6z6KuvvYQvPtVwum6XqqHQD15nVBA37cxoaMipKEnkdhQBefLYZvZAuqkJ",
  "key31": "wZcru3WvGM8NKU7TfFXXE6xUwtcgAYFunTQpQBFZkpKXHkENKwTmD3Hm9Bn5YCvPeCDguSQCeHkzrWEDpaC4vTU",
  "key32": "4qCEGmXCk7UHZ3PDgH5EFr2jgfsoWgozAzriR2eW7L4y2GvYqFgKRy1eJBR2n6YagjaiPfUsJ5HRL9ygLhCCstpc",
  "key33": "4GBpSZDz1quYBjUnZhVXUeksT4eEjcQsipMB7UudUuMozcfqRhjcZXe91DGrvhY3wur1UeN1m3ETBXsRkeQdEaCu",
  "key34": "4Exww8WASbUxKL7dpM4SqA7SoEYnMEYb9iBh1tnMWmWHDpaRr7GfJmwYyzojV34J9pF3vhGpLdD17b9X82akjvSf",
  "key35": "5Xe7saox14jtRQwDxYm7Q6tA2G1dZRw8Z9YQCtVjXcvj65JktJT1pU9ZJnuxPS7cjLghq8NsFHbqUiG43sHUdV7T",
  "key36": "5XibSNxFM4NFsvLK3piDiHn4Gn3uw3K9m3GsGUBdDPQ224WXvh2iUmuPDCvGmEkJWt42fusPRmCmqM6nYC8H99se",
  "key37": "3YTApojGnrbBPmAuRdWsGJbB9D9Tk7pzAU6wMuNCDd4REaNibqDDvLj2vR8iM85i4mryxfGnLtsU4jWsfagcAmkr",
  "key38": "4e8eLx5BMr6DAkGDE8RdyXjUZJZQ3H6Ty23MBvy4TvDUTWQea489RQMrzocp4VRzf7qYnRV4WY4dUXqMPZdy1SLo",
  "key39": "5xqmBbPGPbBbXTvXdHj3xVEMhVUFzBB9i9bLbo46p2teB47JiqQpEqqsybP33dSME81Dt1s9LMzsRZq9ku6D49Pu",
  "key40": "4M4c5smK5WZPsYL4uUztgqfTT57vPmix5BFw5HHuRnS8mbxkodUC12dvaKhg8QLWuRA8AMcUPxz5pf4sZDVGHKyf",
  "key41": "3d6FQB8rRVaDXGZpHaQHrKn8zpTUVwsRE9TynJGRLiPkSxCj69v1a46W6uVBqzB77VGrReCJFx3nfSjysPra722Y",
  "key42": "21KnbZNgDLNyDYEPQM2o6vTnPVbspxen8rsh64RVXJRyhHWftwohN1QFp6NpG37GLTgaUFgNx417HMtdKmEu6ShA",
  "key43": "4BbuTqf852whsfFELJV1CAj5dpCgSvWcCYBmMvMLxRbrSr1VCguVxLBYTzKwonbn7T5wfSn753KQjcuoi1KoDQa2",
  "key44": "4xUVWHUPLXJuSKy1rJe9JaUaJAXnsad3RcBZNivPvoaDcQccgpQw3b3faqR5Q8QkqLTJhdDeQ9hL4o6d7USeUTG8",
  "key45": "37M2eCUZz3eNEArYamSUrDDjJx5ABwGwvzC9gB2WFJu9wKS1BhYm2AtSNx8uFPoWooQ16FYxqESkPQtD2V5yha56",
  "key46": "vAFDWtA8m5QXP1kYdYHVqwxuKekpyDJWKzygcTjZnWdr7L7LYgrwSkxJpDtCU6frvKeG9oBe87DDWc5jZWRkxni",
  "key47": "5h2RJN6AkCBp2W34tRgX643cSQPSYxwyouPLJTcbL1Jcmw6ExRBRT2PNxhdKKEF8TGR9CnTSGU2WD2UB4KcYyLAb",
  "key48": "2kJGK57TV7tgmagYxb8Qtzc9rRJVyJaKe55vAmm9qJgY9NWWjYikU62yrLy2Wy461kBNceXYuuHjr6JQtHwgji5P"
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
