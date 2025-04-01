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
    "55Pagybm7irNss49AmVs44nosdzXnuRzAgfwXruCD9Xuaw9bhLgv8upeBi9XF1TY31jwSwZqojhVXUmquwiQnHCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxUmbJmGQEDJtZyxF6tJ4edFYWtbrxHjJtS95vwVTUDKyssiom6w4fLHuid2bArpk7AWTJtku6tPiaa5o8e4MYe",
  "key1": "rLbHff5SdMvu9nxdGJUVZtsKwiBtgZSrcQ94ibBj1Ckx74Jgie89T6WiCDfkszwuyvPc9gragmL7BLJqPNVg4NW",
  "key2": "3BkLCCiRgwBreWGfaoYkQbJGAvrvnYc4KLMNYoPU3xrFRQvqrvY1zNpmuJhndAnuskZFzjPTxhjbkYiDQ5kSsehe",
  "key3": "BpihScPzUJTJ5L4An4uBUbQcxT7kZUdZCS5c8mXhUXrMsqvaJfkdnyzgZdez8F77AvTMB2dwjo6wVvhJfgfvrqi",
  "key4": "43yUJhbSZRjrkNJhU9sjQQLsAV7XYK9n22pWszVekybC5T8GLtLB157wE3kHnC5UzNS2fTiuxfQ12fntEqEPW7vT",
  "key5": "44GYdM46fUZzmqruWdPDgMSBWE3Nx5p3zK6zVRCw8y5CYsejpriTDA2dqihxaA2F6iJVBVh8kmLw7vaR8utaCWSx",
  "key6": "gyh4svbLGhLz7BYnZ7WRgU2w4DCSsKxVEZPBQJCuRCXo78dq6dwJGgugF2HV9PZjZy7wumgV6aavN3d5oQXxUhA",
  "key7": "3gshYgLUpEZxXGYSVmEeB4iPtUTPUQasgVo15xLcgzhu9kkjiRB93Rdshy8KviTPv8BCcW1tFcCKrULwBU5WRyzE",
  "key8": "5GyQE7ooQfB1D1XpQfmsArUZUQ2qE3uZxXvFL96opWNTrLjVwvJzWE4xT3K7YfAWHbJDZ1zmdo9JNF2BJ3JCbjZ5",
  "key9": "36Wkxpj63Ui2YfGs6fXKdy7NbJ9QVSecmubMKwFV444FEn2i29SydRY52dK7nuvG7FsRRYVb3WGfGyATjP58wDCX",
  "key10": "3ymF72p14ZiZzmdVt4o33L6TZqFLwtsYToqroGMXnbkRdDZHEGpYdtR5mSMiEwL5RfyAGcnNstZMatHNuFcBM6ax",
  "key11": "4SdWUBDkAypZCb2V36FrutCN3NDg59X79PwefRgWfsEE2XnqoA3knHF8zzmcWeX7HLW8UELFdVfEyJvfMhjVbWNN",
  "key12": "3u5S2hxqVvvPpUPvGP8z5iRHnCAtAcDh2nX9U2cd8qmpJYbGdWYcduoHUDMDjSJLS2CVixSFQn3Uojy1K4ujKVJx",
  "key13": "3hEpUoUhaar9GubZQ664eyQ5henr6SLCYaxhZfznfZXD7UekQFLXsRa18G9SPFUNTjpTTXJXJLoTjDbm3k4Pm5J8",
  "key14": "4sb26oeavprsDBGgFemjjyE2f3EvMommgDPgLYpQ7PdRVLYKB7EkdCDpjgRiqjzYVNYkYYHonireT754qkwdJwjr",
  "key15": "5LwizT2gkMTzDuqYuXvsDJ92EbCV5JYs3VREBoFLvuEh96VENGSqWvQQBGPeUg2yBxJWAEymGzgpGXU7gWK1n51M",
  "key16": "4czbRBUCy3F8EdFmbwVvi8JGPsvJNj2mTsUiZQfpQaQKkNRY8MtpVNiKFhv6tELpJ1E1tvYub4fMdjHp8QiHQRTN",
  "key17": "2yS9MYofzAY7ukbUk9FprWWgawHbKohufZgYG1d1t5tofreGzda8qS2X6f6iDG5cbug9FCtxZZy9L24Di28ixzuc",
  "key18": "25xvtnT3PNeJMaprq5B4nbiny6BRfHin2r7xGCMoCmyC7DzF736RmoZKLL4QvSKPJXEu7XF39FPasmmt6xmiHVhP",
  "key19": "4ThzZxBr5ZdvbNR8H89c2gbTnbZKsUQExegoQLioXb57XRPWLDVDAkYA4Hf7vHokEUcvbnefRZscKY5w8x1Zercx",
  "key20": "21wALCHUZBajTymqPxg2Pv8Ze5CJc9vyDmYPXbfW2gTJNPj6e7QCzx9hwnvkGW1HpUA4C5MDyNxESadRvuYMToii",
  "key21": "5aW9bb3Th1cXoYfiBRVgSboj41vXPjdidaDDE4QLABnTme4R8Ni7yErGY6o3Wzycky7P8nc2ZjHLfxCQXLCJKrDC",
  "key22": "3Sp8LLMgz7Ynnece8g8hg9qvBHG2TxTQvSAcetjEyB9J1adUhd6Eu1xq5F5sqtJRdaQBHMM5M4ctSJuKiQKj7LXe",
  "key23": "27HrjtoSypFMX9Lcv4vkWULo88cmcK9YZFPa5Crrkkegf5WPh6TVwVQZ49Hg4SQWcHTYybpxVAo2t56B3GUowjoF",
  "key24": "3JaLytJqZ5u6pGavGwKnEcQbGH6uNemA65kjQp42X8DtsXkrQU6DJkXkesWsuqZRrUCoC55xwaZRCmYuRV4i2q8d",
  "key25": "5GHjbXZKdzxf3PLNNMiDEakc58CY47g263XxGiqHDRUFkWH9yXa825DZKoGc2hSseSUVS5myzz5Fm1Pad9h6Jzmm",
  "key26": "5xWJZvXhcyxqjHPJHfaNqRN5rMf7Tx1qgLixakCohuCGwH4tGTCqeYtCWrVAuc3PZutJNKtq35oV3xuUe7HnnaGy",
  "key27": "3doPeaMGaHEmop47h311xVUZiSkQsZ8e6mMsLTADJrB95PYzGpRNpvzjVpyiZjyi3arWgU5jq1ufYNDYcKVNP8gV",
  "key28": "NgGToic5jN9p4ZBTTzjQqRo2TYpSEJiDVmRqbBqiJ2Aj2sHvae1thwDRpKsmbHGgDtRzEroTVUeGsNkdvXu72SJ",
  "key29": "5Bs7Qj91ZbXXgpGRZg2oJhXcSyQNahrn5t7WqdQxjbmjn1p1Av2fYUsNkQ657o6jVBgvZS7LusaEikbbmHpXTXiw",
  "key30": "2ueqSXtuXEgnA5tJQRXbZVwm8wS9ZSrEnY6F1XXkPLUfryg9tdqHcZsWumaPXJguvd1tjQRe1yTQ4kV1ox5JcKUi"
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
