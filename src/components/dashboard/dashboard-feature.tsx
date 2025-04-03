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
    "222FcYmyJRZhxFtpuAEn8wsAkeUNSQwvGjqHQUjLVJG1gR5TSBhu56YWinf4zKL8ifnRqBvpn43DuHVAJEiR5XtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyAvMD7VBpBj1LqnuP8EPYGGS97pVxaBaWuWzABxQoGkU3JerQtRZBqcjppfrp5EZ7onfkUN4Sbeyg4Eo9aAh4p",
  "key1": "4RJVBSNufePc1E3uaGtN6hMNJMPEUhb3sivxfKRMJoA3ueuXnWxg2DtmqynK689J4gSvvBKFV21nY8eCj3A5xMcE",
  "key2": "E5mWTpF5CPH3YbNbcGbHCgCoQPW5quUBdkccpSE51BL46hDQW9qEDRba59vfwEKvtzvtFqs6W2twnSxaq1exp4f",
  "key3": "2Qd65wUL3aLtTDpCktVtFSiXLzezvbYHLwgTBi5MddGwx4xn6XrEzueXmvEBLVMvWY5tCd6GJcEvbn3dMJzHpH3z",
  "key4": "5qBQCFv6to7zd3fByZLapfLMn9bTRoAsfJ5PCsHUUao5isjmN7tpEvpJ3E4SgAkqHNkQFw9dbzihLKiTS3zEix9X",
  "key5": "qJuESjM8A3U9EvcAvsRTLBPkCkjDeVSxyv4Dxih5SPnVKWBvrLoRAtNjHUpGiSfEQoSioMVcRhZXdWA4E1UAmrj",
  "key6": "4vPMxnjUMqLLM6njxTjUaNeARgiKmSx7u4praqmH9DpqJxK2T4bbA71TuWjAzgbBpAUvN77v8bTLKigFzhw6dNzp",
  "key7": "5bEYHkzmbD6uTBVhk43wFQUadxtAeqSZGF1B3hs8VJNt9cTV3JEjG1itK9aWSPfEGMNLLM2UqBhHcPTF9DCKdjz5",
  "key8": "3Vd68ey9wX5a39AEQ9YQtyM9u6A8Nuaw8dRbpQ2xvgfxPyC64aXjch3dEsHPfdVChsEHkcWcvxTk5s3QxAJMt7xR",
  "key9": "3J2ZXFehkABcsacnSpcsD48mt1487pC8e9mjxQCUGPbH7isZ6wj3D4ZA3D5cJfxrN9YDRaYnuQpccpPjemBmGLmW",
  "key10": "2e5W1cYJqia7CmQbL6zXReQGVc5326AwXNmpxYj5rCEusRbFZtMKZMw8LBEQ7iditUsR9hPFtc8TJNE3dQ2QnqQx",
  "key11": "2EidCiowDkcqQcefPCqvdTtjVgVGbFyedZGZYVXYiELCwp8wprRKEBeyGA57QVtRgSZGcUKtAzkTtuJNZz8d44WY",
  "key12": "24vaWUVQD5ur36DK94ABN9DgSVqpDERfcgTeQhoukBpMy841MtKadkDDndz1QeneeSvTJvG56sqH7hVyyD1rkQNn",
  "key13": "2GNwvNm5GDaEQNsJtUg6hxGCEo2LdokDGLY6LKvNKiTRMh18XzuBNMCmVauugo3WCdukeLqQUZuxfRjDY71xBy6D",
  "key14": "5q8qwQikGcJSGW6CjutUBMhuV8opMQHWvPVpsAzZnq1r8hyosKXeW3b98a6p3edqgdfFhh7BjtugKLAF7dARbz3Q",
  "key15": "2wmS7tpZKkH4bYz3tCzEFpdCPyn2qySCKxACSUcKWCkb9GbwwgGXneQA6ct9fDF7tWtFh9PpJqvrStUVR4n7KXvA",
  "key16": "3HGShRiYHNAfLNsmPpQNWDt4MFio3xzLHgedMHtHmcLtNVezTqLuyWgaiBpTVeEZvUErMkMN5KiodGJ1ZYTvCGin",
  "key17": "4c59RaioQtoXvoHjM97WioLWG2BGFaSBxj7H5VqfHHDYrBAuLnbNMJ4ngDBo6tDSbzVbBzy6feHYxKnxJxi31TYH",
  "key18": "JKDCE3ttvFTmnG5QMfTHJfq7i7PRr2Gbj9NirrZkPshTD4WhVZmQ8dbM7k3PR2an6ZsidcZpGLSEcLNNjV7GcER",
  "key19": "2YbmPoATwD7hByvGz5kXRCBtrVMDA7NETfPXcyD6qs1cM7G3pqF7KU6m7ETdBRabr95SYLCWvf5pQyGQ748PB9p6",
  "key20": "4Dk1P91mZ9bmQ6DrR765EwuJ7zs1JU6mPE2xaPmCdUZR3YuvqJ1Be1jw1dU4BivLYiwMmp2xFaZd8wTcG9NRVQxF",
  "key21": "5vNwbToLL8HZit7pSHi1SEHWFnogWUKt6D3J2sTSy3Guq9R8KmFX5uUSSgCuUCGUytC3y8J2mr7iQ6uPepfe9J3M",
  "key22": "6FUUMBuKesE8shbmWE6sdQ16CD7V4oFd26MxqKrMJGdNXd5Jo4m91qpWuJP7FSdZeLBQ1PAZ4KNTSmz7bMn3Vwu",
  "key23": "2KQbRJDMY548iQiCEQ1mLztBFCWNWYBtQWcU3wWC56e6fcYb5nPrTYWg9mBH7hY46NVoXo2gHL6yjMXHBVVy1nmF",
  "key24": "3wcSLD3wfLC5bfLmoZKNawX7W4of8eUrfyuUgSzT2A5z2Y8dFNTLJ92gKTj6BEJZXs7CvwA6a54DYbVAvFvFCH6k",
  "key25": "D6WA9Xw35zYSimZA9MrytNuGLyHkFZZBABmkTJovpuYdJNZ8ChaQpyha4Khw9e3wEEMTceYqSVYnMqQvHpzsRrg",
  "key26": "3gu9fJH8Rdp4wkirfY8T212Cn1jSfotoTw3r2v1qgyG6H7Y5EvXYoPquSjj5nx1cRBp9KX6Hy5kFeb3hS42RFLdf",
  "key27": "qybfeVZW4tAbrXaoMnDtxmF78xH3fADDxJdHMMAqXGjeQV6PiYpkA852jvSDe5BiqRpeRP2bjHfqirP6STV2Z1v",
  "key28": "2eSgvupLtYBKW4m3yngkTvCM31fV3n1FYcGsPBo7xL18er6yCrSZ45z2az71cKMiCShZk5dMALdNGL7L8pXodLkA",
  "key29": "23TsgZRvoZiVPwFkFcr5ErERnGKGJK3ctpA7jg13PwzwojCZvJP3XXLBcuAK7i1zu1oLJVoMrfq72d3wAApvfyyG",
  "key30": "5Us7KCEEEAURmWkiUNPwjFVsf7FotMsShgK4aBBpdMd5gadGzmwThDqaTdW9faHn5JsLyX6UUHiUimh5ndFYusgc",
  "key31": "42Fsh6C3CkNZiD6X3DybUivSP6zT6sZBd1erK3wdnfn3ZjLkbPzBm2kYcrzznT1qDeMUCveAmKMDc663AmWsofzs",
  "key32": "DP5fd5Bf44PKRirzCaS4TCynBuu7V1Z5x2mTHXWXstrad1zUDMHi7cWfJf9TNifpbAQnDQQZ1Q5SnHVf7rNTDHs",
  "key33": "3Bps5UWffCGT8a52NqEhHiEPBBaUijE22uG6PHkimzazBnUFJn8z5JZGwBiafzj6xZjds2xWvDQxa7WFCyCbNBQ9",
  "key34": "hg8isnDTSmeXpWir2GfFXKkZupzBUsa4nnApj3BRonPoTj9YMcvF28YJwCZGyQS7fEkS49hLbmRhbrYAWJTGi3i",
  "key35": "5yjfqv7r2271s5aJYxdJcGSxEu4jjGyTBmVEpv4norFyhX24wR6b8gWkZDtVaNhSXKqtTN5dCbGt3JchFwuZdExP",
  "key36": "jM8LGgeWAPUMC4rKnhRtLMvWAwsK1x4xJXxLu2VaiZopLwvqQABhW1y9jRberUTCjcB2KbDnKsuT1QFAzoMzh2v",
  "key37": "3DNznpYXJ2r23YHdSjWusu4AqoJKo63PAgPqWYvBWvgLFg8xAQyivkxKj5RWQ1F9jYeDpnst3xa2JUKS6LoPN3AR",
  "key38": "3berU2zvpnCGYS7ChAA3hv4atvawpUiKTHQb2xGm9YueNpgUR7a17qREhMoEeTXuDPk24QmNmaMRzFx3syyxh5rd",
  "key39": "mqZc2LLujmjmsZFkSaGEyeM1zB9ZDQQqnQREHwJ8DcxmYC11DeLXwcHpmpQof5oMQk4xPPG1vdrCfZ6Ma3L5oUC",
  "key40": "2cB2voRPx5eHaKaL2U6vHJhyU3jJsBiQbZzH96wzuLH9UjPs7DPW5HcVnHZpMzBwZft6dMfJWsdbQjA8FPYshZCN",
  "key41": "2RxqnZWXW4fobTmJ9iVVzLwrZ5EVNf1H6hKfR9wB5LkvkLSn3AJWthL4w8JkKRWGvjdTkhP51VXEatnoQnTttKsb",
  "key42": "5S6S14d8M7md3S7LrFuz8Pm7dJgHFh8VTiAvXN8VxHAU8AxyVtjcTraLkRtHFxTVbHy614UP8s3hRBCVFpzCW4sr",
  "key43": "3HHT3cFscd4z2nuEwyRKHLZEDfobkvADGkFJyorh6qMUKSQRG4jNzGuBCcXjqcLeAVzBAhcHDryCtMzBNcRBxgoL"
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
