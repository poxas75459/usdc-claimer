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
    "5J5dUwf6PAAJLNMRkJfZM87qBRJmgMxu6KW45bwJVDSidzAtozma6BKs6po7JqaaT55tg4vi9KJk6awUweQv6uXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNJYyA1kxhAr8cuHGgCFhn1rD7whDG67ShZzkFbZ9K9PaWsryg998QGdVgJVtPN7H3sbTvkZLivX39vVVbg1AkQ",
  "key1": "P5v9pCt4Xy7i2LTiwiFxKSqyD8t2tBE8EEHRSsyPqSGY6SbuUkc3iv5SH3YP1zxMBL2jbukVT4DPmYz4HDHby4r",
  "key2": "679u5FqtWb1V8vCcVKkwHVMSjVzV5kmNFvaEdd3C37CaYV5Rttv9XB3oEfW4gCZvGmk9wmWqoW1pAYVAyCXb3ss1",
  "key3": "5JDubL46nMoENwPLjRXaujFFhXSWVDwfREdTv7g2a46sPmLqNCnvaTyF23i7R1MP82ZwCpXjhmFeKBdXaLd2STXm",
  "key4": "5q649aK3xXqXM35UoubpnDufSiDJam5bw61Y1DTTdwkHXTwpukHmypJuAqJ2tVwXz9v8LtpMsP4ktfbsrFtQJRa6",
  "key5": "5hpPWWUDXfH18pYHD3RUQdSQ9tD67WiXZ48yQsGLNWycC23FSe2xNzLaKGPcpT3SeSTBiYix3sZLrE73R8F6bK9A",
  "key6": "2apT9UVsGtmaPMZNFzGPrmP4ASYY414KeHV57sNTEki2sd1xmxnWRCfgZpPCRfGi4EHW4sPsGFpyqowey1aGAzeU",
  "key7": "V7reWC5dZR139vv2TGXyv7Kfq3Qqv22AT2q7GnWSzRxsTeB9fWXmcbsA5EJCrxtXb1YT5ponaWRyKUv325M5o6s",
  "key8": "3RXmx63AYy5etyUM4GtF5SyxRzsergwMFDSvyBAGuLfn9zgCrpwBdzNo4tRXBLsYWahaDDeXaKevNwuGRosBvgCH",
  "key9": "3CWBDdTTpsk8DGugaTNGjTukQSQiNDpAJdWP3kDRXxFhAmqjsgnih4w5BLPjSpLx96YKM5xhRBBg9LARVo93Wk6u",
  "key10": "5HBF3CSpN6F9makHvgViJxHUiH36iHVkTt1z3bxYZRgtGht1wtktombbReUoZWdcz4X81HxFPfwDoMEdJmGH58ty",
  "key11": "3QWdzM47mcPH5g2qqWMncySbBivwGWJc82gYib4ZoEZzWTBPa5hG2Cgdsbryhviq4rTuhdknC5URfeZojyo3SieC",
  "key12": "5zBdijkZzfoKS9dUgEgaQVz9PcGgyGqcRfEG1WjSCba7e9TFH3eDh4MTH9EErxj7xKJY81K6UAQ8dVV48t53urHy",
  "key13": "5RbHzmXXaMUaiskaDuLeP6kNMpVWJDPCkXjwqXPHtkb4JYA4Zku5riyQeDsMKK1h1ZvPo5xzKXrgdSXjMAfXFe2P",
  "key14": "64ke5UAGTqcGkX8qC3qCFKgJ7se1wCUjFg1URLHitDq7UHgnu2Z8LoFW1wpDaaZ2kikL3jJKm2nXk2W6R3RpYZ3n",
  "key15": "2MogzEQTwCYKofAccsyZfs9B9cz9NHxP2BJd5vbi8NnTYdTd5Y55uTdhwzB1iwQ3ce4nQ1DWvQE9Zm1hCydFemXQ",
  "key16": "5BuYem1SuH9Fj4CxShcQUZcEHLgQkyxHFeELWJvrTrysRREdp65vvRyH5ctokMjz5uKQxZz2GW4884MjPcREak5b",
  "key17": "5xYrFgxM6WMLC14rgFJgj1s2NTwNXQHmqzSobAJ2W2UyVJdHoGYSHCYybwLAYgPMf7UEnhpJsua8T9iDDJAwUTje",
  "key18": "qCafgNybRhHVXaigrMPNrX6W4d4VXW2xqmK5EodDi227i2DhWup1frZ51TEAQanfMfCVAQf8A1pwpBmicptNQzf",
  "key19": "5pSfxVwZgD8fPBVY3nKRB1EPipdiYmjXm9e9C3KqxWYLYrgtyjQTKC7HeV5HfjwF8JorpYdzE7Wa4bzoaem2KVQj",
  "key20": "4ciQXpxDxk1ALNgaBX92UkGkYtroFouUjDSZEPwwmeZYfg6sFLJiZHZ3VF1Jz4Dd3RuvJEiVztB58ibCqcEW9eS1",
  "key21": "3uTD7Qjar5CpYShRz3dtqSWTfcgXv59cQH1acVhCL5qi8GqghGEkvUEzV9fH8LSzFGt6DgnTZXfaET6fsvp8FniG",
  "key22": "58Cnb5RYVyKsSTU6YujeaxKUuRXdaGKHFjeDjmXMcqoJJZCxniHNfjNRUiGNiYtHEUKzW4g2EzD9vuZaPmbBJmUJ",
  "key23": "4kDUi9q2vo18RL9NhCG5AvwPQqeuw42KR2d42ecJ23hSpFbjDf5wRAQB9ACxsiDKUQLWedsuQdTkqPoKZhiko4WS",
  "key24": "7sSkiSsczbn95RfDjt9KbXPApAicaVrkwAj3tpvr7k8AGP6GYRLhNwHEbdNs8Ys527eWCa8tjCBA5RkxHpSSQUQ",
  "key25": "5GgKqhmY4DNbmLeAB59iJ9gXKfHZzCs3m6fBdanGzVTjJjGCRKzQUkxw9qHBEK6DBCSC95QhgT65YX1awaLGZSEj",
  "key26": "2anMboTGPR74vfJKrfCFLQQCLvWSjrgPkuvrSuyUtGGdEkpvdVmPU8rEE66qTg4ZesYfhCuMLNWmVRgR8Vzpv1Jo",
  "key27": "36K4uuDDq8youYoZZUzDTWxqHZ5efqukdw7wBy3wrDEk4ftLopcEDt398C6cMXQ9mEV1rAsanqoBcKjhfeJ2DhfV",
  "key28": "58FVHV6oMQ7McnBhQvfiFuzjiuZdmYfMmBnxx9L8AMCD2mzXyHnx2Ai4ADFX7D3LTBdePS6YkEhiq2vLnJgKn7hL",
  "key29": "Ly5vJ8F2vHsBdLcHrCKNSEUXQUHjmd9U2uZz3YnkpeG3fYZq7PJWkVnVf3UpLcGGQuoBQiyAe3MZ1dwtHwqQnZi",
  "key30": "3mSwVnAHp4NXi3wDTPGLGztQsxtpRj85H2KbcAMsSPK95UBJprr2ZhjqrXxQ9XKeoUSkUjeKHiUcNrLW9XCYj85v",
  "key31": "4ukVMRULBgJAfFWBxiEZnVJVNPPe67LSH93fpw6LhkNraDos1KoGh2puP9KXwMvWN6Ht16qG7bvjSTRzE6Ex9VYA",
  "key32": "5xn4kCgWJo8Hjsc2Q4kkTkumYqP7bwBrB5dbFy8ZM34y46Jy7PTpKqKNpVvio8KjhFJjxGeHPuEUGh8BzoRqq2uY",
  "key33": "4LccKUycGdt9LmrZCDxcCox9fFCZumMhxRWupkhBQwZBhTQd6Z1ZzHg8s6BxsbLuWCdFkWbNMs8d8pS6nmrbkV98"
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
