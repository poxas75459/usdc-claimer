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
    "4iFLxFiosx4o5ZsXx5aCH4fxxiLBX3nVwRVv6qTnqCLRAyEgr6oUae7ygsdjndCPrMW6PbSi92zJxSEL6HEsAeFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBmdQAFFsKDvYs6vDrySNX1mkhrrCBA8dFygVGytfzhP8tiwoGYgoBVpXpPqrKipEBQBnNgEySFe6f3qb5qnttN",
  "key1": "57EVvgtM9ZKJAqCfTdoKgnVej47noFtZb1hXuTpfFdkF8JNa2VrrgduUbEms7HoiKQgqfAYaWSqZmJqmioHuEqoP",
  "key2": "4G9Tw3uWYzCnN2qcEnTXbGTnX8YfyF6Rfaqujm8vyu5ap7kE2YuvE6GxWaAZDcknMnv2Gaywh7HT3PakbTwXAJk6",
  "key3": "4GY6tbh6HyLgzytMX2eAZB3Fd5pKrBaQAJwQNHsf1VqcDzhPLQzb93ehLwZUoZ2vfWJFhF6NEBHFpVv3DBJty6LK",
  "key4": "3sxTGHux16aKfRG88WXAHGMtWA9nTh5MWSJ4ZAWZkNeYFUvy7AaFhSfAT8riLQd6fxAcksJK4zL9TwwJySqrAeA",
  "key5": "2psTrbLJ4ygJBua54ec8Pxt8Miea8HqTZmg6upQUdroPK5SheCBhda2TBwRqhsqnAmTZeopUvt2k388KYrpNEA2z",
  "key6": "4F3vvMRSVbDaBhPYCJznqUvgYSZeYzjUXfHUTGhPWzsgpGNNSMP4HtzGKi9y7GVnNWky3YxCYP7mJDp3W4hSo1fP",
  "key7": "5sH7oqMzBYc4FGTDRti2WXDeMiCcsZKZLaetpABH3WZs3pXjP8eCzfoJTMgZxCfskkDisqLfhcmw2aU96P6GngSA",
  "key8": "63EKGXhnkU6dgT898ytPgtNgGyn2kjVQZ5bdLoJQiXAzSdTjnTnN7LNVMp54Wi43m7jE1wXERhYXoKd76SuL9nbR",
  "key9": "3YMH6mkH9WGFd9iifBGfN3qtvWHuJfJ7sCK5gRZ7HVAXBCBQqyG3FLGZokLLWNZoqjSi6UEADcTBDr8Fo396sbRC",
  "key10": "ZQYi9YgQdp446VKfYJaLi39AZm9Vvs1ReL7kwP75YeN5KiMS6Kf4otikZZd7ahS7KF3GE6PXoSVxRX8pvsteZX5",
  "key11": "58aY6GC3SBuMfWHrjmDwwR52rSBZv2ejWPTQcsz39mJGCV2D7KrUAkrS34GErME2P2yi3YJ7vGQZE1VncdQC1DyW",
  "key12": "4BWvf2AkmKFXfWi8yzPDzpa4iVtS8z6MWJJy5vTjV4Dcq1MrQaSZXHBEA93SJqGEdrXbpUiL9mDhrm2mKyxTFU21",
  "key13": "MmiWqJDjLqxX8FXhgHkM38SyLXjNNysFRz336jq9uuDmbMKZsurQRWEsWuT8b1rcbru68BGsCmyphMnaAemJNmA",
  "key14": "5JEhtpo8TCLkbEmK1ZFVWsPA3LAJqcyUcD2aoLFBUknGqiifCk9BkuoGs9r1ddyec24agGEp839EmPuz8uGzfLaF",
  "key15": "5KPjrqPY2TCAemtbMD7zfjrriQ8uT8sEKGzGG1ry6v1iS8d4QE1yGsQTVbPk2YFkamBpC8fnKiN9QWqQqB3uFQe3",
  "key16": "HFZRCdEyq6TPUnPVpqpLDEWcQGGssPK4V69M5CK5JaMjfw9rjxekjaW2h7AgZnewpHpW4K899etHCJW6K9XFv7i",
  "key17": "3kFJo4zNfq6m5UMFjByytFnRUMNUneakEQHkBLjWyV5VhspgYLFqZ317x4JiD6n3U287pEMyuzZH8YzrnE36GxvW",
  "key18": "h5ciCNGjWd8fF5KvVDYWc6gocb3y7DNpdXdSw9WsMn3BiwrMusYRwngJ1AVKVkfWzeBuDV9aQh14psqTDfUW8u7",
  "key19": "22cuMMxzhwMKEtABZ6yHCj7iJ5yJTbA5d3wKSbfTQbPPTwphSSohXwXAEJf1crQupL2qW5XTdj557owXT24NoQVU",
  "key20": "62TzmHmzmwpGei6CBqvEP4kWRGFMdi62xeSRZG97x1DyN84qmHe6iP9bmQGoG1bF6chxPWhsiaaLG25oEdaMLiex",
  "key21": "3vpJxBjFFB9vGhf8QW9wL9nwfX2EVAu2ghXRdCLjUMSogaXTPtoVRNU7JfRmSh6V4RCL1X3jpv7CCq6Shgr6FX6L",
  "key22": "hhZweUVDEeSCi4U25qJdL1S3XSR2fUrU582bMD8B1MXy7y2fbbZPCAs2etBVSvmwacWr4d9cC8aaN8rg6UMx3kc",
  "key23": "3YYV3MQxjPkhNmmoYhtyTxk9e9J8rUhAx6scUjgYGykN1xoR9US6mBGgJDZo7UKqCrJ4ZbaHGCFAhpvbDGojbh3A",
  "key24": "2XH5abt6YcEvLyTqXcsCsef9gzV2zmKadvC65VWy8DWrLqhMuLdL1azFgf781WssRpgJEe2PD8x5SHfALVdgzkki",
  "key25": "2NU3zDKMmGZQwAm7ddGXSXUwdWbhbMuoSEJzbLDeFQRuXQpfUTVxbaNCEuZfK7EK8Ayp3wojKdgNpLosgArftqNF",
  "key26": "3ZfZgzcQN6U6xFhgrY456nNHPiauhuzWP4JuqtfX7oW1PhFsgQVECR9BQY7AXhXRZ8ycBRiQ29UDCeWnpMoiPUfp",
  "key27": "5u7en3bfs4XEpviLzYGwXSpfHrosD9oaq39HcFfvFE7QwTYmKiofrB6p2DcsDHCXuMpP2SjDdndwUCByHR9uSnAe",
  "key28": "PH5UVQMGyoZiGN38S8SfsD1XHQDwr7fNnEpr1Gk1tiSYbX7c8jJWBMuNS3joCPjkSGkKgr42dnWYsw8hVwAkU9T",
  "key29": "3dQFoNNiGnze4LxSfqZnp9QeXXodbuSQc8VjLtPEAPYyWwGKLpWPXEjQyKFWBMbR1HUrpsbj8Gch3UzRMRi2Qi8",
  "key30": "54QdNH11yABB7tceJG6u7PD7AoJ6J5ZUNwxWej4ZEdE811jyoMR9dTn3EHRQXoqNsLyEGuaKDGKE8u1Wycr7doe4",
  "key31": "225b7jBYP4nCWUcxVdEdZLqXiT9xStaV8PNet8WLvHc1vXUceHMVGJNfX4EHVj6y6QZe6KEenW78pZHBtJXdbKMj",
  "key32": "5jyztLNRSk58zA7q3UjrtCsDMrqYfVRw1yrKypUe34ffAA5px8tc7e9kj6CccijcWbPufLWuZxLWbGsCn878Zi7V",
  "key33": "5GefrXRn9gTELtScU4LGWzGfEz4ViLZvgGTUudNbPkN5sv4ga7Dn1uRTtATiLkAN4zS4GpUa6pv7gHrdLds7cDhv",
  "key34": "3DDgGkqUNvdtohXaRfSuAhRFAvLqK4LA1fMYGapQWoUau4F1AdGm5jF9bF8QHhTyYdKBrWxa58XcjHhwgduHdDQQ",
  "key35": "65NKYUVF5qW6pdht4Uihj9uikpHod6MCkQ1comF6bDWsFhtkw1Lf9bWssPPEjgdLZNRYE89W5pn9oFXDT6tAp4cS",
  "key36": "2cTbm43iM2XgZzdg43zpNh2QZSPgw4VVZASeYPwZ3s4f8GgC79Xgc2U7iGSwpqtd9gBy7bE2gsrHNvdoWN6JPXtn",
  "key37": "5aozxKKXgj5yZRBkNXEosvJ5p9yZ9SyEQdzJsqoNWBDEDKUPZLSVK2uUHgjgH5AEaPJuXbzjR5wue5f92CmTAQy3",
  "key38": "3bATdfDjDg5tDQs2g2wX3kjJsbTkctvZ9o1DBPjXev8s4vtXLkUGEqRRsCsdWx3cAnLwhXmWjcrUUFt9fEW9Z2Aw",
  "key39": "24tjVg9AdcuvVW3X8aFEzRa7FCJ3GYv2qSALfw89CU2qnzgyRSAT7w1waxpbtWnzW1tnCAUY5FVhSwCkdD6Wa9WY",
  "key40": "37BVtut55MajLn34u4cDJGuRv3jFhUzXFXY36a9nZpTXyNmH7zwQEz2xbn4VQpTRZKsyLEZ6Ddm9swjJESLJddwV",
  "key41": "3vF6PzL55in8VFC8xb9MHQCbpnWhL9eckufbvPMtHDe6WXaqxjegqDAu57rosRj3gbquAbZz44juPGGSzitz3DyM",
  "key42": "2XFZD1jo3UQLYsmVYiNtVL8JEgB2thYqCiiZC82LmHqLpsAcQn4AFsMwfGG5U3R8yZHprM6g5pboiJnodu9WPAyd",
  "key43": "4z5pcdWqeY5Mk8YPmYFp4odkjv1UvRyVoCFcu7r5ogU6WLYpZ6NTaLykEXMhqm8g9CHDsNstxGUcj4m9ntxGawjM",
  "key44": "Kf9YQNHakwAwT6ABmqbtytaFZ7MEu9soQF2NXFPxjmw2rD4PjCWtpfg3cx5Qtsdi6p8XPEiYurGem3R3ZxnzPP8"
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
