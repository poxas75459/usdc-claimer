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
    "45mDvcoVNKC2NKqYGrm81vJwPBmcxYc9ngdkpAZ1SDJ1aAs6paPUSCiW8g3TyHocmaRg6YRsS3pSPHRpW7Jed4Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jboiN9gbnLJxtSet3GrYwtoCtGeV6WbM6DXJct33nb3pEDMuH2CGj3vq5Ca1Ur7Z81iTrraQJNiQEjSdCYHsznw",
  "key1": "3tBJNJY5J86JwLSwJUqScECPPUAb3rMgaoLjd8CfMRoaYjsUvWcgx5MviZQsZH5i7KeUcx9BAoxxioVmvBBedN2L",
  "key2": "3FwYEsR9ht7ZtbYWpatSaMWAEGEkznhyCA25EN3P4ZVu75UMtpyCYyBoJPYZmgtWvcEBHqtTMpEDYmeRjkEfTrYc",
  "key3": "51SBWqw7Gmg9ovSw7FvcyavJpHwR7jaQLuJ8FcXbkVFDmxdN4CyzE3R1P5r7oPYxfqR6KzJaxFPUkT3k2oTyKPpP",
  "key4": "2kwPurg6jbVacZzh1LT4V6Xk1B8UG4iMqHgcLmAxhXCwwQvEB3pAGXpb1sxhvRzC833VFHBukaQ7Y7zVEPp7Yz2E",
  "key5": "3Zex8bhFcXwueGBiRZ3FNdmEA9sdbs5m6zu7FPi5AhmpxnKaCDXoJL8VVLnr9cDyRQBD6PooD82EAoyPpQrzEnmY",
  "key6": "3DowKZecrseuq1o6sg5RsJ1ud1KpYC7n4ssMrw1VVuQZUm3jRXN13tjyGHaRtv4kv4bjcMhq63jAg9xCBYgtTTRC",
  "key7": "AvMxT4XyYf8ptGbgnDWuLDFJa4ZqxCBnDUH79F2Jtccpwn75NXKXXuHbBPd8oB3rKk6FuvG7RVZar5bYDGxTkHb",
  "key8": "4EGHsq2qfZ6jYKmfLnRM2R4H4GfwkVk8BhtMEtHxKS7ZxfMKjaquPqER9oS2buwijdPvZn24LZVZrU4fhySypYDM",
  "key9": "2LXnqujW3HYG4cLSxVbxTu1e4za9a2W9pW713hapDF1kySYVAem5XdnQjXixPxTXLULFD8jDKm6MQMnDsruwkMuC",
  "key10": "HWQSRrREkw1pE5tUV4gXgL8guciwpSKG5qQQ2kB24mP4iyfgJBU3hzJzasPUab1vFcupYjd5D3guLZobWYjCKfk",
  "key11": "2yvC2eZwG8AKtUG16tSJkDWnSFapePWFeqkDMsnGBmbjmuyjDxbcWwU3SLVbUh9XmdM5ETmCRJzUHLPVWLFWtzZy",
  "key12": "4BbLuirgQFsz3idWPb8jWYh91kjvtsDkkuMpmpXftvW5wTUEg92WBu3XVBXUDyvrSimHjfYDcPzKTc53vnMHTsGo",
  "key13": "4UmRziruQakzBMTtzhr5H8RhELevWpAXfYEc7buVJg7wVm2gHfED64Sf5EyB3mgZZCUXwNS21kh7Fn2aH8h68qmv",
  "key14": "2uBBFZj8cNha7gJMk979sVdxdGdj8wpytB5FgB1NKAF9qhW797XQF8fBwQWUUxdnrcjdPXji6dxPPvBgtGjaJY1",
  "key15": "5jB14XahMRx9dj6JMCVpV5eJzwmVRsq9AP27GY3zmzuCu7y4kJCohyTDGY1Uzzg2jY53X7b16dKti4dAdttbTqra",
  "key16": "5Mna5hgB91QefqPyTpAKHMa6Zu3eiiNLEWLNQ5VTVzY8VGKJQ4ye17cPMQfmAZn4zcpmk2iWMZRwVDFC9FdXMRms",
  "key17": "W6WKD7bUc3RpD1Xtgh6owv7kEVb6ohQTrt4QodP73KwueY51v5QhTc3fTB5BfseJebvN4UCDgC5efNkM8aq5Y7m",
  "key18": "2tQBxiTbDwgdLp9gQ6pdRoMSCV131XxBUZD6U2dt1QN4Y44JJKg7vGoedrKyqmbDqUkgwg7VSBzqp9hj8w8kUFJ3",
  "key19": "2V9A9329QGd94rqyxoBiUhV7EJRN49TP79YHi57zghqunQnc8m86QcnRzwoSSaMLNzTjZGNfFk3RXpSjAdgjShsb",
  "key20": "3nd18sWVDwYVQrrye1XfbvxM3WTFs22kCQRC5f1WbGu8rjNHN9K3KyZHbiLZ65VpiKzG2piqYQ1VciRoLwUJA3FE",
  "key21": "5GUUcg2VGwXkJRAA7HffkUMGWTyEXsKQgjobnxhSB17nmXT7SMXDSebRjbiYWVKYyK9AWtcnRBU5veDQjXQJMoQ7",
  "key22": "5Kv5VkCBC5Lik2xxGUJAiNDdmvVxi4FwbzfrfyzgVg7Qd4hMsEbHzrNv9THRrfCkR8Jrr3skVFLLS9bu6NFRfyE8",
  "key23": "5wfd4PotLYMxY7NK7YL8fSL7HFy3tU1QJGXfASrY7d8io2Z16MwpAunLcFi4DzySxVhC8nDcBXMKqnDdxbmh3nQb",
  "key24": "49Yn95MKJqURFjXoMinD6mzRuWrkRgXgwLqUuGNX7FYyEgZC7tKExT6Zomi48bHh18Ugc7kTx2HSYofDGS31ZE6R",
  "key25": "22Cd5jeMbc2mKW8jaEyjvunk3Tbw4aCAXndrAMn71TQK5Ak8Cm1qoY1VSRBRhdDsJNde1nuvJFwo12Wz6W2d83fb",
  "key26": "3sFCWV8JKLvHCQQNHb6Vn7cUg426hD2En9pCkC8hxPzJPHv4yES2y14jBSSjBbXKYB1yjsRMhidZpAEz4NaBozmu",
  "key27": "2gaZEjcnjnvRgzw95yTc4rkNwms4am5WftBLaj2nSCxe5MgJajYMKAdJKc2kWQd9ynFPACEnLVBGjWjHAtCoZJB3",
  "key28": "kU2bPXrEJdaPnmh2btpvJMjbtmVbX7uWb27yXEGEoyudF7C3RfUtcMxU5Gw3oJmcmTShw4k9UBsd71Sf22rhUNn",
  "key29": "6RMbncYXNVMJrA3prdn8AzgLHoAkjf4nsGhhuHt4j4bYpML4mpjJcHz6qCkvvPczoPgzkHetwopQXHHP4CB2eed",
  "key30": "61az85RLkpNhtYT97qgAwggAL7ai1wvhhbrQDhgsepa5v9ZBYuqWLfGXvgH5E4MV2Y2uvH3dSXAc2fHE2SkPG9hN",
  "key31": "4KHk4CiTfn7B7qjhsfB3hYgKk16yUJD5CDqJzDtvYhi8z8qChJzSZAAQp6ZTXvuR87JjVUHNQr1sh3tXrG825gbC",
  "key32": "yqWSAjZuxD8anrPmjhHh3CR1HeSEBAA4YXxBXNvDtBC4z3pYkVyFBm7tHmgjaaKXDwRqaNuJmyrAWL5jBFGbCUQ",
  "key33": "2gTRLw5QuiFV7hKW67VbxKhFPKdiX7jkD1EsyQokQZYQ8nBgrp4ThsRGFpqnPUwsGx46svH57ZFYNwsejPaev6xk",
  "key34": "5iNoSa4HiVXW8mEgEJLGGC6RABCe2QpPmWh1qNhdsDvP5nWbipRWGJh7ZWMj4q7X53XRHc1fKmT2dggSPX3yzNrU",
  "key35": "ozPbxfQDBaoPsCLhgzKecZoFqUZw25ZRWJ3Y5zvG8ZMJWByyihgbAuhB8AiP3vdYDMAhwEDPcQMHV7jDPBvuUzq"
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
