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
    "4aKAFR4STqoxv8QJAKmNTC5fMPP5HXV3fkfaKJz66iZeTVJyGjdy4Ce8uU1WFMACVBy1WFXMKpQtHSM9jjrAh72F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogtJ2DedFJbRLuaQC8y2eJfwMY7iT5SL6o2ga89CpUeYjKwAB9Qc3dnoSXoB4sH1BypSpyq2x7WiQnV7f3ThYgE",
  "key1": "z1VQBDbe3Mk1Yx4ztio4Vbkqr6E1u8DrkrrHRGchZota5WjEe9F7DTyYMARgXATkwX4KYFbe8yMkQLz9MM7VZEN",
  "key2": "4sGY4TEHiKSaErfLPeXCGQ41yNKxewhSYujT59fDENfdWDxFti1jsZ1qMGCwxy8pVdXAxdQW6dg8rbkQT2KQcy9Q",
  "key3": "nDRyKY5Vj8fL1gzbDA8w7RyUkk46sEFuMoCfDZWGkjf9M5yHfDbwYvRYHzXQHCEaqKmbZipRVVjFCChXG7ZrsaH",
  "key4": "48gk4dd1KYDbGLr8RnCRfmF7s6f4mZCFqoBhQ3gEE9oPabmHvoZC9ScmP5jz9vnqZvLiJxDZcj5d8LMLmrvBVVUi",
  "key5": "4GuFQu1MumcLzFhx11kLXVJjZoFWcqkgG7VCKPpUFyTMd751sKGPoqoF6YWqRZitPTCyTLkxJvqFPJrTKmNTyzRC",
  "key6": "46QGNVdev1JJugsCJbQSZUM1fUKLo7YrsoyW2qorrVmSJyQJwPszXv3KE9AdARn6gZBVShN48Lay4N5uEhCyjbDy",
  "key7": "4cD89Wj4aCL4VrkXkToCmSESfnnr4pBp3h7DtgFDDPnYv4YVGcNf4QXGV8rGC5x5takWto9Pdo9bJ7MG3YRK231b",
  "key8": "2PFMyY3W2dtHJNNUiedvYb3KidPHhMPZaRvxuNkEjM5tc4NMTcbvVGgHfZPWwEBGTpQgW1GFt65mdNcXzNn3pEWD",
  "key9": "53mb8EsbmPm5jE8uR1LTNXL8kbgDPFDmSogzWMpS7buFjQ3PEb7aDxjnajjh3U1BJBZZBcc269Ym75RCJ9gvtYVk",
  "key10": "HDrFvakJrXmYug2JYcpevvPFyDZNMmsKaB7zC9q3Az5bNRXEYENRQS7DM2kLjva6AqjXKtdjzT9c71YrhsDpGFa",
  "key11": "3VieqWZ4mVccJodRnKswHGm8j4YosLXnt8ViB8TSEbxFJYRkbwc5CLkwasNoXp6sE8WSQgKyGf7aFKzcPdSwybKQ",
  "key12": "5Lp7tWjS3YZ2hGPtfzkaaeqyAfBzcJDLPU4EFpTQFBUS6E28MEM5uQawmd2uAV4oik5LDSU6GYn8sQ72Vs4G5v1z",
  "key13": "5vFCDisMB6P6QQLsGLn85LwK8GKD7vQUpHSBKk1nJ66wFBAYvKs9s63bEKcdEkCENWEJ1tHV1kY9fMUYk4PHoSit",
  "key14": "2bu74k6PMCkKQHyszNM5RWsLBmLZNERRdhfAZQv85zXFHRnfv83Sdzsv8CYW4jTBEiXDNtYRMwFEYQbdSS3SB744",
  "key15": "5QTDvJtxTiCWaWGVVMSpFJoduDyxj4MNURjrQEcRzr6wLzh5UpZkhhigHzCAn1ta37kjsfJZLnxJfxrDrHjLnewB",
  "key16": "5wmLoq1d5VKtjYzdA1UALgHmRR1D7VVfftvRXpEJXbjCVAJYnmqT8kjsUeEKx7MbpfkzF3GjPnJqhn8qZiiNCHCU",
  "key17": "2mVuD6As1r1XCg2eB8g2Xd2UeKvQ6c7FvFdjWKNGbiFcqgGBRzZN4SsasBCqTif2ncDZoMdiB2cS4NJUKixKr6wU",
  "key18": "jRdhMRkBfAgPXojVSG8mftSZDYS75JEf1KiKvfyypyZd3W6S3qApDCh39Qw4wZXzqV4WT29CKY3h9nA9ftoBUAT",
  "key19": "2q1QYUYNepknwodEXrTGAbbQJNrj5zyrrkPmxhjKaT6fBbJH6hbKoevymSeb7CVBkrhbN575NA6LkCu6CCEJiApU",
  "key20": "3JA3W1Y5nopbeqUtByAqzMcAspM66F9Qg5wbzX8V9swSePPdiJuC9M5h2jvMhToK6iA1heWhaJHTonysZA9QcQTN",
  "key21": "5RnUjEkPRYPykvSMqMt5mXWEq13WaEMF9wjoincAugjJsUCJCRvdVxFZWPKKej3veCumyKAwArMsUfR6SPWYirMX",
  "key22": "jLvuwipqGXBBRg53NqyUgAAEAWaxx4HwCuWHKu93N2hnb7jxeUT4UjswYjz1ktevGDFVdca2HKmbAP1AXtHtXtW",
  "key23": "S48gNNfm2RcBLhBHCmtPwg9wW9Hj3Xe6dTAXqPbr7bZazccXYB73CrRDBFoZQ5rgHXTRyx5ozJyazGupZmWK74P",
  "key24": "4U2zsxgFDD7NcYSPi7ixciZE9GJqNB1fg9Ju8yMsk6PymDgGTo6N7W6SvCTRL2TUJPU2ctCcRgFo9U3KEmj1QUTM",
  "key25": "3cSceBbFcpsFCYSbtAE33a6jbnwMzA4nRw72fPDRNr5g9mqKCSVYMHCz6avubxAFjNaGDPQ3FcUydqgLM3M34Nbj",
  "key26": "4X3XeZTNtPZiJ86VbsR7X5cnCWVioBKGgKg1oVmseD8AT2PjDL5o6H4cq4wAjHaYsmDKa1XSiM8tNBgGZP1aqHFG"
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
