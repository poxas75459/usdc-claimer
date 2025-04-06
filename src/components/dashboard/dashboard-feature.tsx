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
    "43RUBoMJTGMC9L8m5D1abciyXF54fsc738MsArTrZzSvaKgkLM6FxMRSm8uiqx5NHo9Rr3xNKtuoX4GF8Y7GpgCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnK4nDPmsaH2SfbuYSMx7ioFKtU44A5aYYzCXsZn3UNj13Smwt77AQyUNtXGuyKhMjdcgMobMhH8bkLnj9Dgm1F",
  "key1": "3UukztQRbc2cPpQ3zFg6dipAG44gvNH6VukF88jkCM1Jis2nkRfgrYGxtXXujYXWQuT4CmQeRq8NzXuz1sLBg5HL",
  "key2": "4yohRoCPj2iTdhnhANuqxBrZQJGcPUBexMGxgN6b6RNsN693ZxRM4vFvq4xNfYkF2ojPT7N1h2VwYE3jpheWtzTE",
  "key3": "24ZBK554iWx3Rpuv2rNHoDMQdHCRu6KBnsWwCQvpSByzeVMvihTXq8L7q9CUFgus3NW6Np9VDH19Bq6q4soMAZBW",
  "key4": "QvAMVETbvcvYgQJ183X22Z7LCgpTzJecGLPYZEyNnX7ZY2v1v2SnM29SstLjFQmA7BUTuHiX6p5dRrn45VESE5m",
  "key5": "5jZV5YuzX8pUwMTEvzH5P9n7wouZjDp4aFBpCjjLfmmXyLnpvNE1gMoegD9wfq7yeesoZcmU2egJxQQn61QhDmok",
  "key6": "5usyB5oo11ozCMRHCnXmLnR22vqixFeMZTw9Vj5PzYPk9GsqYCR7WKwH1qsfbN2XsE7ay3HLC5JTLXkVqCbz6kTU",
  "key7": "5JDkcwxFjecugKKTofGMVvMaNhbMCBDUc3nTVJKDCU4tkFMz1dsfsD49MotnNkvCWUySzrpPjNNGYSMWwcYzHwi8",
  "key8": "3xXyZ52orZSJYtx1xd6qC7jHVhUSpnjMjeTkzrkqGZ3k2seQFKBD3iGy9Eych8iNwJdC2vGmHfeEhcNEhVB8ran6",
  "key9": "45wduoXMGUizq54w4MJuDk6YRBpVjqQX2ccFso5QQLtEsgBoctHJjmFTeuTrgvXQhE9eJSAFPoHJg3eoRYyKukrN",
  "key10": "59bgLsFt6qgmD28f1jzw4KxGi7YKeKDq3UcNANawKRNmGP5uTqAvY9fEzsvZygMGdFsdmAxgKnZL27XVqrsfwaoV",
  "key11": "LgErRnKimLaZEyYjvMbbZK4T7m6DkRHJkMQVvJpKD6JfhsCy2Fh9nRACTWHXbin7FZrUU7xCrxNYMThFaHhAdSX",
  "key12": "4Q2jN9j1hxiEh5RjhhrgFPMjJDzBipun7B9DjvSphPmZjg5WTwu57wRyc9RMmgjVCx5UrZVJnDm1tRYQF7Ai9CUi",
  "key13": "5uvN64ii91CTAVEQuH39r2t1tvEK32S4rR9Qw4NR5MphsJb6WX89VVQ4vACBVSLsbKf7zL3bUoZs8sRz78k2qKZa",
  "key14": "4fYsgrNmMKZYmnfFMeUpX8N7J7zK3Wxe1r9fVPWQMW2G5J5oj5TtU4aMbzYvf5zZQhp2hbimiYM28b7W6L1TDtWs",
  "key15": "3v2U1pfy98m2Lf3pYhJDvTZW93ubZFBgK96JrbMWuJBwAa9iPTRALV1VRLizbHqzCxDc4nxaS7tEUEaxoo1AYNKt",
  "key16": "3Nu22Pzv4Z1FB8PA6o8zb7WREVWHY7fhnUCqkDcZLSaDUfXKtbqJTzsavfetSqmj6MChd4C1qq9jQZgRQFnxWnKR",
  "key17": "4hGuacqNGDjVdjtZDyb6rNiLWGFj3akCiAhacZ561bApQT4q7DUZY7cHBRKyjcGHSgJjwX5cpnebm9dbhGYztXFd",
  "key18": "3GgjbhYKRCroEWjpVJwfdzF4B85JUTXW9JqBXGxvn9N2Qbmm1YTgGjZQguMRpbkvq85DXoi9qdsqrB9z9dSqS5XR",
  "key19": "5Y3brmVdAY1bYmX5khiDFcw5GbZkdMmP4y1tBXdt9q36Pdxy2anqLBB1Kf2L18r2ibWNLbhvsnDRuRyc14GHfKnE",
  "key20": "4QQfdVEeW8YMdFgV6yYSfzjkM7t3BZrZfpjJ589VjyEQKKs5sNkVbJZWatxHfo8wN1ahyYFXLj1X9kP9XKaVkVPM",
  "key21": "44ijoqAdNPdjyb5ZqQLiMYp8oyWp7Nvviv5rAriYnLxZEc36BHmoYeZdmxNtqPxJaXPAyiAnz7iuA2tTS6FHNBhM",
  "key22": "gVxHh7gSk3tWbphsk74b7xUesXV2U5iRnnLbnP2F63MPujXs7YDZ1pKM8onQt42xEP4GKa8M4Ji7Lb21n1AKQfv",
  "key23": "2E775zAJbd4F4xfS5djxAMXNdc9zZxhVpJzVLZLb88B6xDZ25zSNA7aMTUbbhnmLpZYiaK163xLbavpEvQ8yvYG8",
  "key24": "57TekQj9p7XbCqp4c3x1nZj6xceTPCFSopFnganeCgxkBFwvLT4V392xX5D4uZtxuD43joj9ahniGXJdPYG62cou",
  "key25": "5JUEeQgBkWEGSGEs5rybTjqHvQpesSALisfwC39F9LTb6xRkvvjQxLpZWCVXZH27auapy4QtKf3ab62pk2qh81NT",
  "key26": "2s3LsrsEDx5KRFLquEo5QV8KpKoCwKNnc21hVEL2TFxuDYXaXA1tWKf4sKYQc3w1B4v1Y68hx82G8FGVtbJVDjPy",
  "key27": "3qMYNvWH6owU4FZyGUmdJ6n2s7bVVBt7u7QGNxxdJxohZqUChZ4TLXsYyiyyHT6hsQWG6UYQYJi3MVrr1uuGGWqx",
  "key28": "5acy745htGnP6gQJqvgpTYmz7dVqYDh4n4paxrNoa2d2SWcyhsKxM8Ka3CxQy9UTbkMejjkafipwfDKWBwMBqYCJ",
  "key29": "2T3TjUPDCtKRTdi8UyT4iB3Z4S2HCSVU8XuUJrhvFQmXzhkpr23DEyHsPR3vSe4soEUU6YK7rM793LNb4eYPerqi",
  "key30": "uNSdUS1xF1j4bi8txGRZLXW1jJbjaLyFTLhGrRjrQKh6NTz4VwQfqujryA63urPaEvobvR3qyuoTThSKWoqVPou"
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
