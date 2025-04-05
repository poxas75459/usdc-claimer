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
    "33YECvrsyhVmmm6QDLFHeGT8ufHAL3F4ADscJqU2NGRjQC2KWb1Y1zrN5GmjxgH9Y2vYkiGYz2ky1Y5mhFJLNEgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKq8qvSbsHiBybn8VCtmdkjJgkHK9HQBNCJxbadzq2KNRpnjMa9a8T3oNimmKzYZ7zpxGcUbM5Th8fQ59Va8v2G",
  "key1": "53jbNc2aV333MqGyvGm6NeJrbzqKATDj1AtQU84sAfL3KgRVZ7SRGZj1gYdurf5UHsoBiGzACg1bPDyGDBvfeLHE",
  "key2": "446y6KYm4ojYzo8gD939uqnpvhTmE4K72Bb5jd4LtQgLEXGJTgGkrP4GdjzDGsAVXiwwnfyCCKY7MzFak3Mv5VWB",
  "key3": "45MuCbdvKHGeXw1ANtc1kaz6hEMrd6s6qz8Uu9ZioQxjPiigpdcbvwQwCn3drgR58NWyr4mU7mMVcfA3ZhxUhFX2",
  "key4": "5ahz6SVtsEa2ijjmv3vMA9tW8qPW1gaU4hN6yAyDUasFwNqRrgGXVbtq85obsrvi1MyWczikhHBtKr4VwkynAfJn",
  "key5": "2LBHjNMAVu27CmuW3jdW5QJBtRqHoPMLWEhugPG52G3NaMmWXgKKZWa8f7iytYuY14tXtCPZJwayrSEu4DuopxEt",
  "key6": "2HynYKCNQiHyCXJV736hRUWtdvS4P61JWadJNWvPNUV4nc6p6N1ADHjBih1SrUQ5SybKZm6MRsZ17DFzUMbdmiwM",
  "key7": "5Dmwu4tX6LNN3Pf41wB7ze8ZVk2W4Mfz6HvUpAHaqK5E6LJpUkzzUt7CSDEdCRLLQaA6jngcNvUitZ246KoRDop",
  "key8": "3JNrFZxZE7aPr4hc3L45CEUNgQR9kfZc6QmzwK1Ezz2Cch82SLdPxZPmHSSAkVvJ1DsmnLbRQJxBPGLxjsqtwnTY",
  "key9": "5cBq1QrNXczCQ46JJ3fArE2HPbmgevWeZ7VvdwPgqmqF6VUYCcb4rn6o23q6R9sFs9U1nMHPhxPHJsALuP5u2zfD",
  "key10": "2wWLY1NyFC1K8Bc3SNNsZbQxX8WgGTVnff1Wx4zi5gHWmXiimteK9tQTioxUuPvCt7rdjChEBQg5MEHhPDVpYxdw",
  "key11": "3u2ahuuLXJcaV32enKkzqgWhTSvNG8WoxmYWPLb7zMZ6sigNXhnVqFxWkM9Hvi64tf2mJHxQiL4NXgBoQzFLqyq7",
  "key12": "4WoGdWa1XQ6w3ynEVYhjSix4QJTxezcHoc2ETCE6LnpHomXkubhC12UkFUXyuUyExBVdiemrSiWMSLpbDN1tTTs1",
  "key13": "pvAuHyojuxXY19n89rfDbtfaNh4YYWB2GdzD8vnZZmVrhM6w1uyckygurDW6zimEL1RaUmvQuAsQgPp2DYG37Ac",
  "key14": "L1qWvFRPYjXG8NjucXWazqD9DEnwoUKgu6s19T2P6sePhqxyztjkoKqjdC2uNWsMY4PAPPNRLYR7WDtmBd3RaCZ",
  "key15": "2zK8Sc5E95LNU3JGzcMSa22VGdzqPP9dNQCMFRhKCmaMU6qFyAcu6Fdokh3QQAsd59SPVvmGQEPnXJCTzwLYiLf4",
  "key16": "p7oRZGUNcxuNFGqmkbfvc5qiAVUk8tbKegy4LYxEux69kCsGmgvnMPmxXvPjHruvRQBSiVv1WwMJSxCtZTGdDdW",
  "key17": "3sax9fcKGNVfH5CsXEXYkwN7jzzUb4Qg85ZsoMgpMrNzSpkMwUokPUcftYwMj5CdU89kmDRWRvMe59cwk1ePXAWP",
  "key18": "2Z2pVNM2skieJuFjayqGcKJJQEBzVWip4XanZiBbz1LG336U222KtZ4XZ9sTBnnyPebpGMhbQfTjQpP5uAt1p4H9",
  "key19": "3RsRR1GyN3oX13MJsdk6priwjFBhXdLtuNDy4yNajBXQuMUv3tPx2AjtkuvDZmWi1egLuLdEF6ztTgxA2LSJkfia",
  "key20": "3sEyyBacZX8nt9f6PzdANc1PJf7nap5a6pGxFFA37x9jAwkFQiB9rtSXyhWcTdXQS72yWgqEHAmeE7dg4PVVMBBS",
  "key21": "3BMy6NURAzghnsTLxbNG93x7o933aSWWpPTtmsyVGK1TU6mhJM6qp3vWmzMV8xSrWaC44o3eniEUSszXjoEJrpu",
  "key22": "31vu7mWAP7i9BSQ7T8sY5jP19DYXAzF9MBH5XCjMExsmxX4mAPoTPA7tsbGcY6WYaH3H6bJ96aTa3FjTi1QGbYJF",
  "key23": "Gs3sSZiPGDFUEUW4U28KsZqWVCuY47968EjnXxVDGvBncHpeKTdHzZr47FpFgh78tMrQ78wKeN6mW7CW4Ugp7ay",
  "key24": "d6omT29fCkALYsHxSoyeJUUMEtJ8ymXAGv4fgrPjwZpYMjyVqKwo2MSYHLjicuA4GgMUNJrYbJttcZDhqHgj5ih",
  "key25": "53FNp8JfWTqCuJHfKwobHSyDuWDfBJ91UDzP3pUEj7JU7MLVFaXbeJs2EZVSxFQTwtSQhKPBDthvQRkCh86W5hLA"
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
