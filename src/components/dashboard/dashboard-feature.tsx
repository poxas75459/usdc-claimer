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
    "4iwuKAQ5mHvtConkM7pGvmAg979agz4TfhJVMGXaXQshdjJb6bKjruvyb3LTM9nw6QpdffT7ksawni6Ubz2Hm2ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcSqTTFHKsJ1kuLSa5viBkgdDr5T8NEaBckKn3suBwRza7SyTh3DHeqJi4AcDY2qfB3siafG1JxQYLZQrHkEuRR",
  "key1": "2GQU5tv7y4D21mDm8oa24rJyaanCSB4dd8ZgKyxYRH79kLEbEnWeqWvmBAdo5WQEyGBvnLxBEv7fD1iht7ECxuxA",
  "key2": "4NzYbHvjKsSf57gLXtNPgDUHFAJPQnwiduAKepnPgqU3Rjd8Y1dQGaArQVkvDUKbwRWS7wuWzzbuabf8SUmUAKmt",
  "key3": "2dJVX2V9TDsmTVoDdSzzMWECr976KE9DJU9ptKTY3fTVXKS4wPpQyS3qFcEGoVD66gGXDK8iXGpHfpm27wVTbEGH",
  "key4": "4jbhZuuofizoSsjEMb3hTGpH5wYayLouJE3tqmzsx5cfNC48TuMX5NGJiJTz4Xykw8aX2b66povGtqJ1V26kkXMe",
  "key5": "5wh7jeb8WRHxJK1aQr4YtWM3PtE6fi1d3uUXYU1Gs4g9RXPB7uiwyCbzvoPtiuPS1NUKxA8jDAFcEjdGDiyFHsrY",
  "key6": "36NzZoxCMA7RDJfdMGNEPRTmkMvUBWnGoZWYW9UtwtG1hS7cDpB8BJ95Y8hjpwMSLnqQ6GrjzVFT1JqB41QBnnVM",
  "key7": "6bAji6p8Jx1EMkHkb7HfzoM1akvaAEsAPMJ1iZKc5NVkQeVXioyaUV9BzWnwVUUDyk3ALQNddMQbv3GhdkDviR6",
  "key8": "2dnSfH11kXSHbRoFDJyWAHnZnwwPuUcnLkWoyKQ2fdeXtgKoR8yxchL641bXL887XHSYaXPaQx45RuyHgN4HUXVx",
  "key9": "4SEauLRLqgfp8DyT6dWgZM9MiiykpUdynGRJip2AWTidNrmy24vmyvTKzNcgucs5aAQP1e5CRqCCjJYAqZpYdU3o",
  "key10": "5BkGErAXorw6ZtT7xdepyEUVVbNYu7JeGd584PXtemQrgnv8CsUJs9KXzJNiNZwzQ35MxPM5HUHwzZunqPXr16u5",
  "key11": "5xnAhChaoGMWm8xn8aLtmvtpiNzNQJFUVgYpJxi6zNrguqdh8pmhjvks1qVLxG9tbyfLTfRmJSd2Pr3P8resgoHn",
  "key12": "3Wun9U8oX3ydJ5n14T63WvG4vhovo4e27MgBtV3YL5pbpFTQ1xdEhVr15LaGbrEGCuC6w9DVP69KmnjUXy22LQHn",
  "key13": "4fF5aRvTmNGnfRTYPBPysXf3TZixwPxkXNZktqmDkGwmYjG3vvKreZapzD8PLKUdrhzYgZoRXqd1pejq1jEMvADG",
  "key14": "2EwpSwKpaAyfSq8fESs6ph3RB5j33Lm3nS5FjNkqAWF5JhTiTSWNkyHyfZ8cSWfojzb6EH7DHFtyfoU3dfN9sVYU",
  "key15": "46kvxGDWSaouur3PmgrF4Jfq33RimL5LkNqUDbC6a8TUKeBdQuoHQakpY69hHinqvKKk7fmjLZYN8iBemx6uFJrQ",
  "key16": "49zfeLevBhadxzSPGKFHV9wssaFUT8gP5t2vDcuLJ97ryWEGssGznSdzyQATGhV9MidYxWkvcidZYCf1mWNtQumk",
  "key17": "2rsC27TG181CPk9LanaYh5RDzYZrCWYARTQdqTXM7SU6xQ4NigKGFvJNx9AULiQP8vJbCTEvTDX7SVRAQ1DtXxms",
  "key18": "4JxDw6pVQZwe6onPQJBV6gnZYyQgGHwVG2FxZfZ8BJZZsq8h5N46ebJocAaAjUV2Y8DrDsPf8ZAGnCQFNwaNAmMB",
  "key19": "3kAWkBPGiAv3siPSWgh7etTPd17C9tzDyn9RN29Q8PuDyhLRkcT5kEJFERYza7P3N5KxfYu2Qu3JgEKViALtgE3A",
  "key20": "4s5PDg6sVyqiLZcYUfRW3JRPym7wNxC4e5iVWiPJuVEpxt5AAmj47zK48j8ktMMnRjFNQpqKCGNtDjCnyepqTRBG",
  "key21": "W69pXdnyEPwHFqJyEzCrNjYLwUGRn6FRJdrhNhjTGGdnfVZURq7J8Amy678roLqxhHkhyys8xi24GyWLhG5QT32",
  "key22": "aPthqKeQKxBvLBqRpEA2L3UKqKHeh2ii7YYRgNmrHGcmCe2FG6hv7fRqf7eXSThpjWjDCewGkB735FBRGyTxB9F",
  "key23": "3i2mzoJSCYWKxCPBLvYqVWpNPr75xwQpWu7h72nio6shYNdBBhX6HToKs357Hz4FEvM7wkTV6KK58bsR4qQmcSVu",
  "key24": "3zC7qYqxZv1aEc923W26mouLcH3qStoMhAnxyzm7e8AmC9X3v6vH3DiQkE8vspuZowdqMwSps1uM6Yt45jnhWHsr",
  "key25": "4WgF92hG7n3ny4iEJa7VoPosatXjzTZjaAsYfKdc5Qskw69raxBLjUo6hczHmUSaP1idZg8oMrmXiyDdtNAhAvgn",
  "key26": "4bNGuUzPjSzKmusRrkeAp4irwFP9r79QZHjvjGRYhYevzVsgjgoUxsStKrUJxqMP8eo9p3SnzmkjzKM7PPgLVyJR",
  "key27": "2QGw1Puku7ovqnFmSebvBd3D1fyRaGGGfzvMuz4SAc1czyi1PRY9rL8WS5zYGBa4LoDPAxv7xLwUciG94haw19yH",
  "key28": "4jQKErgmoDENwteXMCMMK74bZro4sAezjkKqrhsomfbJFrphmyjRtCZXKFLeZNJWFGTcHpnNNxvuffEzyVm8tCAd",
  "key29": "2DKyrm9nng6f9mDAqA6kk48j3wDZyRfu62EbUECbBLN6sZ67GbmtbfLS1zkABrJkX47k5mG25jYDinb4HgwLQ88T",
  "key30": "49JAA3M8zHDDJtHMXgPx9A4Rktka7joU9659hCUAcPqfeZ7hu6tqxQbDpM7yeH1xHEHnR9RQmnBUJ8pKweUEiz9X",
  "key31": "ZwLSXGvi3QzXoxtFgaKsoDHnz3V7SzGxfXNq5E85Boo6otcbZE3h7q1yzRaUqssL9yFv4p73JozghkJ2Ruzttut",
  "key32": "4dAbTK6zYSrmyu8PH6sGrB5dcZEwjRbeoVKVkh1Mo6pqQH9dW9BXo8CzeusDbgnpCkwD7wPQEMYE9JJe2xMVDC3n",
  "key33": "3TUc1HkcthZpAEt7rCB9FZX6cJakeT1REiXqFfsj3ncMRek4vEEB2mRikQRdVHVbTEuZQiDGs9SRcoGLZKotRvDB"
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
