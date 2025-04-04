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
    "xAmd4JUtuuZcUfJqquFWdSRCULM6BNrf9wyDjeg8NtUm2TB2N7p48Vwp5BWHVL1zvJkMhfKGHL73KPb1nEqmBaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "peFGzhtneqsvArX2KXWKKGfFwp2H1R895veB7ZuDCCQR3NMrKUNuxnAkrCAb522QoC4TktRHwGt9eSBKshGcKiJ",
  "key1": "sP4yWB9bnX348DK9y4Vu635XaBPm4CxLDSLQkrp9eywMVtwwdLCNS8yE2MsQ2FiDMwMQ9xUy1uJBssDkVGsnD9Q",
  "key2": "3oYmVuM5b6FHNE8cd18aDrnd6BVQisDVGuUkDh6kxm2z3tLCRavs9pLLqtGCasqVC3DMHP2KEF4zsCFfDgbzJ3s",
  "key3": "3Bzuby6aCxf3DFryJdLkXYSnamiwA7c8v2Z7WiH7wYJwoU82Vx3dGKDJCWtaT1yhZ5FTXA4V3FWMTgHukED1eroq",
  "key4": "dczxtXCPedmukJpYwVqDrubeRAJcsUUk7Cbk8g8YRoTaVPqbeqR96aCmjkxsJmuXbXbYgmrWsMAjy8fT6Kj1tjn",
  "key5": "2nHamAkJeVm1Y4oAHuQcgjwtxPXdizVX4dZoeByMz6SaA8UYo1NDUB6Sbw62YhiqgEiAhooynxTHM24GcNvdsvuy",
  "key6": "55LZEU9bJzvB2waxATwd7tyAHJbXfyF3Cyc4QtYnG7Nn5g9ptRrNFSG8BzgbK1sDbL6XBAngALKNGZuBMZxTg4cZ",
  "key7": "42qFTZdMFCCqYCKKtbdNcw4AbNkSXGpCH1qgqsX1ggri5pTghgKQhU6GmYdsRCNeDRcSu2SBBgSbu4Ta4PV4rtwp",
  "key8": "4AgtqKsEg4MjNzEWeUMBYDLT3Zqxxcv7sb2Q9huMoa75qm2T15A4YmrVjjyCR4cyrcdxqLSsNCENHEY4TMc5LJU6",
  "key9": "2fhLh3DspyJYCBUZ8rDmJRASCcLP8aHCfkdzwnkshGFFiJbuoWgiE9a473DuGVxSfD1HHETah8d8sW8Xs2gra9zf",
  "key10": "3UqWsDU3Bak8k5ScPz4VtyHwfmiy9zfSpdhhPqdQbp7hM4Q8cuq1M1bXn5ieBxVqoid2b9QLAj7LtsGsYEtFFqQh",
  "key11": "4QRkcyNru17VKP7j8fFRpNva6gDBDNMriYPp7kWTioFPGFJovekuMc4RUhRLd2TA68atRJQ63yspM6S9gn6crUCi",
  "key12": "3xfM4gsHmccouSQowpiv4QZsZwxirJRdHNmwKcsWxfGy1iCHUjEoCpkJzNCAULQ8pDZj3AqeaafdjqLWvfCgEFAd",
  "key13": "2WmpfJNZXMHSv2gbRfaVVHLmdSDeAhs3mkr6kYh2oH9SjQiLvTXuU3zrdMfcLGnW7yf5jA9n5uCBaVjAa3KKvdPj",
  "key14": "3F4npAXN5HC7vHmdZeKV4T6K5UkfDqF6V7iRZ9UqPnpaz7c5zSqKxquKKQF5gzsmpYGTEtN1fw5Zk4UZwH4Nxk1L",
  "key15": "3sxPYWSjpCVhbohrh7X8vwRKxCyXjnVT13xNJeF3LLEpPce56fToRm7Z2kzygSr51r3Acfjy8ZvB4Yt7o92Ed6Gv",
  "key16": "4HVS4TEggrE8H4tF92guz64759diKRbzAg5CaMan3yNLm5e3hQSZYqAZ9B4iSnQHHwcSRAwUEqJcNYcd89d7YopU",
  "key17": "4Fs8wRNmW5aG4FCvPjTDqEsse8XSRp5jSVatWUy7hcUqGKKMEWSauQWpAMTnYmteDmxgD44rk5M9r5gJynmeAmUV",
  "key18": "2fBJQmpxaa2htp5cbMhLPc2BxKhks6XVGJTaKYqWaz7s89Wxw9PCe6fQEtpuKjH4JdAuzJYXnCH6Xu97b6cRnYgi",
  "key19": "2Ck5VePTENCdAbbobzswDm553obSCukhN4oMAR5YAxM3NNhZqHN25ppsjzjMZmLS3ftcWM2FXfnFqUSMrSEPYa7J",
  "key20": "2vLwDRe5KGnAHcRJ99XF9psoUWWdg1naWCWhfyuvtV3tfpUuBnia6PdQRRzKTWHG4cMuecLLfJGKg74sq6fE4KL6",
  "key21": "47Lw7P4W2dwoZRdGvTFaHWQ4fyaCK5Pc3zbDg2SaB3gSEmVoN1S9Ei45xkLH5KMZSWV7KpUp72xrCLnQgjeX9okB",
  "key22": "4XzF8M2YoQQkjb4bvJzT7NwmL5QSZuUuqJVqvmgXcvnPq5mdX3AzrJ56Y2duqQTE8ZJxzy7nmhwnxEewxM4oun5t",
  "key23": "53zZdZLpxMnTVZZ9dcaPLQ8sDM54Qwd6k9UHJ66b7a8VkkKr1BtarkEprTHGbwDekBEkujrNYeCoHs6T6n87AtU",
  "key24": "3672xabL5hHVwY1QsTjz8J5xGzH4jUuhkLJGRfeaju72Wgp4MUbw5RG79X9ovjnitYy6qVwDy1akiCGsm39BmVvE",
  "key25": "2v7D8pxxPcJk9Z64XzWRZdGDLLur3KvWmufanjtRMi7SJfb9qjpfvP3zJvzZay1vMR4dJFzHDQbyMBGo2ZgpHFYK",
  "key26": "CKz1CifJRN2UwCFwKimEtPmW7MbSizmi3UzYyisajRtiEgdg8QXAeJ7CQarjTqy5UvBqfjCEqLdJamHG3Aebnzd",
  "key27": "2kKNC6HKhCw2pa6tYeMNNrZSqXazxgZzUXpmBFRQc9nnfB3XZ13dMcbWjvcwPNKxbNwzgn5Niwy8AHqH9XjHtyja",
  "key28": "2WJSNzFVXeKJmBkBphC6TL8LB7sYfFYboSkBepwNBxC6CZRvyxAv544dCiYCUgVUMn96WCjL2VUAzpKXMtG7HRjH",
  "key29": "4wBLQuqsAfMAs3qXxHUgADdg26PXLX7GYfa2X6aRY6dShjwhPFdmjkBy2HKWR1abdr6ga2QCECPnq4QfpBFdHDq2",
  "key30": "4GUgPmvWeGC8q9H8J3M8Cv1BPewYViHzdLr6SQEkX3Sp7b5Mn8RXUPHcEF1y4eRhTfdGdBTXJ2V32WwLLakFQruj",
  "key31": "R7uZoqpem5nYfykvk6VYAZmmZeAgvEtcYTGKm2mFNveZqUgh1zJVTaSEEaWgVRFNrJV4YKLVkjLEeyrrH4W7zJC",
  "key32": "5yMR8vrENY7Bc4K5K4QAzjScNrenbDHd67u5sD3WjtCF3pq627p6vHyDLm18PeVhEWSi8uhHvizzcWxAA4Jffp1C",
  "key33": "5zvQJczW7HRBu9xzaDJ7dGUFGxQ1sMqbxj1KJFX6XLBExREkmH2V1PYczs8bCJqJR7uqvHwXmcBjRELD1mb1KHsS",
  "key34": "3g4kitCvdKiSU6sV1GdNXDCDYZT8oo5oamykSkL2qAwJNp1k87P443GmVc4YFTenW3ghbgFJbQsSJZDku66EiK7Q"
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
