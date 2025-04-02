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
    "Cuqyftb4py7xqhMNQCpGDeVhsS9dtCMogCqrQia8EFLwhVX6VUmmBjUPrjn3kipt3N9P6eS8DM69DQqYpLKiQPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzFfjchQBxU3eGEEWwgtft3GeEoHcEPzQrSVJycVp8wKMxFa9Wv8ThC4rFcKZBeevkBeDSAKJksH5VikiAdUpY1",
  "key1": "2A7m4CevaViUR7tJ6KnMDzgE5LNHpqPtdgHHwBCJCqcQ8iyjBShocKiwryDnjnv8GxCHDTboPGQAt7mb4ZBn1ijD",
  "key2": "5RNJpBqh1TjdPjLgMgBvpDoGjBiiHPbLQ5vyg3kUizCCbjiXbHgDUpouuw4h69bE6PJs3wbEUaj9VB1ibobaXYpQ",
  "key3": "2g2aAtfW3AhnHFAYtyzND3LddRRwfa3Dfjr7KJPTFDoRV19cNHw6QheAcPDQb2eHyeJahGcKWefjk1dzh2PjbxqL",
  "key4": "4AD5ShAxSk9w5McP9EbZMSaMEQGzjxQQPM69KFqxz4mMx5CUEhCYDdZvMazFb1CZEaUBjne78X5xGsijNKqYKe73",
  "key5": "4CXLMhrBSdmCezKsPPw7enzYoKKLeZxcecd8BtVYP3oHYekjTysNRARSabpBrpSdMbyMFsHnjWBpriCEMZA1Qs8H",
  "key6": "2Esj43VCSbf8K8CSYrkiLoCCBJ598jbWPshNcorghPSwQxBbU3NPTnLXChRrVm6nk6aYnXTLLf4EVkkKVmjU5Sua",
  "key7": "5dEPWnbGUqpX6LLTZzBeyKtwjQksi7Db181XYp8ypjWy2rANVFyrgNC1VzAxaf4rXmFx1Ex8Sjw9DfquBCTXKxpu",
  "key8": "316UZT2c9fDNknSj2cZmfPVPmfgddwtrJGnq1u5sMp9yzwwFusNvLajNDNVsyRNp7gkjZmAWxZitrn2kQsKHWRRV",
  "key9": "5zdCSfDsQG1zLpohRvmsQRqkydL5dx13S2FuXGah4WNjmGrFA444U5jsqbqkzpRd3vQtt9J8jHy1nrXeG6YnnW7Q",
  "key10": "3muntEeymsAwK6TUcgV4tCn8jFbQxQyPRM5QXqwTPzhLqW7a65YvqCiuiSVB7Afakb1Q2uD2cPZdHTCfjA22q5Tw",
  "key11": "5235buVjSDo1dod5BKPxKziMjUrPSk11HsGJmGZdpuFCQgzUVzEydr3DAkeEzrKGXyvHdaKQq849GjMpLoXmhUd",
  "key12": "4ptzcXvcAbt2En8iyn13kD8bSMJC7bEEbjHv6DJ2ZWokFafoJKsWG7WLaxiA8E9aRo2A8cGZ6AfDt8pfvoTkMuT3",
  "key13": "5pZY57PcixUSfCUQQnZ1Rdz4C9JNBUqwLRcnafQX6jPiXddNeH6mBXTPccyHB51JrPHUTLYj8Att8VLhz5A7Xgw9",
  "key14": "3rGCKdZT7VHSz6tSBoK3x47SWKcMGpBaFRXhuyEuR68JBiKegc8xjGyJyNSFmvayMyeqJ5K8WAMwcmYZwZ5PP3W5",
  "key15": "4oXHuB6Lt4nJZ51FPioiYzBz8hRdMeHcuKrFwdBu8CCFLznkbSqQezDcKVb7e4B6s9J5psqASi9EbKkK6WFDVxKm",
  "key16": "29RFT5hvECpTYo9B6dQ9K4QFhUCkxn3LQNL14i5bstdDnKtWjnerv4PS9NTUA12K2kiuLEQsv7rVtHidyb3mhaf3",
  "key17": "3VLiYfaMQ9aKVjb1Z212vCWpX4TpRJQVksUDg3KgpW7SPJABTbb4KLQsQcDvPPX8jQx193p3Ge2t9jkJ4PkXcxYi",
  "key18": "2U8meKPE7qNdxzHhu9YxUvneF4fTzhToWcTZ2iEydNU3WUFvEPijmDrGe3ntTmrYs7QM3Z6ZPEsTSrdyBiSYvjKz",
  "key19": "5mxPHCAMKy8ySFqCxARGa1m13tC5yDs9d3xoxsguijQ8WhtEuQKs33RaGGK4xbJicFsLhjU1EEup97wZM75ioLRU",
  "key20": "4rVcXb3YkjUpqfSqb8ZznpvYHkbguc5CFP8TjBXch6RJjZrshRZsQ2ixwKptr4v7mCKSejQaptyY36JUouduMUqW",
  "key21": "4sDo5Tiyr7iwssF8X7XDgL6bi5zbNMgaEdWqgNnmUKaZC3S4TuXAvY3SR8neWQZsfYiKSA4Bv2ZoTy6euu2skQRC",
  "key22": "jcRNMsxs5MeSBwXBHbjQ9dVQQi83F5BoqbKtE1P2jwTKFPWETcnumXMQVjGftC7QRayK153jY4ogehkyLpuhxfx",
  "key23": "2PLi9iBGpz3E2NLY1Msd5kcC2iLkKUzJjogJRpn521oWUWWCeGJMSt3CNYo7ayqaUPuGJJRTaSnpPAyzh7DT26WK",
  "key24": "3x4xMSkrUYQ1JDfZ9nKoQJgHPakdMX37hHbVKHL9zD6gZVnWTL1obSFUveHeruYNHjJrtPxjZ6eRTfTRwxjQNS2X",
  "key25": "2CorrBhQbsrXJSV2oJJk7U85BBZGjULGFmvpmfPp49tYWbxqvTeZZYtUh9KGEuMuTaXovmz2UBtc49zaF1N4vHV4",
  "key26": "2xeWyd6LuQ8MJdBDcveK177BvyYn8p7JgfrdzytJoCNMutyHrqgnFzkvosGz8fX6kXj9NKScEurrH197EubRFVw2",
  "key27": "3L681pTSZQTRHPyop15DzrBR9ffBBqHMpzvMT2SvFVq58z9m1dFzatK4TeD9eTAhLEMmSK2HTdp4iKEWRFRuFGdS",
  "key28": "3p5W3FgL1pXyP34tLxs6K2NtM7GMB14R7mhfnBGZLJUBGYgihpsCa6THJ6X33hosRj4CZeVFpP8dDGSh6unTVqsG",
  "key29": "2iPYpu3L8EkMopAY7znPxXJdPt3MkWdGZtAPKf5fLVe7Qg5qafPUuTqB4rriByJTBqPh2ixjfaYdsGKoEmeWvRWJ",
  "key30": "27SD6Z5BmNkivbZUJqkoBsuHkixDoPUTxV1SWTzZGnJz7kNdo6EMo3pw97UvW4H8roj95PuuToL7UiXkgJ26py95",
  "key31": "41JnPYwHyqw7kFFU9auqQxKNCamixf1CXBh9RHoCz14YzUVkWBMTCqTjkcnoYokvm3FRTfvCw2pRbgwrA8CvgAbB",
  "key32": "2tFB9da27kboQ1zFbhfnuGucQ1N7JPCVLWVAUy1URcCMykrcccbRBQ6pt5PduFCimbyHWt1rztJpZeyVWy8wMZSi"
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
