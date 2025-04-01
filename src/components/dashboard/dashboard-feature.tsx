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
    "5aNJp5MgrzNqeJ1wQgeqQnqufF5MLSEcxPGADtU4wZKKGEuXeMNmL9gzMoge3NoGY68csJHq9oC4SnhuV1P5Xuhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYE48xDAFHh23HAD6NSdHK5mh21k3MdLW8G8hSr3rajeeFmMCgJWAYbVZmrVtWzLUUFqXuiCzr5cGXdp2YeHEf9",
  "key1": "2FpWN3pxfi7QCXCC3tYiJZTPhSmgyWtDCtfJV6G1AyZSjpwEMDvgtd593YMTH7koFMZnNB9ZBndVczQx1d9WRzQ8",
  "key2": "2UeNKkSgWrTna9iWifZt8zr1ys3F8aXiMZvzmaYe5ExEpjb8ek8QMs7qrHLHi9NaQbaTGF277KLpT17YbrUY3xsR",
  "key3": "5yNeUbLe7spjYVVUBJubdeR2w7DgiiM4hizSZ6Lrz2jGwMu36QRFtJ7Hah4h3ccaVWqiKw5QukVAta7f2eseg1XH",
  "key4": "2GANBREGZyLwq1vhjZUPFAZYYXKPQxi3aseCqc9pK394t8AVQFys7JJMBYCmP5oUGf3Rb9oXLgLWhoysHBUD5gJs",
  "key5": "5hXNVTNGzYjsC4Ha3xgJDzPeXsQYL9A5VM1HqH9JUQeko567DCkmmCVmJaGD8Y8u6govdBNNn9qky2tikkYRb6B2",
  "key6": "2fm4CA7QqC3A8kD5MEVukfzbvKP3s8j9dFeT8uPPyf3ExcaepA3NQHbD3ypNkiVDs8WNf4vAmwj8fzRdCZgv9KG6",
  "key7": "ZQgEJjrttwo5y49GbRjr6mCu1HyVFMf89PmfuSGMVykieTMSutmtEcLjbC5Q1ZpLTuXuUtPb4JXvZxCSY4TodkU",
  "key8": "2Xh8R3CwBwhdutwt7rQFkVbdLCWaWKjtq5Jva12yG9YfYvSUuMSbxoEfPXQrYACqtsLMnjEktKSc5pKkqgChW5gh",
  "key9": "Jpwjk4kxofXoXKY6NY6MhHqFZvciW2jhjGqE633nWXGkgRCXjfvgdB9WbAbfgHzUeRGddNvF8XfVq5TrGnw7pq9",
  "key10": "2VUyp7thNngzH2tHUdqCeDTyoXwervBZfbh3tp6ewUvg6iDKa6sxn7pVpUPJNVpwjY9vXDRdDW3Qb5EXpM4Hz5iF",
  "key11": "23R4vaXeLkbmhmztsXKkesCDuCRaTgPNWE4BpeptJ9urxHCbNavjCWPPPBRZUaUDX65BF76c55w7oAmiGjjjUPhs",
  "key12": "4CbiPYVWtSeYE3ZLqJKbYsqBgCnw7nMBNvwQphvVcpuhivMNrXc8qGEVSR8CBsmjvzZRG9z96mrC2EQLjGaqb1LE",
  "key13": "4F8ZLvepkf6cgchzPE945PEhoC1tQjbS7bKHAdafmLSyu7YUucLsGHCUaRnBDvCNgL2VLsC3UccyezRaKUAALe6e",
  "key14": "2tE9DHguNdAe3JKuHCm2jVadghVTC4Zbbx1Y9xB2UzEQVsA6gJ4f5jTkdKAEMr95PA66gwcDPTc4BSWEHBf7Tyrf",
  "key15": "3wjUS17YmHjZwETLBQQGhjiq4DMbfhDrKfWk8186NkiovhoQBWBptQXtSGwhgE9Ay8xBvLTgw2pC2hmDSbmq7NsY",
  "key16": "fcLQSUeFa2hmLHGrQW2v7Xp3SKZKDguWBNSuW6eSFBBjb2iRqxaQcT5ZZJ7YkkDvBqLsy2AMNW2MVeAtd3db8bW",
  "key17": "3wbBCwXEUtna2o7aM3djTq5B4L3DLcLtNLQP91yMHihstHRHzT5mc83mTwWL1wBoEyejzJCQbXfJjftyJtDbWFJr",
  "key18": "4i6wp9VBZmqMZyNXVJfNE7NFA5QSzUHpTPoPCfEFEdMeBRi3Nt217ZhaNrriyvYkV58YKhFFEDMCvy1L4uEQ2zbz",
  "key19": "qRfVb4t2QBfagwxxpYzitZ54QFqwSTWHkm6nLJWhAi2YKzHNoqeYC746VFFMYumLVGNtrS2eCoFdTdAcEhCuZRT",
  "key20": "ZPg3Ct5voDauW3aw8Uo5eUf4KuzdDsusDqdZ3sMrBN1xLr4bKgNpypK2Uy3XMW1euacCbCpnQaqiYSDMU1jq89F",
  "key21": "cSpF4PrdmBrade6Z3DvAsg6Z328nKgWfcCFTqKhkwoFnHGwzUueSmf9L8NkSi6vmMzExZukswaSSRaqMWXCLSLE",
  "key22": "3tr1KsEvnU3dQiL2kQtpUR6FMGcgMekkxSfdDLEGM21YQgvCTT21aj5WKquxCiBqrMExfFYqG29c5TXuhkYan1vp",
  "key23": "5Y3R53hUtY39s7JLyMNpfUe2zAYaGq9L4at7WBt3jc6gq9ddtieLR81D8NBaSpnJHp9QycLcG3TR1UoddnDyvzar",
  "key24": "3CWHk6iKWdzNE1XPufUgfwy1Zs5LWn3T3FjGsKAMR4F45TSVCVeG5rhd3uxzyQfeCPaaw2g4cxf7Fp6zwwjWg33o",
  "key25": "3j8LBUyez75VjSSTmv2A3yxeyRbxZBjuKN5CcG67FG1Dbc7JQxbQ3WLaz5Keu9D9ypsZb8twDYAWXUpziRjgVGWU"
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
