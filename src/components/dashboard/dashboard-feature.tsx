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
    "oZG3PYctHEzkPgq2yrfVc9SfSAAEommnC8uMYJ7jSSQvB4uqaEw5Jgihm58dDhYpmFrYAKVHohHh7PRJhacWY7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QieQc1oK2oxsQSRb4yoRtz5BGt9eB1AGq7DRxjenyMhS3yC541peqGdLMpD3oC8raUQ338tjryYEtmJSi8pbLR",
  "key1": "PLHK9BfLUX6CvHe9CpJ4qaDS8ZtsBaeRHowXmCufDmC4aw9c9LE3s6ftXyMDqTx5EMuGTaZjChH2HjYQWUnYrXb",
  "key2": "5nYUYjXwP1vEwmjPSYfrLwq8jEgRSSuBMrQKN8S2vLnBGBD72XVq19qrYBGV7HwwF1HbQR2ddYFszBM8CuJHTxF7",
  "key3": "5yQ4sdgEWmxRq4W5TQnkibYZC2GwWXkxHwKB4rhx9XSyjhkSw6Dcw6Phho21bKicoKmtY6TFxdTQ5HBL8aD3iuwu",
  "key4": "4rZ2hHbi11yYvs1AjNAyxVBsTKsMuYheHy518bitSLAr1pewfhV6BUYknBsxesoM78GgT9KeDzBx8tAP2kAtp9DK",
  "key5": "3vRbY4goANAUdP6uq9Av4hZKqyWfQy5jq3VP8MFW39c3urbMrx5b6wGDWPf5AVHBpsbTz3dkFRLDmnkuw2xCc4c8",
  "key6": "2wUeEVfu9fMpb4XjiMtgzFsze1xJqF53d5r3nWvSvPUUaAS22AkQPbPJEsDSHAgP65CixkUW6M1wZek7rk2Ethdw",
  "key7": "4v8qpCjS9vweD51sPCZegm9NUkjR4wNEi76kKnadUPFQAhjsU4G2pU7aH8hTJZhntwpQoB8DKFfUV5vpkretM1bJ",
  "key8": "4xJBqLpXGMEtjHQdA3vScpa4SFKMTW3PQJTR7bkgHgJJp3LSfP6dBvHDtEYzLftopzxoNP8gXmQ6TWENVmEgiXDG",
  "key9": "oWn2NnfHSkjbXSun6yQEwkwxjenZYDxiHPpKLVDFKB5RpTmXAujqJpMYZ7Jc1Ax7fJKvpyXwKWorYCTLa89THwm",
  "key10": "53uaHeeHPhfT8hargMTHZvpgfs4AVdJG5ZQ3MbjM3o7d2edLiiKh54NQ5xztGkmAXJVvFA3PcmDQEn4ekHhJ6Sa3",
  "key11": "2DYJqdD37tSamucsUL5DPQDA42L66kdXQUd7WWS7HYV5K2TNkUuWnHBQV5quWvwUSq2B7JXygWTXSRzFJvAPd2jr",
  "key12": "2GJGeqdB2AZPVuSh28FwK61hYK8gBjPqs8ZxMAyR33P3L9sU7KamXtnoJkJ4DTiv3CZ6DsMRPr8Uu66FH3iPPWNK",
  "key13": "5L8fifWiZ8vtut5rrJFYMLmH81wEzprEWXtygT4CReoDUuHoPgzENTzhbrgDzeqYmWWgveaDzRjTmS2QGnQgDadf",
  "key14": "5uU25bqG82ciYis7rPQCEVxgeVZScM9PxwF92UpDWbarGnwQyyBdiiavQTNw5o5bSRMjUxZzH4iGZXzAumjysBmi",
  "key15": "eH3qLuDEvgGWrLHyUidurboHqVVHUNdCVgJfpxkqToEGfFtJRJeCPiBka3za83HUnWYTWmZ4WNB4QeYSXmnSBUX",
  "key16": "5rJYZkHmWMNDg8bXMUGwy8xvuqUbweY9wssh3md5Z7Fmny6SABdp5foPYwyu3x3WFRtAb6s6NDVCRgrps4KyBXn2",
  "key17": "39ff5FocXUZyLNGTwLqp6rE313DHNKFJSRiuzBqMPRtLBrcurTBhUeJ7MfveapxngAuEXs4H7sWS1Fb8wMWPqT8T",
  "key18": "55A9LJbm7prEJUM99FP8YncjWNUiPBaiGWcA1HYVk1tbtaVWbMAVHh7EY37FEDhPHRHZf5KX8aQzB79kezRrLdg5",
  "key19": "3eBKBTwz3tUKYzdCL1cAxsg9ht9Ayd2vk7jExmcmXrfBCUyhGsAFykHY45v43SsbfcnJjnnSmVGhKSAk1pFQcyNC",
  "key20": "5MdPvtRhtWoXto9ZyTphDjzU4RE7n4tkEWf8BS3fsKFZ4pwLD7eDAp9hVYnaGsJ4HKUaQ7rB1KX3ChjeAbhdwejF",
  "key21": "3K3B1NzsRXwka35qWh9y9gwewEjwjypQWPwP77UmA2nmgPKTPbD8NJtyJgHSXHzHJNyBdaejG5WhDeWayJcEzhK7",
  "key22": "4irFxNUdN8XpKS3RCU32mLYdWmhWXrFMnB7BYXv12GpVvxoqQvfU3NrKrjseu2kJ7hVDifu2d5fXiVPTh3M8u6Pc",
  "key23": "43jnsxHTWWyxo26rqTixjhsQffPsz8RmVyVnCiqN644T2Gx7NAhz2AadxL58955aHYYvuY7pSK6KXdoPWVwG7wbb",
  "key24": "392kTwkfbgkjZHakdbpGr2rMnpWfRKmT7KdKKfzm8v9FrecG6WJJqWGMxMx3w82n6DxZTNy3YfVKwWPpfx7ugWYR",
  "key25": "4hCjmLiM13nkr3Ribmh3rP1ogJwxdvxwyk3EHqBberNJbJGLiNh56f5eT6PT2iy9JvfaaENZaDvc7RLNu9hcNLcw",
  "key26": "58PJcbTBNj1QYYCZA5mDe6zyjNG9dBnA6GxnbocFuLfFJ2WhYR3CvCWhjSxq4Rpi15ojnXF5oQdgucPvgJF6axjo",
  "key27": "nG9BVF2gKgrvQ8ujszpMWprLis8ngjYXyNdyA1fbJLCCWAahPfCRcFcQiowAzcrxuRA6wxbgh8cjvXds3kUmnJh",
  "key28": "5vuyWtQEwpZGtQkHgkKxNYKYHvWAXDJ1wpLRGYpabps2Vh8ZAkjzz6BZYYD4KTYdKSMNY3VCK5SVnFd6K1N23nF5",
  "key29": "usmshsXXfLPS8iPorpNAXcCWRYQEBL6HgfyYUvcVU8aMt2UAaGgTzUfkN5zLWxiiLdvksnrpccdEstfoHRxG2nn",
  "key30": "65AnUwdo9Th7R7y3niSfyUN4XaaZZYVs9nzZWvE55WW6sT6YUgmEPkj2Xv2kFGYHmsuxfaP2dc8kPTkqQefUHyau",
  "key31": "4DEKPtk88zF96oPWiJtyoYBo8RsAKPxn6CvuFjWpmdt9HMHAUVFY62GSDpqfYS4Zdmbp8Psp8r3QGEYWhP5ErPfr",
  "key32": "3Td2sqWyFbMkFQgWNimdLRHpwzSW4TqWrR51xuiGjP2b92igz3sqkSpgCqx65eGRQwRUK9wmeGyJDNANTKoC3AF5",
  "key33": "3gBaqQmVCZ18jXgjKR9WiFE7Hd2PFXnmi1mtUKupYhLwTiEBzsYRbm8mdXcXPEZPoTqTCyR9XwNCUUfNctnoL4b2",
  "key34": "46mf1ovg54zoCWK6cwrcG23eAEjpMUdcfr92txhGZQPQjrvEw1jUfAF6deJduHyZdQCqfAy2pFX4Zq6HGBAyZC4f"
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
