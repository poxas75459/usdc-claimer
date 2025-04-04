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
    "5V5MVvqEupyuLVS9wG2tvZCqtkgaCsnz28cVww63XykT95g9wYdt3VP67qqMKj1feHEjjzZeTFpt8aaCgxeJ9vJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaEb7UkJ89BrM2zBcDw33E4LYxKsCcApcs6jM1xrXKkZuM1YeHe4ZbtvaPAZZQJSQvQV6Xx8wZH988j8w34AVAP",
  "key1": "5Q7gWUGwVwFG6cvaWdd6ga61PYQyimu3KPCcEwqBb3iaBbwrNJ7npV9M2eNPTMk77aJDr6ZrCK3bTU22LAD2Mp9h",
  "key2": "3sC8LBshmtm35upKR7NoKbwgUZ3hi1d5Ma9F23ebSCSNqik7jw4TvGYe52usaCipmK57uTen9aCdHDeKKxYHTruo",
  "key3": "2bhuQeuAuoTmLiML42sCNZBaPN2UFqjmy86R9xWdGo95DmtEjNnFWnG2aBUDAMf687VrrhN3dh5XSthzcjcHWsZY",
  "key4": "2quQeYbgpphxRAUNuWqzbcYGGZ6r2XLmCiJBm9wCYMwNkgnbhXT2BUF5i436jemEYLrFwEy7HC4pnrcYrUEags9g",
  "key5": "3qpWYQ36GQASCVKHZnRmZSg2kQvAEpPVx7DbPcSzHcyQgduU6Pg9d9TCQbS25kJdHq6XRqadz5bVXjQ9YGjnNMid",
  "key6": "3G5h3TRomTQwcfHu9ESWGQNisMLriqmxLCMGe5NsAKzg2wDdKKky7sy9tmTdqU1fh144y8R8NkgoKw8JJYhUWkWt",
  "key7": "4hDwEypxhLdwt78ruEJzesjeh82SVqqRsgstew4nPMyjAyCT15GnXWSXPzhEceM9hNQQtjCYxaTq8CJXr1dUr8wP",
  "key8": "vRxa6FyJpXrY9cQhR9EHjnYsSMtXbhRvijgRHzKHfp97hAkomtW9NzApSYqM8uxuWkdoMNfhPUfHd5Gg4mTZoX5",
  "key9": "4HXBFQN7pzXyWCWTwWKYjGjzjFdpm77kA9vrRRsvRHGZS5pTJ3tSFccwnBYxgkJ8oeKBJzzhcLkjWRgaVy4Wmnh5",
  "key10": "UeMJz7NwsLkUX1KZ2u7b9HrmrNJPHMeHmdDgCPhXzTANPEyaD8Bv4WbMftwtEmQ9kqHC5pRpGq2b2JFmtmxerc7",
  "key11": "Famd5RLGSPPastnAq1oUQnGGPDCXDLS7wMEWbU8SHJ18SZaN5JawAcZUeZ5hjATMQxDtfmdPPSLeC9h9VDDdxiL",
  "key12": "3hdGpA4bs5k4zz7BSzX4c4ubJSKhDxor3KuMe4BmU25csEz6KS4cgJvD9aCH3F5L7VVkKCRo1B5A116HjrvVGS6e",
  "key13": "4KLbqQg5gVrVdKaG5zZigoxpz8zJqWCq2XcGvBq8tW5mDY17xF9xBVc14PF1sfw2neHdGNDYCm3Gq6gP9kRycj2B",
  "key14": "2spVpdXARHkLmekSxFqRkwX7WGedtGToxLQcaWFeyRWZt9WY33t298tFagJJtz9UYnHENVTCRY96DHbzi3S9vdrm",
  "key15": "2ch5JGLVtcqS7Q4UwAxMhChjoSKToSYgAFYSs5U5iDA8R6NG8xZoj1RKzBuEZu6skVpe8gNaPdYduNH1Kme4e27p",
  "key16": "5g3tWHwQVu9NaxbfG4uwxNe3tBdvY49KNKHcHj1sxM6vANBXiViEc29Y3D4RK341QBGSDv8RuX5qVKPmc5MfBtCh",
  "key17": "268CxqSkguCH7LHGt4xJbQLJHf88McfCUUczh4PiPEVWxXDdbn7FGhhtJjm3B3YyVboai2t8DhMkaeWvQ37nLp5b",
  "key18": "43cjJ1v5SVc2G3WPP3P4aW3M4nRxCoyJEzr7aRYooanotnCsamRwQXtHyQzg5uUNEU3zwN4XX6LTUgxv6DeWXJAd",
  "key19": "2AmqJd79kVYsnFqixACevUVyg1bZsSEBbKxnaTeRMPFL5gFwXxVyBZJ1P5tpWBZdWf9ChPD6fqQQ3jAV5VWQnsTV",
  "key20": "5bZyM16B8VRG89FN8UvJG9dzxJF55Pdn5PPTFZp63S7YULYFrrvDUg6a6afQfnFh1FVEZ9NKuvNgjTPMgwQBPRtb",
  "key21": "x9XThVWoAyWo7HMrzUZEA2DvTS17F3qihDmt2SpNLuBhD9jvYgphemnA7xGte6g851N2aXreYvHChtDzV5ccK8Y",
  "key22": "466W3hsh9eTzY3cQEHkek7QxxDeDa3hKEAehzBYchppuHUh4dAPpnhHGJSAjqjQ6JHUKDYurzS7rvNk98kpkebZk",
  "key23": "26rHw22VTGhBeMC4569Yrvz34jGohnSLaGWUr3UvGUqD5JT6HpMekXhca4cTaSdZDeKtH3od5w3EWwZK8j2euwyS",
  "key24": "3CAJoEJgKifYjSe5Q6osMx3F17AmyCgjggLfvrku5RxTgPjmVW19gRSUrmFFv7b4ojkXaFhraVFW2rqFRHwNxTqS",
  "key25": "4FwFtKCsJJGZb6qYmDUjkecYA3hbDE19b1HpimvwEN3zNsokPcz5C77rs4MASQVrrwikxgSGvAKNBQgHJt5FaeLB",
  "key26": "4SkjH4N7S5NMA5wSixbXcgGsmxQeCSX99R5c1JQkDaSSnw4abYiyE51Ce2HEkZ71RovCpddYTh9eqkjJnrgUWBmo",
  "key27": "v6XmFxnyCmXHxCPWJGBE9LwCCkXDZrRWf4VGR8yAyGPFyv9syMBdseuuhbSBCbGPRTtxgBc9SPVAThsyNyhkQLf",
  "key28": "66edzxqSzeELYhej2y1iwQykgtK9FF9Zj8HQ4rWBEZVDYF2RsNBHvsmNNDNSZ7u5jzuCYspHpEXATgvaUHHWDWtb",
  "key29": "FawA5Fk2Gc6zXtza6USVtm8VKbqWP3hSVFjkUPMfq8mspVWZtQSKmwLqMtsoCiTHiTn6fWd4ArwWLdS758MmZQo",
  "key30": "4giAnztxW6h3edWuPUf87ttdVh5URkibn8A6tNFFFMAWb5tBsxWTRZ9sNiVaUqvCpNY86x2sh2QtUP4Re4chNc6y",
  "key31": "2kM6bKQcHrDWUQMMcwMa56AKpFYjFYUYgdraFb5wjzZWCKroVfJGmMAYoi6wHq1PboedeLUMZ647n3hnL5teQdPM",
  "key32": "2pyExS64j3JNLhCZHzLUTmk99ZcAsNdqbS8biMqM9Cy77izQGu5rjb1PhaekfKg4zEeessM4EFN9qrJtFjkC49kY"
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
