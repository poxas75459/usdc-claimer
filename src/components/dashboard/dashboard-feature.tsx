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
    "4JPhh3YxJU8PquzADGMokgHg7ekEzWhA3Hu8QyT9CUFW4xEhMzJw1JRNf2HGY9vXc6RaxtSd1BhAmbchHN5wc4Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRgkSSzL8xz4dE23qGmjmd7btFYCaswAtuSiwaoGzAzBVu5LdDt1qhH1igzV1WhJApu3LgMHnKCZqDVqutSqvEw",
  "key1": "2NuGgjj7rv4uBpRRpN1KDPG8z2MMDuM84Q8YHTnyZseNLX9AHkdsuxNc2Bf82YoVRKdt1yj5RR4vHThokAgWJXJR",
  "key2": "4Z5kX6rghs5DjaV6QuB6xZLymRPvG67E17AgJBqpwaiv9ygedgq4Bjocf1VL1iNyseekkSuPxYcyzQ2AouuHef4h",
  "key3": "4WVGUvbF2J1hN5KZmNcq3vjgQWiYY6nCFJgUr7xKbgNcg97Y81AsRb2J9yf2EQ9QCqyWvvWHXSVEDfxX9kmjmF5B",
  "key4": "2kV5sMJkUEMFDkSzwNunVHkGkpCKanRyQYt5PwMEoaT13Zer17vL92ZWykQQaDUdnjq4abNkvmQcyoRQGp8MyYk7",
  "key5": "54RStHoh5am2pHWDCRq6y5QPHnJTjN38kJezfCGDjpanpGxCjJYrAY8EaUxaJqZ3LPnh9GDvj2o8sg8EfE6gcufD",
  "key6": "5R2WHSPyS9oPkceHKjfmRb4AfFA7dibooxmsBS1VJcygZU3h3uBrwHsk5tJJZyV8pFsnP9hWX8nXaeVWFMZaYorm",
  "key7": "2mhkXfS38yXgcQrWEimELQL3pPCJzQP9m29HKHL16ndWCPwck6zuwkoWbQgos2gtqdN431f5ZWhwprFstCNSLUbq",
  "key8": "2WPSuzYXrzyDtysQYuPgS6dWaYQfJHwTtYwJjsLiEm7WX966nUTbRGxC1gt9rAy8KSfSdZw4z51W6EMLq1bJJdKJ",
  "key9": "66U7ZCXdm9jvDHVMYFvm75vn7ev1CuD33pBaTSKZb4cR9sv8d1rH5utaHm7fN5fLaQadK9uwLXBNNmYPYXkXvcXr",
  "key10": "2demxHmeFsSg7taca7YMWsKTyZSEHpPqxfH3sP8s1ETyM4xGSU4MEm6oLZ9PFuodzPrPVQnxHLtsTpTH9bnFeYZJ",
  "key11": "5NsYSejka7m4f98sDmu1EeWV3kwS7S73EDzeVcdF4k97s7VdtkCV4AJYx2VmcPQsihXf87DC5jKf8wkZs6tkDp2U",
  "key12": "47EM5rLRuDpkwXPwhoPGKVy4L7RhY6QMGFun4Gq6ctJLyZv7ZBjRqpeSQMufNMFvMTKxC1VyvhdWwQXHkqBv1ame",
  "key13": "67VV3Jpuxrw6h9YyYvGRxFBX5dh4hwjHkXE3Wnkixu3wgnnb9bqof5t4dL4XSWcACUFWYD9PpoADvBpktRXUC3j1",
  "key14": "31rsXVXSLmw6HTK36PqM8uG9gyQPT4dW2M9hLCEGALsjs533oFTompyBGteM5TgApawcAuZtuuheXDupBCMLnXAr",
  "key15": "3UFDvHr9o4Znhsgfqpjz4vDbuiZe4zUC21VWfiPq4fCdn6vRwMSknJBXdhY9nbTKcpHz3XMbQLkLokeUG9ngG8Ks",
  "key16": "38DsmYNehUPsEs7MV1w7cACzCFtGgvkR4tGAHhGYjhiPCW7GZAoe3bfmf3PDEhzzcSMp8947Ann7gjmaDvpKq2WD",
  "key17": "3JH98o35L7sjaLbiwKssoE1sQyjArykirp3TMv7g5dRnrVdbJQAHj5M3rCPTudNX1Ez5axysTvdcewnXcfQmVj5v",
  "key18": "3Vp3wt8EdYbRmYtnnK38MMDF7i6ZSnDubDD5f72CC3k2i2r4Vuj7juYG6YvWBUGq87Drtc9prFQKFqSFrRB8qScr",
  "key19": "2hm3smM5yTGXrVHrZBMncRb8rBu29arproLkqEw3PE5RpJv5sNWhKSscUafJuFbvR3EQyQFcTYuxy5virAjHGwUL",
  "key20": "5LX2ZmQk6C9bLU3Un1n51QVUdKSfXBGre3hZSMTCVDM3tVfM6DrKoyTEz9X72FSRPM1h3w7nJDcADJPE75EQAeJC",
  "key21": "35J1E5xFEMZisRayNY2cWmwdwjTztp9rh37b9qAZChxJaFRNx6p5igFc47ysphm2VbY8VLTXfn9rv3DHYmbAW1wu",
  "key22": "3855NuWcNexErhi4xdCB4i2BbZeS6KSanpkuWV5VkSLxi9fKP5nDToBTg64BLmSBM1o4j8Vi2NiuTUh1gc2wzL8L",
  "key23": "2u2BHVqn19UMgrzxHvGFRUQvyZ56vAyGjBizvBtK28eHrVp7Wh78w5AJQXKwJKsP9mAj8ZkxihyCTDuv49Ry2Xpt",
  "key24": "ozU5NWGsAcX5RvhJNkDUysHVNYkR8rmmxbYSU8gY549PEGzJV5HeHj4JrMVuuXgq7U24nWkmTGAZp3br15GX6mG",
  "key25": "dNH4mUzFK8Y9KHbPH773UzJyDwquJMvQ1jhN9NtMrCc4hUhqMx2nzg7PwYEjeUzB3B6soG4m9bA9WMDsRE76Wuo",
  "key26": "51JLudKNCidf2AgQPGsTjF6badniEiN1m3qSHW1syFsYsGAyRDzjJPSrN5nedY9e25JSQMjS6s1segiPFgRYhQKK",
  "key27": "43JiFGCekuAJ5NbTcdjREiJQLN1Sh4zgtWptd7AhbyGX8EUiijF1VePYxSvNcZwKmZakUP18UAwGGaM4Sybz9C3H",
  "key28": "4EpnSdVqzvJXUhZRaajMbxCFHbi1Far9kfpPhuGZ1rcp4TdtCiaKZqpiez3vCQFqnhnuSBEaabahEctbYYwN7Rt8",
  "key29": "4kPtZJGYusT7XRfaPWeAd4iC5oZNXUnGV3hGwqH8jRHZorbczY4JieT2iotgpTyKgKZC7J7DpPSvBkHukG2xJqF4",
  "key30": "24hzxdcYqSKNzp1YPvR8Ts8mQXvFXTrtSVgFuv2ENfyYQuNVvnHiCcbSh7hjdbimxZEv3uHdy7a5x2t2X9BZgUBd",
  "key31": "4nYt2Brxv571CKJ4R3dwPM9PxtNqihBujRNxpAPuDcZa8JobkCDhfaRGkK7t9v2L8eeXAhuxWPnnZwoaBcdSEu6A",
  "key32": "2mkLpmzwvJb5yYgVCRcu9sx6Djw8NvhbJwVyf5oxqyUps5brxFLoJ1jPARKnxKzEEEJMCErce4M25HUMKi1uv94s",
  "key33": "5tQz9iDy33DEpGzR4X7M3safF78T7WiHqdn812faV7E2Dt9XLFcXnAefM9qpYWwduP6pw9ftN4dKehGyK77Y7oik",
  "key34": "2zD3w3EkinRd5mreG3kG8NThynjeuzDAdUHdZnv3zEYbHRfg1Qu1QA5oWDaXrKsU9BKoUwSfTm1ZsLMELsf9xLrc",
  "key35": "5CzQmWTdNiW5vjUVFp1X2e7Wb6KnLEfkRLxATFWwonNu9RtKnDtHbpKm9b6cwjTXNHZG8UfT3iHUA1CFXPAccq9r",
  "key36": "4d4qst78bQD9FSeHQfTttNfcYdV7xx7S5BBnhM4A3oWwACBs9sFfYop6hUaL9M96Dcm3dJqnXDnxoJR3KQHiY4Js",
  "key37": "2NZYXdY8ebppFnxR2XDXczZkh1mRJBv3EZACCW1ZgAYnjyjp6qk1Kk2ZtnkUtYojx49jtxoCKPm5sBgUZT7G5Pdd",
  "key38": "59ictwnx15Mqk2Ct5Sn8Ew2echTDJq9un1AQhLATZNkcFFS86PBEfNiMGSfXU4ta9XLk9VU731JSq7qnDSWwiLd9",
  "key39": "4EcqskNnkc3quWvSBbS5QmwWfEGYd4CBkmfCLR4JEGrbmFq6KQoA3fBTzYzmDWHzgvVcJ1CwJnRo794mET8FBkQu"
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
