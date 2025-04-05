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
    "3De6kWv7ezyZhkmZMzxSoTRLcjXrgqj9DhEPYYFoi3qGKzAjrckprZtYqTS6TNTuR7C49JJCF1qVGmFXsB3RVvb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h9Xeodwy3SFwBrZ6sjXmrHsmqF6uUhYrNXmjguyuiGYV8AZYJBXSKrqrKL6C59jjroypaumXrwYQfnfP8yNAru9",
  "key1": "BJ5SsWeBuJVDEJeEJkSapp8E68tV1owCGjgixiQgJS7Lkn87yX7Q6PvhuraNRznGuTPoteMS7uyEdDPwvRW7Rqb",
  "key2": "2psy3Kxivo2SpEbGHxm6kwKiGmyB6BW54T7sDFkzELi6SvEXBLpvWv6LegrQPRffnbi4zXJ4LRrg9Ubn3HSG2QFy",
  "key3": "3rqmzH4Ekiv3E3wgppYidpRJ2tkkjobxDXrhDdRaVd3x2tWJhfHwHi59ZxnCaeDPTG1vegWQRhLYjgQJ4XTfp6Sa",
  "key4": "5g9zvVTLGb5aq2EiXRc6sosGKZYuFG2iyHMaL7UqEHxWcB8KDNFjJrraFZ4zM7sbjVG5M8oU9zQ1A1dBrB1nedi2",
  "key5": "4s4fqiKzDASVDtCjYYSWiVamDjrirLwxYabhZS1wdMzcvPtGJRqTNzqQCGrU6Jxp7F7PrWHwcwa62E9sqqo71BfL",
  "key6": "57mSKSk5rdvEupRHpeNhnSjJqgaTiydxTRMRDqk67cfYiiTSdeV7h55yBbRsGdmfgFPUaDToC4HMEaKjj7wbRWqk",
  "key7": "tspUQzUeBNvzKtiBS5trwuCZ79Nk3hyoMwvDwd1upWwpn68C6zNCTpTJw1Ju511n9XUMLsXTMJPbFyvi9VsrPzZ",
  "key8": "4cwCw9GSkbCJjebXpxUS37d64QnKj22UbxJyL1s9Z282J9ryomk24SkXtcTTeEWTka6SENjhb6wNvKP9swykyuXH",
  "key9": "4cSxcUUaj6ogozQc14LP7KRddCuMhbLxaE9Z52vMngWoR3PvFpWvhi16TAyyaG5992gV1CqKAVhMpgQjVYMTmSNr",
  "key10": "4djejA6zNJHKmLrXRWv37yRXpK2tJ2chv7ZXZ8H1N8xJe7HJVwNd34ACAMuGk2dM9ScZPFyorHqRdQaJBCpjxQyW",
  "key11": "3fzt2XViUARErLrFKVVkox1ErYDKRjvRPJtWAHhSx1yEKnyUqkojtzps7mcj7q836m6KxSiT3CVkD6CwnQ5BrPdd",
  "key12": "3aZfnaLxrBBNL1mX4nsyza43dK839ngjwG7NATynvjpStvdRVRZYYhFNs83pwRr14iqRgGAt9WktUXPYY9yehQpC",
  "key13": "2Z9jSyJJ5L2RZnCGfUFFsa8nuiiazbz3MD6ubZgyy8Aq4cisn4SdGRhrqx2DuRn9dApatWYrr9QXKNxGqJeqUh9j",
  "key14": "5TgFnJ6SDDz34JTxH4hNTuPPL613VUfGHJKm5ufy7sHtuDsywQVP4ssVPwggug2QvjUakniyHktuDKL4A3WPwRuZ",
  "key15": "5pJiJji8tVyFQ2T5CDE8ug5xq6x6pgYx5Gx4uZn6qgBy6G18YFLycDUyQjByGFW7iKoz2nAVJqBqr9S6ZXCiP81E",
  "key16": "2FHoZAYQmKpbpu17Hb6AGo8gRUdFbq4Mdiqx8hdB5kYNuKoG5kFZfiaFeU129R248GMHNVE1xhexzbXAt4hbraee",
  "key17": "378zsihsXF8uHh51ub1jyE4yE6M1uoKkmDZfJFXWYuLB6vXv1UMufY8hyzJy4LBSjBsAz2KEEhSJA3gEPQKxD3cV",
  "key18": "26SqJguprd2TU4R8YsJDfQYqaPLudP3j79mRzuMttKDWofoTFshxUCBFHChVoXq88CNZvXeh4kKH9bqf2GsrWf5i",
  "key19": "WJAuCJQGEyqNn7A8pRUZgZEsLcVYpJ5Bjyq4ZT8ncbu92o5La1v614fpWKWbsihTKKuaFGXVNwzfPTQvn8Y1Une",
  "key20": "5d7BdjzmSpb2u2qkzWfraotkrxznn8ocVsKtRZ7ZQ33L1uHeqUZE5TRjNtxW3bSkJkAYbrccqHxKtPjRQqGYQbWL",
  "key21": "2FC7dS1noWHdpr7pM1upCEqKrAnXyRYXWWDZqWeWGYhoAdb1cenxTcDg6SCdiVFQgL4qdX1npNhp4Vdnta3qnebX",
  "key22": "5ngDXfbvVwnB44bKc4ah7pzhPmhEpEFGjwTkwaFR7KdTtdNyaJZejQJUvmWVwQ5Z78ckJeBqzcVsy4fikY1VYiM2",
  "key23": "62xCmJgRN6FBDL3taTW3nMjCgUPtFCutWczea8FfqjtWCHF5W9x96xvydMZeJ3RNWubTrTtzfLs9F2XkxLMxoErs",
  "key24": "cExBTTvKWFQ7aTR5cJse7kFL5M8pwvuJDsToFP1WVLdjaxg4d1QpQzLLTZDXDV8wVdWA6jmASWF1wdNGcUuhHhb",
  "key25": "2pQ41u2sNddmvvGp3aPhWotcNQuZwr7P9zMpDq3QbH3N5GdcZyJQCUbqDNKfrrFK2xJWthQC2LVreUtZch7WFm1E",
  "key26": "5goUfR65HGjyErPRFevSsQZKwdYXM7rxbUAAWxhxJy51qmMUaVT1CW6Mn9YZfhqer6A23PphbgHYhLEXGo3Se8Gi",
  "key27": "4MBcXeQk7UYhewY1trU1JbgHHCnUHwFYmgcd9epDnumwXQyvPjQBZ7SBiBLBMNZTmwQJvCtmDeqdEwc2A4iKjCPW",
  "key28": "4NiKibDQKFnx3cjCQ2sDGvZZcdnhjSUbSgNquG1Mz7YgMX61dUkbdjws1WM5Lnp5Egs8qPbxu6rmfRV4kwmr2JAt",
  "key29": "GCwza5a7NNeF5fAri4aREud219B1sdiA9F8pBWmKvV7CzV6ZBuLzw58yT7kPLWbqdpALxqCqZKmNsreKkxBg6Qh",
  "key30": "4TqcLq1c1ZBHqqjPw4hvX8SAP3qW3P6qUYLQzirsW3iT2rRu8hW8LRH1rCXjZWwKCik7svynQAi39XSFWzqPh3UT",
  "key31": "3co9cC3urXtoYQJ2vrwQBMKBY7yTpHTXe5Wa6U9BCi8zDo8KzWP6gzShbGXrWn9SB9WSk5X6pNLmEaTNDcvFvS6N"
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
