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
    "sxqqYqdT8gZ9BR8aFFwWMrN85HPaz3eBjbwn6gT9cfrcLxanAbumHY6rZKLYgizbY8EnC9GmUpeNmcyH3FArBTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXBF7r8HJiSam2xZuVHZdKVYvhQrpXDj4ZvqF7EwqVJ7kBTWwSPVRAgTHzcMA5uLPJTi9aqhSY9fvwoMm8th97S",
  "key1": "4av8tkGKGhazHBsH1uWrFbavGyTVyN3Tac1GT8yqG2YPAXTNJuMGiZ6FsraFajm6bmSvwGVUcQhvF56gFLtY484p",
  "key2": "4cPHSWsZY8hSo7JY4Ro2kb1X4Q38iLMVdqrhq8Rb6oLW5Eebau76V1e9PVZM6YuD8iX6DiKu18BiL5dBrMeGgDEs",
  "key3": "5U6NHjq2j5VgZ5pJWebaB5RHxqavdsUoebrHDh819ugWg64dKpEmdmJKZFp4rXhauHmanVg7q1DmGCp5mjTV1thq",
  "key4": "2LWrX8fJyaVzWoFNzR1FfumdFgC283LpfAL4n7Fuu7mSqwi5X1Vi4RUxjFR9D4m2SNmVoE1eB5nxiFWnU8PMe9gd",
  "key5": "2K7PeTYFqiJawuosrf3y2C6w4aBwMUBUZaFbjCYptF8Lob6QbMt7L4dGrD4RPhrJLRVmjHrKmbur44HYUjARuPqg",
  "key6": "iM13fEuW2v7DznuJCEB2jafQHPnJUcisAkX8t7xkAdQiWwrJuQe1P6P5VxmmhefQqcKuroLdPGMCnrZNgR4RYpS",
  "key7": "4CSGzv7XspmWy9v9ePmPqxJyxbVHv6ETWrraaSAoqiB4qPCZGiaubHXBeFQ49NQkkGhommK95HGVn3znaNv7S979",
  "key8": "39qcYSEejNJbz8JQzfdjWMjQCodD7xZmU3KYN591AYYHy893yxUobuhyy5hyBqQAjRQSm9G3V1v91NMs381JgaWF",
  "key9": "tL7khRRpfiPY7eikb2GVB47uTCbyDjBJm6rM1ZSgzvdK8iCTgiEEdjTqvA88ZwLHVBiQgPreTcf3fKNuu1DM5Mm",
  "key10": "KcajMX2VHt7RhdfVPg6fWMEiVy9uhBZcaVnAae2j5BPFJyJiwgUk2YDKaUaqpW5J9zx3Vd4QZLEDzZvXN2AajnP",
  "key11": "JXELiMUv5FBFk5TqBnJGUYvPfy7CmwJrro5EV9NFjMnaj9Mjv594HdM9AKKSpWqMaDrVteCSsoMGnLmDte8WV48",
  "key12": "4Rx2CVqfAc87BuD2YH1QGYo61G8GwhndosW6gVk9nycxEkpc2Z7hRZdXHDPfTmtxYkf8x5m6co3qyidqhthvCUML",
  "key13": "3BrZ1xa9voZMujUdEHmgixkexL1qfmM2js5P6KVt5HhbHXQ6kJaKqyQxYRNinkYEtKYpmZMvPrBReELidhn9VWZn",
  "key14": "hK8TMXex6bwZRqJ2ugCJBs6tnAdu3fkuJ2KiR5gbsDugSKVSq6dv69X1kEBkzsDSvYRDmdxQGXptxvNp2m7uMd9",
  "key15": "2CCJvVyZ2q4VSNShXgzT2AGxw3DcrU599wsHmq11k7rAZD6M9yrYwT3DFiohd8YUHnt5nYDEDndGKP4qyS7YFH6D",
  "key16": "jU15cZFNCma63MsypKszVhjmA4uasMDvdLhGh4WYitpy4AwXR8k5TGjRBL6BB9FqTod563qkHM55vQpmMPRGDYQ",
  "key17": "2gV49FLQhPpczsCTp2yQHqB9wpTxW931vFgvebn7ojK8jqgP2RWoDZAqqaj4J8ZWoRHDGnQB2pd2PpDr5ChQL9kW",
  "key18": "4urUKEeSDTrFb9ubQF8hxU9NrGJxAs3KuQDGASqUnSeay5wJioPxezSVcFXpCuCqBdSYXcZ79r3ym38E7bWxytDN",
  "key19": "3DCZ3YpTaSonDrXWwyRY45vydfQytiPUMRx1fHzmXDoSDcKE9mHR55tXJSv5VnmPi8M2NJ8vL43Ld4R3x1HNUTqP",
  "key20": "3ULE5fvm8U942Pe1BzGpoqGSAhTL2yRG2KSJGA7jXMSpaT54WSNpgNZHfUytWbMtQWZwwcw717wiXwbQhKViEU1r",
  "key21": "iLe5Pcch3tvaHfr4wVcn5Vix3YdLPDGM6xMz2JUCTfPw2FkzDNprm7W3gJNb8tLkFp7hS9wE9EUzwvfkP9E72Ph",
  "key22": "4RnAQUgFbtB7jf7v7hHF54SDEBqS3w8WgtLbhjytdgBToWnaMz26yrkUYHcshb23UWHwxsCKa1g9WYXGY9YJ1VBD",
  "key23": "4pwwQRmHYx3QiHT4k3ugSE1JkM8kEZGCXGPmGYSXSnBtBgNUiqh5L3cVZY1BS4kYtg8gLSQZmzNCpv4UgPFx3Y5b",
  "key24": "5WERBs6xpkFdPbE5UGsrRrKq2hNMn1MHbTdGtCYkcpsetkaztNsSezG8XMdkXkshUjfNJTFpzUxkShggLgimMWi6",
  "key25": "4W1bqjtmdotTC9ua73hnLtPT9QpRqLjwGiVxrtLa2Xmrq7hpXKFCwHkLYvXgYQJxgKWM7R1H62vM3wXZFNQSz2gL",
  "key26": "gPECK2NKhigAye9iLRLkNLcZD5STDkoYvHcSe67m9kBETz48gY5k1Yi9AL7fb76ww9HGokREqGbSpsg3qFHhubo",
  "key27": "d6gvtKp61KHYPdVs74kNqR1z1hGam1TsoeQruCjg9sbtYWETeE9cNHw1VtRyYTmd3N4sSDt6aRqALfyTerZdhnb",
  "key28": "5AKUAyNVnhYPng4zHiJcmQMowfgrSYYA6vzACP7geaSWZKnEWPH8NTKCutvU9zPMJ3TLTeK8z5YzvcfSRYjM8geY",
  "key29": "39mvRrRxbrqUuWnZpWbcjKDvXur5fvnTbdfWG1MGPKfEqxCSGQ4GVQ5MRowqJCSopWTcoHM32ACzrZUyQoxzXR3P",
  "key30": "4XasVPzu7gJRxFDroqjnSHFiNn8bd6kcwqJawWwZRX6p25NNk9JoJXPC3CfhSfjAAivBQiLP1pUeNzZpq3LuTEjQ",
  "key31": "5VrVfCiWzaJXpQFqfbYMW8D41RjPGWSzxUePfv2krXuLLFCkYzdaXkweuJzfUrGTxLVDLEJsMPhQGbU1q5um48JH",
  "key32": "2omzoNzadzV7XDFzPtZrGwvw3YvupW8ub9V17Jw3SXMyxYgJLYrZXig6ziSgh1FKfjyTJszoutsRRkgiRkLqnxcv",
  "key33": "3SfyZSH7d16NdcVzRSkRzRjPsEK22x3zj4KjXaEHhmwD5qaPqx2HtxHJWmv6GgY9dGWpkDRU1EHVedVBAQoT4qRD",
  "key34": "5qWLZJsKTerHD32wDdyVs1Emb81vwh2QFwhfoRLbdx7BkJ4FLGRzUPQ5GZ96HwZnqrP7wN76VVH5rfLPBsFumwSW",
  "key35": "3HMWsFDypzCDNM9WxqUKrKCzpLqKsLviuDXt5JvcRRgCdQcJAkUQgCQr1oX6bchVwkcj5dK3AMg7nCgkBYXTGaCy",
  "key36": "39QHE3gTmHGrC3Q2keT1dEXsugT9svcBqgY8KSnZFK1WBRt8LPHnHWtGWYZ4oh9AP4mWgxBhYyZL5Z25khikYHnF",
  "key37": "5q4M34yS84rX1M6n6fwuCUf49zEwmimYkj3f7qCCwDu6EH3NAe7CD8mPLJ2JRLtuFN8woz81icEjzt35jRHYY8gn",
  "key38": "3hoZaZtDmcHSvRjP5HRgAUm1XozS88BZHYj8ycj57HWjPj9ik6mZ46KsjdVTYsJ8GSnZMXUE6iVk6iivntKTqcTY"
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
