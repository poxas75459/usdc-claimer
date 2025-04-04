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
    "3TF4h9W2Dp28kkrBbEBATeRBWWmxCXrN2DwHVT8ULxxGqRgSspViJpvnBx2M6Mep9Uv3F4pMw5VmLFURwPPviNpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yw9CGkKuzqAt54evf8rsBrHCcYebHWWJVuJXR93CMNNpYfYBuesJKvwpHrZedqVWYr9Q7QJUbVHvRyqPTrt9ZH",
  "key1": "3HbmGSddWPQmy5q6EkCfWaRWWkThpAv7UJxwfhFQfRCxBJbfugwAbTzKVDDTTThKq3pswEK5as7JDXQTtSjar648",
  "key2": "ViYagDCiRD4i3V8MNwVnWtPfJoNUAvSYpoY4GqJa61ACFg5UdRjZx9kdHwJnAv1yngNCtDCXBUPAgSdtL6cZSQd",
  "key3": "659Nv2o8JpiASNmFKAVd37797Yk16Q91R1RJLyVtbEK9Zvb81AGc9Yn4ZNBdA2UgQZxspsGU26ys4tRnQywuedPG",
  "key4": "ZsFG3U85qEZWJCXvTHgHZT87Hw65Et4nor5z5TtwmDmH8tPwMKMKyAj6Ss4zA9etdWuXEU8NGMaybA9x3EMuHN6",
  "key5": "5mJp6tTPTLUDNGKBmDEM2qo4MfLg9dCnQL6XFvwdF1oSTW8pq2tEs7GJSh8H2LzyBm1ZZFmsecKzupuCfqYtdv54",
  "key6": "4cxdV2cxv1FiuJoTubL1NFdzxAD51HgwUKEvfgHuBhqVUTiQSJaUbdiimCRUXmbYV2GexDxGuJUBEGi7BnDAZ5Fv",
  "key7": "4qRrrtGwTt8rURsyc3tE3jY2w8xFSMKFWoEGmggCU5C8meT9GqLz7dohtERSFQ2dunmgodm4h4aCjbHGWBR57syu",
  "key8": "2PmG4Q67RAo3oYy7k2EcH1bxrZCugMevim5wUSwP2giVfpXdkD7ivkB7EZq3cu4TarE24uy6zCU3gg1ppqvXhqov",
  "key9": "2VuU4NeTUj6Wu9gMqeN4eCNJVoM2EpfaWdZ6KEeAJSvWmnhbaT9V7YKu2MeTjZFY9L1C6cBLGVJjfubXLwMFr7sE",
  "key10": "vorLZR6XRdJQAj1MbWgoQVuQY3XvHP2S1bGuQpXzMWvCY8hvSFPUHFJQUkuuhG3mruh5a6P99tFNb9dgajh2mDs",
  "key11": "83Kdjff4wvBUuHqHDtaLScwtHvWpXuqYNRf49wk77fSMAUPMZgxZaQhfzP25T914qEs12QMPqMvWqGZ8xX6Mkz6",
  "key12": "3EQxYfLpKG2KR1EuBqpzaiPGTYrEZFrSa4b2VNwohow5dcfNxmuCVG1fsDLq4oWRfZ3ZdsJqszqmqifcrWStDtQJ",
  "key13": "56Sk76B7m5oHQ3vDLhJn73NuryCebga2CgpL56PxsfVvEvVo93JwbiYkQTjA4Ztgpb76guidetAeybmGKXZSYr8C",
  "key14": "3WksZCUzEctshGKNiipAqEcryKi8mP68q4YfXoLL76p9foBT9iqdVi1swmYgWyWrwEdBvxemETPfdVob9jXwxifo",
  "key15": "2o4Y4fMFJQ1pER8B6dtJYF1LCgdjYqbY2yY43pPar2UTxfTZ6nwgTXLKMhmyWS1Eb78Ce1jzyq4cU5T5Zip4P2Be",
  "key16": "2PigPMpYxKhw2gg4TdmZDmpYkse4hfyzL7452YETnibpwBr1XSAjAP67gQn1xQRhBUBvFF5ftSDCsu5ZMkBsW1qH",
  "key17": "5M48z6pBRsAS5mSdwNRvo7sx7coHTYpk2QwYcpuyEFUEc3KNjgarw8rZWpfpR3edhd8dsUZniWNYgpyRypVHEtQW",
  "key18": "4AhHvSZNdaTZWQc1kx6udcSqpwMg1oPir7SJ16qrW4b6VHJYBkL6YtxQCS3wJKWgYAUm9eq19W5vy4Nngnnz5EPP",
  "key19": "4d3C8rLrNyeB9epUKceAELzFtXsicHkkVMgZTHqZkdDUtbepHM65VXYX6rDivGaqpe5N5K4JoWvHDQJ1G6nKkAzN",
  "key20": "YJxNYjjTq5cN7NybWVrktAZA1VZzhRGgRs4jNuu4FtV7JCt5Udik93cV29Jhukmegz4Q8X2rVM7ix13PA38S3Fp",
  "key21": "317AxrnGsau4TQpmPYZa7MpUsDRUafZ9pce9vxn1JskTvtfWgaxBPstEoQajBC9S5AXecpWBfFwx8VY9tbnSAHer",
  "key22": "5JZYYQPoP6Uj27mYJHDngXZmtcbb6HhtBnRqx7PKTMUCT8et4naDscu4EoAeMDWtTdSdUZz5jd1fQRpnaeF5z5MS",
  "key23": "2LcgioRWXmw16V8QfahAfeBvJvyedN1b3DzRnRYP5hXBrN8iAiB2zWAWb3NQFXsCdZEVvGzUxnbBCXaeqHFZAVRP",
  "key24": "2cpKrUHyg7yVLfAmrvXAmok5hkSFsjqHicsnPPiE6NhS7ujgCuapBdtREbmsHWfVqqJS9423qrPj19CLzCuqZLjb",
  "key25": "67mZhdZ72Da5Hoh8UUhXVWkKRwayUZuPtDBGaiiPR7c6cXc4ts9tDpu89st28W3EUjqk1GXVmsZKpKs46PUtaW9r",
  "key26": "3sc3NrmcvgYZSjwzKQmJTtTdgMdqXLWsVcV13YkLiVWqMD2SKwVX4jr8Db1CTm3mGn9SbuBLYs2EVWDwm1MzgjPr",
  "key27": "3LyUQtkd7RPh22kMMqbXAzarqdmFtFJ1XpMgjBNvFYrbXpQPhJF86bS828EbiYDFiJ3ZDi7GeCvEQki9ppLDP9wp",
  "key28": "5wq1CGDjJx6YHRLhV1xjUE1X8xgNTJp3Q8ZFhGn12Mwo2qcoZH1vuZpYw23YoS5JR3MkNbbq8kMAYwV7pSMkEXWG",
  "key29": "2AHmzDHsTwzQjK5iydfvTg2s3qmTt1HPCbHXriUiJ5w6yq8Gh3xvCtNnQgYU7ivHJgrzYyvwAnWiDaWp5NLedJ7y",
  "key30": "5gyo5ToN1yk625YpfLAQqLNTmtA7TTbUjHtAeNbW3S8BkhBgBupMtpToFyH77xGhjmVNSHy7iqXtyDAgDvTKQVXR",
  "key31": "3M3oFvjPq7Kvmqu3pXRzNN3jhWCWg1njBq6KfCVwixMx5MytPuXJRQYLh6PjsvjKAx47yTieuWnpgiXhv3AqtXmy",
  "key32": "3bckXstH7ozAxSZVsKnJr6aDkDf9T5LodSucj4FvHZ6XuphoEuYz1h5GsNZJJW1zgncW8rkEhHCys4poWDcPAUKe",
  "key33": "3YeUDFesa7H5CdcpTArGKLXJJwQT9yA14no5YLK2g8UMx3pebkQasj3PrT26stpoLN8ftDsHN3HcgByDZd9MMi6c",
  "key34": "qFLC1nrMbeXbmxEynBwHjgGbsnmxLtvzqEK7D7GdegZCDieVQciwA2EhHkwPehYuxeDNVExN5Yg7f2iiaYp36eM",
  "key35": "4C2A6raHwPF5QMqQrkt5riY5JaqckogWpa2g2Kq1KwnKhcsBvULrKzrKHf1SkPxCyiwVwNpZtYUv9fM1VaHwAF2A",
  "key36": "2BPdEZ7yPGxtUesWcL2FpBY7Qp1ak4XHWKyQVTiE81apSH4pW1LyHr6P9cixH8qtcSt8QHpZgZWZBzVb9p3diXPo"
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
