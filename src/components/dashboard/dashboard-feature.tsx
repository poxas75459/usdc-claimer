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
    "3MdBEBLUywq7QXHtBf1Pew3X3VoxLUMBpY7wX3qUaDaJWx8VSu3DJccpcaHzgBxmutDsjQxG7uSDtcNg5wxyZAiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QaC8QuoXG7KWmSPBE4mDCX4uvN3kpKCHcrWnnz2vGULDQ9oANwnpsyXdE7SnSiQHLMrEa2n3fYXcFCCrKWhzAYL",
  "key1": "FmWKs6ECvpqxXi3sns35utMBwPU315KQCzqxKWCqoUyQyvGGCs44xC39o7g8nnmdUJBoagDvvEEbjLjY3w9GVp7",
  "key2": "QGDXAbXsdk3JF87QuLetArBsxZ36fmJpcgn3vheEcA9Tc4fbh9yL3VHkJA2DkBpxFcfmycSNSdzgmxZRQ4xJNy3",
  "key3": "2LY7BDPJkwE6wkmXHKMnfBbYZ4Tn55m3guQqZoFTUFXPgekwkvZWrNBgvoEqq2yTNoHVsWcJjyEKqYpHbFdrQubm",
  "key4": "2NsgSXdvTHaHkgQZGcTpA2bnHEgk1DRMVZ1NTXULrZMfiQg6nvoiLghnT8oLEvBKgFgWLido69PdbKyz4qxxtL6u",
  "key5": "4NUtSuAJjVtKhvgK7AXredG2qBYQhiangQapRHqwcd9y3ci4Ypp8tNXEzRUGTcQTvM2kAxvY61eWZb8XdFR1ZBFt",
  "key6": "4itsqbJz2yYDyArbUmVrEWrbV8y7xnoxpGCqcYMC2YoDRdEANynsQeWjFEfwV7WAGug71uVU235chKBXp8LYkEjH",
  "key7": "59bi3gjujXQPomeiUqZmeuF7uk9Yi4fPyj7AoQYJerbUrgnqnxZMmHBDjmnsiizX7RPRL1fbyJkRdGwihWf6p4ak",
  "key8": "3Nrzc7urVmTKA7vPSNbajESi34CVCxJBBcWEjqXALcUZg8NJ5pwDPxwGN4r2pb2chJrSj7FkKbUJS6trQzc3q4hq",
  "key9": "5GG1zfH2zgayLbj8qUmm2NhewES4p1mCj35rRyVM32XMyTYBj1wHs7QCua4j7ZqaQXFWmYypWFFmXcS4osMUafUE",
  "key10": "65KkrkeSnvX44Gwg2AJjycjLH94ZYUdtXZySvak2NUVKeftGWimbfbZZUWgbqrStjqHaAK5qvZ6QMxp4T4M3bh3P",
  "key11": "2HXi7gtrQdaMZa6PLFiVgKJx4cs6oYWgmvtCQAfjmWDcyxghrWNdUVkYQVXYBPYS5s5iqPPjCisTuDHtmpLf3WqU",
  "key12": "k79P8Zu2NwCtAhTSds7g4fNzcMhSbSz46c7sdXmwq76hxHxCaZ9rG7btvcgN2eZFXmn9DofD6rezveV4xKoqP3r",
  "key13": "3i1CMTTATH5LqWwRWhY1SAdjBCaqskEP5P8Yrx4VKMPDUkYM9acKgWR6DAGTGnboB9coUNscj9kH199shQJL5vaL",
  "key14": "NiyCBe6K1wKp2eVnSKjaKRL4brwrcztgSPoeDZUjqK94eNv54RY98hq4RRaasGKHDTGvpQZdAmbxYed4pkUtRjZ",
  "key15": "5va1DiF1qz8zngwcVBRTqgkqXj7bBc2hk3ncaYSWzVKYbWAEv6qnMJKPh6jQkZ9idxrc7EVPneRDdAizBMw9KBER",
  "key16": "2KHWhHhQnNrLinbbG4egXPHUJZUP3pskFSQ47VbQaSCfVhcyoiZpZA4FJ2dsNtp2N8B6KRQBHH9xmP5Reeu6Ysop",
  "key17": "3mni3mhJg4ZFvRaGVg5dyMH3Up8KGMeL86MJNkuMdtJYjE5P2kiczTxmPqvaJsd2GLHoCEakCRehrs7HYYwz4T8N",
  "key18": "Q18Qv5sVr2e7wf4STb637doSztE4Ztr1unEn9WXxjD8meJqqYCMZCnmce1ripyyftiaPAWYDncrgFpnutbifDfK",
  "key19": "1XuEfPYffWAByKcgMQuasitdf9Y1eNUHgFDghpoV1XGcc6hnPYyhhGaLQSEKdGMNCsNi5YgTUCEgc9XDSj75pFK",
  "key20": "5nTwT7zxZ1k8S3xzefPAu3sikUksSt1zRMVDumnkVqhGHrYg6nnqpDU4A1kSTMwx73S4yFzWYtgYjLjgkYX8Dt6A",
  "key21": "527kZQhGE6XLok4sZrRgMph237CJYw7F3wtz3ujMBAH4mM6hrfNGN5LraXvRjpUJdmqRqVxZAekQFPVu2acD58eK",
  "key22": "5mBe5PHG9BKw2wUV2KBDD9Z4j34NknzpxEjQYo5pphCFBXpxv4USv8CY92mqxd3eoxSGedz9NSZiUvHdTzxAvm81",
  "key23": "4Kp6pZYPjb4NNocE4nFmRZBBqGoky3Y2ngUJ7eDYoTx9HJzSpMcnQUsjc5EB6yzxE376esBbeF8SrfvyYksUzwMy",
  "key24": "3quXUD51gGhHLbZcz6mhEqrPWMuTnJXEcXxhrGMp94e5Nwt14cRrptXiz1XMdugaRv3Urc9QzkiGdNMGP3VSjwTG",
  "key25": "SfqSb7ASiUmxLa948XMbyjL5Aa8db2sW54soofgvSNiTusGpAh6nZwdWKKkhMDsViPh56QhszGhKrspmYyZFaGY",
  "key26": "2fpxL5e7ARfbLrovBSVAGrHiiYuJNDB8ytxsxTYhTtX7aSpPGcMMFymLqJke5oJH9sS7giVY5pS1SHhaE6op2hKj",
  "key27": "5GTbn89o5Y6GECXPK1Dai4hHxN1RaS7LFeHctU152195p3B2BZJFbQJjxAjuSgYkkjg6U6iZEZtfQPu6L6hyxgU1",
  "key28": "2NdC9yLgtoFBGdjcAmsTnDPaJ9tacfDzMtCfE9BRhz1sWfSD5K8xDCHRScjDHQ4FYuS1M4wGyH717pHH79E3NPqP",
  "key29": "5GkYXBYYfVHfTRp1qFYYAQwKsbEuCgUcaDVcM8Gx1hXhHMDbWfSxuBbEV6VAcKCErzmZd4nBaWFukQCmXZN6PYKp",
  "key30": "4C74VN2pWtBsx6xRFPasuR4Mpj8RU83kRsQF29iqWhgV7X4sKp2nf2kT2NsDkS5bJeoDqE21Q4FpXgU3PHLtJomo",
  "key31": "ZkFTBEtKtZ3sZw2LXRpztCVf8uXEQ6tBJQAMNqm2tBp5qE1EpmoGUyHBZX4pukddzXTUy7gv6ZaJZUrvBvjU6eE",
  "key32": "5CuNgUJgVv5FiNvSgnFtudKEbRuK5VEtccskMcBHXNHTe6d8AsXSfkie7wBqeGpNTBFzQkUSad6yPCm1gwT4otWB"
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
