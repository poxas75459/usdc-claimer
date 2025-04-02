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
    "1FZ9MevChV8bkVNNHKC9kBmwgQAAbPfpLjfvR5J6dPUYAHzUjcFXF9qCNV4JyGYHRVckqq28uVRXNFjnGxJLv8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9csVxuGfxG7QEXQRbyUkqNAgi4VtxXmAqrrtok4mSepLkqoysCYPE1JSzSnRMUK5Rfd3q8cw8EHChugp9YcHZU",
  "key1": "3oQ5DZ23ntuAiV5mnmJS9MGSoYzbbyuuuY7t9EVChafGHu478ezzgC7W2ZaEGAVvKWConQ2Ccr5NtNRPWp9SYi1y",
  "key2": "5p3wH4XPczj72bPLeupUETWeuxYZ1pgs9W2Vt1EQvMxcH9Naq8DLrCuZBYW53GCxJF4WHKgMZoMRSERAAqxZykjg",
  "key3": "2J27ivuiU9xo8u5bawzEmZK56zBKACjdsNkzRiHWa3sR6FzKfnweRmz7VhtX1fvDfU8XmpGUiCUZicmP6uM3pFxc",
  "key4": "2VEtks5RSzsDzMgoapnH6ZBwLsyydjmJvSuq7XPmVeV8r2BCbqmbQsFk3sQhdAk2YTpgGZdjjyA6GeELN8M2Qd9N",
  "key5": "5pdjd5DLnQoRiBS88MksKwxmM9guBBPuUh22dWFg66WKe86WHW96ETcZ64WQY4JHyEB65973Esfwc9m1tCWcghpA",
  "key6": "377ErSiySMFopuRX6znxjmnxYcaXBUJcNxciis7XEHfk8o7NPsD1XxAoJm8UHS16EZcZVNhCfYCYZb3NPsdvpE4W",
  "key7": "3ADr3zB6gfPiee4jVsjMfjuBNCv3iGoXuDGenK5HzhG8JGLDYBnQogriJ47VhRvk8mY7P2PRW6mjbpAvvjkWCTJS",
  "key8": "2X1r87XhgdPD69DAkpnVkCxSLH5xbyvV41DqirXjtYKhtNm7UAb6aPMPsnrAR211TFVNRgcMRBUCiRLmpvaMVrY9",
  "key9": "5P9WearKPJdVn9ebz646Q1wvXbb7R7qzdLHeaXX6JuWcVHqp2AdrQUjh2aE75VTwfdnhCai2rfQzARRPPQjwQoYp",
  "key10": "AsPuxzLmr36LHrPW41v4322U5Z1AVM7Wk3Fq6mzYSjVLsJCqxxbArW62Jjtq4AkjdQGDdPEnB5iKJRhGLhUUbVX",
  "key11": "4LQHSh9XCKSALjRrv7NHjb8zCXrgHoHDQ5Quq9M2T7LtzmJz1X5nhmH11R7eyh8VmLGibzpJBTem6x7SV5tVEoBw",
  "key12": "2bvtHKEjwnBox33egC3YXK85pLyMyzdRpjkbkH9L3NapZZShwyevWTQbYzHGvokVXYFz6isNh8ps3hA9bmQbH73K",
  "key13": "321gDwURTfBzxkjjYWEAj7XdjEMR4nriqgpYkqkLGvfRh7tTWbWynm5UaihcWsNEkVHAgKDWN8yG4zZNvFmSGfKR",
  "key14": "23EwajRhgggDzeBxvF7WekL6jo5mzNjDCKxog3miCp5G8VGiiP1NonE7gAiPuaiAwgc5EFSD2zxnHADLGVUD4Z3C",
  "key15": "JQMft5thcmM9cgZU6ddzAK5r6BzCBfN2NrjrvkhBjW5VuwoA9bdhvJUfVqKfFpNsWrghj8tQEnryhea5vewNEaL",
  "key16": "2BRCLvDfGkKLn78D4b7GbjcBN91WATDqvPAnvamjRLyuJqsC2Bm4peQmH27z4qJ9wihPSXM2Pt3wE9gKTQQ6XQ49",
  "key17": "pCQekZoCijxnVXr88mL2N8FgpHcFNLGMze4x4u9jbKMvnNnf8rvdGFik3xs3RDBzZFNUHzbnMHsq9Wn21FmhqE7",
  "key18": "2keTYhE8BfUiMnWuQTrjpyQ5g6Lua6Wg3pPXpTdYee7rUsZNCZsmNWRQNZyanMxU5FJ5KetagjtfREj98GaVzTuH",
  "key19": "5dfc5YrpWvZ2WJQkEkDTUTy3jXVdFwPhdZ57PMNjTSymnTBEzcUZZmgAJaULDqbLTs9kHQg2Wa2ffkAqqisi1ofH",
  "key20": "2Se4G9sL6WV5ke3T6sDYJJtGXztFqjKkFAzmXwDvyd6B3YMpAbUMvnme7iCQVPQUXPG6RtUWYD9SmMHCzZHHcCMV",
  "key21": "37F8E4mtazENxKRaeQiub3QJz6NfnHnJT54XhMGFCCoFNuwcn97K3LvTi313LbmK8JYPjKTRt6xmMsspxhGK6Q4H",
  "key22": "3Sg5arLdUCKaCCmwVVVrgQmZDRhYo75AvJNGZUWQJenRMxeQUYdr7nxKCVfKiMMbeQvvFga9UUqbSjHV6TVRLrRH",
  "key23": "5TRyGnCsLEDcHNXicrMuhoDjhhCSEyjdCAXZ4TYPw8krVVPPDwGfyuUcaaP2pUmB4StL3JqKwmneKqLc3LK8MZyr",
  "key24": "5Ffjpw3AdfDScDdY8gtzPsibZUqvjz78U76pmWJmPgpd9CzKrNLPNzuFwFahs29Tbwrrwt1ekNCki3TqTQCpDa4f",
  "key25": "2GaoqdbNUw41tdAVCMa8yyVEqj9JP46RELtCTo6hovXFcyEAqwEMRwTAKYVH3YM95umHtns3h5CA27gNqeMC8NSc",
  "key26": "DWEqR5TcvwNZcVYswnzVonLg5hnLQJrHqqaSEeAFXWwEZC9vuNB7YZ4Ez97wRuzq5mWnXivkYqK3YdrFKjDGzQC",
  "key27": "3r3mcfKTDCSVzDEn16CZcrkrqz55GGwFHsabaFxvHc9zeAzH2RRhNd2fnd3ypjaNaahbP8DFMcVRHJycv5xpmbnL",
  "key28": "427JU5h2EWEHbYV1ukWG2p62NA3E2JpFUvkbjsShtuY9Z3uvjXuJYCBnDFhMzbQSbAqfUBQA6r1tPGDUXSwqxdny",
  "key29": "5CecUuUHFUZ4Y4iZr2Tuzw3U1oTz9ayhkgEwownhqNtjEbibSRBgHoCkQSvaucs4b6r7zSgNPMVxrivPFhs4WXq6",
  "key30": "eok1iGAfoNrLX3uXTehQZKZ1euShzcYRvsCb2PDSeEG3eZ6Xd8NkcX17TyiF5MdstofowDqsphcNGv2wccY4DeA",
  "key31": "5cdpr8s8P2gT4aLEMHoGcTxBBbuqmAQBSJ5dSBFwhtQNRTeS2qMhA9KKHsoDybrHkFukRmr6zWLr2b1mqznTqQTE",
  "key32": "3k7cE6R6mTJUAzodKNkeTvssYHnRQSGWXvdXeuJT485Who14GD5g7NW581oKcb71U2QjcdQvBWKumtUhVZstmVUd",
  "key33": "38bn12dnwJ3GST8aj96SrcoVR1ry7NAuDxsiwVf3v6KHuFV8tqGPMcYC4q1rXgSgsNf2oUKEymYjh6EtUjaxb7tk",
  "key34": "2EwJ3JFcuf8EvnDKL7v26y4HQSA9WqLgP34ig9HdfUG8xadja1zsgDktBdahhh43in1DZjXpC74nk9otwjjJWi8v",
  "key35": "4hCPAAeJkGBKUJ4xT5fVbDvKhkjmHiRCnt6FV6TY9dZ43A7YktAnyLgJbYDmqAFWDzeQm5eYkjDmh4wqwZuPJU6D",
  "key36": "6239Cy8ng8enhqCr2WwSHGhCBwjRthTkyUvUib3Jr2Bg3d9DfidNw2SS3E7w443YG46sGpdbhgiVq3VT8kiuEgKg",
  "key37": "3bTYZVK3G2w7PeQahyByxacMEJSy5eqaKhGcoeQBzPoD5rsk3fMurWHhHyrRyZALeqQnjwpRQVPjVNYMqjpnUrRk",
  "key38": "3U2qMmcJVTZD7K9QL9u5mVwH8mHrjnZwzDk755raXjuuczmgtPhmN46EvWgdJMcwKJ9U9avHPe1XhfPdTqqmYtcu",
  "key39": "64DuvCijfxLqT71oN6Ku8jBhbenu6HwHP39LUfQCNA83Yedjk6XtR2RKta9dy7TU2yvQLLTWBc4FWCeyNJYLPpqs",
  "key40": "z5py3uqQgDyHdvdMGcHZB2s6jfjAefzmUP1ijwS8TpPUpcFkPyVZjhyw4iu7biqj7zsbP1J2f5hBUo3C4GzxNfB"
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
