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
    "4koP4YDrzfzsLcTHabVAZmaYT9ZPBuhxYPrwwukAA9fVdZg2AuDR27aQrvuyRFfQKpQBiKAa2ywU31VaL48h6yvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bAU5dPYyYBALSRunL8JV81j1jZHKWcjQo8nnbzvKjnPw1mEHR1pSK2pjqSqgE1RXqmGoNyX9BqzfqDiG1AbswC",
  "key1": "4ThZ9HRFB8uWDbQaMYKYbcmiPBztru6J1iat4yYJ5EhirBj4Dropr1HviboaGYRg4ojxDMzkpsPKvK6LWJgxAFqs",
  "key2": "2bv1hXVWdW9AQ2Xhq7VfBeY5g2ZxWdmyXuUrK6XVxH2Vh1Mrq5YmSCnREpHmgyNahGvqddRFDvGdhYv2XfKnPtDD",
  "key3": "34nKVvZjJB5o42j2SFTZ9UaQ19zpdWMSpXFREJRQ8sfixCGCrn8KEmNFyR5QRYbwjz6wriDJxahkxK7da3QTjAC9",
  "key4": "44rZWB8sfp4vXnxMaBadGHJkbnLWkCozqhGSReafo9EpS8Mq5m5kHDsPgqPnYowJd9CWZUeNgepoCD5HqshF7T7k",
  "key5": "5bhizUbmZLxirpE5X7bu2cvJAtWaXVDNLmWRgdEwWUUBBAPe1QHKYWoFJNszdHQWsqiEAmMokcbL7pRPWfxP6bXV",
  "key6": "2SnnUWochGtDG7jmVXLoBaJNDkHvm7CBPRd7xa2mSvEFQcsVs6H4kQxK2UQ7ZJhZAqSfXCqCJ2Vw8mJDuyNna1ko",
  "key7": "39UuK54kX2p1htURqxbcyav72JCyMc3KAfgtRKXkkQWmYMNerAxzJJPf1nnLJB19QjGKcHtXt6ACtovgpUwduzRn",
  "key8": "5Q9rchWznknGjG1bMFXrkH25EkSTY9rWnPJbKMe9w5w1kvxojSCFq24btv1r9AGvDhggSEkjjdcwBZVTwTa6MDzV",
  "key9": "3tThSu3gsZUQ8ssrwMVry8mCC9Nmn18fds9uyoaMAKvy5Hg5ppkckSD2yR7w2Jt3SNCmwUM7EErXWtL33sDCrmKC",
  "key10": "3p2FRSHojTg2CbySNR8unwttKkyjboomE8YcuFyoeUFYVK7ZbywAHk6dne2E87JUhhGjwX4gWKivGr4a2mMU9wvc",
  "key11": "6333EXwfTgZ1nvTaJBV6vfrmxA1q9rb9bFMDTBALTbHvbk2BQn3buFJxKqq8hwvGv4ssCxm7AGyd3G8ek7ZrY8GV",
  "key12": "3okCawgwUof1jQ2vKxdHtTtebYaWyPdRv9Ki8mL7GvshexcoSjpWDbH2qSo3Y1Z3XBM6Xid8W6pAbTk2pHY5NpAT",
  "key13": "5FWFFYsDS542mmqhtU8CPFKRs87gsaMMPJCZtq27bzNcq3Uyiqk6c7UM9hQt5a3iivkk117pQz2gD8wnpSdnLVpd",
  "key14": "4bAMPc77VpmnkvvGhQDcBW6294BfxEJDR9Bja6kR6fi7Qbt9xKhCvx9XguTR8k4UNUeeNwgWnqnkC7FDBfpiD2NL",
  "key15": "2dLeBeCSfe5YbNF6Mg3D5V4QkT1y9uedaZ8i9WszcwYWUK9BYDaeVMZcnoU8fqhUxfbdc3yn5LA3HDL6iu1DHCFK",
  "key16": "YdQJxr5X7fdVHCVe8yaQuHToNFymKDbwc8NZJo26SzF8R2uL5MZGP2VrWC97DXCk6VqGXkE9e2zo3bUf7ZfRfhF",
  "key17": "2j9swszUb9AyUnaQ3qkHpidKgUif4m99ZFPr2U24nbsmrd3QpvkYywSKrWwcqCcQ4tfcPFN6cpD22im4cNmD4q1a",
  "key18": "59Qcmt2dXthgnHqToRZZ1VUspWRrJ2mRfsRRCFGXBe3CQrbsKpZCAtuW81oevcBjWcr5sQKDryR8nhWLjvPRB3e5",
  "key19": "2zXSPcNVxF116SDR3FY2FuCHMr3nYZM9BShH9Eycz5TpPeYTSGNTJU99EFk2CAFXAD8QGM3Yby4NygTV8KQ2oJuo",
  "key20": "31JfrdDEheV4uat7RduuLezBWuSvDxprqmz2yJcZBJe63XvXVfwPov3xyMseVLjeK716v6W6ZdwBmo96qaFKv1vL",
  "key21": "3jW3JmW9URZv5u5MZS7oC1i1HwhhLAj1x6C61R5nK4PU5ht92ACBRCKNHruVqykgjth9Qzybta6J8ibSS2gGVNrV",
  "key22": "45qtrvx7EU9v3VY8YDKbDAd7KnBMNRLArCBqX33mvJigeFN8M2mrDm6mSQzSorZhtaSzdaA2wyCcWsS93GSJ92rb",
  "key23": "uvpXZHy7xioKDMqDss78ysLgrA2FkeMC889dWmeVD4cKuUzvMHhnT2nHHzTN6PMLACqai3S1bMVhi6g31iud3Qg",
  "key24": "9d6kj9LKBtyuFmGNRZpQmPvgjRmDYgXjFwFHqnjJYPbySnNGKLEukv79WKNuBqqbTyvyiGW1bqDmc2vaL9EQXqF",
  "key25": "2eLpGPnu9BmjWhFR9PNVqMZ8F53SvG7mSEwbfYLjNxKG7DxqFmvRXnYZ6wg2wGU7vhaYXRGGy1bfhmYwHZWjVPo3",
  "key26": "2ZDYkiTrZ3gQMLWQm6GbjPW7JunGYgbiR2c7hmYb96CxFQFZMZR1vSNTaStgsNdpLcy53TJbA4YDkzYxmsFxFepG",
  "key27": "5ihTgsFXbvLyF2ZS59K4aRK9Ra9AYtaofvhcFbz3tYPnUrKa3ESbjQ8eueRN2Xx9tj5YscJuNgit8yQ2rtjqfMcC",
  "key28": "28rQg5PvUT9nfUx7YYRsbLVJmJN9i3LHp8STuQSoVqCTFvchtAr2qmZvjCz943TaJ5HXGdeDkUNJtXjkCSqm6SBo",
  "key29": "77CmT7wwaRSbtXBUEWta7Kjy7u2f4viMQXAPLj6w6bFL3eUZCd9mQow8TYwq7V9oaUv4fuzwym24GJoziZZr3yt",
  "key30": "66qK9KttV93hGgV8KS5JKW9jhsJYJD6aaNqTbCTD1mL6pKFMw51eMXWdYfs4vqaNgmZima1CmQXmedZencwqskuj",
  "key31": "2sF54SKguYkttXDK4boty8MzBstvZ1MkCwRH7XFffqno6vUqVgKmCcXRYiSRiVSnfpHuVuvYmDvrzQ6rUPh5bdj",
  "key32": "3L7398hxGsjJ3evvxVzZ1CuEDe18LeqCADGCbY6WVo3CCeyr3wgYd9U3Qynjp6QKUHA2UpwBViewgLRCnXHwWjLH",
  "key33": "5dFHQmsKjZZRH5FUsoHnhXY5eyQanjvLYF1WJWGVrUwNweX7RAdQuFgwZosfLxo2YK6GZcMohoBHheSwzzUWKp7r",
  "key34": "2bzatNPeeqD9RrXeAMJqj55taexrkyt55hJuuCWsXqMwqjLKWmmBEqLCpxot3WpRCaoLj21vmYL94gwbAvsihHUG"
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
