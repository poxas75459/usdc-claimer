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
    "39tALVBb9xdNbuxQqJLCHD7TCMkep22Ewgp7XhXaVGuZgYm1yrw9DqE6DXvo4k2xYZ3ADgokufUTkbTGTabZGVxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGFxj6pWNB24RkL7SAyWFSJ7XSE6WtKSQ3ZA5K5gfgFYqcugLz1wd4EriP6hSZSXZJ3GtxqUycnd5p5E4nGWs3k",
  "key1": "STDDUU1xmBodqcMVXHudk6dhURtvU6eAdT2mGB2gtYvfyR3V6DhpizRMUyW6hDatYUbgzxS8oecMZoBS2WM4hgw",
  "key2": "bKWpJAaCypUb9zc8qPwNDachxQ6tMhmJt18xJUfDvWjnWYHNnfuzFKFvQ3QXRyk3N3WfJ9iHr5y1NW4RoF93soq",
  "key3": "44imTokqnksrTpvbL6q56EwfqCo8Amq8YSnw7oSpYrQuyNBCYJpAXXPyGhVsAGbv2GmK33TVvAaAr4j6jk7oDEwc",
  "key4": "3RhBkK9AeABdEH4Bitpdx8H1ahcuSURr5bswemfv8pNBAYuWVodjihDJdLRVBFwQekUKqKH5AYy2PtNfLS9mcDgp",
  "key5": "5Fjri9zX998qNuiVKzn5211JF6u5NucfgckrcN1dBmXQiM5k3TfhzsgvuXHdzwzcNbb8RJKumqVLFdNAJ6J5ZiRt",
  "key6": "3Z9zERuszPbCvKta2Hacik3NwzqhqyDQmczV65sfkRSuTFtX6z54E87yEM7xvFeog8qftGTZpwH7PApKndLbuifM",
  "key7": "4yn9vV3GEcnbQizDK7rWPvLqQTw7tjdNJYTrhDuPFKTrt9pRCr2Rj7B9kH7CqXotf5m44C6u6r5figzed1CoKY7R",
  "key8": "46buE22cBDvVWSih3S3pqgYjZuMSABD3q6TXghjNQayoA7kdrBToomdmxPuXn1bTNwaThVsZsi8Z29xsid8g65Xe",
  "key9": "5eZuC6q8xyJsi5FTSwoatYZYgY5hUe62nbHR2savFiUufSD3JfhHsjtbqS3AakMRqztu77XkhwRDGR4ozQ9qL9jk",
  "key10": "2mnVRgNMTJzQexYoNCL9bMWMrQtGkV7GsrRn44EaHpCUX28WHBcxVK1mqT3r9phjGALw6Ci8F2ToAFmA6TmXxpiL",
  "key11": "4fmNicRpLP5VAJpwCM2A1f4jzYjMaqCotYvnM11Ez3C2ght7g42j8xobgbY9sDWmuxnh4HHBFYrYzEpQwcnXy758",
  "key12": "XLM4s8AVGMaJDfC1gJoA9terDF83QqLvry7wyEJuvu5sfd2wxpn1YbmoYSg85sVBHWXnaoVUWkE8U5xYHUM5teF",
  "key13": "3C3R3sCYxfeE1dVE3svpm7Pzrthsmx6adGkEhjh7jrJ4jqLSaG7tkbWCmtfFttDx8e8ctx5w2eKQpcsaa6Hfv27X",
  "key14": "3B5SZUibb3LDrtCg7BBwLdsybEyFGNVCDVm8FAzckcaD2k3YPfXPZm29bgaf2fSFFvJ5pNeHDESEBurU96j3qpNE",
  "key15": "5PGZc3ikPaCqmN19kCsfBXzt9iKi5UZDQFwRNjm8An1sLGVM5Afh4jXJ9MGtnSqM5NXYWxiBSxXK1amizcCyU3qv",
  "key16": "2pYHTMd16jULYbSpVZX7DAdTdBAphLNDVF22XaNf8xZewmxMsdAsyiwx7mauYBxU4xwXRL1hA4TfBdHSSJDSiX1k",
  "key17": "3T8eJFYdy1HPsaTbNbNfSdbk6x7ijqoWs5XBjTgyhHTSiL6sYJc1aKiVZxHfHcSn9bPd1jsP33CzqVcdPbMMyYia",
  "key18": "4rYXHxHTzSmfcP9c5epQCBuHQRPU4bsDn8eQXMNJKSeZAbFMz2Ppiv7m8T3rQnTuSd45NuzUPLFaYgSeRKrNabom",
  "key19": "3SzXmGostUsrydjPqKsTMUWhsszUuP6EG8iVSP6bp8y1BGZnaFXxNtHwLyvqXDw328h2sAYJkEHYEo7hZXAyBF8a",
  "key20": "2nq4AAL31aUgGMosyinwKn1zi5P9GyU5dnoFffumRpKiLPURHL4DXqgMerMYDjrTH1SFuzPAeMWRFMBBJWJNaW6C",
  "key21": "2puJJcPutGtbrhYD7R2T8QEPD5ydvrA1zG8FLqSHNYy58k7LbhY1PGqkgSvV4HBQobTV8AHQaeQTssgGqHqj7SSG",
  "key22": "4GjngznCZSQA6n6s1u5PVpZw7ote4vE9dXJDvn9DggNXQsdmPebWQKcJGp5uHU5bfhHFTKia2FjRwwx4hHLU6Gpb",
  "key23": "3Cv8tukVjnosC7GoMmzQuRgGCTxYWKbdV8SVvnx7gbTJWCKmiQ7cbzRSMiVjih8TYwZnrX29pq6zHdJAJfrtWR7P",
  "key24": "igYrghiugW5gZZrac8DE26N4PwvYxdYTfYYHpcH9rLhbBKTzxr8d4S13yQKnof2kXHLkYHBoqT6AuCSJNu9mY81",
  "key25": "4qMr1ZRewtz899YRCxQq749Cy2Sam4iZvUQw97UVZ1shCw96eq7gZqdfgi9JbW6tsUSNHzCHQbjyDke4SMKhp9NQ",
  "key26": "2dcgqNkbRk348GbjgLWD13TEUCkgZKWgvzP7jAzozbvB7mGxCWJfKZchjdCWmGf1RtLSsSvJU5sfEp34y3rdbwJw",
  "key27": "4LQMMyAh7pWiTJxGVwpT9gLUuAgNTU2FfThxR8TH2gpfPDWVjQqAYBzd1AXrY6wqrHHw31ojc1Eevoqzj32KDH9J"
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
