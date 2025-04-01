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
    "2CTkL95YWZE2Tj4cigqMyPwXMv1jqTd6piwkDhAnVggkNePMV5fgT3b4yzKWR4nn4gnJgPg95aSaqfKUfed352rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGmcdScjjAVuKB2RpGrq9JqPxcF6W1sK7bKvyZg2wdzhcGmB8nY1j6cwDiXu7iuLpGZ2w4VFQyttXyfVwcnkRyG",
  "key1": "p7BB1TUnJhKZEqvQccxkZuDt4L7cSnzthjno5Z9A1NBWNhX4GLUwV869fRu3bM48aa6ixpgZYh14BHQJRT8VwUp",
  "key2": "zNB4UcD8RciyyjsoGQrxzaLSxVZQpZZiRBQbsooSe3SAdKTSYCq4GjJDXEpZxSu3zbpvhiLmaRpPhjSL25GeQMA",
  "key3": "4DJKAnsKgLpUDCDCSQsqh3YiT87jdWfR1NtcLcUAFJbpab4tRWe2QBtgqd8PzMLrc1m2UYgnPm4vLNMyQ5nibg8i",
  "key4": "26tYuZbTFzMfBtbt78y2tdxgnNY3mKfRNu6JMjQ4JRff6PQ1SMRGUysAHw72TW2AT88auxiHRXVKPN2tBpzPUqgx",
  "key5": "7EGwfLnLaYex6vB5DjjhdBJqngw6qpWKXZGemNgnbQmriTiB1R46ypvLsiVSJL23mZRUZfnzbJZac3Ukn5DD7Wr",
  "key6": "8soTdH8Ak7bGhTLfifuSWtNU3yuuTdy3urvfPfRaUk3U3DeBkbmNMs8RjnJCHtgcMKcYKtVp7n6G3jXxE1uGw5G",
  "key7": "3vrAcBCeeY4CRVKH57HSAbKh2c8FLmKDqWsiMLRdhWgPb4PLD2Vj7YyZvVCDZcEaS8BxjeBa5guDnDNg88woKZqi",
  "key8": "5NRWZ4d4MeuK2TJEQ5dNtUR5bbFuMee68U6nFu3NhZ3rnsktm4AbCKFXvp42QnfR4RP8WaBWPJBGJhXSRFTsfK7N",
  "key9": "2adZYYwq7XsEkMRygQF262JBe5MSA6Qo5ydBuKA1gVaoMmCyjkiLQ9k5jUpySXdXpdiDz8wSha9v8VTFVDkutYq2",
  "key10": "3te4hWFcncoaSMa3KzNSn8MSVG1UrkHCbS16UtzgrLmiDJUifiJZ1v5DJPtDC5h8CeNZQEb2n3dcKp1gkaEdARDx",
  "key11": "4tm3zEjJxrU8Acm4nKg5c6oSKtt1MYf3YAZvkwX6odqp1P8BcQA7EmVaawuuqUVAQa8iMbRWcU3UiGhxFvX2SPiD",
  "key12": "MLx79krYyQeKd7hnBKwFbnSEJw9p4gzZPPYzoNY41TKvfyKKCJuvfJe7A7fuB3QGwLmdxipDZyYBpquzAdLyR5k",
  "key13": "3thDJncYoCP17jZHjRS8m8ChMFBQ9BQBTRdtMJf85EZ5wS4V8w33YeS7TxKJYJnTWWw1VNZRRhLKaPo5wpK6GHVc",
  "key14": "5n73uuZKBzcdLjYknGrzETNyEp9HnzwV6FnGa8y7QEQGEBKW8E3WWwVGHw2URW4VpCTcifotDTaaaH9itGH3uvn6",
  "key15": "4nEVzNNaASUJ4gH4n6NxhTmGxsE5XzUGHmEYPaUTkqTfsBsRnYn7VFKYAff1zAjjrzVoTWiDRCKvnphksHM9HRPA",
  "key16": "5ymaHHuh49NiPTKY7wTQdTTZJ2hruwyit83cyRFepBdd1ZKWYuSVbqyPqBhT6vRuUY3RJnByPdtSRaJAGSq7wMot",
  "key17": "4NrnwE3BinF5negoSaDcnSed17Mn7C9ZQKKkGqLnrHX1TSMjCoWeRvo5171vf6RfGqpNP6pZZ4m3LvsGgqA4sckG",
  "key18": "4yVJs3gyLJXbpdnr8MEcbxrHG5UdEU1wR5UGVdKVwbe8Pg6hCfgC3GpDTLJepvEM4XJsZojowWjsh3Gtschef4g9",
  "key19": "3gMh9pMHBhFSbamE7k7efR8GdY8Nf32ynTFQBJ1x17yHnjyyhRgQEKFNG9kHoSjRcunuL3HaypxyvA1TjRK9QprT",
  "key20": "5watkASpWKVqq2TUqjnfAiqzym5vQuCRL8shC6yMrWnTeagD53h9ssXP3UkhqGNgAd6dfxWTVcybKs9VtAW1Hvoa",
  "key21": "3Vz5fSzwpq6hpe8w1xNQ7cf8qWE5D3CYXhMtu66G4kDn6hnmNrHw83DjrG1MhTaQRvRYG2b5r6DqyXNaRRwhaLCQ",
  "key22": "4a8bj1GfCjFipqv4CqySQFe4s4JbPsBGfUfzqxiskjEyYpUyakqV2L9RacR9GbkMCLXyjQEe9gYVvC1dvnTpNjXY",
  "key23": "4un3nRUkTxSGvXbmze4oS2xLEQcAhLNAx4sV8xc27VvwVn3qvUjfRgaw5o2HnuAJYmJsrsbNEorK953PiKn5igXM",
  "key24": "3jxnv6e97MizPQ4hSiTg5b2dWxnTrRtMSTDJbEFxXfZJvbHJvyHwkMaG4Q1MQu2yweoUgsHE15rWuoSd13F1oxVn",
  "key25": "4NDzaqQtEnorxzUXGJY9qF8c3Lgzh3dHoRGguy8yEX2LG1a2xgEnakBkCypQmZJjsf4CBp8fpGXzQYFXHBLXGhXS",
  "key26": "2oAvPKtcmGiToHbxjG4us5YjxJUD3uc9f3pGwJyzohT7FKrMBeBvpfmdp5K1GvdgGae19MUjV14LsB7U5GRYznz9",
  "key27": "314njWmuf2cx6WGSzJqN24Qnzbighsf3ambkhwHzhK6fxCBCGLQsjmCka1D6hoE6i5L7wtz3btgXNQKsT8V56dEo",
  "key28": "QfduDdXSq3784h7YPZf7BRYjMdvPo27GYi6zveBazu6aJ3Nndy3GtDNF7ebcKvdBATtHmCSe9woxGBNL5VyzY6s",
  "key29": "2eUHjJxyY2XnkYb5rvFKwczcZuNBCL7egvUb9S5BtDb5cTPWVHkxcz2bSipjsSWtHD7iehaVT2T2sdUor99cq4eU",
  "key30": "3YqWCX5AHHobHgGrh3Ya9ZCZdKADwSYzACSvt9mpZ6bdUbNiwTaX9MuFEG7GCiJR5VfRByVN4hcZS7t5KTb3U5kb",
  "key31": "5TCm5kDpYbHhkjD4dSZRX8SAfe1kFbzZXkkkcupqpMR1Av8BZBsTE1ZxcHjC1H3GcuZBMwbwZUpuwZ46m3C69kdv",
  "key32": "5ZG6wPi1kB2swecfKQ5NwVyLhatKys99Dv9itg3KtmcjkxGBrSkhq2zvsRi8ai15gReRLMTkkZ8x5sAzkfgHiFdX",
  "key33": "4MUdv8ncPVL1seMkQ362vASF3C1j1fjMm1sLFQQAaUumPPvdC6rJ8FTV4745Jza24e37F6m7VjMPskeFaHuvjt1z",
  "key34": "5LVpanVRsd2CoYbJhZ2qThKdeyXGDRvCTX4eWvxnndEL48t8sMr2uNdkRSWwmJThZu7Pu7YYdiuXkGH1rAjLfQmS",
  "key35": "3hUoUY3GHrMq3oCWtyGazqsUvcwM24K75AioRUHhvgg16mXpLvX1wZExDhtKM6haQsY7TbkJjVgp7JWJ5WVEwZE8",
  "key36": "U8QJES4LAG7pLUMGvX5FPPNiZphdqqZQGwVVFpK6uQvYCSqFj67fXCDJkUtKe9ndh6GxLzQE8Zs2TF58D6Na5MM",
  "key37": "5xhQfr7aa2opHyDzexRdv4okW2AfgrUx4cYA7tiFdFqxes9GJDeN26KR3xC9sFSFZNTU25UfV6HST7YPa6jJsRtq",
  "key38": "5VuQfVJXSncek6fQqJkAFWMGDegrAHbCrAVWhhpFTgTYqYBi8Qp8HUNXQ7aQuf5m4Ci4rupqr9mLGqtABk8qivRs",
  "key39": "3CArGT9LRy6UxbzVZEKbrf4h3gd17HQAxmpMu8L9cXPhUHnPYrfp5RwnQLrCdsksXGfqYTQnupDzzPX9rZdbhbVn"
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
