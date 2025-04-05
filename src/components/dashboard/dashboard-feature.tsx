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
    "493GX9c3fT4XLkpmf3p7U3WeTku6TieHemGQCYehALLmCpq8r2ZvGhv1yShHEjJNodcqp6cq8oCd5pzZjCWC29cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQiN93iJPqnKqmiGo1hcQNJokfd1A5mMbUuG8Z8Pn9GMnR884kw34rssWqFMD5fzQpQtQPxuX7qqceVWocwuz7v",
  "key1": "5bzCKRJtyM95i2v6GurHfsNtpYfVTjhbJH7kKZBFVFDbhvNrqsYUcxp3jsBoSmjDUqkNMZnYjCgwaZ2u2XNBmWQE",
  "key2": "3jdqVqQHzoWvzt1hxnr8yBtWjNxxhdEMA1PiY6jW5apwgncAZXxywNAQsVGrD8prrUFrVFYHkzZoBBdSquz41bQR",
  "key3": "39i4pRePn3KtktYDaWJ1peCBT6Dba2f7Qir3rK7JzVu4B5rxYGcsfdGKBmPDtqtZid2NvQoxtqk7FiRTawvMwiL",
  "key4": "46drULMDWSrtJHZp9vDhFaMZa5PXZWM16hKnTL9azb6GJMKimSu2qrTRX3uXiHduJeUiwfEezUBqAwQKEMLuJaod",
  "key5": "2CgEnvzrrLyDA1LgDbye296Tu4MdXZVZmQE2PQRWWvmVmWKBL6YzK9oYpUb1VXjEkU76hCC5qMC1GqXgSt2ye6fg",
  "key6": "4y662w7HTH7L5Jv3iBzM6iMi9L4m2v8NNhWzcKzxxagokwMvYCeFRVTBshwiixw7YB6kGZgNJ8unRNMdvSWKArwG",
  "key7": "h6gkogwfjTEU82FZHUJe6XCib6eiv7zDD5ut8xGk4GqD17nHXRCStJ3MYdfpr57xkzbzsiMzwqtinoFYAyYFWJV",
  "key8": "5sChxdas8NkRcncDxz6mSyieMGgEqdisyYw1GecxGyCGRN2k12Bs85TzvT5g7Y7GFXCi4wZMNPRs4wHcLquUbMoP",
  "key9": "5iNAAjKAKdU2c7D6hEzxMFeeow1a2su645xx8j5jfdGgyuo5JLvGzfUoD8AF3ymRaNAUifznCrkeMMxtY845MSUd",
  "key10": "2XMnjsecHsVP6EfcqXCQRYVC3LEGMin98MQ2dMJNqxbHFQf6dwwCg7GHnS4sSSURfqS6dmdcvFpcvf2eyVgguAGv",
  "key11": "4ZGbuCBiPoEGtGh6P5juK6ZavyK5fcKkRSZmeRK4Wxy71GjzWAjZLhokby4Y3qGA6n83knsDeb2bgJ14J9Ly9bLV",
  "key12": "64XLwMx7yC7CBmLk9sGRfn8AinEuTzY44Lj3Y1RPz8RQUQtgj8Z7pAcKG25RZypNnjJpFPkpJAh776NxJkhZd4SQ",
  "key13": "41WW2QUMjrPSYzr2eKymnXGswjqj4ptAZXYTV9yVkPVJo2k9RW6P1Qm1yunS5XgSSBGTNBPGLyxxY8UAWEBeNayH",
  "key14": "4qjDKcDF4fMmXDZRiCrdGnNqnMRVuMWWQ9Jow4ZSgdozrDBJpM892wtNxjMSfxmsnThfje8caQnHyhbf2ZUzCwME",
  "key15": "5gAps5cPpQfJ9zqjqmo6UDwrzXkL2DNaaXqmUpYEcSZSNe7gQtXJa7aAuN2CVgEpkkdnzQYtHsE4cTfN7PrYmn47",
  "key16": "4Rg5DXJoZXCJYS8Tido1hkoLZfgCjoyqAwKazSHbzComLjPWHYJhjvr4HgvgPxzsDXR6mFPeh6yf7ykjStBKhVoN",
  "key17": "22ujWV9jUyFdFGC1gMbfXihvuPf88VUFHABshHJs57nuDJPF74aUE4qdaXxmjNcUF3rWTD6RdW8UyZWJxrvfAi8v",
  "key18": "5v6W6YYRbv6pQXtJc4bS8zVuxGQ4V9NJnuXUMiqpsPjZqSfQFZgaUynS1Xy9zvV9Y8HgJK4qoJNUnCyfLmMjad4B",
  "key19": "4De6DvzhdgrB3rJ9b2kzEksAGXfbqhLnrAEKyxbDRUC4GCztCkYYDUSH831Eug8wwZ6Vn6LB1zrz7HneRhsVxuuX",
  "key20": "Ra92UXMJSc588gWaY8rgqKFi6rYh1mmzbktxQ82oMMyiuukHzTPJsME4vixJZ5fjceGQTpSDCSjFFywR55kRU25",
  "key21": "3xXqizCSqsXtKh4XpujGihhpFWbsgGnagLVfbX4zzsEWLWVzc8bVzG6PVVfYkGrZ2UjBH7oGmZs78msce2PxctHC",
  "key22": "2Dyp64vXa1PogvPyfJ6fzb739ScouJxfjYbuMC88uKon7LPkNa8mYw8cMWQYxjiCXrfHGE6zeV3NtJ6i3vKvVAhM",
  "key23": "3crfYnwgxi4F9LKLLbyeGEzP2KPT4BSHsoBREnmznfqHJjvHtTZrL8ZJY5ehWdLy1TcVJE3hnru3x1U6MA1XRPgm",
  "key24": "psvxernJKu5zYV3qfrBfJF2iizjHt5my6aM6XupwKmXCtBse4EpCEDoFoqM97Ghv54xGjv42bznSk6uKyea1gg3",
  "key25": "55FuStcg3jM4pLrNo7B1jaMwXiLmXbATTbaVB58zQmqtjruA7W2X1RubuRuD67zbsTfibrukuetnWBxnGsXc6vhB",
  "key26": "5c5innVj5J7nwX3VuVcCGxWCfZ8pH496QjQbDqgAbNxoeW69MGiUo4he6AHjkTcfWrxeRSriG9vAc2KmNzyCbFPQ",
  "key27": "4vCCH8BTrHApFTiUxjxwiVNGWw2LcseK6MNLeLe1fkyQP7CWtJso2HRwBmbJdQCKVcx7Am89U8NZ6ypWveseMKwh",
  "key28": "2aZp3Y6j2rFESF1RcXJQKLqoYXLs5Dx7tSBc9s9EqU3AaBMPY2fQ9iHjGpACgzEjDU953fahx6BywKwYyEcBrzAK",
  "key29": "5s9qhwYJE4DjawMkhiAJ6FqjRuc7pXhdPKtqvExueE2hQPnTEzMCNgiHzTW2TzBvJgee1R3snRp4n61dKTMrg3ev",
  "key30": "4rfWU41xEczm5qtwJm37jtwQaSCA1G66XYXKDPtPDuHqbVN2qUXSLpV2CdBirBGS6fKmuk2TBUhdFZArV4qY3YJf"
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
