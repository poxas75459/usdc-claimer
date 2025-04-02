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
    "2k9q4KZqmeYgDwFKu9e7qdAEk9bvHLJeinxWhsnXhFD3Wc47FMBkPFNQmRGvnEmDw1nasJHPoFwjvynmFtYrTVZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sy3cpASEL46hVUqkgDo16R3cZibCi1umpmRr2NvANhZXVEVcssWT7Rv8Vt1H7gKn8RJLVpvaiaUKgDzNrLxoe95",
  "key1": "HquEk36vJsbsRmrGNRC45NDwtArh5Xa5p6tT3N8unQaNkjC8kNAgZ5jgwM2kjCiktyUphExqHa1wYVxnZZzb7uU",
  "key2": "4pUxRubTPcQVc83Wt2ah1xWRtsPrUC421k41m5tcTjFNzF4BTeUCbeGPvYc2hyuSn8j8Aw6a9e9PdzXZezfaizvF",
  "key3": "3cLkWMd4BMUDMUh6YKCeMnUkc2WZ3H2YcbgrhP4UJycGsXwkxbpStk6LrkQqeM6b5rVjKgH6wUyGYqcm15XegKVB",
  "key4": "2U2Z8aG4TrFHn8WpxKYYaHiEtsCkQujpMVmSovanjk6mCt1k59GxwTNj25JH4bEgybu46Dix8z3RNPryBM6KDTLq",
  "key5": "4kXbhyPNyQdwL9CFEWAesjRPccEwwiwiro1FuM2mgTV358GmcpbcAACmDs43P51EYK3JRNuUobgjpyAF6ah4PAr8",
  "key6": "44C6a2KK225EBb4FAAFFT8jmGJY7veiCDBZW1oomFB2CfnNEH17TLkvuWrpnb9w31K63AoFKrX6qdG1xqBrx8XYb",
  "key7": "2M54gAfdz1G5He6q3c3wAJvJmbrcAYTD2MDX9TsGwH4G9zqnRokNdMFkWtrZzYRWi7eU5ythtpyrCkYsKitRf2o3",
  "key8": "mcvUKaLVVPhE5iUb7CEWQi3Sm8DmjWGvkh8hFxz5ztgNfxA8Y2qh7Des57wHP19s3apmD33CiBguCkEg2dtGAo9",
  "key9": "45ctMPzLhrnjP352eGcyPyKGbPUPAvoc87wEMGs6UqBR88JTZ7deCNRhhbdFtK3em1KfCb2CJBdL7gro9iKk3Vcm",
  "key10": "2hajbY5K3NhJUege9Le1WbGLpkvajjoR2Dgwb2w8hT7hpu97VqjUGx3pfRbp1T2Qp5cWZsnkTAmvoPQXAvvd4Kbx",
  "key11": "2dTJf7Aq2CqDMZddyESKm4ypn48HMGZ2wzrfMwFXrtZEhPQbJJnzqjVBA7VsEvCpdaQooKnVkYNkM5YC6L3CdERj",
  "key12": "4XyVsFVQyd4M7hf8K54azqamiyPUswhJaWCGWvLAHy6nzmAj9AYMMJVVdDcCx7gPYA3TnqFwxj3FcFWfQMf8V9cD",
  "key13": "53KF3uH4UuoTcsr1mfNBHZpj59J3AYueYaTxw6exzWtbTrHZ3PwZUpzDzf7nZFuu2Qt64DGsbpoW3aJeCELhv6o5",
  "key14": "3t7z1N1cQNApxV4sadj8utvRSbvfa4pktpTqKrfsBEUAJNzKPVLDiy77Th2n6ekVedyzNrbKk3DdgymFWcDV8ZxA",
  "key15": "4EZZVSB7813fjNEJH3LmYFcpYEWpvkk1P6Vy1QbfxGKtPu4iRfjfk7xvicZKgCUjHi2NgBq5eG6P85DTZXUFf1uC",
  "key16": "2CVLSEifxLHR9rt2pd5yJxARbU2A25XSr26P7vijzkao5x78QdYgRVY9AiX4k746RQFmcnmRcD5QxheWySGx3bpZ",
  "key17": "3wPUSUyyYjiEMyKHuBGVF7jp8hYx87egUYwem18uW6apftSCf2rLNwKK98Ui142mPp5owVHV32ho87DcnCY75rDx",
  "key18": "4kTLsKoX9xQzcEWMyHsFuviyqM7D5EkCayn91JxTjpATwtsqkHcjUC8fFxE4c5xuZbptJbAMoppaomuwH35RbvFQ",
  "key19": "59MQ8sp7V9HdtnpFRTPo2DMyW2YUZQxRLgsHuVZfZ9qwu61qSHkkVbmJDcmi9nfWXqyFMkB8FxwutMxrGMVthdUj",
  "key20": "f6DA2D4K2rwf7sfTqwvwZHJNeEF9SfA1EfJ5n4SDLyQtXwTBbtm2fPVt4RbpDzPATjoR873zAVHXedsqSMF8tLL",
  "key21": "4gtnaV4TcMu72rCtHb5zwjr19FQv9LfbTYAZNnZUyihudD2AsAtd5JqxVbME4dRhU22jvnrfnUqq1u9MPF1i4Jbe",
  "key22": "2CexiUKSRJ1bMp4bXWBf8bywiA4KYcsd8nmtK7nL3jnpeVzbMWTKt3QTc1bs4JhT9WXowFiD8oSamGqEHjfjgmmt",
  "key23": "2gGZjsQ6VUvwL97PNcb2gR2E8uKyto1KrU3RfjsStM6kDGCEXQK2AnxcaeA71ZNQmag37W9xn2ixA5ZfusrSju6i",
  "key24": "4n9XRbwzyC12qSWXj4e43YFxhWzLNCdWnhq4rYMJscfJ6UBK5Awd4pPKg9N42Zj87jms4eUKDPfCzuBs3QCfrZxw",
  "key25": "4gtAc6py5Z92ZnSE9qA9Wz2K47zLRGZhi4K1reaNXiXSfP2jTbPDBRqH2eL1Vk5XuP5bkRsXipXzmRVr8XmhpEKq",
  "key26": "5xuE5eMhBpYBkCu8AeLmunT2i9MA1c6LF1rm7Acc9qkAC8Qh14pqQnkHHYe17mtCS2cKp3Q8VXPrj4mbdu8CQXw5",
  "key27": "YCSV79tJHfXQT8ok6QsnieuHGtK1WhJBLXoLKnqZ49n4QkzoR7h9bNBYk19H6mPdknT6neCBDtVA3Qpgk2op2tg",
  "key28": "29iCvSoVMcU3ebv4tfKUTyU2pg8ugJ6b9EGCCBsWFUMpHTrC3Yc2PWKxAAmnDDvYHQtqr1j6bM9jEt4F8CDgSVzP",
  "key29": "4niMsEc95e9MhjFRtxreJcfTZBFu29g2JBZiaUiGhwEfHcz55899oS1U5sbShdBxGdYaCs5Ak1djdmRcBdHUBJug",
  "key30": "626yoMfNyuYCgLZ3cjsAFu4ks1g92nKVmWchTqsWPRGgE9rKsLsCYZtEqAxBwKwHUpCw1X49a2EGtRoVxLtWrCqT",
  "key31": "2FtKTangBFNvRgRxfur1Ze9vxgKQ5B1wjwk7XPCeXKKvLvKFw6YmdmKRZKWMX6dfYeRh6gFeCcYGtwaqw52Vh2PH",
  "key32": "5THtAKFf7cQKHhDazSddWDRNezuh9YCWPrYtd7ucHT1DGH8dnwRFVRH4wYMeWBxmbRHqYRSAyPThxfmVRqdQUsB4",
  "key33": "kKQHdhfNrggMog5sm3WpQUcKGcX6Z5B1ryBz47DEuhyN8SxgF6gFPLSKMnK9EdoDc3AXu2YgzcpeRkCKohnHXUP",
  "key34": "36wHuhdyqDCTkriTSz1abidWrsE1BjvTkgNmBDZxtSTcFrc9pxp7VM3j4xe3mNay42RrBMeJDAQPpqdjid2c21sG",
  "key35": "212dD9vMshRe6CJBFiNWTtcFGyyw4LmudZ7AnkP8aL9B2cjprCJKeTvXW7eZA2NBHxtTZ47j6gtTm2iWw2Dj77Zy",
  "key36": "BAkKr7ffCsd7xXCY4QaaMgpxU4Qf8mJNZyxyMfxdF949XQjUwXeHSVKWpQSMhSstKHRn9RD4dRaTMwtG6tNrLoN",
  "key37": "4kwXEwFoa795J6sR4mV5ycnJLTyvKQxvD7STKJkMBbNCQpx4QLuqPfibuPJSbhD97vY6bbgRGce8U6ZunFx417Hh"
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
