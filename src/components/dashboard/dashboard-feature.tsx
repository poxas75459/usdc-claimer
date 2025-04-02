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
    "sWxsTG5xJ6eVf29EioJ1LkDDh5Syfy7i9qwLMtfrCkGoUxvX3iKpoAsELkXUJH4v6pcAMK24Zz5jGinkJaFZbDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q19JypzCggtgfUXozQvhF8ZZrLYazm5QVdfRqBCDFaFfJiuQuMND9a2mLkXRPAuhVpkU8SBARv3L4dDvQyZZ6Fn",
  "key1": "44yCfs2h3VrU5kAWFJzEQp3mkUtA7jgTEVk5t2BF7pVN8jS7N4VeByGgs7fydwDFC3DtSCRpSXyh3DS4nR8zKMKS",
  "key2": "4R2LLgPYcdmBm6UKygYPdyBcSBwgAsfj86ow2PAgfxsfDvkxnmThaf91gZvKRBjwuALwPT4Lg1rsw6PXtZMBFWLz",
  "key3": "3k3F95eiYpBb4PSp6BqNAYR91fvLjod7gFFZ68cB4zHb2XPrcStYSWsC5Bvm4wc8kUqambZi5GrhhkrVEFGfVz2k",
  "key4": "311ehaieSgpEfChV5SF1qri42r5xcAZ1ZAx2hiRgBwdBarrhNDXQQ1o9USJD6eUrE4HK2QDQ2HvxREQtA8VWNsi3",
  "key5": "3V1RaoVR1fTDhAuwaLSXoWKj3kbD7cmxycwfgNn8vRJMCQbRbcUbeCXQymDCFAXGrcG3hgV9k67gFNNxwWVvoXf9",
  "key6": "Ty7qhN4Xv478ieQrGwNrfnWFce7AVsWVbNxBNA5v5wJ8XAs8QiraBKYYMHWLH4XWPsqr7JTRTohJCzTanru8Hex",
  "key7": "LB9ZiNGogiv3vJBPZeg58fBoKq9xgkfYGGpi862z23Lz7YfDTmqZAKjJJaUPN5TiXDXXUPM9vmt63EPLXeYMEeK",
  "key8": "4mHK3HqXGHPZweKmvW7ew29v7kbEU5XVh5s2GZfZbSB5mzvtA6oWgFKrzNUNZ6gxEbEeaeYJ2iJ9zpyxnyg59SSo",
  "key9": "4CFUVfnuJ4scH1MTHZ9f4pk99qFfJVeUCzAUETF1BM7XWGa1hVs8knqk2fMUwaJ1yyWbvKVDHED2xqJH5sJY4F5S",
  "key10": "3Vuk5c2kk8VjyzBrR9i5zCwr3ZDhJwFRsAggbkvtS8XKpxiH328w944rSt6gwmztXa5Wn3RCriscdqtnFNuPH4ne",
  "key11": "W3uJm8q1pq2Wz5K51g8mFR3HwSMuC3gSTC4fuVE7ZRtQ1bpQbwpqujKZ5dxxq4TfLPAFiXdtyM58iuwEVqzytSK",
  "key12": "R6Z2EzZfFTqzhcyqcBE7sZd56BNY8CYCvpTRRahCBRxMe7EFByMywcnsxr4s9vHzRQMKr7AGLSXWrCWsotybvMo",
  "key13": "t1NkmTrmtSmHs4qh1cjAidBM8WhtDnEpGQ2DxjU3UGHfpbFqXRbMthxhjZr49dBdDWg2YVzYAdS8xd9kUgKwXB2",
  "key14": "xdCxGCZC654wfZj285sPdwNUrHy7fPvpG6ca2kpEi4BCQgkpWFj9VuUQHgDGjcQJHXvMcywGcLNJp1c5eXrud1a",
  "key15": "475if1JzxgJQLn1hqBpgcELugUnNB3FXhZ69KtrfH1vAcNq6YYZ9LwtGBDfZYddU7PR1DkCGqZunKSUGt5YS2fVa",
  "key16": "5eTG5DMELBcJxJfhbNkXDivVDFbUDSdnQFcpUNSGHFUyuiZuFzKYLagGyv1TTHVbbzxw3BgKQDYyWq9VYxqo7MWH",
  "key17": "61c2UJe8EDy9j3nA1fzR65js6shHycbWEdAw8b5obiCtbQDKS7SkW8ZGB2bemFmbrDQiYd4okNjZcxGqH29HjLoi",
  "key18": "5aZF2Xs2Ev64AwTa7nUh6tTiyDgo6FKwNHZzRth6nz4ACRSfcNM8wrik6Cd2hc7QjTmCM41e4VPKCGyrxSihFKGk",
  "key19": "3mBdJpzYrz2oHswg5E1j2zwdCt24yFEwGTydjjqYjsMpUpM9vWtssPnGAspgf8QhvBgE6XSx2dKpYpJaSwaF6aMN",
  "key20": "2SKJMfBtLERx6W5NAhQVwX3ydLyx5kfp48Rr8JKob5HHWkpToFRx6yNZBNL3CWJPq2npffdgYf33Aeo4Lqhxf3Bb",
  "key21": "UxWFfx8LyESwsXJfWMA29zeyVGKULgzuJKzydi5C2R6tDiguDP42B7UcCYfPB1k3DFvj1ULtQ9T6y8FVaB4hTQW",
  "key22": "2wimp4MxGyJtPUu4AHtHi31JKUBdp3Yih7rzcfRySo3RNskJSYrCUfrKVopj7d7tps1wwMkTxzZXEoVYgYd32VyU",
  "key23": "28Xon7QgUBZb3efkivaYJFbuRFbyfzvV4H4dDCP3vE7hGuTrp32Gdqy5MwLsGENNKK8bJEMa6XxRAhoFtB1H6ML7",
  "key24": "3BerefZL3EVqoFeK9JwbQCGRRB2knvfKhxQvTTiapV3n9ZsRWX2mVbC5GCvv69PQp6ZmKLof6r9ejtAYuenpufTW",
  "key25": "2RcKrG6NTupRdFpyAqanWcVv2so9gLZ8Pref22Tn5oQHhVmsTL7DoReqCpP7ajJD9njQW8CZ9QFgJ6cx5Uvu5Mkr",
  "key26": "2i6v2CwUxuF4bbz4b57awV8YCbMEen2tAFm1xjaHVi8BYBdvnfjn8d3xoe1TTrssiWYik4KbsQdhEXdcGDfHKf3k",
  "key27": "3qpkEj1dAgLQdwPxvXSLPRhKMfm7qV6Qex884CNVJQFFQGp8G4CM3HoFWyWLxHBiuLV9EZ8kPWF8VYcBWJRzn52q",
  "key28": "3y8eUJdWW1uFHAzb3VCiarpbe5pJJq9xhJ27nWSyAqaDvyd9ZBJNfag93kmFwCYqetaiQ7EcLqtJhroGFvBzDtKi",
  "key29": "35XyCAXuRj99cCT6RM56X18zEPw94vMbXZUhhKWv9JutRG9N9EdPhDhpoiSvvhhfEr5Y7A519uTaDFq24jSrPAc9",
  "key30": "2RugxqH9HSrpPTksgxTcEGCN7EEiGA8Y8S4HjzrCwL5HJvcFf4Nsvzm7ud8c3hE91vSwv6WZEQqZQuXq822KvpuA",
  "key31": "5dBhfsktP2W6Fuo7dyCC3qiGQc28V87yGgH6fESWaRuHH1tqqX9hqe8W5Y1Cy2uWH8Bv4f9cwYc9d5rFkdKfHMPf",
  "key32": "3HgdyLXQrRsRd9YMt5JqauM5yk3naRUNmzfqTfSSqkLwULARYXUVqWtgkkKqxp4KBDj8nph5HDFCqgW6hiFj4kc4"
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
