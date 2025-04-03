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
    "2JNaTvkgwvinAjEdT1Vjqy2D4KERFY2F8Tsrrg9WavCwgKeV4whuibnRbT1GfaNGxY2kT5scuoh9ScTMECqyUniM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j62rV7WEvsn9ot827WPemxDH8VoQh6j6m2XxbFSVExpWpy3EPUi5PRn5vGw1mrYN5YHNiev6azdkEx1h3WEyJRS",
  "key1": "2g832813GZKKn7MZkqsttwXjw9iXpzQvzdYKsivh7cbRqnRqmPENVNVVNddaZYKsNXoVseGTckDTSc15GGsvNLzo",
  "key2": "3UT5rna1eUsxjQmufNybq14sfH4SSJkRBAYxQ36cFJFCvCeGWLvHDCVVbHoSQgZ1qgDzCJJ517zB8Sw9zZGYkyQ5",
  "key3": "4Q8nkFFcETqkhAK2BA4mWVzx8vS2ZTK72niiy79BXrJuqhYCcMJhMb7iLtAoyZHVjxsK6FrEmHZHow6bmjiyAi6h",
  "key4": "5Pokz4whkdwSfPAxYgqTKg6yydxnFsCtTvXicnguC6EEkSjM3T76w2xdfXLF26zyV5EqgGGJtnfnErJ7Lz2xiQUz",
  "key5": "3kXTwixS4WjXn3gorPah2Urxfkdvhj2oYNxrZPW1UotHhkykpsBqUwGwTNm3eW1G3vpBs9eGJLYGFvUThuLE96QB",
  "key6": "65ah6gaPpP7mfivxzsBbFdvTojYQNm2EeBimo6bCpjNpum6fnaXKvxvSt1zo6XgZfKoFQUZ3jiJVafuf19273pQe",
  "key7": "eqMSm87Jdz5W4wDnLXoVB8DrUNt2rKVnzpLepQ18R1hYqgJ7t8R4hChuGuaKYsTFYUKDM8fWG7cwExzWbF7qfSF",
  "key8": "v92o2HmBXJTTKNiuQfUs9K4UJhtdw83TZsKnzGHkR3Mmg8wzFXYX6dKbzn6nwxyL2GPCfERUPfQGboHhzY5KrkV",
  "key9": "3g5GZzcGznoLxaS896h48CN9RxGfw1Gm9JX7kfubeaVzVrwiZsGthnAg2KhDHkTF68n1vFJwJrqY5qMYKH2qyMef",
  "key10": "3FWF7Je5xPSqJyysF1T84syC2azTGkZyd67JUaFkQaL8T9FGvczRyUtWPri9E4j1M2PzoWRa3BaWSRmGd1zMjZvM",
  "key11": "4zJDwJ2NbDniCHM2BzM8P5kfWvtycPaQvSp78QDGY8skS9cpY9cn8Ja1QQpL3W3YhXYzhbrsU2zfW9VxrxwVFKc4",
  "key12": "4EscoT7DufzmyPqs3nnFtamwRqrP8p6cAxLYPvaEuffDeqAE2ucG8EGHB84q68BDhS1YqHg41YHTsAwM9Fn5ahA5",
  "key13": "2FDkjmdi5BJzz3wiqQW6inmYBqhPyujjjJk94W9YQnvq7jB1B2ZiUcGYgJbQeMQTekcEo69QABg3goovEuJkzEEu",
  "key14": "64hYFY7rQCeHMjiR4ZB7goRMFnP4uXZhTaBvonohfZ1LT2RZ5rfLKsGGYAsNYMJHzdj4tTk6BkpFzajr7jL9V1tY",
  "key15": "YzH9cXdhY9eKB4m65WQHKREMHrTqepuB9McvKFBSodkjpifcvYgxonrDdcN7bBiZpn9yqdowwky7PhsJsK1gzgJ",
  "key16": "4y3ubLq8q8x3VJD3y5wwbHQ8BLsTF54Wmvgra3pJgQwxi2iTvUUuJyWDUdhq65tAXjrBsGt8rAKDgsBy4ByiPszG",
  "key17": "39B1cbQnFj3WzujuEerXHnjSVWvpGukE3Zr9SVCooxiuyjGHEfm6mCFYGS9JNyxuoxXMubH4LvhT2FfF6uuS6zv6",
  "key18": "3M1WaDMZnPDk7jbnxh7dBzKQ44p7jytcFDoJGbG3LkF42LHLtNLAK1qMPa4NhfoqwFcAot5odtbod4naYdYwq4Kd",
  "key19": "5mZt8oeiUfbddqGpGYFJjFP9VwWAKwkUpSHvZcmWJiuu3eHtRQHiy6G1yUjB1mSmr5LDeCHEv4bFgg7s3YcWqSGW",
  "key20": "5vrW1VzFtEgGVR5PV4HXZUPPCn2FAJP6CzdiH87uRQvoLxrxRRcUif2dWhse9jKRTV4BncCh4gbwWa1sEm3cAyic",
  "key21": "21PPAyXZc45bUUcxm7yJwuKtENXzsLu4jbRuuCuQLRnh6eZwq7bAAUWyHLLqEwjEKdNsLe9kJUYxg4QC8yzrGAUD",
  "key22": "trywS7yXbGGdim7Tusx8eBzhJJUZ6eVfze6UoiRrGNv7oZYvd1GmBKX3tV5m3V2RLUdaQbAYBaVsS88zoNtUNJm",
  "key23": "22ETBMQxD8zfT8m9GydFp9miVAxNeKLYHWxpbpAYzPrwAFLUjNAWbXhDM76VTtCYeH43aEMMXb9XHgGpzSYFrzSj",
  "key24": "4h42uHFoUof7HzgwUBXBDWF1Q4w3gv1RmMHtmde41mhdvhtb512QLw6zmevrnfQPNLXiJMk3bEcorcFjmuhCzcTr",
  "key25": "3ZLkBiZq7LQXyTgKAWtks9a6g25EZVQQ5KhfGvTWdMxE33JCdNi3kNjGHHTE2F9jtx8UVfh7FAGrSvzGZJ9C4VCB",
  "key26": "4BZvoXSNXBTNeX2PK1z3nQ9PqiUbkMmQP6kga9D4hWyvhehqCruoh6ZrkDYpaaPBghy9DerUQe9izvxpM8pYGTWn",
  "key27": "55iy2mtf6JkntEqNCFbpcjrejgWko48CU7u6GXqSPqYfv3bQxq2mNCdeco478GYNVgSL6CwEMV8khzyCBw2t8vFJ",
  "key28": "4J15HwZTLkxXJjbFNx7nKHtf6jy5w98qLaJ4faa2NKQ2KhXUcjtzDGN73ffHhgt6w4m8TMLtjhaKFSR8wHycaEZr",
  "key29": "PqUd7DgZ11Q9e977jUsUNaU3tpbbS2X4JMxtZhjRCeGUWMA39fcvLY8owQJEmUjmmKtJsne1CHeZ6rKtaXrqGDt",
  "key30": "5rfkgGYBQDLATXL9oBjf1vy4r8M2TMQUomF8cKZBCEzqgVU8k5gT38k62GkqdagX6tLai3FxTwmv1n14ybDRmBrU",
  "key31": "2r5avkb9sFJUB7U96hi3LMg6AUKDYwcvbnhDCoqjsftdCnnzPmT3Vw6vEv1w2YnB7QVkb93FLHfeqxpzZgFoBrXe",
  "key32": "2Euurw9gcL8W7vxD7mTwUzgZmkRV7anPKL3PZRnz2avmTRfwGS9FbaZENPernspupVonQiGFkoF4qDwfNqH5cwrN",
  "key33": "3FFCKFSxhJCrJTz3eNqizTENXHQvNNscxiMEk5GfaX19SYeMrL7RCb4b7dq56QymonMY9A1ACsCsVNSMBmjpGX4D",
  "key34": "pfTX8yRwxb9W7zERgXED3SXpxPEs9RyEasndKBsKs7ePk9PCaMf7TcyVEitxTmwWcWBtLy4cMoiXpiKZ3hYPWqk",
  "key35": "3xyWd7zSdJHJCS2fDkotEC984zW7f9RRGynm5AJBScjZ3CciabwSa1HRNwcSTReViuLT34wF8qXqDC3RjpG35xaW",
  "key36": "3bRFcr8NosfQBZHK9BcyRM578mH1svyqZDji8cYVF1mMQwiG1aephhhPSrZAB2TdZeMhoJKty2P3TDvYQNyF8a9z",
  "key37": "4DszMpgTKe7RGATEMbJHdXxSj6nu6qHXKWt23uj6ZfcC3WP99mZVEVTyTfb2BcEg5cmpH7ieVDASXLELL3Cdf55y",
  "key38": "2Qt7upZeB3NtKTshfrb6xEabEb6oJwDqpmMRKjBovJn6k64Kt5mrqBauVU86uuc2b2LpEbWmyFZUuL2mWjXWM17C",
  "key39": "2ScR3M4JqSskXS5ZXqBDujhfPJHKrzphwXo1arurgMBiWjj5nGP3seuS9jBVJB8ZusYZQZyRnyjBgLaCcqGB4ZEW",
  "key40": "TigcRYz1BftodenFwS5293ycKpEs76W2V2iBYEwDbdov1wrUZVJukTvTtiFFbuP7Du9T2TeUCUgPopzDstjQu5J",
  "key41": "7uLarrrW2ZkFU6AdixxTcHN2mwKCMmidQok8JZ3o8Z52FE4ZrUaJ599oq5aDBQrPpgKRB9WD6STyL86mkWJ3xCE",
  "key42": "3VZ2bq6fNerk5teFZdEpQoRLBPRXprD8UUJT8auM7S71q2diD9Kn48S2pdf9tNcyAzLL5CDXu1BoWwve5eLyzHPh"
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
