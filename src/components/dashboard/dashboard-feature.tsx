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
    "3RfpXGZ747mYbD4DvYMtPaRfLVS2eLtjyn8E6ZgmD62RpiMyJhhXQoAgnkZF8GRaSKXnmWE2taUpu1GbgE6mLnBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x3HW3ho8D71NWVmiZbzHhWpoht33kYyX7F1Ja61zGHKLec14nWkVT4MLcgNXhDJ4yH2x9CwoXZAR8x1yw2EtAdS",
  "key1": "3eH4s2gs14nKUy5nYqAWLxd9TStAFA5QB8vsTaifChv7GvtAJJmbAyjAwHYwCZBP5QSTwRhZGYaK2ECbCDzZiBFB",
  "key2": "64XJvBGhMBgg2TwdSNYdJbBK41Rp7h3yyCdHiTTdnwogBn6sJ1woyzR78qHsFN5t5tb8TZfF4ewXvQBWHYxRhQ4Q",
  "key3": "4seiJxBPG7RjdNhWjVm4KwsVgMfS279vR6gVMB9jx6ncQjzJ2UkhgcBof13wRgyF8ymKZnruneT9ENqLN4wKMAnx",
  "key4": "WE9NJFezT76XKEmkBvhkykeqqNrSh4bvhzK58U4TRoatWWWooZaBjwJsB8QDsMrNcTWEcozdAkiCe6YVXGSuwJ4",
  "key5": "3bh5Bo8zuqtkyHKMMT3o7jCT3qm7V4dmWyWMyxvGhe5HHuNS7Nn5DBEjZ81fVccZpvcUA4TcofVJduLbp5KbbsBJ",
  "key6": "ti32Qmx6kSNyn9dMLLxk6ycPvtPJNZPgvX8P3CeXRsEGE65HXNfxsKJ7FFJw18BdUESymiJ3x5iZaMUfYi8wSFP",
  "key7": "fENYF4jJTN6mn6HaAPJdoW8Mzh4AjbzaAViWrnXMhVyKqAciuMgB6UFAhS5UupezirBrtpijg4FHPDJW17xrsP8",
  "key8": "3jPvqGWg7jE6rjdKvsbzxKMkWzqKme2hZdHznxzpKUJbfePGnk8Wgu1hY3BvANGmtvFRrN21rXmCPSrsBwJtefX9",
  "key9": "nBgARXTXziqF5citYjTbnwHsQaAXjhL8eMHRUTX485XrDkFwxMFezMa3Fb6s6GyL5iRX7h1oh7HtcENRMnPnJHh",
  "key10": "5xsXuCZVNoABgKTak48vi8Pd5A6xvP8Yghis2udmPfELMVWvcaZKXnM8qTLJZHUv6HYmRTCEmv6TB7rgHEmZtZSo",
  "key11": "4u4tCiMSqr2TdQg8jWRRjcJ2C58Dqkc59q9oDMdQevZuociz2hMMBWMyxfZHD1TDc7C1trwvs4Tj5dv4ZVmujUos",
  "key12": "sPnmBgMcot24udDN8ceBWcZ4N9AEJb6FYmX4bAQPXuqm81Z3MWaBg9EEtNzvcaTEzpB8ND4sKEwK7ooN8d8TTBm",
  "key13": "2z14ozNUjBtRD2JZhnsoiFyZG6s4MRbHc7QnYBYXkVHvtMYTqL39zKviMKffsE5LBXSNTb2VVk9Ujcy1hDdoAfcG",
  "key14": "3RFbEgBstc1P4CGyqGitVHXR996VfD5WNz2HAnHaGUeYPwWBPeCmMjLYQRocEJDxcHJEnTz2hhbiyR8pt58HAtKv",
  "key15": "4CFom7t8UJbxFxUCqf9MnqdvHr5Mk9r7BVmQjshaRVUAm45hr6uiEc783ui2Wj1xNDTSjg52FXFejBrC2bEefwEt",
  "key16": "3BTHLRXrKM7ZDGMjigbavusuGRpzym1CrGowMTzuDrywqoRq7tCsbNaCePQHMniHdtVeRQkQkdFy7bB8tkCtnbqp",
  "key17": "Fj5aKYhTn8iNXwbmShotmuV5nUkfAU9omvCypzsEZ4PUyHVygzRaKYLnZTK5XtdctsJKZA4jU49A9fckRB2Snba",
  "key18": "5Y7zu44o1gJoX4WWPtg1ijq8prAFHxkUcZpCbJT6QP4ZtF6gTdG57SJq1PUYM31rRbyEEUQxF7oyhHPdoNENn6Yh",
  "key19": "PuS7gmpCu8cohFpHaJGEBecQMTu6DV7gDX1EPXFfdpJWcJFGsZdvE5mym51fryr7rePqWuDiRRDbu1E7KKxXA3r",
  "key20": "62ySH8jwj6Y1MWKbhZxca3fPkWC1oz9yDu1uFbNQKPPkNmLLksJpiUQ16s4qwEA5bMiPXQ7GAhS8o5umXV79kgKS",
  "key21": "48fgT9TLRbDiCDHu8o7VpBeBGaSUBPiwhQXDNb6uXpxi34swDPKU2kLbnQ7sqk9ouooxYvFncKXog1tYyN86RrsX",
  "key22": "5BdxBFtyDTXDdrdfeAxF1DrLM7FpL2BiECV6iifULFqPYRxaVEE1tN3aMNkntEJMTDtxcfirAxCXrhZpxGGkMu5",
  "key23": "EBN1fhq76e9RS2J3HFdfXqn1GC6jTfK6V92pPFvsPDCXu2azXNMXzRsmTLPSYLF4smyE2tE8VjZk5RSn5zPjpF2",
  "key24": "vxYPyZkk57KYfhjckUtxbR6zscH8fqbbH3EjkNUjiJNZYqggQDuPiJ8EoRgiWUdx3i2FNmA5PLDrEhhYBfZUPba"
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
