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
    "5hZjKF4CJTNCeE793EZbt7cKTeuXZRSob6fJ9he9WBJ7v2NGLeyzt4cbGXTYky3qtB5pZqvsXXFPtuoZnx8yZrrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMaMgh1bLGZL3uKVGri4FBQEHq969a86wyETkFCDVD2zWtR314dWmB3vYzgKMGnGZSFhThMtmkpxnbr72GEv8WX",
  "key1": "5vedkhMut72VLvDZUbgPmSTfLEncWY5i8DW3FxY5iJNY9wvSKK9Qh8SdGUjDYY8uxHHWsA2vf5zJJhyP6ko9yzBH",
  "key2": "4ESKGH8RiabXiHSpacpLPz3ygmD7CRDt4W1uPDzoBBKVWkiMVGpoU9ePQrTyAvx7WzSfrwRUZrkXsghQiLej4Cse",
  "key3": "4aW1jxCP6Wf43B7sZVnb1P4ckGB2rce1MWsw7HECx73uE2DHveWigBaFTwWRVJGTgjJhfncprxE5wSJPp7f1JF2T",
  "key4": "9KnEWGZHdzWapAPV9S3abWGd5dc1mZskB7YMmnSMGQqjQAfMm6U9x1hyzZ2W9qyXGtmD1CQ9ds3jrR6rTthjRZ4",
  "key5": "3SyU1gXEki1Mze9WqJAYqGyZSafhffuFP37Ro8BUdjDm5NtDETzkGqqcMKrEvoo7cLnw1KT4rrPXxv9GJRq4PVRe",
  "key6": "SpZqRMPwTPpbuBw7xcA19W5woL47GYcjub3UZh9Zc4J3p7JttpCeVq5Y4XeDAJgHaxpbzDmPTiJbteEvP39aHFr",
  "key7": "E1LJYv9t789eZweNhXzKn8GemK4VhiUyueEKNfHW7WRbdVTFPNXY5ppMrxoz8riz68XSniWeGhCgfHGhU6xpMGz",
  "key8": "3vsZinDrUhNApdmphXvmcUA6fvSGkFaTEWPMdQTXuqHQ8Wguksas9FKMsQeQAgJRpt1ETcDLmSEKTZFZYpgBDJnf",
  "key9": "3dEpgEB35duaw6qktgV5KZfCiu24FrfMFHbTzVWtPLwz4FP2jR222Rx912udY73BVFkN1ANAQfQWKa17ocWUzXXB",
  "key10": "61x38U9wUJNwh2eRBGsCzaABpXrs1VtzRpd1PKghB5TmCot3oB7oc9Mh1LEkCxSiygtpomRQSBJQvCvRaScS9kLY",
  "key11": "tZrAEe4iX2uztaTwZndsVyqkhNMXcveGPD6zCD4SfDjqAtgtsS8VtB3iwqVRV7isnzsqFh5bRBAEVwMCXE5GVws",
  "key12": "29pgCNbif2rLBENVEcPg4jCs9r3uoBoJf1GE6XQzVcVNXUbGEUrdbR382AFfxghmGTfAHFiKVZDbHRr6HJoRBCyd",
  "key13": "4byVRHb3DZ9zFSgbP53vV5qM33v74dnwKDhDc37XDuuumaL6kDZUAYWcxar3m4WhyMqMF7SRBG3n4kKLbhZ8954",
  "key14": "NHRw3rSRFNxXFbYoW5uUwq9X4zcWDLmaweTDAqgk1wqBd6LtNDEw5g6jjnrVrKA6Cpn3QRYUmwa34h6bjPhLPdu",
  "key15": "61wJkpwGeWJu135AcUKmwHtcGYiD7SuUJMccXEtgLthnyJPtQXzJN1qgYMfoWwafDy4YhajK1ST3HGLBvfxJJhg1",
  "key16": "ueb4HokaZkr4xbHuwR98io4xWomV7ExWVCjgQoCRX98JjiNs2Ce6fhhua8FuRspWvLCP7LzhcQSVokNmu6TiQDd",
  "key17": "sbKCLQSuLXqVk9tTrdSNyoN5TYGaxNS9GECkzM26d8RBBoFYKTmtqBPPAGfLqhESJaxeHWF16n2uzawjqmyg4BF",
  "key18": "3V1M8YDsjWyS2iXAes7FNNGVaWJxR8jLfwYNp7rzU21nMvMwkcoxM7x2c3NcMevJoT564C4q4o2jyay1fcgQuDv3",
  "key19": "4rcgx2Z2Xg8CzXWsQtPuuWcPd4zaFPvoEfQitNJ97zq8rtPSHTxLU3xR5JT61hCWRaT1jdK46tAmWrc7xiiWDgX3",
  "key20": "4VkatbPh9a5SdUBhbNHAK7xuuK9ABRQHtuG3yzAf7ckw7SpJoG1v8q3FSW8SWBhkoMoNWHqqtqED4HJNkqaNsFCE",
  "key21": "8yBzwEaG3KoirS9r2AY15cejn2CDGGRk3YDA8gvzvQPZJYdJQ1tU3GYtNQQGQmNZwBD7CpDssvnQ94nTi9BiaUr",
  "key22": "4bAWXAR2qAZRNT82hLP6fe7AHMGbaA9WtGyxChJ6pMA611AcF9wK9vXZU6775N5qHEVzBZ2jzPvgUSt3YwhyG7u",
  "key23": "2PRUmgVhomDJdQUVSRjCt5wzRdZVxRvu7hYgACE1b7LhQsfW1TK5zoEtDyaKehcRUswoPwRDyVtyuiKseXpd5sME",
  "key24": "Lt71r4Aqvu1p5DvHanhoad8dxA1bYpUFxXSwSXS7gXHHGTMZcQXd5mff83NVPVChQS8DMFt7c4VpbGaLKTg4BA6",
  "key25": "4KyxVXY7NeuHFHathFNDZKVGXgm9Pe8fm6i9inePziMxYz4qH581y2Aaz5hZwp8NLB1A47uqZw4agAA9ggDgB6pK",
  "key26": "4TZzvfCVfZf6R7tC49FMfLaxQQ5hrsHqSZhXgm3nX85pUs61uSaYThS2F6SpzPEZ9jtigAbL3wCP5ohVxC3nXfzs",
  "key27": "kNuwWB766pxdRRQorjBGgH7tcBsHHrVFoqSupdekvSoWCgdy7UnBcCGpr4Sq8NnHFJaytT6jp3zewrzdwbCkmcc"
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
