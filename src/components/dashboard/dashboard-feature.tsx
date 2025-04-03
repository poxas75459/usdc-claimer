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
    "2y4iR7285Z3cbP4gX1TDh3ajz7QMTAAnLw9CQ3og18XH7yrLy3cQvEKVKarazGsHqu8vUzc9kFj39YyXZV62DSvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GprR4CwsixygfcKGDy9wsHVcL59X9AiHMgAXVjdxTPN4XVGLJpGpv5tcoB26pjWK7McrhhuNd4Qesh5XBW6f3ge",
  "key1": "66c3SuzA7nqCPJpDHtmYRV7dzM6eXSnLnGE5vHU9cXkcGHjCzQ4vfeJobRNmquv8EkRRapXbfzn62SUJkqKiGsCc",
  "key2": "Py3Ej2n5rH4N1vi22dnw41gfcuxXx4Wy2RzdUnYyYzM2UmeC2KrN5yPptwPLfCJpLtZs1kL7bd4LcnkmUeA1sbn",
  "key3": "3i8kWGqeALaJsGCY8y9cxqkcyEkigkbqTMC7uFziUyxbCMt5reWUTaNpUyTGgkM6oJNNdoYmxgpNrastGbSRVH9U",
  "key4": "5yhqL33vD8d5EgdZ5LXYf4LwrQbgSwBNRr3x3iNdfMR7k6BimrkGJ1QFdxsAiPxQZjsRh1QoXkn7F3dWRdgC2wcJ",
  "key5": "2K5GaSFnVydc4h1YTXtV3zstUtT3QqYcnjV3R3Mv64EaPz6JqPEVkN3G8Xg187dnXLBnjGWFVzr872YnXVbh7C1o",
  "key6": "2RJiCR5mXcwhec2NoNoceByK2oEVDXjuF2wDwxwRVvJTLPCe9nEk1YWZLZx5VrAae3RaFzsmx5zHy6qN11vSdj4v",
  "key7": "bKUEqPDLeRVpCna8caHESGn6D7FM4AeBi1TMtYyvHgQkd2SpKPMJckgV5oe1cA9KXb1BDnPAvSm37YPgfKETufa",
  "key8": "2HmJPvGcVJskxMr8RpPZFmT4BrFBrCF6RbvDcFyNtnnkknJwJFPxubqTtQEdQNV1Wgrejszw59dF59QdxM1qR9Eq",
  "key9": "2nVNvTNTGKBMQ87XYhCFf49L5cvRTuFn9wDQF7QGTh34QuaMa3koAsnM5WFqsQmaB7iUiJw8YvNJ9wU6YwHA5Qoo",
  "key10": "xvjNRjYQc556P1hxjABhHfrrd7PUmAhKHoypgt6swmhNYDaTKRq8YW5BWDkwZD5D9QyaZdbF7FXsYv3VkoywuTW",
  "key11": "435sjemiNY4ZURx43R8ACVLsTjZSkuXr8oKWcqnFgEdebuh9QRjv9GVQC5EMTaCaFrv8rkYVrEi6iH3ZzJEJPCdX",
  "key12": "62puAmphcQxyjQcmTn8UaoVB5NikojafKQN3eytK4vamC5Q6vEcVWB7Qa7DiNzre14gpBTob9rJEyc4Wx9QzpJsQ",
  "key13": "3kCVM3hCtKv9PjCGvUR2t6AkaBk6JuxDr32hp3gYBnCDuoiscG8Ya2qRNaxbBLygsuc5cN8MiQQYtKWbANJbx1bv",
  "key14": "23w7KVafu4WB7ey9W59agMjbbcNi58RFAU3dDmmegjbpXQYazZz2ddJomQzKBK5AJV3MVTKS14W7Xhv15mNDhzLe",
  "key15": "2sjC4kAkdNeYoN1RDaRFaVRkDNyG6mFXWqHaTbQvoUhjddPeHkamEpr2rnFF2zsvoT7nDsaNDMc47QCxtQ1CiuUt",
  "key16": "2CasvySoV1oZ5xqgbrk1BEcdmLBAGwFjVR8DEm3LF9XmecNvfeT5jJ7bCiF3JPcfjJ2raUa4wfbxefG1jfZgkdaB",
  "key17": "5L3KWNzpKhbjaydF6Eb3py81SxDcw1vb86cHYBm2gYnJBKFnpPwBez4eDzLNCoLRfJ1zCPMk4qs3aKBCb1Zek24L",
  "key18": "5ax2eVqa7LEJSD6mFbFiAvW6tEtUNwmkmCU5VYGqoCWKSWxpFfVdPW1UvMbpTA5txVFJEg3gSwNbuoBiki8KSroM",
  "key19": "29Fs3NoBj6fLbUpoAoE8duZQvDeSM8dfa1H1ZWzRs8WHyEL6AwsQKaVJ1J8ZyHzHWh77pD4x6Y8dE5EuJFuUdhGE",
  "key20": "5QBG6GeNhHSQQxTkC7KuheRrAGzN5ERqSjrTCy9cNbBY4MiEJYVZ9Eq2k5oTUGNgfAKfcLPg1PRxK6R1RoAphGFA",
  "key21": "5VpTce32D4mVJnrcbiPJbiNZjKbPisPkmawQr6ovEaGQNG8LreH9GHfYBnHyNYsqHSQm1q5fPZkTCsTor9NcfDYR",
  "key22": "tNV5xitiGjscgRNiArGtU1hb5tdpfD9hj2n6y9peVUKJaFhN8UJ9Sj2qDDKrEJNkchzccMK4B5GPvdYhCtmuhsM",
  "key23": "4D8oFwKLXAQSwjjhWJYDc5EWCqMkNmxzntZjT6JBHKDXFbqFYfGvN7avBwhk683dMpbahpq9sFH9SQJ7g7wrNLG9",
  "key24": "4Ut1RH2RHSpcJZi8a9yV5hEYkgSNPsriw35mWyD4vEzJdKwMS2Czhu3L8RmkKgijqvTAtJ2Mx5SkMcSUcsEitc8x"
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
