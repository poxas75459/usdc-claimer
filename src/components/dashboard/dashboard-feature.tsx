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
    "5tmsQUz5aKJPRccrt2CQssQbRanSmtMrYCyUGGXm3hSpa6faUQedAc2V61KodeAiYm1HB4q3yPXy4rP5WQnpYBhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQ5KWu1TXX8xnvKTctJUkZjXX1WCCQbThXyNXQJSYXDHGmFDY1RedmXEaBF4SXPhFCLmMFWEWR3HnJ3SCzLnfNe",
  "key1": "xKEeL17u4iNH5abzjKUoBc9jTTMBiB4KMDVmJkxQpp7AE21V9qT5FFtNHkWvqpLdckgJej89UG8wtvnCGxAzZvF",
  "key2": "1Z4jYu9qryZ8q5M2yf8gECsrq22EJehwGp6F8oWyfRLDSenFUN4SvThZCPwGwWNmz9gXcByu6o9CsjVb6VD3KZL",
  "key3": "StdwDF4R5rtJpqnDPGeinVdA959Wq7cGztUaCUZSZfHZy4pNY27PU95sQvKqKQdDPWw8fCZ5TKphVJ8H4PXvzV7",
  "key4": "2Zcisv8Tu5y25bj7v4bJxNikyfsqTrGyJoPKEqZkaF5VGmTnxixqUwdCdrojDtjVXRiG6HerpaYjVjRxM5Vjzeyc",
  "key5": "4d3CoMCr4DGnY24VW5kSeQutrDVRzMinLojdr8uG8jg17cAeXxgAr8NP1zbeyyHXEK4rxxYmNmaa2B9ABAcQq2C8",
  "key6": "5hahc9dQgSgCmCDsK1HWcrhAJYHNjvLxHyLJSpCUFZLqY4eaibQidVpfTQ5Q62Fum34d7hDvDGTLJq4D5vup3XgT",
  "key7": "X76Xd2ksPxzJX9JLnPcKj8QVzixsu57JswfMCB62Qbhqv4VH9QQRuhUQC87Xoxfek1wzbXFHnRgctTuPuPCWMLX",
  "key8": "irMjdXUm6RKC5PqnbzB4yYa4UgkPRMs74p2tt4AY86yZM3aMC3DZQwt9RTirgKZDL6CeB8FWUsKxdXj8oDpjRqt",
  "key9": "gLruBPtLYYRfb3sbUNpE5z4vMS3LdJJmmXHTXf7Jc1hDTQ7hd1aa2WpDWL57YGJD7Q8da7twJVa2E8wwz6aTuG8",
  "key10": "4b3abbWqmmUcq3xna2aKW9TWqGBrsMq3cJwqE7ynQuCXoepgCG7JmDHg9kJJxMTQjv2fzrRwrASrEsouif2uyxCx",
  "key11": "59qchZRwx3MMaEZRRfWY9yS3pdErS6nZKBD1NMzx4YqFdz8dqZUKgVzzQMdGbAsQyycpxtdAs2NuB1mrZSwgjRkU",
  "key12": "5wQbC3pmdtkMPM1AtfhVGKpZwm8tTob9ZUrXYHRLkjwRnhiBRgJrJ49yrsWWQsHr4LhztXrR1bqWJ6tpdjmJwmj3",
  "key13": "5xYSZN47KDaoPBU75VbYBm3J3z8sx3hwcVXywkuSm119884fA6ABSzG6wcPpEk7dcFWqopbduKM1iifynF8GLSmr",
  "key14": "eCvo5ChY59JeFuPraLhgSc2HW8g5TehBeR1TL2SSsX8BJe3EtDN4rgBZdwuFmge18JBXAKR9Di1t1sGUnrBGyzs",
  "key15": "5JtxFRX86ABU6ETkhsPdUiBB3WiJPK3ktefprTs8P3qBUHM8EVCTNXQGW8tarD1JtSS2mHZvr4A8B7VAn2rtn75q",
  "key16": "5vPrVQjdqYZ8j33Pq43z1aYwF1qgfhoK6rSoj8ZSkH9eaq7NnpXeYTSmvZV3ScjYShxoXaZ73aMRkTa4qUFf1nfm",
  "key17": "3Viu9SHUYnZDxFzQ8eP7w9GqVb2t2kpBzjSZsBXmxxGuM8WYqyLEgrkSXi78AtqjiQ6rAPQeT9JFGxFw6pBY3R76",
  "key18": "2TURrjcERSWw1e4dR6geDvrxgs8G54YfE8mjtU5w2qv5HKhDkCW22pYzpcizLz9pMCHkirUzs6YArDjsSC3JCt1E",
  "key19": "srSxENB2zvNWjJWwkJiPJTkbVCmm91S7VJWGJWUaRkHzQaQDEFg3VKVcjfQ7iDw2M39HaegqPcUQvyLbr9UK1ax",
  "key20": "2UGujtnw63F8STXQf48A3HrhY3XV5g2W1PzYFwCrv4JzMjzVpeYzwXhxAExoiDzdkhn2GfbUskPisZqj1WD2QVYR",
  "key21": "2xhXwkE9z7P95VdYBscCkkMNcQeNAAsxBdfB65NvVFEqhQL5CzKexEvn7Kt2vXZCfFUJZb7EzLD6e7qZG4ZdMFVL",
  "key22": "66WnsR7FANC6gpoejTA82XcK2wr7VXyPnG2mmwJWaodqumoPek7ek6UaWdJkV2Sz5Q7AHvkeK5eAsqgKUamFP79P",
  "key23": "3vcKjzF5jpxU1aTsGKyMSA1sC7cJQRA6E3KE33CkkZ3fT5dAKUbQaiziE1XAmmGMuL3KfAhWSMiZ72ZL4AJGLd8H",
  "key24": "2o4FrHEL28Bp8TzSCrZ1oLY1ZtE7Guzxw83oKThQAM7dUXzNUvRuhdtztcjdGzuZgYcow9PYmNH7PDd6Vu8qUFBJ",
  "key25": "5hPQv1WvqnUS1LtkrzMoMAUi9Dq4hQBxqWS4Wb3Wo997PC95qqg1bkBpRHwKA2Nh2pcYuBp947djU9XK37SYyyeY"
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
