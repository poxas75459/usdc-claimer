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
    "4XajhZsYwA4gzEBE4fxw6ZWWGbZPd9H9Nwk74Ez9niwRVDB3uChBvHhFBzhUwADpXLSsuK9u3Z6p3p4ssG1DnWTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jqQqUNUSbKphEBVJjh8YT8eMJYJQvHcWP2yf1N8geZVvBx6igVtQRB8cuRd6QDdv4dtCrpw2TWD9ivJTNZUkf",
  "key1": "3ynJSS2gokYhMvfXAEsj1qnwZVthaHirs7zDtBWUGDptJR2GT56doxsHyZYEUS6PDrfzV6uY6AZUWmGetZrJ9V4Q",
  "key2": "4w8kaUXfHnUUcCUwfeoKWGw5wZe3NYLwzhdQuuaPuMz9qyguUSqxKg4MBE5id4NtDhhLG6XoiErb7QRrZenQM5b7",
  "key3": "3kjVfHxYhQjvfp3oyLARjUgGkD5hfsLhLAycVoNhrmteqjJ5ypz9EmLD3o4foLt8A1W2bRcrLhQHPXiB4dg6867v",
  "key4": "5RYpqydRwTusmC7WyKeVRCpRzcuRS5bDUbit1oLtkjHXercrxZ9aUJrTFPyoM41tL5AkRkejKkqnMYjSd5sVdHgr",
  "key5": "2unmF3UrUpHrk2kdRJsxdmY3TKPtkqLKv49YvQZTawDoFHKormgp9ADyYdCpvvAbNg9DUzscVaAPiGJnZRCerMg4",
  "key6": "HuDeqQ3r98ix7h967GAsTENGCnVqk8tfmngsZznPqLHyQwkvSxkSm7B7XXLMAEWfmJNb6SkF1yQQx8AdcC9MSTc",
  "key7": "4DeRjGb16725ff6Qz1QEjCLJmimJcBWFMXm2HFsN7WCVhPgLEBLkNgPXxcpYBLoThPjtcsMVbnn7sVLfxvfhtoSh",
  "key8": "5uWyUKymTuEsSFXeQ65TWSP4K3urMGubCTJTnoYzALvpE5M9Ujn1eirw79LgdFHZ2VyxMXEhiZLENypZiLoTTLQh",
  "key9": "241oKPGy8E969KG2X8TaPYoezRM24whcBHydrcakRjMkBbP8AAoR7hvuPmrSY9xE8G2AvVPynWZnwdmSpcGoyqjz",
  "key10": "2AKDgXcitBjazGGcpT4ZPmGHmE5Yx41FkDZMqNP9BjbpLTsFiUfobG3JEYupAJYoVgHLqjrNbn3eWCh5HWdiQGkd",
  "key11": "5jETbXxrTvoU55TV5ACpTbkHfQxQQzSRh4MPeyAGkcy6Mfirsjw5VARjmedNcrEBvLJURcSd3fp6VAs3X2noTQ5v",
  "key12": "GCGZCZg9XTJT66rzgqDb4YKbE84uHUXL2mG9egEmKq6ExsgYPKhunzbD4dixfCseNKdVjrNEyx9tQ2qSsfMt8uB",
  "key13": "23DXFmPzSuX6uBEVSxJ2TE8oFr4r1mDvVbU7YxtpNZw7r9egrgpXDdJUwKF23qsNgiNEQL511nheqd5bhzNvbWGF",
  "key14": "tuQA7SaGcv7osQH8cXYDnt4nscU38Fob5HWEtzuAn4B2h4uhYTB4cenWkCx2yQHWYMrnjek7y1dWTHjmCNpV5cK",
  "key15": "2jEjUoLtemj8AqL9PL3yLS9zjEaPwpnsXMcLpu71reXbLKMSrcgP4Xbie8FQMqSdSS6btP5e9QXwTd58ZRGvt82",
  "key16": "biEViEUqGBvojQgvhuQkutPLS5X6VWvNUiJdRxQLzrX3qysCmZujEfzY4NMRzJ6HFcPKnKMv4GdREk3o4AKer4d",
  "key17": "51fuYEbr9iUHLYpmrKxgPEnT6ygdEvYn8KKkSPg8ZwY7n6DRaKxCtF8r2SX158JypnQpk3Lwc3uniBEJKBKX6CVX",
  "key18": "38BYrmeDkmtXV7rAkxayC4suZXtAMxx9EfBLFnrDJHDEr8rNp9MfZGxbB4rCUBHnGTZxwhMu69uy2mAyh5rLt2iy",
  "key19": "3zveHnewsbYGAXTwHeWpGD8FwMv5PBYFb7WX7ch4GAbav6yagqUPCNH6c9nYY2shCkz6czh7AGh6qF6KFABMA6Qz",
  "key20": "fnTQDaV1oJPGaAKSqGKU4dVJvHfPNaXNSpNwG2H55B1og5N7P429yrTwqTs73qDh57gU5hZKiks3rBGB2BoqHqE",
  "key21": "346RNCzXAVee39BHvF8KpWpYh5DPQ4AJmhHcCA2AHTFCWNPxuRALYeKLyAYqnXdP5xiwgvAoSVZJAmqGuf1Qjvyk",
  "key22": "3aFN1VYjk4SeDFHShQstsDPwy7Xa9x93jNXPrvJqoyuhBsqJgxh277kj2REWEa9xXhcCmTQfTxZ7yQo39HCoGEHv",
  "key23": "L2C22q83ZYcR6gFknoqgzb4NQqFEmazGYXKaigBQsR8fLr7zS9fzCW8v9GE1B8yf55GUJSWTmyjD4DmQKNscbU3",
  "key24": "FUW79hQURVhgTobJ2B6VhhE6kye1wKThDUday42jWGYBqmZ9ouY2yiHQqvZXQbMx5d1WN6EvFottKoBpxRCxqwi",
  "key25": "3WuDHamSSH8VJmvtMLZPNWSxZnzQXDw19jTH3fPQbAXrXk5Un8Fyww77wg4yUoJsdpXTTqABmxmmNUc79M6ZMvXS",
  "key26": "4uEzdrcQdLGKunpoczJD1H7kwdJi5F2QCSh5iHjByqiXTQkZZheNZvjLqpqdTQWwxdKktMurTfGY5HvB33pmZomN",
  "key27": "4nZHVSZSuqPYb5Pav1cfsbHoyAPp9f2Hg8Zf37LSRBSw7XgzgWZcrJixSZ34zNrhyePBnVBVCHrH7MF34meYhLhu",
  "key28": "3K4w8tBqiBZQgq4V4eCLDNj1TyUWH9KpUqJXqrhjKArJrXW8gkg3U3DmdYXeQeJpj2oJvguw9WKdb11zWfyDLw8c",
  "key29": "4pUoP1XPqMSY2yQmjd3KvctPAgyQRzKzLQuuN7mWfbuqGoRaJMvsrymYaSDBsUNayE8evCGmiwoqd6on11uFFxb8",
  "key30": "5Sy7yR4PYZav8MUJf46wXyrXbzV3fYWL3jba145td4yEBKVH3btWkDkGKjbnaCyPr91biUh7pRuKPaXN2MwDZs6M",
  "key31": "2HrXWxJLzoytWNrqK5ParNNHWooJh1wYA39ZwVwoSv11Lt2B4BtkNsFx6ViZbK8ZAE4CNgQGqWLp8s74oqLBAFp5",
  "key32": "3tMncBHmNc7yHgweYL2BrsXZV6N6u2Gb9mWMnRzF8W9UFGh628Equ4rgqbSu7SHTLnSM5BP87EShUBKEg8Z6Urys",
  "key33": "5voEh3dfYo2J3bwFx7DDJ9WA9ceAbk4Gjr3mEpuhyRYvScw8JAr7ZaAQW7x8hteG6WeHRhMStvGpd5jRMzubZBGj",
  "key34": "5Vdwmm6jgfJAuUv8P4PWJEJ6F3KrYdfMoMhcXipS3Rw67yVNN7LrEjNFQCUm9wSQJ1C8oTwy7bgPzWgUv1d1esqb",
  "key35": "2Xt8NRMVTzDs7fFemEvTaKchAnox3hMVYjBqrNddzAQSFqdMxnBVLVYuBxedPCWYmnoZPw5WHfLXHUR8QPnHzchz",
  "key36": "5x3QR8dDCSvbqhRRTAxkeH3V9LLGje7GfbKc42PXK1kQQ5reW6vnyEdBUhDKKFm88Urf1ttYwRbgGqo8RBZ5ihUp",
  "key37": "raf5b6Se31LqkPsbd9wDtteS1cPVkoiABAkcm4U1XUQyohWFFrJGAR9KZfZzq8zUVpuH5ZV9D3fQgawVzeFHtdX",
  "key38": "2RjQYGXqkuiMWybXjvNbFYs2xmWVbNNktveq2Z2eKvVUCGYU8yKXkBaDJ67iNh5qzs4qvJQuqQQx78kXFLpgKxtb",
  "key39": "2F8WGgEHTRY1JcvNV566WeKncwhFaDZceiL37CAG9FXFeQcZrPLanGcWCZjuRgJsiLbRP9RTBN8GWK2bxuYjBEsu",
  "key40": "23JvbZXmqXbXdvEXqj9U73jMtRyLNX6HWsRXJeSoF1k71wrtnVAcWQ479pcRhfi2DoGad2s8fzxkfo2ZqzvUQZ9n",
  "key41": "3ekSgRxTNJyNCoYr4jFJV3RiioSoshigD1g7buv8pusrySVqRgXQibi14ZbVqEGGJtBmdDJu34mJgeyCd24kmT4c",
  "key42": "2hNjerfrPeQaChwA7PE651HizrzbmujoW1grb3wd63XicZA6xgHhkDBzcYS8RtiiWVqw6eDzaVBXG56w7VZ89wWa",
  "key43": "4jVDpZhRzuwpQKQ16UnWckghgLE3UWDuvjX7KXY2HbUj7BAjWf7NRpKB1mEZnXA8Vgh3vwuuVepmpiTmaaiDScrz"
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
