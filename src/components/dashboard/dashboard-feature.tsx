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
    "3yJ4Ty516HoZENuNQ9JRmkmRn8S6udiSAvvXQwgWYU1oG8m8vwyvU1V19aN8WetphomJez37jcEuTuFnyidzW22o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45m5XkFmPepZfSftjjsmV8EiRNU2hdEa48SYfqY5P7DFfyk5YjhMdzQqeTgv75PG1gTxSqBNr7kLLPptiM7Fjdez",
  "key1": "iy967TSocF2D8noEVRxDoVMipWVqQqsFz9rSUxfRXU5pNQgRRM2YvZbN9CdQXvj61MZeAwx8VfQajcwaQbhuv2E",
  "key2": "5rZx5w7WdtQJDSo4oxyaDWpzq7Rk7eYGtNvCJrVTed65nwzJyXHtkPXBQvYo6WxrKW5gekhgg9vHrQ3rYJ8FuQKF",
  "key3": "5L6hMd6RzTKUrS8QGfntWYqT1iAQKtcooHNj9irWTvYrafMnhS4qFjMGBLUWjA7ecwWDcKaWfNo39nBXddsNYXKD",
  "key4": "2TCK9jX6A8ejzabFs3ZfUwWZ4zvDDWPUYrPqoR1LdCpWNaVXhDE16kQQfVLUDa1TSsL5CsjqBkNXmTZu3d9FwiXG",
  "key5": "4jZLKUwVBNFGtFA7tEvupgGqDrV5j7bK66HrZ8tXoVSBcvRdPLuHifsdUaRVq8g4fxeSHfmGyN9tPB49Qd1Rw3cz",
  "key6": "5YReZxDySPtkpM9rH836tXafP3yhQPog4TrhCWN6Kcntj1T23n5sNqytYpo4AdXqcBdzja6pz7utmDwc2AbSWj75",
  "key7": "5ULRNKopXEYkXyUzMFcYVteT588PbwEFXceXUE5d8r9mC6EngQkXNGSKyfecM4qHXfgbjhYqLQXs5UCoTPWdhsd5",
  "key8": "3sr1i7EjcHHiuVjTvmvHE85MnuVtPTQLpNVePpCTnHz8ocwFYnhGv1g5TuDDoGse5nyBWrwXQzPZBAQhqTX6eaYM",
  "key9": "PJt2HdDHd4XQCCtLzkHVqd1oQ5cM56HDadUAmJ29yFwjckFahYqXZhU65YcbknFdWN3iLwcpzPZZgrxf5UqXGyu",
  "key10": "2q4zAgpQ5y4H9Lhqtg3JeesTmFLw3urWRabsLm1AbyiYNeXSmaV9DRmr988E1cotjTH9rxP2pJrYiQYuPnGF7Fqa",
  "key11": "546nc6pojq57NaNevmukipDm3kQtN1dTNK4mXPZNCi2kFEbLP4GPh3irvgBGGpVAXsLE4wopEMKLujydK3uCDaS7",
  "key12": "3pGjRe8oGdfGcTgq7ba8BLBTDg5NxZ1Mk5tRzdq1HsuvhMpWa6ndmS39urL76pCh1f6hv8TX5pSkjmSvETzEtUoP",
  "key13": "48ASwVBxAhEMcBmWeN5xhSw5SayHGkCgvXdFrh8nHku17RvHo1ibaFK7x98uLwXWNEsMEfHj7SyukPLutLAUzPex",
  "key14": "4ZWToMhVRs5mJuKGbTqtcbVqJybn9nSebY9xamxD7pvqiQkVoQ38KTK6229sqWh9zYMku56oLpqsPKZFtALyEbH7",
  "key15": "5VvFdsW2SnvT49Kpj1CBAPzA425TkEg4FGDqww5E7FuMsjEbfcWx3YAG6dojN6ihzxzasMQQ5tMsm7LmxuMxLhKw",
  "key16": "2AN1TWqDbhaajazSuRvwrc5mjWDDq3PaNKLp3KbF3itH811rCoaPYWjNVGjuAtwiJiDRe1a9WjpVSRRUbDEXfZRi",
  "key17": "595MLJLG7wiT51TrexLHXSstXT3uf1N6xNVKRePZ4WErhTyd4AcnHD7eL1ssLSRtn987xy4rBoTLQWzajj7JUq1x",
  "key18": "5uLK2mApBy6gT6g1SzKEWKZtsZjQE6brTdHWVVgPoyNXU5ntRqEHjt3oFYaQHDP7HZV33pVT1Wnm1VNC9yfQTeHy",
  "key19": "4dUjRhfjHCh74k4pk5vvF3UuuNqu8g3c9SZqJNpEXRc9K1EWxu3sFi6XNLv43HiGbEWterW8J299YNKccL5kUXXk",
  "key20": "57rdq3LGyEjdmJf2nPaYjwJWe6P4fQZURqorT4KviiJnnKp8hd4BWjr1n6b3hPJEo251yjcZA8x7TkxfQMkCBmq4",
  "key21": "EHXUmJJnFRgXjjiso2HyxYVSChYThDK2cfwT1AyidYqXP1yDufQTQsovD4JRn6ay9Hhb6VyHGA6EpKiNBbSZRER",
  "key22": "2DiDmyoV2qbNzGg2o4xDiV9asZ8CVfezCfz8qRez6zumKCdCRLMhigiSKa6iz4h3H4PjXqejKDFeMyWL9r9Ya8gt",
  "key23": "3rkvPCtJ4oekXiXSrKB13sABZQuZjtDQVc4Fw72QnUR7bjAkDJhR4JXobTzN5gTNBSaNMokSGZXVi7ckNJfUpmSN",
  "key24": "4NgVqxw2PEovq3qEPe1J2X96zaYTVM1NaUN9CK37yTasmXjkyc6ki8k7fVJ8xHqNBAh8Zj9zzdo8LnXz7YNrdtHh",
  "key25": "39HRJwkGmmUpGvLeU5dbYtNW3HDD7bMBZfFKR7AFWjzBXk3TuXiKDwp2CKUfb9nramWYsb4VTZHTjhx7fip1JcD1",
  "key26": "4wnoFGyqkYFo2oi3keu4ZPSRADcS9MPbdNUtrxEzV8xBX9eW6CbYBkhZtKvJwt3YCYCbDp2HwnW5HjHNimYG9W5S",
  "key27": "318XZjSBCpmVwqePXHhmjZdBzXPbDnxcbhwu5HjcfdbMDBV1tCK7Vq4nsYb4SmhHhjuDZX9Go3McWpggCogrfFKc",
  "key28": "xf3TXr2bFNMAQjw1PzresKiWjjuZi97TwSruHu8PmQVBULHcmp2YFnziqMgPHsPEbzAssosaHNsisuSzjssJmzT",
  "key29": "4xX4zYb1QM8g3HT8a3FaVJFwSYm7ToTcfmXrPo3ZznWHAxK6dGRiBmHnBrBP24ant7zmMPrGvhoEQuuFzHBhDSco",
  "key30": "AUXm2iU7yzp6qHi79J4zmUtea8zccUz7vcJqGsqftdy5ozHfyYVyVsuWWJNU4uECRYxGb9mFu2fJdNMGzzo4bDc",
  "key31": "5MDNk6zV8i6x7dqCX3Tuz7szo5FRFzM8nnrmuBke2wuWmoDKNdhptpbRym76DAJPL4UM7rhW7rS53NtpnRS61fvt",
  "key32": "2d5x4ifZxm84JdmTUxF4r15UUih1UjRJ2PYBsPoF2oF3qmMSFCa1viBtkwR7ofta8w7GpjJgTJJbCn8k4xTPSsbg",
  "key33": "5DjT9D3R2gf4faKRevChTVXq1xY18KndDYg7bGKX5MdPeTrCa1xQ4i5ge2sMn18otbgd6aj6GZCFJk1J4Dk2KSS9",
  "key34": "4BPgCgAJNjv45U2tUq968d3axjc8cHVBQf9z7Pk3ckUkiZUQ5KUNMj32k1FaFx6zMgqynTtMQ7pJYuMtHycgv6sd",
  "key35": "56Rv8QRc3gssyGPpUPApKzt34j2uCQXA2h1EoEcbARd1NyKkuknXdaUyGhyWYSdoDpqK1yhmXiS1ZXbaNxsrkGyt",
  "key36": "T1TbFZRix16ZQq9KxrQcZmuoB5iBM6wpryzTJEmkYT64b55nmzHxTzdcaQaQ3qVr5HQexYkYXCKbF6NJDzDz9Lm",
  "key37": "3qVFhqdb6W1Ewpb46UaAJH2Q3HUXZTvSp5AgCwRvAJtGHv4jqoAmLrQikn4LPEjJDKgvaAKWmYKdUMqR8ABuxHCL",
  "key38": "3AQQxnCNT7JeYJKA7wk6wJo2Rf8XS9ocLaip6Bm9ymjr7YNSwbv91aTKwi4xUhArsfeH66ZavrhX3LcW7aQUWeRP",
  "key39": "54NovhW2464t3ZqoB9KJtfRTMhpLTFtFzKMstKEFXqSrQVu2SGf1vQDU1VttnYh6rqJURDAxDa4dtZMp8f9MdpYM",
  "key40": "46MX2eatMsvnzUw3rF5i8WMgm45dCrXX5A5konQQvHQBrEdABUNRz2qRLPoNz1q1RuyGq51v9p2vJJTmwYFwZiLd",
  "key41": "4jcp97RJwn5VMxwe4KVJSFdxVDtdjDqRj2Du6xdBdSiUaYM7dvk8fViWzyVZxhyyQtLAXfqNLafuB2NT6mTNPV79",
  "key42": "57pDQVzdVsNYinKD3agkw9oyEgJMuymZXMQvztEYycSP5mz6gpxUATMo22EeGDxLZgHnVCmwVN76oFXVjb1PbVUc",
  "key43": "GafdoAPobNBxqx8SnR57kEuekFsMebwrhb4YiKspFMTDXE2CYtXG7WrgvhWrCzPiT5KUQAqkyrR2KghaqbyKGtW",
  "key44": "BAu1PDvDrhJfv9EQnzn5V9djhdVFXmTJ3FAcbSUfaPe1y6U5XWkc9jvSd8A2FcLYgJS1PdA5dsN2MLAsS29F2EP",
  "key45": "5jUjr8CoByzNTc5VeSE9mo9vhQ2Hu6LiTS1P7jgVgQzKCNvUyHXHGYT3ifP8WwvyTqCzKATbsAehN5iqsubvGSQg",
  "key46": "4SUF2i2P7VbsPHfVEHpcnj2qguaxEQaVMc1EBwbmuFPpduzXKHtr6qsjCen1jGNnVnP2z4eN7rJ72DVxxER4TLYj",
  "key47": "5pyeCafy3pmQWmeRSwDEyrRgME7WPBRMdXssrjhW8DePebcacNhPBR2w4ym2pvLJYQDnUL8SqJQUCiH2kPqpAVuE",
  "key48": "3dkXCfYP96984RhcekzXr5JipW86pyS1WdGnetAhemyRwDmiHCWvDhLwW5bUwqT3sUSRcaqFhr1dvftRwPxv2CAG"
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
