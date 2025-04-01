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
    "3o9zXZknrdfZV27B2AEqVqEFKEGNLKS7F8Uqk8T2pfgcaWJLBCHB4q8EKyk54f2p6XKreF4YyzCTwxk18VtR4VXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDJzMTR5sM4AM6CKvkZsXPwdSRcBsfn3z1ZQhRmvj2y5gVxQg1Bimtys6SkQaKuzpsf3gSd5wFGrEMjLXgBriEk",
  "key1": "3FwcEMCWh9MMAeHxzdkk4DTyc3NT53bpxiUgNkXLKhrsLNXfiqo9wPvrYUx7LSSFGLm9pt2M5JhNCa58nF9U1HLU",
  "key2": "4o89ndTRfHC4Z5zc9HEaFSChKKdST7hpyWb2mNAaxPm72TGSLqn8msJLfmSb8uMeSJUwJacN4dkZrpBTvkVbYaEq",
  "key3": "21RDNh4mbzvMUrcat7Pyn9fKWYcy1fEQhkoHHjEKni6anFsWz1B3q7DkqdJPoH2EsXQB7uo8ZpHgN9AfZGrnyAUp",
  "key4": "5bKnYKtZe2krYdjsurwtXrFWJ93rwVG2WcPxe5Sf1GGntTLvk3vcVnjjmRbzi8FtGeFYusvFhxB8WFQN3LDuVCds",
  "key5": "37KGHHjjwgmQSTcRaGy4jDktCw5hfghvrkJHNNA7adpqzjWavEhnGvFy8BfcNQmPvWXDVzgxJbdXiXHMiG8utaLg",
  "key6": "4ebNP25FJs6T2cAZnS4zpuNdZX57qCkWmftAnpinmCcejrTGDmMBqx9bRY5jGQtijXeJXUwZ6kYGjFypc7GYeBN9",
  "key7": "577g1f8firivWZ4Q43bVBnUbCAsXCfsNLUrbkam3o3CAp1a1z541hzcRnLS73sCP5z8qitYzckKwpzR5kFbNw1Pj",
  "key8": "2bpB18kdBNzM1AHD1WqGAar5VT91pAi52TKCEiRXcvvJGrheyHs4tq4iH9tAMJsVs7c6bfmX4VpYJhc17Y9ZdHUG",
  "key9": "3ied1hyTrMq8TX7Y9nMYRfDeDC7eiMU3RzGqmbwEA4mnGFbVjaf7hP6YCTTHLzNPrUWQS4G1DDhY75ADEZyCnBJH",
  "key10": "2Ay9uTm83yrHhQ9oPKteCqe3JB2MUKRTWqBR95JF7Wy9VSkZWL8XJvRVfdX7mDLo6KuBGHCPXuP2Bm7h8FfJXd5B",
  "key11": "2uzycWDZLJB9cZSfkAKn2CRBzSmtp8MKEqrWB8YsHcDVcfgCnBLEiGj3wim6EvXYWU31X6eqCBiGBRygW9vC8mvy",
  "key12": "5N47RUBjWobVmLiRTgnh3ZLsc96u6vZeXkH4kqmveVkywJWn1UEz4BgbsMQPUpUT1PADbZsJVh5o5zZbBLqLoFaa",
  "key13": "637ceMvX4kZbnSULU43mvbqcrMmSVMNXmmd3SeSdMAu5yD8vp6iPE9fqsYgewMWW41nfE5u6GSEZ1WrnkDQJwaQ6",
  "key14": "qaHehJRQZYr3bJwVmdwJMHdo2ZfyTk4BU8Fatta7KtWJ4CWJvPja5L6bWWZsXMsrDMvMFVavDbpVhPfnV4jtB98",
  "key15": "5L3qRjPd6mSJj1Ptr2gdQcJzHbkFcqpTudwhgSdmPmicU3MMHgqFU3Dh98miGtA6CcyX3BEx7rGuwN8aihBot7nk",
  "key16": "4PLAH9oBG8upo8Y7xk61phMsmrJ2qQ25g1wRUU7WbeNAiHFtp4NkFf22tGVvZSc9RNvNJLfioMJiojwnJFQ6mJ6s",
  "key17": "5yGzuNrvhVCP9BDognaLTJqt29yHg1TzH8j7so7dM2mwcAoJQVbWeLJrESc9fm14zWz8vaHaWQSubM5u8XMvsaYD",
  "key18": "jKKAP3nEkCT9Zj9AaUwzmVDCmZH5UzorDZZUHGZ9CxEbtK7G3hrYA2MDHpzGjwPUxLUJ7oPUjb4m2sjcJNnrH2W",
  "key19": "4aizBBGXQDR7h4xog6EywQwoTNcdqCNoADALEe5Yh9m6b6TL1zzwHsFq1Mow99DVFdhh4aY7UiKCWKweMAjaLBS3",
  "key20": "2cqMWvAtetAX5hSKFMmbNhMGaeBec4vsozAiDPnKCnaLiE6meNSzS8BsVMHPhXbuboDm2YMfA26UMFhZ5eMvGwP7",
  "key21": "2ifcTyc9JJkcr5xYMuRn2y9mkdD8aB2eq7H1gt3HEcTenWi5U1F46VFqvSmTnGFW5eLVhzCFfrWWzmLZLtWECvw6",
  "key22": "3XUrY8dq7sAJfz97YSJSWvZQdDySpdX83zyhkfBZ1mMQ6ou2eKMjReCWXdHExMk22p1r8EHiZszqVkUr7TJPteZg",
  "key23": "3qesYG4m5gwrDEzT5AVHcwFPjdYSeWLvano5wdh32C32bsE5wPz1dDowUSdBbkjJ1eWWDeSeYvHZqpU9ijVwXxtx",
  "key24": "5ZPJ21nrgyofiLYQ1cBMVBXJTpbe3gJwDr9qib7foypnGpV9P88QXynGMUX7zj6kHb7gFairDSjvgkKtAfN7mGH4",
  "key25": "2TTJjpf1ekVn5yi2P2LQqb9UC4wnZwxYBWmUU2SJR3bEBa46CcnLeJy5s8WoUMQCFpXGmyLcssszU2fGYDjGZ63J",
  "key26": "5VBKGy2noNdKahYnApriALqBJtu4XSGLuntWDEDoNGTpWUr8LNr5EuUprsiStUK9nHDeaGu5neUe94PsKMK9nQx3",
  "key27": "2HjY41KSvqk5e1cqSMpFEVRxPGNuretwAyznrToPH4woMwPrjxfN9tknDR4tDEuxi4RmhY8jcaVwBTiVn5aZBa9V",
  "key28": "WCtjtYJER9Ye5Jd45mdWCgjzSNuUZuN7M7HsWEnG9X6DZ4zBKuEbuQmWzc96zEhZnEmLqSFNyTBaFtgieJa2KGx",
  "key29": "4kRMJYRKCFLgP19nn7Tfgnt4E2b5r2CzUjBcSBo7Rjd9A1vLPW8QVowsVUHgsKGBJkedqNM7DL3QsZR1KWoKf66q",
  "key30": "3Zcenu5RftxRMH9c8PiKTazmbqhkgvmoEd1oj9TrtB4amkiFCWxXBYjsSuwfnjHrFqN4vW46upLkSBvaLj2JER9z",
  "key31": "329c7vttHc5noskDJfqe497VETFNAyi7891EHzd2T9yaUQaJ1RWUzW5fake1pj5Z8YxDxRi9yvNccYwRZQAjRYUT"
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
