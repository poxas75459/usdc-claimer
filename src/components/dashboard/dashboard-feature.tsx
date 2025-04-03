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
    "Ae2vpWXRANGnZNz6MJ14gj3vkLHLGPxNtjij2rNJLq5J5qGAYZKacxyVL7m43nwNS1WoAQUDGumvDgwEhqRxXiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6RVsH1zBWmV8Xx9sy1Sn9VRH8ir2cMrFS3Ny6V69U74cTmkqUtd5scdTvEQg9XrN389cY7mZCQweskUUX9rCBd",
  "key1": "5YF1KmUWiSN8tXzv2vCZLfVBLKvvZ51ccyNgeLYyTbPvTvCqw8GuH5cezd7by54UghAogtH8y4jaJr3xLejAEZvx",
  "key2": "31LziWNZEYpWYVmU5ejSSjNVqQu2Xafpij2SJ1R1gM3397jDZ7ch5meEfAaqp5Ck49QYnvc6mLGVGKFwuh22p8zZ",
  "key3": "5xiuPYtCqFG22aRJfUHtV5B2UHDP21XC3FhDr5k7xLBqvC4pR9pMZ3YtRGNkq2hwdMd6R3PCjRg3vnoRLdp8PiPH",
  "key4": "ZnGmscp8VciCQb45V59jkEvBYDfW4re8RTqTJykduXN3KSo2jGHK7n4kEPKhJdFk1Rfbo57MBpRYZq8VjhXWkeg",
  "key5": "43mcfxo6sTx3y5WLL1pMWvSuSDzX8SWeG2JPoLGpXTFJptmu76TYxQhBde7N22WCcY7iXT8EL7TTtJgxWSs2eTxh",
  "key6": "56QfkN2XogJgztA3P1HYG5NtA8qWF6oymPRm3zyHtwuJmgJKKqPtc27qyWVbfGmkGkTC74mAUAqdVkf936aEC9yr",
  "key7": "3eQRhCtt2JHEy7T4gMKHoHJ8P9PrJszMmz78jnYrq1TGo4xhzPzisddXzoptE7CdNdVAqXd5rBUeKNaXLZqmSjaM",
  "key8": "62xDZ79aUsyYakqy7m5fgStKWi4kLa6QvE5SNMukcpPU8eL7PjnhpFvp4neCrmkZ5eWkaVBUjL2eXmm9GJTYgZ5M",
  "key9": "5oskmFbSJwP5CSUtErWdE3P9vbLxHiNucGjP42RmtkJokKdUVLtQYifJemRWfrFvQxGVUHsiJAebvuYi8Hyza28n",
  "key10": "593B9AXCzg7YL3XmmPTfrzUGS6VN94MTh1qbwoh2m93x3WGCWvXPg4EGVNyqaPhvLfZokGLqhWp1coxPy1W3uXDB",
  "key11": "KbDJeHGUMt5Se6XF3kHXZoc9JhpMQJ2FgHJYmhuz9t2Q6Gf2e5hLH7mfp4ai6VYG9Hc76Kv4rmnGiYsA9dA7nod",
  "key12": "dsNaSK4qcz3rTSJbruqBqLxCsX38iiuDu6cjtFJ61PuS25dczdD5titnKir7fgFEvx1wXUcYnoPuAXHEusw3UUQ",
  "key13": "5dK6ABDePvYcemNhihv1CRPqVyU1zoXBm71QqDbp7X7GgATqVWodgsABi4ufMpYL1qF2HXvfkH8yVvjKPjBBFwQu",
  "key14": "3gwnpMBEAsHujvm6aFRN5rHzJXFCu9qkKXdhn6YJxJs3LX9u2gqo57cNXoedBSUfq4nTKHb4vNWEp4499MqCk7j4",
  "key15": "3LRxnGNPkvjs8bZCaurdkDWZgcHLLaaDXSnP4iEYexFuBXPCKJmW8j2AMfeEXTdd2auQzZLK1GPdNfz7TLfiJucX",
  "key16": "54JpCXvAcRbKQbybXm4ojLa46yH3tY4KzRZ4qhrf5e6EzRCtT4T7THNHYqYXHPjPvngn3PS1RTXrZc4Ba7JtJM3R",
  "key17": "zdzz1AcCsrKUCPrJCazZEbBsCM99HRhsawV7BkF7HYbT1c7EwXwaoF7GeFbaT8v67WQuUk26pAiWC5FRc8q5Z3u",
  "key18": "4wfh9Dh5Fr9rwmVXSoUg57xtn5En39w9jutRNjY4cTQA4YuJiuQPGYu3w98rDouvHakm7nJkpsoqz1KrrWpujHjh",
  "key19": "4T7iXKxcnSDE3PKcyvDPHAUho27VGiUmMrvbBPDW7EV7RSeM2MmqeXSqni2BjXRWuaoqxVUyoCk2VF65H8fz8U49",
  "key20": "4uWrxHhGJpvHvuHtzkWZrSiFZjpu3SZL1jGnGH23PMCkkSfCNjBwy51Kk5smL9cjXFQ6Pw5cst3Tg123GPLB8cGy",
  "key21": "5LWQq8aAw1uLmBMducqLmacfGM5YQbVaKanbb8MeViydno3FYWhGmwG6YH52b76VQWJEvN5MFEvMJUW1L12BWp7t",
  "key22": "52nZ9GS7zZUMip5kTEav9TxrvFfgYbPVxLRdJzUap3Yo84BdQeH2KN7XzE7dWNdLzpamrWVAq6B8ZB4gAza42rPW",
  "key23": "3MkYj4VwE2hxHa4ee3KSCo3o3inkriGXNwrxzoZoYTy7wbWuJQfLTBJrPEfsrsmN4D5nLCoHNfeYZnq5QrLnfbHd",
  "key24": "4i8DvcFCTNqkmJqXhWytn8qzaftdCfjJPFcCsGyKhj3tMrdbsryBbPpXahxoFbcjaaR7EBvBPZFN6BnyuruzoJS4",
  "key25": "4tM6y3jRRoKwrNpMVCZgqgMWMm7N2RXfni1ie2pj78Evd9f1v8sp1ZTeUcUKo4aocVfytp9z1ruj658FVMUN31Tc",
  "key26": "58qRQbvDoCdu27TZyoBiVXyxSJ7pmJwY1sPgXzmFGEfonuyncXjsXKj7tNfDEkEZm1Ttu3kyTkqDCgKvC9cvsJot",
  "key27": "4qhWvFx4VcUBDz7L75epWYTtNuio2LH7sUN1YPYGSZugU7ehjSrfDYCEhnFy5YoosETpteBbyMFLyZbF6U6dk9cD",
  "key28": "54Tz31Zs6qXBDVGj8mq4GJz3u7bEtX7qQbgUrogiUEKjeqPraojL3zuGUTdzTi4AKZFHkQGWif53zVPQ6m5hYKDE",
  "key29": "57vSkCGSwcnKrRf7SvtXWD5BcXKeufbv1asRwLc8vUwwgCsfEtCi84wunvZnJELYghoUsasyAx9SkBfvfkVUYaeH",
  "key30": "4zcJthDMZ5KpZyoD8qLpStj1EjDyuHwzzVnqtMkpoMPXL94X6j9bh4pb7dFVHvykkntVRnhdJBomvEhsofAkvFd4"
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
