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
    "3Arjb4PEMxApbG6zx4C59be1k8woqo21MubKo26R4WXxz3tqH39sUURXaabS45g6H2xtbwWC7JuCL7e2tUE9hkVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTdsBERj9WNnsK5p5bJxGAo1UtFmoMqzXWwkKNBL9H9SLaNYMXN1Q5DFACEqHqXREraC4K2TvTyuBXXcTgSdwe8",
  "key1": "5DPApq4PKLJbwCqrSPWeeJ1BCaUNL7tYjFqQt8sofDAToVaDG4tDpFCkx2gZxyU85FoTVUSorAQaAkzRyXSYebja",
  "key2": "25nnem2LTbM6wehZDPfNoJ17hvSkwnzHRfLAyaQ5xherKe1inWC8kaTpf9aTQyX6L39eeCEyCFEu3r2kVVC2iFNb",
  "key3": "4eGGUwDhdsBxRPmpmUcaTCFbZfQeNTVtndZdhpU3rZLF3nFxjvkLpaxjYrnj4FxpQaWYryTsfkiWq3FJ4AzUSUKL",
  "key4": "5oAuUMeVTdGGq3YymVWZkPHsChs1crgQjEiD1UppkxrPhtDRrZsZgRxRk4wAQTcEqqiSBf8XoUQJVpSyx5zMtvTN",
  "key5": "4MELfY1SdLNSzxpCyiGTweNnspDNT5wSxVKkex6fQqUh33mnFZWvNDRA5NvHmy2aynDCqfXT7cbkmZwiaqyBHuLA",
  "key6": "4TLjiYb1X283hyRv7Z3kcBSmkMfzGkST4ZEk2f29auXXguvpCnqUu9H7TNK9GiVtgxgNrM5tqkuPoD9W7cwAQByU",
  "key7": "2Foy9WNPBD6ndYttuQ7D9XG8GSRnYGKN5VC7DFBXMHUaBqayEHy2UJpuKjfW8eCXtXANDrBkFzoDWjki1fc5A7UK",
  "key8": "3eBMRUo6uN9paiZonwzzD3H9prLSmEFcGzFDQ8Bwoc1C9LVyRNCfXHSFVJMhoZFXxLNQthYjtSmixH4vq17GWxkA",
  "key9": "44u5QA91TbuqjGkZK3u7jmofL4dcvb6qWQNq7KXqpfNGzHJbJXYwZoWHJnx3U2DNuUzAdFyVpmyfMdvL5xGpTd7",
  "key10": "2X2fyKUoFxyfrQDspsddJE6d45cyNkgzd8CVMttEcrjWVEhBKPRDxqFd6y9eUcioHPN78zfUpzBDRcZ5jqFd1nSR",
  "key11": "3Bq3bMTAXg2R22EaXA2h8oYHSL29rHh6z9c7HKDNQAkQj1BuiEjwJidx3tSxbEij8ijsyBk4ivuznu8a8WbUa5ej",
  "key12": "9mSES8JqNPk75MEo4spgkjiKC9UiaJeDdjSnUDv6TSsVno4pRNwD8MWFLDRAnFQppjaRpgM8bDVuTRb4MFGof5s",
  "key13": "26EVg3593aWEUAbhQsj5SeRSq76iPGKGyUJMbGKu5kkDaniT9h5ibYGdsWd9BDuvDptwM7XGq5LBWmAa8ZkpBQjv",
  "key14": "4fVamdkGM7uaEsSqMr3qimZozxHYGguDHP5eA99gaEQyG98TYT1kBMJononyVFQTUGJcTgVJEfnqRcZSrmpU4FGP",
  "key15": "25TBpK9k5gvDkDGSH3JY6FsAL1ooyX35RdwNE85cQiZxs1rA73LV1hRdcBKUzPMvncumUed88bf2K386CuW3syVW",
  "key16": "2Bg9i9hoa19uPX2SQtHfzhxasZ9FUKePUqkrWUJ4HNwmouZrSr6LK3R2pNgpmUYtbdUWKfHiEnhGJLb2zkdnN7tr",
  "key17": "2jdDc6teYtUZNdBmT5EHKreA525SzpKvfhJ7fYC1nmzgmStv8wDWJFPT4VQhsH8cWKWvqYQENV82yv4m6faTKazq",
  "key18": "2upJbHxGh1xugSGaNBq8VyqShuky7a1r3WovkKkhGuaHv6w4JMwDoopHvXhR7CWZqxoscgkG4DwTBtpNLiKvZTCg",
  "key19": "6CkygStLjWR9dQfKAmyQg31RdeqPpNMwknUYNXd6BsSNQFQxtZNSvuEJMvwKwPh3898xiE8qpop6EyPTBDjbTiP",
  "key20": "2TNbX2p8Hn7BjkfCfHGxxJdAt98XTh3J7bYmbsJhsnCSKpvuQs2cDWPM7mRugJ8q4yJNd4kiGmMZEmPcsdv5jdc2",
  "key21": "3TfubiphJbC42UNAC4fk8ifksg7geyZAWjWa2WtAgSGBDgGWHLZfvQdFaca8J2gJifLYrqjwdgVUKJCx8EWudKDJ",
  "key22": "2Dy1Y2LqcVvH6qKjg6CsiLNsFh7MsDLZjo4i4emW8Y7vshpTo2Hon5qg29K54HHZFaRGzru8bq5TypBEqu7iQACb",
  "key23": "2h3ZXbBx2SeomptPDvBjNyMjL79HRACSnAgD5uwUwbFZVrmN7me4mXn8doyY6K6KVsPNosVK8dikiBtZRZyy2KG2",
  "key24": "4LrHi8zXD9MonHjAbLoLYbmyNHnoXVqrtNQSF87a5gc5TLoGLL1rEUKLmPSbrBrUypVN1e1Pj2YXZxpQLSQMKNut",
  "key25": "Vd6a3h9vdgKSiYz6HJRgENNCKZZeUwQR3CHtmjNh5SyjNk3vE4UzMWwSamGxFdjgK5Fi6vjcfJWC1CfkKVrQdUS",
  "key26": "4gVgWAN3fT3wxQy1Sof9hJEnDH2q3EoY3Bsx7yPSB97FodhMKCdZ7LE3pgk6QcT4CwDFu11FBZXXFShnvmHd9sM8",
  "key27": "gg1og7UCiyNxhYxuA1kdrccZ8iMmpPoq7sQ3vQnnWeLnHXrYmftDiZpDffPWwzSuLmq7ANw8qrKHNdzh36pNUyY",
  "key28": "2yNZ8o4bxeGi4zSeG3bSLeHzb6rK43RqLUFgvqmoWXSSP16KGawuthCPSHEKHLydNaiA3VY6LQVqusHZ9dNx6ao6",
  "key29": "LxzNUVYvitSqgQbbwsA7ako7xkn4jd9eTBTYXyZ4Dtdig2aKL4wt61m2pS9a3JmJbxtMrdzHhWtUSm9XTt1jEEu",
  "key30": "3mPaEbcn5fSYUyM6iyS1VVzjx6VT4oHZWGnPsRmcMSWQfHCcZmk6qU8R9Yi5aUJpPy1qmAYrMNoQAA9rrk1GfriB",
  "key31": "3KuXP5tV7SYDM3ootH95oGuQHqq1defmf5XaWvVZ1GKZr2QnsbmPT49ko3LVVGTHXwuBBgaRFeS4tuJ4zku29rkH",
  "key32": "b7QsCqW2fT5CwaibDs9CfyeQDHTpUGN9z5MENLNmknScGRjdrjPJTZS2d7Q4XfKhAFZfM8bnyw37FWCMLxs3nsT",
  "key33": "47qafbGXzbMWFEzgXq75gk5ieM9z5TjtokGxR8EfmpvuMNPCz2FMbZVDQCwDHEK57C3otawpbeHbAayHzF4R8wpw",
  "key34": "7nLCW9jmRorcsU8NVjKexYuv7pxQZnHkB4YzAVD8Q5ySUSwsKm3MxwzuLfU9M4VabdK5APGjXfo7FUdb1wjSrtb",
  "key35": "BxUKbbZNa9Qhb8nBjWi8ZRzDoMuQKytpHZxnTF4eAi31ZGzjLsnqVtQMxQoiB6dHUWrc51U8PFszPpFN3HTEbZn",
  "key36": "3UsnsFhLNikCQrZAppoNVdD6jVebVseCXzADTvaXeEDax446JwqTiuNoGZscWHvoz3Cwj4yujrxCqYrrmzUQQxYf",
  "key37": "3nTamjNSPYzBVh4MzjpCJAwYhnUNSmhnm5nvNogpqGZofJnwBNxNJNbkBdLMShpXmmHcE2acqLDxxZuZYCYcd9Wm",
  "key38": "5xbpJ2CAXUykNW8dcFnk3GJyY9Ge8Jt9nCehtXUsmn9cZk3hm5hRisZ98Bf5Wc42nN5knciztRP3dFnJTWq3LLse",
  "key39": "4WV2nqd4EG8JyUEHdVMEjHBAmfpegcqVSH9MCHZTwKS64UAEVn1qAqHVQxvuK1u87vdUpTV1BFSQU3qkrPsyT3Gi",
  "key40": "5mcdErvc8Lh4f6JN5J6FchwMkpgvR2fVZPuDo2ipWfJUr663VoUm59t7q1QnFGDPBCPp8ScidgRzN1pCcntwZL8b",
  "key41": "36q2tZAiugGTq7fwSnR7bDdyDCD13QfLgxrE1gPnh2s4UeX1cHmjPjMf6SfoyXsdVDpu2HAd5ewX6hirHz9jq7VX",
  "key42": "2VLHcPSRjNM5GzkzEDJwEEVdw7kPgVBc6ujFmv1Pw33tVtwUD5JUx4ZWaHWkB8JACHg5kxNxFjko7X5BUWfYTeTt",
  "key43": "3T7ajdg7renWEUZqAoTtnb5B6jrMqY9nt4tMiwpRTcUaXZZ5weEuu73w7yu4HXvdPCAwLGTikZ2j57zrgzL4sWR7",
  "key44": "5FkxitgG7gbkD9wVvpNwgaiYp8jGgAJ1Z5vcVX3KrsSnLuh77kFbv42EpzX2R22o5X1Uv3nWGHmvc1jczPDNCKJj",
  "key45": "4ZHXVcmiaMp2sEg3GhXbEUeJuTh4H7RxJMd7ts66dN4pTc2FDRuXNcZZY9tHcQ6qU9Nq5JPYEznxdxw4Jmn6mMix",
  "key46": "2uMJCsztt9w1vw8ZCfQz4V3MgNMubDktMWawrLTDnzXLX8tyxNZoeiNGj9xEfbN17MzFmM3kFxZSLr4eLy7NbkZi",
  "key47": "5mS29BguE6txUUsCTRzTKEEhzHje82vHvKp5bCQFaF5e8eo9f659RvCcNLGDJ4dENpsq2KDF1DYZe23Kv6vvXDet",
  "key48": "4oAvrUmfmbzq93FWNw8zEHeL1L1etAzPgiQoxLugJvGxHoUqfxBwoH74Fweq1rkDG5468Nzge9Xw4Mz9FarqvhRg",
  "key49": "4ERshFvGY2sDord4RCaFQTGrV4NDF7n16FnCDDTJze3HuuR9USRD6zUoXntf8rAmZFi4ZbNEUGfUVJbpfKVMGWWB"
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
