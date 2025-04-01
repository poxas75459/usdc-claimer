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
    "N4RjVEWds3PzVeyUGSHCcpB39TbiZ8mzZMyuaDRGUYb3BFEskC2nZrKQwFAZzA4PNYMqgmVoTZhMXSVnXfooevZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbsnyLYfHxb4yqUGGq3Xvuq5myqg8XQ3pSAasZX6PQvMrmYA9VKWQNLKPCN9PDFWBZqs2bpKBTtyJuvdqW3Hbtz",
  "key1": "5KJfCBu19Vmk9MLBktRTjNMMJG557xMVF8Ya4F9RxXu9eYtRQPaHRVk8kBarMiGqr2sbWJks9NGK6GZncPrDMJPD",
  "key2": "2VvHwV191PPi6gWZKcewVMBiP1JfgDVfyyMx1ooSTFMQPMRqG9va1GZbVSENG4NujxeGc4pvNWHUHBjX5e1AS9Lj",
  "key3": "3ith7CXThCtVENZmaoFWAtWXecYeiX66ZF3bQjfXhKmCFXjd4MszU1mw2gvc6rhHKoaMQDZ68acyYVatmQ1YL7uS",
  "key4": "hzuVbg9cH5XtZ6yhM8tbGMEFi1s3GAXoFJU4PevmcNEUkPKShCACVUbPJxxE26a54Zk7YWt4SiraFCLn7kEfdYx",
  "key5": "scHxp53ZWwu3FHNAvtnMjNDwNV7fbENxpPRyGsTRfm1YgYZE86VdsqnmvbR8vZBpGhgpMCPc3APfz5Lv3ftvQiX",
  "key6": "sxSMknaXm1DnwbFBYwPRnt37LBbqEkwYmW3XfpTX4azCnEqzjGdfEeDP8vyRs2hrqiH2i6gozBWV5B5UdyceNNE",
  "key7": "2veCeSmLU9NNNgkWnjbX36AQYR3SEPzwXbxUFjprvaKqupTgxLXRb3XrjzJvLWkpHe66LLcFgQzuTuse1YfmDdRp",
  "key8": "63eaJk2p74gaT1HfUh4VFBj4sLLBKXRzh8f7M6tLmwD9Lv7X6iU1xA2m5HjmzQVD1aDtKcHDj3ajEeNUaCXdw7sE",
  "key9": "3PF5AzMeDXbEhqmFpamHubh2Q1EXPd5V1nY3T1sccEMi6xeq1TkKH4X5GXkzQSKaRhjUAfsXUJiabrcf4x6sS6A1",
  "key10": "46wKiGp5KWQ67xUevwMtyKc4BQ5qUSFc2RA6TK5TdjVa8AtvU4Usgy7WFu3ZnGVtPPathH1fubdeU2eA25abx466",
  "key11": "3VdzGsS1uEdVUkrrWqUCDLb95K7XnWwwBw3pwEGJcQXLUmDmEm2AKNAgfNhBbbduguCAXX3KGND616UGLEYTFSU",
  "key12": "4Gn8FmWirfYbSZFkqd2Vrt8ZQCYtLcuDmt54sqqvcwdSE4hxpTZUdtCx6b879Jt6wZ5YeBHWfVT4fcDHPsNw1R6g",
  "key13": "5W22zptax3uidLxYCW9dgtpGtJtLDgkZArW1hkDJGf6nbdWJHhKoJLNUf4yfTAUBihVT59YpEE8u5mDgXNGL6Hcj",
  "key14": "EN6rGB8x79BK3TYEDA8PvkZAWYP4Bz2kgycbZLNkU7VS4XWynAhX6g8RBQau9aQ3XAwfJZTA8J1LXy2iQpcNd7m",
  "key15": "9Gqvv6cwxostyBQofXMv8mw4fFM444aMrTA9ZJ2TeyeSXbHcBRGGRS2j5TpPuYgkQFL8JFcEVqpp7K3k4Mr57BS",
  "key16": "4mtxyMXz54iiZB91iBj9oyy6cAGzvxqXzsxYcyee7TXJ2dnto8Cy3VfdP9ysYYQJ9tRNJV1Q8cV6DgtMxJrsEuC6",
  "key17": "3uBH5DACWNPrGz8LT5gkxhvJgnuLGErQY3kwwmnLZhTzP4iJk6hca1hDzDomDqLBKv5xfsYqGUmxSqUgFNM9r8WA",
  "key18": "5kvrZ1137iEtUtrwg3FMQEiFHFRJT3BBrnXjvqqxw5yf9VuJtx3PRn6EiDnaYcu6sEHLEbcWdczxdVL5j9TaL5YW",
  "key19": "4uEdoBkFvC6F9uwLkHpjmVqDUVm7z3ES7BuooppYSELQtgNu2gRAErHbLjEfRUbjGKbs56CyLFwuZQGKRtzPYXvp",
  "key20": "5JJamDKDC8n6YGcNZLpVqMsRAjL28bGyuWhbEFhCz5bcTkVD57P6KusoXSVGdmZz5qnhwcRR78uirJydBzmN5C6W",
  "key21": "5pVAAZnF3Ribo8gQYSjpzCxsQkNQBsqd33avJVvzCi39o6m4M67nUYQvbzPr4TwB27ERtbpa9WZ56dPCuPccUwmF",
  "key22": "3sMEFRsMYBxuuwBGpYxS1q87SnJx6S3jm2pmocBGu8kmBoyn5r9Y517Z3FjBCUhCR6YeyXsSqcfhptcu9Zq9GeqR",
  "key23": "5LXSEJwMm8dkT75exEB3JKY3xhU86bLYxUKpZXYiSUvbQjZBMJnBi2gTDTp7B9GYokCoNRK25UrBb79hMDXjKL2U",
  "key24": "3Q9ZGrucJJ5TqXRkFeASoHSxauUzpp6GX3gA6fXChus6iAGuBCeaLPrmGK5og6kSuUGoAreDRXpCsfyq8y28W5su",
  "key25": "4nVpxXacP7gJSS4od5JEE8Zsd7QFoRmgQfD2Ky8iePGxWye6b5jmWjLbUZcUhvh76k7mvNbHG9aKEbkpnZXtCdQq",
  "key26": "5AkLdjiXTtR5Eg84cXZ6GsQWixFoMZTW5b2StzQaUAjM8jLox1RavJ61sZTZ7ppGzZaFUUepwimg4VcGsmz5PXvH",
  "key27": "3Dd1ePtdERELWegQKMzT7nB3M1UFqhBEpD9fWuhPtkGPaaiPCPNhDb2R7ivGqgJ11a5VXYY2xEH1feTdE3Si9CjH",
  "key28": "2cqQfviRkxbvv8Lwmi2KWMiXyYCxuDnZd1Xibjqyadkj4PgSreyQ1Z5pBa9pc5CAv4oNkk9JmX3i1LecJQsxS9zB",
  "key29": "4S1zTCwD46AYNiwx3uEndAfdwwc9jiPCXtjmZJwWKEGqCkQBHS1S6LA8sEtsw9BuzrKemxQVWMUqQphNaLQh99NT",
  "key30": "5A6XRY1jpN9jicU9JJJemUvLVnQ8WcMkHPJqg2bYRSBofoTUgs1NrC697Kw5ifnqFRR1BKzZoDjqCebPGh7aVMyL",
  "key31": "mRMmr8qEdBECMRDrVHSdF1AgN1CTd2Zu3nERwcBPP1fvEh2CZMLhiMyynzTPk7XeYjy5strDbBkL1oC8MzJHRii",
  "key32": "2VTQKC7xPmm992jhi5r4swC2D4cVJgy2qRaFEYu17BYVzmYGPPzhhQ7gEJtEfUSFfNyYscaX47aYEsKGvMiyeJ2b",
  "key33": "5b17ZeJ2fEHvxNAPiBVnkDy33SS5EKsP3m5E9UWEim7R2MmULbLj8dDCMvpzyaHQ1Pc8QNKNccUVCPGUT5jRn72B",
  "key34": "4mBmhCEDezbApihopQiCP25Y7L21RkVRbQNpLew2CbrHutDGmRJqgJiEnwg5ENmwAN1UAJ8DsAKMeRBLnVXZu3Yb",
  "key35": "rov7ycTs7xVkSvfykwx3SW7Q4UErxfwZqdjCD7rei6jBYEX8ztiZYhmwQNZZp7AfZaLR455dGrYiycL3fpHNaYd",
  "key36": "2Xp7Hc5vU5EKBGGzfUAAnL58umPxAArwPJjTHW8HFkzkmQbzmJi9NUebyxNSp4VqEzxQvasmQqXyhUovvsNJYqtw",
  "key37": "58zqcZXsHLWrHaWNBe37c5k7kT2DkFELX3z4uE1xdEuVe5UoSw61yyixHiSYCs4bUJ1T4Vpspndduv4FmmrLDwF2",
  "key38": "2oEv7BjLCGknDHK7vnDB4UGbZkTXRUdoFWtW5c6ewtEhs4t7z5Li1f5mD74jrRNPZ6JXgtmti82Y55om7UFwZtaN",
  "key39": "2fCbqZEuFMTgX4JQRqpfJEMzGAYVMm1mNZMTyBiyN63NSJfNeAtkGLZdF64mVHfrSUnuhtFEjeLU72mqc3ZxEvci",
  "key40": "5i1zNTJisSxmp8ukzRHTnp65bYdVJqpRudHgvtMpQJHPbrYATTAY7SgfgL3bY68c2f8KH19LgdJDc3DSDbKLGewg",
  "key41": "2581rKs4EADWFbGsfEVKE3WJLSLMvsizjHW6cDKuoCedipnR5ZCD1fc3BqLxaouXZeLrGhZyJfZBK28r6d2dSqcU",
  "key42": "RbT4fWdBtxyx1XTuoYWigFa3xpmTAmPUdaBTZtF2J5K57dUUFHgHw2fRXevda4QAqRiVPRjjxuuLowXW6AcDJqk"
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
