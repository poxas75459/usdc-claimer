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
    "5wXAUztgsbdeoHHesY4Mf8A6LgZnuvM1dGJV1EgkhQavAc8dvFyHyZSiw2bYUjnfM7u25nidU14zqjyDvTRaBXb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9brpMZhGWUMVc9Eey1xkj7aJbsEjhJQNWF5jRbPAW34zXsgTMUgNMRncrpAE6woRN4xcs45zdesQ6rNtqKWcex",
  "key1": "5mbDmt5VT3uk29zUsT5ZPA2Ruz9mJhr8hAmxHLgBcSHLzzjwm1Ag35An4WTofeKw1VLGvhn1AoxKN9QHZb6ZeYhC",
  "key2": "QLfZ3tfaXJoC5B5Bt7BvAqzpuJQE23NVWorD4f94EMNviiznxs639mBC1owKXgVpBmACovEmtJ3MfF3PqrwndaW",
  "key3": "5qzeM1fBBGcVjbNDN8LAL8b7EGz7jnbSAPeFrvx1jVRTgyfbiGQrVfqzX3Q1pV7FvBtq9MJimRK89xY7VMy9o5aM",
  "key4": "5nddQrQFs5HXA7jNcDsZ6RiV88tqgMJbfGC9QuYvLUTuEqgMKpLEr2va4snYSevUp4jWXxVZp2XboKeJnrMS3nsq",
  "key5": "2gg7TsDn6EBPjP2DbgRi8bbPPN75gyyVfhWnXSMoDR9UPrth3nJ6ai118S3uUpdbjwAhUfno5kNnstVyHwqsRaaW",
  "key6": "45JkM99Nb28rat7qpsHJGsrZ59BLgtFD3vTbwgsbZvyEWBN7YCwEF5ZJ5Zhbx2QcbWfTE2zeKFUf2R15J6pBuN96",
  "key7": "4nouAtAdFFJ9XSu6QrvcjRS45z4D3XfMq1n7KjeDZpJGGV54DoaLv9PJubGLPbQiyLCtBGeAvUrnrhCLYzoEPQ4r",
  "key8": "2rCFYbNA9R2SYTR6NUkMNSZjsCPMt7NHXwv8T8KKjy5kyiYquFjJe3Hao14J6Sg2hqH34hu15AZYFBuAYjVbrorJ",
  "key9": "smTXB8RNRNRUMcVqCArtgZfMY5h9wcJ2GBR3ngJMwit8uGVaSvBqjVRuVJwRweeDhZWzxK2URo2d9GQRHZfsn69",
  "key10": "KsWSBtu1LkkDSVzef2nMBPSxmotJQdqeupi9HgC8JKNn2LDUgjchdoirQQRA87rjDQXhe1UokHpzUcWFVT4NUim",
  "key11": "2e9KHuoEKwtF7dC5bi1kQDXEbKWG1ZrgheTANK2WUYdLEg4cxFUgs47fQ8uMmTJUXRgZzRXTMqRdBWGnDe761TsM",
  "key12": "3VaZfsUxoThuLp4YYau8srtz6nhinwfCQEJcoBwdwBKs2kjULoN2CMAcadLTT2vXn7cXW5xGLFx74YDihkYGsQuC",
  "key13": "3PREj477WQnFhq1zdeYTAiBAeKXWb2d2X1ASNRKnsX4tSiaA4ciHtQtSw48BE7ReGKenvQzV4ZJnMTufz4PeYaR2",
  "key14": "MuWVwc1afRn7SW1a6AouiLoGsz3X39WCXrkzoBjpSGKP776UB54MLvK9PBWUSV4ZgynQWcH4KH8skixxPs19d3z",
  "key15": "WgNnfceXRZthaVdqbFVyywmPsH2aWD42v7iEkTwcH6fet6KNf1uHWhqt2W78hbtDfZA4yuJM3pTRCGcP8XUCrZH",
  "key16": "3ktSuoPzxhvHpQJptg36TxtF6Bz5kefKxsHeDt2FaPsy9eNHx6sdWvFVaTuT5Fg5AQdd8yS2H8YpZoHkaQWgoGec",
  "key17": "2Paov1mQoP43oMuyZ4ZtjtVyZo97ED268VHSQqZt8fSLYpFsvkS8EqUPQ9hH9GYHfNvE6dRKMctAw2k7HTjT8ymE",
  "key18": "2dDVoVec85jW9RiZJk8RbbZnozdD2Fnwv7CbB2tc2RD7uijJbb4MV6gAeMdG9HcD2DZbzifJ1b9WDzZoJM7RaHNi",
  "key19": "49sAXfw28bCm6TKR2RnQzdizhhKxNNtBReVXGzowMeimjSwBiwZJPbWEKE45EoJj8AESP2carFQE7LWSAYo8AYeJ",
  "key20": "3NJYcmh7R9xeEsEQgaLJ29PcntYPfFjxEmFmB5EjYkZfXZDDd8EDNg6gRbA3zoEkMt4L3FaSosLgWbKRLEcQaSRk",
  "key21": "48aZxaSqnb2qWH39vqZig7yQPc7WxvUdYG4kCo7t8CuXSWEAdryRyjV1UFie2WL6JTbjFKGC5TKXYPiq3QP8mX7Y",
  "key22": "V2eJbpKLxpybP2eV3B1btVPZRsCRJdVCzRi8QJhX3Nbe21r5QDNwyeojv61xf9pbaLBWE3tiyJ7T2gG6MF3kENP",
  "key23": "5CGXHdBpHpMcxeD8gvWUuKNemAFyHgQW25hAy64CLtWvTwafPdv9uRmLJooKbYHhPbXvSN6hD9qkgn9FcNCDwviW",
  "key24": "2VevsM48aPwifJfx7E5rQo87TGph2aBsJanycnw8HHmZ8T9pkvChuDk4j9fTN14qJVYSPxzhwUNsqfD3MgPcZkW1",
  "key25": "5tWkWtkYFYSgYXApum91DLeCvkq4H3RysSEXjyHzegVGjiffUbr32uA12tXZf4kX3HaBqJLG66cb7EYYYGPwHPZn",
  "key26": "35ALdUEtTLLPrdBLYuYCaoUj9xAdc3kE8SpaUBetu6tsZwEYJRaTcfQucjtk15oupLbbQzJKm6JeasVqT2VSutHA",
  "key27": "33KNikz7P3UcCmdkbLMGGUQNds5edH8HJRNPumcHfyP6ycsN3R8Nnoc8XiTMnfPby4LmZD1StoXwahHbw7zKg7u3"
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
