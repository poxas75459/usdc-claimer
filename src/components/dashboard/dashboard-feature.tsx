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
    "4hKSCY9quc1EyXUxPDztTkqRuzNjZbsPYbExoHHEnFYgHfVpoVDmNkYTBEaHyGYVqfApeXS3HPrKsdQCidUMpBAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2keTwcHGmF1pUhxn52J2v72PZUhBcUXTA6D8HkyitBRJbyB1gmdtaqV9sM7aCXumK1rFjG3ctiMLnmLxKDGwHA94",
  "key1": "RWN3u5KPhYGf4sfKJyxKECCfPrP4B38Y74wVn6k5uWDEmbwB62vU5yhrJWFvhQHdAt8L4zte1dUfjvtxJDBi6ty",
  "key2": "2u76BRTnzBMtheGrxGwHY2Ysk5AQe7txKeMFPeHwbqxxdTRWTX4wsPJpsR56MbnxXzKAx385b4NKGMLeTubrYEQG",
  "key3": "2cyUboJCusVnpkDCanNtX6jMnG1CneNV5UhRBeaaKtJGsfVcqXqAKbXyMew9ZxokzyaT9mFCU3L9eFsEd2rJoJnf",
  "key4": "DYuJdxWM8zFnKTs9MVxTfqqR7ixTWggG89vmW5BzgszmcNBGw5kMpxrM5ZgUJFUxFXcTCEKTBRg3gqaYRrpqqKP",
  "key5": "4UBRojhfRGH1z9zxvBTEdbyatQA9KrKDnSuCdzNttWXTETHSbWYpnRU8HYruhK1MEKh3KBiEeE3bD7pbtWYu4uDv",
  "key6": "y4rofLdoyt6GEYz8fsXPeH76MG7iVn2EHPt9xRwP9r7Do1VBcAQmQYqrbMysUHhiCgg9WG7RtVSq26e3nU7wvor",
  "key7": "3CtEevRTCS19ztrREVKBU9bYqnQr71XGXT6n2Fw6g6bDGjQmLJguBoTVdJW3DZ8oNQozLNKvcmAVf8QLURqzUEYz",
  "key8": "dEeC92dgKPpVN3KVh4HXuWjF4iA6ByGitNWnVmFvHZybbhLVQdza6HDenSK6hhRDuGD1VZVeySML5QAhMC1i8hi",
  "key9": "4D2CVyHw4HU34QkHuCc7LNyzn4QXbMAx1qAhFKEZHrKSeppK5MHfaUuPzjE5SJTbz4TmZtb4f8B97au1ZhWTk3PW",
  "key10": "TZBn9SKi3U5HGHr6yfiGDwuJUHAV9S2oKW9iVrBU1Lv35gBB1gH3bQBPDM6iuTcc4XqYHkZempUJvN7n2Jt5CY6",
  "key11": "3kvZPQnRQUAfHWvZYt1G65Dcr6x5JmqhRvVSmQeEHHtkoJ8kztZ5yKX5b7MseETkBzHXcn4VFVSPTZ6Qpbk16gyk",
  "key12": "4nBdGaum8W3B5WZ8AyHfPVoCPu6DDL5VnmwYovXkkngFVe8R2VoqYPcuWTFndRsE3F8AL86k7xRHYjbzAV8iqSVe",
  "key13": "4hqwXfUsZtB9PpCwZ4DDB2PUQPLV6bK75xmC65E9UCM3AqWpbVH2bg1tjhhn5SKdFNfCRb87hLU8c4UFzBL4YHry",
  "key14": "2pT19eGqNfVLkVZXJuESxL1hxWUaQUTtoX2X3ZnqNoFv973Ro6ntDWyPPTQdnnFBy6F3x2eLXppETbqL7eeLCh6m",
  "key15": "4EmYtDWqVmCfhqxmkDsp8tPf48oguw1ohwi2vF3B7emcN7wHYFdoFUTcc1CmfHWEKxT85a9NjhXUbay7m6UuHnRS",
  "key16": "5zdtdm6HKSL91WZQ36nKixGoozJ84dCkM8tSjNKVT9wWikVzYmyvAgErwaf9h9kBhkHApmRgbix4DPE1mYuE6rKs",
  "key17": "5S5DDtwkyhKsMGbEjQuCqG6XqLmeVRMw9jMyMSDW5q9wi4qfTFaq8rqEzhzEiH6tP793HgfuzjhFvNRHXZau5euV",
  "key18": "4XUL6wYS2ELwY8GKTvd5XjsNuP2gX3jGhBibQ7CsNrpaWMG6GyZK61gh9aftX6WYZEq8M2evL3poQSqdcLouqkxV",
  "key19": "YpMTQjuYqNJQ2w4u62obvpEPbvuNR66f8Hp4wTZy273b2Eitfw2fFSda7LTKL2PHq7JGLNQf4U76vQ3GpAFbfRB",
  "key20": "39T83obL5ehCjym2zXdRc4F8E6NkBMPHVyyn2a3WRgPXNt7sDY8nnFdYubh2cY4s6WEXD9W7GhjgjCvbB1JyqTAv",
  "key21": "hwwPJzhdxRxdK5zg6nZfFPSSWTkv73pfv7vz3WYa3mhkhsfbeLjdfvbGXVjYP3W4oqRQT9zJSntZCnEcFtLA2Sx",
  "key22": "4EweCbmYoaXnBofXsvV9WNn8mMyWwjjrfxfCWd8ksyJ8ooUu27sMMXqq8KXtWCzC78XZDax9GeFR3hxz1pLz8NeV",
  "key23": "43oMdxxNqLgLPeZ3VJeKdcgEarMCaa9LbRJkvRcj2sZArreUPKuDZ8BUq7KUyo2UrEAVh9pXhwAXAFVpegZnHzAW",
  "key24": "65QTFjNeX7fARgETBVUJubqdbKxqcHJqkM17tBnpfpniXmPQs9RatGwzyniEfjEMf5ezAjNC1wuErN5tUK9Ubwjx",
  "key25": "5CuuXvRtWBQNRN4nzzMZKbw3P7ecNBZog4Pr7PQwVFVitbbfwQnjsW2VKgBSGh2auYm4kg5cz9HNHLF3q7BQghAm",
  "key26": "5q56ST5V3xVfJiHb6KLR48HyVaxNS8nd3LyuQQuspDawAQoatHTxzrVDUGAGXzknZdCM6wHrXkMdjtVSz7hUjL7f",
  "key27": "5k1DrWvu5gozzeUgKL3zpHKUidAArMKxVCTbBwzsHWN7g1rQnPHAKnbmd6WnmW5NW66gqGRdpSZyHuQRptzMgYeo",
  "key28": "2927Dcmp6pzNoF98e67Edy7ifVLNMEF9pLCck5RckNiDCYDnhrpXGjyAkRorn3FFiBwfj37nBw3DjB1YCT6FvEvN",
  "key29": "4kb564hbR5pJwhxmhiomhfS1EkwvjnNrwv99Sxo2Xv6MRKrU9QhjPBFLSmKmhpFUMiRNFethPbhPZ6Ei9V2aNLp5",
  "key30": "4TwBbsr7RU1BesLsRfPEV8CZNKw1BaQsvtgvyxvvwdcLzR6JqDCVzRFSiNj3PjyKg7jgWD7vDrvjQx6ApPaVDkLW",
  "key31": "4ByicUUzP33GtWXpsJimBby8se4i9dZpJcTqZMqR4uE1reFz56W6gGBeuAbXZ4ixGJNmnFiNM956anUxwUwPvNEe",
  "key32": "2Y6jiDYJdcrsHYxpZ7WSDpKiECDKyHuUCYceTKAcRyj9BYG3pStBu9JYJWYXx4YJAZyKtfqU8YZ2jWF59Ms8YZqY",
  "key33": "6h2AkyNVfWAytY7Me8So86LxSiNfLVD7TJzceLcEYnLvzemhWhYwpQCLyVihMD3vZ93VUWsyRJGc5Wt4BGwCCyk",
  "key34": "253zp95pKkQndczh6iXRSYKnRDNGPDunJo9GYsfBUMwnev5GivKEry9Gf1mfsz2Pei8GdgD7DScK8XAKAxGbJPRD",
  "key35": "4cTHUmRbBWPvmMbdmVZxJoyadoUxo3rnM7RZ3unmvpzrwGtFiXdtMYsDtK1kcSdF8sgVGT4YH7RKHusT6MPw5Mbw",
  "key36": "z5puhNUPPg9sxKvyqXk8eRrC5fFF1WAK134oSj8fa3Vjjyk8UdHjWfny1W8QJQqGPUFsNCUivhb355xYP8RWdBL",
  "key37": "2DFfN87NRPdDKe4TiFTRCVFEHjUagyAcfCf6KqTUKN2Lk8tGTmFxTpbCX7mwBfqnzf6cDHyMqBkbT8LbLHVwvaix",
  "key38": "kGiP85GFxTvRY7Qnwj2zCmQfmwWDfNTGN6vYSoKA387ovEMC3HrTarUhZbj2NYd8Z3MYyzGDWBdKGDs5uXLnHQU",
  "key39": "5coGAM1iwQRfeEuZ4DkwUZ8t16AVTHMNwFP7c8kj9J2rBfusCDVBiWnXZLtXwjBv8UxTSAM12JCmVkENyFFtdeHH",
  "key40": "ymNikLPB47hghL7wa4mxaHdJouPTUu5GeFNBqbyGEbYWhqxjanqRuFBkz136nLSGfbrgjPAKFxXeKAZDCqLQ7DM",
  "key41": "4WTDbfyJxH3KhyoWk69i9wKUWNfP5yF9r5UofycU6NVC5YyoJajjV2n5YYSf3LdugcWWbv7ymjVXhmdsjD6gdSWF",
  "key42": "4FvnBdSo8WToM7jEs3VWV3gvfobW3BNT2QTY3a5UHx2p5o6MwqfFywcbwnPYT9wg9yvRLY8Ur6TbAXdtv4GpfTfo",
  "key43": "4DzT1Zzzgckpu1oSvRD9TtpS7NiygVHDbH9hVZSdaMNwaSXctmdh69NEE5ysFYpGVEA62UTEMor8SnJ18ty623gj",
  "key44": "4vQP9RYCgDDGXc71WvyK8bwox2MW6tCBgaftbVu2MX6TRLw8rcFkuzSPkA2KG4pFeAFkEahhvznB6b9GTNhCzfqv",
  "key45": "4X2ry4kWL3EmKyVjGgazYkRPp882nqWLw1EhfzNZ2gnWCL2wU2g3Legwe3nFCBV74XT5momAcDFevtdryy21BkRq",
  "key46": "5r8UMRWSjzXj4d8go8g1fRmt2drC6g23RmcDhJp7E7u47nMRToTF4t7xas4z41n5npzZDUFciZpwq48eQFKvSEbZ",
  "key47": "Z2kQK6vrhBWrTuoDJRM5UBZQpQePQrP84X12TH7jBBPoWvcJ65W3JQ5YXaQdPqMKMmhETGQjeomsQ4QvfgyRCfR",
  "key48": "vrmxJyTH3EeryuV1VaspY7rYcJFsWCX5fCNjTBSQM3cXaCc1x3Bfb8GRjrPtixywC97G4jsEBvK3musFLKCMtT1",
  "key49": "3Uw3Te47iCtdwzB7kCFvLCtpeX6pqXe6wqzf1tJHpQqnzwhhoYLGF6JK3YA41ckUvq7nuW92GW2tE33a3VE5BFDE"
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
