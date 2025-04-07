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
    "4GunLYKzmQiry9Q1j5Y1zYs9XxmuJptcR715zhKFMhx1WUMRCJ3iheEcmvCQtJswED9it6iUDtF2DLyb6AC4YPZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChMsArgGeLj4mSQX4jm1frYxZM6Ap3ZgiQE4FcC3pteQ5S6EdymAcBGc2WP7RFALSDvCyuwpRaAW3jWgG68ixhy",
  "key1": "5N8ARUVxogcVoUeFHPpibBW41vJ9LyPXgNLwcYZziA5pmUZYMtLkcUrNP8VvcJaJw76i9QfLE56g8toRFP9e284N",
  "key2": "2R2DfQGuyMVDvQ8znznGDd2nWxHHmwm2Ps4nW7uhdXZ7fSByjvUoUUFPMScoHqvBRwR9QQeJttr1TB5HykzeL212",
  "key3": "EtT9931bsEdbv623Fyvs5n1wphy4mYDophD6EimSKXCoknWg2tYNjgS2Nn3uhUM1MJN4eCGBUjBGWYwwipJ9MX2",
  "key4": "4Fv2kSms6UHZnXSfNWwBJUT2Qa8zRAkQ2HGVZRSxeDGg9FguTMWh5jVCsd9Xa5RVUiHkFpA4Bapu9Q9hgU8cU28X",
  "key5": "3d3JpTYGyTfypjc7D31Xh9ttCpPZggzmYXc3L3rRUwSFMUdFhVqwng9QUi7c4KY8Y2s6Y5hA5LJkS1UZNFasuYWN",
  "key6": "3gQeLSYXETBeYRzooKnNmhSZig4qc89TRLtMMWo4o33q2RmLFWqLqz4uXPNgAYr9jVoHgQ8jVLxTrkwWYRUd3HE6",
  "key7": "3g66AVLBC3cnzyHcqhpVkfzRs6aDwX7ojQPRnTV1JhMfmaTp6CrifSXAeKYSV8xsMsrvtGmBg7ZpXfU6P1nq3SFC",
  "key8": "3LJvszhhMT3bCbPrV5vfH2tBBkjfWehtdzbUmGsFw3JAQGDh5Gqf6mjcgbPSGKHy8KdCDLpzjisYi9dbLrsGQ8gg",
  "key9": "47u4S6H1VvdtQgdT2y7gAYGe75bMokAJzfaGEyrGCvgKvEncmgkjy2kiSxYbXFAza5htMHDqV1EZBPKfJb2WpSsN",
  "key10": "5YxEZ75k6AG5Jvz6sgf1x4vTJgQenPE4YzcZfmJwLALLbtqWQQzvU4fZzj1QotXtsQA9nrJFeWFAovWkwcS1HSnW",
  "key11": "3jieeCPMgXamTBqA4WrYq3xy6VdE4HQ4rgF8t9REe6jaxWZjp84EnadU96UyyfMxq87taSBgEK3QsHnRDTNqkyHn",
  "key12": "24hTfJmjpivL9mH4Qg2CSRrG5MpftqhPq53GHEmqB5HJPqnbSCQXgijA8vwhXNVrYb4Bzm8Q3MthC6WtWe93Pwha",
  "key13": "5i1F1CGGHcd37iB6D4JLEqbbbecVSJ3aD2XYHSnX7iiwBBbssHesCG75nZPsyoA6zVKu8edEWEfmR5i4fEDxcKGW",
  "key14": "2p34evkcDe84k88MhTPqn9e9mvdQDUAYWbm4MZ3WK86Xi35SQh9ixbGS3w8MftCg9qPR6Pz6C8bhgXhyo8T5w5EV",
  "key15": "5TiCbU3RoUb4kiDrqkfzcoDdUtrUDTA6hkRJRkW3uJXBMmr4w6HK8QutejRjZRWNv4B9bARLK8mfgAYyJmEytNKd",
  "key16": "618PvSzbDm8rhbprbcG5Tu32GoSFHQwxaE8qjZ46EAKo8N6zBGfNhR95o3Wbzr3zuvr6zZBDJZcZFeARooNr71ch",
  "key17": "2q2JXWD1fLcMnfPp1sRyoVYSgf3r8d46E2y4fDWk8pPo3xE6SnWKrePcwuyQ85PqoZsSwQPkwhnHpvoT9MVKLbSZ",
  "key18": "4UrgHeZ6H9ZxHVQExzSXQ8sC337Mz1TJA6cQT7dyjXDaVaHQLbydfon2x5BThRs8urp3cTF7owD1oXZK8Q76pspQ",
  "key19": "5WyXvYLDLUeviDrPVKo67kBg1PgqCgCF5BpGPrqFBN1Utm7BhfhX7LxBuTf7zb6sCzo7SncMzFLhSFLk5mXub3SD",
  "key20": "3uBrNUYRciFHZKUD8WHd1xuwKVzFEneR8rwPfyv44Hvw6rgvgPpP5D4DzkndY4FnNWUUjUzHzknUZFZutqynk2nt",
  "key21": "5FcEyfi3vZbA9oqxzDZTnAEgC4exboNFiveuRWFufmdPeScohtoezKQQJCZgoVXZ5p8vBDUfXjD25W39C9mvxTsh",
  "key22": "4rHqcmZjg4DNNvM6ouNfFSWZ85NoWQ5STpqHs5k2mKrg385W827J9uGjAojyiNwf6UqzVU1Fn33ZdAAgMqKJnwvW",
  "key23": "61UFNGoZSCiPHxkjQESBgucNR69ihwPAarmvnnECotQ7EjaMAtyYNEvkC139AfNMa7Rw5RyaeHZsPdGGBZ1CbPuB",
  "key24": "5SLUHNQRbvG3DaE5p3kxYnYdTRJsE2Dr8gNsMeWnZRhJgrFbQLpu3AwFdseXZ8BPKGM6djncgzUhBDSDui1gpaAM",
  "key25": "4b5r68KifjQ1WaqnMoL5GN3qFMtzS5jBxoLxhZFP7WKXmaDAPkuAXjUnRu9wmezaLhvKCRBJGAv5kkVhH71sAyQ1",
  "key26": "4aBekgC9UqJj86BuX3AcMAZsQjjWzuVZRkTKcapcixzHAZ5zx9EHhyQBuEeuiZbV96BpWdJWvYARc2zF9PpK1SYp",
  "key27": "tSJESuUmnYAmU2Qrq2emmPzExdwHjfenLC1TEqLpjboDS6SKWVuPfcfDDY9Aa1HpHsuxEaqKQ4AiqkebheYoXW6",
  "key28": "5rSzMpNUMx1dvfKLXsDWh6X7D2DLkmigrvfqtLsqJUVbhTf99vGJ2YPo8y1Zbu4oAAMthT2QCudHCaWRqBnr51Xw",
  "key29": "2Z4NFAhW1HdGKhTdJoUdMkPuzVRmDjm1cJ77sbZwWZ7RhubtRwjpJPhoKNUknm8qBBivgG5L2Q3VCU94g817JzCY",
  "key30": "2eTvsrbnFD6o7rw79hxDUQ7bWGmJ4LuExnTEdYHuQZmUAfjui8xmkDEpmvug7rivddP78amNVw3BWpAKjTLdVxtJ",
  "key31": "4XectLTXtVFCu2uXigXiJ5hsM1ge3Xx7uZSVREtQ7fydtDmk4rAgsS7LPLqzJ49pW9R1kfKHs82HaLENn7oLz2bZ",
  "key32": "5qH4kpdUGt2ffCwGB24YVntAQE4tVGaAU5oRepJYhabCmdTtXnCwiMmbopiu5NkHUnbuTRsbB2phuSo2Sozwb2aP",
  "key33": "53p9JYK5py8UgiAqG3ZnNsJwo5fR3PYWeZZag3pexdBuj86sGJXX5QuNZBHYjHXUaH2UUtMxBfRDgkBwJBrPxEYr",
  "key34": "2jrQtAscQYDydjpCCzURKbPD1uqqM8XHpHxqAKE6tgQWbPZtquF7HPUtSYY577463EPdrCd2HNnLu8JfgMZJwBGK",
  "key35": "58S49tnYcfMzhG8XRmAE8VHKA3TE1geZtc5gmjrDXx2B3A9DcX3y3Mdou4SCEA8WycPus45BMJUwwrNma7YwqxZr",
  "key36": "3SAjRFpoynNPuhTBTmjARdkMwmFSTpzfkqHNspmKVRw5s9YiVebEeiMqiXDLY6dqDASisGFjaoHtYxGVKL7uWqnY",
  "key37": "5V5zvPztWvuwB9CfBkodRnRnVSFdKeaHwFg9wzyyAQhEaPPHLba47smgRSjEpQr1Zga4BgkxFbZ4y8bNLmzfTWtU",
  "key38": "3HrJawpjRLyr9UaUQqGnCC4mGsDFgvj894rx4bmuEtNHP9SW4CQGQGyNpCLf8Gw88TXf36zeNAM4h74ujq1cJCYy",
  "key39": "3V8KGuBc1bYP4iau6oprTSsALQSarDEKtGTPDNH4E8o74A86WTQndXEQHzLrQrXkArbnJ9ZLPkJWwMo3FUuHotmb",
  "key40": "5Tuk4RAmTB3x55rTnpTFREbzYTomExwWK8uaUbZUkS9qi6swGMvEFuAdByzbNQQUs68CudXSk7nytYG4WXpRxNTJ",
  "key41": "5G1Qy4hvWkk7Mm6X4J3pnRgsyd367exGKExY6oGNDb42zx8nHECmhbB628jQ3ZuMn2hVDB6dFMgkE4J3LaAiRdd",
  "key42": "2tYDJMkWa4HAdXiyMq5L2mwbYtrEor9XBB8ALcMdk4bS2KqyDURpJQLmvQ8FLmBKZP2zx6aK36EobhKwxsHNTXRi",
  "key43": "7X7qJkZpzo1n6WAQiFsRQESstUZq5iw9raUdu4cAQhA6dtuHqcfLDPDrELgZ7gu9sQStRgDrese8FchZef6xozA",
  "key44": "DHhgBmZy9H54LpoNfdUFVYKgwTDUw2GZAjrWJ2aFHBkoTgret6SkoThX3H5jqomadPtcJbLzy9enc2r9nPzAtTw"
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
