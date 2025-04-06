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
    "qAs3MTgZYdiyRvBjB5dkRionrYDGj3eYjJ34tbxmG6mLYA5xWJs5s95bvybrEtRsNvMd8n4G3CCzT5yJa7Jt9vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDmKExBQKEauEXn536tBwSN3nU2y5rGyu2wsZfSShaq6YZw41QSdXhotBF6LEETzqA3nwYnj7NXy4UzvQLEbjmH",
  "key1": "2ut7su3FMMTUsm9DWbzSFcPaByV3f2GbwAcJdaHXbwHWHK7pqGP4haTm8acPWuzwrRAhiCZvRVqKzutE364hght2",
  "key2": "5BehMzVNbuXgubuin1d4bvdzjszV1SDbjfB14wmi4vsixdBvG8QmSdTMX1dKdUZbQYoD3eeQ6kHWT4e6jYwEc5JU",
  "key3": "B1NWMX6Xs9ZSBupQkH3RVzWeiaHCwGVruoiHv33M6imU6R1gEkUkNsxuSyKiqaxu69SrpCnd8XebFBDEP1stKPw",
  "key4": "44HLG8JYyoE7AquZtXHvYFzmU5ucxM2xwhL2HDchp5fEYnLaWTM5iLZJV1eWuqbvUYDCZzudHQNUZbqdRQ2uoeLv",
  "key5": "3LuvmAYL6hasimDFV8K6qApNziJDXr8eVA3amQBRKwCvx58bBgyc6ypq3vXkPt2pbVeaBQN18C7N6RFgCLDjqLWj",
  "key6": "3nc9QhZWSwmi3TYBwDzBQAdgHWoaEsaFdjLiFL53yZ7ifk4GPTYahkZH6WBi4FgQwoPgchE3teBzdMJ2fNkZ9FYh",
  "key7": "3FTmYtEfCQamjs83BYh9x2WULvjDsgEnVedt26PycSHgae6FeAEQUCE3R7DK3MYp5ACtxfPMbrBA99JVzGjk8P7H",
  "key8": "5Bu1oEX5YArkzWKGzL32v5W5xngw8Di4wu3wz6kLDMNxPxJde72UPCk2fP92PA4LnwdbQD2z4fSedtc7EpUWPZwY",
  "key9": "4qhQcF9KNiriBiZv85jmE1djDmQeqYGyJ9qkR693YYch5oee3NWVNt3CbY3pUiXx4Qd6eqwjZD5vci6bAvPb6pU1",
  "key10": "4aWPVvAsCbJeMPHL1mA2hLZK2YtMMrRY99jXeZHZNgqDwCspcadr527PoSDzWuZKEBLHa916ZuhiGsCHbQwy2B6L",
  "key11": "4E8GpdRJXZEmCSGELqDM7RRAxBHvo6grm86riizpJd3n5YchB7HcPKH4SsyRJcBqYrKm6ziuS55cyqgTxiJrGUnJ",
  "key12": "SPLMgwtqxLj8dAuxiJwoKdAkTyXNkyrAXb25L47tZo4uXMM51nDktz1RX51hHZBjEzBukbYwQtsx2ors7y7HU92",
  "key13": "5NBkooydjkRn5C8iQqq3UKFZRqU9H1wBBnVX6A61sM49a8XT4isUDs5oXubR1MagYvab4r8P7LA5uCMvrahmXJug",
  "key14": "62gKzQ5EJ4CHGxdpb8PtRtb7dBZpBzQvWAHHrL9PwL2eApGJSEFGAYuhNEhXtMLDrURB6Qm6wVsc7TWkgLHvH55V",
  "key15": "4w2J1sQmAFojt8VSDPfbPixGWruWUHQajhsJPiEZbwJmEH1tCfoaf9HMNfM98FYK1fQnLBVskc7yqJQDvxFm6hsX",
  "key16": "Kk9nB3CjhyyWigy6J37USf8Ar5TTKmmfuHeWqd3k9d49ja1VRt5DqHTz1hMKDHy8YRKnZSTKTiBNg82VNCCLNpB",
  "key17": "4Dt3ihbBCjA4QpB3ju8dBJgvT7jkod2GcFmCd1ZwvLtbuZ4AXfyYkKFCsbpQVQSnjUsV43rVQoNt7Nky1GvzBCm9",
  "key18": "3NXfwfUZFYMZLDA7ZvMMK3B6ZiSKnynojMcZVM4snbVDBoAFwvZFVQFHzC9kZY7WzoZfvqzrzQQCRq5Db49sKg5E",
  "key19": "Mo48f8Zg1QdjYV1RFxesgs8yJSP8oGzvEtt63KXJ2LnFdqHreipj8Q7GxUJXEpZGiGdNhpyXNRo4EoY1YAysuip",
  "key20": "4rjf9vFCC4AmwzLSJrYdVVmY4VgW9WnNhKyNi1ywE4ZuT2sz59DRtSWEyzw6t6Y4ytGu6uyVAU8oMr9Y9f2uZeYz",
  "key21": "32cpihZndwuEKYPQsFWi8uJXNVrqhAE1rQdpTRo6pk8qLVVrWx2tmwUwgvPrsN51hLfwkDifbgKfu5aTTy1NEHhR",
  "key22": "2HJ7f16Gr775QyQQPa9ud9xSBYJoWLvtzAaakLdFpo9UA2GT1cMdqtPEVDQe5Z4aVdx7g3KRuFrJw9xjDaEVNAWY",
  "key23": "Mhqr9M4enmVDgpokKoVcmgJZdDQsH5wvRV6ebWqvXJvLZUiimB1nvvyAB2pu2adQpbsvVEpNULe7LrqFCrjt7aL",
  "key24": "ggtGoLMkZunN6HGEbZcbvYwSXcZXk5rX5NBttTwgfvVMLL832F4R2q3rNVRxX5FrUhhU92iy57LNqpQXdmLWMyv",
  "key25": "UHXEx3kt6SN9Dhf3NpkDPN9NcqfbJMbfHuFruFPTGULAYa8GTaY8ZVWg5tGkzYTeYLjZtH5BDaaVGrWaK2Wergn",
  "key26": "59xRFcfhDMq6qM79Z9qDVGSLuTofBtVwyGdn8L4xjhNwswBYbX6GzEVvmifc3uiwDXTHR6eFcozWw4P5iAQ16DpM",
  "key27": "36KeQtEVu6ysCLmbLjsiyEqXn8eybpz4ta8jDhaMxWbW2NGFCecSq3iFDFNZQ3CM8s23szf7NMTdsRADwar3FWJa",
  "key28": "5jC6QX6Gy9HuZQ1fzyHw45ezjkTe7du5VviedHipn2YJHNrQd8HvnUYTaxbjHZ6qtjn6nyjbq2iGfcyoZo8NNnzY",
  "key29": "4F1CVZLZByyCNysAQJBbUEZoQsdPn18unWKFjjnKhFHbsq8d9hx8wAvmEqXEmyX5g2MhbMueh3c8wxbSqvhHSLw6",
  "key30": "nHaLjcTND4Cjf8E9NThS5MCJrffgeYfHtWjQHSLgYYJrgKrTspGVYbCWTwoK7gnfoebyp4pCLAUYe43RZqun6sQ",
  "key31": "2CbciCkm6odheFnNAX1WMxfP1Bojfd4NcHrsDDjrcbid7QmQCYmMzpjqaB6kw2sPrV5HJJpPRr86NtwMQAw18dP8",
  "key32": "5VAWkV5DNs9N2yZFFVjRJUtUz2kxRxf41HnXqgoY5k5Q9TnNGQypVqmYfAFmE2dVHanbPb7MAxRJDYFQthzRdQwS",
  "key33": "2zDKw9PaUfrrUtB7DPZFrzWgzfYJkNXXaLKZ78KFH42vtcDjPFxKF1Bc2S3sK3KQ7796NZh9JWMWGNVRBziivf52",
  "key34": "pcrQLFm3pp3LSjpbBzLzu3PMAvXR1vuxHyGNXn6r3fEG5Sy1Jc9XJ9SvanH4dByjuYuLoCbzeXqe5zEUqP9pC71",
  "key35": "b4Dy4qAf6FZmvEgwjqPFxnRQ1DszxC5xKLKt91iWJAYF7i6AF2hrAQJbwR9e8LzxVErqjDJ1B136Ws6RJ6B7nW1",
  "key36": "39EWfbf7yo8eJ21MwQXkAWJHrxfkY4NCrs7UeZaebGsTT7XAyHrKCeTmQ9hAy5zjqrVZ5jTbpLWuVavCC2Btb3q6",
  "key37": "89NUbAMEoZFdLoqPkdXpzKdGFxfo3t4VtFnBFWgQJmxqcssSqLaAbQmHvBM81yED2D6rvHVBU6DgCLyMhHiLuqN",
  "key38": "3o4gsaMRB658U14YWpZJJ8RTFFuLXo94dkUFmnnbowRad9ELdBun9xJy3pwyYRXirMb75WQpEJwTnveYiy2SJf6Y",
  "key39": "41rF46MRcfAEhAPmXgPEsspUjAxq4Y22h3BJHC5jVgKNA7ynEX5Abz9GUPZLChHzndsn7g1fpjeUzY1zwEEyS8uS",
  "key40": "2j92G2JMXjUDw8XngwhAGJHPWyn7kR17SMBMVSWhytH4HRPnYUN5BiibitMzxScVpMf4dWF3JwPc2yfSYkPhbXdS",
  "key41": "2cVymVNq177XPSxT4ur1hSQqxQiaEhwrgU9Uos8dJy6gaT6hVFEGcJ7Zprr65SaBpNoNR3U4oD2n8iN2mKZHw9dE"
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
