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
    "BHmNcjLKHgdTymAd5xdfTkx8CGg3PFtscracT5ecLtPiffm1XER7DHUqqrA8K2iPb9YxgK9DBBi4v3CE7n78bP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2Nyq2RjK26zoW7rNcYj2nUAzFW8nwyBdEmRCc5jJ3TohmHXT6Xw5Vn2WA77EEJMmM8uv82yKqB1dLBYVftT8WQ",
  "key1": "4HxsuMCCmG6Mzp36kNQeqAF7v6vsDNrcdBaViuacgCCyVuerBQzu4ZyfJkcgWxJPqhqdoCN7SJvhnMSP9x3grE4T",
  "key2": "25ZT58R1CxvSxMfb7Ux1Rs4F5Zo1KPUoKoGdvpWnhpAhFr1pP78y3wC4EzQLy4A6FvUYj3nCc9jmrF373jEGU1u6",
  "key3": "KV2Cd8Gi7rK7Y1D4fx11kHUJx8MY3RuSrHiebRa2nMbXWdXcFTyHh8gVSqy4g1JT2NbgVKycs1vFbQCkdso9trf",
  "key4": "2BZ5ZtMbAqWWCfaWco9Ad8nhGk8Mnp2AWKE8mLoyS8J1dAZ25JhT59Jf6ciSwsRS3mEv9Xs4kQUGNq7AwTEYi2kq",
  "key5": "25azkNbCszzrLCM5t14BNo53XSFS7q9iiMP267p8iH9vdznZnbaNUkcjoeWYDwBFbPx9NkBjbgyUyrXDtujZ47s3",
  "key6": "ne3PYvAiifoEi2SGS9oj13AA3WRpGPT8wvWZYKgx2GvDtFtXMNX8kYiCgqUJqeHnQghoetfu4GdSXwa68hqqBEF",
  "key7": "2Sta2h9CVSX49sgcNkdp1rhsysaFf7BUvEkU1b73amEELiYDF6AToNgGL9sykN9mR5N7mqEd3G5yUAWBpAtxDUPa",
  "key8": "5rCEQyVfRnzvXEsXZuR5BWjxkVEqB5xgZy7ApqFA9nmKtT25BdKeaHgVJjh12fsWh1LAj4FL7vesd8gbvpFmCJbD",
  "key9": "1Hgvb71wYnap6K1AhuMuWmUTfH3QtfbetVXEjcWWeWzLmjyTfP7soj5r71hNMLqqXALH3MDqED4jyLyVsum7D3A",
  "key10": "iSzebiX4FigZKnuGPJs53rJjEeTTPXbY1Pd7MREikYMdNweznqmHUHHxy3PDx4a95Sn1c8C8RSTZk5cPj9HwqYz",
  "key11": "5TGjbXqhpYGx1NKgoGKnXB53ALuimFtrK6Qwuqz9d4F6a6oPj5xGTbw4BctVFaKKvKZoR4xcB5Kt3qx2hs1C5QBA",
  "key12": "4FbXkz6Q4jzmLZTmhpDp5oJ2NzpwqTSQjJ2YfTtyvWwCPHw3FJPejQDVWdCzMr8jUnzBFGuMPEnEmJyWZ1C5m2xe",
  "key13": "4sNwJ8txtNVnaLLFCPBVhKwzyzaRNUJXJkRK9ra9zZnxK9ohcK8bUdctrNBMQhPa3nEaRKEJXRmsgpYNqWiaQygy",
  "key14": "542sh8ayLz3tLEi9pdby3HuQxR3anyW1dLfsh3Rh5zFxyJzv1hJnrsQxaFFpZQCNYwZZXsCsPyWbzuKrcqeSHN93",
  "key15": "2WUbfe6Qi6S5y57wwenTverFxEbiejMZPMNhLXLVTighD7V127FTTFPRfQkZP1C7VXBkhEAgvTxoDLQmnYtWtcpT",
  "key16": "VfHDpfiPDvecGZhAksH9mMKL2pFu1HxDCzHQYyZ6w4W5iDjhux9ZEnPz2AKMM8TMyKZtLnosFpMJRmGvrkkHqT4",
  "key17": "4CkVRiv6YAu5jDH88ETPTajEJ98rdxRFWedacNvZzQUovPNeXikNcQtdRVsWDrsaT6uGKiGXoxTuZbHNs77BoiCG",
  "key18": "FpRpQLU1G1MhoDyxqKn4wfkVTzoVyXxWraTFPMD983xGSxBqQRhSPuGynksFfGFLdTiBSkMonPV6CbaeJbDUa1C",
  "key19": "3foDBeqy1RREwJgyjnSLkpuH5AuHUEAafA5w1J4W9nN3cYg7eRciatqqkZR8D82yfRwpTfAH1TRui3mU6sXotx2a",
  "key20": "4yDurFfk6eL9royt39TK1qHiziwmsT59NK4sL11zZxY7NnNxUkG6Z46M9GyrDcaqxRcWoLLQHaLnTBcGHNHexBqa",
  "key21": "5C2r2WnBSxaeXY2UHntTFxA9JAFgxJKperLpExW83EDCC3DEuZGyjPLN663cHASb1CUgqSLJW2GaVEgk6SZYwMJC",
  "key22": "c6Fbi1Gb1xpGUDNLJEkkbxrqYeLnsWALj1XoeTFCpPCTD62MN4Yt1SvqXRxePrRLbkDYLL9QoGm5ot5caFu6NTL",
  "key23": "35kiSJLSqvqMi2WxsiSVqgcR2BibGZmVCAHcYPYATnxNgtV7saTBZd2TtpGs5WC1t2ZggYhVHPhaxVC8cC9eByaN",
  "key24": "54DnJyMgnW4mzjG4wE8iu8RQHQCLCF4UMCHx5mYibvC5QodxmenSk3AJzWsHd7yKiCLNCZu4LuDXp34eDigVxv67",
  "key25": "2Vr3QLGgzmBAGaN37iyGGiNYY1pvrcQsoVSspQQEqvRFUk2wNksSqfTNGnM2mPWKYnFctehTQXU4fD7VWwP8Yr9u",
  "key26": "2iBgd9xP2LQXR6DfXrM3tQvtYyZM2cjegZ8nksvQsWN1dUdgED1a5jr4tMD59HADAjvPwRmeqJSMLLj9xKjPWEfy",
  "key27": "3dAkhn4F46gVyv5SvDioENicbWJrs6Lcpzco2CEMGpdfgPPaPXcEtY9YiaX87pBjoUiHNwNmYYRZeV8wr8ggdbh7",
  "key28": "424rNhExHwyV38TtZEW2dDCMXTYNaZ5YGqMUsxVWV3SPnfK6XknSed19mgQ2X1gwnYhFV7mH9RSd7q8MrxiLrv4y",
  "key29": "kLNQ8PEjxXCrwwdkVbBSdur3Zxa6uBB8QcxwVE7jC4UWPentJgnX39yxKh7CqUF2xngkhguseqgvTDZZYbciwuf",
  "key30": "67DCj4xVV55LEbBiJAsGCNKrKFKFU11X8qC8Suei4EiUWR7Z3StdVKKEGKbdGyYNRA8ZhiFWKra4GX5gCzb6QA5f",
  "key31": "5G1u1YUvi9jXGBQKd6DSG84My23K4G1omQYjKfi6h2tV8PKeg249m5PGQN4UaVkLBxjsf3tfFubipMv3J1D325s9",
  "key32": "4RNUUjJuxr7hXfVypJuzW1rumFRqr9CJwbEQVgtvyqwW3TFnbGeJZWzQiZNLHprdfhhnZRidxihjC8EkP4GY3kFX",
  "key33": "j22iQHwdhto1BxDTXHWQkATkBQZBoUPMgXfUu7MkBUxpJX4RSsxmkTxw7dGC369dDBTDwoWY85vs8h9Gn9Y11wA",
  "key34": "615wuukNPRG2se8EFCsfVSvMrvZ3JcUou4cjPtF1AQhzwMGDmKABwTBa6PwJpwwqw3hQWoZV94HqiyojwV8nYoAM",
  "key35": "2d9p8XPgXpeG4RQNNNnirunjSBPnRwFX49r743TfURdz6qVFXdnuEFXUWq43fT8mHLGdtJgQzy45Xmhgu9VeowJe",
  "key36": "48onU5NTkFfpnqhByqqbWM8REVbT5sW3M3yuQGq26WDR6fkwK6N3MXusFpnU5EvFGN9Z4eURzcfR2GgADhgyyk9L",
  "key37": "4i9fGbGKQPxg8m8GFmRKkYLWU7gnsmaVMvn7f4dXTD59CAouu9TfCPyWn5auEEYvHXve6GHdQySMYhmvWJbYWzBy",
  "key38": "5WBmDK6EuDktkkiDtveUzskTdb5iUkQfGoh5DiNA1RNR3BjtrENbsj7ws2nSeA8tux5yitthXm8darJSYiuLnu8p",
  "key39": "5wTcjQd3qRzVmW89bdoYB76HeexmNqHsdf3vhcb8E1yU4oyheB7PihDuhxYXqwWcr7gdSvRSRB3GMUvJE6njsQjT",
  "key40": "dCAMknVed2ABGKyEB7qDi76DPzbTq9rFY76hHU2Xu2E6BGz83Jzrnwfd91Bc3X49Ajswv7Lm8t7fXq7yaELQt7Q",
  "key41": "3W73w7mXqFHg8eCyQQthNDqvnzYZT1ggJd7756WQA5UcKfU4HKcNtWi3Qiwjd6L7NypkCbFZrsH354rAwFeVojDT",
  "key42": "3LrpwV6FgZfoZMnFutnJGuFamFSxoyDxQKbyPeVK4WvSKP1y4yP17cHYvyrNr2TAQPxyj9yFzqWUGwPZPSZ7eGeA",
  "key43": "4bexFnACec9KiTpNaNsFad36MiAQrU9FCLW4FRgWBqWdJtCPusYzQQykfnEhWamkx28qrsdK28QAiHz1NRVu62Qe",
  "key44": "23RjQcnU1UWxKxuM3acGKNqNwDupWEJ47ScL6GWCsZ9zPtyesi1dUDw59o2fa4MqCNGLoS6Kp31TqqyhyHd7HoCP",
  "key45": "5PZxPVMwrGmqe2gkMEvyf71bjN8ZDmJmkimARVdgeypdNF5eS8snkCs6KKAirptz3BvEVVPnGYQyuuNh1aSFCY25",
  "key46": "3osBTouJNw8mitvPUvMS37qhcR6vM9QedutEgnPFcNzXNb6QHEVh5JzebF9PcmFAhtPk2qqJkKkneHEXno8zCza",
  "key47": "4qz4n3nEZ2ewTosknPxDqV3oDrrk8SLGVoW1NDSTYyZ4xoS9PDQqJiMRd3ZtLzKwyArUvp5pCssbUcFj3xfqLcsJ",
  "key48": "2CoJNaxfiNVRx7x5AjJfkCy7Ng8qZ867scu2u4foM5R3kQRbcy2KDZ5qMBMtT1AjySdT42EyLGkbBvMtadpFpody"
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
