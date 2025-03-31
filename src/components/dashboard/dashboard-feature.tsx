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
    "2J522A7vAtBfPX73pTGBn7DD5yzzWjn54xpLVazX5wMrZ7u8WMRSDPn6jYNCVugxJYbAnjMyiDzWP7qezbVGJMWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ocKFx8WJzQQY3yrKgomZi94WkmZbgBW9sbYG3XSySVP5x5ZeRhoAhTunpY6FdAveWEjFY34TxEn5jUwwh5vqGj",
  "key1": "2bnjuok4P54rg91oSpfAPM9aZJpZoep61KHVHABvYLBJ11Q3ozsnPrv4bomJzJEiGdZhoAQ5KHDLZybVN2J7GLoR",
  "key2": "4sjrH6GVBbt4j4R8c9RrhjYzaXiq8vQrM8TwMnijXJuZ54q76wepMqgkEpb2Rz3UHn3YXSksyueGfeGL1LSatzpe",
  "key3": "2rWdLTvVjUDR8PSVdN9TvWXzYqZn5D9VzFPeS5DzqJDQqto7bStxDztgjwo1pvvXdcPX5C2rTUNxeYu8GVU6ZBMB",
  "key4": "3ACoMDLb2TiRZ2YEbBBRjy9tY8YaWM9Nmf273eqHgtmWfP7nbbduvtgMojV5LpHwRwPHWRM1xd8336qHf62CkXGY",
  "key5": "23ZkvkkA88ZjroK55QyFDVtbwrgyxJDcDeb1o8HFS4dRkL52dugc2ZBWdoAbojBrRjpNXCtSAexQejftHtgXVphw",
  "key6": "4jasogYoZB7pVo22F63BDarWEhBg2Ca9qMdHBV4uLhRsKLY2GC9FDAx79bPh3uV3snPf1R6EiLCAfLARZvJBapsk",
  "key7": "5M6d7vjENWn9GqqMDkpcsZ4G2qT4Sk1T6Tb2GgficaQZTHgx52TexSF8nU4h9fHLdZY8JFKzb38S8a9Wv4CZkGg3",
  "key8": "4YGSp4Yn12nZEpHthMUQudB5qttA5QyANN9hdNknWE2thJqFmg4XP1GaLVn78jHsmMqY2PuV6BwpUxLy1q7RLmrm",
  "key9": "2VPdWmw2iK5HqSz8EVBSbE6VShJMVKRJxRvYsvbFJBAmoZXpQTGhfmoE83E6C3i7vvzh4McHJ6PcsMwbvEKhBeCW",
  "key10": "2pxbXFwCUoqZtC6FuqKrmAiu3N6cP1RgccBrcLaW712KqmPguodJVxHJxUgNnSnqvLVKNrYjwvZd8qFbLu82tw3r",
  "key11": "2UXgfKSaR9LBv8UbLkfrzrsHhgYXz3GhwZ9UgKNBqNiAEwBMTVS9JBhryRxrLkaPYssXCGSFYQsX9xcae596EMdx",
  "key12": "5DvgAFZasXZZRPD9s8yAGkJG6VYmfKk2dDB82794KhXXtnVeqUUGGKySX4ohYBNogpTyJQQVkGQFe1DxcbwioaxZ",
  "key13": "3N3xHtqZh6H24Wm3VtHMMocbjg4Sw7hyw2Rbz7UT6giKkGg9Cwebgr5ccG1nhwcm8TY25rdwpwU82YozitAfTJn",
  "key14": "5NcNcLhp3wFxv9ssVsiKQb7SLYYb18YfbdDR3EXWRi7hGks6ha65V994gxQvZTV7chgvy2cC679uEMrPkeQ8HyW",
  "key15": "54pxxJUiJ1eFSGAewre2f45bXNrVrhease2fEJZ4DUVNVVxRPtX4YPAFNNzRNoCZVT1T8pUFJwYXRwP72jz4bwwN",
  "key16": "2NRh9ncSADyewAeNRPzpgbr8nCNxHfKj1E1vYniX4n9q9nficsiHPyBUNYtdHSRAppLDnBhYrNbT5Rx24buctqYC",
  "key17": "3Zhfzk8YapmiEr1p3L3zKsD8KJGjP4rzFH1DqrJdKE6TwiL1RYu1HFcEShUL13Uu75ePM4xCAYnLSHjTp5zZJ2zu",
  "key18": "2k1k89AXHmhMSb3rM2upTBAY6TmtU2V389PRGwSuDuYiXHUabFuFYHjVvszjCQL8NPnKPsdTnvbxUTddkKi98WS",
  "key19": "5xKwwjz4KwGo3GGk8PD9h9Pf9AyCaWqzASypQjqztrhck86SXFH3xp8K5QBMLxgJHV1jVznX94eSDRzND5wZuAxM",
  "key20": "62hB8fkPnvpuNyfFYBQeF2b2TULCcrPVW26YaqNBT5NZe4jyFnQua1qQEBgm82Z7B9aR2fKYQoEjmyeVuW9YMZyd",
  "key21": "5VBiGkuAJjGFWSiZjaQhZ5ytyRY1gkhRiVsHdX4uTxhCAEdF7BYwaHknxL7X6kXaFvjVLu8Wwv3hy8ngiqm79bZx",
  "key22": "5fQ6mfakPBZw68QHTZhzNAeiVx7Je6Sq5SrJdvtnb9vWkD8eWQBktBRG5c5eWjFgciYW3aVBNB8ntXAW6T8DdSsP",
  "key23": "36RH4xUrCrnPhcn2KDUhMc5GHBcjG7kRBG6qUdT9m6WjTc4AAJ48GYVmu4vsGojX2ueBEFGR78AZdzEdpESaiCXz",
  "key24": "2wfLq4BUXqpkKv1GfRw8ehrJg5pzv6dZCJTwMyzMav8QzUtAEBySr94sz9HBfNeXhbYiExXdtpdFTgwizMHNLdtf",
  "key25": "inAds4kWwmsbytaXHNB9SRvS6t4dmh1bnQs9XFA17CvepukyPrdUSqtWCCg4vnis6fYWxZ43jmVrTNwftmSPrQD",
  "key26": "eBv1Pepz6VjgJY7n38ZiVfrUsEFH31uW6qKWrc12dMgrioSxJBF2KiYf93yHg48b8kxCFW7KyTTkNFroUfwo6wG",
  "key27": "5VT1R65SGEzQWkoCfGCYqk91gdRAA1433tXn6LvCi1MQBq8d997XzzLvVe7D9opFkgZtNtiC5smaeZs4U7THu9C7",
  "key28": "BHx756DE8b13n2rvZLEFgY8jYmXrQdtMiNSW7jDdachwrdhtwhTA92ECR2hEFU5CaRijTMeFRibRfWoekaH5KLf",
  "key29": "2Hjdy1CMnG1A8Qs2et2biBuz4SRqH95VSYdCtGjviaW4f3yppGrCWdzVYiWyTTzftxSC8VRYxhfneGk7Mba52jJQ"
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
