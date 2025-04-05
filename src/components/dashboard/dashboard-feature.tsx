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
    "48QCvEgJpK9pDA8bGYF9YgQkj8pJHLxKN9PsCReHHvsgVYzoAKXmPpWB6t3sTvZ5khatpcSTqt95F5Epkdp3wPw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GvkWJKV9ysYVhfCPJwWVpUNz4nTSehheUqHdXEZZWtfXu7PmKATPfD1nrGV6RYrMABGwwQiqjh4BCVHmUUDLjw",
  "key1": "3nuMEjX6ukxSqCy4adfTqie8JeZCvaT1862ViCnDGSsRZcWboii5Loz3WHzGapNASm1wPeZSe4Rwe2v2QufoSnNa",
  "key2": "1N5qL2CU9XjGFpGajz1Em49NYozasKW5P2DK1V49GqV8BLRc1ybN4k5aT3s7tS8pWvrRNSDbqCf1JKvBXUnqaVJ",
  "key3": "2okjczvRiiYDKXsabCVibxbodMosBJpRnBR7Wz8ABJ3cA9n9CYcSrqo7WmVAZZmUoBog9dwDosqo5rkC1STSfm4v",
  "key4": "AGzyDLAX2p1cMG5YB25EmzQrTfWF5vpHK5yYrC7Hgzyf5vw5hqdb6oT4EwaKo2oa1D62yS5QETutFcmXG2dwQ4J",
  "key5": "5B4dycyGcpux1sKFktaUySXh198zPL5FXwDSWbWrNNZrToMhKfJ4LxXWa2gndUoqCD1ZaXBa9Ay7vtY49WzzyNGG",
  "key6": "4CXB1uP9XeYwM5C2W4dhHRYNc1TX8B5wohwNJiykntqMKYPRGA6nkTuUj7HJTXU9xUhFg9eGa6WxcfFDzPFRapUV",
  "key7": "5u5sfD1zbi4jEgZAoRxiGA92vSuVXg5AgsLfNnsLZK8gi48ADSgFwGTCGFm7T1ckZX19UkHGhS1mRJxouK78r1yk",
  "key8": "4mvErRkmANuHZzTj8udaRXN4DGTvKHgH8aNGk5g5HS2jtt6maLFYW4PntYjAQmqBW46xeMmyNNbuQUexcjE92f8h",
  "key9": "3GFZJXVJwafkb3tf5JwNmyxmBQfmbv865qctxAboUaajirCZMTbeDiYwMRnjo7BrVRwKvA1Yb8JpoXbfHfzGjS5z",
  "key10": "kTD4zSfKBxZjY5KF3agNeCHZ2y7PmY7D6tfeYoBBdNSd6UZ2DejGY39CktrWcj4C3FaBVp3MRfobdUWDxvG9pF6",
  "key11": "2VeVZpVE51djNymmBBexJG7HgTQDMUYLKf2TgfZ42VwmGzcvReqNQ7MLF8EU4qn7WpMPth6VhQjZRHdKZhdE18MD",
  "key12": "5g4hCffrPL6EQ3AjznqTqzQqni6UBkbfR69ZNe3JbCBxtdTUavf3Ms751kwJJ7LHVuzJhyPmRyKqpnbASsnqV3Bc",
  "key13": "GjqLixrkTetvfi8S8ZUyawyxe7GtzCi52bXtMH1nJge7zLi12JJc4CQ3oQHPRjPJx2SVhuE8kmXWwoTdPcjErHc",
  "key14": "2umVyvJohhRtWaVjsSNwRaxayAiwBUntpXPbzjuTDgQpYNxQT7c7u4CAqKpVJCaquXg9Hfj3pKd4eWkMPgctvzUv",
  "key15": "V3bxHjKVyXimU4nwEJDc5AhjoXsLoREAamMSx5twdzQx7KG8CsMCpantbpA7QRuiounNN6yjyWCsAWKBe98eeZn",
  "key16": "4SFhLkaV5zkL1ssNVw36VWqmNw8GZt6YWF72v6cSKKYiiWHKu3pcgn7BMck8LJeGQSCozEsNs8ye8TzzAbjHV7ek",
  "key17": "yuw6hGz1CVTCdn1z62PDMvdhKjQsdNoA2FaNTjWbS2upFLc2cHm5wDSoPnD8644B8sbeZqqxtRbbKq4fKmatWzB",
  "key18": "66hWnq2mhCcFMBrx4XFWFVV7aQcb649EhMwVz1q4kdtcTksogXW8YPrBEZ9zygTdYGGGZT59hfaRRbhkSpuWvJGB",
  "key19": "4ucHdmuPi9jYvqqh8vKWA6LeiQRBwNMkKnRWcJ7kaYtgHs3Yi8n9iNNLab5YkdThp6BVUVaJ7bNk6j11pQ8rdEpz",
  "key20": "34kwRYniaqSNJffu9Vmofib6ZaZh2XVcQZsyxmHxN6ZRnvNBYgSPaUsAyE4JvLATm3uFPkZLz613p4ejYnCUwsPx",
  "key21": "2xk6nrH1YEz54JpYeU9pgfXjua23e5HP4ASAj8pcMhgadUz4Db9Q8nkLJ5gqijNPbEAX2ES7k6tNuEiHX9qzwxS5",
  "key22": "3xpR9DjsqufPKZAgKKk1mzQVEQyMfPLwXGz9h2RgMRYKe52Rj9dQjsCH3mJURmRN7dTfJAmZTTYB4nEBF92SmU88",
  "key23": "2FMgq1opxfjBeood2ngHqLjTyzFjon33PZbFd8a86F9Z58uj4qdxfxcD6kk97aoJke3ZNdAA39AgrCa5k3wX7ZKB",
  "key24": "4QfUSmFXH5zox7yt9Dd49gTGyhadbXsgSaDcrVQKyZ7StepJqRsevyBzpXwSuS3TKShM4d8szyWYWjAnsnbCq8Uh",
  "key25": "AS6ejf9p7VCerVwhQuiSZhY9TVzvAUMJrzUeopSFaW3SdimAxRrHnwCjVcrdTzJ7Mebtr3MNwaRZRGP5jBV6HZL",
  "key26": "4TGinC6iqo8NiNiG4x78j7PrdZwBHS3sgExvLbMjQ5PtbEbD27WQs3xgQPjcm2Bf3hBg4PBstXnLygTtZn8czVDc"
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
