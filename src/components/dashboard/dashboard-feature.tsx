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
    "4HJ5ysvh8gbiCdNCMHfEig8Uby38KSqZH3kUgPtB9yTzuz2PpxxCNAH7aF3XZPKYCQDJ9usgHskjdkGcWjDbNpYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H62qD4YLXxJDvuHchyY8MyADFg5Jas68h59RhaPqZ5kZDRoPwVfzsDvV9Jsj2kbL1T9CeeVDDzYkVNZC5ZGb2Ji",
  "key1": "64v8TJsb3gFWQwRLtKMUTbKHfJszh9Uik5KKUM5eNdP7r9xaE5ogrrs8LjBEnLEopCCv14PBzuyzxsFgireLpsiG",
  "key2": "25BAynjY92DgnaxPbgbEsT6Z6Lwu7SRCggTQx13Q77eLPH3D47e93CggiaFfiZagPwug4WJ4t6uqedLeJJJ8tau1",
  "key3": "4knSQNY9EWWahAWCEBiuDL2iGuaoTrYmY8TtQhjtLzNQGeE55ivQa7X2gjm2GipU4NAzEtm1C5ZpJ7p81njdtiTx",
  "key4": "4xaZHhrKPL569AkbtPtc3Swo4oKmiqAxyQtnr9xt7nnD3KQULS2nL2JkCQHDYWvBRLWgv8L9bTCtTFQKXoLymjCN",
  "key5": "3uCbY2veqv9u1MnHPHLbyxtEv24M9rmvVxZ5UbM8e5mhn9mU5NAurUMBRP1cw1Z1jv5bG2yETUcugqYEhaH6FTDL",
  "key6": "5ZD4Dx12tHa574MZwijohiJoY3ViBfGfddf2RQLGHpBQV78JciJTfDHHb6VNQwDnFs7gfpj9kZjd3R2pB2fH9N19",
  "key7": "35WtPStyiVJGijaqJTS9WC4CSFeG9gwA8cQwGoEyjVT2ggAginVtRKc6ZyiarNdJGm2v6ehWFxQkBp5enbsRTQqQ",
  "key8": "2q9Efsvy4xRm8jwSRApaRvuP5kN54vZrqLBocAvA8QVUbi8E5qZvxowtVroy8JNuDxVGhTFmoSDczFqYLdjRRfTQ",
  "key9": "2LjbnZbZEzcoFYcTbM5H9NkPx3gkcwYUML5LA7i3YVS3GCGehUsXUaUT23V6fgaqVKeVL46iUSz2XFGRDppyqAsA",
  "key10": "2vVHeUydxC93btiK7mjwmZr6otRZGQMqBB5SyauAvFahAsy35z119kEN6yaVpm9EtFDNi3kaJ6V9TYx1bqQUfuQG",
  "key11": "qDXMrME9wGKUsyooQLudZoCpWcF82TkMroQLs3rw3AXMDbZeYYGsGgY8r7c5Gx2kZT6FmrzuqWWtkNGYX61VBUL",
  "key12": "2tBBuV5fNE5wU8gEYtZ7ticpQhAyqfrS2cADGtqvZipN2WrupBUNnMmxDLvwDuFoongrWSV29bB4eXMezGCNL6So",
  "key13": "hPxdN2mZyoNctR3utsDJTjBKywahdpF28Kdh492p8mPiV9WsbbwzU8i39eEHdVuCR945eKxEakK5JNxWA5BUUVa",
  "key14": "s5FyyaVWrNzgt641ZHEAox9ayahiwmX19aRiQYzUYS9Nvpu59FugbHAtbHXsT6isK1UKS4uk5qMm3DvGA6jj8Zy",
  "key15": "2z18k6W9rrvcH9bn5wPRL7HFFKPHAktKfLgGMsyCEnjSbySNC8e3L6NUe4fUS4pXgPvfpQKDcusv7i3oGe1uGmyy",
  "key16": "26c5En7hPwzVBFeX5zhe7ysTSxLQBBNDT5xiCCRPEdy8pF3qMQkKS9z1zgAS9ChR5nfzB6eyZf89Vnz5E8K57s4k",
  "key17": "5h3yoKbo2yEeK93eJvXhzUK6gp7m51uAJ8MSrrYRxTtiu9CnHfGyJkqYH7jm2qG473ygXSVcSC5Tp69RkjjrnWhJ",
  "key18": "4ZxHSJkgT4pLMd1R1krJcCvZTwDcEqEDKFsU39mwB1AdYP8oJqseSz1Bfbgt6gkb3TyTLjWb3vAz6hWoxm6wm1DP",
  "key19": "5xpuUqFUX55k14PCYWsYUxfvgb3jdSVKtfaPMhmFYKuvGoRZnowL6j8s2vTEWLKGRFe5AeCvtJQiibDXtWUWQeLT",
  "key20": "3oL2gY2GBKM8kvoXHURWzD6BGvfMQvokdtkTysg3vZgAbs5hbmbmwTH4MXCsxdC7p3buf6tz6ugT73Lm9UgCFCrH",
  "key21": "5cEEWEwghTnjSB9sLKjMWwutP3ZVzkLRp59eUB5H192RxTTEiKigBJrdkZ1BWLxYzcWiczytF21E6kAZJNm215Ld",
  "key22": "4bDkd1LeVDF6TnjUpjqJkp6odykqw1u1jouRAk53ax4Bx3RAtTPB68RVWmKmskJVVUrZ1nxSVRNxim7VoPA2UCup",
  "key23": "3cAkXh9aNjNuHsNSiPLexugGxjkvJu7EqYCag21iu9Y4HqrsV38E11LZoncfAdu8UMAsfecRbvrYyWnG8Hz9dAeZ",
  "key24": "EFLzCWq3qRDm227n9LRXkQcyBXgeikzJZMHm6CngrsGYL6cstAearbMxArZiuE9nx8ZHJoaAa5RA4FUb7LgudGg",
  "key25": "5oDD5q2HVyXKXqBSTqKtfMSAqtr3Gi3PrPzVvauPU7AVeQA2ELtLiKgAzZZRbAFECEXc7RYckYJVbXyyrUqn5aVP",
  "key26": "mFrNBeFX5nDPctjp5aN6VfgQEfBWwdZeXMKua5AKJnbtskZrDeZoW2aiALd5VNULa5FVhiu5M4Mzknpe5oyokx1",
  "key27": "2RToNVLBD5hcwc4hKCCi8bfgxM2MYdTfEujqSqAtjq2Rt1i4idzVt6kry6B8QHut6r6Ct3CvCrRnNXtZRSHbr82k",
  "key28": "5CiY7uhbi6kzZXfRVGKbvLgVPWvRygZJUftSBnppe4jcxTwMg7D786WxMEpUrsUhQsek7FFhs5NxBdHDtQDhHss6"
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
