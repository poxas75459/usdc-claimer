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
    "Jr88RtxbZ5bUXq4AAFaERwiLN7EuJXu8qJojF8HK7VH1S5vG6eYF4gS4CkaUfUsH3FSMNpZJbNfM8RFFmJkx16n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vzcyWGh8ngKSeenZ5Ta13EEgaYJyJWokNSyGuKUXr6EB9smLHfsNEk6fFemCHyjA9nEVEoXRhEMTWiF5mNyYi5",
  "key1": "4DnrrrUnpDeW2VdpVwANeuMyZQCtaFLVkwHYbJJyDgBrrF1unBeCQY9MAPtS78rkRa9KsGvUgFZrYyqqaCwhYSF8",
  "key2": "caq9QkavUW3GG7seikGaeNN9dAYctfukDsKLwWH37WbeqjtubfqLUgjE7Qjbti2H2a3giunpd2yKbJSZeEBdkBd",
  "key3": "45uSG4WxSyJq4rf9Asg4qSwxKeeLcyyCzWfunQPv2gYgy7uHwdhmPjxQPnnbHakxh3wnyU2bTJaWR5hr7CvqnEit",
  "key4": "2WihwX8wk9ppcXV4sW6CdWd8Rxf1mvjTk4vTx52nSoKJXuByccrhXfVCYfTvj1MXxcNvXU62rniaEo4bB2pW3rRt",
  "key5": "5aZCfLpcqgg3rXKiABPdPVLd8mGS7EAcTipgZEJ4vytuLkxxN7uW2miPXuzWKkePs496SMwBxUbsBnrbpCkTLpgC",
  "key6": "aoMkB669uSJ8hETdYcJaCwQ9FoexZL9TtMwJXGnLRj2Cy6dyBerjxpdXmFK9xP2fFyVJi4GfJJ5BiL4GRSXmYKq",
  "key7": "2A6EZgsY45eShrWnc1mM1zH6Por6HQxNQjWzdhBxWaUc6XiKqEYBWiZ5vJtMvYAGDKgFeA5aio2ATdyEf7f8bsxL",
  "key8": "2KAu98sAnyNRoGrNiTLr3LiVq9bHLdDfDpMc18pyHTThcX23vAEiH2nw2kY5nH41pQPPSivPsM8up8VjrdBTaXuF",
  "key9": "4mowzNgKjVGEuRXPYdLjHJAXpneFfBhDrmJR6qCygZheWGt9GLRqjippzeXYDkT5yUbceBuN5AgVvKuLifBcpX4J",
  "key10": "3WKHAr3GUuAmRpXrfyYXAfpbsTB6BLNCUHbdowrg1Ev5xYRHjsrQ1AY6DgEJNYANA7bMPJtpwru36UFyqH4VyuPf",
  "key11": "i9xbGbxjH34hsjeuehqkQ1xzdAzfuSbg9mAH79S4akiFEqzW6BWg5fdzvdw3fRGrZPM84bnnCgQnqSoXJeuxcUu",
  "key12": "4VWqLvAczymTsLCb2rH5eaE4iNFFreXAwuFEgS3NRsVQWEWU5WRfm6JRPxgFLVMYLe23XUfs5hz32W1uTf3j1XEo",
  "key13": "3s9r882Wdr3yoM75QQSQ9L68HmNWfVch9GMJyhAu2FpfTrqDK4XnMPNWcrDtPb931s3BZ9w5gPPWXThmmGSUG6iM",
  "key14": "h3fg8zRA99UZ77FNd9Nt8gw2DBfNH5qritWBTzVKDUfShERQZSABiNpSkLsfAi8cfgsiVXsBTmtEe218ewLF9Gx",
  "key15": "2Th5V35j7dBoYjDLeF7frddYrQwiUKKGeffk5vGSf3omiWRWj9Q2sBnxUP5ptw5BrnMXKRLujraoUTrs61x6tZ41",
  "key16": "4XazT2w5xS9or83b7mdYCGWs3VDX7TGBWYTaTn5Bnv1h4tkquYFB7HgVyQYJ2zBWQTS4mhttvAaZB9afXVkAbuXY",
  "key17": "hcxoBCVBKHXGeJyLuY6rYsQ41361MMKkwyiGCFJJUkxQJSFvRicWmRtaJzQ8Rb53tP16gN73AcqMEvAwxJ8iXeo",
  "key18": "5WtgKkFHsKi6wBBF3fUToMM6Ax971qbCRF6zCzQZLANQDxhLakVHARTKCt2KjHUz7j8SpduwPAy6x8EBhuYCfy8R",
  "key19": "38BoZ3Wn86EEtEFmCX1mAgFDR2r45c9MamtfuH2xWsPvTFuCpDwoxjomiUgtfFTsVm9JVAUzZ7dbBNYzgL3vCogA",
  "key20": "4yev4A6rYxbiZ9uX1GQq5wkawQm4ei4PGzqG88HdMidRnMgvbsovGKxPUxuv8RiCWTDHXEW8r441he8L1faQFqzf",
  "key21": "wN3Zz3DxYVNaKJoaUsD71cDASFSPNkzLiQnqhg4USawD3pdc4wA5FnSppdXzcBP52wmAPTjbc9hZTZJzeygtDXq",
  "key22": "665U82KJ3akNprmagH6M3LMXmfMDfmL3gseQo8zXpQVrWBZrZ5EafbidvfcfJCaPHrngpedkTAXsaTw34WhdRQ9g",
  "key23": "3XnQg2u3785maRaHphVyfxhDY94Nezi5fSKANy7MdxjJJreecP2xdui7H6j7nC2ZuyxJG9928741BydFxUYxPY2z",
  "key24": "hC9GWnZJvnHFDgzPQzfJo8mX2qtqvoLLBNctPveRXSM5bdDGDnQs3A7tLgwMmQAngBQjnHRnjLZ7Nka4dEeGheR",
  "key25": "4ZgH8rvj77yrGzmFhBA8PZt78NVK4CLRbbnLEbqt2oDyePbni8AjSLiPxRhiscSBccr8A3yzgV6EvLKdhVPj6VWJ",
  "key26": "2XCZ8gaFwWRjHsMWV2y1zZmgLs6jNgVs91PX51XmLfH4ZV7U7LjeHqRCHzh5PPmnSZ8bx5sgUAHd1skhFmPDQHfZ",
  "key27": "2wTqDQBGEbdiYxdDAPRNe4tNUthGMsuUXJBnjBuowEadATXMZU1533gkH5KEoVqm8ufEyCSUdwY1yogxuWKSYWgt",
  "key28": "DPk15fp4Wrv8w5oQ68FcDdMVH5mFtjC7vASi5zWjjoyXGSmRuKKQNdSbNsZ2s9FeqHVuN7Ckox1SNYWyiWGogg2",
  "key29": "23nBfPPAN8tHnDVPHg3FV1ihzpVWBqEdFXGqT4S37EEMddiDEuK9Rq4R38f8yEiESQoRFxykGEQtiWiQggJf3rts",
  "key30": "5kGTgXBwuGShVMGxCTjeSpY4eb21skVEHJpsEQhfyWP8wsZY7u9PuTkkDuCyqe7LYz2YF6gnd399TPFFmyCU2ETo",
  "key31": "4u5jy5P88LG8aumfp8n9oWFBcmX9iWbkkYjfhLvvC2gBS58FPkDRzWcGpMSG7uMaRAi2Cw8SGbdYwEM9US8nSPcL",
  "key32": "5s1yGwRoxB2rPDjDvEu9P6fApcyrpgGJ2QZU1HRo2Gkhh1DTcQnk7oLYBHwsYJbnV1KC6em12mLiBnNTv5G7v2ob",
  "key33": "3ftMaWrYj8YR4k3NRZ13wSPThhEnSXMkioydKWPtmZdxUYSuXHfsjJ9wmyEDkZDVAUcM8UoeNj8w6FwsbaT3FaLm",
  "key34": "xjKzrmoPLr3GgjYpJ5CDmyZNwnWtEz3hCZXknFJYNYC64R9RD5rB7ZD9UoYqNK9diHg4dqS3FvvPSe8i8tHJWHE",
  "key35": "2EKUDvCMLJ4sXb9TmPdPHdg2MSBFpb73dAETSR75kcAK6euBDnJrJgbZRDbsxMy4UofmpSkTnfJ5rtMGxoxy6c7P",
  "key36": "2YmzwdXKst16qQyzAiSaizpRxj64V13KudH367hfRrSmEqJokFikJm4YbUbeCjM5UbK8xdskQks1BJcCmiHphooP",
  "key37": "BaheicqdcToA1fV6viAberejJwxrfjkdoc8zjfXtvmZ2aSvq7DUn5VXH4DbSRxb2XczteikDaP3Nyi78H8ZTdV2",
  "key38": "2aXkTksgjzgsg6djw8v22zydVGD6KJ4PD6jTWbFbYjpZ8jGKCDbFzBJdQs8FG8bKWUrjEvSi1gqe9C7qwQAfmsuq",
  "key39": "5agkYUvwgLckgtm2wKV93839MKfNy8FDUfnckQm3DERH3WtpPzwMuozxwKgDWFhyqv9m8Lg9F6mxLvtWYPimuze",
  "key40": "2wEScWWkeahdkKHgeiH3RwbC7RmQKfW5sRKTMy2hfySZjPDL75CRXJA3rvm7T44KyPT2Eo3BWWreEPcwi6PEtWqJ",
  "key41": "24YPXyZvuCYx569ed965gqWpj65WWiiatfUwAhQsHdFR7E1iJ2qF4L8Zu5VtKyS4tFfv3fFW2xF1XFK6Pd234Nwq",
  "key42": "5mVJupgjvTX1qoSm46CxhP78m5NXb7qEU7sk35DW69DuCJ7kwoWnnLSi9cvoDVV1RPoPYbJSrmF6s2QT22g1UZrT",
  "key43": "3Zmq1Uua1dvnq4p2gVZF1EQm9nkUkJt2u8LWJ5NGpNnQkQJ6pZrBqybrmqRmCDf3RzeGidfzQ4Skfm5HVyQgxq6f",
  "key44": "4kc5Wxx9BcnRdxh1Li7BVj9HKdaBeWLQjTieuK8Yo9XEfucxyLd6hHECnBgFaC2enuWbbQvRzbS92jP9saWpKDsS"
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
